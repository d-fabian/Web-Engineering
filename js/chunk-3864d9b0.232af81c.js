(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3864d9b0"],{"010a":function(e,t){e.exports={open:function(){document.getElementById("solution-with-overlay").classList.toggle("open"),document.getElementById("openOverlayButton").disabled=!0;var e=document.getElementById("overlay");e.style.display="inline"},close:function(){document.getElementById("solution-with-overlay").classList.toggle("open"),document.getElementById("openOverlayButton").disabled=!1;var e=document.getElementById("overlay");e.style.display="none"}}},1148:function(e,t,n){"use strict";var r=n("da84"),o=n("5926"),i=n("577e"),a=n("1d80"),u=r.RangeError;e.exports=function(e){var t=i(a(this)),n="",r=o(e);if(r<0||r==1/0)throw u("Wrong number of repetitions");for(;r>0;(r>>>=1)&&(t+=t))1&r&&(n+=t);return n}},"153a":function(e,t,n){"use strict";n("8b42")},"1da1":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("d3b7");function r(e,t,n,r,o,i,a){try{var u=e[i](a),c=u.value}catch(l){return void n(l)}u.done?t(c):Promise.resolve(c).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,i){var a=e.apply(t,n);function u(e){r(a,o,i,u,c,"next",e)}function c(e){r(a,o,i,u,c,"throw",e)}u(void 0)}))}}},"299d":function(e,t,n){"use strict";n("b3dc")},"408a":function(e,t,n){var r=n("e330");e.exports=r(1..valueOf)},"716a":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("solution-with-overlay",{staticClass:"active",scopedSlots:e._u([{key:"exercise",fn:function(){return[e._v(" Berechnen Sie, wie viele Primzahlen es bis 100.000 gibt. Implementieren Sie Ihren Algorithmus sowohl in JavaScript als auch in WebAssembly. Vergleichen Sie die Performanz beider Implementierungen. ")]},proxy:!0},{key:"solution",fn:function(){return[n("div",{staticClass:"container"},[n("div",{attrs:{id:"wrapper"}},[n("div",{attrs:{id:"containerJS"}},[n("h1",[e._v("Primzahlen mit JavaScript")]),n("div",[e._v("Anzahl der Durchläufe zum Berechnen von Primzahlen (jeweils von 2 bis 100.000)")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputNumberJS,expression:"inputNumberJS"}],attrs:{type:"number",placeholder:"Zahl eingeben",id:"numberFieldJS"},domProps:{value:e.inputNumberJS},on:{input:function(t){t.target.composing||(e.inputNumberJS=t.target.value)}}}),n("input",{attrs:{type:"button",disabled:!e.inputNumberJS,value:"Berechnen",id:"computeButtonJS"}}),n("div",{attrs:{id:"resultDivJS"}})]),n("div",{attrs:{id:"containerWA"}},[n("h1",[e._v("Primzahlen mit WebAssembly")]),n("div",[e._v("Anzahl der Durchläufe zum Berechnen von Primzahlen (jeweils von 2 bis 100.000)")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputNumberWA,expression:"inputNumberWA"}],attrs:{type:"number",placeholder:"Zahl eingeben",id:"numberFieldWA"},domProps:{value:e.inputNumberWA},on:{input:function(t){t.target.composing||(e.inputNumberWA=t.target.value)}}}),n("input",{attrs:{type:"button",disabled:!e.inputNumberWA,value:"Berechnen",id:"computeButtonWA"}}),n("div",{attrs:{id:"resultDivWA"}})])]),n("button",{on:{click:function(t){e.showModuleCode=!e.showModuleCode}}},[e._v(e._s(e.showModuleCode?"Verstecke":"Zeige")+" WebAssembly Modul")]),e.showModuleCode?n("div",[n("pre",[n("highlight-code",{attrs:{lang:"armasm"}},[e._v(" "+e._s(e.moduleCode)+" ")])],1)]):e._e()])]},proxy:!0}])})},o=[],i=n("1da1"),a=(n("96cf"),n("d3b7"),n("99af"),n("b680"),n("b9ba")),u='(module\n (type $FUNCSIG$dd (func (param f64) (result f64)))\n (table 0 anyfunc)\n (memory $0 1)\n (export "memory" (memory $0))\n (export "isPrime" (func $isPrime))\n (func $isPrime (; 0 ;) (param $0 i32) (result i32)\n  (local $1 f64)\n  (local $2 i32)\n  (local $3 f64)\n  (local $4 i32)\n  (block $label$0\n   (br_if $label$0\n    (i32.lt_s\n     (get_local $0)\n     (i32.const 2)\n    )\n   )\n   (block $label$1\n    (br_if $label$1\n     (i32.eq\n      (get_local $0)\n      (i32.const 2)\n     )\n    )\n    (br_if $label$0\n     (i32.eqz\n      (i32.and\n       (get_local $0)\n       (i32.const 1)\n      )\n     )\n    )\n   )\n   (block $label$2\n    (br_if $label$2\n     (i32.or\n      (f64.le\n       (tee_local $1\n        (f64.floor\n         (f64.sqrt\n          (f64.convert_s/i32\n           (get_local $0)\n          )\n         )\n        )\n       )\n       (f64.const 3)\n      )\n      (tee_local $2\n       (f64.ne\n        (get_local $1)\n        (get_local $1)\n       )\n      )\n     )\n    )\n    (set_local $4\n     (i32.const 3)\n    )\n    (loop $label$3\n     (br_if $label$0\n      (i32.eqz\n       (i32.rem_s\n        (get_local $0)\n        (get_local $4)\n       )\n      )\n     )\n     (br_if $label$3\n      (i32.eqz\n       (i32.or\n        (f64.le\n         (get_local $1)\n         (tee_local $3\n          (f64.convert_s/i32\n           (tee_local $4\n            (i32.add\n             (get_local $4)\n             (i32.const 2)\n            )\n           )\n          )\n         )\n        )\n        (i32.or\n         (get_local $2)\n         (f64.ne\n          (get_local $3)\n          (get_local $3)\n         )\n        )\n       )\n      )\n     )\n    )\n   )\n   (return\n    (i32.const 1)\n   )\n  )\n  (i32.const 0)\n )\n)\n',c={name:"Woche11Aufgabe2",title:"Web Engineering WS21/22 - Woche 11.2",components:{SolutionWithOverlay:a["a"]},data:function(){return{numberFieldJS:void 0,computeButtonJS:void 0,resultDivJS:void 0,inputNumberJS:void 0,numberFieldWA:void 0,computeButtonWA:void 0,resultDivWA:void 0,inputNumberWA:void 0,isPrimeNumberWA:void 0,showModuleCode:!1,moduleCode:void 0}},mounted:function(){this.numberFieldJS=document.getElementById("numberFieldJS"),this.computeButtonJS=document.getElementById("computeButtonJS"),this.resultDivJS=document.getElementById("resultDivJS"),this.computeButtonJS.addEventListener("click",this.computeJS),this.numberFieldWA=document.getElementById("numberFieldWA"),this.computeButtonWA=document.getElementById("computeButtonWA"),this.resultDivWA=document.getElementById("resultDivWA"),this.computeButtonWA.addEventListener("click",this.computeWA),this.moduleCode=u,this.loadWebAssemblyModule()},methods:{loadWebAssemblyModule:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("prim.wasm");case 2:return n=t.sent,t.next=5,n.arrayBuffer();case 5:return r=t.sent,t.next=8,WebAssembly.instantiate(r);case 8:o=t.sent,e.isPrimeNumberWA=o.instance.exports.isPrime;case 10:case"end":return t.stop()}}),t)})))()},computeJS:function(){for(var e=[],t=1;t<=this.inputNumberJS;t++){for(var n=performance.now(),r=2;r<=1e5;r++)this.isPrimeNumberJS(r);var o=performance.now();e.push(o-n)}this.resultDivJS.innerHTML="";var i=document.createElement("div"),a=document.createElement("div"),u=document.createElement("div"),c=document.createElement("div");i.innerText="Gesamte Zeit für ".concat(this.inputNumberJS," Durchläufe: ").concat(e.reduce((function(e,t){return e+t}),0).toFixed(2),"ms"),a.innerText="Minimum: ".concat(Math.min.apply(Math,e).toFixed(2),"ms"),u.innerText="Maximum: ".concat(Math.max.apply(Math,e).toFixed(2),"ms"),c.innerText="Durchschnitt: ".concat((e.reduce((function(e,t){return e+t}),0)/e.length).toFixed(2),"ms"),this.resultDivJS.append(i,a,u,c)},computeWA:function(){for(var e=[],t=1;t<=this.inputNumberWA;t++){for(var n=performance.now(),r=2;r<=1e5;r++)this.isPrimeNumberWA(r);var o=performance.now();e.push(o-n)}this.resultDivWA.innerHTML="";var i=document.createElement("div"),a=document.createElement("div"),u=document.createElement("div"),c=document.createElement("div");i.innerText="Gesamte Zeit für ".concat(this.inputNumberWA," Durchläufe: ").concat(e.reduce((function(e,t){return e+t}),0).toFixed(2),"ms"),a.innerText="Minimum: ".concat(Math.min.apply(Math,e).toFixed(2),"ms"),u.innerText="Maximum: ".concat(Math.max.apply(Math,e).toFixed(2),"ms"),c.innerText="Durchschnitt: ".concat((e.reduce((function(e,t){return e+t}),0)/e.length).toFixed(2),"ms"),this.resultDivWA.append(i,a,u,c)},isPrimeNumberJS:function(e){var t=2,n=Math.sqrt(e);while(t<=n)if(e%t++<1)return!1;return e>1}}},l=c,s=(n("299d"),n("2877")),d=Object(s["a"])(l,r,o,!1,null,"12185d31",null);t["default"]=d.exports},"8b42":function(e,t,n){},"96cf":function(e,t,n){var r=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(F){c=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var o=t&&t.prototype instanceof v?t:v,i=Object.create(o.prototype),a=new L(r||[]);return i._invoke=S(e,n,a),i}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(F){return{type:"throw",arg:F}}}e.wrap=l;var d="suspendedStart",f="suspendedYield",h="executing",m="completed",p={};function v(){}function y(){}function b(){}var g={};c(g,i,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(B([])));x&&x!==n&&r.call(x,i)&&(g=x);var _=b.prototype=v.prototype=Object.create(g);function $(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function n(o,i,a,u){var c=s(e[o],e,i);if("throw"!==c.type){var l=c.arg,d=l.value;return d&&"object"===typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,a,u)}),(function(e){n("throw",e,a,u)})):t.resolve(d).then((function(e){l.value=e,a(l)}),(function(e){return n("throw",e,a,u)}))}u(c.arg)}var o;function i(e,r){function i(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(i,i):i()}this._invoke=i}function S(e,t,n){var r=d;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===m){if("throw"===o)throw i;return J()}n.method=o,n.arg=i;while(1){var a=n.delegate;if(a){var u=A(a,n);if(u){if(u===p)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var c=s(e,t,n);if("normal"===c.type){if(r=n.done?m:f,c.arg===p)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=m,n.method="throw",n.arg=c.arg)}}}function A(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator["return"]&&(n.method="return",n.arg=t,A(e,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=s(r,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,p;var i=o.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,p):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function W(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(W,this),this.reset(!0)}function B(e){if(e){var n=e[i];if(n)return n.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function n(){while(++o<e.length)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}return{next:J}}function J(){return{value:t,done:!0}}return y.prototype=b,c(_,"constructor",b),c(b,"constructor",y),y.displayName=c(b,u,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,c(e,u,"GeneratorFunction")),e.prototype=Object.create(_),e},e.awrap=function(e){return{__await:e}},$(E.prototype),c(E.prototype,a,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new E(l(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},$(_),c(_,u,"Generator"),c(_,i,(function(){return this})),c(_,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){while(t.length){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=B,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(N),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return u.type="throw",u.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),N(n),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;N(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:B(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),p}},e}(e.exports);try{regeneratorRuntime=r}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},"99af":function(e,t,n){"use strict";var r=n("23e7"),o=n("da84"),i=n("d039"),a=n("e8b5"),u=n("861d"),c=n("7b0b"),l=n("07fa"),s=n("8418"),d=n("65f0"),f=n("1dde"),h=n("b622"),m=n("2d00"),p=h("isConcatSpreadable"),v=9007199254740991,y="Maximum allowed index exceeded",b=o.TypeError,g=m>=51||!i((function(){var e=[];return e[p]=!1,e.concat()[0]!==e})),w=f("concat"),x=function(e){if(!u(e))return!1;var t=e[p];return void 0!==t?!!t:a(e)},_=!g||!w;r({target:"Array",proto:!0,forced:_},{concat:function(e){var t,n,r,o,i,a=c(this),u=d(a,0),f=0;for(t=-1,r=arguments.length;t<r;t++)if(i=-1===t?a:arguments[t],x(i)){if(o=l(i),f+o>v)throw b(y);for(n=0;n<o;n++,f++)n in i&&s(u,f,i[n])}else{if(f>=v)throw b(y);s(u,f++,i)}return u.length=f,u}})},b3dc:function(e,t,n){},b680:function(e,t,n){"use strict";var r=n("23e7"),o=n("da84"),i=n("e330"),a=n("5926"),u=n("408a"),c=n("1148"),l=n("d039"),s=o.RangeError,d=o.String,f=Math.floor,h=i(c),m=i("".slice),p=i(1..toFixed),v=function(e,t,n){return 0===t?n:t%2===1?v(e,t-1,n*e):v(e*e,t/2,n)},y=function(e){var t=0,n=e;while(n>=4096)t+=12,n/=4096;while(n>=2)t+=1,n/=2;return t},b=function(e,t,n){var r=-1,o=n;while(++r<6)o+=t*e[r],e[r]=o%1e7,o=f(o/1e7)},g=function(e,t){var n=6,r=0;while(--n>=0)r+=e[n],e[n]=f(r/t),r=r%t*1e7},w=function(e){var t=6,n="";while(--t>=0)if(""!==n||0===t||0!==e[t]){var r=d(e[t]);n=""===n?r:n+h("0",7-r.length)+r}return n},x=l((function(){return"0.000"!==p(8e-5,3)||"1"!==p(.9,0)||"1.25"!==p(1.255,2)||"1000000000000000128"!==p(0xde0b6b3a7640080,0)}))||!l((function(){p({})}));r({target:"Number",proto:!0,forced:x},{toFixed:function(e){var t,n,r,o,i=u(this),c=a(e),l=[0,0,0,0,0,0],f="",p="0";if(c<0||c>20)throw s("Incorrect fraction digits");if(i!=i)return"NaN";if(i<=-1e21||i>=1e21)return d(i);if(i<0&&(f="-",i=-i),i>1e-21)if(t=y(i*v(2,69,1))-69,n=t<0?i*v(2,-t,1):i/v(2,t,1),n*=4503599627370496,t=52-t,t>0){b(l,0,n),r=c;while(r>=7)b(l,1e7,0),r-=7;b(l,v(10,r,1),0),r=t-1;while(r>=23)g(l,1<<23),r-=23;g(l,1<<r),b(l,1,1),g(l,2),p=w(l)}else b(l,0,n),b(l,1<<-t,0),p=w(l)+h("0",c);return c>0?(o=p.length,p=f+(o<=c?"0."+h("0",c-o)+p:m(p,0,o-c)+"."+m(p,o-c))):p=f+p,p}})},b9ba:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"solution-with-overlay"}},[n("button",{attrs:{id:"openOverlayButton"},on:{click:e.open}},[n("b",[e._v("Aufgabe anzeigen")])]),n("div",{attrs:{id:"overlay"}},[n("button",{attrs:{id:"closeOverlayButton"},on:{click:e.close}},[n("font-awesome-icon",{attrs:{icon:"fa-solid fa-x"}})],1),n("h3",[e._v("Aufgabe")]),n("div",{attrs:{id:"exerciseSlot"}},[e._t("exercise")],2)]),n("div",{attrs:{id:"solution"}},[e._t("solution")],2)])},o=[],i=n("010a"),a=n.n(i),u={name:"SolutionWithOverlay",methods:{open:function(){return a.a.open()},close:function(){return a.a.close()}}},c=u,l=(n("153a"),n("2877")),s=Object(l["a"])(c,r,o,!1,null,"c5abef46",null);t["a"]=s.exports}}]);
//# sourceMappingURL=chunk-3864d9b0.232af81c.js.map