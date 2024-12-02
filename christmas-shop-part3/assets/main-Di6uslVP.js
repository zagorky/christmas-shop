import{L as C,c as u,T as v,i as p,a as w}from"./helper-BxpOt0n9.js";const y=document.querySelector(".days p"),x=document.querySelector(".hours p"),L=document.querySelector(".mins p"),S=document.querySelector(".secs p");function T(t,e,s,n){t.textContent="47",e.textContent="5",s.textContent="34",n.textContent="12"}function M(){T(y,x,L,S)}window.addEventListener("load",()=>{C(),M()});const b={daysElem:document.querySelector(".days p"),hoursElem:document.querySelector(".hours p"),minutesElem:document.querySelector(".mins p"),secondsElem:document.querySelector(".secs p")};function D(){const t=new Date;return new Date(Date.UTC(t.getUTCFullYear()+1,0,1))-t}function r(t,e){t.textContent=`${e}`}function a(t,e){switch(t){case"days":return Math.floor(e/(1e3*60*60*24));case"hours":return Math.floor(e/(1e3*60*60)%24);case"mins":return Math.floor(e/(1e3*60)%60);case"secs":return Math.floor(e/1e3%60);default:return"0"}}function q(t){const{daysElem:e,hoursElem:s,minutesElem:n,secondsElem:E}=t;function g(){let o=D();r(e,a("days",o)),r(s,a("hours",o)),r(n,a("mins",o)),r(E,a("secs",o))}setInterval(g,1e3)}const N=[{nodeElem:"div",cssClasses:["slider-elem"],difficultChild:{nodeElem:"p",cssClasses:["slider-text"],text:"live"}},{nodeElem:"div",cssClasses:["slider-elem-img"],difficultChild:{nodeElem:"img",attributes:{src:"./imgs/snowman.png",alt:"snowman"}}},{nodeElem:"div",cssClasses:["slider-elem"],difficultChild:{nodeElem:"p",cssClasses:["slider-text"],text:"create"}},{nodeElem:"div",cssClasses:["slider-elem-img"],difficultChild:{nodeElem:"img",attributes:{src:"./imgs/christmas-trees.png",alt:"christmas-trees"}}},{nodeElem:"div",cssClasses:["slider-elem"],difficultChild:{nodeElem:"p",cssClasses:["slider-text"],text:"love"}},{nodeElem:"div",cssClasses:["slider-elem-img"],difficultChild:{nodeElem:"img",attributes:{src:"./imgs/christmas-tree-ball.png",alt:"christmas-tree-ball"}}},{nodeElem:"div",cssClasses:["slider-elem"],difficultChild:{nodeElem:"p",cssClasses:["slider-text"],text:"harmony"}},{nodeElem:"div",cssClasses:["slider-elem-img"],difficultChild:{nodeElem:"img",attributes:{src:"./imgs/fairytale-house.png",alt:"fairytale-house"}}}],i=document.querySelector(".slider"),k=document.querySelector(".bnt-container"),c=u({nodeElem:"button",cssClasses:["left","btn","inactiveNav"],child:`                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 7H13.5M13.5 7L7.5 1M13.5 7L7.5 13"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>`}),d=u({nodeElem:"button",cssClasses:["right","btn"],child:`<svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 7H13.5M13.5 7L7.5 1M13.5 7L7.5 13"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>`}),f=2148.5;let l=0;function h(t){let e=i.offsetWidth,s=B(e),n=t==="left"?s:-s;l+=n,l=Math.min(Math.max(l,-Math.round(f-e)),0),i.style.transform=`translateX(${l}px)`,m()}function B(t){let e=t<v?6:3;return(f-t)/e}function m(){c.classList.toggle("inactiveNav",l===0),d.classList.toggle("inactiveNav",l<=-(f-i.offsetWidth))}function Y(){N.forEach(t=>{const e=u(t);i.append(e)}),k.append(c,d),window.addEventListener("resize",()=>{i.style.transform="translateX(0)",l=0,m()}),d.addEventListener("click",()=>{h("right")}),c.addEventListener("click",()=>{h("left")}),m()}window.addEventListener("load",()=>{p(),w(),q(b),Y()});
