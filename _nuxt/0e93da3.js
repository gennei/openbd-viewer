(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{254:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},255:function(t,e,n){"use strict";var r=n(2),o=n(75).find,c=n(134),l="find",v=!0;l in[]&&Array(1).find((function(){v=!1})),r({target:"Array",proto:!0,forced:v},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),c(l)},256:function(t,e,n){"use strict";var r=n(2),o=n(257).trim;r({target:"String",proto:!0,forced:n(258)("trim")},{trim:function(){return o(this)}})},257:function(t,e,n){var r=n(5),o=n(21),c=n(13),l=n(254),v=r("".replace),f="["+l+"]",d=RegExp("^"+f+f+"*"),m=RegExp(f+f+"*$"),x=function(t){return function(e){var n=c(o(e));return 1&t&&(n=v(n,d,"")),2&t&&(n=v(n,m,"")),n}};t.exports={start:x(1),end:x(2),trim:x(3)}},258:function(t,e,n){var r=n(74).PROPER,o=n(3),c=n(254);t.exports=function(t){return o((function(){return!!c[t]()||"​᠎"!=="​᠎"[t]()||r&&c[t].name!==t}))}},259:function(t,e,n){"use strict";n.r(e);var r,o=n(12),c=(n(60),n(22),n(255),n(34),n(59),n(256),{data:function(){return{isbn:"",title:"",cover:"",description:""}},methods:{onClick:(r=Object(o.a)(regeneratorRuntime.mark((function t(){var data,e,content;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.openbd.jp/v1/get?isbn="+this.isbn).then((function(t){return t.json()})).catch((function(t){console.log(t)}));case 2:if(data=t.sent,null!=(e=data[0])){t.next=6;break}return t.abrupt("return");case 6:if(this.title=e.summary.title,this.cover=e.summary.cover,void 0!==(content=e.onix.CollateralDetail.TextContent.find((function(a){return"03"==a.TextType})))){t.next=11;break}return t.abrupt("return");case 11:this.description=content.Text.trim();case 12:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})}}),l=c,v=n(57),component=Object(v.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-auto max-w-2xl text-center mt-20",attrs:{id:"main"}},[n("h1",{staticClass:"text-4xl font-bold text"},[t._v("openBD viewr")]),t._v(" "),n("div",{staticClass:"shadow flex mt-16"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.isbn,expression:"isbn"}],staticClass:"w-full rounded p-4",attrs:{type:"text",placeholder:"ISBN..."},domProps:{value:t.isbn},on:{input:function(e){e.target.composing||(t.isbn=e.target.value)}}}),t._v(" "),n("button",{staticClass:"bg-white w-auto flex justify-end items-center text-blue-500 p-2 hover:text-blue-400",on:{click:t.onClick}},[n("i",{staticClass:"material-icons"},[t._v("search")])])]),t._v(" "),n("div",{staticClass:"result mt-8"},[n("p",{staticClass:"text-3xl"},[t._v("タイトル")]),t._v(" "),n("div",{staticClass:"title mt-3"},[t._v(t._s(t.title))]),t._v(" "),n("p",{staticClass:"text-3xl mt-5"},[t._v("書影")]),t._v(" "),n("p",{staticClass:"mt-3"},[""===t.cover?n("span",{},[t._v("書影なし")]):n("img",{staticClass:"m-auto",attrs:{src:t.cover}})]),t._v(" "),n("p",{staticClass:"text-3xl mt-5"},[t._v("概要")]),t._v(" "),n("div",{staticClass:"mt-3"},[t._v(t._s(t.description))])])])}),[],!1,null,null,null);e.default=component.exports}}]);