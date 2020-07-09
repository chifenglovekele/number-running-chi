(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["index"] = factory();
	else
		root["index"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "bc3b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_running_number_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cc41");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_running_number_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_running_number_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_running_number_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "cc41":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7c881be4-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/vue-running-number.vue?vue&type=template&id=74ac9764&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cjk-running-component"},[_c('div',{ref:"cjk-running-container",staticClass:"cjk-running-container",style:(("font-size: " + _vm.size + "px;"))})])}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/vue-running-number.vue?vue&type=template&id=74ac9764&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/vue-running-number.vue?vue&type=script&lang=js&
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
/* harmony default export */ var vue_running_numbervue_type_script_lang_js_ = ({
  name: 'VueRunningNumber',
  components: {},
  props: {
    size: {
      type: Number,
      default: 16
    },
    inNumber: {
      type: Number,
      default: 0
    },
    duration: {
      type: Number,
      default: 2000
    },
    widthScale: {
      type: Number,
      default: 1
    },
    isSplit: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      rootEl: null,
      numLists: ['<li>0</li><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li><li>0</li>', '<li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li><li>0</li><li>1</li>', '<li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li><li>0</li><li>1</li><li>2</li>', '<li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li><li>0</li><li>1</li><li>2</li><li>3</li>', '<li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li><li>0</li><li>1</li><li>2</li><li>3</li><li>4</li>', '<li>5</li><li>6</li><li>7</li><li>8</li><li>9</li><li>0</li><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li>', '<li>6</li><li>7</li><li>8</li><li>9</li><li>0</li><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li>', '<li>7</li><li>8</li><li>9</li><li>0</li><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li>', '<li>8</li><li>9</li><li>0</li><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li>', '<li>9</li><li>0</li><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li>'],
      minusNumLists: ['<li>0</li><li>9</li><li>8</li><li>7</li><li>6</li><li>5</li><li>4</li><li>3</li><li>2</li><li>1</li><li>0</li>', '<li>1</li><li>0</li><li>9</li><li>8</li><li>7</li><li>6</li><li>5</li><li>4</li><li>3</li><li>2</li><li>1</li>', '<li>2</li><li>1</li><li>0</li><li>9</li><li>8</li><li>7</li><li>6</li><li>5</li><li>4</li><li>3</li><li>2</li>', '<li>3</li><li>2</li><li>1</li><li>0</li><li>9</li><li>8</li><li>7</li><li>6</li><li>5</li><li>4</li><li>3</li>', '<li>4</li><li>3</li><li>2</li><li>1</li><li>0</li><li>9</li><li>8</li><li>7</li><li>6</li><li>5</li><li>4</li>', '<li>5</li><li>4</li><li>3</li><li>2</li><li>1</li><li>0</li><li>9</li><li>8</li><li>7</li><li>6</li><li>5</li>', '<li>6</li><li>5</li><li>4</li><li>3</li><li>2</li><li>1</li><li>0</li><li>9</li><li>8</li><li>7</li><li>6</li>', '<li>7</li><li>6</li><li>5</li><li>4</li><li>3</li><li>2</li><li>1</li><li>0</li><li>9</li><li>8</li><li>7</li>', '<li>8</li><li>7</li><li>6</li><li>5</li><li>4</li><li>3</li><li>2</li><li>1</li><li>0</li><li>9</li><li>8</li>', '<li>9</li><li>8</li><li>7</li><li>6</li><li>5</li><li>4</li><li>3</li><li>2</li><li>1</li><li>0</li><li>9</li>'],
      htmlStr: '',
      hisNumber: 0
    };
  },

  watch: {
    inNumber(v) {
      this.startCompute(Number(this.hisNumber), Number(v), this.duration);
    }

  },

  mounted() {
    this.rootEl = this.$refs['cjk-running-container'];
    this.startCompute(Number(this.hisNumber), Number(this.inNumber), this.duration);
  },

  methods: {
    startCompute(start, end, duration) {
      //开始计算
      if (start >= 0 && end >= 0) {
        this.computeRunningArg(start, Number(end), duration);
      } else if (start <= 0 && end <= 0) {
        this.computeRunningArg(start, Number(end), duration, true);
      } else if (start > 0 && end < 0) {
        const dS = Math.ceil(duration * Math.abs(start) / (Math.abs(start) + Math.abs(end)));
        const dE = duration - dS > 10 ? duration - dS : 10;
        this.computeRunningArg(start, 0, dS);
        setTimeout(() => {
          this.computeRunningArg(0, Number(end), dE, true);
        }, dS);
      } else if (start < 0 && end > 0) {
        const dS = Math.ceil(duration * Math.abs(start) / (Math.abs(start) + Math.abs(end)));
        const dE = duration - dS > 10 ? duration - dS : 10;
        this.computeRunningArg(start, 0, dS, true);
        setTimeout(() => {
          this.computeRunningArg(0, Number(end), dE);
        }, dS);
      }
    },

    computeRunningArg(sNum, eNum, inDuration, isHaveMinus) {
      //计算滚动动画的相关参数
      if (sNum === eNum && eNum === 0) {
        this.$refs['cjk-running-container'].innerHTML = `<div style="width: ${0.55 * this.widthScale}em;" class="cjk-number-box"><ul class="cjk-running-area"><li>0</li></ul></div>`;
      }

      if (sNum === eNum) return;
      const absSnum = Math.abs(sNum);
      const absEnum = Math.abs(eNum);
      const pointObj = {
        index: 0,
        endRemovePointer: absEnum.toString().indexOf('.') === -1 ? true : false
      };
      const rSnum = this.getRelativeNum(absSnum.toString(), absEnum.toString(), pointObj);
      const rEnum = this.getRelativeNum(absEnum.toString(), absSnum.toString());
      const sNumArr = rSnum.split('').reverse();
      const eNumArr = rEnum.split('').reverse();
      const offset = Math.abs(rEnum - rSnum);
      const forTimes = (rEnum > rSnum ? rEnum : rSnum).toString().replace('.', '').length;
      const isDown = eNum - sNum >= 0 ? false : true;
      this.htmlStr = '';

      for (let i = forTimes - 1; i >= 0; i--) {
        const start = sNumArr[i] ? sNumArr[i] : 0;
        const end = eNumArr[i] ? eNumArr[i] : 0;
        const splitTime = Math.floor(inDuration * Math.pow(10, i) / offset) < 10 ? 10 : Math.floor(inDuration * Math.pow(10, i) / offset);
        let duration = splitTime * 10;
        let times = inDuration / duration;
        let endToStartTime = (end - start + 10) % 10 / 10;
        if (!isHaveMinus && isDown || isHaveMinus && !isDown) endToStartTime = endToStartTime === 0 ? 0 : 1 - endToStartTime;

        if (times < 0.1) {
          times = endToStartTime;
        } else if (times >= 0.1 && times < 1) {
          times = endToStartTime;
          times = times === 0 ? 1 : times;
        } else {
          times = Math.floor(times);
          times += endToStartTime;
        }

        if (splitTime === 10) {
          //极限转动速度时
          times = Math.floor(inDuration / duration) + endToStartTime;
        }

        if (inDuration / times > 130 && inDuration / times < 220) {
          //该区间动画执行很难看
          const t = Math.round(inDuration / 220);
          times = times.toString().split('.')[1] ? Number(t + '.' + times.toString().split('.')[1]) : t;
        }

        duration = inDuration / times;
        const isSplit = i > pointObj.index + 2 && (i - pointObj.index) % 3 === 0;
        const isPointer = i === pointObj.index && i != 0 ? true : false;
        this.createRunningHtml(isHaveMinus ? this.minusNumLists : this.numLists, Number(start), Number(end), duration / 1000, times, isDown, this.isSplit && isSplit, isPointer);
      }

      this.startRunning(inDuration, isHaveMinus, pointObj.endRemovePointer);
      this.$nextTick(() => {
        this.hisNumber = this.inNumber;
      });
    },

    getRelativeNum(num, rNum, pointObj) {
      //获取相对大小数字，主要处理小数情况
      const hNum = num.split('.')[0];
      const fNum = num.split('.')[1] ? num.split('.')[1] : '';
      const hRnum = rNum.split('.')[0];
      const fRnum = rNum.split('.')[1] ? rNum.split('.')[1] : '';
      let newHNum = hNum;
      let newFNum = fNum;

      if (fRnum.length > fNum.length) {
        for (let i = 0; i < fRnum.length - fNum.length; i++) {
          newFNum += '0';
        }
      }

      if (hRnum.length > hNum.length) {
        for (let i = 0; i < hRnum.length - hNum.length; i++) {
          newHNum = '0' + newHNum;
        }
      }

      if (pointObj && newFNum) pointObj.index = newFNum.length;
      return newHNum + newFNum;
    },

    startRunning(allDuration, isHaveMinus, endRemovePointer) {
      // 开始运行当前动画
      this.$refs['cjk-running-container'].innerHTML = this.htmlStr;

      if (isHaveMinus) {
        this.addCls(this.$refs['cjk-running-container'], 'cjk-minus');
      } else {
        this.removeCls(this.$refs['cjk-running-container'], 'cjk-minus');
      }

      setTimeout(() => {
        this.endCallBack(endRemovePointer);
      }, allDuration);
    },

    endCallBack(endRemovePointer) {
      //一次总动画执行完后执行该函数，动态移动隐藏数字开头的0
      //const numberCls = Array.from(this.getDomList('cjk-number-box'));
      const numberCls = [];
      let isDelRight = false;
      this.getDomList('cjk-number-box').forEach(el => {
        numberCls.push(el);
        if (el.getAttribute('class').indexOf('cjk-pointer') !== -1) isDelRight = true;
      });
      this.hiddenZero(numberCls);
      if (isDelRight) this.hiddenZero(numberCls.reverse());
      if (endRemovePointer) this.removeCls(this.getDomList('cjk-pointer')[0], 'cjk-pointer');
    },

    hiddenZero(numberCls) {
      //隐藏左右侧得0
      let isHidden = true;
      numberCls.forEach((el, n) => {
        if (numberCls.length === 1) return;

        if (el.getAttribute('endNum') === '0' && el.getAttribute('class').indexOf('cjk-pointer') === -1) {
          if (isHidden) {
            if (numberCls.length === n + 1) {
              this.removeCls(this.$refs['cjk-running-container'], 'cjk-minus');
            } else {
              el.style.width = '0px';
              el.style.overflow = 'hidden';
            }
          }
        } else {
          isHidden = false;
        }
      });
    },

    addCls(el, cls) {
      //给元素增加class
      if (!el) return;
      const allCls = el.getAttribute('class');
      if (allCls.indexOf(cls) === -1) el.setAttribute('class', `${allCls} ${cls}`);
    },

    removeCls(el, cls) {
      //给元素移除class
      if (!el) return;
      const allCls = el.getAttribute('class');
      if (allCls.indexOf(cls) !== -1) el.setAttribute('class', allCls.replace(cls, ''));
    },

    createRunningHtml(numLists, start, end, duration, times, isDown, isSplit, isPointer) {
      //创建当前位数字的滚动特效所需的html
      const animation = isDown ? 'reverseRunningAnimation' : 'runningAnimation';
      const splitCls = isSplit ? ' cjk-split' : '';
      const pointerCls = isPointer ? ' cjk-pointer' : '';

      if (times === 0) {
        this.htmlStr += `<div style="width: ${0.55 * this.widthScale}em;" class="cjk-number-box${splitCls}${pointerCls}" endNum="${end}">
        <div><ul class="cjk-running-area"><li>${end}</li></ul></div></div>`;
        return;
      } else {
        this.htmlStr += `<div style="width: ${0.55 * this.widthScale}em;" class="cjk-number-box${splitCls}${pointerCls}" endNum="${end}">
        <div>
        <ul class="cjk-running-area" style="animation-name:${animation};animation-duration:${duration}s;animation-iteration-count: ${times};">${numLists[start]}</ul>
        </div>
        </div>`;
      }
    },

    getDomList(cls) {
      const elArr = [];
      const clsEls = this.rootEl.getElementsByClassName(cls);

      for (let i = 0; i < clsEls.length; i++) {
        elArr.push(clsEls[i]);
      }

      return elArr;
    }

  }
});
// CONCATENATED MODULE: ./packages/vue-running-number.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_vue_running_numbervue_type_script_lang_js_ = (vue_running_numbervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/vue-running-number.vue?vue&type=style&index=0&lang=css&
var vue_running_numbervue_type_style_index_0_lang_css_ = __webpack_require__("bc3b");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/vue-running-number.vue






/* normalize component */

var component = normalizeComponent(
  packages_vue_running_numbervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vue_running_number = (component.exports);
// CONCATENATED MODULE: ./packages/index.js
 // 为组件提供 install 安装方法，供按需引入

vue_running_number.install = function (Vue) {
  Vue.component(vue_running_number.name, vue_running_number);
};

/* harmony default export */ var packages_0 = (vue_running_number);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
});
//# sourceMappingURL=index.umd.js.map