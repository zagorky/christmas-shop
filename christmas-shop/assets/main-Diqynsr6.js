import{i as B}from"./giftsMenu-BPhJ6Ay9.js";const m=document.querySelector(".burger-menu");document.querySelector(".burger");const y=document.querySelector(".navigation"),M=document.querySelectorAll(".nav-a");function S(){window.innerWidth<768&&(m.classList.toggle("open"),T("open")),k("open")}function k(e){m.classList.contains(e)?document.body.classList.add("blocked"):document.body.classList.remove("blocked")}function T(e){m.classList.contains(e),y.classList.toggle("adaptiveNav")}function W(){window.innerWidth>768&&(y.classList.remove("adaptiveNav"),m.classList.remove("open"))}function G(){document.addEventListener("DOMContentLoaded",()=>{m.addEventListener("click",S),M.forEach(e=>{e.addEventListener("click",S)})}),window.addEventListener("resize",W)}const O="./src/data/gifts.json";let v=[];class H{constructor(t,n,c,a,l,w){this.name=n,this.category=t,this.img=c,this.description=a,this.className=l,this.superpower=w,this.elem=this.createCardElem()}createCardElem(){const t=document.createElement("div"),n=document.createElement("img"),c=document.createElement("div"),a=document.createElement("h3"),l=document.createElement("h4");return t.classList.add("card"),n.classList.add("cards-img-for-work"),c.classList.add("card-text-container"),a.classList.add("header4",`${this.className}`),n.src=this.img,n.alt=this.name,a.textContent=this.category,l.textContent=this.name,t.appendChild(n),t.appendChild(c),c.appendChild(a),c.appendChild(l),t}render(t){t.appendChild(this.elem)}}function z(e){const t=document.querySelector(".cards-container");t.innerHTML="",D().forEach(c=>{const{category:a,name:l,img:w,description:b,className:q,superpower:x}=c;new H(a,l,w,b,q,x).render(t)})}function D(){return window.location.href.includes("gifts")?v:v.slice(0,4)}function U(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}}function j(e){e.innerHTML=""}function P(){fetch(O).then(e=>{if(!e.ok)throw new Error("error"+e.statusText);return e.json()}).then(e=>{v=e,j(document.querySelector(".cards-container")),U(v),z()}).catch(e=>console.error(e))}const o=document.createElement("a");function R(){o.classList.add("upButton"),o.href="#top",o.title="Up",o.innerHTML="&#129121;",document.body.appendChild(o),V()}function V(){window.addEventListener("scroll",Y)}function Y(){window.scrollY>=200?o.style.display="block":o.style.display="none"}function $(e){e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})}function N(){document.addEventListener("DOMContentLoaded",R),o.addEventListener("click",$)}N();const A=document.querySelector(".days p"),I=document.querySelector(".hours p"),X=document.querySelector(".mins p"),F=document.querySelector(".secs p");function J(e,t,n,c){e.textContent="47",t.textContent="5",n.textContent="34",c.textContent="12"}function K(){J(A,I,X,F)}const E=document.querySelector(".slider"),p=document.querySelector(".left"),L=document.querySelector(".right"),g=E.scrollWidth;let f,d=0,i=0;function C(){return f=E.clientWidth}function r(){return f=C(),d=(g-f)/Q()}function Q(){return window.innerWidth>=768?3:6}function u(e){E.style.transform=`translateX(-${e}px)`}function s(){const e=g-f;i<=0?h(p,"inactiveNav","activeNav"):h(p,"activeNav","inactiveNav"),i>=e?h(L,"inactiveNav","activeNav"):h(L,"activeNav","inactiveNav")}function h(e,t,n){e.classList.add(t),e.classList.remove(n)}window.addEventListener("resize",()=>{r(),u(d),s()});p.addEventListener("click",()=>{r(),i>0&&(i-=d,u(i),s())});L.addEventListener("click",()=>{r(),i<g-f&&(i+=d,u(i),s())});C();r();s();function Z(){window.addEventListener("resize",()=>{r(),u(d),s()}),p.addEventListener("click",()=>{r(),i>0&&(i-=d,u(i),s())}),L.addEventListener("click",()=>{r(),i<g-f&&(i+=d,u(i),s())}),C(),r(),s()}window.addEventListener("load",()=>{G(),P(),Z(),K(),B(),N()});
