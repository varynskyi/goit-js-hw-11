parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"W1ZM":[function(require,module,exports) {
const t={btnStart:document.querySelector('button[data-action="start"]'),btnStop:document.querySelector('button[data-action="stop"]'),body:document.querySelector("body")},e=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"];let o=null;const n=(t,e)=>Math.floor(Math.random()*(e-t+1)+t),a=()=>{const o=n(0,5);t.body.style.backgroundColor=`${e[o]}`},r=e=>{e.target===t.btnStart&&(t.btnStart.disabled=!0,o=setInterval(a,1e3)),e.target===t.btnStop&&(clearInterval(o),t.btnStart.disabled=!1)};document.addEventListener("click",r);
},{}],"rzxb":[function(require,module,exports) {
const t={btnStart:document.querySelector('button[data-action="start"]'),btnStop:document.querySelector('button[data-action="stop"]'),body:document.querySelector("body")},o=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"];let n=null;t.body.addEventListener("click",d);const e=(t,o)=>Math.floor(Math.random()*(o-t+1)+t),a=()=>{const n=e(0,5);t.body.style.backgroundColor=`${o[n]}`};function r(){t.btnStart.disabled=!0,n=setInterval(a,1e3)}function c(){clearInterval(n),t.btnStart.disabled=!1}function d(t){"start"!==t.target.dataset.action?c():r()}
},{}],"yCUT":[function(require,module,exports) {
class t{constructor({selector:t,targetDate:e}){this.intervalId=null,this.selector=t,this.targetDate=e,this.init()}init(){let t=this.getTimeComponents(this.targetDate-new Date);this.creatEl(t),this.intervalId=setInterval(()=>{const e=new Date,a=this.targetDate-e,s=this.getTimeComponents(a);for(const n in s){const e=document.querySelector(`[data-value="${n}New"]`),a=document.querySelector(`[data-value="${n}Old"]`),r=s[n],o=t[n],l=e.parentNode;if(r!==o){l.classList.remove("anim"),e.textContent=r,a.textContent=o;l.offsetWidth;l.classList.add("anim")}}t={...s},a<1e3&&clearInterval(this.intervalId)},1e3)}getTimeComponents(t){return{days:this.pad(Math.floor(t/864e5)),hours:this.pad(Math.floor(t%864e5/36e5)),mins:this.pad(Math.floor(t%36e5/6e4)),secs:this.pad(Math.floor(t%6e4/1e3))}}pad(t){return String(t).padStart(2,"0")}creatEl(t={}){const e=document.querySelector(this.selector);for(const a in t){e.querySelector(`[data-value="${a}"]`).innerHTML=`<span class="valueNew" data-value="${a}New">${t[a]}</span>\n          <span class="valueOld" data-value="${a}Old">${t[a]}</span>`}}}const e=new t({selector:"#timer-1",targetDate:new Date("Jul 28, 2021")});
},{}],"NT2G":[function(require,module,exports) {
const e=e=>new Promise(o=>{setTimeout(()=>{o(e)},e)}),o=e=>console.log(`Resolved after ${e}ms`);e(2e3).then(o),e(1e3).then(o),e(1500).then(o);
},{}],"Ax45":[function(require,module,exports) {
const e=[{name:"Mango",active:!0},{name:"Poly",active:!1},{name:"Ajax",active:!1}],a=(e,a)=>new Promise(n=>{n(e.map(e=>e.name===a?{...e,active:!e.active}:e))}),n=e=>console.table(e);a(e,"Mango",console.table),a(e,"Ajax",console.table),a(e,"Mango").then(console.table),a(e,"Ajax").then(console.table);
},{}],"AGSj":[function(require,module,exports) {
const n=(n,t)=>Math.floor(Math.random()*(t-n+1)+n),t=t=>{const a=n(200,500),o=t.id;return new Promise(function(n,t){setTimeout(()=>{Math.random()>.3&&n({id:o,delay:a}),t(o)},a)})},a=({id:n,delay:t})=>{console.log(`Transaction ${n} processed in ${t}ms`)},o=n=>{console.warn(`Error processing transaction ${n}. Please try again later.`)};t({id:70,amount:150}).then(a).catch(o),t({id:71,amount:230}).then(a).catch(o),t({id:72,amount:100}).then(a).catch(o),t({id:73,amount:70}).then(a).catch(o);
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./js/screen"),require("./js/color"),require("./js/timer"),require("./js/prom1"),require("./js/prom2"),require("./js/prom3");
},{"./js/screen":"W1ZM","./js/color":"rzxb","./js/timer":"yCUT","./js/prom1":"NT2G","./js/prom2":"Ax45","./js/prom3":"AGSj"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-11/src.0d541529.js.map