import{c as u,T as C,i as v,a as p}from"./helper-BsB4iDvj.js";const w={daysElem:document.querySelector(".days p"),hoursElem:document.querySelector(".hours p"),minutesElem:document.querySelector(".mins p"),secondsElem:document.querySelector(".secs p")};function y(){const t=new Date;return new Date(Date.UTC(t.getUTCFullYear()+1,0,1))-t}function r(t,e){t.textContent=`${e}`}function o(t,e){switch(t){case"days":return Math.floor(e/(1e3*60*60*24));case"hours":return Math.floor(e/(1e3*60*60)%24);case"mins":return Math.floor(e/(1e3*60)%60);case"secs":return Math.floor(e/1e3%60);default:return"0"}}function x(t){const{daysElem:e,hoursElem:l,minutesElem:a,secondsElem:E}=t;function g(){let n=y();r(e,o("days",n)),r(l,o("hours",n)),r(a,o("mins",n)),r(E,o("secs",n))}setInterval(g,1e3)}const T=[{nodeElem:"div",cssClasses:["slider-elem"],difficultChild:{nodeElem:"p",cssClasses:["slider-text"],text:"live"}},{nodeElem:"div",cssClasses:["slider-elem-img"],difficultChild:{nodeElem:"img",attributes:{src:"./imgs/snowman.png",alt:"snowman"}}},{nodeElem:"div",cssClasses:["slider-elem"],difficultChild:{nodeElem:"p",cssClasses:["slider-text"],text:"create"}},{nodeElem:"div",cssClasses:["slider-elem-img"],difficultChild:{nodeElem:"img",attributes:{src:"./imgs/christmas-trees.png",alt:"christmas-trees"}}},{nodeElem:"div",cssClasses:["slider-elem"],difficultChild:{nodeElem:"p",cssClasses:["slider-text"],text:"love"}},{nodeElem:"div",cssClasses:["slider-elem-img"],difficultChild:{nodeElem:"img",attributes:{src:"./imgs/christmas-tree-ball.png",alt:"christmas-tree-ball"}}},{nodeElem:"div",cssClasses:["slider-elem"],difficultChild:{nodeElem:"p",cssClasses:["slider-text"],text:"harmony"}},{nodeElem:"div",cssClasses:["slider-elem-img"],difficultChild:{nodeElem:"img",attributes:{src:"./imgs/fairytale-house.png",alt:"fairytale-house"}}}],i=document.querySelector(".slider"),L=document.querySelector(".bnt-container"),d=u({nodeElem:"button",cssClasses:["left","btn","inactiveNav"],child:`                <svg
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
                </svg>`}),c=u({nodeElem:"button",cssClasses:["right","btn"],child:`<svg
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
                </svg>`}),f=2148.5;let s=0;function h(t){let e=i.offsetWidth,l=M(e),a=t==="left"?l:-l;s+=a,s=Math.min(Math.max(s,-Math.round(f-e)),0),i.style.transform=`translateX(${s}px)`,m()}function M(t){let e=t<C?6:3;return(f-t)/e}function m(){d.classList.toggle("inactiveNav",s===0),c.classList.toggle("inactiveNav",s<=-(f-i.offsetWidth))}function b(){T.forEach(t=>{const e=u(t);i.append(e)}),L.append(d,c),window.addEventListener("resize",()=>{i.style.transform="translateX(0)",s=0,m()}),c.addEventListener("click",()=>{h("right")}),d.addEventListener("click",()=>{h("left")}),m()}window.addEventListener("load",()=>{v(),p(),x(w),b()});
