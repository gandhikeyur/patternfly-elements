!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("../rhelement/rhelement.umd.js")):"function"==typeof define&&define.amd?define(["../rhelement/rhelement.umd.js"],e):n.RhSpinner=e(n.RHElement)}(this,function(t){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t;var r=function(){function r(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(n,e,t){return e&&r(n.prototype,e),t&&r(n,t),n}}(),n=function(n){function e(){return function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,e))}return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}(e,t),r(e,[{key:"html",get:function(){return'\n<style>\n:host([hidden]) {\n  display: none; }\n\n.rh-spinner__body {\n  animation: spin 1s linear infinite;\n  -webkit-animation: spin 1s linear infinite;\n  -moz-animation: spin 1s linear infinite;\n  border-bottom: 4px solid rgba(0, 0, 0, 0.25);\n  border-left: 4px solid rgba(0, 0, 0, 0.25);\n  border-radius: 100%;\n  border-right: 4px solid rgba(0, 0, 0, 0.25);\n  border-top: 4px solid rgba(0, 0, 0, 0.75);\n  display: inline-block;\n  height: 2rem;\n  margin: 0 auto;\n  position: relative;\n  width: 2rem;\n  vertical-align: middle;\n  visibility: visible; }\n\n@-ms-keyframes spin {\n  from {\n    -ms-transform: rotate(0deg); }\n  to {\n    -ms-transform: rotate(360deg); } }\n\n@-moz-keyframes spin {\n  from {\n    -moz-transform: rotate(0deg); }\n  to {\n    -moz-transform: rotate(360deg); } }\n\n@-webkit-keyframes spin {\n  from {\n    -webkit-transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg); } }\n\n@keyframes spin {\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(360deg); } }\n\n.rh-spinner__description {\n  visibility: hidden; }\n</style>\n<slot class="rh-spinner__body" name="spinner"></slot>\n<slot class="rh-spinner__description" name="description"></slot>'}},{key:"templateUrl",get:function(){return"rh-spinner.html"}},{key:"styleUrl",get:function(){return"rh-spinner.scss"}}],[{key:"tag",get:function(){return"rh-spinner"}}]),e}();return t.create(n),n});
//# sourceMappingURL=rh-spinner.umd.js.map