(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{415:function(t,n,e){var content=e(422);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(16).default)("4eecf659",content,!0,{sourceMap:!1})},421:function(t,n,e){"use strict";e(415)},422:function(t,n,e){var o=e(15)(!1);o.push([t.i,'.nuxt-content{font-family:"Noto Sans SC",monospace,sans-serif}.post-tag{margin-left:10px}.post-title{font-family:"Noto Sans SC",monospace,sans-serif;font-size:24px;color:#000;margin-bottom:-1px}.post-date-icon{margin-right:5px}.post-date{font-family:Raleway;font-size:15px}',""]),t.exports=o},433:function(t,n,e){"use strict";e.r(n);var o=e(23),r=(e(83),{layout:"articles",asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function n(){var e,o,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.$content,o=t.params,n.next=3,e("articles",o.slug||"index").sortBy("date").fetch();case 3:return(r=n.sent).slug=o.slug,n.abrupt("return",{post:r});case 6:case"end":return n.stop()}}),n)})))()},created:function(){window.MathJax.Hub.Config({tex2jax:{inlineMath:[["$","$"],["\\(","\\)"]],processEscapes:!0}})}}),c=(e(421),e(31)),l=e(56),f=e.n(l),d=e(188),m=e(194),v=e(405),component=Object(c.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-main",[e("v-row",{attrs:{"no-gutters":"",align:"start"}},[e("h1",{staticClass:"post-title"},[t._v(t._s(t.post.title))])]),t._v(" "),e("v-row",{attrs:{align:"start","no-gutters":""}},[e("v-icon",{staticClass:"post-date-icon"},[t._v("mdi-calendar-month")]),t._v(" "),e("p",{staticClass:"post-date"},[t._v(t._s(t.post.date))])],1),t._v(" "),e("nuxt-content",{attrs:{document:t.post}})],1)}),[],!1,null,null,null);n.default=component.exports;f()(component,{VIcon:d.a,VMain:m.a,VRow:v.a})}}]);