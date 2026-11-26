/* RecompWatch × PayGate.to — no-login crypto checkout, straight from the browser.
   Same calls as PayGate's official SDK (hosted multi-coin mode): POST /crypto/multi-hosted-wallet.php
   → open checkout.paygate.to/crypto/hosted.php?payment_token=…  No account, no API key, no KYC.
   EVERY payment on the site (website donation, project donations, paid files) uses the wallets below. */
(()=>{
const CFG=window.RW_PAY={
  /* ▼▼▼ PASTE YOUR WALLET ADDRESSES HERE — one per network, leave '' to switch a network off ▼▼▼ */
  wallets:{
    evm:'',          // ONE address covers ETH, USDT, USDC… on Ethereum, BNB Chain, Polygon, Arbitrum, Base, Optimism, Avalanche…
    btc:'',
    solana:'',
    trc20:'',        // Tron (USDT-TRC20)
    ltc:'', doge:'', bitcoincash:'', ton:'', xmr:'494JGFr6rkpddPY1tFQAQk8VZ7zMynnqNa5AhNKzaD7i9jWQLTzzAL6Yp8UvBZo3SFNCmE5xL5LfT9CH3PtFcqKK8eUXUe4', zec:'', xrp:''
  },
  /* ▲▲▲ nothing else needs touching ▲▲▲ */
  apiHost:'https://dry-morning-3c35.cantoosimen5.workers.dev',            // swap for your free dedicated endpoint (api-yourshop-….paygate.to) if you ever get blocked
  checkoutHost:'checkout.paygate.to',
  currency:'USD', presets:[3,5,10,25], minAmount:1, addFees:true,   // addFees: buyer pays the network fee
  theme:'#2ee6a6',
  statusCoins:['polygon/usdc','polygon/usdt','erc20/usdt','erc20/usdc','bep20/usdt','bep20/usdc','trc20/usdt','sol/usdc','sol/usdt','sol/sol','btc','eth']
};
const E=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const usd=n=>'$'+(Math.round(n*100)/100).toFixed(2).replace(/\.00$/,'');
const wallets=()=>Object.fromEntries(Object.entries(CFG.wallets).map(([k,v])=>[k,String(v||'').trim()]).filter(x=>x[1]));
const ready=()=>Object.keys(wallets()).length>0;
const rnd=()=>Array.from(crypto.getRandomValues(new Uint8Array(5)),b=>b.toString(16).padStart(2,'0')).join('');
const load=()=>{try{return JSON.parse(localStorage.getItem('rw-orders')||'[]')}catch{return[]}};
const store=a=>{try{localStorage.setItem('rw-orders',JSON.stringify(a.slice(-60)))}catch{}};
const upd=o=>{const a=load(),i=a.findIndex(x=>x.id===o.id);if(i>=0)a[i]=o;else a.push(o);store(a)};
const isPaid=ref=>load().some(o=>o.ref===ref&&o.paid);
const pending=ref=>load().some(o=>o.ref===ref&&!o.paid&&Date.now()-o.t<864e5*3);
const nice=e=>/failed to fetch|networkerror|load failed|cors/i.test(e.message)?'Your browser could not reach PayGate (offline or blocked). Try again, or see the TUTORIAL for the dedicated-endpoint fix.':e.message;

async function create(ref,amount){
  if(!ready())throw new Error('Payments are not switched on yet.');
  const a=Math.round(Number(amount)*100)/100;
  if(!(a>=CFG.minAmount))throw new Error('Minimum is '+usd(CFG.minAmount)+'.');
  if(!/^https?:$/.test(location.protocol))throw new Error('Open the site from its https:// address (GitHub Pages) — PayGate needs a real callback URL.');
  const id=ref+'-'+Date.now().toString(36)+rnd();                       // unique per order → PayGate makes a fresh address each time
  const cb=new URL('donate.html',location.href);cb.search='';cb.hash='';cb.searchParams.set('order',id);
  const r=await fetch(`https://${CFG.apiHost}/crypto/multi-hosted-wallet.php`,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},
    body:JSON.stringify({...wallets(),fiat_amount:a,fiat_currency:CFG.currency,callback:cb.href})});
  let j;try{j=await r.json()}catch{throw new Error('PayGate answered with something unexpected (HTTP '+r.status+').')}
  if(!j.payment_token)throw new Error(j.error||j.message||'PayGate refused the request — check the wallet addresses in js/paygate.js.');
  const q=c=>encodeURIComponent(c),bg=getComputedStyle(document.documentElement).getPropertyValue('--bg').trim()||'#090c11';
  const url=`https://${CFG.checkoutHost}/crypto/hosted.php?payment_token=${j.payment_token}&add_fees=${CFG.addFees?1:0}&theme=${q(CFG.theme)}&button=${q(CFG.theme)}&background=${q(bg)}`;
  const o={id,ref,amount:a,ipn:j.ipn_token||'',url,t:Date.now(),paid:false};upd(o);return o;
}
async function check(o){
  if(!o.ipn)return false;
  const hit=await Promise.all(CFG.statusCoins.map(c=>fetch(`https://${CFG.apiHost}/crypto/payment-status.php?ipn_token=${o.ipn}&ticker=${encodeURIComponent(c)}`).then(r=>r.json()).then(j=>String(j.status||'').toLowerCase()==='paid'?j:null).catch(()=>null)));
  const j=hit.find(Boolean);if(!j)return false;
  o.paid=true;o.coin=j.coin||'';o.tx=j.txid_in||'';upd(o);return true;
}
async function recheck(ref){const o=load().filter(x=>x.ref===ref&&!x.paid).pop();if(!o){toast('No pending payment found on this device.');return false}
  toast('Checking the blockchain…');const ok=await check(o);toast(ok?'✓ Payment found — unlocked!':'Not seen yet. Confirmations can take a few minutes.');return ok}

/* ---------- UI ---------- */
let M=null,T=null;
const onKey=e=>{if(e.key==='Escape')close()};
function close(){clearInterval(T);T=null;if(M){M.remove();M=null}document.removeEventListener('keydown',onKey)}
function modal(html){close();M=document.createElement('div');M.className='pm';M.innerHTML=`<div class="pm-b" role="dialog" aria-modal="true"><button class="pm-x" aria-label="Close">×</button>${html}</div>`;
  M.addEventListener('click',e=>{if(e.target===M||e.target.closest('.pm-x'))close()});document.body.appendChild(M);document.addEventListener('keydown',onKey);return M}
function toast(t){const d=document.createElement('div');d.className='pm-t';d.textContent=t;document.body.appendChild(d);setTimeout(()=>d.classList.add('out'),2600);setTimeout(()=>d.remove(),3100)}
function burst(){const h=document.createElement('div');h.className='pm-fx';h.innerHTML=Array.from({length:28},(_,i)=>`<i style="--x:${Math.random()*100}%;--d:${(Math.random()*.5).toFixed(2)}s;--r:${Math.random()*720-360}deg;--c:${['#2ee6a6','#3b82f6','#ffb454','#a3e635','#22d3c5'][i%5]}"></i>`).join('');document.body.appendChild(h);setTimeout(()=>h.remove(),2600)}

function open(o){
  const fixed=o.price>0,title=o.title||'Pay';
  if(!ready()){modal(`<div class="pm-k">Almost there</div><h3>${E(title)}</h3><p class="by">Crypto payments aren't switched on yet. The site owner needs to paste a wallet address into <code>js/paygate.js</code>.</p>`);return}
  const def=o.amount||CFG.presets[Math.min(1,CFG.presets.length-1)];
  const m=modal(`<div class="pm-k">${fixed?'🔒 Premium file':'♥ Donation'}</div><h3>${E(title)}</h3>${o.note?`<p class="by">${E(o.note)}</p>`:''}
    ${fixed?`<div class="pm-amt"><b>${usd(o.price)}</b><span>${E(CFG.currency)}</span></div>`
    :`<div class="pm-chips">${CFG.presets.map(a=>`<button type="button" class="chip${a===def?' on':''}" data-a="${a}">${usd(a)}</button>`).join('')}</div><label class="pm-c">Or any amount (${E(CFG.currency)})<input type="number" min="${CFG.minAmount}" step="0.01" inputmode="decimal" value="${def}"></label>`}
    <button type="button" class="btn pri pm-go">Pay with crypto →</button>
    <p class="pm-s">No account, no KYC. Pick your coin on PayGate's secure page — BTC, ETH, USDT, USDC, SOL, LTC, XMR and more.</p><div class="pm-st" aria-live="polite"></div>`);
  const inp=m.querySelector('input'),st=m.querySelector('.pm-st'),go=m.querySelector('.pm-go');
  m.querySelectorAll('.pm-chips .chip').forEach(c=>c.onclick=()=>{inp.value=c.dataset.a;m.querySelectorAll('.pm-chips .chip').forEach(x=>x.classList.toggle('on',x===c))});
  inp&&(inp.oninput=()=>m.querySelectorAll('.pm-chips .chip').forEach(x=>x.classList.toggle('on',x.dataset.a===inp.value)));
  go.onclick=async()=>{
    const amt=fixed?o.price:parseFloat(inp.value),tab=window.open('','_blank');
    go.disabled=true;go.textContent='Creating your checkout…';st.className='pm-st';st.textContent='';
    try{
      const ord=await create(o.ref,amt);
      if(tab){tab.opener=null;tab.location.href=ord.url}
      wait(m,ord,o);
    }catch(e){if(tab)tab.close();go.disabled=false;go.textContent='Pay with crypto →';st.className='pm-st bad';st.textContent=nice(e)}
  };
}
function wait(m,ord,o){
  m.querySelector('.pm-b').innerHTML=`<button class="pm-x" aria-label="Close">×</button><div class="pm-k">${usd(ord.amount)} ${E(CFG.currency)}</div><h3>Complete the payment in the PayGate tab</h3>
    <div class="pm-spin"></div><p class="by">Choose your coin, send the exact amount, and keep this window open. We'll notice when it lands.</p>
    <p><a class="btn sm" href="${E(ord.url)}" target="_blank" rel="noopener">Re-open checkout ↗</a> <button type="button" class="btn sm dark pm-chk">I've paid — check now</button></p><div class="pm-st" aria-live="polite"></div>`;
  const st=m.querySelector('.pm-st');let n=0,busy=false;
  const run=async manual=>{if(busy)return;busy=true;if(manual){st.className='pm-st';st.textContent='Checking…'}
    const ok=await check(ord);busy=false;
    if(ok)return done(m,ord,o);
    if(manual){st.textContent='Not seen yet — confirmations can take a few minutes.'}
    if(++n>40){clearInterval(T)}};
  m.querySelector('.pm-chk').onclick=()=>run(true);
  m.querySelector('.pm-x').onclick=close;
  clearInterval(T);T=setInterval(()=>run(false),30000);
}
function done(m,ord,o){clearInterval(T);burst();
  m.querySelector('.pm-b').innerHTML=`<button class="pm-x" aria-label="Close">×</button><div class="pm-ok">✓</div><h3>${o.price>0?'Unlocked!':'Thank you!'}</h3><p class="by">${o.price>0?'Your file is ready on the Downloads page.':'Your support keeps the tracker — and the builders — going.'}</p><p><button type="button" class="btn pri pm-fin">Done</button></p>`;
  m.querySelector('.pm-x').onclick=m.querySelector('.pm-fin').onclick=()=>{close();o.onPaid&&o.onPaid()}}

window.RWPay={cfg:CFG,ready,open,isPaid,pending,recheck,toast};
})();
