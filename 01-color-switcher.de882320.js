const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),r=document.querySelector("body");let o=null;function d(){r.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}t.addEventListener("click",(function(){t.setAttribute("disabled",""),e.removeAttribute("disabled"),o=setInterval(d,1e3)})),e.addEventListener("click",(function(){clearInterval(o),t.removeAttribute("disabled"),e.setAttribute("disabled","")}));
//# sourceMappingURL=01-color-switcher.de882320.js.map