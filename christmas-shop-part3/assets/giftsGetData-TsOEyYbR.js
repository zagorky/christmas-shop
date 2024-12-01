(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(r){if(r.ep)return;r.ep=!0;const t=o(r);fetch(r.href,t)}})();const m=document.querySelector(".burger-menu"),u=document.querySelector(".navigation"),f=document.querySelectorAll(".nav-a"),y=769;function h(){window.innerWidth<y?k():g()}function k(){m.classList.toggle("open"),document.body.classList.toggle("blocked"),v("actionSmall","actionLarge"),u.classList.toggle("adaptiveNav")}function C(){window.innerWidth>y&&g()}function g(){m.classList.remove("open"),document.body.classList.remove("blocked"),u.classList.remove("adaptiveNav"),v("actionLarge","actionSmall")}function v(s,e){f.forEach(o=>{o.classList.add(e),o.classList.remove(s)})}function W(){m.addEventListener("click",()=>{h()}),f.forEach(s=>{s.addEventListener("click",()=>{h(),document.body.classList.remove("blocked")})}),window.addEventListener("resize",()=>{C()})}const L=[{name:"Console.log Guru",description:"Uses console.log like a crystal ball to find any issue.",category:"For Work",className:"for-work",superpowers:{live:"+500",create:"+500",love:"+200",dream:"+400"}},{name:"Step Master",description:"Gets 10,000 steps a day even while sitting at the computer.",category:"For Health",className:"for-health",superpowers:{live:"+400",create:"+300",love:"+500",dream:"+400"}},{name:"Bug Magnet",description:"Able to find bugs in code like they were placed there on purpose.",category:"For Work",className:"for-work",superpowers:{live:"+500",create:"+500",love:"+200",dream:"+400"}},{name:"Shortcut Cheater",description:"Knows every keyboard shortcut like they were born with them.",category:"For Work",className:"for-work",superpowers:{live:"+500",create:"+500",love:"+400",dream:"+200"}},{name:"Posture Levitation",description:"Can sit for hours, but maintains perfect posture like a ballerina.",category:"For Health",className:"for-health",superpowers:{live:"+400",create:"+500",love:"+500",dream:"+400"}},{name:"Bug Acceptance Guru",description:"Accepts bugs as part of the journey to perfection — it’s just another task.",category:"For Harmony",className:"for-harmony",superpowers:{live:"+300",create:"+200",love:"+500",dream:"+400"}},{name:"Snack Resister",description:"Ignoring desktop snacks like a strict dietician.",category:"For Health",className:"for-health",superpowers:{live:"+400",create:"+100",love:"+200",dream:"+400"}},{name:"Error Laugher",description:"Laughs at code errors like they’re jokes instead of getting angry.",category:"For Harmony",className:"for-harmony",superpowers:{live:"+300",create:"+200",love:"+500",dream:"+500"}},{name:"Hydration Bot",description:"Drinks the recommended 2 liters of water a day like a health-programmed robot.",category:"For Health",className:"for-health",superpowers:{live:"+500",create:"+300",love:"+500",dream:"+500"}},{name:"Merge Master",description:"Merges branches in Git without conflicts, like a wizard during an exam.",category:"For Work",className:"for-work",superpowers:{live:"+200",create:"+500",love:"+200",dream:"+300"}},{name:"Joy Charger",description:"Finds joy in the little things—even in a build that finishes unexpectedly fast.",category:"For Harmony",className:"for-harmony",superpowers:{live:"+200",create:"+200",love:"+500",dream:"+500"}},{name:"Spontaneous Coding Philosopher",description:"Philosophically accepts any client suggestion after a long refactor.",category:"For Harmony",className:"for-harmony",superpowers:{live:"+300",create:"+200",love:"+500",dream:"+400"}},{name:"Async Tamer",description:"Handles asynchronous code and promises like well-trained pets.",category:"For Work",className:"for-work",superpowers:{live:"+100",create:"+400",love:"+200",dream:"+300"}},{name:"CSS Tamer",description:"Can make Flexbox and Grid work together like they were always best friends.",category:"For Work",className:"for-work",superpowers:{live:"+200",create:"+500",love:"+200",dream:"+300"}},{name:"Time Hacker",description:"Writes code at the last moment but always meets the deadline.",category:"For Work",className:"for-work",superpowers:{live:"+500",create:"+500",love:"+500",dream:"+200"}},{name:"Layout Master",description:"Creates perfect layouts on the first try, like they can read the designer's mind.",category:"For Work",className:"for-work",superpowers:{live:"+500",create:"+300",love:"+200",dream:"+200"}},{name:"Documentation Whisperer",description:"Understands cryptic documentation as if they wrote it themselves.",category:"For Work",className:"for-work",superpowers:{live:"+500",create:"+500",love:"+200",dream:"+100"}},{name:"Feedback Master",description:"Accepts client revisions with the Zen calm of Buddha.",category:"For Work",className:"for-work",superpowers:{live:"+300",create:"+500",love:"+300",dream:"+400"}},{name:"Code Minimalist",description:"Writes code so concise that one line does more than a whole file.",category:"For Work",className:"for-work",superpowers:{live:"+500",create:"+500",love:"+500",dream:"+200"}},{name:"Pixel-Perfect Magician",description:"Aligns elements to the last pixel, even when the design looks abstract.",category:"For Work",className:"for-work",superpowers:{live:"+500",create:"+500",love:"+400",dream:"+400"}},{name:"Sleep Overlord",description:"Sleeps 6 hours but feels like they had 10.",category:"For Health",className:"for-health",superpowers:{live:"+400",create:"+500",love:"+500",dream:"+500"}},{name:"Break Guru",description:"Takes a stretch break every hour without forgetting, no matter how focused.",category:"For Health",className:"for-health",superpowers:{live:"+300",create:"+300",love:"+300",dream:"+400"}},{name:"Eye Protector",description:"Can work all day at the monitor without feeling like their eyes are on fire.",category:"For Health",className:"for-health",superpowers:{live:"+100",create:"+300",love:"+500",dream:"+400"}},{name:"Stress Dodger",description:"Masters meditation right at the keyboard.",category:"For Health",className:"for-health",superpowers:{live:"+100",create:"+400",love:"+200",dream:"+400"}},{name:"Yoga Coder",description:"Easily switches from coding to yoga and back.",category:"For Health",className:"for-health",superpowers:{live:"+400",create:"+400",love:"+400",dream:"+400"}},{name:"Healthy Snacker",description:"Always picks fruit, even when chocolate is within arm’s reach.",category:"For Health",className:"for-health",superpowers:{live:"+400",create:"+300",love:"+200",dream:"+400"}},{name:"Chair Exerciser",description:"Manages to work out without leaving the chair.",category:"For Health",className:"for-health",superpowers:{live:"+500",create:"+500",love:"+500",dream:"+400"}},{name:"Caffeine Filter",description:"Drinks coffee at night and still falls asleep with no problem.",category:"For Health",className:"for-health",superpowers:{live:"+400",create:"+300",love:"+500",dream:"+200"}},{name:"Deadline Sage",description:"Remains zen even when the deadline is close and the project manager is stressed.",category:"For Harmony",className:"for-harmony",superpowers:{live:"+200",create:"+200",love:"+300",dream:"+500"}},{name:"Inspiration Maestro",description:"Finds inspiration on an empty screen as if masterpieces are already there.",category:"For Harmony",className:"for-harmony",superpowers:{live:"+300",create:"+200",love:"+400",dream:"+100"}},{name:"Peace Keeper",description:"Maintains inner calm even in moments of intense crisis.",category:"For Harmony",className:"for-harmony",superpowers:{live:"+200",create:"+200",love:"+500",dream:"+500"}},{name:"Empathy Guru",description:"Feels the team’s mood and can lift everyone’s spirits.",category:"For Harmony",className:"for-harmony",superpowers:{live:"+500",create:"+200",love:"+500",dream:"+500"}},{name:"Laughter Generator",description:"Can lighten any tense situation with a joke that even bugs laugh at.",category:"For Harmony",className:"for-harmony",superpowers:{live:"+300",create:"+200",love:"+200",dream:"+500"}},{name:"Pause Master",description:"Knows when to just step back from the keyboard and breathe.",category:"For Harmony",className:"for-harmony",superpowers:{live:"+300",create:"+200",love:"+100",dream:"+100"}},{name:"Coder Healer",description:"Can support a colleague in their darkest hour, even if it’s a 500 error.",category:"For Harmony",className:"for-harmony",superpowers:{live:"+300",create:"+200",love:"+500",dream:"+500"}},{name:"Music Code Curator",description:"Creates work playlists so good, even deadlines follow the rhythm.",category:"For Harmony",className:"for-harmony",superpowers:{live:"+300",create:"+200",love:"+300",dream:"+200"}}];function E(s){return L.filter(o=>o.category===s)}function b(s){F(document.querySelector(".cards-container"));const e=H(N(s));M(e)}function N(s){return s==="All"?L:E(s)}function F(s){s.innerHTML=""}function H(s){return window.location.href.includes("gifts")?s:(x(s),s.slice(0,4))}function x(s){for(let e=s.length-1;e>0;e--){const o=Math.floor(Math.random()*(e+1));[s[e],s[o]]=[s[o],s[e]]}}function P(){b("All")}class S{constructor(e){const{category:o,name:n,description:r,className:t,superpowers:a={}}=e;this.name=n,this.category=o,this.description=r,this.className=t,this.superpowers=a,this.elem=this.createCardElems(),this.elem.addEventListener("click",()=>{const i=this.createPopup();document.body.append(i),document.body.classList.add("blocked"),i.showModal()})}createCardElems(){const e=this.category.toLowerCase().replace(" ","-"),o=this.createElem({nodeElem:"div",cssClasses:["card"]}),n=this.createElem({nodeElem:"div",cssClasses:[`cards-img-${e}`]}),r=this.createElem({nodeElem:"div",cssClasses:["card-text-container"]}),t=this.createElem({nodeElem:"h3",cssClasses:["header4",this.className],text:this.category}),a=this.createElem({nodeElem:"h4",cssClasses:["header3"],text:this.name});return o.append(n,r),r.append(t,a),o}createPopup(){const e=this.createElem({nodeElem:"dialog",cssClasses:["popup-dialog"]}),o=this.category.toLowerCase().replace(" ","-"),n=this.createElem({nodeElem:"div",cssClasses:["popup-container"]}),r=this.createElem({nodeElem:"div",cssClasses:[`popup-img-${o}`]}),t=this.createElem({nodeElem:"div",cssClasses:["popup-text-container"]}),a=this.createElem({nodeElem:"h3",cssClasses:["header4",this.className],text:this.category}),i=this.createElem({nodeElem:"h4",cssClasses:["header3"],text:this.name}),c=this.createElem({nodeElem:"p",cssClasses:["p"],text:this.description}),l=this.createElem({nodeElem:"h4",cssClasses:["header4"],text:"Adds superpowers to:"}),d=this.createElem({nodeElem:"button",cssClasses:["popup-close-btn"]}),p=this.createPopupSuperpowerList(this.superpowers);return d.addEventListener("click",()=>{e.close(),document.body.classList.remove("blocked"),e.remove()}),e.addEventListener("click",w=>{w.target===e&&(e.close(),document.body.classList.remove("blocked"),e.remove())}),t.append(a,i,c,l,p),n.append(r,t,d),e.append(n),e}createPopupSuperpowerList(e){const o=this.createElem({nodeElem:"ul",cssClasses:["popup-ul"],text:""});return Object.entries(e).forEach(([n,r])=>{const t=this.createElem({nodeElem:"div",cssClasses:["listElem"]}),a=this.createElem({nodeElem:"li",cssClasses:["popup-li"]}),i=this.createElem({nodeElem:"div",cssClasses:["p","superpowerName"],text:`${n.toUpperCase()} `}),c=this.createElem({nodeElem:"div",cssClasses:["p","superpowerValue"],text:`${r}`});t.append(i,c);const l=this.createElem({nodeElem:"div"});for(let d=1;d<=5;d+=1){const p=this.createElem({nodeElem:"span",cssClasses:["superpowerLogo"],child:`<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.1959 9.88162L10.6482 9.56542L12.1158 9.17219L11.8732 8.26704L9.50055 8.90278L8.38146 8.25667C8.39689 8.17336 8.40538 8.08765 8.40538 7.99997C8.40538 7.91229 8.39692 7.82655 8.38146 7.74327L9.50055 7.09716L11.8732 7.7329L12.1158 6.82775L10.6482 6.43452L11.1959 6.11831L13.546 5.97725L13.8921 4.02063L12.0246 3.34203L10.7274 5.30677L10.1797 5.62297L10.5729 4.15545L9.66778 3.91293L9.03204 6.28561L7.91226 6.93211C7.78247 6.82103 7.63242 6.73313 7.4683 6.67494V5.3828L9.20521 3.64586L8.5426 2.98325L7.46827 4.05755V3.42515L8.51792 1.32584L6.99976 0L5.48157 1.3259L6.53122 3.42521V4.05761L5.45689 2.98332L4.79429 3.64592L6.53119 5.38286V6.675C6.36708 6.73319 6.21702 6.82109 6.08724 6.93217L4.96746 6.28568L4.33171 3.91299L3.42656 4.15551L3.81979 5.62304L3.27213 5.30684L1.9749 3.34209L0.107422 4.02069L0.453485 5.97731L2.80362 6.11838L3.35128 6.43458L1.88375 6.82781L2.1263 7.73296L4.49898 7.09722L5.61807 7.74333C5.60264 7.82664 5.59414 7.91235 5.59414 8.00003C5.59414 8.08771 5.60261 8.17345 5.61807 8.25673L4.49898 8.90285L2.1263 8.2671L1.88375 9.17226L3.35128 9.56548L2.80362 9.88169L0.453485 10.0227L0.107422 11.9793L1.97493 12.6579L3.27216 10.6932L3.81985 10.377L3.42662 11.8445L4.33177 12.087L4.96752 9.71435L6.0873 9.06786C6.21708 9.17894 6.36714 9.26684 6.53125 9.32503V10.6172L4.79435 12.3541L5.45696 13.0167L6.53129 11.9424V12.5748L5.48163 14.6741L6.99983 16L8.51802 14.6741L7.46837 12.5748V11.9424L8.5427 13.0167L9.2053 12.3541L7.4684 10.6172V9.32503C7.63251 9.26684 7.78257 9.17894 7.91235 9.06786L9.03213 9.71435L9.66788 12.087L10.573 11.8445L10.1798 10.377L10.7275 10.6932L12.0247 12.6579L13.8922 11.9793L13.5462 10.0227L11.1959 9.88162Z" fill="currentColor"/>
</svg>
`});d<=r[1]&&(p.style.color="var(--primary-color)"),l.append(p)}t.append(l),a.append(t),o.append(a)}),o}createElem(e){const{nodeElem:o,cssClasses:n=[],attributes:r={},text:t,child:a}=e,i=document.createElement(o);return i.classList.add(...n),Object.entries(r).forEach(([c,l])=>{i.setAttribute(c,l)}),t&&(i.textContent=t),a&&i.insertAdjacentHTML("afterbegin",`${a}`),i}render(e){e.append(this.elem)}}function M(s){const e=document.querySelector(".cards-container");s.forEach(o=>{const{category:n,name:r,description:t,className:a,superpowers:i={}}=o;new S({category:n,name:r,description:t,className:a,superpowers:i}).render(e)})}export{y as T,P as a,b,W as i};
