!function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);(new class{constructor(){this.root=document.getElementById("root"),this.tagContainer=document.getElementById("tag-container"),this.MenuTags=document.getElementsByClassName("tag")}init(){for(let e=0;e<this.MenuTags.length;e++)this.MenuTags[e].style.display="none";this.root.textContent=null,this.createElement("div","detail-wrapper","root"),this.createElement("div","detail","detail-wrapper"),this.createElement("div","note-list","root"),this.createElement("div","search-area","root"),this.createTab("url()","myNote"),this.createTab("url()","watchNote")}createTab(e,t){const n=document.createElement("li");n.style.backgroundImage=e,n.id=t,n.className="tab",this.tagContainer.appendChild(n)}createElement(e,t,n){const o=document.createElement(e);o.id=t,document.getElementById(n).appendChild(o)}displayNoteList(e){document.getElementById("detail").textContent=null,document.getElementById("note-list").textContent=null;for(let t=0;t<e.length;t++){const n=document.createElement("div");n.style.backgroundImage=e[t].image,n.className="notes",this.noteList.appendChild(n),n.addEventListener("click",()=>{document.getElementById("detail").textContent=null,this.createElement("div","note-thumbnail","detail"),document.getElementById("note-thumbnail").style.backgroundImage=e[t].image,this.createElement("div","note-name","detail"),document.getElementById("note-name").style.backgroundImage=e[t].image,this.createElement("div","note-explanation","detail"),document.getElementById("note-explanation").style.backgroundImage=e[t].image})}}}).init()}]);