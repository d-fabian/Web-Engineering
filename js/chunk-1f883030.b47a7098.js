(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f883030"],{"192f":function(e,t,n){"use strict";n("8012")},"4f5e":function(e,t,n){"use strict";n.r(t);var i,a,r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("solution-with-overlay",{staticClass:"active",scopedSlots:e._u([{key:"exercise",fn:function(){return[e._v(" Verpacken Sie Ihre Lösungen aus LE04 in wiederverwendbare Web-Komponenten. Dabei können Sie alle Hilfsmittel aus "),n("a",{attrs:{href:"https://lit.dev/",target:"_blank"}},[e._v("Lit")]),e._v(" verwenden. ")]},proxy:!0},{key:"solution",fn:function(){return[n("div",{staticClass:"container"},[n("einkaufsliste-module")],1)]},proxy:!0}])})},o=[],c=n("b9ba"),l=n("8785"),u=n("d4ec"),s=n("bee2"),d=n("262e"),f=n("2caf"),v=(n("99af"),n("77f1")),m=function(e){Object(d["a"])(n,e);var t=Object(f["a"])(n);function n(){var e;return Object(u["a"])(this,n),e=t.call(this),e.listArea=document.createElement("div"),e.listArea.id="listArea",e}return Object(s["a"])(n,[{key:"render",value:function(){return Object(v["c"])(i||(i=Object(l["a"])(['\n            <div class="container">\n                <h1>Einkaufsliste</h1>\n                <div id="inputArea">\n                    <span>Enter a new item: </span>\n                    <input type="text" placeholder="item..." id="itemTextField">\n                    <input type="button" value="Add item" id="saveBtn" @click="','">\n                </div>\n                ',"\n            </div>\n        "])),this._addItem,this.listArea)}},{key:"_addItem",value:function(){var e=this.shadowRoot.getElementById("itemTextField");if(""!==e.value){var t=document.createElement("li"),n=document.createElement("button");n.textContent="Delete",n.className="deleteBtn",n.id=e.value,t.innerHTML="".concat(e.value," ").concat(n.outerHTML),this.listArea.appendChild(t),t.querySelector("#".concat(e.value)).addEventListener("click",this._removeItem),t.querySelector("#".concat(e.value)).itemToRemove=t,e.value=""}}},{key:"_removeItem",value:function(e){var t=document.querySelector("einkaufsliste-module").shadowRoot;t.querySelector("#listArea").removeChild(e.currentTarget.itemToRemove)}}],[{key:"properties",get:function(){return{listArea:{type:String}}}}]),n}(v["a"]);m.styles=Object(v["b"])(a||(a=Object(l["a"])(["\n    * {\n        margin: 0;\n        padding: 0;\n    }\n    .container {\n        margin: 20px 10px;\n    }\n    h1 {\n        font-weight: bold;\n    }\n    #inputArea {\n        padding: 20px 0;\n    }\n    #saveBtn {\n        padding: 0 10px;\n    }\n    #listArea {\n        margin-left: 30px;\n    }\n    li {\n        margin: 5px 0;\n    }\n    button {\n        margin-left: 10px;\n        padding: 0 10px;\n    }"]))),customElements.define("einkaufsliste-module",m);var p={name:"Woche08Aufgabe1a",title:"Web Engineering WS21/22 - Woche 8.1",components:{EinkaufslisteModule:void 0,SolutionWithOverlay:c["a"]}},h=p,b=(n("192f"),n("2877")),g=Object(b["a"])(h,r,o,!1,null,"34d47112",null);t["default"]=g.exports},8012:function(e,t,n){},"99af":function(e,t,n){"use strict";var i=n("23e7"),a=n("da84"),r=n("d039"),o=n("e8b5"),c=n("861d"),l=n("7b0b"),u=n("07fa"),s=n("8418"),d=n("65f0"),f=n("1dde"),v=n("b622"),m=n("2d00"),p=v("isConcatSpreadable"),h=9007199254740991,b="Maximum allowed index exceeded",g=a.TypeError,y=m>=51||!r((function(){var e=[];return e[p]=!1,e.concat()[0]!==e})),k=f("concat"),x=function(e){if(!c(e))return!1;var t=e[p];return void 0!==t?!!t:o(e)},w=!y||!k;i({target:"Array",proto:!0,forced:w},{concat:function(e){var t,n,i,a,r,o=l(this),c=d(o,0),f=0;for(t=-1,i=arguments.length;t<i;t++)if(r=-1===t?o:arguments[t],x(r)){if(a=u(r),f+a>h)throw g(b);for(n=0;n<a;n++,f++)n in r&&s(c,f,r[n])}else{if(f>=h)throw g(b);s(c,f++,r)}return c.length=f,c}})}}]);
//# sourceMappingURL=chunk-1f883030.b47a7098.js.map