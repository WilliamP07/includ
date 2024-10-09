"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_base-components_BaseInput_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseInput.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseInput.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  inheritAttrs: false,
  data: function data() {
    return {
      data: "",
      counter: 0,
      icon: "visibility"
    };
  },
  props: {
    label: {
      type: String,
      "default": ""
    },
    validation: {
      type: Object,
      "default": ""
    },
    validationTextType: {
      type: String,
      "default": ""
    },
    required: {
      type: Boolean,
      "default": false
    },
    type: {
      type: String,
      "default": "text"
    },
    mask: {
      type: String,
      "default": ""
    },
    validationsInput: {
      type: Object,
      "default": function _default() {
        return {
          required: true,
          format: false,
          minLength: false,
          maxLength: false,
          minValue: false,
          maxValue: false,
          isValidDui: false,
          isValidNit: false,
          isValidIsss: false,
          isValidAfp: false,
          isValidConamypeId: false,
          isValidNrc: false,
          email: false,
          showPassword: false
        };
      }
    },
    min: {
      type: Number,
      "default": 0
    },
    max: {
      type: Number,
      "default": 150
    }
  },
  watch: {
    type: function type(val) {
      this.icon = this.type == "password" ? "visibility" : "visibility_off";
    }
  },
  mounted: function mounted() {
    this.data = this.$attrs.value;
    this.validation.$reset();
  },
  updated: function updated() {
    this.data = this.validation.$model;
  },
  methods: {
    updateValue: function updateValue() {
      this.validation.$model = this.data;
      this.$emit("input", this.data);
    },
    validateText: function validateText() {
      if (this.data) {
        switch (this.validationTextType) {
          case "default":
            this.data = this.data.replace(/[^A-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚñ\' ']/gi, "");
            this.data = this.data.replace(/^([a-zA-Z0-9])\1{4}/gi, "");
            break;

          case "only-letters":
            this.data = this.data.replace(/[^A-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚñ\' ']/gi, "");
            break;

          case "only-numbers":
            this.data = this.data.replace(/[^0-9\-]/g, "");
            break;

          case "none":
            break;

          case "only-repeats":
            this.data = this.data.replace(/^([a-zA-Z0-9])\1{4}/g, "");
            break;

          default:
            break;
        }
      }

      this.validation.$model = this.data;
      this.$emit("keyup", this.data);
    },
    showPassword: function showPassword() {
      var show = this.type == "password" ? "text" : "password";
      this.$emit("update-password", {
        show: show
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseInput.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseInput.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.v-text-field--outlined {\r\n  border-color: #1976d2 !important;\n}\n.v-text-field--outlined.v-input--is-focused fieldset,\r\n.v-text-field--outlined.v-input--has-state fieldset {\r\n  border-color: #2d52a8 !important;\n}\n.v-text-field__details {\r\n  display: none;\n}\n.material-icons {\r\n  width: 30px;\r\n  height: auto;\n}\np {\r\n  margin-bottom: 0px;\r\n  height: 20px;\r\n  line-height: 20px; /* same as height! */\r\n  display: flex;\r\n  justify-content: left;\r\n  align-content: center;\r\n  flex-direction: row;\n}\r\n", "",{"version":3,"sources":["webpack://./resources/js/components/base-components/BaseInput.vue"],"names":[],"mappings":";AAyQA;EACA,gCAAA;AACA;AAEA;;EAEA,gCAAA;AACA;AAEA;EACA,aAAA;AACA;AAEA;EACA,WAAA;EACA,YAAA;AACA;AAEA;EACA,kBAAA;EACA,YAAA;EACA,iBAAA,EAAA,oBAAA;EACA,aAAA;EACA,qBAAA;EACA,qBAAA;EACA,mBAAA;AACA","sourcesContent":["<template>\r\n  <div>\r\n    <v-text-field\r\n      dense\r\n      :label=\"label\"\r\n      outlined\r\n      v-model.trim=\"data\"\r\n      :class=\"{\r\n        'is-invalid': validation.$error,\r\n        'is-valid': !validation.$invalid,\r\n      }\"\r\n      :key=\"counter\"\r\n      :min=\"min\"\r\n      :max=\"max\"\r\n      :type=\"type\"\r\n      @input=\"updateValue\"\r\n      v-mask=\"mask\"\r\n      @keyup=\"validateText()\"\r\n      autocomplete=\"new-password\"\r\n      class=\"mb-1\"\r\n    >\r\n      <v-icon\r\n        slot=\"append\"\r\n        color=\"green\"\r\n        v-if=\"validationsInput.showPassword\"\r\n        @click=\"showPassword()\"\r\n      >\r\n        {{ icon }}\r\n      </v-icon>\r\n    </v-text-field>\r\n    <v-container class=\"mb-0 pt-0 my-auto orange-text\" v-if=\"validation.$dirty\">\r\n      <!-- <template v-if=\"!validationsInput.required\">\r\n        <v-row class=\"pt-0\" v-if=\"!validationsInput.required\">\r\n          <p class=\"mb-0 mt-1 text-muted\">(Campo opcional)</p>\r\n        </v-row>\r\n      </template> -->\r\n      <template>\r\n        <v-row\r\n          v-if=\"validation.$error && validationsInput.required\"\r\n          class=\"pt-0\"\r\n        >\r\n          <p class=\"mb-0 mt-1\">\r\n            <i class=\"material-icons\">error_outline</i> Campo requerido.\r\n          </p>\r\n        </v-row>\r\n        <v-row v-if=\"validationsInput.minLength && !validation.minLength\">\r\n          <p class=\"pl-0 mt-1\">\r\n            <i class=\"material-icons\">error_outline</i> {{ min }} carácter\r\n            mínimo.\r\n          </p>\r\n        </v-row>\r\n        <v-row v-if=\"validationsInput.maxLength && !validation.maxLength\">\r\n          <p class=\"pl-0 pr-0 mt-1\">\r\n            <i class=\"material-icons\">error_outline</i> {{ max }} caracteres\r\n            máximo.\r\n          </p>\r\n        </v-row>\r\n        <v-row v-if=\"validationsInput.minValue && !validation.minValue\">\r\n          <p class=\"mt-1\">\r\n            <i class=\"material-icons\">error_outline</i> {{ min }} es el valor\r\n            mínimo.\r\n          </p>\r\n        </v-row>\r\n        <v-row v-if=\"validationsInput.maxValue && !validation.maxValue\">\r\n          <p class=\"mt-1\">\r\n            <i class=\"material-icons\">error_outline</i> {{ max }} el valor\r\n            máximo.\r\n          </p>\r\n        </v-row>\r\n        <v-row v-if=\"validationsInput.format && !validation.isValidNumber\">\r\n          <p class=\"mt-1\">\r\n            <i class=\"material-icons\">error_outline</i> Formato inválido\r\n          </p>\r\n        </v-row>\r\n        <v-row v-if=\"validationsInput.isValidDui && !validation.isValidDui\">\r\n          <p class=\"mt-1\">\r\n            <i class=\"material-icons\">error_outline</i> DUI inválido\r\n          </p>\r\n        </v-row>\r\n        <v-row v-if=\"validationsInput.isValidNit && !validation.isValidNit\">\r\n          <p class=\"mt-1\">\r\n            <i class=\"material-icons\">error_outline</i> NIT inválido\r\n          </p>\r\n        </v-row>\r\n        <v-row v-if=\"validationsInput.isValidIsss && !validation.isValidIsss\">\r\n          <p class=\"mt-1\">\r\n            <i class=\"material-icons\">error_outline</i> ISSS inválido\r\n          </p>\r\n        </v-row>\r\n        <v-row v-if=\"validationsInput.isValidAfp && !validation.isValidAfp\">\r\n          <p class=\"mt-1\">\r\n            <i class=\"material-icons\">error_outline</i> AFP inválido\r\n          </p>\r\n        </v-row>\r\n        <v-row\r\n          v-if=\"\r\n            validationsInput.isValidConamypeId && !validation.isValidConamypeId\r\n          \"\r\n        >\r\n          <p class=\"mt-1\">\r\n            <i class=\"material-icons\">error_outline</i> ID de Conamype inválido\r\n          </p>\r\n        </v-row>\r\n        <v-row v-if=\"validationsInput.isValidNrc && !validation.isValidNrc\">\r\n          <p class=\"mt-1\">\r\n            <i class=\"material-icons\">error_outline</i> NRC inválido\r\n          </p>\r\n        </v-row>\r\n        <v-row v-if=\"validationsInput.email && !validation.email\">\r\n          <p class=\"mt-1\">\r\n            <i class=\"material-icons\">error_outline</i> Formato de correo\r\n            electrónico inválido.\r\n          </p>\r\n        </v-row>\r\n        <v-row\r\n          v-if=\"validationsInput.isValidPassword && !validation.isValidPassword\"\r\n        >\r\n          <p class=\"mt-1\">\r\n            <i class=\"material-icons\">error_outline</i>\r\n            8 caracteres mínimo.\r\n          </p>\r\n          <p class=\"mt-1\">\r\n            <i class=\"material-icons\">error_outline</i>\r\n            1 mayúscula mínimo.\r\n          </p>\r\n          <p class=\"mt-1\">\r\n            <i class=\"material-icons\">error_outline</i>\r\n            1 minúscula mínimo.\r\n          </p>\r\n          <p class=\"mt-1\">\r\n            <i class=\"material-icons\">error_outline</i>\r\n            13 caracteres máximo.\r\n          </p>\r\n        </v-row>\r\n      </template>\r\n    </v-container>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  inheritAttrs: false,\r\n  data() {\r\n    return {\r\n      data: \"\",\r\n      counter: 0,\r\n      icon: \"visibility\",\r\n    };\r\n  },\r\n  props: {\r\n    label: {\r\n      type: String,\r\n      default: \"\",\r\n    },\r\n    validation: {\r\n      type: Object,\r\n      default: \"\",\r\n    },\r\n    validationTextType: {\r\n      type: String,\r\n      default: \"\",\r\n    },\r\n    required: {\r\n      type: Boolean,\r\n      default: false,\r\n    },\r\n    type: {\r\n      type: String,\r\n      default: \"text\",\r\n    },\r\n    mask: {\r\n      type: String,\r\n      default: \"\",\r\n    },\r\n    validationsInput: {\r\n      type: Object,\r\n      default: () => {\r\n        return {\r\n          required: true,\r\n          format: false,\r\n          minLength: false,\r\n          maxLength: false,\r\n          minValue: false,\r\n          maxValue: false,\r\n          isValidDui: false,\r\n          isValidNit: false,\r\n          isValidIsss: false,\r\n          isValidAfp: false,\r\n          isValidConamypeId: false,\r\n          isValidNrc: false,\r\n          email: false,\r\n          showPassword: false,\r\n        };\r\n      },\r\n    },\r\n    min: {\r\n      type: Number,\r\n      default: 0,\r\n    },\r\n    max: {\r\n      type: Number,\r\n      default: 150,\r\n    },\r\n  },\r\n  watch: {\r\n    type(val) {\r\n      this.icon = this.type == \"password\" ? \"visibility\" : \"visibility_off\";\r\n    },\r\n  },\r\n  mounted() {\r\n    this.data = this.$attrs.value;\r\n    this.validation.$reset();\r\n  },\r\n  updated() {\r\n    this.data = this.validation.$model;\r\n  },\r\n  methods: {\r\n    updateValue() {\r\n      this.validation.$model = this.data;\r\n      this.$emit(\"input\", this.data);\r\n    },\r\n\r\n    validateText() {\r\n      if (this.data) {\r\n        switch (this.validationTextType) {\r\n          case \"default\":\r\n            this.data = this.data.replace(\r\n              /[^A-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚñ\\' ']/gi,\r\n              \"\"\r\n            );\r\n            this.data = this.data.replace(/^([a-zA-Z0-9])\\1{4}/gi, \"\");\r\n            break;\r\n          case \"only-letters\":\r\n            this.data = this.data.replace(\r\n              /[^A-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚñ\\' ']/gi,\r\n              \"\"\r\n            );\r\n            break;\r\n          case \"only-numbers\":\r\n            this.data = this.data.replace(/[^0-9\\-]/g, \"\");\r\n            break;\r\n          case \"none\":\r\n            break;\r\n          case \"only-repeats\":\r\n            this.data = this.data.replace(/^([a-zA-Z0-9])\\1{4}/g, \"\");\r\n            break;\r\n          default:\r\n            break;\r\n        }\r\n      }\r\n\r\n      this.validation.$model = this.data;\r\n      this.$emit(\"keyup\", this.data);\r\n    },\r\n\r\n    showPassword() {\r\n      const show = this.type == \"password\" ? \"text\" : \"password\";\r\n\r\n      this.$emit(\"update-password\", { show });\r\n    },\r\n  },\r\n};\r\n</script>\r\n\r\n<style>\r\n.v-text-field--outlined {\r\n  border-color: #1976d2 !important;\r\n}\r\n\r\n.v-text-field--outlined.v-input--is-focused fieldset,\r\n.v-text-field--outlined.v-input--has-state fieldset {\r\n  border-color: #2d52a8 !important;\r\n}\r\n\r\n.v-text-field__details {\r\n  display: none;\r\n}\r\n\r\n.material-icons {\r\n  width: 30px;\r\n  height: auto;\r\n}\r\n\r\np {\r\n  margin-bottom: 0px;\r\n  height: 20px;\r\n  line-height: 20px; /* same as height! */\r\n  display: flex;\r\n  justify-content: left;\r\n  align-content: center;\r\n  flex-direction: row;\r\n}\r\n</style>\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \*************************************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseInput.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseInput.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseInput_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BaseInput.vue?vue&type=style&index=0&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseInput.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseInput_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseInput_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./resources/js/components/base-components/BaseInput.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/base-components/BaseInput.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BaseInput_vue_vue_type_template_id_7e2bcf61___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseInput.vue?vue&type=template&id=7e2bcf61& */ "./resources/js/components/base-components/BaseInput.vue?vue&type=template&id=7e2bcf61&");
/* harmony import */ var _BaseInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseInput.vue?vue&type=script&lang=js& */ "./resources/js/components/base-components/BaseInput.vue?vue&type=script&lang=js&");
/* harmony import */ var _BaseInput_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BaseInput.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/base-components/BaseInput.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BaseInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BaseInput_vue_vue_type_template_id_7e2bcf61___WEBPACK_IMPORTED_MODULE_0__.render,
  _BaseInput_vue_vue_type_template_id_7e2bcf61___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/base-components/BaseInput.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/base-components/BaseInput.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/base-components/BaseInput.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BaseInput.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseInput.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/base-components/BaseInput.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/base-components/BaseInput.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseInput_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BaseInput.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseInput.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/base-components/BaseInput.vue?vue&type=template&id=7e2bcf61&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/base-components/BaseInput.vue?vue&type=template&id=7e2bcf61& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseInput_vue_vue_type_template_id_7e2bcf61___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseInput_vue_vue_type_template_id_7e2bcf61___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseInput_vue_vue_type_template_id_7e2bcf61___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BaseInput.vue?vue&type=template&id=7e2bcf61& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseInput.vue?vue&type=template&id=7e2bcf61&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseInput.vue?vue&type=template&id=7e2bcf61&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseInput.vue?vue&type=template&id=7e2bcf61& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-text-field",
        {
          directives: [
            {
              name: "mask",
              rawName: "v-mask",
              value: _vm.mask,
              expression: "mask",
            },
          ],
          key: _vm.counter,
          staticClass: "mb-1",
          class: {
            "is-invalid": _vm.validation.$error,
            "is-valid": !_vm.validation.$invalid,
          },
          attrs: {
            dense: "",
            label: _vm.label,
            outlined: "",
            min: _vm.min,
            max: _vm.max,
            type: _vm.type,
            autocomplete: "new-password",
          },
          on: {
            input: _vm.updateValue,
            keyup: function ($event) {
              return _vm.validateText()
            },
          },
          model: {
            value: _vm.data,
            callback: function ($$v) {
              _vm.data = typeof $$v === "string" ? $$v.trim() : $$v
            },
            expression: "data",
          },
        },
        [
          _vm.validationsInput.showPassword
            ? _c(
                "v-icon",
                {
                  attrs: { slot: "append", color: "green" },
                  on: {
                    click: function ($event) {
                      return _vm.showPassword()
                    },
                  },
                  slot: "append",
                },
                [_vm._v("\n      " + _vm._s(_vm.icon) + "\n    ")]
              )
            : _vm._e(),
        ],
        1
      ),
      _vm._v(" "),
      _vm.validation.$dirty
        ? _c(
            "v-container",
            { staticClass: "mb-0 pt-0 my-auto orange-text" },
            [
              [
                _vm.validation.$error && _vm.validationsInput.required
                  ? _c("v-row", { staticClass: "pt-0" }, [
                      _c("p", { staticClass: "mb-0 mt-1" }, [
                        _c("i", { staticClass: "material-icons" }, [
                          _vm._v("error_outline"),
                        ]),
                        _vm._v(" Campo requerido.\n        "),
                      ]),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.validationsInput.minLength && !_vm.validation.minLength
                  ? _c("v-row", [
                      _c("p", { staticClass: "pl-0 mt-1" }, [
                        _c("i", { staticClass: "material-icons" }, [
                          _vm._v("error_outline"),
                        ]),
                        _vm._v(
                          " " +
                            _vm._s(_vm.min) +
                            " carácter\n          mínimo.\n        "
                        ),
                      ]),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.validationsInput.maxLength && !_vm.validation.maxLength
                  ? _c("v-row", [
                      _c("p", { staticClass: "pl-0 pr-0 mt-1" }, [
                        _c("i", { staticClass: "material-icons" }, [
                          _vm._v("error_outline"),
                        ]),
                        _vm._v(
                          " " +
                            _vm._s(_vm.max) +
                            " caracteres\n          máximo.\n        "
                        ),
                      ]),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.validationsInput.minValue && !_vm.validation.minValue
                  ? _c("v-row", [
                      _c("p", { staticClass: "mt-1" }, [
                        _c("i", { staticClass: "material-icons" }, [
                          _vm._v("error_outline"),
                        ]),
                        _vm._v(
                          " " +
                            _vm._s(_vm.min) +
                            " es el valor\n          mínimo.\n        "
                        ),
                      ]),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.validationsInput.maxValue && !_vm.validation.maxValue
                  ? _c("v-row", [
                      _c("p", { staticClass: "mt-1" }, [
                        _c("i", { staticClass: "material-icons" }, [
                          _vm._v("error_outline"),
                        ]),
                        _vm._v(
                          " " +
                            _vm._s(_vm.max) +
                            " el valor\n          máximo.\n        "
                        ),
                      ]),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.validationsInput.format && !_vm.validation.isValidNumber
                  ? _c("v-row", [
                      _c("p", { staticClass: "mt-1" }, [
                        _c("i", { staticClass: "material-icons" }, [
                          _vm._v("error_outline"),
                        ]),
                        _vm._v(" Formato inválido\n        "),
                      ]),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.validationsInput.isValidDui && !_vm.validation.isValidDui
                  ? _c("v-row", [
                      _c("p", { staticClass: "mt-1" }, [
                        _c("i", { staticClass: "material-icons" }, [
                          _vm._v("error_outline"),
                        ]),
                        _vm._v(" DUI inválido\n        "),
                      ]),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.validationsInput.isValidNit && !_vm.validation.isValidNit
                  ? _c("v-row", [
                      _c("p", { staticClass: "mt-1" }, [
                        _c("i", { staticClass: "material-icons" }, [
                          _vm._v("error_outline"),
                        ]),
                        _vm._v(" NIT inválido\n        "),
                      ]),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.validationsInput.isValidIsss && !_vm.validation.isValidIsss
                  ? _c("v-row", [
                      _c("p", { staticClass: "mt-1" }, [
                        _c("i", { staticClass: "material-icons" }, [
                          _vm._v("error_outline"),
                        ]),
                        _vm._v(" ISSS inválido\n        "),
                      ]),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.validationsInput.isValidAfp && !_vm.validation.isValidAfp
                  ? _c("v-row", [
                      _c("p", { staticClass: "mt-1" }, [
                        _c("i", { staticClass: "material-icons" }, [
                          _vm._v("error_outline"),
                        ]),
                        _vm._v(" AFP inválido\n        "),
                      ]),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.validationsInput.isValidConamypeId &&
                !_vm.validation.isValidConamypeId
                  ? _c("v-row", [
                      _c("p", { staticClass: "mt-1" }, [
                        _c("i", { staticClass: "material-icons" }, [
                          _vm._v("error_outline"),
                        ]),
                        _vm._v(" ID de Conamype inválido\n        "),
                      ]),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.validationsInput.isValidNrc && !_vm.validation.isValidNrc
                  ? _c("v-row", [
                      _c("p", { staticClass: "mt-1" }, [
                        _c("i", { staticClass: "material-icons" }, [
                          _vm._v("error_outline"),
                        ]),
                        _vm._v(" NRC inválido\n        "),
                      ]),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.validationsInput.email && !_vm.validation.email
                  ? _c("v-row", [
                      _c("p", { staticClass: "mt-1" }, [
                        _c("i", { staticClass: "material-icons" }, [
                          _vm._v("error_outline"),
                        ]),
                        _vm._v(
                          " Formato de correo\n          electrónico inválido.\n        "
                        ),
                      ]),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.validationsInput.isValidPassword &&
                !_vm.validation.isValidPassword
                  ? _c("v-row", [
                      _c("p", { staticClass: "mt-1" }, [
                        _c("i", { staticClass: "material-icons" }, [
                          _vm._v("error_outline"),
                        ]),
                        _vm._v("\n          8 caracteres mínimo.\n        "),
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "mt-1" }, [
                        _c("i", { staticClass: "material-icons" }, [
                          _vm._v("error_outline"),
                        ]),
                        _vm._v("\n          1 mayúscula mínimo.\n        "),
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "mt-1" }, [
                        _c("i", { staticClass: "material-icons" }, [
                          _vm._v("error_outline"),
                        ]),
                        _vm._v("\n          1 minúscula mínimo.\n        "),
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "mt-1" }, [
                        _c("i", { staticClass: "material-icons" }, [
                          _vm._v("error_outline"),
                        ]),
                        _vm._v("\n          13 caracteres máximo.\n        "),
                      ]),
                    ])
                  : _vm._e(),
              ],
            ],
            2
          )
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
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


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvcmVzb3VyY2VzX2pzX2NvbXBvbmVudHNfYmFzZS1jb21wb25lbnRzX0Jhc2VJbnB1dF92dWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0SUEsaUVBQWU7QUFDZkEscUJBREE7QUFFQUMsTUFGQSxrQkFFQTtBQUNBO0FBQ0FBLGNBREE7QUFFQUMsZ0JBRkE7QUFHQUM7QUFIQTtBQUtBLEdBUkE7QUFTQUM7QUFDQUM7QUFDQUMsa0JBREE7QUFFQTtBQUZBLEtBREE7QUFLQUM7QUFDQUQsa0JBREE7QUFFQTtBQUZBLEtBTEE7QUFTQUU7QUFDQUYsa0JBREE7QUFFQTtBQUZBLEtBVEE7QUFhQUc7QUFDQUgsbUJBREE7QUFFQTtBQUZBLEtBYkE7QUFpQkFBO0FBQ0FBLGtCQURBO0FBRUE7QUFGQSxLQWpCQTtBQXFCQUk7QUFDQUosa0JBREE7QUFFQTtBQUZBLEtBckJBO0FBeUJBSztBQUNBTCxrQkFEQTtBQUVBO0FBQ0E7QUFDQUcsd0JBREE7QUFFQUcsdUJBRkE7QUFHQUMsMEJBSEE7QUFJQUMsMEJBSkE7QUFLQUMseUJBTEE7QUFNQUMseUJBTkE7QUFPQUMsMkJBUEE7QUFRQUMsMkJBUkE7QUFTQUMsNEJBVEE7QUFVQUMsMkJBVkE7QUFXQUMsa0NBWEE7QUFZQUMsMkJBWkE7QUFhQUMsc0JBYkE7QUFjQUM7QUFkQTtBQWdCQTtBQW5CQSxLQXpCQTtBQThDQUM7QUFDQW5CLGtCQURBO0FBRUE7QUFGQSxLQTlDQTtBQWtEQW9CO0FBQ0FwQixrQkFEQTtBQUVBO0FBRkE7QUFsREEsR0FUQTtBQWdFQXFCO0FBQ0FyQixRQURBLGdCQUNBc0IsR0FEQSxFQUNBO0FBQ0E7QUFDQTtBQUhBLEdBaEVBO0FBcUVB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9iYXNlLWNvbXBvbmVudHMvQmFzZUlucHV0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9iYXNlLWNvbXBvbmVudHMvQmFzZUlucHV0LnZ1ZT9iNGMwIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sYXJhdmVsLW1peC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sYXJhdmVsLW1peC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9iYXNlLWNvbXBvbmVudHMvQmFzZUlucHV0LnZ1ZT80NjgzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9iYXNlLWNvbXBvbmVudHMvQmFzZUlucHV0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9iYXNlLWNvbXBvbmVudHMvQmFzZUlucHV0LnZ1ZT8xZDA3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Jhc2UtY29tcG9uZW50cy9CYXNlSW5wdXQudnVlPzU5NjIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvYmFzZS1jb21wb25lbnRzL0Jhc2VJbnB1dC52dWU/MmFhNyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9iYXNlLWNvbXBvbmVudHMvQmFzZUlucHV0LnZ1ZT85NTRiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICA8di10ZXh0LWZpZWxkXHJcbiAgICAgIGRlbnNlXHJcbiAgICAgIDpsYWJlbD1cImxhYmVsXCJcclxuICAgICAgb3V0bGluZWRcclxuICAgICAgdi1tb2RlbC50cmltPVwiZGF0YVwiXHJcbiAgICAgIDpjbGFzcz1cIntcclxuICAgICAgICAnaXMtaW52YWxpZCc6IHZhbGlkYXRpb24uJGVycm9yLFxyXG4gICAgICAgICdpcy12YWxpZCc6ICF2YWxpZGF0aW9uLiRpbnZhbGlkLFxyXG4gICAgICB9XCJcclxuICAgICAgOmtleT1cImNvdW50ZXJcIlxyXG4gICAgICA6bWluPVwibWluXCJcclxuICAgICAgOm1heD1cIm1heFwiXHJcbiAgICAgIDp0eXBlPVwidHlwZVwiXHJcbiAgICAgIEBpbnB1dD1cInVwZGF0ZVZhbHVlXCJcclxuICAgICAgdi1tYXNrPVwibWFza1wiXHJcbiAgICAgIEBrZXl1cD1cInZhbGlkYXRlVGV4dCgpXCJcclxuICAgICAgYXV0b2NvbXBsZXRlPVwibmV3LXBhc3N3b3JkXCJcclxuICAgICAgY2xhc3M9XCJtYi0xXCJcclxuICAgID5cclxuICAgICAgPHYtaWNvblxyXG4gICAgICAgIHNsb3Q9XCJhcHBlbmRcIlxyXG4gICAgICAgIGNvbG9yPVwiZ3JlZW5cIlxyXG4gICAgICAgIHYtaWY9XCJ2YWxpZGF0aW9uc0lucHV0LnNob3dQYXNzd29yZFwiXHJcbiAgICAgICAgQGNsaWNrPVwic2hvd1Bhc3N3b3JkKClcIlxyXG4gICAgICA+XHJcbiAgICAgICAge3sgaWNvbiB9fVxyXG4gICAgICA8L3YtaWNvbj5cclxuICAgIDwvdi10ZXh0LWZpZWxkPlxyXG4gICAgPHYtY29udGFpbmVyIGNsYXNzPVwibWItMCBwdC0wIG15LWF1dG8gb3JhbmdlLXRleHRcIiB2LWlmPVwidmFsaWRhdGlvbi4kZGlydHlcIj5cclxuICAgICAgPCEtLSA8dGVtcGxhdGUgdi1pZj1cIiF2YWxpZGF0aW9uc0lucHV0LnJlcXVpcmVkXCI+XHJcbiAgICAgICAgPHYtcm93IGNsYXNzPVwicHQtMFwiIHYtaWY9XCIhdmFsaWRhdGlvbnNJbnB1dC5yZXF1aXJlZFwiPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJtYi0wIG10LTEgdGV4dC1tdXRlZFwiPihDYW1wbyBvcGNpb25hbCk8L3A+XHJcbiAgICAgICAgPC92LXJvdz5cclxuICAgICAgPC90ZW1wbGF0ZT4gLS0+XHJcbiAgICAgIDx0ZW1wbGF0ZT5cclxuICAgICAgICA8di1yb3dcclxuICAgICAgICAgIHYtaWY9XCJ2YWxpZGF0aW9uLiRlcnJvciAmJiB2YWxpZGF0aW9uc0lucHV0LnJlcXVpcmVkXCJcclxuICAgICAgICAgIGNsYXNzPVwicHQtMFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJtYi0wIG10LTFcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmVycm9yX291dGxpbmU8L2k+IENhbXBvIHJlcXVlcmlkby5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L3Ytcm93PlxyXG4gICAgICAgIDx2LXJvdyB2LWlmPVwidmFsaWRhdGlvbnNJbnB1dC5taW5MZW5ndGggJiYgIXZhbGlkYXRpb24ubWluTGVuZ3RoXCI+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cInBsLTAgbXQtMVwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZXJyb3Jfb3V0bGluZTwvaT4ge3sgbWluIH19IGNhcsOhY3RlclxyXG4gICAgICAgICAgICBtw61uaW1vLlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvdi1yb3c+XHJcbiAgICAgICAgPHYtcm93IHYtaWY9XCJ2YWxpZGF0aW9uc0lucHV0Lm1heExlbmd0aCAmJiAhdmFsaWRhdGlvbi5tYXhMZW5ndGhcIj5cclxuICAgICAgICAgIDxwIGNsYXNzPVwicGwtMCBwci0wIG10LTFcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmVycm9yX291dGxpbmU8L2k+IHt7IG1heCB9fSBjYXJhY3RlcmVzXHJcbiAgICAgICAgICAgIG3DoXhpbW8uXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC92LXJvdz5cclxuICAgICAgICA8di1yb3cgdi1pZj1cInZhbGlkYXRpb25zSW5wdXQubWluVmFsdWUgJiYgIXZhbGlkYXRpb24ubWluVmFsdWVcIj5cclxuICAgICAgICAgIDxwIGNsYXNzPVwibXQtMVwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZXJyb3Jfb3V0bGluZTwvaT4ge3sgbWluIH19IGVzIGVsIHZhbG9yXHJcbiAgICAgICAgICAgIG3DrW5pbW8uXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC92LXJvdz5cclxuICAgICAgICA8di1yb3cgdi1pZj1cInZhbGlkYXRpb25zSW5wdXQubWF4VmFsdWUgJiYgIXZhbGlkYXRpb24ubWF4VmFsdWVcIj5cclxuICAgICAgICAgIDxwIGNsYXNzPVwibXQtMVwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZXJyb3Jfb3V0bGluZTwvaT4ge3sgbWF4IH19IGVsIHZhbG9yXHJcbiAgICAgICAgICAgIG3DoXhpbW8uXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC92LXJvdz5cclxuICAgICAgICA8di1yb3cgdi1pZj1cInZhbGlkYXRpb25zSW5wdXQuZm9ybWF0ICYmICF2YWxpZGF0aW9uLmlzVmFsaWROdW1iZXJcIj5cclxuICAgICAgICAgIDxwIGNsYXNzPVwibXQtMVwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZXJyb3Jfb3V0bGluZTwvaT4gRm9ybWF0byBpbnbDoWxpZG9cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L3Ytcm93PlxyXG4gICAgICAgIDx2LXJvdyB2LWlmPVwidmFsaWRhdGlvbnNJbnB1dC5pc1ZhbGlkRHVpICYmICF2YWxpZGF0aW9uLmlzVmFsaWREdWlcIj5cclxuICAgICAgICAgIDxwIGNsYXNzPVwibXQtMVwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZXJyb3Jfb3V0bGluZTwvaT4gRFVJIGludsOhbGlkb1xyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvdi1yb3c+XHJcbiAgICAgICAgPHYtcm93IHYtaWY9XCJ2YWxpZGF0aW9uc0lucHV0LmlzVmFsaWROaXQgJiYgIXZhbGlkYXRpb24uaXNWYWxpZE5pdFwiPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJtdC0xXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5lcnJvcl9vdXRsaW5lPC9pPiBOSVQgaW52w6FsaWRvXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC92LXJvdz5cclxuICAgICAgICA8di1yb3cgdi1pZj1cInZhbGlkYXRpb25zSW5wdXQuaXNWYWxpZElzc3MgJiYgIXZhbGlkYXRpb24uaXNWYWxpZElzc3NcIj5cclxuICAgICAgICAgIDxwIGNsYXNzPVwibXQtMVwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZXJyb3Jfb3V0bGluZTwvaT4gSVNTUyBpbnbDoWxpZG9cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L3Ytcm93PlxyXG4gICAgICAgIDx2LXJvdyB2LWlmPVwidmFsaWRhdGlvbnNJbnB1dC5pc1ZhbGlkQWZwICYmICF2YWxpZGF0aW9uLmlzVmFsaWRBZnBcIj5cclxuICAgICAgICAgIDxwIGNsYXNzPVwibXQtMVwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZXJyb3Jfb3V0bGluZTwvaT4gQUZQIGludsOhbGlkb1xyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvdi1yb3c+XHJcbiAgICAgICAgPHYtcm93XHJcbiAgICAgICAgICB2LWlmPVwiXHJcbiAgICAgICAgICAgIHZhbGlkYXRpb25zSW5wdXQuaXNWYWxpZENvbmFteXBlSWQgJiYgIXZhbGlkYXRpb24uaXNWYWxpZENvbmFteXBlSWRcclxuICAgICAgICAgIFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJtdC0xXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5lcnJvcl9vdXRsaW5lPC9pPiBJRCBkZSBDb25hbXlwZSBpbnbDoWxpZG9cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L3Ytcm93PlxyXG4gICAgICAgIDx2LXJvdyB2LWlmPVwidmFsaWRhdGlvbnNJbnB1dC5pc1ZhbGlkTnJjICYmICF2YWxpZGF0aW9uLmlzVmFsaWROcmNcIj5cclxuICAgICAgICAgIDxwIGNsYXNzPVwibXQtMVwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZXJyb3Jfb3V0bGluZTwvaT4gTlJDIGludsOhbGlkb1xyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvdi1yb3c+XHJcbiAgICAgICAgPHYtcm93IHYtaWY9XCJ2YWxpZGF0aW9uc0lucHV0LmVtYWlsICYmICF2YWxpZGF0aW9uLmVtYWlsXCI+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cIm10LTFcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmVycm9yX291dGxpbmU8L2k+IEZvcm1hdG8gZGUgY29ycmVvXHJcbiAgICAgICAgICAgIGVsZWN0csOzbmljbyBpbnbDoWxpZG8uXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC92LXJvdz5cclxuICAgICAgICA8di1yb3dcclxuICAgICAgICAgIHYtaWY9XCJ2YWxpZGF0aW9uc0lucHV0LmlzVmFsaWRQYXNzd29yZCAmJiAhdmFsaWRhdGlvbi5pc1ZhbGlkUGFzc3dvcmRcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxwIGNsYXNzPVwibXQtMVwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZXJyb3Jfb3V0bGluZTwvaT5cclxuICAgICAgICAgICAgOCBjYXJhY3RlcmVzIG3DrW5pbW8uXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cIm10LTFcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmVycm9yX291dGxpbmU8L2k+XHJcbiAgICAgICAgICAgIDEgbWF5w7pzY3VsYSBtw61uaW1vLlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJtdC0xXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5lcnJvcl9vdXRsaW5lPC9pPlxyXG4gICAgICAgICAgICAxIG1pbsO6c2N1bGEgbcOtbmltby5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzPVwibXQtMVwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZXJyb3Jfb3V0bGluZTwvaT5cclxuICAgICAgICAgICAgMTMgY2FyYWN0ZXJlcyBtw6F4aW1vLlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvdi1yb3c+XHJcbiAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICA8L3YtY29udGFpbmVyPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGluaGVyaXRBdHRyczogZmFsc2UsXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGRhdGE6IFwiXCIsXHJcbiAgICAgIGNvdW50ZXI6IDAsXHJcbiAgICAgIGljb246IFwidmlzaWJpbGl0eVwiLFxyXG4gICAgfTtcclxuICB9LFxyXG4gIHByb3BzOiB7XHJcbiAgICBsYWJlbDoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIGRlZmF1bHQ6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICB0eXBlOiBPYmplY3QsXHJcbiAgICAgIGRlZmF1bHQ6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvblRleHRUeXBlOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgZGVmYXVsdDogXCJcIixcclxuICAgIH0sXHJcbiAgICByZXF1aXJlZDoge1xyXG4gICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB0eXBlOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgZGVmYXVsdDogXCJ0ZXh0XCIsXHJcbiAgICB9LFxyXG4gICAgbWFzazoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIGRlZmF1bHQ6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbnNJbnB1dDoge1xyXG4gICAgICB0eXBlOiBPYmplY3QsXHJcbiAgICAgIGRlZmF1bHQ6ICgpID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICBmb3JtYXQ6IGZhbHNlLFxyXG4gICAgICAgICAgbWluTGVuZ3RoOiBmYWxzZSxcclxuICAgICAgICAgIG1heExlbmd0aDogZmFsc2UsXHJcbiAgICAgICAgICBtaW5WYWx1ZTogZmFsc2UsXHJcbiAgICAgICAgICBtYXhWYWx1ZTogZmFsc2UsXHJcbiAgICAgICAgICBpc1ZhbGlkRHVpOiBmYWxzZSxcclxuICAgICAgICAgIGlzVmFsaWROaXQ6IGZhbHNlLFxyXG4gICAgICAgICAgaXNWYWxpZElzc3M6IGZhbHNlLFxyXG4gICAgICAgICAgaXNWYWxpZEFmcDogZmFsc2UsXHJcbiAgICAgICAgICBpc1ZhbGlkQ29uYW15cGVJZDogZmFsc2UsXHJcbiAgICAgICAgICBpc1ZhbGlkTnJjOiBmYWxzZSxcclxuICAgICAgICAgIGVtYWlsOiBmYWxzZSxcclxuICAgICAgICAgIHNob3dQYXNzd29yZDogZmFsc2UsXHJcbiAgICAgICAgfTtcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBtaW46IHtcclxuICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICBkZWZhdWx0OiAwLFxyXG4gICAgfSxcclxuICAgIG1heDoge1xyXG4gICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgIGRlZmF1bHQ6IDE1MCxcclxuICAgIH0sXHJcbiAgfSxcclxuICB3YXRjaDoge1xyXG4gICAgdHlwZSh2YWwpIHtcclxuICAgICAgdGhpcy5pY29uID0gdGhpcy50eXBlID09IFwicGFzc3dvcmRcIiA/IFwidmlzaWJpbGl0eVwiIDogXCJ2aXNpYmlsaXR5X29mZlwiO1xyXG4gICAgfSxcclxuICB9LFxyXG4gIG1vdW50ZWQoKSB7XHJcbiAgICB0aGlzLmRhdGEgPSB0aGlzLiRhdHRycy52YWx1ZTtcclxuICAgIHRoaXMudmFsaWRhdGlvbi4kcmVzZXQoKTtcclxuICB9LFxyXG4gIHVwZGF0ZWQoKSB7XHJcbiAgICB0aGlzLmRhdGEgPSB0aGlzLnZhbGlkYXRpb24uJG1vZGVsO1xyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgdXBkYXRlVmFsdWUoKSB7XHJcbiAgICAgIHRoaXMudmFsaWRhdGlvbi4kbW9kZWwgPSB0aGlzLmRhdGE7XHJcbiAgICAgIHRoaXMuJGVtaXQoXCJpbnB1dFwiLCB0aGlzLmRhdGEpO1xyXG4gICAgfSxcclxuXHJcbiAgICB2YWxpZGF0ZVRleHQoKSB7XHJcbiAgICAgIGlmICh0aGlzLmRhdGEpIHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMudmFsaWRhdGlvblRleHRUeXBlKSB7XHJcbiAgICAgICAgICBjYXNlIFwiZGVmYXVsdFwiOlxyXG4gICAgICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLmRhdGEucmVwbGFjZShcclxuICAgICAgICAgICAgICAvW15BLVrDoMOow6zDssO5w4DDiMOMw5LDmcOhw6nDrcOzw7rDvcOBw4nDjcOTw5rDsVxcJyAnXS9naSxcclxuICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IHRoaXMuZGF0YS5yZXBsYWNlKC9eKFthLXpBLVowLTldKVxcMXs0fS9naSwgXCJcIik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBcIm9ubHktbGV0dGVyc1wiOlxyXG4gICAgICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLmRhdGEucmVwbGFjZShcclxuICAgICAgICAgICAgICAvW15BLVrDoMOow6zDssO5w4DDiMOMw5LDmcOhw6nDrcOzw7rDvcOBw4nDjcOTw5rDsVxcJyAnXS9naSxcclxuICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBcIm9ubHktbnVtYmVyc1wiOlxyXG4gICAgICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLmRhdGEucmVwbGFjZSgvW14wLTlcXC1dL2csIFwiXCIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgXCJub25lXCI6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBcIm9ubHktcmVwZWF0c1wiOlxyXG4gICAgICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLmRhdGEucmVwbGFjZSgvXihbYS16QS1aMC05XSlcXDF7NH0vZywgXCJcIik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnZhbGlkYXRpb24uJG1vZGVsID0gdGhpcy5kYXRhO1xyXG4gICAgICB0aGlzLiRlbWl0KFwia2V5dXBcIiwgdGhpcy5kYXRhKTtcclxuICAgIH0sXHJcblxyXG4gICAgc2hvd1Bhc3N3b3JkKCkge1xyXG4gICAgICBjb25zdCBzaG93ID0gdGhpcy50eXBlID09IFwicGFzc3dvcmRcIiA/IFwidGV4dFwiIDogXCJwYXNzd29yZFwiO1xyXG5cclxuICAgICAgdGhpcy4kZW1pdChcInVwZGF0ZS1wYXNzd29yZFwiLCB7IHNob3cgfSk7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG4udi10ZXh0LWZpZWxkLS1vdXRsaW5lZCB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMTk3NmQyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi52LXRleHQtZmllbGQtLW91dGxpbmVkLnYtaW5wdXQtLWlzLWZvY3VzZWQgZmllbGRzZXQsXHJcbi52LXRleHQtZmllbGQtLW91dGxpbmVkLnYtaW5wdXQtLWhhcy1zdGF0ZSBmaWVsZHNldCB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMmQ1MmE4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi52LXRleHQtZmllbGRfX2RldGFpbHMge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5tYXRlcmlhbC1pY29ucyB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG5wIHtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4OyAvKiBzYW1lIGFzIGhlaWdodCEgKi9cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG48L3N0eWxlPlxyXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xhcmF2ZWwtbWl4L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGFyYXZlbC1taXgvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnYtdGV4dC1maWVsZC0tb3V0bGluZWQge1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjMTk3NmQyICFpbXBvcnRhbnQ7XFxufVxcbi52LXRleHQtZmllbGQtLW91dGxpbmVkLnYtaW5wdXQtLWlzLWZvY3VzZWQgZmllbGRzZXQsXFxyXFxuLnYtdGV4dC1maWVsZC0tb3V0bGluZWQudi1pbnB1dC0taGFzLXN0YXRlIGZpZWxkc2V0IHtcXHJcXG4gIGJvcmRlci1jb2xvcjogIzJkNTJhOCAhaW1wb3J0YW50O1xcbn1cXG4udi10ZXh0LWZpZWxkX19kZXRhaWxzIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5tYXRlcmlhbC1pY29ucyB7XFxyXFxuICB3aWR0aDogMzBweDtcXHJcXG4gIGhlaWdodDogYXV0bztcXG59XFxucCB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjBweDsgLyogc2FtZSBhcyBoZWlnaHQhICovXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcclxcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvYmFzZS1jb21wb25lbnRzL0Jhc2VJbnB1dC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQXlRQTtFQUNBLGdDQUFBO0FBQ0E7QUFFQTs7RUFFQSxnQ0FBQTtBQUNBO0FBRUE7RUFDQSxhQUFBO0FBQ0E7QUFFQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0E7QUFFQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBLEVBQUEsb0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcbiAgPGRpdj5cXHJcXG4gICAgPHYtdGV4dC1maWVsZFxcclxcbiAgICAgIGRlbnNlXFxyXFxuICAgICAgOmxhYmVsPVxcXCJsYWJlbFxcXCJcXHJcXG4gICAgICBvdXRsaW5lZFxcclxcbiAgICAgIHYtbW9kZWwudHJpbT1cXFwiZGF0YVxcXCJcXHJcXG4gICAgICA6Y2xhc3M9XFxcIntcXHJcXG4gICAgICAgICdpcy1pbnZhbGlkJzogdmFsaWRhdGlvbi4kZXJyb3IsXFxyXFxuICAgICAgICAnaXMtdmFsaWQnOiAhdmFsaWRhdGlvbi4kaW52YWxpZCxcXHJcXG4gICAgICB9XFxcIlxcclxcbiAgICAgIDprZXk9XFxcImNvdW50ZXJcXFwiXFxyXFxuICAgICAgOm1pbj1cXFwibWluXFxcIlxcclxcbiAgICAgIDptYXg9XFxcIm1heFxcXCJcXHJcXG4gICAgICA6dHlwZT1cXFwidHlwZVxcXCJcXHJcXG4gICAgICBAaW5wdXQ9XFxcInVwZGF0ZVZhbHVlXFxcIlxcclxcbiAgICAgIHYtbWFzaz1cXFwibWFza1xcXCJcXHJcXG4gICAgICBAa2V5dXA9XFxcInZhbGlkYXRlVGV4dCgpXFxcIlxcclxcbiAgICAgIGF1dG9jb21wbGV0ZT1cXFwibmV3LXBhc3N3b3JkXFxcIlxcclxcbiAgICAgIGNsYXNzPVxcXCJtYi0xXFxcIlxcclxcbiAgICA+XFxyXFxuICAgICAgPHYtaWNvblxcclxcbiAgICAgICAgc2xvdD1cXFwiYXBwZW5kXFxcIlxcclxcbiAgICAgICAgY29sb3I9XFxcImdyZWVuXFxcIlxcclxcbiAgICAgICAgdi1pZj1cXFwidmFsaWRhdGlvbnNJbnB1dC5zaG93UGFzc3dvcmRcXFwiXFxyXFxuICAgICAgICBAY2xpY2s9XFxcInNob3dQYXNzd29yZCgpXFxcIlxcclxcbiAgICAgID5cXHJcXG4gICAgICAgIHt7IGljb24gfX1cXHJcXG4gICAgICA8L3YtaWNvbj5cXHJcXG4gICAgPC92LXRleHQtZmllbGQ+XFxyXFxuICAgIDx2LWNvbnRhaW5lciBjbGFzcz1cXFwibWItMCBwdC0wIG15LWF1dG8gb3JhbmdlLXRleHRcXFwiIHYtaWY9XFxcInZhbGlkYXRpb24uJGRpcnR5XFxcIj5cXHJcXG4gICAgICA8IS0tIDx0ZW1wbGF0ZSB2LWlmPVxcXCIhdmFsaWRhdGlvbnNJbnB1dC5yZXF1aXJlZFxcXCI+XFxyXFxuICAgICAgICA8di1yb3cgY2xhc3M9XFxcInB0LTBcXFwiIHYtaWY9XFxcIiF2YWxpZGF0aW9uc0lucHV0LnJlcXVpcmVkXFxcIj5cXHJcXG4gICAgICAgICAgPHAgY2xhc3M9XFxcIm1iLTAgbXQtMSB0ZXh0LW11dGVkXFxcIj4oQ2FtcG8gb3BjaW9uYWwpPC9wPlxcclxcbiAgICAgICAgPC92LXJvdz5cXHJcXG4gICAgICA8L3RlbXBsYXRlPiAtLT5cXHJcXG4gICAgICA8dGVtcGxhdGU+XFxyXFxuICAgICAgICA8di1yb3dcXHJcXG4gICAgICAgICAgdi1pZj1cXFwidmFsaWRhdGlvbi4kZXJyb3IgJiYgdmFsaWRhdGlvbnNJbnB1dC5yZXF1aXJlZFxcXCJcXHJcXG4gICAgICAgICAgY2xhc3M9XFxcInB0LTBcXFwiXFxyXFxuICAgICAgICA+XFxyXFxuICAgICAgICAgIDxwIGNsYXNzPVxcXCJtYi0wIG10LTFcXFwiPlxcclxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJtYXRlcmlhbC1pY29uc1xcXCI+ZXJyb3Jfb3V0bGluZTwvaT4gQ2FtcG8gcmVxdWVyaWRvLlxcclxcbiAgICAgICAgICA8L3A+XFxyXFxuICAgICAgICA8L3Ytcm93PlxcclxcbiAgICAgICAgPHYtcm93IHYtaWY9XFxcInZhbGlkYXRpb25zSW5wdXQubWluTGVuZ3RoICYmICF2YWxpZGF0aW9uLm1pbkxlbmd0aFxcXCI+XFxyXFxuICAgICAgICAgIDxwIGNsYXNzPVxcXCJwbC0wIG10LTFcXFwiPlxcclxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJtYXRlcmlhbC1pY29uc1xcXCI+ZXJyb3Jfb3V0bGluZTwvaT4ge3sgbWluIH19IGNhcsOhY3RlclxcclxcbiAgICAgICAgICAgIG3DrW5pbW8uXFxyXFxuICAgICAgICAgIDwvcD5cXHJcXG4gICAgICAgIDwvdi1yb3c+XFxyXFxuICAgICAgICA8di1yb3cgdi1pZj1cXFwidmFsaWRhdGlvbnNJbnB1dC5tYXhMZW5ndGggJiYgIXZhbGlkYXRpb24ubWF4TGVuZ3RoXFxcIj5cXHJcXG4gICAgICAgICAgPHAgY2xhc3M9XFxcInBsLTAgcHItMCBtdC0xXFxcIj5cXHJcXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwibWF0ZXJpYWwtaWNvbnNcXFwiPmVycm9yX291dGxpbmU8L2k+IHt7IG1heCB9fSBjYXJhY3RlcmVzXFxyXFxuICAgICAgICAgICAgbcOheGltby5cXHJcXG4gICAgICAgICAgPC9wPlxcclxcbiAgICAgICAgPC92LXJvdz5cXHJcXG4gICAgICAgIDx2LXJvdyB2LWlmPVxcXCJ2YWxpZGF0aW9uc0lucHV0Lm1pblZhbHVlICYmICF2YWxpZGF0aW9uLm1pblZhbHVlXFxcIj5cXHJcXG4gICAgICAgICAgPHAgY2xhc3M9XFxcIm10LTFcXFwiPlxcclxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJtYXRlcmlhbC1pY29uc1xcXCI+ZXJyb3Jfb3V0bGluZTwvaT4ge3sgbWluIH19IGVzIGVsIHZhbG9yXFxyXFxuICAgICAgICAgICAgbcOtbmltby5cXHJcXG4gICAgICAgICAgPC9wPlxcclxcbiAgICAgICAgPC92LXJvdz5cXHJcXG4gICAgICAgIDx2LXJvdyB2LWlmPVxcXCJ2YWxpZGF0aW9uc0lucHV0Lm1heFZhbHVlICYmICF2YWxpZGF0aW9uLm1heFZhbHVlXFxcIj5cXHJcXG4gICAgICAgICAgPHAgY2xhc3M9XFxcIm10LTFcXFwiPlxcclxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJtYXRlcmlhbC1pY29uc1xcXCI+ZXJyb3Jfb3V0bGluZTwvaT4ge3sgbWF4IH19IGVsIHZhbG9yXFxyXFxuICAgICAgICAgICAgbcOheGltby5cXHJcXG4gICAgICAgICAgPC9wPlxcclxcbiAgICAgICAgPC92LXJvdz5cXHJcXG4gICAgICAgIDx2LXJvdyB2LWlmPVxcXCJ2YWxpZGF0aW9uc0lucHV0LmZvcm1hdCAmJiAhdmFsaWRhdGlvbi5pc1ZhbGlkTnVtYmVyXFxcIj5cXHJcXG4gICAgICAgICAgPHAgY2xhc3M9XFxcIm10LTFcXFwiPlxcclxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJtYXRlcmlhbC1pY29uc1xcXCI+ZXJyb3Jfb3V0bGluZTwvaT4gRm9ybWF0byBpbnbDoWxpZG9cXHJcXG4gICAgICAgICAgPC9wPlxcclxcbiAgICAgICAgPC92LXJvdz5cXHJcXG4gICAgICAgIDx2LXJvdyB2LWlmPVxcXCJ2YWxpZGF0aW9uc0lucHV0LmlzVmFsaWREdWkgJiYgIXZhbGlkYXRpb24uaXNWYWxpZER1aVxcXCI+XFxyXFxuICAgICAgICAgIDxwIGNsYXNzPVxcXCJtdC0xXFxcIj5cXHJcXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwibWF0ZXJpYWwtaWNvbnNcXFwiPmVycm9yX291dGxpbmU8L2k+IERVSSBpbnbDoWxpZG9cXHJcXG4gICAgICAgICAgPC9wPlxcclxcbiAgICAgICAgPC92LXJvdz5cXHJcXG4gICAgICAgIDx2LXJvdyB2LWlmPVxcXCJ2YWxpZGF0aW9uc0lucHV0LmlzVmFsaWROaXQgJiYgIXZhbGlkYXRpb24uaXNWYWxpZE5pdFxcXCI+XFxyXFxuICAgICAgICAgIDxwIGNsYXNzPVxcXCJtdC0xXFxcIj5cXHJcXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwibWF0ZXJpYWwtaWNvbnNcXFwiPmVycm9yX291dGxpbmU8L2k+IE5JVCBpbnbDoWxpZG9cXHJcXG4gICAgICAgICAgPC9wPlxcclxcbiAgICAgICAgPC92LXJvdz5cXHJcXG4gICAgICAgIDx2LXJvdyB2LWlmPVxcXCJ2YWxpZGF0aW9uc0lucHV0LmlzVmFsaWRJc3NzICYmICF2YWxpZGF0aW9uLmlzVmFsaWRJc3NzXFxcIj5cXHJcXG4gICAgICAgICAgPHAgY2xhc3M9XFxcIm10LTFcXFwiPlxcclxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJtYXRlcmlhbC1pY29uc1xcXCI+ZXJyb3Jfb3V0bGluZTwvaT4gSVNTUyBpbnbDoWxpZG9cXHJcXG4gICAgICAgICAgPC9wPlxcclxcbiAgICAgICAgPC92LXJvdz5cXHJcXG4gICAgICAgIDx2LXJvdyB2LWlmPVxcXCJ2YWxpZGF0aW9uc0lucHV0LmlzVmFsaWRBZnAgJiYgIXZhbGlkYXRpb24uaXNWYWxpZEFmcFxcXCI+XFxyXFxuICAgICAgICAgIDxwIGNsYXNzPVxcXCJtdC0xXFxcIj5cXHJcXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwibWF0ZXJpYWwtaWNvbnNcXFwiPmVycm9yX291dGxpbmU8L2k+IEFGUCBpbnbDoWxpZG9cXHJcXG4gICAgICAgICAgPC9wPlxcclxcbiAgICAgICAgPC92LXJvdz5cXHJcXG4gICAgICAgIDx2LXJvd1xcclxcbiAgICAgICAgICB2LWlmPVxcXCJcXHJcXG4gICAgICAgICAgICB2YWxpZGF0aW9uc0lucHV0LmlzVmFsaWRDb25hbXlwZUlkICYmICF2YWxpZGF0aW9uLmlzVmFsaWRDb25hbXlwZUlkXFxyXFxuICAgICAgICAgIFxcXCJcXHJcXG4gICAgICAgID5cXHJcXG4gICAgICAgICAgPHAgY2xhc3M9XFxcIm10LTFcXFwiPlxcclxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJtYXRlcmlhbC1pY29uc1xcXCI+ZXJyb3Jfb3V0bGluZTwvaT4gSUQgZGUgQ29uYW15cGUgaW52w6FsaWRvXFxyXFxuICAgICAgICAgIDwvcD5cXHJcXG4gICAgICAgIDwvdi1yb3c+XFxyXFxuICAgICAgICA8di1yb3cgdi1pZj1cXFwidmFsaWRhdGlvbnNJbnB1dC5pc1ZhbGlkTnJjICYmICF2YWxpZGF0aW9uLmlzVmFsaWROcmNcXFwiPlxcclxcbiAgICAgICAgICA8cCBjbGFzcz1cXFwibXQtMVxcXCI+XFxyXFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcIm1hdGVyaWFsLWljb25zXFxcIj5lcnJvcl9vdXRsaW5lPC9pPiBOUkMgaW52w6FsaWRvXFxyXFxuICAgICAgICAgIDwvcD5cXHJcXG4gICAgICAgIDwvdi1yb3c+XFxyXFxuICAgICAgICA8di1yb3cgdi1pZj1cXFwidmFsaWRhdGlvbnNJbnB1dC5lbWFpbCAmJiAhdmFsaWRhdGlvbi5lbWFpbFxcXCI+XFxyXFxuICAgICAgICAgIDxwIGNsYXNzPVxcXCJtdC0xXFxcIj5cXHJcXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwibWF0ZXJpYWwtaWNvbnNcXFwiPmVycm9yX291dGxpbmU8L2k+IEZvcm1hdG8gZGUgY29ycmVvXFxyXFxuICAgICAgICAgICAgZWxlY3Ryw7NuaWNvIGludsOhbGlkby5cXHJcXG4gICAgICAgICAgPC9wPlxcclxcbiAgICAgICAgPC92LXJvdz5cXHJcXG4gICAgICAgIDx2LXJvd1xcclxcbiAgICAgICAgICB2LWlmPVxcXCJ2YWxpZGF0aW9uc0lucHV0LmlzVmFsaWRQYXNzd29yZCAmJiAhdmFsaWRhdGlvbi5pc1ZhbGlkUGFzc3dvcmRcXFwiXFxyXFxuICAgICAgICA+XFxyXFxuICAgICAgICAgIDxwIGNsYXNzPVxcXCJtdC0xXFxcIj5cXHJcXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwibWF0ZXJpYWwtaWNvbnNcXFwiPmVycm9yX291dGxpbmU8L2k+XFxyXFxuICAgICAgICAgICAgOCBjYXJhY3RlcmVzIG3DrW5pbW8uXFxyXFxuICAgICAgICAgIDwvcD5cXHJcXG4gICAgICAgICAgPHAgY2xhc3M9XFxcIm10LTFcXFwiPlxcclxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJtYXRlcmlhbC1pY29uc1xcXCI+ZXJyb3Jfb3V0bGluZTwvaT5cXHJcXG4gICAgICAgICAgICAxIG1hecO6c2N1bGEgbcOtbmltby5cXHJcXG4gICAgICAgICAgPC9wPlxcclxcbiAgICAgICAgICA8cCBjbGFzcz1cXFwibXQtMVxcXCI+XFxyXFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcIm1hdGVyaWFsLWljb25zXFxcIj5lcnJvcl9vdXRsaW5lPC9pPlxcclxcbiAgICAgICAgICAgIDEgbWluw7pzY3VsYSBtw61uaW1vLlxcclxcbiAgICAgICAgICA8L3A+XFxyXFxuICAgICAgICAgIDxwIGNsYXNzPVxcXCJtdC0xXFxcIj5cXHJcXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwibWF0ZXJpYWwtaWNvbnNcXFwiPmVycm9yX291dGxpbmU8L2k+XFxyXFxuICAgICAgICAgICAgMTMgY2FyYWN0ZXJlcyBtw6F4aW1vLlxcclxcbiAgICAgICAgICA8L3A+XFxyXFxuICAgICAgICA8L3Ytcm93PlxcclxcbiAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgIDwvdi1jb250YWluZXI+XFxyXFxuICA8L2Rpdj5cXHJcXG48L3RlbXBsYXRlPlxcclxcblxcclxcbjxzY3JpcHQ+XFxyXFxuZXhwb3J0IGRlZmF1bHQge1xcclxcbiAgaW5oZXJpdEF0dHJzOiBmYWxzZSxcXHJcXG4gIGRhdGEoKSB7XFxyXFxuICAgIHJldHVybiB7XFxyXFxuICAgICAgZGF0YTogXFxcIlxcXCIsXFxyXFxuICAgICAgY291bnRlcjogMCxcXHJcXG4gICAgICBpY29uOiBcXFwidmlzaWJpbGl0eVxcXCIsXFxyXFxuICAgIH07XFxyXFxuICB9LFxcclxcbiAgcHJvcHM6IHtcXHJcXG4gICAgbGFiZWw6IHtcXHJcXG4gICAgICB0eXBlOiBTdHJpbmcsXFxyXFxuICAgICAgZGVmYXVsdDogXFxcIlxcXCIsXFxyXFxuICAgIH0sXFxyXFxuICAgIHZhbGlkYXRpb246IHtcXHJcXG4gICAgICB0eXBlOiBPYmplY3QsXFxyXFxuICAgICAgZGVmYXVsdDogXFxcIlxcXCIsXFxyXFxuICAgIH0sXFxyXFxuICAgIHZhbGlkYXRpb25UZXh0VHlwZToge1xcclxcbiAgICAgIHR5cGU6IFN0cmluZyxcXHJcXG4gICAgICBkZWZhdWx0OiBcXFwiXFxcIixcXHJcXG4gICAgfSxcXHJcXG4gICAgcmVxdWlyZWQ6IHtcXHJcXG4gICAgICB0eXBlOiBCb29sZWFuLFxcclxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxcclxcbiAgICB9LFxcclxcbiAgICB0eXBlOiB7XFxyXFxuICAgICAgdHlwZTogU3RyaW5nLFxcclxcbiAgICAgIGRlZmF1bHQ6IFxcXCJ0ZXh0XFxcIixcXHJcXG4gICAgfSxcXHJcXG4gICAgbWFzazoge1xcclxcbiAgICAgIHR5cGU6IFN0cmluZyxcXHJcXG4gICAgICBkZWZhdWx0OiBcXFwiXFxcIixcXHJcXG4gICAgfSxcXHJcXG4gICAgdmFsaWRhdGlvbnNJbnB1dDoge1xcclxcbiAgICAgIHR5cGU6IE9iamVjdCxcXHJcXG4gICAgICBkZWZhdWx0OiAoKSA9PiB7XFxyXFxuICAgICAgICByZXR1cm4ge1xcclxcbiAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcXHJcXG4gICAgICAgICAgZm9ybWF0OiBmYWxzZSxcXHJcXG4gICAgICAgICAgbWluTGVuZ3RoOiBmYWxzZSxcXHJcXG4gICAgICAgICAgbWF4TGVuZ3RoOiBmYWxzZSxcXHJcXG4gICAgICAgICAgbWluVmFsdWU6IGZhbHNlLFxcclxcbiAgICAgICAgICBtYXhWYWx1ZTogZmFsc2UsXFxyXFxuICAgICAgICAgIGlzVmFsaWREdWk6IGZhbHNlLFxcclxcbiAgICAgICAgICBpc1ZhbGlkTml0OiBmYWxzZSxcXHJcXG4gICAgICAgICAgaXNWYWxpZElzc3M6IGZhbHNlLFxcclxcbiAgICAgICAgICBpc1ZhbGlkQWZwOiBmYWxzZSxcXHJcXG4gICAgICAgICAgaXNWYWxpZENvbmFteXBlSWQ6IGZhbHNlLFxcclxcbiAgICAgICAgICBpc1ZhbGlkTnJjOiBmYWxzZSxcXHJcXG4gICAgICAgICAgZW1haWw6IGZhbHNlLFxcclxcbiAgICAgICAgICBzaG93UGFzc3dvcmQ6IGZhbHNlLFxcclxcbiAgICAgICAgfTtcXHJcXG4gICAgICB9LFxcclxcbiAgICB9LFxcclxcbiAgICBtaW46IHtcXHJcXG4gICAgICB0eXBlOiBOdW1iZXIsXFxyXFxuICAgICAgZGVmYXVsdDogMCxcXHJcXG4gICAgfSxcXHJcXG4gICAgbWF4OiB7XFxyXFxuICAgICAgdHlwZTogTnVtYmVyLFxcclxcbiAgICAgIGRlZmF1bHQ6IDE1MCxcXHJcXG4gICAgfSxcXHJcXG4gIH0sXFxyXFxuICB3YXRjaDoge1xcclxcbiAgICB0eXBlKHZhbCkge1xcclxcbiAgICAgIHRoaXMuaWNvbiA9IHRoaXMudHlwZSA9PSBcXFwicGFzc3dvcmRcXFwiID8gXFxcInZpc2liaWxpdHlcXFwiIDogXFxcInZpc2liaWxpdHlfb2ZmXFxcIjtcXHJcXG4gICAgfSxcXHJcXG4gIH0sXFxyXFxuICBtb3VudGVkKCkge1xcclxcbiAgICB0aGlzLmRhdGEgPSB0aGlzLiRhdHRycy52YWx1ZTtcXHJcXG4gICAgdGhpcy52YWxpZGF0aW9uLiRyZXNldCgpO1xcclxcbiAgfSxcXHJcXG4gIHVwZGF0ZWQoKSB7XFxyXFxuICAgIHRoaXMuZGF0YSA9IHRoaXMudmFsaWRhdGlvbi4kbW9kZWw7XFxyXFxuICB9LFxcclxcbiAgbWV0aG9kczoge1xcclxcbiAgICB1cGRhdGVWYWx1ZSgpIHtcXHJcXG4gICAgICB0aGlzLnZhbGlkYXRpb24uJG1vZGVsID0gdGhpcy5kYXRhO1xcclxcbiAgICAgIHRoaXMuJGVtaXQoXFxcImlucHV0XFxcIiwgdGhpcy5kYXRhKTtcXHJcXG4gICAgfSxcXHJcXG5cXHJcXG4gICAgdmFsaWRhdGVUZXh0KCkge1xcclxcbiAgICAgIGlmICh0aGlzLmRhdGEpIHtcXHJcXG4gICAgICAgIHN3aXRjaCAodGhpcy52YWxpZGF0aW9uVGV4dFR5cGUpIHtcXHJcXG4gICAgICAgICAgY2FzZSBcXFwiZGVmYXVsdFxcXCI6XFxyXFxuICAgICAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5kYXRhLnJlcGxhY2UoXFxyXFxuICAgICAgICAgICAgICAvW15BLVrDoMOow6zDssO5w4DDiMOMw5LDmcOhw6nDrcOzw7rDvcOBw4nDjcOTw5rDsVxcXFwnICddL2dpLFxcclxcbiAgICAgICAgICAgICAgXFxcIlxcXCJcXHJcXG4gICAgICAgICAgICApO1xcclxcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IHRoaXMuZGF0YS5yZXBsYWNlKC9eKFthLXpBLVowLTldKVxcXFwxezR9L2dpLCBcXFwiXFxcIik7XFxyXFxuICAgICAgICAgICAgYnJlYWs7XFxyXFxuICAgICAgICAgIGNhc2UgXFxcIm9ubHktbGV0dGVyc1xcXCI6XFxyXFxuICAgICAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5kYXRhLnJlcGxhY2UoXFxyXFxuICAgICAgICAgICAgICAvW15BLVrDoMOow6zDssO5w4DDiMOMw5LDmcOhw6nDrcOzw7rDvcOBw4nDjcOTw5rDsVxcXFwnICddL2dpLFxcclxcbiAgICAgICAgICAgICAgXFxcIlxcXCJcXHJcXG4gICAgICAgICAgICApO1xcclxcbiAgICAgICAgICAgIGJyZWFrO1xcclxcbiAgICAgICAgICBjYXNlIFxcXCJvbmx5LW51bWJlcnNcXFwiOlxcclxcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IHRoaXMuZGF0YS5yZXBsYWNlKC9bXjAtOVxcXFwtXS9nLCBcXFwiXFxcIik7XFxyXFxuICAgICAgICAgICAgYnJlYWs7XFxyXFxuICAgICAgICAgIGNhc2UgXFxcIm5vbmVcXFwiOlxcclxcbiAgICAgICAgICAgIGJyZWFrO1xcclxcbiAgICAgICAgICBjYXNlIFxcXCJvbmx5LXJlcGVhdHNcXFwiOlxcclxcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IHRoaXMuZGF0YS5yZXBsYWNlKC9eKFthLXpBLVowLTldKVxcXFwxezR9L2csIFxcXCJcXFwiKTtcXHJcXG4gICAgICAgICAgICBicmVhaztcXHJcXG4gICAgICAgICAgZGVmYXVsdDpcXHJcXG4gICAgICAgICAgICBicmVhaztcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgdGhpcy52YWxpZGF0aW9uLiRtb2RlbCA9IHRoaXMuZGF0YTtcXHJcXG4gICAgICB0aGlzLiRlbWl0KFxcXCJrZXl1cFxcXCIsIHRoaXMuZGF0YSk7XFxyXFxuICAgIH0sXFxyXFxuXFxyXFxuICAgIHNob3dQYXNzd29yZCgpIHtcXHJcXG4gICAgICBjb25zdCBzaG93ID0gdGhpcy50eXBlID09IFxcXCJwYXNzd29yZFxcXCIgPyBcXFwidGV4dFxcXCIgOiBcXFwicGFzc3dvcmRcXFwiO1xcclxcblxcclxcbiAgICAgIHRoaXMuJGVtaXQoXFxcInVwZGF0ZS1wYXNzd29yZFxcXCIsIHsgc2hvdyB9KTtcXHJcXG4gICAgfSxcXHJcXG4gIH0sXFxyXFxufTtcXHJcXG48L3NjcmlwdD5cXHJcXG5cXHJcXG48c3R5bGU+XFxyXFxuLnYtdGV4dC1maWVsZC0tb3V0bGluZWQge1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjMTk3NmQyICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi52LXRleHQtZmllbGQtLW91dGxpbmVkLnYtaW5wdXQtLWlzLWZvY3VzZWQgZmllbGRzZXQsXFxyXFxuLnYtdGV4dC1maWVsZC0tb3V0bGluZWQudi1pbnB1dC0taGFzLXN0YXRlIGZpZWxkc2V0IHtcXHJcXG4gIGJvcmRlci1jb2xvcjogIzJkNTJhOCAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4udi10ZXh0LWZpZWxkX19kZXRhaWxzIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5tYXRlcmlhbC1pY29ucyB7XFxyXFxuICB3aWR0aDogMzBweDtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxucCB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjBweDsgLyogc2FtZSBhcyBoZWlnaHQhICovXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcclxcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG59XFxyXFxuPC9zdHlsZT5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sYXJhdmVsLW1peC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQmFzZUlucHV0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9CYXNlSW5wdXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdlMmJjZjYxJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0Jhc2VJbnB1dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0Jhc2VJbnB1dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vQmFzZUlucHV0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxXaWxsaWFtXFxcXERvY3VtZW50c1xcXFxGcmVlXFxcXFByb3llY3Rvc1xcXFxwaW50ZXJlc3RcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnN2UyYmNmNjEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnN2UyYmNmNjEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnN2UyYmNmNjEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0Jhc2VJbnB1dC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2UyYmNmNjEmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignN2UyYmNmNjEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL2Jhc2UtY29tcG9uZW50cy9CYXNlSW5wdXQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Jhc2VJbnB1dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9CYXNlSW5wdXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGFyYXZlbC1taXgvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Jhc2VJbnB1dC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9CYXNlSW5wdXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdlMmJjZjYxJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LXRleHQtZmllbGRcIixcbiAgICAgICAge1xuICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogXCJtYXNrXCIsXG4gICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tYXNrXCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0ubWFzayxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJtYXNrXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAga2V5OiBfdm0uY291bnRlcixcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYi0xXCIsXG4gICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgIFwiaXMtaW52YWxpZFwiOiBfdm0udmFsaWRhdGlvbi4kZXJyb3IsXG4gICAgICAgICAgICBcImlzLXZhbGlkXCI6ICFfdm0udmFsaWRhdGlvbi4kaW52YWxpZCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBkZW5zZTogXCJcIixcbiAgICAgICAgICAgIGxhYmVsOiBfdm0ubGFiZWwsXG4gICAgICAgICAgICBvdXRsaW5lZDogXCJcIixcbiAgICAgICAgICAgIG1pbjogX3ZtLm1pbixcbiAgICAgICAgICAgIG1heDogX3ZtLm1heCxcbiAgICAgICAgICAgIHR5cGU6IF92bS50eXBlLFxuICAgICAgICAgICAgYXV0b2NvbXBsZXRlOiBcIm5ldy1wYXNzd29yZFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGlucHV0OiBfdm0udXBkYXRlVmFsdWUsXG4gICAgICAgICAgICBrZXl1cDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLnZhbGlkYXRlVGV4dCgpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uZGF0YSxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgIF92bS5kYXRhID0gdHlwZW9mICQkdiA9PT0gXCJzdHJpbmdcIiA/ICQkdi50cmltKCkgOiAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcImRhdGFcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLnZhbGlkYXRpb25zSW5wdXQuc2hvd1Bhc3N3b3JkXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwidi1pY29uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc2xvdDogXCJhcHBlbmRcIiwgY29sb3I6IFwiZ3JlZW5cIiB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNob3dQYXNzd29yZCgpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgc2xvdDogXCJhcHBlbmRcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICBcIiArIF92bS5fcyhfdm0uaWNvbikgKyBcIlxcbiAgICBcIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLnZhbGlkYXRpb24uJGRpcnR5XG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcInYtY29udGFpbmVyXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1iLTAgcHQtMCBteS1hdXRvIG9yYW5nZS10ZXh0XCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF92bS52YWxpZGF0aW9uLiRlcnJvciAmJiBfdm0udmFsaWRhdGlvbnNJbnB1dC5yZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgPyBfYyhcInYtcm93XCIsIHsgc3RhdGljQ2xhc3M6IFwicHQtMFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJtYi0wIG10LTFcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJtYXRlcmlhbC1pY29uc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiZXJyb3Jfb3V0bGluZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIENhbXBvIHJlcXVlcmlkby5cXG4gICAgICAgIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0udmFsaWRhdGlvbnNJbnB1dC5taW5MZW5ndGggJiYgIV92bS52YWxpZGF0aW9uLm1pbkxlbmd0aFxuICAgICAgICAgICAgICAgICAgPyBfYyhcInYtcm93XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJwbC0wIG10LTFcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJtYXRlcmlhbC1pY29uc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiZXJyb3Jfb3V0bGluZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5taW4pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBjYXLDoWN0ZXJcXG4gICAgICAgICAgbcOtbmltby5cXG4gICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS52YWxpZGF0aW9uc0lucHV0Lm1heExlbmd0aCAmJiAhX3ZtLnZhbGlkYXRpb24ubWF4TGVuZ3RoXG4gICAgICAgICAgICAgICAgICA/IF9jKFwidi1yb3dcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInBsLTAgcHItMCBtdC0xXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwibWF0ZXJpYWwtaWNvbnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcImVycm9yX291dGxpbmVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ubWF4KSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgY2FyYWN0ZXJlc1xcbiAgICAgICAgICBtw6F4aW1vLlxcbiAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLnZhbGlkYXRpb25zSW5wdXQubWluVmFsdWUgJiYgIV92bS52YWxpZGF0aW9uLm1pblZhbHVlXG4gICAgICAgICAgICAgICAgICA/IF9jKFwidi1yb3dcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcIm10LTFcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJtYXRlcmlhbC1pY29uc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiZXJyb3Jfb3V0bGluZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5taW4pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBlcyBlbCB2YWxvclxcbiAgICAgICAgICBtw61uaW1vLlxcbiAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLnZhbGlkYXRpb25zSW5wdXQubWF4VmFsdWUgJiYgIV92bS52YWxpZGF0aW9uLm1heFZhbHVlXG4gICAgICAgICAgICAgICAgICA/IF9jKFwidi1yb3dcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcIm10LTFcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJtYXRlcmlhbC1pY29uc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiZXJyb3Jfb3V0bGluZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5tYXgpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBlbCB2YWxvclxcbiAgICAgICAgICBtw6F4aW1vLlxcbiAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLnZhbGlkYXRpb25zSW5wdXQuZm9ybWF0ICYmICFfdm0udmFsaWRhdGlvbi5pc1ZhbGlkTnVtYmVyXG4gICAgICAgICAgICAgICAgICA/IF9jKFwidi1yb3dcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcIm10LTFcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJtYXRlcmlhbC1pY29uc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiZXJyb3Jfb3V0bGluZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIEZvcm1hdG8gaW52w6FsaWRvXFxuICAgICAgICBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLnZhbGlkYXRpb25zSW5wdXQuaXNWYWxpZER1aSAmJiAhX3ZtLnZhbGlkYXRpb24uaXNWYWxpZER1aVxuICAgICAgICAgICAgICAgICAgPyBfYyhcInYtcm93XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJtdC0xXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwibWF0ZXJpYWwtaWNvbnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcImVycm9yX291dGxpbmVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBEVUkgaW52w6FsaWRvXFxuICAgICAgICBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLnZhbGlkYXRpb25zSW5wdXQuaXNWYWxpZE5pdCAmJiAhX3ZtLnZhbGlkYXRpb24uaXNWYWxpZE5pdFxuICAgICAgICAgICAgICAgICAgPyBfYyhcInYtcm93XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJtdC0xXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwibWF0ZXJpYWwtaWNvbnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcImVycm9yX291dGxpbmVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBOSVQgaW52w6FsaWRvXFxuICAgICAgICBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLnZhbGlkYXRpb25zSW5wdXQuaXNWYWxpZElzc3MgJiYgIV92bS52YWxpZGF0aW9uLmlzVmFsaWRJc3NzXG4gICAgICAgICAgICAgICAgICA/IF9jKFwidi1yb3dcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcIm10LTFcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJtYXRlcmlhbC1pY29uc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiZXJyb3Jfb3V0bGluZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIElTU1MgaW52w6FsaWRvXFxuICAgICAgICBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLnZhbGlkYXRpb25zSW5wdXQuaXNWYWxpZEFmcCAmJiAhX3ZtLnZhbGlkYXRpb24uaXNWYWxpZEFmcFxuICAgICAgICAgICAgICAgICAgPyBfYyhcInYtcm93XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJtdC0xXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwibWF0ZXJpYWwtaWNvbnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcImVycm9yX291dGxpbmVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBBRlAgaW52w6FsaWRvXFxuICAgICAgICBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLnZhbGlkYXRpb25zSW5wdXQuaXNWYWxpZENvbmFteXBlSWQgJiZcbiAgICAgICAgICAgICAgICAhX3ZtLnZhbGlkYXRpb24uaXNWYWxpZENvbmFteXBlSWRcbiAgICAgICAgICAgICAgICAgID8gX2MoXCJ2LXJvd1wiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwibXQtMVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1hdGVyaWFsLWljb25zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJlcnJvcl9vdXRsaW5lXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgSUQgZGUgQ29uYW15cGUgaW52w6FsaWRvXFxuICAgICAgICBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLnZhbGlkYXRpb25zSW5wdXQuaXNWYWxpZE5yYyAmJiAhX3ZtLnZhbGlkYXRpb24uaXNWYWxpZE5yY1xuICAgICAgICAgICAgICAgICAgPyBfYyhcInYtcm93XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJtdC0xXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwibWF0ZXJpYWwtaWNvbnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcImVycm9yX291dGxpbmVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBOUkMgaW52w6FsaWRvXFxuICAgICAgICBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLnZhbGlkYXRpb25zSW5wdXQuZW1haWwgJiYgIV92bS52YWxpZGF0aW9uLmVtYWlsXG4gICAgICAgICAgICAgICAgICA/IF9jKFwidi1yb3dcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcIm10LTFcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJtYXRlcmlhbC1pY29uc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiZXJyb3Jfb3V0bGluZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBGb3JtYXRvIGRlIGNvcnJlb1xcbiAgICAgICAgICBlbGVjdHLDs25pY28gaW52w6FsaWRvLlxcbiAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLnZhbGlkYXRpb25zSW5wdXQuaXNWYWxpZFBhc3N3b3JkICYmXG4gICAgICAgICAgICAgICAgIV92bS52YWxpZGF0aW9uLmlzVmFsaWRQYXNzd29yZFxuICAgICAgICAgICAgICAgICAgPyBfYyhcInYtcm93XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJtdC0xXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwibWF0ZXJpYWwtaWNvbnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcImVycm9yX291dGxpbmVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICA4IGNhcmFjdGVyZXMgbcOtbmltby5cXG4gICAgICAgIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcIm10LTFcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJtYXRlcmlhbC1pY29uc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiZXJyb3Jfb3V0bGluZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgIDEgbWF5w7pzY3VsYSBtw61uaW1vLlxcbiAgICAgICAgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwibXQtMVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1hdGVyaWFsLWljb25zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJlcnJvcl9vdXRsaW5lXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgMSBtaW7DunNjdWxhIG3DrW5pbW8uXFxuICAgICAgICBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJtdC0xXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwibWF0ZXJpYWwtaWNvbnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcImVycm9yX291dGxpbmVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAxMyBjYXJhY3RlcmVzIG3DoXhpbW8uXFxuICAgICAgICBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUgKGV4Y2VwdCBmb3IgbW9kdWxlcykuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHNjcmlwdEV4cG9ydHMsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciwgLyogc2VydmVyIG9ubHkgKi9cbiAgc2hhZG93TW9kZSAvKiB2dWUtY2xpIG9ubHkgKi9cbikge1xuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKHJlbmRlcikge1xuICAgIG9wdGlvbnMucmVuZGVyID0gcmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9ICdkYXRhLXYtJyArIHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgKG9wdGlvbnMuZnVuY3Rpb25hbCA/IHRoaXMucGFyZW50IDogdGhpcykuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdFxuICAgICAgICApXG4gICAgICB9XG4gICAgICA6IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9uYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIl0sIm5hbWVzIjpbImluaGVyaXRBdHRycyIsImRhdGEiLCJjb3VudGVyIiwiaWNvbiIsInByb3BzIiwibGFiZWwiLCJ0eXBlIiwidmFsaWRhdGlvbiIsInZhbGlkYXRpb25UZXh0VHlwZSIsInJlcXVpcmVkIiwibWFzayIsInZhbGlkYXRpb25zSW5wdXQiLCJmb3JtYXQiLCJtaW5MZW5ndGgiLCJtYXhMZW5ndGgiLCJtaW5WYWx1ZSIsIm1heFZhbHVlIiwiaXNWYWxpZER1aSIsImlzVmFsaWROaXQiLCJpc1ZhbGlkSXNzcyIsImlzVmFsaWRBZnAiLCJpc1ZhbGlkQ29uYW15cGVJZCIsImlzVmFsaWROcmMiLCJlbWFpbCIsInNob3dQYXNzd29yZCIsIm1pbiIsIm1heCIsIndhdGNoIiwidmFsIiwibW91bnRlZCIsInVwZGF0ZWQiLCJtZXRob2RzIiwidXBkYXRlVmFsdWUiLCJ2YWxpZGF0ZVRleHQiLCJzaG93Il0sInNvdXJjZVJvb3QiOiIifQ==