(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{409:function(t,e,r){var content=r(410);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("7132a15d",content,!0,{sourceMap:!1})},410:function(t,e,r){var n=r(15)(!1);n.push([t.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom;margin:0 -1px}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}",""]),t.exports=n},412:function(t,e,r){var content=r(417);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("2aa80e2e",content,!0,{sourceMap:!1})},413:function(t,e,r){"use strict";r(8),r(5),r(7),r(11),r(6),r(12);var n=r(1),o=(r(409),r(39));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=o.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:c({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:c({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},416:function(t,e,r){"use strict";r(412)},417:function(t,e,r){var n=r(15)(!1);n.push([t.i,'.v-application code{all:unset;font-family:monospace}.nuxt-content p{font-family:"Noto Sans SC",RaleWay,sans-serif}.nuxt-content h1{margin-top:5px;margin-bottom:5px}.nuxt-content h2{font-family:"Noto Sans SC",monospace,sans-serif}.nuxt-content h2,.nuxt-content h3,.nuxt-content h4{margin-top:10px;margin-bottom:5px}.v-btn{transform:scale(.92)}.post-area{padding:auto}.post-title{margin-top:3px;font-family:"Noto Sans SC",monospace,sans-serif;font-size:24px;color:#000;margin-left:-12px}.post-date-icon{margin-top:-12px;margin-right:5px}.post-date{margin-top:-12px;font-family:Raleway;font-size:15px}.post-tag-group{text-align:left;margin-left:-3px}.post-tag{font-family:monospace}.post-divider{margin-bottom:7px}.post-excerpt{font-family:"Roboto"}.next-page{font-family:RaleWay;align-content:right;color:#000}.article-header{position:relative;display:inline-block;width:100%;height:auto}',""]),t.exports=n},430:function(t,e,r){"use strict";r.r(e);var n=r(23),o=(r(83),r(41),{layout:"articles",created:function(){window.MathJax.Hub.Config({tex2jax:{inlineMath:[["$","$"],["\\(","\\)"]],processEscapes:!0}})},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,t.params,e.next=3,r("articles").sortBy("date","desc").limit(10).fetch();case 3:return n=e.sent,o=10===n.length,l=o?n.slice(0,-1):n,e.abrupt("return",{nextPage:o,articles:l});case 7:case"end":return e.stop()}}),e)})))()}}),l=o,c=(r(416),r(31)),v=r(56),d=r.n(v),f=r(189),h=r(402),m=r(407),x=r(413),y=r(188),w=r(405),_=r(400),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-html",[r("div"),t._v(" "),t._l(t.articles,(function(p){return r("div",{key:p.date},[r("v-container",{staticClass:"post-area",attrs:{"fill-height":""}},[r("v-row",{attrs:{"no-gutters":"",align:"start"}},t._l(p.tags,(function(e){return r("div",{key:e,staticClass:"post-tag-group"},[r("v-btn",{staticClass:"post-tag",attrs:{small:"",outlined:"",color:"pink accent-2"}},[t._v(t._s(e))])],1)})),0),t._v(" "),r("v-row",{attrs:{"no-gutters":"",align:"start"}},[r("a",{staticStyle:{"text-decoration":"none"},attrs:{href:"/articles/"+p.slug}},[r("p",{staticClass:"post-title"},[t._v(t._s(p.title)+"\n          ")])])]),t._v(" "),r("v-row",{attrs:{align:"start","no-gutters":""}},[r("v-icon",{staticClass:"post-date-icon"},[t._v("mdi-calendar-month")]),t._v(" "),r("p",{staticClass:"post-date"},[t._v(t._s(p.date))])],1),t._v(" "),r("v-row",{attrs:{"no-gutters":""}},[p.image?r("v-col"):t._e(),t._v(" "),r("v-col",[r("v-row",{attrs:{"no-gutters":""}},[r("p",{staticClass:"post-excerpt"},[r("nuxt-content",{staticStyle:{"font-family":"'RaleWay'"},attrs:{document:{body:p.excerpt}}})],1)])],1)],1),t._v(" "),r("v-row",{attrs:{"no-gutters":""}},[r("v-divider",{staticClass:"post-divider"})],1)],1)],1)})),t._v(" "),r("v-row",[r("v-spacer"),t._v(" "),t.nextPage?r("a",{staticStyle:{"text-decoration":"none"},attrs:{href:"/articles/page/2"}},[r("p",{staticClass:"next-page"},[t._v(" >> Next page")])]):t._e()],1)],2)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:f.a,VCol:h.a,VContainer:m.a,VDivider:x.a,VIcon:y.a,VRow:w.a,VSpacer:_.a})}}]);