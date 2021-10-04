exports.ids = [2];
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

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/articles/_tags/_tag.vue?vue&type=template&id=c414508c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-main',_vm._l((_vm.articles),function(p){return _c('div',{key:p.date},[_c('v-container',{staticClass:"post-area",attrs:{"fill-height":""}},[_c('v-row',{attrs:{"no-gutters":"","align":"start"}},_vm._l((p.tags),function(tag){return _c('div',{key:tag,staticClass:"post-tag-group"},[_c('v-btn',{staticClass:"post-tag",attrs:{"small":"","outlined":"","color":"pink accent-2"}},[_vm._v(_vm._s(tag))])],1)}),0),_vm._v(" "),_c('v-row',{attrs:{"no-gutters":"","align":"start"}},[_c('nuxt-link',{staticStyle:{"text-decoration":"none"},attrs:{"to":"/articles/" + p.slug}},[_c('p',{staticClass:"post-title"},[_vm._v(_vm._s(p.title)+"\n          ")])])],1),_vm._v(" "),_c('v-row',{attrs:{"align":"start","no-gutters":""}},[_c('v-icon',{staticClass:"post-date-icon"},[_vm._v("mdi-calendar-month")]),_vm._v(" "),_c('p',{staticClass:"post-date"},[_vm._v(_vm._s(p.date))])],1),_vm._v(" "),_c('v-row',{attrs:{"no-gutters":""}},[(p.image)?_c('v-col'):_vm._e(),_vm._v(" "),_c('v-col',[_c('v-row',{staticClass:"post-descriptions",attrs:{"no-gutters":""}},[_c('p',[_vm._v(_vm._s(p.descriptions))])])],1)],1),_vm._v(" "),_c('v-row',{attrs:{"no-gutters":""}},[_c('nuxt-content',{attrs:{"document":p}})],1),_vm._v(" "),_c('v-row',{attrs:{"no-gutters":""}},[_c('v-divider',{staticClass:"post-divider"})],1)],1)],1)}),0)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/articles/_tags/_tag.vue?vue&type=template&id=c414508c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/articles/_tags/_tag.vue?vue&type=script&lang=js&
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
/* harmony default export */ var _tagvue_type_script_lang_js_ = ({
  layout: 'articles',

  async asyncData({
    $content,
    params
  }) {
    const query = await $content('articles').where({
      date: '2021/09/19'
    }).fetch();
    const articles = await query.fetch();
    return {
      articles
    };
  },

  created() {
    if (false) {}
  }

});
// CONCATENATED MODULE: ./pages/articles/_tags/_tag.vue?vue&type=script&lang=js&
 /* harmony default export */ var _tags_tagvue_type_script_lang_js_ = (_tagvue_type_script_lang_js_); 
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMain/VMain.js
var VMain = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(142);

// CONCATENATED MODULE: ./pages/articles/_tags/_tag.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _tags_tagvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6723cb80"
  
)

/* harmony default export */ var _tag = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */








installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VDivider: VDivider["a" /* default */],VIcon: VIcon["a" /* default */],VMain: VMain["a" /* default */],VRow: VRow["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=_tag.js.map