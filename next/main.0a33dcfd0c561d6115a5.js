!function(e){function t(t){for(var o,a,r=t[0],c=t[1],l=t[2],u=0,b=[];u<r.length;u++)a=r[u],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&b.push(s[a][0]),s[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);for(d&&d(t);b.length;)b.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var c=n[r];0!==s[c]&&(o=!1)}o&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},s={5:0},i=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var t=[],n=s[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=s[e]=[t,o]}));t.push(n[2]=o);var i,r=document.createElement("script");r.charset="utf-8",r.timeout=120,a.nc&&r.setAttribute("nonce",a.nc),r.src=function(e){return a.p+""+({0:"vendors~desktop~sections~settings",1:"vendors~desktop~sections",2:"about",3:"changelog",4:"desktop",6:"maincontrols",7:"maps",8:"mobile",9:"notepad",10:"scores",11:"sections",12:"settings",13:"slidedrawer"}[e]||e)+".0a33dcfd0c561d6115a5.js"}(e);var c=new Error;i=function(t){r.onerror=r.onload=null,clearTimeout(l);var n=s[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",c.name="ChunkLoadError",c.type=o,c.request=i,n[1](c)}s[e]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:r})}),12e4);r.onerror=r.onload=i,document.head.appendChild(r)}return Promise.all(t)},a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a.oe=function(e){throw console.error(e),e};var r=window.webpackJsonp=window.webpackJsonp||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var d=c;i.push([98,14]),n()}({11:function(e,t,n){"use strict";n.d(t,"p",(function(){return r})),n.d(t,"k",(function(){return c})),n.d(t,"b",(function(){return l})),n.d(t,"o",(function(){return d})),n.d(t,"j",(function(){return u})),n.d(t,"a",(function(){return b})),n.d(t,"r",(function(){return p})),n.d(t,"m",(function(){return g})),n.d(t,"d",(function(){return m})),n.d(t,"q",(function(){return y})),n.d(t,"l",(function(){return f})),n.d(t,"c",(function(){return S})),n.d(t,"n",(function(){return O})),n.d(t,"g",(function(){return w})),n.d(t,"f",(function(){return j})),n.d(t,"i",(function(){return h})),n.d(t,"h",(function(){return k}));var o=n(12),s=n(20),i=n(5);const a=Object(o.b)({name:"Scores",initialState:function(){var e,t,n,o;const a=localStorage.getItem(i.b+"scores");if(a){const i=JSON.parse(a);return{crewmateWins:null!==(e=i.crewmateWins)&&void 0!==e?e:s.a.crewmateWins,crewmateLosses:null!==(t=i.crewmateLosses)&&void 0!==t?t:s.a.crewmateLosses,impostorWins:null!==(n=i.impostorWins)&&void 0!==n?n:s.a.impostorWins,impostorLosses:null!==(o=i.impostorLosses)&&void 0!==o?o:s.a.impostorLosses}}return s.a}(),reducers:{setCrewmateWins:(e,t)=>Object.assign(Object.assign({},e),{crewmateWins:t.payload}),incrementCrewmateWins:e=>Object.assign(Object.assign({},e),{crewmateWins:e.crewmateWins+1}),decrementCrewmateWins:e=>Object.assign(Object.assign({},e),{crewmateWins:e.crewmateWins?e.crewmateWins-1:0}),setCrewmateLosses:(e,t)=>Object.assign(Object.assign({},e),{crewmateLosses:t.payload}),incrementCrewmateLosses:e=>Object.assign(Object.assign({},e),{crewmateLosses:e.crewmateLosses+1}),decrementCrewmateLosses:e=>Object.assign(Object.assign({},e),{crewmateLosses:e.crewmateLosses?e.crewmateLosses-1:0}),setImpostorWins:(e,t)=>Object.assign(Object.assign({},e),{impostorWins:t.payload}),incrementImpostorWins:e=>Object.assign(Object.assign({},e),{impostorWins:e.impostorWins+1}),decrementImpostorWins:e=>Object.assign(Object.assign({},e),{impostorWins:e.impostorWins?e.impostorWins-1:0}),setImpostorLosses:(e,t)=>Object.assign(Object.assign({},e),{impostorLosses:t.payload}),incrementImpostorLosses:e=>Object.assign(Object.assign({},e),{impostorLosses:e.impostorLosses+1}),decrementImpostorLosses:e=>Object.assign(Object.assign({},e),{impostorLosses:e.impostorLosses?e.impostorLosses-1:0}),resetScoresState:()=>Object.assign({},s.a)}}),{setCrewmateWins:r,incrementCrewmateWins:c,decrementCrewmateWins:l,setCrewmateLosses:d,incrementCrewmateLosses:u,decrementCrewmateLosses:b,setImpostorWins:p,incrementImpostorWins:g,decrementImpostorWins:m,setImpostorLosses:y,incrementImpostorLosses:f,decrementImpostorLosses:S,resetScoresState:O}=a.actions,w=e=>e.Scores.crewmateWins,j=e=>e.Scores.crewmateLosses,h=e=>e.Scores.impostorWins,k=e=>e.Scores.impostorLosses;t.e=a},13:function(e,t,n){"use strict";n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return c}));var o=n(15),s=n(5);function i(e){const t=Object.keys(o.a),n={};for(const o of t)n[o]=Object.assign({},e(o));return n}function a(){return i(e=>Object.assign(Object.assign({},o.a[e]),{position:Object.assign({},o.a[e].position)}))}function r(e){return i(t=>Object.assign(Object.assign({},e[t]),{position:Object.assign({},o.a[t].position)}))}function c(){const e=localStorage.getItem(s.b+"players");if(e){const t=JSON.parse(e);return i(e=>{var n,s,i,a;return{name:null!==(n=t[e].name)&&void 0!==n?n:o.a[e].name,color:o.a[e].color,position:{x:null!==(s=t[e].position.x)&&void 0!==s?s:o.a[e].position.x,y:null!==(i=t[e].position.y)&&void 0!==i?i:o.a[e].position.y},section:null!==(a=t[e].section)&&void 0!==a?a:o.a[e].section}})}return a()}},14:function(e,t,n){"use strict";n.d(t,"m",(function(){return a})),n.d(t,"l",(function(){return r})),n.d(t,"q",(function(){return c})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return d})),n.d(t,"o",(function(){return u})),n.d(t,"n",(function(){return b})),n.d(t,"i",(function(){return p})),n.d(t,"p",(function(){return g})),n.d(t,"k",(function(){return m})),n.d(t,"j",(function(){return y})),n.d(t,"e",(function(){return f})),n.d(t,"d",(function(){return S})),n.d(t,"h",(function(){return O})),n.d(t,"f",(function(){return w})),n.d(t,"g",(function(){return j}));var o=n(12),s=n(25);const i=Object(o.b)({name:"Sections",initialState:Object(s.c)(),reducers:{setResetSection:(e,t)=>Object.assign(Object.assign({},e),{resetSection:t.payload}),setDeadSection:(e,t)=>Object.assign(Object.assign({},e),{deadSection:t.payload}),setUnusedSection:(e,t)=>Object.assign(Object.assign({},e),{unusedSection:t.payload}),addNewSection:e=>Object.assign(Object.assign({},e),{sections:[...e.sections,{id:e.sections.length,title:"",players:[]}]}),delSection:(e,t)=>{let n=e.resetSection,o=e.deadSection,s=e.unusedSection;const i=[];return e.sections.forEach(a=>{a.id!==t.payload&&(a.id===e.resetSection&&(n=i.length),a.id===e.deadSection&&(o=i.length),a.id===e.unusedSection&&(s=i.length),i.push({id:i.length,title:a.title,players:a.players}))}),{resetSection:n,deadSection:o,unusedSection:s,sections:i}},setSectionTitle:(e,t)=>Object.assign(Object.assign({},e),{sections:[...e.sections.map(e=>{const n=Object.assign({},e);return e.id===t.payload.section&&(n.title=t.payload.newTitle),n})]}),setSectionPlayers:(e,t)=>Object.assign(Object.assign({},e),{sections:[...e.sections.map(e=>{const n=Object.assign({},e);return e.id===t.payload.section&&(n.players=t.payload.newPlayers),n})]}),movePlayersToResetSection:e=>Object.assign(Object.assign({},e),{sections:Object(s.d)(e.sections,e.resetSection)}),setSections:(e,t)=>Object.assign(Object.assign({},e),{sections:t.payload}),resetSpecialSections:e=>Object.assign(Object.assign({},e),Object(s.b)()),resetSectionsState:()=>Object(s.a)()}}),{setResetSection:a,setDeadSection:r,setUnusedSection:c,addNewSection:l,delSection:d,setSectionTitle:u,setSectionPlayers:b,movePlayersToResetSection:p,setSections:g,resetSpecialSections:m,resetSectionsState:y}=i.actions,f=e=>e.Sections.resetSection,S=e=>e.Sections.deadSection,O=e=>e.Sections.unusedSection,w=e=>e.Sections.sections,j=e=>e.Sections;t.b=i},15:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return i}));var o=n(8);const s={black:{name:"",color:"black",position:{x:0,y:880},section:o.b},blue:{name:"",color:"blue",position:{x:148,y:880},section:o.b},brown:{name:"",color:"brown",position:{x:296,y:880},section:o.b},cyan:{name:"",color:"cyan",position:{x:444,y:880},section:o.b},green:{name:"",color:"green",position:{x:592,y:880},section:o.b},lime:{name:"",color:"lime",position:{x:740,y:880},section:o.b},orange:{name:"",color:"orange",position:{x:888,y:880},section:o.b},pink:{name:"",color:"pink",position:{x:1036,y:880},section:o.b},purple:{name:"",color:"purple",position:{x:1184,y:880},section:o.b},red:{name:"",color:"red",position:{x:1332,y:880},section:o.b},white:{name:"",color:"white",position:{x:1480,y:880},section:o.b},yellow:{name:"",color:"yellow",position:{x:1628,y:880},section:o.b}},i={black:{alive:{x:0,y:0,w:148,h:198},dead:{x:0,y:198,w:124,h:117}},blue:{alive:{x:148,y:0,w:148,h:198},dead:{x:124,y:198,w:124,h:117}},brown:{alive:{x:296,y:0,w:148,h:198},dead:{x:248,y:198,w:124,h:117}},cyan:{alive:{x:444,y:0,w:148,h:198},dead:{x:372,y:198,w:124,h:117}},green:{alive:{x:592,y:0,w:148,h:198},dead:{x:496,y:198,w:124,h:117}},lime:{alive:{x:740,y:0,w:148,h:198},dead:{x:620,y:198,w:124,h:117}},orange:{alive:{x:888,y:0,w:148,h:198},dead:{x:744,y:198,w:124,h:117}},pink:{alive:{x:1036,y:0,w:148,h:198},dead:{x:868,y:198,w:124,h:117}},purple:{alive:{x:1184,y:0,w:148,h:198},dead:{x:992,y:198,w:124,h:117}},red:{alive:{x:1332,y:0,w:148,h:198},dead:{x:1116,y:198,w:124,h:117}},white:{alive:{x:1480,y:0,w:148,h:198},dead:{x:1240,y:198,w:124,h:117}},yellow:{alive:{x:1628,y:0,w:148,h:198},dead:{x:1364,y:198,w:124,h:117}}}},16:function(e,t,n){"use strict";n.d(t,"h",(function(){return r})),n.d(t,"i",(function(){return c})),n.d(t,"j",(function(){return l})),n.d(t,"g",(function(){return d})),n.d(t,"l",(function(){return u})),n.d(t,"k",(function(){return b})),n.d(t,"e",(function(){return p})),n.d(t,"d",(function(){return g})),n.d(t,"f",(function(){return m})),n.d(t,"b",(function(){return y})),n.d(t,"c",(function(){return f}));var o=n(12),s=n(13),i=n(15);const a=Object(o.b)({name:"Players",initialState:Object(s.c)(),reducers:{setPlayerName:(e,t)=>Object(s.d)(n=>n===t.payload.player?Object.assign(Object.assign({},e[n]),{name:t.payload.newName,position:Object.assign({},e[n].position)}):Object.assign(Object.assign({},e[n]),{position:Object.assign({},e[n].position)})),setPlayerPosition:(e,t)=>Object(s.d)(n=>n===t.payload.player?Object.assign(Object.assign({},e[n]),{position:t.payload.newPosition}):Object.assign(Object.assign({},e[n]),{position:Object.assign({},e[n].position)})),setPlayerSection:(e,t)=>Object(s.d)(n=>n===t.payload.player?Object.assign(Object.assign({},e[n]),{section:t.payload.newSection,position:Object.assign({},e[n].position)}):Object.assign(Object.assign({},e[n]),{position:Object.assign({},e[n].position)})),setPlayer:(e,t)=>Object(s.d)(n=>n===t.payload.color?t.payload:Object.assign(Object.assign({},e[n]),{position:Object.assign({},e[n].position)})),setPlayersState:(e,t)=>t.payload,setPlayersSection:(e,t)=>Object(s.d)(n=>Object.assign(Object.assign({},e[n]),{position:Object.assign({},e[n].position),section:t.payload})),resetPlayersPositions:e=>Object(s.d)(t=>Object.assign(Object.assign({},e[t]),{position:Object.assign({},i.a[t].position)})),resetPlayersNames:e=>Object(s.d)(t=>Object.assign(Object.assign({},e[t]),{name:i.a[t].name})),resetPlayersState:()=>Object(s.b)()}}),{setPlayerName:r,setPlayerPosition:c,setPlayerSection:l,setPlayer:d,setPlayersState:u,setPlayersSection:b,resetPlayersPositions:p,resetPlayersNames:g,resetPlayersState:m}=a.actions,y=e=>t=>t.Players[e],f=e=>e.Players;t.a=a},18:function(e,t,n){"use strict";n.d(t,"f",(function(){return r})),n.d(t,"h",(function(){return c})),n.d(t,"e",(function(){return l})),n.d(t,"g",(function(){return d})),n.d(t,"d",(function(){return u})),n.d(t,"c",(function(){return b})),n.d(t,"b",(function(){return p}));var o=n(12),s=n(24),i=n(5);const a=Object(o.b)({name:"Settings",initialState:function(){var e,t;const n=localStorage.getItem(i.b+"settings");if(n){const o=JSON.parse(n);return{showNames:null!==(e=o.showNames)&&void 0!==e?e:s.b.showNames,isColorBlind:null!==(t=o.isColorBlind)&&void 0!==t?t:s.b.isColorBlind}}return Object.assign({},s.b)}(),reducers:{setShowNames:(e,t)=>Object.assign(Object.assign({},e),{showNames:t.payload}),toggleShowNames:e=>Object.assign(Object.assign({},e),{showNames:!e.showNames}),setIsColorBlind:(e,t)=>Object.assign(Object.assign({},e),{isColorBlind:t.payload}),toggleIsColorBlind:e=>Object.assign(Object.assign({},e),{isColorBlind:!e.isColorBlind}),resetSettingsState:()=>Object.assign({},s.b)}}),{setShowNames:r,toggleShowNames:c,setIsColorBlind:l,toggleIsColorBlind:d,resetSettingsState:u}=a.actions,b=e=>e.Settings.showNames,p=e=>e.Settings.isColorBlind;t.a=a},20:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));const o={crewmateWins:0,crewmateLosses:0,impostorWins:0,impostorLosses:0}},24:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return s}));const o={showNames:!0,isColorBlind:!1},s=[{id:"en-US",label:"English (US)"},{id:"es-MX",label:"Español (MX)"},{id:"pt-BR",label:"Português (BR)"},{id:"ru-RU",label:"Русский (RU)"},{id:"de-DE",label:"Deutsch (DE)"},{id:"fa-IR",label:"فارسی (IR)"},{id:"pl-PL",label:"Polskie (PL)"},{id:"fr-FR",label:"Français (FR)"},{id:"cs-CZ",label:"Čeština (CZ)"},{id:"he-IL",label:"עִברִית (IL)"},{id:"mg-MG",label:"Malagasy (MG)"},{id:"ja-JA",label:"日本語 (JA)"}]},25:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return l}));var o=n(8),s=n(5);function i(){return{resetSection:o.b,deadSection:o.a,unusedSection:o.d}}function a(){return[...o.c.map(e=>({id:e.id,title:e.title,players:[...e.players.map(e=>({id:e.id}))]}))]}function r(){return Object.assign(Object.assign({},i()),{sections:a()})}function c(){var e,t,n,i;const c=localStorage.getItem(s.b+"sections");if(c){const s=JSON.parse(c);let r=null!==(e=s.sections)&&void 0!==e?e:a();return r=[...r.map(e=>Object.assign(Object.assign({},e),{players:[...e.players.map(e=>({id:e.id.toLowerCase()}))]}))],{resetSection:null!==(t=s.resetSection)&&void 0!==t?t:o.b,deadSection:null!==(n=s.deadSection)&&void 0!==n?n:o.a,unusedSection:null!==(i=s.unusedSection)&&void 0!==i?i:o.d,sections:r}}return r()}function l(e,t){const n=[];let o=[];for(const t of e)n.push(Object.assign(Object.assign({},t),{players:[]})),o=o.concat(t.players);return n[t].players=o,n}},26:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return r})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return d}));var o=n(12),s=n(5);const i=Object(o.b)({name:"Device",initialState:{isMobile:window.innerWidth<=s.a,orientation:window.innerHeight>window.innerWidth?"portrait":"landscape"},reducers:{setIsMobile:(e,t)=>Object.assign(Object.assign({},e),{isMobile:t.payload}),setOrientation:(e,t)=>Object.assign(Object.assign({},e),{orientation:t.payload}),resetDeviceState:()=>({isMobile:window.innerWidth<=s.a,orientation:window.innerHeight>window.innerWidth?"portrait":"landscape"})}}),{setIsMobile:a,setOrientation:r,resetDeviceState:c}=i.actions,l=e=>e.Device.isMobile,d=e=>e.Device.orientation;t.a=i},32:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return s}));const o={fontFamily:"Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",baseFontSize:16,textColorPrimary:"#eeeeee",textColorSecondary:"#ffffff",backgroundColorPrimary:"#202225",backgroundColorSecondary:"#282b2f",linkColor:"#9EC4D5",linkColorHover:"#C2D2E3",dangerColor:"#8B0000",dangerColorHover:"#be0000",activeColor:"#667c84",borderColor:"#36383a",crewmateColorPrimary:"#008dfc",crewmateColorSecondary:"#30a4ff",impostorColorPrimary:"#af1211",impostorColorSecondary:"#dd1716",neutralColor:"#8d86b7"},s={black:{base:"#3F484E",dark:"#1E1F25"},blue:{base:"#132FD2",dark:"#09158E"},brown:{base:"#72491E",dark:"#5E2614"},cyan:{base:"#39FEDB",dark:"#24A9BE"},green:{base:"#127F2D",dark:"#0A4D2D"},lime:{base:"#50EF3A",dark:"#16A843"},orange:{base:"#EF7D0E",dark:"#B53F15"},pink:{base:"#ED53B9",dark:"#AC2CAD"},purple:{base:"#6B30BC",dark:"#3C177C"},red:{base:"#C51111",dark:"#7B0838"},white:{base:"#D5E0EF",dark:"#8396BF"},yellow:{base:"#F5F558",dark:"#C38821"}}},37:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return a})),n.d(t,"d",(function(){return r}));var o=n(32);function s(e,t="base"){return void 0!==o.a[e.toLowerCase()]?i("dark"===t?o.a[e.toLowerCase()].dark:o.a[e.toLowerCase()].base):"0, 0, 0"}function i(e){let t=0,n=0,o=0;return e=e.replace("#",""),t=parseInt(e.slice(0,2),16),n=parseInt(e.slice(2,4),16),o=parseInt(e.slice(4,6),16),`${t},${n},${o}`}function a(e,t){return function(e){const t=e.split(",");return.2126*parseInt(t[0])+.7152*parseInt(t[1])+.0733*parseInt(t[2])}(e)>=140?t.backgroundColorSecondary:t.textColorSecondary}function r(e,t){let n=!1;"#"==e[0]&&(e=e.slice(1),n=!0);const o=parseInt(e,16);let s=(o>>16)+t;s>255?s=255:s<0&&(s=0);let i=(o>>8&255)+t;i>255?i=255:i<0&&(i=0);let a=(255&o)+t;return a>255?a=255:a<0&&(a=0),(n?"#":"")+(a|i<<8|s<<16).toString(16)}},44:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var o=n(46),s=n(0),i=n.n(s),a=n(45),r=n.n(a),c=n(17),l=n(37),d=Object(c.d)(e=>({Button:{display:"inline-block",cursor:"pointer",textAlign:"center",border:0,padding:".5rem .75rem",fontFamily:e.fontFamily,fontWeight:600,borderRadius:"0.5rem",color:e.linkColor,transition:"all 0.2s ease",backgroundColor:`rgba(${Object(l.c)(e.linkColor)}, 0.15)`,boxShadow:"1px 1px 1px rgba(0,0,0,0.25)","&:hover:enabled":{color:e.linkColorHover,backgroundColor:`rgba(${Object(l.c)(e.linkColor)}, 0.25)`},"&:focus:not(:active)":{outline:"none",boxShadow:"0 0 0.25rem "+e.linkColor},"&:active:enabled":{boxShadow:"inset 1px 1px 1px rgba(0,0,0,0.5)",backgroundColor:e.backgroundColorSecondary}},danger:{backgroundColor:`rgba(${Object(l.c)(e.dangerColor)}, 0.5)`,color:e.textColorPrimary,"&:hover":{backgroundColor:`rgba(${Object(l.c)(e.dangerColorHover)}, 0.5)`,color:e.textColorSecondary}},fullWidth:{width:"100%"},pressed:{cursor:"default",backgroundColor:e.backgroundColorPrimary,boxShadow:"inset 1px 1px 1px rgba(0,0,0,0.5)","&:hover":{color:e.linkColor,backgroundColor:e.backgroundColorSecondary}},CloseButton:{width:"2rem",lineHeight:"2rem",height:"2rem",padding:0,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center"}})),u=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(n[o[s]]=e[o[s]])}return n};function b(e){const t=d(),{className:n,children:o,fullWidth:s,danger:a,pressed:c,onClick:l}=e,b=u(e,["className","children","fullWidth","danger","pressed","onClick"]);return i.a.createElement("button",Object.assign({onClick:l,className:r()({[t.Button]:!0,[t.danger]:a,[t.pressed]:c,[t.fullWidth]:s},n)},b),o)}function p(e){const t=d(),{onClick:n}=e,s=u(e,["onClick"]);return i.a.createElement(b,Object.assign({onClick:n,className:t.CloseButton},s,{"aria-label":"Close"}),i.a.createElement(o.a,{icon:"times"}))}t.b=b},47:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return c}));var o=n(12);const s=Object(o.b)({name:"PlayerEditLock",initialState:!1,reducers:{setPlayerEditLock:(e,t)=>t.payload,togglePlayerEditLock:e=>!e,resetPlayerEditLockState:()=>!1}}),{setPlayerEditLock:i,togglePlayerEditLock:a,resetPlayerEditLockState:r}=s.actions,c=e=>e.PlayerEditLock;t.a=s},48:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return c}));var o=n(12);const s=Object(o.b)({name:"Maps",initialState:{currentMap:"TheSkeld",cameraPosition:{x:0,y:0},scale:1},reducers:{setCurrentMap:(e,t)=>Object.assign(Object.assign({},e),{currentMap:t.payload}),setCameraPosition:(e,t)=>Object.assign(Object.assign({},e),{cameraPosition:t.payload}),setScale:(e,t)=>Object.assign(Object.assign({},e),{scale:t.payload})}}),{setCurrentMap:i,setCameraPosition:a,setScale:r}=s.actions,c=e=>e.Maps.currentMap;t.a=s},5:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return i}));const o="1.0.0-beta.1",s=846,i="fusliez-notes-"},8:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return s})),n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return a}));const o=4,s=3,i=5,a=[{id:0,title:"main.lists.innocent",players:[]},{id:1,title:"main.lists.suspicious",players:[]},{id:2,title:"main.lists.evilHitList",players:[]},{id:3,title:"main.lists.dead",players:[]},{id:4,title:"main.lists.unknown",players:[{id:"black"},{id:"blue"},{id:"brown"},{id:"cyan"},{id:"green"},{id:"lime"},{id:"orange"},{id:"pink"},{id:"purple"},{id:"red"},{id:"white"},{id:"yellow"}]},{id:5,title:"main.lists.unused",players:[]}]},98:function(e,t,n){"use strict";n.r(t);var o=n(50),s=n(52),i=n(42),a=n(22);i.a.use(s.a).use(o.a).use(a.e).init({fallbackLng:"en-US",debug:!1,load:"currentOnly",interpolation:{escapeValue:!1},backend:{loadPath:"./assets/locales/{{lng}}/{{ns}}.json"}});i.a;var r=n(17),c=n(32),l=n(5),d=n(99),u=n(100),b=n(26),p=n(30),g=n(44),m=n(0),y=n.n(m),f=Object(r.d)(e=>({"@global":{body:{backgroundColor:e.backgroundColorPrimary,color:e.textColorPrimary,fontFamily:e.fontFamily,fontSize:e.baseFontSize},input:{color:e.textColorPrimary,fontFamily:e.fontFamily},textarea:{backgroundColor:e.backgroundColorSecondary,color:e.textColorPrimary,border:"1px solid "+e.borderColor},a:{color:e.linkColor},select:{display:"inline-block",width:"100%",cursor:"pointer",padding:".5rem 1rem",outline:0,border:"1px solid "+e.borderColor,borderRadius:0,background:e.backgroundColorSecondary,color:e.textColorPrimary,appearance:"none"}},LayoutDisclaimer:{position:"absolute",bottom:0,left:0,padding:"0.5rem",textAlign:"center",backgroundColor:e.backgroundColorSecondary,zIndex:20,width:"100%"}}));const S=y.a.lazy(()=>Promise.all([n.e(0),n.e(1),n.e(4)]).then(n.bind(null,290))),O=y.a.lazy(()=>n.e(8).then(n.bind(null,291)));var w=function(){const[e,t]=y.a.useState(window.innerWidth),[n,o]=y.a.useState(localStorage.getItem(l.b+"disclaimer")),s=Object(p.c)(b.b),i=Object(p.c)(b.c),a=Object(p.b)(),{t:r,i18n:c}=Object(d.a)(),m=f();let w=y.a.createElement(S,null);return y.a.useEffect(()=>{const e=localStorage.getItem(l.b+"version");if(null===e||e!==l.c){const e=localStorage.getItem(l.b+"data");if(e){const t=JSON.parse(e);localStorage.setItem(l.b+"notes",t.notes),localStorage.removeItem(l.b+"data")}}},[]),y.a.useEffect(()=>{const e=()=>{t(window.innerWidth),a(Object(b.d)(window.innerWidth<=l.a))};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[e]),y.a.useEffect(()=>{const e=()=>{a(Object(b.e)(window.innerHeight<window.innerWidth?"portrait":"landscape"))};return window.addEventListener("orientationchange",e),()=>{window.removeEventListener("orientationchange",e)}},[window,i]),s&&(w=y.a.createElement(O,null)),y.a.createElement(y.a.Fragment,null,w,null===n&&y.a.createElement("div",{style:{direction:c.dir()},className:m.LayoutDisclaimer},y.a.createElement("p",null,y.a.createElement(u.a,{i18nKey:"main.disclaimer"},"Please know that we utilize Google Analytics to collect anonymous data, to help us with development.",y.a.createElement("br",null),"For information on how Google utilizes or collects data please check",y.a.createElement("a",{href:"https://policies.google.com/technologies/partner-sites",target:"_blank",rel:"noopener noreferrer"},"here"),".")),y.a.createElement(g.b,{onClick:()=>{o("Understood"),localStorage.setItem(l.b+"disclaimer","Understood")}},r("main.understand"))))},j=n(58),h=n.n(j),k=n(34);function v(){r.e.setup(Object(k.a)());const e=new r.b,t=r.e.createStyleSheet(h.a).attach(),n=r.e.createStyleSheet({"@global":{"*, *:before, *:after":{boxSizing:"inherit"},html:{boxSizing:"border-box",height:"100%"},body:{fontWeight:400,lineHeight:1.5,height:"100%"},"#root":{display:"flex",flexDirection:"column",height:"100%",maxWidth:"1920px",margin:"0 auto",width:"100vw",overflowX:"hidden"},h1:{fontSize:"2rem",margin:0},h2:{fontSize:"1.75rem",margin:".5rem 0",fontWeight:"500",lineHeight:"1.2"},h3:{margin:0},h4:{margin:".5rem 0"},img:{maxWidth:"100%",height:"auto"},input:{backgroundColor:"transparent",fontWeight:400,appearance:"none",border:"none",boxShadow:"none"},"input::-webkit-outer-spin-button,input::-webkit-inner-spin-button":{"-webkit-appearance":"none",margin:0},"input[type=number]":{"-moz-appearance":"textfield"},textarea:{fontFamily:"inherit",padding:".375rem .75rem",borderRadius:"0.5rem"},a:{textDecoration:"none","&:hover":{textDecoration:"underline"},"&:focus":{textDecoration:"underline"}},ul:{marginTop:0},li:{fontSize:"1rem"},".sr-only":{border:0,clip:"rect(0, 0, 0, 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px"}}}).attach();return e.add(t),e.add(n),e}var C=n(72),x=n(71),P=n(65),L=n(64),E=n(67),W=n(59),I=n(66),N=n(60),B=n(61),D=n(73),F=n(68),M=n(62),z=n(63),A=n(69),R=n(70),H=n(29);var U=n(12),J=n(48),T=n(47),q=n(13),$=n(16),_=n(15);var G=n(11),X=n(20);var Z=n(8),K=n(14),V=n(25);var Q=n(18),Y=n(24);var ee=Object(U.a)({reducer:{Settings:Q.a.reducer,Device:b.a.reducer,Scores:G.e.reducer,Players:$.a.reducer,PlayerEditLock:T.a.reducer,Sections:K.b.reducer,Maps:J.a.reducer},middleware:[...Object(U.c)(),e=>t=>n=>{const o=e.getState();let s=Object(Q.c)(o),i=Object(Q.b)(o),a=!0;switch(n.type){case Q.f.type:s=n.payload;break;case Q.h.type:s=!Object(Q.c)(o);break;case Q.e.type:i=n.payload;break;case Q.g.type:i=!Object(Q.b)(o);break;case Q.d.type:s=Y.b.showNames,i=Y.b.isColorBlind;break;default:a=!1}return a&&localStorage.setItem(l.b+"settings",JSON.stringify({showNames:s,isColorBlind:i})),t(n)},e=>t=>n=>{const o=e.getState();let s=Object(G.g)(o),i=Object(G.f)(o),a=Object(G.i)(o),r=Object(G.h)(o),c=!0;switch(n.type){case G.p.type:s=n.payload;break;case G.k.type:s++;break;case G.b.type:s--,s<0&&(s=0);break;case G.o.type:i=n.payload;break;case G.j.type:i++;break;case G.a.type:i--,i<0&&(i=0);break;case G.r.type:a=n.payload;break;case G.m.type:a++;break;case G.d.type:a--,a<0&&(a=0);break;case G.q.type:r=n.paylaod;break;case G.l.type:r++;break;case G.c.type:r--;break;case G.n.type:s=X.a.crewmateWins,i=X.a.crewmateLosses,a=X.a.impostorWins,r=X.a.impostorLosses;break;default:c=!1}return c&&localStorage.setItem(l.b+"scores",JSON.stringify({crewmateWins:s,crewmateLosses:i,impostorWins:a,impostorLosses:r})),t(n)},e=>t=>n=>{const o=e.getState(),s=Object($.c)(o);let i=Object(q.d)(e=>Object.assign(Object.assign({},s[e]),{position:Object.assign({},s[e].position)})),a=!0;switch(n.type){case $.h.type:i[n.payload.player].name=n.payload.newName;break;case $.i.type:i[n.payload.player].position=n.payload.newPosition;break;case $.j.type:i[n.payload.player].section=n.payload.newSection;break;case $.g.type:i[n.payload.color]=n.payload;break;case $.l.type:i=n.payload;break;case $.k.type:i=Object(q.d)(e=>Object.assign(Object.assign({},s[e]),{section:n.payload}));break;case $.e.type:i=Object(q.a)(i);break;case $.d.type:i=Object(q.d)(e=>Object.assign(Object.assign({},s[e]),{name:_.a[e].name}));case $.f.type:i=Object(q.b)();default:a=!1}return a&&localStorage.setItem(l.b+"players",JSON.stringify(i)),t(n)},e=>t=>n=>{const o=e.getState(),s=Object(K.g)(o);let i={resetSection:s.resetSection,deadSection:s.deadSection,unusedSection:s.unusedSection,sections:[...s.sections.map(e=>({id:e.id,title:e.title,players:[...e.players.map(e=>({id:e.id}))]}))]},a=!0;switch(n.type){case K.m.type:i.resetSection=n.payload;break;case K.l.type:i.deadSection=n.payload;break;case K.q.type:i.unusedSection=n.payload;break;case K.a.type:i.sections=[...i.sections,{id:i.sections.length,title:"",players:[]}];break;case K.c.type:let e=i.resetSection,t=i.deadSection,o=i.unusedSection;const s=[];i.sections.forEach(a=>{a.id!==n.payload&&(a.id===i.resetSection&&(e=s.length),a.id===i.deadSection&&(t=s.length),a.id===i.unusedSection&&(o=s.length),s.push({id:s.length,title:a.title,players:a.players}))}),i={resetSection:e,deadSection:t,unusedSection:o,sections:s};break;case K.o.type:i.sections=[...i.sections.map(e=>{const t=Object.assign({},e);return e.id===n.payload.section&&(t.title=n.payload.newTitle),t})];break;case K.n.type:i.sections=[...i.sections.map(e=>{const t=Object.assign({},e);return e.id===n.payload.section&&(t.players=n.payload.newPlayers),t})];break;case K.i.type:i.sections=Object(V.d)(i.sections,i.resetSection);break;case K.p.type:i.sections=n.payload;break;case K.k.type:i.resetSection=Z.b,i.deadSection=Z.a,i.unusedSection=Z.d;break;case K.j.type:i=Object(V.a)();break;default:a=!1}return a&&localStorage.setItem(l.b+"sections",JSON.stringify(i)),t(n)}]});var te=n(38),ne=function(e,t,n,o){return new(n||(n=Promise))((function(s,i){function a(e){try{c(o.next(e))}catch(e){i(e)}}function r(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,r)}c((o=o.apply(e,t||[])).next())}))};n.n(te).a.render(y.a.createElement((function(){return H.b.add(W.faHeart,N.faMinus,B.faPlus,M.faTimes,z.faUserAstronaut,L.faEdit,P.faCompactDisc,I.faMap,E.faEllipsisH,F.faSort,A.faUsers,R.faUsersSlash,x.faArrowRight,C.faArrowLeft,D.faSkullCrossbones),y.a.createElement(y.a.Fragment,null,y.a.createElement(p.a,{store:ee},y.a.createElement(r.a,{registry:v()},y.a.createElement(r.c,{theme:c.b},y.a.createElement(y.a.Suspense,{fallback:"Loading..."},y.a.createElement(w,null))))))}),null),document.getElementById("root"));const oe=()=>{const e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",e+"px")};window.addEventListener("load",oe),window.addEventListener("resize",oe);ne(void 0,void 0,void 0,(function*(){"wakeLock"in navigator&&(yield null===navigator||void 0===navigator?void 0:navigator.wakeLock.request("screen"))})),document.addEventListener("visibilitychange",()=>ne(void 0,void 0,void 0,(function*(){"wakeLock"in navigator&&"visible"===document.visibilityState&&(yield null===navigator||void 0===navigator?void 0:navigator.wakeLock.request("screen"))})))}});