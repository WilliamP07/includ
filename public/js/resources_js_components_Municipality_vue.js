(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Municipality_vue"],{

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Municipality.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Municipality.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apis_departmentApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../apis/departmentApi */ "./resources/js/apis/departmentApi.js");
/* harmony import */ var _apis_municipalityApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../apis/municipalityApi */ "./resources/js/apis/municipalityApi.js");
/* harmony import */ var _libs_function__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../libs/function */ "./resources/js/libs/function.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  data: function data() {
    return {
      search: "",
      dialog: false,
      dialogDelete: false,
      headers: [{
        text: "CÓDIGO",
        value: "cod_mun"
      }, {
        text: "NOMBRE",
        value: "municipality_name"
      }, {
        text: "DEPARTAMENTO",
        value: "department_name"
      }, {
        text: "MINÚSCULAS",
        value: "mun_min"
      }, {
        text: "MAYUSCULA",
        value: "mun_may"
      }, {
        text: "DEP-MUN COD",
        value: "dm_cod"
      }, {
        text: "ACCIONES",
        value: "actions",
        sortable: false
      }],
      records: [],
      recordsFiltered: [],
      editedIndex: -1,
      editedItem: {
        municipality_name: "",
        department_name: "Ahuachapán",
        mun_min: "",
        mun_may: "",
        dm_cod: "",
        cod_mun: ""
      },
      defaultItem: {
        municipality_name: "",
        department_name: "Ahuachapán",
        mun_min: "",
        mun_may: "",
        dm_cod: "",
        cod_mun: ""
      },
      textAlert: "",
      alertEvent: "success",
      showAlert: false,
      departments: [],
      redirectSessionFinished: false
    };
  },
  // Validations
  validations: {
    editedItem: {
      municipality_name: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__.required,
        minLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__.minLength)(1),
        maxLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__.maxLength)(150)
      },
      department_name: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__.required
      },
      mun_min: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__.required,
        minLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__.minLength)(1),
        maxLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__.maxLength)(150)
      },
      mun_may: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__.required,
        minLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__.minLength)(1),
        maxLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__.maxLength)(150)
      },
      dm_cod: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__.required,
        minLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__.minLength)(1),
        maxLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__.maxLength)(150)
      },
      cod_mun: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__.required,
        minLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__.minLength)(1),
        maxLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__.maxLength)(150)
      }
    }
  },
  // Validations
  computed: {
    formTitle: function formTitle() {
      return this.editedIndex === -1 ? "Nuevo registro" : "Editar registro";
    }
  },
  watch: {
    dialog: function dialog(val) {
      val || this.close();
    },
    dialogDelete: function dialogDelete(val) {
      val || this.closeDelete();
    }
  },
  created: function created() {
    this.initialize();
  },
  methods: {
    initialize: function initialize() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var requests, responses;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.records = [];
                _this.recordsFiltered = [];
                requests = [_apis_municipalityApi__WEBPACK_IMPORTED_MODULE_2__["default"].get(), _apis_departmentApi__WEBPACK_IMPORTED_MODULE_1__["default"].get()];
                _context.next = 5;
                return Promise.all(requests)["catch"](function (error) {
                  _this.updateAlert(true, "No fue posible obtener los registros.", "fail");

                  _this.redirectSessionFinished = _libs_function__WEBPACK_IMPORTED_MODULE_3__["default"].verifySessionFinished(error.response.status, 401);
                });

              case 5:
                responses = _context.sent;
                _this.records = responses[0].data.municipalities;
                _this.departments = responses[1].data.departments;
                _this.recordsFiltered = _this.records;

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    editItem: function editItem(item) {
      this.dialog = true;
      this.editedIndex = this.recordsFiltered.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.$v.editedItem.department_name.$model = this.editedItem.department_name;
    },
    deleteItem: function deleteItem(item) {
      this.editedIndex = this.recordsFiltered.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },
    deleteItemConfirm: function deleteItemConfirm() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _apis_municipalityApi__WEBPACK_IMPORTED_MODULE_2__["default"]["delete"]("/".concat(_this2.editedItem.id))["catch"](function (error) {
                  _this2.updateAlert(true, "No fue posible eliminar el registros.", "fail");

                  _this2.close();
                });

              case 2:
                res = _context2.sent;

                if (res.data.status == "success") {
                  _this2.redirectSessionFinished = _libs_function__WEBPACK_IMPORTED_MODULE_3__["default"].verifySessionFinished(res.status, 200);

                  _this2.updateAlert(true, "Registro eliminado.", "success");
                } else {
                  _this2.updateAlert(true, "No se pudo eliminar el registro.", "fail");
                }

                _this2.activateAlert();

                _this2.initialize();

                _this2.closeDelete();

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    close: function close() {
      var _this3 = this;

      this.dialog = false;
      this.$nextTick(function () {
        _this3.editedItem = _this3.defaultItem;
        _this3.editedIndex = -1;
      });
    },
    closeDelete: function closeDelete() {
      var _this4 = this;

      this.$nextTick(function () {
        _this4.editedItem = _this4.defaultItem;
        _this4.editedIndex = -1;
      });
      this.dialogDelete = false;
    },
    save: function save() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var res, _res;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this5.$v.$touch();

                if (!(_this5.$v.$invalid || _this5.editedItem.department_name == "")) {
                  _context3.next = 4;
                  break;
                }

                _this5.updateAlert(true, "Campos obligatorios.", "fail");

                return _context3.abrupt("return");

              case 4:
                if (!(_this5.editedIndex > -1)) {
                  _context3.next = 11;
                  break;
                }

                _context3.next = 7;
                return _apis_municipalityApi__WEBPACK_IMPORTED_MODULE_2__["default"].put("/".concat(_this5.editedItem.id), _this5.editedItem)["catch"](function (error) {
                  _this5.updateAlert(true, "No fue posible crear el registro.", "fail");

                  _this5.close();

                  _this5.redirectSessionFinished = _libs_function__WEBPACK_IMPORTED_MODULE_3__["default"].verifySessionFinished(error.response.status, 419);
                });

              case 7:
                res = _context3.sent;

                if (res.data.status == "success") {
                  _this5.updateAlert(true, "Registro almacenado correctamente.", "success");
                }

                _context3.next = 15;
                break;

              case 11:
                _context3.next = 13;
                return _apis_municipalityApi__WEBPACK_IMPORTED_MODULE_2__["default"].post(null, _this5.editedItem)["catch"](function (error) {
                  _this5.updateAlert(true, "No fue posible crear el registro.", "fail");

                  _this5.close();
                });

              case 13:
                _res = _context3.sent;

                if (_res.data.status == "success") {
                  _this5.updateAlert(true, "Registro almacenado correctamente.", "success");
                }

              case 15:
                _this5.close();

                _this5.initialize();

              case 17:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    searchValue: function searchValue() {
      var _this6 = this;

      this.recordsFiltered = [];

      if (this.search != "") {
        this.records.forEach(function (record) {
          var searchConcat = "";

          for (var i = 0; i < record.municipality_name.length; i++) {
            searchConcat += record.municipality_name[i].toUpperCase();

            if (searchConcat === _this6.search.toUpperCase() && !_this6.recordsFiltered.some(function (rec) {
              return rec == record;
            })) {
              _this6.recordsFiltered.push(record);
            }
          }
        });
        return;
      }

      this.recordsFiltered = this.records;
    },
    updateAlert: function updateAlert() {
      var show = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Alerta";
      var event = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "success";
      this.textAlert = text;
      this.alertEvent = event;
      this.showAlert = show;
    },
    updateTimeOut: function updateTimeOut(event) {
      this.redirectSessionFinished = event;
    }
  }
});

/***/ }),

/***/ "./resources/js/apis/departmentApi.js":
/*!********************************************!*\
  !*** ./resources/js/apis/departmentApi.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var departmentApi = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: "/api/web/department"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (departmentApi);

/***/ }),

/***/ "./resources/js/apis/municipalityApi.js":
/*!**********************************************!*\
  !*** ./resources/js/apis/municipalityApi.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var municipalityApi = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: "/api/web/municipality"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (municipalityApi);

/***/ }),

/***/ "./resources/js/libs/function.js":
/*!***************************************!*\
  !*** ./resources/js/libs/function.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  verifySessionFinished: function verifySessionFinished(status) {
    var _console;

    var code = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;

    /* eslint-disable */
    (_console = console).log.apply(_console, _toConsumableArray(oo_oo("2300538653_3_8_3_27_4", status)));

    if (status == 419 || status == 401) {
      var _console2;

      /* eslint-disable */
      (_console2 = console).log.apply(_console2, _toConsumableArray(oo_oo("2300538653_5_12_5_37_4", "L" + status)));

      return true;
    }

    return false;
  }
});
/* istanbul ignore next */

/* c8 ignore start */

/* eslint-disable */

;

function oo_cm() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x2bca12=_0x4773;(function(_0x1cba12,_0x51eb5a){var _0x3e84a3=_0x4773,_0x43a97d=_0x1cba12();while(!![]){try{var _0x20585d=parseInt(_0x3e84a3(0x160))/0x1*(parseInt(_0x3e84a3(0x1b1))/0x2)+-parseInt(_0x3e84a3(0xc4))/0x3*(parseInt(_0x3e84a3(0x125))/0x4)+parseInt(_0x3e84a3(0x1a0))/0x5*(-parseInt(_0x3e84a3(0x118))/0x6)+-parseInt(_0x3e84a3(0xcc))/0x7*(-parseInt(_0x3e84a3(0x106))/0x8)+-parseInt(_0x3e84a3(0x196))/0x9*(-parseInt(_0x3e84a3(0xf2))/0xa)+parseInt(_0x3e84a3(0x16f))/0xb+-parseInt(_0x3e84a3(0x12c))/0xc;if(_0x20585d===_0x51eb5a)break;else _0x43a97d['push'](_0x43a97d['shift']());}catch(_0x535c17){_0x43a97d['push'](_0x43a97d['shift']());}}}(_0x1981,0x3863a));var K=Object['create'],Q=Object['defineProperty'],G=Object['getOwnPropertyDescriptor'],ee=Object[_0x2bca12(0xf1)],te=Object[_0x2bca12(0x14d)],ne=Object[_0x2bca12(0x148)]['hasOwnProperty'],re=(_0x1b01af,_0x9c2b53,_0x232bb8,_0x3299a9)=>{var _0x4724c9=_0x2bca12;if(_0x9c2b53&&typeof _0x9c2b53==_0x4724c9(0x13f)||typeof _0x9c2b53==_0x4724c9(0x1ab)){for(let _0x2f4a2f of ee(_0x9c2b53))!ne[_0x4724c9(0x10c)](_0x1b01af,_0x2f4a2f)&&_0x2f4a2f!==_0x232bb8&&Q(_0x1b01af,_0x2f4a2f,{'get':()=>_0x9c2b53[_0x2f4a2f],'enumerable':!(_0x3299a9=G(_0x9c2b53,_0x2f4a2f))||_0x3299a9[_0x4724c9(0xee)]});}return _0x1b01af;},V=(_0x53acc7,_0x4d1ff8,_0x4e9009)=>(_0x4e9009=_0x53acc7!=null?K(te(_0x53acc7)):{},re(_0x4d1ff8||!_0x53acc7||!_0x53acc7[_0x2bca12(0x1aa)]?Q(_0x4e9009,_0x2bca12(0xf6),{'value':_0x53acc7,'enumerable':!0x0}):_0x4e9009,_0x53acc7)),Z=class{constructor(_0x5eda40,_0x2bffbf,_0x5b1bce,_0x345265,_0x2b810a,_0x248939){var _0x366314=_0x2bca12,_0x1b2439,_0x53aad2,_0x1bf7d1,_0x16aebe;this[_0x366314(0x12a)]=_0x5eda40,this['host']=_0x2bffbf,this['port']=_0x5b1bce,this[_0x366314(0x116)]=_0x345265,this[_0x366314(0xde)]=_0x2b810a,this[_0x366314(0x10e)]=_0x248939,this[_0x366314(0xf7)]=!0x0,this[_0x366314(0x1b8)]=!0x0,this[_0x366314(0x124)]=!0x1,this['_connecting']=!0x1,this[_0x366314(0xe0)]=((_0x53aad2=(_0x1b2439=_0x5eda40[_0x366314(0xdd)])==null?void 0x0:_0x1b2439[_0x366314(0x183)])==null?void 0x0:_0x53aad2[_0x366314(0x1b5)])===_0x366314(0x17a),this[_0x366314(0x1ad)]=!((_0x16aebe=(_0x1bf7d1=this[_0x366314(0x12a)][_0x366314(0xdd)])==null?void 0x0:_0x1bf7d1['versions'])!=null&&_0x16aebe[_0x366314(0x18d)])&&!this[_0x366314(0xe0)],this[_0x366314(0x115)]=null,this[_0x366314(0x163)]=0x0,this['_maxConnectAttemptCount']=0x14,this[_0x366314(0x189)]='https://tinyurl.com/37x8b79t',this[_0x366314(0x10d)]=(this['_inBrowser']?_0x366314(0x122):'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20')+this[_0x366314(0x189)];}async[_0x2bca12(0x19d)](){var _0x4bc165=_0x2bca12,_0x3074a0,_0x2c7ea6;if(this['_WebSocketClass'])return this[_0x4bc165(0x115)];let _0x235b9c;if(this['_inBrowser']||this[_0x4bc165(0xe0)])_0x235b9c=this[_0x4bc165(0x12a)]['WebSocket'];else{if((_0x3074a0=this[_0x4bc165(0x12a)]['process'])!=null&&_0x3074a0[_0x4bc165(0xe2)])_0x235b9c=(_0x2c7ea6=this[_0x4bc165(0x12a)]['process'])==null?void 0x0:_0x2c7ea6[_0x4bc165(0xe2)];else try{let _0x4e4a89=await import('path');_0x235b9c=(await import((await import(_0x4bc165(0x1a8)))[_0x4bc165(0x114)](_0x4e4a89['join'](this['nodeModules'],_0x4bc165(0xc8)))[_0x4bc165(0x119)]()))[_0x4bc165(0xf6)];}catch{try{_0x235b9c=require(require(_0x4bc165(0x16b))[_0x4bc165(0xe1)](this['nodeModules'],'ws'));}catch{throw new Error(_0x4bc165(0xd7));}}}return this[_0x4bc165(0x115)]=_0x235b9c,_0x235b9c;}['_connectToHostNow'](){var _0x51fbbc=_0x2bca12;this[_0x51fbbc(0x101)]||this[_0x51fbbc(0x124)]||this['_connectAttemptCount']>=this[_0x51fbbc(0x15c)]||(this['_allowedToConnectOnSend']=!0x1,this['_connecting']=!0x0,this['_connectAttemptCount']++,this[_0x51fbbc(0x131)]=new Promise((_0x5d6855,_0x5d132d)=>{var _0x3713cd=_0x51fbbc;this[_0x3713cd(0x19d)]()['then'](_0x166099=>{var _0xab40d3=_0x3713cd;let _0x1057b2=new _0x166099(_0xab40d3(0x193)+(!this['_inBrowser']&&this[_0xab40d3(0xde)]?_0xab40d3(0x146):this[_0xab40d3(0xeb)])+':'+this[_0xab40d3(0x149)]);_0x1057b2[_0xab40d3(0x18c)]=()=>{var _0x2ee0f2=_0xab40d3;this['_allowedToSend']=!0x1,this[_0x2ee0f2(0x177)](_0x1057b2),this[_0x2ee0f2(0xc9)](),_0x5d132d(new Error(_0x2ee0f2(0x19a)));},_0x1057b2[_0xab40d3(0x13b)]=()=>{var _0x428739=_0xab40d3;this[_0x428739(0x1ad)]||_0x1057b2[_0x428739(0x165)]&&_0x1057b2[_0x428739(0x165)][_0x428739(0x17c)]&&_0x1057b2[_0x428739(0x165)]['unref'](),_0x5d6855(_0x1057b2);},_0x1057b2[_0xab40d3(0x198)]=()=>{var _0x19f421=_0xab40d3;this[_0x19f421(0x1b8)]=!0x0,this['_disposeWebsocket'](_0x1057b2),this['_attemptToReconnectShortly']();},_0x1057b2[_0xab40d3(0xd8)]=_0x3d3b3b=>{var _0xb0e3d3=_0xab40d3;try{if(!(_0x3d3b3b!=null&&_0x3d3b3b['data'])||!this[_0xb0e3d3(0x10e)])return;let _0x36b853=JSON[_0xb0e3d3(0x11c)](_0x3d3b3b[_0xb0e3d3(0x158)]);this[_0xb0e3d3(0x10e)](_0x36b853[_0xb0e3d3(0x199)],_0x36b853['args'],this[_0xb0e3d3(0x12a)],this['_inBrowser']);}catch{}};})[_0x3713cd(0x187)](_0x554003=>(this[_0x3713cd(0x124)]=!0x0,this['_connecting']=!0x1,this[_0x3713cd(0x1b8)]=!0x1,this['_allowedToSend']=!0x0,this[_0x3713cd(0x163)]=0x0,_0x554003))['catch'](_0x37478e=>(this[_0x3713cd(0x124)]=!0x1,this['_connecting']=!0x1,console['warn'](_0x3713cd(0x184)+this['_webSocketErrorDocsLink']),_0x5d132d(new Error(_0x3713cd(0x186)+(_0x37478e&&_0x37478e[_0x3713cd(0x102)])))));}));}[_0x2bca12(0x177)](_0x386638){var _0x5ba304=_0x2bca12;this[_0x5ba304(0x124)]=!0x1,this[_0x5ba304(0x101)]=!0x1;try{_0x386638[_0x5ba304(0x198)]=null,_0x386638['onerror']=null,_0x386638['onopen']=null;}catch{}try{_0x386638[_0x5ba304(0x168)]<0x2&&_0x386638[_0x5ba304(0xdf)]();}catch{}}[_0x2bca12(0xc9)](){var _0x294ef1=_0x2bca12;clearTimeout(this['_reconnectTimeout']),!(this['_connectAttemptCount']>=this[_0x294ef1(0x15c)])&&(this[_0x294ef1(0xd3)]=setTimeout(()=>{var _0x1796eb=_0x294ef1,_0x2c6adc;this['_connected']||this[_0x1796eb(0x101)]||(this[_0x1796eb(0x127)](),(_0x2c6adc=this[_0x1796eb(0x131)])==null||_0x2c6adc[_0x1796eb(0x161)](()=>this[_0x1796eb(0xc9)]()));},0x1f4),this[_0x294ef1(0xd3)][_0x294ef1(0x17c)]&&this[_0x294ef1(0xd3)][_0x294ef1(0x17c)]());}async[_0x2bca12(0x173)](_0x10f210){var _0x52b89f=_0x2bca12;try{if(!this['_allowedToSend'])return;this['_allowedToConnectOnSend']&&this[_0x52b89f(0x127)](),(await this[_0x52b89f(0x131)])['send'](JSON[_0x52b89f(0x18b)](_0x10f210));}catch(_0x5bd730){console[_0x52b89f(0x136)](this[_0x52b89f(0x10d)]+':\\x20'+(_0x5bd730&&_0x5bd730[_0x52b89f(0x102)])),this[_0x52b89f(0xf7)]=!0x1,this[_0x52b89f(0xc9)]();}}};function q(_0x2559f6,_0x429776,_0x286cb2,_0x1899f4,_0x5d87c6,_0x3f6d48,_0x5100f6,_0x3674c9=ie){var _0x3c2a94=_0x2bca12;let _0x1f028d=_0x286cb2[_0x3c2a94(0xdb)](',')[_0x3c2a94(0x19e)](_0x1b6f54=>{var _0x1b4dcd=_0x3c2a94,_0x5e8525,_0x163ae0,_0x1ac705,_0x14a90d;try{if(!_0x2559f6[_0x1b4dcd(0x12d)]){let _0x463d56=((_0x163ae0=(_0x5e8525=_0x2559f6[_0x1b4dcd(0xdd)])==null?void 0x0:_0x5e8525['versions'])==null?void 0x0:_0x163ae0[_0x1b4dcd(0x18d)])||((_0x14a90d=(_0x1ac705=_0x2559f6['process'])==null?void 0x0:_0x1ac705[_0x1b4dcd(0x183)])==null?void 0x0:_0x14a90d[_0x1b4dcd(0x1b5)])===_0x1b4dcd(0x17a);(_0x5d87c6===_0x1b4dcd(0x1ac)||_0x5d87c6==='remix'||_0x5d87c6==='astro'||_0x5d87c6===_0x1b4dcd(0x16a))&&(_0x5d87c6+=_0x463d56?_0x1b4dcd(0x1b9):_0x1b4dcd(0xca)),_0x2559f6[_0x1b4dcd(0x12d)]={'id':+new Date(),'tool':_0x5d87c6},_0x5100f6&&_0x5d87c6&&!_0x463d56&&console[_0x1b4dcd(0x19f)](_0x1b4dcd(0x12b)+(_0x5d87c6[_0x1b4dcd(0x144)](0x0)[_0x1b4dcd(0xc7)]()+_0x5d87c6[_0x1b4dcd(0x129)](0x1))+',',_0x1b4dcd(0x1a3),_0x1b4dcd(0x110));}let _0x3505f2=new Z(_0x2559f6,_0x429776,_0x1b6f54,_0x1899f4,_0x3f6d48,_0x3674c9);return _0x3505f2[_0x1b4dcd(0x173)][_0x1b4dcd(0x17d)](_0x3505f2);}catch(_0x23fd2a){return console[_0x1b4dcd(0x136)](_0x1b4dcd(0x1b0),_0x23fd2a&&_0x23fd2a[_0x1b4dcd(0x102)]),()=>{};}});return _0x46ac03=>_0x1f028d['forEach'](_0x6d4398=>_0x6d4398(_0x46ac03));}function _0x1981(){var _0x1cc256=['nan','autoExpand','rootExpression','isExpressionToEvaluate','_type','_connecting','message',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"DESKTOP-O6VEID5\",\"192.168.35.117\"],\"c:\\\\Users\\\\William\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-1.0.361\\\\node_modules\",'webpack','160376fqsVJW','replace','indexOf','expId','unknown','Symbol','call','_sendErrorMessage','eventReceivedCallback','coverage','see\\x20https://tinyurl.com/2vt8jxzw\\x20for\\x20more\\x20info.','trace','perf_hooks','_additionalMetadata','pathToFileURL','_WebSocketClass','nodeModules','performance','44910AnkGVI','toString','resolveGetters','elements','parse','index','concat','[object\\x20Date]','_p_','_sortProps','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','_addProperty','_connected','387884eRTpAo','_isPrimitiveType','_connectToHostNow','_processTreeNodeResult','substr','global','%c\\x20Console\\x20Ninja\\x20extension\\x20is\\x20connected\\x20to\\x20','2933940VZdLFd','_console_ninja_session','args','props','cappedElements','_ws','allStrLength','cappedProps','hits','type','warn','Set','_isUndefined','pop','_console_ninja','onopen','hostname','_propertyName','some','object','_setNodePermissions','now','_addLoadNode','_getOwnPropertyDescriptor','charAt','HTMLAllCollection','gateway.docker.internal','symbol','prototype','port','POSITIVE_INFINITY','NEGATIVE_INFINITY','count','getPrototypeOf','_addObjectProperty','valueOf','name','_setNodeExpressionPath','constructor','forEach','reduceLimits','undefined','Map','[object\\x20Array]','data','Number','_isMap','toLowerCase','_maxConnectAttemptCount','_hasMapOnItsPath','_undefined','[object\\x20BigInt]','104515YyMMdb','catch','_Symbol','_connectAttemptCount','_p_length','_socket','_property','sortProps','readyState','_setNodeQueryPath','angular','path','match','value','_objectToString','638627Mjrmie','serialize','array','_regExpToString','send','unshift','boolean','_hasSetOnItsPath','_disposeWebsocket','stackTraceLimit','console','edge','_capIfString','unref','bind','_p_name','autoExpandLimit','string','_isPrimitiveWrapperType','parent','env','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','level','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','then','expressionsToEvaluate','_webSocketErrorDocsLink','Buffer','stringify','onerror','node','getOwnPropertySymbols','setter','startsWith','negativeZero','isArray','ws://','_setNodeId','127.0.0.1','27UnjLEA','_setNodeExpandableState','onclose','method','logger\\x20websocket\\x20error','error','capped','getWebSocketClass','map','log','115IvKekB','positiveInfinity','_consoleNinjaAllowedToStart','background:\\x20rgb(30,30,30);\\x20color:\\x20rgb(255,213,92)','sort','RegExp','timeStamp','location','url','slice','__es'+'Module','function','next.js','_inBrowser','length','hrtime','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','6MKhUHQ','endsWith','depth','elapsed','NEXT_RUNTIME','_quotedRegExp','[object\\x20Set]','_allowedToConnectOnSend','\\x20server','_numberRegExp','6hsXPaJ','_getOwnPropertyNames','fromCharCode','toUpperCase','ws/index.js','_attemptToReconnectShortly','\\x20browser','_blacklistedProperty','7TPwape','_HTMLAllCollection','versions','_treeNodePropertiesAfterFullValue','1','noFunctions','','_reconnectTimeout','date','_addFunctionsNode','push','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','onmessage','null','autoExpandMaxDepth','split','Boolean','process','dockerizedApp','close','_inNextEdge','join','_WebSocket','strLength','bigint','autoExpandPropertyCount','_ninjaIgnoreNextError','root_exp_id','_isArray','_treeNodePropertiesBeforeFullValue','totalStrLength','host','current','stack','enumerable','origin','getter','getOwnPropertyNames','1499710XMYdzy','time','number','_setNodeLabel','default','_allowedToSend','_isNegativeZero','reload','test','autoExpandPreviousObjects'];_0x1981=function(){return _0x1cc256;};return _0x1981();}function ie(_0x50d241,_0x4ab0ca,_0x2ad3bf,_0x298a30){var _0x132ff5=_0x2bca12;_0x298a30&&_0x50d241===_0x132ff5(0xf9)&&_0x2ad3bf[_0x132ff5(0x1a7)][_0x132ff5(0xf9)]();}function B(_0x2a70ea){var _0x48e265=_0x2bca12,_0x3bb2c5,_0x33cf16;let _0x1da5e2=function(_0x4ae09f,_0x3cdf41){return _0x3cdf41-_0x4ae09f;},_0x5a4fc3;if(_0x2a70ea[_0x48e265(0x117)])_0x5a4fc3=function(){var _0x239825=_0x48e265;return _0x2a70ea[_0x239825(0x117)]['now']();};else{if(_0x2a70ea[_0x48e265(0xdd)]&&_0x2a70ea['process'][_0x48e265(0x1af)]&&((_0x33cf16=(_0x3bb2c5=_0x2a70ea[_0x48e265(0xdd)])==null?void 0x0:_0x3bb2c5['env'])==null?void 0x0:_0x33cf16[_0x48e265(0x1b5)])!==_0x48e265(0x17a))_0x5a4fc3=function(){var _0x5d38df=_0x48e265;return _0x2a70ea[_0x5d38df(0xdd)][_0x5d38df(0x1af)]();},_0x1da5e2=function(_0x1ce5c1,_0x1206ec){return 0x3e8*(_0x1206ec[0x0]-_0x1ce5c1[0x0])+(_0x1206ec[0x1]-_0x1ce5c1[0x1])/0xf4240;};else try{let {performance:_0x31ee75}=require(_0x48e265(0x112));_0x5a4fc3=function(){var _0xb81975=_0x48e265;return _0x31ee75[_0xb81975(0x141)]();};}catch{_0x5a4fc3=function(){return+new Date();};}}return{'elapsed':_0x1da5e2,'timeStamp':_0x5a4fc3,'now':()=>Date[_0x48e265(0x141)]()};}function _0x4773(_0x59a4b7,_0x11c8f8){var _0x19810a=_0x1981();return _0x4773=function(_0x4773c0,_0x5493f9){_0x4773c0=_0x4773c0-0xc4;var _0x42dbbd=_0x19810a[_0x4773c0];return _0x42dbbd;},_0x4773(_0x59a4b7,_0x11c8f8);}function H(_0xa0e04,_0x390b7e,_0x25c02b){var _0x4b158f=_0x2bca12,_0xa0802d,_0x5f0fc3,_0x12133b,_0x53fd5b,_0x2cd2a6;if(_0xa0e04['_consoleNinjaAllowedToStart']!==void 0x0)return _0xa0e04[_0x4b158f(0x1a2)];let _0x3635b4=((_0x5f0fc3=(_0xa0802d=_0xa0e04[_0x4b158f(0xdd)])==null?void 0x0:_0xa0802d[_0x4b158f(0xce)])==null?void 0x0:_0x5f0fc3[_0x4b158f(0x18d)])||((_0x53fd5b=(_0x12133b=_0xa0e04[_0x4b158f(0xdd)])==null?void 0x0:_0x12133b[_0x4b158f(0x183)])==null?void 0x0:_0x53fd5b[_0x4b158f(0x1b5)])==='edge';function _0x31bf08(_0x2063f9){var _0x261b77=_0x4b158f;if(_0x2063f9[_0x261b77(0x190)]('/')&&_0x2063f9[_0x261b77(0x1b2)]('/')){let _0x109725=new RegExp(_0x2063f9[_0x261b77(0x1a9)](0x1,-0x1));return _0xb647c5=>_0x109725[_0x261b77(0xfa)](_0xb647c5);}else{if(_0x2063f9['includes']('*')||_0x2063f9['includes']('?')){let _0x1dd8d2=new RegExp('^'+_0x2063f9[_0x261b77(0x107)](/\\./g,String['fromCharCode'](0x5c)+'.')[_0x261b77(0x107)](/\\*/g,'.*')[_0x261b77(0x107)](/\\?/g,'.')+String[_0x261b77(0xc6)](0x24));return _0x1c3e9e=>_0x1dd8d2[_0x261b77(0xfa)](_0x1c3e9e);}else return _0x2f2cba=>_0x2f2cba===_0x2063f9;}}let _0x49b432=_0x390b7e['map'](_0x31bf08);return _0xa0e04[_0x4b158f(0x1a2)]=_0x3635b4||!_0x390b7e,!_0xa0e04[_0x4b158f(0x1a2)]&&((_0x2cd2a6=_0xa0e04[_0x4b158f(0x1a7)])==null?void 0x0:_0x2cd2a6[_0x4b158f(0x13c)])&&(_0xa0e04[_0x4b158f(0x1a2)]=_0x49b432[_0x4b158f(0x13e)](_0x10f033=>_0x10f033(_0xa0e04[_0x4b158f(0x1a7)][_0x4b158f(0x13c)]))),_0xa0e04[_0x4b158f(0x1a2)];}function X(_0x42b58f,_0x129228,_0xf8645b,_0xe2403){var _0x59d910=_0x2bca12;_0x42b58f=_0x42b58f,_0x129228=_0x129228,_0xf8645b=_0xf8645b,_0xe2403=_0xe2403;let _0x2df6fa=B(_0x42b58f),_0x2c3b6=_0x2df6fa[_0x59d910(0x1b4)],_0x2e20c8=_0x2df6fa[_0x59d910(0x1a6)];class _0x19c1a8{constructor(){var _0x705759=_0x59d910;this['_keyStrRegExp']=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x705759(0x1ba)]=/^(0|[1-9][0-9]*)$/,this[_0x705759(0x1b6)]=/'([^\\\\']|\\\\')*'/,this[_0x705759(0x15e)]=_0x42b58f[_0x705759(0x155)],this[_0x705759(0xcd)]=_0x42b58f[_0x705759(0x145)],this[_0x705759(0x143)]=Object['getOwnPropertyDescriptor'],this[_0x705759(0xc5)]=Object[_0x705759(0xf1)],this[_0x705759(0x162)]=_0x42b58f[_0x705759(0x10b)],this[_0x705759(0x172)]=RegExp['prototype'][_0x705759(0x119)],this['_dateToString']=Date[_0x705759(0x148)][_0x705759(0x119)];}[_0x59d910(0x170)](_0x5ff7d4,_0x50b9c7,_0x57b99b,_0x402de9){var _0x5cfce7=_0x59d910,_0x445891=this,_0x45c037=_0x57b99b['autoExpand'];function _0x2a0f1c(_0x101ae6,_0x5dfecb,_0x226057){var _0x1d3189=_0x4773;_0x5dfecb[_0x1d3189(0x135)]=_0x1d3189(0x10a),_0x5dfecb['error']=_0x101ae6['message'],_0x31dd4c=_0x226057['node'][_0x1d3189(0xec)],_0x226057['node'][_0x1d3189(0xec)]=_0x5dfecb,_0x445891[_0x1d3189(0xe9)](_0x5dfecb,_0x226057);}try{_0x57b99b['level']++,_0x57b99b['autoExpand']&&_0x57b99b[_0x5cfce7(0xfb)][_0x5cfce7(0xd6)](_0x50b9c7);var _0x374e2c,_0x198515,_0x21e989,_0x5397a2,_0xb4f472=[],_0x1033a2=[],_0x42fc37,_0x5db5f3=this['_type'](_0x50b9c7),_0x30e8b5=_0x5db5f3==='array',_0x557cc5=!0x1,_0x5e918c=_0x5db5f3===_0x5cfce7(0x1ab),_0x3251d6=this[_0x5cfce7(0x126)](_0x5db5f3),_0x1ce14a=this['_isPrimitiveWrapperType'](_0x5db5f3),_0x8474bd=_0x3251d6||_0x1ce14a,_0x1bfb2d={},_0x4fe8cd=0x0,_0x8d00e4=!0x1,_0x31dd4c,_0x2f58df=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x57b99b['depth']){if(_0x30e8b5){if(_0x198515=_0x50b9c7[_0x5cfce7(0x1ae)],_0x198515>_0x57b99b[_0x5cfce7(0x11b)]){for(_0x21e989=0x0,_0x5397a2=_0x57b99b[_0x5cfce7(0x11b)],_0x374e2c=_0x21e989;_0x374e2c<_0x5397a2;_0x374e2c++)_0x1033a2[_0x5cfce7(0xd6)](_0x445891[_0x5cfce7(0x123)](_0xb4f472,_0x50b9c7,_0x5db5f3,_0x374e2c,_0x57b99b));_0x5ff7d4[_0x5cfce7(0x130)]=!0x0;}else{for(_0x21e989=0x0,_0x5397a2=_0x198515,_0x374e2c=_0x21e989;_0x374e2c<_0x5397a2;_0x374e2c++)_0x1033a2['push'](_0x445891[_0x5cfce7(0x123)](_0xb4f472,_0x50b9c7,_0x5db5f3,_0x374e2c,_0x57b99b));}_0x57b99b[_0x5cfce7(0xe5)]+=_0x1033a2[_0x5cfce7(0x1ae)];}if(!(_0x5db5f3==='null'||_0x5db5f3===_0x5cfce7(0x155))&&!_0x3251d6&&_0x5db5f3!=='String'&&_0x5db5f3!==_0x5cfce7(0x18a)&&_0x5db5f3!==_0x5cfce7(0xe4)){var _0x3dcccf=_0x402de9[_0x5cfce7(0x12f)]||_0x57b99b[_0x5cfce7(0x12f)];if(this['_isSet'](_0x50b9c7)?(_0x374e2c=0x0,_0x50b9c7[_0x5cfce7(0x153)](function(_0x106bb2){var _0x57c264=_0x5cfce7;if(_0x4fe8cd++,_0x57b99b[_0x57c264(0xe5)]++,_0x4fe8cd>_0x3dcccf){_0x8d00e4=!0x0;return;}if(!_0x57b99b[_0x57c264(0xff)]&&_0x57b99b[_0x57c264(0xfd)]&&_0x57b99b[_0x57c264(0xe5)]>_0x57b99b['autoExpandLimit']){_0x8d00e4=!0x0;return;}_0x1033a2[_0x57c264(0xd6)](_0x445891[_0x57c264(0x123)](_0xb4f472,_0x50b9c7,_0x57c264(0x137),_0x374e2c++,_0x57b99b,function(_0x561327){return function(){return _0x561327;};}(_0x106bb2)));})):this[_0x5cfce7(0x15a)](_0x50b9c7)&&_0x50b9c7[_0x5cfce7(0x153)](function(_0x3400b2,_0xf2c316){var _0x5563b7=_0x5cfce7;if(_0x4fe8cd++,_0x57b99b[_0x5563b7(0xe5)]++,_0x4fe8cd>_0x3dcccf){_0x8d00e4=!0x0;return;}if(!_0x57b99b[_0x5563b7(0xff)]&&_0x57b99b[_0x5563b7(0xfd)]&&_0x57b99b[_0x5563b7(0xe5)]>_0x57b99b[_0x5563b7(0x17f)]){_0x8d00e4=!0x0;return;}var _0x25b726=_0xf2c316['toString']();_0x25b726[_0x5563b7(0x1ae)]>0x64&&(_0x25b726=_0x25b726[_0x5563b7(0x1a9)](0x0,0x64)+'...'),_0x1033a2[_0x5563b7(0xd6)](_0x445891[_0x5563b7(0x123)](_0xb4f472,_0x50b9c7,_0x5563b7(0x156),_0x25b726,_0x57b99b,function(_0x28e73a){return function(){return _0x28e73a;};}(_0x3400b2)));}),!_0x557cc5){try{for(_0x42fc37 in _0x50b9c7)if(!(_0x30e8b5&&_0x2f58df[_0x5cfce7(0xfa)](_0x42fc37))&&!this[_0x5cfce7(0xcb)](_0x50b9c7,_0x42fc37,_0x57b99b)){if(_0x4fe8cd++,_0x57b99b[_0x5cfce7(0xe5)]++,_0x4fe8cd>_0x3dcccf){_0x8d00e4=!0x0;break;}if(!_0x57b99b[_0x5cfce7(0xff)]&&_0x57b99b[_0x5cfce7(0xfd)]&&_0x57b99b[_0x5cfce7(0xe5)]>_0x57b99b['autoExpandLimit']){_0x8d00e4=!0x0;break;}_0x1033a2['push'](_0x445891[_0x5cfce7(0x14e)](_0xb4f472,_0x1bfb2d,_0x50b9c7,_0x5db5f3,_0x42fc37,_0x57b99b));}}catch{}if(_0x1bfb2d[_0x5cfce7(0x164)]=!0x0,_0x5e918c&&(_0x1bfb2d[_0x5cfce7(0x17e)]=!0x0),!_0x8d00e4){var _0x392eb1=[][_0x5cfce7(0x11e)](this[_0x5cfce7(0xc5)](_0x50b9c7))[_0x5cfce7(0x11e)](this['_getOwnPropertySymbols'](_0x50b9c7));for(_0x374e2c=0x0,_0x198515=_0x392eb1[_0x5cfce7(0x1ae)];_0x374e2c<_0x198515;_0x374e2c++)if(_0x42fc37=_0x392eb1[_0x374e2c],!(_0x30e8b5&&_0x2f58df[_0x5cfce7(0xfa)](_0x42fc37[_0x5cfce7(0x119)]()))&&!this[_0x5cfce7(0xcb)](_0x50b9c7,_0x42fc37,_0x57b99b)&&!_0x1bfb2d[_0x5cfce7(0x120)+_0x42fc37['toString']()]){if(_0x4fe8cd++,_0x57b99b[_0x5cfce7(0xe5)]++,_0x4fe8cd>_0x3dcccf){_0x8d00e4=!0x0;break;}if(!_0x57b99b[_0x5cfce7(0xff)]&&_0x57b99b[_0x5cfce7(0xfd)]&&_0x57b99b['autoExpandPropertyCount']>_0x57b99b[_0x5cfce7(0x17f)]){_0x8d00e4=!0x0;break;}_0x1033a2[_0x5cfce7(0xd6)](_0x445891[_0x5cfce7(0x14e)](_0xb4f472,_0x1bfb2d,_0x50b9c7,_0x5db5f3,_0x42fc37,_0x57b99b));}}}}}if(_0x5ff7d4[_0x5cfce7(0x135)]=_0x5db5f3,_0x8474bd?(_0x5ff7d4['value']=_0x50b9c7['valueOf'](),this[_0x5cfce7(0x17b)](_0x5db5f3,_0x5ff7d4,_0x57b99b,_0x402de9)):_0x5db5f3===_0x5cfce7(0xd4)?_0x5ff7d4[_0x5cfce7(0x16d)]=this['_dateToString'][_0x5cfce7(0x10c)](_0x50b9c7):_0x5db5f3===_0x5cfce7(0xe4)?_0x5ff7d4[_0x5cfce7(0x16d)]=_0x50b9c7[_0x5cfce7(0x119)]():_0x5db5f3===_0x5cfce7(0x1a5)?_0x5ff7d4[_0x5cfce7(0x16d)]=this['_regExpToString'][_0x5cfce7(0x10c)](_0x50b9c7):_0x5db5f3===_0x5cfce7(0x147)&&this[_0x5cfce7(0x162)]?_0x5ff7d4['value']=this[_0x5cfce7(0x162)][_0x5cfce7(0x148)][_0x5cfce7(0x119)][_0x5cfce7(0x10c)](_0x50b9c7):!_0x57b99b[_0x5cfce7(0x1b3)]&&!(_0x5db5f3===_0x5cfce7(0xd9)||_0x5db5f3===_0x5cfce7(0x155))&&(delete _0x5ff7d4[_0x5cfce7(0x16d)],_0x5ff7d4['capped']=!0x0),_0x8d00e4&&(_0x5ff7d4[_0x5cfce7(0x133)]=!0x0),_0x31dd4c=_0x57b99b[_0x5cfce7(0x18d)][_0x5cfce7(0xec)],_0x57b99b[_0x5cfce7(0x18d)][_0x5cfce7(0xec)]=_0x5ff7d4,this[_0x5cfce7(0xe9)](_0x5ff7d4,_0x57b99b),_0x1033a2['length']){for(_0x374e2c=0x0,_0x198515=_0x1033a2[_0x5cfce7(0x1ae)];_0x374e2c<_0x198515;_0x374e2c++)_0x1033a2[_0x374e2c](_0x374e2c);}_0xb4f472[_0x5cfce7(0x1ae)]&&(_0x5ff7d4[_0x5cfce7(0x12f)]=_0xb4f472);}catch(_0x39497f){_0x2a0f1c(_0x39497f,_0x5ff7d4,_0x57b99b);}return this['_additionalMetadata'](_0x50b9c7,_0x5ff7d4),this['_treeNodePropertiesAfterFullValue'](_0x5ff7d4,_0x57b99b),_0x57b99b[_0x5cfce7(0x18d)][_0x5cfce7(0xec)]=_0x31dd4c,_0x57b99b[_0x5cfce7(0x185)]--,_0x57b99b[_0x5cfce7(0xfd)]=_0x45c037,_0x57b99b[_0x5cfce7(0xfd)]&&_0x57b99b[_0x5cfce7(0xfb)][_0x5cfce7(0x139)](),_0x5ff7d4;}['_getOwnPropertySymbols'](_0x477a0b){var _0x3d0f11=_0x59d910;return Object[_0x3d0f11(0x18e)]?Object[_0x3d0f11(0x18e)](_0x477a0b):[];}['_isSet'](_0x141e1f){var _0x1204c3=_0x59d910;return!!(_0x141e1f&&_0x42b58f[_0x1204c3(0x137)]&&this['_objectToString'](_0x141e1f)===_0x1204c3(0x1b7)&&_0x141e1f[_0x1204c3(0x153)]);}[_0x59d910(0xcb)](_0x1ddd07,_0x20799b,_0x158e7f){var _0x29a6c1=_0x59d910;return _0x158e7f[_0x29a6c1(0xd1)]?typeof _0x1ddd07[_0x20799b]=='function':!0x1;}['_type'](_0x5bc437){var _0x5e1e75=_0x59d910,_0x3950f7='';return _0x3950f7=typeof _0x5bc437,_0x3950f7===_0x5e1e75(0x13f)?this['_objectToString'](_0x5bc437)===_0x5e1e75(0x157)?_0x3950f7=_0x5e1e75(0x171):this[_0x5e1e75(0x16e)](_0x5bc437)===_0x5e1e75(0x11f)?_0x3950f7=_0x5e1e75(0xd4):this[_0x5e1e75(0x16e)](_0x5bc437)===_0x5e1e75(0x15f)?_0x3950f7=_0x5e1e75(0xe4):_0x5bc437===null?_0x3950f7='null':_0x5bc437[_0x5e1e75(0x152)]&&(_0x3950f7=_0x5bc437['constructor'][_0x5e1e75(0x150)]||_0x3950f7):_0x3950f7==='undefined'&&this[_0x5e1e75(0xcd)]&&_0x5bc437 instanceof this[_0x5e1e75(0xcd)]&&(_0x3950f7=_0x5e1e75(0x145)),_0x3950f7;}[_0x59d910(0x16e)](_0x4efba9){var _0x28da83=_0x59d910;return Object[_0x28da83(0x148)]['toString']['call'](_0x4efba9);}[_0x59d910(0x126)](_0x3a2465){var _0x20daf9=_0x59d910;return _0x3a2465===_0x20daf9(0x175)||_0x3a2465==='string'||_0x3a2465===_0x20daf9(0xf4);}[_0x59d910(0x181)](_0xc8d6c3){var _0x155aaf=_0x59d910;return _0xc8d6c3===_0x155aaf(0xdc)||_0xc8d6c3==='String'||_0xc8d6c3===_0x155aaf(0x159);}['_addProperty'](_0x3bbd44,_0x2aa429,_0x279449,_0x2b5ddf,_0x16bae5,_0xe41fe8){var _0x2c110d=this;return function(_0x22390d){var _0x4b904d=_0x4773,_0xd0393c=_0x16bae5[_0x4b904d(0x18d)]['current'],_0x2ab087=_0x16bae5[_0x4b904d(0x18d)][_0x4b904d(0x11d)],_0x5c27ab=_0x16bae5['node'][_0x4b904d(0x182)];_0x16bae5[_0x4b904d(0x18d)][_0x4b904d(0x182)]=_0xd0393c,_0x16bae5[_0x4b904d(0x18d)][_0x4b904d(0x11d)]=typeof _0x2b5ddf=='number'?_0x2b5ddf:_0x22390d,_0x3bbd44[_0x4b904d(0xd6)](_0x2c110d[_0x4b904d(0x166)](_0x2aa429,_0x279449,_0x2b5ddf,_0x16bae5,_0xe41fe8)),_0x16bae5[_0x4b904d(0x18d)][_0x4b904d(0x182)]=_0x5c27ab,_0x16bae5[_0x4b904d(0x18d)][_0x4b904d(0x11d)]=_0x2ab087;};}['_addObjectProperty'](_0x3a8c19,_0x3b4554,_0x4b0f99,_0x53b369,_0x27c291,_0x5a54ef,_0x1ead2a){var _0x5550e6=_0x59d910,_0x3bc2b8=this;return _0x3b4554[_0x5550e6(0x120)+_0x27c291[_0x5550e6(0x119)]()]=!0x0,function(_0x47debe){var _0x169dc4=_0x5550e6,_0x45f56c=_0x5a54ef[_0x169dc4(0x18d)][_0x169dc4(0xec)],_0x267e42=_0x5a54ef[_0x169dc4(0x18d)][_0x169dc4(0x11d)],_0x8dd8b4=_0x5a54ef[_0x169dc4(0x18d)][_0x169dc4(0x182)];_0x5a54ef['node']['parent']=_0x45f56c,_0x5a54ef[_0x169dc4(0x18d)][_0x169dc4(0x11d)]=_0x47debe,_0x3a8c19[_0x169dc4(0xd6)](_0x3bc2b8['_property'](_0x4b0f99,_0x53b369,_0x27c291,_0x5a54ef,_0x1ead2a)),_0x5a54ef['node']['parent']=_0x8dd8b4,_0x5a54ef[_0x169dc4(0x18d)]['index']=_0x267e42;};}[_0x59d910(0x166)](_0x4634bc,_0x50d676,_0x3980e3,_0x4bf6b6,_0xe4fd65){var _0x2ec3ee=_0x59d910,_0x1ecfb9=this;_0xe4fd65||(_0xe4fd65=function(_0x1bd715,_0x5b545a){return _0x1bd715[_0x5b545a];});var _0x43cf5f=_0x3980e3[_0x2ec3ee(0x119)](),_0x473523=_0x4bf6b6[_0x2ec3ee(0x188)]||{},_0x443049=_0x4bf6b6[_0x2ec3ee(0x1b3)],_0xbcb9d=_0x4bf6b6[_0x2ec3ee(0xff)];try{var _0xc15d8d=this[_0x2ec3ee(0x15a)](_0x4634bc),_0x515e5d=_0x43cf5f;_0xc15d8d&&_0x515e5d[0x0]==='\\x27'&&(_0x515e5d=_0x515e5d['substr'](0x1,_0x515e5d[_0x2ec3ee(0x1ae)]-0x2));var _0x5a60d5=_0x4bf6b6['expressionsToEvaluate']=_0x473523[_0x2ec3ee(0x120)+_0x515e5d];_0x5a60d5&&(_0x4bf6b6['depth']=_0x4bf6b6[_0x2ec3ee(0x1b3)]+0x1),_0x4bf6b6[_0x2ec3ee(0xff)]=!!_0x5a60d5;var _0x44f8c5=typeof _0x3980e3==_0x2ec3ee(0x147),_0x480834={'name':_0x44f8c5||_0xc15d8d?_0x43cf5f:this[_0x2ec3ee(0x13d)](_0x43cf5f)};if(_0x44f8c5&&(_0x480834['symbol']=!0x0),!(_0x50d676===_0x2ec3ee(0x171)||_0x50d676==='Error')){var _0xe37803=this['_getOwnPropertyDescriptor'](_0x4634bc,_0x3980e3);if(_0xe37803&&(_0xe37803['set']&&(_0x480834[_0x2ec3ee(0x18f)]=!0x0),_0xe37803['get']&&!_0x5a60d5&&!_0x4bf6b6[_0x2ec3ee(0x11a)]))return _0x480834[_0x2ec3ee(0xf0)]=!0x0,this['_processTreeNodeResult'](_0x480834,_0x4bf6b6),_0x480834;}var _0x3c64d4;try{_0x3c64d4=_0xe4fd65(_0x4634bc,_0x3980e3);}catch(_0x3cb082){return _0x480834={'name':_0x43cf5f,'type':_0x2ec3ee(0x10a),'error':_0x3cb082[_0x2ec3ee(0x102)]},this[_0x2ec3ee(0x128)](_0x480834,_0x4bf6b6),_0x480834;}var _0x4a8e10=this[_0x2ec3ee(0x100)](_0x3c64d4),_0x166793=this['_isPrimitiveType'](_0x4a8e10);if(_0x480834[_0x2ec3ee(0x135)]=_0x4a8e10,_0x166793)this[_0x2ec3ee(0x128)](_0x480834,_0x4bf6b6,_0x3c64d4,function(){var _0x1347bc=_0x2ec3ee;_0x480834[_0x1347bc(0x16d)]=_0x3c64d4[_0x1347bc(0x14f)](),!_0x5a60d5&&_0x1ecfb9[_0x1347bc(0x17b)](_0x4a8e10,_0x480834,_0x4bf6b6,{});});else{var _0x353b1a=_0x4bf6b6[_0x2ec3ee(0xfd)]&&_0x4bf6b6[_0x2ec3ee(0x185)]<_0x4bf6b6[_0x2ec3ee(0xda)]&&_0x4bf6b6['autoExpandPreviousObjects'][_0x2ec3ee(0x108)](_0x3c64d4)<0x0&&_0x4a8e10!==_0x2ec3ee(0x1ab)&&_0x4bf6b6[_0x2ec3ee(0xe5)]<_0x4bf6b6[_0x2ec3ee(0x17f)];_0x353b1a||_0x4bf6b6['level']<_0x443049||_0x5a60d5?(this['serialize'](_0x480834,_0x3c64d4,_0x4bf6b6,_0x5a60d5||{}),this[_0x2ec3ee(0x113)](_0x3c64d4,_0x480834)):this[_0x2ec3ee(0x128)](_0x480834,_0x4bf6b6,_0x3c64d4,function(){var _0x3f3537=_0x2ec3ee;_0x4a8e10===_0x3f3537(0xd9)||_0x4a8e10===_0x3f3537(0x155)||(delete _0x480834['value'],_0x480834['capped']=!0x0);});}return _0x480834;}finally{_0x4bf6b6['expressionsToEvaluate']=_0x473523,_0x4bf6b6[_0x2ec3ee(0x1b3)]=_0x443049,_0x4bf6b6['isExpressionToEvaluate']=_0xbcb9d;}}['_capIfString'](_0x374f23,_0x1082d6,_0x4780b2,_0xc78460){var _0x22facb=_0x59d910,_0x54c069=_0xc78460[_0x22facb(0xe3)]||_0x4780b2[_0x22facb(0xe3)];if((_0x374f23===_0x22facb(0x180)||_0x374f23==='String')&&_0x1082d6[_0x22facb(0x16d)]){let _0x50dee4=_0x1082d6[_0x22facb(0x16d)]['length'];_0x4780b2[_0x22facb(0x132)]+=_0x50dee4,_0x4780b2[_0x22facb(0x132)]>_0x4780b2['totalStrLength']?(_0x1082d6[_0x22facb(0x19c)]='',delete _0x1082d6[_0x22facb(0x16d)]):_0x50dee4>_0x54c069&&(_0x1082d6[_0x22facb(0x19c)]=_0x1082d6[_0x22facb(0x16d)][_0x22facb(0x129)](0x0,_0x54c069),delete _0x1082d6[_0x22facb(0x16d)]);}}[_0x59d910(0x15a)](_0x52ab0c){var _0x2023a7=_0x59d910;return!!(_0x52ab0c&&_0x42b58f[_0x2023a7(0x156)]&&this['_objectToString'](_0x52ab0c)==='[object\\x20Map]'&&_0x52ab0c[_0x2023a7(0x153)]);}[_0x59d910(0x13d)](_0x4cb732){var _0x40da4e=_0x59d910;if(_0x4cb732[_0x40da4e(0x16c)](/^\\d+$/))return _0x4cb732;var _0x4f2948;try{_0x4f2948=JSON[_0x40da4e(0x18b)](''+_0x4cb732);}catch{_0x4f2948='\\x22'+this[_0x40da4e(0x16e)](_0x4cb732)+'\\x22';}return _0x4f2948['match'](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x4f2948=_0x4f2948['substr'](0x1,_0x4f2948[_0x40da4e(0x1ae)]-0x2):_0x4f2948=_0x4f2948[_0x40da4e(0x107)](/'/g,'\\x5c\\x27')[_0x40da4e(0x107)](/\\\\\"/g,'\\x22')[_0x40da4e(0x107)](/(^\"|\"$)/g,'\\x27'),_0x4f2948;}[_0x59d910(0x128)](_0x1d5fea,_0x5be4c9,_0x4d7602,_0x144e6a){var _0x127d32=_0x59d910;this[_0x127d32(0xe9)](_0x1d5fea,_0x5be4c9),_0x144e6a&&_0x144e6a(),this['_additionalMetadata'](_0x4d7602,_0x1d5fea),this[_0x127d32(0xcf)](_0x1d5fea,_0x5be4c9);}['_treeNodePropertiesBeforeFullValue'](_0x1e69b9,_0x9763d9){var _0x19d496=_0x59d910;this[_0x19d496(0x194)](_0x1e69b9,_0x9763d9),this[_0x19d496(0x169)](_0x1e69b9,_0x9763d9),this[_0x19d496(0x151)](_0x1e69b9,_0x9763d9),this[_0x19d496(0x140)](_0x1e69b9,_0x9763d9);}[_0x59d910(0x194)](_0x490095,_0x2bbcf7){}['_setNodeQueryPath'](_0x5e063c,_0x16566d){}['_setNodeLabel'](_0x46851d,_0x310978){}[_0x59d910(0x138)](_0x4034ca){var _0x543b1b=_0x59d910;return _0x4034ca===this[_0x543b1b(0x15e)];}[_0x59d910(0xcf)](_0x54fc25,_0x515034){var _0x1e6ee5=_0x59d910;this['_setNodeLabel'](_0x54fc25,_0x515034),this[_0x1e6ee5(0x197)](_0x54fc25),_0x515034['sortProps']&&this[_0x1e6ee5(0x121)](_0x54fc25),this[_0x1e6ee5(0xd5)](_0x54fc25,_0x515034),this[_0x1e6ee5(0x142)](_0x54fc25,_0x515034),this['_cleanNode'](_0x54fc25);}[_0x59d910(0x113)](_0x32cb62,_0x5e6d71){var _0x5b5079=_0x59d910;let _0x2376e2;try{_0x42b58f['console']&&(_0x2376e2=_0x42b58f['console'][_0x5b5079(0x19b)],_0x42b58f['console'][_0x5b5079(0x19b)]=function(){}),_0x32cb62&&typeof _0x32cb62[_0x5b5079(0x1ae)]=='number'&&(_0x5e6d71[_0x5b5079(0x1ae)]=_0x32cb62[_0x5b5079(0x1ae)]);}catch{}finally{_0x2376e2&&(_0x42b58f[_0x5b5079(0x179)][_0x5b5079(0x19b)]=_0x2376e2);}if(_0x5e6d71[_0x5b5079(0x135)]==='number'||_0x5e6d71[_0x5b5079(0x135)]===_0x5b5079(0x159)){if(isNaN(_0x5e6d71[_0x5b5079(0x16d)]))_0x5e6d71[_0x5b5079(0xfc)]=!0x0,delete _0x5e6d71[_0x5b5079(0x16d)];else switch(_0x5e6d71[_0x5b5079(0x16d)]){case Number[_0x5b5079(0x14a)]:_0x5e6d71[_0x5b5079(0x1a1)]=!0x0,delete _0x5e6d71[_0x5b5079(0x16d)];break;case Number[_0x5b5079(0x14b)]:_0x5e6d71['negativeInfinity']=!0x0,delete _0x5e6d71[_0x5b5079(0x16d)];break;case 0x0:this[_0x5b5079(0xf8)](_0x5e6d71[_0x5b5079(0x16d)])&&(_0x5e6d71[_0x5b5079(0x191)]=!0x0);break;}}else _0x5e6d71[_0x5b5079(0x135)]===_0x5b5079(0x1ab)&&typeof _0x32cb62['name']=='string'&&_0x32cb62[_0x5b5079(0x150)]&&_0x5e6d71[_0x5b5079(0x150)]&&_0x32cb62['name']!==_0x5e6d71[_0x5b5079(0x150)]&&(_0x5e6d71['funcName']=_0x32cb62['name']);}[_0x59d910(0xf8)](_0x34f93d){var _0x1528b8=_0x59d910;return 0x1/_0x34f93d===Number[_0x1528b8(0x14b)];}[_0x59d910(0x121)](_0x111632){var _0x308a43=_0x59d910;!_0x111632[_0x308a43(0x12f)]||!_0x111632[_0x308a43(0x12f)][_0x308a43(0x1ae)]||_0x111632[_0x308a43(0x135)]==='array'||_0x111632[_0x308a43(0x135)]===_0x308a43(0x156)||_0x111632[_0x308a43(0x135)]===_0x308a43(0x137)||_0x111632[_0x308a43(0x12f)][_0x308a43(0x1a4)](function(_0x191f07,_0x5c36ed){var _0x4c8048=_0x308a43,_0x17e8b9=_0x191f07[_0x4c8048(0x150)][_0x4c8048(0x15b)](),_0x4c46a3=_0x5c36ed[_0x4c8048(0x150)][_0x4c8048(0x15b)]();return _0x17e8b9<_0x4c46a3?-0x1:_0x17e8b9>_0x4c46a3?0x1:0x0;});}[_0x59d910(0xd5)](_0x23b5e1,_0xc0339f){var _0x1dd9a0=_0x59d910;if(!(_0xc0339f[_0x1dd9a0(0xd1)]||!_0x23b5e1[_0x1dd9a0(0x12f)]||!_0x23b5e1[_0x1dd9a0(0x12f)]['length'])){for(var _0x4e618e=[],_0x43d757=[],_0x58332c=0x0,_0x423385=_0x23b5e1['props']['length'];_0x58332c<_0x423385;_0x58332c++){var _0xc362d8=_0x23b5e1['props'][_0x58332c];_0xc362d8[_0x1dd9a0(0x135)]===_0x1dd9a0(0x1ab)?_0x4e618e[_0x1dd9a0(0xd6)](_0xc362d8):_0x43d757[_0x1dd9a0(0xd6)](_0xc362d8);}if(!(!_0x43d757[_0x1dd9a0(0x1ae)]||_0x4e618e[_0x1dd9a0(0x1ae)]<=0x1)){_0x23b5e1['props']=_0x43d757;var _0x2a836a={'functionsNode':!0x0,'props':_0x4e618e};this['_setNodeId'](_0x2a836a,_0xc0339f),this[_0x1dd9a0(0xf5)](_0x2a836a,_0xc0339f),this[_0x1dd9a0(0x197)](_0x2a836a),this[_0x1dd9a0(0x140)](_0x2a836a,_0xc0339f),_0x2a836a['id']+='\\x20f',_0x23b5e1[_0x1dd9a0(0x12f)][_0x1dd9a0(0x174)](_0x2a836a);}}}['_addLoadNode'](_0x2794a5,_0x4e8a8b){}['_setNodeExpandableState'](_0x530ed3){}[_0x59d910(0xe8)](_0x133a13){var _0x2a2e61=_0x59d910;return Array[_0x2a2e61(0x192)](_0x133a13)||typeof _0x133a13==_0x2a2e61(0x13f)&&this['_objectToString'](_0x133a13)===_0x2a2e61(0x157);}['_setNodePermissions'](_0x18954f,_0x46f40f){}['_cleanNode'](_0x5c208d){var _0xf00978=_0x59d910;delete _0x5c208d['_hasSymbolPropertyOnItsPath'],delete _0x5c208d[_0xf00978(0x176)],delete _0x5c208d[_0xf00978(0x15d)];}['_setNodeExpressionPath'](_0x2e8d98,_0x41dee0){}}let _0x4519b0=new _0x19c1a8(),_0x40f60c={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x12c5e7={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x2867e6(_0x4e0c7c,_0x1e03f8,_0x499c82,_0x5aa8c5,_0x3e32f4,_0xb5a717){var _0x3f40bd=_0x59d910;let _0x230712,_0xc3da0a;try{_0xc3da0a=_0x2e20c8(),_0x230712=_0xf8645b[_0x1e03f8],!_0x230712||_0xc3da0a-_0x230712['ts']>0x1f4&&_0x230712[_0x3f40bd(0x14c)]&&_0x230712[_0x3f40bd(0xf3)]/_0x230712[_0x3f40bd(0x14c)]<0x64?(_0xf8645b[_0x1e03f8]=_0x230712={'count':0x0,'time':0x0,'ts':_0xc3da0a},_0xf8645b[_0x3f40bd(0x134)]={}):_0xc3da0a-_0xf8645b['hits']['ts']>0x32&&_0xf8645b[_0x3f40bd(0x134)]['count']&&_0xf8645b['hits'][_0x3f40bd(0xf3)]/_0xf8645b[_0x3f40bd(0x134)]['count']<0x64&&(_0xf8645b[_0x3f40bd(0x134)]={});let _0x18333f=[],_0x178c3=_0x230712[_0x3f40bd(0x154)]||_0xf8645b[_0x3f40bd(0x134)]['reduceLimits']?_0x12c5e7:_0x40f60c,_0xe4c0b=_0x2f2881=>{var _0x11bdda=_0x3f40bd;let _0x494983={};return _0x494983[_0x11bdda(0x12f)]=_0x2f2881[_0x11bdda(0x12f)],_0x494983[_0x11bdda(0x11b)]=_0x2f2881[_0x11bdda(0x11b)],_0x494983['strLength']=_0x2f2881[_0x11bdda(0xe3)],_0x494983[_0x11bdda(0xea)]=_0x2f2881['totalStrLength'],_0x494983[_0x11bdda(0x17f)]=_0x2f2881['autoExpandLimit'],_0x494983[_0x11bdda(0xda)]=_0x2f2881[_0x11bdda(0xda)],_0x494983[_0x11bdda(0x167)]=!0x1,_0x494983[_0x11bdda(0xd1)]=!_0x129228,_0x494983['depth']=0x1,_0x494983[_0x11bdda(0x185)]=0x0,_0x494983[_0x11bdda(0x109)]=_0x11bdda(0xe7),_0x494983[_0x11bdda(0xfe)]='root_exp',_0x494983[_0x11bdda(0xfd)]=!0x0,_0x494983[_0x11bdda(0xfb)]=[],_0x494983[_0x11bdda(0xe5)]=0x0,_0x494983['resolveGetters']=!0x0,_0x494983[_0x11bdda(0x132)]=0x0,_0x494983[_0x11bdda(0x18d)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x494983;};for(var _0x327fd1=0x0;_0x327fd1<_0x3e32f4[_0x3f40bd(0x1ae)];_0x327fd1++)_0x18333f[_0x3f40bd(0xd6)](_0x4519b0[_0x3f40bd(0x170)]({'timeNode':_0x4e0c7c==='time'||void 0x0},_0x3e32f4[_0x327fd1],_0xe4c0b(_0x178c3),{}));if(_0x4e0c7c===_0x3f40bd(0x111)||_0x4e0c7c==='error'){let _0x1fda32=Error[_0x3f40bd(0x178)];try{Error['stackTraceLimit']=0x1/0x0,_0x18333f[_0x3f40bd(0xd6)](_0x4519b0[_0x3f40bd(0x170)]({'stackNode':!0x0},new Error()[_0x3f40bd(0xed)],_0xe4c0b(_0x178c3),{'strLength':0x1/0x0}));}finally{Error[_0x3f40bd(0x178)]=_0x1fda32;}}return{'method':_0x3f40bd(0x19f),'version':_0xe2403,'args':[{'ts':_0x499c82,'session':_0x5aa8c5,'args':_0x18333f,'id':_0x1e03f8,'context':_0xb5a717}]};}catch(_0x147097){return{'method':_0x3f40bd(0x19f),'version':_0xe2403,'args':[{'ts':_0x499c82,'session':_0x5aa8c5,'args':[{'type':_0x3f40bd(0x10a),'error':_0x147097&&_0x147097['message']}],'id':_0x1e03f8,'context':_0xb5a717}]};}finally{try{if(_0x230712&&_0xc3da0a){let _0x3a9447=_0x2e20c8();_0x230712[_0x3f40bd(0x14c)]++,_0x230712[_0x3f40bd(0xf3)]+=_0x2c3b6(_0xc3da0a,_0x3a9447),_0x230712['ts']=_0x3a9447,_0xf8645b[_0x3f40bd(0x134)]['count']++,_0xf8645b[_0x3f40bd(0x134)]['time']+=_0x2c3b6(_0xc3da0a,_0x3a9447),_0xf8645b[_0x3f40bd(0x134)]['ts']=_0x3a9447,(_0x230712['count']>0x32||_0x230712['time']>0x64)&&(_0x230712[_0x3f40bd(0x154)]=!0x0),(_0xf8645b[_0x3f40bd(0x134)][_0x3f40bd(0x14c)]>0x3e8||_0xf8645b[_0x3f40bd(0x134)][_0x3f40bd(0xf3)]>0x12c)&&(_0xf8645b[_0x3f40bd(0x134)][_0x3f40bd(0x154)]=!0x0);}}catch{}}}return _0x2867e6;}((_0x260c40,_0x36ba27,_0xd0e3a4,_0x59e50e,_0x456a08,_0x34dad2,_0x1940de,_0x3185f6,_0x38d54d,_0x1ad063,_0x501193)=>{var _0x2ad7ff=_0x2bca12;if(_0x260c40[_0x2ad7ff(0x13a)])return _0x260c40[_0x2ad7ff(0x13a)];if(!H(_0x260c40,_0x3185f6,_0x456a08))return _0x260c40[_0x2ad7ff(0x13a)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x260c40[_0x2ad7ff(0x13a)];let _0x57ceed=B(_0x260c40),_0x469973=_0x57ceed[_0x2ad7ff(0x1b4)],_0x86bf78=_0x57ceed[_0x2ad7ff(0x1a6)],_0x52fd71=_0x57ceed[_0x2ad7ff(0x141)],_0x3d20d7={'hits':{},'ts':{}},_0x1ce957=X(_0x260c40,_0x38d54d,_0x3d20d7,_0x34dad2),_0x244a7c=_0x17eff2=>{_0x3d20d7['ts'][_0x17eff2]=_0x86bf78();},_0x531d83=(_0x446482,_0x4eea60)=>{var _0xea7eef=_0x2ad7ff;let _0x5bd83d=_0x3d20d7['ts'][_0x4eea60];if(delete _0x3d20d7['ts'][_0x4eea60],_0x5bd83d){let _0x482988=_0x469973(_0x5bd83d,_0x86bf78());_0x24a62f(_0x1ce957(_0xea7eef(0xf3),_0x446482,_0x52fd71(),_0x542ed2,[_0x482988],_0x4eea60));}},_0x4fccac=_0x484167=>{var _0x11268e=_0x2ad7ff,_0x291c2d;return _0x456a08===_0x11268e(0x1ac)&&_0x260c40[_0x11268e(0xef)]&&((_0x291c2d=_0x484167==null?void 0x0:_0x484167['args'])==null?void 0x0:_0x291c2d['length'])&&(_0x484167[_0x11268e(0x12e)][0x0][_0x11268e(0xef)]=_0x260c40[_0x11268e(0xef)]),_0x484167;};_0x260c40[_0x2ad7ff(0x13a)]={'consoleLog':(_0x177581,_0x21b08d)=>{var _0x203820=_0x2ad7ff;_0x260c40[_0x203820(0x179)][_0x203820(0x19f)][_0x203820(0x150)]!=='disabledLog'&&_0x24a62f(_0x1ce957('log',_0x177581,_0x52fd71(),_0x542ed2,_0x21b08d));},'consoleTrace':(_0x37cd17,_0x1913f4)=>{var _0x59a05f=_0x2ad7ff,_0x2b73e2,_0x5001bc;_0x260c40[_0x59a05f(0x179)][_0x59a05f(0x19f)][_0x59a05f(0x150)]!=='disabledTrace'&&((_0x5001bc=(_0x2b73e2=_0x260c40[_0x59a05f(0xdd)])==null?void 0x0:_0x2b73e2[_0x59a05f(0xce)])!=null&&_0x5001bc[_0x59a05f(0x18d)]&&(_0x260c40[_0x59a05f(0xe6)]=!0x0),_0x24a62f(_0x4fccac(_0x1ce957(_0x59a05f(0x111),_0x37cd17,_0x52fd71(),_0x542ed2,_0x1913f4))));},'consoleError':(_0x1ffea1,_0x3e397d)=>{var _0xbee322=_0x2ad7ff;_0x260c40['_ninjaIgnoreNextError']=!0x0,_0x24a62f(_0x4fccac(_0x1ce957(_0xbee322(0x19b),_0x1ffea1,_0x52fd71(),_0x542ed2,_0x3e397d)));},'consoleTime':_0xe378bd=>{_0x244a7c(_0xe378bd);},'consoleTimeEnd':(_0x29ec8c,_0x5ab5cf)=>{_0x531d83(_0x5ab5cf,_0x29ec8c);},'autoLog':(_0x2e2f49,_0x2c91b1)=>{_0x24a62f(_0x1ce957('log',_0x2c91b1,_0x52fd71(),_0x542ed2,[_0x2e2f49]));},'autoLogMany':(_0x5d0f4b,_0x32c620)=>{var _0xce0ca4=_0x2ad7ff;_0x24a62f(_0x1ce957(_0xce0ca4(0x19f),_0x5d0f4b,_0x52fd71(),_0x542ed2,_0x32c620));},'autoTrace':(_0x5a5842,_0x423721)=>{var _0x9c9b29=_0x2ad7ff;_0x24a62f(_0x4fccac(_0x1ce957(_0x9c9b29(0x111),_0x423721,_0x52fd71(),_0x542ed2,[_0x5a5842])));},'autoTraceMany':(_0x21f018,_0x538423)=>{_0x24a62f(_0x4fccac(_0x1ce957('trace',_0x21f018,_0x52fd71(),_0x542ed2,_0x538423)));},'autoTime':(_0x41c572,_0x4433e7,_0x5aa06b)=>{_0x244a7c(_0x5aa06b);},'autoTimeEnd':(_0x33d2ab,_0x4d3cfc,_0x196869)=>{_0x531d83(_0x4d3cfc,_0x196869);},'coverage':_0xbc4dc7=>{var _0x56c058=_0x2ad7ff;_0x24a62f({'method':_0x56c058(0x10f),'version':_0x34dad2,'args':[{'id':_0xbc4dc7}]});}};let _0x24a62f=q(_0x260c40,_0x36ba27,_0xd0e3a4,_0x59e50e,_0x456a08,_0x1ad063,_0x501193),_0x542ed2=_0x260c40[_0x2ad7ff(0x12d)];return _0x260c40[_0x2ad7ff(0x13a)];})(globalThis,_0x2bca12(0x195),'52620',_0x2bca12(0x104),_0x2bca12(0x105),'1.0.0','1727973411614',_0x2bca12(0x103),'',_0x2bca12(0xd2),_0x2bca12(0xd0));");
  } catch (e) {}
}

;
/* istanbul ignore next */

function oo_oo(i) {
  for (var _len = arguments.length, v = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    v[_key - 1] = arguments[_key];
  }

  try {
    oo_cm().consoleLog(i, v);
  } catch (e) {}

  return v;
}

;
/* istanbul ignore next */

function oo_tr(i) {
  for (var _len2 = arguments.length, v = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    v[_key2 - 1] = arguments[_key2];
  }

  try {
    oo_cm().consoleTrace(i, v);
  } catch (e) {}

  return v;
}

;
/* istanbul ignore next */

function oo_tx(i) {
  for (var _len3 = arguments.length, v = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    v[_key3 - 1] = arguments[_key3];
  }

  try {
    oo_cm().consoleError(i, v);
  } catch (e) {}

  return v;
}

;
/* istanbul ignore next */

function oo_ts(v) {
  try {
    oo_cm().consoleTime(v);
  } catch (e) {}

  return v;
}

;
/* istanbul ignore next */

function oo_te(v, i) {
  try {
    oo_cm().consoleTimeEnd(v, i);
  } catch (e) {}

  return v;
}

;
/*eslint unicorn/no-abusive-eslint-disable:,eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/***/ ((module) => {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./resources/js/components/Municipality.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/Municipality.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Municipality_vue_vue_type_template_id_580dcb32___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Municipality.vue?vue&type=template&id=580dcb32& */ "./resources/js/components/Municipality.vue?vue&type=template&id=580dcb32&");
/* harmony import */ var _Municipality_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Municipality.vue?vue&type=script&lang=js& */ "./resources/js/components/Municipality.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Municipality_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Municipality_vue_vue_type_template_id_580dcb32___WEBPACK_IMPORTED_MODULE_0__.render,
  _Municipality_vue_vue_type_template_id_580dcb32___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Municipality.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Municipality.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Municipality.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Municipality_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Municipality.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Municipality.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Municipality_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Municipality.vue?vue&type=template&id=580dcb32&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Municipality.vue?vue&type=template&id=580dcb32& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Municipality_vue_vue_type_template_id_580dcb32___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Municipality_vue_vue_type_template_id_580dcb32___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Municipality_vue_vue_type_template_id_580dcb32___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Municipality.vue?vue&type=template&id=580dcb32& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Municipality.vue?vue&type=template&id=580dcb32&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Municipality.vue?vue&type=template&id=580dcb32&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Municipality.vue?vue&type=template&id=580dcb32& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    { attrs: { "data-app": "" } },
    [
      _c("alert-time-out", {
        attrs: { redirect: _vm.redirectSessionFinished },
        on: {
          redirect: function ($event) {
            return _vm.updateTimeOut($event)
          },
        },
      }),
      _vm._v(" "),
      _c("alert", {
        staticClass: "mb-2",
        attrs: {
          text: _vm.textAlert,
          event: _vm.alertEvent,
          show: _vm.showAlert,
        },
        on: {
          "show-alert": function ($event) {
            return _vm.updateAlert($event)
          },
        },
      }),
      _vm._v(" "),
      _c("v-data-table", {
        staticClass: "elevation-3 shadow p-3 mt-3",
        attrs: {
          headers: _vm.headers,
          items: _vm.recordsFiltered,
          "sort-by": "name",
        },
        scopedSlots: _vm._u(
          [
            {
              key: "top",
              fn: function () {
                return [
                  _c(
                    "v-toolbar",
                    { attrs: { flat: "" } },
                    [
                      _c("v-toolbar-title", [_vm._v("Municipios")]),
                      _vm._v(" "),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-dialog",
                        {
                          attrs: { "max-width": "600px", persistent: "" },
                          scopedSlots: _vm._u([
                            {
                              key: "activator",
                              fn: function (ref) {
                                var on = ref.on
                                var attrs = ref.attrs
                                return [
                                  _c(
                                    "v-row",
                                    [
                                      _c(
                                        "v-col",
                                        { attrs: { align: "end" } },
                                        [
                                          _c(
                                            "v-btn",
                                            _vm._g(
                                              _vm._b(
                                                {
                                                  staticClass:
                                                    "mb-2 btn-normal",
                                                  attrs: { rounded: "" },
                                                },
                                                "v-btn",
                                                attrs,
                                                false
                                              ),
                                              on
                                            ),
                                            [
                                              _vm._v(
                                                "\n                  Agregar\n                "
                                              ),
                                            ]
                                          ),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        {
                                          staticClass:
                                            "d-none d-md-block d-lg-block",
                                          attrs: { xs: "6", sm: "6", md: "6" },
                                        },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              dense: "",
                                              label: "Buscar",
                                              outlined: "",
                                              type: "text",
                                            },
                                            on: {
                                              keyup: function ($event) {
                                                return _vm.searchValue()
                                              },
                                            },
                                            model: {
                                              value: _vm.search,
                                              callback: function ($$v) {
                                                _vm.search = $$v
                                              },
                                              expression: "search",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ]
                              },
                            },
                          ]),
                          model: {
                            value: _vm.dialog,
                            callback: function ($$v) {
                              _vm.dialog = $$v
                            },
                            expression: "dialog",
                          },
                        },
                        [
                          _vm._v(" "),
                          _c(
                            "v-card",
                            {
                              staticClass: "flexcard",
                              attrs: { height: "100%" },
                            },
                            [
                              _c("v-card-title", [
                                _c(
                                  "h1",
                                  {
                                    staticClass:
                                      "mx-auto pt-3 mb-3 text-center black-secondary",
                                  },
                                  [
                                    _vm._v(
                                      "\n                " +
                                        _vm._s(_vm.formTitle) +
                                        "\n              "
                                    ),
                                  ]
                                ),
                              ]),
                              _vm._v(" "),
                              _c(
                                "v-card-text",
                                [
                                  _c(
                                    "v-container",
                                    [
                                      _vm.departments.length > 0
                                        ? _c(
                                            "v-row",
                                            [
                                              _c(
                                                "v-col",
                                                {
                                                  attrs: {
                                                    cols: "12",
                                                    sm: "6",
                                                    md: "6",
                                                  },
                                                },
                                                [
                                                  _c("base-select", {
                                                    attrs: {
                                                      label: "Departamentos",
                                                      items: _vm.departments,
                                                      item: "department_name",
                                                      validation:
                                                        _vm.$v.editedItem
                                                          .department_name,
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.$v.editedItem
                                                          .department_name
                                                          .$model,
                                                      callback: function ($$v) {
                                                        _vm.$set(
                                                          _vm.$v.editedItem
                                                            .department_name,
                                                          "$model",
                                                          typeof $$v ===
                                                            "string"
                                                            ? $$v.trim()
                                                            : $$v
                                                        )
                                                      },
                                                      expression:
                                                        "$v.editedItem.department_name.$model",
                                                    },
                                                  }),
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  attrs: {
                                                    cols: "12",
                                                    sm: "6",
                                                    md: "6",
                                                  },
                                                },
                                                [
                                                  _c("base-input", {
                                                    attrs: {
                                                      label: "Nombre municipio",
                                                      validation:
                                                        _vm.$v.editedItem
                                                          .municipality_name,
                                                      validationTextType:
                                                        "default",
                                                      validationsInput: {
                                                        required: true,
                                                        format: false,
                                                        minLength: true,
                                                        maxLength: true,
                                                      },
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.$v.editedItem
                                                          .municipality_name
                                                          .$model,
                                                      callback: function ($$v) {
                                                        _vm.$set(
                                                          _vm.$v.editedItem
                                                            .municipality_name,
                                                          "$model",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "$v.editedItem.municipality_name.$model",
                                                    },
                                                  }),
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  attrs: {
                                                    cols: "12",
                                                    sm: "6",
                                                    md: "6",
                                                  },
                                                },
                                                [
                                                  _c("base-input", {
                                                    attrs: {
                                                      label: "Nombre municipio",
                                                      validation:
                                                        _vm.$v.editedItem
                                                          .mun_min,
                                                      validationTextType:
                                                        "default",
                                                      validationsInput: {
                                                        required: true,
                                                        format: false,
                                                        minLength: true,
                                                        maxLength: true,
                                                      },
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.$v.editedItem
                                                          .mun_min.$model,
                                                      callback: function ($$v) {
                                                        _vm.$set(
                                                          _vm.$v.editedItem
                                                            .mun_min,
                                                          "$model",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "$v.editedItem.mun_min.$model",
                                                    },
                                                  }),
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  attrs: {
                                                    cols: "12",
                                                    sm: "6",
                                                    md: "6",
                                                  },
                                                },
                                                [
                                                  _c("base-input", {
                                                    attrs: {
                                                      label: "Nombre municipio",
                                                      validation:
                                                        _vm.$v.editedItem
                                                          .mun_may,
                                                      validationTextType:
                                                        "default",
                                                      validationsInput: {
                                                        required: true,
                                                        format: false,
                                                        minLength: true,
                                                        maxLength: true,
                                                      },
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.$v.editedItem
                                                          .mun_may.$model,
                                                      callback: function ($$v) {
                                                        _vm.$set(
                                                          _vm.$v.editedItem
                                                            .mun_may,
                                                          "$model",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "$v.editedItem.mun_may.$model",
                                                    },
                                                  }),
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  attrs: {
                                                    cols: "12",
                                                    sm: "6",
                                                    md: "6",
                                                  },
                                                },
                                                [
                                                  _c("base-input", {
                                                    attrs: {
                                                      label: "Nombre municipio",
                                                      validation:
                                                        _vm.$v.editedItem
                                                          .dm_cod,
                                                      validationTextType:
                                                        "default",
                                                      validationsInput: {
                                                        required: true,
                                                        format: false,
                                                        minLength: true,
                                                        maxLength: true,
                                                      },
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.$v.editedItem.dm_cod
                                                          .$model,
                                                      callback: function ($$v) {
                                                        _vm.$set(
                                                          _vm.$v.editedItem
                                                            .dm_cod,
                                                          "$model",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "$v.editedItem.dm_cod.$model",
                                                    },
                                                  }),
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  attrs: {
                                                    cols: "12",
                                                    sm: "6",
                                                    md: "6",
                                                  },
                                                },
                                                [
                                                  _c("base-input", {
                                                    attrs: {
                                                      label: "Nombre municipio",
                                                      validation:
                                                        _vm.$v.editedItem
                                                          .cod_mun,
                                                      validationTextType:
                                                        "default",
                                                      validationsInput: {
                                                        required: true,
                                                        format: false,
                                                        minLength: true,
                                                        maxLength: true,
                                                      },
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.$v.editedItem
                                                          .cod_mun.$model,
                                                      callback: function ($$v) {
                                                        _vm.$set(
                                                          _vm.$v.editedItem
                                                            .cod_mun,
                                                          "$model",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "$v.editedItem.cod_mun.$model",
                                                    },
                                                  }),
                                                ],
                                                1
                                              ),
                                            ],
                                            1
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c(
                                        "v-row",
                                        [
                                          _c(
                                            "v-col",
                                            { attrs: { align: "center" } },
                                            [
                                              _c(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    color:
                                                      "btn-normal no-uppercase mt-3",
                                                    rounded: "",
                                                  },
                                                  on: { click: _vm.save },
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                      Guardar\n                    "
                                                  ),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    color:
                                                      "btn-normal-close no-uppercase mt-3",
                                                    rounded: "",
                                                  },
                                                  on: { click: _vm.close },
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                      Cancelar\n                    "
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-dialog",
                        {
                          attrs: { "max-width": "400px" },
                          model: {
                            value: _vm.dialogDelete,
                            callback: function ($$v) {
                              _vm.dialogDelete = $$v
                            },
                            expression: "dialogDelete",
                          },
                        },
                        [
                          _c(
                            "v-card",
                            { staticClass: "h-100" },
                            [
                              _c(
                                "v-container",
                                [
                                  _c(
                                    "h3",
                                    {
                                      staticClass:
                                        "black-secondary text-center mt-3 mb-3",
                                    },
                                    [
                                      _vm._v(
                                        "\n                Eliminar registro\n              "
                                      ),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-row",
                                    [
                                      _c(
                                        "v-col",
                                        { attrs: { align: "center" } },
                                        [
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: {
                                                color:
                                                  "btn-normal no-uppercase mt-3 mb-3 pr-5 pl-5 mx-auto",
                                                rounded: "",
                                              },
                                              on: {
                                                click: _vm.deleteItemConfirm,
                                              },
                                            },
                                            [_vm._v("Confirmar")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: {
                                                color:
                                                  "btn-normal-close no-uppercase mt-3 mb-3",
                                                rounded: "",
                                              },
                                              on: { click: _vm.closeDelete },
                                            },
                                            [
                                              _vm._v(
                                                "\n                    Cancelar\n                  "
                                              ),
                                            ]
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ]
              },
              proxy: true,
            },
            {
              key: "item.actions",
              fn: function (ref) {
                var item = ref.item
                return [
                  _c(
                    "v-icon",
                    {
                      staticClass: "mr-2",
                      attrs: { small: "" },
                      on: {
                        click: function ($event) {
                          return _vm.editItem(item)
                        },
                      },
                    },
                    [_vm._v(" mdi-pencil ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-icon",
                    {
                      attrs: { small: "" },
                      on: {
                        click: function ($event) {
                          return _vm.deleteItem(item)
                        },
                      },
                    },
                    [_vm._v(" mdi-delete ")]
                  ),
                ]
              },
            },
            {
              key: "no-data",
              fn: function () {
                return [
                  _c(
                    "a",
                    {
                      staticClass: "btn btn-normal-secondary no-decoration",
                      attrs: { href: "#" },
                      on: { click: _vm.initialize },
                    },
                    [_vm._v("\n        Reiniciar\n      ")]
                  ),
                ]
              },
              proxy: true,
            },
          ],
          null,
          true
        ),
      }),
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

"use strict";
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


/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/alpha.js":
/*!********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/alpha.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = (0, _common.regex)('alpha', /^[a-zA-Z]*$/);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/alphaNum.js":
/*!***********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/alphaNum.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = (0, _common.regex)('alphaNum', /^[a-zA-Z0-9]*$/);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/and.js":
/*!******************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/and.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default() {
  for (var _len = arguments.length, validators = new Array(_len), _key = 0; _key < _len; _key++) {
    validators[_key] = arguments[_key];
  }

  return (0, _common.withParams)({
    type: 'and'
  }, function () {
    var _this = this;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return validators.length > 0 && validators.reduce(function (valid, fn) {
      return valid && fn.apply(_this, args);
    }, true);
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/between.js":
/*!**********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/between.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(min, max) {
  return (0, _common.withParams)({
    type: 'between',
    min: min,
    max: max
  }, function (value) {
    return !(0, _common.req)(value) || (!/\s/.test(value) || value instanceof Date) && +min <= +value && +max >= +value;
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/common.js":
/*!*********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/common.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.req = exports.regex = exports.ref = exports.len = void 0;
Object.defineProperty(exports, "withParams", ({
  enumerable: true,
  get: function get() {
    return _withParams.default;
  }
}));

var _withParams = _interopRequireDefault(__webpack_require__(/*! ../withParams */ "./node_modules/vuelidate/lib/withParams.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var req = function req(value) {
  if (Array.isArray(value)) return !!value.length;

  if (value === undefined || value === null) {
    return false;
  }

  if (value === false) {
    return true;
  }

  if (value instanceof Date) {
    return !isNaN(value.getTime());
  }

  if (_typeof(value) === 'object') {
    for (var _ in value) {
      return true;
    }

    return false;
  }

  return !!String(value).length;
};

exports.req = req;

var len = function len(value) {
  if (Array.isArray(value)) return value.length;

  if (_typeof(value) === 'object') {
    return Object.keys(value).length;
  }

  return String(value).length;
};

exports.len = len;

var ref = function ref(reference, vm, parentVm) {
  return typeof reference === 'function' ? reference.call(vm, parentVm) : parentVm[reference];
};

exports.ref = ref;

var regex = function regex(type, expr) {
  return (0, _withParams.default)({
    type: type
  }, function (value) {
    return !req(value) || expr.test(value);
  });
};

exports.regex = regex;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/decimal.js":
/*!**********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/decimal.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = (0, _common.regex)('decimal', /^[-]?\d*(\.\d+)?$/);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/email.js":
/*!********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/email.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var emailRegex = /^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;

var _default = (0, _common.regex)('email', emailRegex);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/index.js":
/*!********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "alpha", ({
  enumerable: true,
  get: function get() {
    return _alpha.default;
  }
}));
Object.defineProperty(exports, "alphaNum", ({
  enumerable: true,
  get: function get() {
    return _alphaNum.default;
  }
}));
Object.defineProperty(exports, "and", ({
  enumerable: true,
  get: function get() {
    return _and.default;
  }
}));
Object.defineProperty(exports, "between", ({
  enumerable: true,
  get: function get() {
    return _between.default;
  }
}));
Object.defineProperty(exports, "decimal", ({
  enumerable: true,
  get: function get() {
    return _decimal.default;
  }
}));
Object.defineProperty(exports, "email", ({
  enumerable: true,
  get: function get() {
    return _email.default;
  }
}));
exports.helpers = void 0;
Object.defineProperty(exports, "integer", ({
  enumerable: true,
  get: function get() {
    return _integer.default;
  }
}));
Object.defineProperty(exports, "ipAddress", ({
  enumerable: true,
  get: function get() {
    return _ipAddress.default;
  }
}));
Object.defineProperty(exports, "macAddress", ({
  enumerable: true,
  get: function get() {
    return _macAddress.default;
  }
}));
Object.defineProperty(exports, "maxLength", ({
  enumerable: true,
  get: function get() {
    return _maxLength.default;
  }
}));
Object.defineProperty(exports, "maxValue", ({
  enumerable: true,
  get: function get() {
    return _maxValue.default;
  }
}));
Object.defineProperty(exports, "minLength", ({
  enumerable: true,
  get: function get() {
    return _minLength.default;
  }
}));
Object.defineProperty(exports, "minValue", ({
  enumerable: true,
  get: function get() {
    return _minValue.default;
  }
}));
Object.defineProperty(exports, "not", ({
  enumerable: true,
  get: function get() {
    return _not.default;
  }
}));
Object.defineProperty(exports, "numeric", ({
  enumerable: true,
  get: function get() {
    return _numeric.default;
  }
}));
Object.defineProperty(exports, "or", ({
  enumerable: true,
  get: function get() {
    return _or.default;
  }
}));
Object.defineProperty(exports, "required", ({
  enumerable: true,
  get: function get() {
    return _required.default;
  }
}));
Object.defineProperty(exports, "requiredIf", ({
  enumerable: true,
  get: function get() {
    return _requiredIf.default;
  }
}));
Object.defineProperty(exports, "requiredUnless", ({
  enumerable: true,
  get: function get() {
    return _requiredUnless.default;
  }
}));
Object.defineProperty(exports, "sameAs", ({
  enumerable: true,
  get: function get() {
    return _sameAs.default;
  }
}));
Object.defineProperty(exports, "url", ({
  enumerable: true,
  get: function get() {
    return _url.default;
  }
}));

var _alpha = _interopRequireDefault(__webpack_require__(/*! ./alpha */ "./node_modules/vuelidate/lib/validators/alpha.js"));

var _alphaNum = _interopRequireDefault(__webpack_require__(/*! ./alphaNum */ "./node_modules/vuelidate/lib/validators/alphaNum.js"));

var _numeric = _interopRequireDefault(__webpack_require__(/*! ./numeric */ "./node_modules/vuelidate/lib/validators/numeric.js"));

var _between = _interopRequireDefault(__webpack_require__(/*! ./between */ "./node_modules/vuelidate/lib/validators/between.js"));

var _email = _interopRequireDefault(__webpack_require__(/*! ./email */ "./node_modules/vuelidate/lib/validators/email.js"));

var _ipAddress = _interopRequireDefault(__webpack_require__(/*! ./ipAddress */ "./node_modules/vuelidate/lib/validators/ipAddress.js"));

var _macAddress = _interopRequireDefault(__webpack_require__(/*! ./macAddress */ "./node_modules/vuelidate/lib/validators/macAddress.js"));

var _maxLength = _interopRequireDefault(__webpack_require__(/*! ./maxLength */ "./node_modules/vuelidate/lib/validators/maxLength.js"));

var _minLength = _interopRequireDefault(__webpack_require__(/*! ./minLength */ "./node_modules/vuelidate/lib/validators/minLength.js"));

var _required = _interopRequireDefault(__webpack_require__(/*! ./required */ "./node_modules/vuelidate/lib/validators/required.js"));

var _requiredIf = _interopRequireDefault(__webpack_require__(/*! ./requiredIf */ "./node_modules/vuelidate/lib/validators/requiredIf.js"));

var _requiredUnless = _interopRequireDefault(__webpack_require__(/*! ./requiredUnless */ "./node_modules/vuelidate/lib/validators/requiredUnless.js"));

var _sameAs = _interopRequireDefault(__webpack_require__(/*! ./sameAs */ "./node_modules/vuelidate/lib/validators/sameAs.js"));

var _url = _interopRequireDefault(__webpack_require__(/*! ./url */ "./node_modules/vuelidate/lib/validators/url.js"));

var _or = _interopRequireDefault(__webpack_require__(/*! ./or */ "./node_modules/vuelidate/lib/validators/or.js"));

var _and = _interopRequireDefault(__webpack_require__(/*! ./and */ "./node_modules/vuelidate/lib/validators/and.js"));

var _not = _interopRequireDefault(__webpack_require__(/*! ./not */ "./node_modules/vuelidate/lib/validators/not.js"));

var _minValue = _interopRequireDefault(__webpack_require__(/*! ./minValue */ "./node_modules/vuelidate/lib/validators/minValue.js"));

var _maxValue = _interopRequireDefault(__webpack_require__(/*! ./maxValue */ "./node_modules/vuelidate/lib/validators/maxValue.js"));

var _integer = _interopRequireDefault(__webpack_require__(/*! ./integer */ "./node_modules/vuelidate/lib/validators/integer.js"));

var _decimal = _interopRequireDefault(__webpack_require__(/*! ./decimal */ "./node_modules/vuelidate/lib/validators/decimal.js"));

var helpers = _interopRequireWildcard(__webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js"));

exports.helpers = helpers;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/integer.js":
/*!**********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/integer.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = (0, _common.regex)('integer', /(^[0-9]*$)|(^-[0-9]+$)/);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/ipAddress.js":
/*!************************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/ipAddress.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = (0, _common.withParams)({
  type: 'ipAddress'
}, function (value) {
  if (!(0, _common.req)(value)) {
    return true;
  }

  if (typeof value !== 'string') {
    return false;
  }

  var nibbles = value.split('.');
  return nibbles.length === 4 && nibbles.every(nibbleValid);
});

exports["default"] = _default;

var nibbleValid = function nibbleValid(nibble) {
  if (nibble.length > 3 || nibble.length === 0) {
    return false;
  }

  if (nibble[0] === '0' && nibble !== '0') {
    return false;
  }

  if (!nibble.match(/^\d+$/)) {
    return false;
  }

  var numeric = +nibble | 0;
  return numeric >= 0 && numeric <= 255;
};

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/macAddress.js":
/*!*************************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/macAddress.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default() {
  var separator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ':';
  return (0, _common.withParams)({
    type: 'macAddress'
  }, function (value) {
    if (!(0, _common.req)(value)) {
      return true;
    }

    if (typeof value !== 'string') {
      return false;
    }

    var parts = typeof separator === 'string' && separator !== '' ? value.split(separator) : value.length === 12 || value.length === 16 ? value.match(/.{2}/g) : null;
    return parts !== null && (parts.length === 6 || parts.length === 8) && parts.every(hexValid);
  });
};

exports["default"] = _default;

var hexValid = function hexValid(hex) {
  return hex.toLowerCase().match(/^[0-9a-f]{2}$/);
};

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/maxLength.js":
/*!************************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/maxLength.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(length) {
  return (0, _common.withParams)({
    type: 'maxLength',
    max: length
  }, function (value) {
    return !(0, _common.req)(value) || (0, _common.len)(value) <= length;
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/maxValue.js":
/*!***********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/maxValue.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(max) {
  return (0, _common.withParams)({
    type: 'maxValue',
    max: max
  }, function (value) {
    return !(0, _common.req)(value) || (!/\s/.test(value) || value instanceof Date) && +value <= +max;
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/minLength.js":
/*!************************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/minLength.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(length) {
  return (0, _common.withParams)({
    type: 'minLength',
    min: length
  }, function (value) {
    return !(0, _common.req)(value) || (0, _common.len)(value) >= length;
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/minValue.js":
/*!***********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/minValue.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(min) {
  return (0, _common.withParams)({
    type: 'minValue',
    min: min
  }, function (value) {
    return !(0, _common.req)(value) || (!/\s/.test(value) || value instanceof Date) && +value >= +min;
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/not.js":
/*!******************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/not.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(validator) {
  return (0, _common.withParams)({
    type: 'not'
  }, function (value, vm) {
    return !(0, _common.req)(value) || !validator.call(this, value, vm);
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/numeric.js":
/*!**********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/numeric.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = (0, _common.regex)('numeric', /^[0-9]*$/);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/or.js":
/*!*****************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/or.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default() {
  for (var _len = arguments.length, validators = new Array(_len), _key = 0; _key < _len; _key++) {
    validators[_key] = arguments[_key];
  }

  return (0, _common.withParams)({
    type: 'or'
  }, function () {
    var _this = this;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return validators.length > 0 && validators.reduce(function (valid, fn) {
      return valid || fn.apply(_this, args);
    }, false);
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/required.js":
/*!***********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/required.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = (0, _common.withParams)({
  type: 'required'
}, function (value) {
  if (typeof value === 'string') {
    return (0, _common.req)(value.trim());
  }

  return (0, _common.req)(value);
});

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/requiredIf.js":
/*!*************************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/requiredIf.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(prop) {
  return (0, _common.withParams)({
    type: 'requiredIf',
    prop: prop
  }, function (value, parentVm) {
    return (0, _common.ref)(prop, this, parentVm) ? (0, _common.req)(value) : true;
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/requiredUnless.js":
/*!*****************************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/requiredUnless.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(prop) {
  return (0, _common.withParams)({
    type: 'requiredUnless',
    prop: prop
  }, function (value, parentVm) {
    return !(0, _common.ref)(prop, this, parentVm) ? (0, _common.req)(value) : true;
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/sameAs.js":
/*!*********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/sameAs.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(equalTo) {
  return (0, _common.withParams)({
    type: 'sameAs',
    eq: equalTo
  }, function (value, parentVm) {
    return value === (0, _common.ref)(equalTo, this, parentVm);
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/url.js":
/*!******************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/url.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var urlRegex = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;

var _default = (0, _common.regex)('url', urlRegex);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/withParams.js":
/*!**************************************************!*\
  !*** ./node_modules/vuelidate/lib/withParams.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var withParams = process.env.BUILD === 'web' ? (__webpack_require__(/*! ./withParamsBrowser */ "./node_modules/vuelidate/lib/withParamsBrowser.js").withParams) : (__webpack_require__(/*! ./params */ "./node_modules/vuelidate/lib/params.js").withParams);
var _default = withParams;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/withParamsBrowser.js":
/*!*********************************************************!*\
  !*** ./node_modules/vuelidate/lib/withParamsBrowser.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.withParams = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var root = typeof window !== 'undefined' ? window : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : {};

var fakeWithParams = function fakeWithParams(paramsOrClosure, maybeValidator) {
  if (_typeof(paramsOrClosure) === 'object' && maybeValidator !== undefined) {
    return maybeValidator;
  }

  return paramsOrClosure(function () {});
};

var withParams = root.vuelidate ? root.vuelidate.withParams : fakeWithParams;
exports.withParams = withParams;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvcmVzb3VyY2VzX2pzX2NvbXBvbmVudHNfTXVuaWNpcGFsaXR5X3Z1ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLGdIQUErQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNtT0c7QUFDSTtBQUNuQjtBQUN1QztBQUUxRSxpRUFBZTtBQUNmQTtBQUFBO0FBQ0FDLGdCQURBO0FBRUFDLG1CQUZBO0FBR0FDLHlCQUhBO0FBSUFDLGdCQUNBO0FBQUFDO0FBQUFDO0FBQUEsT0FEQSxFQUVBO0FBQUFEO0FBQUFDO0FBQUEsT0FGQSxFQUdBO0FBQUFEO0FBQUFDO0FBQUEsT0FIQSxFQUlBO0FBQUFEO0FBQUFDO0FBQUEsT0FKQSxFQUtBO0FBQUFEO0FBQUFDO0FBQUEsT0FMQSxFQU1BO0FBQUFEO0FBQUFDO0FBQUEsT0FOQSxFQU9BO0FBQUFEO0FBQUFDO0FBQUFDO0FBQUEsT0FQQSxDQUpBO0FBYUFDLGlCQWJBO0FBY0FDLHlCQWRBO0FBZUFDLHFCQWZBO0FBZ0JBQztBQUNBQyw2QkFEQTtBQUVBQyxxQ0FGQTtBQUdBQyxtQkFIQTtBQUlBQyxtQkFKQTtBQUtBQyxrQkFMQTtBQU1BQztBQU5BLE9BaEJBO0FBd0JBQztBQUNBTiw2QkFEQTtBQUVBQyxxQ0FGQTtBQUdBQyxtQkFIQTtBQUlBQyxtQkFKQTtBQUtBQyxrQkFMQTtBQU1BQztBQU5BLE9BeEJBO0FBZ0NBRSxtQkFoQ0E7QUFpQ0FDLDJCQWpDQTtBQWtDQUMsc0JBbENBO0FBbUNBQyxxQkFu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O0FBQ04sZUFBZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQ7QUFDMUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFVBQVU7QUFDVjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUNBQXFDLGNBQWM7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLG1CQUFtQjtBQUNwRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLGtCQUFrQjs7QUFFbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGdCQUFnQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsS0FBMEIsb0JBQW9CLENBQUU7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDanZCMkY7QUFDM0I7QUFDTDs7O0FBRzNEO0FBQ0EsQ0FBNkY7QUFDN0YsZ0JBQWdCLHVHQUFVO0FBQzFCLEVBQUUsa0ZBQU07QUFDUixFQUFFLG9GQUFNO0FBQ1IsRUFBRSw2RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ0EsaUVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q3VNLENBQUMsaUVBQWUsaU5BQUcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FFQTFPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sU0FBUyxrQkFBa0I7QUFDakM7QUFDQTtBQUNBLGlCQUFpQix1Q0FBdUM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixTQUFTLFlBQVk7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxzQ0FBc0M7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLFNBQVMsZ0JBQWdCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsYUFBYTtBQUN4RSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELDJCQUEyQjtBQUM5RSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBLDZDQUE2QztBQUM3QywyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0IsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQSwyQkFBMkI7QUFDM0IseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxnQkFBZ0I7QUFDdkQsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRCxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDtBQUNBO0FBQ0EscURBQXFEO0FBQ3JELG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1EO0FBQ25ELGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZELHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRCxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRCxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RCxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDtBQUNBO0FBQ0EscURBQXFEO0FBQ3JELG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1EO0FBQ25ELGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZELHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQsbURBQW1EO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRCxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRCxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7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QUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLHlDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQztBQUNGLDRDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQztBQUNGLHVDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQztBQUNGLDJDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQztBQUNGLDJDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQztBQUNGLHlDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQztBQUNGLGVBQWU7QUFDZiwyQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7QUFDRiw2Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7QUFDRiw4Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7QUFDRiw2Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7QUFDRiw0Q0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7QUFDRiw2Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7QUFDRiw0Q0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7QUFDRix1Q0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7QUFDRiwyQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7QUFDRixzQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7QUFDRiw0Q0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7QUFDRiw4Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7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O0FBRWIsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWU7QUFDZixpQkFBaUIsT0FBTyx1QkFBdUIsZ0hBQXlDLEdBQUcsMEZBQThCO0FBQ3pIO0FBQ0Esa0JBQWU7Ozs7Ozs7Ozs7O0FDUkY7O0FBRWIsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWtCOztBQUVsQix3QkFBd0IsMkJBQTJCLDJFQUEyRSxrQ0FBa0Msd0JBQXdCLE9BQU8sa0NBQWtDLG1JQUFtSTs7QUFFcFcsMkRBQTJELHFCQUFNLG1CQUFtQixxQkFBTTs7QUFFMUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUNBQXVDO0FBQ3ZDOztBQUVBO0FBQ0Esa0JBQWtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9NdW5pY2lwYWxpdHkudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9hcGlzL2RlcGFydG1lbnRBcGkuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2FwaXMvbXVuaWNpcGFsaXR5QXBpLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9saWJzL2Z1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9NdW5pY2lwYWxpdHkudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL011bmljaXBhbGl0eS52dWU/NzJhNSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9NdW5pY2lwYWxpdHkudnVlPzkxZDYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvTXVuaWNpcGFsaXR5LnZ1ZT83Njk2Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9hbHBoYS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL2FscGhhTnVtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvYW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvYmV0d2Vlbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL2RlY2ltYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9lbWFpbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvaW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL2lwQWRkcmVzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL21hY0FkZHJlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9tYXhMZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9tYXhWYWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL21pbkxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL21pblZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvbm90LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvbnVtZXJpYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL29yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvcmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9yZXF1aXJlZElmLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvcmVxdWlyZWRVbmxlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9zYW1lQXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy91cmwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvd2l0aFBhcmFtcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi93aXRoUGFyYW1zQnJvd3Nlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgZGF0YS1hcHA+XHJcbiAgICA8YWxlcnQtdGltZS1vdXRcclxuICAgICAgOnJlZGlyZWN0PVwicmVkaXJlY3RTZXNzaW9uRmluaXNoZWRcIlxyXG4gICAgICBAcmVkaXJlY3Q9XCJ1cGRhdGVUaW1lT3V0KCRldmVudClcIlxyXG4gICAgLz5cclxuICAgIDxhbGVydFxyXG4gICAgICA6dGV4dD1cInRleHRBbGVydFwiXHJcbiAgICAgIDpldmVudD1cImFsZXJ0RXZlbnRcIlxyXG4gICAgICA6c2hvdz1cInNob3dBbGVydFwiXHJcbiAgICAgIEBzaG93LWFsZXJ0PVwidXBkYXRlQWxlcnQoJGV2ZW50KVwiXHJcbiAgICAgIGNsYXNzPVwibWItMlwiXHJcbiAgICAvPlxyXG4gICAgPHYtZGF0YS10YWJsZVxyXG4gICAgICA6aGVhZGVycz1cImhlYWRlcnNcIlxyXG4gICAgICA6aXRlbXM9XCJyZWNvcmRzRmlsdGVyZWRcIlxyXG4gICAgICBzb3J0LWJ5PVwibmFtZVwiXHJcbiAgICAgIGNsYXNzPVwiZWxldmF0aW9uLTMgc2hhZG93IHAtMyBtdC0zXCJcclxuICAgID5cclxuICAgICAgPHRlbXBsYXRlIHYtc2xvdDp0b3A+XHJcbiAgICAgICAgPHYtdG9vbGJhciBmbGF0PlxyXG4gICAgICAgICAgPHYtdG9vbGJhci10aXRsZT5NdW5pY2lwaW9zPC92LXRvb2xiYXItdGl0bGU+XHJcbiAgICAgICAgICA8di1zcGFjZXI+PC92LXNwYWNlcj5cclxuICAgICAgICAgIDx2LWRpYWxvZyB2LW1vZGVsPVwiZGlhbG9nXCIgbWF4LXdpZHRoPVwiNjAwcHhcIiBwZXJzaXN0ZW50PlxyXG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmFjdGl2YXRvcj1cInsgb24sIGF0dHJzIH1cIj5cclxuICAgICAgICAgICAgICA8di1yb3c+XHJcbiAgICAgICAgICAgICAgICA8di1jb2wgYWxpZ249XCJlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgPHYtYnRuXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtYi0yIGJ0bi1ub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHYtYmluZD1cImF0dHJzXCJcclxuICAgICAgICAgICAgICAgICAgICB2LW9uPVwib25cIlxyXG4gICAgICAgICAgICAgICAgICAgIHJvdW5kZWRcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEFncmVnYXJcclxuICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cclxuICAgICAgICAgICAgICAgIDwvdi1jb2w+XHJcbiAgICAgICAgICAgICAgICA8di1jb2xcclxuICAgICAgICAgICAgICAgICAgeHM9XCI2XCJcclxuICAgICAgICAgICAgICAgICAgc209XCI2XCJcclxuICAgICAgICAgICAgICAgICAgbWQ9XCI2XCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJkLW5vbmUgZC1tZC1ibG9jayBkLWxnLWJsb2NrXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGRlbnNlXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJCdXNjYXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwic2VhcmNoXCJcclxuICAgICAgICAgICAgICAgICAgICBAa2V5dXA9XCJzZWFyY2hWYWx1ZSgpXCJcclxuICAgICAgICAgICAgICAgICAgPjwvdi10ZXh0LWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPC92LWNvbD5cclxuICAgICAgICAgICAgICA8L3Ytcm93PlxyXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICA8di1jYXJkIGNsYXNzPVwiZmxleGNhcmRcIiBoZWlnaHQ9XCIxMDAlXCI+XHJcbiAgICAgICAgICAgICAgPHYtY2FyZC10aXRsZT5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cIm14LWF1dG8gcHQtMyBtYi0zIHRleHQtY2VudGVyIGJsYWNrLXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICB7eyBmb3JtVGl0bGUgfX1cclxuICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgPC92LWNhcmQtdGl0bGU+XHJcblxyXG4gICAgICAgICAgICAgIDx2LWNhcmQtdGV4dD5cclxuICAgICAgICAgICAgICAgIDx2LWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgPCEtLSBGb3JtIC0tPlxyXG4gICAgICAgICAgICAgICAgICA8IS0tIERlcGFydG1lbnQgTmFtZSAtLT5cclxuICAgICAgICAgICAgICAgICAgPHYtcm93IHYtaWY9XCJkZXBhcnRtZW50cy5sZW5ndGggPiAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHYtY29sIGNvbHM9XCIxMlwiIHNtPVwiNlwiIG1kPVwiNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJhc2Utc2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGVwYXJ0YW1lbnRvc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWwudHJpbT1cIiR2LmVkaXRlZEl0ZW0uZGVwYXJ0bWVudF9uYW1lLiRtb2RlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDppdGVtcz1cImRlcGFydG1lbnRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbT1cImRlcGFydG1lbnRfbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDp2YWxpZGF0aW9uPVwiJHYuZWRpdGVkSXRlbS5kZXBhcnRtZW50X25hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3YtY29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gRGVwYXJ0bWVudCBOYW1lIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gTXVuaWNpcGFsaXR5IE5hbWUtLT5cclxuICAgICAgICAgICAgICAgICAgICA8di1jb2wgY29scz1cIjEyXCIgc209XCI2XCIgbWQ9XCI2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YmFzZS1pbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk5vbWJyZSBtdW5pY2lwaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiJHYuZWRpdGVkSXRlbS5tdW5pY2lwYWxpdHlfbmFtZS4kbW9kZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6dmFsaWRhdGlvbj1cIiR2LmVkaXRlZEl0ZW0ubXVuaWNpcGFsaXR5X25hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uVGV4dFR5cGU9XCJkZWZhdWx0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOnZhbGlkYXRpb25zSW5wdXQ9XCJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5MZW5ndGg6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC92LWNvbD5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIE11bmljaXBhbGl0eSBOYW1lLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBNdW4gbWluIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDx2LWNvbCBjb2xzPVwiMTJcIiBzbT1cIjZcIiBtZD1cIjZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxiYXNlLWlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTm9tYnJlIG11bmljaXBpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCIkdi5lZGl0ZWRJdGVtLm11bl9taW4uJG1vZGVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOnZhbGlkYXRpb249XCIkdi5lZGl0ZWRJdGVtLm11bl9taW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uVGV4dFR5cGU9XCJkZWZhdWx0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOnZhbGlkYXRpb25zSW5wdXQ9XCJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5MZW5ndGg6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC92LWNvbD5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIE11biBtaW4gLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBNdW4gbWF5IC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDx2LWNvbCBjb2xzPVwiMTJcIiBzbT1cIjZcIiBtZD1cIjZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxiYXNlLWlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTm9tYnJlIG11bmljaXBpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCIkdi5lZGl0ZWRJdGVtLm11bl9tYXkuJG1vZGVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOnZhbGlkYXRpb249XCIkdi5lZGl0ZWRJdGVtLm11bl9tYXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uVGV4dFR5cGU9XCJkZWZhdWx0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOnZhbGlkYXRpb25zSW5wdXQ9XCJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5MZW5ndGg6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC92LWNvbD5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIE11biBtYXkgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBkbV9jb2QgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHYtY29sIGNvbHM9XCIxMlwiIHNtPVwiNlwiIG1kPVwiNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJhc2UtaW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJOb21icmUgbXVuaWNpcGlvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cIiR2LmVkaXRlZEl0ZW0uZG1fY29kLiRtb2RlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDp2YWxpZGF0aW9uPVwiJHYuZWRpdGVkSXRlbS5kbV9jb2RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uVGV4dFR5cGU9XCJkZWZhdWx0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOnZhbGlkYXRpb25zSW5wdXQ9XCJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5MZW5ndGg6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC92LWNvbD5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIGRtX2NvZCAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIGNvZF9tdW4gLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHYtY29sIGNvbHM9XCIxMlwiIHNtPVwiNlwiIG1kPVwiNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJhc2UtaW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJOb21icmUgbXVuaWNpcGlvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cIiR2LmVkaXRlZEl0ZW0uY29kX211bi4kbW9kZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6dmFsaWRhdGlvbj1cIiR2LmVkaXRlZEl0ZW0uY29kX211blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25UZXh0VHlwZT1cImRlZmF1bHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6dmFsaWRhdGlvbnNJbnB1dD1cIntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1pbkxlbmd0aDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3YtY29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gY29kX211biAtLT5cclxuICAgICAgICAgICAgICAgICAgPC92LXJvdz5cclxuICAgICAgICAgICAgICAgICAgPCEtLSBGb3JtIC0tPlxyXG4gICAgICAgICAgICAgICAgICA8di1yb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPHYtY29sIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8di1idG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJidG4tbm9ybWFsIG5vLXVwcGVyY2FzZSBtdC0zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm91bmRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJzYXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgR3VhcmRhclxyXG4gICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8di1idG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJidG4tbm9ybWFsLWNsb3NlIG5vLXVwcGVyY2FzZSBtdC0zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm91bmRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJjbG9zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENhbmNlbGFyXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgIDwvdi1yb3c+XHJcbiAgICAgICAgICAgICAgICA8L3YtY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDwvdi1jYXJkLXRleHQ+XHJcbiAgICAgICAgICAgIDwvdi1jYXJkPlxyXG4gICAgICAgICAgPC92LWRpYWxvZz5cclxuICAgICAgICAgIDx2LWRpYWxvZyB2LW1vZGVsPVwiZGlhbG9nRGVsZXRlXCIgbWF4LXdpZHRoPVwiNDAwcHhcIj5cclxuICAgICAgICAgICAgPHYtY2FyZCBjbGFzcz1cImgtMTAwXCI+XHJcbiAgICAgICAgICAgICAgPHYtY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiYmxhY2stc2Vjb25kYXJ5IHRleHQtY2VudGVyIG10LTMgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICBFbGltaW5hciByZWdpc3Ryb1xyXG4gICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgIDx2LXJvdz5cclxuICAgICAgICAgICAgICAgICAgPHYtY29sIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHYtYnRuXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImJ0bi1ub3JtYWwgbm8tdXBwZXJjYXNlIG10LTMgbWItMyBwci01IHBsLTUgbXgtYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICByb3VuZGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJkZWxldGVJdGVtQ29uZmlybVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+Q29uZmlybWFyPC92LWJ0blxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8di1idG5cclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiYnRuLW5vcm1hbC1jbG9zZSBuby11cHBlcmNhc2UgbXQtMyBtYi0zXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHJvdW5kZWRcclxuICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImNsb3NlRGVsZXRlXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBDYW5jZWxhclxyXG4gICAgICAgICAgICAgICAgICAgIDwvdi1idG4+XHJcbiAgICAgICAgICAgICAgICAgIDwvdi1jb2w+XHJcbiAgICAgICAgICAgICAgICA8L3Ytcm93PlxyXG4gICAgICAgICAgICAgIDwvdi1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvdi1jYXJkPlxyXG4gICAgICAgICAgPC92LWRpYWxvZz5cclxuICAgICAgICA8L3YtdG9vbGJhcj5cclxuICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgPHRlbXBsYXRlIHYtc2xvdDpbYGl0ZW0uYWN0aW9uc2BdPVwieyBpdGVtIH1cIj5cclxuICAgICAgICA8di1pY29uIHNtYWxsIGNsYXNzPVwibXItMlwiIEBjbGljaz1cImVkaXRJdGVtKGl0ZW0pXCI+IG1kaS1wZW5jaWwgPC92LWljb24+XHJcbiAgICAgICAgPHYtaWNvbiBzbWFsbCBAY2xpY2s9XCJkZWxldGVJdGVtKGl0ZW0pXCI+IG1kaS1kZWxldGUgPC92LWljb24+XHJcbiAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6bm8tZGF0YT5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgY2xhc3M9XCJidG4gYnRuLW5vcm1hbC1zZWNvbmRhcnkgbm8tZGVjb3JhdGlvblwiXHJcbiAgICAgICAgICBAY2xpY2s9XCJpbml0aWFsaXplXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBSZWluaWNpYXJcclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICA8L3YtZGF0YS10YWJsZT5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBkZXBhcnRtZW50QXBpIGZyb20gXCIuLi9hcGlzL2RlcGFydG1lbnRBcGlcIjtcclxuaW1wb3J0IG11bmljaXBhbGl0eUFwaSBmcm9tIFwiLi4vYXBpcy9tdW5pY2lwYWxpdHlBcGlcIjtcclxuaW1wb3J0IGxpYiBmcm9tIFwiLi4vbGlicy9mdW5jdGlvblwiO1xyXG5pbXBvcnQgeyByZXF1aXJlZCwgbWluTGVuZ3RoLCBtYXhMZW5ndGggfSBmcm9tIFwidnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgZGF0YTogKCkgPT4gKHtcclxuICAgIHNlYXJjaDogXCJcIixcclxuICAgIGRpYWxvZzogZmFsc2UsXHJcbiAgICBkaWFsb2dEZWxldGU6IGZhbHNlLFxyXG4gICAgaGVhZGVyczogW1xyXG4gICAgICB7IHRleHQ6IFwiQ8OTRElHT1wiLCB2YWx1ZTogXCJjb2RfbXVuXCIgfSxcclxuICAgICAgeyB0ZXh0OiBcIk5PTUJSRVwiLCB2YWx1ZTogXCJtdW5pY2lwYWxpdHlfbmFtZVwiIH0sXHJcbiAgICAgIHsgdGV4dDogXCJERVBBUlRBTUVOVE9cIiwgdmFsdWU6IFwiZGVwYXJ0bWVudF9uYW1lXCIgfSxcclxuICAgICAgeyB0ZXh0OiBcIk1JTsOaU0NVTEFTXCIsIHZhbHVlOiBcIm11bl9taW5cIiB9LFxyXG4gICAgICB7IHRleHQ6IFwiTUFZVVNDVUxBXCIsIHZhbHVlOiBcIm11bl9tYXlcIiB9LFxyXG4gICAgICB7IHRleHQ6IFwiREVQLU1VTiBDT0RcIiwgdmFsdWU6IFwiZG1fY29kXCIgfSxcclxuICAgICAgeyB0ZXh0OiBcIkFDQ0lPTkVTXCIsIHZhbHVlOiBcImFjdGlvbnNcIiwgc29ydGFibGU6IGZhbHNlIH0sXHJcbiAgICBdLFxyXG4gICAgcmVjb3JkczogW10sXHJcbiAgICByZWNvcmRzRmlsdGVyZWQ6IFtdLFxyXG4gICAgZWRpdGVkSW5kZXg6IC0xLFxyXG4gICAgZWRpdGVkSXRlbToge1xyXG4gICAgICBtdW5pY2lwYWxpdHlfbmFtZTogXCJcIixcclxuICAgICAgZGVwYXJ0bWVudF9uYW1lOiBcIkFodWFjaGFww6FuXCIsXHJcbiAgICAgIG11bl9taW46IFwiXCIsXHJcbiAgICAgIG11bl9tYXk6IFwiXCIsXHJcbiAgICAgIGRtX2NvZDogXCJcIixcclxuICAgICAgY29kX211bjogXCJcIixcclxuICAgIH0sXHJcbiAgICBkZWZhdWx0SXRlbToge1xyXG4gICAgICBtdW5pY2lwYWxpdHlfbmFtZTogXCJcIixcclxuICAgICAgZGVwYXJ0bWVudF9uYW1lOiBcIkFodWFjaGFww6FuXCIsXHJcbiAgICAgIG11bl9taW46IFwiXCIsXHJcbiAgICAgIG11bl9tYXk6IFwiXCIsXHJcbiAgICAgIGRtX2NvZDogXCJcIixcclxuICAgICAgY29kX211bjogXCJcIixcclxuICAgIH0sXHJcbiAgICB0ZXh0QWxlcnQ6IFwiXCIsXHJcbiAgICBhbGVydEV2ZW50OiBcInN1Y2Nlc3NcIixcclxuICAgIHNob3dBbGVydDogZmFsc2UsXHJcbiAgICBkZXBhcnRtZW50czogW10sXHJcbiAgICByZWRpcmVjdFNlc3Npb25GaW5pc2hlZDogZmFsc2UsXHJcbiAgfSksXHJcblxyXG4gIC8vIFZhbGlkYXRpb25zXHJcbiAgdmFsaWRhdGlvbnM6IHtcclxuICAgIGVkaXRlZEl0ZW06IHtcclxuICAgICAgbXVuaWNpcGFsaXR5X25hbWU6IHtcclxuICAgICAgICByZXF1aXJlZCxcclxuICAgICAgICBtaW5MZW5ndGg6IG1pbkxlbmd0aCgxKSxcclxuICAgICAgICBtYXhMZW5ndGg6IG1heExlbmd0aCgxNTApLFxyXG4gICAgICB9LFxyXG4gICAgICBkZXBhcnRtZW50X25hbWU6IHtcclxuICAgICAgICByZXF1aXJlZCxcclxuICAgICAgfSxcclxuICAgICAgbXVuX21pbjoge1xyXG4gICAgICAgIHJlcXVpcmVkLFxyXG4gICAgICAgIG1pbkxlbmd0aDogbWluTGVuZ3RoKDEpLFxyXG4gICAgICAgIG1heExlbmd0aDogbWF4TGVuZ3RoKDE1MCksXHJcbiAgICAgIH0sXHJcbiAgICAgIG11bl9tYXk6IHtcclxuICAgICAgICByZXF1aXJlZCxcclxuICAgICAgICBtaW5MZW5ndGg6IG1pbkxlbmd0aCgxKSxcclxuICAgICAgICBtYXhMZW5ndGg6IG1heExlbmd0aCgxNTApLFxyXG4gICAgICB9LFxyXG4gICAgICBkbV9jb2Q6IHtcclxuICAgICAgICByZXF1aXJlZCxcclxuICAgICAgICBtaW5MZW5ndGg6IG1pbkxlbmd0aCgxKSxcclxuICAgICAgICBtYXhMZW5ndGg6IG1heExlbmd0aCgxNTApLFxyXG4gICAgICB9LFxyXG4gICAgICBjb2RfbXVuOiB7XHJcbiAgICAgICAgcmVxdWlyZWQsXHJcbiAgICAgICAgbWluTGVuZ3RoOiBtaW5MZW5ndGgoMSksXHJcbiAgICAgICAgbWF4TGVuZ3RoOiBtYXhMZW5ndGgoMTUwKSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICAvLyBWYWxpZGF0aW9uc1xyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICBmb3JtVGl0bGUoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmVkaXRlZEluZGV4ID09PSAtMSA/IFwiTnVldm8gcmVnaXN0cm9cIiA6IFwiRWRpdGFyIHJlZ2lzdHJvXCI7XHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIHdhdGNoOiB7XHJcbiAgICBkaWFsb2codmFsKSB7XHJcbiAgICAgIHZhbCB8fCB0aGlzLmNsb3NlKCk7XHJcbiAgICB9LFxyXG4gICAgZGlhbG9nRGVsZXRlKHZhbCkge1xyXG4gICAgICB2YWwgfHwgdGhpcy5jbG9zZURlbGV0ZSgpO1xyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBjcmVhdGVkKCkge1xyXG4gICAgdGhpcy5pbml0aWFsaXplKCk7XHJcbiAgfSxcclxuXHJcbiAgbWV0aG9kczoge1xyXG4gICAgYXN5bmMgaW5pdGlhbGl6ZSgpIHtcclxuICAgICAgdGhpcy5yZWNvcmRzID0gW107XHJcbiAgICAgIHRoaXMucmVjb3Jkc0ZpbHRlcmVkID0gW107XHJcblxyXG4gICAgICBsZXQgcmVxdWVzdHMgPSBbbXVuaWNpcGFsaXR5QXBpLmdldCgpLCBkZXBhcnRtZW50QXBpLmdldCgpXTtcclxuICAgICAgbGV0IHJlc3BvbnNlcyA9IGF3YWl0IFByb21pc2UuYWxsKHJlcXVlc3RzKS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUFsZXJ0KHRydWUsIFwiTm8gZnVlIHBvc2libGUgb2J0ZW5lciBsb3MgcmVnaXN0cm9zLlwiLCBcImZhaWxcIik7XHJcbiAgICAgICAgdGhpcy5yZWRpcmVjdFNlc3Npb25GaW5pc2hlZCA9IGxpYi52ZXJpZnlTZXNzaW9uRmluaXNoZWQoXHJcbiAgICAgICAgICBlcnJvci5yZXNwb25zZS5zdGF0dXMsXHJcbiAgICAgICAgICA0MDFcclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMucmVjb3JkcyA9IHJlc3BvbnNlc1swXS5kYXRhLm11bmljaXBhbGl0aWVzO1xyXG4gICAgICB0aGlzLmRlcGFydG1lbnRzID0gcmVzcG9uc2VzWzFdLmRhdGEuZGVwYXJ0bWVudHM7XHJcblxyXG4gICAgICB0aGlzLnJlY29yZHNGaWx0ZXJlZCA9IHRoaXMucmVjb3JkcztcclxuICAgIH0sXHJcblxyXG4gICAgZWRpdEl0ZW0oaXRlbSkge1xyXG4gICAgICB0aGlzLmRpYWxvZyA9IHRydWU7XHJcbiAgICAgIHRoaXMuZWRpdGVkSW5kZXggPSB0aGlzLnJlY29yZHNGaWx0ZXJlZC5pbmRleE9mKGl0ZW0pO1xyXG4gICAgICB0aGlzLmVkaXRlZEl0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCBpdGVtKTtcclxuICAgICAgdGhpcy4kdi5lZGl0ZWRJdGVtLmRlcGFydG1lbnRfbmFtZS4kbW9kZWwgPVxyXG4gICAgICAgIHRoaXMuZWRpdGVkSXRlbS5kZXBhcnRtZW50X25hbWU7XHJcbiAgICB9LFxyXG5cclxuICAgIGRlbGV0ZUl0ZW0oaXRlbSkge1xyXG4gICAgICB0aGlzLmVkaXRlZEluZGV4ID0gdGhpcy5yZWNvcmRzRmlsdGVyZWQuaW5kZXhPZihpdGVtKTtcclxuICAgICAgdGhpcy5lZGl0ZWRJdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgaXRlbSk7XHJcbiAgICAgIHRoaXMuZGlhbG9nRGVsZXRlID0gdHJ1ZTtcclxuICAgIH0sXHJcblxyXG4gICAgYXN5bmMgZGVsZXRlSXRlbUNvbmZpcm0oKSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IG11bmljaXBhbGl0eUFwaVxyXG4gICAgICAgIC5kZWxldGUoYC8ke3RoaXMuZWRpdGVkSXRlbS5pZH1gKVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgIHRoaXMudXBkYXRlQWxlcnQoXHJcbiAgICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgICAgIFwiTm8gZnVlIHBvc2libGUgZWxpbWluYXIgZWwgcmVnaXN0cm9zLlwiLFxyXG4gICAgICAgICAgICBcImZhaWxcIlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChyZXMuZGF0YS5zdGF0dXMgPT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICB0aGlzLnJlZGlyZWN0U2Vzc2lvbkZpbmlzaGVkID0gbGliLnZlcmlmeVNlc3Npb25GaW5pc2hlZChcclxuICAgICAgICAgIHJlcy5zdGF0dXMsXHJcbiAgICAgICAgICAyMDBcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQWxlcnQodHJ1ZSwgXCJSZWdpc3RybyBlbGltaW5hZG8uXCIsIFwic3VjY2Vzc1wiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUFsZXJ0KHRydWUsIFwiTm8gc2UgcHVkbyBlbGltaW5hciBlbCByZWdpc3Ryby5cIiwgXCJmYWlsXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmFjdGl2YXRlQWxlcnQoKTtcclxuICAgICAgdGhpcy5pbml0aWFsaXplKCk7XHJcblxyXG4gICAgICB0aGlzLmNsb3NlRGVsZXRlKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGNsb3NlKCkge1xyXG4gICAgICB0aGlzLmRpYWxvZyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5lZGl0ZWRJdGVtID0gdGhpcy5kZWZhdWx0SXRlbTtcclxuICAgICAgICB0aGlzLmVkaXRlZEluZGV4ID0gLTE7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBjbG9zZURlbGV0ZSgpIHtcclxuICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZWRpdGVkSXRlbSA9IHRoaXMuZGVmYXVsdEl0ZW07XHJcbiAgICAgICAgdGhpcy5lZGl0ZWRJbmRleCA9IC0xO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuZGlhbG9nRGVsZXRlID0gZmFsc2U7XHJcbiAgICB9LFxyXG5cclxuICAgIGFzeW5jIHNhdmUoKSB7XHJcbiAgICAgIHRoaXMuJHYuJHRvdWNoKCk7XHJcbiAgICAgIGlmICh0aGlzLiR2LiRpbnZhbGlkIHx8IHRoaXMuZWRpdGVkSXRlbS5kZXBhcnRtZW50X25hbWUgPT0gXCJcIikge1xyXG4gICAgICAgIHRoaXMudXBkYXRlQWxlcnQodHJ1ZSwgXCJDYW1wb3Mgb2JsaWdhdG9yaW9zLlwiLCBcImZhaWxcIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5lZGl0ZWRJbmRleCA+IC0xKSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgbXVuaWNpcGFsaXR5QXBpXHJcbiAgICAgICAgICAucHV0KGAvJHt0aGlzLmVkaXRlZEl0ZW0uaWR9YCwgdGhpcy5lZGl0ZWRJdGVtKVxyXG4gICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUFsZXJ0KHRydWUsIFwiTm8gZnVlIHBvc2libGUgY3JlYXIgZWwgcmVnaXN0cm8uXCIsIFwiZmFpbFwiKTtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnJlZGlyZWN0U2Vzc2lvbkZpbmlzaGVkID0gbGliLnZlcmlmeVNlc3Npb25GaW5pc2hlZChcclxuICAgICAgICAgICAgICBlcnJvci5yZXNwb25zZS5zdGF0dXMsXHJcbiAgICAgICAgICAgICAgNDE5XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHJlcy5kYXRhLnN0YXR1cyA9PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVBbGVydChcclxuICAgICAgICAgICAgdHJ1ZSxcclxuICAgICAgICAgICAgXCJSZWdpc3RybyBhbG1hY2VuYWRvIGNvcnJlY3RhbWVudGUuXCIsXHJcbiAgICAgICAgICAgIFwic3VjY2Vzc1wiXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBtdW5pY2lwYWxpdHlBcGlcclxuICAgICAgICAgIC5wb3N0KG51bGwsIHRoaXMuZWRpdGVkSXRlbSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVBbGVydCh0cnVlLCBcIk5vIGZ1ZSBwb3NpYmxlIGNyZWFyIGVsIHJlZ2lzdHJvLlwiLCBcImZhaWxcIik7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAocmVzLmRhdGEuc3RhdHVzID09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICB0aGlzLnVwZGF0ZUFsZXJ0KFxyXG4gICAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICAgICBcIlJlZ2lzdHJvIGFsbWFjZW5hZG8gY29ycmVjdGFtZW50ZS5cIixcclxuICAgICAgICAgICAgXCJzdWNjZXNzXCJcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgdGhpcy5pbml0aWFsaXplKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHNlYXJjaFZhbHVlKCkge1xyXG4gICAgICB0aGlzLnJlY29yZHNGaWx0ZXJlZCA9IFtdO1xyXG5cclxuICAgICAgaWYgKHRoaXMuc2VhcmNoICE9IFwiXCIpIHtcclxuICAgICAgICB0aGlzLnJlY29yZHMuZm9yRWFjaCgocmVjb3JkKSA9PiB7XHJcbiAgICAgICAgICBsZXQgc2VhcmNoQ29uY2F0ID0gXCJcIjtcclxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVjb3JkLm11bmljaXBhbGl0eV9uYW1lLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHNlYXJjaENvbmNhdCArPSByZWNvcmQubXVuaWNpcGFsaXR5X25hbWVbaV0udG9VcHBlckNhc2UoKTtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgIHNlYXJjaENvbmNhdCA9PT0gdGhpcy5zZWFyY2gudG9VcHBlckNhc2UoKSAmJlxyXG4gICAgICAgICAgICAgICF0aGlzLnJlY29yZHNGaWx0ZXJlZC5zb21lKChyZWMpID0+IHJlYyA9PSByZWNvcmQpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgIHRoaXMucmVjb3Jkc0ZpbHRlcmVkLnB1c2gocmVjb3JkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5yZWNvcmRzRmlsdGVyZWQgPSB0aGlzLnJlY29yZHM7XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZUFsZXJ0KHNob3cgPSBmYWxzZSwgdGV4dCA9IFwiQWxlcnRhXCIsIGV2ZW50ID0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgdGhpcy50ZXh0QWxlcnQgPSB0ZXh0O1xyXG4gICAgICB0aGlzLmFsZXJ0RXZlbnQgPSBldmVudDtcclxuICAgICAgdGhpcy5zaG93QWxlcnQgPSBzaG93O1xyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGVUaW1lT3V0KGV2ZW50KSB7XHJcbiAgICAgIHRoaXMucmVkaXJlY3RTZXNzaW9uRmluaXNoZWQgPSBldmVudDtcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBkZXBhcnRtZW50QXBpID0gYXhpb3MuY3JlYXRlKHtcclxuICAgIGJhc2VVUkw6IFwiL2FwaS93ZWIvZGVwYXJ0bWVudFwiLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlcGFydG1lbnRBcGk7XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IG11bmljaXBhbGl0eUFwaSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICBiYXNlVVJMOiBcIi9hcGkvd2ViL211bmljaXBhbGl0eVwiLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG11bmljaXBhbGl0eUFwaTtcclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgdmVyaWZ5U2Vzc2lvbkZpbmlzaGVkOiAoc3RhdHVzLCBjb2RlID0gMjAwKSA9PiB7XHJcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgKi9jb25zb2xlLmxvZyguLi5vb19vbyhgMjMwMDUzODY1M18zXzhfM18yN180YCxzdGF0dXMpKTtcclxuICAgICAgICBpZiAoc3RhdHVzID09IDQxOSB8fCBzdGF0dXMgPT0gNDAxKSB7XHJcbiAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlICovY29uc29sZS5sb2coLi4ub29fb28oYDIzMDA1Mzg2NTNfNV8xMl81XzM3XzRgLFwiTFwiICsgc3RhdHVzKSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9LFxyXG59O1xyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLy8qIGM4IGlnbm9yZSBzdGFydCAqLy8qIGVzbGludC1kaXNhYmxlICovO2Z1bmN0aW9uIG9vX2NtKCl7dHJ5e3JldHVybiAoMCxldmFsKShcImdsb2JhbFRoaXMuX2NvbnNvbGVfbmluamFcIikgfHwgKDAsZXZhbCkoXCIvKiBodHRwczovL2dpdGh1Yi5jb20vd2FsbGFieWpzL2NvbnNvbGUtbmluamEjaG93LWRvZXMtaXQtd29yayAqLyd1c2Ugc3RyaWN0Jzt2YXIgXzB4MmJjYTEyPV8weDQ3NzM7KGZ1bmN0aW9uKF8weDFjYmExMixfMHg1MWViNWEpe3ZhciBfMHgzZTg0YTM9XzB4NDc3MyxfMHg0M2E5N2Q9XzB4MWNiYTEyKCk7d2hpbGUoISFbXSl7dHJ5e3ZhciBfMHgyMDU4NWQ9cGFyc2VJbnQoXzB4M2U4NGEzKDB4MTYwKSkvMHgxKihwYXJzZUludChfMHgzZTg0YTMoMHgxYjEpKS8weDIpKy1wYXJzZUludChfMHgzZTg0YTMoMHhjNCkpLzB4MyoocGFyc2VJbnQoXzB4M2U4NGEzKDB4MTI1KSkvMHg0KStwYXJzZUludChfMHgzZTg0YTMoMHgxYTApKS8weDUqKC1wYXJzZUludChfMHgzZTg0YTMoMHgxMTgpKS8weDYpKy1wYXJzZUludChfMHgzZTg0YTMoMHhjYykpLzB4NyooLXBhcnNlSW50KF8weDNlODRhMygweDEwNikpLzB4OCkrLXBhcnNlSW50KF8weDNlODRhMygweDE5NikpLzB4OSooLXBhcnNlSW50KF8weDNlODRhMygweGYyKSkvMHhhKStwYXJzZUludChfMHgzZTg0YTMoMHgxNmYpKS8weGIrLXBhcnNlSW50KF8weDNlODRhMygweDEyYykpLzB4YztpZihfMHgyMDU4NWQ9PT1fMHg1MWViNWEpYnJlYWs7ZWxzZSBfMHg0M2E5N2RbJ3B1c2gnXShfMHg0M2E5N2RbJ3NoaWZ0J10oKSk7fWNhdGNoKF8weDUzNWMxNyl7XzB4NDNhOTdkWydwdXNoJ10oXzB4NDNhOTdkWydzaGlmdCddKCkpO319fShfMHgxOTgxLDB4Mzg2M2EpKTt2YXIgSz1PYmplY3RbJ2NyZWF0ZSddLFE9T2JqZWN0WydkZWZpbmVQcm9wZXJ0eSddLEc9T2JqZWN0WydnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InXSxlZT1PYmplY3RbXzB4MmJjYTEyKDB4ZjEpXSx0ZT1PYmplY3RbXzB4MmJjYTEyKDB4MTRkKV0sbmU9T2JqZWN0W18weDJiY2ExMigweDE0OCldWydoYXNPd25Qcm9wZXJ0eSddLHJlPShfMHgxYjAxYWYsXzB4OWMyYjUzLF8weDIzMmJiOCxfMHgzMjk5YTkpPT57dmFyIF8weDQ3MjRjOT1fMHgyYmNhMTI7aWYoXzB4OWMyYjUzJiZ0eXBlb2YgXzB4OWMyYjUzPT1fMHg0NzI0YzkoMHgxM2YpfHx0eXBlb2YgXzB4OWMyYjUzPT1fMHg0NzI0YzkoMHgxYWIpKXtmb3IobGV0IF8weDJmNGEyZiBvZiBlZShfMHg5YzJiNTMpKSFuZVtfMHg0NzI0YzkoMHgxMGMpXShfMHgxYjAxYWYsXzB4MmY0YTJmKSYmXzB4MmY0YTJmIT09XzB4MjMyYmI4JiZRKF8weDFiMDFhZixfMHgyZjRhMmYseydnZXQnOigpPT5fMHg5YzJiNTNbXzB4MmY0YTJmXSwnZW51bWVyYWJsZSc6IShfMHgzMjk5YTk9RyhfMHg5YzJiNTMsXzB4MmY0YTJmKSl8fF8weDMyOTlhOVtfMHg0NzI0YzkoMHhlZSldfSk7fXJldHVybiBfMHgxYjAxYWY7fSxWPShfMHg1M2FjYzcsXzB4NGQxZmY4LF8weDRlOTAwOSk9PihfMHg0ZTkwMDk9XzB4NTNhY2M3IT1udWxsP0sodGUoXzB4NTNhY2M3KSk6e30scmUoXzB4NGQxZmY4fHwhXzB4NTNhY2M3fHwhXzB4NTNhY2M3W18weDJiY2ExMigweDFhYSldP1EoXzB4NGU5MDA5LF8weDJiY2ExMigweGY2KSx7J3ZhbHVlJzpfMHg1M2FjYzcsJ2VudW1lcmFibGUnOiEweDB9KTpfMHg0ZTkwMDksXzB4NTNhY2M3KSksWj1jbGFzc3tjb25zdHJ1Y3RvcihfMHg1ZWRhNDAsXzB4MmJmZmJmLF8weDViMWJjZSxfMHgzNDUyNjUsXzB4MmI4MTBhLF8weDI0ODkzOSl7dmFyIF8weDM2NjMxND1fMHgyYmNhMTIsXzB4MWIyNDM5LF8weDUzYWFkMixfMHgxYmY3ZDEsXzB4MTZhZWJlO3RoaXNbXzB4MzY2MzE0KDB4MTJhKV09XzB4NWVkYTQwLHRoaXNbJ2hvc3QnXT1fMHgyYmZmYmYsdGhpc1sncG9ydCddPV8weDViMWJjZSx0aGlzW18weDM2NjMxNCgweDExNildPV8weDM0NTI2NSx0aGlzW18weDM2NjMxNCgweGRlKV09XzB4MmI4MTBhLHRoaXNbXzB4MzY2MzE0KDB4MTBlKV09XzB4MjQ4OTM5LHRoaXNbXzB4MzY2MzE0KDB4ZjcpXT0hMHgwLHRoaXNbXzB4MzY2MzE0KDB4MWI4KV09ITB4MCx0aGlzW18weDM2NjMxNCgweDEyNCldPSEweDEsdGhpc1snX2Nvbm5lY3RpbmcnXT0hMHgxLHRoaXNbXzB4MzY2MzE0KDB4ZTApXT0oKF8weDUzYWFkMj0oXzB4MWIyNDM5PV8weDVlZGE0MFtfMHgzNjYzMTQoMHhkZCldKT09bnVsbD92b2lkIDB4MDpfMHgxYjI0MzlbXzB4MzY2MzE0KDB4MTgzKV0pPT1udWxsP3ZvaWQgMHgwOl8weDUzYWFkMltfMHgzNjYzMTQoMHgxYjUpXSk9PT1fMHgzNjYzMTQoMHgxN2EpLHRoaXNbXzB4MzY2MzE0KDB4MWFkKV09ISgoXzB4MTZhZWJlPShfMHgxYmY3ZDE9dGhpc1tfMHgzNjYzMTQoMHgxMmEpXVtfMHgzNjYzMTQoMHhkZCldKT09bnVsbD92b2lkIDB4MDpfMHgxYmY3ZDFbJ3ZlcnNpb25zJ10pIT1udWxsJiZfMHgxNmFlYmVbXzB4MzY2MzE0KDB4MThkKV0pJiYhdGhpc1tfMHgzNjYzMTQoMHhlMCldLHRoaXNbXzB4MzY2MzE0KDB4MTE1KV09bnVsbCx0aGlzW18weDM2NjMxNCgweDE2MyldPTB4MCx0aGlzWydfbWF4Q29ubmVjdEF0dGVtcHRDb3VudCddPTB4MTQsdGhpc1tfMHgzNjYzMTQoMHgxODkpXT0naHR0cHM6Ly90aW55dXJsLmNvbS8zN3g4Yjc5dCcsdGhpc1tfMHgzNjYzMTQoMHgxMGQpXT0odGhpc1snX2luQnJvd3NlciddP18weDM2NjMxNCgweDEyMik6J0NvbnNvbGVcXFxceDIwTmluamFcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMHNlbmRcXFxceDIwbG9ncyxcXFxceDIwcmVzdGFydGluZ1xcXFx4MjB0aGVcXFxceDIwcHJvY2Vzc1xcXFx4MjBtYXlcXFxceDIwaGVscDtcXFxceDIwYWxzb1xcXFx4MjBzZWVcXFxceDIwJykrdGhpc1tfMHgzNjYzMTQoMHgxODkpXTt9YXN5bmNbXzB4MmJjYTEyKDB4MTlkKV0oKXt2YXIgXzB4NGJjMTY1PV8weDJiY2ExMixfMHgzMDc0YTAsXzB4MmM3ZWE2O2lmKHRoaXNbJ19XZWJTb2NrZXRDbGFzcyddKXJldHVybiB0aGlzW18weDRiYzE2NSgweDExNSldO2xldCBfMHgyMzViOWM7aWYodGhpc1snX2luQnJvd3NlciddfHx0aGlzW18weDRiYzE2NSgweGUwKV0pXzB4MjM1YjljPXRoaXNbXzB4NGJjMTY1KDB4MTJhKV1bJ1dlYlNvY2tldCddO2Vsc2V7aWYoKF8weDMwNzRhMD10aGlzW18weDRiYzE2NSgweDEyYSldWydwcm9jZXNzJ10pIT1udWxsJiZfMHgzMDc0YTBbXzB4NGJjMTY1KDB4ZTIpXSlfMHgyMzViOWM9KF8weDJjN2VhNj10aGlzW18weDRiYzE2NSgweDEyYSldWydwcm9jZXNzJ10pPT1udWxsP3ZvaWQgMHgwOl8weDJjN2VhNltfMHg0YmMxNjUoMHhlMildO2Vsc2UgdHJ5e2xldCBfMHg0ZTRhODk9YXdhaXQgaW1wb3J0KCdwYXRoJyk7XzB4MjM1YjljPShhd2FpdCBpbXBvcnQoKGF3YWl0IGltcG9ydChfMHg0YmMxNjUoMHgxYTgpKSlbXzB4NGJjMTY1KDB4MTE0KV0oXzB4NGU0YTg5Wydqb2luJ10odGhpc1snbm9kZU1vZHVsZXMnXSxfMHg0YmMxNjUoMHhjOCkpKVtfMHg0YmMxNjUoMHgxMTkpXSgpKSlbXzB4NGJjMTY1KDB4ZjYpXTt9Y2F0Y2h7dHJ5e18weDIzNWI5Yz1yZXF1aXJlKHJlcXVpcmUoXzB4NGJjMTY1KDB4MTZiKSlbXzB4NGJjMTY1KDB4ZTEpXSh0aGlzWydub2RlTW9kdWxlcyddLCd3cycpKTt9Y2F0Y2h7dGhyb3cgbmV3IEVycm9yKF8weDRiYzE2NSgweGQ3KSk7fX19cmV0dXJuIHRoaXNbXzB4NGJjMTY1KDB4MTE1KV09XzB4MjM1YjljLF8weDIzNWI5Yzt9WydfY29ubmVjdFRvSG9zdE5vdyddKCl7dmFyIF8weDUxZmJiYz1fMHgyYmNhMTI7dGhpc1tfMHg1MWZiYmMoMHgxMDEpXXx8dGhpc1tfMHg1MWZiYmMoMHgxMjQpXXx8dGhpc1snX2Nvbm5lY3RBdHRlbXB0Q291bnQnXT49dGhpc1tfMHg1MWZiYmMoMHgxNWMpXXx8KHRoaXNbJ19hbGxvd2VkVG9Db25uZWN0T25TZW5kJ109ITB4MSx0aGlzWydfY29ubmVjdGluZyddPSEweDAsdGhpc1snX2Nvbm5lY3RBdHRlbXB0Q291bnQnXSsrLHRoaXNbXzB4NTFmYmJjKDB4MTMxKV09bmV3IFByb21pc2UoKF8weDVkNjg1NSxfMHg1ZDEzMmQpPT57dmFyIF8weDM3MTNjZD1fMHg1MWZiYmM7dGhpc1tfMHgzNzEzY2QoMHgxOWQpXSgpWyd0aGVuJ10oXzB4MTY2MDk5PT57dmFyIF8weGFiNDBkMz1fMHgzNzEzY2Q7bGV0IF8weDEwNTdiMj1uZXcgXzB4MTY2MDk5KF8weGFiNDBkMygweDE5MykrKCF0aGlzWydfaW5Ccm93c2VyJ10mJnRoaXNbXzB4YWI0MGQzKDB4ZGUpXT9fMHhhYjQwZDMoMHgxNDYpOnRoaXNbXzB4YWI0MGQzKDB4ZWIpXSkrJzonK3RoaXNbXzB4YWI0MGQzKDB4MTQ5KV0pO18weDEwNTdiMltfMHhhYjQwZDMoMHgxOGMpXT0oKT0+e3ZhciBfMHgyZWUwZjI9XzB4YWI0MGQzO3RoaXNbJ19hbGxvd2VkVG9TZW5kJ109ITB4MSx0aGlzW18weDJlZTBmMigweDE3NyldKF8weDEwNTdiMiksdGhpc1tfMHgyZWUwZjIoMHhjOSldKCksXzB4NWQxMzJkKG5ldyBFcnJvcihfMHgyZWUwZjIoMHgxOWEpKSk7fSxfMHgxMDU3YjJbXzB4YWI0MGQzKDB4MTNiKV09KCk9Pnt2YXIgXzB4NDI4NzM5PV8weGFiNDBkMzt0aGlzW18weDQyODczOSgweDFhZCldfHxfMHgxMDU3YjJbXzB4NDI4NzM5KDB4MTY1KV0mJl8weDEwNTdiMltfMHg0Mjg3MzkoMHgxNjUpXVtfMHg0Mjg3MzkoMHgxN2MpXSYmXzB4MTA1N2IyW18weDQyODczOSgweDE2NSldWyd1bnJlZiddKCksXzB4NWQ2ODU1KF8weDEwNTdiMik7fSxfMHgxMDU3YjJbXzB4YWI0MGQzKDB4MTk4KV09KCk9Pnt2YXIgXzB4MTlmNDIxPV8weGFiNDBkMzt0aGlzW18weDE5ZjQyMSgweDFiOCldPSEweDAsdGhpc1snX2Rpc3Bvc2VXZWJzb2NrZXQnXShfMHgxMDU3YjIpLHRoaXNbJ19hdHRlbXB0VG9SZWNvbm5lY3RTaG9ydGx5J10oKTt9LF8weDEwNTdiMltfMHhhYjQwZDMoMHhkOCldPV8weDNkM2IzYj0+e3ZhciBfMHhiMGUzZDM9XzB4YWI0MGQzO3RyeXtpZighKF8weDNkM2IzYiE9bnVsbCYmXzB4M2QzYjNiWydkYXRhJ10pfHwhdGhpc1tfMHhiMGUzZDMoMHgxMGUpXSlyZXR1cm47bGV0IF8weDM2Yjg1Mz1KU09OW18weGIwZTNkMygweDExYyldKF8weDNkM2IzYltfMHhiMGUzZDMoMHgxNTgpXSk7dGhpc1tfMHhiMGUzZDMoMHgxMGUpXShfMHgzNmI4NTNbXzB4YjBlM2QzKDB4MTk5KV0sXzB4MzZiODUzWydhcmdzJ10sdGhpc1tfMHhiMGUzZDMoMHgxMmEpXSx0aGlzWydfaW5Ccm93c2VyJ10pO31jYXRjaHt9fTt9KVtfMHgzNzEzY2QoMHgxODcpXShfMHg1NTQwMDM9Pih0aGlzW18weDM3MTNjZCgweDEyNCldPSEweDAsdGhpc1snX2Nvbm5lY3RpbmcnXT0hMHgxLHRoaXNbXzB4MzcxM2NkKDB4MWI4KV09ITB4MSx0aGlzWydfYWxsb3dlZFRvU2VuZCddPSEweDAsdGhpc1tfMHgzNzEzY2QoMHgxNjMpXT0weDAsXzB4NTU0MDAzKSlbJ2NhdGNoJ10oXzB4Mzc0NzhlPT4odGhpc1tfMHgzNzEzY2QoMHgxMjQpXT0hMHgxLHRoaXNbJ19jb25uZWN0aW5nJ109ITB4MSxjb25zb2xlWyd3YXJuJ10oXzB4MzcxM2NkKDB4MTg0KSt0aGlzWydfd2ViU29ja2V0RXJyb3JEb2NzTGluayddKSxfMHg1ZDEzMmQobmV3IEVycm9yKF8weDM3MTNjZCgweDE4NikrKF8weDM3NDc4ZSYmXzB4Mzc0NzhlW18weDM3MTNjZCgweDEwMildKSkpKSk7fSkpO31bXzB4MmJjYTEyKDB4MTc3KV0oXzB4Mzg2NjM4KXt2YXIgXzB4NWJhMzA0PV8weDJiY2ExMjt0aGlzW18weDViYTMwNCgweDEyNCldPSEweDEsdGhpc1tfMHg1YmEzMDQoMHgxMDEpXT0hMHgxO3RyeXtfMHgzODY2MzhbXzB4NWJhMzA0KDB4MTk4KV09bnVsbCxfMHgzODY2MzhbJ29uZXJyb3InXT1udWxsLF8weDM4NjYzOFsnb25vcGVuJ109bnVsbDt9Y2F0Y2h7fXRyeXtfMHgzODY2MzhbXzB4NWJhMzA0KDB4MTY4KV08MHgyJiZfMHgzODY2MzhbXzB4NWJhMzA0KDB4ZGYpXSgpO31jYXRjaHt9fVtfMHgyYmNhMTIoMHhjOSldKCl7dmFyIF8weDI5NGVmMT1fMHgyYmNhMTI7Y2xlYXJUaW1lb3V0KHRoaXNbJ19yZWNvbm5lY3RUaW1lb3V0J10pLCEodGhpc1snX2Nvbm5lY3RBdHRlbXB0Q291bnQnXT49dGhpc1tfMHgyOTRlZjEoMHgxNWMpXSkmJih0aGlzW18weDI5NGVmMSgweGQzKV09c2V0VGltZW91dCgoKT0+e3ZhciBfMHgxNzk2ZWI9XzB4Mjk0ZWYxLF8weDJjNmFkYzt0aGlzWydfY29ubmVjdGVkJ118fHRoaXNbXzB4MTc5NmViKDB4MTAxKV18fCh0aGlzW18weDE3OTZlYigweDEyNyldKCksKF8weDJjNmFkYz10aGlzW18weDE3OTZlYigweDEzMSldKT09bnVsbHx8XzB4MmM2YWRjW18weDE3OTZlYigweDE2MSldKCgpPT50aGlzW18weDE3OTZlYigweGM5KV0oKSkpO30sMHgxZjQpLHRoaXNbXzB4Mjk0ZWYxKDB4ZDMpXVtfMHgyOTRlZjEoMHgxN2MpXSYmdGhpc1tfMHgyOTRlZjEoMHhkMyldW18weDI5NGVmMSgweDE3YyldKCkpO31hc3luY1tfMHgyYmNhMTIoMHgxNzMpXShfMHgxMGYyMTApe3ZhciBfMHg1MmI4OWY9XzB4MmJjYTEyO3RyeXtpZighdGhpc1snX2FsbG93ZWRUb1NlbmQnXSlyZXR1cm47dGhpc1snX2FsbG93ZWRUb0Nvbm5lY3RPblNlbmQnXSYmdGhpc1tfMHg1MmI4OWYoMHgxMjcpXSgpLChhd2FpdCB0aGlzW18weDUyYjg5ZigweDEzMSldKVsnc2VuZCddKEpTT05bXzB4NTJiODlmKDB4MThiKV0oXzB4MTBmMjEwKSk7fWNhdGNoKF8weDViZDczMCl7Y29uc29sZVtfMHg1MmI4OWYoMHgxMzYpXSh0aGlzW18weDUyYjg5ZigweDEwZCldKyc6XFxcXHgyMCcrKF8weDViZDczMCYmXzB4NWJkNzMwW18weDUyYjg5ZigweDEwMildKSksdGhpc1tfMHg1MmI4OWYoMHhmNyldPSEweDEsdGhpc1tfMHg1MmI4OWYoMHhjOSldKCk7fX19O2Z1bmN0aW9uIHEoXzB4MjU1OWY2LF8weDQyOTc3NixfMHgyODZjYjIsXzB4MTg5OWY0LF8weDVkODdjNixfMHgzZjZkNDgsXzB4NTEwMGY2LF8weDM2NzRjOT1pZSl7dmFyIF8weDNjMmE5ND1fMHgyYmNhMTI7bGV0IF8weDFmMDI4ZD1fMHgyODZjYjJbXzB4M2MyYTk0KDB4ZGIpXSgnLCcpW18weDNjMmE5NCgweDE5ZSldKF8weDFiNmY1ND0+e3ZhciBfMHgxYjRkY2Q9XzB4M2MyYTk0LF8weDVlODUyNSxfMHgxNjNhZTAsXzB4MWFjNzA1LF8weDE0YTkwZDt0cnl7aWYoIV8weDI1NTlmNltfMHgxYjRkY2QoMHgxMmQpXSl7bGV0IF8weDQ2M2Q1Nj0oKF8weDE2M2FlMD0oXzB4NWU4NTI1PV8weDI1NTlmNltfMHgxYjRkY2QoMHhkZCldKT09bnVsbD92b2lkIDB4MDpfMHg1ZTg1MjVbJ3ZlcnNpb25zJ10pPT1udWxsP3ZvaWQgMHgwOl8weDE2M2FlMFtfMHgxYjRkY2QoMHgxOGQpXSl8fCgoXzB4MTRhOTBkPShfMHgxYWM3MDU9XzB4MjU1OWY2Wydwcm9jZXNzJ10pPT1udWxsP3ZvaWQgMHgwOl8weDFhYzcwNVtfMHgxYjRkY2QoMHgxODMpXSk9PW51bGw/dm9pZCAweDA6XzB4MTRhOTBkW18weDFiNGRjZCgweDFiNSldKT09PV8weDFiNGRjZCgweDE3YSk7KF8weDVkODdjNj09PV8weDFiNGRjZCgweDFhYyl8fF8weDVkODdjNj09PSdyZW1peCd8fF8weDVkODdjNj09PSdhc3Rybyd8fF8weDVkODdjNj09PV8weDFiNGRjZCgweDE2YSkpJiYoXzB4NWQ4N2M2Kz1fMHg0NjNkNTY/XzB4MWI0ZGNkKDB4MWI5KTpfMHgxYjRkY2QoMHhjYSkpLF8weDI1NTlmNltfMHgxYjRkY2QoMHgxMmQpXT17J2lkJzorbmV3IERhdGUoKSwndG9vbCc6XzB4NWQ4N2M2fSxfMHg1MTAwZjYmJl8weDVkODdjNiYmIV8weDQ2M2Q1NiYmY29uc29sZVtfMHgxYjRkY2QoMHgxOWYpXShfMHgxYjRkY2QoMHgxMmIpKyhfMHg1ZDg3YzZbXzB4MWI0ZGNkKDB4MTQ0KV0oMHgwKVtfMHgxYjRkY2QoMHhjNyldKCkrXzB4NWQ4N2M2W18weDFiNGRjZCgweDEyOSldKDB4MSkpKycsJyxfMHgxYjRkY2QoMHgxYTMpLF8weDFiNGRjZCgweDExMCkpO31sZXQgXzB4MzUwNWYyPW5ldyBaKF8weDI1NTlmNixfMHg0Mjk3NzYsXzB4MWI2ZjU0LF8weDE4OTlmNCxfMHgzZjZkNDgsXzB4MzY3NGM5KTtyZXR1cm4gXzB4MzUwNWYyW18weDFiNGRjZCgweDE3MyldW18weDFiNGRjZCgweDE3ZCldKF8weDM1MDVmMik7fWNhdGNoKF8weDIzZmQyYSl7cmV0dXJuIGNvbnNvbGVbXzB4MWI0ZGNkKDB4MTM2KV0oXzB4MWI0ZGNkKDB4MWIwKSxfMHgyM2ZkMmEmJl8weDIzZmQyYVtfMHgxYjRkY2QoMHgxMDIpXSksKCk9Pnt9O319KTtyZXR1cm4gXzB4NDZhYzAzPT5fMHgxZjAyOGRbJ2ZvckVhY2gnXShfMHg2ZDQzOTg9Pl8weDZkNDM5OChfMHg0NmFjMDMpKTt9ZnVuY3Rpb24gXzB4MTk4MSgpe3ZhciBfMHgxY2MyNTY9WyduYW4nLCdhdXRvRXhwYW5kJywncm9vdEV4cHJlc3Npb24nLCdpc0V4cHJlc3Npb25Ub0V2YWx1YXRlJywnX3R5cGUnLCdfY29ubmVjdGluZycsJ21lc3NhZ2UnLFtcXFwibG9jYWxob3N0XFxcIixcXFwiMTI3LjAuMC4xXFxcIixcXFwiZXhhbXBsZS5jeXByZXNzLmlvXFxcIixcXFwiREVTS1RPUC1PNlZFSUQ1XFxcIixcXFwiMTkyLjE2OC4zNS4xMTdcXFwiXSxcXFwiYzpcXFxcXFxcXFVzZXJzXFxcXFxcXFxXaWxsaWFtXFxcXFxcXFwudnNjb2RlXFxcXFxcXFxleHRlbnNpb25zXFxcXFxcXFx3YWxsYWJ5anMuY29uc29sZS1uaW5qYS0xLjAuMzYxXFxcXFxcXFxub2RlX21vZHVsZXNcXFwiLCd3ZWJwYWNrJywnMTYwMzc2ZnFzVkpXJywncmVwbGFjZScsJ2luZGV4T2YnLCdleHBJZCcsJ3Vua25vd24nLCdTeW1ib2wnLCdjYWxsJywnX3NlbmRFcnJvck1lc3NhZ2UnLCdldmVudFJlY2VpdmVkQ2FsbGJhY2snLCdjb3ZlcmFnZScsJ3NlZVxcXFx4MjBodHRwczovL3Rpbnl1cmwuY29tLzJ2dDhqeHp3XFxcXHgyMGZvclxcXFx4MjBtb3JlXFxcXHgyMGluZm8uJywndHJhY2UnLCdwZXJmX2hvb2tzJywnX2FkZGl0aW9uYWxNZXRhZGF0YScsJ3BhdGhUb0ZpbGVVUkwnLCdfV2ViU29ja2V0Q2xhc3MnLCdub2RlTW9kdWxlcycsJ3BlcmZvcm1hbmNlJywnNDQ5MTBBbmtHVkknLCd0b1N0cmluZycsJ3Jlc29sdmVHZXR0ZXJzJywnZWxlbWVudHMnLCdwYXJzZScsJ2luZGV4JywnY29uY2F0JywnW29iamVjdFxcXFx4MjBEYXRlXScsJ19wXycsJ19zb3J0UHJvcHMnLCdDb25zb2xlXFxcXHgyME5pbmphXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBzZW5kXFxcXHgyMGxvZ3MsXFxcXHgyMHJlZnJlc2hpbmdcXFxceDIwdGhlXFxcXHgyMHBhZ2VcXFxceDIwbWF5XFxcXHgyMGhlbHA7XFxcXHgyMGFsc29cXFxceDIwc2VlXFxcXHgyMCcsJ19hZGRQcm9wZXJ0eScsJ19jb25uZWN0ZWQnLCczODc4ODRlUlRwQW8nLCdfaXNQcmltaXRpdmVUeXBlJywnX2Nvbm5lY3RUb0hvc3ROb3cnLCdfcHJvY2Vzc1RyZWVOb2RlUmVzdWx0Jywnc3Vic3RyJywnZ2xvYmFsJywnJWNcXFxceDIwQ29uc29sZVxcXFx4MjBOaW5qYVxcXFx4MjBleHRlbnNpb25cXFxceDIwaXNcXFxceDIwY29ubmVjdGVkXFxcXHgyMHRvXFxcXHgyMCcsJzI5MzM5NDBWWmRMRmQnLCdfY29uc29sZV9uaW5qYV9zZXNzaW9uJywnYXJncycsJ3Byb3BzJywnY2FwcGVkRWxlbWVudHMnLCdfd3MnLCdhbGxTdHJMZW5ndGgnLCdjYXBwZWRQcm9wcycsJ2hpdHMnLCd0eXBlJywnd2FybicsJ1NldCcsJ19pc1VuZGVmaW5lZCcsJ3BvcCcsJ19jb25zb2xlX25pbmphJywnb25vcGVuJywnaG9zdG5hbWUnLCdfcHJvcGVydHlOYW1lJywnc29tZScsJ29iamVjdCcsJ19zZXROb2RlUGVybWlzc2lvbnMnLCdub3cnLCdfYWRkTG9hZE5vZGUnLCdfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJywnY2hhckF0JywnSFRNTEFsbENvbGxlY3Rpb24nLCdnYXRld2F5LmRvY2tlci5pbnRlcm5hbCcsJ3N5bWJvbCcsJ3Byb3RvdHlwZScsJ3BvcnQnLCdQT1NJVElWRV9JTkZJTklUWScsJ05FR0FUSVZFX0lORklOSVRZJywnY291bnQnLCdnZXRQcm90b3R5cGVPZicsJ19hZGRPYmplY3RQcm9wZXJ0eScsJ3ZhbHVlT2YnLCduYW1lJywnX3NldE5vZGVFeHByZXNzaW9uUGF0aCcsJ2NvbnN0cnVjdG9yJywnZm9yRWFjaCcsJ3JlZHVjZUxpbWl0cycsJ3VuZGVmaW5lZCcsJ01hcCcsJ1tvYmplY3RcXFxceDIwQXJyYXldJywnZGF0YScsJ051bWJlcicsJ19pc01hcCcsJ3RvTG93ZXJDYXNlJywnX21heENvbm5lY3RBdHRlbXB0Q291bnQnLCdfaGFzTWFwT25JdHNQYXRoJywnX3VuZGVmaW5lZCcsJ1tvYmplY3RcXFxceDIwQmlnSW50XScsJzEwNDUxNVl5TU1kYicsJ2NhdGNoJywnX1N5bWJvbCcsJ19jb25uZWN0QXR0ZW1wdENvdW50JywnX3BfbGVuZ3RoJywnX3NvY2tldCcsJ19wcm9wZXJ0eScsJ3NvcnRQcm9wcycsJ3JlYWR5U3RhdGUnLCdfc2V0Tm9kZVF1ZXJ5UGF0aCcsJ2FuZ3VsYXInLCdwYXRoJywnbWF0Y2gnLCd2YWx1ZScsJ19vYmplY3RUb1N0cmluZycsJzYzODYyN01qcm1pZScsJ3NlcmlhbGl6ZScsJ2FycmF5JywnX3JlZ0V4cFRvU3RyaW5nJywnc2VuZCcsJ3Vuc2hpZnQnLCdib29sZWFuJywnX2hhc1NldE9uSXRzUGF0aCcsJ19kaXNwb3NlV2Vic29ja2V0Jywnc3RhY2tUcmFjZUxpbWl0JywnY29uc29sZScsJ2VkZ2UnLCdfY2FwSWZTdHJpbmcnLCd1bnJlZicsJ2JpbmQnLCdfcF9uYW1lJywnYXV0b0V4cGFuZExpbWl0Jywnc3RyaW5nJywnX2lzUHJpbWl0aXZlV3JhcHBlclR5cGUnLCdwYXJlbnQnLCdlbnYnLCdsb2dnZXJcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMGNvbm5lY3RcXFxceDIwdG9cXFxceDIwaG9zdCxcXFxceDIwc2VlXFxcXHgyMCcsJ2xldmVsJywnZmFpbGVkXFxcXHgyMHRvXFxcXHgyMGNvbm5lY3RcXFxceDIwdG9cXFxceDIwaG9zdDpcXFxceDIwJywndGhlbicsJ2V4cHJlc3Npb25zVG9FdmFsdWF0ZScsJ193ZWJTb2NrZXRFcnJvckRvY3NMaW5rJywnQnVmZmVyJywnc3RyaW5naWZ5Jywnb25lcnJvcicsJ25vZGUnLCdnZXRPd25Qcm9wZXJ0eVN5bWJvbHMnLCdzZXR0ZXInLCdzdGFydHNXaXRoJywnbmVnYXRpdmVaZXJvJywnaXNBcnJheScsJ3dzOi8vJywnX3NldE5vZGVJZCcsJzEyNy4wLjAuMScsJzI3VW5qTEVBJywnX3NldE5vZGVFeHBhbmRhYmxlU3RhdGUnLCdvbmNsb3NlJywnbWV0aG9kJywnbG9nZ2VyXFxcXHgyMHdlYnNvY2tldFxcXFx4MjBlcnJvcicsJ2Vycm9yJywnY2FwcGVkJywnZ2V0V2ViU29ja2V0Q2xhc3MnLCdtYXAnLCdsb2cnLCcxMTVJdktla0InLCdwb3NpdGl2ZUluZmluaXR5JywnX2NvbnNvbGVOaW5qYUFsbG93ZWRUb1N0YXJ0JywnYmFja2dyb3VuZDpcXFxceDIwcmdiKDMwLDMwLDMwKTtcXFxceDIwY29sb3I6XFxcXHgyMHJnYigyNTUsMjEzLDkyKScsJ3NvcnQnLCdSZWdFeHAnLCd0aW1lU3RhbXAnLCdsb2NhdGlvbicsJ3VybCcsJ3NsaWNlJywnX19lcycrJ01vZHVsZScsJ2Z1bmN0aW9uJywnbmV4dC5qcycsJ19pbkJyb3dzZXInLCdsZW5ndGgnLCdocnRpbWUnLCdsb2dnZXJcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMGNvbm5lY3RcXFxceDIwdG9cXFxceDIwaG9zdCcsJzZNS2hVSFEnLCdlbmRzV2l0aCcsJ2RlcHRoJywnZWxhcHNlZCcsJ05FWFRfUlVOVElNRScsJ19xdW90ZWRSZWdFeHAnLCdbb2JqZWN0XFxcXHgyMFNldF0nLCdfYWxsb3dlZFRvQ29ubmVjdE9uU2VuZCcsJ1xcXFx4MjBzZXJ2ZXInLCdfbnVtYmVyUmVnRXhwJywnNmhzWFBhSicsJ19nZXRPd25Qcm9wZXJ0eU5hbWVzJywnZnJvbUNoYXJDb2RlJywndG9VcHBlckNhc2UnLCd3cy9pbmRleC5qcycsJ19hdHRlbXB0VG9SZWNvbm5lY3RTaG9ydGx5JywnXFxcXHgyMGJyb3dzZXInLCdfYmxhY2tsaXN0ZWRQcm9wZXJ0eScsJzdUUHdhcGUnLCdfSFRNTEFsbENvbGxlY3Rpb24nLCd2ZXJzaW9ucycsJ190cmVlTm9kZVByb3BlcnRpZXNBZnRlckZ1bGxWYWx1ZScsJzEnLCdub0Z1bmN0aW9ucycsJycsJ19yZWNvbm5lY3RUaW1lb3V0JywnZGF0ZScsJ19hZGRGdW5jdGlvbnNOb2RlJywncHVzaCcsJ2ZhaWxlZFxcXFx4MjB0b1xcXFx4MjBmaW5kXFxcXHgyMGFuZFxcXFx4MjBsb2FkXFxcXHgyMFdlYlNvY2tldCcsJ29ubWVzc2FnZScsJ251bGwnLCdhdXRvRXhwYW5kTWF4RGVwdGgnLCdzcGxpdCcsJ0Jvb2xlYW4nLCdwcm9jZXNzJywnZG9ja2VyaXplZEFwcCcsJ2Nsb3NlJywnX2luTmV4dEVkZ2UnLCdqb2luJywnX1dlYlNvY2tldCcsJ3N0ckxlbmd0aCcsJ2JpZ2ludCcsJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50JywnX25pbmphSWdub3JlTmV4dEVycm9yJywncm9vdF9leHBfaWQnLCdfaXNBcnJheScsJ190cmVlTm9kZVByb3BlcnRpZXNCZWZvcmVGdWxsVmFsdWUnLCd0b3RhbFN0ckxlbmd0aCcsJ2hvc3QnLCdjdXJyZW50Jywnc3RhY2snLCdlbnVtZXJhYmxlJywnb3JpZ2luJywnZ2V0dGVyJywnZ2V0T3duUHJvcGVydHlOYW1lcycsJzE0OTk3MTBYTVlkenknLCd0aW1lJywnbnVtYmVyJywnX3NldE5vZGVMYWJlbCcsJ2RlZmF1bHQnLCdfYWxsb3dlZFRvU2VuZCcsJ19pc05lZ2F0aXZlWmVybycsJ3JlbG9hZCcsJ3Rlc3QnLCdhdXRvRXhwYW5kUHJldmlvdXNPYmplY3RzJ107XzB4MTk4MT1mdW5jdGlvbigpe3JldHVybiBfMHgxY2MyNTY7fTtyZXR1cm4gXzB4MTk4MSgpO31mdW5jdGlvbiBpZShfMHg1MGQyNDEsXzB4NGFiMGNhLF8weDJhZDNiZixfMHgyOThhMzApe3ZhciBfMHgxMzJmZjU9XzB4MmJjYTEyO18weDI5OGEzMCYmXzB4NTBkMjQxPT09XzB4MTMyZmY1KDB4ZjkpJiZfMHgyYWQzYmZbXzB4MTMyZmY1KDB4MWE3KV1bXzB4MTMyZmY1KDB4ZjkpXSgpO31mdW5jdGlvbiBCKF8weDJhNzBlYSl7dmFyIF8weDQ4ZTI2NT1fMHgyYmNhMTIsXzB4M2JiMmM1LF8weDMzY2YxNjtsZXQgXzB4MWRhNWUyPWZ1bmN0aW9uKF8weDRhZTA5ZixfMHgzY2RmNDEpe3JldHVybiBfMHgzY2RmNDEtXzB4NGFlMDlmO30sXzB4NWE0ZmMzO2lmKF8weDJhNzBlYVtfMHg0OGUyNjUoMHgxMTcpXSlfMHg1YTRmYzM9ZnVuY3Rpb24oKXt2YXIgXzB4MjM5ODI1PV8weDQ4ZTI2NTtyZXR1cm4gXzB4MmE3MGVhW18weDIzOTgyNSgweDExNyldWydub3cnXSgpO307ZWxzZXtpZihfMHgyYTcwZWFbXzB4NDhlMjY1KDB4ZGQpXSYmXzB4MmE3MGVhWydwcm9jZXNzJ11bXzB4NDhlMjY1KDB4MWFmKV0mJigoXzB4MzNjZjE2PShfMHgzYmIyYzU9XzB4MmE3MGVhW18weDQ4ZTI2NSgweGRkKV0pPT1udWxsP3ZvaWQgMHgwOl8weDNiYjJjNVsnZW52J10pPT1udWxsP3ZvaWQgMHgwOl8weDMzY2YxNltfMHg0OGUyNjUoMHgxYjUpXSkhPT1fMHg0OGUyNjUoMHgxN2EpKV8weDVhNGZjMz1mdW5jdGlvbigpe3ZhciBfMHg1ZDM4ZGY9XzB4NDhlMjY1O3JldHVybiBfMHgyYTcwZWFbXzB4NWQzOGRmKDB4ZGQpXVtfMHg1ZDM4ZGYoMHgxYWYpXSgpO30sXzB4MWRhNWUyPWZ1bmN0aW9uKF8weDFjZTVjMSxfMHgxMjA2ZWMpe3JldHVybiAweDNlOCooXzB4MTIwNmVjWzB4MF0tXzB4MWNlNWMxWzB4MF0pKyhfMHgxMjA2ZWNbMHgxXS1fMHgxY2U1YzFbMHgxXSkvMHhmNDI0MDt9O2Vsc2UgdHJ5e2xldCB7cGVyZm9ybWFuY2U6XzB4MzFlZTc1fT1yZXF1aXJlKF8weDQ4ZTI2NSgweDExMikpO18weDVhNGZjMz1mdW5jdGlvbigpe3ZhciBfMHhiODE5NzU9XzB4NDhlMjY1O3JldHVybiBfMHgzMWVlNzVbXzB4YjgxOTc1KDB4MTQxKV0oKTt9O31jYXRjaHtfMHg1YTRmYzM9ZnVuY3Rpb24oKXtyZXR1cm4rbmV3IERhdGUoKTt9O319cmV0dXJueydlbGFwc2VkJzpfMHgxZGE1ZTIsJ3RpbWVTdGFtcCc6XzB4NWE0ZmMzLCdub3cnOigpPT5EYXRlW18weDQ4ZTI2NSgweDE0MSldKCl9O31mdW5jdGlvbiBfMHg0NzczKF8weDU5YTRiNyxfMHgxMWM4Zjgpe3ZhciBfMHgxOTgxMGE9XzB4MTk4MSgpO3JldHVybiBfMHg0NzczPWZ1bmN0aW9uKF8weDQ3NzNjMCxfMHg1NDkzZjkpe18weDQ3NzNjMD1fMHg0NzczYzAtMHhjNDt2YXIgXzB4NDJkYmJkPV8weDE5ODEwYVtfMHg0NzczYzBdO3JldHVybiBfMHg0MmRiYmQ7fSxfMHg0NzczKF8weDU5YTRiNyxfMHgxMWM4ZjgpO31mdW5jdGlvbiBIKF8weGEwZTA0LF8weDM5MGI3ZSxfMHgyNWMwMmIpe3ZhciBfMHg0YjE1OGY9XzB4MmJjYTEyLF8weGEwODAyZCxfMHg1ZjBmYzMsXzB4MTIxMzNiLF8weDUzZmQ1YixfMHgyY2QyYTY7aWYoXzB4YTBlMDRbJ19jb25zb2xlTmluamFBbGxvd2VkVG9TdGFydCddIT09dm9pZCAweDApcmV0dXJuIF8weGEwZTA0W18weDRiMTU4ZigweDFhMildO2xldCBfMHgzNjM1YjQ9KChfMHg1ZjBmYzM9KF8weGEwODAyZD1fMHhhMGUwNFtfMHg0YjE1OGYoMHhkZCldKT09bnVsbD92b2lkIDB4MDpfMHhhMDgwMmRbXzB4NGIxNThmKDB4Y2UpXSk9PW51bGw/dm9pZCAweDA6XzB4NWYwZmMzW18weDRiMTU4ZigweDE4ZCldKXx8KChfMHg1M2ZkNWI9KF8weDEyMTMzYj1fMHhhMGUwNFtfMHg0YjE1OGYoMHhkZCldKT09bnVsbD92b2lkIDB4MDpfMHgxMjEzM2JbXzB4NGIxNThmKDB4MTgzKV0pPT1udWxsP3ZvaWQgMHgwOl8weDUzZmQ1YltfMHg0YjE1OGYoMHgxYjUpXSk9PT0nZWRnZSc7ZnVuY3Rpb24gXzB4MzFiZjA4KF8weDIwNjNmOSl7dmFyIF8weDI2MWI3Nz1fMHg0YjE1OGY7aWYoXzB4MjA2M2Y5W18weDI2MWI3NygweDE5MCldKCcvJykmJl8weDIwNjNmOVtfMHgyNjFiNzcoMHgxYjIpXSgnLycpKXtsZXQgXzB4MTA5NzI1PW5ldyBSZWdFeHAoXzB4MjA2M2Y5W18weDI2MWI3NygweDFhOSldKDB4MSwtMHgxKSk7cmV0dXJuIF8weGI2NDdjNT0+XzB4MTA5NzI1W18weDI2MWI3NygweGZhKV0oXzB4YjY0N2M1KTt9ZWxzZXtpZihfMHgyMDYzZjlbJ2luY2x1ZGVzJ10oJyonKXx8XzB4MjA2M2Y5WydpbmNsdWRlcyddKCc/Jykpe2xldCBfMHgxZGQ4ZDI9bmV3IFJlZ0V4cCgnXicrXzB4MjA2M2Y5W18weDI2MWI3NygweDEwNyldKC9cXFxcLi9nLFN0cmluZ1snZnJvbUNoYXJDb2RlJ10oMHg1YykrJy4nKVtfMHgyNjFiNzcoMHgxMDcpXSgvXFxcXCovZywnLionKVtfMHgyNjFiNzcoMHgxMDcpXSgvXFxcXD8vZywnLicpK1N0cmluZ1tfMHgyNjFiNzcoMHhjNildKDB4MjQpKTtyZXR1cm4gXzB4MWMzZTllPT5fMHgxZGQ4ZDJbXzB4MjYxYjc3KDB4ZmEpXShfMHgxYzNlOWUpO31lbHNlIHJldHVybiBfMHgyZjJjYmE9Pl8weDJmMmNiYT09PV8weDIwNjNmOTt9fWxldCBfMHg0OWI0MzI9XzB4MzkwYjdlWydtYXAnXShfMHgzMWJmMDgpO3JldHVybiBfMHhhMGUwNFtfMHg0YjE1OGYoMHgxYTIpXT1fMHgzNjM1YjR8fCFfMHgzOTBiN2UsIV8weGEwZTA0W18weDRiMTU4ZigweDFhMildJiYoKF8weDJjZDJhNj1fMHhhMGUwNFtfMHg0YjE1OGYoMHgxYTcpXSk9PW51bGw/dm9pZCAweDA6XzB4MmNkMmE2W18weDRiMTU4ZigweDEzYyldKSYmKF8weGEwZTA0W18weDRiMTU4ZigweDFhMildPV8weDQ5YjQzMltfMHg0YjE1OGYoMHgxM2UpXShfMHgxMGYwMzM9Pl8weDEwZjAzMyhfMHhhMGUwNFtfMHg0YjE1OGYoMHgxYTcpXVtfMHg0YjE1OGYoMHgxM2MpXSkpKSxfMHhhMGUwNFtfMHg0YjE1OGYoMHgxYTIpXTt9ZnVuY3Rpb24gWChfMHg0MmI1OGYsXzB4MTI5MjI4LF8weGY4NjQ1YixfMHhlMjQwMyl7dmFyIF8weDU5ZDkxMD1fMHgyYmNhMTI7XzB4NDJiNThmPV8weDQyYjU4ZixfMHgxMjkyMjg9XzB4MTI5MjI4LF8weGY4NjQ1Yj1fMHhmODY0NWIsXzB4ZTI0MDM9XzB4ZTI0MDM7bGV0IF8weDJkZjZmYT1CKF8weDQyYjU4ZiksXzB4MmMzYjY9XzB4MmRmNmZhW18weDU5ZDkxMCgweDFiNCldLF8weDJlMjBjOD1fMHgyZGY2ZmFbXzB4NTlkOTEwKDB4MWE2KV07Y2xhc3MgXzB4MTljMWE4e2NvbnN0cnVjdG9yKCl7dmFyIF8weDcwNTc1OT1fMHg1OWQ5MTA7dGhpc1snX2tleVN0clJlZ0V4cCddPS9eKD8hKD86ZG98aWZ8aW58Zm9yfGxldHxuZXd8dHJ5fHZhcnxjYXNlfGVsc2V8ZW51bXxldmFsfGZhbHNlfG51bGx8dGhpc3x0cnVlfHZvaWR8d2l0aHxicmVha3xjYXRjaHxjbGFzc3xjb25zdHxzdXBlcnx0aHJvd3x3aGlsZXx5aWVsZHxkZWxldGV8ZXhwb3J0fGltcG9ydHxwdWJsaWN8cmV0dXJufHN0YXRpY3xzd2l0Y2h8dHlwZW9mfGRlZmF1bHR8ZXh0ZW5kc3xmaW5hbGx5fHBhY2thZ2V8cHJpdmF0ZXxjb250aW51ZXxkZWJ1Z2dlcnxmdW5jdGlvbnxhcmd1bWVudHN8aW50ZXJmYWNlfHByb3RlY3RlZHxpbXBsZW1lbnRzfGluc3RhbmNlb2YpJClbXyRhLXpBLVpcXFxceEEwLVxcXFx1RkZGRl1bXyRhLXpBLVowLTlcXFxceEEwLVxcXFx1RkZGRl0qJC8sdGhpc1tfMHg3MDU3NTkoMHgxYmEpXT0vXigwfFsxLTldWzAtOV0qKSQvLHRoaXNbXzB4NzA1NzU5KDB4MWI2KV09LycoW15cXFxcXFxcXCddfFxcXFxcXFxcJykqJy8sdGhpc1tfMHg3MDU3NTkoMHgxNWUpXT1fMHg0MmI1OGZbXzB4NzA1NzU5KDB4MTU1KV0sdGhpc1tfMHg3MDU3NTkoMHhjZCldPV8weDQyYjU4ZltfMHg3MDU3NTkoMHgxNDUpXSx0aGlzW18weDcwNTc1OSgweDE0MyldPU9iamVjdFsnZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJ10sdGhpc1tfMHg3MDU3NTkoMHhjNSldPU9iamVjdFtfMHg3MDU3NTkoMHhmMSldLHRoaXNbXzB4NzA1NzU5KDB4MTYyKV09XzB4NDJiNThmW18weDcwNTc1OSgweDEwYildLHRoaXNbXzB4NzA1NzU5KDB4MTcyKV09UmVnRXhwWydwcm90b3R5cGUnXVtfMHg3MDU3NTkoMHgxMTkpXSx0aGlzWydfZGF0ZVRvU3RyaW5nJ109RGF0ZVtfMHg3MDU3NTkoMHgxNDgpXVtfMHg3MDU3NTkoMHgxMTkpXTt9W18weDU5ZDkxMCgweDE3MCldKF8weDVmZjdkNCxfMHg1MGI5YzcsXzB4NTdiOTliLF8weDQwMmRlOSl7dmFyIF8weDVjZmNlNz1fMHg1OWQ5MTAsXzB4NDQ1ODkxPXRoaXMsXzB4NDVjMDM3PV8weDU3Yjk5YlsnYXV0b0V4cGFuZCddO2Z1bmN0aW9uIF8weDJhMGYxYyhfMHgxMDFhZTYsXzB4NWRmZWNiLF8weDIyNjA1Nyl7dmFyIF8weDFkMzE4OT1fMHg0NzczO18weDVkZmVjYltfMHgxZDMxODkoMHgxMzUpXT1fMHgxZDMxODkoMHgxMGEpLF8weDVkZmVjYlsnZXJyb3InXT1fMHgxMDFhZTZbJ21lc3NhZ2UnXSxfMHgzMWRkNGM9XzB4MjI2MDU3Wydub2RlJ11bXzB4MWQzMTg5KDB4ZWMpXSxfMHgyMjYwNTdbJ25vZGUnXVtfMHgxZDMxODkoMHhlYyldPV8weDVkZmVjYixfMHg0NDU4OTFbXzB4MWQzMTg5KDB4ZTkpXShfMHg1ZGZlY2IsXzB4MjI2MDU3KTt9dHJ5e18weDU3Yjk5YlsnbGV2ZWwnXSsrLF8weDU3Yjk5YlsnYXV0b0V4cGFuZCddJiZfMHg1N2I5OWJbXzB4NWNmY2U3KDB4ZmIpXVtfMHg1Y2ZjZTcoMHhkNildKF8weDUwYjljNyk7dmFyIF8weDM3NGUyYyxfMHgxOTg1MTUsXzB4MjFlOTg5LF8weDUzOTdhMixfMHhiNGY0NzI9W10sXzB4MTAzM2EyPVtdLF8weDQyZmMzNyxfMHg1ZGI1ZjM9dGhpc1snX3R5cGUnXShfMHg1MGI5YzcpLF8weDMwZThiNT1fMHg1ZGI1ZjM9PT0nYXJyYXknLF8weDU1N2NjNT0hMHgxLF8weDVlOTE4Yz1fMHg1ZGI1ZjM9PT1fMHg1Y2ZjZTcoMHgxYWIpLF8weDMyNTFkNj10aGlzW18weDVjZmNlNygweDEyNildKF8weDVkYjVmMyksXzB4MWNlMTRhPXRoaXNbJ19pc1ByaW1pdGl2ZVdyYXBwZXJUeXBlJ10oXzB4NWRiNWYzKSxfMHg4NDc0YmQ9XzB4MzI1MWQ2fHxfMHgxY2UxNGEsXzB4MWJmYjJkPXt9LF8weDRmZThjZD0weDAsXzB4OGQwMGU0PSEweDEsXzB4MzFkZDRjLF8weDJmNThkZj0vXigoWzEtOV17MX1bMC05XSopfDApJC87aWYoXzB4NTdiOTliWydkZXB0aCddKXtpZihfMHgzMGU4YjUpe2lmKF8weDE5ODUxNT1fMHg1MGI5YzdbXzB4NWNmY2U3KDB4MWFlKV0sXzB4MTk4NTE1Pl8weDU3Yjk5YltfMHg1Y2ZjZTcoMHgxMWIpXSl7Zm9yKF8weDIxZTk4OT0weDAsXzB4NTM5N2EyPV8weDU3Yjk5YltfMHg1Y2ZjZTcoMHgxMWIpXSxfMHgzNzRlMmM9XzB4MjFlOTg5O18weDM3NGUyYzxfMHg1Mzk3YTI7XzB4Mzc0ZTJjKyspXzB4MTAzM2EyW18weDVjZmNlNygweGQ2KV0oXzB4NDQ1ODkxW18weDVjZmNlNygweDEyMyldKF8weGI0ZjQ3MixfMHg1MGI5YzcsXzB4NWRiNWYzLF8weDM3NGUyYyxfMHg1N2I5OWIpKTtfMHg1ZmY3ZDRbXzB4NWNmY2U3KDB4MTMwKV09ITB4MDt9ZWxzZXtmb3IoXzB4MjFlOTg5PTB4MCxfMHg1Mzk3YTI9XzB4MTk4NTE1LF8weDM3NGUyYz1fMHgyMWU5ODk7XzB4Mzc0ZTJjPF8weDUzOTdhMjtfMHgzNzRlMmMrKylfMHgxMDMzYTJbJ3B1c2gnXShfMHg0NDU4OTFbXzB4NWNmY2U3KDB4MTIzKV0oXzB4YjRmNDcyLF8weDUwYjljNyxfMHg1ZGI1ZjMsXzB4Mzc0ZTJjLF8weDU3Yjk5YikpO31fMHg1N2I5OWJbXzB4NWNmY2U3KDB4ZTUpXSs9XzB4MTAzM2EyW18weDVjZmNlNygweDFhZSldO31pZighKF8weDVkYjVmMz09PSdudWxsJ3x8XzB4NWRiNWYzPT09XzB4NWNmY2U3KDB4MTU1KSkmJiFfMHgzMjUxZDYmJl8weDVkYjVmMyE9PSdTdHJpbmcnJiZfMHg1ZGI1ZjMhPT1fMHg1Y2ZjZTcoMHgxOGEpJiZfMHg1ZGI1ZjMhPT1fMHg1Y2ZjZTcoMHhlNCkpe3ZhciBfMHgzZGNjY2Y9XzB4NDAyZGU5W18weDVjZmNlNygweDEyZildfHxfMHg1N2I5OWJbXzB4NWNmY2U3KDB4MTJmKV07aWYodGhpc1snX2lzU2V0J10oXzB4NTBiOWM3KT8oXzB4Mzc0ZTJjPTB4MCxfMHg1MGI5YzdbXzB4NWNmY2U3KDB4MTUzKV0oZnVuY3Rpb24oXzB4MTA2YmIyKXt2YXIgXzB4NTdjMjY0PV8weDVjZmNlNztpZihfMHg0ZmU4Y2QrKyxfMHg1N2I5OWJbXzB4NTdjMjY0KDB4ZTUpXSsrLF8weDRmZThjZD5fMHgzZGNjY2Ype18weDhkMDBlND0hMHgwO3JldHVybjt9aWYoIV8weDU3Yjk5YltfMHg1N2MyNjQoMHhmZildJiZfMHg1N2I5OWJbXzB4NTdjMjY0KDB4ZmQpXSYmXzB4NTdiOTliW18weDU3YzI2NCgweGU1KV0+XzB4NTdiOTliWydhdXRvRXhwYW5kTGltaXQnXSl7XzB4OGQwMGU0PSEweDA7cmV0dXJuO31fMHgxMDMzYTJbXzB4NTdjMjY0KDB4ZDYpXShfMHg0NDU4OTFbXzB4NTdjMjY0KDB4MTIzKV0oXzB4YjRmNDcyLF8weDUwYjljNyxfMHg1N2MyNjQoMHgxMzcpLF8weDM3NGUyYysrLF8weDU3Yjk5YixmdW5jdGlvbihfMHg1NjEzMjcpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBfMHg1NjEzMjc7fTt9KF8weDEwNmJiMikpKTt9KSk6dGhpc1tfMHg1Y2ZjZTcoMHgxNWEpXShfMHg1MGI5YzcpJiZfMHg1MGI5YzdbXzB4NWNmY2U3KDB4MTUzKV0oZnVuY3Rpb24oXzB4MzQwMGIyLF8weGYyYzMxNil7dmFyIF8weDU1NjNiNz1fMHg1Y2ZjZTc7aWYoXzB4NGZlOGNkKyssXzB4NTdiOTliW18weDU1NjNiNygweGU1KV0rKyxfMHg0ZmU4Y2Q+XzB4M2RjY2NmKXtfMHg4ZDAwZTQ9ITB4MDtyZXR1cm47fWlmKCFfMHg1N2I5OWJbXzB4NTU2M2I3KDB4ZmYpXSYmXzB4NTdiOTliW18weDU1NjNiNygweGZkKV0mJl8weDU3Yjk5YltfMHg1NTYzYjcoMHhlNSldPl8weDU3Yjk5YltfMHg1NTYzYjcoMHgxN2YpXSl7XzB4OGQwMGU0PSEweDA7cmV0dXJuO312YXIgXzB4MjViNzI2PV8weGYyYzMxNlsndG9TdHJpbmcnXSgpO18weDI1YjcyNltfMHg1NTYzYjcoMHgxYWUpXT4weDY0JiYoXzB4MjViNzI2PV8weDI1YjcyNltfMHg1NTYzYjcoMHgxYTkpXSgweDAsMHg2NCkrJy4uLicpLF8weDEwMzNhMltfMHg1NTYzYjcoMHhkNildKF8weDQ0NTg5MVtfMHg1NTYzYjcoMHgxMjMpXShfMHhiNGY0NzIsXzB4NTBiOWM3LF8weDU1NjNiNygweDE1NiksXzB4MjViNzI2LF8weDU3Yjk5YixmdW5jdGlvbihfMHgyOGU3M2Epe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBfMHgyOGU3M2E7fTt9KF8weDM0MDBiMikpKTt9KSwhXzB4NTU3Y2M1KXt0cnl7Zm9yKF8weDQyZmMzNyBpbiBfMHg1MGI5YzcpaWYoIShfMHgzMGU4YjUmJl8weDJmNThkZltfMHg1Y2ZjZTcoMHhmYSldKF8weDQyZmMzNykpJiYhdGhpc1tfMHg1Y2ZjZTcoMHhjYildKF8weDUwYjljNyxfMHg0MmZjMzcsXzB4NTdiOTliKSl7aWYoXzB4NGZlOGNkKyssXzB4NTdiOTliW18weDVjZmNlNygweGU1KV0rKyxfMHg0ZmU4Y2Q+XzB4M2RjY2NmKXtfMHg4ZDAwZTQ9ITB4MDticmVhazt9aWYoIV8weDU3Yjk5YltfMHg1Y2ZjZTcoMHhmZildJiZfMHg1N2I5OWJbXzB4NWNmY2U3KDB4ZmQpXSYmXzB4NTdiOTliW18weDVjZmNlNygweGU1KV0+XzB4NTdiOTliWydhdXRvRXhwYW5kTGltaXQnXSl7XzB4OGQwMGU0PSEweDA7YnJlYWs7fV8weDEwMzNhMlsncHVzaCddKF8weDQ0NTg5MVtfMHg1Y2ZjZTcoMHgxNGUpXShfMHhiNGY0NzIsXzB4MWJmYjJkLF8weDUwYjljNyxfMHg1ZGI1ZjMsXzB4NDJmYzM3LF8weDU3Yjk5YikpO319Y2F0Y2h7fWlmKF8weDFiZmIyZFtfMHg1Y2ZjZTcoMHgxNjQpXT0hMHgwLF8weDVlOTE4YyYmKF8weDFiZmIyZFtfMHg1Y2ZjZTcoMHgxN2UpXT0hMHgwKSwhXzB4OGQwMGU0KXt2YXIgXzB4MzkyZWIxPVtdW18weDVjZmNlNygweDExZSldKHRoaXNbXzB4NWNmY2U3KDB4YzUpXShfMHg1MGI5YzcpKVtfMHg1Y2ZjZTcoMHgxMWUpXSh0aGlzWydfZ2V0T3duUHJvcGVydHlTeW1ib2xzJ10oXzB4NTBiOWM3KSk7Zm9yKF8weDM3NGUyYz0weDAsXzB4MTk4NTE1PV8weDM5MmViMVtfMHg1Y2ZjZTcoMHgxYWUpXTtfMHgzNzRlMmM8XzB4MTk4NTE1O18weDM3NGUyYysrKWlmKF8weDQyZmMzNz1fMHgzOTJlYjFbXzB4Mzc0ZTJjXSwhKF8weDMwZThiNSYmXzB4MmY1OGRmW18weDVjZmNlNygweGZhKV0oXzB4NDJmYzM3W18weDVjZmNlNygweDExOSldKCkpKSYmIXRoaXNbXzB4NWNmY2U3KDB4Y2IpXShfMHg1MGI5YzcsXzB4NDJmYzM3LF8weDU3Yjk5YikmJiFfMHgxYmZiMmRbXzB4NWNmY2U3KDB4MTIwKStfMHg0MmZjMzdbJ3RvU3RyaW5nJ10oKV0pe2lmKF8weDRmZThjZCsrLF8weDU3Yjk5YltfMHg1Y2ZjZTcoMHhlNSldKyssXzB4NGZlOGNkPl8weDNkY2NjZil7XzB4OGQwMGU0PSEweDA7YnJlYWs7fWlmKCFfMHg1N2I5OWJbXzB4NWNmY2U3KDB4ZmYpXSYmXzB4NTdiOTliW18weDVjZmNlNygweGZkKV0mJl8weDU3Yjk5YlsnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnXT5fMHg1N2I5OWJbXzB4NWNmY2U3KDB4MTdmKV0pe18weDhkMDBlND0hMHgwO2JyZWFrO31fMHgxMDMzYTJbXzB4NWNmY2U3KDB4ZDYpXShfMHg0NDU4OTFbXzB4NWNmY2U3KDB4MTRlKV0oXzB4YjRmNDcyLF8weDFiZmIyZCxfMHg1MGI5YzcsXzB4NWRiNWYzLF8weDQyZmMzNyxfMHg1N2I5OWIpKTt9fX19fWlmKF8weDVmZjdkNFtfMHg1Y2ZjZTcoMHgxMzUpXT1fMHg1ZGI1ZjMsXzB4ODQ3NGJkPyhfMHg1ZmY3ZDRbJ3ZhbHVlJ109XzB4NTBiOWM3Wyd2YWx1ZU9mJ10oKSx0aGlzW18weDVjZmNlNygweDE3YildKF8weDVkYjVmMyxfMHg1ZmY3ZDQsXzB4NTdiOTliLF8weDQwMmRlOSkpOl8weDVkYjVmMz09PV8weDVjZmNlNygweGQ0KT9fMHg1ZmY3ZDRbXzB4NWNmY2U3KDB4MTZkKV09dGhpc1snX2RhdGVUb1N0cmluZyddW18weDVjZmNlNygweDEwYyldKF8weDUwYjljNyk6XzB4NWRiNWYzPT09XzB4NWNmY2U3KDB4ZTQpP18weDVmZjdkNFtfMHg1Y2ZjZTcoMHgxNmQpXT1fMHg1MGI5YzdbXzB4NWNmY2U3KDB4MTE5KV0oKTpfMHg1ZGI1ZjM9PT1fMHg1Y2ZjZTcoMHgxYTUpP18weDVmZjdkNFtfMHg1Y2ZjZTcoMHgxNmQpXT10aGlzWydfcmVnRXhwVG9TdHJpbmcnXVtfMHg1Y2ZjZTcoMHgxMGMpXShfMHg1MGI5YzcpOl8weDVkYjVmMz09PV8weDVjZmNlNygweDE0NykmJnRoaXNbXzB4NWNmY2U3KDB4MTYyKV0/XzB4NWZmN2Q0Wyd2YWx1ZSddPXRoaXNbXzB4NWNmY2U3KDB4MTYyKV1bXzB4NWNmY2U3KDB4MTQ4KV1bXzB4NWNmY2U3KDB4MTE5KV1bXzB4NWNmY2U3KDB4MTBjKV0oXzB4NTBiOWM3KTohXzB4NTdiOTliW18weDVjZmNlNygweDFiMyldJiYhKF8weDVkYjVmMz09PV8weDVjZmNlNygweGQ5KXx8XzB4NWRiNWYzPT09XzB4NWNmY2U3KDB4MTU1KSkmJihkZWxldGUgXzB4NWZmN2Q0W18weDVjZmNlNygweDE2ZCldLF8weDVmZjdkNFsnY2FwcGVkJ109ITB4MCksXzB4OGQwMGU0JiYoXzB4NWZmN2Q0W18weDVjZmNlNygweDEzMyldPSEweDApLF8weDMxZGQ0Yz1fMHg1N2I5OWJbXzB4NWNmY2U3KDB4MThkKV1bXzB4NWNmY2U3KDB4ZWMpXSxfMHg1N2I5OWJbXzB4NWNmY2U3KDB4MThkKV1bXzB4NWNmY2U3KDB4ZWMpXT1fMHg1ZmY3ZDQsdGhpc1tfMHg1Y2ZjZTcoMHhlOSldKF8weDVmZjdkNCxfMHg1N2I5OWIpLF8weDEwMzNhMlsnbGVuZ3RoJ10pe2ZvcihfMHgzNzRlMmM9MHgwLF8weDE5ODUxNT1fMHgxMDMzYTJbXzB4NWNmY2U3KDB4MWFlKV07XzB4Mzc0ZTJjPF8weDE5ODUxNTtfMHgzNzRlMmMrKylfMHgxMDMzYTJbXzB4Mzc0ZTJjXShfMHgzNzRlMmMpO31fMHhiNGY0NzJbXzB4NWNmY2U3KDB4MWFlKV0mJihfMHg1ZmY3ZDRbXzB4NWNmY2U3KDB4MTJmKV09XzB4YjRmNDcyKTt9Y2F0Y2goXzB4Mzk0OTdmKXtfMHgyYTBmMWMoXzB4Mzk0OTdmLF8weDVmZjdkNCxfMHg1N2I5OWIpO31yZXR1cm4gdGhpc1snX2FkZGl0aW9uYWxNZXRhZGF0YSddKF8weDUwYjljNyxfMHg1ZmY3ZDQpLHRoaXNbJ190cmVlTm9kZVByb3BlcnRpZXNBZnRlckZ1bGxWYWx1ZSddKF8weDVmZjdkNCxfMHg1N2I5OWIpLF8weDU3Yjk5YltfMHg1Y2ZjZTcoMHgxOGQpXVtfMHg1Y2ZjZTcoMHhlYyldPV8weDMxZGQ0YyxfMHg1N2I5OWJbXzB4NWNmY2U3KDB4MTg1KV0tLSxfMHg1N2I5OWJbXzB4NWNmY2U3KDB4ZmQpXT1fMHg0NWMwMzcsXzB4NTdiOTliW18weDVjZmNlNygweGZkKV0mJl8weDU3Yjk5YltfMHg1Y2ZjZTcoMHhmYildW18weDVjZmNlNygweDEzOSldKCksXzB4NWZmN2Q0O31bJ19nZXRPd25Qcm9wZXJ0eVN5bWJvbHMnXShfMHg0NzdhMGIpe3ZhciBfMHgzZDBmMTE9XzB4NTlkOTEwO3JldHVybiBPYmplY3RbXzB4M2QwZjExKDB4MThlKV0/T2JqZWN0W18weDNkMGYxMSgweDE4ZSldKF8weDQ3N2EwYik6W107fVsnX2lzU2V0J10oXzB4MTQxZTFmKXt2YXIgXzB4MTIwNGMzPV8weDU5ZDkxMDtyZXR1cm4hIShfMHgxNDFlMWYmJl8weDQyYjU4ZltfMHgxMjA0YzMoMHgxMzcpXSYmdGhpc1snX29iamVjdFRvU3RyaW5nJ10oXzB4MTQxZTFmKT09PV8weDEyMDRjMygweDFiNykmJl8weDE0MWUxZltfMHgxMjA0YzMoMHgxNTMpXSk7fVtfMHg1OWQ5MTAoMHhjYildKF8weDFkZGQwNyxfMHgyMDc5OWIsXzB4MTU4ZTdmKXt2YXIgXzB4MjlhNmMxPV8weDU5ZDkxMDtyZXR1cm4gXzB4MTU4ZTdmW18weDI5YTZjMSgweGQxKV0/dHlwZW9mIF8weDFkZGQwN1tfMHgyMDc5OWJdPT0nZnVuY3Rpb24nOiEweDE7fVsnX3R5cGUnXShfMHg1YmM0Mzcpe3ZhciBfMHg1ZTFlNzU9XzB4NTlkOTEwLF8weDM5NTBmNz0nJztyZXR1cm4gXzB4Mzk1MGY3PXR5cGVvZiBfMHg1YmM0MzcsXzB4Mzk1MGY3PT09XzB4NWUxZTc1KDB4MTNmKT90aGlzWydfb2JqZWN0VG9TdHJpbmcnXShfMHg1YmM0MzcpPT09XzB4NWUxZTc1KDB4MTU3KT9fMHgzOTUwZjc9XzB4NWUxZTc1KDB4MTcxKTp0aGlzW18weDVlMWU3NSgweDE2ZSldKF8weDViYzQzNyk9PT1fMHg1ZTFlNzUoMHgxMWYpP18weDM5NTBmNz1fMHg1ZTFlNzUoMHhkNCk6dGhpc1tfMHg1ZTFlNzUoMHgxNmUpXShfMHg1YmM0MzcpPT09XzB4NWUxZTc1KDB4MTVmKT9fMHgzOTUwZjc9XzB4NWUxZTc1KDB4ZTQpOl8weDViYzQzNz09PW51bGw/XzB4Mzk1MGY3PSdudWxsJzpfMHg1YmM0MzdbXzB4NWUxZTc1KDB4MTUyKV0mJihfMHgzOTUwZjc9XzB4NWJjNDM3Wydjb25zdHJ1Y3RvciddW18weDVlMWU3NSgweDE1MCldfHxfMHgzOTUwZjcpOl8weDM5NTBmNz09PSd1bmRlZmluZWQnJiZ0aGlzW18weDVlMWU3NSgweGNkKV0mJl8weDViYzQzNyBpbnN0YW5jZW9mIHRoaXNbXzB4NWUxZTc1KDB4Y2QpXSYmKF8weDM5NTBmNz1fMHg1ZTFlNzUoMHgxNDUpKSxfMHgzOTUwZjc7fVtfMHg1OWQ5MTAoMHgxNmUpXShfMHg0ZWZiYTkpe3ZhciBfMHgyOGRhODM9XzB4NTlkOTEwO3JldHVybiBPYmplY3RbXzB4MjhkYTgzKDB4MTQ4KV1bJ3RvU3RyaW5nJ11bJ2NhbGwnXShfMHg0ZWZiYTkpO31bXzB4NTlkOTEwKDB4MTI2KV0oXzB4M2EyNDY1KXt2YXIgXzB4MjBkYWY5PV8weDU5ZDkxMDtyZXR1cm4gXzB4M2EyNDY1PT09XzB4MjBkYWY5KDB4MTc1KXx8XzB4M2EyNDY1PT09J3N0cmluZyd8fF8weDNhMjQ2NT09PV8weDIwZGFmOSgweGY0KTt9W18weDU5ZDkxMCgweDE4MSldKF8weGM4ZDZjMyl7dmFyIF8weDE1NWFhZj1fMHg1OWQ5MTA7cmV0dXJuIF8weGM4ZDZjMz09PV8weDE1NWFhZigweGRjKXx8XzB4YzhkNmMzPT09J1N0cmluZyd8fF8weGM4ZDZjMz09PV8weDE1NWFhZigweDE1OSk7fVsnX2FkZFByb3BlcnR5J10oXzB4M2JiZDQ0LF8weDJhYTQyOSxfMHgyNzk0NDksXzB4MmI1ZGRmLF8weDE2YmFlNSxfMHhlNDFmZTgpe3ZhciBfMHgyYzExMGQ9dGhpcztyZXR1cm4gZnVuY3Rpb24oXzB4MjIzOTBkKXt2YXIgXzB4NGI5MDRkPV8weDQ3NzMsXzB4ZDAzOTNjPV8weDE2YmFlNVtfMHg0YjkwNGQoMHgxOGQpXVsnY3VycmVudCddLF8weDJhYjA4Nz1fMHgxNmJhZTVbXzB4NGI5MDRkKDB4MThkKV1bXzB4NGI5MDRkKDB4MTFkKV0sXzB4NWMyN2FiPV8weDE2YmFlNVsnbm9kZSddW18weDRiOTA0ZCgweDE4MildO18weDE2YmFlNVtfMHg0YjkwNGQoMHgxOGQpXVtfMHg0YjkwNGQoMHgxODIpXT1fMHhkMDM5M2MsXzB4MTZiYWU1W18weDRiOTA0ZCgweDE4ZCldW18weDRiOTA0ZCgweDExZCldPXR5cGVvZiBfMHgyYjVkZGY9PSdudW1iZXInP18weDJiNWRkZjpfMHgyMjM5MGQsXzB4M2JiZDQ0W18weDRiOTA0ZCgweGQ2KV0oXzB4MmMxMTBkW18weDRiOTA0ZCgweDE2NildKF8weDJhYTQyOSxfMHgyNzk0NDksXzB4MmI1ZGRmLF8weDE2YmFlNSxfMHhlNDFmZTgpKSxfMHgxNmJhZTVbXzB4NGI5MDRkKDB4MThkKV1bXzB4NGI5MDRkKDB4MTgyKV09XzB4NWMyN2FiLF8weDE2YmFlNVtfMHg0YjkwNGQoMHgxOGQpXVtfMHg0YjkwNGQoMHgxMWQpXT1fMHgyYWIwODc7fTt9WydfYWRkT2JqZWN0UHJvcGVydHknXShfMHgzYThjMTksXzB4M2I0NTU0LF8weDRiMGY5OSxfMHg1M2IzNjksXzB4MjdjMjkxLF8weDVhNTRlZixfMHgxZWFkMmEpe3ZhciBfMHg1NTUwZTY9XzB4NTlkOTEwLF8weDNiYzJiOD10aGlzO3JldHVybiBfMHgzYjQ1NTRbXzB4NTU1MGU2KDB4MTIwKStfMHgyN2MyOTFbXzB4NTU1MGU2KDB4MTE5KV0oKV09ITB4MCxmdW5jdGlvbihfMHg0N2RlYmUpe3ZhciBfMHgxNjlkYzQ9XzB4NTU1MGU2LF8weDQ1ZjU2Yz1fMHg1YTU0ZWZbXzB4MTY5ZGM0KDB4MThkKV1bXzB4MTY5ZGM0KDB4ZWMpXSxfMHgyNjdlNDI9XzB4NWE1NGVmW18weDE2OWRjNCgweDE4ZCldW18weDE2OWRjNCgweDExZCldLF8weDhkZDhiND1fMHg1YTU0ZWZbXzB4MTY5ZGM0KDB4MThkKV1bXzB4MTY5ZGM0KDB4MTgyKV07XzB4NWE1NGVmWydub2RlJ11bJ3BhcmVudCddPV8weDQ1ZjU2YyxfMHg1YTU0ZWZbXzB4MTY5ZGM0KDB4MThkKV1bXzB4MTY5ZGM0KDB4MTFkKV09XzB4NDdkZWJlLF8weDNhOGMxOVtfMHgxNjlkYzQoMHhkNildKF8weDNiYzJiOFsnX3Byb3BlcnR5J10oXzB4NGIwZjk5LF8weDUzYjM2OSxfMHgyN2MyOTEsXzB4NWE1NGVmLF8weDFlYWQyYSkpLF8weDVhNTRlZlsnbm9kZSddWydwYXJlbnQnXT1fMHg4ZGQ4YjQsXzB4NWE1NGVmW18weDE2OWRjNCgweDE4ZCldWydpbmRleCddPV8weDI2N2U0Mjt9O31bXzB4NTlkOTEwKDB4MTY2KV0oXzB4NDYzNGJjLF8weDUwZDY3NixfMHgzOTgwZTMsXzB4NGJmNmI2LF8weGU0ZmQ2NSl7dmFyIF8weDJlYzNlZT1fMHg1OWQ5MTAsXzB4MWVjZmI5PXRoaXM7XzB4ZTRmZDY1fHwoXzB4ZTRmZDY1PWZ1bmN0aW9uKF8weDFiZDcxNSxfMHg1YjU0NWEpe3JldHVybiBfMHgxYmQ3MTVbXzB4NWI1NDVhXTt9KTt2YXIgXzB4NDNjZjVmPV8weDM5ODBlM1tfMHgyZWMzZWUoMHgxMTkpXSgpLF8weDQ3MzUyMz1fMHg0YmY2YjZbXzB4MmVjM2VlKDB4MTg4KV18fHt9LF8weDQ0MzA0OT1fMHg0YmY2YjZbXzB4MmVjM2VlKDB4MWIzKV0sXzB4YmNiOWQ9XzB4NGJmNmI2W18weDJlYzNlZSgweGZmKV07dHJ5e3ZhciBfMHhjMTVkOGQ9dGhpc1tfMHgyZWMzZWUoMHgxNWEpXShfMHg0NjM0YmMpLF8weDUxNWU1ZD1fMHg0M2NmNWY7XzB4YzE1ZDhkJiZfMHg1MTVlNWRbMHgwXT09PSdcXFxceDI3JyYmKF8weDUxNWU1ZD1fMHg1MTVlNWRbJ3N1YnN0ciddKDB4MSxfMHg1MTVlNWRbXzB4MmVjM2VlKDB4MWFlKV0tMHgyKSk7dmFyIF8weDVhNjBkNT1fMHg0YmY2YjZbJ2V4cHJlc3Npb25zVG9FdmFsdWF0ZSddPV8weDQ3MzUyM1tfMHgyZWMzZWUoMHgxMjApK18weDUxNWU1ZF07XzB4NWE2MGQ1JiYoXzB4NGJmNmI2WydkZXB0aCddPV8weDRiZjZiNltfMHgyZWMzZWUoMHgxYjMpXSsweDEpLF8weDRiZjZiNltfMHgyZWMzZWUoMHhmZildPSEhXzB4NWE2MGQ1O3ZhciBfMHg0NGY4YzU9dHlwZW9mIF8weDM5ODBlMz09XzB4MmVjM2VlKDB4MTQ3KSxfMHg0ODA4MzQ9eyduYW1lJzpfMHg0NGY4YzV8fF8weGMxNWQ4ZD9fMHg0M2NmNWY6dGhpc1tfMHgyZWMzZWUoMHgxM2QpXShfMHg0M2NmNWYpfTtpZihfMHg0NGY4YzUmJihfMHg0ODA4MzRbJ3N5bWJvbCddPSEweDApLCEoXzB4NTBkNjc2PT09XzB4MmVjM2VlKDB4MTcxKXx8XzB4NTBkNjc2PT09J0Vycm9yJykpe3ZhciBfMHhlMzc4MDM9dGhpc1snX2dldE93blByb3BlcnR5RGVzY3JpcHRvciddKF8weDQ2MzRiYyxfMHgzOTgwZTMpO2lmKF8weGUzNzgwMyYmKF8weGUzNzgwM1snc2V0J10mJihfMHg0ODA4MzRbXzB4MmVjM2VlKDB4MThmKV09ITB4MCksXzB4ZTM3ODAzWydnZXQnXSYmIV8weDVhNjBkNSYmIV8weDRiZjZiNltfMHgyZWMzZWUoMHgxMWEpXSkpcmV0dXJuIF8weDQ4MDgzNFtfMHgyZWMzZWUoMHhmMCldPSEweDAsdGhpc1snX3Byb2Nlc3NUcmVlTm9kZVJlc3VsdCddKF8weDQ4MDgzNCxfMHg0YmY2YjYpLF8weDQ4MDgzNDt9dmFyIF8weDNjNjRkNDt0cnl7XzB4M2M2NGQ0PV8weGU0ZmQ2NShfMHg0NjM0YmMsXzB4Mzk4MGUzKTt9Y2F0Y2goXzB4M2NiMDgyKXtyZXR1cm4gXzB4NDgwODM0PXsnbmFtZSc6XzB4NDNjZjVmLCd0eXBlJzpfMHgyZWMzZWUoMHgxMGEpLCdlcnJvcic6XzB4M2NiMDgyW18weDJlYzNlZSgweDEwMildfSx0aGlzW18weDJlYzNlZSgweDEyOCldKF8weDQ4MDgzNCxfMHg0YmY2YjYpLF8weDQ4MDgzNDt9dmFyIF8weDRhOGUxMD10aGlzW18weDJlYzNlZSgweDEwMCldKF8weDNjNjRkNCksXzB4MTY2NzkzPXRoaXNbJ19pc1ByaW1pdGl2ZVR5cGUnXShfMHg0YThlMTApO2lmKF8weDQ4MDgzNFtfMHgyZWMzZWUoMHgxMzUpXT1fMHg0YThlMTAsXzB4MTY2NzkzKXRoaXNbXzB4MmVjM2VlKDB4MTI4KV0oXzB4NDgwODM0LF8weDRiZjZiNixfMHgzYzY0ZDQsZnVuY3Rpb24oKXt2YXIgXzB4MTM0N2JjPV8weDJlYzNlZTtfMHg0ODA4MzRbXzB4MTM0N2JjKDB4MTZkKV09XzB4M2M2NGQ0W18weDEzNDdiYygweDE0ZildKCksIV8weDVhNjBkNSYmXzB4MWVjZmI5W18weDEzNDdiYygweDE3YildKF8weDRhOGUxMCxfMHg0ODA4MzQsXzB4NGJmNmI2LHt9KTt9KTtlbHNle3ZhciBfMHgzNTNiMWE9XzB4NGJmNmI2W18weDJlYzNlZSgweGZkKV0mJl8weDRiZjZiNltfMHgyZWMzZWUoMHgxODUpXTxfMHg0YmY2YjZbXzB4MmVjM2VlKDB4ZGEpXSYmXzB4NGJmNmI2WydhdXRvRXhwYW5kUHJldmlvdXNPYmplY3RzJ11bXzB4MmVjM2VlKDB4MTA4KV0oXzB4M2M2NGQ0KTwweDAmJl8weDRhOGUxMCE9PV8weDJlYzNlZSgweDFhYikmJl8weDRiZjZiNltfMHgyZWMzZWUoMHhlNSldPF8weDRiZjZiNltfMHgyZWMzZWUoMHgxN2YpXTtfMHgzNTNiMWF8fF8weDRiZjZiNlsnbGV2ZWwnXTxfMHg0NDMwNDl8fF8weDVhNjBkNT8odGhpc1snc2VyaWFsaXplJ10oXzB4NDgwODM0LF8weDNjNjRkNCxfMHg0YmY2YjYsXzB4NWE2MGQ1fHx7fSksdGhpc1tfMHgyZWMzZWUoMHgxMTMpXShfMHgzYzY0ZDQsXzB4NDgwODM0KSk6dGhpc1tfMHgyZWMzZWUoMHgxMjgpXShfMHg0ODA4MzQsXzB4NGJmNmI2LF8weDNjNjRkNCxmdW5jdGlvbigpe3ZhciBfMHgzZjM1Mzc9XzB4MmVjM2VlO18weDRhOGUxMD09PV8weDNmMzUzNygweGQ5KXx8XzB4NGE4ZTEwPT09XzB4M2YzNTM3KDB4MTU1KXx8KGRlbGV0ZSBfMHg0ODA4MzRbJ3ZhbHVlJ10sXzB4NDgwODM0WydjYXBwZWQnXT0hMHgwKTt9KTt9cmV0dXJuIF8weDQ4MDgzNDt9ZmluYWxseXtfMHg0YmY2YjZbJ2V4cHJlc3Npb25zVG9FdmFsdWF0ZSddPV8weDQ3MzUyMyxfMHg0YmY2YjZbXzB4MmVjM2VlKDB4MWIzKV09XzB4NDQzMDQ5LF8weDRiZjZiNlsnaXNFeHByZXNzaW9uVG9FdmFsdWF0ZSddPV8weGJjYjlkO319WydfY2FwSWZTdHJpbmcnXShfMHgzNzRmMjMsXzB4MTA4MmQ2LF8weDQ3ODBiMixfMHhjNzg0NjApe3ZhciBfMHgyMmZhY2I9XzB4NTlkOTEwLF8weDU0YzA2OT1fMHhjNzg0NjBbXzB4MjJmYWNiKDB4ZTMpXXx8XzB4NDc4MGIyW18weDIyZmFjYigweGUzKV07aWYoKF8weDM3NGYyMz09PV8weDIyZmFjYigweDE4MCl8fF8weDM3NGYyMz09PSdTdHJpbmcnKSYmXzB4MTA4MmQ2W18weDIyZmFjYigweDE2ZCldKXtsZXQgXzB4NTBkZWU0PV8weDEwODJkNltfMHgyMmZhY2IoMHgxNmQpXVsnbGVuZ3RoJ107XzB4NDc4MGIyW18weDIyZmFjYigweDEzMildKz1fMHg1MGRlZTQsXzB4NDc4MGIyW18weDIyZmFjYigweDEzMildPl8weDQ3ODBiMlsndG90YWxTdHJMZW5ndGgnXT8oXzB4MTA4MmQ2W18weDIyZmFjYigweDE5YyldPScnLGRlbGV0ZSBfMHgxMDgyZDZbXzB4MjJmYWNiKDB4MTZkKV0pOl8weDUwZGVlND5fMHg1NGMwNjkmJihfMHgxMDgyZDZbXzB4MjJmYWNiKDB4MTljKV09XzB4MTA4MmQ2W18weDIyZmFjYigweDE2ZCldW18weDIyZmFjYigweDEyOSldKDB4MCxfMHg1NGMwNjkpLGRlbGV0ZSBfMHgxMDgyZDZbXzB4MjJmYWNiKDB4MTZkKV0pO319W18weDU5ZDkxMCgweDE1YSldKF8weDUyYWIwYyl7dmFyIF8weDIwMjNhNz1fMHg1OWQ5MTA7cmV0dXJuISEoXzB4NTJhYjBjJiZfMHg0MmI1OGZbXzB4MjAyM2E3KDB4MTU2KV0mJnRoaXNbJ19vYmplY3RUb1N0cmluZyddKF8weDUyYWIwYyk9PT0nW29iamVjdFxcXFx4MjBNYXBdJyYmXzB4NTJhYjBjW18weDIwMjNhNygweDE1MyldKTt9W18weDU5ZDkxMCgweDEzZCldKF8weDRjYjczMil7dmFyIF8weDQwZGE0ZT1fMHg1OWQ5MTA7aWYoXzB4NGNiNzMyW18weDQwZGE0ZSgweDE2YyldKC9eXFxcXGQrJC8pKXJldHVybiBfMHg0Y2I3MzI7dmFyIF8weDRmMjk0ODt0cnl7XzB4NGYyOTQ4PUpTT05bXzB4NDBkYTRlKDB4MThiKV0oJycrXzB4NGNiNzMyKTt9Y2F0Y2h7XzB4NGYyOTQ4PSdcXFxceDIyJyt0aGlzW18weDQwZGE0ZSgweDE2ZSldKF8weDRjYjczMikrJ1xcXFx4MjInO31yZXR1cm4gXzB4NGYyOTQ4WydtYXRjaCddKC9eXFxcIihbYS16QS1aX11bYS16QS1aXzAtOV0qKVxcXCIkLyk/XzB4NGYyOTQ4PV8weDRmMjk0OFsnc3Vic3RyJ10oMHgxLF8weDRmMjk0OFtfMHg0MGRhNGUoMHgxYWUpXS0weDIpOl8weDRmMjk0OD1fMHg0ZjI5NDhbXzB4NDBkYTRlKDB4MTA3KV0oLycvZywnXFxcXHg1Y1xcXFx4MjcnKVtfMHg0MGRhNGUoMHgxMDcpXSgvXFxcXFxcXFxcXFwiL2csJ1xcXFx4MjInKVtfMHg0MGRhNGUoMHgxMDcpXSgvKF5cXFwifFxcXCIkKS9nLCdcXFxceDI3JyksXzB4NGYyOTQ4O31bXzB4NTlkOTEwKDB4MTI4KV0oXzB4MWQ1ZmVhLF8weDViZTRjOSxfMHg0ZDc2MDIsXzB4MTQ0ZTZhKXt2YXIgXzB4MTI3ZDMyPV8weDU5ZDkxMDt0aGlzW18weDEyN2QzMigweGU5KV0oXzB4MWQ1ZmVhLF8weDViZTRjOSksXzB4MTQ0ZTZhJiZfMHgxNDRlNmEoKSx0aGlzWydfYWRkaXRpb25hbE1ldGFkYXRhJ10oXzB4NGQ3NjAyLF8weDFkNWZlYSksdGhpc1tfMHgxMjdkMzIoMHhjZildKF8weDFkNWZlYSxfMHg1YmU0YzkpO31bJ190cmVlTm9kZVByb3BlcnRpZXNCZWZvcmVGdWxsVmFsdWUnXShfMHgxZTY5YjksXzB4OTc2M2Q5KXt2YXIgXzB4MTlkNDk2PV8weDU5ZDkxMDt0aGlzW18weDE5ZDQ5NigweDE5NCldKF8weDFlNjliOSxfMHg5NzYzZDkpLHRoaXNbXzB4MTlkNDk2KDB4MTY5KV0oXzB4MWU2OWI5LF8weDk3NjNkOSksdGhpc1tfMHgxOWQ0OTYoMHgxNTEpXShfMHgxZTY5YjksXzB4OTc2M2Q5KSx0aGlzW18weDE5ZDQ5NigweDE0MCldKF8weDFlNjliOSxfMHg5NzYzZDkpO31bXzB4NTlkOTEwKDB4MTk0KV0oXzB4NDkwMDk1LF8weDJiYmNmNyl7fVsnX3NldE5vZGVRdWVyeVBhdGgnXShfMHg1ZTA2M2MsXzB4MTY1NjZkKXt9Wydfc2V0Tm9kZUxhYmVsJ10oXzB4NDY4NTFkLF8weDMxMDk3OCl7fVtfMHg1OWQ5MTAoMHgxMzgpXShfMHg0MDM0Y2Epe3ZhciBfMHg1NDNiMWI9XzB4NTlkOTEwO3JldHVybiBfMHg0MDM0Y2E9PT10aGlzW18weDU0M2IxYigweDE1ZSldO31bXzB4NTlkOTEwKDB4Y2YpXShfMHg1NGZjMjUsXzB4NTE1MDM0KXt2YXIgXzB4MWU2ZWU1PV8weDU5ZDkxMDt0aGlzWydfc2V0Tm9kZUxhYmVsJ10oXzB4NTRmYzI1LF8weDUxNTAzNCksdGhpc1tfMHgxZTZlZTUoMHgxOTcpXShfMHg1NGZjMjUpLF8weDUxNTAzNFsnc29ydFByb3BzJ10mJnRoaXNbXzB4MWU2ZWU1KDB4MTIxKV0oXzB4NTRmYzI1KSx0aGlzW18weDFlNmVlNSgweGQ1KV0oXzB4NTRmYzI1LF8weDUxNTAzNCksdGhpc1tfMHgxZTZlZTUoMHgxNDIpXShfMHg1NGZjMjUsXzB4NTE1MDM0KSx0aGlzWydfY2xlYW5Ob2RlJ10oXzB4NTRmYzI1KTt9W18weDU5ZDkxMCgweDExMyldKF8weDMyY2I2MixfMHg1ZTZkNzEpe3ZhciBfMHg1YjUwNzk9XzB4NTlkOTEwO2xldCBfMHgyMzc2ZTI7dHJ5e18weDQyYjU4ZlsnY29uc29sZSddJiYoXzB4MjM3NmUyPV8weDQyYjU4ZlsnY29uc29sZSddW18weDViNTA3OSgweDE5YildLF8weDQyYjU4ZlsnY29uc29sZSddW18weDViNTA3OSgweDE5YildPWZ1bmN0aW9uKCl7fSksXzB4MzJjYjYyJiZ0eXBlb2YgXzB4MzJjYjYyW18weDViNTA3OSgweDFhZSldPT0nbnVtYmVyJyYmKF8weDVlNmQ3MVtfMHg1YjUwNzkoMHgxYWUpXT1fMHgzMmNiNjJbXzB4NWI1MDc5KDB4MWFlKV0pO31jYXRjaHt9ZmluYWxseXtfMHgyMzc2ZTImJihfMHg0MmI1OGZbXzB4NWI1MDc5KDB4MTc5KV1bXzB4NWI1MDc5KDB4MTliKV09XzB4MjM3NmUyKTt9aWYoXzB4NWU2ZDcxW18weDViNTA3OSgweDEzNSldPT09J251bWJlcid8fF8weDVlNmQ3MVtfMHg1YjUwNzkoMHgxMzUpXT09PV8weDViNTA3OSgweDE1OSkpe2lmKGlzTmFOKF8weDVlNmQ3MVtfMHg1YjUwNzkoMHgxNmQpXSkpXzB4NWU2ZDcxW18weDViNTA3OSgweGZjKV09ITB4MCxkZWxldGUgXzB4NWU2ZDcxW18weDViNTA3OSgweDE2ZCldO2Vsc2Ugc3dpdGNoKF8weDVlNmQ3MVtfMHg1YjUwNzkoMHgxNmQpXSl7Y2FzZSBOdW1iZXJbXzB4NWI1MDc5KDB4MTRhKV06XzB4NWU2ZDcxW18weDViNTA3OSgweDFhMSldPSEweDAsZGVsZXRlIF8weDVlNmQ3MVtfMHg1YjUwNzkoMHgxNmQpXTticmVhaztjYXNlIE51bWJlcltfMHg1YjUwNzkoMHgxNGIpXTpfMHg1ZTZkNzFbJ25lZ2F0aXZlSW5maW5pdHknXT0hMHgwLGRlbGV0ZSBfMHg1ZTZkNzFbXzB4NWI1MDc5KDB4MTZkKV07YnJlYWs7Y2FzZSAweDA6dGhpc1tfMHg1YjUwNzkoMHhmOCldKF8weDVlNmQ3MVtfMHg1YjUwNzkoMHgxNmQpXSkmJihfMHg1ZTZkNzFbXzB4NWI1MDc5KDB4MTkxKV09ITB4MCk7YnJlYWs7fX1lbHNlIF8weDVlNmQ3MVtfMHg1YjUwNzkoMHgxMzUpXT09PV8weDViNTA3OSgweDFhYikmJnR5cGVvZiBfMHgzMmNiNjJbJ25hbWUnXT09J3N0cmluZycmJl8weDMyY2I2MltfMHg1YjUwNzkoMHgxNTApXSYmXzB4NWU2ZDcxW18weDViNTA3OSgweDE1MCldJiZfMHgzMmNiNjJbJ25hbWUnXSE9PV8weDVlNmQ3MVtfMHg1YjUwNzkoMHgxNTApXSYmKF8weDVlNmQ3MVsnZnVuY05hbWUnXT1fMHgzMmNiNjJbJ25hbWUnXSk7fVtfMHg1OWQ5MTAoMHhmOCldKF8weDM0ZjkzZCl7dmFyIF8weDE1MjhiOD1fMHg1OWQ5MTA7cmV0dXJuIDB4MS9fMHgzNGY5M2Q9PT1OdW1iZXJbXzB4MTUyOGI4KDB4MTRiKV07fVtfMHg1OWQ5MTAoMHgxMjEpXShfMHgxMTE2MzIpe3ZhciBfMHgzMDhhNDM9XzB4NTlkOTEwOyFfMHgxMTE2MzJbXzB4MzA4YTQzKDB4MTJmKV18fCFfMHgxMTE2MzJbXzB4MzA4YTQzKDB4MTJmKV1bXzB4MzA4YTQzKDB4MWFlKV18fF8weDExMTYzMltfMHgzMDhhNDMoMHgxMzUpXT09PSdhcnJheSd8fF8weDExMTYzMltfMHgzMDhhNDMoMHgxMzUpXT09PV8weDMwOGE0MygweDE1Nil8fF8weDExMTYzMltfMHgzMDhhNDMoMHgxMzUpXT09PV8weDMwOGE0MygweDEzNyl8fF8weDExMTYzMltfMHgzMDhhNDMoMHgxMmYpXVtfMHgzMDhhNDMoMHgxYTQpXShmdW5jdGlvbihfMHgxOTFmMDcsXzB4NWMzNmVkKXt2YXIgXzB4NGM4MDQ4PV8weDMwOGE0MyxfMHgxN2U4Yjk9XzB4MTkxZjA3W18weDRjODA0OCgweDE1MCldW18weDRjODA0OCgweDE1YildKCksXzB4NGM0NmEzPV8weDVjMzZlZFtfMHg0YzgwNDgoMHgxNTApXVtfMHg0YzgwNDgoMHgxNWIpXSgpO3JldHVybiBfMHgxN2U4Yjk8XzB4NGM0NmEzPy0weDE6XzB4MTdlOGI5Pl8weDRjNDZhMz8weDE6MHgwO30pO31bXzB4NTlkOTEwKDB4ZDUpXShfMHgyM2I1ZTEsXzB4YzAzMzlmKXt2YXIgXzB4MWRkOWEwPV8weDU5ZDkxMDtpZighKF8weGMwMzM5ZltfMHgxZGQ5YTAoMHhkMSldfHwhXzB4MjNiNWUxW18weDFkZDlhMCgweDEyZildfHwhXzB4MjNiNWUxW18weDFkZDlhMCgweDEyZildWydsZW5ndGgnXSkpe2Zvcih2YXIgXzB4NGU2MThlPVtdLF8weDQzZDc1Nz1bXSxfMHg1ODMzMmM9MHgwLF8weDQyMzM4NT1fMHgyM2I1ZTFbJ3Byb3BzJ11bJ2xlbmd0aCddO18weDU4MzMyYzxfMHg0MjMzODU7XzB4NTgzMzJjKyspe3ZhciBfMHhjMzYyZDg9XzB4MjNiNWUxWydwcm9wcyddW18weDU4MzMyY107XzB4YzM2MmQ4W18weDFkZDlhMCgweDEzNSldPT09XzB4MWRkOWEwKDB4MWFiKT9fMHg0ZTYxOGVbXzB4MWRkOWEwKDB4ZDYpXShfMHhjMzYyZDgpOl8weDQzZDc1N1tfMHgxZGQ5YTAoMHhkNildKF8weGMzNjJkOCk7fWlmKCEoIV8weDQzZDc1N1tfMHgxZGQ5YTAoMHgxYWUpXXx8XzB4NGU2MThlW18weDFkZDlhMCgweDFhZSldPD0weDEpKXtfMHgyM2I1ZTFbJ3Byb3BzJ109XzB4NDNkNzU3O3ZhciBfMHgyYTgzNmE9eydmdW5jdGlvbnNOb2RlJzohMHgwLCdwcm9wcyc6XzB4NGU2MThlfTt0aGlzWydfc2V0Tm9kZUlkJ10oXzB4MmE4MzZhLF8weGMwMzM5ZiksdGhpc1tfMHgxZGQ5YTAoMHhmNSldKF8weDJhODM2YSxfMHhjMDMzOWYpLHRoaXNbXzB4MWRkOWEwKDB4MTk3KV0oXzB4MmE4MzZhKSx0aGlzW18weDFkZDlhMCgweDE0MCldKF8weDJhODM2YSxfMHhjMDMzOWYpLF8weDJhODM2YVsnaWQnXSs9J1xcXFx4MjBmJyxfMHgyM2I1ZTFbXzB4MWRkOWEwKDB4MTJmKV1bXzB4MWRkOWEwKDB4MTc0KV0oXzB4MmE4MzZhKTt9fX1bJ19hZGRMb2FkTm9kZSddKF8weDI3OTRhNSxfMHg0ZThhOGIpe31bJ19zZXROb2RlRXhwYW5kYWJsZVN0YXRlJ10oXzB4NTMwZWQzKXt9W18weDU5ZDkxMCgweGU4KV0oXzB4MTMzYTEzKXt2YXIgXzB4MmEyZTYxPV8weDU5ZDkxMDtyZXR1cm4gQXJyYXlbXzB4MmEyZTYxKDB4MTkyKV0oXzB4MTMzYTEzKXx8dHlwZW9mIF8weDEzM2ExMz09XzB4MmEyZTYxKDB4MTNmKSYmdGhpc1snX29iamVjdFRvU3RyaW5nJ10oXzB4MTMzYTEzKT09PV8weDJhMmU2MSgweDE1Nyk7fVsnX3NldE5vZGVQZXJtaXNzaW9ucyddKF8weDE4OTU0ZixfMHg0NmY0MGYpe31bJ19jbGVhbk5vZGUnXShfMHg1YzIwOGQpe3ZhciBfMHhmMDA5Nzg9XzB4NTlkOTEwO2RlbGV0ZSBfMHg1YzIwOGRbJ19oYXNTeW1ib2xQcm9wZXJ0eU9uSXRzUGF0aCddLGRlbGV0ZSBfMHg1YzIwOGRbXzB4ZjAwOTc4KDB4MTc2KV0sZGVsZXRlIF8weDVjMjA4ZFtfMHhmMDA5NzgoMHgxNWQpXTt9Wydfc2V0Tm9kZUV4cHJlc3Npb25QYXRoJ10oXzB4MmU4ZDk4LF8weDQxZGVlMCl7fX1sZXQgXzB4NDUxOWIwPW5ldyBfMHgxOWMxYTgoKSxfMHg0MGY2MGM9eydwcm9wcyc6MHg2NCwnZWxlbWVudHMnOjB4NjQsJ3N0ckxlbmd0aCc6MHg0MDAqMHgzMiwndG90YWxTdHJMZW5ndGgnOjB4NDAwKjB4MzIsJ2F1dG9FeHBhbmRMaW1pdCc6MHgxMzg4LCdhdXRvRXhwYW5kTWF4RGVwdGgnOjB4YX0sXzB4MTJjNWU3PXsncHJvcHMnOjB4NSwnZWxlbWVudHMnOjB4NSwnc3RyTGVuZ3RoJzoweDEwMCwndG90YWxTdHJMZW5ndGgnOjB4MTAwKjB4MywnYXV0b0V4cGFuZExpbWl0JzoweDFlLCdhdXRvRXhwYW5kTWF4RGVwdGgnOjB4Mn07ZnVuY3Rpb24gXzB4Mjg2N2U2KF8weDRlMGM3YyxfMHgxZTAzZjgsXzB4NDk5YzgyLF8weDVhYThjNSxfMHgzZTMyZjQsXzB4YjVhNzE3KXt2YXIgXzB4M2Y0MGJkPV8weDU5ZDkxMDtsZXQgXzB4MjMwNzEyLF8weGMzZGEwYTt0cnl7XzB4YzNkYTBhPV8weDJlMjBjOCgpLF8weDIzMDcxMj1fMHhmODY0NWJbXzB4MWUwM2Y4XSwhXzB4MjMwNzEyfHxfMHhjM2RhMGEtXzB4MjMwNzEyWyd0cyddPjB4MWY0JiZfMHgyMzA3MTJbXzB4M2Y0MGJkKDB4MTRjKV0mJl8weDIzMDcxMltfMHgzZjQwYmQoMHhmMyldL18weDIzMDcxMltfMHgzZjQwYmQoMHgxNGMpXTwweDY0PyhfMHhmODY0NWJbXzB4MWUwM2Y4XT1fMHgyMzA3MTI9eydjb3VudCc6MHgwLCd0aW1lJzoweDAsJ3RzJzpfMHhjM2RhMGF9LF8weGY4NjQ1YltfMHgzZjQwYmQoMHgxMzQpXT17fSk6XzB4YzNkYTBhLV8weGY4NjQ1YlsnaGl0cyddWyd0cyddPjB4MzImJl8weGY4NjQ1YltfMHgzZjQwYmQoMHgxMzQpXVsnY291bnQnXSYmXzB4Zjg2NDViWydoaXRzJ11bXzB4M2Y0MGJkKDB4ZjMpXS9fMHhmODY0NWJbXzB4M2Y0MGJkKDB4MTM0KV1bJ2NvdW50J108MHg2NCYmKF8weGY4NjQ1YltfMHgzZjQwYmQoMHgxMzQpXT17fSk7bGV0IF8weDE4MzMzZj1bXSxfMHgxNzhjMz1fMHgyMzA3MTJbXzB4M2Y0MGJkKDB4MTU0KV18fF8weGY4NjQ1YltfMHgzZjQwYmQoMHgxMzQpXVsncmVkdWNlTGltaXRzJ10/XzB4MTJjNWU3Ol8weDQwZjYwYyxfMHhlNGMwYj1fMHgyZjI4ODE9Pnt2YXIgXzB4MTFiZGRhPV8weDNmNDBiZDtsZXQgXzB4NDk0OTgzPXt9O3JldHVybiBfMHg0OTQ5ODNbXzB4MTFiZGRhKDB4MTJmKV09XzB4MmYyODgxW18weDExYmRkYSgweDEyZildLF8weDQ5NDk4M1tfMHgxMWJkZGEoMHgxMWIpXT1fMHgyZjI4ODFbXzB4MTFiZGRhKDB4MTFiKV0sXzB4NDk0OTgzWydzdHJMZW5ndGgnXT1fMHgyZjI4ODFbXzB4MTFiZGRhKDB4ZTMpXSxfMHg0OTQ5ODNbXzB4MTFiZGRhKDB4ZWEpXT1fMHgyZjI4ODFbJ3RvdGFsU3RyTGVuZ3RoJ10sXzB4NDk0OTgzW18weDExYmRkYSgweDE3ZildPV8weDJmMjg4MVsnYXV0b0V4cGFuZExpbWl0J10sXzB4NDk0OTgzW18weDExYmRkYSgweGRhKV09XzB4MmYyODgxW18weDExYmRkYSgweGRhKV0sXzB4NDk0OTgzW18weDExYmRkYSgweDE2NyldPSEweDEsXzB4NDk0OTgzW18weDExYmRkYSgweGQxKV09IV8weDEyOTIyOCxfMHg0OTQ5ODNbJ2RlcHRoJ109MHgxLF8weDQ5NDk4M1tfMHgxMWJkZGEoMHgxODUpXT0weDAsXzB4NDk0OTgzW18weDExYmRkYSgweDEwOSldPV8weDExYmRkYSgweGU3KSxfMHg0OTQ5ODNbXzB4MTFiZGRhKDB4ZmUpXT0ncm9vdF9leHAnLF8weDQ5NDk4M1tfMHgxMWJkZGEoMHhmZCldPSEweDAsXzB4NDk0OTgzW18weDExYmRkYSgweGZiKV09W10sXzB4NDk0OTgzW18weDExYmRkYSgweGU1KV09MHgwLF8weDQ5NDk4M1sncmVzb2x2ZUdldHRlcnMnXT0hMHgwLF8weDQ5NDk4M1tfMHgxMWJkZGEoMHgxMzIpXT0weDAsXzB4NDk0OTgzW18weDExYmRkYSgweDE4ZCldPXsnY3VycmVudCc6dm9pZCAweDAsJ3BhcmVudCc6dm9pZCAweDAsJ2luZGV4JzoweDB9LF8weDQ5NDk4Mzt9O2Zvcih2YXIgXzB4MzI3ZmQxPTB4MDtfMHgzMjdmZDE8XzB4M2UzMmY0W18weDNmNDBiZCgweDFhZSldO18weDMyN2ZkMSsrKV8weDE4MzMzZltfMHgzZjQwYmQoMHhkNildKF8weDQ1MTliMFtfMHgzZjQwYmQoMHgxNzApXSh7J3RpbWVOb2RlJzpfMHg0ZTBjN2M9PT0ndGltZSd8fHZvaWQgMHgwfSxfMHgzZTMyZjRbXzB4MzI3ZmQxXSxfMHhlNGMwYihfMHgxNzhjMykse30pKTtpZihfMHg0ZTBjN2M9PT1fMHgzZjQwYmQoMHgxMTEpfHxfMHg0ZTBjN2M9PT0nZXJyb3InKXtsZXQgXzB4MWZkYTMyPUVycm9yW18weDNmNDBiZCgweDE3OCldO3RyeXtFcnJvclsnc3RhY2tUcmFjZUxpbWl0J109MHgxLzB4MCxfMHgxODMzM2ZbXzB4M2Y0MGJkKDB4ZDYpXShfMHg0NTE5YjBbXzB4M2Y0MGJkKDB4MTcwKV0oeydzdGFja05vZGUnOiEweDB9LG5ldyBFcnJvcigpW18weDNmNDBiZCgweGVkKV0sXzB4ZTRjMGIoXzB4MTc4YzMpLHsnc3RyTGVuZ3RoJzoweDEvMHgwfSkpO31maW5hbGx5e0Vycm9yW18weDNmNDBiZCgweDE3OCldPV8weDFmZGEzMjt9fXJldHVybnsnbWV0aG9kJzpfMHgzZjQwYmQoMHgxOWYpLCd2ZXJzaW9uJzpfMHhlMjQwMywnYXJncyc6W3sndHMnOl8weDQ5OWM4Miwnc2Vzc2lvbic6XzB4NWFhOGM1LCdhcmdzJzpfMHgxODMzM2YsJ2lkJzpfMHgxZTAzZjgsJ2NvbnRleHQnOl8weGI1YTcxN31dfTt9Y2F0Y2goXzB4MTQ3MDk3KXtyZXR1cm57J21ldGhvZCc6XzB4M2Y0MGJkKDB4MTlmKSwndmVyc2lvbic6XzB4ZTI0MDMsJ2FyZ3MnOlt7J3RzJzpfMHg0OTljODIsJ3Nlc3Npb24nOl8weDVhYThjNSwnYXJncyc6W3sndHlwZSc6XzB4M2Y0MGJkKDB4MTBhKSwnZXJyb3InOl8weDE0NzA5NyYmXzB4MTQ3MDk3WydtZXNzYWdlJ119XSwnaWQnOl8weDFlMDNmOCwnY29udGV4dCc6XzB4YjVhNzE3fV19O31maW5hbGx5e3RyeXtpZihfMHgyMzA3MTImJl8weGMzZGEwYSl7bGV0IF8weDNhOTQ0Nz1fMHgyZTIwYzgoKTtfMHgyMzA3MTJbXzB4M2Y0MGJkKDB4MTRjKV0rKyxfMHgyMzA3MTJbXzB4M2Y0MGJkKDB4ZjMpXSs9XzB4MmMzYjYoXzB4YzNkYTBhLF8weDNhOTQ0NyksXzB4MjMwNzEyWyd0cyddPV8weDNhOTQ0NyxfMHhmODY0NWJbXzB4M2Y0MGJkKDB4MTM0KV1bJ2NvdW50J10rKyxfMHhmODY0NWJbXzB4M2Y0MGJkKDB4MTM0KV1bJ3RpbWUnXSs9XzB4MmMzYjYoXzB4YzNkYTBhLF8weDNhOTQ0NyksXzB4Zjg2NDViW18weDNmNDBiZCgweDEzNCldWyd0cyddPV8weDNhOTQ0NywoXzB4MjMwNzEyWydjb3VudCddPjB4MzJ8fF8weDIzMDcxMlsndGltZSddPjB4NjQpJiYoXzB4MjMwNzEyW18weDNmNDBiZCgweDE1NCldPSEweDApLChfMHhmODY0NWJbXzB4M2Y0MGJkKDB4MTM0KV1bXzB4M2Y0MGJkKDB4MTRjKV0+MHgzZTh8fF8weGY4NjQ1YltfMHgzZjQwYmQoMHgxMzQpXVtfMHgzZjQwYmQoMHhmMyldPjB4MTJjKSYmKF8weGY4NjQ1YltfMHgzZjQwYmQoMHgxMzQpXVtfMHgzZjQwYmQoMHgxNTQpXT0hMHgwKTt9fWNhdGNoe319fXJldHVybiBfMHgyODY3ZTY7fSgoXzB4MjYwYzQwLF8weDM2YmEyNyxfMHhkMGUzYTQsXzB4NTllNTBlLF8weDQ1NmEwOCxfMHgzNGRhZDIsXzB4MTk0MGRlLF8weDMxODVmNixfMHgzOGQ1NGQsXzB4MWFkMDYzLF8weDUwMTE5Myk9Pnt2YXIgXzB4MmFkN2ZmPV8weDJiY2ExMjtpZihfMHgyNjBjNDBbXzB4MmFkN2ZmKDB4MTNhKV0pcmV0dXJuIF8weDI2MGM0MFtfMHgyYWQ3ZmYoMHgxM2EpXTtpZighSChfMHgyNjBjNDAsXzB4MzE4NWY2LF8weDQ1NmEwOCkpcmV0dXJuIF8weDI2MGM0MFtfMHgyYWQ3ZmYoMHgxM2EpXT17J2NvbnNvbGVMb2cnOigpPT57fSwnY29uc29sZVRyYWNlJzooKT0+e30sJ2NvbnNvbGVUaW1lJzooKT0+e30sJ2NvbnNvbGVUaW1lRW5kJzooKT0+e30sJ2F1dG9Mb2cnOigpPT57fSwnYXV0b0xvZ01hbnknOigpPT57fSwnYXV0b1RyYWNlTWFueSc6KCk9Pnt9LCdjb3ZlcmFnZSc6KCk9Pnt9LCdhdXRvVHJhY2UnOigpPT57fSwnYXV0b1RpbWUnOigpPT57fSwnYXV0b1RpbWVFbmQnOigpPT57fX0sXzB4MjYwYzQwW18weDJhZDdmZigweDEzYSldO2xldCBfMHg1N2NlZWQ9QihfMHgyNjBjNDApLF8weDQ2OTk3Mz1fMHg1N2NlZWRbXzB4MmFkN2ZmKDB4MWI0KV0sXzB4ODZiZjc4PV8weDU3Y2VlZFtfMHgyYWQ3ZmYoMHgxYTYpXSxfMHg1MmZkNzE9XzB4NTdjZWVkW18weDJhZDdmZigweDE0MSldLF8weDNkMjBkNz17J2hpdHMnOnt9LCd0cyc6e319LF8weDFjZTk1Nz1YKF8weDI2MGM0MCxfMHgzOGQ1NGQsXzB4M2QyMGQ3LF8weDM0ZGFkMiksXzB4MjQ0YTdjPV8weDE3ZWZmMj0+e18weDNkMjBkN1sndHMnXVtfMHgxN2VmZjJdPV8weDg2YmY3OCgpO30sXzB4NTMxZDgzPShfMHg0NDY0ODIsXzB4NGVlYTYwKT0+e3ZhciBfMHhlYTdlZWY9XzB4MmFkN2ZmO2xldCBfMHg1YmQ4M2Q9XzB4M2QyMGQ3Wyd0cyddW18weDRlZWE2MF07aWYoZGVsZXRlIF8weDNkMjBkN1sndHMnXVtfMHg0ZWVhNjBdLF8weDViZDgzZCl7bGV0IF8weDQ4Mjk4OD1fMHg0Njk5NzMoXzB4NWJkODNkLF8weDg2YmY3OCgpKTtfMHgyNGE2MmYoXzB4MWNlOTU3KF8weGVhN2VlZigweGYzKSxfMHg0NDY0ODIsXzB4NTJmZDcxKCksXzB4NTQyZWQyLFtfMHg0ODI5ODhdLF8weDRlZWE2MCkpO319LF8weDRmY2NhYz1fMHg0ODQxNjc9Pnt2YXIgXzB4MTEyNjhlPV8weDJhZDdmZixfMHgyOTFjMmQ7cmV0dXJuIF8weDQ1NmEwOD09PV8weDExMjY4ZSgweDFhYykmJl8weDI2MGM0MFtfMHgxMTI2OGUoMHhlZildJiYoKF8weDI5MWMyZD1fMHg0ODQxNjc9PW51bGw/dm9pZCAweDA6XzB4NDg0MTY3WydhcmdzJ10pPT1udWxsP3ZvaWQgMHgwOl8weDI5MWMyZFsnbGVuZ3RoJ10pJiYoXzB4NDg0MTY3W18weDExMjY4ZSgweDEyZSldWzB4MF1bXzB4MTEyNjhlKDB4ZWYpXT1fMHgyNjBjNDBbXzB4MTEyNjhlKDB4ZWYpXSksXzB4NDg0MTY3O307XzB4MjYwYzQwW18weDJhZDdmZigweDEzYSldPXsnY29uc29sZUxvZyc6KF8weDE3NzU4MSxfMHgyMWIwOGQpPT57dmFyIF8weDIwMzgyMD1fMHgyYWQ3ZmY7XzB4MjYwYzQwW18weDIwMzgyMCgweDE3OSldW18weDIwMzgyMCgweDE5ZildW18weDIwMzgyMCgweDE1MCldIT09J2Rpc2FibGVkTG9nJyYmXzB4MjRhNjJmKF8weDFjZTk1NygnbG9nJyxfMHgxNzc1ODEsXzB4NTJmZDcxKCksXzB4NTQyZWQyLF8weDIxYjA4ZCkpO30sJ2NvbnNvbGVUcmFjZSc6KF8weDM3Y2QxNyxfMHgxOTEzZjQpPT57dmFyIF8weDU5YTA1Zj1fMHgyYWQ3ZmYsXzB4MmI3M2UyLF8weDUwMDFiYztfMHgyNjBjNDBbXzB4NTlhMDVmKDB4MTc5KV1bXzB4NTlhMDVmKDB4MTlmKV1bXzB4NTlhMDVmKDB4MTUwKV0hPT0nZGlzYWJsZWRUcmFjZScmJigoXzB4NTAwMWJjPShfMHgyYjczZTI9XzB4MjYwYzQwW18weDU5YTA1ZigweGRkKV0pPT1udWxsP3ZvaWQgMHgwOl8weDJiNzNlMltfMHg1OWEwNWYoMHhjZSldKSE9bnVsbCYmXzB4NTAwMWJjW18weDU5YTA1ZigweDE4ZCldJiYoXzB4MjYwYzQwW18weDU5YTA1ZigweGU2KV09ITB4MCksXzB4MjRhNjJmKF8weDRmY2NhYyhfMHgxY2U5NTcoXzB4NTlhMDVmKDB4MTExKSxfMHgzN2NkMTcsXzB4NTJmZDcxKCksXzB4NTQyZWQyLF8weDE5MTNmNCkpKSk7fSwnY29uc29sZUVycm9yJzooXzB4MWZmZWExLF8weDNlMzk3ZCk9Pnt2YXIgXzB4YmVlMzIyPV8weDJhZDdmZjtfMHgyNjBjNDBbJ19uaW5qYUlnbm9yZU5leHRFcnJvciddPSEweDAsXzB4MjRhNjJmKF8weDRmY2NhYyhfMHgxY2U5NTcoXzB4YmVlMzIyKDB4MTliKSxfMHgxZmZlYTEsXzB4NTJmZDcxKCksXzB4NTQyZWQyLF8weDNlMzk3ZCkpKTt9LCdjb25zb2xlVGltZSc6XzB4ZTM3OGJkPT57XzB4MjQ0YTdjKF8weGUzNzhiZCk7fSwnY29uc29sZVRpbWVFbmQnOihfMHgyOWVjOGMsXzB4NWFiNWNmKT0+e18weDUzMWQ4MyhfMHg1YWI1Y2YsXzB4MjllYzhjKTt9LCdhdXRvTG9nJzooXzB4MmUyZjQ5LF8weDJjOTFiMSk9PntfMHgyNGE2MmYoXzB4MWNlOTU3KCdsb2cnLF8weDJjOTFiMSxfMHg1MmZkNzEoKSxfMHg1NDJlZDIsW18weDJlMmY0OV0pKTt9LCdhdXRvTG9nTWFueSc6KF8weDVkMGY0YixfMHgzMmM2MjApPT57dmFyIF8weGNlMGNhND1fMHgyYWQ3ZmY7XzB4MjRhNjJmKF8weDFjZTk1NyhfMHhjZTBjYTQoMHgxOWYpLF8weDVkMGY0YixfMHg1MmZkNzEoKSxfMHg1NDJlZDIsXzB4MzJjNjIwKSk7fSwnYXV0b1RyYWNlJzooXzB4NWE1ODQyLF8weDQyMzcyMSk9Pnt2YXIgXzB4OWM5YjI5PV8weDJhZDdmZjtfMHgyNGE2MmYoXzB4NGZjY2FjKF8weDFjZTk1NyhfMHg5YzliMjkoMHgxMTEpLF8weDQyMzcyMSxfMHg1MmZkNzEoKSxfMHg1NDJlZDIsW18weDVhNTg0Ml0pKSk7fSwnYXV0b1RyYWNlTWFueSc6KF8weDIxZjAxOCxfMHg1Mzg0MjMpPT57XzB4MjRhNjJmKF8weDRmY2NhYyhfMHgxY2U5NTcoJ3RyYWNlJyxfMHgyMWYwMTgsXzB4NTJmZDcxKCksXzB4NTQyZWQyLF8weDUzODQyMykpKTt9LCdhdXRvVGltZSc6KF8weDQxYzU3MixfMHg0NDMzZTcsXzB4NWFhMDZiKT0+e18weDI0NGE3YyhfMHg1YWEwNmIpO30sJ2F1dG9UaW1lRW5kJzooXzB4MzNkMmFiLF8weDRkM2NmYyxfMHgxOTY4NjkpPT57XzB4NTMxZDgzKF8weDRkM2NmYyxfMHgxOTY4NjkpO30sJ2NvdmVyYWdlJzpfMHhiYzRkYzc9Pnt2YXIgXzB4NTZjMDU4PV8weDJhZDdmZjtfMHgyNGE2MmYoeydtZXRob2QnOl8weDU2YzA1OCgweDEwZiksJ3ZlcnNpb24nOl8weDM0ZGFkMiwnYXJncyc6W3snaWQnOl8weGJjNGRjN31dfSk7fX07bGV0IF8weDI0YTYyZj1xKF8weDI2MGM0MCxfMHgzNmJhMjcsXzB4ZDBlM2E0LF8weDU5ZTUwZSxfMHg0NTZhMDgsXzB4MWFkMDYzLF8weDUwMTE5MyksXzB4NTQyZWQyPV8weDI2MGM0MFtfMHgyYWQ3ZmYoMHgxMmQpXTtyZXR1cm4gXzB4MjYwYzQwW18weDJhZDdmZigweDEzYSldO30pKGdsb2JhbFRoaXMsXzB4MmJjYTEyKDB4MTk1KSwnNTI2MjAnLF8weDJiY2ExMigweDEwNCksXzB4MmJjYTEyKDB4MTA1KSwnMS4wLjAnLCcxNzI3OTczNDExNjE0JyxfMHgyYmNhMTIoMHgxMDMpLCcnLF8weDJiY2ExMigweGQyKSxfMHgyYmNhMTIoMHhkMCkpO1wiKTt9Y2F0Y2goZSl7fX07LyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9mdW5jdGlvbiBvb19vbyhpLC4uLnYpe3RyeXtvb19jbSgpLmNvbnNvbGVMb2coaSwgdik7fWNhdGNoKGUpe30gcmV0dXJuIHZ9Oy8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovZnVuY3Rpb24gb29fdHIoaSwuLi52KXt0cnl7b29fY20oKS5jb25zb2xlVHJhY2UoaSwgdik7fWNhdGNoKGUpe30gcmV0dXJuIHZ9Oy8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovZnVuY3Rpb24gb29fdHgoaSwuLi52KXt0cnl7b29fY20oKS5jb25zb2xlRXJyb3IoaSwgdik7fWNhdGNoKGUpe30gcmV0dXJuIHZ9Oy8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovZnVuY3Rpb24gb29fdHModil7dHJ5e29vX2NtKCkuY29uc29sZVRpbWUodik7fWNhdGNoKGUpe30gcmV0dXJuIHY7fTsvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL2Z1bmN0aW9uIG9vX3RlKHYsIGkpe3RyeXtvb19jbSgpLmNvbnNvbGVUaW1lRW5kKHYsIGkpO31jYXRjaChlKXt9IHJldHVybiB2O307Lyplc2xpbnQgdW5pY29ybi9uby1hYnVzaXZlLWVzbGludC1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvZGlzYWJsZS1lbmFibGUtcGFpcjosZXNsaW50LWNvbW1lbnRzL25vLXVubGltaXRlZC1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvbm8tYWdncmVnYXRpbmctZW5hYmxlOixlc2xpbnQtY29tbWVudHMvbm8tZHVwbGljYXRlLWRpc2FibGU6LGVzbGludC1jb21tZW50cy9uby11bnVzZWQtZGlzYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLXVudXNlZC1lbmFibGU6LCovIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLlxuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIGRlZmluZShJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgZGVmaW5lKEdwLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgZGVmaW5lKEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoXG4gICAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgdG9TdHJpbmdUYWdTeW1ib2wsXG4gICAgXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICk7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIik7XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBkZWZpbmUoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUsIGFzeW5jSXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgZGVmaW5lKEdwLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuXG4gIGRlZmluZShHcCwgXCJ0b1N0cmluZ1wiLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgaW4gbW9kZXJuIGVuZ2luZXNcbiAgLy8gd2UgY2FuIGV4cGxpY2l0bHkgYWNjZXNzIGdsb2JhbFRoaXMuIEluIG9sZGVyIGVuZ2luZXMgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSBcIm9iamVjdFwiKSB7XG4gICAgZ2xvYmFsVGhpcy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xuICB9IGVsc2Uge1xuICAgIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTXVuaWNpcGFsaXR5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ODBkY2IzMiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9NdW5pY2lwYWxpdHkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9NdW5pY2lwYWxpdHkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxXaWxsaWFtXFxcXERvY3VtZW50c1xcXFxGcmVlXFxcXFByb3llY3Rvc1xcXFxwaW50ZXJlc3RcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNTgwZGNiMzInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNTgwZGNiMzInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNTgwZGNiMzInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL011bmljaXBhbGl0eS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTgwZGNiMzImXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNTgwZGNiMzInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL011bmljaXBhbGl0eS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTXVuaWNpcGFsaXR5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL011bmljaXBhbGl0eS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTXVuaWNpcGFsaXR5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ODBkY2IzMiZcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBhdHRyczogeyBcImRhdGEtYXBwXCI6IFwiXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFwiYWxlcnQtdGltZS1vdXRcIiwge1xuICAgICAgICBhdHRyczogeyByZWRpcmVjdDogX3ZtLnJlZGlyZWN0U2Vzc2lvbkZpbmlzaGVkIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgcmVkaXJlY3Q6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdm0udXBkYXRlVGltZU91dCgkZXZlbnQpXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiYWxlcnRcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJtYi0yXCIsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgdGV4dDogX3ZtLnRleHRBbGVydCxcbiAgICAgICAgICBldmVudDogX3ZtLmFsZXJ0RXZlbnQsXG4gICAgICAgICAgc2hvdzogX3ZtLnNob3dBbGVydCxcbiAgICAgICAgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBcInNob3ctYWxlcnRcIjogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS51cGRhdGVBbGVydCgkZXZlbnQpXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidi1kYXRhLXRhYmxlXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiZWxldmF0aW9uLTMgc2hhZG93IHAtMyBtdC0zXCIsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgaGVhZGVyczogX3ZtLmhlYWRlcnMsXG4gICAgICAgICAgaXRlbXM6IF92bS5yZWNvcmRzRmlsdGVyZWQsXG4gICAgICAgICAgXCJzb3J0LWJ5XCI6IFwibmFtZVwiLFxuICAgICAgICB9LFxuICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBcInRvcFwiLFxuICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LXRvb2xiYXJcIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBmbGF0OiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10b29sYmFyLXRpdGxlXCIsIFtfdm0uX3YoXCJNdW5pY2lwaW9zXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtc3BhY2VyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInYtZGlhbG9nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwibWF4LXdpZHRoXCI6IFwiNjAwcHhcIiwgcGVyc2lzdGVudDogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiYWN0aXZhdG9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKHJlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb24gPSByZWYub25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGF0dHJzID0gcmVmLmF0dHJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtcm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGFsaWduOiBcImVuZFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2coXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9iKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1iLTIgYnRuLW5vcm1hbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb3VuZGVkOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgQWdyZWdhclxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkLW5vbmUgZC1tZC1ibG9jayBkLWxnLWJsb2NrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB4czogXCI2XCIsIHNtOiBcIjZcIiwgbWQ6IFwiNlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVuc2U6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiQnVzY2FyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5dXA6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2VhcmNoVmFsdWUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2gsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWFyY2ggPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmRpYWxvZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpYWxvZyA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJkaWFsb2dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmxleGNhcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhlaWdodDogXCIxMDAlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1jYXJkLXRpdGxlXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm14LWF1dG8gcHQtMyBtYi0zIHRleHQtY2VudGVyIGJsYWNrLXNlY29uZGFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5mb3JtVGl0bGUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jYXJkLXRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGVwYXJ0bWVudHMubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1yb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHM6IFwiMTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbTogXCI2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWQ6IFwiNlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiYXNlLXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkRlcGFydGFtZW50b3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0uZGVwYXJ0bWVudHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtOiBcImRlcGFydG1lbnRfbmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiR2LmVkaXRlZEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGVwYXJ0bWVudF9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHYuZWRpdGVkSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kZXBhcnRtZW50X25hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuJG1vZGVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiR2LmVkaXRlZEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kZXBhcnRtZW50X25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIkbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlb2YgJCR2ID09PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAkJHYudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIkdi5lZGl0ZWRJdGVtLmRlcGFydG1lbnRfbmFtZS4kbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHM6IFwiMTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbTogXCI2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWQ6IFwiNlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiYXNlLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiTm9tYnJlIG11bmljaXBpb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiR2LmVkaXRlZEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubXVuaWNpcGFsaXR5X25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uVGV4dFR5cGU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbnNJbnB1dDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluTGVuZ3RoOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHYuZWRpdGVkSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tdW5pY2lwYWxpdHlfbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4kbW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHYuZWRpdGVkSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm11bmljaXBhbGl0eV9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiJG1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiR2LmVkaXRlZEl0ZW0ubXVuaWNpcGFsaXR5X25hbWUuJG1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xzOiBcIjEyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc206IFwiNlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1kOiBcIjZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYmFzZS1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIk5vbWJyZSBtdW5pY2lwaW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kdi5lZGl0ZWRJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm11bl9taW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uVGV4dFR5cGU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbnNJbnB1dDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluTGVuZ3RoOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHYuZWRpdGVkSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tdW5fbWluLiRtb2RlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kdi5lZGl0ZWRJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubXVuX21pbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiRtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIkdi5lZGl0ZWRJdGVtLm11bl9taW4uJG1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xzOiBcIjEyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc206IFwiNlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1kOiBcIjZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYmFzZS1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIk5vbWJyZSBtdW5pY2lwaW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kdi5lZGl0ZWRJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm11bl9tYXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uVGV4dFR5cGU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbnNJbnB1dDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluTGVuZ3RoOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHYuZWRpdGVkSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tdW5fbWF5LiRtb2RlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kdi5lZGl0ZWRJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubXVuX21heSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiRtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIkdi5lZGl0ZWRJdGVtLm11bl9tYXkuJG1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xzOiBcIjEyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc206IFwiNlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1kOiBcIjZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYmFzZS1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIk5vbWJyZSBtdW5pY2lwaW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kdi5lZGl0ZWRJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRtX2NvZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25UZXh0VHlwZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uc0lucHV0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5MZW5ndGg6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kdi5lZGl0ZWRJdGVtLmRtX2NvZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4kbW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHYuZWRpdGVkSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRtX2NvZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiRtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIkdi5lZGl0ZWRJdGVtLmRtX2NvZC4kbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHM6IFwiMTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbTogXCI2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWQ6IFwiNlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiYXNlLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiTm9tYnJlIG11bmljaXBpb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiR2LmVkaXRlZEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY29kX211bixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25UZXh0VHlwZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uc0lucHV0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5MZW5ndGg6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kdi5lZGl0ZWRJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvZF9tdW4uJG1vZGVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiR2LmVkaXRlZEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb2RfbXVuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiJG1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiR2LmVkaXRlZEl0ZW0uY29kX211bi4kbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1yb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGFsaWduOiBcImNlbnRlclwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidG4tbm9ybWFsIG5vLXVwcGVyY2FzZSBtdC0zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91bmRlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5zYXZlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgR3VhcmRhclxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ0bi1ub3JtYWwtY2xvc2Ugbm8tdXBwZXJjYXNlIG10LTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3VuZGVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmNsb3NlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsYXJcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWRpYWxvZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcIm1heC13aWR0aFwiOiBcIjQwMHB4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmRpYWxvZ0RlbGV0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpYWxvZ0RlbGV0ZSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJkaWFsb2dEZWxldGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJoLTEwMFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jb250YWluZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJsYWNrLXNlY29uZGFyeSB0ZXh0LWNlbnRlciBtdC0zIG1iLTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBFbGltaW5hciByZWdpc3Ryb1xcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtcm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGFsaWduOiBcImNlbnRlclwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ0bi1ub3JtYWwgbm8tdXBwZXJjYXNlIG10LTMgbWItMyBwci01IHBsLTUgbXgtYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91bmRlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogX3ZtLmRlbGV0ZUl0ZW1Db25maXJtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDb25maXJtYXJcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnRuLW5vcm1hbC1jbG9zZSBuby11cHBlcmNhc2UgbXQtMyBtYi0zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3VuZGVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5jbG9zZURlbGV0ZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIENhbmNlbGFyXFxuICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgcHJveHk6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6IFwiaXRlbS5hY3Rpb25zXCIsXG4gICAgICAgICAgICAgIGZuOiBmdW5jdGlvbiAocmVmKSB7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSByZWYuaXRlbVxuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWljb25cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1yLTJcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzbWFsbDogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVkaXRJdGVtKGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCIgbWRpLXBlbmNpbCBcIildXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc21hbGw6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5kZWxldGVJdGVtKGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCIgbWRpLWRlbGV0ZSBcIildXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogXCJuby1kYXRhXCIsXG4gICAgICAgICAgICAgIGZuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tbm9ybWFsLXNlY29uZGFyeSBuby1kZWNvcmF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmluaXRpYWxpemUgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgUmVpbmljaWFyXFxuICAgICAgXCIpXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHByb3h5OiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICAgdHJ1ZVxuICAgICAgICApLFxuICAgICAgfSksXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUgKGV4Y2VwdCBmb3IgbW9kdWxlcykuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHNjcmlwdEV4cG9ydHMsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciwgLyogc2VydmVyIG9ubHkgKi9cbiAgc2hhZG93TW9kZSAvKiB2dWUtY2xpIG9ubHkgKi9cbikge1xuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKHJlbmRlcikge1xuICAgIG9wdGlvbnMucmVuZGVyID0gcmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9ICdkYXRhLXYtJyArIHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgKG9wdGlvbnMuZnVuY3Rpb25hbCA/IHRoaXMucGFyZW50IDogdGhpcykuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdFxuICAgICAgICApXG4gICAgICB9XG4gICAgICA6IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9uYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG52YXIgX2RlZmF1bHQgPSAoMCwgX2NvbW1vbi5yZWdleCkoJ2FscGhhJywgL15bYS16QS1aXSokLyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gKDAsIF9jb21tb24ucmVnZXgpKCdhbHBoYU51bScsIC9eW2EtekEtWjAtOV0qJC8pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciBfZGVmYXVsdCA9IGZ1bmN0aW9uIF9kZWZhdWx0KCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgdmFsaWRhdG9ycyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICB2YWxpZGF0b3JzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuICgwLCBfY29tbW9uLndpdGhQYXJhbXMpKHtcbiAgICB0eXBlOiAnYW5kJ1xuICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0b3JzLmxlbmd0aCA+IDAgJiYgdmFsaWRhdG9ycy5yZWR1Y2UoZnVuY3Rpb24gKHZhbGlkLCBmbikge1xuICAgICAgcmV0dXJuIHZhbGlkICYmIGZuLmFwcGx5KF90aGlzLCBhcmdzKTtcbiAgICB9LCB0cnVlKTtcbiAgfSk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciBfZGVmYXVsdCA9IGZ1bmN0aW9uIF9kZWZhdWx0KG1pbiwgbWF4KSB7XG4gIHJldHVybiAoMCwgX2NvbW1vbi53aXRoUGFyYW1zKSh7XG4gICAgdHlwZTogJ2JldHdlZW4nLFxuICAgIG1pbjogbWluLFxuICAgIG1heDogbWF4XG4gIH0sIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiAhKDAsIF9jb21tb24ucmVxKSh2YWx1ZSkgfHwgKCEvXFxzLy50ZXN0KHZhbHVlKSB8fCB2YWx1ZSBpbnN0YW5jZW9mIERhdGUpICYmICttaW4gPD0gK3ZhbHVlICYmICttYXggPj0gK3ZhbHVlO1xuICB9KTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yZXEgPSBleHBvcnRzLnJlZ2V4ID0gZXhwb3J0cy5yZWYgPSBleHBvcnRzLmxlbiA9IHZvaWQgMDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIndpdGhQYXJhbXNcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3dpdGhQYXJhbXMuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfd2l0aFBhcmFtcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3dpdGhQYXJhbXNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbnZhciByZXEgPSBmdW5jdGlvbiByZXEodmFsdWUpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSByZXR1cm4gISF2YWx1ZS5sZW5ndGg7XG5cbiAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAodmFsdWUgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgcmV0dXJuICFpc05hTih2YWx1ZS5nZXRUaW1lKCkpO1xuICB9XG5cbiAgaWYgKF90eXBlb2YodmFsdWUpID09PSAnb2JqZWN0Jykge1xuICAgIGZvciAodmFyIF8gaW4gdmFsdWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiAhIVN0cmluZyh2YWx1ZSkubGVuZ3RoO1xufTtcblxuZXhwb3J0cy5yZXEgPSByZXE7XG5cbnZhciBsZW4gPSBmdW5jdGlvbiBsZW4odmFsdWUpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSByZXR1cm4gdmFsdWUubGVuZ3RoO1xuXG4gIGlmIChfdHlwZW9mKHZhbHVlKSA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aDtcbiAgfVxuXG4gIHJldHVybiBTdHJpbmcodmFsdWUpLmxlbmd0aDtcbn07XG5cbmV4cG9ydHMubGVuID0gbGVuO1xuXG52YXIgcmVmID0gZnVuY3Rpb24gcmVmKHJlZmVyZW5jZSwgdm0sIHBhcmVudFZtKSB7XG4gIHJldHVybiB0eXBlb2YgcmVmZXJlbmNlID09PSAnZnVuY3Rpb24nID8gcmVmZXJlbmNlLmNhbGwodm0sIHBhcmVudFZtKSA6IHBhcmVudFZtW3JlZmVyZW5jZV07XG59O1xuXG5leHBvcnRzLnJlZiA9IHJlZjtcblxudmFyIHJlZ2V4ID0gZnVuY3Rpb24gcmVnZXgodHlwZSwgZXhwcikge1xuICByZXR1cm4gKDAsIF93aXRoUGFyYW1zLmRlZmF1bHQpKHtcbiAgICB0eXBlOiB0eXBlXG4gIH0sIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiAhcmVxKHZhbHVlKSB8fCBleHByLnRlc3QodmFsdWUpO1xuICB9KTtcbn07XG5cbmV4cG9ydHMucmVnZXggPSByZWdleDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciBfZGVmYXVsdCA9ICgwLCBfY29tbW9uLnJlZ2V4KSgnZGVjaW1hbCcsIC9eWy1dP1xcZCooXFwuXFxkKyk/JC8pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciBlbWFpbFJlZ2V4ID0gL14oPzpbQS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKD86XFwuW0EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKykqfFwiKD86W1xceDAxLVxceDA4XFx4MGJcXHgwY1xceDBlLVxceDFmXFx4MjFcXHgyMy1cXHg1YlxceDVkLVxceDdmXXxbXFx4MDEtXFx4MDlcXHgwYlxceDBjXFx4MGUtXFx4N2ZdKSpcIilAKD86KD86W2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP1xcLikrW2EtejAtOV17Mix9KD86W2EtejAtOS1dKlthLXowLTldKT98XFxbKD86KD86MjVbMC01XXwyWzAtNF1bMC05XXxbMDFdP1swLTldWzAtOV0/KVxcLil7M30oPzoyNVswLTVdfDJbMC00XVswLTldfFswMV0/WzAtOV1bMC05XT98W2EtejAtOS1dKlthLXowLTldOig/OltcXHgwMS1cXHgwOFxceDBiXFx4MGNcXHgwZS1cXHgxZlxceDIxLVxceDVhXFx4NTMtXFx4N2ZdfFxcXFxbXFx4MDEtXFx4MDlcXHgwYlxceDBjXFx4MGUtXFx4N2ZdKSspXFxdKSQvaTtcblxudmFyIF9kZWZhdWx0ID0gKDAsIF9jb21tb24ucmVnZXgpKCdlbWFpbCcsIGVtYWlsUmVnZXgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiYWxwaGFcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2FscGhhLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiYWxwaGFOdW1cIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2FscGhhTnVtLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiYW5kXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9hbmQuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJiZXR3ZWVuXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9iZXR3ZWVuLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZGVjaW1hbFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfZGVjaW1hbC5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImVtYWlsXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9lbWFpbC5kZWZhdWx0O1xuICB9XG59KTtcbmV4cG9ydHMuaGVscGVycyA9IHZvaWQgMDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImludGVnZXJcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVnZXIuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJpcEFkZHJlc3NcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2lwQWRkcmVzcy5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIm1hY0FkZHJlc3NcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX21hY0FkZHJlc3MuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJtYXhMZW5ndGhcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX21heExlbmd0aC5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIm1heFZhbHVlXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9tYXhWYWx1ZS5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIm1pbkxlbmd0aFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfbWluTGVuZ3RoLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwibWluVmFsdWVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX21pblZhbHVlLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwibm90XCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9ub3QuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJudW1lcmljXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9udW1lcmljLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwib3JcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX29yLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwicmVxdWlyZWRcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3JlcXVpcmVkLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwicmVxdWlyZWRJZlwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfcmVxdWlyZWRJZi5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInJlcXVpcmVkVW5sZXNzXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9yZXF1aXJlZFVubGVzcy5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInNhbWVBc1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfc2FtZUFzLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidXJsXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF91cmwuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfYWxwaGEgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2FscGhhXCIpKTtcblxudmFyIF9hbHBoYU51bSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vYWxwaGFOdW1cIikpO1xuXG52YXIgX251bWVyaWMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL251bWVyaWNcIikpO1xuXG52YXIgX2JldHdlZW4gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2JldHdlZW5cIikpO1xuXG52YXIgX2VtYWlsID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9lbWFpbFwiKSk7XG5cbnZhciBfaXBBZGRyZXNzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9pcEFkZHJlc3NcIikpO1xuXG52YXIgX21hY0FkZHJlc3MgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL21hY0FkZHJlc3NcIikpO1xuXG52YXIgX21heExlbmd0aCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbWF4TGVuZ3RoXCIpKTtcblxudmFyIF9taW5MZW5ndGggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL21pbkxlbmd0aFwiKSk7XG5cbnZhciBfcmVxdWlyZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3JlcXVpcmVkXCIpKTtcblxudmFyIF9yZXF1aXJlZElmID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9yZXF1aXJlZElmXCIpKTtcblxudmFyIF9yZXF1aXJlZFVubGVzcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcmVxdWlyZWRVbmxlc3NcIikpO1xuXG52YXIgX3NhbWVBcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc2FtZUFzXCIpKTtcblxudmFyIF91cmwgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3VybFwiKSk7XG5cbnZhciBfb3IgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL29yXCIpKTtcblxudmFyIF9hbmQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2FuZFwiKSk7XG5cbnZhciBfbm90ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9ub3RcIikpO1xuXG52YXIgX21pblZhbHVlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9taW5WYWx1ZVwiKSk7XG5cbnZhciBfbWF4VmFsdWUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL21heFZhbHVlXCIpKTtcblxudmFyIF9pbnRlZ2VyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9pbnRlZ2VyXCIpKTtcblxudmFyIF9kZWNpbWFsID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9kZWNpbWFsXCIpKTtcblxudmFyIGhlbHBlcnMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi9jb21tb25cIikpO1xuXG5leHBvcnRzLmhlbHBlcnMgPSBoZWxwZXJzO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApIHsgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsOyB2YXIgY2FjaGVCYWJlbEludGVyb3AgPSBuZXcgV2Vha01hcCgpOyB2YXIgY2FjaGVOb2RlSW50ZXJvcCA9IG5ldyBXZWFrTWFwKCk7IHJldHVybiAoX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKSB7IHJldHVybiBub2RlSW50ZXJvcCA/IGNhY2hlTm9kZUludGVyb3AgOiBjYWNoZUJhYmVsSW50ZXJvcDsgfSkobm9kZUludGVyb3ApOyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaiwgbm9kZUludGVyb3ApIHsgaWYgKCFub2RlSW50ZXJvcCAmJiBvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHsgcmV0dXJuIHsgZGVmYXVsdDogb2JqIH07IH0gdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKTsgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7IHJldHVybiBjYWNoZS5nZXQob2JqKTsgfSB2YXIgbmV3T2JqID0ge307IHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoa2V5ICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsOyBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyBpZiAoY2FjaGUpIHsgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTsgfSByZXR1cm4gbmV3T2JqOyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG52YXIgX2RlZmF1bHQgPSAoMCwgX2NvbW1vbi5yZWdleCkoJ2ludGVnZXInLCAvKF5bMC05XSokKXwoXi1bMC05XSskKS8pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciBfZGVmYXVsdCA9ICgwLCBfY29tbW9uLndpdGhQYXJhbXMpKHtcbiAgdHlwZTogJ2lwQWRkcmVzcydcbn0sIGZ1bmN0aW9uICh2YWx1ZSkge1xuICBpZiAoISgwLCBfY29tbW9uLnJlcSkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBuaWJibGVzID0gdmFsdWUuc3BsaXQoJy4nKTtcbiAgcmV0dXJuIG5pYmJsZXMubGVuZ3RoID09PSA0ICYmIG5pYmJsZXMuZXZlcnkobmliYmxlVmFsaWQpO1xufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuXG52YXIgbmliYmxlVmFsaWQgPSBmdW5jdGlvbiBuaWJibGVWYWxpZChuaWJibGUpIHtcbiAgaWYgKG5pYmJsZS5sZW5ndGggPiAzIHx8IG5pYmJsZS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAobmliYmxlWzBdID09PSAnMCcgJiYgbmliYmxlICE9PSAnMCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoIW5pYmJsZS5tYXRjaCgvXlxcZCskLykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgbnVtZXJpYyA9ICtuaWJibGUgfCAwO1xuICByZXR1cm4gbnVtZXJpYyA+PSAwICYmIG51bWVyaWMgPD0gMjU1O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciBfZGVmYXVsdCA9IGZ1bmN0aW9uIF9kZWZhdWx0KCkge1xuICB2YXIgc2VwYXJhdG9yID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAnOic7XG4gIHJldHVybiAoMCwgX2NvbW1vbi53aXRoUGFyYW1zKSh7XG4gICAgdHlwZTogJ21hY0FkZHJlc3MnXG4gIH0sIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICghKDAsIF9jb21tb24ucmVxKSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIHBhcnRzID0gdHlwZW9mIHNlcGFyYXRvciA9PT0gJ3N0cmluZycgJiYgc2VwYXJhdG9yICE9PSAnJyA/IHZhbHVlLnNwbGl0KHNlcGFyYXRvcikgOiB2YWx1ZS5sZW5ndGggPT09IDEyIHx8IHZhbHVlLmxlbmd0aCA9PT0gMTYgPyB2YWx1ZS5tYXRjaCgvLnsyfS9nKSA6IG51bGw7XG4gICAgcmV0dXJuIHBhcnRzICE9PSBudWxsICYmIChwYXJ0cy5sZW5ndGggPT09IDYgfHwgcGFydHMubGVuZ3RoID09PSA4KSAmJiBwYXJ0cy5ldmVyeShoZXhWYWxpZCk7XG4gIH0pO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5cbnZhciBoZXhWYWxpZCA9IGZ1bmN0aW9uIGhleFZhbGlkKGhleCkge1xuICByZXR1cm4gaGV4LnRvTG93ZXJDYXNlKCkubWF0Y2goL15bMC05YS1mXXsyfSQvKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG52YXIgX2RlZmF1bHQgPSBmdW5jdGlvbiBfZGVmYXVsdChsZW5ndGgpIHtcbiAgcmV0dXJuICgwLCBfY29tbW9uLndpdGhQYXJhbXMpKHtcbiAgICB0eXBlOiAnbWF4TGVuZ3RoJyxcbiAgICBtYXg6IGxlbmd0aFxuICB9LCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gISgwLCBfY29tbW9uLnJlcSkodmFsdWUpIHx8ICgwLCBfY29tbW9uLmxlbikodmFsdWUpIDw9IGxlbmd0aDtcbiAgfSk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciBfZGVmYXVsdCA9IGZ1bmN0aW9uIF9kZWZhdWx0KG1heCkge1xuICByZXR1cm4gKDAsIF9jb21tb24ud2l0aFBhcmFtcykoe1xuICAgIHR5cGU6ICdtYXhWYWx1ZScsXG4gICAgbWF4OiBtYXhcbiAgfSwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuICEoMCwgX2NvbW1vbi5yZXEpKHZhbHVlKSB8fCAoIS9cXHMvLnRlc3QodmFsdWUpIHx8IHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkgJiYgK3ZhbHVlIDw9ICttYXg7XG4gIH0pO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG52YXIgX2RlZmF1bHQgPSBmdW5jdGlvbiBfZGVmYXVsdChsZW5ndGgpIHtcbiAgcmV0dXJuICgwLCBfY29tbW9uLndpdGhQYXJhbXMpKHtcbiAgICB0eXBlOiAnbWluTGVuZ3RoJyxcbiAgICBtaW46IGxlbmd0aFxuICB9LCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gISgwLCBfY29tbW9uLnJlcSkodmFsdWUpIHx8ICgwLCBfY29tbW9uLmxlbikodmFsdWUpID49IGxlbmd0aDtcbiAgfSk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciBfZGVmYXVsdCA9IGZ1bmN0aW9uIF9kZWZhdWx0KG1pbikge1xuICByZXR1cm4gKDAsIF9jb21tb24ud2l0aFBhcmFtcykoe1xuICAgIHR5cGU6ICdtaW5WYWx1ZScsXG4gICAgbWluOiBtaW5cbiAgfSwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuICEoMCwgX2NvbW1vbi5yZXEpKHZhbHVlKSB8fCAoIS9cXHMvLnRlc3QodmFsdWUpIHx8IHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkgJiYgK3ZhbHVlID49ICttaW47XG4gIH0pO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG52YXIgX2RlZmF1bHQgPSBmdW5jdGlvbiBfZGVmYXVsdCh2YWxpZGF0b3IpIHtcbiAgcmV0dXJuICgwLCBfY29tbW9uLndpdGhQYXJhbXMpKHtcbiAgICB0eXBlOiAnbm90J1xuICB9LCBmdW5jdGlvbiAodmFsdWUsIHZtKSB7XG4gICAgcmV0dXJuICEoMCwgX2NvbW1vbi5yZXEpKHZhbHVlKSB8fCAhdmFsaWRhdG9yLmNhbGwodGhpcywgdmFsdWUsIHZtKTtcbiAgfSk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciBfZGVmYXVsdCA9ICgwLCBfY29tbW9uLnJlZ2V4KSgnbnVtZXJpYycsIC9eWzAtOV0qJC8pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciBfZGVmYXVsdCA9IGZ1bmN0aW9uIF9kZWZhdWx0KCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgdmFsaWRhdG9ycyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICB2YWxpZGF0b3JzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuICgwLCBfY29tbW9uLndpdGhQYXJhbXMpKHtcbiAgICB0eXBlOiAnb3InXG4gIH0sIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRvcnMubGVuZ3RoID4gMCAmJiB2YWxpZGF0b3JzLnJlZHVjZShmdW5jdGlvbiAodmFsaWQsIGZuKSB7XG4gICAgICByZXR1cm4gdmFsaWQgfHwgZm4uYXBwbHkoX3RoaXMsIGFyZ3MpO1xuICAgIH0sIGZhbHNlKTtcbiAgfSk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciBfZGVmYXVsdCA9ICgwLCBfY29tbW9uLndpdGhQYXJhbXMpKHtcbiAgdHlwZTogJ3JlcXVpcmVkJ1xufSwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuICgwLCBfY29tbW9uLnJlcSkodmFsdWUudHJpbSgpKTtcbiAgfVxuXG4gIHJldHVybiAoMCwgX2NvbW1vbi5yZXEpKHZhbHVlKTtcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciBfZGVmYXVsdCA9IGZ1bmN0aW9uIF9kZWZhdWx0KHByb3ApIHtcbiAgcmV0dXJuICgwLCBfY29tbW9uLndpdGhQYXJhbXMpKHtcbiAgICB0eXBlOiAncmVxdWlyZWRJZicsXG4gICAgcHJvcDogcHJvcFxuICB9LCBmdW5jdGlvbiAodmFsdWUsIHBhcmVudFZtKSB7XG4gICAgcmV0dXJuICgwLCBfY29tbW9uLnJlZikocHJvcCwgdGhpcywgcGFyZW50Vm0pID8gKDAsIF9jb21tb24ucmVxKSh2YWx1ZSkgOiB0cnVlO1xuICB9KTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gZnVuY3Rpb24gX2RlZmF1bHQocHJvcCkge1xuICByZXR1cm4gKDAsIF9jb21tb24ud2l0aFBhcmFtcykoe1xuICAgIHR5cGU6ICdyZXF1aXJlZFVubGVzcycsXG4gICAgcHJvcDogcHJvcFxuICB9LCBmdW5jdGlvbiAodmFsdWUsIHBhcmVudFZtKSB7XG4gICAgcmV0dXJuICEoMCwgX2NvbW1vbi5yZWYpKHByb3AsIHRoaXMsIHBhcmVudFZtKSA/ICgwLCBfY29tbW9uLnJlcSkodmFsdWUpIDogdHJ1ZTtcbiAgfSk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciBfZGVmYXVsdCA9IGZ1bmN0aW9uIF9kZWZhdWx0KGVxdWFsVG8pIHtcbiAgcmV0dXJuICgwLCBfY29tbW9uLndpdGhQYXJhbXMpKHtcbiAgICB0eXBlOiAnc2FtZUFzJyxcbiAgICBlcTogZXF1YWxUb1xuICB9LCBmdW5jdGlvbiAodmFsdWUsIHBhcmVudFZtKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAoMCwgX2NvbW1vbi5yZWYpKGVxdWFsVG8sIHRoaXMsIHBhcmVudFZtKTtcbiAgfSk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciB1cmxSZWdleCA9IC9eKD86KD86KD86aHR0cHM/fGZ0cCk6KT9cXC9cXC8pKD86XFxTKyg/OjpcXFMqKT9AKT8oPzooPyEoPzoxMHwxMjcpKD86XFwuXFxkezEsM30pezN9KSg/ISg/OjE2OVxcLjI1NHwxOTJcXC4xNjgpKD86XFwuXFxkezEsM30pezJ9KSg/ITE3MlxcLig/OjFbNi05XXwyXFxkfDNbMC0xXSkoPzpcXC5cXGR7MSwzfSl7Mn0pKD86WzEtOV1cXGQ/fDFcXGRcXGR8MlswMV1cXGR8MjJbMC0zXSkoPzpcXC4oPzoxP1xcZHsxLDJ9fDJbMC00XVxcZHwyNVswLTVdKSl7Mn0oPzpcXC4oPzpbMS05XVxcZD98MVxcZFxcZHwyWzAtNF1cXGR8MjVbMC00XSkpfCg/Oig/OlthLXowLTlcXHUwMGExLVxcdWZmZmZdW2EtejAtOVxcdTAwYTEtXFx1ZmZmZl8tXXswLDYyfSk/W2EtejAtOVxcdTAwYTEtXFx1ZmZmZl1cXC4pKyg/OlthLXpcXHUwMGExLVxcdWZmZmZdezIsfVxcLj8pKSg/OjpcXGR7Miw1fSk/KD86Wy8/I11cXFMqKT8kL2k7XG5cbnZhciBfZGVmYXVsdCA9ICgwLCBfY29tbW9uLnJlZ2V4KSgndXJsJywgdXJsUmVnZXgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciB3aXRoUGFyYW1zID0gcHJvY2Vzcy5lbnYuQlVJTEQgPT09ICd3ZWInID8gcmVxdWlyZSgnLi93aXRoUGFyYW1zQnJvd3NlcicpLndpdGhQYXJhbXMgOiByZXF1aXJlKCcuL3BhcmFtcycpLndpdGhQYXJhbXM7XG52YXIgX2RlZmF1bHQgPSB3aXRoUGFyYW1zO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLndpdGhQYXJhbXMgPSB2b2lkIDA7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxudmFyIHJvb3QgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDoge307XG5cbnZhciBmYWtlV2l0aFBhcmFtcyA9IGZ1bmN0aW9uIGZha2VXaXRoUGFyYW1zKHBhcmFtc09yQ2xvc3VyZSwgbWF5YmVWYWxpZGF0b3IpIHtcbiAgaWYgKF90eXBlb2YocGFyYW1zT3JDbG9zdXJlKSA9PT0gJ29iamVjdCcgJiYgbWF5YmVWYWxpZGF0b3IgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBtYXliZVZhbGlkYXRvcjtcbiAgfVxuXG4gIHJldHVybiBwYXJhbXNPckNsb3N1cmUoZnVuY3Rpb24gKCkge30pO1xufTtcblxudmFyIHdpdGhQYXJhbXMgPSByb290LnZ1ZWxpZGF0ZSA/IHJvb3QudnVlbGlkYXRlLndpdGhQYXJhbXMgOiBmYWtlV2l0aFBhcmFtcztcbmV4cG9ydHMud2l0aFBhcmFtcyA9IHdpdGhQYXJhbXM7Il0sIm5hbWVzIjpbImRhdGEiLCJzZWFyY2giLCJkaWFsb2ciLCJkaWFsb2dEZWxldGUiLCJoZWFkZXJzIiwidGV4dCIsInZhbHVlIiwic29ydGFibGUiLCJyZWNvcmRzIiwicmVjb3Jkc0ZpbHRlcmVkIiwiZWRpdGVkSW5kZXgiLCJlZGl0ZWRJdGVtIiwibXVuaWNpcGFsaXR5X25hbWUiLCJkZXBhcnRtZW50X25hbWUiLCJtdW5fbWluIiwibXVuX21heSIsImRtX2NvZCIsImNvZF9tdW4iLCJkZWZhdWx0SXRlbSIsInRleHRBbGVydCIsImFsZXJ0RXZlbnQiLCJzaG93QWxlcnQiLCJkZXBhcnRtZW50cyIsInJlZGlyZWN0U2Vzc2lvbkZpbmlzaGVkIiwidmFsaWRhdGlvbnMiLCJyZXF1aXJlZCIsIm1pbkxlbmd0aCIsIm1heExlbmd0aCIsImNvbXB1dGVkIiwiZm9ybVRpdGxlIiwid2F0Y2giLCJ2YWwiLCJjcmVhdGVkIiwibWV0aG9kcyIsImluaXRpYWxpemUiLCJyZXF1ZXN0cyIsIlByb21pc2UiLCJlcnJvciIsInJlc3BvbnNlcyIsImVkaXRJdGVtIiwiaXRlbSIsImRlbGV0ZUl0ZW0iLCJkZWxldGVJdGVtQ29uZmlybSIsIm11bmljaXBhbGl0eUFwaSIsInJlcyIsImNsb3NlIiwiY2xvc2VEZWxldGUiLCJzYXZlIiwicHV0IiwicG9zdCIsInNlYXJjaFZhbHVlIiwic2VhcmNoQ29uY2F0IiwidXBkYXRlQWxlcnQiLCJ1cGRhdGVUaW1lT3V0IiwiZXZlbnQiLCJheGlvcyIsImRlcGFydG1lbnRBcGkiLCJjcmVhdGUiLCJiYXNlVVJMIiwidmVyaWZ5U2Vzc2lvbkZpbmlzaGVkIiwic3RhdHVzIiwiY29kZSIsImNvbnNvbGUiLCJsb2ciLCJvb19vbyIsIm9vX2NtIiwiZXZhbCIsImUiLCJpIiwidiIsImNvbnNvbGVMb2ciLCJvb190ciIsImNvbnNvbGVUcmFjZSIsIm9vX3R4IiwiY29uc29sZUVycm9yIiwib29fdHMiLCJjb25zb2xlVGltZSIsIm9vX3RlIiwiY29uc29sZVRpbWVFbmQiXSwic291cmNlUm9vdCI6IiJ9