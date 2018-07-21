webpackHotUpdate(6,{

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

var _jsxFileName = "/home/gustavo/Documents/Github/crowdsaleSemantic/pages/founders.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







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
        addressOwner: ""
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
          openAdd: false
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
                  Router.pushRoute("/founders");
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
    }), _temp));
  }

  _createClass(Founders, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          isOwner = _props.isOwner,
          listOwners = _props.listOwners;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, isOwner ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["e" /* Header */], {
        as: "h1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, "Founder's MultiSigWallet Interface", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "https://kovan.etherscan.io/address/0xedee9c33c8fbbf83e9f87480a26c8cd8e45f496a",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["a" /* Button */], {
        floated: "right",
        primary: true,
        animated: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["a" /* Button */].Content, {
        visible: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, "View Wallet Contract"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["a" /* Button */].Content, {
        hidden: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["f" /* Icon */], {
        name: "right arrow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["k" /* Table */], {
        unstackable: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["k" /* Table */].Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["k" /* Table */].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["k" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, "Owner's Address", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["a" /* Button */], {
        compact: true,
        color: "red",
        floated: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, "Remove"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["a" /* Button */], {
        compact: true,
        floated: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, "Replace"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["a" /* Button */], {
        primary: true,
        compact: true,
        floated: "right",
        onClick: this.handleOpen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, "Add"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["i" /* Modal */], {
        open: this.state.openAdd,
        onClose: this.handleClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["e" /* Header */], {
        content: "Add an Owner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["i" /* Modal */].Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, "Enter the address of the owner to be added")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["i" /* Modal */].Actions, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["d" /* Form */], {
        onSubmit: this.onSubmit,
        error: !!this.state.errorMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["d" /* Form */].Input, {
        placeholder: "Address of the Owner to be added",
        value: this.state.addressOwner,
        onChange: function onChange(event) {
          return _this2.setState({
            addressOwner: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["a" /* Button */], {
        color: "red",
        onClick: this.handleClose,
        inverted: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, "Cancel"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["a" /* Button */], {
        color: "green",
        onClick: this.onSubmit,
        loading: this.state.loading,
        inverted: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["f" /* Icon */], {
        name: "add",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }), " Add"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Message, {
        error: true,
        header: "Oops",
        content: errorMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }))))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["k" /* Table */].Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, listOwners.map(function (address) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["k" /* Table */].Row, {
          key: address,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["k" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136
          }
        }, address));
      })))) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      }, "You are Not an Owner!"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3() {
        var isOwner, listOwners;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return __WEBPACK_IMPORTED_MODULE_4__ethereum_web3__["a" /* default */].eth.getAccounts().then(
                /*#__PURE__*/
                function () {
                  var _ref2 = _asyncToGenerator(
                  /*#__PURE__*/
                  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2(accounts) {
                    var ownerBool;
                    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.next = 2;
                            return __WEBPACK_IMPORTED_MODULE_3__ethereum_wallet__["a" /* default */].methods.isOwner(accounts[0]).call();

                          case 2:
                            ownerBool = _context2.sent;
                            return _context2.abrupt("return", ownerBool);

                          case 4:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2, this);
                  }));

                  return function (_x2) {
                    return _ref2.apply(this, arguments);
                  };
                }());

              case 2:
                isOwner = _context3.sent;
                _context3.next = 5;
                return __WEBPACK_IMPORTED_MODULE_3__ethereum_wallet__["a" /* default */].methods.getOwners().call();

              case 5:
                listOwners = _context3.sent;
                return _context3.abrupt("return", {
                  isOwner: isOwner,
                  listOwners: listOwners
                });

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
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
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})