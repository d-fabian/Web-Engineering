(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-36bc606a"],{"010a":function(e,t){e.exports={open:function(){document.getElementById("solution-with-overlay").classList.toggle("open"),document.getElementById("openOverlayButton").disabled=!0;var e=document.getElementById("overlay");e.style.display="inline"},close:function(){document.getElementById("solution-with-overlay").classList.toggle("open"),document.getElementById("openOverlayButton").disabled=!1;var e=document.getElementById("overlay");e.style.display="none"}}},1276:function(e,t,n){"use strict";var i=n("2ba4"),r=n("c65b"),o=n("e330"),a=n("d784"),s=n("44e7"),l=n("825a"),u=n("1d80"),c=n("4840"),d=n("8aa5"),f=n("50c4"),h=n("577e"),v=n("dc4a"),g=n("4dae"),b=n("14c3"),p=n("9263"),m=n("9f7f"),y=n("d039"),w=m.UNSUPPORTED_Y,x=4294967295,_=Math.min,E=[].push,k=o(/./.exec),W=o(E),B=o("".slice),I=!y((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));a("split",(function(e,t,n){var o;return o="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var o=h(u(this)),a=void 0===n?x:n>>>0;if(0===a)return[];if(void 0===e)return[o];if(!s(e))return r(t,o,e,a);var l,c,d,f=[],v=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),b=0,m=new RegExp(e.source,v+"g");while(l=r(p,m,o)){if(c=m.lastIndex,c>b&&(W(f,B(o,b,l.index)),l.length>1&&l.index<o.length&&i(E,f,g(l,1)),d=l[0].length,b=c,f.length>=a))break;m.lastIndex===l.index&&m.lastIndex++}return b===o.length?!d&&k(m,"")||W(f,""):W(f,B(o,b)),f.length>a?g(f,0,a):f}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:r(t,this,e,n)}:t,[function(t,n){var i=u(this),a=void 0==t?void 0:v(t,e);return a?r(a,t,i,n):r(o,h(i),t,n)},function(e,i){var r=l(this),a=h(e),s=n(o,r,a,i,o!==t);if(s.done)return s.value;var u=c(r,RegExp),v=r.unicode,g=(r.ignoreCase?"i":"")+(r.multiline?"m":"")+(r.unicode?"u":"")+(w?"g":"y"),p=new u(w?"^(?:"+r.source+")":r,g),m=void 0===i?x:i>>>0;if(0===m)return[];if(0===a.length)return null===b(p,a)?[a]:[];var y=0,E=0,k=[];while(E<a.length){p.lastIndex=w?0:E;var I,C=b(p,w?B(a,E):a);if(null===C||(I=_(f(p.lastIndex+(w?E:0)),a.length))===y)E=d(a,E,v);else{if(W(k,B(a,y,E)),k.length===m)return k;for(var O=1;O<=C.length-1;O++)if(W(k,C[O]),k.length===m)return k;E=y=I}}return W(k,B(a,y)),k}]}),!I,w)},"153a":function(e,t,n){"use strict";n("8b42")},"4de4":function(e,t,n){"use strict";var i=n("23e7"),r=n("b727").filter,o=n("1dde"),a=o("filter");i({target:"Array",proto:!0,forced:!a},{filter:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},"59c2":function(e,t,n){"use strict";n("9a86")},"7e90":function(e,t,n){},"82b1":function(e,t,n){"use strict";n("7e90")},"8b42":function(e,t,n){},"9a86":function(e,t,n){},a15b:function(e,t,n){"use strict";var i=n("23e7"),r=n("e330"),o=n("44ad"),a=n("fc6a"),s=n("a640"),l=r([].join),u=o!=Object,c=s("join",",");i({target:"Array",proto:!0,forced:u||!c},{join:function(e){return l(a(this),void 0===e?",":e)}})},a640:function(e,t,n){"use strict";var i=n("d039");e.exports=function(e,t){var n=[][e];return!!n&&i((function(){n.call(null,t||function(){return 1},1)}))}},b9ba:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"solution-with-overlay"}},[n("button",{attrs:{id:"openOverlayButton"},on:{click:e.open}},[n("b",[e._v("Aufgabe anzeigen")])]),n("div",{attrs:{id:"overlay"}},[n("button",{attrs:{id:"closeOverlayButton"},on:{click:e.close}},[n("font-awesome-icon",{attrs:{icon:"fa-solid fa-x"}})],1),n("h3",[e._v("Aufgabe")]),n("div",{attrs:{id:"exerciseSlot"}},[e._t("exercise")],2)]),n("div",{attrs:{id:"solution"}},[e._t("solution")],2)])},r=[],o=n("010a"),a=n.n(o),s={name:"SolutionWithOverlay",methods:{open:function(){return a.a.open()},close:function(){return a.a.close()}}},l=s,u=(n("153a"),n("2877")),c=Object(u["a"])(l,i,r,!1,null,"c5abef46",null);t["a"]=c.exports},f58d:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("solution-with-overlay",{staticClass:"active",scopedSlots:e._u([{key:"exercise",fn:function(){return[e._v(" Schreiben Sie eine "),n("a",{attrs:{href:"https://v2.vuejs.org/v2/guide/single-file-components.html?redirect=true",target:"_blank"}},[e._v("Vue.js Single File Component")]),e._v(" mit einem Text-Eingabefeld und 3 Ausgabefeldern, in denen man während des Tippens sehen kann,"),n("br"),e._v("(a) wie viele Buchstaben"),n("br"),e._v("(b) wie viele Leerzeichen und"),n("br"),e._v("(c) wie viele Worte man in das Text-Eingabefeld bereits eingegeben hat."),n("br"),n("br"),e._v(" Betten Sie Ihre Komponente in eine Webseite zweimal ein und testen Sie, ob beide Komponenten unabhängig voneinander sind. ")]},proxy:!0},{key:"solution",fn:function(){return[n("div",{staticClass:"container"},[n("word-count"),n("word-count")],1)]},proxy:!0}])})},r=[],o=n("b9ba"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wordCount"},[n("h1",[e._v("Word Count")]),n("input",{attrs:{type:"text",placeholder:"Enter some Text..."},on:{input:function(t){return e.evaluateInput(t.target.value)}}}),n("p",{attrs:{id:"countChars"}},[e._v("Du hast "+e._s(e.chars)+" Buchstaben eingegeben")]),n("p",{attrs:{id:"countBlanks"}},[e._v("Du hast "+e._s(e.blanks)+" Leerzeichen eingegeben")]),n("p",{attrs:{id:"countWords"}},[e._v("Du hast "+e._s(e.words)+" "+e._s(e.wordText)+" eingegeben")])])},s=[],l=(n("a15b"),n("4de4"),n("d3b7"),n("ac1f"),n("1276"),{name:"WordCount",data:function(){return{chars:0,blanks:0,words:0,wordText:"Wörter"}},watch:{words:function(){1===this.words?this.wordText="Wort":this.wordText="Wörter"}},methods:{evaluateInput:function(e){this.chars=e.split(" ").filter((function(e){return e.length>0})).join("").length,this.blanks=e.split(" ").length-1,this.words=e.split(" ").filter((function(e){return e.length>0})).length}}}),u=l,c=(n("59c2"),n("2877")),d=Object(c["a"])(u,a,s,!1,null,"3fc426dd",null),f=d.exports,h={name:"Woche10Aufgabe1",title:"Web Engineering WS21/22 - Woche 10.1",components:{WordCount:f,SolutionWithOverlay:o["a"]}},v=h,g=(n("82b1"),Object(c["a"])(v,i,r,!1,null,"68a793f8",null));t["default"]=g.exports}}]);
//# sourceMappingURL=chunk-36bc606a.c53a7467.js.map