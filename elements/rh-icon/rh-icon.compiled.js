!function(e,t){if("function"==typeof define&&define.amd)define(["../rhelement/rhelement.compiled.js"],t);else if("undefined"!=typeof exports)t(require("../rhelement/rhelement.compiled.js"));else{t(e.rhelementCompiled),e.rhIcon={}}}(this,function(e){"use strict";var t,n=(t=e)&&t.__esModule?t:{default:t};var o=document.createElement("template");o.innerHTML="\n<style>:host {\n  display: block; }</style>\n<slot></slot>\n";var r=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,"rh-icon",o))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default),t}();window.customElements.define("rh-icon",r)});