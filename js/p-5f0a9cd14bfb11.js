/* RecompWatch admin — edit in the browser, then download the new data/data.js */
const D=JSON.parse(JSON.stringify(window.RW_DATA)),$=(s,r=document)=>r.querySelector(s);let cur=null;D.paid=D.paid||[];
const split=t=>t.split('\n').map(s=>s.trim()).filter(Boolean),lines=a=>(a||[]).join('\n');
const dec=v=>{try{return v?decodeURIComponent(escape(atob(v))):''}catch{return''}},enc=v=>v?btoa(unescape(encodeURIComponent(v))):'';
const esc=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const F=[['id','ID (used in the page URL)','t'],['name','Name','t'],['by','Owner / credit (e.g. user/repo)','t'],['stage','Stage','s'],['score','Progress % (0-100)','n'],['url','Repository / website URL','t'],['summary','Summary','a'],['tags','Tags (comma separated)','c'],['works','What works (one per line)','l'],['blocks',"What's blocking (one per line)",'l'],['metrics','Detail metrics (one per line: Name | percent | label)','m'],['videos','Videos / proof links (one per line: URL  or  Label | URL)','v'],['updates','Updates (one per line: YYYY-MM-DD | text)','u'],['links','Extra links (one per line: Label | URL)','k'],['download','Free download URL (blank = the repo\'s GitHub /releases)','t'],['paidPrice','Paid file: price in USD (used ONLY when the project has no GitHub URL)','t'],['paidLink','Paid file: paste the private file link here (Mega / Drive / …). Buyers see it only after paying','x'],['avatar','Avatar image path or URL','t'],['stars','Stars','t'],['forks','Forks','t'],['issues','Open issues','t'],['commits','Activity','t'],['pushed','Last push (e.g. 3h ago)','t'],['reviewed','Reviewed (date)','t'],['archived','Archived (no longer ranked)','b'],['archivedNote','Archive note','t']];
const pairs=(a,f)=>(a||[]).map(f).join('\n');
const val=(p,k,t)=>t==='x'?dec(p[k]):t==='c'?p[k].join(', '):t==='l'?lines(p[k]):t==='u'?pairs(p[k],u=>u.date+' | '+u.text):t==='k'?pairs(p[k],u=>u.label+' | '+u.url):t==='m'?pairs(p[k],m=>[m.name,m.pct,m.label].join(' | ')):t==='v'?pairs(p[k],v=>typeof v==='string'?v:(v.label?v.label+' | ':'')+v.url):p[k]??'';
const sp=s=>{const i=s.indexOf('|');return i<0?[s.trim(),'']:[s.slice(0,i).trim(),s.slice(i+1).trim()]};
function parse(t,v){if(t==='x')return enc(v.trim());if(t==='n')return parseFloat(v)||0;if(t==='c')return v.split(',').map(s=>s.trim()).filter(Boolean);if(t==='l')return split(v);
 if(t==='u')return split(v).map(s=>{const[a,b]=sp(s);return{date:a,text:b}});if(t==='k')return split(v).map(s=>{const[a,b]=sp(s);return{label:a,url:b}});
 if(t==='m')return split(v).map(s=>{const[a,b,c]=s.split('|').map(x=>x.trim());return{name:a,pct:parseFloat(b)||0,label:c||''}});
 if(t==='v')return split(v).map(s=>{const[a,b]=sp(s);return /^https?:/i.test(a)||!b?{url:s.trim(),label:''}:{label:a,url:b}});return v}
/* Bulk price: same rule the site uses (no download URL and no github.com/owner/repo URL = paid-file project) */
const isPaidProj=p=>!(p.download||/github\.com\/[^/]+\/[^/]+/.test(p.url||''));
function bulk(){const n=D.projects.filter(isPaidProj).length,c=$('#bcount');if(c)c.textContent=n+' project'+(n===1?'':'s')+' without a GitHub link'}
function bulkApply(){const v=$('#bprice').value.trim(),n=parseFloat(v.replace(/[^\d.]/g,''));
 if(!(n>0))return alert('Enter a price above 0 (number, e.g. 9).');
 const t=D.projects.filter(isPaidProj);if(!t.length)return alert('No projects without a GitHub link.');
 if(!confirm('Set the price of '+t.length+' project(s) without a GitHub link to $'+n+'?'))return;
 t.forEach(p=>p.paidPrice=String(n));form();bulk();$('#bmsg').textContent='✓ '+t.length+' price(s) set to $'+n+'. Now click Download data.js.'}
function list(){bulk();$('#pl').innerHTML=D.projects.map((p,i)=>`<div class="pi ${i===cur?'on':''}" data-i="${i}"><span>${esc(p.name)}</span><span>${p.score}%</span></div>`).join('');document.querySelectorAll('.pi').forEach(e=>e.onclick=()=>{cur=+e.dataset.i;list();form()})}
function form(){const p=D.projects[cur];if(!p){$('#fm').innerHTML='<div class="empty">Pick a project or add a new one.</div>';return}
 $('#fm').innerHTML=`<div class="box"><h3>Edit: ${esc(p.name)}</h3><div class="f">${F.map(([k,l,t])=>t==='b'?`<label><span><input type="checkbox" data-k="${k}" ${p[k]?'checked':''}> ${l}</span></label>`:t==='s'?`<label>${l}<select data-k="${k}">${[['race','Race (ranked)'],['private','Private build (not ranked)'],['watch','Watchlist']].map(o=>`<option value="${o[0]}" ${p[k]===o[0]?'selected':''}>${o[1]}</option>`).join('')}</select></label>`:`<label>${l}${['a','l','u','k','m','v'].includes(t)?`<textarea data-k="${k}" data-t="${t}">${esc(val(p,k,t))}</textarea>`:`<input data-k="${k}" data-t="${t}" value="${esc(val(p,k,t))}" ${t==='n'?'type="number" step="0.1" min="0" max="100"':''}>`}</label>`).join('')}</div><p style="margin-top:14px"><button class="btn" id="del">🗑 Delete project</button></p></div>`;
 document.querySelectorAll('#fm [data-k]').forEach(e=>e.oninput=e.onchange=()=>{p[e.dataset.k]=e.type==='checkbox'?e.checked:parse(e.dataset.t,e.value);list()});
 $('#del').onclick=()=>{if(confirm('Delete '+p.name+'?')){D.projects.splice(cur,1);cur=null;list();form()}}}
function paidUI(){$('#paid').innerHTML=D.paid.map((f,i)=>`<div class="box" style="background:var(--bg2)"><div class="f">${[['title','Title','title'],['desc','Description','desc'],['price','Price in USD (number, e.g. 9)','price'],['link','Private file link (Mega / Drive / …) — shown only after payment','link']].map(([k,l,v])=>`<label>${l}<input data-i="${i}" data-k="${k}" value="${esc(k==='link'?dec(f.k):f[v]||'')}"></label>`).join('')}<p><button class="btn sm" data-rm="${i}">Remove</button></p></div></div>`).join('');
 document.querySelectorAll('#paid input').forEach(e=>e.oninput=()=>{const f=D.paid[+e.dataset.i];if(e.dataset.k==='link')f.k=enc(e.value.trim());else f[e.dataset.k]=e.value});document.querySelectorAll('[data-rm]').forEach(b=>b.onclick=()=>{D.paid.splice(+b.dataset.rm,1);paidUI()})}
$('#addpaid').onclick=()=>{D.paid.push({id:'f'+Date.now()%1e7,title:'New file',desc:'',price:'',k:''});paidUI()};
$('#add').onclick=()=>{D.projects.unshift({id:'new-project-'+Date.now()%1e5,stage:'race',name:'New project',by:'',url:'',avatar:'',tags:[],summary:'',score:0,works:[],blocks:[],metrics:[],stars:'',forks:'',issues:'',commits:'',pushed:'',reviewed:new Date().toISOString().slice(0,10),archived:false,archivedNote:'',download:'',paidPrice:'',paidLink:'',videos:[],updates:[],links:[]});cur=0;list();form()};
$('#sd').value=D.site.release.slice(0,16);$('#iss').value=D.site.issues||'';$('#hist').value=(D.site.history||[]).map(h=>h.date+' | '+h.score).join('\n');
$('#dl').onclick=()=>{D.site.release=new Date($('#sd').value).toISOString();D.site.issues=$('#iss').value.trim();delete D.site.donateUrl;delete D.site.contact;
 D.site.history=split($('#hist').value).map(s=>{const[a,b]=sp(s);return{date:a,score:parseFloat(b)||0}});
 const bad=D.paid.filter(f=>!(parseFloat(String(f.price).replace(/[^\d.]/g,''))>0)||!f.k).map(f=>f.title);
 if(bad.length)return alert('Every premium file needs a price and a file link. Fix:\n\n'+bad.join('\n'));
 const js='/* RecompWatch data — edit via the admin page (or by hand). Payments: PayGate.to, wallets live in js/paygate.js */\nwindow.RW_DATA = '+JSON.stringify(D,null,1)+';\n';
 const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([js],{type:'text/javascript'}));a.download='data.js';a.click()};
$('#bgo').onclick=bulkApply;list();form();paidUI();
