webpackHotUpdate(4,{

/***/ "./pages/founders.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ethereum_wallet__ = __webpack_require__("./ethereum/wallet.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ethereum_web3__ = __webpack_require__("./ethereum/web3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__routes__);

var _jsxFileName = "/home/gustavo/Documents/Github/crowdsaleSemantic/pages/founders.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }








var api = __webpack_require__("./node_modules/etherscan-api/index.js").init("P9RFR324H2Z64CEJ9Q21HGXYGP54N7XIND", "rinkeby", "3000");

var Founders =
/*#__PURE__*/
function (_Component) {
  _inherits(Founders, _Component);

  function Founders() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Founders);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Founders.__proto__ || Object.getPrototypeOf(Founders)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        openAdd: false,
        openReplace: false,
        openRemove: false,
        loading: false,
        value: "",
        addressOwner: "",
        errorMessage: "",
        newOwner: "",
        bWallet: "",
        valueTransaction: "",
        addressTransaction: ""
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleOpen", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return _this.setState({
          openAdd: true
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleClose", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return _this.setState({
          openAdd: false,
          errorMessage: ""
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleOpen2", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return _this.setState({
          openReplace: true
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleClose2", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return _this.setState({
          openReplace: false,
          errorMessage: ""
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleOpen3", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return _this.setState({
          openRemove: true
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleClose3", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return _this.setState({
          openRemove: false,
          errorMessage: ""
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "onSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(event) {
          var accounts;
          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  event.preventDefault();

                  _this.setState({
                    loading: true,
                    errorMessage: ""
                  });

                  _context.prev = 2;
                  _context.next = 5;
                  return __WEBPACK_IMPORTED_MODULE_4__ethereum_web3__["a" /* default */].eth.getAccounts();

                case 5:
                  accounts = _context.sent;
                  _context.next = 8;
                  return __WEBPACK_IMPORTED_MODULE_3__ethereum_wallet__["a" /* default */].methods.addOwner(_this.state.addressOwner).send({
                    from: accounts[0]
                  });

                case 8:
                  __WEBPACK_IMPORTED_MODULE_6__routes__["Router"].pushRoute("/founders");
                  _context.next = 14;
                  break;

                case 11:
                  _context.prev = 11;
                  _context.t0 = _context["catch"](2);

                  _this.setState({
                    errorMessage: _context.t0.message
                  });

                case 14:
                  _this.setState({
                    loading: false,
                    value: "",
                    addressOwner: ""
                  });

                case 15:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[2, 11]]);
        }));

        return function value(_x) {
          return _value.apply(this, arguments);
        };
      }()
    }), Object.defineProperty(_assertThisInitialized(_this), "onSubmit2", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value2 = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2(event) {
          var accounts;
          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  event.preventDefault();

                  _this.setState({
                    loading: true,
                    errorMessage: ""
                  });

                  _context2.prev = 2;
                  _context2.next = 5;
                  return __WEBPACK_IMPORTED_MODULE_4__ethereum_web3__["a" /* default */].eth.getAccounts();

                case 5:
                  accounts = _context2.sent;
                  _context2.next = 8;
                  return __WEBPACK_IMPORTED_MODULE_3__ethereum_wallet__["a" /* default */].methods.replaceOwner(_this.state.addressOwner, _this.state.newOwner).send({
                    from: accounts[0]
                  });

                case 8:
                  __WEBPACK_IMPORTED_MODULE_6__routes__["Router"].pushRoute("/founders");
                  _context2.next = 14;
                  break;

                case 11:
                  _context2.prev = 11;
                  _context2.t0 = _context2["catch"](2);

                  _this.setState({
                    errorMessage: _context2.t0.message
                  });

                case 14:
                  _this.setState({
                    loading: false,
                    value: "",
                    addressOwner: "",
                    newOwner: ""
                  });

                case 15:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this, [[2, 11]]);
        }));

        return function value(_x2) {
          return _value2.apply(this, arguments);
        };
      }()
    }), Object.defineProperty(_assertThisInitialized(_this), "onSubmit3", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value3 = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3(event) {
          var accounts;
          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  event.preventDefault();

                  _this.setState({
                    loading: true,
                    errorMessage: ""
                  });

                  _context3.prev = 2;
                  _context3.next = 5;
                  return __WEBPACK_IMPORTED_MODULE_4__ethereum_web3__["a" /* default */].eth.getAccounts();

                case 5:
                  accounts = _context3.sent;
                  _context3.next = 8;
                  return __WEBPACK_IMPORTED_MODULE_3__ethereum_wallet__["a" /* default */].methods.removeOwner(_this.state.addressOwner).send({
                    from: accounts[0]
                  });

                case 8:
                  __WEBPACK_IMPORTED_MODULE_6__routes__["Router"].pushRoute("/founders");
                  _context3.next = 14;
                  break;

                case 11:
                  _context3.prev = 11;
                  _context3.t0 = _context3["catch"](2);

                  _this.setState({
                    errorMessage: _context3.t0.message
                  });

                case 14:
                  _this.setState({
                    loading: false,
                    value: "",
                    addressOwner: ""
                  });

                case 15:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this, [[2, 11]]);
        }));

        return function value(_x3) {
          return _value3.apply(this, arguments);
        };
      }()
    }), Object.defineProperty(_assertThisInitialized(_this), "onSubmit4", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value4 = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee4(event) {
          var accounts;
          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  event.preventDefault();

                  _this.setState({
                    loading: true,
                    errorMessage: ""
                  });

                  _context4.prev = 2;
                  _context4.next = 5;
                  return __WEBPACK_IMPORTED_MODULE_4__ethereum_web3__["a" /* default */].eth.getAccounts();

                case 5:
                  accounts = _context4.sent;
                  _context4.next = 8;
                  return __WEBPACK_IMPORTED_MODULE_3__ethereum_wallet__["a" /* default */].methods.submitTransaction(_this.state.addressTransaction, _this.state.valueTransaction, "0x00").send({
                    from: accounts[0]
                  });

                case 8:
                  __WEBPACK_IMPORTED_MODULE_6__routes__["Router"].replaceRoute("/");
                  _context4.next = 14;
                  break;

                case 11:
                  _context4.prev = 11;
                  _context4.t0 = _context4["catch"](2);

                  _this.setState({
                    errorMessage: _context4.t0.message
                  });

                case 14:
                  _this.setState({
                    loading: false,
                    addressTransaction: "",
                    valueTransaction: "",
                    errorMessage: ""
                  });

                case 15:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, this, [[2, 11]]);
        }));

        return function value(_x4) {
          return _value4.apply(this, arguments);
        };
      }()
    }), _temp));
  }

  _createClass(Founders, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          isOwner = _props.isOwner,
          listOwners = _props.listOwners,
          balanceWallet = _props.balanceWallet,
          txList = _props.txList;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      }, isOwner ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["f" /* Header */], {
        as: "h2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        }
      }, "Founder's MultiSigWallet Interface", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "https://rinkeby.etherscan.io/address/0x21429e288e0ba214d97825195FeD1D1Fdb4B5678",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["a" /* Button */], {
        floated: "right",
        primary: true,
        animated: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["a" /* Button */].Content, {
        visible: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        }
      }, "View Wallet Contract"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["a" /* Button */].Content, {
        hidden: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["g" /* Icon */], {
        name: "right arrow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        }
      }))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["b" /* Card */], {
        fluid: true,
        color: "green",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["b" /* Card */].Content, {
        textAlign: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["b" /* Card */].Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        }
      }, "MultiSigWallet Balance"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["b" /* Card */].Description, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["m" /* Statistic */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["m" /* Statistic */].Value, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        }
      }, balanceWallet / 1e18), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["m" /* Statistic */].Label, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        }
      }, "ETH"))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["e" /* Form */], {
        onSubmit: this.onSubmit4,
        error: !!this.state.errorMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["e" /* Form */].Group, {
        unstackable: true,
        widths: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["e" /* Form */].Input, {
        placeholder: "Destination address",
        value: this.state.addressTransaction,
        onChange: function onChange(event) {
          return _this2.setState({
            addressTransaction: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["e" /* Form */].Input, {
        icon: "ethereum",
        placeholder: "Value in ETH",
        value: this.state.valueTransaction,
        onChange: function onChange(event) {
          return _this2.setState({
            valueTransaction: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["e" /* Form */].Button, {
        loading: this.state.loading,
        primary: true,
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        }
      }, "Submit a Transaction")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["j" /* Message */], {
        error: true,
        header: "Oops!",
        content: this.state.errorMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        }
      })), "Submit a Transaction", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        }
      }), "Table with summary of transactions to confirm/revoke and tx hash linked to etherscan", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["d" /* Divider */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["n" /* Table */], {
        unstackable: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["n" /* Table */].Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["n" /* Table */].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["n" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        }
      }, "Owner's Address", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["a" /* Button */], {
        inverted: true,
        compact: true,
        color: "red",
        floated: "right",
        onClick: this.handleOpen3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        }
      }, "Remove"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["k" /* Modal */], {
        open: this.state.openRemove,
        onClose: this.handleClose3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["f" /* Header */], {
        content: "Remove an Owner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["k" /* Modal */].Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        }
      }, "Enter the address of the owner to be removed")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["k" /* Modal */].Actions, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["e" /* Form */], {
        onSubmit: this.onSubmi3,
        error: !!this.state.errorMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["e" /* Form */].Input, {
        placeholder: "Address of the Owner to be removed",
        value: this.state.addressOwner,
        onChange: function onChange(event) {
          return _this2.setState({
            addressOwner: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["a" /* Button */], {
        color: "red",
        onClick: this.handleClose3,
        inverted: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        }
      }, "Cancel"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["a" /* Button */], {
        color: "green",
        onClick: this.onSubmit3,
        loading: this.state.loading,
        inverted: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        }
      }, "Remove"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["j" /* Message */], {
        error: true,
        header: "Oops",
        content: this.state.errorMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        }
      })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["a" /* Button */], {
        inverted: true,
        color: "blue",
        compact: true,
        floated: "right",
        onClick: this.handleOpen2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        }
      }, "Replace"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["k" /* Modal */], {
        open: this.state.openReplace,
        onClose: this.handleClose2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["f" /* Header */], {
        content: "Replace an Owner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["k" /* Modal */].Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311
        }
      }, "Enter the address of the owner to be replaced and the address of the new Owner")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["k" /* Modal */].Actions, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["e" /* Form */], {
        onSubmit: this.onSubmit2,
        error: !!this.state.errorMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["e" /* Form */].Input, {
        placeholder: "Address of the Owner to be replaced",
        value: this.state.addressOwner,
        onChange: function onChange(event) {
          return _this2.setState({
            addressOwner: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["e" /* Form */].Input, {
        placeholder: "Address of the new Owner",
        value: this.state.newOwner,
        onChange: function onChange(event) {
          return _this2.setState({
            newOwner: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 330
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["a" /* Button */], {
        color: "red",
        onClick: this.handleClose2,
        inverted: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        }
      }, "Cancel"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["a" /* Button */], {
        color: "green",
        onClick: this.onSubmit2,
        loading: this.state.loading,
        inverted: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346
        }
      }, "Replace"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["j" /* Message */], {
        error: true,
        header: "Oops",
        content: this.state.errorMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354
        }
      })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["a" /* Button */], {
        inverted: true,
        color: "green",
        compact: true,
        floated: "right",
        onClick: this.handleOpen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 362
        }
      }, "Add"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["k" /* Modal */], {
        open: this.state.openAdd,
        onClose: this.handleClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 371
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["f" /* Header */], {
        content: "Add an Owner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["k" /* Modal */].Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 373
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374
        }
      }, "Enter the address of the owner to be added")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["k" /* Modal */].Actions, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 376
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["e" /* Form */], {
        onSubmit: this.onSubmit,
        error: !!this.state.errorMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 377
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["e" /* Form */].Input, {
        placeholder: "Address of the Owner to be added",
        value: this.state.addressOwner,
        onChange: function onChange(event) {
          return _this2.setState({
            addressOwner: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 381
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["a" /* Button */], {
        color: "red",
        onClick: this.handleClose,
        inverted: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 390
        }
      }, "Cancel"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["a" /* Button */], {
        color: "green",
        onClick: this.onSubmit,
        loading: this.state.loading,
        inverted: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 397
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["g" /* Icon */], {
        name: "add",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 403
        }
      }), " Add"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["j" /* Message */], {
        error: true,
        header: "Oops",
        content: this.state.errorMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 405
        }
      }))))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["n" /* Table */].Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 416
        }
      }, listOwners.map(function (address) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["n" /* Table */].Row, {
          key: address,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 419
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["n" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 420
          }
        }, address));
      })))) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 428
        }
      }, "You are Not an Owner!"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee6() {
        var isOwner, listOwners, balanceWallet, txList;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return __WEBPACK_IMPORTED_MODULE_4__ethereum_web3__["a" /* default */].eth.getAccounts().then(
                /*#__PURE__*/
                function () {
                  var _ref2 = _asyncToGenerator(
                  /*#__PURE__*/
                  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee5(accounts) {
                    var ownerBool;
                    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            _context5.next = 2;
                            return __WEBPACK_IMPORTED_MODULE_3__ethereum_wallet__["a" /* default */].methods.isOwner(accounts[0]).call();

                          case 2:
                            ownerBool = _context5.sent;
                            return _context5.abrupt("return", ownerBool);

                          case 4:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    }, _callee5, this);
                  }));

                  return function (_x5) {
                    return _ref2.apply(this, arguments);
                  };
                }());

              case 2:
                isOwner = _context6.sent;
                _context6.next = 5;
                return __WEBPACK_IMPORTED_MODULE_3__ethereum_wallet__["a" /* default */].methods.getOwners().call();

              case 5:
                listOwners = _context6.sent;
                _context6.next = 8;
                return api.account.balance("0x21429e288e0ba214d97825195FeD1D1Fdb4B5678").then(function (balanceData) {
                  return balanceData.result;
                });

              case 8:
                balanceWallet = _context6.sent;
                console.log(balanceWallet);
                _context6.next = 12;
                return api.account.txlist("0x21429e288e0ba214d97825195FeD1D1Fdb4B5678").then(function (temp) {
                  return temp.result;
                });

              case 12:
                txList = _context6.sent;
                console.log(txList[0]);
                console.log(Object.values(txList[0])[1]);
                return _context6.abrupt("return", {
                  isOwner: isOwner,
                  listOwners: listOwners,
                  balanceWallet: balanceWallet,
                  txList: txList
                });

              case 16:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return Founders;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Founders);
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/founders")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})