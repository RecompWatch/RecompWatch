/* RecompWatch data — edit this file (or use admin.html) to add/change projects, progress, links, videos, donations. */
window.RW_DATA = {
 "site": {
  "name": "RecompWatch",
  "release": "2026-11-23T14:36:00Z",
  "sourceUrl": "https://www.xda-developers.com/gta-6-xbox-executable-leaked-opening-door-for-pc-recompilation-projects-begin-testing/",
  "donate": [
   {
    "label": "Ko-fi",
    "url": "https://ko-fi.com/YOUR_NAME",
    "note": "One-off or monthly, no account needed"
   },
   {
    "label": "GitHub Sponsors",
    "url": "https://github.com/sponsors/YOUR_NAME",
    "note": "Monthly support"
   },
   {
    "label": "PayPal",
    "url": "https://paypal.me/YOUR_NAME",
    "note": "Direct one-off tip"
   }
  ],
  "issues": "https://github.com/YOUR_NAME/YOUR_REPO/issues",
  "history": [
   {
    "date": "2026-11-21",
    "score": 19.7
   },
   {
    "date": "2026-11-22",
    "score": 26.1
   },
   {
    "date": "2026-11-23",
    "score": 59.8
   },
   {
    "date": "2026-11-24",
    "score": 72
   },
   {
    "date": "2026-11-25",
    "score": 83.1
   },
   {
    "date": "2026-11-26",
    "score": 91.5
   }
  ],
  "crypto": [
   {
    "coin": "BTC",
    "network": "Bitcoin",
    "address": "YOUR_BTC_ADDRESS"
   },
   {
    "coin": "USDT",
    "network": "TRC20 (Tron)",
    "address": "YOUR_USDT_TRC20_ADDRESS"
   },
   {
    "coin": "ETH",
    "network": "Ethereum / ERC20",
    "address": "YOUR_ETH_ADDRESS"
   }
  ]
 },
 "milestones": [
  {
   "at": 0,
   "icon": "🧰",
   "name": "Groundwork",
   "desc": "Loader, system libraries, shader translation and graphics layer, built before the executable exists. Fills 0–10%.",
   "sub": ""
  },
  {
   "at": 10,
   "icon": "⚙️",
   "name": "Exe runs",
   "desc": "GTA VI's executable is mapped, its imports resolve and its own code starts running.",
   "sub": ""
  },
  {
   "at": 20,
   "icon": "🖥️",
   "name": "First frame",
   "desc": "The game draws its first real frames: logos, a loading screen or the intro.",
   "sub": ""
  },
  {
   "at": 30,
   "icon": "🎛️",
   "name": "Main menu",
   "desc": "The title screen or first menus are reached and respond to input.",
   "sub": ""
  },
  {
   "at": 40,
   "icon": "🗺️",
   "name": "In the world",
   "desc": "Story mode loads into the game world and draws it, however broken.",
   "sub": ""
  },
  {
   "at": 50,
   "icon": "🎮",
   "name": "Playable",
   "desc": "You control a character in the world: move around, with the HUD or pause menu working.",
   "sub": "Story progress · Rendering · Performance · Stability"
  },
  {
   "at": 100,
   "icon": "🏁",
   "name": "Complete",
   "desc": "The whole game, finished: looks like the console, runs well, does not crash.",
   "sub": ""
  }
 ],
 "groundwork": [
  {
   "icon": "📦",
   "name": "Loader & system libraries",
   "pts": 2,
   "desc": "PE loading plus stand-ins for console-only DLLs (kernelx, xgameruntime, xmem…)."
  },
  {
   "icon": "✨",
   "name": "Shader translation",
   "pts": 2.8,
   "desc": "Share of GTA VI's ~26,500 precompiled RDNA2 shaders translated to PC formats (SPIR-V / DXIL)."
  },
  {
   "icon": "🎮",
   "name": "Graphics layer",
   "pts": 3.2,
   "desc": "Xbox D3D12.X → PC D3D12 / Vulkan: devices, command lists, pipelines, draws, present."
  },
  {
   "icon": "🧪",
   "name": "Proven on another game",
   "pts": 2,
   "desc": "The same layer already runs a different retail Xbox Series game."
  }
 ],
 "projects": [
  {
   "id": "cgbj",
   "stage": "race",
   "name": "CGBJ",
   "by": "codec-d/cool_fox",
   "url": "https://github.com/codec-d/cool_fox",
   "avatar": "assets/img/avatars/cgbj.png",
   "tags": [
    "Compatibility layer",
    "GTA VI only",
    "NVIDIA",
    "Verified by RecompWatch",
    "Repo gone (404)"
   ],
   "summary": "Public VIctory/XCL build, RecompWatch-verified. Owner rates story progress at 80%, rendering 0.85 and stability 0.85. It averages 25 fps on NVIDIA with 8 GB system RAM and 16 GB VRAM.",
   "score": 91.5,
   "metrics": [
    {
     "name": "Story progress",
     "pct": 80.0,
     "label": "Half the story"
    },
    {
     "name": "Rendering",
     "pct": 85.0,
     "label": "Close to the console, minor glitches"
    },
    {
     "name": "Performance",
     "pct": 83.3,
     "label": "25 FPS"
    },
    {
     "name": "Stability",
     "pct": 85.0,
     "label": "Rarely crashes"
    }
   ],
   "works": [
    "Owner ratings: 80% story, rendering 0.85, stability 0.85",
    "25 fps gameplay average on NVIDIA",
    "Public GPL-3.0 source at codec-d/cool_fox"
   ],
   "blocks": [
    "Minor visual glitches remain",
    "Gameplay does not sustain 30 fps; 25 fps is the reported average",
    "Independent reproduction and README verification are still needed"
   ],
   "stars": "293",
   "forks": "82",
   "issues": "1",
   "commits": "100+ commits / 7d",
   "pushed": "pushed 4h ago",
   "reviewed": "2026-11-26",
   "archived": false,
   "archivedNote": "",
   "download": "",
   "donate": "",
   "crypto": [],
   "videos": [
    {
     "url": "https://v.redd.it/137k5pow5w3i1",
     "label": "Watch video"
    }
   ],
   "updates": [
    {
     "date": "2026-11-24",
     "text": "Joined the board at #1 with 72%: a verified build that moves a player around the world, very slowly. Code is private."
    }
   ],
   "links": []
  },
  {
   "id": "avatarmanz",
   "stage": "race",
   "name": "AvatarManz",
   "by": "avatarmanz/VIctory-7900XTX",
   "url": "https://github.com/avatarmanz/VIctory-7900XTX",
   "avatar": "assets/img/avatars/avatarmanz.jpg",
   "tags": [
    "Compatibility layer",
    "GTA VI only",
    "AMD",
    "Verified by RecompWatch"
   ],
   "summary": "AvatarManz's fork of VIctory, tuned for speed on an AMD Radeon RX 7900 XTX. It brings victory-fork's, DexNom's and Belobug's work together on VIctory and adds its own speed-ups: the game's draw calls translated on eight threads of its own, frames prepared on a separate thread, and textures uploaded on their own queue. RecompWatch has verified it: GTA VI runs at about 16 fps on average in game, the highest average on our board, with sound, as far into the story as the leading builds and with a picture close to the console. Its README measures 13-22 fps indoors and on the first boat mission, and a 41-minute session without a crash.",
   "score": 83.1,
   "metrics": [
    {
     "name": "Story progress",
     "pct": 50.0,
     "label": "First act"
    },
    {
     "name": "Rendering",
     "pct": 80.0,
     "label": "Close to the console, minor glitches"
    },
    {
     "name": "Performance",
     "pct": 53.3,
     "label": "16 FPS"
    },
    {
     "name": "Stability",
     "pct": 90.0,
     "label": "Stable"
    }
   ],
   "works": [
    "Platform: AMD Radeon RX 7900 XTX, Intel Core i9-12900K, 64 GB RAM, Windows 11",
    "About 16 fps on average in game, verified by RecompWatch: the highest average on our board. Its README: 13-20 fps indoors in the prologue, 19-22 on the first boat mission, 30 in menus",
    "41 minutes in one session without a crash (its README); sound works",
    "Brings victory-fork, DexNom and Belobug together on VIctory, history and credits kept; builds from source, no prebuilt downloads; GPL-3.0-or-later"
   ],
   "blocks": [
    "Busy street chases drop to 6-10 fps, with single frames far longer; outdoors on foot runs at about 11-17 fps (its README)",
    "Trees, plants and far buildings flicker outdoors in places, dim rooms are too dark without ray tracing, and new textures appear late",
    "Uses 40-46 GB of memory (64 GB of RAM recommended); tested on one PC only, not yet reproduced by others"
   ],
   "stars": "1.4k",
   "forks": "401",
   "issues": "105",
   "commits": "100+ commits / 7d",
   "pushed": "pushed 1h ago",
   "reviewed": "2026-11-25",
   "archived": false,
   "archivedNote": "",
   "download": "",
   "donate": "",
   "crypto": [],
   "videos": [
    {
     "url": "https://www.reddit.com/r/FitGirlRepack/comments/1y5k8xu/actually_playable/",
     "label": "Video on Reddit"
    }
   ],
   "updates": [],
   "links": []
  },
  {
   "id": "belobug",
   "stage": "race",
   "name": "Belobug",
   "by": "Belobug/VIctory-Belobug-AMD",
   "url": "https://github.com/Belobug/VIctory-Belobug-AMD",
   "avatar": "assets/img/avatars/belobug.png",
   "tags": [
    "Compatibility layer",
    "GTA VI only",
    "AMD",
    "Verified by RecompWatch"
   ],
   "summary": "Belobug's VIctory fork runs on AMD Radeon; RecompWatch saw its near-console open world and mission gameplay at about 8 fps. The owner now reports ray tracing working on AMD; the README still describes the ray-tracing path as failing.",
   "score": 79.0,
   "metrics": [
    {
     "name": "Story progress",
     "pct": 50.0,
     "label": "First act"
    },
    {
     "name": "Rendering",
     "pct": 85.0,
     "label": "Close to the console, minor glitches"
    },
    {
     "name": "Performance",
     "pct": 26.7,
     "label": "8 FPS"
    },
    {
     "name": "Stability",
     "pct": 70.0,
     "label": "Rarely crashes"
    }
   ],
   "works": [
    "Platform: AMD Radeon RX 9070 XT 16 GB, Ryzen 7 9800X3D, 64 GB RAM, Windows 11",
    "The open world looks close to the retail game: lit, with textures, people, vehicles, vegetation, water and sky",
    "Owner reports ray-traced lighting now working on AMD",
    "Plays through missions and rarely crashes; built on VIctory's main and upstream pull requests"
   ],
   "blocks": [
    "About 8 fps; its README reports 5-7 fps (less while driving) and calls that \"not playable yet\"",
    "Ray tracing is reported working on AMD; the README says enabling its ray-tracing path still ends in device removal",
    "Needs about 22 GB of RAM and more than 16 GB of video memory; tested on one AMD PC only, nothing on NVIDIA or Intel yet"
   ],
   "stars": "1.7k",
   "forks": "304",
   "issues": "208",
   "commits": "100+ commits / 7d",
   "pushed": "pushed 10h ago",
   "reviewed": "2026-11-26",
   "archived": false,
   "archivedNote": "",
   "download": "",
   "donate": "",
   "crypto": [],
   "videos": [
    {
     "url": "https://www.reddit.com/r/FitGirlRepack/comments/1y55bgm/first_pc_trickshot_by_belo/",
     "label": "First PC Trickshot"
    }
   ],
   "updates": [],
   "links": []
  },
  {
   "id": "dexnom",
   "stage": "race",
   "name": "DexNom",
   "by": "DexNom/VIctory",
   "url": "https://github.com/DexNom/VIctory",
   "avatar": "assets/img/avatars/dexnom.jpg",
   "tags": [
    "Compatibility layer",
    "GTA VI only",
    "AMD",
    "Verified by RecompWatch"
   ],
   "summary": "DexNom Runtime, a fork of VIctory for AMD Radeon, tested on a Radeon RX 7900 XTX. It builds on ZSlayerHQ's victory-world-runtime with its own fixes for shaders, texture streaming and GPU memory. RecompWatch has seen it running with ray-traced lighting working, the first AMD build on our board to get it: the open world looks close to the retail game, and it plays through missions at about 3-4 fps (about 1 fps with ray tracing on), rarely crashing.",
   "score": 78.0,
   "metrics": [
    {
     "name": "Story progress",
     "pct": 50.0,
     "label": "First act"
    },
    {
     "name": "Rendering",
     "pct": 90.0,
     "label": "Close to the console, minor glitches"
    },
    {
     "name": "Performance",
     "pct": 10.0,
     "label": "3 FPS"
    },
    {
     "name": "Stability",
     "pct": 70.0,
     "label": "Rarely crashes"
    }
   ],
   "works": [
    "Platform: AMD Radeon RX 7900 XTX, Windows x64",
    "Ray-traced lighting working, seen by RecompWatch: the first AMD build on our board to get it",
    "The open world looks close to the retail game and plays through missions",
    "Translates 25,742 of the 25,758 shaders in its test archive; all 2,191 vertex shaders pass Microsoft's DXIL validator (its report)",
    "Builds from source with its own Setup.cmd; no prebuilt downloads; GPL-3.0"
   ],
   "blocks": [
    "About 1 fps with ray-traced lighting on; 3.5-4 fps indoors in Chapter 1's city without it (its test report)",
    "Its README still calls ray-traced lighting experimental, and its test report finds interior lighting wrong (overexposed doorways, dark objects)",
    "Tested on one AMD card only; not yet reproduced by others"
   ],
   "stars": "1.0k",
   "forks": "123",
   "issues": "64",
   "commits": "100+ commits / 7d",
   "pushed": "pushed 10h ago",
   "reviewed": "2026-11-25",
   "archived": false,
   "archivedNote": "",
   "download": "",
   "donate": "",
   "crypto": [],
   "videos": [],
   "updates": [],
   "links": []
  },
  {
   "id": "kelvaroq",
   "stage": "race",
   "name": "Kelvaroq",
   "by": "fablinoo/kelvaroq",
   "url": "https://github.com/fablinoo/kelvaroq",
   "avatar": "assets/img/avatars/kelvaroq.jpg",
   "tags": [
    "Compatibility layer",
    "GTA VI only",
    "NVIDIA",
    "Self-reported"
   ],
   "summary": "Kelvaroq is a public Rust runtime built on VIctory and victory-fork. It adds rendering patches and measured submission improvements, and runs GTA VI through the prologue and first mission.",
   "score": 68.8,
   "metrics": [
    {
     "name": "Story progress",
     "pct": 25.0,
     "label": "First missions"
    },
    {
     "name": "Rendering",
     "pct": 25.0,
     "label": "Shapes drawn, mostly unlit or black"
    },
    {
     "name": "Performance",
     "pct": 33.3,
     "label": "10 FPS"
    },
    {
     "name": "Stability",
     "pct": 80.0,
     "label": "Rarely crashes"
    }
   ],
   "works": [],
   "blocks": [],
   "stars": "53",
   "forks": "8",
   "issues": "3",
   "commits": "44 commits / 7d",
   "pushed": "pushed 8h ago",
   "reviewed": "2026-11-26",
   "archived": false,
   "archivedNote": "",
   "download": "",
   "donate": "",
   "crypto": [],
   "videos": [
    {
     "url": "https://github.com/fablinoo/kelvaroq#external-playtest-one-36-minute-session",
     "label": "36-minute external playtest"
    }
   ],
   "updates": [],
   "links": []
  },
  {
   "id": "victory-gta6",
   "stage": "race",
   "name": "hyphennn",
   "by": "fxceless/victory-fork",
   "url": "https://github.com/fxceless/victory-fork",
   "avatar": "assets/img/avatars/victory-gta6.jpg",
   "tags": [
    "Compatibility layer",
    "GTA VI only",
    "NVIDIA",
    "Self-reported"
   ],
   "summary": "hyphennn's fork of VIctory (formerly victory-gta6), with his own rendering and speed fixes. On his Rumble streams the prologue plays with ray-traced lighting, detailed textures and hair at about 3 fps; the README still lists shadows as black. Self-reported.",
   "score": 59.8,
   "metrics": [
    {
     "name": "Story progress",
     "pct": 0.0,
     "label": "Stuck in the opening"
    },
    {
     "name": "Rendering",
     "pct": 70.0,
     "label": "Lit, but major effects missing"
    },
    {
     "name": "Performance",
     "pct": 10.0,
     "label": "3 FPS"
    },
    {
     "name": "Stability",
     "pct": 0.0,
     "label": "Unknown"
    }
   ],
   "works": [
    "Streams show the prologue with ray-traced lighting, detailed textures and hair",
    "README: the first gameplay scene renders, with HUD, pause menu and pad input working",
    "Its own fixes to meshlet culling, descriptor tables and untranslated shaders, on top of VIctory"
   ],
   "blocks": [
    "About 3 fps on the streams; its README now measures 8-10 fps in the first rooms, with optional switches",
    "The README hasn't caught up with the streams: it says shadows are black and ray tracing lights nothing yet",
    "Tested on one PC (RTX 4070); not reproduced by others yet"
   ],
   "stars": "3.2k",
   "forks": "939",
   "issues": "1.1k",
   "commits": "100+ commits / 7d",
   "pushed": "pushed 3h ago",
   "reviewed": "2026-11-24",
   "archived": false,
   "archivedNote": "",
   "download": "",
   "donate": "",
   "crypto": [],
   "videos": [],
   "updates": [],
   "links": []
  },
  {
   "id": "vitoriabr",
   "stage": "race",
   "name": "Uilian",
   "by": "uiliannn/VItoriaBr",
   "url": "https://github.com/uiliannn/VItoriaBr",
   "avatar": "assets/img/avatars/vitoriabr.png",
   "tags": [
    "Compatibility layer",
    "GTA VI only",
    "NVIDIA",
    "Self-reported"
   ],
   "summary": "Uilian's VItoriaBr, built on hyphennn's victory-fork with his own NVIDIA work and streamed live on YouTube. On stream it reaches Jason's first mission, \"Gone Fishing\", with poor rendering, up to 4 fps and few crashes.",
   "score": 59.6,
   "metrics": [
    {
     "name": "Story progress",
     "pct": 10.0,
     "label": "Prologue cleared"
    },
    {
     "name": "Rendering",
     "pct": 20.0,
     "label": "Black or broken"
    },
    {
     "name": "Performance",
     "pct": 13.3,
     "label": "4 FPS"
    },
    {
     "name": "Stability",
     "pct": 40.0,
     "label": "Crashes sometimes"
    }
   ],
   "works": [
    "Reaches Jason's first mission, \"Gone Fishing\", on his live streams",
    "Few crashes on stream",
    "Menus, intro and saves at 30 fps on an NVIDIA RTX 5060 Ti (README)"
   ],
   "blocks": [
    "Rendering is poor; shadowed areas are dark",
    "Up to 4 fps",
    "Its code now matches victory-fork's except for two small changes"
   ],
   "stars": "211",
   "forks": "47",
   "issues": "77",
   "commits": "100+ commits / 7d",
   "pushed": "pushed 7h ago",
   "reviewed": "2026-11-25",
   "archived": false,
   "archivedNote": "",
   "download": "",
   "donate": "",
   "crypto": [],
   "videos": [],
   "updates": [],
   "links": []
  },
  {
   "id": "marvis",
   "stage": "race",
   "name": "VIctory",
   "by": "Marvisak/VIctory",
   "url": "https://github.com/Marvisak/VIctory",
   "avatar": "assets/img/avatars/marvis.png",
   "tags": [
    "Compatibility layer",
    "GTA VI only",
    "AMD",
    "Self-reported"
   ],
   "summary": "Marvis's Rust layer runs GTA VI natively. The owner reports controlled gameplay is now reachable, though the build remains unstable; the README still says it is not playable and reports about 1 fps in the world.",
   "score": 50.3,
   "metrics": [
    {
     "name": "Story progress",
     "pct": 0.0,
     "label": "Stuck in the opening"
    },
    {
     "name": "Rendering",
     "pct": 0.0,
     "label": "Black or broken"
    },
    {
     "name": "Performance",
     "pct": 3.3,
     "label": "1 FPS"
    },
    {
     "name": "Stability",
     "pct": 0.0,
     "label": "Unknown"
    }
   ],
   "works": [
    "README reports first-boot screens, intro video, start screen and saves working at 30 fps",
    "Intro cutscene drawn textured and lit, with hair, sky and depth of field",
    "Loads the world in about a minute and reaches the prologue"
   ],
   "blocks": [
    "About 1 fps; ray-traced shadows and indirect light are missing",
    "Tested on one machine (AMD RX 6700 XT); not reproduced by others yet",
    "Code published hours after the stream; not yet reviewed by RecompWatch"
   ],
   "stars": "13k",
   "forks": "2.1k",
   "issues": "1.9k",
   "commits": "100+ commits / 7d",
   "pushed": "pushed 12h ago",
   "reviewed": "2026-11-26",
   "archived": false,
   "archivedNote": "",
   "download": "",
   "donate": "",
   "crypto": [],
   "videos": [],
   "updates": [],
   "links": []
  },
  {
   "id": "xcl",
   "stage": "race",
   "name": "XCL",
   "by": "xcl-dev/xcl",
   "url": "https://github.com/xcl-dev/xcl",
   "avatar": "assets/img/avatars/xcl.png",
   "tags": [
    "Compatibility layer",
    "Any Xbox Series game",
    "AMD",
    "NVIDIA",
    "Self-reported",
    "Runs: Minecraft Preview and Unicorn Overlord: playable"
   ],
   "summary": "Wine-style layer running game code natively. On its main branch GTA VI gets past its menus into the world for several testers, but the screen stays on a loading spinner and a GPU watchdog ends the run. Unverified.",
   "score": 35.0,
   "metrics": [
    {
     "name": "Story progress",
     "pct": 0.0,
     "label": "–"
    },
    {
     "name": "Rendering",
     "pct": 0.0,
     "label": "–"
    },
    {
     "name": "Performance",
     "pct": 0.0,
     "label": "–"
    },
    {
     "name": "Stability",
     "pct": 0.0,
     "label": "–"
    }
   ],
   "works": [
    "Several testers' runs reach GTA VI's world: the game's own state reads \"Game Running\", peds and vehicles spawned",
    "Menus at 30 fps; past them the intro video plays and the world streams in",
    "All 26,698 RDNA2 programs in GTA VI's shader pack become HLSL; samples compile to DXIL"
   ],
   "blocks": [
    "README: an unmerged NVIDIA branch reaches the world at about 5 fps, with parts of the picture missing",
    "The game's GPU watchdog ends each run 3 to 14 minutes in, on AMD and NVIDIA",
    "Pipeline builds fall behind at world load, and BCPack-compressed textures aren't decoded yet"
   ],
   "stars": "8.4k",
   "forks": "1.2k",
   "issues": "1.8k",
   "commits": "100+ commits / 7d",
   "pushed": "pushed 5h ago",
   "reviewed": "2026-11-24",
   "archived": false,
   "archivedNote": "",
   "download": "",
   "donate": "",
   "crypto": [],
   "videos": [],
   "updates": [],
   "links": []
  },
  {
   "id": "notnozy",
   "stage": "private",
   "name": "NotNozy",
   "by": "Streamed on Rumble · code not public",
   "url": "",
   "avatar": "",
   "tags": [
    "AMD",
    "Evidence: Rumble stream",
    "No public code"
   ],
   "summary": "A private build shown on NotNozy's \"GTA6 Modding Stream\" on Rumble. It looks about the same as AvatarManz's build; the owner rates its story progress at 80%. It runs on an AMD card. Code not public, and what it builds on isn't known.",
   "score": 87.8,
   "metrics": [
    {
     "name": "Story progress",
     "pct": 80.0,
     "label": "Half the story"
    },
    {
     "name": "Rendering",
     "pct": 76.0,
     "label": "Close to the console, minor glitches"
    },
    {
     "name": "Performance",
     "pct": 53.3,
     "label": "16 FPS"
    },
    {
     "name": "Stability",
     "pct": 90.0,
     "label": "Stable"
    }
   ],
   "works": [],
   "blocks": [],
   "stars": "",
   "forks": "",
   "issues": "",
   "commits": "",
   "pushed": "",
   "reviewed": "",
   "archived": false,
   "archivedNote": "",
   "download": "",
   "donate": "",
   "crypto": [],
   "videos": [
    {
     "url": "https://rumble.com/v7iv98i-gta6-modding-stream.html",
     "label": "Watch on Rumble"
    }
   ],
   "updates": [],
   "links": []
  },
  {
   "id": "darkworldhm",
   "stage": "private",
   "name": "darkworldhm",
   "by": "Streamed on Rumble · built on a VIctory fork (which one isn't known)",
   "url": "",
   "avatar": "",
   "tags": [
    "Built on VIctory",
    "NVIDIA",
    "Evidence: Rumble stream",
    "No public code"
   ],
   "summary": "A build shown on darkworldhm's Rumble stream on 25 Nov, running GTA VI's free roam at about 12-15 fps, swinging between 5 and 24: the highest frame rate on our board. The owner rates its story progress at 80%, and it hasn't crashed so far. The picture looks alright, with some texture or ray-tracing glitches. Reportedly on an NVIDIA RTX 50-series card. It's built on VIctory, but which fork isn't known. Code not public.",
   "score": 84.8,
   "metrics": [
    {
     "name": "Story progress",
     "pct": 80.0,
     "label": "Half the story"
    },
    {
     "name": "Rendering",
     "pct": 70.0,
     "label": "Lit, but major effects missing"
    },
    {
     "name": "Performance",
     "pct": 50.0,
     "label": "15 FPS"
    },
    {
     "name": "Stability",
     "pct": 70.0,
     "label": "Rarely crashes"
    }
   ],
   "works": [],
   "blocks": [],
   "stars": "",
   "forks": "",
   "issues": "",
   "commits": "",
   "pushed": "",
   "reviewed": "",
   "archived": false,
   "archivedNote": "",
   "download": "",
   "donate": "",
   "crypto": [],
   "videos": [
    {
     "url": "https://rumble.com/v7iwggw-gta-6-mooding-pc.html",
     "label": "Watch on Rumble"
    }
   ],
   "updates": [],
   "links": []
  },
  {
   "id": "doomsday",
   "stage": "private",
   "name": "Doomsday",
   "by": "Working in private · built on JoshuuDev's victory-amd",
   "url": "",
   "avatar": "assets/img/avatars/doomsday.jpg",
   "tags": [
    "AMD",
    "NVIDIA",
    "Evidence: Verified by RecompWatch",
    "No public code"
   ],
   "summary": "A private group's build on JoshuuDev's victory-amd fork of VIctory, verified by RecompWatch. It runs GTA VI with ray-traced lighting at about 3-5 fps, almost never crashes, and the owner rates its story progress at 80%. The in-game phone renders really well, and the map menu runs at a higher frame rate. It's built mostly for AMD and also works on NVIDIA, at a lower frame rate. Code not public.",
   "score": 84.0,
   "metrics": [
    {
     "name": "Story progress",
     "pct": 80.0,
     "label": "Half the story"
    },
    {
     "name": "Rendering",
     "pct": 85.0,
     "label": "Close to the console, minor glitches"
    },
    {
     "name": "Performance",
     "pct": 13.3,
     "label": "4 FPS"
    },
    {
     "name": "Stability",
     "pct": 80.0,
     "label": "Rarely crashes"
    }
   ],
   "works": [],
   "blocks": [],
   "stars": "",
   "forks": "",
   "issues": "",
   "commits": "",
   "pushed": "",
   "reviewed": "",
   "archived": false,
   "archivedNote": "",
   "download": "",
   "donate": "",
   "crypto": [],
   "videos": [
    {
     "url": "https://x.com/Stu9ao",
     "label": "Doomsday on X"
    }
   ],
   "updates": [],
   "links": []
  },
  {
   "id": "suri",
   "stage": "private",
   "name": "suri",
   "by": "Working in private · built on hyphennn's victory-fork",
   "url": "",
   "avatar": "assets/img/avatars/suri.jpg",
   "tags": [
    "Built on hyphennn",
    "Evidence: Confirmed by RecompWatch",
    "No public code"
   ],
   "summary": "A private build on hyphennn's victory-fork of VIctory. RecompWatch confirmed a player moving around Lucia's prologue at about 3 fps; the owner now rates its story progress at 80%. Its rendering is ahead of the other builds, but code is not public.",
   "score": 75.0,
   "metrics": [
    {
     "name": "Story progress",
     "pct": 80.0,
     "label": "Half the story"
    },
    {
     "name": "Rendering",
     "pct": 80.0,
     "label": "Close to the console, minor glitches"
    },
    {
     "name": "Performance",
     "pct": 10.0,
     "label": "3 FPS"
    },
    {
     "name": "Stability",
     "pct": 0.0,
     "label": "Unknown"
    }
   ],
   "works": [],
   "blocks": [],
   "stars": "",
   "forks": "",
   "issues": "",
   "commits": "",
   "pushed": "",
   "reviewed": "",
   "archived": false,
   "archivedNote": "",
   "download": "",
   "donate": "",
   "crypto": [],
   "videos": [],
   "updates": [],
   "links": []
  },
  {
   "id": "five-star-recomp",
   "stage": "watch",
   "name": "Five Star Recomp",
   "by": "ThatRecompDev/five-star-recomp",
   "url": "https://github.com/ThatRecompDev/five-star-recomp",
   "avatar": "",
   "tags": [
    "Compatibility layer",
    "GTA VI only"
   ],
   "summary": "C# layer and toolkit for GTA VI. It reports the game showing its logo, intro video and every first-run setup screen, answered by scripted input, then starting the story load, which fails on corrupted memory. Self-reported; no capture yet.",
   "score": 30.0,
   "works": [],
   "blocks": [],
   "stars": "88",
   "forks": "",
   "issues": "",
   "commits": "",
   "pushed": "3h ago",
   "reviewed": "",
   "archived": false,
   "archivedNote": "",
   "download": "",
   "donate": "",
   "videos": [],
   "updates": [
    {
     "date": "2026-11-24",
     "text": "Half credit for Main menu: first-run setup screens answer scripted gamepad input (self-reported). Score 40% → 47.5%."
    }
   ],
   "links": [],
   "metrics": [],
   "crypto": []
  },
  {
   "id": "xbox2windows",
   "stage": "watch",
   "name": "Xbox2Windows",
   "by": "R0Y00/Xbox2Windows",
   "url": "https://github.com/R0Y00/Xbox2Windows",
   "avatar": "assets/img/avatars/xbox2windows.jpg",
   "tags": [
    "Static recompilation",
    "Any Xbox Series game",
    "Self-reported"
   ],
   "summary": "Static recompilation research turning Xbox Series code and shaders into Windows C++ and DXIL, with over 50 contributors. Footage the project shared shows GTA VI's menus, unstable. Its README now reports a modified diagnostic exe playing the intro and setup text; the original exe and the menus remain unverified.",
   "score": 25.0,
   "works": [],
   "blocks": [],
   "stars": "1.7k",
   "forks": "189",
   "issues": "97",
   "commits": "100+ commits / 7d",
   "pushed": "pushed 3h ago",
   "reviewed": "2026-11-24",
   "archived": false,
   "archivedNote": "",
   "download": "",
   "donate": "",
   "videos": [],
   "updates": [],
   "links": [],
   "metrics": [],
   "crypto": []
  },
  {
   "id": "tuxbox",
   "stage": "watch",
   "name": "TuxBox",
   "by": "brcly/TuxBox",
   "url": "https://github.com/brcly/TuxBox",
   "avatar": "assets/img/avatars/tuxbox.jpg",
   "tags": [
    "Compatibility layer",
    "Any Xbox Series game",
    "Self-reported",
    "Runs: The Matrix Awakens: menu + cinematic (Linux)"
   ],
   "summary": "Native-first layer for unpacked Xbox Series games, tested mostly on Linux through Proton. GTA VI's exe now draws its player-selection prompt at 4K; input, intro and gameplay aren't shown yet. Self-reported.",
   "score": 20.0,
   "works": [],
   "blocks": [],
   "stars": "231",
   "forks": "15",
   "issues": "6",
   "commits": "100+ commits / 7d",
   "pushed": "pushed 6h ago",
   "reviewed": "2026-11-24",
   "archived": false,
   "archivedNote": "",
   "download": "",
   "donate": "",
   "videos": [],
   "updates": [],
   "links": [],
   "metrics": [],
   "crypto": []
  },
  {
   "id": "palmetto",
   "stage": "watch",
   "name": "Palmetto",
   "by": "luizwidmer/palmetto",
   "url": "https://github.com/luizwidmer/palmetto",
   "avatar": "",
   "tags": [
    "Static recompilation",
    "GTA VI only"
   ],
   "summary": "Open continuation of Leonida after its repo went private. It documents GTA VI's exe running through about 12,000 D3D12 calls into its own render code before it stops; no frame yet. Self-reported, one RTX 4090.",
   "score": 10.0,
   "works": [],
   "blocks": [],
   "stars": "103",
   "forks": "",
   "issues": "",
   "commits": "",
   "pushed": "3h ago",
   "reviewed": "",
   "archived": false,
   "archivedNote": "",
   "download": "",
   "donate": "",
   "videos": [],
   "updates": [],
   "links": [],
   "metrics": [],
   "crypto": []
  },
  {
   "id": "gta6-boottest",
   "stage": "watch",
   "name": "GTA6-BootTest",
   "by": "OnlyMoisties/GTA6-BootTest",
   "url": "https://github.com/OnlyMoisties/GTA6-BootTest",
   "avatar": "",
   "tags": [
    "Compatibility layer",
    "GTA VI only"
   ],
   "summary": "C stand-in DLLs and a debugger harness that run GTA VI's exe on Windows through its frame loop. It says the first UI screen now draws on a PC GPU, but shows no capture yet. Self-reported.",
   "score": 10.0,
   "works": [],
   "blocks": [],
   "stars": "37",
   "forks": "",
   "issues": "",
   "commits": "",
   "pushed": "12h ago",
   "reviewed": "",
   "archived": false,
   "archivedNote": "",
   "download": "",
   "donate": "",
   "videos": [],
   "updates": [],
   "links": [],
   "metrics": [],
   "crypto": []
  },
  {
   "id": "percyscarlett",
   "stage": "watch",
   "name": "PercyScarlett",
   "by": "rpatty-dev/PercyScarlett",
   "url": "https://github.com/rpatty-dev/PercyScarlett",
   "avatar": "",
   "tags": [
    "Compatibility layer"
   ],
   "summary": "Rust layer with stand-in system DLLs and an early shader recompiler. GTA VI now runs to a frame loop of black frames, then the GPU hangs. Its shader path still uses stand-ins, and its stage counts don't match other projects'.",
   "score": 10.0,
   "works": [],
   "blocks": [],
   "stars": "36",
   "forks": "",
   "issues": "",
   "commits": "",
   "pushed": "4h ago",
   "reviewed": "",
   "archived": false,
   "archivedNote": "",
   "download": "",
   "donate": "",
   "videos": [],
   "updates": [],
   "links": [],
   "metrics": [],
   "crypto": []
  },
  {
   "id": "gta6-compat-layer",
   "stage": "watch",
   "name": "GTA6-COMPAT-LAYER (ScarlettCompat)",
   "by": "SSTGxf/ScarlettCompat",
   "url": "https://github.com/SSTGxf/ScarlettCompat",
   "avatar": "",
   "tags": [
    "Compatibility layer",
    "GTA VI (Xbox Series)"
   ],
   "summary": "Day-old C++ layer with a PE loader, TLS setup and a small registry of Xbox functions, some of them stubs; its first runtime call just returns success. Its rendered frame comes from its own test, not a console title.",
   "score": 10.0,
   "works": [],
   "blocks": [],
   "stars": "3",
   "forks": "",
   "issues": "",
   "commits": "",
   "pushed": "3h ago",
   "reviewed": "",
   "archived": false,
   "archivedNote": "",
   "download": "",
   "donate": "",
   "videos": [],
   "updates": [],
   "links": [],
   "metrics": [],
   "crypto": []
  },
  {
   "id": "xbox-emulator",
   "stage": "watch",
   "name": "xbox-emulator",
   "by": "omonkeyz/xbox-emulator",
   "url": "https://github.com/omonkeyz/xbox-emulator",
   "avatar": "assets/img/avatars/xbox-emulator.png",
   "tags": [
    "Compatibility runtime",
    "Any Xbox Series game",
    "Self-reported",
    "Runs: Trackmania: races drive; Terraria: in-world; Fortnite: lobby (self-reported)"
   ],
   "summary": "Rust runtime that runs dumped Xbox Series builds as normal Windows processes, continuing the TomBox project. It reports Trackmania races driving at about 60 fps and Terraria reaching its world, plus Fortnite's lobby. Self-reported.",
   "score": 6.5,
   "works": [],
   "blocks": [],
   "stars": "1.7k",
   "forks": "112",
   "issues": "145",
   "commits": "100+ commits / 7d",
   "pushed": "pushed 1d ago",
   "reviewed": "2026-11-23",
   "archived": false,
   "archivedNote": "",
   "download": "",
   "donate": "",
   "videos": [],
   "updates": [],
   "links": [],
   "metrics": [],
   "crypto": []
  },
  {
   "id": "scarlettx",
   "stage": "watch",
   "name": "ScarlettX",
   "by": "Freminet/ScarlettX",
   "url": "https://github.com/Freminet/ScarlettX",
   "avatar": "assets/img/avatars/scarlettx.jpg",
   "tags": [
    "HLE emulator",
    "Any Xbox Series game",
    "Self-reported",
    "Runs: Concept Destruction and Unicorn Overlord: playable"
   ],
   "summary": "Clean-room high-level emulator of the Scarlett OS and GDK runtime. It reports two retail Xbox Series games, Concept Destruction and Unicorn Overlord, playable on Windows.",
   "score": 5.2,
   "works": [],
   "blocks": [],
   "stars": "248",
   "forks": "24",
   "issues": "29",
   "commits": "57 commits / 7d",
   "pushed": "pushed 2d ago",
   "reviewed": "2026-11-22",
   "archived": false,
   "archivedNote": "",
   "download": "",
   "donate": "",
   "videos": [],
   "updates": [],
   "links": [],
   "metrics": [],
   "crypto": []
  },
  {
   "id": "openscarlett-ce",
   "stage": "watch",
   "name": "OpenScarlett (Community Edition)",
   "by": "OpenCommunityEdition/OpenScarlett",
   "url": "https://github.com/OpenCommunityEdition/OpenScarlett",
   "avatar": "assets/img/avatars/openscarlett-ce.png",
   "tags": [
    "Compatibility layer",
    "Any Xbox Series game",
    "Self-reported",
    "Runs: Minecraft Preview: playable; The Matrix Awakens: opening chase (self-reported)"
   ],
   "summary": "AGPL C++ layer, separate from the other OpenScarlett, that swaps console DLLs for PC Direct3D 12 ones and translates console GPU code. It reports Minecraft Preview playable at about 60 fps, and an unnamed newer retail game reaching its start screen. Self-reported; no GTA VI credit until it names the game's files.",
   "score": 4.9,
   "works": [],
   "blocks": [],
   "stars": "55",
   "forks": "3",
   "issues": "1",
   "commits": "100+ commits / 7d",
   "pushed": "pushed 4h ago",
   "reviewed": "2026-11-24",
   "archived": false,
   "archivedNote": "",
   "download": "",
   "donate": "",
   "videos": [],
   "updates": [],
   "links": [],
   "metrics": [],
   "crypto": []
  },
  {
   "id": "openscarlett",
   "stage": "watch",
   "name": "OpenScarlett",
   "by": "californiaAlmonds/OpenScarlett",
   "url": "https://github.com/californiaAlmonds/OpenScarlett",
   "avatar": "assets/img/avatars/openscarlett.png",
   "tags": [
    "Compatibility layer",
    "Any Xbox Series game",
    "Self-reported",
    "Runs: Six Scarlett GDK samples and a Freedoom homebrew port (not retail)"
   ],
   "summary": "MIT-licensed C++20 translation layer targeting D3D12 and Vulkan. It now claims 17 boot stops cleared on a retail title it doesn't name, with no run record or frame shown, so no GTA VI milestone yet.",
   "score": 4.5,
   "works": [],
   "blocks": [],
   "stars": "76",
   "forks": "10",
   "issues": "15",
   "commits": "100+ commits / 7d",
   "pushed": "pushed 6h ago",
   "reviewed": "2026-11-23",
   "archived": false,
   "archivedNote": "",
   "download": "",
   "donate": "",
   "videos": [],
   "updates": [],
   "links": [],
   "metrics": [],
   "crypto": []
  },
  {
   "id": "scarlett-layer",
   "stage": "watch",
   "name": "scarlett-layer",
   "by": "jadeowaowa/scarlett-layer",
   "url": "https://github.com/jadeowaowa/scarlett-layer",
   "avatar": "assets/img/avatars/scarlett-layer.jpg",
   "tags": [
    "Compatibility layer",
    "Any Xbox Series game",
    "Self-reported",
    "Runs: Terraria (GDK build): menus and audio (self-reported)"
   ],
   "summary": "Loader plus injected hook DLL that redirects console-only calls to Windows shims, with its own d3d12_xs wrapper and shader lifter. It reports Terraria's GDK build rendering its menus with audio; no gameplay yet.",
   "score": 3.4,
   "works": [],
   "blocks": [],
   "stars": "34",
   "forks": "3",
   "issues": "2",
   "commits": "100+ commits / 7d",
   "pushed": "pushed 13h ago",
   "reviewed": "2026-11-24",
   "archived": false,
   "archivedNote": "",
   "download": "",
   "donate": "",
   "videos": [],
   "updates": [],
   "links": [],
   "metrics": [],
   "crypto": []
  },
  {
   "id": "xvalkyrie",
   "stage": "watch",
   "name": "XValkyrie",
   "by": "sammwyy/xvalkyrie",
   "url": "https://github.com/sammwyy/xvalkyrie",
   "avatar": "assets/img/avatars/xvalkyrie.jpg",
   "tags": [
    "Compatibility layer",
    "Any Xbox One or Series game",
    "Self-reported",
    "Runs: GDK samples draw; it reports two retail Series titles playable"
   ],
   "summary": "Wine-style C++ layer for Xbox One and Series titles with native code and RDNA2-to-HLSL shaders. It now calls Minecraft Preview and Unicorn Overlord playable, though its Minecraft note describes only the main menu. Unverified.",
   "score": 2.9,
   "works": [],
   "blocks": [],
   "stars": "210",
   "forks": "11",
   "issues": "9",
   "commits": "100+ commits / 7d",
   "pushed": "pushed 18h ago",
   "reviewed": "2026-11-23",
   "archived": false,
   "archivedNote": "",
   "download": "",
   "donate": "",
   "videos": [],
   "updates": [],
   "links": [],
   "metrics": [],
   "crypto": []
  },
  {
   "id": "anyxboxx",
   "stage": "watch",
   "name": "AnyXboxX",
   "by": "LooperSalty/AnyXboxX",
   "url": "https://github.com/LooperSalty/AnyXboxX",
   "avatar": "assets/img/avatars/anyxboxx.png",
   "tags": [
    "HLE emulator",
    "Any Xbox Series game",
    "Self-reported",
    "Runs: GDK sample games (not retail)"
   ],
   "summary": "French-language prototype: GDK runtime emulation on Unicorn, plus a Wine-style native mode that runs small GDK test games. Its GTA VI runs go through a bundled copy of VIctory, so they earn it no milestone.",
   "score": 2.5,
   "works": [],
   "blocks": [],
   "stars": "99",
   "forks": "8",
   "issues": "17",
   "commits": "100+ commits / 7d",
   "pushed": "pushed 3h ago",
   "reviewed": "2026-11-24",
   "archived": false,
   "archivedNote": "",
   "download": "",
   "donate": "",
   "videos": [],
   "updates": [],
   "links": [],
   "metrics": [],
   "crypto": []
  },
  {
   "id": "gtavi-recomp",
   "stage": "watch",
   "name": "GTAVI-Recomp",
   "by": "JamesCicada/GTAVI-Recomp",
   "url": "https://github.com/JamesCicada/GTAVI-Recomp",
   "avatar": "",
   "tags": [
    "Relinker (PS5 route)",
    "PS5 build"
   ],
   "summary": "Targets the PS5 build through AnyPS5 and will not work from leaked files, so game research is blocked. Work continues on AnyPS5 itself.",
   "score": 2.1,
   "works": [],
   "blocks": [],
   "stars": "56",
   "forks": "",
   "issues": "",
   "commits": "",
   "pushed": "12h ago",
   "reviewed": "",
   "archived": false,
   "archivedNote": "",
   "download": "",
   "donate": "",
   "videos": [],
   "updates": [],
   "links": [],
   "metrics": [],
   "crypto": []
  },
  {
   "id": "xlaunchvi",
   "stage": "watch",
   "name": "XlaunchVI",
   "by": "JPTuba9/xlaunch-vi",
   "url": "https://github.com/JPTuba9/xlaunch-vi",
   "avatar": "",
   "tags": [
    "Compatibility layer"
   ],
   "summary": "Multi-contributor C++ layer with a PE loader, a D3D12 backend and an RDNA2 shader translator that matches AMD-compiled test shaders bit for bit. Most code sits in open pull requests, and no Xbox title has run.",
   "score": 1.4,
   "works": [],
   "blocks": [],
   "stars": "2",
   "forks": "",
   "issues": "",
   "commits": "",
   "pushed": "14h ago",
   "reviewed": "",
   "archived": false,
   "archivedNote": "",
   "download": "",
   "donate": "",
   "videos": [],
   "updates": [],
   "links": [],
   "metrics": [],
   "crypto": []
  },
  {
   "id": "dedsec",
   "stage": "watch",
   "name": "DedSec",
   "by": "Hylanderry/DedSec",
   "url": "https://github.com/Hylanderry/DedSec/tree/dedsec-clean",
   "avatar": "",
   "tags": [
    "Static recompilation (DX12)",
    "GTA VI"
   ],
   "summary": "Portuguese-language GTA VI port targeting DirectX 12 with an RDNA2-to-HLSL translator. Most of its files sit at the same paths as Leonida's, 86 of them identical, and its README doesn't credit Leonida. It does not boot.",
   "score": 1.2,
   "works": [],
   "blocks": [],
   "stars": "1",
   "forks": "",
   "issues": "",
   "commits": "",
   "pushed": "14h ago",
   "reviewed": "",
   "archived": false,
   "archivedNote": "",
   "download": "",
   "donate": "",
   "videos": [],
   "updates": [],
   "links": [],
   "metrics": [],
   "crypto": []
  },
  {
   "id": "xbgtasix",
   "stage": "watch",
   "name": "Xbgtasix",
   "by": "ljm-233/Xbgtasix",
   "url": "https://github.com/ljm-233/Xbgtasix",
   "avatar": "",
   "tags": [
    "Compatibility layer"
   ],
   "summary": "Chinese-language layer that places stand-in xgameruntime, xmem and d3d12_xs DLLs next to an executable, plus sourced research notes on the archive, shader and texture formats.",
   "score": 1.2,
   "works": [],
   "blocks": [],
   "stars": "1",
   "forks": "",
   "issues": "",
   "commits": "",
   "pushed": "7h ago",
   "reviewed": "",
   "archived": false,
   "archivedNote": "",
   "download": "",
   "donate": "",
   "videos": [],
   "updates": [],
   "links": [],
   "metrics": [],
   "crypto": []
  },
  {
   "id": "scarab",
   "stage": "watch",
   "name": "SCARAB",
   "by": "p-portela/SCARAB",
   "url": "https://github.com/p-portela/SCARAB",
   "avatar": "",
   "tags": [
    "API bridge"
   ],
   "summary": "Found that the console d3d12_xs uses the same 28 interface IDs as PC D3D12, so standard calls can be forwarded and only the console extensions need building.",
   "score": 1.0,
   "works": [],
   "blocks": [],
   "stars": "1",
   "forks": "",
   "issues": "",
   "commits": "",
   "pushed": "1d ago",
   "reviewed": "",
   "archived": false,
   "archivedNote": "",
   "download": "",
   "donate": "",
   "videos": [],
   "updates": [],
   "links": [],
   "metrics": [],
   "crypto": []
  },
  {
   "id": "anyxboxseries",
   "stage": "watch",
   "name": "AnyXboxSeries",
   "by": "edupode/anyxboxseries",
   "url": "https://github.com/edupode/anyxboxseries",
   "avatar": "",
   "tags": [
    "Compatibility layer",
    "GTA VI only"
   ],
   "summary": "GTA VI-only translation layer with a PE mapper borrowed from Xbox2Windows, an early scalar shader lifter and a sample game that tests presentation and input.",
   "score": 1.0,
   "works": [],
   "blocks": [],
   "stars": "21",
   "forks": "",
   "issues": "",
   "commits": "",
   "pushed": "2d ago",
   "reviewed": "",
   "archived": false,
   "archivedNote": "",
   "download": "",
   "donate": "",
   "videos": [],
   "updates": [],
   "links": [],
   "metrics": [],
   "crypto": []
  },
  {
   "id": "g6recomp",
   "stage": "watch",
   "name": "G6Recomp",
   "by": "Kajcsi/G6Recomp",
   "url": "https://github.com/Kajcsi/G6Recomp",
   "avatar": "",
   "tags": [
    "Compatibility layer",
    "GTA VI only"
   ],
   "summary": "Carefully tested C++ loader and console-runtime rewrite for GTA VI, with its own code throughout. The game's side DLLs initialise under it; shaders are only decoded so far and there is no graphics layer yet.",
   "score": 0.7,
   "works": [],
   "blocks": [],
   "stars": "6",
   "forks": "",
   "issues": "",
   "commits": "",
   "pushed": "5h ago",
   "reviewed": "",
   "archived": false,
   "archivedNote": "",
   "download": "",
   "donate": "",
   "videos": [],
   "updates": [],
   "links": [],
   "metrics": [],
   "crypto": []
  },
  {
   "id": "anybox",
   "stage": "watch",
   "name": "AnyBox",
   "by": "Dark3581/AnyBox",
   "url": "https://github.com/Dark3581/AnyBox",
   "avatar": "",
   "tags": [
    "Relinker"
   ],
   "summary": "Relinks GDK executables against reimplemented system libraries, AnyPS5-style. The pipeline works end to end on a test title.",
   "score": 0.7,
   "works": [],
   "blocks": [],
   "stars": "10",
   "forks": "",
   "issues": "",
   "commits": "",
   "pushed": "1d ago",
   "reviewed": "",
   "archived": false,
   "archivedNote": "",
   "download": "",
   "donate": "",
   "videos": [],
   "updates": [],
   "links": [],
   "metrics": [],
   "crypto": []
  },
  {
   "id": "grandtheftxbox",
   "stage": "watch",
   "name": "GrandTheftXbox",
   "by": "zohaiblazuli/GrandTheftXbox",
   "url": "https://github.com/zohaiblazuli/GrandTheftXbox",
   "avatar": "",
   "tags": [
    "Compatibility layer"
   ],
   "summary": "Wine-style layer planned for Series and One titles. Sits between milestones 0 and 1, and has been quiet since Nov 20.",
   "score": 0.3,
   "works": [],
   "blocks": [],
   "stars": "4",
   "forks": "",
   "issues": "",
   "commits": "",
   "pushed": "4d ago",
   "reviewed": "",
   "archived": false,
   "archivedNote": "",
   "download": "",
   "donate": "",
   "videos": [],
   "updates": [],
   "links": [],
   "metrics": [],
   "crypto": []
  },
  {
   "id": "seriesx-emulator",
   "stage": "watch",
   "name": "SeriesX Emulator",
   "by": "anrq0/SeriesX-Emulator",
   "url": "https://github.com/anrq0/SeriesX-Emulator",
   "avatar": "",
   "tags": [
    "Emulator"
   ],
   "summary": "C++ emulator that interprets x86-64 code instead of running it natively, with a launcher and seven XGameRuntime functions. Only programs it builds itself run; it says no commercial game works.",
   "score": 0.3,
   "works": [],
   "blocks": [],
   "stars": "2",
   "forks": "",
   "issues": "",
   "commits": "",
   "pushed": "18h ago",
   "reviewed": "",
   "archived": false,
   "archivedNote": "",
   "download": "",
   "donate": "",
   "videos": [],
   "updates": [],
   "links": [],
   "metrics": [],
   "crypto": []
  },
  {
   "id": "scarlett-windows-compat",
   "stage": "watch",
   "name": "Scarlett Windows Compat",
   "by": "ProhorovIlja/NativeX-Runtime",
   "url": "https://github.com/ProhorovIlja/NativeX-Runtime",
   "avatar": "",
   "tags": [
    "Research probes"
   ],
   "summary": "Clean-room test programs for how Game Core software meets Windows, covering loading, memory, presentation and input, plus a radar that watches other projects.",
   "score": 0.1,
   "works": [],
   "blocks": [],
   "stars": "1",
   "forks": "",
   "issues": "",
   "commits": "",
   "pushed": "18h ago",
   "reviewed": "",
   "archived": false,
   "archivedNote": "",
   "download": "",
   "donate": "",
   "videos": [],
   "updates": [],
   "links": [],
   "metrics": [],
   "crypto": []
  },
  {
   "id": "leonida",
   "stage": "race",
   "name": "Leonida",
   "by": "ItsNotRexed/Leonida",
   "url": "https://github.com/ItsNotRexed/Leonida",
   "avatar": "assets/img/avatars/leonida.png",
   "tags": [
    "Static recompilation",
    "GTA VI only",
    "Self-reported",
    "Repo gone (404)"
   ],
   "summary": "Made just for GTA VI, by Hookshot's author. Archived on Nov 23: its Discord vanished, the GitHub repo was deleted and the creator said he quit. Last result: the exe ran, frames stayed black.",
   "score": 25.0,
   "works": [],
   "blocks": [],
   "stars": "32k",
   "forks": "3.0k",
   "issues": "4.9k",
   "commits": "100+ commits / 7d",
   "pushed": "pushed 16h ago",
   "reviewed": "2026-11-23",
   "archived": true,
   "archivedNote": "Archived on 2026-11-23; retained in the project history and no longer ranked.",
   "download": "",
   "donate": "",
   "videos": [],
   "updates": [],
   "links": [],
   "metrics": [],
   "crypto": []
  },
  {
   "id": "americas-recomp",
   "stage": "race",
   "name": "americas-recomp",
   "by": "realdody/americas-recomp · branch xbox-series",
   "url": "https://github.com/realdody/americas-recomp/tree/xbox-series",
   "avatar": "assets/img/avatars/americas-recomp.jpg",
   "tags": [
    "Relinker + shader recompiler",
    "GTA VI first",
    "Self-reported",
    "Repo gone (404)"
   ],
   "summary": "Fork of AnyPS5 that tested whether the PS5 port tool's RDNA2 shader recompiler can handle the Xbox game. Archived on Nov 23: the repo answers 404, its owner's account is still active, and no DMCA notice is published.",
   "score": 12.0,
   "works": [],
   "blocks": [],
   "stars": "586",
   "forks": "89",
   "issues": "22",
   "commits": "100+ commits / 7d",
   "pushed": "pushed 1d ago",
   "reviewed": "2026-11-23",
   "archived": true,
   "archivedNote": "Archived on 2026-11-23; retained in the project history and no longer ranked.",
   "download": "",
   "donate": "",
   "videos": [],
   "updates": [
    {
     "date": "2026-11-24",
     "text": "Repo has returned 404 since Nov 23. Kept on the board for the record, no longer ranked."
    }
   ],
   "links": [],
   "metrics": [],
   "crypto": []
  }
 ],
 "tracks": [
  {
   "name": "Story progress",
   "pts": 17.5,
   "desc": "How far into the game you can play: Stuck in the opening → Prologue cleared → First missions → First act → Half the story → Main story to the credits → 100% completion."
  },
  {
   "name": "Rendering",
   "pts": 12.5,
   "desc": "How close the picture is to the console: Black or broken → Shapes drawn, mostly unlit → Lit, but major effects missing → Close to the console, minor glitches → Matches the console."
  },
  {
   "name": "Performance",
   "pts": 10,
   "desc": "Average FPS ÷ 30, on a named PC."
  },
  {
   "name": "Stability",
   "pts": 10,
   "desc": "From crashing constantly to stable over long sessions."
  }
 ],
 "scoringIntro": "One scale for every project, in two parts. Getting in is a ladder to 50%: groundwork fills the first 10%, then each step needs the one before it, up to Playable. Playing well fills the rest: how far you can play, how right it looks, how fast it runs and how long it keeps running. 100% is the whole game, finished."
};
