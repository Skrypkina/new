(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{QfWi:function(e,t,o){"use strict";o.r(t);o("Sm8t");const d=document.querySelector("[ data-menu-button]"),n=document.querySelector("[ data-menu ]"),s=(document.querySelector("[ data-mobile ]"),document.querySelector("[ data-hero-section ]"));d.addEventListener("click",(function(){const e="true"===d.getAttribute("aria-expanded")||!1;d.classList.toggle("is-open"),d.setAttribute("aria-expanded",!e),n.classList.toggle("is-open"),s.classList.toggle("is-open")}));const c=document.querySelector("[ data-open-modal]"),i=document.querySelector("[ data-close-modal]"),a=document.querySelector("[ data-submit-modal ]"),l=document.querySelector("[ data-backdrop ]"),u=document.querySelector("[ data-checkbox]");function r(){if(l.classList.toggle("is-hidden"),l.style.transition="opacity 500ms ease-in",l.classList.contains("is-hidden")){const e=document.body.style.top;document.body.style.position="",document.body.style.top="",document.body.style.width="",window.scrollTo(0,-1*parseInt(e||"0"))}else document.body.style.position="fixed",document.body.style.top=`-${window.scrollY}px`,document.body.style.width="100%"}c.addEventListener("click",r),u.addEventListener("click",(function(){a.classList.toggle("disabled"),a.classList.contains("disabled")?a.setAttribute("disabled","true"):a.removeAttribute("disabled")})),i.addEventListener("click",r),a.addEventListener("click",r)},Sm8t:function(e,t,o){}},[["QfWi",1]]]);
//# sourceMappingURL=main.a48fdd8d71e8e00f3827.js.map