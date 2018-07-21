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
        openRemove: false
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
    }), _temp));
  }

  _createClass(Founders, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          isOwner = _props.isOwner,
          listOwners = _props.listOwners;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, isOwner ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["e" /* Header */], {
        as: "h1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, "Founder's MultiSigWallet Interface", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "https://kovan.etherscan.io/address/0xedee9c33c8fbbf83e9f87480a26c8cd8e45f496a",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["a" /* Button */], {
        floated: "right",
        primary: true,
        animated: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["a" /* Button */].Content, {
        visible: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, "View Wallet Contract"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["a" /* Button */].Content, {
        hidden: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["f" /* Icon */], {
        name: "right arrow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["k" /* Table */], {
        unstackable: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["k" /* Table */].Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["k" /* Table */].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["k" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, "Owner's Address", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["a" /* Button */], {
        compact: true,
        color: "red",
        floated: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, "Remove"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["a" /* Button */], {
        compact: true,
        floated: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, "Replace"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["i" /* Modal */], {
        trigger: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["a" /* Button */], {
          primary: true,
          compact: true,
          floated: "right",
          onClick: this.handleOpen,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        }, "Add"),
        open: this.state.modalOpen,
        onClose: this.handleClose,
        basic: true,
        size: "small",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["e" /* Header */], {
        icon: "browser",
        content: "Cookies policy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["i" /* Modal */].Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, "This website uses cookies to ensure the best user experience.")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["i" /* Modal */].Actions, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["a" /* Button */], {
        color: "green",
        onClick: this.handleClose,
        inverted: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["f" /* Icon */], {
        name: "checkmark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }), " Got it")))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["k" /* Table */].Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, listOwners.map(function (address) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["k" /* Table */].Row, {
          key: address,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["k" /* Table */].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          }
        }, address));
      })))) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, "You are Not an Owner!"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2() {
        var isOwner, listOwners;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return __WEBPACK_IMPORTED_MODULE_4__ethereum_web3__["a" /* default */].eth.getAccounts().then(
                /*#__PURE__*/
                function () {
                  var _ref2 = _asyncToGenerator(
                  /*#__PURE__*/
                  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(accounts) {
                    var ownerBool;
                    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return __WEBPACK_IMPORTED_MODULE_3__ethereum_wallet__["a" /* default */].methods.isOwner(accounts[0]).call();

                          case 2:
                            ownerBool = _context.sent;
                            return _context.abrupt("return", ownerBool);

                          case 4:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, this);
                  }));

                  return function (_x) {
                    return _ref2.apply(this, arguments);
                  };
                }());

              case 2:
                isOwner = _context2.sent;
                _context2.next = 5;
                return __WEBPACK_IMPORTED_MODULE_3__ethereum_wallet__["a" /* default */].methods.getOwners().call();

              case 5:
                listOwners = _context2.sent;
                return _context2.abrupt("return", {
                  isOwner: isOwner,
                  listOwners: listOwners
                });

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
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