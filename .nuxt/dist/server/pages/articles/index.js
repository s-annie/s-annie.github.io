exports.ids = [3];
exports.modules = {

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(145);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("7132a15d", content, true)

/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom;margin:0 -1px}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(153);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("2aa80e2e", content, true, context)
};

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VDivider_VDivider_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(144);
/* harmony import */ var _src_components_VDivider_VDivider_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VDivider_VDivider_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
// Styles
 // Mixins


/* harmony default export */ __webpack_exports__["a"] = (_mixins_themeable__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].extend({
  name: 'v-divider',
  props: {
    inset: Boolean,
    vertical: Boolean
  },

  render(h) {
    // WAI-ARIA attributes
    let orientation;

    if (!this.$attrs.role || this.$attrs.role === 'separator') {
      orientation = this.vertical ? 'vertical' : 'horizontal';
    }

    return h('hr', {
      class: {
        'v-divider': true,
        'v-divider--inset': this.inset,
        'v-divider--vertical': this.vertical,
        ...this.themeClasses
      },
      attrs: {
        role: 'separator',
        'aria-orientation': orientation,
        ...this.$attrs
      },
      on: this.$listeners
    });
  }

}));

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/moon.0cba631.jpg";

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(147);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-application code{all:unset;font-family:monospace}.nuxt-content p{font-family:\"Noto Sans SC\",RaleWay,sans-serif}.v-btn{transform:scale(.92)}.post-area{padding:auto}.post-title{margin-top:3px;font-family:\"Noto Sans SC\",monospace,sans-serif;font-size:24px;color:#000;margin-left:-12px}.post-date-icon{margin-top:-12px;margin-right:5px}.post-date{margin-top:-12px;font-family:Raleway;font-size:15px}.post-tag-group{text-align:left;margin-left:-6px}.post-tag{font-family:monospace}.post-divider{margin-bottom:7px}.post-excerpt{font-family:\"Roboto\"}.next-page{font-family:RaleWay;align-content:right;color:#000}.article-header{position:relative;display:inline-block;width:100%;height:auto}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/articles/index.vue?vue&type=template&id=53e0fe90&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-html',[_c('div',[_c('img',{staticClass:"article-header",attrs:{"src":__webpack_require__(151)}})]),_vm._v(" "),_vm._l((_vm.articles),function(p){return _c('div',{key:p.date},[_c('v-container',{staticClass:"post-area",attrs:{"fill-height":""}},[_c('v-row',{attrs:{"no-gutters":"","align":"start"}},_vm._l((p.tags),function(tag){return _c('div',{key:tag,staticClass:"post-tag-group"},[_c('v-btn',{staticClass:"post-tag",attrs:{"small":"","outlined":"","color":"pink accent-2"}},[_vm._v(_vm._s(tag))])],1)}),0),_vm._v(" "),_c('v-row',{attrs:{"no-gutters":"","align":"start"}},[_c('a',{staticStyle:{"text-decoration":"none"},attrs:{"href":'/articles/'+p.slug}},[_c('p',{staticClass:"post-title"},[_vm._v(_vm._s(p.title)+"\n          ")])])]),_vm._v(" "),_c('v-row',{attrs:{"align":"start","no-gutters":""}},[_c('v-icon',{staticClass:"post-date-icon"},[_vm._v("mdi-calendar-month")]),_vm._v(" "),_c('p',{staticClass:"post-date"},[_vm._v(_vm._s(p.date))])],1),_vm._v(" "),_c('v-row',{attrs:{"no-gutters":""}},[(p.image)?_c('v-col'):_vm._e(),_vm._v(" "),_c('v-col',[_c('v-row',{attrs:{"no-gutters":""}},[_c('p',{staticClass:"post-excerpt"},[_c('nuxt-content',{staticStyle:{"font-family":"'RaleWay'"},attrs:{"document":{ body: p.excerpt }}})],1)])],1)],1),_vm._v(" "),_c('v-row',{attrs:{"no-gutters":""}},[_c('v-divider',{staticClass:"post-divider"})],1)],1)],1)}),_vm._v(" "),_c('v-row',[_c('v-spacer'),_vm._v(" "),(_vm.nextPage)?_c('a',{staticStyle:{"text-decoration":"none"},attrs:{"href":'/articles/page/2'}},[_c('p',{staticClass:"next-page"},[_vm._v(" >> Next page")])]):_vm._e()],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/articles/index.vue?vue&type=template&id=53e0fe90&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/articles/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var articlesvue_type_script_lang_js_ = ({
  layout: 'articles',

  created() {
    if (false) {}
  },

  async asyncData({
    $content,
    params
  }) {
    const tenArticles = await $content('articles').sortBy("date", 'desc').limit(10).fetch();
    const nextPage = tenArticles.length === 10;
    const articles = nextPage ? tenArticles.slice(0, -1) : tenArticles;
    return {
      nextPage,
      articles
    };
  }

});
// CONCATENATED MODULE: ./pages/articles/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_articlesvue_type_script_lang_js_ = (articlesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(10);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 4 modules
var VBtn = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(141);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(143);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(148);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(40);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(142);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(140);

// CONCATENATED MODULE: ./pages/articles/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(152)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_articlesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "175a3994"
  
)

/* harmony default export */ var articles = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */








installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VDivider: VDivider["a" /* default */],VIcon: VIcon["a" /* default */],VRow: VRow["a" /* default */],VSpacer: VSpacer["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=index.js.map