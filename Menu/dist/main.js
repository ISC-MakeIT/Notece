!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=class{constructor(){this.root=document.getElementById("root")}DomReset(){root.textContent=null}MovePage(e){this.DomReset(),e.init()}};var o=class extends r{init(){this.createLabel("url(../img/newPage.png)","newPage","url(../img/New.png)"),this.createLabel("url(../img/filelog.png)","newPage","url(../img/ViewLog.png)")}createLabel(e,t,n){const r=document.createElement("div");r.style.backgroundImage=e,r.id=t;const o=document.createElement("div");o.style.backgroundImage=n,o.onclick=()=>{r.id},this.root.appendChild(r),r.appendChild(o)}};const i=new r,u=new o;i.MovePage(u)}]);