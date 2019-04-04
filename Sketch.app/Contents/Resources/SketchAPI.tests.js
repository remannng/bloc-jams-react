var that = this;
function __skpm_run (key, context) {
  that.context = context;

var exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/@skpm/test-runner/test-runner.sketchplugin/Contents/Sketch/generated-tests.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Source/async/__tests__/async.test.js":
/*!**********************************************!*\
  !*** ./Source/async/__tests__/async.test.js ***!
  \**********************************************/
/*! exports provided: tests, logs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(expect, Promise) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tests", function() { return __skpm_tests__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logs", function() { return __skpm_logs__; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./Source/async/index.ts");
/* globals expect, test, coscript */

var __skpm_logs__ = [];
var __skpm_console_log__ = console.log;

var __hookedLogs = function __hookedLogs(string) {
  __skpm_logs__.push(string);

  return __skpm_console_log__(string);
};

var __skpm_tests__ = {};

var test = function test(description, fn) {
  function withLogs(context, document) {
    console.log = __hookedLogs;
    return fn(context, document);
  }

  __skpm_tests__[description] = withLogs;
};

test.only = function (description, fn) {
  fn.only = true;
  return test(description, fn);
};

test.skip = function (description, fn) {
  fn.skipped = true;
  return test(description, fn);
};


test('should create a fiber', function () {
  var fiber = Object(___WEBPACK_IMPORTED_MODULE_0__["createFiber"])();
  fiber.cleanup();
  expect(fiber).toBeDefined();
  expect(fiber.cleanup).toBeDefined();
  fiber.cleanup();
  expect(fiber.onCleanup).toBeDefined();
});
test('onCleanup should be called when cleaning up the fiber', function () {
  var fiber = Object(___WEBPACK_IMPORTED_MODULE_0__["createFiber"])();
  var cleanedUp = false;
  fiber.onCleanup(function () {
    cleanedUp = true;
  });
  expect(cleanedUp).toBe(false);
  fiber.cleanup();
  expect(cleanedUp).toBe(true);
});
test.only('should keep the plugin around when using a fiber', function () {
  expect.assertions(1); // creates a fiber

  return new Promise(function (resolve) {
    coscript.scheduleWithInterval_jsFunction(0.1, // 0.1s
    function () {
      expect(true).toBe(true);
      resolve();
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@skpm/test-runner/expect/index.js */ "./node_modules/@skpm/test-runner/expect/index.js"), __webpack_require__(/*! ./node_modules/promise-polyfill/lib/index.js */ "./node_modules/promise-polyfill/lib/index.js")))

/***/ }),

/***/ "./Source/async/async.ts":
/*!*******************************!*\
  !*** ./Source/async/async.ts ***!
  \*******************************/
/*! exports provided: createFiber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFiber", function() { return createFiber; });
/* globals coscript */

/**
 * A fiber is a way to keep track of a asynchronous task. The script will stay
 * alive as long as at least one fiber is running.
 *
 * To end a fiber, call `fiber.cleanup()`. This will tell Sketch that it can
 * garbage collect the script if no other fiber is running.
 *
 * You can run a function when the fiber is about to be cleaned up by setting a
 * callback: `fiber.onCleanup(function () {...})`.
 * Always do your clean up in this function instead of doing before calling
 * `fiber.cleanup`: there might be some cases where the fiber will be cleaned
 * up by Sketch so you need to account for that.
 *
 * @return {Fiber} fiber
 */
function createFiber() {
  return coscript.createFiber();
}

/***/ }),

/***/ "./Source/async/index.ts":
/*!*******************************!*\
  !*** ./Source/async/index.ts ***!
  \*******************************/
/*! exports provided: version, createFiber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony import */ var _async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./async */ "./Source/async/async.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createFiber", function() { return _async__WEBPACK_IMPORTED_MODULE_0__["createFiber"]; });


var version = {
  sketch: MSApplicationMetadata.metadata().appVersion,
  api: "2.0.0"
};

/***/ }),

/***/ "./Source/data-supplier/DataSupplier.ts":
/*!**********************************************!*\
  !*** ./Source/data-supplier/DataSupplier.ts ***!
  \**********************************************/
/*! exports provided: registerDataSupplier, deregisterDataSuppliers, supplyData, supplyDataAtIndex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerDataSupplier", function() { return registerDataSupplier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deregisterDataSuppliers", function() { return deregisterDataSuppliers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supplyData", function() { return supplyData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supplyDataAtIndex", function() { return supplyDataAtIndex; });
function getPluginIdentifier() {
  if (!__command.pluginBundle()) {
    throw new Error('It seems that the command is not running in a plugin. Bundle your command in a plugin to use the DataSupplier API.');
  }

  return __command.pluginBundle().identifier();
}
/**
 * Register a function to supply data on request.
 *
 * @param {string} dataType The data type. Currently "public.text" or "public.image" are the only allowed values.
 * @param {string} dataName The data name, will be used as the menu item title for the data.
 * @param {string} dynamicDataKey The key to use to select the dynamic data to supply in onSupplyData.
 */


function registerDataSupplier(dataType, dataName, dynamicDataKey) {
  var dataManager = AppController.sharedInstance().dataSupplierManager();
  var identifier = getPluginIdentifier();

  var commandIdentifier = __command.identifier();

  dataManager.registerPluginDataSupplier_withName_dataType_pluginIdentifier_commandIdentifier(dynamicDataKey, dataName, dataType, identifier, commandIdentifier);
}
/**
 * Deregister any static data or dynamic data providers for a particular plugin. Typically called from the Shutdown method of the plugin.
 */

function deregisterDataSuppliers() {
  var dataManager = AppController.sharedInstance().dataSupplierManager();
  var identifier = getPluginIdentifier();
  dataManager.deregisterDataSuppliersForPluginWithIdentifier(identifier);
}
/**
 * When the plugin providing the dynamic data has finished generating the data, it will call this function with the data key and the data.
 */

function supplyData(key, data) {
  var dataManager = AppController.sharedInstance().dataSupplierManager();
  dataManager.supplyData_forKey(data, key);
}
/**
 * When we want to only supply 1 bit of the requested data.
 */

function supplyDataAtIndex(key, datum, index) {
  var dataManager = AppController.sharedInstance().dataSupplierManager();
  dataManager.supplyData_atIndex_forKey(datum, index, key);
}

/***/ }),

/***/ "./Source/data-supplier/index.ts":
/*!***************************************!*\
  !*** ./Source/data-supplier/index.ts ***!
  \***************************************/
/*! exports provided: version, registerDataSupplier, deregisterDataSuppliers, supplyData, supplyDataAtIndex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony import */ var _DataSupplier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataSupplier */ "./Source/data-supplier/DataSupplier.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerDataSupplier", function() { return _DataSupplier__WEBPACK_IMPORTED_MODULE_0__["registerDataSupplier"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deregisterDataSuppliers", function() { return _DataSupplier__WEBPACK_IMPORTED_MODULE_0__["deregisterDataSuppliers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supplyData", function() { return _DataSupplier__WEBPACK_IMPORTED_MODULE_0__["supplyData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supplyDataAtIndex", function() { return _DataSupplier__WEBPACK_IMPORTED_MODULE_0__["supplyDataAtIndex"]; });


var version = {
  sketch: MSApplicationMetadata.metadata().appVersion,
  api: "2.0.0"
};

/***/ }),

/***/ "./Source/dom/Factory.js":
/*!*******************************!*\
  !*** ./Source/dom/Factory.js ***!
  \*******************************/
/*! exports provided: Factory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Factory", function() { return Factory; });
var Factory = {
  _typeToBox: {},
  _nativeToBox: {},
  _typeToNative: {},
  registerClass: function registerClass(boxedClass, nativeClass) {
    if (!this._typeToBox[boxedClass.type]) {
      this._typeToBox[boxedClass.type] = boxedClass;
      this._typeToNative[boxedClass.type] = nativeClass;
    }

    this._nativeToBox[String(nativeClass.class())] = boxedClass;
  },
  create: function create(type, props) {
    var _type = type && type.type ? type.type : type;

    var BoxedClass = this._typeToBox[_type];

    if (BoxedClass) {
      return new BoxedClass(props);
    }

    return undefined;
  },
  createNative: function createNative(type) {
    var _type = type && type.type ? type.type : type;

    var nativeClass = this._typeToNative[_type];

    if (!nativeClass) {
      throw new Error("don't know how to create a native ".concat(_type));
    }

    return nativeClass;
  }
};

/***/ }),

/***/ "./Source/dom/WrappedObject.js":
/*!*************************************!*\
  !*** ./Source/dom/WrappedObject.js ***!
  \*************************************/
/*! exports provided: DefinedPropertiesKey, WrappedObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefinedPropertiesKey", function() { return DefinedPropertiesKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrappedObject", function() { return WrappedObject; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DefinedPropertiesKey = '_DefinedPropertiesKey';
/**
 * Base class for all objects that
 * wrap Sketch classes.
 */

var WrappedObject =
/*#__PURE__*/
function () {
  function WrappedObject(options) {
    _classCallCheck(this, WrappedObject);

    Object.defineProperty(this, '_object', {
      enumerable: false,
      value: options.sketchObject
    });
    Object.defineProperty(this, 'type', {
      enumerable: true,
      value: this.constructor.type
    });
    this.update(options);
  }

  _createClass(WrappedObject, [{
    key: "update",
    value: function update() {
      var _this = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var propertyList = this.constructor[DefinedPropertiesKey];
      Object.keys(options).sort(function (a, b) {
        if (propertyList[a] && propertyList[a].depends && propertyList[a].depends === b) {
          return 1;
        }

        if (propertyList[b] && propertyList[b].depends && propertyList[b].depends === a) {
          return -1;
        }

        return 0;
      }).forEach(function (k) {
        if (!propertyList[k]) {
          // ignore the properties that starts with _, they are workarounds
          if (k && k[0] !== '_') {
            console.warn("no idea what to do with \"".concat(k, "\" in ").concat(_this.type));
          }

          return;
        }

        if (!propertyList[k].importable) {
          return;
        }

        _this[k] = options[k];
      });
    }
    /**
     * Return a new wrapped object for a given Sketch model object.
     *
     * @param {Object} object - The Sketch model object to wrap.
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      var _this2 = this;

      var propertyList = this.constructor[DefinedPropertiesKey];
      var json = {};
      Object.keys(propertyList).forEach(function (k) {
        if (!propertyList[k].exportable) {
          return;
        }

        var value = _this2[k];

        if (value && Array.isArray(value)) {
          json[k] = value.map(function (x) {
            if (x && typeof x.toJSON === 'function') {
              return x.toJSON();
            }

            return x;
          });
        } else if (value && typeof value.toJSON === 'function') {
          json[k] = value.toJSON();
        } else if (typeof value !== 'undefined') {
          json[k] = value;
        }
      });
      return json;
    }
  }, {
    key: "isImmutable",
    value: function isImmutable() {
      return /Immutable/.test(String(this.sketchObject.className()));
    }
    /**
     * Because the API objects are thin wrappers, they are created on demand and are
     * thrown away regularly.
     *
     * No attempt is made to have a one-to-one correspondence between wrapper and model
     * object - many wrapper instances may exist which point to the same model object.
     *
     * This is not the most efficient solution in some respects, but it's pragmatic and
     * works well for simple cases.
      * Because multiple wrappers might exist for a given model object, if you're
     * testing two for equality, you should test the things that they wrap, rather than
     * the wrapper objects themselves
     * @param {WrappedObject} wrappedObject
     * @return {Boolean} whether the objects are equal or not
     */

  }, {
    key: "isEqual",
    value: function isEqual(wrappedObject) {
      return this.sketchObject == wrappedObject.sketchObject;
    }
    /**
     * Define getter and setter for a property
     * The descriptor needs to at least define `get`
     * There are 2 additional fields in the descriptor that you can set: `importable` and `exportable`
     *
     * a property that is `importable` is a property that can be set when creating the object or updating it
     * a property that is `exportable` is a property that will show when calling `toJSON`
     *
     * @param {string} propertyName - the name of the property
     * @param {Object} descriptor - the descriptor for the property (see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)
     *
     * When returning an array, we also need to add some additional descriptions to handle mutating the owner when mutating the array.
     * So when returning an array, you need to add the following properties to the descriptor:
     *  {
     *    array: true,
     *    insertItem: (item, index) => void,
     *    removeItem: (index) => removedItem
     *  }
     */

  }], [{
    key: "fromNative",
    value: function fromNative(sketchObject) {
      if (!sketchObject) {
        return sketchObject;
      }

      return new this({
        sketchObject: sketchObject
      });
    }
  }, {
    key: "define",
    value: function define(propertyName, descriptor) {
      this._addDescriptor(propertyName, descriptor); // if we return an array, we need to hook into the method that mutates it
      // so that we can modify the owner


      if (descriptor.array && typeof descriptor.set !== 'undefined') {
        if (!descriptor.insertItem || !descriptor.removeItem) {
          throw new Error('missing method to mutate the array');
        }

        var oldGet = descriptor.get; // eslint-disable-next-line no-param-reassign

        descriptor.get = function get() {
          var _this3 = this;

          var arr = oldGet.bind(this)();

          if (!Array.isArray(arr)) {
            return arr;
          }

          arr.reverse = function () {
            Array.prototype.reverse.apply(arr);
            descriptor.set.bind(_this3)(arr);
          };

          arr.sort = function (compareFunction) {
            Array.prototype.reverse.apply(arr, [compareFunction]);
            descriptor.set.bind(_this3)(arr);
          };

          arr.fill = function (value, start, end) {
            Array.prototype.reverse.apply(arr, [value, start, end]);
            descriptor.set.bind(_this3)(arr);
          };

          arr.splice = function (start, count) {
            if (start < 0) {
              // eslint-disable-next-line no-param-reassign
              start += arr.length;
            }

            if (!start || start < 0 || start > arr.length) {
              // eslint-disable-next-line no-param-reassign
              start = 0;
            }

            if (typeof count === 'undefined' || count > arr.length - start) {
              // eslint-disable-next-line no-param-reassign
              count = arr.length - start;
            }

            var removedItems = [];

            for (var i = start; i < count + start; i += 1) {
              removedItems.push(descriptor.removeItem.bind(_this3)(i));
            }

            var addedItems = [];

            for (var _len = arguments.length, items = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
              items[_key - 2] = arguments[_key];
            }

            items.forEach(function (item, i) {
              addedItems.push(descriptor.insertItem.bind(_this3)(item, start + i));
            }); // call the native function

            Array.prototype.splice.apply(arr, [start, count].concat(addedItems));
            return removedItems;
          };

          arr.push = function () {
            for (var _len2 = arguments.length, items = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              items[_key2] = arguments[_key2];
            }

            arr.splice.apply(arr, [arr.length, 0].concat(items));
            return arr.length;
          };

          arr.unshift = function () {
            for (var _len3 = arguments.length, items = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              items[_key3] = arguments[_key3];
            }

            arr.splice.apply(arr, [0, 0].concat(items));
            return arr.length;
          };

          arr.pop = function () {
            return arr.splice(arr.length - 1)[0];
          };

          arr.shift = function () {
            return arr.splice(0, 1)[0];
          };

          return arr;
        };
      }

      Object.defineProperty(this.prototype, propertyName, descriptor);
    }
  }, {
    key: "defineObject",
    value: function defineObject(propertyName, fields) {
      var descriptor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var privateKey = "_".concat(propertyName);
      var privateClassKey = "_".concat(propertyName, "Class");

      var NestedProperty =
      /*#__PURE__*/
      function () {
        function NestedProperty(object) {
          _classCallCheck(this, NestedProperty);

          var self = this;
          Object.defineProperty(self, '_parent', {
            enumerable: false,
            value: object
          });
          Object.defineProperty(self, '_object', {
            enumerable: false,
            value: object.sketchObject
          });
          Object.defineProperty(self, '_keys', {
            enumerable: false,
            writable: true,
            value: Object.keys(fields)
          });

          self._keys.forEach(function (field) {
            Object.defineProperty(self, field, fields[field]);
          });
        }

        _createClass(NestedProperty, [{
          key: "toJSON",
          value: function toJSON() {
            var _this4 = this;

            return this._keys.reduce(function (prev, field) {
              // eslint-disable-next-line no-param-reassign
              prev[field] = _this4[field];
              return prev;
            }, {});
          }
        }]);

        return NestedProperty;
      }();

      this[privateClassKey] = NestedProperty;

      var fullDescriptor = _objectSpread({}, descriptor, {
        get: function get() {
          if (this[privateKey]) {
            return this[privateKey];
          } // cache the instance


          var _NestedProperty = this.constructor[privateClassKey];
          Object.defineProperty(this, privateKey, {
            enumerable: false,
            value: new _NestedProperty(this)
          });
          return this[privateKey];
        },
        set: function set(object) {
          var proxy = this[propertyName];
          Object.keys(object).forEach(function (k) {
            proxy[k] = object[k];
          });
        }
      });

      this._addDescriptor(propertyName, fullDescriptor);

      Object.defineProperty(this.prototype, propertyName, fullDescriptor);
    }
  }, {
    key: "extendObject",
    value: function extendObject(propertyName, fields) {
      var privateClassKey = "_".concat(propertyName, "Class");

      if (!this[privateClassKey]) {
        throw new Error('missing super class');
      }

      var NestedProperty =
      /*#__PURE__*/
      function (_this$privateClassKey) {
        _inherits(NestedProperty, _this$privateClassKey);

        function NestedProperty(object) {
          var _this5;

          _classCallCheck(this, NestedProperty);

          _this5 = _possibleConstructorReturn(this, _getPrototypeOf(NestedProperty).call(this, object));

          var self = _assertThisInitialized(_assertThisInitialized(_this5));

          var newKeys = Object.keys(fields);
          _this5._keys = _this5._keys.concat(newKeys);
          newKeys.forEach(function (field) {
            Object.defineProperty(self, field, fields[field]);
          });
          return _this5;
        }

        return NestedProperty;
      }(this[privateClassKey]);

      this[privateClassKey] = NestedProperty;
    }
    /**
     * we want to keep track of the defined properties and their order
     *
     * @param {string} propertyName
     * @param {Object} descriptor
     */

  }, {
    key: "_addDescriptor",
    value: function _addDescriptor(propertyName, descriptor) {
      /* eslint-disable no-param-reassign */
      descriptor.propertyName = propertyName;

      if (descriptor.enumerable == null) {
        descriptor.enumerable = true;
      }

      if (descriptor.exportable == null) {
        descriptor.exportable = true;
      }

      if (descriptor.importable == null) {
        descriptor.importable = true;
      }

      descriptor.importable = descriptor.importable && typeof descriptor.set !== 'undefined';
      descriptor.exportable = descriptor.exportable && typeof descriptor.get !== 'undefined'; // properties starting with `_` are considered private

      if (propertyName[0] === '_') {
        return;
      }

      this[DefinedPropertiesKey][propertyName] = descriptor;
      /* eslint-enable */
    }
  }]);

  return WrappedObject;
}();
WrappedObject[DefinedPropertiesKey] = {};
WrappedObject.define('type', {
  exportable: true,
  importable: false,
  get: function get() {
    return this.type;
  }
});
WrappedObject.define('id', {
  exportable: true,
  importable: false,

  /**
   * Returns the object ID of the wrapped Sketch model object.
   *
   * @return {string} The id.
   */
  get: function get() {
    return String(this._object.objectID());
  }
});
WrappedObject.define('sketchObject', {
  exportable: false,
  enumerable: false,
  importable: false,

  /**
   * Returns the wrapped Sketch object.
   */
  get: function get() {
    return this._object;
  }
});
WrappedObject.define('_isWrappedObject', {
  enumerable: false,
  exportable: false,
  get: function get() {
    return true;
  }
});

/***/ }),

/***/ "./Source/dom/__tests__/WrappedObject.test.js":
/*!****************************************************!*\
  !*** ./Source/dom/__tests__/WrappedObject.test.js ***!
  \****************************************************/
/*! exports provided: tests, logs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(expect) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tests", function() { return __skpm_tests__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logs", function() { return __skpm_logs__; });
/* harmony import */ var _WrappedObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../WrappedObject */ "./Source/dom/WrappedObject.js");
/* globals expect, test */

var __skpm_logs__ = [];
var __skpm_console_log__ = console.log;

var __hookedLogs = function __hookedLogs(string) {
  __skpm_logs__.push(string);

  return __skpm_console_log__(string);
};

var __skpm_tests__ = {};

var test = function test(description, fn) {
  function withLogs(context, document) {
    console.log = __hookedLogs;
    return fn(context, document);
  }

  __skpm_tests__[description] = withLogs;
};

test.only = function (description, fn) {
  fn.only = true;
  return test(description, fn);
};

test.skip = function (description, fn) {
  fn.skipped = true;
  return test(description, fn);
};


test('should keep the wrapped object in sketchObject', function () {
  var object = MSLayer.new();
  var wrapped = _WrappedObject__WEBPACK_IMPORTED_MODULE_0__["WrappedObject"].fromNative(object);
  expect(wrapped.sketchObject).toBe(object);
});
test('should expose the ID of the object', function () {
  var object = MSLayer.new();
  var wrapped = _WrappedObject__WEBPACK_IMPORTED_MODULE_0__["WrappedObject"].fromNative(object);
  expect(wrapped.id).toBe(String(object.objectID()));
});
test('should have _isWrappedObject set to true', function () {
  var object = MSLayer.new();
  var wrapped = _WrappedObject__WEBPACK_IMPORTED_MODULE_0__["WrappedObject"].fromNative(object);
  expect(wrapped._isWrappedObject).toBe(true);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@skpm/test-runner/expect/index.js */ "./node_modules/@skpm/test-runner/expect/index.js")))

/***/ }),

/***/ "./Source/dom/__tests__/export.test.js":
/*!*********************************************!*\
  !*** ./Source/dom/__tests__/export.test.js ***!
  \*********************************************/
/*! exports provided: tests, logs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(expect) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tests", function() { return __skpm_tests__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logs", function() { return __skpm_logs__; });
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! buffer */ "./core-modules/node_modules/@skpm/buffer/index.js");
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(buffer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _test_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../test-utils */ "./Source/test-utils.ts");
/* harmony import */ var _export__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../export */ "./Source/dom/export.js");
/* harmony import */ var _layers_Shape__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layers/Shape */ "./Source/dom/layers/Shape.js");
/* globals expect, test */




var __skpm_logs__ = [];
var __skpm_console_log__ = console.log;

var __hookedLogs = function __hookedLogs(string) {
  __skpm_logs__.push(string);

  return __skpm_console_log__(string);
};

var __skpm_tests__ = {};

var test = function test(description, fn) {
  function withLogs(context, document) {
    console.log = __hookedLogs;
    return fn(context, document);
  }

  __skpm_tests__[description] = withLogs;
};

test.only = function (description, fn) {
  fn.only = true;
  return test(description, fn);
};

test.skip = function (description, fn) {
  fn.skipped = true;
  return test(description, fn);
};


test('should return exported json data', function () {
  var object = new _layers_Shape__WEBPACK_IMPORTED_MODULE_3__["Shape"]();
  var archive = Object(_export__WEBPACK_IMPORTED_MODULE_2__["exportObject"])(object, {
    formats: 'json',
    output: false
  });
  expect(archive.do_objectID).toEqual(String(object.id));
  expect(archive._class).toEqual('shapeGroup');
});
test('should return array of exported json data', function () {
  var objects = [new _layers_Shape__WEBPACK_IMPORTED_MODULE_3__["Shape"](), new _layers_Shape__WEBPACK_IMPORTED_MODULE_3__["Shape"]()];
  var archive = Object(_export__WEBPACK_IMPORTED_MODULE_2__["exportObject"])(objects, {
    formats: 'json',
    output: false
  });
  expect(archive.length).toBe(2);
  expect(archive[0].do_objectID).toEqual(String(objects[0].id));
  expect(archive[1].do_objectID).toEqual(String(objects[1].id));
});
test('should restore object from json data', function () {
  var object = new _layers_Shape__WEBPACK_IMPORTED_MODULE_3__["Shape"]();
  var archive = Object(_export__WEBPACK_IMPORTED_MODULE_2__["exportObject"])(object, {
    formats: ['json'],
    output: false
  });
  var restored = Object(_export__WEBPACK_IMPORTED_MODULE_2__["objectFromJSON"])(archive);
  expect(restored.id).toEqual(String(object.id));
});
test('Should fail with no object provided', function () {
  try {
    Object(_export__WEBPACK_IMPORTED_MODULE_2__["exportObject"])([], {
      output: false
    });
  } catch (err) {
    expect(err.message).toMatch('No objects provided to export');
  }
});

if (!Object(_test_utils__WEBPACK_IMPORTED_MODULE_1__["isRunningOnJenkins"])()) {
  test('Should return a buffer', function (context, document) {
    var object = new _layers_Shape__WEBPACK_IMPORTED_MODULE_3__["Shape"]({
      parent: document.selectedPage
    });
    var buffer = Object(_export__WEBPACK_IMPORTED_MODULE_2__["exportObject"])(object, {
      formats: 'png',
      output: false
    });
    expect(buffer__WEBPACK_IMPORTED_MODULE_0__["Buffer"].isBuffer(buffer)).toBe(true);
  });
}

test('should fail with to return with multiple formats', function () {
  try {
    var object = new _layers_Shape__WEBPACK_IMPORTED_MODULE_3__["Shape"]();
    Object(_export__WEBPACK_IMPORTED_MODULE_2__["exportObject"])(object, {
      formats: ['png', 'json'],
      output: false
    });
    expect(false).toBe(true);
  } catch (err) {
    expect(err.message).toMatch('Can only return 1 format with no output type');
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@skpm/test-runner/expect/index.js */ "./node_modules/@skpm/test-runner/expect/index.js")))

/***/ }),

/***/ "./Source/dom/__tests__/globalAssets.test.js":
/*!***************************************************!*\
  !*** ./Source/dom/__tests__/globalAssets.test.js ***!
  \***************************************************/
/*! exports provided: tests, logs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(expect) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tests", function() { return __skpm_tests__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logs", function() { return __skpm_logs__; });
/* harmony import */ var _test_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../test-utils */ "./Source/test-utils.ts");
/* harmony import */ var _globalAssets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globalAssets */ "./Source/dom/globalAssets.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* globals expect, test */


var __skpm_logs__ = [];
var __skpm_console_log__ = console.log;

var __hookedLogs = function __hookedLogs(string) {
  __skpm_logs__.push(string);

  return __skpm_console_log__(string);
};

var __skpm_tests__ = {};

var test = function test(description, fn) {
  function withLogs(context, document) {
    console.log = __hookedLogs;
    return fn(context, document);
  }

  __skpm_tests__[description] = withLogs;
};

test.only = function (description, fn) {
  fn.only = true;
  return test(description, fn);
};

test.skip = function (description, fn) {
  fn.skipped = true;
  return test(description, fn);
};



if (!Object(_test_utils__WEBPACK_IMPORTED_MODULE_0__["isRunningOnJenkins"])()) {
  test('should return global colors', function () {
    var colors = Object(_globalAssets__WEBPACK_IMPORTED_MODULE_1__["getGlobalColors"])();
    expect(colors.length > 0).toBe(true);
    expect(colors[0].type).toBe('ColorAsset');
    expect(_typeof(colors[0].color)).toBe('string');
  });
  test('should return global gradients', function () {
    var gradients = Object(_globalAssets__WEBPACK_IMPORTED_MODULE_1__["getGlobalGradients"])();
    expect(gradients.length > 0).toBe(true);
    expect(gradients[0].type).toBe('GradientAsset');
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@skpm/test-runner/expect/index.js */ "./node_modules/@skpm/test-runner/expect/index.js")))

/***/ }),

/***/ "./Source/dom/__tests__/import.test.js":
/*!*********************************************!*\
  !*** ./Source/dom/__tests__/import.test.js ***!
  \*********************************************/
/*! exports provided: tests, logs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(expect) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tests", function() { return __skpm_tests__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logs", function() { return __skpm_logs__; });
/* harmony import */ var _test_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../test-utils */ "./Source/test-utils.ts");
/* harmony import */ var _import__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../import */ "./Source/dom/import.js");
/* harmony import */ var _models_Rectangle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/Rectangle */ "./Source/dom/models/Rectangle.js");
/* harmony import */ var _export__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../export */ "./Source/dom/export.js");
/* harmony import */ var _layers_Shape__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layers/Shape */ "./Source/dom/layers/Shape.js");
/* globals expect, test */





var __skpm_logs__ = [];
var __skpm_console_log__ = console.log;

var __hookedLogs = function __hookedLogs(string) {
  __skpm_logs__.push(string);

  return __skpm_console_log__(string);
};

var __skpm_tests__ = {};

var test = function test(description, fn) {
  function withLogs(context, document) {
    console.log = __hookedLogs;
    return fn(context, document);
  }

  __skpm_tests__[description] = withLogs;
};

test.only = function (description, fn) {
  fn.only = true;
  return test(description, fn);
};

test.skip = function (description, fn) {
  fn.skipped = true;
  return test(description, fn);
};



if (!Object(_test_utils__WEBPACK_IMPORTED_MODULE_0__["isRunningOnJenkins"])()) {
  test('should create Group from an SVG', function () {
    var svgString = '<svg width="200px" height="100px" viewBox="0 0 200 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect fill="#000000" x="0" y="0" width="200" height="100"></rect></svg>';
    var group = Object(_import__WEBPACK_IMPORTED_MODULE_1__["createLayerFromData"])(svgString, 'svg');
    expect(group.type).toEqual('Group');
    expect(group.layers.length).toEqual(1);
    expect(group.layers[0].type).toEqual('ShapePath');
    expect(group.layers[0].shapeType).toEqual('Rectangle');
    expect(group.layers[0].frame.width).toEqual(200);
    expect(group.layers[0].frame.height).toEqual(100);
  });
  test('should create group from a PDF', function (context, document) {
    var layer = new _layers_Shape__WEBPACK_IMPORTED_MODULE_4__["Shape"]({
      parent: document.selectedPage,
      frame: new _models_Rectangle__WEBPACK_IMPORTED_MODULE_2__["Rectangle"](0, 0, 200, 100),
      style: {
        fills: [{
          color: '#888888'
        }]
      }
    });
    var buffer = Object(_export__WEBPACK_IMPORTED_MODULE_3__["exportObject"])(layer, {
      formats: 'pdf',
      output: null
    });
    var page = Object(_import__WEBPACK_IMPORTED_MODULE_1__["createLayerFromData"])(buffer, 'pdf');
    expect(page.type).toEqual('Group');
    expect(page.frame.width).toEqual(200);
    expect(page.frame.height).toEqual(100);
  });
  test('should create Image from a bitmap', function (context, document) {
    var layer = new _layers_Shape__WEBPACK_IMPORTED_MODULE_4__["Shape"]({
      parent: document.selectedPage,
      frame: new _models_Rectangle__WEBPACK_IMPORTED_MODULE_2__["Rectangle"](0, 0, 200, 100)
    });
    var buffer = Object(_export__WEBPACK_IMPORTED_MODULE_3__["exportObject"])(layer, {
      formats: 'png',
      output: null
    });
    var image = Object(_import__WEBPACK_IMPORTED_MODULE_1__["createLayerFromData"])(buffer, 'bitmap');
    expect(image.type).toEqual('Image');
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@skpm/test-runner/expect/index.js */ "./node_modules/@skpm/test-runner/expect/index.js")))

/***/ }),

/***/ "./Source/dom/assets/Asset.js":
/*!************************************!*\
  !*** ./Source/dom/assets/Asset.js ***!
  \************************************/
/*! exports provided: Asset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Asset", function() { return Asset; });
/* harmony import */ var _WrappedObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../WrappedObject */ "./Source/dom/WrappedObject.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var Asset =
/*#__PURE__*/
function (_WrappedObject) {
  _inherits(Asset, _WrappedObject);

  function Asset() {
    _classCallCheck(this, Asset);

    return _possibleConstructorReturn(this, _getPrototypeOf(Asset).apply(this, arguments));
  }

  return Asset;
}(_WrappedObject__WEBPACK_IMPORTED_MODULE_0__["WrappedObject"]);
Asset[_WrappedObject__WEBPACK_IMPORTED_MODULE_0__["DefinedPropertiesKey"]] = _objectSpread({}, _WrappedObject__WEBPACK_IMPORTED_MODULE_0__["WrappedObject"][_WrappedObject__WEBPACK_IMPORTED_MODULE_0__["DefinedPropertiesKey"]]);
delete Asset[_WrappedObject__WEBPACK_IMPORTED_MODULE_0__["DefinedPropertiesKey"]].id;
Asset.define('name', {
  get: function get() {
    var name = this._object.name();

    if (name) {
      return String(name);
    }

    return null;
  },
  set: function set(name) {
    this._object.name = name;
  }
});

/***/ }),

/***/ "./Source/dom/assets/ColorAsset.js":
/*!*****************************************!*\
  !*** ./Source/dom/assets/ColorAsset.js ***!
  \*****************************************/
/*! exports provided: ColorAsset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorAsset", function() { return ColorAsset; });
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! util */ "./core-modules/node_modules/@skpm/util/index.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_Color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style/Color */ "./Source/dom/style/Color.js");
/* harmony import */ var _Factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Factory */ "./Source/dom/Factory.js");
/* harmony import */ var _WrappedObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../WrappedObject */ "./Source/dom/WrappedObject.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../enums */ "./Source/dom/enums.js");
/* harmony import */ var _Asset__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Asset */ "./Source/dom/assets/Asset.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var ColorAsset =
/*#__PURE__*/
function (_Asset) {
  _inherits(ColorAsset, _Asset);

  function ColorAsset() {
    _classCallCheck(this, ColorAsset);

    return _possibleConstructorReturn(this, _getPrototypeOf(ColorAsset).apply(this, arguments));
  }

  _createClass(ColorAsset, null, [{
    key: "from",

    /**
     * Create a ColorAsset from a varienty of objects
     * - A native MSColorAsset
     * - An MSColor
     * - An MSImmutableColor
     * - An NSColor
     * - A hex color string
     *
     * To include a name with one of the color objects,
     * use a dictionary with `color` and `name`.
     */
    value: function from(object) {
      if (!object) {
        return undefined;
      }

      var nativeAsset;

      if (Object(util__WEBPACK_IMPORTED_MODULE_0__["isNativeObject"])(object)) {
        if (object.isKindOfClass(MSColorAsset)) {
          nativeAsset = object;
        } else {
          try {
            var c = _style_Color__WEBPACK_IMPORTED_MODULE_1__["Color"].from(object).toMSColor();
            nativeAsset = MSColorAsset.alloc().initWithAsset_name(c, null);
          } catch (_unused) {
            throw new Error("Cannot create a color asset from a ".concat(String(object.class())));
          }
        }
      } else if (_typeof(object) == 'object') {
        var color = object.color,
            name = object.name;

        var _c = _style_Color__WEBPACK_IMPORTED_MODULE_1__["Color"].from(color).toMSColor();

        nativeAsset = MSColorAsset.alloc().initWithAsset_name(_c, name || null);
      } else {
        var _c2 = _style_Color__WEBPACK_IMPORTED_MODULE_1__["Color"].from(object).toMSColor();

        nativeAsset = MSColorAsset.alloc().initWithAsset_name(_c2, null);
      }

      return ColorAsset.fromNative(nativeAsset);
    }
  }]);

  return ColorAsset;
}(_Asset__WEBPACK_IMPORTED_MODULE_5__["Asset"]);
ColorAsset.type = _enums__WEBPACK_IMPORTED_MODULE_4__["Types"].ColorAsset;
ColorAsset[_WrappedObject__WEBPACK_IMPORTED_MODULE_3__["DefinedPropertiesKey"]] = _objectSpread({}, _Asset__WEBPACK_IMPORTED_MODULE_5__["Asset"][_WrappedObject__WEBPACK_IMPORTED_MODULE_3__["DefinedPropertiesKey"]]);
_Factory__WEBPACK_IMPORTED_MODULE_2__["Factory"].registerClass(ColorAsset, MSColorAsset);
ColorAsset.define('color', {
  get: function get() {
    return Object(_style_Color__WEBPACK_IMPORTED_MODULE_1__["colorToString"])(this._object.color());
  }
});

/***/ }),

/***/ "./Source/dom/assets/GradientAsset.js":
/*!********************************************!*\
  !*** ./Source/dom/assets/GradientAsset.js ***!
  \********************************************/
/*! exports provided: GradientAsset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradientAsset", function() { return GradientAsset; });
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! util */ "./core-modules/node_modules/@skpm/util/index.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_Gradient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style/Gradient */ "./Source/dom/style/Gradient.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./Source/dom/utils.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enums */ "./Source/dom/enums.js");
/* harmony import */ var _Asset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Asset */ "./Source/dom/assets/Asset.js");
/* harmony import */ var _Factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Factory */ "./Source/dom/Factory.js");
/* harmony import */ var _WrappedObject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../WrappedObject */ "./Source/dom/WrappedObject.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var GradientAsset =
/*#__PURE__*/
function (_Asset) {
  _inherits(GradientAsset, _Asset);

  function GradientAsset() {
    _classCallCheck(this, GradientAsset);

    return _possibleConstructorReturn(this, _getPrototypeOf(GradientAsset).apply(this, arguments));
  }

  _createClass(GradientAsset, null, [{
    key: "from",

    /**
     * Create a ColorAsset from a varienty of objects
     * - A native MSGradientAsset
     * - An MSGradient
     * - An dictionary of Gradient properties. see Gradient
     *
     * To include a name with one of the gradient objects,
     * use a dictionary with `gradient` and `name`.
     */
    value: function from(object) {
      if (!object) {
        return undefined;
      }

      if (Object(util__WEBPACK_IMPORTED_MODULE_0__["isNativeObject"])(object)) {
        var className = String(object.class());

        if (className === 'MSGradientAsset') {
          return GradientAsset.fromNative(object);
        }

        if (className === 'MSGradient') {
          var _nativeAsset = MSGradientAsset.alloc().initWithAsset_name(object, null);

          return GradientAsset.fromNative(_nativeAsset);
        }

        throw new Error("Cannot create a color asset from a ".concat(className));
      }

      var gradient;
      var name;

      if (Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isWrappedObject"])(object)) {
        gradient = object;
      } else if (_typeof(object) == 'object') {
        if (object.gradient != undefined) {
          ;
          gradient = object.gradient;
          name = object.name;

          if (!Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isWrappedObject"])(gradient)) {
            gradient = _style_Gradient__WEBPACK_IMPORTED_MODULE_1__["Gradient"].from(gradient);
          }
        } else {
          gradient = _style_Gradient__WEBPACK_IMPORTED_MODULE_1__["Gradient"].from(object);
        }
      }

      if (!gradient) {
        throw new Error("Cannot create a gradient asset without a gradient");
      } else if (gradient.type !== 'Gradient') {
        throw new Error("Cannot create a gradient asset from a ".concat(gradient.type));
      }

      var nativeAsset = MSGradientAsset.alloc().initWithAsset_name(gradient._object, name || null);
      return GradientAsset.fromNative(nativeAsset);
    }
  }]);

  return GradientAsset;
}(_Asset__WEBPACK_IMPORTED_MODULE_4__["Asset"]);
GradientAsset.type = _enums__WEBPACK_IMPORTED_MODULE_3__["Types"].GradientAsset;
GradientAsset[_WrappedObject__WEBPACK_IMPORTED_MODULE_6__["DefinedPropertiesKey"]] = _objectSpread({}, _Asset__WEBPACK_IMPORTED_MODULE_4__["Asset"][_WrappedObject__WEBPACK_IMPORTED_MODULE_6__["DefinedPropertiesKey"]]);
_Factory__WEBPACK_IMPORTED_MODULE_5__["Factory"].registerClass(GradientAsset, MSGradientAsset);
GradientAsset.define('gradient', {
  get: function get() {
    return _style_Gradient__WEBPACK_IMPORTED_MODULE_1__["Gradient"].from(this._object.gradient());
  }
});

/***/ }),

/***/ "./Source/dom/assets/__tests__/ColorAsset.test.js":
/*!********************************************************!*\
  !*** ./Source/dom/assets/__tests__/ColorAsset.test.js ***!
  \********************************************************/
/*! exports provided: tests, logs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(expect) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tests", function() { return __skpm_tests__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logs", function() { return __skpm_logs__; });
/* harmony import */ var _ColorAsset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ColorAsset */ "./Source/dom/assets/ColorAsset.js");
/* globals expect, test */

var __skpm_logs__ = [];
var __skpm_console_log__ = console.log;

var __hookedLogs = function __hookedLogs(string) {
  __skpm_logs__.push(string);

  return __skpm_console_log__(string);
};

var __skpm_tests__ = {};

var test = function test(description, fn) {
  function withLogs(context, document) {
    console.log = __hookedLogs;
    return fn(context, document);
  }

  __skpm_tests__[description] = withLogs;
};

test.only = function (description, fn) {
  fn.only = true;
  return test(description, fn);
};

test.skip = function (description, fn) {
  fn.skipped = true;
  return test(description, fn);
};


test('should create color asset from hex', function () {
  var asset = _ColorAsset__WEBPACK_IMPORTED_MODULE_0__["ColorAsset"].from('#FFFFFF');
  expect(asset.color).toBe('#ffffffff');
  expect(asset.name).toBe(null);
});
test('should create color asset from MSColor', function () {
  var color = MSImmutableColor.colorWithSVGString('#FFFFFF');
  var asset = _ColorAsset__WEBPACK_IMPORTED_MODULE_0__["ColorAsset"].from(color);
  expect(asset.color).toBe('#ffffffff');
});
test('should create color asset from MSColorAsset', function () {
  var color = MSImmutableColor.colorWithSVGString('#FFFFFF').newMutableCounterpart();
  var nativeAsset = MSColorAsset.alloc().initWithAsset_name(color, null);
  var asset = _ColorAsset__WEBPACK_IMPORTED_MODULE_0__["ColorAsset"].from(nativeAsset);
  expect(asset.color).toBe('#ffffffff');
});
test('should create color asset with name', function () {
  var asset = _ColorAsset__WEBPACK_IMPORTED_MODULE_0__["ColorAsset"].from({
    name: 'White',
    color: '#ffffff'
  });
  expect(asset.color).toBe('#ffffffff');
  expect(asset.name).toBe('White');
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@skpm/test-runner/expect/index.js */ "./node_modules/@skpm/test-runner/expect/index.js")))

/***/ }),

/***/ "./Source/dom/assets/__tests__/GradientAsset.test.js":
/*!***********************************************************!*\
  !*** ./Source/dom/assets/__tests__/GradientAsset.test.js ***!
  \***********************************************************/
/*! exports provided: tests, logs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(expect) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tests", function() { return __skpm_tests__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logs", function() { return __skpm_logs__; });
/* harmony import */ var _GradientAsset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GradientAsset */ "./Source/dom/assets/GradientAsset.js");
/* harmony import */ var _style_Gradient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../style/Gradient */ "./Source/dom/style/Gradient.js");
/* globals expect, test */


var __skpm_logs__ = [];
var __skpm_console_log__ = console.log;

var __hookedLogs = function __hookedLogs(string) {
  __skpm_logs__.push(string);

  return __skpm_console_log__(string);
};

var __skpm_tests__ = {};

var test = function test(description, fn) {
  function withLogs(context, document) {
    console.log = __hookedLogs;
    return fn(context, document);
  }

  __skpm_tests__[description] = withLogs;
};

test.only = function (description, fn) {
  fn.only = true;
  return test(description, fn);
};

test.skip = function (description, fn) {
  fn.skipped = true;
  return test(description, fn);
};


test('should create gradient asset from dictionary', function () {
  var asset = _GradientAsset__WEBPACK_IMPORTED_MODULE_0__["GradientAsset"].from({});
  expect(asset.gradient.type).toBe('Gradient');
  expect(asset.name).toBe(null);
});
test('should create gradient asset from MSGradientAsset', function () {
  var gradient = _style_Gradient__WEBPACK_IMPORTED_MODULE_1__["Gradient"].from({})._object;

  var nativeAsset = MSGradientAsset.alloc().initWithAsset_name(gradient, null);
  var asset = _GradientAsset__WEBPACK_IMPORTED_MODULE_0__["GradientAsset"].from(nativeAsset);
  expect(asset.gradient.type).toBe('Gradient');
});
test('should create gradient asset with name', function () {
  var asset = _GradientAsset__WEBPACK_IMPORTED_MODULE_0__["GradientAsset"].from({
    name: 'My Gradient',
    gradient: {}
  });
  expect(asset.gradient.type).toBe('Gradient');
  expect(asset.name).toBe('My Gradient');
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@skpm/test-runner/expect/index.js */ "./node_modules/@skpm/test-runner/expect/index.js")))

/***/ }),

/***/ "./Source/dom/assets/index.js":
/*!************************************!*\
  !*** ./Source/dom/assets/index.js ***!
  \************************************/
/*! exports provided: ColorAsset, GradientAsset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ColorAsset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ColorAsset */ "./Source/dom/assets/ColorAsset.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorAsset", function() { return _ColorAsset__WEBPACK_IMPORTED_MODULE_0__["ColorAsset"]; });

/* harmony import */ var _GradientAsset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GradientAsset */ "./Source/dom/assets/GradientAsset.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GradientAsset", function() { return _GradientAsset__WEBPACK_IMPORTED_MODULE_1__["GradientAsset"]; });




/***/ }),

/***/ "./Source/dom/enums.js":
/*!*****************************!*\
  !*** ./Source/dom/enums.js ***!
  \*****************************/
/*! exports provided: Types */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Types", function() { return Types; });
var Types = {
  Group: 'Group',
  Page: 'Page',
  Artboard: 'Artboard',
  Shape: 'Shape',
  Style: 'Style',
  Blur: 'Blur',
  Border: 'Border',
  BorderOptions: 'BorderOptions',
  Fill: 'Fill',
  Gradient: 'Gradient',
  GradientStop: 'GradientStop',
  Shadow: 'Shadow',
  Image: 'Image',
  Text: 'Text',
  Document: 'Document',
  Library: 'Library',
  SymbolMaster: 'SymbolMaster',
  SymbolInstance: 'SymbolInstance',
  Override: 'Override',
  ImageData: 'ImageData',
  Flow: 'Flow',
  HotSpot: 'HotSpot',
  ImportableObject: 'ImportableObject',
  SharedStyle: 'SharedStyle',
  DataOverride: 'DataOverride',
  ShapePath: 'ShapePath',
  Slice: 'Slice',
  ExportFormat: 'ExportFormat',
  CurvePoint: 'CurvePoint',
  ColorAsset: 'ColorAsset',
  GradientAsset: 'GradientAsset'
};

/***/ }),

/***/ "./Source/dom/export.js":
/*!******************************!*\
  !*** ./Source/dom/export.js ***!
  \******************************/
/*! exports provided: DEFAULT_EXPORT_OPTIONS, exportObject, objectFromJSON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_EXPORT_OPTIONS", function() { return DEFAULT_EXPORT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exportObject", function() { return exportObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectFromJSON", function() { return objectFromJSON; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./Source/dom/utils.js");
/* harmony import */ var _wrapNativeObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wrapNativeObject */ "./Source/dom/wrapNativeObject.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Buffer;
var DEFAULT_EXPORT_OPTIONS = {
  compact: false,
  'include-namespaces': false,
  compression: 1.0,
  'group-contents-only': false,
  overwriting: false,
  progressive: false,
  'save-for-web': false,
  'use-id-for-name': false,
  trimmed: false,
  output: '~/Documents/Sketch Exports'
};

function getJSONData(nativeObject) {
  var archiver = MSJSONDataArchiver.new();
  archiver.archiveObjectIDs = true;
  var aPtr = MOPointer.alloc().init();
  var obj = nativeObject.immutableModelObject ? nativeObject.immutableModelObject() : nativeObject;
  archiver.archivedDataWithRootObject_error(obj, aPtr);

  if (aPtr.value()) {
    throw Error("Couldn\u2019t create the JSON string: ".concat(aPtr.value()));
  }

  return archiver.archivedData();
}

function getJSONString(nativeObject) {
  var data = getJSONData(nativeObject);
  return String(NSString.alloc().initWithData_encoding(data, NSUTF8StringEncoding));
}

function exportToJSONFile(nativeObjects, options) {
  var fm = NSFileManager.defaultManager();
  var directory = NSString.stringWithString(options.output).stringByExpandingTildeInPath();
  var comps = String(directory).split('/');
  fm.createDirectoryAtPath_withIntermediateDirectories_attributes_error(directory, true, null, null);
  nativeObjects.forEach(function (o) {
    var name = options['use-id-for-name'] === true || !o.name ? o.objectID() : o.name();
    var pathComps = comps.slice();
    pathComps.push("".concat(name, ".json"));
    var url = NSURL.fileURLWithPath(pathComps.join('/'));
    var data = getJSONData(o);
    var writeOptions = options.overwriting ? 0 : NSDataWritingWithoutOverwriting;
    var ptr = MOPointer.new();
    data.writeToURL_options_error(url, writeOptions, ptr);

    if (ptr.value()) {
      throw new Error("Error writing json file ".concat(ptr.value()));
    }
  });
}

function exportToImageFile(nativeObjects, options) {
  // we need to class the objects by types as we need to do different things depending on it
  var pages = [];
  var layers = [];
  nativeObjects.forEach(function (o) {
    if (o.isKindOfClass(MSPage)) {
      pages.push(o);
    } else {
      layers.push(o);
    }
  });
  var exporter = MSSelfContainedHighLevelExporter.alloc().initWithOptions(options); // export the pages

  pages.forEach(exporter.exportPage); // export the layers

  if (layers.length) {
    exporter.exportLayers(layers);
  }
}

function exportToBuffer(nativeObject, options) {
  var isPage = nativeObject.isKindOfClass(MSPage);
  var exporter = MSSelfContainedHighLevelExporter.alloc().initWithOptions(options);
  var formats = exporter.formatsToExport();
  var rect = isPage ? exporter.rectToExportForPage(nativeObject) : CGRectNull;
  var request = exporter.exportRequestsForLayer_inRect_exportFormats(nativeObject, rect, formats)[0];
  var colorSpace = NSColorSpace.colorSpaceForSketchColorSpace(request.immutableDocument().colorSpace());
  var renderer = MSExporter.exporterForRequest_colorSpace_driver(request, colorSpace, exporter.driver());
  var data = renderer.data();

  if (!Buffer) {
    // eslint-disable-next-line global-require, prefer-destructuring
    Buffer = __webpack_require__(/*! buffer */ "./core-modules/node_modules/@skpm/buffer/index.js").Buffer;
  }

  return Buffer.from(data);
}
/**
 * Export an object, using the options supplied.
 *
 * The object can be a layer, an array of layers, a page or an array of pages
 *
 * @discussion
 *
 * You can specify a lot of different options for the exporting.
 *
 * ### General Options
 *
 * - use-id-for-name : normally the exported files are given the same names as the layers they represent, but if this options is true, then the layer ids are used instead; defaults to false.
 * - output : this is the path of the folder where all exported files are placed; defaults to "~/Documents/Sketch Exports". If falsey the data is returned immediately (only supported for json).
 * - overwriting : if true, the exporter will overwrite any existing files with new ones; defaults to false.
 * - trimmed: if true, any transparent space around the exported image will be trimmed; defaults to false.
 * - scales: this should be a list of numbers; it will determine the sizes at which the layers are exported; defaults to "1"
 * - formats: this should be a list of one or more of "png", "jpg", "svg", "json", and "pdf"; defaults to "png" (see discussion below)
 *
 * ### SVG options
 * - compact : if exporting as SVG, this option makes the output more compact; defaults to false.
 * - include-namespaces : if exporting as SVG, this option includes extra attributes; defaults to false.
 *
 * ### PNG options
 * - save-for-web : if exporting a PNG, this option removes metadata such as the colour profile from the exported file; defaults to false.
 *
 * ### JPG options
 * - compression : if exporting a JPG, this option determines the level of compression, with 0 being the minimum, 1.0 the maximum; defaults to 1.0
 * - progressive : if exporting a JPG, this option makes it progressive; defaults to false.
 * - group-contents-only : false,
 *
 *
 * @param {dictionary} options Options indicating which sizes and formats to use, etc.
 *
 * @returns If an output path is not set, the data is returned
 */


function exportObject(object, options) {
  // Validate the provided objects
  var objectsToExport = (Array.isArray(object) ? object : [object]).map(function (o) {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isWrappedObject"])(o) ? o.sketchObject : o;
  }).filter(function (o) {
    return o;
  });

  if (!objectsToExport.length) {
    throw new Error('No objects provided to export');
  } // Validate export formats


  var formats = (options || {}).formats || [];

  if (typeof formats === 'string') {
    formats = formats.split(',');
  }

  formats = formats.map(function (format) {
    return format.trim();
  }); // if we don't have any format, we default to png

  if (formats.length === 0) {
    formats.push('png');
  }

  var shouldExportToJSON = formats.indexOf('json') !== -1;
  var exportImagesFormat = formats.filter(function (format) {
    return format !== 'json';
  });

  var optionsWithDefaults = _objectSpread({}, DEFAULT_EXPORT_OPTIONS, options, {
    formats: exportImagesFormat.join(',')
  }); // Return data if no output directory specified


  if (!optionsWithDefaults.output) {
    if (formats.length > 1) {
      throw new Error('Can only return 1 format with no output type');
    }

    var format = formats[0];
    var exported = objectsToExport.map(function (nativeObject) {
      if (format === 'json') {
        var str = getJSONString(nativeObject);
        return JSON.parse(str);
      }

      return exportToBuffer(nativeObject, optionsWithDefaults);
    }); // Return the same format that was provided

    return Array.isArray(object) ? exported : exported[0];
  }

  if (shouldExportToJSON) {
    exportToJSONFile(objectsToExport, optionsWithDefaults);
  }

  if (exportImagesFormat.length) {
    exportToImageFile(objectsToExport, optionsWithDefaults);
  }

  return true;
}
/**
 * Create an object from the exported Sketch JSON.
 *
 * @param {dictionary} sketchJSON The exported Sketch JSON data
 * @param {number} version The file version that the Sketch JSON
 * was exported from. Defaults to the current version
 * @returns {WrappedObject} A javascript object (subclass of WrappedObject),
 * which represents the restored Sketch object.
 */

function objectFromJSON(sketchJSON, version) {
  var v = version || MSArchiveHeader.metadataForNewHeader().version;
  var ptr = MOPointer.new();
  var object = MSJSONDictionaryUnarchiver.unarchiveObjectFromDictionary_asVersion_corruptionDetected_error(sketchJSON, v, null, ptr);

  if (ptr.value()) {
    throw new Error("Failed to create object from sketch JSON: ".concat(ptr.value()));
  }

  if (object.newMutableCounterpart) {
    object = object.newMutableCounterpart();
  }

  return Object(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_1__["wrapNativeObject"])(object);
}

/***/ }),

/***/ "./Source/dom/globalAssets.js":
/*!************************************!*\
  !*** ./Source/dom/globalAssets.js ***!
  \************************************/
/*! exports provided: getGlobalColors, getGlobalGradients */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGlobalColors", function() { return getGlobalColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGlobalGradients", function() { return getGlobalGradients; });
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! util */ "./core-modules/node_modules/@skpm/util/index.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets */ "./Source/dom/assets/index.js");


/**
 * Access any global colors
 *
 * @return {Array<ColorAsset>} A list of color assets defined globally
 */

function getGlobalColors() {
  var native = MSPersistentAssetCollection.sharedGlobalAssets().colorAssets();
  return Object(util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(native).map(function (a) {
    return _assets__WEBPACK_IMPORTED_MODULE_1__["ColorAsset"].fromNative(a);
  });
}
/**
 * Access any global gradients
 *
 * @return {Array<GradientAsset>} A list of gradient assets defined globally
 */

function getGlobalGradients() {
  var native = MSPersistentAssetCollection.sharedGlobalAssets().gradientAssets();
  return Object(util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(native).map(function (a) {
    return _assets__WEBPACK_IMPORTED_MODULE_1__["GradientAsset"].fromNative(a);
  });
}

/***/ }),

/***/ "./Source/dom/import.js":
/*!******************************!*\
  !*** ./Source/dom/import.js ***!
  \******************************/
/*! exports provided: createLayerFromData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLayerFromData", function() { return createLayerFromData; });
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! buffer */ "./core-modules/node_modules/@skpm/buffer/index.js");
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(buffer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! util */ "./core-modules/node_modules/@skpm/util/index.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wrapNativeObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wrapNativeObject */ "./Source/dom/wrapNativeObject.js");
/* harmony import */ var _layers_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layers/Image */ "./Source/dom/layers/Image.js");





function _importWithImporter(data, importer) {
  var nsData;

  if (buffer__WEBPACK_IMPORTED_MODULE_0__["Buffer"].isBuffer(data)) {
    nsData = data.toNSData();
  } else if (Object(util__WEBPACK_IMPORTED_MODULE_1__["isNativeObject"])(data) && data.isKindOfClass(NSData)) {
    nsData = data;
  } else {
    nsData = buffer__WEBPACK_IMPORTED_MODULE_0__["Buffer"].from(data).toNSData();
  }

  importer.prepareToImportFromData(nsData);
  return Object(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_2__["wrapNativeObject"])(importer.importAsLayer());
}

function _importSVG(data) {
  return _importWithImporter(data, MSSVGImporter.svgImporter());
}

function _importPDF(data) {
  return _importWithImporter(data, MSPDFImporter.pdfImporter());
}

function _importEPS(data) {
  return _importWithImporter(data, MSPDFImporter.epsImporter());
}

var createLayerFromData = function createLayerFromData(data, type) {
  switch (type) {
    case 'svg':
      return _importSVG(data);

    case 'pdf':
      return _importPDF(data);

    case 'eps':
      return _importEPS(data);

    case 'bitmap':
      return new _layers_Image__WEBPACK_IMPORTED_MODULE_3__["Image"]({
        image: data
      });

    default:
      throw new Error("Can't import ".concat(type));
  }
};

/***/ }),

/***/ "./Source/dom/index.js":
/*!*****************************!*\
  !*** ./Source/dom/index.js ***!
  \*****************************/
/*! exports provided: export, fromSketchJSON, createLayerFromData, Document, getDocuments, getSelectedDocument, Library, getLibraries, SharedStyle, Rectangle, Style, Group, Text, Image, Shape, ShapePath, Artboard, Page, SymbolMaster, SymbolInstance, HotSpot, Slice, Types, fromNative, getGlobalColors, getGlobalGradients, Flow, version */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Flow", function() { return Flow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony import */ var _models_Flow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/Flow */ "./Source/dom/models/Flow.js");
/* harmony import */ var _models_DataOverride__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/DataOverride */ "./Source/dom/models/DataOverride.js");
/* harmony import */ var _export__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./export */ "./Source/dom/export.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "export", function() { return _export__WEBPACK_IMPORTED_MODULE_2__["exportObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromSketchJSON", function() { return _export__WEBPACK_IMPORTED_MODULE_2__["objectFromJSON"]; });

/* harmony import */ var _import__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./import */ "./Source/dom/import.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createLayerFromData", function() { return _import__WEBPACK_IMPORTED_MODULE_3__["createLayerFromData"]; });

/* harmony import */ var _models_Document__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/Document */ "./Source/dom/models/Document.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Document", function() { return _models_Document__WEBPACK_IMPORTED_MODULE_4__["Document"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDocuments", function() { return _models_Document__WEBPACK_IMPORTED_MODULE_4__["getDocuments"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSelectedDocument", function() { return _models_Document__WEBPACK_IMPORTED_MODULE_4__["getSelectedDocument"]; });

/* harmony import */ var _models_Library__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/Library */ "./Source/dom/models/Library.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Library", function() { return _models_Library__WEBPACK_IMPORTED_MODULE_5__["Library"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLibraries", function() { return _models_Library__WEBPACK_IMPORTED_MODULE_5__["getLibraries"]; });

/* harmony import */ var _models_SharedStyle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./models/SharedStyle */ "./Source/dom/models/SharedStyle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedStyle", function() { return _models_SharedStyle__WEBPACK_IMPORTED_MODULE_6__["SharedStyle"]; });

/* harmony import */ var _models_Rectangle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./models/Rectangle */ "./Source/dom/models/Rectangle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rectangle", function() { return _models_Rectangle__WEBPACK_IMPORTED_MODULE_7__["Rectangle"]; });

/* harmony import */ var _style_Style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style/Style */ "./Source/dom/style/Style.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Style", function() { return _style_Style__WEBPACK_IMPORTED_MODULE_8__["Style"]; });

/* harmony import */ var _layers_Group__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layers/Group */ "./Source/dom/layers/Group.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return _layers_Group__WEBPACK_IMPORTED_MODULE_9__["Group"]; });

/* harmony import */ var _layers_Text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layers/Text */ "./Source/dom/layers/Text.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _layers_Text__WEBPACK_IMPORTED_MODULE_10__["Text"]; });

/* harmony import */ var _layers_Image__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layers/Image */ "./Source/dom/layers/Image.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _layers_Image__WEBPACK_IMPORTED_MODULE_11__["Image"]; });

/* harmony import */ var _layers_Shape__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layers/Shape */ "./Source/dom/layers/Shape.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Shape", function() { return _layers_Shape__WEBPACK_IMPORTED_MODULE_12__["Shape"]; });

/* harmony import */ var _layers_ShapePath__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layers/ShapePath */ "./Source/dom/layers/ShapePath.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShapePath", function() { return _layers_ShapePath__WEBPACK_IMPORTED_MODULE_13__["ShapePath"]; });

/* harmony import */ var _layers_Artboard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./layers/Artboard */ "./Source/dom/layers/Artboard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Artboard", function() { return _layers_Artboard__WEBPACK_IMPORTED_MODULE_14__["Artboard"]; });

/* harmony import */ var _layers_Page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./layers/Page */ "./Source/dom/layers/Page.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return _layers_Page__WEBPACK_IMPORTED_MODULE_15__["Page"]; });

/* harmony import */ var _layers_SymbolMaster__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./layers/SymbolMaster */ "./Source/dom/layers/SymbolMaster.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SymbolMaster", function() { return _layers_SymbolMaster__WEBPACK_IMPORTED_MODULE_16__["SymbolMaster"]; });

/* harmony import */ var _layers_SymbolInstance__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./layers/SymbolInstance */ "./Source/dom/layers/SymbolInstance.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SymbolInstance", function() { return _layers_SymbolInstance__WEBPACK_IMPORTED_MODULE_17__["SymbolInstance"]; });

/* harmony import */ var _layers_HotSpot__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./layers/HotSpot */ "./Source/dom/layers/HotSpot.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HotSpot", function() { return _layers_HotSpot__WEBPACK_IMPORTED_MODULE_18__["HotSpot"]; });

/* harmony import */ var _layers_Slice__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./layers/Slice */ "./Source/dom/layers/Slice.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Slice", function() { return _layers_Slice__WEBPACK_IMPORTED_MODULE_19__["Slice"]; });

/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./enums */ "./Source/dom/enums.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Types", function() { return _enums__WEBPACK_IMPORTED_MODULE_20__["Types"]; });

/* harmony import */ var _wrapNativeObject__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./wrapNativeObject */ "./Source/dom/wrapNativeObject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromNative", function() { return _wrapNativeObject__WEBPACK_IMPORTED_MODULE_21__["wrapObject"]; });

/* harmony import */ var _globalAssets__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./globalAssets */ "./Source/dom/globalAssets.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getGlobalColors", function() { return _globalAssets__WEBPACK_IMPORTED_MODULE_22__["getGlobalColors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getGlobalGradients", function() { return _globalAssets__WEBPACK_IMPORTED_MODULE_22__["getGlobalGradients"]; });
























var Flow = {
  AnimationType: _models_Flow__WEBPACK_IMPORTED_MODULE_0__["AnimationType"],
  BackTarget: _models_Flow__WEBPACK_IMPORTED_MODULE_0__["BackTarget"]
};
var version = {
  sketch: MSApplicationMetadata.metadata().appVersion,
  api: "2.0.0"
};

/***/ }),

/***/ "./Source/dom/layers/Artboard.js":
/*!***************************************!*\
  !*** ./Source/dom/layers/Artboard.js ***!
  \***************************************/
/*! exports provided: Artboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Artboard", function() { return Artboard; });
/* harmony import */ var _WrappedObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../WrappedObject */ "./Source/dom/WrappedObject.js");
/* harmony import */ var _Group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Group */ "./Source/dom/layers/Group.js");
/* harmony import */ var _models_Rectangle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/Rectangle */ "./Source/dom/models/Rectangle.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enums */ "./Source/dom/enums.js");
/* harmony import */ var _Factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Factory */ "./Source/dom/Factory.js");
/* harmony import */ var _style_Color__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../style/Color */ "./Source/dom/style/Color.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







/**
 * A Sketch artboard.
 */

var Artboard =
/*#__PURE__*/
function (_Group) {
  _inherits(Artboard, _Group);

  /**
   * Make a new artboard.
   *
   * @param [Object] properties - The properties to set on the object as a JSON object.
   *                              If `sketchObject` is provided, will wrap it.
   *                              Otherwise, creates a new native object.
   */
  function Artboard() {
    var artboard = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Artboard);

    if (!artboard.sketchObject) {
      // eslint-disable-next-line no-param-reassign
      artboard.sketchObject = _Factory__WEBPACK_IMPORTED_MODULE_4__["Factory"].createNative(Artboard).alloc().initWithFrame(new _models_Rectangle__WEBPACK_IMPORTED_MODULE_2__["Rectangle"](0, 0, 100, 100).asCGRect());
    }

    return _possibleConstructorReturn(this, _getPrototypeOf(Artboard).call(this, artboard));
  }
  /**
   * Adjust the Artboard to fit its children.
   * override the group's method
   */


  _createClass(Artboard, [{
    key: "adjustToFit",
    value: function adjustToFit() {
      this._object.resizeToFitChildren();

      return this;
    } // eslint-disable-next-line

  }, {
    key: "getParentArtboard",
    value: function getParentArtboard() {
      return undefined;
    }
  }]);

  return Artboard;
}(_Group__WEBPACK_IMPORTED_MODULE_1__["Group"]);
Artboard.type = _enums__WEBPACK_IMPORTED_MODULE_3__["Types"].Artboard;
Artboard[_WrappedObject__WEBPACK_IMPORTED_MODULE_0__["DefinedPropertiesKey"]] = _objectSpread({}, _Group__WEBPACK_IMPORTED_MODULE_1__["Group"][_WrappedObject__WEBPACK_IMPORTED_MODULE_0__["DefinedPropertiesKey"]]);
_Factory__WEBPACK_IMPORTED_MODULE_4__["Factory"].registerClass(Artboard, MSArtboardGroup);
_Factory__WEBPACK_IMPORTED_MODULE_4__["Factory"].registerClass(Artboard, MSImmutableArtboardGroup);
delete Artboard[_WrappedObject__WEBPACK_IMPORTED_MODULE_0__["DefinedPropertiesKey"]].flow;
delete Artboard[_WrappedObject__WEBPACK_IMPORTED_MODULE_0__["DefinedPropertiesKey"]].style;
delete Artboard[_WrappedObject__WEBPACK_IMPORTED_MODULE_0__["DefinedPropertiesKey"]].locked;
delete Artboard[_WrappedObject__WEBPACK_IMPORTED_MODULE_0__["DefinedPropertiesKey"]].hidden;
delete Artboard[_WrappedObject__WEBPACK_IMPORTED_MODULE_0__["DefinedPropertiesKey"]].transform;
Artboard.define('flowStartPoint', {
  get: function get() {
    return !!this._object.isFlowHome();
  },
  set: function set(isFlowStartHome) {
    if (this.isImmutable()) {
      return;
    }

    this._object.isFlowHome = isFlowStartHome;
  }
});
Artboard.defineObject('background', {
  enabled: {
    get: function get() {
      return Boolean(Number(this._object.hasBackgroundColor()));
    },
    set: function set(enabled) {
      if (this._parent.isImmutable()) {
        return;
      }

      this._object.setHasBackgroundColor(enabled);
    }
  },
  includedInExport: {
    get: function get() {
      return Boolean(Number(this._object.includeBackgroundColorInExport()));
    },
    set: function set(included) {
      if (this._parent.isImmutable()) {
        return;
      }

      this._object.setIncludeBackgroundColorInExport(included);
    }
  },
  color: {
    get: function get() {
      return Object(_style_Color__WEBPACK_IMPORTED_MODULE_5__["colorToString"])(this._object.backgroundColor());
    },
    set: function set(color) {
      if (this._parent.isImmutable()) {
        return;
      }

      this._object.setBackgroundColor(_style_Color__WEBPACK_IMPORTED_MODULE_5__["Color"].from(color).toMSColor());
    }
  }
});

/***/ }),

/***/ "./Source/dom/layers/Group.js":
/*!************************************!*\
  !*** ./Source/dom/layers/Group.js ***!
  \************************************/
/*! exports provided: Group */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return Group; });
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! util */ "./core-modules/node_modules/@skpm/util/index.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _WrappedObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../WrappedObject */ "./Source/dom/WrappedObject.js");
/* harmony import */ var _StyledLayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StyledLayer */ "./Source/dom/layers/StyledLayer.js");
/* harmony import */ var _models_Rectangle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/Rectangle */ "./Source/dom/models/Rectangle.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../enums */ "./Source/dom/enums.js");
/* harmony import */ var _Factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Factory */ "./Source/dom/Factory.js");
/* harmony import */ var _wrapNativeObject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../wrapNativeObject */ "./Source/dom/wrapNativeObject.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








/**
 * Represents a group of layers.
 */

var Group =
/*#__PURE__*/
function (_StyledLayer) {
  _inherits(Group, _StyledLayer);

  /**
   * Make a new group object.
   *
   * @param [Object] properties - The properties to set on the object as a JSON object.
   *                              If `sketchObject` is provided, will wrap it.
   *                              Otherwise, creates a new native object.
   */
  function Group() {
    var group = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Group);

    if (!group.sketchObject) {
      // eslint-disable-next-line no-param-reassign
      group.sketchObject = _Factory__WEBPACK_IMPORTED_MODULE_5__["Factory"].createNative(Group).alloc().initWithFrame(new _models_Rectangle__WEBPACK_IMPORTED_MODULE_3__["Rectangle"](0, 0, 100, 100).asCGRect());
    }

    return _possibleConstructorReturn(this, _getPrototypeOf(Group).call(this, group));
  } // @deprecated


  _createClass(Group, [{
    key: "pageRectToLocalRect",
    value: function pageRectToLocalRect(rect) {
      console.warn('Group.pageRectToLocalRect(rect) is deprecated. Use rect.changeBasis({ to: group }) instead');
      return rect.changeBasis({
        to: this
      });
    }
    /**
     * Adjust the group to fit its children.
     */

  }, {
    key: "adjustToFit",
    value: function adjustToFit() {
      if (this.isImmutable()) {
        return this;
      }

      this._object.fixGeometryWithOptions(0);

      return this;
    }
  }]);

  return Group;
}(_StyledLayer__WEBPACK_IMPORTED_MODULE_2__["StyledLayer"]);
Group.type = _enums__WEBPACK_IMPORTED_MODULE_4__["Types"].Group;
Group[_WrappedObject__WEBPACK_IMPORTED_MODULE_1__["DefinedPropertiesKey"]] = _objectSpread({}, _StyledLayer__WEBPACK_IMPORTED_MODULE_2__["StyledLayer"][_WrappedObject__WEBPACK_IMPORTED_MODULE_1__["DefinedPropertiesKey"]]);
_Factory__WEBPACK_IMPORTED_MODULE_5__["Factory"].registerClass(Group, MSLayerGroup);
_Factory__WEBPACK_IMPORTED_MODULE_5__["Factory"].registerClass(Group, MSImmutableLayerGroup);
Group.define('layers', {
  array: true,
  get: function get() {
    return Object(util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(this._object.layers()).map(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_6__["wrapNativeObject"]);
  },
  set: function set(layers) {
    if (this.isImmutable()) {
      return;
    } // remove the existing layers


    this._object.removeAllLayers();

    this._object.addLayers(Object(util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(layers).map(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_6__["wrapObject"]).map(function (l) {
      return l._object;
    }));
  },
  insertItem: function insertItem(item, index) {
    if (this.isImmutable()) {
      return undefined;
    }

    var layer = Object(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_6__["wrapObject"])(item);

    if (layer._object.parentGroup()) {
      layer._object.removeFromParent();
    }

    this._object.insertLayer_atIndex(layer._object, index);

    return layer;
  },
  removeItem: function removeItem(index) {
    if (this.isImmutable()) {
      return undefined;
    }

    var item = Object(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_6__["wrapNativeObject"])(this._object.layers()[index]);

    this._object.removeLayerAtIndex(index);

    return item;
  }
});

/***/ }),

/***/ "./Source/dom/layers/HotSpot.js":
/*!**************************************!*\
  !*** ./Source/dom/layers/HotSpot.js ***!
  \**************************************/
/*! exports provided: HotSpot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotSpot", function() { return HotSpot; });
/* harmony import */ var _WrappedObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../WrappedObject */ "./Source/dom/WrappedObject.js");
/* harmony import */ var _Layer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layer */ "./Source/dom/layers/Layer.js");
/* harmony import */ var _models_Rectangle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/Rectangle */ "./Source/dom/models/Rectangle.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enums */ "./Source/dom/enums.js");
/* harmony import */ var _Factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Factory */ "./Source/dom/Factory.js");
/* harmony import */ var _wrapNativeObject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../wrapNativeObject */ "./Source/dom/wrapNativeObject.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







/**
 * A Sketch HotSpot.
 */

var HotSpot =
/*#__PURE__*/
function (_Layer) {
  _inherits(HotSpot, _Layer);

  /**
   * Make a new hotspot.
   *
   * @param [Object] properties - The properties to set on the object as a JSON object.
   *                              If `sketchObject` is provided, will wrap it.
   *                              Otherwise, creates a new native object.
   */
  function HotSpot() {
    var artboard = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, HotSpot);

    if (!artboard.sketchObject) {
      // eslint-disable-next-line no-param-reassign
      artboard.sketchObject = _Factory__WEBPACK_IMPORTED_MODULE_4__["Factory"].createNative(HotSpot).alloc().initWithFrame(new _models_Rectangle__WEBPACK_IMPORTED_MODULE_2__["Rectangle"](0, 0, 100, 100).asCGRect());
    }

    return _possibleConstructorReturn(this, _getPrototypeOf(HotSpot).call(this, artboard));
  }

  _createClass(HotSpot, null, [{
    key: "fromLayer",
    value: function fromLayer(layer) {
      var wrappedObject = Object(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_5__["wrapObject"])(layer);

      if (!wrappedObject || !wrappedObject.flow || !wrappedObject.flow.targetId) {
        throw new Error('Can only create a HotSpot from a layer with an existing flow');
      }

      return new HotSpot({
        sketchObject: MSHotspotLayer.hotspotLayerFromLayer(wrappedObject.sketchObject)
      });
    }
  }]);

  return HotSpot;
}(_Layer__WEBPACK_IMPORTED_MODULE_1__["Layer"]);
HotSpot.type = _enums__WEBPACK_IMPORTED_MODULE_3__["Types"].HotSpot;
HotSpot[_WrappedObject__WEBPACK_IMPORTED_MODULE_0__["DefinedPropertiesKey"]] = _objectSpread({}, _Layer__WEBPACK_IMPORTED_MODULE_1__["Layer"][_WrappedObject__WEBPACK_IMPORTED_MODULE_0__["DefinedPropertiesKey"]]);
_Factory__WEBPACK_IMPORTED_MODULE_4__["Factory"].registerClass(HotSpot, MSHotspotLayer);
_Factory__WEBPACK_IMPORTED_MODULE_4__["Factory"].registerClass(HotSpot, MSImmutableHotspotLayer);
delete HotSpot[_WrappedObject__WEBPACK_IMPORTED_MODULE_0__["DefinedPropertiesKey"]].exportFormats;
delete HotSpot[_WrappedObject__WEBPACK_IMPORTED_MODULE_0__["DefinedPropertiesKey"]].transform;

/***/ }),

/***/ "./Source/dom/layers/Image.js":
/*!************************************!*\
  !*** ./Source/dom/layers/Image.js ***!
  \************************************/
/*! exports provided: Image */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony import */ var _WrappedObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../WrappedObject */ "./Source/dom/WrappedObject.js");
/* harmony import */ var _StyledLayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StyledLayer */ "./Source/dom/layers/StyledLayer.js");
/* harmony import */ var _models_ImageData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/ImageData */ "./Source/dom/models/ImageData.js");
/* harmony import */ var _models_Rectangle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/Rectangle */ "./Source/dom/models/Rectangle.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../enums */ "./Source/dom/enums.js");
/* harmony import */ var _Factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Factory */ "./Source/dom/Factory.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







/**
 * Represents an image layer.
 */

var Image =
/*#__PURE__*/
function (_StyledLayer) {
  _inherits(Image, _StyledLayer);

  /**
   * Make a new image layer object.
   *
   * @param [Object] properties - The properties to set on the object as a JSON object.
   *                              If `sketchObject` is provided, will wrap it.
   *                              Otherwise, creates a new native object.
   */
  function Image() {
    var layer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Image);

    if (!layer.sketchObject) {
      // eslint-disable-next-line no-param-reassign
      layer.sketchObject = _Factory__WEBPACK_IMPORTED_MODULE_5__["Factory"].createNative(Image).alloc().initWithFrame(new _models_Rectangle__WEBPACK_IMPORTED_MODULE_3__["Rectangle"](0, 0, 100, 100).asCGRect());
    }

    return _possibleConstructorReturn(this, _getPrototypeOf(Image).call(this, layer));
  }

  return Image;
}(_StyledLayer__WEBPACK_IMPORTED_MODULE_1__["StyledLayer"]);
Image.type = _enums__WEBPACK_IMPORTED_MODULE_4__["Types"].Image;
Image[_WrappedObject__WEBPACK_IMPORTED_MODULE_0__["DefinedPropertiesKey"]] = _objectSpread({}, _StyledLayer__WEBPACK_IMPORTED_MODULE_1__["StyledLayer"][_WrappedObject__WEBPACK_IMPORTED_MODULE_0__["DefinedPropertiesKey"]]);
_Factory__WEBPACK_IMPORTED_MODULE_5__["Factory"].registerClass(Image, MSBitmapLayer);
_Factory__WEBPACK_IMPORTED_MODULE_5__["Factory"].registerClass(Image, MSImmutableBitmapLayer);
Image.define('image', {
  get: function get() {
    return _models_ImageData__WEBPACK_IMPORTED_MODULE_2__["ImageData"].fromNative(this._object.image());
  },
  set: function set(image) {
    if (this.isImmutable()) {
      return;
    }

    var imageData = _models_ImageData__WEBPACK_IMPORTED_MODULE_2__["ImageData"].from(image);

    this._object.setImage(imageData.sketchObject);
  }
});

/***/ }),

/***/ "./Source/dom/layers/Layer.js":
/*!************************************!*\
  !*** ./Source/dom/layers/Layer.js ***!
  \************************************/
/*! exports provided: Layer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layer", function() { return Layer; });
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! util */ "./core-modules/node_modules/@skpm/util/index.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _WrappedObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../WrappedObject */ "./Source/dom/WrappedObject.js");
/* harmony import */ var _Factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Factory */ "./Source/dom/Factory.js");
/* harmony import */ var _models_Rectangle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/Rectangle */ "./Source/dom/models/Rectangle.js");
/* harmony import */ var _wrapNativeObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../wrapNativeObject */ "./Source/dom/wrapNativeObject.js");
/* harmony import */ var _models_Flow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/Flow */ "./Source/dom/models/Flow.js");
/* harmony import */ var _models_ExportFormat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/ExportFormat */ "./Source/dom/models/ExportFormat.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../enums */ "./Source/dom/enums.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









/**
 * Abstract class that represents a Sketch layer.
 */

var Layer =
/*#__PURE__*/
function (_WrappedObject) {
  _inherits(Layer, _WrappedObject);

  function Layer() {
    _classCallCheck(this, Layer);

    return _possibleConstructorReturn(this, _getPrototypeOf(Layer).apply(this, arguments));
  }

  _createClass(Layer, [{
    key: "duplicate",

    /**
     * Duplicate this layer.
     * A new identical layer will be inserted into the parent of this layer.
     *
     * @return {Layer} A new layer identical to this one.
     */
    value: function duplicate() {
      var object = this._object;
      var duplicate = object.copy();
      object.parentGroup().insertLayers_afterLayer([duplicate], object);
      return Object(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_4__["wrapNativeObject"])(duplicate);
    }
    /**
     * Remove this layer from its parent.
     */

  }, {
    key: "remove",
    value: function remove() {
      if (this.isImmutable()) {
        return this;
      }

      var parent = this._object.parentGroup();

      if (parent) {
        parent.removeLayer(this._object);
      }

      return this;
    }
    /**
     * Move this layer to the front of its container.
     */

  }, {
    key: "moveToFront",
    value: function moveToFront() {
      if (this.isImmutable()) {
        return this;
      }

      MSLayerMovement.moveToFront([this._object]);
      return this;
    }
    /**
     * Move this layer forward in its container.
     */

  }, {
    key: "moveForward",
    value: function moveForward() {
      if (this.isImmutable()) {
        return this;
      }

      MSLayerMovement.moveForward([this._object]);
      return this;
    }
    /**
     * Move this layer to the back of its container.
     */

  }, {
    key: "moveToBack",
    value: function moveToBack() {
      if (this.isImmutable()) {
        return this;
      }

      MSLayerMovement.moveToBack([this._object]);
      return this;
    }
    /**
     * Move this layer backwards in its container.
     */

  }, {
    key: "moveBackward",
    value: function moveBackward() {
      if (this.isImmutable()) {
        return this;
      }

      MSLayerMovement.moveBackward([this._object]);
      return this;
    }
  }, {
    key: "getParentPage",
    value: function getParentPage() {
      return Object(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_4__["wrapNativeObject"])(this._object.parentPage());
    }
  }, {
    key: "getParentArtboard",
    value: function getParentArtboard() {
      return Object(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_4__["wrapNativeObject"])(this._object.parentArtboard());
    }
  }, {
    key: "getParentSymbolMaster",
    value: function getParentSymbolMaster() {
      return Object(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_4__["wrapNativeObject"])(this._object.parentSymbol());
    }
  }, {
    key: "getParentShape",
    value: function getParentShape() {
      return Object(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_4__["wrapNativeObject"])(this._object.parentShape());
    } // @deprecated

  }, {
    key: "localRectToPageRect",
    value: function localRectToPageRect(rect) {
      console.warn('Layer.layerRectToPageRect(rect) is deprecated. Use rect.changeBasis({ from: layer }) instead');
      return rect.changeBasis({
        from: this
      });
    } // @deprecated

  }, {
    key: "localRectToParentRect",
    value: function localRectToParentRect(rect) {
      console.warn('Layer.localRectToParentRect(rect) is deprecated. Use rect.changeBasis({ from: layer, to: layer.parent }) instead');
      return rect.changeBasis({
        from: this,
        to: this.parent
      });
    }
  }]);

  return Layer;
}(_WrappedObject__WEBPACK_IMPORTED_MODULE_1__["WrappedObject"]);
Layer[_WrappedObject__WEBPACK_IMPORTED_MODULE_1__["DefinedPropertiesKey"]] = _objectSpread({}, _WrappedObject__WEBPACK_IMPORTED_MODULE_1__["WrappedObject"][_WrappedObject__WEBPACK_IMPORTED_MODULE_1__["DefinedPropertiesKey"]]);
_Factory__WEBPACK_IMPORTED_MODULE_2__["Factory"].registerClass(Layer, MSLayer);
_Factory__WEBPACK_IMPORTED_MODULE_2__["Factory"].registerClass(Layer, MSImmutableLayer);
Layer.define('index', {
  exportable: false,

  /**
   * Return the index of this layer in it's container.
   * The layer at the back of the container (visually) will be layer 0. The layer at the front will be layer n - 1 (if there are n layers).
   *
   * @return {number} The layer order.
   */
  get: function get() {
    var ourLayer = this._object;
    return parseInt(ourLayer.parentGroup().indexOfLayer_(ourLayer), 10);
  }
});
Layer.define('parent', {
  enumerable: false,
  exportable: false,

  /**
   * Return the parent container of this layer.
   *
   * @return {Group} The containing layer of this layer.
   */
  get: function get() {
    return Object(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_4__["wrapNativeObject"])(this._object.parentGroup());
  },
  set: function set(layer) {
    if (this.isImmutable()) {
      return;
    }

    if (this._object.parentGroup()) {
      this._object.removeFromParent();
    }

    layer = Object(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_4__["wrapObject"])(layer); // eslint-disable-line

    if (!layer) {
      // we want to remove the layer from its parent
      // without adding it somewhere else right away
      return;
    }

    if (!layer._object || typeof layer._object.addLayers !== 'function') {
      throw new Error("This object cannot accept layers: ".concat(layer));
    }

    layer._object.addLayers([this._object]);
  }
});
Layer.define('frame', {
  /**
   * The frame of the layer.
   * This is given in coordinates that are local to the parent of the layer.
   *
   * @return {Rectangle} The layer's frame.
   */
  get: function get() {
    var f = this._object.frame();

    var rect = new _models_Rectangle__WEBPACK_IMPORTED_MODULE_3__["Rectangle"](f.x(), f.y(), f.width(), f.height());
    rect._parent = this;
    rect._parentKey = 'frame';
    return rect;
  },

  /**
   * Set the frame of the layer.
   * This will move and/or resize the layer as appropriate.
   * The new frame should be given in coordinates that are local to the parent of the layer.
   *
   * @param {Rectangle} frame - The new frame of the layer.
   */
  set: function set(value) {
    if (this.isImmutable()) {
      return;
    }

    var f = this._object.frame();

    f.setRect(NSMakeRect(value.x, value.y, value.width, value.height));
  }
});
Layer.define('name', {
  /**
   * The name of the layer.
   *
   * @return {string} The layer's name.
   */
  get: function get() {
    return String(this._object.name());
  },

  /**
   * Set the name of the layer.
   *
   * @param {string} name The new name.
   */
  set: function set(value) {
    if (this.isImmutable()) {
      return;
    }

    this._object.setName(value);
  }
});
Layer.define('selected', {
  /**
   * Whether the layer is selected or not.
   *
   * @return {Boolean} selected.
   */
  get: function get() {
    // undefined when immutable
    return this._object.isSelected && !!this._object.isSelected();
  },
  set: function set(value) {
    if (this.isImmutable()) {
      return;
    }

    if (value) {
      this._object.select_byExtendingSelection(true, true);
    } else {
      this._object.select_byExtendingSelection(false, true);
    }
  }
});
Layer.define('flow', {
  get: function get() {
    if (!this._object.flow()) {
      return undefined;
    }

    return _models_Flow__WEBPACK_IMPORTED_MODULE_5__["Flow"].fromNative(this._object.flow());
  },
  set: function set(flow) {
    if (this.isImmutable()) {
      return;
    }

    if (!flow) {
      this._object.flow = null;
      return;
    }

    this._object.flow = _models_Flow__WEBPACK_IMPORTED_MODULE_5__["Flow"].from(flow).sketchObject;
  }
});
Layer.define('hidden', {
  get: function get() {
    return !this._object.isVisible();
  },
  set: function set(hidden) {
    if (this.isImmutable()) {
      return;
    }

    this._object.setIsVisible(!hidden);
  }
});
Layer.define('locked', {
  get: function get() {
    return !!this._object.isLocked();
  },
  set: function set(locked) {
    if (this.isImmutable()) {
      return;
    }

    this._object.setIsLocked(locked);
  }
});
Layer.define('exportFormats', {
  array: true,
  get: function get() {
    return Object(util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(this._object.exportOptions().exportFormats() || []).map(_models_ExportFormat__WEBPACK_IMPORTED_MODULE_6__["ExportFormat"].fromNative.bind(_models_ExportFormat__WEBPACK_IMPORTED_MODULE_6__["ExportFormat"]));
  },
  set: function set(exportFormats) {
    if (this.isImmutable()) {
      return;
    }

    this._object.exportOptions().setExportFormats(Object(util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(exportFormats).map(function (e) {
      return Object(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_4__["wrapObject"])(e, _enums__WEBPACK_IMPORTED_MODULE_7__["Types"].ExportFormat).sketchObject;
    }));
  },
  insertItem: function insertItem(item, index) {
    if (this.isImmutable()) {
      return undefined;
    }

    var arr = Object(util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(this._object.exportOptions().exportFormats() || []);
    arr.splice(index, 0, item);
    this.exportFormats = arr;
    return Object(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_4__["wrapObject"])(item, _enums__WEBPACK_IMPORTED_MODULE_7__["Types"].ExportFormat);
  },
  removeItem: function removeItem(index) {
    if (this.isImmutable()) {
      return undefined;
    }

    var arr = Object(util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(this._object.exportOptions().exportFormats() || []);
    var removed = arr.splice(index, 1);
    this.exportFormats = arr;
    return _models_ExportFormat__WEBPACK_IMPORTED_MODULE_6__["ExportFormat"].fromNative(removed[0]);
  }
});
Layer.defineObject('transform', {
  rotation: {
    get: function get() {
      // taken from MSLayer+Rotation.m
      // we are not using `userVisibleRotation` directly because it is not defined in the immutable classes
      // rotation math works counter-clockwise, but users think in clockwise rotation, so reverse
      var rotation = -Number(this._object.rotation()); // -345 degrees is better expressed as 15 degrees

      while (rotation <= -180) {
        rotation += 360;
      } // anything more than 360 can be subtracted for clarity


      rotation %= 360; // rotation might be -0 so let's return 0

      if (rotation === 0) {
        return 0;
      }

      return rotation;
    },
    set: function set(rotation) {
      if (this._parent.isImmutable()) {
        return;
      }

      this._object.applyUserVisibleRotation_explicitRotationCenter(rotation, null);
    }
  },
  flippedHorizontally: {
    get: function get() {
      return Boolean(Number(this._object.isFlippedHorizontal()));
    },
    set: function set(flipped) {
      if (this._parent.isImmutable()) {
        return;
      }

      this._object.setIsFlippedHorizontal(flipped);
    }
  },
  flippedVertically: {
    get: function get() {
      return Boolean(Number(this._object.isFlippedVertical()));
    },
    set: function set(flipped) {
      if (this._parent.isImmutable()) {
        return;
      }

      this._object.setIsFlippedVertical(flipped);
    }
  }
});

/***/ }),

/***/ "./Source/dom/layers/Page.js":
/*!***********************************!*\
  !*** ./Source/dom/layers/Page.js ***!
  \***********************************/
/*! exports provided: Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
/* harmony import */ var _WrappedObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../WrappedObject */ "./Source/dom/WrappedObject.js");
/* harmony import */ var _Group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Group */ "./Source/dom/layers/Group.js");
/* harmony import */ var _models_Selection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/Selection */ "./Source/dom/models/Selection.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enums */ "./Source/dom/enums.js");
/* harmony import */ var _Factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Factory */ "./Source/dom/Factory.js");
/* harmony import */ var _wrapNativeObject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../wrapNativeObject */ "./Source/dom/wrapNativeObject.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







/**
 * Represents a Page in a Sketch document.
 */

var Page =
/*#__PURE__*/
function (_Group) {
  _inherits(Page, _Group);

  /**
   * Make a new page object.
   *
   * @param [Object] properties - The properties to set on the object as a JSON object.
   *                              If `sketchObject` is provided, will wrap it.
   *                              Otherwise, creates a new native object.
   */
  function Page() {
    var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Page);

    if (!page.sketchObject) {
      // eslint-disable-next-line no-param-reassign
      page.sketchObject = _Factory__WEBPACK_IMPORTED_MODULE_4__["Factory"].createNative(Page).alloc().init();
    }

    return _possibleConstructorReturn(this, _getPrototypeOf(Page).call(this, page));
  } // eslint-disable-next-line


  _createClass(Page, [{
    key: "adjustToFit",
    value: function adjustToFit() {// obviously doesn't do anything
    }
  }, {
    key: "duplicate",
    value: function duplicate() {
      var object = this._object;
      var duplicate = object.copy();
      object.documentData().insertPage_afterPage(duplicate, object);
      return Object(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_5__["wrapNativeObject"])(duplicate);
    }
  }, {
    key: "remove",
    value: function remove() {
      if (this.isImmutable()) {
        return this;
      }

      this._object.documentData().removePages_detachInstances([this._object], true);

      return this;
    }
  }, {
    key: "moveToFront",
    value: function moveToFront() {
      // doesn't do anything
      return this;
    }
  }, {
    key: "moveToBack",
    value: function moveToBack() {
      // doesn't do anything
      return this;
    }
  }, {
    key: "moveForward",
    value: function moveForward() {
      // doesn't do anything
      return this;
    }
  }, {
    key: "moveBackward",
    value: function moveBackward() {
      // doesn't do anything
      return this;
    } // eslint-disable-next-line

  }, {
    key: "getParentPage",
    value: function getParentPage() {
      return undefined;
    }
  }]);

  return Page;
}(_Group__WEBPACK_IMPORTED_MODULE_1__["Group"]);
Page.type = _enums__WEBPACK_IMPORTED_MODULE_3__["Types"].Page;
Page[_WrappedObject__WEBPACK_IMPORTED_MODULE_0__["DefinedPropertiesKey"]] = _objectSpread({}, _Group__WEBPACK_IMPORTED_MODULE_1__["Group"][_WrappedObject__WEBPACK_IMPORTED_MODULE_0__["DefinedPropertiesKey"]]);
_Factory__WEBPACK_IMPORTED_MODULE_4__["Factory"].registerClass(Page, MSPage);
_Factory__WEBPACK_IMPORTED_MODULE_4__["Factory"].registerClass(Page, MSImmutablePage); // override setting up a flow which doesn't make sense for a Page

delete Page[_WrappedObject__WEBPACK_IMPORTED_MODULE_0__["DefinedPropertiesKey"]].flow;
delete Page[_WrappedObject__WEBPACK_IMPORTED_MODULE_0__["DefinedPropertiesKey"]].style;
delete Page[_WrappedObject__WEBPACK_IMPORTED_MODULE_0__["DefinedPropertiesKey"]].locked;
delete Page[_WrappedObject__WEBPACK_IMPORTED_MODULE_0__["DefinedPropertiesKey"]].hidden;
delete Page[_WrappedObject__WEBPACK_IMPORTED_MODULE_0__["DefinedPropertiesKey"]].exportFormats;
delete Page[_WrappedObject__WEBPACK_IMPORTED_MODULE_0__["DefinedPropertiesKey"]].transform; // override setting up the parent as it's needs to a be a Document

Page.define('parent', {
  enumerable: false,
  exportable: false,
  get: function get() {
    return Object(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_5__["wrapNativeObject"])(this._object.documentData());
  },
  set: function set(document) {
    if (this.isImmutable()) {
      return;
    }

    if (this._object.documentData()) {
      this._object.documentData().removePages_detachInstances([this._object], false);
    }

    document = Object(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_5__["wrapObject"])(document); // eslint-disable-line

    if (!document) {
      return;
    }

    if (typeof document._object.addPage === 'function') {
      document._object.addPage(this._object);
    } else {
      document._object.documentData().addPage(this._object);
    }
  }
});
Page.define('index', {
  exportable: false,
  get: function get() {
    var ourLayer = this._object;
    return parseInt(ourLayer.parentGroup().indexOfLayer_(ourLayer), 10);
  }
});
Page.define('selected', {
  get: function get() {
    if (this._object.documentData()) {
      return this._object.documentData().currentPage() == this._object;
    }

    return false;
  },
  set: function set(value) {
    if (this.isImmutable()) {
      return;
    }

    if (value) {
      this._object.documentData().setCurrentPage(this._object);
    } else {
      // let's just select the first page, not sure what else we could do
      this._object.documentData().setCurrentPageIndex(0);
    }
  }
});
/**
 * The layers that the user has selected.
 *
 * @return {Selection} A selection object representing the layers that the user has selected.
 */

Page.define('selectedLayers', {
  enumerable: false,
  exportable: false,
  importable: false,
  get: function get() {
    return new _models_Selection__WEBPACK_IMPORTED_MODULE_2__["Selection"](this);
  }
});

/***/ }),

/***/ "./Source/dom/layers/Shape.js":
/*!************************************!*\
  !*** ./Source/dom/layers/Shape.js ***!
  \************************************/
/*! exports provided: Shape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shape", function() { return Shape; });
/* harmony import */ var _WrappedObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../WrappedObject */ "./Source/dom/WrappedObject.js");
/* harmony import */ var _Group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Group */ "./Source/dom/layers/Group.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums */ "./Source/dom/enums.js");
/* harmony import */ var _Factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Factory */ "./Source/dom/Factory.js");
/* harmony import */ var _models_Rectangle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/Rectangle */ "./Source/dom/models/Rectangle.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





 // TODO: set and modify path

/**
 * Represents a shape group (which contains some layers with boolean ops).
 */

var Shape =
/*#__PURE__*/
function (_Group) {
  _inherits(Shape, _Group);

  /**
   * Make a new shape object.
   *
   * @param [Object] properties - The properties to set on the object as a JSON object.
   *                              If `sketchObject` is provided, will wrap it.
   *                              Otherwise, creates a new native object.
   */
  function Shape() {
    var _this;

    var shape = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Shape);

    if (!shape.sketchObject) {
      // eslint-disable-next-line no-param-reassign
      shape.sketchObject = _Factory__WEBPACK_IMPORTED_MODULE_3__["Factory"].createNative(Shape).alloc().initWithFrame(new _models_Rectangle__WEBPACK_IMPORTED_MODULE_4__["Rectangle"](0, 0, 100, 100).asCGRect());
      _this = _possibleConstructorReturn(this, _getPrototypeOf(Shape).call(this, shape));

      if (!shape.layers) {
        var frame = _this._object.frame();

        _this.sketchObject.addLayer(MSRectangleShape.alloc().initWithFrame(CGRectMake(0, 0, frame.width(), frame.height())));
      }
    } else {
      _this = _possibleConstructorReturn(this, _getPrototypeOf(Shape).call(this, shape));
    }

    return _possibleConstructorReturn(_this);
  }

  return Shape;
}(_Group__WEBPACK_IMPORTED_MODULE_1__["Group"]);
Shape.type = _enums__WEBPACK_IMPORTED_MODULE_2__["Types"].Shape;
Shape[_WrappedObject__WEBPACK_IMPORTED_MODULE_0__["DefinedPropertiesKey"]] = _objectSpread({}, _Group__WEBPACK_IMPORTED_MODULE_1__["Group"][_WrappedObject__WEBPACK_IMPORTED_MODULE_0__["DefinedPropertiesKey"]]);
_Factory__WEBPACK_IMPORTED_MODULE_3__["Factory"].registerClass(Shape, MSShapeGroup);
_Factory__WEBPACK_IMPORTED_MODULE_3__["Factory"].registerClass(Shape, MSImmutableShapeGroup);

/***/ }),

/***/ "./Source/dom/layers/ShapePath.js":
/*!****************************************!*\
  !*** ./Source/dom/layers/ShapePath.js ***!
  \****************************************/
/*! exports provided: ShapePath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapePath", function() { return ShapePath; });
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! util */ "./core-modules/node_modules/@skpm/util/index.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _WrappedObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../WrappedObject */ "./Source/dom/WrappedObject.js");
/* harmony import */ var _StyledLayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StyledLayer */ "./Source/dom/layers/StyledLayer.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enums */ "./Source/dom/enums.js");
/* harmony import */ var _Factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Factory */ "./Source/dom/Factory.js");
/* harmony import */ var _models_Rectangle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/Rectangle */ "./Source/dom/models/Rectangle.js");
/* harmony import */ var _models_CurvePoint__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/CurvePoint */ "./Source/dom/models/CurvePoint.js");
/* harmony import */ var _wrapNativeObject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../wrapNativeObject */ "./Source/dom/wrapNativeObject.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var ShapeType = {
  Rectangle: 'Rectangle',
  Oval: 'Oval',
  Polygon: 'Polygon',
  Star: 'Star',
  Triangle: 'Triangle',
  Custom: 'Custom'
};
var ShapeTypeMap = {
  MSRectangleShape: ShapeType.Rectangle,
  MSShapePathLayer: ShapeType.Custom,
  MSImmutableShapePathLayer: ShapeType.Custom,
  MSOvalShape: ShapeType.Oval,
  MSPolygonShape: ShapeType.Polygon,
  MSStarShape: ShapeType.Star,
  MSTriangleShape: ShapeType.Triangle,
  MSImmutableOvalShape: ShapeType.Oval,
  MSImmutablePolygonShape: ShapeType.Polygon,
  MSImmutableRectangleShape: ShapeType.Rectangle,
  MSImmutableStarShape: ShapeType.Star,
  MSImmutableTriangleShape: ShapeType.Triangle
};
var ShapeTypeMapReverse = {
  Rectangle: MSRectangleShape,
  Oval: MSOvalShape,
  Polygon: MSPolygonShape,
  Star: MSStarShape,
  Triangle: MSTriangleShape,
  Custom: MSRectangleShape // we are just going to default to Rectangle here
  // TODO: set and modify path

  /**
   * Represents a shape layer (a rectangle, oval, path, etc).
   */

};
var ShapePath =
/*#__PURE__*/
function (_StyledLayer) {
  _inherits(ShapePath, _StyledLayer);

  /**
   * Make a new shape object.
   *
   * @param [Object] properties - The properties to set on the object as a JSON object.
   *                              If `sketchObject` is provided, will wrap it.
   *                              Otherwise, creates a new native object.
   */
  function ShapePath() {
    var _this;

    var shape = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, ShapePath);

    if (!shape.sketchObject) {
      // eslint-disable-next-line no-param-reassign
      shape.sketchObject = ShapeTypeMapReverse[shape.shapeType || ShapeType.Custom].alloc().initWithFrame(new _models_Rectangle__WEBPACK_IMPORTED_MODULE_5__["Rectangle"](0, 0, 100, 100).asCGRect());

      if (shape.shapeType === ShapeType.Polygon || shape.shapeType === ShapeType.Star) {
        shape.sketchObject.resetPoints();
      }

      _this = _possibleConstructorReturn(this, _getPrototypeOf(ShapePath).call(this, shape));
    } else {
      _this = _possibleConstructorReturn(this, _getPrototypeOf(ShapePath).call(this, shape));
    }

    return _possibleConstructorReturn(_this);
  }

  _createClass(ShapePath, [{
    key: "getSVGPath",
    value: function getSVGPath() {
      var nsbezierpath = NSBezierPath.bezierPathWithPath(this._object.pathInFrameWithTransforms());
      return String(nsbezierpath.svgPathAttribute()).replace(/^d="/g, '').replace(/"$/g, '');
    }
  }], [{
    key: "fromSVGPath",
    value: function fromSVGPath(svgPath) {
      var closed = MOPointer.alloc().init();
      return new this({
        sketchObject: MSShapePathLayer.layerWithPath(MSPath.pathWithBezierPath(SVGPathInterpreter.bezierPathFromCommands_isPathClosed(svgPath, closed)))
      });
    }
  }]);

  return ShapePath;
}(_StyledLayer__WEBPACK_IMPORTED_MODULE_2__["StyledLayer"]);
ShapePath.type = _enums__WEBPACK_IMPORTED_MODULE_3__["Types"].ShapePath;
ShapePath[_WrappedObject__WEBPACK_IMPORTED_MODULE_1__["DefinedPropertiesKey"]] = _objectSpread({}, _StyledLayer__WEBPACK_IMPORTED_MODULE_2__["StyledLayer"][_WrappedObject__WEBPACK_IMPORTED_MODULE_1__["DefinedPropertiesKey"]]);
_Factory__WEBPACK_IMPORTED_MODULE_4__["Factory"].registerClass(ShapePath, MSRectangleShape);
_Factory__WEBPACK_IMPORTED_MODULE_4__["Factory"].registerClass(ShapePath, MSShapePathLayer);
_Factory__WEBPACK_IMPORTED_MODULE_4__["Factory"].registerClass(ShapePath, MSImmutableShapePathLayer);
_Factory__WEBPACK_IMPORTED_MODULE_4__["Factory"].registerClass(ShapePath, MSOvalShape);
_Factory__WEBPACK_IMPORTED_MODULE_4__["Factory"].registerClass(ShapePath, MSPolygonShape);
_Factory__WEBPACK_IMPORTED_MODULE_4__["Factory"].registerClass(ShapePath, MSStarShape);
_Factory__WEBPACK_IMPORTED_MODULE_4__["Factory"].registerClass(ShapePath, MSTriangleShape);
_Factory__WEBPACK_IMPORTED_MODULE_4__["Factory"].registerClass(ShapePath, MSImmutableOvalShape);
_Factory__WEBPACK_IMPORTED_MODULE_4__["Factory"].registerClass(ShapePath, MSImmutablePolygonShape);
_Factory__WEBPACK_IMPORTED_MODULE_4__["Factory"].registerClass(ShapePath, MSImmutableRectangleShape);
_Factory__WEBPACK_IMPORTED_MODULE_4__["Factory"].registerClass(ShapePath, MSImmutableStarShape);
_Factory__WEBPACK_IMPORTED_MODULE_4__["Factory"].registerClass(ShapePath, MSImmutableTriangleShape);
ShapePath.ShapeType = ShapeType;
ShapePath.define('shapeType', {
  get: function get() {
    return ShapeTypeMap[String(this._object.class())];
  }
});
ShapePath.define('points', {
  get: function get() {
    var _this2 = this;

    return Object(util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(this._object.points()).map(function (p) {
      var point = _models_CurvePoint__WEBPACK_IMPORTED_MODULE_6__["CurvePoint"].fromNative(p);
      point._parent = _this2._object;
      return point;
    });
  },
  set: function set(points) {
    if (this.isImmutable()) {
      return;
    }

    this._object.setEdited(true);

    this._object.removeAllCurvePoints();

    var curvePoints = points.map(function (p) {
      return Object(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_7__["wrapObject"])(p, _enums__WEBPACK_IMPORTED_MODULE_3__["Types"].CurvePoint).sketchObject;
    });

    this._object.addCurvePoints(curvePoints);

    this._object.adjustFrameAfterEditIntegral_fixAncestors(false, true);
  }
});
ShapePath.define('closed', {
  get: function get() {
    return Boolean(Number(this._object.isClosed()));
  },
  set: function set(closed) {
    if (this.isImmutable()) {
      return;
    }

    this._object.setEdited(true);

    this._object.setIsClosed(closed);

    this._object.adjustFrameAfterEditIntegral_fixAncestors(false, true);
  }
});

/***/ }),

/***/ "./Source/dom/layers/Slice.js":
/*!************************************!*\
  !*** ./Source/dom/layers/Slice.js ***!
  \************************************/
/*! exports provided: Slice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slice", function() { return Slice; });
/* harmony import */ var _WrappedObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../WrappedObject */ "./Source/dom/WrappedObject.js");
/* harmony import */ var _Layer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layer */ "./Source/dom/layers/Layer.js");
/* harmony import */ var _models_Rectangle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/Rectangle */ "./Source/dom/models/Rectangle.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enums */ "./Source/dom/enums.js");
/* harmony import */ var _Factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Factory */ "./Source/dom/Factory.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






/**
 * Represents a slice.
 */

var Slice =
/*#__PURE__*/
function (_Layer) {
  _inherits(Slice, _Layer);

  function Slice() {
    var group = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Slice);

    if (!group.sketchObject) {
      // eslint-disable-next-line no-param-reassign
      group.sketchObject = _Factory__WEBPACK_IMPORTED_MODULE_4__["Factory"].createNative(Slice).alloc().initWithFrame(new _models_Rectangle__WEBPACK_IMPORTED_MODULE_2__["Rectangle"](0, 0, 100, 100).asCGRect());
    }

    return _possibleConstructorReturn(this, _getPrototypeOf(Slice).call(this, group));
  }

  return Slice;
}(_Layer__WEBPACK_IMPORTED_MODULE_1__["Layer"]);
Slice.type = _enums__WEBPACK_IMPORTED_MODULE_3__["Types"].Slice;
Slice[_WrappedObject__WEBPACK_IMPORTED_MODULE_0__["DefinedPropertiesKey"]] = _objectSpread({}, _Layer__WEBPACK_IMPORTED_MODULE_1__["Layer"][_WrappedObject__WEBPACK_IMPORTED_MODULE_0__["DefinedPropertiesKey"]]);
_Factory__WEBPACK_IMPORTED_MODULE_4__["Factory"].registerClass(Slice, MSSliceLayer);
_Factory__WEBPACK_IMPORTED_MODULE_4__["Factory"].registerClass(Slice, MSImmutableSliceLayer);
delete Slice[_WrappedObject__WEBPACK_IMPORTED_MODULE_0__["DefinedPropertiesKey"]].flow;
delete Slice[_WrappedObject__WEBPACK_IMPORTED_MODULE_0__["DefinedPropertiesKey"]].transform;

/***/ }),

/***/ "./Source/dom/layers/StyledLayer.js":
/*!******************************************!*\
  !*** ./Source/dom/layers/StyledLayer.js ***!
  \******************************************/
/*! exports provided: StyledLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledLayer", function() { return StyledLayer; });
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! util */ "./core-modules/node_modules/@skpm/util/index.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _WrappedObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../WrappedObject */ "./Source/dom/WrappedObject.js");
/* harmony import */ var _Factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Factory */ "./Source/dom/Factory.js");
/* harmony import */ var _Layer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Layer */ "./Source/dom/layers/Layer.js");
/* harmony import */ var _style_Style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../style/Style */ "./Source/dom/style/Style.js");
/* harmony import */ var _models_SharedStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/SharedStyle */ "./Source/dom/models/SharedStyle.js");
/* harmony import */ var _wrapNativeObject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../wrapNativeObject */ "./Source/dom/wrapNativeObject.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








/**
 * Represents a layer with style.
 */

var StyledLayer =
/*#__PURE__*/
function (_Layer) {
  _inherits(StyledLayer, _Layer);

  function StyledLayer() {
    _classCallCheck(this, StyledLayer);

    return _possibleConstructorReturn(this, _getPrototypeOf(StyledLayer).apply(this, arguments));
  }

  return StyledLayer;
}(_Layer__WEBPACK_IMPORTED_MODULE_3__["Layer"]);
StyledLayer[_WrappedObject__WEBPACK_IMPORTED_MODULE_1__["DefinedPropertiesKey"]] = _objectSpread({}, _Layer__WEBPACK_IMPORTED_MODULE_3__["Layer"][_WrappedObject__WEBPACK_IMPORTED_MODULE_1__["DefinedPropertiesKey"]]);
_Factory__WEBPACK_IMPORTED_MODULE_2__["Factory"].registerClass(StyledLayer, MSStyledLayer);
_Factory__WEBPACK_IMPORTED_MODULE_2__["Factory"].registerClass(StyledLayer, MSImmutableStyledLayer);
StyledLayer.define('style', {
  get: function get() {
    return _style_Style__WEBPACK_IMPORTED_MODULE_4__["Style"].fromNative(this._object.style());
  },
  set: function set(style) {
    if (this.isImmutable()) {
      return;
    } // we can then actually set the style


    if (Object(util__WEBPACK_IMPORTED_MODULE_0__["isNativeObject"])(style)) {
      this._object.style = style.copy();
    } else if (!style || !style.sketchObject) {
      this._object.style = new _style_Style__WEBPACK_IMPORTED_MODULE_4__["Style"](style).sketchObject;
    } else {
      this._object.style = style.sketchObject.copy();
    }
  }
});
StyledLayer.define('sharedStyleId', {
  get: function get() {
    var nativeSharedStyle = this._object.sharedStyleID();

    if (!nativeSharedStyle) {
      return null;
    }

    return String(nativeSharedStyle);
  },
  set: function set(sharedStyleId) {
    if (this.isImmutable()) {
      return;
    }

    if (!sharedStyleId) {
      this._object.setSharedStyleID(null);

      return;
    }

    this._object.setSharedStyleID(sharedStyleId);
  }
});
StyledLayer.define('sharedStyle', {
  enumerable: false,
  exportable: false,
  get: function get() {
    if (!this._object.sharedStyle) {
      return null;
    }

    var nativeSharedStyle = this._object.sharedStyle();

    if (!nativeSharedStyle) {
      return null;
    }

    return _models_SharedStyle__WEBPACK_IMPORTED_MODULE_5__["SharedStyle"].fromNative(nativeSharedStyle);
  },
  set: function set(sharedStyle) {
    if (this.isImmutable()) {
      return;
    }

    if (!sharedStyle) {
      this._object.setSharedStyleID(null);

      return;
    }

    var nativeSharedStyle = Object(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_6__["wrapObject"])(sharedStyle);

    this._object.setSharedStyleID(nativeSharedStyle.id);
  }
});

/***/ }),

/***/ "./Source/dom/layers/SymbolInstance.js":
/*!*********************************************!*\
  !*** ./Source/dom/layers/SymbolInstance.js ***!
  \*********************************************/
/*! exports provided: SymbolInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymbolInstance", function() { return SymbolInstance; });
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! util */ "./core-modules/node_modules/@skpm/util/index.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _WrappedObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../WrappedObject */ "./Source/dom/WrappedObject.js");
/* harmony import */ var _StyledLayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StyledLayer */ "./Source/dom/layers/StyledLayer.js");
/* harmony import */ var _models_Rectangle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/Rectangle */ "./Source/dom/models/Rectangle.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../enums */ "./Source/dom/enums.js");
/* harmony import */ var _Factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Factory */ "./Source/dom/Factory.js");
/* harmony import */ var _wrapNativeObject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../wrapNativeObject */ "./Source/dom/wrapNativeObject.js");
/* harmony import */ var _models_Override__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/Override */ "./Source/dom/models/Override.js");
/* harmony import */ var _models_ImageData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/ImageData */ "./Source/dom/models/ImageData.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










/**
 * A Sketch symbol instance.
 */

var SymbolInstance =
/*#__PURE__*/
function (_StyledLayer) {
  _inherits(SymbolInstance, _StyledLayer);

  /**
   * Make a new symbol instance.
   */
  function SymbolInstance() {
    var master = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, SymbolInstance);

    if (!master.sketchObject) {
      // eslint-disable-next-line no-param-reassign
      master.sketchObject = _Factory__WEBPACK_IMPORTED_MODULE_5__["Factory"].createNative(SymbolInstance).alloc().initWithFrame(new _models_Rectangle__WEBPACK_IMPORTED_MODULE_3__["Rectangle"](0, 0, 100, 100).asCGRect());
    }

    return _possibleConstructorReturn(this, _getPrototypeOf(SymbolInstance).call(this, master));
  } // Replaces the instance with a group that contains a copy of the Symbol this instance refers to. Returns null if the master contains no layers instead of inserting an empty group


  _createClass(SymbolInstance, [{
    key: "detach",
    value: function detach(options) {
      if (this.isImmutable()) {
        return null;
      }

      var recursively = (options || {}).recursively || false;

      var group = this._object.detachStylesAndReplaceWithGroupRecursively(recursively);

      if (group) {
        return Object(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_6__["wrapObject"])(group);
      }

      return null;
    }
  }, {
    key: "setOverrideValue",
    value: function setOverrideValue(override, value) {
      if (this.isImmutable()) {
        return this;
      }

      var wrappedOverride = Object(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_6__["wrapObject"])(override);
      var overridePoint = wrappedOverride.sketchObject.overridePoint();

      if (wrappedOverride.property === 'image') {
        this._object.setValue_forOverridePoint(_models_ImageData__WEBPACK_IMPORTED_MODULE_8__["ImageData"].from(value).sketchObject, overridePoint);
      } else if (wrappedOverride.property === 'stringValue') {
        this._object.setValue_forOverridePoint(String(value), overridePoint);
      } else {
        this._object.setValue_forOverridePoint(value, overridePoint);
      }

      return this;
    }
  }]);

  return SymbolInstance;
}(_StyledLayer__WEBPACK_IMPORTED_MODULE_2__["StyledLayer"]);
SymbolInstance.type = _enums__WEBPACK_IMPORTED_MODULE_4__["Types"].SymbolInstance;
SymbolInstance[_WrappedObject__WEBPACK_IMPORTED_MODULE_1__["DefinedPropertiesKey"]] = _objectSpread({}, _StyledLayer__WEBPACK_IMPORTED_MODULE_2__["StyledLayer"][_WrappedObject__WEBPACK_IMPORTED_MODULE_1__["DefinedPropertiesKey"]]);
_Factory__WEBPACK_IMPORTED_MODULE_5__["Factory"].registerClass(SymbolInstance, MSSymbolInstance);
_Factory__WEBPACK_IMPORTED_MODULE_5__["Factory"].registerClass(SymbolInstance, MSImmutableSymbolInstance);
delete SymbolInstance[_WrappedObject__WEBPACK_IMPORTED_MODULE_1__["DefinedPropertiesKey"]].sharedStyle;
SymbolInstance.define('symbolId', {
  depends: 'parent',
  get: function get() {
    return String(this._object.symbolID());
  },
  set: function set(id) {
    if (this.isImmutable()) {
      return;
    } // we need to find the symbol master and change the master,
    // it's not enough to just call `this._object.setSymbolID`


    var parentPage = this._object.parentPage();

    if (!parentPage) {
      throw new Error('A symbol instance needs to be inserted in a page before setting the symbolId');
    }

    var master = parentPage.documentData().symbolWithID(id);
    this.master = master;
  }
});
SymbolInstance.define('master', {
  exportable: false,
  enumerable: false,
  get: function get() {
    var master = this._object.symbolMaster();

    if (master) {
      return Object(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_6__["wrapObject"])(this._object.symbolMaster());
    }

    return null; // this is a bit weird, if the instance is not inserted in the document, symbolMaster will be null
  },
  set: function set(master) {
    if (this.isImmutable()) {
      return;
    }

    var wrappedMaster = Object(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_6__["wrapObject"])(master);

    this._object.changeInstanceToSymbol(wrappedMaster.sketchObject);
  }
});
SymbolInstance.define('overrides', {
  get: function get() {
    var _this = this;

    // undefined when immutable
    if (!this._object.availableOverrides) {
      return undefined;
    }

    var overrides = Object(util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(MSAvailableOverride.flattenAvailableOverrides(this._object.availableOverrides()));
    return overrides.map(function (o) {
      var wrapped = _models_Override__WEBPACK_IMPORTED_MODULE_7__["Override"].fromNative(o);
      Object.defineProperty(wrapped, '__symbolInstance', {
        writable: false,
        enumerable: false,
        value: _this
      });
      return wrapped;
    });
  },
  set: function set() {
    throw new Error('Cannot set the overrides directly. Set the value of each overrides instead.');
  }
});

/***/ }),

/***/ "./Source/dom/layers/SymbolMaster.js":
/*!*******************************************!*\
  !*** ./Source/dom/layers/SymbolMaster.js ***!
  \*******************************************/
/*! exports provided: SymbolMaster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymbolMaster", function() { return SymbolMaster; });
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! util */ "./core-modules/node_modules/@skpm/util/index.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _WrappedObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../WrappedObject */ "./Source/dom/WrappedObject.js");
/* harmony import */ var _Artboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Artboard */ "./Source/dom/layers/Artboard.js");
/* harmony import */ var _models_Rectangle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/Rectangle */ "./Source/dom/models/Rectangle.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../enums */ "./Source/dom/enums.js");
/* harmony import */ var _Factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Factory */ "./Source/dom/Factory.js");
/* harmony import */ var _wrapNativeObject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../wrapNativeObject */ "./Source/dom/wrapNativeObject.js");
/* harmony import */ var _models_Override__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/Override */ "./Source/dom/models/Override.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









/**
 * A Sketch symbol master.
 */

var SymbolMaster =
/*#__PURE__*/
function (_Artboard) {
  _inherits(SymbolMaster, _Artboard);

  /**
   * Make a new symbol master.
   */
  function SymbolMaster() {
    var master = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, SymbolMaster);

    if (!master.sketchObject) {
      // eslint-disable-next-line no-param-reassign
      master.sketchObject = _Factory__WEBPACK_IMPORTED_MODULE_5__["Factory"].createNative(SymbolMaster).alloc().initWithFrame(new _models_Rectangle__WEBPACK_IMPORTED_MODULE_3__["Rectangle"](0, 0, 100, 100).asCGRect());
    }

    return _possibleConstructorReturn(this, _getPrototypeOf(SymbolMaster).call(this, master));
  } // Replace the artboard with a symbol master


  _createClass(SymbolMaster, [{
    key: "toArtboard",
    // Replace the symbol with an artboard and detach all its instances converting them into groups.
    value: function toArtboard() {
      var artboard = MSSymbolMaster.convertSymbolToArtboard(this._object);
      return _Artboard__WEBPACK_IMPORTED_MODULE_2__["Artboard"].fromNative(artboard);
    } // Returns a new SymbolInstance linked to this artboard, ready for inserting in the document

  }, {
    key: "createNewInstance",
    value: function createNewInstance() {
      return Object(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_6__["wrapObject"])(this._object.newSymbolInstance());
    } // Returns all instances of the artboard in the document, on all pages

  }, {
    key: "getAllInstances",
    value: function getAllInstances() {
      return Object(util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(this._object.allInstances()).map(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_6__["wrapObject"]);
    }
  }, {
    key: "getLibrary",
    value: function getLibrary() {
      var libraryController = AppController.sharedInstance().librariesController();
      var lib = libraryController.libraryForShareableObject(this._object);

      if (!lib) {
        var foreignObject = this._object.foreignObject();

        if (foreignObject) {
          return {
            type: _enums__WEBPACK_IMPORTED_MODULE_4__["Types"].Library,
            id: String(foreignObject.libraryID()),
            name: String(foreignObject.sourceLibraryName()),
            enabled: false,
            valid: false
          };
        }

        return null;
      }

      return Object(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_6__["wrapObject"])(lib);
    }
  }, {
    key: "syncWithLibrary",
    value: function syncWithLibrary() {
      if (this.isImmutable()) {
        return false;
      }

      var libraryController = AppController.sharedInstance().librariesController();
      var lib = libraryController.libraryForShareableObject(this._object);

      if (!lib) {
        return false;
      }

      var foreignObject = this._object.foreignObject();

      if (!foreignObject) {
        return false;
      }

      libraryController.syncForeignObject_withMaster_fromLibrary(foreignObject, null, lib);
      return true;
    }
  }, {
    key: "unlinkFromLibrary",
    value: function unlinkFromLibrary() {
      if (this.isImmutable()) {
        return false;
      }

      var libraryController = AppController.sharedInstance().librariesController();
      var lib = libraryController.libraryForShareableObject(this._object);

      if (!lib) {
        return false;
      }

      var foreignObject = this._object.foreignObject();

      if (!foreignObject) {
        return false;
      }

      foreignObject.unlinkFromRemote();
      return true;
    }
  }], [{
    key: "fromArtboard",
    value: function fromArtboard(artboard) {
      var wrappedArtboard = Object(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_6__["wrapObject"])(artboard);
      return SymbolMaster.fromNative(MSSymbolMaster.convertArtboardToSymbol(wrappedArtboard.sketchObject));
    }
  }]);

  return SymbolMaster;
}(_Artboard__WEBPACK_IMPORTED_MODULE_2__["Artboard"]);
SymbolMaster.type = _enums__WEBPACK_IMPORTED_MODULE_4__["Types"].SymbolMaster;
SymbolMaster[_WrappedObject__WEBPACK_IMPORTED_MODULE_1__["DefinedPropertiesKey"]] = _objectSpread({}, _Artboard__WEBPACK_IMPORTED_MODULE_2__["Artboard"][_WrappedObject__WEBPACK_IMPORTED_MODULE_1__["DefinedPropertiesKey"]]);
_Factory__WEBPACK_IMPORTED_MODULE_5__["Factory"].registerClass(SymbolMaster, MSSymbolMaster);
_Factory__WEBPACK_IMPORTED_MODULE_5__["Factory"].registerClass(SymbolMaster, MSImmutableSymbolMaster);
SymbolMaster.define('symbolId', {
  get: function get() {
    return String(this._object.symbolID());
  },
  set: function set() {
    throw new Error('Changing the symbol ID of a SymbolMaster is forbidden.');
  }
});
SymbolMaster.define('overrides', {
  get: function get() {
    var _this = this;

    // undefined when immutable
    if (!this._object.overrideProperies) {
      return undefined;
    }

    var overrideProperies = this._object.overrideProperies();

    var overrides = Object(util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(MSAvailableOverride.flattenAvailableOverrides(this._object.availableOverrides()));
    return overrides.map(function (o) {
      var wrapped = _models_Override__WEBPACK_IMPORTED_MODULE_7__["Override"].fromNative(o);
      var property = overrideProperies[o.overridePoint().name()];
      Object.defineProperty(wrapped, '__symbolMaster', {
        writable: false,
        enumerable: false,
        value: _this
      });

      if (property && !o.isVisible) {
        Object.defineProperty(wrapped, '__editable', {
          writable: true,
          enumerable: false,
          value: property.canOverride
        });
      }

      return wrapped;
    });
  },
  set: function set(overrides) {
    var _this2 = this;

    overrides.forEach(function (o) {
      var overridePoint = MSOverridePoint.alloc().init();
      overridePoint.name = o.id;

      _this2._object.setOverridePoint_editable(overridePoint, o.editable);
    });
  }
});
SymbolMaster.extendObject('background', {
  includedInInstance: {
    get: function get() {
      return Boolean(Number(this._object.includeBackgroundColorInInstance()));
    },
    set: function set(included) {
      if (this._parent.isImmutable()) {
        return;
      }

      this._object.setIncludeBackgroundColorInInstance(included);
    }
  }
});

/***/ }),

/***/ "./Source/dom/layers/Text.js":
/*!***********************************!*\
  !*** ./Source/dom/layers/Text.js ***!
  \***********************************/
/*! exports provided: TextLineSpacingBehaviourMap, Text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextLineSpacingBehaviourMap", function() { return TextLineSpacingBehaviourMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony import */ var _WrappedObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../WrappedObject */ "./Source/dom/WrappedObject.js");
/* harmony import */ var _StyledLayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StyledLayer */ "./Source/dom/layers/StyledLayer.js");
/* harmony import */ var _models_Rectangle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/Rectangle */ "./Source/dom/models/Rectangle.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enums */ "./Source/dom/enums.js");
/* harmony import */ var _Factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Factory */ "./Source/dom/Factory.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var TextBehaviour = {
  flexibleWidth: 0,
  // Width is adjusted to fit the content.
  fixedWidth: 1 // Width is fixed.

};
var TextLineSpacingBehaviour = {
  variable: 'variable',
  // Uses min & max line height on paragraph style
  constantBaseline: 'constantBaseline' // Uses MSConstantBaselineTypesetter for fixed line height

};
var TextLineSpacingBehaviourMap = {
  variable: 1,
  // Uses min & max line height on paragraph style
  constantBaseline: 2 // Uses MSConstantBaselineTypesetter for fixed line height
  // Mapping between text alignment names and values.

};
var TextAlignment = {
  left: 'left',
  // Visually left aligned
  right: 'right',
  // Visually right aligned
  center: 'center',
  // Visually centered
  justified: 'justified',
  // Fully-justified. The last line in a paragraph is natural-aligned.
  natural: 'natural' // Indicates the default alignment for script
  // Mapping between vertical text alignment names and values.

};
var VerticalTextAlignment = {
  top: 'top',
  // Visually top aligned
  center: 'center',
  // Visually center aligned
  bottom: 'bottom' // Visually bottom aligned

  /**
   * Represents a text layer.
   */

};
var Text =
/*#__PURE__*/
function (_StyledLayer) {
  _inherits(Text, _StyledLayer);

  /**
   * Make a new text object.
   *
   * @param [Object] properties - The properties to set on the object as a JSON object.
   *                              If `sketchObject` is provided, will wrap it.
   *                              Otherwise, creates a new native object.
   */
  function Text() {
    var _this;

    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Text);

    if (!text.sketchObject) {
      // eslint-disable-next-line no-param-reassign
      text.sketchObject = _Factory__WEBPACK_IMPORTED_MODULE_4__["Factory"].createNative(Text).alloc().initWithFrame(new _models_Rectangle__WEBPACK_IMPORTED_MODULE_2__["Rectangle"](0, 0, 100, 100).asCGRect());
    }

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Text).call(this, text));

    if (!text.frame) {
      _this.adjustToFit();
    }

    return _this;
  }
  /**
   * Set the font of the layer to an NSFont object.
   *
   * @param {NSFont} value The font to use.
   */


  _createClass(Text, [{
    key: "adjustToFit",

    /**
     * Adjust the frame of the layer to fit its contents.
     */
    value: function adjustToFit() {
      if (this.isImmutable()) {
        return this;
      }

      this._object.adjustFrameToFit();

      return this;
    }
    /**
     * Return a list of the text fragments for the text.
     *
     * @return {array} The line fragments. Each one is a dictionary containing a rectangle, and a baseline offset.
     */

  }, {
    key: "font",
    set: function set(value) {
      console.warn('`Text.font` is deprecated. Use `Text.style.fontFamily` instead');

      if (this.isImmutable()) {
        return;
      }

      this._object.font = value;
    }
    /**
     * Set the font of the layer to the system font at a given size.
     *
     * @param {number} size The system font size to use.
     */

  }, {
    key: "systemFontSize",
    set: function set(size) {
      console.warn('`Text.systemFontSize = size` is deprecated. Use `Text.style.fontFamily = "system"; Text.style.fontSize = size` instead.');

      if (this.isImmutable()) {
        return;
      }

      this._object.setFont(NSFont.systemFontOfSize_(size));
    }
  }, {
    key: "fragments",
    get: function get() {
      var text = this.text;
      var textLayer = this._object;
      var storage = this.isImmutable() ? textLayer.createTextStorage() : textLayer.immutableModelObject().createTextStorage();
      var layout = storage.layoutManagers().firstObject();
      var textContainer = layout.textContainers().firstObject();
      var numberOfGlyphs = layout.numberOfGlyphs();
      var drawingPoint = textLayer.drawingPointForText();
      var fragments = [];
      var currentLocation = 0;

      while (currentLocation < numberOfGlyphs) {
        // Get end of line index
        var lineRangeStorage = NSMakeRange(0, 0);
        var lineRangePtr = MOPointer.alloc().initWithValue(lineRangeStorage);
        layout.lineFragmentRectForGlyphAtIndex_effectiveRange(currentLocation, lineRangePtr);
        var range = lineRangePtr.value();
        var endOfLineIndex = NSMaxRange(range); //	Get bounding rect
        //	Also ignore empty line ends and hard line breaks

        var rangeLength = Math.min(endOfLineIndex, numberOfGlyphs) - currentLocation;
        var lineText = text.substr(currentLocation, rangeLength);
        var trimmedLineText = lineText.trimRight();
        rangeLength -= lineText.length - trimmedLineText.length;
        var glyphRange = NSMakeRange(currentLocation, rangeLength);
        var lineRect = layout.boundingRectForGlyphRange_inTextContainer(glyphRange, textContainer);
        var rect = new _models_Rectangle__WEBPACK_IMPORTED_MODULE_2__["Rectangle"](lineRect.origin.x + drawingPoint.x, lineRect.origin.y + drawingPoint.y, lineRect.size.width, lineRect.size.height); // get baseline offset

        var baselineOffset = layout.typesetter().baselineOffsetInLayoutManager_glyphIndex(layout, currentLocation);
        fragments.push({
          rect: rect,
          baselineOffset: baselineOffset,
          range: range
        }); // move to the next line

        currentLocation = endOfLineIndex;
      }

      return fragments;
    }
  }]);

  return Text;
}(_StyledLayer__WEBPACK_IMPORTED_MODULE_1__["StyledLayer"]);
Text.type = _enums__WEBPACK_IMPORTED_MODULE_3__["Types"].Text;
Text[_WrappedObject__WEBPACK_IMPORTED_MODULE_0__["DefinedPropertiesKey"]] = _objectSpread({}, _StyledLayer__WEBPACK_IMPORTED_MODULE_1__["StyledLayer"][_WrappedObject__WEBPACK_IMPORTED_MODULE_0__["DefinedPropertiesKey"]]);
_Factory__WEBPACK_IMPORTED_MODULE_4__["Factory"].registerClass(Text, MSTextLayer);
_Factory__WEBPACK_IMPORTED_MODULE_4__["Factory"].registerClass(Text, MSImmutableTextLayer);
Text.define('text', {
  get: function get() {
    return String(this._object.stringValue());
  },

  /**
   * Set the text of the layer.
   * If the layer hasn't explicitly been given a name, this will also change
   * the layer's name to the text value.
   *
   * @param {string} value The text to use.
   */
  set: function set(value) {
    if (this.isImmutable()) {
      return;
    }

    var object = this._object;
    object.replaceTextPreservingAttributeRanges(value);
    object.updateNameFromStorage();
  }
});
Text.Alignment = TextAlignment;
Text.VerticalAlignment = VerticalTextAlignment;
Text.define('alignment', {
  enumerable: false,
  exportable: false,
  get: function get() {
    console.warn('`Text.alignment` is deprecated. Use `Text.style.alignment` instead');
    return this.style.alignment;
  },
  set: function set(mode) {
    console.warn('`Text.alignment` is deprecated. Use `Text.style.alignment` instead');
    this.style.alignment = mode;
  }
});
Text.LineSpacing = TextLineSpacingBehaviour;
Text.define('lineSpacing', {
  get: function get() {
    var raw = this._object.lineSpacingBehaviour();

    return Object.keys(TextLineSpacingBehaviourMap).find(function (key) {
      return TextLineSpacingBehaviourMap[key] === raw;
    }) || raw;
  },
  set: function set(mode) {
    if (this.isImmutable()) {
      return;
    }

    var translated = TextLineSpacingBehaviourMap[mode];
    var lineSpacingBehaviour = typeof translated !== 'undefined' ? translated : mode;
    var textLayer = this._object;
    var layout = textLayer.immutableModelObject().textLayout();
    var initialBaselineOffset = layout.firstBaselineOffset();
    textLayer.lineSpacingBehaviour = lineSpacingBehaviour;
    var baselineOffset = layout.firstBaselineOffset();
    var rect = this.frame;
    rect.y -= baselineOffset - initialBaselineOffset;
    this.frame = rect;
  }
});
Text.define('fixedWidth', {
  get: function get() {
    return this._object.textBehaviour() === TextBehaviour.fixedWidth;
  },
  set: function set(fixed) {
    if (this.isImmutable()) {
      return;
    }

    if (fixed) {
      this._object.textBehaviour = TextBehaviour.fixedWidth;
    } else {
      this._object.textBehaviour = TextBehaviour.flexibleWidth;
    }
  }
});

/***/ }),

/***/ "./Source/dom/layers/__tests__/Artboard.test.js":
/*!******************************************************!*\
  !*** ./Source/dom/layers/__tests__/Artboard.test.js ***!
  \******************************************************/
/*! exports provided: tests, logs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(expect) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tests", function() { return __skpm_tests__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logs", function() { return __skpm_logs__; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.. */ "./Source/dom/index.js");
/* globals expect, test */

var __skpm_logs__ = [];
var __skpm_console_log__ = console.log;

var __hookedLogs = function __hookedLogs(string) {
  __skpm_logs__.push(string);

  return __skpm_console_log__(string);
};

var __skpm_tests__ = {};

var test = function test(description, fn) {
  function withLogs(context, document) {
    console.log = __hookedLogs;
    return fn(context, document);
  }

  __skpm_tests__[description] = withLogs;
};

test.only = function (description, fn) {
  fn.only = true;
  return test(description, fn);
};

test.skip = function (description, fn) {
  fn.skipped = true;
  return test(description, fn);
};


test('should create an artboard', function () {
  var artboard = new ___WEBPACK_IMPORTED_MODULE_0__["Artboard"]({
    name: 'Test'
  }); // check that an artboard can be logged

  log(artboard);
  expect(artboard.type).toBe('Artboard');
});
test('should set the artboard as a flow start point', function () {
  var artboard = new ___WEBPACK_IMPORTED_MODULE_0__["Artboard"]({
    name: 'Test',
    flowStartPoint: true
  });
  expect(artboard.flowStartPoint).toBe(true);
});
test('should set the background', function () {
  var artboard = new ___WEBPACK_IMPORTED_MODULE_0__["Artboard"](); // defaults

  expect(artboard.background.toJSON()).toEqual({
    enabled: false,
    includedInExport: true,
    color: '#ffffffff'
  });
  artboard.background.color = '#123456ff';
  expect(artboard.background.color).toBe('#123456ff');
  artboard.background.enabled = true;
  expect(artboard.background.enabled).toBe(true);
  artboard.background.includedInExport = false;
  expect(artboard.background.includedInExport).toBe(false);
  artboard.background = {
    color: '#00000000',
    enabled: false,
    includedInExport: true
  };
  expect(artboard.background.toJSON()).toEqual({
    enabled: false,
    includedInExport: true,
    color: '#00000000'
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@skpm/test-runner/expect/index.js */ "./node_modules/@skpm/test-runner/expect/index.js")))

/***/ }),

/***/ "./Source/dom/layers/__tests__/Group.test.js":
/*!***************************************************!*\
  !*** ./Source/dom/layers/__tests__/Group.test.js ***!
  \***************************************************/
/*! exports provided: tests, logs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(expect) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tests", function() { return __skpm_tests__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logs", function() { return __skpm_logs__; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.. */ "./Source/dom/index.js");
/* globals expect, test */

var __skpm_logs__ = [];
var __skpm_console_log__ = console.log;

var __hookedLogs = function __hookedLogs(string) {
  __skpm_logs__.push(string);

  return __skpm_console_log__(string);
};

var __skpm_tests__ = {};

var test = function test(description, fn) {
  function withLogs(context, document) {
    console.log = __hookedLogs;
    return fn(context, document);
  }

  __skpm_tests__[description] = withLogs;
};

test.only = function (description, fn) {
  fn.only = true;
  return test(description, fn);
};

test.skip = function (description, fn) {
  fn.skipped = true;
  return test(description, fn);
};


test('should return the layers and can iterate through them', function (context, document) {
  var page = document.selectedPage;
  var group = new ___WEBPACK_IMPORTED_MODULE_0__["Group"]({
    parent: page
  });
  var text = new ___WEBPACK_IMPORTED_MODULE_0__["Text"]({
    parent: page
  }); // eslint-disable-line

  var iterations = 0;
  var groups = 0;
  page.layers.forEach(function (layer) {
    iterations += 1;

    if (layer.isEqual(group)) {
      groups += 1;
    }
  });
  expect(iterations).toBe(2);
  expect(groups).toBe(1);
});
test('should transform a rectangle in page coords to local coords', function (context, document) {
  var page = document.selectedPage;
  var group = new ___WEBPACK_IMPORTED_MODULE_0__["Group"]({
    parent: page,
    frame: new ___WEBPACK_IMPORTED_MODULE_0__["Rectangle"](100, 100, 100, 100)
  });
  var local = group.pageRectToLocalRect(new ___WEBPACK_IMPORTED_MODULE_0__["Rectangle"](125, 75, 50, 200));
  expect(local).toEqual(new ___WEBPACK_IMPORTED_MODULE_0__["Rectangle"](25, -25, 50, 200));
});
test('should adjust the frame to fit its layers', function (context, document) {
  var page = document.selectedPage;
  var group = new ___WEBPACK_IMPORTED_MODULE_0__["Group"]({
    parent: page,
    frame: new ___WEBPACK_IMPORTED_MODULE_0__["Rectangle"](100, 100, 100, 100)
  });
  var shape = new ___WEBPACK_IMPORTED_MODULE_0__["Shape"]({
    parent: group,
    frame: new ___WEBPACK_IMPORTED_MODULE_0__["Rectangle"](50, 50, 50, 50)
  });
  group.adjustToFit();
  expect(shape.parent).toEqual(group);
  expect(group.frame).toEqual(new ___WEBPACK_IMPORTED_MODULE_0__["Rectangle"](150, 150, 50, 50));
});
test('should create a group', function (context, document) {
  var page = document.selectedPage;
  var group = new ___WEBPACK_IMPORTED_MODULE_0__["Group"]({
    parent: page
  }); // check that a group can be logged

  log(group);
  expect(group.type).toBe('Group');
});
test('should create a group with some layers', function (context, document) {
  var page = document.selectedPage;
  var group = new ___WEBPACK_IMPORTED_MODULE_0__["Group"]({
    parent: page,
    layers: [{
      type: 'Text',
      text: 'hello world'
    }]
  });
  expect(group.layers[0].type).toBe('Text');
});
test('should add a layer to a group', function (context, document) {
  var page = document.selectedPage;
  var group = new ___WEBPACK_IMPORTED_MODULE_0__["Group"]({
    parent: page,
    layers: [{
      type: 'Text',
      text: 'hello world'
    }]
  });
  expect(group.layers.length).toBe(1);
  group.layers = group.layers.concat({
    type: 'Text',
    text: 'hello world'
  });
  expect(group.layers.length).toBe(2);
  group.layers.push({
    type: 'Text',
    text: 'hello world'
  });
  expect(group.layers.length).toBe(3);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@skpm/test-runner/expect/index.js */ "./node_modules/@skpm/test-runner/expect/index.js")))

/***/ }),

/***/ "./Source/dom/layers/__tests__/HotSpot.test.js":
/*!*****************************************************!*\
  !*** ./Source/dom/layers/__tests__/HotSpot.test.js ***!
  \*****************************************************/
/*! exports provided: tests, logs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(expect) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tests", function() { return __skpm_tests__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logs", function() { return __skpm_logs__; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.. */ "./Source/dom/index.js");
/* globals expect, test */

var __skpm_logs__ = [];
var __skpm_console_log__ = console.log;

var __hookedLogs = function __hookedLogs(string) {
  __skpm_logs__.push(string);

  return __skpm_console_log__(string);
};

var __skpm_tests__ = {};

var test = function test(description, fn) {
  function withLogs(context, document) {
    console.log = __hookedLogs;
    return fn(context, document);
  }

  __skpm_tests__[description] = withLogs;
};

test.only = function (description, fn) {
  fn.only = true;
  return test(description, fn);
};

test.skip = function (description, fn) {
  fn.skipped = true;
  return test(description, fn);
};


test('should create a new HotSpot', function () {
  var hotspot = new ___WEBPACK_IMPORTED_MODULE_0__["HotSpot"](); // check that a hotspot can be logged

  log(hotspot);
  expect(hotspot.type).toEqual('HotSpot');
});
test('should create a new HotSpot from a layer', function (context, document) {
  var artboard = new ___WEBPACK_IMPORTED_MODULE_0__["Artboard"]({
    name: 'Test1',
    parent: document.selectedPage
  });
  var artboard2 = new ___WEBPACK_IMPORTED_MODULE_0__["Artboard"]({
    name: 'Test2',
    parent: document.selectedPage
  });
  var rect = new ___WEBPACK_IMPORTED_MODULE_0__["Group"]({
    parent: artboard,
    flow: {
      targetId: artboard2.id
    }
  });
  var hotspot = ___WEBPACK_IMPORTED_MODULE_0__["HotSpot"].fromLayer(rect);
  expect(rect.flow).toBe(undefined);
  expect(hotspot.type).toEqual('HotSpot');
  expect(hotspot.flow.toJSON()).toEqual({
    targetId: artboard2.id,
    type: 'Flow',
    animationType: 'slideFromRight'
  });
});
test('should throw an error when trying to create a new HotSpot from a layer without flow', function (context, document) {
  var artboard = new ___WEBPACK_IMPORTED_MODULE_0__["Artboard"]({
    name: 'Test1',
    parent: document.selectedPage
  });
  var rect = new ___WEBPACK_IMPORTED_MODULE_0__["Group"]({
    parent: artboard
  });

  try {
    ___WEBPACK_IMPORTED_MODULE_0__["HotSpot"].fromLayer(rect);
    expect(false).toBe(true);
  } catch (err) {
    expect(err.message).toMatch('Can only create a HotSpot from a layer with an existing flow');
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@skpm/test-runner/expect/index.js */ "./node_modules/@skpm/test-runner/expect/index.js")))

/***/ }),

/***/ "./Source/dom/layers/__tests__/Image.test.js":
/*!***************************************************!*\
  !*** ./Source/dom/layers/__tests__/Image.test.js ***!
  \***************************************************/
/*! exports provided: tests, logs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(expect) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tests", function() { return __skpm_tests__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logs", function() { return __skpm_logs__; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.. */ "./Source/dom/index.js");
/* globals expect, test */

var __skpm_logs__ = [];
var __skpm_console_log__ = console.log;

var __hookedLogs = function __hookedLogs(string) {
  __skpm_logs__.push(string);

  return __skpm_console_log__(string);
};

var __skpm_tests__ = {};

var test = function test(description, fn) {
  function withLogs(context, document) {
    console.log = __hookedLogs;
    return fn(context, document);
  }

  __skpm_tests__[description] = withLogs;
};

test.only = function (description, fn) {
  fn.only = true;
  return test(description, fn);
};

test.skip = function (description, fn) {
  fn.skipped = true;
  return test(description, fn);
};


test('should create an empty image', function (context, document) {
  var page = document.selectedPage;
  var image = new ___WEBPACK_IMPORTED_MODULE_0__["Image"]({
    parent: page
  }); // check that an image can be logged

  log(image);
  expect(image.type).toBe('Image');
  expect(image.parent).toEqual(page);
  expect(image.image).toBe(null);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@skpm/test-runner/expect/index.js */ "./node_modules/@skpm/test-runner/expect/index.js")))

/***/ }),

/***/ "./Source/dom/layers/__tests__/Layer.test.js":
/*!***************************************************!*\
  !*** ./Source/dom/layers/__tests__/Layer.test.js ***!
  \***************************************************/
/*! exports provided: tests, logs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(expect) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tests", function() { return __skpm_tests__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logs", function() { return __skpm_logs__; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.. */ "./Source/dom/index.js");
/* globals expect, test */

var __skpm_logs__ = [];
var __skpm_console_log__ = console.log;

var __hookedLogs = function __hookedLogs(string) {
  __skpm_logs__.push(string);

  return __skpm_console_log__(string);
};

var __skpm_tests__ = {};

var test = function test(description, fn) {
  function withLogs(context, document) {
    console.log = __hookedLogs;
    return fn(context, document);
  }

  __skpm_tests__[description] = withLogs;
};

test.only = function (description, fn) {
  fn.only = true;
  return test(description, fn);
};

test.skip = function (description, fn) {
  fn.skipped = true;
  return test(description, fn);
};


test('should set the name of the layer', function (context, document) {
  // setting an existing name
  var page = document.selectedPage;
  page.name = 'This is a page';
  expect(page.name).toBe('This is a page'); // setting a name when creating a component

  var group = new ___WEBPACK_IMPORTED_MODULE_0__["Group"]({
    name: 'blah'
  });
  expect(group.name).toBe('blah'); // default name

  var group2 = new ___WEBPACK_IMPORTED_MODULE_0__["Group"]();
  expect(group2.name).toBe('Group');
});
test('should set the frame of the layer', function () {
  var frame = new ___WEBPACK_IMPORTED_MODULE_0__["Rectangle"](10, 10, 20, 20);
  var group = new ___WEBPACK_IMPORTED_MODULE_0__["Group"]({
    frame: frame
  });
  expect(group.frame).toEqual(frame);
  var newFrame = new ___WEBPACK_IMPORTED_MODULE_0__["Rectangle"](10, 10, 20, 20);
  group.frame = newFrame;
  expect(group.frame).toEqual(newFrame);
});
test('mutating a frame should change the frame of a layer', function () {
  var group = new ___WEBPACK_IMPORTED_MODULE_0__["Group"]();
  expect(group.frame.width).toBe(100);
  group.frame.width = 400;
  expect(group.frame.width).toBe(400);
});
test('should duplicate the layer and add it as a sibling', function (context, document) {
  var page = document.selectedPage;
  var group = new ___WEBPACK_IMPORTED_MODULE_0__["Group"]({
    parent: page
  });
  expect(page.layers.length).toBe(1);
  var result = group.duplicate();
  expect(page.layers.length).toBe(2);
  expect(result.type).toBe('Group');
});
test('should remove the layer from its parent', function (context, document) {
  var page = document.selectedPage;
  var group = new ___WEBPACK_IMPORTED_MODULE_0__["Group"]({
    parent: page
  });
  expect(page.layers.length).toBe(1);
  var result = group.remove();
  expect(page.layers.length).toBe(0);
  expect(result).toEqual(group);
});
test('should select the layer', function (context, document) {
  var page = document.selectedPage;
  var group = new ___WEBPACK_IMPORTED_MODULE_0__["Group"]({
    parent: page
  }); // start with nothing selected

  expect(group.selected).toBe(false);
  expect(page.selectedLayers.isEmpty).toBe(true); // select a layer

  group.selected = true;
  expect(page.selectedLayers.isEmpty).toBe(false); // deselect it - should go back to nothing selected

  group.selected = false;
  expect(page.selectedLayers.isEmpty).toBe(true); // select one layer then another - they both should be selected

  var group2 = new ___WEBPACK_IMPORTED_MODULE_0__["Group"]({
    parent: page,
    selected: true
  });
  group.selected = true;
  expect(group2.selected).toBe(true);
  expect(page.selectedLayers.length).toBe(2);
});
test('should be able to add the layer to a group', function (context, document) {
  var page = document.selectedPage;
  var group = new ___WEBPACK_IMPORTED_MODULE_0__["Group"]({
    parent: page
  });
  expect(group.parent).toEqual(page);
  expect(group.parent.layers[0]).toEqual(group);
  var group2 = new ___WEBPACK_IMPORTED_MODULE_0__["Group"]();
  group2.parent = page;
  expect(group2.parent).toEqual(page);
});
test('should reorder the layers', function (context, document) {
  var page = document.selectedPage;
  var group1 = new ___WEBPACK_IMPORTED_MODULE_0__["Group"]({
    parent: page
  });
  var group2 = new ___WEBPACK_IMPORTED_MODULE_0__["Group"]({
    parent: page
  });
  var group3 = new ___WEBPACK_IMPORTED_MODULE_0__["Group"]({
    parent: page
  });
  expect(group1.index).toBe(0);
  expect(group2.index).toBe(1);
  expect(group3.index).toBe(2);
  group1.moveToFront();
  expect(group2.index).toBe(0);
  expect(group3.index).toBe(1);
  expect(group1.index).toBe(2);
  group3.moveToBack();
  expect(group3.index).toBe(0);
  expect(group2.index).toBe(1);
  expect(group1.index).toBe(2);
  group2.moveForward();
  expect(group3.index).toBe(0);
  expect(group1.index).toBe(1);
  expect(group2.index).toBe(2);
  group1.moveBackward();
  expect(group1.index).toBe(0);
  expect(group3.index).toBe(1);
  expect(group2.index).toBe(2);
});
test('should convert rect to different coord system', function (context, document) {
  var page = document.selectedPage;
  var group = new ___WEBPACK_IMPORTED_MODULE_0__["Group"]({
    parent: page,
    frame: {
      x: 100,
      y: 50,
      width: 10,
      height: 10
    }
  });
  var parentRect = group.localRectToParentRect(new ___WEBPACK_IMPORTED_MODULE_0__["Rectangle"]({
    x: 10,
    y: 10,
    width: 10,
    height: 10
  }));
  expect(parentRect.toJSON()).toEqual({
    x: 110,
    y: 60,
    width: 10,
    height: 10
  });
  var pageRect = group.localRectToPageRect(new ___WEBPACK_IMPORTED_MODULE_0__["Rectangle"]({
    x: 10,
    y: 10,
    width: 10,
    height: 10
  }));
  expect(pageRect.toJSON()).toEqual({
    x: 110,
    y: 60,
    width: 10,
    height: 10
  });
});
test('should hide the layer', function () {
  var group = new ___WEBPACK_IMPORTED_MODULE_0__["Group"]();
  expect(group.hidden).toBe(false);
  group.hidden = true;
  expect(group.hidden).toBe(true);
});
test('should lock the layer', function () {
  var group = new ___WEBPACK_IMPORTED_MODULE_0__["Group"]();
  expect(group.locked).toBe(false);
  group.locked = true;
  expect(group.locked).toBe(true);
});
test('should change the exportFormats', function () {
  var group = new ___WEBPACK_IMPORTED_MODULE_0__["Group"]();
  expect(group.exportFormats.length).toEqual(0);
  group.exportFormats = [{
    size: '2x',
    suffix: '@2x'
  }];
  expect(group.exportFormats.map(function (e) {
    return e.toJSON();
  })).toEqual([{
    type: 'ExportFormat',
    fileFormat: 'png',
    suffix: '@2x',
    size: '2x'
  }]);
});
test('should get the different parents', function (context, document) {
  var page = document.selectedPage;
  expect(page.parent).toEqual(document);
  expect(page.getParentPage()).toEqual(undefined);
  expect(page.getParentArtboard()).toBe(undefined);
  expect(page.getParentSymbolMaster()).toBe(undefined);
  expect(page.getParentShape()).toBe(undefined);
  var artboard = new ___WEBPACK_IMPORTED_MODULE_0__["Artboard"]({
    parent: page
  });
  expect(artboard.parent).toEqual(page);
  expect(artboard.getParentPage()).toEqual(page);
  expect(artboard.getParentArtboard()).toBe(undefined);
  expect(artboard.getParentSymbolMaster()).toBe(undefined);
  expect(artboard.getParentShape()).toBe(undefined);
  var group = new ___WEBPACK_IMPORTED_MODULE_0__["Group"]({
    parent: artboard
  });
  expect(group.parent).toEqual(artboard);
  expect(group.getParentPage()).toEqual(page);
  expect(group.getParentArtboard()).toEqual(artboard);
  expect(group.getParentSymbolMaster()).toBe(undefined);
  expect(group.getParentShape()).toBe(undefined);
});
test('should transform the layer', function () {
  var group = new ___WEBPACK_IMPORTED_MODULE_0__["Group"]();
  expect(group.transform.toJSON()).toEqual({
    rotation: 0,
    flippedHorizontally: false,
    flippedVertically: false
  });
  group.transform.flippedHorizontally = true;
  expect(group.transform.flippedHorizontally).toBe(true);
  group.transform.flippedVertically = true;
  expect(group.transform.flippedVertically).toBe(true);
  group.transform = {
    rotation: 90,
    flippedHorizontally: true,
    flippedVertically: false
  };
  expect(group.transform.toJSON()).toEqual({
    rotation: 90,
    flippedHorizontally: true,
    flippedVertically: false
  });
  group.transform.rotation = 720;
  expect(group.transform.rotation).toBe(0);
});
test('should remove a flow from a layer', function (context, document) {
  var artboard = new ___WEBPACK_IMPORTED_MODULE_0__["Artboard"]({
    name: 'Test1',
    parent: document.selectedPage
  });
  var artboard2 = new ___WEBPACK_IMPORTED_MODULE_0__["Artboard"]({
    name: 'Test2',
    parent: document.selectedPage
  });
  var rect = new ___WEBPACK_IMPORTED_MODULE_0__["Group"]({
    parent: artboard,
    flow: {
      targetId: artboard2.id
    }
  });
  expect(rect.flow.targetId).toBe(artboard2.id);
  rect.flow = undefined;
  expect(rect.flow).toBe(undefined);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@skpm/test-runner/expect/index.js */ "./node_modules/@skpm/test-runner/expect/index.js")))

/***/ }),

/***/ "./Source/dom/layers/__tests__/Page.test.js":
/*!**************************************************!*\
  !*** ./Source/dom/layers/__tests__/Page.test.js ***!
  \**************************************************/
/*! exports provided: tests, logs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(expect) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tests", function() { return __skpm_tests__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logs", function() { return __skpm_logs__; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.. */ "./Source/dom/index.js");
/* globals expect, test */

var __skpm_logs__ = [];
var __skpm_console_log__ = console.log;

var __hookedLogs = function __hookedLogs(string) {
  __skpm_logs__.push(string);

  return __skpm_console_log__(string);
};

var __skpm_tests__ = {};

var test = function test(description, fn) {
  function withLogs(context, document) {
    console.log = __hookedLogs;
    return fn(context, document);
  }

  __skpm_tests__[description] = withLogs;
};

test.only = function (description, fn) {
  fn.only = true;
  return test(description, fn);
};

test.skip = function (description, fn) {
  fn.skipped = true;
  return test(description, fn);
};


test('should return a Selection with the selected layers of the page', function (context, document) {
  var page = document.selectedPage; // check that an artboard can be logged

  log(page);
  var selection = page.selectedLayers;
  expect(selection.isEmpty).toBe(true);
  var group = new ___WEBPACK_IMPORTED_MODULE_0__["Group"]({
    parent: page,
    name: 'Test',
    selected: true
  });
  expect(group.selected).toBe(true);
  expect(selection.isEmpty).toBe(false);
});
test('should create a page', function (context, document) {
  var page = new ___WEBPACK_IMPORTED_MODULE_0__["Page"]({
    parent: document
  });
  expect(page.type).toBe('Page');
  expect(document.pages[1]).toEqual(page);
});
test('parent should be the document', function (context, document) {
  var page = document.selectedPage;
  expect(page.parent).toEqual(document);
});
test('should duplicate a page', function (context, document) {
  var page = document.selectedPage;
  var newPage = page.duplicate();
  expect(document.pages.length).toBe(2);
  expect(newPage).toEqual(document.pages[1]);
});
test('should remove a page', function (context, document) {
  var page = document.selectedPage;
  var newPage = page.duplicate();
  expect(document.pages.length).toBe(2);
  newPage.remove();
  expect(document.pages.length).toBe(1);
  expect(document.pages[0]).toEqual(page);
});
test('should return whether a page is selected or not', function (context, document) {
  var page = document.selectedPage;
  expect(page.selected).toBe(true);
  var newPage = page.duplicate();
  expect(page.selected).toBe(true);
  expect(newPage.selected).toBe(false);
  newPage.selected = true;
  expect(newPage.selected).toBe(true);
  expect(page.selected).toBe(false);
  newPage.remove();
  expect(newPage.selected).toBe(false);
  expect(page.selected).toBe(true);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@skpm/test-runner/expect/index.js */ "./node_modules/@skpm/test-runner/expect/index.js")))

/***/ }),

/***/ "./Source/dom/layers/__tests__/Shape.test.js":
/*!***************************************************!*\
  !*** ./Source/dom/layers/__tests__/Shape.test.js ***!
  \***************************************************/
/*! exports provided: tests, logs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(expect) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tests", function() { return __skpm_tests__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logs", function() { return __skpm_logs__; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.. */ "./Source/dom/index.js");
/* globals expect, test */

var __skpm_logs__ = [];
var __skpm_console_log__ = console.log;

var __hookedLogs = function __hookedLogs(string) {
  __skpm_logs__.push(string);

  return __skpm_console_log__(string);
};

var __skpm_tests__ = {};

var test = function test(description, fn) {
  function withLogs(context, document) {
    console.log = __hookedLogs;
    return fn(context, document);
  }

  __skpm_tests__[description] = withLogs;
};

test.only = function (description, fn) {
  fn.only = true;
  return test(description, fn);
};

test.skip = function (description, fn) {
  fn.skipped = true;
  return test(description, fn);
};


test('should create a new shape', function () {
  var shape = new ___WEBPACK_IMPORTED_MODULE_0__["Shape"](); // check that a shape can be logged

  log(shape);
  expect(shape.type).toBe('Shape');
});
test('a new shape should have a rectangle shape path if no layers was defined', function () {
  var shape = new ___WEBPACK_IMPORTED_MODULE_0__["Shape"]();
  expect(shape.layers.length).toBe(1);
  expect(shape.layers[0].shapeType).toBe('Rectangle');
  var shape2 = new ___WEBPACK_IMPORTED_MODULE_0__["Shape"]({
    layers: [new ___WEBPACK_IMPORTED_MODULE_0__["ShapePath"]({
      shapeType: 'Oval'
    })]
  });
  expect(shape2.layers.length).toBe(1);
  expect(shape2.layers[0].shapeType).toBe('Oval');
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@skpm/test-runner/expect/index.js */ "./node_modules/@skpm/test-runner/expect/index.js")))

/***/ }),

/***/ "./Source/dom/layers/__tests__/ShapePath.test.js":
/*!*******************************************************!*\
  !*** ./Source/dom/layers/__tests__/ShapePath.test.js ***!
  \*******************************************************/
/*! exports provided: tests, logs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(expect) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tests", function() { return __skpm_tests__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logs", function() { return __skpm_logs__; });
/* harmony import */ var _test_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../test-utils */ "./Source/test-utils.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.. */ "./Source/dom/index.js");
/* globals expect, test */


var __skpm_logs__ = [];
var __skpm_console_log__ = console.log;

var __hookedLogs = function __hookedLogs(string) {
  __skpm_logs__.push(string);

  return __skpm_console_log__(string);
};

var __skpm_tests__ = {};

var test = function test(description, fn) {
  function withLogs(context, document) {
    console.log = __hookedLogs;
    return fn(context, document);
  }

  __skpm_tests__[description] = withLogs;
};

test.only = function (description, fn) {
  fn.only = true;
  return test(description, fn);
};

test.skip = function (description, fn) {
  fn.skipped = true;
  return test(description, fn);
};


test('should create a new shape path', function () {
  var shapePath = new ___WEBPACK_IMPORTED_MODULE_1__["ShapePath"](); // check that a shapePath can be logged

  log(shapePath);
  expect(shapePath.type).toBe('ShapePath');
});
test('should create shape paths of different shape type', function () {
  Object.keys(___WEBPACK_IMPORTED_MODULE_1__["ShapePath"].ShapeType).forEach(function (shapeType) {
    var shapePath = new ___WEBPACK_IMPORTED_MODULE_1__["ShapePath"]({
      shapeType: shapeType
    });
    expect(shapePath.type).toBe('ShapePath');
    expect(shapePath.shapeType).toBe(shapeType === ___WEBPACK_IMPORTED_MODULE_1__["ShapePath"].ShapeType.Custom ? ___WEBPACK_IMPORTED_MODULE_1__["ShapePath"].ShapeType.Rectangle : shapeType);
  });
});
test('should return the points of a shape', function () {
  var shapePath = new ___WEBPACK_IMPORTED_MODULE_1__["ShapePath"]();
  expect(shapePath.points.map(function (p) {
    return p.toJSON();
  })).toEqual([{
    type: 'CurvePoint',
    pointType: 'Straight',
    cornerRadius: 0,
    curveFrom: {
      x: 0,
      y: 0
    },
    curveTo: {
      x: 0,
      y: 0
    },
    point: {
      x: 0,
      y: 0
    }
  }, {
    type: 'CurvePoint',
    pointType: 'Straight',
    cornerRadius: 0,
    curveFrom: {
      x: 1,
      y: 0
    },
    curveTo: {
      x: 1,
      y: 0
    },
    point: {
      x: 1,
      y: 0
    }
  }, {
    type: 'CurvePoint',
    pointType: 'Straight',
    cornerRadius: 0,
    curveFrom: {
      x: 1,
      y: 1
    },
    curveTo: {
      x: 1,
      y: 1
    },
    point: {
      x: 1,
      y: 1
    }
  }, {
    type: 'CurvePoint',
    pointType: 'Straight',
    cornerRadius: 0,
    curveFrom: {
      x: 0,
      y: 1
    },
    curveTo: {
      x: 0,
      y: 1
    },
    point: {
      x: 0,
      y: 1
    }
  }]);
});

if (!Object(_test_utils__WEBPACK_IMPORTED_MODULE_0__["isRunningOnJenkins"])()) {
  test('should create a shape path from an svg path', function () {
    var svgPath = 'M10,10 L90,10 L90,90 L10,90 L10,10';
    var shapePath = ___WEBPACK_IMPORTED_MODULE_1__["ShapePath"].fromSVGPath(svgPath);
    expect(shapePath.getSVGPath()).toBe(svgPath);
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@skpm/test-runner/expect/index.js */ "./node_modules/@skpm/test-runner/expect/index.js")))

/***/ }),

/***/ "./Source/dom/layers/__tests__/Slice.test.js":
/*!***************************************************!*\
  !*** ./Source/dom/layers/__tests__/Slice.test.js ***!
  \***************************************************/
/*! exports provided: tests, logs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(expect) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tests", function() { return __skpm_tests__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logs", function() { return __skpm_logs__; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.. */ "./Source/dom/index.js");
/* globals expect, test */

var __skpm_logs__ = [];
var __skpm_console_log__ = console.log;

var __hookedLogs = function __hookedLogs(string) {
  __skpm_logs__.push(string);

  return __skpm_console_log__(string);
};

var __skpm_tests__ = {};

var test = function test(description, fn) {
  function withLogs(context, document) {
    console.log = __hookedLogs;
    return fn(context, document);
  }

  __skpm_tests__[description] = withLogs;
};

test.only = function (description, fn) {
  fn.only = true;
  return test(description, fn);
};

test.skip = function (description, fn) {
  fn.skipped = true;
  return test(description, fn);
};


test('should create an slice', function () {
  var slice = new ___WEBPACK_IMPORTED_MODULE_0__["Slice"]({
    name: 'Test'
  }); // check that an artboard can be logged

  log(slice);
  expect(slice.type).toBe('Slice');
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@skpm/test-runner/expect/index.js */ "./node_modules/@skpm/test-runner/expect/index.js")))

/***/ }),

/***/ "./Source/dom/layers/__tests__/StyledLayer.test.js":
/*!*********************************************************!*\
  !*** ./Source/dom/layers/__tests__/StyledLayer.test.js ***!
  \*********************************************************/
/*! exports provided: tests, logs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(expect) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tests", function() { return __skpm_tests__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logs", function() { return __skpm_logs__; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.. */ "./Source/dom/index.js");
/* harmony import */ var _test_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../test-utils */ "./Source/test-utils.ts");
/* globals expect, test */


var __skpm_logs__ = [];
var __skpm_console_log__ = console.log;

var __hookedLogs = function __hookedLogs(string) {
  __skpm_logs__.push(string);

  return __skpm_console_log__(string);
};

var __skpm_tests__ = {};

var test = function test(description, fn) {
  function withLogs(context, document) {
    console.log = __hookedLogs;
    return fn(context, document);
  }

  __skpm_tests__[description] = withLogs;
};

test.only = function (description, fn) {
  fn.only = true;
  return test(description, fn);
};

test.skip = function (description, fn) {
  fn.skipped = true;
  return test(description, fn);
};


test('should get a style', function () {
  var shape = new ___WEBPACK_IMPORTED_MODULE_0__["Shape"]();
  expect(shape.style.type).toBe('Style');
});
test('should create a Layer with a style property', function () {
  var shape = new ___WEBPACK_IMPORTED_MODULE_0__["Shape"]({
    style: {
      fills: []
    }
  });
  expect(shape.style.type).toBe('Style');
});
test('should set a shared style', function (context, document) {
  var shape = new ___WEBPACK_IMPORTED_MODULE_0__["Shape"]();

  var _createSharedStyle = Object(_test_utils__WEBPACK_IMPORTED_MODULE_1__["createSharedStyle"])(document, ___WEBPACK_IMPORTED_MODULE_0__["Shape"], {
    fills: ['#111']
  }),
      sharedStyle = _createSharedStyle.sharedStyle;

  shape.sharedStyleId = sharedStyle.id;
  expect(shape.sharedStyleId).toBe(sharedStyle.id);

  var _createSharedStyle2 = Object(_test_utils__WEBPACK_IMPORTED_MODULE_1__["createSharedStyle"])(document, ___WEBPACK_IMPORTED_MODULE_0__["Shape"], {
    fills: ['#222']
  }),
      sharedStyle2 = _createSharedStyle2.sharedStyle;

  shape.sharedStyle = sharedStyle2;
  expect(shape.sharedStyleId).toBe(sharedStyle2.id);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@skpm/test-runner/expect/index.js */ "./node_modules/@skpm/test-runner/expect/index.js")))

/***/ }),

/***/ "./Source/dom/layers/__tests__/SymbolInstance.test.js":
/*!************************************************************!*\
  !*** ./Source/dom/layers/__tests__/SymbolInstance.test.js ***!
  \************************************************************/
/*! exports provided: tests, logs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(expect) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tests", function() { return __skpm_tests__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logs", function() { return __skpm_logs__; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.. */ "./Source/dom/index.js");
/* harmony import */ var _test_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../test-utils */ "./Source/test-utils.ts");
/* globals expect, test */

/* eslint-disable no-param-reassign */


var __skpm_logs__ = [];
var __skpm_console_log__ = console.log;

var __hookedLogs = function __hookedLogs(string) {
  __skpm_logs__.push(string);

  return __skpm_console_log__(string);
};

var __skpm_tests__ = {};

var test = function test(description, fn) {
  function withLogs(context, document) {
    console.log = __hookedLogs;
    return fn(context, document);
  }

  __skpm_tests__[description] = withLogs;
};

test.only = function (description, fn) {
  fn.only = true;
  return test(description, fn);
};

test.skip = function (description, fn) {
  fn.skipped = true;
  return test(description, fn);
};


test('should create a instance by setting the master property', function (context, document) {
  var _createSymbolMaster = Object(_test_utils__WEBPACK_IMPORTED_MODULE_1__["createSymbolMaster"])(document),
      master = _createSymbolMaster.master;

  var instance = new ___WEBPACK_IMPORTED_MODULE_0__["SymbolInstance"]({
    master: master
  }); // check that an instance can be logged

  log(instance);
  expect(instance.type).toBe('SymbolInstance');
  expect(instance.master).toBe(null); // by default, it's not anywhere in the document

  expect(master.getAllInstances()).toEqual([]); // add the instance to the page

  document.selectedPage.layers = document.selectedPage.layers.concat(instance);
  expect(master.getAllInstances()).toEqual([instance]);
  expect(instance.master).toEqual(master);
});
test('should create a instance by setting the symbolId property', function (context, document) {
  var _createSymbolMaster2 = Object(_test_utils__WEBPACK_IMPORTED_MODULE_1__["createSymbolMaster"])(document),
      master = _createSymbolMaster2.master;

  var instance = new ___WEBPACK_IMPORTED_MODULE_0__["SymbolInstance"]({
    symbolId: master.symbolId,
    parent: document.selectedPage
  });
  expect(instance.type).toBe('SymbolInstance');
  expect(master.getAllInstances()).toEqual([instance]);
  expect(instance.master).toEqual(master);
});
test('should have overrides', function (context, document) {
  var _createSymbolMaster3 = Object(_test_utils__WEBPACK_IMPORTED_MODULE_1__["createSymbolMaster"])(document),
      master = _createSymbolMaster3.master,
      text = _createSymbolMaster3.text;

  var instance = master.createNewInstance();
  document.selectedPage.layers = document.selectedPage.layers.concat(instance);
  expect(instance.overrides.length).toBe(1);
  var override = instance.overrides[0];
  var result = {
    type: 'Override',
    id: "".concat(text.id, "_stringValue"),
    path: text.id,
    property: 'stringValue',
    symbolOverride: false,
    value: 'Test value',
    isDefault: true,
    editable: true,
    affectedLayer: text.toJSON()
  };
  delete result.affectedLayer.selected;
  result.affectedLayer.style = instance.overrides[0].affectedLayer.style.toJSON();
  expect(override.toJSON()).toEqual(result);
});
test('should detach an instance', function (context, document) {
  var _createSymbolMaster4 = Object(_test_utils__WEBPACK_IMPORTED_MODULE_1__["createSymbolMaster"])(document),
      master = _createSymbolMaster4.master;

  var instance = new ___WEBPACK_IMPORTED_MODULE_0__["SymbolInstance"]({
    symbolId: master.symbolId,
    parent: document.selectedPage
  });
  expect(instance.type).toBe('SymbolInstance');
  var group = instance.detach();
  expect(group.type).toBe('Group');
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@skpm/test-runner/expect/index.js */ "./node_modules/@skpm/test-runner/expect/index.js")))

/***/ }),

/***/ "./Source/dom/layers/__tests__/SymbolMaster.test.js":
/*!**********************************************************!*\
  !*** ./Source/dom/layers/__tests__/SymbolMaster.test.js ***!
  \**********************************************************/
/*! exports provided: tests, logs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(expect) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tests", function() { return __skpm_tests__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logs", function() { return __skpm_logs__; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.. */ "./Source/dom/index.js");
/* harmony import */ var _test_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../test-utils */ "./Source/test-utils.ts");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* globals expect, test */

/* eslint-disable no-param-reassign */
// eslint-disable-next-line import/named


var __skpm_logs__ = [];
var __skpm_console_log__ = console.log;

var __hookedLogs = function __hookedLogs(string) {
  __skpm_logs__.push(string);

  return __skpm_console_log__(string);
};

var __skpm_tests__ = {};

var test = function test(description, fn) {
  function withLogs(context, document) {
    console.log = __hookedLogs;
    return fn(context, document);
  }

  __skpm_tests__[description] = withLogs;
};

test.only = function (description, fn) {
  fn.only = true;
  return test(description, fn);
};

test.skip = function (description, fn) {
  fn.skipped = true;
  return test(description, fn);
};


test('should create a symbol master from an artboard', function (context, document) {
  // build the symbol master
  var _createSymbolMaster = Object(_test_utils__WEBPACK_IMPORTED_MODULE_1__["createSymbolMaster"])(document),
      master = _createSymbolMaster.master; // check that a master can be logged


  log(master);
  expect(master.type).toBe('SymbolMaster');
  expect(document.getSymbolMasterWithID(master.symbolId)).toEqual(master);
});
test('should replace a symbol master by an artboard', function (context, document) {
  // build the symbol master
  var _createSymbolMaster2 = Object(_test_utils__WEBPACK_IMPORTED_MODULE_1__["createSymbolMaster"])(document),
      master = _createSymbolMaster2.master;

  expect(master.type).toBe('SymbolMaster');
  expect(document.getSymbolMasterWithID(master.symbolId)).toEqual(master);
  var artboard = master.toArtboard();
  expect(document.getSymbolMasterWithID(master.symbolId)).toBe(undefined);
  expect(artboard.type).toBe('Artboard');
});
test('should create a symbol instance from a master', function (context, document) {
  // build the symbol master
  var _createSymbolMaster3 = Object(_test_utils__WEBPACK_IMPORTED_MODULE_1__["createSymbolMaster"])(document),
      master = _createSymbolMaster3.master;

  expect(master.getAllInstances()).toEqual([]); // create an instance

  var instance = master.createNewInstance();
  expect(instance.type).toBe('SymbolInstance');
  expect(instance.master).toBe(null); // by default, it's not anywhere in the document

  expect(master.getAllInstances()).toEqual([]); // add the instance to the page

  document.selectedPage.layers = document.selectedPage.layers.concat(instance);
  expect(master.getAllInstances()).toEqual([instance]);
  expect(instance.master).toEqual(master);
});
test('should create a symbol master with a nested symbol', function (context, document) {
  // build the first symbol master
  var _createSymbolMaster4 = Object(_test_utils__WEBPACK_IMPORTED_MODULE_1__["createSymbolMaster"])(document),
      nestedMaster = _createSymbolMaster4.master,
      text = _createSymbolMaster4.text;

  var artboard = new ___WEBPACK_IMPORTED_MODULE_0__["Artboard"]({
    name: 'Test2',
    parent: document.selectedPage
  });
  var text2 = new ___WEBPACK_IMPORTED_MODULE_0__["Text"]({
    text: 'Test value 2'
  });
  var nestedInstance = nestedMaster.createNewInstance();
  artboard.layers = [nestedInstance, text2];
  var master = ___WEBPACK_IMPORTED_MODULE_0__["SymbolMaster"].fromArtboard(artboard);
  var instance = master.createNewInstance(); // add the instance to the page

  document.selectedPage.layers = document.selectedPage.layers.concat(instance);
  expect(instance.overrides.length).toBe(3);
  var result0 = {
    type: 'Override',
    id: "".concat(text2.id, "_stringValue"),
    path: text2.id,
    property: 'stringValue',
    symbolOverride: false,
    value: 'Test value 2',
    isDefault: true,
    editable: true,
    affectedLayer: text2.toJSON()
  };
  delete result0.affectedLayer.overrides;
  delete result0.affectedLayer.selected;
  result0.affectedLayer.style = instance.overrides[0].affectedLayer.style.toJSON();
  var result1 = {
    type: 'Override',
    id: "".concat(nestedInstance.id, "_symbolID"),
    path: nestedInstance.id,
    property: 'symbolID',
    symbolOverride: true,
    value: nestedInstance.symbolId,
    isDefault: true,
    editable: true,
    affectedLayer: nestedInstance.toJSON()
  };
  delete result1.affectedLayer.overrides;
  delete result1.affectedLayer.selected;
  result1.affectedLayer.style = instance.overrides[1].affectedLayer.style.toJSON();
  var result2 = {
    type: 'Override',
    id: "".concat(nestedInstance.id, "/").concat(text.id, "_stringValue"),
    path: "".concat(nestedInstance.id, "/").concat(text.id),
    property: 'stringValue',
    symbolOverride: false,
    value: 'Test value',
    isDefault: true,
    editable: true,
    affectedLayer: text.toJSON()
  };
  delete result2.affectedLayer.selected;
  result2.affectedLayer.style = instance.overrides[2].affectedLayer.style.toJSON();
  expect(instance.overrides[0].toJSON()).toEqual(result0);
  expect(instance.overrides[1].toJSON()).toEqual(result1);
  expect(instance.overrides[2].toJSON()).toEqual(result2);
});
test('should have overrides', function (context, document) {
  var _createSymbolMaster5 = Object(_test_utils__WEBPACK_IMPORTED_MODULE_1__["createSymbolMaster"])(document),
      master = _createSymbolMaster5.master,
      text = _createSymbolMaster5.text;

  expect(master.overrides.length).toBe(1);
  var override = master.overrides[0];
  var result = {
    type: 'Override',
    id: "".concat(text.id, "_stringValue"),
    path: text.id,
    property: 'stringValue',
    symbolOverride: false,
    value: 'Test value',
    isDefault: true,
    editable: true,
    affectedLayer: text.toJSON()
  };
  delete result.affectedLayer.selected;
  result.affectedLayer.style = master.overrides[0].affectedLayer.style.toJSON();
  expect(override.toJSON()).toEqual(result);
});
test('should set overrides as editable or not', function (context, document) {
  var _createSymbolMaster6 = Object(_test_utils__WEBPACK_IMPORTED_MODULE_1__["createSymbolMaster"])(document),
      master = _createSymbolMaster6.master;

  expect(master.overrides[0].editable).toBe(true);
  master.overrides[0].editable = false;
  expect(master.overrides[0].editable).toBe(false);
  master.overrides = [_objectSpread({}, master.overrides[0].toJSON(), {
    editable: true
  })];
  expect(master.overrides[0].editable).toBe(true);
});
test('should include `includedInInstance` in the `background`', function (context, document) {
  // build the symbol master
  var _createSymbolMaster7 = Object(_test_utils__WEBPACK_IMPORTED_MODULE_1__["createSymbolMaster"])(document),
      master = _createSymbolMaster7.master; // defaults


  expect(master.background.toJSON()).toEqual({
    enabled: false,
    includedInExport: true,
    includedInInstance: true,
    color: '#ffffffff'
  });
  master.background.includedInInstance = false;
  expect(master.background.includedInInstance).toBe(false);
  master.background = {
    color: '#00000000',
    enabled: false,
    includedInInstance: true,
    includedInExport: true
  };
  expect(master.background.toJSON()).toEqual({
    enabled: false,
    includedInExport: true,
    includedInInstance: true,
    color: '#00000000'
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@skpm/test-runner/expect/index.js */ "./node_modules/@skpm/test-runner/expect/index.js")))

/***/ }),

/***/ "./Source/dom/layers/__tests__/Text.test.js":
/*!**************************************************!*\
  !*** ./Source/dom/layers/__tests__/Text.test.js ***!
  \**************************************************/
/*! exports provided: tests, logs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(expect) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tests", function() { return __skpm_tests__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logs", function() { return __skpm_logs__; });
/* harmony import */ var _test_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../test-utils */ "./Source/test-utils.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.. */ "./Source/dom/index.js");
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Text */ "./Source/dom/layers/Text.js");
/* harmony import */ var _style_Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../style/Text */ "./Source/dom/style/Text.js");
/* globals expect, test */




var __skpm_logs__ = [];
var __skpm_console_log__ = console.log;

var __hookedLogs = function __hookedLogs(string) {
  __skpm_logs__.push(string);

  return __skpm_console_log__(string);
};

var __skpm_tests__ = {};

var test = function test(description, fn) {
  function withLogs(context, document) {
    console.log = __hookedLogs;
    return fn(context, document);
  }

  __skpm_tests__[description] = withLogs;
};

test.only = function (description, fn) {
  fn.only = true;
  return test(description, fn);
};

test.skip = function (description, fn) {
  fn.skipped = true;
  return test(description, fn);
};


test('should create a Text layer', function () {
  var text = new ___WEBPACK_IMPORTED_MODULE_1__["Text"](); // check that a text can be logged

  log(text);
  expect(text.type).toBe('Text');
});
test('should be able to change the text value', function () {
  var text = new ___WEBPACK_IMPORTED_MODULE_1__["Text"]({
    text: 'blah'
  });
  expect(text.text).toBe('blah');
  text.text = 'doodah';
  expect(text.text).toBe('doodah');
});
test('should adjust its size to the string with `adjustToFit`', function () {
  var text = new ___WEBPACK_IMPORTED_MODULE_1__["Text"]({
    text: 'blah',
    frame: new ___WEBPACK_IMPORTED_MODULE_1__["Rectangle"](10, 10, 1000, 1000)
  });
  text.adjustToFit();
  expect(text.frame).toEqual(new ___WEBPACK_IMPORTED_MODULE_1__["Rectangle"](10, 10, 23, 14));
});
test('should change the text alignment', function () {
  var text = new ___WEBPACK_IMPORTED_MODULE_1__["Text"]({
    text: 'blah',
    frame: new ___WEBPACK_IMPORTED_MODULE_1__["Rectangle"](10, 10, 1000, 1000)
  }); // default to left

  expect(text.alignment).toBe(___WEBPACK_IMPORTED_MODULE_1__["Text"].Alignment.left);
  Object.keys(___WEBPACK_IMPORTED_MODULE_1__["Text"].Alignment).forEach(function (key) {
    // test setting by name
    text.alignment = key;
    expect(text.alignment).toBe(___WEBPACK_IMPORTED_MODULE_1__["Text"].Alignment[key] === 'natural' ? 'left' : ___WEBPACK_IMPORTED_MODULE_1__["Text"].Alignment[key]); // test setting by value

    text.alignment = _style_Text__WEBPACK_IMPORTED_MODULE_3__["TextAlignmentMap"][key];
    expect(text.alignment).toBe(___WEBPACK_IMPORTED_MODULE_1__["Text"].Alignment[key] === 'natural' ? 'left' : ___WEBPACK_IMPORTED_MODULE_1__["Text"].Alignment[key]);
  });
});
test('should change the line spacing behavior', function () {
  var text = new ___WEBPACK_IMPORTED_MODULE_1__["Text"]({
    text: 'blah',
    frame: new ___WEBPACK_IMPORTED_MODULE_1__["Rectangle"](10, 10, 1000, 1000)
  }); // default to constant baseline

  expect(text.lineSpacing).toBe(___WEBPACK_IMPORTED_MODULE_1__["Text"].LineSpacing.constantBaseline);
  Object.keys(___WEBPACK_IMPORTED_MODULE_1__["Text"].LineSpacing).forEach(function (key) {
    // test setting by name
    text.lineSpacing = key;
    expect(text.lineSpacing).toBe(___WEBPACK_IMPORTED_MODULE_1__["Text"].LineSpacing[key]); // test setting by value

    text.lineSpacing = _Text__WEBPACK_IMPORTED_MODULE_2__["TextLineSpacingBehaviourMap"][key];
    expect(text.lineSpacing).toBe(___WEBPACK_IMPORTED_MODULE_1__["Text"].LineSpacing[key]);
  });
});
test('should fix the width', function () {
  var text = new ___WEBPACK_IMPORTED_MODULE_1__["Text"]({
    text: 'blah',
    frame: new ___WEBPACK_IMPORTED_MODULE_1__["Rectangle"](10, 10, 1000, 1000)
  }); // default to true

  expect(text.fixedWidth).toBe(false);
  text.fixedWidth = true;
  expect(text.fixedWidth).toBe(true);
}); // on Jenkins, this throws an `AddressSanitizer: heap-buffer-overflow` error
// so we'll just skip it on there for now

if (!Object(_test_utils__WEBPACK_IMPORTED_MODULE_0__["isRunningOnJenkins"])()) {
  test('should return the fragments of a text layer', function () {
    var text = new ___WEBPACK_IMPORTED_MODULE_1__["Text"]({
      text: 'blah'
    });
    var _text = text,
        fragments = _text.fragments;
    expect(fragments.length).toBe(1);
    expect(fragments[0].baselineOffset).toBe(3);
    expect(Number(fragments[0].range.location)).toBe(0);
    expect(Number(fragments[0].range.length)).toBe(4);
    expect(fragments[0].rect.toJSON()).toEqual({
      x: 0,
      y: 0,
      width: 22.6875,
      height: 14
    }); // https://github.com/BohemianCoding/SketchAPI/issues/144

    text = new ___WEBPACK_IMPORTED_MODULE_1__["Text"]({
      text: 'Test\nHello\n123\no'
    }); // eslint-disable-next-line

    fragments = text.fragments;
    expect(fragments.length).toBe(4);
    expect(fragments[0].baselineOffset).toBe(3);
    expect(Number(fragments[0].range.location)).toBe(0);
    expect(Number(fragments[0].range.length)).toBe(5);
    expect(fragments[0].rect.toJSON()).toEqual({
      x: 0,
      y: 0,
      width: 22.0078125,
      height: 14
    });
    expect(fragments[1].baselineOffset).toBe(3);
    expect(Number(fragments[1].range.location)).toBe(5);
    expect(Number(fragments[1].range.length)).toBe(6);
    expect(fragments[1].rect.toJSON()).toEqual({
      x: 0,
      y: 14,
      width: 27.345703125,
      height: 14
    });
    expect(fragments[2].baselineOffset).toBe(3);
    expect(Number(fragments[2].range.location)).toBe(11);
    expect(Number(fragments[2].range.length)).toBe(4);
    expect(fragments[2].rect.toJSON()).toEqual({
      x: 0,
      y: 28,
      width: 20.021484375,
      height: 14
    });
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@skpm/test-runner/expect/index.js */ "./node_modules/@skpm/test-runner/expect/index.js")))

/***/ }),

/***/ "./Source/dom/models/CurvePoint.js":
/*!*****************************************!*\
  !*** ./Source/dom/models/CurvePoint.js ***!
  \*****************************************/
/*! exports provided: PointType, CurvePoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointType", function() { return PointType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurvePoint", function() { return CurvePoint; });
/* harmony import */ var _WrappedObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../WrappedObject */ "./Source/dom/WrappedObject.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums */ "./Source/dom/enums.js");
/* harmony import */ var _Factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Factory */ "./Source/dom/Factory.js");
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Point */ "./Source/dom/models/Point.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var PointTypeMap = {
  Undefined: 0,
  Straight: 1,
  Mirrored: 2,
  Asymmetric: 3,
  Disconnected: 4,
  Rounded: 5
};
var PointType = {
  Undefined: 'Undefined',
  Straight: 'Straight',
  Mirrored: 'Mirrored',
  Asymmetric: 'Asymmetric',
  Disconnected: 'Disconnected'
};
var CurvePoint =
/*#__PURE__*/
function (_WrappedObject) {
  _inherits(CurvePoint, _WrappedObject);

  function CurvePoint() {
    var _this;

    var curvePoint = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, CurvePoint);

    if (!curvePoint.sketchObject) {
      // eslint-disable-next-line no-param-reassign
      curvePoint.sketchObject = MSCurvePoint.new();
    }

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CurvePoint).call(this, curvePoint));
    Object.defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), '_parent', {
      enumerable: false,
      writable: true
    });
    return _this;
  }

  return CurvePoint;
}(_WrappedObject__WEBPACK_IMPORTED_MODULE_0__["WrappedObject"]);
CurvePoint.type = _enums__WEBPACK_IMPORTED_MODULE_1__["Types"].CurvePoint;
CurvePoint[_WrappedObject__WEBPACK_IMPORTED_MODULE_0__["DefinedPropertiesKey"]] = _objectSpread({}, _WrappedObject__WEBPACK_IMPORTED_MODULE_0__["WrappedObject"][_WrappedObject__WEBPACK_IMPORTED_MODULE_0__["DefinedPropertiesKey"]]);
_Factory__WEBPACK_IMPORTED_MODULE_2__["Factory"].registerClass(CurvePoint, MSCurvePoint);
delete CurvePoint[_WrappedObject__WEBPACK_IMPORTED_MODULE_0__["DefinedPropertiesKey"]].id;
CurvePoint.define('cornerRadius', {
  get: function get() {
    return parseFloat(this._object.cornerRadius());
  },
  set: function set(cornerRadius) {
    this._object.setCornerRadius(cornerRadius);

    if (this._parent) {
      this._parent.setEdited(true);

      this._parent.adjustFrameAfterEditIntegral_fixAncestors(false, true);
    }
  }
});
CurvePoint.define('curveFrom', {
  get: function get() {
    var center = new _Point__WEBPACK_IMPORTED_MODULE_3__["Point"](this._object.curveFrom());
    center._parent = this;
    center._parentKey = 'curveFrom';
    return center;
  },
  set: function set(curveFrom) {
    this._object.setCurveFrom(NSMakePoint(curveFrom.x, curveFrom.y));

    if (this._parent) {
      this._parent.setEdited(true);

      this._parent.adjustFrameAfterEditIntegral_fixAncestors(false, true);
    }
  }
});
CurvePoint.define('curveTo', {
  get: function get() {
    var center = new _Point__WEBPACK_IMPORTED_MODULE_3__["Point"](this._object.curveTo());
    center._parent = this;
    center._parentKey = 'curveTo';
    return center;
  },
  set: function set(curveTo) {
    this._object.setCurveTo(NSMakePoint(curveTo.x, curveTo.y));

    if (this._parent) {
      this._parent.setEdited(true);

      this._parent.adjustFrameAfterEditIntegral_fixAncestors(false, true);
    }
  }
});
CurvePoint.define('point', {
  get: function get() {
    var center = new _Point__WEBPACK_IMPORTED_MODULE_3__["Point"](this._object.point());
    center._parent = this;
    center._parentKey = 'point';
    return center;
  },
  set: function set(point) {
    this._object.setPoint(NSMakePoint(point.x, point.y));

    if (this._parent) {
      this._parent.setEdited(true);

      this._parent.adjustFrameAfterEditIntegral_fixAncestors(false, true);
    }
  }
});
CurvePoint.PointType = PointType;
CurvePoint.define('pointType', {
  get: function get() {
    var mode = this._object.curveMode();

    return Object.keys(PointTypeMap).find(function (key) {
      return PointTypeMap[key] === mode;
    }) || mode;
  },
  set: function set(_mode) {
    if (!_mode) {
      this._object.setCurveMode(0);
    } else {
      var mode = PointTypeMap[_mode];

      this._object.setCurveMode(typeof mode !== 'undefined' ? mode : _mode);
    }

    if (this._parent) {
      this._parent.setEdited(true);

      this._parent.adjustFrameAfterEditIntegral_fixAncestors(false, true);
    }
  }
});

/***/ }),

/***/ "./Source/dom/models/DataOverride.js":
/*!*******************************************!*\
  !*** ./Source/dom/models/DataOverride.js ***!
  \*******************************************/
/*! exports provided: DataOverride */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataOverride", function() { return DataOverride; });
/* harmony import */ var _WrappedObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../WrappedObject */ "./Source/dom/WrappedObject.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums */ "./Source/dom/enums.js");
/* harmony import */ var _Factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Factory */ "./Source/dom/Factory.js");
/* harmony import */ var _Override__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Override */ "./Source/dom/models/Override.js");
/* harmony import */ var _layers_SymbolInstance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layers/SymbolInstance */ "./Source/dom/layers/SymbolInstance.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






/**
 * An MSDataOverride. This is not exposed, only used by sketch.fromNative
 */

var DataOverride =
/*#__PURE__*/
function (_WrappedObject) {
  _inherits(DataOverride, _WrappedObject);

  function DataOverride() {
    _classCallCheck(this, DataOverride);

    return _possibleConstructorReturn(this, _getPrototypeOf(DataOverride).apply(this, arguments));
  }

  return DataOverride;
}(_WrappedObject__WEBPACK_IMPORTED_MODULE_0__["WrappedObject"]);
DataOverride.type = _enums__WEBPACK_IMPORTED_MODULE_1__["Types"].DataOverride;
DataOverride[_WrappedObject__WEBPACK_IMPORTED_MODULE_0__["DefinedPropertiesKey"]] = _objectSpread({}, _WrappedObject__WEBPACK_IMPORTED_MODULE_0__["WrappedObject"][_WrappedObject__WEBPACK_IMPORTED_MODULE_0__["DefinedPropertiesKey"]]);

if (typeof MSDataOverride !== 'undefined') {
  _Factory__WEBPACK_IMPORTED_MODULE_2__["Factory"].registerClass(DataOverride, MSDataOverride);
}

DataOverride.define('override', {
  get: function get() {
    return _Override__WEBPACK_IMPORTED_MODULE_3__["Override"].fromNative(this._object.availableOverride());
  }
});
DataOverride.define('symbolInstance', {
  get: function get() {
    return _layers_SymbolInstance__WEBPACK_IMPORTED_MODULE_4__["SymbolInstance"].fromNative(this._object.symbolInstance());
  }
});
DataOverride.define('id', {
  exportable: true,
  importable: false,
  get: function get() {
    return String(this._object.overrideIdentifier());
  }
});

/***/ }),

/***/ "./Source/dom/models/Document.js":
/*!***************************************!*\
  !*** ./Source/dom/models/Document.js ***!
  \***************************************/
/*! exports provided: SaveModeType, getDocuments, getSelectedDocument, Document */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveModeType", function() { return SaveModeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDocuments", function() { return _getDocuments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedDocument", function() { return _getSelectedDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Document", function() { return Document; });
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! util */ "./core-modules/node_modules/@skpm/util/index.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _WrappedObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../WrappedObject */ "./Source/dom/WrappedObject.js");
/* harmony import */ var _layers_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layers/Page */ "./Source/dom/layers/Page.js");
/* harmony import */ var _Selection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Selection */ "./Source/dom/models/Selection.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./Source/dom/utils.js");
/* harmony import */ var _wrapNativeObject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../wrapNativeObject */ "./Source/dom/wrapNativeObject.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../enums */ "./Source/dom/enums.js");
/* harmony import */ var _Factory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Factory */ "./Source/dom/Factory.js");
/* harmony import */ var _style_Style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../style/Style */ "./Source/dom/style/Style.js");
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets */ "./Source/dom/assets/index.js");
/* harmony import */ var _SharedStyle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SharedStyle */ "./Source/dom/models/SharedStyle.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var SaveModeType = {
  Save: NSSaveOperation,
  SaveTo: NSSaveToOperation,
  SaveAs: NSSaveAsOperation
  /* eslint-disable no-use-before-define, typescript/no-use-before-define */

};

function _getDocuments() {
  var app = NSDocumentController.sharedDocumentController();
  return Object(util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(app.documents()).map(Document.fromNative.bind(Document));
}



function _getSelectedDocument() {
  var nativeDocument; // skpm will define context as a global so let's use that if available

  if (typeof context !== 'undefined') {
    /* eslint-disable no-undef */
    nativeDocument = context.actionContext && context.actionContext.document ? context.actionContext.document : context.document;
    /* eslint-enable no-undef */
  }

  if (!nativeDocument) {
    var app = NSDocumentController.sharedDocumentController();
    nativeDocument = app.currentDocument();
  } // if there is no current document, let's just try to pick the first one


  if (!nativeDocument) {
    ;

    var _NSApplication$shared = NSApplication.sharedApplication().orderedDocuments();

    var _NSApplication$shared2 = _slicedToArray(_NSApplication$shared, 1);

    nativeDocument = _NSApplication$shared2[0];
  }

  if (!nativeDocument) {
    return undefined;
  }

  return Document.fromNative(nativeDocument);
}
/* eslint-enable */

/**
 * A Sketch document.
 */



var Document =
/*#__PURE__*/
function (_WrappedObject) {
  _inherits(Document, _WrappedObject);

  /**
   * Make a new document object.
   *
   * @param [Object] properties - The properties to set on the object as a JSON object.
   *                              If `sketchObject` is provided, will wrap it.
   *                              Otherwise, creates a new native object.
   */
  function Document() {
    var document = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Document);

    if (!document.sketchObject) {
      var app = NSDocumentController.sharedDocumentController();
      var error = MOPointer.alloc().init(); // eslint-disable-next-line no-param-reassign

      document.sketchObject = app.openUntitledDocumentAndDisplay_error(true, error);

      if (error.value() !== null) {
        throw new Error(error.value());
      }

      if (!document.sketchObject) {
        throw new Error('could not create a new Document');
      }
    }

    return _possibleConstructorReturn(this, _getPrototypeOf(Document).call(this, document));
  }

  _createClass(Document, [{
    key: "_getMSDocument",
    value: function _getMSDocument() {
      var msdocument = this._object;

      if (msdocument && String(msdocument.class()) === 'MSDocumentData') {
        // we only have an MSDocumentData instead of a MSDocument
        // let's try to get back to the MSDocument
        msdocument = msdocument.delegate();
      }

      return msdocument;
    }
  }, {
    key: "_getMSDocumentData",
    value: function _getMSDocumentData() {
      var msdocument = this._object;

      if (msdocument && (String(msdocument.class()) === 'MSDocumentData' || String(msdocument.class()) === 'MSImmutableDocumentData')) {
        return msdocument;
      }

      return msdocument.documentData();
    }
  }, {
    key: "getLayerWithID",

    /**
     * Find the first layer in this document which has the given id.
     *
     * @return {Layer} A layer object, if one was found.
     */
    value: function getLayerWithID(layerId) {
      var documentData = this._getMSDocumentData();

      var layer = documentData.layerWithID(layerId);

      if (layer) {
        return Object(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_5__["wrapObject"])(layer);
      }

      return undefined;
    }
    /**
     * Find all the layers in this document which has the given name.
     */

  }, {
    key: "getLayersNamed",
    value: function getLayersNamed(layerName) {
      // search all pages
      var filteredArray = NSArray.array();

      var loopPages = this._object.pages().objectEnumerator();

      var page = loopPages.nextObject();
      var predicate = NSPredicate.predicateWithFormat('name == %@', layerName);

      while (page) {
        var scope = page.children();
        filteredArray = filteredArray.arrayByAddingObjectsFromArray(scope.filteredArrayUsingPredicate(predicate));
        page = loopPages.nextObject();
      }

      return Object(util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(filteredArray).map(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_5__["wrapObject"]);
    }
    /**
     * Find the first symbol master in this document which has the given id.
     *
     * @return {SymbolMaster} A symbol master object, if one was found.
     */

  }, {
    key: "getSymbolMasterWithID",
    value: function getSymbolMasterWithID(symbolId) {
      var documentData = this._getMSDocumentData();

      var symbol = documentData.symbolWithID(symbolId);

      if (symbol) {
        return Object(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_5__["wrapObject"])(symbol);
      }

      return undefined;
    }
  }, {
    key: "getSymbols",
    value: function getSymbols() {
      var documentData = this._getMSDocumentData();

      return Object(util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(documentData.allSymbols()).map(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_5__["wrapObject"]);
    }
  }, {
    key: "_getSharedStyleWithIdAndType",
    value: function _getSharedStyleWithIdAndType(sharedId, type) {
      var documentData = this._getMSDocumentData();

      var sharedStyle = documentData[type === _style_Style__WEBPACK_IMPORTED_MODULE_8__["StyleType"].Layer ? 'layerStyleWithID' : 'textStyleWithID'](sharedId);

      if (sharedStyle) {
        return Object(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_5__["wrapObject"])(sharedStyle);
      }

      return undefined;
    }
  }, {
    key: "getSharedLayerStyleWithID",
    value: function getSharedLayerStyleWithID(sharedId) {
      return this._getSharedStyleWithIdAndType(sharedId, _style_Style__WEBPACK_IMPORTED_MODULE_8__["StyleType"].Layer);
    }
  }, {
    key: "getSharedLayerStyles",
    value: function getSharedLayerStyles() {
      console.warn("`document.getSharedLayerStyles()` is deprecated. Use `document.sharedLayerStyles` instead.");

      var documentData = this._getMSDocumentData();

      return Object(util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(documentData.allLayerStyles()).map(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_5__["wrapObject"]);
    }
  }, {
    key: "getSharedTextStyleWithID",
    value: function getSharedTextStyleWithID(sharedId) {
      return this._getSharedStyleWithIdAndType(sharedId, _style_Style__WEBPACK_IMPORTED_MODULE_8__["StyleType"].Text);
    }
  }, {
    key: "getSharedTextStyles",
    value: function getSharedTextStyles() {
      console.warn("`document.getSharedTextStyles()` is deprecated. Use `document.sharedTextStyles` instead.");

      var documentData = this._getMSDocumentData();

      return Object(util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(documentData.allTextStyles()).map(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_5__["wrapObject"]);
    }
    /**
     * Center the view of the document window on a given layer.
     *
     * @param {Layer} layer The layer to center on.
     */

  }, {
    key: "centerOnLayer",
    value: function centerOnLayer(layer) {
      if (this.isImmutable()) {
        return;
      }

      var wrappedLayer = Object(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_5__["wrapObject"])(layer);

      this._object.contentDrawView().centerRect_(wrappedLayer.sketchObject.rect());
    }
  }, {
    key: "save",
    value: function save(path, options, callback) {
      /* eslint-disable no-param-reassign */
      if (typeof options === 'function') {
        callback = options;
        options = {};
      } else if (typeof path === 'function') {
        callback = path;
        options = {};
        path = undefined;
      }
      /* eslint-enable */


      var msdocument = this._getMSDocument();

      var saveMethod = 'saveToURL_ofType_forSaveOperation_completionHandler';

      if (!msdocument || !msdocument[saveMethod]) {
        if (callback) callback(new Error('Cannot save this document'), this);
        return;
      }

      if (!path && !this._tempURL) {
        try {
          msdocument.saveDocument(null);
          if (callback) callback(null, this);
        } catch (err) {
          if (callback) callback(err, this);
        }

        return;
      }

      var url = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getURLFromPath"])(path) || this._tempURL;

      var _ref = options || {},
          saveMode = _ref.saveMode,
          iKnowThatImOverwritingAFolder = _ref.iKnowThatImOverwritingAFolder;

      if ((!url.pathExtension() || !String(url.pathExtension())) && !iKnowThatImOverwritingAFolder) {
        throw new Error('Attempting to overwrite a folder! If you really mean to do that, set the `iKnowThatImOverwritingAFolder` option to `true`');
      }

      var fiber = coscript.createFiber();
      var nativeSaveMode = SaveModeType[saveMode] || saveMode || NSSaveAsOperation;
      var that = this;
      msdocument.saveDocumentToURL_saveMode_context_callback(url, nativeSaveMode, coscript, function (err) {
        try {
          if (callback) {
            if (err && !err.isEqual(NSNull.null())) {
              callback(new Error(err.description()), that);
            } else {
              callback(null, that);
            }
          }

          fiber.cleanup();
        } catch (error) {
          fiber.cleanup();
          throw error;
        }
      });
    }
  }, {
    key: "close",
    value: function close() {
      var msdocument = this._getMSDocument();

      if (!msdocument || !msdocument.close) {
        throw new Error('Cannot close this document');
      }

      msdocument.close();
    }
  }], [{
    key: "getDocuments",
    value: function getDocuments() {
      return _getDocuments();
    }
  }, {
    key: "getSelectedDocument",
    value: function getSelectedDocument() {
      return _getSelectedDocument();
    }
  }, {
    key: "open",
    value: function open(path, callback) {
      if (typeof path === 'function') {
        /* eslint-disable no-param-reassign */
        callback = path;
        path = undefined;
        /* eslint-enable */
      }

      var app = NSDocumentController.sharedDocumentController();

      if (!path) {
        var dialog = NSOpenPanel.openPanel();
        dialog.allowedFileTypes = ['sketch'];
        dialog.canChooseFiles = true;
        dialog.canChooseDirectories = false;
        dialog.allowsMultipleSelection = false;
        var buttonClicked = dialog.runModal();

        if (buttonClicked != NSOKButton) {
          if (callback) callback(null, undefined);
          return undefined;
        }

        var _url = dialog.URLs()[0];
        var fiber = coscript.createFiber();
        app.openDocumentWithContentsOfURL_display_context_callback(_url, true, coscript, function (_document, documentWasAlreadyOpen, err) {
          try {
            if (callback) {
              if (err && !err.isEqual(NSNull.null())) {
                callback(new Error(err.description()));
              } else {
                callback(null, Document.fromNative(_document));
              }
            }

            fiber.cleanup();
          } catch (error) {
            fiber.cleanup();
            throw error;
          }
        }); // return the current document to maintain backward compatibility
        // but that's not the right document...

        var _document2 = app.currentDocument();

        return Document.fromNative(_document2);
      }

      var document;
      var url = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getURLFromPath"])(path);

      if (app.documentForURL(url)) {
        document = Document.fromNative(app.documentForURL(url));
        if (callback) callback(null, document);
        return document;
      }

      var error = MOPointer.alloc().init();
      document = app.openDocumentWithContentsOfURL_display_error(url, true, error);

      if (error.value() !== null) {
        throw new Error(error.value());
      }

      document = Document.fromNative(document);
      if (callback) callback(null, document);
      return document;
    }
  }]);

  return Document;
}(_WrappedObject__WEBPACK_IMPORTED_MODULE_1__["WrappedObject"]);
Document.type = _enums__WEBPACK_IMPORTED_MODULE_6__["Types"].Document;
Document[_WrappedObject__WEBPACK_IMPORTED_MODULE_1__["DefinedPropertiesKey"]] = _objectSpread({}, _WrappedObject__WEBPACK_IMPORTED_MODULE_1__["WrappedObject"][_WrappedObject__WEBPACK_IMPORTED_MODULE_1__["DefinedPropertiesKey"]]);
_Factory__WEBPACK_IMPORTED_MODULE_7__["Factory"].registerClass(Document, MSDocumentData);
_Factory__WEBPACK_IMPORTED_MODULE_7__["Factory"].registerClass(Document, MSImmutableDocumentData); // also register MSDocument if it exists

if (typeof MSDocument !== 'undefined') {
  _Factory__WEBPACK_IMPORTED_MODULE_7__["Factory"].registerClass(Document, MSDocument);
}

Document.SaveMode = SaveModeType; // override getting the id to make sure it's fine if we have an MSDocument

Document.define('id', {
  exportable: true,
  importable: false,
  get: function get() {
    if (!this._object) {
      return undefined;
    }

    if (!this._object.objectID) {
      return String(this._object.documentData().objectID());
    }

    return String(this._object.objectID());
  }
});
Document.define('pages', {
  array: true,
  get: function get() {
    if (!this._object) {
      return [];
    }

    var pages = Object(util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(this._object.pages());
    return pages.map(function (page) {
      return _layers_Page__WEBPACK_IMPORTED_MODULE_2__["Page"].fromNative(page);
    });
  },
  set: function set(pages) {
    var _this = this;

    if (this.isImmutable()) {
      return;
    } // remove the existing pages


    this._object.removePages_detachInstances(this._object.pages(), true);

    Object(util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(pages).map(function (p) {
      return Object(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_5__["wrapObject"])(p, _enums__WEBPACK_IMPORTED_MODULE_6__["Types"].Page);
    }).forEach(function (page) {
      page.parent = _this; // eslint-disable-line
    });
  },
  insertItem: function insertItem(item, index) {
    if (this.isImmutable()) {
      return undefined;
    }

    var wrapped = Object(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_5__["wrapObject"])(item, _enums__WEBPACK_IMPORTED_MODULE_6__["Types"].Page);

    if (wrapped._object.documentData()) {
      wrapped._object.documentData().removePages_detachInstances([wrapped._object], false);
    }

    if (typeof this._object.insertPage_atIndex === 'function') {
      this._object.insertPage_atIndex(wrapped._object, index);
    } else {
      this._object.documentData().insertPage_atIndex(wrapped._object, index);
    }

    return wrapped;
  },
  removeItem: function removeItem(index) {
    if (this.isImmutable()) {
      return undefined;
    }

    var removed = this._object.pages()[index];

    this._object.removePages_detachInstances([removed], true);

    return _layers_Page__WEBPACK_IMPORTED_MODULE_2__["Page"].fromNative(removed);
  }
});
/**
 * The layers that the user has selected in the currently selected page.
 *
 * @return {Selection} A selection object representing the layers that the user has selected in the currently selected page.
 */

Document.define('selectedLayers', {
  enumerable: false,
  exportable: false,
  importable: false,
  get: function get() {
    return new _Selection__WEBPACK_IMPORTED_MODULE_3__["Selection"](this.selectedPage);
  },
  set: function set(layers) {
    this.selectedPage.sketchObject.changeSelectionBySelectingLayers((layers.layers || layers || []).map(function (l) {
      return Object(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_5__["wrapObject"])(l).sketchObject;
    }));
  }
});
/**
 * The current page that the user has selected.
 *
 * @return {Page} A page object representing the page that the user is currently viewing.
 */

Document.define('selectedPage', {
  enumerable: false,
  exportable: false,
  importable: false,
  get: function get() {
    return _layers_Page__WEBPACK_IMPORTED_MODULE_2__["Page"].fromNative(this._object.currentPage());
  },
  set: function set(page) {
    var wrapped = Object(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_5__["wrapObject"])(page, _enums__WEBPACK_IMPORTED_MODULE_6__["Types"].Page);

    if (wrapped._object.documentData() && String(wrapped._object.documentData().objectID()) !== this.id) {
      wrapped._object.documentData().removePages_detachInstances([wrapped._object], false);

      wrapped.parent = this;
    }

    wrapped.selected = true;
  }
});
Document.define('path', {
  get: function get() {
    var url = this._tempURL || (this._getMSDocument() || {
      fileURL: function fileURL() {}
    }).fileURL();

    if (url) {
      return String(url.absoluteString()).replace('file://', '');
    }

    return undefined;
  },
  set: function set(path) {
    if (this.isImmutable()) {
      return;
    }

    var url = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getURLFromPath"])(path);
    Object.defineProperty(this, '_tempURL', {
      enumerable: false,
      value: url
    });
  }
});
/**
 * A list of document colors
 *
 * @return {Array<ColorAsset>} A mutable array of color assets defined in the document
 */

Document.define('colors', {
  array: true,
  get: function get() {
    if (!this._object) {
      return [];
    }

    var documentData = this._getMSDocumentData();

    return Object(util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(documentData.assets().colorAssets()).map(function (a) {
      return _assets__WEBPACK_IMPORTED_MODULE_9__["ColorAsset"].fromNative(a);
    });
  },
  set: function set(colors) {
    if (this.isImmutable()) {
      return;
    }

    var assets = this._getMSDocumentData().assets();

    assets.removeAllColorAssets();
    Object(util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(colors).map(function (c) {
      return _assets__WEBPACK_IMPORTED_MODULE_9__["ColorAsset"].from(c);
    }).forEach(function (c) {
      assets.addColorAsset(c._object);
    });
  },
  insertItem: function insertItem(color, index) {
    if (this.isImmutable()) {
      return undefined;
    }

    var assets = this._getMSDocumentData().assets();

    var wrapped = _assets__WEBPACK_IMPORTED_MODULE_9__["ColorAsset"].from(color);
    assets.insertColorAsset_atIndex(wrapped._object, index);
    return wrapped;
  },
  removeItem: function removeItem(index) {
    if (this.isImmutable()) {
      return undefined;
    }

    var documentData = this._getMSDocumentData();

    return documentData.assets().removeColorAssetAtIndex(index);
  }
});
/**
 * A list of document gradients
 *
 * @return {Array<GradientAsset>} A mutable array of gradient assets defined in the document
 */

Document.define('gradients', {
  array: true,
  get: function get() {
    if (!this._object) {
      return [];
    }

    var documentData = this._getMSDocumentData();

    return Object(util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(documentData.assets().gradientAssets()).map(function (a) {
      return _assets__WEBPACK_IMPORTED_MODULE_9__["GradientAsset"].fromNative(a);
    });
  },
  set: function set(gradients) {
    if (this.isImmutable()) {
      return;
    }

    var assets = this._getMSDocumentData().assets();

    assets.removeAllGradientAssets();
    Object(util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(gradients).map(function (c) {
      return _assets__WEBPACK_IMPORTED_MODULE_9__["GradientAsset"].from(c);
    }).forEach(function (c) {
      assets.addGradientAsset(c._object);
    });
  },
  insertItem: function insertItem(gradient, index) {
    if (this.isImmutable()) {
      return undefined;
    }

    var assets = this._getMSDocumentData().assets();

    var wrapped = _assets__WEBPACK_IMPORTED_MODULE_9__["GradientAsset"].from(gradient);
    assets.insertGradientAsset_atIndex(wrapped._object, index);
    return wrapped;
  },
  removeItem: function removeItem(index) {
    if (this.isImmutable()) {
      return undefined;
    }

    var documentData = this._getMSDocumentData();

    return documentData.assets().removeGradientAssetAtIndex(index);
  }
});
Document.define('sharedLayerStyles', {
  array: true,
  get: function get() {
    if (!this._object) {
      return [];
    }

    var documentData = this._getMSDocumentData();

    return Object(util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(documentData.allLayerStyles()).map(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_5__["wrapObject"]);
  },
  set: function set(sharedLayerStyles) {
    if (this.isImmutable()) {
      return;
    }

    var documentData = this._getMSDocumentData();

    var container = documentData.sharedObjectContainerOfType(1); // remove the existing shared styles

    container.removeAllSharedObjects();
    container.addSharedObjects(Object(util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(sharedLayerStyles).map(function (item) {
      var sharedStyle;

      if (Object(_utils__WEBPACK_IMPORTED_MODULE_4__["isWrappedObject"])(item)) {
        sharedStyle = item.sketchObject;
      } else if (Object(util__WEBPACK_IMPORTED_MODULE_0__["isNativeObject"])(item)) {
        sharedStyle = item;
      } else {
        var wrappedStyle = Object(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_5__["wrapObject"])(item.style, _enums__WEBPACK_IMPORTED_MODULE_6__["Types"].Style);
        sharedStyle = MSSharedStyle.alloc().initWithName_style(item.name, wrappedStyle.sketchObject);
      }

      return sharedStyle;
    }));
  },
  insertItem: function insertItem(item, index) {
    if (this.isImmutable()) {
      return undefined;
    }

    var documentData = this._getMSDocumentData();

    var sharedStyle;

    if (Object(_utils__WEBPACK_IMPORTED_MODULE_4__["isWrappedObject"])(item)) {
      sharedStyle = item.sketchObject;
    } else if (Object(util__WEBPACK_IMPORTED_MODULE_0__["isNativeObject"])(item)) {
      sharedStyle = item;
    } else {
      var wrappedStyle = Object(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_5__["wrapObject"])(item.style, _enums__WEBPACK_IMPORTED_MODULE_6__["Types"].Style);
      sharedStyle = MSSharedStyle.alloc().initWithName_style(item.name, wrappedStyle.sketchObject);
    }

    var container = documentData.sharedObjectContainerOfType(1);
    container.insertSharedObject_atIndex(sharedStyle, index);
    return new _SharedStyle__WEBPACK_IMPORTED_MODULE_10__["SharedStyle"]({
      sketchObject: sharedStyle
    });
  },
  removeItem: function removeItem(index) {
    if (this.isImmutable()) {
      return undefined;
    }

    var documentData = this._getMSDocumentData();

    var container = documentData.sharedObjectContainerOfType(1);
    var removed = documentData.allLayerStyles()[index];
    container.removeSharedObjectAtIndex(index);
    return Object(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_5__["wrapObject"])(removed, _enums__WEBPACK_IMPORTED_MODULE_6__["Types"].SharedStyle);
  }
});
Document.define('sharedTextStyles', {
  array: true,
  get: function get() {
    if (!this._object) {
      return [];
    }

    var documentData = this._getMSDocumentData();

    return Object(util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(documentData.allTextStyles()).map(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_5__["wrapObject"]);
  },
  set: function set(sharedLayerStyles) {
    if (this.isImmutable()) {
      return;
    }

    var documentData = this._getMSDocumentData();

    var container = documentData.sharedObjectContainerOfType(2); // remove the existing shared styles

    container.removeAllSharedObjects();
    container.addSharedObjects(Object(util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(sharedLayerStyles).map(function (item) {
      var sharedStyle;

      if (Object(_utils__WEBPACK_IMPORTED_MODULE_4__["isWrappedObject"])(item)) {
        sharedStyle = item.sketchObject;
      } else if (Object(util__WEBPACK_IMPORTED_MODULE_0__["isNativeObject"])(item)) {
        sharedStyle = item;
      } else {
        var wrappedStyle = Object(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_5__["wrapObject"])(item.style, _enums__WEBPACK_IMPORTED_MODULE_6__["Types"].Style);
        sharedStyle = MSSharedStyle.alloc().initWithName_style(item.name, wrappedStyle.sketchObject);
      }

      return sharedStyle;
    }));
  },
  insertItem: function insertItem(item, index) {
    if (this.isImmutable()) {
      return undefined;
    }

    var documentData = this._getMSDocumentData();

    var sharedStyle;

    if (Object(_utils__WEBPACK_IMPORTED_MODULE_4__["isWrappedObject"])(item)) {
      sharedStyle = item.sketchObject;
    } else if (Object(util__WEBPACK_IMPORTED_MODULE_0__["isNativeObject"])(item)) {
      sharedStyle = item;
    } else {
      var wrappedStyle = Object(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_5__["wrapObject"])(item.style, _enums__WEBPACK_IMPORTED_MODULE_6__["Types"].Style);
      sharedStyle = MSSharedStyle.alloc().initWithName_style(item.name, wrappedStyle.sketchObject);
    }

    var container = documentData.sharedObjectContainerOfType(2);
    container.insertSharedObject_atIndex(sharedStyle, index);
    return new _SharedStyle__WEBPACK_IMPORTED_MODULE_10__["SharedStyle"]({
      sketchObject: sharedStyle
    });
  },
  removeItem: function removeItem(index) {
    if (this.isImmutable()) {
      return undefined;
    }

    var documentData = this._getMSDocumentData();

    var container = documentData.sharedObjectContainerOfType(2);
    var removed = documentData.allTextStyles()[index];
    container.removeSharedObjectAtIndex(index);
    return Object(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_5__["wrapObject"])(removed, _enums__WEBPACK_IMPORTED_MODULE_6__["Types"].SharedStyle);
  }
});

/***/ }),

/***/ "./Source/dom/models/ExportFormat.js":
/*!*******************************************!*\
  !*** ./Source/dom/models/ExportFormat.js ***!
  \*******************************************/
/*! exports provided: ExportFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportFormat", function() { return ExportFormat; });
/* harmony import */ var _WrappedObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../WrappedObject */ "./Source/dom/WrappedObject.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums */ "./Source/dom/enums.js");
/* harmony import */ var _Factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Factory */ "./Source/dom/Factory.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




/**
 * An MSExportFormat. This is not exposed, only used by the exportOptions of the Layer
 */

var ExportFormat =
/*#__PURE__*/
function (_WrappedObject) {
  _inherits(ExportFormat, _WrappedObject);

  function ExportFormat() {
    var exportFormat = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, ExportFormat);

    if (!exportFormat.sketchObject) {
      // eslint-disable-next-line no-param-reassign
      exportFormat.sketchObject = MSExportFormat.formatWithScale_name_fileFormat(1, '', 'png');
    }

    return _possibleConstructorReturn(this, _getPrototypeOf(ExportFormat).call(this, exportFormat));
  }

  return ExportFormat;
}(_WrappedObject__WEBPACK_IMPORTED_MODULE_0__["WrappedObject"]);
ExportFormat.type = _enums__WEBPACK_IMPORTED_MODULE_1__["Types"].ExportFormat;
ExportFormat[_WrappedObject__WEBPACK_IMPORTED_MODULE_0__["DefinedPropertiesKey"]] = _objectSpread({}, _WrappedObject__WEBPACK_IMPORTED_MODULE_0__["WrappedObject"][_WrappedObject__WEBPACK_IMPORTED_MODULE_0__["DefinedPropertiesKey"]]);
_Factory__WEBPACK_IMPORTED_MODULE_2__["Factory"].registerClass(ExportFormat, MSExportFormat);
delete ExportFormat[_WrappedObject__WEBPACK_IMPORTED_MODULE_0__["DefinedPropertiesKey"]].id;
ExportFormat.define('fileFormat', {
  get: function get() {
    return String(this._object.fileFormat());
  },
  set: function set(fileFormat) {
    if (!MSExportFormat.validFormats().containsObject(fileFormat)) {
      throw new Error('File format not supported');
    }

    this._object.setFileFormat(fileFormat);
  }
});
ExportFormat.define('prefix', {
  get: function get() {
    if (this._object.namingScheme() == 0) {
      // we have a suffix
      return undefined;
    }

    return String(this._object.name());
  },
  set: function set(name) {
    this._object.setNamingScheme(1);

    this._object.setName(name);
  }
});
ExportFormat.define('suffix', {
  get: function get() {
    if (this._object.namingScheme() == 1) {
      // we have a prefix
      return undefined;
    }

    return String(this._object.name());
  },
  set: function set(name) {
    this._object.setNamingScheme(0);

    this._object.setName(name);
  }
});
ExportFormat.define('size', {
  get: function get() {
    switch (this._object.visibleScaleType()) {
      case 0:
        return "".concat(this._object.scale(), "x");

      case 1:
        return "".concat(this._object.absoluteSize(), "w");

      case 2:
        return "".concat(this._object.absoluteSize(), "h");

      default:
        throw new Error('unknown visibleScaleType');
    }
  },
  set: function set(_size) {
    var size = String(_size);

    if (size.endsWith('w') || size.endsWith('width') || size.endsWith('px') && this._object.visibleScaleType() == 1) {
      this._object.setVisibleScaleType(1);

      this._object.setScale(0);

      this._object.setAbsoluteSize(parseInt(size, 10));
    } else if (size.endsWith('h') || size.endsWith('height') || size.endsWith('px') && this._object.visibleScaleType() == 2) {
      this._object.setVisibleScaleType(2);

      this._object.setScale(0);

      this._object.setAbsoluteSize(parseInt(size, 10));
    } else if (size.endsWith('x')) {
      this._object.setVisibleScaleType(0);

      this._object.setScale(parseInt(size, 10));

      this._object.setAbsoluteSize(0);
    } else {
      throw new Error('could not parse the size');
    }
  }
});

/***/ }),

/***/ "./Source/dom/models/Flow.js":
/*!***********************************!*\
  !*** ./Source/dom/models/Flow.js ***!
  \***********************************/
/*! exports provided: AnimationType, BackTarget, AnimationTypeMap, Flow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationType", function() { return AnimationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackTarget", function() { return BackTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationTypeMap", function() { return AnimationTypeMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Flow", function() { return Flow; });
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! util */ "./core-modules/node_modules/@skpm/util/index.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _WrappedObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../WrappedObject */ "./Source/dom/WrappedObject.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums */ "./Source/dom/enums.js");
/* harmony import */ var _Factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Factory */ "./Source/dom/Factory.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./Source/dom/utils.js");
/* harmony import */ var _wrapNativeObject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../wrapNativeObject */ "./Source/dom/wrapNativeObject.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






 // Mapping between animation type names and values.

var AnimationType = {
  none: 'none',
  slideFromRight: 'slideFromRight',
  slideFromLeft: 'slideFromLeft',
  slideFromBottom: 'slideFromBottom',
  slideFromTop: 'slideFromTop'
};
var BackTarget = 'back';
var AnimationTypeMap = {
  none: -1,
  slideFromRight: 0,
  slideFromLeft: 1,
  slideFromBottom: 2,
  slideFromTop: 3
  /**
   * A MSFlowConnection. This is not exposed, only used by Layer
   */

};
var Flow =
/*#__PURE__*/
function (_WrappedObject) {
  _inherits(Flow, _WrappedObject);

  function Flow() {
    _classCallCheck(this, Flow);

    return _possibleConstructorReturn(this, _getPrototypeOf(Flow).apply(this, arguments));
  }

  _createClass(Flow, [{
    key: "isBackAction",
    value: function isBackAction() {
      return !!this._object.isBackAction();
    }
  }, {
    key: "isValidConnection",
    value: function isValidConnection() {
      return !!this._object.isValidFlowConnection();
    }
  }], [{
    key: "from",

    /**
     * can accept a wide range of input:
     * - a wrapped Flow
     * - a native MSFlowConnection
     * - an object with a `target` or `targetId` property
     */
    value: function from(flow) {
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_4__["isWrappedObject"])(flow) && flow.type === _enums__WEBPACK_IMPORTED_MODULE_2__["Types"].Flow) {
        return flow;
      }

      if (Object(util__WEBPACK_IMPORTED_MODULE_0__["isNativeObject"])(flow)) {
        var className = String(flow.class());

        if (className !== 'MSFlowConnection') {
          throw new Error("Cannot create a flow from a ".concat(className));
        }

        return Flow.fromNative(flow);
      }

      if (flow && (flow.target || flow.targetId)) {
        return new Flow(_objectSpread({
          sketchObject: MSFlowConnection.new()
        }, flow));
      }

      throw new Error('`flow` needs to be an object');
    }
  }]);

  return Flow;
}(_WrappedObject__WEBPACK_IMPORTED_MODULE_1__["WrappedObject"]);
Flow.type = _enums__WEBPACK_IMPORTED_MODULE_2__["Types"].Flow;
Flow[_WrappedObject__WEBPACK_IMPORTED_MODULE_1__["DefinedPropertiesKey"]] = _objectSpread({}, _WrappedObject__WEBPACK_IMPORTED_MODULE_1__["WrappedObject"][_WrappedObject__WEBPACK_IMPORTED_MODULE_1__["DefinedPropertiesKey"]]);
_Factory__WEBPACK_IMPORTED_MODULE_3__["Factory"].registerClass(Flow, MSFlowConnection);
Flow.define('targetId', {
  get: function get() {
    return String(this._object.destinationArtboardID());
  },
  set: function set(targetId) {
    this._object.destinationArtboardID = targetId;
  }
});
Flow.define('target', {
  enumerable: false,
  exportable: false,
  get: function get() {
    var target = this._object.destinationArtboard();

    if (target == BackTarget) {
      return BackTarget;
    }

    return Object(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_5__["wrapObject"])(target);
  },
  set: function set(target) {
    if (target == BackTarget) {
      this._object.destinationArtboardID = BackTarget;
      return;
    }

    this._object.destinationArtboardID = Object(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_5__["wrapObject"])(target).id;
  }
});
Flow.define('animationType', {
  get: function get() {
    var raw = this._object.animationType();

    return Object.keys(AnimationTypeMap).find(function (key) {
      return AnimationTypeMap[key] === raw;
    }) || raw;
  },
  set: function set(animationType) {
    var translated = AnimationTypeMap[animationType];
    this._object.animationType = typeof translated !== 'undefined' ? translated : animationType;
  }
}); // override the WrappedObject id

delete Flow[_WrappedObject__WEBPACK_IMPORTED_MODULE_1__["DefinedPropertiesKey"]].id;

/***/ }),

/***/ "./Source/dom/models/ImageData.js":
/*!****************************************!*\
  !*** ./Source/dom/models/ImageData.js ***!
  \****************************************/
/*! exports provided: ImageData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageData", function() { return ImageData; });
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! util */ "./core-modules/node_modules/@skpm/util/index.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! buffer */ "./core-modules/node_modules/@skpm/buffer/index.js");
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(buffer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _WrappedObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../WrappedObject */ "./Source/dom/WrappedObject.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enums */ "./Source/dom/enums.js");
/* harmony import */ var _Factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Factory */ "./Source/dom/Factory.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./Source/dom/utils.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







/**
 * An MSImageData. This is not exposed, only used by Image
 */

var ImageData =
/*#__PURE__*/
function (_WrappedObject) {
  _inherits(ImageData, _WrappedObject);

  function ImageData() {
    _classCallCheck(this, ImageData);

    return _possibleConstructorReturn(this, _getPrototypeOf(ImageData).apply(this, arguments));
  }

  _createClass(ImageData, null, [{
    key: "from",

    /**
     * can accept a wide range of input:
     * - a Buffer
     * - a wrapped ImageData
     * - a native NSImage
     * - a native NSURL
     * - a native MSImageData
     * - a string: path to the file to load the image from
     * - an object with a `path` property: path to the file to load the image from
     * - an object with a `base64` string: a base64 encoded image
     */
    value: function from(image) {
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_5__["isWrappedObject"])(image) && image.type === _enums__WEBPACK_IMPORTED_MODULE_3__["Types"].ImageData) {
        return image;
      }

      var nsImage;

      if (Object(util__WEBPACK_IMPORTED_MODULE_0__["isNativeObject"])(image)) {
        if (image.isKindOfClass(NSImage)) {
          nsImage = image;
        } else if (image.isKindOfClass(NSData)) {
          nsImage = NSImage.alloc().initWithData(image);
        } else if (image.isKindOfClass(NSURL)) {
          nsImage = NSImage.alloc().initWithContentsOfURL(image);
        } else if (image.isKindOfClass(MSImageData)) {
          return ImageData.fromNative(image);
        } else {
          throw new Error("Cannot create an image from a ".concat(String(image.class())));
        }
      } else if (typeof image === 'string' || image && image.path) {
        nsImage = NSImage.alloc().initByReferencingFile(image.path || image);
      } else if (image && image.base64) {
        try {
          var data = NSData.alloc().initWithBase64EncodedString_options(image.base64, NSDataBase64DecodingIgnoreUnknownCharacters);
          nsImage = NSImage.alloc().initWithData(data);
        } catch (err) {
          throw new Error(err);
        }
      } else if (buffer__WEBPACK_IMPORTED_MODULE_1__["Buffer"].isBuffer(image)) {
        nsImage = NSImage.alloc().initWithData(image.toNSData());
      } else {
        throw new Error('`image` needs to be a Buffer');
      }

      return ImageData.fromNative(MSImageData.alloc().initWithImage(nsImage));
    }
  }]);

  return ImageData;
}(_WrappedObject__WEBPACK_IMPORTED_MODULE_2__["WrappedObject"]);
ImageData.type = _enums__WEBPACK_IMPORTED_MODULE_3__["Types"].ImageData;
ImageData[_WrappedObject__WEBPACK_IMPORTED_MODULE_2__["DefinedPropertiesKey"]] = _objectSpread({}, _WrappedObject__WEBPACK_IMPORTED_MODULE_2__["WrappedObject"][_WrappedObject__WEBPACK_IMPORTED_MODULE_2__["DefinedPropertiesKey"]]);
_Factory__WEBPACK_IMPORTED_MODULE_4__["Factory"].registerClass(ImageData, MSImageData); // make it explicit that we will get a native object

ImageData.define('nsimage', {
  get: function get() {
    return this._object.image();
  }
}); // make it explicit that we will get a native object

ImageData.define('nsdata', {
  get: function get() {
    return this._object.data();
  }
});
ImageData.define('id', {
  exportable: true,
  importable: false,

  /**
   * Returns the object ID of the wrapped Sketch model object.
   *
   * @return {string} The id.
   */
  get: function get() {
    return String(this._object.hash());
  }
});

/***/ }),

/***/ "./Source/dom/models/ImportableObject.js":
/*!***********************************************!*\
  !*** ./Source/dom/models/ImportableObject.js ***!
  \***********************************************/
/*! exports provided: ImportableObjectType, ImportableObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportableObjectType", function() { return ImportableObjectType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportableObject", function() { return ImportableObject; });
/* harmony import */ var _WrappedObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../WrappedObject */ "./Source/dom/WrappedObject.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums */ "./Source/dom/enums.js");
/* harmony import */ var _Factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Factory */ "./Source/dom/Factory.js");
/* harmony import */ var _wrapNativeObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../wrapNativeObject */ "./Source/dom/wrapNativeObject.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var ObjectTypeMap = {
  Symbol: 0,
  LayerStyle: 1,
  TextStyle: 2,
  Unknown: 3
};
var ImportableObjectType = {
  Symbol: 'Symbol',
  LayerStyle: 'LayerStyle',
  TextStyle: 'TextStyle',
  Unknown: 'Unknown'
};
var ImportableObject =
/*#__PURE__*/
function (_WrappedObject) {
  _inherits(ImportableObject, _WrappedObject);

  /**
   * Make a new symbol instance.
   */
  function ImportableObject() {
    var _this;

    var master = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, ImportableObject);

    if (!master.sketchObject) {
      throw new Error("Cannot create a ImportableObject directly");
    }

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ImportableObject).call(this, master));
    Object.defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), '_documentData', {
      enumerable: false,
      writable: true
    });
    return _this;
  }

  _createClass(ImportableObject, [{
    key: "import",
    value: function _import() {
      if (!this._documentData) {
        throw new Error('missing document data');
      }

      var importedObject = this._object.shareableObject && this._object.shareableObject();

      if (importedObject && !this._object.sourceLibrary()) {
        switch (this.objectType) {
          case ImportableObjectType.Symbol:
            {
              var symbol = this._documentData.symbolWithID(this._object.sharedObjectID());

              if (symbol) {
                return Object(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_3__["wrapNativeObject"])(symbol);
              }

              return undefined;
            }

          case ImportableObjectType.LayerStyle:
            {
              var sharedStyle = this._documentData.layerStyleWithID(this._object.sharedObjectID());

              if (sharedStyle) {
                return Object(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_3__["wrapNativeObject"])(sharedStyle);
              }

              return undefined;
            }

          case ImportableObjectType.TextStyle:
            {
              var _sharedStyle = this._documentData.textStyleWithID(this._object.sharedObjectID());

              if (_sharedStyle) {
                return Object(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_3__["wrapNativeObject"])(_sharedStyle);
              }

              return undefined;
            }

          default:
            throw new Error('Cannot import an already imported object other than a Symbol or a Shared Style');
        }
      }

      var libraryController = AppController.sharedInstance().librariesController();
      importedObject = libraryController.importShareableObjectReference_intoDocument(this._object, this._documentData);

      if (!importedObject) {
        throw new Error('Could not import the Object');
      }

      return Object(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_3__["wrapNativeObject"])(importedObject.localObject());
    }
  }]);

  return ImportableObject;
}(_WrappedObject__WEBPACK_IMPORTED_MODULE_0__["WrappedObject"]);
ImportableObject.type = _enums__WEBPACK_IMPORTED_MODULE_1__["Types"].ImportableObject;
ImportableObject[_WrappedObject__WEBPACK_IMPORTED_MODULE_0__["DefinedPropertiesKey"]] = _objectSpread({}, _WrappedObject__WEBPACK_IMPORTED_MODULE_0__["WrappedObject"][_WrappedObject__WEBPACK_IMPORTED_MODULE_0__["DefinedPropertiesKey"]]); // need to check if we have MSShareableObjectReference because it won't be available on jenkins

if (typeof MSShareableObjectReference !== 'undefined') {
  _Factory__WEBPACK_IMPORTED_MODULE_2__["Factory"].registerClass(ImportableObject, MSShareableObjectReference);
  _Factory__WEBPACK_IMPORTED_MODULE_2__["Factory"].registerClass(ImportableObject, MSSymbolMasterReference);
  _Factory__WEBPACK_IMPORTED_MODULE_2__["Factory"].registerClass(ImportableObject, MSSharedStyleReference);
  _Factory__WEBPACK_IMPORTED_MODULE_2__["Factory"].registerClass(ImportableObject, MSSharedLayerReference);
  _Factory__WEBPACK_IMPORTED_MODULE_2__["Factory"].registerClass(ImportableObject, MSSharedTextReference);
}

ImportableObject.define('id', {
  exportable: true,
  importable: false,
  get: function get() {
    var id = this._object.sharedObjectID();

    if (!id) {
      return undefined;
    }

    return String(id);
  }
});
ImportableObject.define('name', {
  exportable: true,
  importable: false,
  get: function get() {
    return String(this._object.name());
  }
});
ImportableObject.define('objectType', {
  exportable: true,
  importable: false,
  get: function get() {
    var raw = this._object.shareableObjectType();

    return Object.keys(ObjectTypeMap).find(function (key) {
      return ObjectTypeMap[key] === raw;
    }) || raw;
  }
});
ImportableObject.define('library', {
  exportable: false,
  enumerable: false,
  get: function get() {
    return Object(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_3__["wrapNativeObject"])(this._object.sourceLibrary());
  }
});

/***/ }),

/***/ "./Source/dom/models/Library.js":
/*!**************************************!*\
  !*** ./Source/dom/models/Library.js ***!
  \**************************************/
/*! exports provided: getLibraries, Library */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLibraries", function() { return _getLibraries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Library", function() { return Library; });
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! util */ "./core-modules/node_modules/@skpm/util/index.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _WrappedObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../WrappedObject */ "./Source/dom/WrappedObject.js");
/* harmony import */ var _Document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Document */ "./Source/dom/models/Document.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./Source/dom/utils.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../enums */ "./Source/dom/enums.js");
/* harmony import */ var _Factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Factory */ "./Source/dom/Factory.js");
/* harmony import */ var _wrapNativeObject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../wrapNativeObject */ "./Source/dom/wrapNativeObject.js");
/* harmony import */ var _ImportableObject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ImportableObject */ "./Source/dom/models/ImportableObject.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var AddStatus = {
  0: 'ok',
  1: 'the library has already been added',
  2: 'the document is not in the new JSON format',
  3: 'there was a problem reading the asset library file'
};
var LibraryTypeMap = {
  0: 'Internal',
  1: 'User',
  // Is this a library added by a user.
  2: 'Remote' // Is this a library that can be updated using an appcast.

};
var LibraryType = {
  Internal: 'Internal',
  User: 'User',
  Remote: 'Remote'
  /* eslint-disable no-use-before-define, typescript/no-use-before-define */

};

function _getLibraries() {
  var libraryController = AppController.sharedInstance().librariesController();
  return Object(util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(libraryController.libraries()).map(Library.fromNative.bind(Library));
}
/* eslint-enable */

/**
 * A Sketch Library.
 */



var Library =
/*#__PURE__*/
function (_WrappedObject) {
  _inherits(Library, _WrappedObject);

  function Library() {
    var library = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Library);

    if (!library.sketchObject) {
      throw new Error('Cannot create a new Library directly');
    }

    return _possibleConstructorReturn(this, _getPrototypeOf(Library).call(this, library));
  }

  _createClass(Library, [{
    key: "getDocument",
    value: function getDocument() {
      if (!this._object.document() && !this._object.loadSynchronously()) {
        throw new Error("could not get the document: ".concat(this._object.status));
      }

      var document = _Document__WEBPACK_IMPORTED_MODULE_2__["Document"].fromNative(this._object.document());

      if (this._object.appcastURL) {
        document._tempURL = this._object.appcastURL();
      } else if (this._object.locationOnDisk) {
        document._tempURL = this._object.locationOnDisk();
      }

      return document;
    }
  }, {
    key: "getImportableReferencesForDocument",
    value: function getImportableReferencesForDocument(document, objectType) {
      var provider;

      switch (objectType) {
        case _ImportableObject__WEBPACK_IMPORTED_MODULE_7__["ImportableObjectType"].Symbol:
          provider = MSForeignSymbolProvider.alloc().initWithDocument(Object(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_6__["wrapObject"])(document).sketchObject);
          break;

        case _ImportableObject__WEBPACK_IMPORTED_MODULE_7__["ImportableObjectType"].LayerStyle:
          provider = MSSharedLayerStyleProvider.alloc().initWithDocument(Object(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_6__["wrapObject"])(document).sketchObject);
          break;

        case _ImportableObject__WEBPACK_IMPORTED_MODULE_7__["ImportableObjectType"].TextStyle:
          provider = MSSharedTextStyleProvider.alloc().initWithDocument(Object(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_6__["wrapObject"])(document).sketchObject);
          break;

        default:
          throw new Error('Unknown object type');
      }

      var collector = MSForeignObjectCollector.alloc().initWithProvider(provider);
      var shareableObjectRefsMap = collector.buildCollectionWithFilter(null);
      var currentId = this.id;
      var currentName = this.name;
      var shareableObjectRefsForCurrentLib = Object(util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(shareableObjectRefsMap).find(function (o) {
        return o.library && String(o.library.libraryID()) === currentId && String(o.library.name()) === currentName;
      });

      if (!shareableObjectRefsForCurrentLib) {
        return [];
      }

      var documentData = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getDocumentData"])(document);
      return Object(util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(shareableObjectRefsForCurrentLib.objectRefs).map(function (ref) {
        var obj = _ImportableObject__WEBPACK_IMPORTED_MODULE_7__["ImportableObject"].fromNative(ref);
        obj._documentData = documentData;
        return obj;
      });
    }
  }, {
    key: "getImportableSymbolReferencesForDocument",
    value: function getImportableSymbolReferencesForDocument(document) {
      return this.getImportableReferencesForDocument(document, _ImportableObject__WEBPACK_IMPORTED_MODULE_7__["ImportableObjectType"].Symbol);
    }
  }, {
    key: "getImportableLayerStyleReferencesForDocument",
    value: function getImportableLayerStyleReferencesForDocument(document) {
      return this.getImportableReferencesForDocument(document, _ImportableObject__WEBPACK_IMPORTED_MODULE_7__["ImportableObjectType"].LayerStyle);
    }
  }, {
    key: "getImportableTextStyleReferencesForDocument",
    value: function getImportableTextStyleReferencesForDocument(document) {
      return this.getImportableReferencesForDocument(document, _ImportableObject__WEBPACK_IMPORTED_MODULE_7__["ImportableObjectType"].TextStyle);
    }
  }, {
    key: "remove",
    value: function remove() {
      var libraryController = AppController.sharedInstance().librariesController();
      libraryController.removeAssetLibrary(this._object);
    }
  }], [{
    key: "getLibraries",
    value: function getLibraries() {
      return _getLibraries();
    }
  }, {
    key: "getLibraryForDocumentAtPath",
    value: function getLibraryForDocumentAtPath(path) {
      var libUrl = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getURLFromPath"])(path);
      var libraryController = AppController.sharedInstance().librariesController(); // check if we already imported the library

      var existingLibraries = libraryController.libraries();

      for (var i = 0; i < existingLibraries.count(); i += 1) {
        var existingLibrary = existingLibraries.objectAtIndex(i);
        var location = existingLibrary.locationOnDisk();

        if (location && location.isEqual(libUrl)) {
          return Library.fromNative(existingLibrary);
        }
      } // otherwise, let's add it


      var status = libraryController.addAssetLibraryAtURL(libUrl);

      if (status !== 0) {
        throw new Error("Error while adding the library: ".concat(AddStatus[status], "."));
      }

      var lib = libraryController.userLibraries().firstObject();

      if (!lib) {
        throw new Error('could not find the added library');
      } // refresh the UI


      libraryController.notifyLibraryChange(lib);
      return Library.fromNative(lib);
    }
  }, {
    key: "getRemoteLibraryWithRSS",
    value: function getRemoteLibraryWithRSS(appcast, callback) {
      var libUrl = NSURL.URLWithString(appcast);
      var libraryController = AppController.sharedInstance().librariesController(); // check if we already imported the library

      var existingLibrary = libraryController.remoteLibraryWithAppcast(libUrl);

      if (existingLibrary) {
        callback(null, Library.fromNative(existingLibrary));
        return;
      }

      var fiber = coscript.createFiber(); // otherwise, let's add it

      libraryController.addRemoteLibraryFromAppcastURL_context_callback(libUrl, coscript, function (lib, err) {
        try {
          if (err && !err.isEqual(NSNull.null())) {
            callback(new Error(err.description()));
          } else {
            callback(null, Library.fromNative(lib));
          }

          fiber.cleanup();
        } catch (error) {
          fiber.cleanup();
          throw error;
        }
      });
    }
  }]);

  return Library;
}(_WrappedObject__WEBPACK_IMPORTED_MODULE_1__["WrappedObject"]);
Library.type = _enums__WEBPACK_IMPORTED_MODULE_4__["Types"].Library;
Library[_WrappedObject__WEBPACK_IMPORTED_MODULE_1__["DefinedPropertiesKey"]] = _objectSpread({}, _WrappedObject__WEBPACK_IMPORTED_MODULE_1__["WrappedObject"][_WrappedObject__WEBPACK_IMPORTED_MODULE_1__["DefinedPropertiesKey"]]); // need to check if we have MSAssetLibrary because it won't be available on jenkins

if (typeof MSAssetLibrary !== 'undefined') {
  _Factory__WEBPACK_IMPORTED_MODULE_5__["Factory"].registerClass(Library, MSAssetLibrary);
  _Factory__WEBPACK_IMPORTED_MODULE_5__["Factory"].registerClass(Library, MSUserAssetLibrary);
  _Factory__WEBPACK_IMPORTED_MODULE_5__["Factory"].registerClass(Library, MSRemoteAssetLibrary);
}

Library.ImportableObjectType = _ImportableObject__WEBPACK_IMPORTED_MODULE_7__["ImportableObjectType"];
Library.define('id', {
  exportable: true,
  importable: false,
  get: function get() {
    var id = this._object.libraryID();

    if (!id) {
      return undefined;
    }

    return String(id);
  }
});
Library.define('name', {
  exportable: true,
  importable: false,
  get: function get() {
    return String(this._object.name());
  }
});
Library.define('valid', {
  exportable: true,
  importable: false,
  get: function get() {
    return !!this._object.valid();
  }
});
Library.define('enabled', {
  get: function get() {
    return !!this._object.enabled();
  },
  set: function set(enabled) {
    this._object.setEnabled(enabled);
  }
});
Library.define('lastModifiedAt', {
  exportable: true,
  importable: false,
  get: function get() {
    var date = this._object.dateLastModified();

    if (!date) {
      return undefined;
    }

    return new Date(date.timeIntervalSince1970() * 1000);
  }
});
Library.LibraryType = LibraryType;
Library.define('libraryType', {
  exportable: true,
  importable: false,
  get: function get() {
    var type = this._object.libraryType();

    return LibraryTypeMap[type] || type;
  }
});

/***/ }),

/***/ "./Source/dom/models/Override.js":
/*!***************************************!*\
  !*** ./Source/dom/models/Override.js ***!
  \***************************************/
/*! exports provided: Override */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Override", function() { return Override; });
/* harmony import */ var _WrappedObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../WrappedObject */ "./Source/dom/WrappedObject.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums */ "./Source/dom/enums.js");
/* harmony import */ var _Factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Factory */ "./Source/dom/Factory.js");
/* harmony import */ var _ImageData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ImageData */ "./Source/dom/models/ImageData.js");
/* harmony import */ var _wrapNativeObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../wrapNativeObject */ "./Source/dom/wrapNativeObject.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






/**
 * An MSAvailableOverride. This is not exposed, only used by SymbolInstance
 */

var Override =
/*#__PURE__*/
function (_WrappedObject) {
  _inherits(Override, _WrappedObject);

  function Override() {
    _classCallCheck(this, Override);

    return _possibleConstructorReturn(this, _getPrototypeOf(Override).apply(this, arguments));
  }

  return Override;
}(_WrappedObject__WEBPACK_IMPORTED_MODULE_0__["WrappedObject"]);
Override.type = _enums__WEBPACK_IMPORTED_MODULE_1__["Types"].Override;
Override[_WrappedObject__WEBPACK_IMPORTED_MODULE_0__["DefinedPropertiesKey"]] = _objectSpread({}, _WrappedObject__WEBPACK_IMPORTED_MODULE_0__["WrappedObject"][_WrappedObject__WEBPACK_IMPORTED_MODULE_0__["DefinedPropertiesKey"]]);
_Factory__WEBPACK_IMPORTED_MODULE_2__["Factory"].registerClass(Override, MSAvailableOverride);
Override.define('path', {
  get: function get() {
    return String(this._object.overridePoint().path());
  }
});
Override.define('property', {
  get: function get() {
    return String(this._object.overridePoint().property());
  }
});
Override.define('affectedLayer', {
  get: function get() {
    return Object(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_4__["wrapNativeObject"])(this._object.affectedLayer());
  }
});
Override.define('id', {
  exportable: true,
  importable: false,
  get: function get() {
    return String(this._object.overridePoint().name());
  }
});
Override.define('symbolOverride', {
  get: function get() {
    return Boolean(this._object.overridePoint().isSymbolOverride());
  }
});
Override.define('value', {
  get: function get() {
    var value = this._object.currentValue();

    if (this.property === 'image') {
      return _ImageData__WEBPACK_IMPORTED_MODULE_3__["ImageData"].fromNative(value);
    }

    return String(this._object.currentValue());
  },
  set: function set(value) {
    // __symbolInstance is set when building the Override
    if (!this.__symbolInstance) {
      throw new Error('Can only set `value` for a symbol instance');
    }

    this.__symbolInstance.setOverrideValue(this, value);
  }
});
Override.define('isDefault', {
  get: function get() {
    return !this._object.hasOverride();
  }
});
Override.define('editable', {
  get: function get() {
    if (typeof this.__editable !== 'undefined') {
      return this.__editable;
    }

    return Boolean(Number(this._object.isEditable()));
  },
  set: function set(editable) {
    // __symbolInstance is set when building the Override
    if (!this.__symbolMaster) {
      throw new Error('Can only set `editable` for a symbol master');
    }

    this.__editable = editable;

    this.__symbolMaster.sketchObject.setOverridePoint_editable(this._object.overridePoint(), editable);
  }
});

/***/ }),

/***/ "./Source/dom/models/Point.js":
/*!************************************!*\
  !*** ./Source/dom/models/Point.js ***!
  \************************************/
/*! exports provided: Point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return Point; });
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! util */ "./core-modules/node_modules/@skpm/util/index.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./Source/dom/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Point =
/*#__PURE__*/
function () {
  function Point(x, y) {
    _classCallCheck(this, Point);

    Object(_utils__WEBPACK_IMPORTED_MODULE_1__["initProxyProperties"])(this);
    var isObject = x && Object(util__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(x.x);
    Object(_utils__WEBPACK_IMPORTED_MODULE_1__["proxyProperty"])(this, 'x', isObject ? parseFloat(x.x) : parseFloat(x));
    Object(_utils__WEBPACK_IMPORTED_MODULE_1__["proxyProperty"])(this, 'y', isObject ? parseFloat(x.y) : parseFloat(y));
  }

  _createClass(Point, [{
    key: "asCGPoint",
    value: function asCGPoint() {
      return CGPointMake(this._x, this._y);
    }
  }, {
    key: "asNSPoint",
    value: function asNSPoint() {
      return NSMakePoint(this._x, this._y);
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        x: this._x,
        y: this._y
      };
    }
  }]);

  return Point;
}();

/***/ }),

/***/ "./Source/dom/models/Rectangle.js":
/*!****************************************!*\
  !*** ./Source/dom/models/Rectangle.js ***!
  \****************************************/
/*! exports provided: Rectangle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rectangle", function() { return Rectangle; });
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! util */ "./core-modules/node_modules/@skpm/util/index.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wrapNativeObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../wrapNativeObject */ "./Source/dom/wrapNativeObject.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./Source/dom/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




/**
 * Represents a rectangle.
 */

var Rectangle =
/*#__PURE__*/
function () {
  /**
   * Return a new Rectangle object for a given x,y, width and height.
   *
   * @param {number | Rectangle} x The x coordinate of the top-left corner of the rectangle. Or a Rectangle.
   * @param {number} y The y coordinate of the top-left corner of the rectangle.
   * @param {number} width The width of the rectangle.
   * @param {number} height The height of the rectangle.
   * @return The new Rectangle object.
   */
  function Rectangle(x, y, width, height) {
    _classCallCheck(this, Rectangle);

    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["initProxyProperties"])(this);

    if (x && x.origin && Object(util__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(x.origin.x)) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["proxyProperty"])(this, 'x', parseFloat(x.origin.x));
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["proxyProperty"])(this, 'y', parseFloat(x.origin.y));
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["proxyProperty"])(this, 'width', parseFloat(x.size.width));
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["proxyProperty"])(this, 'height', parseFloat(x.size.height));
    } else if (x && Object(util__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(x.x)) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["proxyProperty"])(this, 'x', parseFloat(x.x));
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["proxyProperty"])(this, 'y', parseFloat(x.y));
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["proxyProperty"])(this, 'width', parseFloat(x.width));
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["proxyProperty"])(this, 'height', parseFloat(x.height));
    } else {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["proxyProperty"])(this, 'x', parseFloat(x));
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["proxyProperty"])(this, 'y', parseFloat(y));
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["proxyProperty"])(this, 'width', parseFloat(width));
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["proxyProperty"])(this, 'height', parseFloat(height));
    }
  }
  /**
   * Adjust this rectangle by offsetting it.
   *
   * @param {number} x The x offset to apply.
   * @param {number} y The y offset to apply.
   */


  _createClass(Rectangle, [{
    key: "offset",
    value: function offset(x, y) {
      this._x += parseFloat(x);
      this._y += parseFloat(y);

      if (this._parent && this._parentKey) {
        this._parent[this._parentKey] = this;
      }

      return this;
    }
  }, {
    key: "scale",
    value: function scale(factorWidth, factorHeight) {
      this._width *= parseFloat(factorWidth);
      this._height *= parseFloat(typeof factorHeight === 'undefined' ? factorWidth : factorHeight);

      if (this._parent && this._parentKey) {
        this._parent[this._parentKey] = this;
      }

      return this;
    }
    /**
     * Return the Rectangle as a CGRect.
     *
     * @return {CGRect} The rectangle.
     */

  }, {
    key: "asCGRect",
    value: function asCGRect() {
      return CGRectMake(this._x, this._y, this._width, this._height);
    }
  }, {
    key: "asNSRect",
    value: function asNSRect() {
      return NSMakeRect(this._x, this._y, this._width, this._height);
    }
    /**
     * Return a string description of the rectangle.
     *
     * @return {string} Description of the rectangle.
     */

  }, {
    key: "toString",
    value: function toString() {
      return "{".concat(this._x, ", ").concat(this._y, ", ").concat(this._width, ", ").concat(this._height, "}");
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        x: this._x,
        y: this._y,
        width: this._width,
        height: this._height
      };
    }
    /**
     * Convert a rectangle in the coordinates that a layer uses to another layer's coordinates.
     *
     * @param {Layer} layerA The layer in which the rectangle's coordinates are expressed.
     * @param {Layer} layerB The layer in which the rectangle's coordinates will be expressed.
     * @return {Rectangle} The converted rectangle expressed in the coordinate system of the layerB layer.
     */

  }, {
    key: "changeBasis",
    value: function changeBasis() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          from = _ref.from,
          to = _ref.to;

      var fromLayer = Object(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_1__["wrapObject"])(from);
      var toLayer = Object(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_1__["wrapObject"])(to);

      if (!fromLayer) {
        if (!toLayer || !toLayer.sketchObject || !toLayer.sketchObject.convertPoint_fromCoordinateSpace) {
          throw new Error("Expected a coordinate space, got ".concat(to));
        }

        var _origin = toLayer.sketchObject.convertPoint_fromCoordinateSpace(NSMakePoint(this.x, this.y), null);

        return new Rectangle(_origin.x, _origin.y, this.width, this.height);
      }

      if (!fromLayer.sketchObject || !fromLayer.sketchObject.convertPoint_toCoordinateSpace) {
        throw new Error("Expected a coordinate space, got ".concat(from));
      }

      var origin = fromLayer.sketchObject.convertPoint_toCoordinateSpace(NSMakePoint(this.x, this.y), toLayer ? toLayer.sketchObject : null);
      return new Rectangle(origin.x, origin.y, this.width, this.height);
    }
  }]);

  return Rectangle;
}();

/***/ }),

/***/ "./Source/dom/models/Selection.js":
/*!****************************************!*\
  !*** ./Source/dom/models/Selection.js ***!
  \****************************************/
/*! exports provided: Selection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Selection", function() { return Selection; });
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! util */ "./core-modules/node_modules/@skpm/util/index.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wrapNativeObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../wrapNativeObject */ "./Source/dom/wrapNativeObject.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



/**
 * Represents the layers that the user has selected.
 */

var Selection =
/*#__PURE__*/
function () {
  /**
   * Make a new Selection object.
   *
   * @param {Page} page The page that the selection relates to.
   */
  function Selection(page) {
    _classCallCheck(this, Selection);

    this._object = page._object;
  }

  _createClass(Selection, [{
    key: "forEach",
    value: function forEach(fn) {
      return this.layers.forEach(fn);
    }
  }, {
    key: "map",
    value: function map(fn) {
      return this.layers.map(fn);
    }
  }, {
    key: "reduce",
    value: function reduce(fn, initial) {
      return this.layers.reduce(fn, initial);
    }
    /**
     * Return the wrapped Sketch layers in the selection.
     *
     * @return {array} The selected layers.
     * */

  }, {
    key: "clear",

    /**
     * Clear the selection.
     */
    value: function clear() {
      this._object.changeSelectionBySelectingLayers(null);

      return this;
    }
  }, {
    key: "layers",
    get: function get() {
      var layers = Object(util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(this._object.selectedLayers().layers()).map(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_1__["wrapNativeObject"]);
      return layers;
    },
    set: function set(layers) {
      this._object.changeSelectionBySelectingLayers((layers.layers || layers).map(function (l) {
        return Object(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_1__["wrapObject"])(l).sketchObject;
      }));
    }
    /**
     * Return the number of selected layers.
     *
     * @return {number} The number of layers that are selected.
     */

  }, {
    key: "length",
    get: function get() {
      return this._object.selectedLayers().layers().count();
    }
    /**
     * Does the selection contain any layers?
     *
     * @return {boolean} true if the selection is empty.
     */

  }, {
    key: "isEmpty",
    get: function get() {
      return this.length === 0;
    }
  }]);

  return Selection;
}();

/***/ }),

/***/ "./Source/dom/models/SharedStyle.js":
/*!******************************************!*\
  !*** ./Source/dom/models/SharedStyle.js ***!
  \******************************************/
/*! exports provided: SharedStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedStyle", function() { return SharedStyle; });
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! util */ "./core-modules/node_modules/@skpm/util/index.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _WrappedObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../WrappedObject */ "./Source/dom/WrappedObject.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums */ "./Source/dom/enums.js");
/* harmony import */ var _Factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Factory */ "./Source/dom/Factory.js");
/* harmony import */ var _wrapNativeObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../wrapNativeObject */ "./Source/dom/wrapNativeObject.js");
/* harmony import */ var _style_Style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../style/Style */ "./Source/dom/style/Style.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







/**
 * A Sketch shared style, either Text style or Layer Style.
 */

var SharedStyle =
/*#__PURE__*/
function (_WrappedObject) {
  _inherits(SharedStyle, _WrappedObject);

  /**
   * Make a new symbol master.
   */
  function SharedStyle() {
    var master = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, SharedStyle);

    if (!master.sketchObject) {
      throw new Error("Cannot create a SharedStyle directly, use `document.sharedLayerStyles.push({ name, style })` (or `document.sharedTextStyles`) instead.");
    }

    return _possibleConstructorReturn(this, _getPrototypeOf(SharedStyle).call(this, master));
  }

  _createClass(SharedStyle, [{
    key: "getAllInstances",
    value: function getAllInstances() {
      return Object(util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(this._object.allInstances()).map(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_4__["wrapObject"]);
    }
  }, {
    key: "getAllInstancesLayers",
    value: function getAllInstancesLayers() {
      return Object(util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(this._object.allLayersInstances()).map(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_4__["wrapObject"]);
    }
  }, {
    key: "getLibrary",
    value: function getLibrary() {
      var libraryController = AppController.sharedInstance().librariesController();
      var lib = libraryController.libraryForShareableObject(this._object);

      if (!lib) {
        var foreignObject = this._object.foreignObject();

        if (foreignObject) {
          return {
            type: _enums__WEBPACK_IMPORTED_MODULE_2__["Types"].Library,
            id: String(foreignObject.libraryID()),
            name: String(foreignObject.sourceLibraryName()),
            enabled: false,
            valid: false
          };
        }

        return null;
      }

      return Object(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_4__["wrapObject"])(lib);
    }
  }, {
    key: "syncWithLibrary",
    value: function syncWithLibrary() {
      var libraryController = AppController.sharedInstance().librariesController();
      var lib = libraryController.libraryForShareableObject(this._object);

      if (!lib) {
        return false;
      }

      var foreignObject = this._object.foreignObject();

      if (!foreignObject) {
        return false;
      }

      libraryController.syncForeignObject_withMaster_fromLibrary(foreignObject, null, lib);
      return true;
    }
  }, {
    key: "unlinkFromLibrary",
    value: function unlinkFromLibrary() {
      var libraryController = AppController.sharedInstance().librariesController();
      var lib = libraryController.libraryForShareableObject(this._object);

      if (!lib) {
        return false;
      }

      var foreignObject = this._object.foreignObject();

      if (!foreignObject) {
        return false;
      }

      foreignObject.unlinkFromRemote();
      return true;
    }
  }], [{
    key: "fromStyle",
    value: function fromStyle() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          name = _ref.name,
          style = _ref.style,
          document = _ref.document;

      console.warn("`SharedStyle.fromStyle({ name, style, document })` is deprecated. Use `document.sharedLayerStyles.push({ name, style })` (or `document.sharedTextStyles`) instead.");

      var documentData = Object(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_4__["wrapObject"])(document)._getMSDocumentData();

      var wrappedStyle = Object(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_4__["wrapObject"])(style, _enums__WEBPACK_IMPORTED_MODULE_2__["Types"].Style);
      var sharedStyle = SharedStyle.fromNative(MSSharedStyle.alloc().initWithName_style(name, wrappedStyle.sketchObject));
      var container = documentData.sharedObjectContainerOfType(wrappedStyle.sketchObject.type());
      container.addSharedObject(sharedStyle._object);
      return sharedStyle;
    }
  }]);

  return SharedStyle;
}(_WrappedObject__WEBPACK_IMPORTED_MODULE_1__["WrappedObject"]);
SharedStyle.type = _enums__WEBPACK_IMPORTED_MODULE_2__["Types"].SharedStyle;
SharedStyle[_WrappedObject__WEBPACK_IMPORTED_MODULE_1__["DefinedPropertiesKey"]] = _objectSpread({}, _WrappedObject__WEBPACK_IMPORTED_MODULE_1__["WrappedObject"][_WrappedObject__WEBPACK_IMPORTED_MODULE_1__["DefinedPropertiesKey"]]);
_Factory__WEBPACK_IMPORTED_MODULE_3__["Factory"].registerClass(SharedStyle, MSSharedStyle);
SharedStyle.StyleType = _style_Style__WEBPACK_IMPORTED_MODULE_5__["StyleType"];
SharedStyle.define('styleType', {
  get: function get() {
    return _style_Style__WEBPACK_IMPORTED_MODULE_5__["StyleTypeMap"][this._object.type()] || this._object.type();
  }
});
SharedStyle.define('name', {
  get: function get() {
    return String(this._object.name());
  },
  set: function set(name) {
    this._object.name = name;
  }
});
SharedStyle.define('style', {
  get: function get() {
    return Object(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_4__["wrapObject"])(this._object.style());
  },
  set: function set(newStyle) {
    if (this._object.isForeign()) {
      throw new Error('Can not set the style of a shared style coming from a library');
    }

    this._object.updateToMatch(Object(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_4__["wrapObject"])(newStyle).sketchObject);
  }
});

/***/ }),

/***/ "./Source/dom/models/__tests__/CurvePoint.test.js":
/*!********************************************************!*\
  !*** ./Source/dom/models/__tests__/CurvePoint.test.js ***!
  \********************************************************/
/*! exports provided: tests, logs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(expect) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tests", function() { return __skpm_tests__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logs", function() { return __skpm_logs__; });
/* harmony import */ var _CurvePoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CurvePoint */ "./Source/dom/models/CurvePoint.js");
/* globals expect, test */

var __skpm_logs__ = [];
var __skpm_console_log__ = console.log;

var __hookedLogs = function __hookedLogs(string) {
  __skpm_logs__.push(string);

  return __skpm_console_log__(string);
};

var __skpm_tests__ = {};

var test = function test(description, fn) {
  function withLogs(context, document) {
    console.log = __hookedLogs;
    return fn(context, document);
  }

  __skpm_tests__[description] = withLogs;
};

test.only = function (description, fn) {
  fn.only = true;
  return test(description, fn);
};

test.skip = function (description, fn) {
  fn.skipped = true;
  return test(description, fn);
};


test('should be able to log an CurvePoint', function () {
  var curvePoint = new _CurvePoint__WEBPACK_IMPORTED_MODULE_0__["CurvePoint"]();
  log(curvePoint);
});
test('should be able to modify a CurvePoint', function () {
  var curvePoint = new _CurvePoint__WEBPACK_IMPORTED_MODULE_0__["CurvePoint"]();
  expect(curvePoint.toJSON()).toEqual({
    type: 'CurvePoint',
    pointType: 'Undefined',
    cornerRadius: 0,
    curveFrom: {
      x: 0,
      y: 0
    },
    curveTo: {
      x: 0,
      y: 0
    },
    point: {
      x: 0,
      y: 0
    }
  });
  curvePoint.cornerRadius = 3;
  expect(curvePoint.cornerRadius).toBe(3);
  curvePoint.curveFrom = {
    x: 25,
    y: 3
  };
  expect(curvePoint.curveFrom.toJSON()).toEqual({
    x: 25,
    y: 3
  });
  curvePoint.curveTo = {
    x: 24,
    y: 4
  };
  expect(curvePoint.curveTo.toJSON()).toEqual({
    x: 24,
    y: 4
  });
  curvePoint.point = {
    x: 3,
    y: 4
  };
  expect(curvePoint.point.toJSON()).toEqual({
    x: 3,
    y: 4
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@skpm/test-runner/expect/index.js */ "./node_modules/@skpm/test-runner/expect/index.js")))

/***/ }),

/***/ "./Source/dom/models/__tests__/Document.test.js":
/*!******************************************************!*\
  !*** ./Source/dom/models/__tests__/Document.test.js ***!
  \******************************************************/
/*! exports provided: tests, logs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(expect, Promise) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tests", function() { return __skpm_tests__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logs", function() { return __skpm_logs__; });
/* harmony import */ var _test_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../test-utils */ "./Source/test-utils.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.. */ "./Source/dom/index.js");
/* globals expect, test */


var __skpm_logs__ = [];
var __skpm_console_log__ = console.log;

var __hookedLogs = function __hookedLogs(string) {
  __skpm_logs__.push(string);

  return __skpm_console_log__(string);
};

var __skpm_tests__ = {};

var test = function test(description, fn) {
  function withLogs(context, document) {
    console.log = __hookedLogs;
    return fn(context, document);
  }

  __skpm_tests__[description] = withLogs;
};

test.only = function (description, fn) {
  fn.only = true;
  return test(description, fn);
};

test.skip = function (description, fn) {
  fn.skipped = true;
  return test(description, fn);
};


test('should be able to log a document', function (context, document) {
  log(document);
  expect(true).toBe(true);
});
test('should return the pages', function (context, document) {
  var pages = document.pages;
  expect(pages.length).toBe(1);
  expect(pages[0]).toEqual(document.selectedPage);
});
test('should return the selected layers', function (context, document) {
  var selection = document.selectedLayers;
  expect(selection.isEmpty).toBe(true);
  var page = document.selectedPage;
  var group = new ___WEBPACK_IMPORTED_MODULE_1__["Group"]({
    name: 'Test',
    parent: page,
    selected: true
  });
  expect(group.selected).not.toBe(false);
  expect(selection.isEmpty).toBe(false);
  document.selectedLayers = []; // eslint-disable-line

  expect(selection.isEmpty).toBe(true);
});
test('should look for a layer by its id', function (context, document) {
  var page = document.selectedPage;
  var group = new ___WEBPACK_IMPORTED_MODULE_1__["Group"]({
    name: 'Test',
    parent: page
  });
  var id = group.id;
  var found = document.getLayerWithID(id);
  expect(found).toEqual(group);
});
test('should look for a layer by its name', function (context, document) {
  var page = document.selectedPage;
  var group = new ___WEBPACK_IMPORTED_MODULE_1__["Group"]({
    name: 'Test',
    parent: page
  });
  var found = document.getLayersNamed('Test');
  expect(found).toEqual([group]);
});
test('should look for a symbol by its symbolId', function (context, document) {
  var _createSymbolMaster = Object(_test_utils__WEBPACK_IMPORTED_MODULE_0__["createSymbolMaster"])(document),
      master = _createSymbolMaster.master;

  expect(document.getSymbolMasterWithID(master.symbolId)).toEqual(master);
});
test('should list all the symbols', function (context, document) {
  var _createSymbolMaster2 = Object(_test_utils__WEBPACK_IMPORTED_MODULE_0__["createSymbolMaster"])(document),
      master = _createSymbolMaster2.master;

  expect(document.getSymbols()).toEqual([master]);
});
test('should look for a shared layer style by its id', function (context, document) {
  var _createSharedStyle = Object(_test_utils__WEBPACK_IMPORTED_MODULE_0__["createSharedStyle"])(document, ___WEBPACK_IMPORTED_MODULE_1__["Shape"]),
      sharedStyle = _createSharedStyle.sharedStyle;

  expect(document.getSharedLayerStyleWithID(sharedStyle.id)).toEqual(sharedStyle);
});
test('should list all the shared layer styles', function (context, document) {
  var _createSharedStyle2 = Object(_test_utils__WEBPACK_IMPORTED_MODULE_0__["createSharedStyle"])(document, ___WEBPACK_IMPORTED_MODULE_1__["Shape"]),
      sharedStyle = _createSharedStyle2.sharedStyle;

  expect(document.sharedLayerStyles.length).toBe(1);
  expect(document.sharedLayerStyles[0]).toEqual(sharedStyle);
  document.sharedLayerStyles.push({
    name: 'test2',
    style: {
      fills: ['#000']
    }
  });
  expect(document.sharedLayerStyles.length).toBe(2);
  document.sharedLayerStyles.pop();
  expect(document.sharedLayerStyles.length).toBe(1);
});
test('should look for a shared text style by its id', function (context, document) {
  var _createSharedStyle3 = Object(_test_utils__WEBPACK_IMPORTED_MODULE_0__["createSharedStyle"])(document, ___WEBPACK_IMPORTED_MODULE_1__["Text"]),
      sharedStyle = _createSharedStyle3.sharedStyle;

  expect(document.getSharedTextStyleWithID(sharedStyle.id)).toEqual(sharedStyle);
});
test('should list all the shared text styles', function (context, document) {
  var _createSharedStyle4 = Object(_test_utils__WEBPACK_IMPORTED_MODULE_0__["createSharedStyle"])(document, ___WEBPACK_IMPORTED_MODULE_1__["Text"]),
      sharedStyle = _createSharedStyle4.sharedStyle;

  expect(document.sharedTextStyles.length).toBe(1);
  expect(document.sharedTextStyles[0]).toEqual(sharedStyle);
});
test('should reset document colors', function (context, document) {
  var doc = document;
  doc.colors = ['#FFFFFF', '#AAAAAA'];
  expect(document.colors[0].color).toEqual('#ffffffff');
  expect(document.colors[1].color).toEqual('#aaaaaaff');
});
test('should append document colors', function (context, document) {
  var doc = document;
  doc.colors = ['000000'];
  doc.colors.push('#FFFFFF');
  expect(document.colors.length).toEqual(2);
  expect(document.colors[1].color).toEqual('#ffffffff');
});
test('should remove document color', function (context, document) {
  var doc = document;
  doc.colors = ['#FFFFFF', '#000000'];
  expect(document.colors.length).toEqual(2);
  doc.colors.splice(1, 1);
  expect(document.colors.length).toEqual(1);
  expect(document.colors[0].color).toEqual('#ffffffff');
});
test('should reset document gradients', function (context, document) {
  var doc = document;
  doc.gradients = [{
    gradient: {},
    name: 'Gradient 1'
  }, {
    gradient: {},
    name: 'Gradient 2'
  }];
  expect(document.gradients[0].name).toEqual('Gradient 1');
  expect(document.gradients[1].name).toEqual('Gradient 2');
});
test('should append document gradients', function (context, document) {
  var doc = document;
  doc.gradients = [{
    gradient: {},
    name: 'Gradient 1'
  }];
  doc.gradients.push({
    gradient: {},
    name: 'Gradient 2'
  });
  expect(document.gradients.length).toEqual(2);
  expect(document.gradients[0].name).toEqual('Gradient 1');
  expect(document.gradients[1].name).toEqual('Gradient 2');
});
test('should remove document gradients', function (context, document) {
  var doc = document;
  doc.gradients = [{
    gradient: {},
    name: 'Gradient 1'
  }, {
    gradient: {},
    name: 'Gradient 2'
  }];
  expect(document.gradients.length).toEqual(2);
  doc.gradients.splice(0, 1);
  expect(document.gradients.length).toEqual(1);
  expect(document.gradients[0].name).toEqual('Gradient 2');
}); // some tests cannot really run on jenkins because it doesn't have access to MSDocument

if (!Object(_test_utils__WEBPACK_IMPORTED_MODULE_0__["isRunningOnJenkins"])()) {
  var _document;

  var documentId;
  test('should create a new document', function () {
    _document = new ___WEBPACK_IMPORTED_MODULE_1__["Document"]();
    documentId = _document.id;
    var documents = ___WEBPACK_IMPORTED_MODULE_1__["Document"].getDocuments();
    expect(_document.type).toBe('Document');
    expect(documents.find(function (d) {
      return d.id === documentId;
    })).toEqual(_document);
  });
  test('path should be undefined before saving it', function () {
    expect(_document.path).toBe(undefined);
  });
  test('should save a file', function () {
    return new Promise(function (resolve, reject) {
      _document.save('~/Desktop/sketch-api-unit-tests.sketch', function (err, result) {
        if (err) {
          return reject(err);
        }

        return resolve(result);
      });
    }).then(function (result) {
      expect(result).toBe(_document);
      expect(_document.path).toBe(String(NSString.stringWithString('~/Desktop/sketch-api-unit-tests.sketch').stringByExpandingTildeInPath()));
    });
  });
  test('should save a file without specifying the path', function () {
    return new Promise(function (resolve, reject) {
      _document.save(function (err, result) {
        if (err) {
          return reject(err);
        }

        return resolve(result);
      });
    }).then(function (result) {
      expect(result).toBe(_document);
      expect(_document.path).toBe(String(NSString.stringWithString('~/Desktop/sketch-api-unit-tests.sketch').stringByExpandingTildeInPath()));
    });
  });
  test('should save a file to a specific path when setting the path', function () {
    _document.path = '~/Desktop/sketch-api-unit-tests-2.sketch';
    return new Promise(function (resolve, reject) {
      _document.save(function (err, result) {
        if (err) {
          return reject(err);
        }

        return resolve(result);
      });
    }).then(function (result) {
      expect(result).toBe(_document);
      expect(_document.path).toBe(String(NSString.stringWithString('~/Desktop/sketch-api-unit-tests-2.sketch').stringByExpandingTildeInPath()));
    });
  });
  test('should close a file', function () {
    _document.close();

    var documents = ___WEBPACK_IMPORTED_MODULE_1__["Document"].getDocuments();
    expect(documents.find(function (d) {
      return d.id === documentId;
    })).toBe(undefined);
  });
  test('should open a file', function () {
    var document = ___WEBPACK_IMPORTED_MODULE_1__["Document"].open('~/Desktop/sketch-api-unit-tests.sketch');
    var documents = ___WEBPACK_IMPORTED_MODULE_1__["Document"].getDocuments();
    expect(documents.find(function (d) {
      return d.id === document.id;
    })).toEqual(document); // close it again because when watching the tests, it will open dozens of documents

    document.close();
  });
  test('should fail to open a non-existing file', function () {
    try {
      ___WEBPACK_IMPORTED_MODULE_1__["Document"].open('~/Desktop/non-existing-sketch-api-unit-tests.sketch');
      expect(true).toBe(false);
    } catch (err) {
      expect(err.message).toMatch('couldn’t be opened because there is no such file');
    }
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@skpm/test-runner/expect/index.js */ "./node_modules/@skpm/test-runner/expect/index.js"), __webpack_require__(/*! ./node_modules/promise-polyfill/lib/index.js */ "./node_modules/promise-polyfill/lib/index.js")))

/***/ }),

/***/ "./Source/dom/models/__tests__/ExportFormat.test.js":
/*!**********************************************************!*\
  !*** ./Source/dom/models/__tests__/ExportFormat.test.js ***!
  \**********************************************************/
/*! exports provided: tests, logs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(expect) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tests", function() { return __skpm_tests__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logs", function() { return __skpm_logs__; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.. */ "./Source/dom/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* globals expect, test */

var __skpm_logs__ = [];
var __skpm_console_log__ = console.log;

var __hookedLogs = function __hookedLogs(string) {
  __skpm_logs__.push(string);

  return __skpm_console_log__(string);
};

var __skpm_tests__ = {};

var test = function test(description, fn) {
  function withLogs(context, document) {
    console.log = __hookedLogs;
    return fn(context, document);
  }

  __skpm_tests__[description] = withLogs;
};

test.only = function (description, fn) {
  fn.only = true;
  return test(description, fn);
};

test.skip = function (description, fn) {
  fn.skipped = true;
  return test(description, fn);
};


test('should be able to log an ExportFormat', function () {
  var artboard = new ___WEBPACK_IMPORTED_MODULE_0__["Slice"]({
    exportFormats: [{
      size: '2x',
      suffix: '@2x'
    }]
  });
  log(artboard.exportFormats);
  expect(artboard.exportFormats.map(function (e) {
    return e.toJSON();
  })).toEqual([{
    type: 'ExportFormat',
    fileFormat: 'png',
    suffix: '@2x',
    size: '2x'
  }]);
});
test('should be able to modify an ExportFormat', function () {
  var artboard = new ___WEBPACK_IMPORTED_MODULE_0__["Slice"]({
    exportFormats: [{
      size: '2x',
      suffix: '@2x'
    }]
  });

  var _artboard$exportForma = _slicedToArray(artboard.exportFormats, 1),
      exportFormat = _artboard$exportForma[0];

  expect(exportFormat.toJSON()).toEqual({
    type: 'ExportFormat',
    fileFormat: 'png',
    suffix: '@2x',
    size: '2x'
  });
  exportFormat.size = '25x';
  expect(exportFormat.toJSON()).toEqual({
    type: 'ExportFormat',
    fileFormat: 'png',
    suffix: '@2x',
    size: '25x'
  });
  exportFormat.size = '500w';
  expect(exportFormat.toJSON()).toEqual({
    type: 'ExportFormat',
    fileFormat: 'png',
    suffix: '@2x',
    size: '500w'
  });
  exportFormat.size = '400width';
  expect(exportFormat.toJSON()).toEqual({
    type: 'ExportFormat',
    fileFormat: 'png',
    suffix: '@2x',
    size: '400w'
  });
  exportFormat.size = '300px';
  expect(exportFormat.toJSON()).toEqual({
    type: 'ExportFormat',
    fileFormat: 'png',
    suffix: '@2x',
    size: '300w'
  });
  exportFormat.size = '500h';
  expect(exportFormat.toJSON()).toEqual({
    type: 'ExportFormat',
    fileFormat: 'png',
    suffix: '@2x',
    size: '500h'
  });
  exportFormat.size = '400height';
  expect(exportFormat.toJSON()).toEqual({
    type: 'ExportFormat',
    fileFormat: 'png',
    suffix: '@2x',
    size: '400h'
  });
  exportFormat.size = '300px';
  expect(exportFormat.toJSON()).toEqual({
    type: 'ExportFormat',
    fileFormat: 'png',
    suffix: '@2x',
    size: '300h'
  });
  exportFormat.fileFormat = 'jpg';
  expect(exportFormat.toJSON()).toEqual({
    type: 'ExportFormat',
    fileFormat: 'jpg',
    suffix: '@2x',
    size: '300h'
  });
  exportFormat.suffix = '@3x';
  expect(exportFormat.toJSON()).toEqual({
    type: 'ExportFormat',
    fileFormat: 'jpg',
    suffix: '@3x',
    size: '300h'
  });
  exportFormat.prefix = '@4x';
  expect(exportFormat.toJSON()).toEqual({
    type: 'ExportFormat',
    fileFormat: 'jpg',
    prefix: '@4x',
    size: '300h'
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@skpm/test-runner/expect/index.js */ "./node_modules/@skpm/test-runner/expect/index.js")))

/***/ }),

/***/ "./Source/dom/models/__tests__/Flow.test.js":
/*!**************************************************!*\
  !*** ./Source/dom/models/__tests__/Flow.test.js ***!
  \**************************************************/
/*! exports provided: tests, logs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(expect) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tests", function() { return __skpm_tests__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logs", function() { return __skpm_logs__; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.. */ "./Source/dom/index.js");
/* globals expect, test */

var __skpm_logs__ = [];
var __skpm_console_log__ = console.log;

var __hookedLogs = function __hookedLogs(string) {
  __skpm_logs__.push(string);

  return __skpm_console_log__(string);
};

var __skpm_tests__ = {};

var test = function test(description, fn) {
  function withLogs(context, document) {
    console.log = __hookedLogs;
    return fn(context, document);
  }

  __skpm_tests__[description] = withLogs;
};

test.only = function (description, fn) {
  fn.only = true;
  return test(description, fn);
};

test.skip = function (description, fn) {
  fn.skipped = true;
  return test(description, fn);
};


test('should create a flow between a layer and an artboard with a default animation', function (context, document) {
  var artboard = new ___WEBPACK_IMPORTED_MODULE_0__["Artboard"]({
    name: 'Test1',
    parent: document.selectedPage
  });
  var artboard2 = new ___WEBPACK_IMPORTED_MODULE_0__["Artboard"]({
    name: 'Test2',
    parent: document.selectedPage
  });
  var rect = new ___WEBPACK_IMPORTED_MODULE_0__["Group"]({
    parent: artboard,
    flow: {
      target: artboard2
    }
  }); // check that an flow can be logged

  log(rect.flow);
  expect(rect.flow.toJSON()).toEqual({
    targetId: artboard2.id,
    type: 'Flow',
    animationType: 'slideFromRight'
  });
  expect(rect.flow.isBackAction()).toBe(false);
  expect(rect.flow.isValidConnection()).toBe(true);
});
test('should create a flow between a layer and an artboard with a targetId', function (context, document) {
  var artboard = new ___WEBPACK_IMPORTED_MODULE_0__["Artboard"]({
    name: 'Test1',
    parent: document.selectedPage
  });
  var artboard2 = new ___WEBPACK_IMPORTED_MODULE_0__["Artboard"]({
    name: 'Test2',
    parent: document.selectedPage
  });
  var rect = new ___WEBPACK_IMPORTED_MODULE_0__["Group"]({
    parent: artboard,
    flow: {
      targetId: artboard2.id
    }
  });
  expect(rect.flow.toJSON()).toEqual({
    targetId: artboard2.id,
    type: 'Flow',
    animationType: 'slideFromRight'
  });
});
test('target should return the wrapped artboard', function (context, document) {
  var artboard = new ___WEBPACK_IMPORTED_MODULE_0__["Artboard"]({
    name: 'Test1',
    parent: document.selectedPage
  });
  var artboard2 = new ___WEBPACK_IMPORTED_MODULE_0__["Artboard"]({
    name: 'Test2',
    parent: document.selectedPage
  });
  var rect = new ___WEBPACK_IMPORTED_MODULE_0__["Group"]({
    parent: artboard,
    flow: {
      targetId: artboard2.id
    }
  });
  expect(rect.flow.target).toEqual(artboard2);
});
test('should create a flow between a layer and an artboard with a specific animation', function () {
  var artboard = new ___WEBPACK_IMPORTED_MODULE_0__["Artboard"]({
    name: 'Test1'
  });
  var artboard2 = new ___WEBPACK_IMPORTED_MODULE_0__["Artboard"]({
    name: 'Test2'
  });
  var rect = new ___WEBPACK_IMPORTED_MODULE_0__["Group"]({
    parent: artboard,
    flow: {
      target: artboard2,
      animationType: ___WEBPACK_IMPORTED_MODULE_0__["Flow"].AnimationType.slideFromLeft
    }
  });
  expect(rect.flow.toJSON()).toEqual({
    targetId: artboard2.id,
    type: 'Flow',
    animationType: 'slideFromLeft'
  });
});
test('should create a back action', function () {
  var artboard = new ___WEBPACK_IMPORTED_MODULE_0__["Artboard"]({
    name: 'Test1'
  });
  var rect = new ___WEBPACK_IMPORTED_MODULE_0__["Group"]({
    parent: artboard,
    flow: {
      target: ___WEBPACK_IMPORTED_MODULE_0__["Flow"].BackTarget
    }
  });
  expect(rect.flow.toJSON()).toEqual({
    targetId: ___WEBPACK_IMPORTED_MODULE_0__["Flow"].BackTarget,
    type: 'Flow',
    animationType: 'slideFromRight'
  });
  expect(rect.flow.isBackAction()).toBe(true);
});
test('adding a flow action with an unknow target work but isValidConnection should return false', function () {
  var artboard = new ___WEBPACK_IMPORTED_MODULE_0__["Artboard"]({
    name: 'Test1'
  });
  var rect = new ___WEBPACK_IMPORTED_MODULE_0__["Group"]({
    parent: artboard,
    flow: {
      targetId: 'unknown'
    }
  });
  expect(rect.flow.isValidConnection()).toBe(false);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@skpm/test-runner/expect/index.js */ "./node_modules/@skpm/test-runner/expect/index.js")))

/***/ }),

/***/ "./Source/dom/models/__tests__/ImageData.test.js":
/*!*******************************************************!*\
  !*** ./Source/dom/models/__tests__/ImageData.test.js ***!
  \*******************************************************/
/*! exports provided: tests, logs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(expect) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tests", function() { return __skpm_tests__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logs", function() { return __skpm_logs__; });
/* harmony import */ var _test_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../test-utils */ "./Source/test-utils.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.. */ "./Source/dom/index.js");
/* globals expect, test */


var __skpm_logs__ = [];
var __skpm_console_log__ = console.log;

var __hookedLogs = function __hookedLogs(string) {
  __skpm_logs__.push(string);

  return __skpm_console_log__(string);
};

var __skpm_tests__ = {};

var test = function test(description, fn) {
  function withLogs(context, document) {
    console.log = __hookedLogs;
    return fn(context, document);
  }

  __skpm_tests__[description] = withLogs;
};

test.only = function (description, fn) {
  fn.only = true;
  return test(description, fn);
};

test.skip = function (description, fn) {
  fn.skipped = true;
  return test(description, fn);
};


test('should return an ImageData when accessing `image`', function (context, document) {
  var page = document.selectedPage;
  var image = new ___WEBPACK_IMPORTED_MODULE_1__["Image"]({
    parent: page,
    image: {
      base64: _test_utils__WEBPACK_IMPORTED_MODULE_0__["base64Image"]
    }
  });
  expect(image.image.type).toBe('ImageData');
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@skpm/test-runner/expect/index.js */ "./node_modules/@skpm/test-runner/expect/index.js")))

/***/ }),

/***/ "./Source/dom/models/__tests__/ImportableObject.test.js":
/*!**************************************************************!*\
  !*** ./Source/dom/models/__tests__/ImportableObject.test.js ***!
  \**************************************************************/
/*! exports provided: tests, logs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Promise, expect) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tests", function() { return __skpm_tests__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logs", function() { return __skpm_logs__; });
/* harmony import */ var _test_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../test-utils */ "./Source/test-utils.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.. */ "./Source/dom/index.js");
/* globals expect, test */

 // some tests cannot really run on jenkins because it doesn't have access to MSDocument

var __skpm_logs__ = [];
var __skpm_console_log__ = console.log;

var __hookedLogs = function __hookedLogs(string) {
  __skpm_logs__.push(string);

  return __skpm_console_log__(string);
};

var __skpm_tests__ = {};

var test = function test(description, fn) {
  function withLogs(context, document) {
    console.log = __hookedLogs;
    return fn(context, document);
  }

  __skpm_tests__[description] = withLogs;
};

test.only = function (description, fn) {
  fn.only = true;
  return test(description, fn);
};

test.skip = function (description, fn) {
  fn.skipped = true;
  return test(description, fn);
};



if (!Object(_test_utils__WEBPACK_IMPORTED_MODULE_0__["isRunningOnJenkins"])()) {
  test('should import a symbol from a lib', function () {
    var document = new ___WEBPACK_IMPORTED_MODULE_1__["Document"]();
    var artboard = new ___WEBPACK_IMPORTED_MODULE_1__["Artboard"]({
      name: 'Test',
      parent: document.selectedPage
    }); // eslint-disable-next-line

    var text = new ___WEBPACK_IMPORTED_MODULE_1__["Text"]({
      text: 'Test value',
      parent: artboard
    }); // eslint-disable-next-line

    var master = ___WEBPACK_IMPORTED_MODULE_1__["SymbolMaster"].fromArtboard(artboard);
    return new Promise(function (resolve, reject) {
      document.save('~/Desktop/sketch-api-unit-tests-importable-objects.sketch', function (err) {
        document.close();

        if (err) {
          return reject(err);
        }

        return resolve();
      });
    }).then(function () {
      var lib = ___WEBPACK_IMPORTED_MODULE_1__["Library"].getLibraryForDocumentAtPath('~/Desktop/sketch-api-unit-tests-importable-objects.sketch');
      var document2 = new ___WEBPACK_IMPORTED_MODULE_1__["Document"]();
      var symbolRefs = lib.getImportableSymbolReferencesForDocument(document2);
      expect(symbolRefs.length).toBe(1);
      expect(symbolRefs[0].id).toBe(master.symbolId);
      var importedMaster = symbolRefs[0].import();
      expect(importedMaster.layers[0].text).toBe('Test value');
      document2.close();
      lib.remove();
    });
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/promise-polyfill/lib/index.js */ "./node_modules/promise-polyfill/lib/index.js"), __webpack_require__(/*! ./node_modules/@skpm/test-runner/expect/index.js */ "./node_modules/@skpm/test-runner/expect/index.js")))

/***/ }),

/***/ "./Source/dom/models/__tests__/Library.test.js":
/*!*****************************************************!*\
  !*** ./Source/dom/models/__tests__/Library.test.js ***!
  \*****************************************************/
/*! exports provided: tests, logs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(expect, Promise) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tests", function() { return __skpm_tests__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logs", function() { return __skpm_logs__; });
/* harmony import */ var _test_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../test-utils */ "./Source/test-utils.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.. */ "./Source/dom/index.js");
/* globals expect, test */



function findValidLib(libs) {
  return libs.find(function (l) {
    return l.valid;
  });
} // some tests cannot really run on jenkins because it doesn't have access to MSDocument


var __skpm_logs__ = [];
var __skpm_console_log__ = console.log;

var __hookedLogs = function __hookedLogs(string) {
  __skpm_logs__.push(string);

  return __skpm_console_log__(string);
};

var __skpm_tests__ = {};

var test = function test(description, fn) {
  function withLogs(context, document) {
    console.log = __hookedLogs;
    return fn(context, document);
  }

  __skpm_tests__[description] = withLogs;
};

test.only = function (description, fn) {
  fn.only = true;
  return test(description, fn);
};

test.skip = function (description, fn) {
  fn.skipped = true;
  return test(description, fn);
};



if (!Object(_test_utils__WEBPACK_IMPORTED_MODULE_0__["isRunningOnJenkins"])()) {
  test('should list the libraries', function () {
    var libraries = ___WEBPACK_IMPORTED_MODULE_1__["Library"].getLibraries();
    expect(libraries[0].type).toBe('Library');
  });
  test('should be able to get the document', function () {
    var libraries = ___WEBPACK_IMPORTED_MODULE_1__["Library"].getLibraries();
    var lib = findValidLib(libraries);
    expect(lib.getDocument().type).toBe('Document');
  });
  test('should be able to get the list of symbols to be imported', function () {
    var document = new ___WEBPACK_IMPORTED_MODULE_1__["Document"]();
    var libraries = ___WEBPACK_IMPORTED_MODULE_1__["Library"].getLibraries();
    var lib = findValidLib(libraries);
    expect(lib.getImportableSymbolReferencesForDocument(document)[0].type).toBe('ImportableObject');
    document.close();
  });
  var lib;
  var libId;
  test('should create a library from a document', function () {
    var document = new ___WEBPACK_IMPORTED_MODULE_1__["Document"]();
    var artboard = new ___WEBPACK_IMPORTED_MODULE_1__["Artboard"]({
      name: 'Test',
      parent: document.selectedPage
    }); // eslint-disable-next-line

    var text = new ___WEBPACK_IMPORTED_MODULE_1__["Text"]({
      text: 'Test value',
      parent: artboard
    }); // eslint-disable-next-line

    var master = ___WEBPACK_IMPORTED_MODULE_1__["SymbolMaster"].fromArtboard(artboard);
    return new Promise(function (resolve, reject) {
      document.save('~/Desktop/sketch-api-unit-tests-library.sketch', function (err) {
        if (err) {
          return reject(err);
        }

        return resolve();
      });
    }).then(function () {
      document.close();
      lib = ___WEBPACK_IMPORTED_MODULE_1__["Library"].getLibraryForDocumentAtPath('~/Desktop/sketch-api-unit-tests-library.sketch');
      libId = lib.id;
      expect(lib.type).toBe('Library');
      var libraries = ___WEBPACK_IMPORTED_MODULE_1__["Library"].getLibraries();
      expect(libraries.find(function (d) {
        return d.id === libId;
      })).toEqual(lib);
    });
  });
  test('should disabled a library', function () {
    expect(lib.enabled).toBe(true);
    lib.enabled = false;
    expect(lib.enabled).toBe(false);
    lib.enabled = true;
    expect(lib.enabled).toBe(true);
  });
  test('should get the lastModifiedAt date', function () {
    expect(lib.lastModifiedAt instanceof Date).toBe(true);
  });
  test('should get the document of the library', function () {
    var document = lib.getDocument();
    expect(document.type).toBe('Document');
    expect(document.path).toBe(String(NSString.stringWithString('~/Desktop/sketch-api-unit-tests-library.sketch').stringByExpandingTildeInPath()));
  });
  test('should remove a library', function () {
    lib.remove();
    var libraries = ___WEBPACK_IMPORTED_MODULE_1__["Library"].getLibraries();
    expect(libraries.find(function (d) {
      return d.id === libId;
    })).toBe(undefined);
  });
  test('should add a remote library', function () {
    return new Promise(function (resolve, reject) {
      ___WEBPACK_IMPORTED_MODULE_1__["Library"].getRemoteLibraryWithRSS('https://client.sketch.cloud/v1/shares/PR8z1/rss', function (err, result) {
        if (err) {
          return reject(err);
        }

        return resolve(result);
      });
    }).then(function (result) {
      expect(result.libraryType).toBe(___WEBPACK_IMPORTED_MODULE_1__["Library"].LibraryType.Remote);
      result.remove();
    });
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@skpm/test-runner/expect/index.js */ "./node_modules/@skpm/test-runner/expect/index.js"), __webpack_require__(/*! ./node_modules/promise-polyfill/lib/index.js */ "./node_modules/promise-polyfill/lib/index.js")))

/***/ }),

/***/ "./Source/dom/models/__tests__/Override.test.js":
/*!******************************************************!*\
  !*** ./Source/dom/models/__tests__/Override.test.js ***!
  \******************************************************/
/*! exports provided: tests, logs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(expect) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tests", function() { return __skpm_tests__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logs", function() { return __skpm_logs__; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.. */ "./Source/dom/index.js");
/* globals expect, test */

/* eslint-disable no-param-reassign */
 // using a base64 image cause I'm not sure where and how to keep assets that would work with both local and jenkins tests

var base64Image = 'iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAAAXNSR0IArs4c6QAAEDBJREFUWAm1WftvXcdxnt09z/u+uqQoUS+KtGQ7kZ3EERIHjuKmseNUhg07QI0qjeE6iAsU6QMoiqLtj/0v+mvzDxQFDARuixZp3DYp6jiW7cS24lAyRYqkSN73ee5uvtlzSTNGIlc/ZHFxeM6e3Z1vvpmdmT0UpbWSuAlLhF/VcCPcnTBEprq3xANF6YarYtZvFQlJWEOUhAEG9/vryJKEJhvyQiLjKwaTh9WsMAVNLWGKryhU5PFsHoAO/uvxpcJQ4cDDATh+A3lAVjXcSIcNj77DgZkYXeH2ZhNn+lSLHlwB1w1ziwuSknxDDmWF4UC6EyWM5YGCnPYsU800dr3ME8PSB8IdLqbEzBbCxJwoYKCGJMahH7rw6rymJoVFQRB3oFm8mXHBt1W3cNrxW56LxiME1pv93BOMUjVM+3C92XIFj+T+Q4PwPOt0f6rJfIsxlqwmIWbgKl5NpTkTjVUxRjFanoBx3AGjfgjIdeDCtt+/p9KwCjNMLGQf9D4Cz3kTuIMnsd+gOQoAyYA+pt+RqHkV2K4UhFt4odMF7x21mkrNw+QM1kxRnlz1sB3QDPsj5ldKOz90QAT7PC9WIXdW8909TAa/xiJetcJsGefDhvVhuFgRI8Aet+rKd2xuvK12FZ5hRDcDN+h2PIFiNw4ysK9YXbaYm4RrIFNehxucKWQ5VVMQB8IgQAgLV8NfKIbFeCdiCcbEpoHEUgkj4HKQA2TYsARVwTdWQBckukEsAJMA0F2dEryiG4pVgBiW5NGujdxkiAf7IcmQBWNb2IREOgsEEGABOnBeU7BxKRSC1cMqQMZgMJvZqmwCmWy+Sj56MQEAK1CMHQ+u8QbWxniiRllOPhjdIzVhqTonnZAdkpiSSKjMKbO2lAL44Nw05gX9iLw5ogWyDQoHpLFYjURT6phUCw4HLM6UparYhg4MS2Mhksw0YFmmB8AYe3VlTIDvgQ9YUkaUblE8GK5+P/SnQSaLcqTlUNtBUvSnaWJtLVC9xVMXbJoORhuj0SaJvB52ArFgyjAOR36tM85F2Drjdz9BysNLGWAXwjb4SWWl4K3IogUrxg2wAGcWx6su8Cysx7xhDOsF1kfZ+/8+2vuP1N8NMqyQiygRnoabhn6jEc83mqfJa4q42RGJMDt5ftPaG4UlrXMzUrE+Mk3UdHwyHA3aZx715SKVUekBGazgNgGYgTjscWQF1wALPzxjI8h9Czry4DxomAfz7b79zhv/fGZpGAZ7PkUAWvqpESC1GQRHw/opqi3SJKIgoOaptm/KSZqmv5BiV8VFaP0873dr7fEkW3v7dsuvixOPUF73VAuxhoWANEACOZW5nFhgcpufQTNSiU0D78ZAYGTetql8//rr/1QT6/Ay38+oaGC+LkWpIxmeCsL7SS7TuMO+n8JtOpDjSSOM1larYEJyANP4nmwHtDFc2/15u9dsUfM8aU/IBjSD40EWBCpQtZ/osMtAFXqBqSILmDEQaA0Vtylcn1z93uD2a2dPat8WNEo0nN3EVjQ8tRDX7qfGeVJHARhUmSSVBpl3nkJZ94pkOJlON6W/43s+5amU3qluMdp6LXsrDD/fACxsZGF9xDMgg3jsNyeYhXtVUEAY2Ye1/0r2yaza9f9cXf1epz3g/WjnKZGqNzVF4Mljqn4/RWdJ1ws9ybFBjC8C6VupEGFVSI2FqFhJ07DUYz+ISafw76aaaI1d8d/htR4tXSZRx3IA4TCVBWgmqMVtH4R7OPRYUjGgWv4/P3xZyt04zJPxHsGH4x5ihLal8hrUWKR4AUFLQ+Wal9mpZOVlmkz1eASbiu6p7sK9BtTmMAhMnKfDzXqQRHJ44+qrVPSpBFYWDO/SXA0gr8+aSO1OSTaimkKgSqwSPjub3qPRj+z/fjfd+Je4NR7FMgl1ba7e6DZ2tp/oHjkp22eJ2qZUcFsRYosjxuVSY5/HLoo670WQE7Y0/7h7a7Upx7HItzfW5DjviOa4H7aOPyoefoFqn8mzThCzf5el9lB9uakyK0pg0tYrSqkihynvE9221360fvOtMEJKEKOdcSTiRnBsb1u1ewuy0SEvQsQRKpAeIpzS1qUORETsKGRL/oF6BCLhtZa7jWUyPVPUG4iouS6ScbsZrK/9lN75IeWbQTDmNAX/tiDMsQffaiEcu8SCzJ5rpDzkkFV695WN91+O/VuyqUF+01I9a1ByuttaoNZxUnXYzmqvtEgj0lqjOcUBEdepswIBEQfbShg5PeO3F3x9I12/KsdbLUzRqc62WhGtvv3yUrdHZ79I9oSmhocqlWExXR6yJApYBCM4vcYN8sng2t57P2jo3WZoy+EU0awJF84VqTk6ci/5KPqQLZHgQl/55IGhzOdsWK2J9ApP4gchcw6PyEZRk9qno9Ee9a8TjbjkS5Jmz8sHk72fvtqNj9Jij2wdaBALKpf3KLVIBTkAheT7cMT12z/+r2RtdXkuMoP+dGpa3Q6lU665u23qb1GEdZH+GoQyAQg4/2IythFcFCvDvTjicARCP676CN0aUy2mFjhWtDV1mSUu3t9u91Zev/p2l06vLH5BSVUy5bMt6FEA7hkQZz/En1bsR+1310b9d9cWaipLs+F6miOB1q8tye9rP9wRtxT0kLE2PvuC1VIUSpaC3QvP2ARsSI6nkmNhQEcno2m30fWmyc3XrprbtBBTkWfUqG98cHMYn1yeX8IsY7Sn/AJVgauJENOgJXKSb3VmUBTIaO5zTy+v7938wcuetrEcJOM+RSLPis1rP1m493hPTSwfbzBbaovSCvFBS/4BFjdOYhUsXtYUYrvRCgO9s7O1m0+pHcOJ4vHUJsnc7jS455Fnjjx0mXRoUcmCnf14hSoBVMCgpadQFvmkscWOnXrmO14/W/+/fz0RhaHXTMqiFnlQl4Z9dQR2ASsTRAUPnHM4xqkLcFwGwfZz5RxW9CAKGKUJ9BQBx/YpRsmciGEqrd/dGHvnPve1xceeI9XFWKWCfJIHseOK7cabCUqijEFXg2SPguPkHT/+7IutlQsj4SGINqI47ScCzruawC3LokB60ZSXJqWgLHTpCjKUWdgWQAw9BQRZLu2RkgSlUg1pfIPCEt110+z9fJp1P31x8YknqY4oj+3G3DM5+2xxpnAFF/OPjYAwwedT1aDmiZXn/6wf9HZRLSRlO2pNUM+ltTI3XhxDNkeVAIWPRo4ujeaTKedad6PAIUag3wITsuTme9RWVKN6ngdbNrKnzy9dfobO3EMyTjOM5eLAYUMhxQ1Ke66KZZxwUfZSGARP/hzNf/KzL/ztRtGJo5ZJsqDW+GA7H+wVpHyN+gAbTvHZAFsYjBrYnwy04sQmy5JwXNdIKaSa0/c2Uc/6tibSKGos/CLzPnvlJTr3GVSqeB8hr1TRiktVXg+Nayze14caIIH4KQ7pcp7OX3rspb/7YK+Qtblx6Zuo279FNCgVymko5hSCs4J8aAuX4yCPYhPKlYhsXogKOBc3r1O92cnKdi6ObEy8373yJ+q+hxNqD8E2KALN7JogGxxhJjcmyTUgQWVtUH9hGJqKqJ/A8xbogccuPv2td/cK0Z4TtabdpWQDpmv5SFbYzzigTbF8QDqwhVKoypGuc/I0nDVUJiy29kKPhqmi9sk31vOHnvp2dPEy0ZyhHrqYcADCCcFtmAN3YljVxsZrsKgs7MB1DwbHbcrAhN+mS888+NiVnak/mIpQ0wTJHR6DrMwmV67+Rt1WVbmwIjIkaMONMdPpYIOKBGGn9+Pre1/+5p/T558kMadNHbue8zPEoPko8dl5UDy5Zz4X4RENf5GI4FxwE34uygSWUGGRgY3m6eaTf3zinkd03o5UlI11vj1gRYUwZRlECHCl8JAEMR+pSfPBG5W+Tvq7WbpJvfqZta38k5cuy69doXCRdKwoCIsUm5glAR1KTmTPCgN3sRGBYsYgY3VwYdDYo9wMNGVeXNcalcXc4uXfn++dRrrJU9rdKZh3KXLYqxaXDAvRYd814Aegr9T9AS10Tq/f2Dt77sHFr19hjv2YUKwCP2sF+dYiReLQq9PSlAFOWa4Jy/Hw1ze8QpMuT+EGx4Ysy/b+/lymk9xMzj1wLJ5HuQFSQ2PLspWNUxPFBMeyE4rDOHu9TLfFq+pLfr37+B+8QCufwoGHwrb1OWshlwLPjBH3XQNnbnTAFdDYt+7cAAgD4CthGNZqtbPP/WnfdI1ojHdTSkWZoBgKUYzj+I7CRGZ8fotbfrFTGNvY3MkpqD3+1LN09jzyG/khnMhZ50Amm+/g4eDmTrAABe3DoVIGOHI9+I2Lz/5NXsyPN/JsI/MaR7M0ZQISG3EQknZMetopzcmfXc+95srDjz9NFy6SqlEhKIgRcPENCOZjLB+uzU+ActBxJ1g80cEyrlW0kVj2vvDcxd978fptOdzxaeqHnir11JO+LLFphK8DNe3eWDV74vjyl5878sUnOGxmOBG1kY6A7ZCFgAYhHtZgWIfbx8DC0AoZMFXg2FXLOfnVF5a+8vzqTVHcSGAX+LCHU7yMskSL+jztRmtvjR/46h/RV75BqkMljrVz1g8nCCiueC1mMPCnMiIjOwz4N8ICiBk9UA9p1DV2f+wylO+mtfSHf9E8/6U3Vyc0MX4YsilR2/tNRNo3X7/5wMNPzT/6NIpSfNI1fgM84WyLGAAgGRK2+0B1mJ6PEPYbYR2Q9KuTXdTE4UqHSAD3feuvB8c+sT0IKAmgBrs9dbZvTNKFlaPffImaR5Hy4XbG9xMXT/gDklPKJRIg5M3EDf1wykPQ7gQLyCrbHdCGG8upz0aNuMgkHVu59PxfvnGdppNe3DxGVEuGwTvr5uKLf0W9Jc0nZlk4w6HoD7xZWosUZVnqjAlNHCbn6zPDVjgPRLrHj78gwKI+ZiOIAqkspIF+85WfvPIPD12w48HO1mZn+dKL9KmvJ7odq8AUhfAbWPRApKOB64xf7UNxxSU2WhW37hRO3bCPXizSUpn5/H0Ux1P+FkjDW+nP/m3tze922rXO6d/x7ntCNy+MKYxMGsIySJ1oznzIZs5wFUhcK1sxJmSMCmlVnlbgPir7Ds8C3xq4/sdO1yHyD6qteDm60OiMx7VW6H36cfJOWAqBJc8t0mUVobik5uYYmcXPGSYHbuZLsz/Q4m6NCHZQchrFhlD4XoIAjy8f0DS7ReXUdk4MkfOMCiXlOK/7+LgGQA4T4tNBQGfygAF/QBKDqVDjpiqr7hqWO6EgmDlrVKcmTtFOT1TJXEYDJEo3Unxq2TcUy8UP8CuDVoDwcEDQvp15xKFe9/jxF2nx1YhFoCJGceo+NOCIiYKcD6cZ3I01RlGd8D9VHAy3KB7gMJiKHzAzSfCnCiwGOFvjaAiluN21b5FFRSW0xHdBXgwFnI+vmDiG4csRBIoExx3+ioaQwOaTqAvQKk5wHsI9K3AIcIWU+2ZZiMdU43nm/7eV+KaLio8/ucOBS9yhWlKFLvB5nKIAK1bbzUnHCXcfRwWlwgRZBzzN5OIFI0M3t7v2rWrab/t692z9thG59X8JjZB/N6F8uAYAAAAASUVORK5CYII=';
var base64Image2 = 'iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAAAXNSR0IArs4c6QAAEXRJREFUWAnNWVmPHcd5ra2rt7vOnYWLhqRWkiEhy5ZkJbIWJ6YMIbEhGUIgCEgQ6CVC/kx+RIA85yEIgsQPBgI4iGUnluNYVEiJFNfhcGbu2rfXWny+vsMhZSRS7KeULmu6q7urTn3r+Ur8b9wPOaOmPP3lnklOF94b9E5Q75lgTDgMe66dxbAXDr3luGaOnnLv8V0gPD6WnFnP8Mig9zylx06gp5e587yxzBQs95gY67JAMR3aKHCBdHIRFu3g6mXmneCCXuOOSUyBni4ZFiIE+IdrQs0VYaZBA5wOC9HsnPAQbIk90Dw0ii3hPYATAmjabeNTTMG5kEzTavSi4NgltnI4LQ0q3s7LeUNLABh+2IVTTCjvsWOPhWnTtHugFTUL6TsMc2DEzPhh+dU9ZlPMK8dpBBiByrBKtJLG8hKC9DQJ+gDqoYnQsCFMJQxp4LApSKCVCoYIRDtMwsDuPQEFJvphLgytdk/vYHZaFV/TXBANUBBK51q0kAl0ayECSN3Rq0CEeWgxaAGyBSx8iAWoB3rSA2FY6Rqw2j3T0xVagkLrsKbFVK8w4SnzIfPSikV7HWDrzAe0HHaP1lpYu4rx3HJaAz+g0zQ1idRBbAILwQw9U7hygIhNe4eZSK70SdjCJSXiM7yGvp0I4KBQtKYFBBFiJk1rAwcLGCkI1q1g5ECJlbB54SGklXRL8gxqkA0+0ZqkhfnRAIYMCP+1r9Awtk+iI4OzGLWkMUKiABSbsS4gZBymDd8BrMaxJYmM9qnxD9YA+dMfjBEISN1Jr0iypEpMXDEOE2xav4GFBfBa4A6gRw7vIJc+tBK84a3hRkrnHYQFZGReQAivI/wEDbv3mAWihkbQ6nYvmAHbhQVBnCRqwWG5FQTC7BwvcXIdgIO0MCWe4+0Km7G8pH27kPuE+xTThipzTFVeSx5ULMAuMIchGyIJSWGACj+YhGeBx4ItMLgDtgGh4rV2gKIECUSyWMJZvAwRjbBeM04DW9hJKnljcsbmUtSWVWVjBEujoGs9lI6plkAoZShZl/m+s2GHjysrve/pYFSWQkcjy1TDTCs8x70NECw4jEQrH0B2ZFKtIuE8cDLqW4FiHPigUxiM7IthXh7oYNkLluPsozCqfRVwnzl7UPhJXi+LAioYhmo0WjsO7y/MwWS245omjfpaDa0Ric7icFAWCWcnN6LTiBcHda51B/HMsQBag7UJipSCPMCJSkJRTLXoYIQNRSng4dAOnCtQLopFBH8YhklZfm7VZ/Pxv2ysu2wCm6m5nlpW4JMk7odhJ0SgdjWXKpQiDVzhdhtzi7Tk/GK+CPWoKgcsP8OCSTy80BF94xomoFD8sJyHVAR5T2s+D6QFPcKhK3pEQ3gKQ5aaa9+YADHa7XfV9Jf/+Y/bZ8aimsRhouCFKi9hCEIHehCooWD4rTWukcKv93ztbZZdY2wWhSwufV3vDKKmrPjtz3fPBNHp7vM7TVaytBEhFNrGN8oa8KHWyQgEMMHQ4JyQGkkPbiwYLIO7poqVq7Jbo+7k2pUfhezuQDmIsRHYgDQ2ViyRYlOxU85tGzeK1ZbztasXUsP8TCghS6dEmXZqlcObcmX25WJZ3ev5MErdOuebEITjsYFzo0GZ8ABKcm2AgNcgV3hohAIVEirFEWQHLZtAzFRwdz65vHf3wye2mapruGWFYGKtFR2ljgt1hquTlg1xOzd1ILUU3dpUkvWj8HhVLqcHd2XMQsFskYfGnOy78uDje1Wz+eRrCEkND4xEHAkQC2BqFAQotLWwoGAYAcW1VlbUUXAyWi7L6tNAfHL58t+dOuHLWdXpd8vFItli0K1i6yI85dTJwnQKUXsxK3ydcth1ACYhWS9A/BAVjKEu7sZJLFwWI9jENjPjZf6py45F/ajyYAtQV4KIAjVwXsOLBYsBAXGBkutDTGR3kJadF7tJaH/yk3/odhDJql7C6mXTDUd1xZq6gX6k6AjedV6T/zIbBLZii8IvjDPGSuvCMNw4tvmUdWldSsW1aMx8DF0ZzbKbV3+u/FIiEJKKDII7wjjAtVGeJKMymUFxIUspHpg6DpDnp8rcPqnu7P/HP71eT9KazTCTYtOY171oXLwcxsMgOlmIYcU0wqKSGn6IzKAgKEZhE+Qq913P+zAMd/zG3fF4S/WSsFv0dlXBhnzJFjfc1R+ePv8dY6pInXZY38SwnUCKklAhOMGuEGkp3cIAnXO5YHPdLMZ3r03v345jjWCa3WcdhqA5HO8v424viBOBpMIlEFAHR0YIha/QjaR0zIUQdCtE0GWbnXDdNpGvVU/pAN7VsPVBvLdzbe/2lZQtXb0H20OONQ4kZZVpmEpZCOIBfGR0YKg+71b70fLOzvWfd4Oqk+iyrHsNi4rYLoNe50QRxG2YhpFC7Ph5641zRkmMIEGYlj1in+AR6L02g1EyMs3+cv92Z6Z6tobH2yYbhMH+tZ+eGp4UcTRn/QycQ0SGR4y17DRRgCOQZiuGGRsJu1vsZTf/O22Kvg7KWY5oti5Du9R+GOl4uMeKlhgi3sAUkAGRYRsmQa2QhSg9IBo7hECgJSZiNAI9omxnVM+W4UGW1sbbelGxjWFgrM1uXjMbnWDrOBJQA8+hSEBKVMLNlQhKJhtbIvjDKxf7+3u/uvK17dTNsyI362udpjKhUMeHG/em02iwz0Xoec/7yFiEaS/AwIEdnICyKhgJUdw2oTXoe9pkB4t+1DsxGOY371e7Y3gpUuDujbw/3Pj4V9fkExtrWxcjpnPMIMjJCZb3RZuoyS7AlDFvZURe+F98eO1EzKqc5XczlAS8U1p1uXTlfmeJt1BNWKeNJT0BA+yLUhqJDrMKoge4FAawshAOaPKwlxX64KN9dcCOw6lRY3Tk1Ru3DrrbF17eLqomD/NBPCwtolcLCzZqSdog1yA7oChar28fP//i/o9/BCmMVF4sG5cg47HZlYOnn1xj8COYDIgSvAxei+YseTGiCqCAR0CDbaoj6gYtejPss7iul3tzGEg/Zh2eLmvkj3RRmGMvvrS2/Xu3wCjKUkP6sgILwpQwkbS0TQ3eQ2na1FIOj22f6KTqILv97/92JtZxYBsEn4gFGVNjEyJ9Y1X4DhQFtgYCB4wGemyTPpBBaiR/cEJKJSDXEaL4fimnLEUgL9hBXXrVvz4pz377jdErf/R5UQbxqBOIidmPFeoXgiUK22FioHgCjUupEf/HTE/jwZOvXUoeP58HncoGyB7FPhNLlu1U3EbAHurYegRIA1ylMSqKKlB/ATokLfKbUkLB9hW4dVQlapHqaVjeYqnjOlB+mH5aTR575cX+s2dnWjc6zuHQTGgFGR0qUcAnERhaxgPlgKqCQ6Zz0Z1Fmy+98+e3jdhruKnVIObZAmatbM07cQ9OCN8RGtPUMoLoG4Rx6BJxBoSltSoDl3NIn1O1GW1PPq9SPCx5XtsDJfkzp7vffK7Y3MwoWSVKQo4oG2XTFhYkLVIINaLICEg1ibxb+tE0On432nj+3b/Y8SFX3Sr3nZG+urvMZkWghLVI7UYq58DcIlMhRoS2EXWjLFU6CqYLI6PqMmLJrU9vIwkgztpa6v76x9Xy8bf/JDt24p6OlpSru8zFDbH2iJOeqYFPVB6pm7gO3cIYmI8NS/aa4B5L/Klzr7z3/vVpyTtr98vadNh8l9XTIrACSOB6oEGwIBiTg6FTuUEkhIiSpdIAxQni450bWRgjKwc+Htxa+ue+/0412r7O+G4NkXQCnjorTYP1gaytjYFD8JJqBwqGxPMD5GCnkIld2MmC9A7y+alzL7z93iezfK4Cudb1Y7bcKROXaNhVSTM1oFOoi5rAGwp8kBermEBicCq0upzc0wGbVJUYbf1sZ3ru0tubF16/WercD4ReD9VQsUh45AhwGl4TxW/FA0D4SzUMCnBwHxQVNGuFqIGANrZ8EnXDs89uv3KpCof3pnWE0D52rMS+qBrzVlCWRvlFmyE+Qn0rKuVVnRlI11VMJYOffrbz9bfe61546b5NRHRM81HMushEuc2AB/UkkDiD8omaEh48H2AFcpp0SNoge1APROqW5XI9Ho5ZWcjoqW9/j9f+sw//VXdsuTSzg6z7WIIMWNcuiLT1SggcPVA5T8cEDDJHXOHTsbP32MZm7792mjMvXNr+w7euFMChOyCHlPts6eewoRh6QMJ3pVaQUcu3uAMzh0mRM0JaSOQtHSsEqztxnPmiwKFFujZh6qkL3zh9+jxOWkCsxgeYhWJWVbMk6RCtVcjziA5U9MG8tdTGuPmcbfXVnZvz7TPnX3vzB9dRK8UDqQd5UcOoYXw4yeEKdmoasLm6CEF/28b/1v3z6op6Sh9H7dBD2/vDUInr7l9/kDc7PvGnn2GDDZHnLlY9w22VLpHDVUCExM3ZMbk+/mS52Cn+XvVOP3Pxyede7j12fsa7U6NqHgXI/b5RqGxI5QjNsH0ELdRiODKhtTD427WLb/zxXHYbnGPkoBoO7B2yASyYAdW7hvJXv5ve3p1UTu3P2OjEmcfPXhgde2xR1rMcpK+XyM68RAF81NpkenTXXvwfYeG1wzeLsy8+dendpumMrzGPfCLSpcsdirfK6QYkmvkFWxYKMfnyjYUajJ55/tV06/E6GDa6b1W8ZK6A5QXgIHCYh6tTpqc69lAtDx98Ee7/eneL9YYXXz/36p9e3UF+7dQzVF2oo6AOWAgq18CXWlbx7r18LKKTf/CdtSculnp40Egru0z3sspkTa0kwtmXta+EhReO3qHrUgx36ih+/runLr3zi0+ycoIaNMCxTAhnCtSkaGLdl2N+54o598Zb/BsvTZEzoo0q6I0bvgDhDFOIqmiIgqIdiQfXMDDiSW07WnJ1+9U9jn/qKL1p9dnv/kA+9swvby2cj3GqUSFOK6F15Jz+2Uc7T7/wtRMvfGsn6ucsqXhasaiBUdMJD61o2rD5KCYMwp0JW9u+BBYeHT1dXVNvwLcQPJS6WfDn3/+rm52t/VzVuWirqioO1O37e7NRePZ7b++xeA6mpno5oi9SewAHDGpb26ZMEQkeCGaFA3aGKN8io4GjhVdPv7o3Pm9YicpnKfUk2Xr5z/7yxx/fK3w3TAZ1E4zn5sp+/cr7H9xJ+nsVaMyoAR3jOD0EDJQjjWROtxG8VRmyKLhCe47cXqAIWCH4SlgkoUd/iovSLAMQ5UBfL6tZ58Tvv/vB5QPR+NH+VC7U1sU337mTHL/L13zUt4CCkwWOTIKTOINfLAELYjEYXCFAfjeeDjLBN9pTYxr+Slirbx/2KOdx6liBsUqwxi7KIrF57uTX37y6I2zydPLUt+yJZ6fs2NRFFUgFKgQ6wUMVefjDERCiqEIEXR0fgeOStChYQKIrGoPF2jrjaFFiu78R64+eHV4olqIqzQXCMeta8FZTic3ozDejXIRrw2LzdCZGxq/FyJIS7LgGxThqRzYOEKtBwvTAzDHSHuTSky/CWr37pT2oolSpobM8j5oaUbRQIgkGm+deNUJMWLzwibZprMA2s8Ys4Z6PaORBymtPf6EyMnOiBdQoAz1oKBIeyYMraa36B2/8xl9Uc6EKiYZYA5qEA0AUqrDrfRY2XjYc514a/5+mcpCTi2UIgvpwtQdzwePgmkeAMCzJCltkYH2/g7RwCrI6CClxyiVRnAscjeDIqxa6RD0Ebkini41DLYpDMqELUF8y4YfYWsUBE4YO5QhM9P9bKJyiSPidYHUlak+kaY0MUnqcePPUG2tMrNe8qKFS7nLYuYDufIzT/VUtuQpIQIILoAYg+B0Rowe6AyYJdoso0qr0t7Yt6WpQSo+zVTr5BDMFGYHS+MLOhNSJQk2GkhMkkzZNNUZr0W2ZTXZEg2Q2cDrqVza+imHAdGReX4T1qJ1hgv+pzWQfw6hDAqrF8Tm4bIj71UStquCjxDDJ2yUOhR9prXhaza3GyZ6ogT+2pyurO/SPeMnR2P+Di18D8cVdoZqZfR0AAAAASUVORK5CYII=';

function createSymbolMaster(document) {
  var artboard = new ___WEBPACK_IMPORTED_MODULE_0__["Artboard"]({
    name: 'Test',
    parent: document.selectedPage
  });
  var text = new ___WEBPACK_IMPORTED_MODULE_0__["Text"]({
    text: 'Test value',
    parent: artboard
  }); // build the symbol master

  return {
    master: ___WEBPACK_IMPORTED_MODULE_0__["SymbolMaster"].fromArtboard(artboard),
    text: text,
    artboard: artboard
  };
}

var __skpm_logs__ = [];
var __skpm_console_log__ = console.log;

var __hookedLogs = function __hookedLogs(string) {
  __skpm_logs__.push(string);

  return __skpm_console_log__(string);
};

var __skpm_tests__ = {};

var test = function test(description, fn) {
  function withLogs(context, document) {
    console.log = __hookedLogs;
    return fn(context, document);
  }

  __skpm_tests__[description] = withLogs;
};

test.only = function (description, fn) {
  fn.only = true;
  return test(description, fn);
};

test.skip = function (description, fn) {
  fn.skipped = true;
  return test(description, fn);
};


test('should be able to set overrides', function (context, document) {
  var _createSymbolMaster = createSymbolMaster(document),
      master = _createSymbolMaster.master,
      text = _createSymbolMaster.text;

  var instance = master.createNewInstance();
  document.selectedPage.layers = document.selectedPage.layers.concat(instance);
  expect(instance.overrides.length).toBe(1);
  var override = instance.overrides[0];
  expect(override.isDefault).toBe(true); // check that an override can be logged

  log(override); // override

  override.value = 'overridden';
  expect(instance.overrides.length).toBe(1);
  var result = {
    type: 'Override',
    id: "".concat(text.id, "_stringValue"),
    path: text.id,
    property: 'stringValue',
    symbolOverride: false,
    value: 'overridden',
    isDefault: false,
    editable: true,
    affectedLayer: text.toJSON()
  };
  delete result.affectedLayer.selected;
  result.affectedLayer.style = instance.overrides[0].affectedLayer.style.toJSON();
  expect(instance.overrides[0].toJSON()).toEqual(result);
});
test('should change a nested symbol', function (context, document) {
  // build the first symbol master
  var _createSymbolMaster2 = createSymbolMaster(document),
      nestedMaster = _createSymbolMaster2.master;

  var _createSymbolMaster3 = createSymbolMaster(document),
      nestedMaster2 = _createSymbolMaster3.master;

  var artboard = new ___WEBPACK_IMPORTED_MODULE_0__["Artboard"]({
    name: 'Test2',
    parent: document.selectedPage
  });
  var text2 = new ___WEBPACK_IMPORTED_MODULE_0__["Text"]({
    text: 'Test value 2'
  });
  var nestedInstance = nestedMaster.createNewInstance();
  artboard.layers = [nestedInstance, text2];
  var master = ___WEBPACK_IMPORTED_MODULE_0__["SymbolMaster"].fromArtboard(artboard);
  var instance = master.createNewInstance(); // add the instance to the page

  document.selectedPage.layers = document.selectedPage.layers.concat(instance);
  expect(instance.overrides.length).toBe(3);
  var override = instance.overrides[1];
  override.value = nestedMaster2.symbolId;
  var result = {
    type: 'Override',
    id: "".concat(nestedInstance.id, "_symbolID"),
    path: nestedInstance.id,
    property: 'symbolID',
    affectedLayer: nestedInstance.toJSON(),
    symbolOverride: true,
    value: nestedMaster2.symbolId,
    isDefault: false,
    editable: true
  };
  delete result.affectedLayer.overrides;
  delete result.affectedLayer.selected;
  result.affectedLayer.style = instance.overrides[1].affectedLayer.style.toJSON();
  expect(instance.overrides[1].toJSON()).toEqual(result);
});
test('should handle image override', function (context, document) {
  var artboard = new ___WEBPACK_IMPORTED_MODULE_0__["Artboard"]({
    name: 'Test',
    parent: document.selectedPage
  }); // eslint-disable-next-line

  var image = new ___WEBPACK_IMPORTED_MODULE_0__["Image"]({
    image: {
      base64: base64Image
    },
    parent: artboard
  }); // build the symbol master

  var master = ___WEBPACK_IMPORTED_MODULE_0__["SymbolMaster"].fromArtboard(artboard);
  var instance = master.createNewInstance(); // add the instance to the page

  document.selectedPage.layers = document.selectedPage.layers.concat(instance);
  expect(instance.overrides.length).toBe(1);
  expect(instance.overrides[0].property).toBe('image');
  expect(instance.overrides[0].isDefault).toBe(true);
  expect(instance.overrides[0].value.type).toBe('ImageData');
  instance.overrides[0].value = {
    base64: base64Image2
  };
  expect(instance.overrides[0].property).toBe('image');
  expect(instance.overrides[0].isDefault).toBe(false);
  expect(instance.overrides[0].value.type).toBe('ImageData');
});
test('hidden layers should not be editable', function (context, document) {
  var _createSymbolMaster4 = createSymbolMaster(document),
      master = _createSymbolMaster4.master;

  master.layers[0].hidden = true;
  var instance = master.createNewInstance();
  document.selectedPage.layers = document.selectedPage.layers.concat(instance);
  expect(instance.overrides[0].editable).toBe(false);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@skpm/test-runner/expect/index.js */ "./node_modules/@skpm/test-runner/expect/index.js")))

/***/ }),

/***/ "./Source/dom/models/__tests__/Point.test.js":
/*!***************************************************!*\
  !*** ./Source/dom/models/__tests__/Point.test.js ***!
  \***************************************************/
/*! exports provided: tests, logs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(expect) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tests", function() { return __skpm_tests__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logs", function() { return __skpm_logs__; });
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Point */ "./Source/dom/models/Point.js");
/* globals expect, test */

var __skpm_logs__ = [];
var __skpm_console_log__ = console.log;

var __hookedLogs = function __hookedLogs(string) {
  __skpm_logs__.push(string);

  return __skpm_console_log__(string);
};

var __skpm_tests__ = {};

var test = function test(description, fn) {
  function withLogs(context, document) {
    console.log = __hookedLogs;
    return fn(context, document);
  }

  __skpm_tests__[description] = withLogs;
};

test.only = function (description, fn) {
  fn.only = true;
  return test(description, fn);
};

test.skip = function (description, fn) {
  fn.skipped = true;
  return test(description, fn);
};


test('should create a point', function () {
  var r = new _Point__WEBPACK_IMPORTED_MODULE_0__["Point"](1, 2); // check that a point can be logged

  log(r);
  expect(r.x).toBe(1);
  expect(r.y).toBe(2);
});
test('should create a point using an object', function () {
  var r = new _Point__WEBPACK_IMPORTED_MODULE_0__["Point"]({
    x: 1,
    y: 2
  });
  expect(r.x).toBe(1);
  expect(r.y).toBe(2);
});
test('should create a point using an object when x === 0 (#133)', function () {
  var r = new _Point__WEBPACK_IMPORTED_MODULE_0__["Point"]({
    x: 0,
    y: 2
  });
  expect(r.x).toBe(0);
  expect(r.y).toBe(2);
});
test('should create a point using another point', function () {
  var r2 = new _Point__WEBPACK_IMPORTED_MODULE_0__["Point"]({
    x: 1,
    y: 2
  });
  var r = new _Point__WEBPACK_IMPORTED_MODULE_0__["Point"](r2);
  expect(r.x).toBe(1);
  expect(r.y).toBe(2);
});
test('should create a point using a CGPoint', function () {
  var r = new _Point__WEBPACK_IMPORTED_MODULE_0__["Point"](CGPointMake(1, 2));
  expect(r.x).toBe(1);
  expect(r.y).toBe(2);
});
test('should create a point using an NSPoint', function () {
  var r = new _Point__WEBPACK_IMPORTED_MODULE_0__["Point"](NSMakePoint(1, 2));
  expect(r.x).toBe(1);
  expect(r.y).toBe(2);
});
test('should return a CGPoint', function () {
  var r = new _Point__WEBPACK_IMPORTED_MODULE_0__["Point"](1, 2);
  var c = r.asCGPoint();
  expect(parseInt(c.x, 10)).toBe(1);
  expect(parseInt(c.y, 10)).toBe(2);
});
test('should return an NSPoint', function () {
  var r = new _Point__WEBPACK_IMPORTED_MODULE_0__["Point"](1, 2);
  var c = r.asNSPoint();
  expect(parseInt(c.x, 10)).toBe(1);
  expect(parseInt(c.y, 10)).toBe(2);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@skpm/test-runner/expect/index.js */ "./node_modules/@skpm/test-runner/expect/index.js")))

/***/ }),

/***/ "./Source/dom/models/__tests__/Rectangle.test.js":
/*!*******************************************************!*\
  !*** ./Source/dom/models/__tests__/Rectangle.test.js ***!
  \*******************************************************/
/*! exports provided: tests, logs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(expect) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tests", function() { return __skpm_tests__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logs", function() { return __skpm_logs__; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.. */ "./Source/dom/index.js");
/* globals expect, test */

var __skpm_logs__ = [];
var __skpm_console_log__ = console.log;

var __hookedLogs = function __hookedLogs(string) {
  __skpm_logs__.push(string);

  return __skpm_console_log__(string);
};

var __skpm_tests__ = {};

var test = function test(description, fn) {
  function withLogs(context, document) {
    console.log = __hookedLogs;
    return fn(context, document);
  }

  __skpm_tests__[description] = withLogs;
};

test.only = function (description, fn) {
  fn.only = true;
  return test(description, fn);
};

test.skip = function (description, fn) {
  fn.skipped = true;
  return test(description, fn);
};


test('should create a rectangle', function () {
  var r = new ___WEBPACK_IMPORTED_MODULE_0__["Rectangle"](1, 2, 3, 4); // check that a rectangle can be logged

  log(r);
  expect(r.x).toBe(1);
  expect(r.y).toBe(2);
  expect(r.width).toBe(3);
  expect(r.height).toBe(4);
});
test('should create a rectangle using an object', function () {
  var r = new ___WEBPACK_IMPORTED_MODULE_0__["Rectangle"]({
    x: 1,
    y: 2,
    width: 3,
    height: 4
  });
  expect(r.x).toBe(1);
  expect(r.y).toBe(2);
  expect(r.width).toBe(3);
  expect(r.height).toBe(4);
});
test('should create a rectangle using an object when x === 0 (#133)', function () {
  var r = new ___WEBPACK_IMPORTED_MODULE_0__["Rectangle"]({
    x: 0,
    y: 2,
    width: 3,
    height: 4
  });
  expect(r.x).toBe(0);
  expect(r.y).toBe(2);
  expect(r.width).toBe(3);
  expect(r.height).toBe(4);
});
test('should create a rectangle using another rectangle', function () {
  var r2 = new ___WEBPACK_IMPORTED_MODULE_0__["Rectangle"]({
    x: 1,
    y: 2,
    width: 3,
    height: 4
  });
  var r = new ___WEBPACK_IMPORTED_MODULE_0__["Rectangle"](r2);
  expect(r.x).toBe(1);
  expect(r.y).toBe(2);
  expect(r.width).toBe(3);
  expect(r.height).toBe(4);
});
test('should create a rectangle using a CGRect', function () {
  var r = new ___WEBPACK_IMPORTED_MODULE_0__["Rectangle"](CGRectMake(1, 2, 3, 4));
  expect(r.x).toBe(1);
  expect(r.y).toBe(2);
  expect(r.width).toBe(3);
  expect(r.height).toBe(4);
});
test('should offset a rectangle', function () {
  var r = new ___WEBPACK_IMPORTED_MODULE_0__["Rectangle"](1, 2, 3, 4);
  r.offset(10, 10);
  expect(r.x).toBe(11);
  expect(r.y).toBe(12);
  expect(r.width).toBe(3);
  expect(r.height).toBe(4);
});
test('should scale a rectangle', function () {
  var r = new ___WEBPACK_IMPORTED_MODULE_0__["Rectangle"](1, 2, 3, 4);
  r.scale(10, 10);
  expect(r.x).toBe(1);
  expect(r.y).toBe(2);
  expect(r.width).toBe(30);
  expect(r.height).toBe(40);
  r.scale(0.5);
  expect(r.x).toBe(1);
  expect(r.y).toBe(2);
  expect(r.width).toBe(15);
  expect(r.height).toBe(20);
});
test('should return a CGRect', function () {
  var r = new ___WEBPACK_IMPORTED_MODULE_0__["Rectangle"](1, 2, 3, 4);
  var c = r.asCGRect();
  expect(parseInt(c.origin.x, 10)).toBe(1);
  expect(parseInt(c.origin.y, 10)).toBe(2);
  expect(parseInt(c.size.width, 10)).toBe(3);
  expect(parseInt(c.size.height, 10)).toBe(4);
});
test('should return an NSRect', function () {
  var r = new ___WEBPACK_IMPORTED_MODULE_0__["Rectangle"](1, 2, 3, 4);
  var c = r.asNSRect();
  expect(parseInt(c.origin.x, 10)).toBe(1);
  expect(parseInt(c.origin.y, 10)).toBe(2);
  expect(parseInt(c.size.width, 10)).toBe(3);
  expect(parseInt(c.size.height, 10)).toBe(4);
});
test('should convert rect to different coord system', function (context, document) {
  var page = document.selectedPage;
  var group = new ___WEBPACK_IMPORTED_MODULE_0__["Group"]({
    parent: page,
    frame: {
      x: 100,
      y: 50,
      width: 10,
      height: 10
    }
  });
  var rect = new ___WEBPACK_IMPORTED_MODULE_0__["Rectangle"]({
    x: 10,
    y: 10,
    width: 10,
    height: 10
  });
  var parentRect = rect.changeBasis({
    from: group,
    to: group.parent
  });
  expect(parentRect.toJSON()).toEqual({
    x: 110,
    y: 60,
    width: 10,
    height: 10
  });
  var pageRect = rect.changeBasis({
    from: group
  });
  expect(pageRect.toJSON()).toEqual({
    x: 110,
    y: 60,
    width: 10,
    height: 10
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@skpm/test-runner/expect/index.js */ "./node_modules/@skpm/test-runner/expect/index.js")))

/***/ }),

/***/ "./Source/dom/models/__tests__/Selection.test.js":
/*!*******************************************************!*\
  !*** ./Source/dom/models/__tests__/Selection.test.js ***!
  \*******************************************************/
/*! exports provided: tests, logs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(expect) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tests", function() { return __skpm_tests__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logs", function() { return __skpm_logs__; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.. */ "./Source/dom/index.js");
/* globals expect, test */

var __skpm_logs__ = [];
var __skpm_console_log__ = console.log;

var __hookedLogs = function __hookedLogs(string) {
  __skpm_logs__.push(string);

  return __skpm_console_log__(string);
};

var __skpm_tests__ = {};

var test = function test(description, fn) {
  function withLogs(context, document) {
    console.log = __hookedLogs;
    return fn(context, document);
  }

  __skpm_tests__[description] = withLogs;
};

test.only = function (description, fn) {
  fn.only = true;
  return test(description, fn);
};

test.skip = function (description, fn) {
  fn.skipped = true;
  return test(description, fn);
};


test('an empty document should have an empty selection', function (context, document) {
  expect(document.selectedLayers.isEmpty).toBe(true);
});
test('should clear the selection', function (context, document) {
  var group = new ___WEBPACK_IMPORTED_MODULE_0__["Group"]({
    parent: document.selectedPage,
    selected: true
  });
  var selection = document.selectedLayers; // check that a selection can be logged

  log(selection);
  expect(group.selected).toBe(true);
  expect(selection.isEmpty).toBe(false);
  selection.clear();
  expect(group.selected).toBe(false);
  expect(selection.isEmpty).toBe(true);
});
test('should change the selection', function (context, document) {
  var group = new ___WEBPACK_IMPORTED_MODULE_0__["Group"]({
    parent: document.selectedPage,
    selected: true
  });
  var selection = document.selectedLayers; // check that a selection can be logged

  log(selection);
  expect(group.selected).toBe(true);
  expect(selection.isEmpty).toBe(false);
  selection.layers = [];
  expect(group.selected).toBe(false);
  expect(selection.isEmpty).toBe(true);
});
test('should return the length without wrapping all the object', function (context, document) {
  // eslint-disable-next-line
  var group = new ___WEBPACK_IMPORTED_MODULE_0__["Group"]({
    parent: document.selectedPage,
    selected: true
  }); // eslint-disable-next-line

  var text = new ___WEBPACK_IMPORTED_MODULE_0__["Text"]({
    parent: document.selectedPage,
    selected: true
  });
  var selection = document.selectedLayers;
  expect(selection.length).toBe(2);
});
test('should be able to go through the layers', function (context, document) {
  var group = new ___WEBPACK_IMPORTED_MODULE_0__["Group"]({
    parent: document.selectedPage,
    selected: true
  }); // eslint-disable-next-line

  var text = new ___WEBPACK_IMPORTED_MODULE_0__["Text"]({
    parent: document.selectedPage,
    selected: true
  });
  var selection = document.selectedLayers;
  var iterations = 0;
  var groups = 0;
  selection.layers.forEach(function (layer) {
    iterations += 1;

    if (layer.isEqual(group)) {
      groups += 1;
    }
  });
  expect(iterations).toBe(2);
  expect(groups).toBe(1);
});
test('should define convenience array methods', function (context, document) {
  // eslint-disable-next-line
  var group = new ___WEBPACK_IMPORTED_MODULE_0__["Group"]({
    parent: document.selectedPage,
    selected: true
  }); // eslint-disable-next-line

  var text = new ___WEBPACK_IMPORTED_MODULE_0__["Text"]({
    parent: document.selectedPage,
    selected: true
  });
  var selection = document.selectedLayers;
  expect(selection.forEach).toBeDefined();
  expect(selection.map).toBeDefined();
  expect(selection.reduce).toBeDefined();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@skpm/test-runner/expect/index.js */ "./node_modules/@skpm/test-runner/expect/index.js")))

/***/ }),

/***/ "./Source/dom/models/__tests__/SharedStyle.test.js":
/*!*********************************************************!*\
  !*** ./Source/dom/models/__tests__/SharedStyle.test.js ***!
  \*********************************************************/
/*! exports provided: tests, logs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(expect) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tests", function() { return __skpm_tests__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logs", function() { return __skpm_logs__; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.. */ "./Source/dom/index.js");
/* harmony import */ var _test_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../test-utils */ "./Source/test-utils.ts");
/* globals expect, test */

/* eslint-disable no-param-reassign */


var __skpm_logs__ = [];
var __skpm_console_log__ = console.log;

var __hookedLogs = function __hookedLogs(string) {
  __skpm_logs__.push(string);

  return __skpm_console_log__(string);
};

var __skpm_tests__ = {};

var test = function test(description, fn) {
  function withLogs(context, document) {
    console.log = __hookedLogs;
    return fn(context, document);
  }

  __skpm_tests__[description] = withLogs;
};

test.only = function (description, fn) {
  fn.only = true;
  return test(description, fn);
};

test.skip = function (description, fn) {
  fn.skipped = true;
  return test(description, fn);
};


test('should create a shared text style from a normal style', function (context, document) {
  // build the shared style
  var _createSharedStyle = Object(_test_utils__WEBPACK_IMPORTED_MODULE_1__["createSharedStyle"])(document, ___WEBPACK_IMPORTED_MODULE_0__["Shape"]),
      sharedStyle = _createSharedStyle.sharedStyle,
      object = _createSharedStyle.object; // check that a shared style can be logged


  log(sharedStyle);
  expect(sharedStyle.type).toBe('SharedStyle');
  expect(sharedStyle.style).toEqual(object.style);
  expect(sharedStyle.name).toEqual('test shared style');
  expect(document.getSharedLayerStyles()).toEqual([sharedStyle]);
  expect(document.getSharedTextStyles()).toEqual([]);
});
test('should create a shared text style from a text style', function (context, document) {
  // build the shared style
  var _createSharedStyle2 = Object(_test_utils__WEBPACK_IMPORTED_MODULE_1__["createSharedStyle"])(document, ___WEBPACK_IMPORTED_MODULE_0__["Text"]),
      sharedStyle = _createSharedStyle2.sharedStyle,
      object = _createSharedStyle2.object;

  expect(sharedStyle.style).toEqual(object.style);
  expect(document.getSharedLayerStyles()).toEqual([]);
  expect(document.getSharedTextStyles()).toEqual([sharedStyle]);
});
test('should return all instances', function (context, document) {
  var _createSharedStyle3 = Object(_test_utils__WEBPACK_IMPORTED_MODULE_1__["createSharedStyle"])(document, ___WEBPACK_IMPORTED_MODULE_0__["Shape"]),
      sharedStyle = _createSharedStyle3.sharedStyle; // 1st instance


  var shape = new ___WEBPACK_IMPORTED_MODULE_0__["Shape"]({
    parent: document.selectedPage,
    sharedStyle: sharedStyle // 2nd instance

  });
  expect(sharedStyle.getAllInstances().length).toBe(2); // eslint-disable-next-line

  var shape2 = new ___WEBPACK_IMPORTED_MODULE_0__["Shape"]({
    parent: document.selectedPage,
    sharedStyle: sharedStyle // 2nd instance

  });
  expect(sharedStyle.getAllInstances().length).toBe(3);
  shape.sharedStyle = undefined;
  expect(sharedStyle.getAllInstances().length).toBe(2);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@skpm/test-runner/expect/index.js */ "./node_modules/@skpm/test-runner/expect/index.js")))

/***/ }),

/***/ "./Source/dom/style/Blur.js":
/*!**********************************!*\
  !*** ./Source/dom/style/Blur.js ***!
  \**********************************/
/*! exports provided: BlurType, Blur */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlurType", function() { return BlurType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Blur", function() { return Blur; });
/* harmony import */ var _WrappedObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../WrappedObject */ "./Source/dom/WrappedObject.js");
/* harmony import */ var _models_Point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/Point */ "./Source/dom/models/Point.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums */ "./Source/dom/enums.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var BlurTypeMap = {
  Gaussian: 0,
  Motion: 1,
  Zoom: 2,
  Background: 3
};
var BlurType = {
  Gaussian: 'Gaussian',
  Motion: 'Motion',
  Zoom: 'Zoom',
  Background: 'Background'
};
var DEFAULT_BLUR = {
  center: {
    x: 0.5,
    y: 0.5
  },
  motionAngle: 0,
  radius: 10,
  enabled: false,
  blurType: BlurType.Gaussian
};
var Blur =
/*#__PURE__*/
function (_WrappedObject) {
  _inherits(Blur, _WrappedObject);

  function Blur() {
    _classCallCheck(this, Blur);

    return _possibleConstructorReturn(this, _getPrototypeOf(Blur).apply(this, arguments));
  }

  _createClass(Blur, null, [{
    key: "updateNative",
    value: function updateNative(s, blur) {
      var blurWithDefault = Object.assign({}, DEFAULT_BLUR, blur);

      if (typeof blurWithDefault.center !== 'undefined') {
        s.setCenter(CGPointMake(blurWithDefault.center.x, blurWithDefault.center.y));
      }

      if (typeof blurWithDefault.motionAngle !== 'undefined') {
        s.setMotionAngle(blurWithDefault.motionAngle);
      }

      if (typeof blurWithDefault.radius !== 'undefined') {
        s.setRadius(blurWithDefault.radius);
      }

      if (typeof blurWithDefault.blurType !== 'undefined') {
        var blurType = BlurTypeMap[blurWithDefault.blurType];
        s.setType(typeof blurType !== 'undefined' ? blurType : blurWithDefault.blurType);
      }

      if (typeof blurWithDefault.enabled !== 'undefined') {
        s.isEnabled = blurWithDefault.enabled; // eslint-disable-line
      }
    }
  }]);

  return Blur;
}(_WrappedObject__WEBPACK_IMPORTED_MODULE_0__["WrappedObject"]);
Blur.type = _enums__WEBPACK_IMPORTED_MODULE_2__["Types"].Blur;
Blur[_WrappedObject__WEBPACK_IMPORTED_MODULE_0__["DefinedPropertiesKey"]] = {};
Blur.define('sketchObject', {
  exportable: false,
  enumerable: false,
  importable: false,
  get: function get() {
    return this._object;
  }
});
Blur.define('center', {
  get: function get() {
    var center = new _models_Point__WEBPACK_IMPORTED_MODULE_1__["Point"](this._object.center().x, this._object.center().y);
    center._parent = this;
    center._parentKey = 'center';
    return center;
  },
  set: function set(center) {
    this._object.setCenter(CGPointMake(center.x, center.y));
  }
});
Blur.define('motionAngle', {
  get: function get() {
    return Number(this._object.motionAngle());
  },
  set: function set(angle) {
    this._object.setMotionAngle(angle);
  }
});
Blur.define('radius', {
  get: function get() {
    return Number(this._object.radius());
  },
  set: function set(radius) {
    this._object.setRadius(radius);
  }
});
Blur.define('enabled', {
  get: function get() {
    return !!this._object.isEnabled();
  },
  set: function set(enabled) {
    this._object.isEnabled = enabled;
  }
});
Blur.define('blurType', {
  get: function get() {
    var blurType = this._object.type();

    return Object.keys(BlurTypeMap).find(function (key) {
      return BlurTypeMap[key] === blurType;
    }) || blurType;
  },
  set: function set(type) {
    var blurType = BlurTypeMap[type];

    this._object.setType(typeof blurType !== 'undefined' ? blurType : type);
  }
});

/***/ }),

/***/ "./Source/dom/style/Border.js":
/*!************************************!*\
  !*** ./Source/dom/style/Border.js ***!
  \************************************/
/*! exports provided: BorderPosition, Border */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BorderPosition", function() { return BorderPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Border", function() { return Border; });
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! util */ "./core-modules/node_modules/@skpm/util/index.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Color */ "./Source/dom/style/Color.js");
/* harmony import */ var _WrappedObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../WrappedObject */ "./Source/dom/WrappedObject.js");
/* harmony import */ var _Gradient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Gradient */ "./Source/dom/style/Gradient.js");
/* harmony import */ var _Fill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Fill */ "./Source/dom/style/Fill.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../enums */ "./Source/dom/enums.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./Source/dom/utils.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var BorderPositionMap = {
  Center: 0,
  Inside: 1,
  Outside: 2,
  Both: 3 // This is Sketch internal option - don't use it.

};
var BorderPosition = {
  Center: 'Center',
  Inside: 'Inside',
  Outside: 'Outside',
  Both: 'Both' // This is Sketch internal option - don't use it.

};
var Border =
/*#__PURE__*/
function (_WrappedObject) {
  _inherits(Border, _WrappedObject);

  function Border() {
    _classCallCheck(this, Border);

    return _possibleConstructorReturn(this, _getPrototypeOf(Border).apply(this, arguments));
  }

  _createClass(Border, null, [{
    key: "toNative",
    value: function toNative(value) {
      if (Object(util__WEBPACK_IMPORTED_MODULE_0__["isNativeObject"])(value)) {
        return value;
      }

      if (Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isWrappedObject"])(value)) {
        return value.sketchObject;
      }

      var border = MSStyleBorder.new();
      var color = typeof value === 'string' ? _Color__WEBPACK_IMPORTED_MODULE_1__["Color"].from(value) : _Color__WEBPACK_IMPORTED_MODULE_1__["Color"].from(value.color);
      var gradient = _Gradient__WEBPACK_IMPORTED_MODULE_3__["Gradient"].from(value.gradient);

      if (color) {
        border.color = color.toMSColor();
      }

      if (gradient) {
        border.gradient = gradient._object;
      }

      if (typeof value.thickness !== 'undefined') {
        border.thickness = value.thickness;
      }

      if (typeof value.position !== 'undefined') {
        var position = BorderPositionMap[value.position];
        border.position = typeof position !== 'undefined' ? position : value.position;
      }

      var fillType = _Fill__WEBPACK_IMPORTED_MODULE_4__["FillTypeMap"][value.fillType];
      border.fillType = typeof fillType !== 'undefined' ? fillType : value.fillType || _Fill__WEBPACK_IMPORTED_MODULE_4__["FillTypeMap"].Color;

      if (typeof value.enabled === 'undefined') {
        border.isEnabled = true;
      } else {
        border.isEnabled = value.enabled;
      }

      return border;
    }
  }]);

  return Border;
}(_WrappedObject__WEBPACK_IMPORTED_MODULE_2__["WrappedObject"]);
Border.type = _enums__WEBPACK_IMPORTED_MODULE_5__["Types"].Border;
Border[_WrappedObject__WEBPACK_IMPORTED_MODULE_2__["DefinedPropertiesKey"]] = {};
Border.define('sketchObject', {
  exportable: false,
  enumerable: false,
  importable: false,
  get: function get() {
    return this._object;
  }
});
Border.define('fillType', {
  get: function get() {
    var _this = this;

    return Object.keys(_Fill__WEBPACK_IMPORTED_MODULE_4__["FillTypeMap"]).find(function (key) {
      return _Fill__WEBPACK_IMPORTED_MODULE_4__["FillTypeMap"][key] === _this._object.fillType();
    }) || this._object.fillType();
  },
  set: function set(fillType) {
    var fillTypeMapped = _Fill__WEBPACK_IMPORTED_MODULE_4__["FillTypeMap"][fillType];
    this._object.fillType = typeof fillTypeMapped !== 'undefined' ? fillTypeMapped : fillType || _Fill__WEBPACK_IMPORTED_MODULE_4__["FillTypeMap"].Color;
  }
});
Border.define('position', {
  get: function get() {
    var _this2 = this;

    return Object.keys(BorderPositionMap).find(function (key) {
      return BorderPositionMap[key] === _this2._object.position();
    }) || this._object.position();
  },
  set: function set(position) {
    var positionMapped = BorderPositionMap[position];
    this._object.position = typeof positionMapped !== 'undefined' ? positionMapped : position;
  }
});
Border.define('color', {
  get: function get() {
    return Object(_Color__WEBPACK_IMPORTED_MODULE_1__["colorToString"])(this._object.color());
  },
  set: function set(_color) {
    var color = _Color__WEBPACK_IMPORTED_MODULE_1__["Color"].from(_color);
    this._object.color = color.toMSColor();
  }
});
Border.define('gradient', {
  get: function get() {
    return _Gradient__WEBPACK_IMPORTED_MODULE_3__["Gradient"].from(this._object.gradient());
  },
  set: function set(_gradient) {
    var gradient = _Gradient__WEBPACK_IMPORTED_MODULE_3__["Gradient"].from(_gradient);
    this._object.gradient = gradient;
  }
});
Border.define('thickness', {
  get: function get() {
    return Number(this._object.thickness());
  },
  set: function set(thickness) {
    this._object.thickness = thickness;
  }
});
Border.define('enabled', {
  get: function get() {
    return !!this._object.isEnabled();
  },
  set: function set(enabled) {
    this._object.isEnabled = enabled;
  }
});

/***/ }),

/***/ "./Source/dom/style/BorderOptions.js":
/*!*******************************************!*\
  !*** ./Source/dom/style/BorderOptions.js ***!
  \*******************************************/
/*! exports provided: Arrowhead, LineEnd, LineJoin, BorderOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Arrowhead", function() { return Arrowhead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineEnd", function() { return LineEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineJoin", function() { return LineJoin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BorderOptions", function() { return BorderOptions; });
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! util */ "./core-modules/node_modules/@skpm/util/index.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _WrappedObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../WrappedObject */ "./Source/dom/WrappedObject.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums */ "./Source/dom/enums.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var ArrowheadMap = {
  None: 0,
  OpenArrow: 1,
  FilledArrow: 2,
  Line: 3,
  OpenCircle: 4,
  FilledCircle: 5,
  OpenSquare: 6,
  FilledSquare: 7
};
var Arrowhead = {
  None: 'None',
  OpenArrow: 'OpenArrow',
  FilledArrow: 'FilledArrow',
  ClosedArrow: 'FilledArrow',
  // deprecated
  Line: 'Line',
  OpenCircle: 'OpenCircle',
  FilledCircle: 'FilledCircle',
  OpenSquare: 'OpenSquare',
  FilledSquare: 'FilledSquare'
};
var LineEndMap = {
  Butt: 0,
  Round: 1,
  Projecting: 2
};
var LineEnd = {
  Butt: 'Butt',
  Round: 'Round',
  Projecting: 'Projecting'
};
var LineJoinMap = {
  Miter: 0,
  Round: 1,
  Bevel: 2
};
var LineJoin = {
  Miter: 'Mitter',
  Round: 'Round',
  Bevel: 'Bevel'
};
var BORDER_OPTIONS_DEFAULT = {
  startArrowhead: Arrowhead.None,
  endArrowhead: Arrowhead.None,
  dashPattern: [],
  lineEnd: LineEnd.Butt,
  lineJoin: LineJoin.Miter
};
var BorderOptions =
/*#__PURE__*/
function (_WrappedObject) {
  _inherits(BorderOptions, _WrappedObject);

  function BorderOptions() {
    _classCallCheck(this, BorderOptions);

    return _possibleConstructorReturn(this, _getPrototypeOf(BorderOptions).apply(this, arguments));
  }

  _createClass(BorderOptions, null, [{
    key: "updateNative",
    value: function updateNative(s, borderOptions) {
      var optionsWithDefault = Object.assign({}, BORDER_OPTIONS_DEFAULT, borderOptions);

      if (typeof optionsWithDefault.startArrowhead !== 'undefined') {
        var startArrowhead = ArrowheadMap[optionsWithDefault.startArrowhead];
        s.setStartMarkerType(typeof startArrowhead !== 'undefined' ? startArrowhead : optionsWithDefault.startArrowhead);
      }

      if (typeof optionsWithDefault.endArrowhead !== 'undefined') {
        var endArrowhead = ArrowheadMap[optionsWithDefault.endArrowhead];
        s.setEndMarkerType(typeof endArrowhead !== 'undefined' ? endArrowhead : optionsWithDefault.endArrowhead);
      }

      if (typeof optionsWithDefault.dashPattern !== 'undefined') {
        s.borderOptions().setDashPattern(optionsWithDefault.dashPattern);
      }

      if (typeof optionsWithDefault.lineEnd !== 'undefined') {
        var lineEnd = LineEndMap[optionsWithDefault.lineEnd];
        s.borderOptions().setLineCapStyle(typeof lineEnd !== 'undefined' ? lineEnd : optionsWithDefault.lineEnd);
      }

      if (typeof optionsWithDefault.lineJoin !== 'undefined') {
        var lineJoin = LineJoinMap[optionsWithDefault.lineJoin];
        s.borderOptions().setLineJoinStyle(typeof lineJoin !== 'undefined' ? lineJoin : optionsWithDefault.lineJoin);
      }
    }
  }]);

  return BorderOptions;
}(_WrappedObject__WEBPACK_IMPORTED_MODULE_1__["WrappedObject"]);
BorderOptions.type = _enums__WEBPACK_IMPORTED_MODULE_2__["Types"].BorderOptions;
BorderOptions[_WrappedObject__WEBPACK_IMPORTED_MODULE_1__["DefinedPropertiesKey"]] = {};
BorderOptions.define('sketchObject', {
  exportable: false,
  enumerable: false,
  importable: false,
  get: function get() {
    return this._object;
  }
});
BorderOptions.define('startArrowhead', {
  get: function get() {
    var startType = this._object.startMarkerType();

    return Object.keys(ArrowheadMap).find(function (key) {
      return ArrowheadMap[key] === startType;
    }) || startType;
  },
  set: function set(arrowhead) {
    var arrowheadMapped = ArrowheadMap[arrowhead];

    this._object.setStartMarkerType(typeof arrowheadMapped !== 'undefined' ? arrowheadMapped : arrowhead);
  }
});
BorderOptions.define('endArrowhead', {
  get: function get() {
    var endType = this._object.endMarkerType();

    return Object.keys(ArrowheadMap).find(function (key) {
      return ArrowheadMap[key] === endType;
    }) || endType;
  },
  set: function set(arrowhead) {
    var arrowheadMapped = ArrowheadMap[arrowhead];

    this._object.setEndMarkerType(typeof arrowheadMapped !== 'undefined' ? arrowheadMapped : arrowhead);
  }
});
BorderOptions.define('dashPattern', {
  get: function get() {
    return Object(util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(this._object.borderOptions().dashPattern()).map(Number);
  },
  set: function set(arrowhead) {
    this._object.borderOptions().setDashPattern(arrowhead);
  }
});
BorderOptions.define('lineEnd', {
  get: function get() {
    var lineCap = this._object.borderOptions().lineCapStyle();

    return Object.keys(LineEndMap).find(function (key) {
      return LineEndMap[key] === lineCap;
    }) || lineCap;
  },
  set: function set(lineEnd) {
    var lineEndMapped = LineEndMap[lineEnd];

    this._object.borderOptions().setLineCapStyle(typeof lineEndMapped !== 'undefined' ? lineEndMapped : lineEnd);
  }
});
BorderOptions.define('lineJoin', {
  get: function get() {
    var lineJoin = this._object.borderOptions().lineJoinStyle();

    return Object.keys(LineJoinMap).find(function (key) {
      return LineJoinMap[key] === lineJoin;
    }) || lineJoin;
  },
  set: function set(lineJoin) {
    var lineJoinMapped = LineJoinMap[lineJoin];

    this._object.borderOptions().setLineJoinStyle(typeof lineJoinMapped !== 'undefined' ? lineJoinMapped : lineJoin);
  }
});

/***/ }),

/***/ "./Source/dom/style/Color.js":
/*!***********************************!*\
  !*** ./Source/dom/style/Color.js ***!
  \***********************************/
/*! exports provided: colorFromString, colorToString, Color */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorFromString", function() { return colorFromString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorToString", function() { return colorToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! util */ "./core-modules/node_modules/@skpm/util/index.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/**
 * Given a string description of a color, return an MSImmutableColor.
 */

function colorFromString(value) {
  return MSImmutableColor.colorWithSVGString_(value);
}
/**
 * Given a MSColor, return string description of a color.
 */

function colorToString(value) {
  function toHex(v) {
    // eslint-disable-next-line
    return (Math.round(v * 255) | 1 << 8).toString(16).slice(1);
  }

  var red = toHex(value.red());
  var green = toHex(value.green());
  var blue = toHex(value.blue());
  var alpha = toHex(value.alpha());
  return "#".concat(red).concat(green).concat(blue).concat(alpha);
}
var Color =
/*#__PURE__*/
function () {
  function Color(nativeColor) {
    _classCallCheck(this, Color);

    this._object = nativeColor;
  }

  _createClass(Color, [{
    key: "toString",
    value: function toString() {
      return colorToString(this._object);
    }
  }, {
    key: "toMSColor",
    value: function toMSColor() {
      return this._object.newMutableCounterpart();
    }
  }, {
    key: "toMSImmutableColor",
    value: function toMSImmutableColor() {
      return this._object;
    }
  }], [{
    key: "from",
    value: function from(object) {
      if (!object) {
        return undefined;
      }

      var nativeColor;

      if (Object(util__WEBPACK_IMPORTED_MODULE_0__["isNativeObject"])(object)) {
        var className = String(object.class());

        if (className === 'MSColor') {
          nativeColor = MSImmutableColor.alloc().initWithMutableModelObject(object);
        } else if (className === 'MSImmutableColor') {
          nativeColor = object;
        } else if (className === 'NSColor') {
          nativeColor = MSImmutableColor.colorWithNSColor(object);
        } else {
          throw new Error("Cannot create a color from a ".concat(className));
        }
      } else if (typeof object === 'string') {
        nativeColor = colorFromString(object);
      } else {
        throw new Error('`color` needs to be a string');
      }

      return new Color(nativeColor);
    }
  }]);

  return Color;
}();

/***/ }),

/***/ "./Source/dom/style/Fill.js":
/*!**********************************!*\
  !*** ./Source/dom/style/Fill.js ***!
  \**********************************/
/*! exports provided: FillTypeMap, FillType, PatternFillTypeMap, PatternFillType, NoiseTypeMap, NoiseType, Fill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FillTypeMap", function() { return FillTypeMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FillType", function() { return FillType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatternFillTypeMap", function() { return PatternFillTypeMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatternFillType", function() { return PatternFillType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoiseTypeMap", function() { return NoiseTypeMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoiseType", function() { return NoiseType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fill", function() { return Fill; });
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! util */ "./core-modules/node_modules/@skpm/util/index.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Color */ "./Source/dom/style/Color.js");
/* harmony import */ var _WrappedObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../WrappedObject */ "./Source/dom/WrappedObject.js");
/* harmony import */ var _Gradient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Gradient */ "./Source/dom/style/Gradient.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../enums */ "./Source/dom/enums.js");
/* harmony import */ var _models_ImageData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/ImageData */ "./Source/dom/models/ImageData.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./Source/dom/utils.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var FillTypeMap = {
  Color: 0,
  // A solid fill/border.
  Gradient: 1,
  // A gradient fill/border.
  Pattern: 4,
  // A pattern fill/border.
  Noise: 5 // A noise fill/border.

};
var FillType = {
  Color: 'Color',
  // A solid fill/border.
  Gradient: 'Gradient',
  // A gradient fill/border.
  Pattern: 'Pattern',
  // A pattern fill/border.
  Noise: 'Noise',
  // A noise fill/border.

  /* @deprecated */
  color: 'Color',
  // A solid fill/border.
  gradient: 'Gradient',
  // A gradient fill/border.
  pattern: 'Pattern',
  // A pattern fill/border.
  noise: 'Noise' // A noise fill/border.

};
var PatternFillTypeMap = {
  Tile: 0,
  // tile the image to fill the shape
  Fill: 1,
  // fit the shape inside the image
  Stretch: 2,
  // stretch the image to fill the shape
  Fit: 3 // fit the image inside the shape

};
var PatternFillType = {
  Tile: 'Tile',
  Fill: 'Fill',
  Stretch: 'Stretch',
  Fit: 'Fit'
};
var NoiseTypeMap = {
  Original: 0,
  Black: 1,
  White: 2,
  Color: 3
};
var NoiseType = {
  Original: 'Original',
  Black: 'Black',
  White: 'White',
  Color: 'Color'
};
var Fill =
/*#__PURE__*/
function (_WrappedObject) {
  _inherits(Fill, _WrappedObject);

  function Fill() {
    _classCallCheck(this, Fill);

    return _possibleConstructorReturn(this, _getPrototypeOf(Fill).apply(this, arguments));
  }

  _createClass(Fill, null, [{
    key: "toNative",
    value: function toNative(value) {
      if (Object(util__WEBPACK_IMPORTED_MODULE_0__["isNativeObject"])(value)) {
        return value;
      }

      if (Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isWrappedObject"])(value)) {
        return value.sketchObject;
      }

      var fill = MSStyleFill.new();
      var color = typeof value === 'string' ? _Color__WEBPACK_IMPORTED_MODULE_1__["Color"].from(value) : _Color__WEBPACK_IMPORTED_MODULE_1__["Color"].from(value.color);
      var gradient = _Gradient__WEBPACK_IMPORTED_MODULE_3__["Gradient"].from(value.gradient);

      if (color) {
        fill.color = color.toMSColor();
      }

      if (gradient) {
        fill.gradient = gradient._object;
      }

      if (value.noise) {
        if (typeof value.noise.noiseType !== 'undefined') {
          var noiseTypeMapped = NoiseTypeMap[value.noise.noiseType];
          fill.setNoiseIndex(typeof noiseTypeMapped !== 'undefined' ? noiseTypeMapped : value.noise.noiseType || NoiseTypeMap.Original);
        }

        if (typeof value.noise.intensity !== 'undefined') {
          fill.setNoiseIntensity(value.noise.intensity);
        }
      }

      if (value.pattern) {
        if (typeof value.pattern.patternType !== 'undefined') {
          var patternTypeMapped = PatternFillTypeMap[value.pattern.patternType];
          fill.setPatternFillType(typeof patternTypeMapped !== 'undefined' ? patternTypeMapped : value.pattern.patternType || PatternFillTypeMap.Tile);
        }

        if (typeof value.pattern.tileScale !== 'undefined') {
          fill.setPatternTileScale(value.pattern.tileScale);
        }

        if (typeof value.pattern.image !== 'undefined') {
          var image = _models_ImageData__WEBPACK_IMPORTED_MODULE_5__["ImageData"].from(value.pattern.image);
          fill.setImage(image.sketchObject);
        }
      }

      var fillType = FillTypeMap[value.fill];
      fill.fillType = typeof fillType !== 'undefined' ? fillType : value.fillType || FillTypeMap.Color;

      if (typeof value.enabled === 'undefined') {
        fill.isEnabled = true;
      } else {
        fill.isEnabled = value.enabled;
      }

      return fill;
    }
  }]);

  return Fill;
}(_WrappedObject__WEBPACK_IMPORTED_MODULE_2__["WrappedObject"]);
Fill.type = _enums__WEBPACK_IMPORTED_MODULE_4__["Types"].Fill;
Fill[_WrappedObject__WEBPACK_IMPORTED_MODULE_2__["DefinedPropertiesKey"]] = {};
Fill.define('sketchObject', {
  exportable: false,
  enumerable: false,
  importable: false,
  get: function get() {
    return this._object;
  }
});
Fill.define('fill', {
  get: function get() {
    var _this = this;

    return Object.keys(FillTypeMap).find(function (key) {
      return FillTypeMap[key] === _this._object.fillType();
    }) || this._object.fillType();
  },
  set: function set(fillType) {
    var fillTypeMapped = FillTypeMap[fillType];
    this._object.fillType = typeof fillTypeMapped !== 'undefined' ? fillTypeMapped : fillType || FillTypeMap.Color;
  }
});
Fill.define('color', {
  get: function get() {
    return Object(_Color__WEBPACK_IMPORTED_MODULE_1__["colorToString"])(this._object.color());
  },
  set: function set(_color) {
    var color = _Color__WEBPACK_IMPORTED_MODULE_1__["Color"].from(_color);
    this._object.color = color.toMSColor();
  }
});
Fill.define('gradient', {
  get: function get() {
    return _Gradient__WEBPACK_IMPORTED_MODULE_3__["Gradient"].from(this._object.gradient());
  },
  set: function set(_gradient) {
    var gradient = _Gradient__WEBPACK_IMPORTED_MODULE_3__["Gradient"].from(_gradient);
    this._object.gradient = gradient;
  }
});
Fill.defineObject('pattern', {
  patternType: {
    get: function get() {
      var _this2 = this;

      return Object.keys(PatternFillTypeMap).find(function (key) {
        return PatternFillTypeMap[key] === _this2._object.patternFillType();
      }) || this._object.patternFillType();
    },
    set: function set(patternType) {
      var patternTypeMapped = PatternFillTypeMap[patternType];

      this._object.setPatternFillType(typeof patternTypeMapped !== 'undefined' ? patternTypeMapped : patternType || PatternFillTypeMap.Tile);
    }
  },
  image: {
    get: function get() {
      return _models_ImageData__WEBPACK_IMPORTED_MODULE_5__["ImageData"].fromNative(this._object.image());
    },
    set: function set(image) {
      this._object.setImage(_models_ImageData__WEBPACK_IMPORTED_MODULE_5__["ImageData"].from(image).sketchObject);
    }
  },
  tileScale: {
    get: function get() {
      return Number(this._object.patternTileScale());
    },
    set: function set(scale) {
      this._object.setPatternTileScale(scale);
    }
  }
});
Fill.defineObject('noise', {
  noiseType: {
    get: function get() {
      var _this3 = this;

      return Object.keys(NoiseTypeMap).find(function (key) {
        return NoiseTypeMap[key] === _this3._object.noiseIndex();
      }) || this._object.noiseIndex();
    },
    set: function set(noiseType) {
      var noiseTypeMapped = NoiseTypeMap[noiseType];

      this._object.setNoiseIndex(typeof noiseTypeMapped !== 'undefined' ? noiseTypeMapped : noiseType || NoiseTypeMap.Original);
    }
  },
  intensity: {
    get: function get() {
      return Number(this._object.noiseIntensity());
    },
    set: function set(intensity) {
      this._object.setNoiseIntensity(intensity);
    }
  }
});
Fill.define('enabled', {
  get: function get() {
    return !!this._object.isEnabled();
  },
  set: function set(enabled) {
    this._object.isEnabled = enabled;
  }
});

/***/ }),

/***/ "./Source/dom/style/Gradient.js":
/*!**************************************!*\
  !*** ./Source/dom/style/Gradient.js ***!
  \**************************************/
/*! exports provided: GradientType, Gradient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradientType", function() { return GradientType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gradient", function() { return Gradient; });
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! util */ "./core-modules/node_modules/@skpm/util/index.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _WrappedObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../WrappedObject */ "./Source/dom/WrappedObject.js");
/* harmony import */ var _GradientStop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GradientStop */ "./Source/dom/style/GradientStop.js");
/* harmony import */ var _models_Point__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/Point */ "./Source/dom/models/Point.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../enums */ "./Source/dom/enums.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var GradientTypeMap = {
  Linear: 0,
  Radial: 1,
  Angular: 2
};
var GradientType = {
  Linear: 'Linear',
  Radial: 'Radial',
  Angular: 'Angular'
};
var Gradient =
/*#__PURE__*/
function (_WrappedObject) {
  _inherits(Gradient, _WrappedObject);

  function Gradient() {
    _classCallCheck(this, Gradient);

    return _possibleConstructorReturn(this, _getPrototypeOf(Gradient).apply(this, arguments));
  }

  _createClass(Gradient, null, [{
    key: "from",
    value: function from(object) {
      if (!object) {
        return undefined;
      }

      var nativeGradient;

      if (Object(util__WEBPACK_IMPORTED_MODULE_0__["isNativeObject"])(object)) {
        var className = String(object.class());

        if (className === 'MSGradient' || className === 'MSImmutableGradient') {
          nativeGradient = object;
        } else {
          throw new Error("Cannot create a gradient from a ".concat(className));
        }
      } else {
        nativeGradient = MSGradient.alloc().initBlankGradient();

        if (typeof object.gradientType !== 'undefined') {
          var type = GradientTypeMap[object.gradientType];
          nativeGradient.setGradientType(typeof type !== 'undefined' ? type : object.gradientType);
        }

        if (object.from) {
          nativeGradient.setFrom(CGPointMake(typeof object.from.x !== 'undefined' ? object.from.x : 0.5, typeof object.from.y !== 'undefined' ? object.from.y : 0));
        }

        if (typeof object.to !== 'undefined') {
          nativeGradient.setTo(CGPointMake(typeof object.to.x !== 'undefined' ? object.to.x : 0.5, typeof object.to.y !== 'undefined' ? object.to.y : 1));
        }

        if (object.stops) {
          nativeGradient.setStops(object.stops.map(_GradientStop__WEBPACK_IMPORTED_MODULE_2__["GradientStop"].from).map(function (g) {
            return g._object;
          }));
        }
      }

      return Gradient.fromNative(nativeGradient);
    }
  }]);

  return Gradient;
}(_WrappedObject__WEBPACK_IMPORTED_MODULE_1__["WrappedObject"]);
Gradient.type = _enums__WEBPACK_IMPORTED_MODULE_4__["Types"].Gradient;
Gradient[_WrappedObject__WEBPACK_IMPORTED_MODULE_1__["DefinedPropertiesKey"]] = {};
Gradient.define('sketchObject', {
  exportable: false,
  enumerable: false,
  importable: false,
  get: function get() {
    return this._object;
  }
});
Gradient.define('gradientType', {
  get: function get() {
    var _this = this;

    return Object.keys(GradientTypeMap).find(function (key) {
      return GradientTypeMap[key] === _this._object.gradientType();
    }) || this._object.gradientType();
  },
  set: function set(gradientType) {
    var type = GradientTypeMap[gradientType];

    this._object.setGradientType(typeof type !== 'undefined' ? type : gradientType);
  }
});
Gradient.define('from', {
  get: function get() {
    var point = new _models_Point__WEBPACK_IMPORTED_MODULE_3__["Point"](this._object.from().x, this._object.from().y);
    point._parent = this;
    point._parentKey = 'from';
    return point;
  },
  set: function set(point) {
    this._object.setFrom(CGPointMake(point.x !== 'undefined' ? point.x : 0.5, point.y !== 'undefined' ? point.y : 0));
  }
});
Gradient.define('to', {
  get: function get() {
    var point = new _models_Point__WEBPACK_IMPORTED_MODULE_3__["Point"](this._object.to().x, this._object.to().y);
    point._parent = this;
    point._parentKey = 'to';
    return point;
  },
  set: function set(point) {
    this._object.setTo(CGPointMake(point.x !== 'undefined' ? point.x : 0.5, point.y !== 'undefined' ? point.y : 1));
  }
});
Gradient.define('stops', {
  get: function get() {
    return Object(util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(this._object.stops()).map(_GradientStop__WEBPACK_IMPORTED_MODULE_2__["GradientStop"].from.bind(_GradientStop__WEBPACK_IMPORTED_MODULE_2__["GradientStop"]));
  },
  set: function set(stops) {
    this._object.setStops(stops.map(_GradientStop__WEBPACK_IMPORTED_MODULE_2__["GradientStop"].from.bind(_GradientStop__WEBPACK_IMPORTED_MODULE_2__["GradientStop"])).map(function (g) {
      return g._object;
    }));
  }
});

/***/ }),

/***/ "./Source/dom/style/GradientStop.js":
/*!******************************************!*\
  !*** ./Source/dom/style/GradientStop.js ***!
  \******************************************/
/*! exports provided: GradientStop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradientStop", function() { return GradientStop; });
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! util */ "./core-modules/node_modules/@skpm/util/index.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _WrappedObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../WrappedObject */ "./Source/dom/WrappedObject.js");
/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Color */ "./Source/dom/style/Color.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enums */ "./Source/dom/enums.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var GradientStop =
/*#__PURE__*/
function (_WrappedObject) {
  _inherits(GradientStop, _WrappedObject);

  function GradientStop() {
    _classCallCheck(this, GradientStop);

    return _possibleConstructorReturn(this, _getPrototypeOf(GradientStop).apply(this, arguments));
  }

  _createClass(GradientStop, null, [{
    key: "from",
    value: function from(object) {
      if (!object) {
        return undefined;
      }

      var nativeStop;

      if (Object(util__WEBPACK_IMPORTED_MODULE_0__["isNativeObject"])(object)) {
        var className = String(object.class());

        if (className === 'MSGradientStop' || className === 'MSImmutableGradientStop') {
          nativeStop = object;
        } else {
          throw new Error("Cannot create a gradient from a ".concat(className));
        }
      } else {
        nativeStop = MSGradientStop.stopWithPosition_color(object.position || 0, _Color__WEBPACK_IMPORTED_MODULE_2__["Color"].from(object.color || '#000000FF').toMSColor());
      }

      return GradientStop.fromNative(nativeStop);
    }
  }]);

  return GradientStop;
}(_WrappedObject__WEBPACK_IMPORTED_MODULE_1__["WrappedObject"]);
GradientStop.type = _enums__WEBPACK_IMPORTED_MODULE_3__["Types"].GradientStop;
GradientStop[_WrappedObject__WEBPACK_IMPORTED_MODULE_1__["DefinedPropertiesKey"]] = {};
GradientStop.define('sketchObject', {
  exportable: false,
  enumerable: false,
  importable: false,
  get: function get() {
    return this._object;
  }
});
GradientStop.define('position', {
  get: function get() {
    return Number(this._object.position());
  },
  set: function set(position) {
    this._object.setPosition(position);
  }
});
GradientStop.define('color', {
  get: function get() {
    return Object(_Color__WEBPACK_IMPORTED_MODULE_2__["colorToString"])(this._object.color());
  },
  set: function set(_color) {
    var color = _Color__WEBPACK_IMPORTED_MODULE_2__["Color"].from(_color);
    this._object.color = color.toMSColor();
  }
});

/***/ }),

/***/ "./Source/dom/style/Shadow.js":
/*!************************************!*\
  !*** ./Source/dom/style/Shadow.js ***!
  \************************************/
/*! exports provided: Shadow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shadow", function() { return Shadow; });
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! util */ "./core-modules/node_modules/@skpm/util/index.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Color */ "./Source/dom/style/Color.js");
/* harmony import */ var _WrappedObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../WrappedObject */ "./Source/dom/WrappedObject.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enums */ "./Source/dom/enums.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./Source/dom/utils.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Shadow =
/*#__PURE__*/
function (_WrappedObject) {
  _inherits(Shadow, _WrappedObject);

  function Shadow() {
    _classCallCheck(this, Shadow);

    return _possibleConstructorReturn(this, _getPrototypeOf(Shadow).apply(this, arguments));
  }

  _createClass(Shadow, null, [{
    key: "toNative",
    value: function toNative(nativeClass, value) {
      if (Object(util__WEBPACK_IMPORTED_MODULE_0__["isNativeObject"])(value)) {
        return value;
      }

      if (Object(_utils__WEBPACK_IMPORTED_MODULE_4__["isWrappedObject"])(value)) {
        return value.sketchObject;
      }

      var shadow = nativeClass.new();
      var color = typeof value === 'string' ? _Color__WEBPACK_IMPORTED_MODULE_1__["Color"].from(value) : _Color__WEBPACK_IMPORTED_MODULE_1__["Color"].from(value.color);

      if (color) {
        shadow.color = color.toMSColor();
      }

      if (typeof value.blur !== 'undefined') {
        shadow.blurRadius = value.blur;
      }

      if (typeof value.x !== 'undefined') {
        shadow.offsetX = value.x;
      }

      if (typeof value.y !== 'undefined') {
        shadow.offsetY = value.y;
      }

      if (typeof value.spread !== 'undefined') {
        shadow.spread = value.spread;
      }

      if (typeof value.enabled === 'undefined') {
        shadow.isEnabled = true;
      } else {
        shadow.isEnabled = value.enabled;
      }

      return shadow;
    }
  }]);

  return Shadow;
}(_WrappedObject__WEBPACK_IMPORTED_MODULE_2__["WrappedObject"]);
Shadow.type = _enums__WEBPACK_IMPORTED_MODULE_3__["Types"].Shadow;
Shadow[_WrappedObject__WEBPACK_IMPORTED_MODULE_2__["DefinedPropertiesKey"]] = {};
Shadow.define('sketchObject', {
  exportable: false,
  enumerable: false,
  importable: false,
  get: function get() {
    return this._object;
  }
});
Shadow.define('blur', {
  get: function get() {
    return Number(this._object.blurRadius());
  },
  set: function set(x) {
    this._object.blurRadius = x;
  }
});
Shadow.define('x', {
  get: function get() {
    return Number(this._object.offsetX());
  },
  set: function set(x) {
    this._object.offsetX = x;
  }
});
Shadow.define('y', {
  get: function get() {
    return Number(this._object.offsetY());
  },
  set: function set(x) {
    this._object.offsetY = x;
  }
});
Shadow.define('spread', {
  get: function get() {
    return Number(this._object.spread());
  },
  set: function set(x) {
    this._object.spread = x;
  }
});
Shadow.define('color', {
  get: function get() {
    return Object(_Color__WEBPACK_IMPORTED_MODULE_1__["colorToString"])(this._object.color());
  },
  set: function set(_color) {
    var color = _Color__WEBPACK_IMPORTED_MODULE_1__["Color"].from(_color);
    this._object.color = color.toMSColor();
  }
});
Shadow.define('enabled', {
  get: function get() {
    return !!this._object.isEnabled();
  },
  set: function set(enabled) {
    this._object.isEnabled = enabled;
  }
});

/***/ }),

/***/ "./Source/dom/style/Style.js":
/*!***********************************!*\
  !*** ./Source/dom/style/Style.js ***!
  \***********************************/
/*! exports provided: StyleTypeMap, StyleType, Style */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleTypeMap", function() { return StyleTypeMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleType", function() { return StyleType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Style", function() { return Style; });
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! util */ "./core-modules/node_modules/@skpm/util/index.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _WrappedObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../WrappedObject */ "./Source/dom/WrappedObject.js");
/* harmony import */ var _Factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Factory */ "./Source/dom/Factory.js");
/* harmony import */ var _wrapNativeObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../wrapNativeObject */ "./Source/dom/wrapNativeObject.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../enums */ "./Source/dom/enums.js");
/* harmony import */ var _Gradient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Gradient */ "./Source/dom/style/Gradient.js");
/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Color */ "./Source/dom/style/Color.js");
/* harmony import */ var _Shadow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Shadow */ "./Source/dom/style/Shadow.js");
/* harmony import */ var _BorderOptions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./BorderOptions */ "./Source/dom/style/BorderOptions.js");
/* harmony import */ var _Blur__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Blur */ "./Source/dom/style/Blur.js");
/* harmony import */ var _Fill__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Fill */ "./Source/dom/style/Fill.js");
/* harmony import */ var _Border__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Border */ "./Source/dom/style/Border.js");
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Text */ "./Source/dom/style/Text.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }














var BlendingModeMap = {
  Normal: 0,
  Darken: 1,
  Multiply: 2,
  ColorBurn: 3,
  Lighten: 4,
  Screen: 5,
  ColorDodge: 6,
  Overlay: 7,
  SoftLight: 8,
  HardLight: 9,
  Difference: 10,
  Exclusion: 11,
  Hue: 12,
  Saturation: 13,
  Color: 14,
  Luminosity: 15
};
var BlendingMode = {
  Normal: 'Normal',
  Darken: 'Darken',
  Multiply: 'Multiply',
  ColorBurn: 'ColorBurn',
  Lighten: 'Lighten',
  Screen: 'Screen',
  ColorDodge: 'ColorDodge',
  Overlay: 'Overlay',
  SoftLight: 'SoftLight',
  HardLight: 'HardLight',
  Difference: 'Difference',
  Exclusion: 'Exclusion',
  Hue: 'Hue',
  Saturation: 'Saturation',
  Color: 'Color',
  Luminosity: 'Luminosity'
};
var DEFAULT_STYLE = {
  fills: []
};
var StyleTypeMap = {
  1: 'Layer',
  2: 'Text'
};
var StyleType = {
  Layer: 'Layer',
  Text: 'Text'
  /**
   * Represents a Sketch layer style.
   */

};
var Style =
/*#__PURE__*/
function (_WrappedObject) {
  _inherits(Style, _WrappedObject);

  /**
   * Make a new style object.
   *
   * @param [Object] properties - The properties to set on the object as a JSON object.
   *                              If `sketchObject` is provided, will wrap it.
   *                              Otherwise, creates a new native object.
   */
  function Style() {
    var style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Style);

    if (!style.sketchObject) {
      // eslint-disable-next-line no-param-reassign
      style = Object.assign({}, DEFAULT_STYLE, style); // eslint-disable-next-line no-param-reassign

      style.sketchObject = MSDefaultStyle.defaultStyle();
    }

    return _possibleConstructorReturn(this, _getPrototypeOf(Style).call(this, style));
  }

  _createClass(Style, [{
    key: "isOutOfSyncWithSharedStyle",
    value: function isOutOfSyncWithSharedStyle(sharedStyle) {
      return !!Object(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_3__["wrapObject"])(sharedStyle).sketchObject.isOutOfSyncWithInstance(this._object);
    }
  }, {
    key: "syncWithSharedStyle",
    value: function syncWithSharedStyle(sharedStyle) {
      this._object.syncWithTemplateInstance(Object(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_3__["wrapObject"])(sharedStyle).style.sketchObject);
    }
  }, {
    key: "getParentLayer",
    value: function getParentLayer() {
      if (this._object.parentLayer) {
        return Object(_wrapNativeObject__WEBPACK_IMPORTED_MODULE_3__["wrapObject"])(this._object.parentLayer());
      }

      return null;
    }
  }, {
    key: "getDefaultLineHeight",
    value: function getDefaultLineHeight() {
      if (!this._object.parentLayer) {
        return undefined;
      }

      var layer = this._object.parentLayer();

      if (!layer) {
        return undefined;
      }

      var className = String(layer.class());

      if (className !== 'MSTextLayer' && className !== 'MSImmutableTextLayer') {
        return undefined;
      }

      var immutableLayer = className === 'MSImmutableTextLayer' ? layer : layer.immutableModelObject();
      var storage = immutableLayer.createTextStorage();
      var layoutManager = storage.layoutManagers().firstObject();
      return Number(immutableLayer.defaultLineHeight(layoutManager));
    }
  }], [{
    key: "colorFromString",
    value: function colorFromString(color) {
      return Object(_Color__WEBPACK_IMPORTED_MODULE_6__["colorFromString"])(color);
    }
  }, {
    key: "colorToString",
    value: function colorToString(value) {
      return Object(_Color__WEBPACK_IMPORTED_MODULE_6__["colorToString"])(value);
    }
  }]);

  return Style;
}(_WrappedObject__WEBPACK_IMPORTED_MODULE_1__["WrappedObject"]);
Style.type = _enums__WEBPACK_IMPORTED_MODULE_4__["Types"].Style;
Style[_WrappedObject__WEBPACK_IMPORTED_MODULE_1__["DefinedPropertiesKey"]] = _objectSpread({}, _WrappedObject__WEBPACK_IMPORTED_MODULE_1__["WrappedObject"][_WrappedObject__WEBPACK_IMPORTED_MODULE_1__["DefinedPropertiesKey"]]);
_Factory__WEBPACK_IMPORTED_MODULE_2__["Factory"].registerClass(Style, MSStyle);
Style.GradientType = _Gradient__WEBPACK_IMPORTED_MODULE_5__["GradientType"];
Style.define('opacity', {
  get: function get() {
    return this._object.contextSettings().opacity();
  },
  set: function set(opacity) {
    this._object.contextSettings().setOpacity(Math.min(Math.max(opacity, 0), 1));
  }
});
Style.BlendingMode = BlendingMode;
Style.define('blendingMode', {
  get: function get() {
    var mode = this._object.contextSettings().blendMode();

    return Object.keys(BlendingModeMap).find(function (key) {
      return BlendingModeMap[key] === mode;
    }) || mode;
  },
  set: function set(mode) {
    var blendingMode = BlendingModeMap[mode];

    this._object.contextSettings().setBlendMode(typeof blendingMode !== 'undefined' ? blendingMode : mode);
  }
});
Style.Arrowhead = _BorderOptions__WEBPACK_IMPORTED_MODULE_8__["Arrowhead"];
Style.LineEnd = _BorderOptions__WEBPACK_IMPORTED_MODULE_8__["LineEnd"];
Style.LineJoin = _BorderOptions__WEBPACK_IMPORTED_MODULE_8__["LineJoin"];
Style.define('borderOptions', {
  get: function get() {
    return _BorderOptions__WEBPACK_IMPORTED_MODULE_8__["BorderOptions"].fromNative(this._object);
  },
  set: function set(borderOptions) {
    _BorderOptions__WEBPACK_IMPORTED_MODULE_8__["BorderOptions"].updateNative(this._object, borderOptions);
  }
});
Style.BlurType = _Blur__WEBPACK_IMPORTED_MODULE_9__["BlurType"];
Style.define('blur', {
  get: function get() {
    return _Blur__WEBPACK_IMPORTED_MODULE_9__["Blur"].fromNative(this._object.blur());
  },
  set: function set(blur) {
    _Blur__WEBPACK_IMPORTED_MODULE_9__["Blur"].updateNative(this._object.blur(), blur);
  }
});
Style.FillType = _Fill__WEBPACK_IMPORTED_MODULE_10__["FillType"];
Style.PatternFillType = _Fill__WEBPACK_IMPORTED_MODULE_10__["PatternFillType"];
Style.NoiseType = _Fill__WEBPACK_IMPORTED_MODULE_10__["NoiseType"];
Style.define('fills', {
  array: true,
  get: function get() {
    var fills = Object(util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(this._object.fills());
    return fills.map(_Fill__WEBPACK_IMPORTED_MODULE_10__["Fill"].fromNative.bind(_Fill__WEBPACK_IMPORTED_MODULE_10__["Fill"]));
  },
  set: function set(values) {
    var objects = values.map(_Fill__WEBPACK_IMPORTED_MODULE_10__["Fill"].toNative.bind(_Fill__WEBPACK_IMPORTED_MODULE_10__["Fill"]));

    this._object.setFills(objects);
  },
  insertItem: function insertItem(item, index) {
    var arr = Object(util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(this._object.fills());
    arr.splice(index, 0, item);
    this.fills = arr;
    return _Fill__WEBPACK_IMPORTED_MODULE_10__["Fill"].fromNative(_Fill__WEBPACK_IMPORTED_MODULE_10__["Fill"].toNative(item));
  },
  removeItem: function removeItem(index) {
    var arr = Object(util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(this._object.fills());
    var removed = arr.splice(index, 1);
    this.fills = arr;
    return _Fill__WEBPACK_IMPORTED_MODULE_10__["Fill"].fromNative(removed[0]);
  }
});
Style.BorderPosition = _Border__WEBPACK_IMPORTED_MODULE_11__["BorderPosition"];
Style.define('borders', {
  array: true,
  get: function get() {
    var borders = Object(util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(this._object.borders());
    return borders.map(_Border__WEBPACK_IMPORTED_MODULE_11__["Border"].fromNative.bind(_Border__WEBPACK_IMPORTED_MODULE_11__["Border"]));
  },
  set: function set(values) {
    var objects = values.map(_Border__WEBPACK_IMPORTED_MODULE_11__["Border"].toNative.bind(_Border__WEBPACK_IMPORTED_MODULE_11__["Border"]));

    this._object.setBorders(objects);
  },
  insertItem: function insertItem(item, index) {
    var arr = Object(util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(this._object.borders());
    arr.splice(index, 0, item);
    this.borders = arr;
    return _Border__WEBPACK_IMPORTED_MODULE_11__["Border"].fromNative(_Border__WEBPACK_IMPORTED_MODULE_11__["Border"].toNative(item));
  },
  removeItem: function removeItem(index) {
    var arr = Object(util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(this._object.borders());
    var removed = arr.splice(index, 1);
    this.borders = arr;
    return _Border__WEBPACK_IMPORTED_MODULE_11__["Border"].fromNative(removed[0]);
  }
});
Style.define('shadows', {
  array: true,
  get: function get() {
    return Object(util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(this._object.shadows()).map(_Shadow__WEBPACK_IMPORTED_MODULE_7__["Shadow"].fromNative.bind(_Shadow__WEBPACK_IMPORTED_MODULE_7__["Shadow"]));
  },
  set: function set(values) {
    var objects = values.map(_Shadow__WEBPACK_IMPORTED_MODULE_7__["Shadow"].toNative.bind(_Shadow__WEBPACK_IMPORTED_MODULE_7__["Shadow"], MSStyleShadow));

    this._object.setShadows(objects);
  },
  insertItem: function insertItem(item, index) {
    var arr = Object(util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(this._object.shadows());
    arr.splice(index, 0, item);
    this.shadows = arr;
    return _Shadow__WEBPACK_IMPORTED_MODULE_7__["Shadow"].fromNative(_Shadow__WEBPACK_IMPORTED_MODULE_7__["Shadow"].toNative(MSStyleShadow, item));
  },
  removeItem: function removeItem(index) {
    var arr = Object(util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(this._object.shadows());
    var removed = arr.splice(index, 1);
    this.shadows = arr;
    return _Shadow__WEBPACK_IMPORTED_MODULE_7__["Shadow"].fromNative(removed[0]);
  }
});
Style.define('innerShadows', {
  array: true,
  get: function get() {
    return Object(util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(this._object.innerShadows()).map(_Shadow__WEBPACK_IMPORTED_MODULE_7__["Shadow"].fromNative.bind(_Shadow__WEBPACK_IMPORTED_MODULE_7__["Shadow"]));
  },
  set: function set(values) {
    var objects = values.map(_Shadow__WEBPACK_IMPORTED_MODULE_7__["Shadow"].toNative.bind(_Shadow__WEBPACK_IMPORTED_MODULE_7__["Shadow"], MSStyleInnerShadow));

    this._object.setInnerShadows(objects);
  },
  insertItem: function insertItem(item, index) {
    var arr = Object(util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(this._object.innerShadows());
    arr.splice(index, 0, item);
    this.innerShadows = arr;
    return _Shadow__WEBPACK_IMPORTED_MODULE_7__["Shadow"].fromNative(_Shadow__WEBPACK_IMPORTED_MODULE_7__["Shadow"].toNative(MSStyleInnerShadow, item));
  },
  removeItem: function removeItem(index) {
    var arr = Object(util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(this._object.innerShadows());
    var removed = arr.splice(index, 1);
    this.innerShadows = arr;
    return _Shadow__WEBPACK_IMPORTED_MODULE_7__["Shadow"].fromNative(removed[0]);
  }
});
Style.StyleType = StyleType;
Style.define('styleType', {
  get: function get() {
    return this._object.textStyle() && this._object.textStyle().attributes()[NSFontAttributeName] ? StyleType.Text : StyleType.Layer;
  }
});
Object(_Text__WEBPACK_IMPORTED_MODULE_12__["defineTextStyleProperties"])(Style);

/***/ }),

/***/ "./Source/dom/style/Text.js":
/*!**********************************!*\
  !*** ./Source/dom/style/Text.js ***!
  \**********************************/
/*! exports provided: TextAlignmentMap, VerticalTextAlignmentMap, defineTextStyleProperties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextAlignmentMap", function() { return TextAlignmentMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerticalTextAlignmentMap", function() { return VerticalTextAlignmentMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineTextStyleProperties", function() { return defineTextStyleProperties; });
/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Color */ "./Source/dom/style/Color.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./Source/dom/utils.js");


var TextAlignmentMap = {
  left: 0,
  // Visually left aligned
  right: 1,
  // Visually right aligned
  center: 2,
  // Visually centered
  justified: 3,
  // Fully-justified. The last line in a paragraph is natural-aligned.
  natural: 4 // Indicates the default alignment for script

};
var TextAlignmentReverseMap = {
  0: 'left',
  // Visually left aligned
  1: 'right',
  // Visually right aligned
  2: 'center',
  // Visually centered
  3: 'justified',
  // Fully-justified. The last line in a paragraph is natural-aligned.
  4: 'left' // Indicates the default alignment for script

};
var VerticalTextAlignmentMap = {
  top: 0,
  // Visually top aligned
  center: 1,
  // Visually centered
  bottom: 2 // Visually bottom aligned

};
var VerticalTextAlignmentReverseMap = {
  0: 'top',
  // Visually top aligned
  1: 'center',
  // Visually centered
  2: 'bottom' // Visually bottom aligned

};

function getAttributes(_object) {
  var textStyle = _object.textStyle();

  if (!textStyle) {
    return undefined;
  }

  var attributes = textStyle.attributes();
  return attributes;
}

function getParagraphStyle(_object) {
  var attributes = getAttributes(_object);

  if (!attributes) {
    return undefined;
  }

  var paragraphStyle = attributes[NSParagraphStyleAttributeName];

  if (!paragraphStyle) {
    paragraphStyle = NSParagraphStyle.defaultParagraphStyle();
  }

  return paragraphStyle;
}

function updateAttributes(_object, fn) {
  var textStyle = _object.textStyle();

  if (!textStyle) {
    textStyle = MSTextStyle.styleWithAttributes(MSDefaultTextStyle.defaultTextStyle());

    _object.setTextStyle(textStyle);
  }

  var attributes = getAttributes(_object);
  attributes = fn(attributes.mutableCopy());
  textStyle.setAttributes(attributes);
}

function updateParagraphStyle(_object, fn) {
  updateAttributes(_object, function (attributes) {
    var paragraphStyle = attributes[NSParagraphStyleAttributeName];

    if (!paragraphStyle) {
      paragraphStyle = NSParagraphStyle.defaultParagraphStyle();
    }

    paragraphStyle = fn(paragraphStyle.mutableCopy()); // eslint-disable-next-line

    attributes[NSParagraphStyleAttributeName] = paragraphStyle;
    return attributes;
  });
}
/* eslint-disable no-bitwise */


function hasTrait(mask, trait) {
  return (mask & trait) == trait;
}

var UNDERLINE_TRAIT = {
  none: 0,
  // NSUnderlineStyleNone
  solid: 0,
  // NSUnderlineStylePatternSolid
  double: 9,
  // NSUnderlineStyleDouble
  thick: 2,
  // NSUnderlineStyleThick
  single: 1,
  // NSUnderlineStyleSingle
  'dash-dot-dot': 1024,
  // NSUnderlineStylePatternDashDotDot
  'dash-dot': 768,
  // NSUnderlineStylePatternDashDot
  dash: 512,
  // NSUnderlineStylePatternDash
  dot: 256,
  // NSUnderlineStylePatternDot
  'by-word': 32768 // NSUnderlineStyleByWord

};

function getUnderline(underline) {
  if (!underline) {
    return undefined;
  }

  var traits = [];

  if (hasTrait(underline, UNDERLINE_TRAIT.double)) {
    traits.push('double');
  } else if (hasTrait(underline, UNDERLINE_TRAIT.thick)) {
    traits.push('thick');
  } else if (hasTrait(underline, UNDERLINE_TRAIT.single)) {
    traits.push('single');
  }

  if (hasTrait(underline, UNDERLINE_TRAIT['dash-dot-dot'])) {
    traits.push('dash-dot-dot');
  } else if (hasTrait(underline, UNDERLINE_TRAIT['dash-dot'])) {
    traits.push('dash-dot');
  } else if (hasTrait(underline, UNDERLINE_TRAIT.dash)) {
    traits.push('dash');
  } else if (hasTrait(underline, UNDERLINE_TRAIT.dot)) {
    traits.push('dot');
  }

  if (hasTrait(underline, UNDERLINE_TRAIT['by-word'])) {
    traits.push('by-word');
  }

  if (!traits.length) {
    return undefined;
  }

  return traits.join(' ');
}

function getTrait(trait) {
  var nativeTrait = UNDERLINE_TRAIT[trait];

  if (!nativeTrait) {
    throw new Error("unknown underline trait ".concat(trait));
  }

  return nativeTrait;
}

function getUnderlineMask(underline) {
  if (!underline || underline === 'none') {
    return UNDERLINE_TRAIT.none;
  }

  var traits = underline.split(' ');
  var mask = getTrait(traits[0]);
  traits.forEach(function (trait, i) {
    if (i === 0) {
      // already used to init
      return;
    }

    mask |= getTrait(trait);
  });
  return mask;
}
/* eslint-enable */


function defineTextStyleProperties(Style) {
  Style.define('alignment', {
    get: function get() {
      var paragraphStyle = getParagraphStyle(this._object);

      if (!paragraphStyle) {
        return undefined;
      }

      var raw = paragraphStyle.alignment();
      return TextAlignmentReverseMap[raw] || raw;
    },
    set: function set(mode) {
      if (this.isImmutable()) {
        return;
      }

      updateParagraphStyle(this._object, function (paragraphStyle) {
        var translated = TextAlignmentMap[mode];
        paragraphStyle.setAlignment(typeof translated !== 'undefined' ? translated : mode);
        return paragraphStyle;
      });
    }
  });
  Style.define('verticalAlignment', {
    get: function get() {
      var textStyle = this._object.textStyle();

      if (!textStyle) {
        return undefined;
      }

      var raw = textStyle.verticalAlignment();
      return VerticalTextAlignmentReverseMap[raw] || raw;
    },
    set: function set(mode) {
      if (this.isImmutable()) {
        return;
      }

      var textStyle = this._object.textStyle();

      if (!textStyle) {
        textStyle = MSTextStyle.styleWithAttributes({});

        this._object.setTextStyle(textStyle);
      }

      var translated = VerticalTextAlignmentMap[mode];
      textStyle.verticalAlignment = typeof translated !== 'undefined' ? translated : mode;
    }
  });
  Style.define('kerning', {
    get: function get() {
      var attributes = getAttributes(this._object);

      if (!attributes) {
        return undefined;
      }

      var raw = attributes[NSKernAttributeName];

      if (raw === null) {
        return null;
      }

      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["FloatingPointNumber"])(raw);
    },
    set: function set(kerning) {
      if (this.isImmutable()) {
        return;
      }

      updateAttributes(this._object, function (attributes) {
        // eslint-disable-next-line no-param-reassign
        attributes[NSKernAttributeName] = kerning;
        return attributes;
      });
    }
  });
  Style.define('lineHeight', {
    get: function get() {
      var paragraphStyle = getParagraphStyle(this._object);

      if (!paragraphStyle) {
        return undefined;
      }

      var fixedLineHeight = paragraphStyle.minimumLineHeight();

      if (fixedLineHeight > 0 && fixedLineHeight == paragraphStyle.maximumLineHeight()) {
        return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["FloatingPointNumber"])(fixedLineHeight);
      }

      return null;
    },
    set: function set(lineHeight) {
      if (this.isImmutable()) {
        return;
      }

      updateParagraphStyle(this._object, function (paragraphStyle) {
        // eslint-disable-next-line no-param-reassign
        paragraphStyle.minimumLineHeight = lineHeight; // eslint-disable-next-line no-param-reassign

        paragraphStyle.maximumLineHeight = lineHeight; // eslint-disable-next-line no-param-reassign

        paragraphStyle.lineSpacing = 0;
        return paragraphStyle;
      });
    }
  });
  Style.define('paragraphSpacing', {
    get: function get() {
      var paragraphStyle = getParagraphStyle(this._object);

      if (!paragraphStyle) {
        return undefined;
      }

      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["FloatingPointNumber"])(paragraphStyle.paragraphSpacing());
    },
    set: function set(paragraphSpacing) {
      if (this.isImmutable()) {
        return;
      }

      updateParagraphStyle(this._object, function (paragraphStyle) {
        // eslint-disable-next-line no-param-reassign
        paragraphStyle.paragraphSpacing = paragraphSpacing; // eslint-disable-next-line no-param-reassign

        paragraphStyle.lineSpacing = paragraphSpacing;
        return paragraphStyle;
      });
    }
  });
  Style.define('textColor', {
    get: function get() {
      var attributes = getAttributes(this._object);

      if (!attributes) {
        return undefined;
      }

      var raw = attributes.MSAttributedStringColorAttribute;
      return _Color__WEBPACK_IMPORTED_MODULE_0__["Color"].from(raw || '#000000FF').toString();
    },
    set: function set(color) {
      if (this.isImmutable()) {
        return;
      }

      var _color = _Color__WEBPACK_IMPORTED_MODULE_0__["Color"].from(color);

      updateAttributes(this._object, function (attributes) {
        // eslint-disable-next-line no-param-reassign
        attributes.MSAttributedStringColorAttribute = _color.toMSImmutableColor();
        return attributes;
      });
    }
  });
  Style.define('fontSize', {
    get: function get() {
      var attributes = getAttributes(this._object);

      if (!attributes) {
        return undefined;
      }

      var font = attributes[NSFontAttributeName];

      if (!font) {
        return undefined;
      }

      return Number(font.pointSize());
    },
    set: function set(fontSize) {
      if (this.isImmutable()) {
        return;
      }

      updateAttributes(this._object, function (attributes) {
        var font = attributes[NSFontAttributeName];
        var newFont = NSFontManager.sharedFontManager().convertFont_toSize(font, fontSize);

        if (!newFont) {
          return attributes;
        } // eslint-disable-next-line no-param-reassign


        attributes[NSFontAttributeName] = newFont;
        return attributes;
      });
    }
  });
  Style.define('textTransform', {
    get: function get() {
      var attributes = getAttributes(this._object);

      if (!attributes) {
        return undefined;
      }

      var transform = attributes.MSAttributedStringTextTransformAttribute;

      if (!transform) {
        return 'none';
      }

      if (transform == 1) {
        return 'uppercase';
      }

      if (transform == 2) {
        return 'lowercase';
      }

      return undefined;
    },
    set: function set(transform) {
      if (this.isImmutable()) {
        return;
      }

      var _transform = String(transform);

      var attribute = null;

      if (_transform === 'uppercase') {
        attribute = 1;
      } else if (_transform === 'lowercase') {
        attribute = 2;
      } else if (_transform !== 'none' && transform) {
        attribute = transform;
      }

      updateAttributes(this._object, function (attributes) {
        // eslint-disable-next-line no-param-reassign
        attributes.MSAttributedStringTextTransformAttribute = attribute;
        return attributes;
      });
    }
  });
  Style.define('fontFamily', {
    get: function get() {
      var attributes = getAttributes(this._object);

      if (!attributes) {
        return undefined;
      }

      var font = attributes[NSFontAttributeName];

      if (!font) {
        return undefined;
      }

      var fontFamily = String(font.familyName());

      if (fontFamily === '.SF NS Text') {
        return 'system';
      }

      return fontFamily;
    },
    set: function set(fontFamily) {
      if (this.isImmutable()) {
        return;
      }

      updateAttributes(this._object, function (attributes) {
        var font = attributes[NSFontAttributeName];

        if (fontFamily === 'system') {
          var systemFont = NSFont.systemFontOfSize(16); // eslint-disable-next-line no-param-reassign

          fontFamily = systemFont.familyName();
        }

        var newFont = NSFontManager.sharedFontManager().convertFont_toFamily(font, fontFamily);

        if (!newFont) {
          return attributes;
        } // eslint-disable-next-line no-param-reassign


        attributes[NSFontAttributeName] = newFont;
        return attributes;
      });
    }
  });
  Style.define('fontWeight', {
    get: function get() {
      var attributes = getAttributes(this._object);

      if (!attributes) {
        return undefined;
      }

      var font = attributes[NSFontAttributeName];

      if (!font) {
        return undefined;
      }

      return Number(NSFontManager.sharedFontManager().weightOfFont(font));
    },
    set: function set(fontWeight) {
      if (this.isImmutable()) {
        return;
      }

      updateAttributes(this._object, function (attributes) {
        var font = attributes[NSFontAttributeName];
        var manager = NSFontManager.sharedFontManager(); // remove the bold trait so that we can actually change the weight

        font = manager.convertFont_toNotHaveTrait(font, NSBoldFontMask);
        var newFont = manager.fontWithFamily_traits_weight_size(font.familyName(), manager.traitsOfFont(font), fontWeight, font.pointSize());

        if (!newFont) {
          return attributes;
        } // eslint-disable-next-line no-param-reassign


        attributes[NSFontAttributeName] = newFont;
        return attributes;
      });
    }
  });
  Style.define('fontStyle', {
    get: function get() {
      var attributes = getAttributes(this._object);

      if (!attributes) {
        return undefined;
      }

      var font = attributes[NSFontAttributeName];

      if (!font) {
        return undefined;
      }

      return NSFontManager.sharedFontManager().fontNamed_hasTraits(font.fontName(), NSItalicFontMask) ? 'italic' : undefined;
    },
    set: function set(fontStyle) {
      if (this.isImmutable()) {
        return;
      }

      updateAttributes(this._object, function (attributes) {
        var font = attributes[NSFontAttributeName];
        var manager = NSFontManager.sharedFontManager();
        var newFont;

        if (fontStyle === 'normal' || !fontStyle) {
          newFont = manager.convertFont_toNotHaveTrait(font, NSItalicFontMask);
        } else if (fontStyle === 'italic' || fontStyle === 'oblique') {
          newFont = manager.convertFont_toHaveTrait(font, NSItalicFontMask);
        } else {
          throw new Error('Unknown font style');
        }

        if (!newFont) {
          return attributes;
        } // eslint-disable-next-line no-param-reassign


        attributes[NSFontAttributeName] = newFont;
        return attributes;
      });
    }
  });
  Style.define('fontVariant', {
    get: function get() {
      var attributes = getAttributes(this._object);

      if (!attributes) {
        return undefined;
      }

      var font = attributes[NSFontAttributeName];

      if (!font) {
        return undefined;
      }

      return NSFontManager.sharedFontManager().fontNamed_hasTraits(font.fontName(), NSSmallCapsFontMask) ? 'small-caps' : undefined;
    },
    set: function set(fontVariant) {
      if (this.isImmutable()) {
        return;
      }

      updateAttributes(this._object, function (attributes) {
        var font = attributes[NSFontAttributeName];
        var manager = NSFontManager.sharedFontManager();
        var newFont;

        if (fontVariant === 'normal' || !fontVariant) {
          newFont = manager.convertFont_toNotHaveTrait(font, NSSmallCapsFontMask);
        } else if (fontVariant === 'small-caps') {
          newFont = manager.convertFont_toHaveTrait(font, NSSmallCapsFontMask);
        } else {
          throw new Error('Unknown font variant');
        }

        if (!newFont) {
          return attributes;
        } // eslint-disable-next-line no-param-reassign


        attributes[NSFontAttributeName] = newFont;
        return attributes;
      });
    }
  });
  Style.define('fontStretch', {
    get: function get() {
      var attributes = getAttributes(this._object);

      if (!attributes) {
        return undefined;
      }

      var font = attributes[NSFontAttributeName];

      if (!font) {
        return undefined;
      }

      var traits = NSFontManager.sharedFontManager().traitsOfFont(font);

      if (hasTrait(traits, NSCompressedFontMask)) {
        return 'compressed';
      }

      if (hasTrait(traits, NSCondensedFontMask)) {
        return 'condensed';
      }

      if (hasTrait(traits, NSExpandedFontMask)) {
        return 'expanded';
      }

      if (hasTrait(traits, NSNarrowFontMask)) {
        return 'narrow';
      }

      if (hasTrait(traits, NSPosterFontMask)) {
        return 'poster';
      }

      return undefined;
    },
    set: function set(fontVariant) {
      if (this.isImmutable()) {
        return;
      }

      updateAttributes(this._object, function (attributes) {
        var font = attributes[NSFontAttributeName];
        var manager = NSFontManager.sharedFontManager();
        var newFont;

        if (fontVariant === 'normal' || !fontVariant) {
          /* eslint-disable no-bitwise */
          newFont = manager.convertFont_toNotHaveTrait(font, NSCompressedFontMask | NSCondensedFontMask | NSExpandedFontMask | NSNarrowFontMask | NSPosterFontMask);
          /* eslint-enable */
        } else if (fontVariant === 'compressed') {
          newFont = manager.convertFont_toHaveTrait(font, NSCompressedFontMask);
        } else if (fontVariant === 'condensed') {
          newFont = manager.convertFont_toHaveTrait(font, NSCondensedFontMask);
        } else if (fontVariant === 'expanded') {
          newFont = manager.convertFont_toHaveTrait(font, NSExpandedFontMask);
        } else if (fontVariant === 'narrow') {
          newFont = manager.convertFont_toHaveTrait(font, NSNarrowFontMask);
        } else if (fontVariant === 'poster') {
          newFont = manager.convertFont_toHaveTrait(font, NSPosterFontMask);
        } else {
          throw new Error('Unknown font stretch');
        }

        if (!newFont) {
          return attributes;
        } // eslint-disable-next-line no-param-reassign


        attributes[NSFontAttributeName] = newFont;
        return attributes;
      });
    }
  });
  Style.define('textUnderline', {
    get: function get() {
      var attributes = getAttributes(this._object);

      if (!attributes) {
        return undefined;
      }

      return getUnderline(attributes[NSUnderlineStyleAttributeName]);
    },
    set: function set(textUnderline) {
      if (this.isImmutable()) {
        return;
      }

      updateAttributes(this._object, function (attributes) {
        // eslint-disable-next-line no-param-reassign
        attributes[NSUnderlineStyleAttributeName] = getUnderlineMask(textUnderline);
        return attributes;
      });
    }
  });
  Style.define('textStrikethrough', {
    get: function get() {
      var attributes = getAttributes(this._object);

      if (!attributes) {
        return undefined;
      }

      return getUnderline(attributes[NSStrikethroughStyleAttributeName]);
    },
    set: function set(textStrikethrough) {
      if (this.isImmutable()) {
        return;
      }

      updateAttributes(this._object, function (attributes) {
        // eslint-disable-next-line no-param-reassign
        attributes[NSStrikethroughStyleAttributeName] = getUnderlineMask(textStrikethrough);
        return attributes;
      });
    }
  });
}

/***/ }),

/***/ "./Source/dom/style/__tests__/Blur.test.js":
/*!*************************************************!*\
  !*** ./Source/dom/style/__tests__/Blur.test.js ***!
  \*************************************************/
/*! exports provided: tests, logs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(expect) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tests", function() { return __skpm_tests__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logs", function() { return __skpm_logs__; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.. */ "./Source/dom/index.js");
/* globals expect, test */

var __skpm_logs__ = [];
var __skpm_console_log__ = console.log;

var __hookedLogs = function __hookedLogs(string) {
  __skpm_logs__.push(string);

  return __skpm_console_log__(string);
};

var __skpm_tests__ = {};

var test = function test(description, fn) {
  function withLogs(context, document) {
    console.log = __hookedLogs;
    return fn(context, document);
  }

  __skpm_tests__[description] = withLogs;
};

test.only = function (description, fn) {
  fn.only = true;
  return test(description, fn);
};

test.skip = function (description, fn) {
  fn.skipped = true;
  return test(description, fn);
};


test('should change the blur', function () {
  var style = new ___WEBPACK_IMPORTED_MODULE_0__["Style"]();
  expect(style.blur.toJSON()).toEqual({
    center: {
      x: 0.5,
      y: 0.5
    },
    motionAngle: 0,
    radius: 10,
    enabled: false,
    blurType: 'Gaussian'
  });
  style.blur = {
    center: {
      x: 2,
      y: 6
    },
    motionAngle: 5,
    radius: 20,
    enabled: true,
    blurType: ___WEBPACK_IMPORTED_MODULE_0__["Style"].BlurType.Zoom
  };
  expect(style.blur.toJSON()).toEqual({
    center: {
      x: 2,
      y: 6
    },
    motionAngle: 5,
    radius: 20,
    enabled: true,
    blurType: 'Zoom'
  });
  style.blur.motionAngle = 10;
  expect(style.blur.toJSON()).toEqual({
    center: {
      x: 2,
      y: 6
    },
    motionAngle: 10,
    radius: 20,
    enabled: true,
    blurType: 'Zoom'
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@skpm/test-runner/expect/index.js */ "./node_modules/@skpm/test-runner/expect/index.js")))

/***/ }),

/***/ "./Source/dom/style/__tests__/Border.test.js":
/*!***************************************************!*\
  !*** ./Source/dom/style/__tests__/Border.test.js ***!
  \***************************************************/
/*! exports provided: tests, logs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(expect) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tests", function() { return __skpm_tests__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logs", function() { return __skpm_logs__; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.. */ "./Source/dom/index.js");
/* globals expect, test */

var __skpm_logs__ = [];
var __skpm_console_log__ = console.log;

var __hookedLogs = function __hookedLogs(string) {
  __skpm_logs__.push(string);

  return __skpm_console_log__(string);
};

var __skpm_tests__ = {};

var test = function test(description, fn) {
  function withLogs(context, document) {
    console.log = __hookedLogs;
    return fn(context, document);
  }

  __skpm_tests__[description] = withLogs;
};

test.only = function (description, fn) {
  fn.only = true;
  return test(description, fn);
};

test.skip = function (description, fn) {
  fn.skipped = true;
  return test(description, fn);
};


test('should set the borders', function () {
  // setting the borders after creation
  var style = new ___WEBPACK_IMPORTED_MODULE_0__["Style"](); // check that a style can be logged

  log(style);
  style.borders = ['#11223344', '#1234'];
  expect(style.sketchObject.borders().count()).toBe(2); // setting the borders during creation

  var style2 = new ___WEBPACK_IMPORTED_MODULE_0__["Style"]({
    borders: ['#11223344', '#1234']
  });
  expect(style2.sketchObject.borders().count()).toBe(2); // setting the borders as an array of object

  var style3 = new ___WEBPACK_IMPORTED_MODULE_0__["Style"]({
    borders: [{
      color: '#11223344',
      thickness: 30
    }, {
      color: '#1234',
      position: ___WEBPACK_IMPORTED_MODULE_0__["Style"].BorderPosition.Outside
    }, {
      gradient: {
        stops: [{
          position: 0,
          color: '#1234'
        }, {
          position: 0.5,
          color: '#0000'
        }, {
          position: 0,
          color: '#1234'
        }]
      }
    }]
  });
  expect(style3.sketchObject.borders().count()).toBe(3);
});
test('should get the borders', function () {
  var style = new ___WEBPACK_IMPORTED_MODULE_0__["Style"]();
  style.borders = [{
    color: '#11223344',
    thickness: 30
  }, {
    color: '#1234',
    position: ___WEBPACK_IMPORTED_MODULE_0__["Style"].BorderPosition.Outside
  }, {
    gradient: {
      stops: [{
        position: 0,
        color: '#1234'
      }, {
        position: 0.5,
        color: '#0000'
      }, {
        position: 1,
        color: '#1234'
      }]
    }
  }];
  expect(style.borders[0].toJSON()).toEqual({
    color: '#11223344',
    fillType: 'Color',
    position: 'Center',
    thickness: 30,
    enabled: true,
    gradient: {
      gradientType: 'Linear',
      from: {
        x: 0.5,
        y: 0
      },
      to: {
        x: 0.5,
        y: 1
      },
      stops: [{
        position: 0,
        color: '#ffffffff'
      }, {
        position: 1,
        color: '#000000ff'
      }]
    }
  });
  expect(style.borders[1].toJSON()).toEqual({
    color: '#11223344',
    fillType: 'Color',
    position: 'Outside',
    thickness: 1,
    enabled: true,
    gradient: {
      gradientType: 'Linear',
      from: {
        x: 0.5,
        y: 0
      },
      to: {
        x: 0.5,
        y: 1
      },
      stops: [{
        position: 0,
        color: '#ffffffff'
      }, {
        position: 1,
        color: '#000000ff'
      }]
    }
  });
  expect(style.borders[2].gradient.toJSON()).toEqual({
    gradientType: 'Linear',
    from: {
      x: 0.5,
      y: 0
    },
    to: {
      x: 0.5,
      y: 1
    },
    stops: [{
      position: 0,
      color: '#11223344'
    }, {
      position: 0.5,
      color: '#00000000'
    }, {
      position: 1,
      color: '#11223344'
    }]
  });
}); // https://github.com/BohemianCoding/SketchAPI/issues/230

test('should set the borders with 0s', function () {
  var style = new ___WEBPACK_IMPORTED_MODULE_0__["Style"]({
    borders: [{
      color: '#11223344',
      thickness: 0
    }]
  });
  expect(style.borders[0].thickness).toBe(0);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@skpm/test-runner/expect/index.js */ "./node_modules/@skpm/test-runner/expect/index.js")))

/***/ }),

/***/ "./Source/dom/style/__tests__/BorderOptions.test.js":
/*!**********************************************************!*\
  !*** ./Source/dom/style/__tests__/BorderOptions.test.js ***!
  \**********************************************************/
/*! exports provided: tests, logs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(expect) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tests", function() { return __skpm_tests__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logs", function() { return __skpm_logs__; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.. */ "./Source/dom/index.js");
/* globals expect, test */

var __skpm_logs__ = [];
var __skpm_console_log__ = console.log;

var __hookedLogs = function __hookedLogs(string) {
  __skpm_logs__.push(string);

  return __skpm_console_log__(string);
};

var __skpm_tests__ = {};

var test = function test(description, fn) {
  function withLogs(context, document) {
    console.log = __hookedLogs;
    return fn(context, document);
  }

  __skpm_tests__[description] = withLogs;
};

test.only = function (description, fn) {
  fn.only = true;
  return test(description, fn);
};

test.skip = function (description, fn) {
  fn.skipped = true;
  return test(description, fn);
};


test('should change the border options', function () {
  var style = new ___WEBPACK_IMPORTED_MODULE_0__["Style"]();
  expect(style.borderOptions.toJSON()).toEqual({
    startArrowhead: 'None',
    endArrowhead: 'None',
    dashPattern: [],
    lineEnd: 'Butt',
    lineJoin: 'Miter'
  });
  style.borderOptions = {
    startArrowhead: ___WEBPACK_IMPORTED_MODULE_0__["Style"].Arrowhead.OpenArrow,
    endArrowhead: ___WEBPACK_IMPORTED_MODULE_0__["Style"].Arrowhead.FilledArrow,
    dashPattern: [20, 5],
    lineEnd: ___WEBPACK_IMPORTED_MODULE_0__["Style"].LineEnd.Round,
    lineJoin: ___WEBPACK_IMPORTED_MODULE_0__["Style"].LineJoin.Bevel
  };
  expect(style.borderOptions.toJSON()).toEqual({
    startArrowhead: 'OpenArrow',
    endArrowhead: 'FilledArrow',
    dashPattern: [20, 5],
    lineEnd: 'Round',
    lineJoin: 'Bevel'
  });
});
test('should be backward compatible with Style.Arrowhead.ClosedArrow', function () {
  var style = new ___WEBPACK_IMPORTED_MODULE_0__["Style"]();
  style.borderOptions = {
    startArrowhead: ___WEBPACK_IMPORTED_MODULE_0__["Style"].Arrowhead.OpenArrow,
    endArrowhead: ___WEBPACK_IMPORTED_MODULE_0__["Style"].Arrowhead.ClosedArrow,
    dashPattern: [20, 5],
    lineEnd: ___WEBPACK_IMPORTED_MODULE_0__["Style"].LineEnd.Round,
    lineJoin: ___WEBPACK_IMPORTED_MODULE_0__["Style"].LineJoin.Bevel
  };
  expect(style.borderOptions.toJSON()).toEqual({
    startArrowhead: 'OpenArrow',
    endArrowhead: 'FilledArrow',
    dashPattern: [20, 5],
    lineEnd: 'Round',
    lineJoin: 'Bevel'
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@skpm/test-runner/expect/index.js */ "./node_modules/@skpm/test-runner/expect/index.js")))

/***/ }),

/***/ "./Source/dom/style/__tests__/Color.test.js":
/*!**************************************************!*\
  !*** ./Source/dom/style/__tests__/Color.test.js ***!
  \**************************************************/
/*! exports provided: tests, logs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(expect) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tests", function() { return __skpm_tests__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logs", function() { return __skpm_logs__; });
/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Color */ "./Source/dom/style/Color.js");
/* globals expect, test */

var __skpm_logs__ = [];
var __skpm_console_log__ = console.log;

var __hookedLogs = function __hookedLogs(string) {
  __skpm_logs__.push(string);

  return __skpm_console_log__(string);
};

var __skpm_tests__ = {};

var test = function test(description, fn) {
  function withLogs(context, document) {
    console.log = __hookedLogs;
    return fn(context, document);
  }

  __skpm_tests__[description] = withLogs;
};

test.only = function (description, fn) {
  fn.only = true;
  return test(description, fn);
};

test.skip = function (description, fn) {
  fn.skipped = true;
  return test(description, fn);
};


test('should create a Color from a hex string', function () {
  // #rrggbbaa
  var color = _Color__WEBPACK_IMPORTED_MODULE_0__["Color"].from('#11223344');
  expect(String(color._object.class())).toBe('MSImmutableColor');
  expect(color.toString()).toBe('#11223344'); // #rrggbb

  var color2 = _Color__WEBPACK_IMPORTED_MODULE_0__["Color"].from('#112233');
  expect(color2.toString()).toBe('#112233ff'); // #rgb

  var color3 = _Color__WEBPACK_IMPORTED_MODULE_0__["Color"].from('#123');
  expect(color3.toString()).toBe('#112233ff');
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@skpm/test-runner/expect/index.js */ "./node_modules/@skpm/test-runner/expect/index.js")))

/***/ }),

/***/ "./Source/dom/style/__tests__/Fill.test.js":
/*!*************************************************!*\
  !*** ./Source/dom/style/__tests__/Fill.test.js ***!
  \*************************************************/
/*! exports provided: tests, logs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(expect) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tests", function() { return __skpm_tests__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logs", function() { return __skpm_logs__; });
/* harmony import */ var _test_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../test-utils */ "./Source/test-utils.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.. */ "./Source/dom/index.js");
/* globals expect, test */


var __skpm_logs__ = [];
var __skpm_console_log__ = console.log;

var __hookedLogs = function __hookedLogs(string) {
  __skpm_logs__.push(string);

  return __skpm_console_log__(string);
};

var __skpm_tests__ = {};

var test = function test(description, fn) {
  function withLogs(context, document) {
    console.log = __hookedLogs;
    return fn(context, document);
  }

  __skpm_tests__[description] = withLogs;
};

test.only = function (description, fn) {
  fn.only = true;
  return test(description, fn);
};

test.skip = function (description, fn) {
  fn.skipped = true;
  return test(description, fn);
};


test('should set the fills', function () {
  // setting the fills after creation
  var style = new ___WEBPACK_IMPORTED_MODULE_1__["Style"]();
  style.fills = ['#11223344', '#1234'];
  expect(style.sketchObject.fills().count()).toBe(2); // setting the fills during creation

  var style2 = new ___WEBPACK_IMPORTED_MODULE_1__["Style"]({
    fills: ['#11223344', '#1234']
  });
  expect(style2.sketchObject.fills().count()).toBe(2); // setting the fills as an array of object

  var style3 = new ___WEBPACK_IMPORTED_MODULE_1__["Style"]({
    fills: [{
      color: '#11223344',
      thickness: 30
    }, {
      color: '#1234',
      fillType: ___WEBPACK_IMPORTED_MODULE_1__["Style"].FillType.Color
    }]
  });
  expect(style3.sketchObject.fills().count()).toBe(2);
});
test('should get the fills', function () {
  var style = new ___WEBPACK_IMPORTED_MODULE_1__["Style"]();
  style.fills = ['#11223344', '#1234'];
  expect(style.fills.map(function (f) {
    return f.toJSON();
  })).toEqual([{
    color: '#11223344',
    fill: 'Color',
    enabled: true,
    gradient: {
      gradientType: 'Linear',
      from: {
        x: 0.5,
        y: 0
      },
      to: {
        x: 0.5,
        y: 1
      },
      stops: [{
        position: 0,
        color: '#ffffffff'
      }, {
        position: 1,
        color: '#000000ff'
      }]
    },
    pattern: {
      patternType: 'Fill',
      image: null,
      tileScale: 1
    },
    noise: {
      noiseType: 'Original',
      intensity: 0
    }
  }, {
    color: '#11223344',
    fill: 'Color',
    enabled: true,
    gradient: {
      gradientType: 'Linear',
      from: {
        x: 0.5,
        y: 0
      },
      to: {
        x: 0.5,
        y: 1
      },
      stops: [{
        position: 0,
        color: '#ffffffff'
      }, {
        position: 1,
        color: '#000000ff'
      }]
    },
    pattern: {
      patternType: 'Fill',
      image: null,
      tileScale: 1
    },
    noise: {
      noiseType: 'Original',
      intensity: 0
    }
  }]);
});
test('should set the pattern', function () {
  var style = new ___WEBPACK_IMPORTED_MODULE_1__["Style"]();
  style.fills = [{
    fill: 'Pattern',
    pattern: {
      patternType: 'Fit',
      image: {
        base64: _test_utils__WEBPACK_IMPORTED_MODULE_0__["base64Image"]
      },
      tileScale: 2
    }
  }];
  expect(style.fills[0].fill).toBe('Pattern');
  expect(style.fills[0].pattern.patternType).toBe('Fit');
  expect(style.fills[0].pattern.tileScale).toBe(2);
  expect(style.fills[0].pattern.image.type).toBe('ImageData');
});
test('should set the noise', function () {
  var style = new ___WEBPACK_IMPORTED_MODULE_1__["Style"]();
  style.fills = [{
    fill: 'Noise',
    noise: {
      noiseType: 'Black',
      intensity: 1
    }
  }];
  expect(style.fills[0].fill).toBe('Noise');
  expect(style.fills[0].noise.noiseType).toBe('Black');
  expect(style.fills[0].noise.intensity).toBe(1);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@skpm/test-runner/expect/index.js */ "./node_modules/@skpm/test-runner/expect/index.js")))

/***/ }),

/***/ "./Source/dom/style/__tests__/Gradient.test.js":
/*!*****************************************************!*\
  !*** ./Source/dom/style/__tests__/Gradient.test.js ***!
  \*****************************************************/
/*! exports provided: tests, logs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(expect) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tests", function() { return __skpm_tests__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logs", function() { return __skpm_logs__; });
/* harmony import */ var _Gradient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Gradient */ "./Source/dom/style/Gradient.js");
/* globals expect, test */

var __skpm_logs__ = [];
var __skpm_console_log__ = console.log;

var __hookedLogs = function __hookedLogs(string) {
  __skpm_logs__.push(string);

  return __skpm_console_log__(string);
};

var __skpm_tests__ = {};

var test = function test(description, fn) {
  function withLogs(context, document) {
    console.log = __hookedLogs;
    return fn(context, document);
  }

  __skpm_tests__[description] = withLogs;
};

test.only = function (description, fn) {
  fn.only = true;
  return test(description, fn);
};

test.skip = function (description, fn) {
  fn.skipped = true;
  return test(description, fn);
};


test('should create a default gradient', function () {
  var gradient = _Gradient__WEBPACK_IMPORTED_MODULE_0__["Gradient"].from({});
  expect(String(gradient._object.class())).toBe('MSGradient');
  expect(gradient.toJSON()).toEqual({
    gradientType: 'Linear',
    from: {
      x: 0.5,
      y: 0
    },
    to: {
      x: 0.5,
      y: 1
    },
    stops: []
  });
});
test('should create a gradient with a specific type', function () {
  var gradient = _Gradient__WEBPACK_IMPORTED_MODULE_0__["Gradient"].from({
    gradientType: _Gradient__WEBPACK_IMPORTED_MODULE_0__["GradientType"].Angular
  });
  expect(gradient.toJSON()).toEqual({
    gradientType: 'Angular',
    from: {
      x: 0.5,
      y: 0
    },
    to: {
      x: 0.5,
      y: 1
    },
    stops: []
  });
});
test('should create a gradient with a specific from and to coordinates', function () {
  var gradient = _Gradient__WEBPACK_IMPORTED_MODULE_0__["Gradient"].from({
    from: {
      x: 1,
      y: 0.5
    },
    to: {
      x: 2,
      y: 5
    }
  });
  expect(gradient.toJSON()).toEqual({
    gradientType: 'Linear',
    from: {
      x: 1,
      y: 0.5
    },
    to: {
      x: 2,
      y: 5
    },
    stops: []
  });
});
test('should change the from', function () {
  var gradient = _Gradient__WEBPACK_IMPORTED_MODULE_0__["Gradient"].from({});
  expect(gradient.toJSON()).toEqual({
    gradientType: 'Linear',
    from: {
      x: 0.5,
      y: 0
    },
    to: {
      x: 0.5,
      y: 1
    },
    stops: []
  });
  gradient.from.x = 0.7;
  expect(gradient.toJSON()).toEqual({
    gradientType: 'Linear',
    from: {
      x: 0.7,
      y: 0
    },
    to: {
      x: 0.5,
      y: 1
    },
    stops: []
  });
  gradient.from.y = 0.1;
  expect(gradient.toJSON()).toEqual({
    gradientType: 'Linear',
    from: {
      x: 0.7,
      y: 0.1
    },
    to: {
      x: 0.5,
      y: 1
    },
    stops: []
  });
  gradient.from = {
    x: 0.1,
    y: 0.4
  };
  expect(gradient.toJSON()).toEqual({
    gradientType: 'Linear',
    from: {
      x: 0.1,
      y: 0.4
    },
    to: {
      x: 0.5,
      y: 1
    },
    stops: []
  });
}); // https://github.com/BohemianCoding/SketchAPI/issues/216

test('should change the to', function () {
  var gradient = _Gradient__WEBPACK_IMPORTED_MODULE_0__["Gradient"].from({});
  expect(gradient.toJSON()).toEqual({
    gradientType: 'Linear',
    from: {
      x: 0.5,
      y: 0
    },
    to: {
      x: 0.5,
      y: 1
    },
    stops: []
  });
  gradient.to.x = 0.7;
  expect(gradient.toJSON()).toEqual({
    gradientType: 'Linear',
    from: {
      x: 0.5,
      y: 0
    },
    to: {
      x: 0.7,
      y: 1
    },
    stops: []
  });
  gradient.to.y = 0.1;
  expect(gradient.toJSON()).toEqual({
    gradientType: 'Linear',
    from: {
      x: 0.5,
      y: 0
    },
    to: {
      x: 0.7,
      y: 0.1
    },
    stops: []
  });
  gradient.to = {
    x: 0.1,
    y: 0.4
  };
  expect(gradient.toJSON()).toEqual({
    gradientType: 'Linear',
    from: {
      x: 0.5,
      y: 0
    },
    to: {
      x: 0.1,
      y: 0.4
    },
    stops: []
  });
}); // https://github.com/BohemianCoding/SketchAPI/issues/230

test('should create a gradient with a specific from and to coordinates including 0s', function () {
  var gradient = _Gradient__WEBPACK_IMPORTED_MODULE_0__["Gradient"].from({
    from: {
      x: 0,
      y: 0
    },
    to: {
      x: 0,
      y: 0
    }
  });
  expect(gradient.toJSON()).toEqual({
    gradientType: 'Linear',
    from: {
      x: 0,
      y: 0
    },
    to: {
      x: 0,
      y: 0
    },
    stops: []
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@skpm/test-runner/expect/index.js */ "./node_modules/@skpm/test-runner/expect/index.js")))

/***/ }),

/***/ "./Source/dom/style/__tests__/GradientStop.test.js":
/*!*********************************************************!*\
  !*** ./Source/dom/style/__tests__/GradientStop.test.js ***!
  \*********************************************************/
/*! exports provided: tests, logs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(expect) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tests", function() { return __skpm_tests__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logs", function() { return __skpm_logs__; });
/* harmony import */ var _Gradient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Gradient */ "./Source/dom/style/Gradient.js");
/* globals expect, test */

var __skpm_logs__ = [];
var __skpm_console_log__ = console.log;

var __hookedLogs = function __hookedLogs(string) {
  __skpm_logs__.push(string);

  return __skpm_console_log__(string);
};

var __skpm_tests__ = {};

var test = function test(description, fn) {
  function withLogs(context, document) {
    console.log = __hookedLogs;
    return fn(context, document);
  }

  __skpm_tests__[description] = withLogs;
};

test.only = function (description, fn) {
  fn.only = true;
  return test(description, fn);
};

test.skip = function (description, fn) {
  fn.skipped = true;
  return test(description, fn);
};


test('should create a gradient with some stops', function () {
  var gradient = _Gradient__WEBPACK_IMPORTED_MODULE_0__["Gradient"].from({
    stops: [{
      position: 1,
      color: '#123'
    }, {
      position: 0,
      color: '#534'
    }, {
      position: 0.5,
      color: '#1234'
    }]
  });
  expect(gradient.toJSON()).toEqual({
    gradientType: 'Linear',
    from: {
      x: 0.5,
      y: 0
    },
    to: {
      x: 0.5,
      y: 1
    },
    stops: [{
      position: 1,
      color: '#112233ff'
    }, {
      position: 0,
      color: '#553344ff'
    }, {
      position: 0.5,
      color: '#11223344'
    }]
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@skpm/test-runner/expect/index.js */ "./node_modules/@skpm/test-runner/expect/index.js")))

/***/ }),

/***/ "./Source/dom/style/__tests__/Shadow.test.js":
/*!***************************************************!*\
  !*** ./Source/dom/style/__tests__/Shadow.test.js ***!
  \***************************************************/
/*! exports provided: tests, logs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(expect) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tests", function() { return __skpm_tests__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logs", function() { return __skpm_logs__; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.. */ "./Source/dom/index.js");
/* globals expect, test */

var __skpm_logs__ = [];
var __skpm_console_log__ = console.log;

var __hookedLogs = function __hookedLogs(string) {
  __skpm_logs__.push(string);

  return __skpm_console_log__(string);
};

var __skpm_tests__ = {};

var test = function test(description, fn) {
  function withLogs(context, document) {
    console.log = __hookedLogs;
    return fn(context, document);
  }

  __skpm_tests__[description] = withLogs;
};

test.only = function (description, fn) {
  fn.only = true;
  return test(description, fn);
};

test.skip = function (description, fn) {
  fn.skipped = true;
  return test(description, fn);
};


test('should set the shadows', function () {
  var style = new ___WEBPACK_IMPORTED_MODULE_0__["Style"]();
  style.shadows = [{
    color: '#11223344',
    blur: 10,
    x: 5,
    y: 8,
    spread: 20,
    enabled: false
  }];
  style.innerShadows = [{
    color: '#11223344',
    blur: 10,
    x: 5,
    y: 8,
    spread: 20,
    enabled: false
  }];
  expect(style.sketchObject.shadows().count()).toBe(1);
  expect(style.sketchObject.innerShadows().count()).toBe(1);
});
test('should get the shadows', function () {
  var style = new ___WEBPACK_IMPORTED_MODULE_0__["Style"]();
  style.shadows = [{
    color: '#11223344',
    blur: 4,
    x: 5,
    y: 8,
    spread: 20,
    enabled: false
  }];
  expect(style.shadows[0].toJSON()).toEqual({
    color: '#11223344',
    blur: 4,
    x: 5,
    y: 8,
    spread: 20,
    enabled: false
  });
  style.innerShadows = [{
    color: '#11223344',
    blur: 5,
    x: 2,
    y: 23,
    spread: 10,
    enabled: true
  }];
  expect(style.innerShadows[0].toJSON()).toEqual({
    color: '#11223344',
    blur: 5,
    x: 2,
    y: 23,
    spread: 10,
    enabled: true
  });
}); // https://github.com/BohemianCoding/SketchAPI/issues/230

test('should set the shadows with 0 values', function () {
  var style = new ___WEBPACK_IMPORTED_MODULE_0__["Style"]();
  style.shadows = [{
    spread: 0,
    blur: 0,
    x: 1,
    y: 0,
    color: '#ebc100'
  }];
  style.innerShadows = [{
    spread: 0,
    blur: 0,
    x: 1,
    y: 0,
    color: '#ebc100'
  }];
  expect(style.shadows[0].blur).toBe(0);
  expect(style.shadows[0].y).toBe(0);
  expect(style.innerShadows[0].blur).toBe(0);
  expect(style.innerShadows[0].y).toBe(0);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@skpm/test-runner/expect/index.js */ "./node_modules/@skpm/test-runner/expect/index.js")))

/***/ }),

/***/ "./Source/dom/style/__tests__/Style.test.js":
/*!**************************************************!*\
  !*** ./Source/dom/style/__tests__/Style.test.js ***!
  \**************************************************/
/*! exports provided: tests, logs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(expect) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tests", function() { return __skpm_tests__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logs", function() { return __skpm_logs__; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.. */ "./Source/dom/index.js");
/* harmony import */ var _test_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../test-utils */ "./Source/test-utils.ts");
/* globals expect, test */


var __skpm_logs__ = [];
var __skpm_console_log__ = console.log;

var __hookedLogs = function __hookedLogs(string) {
  __skpm_logs__.push(string);

  return __skpm_console_log__(string);
};

var __skpm_tests__ = {};

var test = function test(description, fn) {
  function withLogs(context, document) {
    console.log = __hookedLogs;
    return fn(context, document);
  }

  __skpm_tests__[description] = withLogs;
};

test.only = function (description, fn) {
  fn.only = true;
  return test(description, fn);
};

test.skip = function (description, fn) {
  fn.skipped = true;
  return test(description, fn);
};


test('should change the opacity', function () {
  var style = new ___WEBPACK_IMPORTED_MODULE_0__["Style"]();
  expect(style.opacity).toBe(1);
  style.opacity = 0.5;
  expect(style.opacity).toBe(0.5);
  style.opacity = 2;
  expect(style.opacity).toBe(1);
  style.opacity = -1;
  expect(style.opacity).toBe(0);
});
test('should change the blending mode', function () {
  var style = new ___WEBPACK_IMPORTED_MODULE_0__["Style"]();
  expect(style.blendingMode).toBe(___WEBPACK_IMPORTED_MODULE_0__["Style"].BlendingMode.Normal);
  style.blendingMode = ___WEBPACK_IMPORTED_MODULE_0__["Style"].BlendingMode.Multiply;
  expect(style.blendingMode).toBe('Multiply');
});
test('default style should not have any fills', function () {
  // setting the fills after creation
  var style = new ___WEBPACK_IMPORTED_MODULE_0__["Style"]();
  expect(style.sketchObject.fills().count()).toBe(0);
});
test('should be in and out of sync with its shared style', function (context, document) {
  var _createSharedStyle = Object(_test_utils__WEBPACK_IMPORTED_MODULE_1__["createSharedStyle"])(document, ___WEBPACK_IMPORTED_MODULE_0__["Shape"]),
      sharedStyle = _createSharedStyle.sharedStyle;

  var shape = new ___WEBPACK_IMPORTED_MODULE_0__["Shape"]({
    parent: document.selectedPage,
    sharedStyle: sharedStyle
  });
  var style = shape.style;
  expect(style.isOutOfSyncWithSharedStyle(sharedStyle)).toBe(false);
  sharedStyle.style.opacity = 0.5;
  expect(style.isOutOfSyncWithSharedStyle(sharedStyle)).toBe(true);
  expect(style.opacity).toBe(1);
  style.syncWithSharedStyle(sharedStyle);
  expect(style.isOutOfSyncWithSharedStyle(sharedStyle)).toBe(false);
  expect(style.opacity).toBe(0.5);
  style.opacity = 1;
  expect(style.isOutOfSyncWithSharedStyle(sharedStyle)).toBe(true);
  sharedStyle.style = style;
  expect(style.isOutOfSyncWithSharedStyle(sharedStyle)).toBe(false);
  expect(sharedStyle.style.opacity).toBe(1);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@skpm/test-runner/expect/index.js */ "./node_modules/@skpm/test-runner/expect/index.js")))

/***/ }),

/***/ "./Source/dom/style/__tests__/Text.test.js":
/*!*************************************************!*\
  !*** ./Source/dom/style/__tests__/Text.test.js ***!
  \*************************************************/
/*! exports provided: tests, logs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(expect) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tests", function() { return __skpm_tests__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logs", function() { return __skpm_logs__; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.. */ "./Source/dom/index.js");
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Text */ "./Source/dom/style/Text.js");
/* globals expect, test */


var __skpm_logs__ = [];
var __skpm_console_log__ = console.log;

var __hookedLogs = function __hookedLogs(string) {
  __skpm_logs__.push(string);

  return __skpm_console_log__(string);
};

var __skpm_tests__ = {};

var test = function test(description, fn) {
  function withLogs(context, document) {
    console.log = __hookedLogs;
    return fn(context, document);
  }

  __skpm_tests__[description] = withLogs;
};

test.only = function (description, fn) {
  fn.only = true;
  return test(description, fn);
};

test.skip = function (description, fn) {
  fn.skipped = true;
  return test(description, fn);
};


test('should change the text alignment', function () {
  var text = new ___WEBPACK_IMPORTED_MODULE_0__["Text"]({
    text: 'blah',
    frame: new ___WEBPACK_IMPORTED_MODULE_0__["Rectangle"](10, 10, 1000, 1000)
  }); // default to left

  expect(text.style.alignment).toBe(___WEBPACK_IMPORTED_MODULE_0__["Text"].Alignment.left);
  Object.keys(___WEBPACK_IMPORTED_MODULE_0__["Text"].Alignment).forEach(function (key) {
    var result = key === 'natural' ? ___WEBPACK_IMPORTED_MODULE_0__["Text"].Alignment.left : ___WEBPACK_IMPORTED_MODULE_0__["Text"].Alignment[key]; // test setting by name

    text.style.alignment = key;
    expect(text.style.alignment).toBe(result); // test setting by value

    text.style.alignment = _Text__WEBPACK_IMPORTED_MODULE_1__["TextAlignmentMap"][key];
    expect(text.style.alignment).toBe(result);
  });
});
test('should change the text vertical alignment', function () {
  var text = new ___WEBPACK_IMPORTED_MODULE_0__["Text"]({
    text: 'blah',
    frame: new ___WEBPACK_IMPORTED_MODULE_0__["Rectangle"](10, 10, 1000, 1000)
  }); // default to top

  expect(text.style.verticalAlignment).toBe(___WEBPACK_IMPORTED_MODULE_0__["Text"].VerticalAlignment.top);
  Object.keys(___WEBPACK_IMPORTED_MODULE_0__["Text"].VerticalAlignment).forEach(function (key) {
    // test setting by name
    text.style.verticalAlignment = key;
    expect(text.style.verticalAlignment).toBe(___WEBPACK_IMPORTED_MODULE_0__["Text"].VerticalAlignment[key]); // test setting by value

    text.style.verticalAlignment = _Text__WEBPACK_IMPORTED_MODULE_1__["VerticalTextAlignmentMap"][key];
    expect(text.style.verticalAlignment).toBe(___WEBPACK_IMPORTED_MODULE_0__["Text"].VerticalAlignment[key]);
  });
});
test('should change the kerning', function () {
  var text = new ___WEBPACK_IMPORTED_MODULE_0__["Text"]({
    text: 'blah',
    frame: new ___WEBPACK_IMPORTED_MODULE_0__["Rectangle"](10, 10, 1000, 1000)
  }); // default to null (auto)

  expect(text.style.kerning).toBe(null);
  text.style.kerning = 1;
  expect(text.style.kerning).toBe(1);
  text.style.kerning = null;
  expect(text.style.kerning).toBe(null);
});
test('should round the kerning before returning it (#319)', function () {
  var text = new ___WEBPACK_IMPORTED_MODULE_0__["Text"]({
    text: 'blah',
    frame: new ___WEBPACK_IMPORTED_MODULE_0__["Rectangle"](10, 10, 1000, 1000)
  });
  text.style.kerning = 0.6;
  expect(text.style.kerning).toBe(0.6);
});
test('should change the line height', function () {
  var text = new ___WEBPACK_IMPORTED_MODULE_0__["Text"]({
    text: 'blah',
    frame: new ___WEBPACK_IMPORTED_MODULE_0__["Rectangle"](10, 10, 1000, 1000)
  }); // default to null (auto)

  expect(text.style.lineHeight).toBe(null);
  text.style.lineHeight = 10;
  expect(text.style.lineHeight).toBe(10);
  expect(text.style.paragraphSpacing).toBe(0);
  text.style.lineHeight = null;
  expect(text.style.lineHeight).toBe(null);
  text.style.lineHeight = 0;
  expect(text.style.lineHeight).toBe(null);
});
test('should change the paragraph spacing', function () {
  var text = new ___WEBPACK_IMPORTED_MODULE_0__["Text"]({
    text: 'blah',
    frame: new ___WEBPACK_IMPORTED_MODULE_0__["Rectangle"](10, 10, 1000, 1000)
  }); // default to 0

  expect(text.style.paragraphSpacing).toBe(0);
  text.style.paragraphSpacing = 10;
  expect(text.style.paragraphSpacing).toBe(10);
  expect(text.style.lineHeight).toBe(null);
  text.style.paragraphSpacing = 0;
  expect(text.style.paragraphSpacing).toBe(0);
});
test('should change the text color', function () {
  var text = new ___WEBPACK_IMPORTED_MODULE_0__["Text"]({
    text: 'blah',
    frame: new ___WEBPACK_IMPORTED_MODULE_0__["Rectangle"](10, 10, 1000, 1000)
  }); // default to black

  expect(text.style.textColor).toBe('#000000ff');
  text.style.textColor = '#123';
  expect(text.style.textColor).toBe('#112233ff');
});
test('should change the font size', function () {
  var text = new ___WEBPACK_IMPORTED_MODULE_0__["Text"]({
    text: 'blah',
    frame: new ___WEBPACK_IMPORTED_MODULE_0__["Rectangle"](10, 10, 1000, 1000)
  }); // default to 12

  expect(text.style.fontSize).toBe(12);
  text.style.fontSize = 40;
  expect(text.style.fontSize).toBe(40);
});
test('should change the text transform', function () {
  var text = new ___WEBPACK_IMPORTED_MODULE_0__["Text"]({
    text: 'blah',
    frame: new ___WEBPACK_IMPORTED_MODULE_0__["Rectangle"](10, 10, 1000, 1000)
  }); // default to 'none'

  expect(text.style.textTransform).toBe('none');
  text.style.textTransform = 'uppercase';
  expect(text.style.textTransform).toBe('uppercase');
  text.style.textTransform = 'lowercase';
  expect(text.style.textTransform).toBe('lowercase');
  text.style.textTransform = 'none';
  expect(text.style.textTransform).toBe('none');
});
test('should change the font family', function () {
  var text = new ___WEBPACK_IMPORTED_MODULE_0__["Text"]({
    text: 'blah',
    frame: new ___WEBPACK_IMPORTED_MODULE_0__["Rectangle"](10, 10, 1000, 1000)
  }); // default to 'Helvetica'

  expect(text.style.fontFamily).toBe('Helvetica');
  text.style.fontFamily = 'Arial';
  expect(text.style.fontFamily).toBe('Arial'); // non existent font will keep the previous one

  text.style.fontFamily = 'non-existent-font-name';
  expect(text.style.fontFamily).toBe('Arial'); // system should set the font family to the system font

  text.style.fontFamily = 'system';
  expect(text.style.fontFamily).toBe('system');
});
test('should change the font weight', function () {
  var text = new ___WEBPACK_IMPORTED_MODULE_0__["Text"]({
    text: 'blah',
    frame: new ___WEBPACK_IMPORTED_MODULE_0__["Rectangle"](10, 10, 1000, 1000)
  }); // default to 5

  expect(text.style.fontWeight).toBe(5);
  text.style.fontWeight = 9;
  expect(text.style.fontFamily).toBe('Helvetica');
  expect(text.style.fontWeight).toBe(9);
  text.style.fontWeight = 5;
  expect(text.style.fontFamily).toBe('Helvetica');
  expect(text.style.fontWeight).toBe(5); // non existent font weight will pick the closest one

  text.style.fontWeight = 12;
  expect(text.style.fontFamily).toBe('Helvetica');
  expect(text.style.fontWeight).toBe(9);
});
test('should change the font style', function () {
  var text = new ___WEBPACK_IMPORTED_MODULE_0__["Text"]({
    text: 'blah',
    frame: new ___WEBPACK_IMPORTED_MODULE_0__["Rectangle"](10, 10, 1000, 1000)
  }); // default to undefined

  expect(text.style.fontStyle).toBe(undefined);
  text.style.fontStyle = 'italic';
  expect(text.style.fontStyle).toBe('italic');
  text.style.fontStyle = 'normal';
  expect(text.style.fontStyle).toBe(undefined);
}); // TODO: can't seem to find a font with small caps
// test('should change the font variant', () => {
//   const text = new Text({
//     text: 'blah',
//     frame: new Rectangle(10, 10, 1000, 1000),
//     style: {
//       fontFamily: 'SF Compact Display',
//     },
//   })
//   expect(text.style.fontFamily).toBe('SF Compact Display')
//   // default to undefined
//   expect(text.style.fontVariant).toBe(undefined)
//   text.style.fontVariant = 'small-caps'
//   expect(text.style.fontVariant).toBe('small-caps')
//   text.style.fontVariant = 'normal'
//   expect(text.style.fontVariant).toBe(undefined)
// })

test('should change the font stretch', function () {
  var text = new ___WEBPACK_IMPORTED_MODULE_0__["Text"]({
    text: 'blah',
    frame: new ___WEBPACK_IMPORTED_MODULE_0__["Rectangle"](10, 10, 1000, 1000)
  }); // default to undefined

  expect(text.style.fontStretch).toBe(undefined); // but not all font families tho

  text.style.fontFamily = 'Helvetica Neue';
  text.style.fontWeight = 9;
  text.style.fontStretch = 'condensed';
  expect(text.style.fontStretch).toBe('condensed');
  text.style.fontStretch = 'normal';
  expect(text.style.fontStretch).toBe(undefined);
});
test('should change the text underline', function () {
  var text = new ___WEBPACK_IMPORTED_MODULE_0__["Text"]({
    text: 'blah',
    frame: new ___WEBPACK_IMPORTED_MODULE_0__["Rectangle"](10, 10, 1000, 1000)
  }); // default to undefined

  expect(text.style.textUnderline).toBe(undefined);
  text.style.textUnderline = 'single';
  expect(text.style.textUnderline).toBe('single');
  text.style.textUnderline = 'none';
  expect(text.style.textUnderline).toBe(undefined);
  text.style.textUnderline = 'double dot';
  expect(text.style.textUnderline).toBe('double dot');
  text.style.textUnderline = 'dot double';
  expect(text.style.textUnderline).toBe('double dot');
  text.style.textUnderline = 'thick dash-dot';
  expect(text.style.textUnderline).toBe('thick dash-dot');
});
test('should change the text strikethrough', function () {
  var text = new ___WEBPACK_IMPORTED_MODULE_0__["Text"]({
    text: 'blah',
    frame: new ___WEBPACK_IMPORTED_MODULE_0__["Rectangle"](10, 10, 1000, 1000)
  }); // default to undefined

  expect(text.style.textStrikethrough).toBe(undefined);
  text.style.textStrikethrough = 'single';
  expect(text.style.textStrikethrough).toBe('single');
  text.style.textStrikethrough = 'none';
  expect(text.style.textStrikethrough).toBe(undefined);
  text.style.textStrikethrough = 'double dot';
  expect(text.style.textStrikethrough).toBe('double dot');
  text.style.textStrikethrough = 'dot double';
  expect(text.style.textStrikethrough).toBe('double dot');
  text.style.textStrikethrough = 'thick dash-dot';
  expect(text.style.textStrikethrough).toBe('thick dash-dot');
});
test('should get the default line height', function () {
  var text = new ___WEBPACK_IMPORTED_MODULE_0__["Text"]({
    text: 'blah',
    frame: new ___WEBPACK_IMPORTED_MODULE_0__["Rectangle"](10, 10, 1000, 1000)
  });
  expect(text.style.getDefaultLineHeight()).toBe(14);
  var group = new ___WEBPACK_IMPORTED_MODULE_0__["Group"]({
    frame: new ___WEBPACK_IMPORTED_MODULE_0__["Rectangle"](10, 10, 1000, 1000)
  });
  expect(group.style.getDefaultLineHeight()).toBe(undefined);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@skpm/test-runner/expect/index.js */ "./node_modules/@skpm/test-runner/expect/index.js")))

/***/ }),

/***/ "./Source/dom/utils.js":
/*!*****************************!*\
  !*** ./Source/dom/utils.js ***!
  \*****************************/
/*! exports provided: getDocumentData, isWrappedObject, getURLFromPath, initProxyProperties, proxyProperty, FloatingPointNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDocumentData", function() { return getDocumentData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWrappedObject", function() { return isWrappedObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getURLFromPath", function() { return getURLFromPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initProxyProperties", function() { return initProxyProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "proxyProperty", function() { return proxyProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloatingPointNumber", function() { return FloatingPointNumber; });
function getDocumentData(document) {
  var documentData = document;

  if (document && document.sketchObject && document.sketchObject.documentData) {
    documentData = document.sketchObject.documentData();
  } else if (document && document.documentData) {
    documentData = document.documentData();
  }

  return documentData;
}
function isWrappedObject(object) {
  return object && object._isWrappedObject;
}
function getURLFromPath(path) {
  return typeof path === 'string' ? NSURL.fileURLWithPath(NSString.stringWithString(path.replace(/^file:\/\//, '')).stringByExpandingTildeInPath()) : path;
}
function initProxyProperties(object) {
  Object.defineProperty(object, '_parent', {
    enumerable: false,
    writable: true
  });
  Object.defineProperty(object, '_parentKey', {
    enumerable: false,
    writable: true
  });
  Object.defineProperty(object, '_inArray', {
    enumerable: false,
    writable: true
  });
}
function proxyProperty(object, property, value, parser) {
  Object.defineProperty(object, "_".concat(property), {
    enumerable: false,
    writable: true,
    value: value
  });
  /* eslint-disable no-param-reassign */

  if (parser) {
    Object.defineProperty(object, property, {
      enumerable: true,
      get: function get() {
        return object["_".concat(property)];
      },
      set: function set(x) {
        object["_".concat(property)] = parser(x);

        if (object._parent && object._parentKey) {
          if (object._inArray) {
            object._parent[object._parentKey][object._parent[object._parentKey].indexOf(object)] = object;
          } else {
            object._parent[object._parentKey] = object;
          }
        }
      }
    });
  } else {
    Object.defineProperty(object, property, {
      enumerable: true,
      get: function get() {
        return object["_".concat(property)];
      },
      set: function set(x) {
        object["_".concat(property)] = x;

        if (object._parent && object._parentKey) {
          if (object._inArray) {
            object._parent[object._parentKey][object._parent[object._parentKey].indexOf(object)] = object;
          } else {
            object._parent[object._parentKey] = object;
          }
        }
      }
    });
  }
}
function FloatingPointNumber(x) {
  // 32-bits numbers
  var precision = 7; // cast to number to handle NSInteger and such

  var number = Number(x);
  return Number(number.toFixed(precision));
}

/***/ }),

/***/ "./Source/dom/wrapNativeObject.js":
/*!****************************************!*\
  !*** ./Source/dom/wrapNativeObject.js ***!
  \****************************************/
/*! exports provided: wrapNativeObject, wrapObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapNativeObject", function() { return wrapNativeObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapObject", function() { return wrapObject; });
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! util */ "./core-modules/node_modules/@skpm/util/index.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _WrappedObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WrappedObject */ "./Source/dom/WrappedObject.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./Source/dom/utils.js");
/* harmony import */ var _Factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Factory */ "./Source/dom/Factory.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





/**
 * Return a wrapped version of a Sketch object.
 * We don't know about *all* Sketch object types, but
 * for some we will return a special subclass.
 * The fallback position is just to return an instance of WrappedObject.
 *
 * @param {object} sketchObject The underlying sketch object that we're wrapping.
 * @return {WrappedObject} A javascript object (subclass of WrappedObject), which represents the Sketch object we were given.
 */

function wrapNativeObject(nativeObject) {
  if (!nativeObject) {
    return undefined;
  }

  var JsClass = _Factory__WEBPACK_IMPORTED_MODULE_3__["Factory"]._nativeToBox[String(nativeObject.class())];

  if (!JsClass) {
    console.warn("no mapped wrapper for ".concat(String(nativeObject.class())));
    JsClass = _WrappedObject__WEBPACK_IMPORTED_MODULE_1__["WrappedObject"];
  }

  return JsClass.fromNative(nativeObject);
}
function wrapObject(object, defaultType) {
  if (!object) {
    return undefined;
  }

  if (Object(util__WEBPACK_IMPORTED_MODULE_0__["isNativeObject"])(object) && !Object(util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(object)) {
    return wrapNativeObject(object);
  }

  if (Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isWrappedObject"])(object)) {
    return object;
  }

  var type = object.type,
      rest = _objectWithoutProperties(object, ["type"]);

  if (!type && !defaultType) {
    throw new Error("You need to specify a \"type\" when creating a nested layer. Received: ".concat(JSON.stringify(object, null, 2)));
  }

  return _Factory__WEBPACK_IMPORTED_MODULE_3__["Factory"].create(type || defaultType, rest);
}

/***/ }),

/***/ "./Source/index.ts":
/*!*************************!*\
  !*** ./Source/index.ts ***!
  \*************************/
/*! exports provided: Async, DataSupplier, Settings, UI, export, fromSketchJSON, createLayerFromData, Document, getDocuments, getSelectedDocument, Library, getLibraries, SharedStyle, Rectangle, Style, Group, Text, Image, Shape, ShapePath, Artboard, Page, SymbolMaster, SymbolInstance, HotSpot, Slice, Types, fromNative, getGlobalColors, getGlobalGradients, Flow, version */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./async */ "./Source/async/index.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Async", function() { return _async__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _data_supplier__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-supplier */ "./Source/data-supplier/index.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "DataSupplier", function() { return _data_supplier__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings */ "./Source/settings/index.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Settings", function() { return _settings__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui */ "./Source/ui/index.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "UI", function() { return _ui__WEBPACK_IMPORTED_MODULE_3__; });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom */ "./Source/dom/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "export", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["export"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromSketchJSON", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["fromSketchJSON"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createLayerFromData", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["createLayerFromData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Document", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["Document"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDocuments", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["getDocuments"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSelectedDocument", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["getSelectedDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Library", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["Library"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLibraries", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["getLibraries"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedStyle", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["SharedStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rectangle", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["Rectangle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Style", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["Style"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["Group"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["Text"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["Image"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Shape", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["Shape"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShapePath", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["ShapePath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Artboard", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["Artboard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["Page"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SymbolMaster", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["SymbolMaster"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SymbolInstance", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["SymbolInstance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HotSpot", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["HotSpot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Slice", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["Slice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Types", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["Types"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromNative", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["fromNative"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getGlobalColors", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["getGlobalColors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getGlobalGradients", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["getGlobalGradients"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Flow", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["Flow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "version", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["version"]; });








/***/ }),

/***/ "./Source/settings/Settings.js":
/*!*************************************!*\
  !*** ./Source/settings/Settings.js ***!
  \*************************************/
/*! exports provided: globalSettingForKey, setGlobalSettingForKey, settingForKey, setSettingForKey, layerSettingForKey, setLayerSettingForKey, documentSettingForKey, setDocumentSettingForKey, sessionVariable, setSessionVariable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalSettingForKey", function() { return globalSettingForKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setGlobalSettingForKey", function() { return setGlobalSettingForKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settingForKey", function() { return settingForKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSettingForKey", function() { return setSettingForKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layerSettingForKey", function() { return layerSettingForKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLayerSettingForKey", function() { return setLayerSettingForKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "documentSettingForKey", function() { return documentSettingForKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDocumentSettingForKey", function() { return setDocumentSettingForKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sessionVariable", function() { return sessionVariable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSessionVariable", function() { return setSessionVariable; });
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! util */ "./core-modules/node_modules/@skpm/util/index.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dom_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom/utils */ "./Source/dom/utils.js");



function getPluginIdentifier() {
  if (!__command.pluginBundle()) {
    // if we run a script from the Run Script panel, it won't have a bundle
    return 'com.sketchapp.temporary-script';
  }

  return __command.pluginBundle().identifier();
}
/**
 * Return the value of a global setting for a given key.
 * @param key The setting to look up.
 * @return The setting value.
 *
 * This is equivalent to reading a setting for the currently
 * running version of Sketch using the `defaults` command line tool,
 * eg: defaults read com.bohemiancoding.sketch3 <key>
 * */


function globalSettingForKey(key) {
  var value = NSUserDefaults.standardUserDefaults().objectForKey_(key);

  if (typeof value === 'undefined' || value === 'undefined' || value === null) {
    return undefined;
  }

  return JSON.parse(value);
}
/**
 * Set the value of a global setting for a given key.
 *
 * @param key The setting to set.
 * @param value The value to set it to.
 *
 * This is equivalent to writing a setting for the currently
 * running version of Sketch using the `defaults` command line tool,
 * eg: defaults write com.bohemiancoding.sketch3 <key> <value>
 */

function setGlobalSettingForKey(key, value) {
  var store = NSUserDefaults.standardUserDefaults();
  var stringifiedValue = JSON.stringify(value, function (k, v) {
    return util__WEBPACK_IMPORTED_MODULE_0__["toJSObject"](v);
  });

  if (!stringifiedValue) {
    store.removeObjectForKey(key);
  } else {
    store.setObject_forKey_(stringifiedValue, key);
  }
}
var SUITE_PREFIX = 'plugin.sketch.';
/**
 * Return the value of a plugin setting for a given key.
 *
 * @param key The setting to look up.
 * @return The setting value.
 * */

function settingForKey(key) {
  var store = NSUserDefaults.alloc().initWithSuiteName("".concat(SUITE_PREFIX).concat(getPluginIdentifier()));
  var value = store.objectForKey(key);

  if (typeof value === 'undefined' || value == 'undefined' || value === null) {
    return undefined;
  }

  return JSON.parse(value);
}
/**
 * Set the value of a global setting for a given key.
 *
 * @param key The setting to set.
 * @param value The value to set it to.
 */

function setSettingForKey(key, value) {
  var store = NSUserDefaults.alloc().initWithSuiteName("".concat(SUITE_PREFIX).concat(getPluginIdentifier()));
  var stringifiedValue = JSON.stringify(value, function (k, v) {
    return util__WEBPACK_IMPORTED_MODULE_0__["toJSObject"](v);
  });

  if (!stringifiedValue) {
    store.removeObjectForKey(key);
  } else {
    store.setObject_forKey_(stringifiedValue, key);
  }
}

function getNativeStorageObject(layer) {
  var object;

  if (!Object(_dom_utils__WEBPACK_IMPORTED_MODULE_1__["isWrappedObject"])(layer)) {
    object = layer;
  } else if (layer.type === 'DataOverride') {
    object = layer.sketchObject.availableOverride().overrideValue();
  } else if (layer.type === 'Override') {
    object = layer.sketchObject.overrideValue();
  } else {
    object = layer.sketchObject;
  }

  return object;
}

function layerSettingForKey(layer, key) {
  var value = __command.valueForKey_onLayer(key, getNativeStorageObject(layer));

  if (typeof value === 'undefined' || value == 'undefined' || value === null) {
    return undefined;
  }

  return JSON.parse(value);
}
function setLayerSettingForKey(layer, key, value) {
  var stringifiedValue = JSON.stringify(value, function (k, v) {
    return util__WEBPACK_IMPORTED_MODULE_0__["toJSObject"](v);
  });

  if (!stringifiedValue) {
    stringifiedValue = null;
  }

  __command.setValue_forKey_onLayer(stringifiedValue, key, getNativeStorageObject(layer));
}
function documentSettingForKey(document, key) {
  var documentData = Object(_dom_utils__WEBPACK_IMPORTED_MODULE_1__["getDocumentData"])(document);

  var value = __command.valueForKey_onDocument(key, documentData);

  if (typeof value === 'undefined' || value == 'undefined' || value === null) {
    return undefined;
  }

  return JSON.parse(value);
}
function setDocumentSettingForKey(document, key, value) {
  var documentData = Object(_dom_utils__WEBPACK_IMPORTED_MODULE_1__["getDocumentData"])(document);
  var stringifiedValue = JSON.stringify(value, function (k, v) {
    return util__WEBPACK_IMPORTED_MODULE_0__["toJSObject"](v);
  });

  if (!stringifiedValue) {
    stringifiedValue = null;
  }

  __command.setValue_forKey_onDocument(stringifiedValue, key, documentData);
}
function sessionVariable(key) {
  var threadDic = NSThread.mainThread().threadDictionary();
  var value = threadDic.objectForKey("".concat(SUITE_PREFIX).concat(getPluginIdentifier(), ".").concat(key));

  if (typeof value === 'undefined' || value == 'undefined' || value === null) {
    return undefined;
  }

  return JSON.parse(value);
}
function setSessionVariable(key, value) {
  var threadDic = NSThread.mainThread().threadDictionary();
  var stringifiedValue = JSON.stringify(value, function (k, v) {
    return util__WEBPACK_IMPORTED_MODULE_0__["toJSObject"](v);
  });

  if (!stringifiedValue) {
    threadDic.removeObjectForKey("".concat(SUITE_PREFIX).concat(getPluginIdentifier(), ".").concat(key));
  } else {
    threadDic.setObject_forKey_(stringifiedValue, "".concat(SUITE_PREFIX).concat(getPluginIdentifier(), ".").concat(key));
  }
}

/***/ }),

/***/ "./Source/settings/__tests__/Settings.test.js":
/*!****************************************************!*\
  !*** ./Source/settings/__tests__/Settings.test.js ***!
  \****************************************************/
/*! exports provided: tests, logs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(expect) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tests", function() { return __skpm_tests__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logs", function() { return __skpm_logs__; });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dom */ "./Source/dom/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .. */ "./Source/settings/index.ts");
/* globals expect, test */


var __skpm_logs__ = [];
var __skpm_console_log__ = console.log;

var __hookedLogs = function __hookedLogs(string) {
  __skpm_logs__.push(string);

  return __skpm_console_log__(string);
};

var __skpm_tests__ = {};

var test = function test(description, fn) {
  function withLogs(context, document) {
    console.log = __hookedLogs;
    return fn(context, document);
  }

  __skpm_tests__[description] = withLogs;
};

test.only = function (description, fn) {
  fn.only = true;
  return test(description, fn);
};

test.skip = function (description, fn) {
  fn.skipped = true;
  return test(description, fn);
};


test('non existing settings should return undefined', function () {
  expect(Object(___WEBPACK_IMPORTED_MODULE_1__["settingForKey"])('non-existing-key')).toBe(undefined);
});
test('should set a boolean', function () {
  Object(___WEBPACK_IMPORTED_MODULE_1__["setSettingForKey"])('false-key', false);
  expect(Object(___WEBPACK_IMPORTED_MODULE_1__["settingForKey"])('false-key')).toBe(false);
  Object(___WEBPACK_IMPORTED_MODULE_1__["setSettingForKey"])('true-key', true);
  expect(Object(___WEBPACK_IMPORTED_MODULE_1__["settingForKey"])('true-key')).toBe(true);
});
test('should set a string', function () {
  Object(___WEBPACK_IMPORTED_MODULE_1__["setSettingForKey"])('string-key', 'test');
  expect(Object(___WEBPACK_IMPORTED_MODULE_1__["settingForKey"])('string-key')).toBe('test');
});
test('should set undefined', function () {
  Object(___WEBPACK_IMPORTED_MODULE_1__["setSettingForKey"])('undefined-key', undefined);
  expect(Object(___WEBPACK_IMPORTED_MODULE_1__["settingForKey"])('undefined-key')).toBe(undefined);
});
test('should set object', function () {
  Object(___WEBPACK_IMPORTED_MODULE_1__["setSettingForKey"])('object-key', {
    a: 1
  });
  expect(Object(___WEBPACK_IMPORTED_MODULE_1__["settingForKey"])('object-key')).toEqual({
    a: 1
  });
});
test('should set a setting on a layer', function (context, document) {
  var layer = new _dom__WEBPACK_IMPORTED_MODULE_0__["Text"]({
    parent: document.selectedPage
  });
  Object(___WEBPACK_IMPORTED_MODULE_1__["setLayerSettingForKey"])(layer, 'object-key', {
    a: 1
  });
  expect(Object(___WEBPACK_IMPORTED_MODULE_1__["layerSettingForKey"])(layer, 'object-key')).toEqual({
    a: 1
  });
});
test('should set an undefined setting on a layer', function (context, document) {
  var layer = new _dom__WEBPACK_IMPORTED_MODULE_0__["Text"]({
    parent: document.selectedPage
  });
  expect(Object(___WEBPACK_IMPORTED_MODULE_1__["layerSettingForKey"])(layer, 'object-key')).toBe(undefined);
  Object(___WEBPACK_IMPORTED_MODULE_1__["setLayerSettingForKey"])(layer, 'object-key', {
    a: 1
  });
  expect(Object(___WEBPACK_IMPORTED_MODULE_1__["layerSettingForKey"])(layer, 'object-key')).toEqual({
    a: 1
  });
  Object(___WEBPACK_IMPORTED_MODULE_1__["setLayerSettingForKey"])(layer, 'object-key', undefined);
  expect(Object(___WEBPACK_IMPORTED_MODULE_1__["layerSettingForKey"])(layer, 'object-key')).toBe(undefined);
  Object(___WEBPACK_IMPORTED_MODULE_1__["setLayerSettingForKey"])(layer, 'object-key', 0);
  expect(Object(___WEBPACK_IMPORTED_MODULE_1__["layerSettingForKey"])(layer, 'object-key')).toBe(0);
  Object(___WEBPACK_IMPORTED_MODULE_1__["setLayerSettingForKey"])(layer, 'object-key', null);
  expect(Object(___WEBPACK_IMPORTED_MODULE_1__["layerSettingForKey"])(layer, 'object-key')).toBe(null);
});
test('should set a setting on a document', function (context, document) {
  Object(___WEBPACK_IMPORTED_MODULE_1__["setDocumentSettingForKey"])(document, 'object-key', {
    a: 1
  });
  expect(Object(___WEBPACK_IMPORTED_MODULE_1__["documentSettingForKey"])(document, 'object-key')).toEqual({
    a: 1
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@skpm/test-runner/expect/index.js */ "./node_modules/@skpm/test-runner/expect/index.js")))

/***/ }),

/***/ "./Source/settings/index.ts":
/*!**********************************!*\
  !*** ./Source/settings/index.ts ***!
  \**********************************/
/*! exports provided: version, globalSettingForKey, setGlobalSettingForKey, settingForKey, setSettingForKey, layerSettingForKey, setLayerSettingForKey, documentSettingForKey, setDocumentSettingForKey, sessionVariable, setSessionVariable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Settings */ "./Source/settings/Settings.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "globalSettingForKey", function() { return _Settings__WEBPACK_IMPORTED_MODULE_0__["globalSettingForKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setGlobalSettingForKey", function() { return _Settings__WEBPACK_IMPORTED_MODULE_0__["setGlobalSettingForKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "settingForKey", function() { return _Settings__WEBPACK_IMPORTED_MODULE_0__["settingForKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setSettingForKey", function() { return _Settings__WEBPACK_IMPORTED_MODULE_0__["setSettingForKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "layerSettingForKey", function() { return _Settings__WEBPACK_IMPORTED_MODULE_0__["layerSettingForKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setLayerSettingForKey", function() { return _Settings__WEBPACK_IMPORTED_MODULE_0__["setLayerSettingForKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "documentSettingForKey", function() { return _Settings__WEBPACK_IMPORTED_MODULE_0__["documentSettingForKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setDocumentSettingForKey", function() { return _Settings__WEBPACK_IMPORTED_MODULE_0__["setDocumentSettingForKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sessionVariable", function() { return _Settings__WEBPACK_IMPORTED_MODULE_0__["sessionVariable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setSessionVariable", function() { return _Settings__WEBPACK_IMPORTED_MODULE_0__["setSessionVariable"]; });


var version = {
  sketch: MSApplicationMetadata.metadata().appVersion,
  api: "2.0.0"
};

/***/ }),

/***/ "./Source/test-utils.ts":
/*!******************************!*\
  !*** ./Source/test-utils.ts ***!
  \******************************/
/*! exports provided: isRunningOnJenkins, createSymbolMaster, createSharedStyle, base64Image */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRunningOnJenkins", function() { return isRunningOnJenkins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSymbolMaster", function() { return createSymbolMaster; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSharedStyle", function() { return createSharedStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base64Image", function() { return base64Image; });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./Source/dom/index.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var _require = __webpack_require__(/*! ./dom */ "./Source/dom/index.js"),
    SymbolMaster = _require.SymbolMaster,
    Text = _require.Text,
    Artboard = _require.Artboard;

function isRunningOnJenkins() {
  return !__command.pluginBundle();
}
function createSymbolMaster(document) {
  var artboard = new Artboard({
    name: 'Test',
    parent: document.selectedPage
  });
  var text = new Text({
    text: 'Test value',
    parent: artboard
  }); // build the symbol master

  return {
    master: SymbolMaster.fromArtboard(artboard),
    text: text,
    artboard: artboard
  };
}
function createSharedStyle(document, Primitive, style) {
  var object = new Primitive(_objectSpread({
    name: 'Test',
    parent: document.selectedPage
  }, style ? {
    style: style
  } : {}));
  var sharedStyles = object.style.styleType == _dom__WEBPACK_IMPORTED_MODULE_0__["Style"].StyleType.Layer ? document.sharedLayerStyles : document.sharedTextStyles;
  var newLength = sharedStyles.push({
    name: 'test shared style',
    style: object.style
  });
  var sharedStyle = sharedStyles[newLength - 1];
  object.sharedStyle = sharedStyle;
  return {
    sharedStyle: sharedStyle,
    object: object
  };
} // using a base64 image cause I'm not sure where and how to keep assets that would work with both local and jenkins tests

var base64Image = 'iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAAAXNSR0IArs4c6QAAEDBJREFUWAm1WftvXcdxnt09z/u+uqQoUS+KtGQ7kZ3EERIHjuKmseNUhg07QI0qjeE6iAsU6QMoiqLtj/0v+mvzDxQFDARuixZp3DYp6jiW7cS24lAyRYqkSN73ee5uvtlzSTNGIlc/ZHFxeM6e3Z1vvpmdmT0UpbWSuAlLhF/VcCPcnTBEprq3xANF6YarYtZvFQlJWEOUhAEG9/vryJKEJhvyQiLjKwaTh9WsMAVNLWGKryhU5PFsHoAO/uvxpcJQ4cDDATh+A3lAVjXcSIcNj77DgZkYXeH2ZhNn+lSLHlwB1w1ziwuSknxDDmWF4UC6EyWM5YGCnPYsU800dr3ME8PSB8IdLqbEzBbCxJwoYKCGJMahH7rw6rymJoVFQRB3oFm8mXHBt1W3cNrxW56LxiME1pv93BOMUjVM+3C92XIFj+T+Q4PwPOt0f6rJfIsxlqwmIWbgKl5NpTkTjVUxRjFanoBx3AGjfgjIdeDCtt+/p9KwCjNMLGQf9D4Cz3kTuIMnsd+gOQoAyYA+pt+RqHkV2K4UhFt4odMF7x21mkrNw+QM1kxRnlz1sB3QDPsj5ldKOz90QAT7PC9WIXdW8909TAa/xiJetcJsGefDhvVhuFgRI8Aet+rKd2xuvK12FZ5hRDcDN+h2PIFiNw4ysK9YXbaYm4RrIFNehxucKWQ5VVMQB8IgQAgLV8NfKIbFeCdiCcbEpoHEUgkj4HKQA2TYsARVwTdWQBckukEsAJMA0F2dEryiG4pVgBiW5NGujdxkiAf7IcmQBWNb2IREOgsEEGABOnBeU7BxKRSC1cMqQMZgMJvZqmwCmWy+Sj56MQEAK1CMHQ+u8QbWxniiRllOPhjdIzVhqTonnZAdkpiSSKjMKbO2lAL44Nw05gX9iLw5ogWyDQoHpLFYjURT6phUCw4HLM6UparYhg4MS2Mhksw0YFmmB8AYe3VlTIDvgQ9YUkaUblE8GK5+P/SnQSaLcqTlUNtBUvSnaWJtLVC9xVMXbJoORhuj0SaJvB52ArFgyjAOR36tM85F2Drjdz9BysNLGWAXwjb4SWWl4K3IogUrxg2wAGcWx6su8Cysx7xhDOsF1kfZ+/8+2vuP1N8NMqyQiygRnoabhn6jEc83mqfJa4q42RGJMDt5ftPaG4UlrXMzUrE+Mk3UdHwyHA3aZx715SKVUekBGazgNgGYgTjscWQF1wALPzxjI8h9Czry4DxomAfz7b79zhv/fGZpGAZ7PkUAWvqpESC1GQRHw/opqi3SJKIgoOaptm/KSZqmv5BiV8VFaP0873dr7fEkW3v7dsuvixOPUF73VAuxhoWANEACOZW5nFhgcpufQTNSiU0D78ZAYGTetql8//rr/1QT6/Ay38+oaGC+LkWpIxmeCsL7SS7TuMO+n8JtOpDjSSOM1larYEJyANP4nmwHtDFc2/15u9dsUfM8aU/IBjSD40EWBCpQtZ/osMtAFXqBqSILmDEQaA0Vtylcn1z93uD2a2dPat8WNEo0nN3EVjQ8tRDX7qfGeVJHARhUmSSVBpl3nkJZ94pkOJlON6W/43s+5amU3qluMdp6LXsrDD/fACxsZGF9xDMgg3jsNyeYhXtVUEAY2Ye1/0r2yaza9f9cXf1epz3g/WjnKZGqNzVF4Mljqn4/RWdJ1ws9ybFBjC8C6VupEGFVSI2FqFhJ07DUYz+ISafw76aaaI1d8d/htR4tXSZRx3IA4TCVBWgmqMVtH4R7OPRYUjGgWv4/P3xZyt04zJPxHsGH4x5ihLal8hrUWKR4AUFLQ+Wal9mpZOVlmkz1eASbiu6p7sK9BtTmMAhMnKfDzXqQRHJ44+qrVPSpBFYWDO/SXA0gr8+aSO1OSTaimkKgSqwSPjub3qPRj+z/fjfd+Je4NR7FMgl1ba7e6DZ2tp/oHjkp22eJ2qZUcFsRYosjxuVSY5/HLoo670WQE7Y0/7h7a7Upx7HItzfW5DjviOa4H7aOPyoefoFqn8mzThCzf5el9lB9uakyK0pg0tYrSqkihynvE9221360fvOtMEJKEKOdcSTiRnBsb1u1ewuy0SEvQsQRKpAeIpzS1qUORETsKGRL/oF6BCLhtZa7jWUyPVPUG4iouS6ScbsZrK/9lN75IeWbQTDmNAX/tiDMsQffaiEcu8SCzJ5rpDzkkFV695WN91+O/VuyqUF+01I9a1ByuttaoNZxUnXYzmqvtEgj0lqjOcUBEdepswIBEQfbShg5PeO3F3x9I12/KsdbLUzRqc62WhGtvv3yUrdHZ79I9oSmhocqlWExXR6yJApYBCM4vcYN8sng2t57P2jo3WZoy+EU0awJF84VqTk6ci/5KPqQLZHgQl/55IGhzOdsWK2J9ApP4gchcw6PyEZRk9qno9Ee9a8TjbjkS5Jmz8sHk72fvtqNj9Jij2wdaBALKpf3KLVIBTkAheT7cMT12z/+r2RtdXkuMoP+dGpa3Q6lU665u23qb1GEdZH+GoQyAQg4/2IythFcFCvDvTjicARCP676CN0aUy2mFjhWtDV1mSUu3t9u91Zev/p2l06vLH5BSVUy5bMt6FEA7hkQZz/En1bsR+1310b9d9cWaipLs+F6miOB1q8tye9rP9wRtxT0kLE2PvuC1VIUSpaC3QvP2ARsSI6nkmNhQEcno2m30fWmyc3XrprbtBBTkWfUqG98cHMYn1yeX8IsY7Sn/AJVgauJENOgJXKSb3VmUBTIaO5zTy+v7938wcuetrEcJOM+RSLPis1rP1m493hPTSwfbzBbaovSCvFBS/4BFjdOYhUsXtYUYrvRCgO9s7O1m0+pHcOJ4vHUJsnc7jS455Fnjjx0mXRoUcmCnf14hSoBVMCgpadQFvmkscWOnXrmO14/W/+/fz0RhaHXTMqiFnlQl4Z9dQR2ASsTRAUPnHM4xqkLcFwGwfZz5RxW9CAKGKUJ9BQBx/YpRsmciGEqrd/dGHvnPve1xceeI9XFWKWCfJIHseOK7cabCUqijEFXg2SPguPkHT/+7IutlQsj4SGINqI47ScCzruawC3LokB60ZSXJqWgLHTpCjKUWdgWQAw9BQRZLu2RkgSlUg1pfIPCEt110+z9fJp1P31x8YknqY4oj+3G3DM5+2xxpnAFF/OPjYAwwedT1aDmiZXn/6wf9HZRLSRlO2pNUM+ltTI3XhxDNkeVAIWPRo4ujeaTKedad6PAIUag3wITsuTme9RWVKN6ngdbNrKnzy9dfobO3EMyTjOM5eLAYUMhxQ1Ke66KZZxwUfZSGARP/hzNf/KzL/ztRtGJo5ZJsqDW+GA7H+wVpHyN+gAbTvHZAFsYjBrYnwy04sQmy5JwXNdIKaSa0/c2Uc/6tibSKGos/CLzPnvlJTr3GVSqeB8hr1TRiktVXg+Nayze14caIIH4KQ7pcp7OX3rspb/7YK+Qtblx6Zuo279FNCgVymko5hSCs4J8aAuX4yCPYhPKlYhsXogKOBc3r1O92cnKdi6ObEy8373yJ+q+hxNqD8E2KALN7JogGxxhJjcmyTUgQWVtUH9hGJqKqJ/A8xbogccuPv2td/cK0Z4TtabdpWQDpmv5SFbYzzigTbF8QDqwhVKoypGuc/I0nDVUJiy29kKPhqmi9sk31vOHnvp2dPEy0ZyhHrqYcADCCcFtmAN3YljVxsZrsKgs7MB1DwbHbcrAhN+mS888+NiVnak/mIpQ0wTJHR6DrMwmV67+Rt1WVbmwIjIkaMONMdPpYIOKBGGn9+Pre1/+5p/T558kMadNHbue8zPEoPko8dl5UDy5Zz4X4RENf5GI4FxwE34uygSWUGGRgY3m6eaTf3zinkd03o5UlI11vj1gRYUwZRlECHCl8JAEMR+pSfPBG5W+Tvq7WbpJvfqZta38k5cuy69doXCRdKwoCIsUm5glAR1KTmTPCgN3sRGBYsYgY3VwYdDYo9wMNGVeXNcalcXc4uXfn++dRrrJU9rdKZh3KXLYqxaXDAvRYd814Aegr9T9AS10Tq/f2Dt77sHFr19hjv2YUKwCP2sF+dYiReLQq9PSlAFOWa4Jy/Hw1ze8QpMuT+EGx4Ysy/b+/lymk9xMzj1wLJ5HuQFSQ2PLspWNUxPFBMeyE4rDOHu9TLfFq+pLfr37+B+8QCufwoGHwrb1OWshlwLPjBH3XQNnbnTAFdDYt+7cAAgD4CthGNZqtbPP/WnfdI1ojHdTSkWZoBgKUYzj+I7CRGZ8fotbfrFTGNvY3MkpqD3+1LN09jzyG/khnMhZ50Amm+/g4eDmTrAABe3DoVIGOHI9+I2Lz/5NXsyPN/JsI/MaR7M0ZQISG3EQknZMetopzcmfXc+95srDjz9NFy6SqlEhKIgRcPENCOZjLB+uzU+ActBxJ1g80cEyrlW0kVj2vvDcxd978fptOdzxaeqHnir11JO+LLFphK8DNe3eWDV74vjyl5878sUnOGxmOBG1kY6A7ZCFgAYhHtZgWIfbx8DC0AoZMFXg2FXLOfnVF5a+8vzqTVHcSGAX+LCHU7yMskSL+jztRmtvjR/46h/RV75BqkMljrVz1g8nCCiueC1mMPCnMiIjOwz4N8ICiBk9UA9p1DV2f+wylO+mtfSHf9E8/6U3Vyc0MX4YsilR2/tNRNo3X7/5wMNPzT/6NIpSfNI1fgM84WyLGAAgGRK2+0B1mJ6PEPYbYR2Q9KuTXdTE4UqHSAD3feuvB8c+sT0IKAmgBrs9dbZvTNKFlaPffImaR5Hy4XbG9xMXT/gDklPKJRIg5M3EDf1wykPQ7gQLyCrbHdCGG8upz0aNuMgkHVu59PxfvnGdppNe3DxGVEuGwTvr5uKLf0W9Jc0nZlk4w6HoD7xZWosUZVnqjAlNHCbn6zPDVjgPRLrHj78gwKI+ZiOIAqkspIF+85WfvPIPD12w48HO1mZn+dKL9KmvJ7odq8AUhfAbWPRApKOB64xf7UNxxSU2WhW37hRO3bCPXizSUpn5/H0Ux1P+FkjDW+nP/m3tze922rXO6d/x7ntCNy+MKYxMGsIySJ1oznzIZs5wFUhcK1sxJmSMCmlVnlbgPir7Ds8C3xq4/sdO1yHyD6qteDm60OiMx7VW6H36cfJOWAqBJc8t0mUVobik5uYYmcXPGSYHbuZLsz/Q4m6NCHZQchrFhlD4XoIAjy8f0DS7ReXUdk4MkfOMCiXlOK/7+LgGQA4T4tNBQGfygAF/QBKDqVDjpiqr7hqWO6EgmDlrVKcmTtFOT1TJXEYDJEo3Unxq2TcUy8UP8CuDVoDwcEDQvp15xKFe9/jxF2nx1YhFoCJGceo+NOCIiYKcD6cZ3I01RlGd8D9VHAy3KB7gMJiKHzAzSfCnCiwGOFvjaAiluN21b5FFRSW0xHdBXgwFnI+vmDiG4csRBIoExx3+ioaQwOaTqAvQKk5wHsI9K3AIcIWU+2ZZiMdU43nm/7eV+KaLio8/ucOBS9yhWlKFLvB5nKIAK1bbzUnHCXcfRwWlwgRZBzzN5OIFI0M3t7v2rWrab/t692z9thG59X8JjZB/N6F8uAYAAAAASUVORK5CYII=';

/***/ }),

/***/ "./Source/ui/UI.js":
/*!*************************!*\
  !*** ./Source/ui/UI.js ***!
  \*************************/
/*! exports provided: message, alert, INPUT_TYPE, getInputFromUser, getStringFromUser, getSelectionFromUser, getTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "message", function() { return message; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alert", function() { return alert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INPUT_TYPE", function() { return INPUT_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInputFromUser", function() { return getInputFromUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStringFromUser", function() { return getStringFromUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectionFromUser", function() { return getSelectionFromUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTheme", function() { return getTheme; });
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! util */ "./core-modules/node_modules/@skpm/util/index.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_0__);
/* globals NSAlertFirstButtonReturn */


function getPluginAlertIcon() {
  if (__command.pluginBundle() && __command.pluginBundle().alertIcon()) {
    return __command.pluginBundle().alertIcon();
  }

  return NSImage.imageNamed('plugins');
}
/**
 * Show a small, temporary, message to the user.
 * The message appears at the bottom of the selected document,
 * and is visible for a short period of time. It should consist of a single
 * line of text.
 *
 * @param {string} text The message to show.
 * @param [Document] document The document in which we will show the message
 */


function message(text, document) {
  if (!document) {
    NSApplication.sharedApplication().orderedDocuments().firstObject().showMessage(text);
  } else if (util__WEBPACK_IMPORTED_MODULE_0___default.a.isNativeObject(document)) {
    document.showMessage(text);
  } else {
    document.sketchObject.showMessage(text);
  }
}
/**
 * Show an alert with a custom title and message.
 *
 * @param {string} title The title of the alert.
 * @param {string} text The text of the message.
 *
 * The alert is modal, so it will stay around until the user dismisses it
 * by pressing the OK button.
 */

function alert(title, text) {
  var dialog = NSAlert.alloc().init();
  dialog.setMessageText(title);
  dialog.setInformativeText(text);
  dialog.icon = getPluginAlertIcon();
  return dialog.runModal();
}
var INPUT_TYPE = {
  string: 'string',
  slider: 'slider',
  selection: 'selection' // coming soon
  // number: 'number',
  // color: 'color',
  // path: 'path'

};
function getInputFromUser(messageText, options, callback) {
  /* eslint-disable no-param-reassign */
  if (!options) {
    options = {};

    callback = function callback() {};
  } else if (util__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction(options)) {
    callback = options;
    options = {};
  }
  /* eslint-enable */


  var type = String(options.type || INPUT_TYPE.string);

  if (options.type && !INPUT_TYPE[type]) {
    throw new Error('unknown input type');
  }

  if (!messageText || typeof messageText !== 'string') {
    throw new Error('input description missing');
  }

  var dialog = NSAlert.alloc().init();
  var accessory;

  switch (type) {
    case INPUT_TYPE.string:
      accessory = NSTextField.alloc().initWithFrame(NSMakeRect(0, 0, 295, 25));
      accessory.setStringValue(String(typeof options.initialValue === 'undefined' ? '' : options.initialValue));
      dialog.window().setInitialFirstResponder(accessory);
      break;
    // case INPUT_TYPE.number:
    //   accessory = NSStepper.alloc().initWithFrame(NSMakeRect(0, 0, 295, 25))
    //   accessory.setFloatValue(Number(options.initialValue || 0))
    //   if (typeof options.maxValue !== 'undefined') {
    //     accessory.setMaxValue(options.maxValue)
    //   }
    //   if (typeof options.minValue !== 'undefined') {
    //     accessory.setMinValue(options.minValue)
    //   }
    //   if (typeof options.increment !== 'undefined') {
    //     accessory.setIncrement(options.increment)
    //   }
    //   break

    case INPUT_TYPE.slider:
      {
        accessory = NSSlider.alloc().initWithFrame(NSMakeRect(0, 0, 295, 25));
        accessory.setFloatValue(Number(options.initialValue || 0));

        if (typeof options.maxValue !== 'undefined') {
          accessory.setMaxValue(options.maxValue);
        }

        if (typeof options.minValue !== 'undefined') {
          accessory.setMinValue(options.minValue);
        }

        if (typeof options.increment !== 'undefined') {
          accessory.setAllowsTickMarkValuesOnly(true);
          accessory.setNumberOfTickMarks(parseInt(1 + ((typeof options.maxValue !== 'undefined' ? options.maxValue : 1) - (typeof options.minValue !== 'undefined' ? options.minValue : 0)) / options.increment, 10));
        }

        break;
      }

    case INPUT_TYPE.selection:
      {
        if (!util__WEBPACK_IMPORTED_MODULE_0___default.a.isArray(options.possibleValues)) {
          throw new Error('When the input type is `selection`, you need to provide the array of possible choices.');
        }

        accessory = NSComboBox.alloc().initWithFrame(NSMakeRect(0, 0, 295, 25));
        accessory.addItemsWithObjectValues(options.possibleValues);
        var initialIndex = options.possibleValues.indexOf(options.initialValue);
        accessory.selectItemAtIndex(initialIndex !== -1 ? initialIndex : 0);
        accessory.editable = false;
        break;
      }

    default:
      break;
  }

  dialog.setMessageText(messageText);

  if (options.description) {
    dialog.setInformativeText(options.description);
  }

  dialog.addButtonWithTitle(options.okButton || 'OK');
  dialog.addButtonWithTitle(options.cancelButton || 'Cancel');
  dialog.setAccessoryView(accessory);
  dialog.icon = getPluginAlertIcon();
  var responseCode = dialog.runModal();

  if (responseCode !== NSAlertFirstButtonReturn) {
    callback(new Error('user canceled input'));
    return;
  }

  switch (type) {
    case INPUT_TYPE.string:
      callback(null, String(accessory.stringValue()));
      return;
    // case INPUT_TYPE.number:
    //   return Number(accessory.stringValue())

    case INPUT_TYPE.slider:
      {
        var value = typeof options.increment !== 'undefined' ? accessory.closestTickMarkValueToValue(accessory.floatValue()) : accessory.floatValue();
        callback(null, Number(value));
        return;
      }

    case INPUT_TYPE.selection:
      {
        var selectedIndex = accessory.indexOfSelectedItem();
        callback(null, options.possibleValues[selectedIndex]);
        return;
      }

    default:
      callback(null, undefined);
  }
}
/**
 * Shows a simple input sheet which displays a message, and asks for a single string
 * input.
 * @param msg The prompt message to show.
 * @param initial The initial value of the input string.
 * @return The string that the user input.
 */

function getStringFromUser(msg, initial) {
  console.warn("`UI.getStringFromUser(message, initialValue)` is deprecated.\nUse `UI.getInputFromUser(\n  message,\n  { initialValue },\n  (error, value) => {}\n)` instead.");
  var accessory = NSTextField.alloc().initWithFrame(NSMakeRect(0, 0, 295, 25));
  accessory.setStringValue(String(typeof initial === 'undefined' ? '' : initial));
  var dialog = NSAlert.alloc().init();
  dialog.setMessageText('User input');
  dialog.setInformativeText(msg);
  dialog.addButtonWithTitle('OK');
  dialog.addButtonWithTitle('Cancel');
  dialog.setAccessoryView(accessory);
  dialog.icon = getPluginAlertIcon();
  dialog.window().setInitialFirstResponder(accessory);
  dialog.runModal();
  return String(accessory.stringValue());
}
/**
 * Shows an input sheet which displays a popup with a series of options,
 * from which the user is asked to choose.
 *
 * @param msg The prompt message to show.
 * @param items A list of option items.
 * @param selectedItemIndex The index of the item to select initially.
 * @return An array with three items: [responseCode, selection, ok].
 */

function getSelectionFromUser(msg, items) {
  var selectedItemIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  console.warn("`UI.getSelectionFromUser(message, items, selectedItemIndex)` is deprecated.\nUse `UI.getInputFromUser(\n  message,\n  { type: UI.INPUT_TYPE.selection, items, initialValue },\n  (error, value) => {}\n)` instead.");
  var accessory = NSComboBox.alloc().initWithFrame(NSMakeRect(0, 0, 295, 25));
  accessory.addItemsWithObjectValues(items);
  accessory.selectItemAtIndex(selectedItemIndex);
  accessory.editable = false;
  var dialog = NSAlert.alloc().init();
  dialog.setMessageText(msg);
  dialog.addButtonWithTitle('OK');
  dialog.addButtonWithTitle('Cancel');
  dialog.setAccessoryView(accessory);
  dialog.icon = getPluginAlertIcon();
  var responseCode = dialog.runModal();
  var sel = accessory.indexOfSelectedItem();
  return [responseCode, sel, responseCode === NSAlertFirstButtonReturn];
}
function getTheme() {
  return MSTheme.sharedTheme().isDark() ? 'dark' : 'light';
}

/***/ }),

/***/ "./Source/ui/index.ts":
/*!****************************!*\
  !*** ./Source/ui/index.ts ***!
  \****************************/
/*! exports provided: version, message, alert, INPUT_TYPE, getInputFromUser, getStringFromUser, getSelectionFromUser, getTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ "./Source/ui/UI.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "message", function() { return _UI__WEBPACK_IMPORTED_MODULE_0__["message"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "alert", function() { return _UI__WEBPACK_IMPORTED_MODULE_0__["alert"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "INPUT_TYPE", function() { return _UI__WEBPACK_IMPORTED_MODULE_0__["INPUT_TYPE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getInputFromUser", function() { return _UI__WEBPACK_IMPORTED_MODULE_0__["getInputFromUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStringFromUser", function() { return _UI__WEBPACK_IMPORTED_MODULE_0__["getStringFromUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSelectionFromUser", function() { return _UI__WEBPACK_IMPORTED_MODULE_0__["getSelectionFromUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTheme", function() { return _UI__WEBPACK_IMPORTED_MODULE_0__["getTheme"]; });


var version = {
  sketch: MSApplicationMetadata.metadata().appVersion,
  api: "2.0.0"
};

/***/ }),

/***/ "./core-modules/node_modules/@skpm/buffer/base64-js.js":
/*!*************************************************************!*\
  !*** ./core-modules/node_modules/@skpm/buffer/base64-js.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  for (var i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./core-modules/node_modules/@skpm/buffer/ieee754.js":
/*!***********************************************************!*\
  !*** ./core-modules/node_modules/@skpm/buffer/ieee754.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./core-modules/node_modules/@skpm/buffer/index.js":
/*!*********************************************************!*\
  !*** ./core-modules/node_modules/@skpm/buffer/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! ./base64-js */ "./core-modules/node_modules/@skpm/buffer/base64-js.js")
var ieee754 = __webpack_require__(/*! ./ieee754 */ "./core-modules/node_modules/@skpm/buffer/ieee754.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

var K_MAX_LENGTH = 0x7fffffff
exports.kMaxLength = K_MAX_LENGTH

Object.defineProperty(Buffer.prototype, 'parent', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.buffer
  }
})

Object.defineProperty(Buffer.prototype, 'offset', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.byteOffset
  }
})

function createBuffer (length) {
  if (length > K_MAX_LENGTH) {
    throw new RangeError('The value "' + length + '" is invalid for option "size"')
  }
  // Return an augmented `Uint8Array` instance
  var buf = new Uint8Array(length)
  buf.__proto__ = Buffer.prototype
  return buf
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new TypeError(
        'The "string" argument must be of type string. Received type number'
      )
    }
    return allocUnsafe(arg)
  }
  return from(arg, encodingOrOffset, length)
}

// Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
if (typeof Symbol !== 'undefined' && Symbol.species != null &&
    Buffer[Symbol.species] === Buffer) {
  Object.defineProperty(Buffer, Symbol.species, {
    value: null,
    configurable: true,
    enumerable: false,
    writable: false
  })
}

Buffer.poolSize = 8192 // not used by this implementation

function from (value, encodingOrOffset, length) {
  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset)
  }

  if (ArrayBuffer.isView(value)) {
    return fromArrayLike(value)
  }

  if (value == null) {
    throw TypeError(
      'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
      'or Array-like Object. Received type ' + (typeof value)
    )
  }

  if (isInstance(value, ArrayBuffer) ||
      (value && isInstance(value.buffer, ArrayBuffer))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof value === 'number') {
    throw new TypeError(
      'The "value" argument must not be of type number. Received type number'
    )
  }

  var valueOf = value.valueOf && value.valueOf()
  if (valueOf != null && valueOf !== value) {
    return Buffer.from(valueOf, encodingOrOffset, length)
  }

  var b = fromObject(value, encodingOrOffset, length)
  if (b) return b

  if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null &&
      typeof value[Symbol.toPrimitive] === 'function') {
    return Buffer.from(
      value[Symbol.toPrimitive]('string'), encodingOrOffset, length
    )
  }

  throw new TypeError(
    'The first argument must be one of type string, Buffer, ArrayBuffer, Array, NSData, ' +
    'or Array-like Object. Received type ' + (typeof value)
  )
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(value, encodingOrOffset, length)
}

// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Buffer.prototype.__proto__ = Uint8Array.prototype
Buffer.__proto__ = Uint8Array

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be of type number')
  } else if (size < 0) {
    throw new RangeError('The value "' + size + '" is invalid for option "size"')
  }
}

function alloc (size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(size).fill(fill, encoding)
      : createBuffer(size).fill(fill)
  }
  return createBuffer(size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(size, fill, encoding)
}

function allocUnsafe (size) {
  assertSize(size)
  return createBuffer(size < 0 ? 0 : checked(size) | 0)
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(size)
}

function fromString (string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('Unknown encoding: ' + encoding)
  }

  var length = byteLength(string, encoding) | 0
  var buf = createBuffer(length)

  var actual = buf.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual)
  }

  return buf
}

function fromArrayLike (array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  var buf = createBuffer(length)
  for (var i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255
  }
  return buf
}

function fromArrayBuffer (array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('"offset" is outside of buffer bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('"length" is outside of buffer bounds')
  }

  var buf
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array)
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset)
  } else {
    buf = new Uint8Array(array, byteOffset, length)
  }

  // Return an augmented `Uint8Array` instance
  buf.__proto__ = Buffer.prototype
  return buf
}

function fromNSData (nsdata, encodingOrOffset, length) {
  // parse nsdata as a string
  const data = String(NSString.alloc().initWithData_encoding(nsdata, NSISOLatin1StringEncoding))

  // respect options
  const _offset = encodingOrOffset || 0
  const _length = typeof length !== 'undefined' ? length : (data.length - _offset)

  const buf = new Uint8Array(_length);
  for (let i = _offset; i < _length + _offset; i += 1) {
    buf[i] = data.charCodeAt(i);
  }

  // Return an augmented `Uint8Array` instance
  buf.__proto__ = Buffer.prototype
  return buf;
}

function fromObject (obj, encodingOrOffset, length) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    var buf = createBuffer(len)

    if (buf.length === 0) {
      return buf
    }

    obj.copy(buf, 0, 0, len)
    return buf
  }

  if (typeof obj.isKindOfClass === 'function' && obj.isKindOfClass(NSData)) {
    return fromNSData(obj, encodingOrOffset, length)
  }

  if (obj.length !== undefined) {
    if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
      return createBuffer(0)
    }
    return fromArrayLike(obj)
  }

  if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
    return fromArrayLike(obj.data)
  }
}

function checked (length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return b != null && b._isBuffer === true &&
    b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
}

Buffer.compare = function compare (a, b) {
  if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength)
  if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength)
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError(
      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
    )
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!Array.isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (isInstance(buf, Uint8Array)) {
      buf = Buffer.from(buf)
    }
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    throw new TypeError(
      'The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' +
      'Received type ' + typeof string
    )
  }

  var len = string.length
  var mustMatch = (arguments.length > 2 && arguments[2] === true)
  if (!mustMatch && len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) {
          return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
        }
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.toLocaleString = Buffer.prototype.toString

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim()
  console.log(str)
  if (this.length > max) str += ' ... '
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (isInstance(target, Uint8Array)) {
    target = Buffer.from(target, target.offset, target.byteLength)
  }
  if (!Buffer.isBuffer(target)) {
    throw new TypeError(
      'The "target" argument must be one of type Buffer or Uint8Array. ' +
      'Received type ' + (typeof target)
    )
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset // Coerce to Number.
  if (numberIsNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  var strLen = string.length

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (numberIsNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset >>> 0
    if (isFinite(length)) {
      length = length >>> 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

Buffer.prototype.toNSData = function toNSData () {
  const string = NSString.stringWithString(this.toString('binary'))
  return string.dataUsingEncoding(NSISOLatin1StringEncoding)
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
        : (firstByte > 0xBF) ? 2
          : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256))
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf = this.subarray(start, end)
  // Return an augmented `Uint8Array` instance
  newBuf.__proto__ = Buffer.prototype
  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset + 3] = (value >>> 24)
  this[offset + 2] = (value >>> 16)
  this[offset + 1] = (value >>> 8)
  this[offset] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  this[offset + 2] = (value >>> 16)
  this[offset + 3] = (value >>> 24)
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer')
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('Index out of range')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start

  if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
    // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end)
  } else if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (var i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, end),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if ((encoding === 'utf8' && code < 128) ||
          encoding === 'latin1') {
        // Fast path: If `val` fits into a single byte, use that numeric value.
        val = code
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : Buffer.from(val, encoding)
    var len = bytes.length
    if (len === 0) {
      throw new TypeError('The value "' + val +
        '" is invalid for argument "value"')
    }
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node takes equal signs as end of the Base64 encoding
  str = str.split('=')[0]
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = str.trim().replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance (obj, type) {
  return obj instanceof type ||
    (obj != null && obj.constructor != null && obj.constructor.name != null &&
      obj.constructor.name === type.name)
}
function numberIsNaN (obj) {
  // For IE11 support
  return obj !== obj // eslint-disable-line no-self-compare
}


/***/ }),

/***/ "./core-modules/node_modules/@skpm/util/callbackify.js":
/*!*************************************************************!*\
  !*** ./core-modules/node_modules/@skpm/util/callbackify.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function callbackify(original) {
  return function(callback) {
    original().then(function (result) {
      callback(null, result)
    }).catch(function (err) {
      if (err === null) {
        err = new Error()
        err.reason = null
      }
      callback(err)
    })
  }
}


/***/ }),

/***/ "./core-modules/node_modules/@skpm/util/casting.js":
/*!*********************************************************!*\
  !*** ./core-modules/node_modules/@skpm/util/casting.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function isKindOfClass(arg, nativeClass) {
  return !!arg && !!arg.isKindOfClass && toBoolean(arg.isKindOfClass(nativeClass))
}

function objectToString(o) {
  return Object.prototype.toString.call(o);
}

// check if the argument is a native sketch object
function getNativeClass(arg) {
  try {
    return arg && arg.isKindOfClass && typeof arg.class === 'function' && String(arg.class())
  } catch (err) {
    return undefined
  }
}
exports.getNativeClass = getNativeClass

function isNativeObject(arg) {
  return !!getNativeClass(arg)
}
exports.isNativeObject = isNativeObject

/**
 * Coerce common NSObjects to their JS counterparts
 * @param arg Any object
 *
 * Converts NSDictionary, NSArray, NSString, and NSNumber to
 * native JS equivilents.
 *
 * Note that NSDictionary and NSArray elements are not recursively converted
 * unless the options.recurse is set to `true`
 */
function toJSObject(arg, options) {
  if (arg) {
    if (isObject(arg)) {
      var obj = toObject(arg, options)
      if (options && options.recurse) {
        Object.keys(obj).forEach(function (k) {
          obj[k] = toJSObject(obj[k], options)
        })
      }
      return obj
    } else if (isArray(arg)) {
      var arr = toArray(arg, options)
      if (options && options.recurse) {
        arr.forEach(function (x, i) {
          arr[i] = toJSObject(x, options)
        })
      }
      return arr
    } else if (isString(arg)) {
      return String(arg)
    } else if (isBoolean(arg)) {
      return toBoolean(arg)
    } else if (isNumber(arg)) {
      return Number(arg)
    }
  }
  return arg
}
exports.toJSObject = toJSObject

function isArray(ar) {
  if (Array.isArray(ar)) {
    return true
  }
  return isKindOfClass(ar, NSArray)
}
exports.isArray = isArray;

function toArray(object, options) {
  if (Array.isArray(object)) {
    return object
  }
  var arr = []
  for (var j = 0; j < (object || []).length; j += 1) {
    arr.push(object[j])
  }
  return arr
}
exports.toArray = toArray;

function isBoolean(arg) {
  if (typeof arg === 'boolean') {
    return true
  }
  return getNativeClass(arg) === '__NSCFBoolean'
}
exports.isBoolean = isBoolean;

function toBoolean(arg) {
  if (typeof arg === 'boolean') {
    return arg
  }
  return Boolean(Number(arg))
}
exports.toBoolean = toBoolean

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  if (typeof arg === 'number') {
    return true
  }
  return isKindOfClass(arg, NSNumber)
}
exports.isNumber = isNumber;

function isString(arg) {
  if (typeof arg === 'string') {
    return true
  }
  return isKindOfClass(arg, NSString)
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return typeof arg === 'undefined';
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  if (typeof arg === 'object' && arg !== null && !isNativeObject(arg)) {
    return true
  }
  return isKindOfClass(arg, NSDictionary) || isKindOfClass(arg, MOStruct)
}
exports.isObject = isObject;

function toObject(obj) {
  if (isKindOfClass(obj, MOStruct)) {
    return obj.memberNames().reduce(function(prev, k) {
      prev[k] = obj[k]
      return prev
    }, {})
  } else if (typeof obj === 'object') {
    return obj
  }
  return Object(obj)
}
exports.toObject = toObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function' || arg instanceof MOMethod;
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return isNull(arg) ||
         isBoolean(arg) ||
         isNumber(arg) ||
         isString(arg) ||
         isSymbol(arg) ||
         isUndefined(arg);
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
};


/***/ }),

/***/ "./core-modules/node_modules/@skpm/util/deep-equal.js":
/*!************************************************************!*\
  !*** ./core-modules/node_modules/@skpm/util/deep-equal.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Copyright (c) 2008-2016 Pivotal Labs

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/

/* eslint-disable */

function iterableEquality(a, b) {
  if (
    typeof a !== 'object' ||
    typeof b !== 'object' ||
    Array.isArray(a) ||
    Array.isArray(b) ||
    a === null ||
    b === null
  ) {
    return undefined
  }
  if (a && b && a.constructor !== b.constructor) {
    // check if the object are natives and then shallow equal them
    return a.sketchObject && b.sketchObject && a.sketchObject == b.sketchObject
  }

  if (a.size !== undefined) {
    if (a.size !== b.size) {
      return false
    } else if (isA('Set', a)) {
      var allFound = true
      for (var aValue of a) {
        if (!b.has(aValue)) {
          allFound = false
          break
        }
      }
      if (allFound) {
        return true
      }
    } else if (isA('Map', a)) {
      var allFound = true
      for (var aEntry of a) {
        if (
          !b.has(aEntry[0]) ||
          !equals(aEntry[1], b.get(aEntry[0]), [iterableEquality])
        ) {
          allFound = false
          break
        }
      }
      if (allFound) {
        return true
      }
    }
  }

  if (Object.keys(a).length !== Object.keys(a).length) {
    return false
  }

  var aKeys = Object.keys(a).sort()
  var bKeys = Object.keys(b).sort()

  for (var i = 0; i < aKeys.length; i += 1) {
    var aKey = aKeys[i]
    var bKey = bKeys[i]
    if (aKey !== bKey || !equals(a[aKey], b[bKey], [iterableEquality])) {
      return false
    }
  }

  return true
}

function isObjectWithKeys(a) {
  return (
    a !== null &&
    typeof a === 'object' &&
    !(a instanceof Error) &&
    !(a instanceof Array) &&
    !(a instanceof Date)
  )
}

function subsetEquality(object, subset) {
  if (!isObjectWithKeys(object) || !isObjectWithKeys(subset)) {
    return undefined
  }

  return Object.keys(subset).every(function (key) {
    return hasOwnProperty(object, key) &&
      equals(object[key], subset[key], [iterableEquality, subsetEquality])
  })
}

// Extracted out of jasmine 2.5.2
function equals(a, b, customTesters) {
  customTesters = customTesters || [iterableEquality]
  return eq(a, b, [], [], customTesters)
}

function isAsymmetric(obj) {
  return obj && isA('Function', obj.asymmetricMatch)
}

function asymmetricMatch(a, b) {
  var asymmetricA = isAsymmetric(a),
    asymmetricB = isAsymmetric(b)

  if (asymmetricA && asymmetricB) {
    return undefined
  }

  if (asymmetricA) {
    return a.asymmetricMatch(b)
  }

  if (asymmetricB) {
    return b.asymmetricMatch(a)
  }
}

// Equality function lovingly adapted from isEqual in
//   [Underscore](http://underscorejs.org)
function eq(a, b, aStack, bStack, customTesters) {
  var result = true

  var asymmetricResult = asymmetricMatch(a, b)
  if (asymmetricResult !== undefined) {
    return asymmetricResult
  }

  for (var i = 0; i < customTesters.length; i++) {
    var customTesterResult = customTesters[i](a, b)
    if (customTesterResult !== undefined) {
      return customTesterResult
    }
  }

  if (a instanceof Error && b instanceof Error) {
    return a.message == b.message
  }

  // Identical objects are equal. `0 === -0`, but they aren't identical.
  // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
  if (a === b) {
    return a !== 0 || 1 / a == 1 / b
  }
  // A strict comparison is necessary because `null == undefined`.
  if (a === null || b === null) {
    return a === b
  }
  var className = Object.prototype.toString.call(a)
  if (className != Object.prototype.toString.call(b)) {
    return false
  }
  switch (className) {
    // Strings, numbers, dates, and booleans are compared by value.
    case '[object String]':
      // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
      // equivalent to `new String("5")`.
      return a == String(b)
    case '[object Number]':
      // `NaN`s are equivalent, but non-reflexive. An `egal` comparison is performed for
      // other numeric values.
      return a != +a ? b != +b : a === 0 ? 1 / a == 1 / b : a == +b
    case '[object Date]':
    case '[object Boolean]':
      // Coerce dates and booleans to numeric primitive values. Dates are compared by their
      // millisecond representations. Note that invalid dates with millisecond representations
      // of `NaN` are not equivalent.
      return +a == +b
    // RegExps are compared by their source patterns and flags.
    case '[object RegExp]':
      return (
        a.source == b.source &&
        a.global == b.global &&
        a.multiline == b.multiline &&
        a.ignoreCase == b.ignoreCase
      )
  }
  if (typeof a != 'object' || typeof b != 'object') {
    return false
  }

  // Assume equality for cyclic structures. The algorithm for detecting cyclic
  // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
  var length = aStack.length
  while (length--) {
    // Linear search. Performance is inversely proportional to the number of
    // unique nested structures.
    if (aStack[length] == a) {
      return bStack[length] == b
    }
  }
  // Add the first object to the stack of traversed objects.
  aStack.push(a)
  bStack.push(b)
  var size = 0
  // Recursively compare objects and arrays.
  // Compare array lengths to determine if a deep comparison is necessary.
  if (className == '[object Array]') {
    size = a.length
    if (size !== b.length) {
      return false
    }

    while (size--) {
      result = eq(a[size], b[size], aStack, bStack, customTesters)
      if (!result) {
        return false
      }
    }
  }

  // Deep compare objects.
  var aKeys = keys(a, className == '[object Array]'),
    key
  size = aKeys.length

  // Ensure that both objects contain the same number of properties before comparing deep equality.
  if (keys(b, className == '[object Array]').length !== size) {
    return false
  }

  while (size--) {
    key = aKeys[size]

    // Deep compare each member
    result = has(b, key) && eq(a[key], b[key], aStack, bStack, customTesters)

    if (!result) {
      return false
    }
  }
  // Remove the first object from the stack of traversed objects.
  aStack.pop()
  bStack.pop()

  return result
}

function keys(obj, isArray) {
  var allKeys = (function(o) {
    var keys = []
    for (var key in o) {
      if (has(o, key)) {
        keys.push(key)
      }
    }
    return keys.concat(Object.getOwnPropertySymbols(o))
  })(obj)

  if (!isArray) {
    return allKeys
  }

  var extraKeys = []
  if (allKeys.length === 0) {
    return allKeys
  }

  for (var x = 0; x < allKeys.length; x++) {
    if (!allKeys[x].match(/^[0-9]+$/)) {
      extraKeys.push(allKeys[x])
    }
  }

  return extraKeys
}

function has(obj, key) {
  return (
    Object.prototype.hasOwnProperty.call(obj, key) && obj[key] !== undefined
  )
}

function isA(typeName, value) {
  return Object.prototype.toString.apply(value) === '[object ' + typeName + ']'
}

module.exports = equals
module.exports.iterableEquality = iterableEquality
module.exports.subsetEquality = subsetEquality


/***/ }),

/***/ "./core-modules/node_modules/@skpm/util/deprecate.js":
/*!***********************************************************!*\
  !*** ./core-modules/node_modules/@skpm/util/deprecate.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
module.exports = function deprecate(fn, msg) {
  var warned = false;
  function deprecated() {
    if (!warned) {
      console.error(msg);
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


/***/ }),

/***/ "./core-modules/node_modules/@skpm/util/index.js":
/*!*******************************************************!*\
  !*** ./core-modules/node_modules/@skpm/util/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var casting = __webpack_require__(/*! ./casting */ "./core-modules/node_modules/@skpm/util/casting.js")
var getNativeClass = casting.getNativeClass
var isArray = casting.isArray
var toArray = casting.toArray
var isBoolean = casting.isBoolean
var isNumber = casting.isNumber
var isString = casting.isString
var isUndefined = casting.isUndefined
var isRegExp = casting.isRegExp
var isObject = casting.isObject
var toObject = casting.toObject
var isDate = casting.isDate
var isError = casting.isError
var isFunction = casting.isFunction
var isPrimitive = casting.isPrimitive

// we need to duplicate the method cause cocoascript is angry otherwise
function isNull(arg) {
  return arg === null;
}

exports.getNativeClass = getNativeClass
exports.isNativeObject = casting.isNativeObject
exports.toJSObject = casting.toJSObject
exports.isArray = isArray
exports.toArray = toArray
exports.isBoolean = isBoolean
exports.toBoolean = casting.toBoolean
exports.isNull = casting.isNull
exports.isNullOrUndefined = casting.isNullOrUndefined
exports.isNumber = isNumber
exports.isString = isString
exports.isSymbol = casting.isSymbol
exports.isUndefined = isUndefined
exports.isRegExp = isRegExp
exports.isObject = isObject
exports.toObject = toObject
exports.isDate = isDate
exports.isError = isError
exports.isFunction = isFunction
exports.isPrimitive = isPrimitive
exports.isBuffer = casting.isBuffer

exports.callbackify = __webpack_require__(/*! ./callbackify */ "./core-modules/node_modules/@skpm/util/callbackify.js")

var debugs = {};
var debugEnviron;
exports.debuglog = function debuglog(set) {
  if (isUndefined(debugEnviron) && typeof process != 'undefined') {
    debugEnviron = process && Object({"NODE_ENV":"development","API_VERSION":"2.0.0"}) && Object({"NODE_ENV":"development","API_VERSION":"2.0.0"}).NODE_DEBUG || '';
  }
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s: %s', set, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};

exports.deprecate = __webpack_require__(/*! ./deprecate */ "./core-modules/node_modules/@skpm/util/deprecate.js");

var formatRegExp = /%[sdifjoO%]/g;
exports.format = function(f) {
  if (arguments.length <= 1) {
    return inspect(f)
  }
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%i': return Number(args[i++]);
      case '%f': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      case '%o': return inspect(args[i++], { showHidden: true, depth: 4, showProxy: true });
      case '%O': return inspect(args[i++]);
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};

/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  exports.inherits = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  exports.inherits = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = Object.assign({
    seen: [],
    indentationLvl: 0,
    stylize: stylizeNoColor
  }, inspect.defaultOptions, opts);

  // set default options
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  if (ctx.maxArrayLength === null) ctx.maxArrayLength = Infinity
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;

inspect.defaultOptions = {
  showHidden: false,
  depth: 2,
  colors: false,
  customInspect: true,
  showProxy: false,
  maxArrayLength: 100,
  breakLength: 60
}

// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan', // only applied to function
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  'regexp': 'red'
};

inspect.custom = 'inspect'


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}

// getConstructorOf is wrapped into this to save iterations
function getIdentificationOf(obj) {
  var type = getNativeClass(obj)
  if (type) {
    return type
  }
  var original = obj;
  var constructor = undefined;

  while (obj) {
    if (constructor === undefined) {
      var desc = Object.getOwnPropertyDescriptor(obj, 'constructor');
      if (desc !== undefined &&
          typeof desc.value === 'function' &&
          desc.value.name !== '')
        constructor = desc.value.name;
    }

    if (constructor !== undefined)
      break;

    obj = Object.getPrototypeOf(obj);
  }

  return constructor;
}

function formatValue(ctx, value, recurseTimes, ln) {
  var primitive = formatPrimitive(ctx.stylize, value, ctx);
  if (primitive) {
    return primitive;
  }

  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect && value) {
    try {
      var customInspect = value[inspect.custom] // can fail for some NSDistantObject
      if (isFunction(customInspect) &&
        // Filter out the util module, it's inspect function is special
        customInspect !== exports.inspect &&
        // Also filter out any prototype objects using the circular check.
        !(value.constructor && value.constructor.prototype === value)) {
        var ret = customInspect(recurseTimes, ctx);

        // If the custom inspection method returned `this`, don't go into
        // infinite recursion.
        if (ret !== value) {
          if (!isString(ret)) {
            ret = formatValue(ctx, ret, recurseTimes);
          }
        }
        return ret;
      }
    } catch (err) {}
  }

  var base = '';
  var formatter = formatObject;
  var braces = ['{', '}'];
  var noIterator = true;
  var raw;

  // if it's a MOStruct, we need to catch it early so that it doesn't fail
  if (getNativeClass(value) === 'MOStruct') {
    braces = [value.name() + ' {', '}']
    value = toObject(value)
  }

  if (value && value._isWrappedObject) {
    const propertyList = value.constructor._DefinedPropertiesKey
    const json = {}
    Object.keys(propertyList).forEach(k => {
      if (!propertyList[k].exportable) {
        return
      }
      json[k] = value[k]
      if (json[k] && !json[k]._isWrappedObject && json[k].toJSON) {
        json[k] = json[k].toJSON()
      }
    })
    value = json
  }

  var keys;

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  } else {
    keys = Object.keys(value)
  }

  var keyLength = keys.length

  var constructor = getIdentificationOf(value);
  var prefix = constructor ? (constructor + ' ') : '';

  if (isArray(value)) {
    noIterator = false
    // Only set the constructor for non ordinary ("Array [...]") arrays.
    braces = [(prefix === 'Array ' ? '' : prefix) + '[', ']'];
    if (value.length === 0 && keyLength === 0)
      return braces[0] + ']';
    formatter = formatArray;
  } else if (isFunction(value)) {
    var name = (constructor === 'Object' ? 'function MOMethod' : constructor) + (value.name ? (': ' + value.name) : '');
    if (keyLength === 0)
      return ctx.stylize(`[${name}]`, 'special');
    base = '[' + name + ']';
  } else if (prefix === 'Object ') {
    // Object fast path
    if (keyLength === 0)
      return '{}';
  } else if (isRegExp(value)) {
    // Make RegExps say that they are RegExps
    if (keyLength === 0 || recurseTimes < 0)
      return ctx.stylize(value.toString(), 'regexp');
    base = RegExp.prototype.toString.call(value);
  } else if (isDate(value)) {
    if (keyLength === 0) {
      if (Number.isNaN(value.getTime()))
        return ctx.stylize(value.toString(), 'date');
      return ctx.stylize(value.toISOString(), 'date');
    }
    // Make dates with properties first say the date
    base = value.toISOString();
  } else if (isError(value)) {
    // Make error with message first say the error
    if (keyLength === 0)
      return formatError(value);
    base = `${formatError(value)}`;
  } else if (!isObject(value) && getNativeClass(value)) {
    var description = value && value.description && String(value.description())
    var nativeClass = getNativeClass(value)
    if (description && description[0] === '<' && description.indexOf('>') > 0) {
      // most of the MS* classes
      return ctx.stylize(description.slice(0, description.indexOf('>') + 1), 'special')
    } else if (description) {
      // prefix the description with the class otherwise it can lead to some misunderstanding
      return ctx.stylize('<' + nativeClass + '> ' + description, 'special')
    } else {
      return ctx.stylize('<' + getNativeClass(value) + '>', 'special')
    }
  } else if (isObject(value) && getNativeClass(value)) {
    braces = [prefix + '{', '}'];
  }

  if (ctx.seen.indexOf(value) !== -1)
    return ctx.stylize('[Circular]', 'special')

  if (recurseTimes != null) {
    if (recurseTimes < 0)
      return ctx.stylize('[' + (constructor || 'Object') + ']', 'special');
    recurseTimes -= 1;
  }

  ctx.seen.push(value);

  var output = formatter(ctx, value, recurseTimes, keys);

  ctx.seen.pop();

  return reduceToSingleString(ctx, output, base, braces, ln);
}

function formatObject(ctx, value, recurseTimes, keys) {
  value = toObject(value)
  var len = keys.length;
  var output = new Array(len);
  for (var i = 0; i < len; i++)
    output[i] = formatProperty(ctx, value, recurseTimes, keys[i], 0);
  return output;
}

function formatNumber(fn, value) {
  // Format -0 as '-0'. Checking `value === -0` won't distinguish 0 from -0.
  if (Object.is(value, -0))
    return fn('-0', 'number');
  return fn('' + value, 'number');
}

var MIN_LINE_LENGTH = 16;
var readableRegExps = {};

var strEscapeSequencesRegExp = /[\x00-\x1f\x27\x5c]/;
var strEscapeSequencesReplacer = /[\x00-\x1f\x27\x5c]/g;

// Escaped special characters. Use empty strings to fill up unused entries.
var meta = [
  '\\u0000', '\\u0001', '\\u0002', '\\u0003', '\\u0004',
  '\\u0005', '\\u0006', '\\u0007', '\\b', '\\t',
  '\\n', '\\u000b', '\\f', '\\r', '\\u000e',
  '\\u000f', '\\u0010', '\\u0011', '\\u0012', '\\u0013',
  '\\u0014', '\\u0015', '\\u0016', '\\u0017', '\\u0018',
  '\\u0019', '\\u001a', '\\u001b', '\\u001c', '\\u001d',
  '\\u001e', '\\u001f', '', '', '',
  '', '', '', '', "\\'", '', '', '', '', '',
  '', '', '', '', '', '', '', '', '', '',
  '', '', '', '', '', '', '', '', '', '',
  '', '', '', '', '', '', '', '', '', '',
  '', '', '', '', '', '', '', '', '', '',
  '', '', '', '', '', '', '', '\\\\'
];

function escapeFn (str) { return meta[str.charCodeAt(0)] }

// Escape control characters, single quotes and the backslash.
// This is similar to JSON stringify escaping.
function strEscape(str) {
  // Some magic numbers that worked out fine while benchmarking with v8 6.0
  if (str.length < 5000 && !strEscapeSequencesRegExp.test(str))
    return '\'' + str + '\'';
  if (str.length > 100)
    return '\'' + str.replace(strEscapeSequencesReplacer, escapeFn) + '\'';
  var result = '';
  var last = 0;
  for (var i = 0; i < str.length; i++) {
    var point = str.charCodeAt(i);
    if (point === 39 || point === 92 || point < 32) {
      if (last === i) {
        result += meta[point];
      } else {
        result += str.slice(last, i) + meta[point];
      }
      last = i + 1;
    }
  }
  if (last === 0) {
    result = str;
  } else if (last !== i) {
    result += str.slice(last);
  }
  return '\'' + result + '\'';
}

function formatPrimitive(fn, value, ctx) {
  if (isUndefined(value)) {
    return fn('undefined', 'undefined');
  }
  if (isString(value)) {
    if (ctx.compact === false &&
      value.length > MIN_LINE_LENGTH &&
      ctx.indentationLvl + value.length > ctx.breakLength) {
      var minLineLength = Math.max(ctx.breakLength - ctx.indentationLvl, MIN_LINE_LENGTH);
      var averageLineLength = Math.ceil(value.length / Math.ceil(value.length / minLineLength));
      var divisor = Math.max(averageLineLength, MIN_LINE_LENGTH);
      var res = '';
      if (readableRegExps[divisor] === undefined) {
        // Build a new RegExp that naturally breaks text into multiple lines.
        //
        // Rules
        // 1. Greedy match all text up the max line length that ends with a
        //    whitespace or the end of the string.
        // 2. If none matches, non-greedy match any text up to a whitespace or
        //    the end of the string.
        //
        // eslint-disable-next-line max-len, node-core/no-unescaped-regexp-dot
        readableRegExps[divisor] = new RegExp(`(.|\\n){1,${divisor}}(\\s|$)|(\\n|.)+?(\\s|$)`, 'gm');
      }
      var indent = getIndentation(ctx.indentationLvl);
      var matches = value.match(readableRegExps[divisor]);
      if (matches.length > 1) {
        res += fn(strEscape(matches[0]), 'string') + ' +\n';
        for (var i = 1; i < matches.length - 1; i++) {
          res += indent + '  ' + fn(strEscape(matches[i]), 'string') + ' +\n';
        }
        res += indent + '  ' + fn(strEscape(matches[i]), 'string');
        return res;
      }
    }
    return fn(strEscape(value), 'string');
  }
  if (isNumber(value)) {
    return formatNumber(fn, Number(value));
  }
  if (isBoolean(value)) {
    return fn('' + Boolean(Number(value)), 'boolean');
  }
  if (isNull(value)) {
    return fn('null', 'null');
  }
}


function formatError(value) {
  return value.stack || '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, keys) {
  value = toArray(value)
  var len = Math.min(Math.max(0, ctx.maxArrayLength), value.length);
  var hidden = ctx.showHidden ? 1 : 0;
  var valLen = value.length;

  var remaining = valLen - len;
  var output = new Array(len + (remaining > 0 ? 1 : 0) + hidden);
  for (var i = 0; i < len; i++)
    output[i] = formatProperty(ctx, value, recurseTimes, keys[i] || i, 1);
  if (remaining > 0)
    output[i++] = '... ' + remaining + ' more item' + (remaining > 1 ? 's' : '');
  if (ctx.showHidden === true)
    output[i] = formatProperty(ctx, value, recurseTimes, 'length', 2);
  return output;
}

var keyStrRegExp = /^[a-zA-Z_][a-zA-Z_0-9]*$/;

function formatProperty(ctx, value, recurseTimes, key, array) {
  var name, str, desc;
  if (getNativeClass(value)) { // special case for native object
    desc = { value: value[key], enumerable: true }
  } else {
    desc = Object.getOwnPropertyDescriptor(value, key) ||
    { value: value[key], enumerable: true }
  }

  if (desc.value !== undefined) {
    var diff = array !== 0 || ctx.compact === false ? 2 : 3;
    ctx.indentationLvl += diff;
    str = formatValue(ctx, desc.value, recurseTimes, array === 0);
    ctx.indentationLvl -= diff;
  } else if (desc.get !== undefined) {
    if (desc.set !== undefined) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else if (desc.set !== undefined) {
    str = ctx.stylize('[Setter]', 'special');
  } else {
    str = ctx.stylize('undefined', 'undefined');
  }
  if (array === 1) {
    return str;
  }
  if (typeof key === 'symbol') {
    name = '[' + ctx.stylize(key.toString(), 'symbol') + ']';
  } else if (desc.enumerable === false) {
    name = '[' + key + ']';
  } else if (keyStrRegExp.test(key)) {
    name = ctx.stylize(key, 'name');
  } else {
    name = ctx.stylize(strEscape(key), 'string');
  }

  return name + ': ' + str;
}

var colorRegExp = /\u001b\[\d\d?m/g;

function removeColors(str) {
  return str.replace(colorRegExp, '');
}

function getIndentation(indentationLvl) {
  return Array.apply(null, Array(indentationLvl)).reduce(function(prev) { return prev + ' '}, '')
}

function reduceToSingleString(ctx, output, base, braces, addLn) {
  var breakLength = ctx.breakLength;
  var i = 0;
  if (ctx.compact === false) {
    var indentation = getIndentation(ctx.indentationLvl);
    var res = (base ? (base + ' ') : '') + braces[0] + '\n' + indentation + '  ';
    for (; i < output.length - 1; i++) {
      res += output[i] + ',\n' + indentation + '  ';
    }
    res += output[i] + '\n' + indentation + braces[1];
    return res;
  }
  if (output.length * 2 <= breakLength) {
    var length = 0;
    for (; i < output.length && length <= breakLength; i++) {
      if (ctx.colors) {
        length += removeColors(output[i]).length + 1;
      } else {
        length += output[i].length + 1;
      }
    }
    if (length <= breakLength)
      return braces[0] + (base ? (' ' + base) : '') + ' ' + output.join(', ') + ' ' +
        braces[1];
  }

  var indentation = getIndentation(ctx.indentationLvl);

  // If the opening "brace" is too large, like in the case of "Set {",
  // we need to force the first item to be on the next line or the
  // items will not line up correctly.
  var extraLn = addLn === true ? ('\n' + indentation) : '';

  var ln = base === '' && braces[0].length === 1 ?
    ' ' : ((base ? (' ' + base) : base) + '\n' + indentation + '  ');
  var str = output.join(',\n' + indentation + '  ');
  return extraLn + braces[0] + ln + str + ' ' + braces[1];
}

exports.isDeepStrictEqual = __webpack_require__(/*! ./deep-equal */ "./core-modules/node_modules/@skpm/util/deep-equal.js")

exports.promisify = __webpack_require__(/*! ./promisify */ "./core-modules/node_modules/@skpm/util/promisify.js")

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./core-modules/node_modules/@skpm/util/promisify.js":
/*!***********************************************************!*\
  !*** ./core-modules/node_modules/@skpm/util/promisify.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Promise) {var { toArray } = __webpack_require__(/*! ./casting */ "./core-modules/node_modules/@skpm/util/casting.js")
var customPromisify = 'promisify'

function promisify(fn) {
  if (fn[customPromisify]) {
    return fn[customPromisify]
  }
  return function () {
    var args = toArray(arguments)
    return new Promise(function (resolve, reject) {
      args.push(function (err, value) {
        if (typeof err !== 'undefined' && err !== null) {
          return reject(err)
        }
        return resolve(value)
      })
      fn.apply(this, args)
    })
  }
}
promisify.custom = customPromisify

module.exports = promisify

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/promise-polyfill/lib/index.js */ "./node_modules/promise-polyfill/lib/index.js")))

/***/ }),

/***/ "./node_modules/@skpm/buffer/base64-js.js":
/*!************************************************!*\
  !*** ./node_modules/@skpm/buffer/base64-js.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  for (var i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/@skpm/buffer/ieee754.js":
/*!**********************************************!*\
  !*** ./node_modules/@skpm/buffer/ieee754.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/@skpm/buffer/index.js":
/*!********************************************!*\
  !*** ./node_modules/@skpm/buffer/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! ./base64-js */ "./node_modules/@skpm/buffer/base64-js.js")
var ieee754 = __webpack_require__(/*! ./ieee754 */ "./node_modules/@skpm/buffer/ieee754.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

var K_MAX_LENGTH = 0x7fffffff
exports.kMaxLength = K_MAX_LENGTH

Object.defineProperty(Buffer.prototype, 'parent', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.buffer
  }
})

Object.defineProperty(Buffer.prototype, 'offset', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.byteOffset
  }
})

var NSDATA_SUBCLASSES = [
  'NSCFData',
  'NSData',
  'NSConcreteData',
  'NSConcreteMutableData',
  'NSMutableData',
  'NSPurgeableData',
  'NSSubrangeData',
  'NSPageData',
  '_NSInlineData',
  '__NSCFData',
  '_NSZeroData'
]

function createBuffer (length) {
  if (length > K_MAX_LENGTH) {
    throw new RangeError('The value "' + length + '" is invalid for option "size"')
  }
  // Return an augmented `Uint8Array` instance
  var buf = new Uint8Array(length)
  buf.__proto__ = Buffer.prototype
  return buf
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new TypeError(
        'The "string" argument must be of type string. Received type number'
      )
    }
    return allocUnsafe(arg)
  }
  return from(arg, encodingOrOffset, length)
}

// Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
if (typeof Symbol !== 'undefined' && Symbol.species != null &&
    Buffer[Symbol.species] === Buffer) {
  Object.defineProperty(Buffer, Symbol.species, {
    value: null,
    configurable: true,
    enumerable: false,
    writable: false
  })
}

Buffer.poolSize = 8192 // not used by this implementation

function from (value, encodingOrOffset, length) {
  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset)
  }

  if (ArrayBuffer.isView(value)) {
    return fromArrayLike(value)
  }

  if (value == null) {
    throw TypeError(
      'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
      'or Array-like Object. Received type ' + (typeof value)
    )
  }

  if (isInstance(value, ArrayBuffer) ||
      (value && isInstance(value.buffer, ArrayBuffer))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof value === 'number') {
    throw new TypeError(
      'The "value" argument must not be of type number. Received type number'
    )
  }

  var valueOf = value.valueOf && value.valueOf()
  if (valueOf != null && valueOf !== value) {
    return Buffer.from(valueOf, encodingOrOffset, length)
  }

  var b = fromObject(value, encodingOrOffset, length)
  if (b) return b

  if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null &&
      typeof value[Symbol.toPrimitive] === 'function') {
    return Buffer.from(
      value[Symbol.toPrimitive]('string'), encodingOrOffset, length
    )
  }

  throw new TypeError(
    'The first argument must be one of type string, Buffer, ArrayBuffer, Array, NSData, ' +
    'or Array-like Object. Received type ' + (typeof value)
  )
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(value, encodingOrOffset, length)
}

// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Buffer.prototype.__proto__ = Uint8Array.prototype
Buffer.__proto__ = Uint8Array

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be of type number')
  } else if (size < 0) {
    throw new RangeError('The value "' + size + '" is invalid for option "size"')
  }
}

function alloc (size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(size).fill(fill, encoding)
      : createBuffer(size).fill(fill)
  }
  return createBuffer(size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(size, fill, encoding)
}

function allocUnsafe (size) {
  assertSize(size)
  return createBuffer(size < 0 ? 0 : checked(size) | 0)
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(size)
}

function fromString (string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('Unknown encoding: ' + encoding)
  }

  var length = byteLength(string, encoding) | 0
  var buf = createBuffer(length)

  var actual = buf.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual)
  }

  return buf
}

function fromArrayLike (array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  var buf = createBuffer(length)
  for (var i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255
  }
  return buf
}

function fromArrayBuffer (array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('"offset" is outside of buffer bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('"length" is outside of buffer bounds')
  }

  var buf
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array)
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset)
  } else {
    buf = new Uint8Array(array, byteOffset, length)
  }

  // Return an augmented `Uint8Array` instance
  buf.__proto__ = Buffer.prototype
  return buf
}

function fromNSData (nsdata, encodingOrOffset, length) {
  // parse nsdata as a string
  const data = String(NSString.alloc().initWithData_encoding(nsdata, NSISOLatin1StringEncoding))

  // respect options
  const _offset = encodingOrOffset || 0
  const _length = typeof length !== 'undefined' ? length : (data.length - _offset)

  const buf = new Uint8Array(_length);
  for (let i = _offset; i < _length + _offset; i += 1) {
    buf[i] = data.charCodeAt(i);
  }

  // Return an augmented `Uint8Array` instance
  buf.__proto__ = Buffer.prototype
  return buf;
}

function fromObject (obj, encodingOrOffset, length) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    var buf = createBuffer(len)

    if (buf.length === 0) {
      return buf
    }

    obj.copy(buf, 0, 0, len)
    return buf
  }

  var className

  try {
    className = String(obj.class())
  } catch (err) {}

  if (className && NSDATA_SUBCLASSES.indexOf(className) !== -1) {
    return fromNSData(obj, encodingOrOffset, length)
  }

  if (obj.length !== undefined) {
    if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
      return createBuffer(0)
    }
    return fromArrayLike(obj)
  }

  if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
    return fromArrayLike(obj.data)
  }
}

function checked (length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return b != null && b._isBuffer === true &&
    b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
}

Buffer.compare = function compare (a, b) {
  if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength)
  if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength)
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError(
      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
    )
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!Array.isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (isInstance(buf, Uint8Array)) {
      buf = Buffer.from(buf)
    }
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    throw new TypeError(
      'The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' +
      'Received type ' + typeof string
    )
  }

  var len = string.length
  var mustMatch = (arguments.length > 2 && arguments[2] === true)
  if (!mustMatch && len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) {
          return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
        }
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.toLocaleString = Buffer.prototype.toString

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim()
  console.log(str)
  if (this.length > max) str += ' ... '
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (isInstance(target, Uint8Array)) {
    target = Buffer.from(target, target.offset, target.byteLength)
  }
  if (!Buffer.isBuffer(target)) {
    throw new TypeError(
      'The "target" argument must be one of type Buffer or Uint8Array. ' +
      'Received type ' + (typeof target)
    )
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset // Coerce to Number.
  if (numberIsNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  var strLen = string.length

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (numberIsNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset >>> 0
    if (isFinite(length)) {
      length = length >>> 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

Buffer.prototype.toNSData = function toNSData () {
  const string = NSString.stringWithString(this.toString('binary'))
  return string.dataUsingEncoding(NSISOLatin1StringEncoding)
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
        : (firstByte > 0xBF) ? 2
          : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256))
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf = this.subarray(start, end)
  // Return an augmented `Uint8Array` instance
  newBuf.__proto__ = Buffer.prototype
  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset + 3] = (value >>> 24)
  this[offset + 2] = (value >>> 16)
  this[offset + 1] = (value >>> 8)
  this[offset] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  this[offset + 2] = (value >>> 16)
  this[offset + 3] = (value >>> 24)
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer')
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('Index out of range')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start

  if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
    // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end)
  } else if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (var i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, end),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if ((encoding === 'utf8' && code < 128) ||
          encoding === 'latin1') {
        // Fast path: If `val` fits into a single byte, use that numeric value.
        val = code
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : Buffer.from(val, encoding)
    var len = bytes.length
    if (len === 0) {
      throw new TypeError('The value "' + val +
        '" is invalid for argument "value"')
    }
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node takes equal signs as end of the Base64 encoding
  str = str.split('=')[0]
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = str.trim().replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance (obj, type) {
  return obj instanceof type ||
    (obj != null && obj.constructor != null && obj.constructor.name != null &&
      obj.constructor.name === type.name)
}
function numberIsNaN (obj) {
  // For IE11 support
  return obj !== obj // eslint-disable-line no-self-compare
}


/***/ }),

/***/ "./node_modules/@skpm/fs/index.js":
/*!****************************************!*\
  !*** ./node_modules/@skpm/fs/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// TODO: async. Should probably be done with NSFileHandle and some notifications
// TODO: file descriptor. Needs to be done with NSFileHandle
var Buffer = __webpack_require__(/*! buffer */ "./core-modules/node_modules/@skpm/buffer/index.js").Buffer

function encodingFromOptions(options, defaultValue) {
  return options && options.encoding
    ? String(options.encoding)
    : (
      options
        ? String(options)
        : defaultValue
    )
}

module.exports.constants = {
  F_OK: 0,
  R_OK: 4,
  W_OK: 2,
  X_OK: 1
}

module.exports.accessSync = function(path, mode) {
  mode = mode | 0
  var fileManager = NSFileManager.defaultManager()

  switch (mode) {
    case 0:
      canAccess = module.exports.existsSync(path)
      break
    case 1:
      canAccess = Boolean(Number(fileManager.isExecutableFileAtPath(path)))
      break
    case 2:
      canAccess = Boolean(Number(fileManager.isWritableFileAtPath(path)))
      break
    case 3:
      canAccess = Boolean(Number(fileManager.isExecutableFileAtPath(path))) && Boolean(Number(fileManager.isWritableFileAtPath(path)))
      break
    case 4:
      canAccess = Boolean(Number(fileManager.isReadableFileAtPath(path)))
      break
    case 5:
      canAccess = Boolean(Number(fileManager.isReadableFileAtPath(path))) && Boolean(Number(fileManager.isExecutableFileAtPath(path)))
      break
    case 6:
      canAccess = Boolean(Number(fileManager.isReadableFileAtPath(path))) && Boolean(Number(fileManager.isWritableFileAtPath(path)))
      break
    case 7:
      canAccess = Boolean(Number(fileManager.isReadableFileAtPath(path))) && Boolean(Number(fileManager.isWritableFileAtPath(path))) && Boolean(Number(fileManager.isExecutableFileAtPath(path)))
      break
  }

  if (!canAccess) {
    throw new Error('Can\'t access ' + String(path))
  }
}

module.exports.appendFileSync = function(file, data, options) {
  if (!module.exports.existsSync(file)) {
    return module.exports.writeFileSync(file, data, options)
  }

  var handle = NSFileHandle.fileHandleForWritingAtPath(file)
  handle.seekToEndOfFile()

  var encoding = encodingFromOptions(options, 'utf8')

  var nsdata = Buffer.from(data, encoding === 'NSData' || encoding === 'buffer' ? undefined : encoding).toNSData()

  handle.writeData(nsdata)
}

module.exports.chmodSync = function(path, mode) {
  var err = MOPointer.alloc().init()
  var fileManager = NSFileManager.defaultManager()
  fileManager.setAttributes_ofItemAtPath_error({
    NSFilePosixPermissions: mode
  }, path, err)

  if (err.value() !== null) {
    throw new Error(err.value())
  }
}

module.exports.copyFileSync = function(path, dest, flags) {
  var err = MOPointer.alloc().init()
  var fileManager = NSFileManager.defaultManager()
  fileManager.copyItemAtPath_toPath_error(path, dest, err)

  if (err.value() !== null) {
    throw new Error(err.value())
  }
}

module.exports.existsSync = function(path) {
  var fileManager = NSFileManager.defaultManager()
  return Boolean(Number(fileManager.fileExistsAtPath(path)))
}

module.exports.linkSync = function(existingPath, newPath) {
  var err = MOPointer.alloc().init()
  var fileManager = NSFileManager.defaultManager()
  fileManager.linkItemAtPath_toPath_error(existingPath, newPath, err)

  if (err.value() !== null) {
    throw new Error(err.value())
  }
}

module.exports.mkdirSync = function(path, mode) {
  mode = mode || 0o777
  var err = MOPointer.alloc().init()
  var fileManager = NSFileManager.defaultManager()
  fileManager.createDirectoryAtPath_withIntermediateDirectories_attributes_error(path, false, {
    NSFilePosixPermissions: mode
  }, err)

  if (err.value() !== null) {
    throw new Error(err.value())
  }
}

module.exports.mkdtempSync = function(path) {
  function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 6; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }
  var tempPath = path + makeid()
  module.exports.mkdirSync(tempPath)
  return tempPath
}

module.exports.readdirSync = function(path) {
  var fileManager = NSFileManager.defaultManager()
  var paths = fileManager.subpathsAtPath(path)
  var arr = []
  for (var i = 0; i < paths.length; i++) {
    arr.push(String(paths[i]))
  }
  return arr
}

module.exports.readFileSync = function(path, options) {
  var encoding = encodingFromOptions(options, 'buffer')
  var fileManager = NSFileManager.defaultManager()
  var data = fileManager.contentsAtPath(path)
  var buffer = Buffer.from(data)

  if (encoding === 'buffer') {
    return buffer
  } else if (encoding === 'NSData') {
    return buffer.toNSData()
  } else {
    return buffer.toString(encoding)
  }
}

module.exports.readlinkSync = function(path) {
  var err = MOPointer.alloc().init()
  var fileManager = NSFileManager.defaultManager()
  var result = fileManager.destinationOfSymbolicLinkAtPath_error(path, err)

  if (err.value() !== null) {
    throw new Error(err.value())
  }

  return String(result)
}

module.exports.realpathSync = function(path) {
  return String(NSString.stringByResolvingSymlinksInPath(path))
}

module.exports.renameSync = function(oldPath, newPath) {
  var err = MOPointer.alloc().init()
  var fileManager = NSFileManager.defaultManager()
  fileManager.moveItemAtPath_toPath_error(oldPath, newPath, err)

  if (err.value() !== null) {
    throw new Error(err.value())
  }
}

module.exports.rmdirSync = function(path) {
  var err = MOPointer.alloc().init()
  var fileManager = NSFileManager.defaultManager()
  fileManager.removeItemAtPath_error(path, err)

  if (err.value() !== null) {
    throw new Error(err.value())
  }
}

module.exports.statSync = function(path) {
  var err = MOPointer.alloc().init()
  var fileManager = NSFileManager.defaultManager()
  var result = fileManager.attributesOfItemAtPath_error(path, err)

  if (err.value() !== null) {
    throw new Error(err.value())
  }

  return {
    dev: String(result.NSFileDeviceIdentifier),
    // ino: 48064969, The file system specific "Inode" number for the file.
    mode: result.NSFileType | result.NSFilePosixPermissions,
    nlink: Number(result.NSFileReferenceCount),
    uid: String(result.NSFileOwnerAccountID),
    gid: String(result.NSFileGroupOwnerAccountID),
    // rdev: 0, A numeric device identifier if the file is considered "special".
    size: Number(result.NSFileSize),
    // blksize: 4096, The file system block size for i/o operations.
    // blocks: 8, The number of blocks allocated for this file.
    atimeMs: Number(result.NSFileModificationDate.timeIntervalSince1970()) * 1000,
    mtimeMs: Number(result.NSFileModificationDate.timeIntervalSince1970()) * 1000,
    ctimeMs: Number(result.NSFileModificationDate.timeIntervalSince1970()) * 1000,
    birthtimeMs: Number(result.NSFileCreationDate.timeIntervalSince1970()) * 1000,
    atime: new Date(Number(result.NSFileModificationDate.timeIntervalSince1970()) * 1000 + 0.5), // the 0.5 comes from the node source. Not sure why it's added but in doubt...
    mtime: new Date(Number(result.NSFileModificationDate.timeIntervalSince1970()) * 1000 + 0.5),
    ctime: new Date(Number(result.NSFileModificationDate.timeIntervalSince1970()) * 1000 + 0.5),
    birthtime: new Date(Number(result.NSFileCreationDate.timeIntervalSince1970()) * 1000 + 0.5),
    isBlockDevice: function() { return result.NSFileType === NSFileTypeBlockSpecial },
    isCharacterDevice: function() { return result.NSFileType === NSFileTypeCharacterSpecial },
    isDirectory: function() { return result.NSFileType === NSFileTypeDirectory },
    isFIFO: function() { return false },
    isFile: function() { return result.NSFileType === NSFileTypeRegular },
    isSocket: function() { return result.NSFileType === NSFileTypeSocket },
    isSymbolicLink: function() { return result.NSFileType === NSFileTypeSymbolicLink },
  }
}

module.exports.symlinkSync = function(target, path) {
  var err = MOPointer.alloc().init()
  var fileManager = NSFileManager.defaultManager()
  var result = fileManager.createSymbolicLinkAtPath_withDestinationPath_error(path, target, err)

  if (err.value() !== null) {
    throw new Error(err.value())
  }
}

module.exports.truncateSync = function(path, len) {
  var hFile = NSFileHandle.fileHandleForUpdatingAtPath(sFilePath)
  hFile.truncateFileAtOffset(len || 0)
  hFile.closeFile()
}

module.exports.unlinkSync = function(path) {
  var err = MOPointer.alloc().init()
  var fileManager = NSFileManager.defaultManager()
  var result = fileManager.removeItemAtPath_error(path, err)

  if (err.value() !== null) {
    throw new Error(err.value())
  }
}

module.exports.utimesSync = function(path, aTime, mTime) {
  var err = MOPointer.alloc().init()
  var fileManager = NSFileManager.defaultManager()
  var result = fileManager.setAttributes_ofItemAtPath_error({
    NSFileModificationDate: aTime
  }, path, err)

  if (err.value() !== null) {
    throw new Error(err.value())
  }
}

module.exports.writeFileSync = function(path, data, options) {
  var encoding = encodingFromOptions(options, 'utf8')

  var nsdata = Buffer.from(
    data, encoding === 'NSData' || encoding === 'buffer' ? undefined : encoding
  ).toNSData()

  nsdata.writeToFile_atomically(path, true)
}


/***/ }),

/***/ "./node_modules/@skpm/path/index.js":
/*!******************************************!*\
  !*** ./node_modules/@skpm/path/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var sketchSpecifics = __webpack_require__(/*! ./sketch-specifics */ "./node_modules/@skpm/path/sketch-specifics.js")

// we only expose the posix implementation since Sketch only runs on macOS

var CHAR_FORWARD_SLASH = 47
var CHAR_DOT = 46

// Resolves . and .. elements in a path with directory names
function normalizeString(path, allowAboveRoot) {
  var res = ''
  var lastSegmentLength = 0
  var lastSlash = -1
  var dots = 0
  var code
  for (var i = 0; i <= path.length; i += 1) {
    if (i < path.length) code = path.charCodeAt(i)
    else if (code === CHAR_FORWARD_SLASH) break
    else code = CHAR_FORWARD_SLASH
    if (code === CHAR_FORWARD_SLASH) {
      if (lastSlash === i - 1 || dots === 1) {
        // NOOP
      } else if (lastSlash !== i - 1 && dots === 2) {
        if (
          res.length < 2 ||
          lastSegmentLength !== 2 ||
          res.charCodeAt(res.length - 1) !== CHAR_DOT ||
          res.charCodeAt(res.length - 2) !== CHAR_DOT
        ) {
          if (res.length > 2) {
            var lastSlashIndex = res.lastIndexOf('/')
            if (lastSlashIndex !== res.length - 1) {
              if (lastSlashIndex === -1) {
                res = ''
                lastSegmentLength = 0
              } else {
                res = res.slice(0, lastSlashIndex)
                lastSegmentLength = res.length - 1 - res.lastIndexOf('/')
              }
              lastSlash = i
              dots = 0
              continue
            }
          } else if (res.length === 2 || res.length === 1) {
            res = ''
            lastSegmentLength = 0
            lastSlash = i
            dots = 0
            continue
          }
        }
        if (allowAboveRoot) {
          if (res.length > 0) res += '/..'
          else res = '..'
          lastSegmentLength = 2
        }
      } else {
        if (res.length > 0) res += '/' + path.slice(lastSlash + 1, i)
        else res = path.slice(lastSlash + 1, i)
        lastSegmentLength = i - lastSlash - 1
      }
      lastSlash = i
      dots = 0
    } else if (code === CHAR_DOT && dots !== -1) {
      ++dots
    } else {
      dots = -1
    }
  }
  return res
}

function _format(sep, pathObject) {
  var dir = pathObject.dir || pathObject.root
  var base =
    pathObject.base || (pathObject.name || '') + (pathObject.ext || '')
  if (!dir) {
    return base
  }
  if (dir === pathObject.root) {
    return dir + base
  }
  return dir + sep + base
}

var posix = {
  // path.resolve([from ...], to)
  resolve: function resolve() {
    var resolvedPath = ''
    var resolvedAbsolute = false
    var cwd

    for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i -= 1) {
      var path
      if (i >= 0) {
        path = arguments[i]
      } else {
        if (cwd === undefined) {
          cwd = posix.dirname(sketchSpecifics.cwd())
        }
        path = cwd
      }

      path = sketchSpecifics.getString(path, 'path')

      // Skip empty entries
      if (path.length === 0) {
        continue
      }

      resolvedPath = path + '/' + resolvedPath
      resolvedAbsolute = path.charCodeAt(0) === CHAR_FORWARD_SLASH
    }

    // At this point the path should be resolved to a full absolute path, but
    // handle relative paths to be safe (might happen when process.cwd() fails)

    // Normalize the path
    resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute)

    if (resolvedAbsolute) {
      if (resolvedPath.length > 0) return '/' + resolvedPath
      else return '/'
    } else if (resolvedPath.length > 0) {
      return resolvedPath
    } else {
      return '.'
    }
  },

  normalize: function normalize(path) {
    path = sketchSpecifics.getString(path, 'path')

    if (path.length === 0) return '.'

    var isAbsolute = path.charCodeAt(0) === CHAR_FORWARD_SLASH
    var trailingSeparator =
      path.charCodeAt(path.length - 1) === CHAR_FORWARD_SLASH

    // Normalize the path
    path = normalizeString(path, !isAbsolute)

    if (path.length === 0 && !isAbsolute) path = '.'
    if (path.length > 0 && trailingSeparator) path += '/'

    if (isAbsolute) return '/' + path
    return path
  },

  isAbsolute: function isAbsolute(path) {
    path = sketchSpecifics.getString(path, 'path')
    return path.length > 0 && path.charCodeAt(0) === CHAR_FORWARD_SLASH
  },

  join: function join() {
    if (arguments.length === 0) return '.'
    var joined
    for (var i = 0; i < arguments.length; i += 1) {
      var arg = arguments[i]
      arg = sketchSpecifics.getString(arg, 'path')
      if (arg.length > 0) {
        if (joined === undefined) joined = arg
        else joined += '/' + arg
      }
    }
    if (joined === undefined) return '.'
    return posix.normalize(joined)
  },

  relative: function relative(from, to) {
    from = sketchSpecifics.getString(from, 'from path')
    to = sketchSpecifics.getString(to, 'to path')

    if (from === to) return ''

    from = posix.resolve(from)
    to = posix.resolve(to)

    if (from === to) return ''

    // Trim any leading backslashes
    var fromStart = 1
    for (; fromStart < from.length; fromStart += 1) {
      if (from.charCodeAt(fromStart) !== CHAR_FORWARD_SLASH) break
    }
    var fromEnd = from.length
    var fromLen = fromEnd - fromStart

    // Trim any leading backslashes
    var toStart = 1
    for (; toStart < to.length; toStart += 1) {
      if (to.charCodeAt(toStart) !== CHAR_FORWARD_SLASH) break
    }
    var toEnd = to.length
    var toLen = toEnd - toStart

    // Compare paths to find the longest common path from root
    var length = fromLen < toLen ? fromLen : toLen
    var lastCommonSep = -1
    var i = 0
    for (; i <= length; i += 1) {
      if (i === length) {
        if (toLen > length) {
          if (to.charCodeAt(toStart + i) === CHAR_FORWARD_SLASH) {
            // We get here if `from` is the exact base path for `to`.
            // For example: from='/foo/bar'; to='/foo/bar/baz'
            return to.slice(toStart + i + 1)
          } else if (i === 0) {
            // We get here if `from` is the root
            // For example: from='/'; to='/foo'
            return to.slice(toStart + i)
          }
        } else if (fromLen > length) {
          if (from.charCodeAt(fromStart + i) === CHAR_FORWARD_SLASH) {
            // We get here if `to` is the exact base path for `from`.
            // For example: from='/foo/bar/baz'; to='/foo/bar'
            lastCommonSep = i
          } else if (i === 0) {
            // We get here if `to` is the root.
            // For example: from='/foo'; to='/'
            lastCommonSep = 0
          }
        }
        break
      }
      var fromCode = from.charCodeAt(fromStart + i)
      var toCode = to.charCodeAt(toStart + i)
      if (fromCode !== toCode) break
      else if (fromCode === CHAR_FORWARD_SLASH) lastCommonSep = i
    }

    var out = ''
    // Generate the relative path based on the path difference between `to`
    // and `from`
    for (i = fromStart + lastCommonSep + 1; i <= fromEnd; i += 1) {
      if (i === fromEnd || from.charCodeAt(i) === CHAR_FORWARD_SLASH) {
        if (out.length === 0) out += '..'
        else out += '/..'
      }
    }

    // Lastly, append the rest of the destination (`to`) path that comes after
    // the common path parts
    if (out.length > 0) return out + to.slice(toStart + lastCommonSep)
    else {
      toStart += lastCommonSep
      if (to.charCodeAt(toStart) === CHAR_FORWARD_SLASH) toStart += 1
      return to.slice(toStart)
    }
  },

  toNamespacedPath: function toNamespacedPath(path) {
    // Non-op on posix systems
    return path
  },

  dirname: function dirname(path) {
    path = sketchSpecifics.getString(path, 'path')
    if (path.length === 0) return '.'
    var code = path.charCodeAt(0)
    var hasRoot = code === CHAR_FORWARD_SLASH
    var end = -1
    var matchedSlash = true
    for (var i = path.length - 1; i >= 1; i -= 1) {
      code = path.charCodeAt(i)
      if (code === CHAR_FORWARD_SLASH) {
        if (!matchedSlash) {
          end = i
          break
        }
      } else {
        // We saw the first non-path separator
        matchedSlash = false
      }
    }

    if (end === -1) return hasRoot ? '/' : '.'
    if (hasRoot && end === 1) return '//'
    return path.slice(0, end)
  },

  basename: function basename(path, ext) {
    if (ext !== undefined)
      ext = sketchSpecifics.getString(ext, 'ext')
    path = sketchSpecifics.getString(path, 'path')

    var start = 0
    var end = -1
    var matchedSlash = true
    var i

    if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {
      if (ext.length === path.length && ext === path) return ''
      var extIdx = ext.length - 1
      var firstNonSlashEnd = -1
      for (i = path.length - 1; i >= 0; i -= 1) {
        var code = path.charCodeAt(i)
        if (code === CHAR_FORWARD_SLASH) {
          // If we reached a path separator that was not part of a set of path
          // separators at the end of the string, stop now
          if (!matchedSlash) {
            start = i + 1
            break
          }
        } else {
          if (firstNonSlashEnd === -1) {
            // We saw the first non-path separator, remember this index in case
            // we need it if the extension ends up not matching
            matchedSlash = false
            firstNonSlashEnd = i + 1
          }
          if (extIdx >= 0) {
            // Try to match the explicit extension
            if (code === ext.charCodeAt(extIdx)) {
              if (--extIdx === -1) {
                // We matched the extension, so mark this as the end of our path
                // component
                end = i
              }
            } else {
              // Extension does not match, so our result is the entire path
              // component
              extIdx = -1
              end = firstNonSlashEnd
            }
          }
        }
      }

      if (start === end) end = firstNonSlashEnd
      else if (end === -1) end = path.length
      return path.slice(start, end)
    } else {
      for (i = path.length - 1; i >= 0; --i) {
        if (path.charCodeAt(i) === CHAR_FORWARD_SLASH) {
          // If we reached a path separator that was not part of a set of path
          // separators at the end of the string, stop now
          if (!matchedSlash) {
            start = i + 1
            break
          }
        } else if (end === -1) {
          // We saw the first non-path separator, mark this as the end of our
          // path component
          matchedSlash = false
          end = i + 1
        }
      }

      if (end === -1) return ''
      return path.slice(start, end)
    }
  },

  extname: function extname(path) {
    path = sketchSpecifics.getString(path, 'path')
    var startDot = -1
    var startPart = 0
    var end = -1
    var matchedSlash = true
    // Track the state of characters (if any) we see before our first dot and
    // after any path separator we find
    var preDotState = 0
    for (var i = path.length - 1; i >= 0; --i) {
      var code = path.charCodeAt(i)
      if (code === CHAR_FORWARD_SLASH) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1
          break
        }
        continue
      }
      if (end === -1) {
        // We saw the first non-path separator, mark this as the end of our
        // extension
        matchedSlash = false
        end = i + 1
      }
      if (code === CHAR_DOT) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1) startDot = i
        else if (preDotState !== 1) preDotState = 1
      } else if (startDot !== -1) {
        // We saw a non-dot and non-path separator before our dot, so we should
        // have a good chance at having a non-empty extension
        preDotState = -1
      }
    }

    if (
      startDot === -1 ||
      end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      (preDotState === 1 && startDot === end - 1 && startDot === startPart + 1)
    ) {
      return ''
    }
    return path.slice(startDot, end)
  },

  format: function format(pathObject) {
    if (pathObject === null || typeof pathObject !== 'object') {
      throw new Error('pathObject should be an Object')
    }
    return _format('/', pathObject)
  },

  parse: function parse(path) {
    path = sketchSpecifics.getString(path, 'path')

    var ret = { root: '', dir: '', base: '', ext: '', name: '' }
    if (path.length === 0) return ret
    var code = path.charCodeAt(0)
    var isAbsolute = code === CHAR_FORWARD_SLASH
    var start
    if (isAbsolute) {
      ret.root = '/'
      start = 1
    } else {
      start = 0
    }
    var startDot = -1
    var startPart = 0
    var end = -1
    var matchedSlash = true
    var i = path.length - 1

    // Track the state of characters (if any) we see before our first dot and
    // after any path separator we find
    var preDotState = 0

    // Get non-dir info
    for (; i >= start; --i) {
      code = path.charCodeAt(i)
      if (code === CHAR_FORWARD_SLASH) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1
          break
        }
        continue
      }
      if (end === -1) {
        // We saw the first non-path separator, mark this as the end of our
        // extension
        matchedSlash = false
        end = i + 1
      }
      if (code === CHAR_DOT) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1) startDot = i
        else if (preDotState !== 1) preDotState = 1
      } else if (startDot !== -1) {
        // We saw a non-dot and non-path separator before our dot, so we should
        // have a good chance at having a non-empty extension
        preDotState = -1
      }
    }

    if (
      startDot === -1 ||
      end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      (preDotState === 1 && startDot === end - 1 && startDot === startPart + 1)
    ) {
      if (end !== -1) {
        if (startPart === 0 && isAbsolute)
          ret.base = ret.name = path.slice(1, end)
        else ret.base = ret.name = path.slice(startPart, end)
      }
    } else {
      if (startPart === 0 && isAbsolute) {
        ret.name = path.slice(1, startDot)
        ret.base = path.slice(1, end)
      } else {
        ret.name = path.slice(startPart, startDot)
        ret.base = path.slice(startPart, end)
      }
      ret.ext = path.slice(startDot, end)
    }

    if (startPart > 0) ret.dir = path.slice(0, startPart - 1)
    else if (isAbsolute) ret.dir = '/'

    return ret
  },

  sep: '/',
  delimiter: ':',
  win32: null,
  posix: null,

  resourcePath: sketchSpecifics.resourcePath,
}

module.exports = posix


/***/ }),

/***/ "./node_modules/@skpm/path/sketch-specifics.js":
/*!*****************************************************!*\
  !*** ./node_modules/@skpm/path/sketch-specifics.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(/*! util */ "./core-modules/node_modules/@skpm/util/index.js")

module.exports.getString = function getString(path, argumentName) {
  if (!util.isString(path)) {
    // let's make a special case for NSURL
    if (util.getNativeClass(path) === 'NSURL') {
      return String(path.path().copy())
    }
    throw new Error(argumentName + ' should be a string. Got ' + typeof path + ' instead.')
  }
  return String(path)
}

module.exports.cwd = function cwd() {
  if (typeof __command !== 'undefined' && __command.script() && __command.script().URL()) {
    return String(__command.script().URL().path().copy())
  }
  return String(MSPluginManager.defaultPluginURL().path().copy())
}

module.exports.resourcePath = function resourcePath(resourceName) {
  if (typeof __command === 'undefined' || __command.pluginBundle()) {
    return undefined
  }
  var resource = __command.pluginBundle().urlForResourceNamed(resourceName)
  if (!resource) {
    return undefined
  }
  return String(resource.path())
}


/***/ }),

/***/ "./node_modules/@skpm/test-runner/expect/assertion-check.js":
/*!******************************************************************!*\
  !*** ./node_modules/@skpm/test-runner/expect/assertion-check.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable prefer-template */
var _require = __webpack_require__(/*! ./utils */ "./node_modules/@skpm/test-runner/expect/utils.js"),
    EXPECTED_COLOR = _require.EXPECTED_COLOR,
    RECEIVED_COLOR = _require.RECEIVED_COLOR,
    matcherHint = _require.matcherHint,
    pluralize = _require.pluralize;

var _require2 = __webpack_require__(/*! ./matchers_object */ "./node_modules/@skpm/test-runner/expect/matchers_object.js"),
    getState = _require2.getState,
    setState = _require2.setState;

module.exports.resetAssertionsLocalState = function resetAssertionsLocalState() {
  setState({
    assertionCalls: 0,
    expectedAssertionsNumber: null,
    isExpectingAssertions: false
  });
}; // Create and format all errors related to the mismatched number of `expect`
// calls and reset the matchers state.


module.exports.extractExpectedAssertionsErrors = function extractExpectedAssertionsErrors() {
  var _getState = getState(),
      assertionCalls = _getState.assertionCalls,
      expectedAssertionsNumber = _getState.expectedAssertionsNumber,
      isExpectingAssertions = _getState.isExpectingAssertions;

  if (typeof expectedAssertionsNumber === 'number' && assertionCalls !== expectedAssertionsNumber) {
    var numOfAssertionsExpected = EXPECTED_COLOR(pluralize('assertion', expectedAssertionsNumber));
    var error = new Error(matcherHint('.assertions', '', String(expectedAssertionsNumber), {
      isDirectExpectCall: true
    }) + '\n\n' + "Expected ".concat(numOfAssertionsExpected, " to be called but received ") + RECEIVED_COLOR(pluralize('assertion call', assertionCalls || 0)) + '.');
    return {
      actual: assertionCalls,
      error: error,
      expected: expectedAssertionsNumber
    };
  }

  if (isExpectingAssertions && assertionCalls === 0) {
    var expected = EXPECTED_COLOR('at least one assertion');
    var received = RECEIVED_COLOR('received none');

    var _error = new Error(matcherHint('.hasAssertions', '', '', {
      isDirectExpectCall: true
    }) + '\n\n' + "Expected ".concat(expected, " to be called but ").concat(received, "."));

    return {
      actual: 'none',
      error: _error,
      expected: 'at least one'
    };
  }

  return undefined;
};

/***/ }),

/***/ "./node_modules/@skpm/test-runner/expect/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@skpm/test-runner/expect/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _require = __webpack_require__(/*! ./matchers_object */ "./node_modules/@skpm/test-runner/expect/matchers_object.js"),
    getState = _require.getState,
    setState = _require.setState,
    getMatchers = _require.getMatchers,
    setMatchers = _require.setMatchers;

var utils = __webpack_require__(/*! ./utils */ "./node_modules/@skpm/test-runner/expect/utils.js");

var matchers = __webpack_require__(/*! ./matchers */ "./node_modules/@skpm/test-runner/expect/matchers.js");

var sketchMatchers = __webpack_require__(/*! ./sketch_matchers */ "./node_modules/@skpm/test-runner/expect/sketch_matchers.js");

var _require2 = __webpack_require__(/*! ./assertion-check */ "./node_modules/@skpm/test-runner/expect/assertion-check.js"),
    extractExpectedAssertionsErrors = _require2.extractExpectedAssertionsErrors,
    resetAssertionsLocalState = _require2.resetAssertionsLocalState;

function validateResult(result) {
  if (_typeof(result) !== 'object' || typeof result.pass !== 'boolean' || result.message && typeof result.message !== 'string' && typeof result.message !== 'function') {
    throw new Error('Unexpected return from a matcher function.\n' + 'Matcher functions should ' + 'return an object in the following format:\n' + '  {message?: string | function, pass: boolean}\n' + "'".concat(utils.stringify(result), "' was returned"));
  }
}

function getMessage(message) {
  return message && message() || 'No message was specified for this matcher.';
}

function makeThrowingMatcher(matcher, isNot, actual) {
  return function throwingMatcher() {
    var throws = true;
    var matcherContext = Object.assign( // When throws is disabled, the matcher will not throw errors during test
    // execution but instead add them to the global matcher state. If a
    // matcher throws, test execution is normally stopped immediately. The
    // snapshot matcher uses it because we want to log all snapshot
    // failures in a test.
    {
      dontThrow: function dontThrow() {
        throws = false;
      }
    }, getState(), {
      isNot: isNot,
      utils: utils
    });
    var result;

    try {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      result = matcher.apply(matcherContext, [actual].concat(args));
    } catch (error) {
      throw error;
    }

    validateResult(result);
    getState().assertionCalls += 1; // XOR

    if (result.pass && isNot || !result.pass && !isNot) {
      var message = getMessage(result.message);
      var error = new Error(message); // Passing the result of the matcher with the error so that a custom
      // reporter could access the actual and expected objects of the result
      // for example in order to display a custom visual diff

      error.matcherResult = result; // Try to remove this function from the stack trace frame.
      // Guard for some environments (browsers) that do not support this feature.

      if (Error.captureStackTrace) {
        Error.captureStackTrace(error, throwingMatcher);
      }

      if (throws) {
        throw error;
      } else {
        getState().suppressedErrors.push(error);
      }
    }
  };
}

var expect = function expect(actual) {
  if ((arguments.length <= 1 ? 0 : arguments.length - 1) !== 0) {
    throw new Error('Expect takes at most one argument.');
  }

  var allMatchers = getMatchers();
  var expectation = {
    not: {},
    rejects: {
      not: {}
    },
    resolves: {
      not: {}
    }
  };
  Object.keys(allMatchers).forEach(function (name) {
    var matcher = allMatchers[name];
    expectation[name] = makeThrowingMatcher(matcher, false, actual);
    expectation.not[name] = makeThrowingMatcher(matcher, true, actual);
  });
  return expectation;
};

expect.extend = function (_matchers) {
  return setMatchers(_matchers);
}; // add default jest matchers


expect.extend(matchers);
expect.extend(sketchMatchers);

expect.assertions = function (expected) {
  setState({
    expectedAssertionsNumber: expected
  });
};

expect.hasAssertions = function (expected) {
  utils.ensureNoExpected(expected, '.hasAssertions');
  setState({
    isExpectingAssertions: true
  });
};

expect.getState = getState;
expect.setState = setState;
expect.resetAssertionsLocalState = resetAssertionsLocalState;
expect.extractExpectedAssertionsErrors = extractExpectedAssertionsErrors;
module.exports = expect;

/***/ }),

/***/ "./node_modules/@skpm/test-runner/expect/matchers.js":
/*!***********************************************************!*\
  !*** ./node_modules/@skpm/test-runner/expect/matchers.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-disable prefer-template, no-restricted-properties, no-void, eqeqeq, no-nested-ternary */
var _require = __webpack_require__(/*! util */ "./core-modules/node_modules/@skpm/util/index.js"),
    isDeepStrictEqual = _require.isDeepStrictEqual;

var _require2 = __webpack_require__(/*! ./utils */ "./node_modules/@skpm/test-runner/expect/utils.js"),
    EXPECTED_COLOR = _require2.EXPECTED_COLOR,
    RECEIVED_COLOR = _require2.RECEIVED_COLOR,
    SUGGEST_TO_EQUAL = _require2.SUGGEST_TO_EQUAL,
    ensureNoExpected = _require2.ensureNoExpected,
    ensureNumbers = _require2.ensureNumbers,
    matcherHint = _require2.matcherHint,
    printReceived = _require2.printReceived,
    printExpected = _require2.printExpected,
    printWithType = _require2.printWithType,
    getType = _require2.getType;

var escapeStrForRegex = function escapeStrForRegex(string) {
  return string.replace(/[[\]{}()*+?.\\^$|]/g, '\\$&');
};

var getPath = function getPath(object, propertyPath) {
  if (!Array.isArray(propertyPath)) {
    propertyPath = propertyPath.split('.'); // eslint-disable-line
  }

  var lastProp = propertyPath.length === 1;

  if (propertyPath.length) {
    var prop = propertyPath[0];
    var newObject = object[prop];

    if (!lastProp && (newObject === null || newObject === undefined)) {
      // This is not the last prop in the chain. If we keep recursing it will
      // hit a `can't access property X of undefined | null`. At this point we
      // know that the chain broken and we return right away.
      return {
        hasEndProp: false,
        lastTraversedObject: object,
        traversedPath: []
      };
    }

    var result = getPath(newObject, propertyPath.slice(1));
    result.lastTraversedObject || (result.lastTraversedObject = object);
    result.traversedPath.unshift(prop);

    if (propertyPath.length === 1) {
      result.hasEndProp = hasOwnProperty(object, prop);

      if (!result.hasEndProp) {
        delete result.value;
        result.traversedPath.shift();
      }
    }

    return result;
  }

  return {
    lastTraversedObject: null,
    traversedPath: [],
    value: object
  };
};

var matchers = {
  toBe: function toBe(received, expected) {
    var pass = Object.is(received, expected);
    var message = pass ? function () {
      return matcherHint('.not.toBe') + '\n\n' + "Expected value to not be (using Object.is):\n" + "  ".concat(printExpected(expected), "\n") + "Received:\n" + "  ".concat(printReceived(received));
    } : function () {
      var suggestToEqual = getType(received) === getType(expected) && (getType(received) === 'object' || getType(expected) === 'array' || getType(expected) === 'sketch-native') && isDeepStrictEqual(received, expected, [isDeepStrictEqual.iterableEquality]);
      return matcherHint('.toBe') + '\n\n' + "Expected value to be (using Object.is):\n" + "  ".concat(printExpected(expected), "\n") + "Received:\n" + "  ".concat(printReceived(received)) + (suggestToEqual ? "\n\n".concat(SUGGEST_TO_EQUAL, "\n") : '');
    }; // Passing the the actual and expected objects so that a custom reporter
    // could access them, for example in order to display a custom visual diff,
    // or create a different error message

    return {
      actual: received,
      expected: expected,
      message: message,
      name: 'toBe',
      pass: pass
    };
  },
  toBeCloseTo: function toBeCloseTo(actual, expected) {
    var precision = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
    ensureNumbers(actual, expected, '.toBeCloseTo');
    var pass = Math.abs(expected - actual) < Math.pow(10, -precision) / 2;
    var message = pass ? function () {
      return matcherHint('.not.toBeCloseTo', 'received', 'expected, precision') + '\n\n' + "Expected value not to be close to (with ".concat(printExpected(precision), "-digit precision):\n") + "  ".concat(printExpected(expected), "\n") + "Received:\n" + "  ".concat(printReceived(actual));
    } : function () {
      return matcherHint('.toBeCloseTo', 'received', 'expected, precision') + '\n\n' + "Expected value to be close to (with ".concat(printExpected(precision), "-digit precision):\n") + "  ".concat(printExpected(expected), "\n") + "Received:\n" + "  ".concat(printReceived(actual));
    };
    return {
      message: message,
      pass: pass
    };
  },
  toBeDefined: function toBeDefined(actual, expected) {
    ensureNoExpected(expected, '.toBeDefined');
    var pass = actual !== void 0;
    var message = pass ? function () {
      return matcherHint('.not.toBeDefined', 'received', '') + '\n\n' + "Expected value not to be defined, instead received\n" + "  ".concat(printReceived(actual));
    } : function () {
      return matcherHint('.toBeDefined', 'received', '') + '\n\n' + "Expected value to be defined, instead received\n" + "  ".concat(printReceived(actual));
    };
    return {
      message: message,
      pass: pass
    };
  },
  toBeFalsy: function toBeFalsy(actual, expected) {
    ensureNoExpected(expected, '.toBeFalsy');
    var pass = !actual;
    var message = pass ? function () {
      return matcherHint('.not.toBeFalsy', 'received', '') + '\n\n' + "Expected value not to be falsy, instead received\n" + "  ".concat(printReceived(actual));
    } : function () {
      return matcherHint('.toBeFalsy', 'received', '') + '\n\n' + "Expected value to be falsy, instead received\n" + "  ".concat(printReceived(actual));
    };
    return {
      message: message,
      pass: pass
    };
  },
  toBeGreaterThan: function toBeGreaterThan(actual, expected) {
    ensureNumbers(actual, expected, '.toBeGreaterThan');
    var pass = actual > expected;
    var message = pass ? function () {
      return matcherHint('.not.toBeGreaterThan') + '\n\n' + "Expected value not to be greater than:\n" + "  ".concat(printExpected(expected), "\n") + "Received:\n" + "  ".concat(printReceived(actual));
    } : function () {
      return matcherHint('.toBeGreaterThan') + '\n\n' + "Expected value to be greater than:\n" + "  ".concat(printExpected(expected), "\n") + "Received:\n" + "  ".concat(printReceived(actual));
    };
    return {
      message: message,
      pass: pass
    };
  },
  toBeGreaterThanOrEqual: function toBeGreaterThanOrEqual(actual, expected) {
    ensureNumbers(actual, expected, '.toBeGreaterThanOrEqual');
    var pass = actual >= expected;
    var message = pass ? function () {
      return matcherHint('.not.toBeGreaterThanOrEqual') + '\n\n' + "Expected value not to be greater than or equal:\n" + "  ".concat(printExpected(expected), "\n") + "Received:\n" + "  ".concat(printReceived(actual));
    } : function () {
      return matcherHint('.toBeGreaterThanOrEqual') + '\n\n' + "Expected value to be greater than or equal:\n" + "  ".concat(printExpected(expected), "\n") + "Received:\n" + "  ".concat(printReceived(actual));
    };
    return {
      message: message,
      pass: pass
    };
  },
  toBeLessThan: function toBeLessThan(actual, expected) {
    ensureNumbers(actual, expected, '.toBeLessThan');
    var pass = actual < expected;
    var message = pass ? function () {
      return matcherHint('.not.toBeLessThan') + '\n\n' + "Expected value not to be less than:\n" + "  ".concat(printExpected(expected), "\n") + "Received:\n" + "  ".concat(printReceived(actual));
    } : function () {
      return matcherHint('.toBeLessThan') + '\n\n' + "Expected value to be less than:\n" + "  ".concat(printExpected(expected), "\n") + "Received:\n" + "  ".concat(printReceived(actual));
    };
    return {
      message: message,
      pass: pass
    };
  },
  toBeLessThanOrEqual: function toBeLessThanOrEqual(actual, expected) {
    ensureNumbers(actual, expected, '.toBeLessThanOrEqual');
    var pass = actual <= expected;
    var message = pass ? function () {
      return matcherHint('.not.toBeLessThanOrEqual') + '\n\n' + "Expected value not to be less than or equal:\n" + "  ".concat(printExpected(expected), "\n") + "Received:\n" + "  ".concat(printReceived(actual));
    } : function () {
      return matcherHint('.toBeLessThanOrEqual') + '\n\n' + "Expected value to be less than or equal:\n" + "  ".concat(printExpected(expected), "\n") + "Received:\n" + "  ".concat(printReceived(actual));
    };
    return {
      message: message,
      pass: pass
    };
  },
  toBeNaN: function toBeNaN(actual, expected) {
    ensureNoExpected(expected, '.toBeNaN');
    var pass = Number.isNaN(actual);
    var message = pass ? function () {
      return matcherHint('.not.toBeNaN', 'received', '') + '\n\n' + "Expected value not to be NaN, instead received\n" + "  ".concat(printReceived(actual));
    } : function () {
      return matcherHint('.toBeNaN', 'received', '') + '\n\n' + "Expected value to be NaN, instead received\n" + "  ".concat(printReceived(actual));
    };
    return {
      message: message,
      pass: pass
    };
  },
  toBeNull: function toBeNull(actual, expected) {
    ensureNoExpected(expected, '.toBeNull');
    var pass = actual === null;
    var message = pass ? function () {
      return matcherHint('.not.toBeNull', 'received', '') + '\n\n' + "Expected value not to be null, instead received\n" + "  ".concat(printReceived(actual));
    } : function () {
      return matcherHint('.toBeNull', 'received', '') + '\n\n' + "Expected value to be null, instead received\n" + "  ".concat(printReceived(actual));
    };
    return {
      message: message,
      pass: pass
    };
  },
  toBeTruthy: function toBeTruthy(actual, expected) {
    ensureNoExpected(expected, '.toBeTruthy');
    var pass = !!actual;
    var message = pass ? function () {
      return matcherHint('.not.toBeTruthy', 'received', '') + '\n\n' + "Expected value not to be truthy, instead received\n" + "  ".concat(printReceived(actual));
    } : function () {
      return matcherHint('.toBeTruthy', 'received', '') + '\n\n' + "Expected value to be truthy, instead received\n" + "  ".concat(printReceived(actual));
    };
    return {
      message: message,
      pass: pass
    };
  },
  toBeUndefined: function toBeUndefined(actual, expected) {
    ensureNoExpected(expected, '.toBeUndefined');
    var pass = actual === void 0;
    var message = pass ? function () {
      return matcherHint('.not.toBeUndefined', 'received', '') + '\n\n' + "Expected value not to be undefined, instead received\n" + "  ".concat(printReceived(actual));
    } : function () {
      return matcherHint('.toBeUndefined', 'received', '') + '\n\n' + "Expected value to be undefined, instead received\n" + "  ".concat(printReceived(actual));
    };
    return {
      message: message,
      pass: pass
    };
  },
  toContain: function toContain(collection, value) {
    var collectionType = getType(collection);
    var converted = null;

    if (Array.isArray(collection) || typeof collection === 'string') {
      // strings have `indexOf` so we don't need to convert
      // arrays have `indexOf` and we don't want to make a copy
      converted = collection;
    } else {
      try {
        converted = Array.from(collection);
      } catch (e) {
        throw new Error(matcherHint('[.not].toContainEqual', 'collection', 'value') + '\n\n' + "Expected ".concat(RECEIVED_COLOR('collection'), " to be an array-like structure.\n") + printWithType('Received', collection, printReceived));
      }
    } // At this point, we're either a string or an Array,
    // which was converted from an array-like structure.


    var pass = converted.indexOf(value) != -1;
    var message = pass ? function () {
      return matcherHint('.not.toContain', collectionType, 'value') + '\n\n' + "Expected ".concat(collectionType, ":\n") + "  ".concat(printReceived(collection), "\n") + "Not to contain value:\n" + "  ".concat(printExpected(value), "\n");
    } : function () {
      return matcherHint('.toContain', collectionType, 'value') + '\n\n' + "Expected ".concat(collectionType, ":\n") + "  ".concat(printReceived(collection), "\n") + "To contain value:\n" + "  ".concat(printExpected(value));
    };
    return {
      message: message,
      pass: pass
    };
  },
  toContainEqual: function toContainEqual(collection, value) {
    var collectionType = getType(collection);
    var converted = null;

    if (Array.isArray(collection)) {
      converted = collection;
    } else {
      try {
        converted = Array.from(collection);
      } catch (e) {
        throw new Error(matcherHint('[.not].toContainEqual', 'collection', 'value') + '\n\n' + "Expected ".concat(RECEIVED_COLOR('collection'), " to be an array-like structure.\n") + printWithType('Received', collection, printReceived));
      }
    }

    var pass = converted.findIndex(function (item) {
      return isDeepStrictEqual(item, value, [isDeepStrictEqual.iterableEquality]);
    }) !== -1;
    var message = pass ? function () {
      return matcherHint('.not.toContainEqual', collectionType, 'value') + '\n\n' + "Expected ".concat(collectionType, ":\n") + "  ".concat(printReceived(collection), "\n") + "Not to contain a value equal to:\n" + "  ".concat(printExpected(value), "\n");
    } : function () {
      return matcherHint('.toContainEqual', collectionType, 'value') + '\n\n' + "Expected ".concat(collectionType, ":\n") + "  ".concat(printReceived(collection), "\n") + "To contain a value equal to:\n" + "  ".concat(printExpected(value));
    };
    return {
      message: message,
      pass: pass
    };
  },
  toEqual: function toEqual(received, expected) {
    var pass = isDeepStrictEqual(received, expected, [isDeepStrictEqual.iterableEquality]);
    var message = pass ? function () {
      return matcherHint('.not.toEqual') + '\n\n' + "Expected value to not equal:\n" + "  ".concat(printExpected(expected), "\n") + "Received:\n" + "  ".concat(printReceived(received));
    } : function () {
      return matcherHint('.toEqual') + '\n\n' + "Expected value to equal:\n" + "  ".concat(printExpected(expected), "\n") + "Received:\n" + "  ".concat(printReceived(received));
    }; // Passing the the actual and expected objects so that a custom reporter
    // could access them, for example in order to display a custom visual diff,
    // or create a different error message

    return {
      actual: received,
      expected: expected,
      message: message,
      name: 'toEqual',
      pass: pass
    };
  },
  toHaveLength: function toHaveLength(received, length) {
    if (typeof received !== 'string' && (!received || typeof received.length !== 'number')) {
      throw new Error(matcherHint('[.not].toHaveLength', 'received', 'length') + '\n\n' + "Expected value to have a 'length' property that is a number. " + "Received:\n" + "  ".concat(printReceived(received), "\n") + (received ? "received.length:\n  ".concat(printReceived(received.length)) : ''));
    }

    var pass = received.length === length;
    var message = pass ? function () {
      return matcherHint('.not.toHaveLength', 'received', 'length') + '\n\n' + "Expected value to not have length:\n" + "  ".concat(printExpected(length), "\n") + "Received:\n" + "  ".concat(printReceived(received), "\n") + "received.length:\n" + "  ".concat(printReceived(received.length));
    } : function () {
      return matcherHint('.toHaveLength', 'received', 'length') + '\n\n' + "Expected value to have length:\n" + "  ".concat(printExpected(length), "\n") + "Received:\n" + "  ".concat(printReceived(received), "\n") + "received.length:\n" + "  ".concat(printReceived(received.length));
    };
    return {
      message: message,
      pass: pass
    };
  },
  toHaveProperty: function toHaveProperty(object, keyPath, value) {
    var valuePassed = arguments.length === 3;

    if (!object && typeof object !== 'string' && typeof object !== 'number') {
      throw new Error(matcherHint('[.not].toHaveProperty', 'object', 'path', {
        secondArgument: valuePassed ? 'value' : null
      }) + '\n\n' + "Expected ".concat(RECEIVED_COLOR('object'), " to be an object. Received:\n") + "  ".concat(getType(object), ": ").concat(printReceived(object)));
    }

    if (getType(keyPath) !== 'string') {
      throw new Error(matcherHint('[.not].toHaveProperty', 'object', 'path', {
        secondArgument: valuePassed ? 'value' : null
      }) + '\n\n' + "Expected ".concat(EXPECTED_COLOR('path'), " to be a string. Received:\n") + "  ".concat(getType(keyPath), ": ").concat(printReceived(keyPath)));
    }

    var result = getPath(object, keyPath);
    var lastTraversedObject = result.lastTraversedObject,
        hasEndProp = result.hasEndProp;
    var pass = valuePassed ? isDeepStrictEqual(result.value, value, [isDeepStrictEqual.iterableEquality]) : hasEndProp;
    var traversedPath = result.traversedPath.join('.');
    var message = pass ? function () {
      return matcherHint('.not.toHaveProperty', 'object', 'path', {
        secondArgument: valuePassed ? 'value' : null
      }) + '\n\n' + "Expected the object:\n" + "  ".concat(printReceived(object), "\n") + "Not to have a nested property:\n" + "  ".concat(printExpected(keyPath), "\n") + (valuePassed ? "With a value of:\n  ".concat(printExpected(value), "\n") : '');
    } : function () {
      return matcherHint('.toHaveProperty', 'object', 'path', {
        secondArgument: valuePassed ? 'value' : null
      }) + '\n\n' + "Expected the object:\n" + "  ".concat(printReceived(object), "\n") + "To have a nested property:\n" + "  ".concat(printExpected(keyPath), "\n") + (valuePassed ? "With a value of:\n  ".concat(printExpected(value), "\n") : '') + (hasEndProp ? "Received:\n  ".concat(printReceived(result.value)) : traversedPath ? "Received:\n  ".concat(RECEIVED_COLOR('object'), ".").concat(traversedPath, ": ").concat(printReceived(lastTraversedObject)) : '');
    };

    if (pass === undefined) {
      throw new Error('pass must be initialized');
    }

    return {
      message: message,
      pass: pass
    };
  },
  toMatch: function toMatch(received, expected) {
    if (typeof received !== 'string') {
      throw new Error(matcherHint('[.not].toMatch', 'string', 'expected') + '\n\n' + "".concat(RECEIVED_COLOR('string'), " value must be a string.\n") + printWithType('Received', received, printReceived));
    }

    if (!(expected instanceof RegExp) && !(typeof expected === 'string')) {
      throw new Error(matcherHint('[.not].toMatch', 'string', 'expected') + '\n\n' + "".concat(EXPECTED_COLOR('expected'), " value must be a string or a regular expression.\n") + printWithType('Expected', expected, printExpected));
    }

    var pass = new RegExp(typeof expected === 'string' ? escapeStrForRegex(expected) : expected).test(received);
    var message = pass ? function () {
      return matcherHint('.not.toMatch') + "\n\nExpected value not to match:\n" + "  ".concat(printExpected(expected)) + "\nReceived:\n" + "  ".concat(printReceived(received));
    } : function () {
      return matcherHint('.toMatch') + "\n\nExpected value to match:\n" + "  ".concat(printExpected(expected)) + "\nReceived:\n" + "  ".concat(printReceived(received));
    };
    return {
      message: message,
      pass: pass
    };
  },
  toMatchObject: function toMatchObject(receivedObject, expectedObject) {
    if (_typeof(receivedObject) !== 'object' || receivedObject === null) {
      throw new Error(matcherHint('[.not].toMatchObject', 'object', 'expected') + '\n\n' + "".concat(RECEIVED_COLOR('received'), " value must be an object.\n") + printWithType('Received', receivedObject, printReceived));
    }

    if (_typeof(expectedObject) !== 'object' || expectedObject === null) {
      throw new Error(matcherHint('[.not].toMatchObject', 'object', 'expected') + '\n\n' + "".concat(EXPECTED_COLOR('expected'), " value must be an object.\n") + printWithType('Expected', expectedObject, printExpected));
    }

    var pass = isDeepStrictEqual(receivedObject, expectedObject, [isDeepStrictEqual.iterableEquality, isDeepStrictEqual.subsetEquality]);
    var message = pass ? function () {
      return matcherHint('.not.toMatchObject') + "\n\nExpected value not to match object:\n" + "  ".concat(printExpected(expectedObject)) + "\nReceived:\n" + "  ".concat(printReceived(receivedObject));
    } : function () {
      return matcherHint('.toMatchObject') + "\n\nExpected value to match object:\n" + "  ".concat(printExpected(expectedObject)) + "\nReceived:\n" + "  ".concat(printReceived(receivedObject));
    };
    return {
      message: message,
      pass: pass
    };
  }
};
module.exports = matchers;

/***/ }),

/***/ "./node_modules/@skpm/test-runner/expect/matchers_object.js":
/*!******************************************************************!*\
  !*** ./node_modules/@skpm/test-runner/expect/matchers_object.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Global matchers object holds the list of available matchers and
// the state, that can hold matcher specific values that change over time.
var MATCHERS_OBJECT = {
  matchers: {},
  state: {
    assertionCalls: 0,
    expectedAssertionsNumber: null,
    isExpectingAssertions: false,
    suppressedErrors: [] // errors that are not thrown immediately.

  }
};

module.exports.getState = function getState() {
  return MATCHERS_OBJECT.state;
};

module.exports.setState = function setState(state) {
  Object.assign(MATCHERS_OBJECT.state, state);
};

module.exports.getMatchers = function getMatchers() {
  return MATCHERS_OBJECT.matchers;
};

module.exports.setMatchers = function setMatchers(matchers) {
  Object.assign(MATCHERS_OBJECT.matchers, matchers);
};

/***/ }),

/***/ "./node_modules/@skpm/test-runner/expect/sketch_matchers.js":
/*!******************************************************************!*\
  !*** ./node_modules/@skpm/test-runner/expect/sketch_matchers.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable prefer-template */
var _require = __webpack_require__(/*! ./utils */ "./node_modules/@skpm/test-runner/expect/utils.js"),
    matcherHint = _require.matcherHint,
    printReceived = _require.printReceived,
    printExpected = _require.printExpected,
    getType = _require.getType; // /* Sketch specific matchers */


module.exports = {
  toBeInstanceOf: function toBeInstanceOf(received, constructor) {
    var constType = getType(constructor);

    if (constType !== 'function' && constType !== 'sketch-native') {
      throw new Error(matcherHint('[.not].toBeInstanceOf', 'value', 'constructor') + "\n\n" + "Expected constructor to be a function. Instead got:\n" + "  ".concat(printExpected(constType)));
    }

    var pass;
    var expectedString;
    var receivedString;

    if (constType === 'sketch-native') {
      pass = received && typeof received.class === 'function' && String(received.class()) === String(constructor.class());
      expectedString = String(constructor.class());
      receivedString = received && typeof received.class === 'function' ? String(received.class()) : received.constructor && received.constructor.name;
    } else {
      pass = received instanceof constructor;
      expectedString = constructor.name || constructor;
      receivedString = received.constructor && received.constructor.name;
    }

    var message = pass ? function () {
      return matcherHint('.not.toBeInstanceOf', 'value', 'constructor') + '\n\n' + "Expected value not to be an instance of:\n" + "  ".concat(printExpected(expectedString), "\n") + "Received:\n" + "  ".concat(printReceived(receivedString), "\n");
    } : function () {
      return matcherHint('.toBeInstanceOf', 'value', 'constructor') + '\n\n' + "Expected value to be an instance of:\n" + "  ".concat(printExpected(expectedString), "\n") + "Received:\n" + "  ".concat(printReceived(received), "\n") + "Constructor:\n" + "  ".concat(printReceived(receivedString));
    };
    return {
      message: message,
      pass: pass
    };
  }
};

/***/ }),

/***/ "./node_modules/@skpm/test-runner/expect/utils.js":
/*!********************************************************!*\
  !*** ./node_modules/@skpm/test-runner/expect/utils.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-disable prefer-template, import/first */
var _require = __webpack_require__(/*! util */ "./core-modules/node_modules/@skpm/util/index.js"),
    inspect = _require.inspect;

module.exports.stringify = inspect;
var chalk = {
  green: function green(s) {
    return "{{{CHALK_green}}}".concat(s, "{{{/CHALK_green}}}");
  },
  red: function red(s) {
    return "{{{CHALK_red}}}".concat(s, "{{{/CHALK_red}}}");
  },
  dim: function dim(s) {
    return "{{{CHALK_dim}}}".concat(s, "{{{/CHALK_dim}}}");
  },
  inverse: function inverse(s) {
    return "{{{CHALK_inverse}}}".concat(s, "{{{/CHALK_inverse}}}");
  }
};
var REVERSE_REGEX = /{{{CHALK_([a-z]+)}}}([\s\S]*?){{{\/CHALK_\1}}}/gm;

var reverseChalk = function reverseChalk(realChalk, s) {
  return s.replace(REVERSE_REGEX, function (match, mode, inside) {
    return realChalk[mode](reverseChalk(realChalk, inside));
  });
};

module.exports.reverseChalk = reverseChalk;
var EXPECTED_COLOR = chalk.green;
var RECEIVED_COLOR = chalk.red;
module.exports.EXPECTED_COLOR = EXPECTED_COLOR;
module.exports.RECEIVED_COLOR = RECEIVED_COLOR;
var NUMBERS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen'];
module.exports.SUGGEST_TO_EQUAL = chalk.dim('Looks like you wanted to test for object/array equality with strict `toBe` matcher. You probably need to use `toEqual` instead.');

var highlightTrailingWhitespace = function highlightTrailingWhitespace(text) {
  return text.replace(/\s+$/gm, chalk.inverse('$&'));
};

module.exports.highlightTrailingWhitespace = highlightTrailingWhitespace;

var printReceived = function printReceived(object) {
  return RECEIVED_COLOR(highlightTrailingWhitespace(inspect(object)));
};

var printExpected = function printExpected(value) {
  return EXPECTED_COLOR(highlightTrailingWhitespace(inspect(value)));
};

module.exports.printReceived = printReceived;
module.exports.printExpected = printExpected;

var getType = function getType(value) {
  if (typeof value === 'undefined') {
    return 'undefined';
  }

  if (value === null) {
    return 'null';
  }

  if (Array.isArray(value)) {
    return 'array';
  }

  if (typeof value === 'boolean') {
    return 'boolean';
  }

  if (typeof value === 'function') {
    return 'function';
  }

  if (typeof value === 'number') {
    return 'number';
  }

  if (typeof value === 'string') {
    return 'string';
  }

  if (_typeof(value) === 'object') {
    if (value.constructor === RegExp) {
      return 'regexp';
    }

    if (value.constructor === Map) {
      return 'map';
    }

    if (value.constructor === Set) {
      return 'set';
    }

    if (value.class && typeof value.class === 'function') {
      return 'sketch-native';
    }

    return 'object'; // $FlowFixMe https://github.com/facebook/flow/issues/1015
  }

  if (_typeof(value) === 'symbol') {
    return 'symbol';
  }

  throw new Error("value of unknown type: ".concat(value));
};

module.exports.getType = getType;

var printWithType = function printWithType(name, received, print) {
  var type = getType(received);
  return name + ':' + (type !== 'null' && type !== 'undefined' ? '\n  ' + type + ': ' : ' ') + print(received);
};

module.exports.printWithType;

var matcherHint = function matcherHint(matcherName) {
  var received = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'received';
  var expected = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'expected';
  var options = arguments.length > 3 ? arguments[3] : undefined;
  var secondArgument = options && options.secondArgument;
  var isDirectExpectCall = options && options.isDirectExpectCall;
  return chalk.dim('expect' + (isDirectExpectCall ? '' : '(')) + RECEIVED_COLOR(received) + chalk.dim((isDirectExpectCall ? '' : ')') + matcherName + '(') + EXPECTED_COLOR(expected) + (secondArgument ? ", ".concat(EXPECTED_COLOR(secondArgument)) : '') + chalk.dim(')');
};

module.exports.matcherHint = matcherHint;

var ensureNoExpected = function ensureNoExpected(expected, matcherName) {
  if (typeof expected !== 'undefined') {
    throw new Error("".concat(matcherHint("[.not]".concat(matcherName || 'This'), undefined, ''), "\n\nMatcher does not accept any arguments.\n").concat(printWithType('Got', expected, printExpected)));
  }
};

module.exports.ensureNoExpected = ensureNoExpected;

var ensureActualIsNumber = function ensureActualIsNumber(actual, matcherName) {
  if (typeof actual !== 'number') {
    throw new Error(matcherHint("[.not]".concat(matcherName || 'This matcher')) + '\n\n' + "Received value must be a number.\n" + printWithType('Received', actual, printReceived));
  }
};

module.exports.ensureActualIsNumber = ensureActualIsNumber;

var ensureExpectedIsNumber = function ensureExpectedIsNumber(expected, matcherName) {
  if (typeof expected !== 'number') {
    throw new Error(matcherHint("[.not]".concat(matcherName || 'This matcher')) + '\n\n' + "Expected value must be a number.\n" + printWithType('Got', expected, printExpected));
  }
};

module.exports.ensureExpectedIsNumber = ensureExpectedIsNumber;

var ensureNumbers = function ensureNumbers(actual, expected, matcherName) {
  ensureActualIsNumber(actual, matcherName);
  ensureExpectedIsNumber(expected, matcherName);
};

module.exports.ensureNumbers = ensureNumbers;

var pluralize = function pluralize(word, count) {
  return (NUMBERS[count] || count) + ' ' + word + (count === 1 ? '' : 's');
};

module.exports.pluralize = pluralize;

/***/ }),

/***/ "./node_modules/@skpm/test-runner/test-runner.sketchplugin/Contents/Sketch/generated-tests.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@skpm/test-runner/test-runner.sketchplugin/Contents/Sketch/generated-tests.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Promise, expect) {/* ⛔⚠️ THIS IS A GENERATED FILE. DO NOT MODIFY THIS ⛔⚠️ */

/* globals MSDocumentData, log, expect, coscript */
var prepareStackTrace = __webpack_require__(/*! sketch-utils/prepare-stack-trace */ "./node_modules/sketch-utils/prepare-stack-trace.js");

var sketch = __webpack_require__(/*! sketch */ "./Source/index.ts");

var util = __webpack_require__(/*! util */ "./core-modules/node_modules/@skpm/util/index.js");

function SerialPromise(promises) {
  return promises.reduce(function (prev, p) {
    return prev.then(function () {
      return p();
    });
  }, Promise.resolve());
}

function getTestFailure(err) {
  var testFailure;

  if (err instanceof Error) {
    testFailure = {
      message: err.message,
      name: err.name,
      stack: prepareStackTrace(err.stack || '')
    };

    if (err.actual) {
      testFailure.actual = err.actual;
      testFailure.expected = err.expected;
      testFailure.operator = err.operator;
    }

    if (err.nativeException) {
      testFailure.message += ' ';
      testFailure.message += String(err.nativeException.reason());
    }
  } else if (err.reason && err.name) {
    testFailure = {
      message: String(err.reason()),
      name: String(err.name())
    };
  } else {
    testFailure = err;
  }

  return testFailure;
}

module.exports = function runTests(context) {
  var testResults = [];
  var testSuites = {
    suites: {}
  };

  try {
    testSuites.suites["WrappedObject"] = __webpack_require__(/*! ../../../../../../Source/dom/__tests__/WrappedObject.test.js */ "./Source/dom/__tests__/WrappedObject.test.js");
  } catch (err) {
    testResults.push({
      name: "WrappedObject",
      type: 'failed',
      exec: true,
      reason: getTestFailure(err)
    });
  }

  try {
    testSuites.suites["export"] = __webpack_require__(/*! ../../../../../../Source/dom/__tests__/export.test.js */ "./Source/dom/__tests__/export.test.js");
  } catch (err) {
    testResults.push({
      name: "export",
      type: 'failed',
      exec: true,
      reason: getTestFailure(err)
    });
  }

  try {
    testSuites.suites["globalAssets"] = __webpack_require__(/*! ../../../../../../Source/dom/__tests__/globalAssets.test.js */ "./Source/dom/__tests__/globalAssets.test.js");
  } catch (err) {
    testResults.push({
      name: "globalAssets",
      type: 'failed',
      exec: true,
      reason: getTestFailure(err)
    });
  }

  try {
    testSuites.suites["import"] = __webpack_require__(/*! ../../../../../../Source/dom/__tests__/import.test.js */ "./Source/dom/__tests__/import.test.js");
  } catch (err) {
    testResults.push({
      name: "import",
      type: 'failed',
      exec: true,
      reason: getTestFailure(err)
    });
  }

  try {
    testSuites.suites["Settings"] = __webpack_require__(/*! ../../../../../../Source/settings/__tests__/Settings.test.js */ "./Source/settings/__tests__/Settings.test.js");
  } catch (err) {
    testResults.push({
      name: "Settings",
      type: 'failed',
      exec: true,
      reason: getTestFailure(err)
    });
  }

  try {
    testSuites.suites["async"] = __webpack_require__(/*! ../../../../../../Source/async/__tests__/async.test.js */ "./Source/async/__tests__/async.test.js");
  } catch (err) {
    testResults.push({
      name: "async",
      type: 'failed',
      exec: true,
      reason: getTestFailure(err)
    });
  }

  try {
    testSuites.suites["ColorAsset"] = __webpack_require__(/*! ../../../../../../Source/dom/assets/__tests__/ColorAsset.test.js */ "./Source/dom/assets/__tests__/ColorAsset.test.js");
  } catch (err) {
    testResults.push({
      name: "ColorAsset",
      type: 'failed',
      exec: true,
      reason: getTestFailure(err)
    });
  }

  try {
    testSuites.suites["GradientAsset"] = __webpack_require__(/*! ../../../../../../Source/dom/assets/__tests__/GradientAsset.test.js */ "./Source/dom/assets/__tests__/GradientAsset.test.js");
  } catch (err) {
    testResults.push({
      name: "GradientAsset",
      type: 'failed',
      exec: true,
      reason: getTestFailure(err)
    });
  }

  try {
    testSuites.suites["Artboard"] = __webpack_require__(/*! ../../../../../../Source/dom/layers/__tests__/Artboard.test.js */ "./Source/dom/layers/__tests__/Artboard.test.js");
  } catch (err) {
    testResults.push({
      name: "Artboard",
      type: 'failed',
      exec: true,
      reason: getTestFailure(err)
    });
  }

  try {
    testSuites.suites["Group"] = __webpack_require__(/*! ../../../../../../Source/dom/layers/__tests__/Group.test.js */ "./Source/dom/layers/__tests__/Group.test.js");
  } catch (err) {
    testResults.push({
      name: "Group",
      type: 'failed',
      exec: true,
      reason: getTestFailure(err)
    });
  }

  try {
    testSuites.suites["HotSpot"] = __webpack_require__(/*! ../../../../../../Source/dom/layers/__tests__/HotSpot.test.js */ "./Source/dom/layers/__tests__/HotSpot.test.js");
  } catch (err) {
    testResults.push({
      name: "HotSpot",
      type: 'failed',
      exec: true,
      reason: getTestFailure(err)
    });
  }

  try {
    testSuites.suites["Image"] = __webpack_require__(/*! ../../../../../../Source/dom/layers/__tests__/Image.test.js */ "./Source/dom/layers/__tests__/Image.test.js");
  } catch (err) {
    testResults.push({
      name: "Image",
      type: 'failed',
      exec: true,
      reason: getTestFailure(err)
    });
  }

  try {
    testSuites.suites["Layer"] = __webpack_require__(/*! ../../../../../../Source/dom/layers/__tests__/Layer.test.js */ "./Source/dom/layers/__tests__/Layer.test.js");
  } catch (err) {
    testResults.push({
      name: "Layer",
      type: 'failed',
      exec: true,
      reason: getTestFailure(err)
    });
  }

  try {
    testSuites.suites["Page"] = __webpack_require__(/*! ../../../../../../Source/dom/layers/__tests__/Page.test.js */ "./Source/dom/layers/__tests__/Page.test.js");
  } catch (err) {
    testResults.push({
      name: "Page",
      type: 'failed',
      exec: true,
      reason: getTestFailure(err)
    });
  }

  try {
    testSuites.suites["Shape"] = __webpack_require__(/*! ../../../../../../Source/dom/layers/__tests__/Shape.test.js */ "./Source/dom/layers/__tests__/Shape.test.js");
  } catch (err) {
    testResults.push({
      name: "Shape",
      type: 'failed',
      exec: true,
      reason: getTestFailure(err)
    });
  }

  try {
    testSuites.suites["ShapePath"] = __webpack_require__(/*! ../../../../../../Source/dom/layers/__tests__/ShapePath.test.js */ "./Source/dom/layers/__tests__/ShapePath.test.js");
  } catch (err) {
    testResults.push({
      name: "ShapePath",
      type: 'failed',
      exec: true,
      reason: getTestFailure(err)
    });
  }

  try {
    testSuites.suites["Slice"] = __webpack_require__(/*! ../../../../../../Source/dom/layers/__tests__/Slice.test.js */ "./Source/dom/layers/__tests__/Slice.test.js");
  } catch (err) {
    testResults.push({
      name: "Slice",
      type: 'failed',
      exec: true,
      reason: getTestFailure(err)
    });
  }

  try {
    testSuites.suites["StyledLayer"] = __webpack_require__(/*! ../../../../../../Source/dom/layers/__tests__/StyledLayer.test.js */ "./Source/dom/layers/__tests__/StyledLayer.test.js");
  } catch (err) {
    testResults.push({
      name: "StyledLayer",
      type: 'failed',
      exec: true,
      reason: getTestFailure(err)
    });
  }

  try {
    testSuites.suites["SymbolInstance"] = __webpack_require__(/*! ../../../../../../Source/dom/layers/__tests__/SymbolInstance.test.js */ "./Source/dom/layers/__tests__/SymbolInstance.test.js");
  } catch (err) {
    testResults.push({
      name: "SymbolInstance",
      type: 'failed',
      exec: true,
      reason: getTestFailure(err)
    });
  }

  try {
    testSuites.suites["SymbolMaster"] = __webpack_require__(/*! ../../../../../../Source/dom/layers/__tests__/SymbolMaster.test.js */ "./Source/dom/layers/__tests__/SymbolMaster.test.js");
  } catch (err) {
    testResults.push({
      name: "SymbolMaster",
      type: 'failed',
      exec: true,
      reason: getTestFailure(err)
    });
  }

  try {
    testSuites.suites["Text"] = __webpack_require__(/*! ../../../../../../Source/dom/layers/__tests__/Text.test.js */ "./Source/dom/layers/__tests__/Text.test.js");
  } catch (err) {
    testResults.push({
      name: "Text",
      type: 'failed',
      exec: true,
      reason: getTestFailure(err)
    });
  }

  try {
    testSuites.suites["CurvePoint"] = __webpack_require__(/*! ../../../../../../Source/dom/models/__tests__/CurvePoint.test.js */ "./Source/dom/models/__tests__/CurvePoint.test.js");
  } catch (err) {
    testResults.push({
      name: "CurvePoint",
      type: 'failed',
      exec: true,
      reason: getTestFailure(err)
    });
  }

  try {
    testSuites.suites["Document"] = __webpack_require__(/*! ../../../../../../Source/dom/models/__tests__/Document.test.js */ "./Source/dom/models/__tests__/Document.test.js");
  } catch (err) {
    testResults.push({
      name: "Document",
      type: 'failed',
      exec: true,
      reason: getTestFailure(err)
    });
  }

  try {
    testSuites.suites["ExportFormat"] = __webpack_require__(/*! ../../../../../../Source/dom/models/__tests__/ExportFormat.test.js */ "./Source/dom/models/__tests__/ExportFormat.test.js");
  } catch (err) {
    testResults.push({
      name: "ExportFormat",
      type: 'failed',
      exec: true,
      reason: getTestFailure(err)
    });
  }

  try {
    testSuites.suites["Flow"] = __webpack_require__(/*! ../../../../../../Source/dom/models/__tests__/Flow.test.js */ "./Source/dom/models/__tests__/Flow.test.js");
  } catch (err) {
    testResults.push({
      name: "Flow",
      type: 'failed',
      exec: true,
      reason: getTestFailure(err)
    });
  }

  try {
    testSuites.suites["ImageData"] = __webpack_require__(/*! ../../../../../../Source/dom/models/__tests__/ImageData.test.js */ "./Source/dom/models/__tests__/ImageData.test.js");
  } catch (err) {
    testResults.push({
      name: "ImageData",
      type: 'failed',
      exec: true,
      reason: getTestFailure(err)
    });
  }

  try {
    testSuites.suites["ImportableObject"] = __webpack_require__(/*! ../../../../../../Source/dom/models/__tests__/ImportableObject.test.js */ "./Source/dom/models/__tests__/ImportableObject.test.js");
  } catch (err) {
    testResults.push({
      name: "ImportableObject",
      type: 'failed',
      exec: true,
      reason: getTestFailure(err)
    });
  }

  try {
    testSuites.suites["Library"] = __webpack_require__(/*! ../../../../../../Source/dom/models/__tests__/Library.test.js */ "./Source/dom/models/__tests__/Library.test.js");
  } catch (err) {
    testResults.push({
      name: "Library",
      type: 'failed',
      exec: true,
      reason: getTestFailure(err)
    });
  }

  try {
    testSuites.suites["Override"] = __webpack_require__(/*! ../../../../../../Source/dom/models/__tests__/Override.test.js */ "./Source/dom/models/__tests__/Override.test.js");
  } catch (err) {
    testResults.push({
      name: "Override",
      type: 'failed',
      exec: true,
      reason: getTestFailure(err)
    });
  }

  try {
    testSuites.suites["Point"] = __webpack_require__(/*! ../../../../../../Source/dom/models/__tests__/Point.test.js */ "./Source/dom/models/__tests__/Point.test.js");
  } catch (err) {
    testResults.push({
      name: "Point",
      type: 'failed',
      exec: true,
      reason: getTestFailure(err)
    });
  }

  try {
    testSuites.suites["Rectangle"] = __webpack_require__(/*! ../../../../../../Source/dom/models/__tests__/Rectangle.test.js */ "./Source/dom/models/__tests__/Rectangle.test.js");
  } catch (err) {
    testResults.push({
      name: "Rectangle",
      type: 'failed',
      exec: true,
      reason: getTestFailure(err)
    });
  }

  try {
    testSuites.suites["Selection"] = __webpack_require__(/*! ../../../../../../Source/dom/models/__tests__/Selection.test.js */ "./Source/dom/models/__tests__/Selection.test.js");
  } catch (err) {
    testResults.push({
      name: "Selection",
      type: 'failed',
      exec: true,
      reason: getTestFailure(err)
    });
  }

  try {
    testSuites.suites["SharedStyle"] = __webpack_require__(/*! ../../../../../../Source/dom/models/__tests__/SharedStyle.test.js */ "./Source/dom/models/__tests__/SharedStyle.test.js");
  } catch (err) {
    testResults.push({
      name: "SharedStyle",
      type: 'failed',
      exec: true,
      reason: getTestFailure(err)
    });
  }

  try {
    testSuites.suites["Blur"] = __webpack_require__(/*! ../../../../../../Source/dom/style/__tests__/Blur.test.js */ "./Source/dom/style/__tests__/Blur.test.js");
  } catch (err) {
    testResults.push({
      name: "Blur",
      type: 'failed',
      exec: true,
      reason: getTestFailure(err)
    });
  }

  try {
    testSuites.suites["Border"] = __webpack_require__(/*! ../../../../../../Source/dom/style/__tests__/Border.test.js */ "./Source/dom/style/__tests__/Border.test.js");
  } catch (err) {
    testResults.push({
      name: "Border",
      type: 'failed',
      exec: true,
      reason: getTestFailure(err)
    });
  }

  try {
    testSuites.suites["BorderOptions"] = __webpack_require__(/*! ../../../../../../Source/dom/style/__tests__/BorderOptions.test.js */ "./Source/dom/style/__tests__/BorderOptions.test.js");
  } catch (err) {
    testResults.push({
      name: "BorderOptions",
      type: 'failed',
      exec: true,
      reason: getTestFailure(err)
    });
  }

  try {
    testSuites.suites["Color"] = __webpack_require__(/*! ../../../../../../Source/dom/style/__tests__/Color.test.js */ "./Source/dom/style/__tests__/Color.test.js");
  } catch (err) {
    testResults.push({
      name: "Color",
      type: 'failed',
      exec: true,
      reason: getTestFailure(err)
    });
  }

  try {
    testSuites.suites["Fill"] = __webpack_require__(/*! ../../../../../../Source/dom/style/__tests__/Fill.test.js */ "./Source/dom/style/__tests__/Fill.test.js");
  } catch (err) {
    testResults.push({
      name: "Fill",
      type: 'failed',
      exec: true,
      reason: getTestFailure(err)
    });
  }

  try {
    testSuites.suites["Gradient"] = __webpack_require__(/*! ../../../../../../Source/dom/style/__tests__/Gradient.test.js */ "./Source/dom/style/__tests__/Gradient.test.js");
  } catch (err) {
    testResults.push({
      name: "Gradient",
      type: 'failed',
      exec: true,
      reason: getTestFailure(err)
    });
  }

  try {
    testSuites.suites["GradientStop"] = __webpack_require__(/*! ../../../../../../Source/dom/style/__tests__/GradientStop.test.js */ "./Source/dom/style/__tests__/GradientStop.test.js");
  } catch (err) {
    testResults.push({
      name: "GradientStop",
      type: 'failed',
      exec: true,
      reason: getTestFailure(err)
    });
  }

  try {
    testSuites.suites["Shadow"] = __webpack_require__(/*! ../../../../../../Source/dom/style/__tests__/Shadow.test.js */ "./Source/dom/style/__tests__/Shadow.test.js");
  } catch (err) {
    testResults.push({
      name: "Shadow",
      type: 'failed',
      exec: true,
      reason: getTestFailure(err)
    });
  }

  try {
    testSuites.suites["Style"] = __webpack_require__(/*! ../../../../../../Source/dom/style/__tests__/Style.test.js */ "./Source/dom/style/__tests__/Style.test.js");
  } catch (err) {
    testResults.push({
      name: "Style",
      type: 'failed',
      exec: true,
      reason: getTestFailure(err)
    });
  }

  try {
    testSuites.suites["Text"] = __webpack_require__(/*! ../../../../../../Source/dom/style/__tests__/Text.test.js */ "./Source/dom/style/__tests__/Text.test.js");
  } catch (err) {
    testResults.push({
      name: "Text",
      type: 'failed',
      exec: true,
      reason: getTestFailure(err)
    });
  }
  /**
   * Run a collection of tests.
   *
   * The method takes a dictionary describing the tests to run.
   * The dictionary can contain two keys:
   * - suites: this is a dictionary of sub-collections, each of which is recursively run by calling this method again.
   * - tests: this is a dictionary of test functions, each of which is executed.
   *
   * The test functions are passed this tester object when they are executed, and should use the assertion methods on it
   * to perform tests.
   *
   * @param {dictionary} specification A dictionary describing the tests to run. See discussion.
   * @param {string} suiteName The name of the suite, if we're running a sub-collection. This will be null for the top level tests.
   * @return {dictionary} Returns a dictionary indicating how many tests ran, and a list of the passed, failed, and crashed tests.
   */


  function runUnitTests() {
    var specification = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var suiteName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var _specification$suites = specification.suites,
        suites = _specification$suites === void 0 ? {} : _specification$suites,
        _specification$logs = specification.logs,
        logs = _specification$logs === void 0 ? [] : _specification$logs,
        _specification$tests = specification.tests,
        tests = _specification$tests === void 0 ? {} : _specification$tests,
        _specification$afterA = specification.afterAlls,
        afterAlls = _specification$afterA === void 0 ? [] : _specification$afterA,
        _specification$before = specification.beforeAlls,
        beforeAlls = _specification$before === void 0 ? [] : _specification$before,
        _specification$afterE = specification.afterEachs,
        afterEachs = _specification$afterE === void 0 ? [] : _specification$afterE,
        _specification$before2 = specification.beforeEachs,
        beforeEachs = _specification$before2 === void 0 ? [] : _specification$before2,
        skipped = specification.skipped,
        only = specification.only,
        _specification$ancest = specification.ancestorSuites,
        ancestorSuites = _specification$ancest === void 0 ? [] : _specification$ancest; // if there are suites with `only`

    var suiteContainsOnly = Object.keys(suites).some(function (name) {
      return suites[name].only;
    });
    return SerialPromise(Object.keys(suites).map(function (suite) {
      if (suiteName) {
        suites[suite].ancestorSuites = ancestorSuites.concat([suiteName]);
      }

      if (logs && !suites[suite].logs) {
        suites[suite].logs = logs;
      }

      if (skipped) {
        suites[suite].skipped = true;
        return function () {
          return Promise.resolve();
        };
      }

      if (suiteContainsOnly && !suites[suite].only) {
        return function () {
          return Promise.resolve();
        };
      }

      if (only) {
        suites[suite].only = true;
      }

      return function () {
        return runUnitTests(suites[suite], suite);
      };
    })).then(function () {
      // if there are tests with `only`
      var containsOnly = Object.keys(tests).some(function (name) {
        return tests[name].only;
      });
      var alreadyPutLogs = false;
      return SerialPromise([function () {
        return Promise.all(beforeAlls.map(function (x) {
          return x();
        }));
      }].concat(Object.keys(tests).map(function (name) {
        var test = tests[name];

        if (containsOnly && !test.only) {
          // there are tests with `only` and it's not this one so skip
          return function () {
            return Promise.resolve();
          };
        }

        if (only) {
          test.only = true;
        }

        if (suiteName) {
          test.ancestorSuites = ancestorSuites.concat([suiteName]);
        }

        if (skipped || test.skipped) {
          // only push the logs once per suite
          var logsToStore = !alreadyPutLogs ? logs : [];
          alreadyPutLogs = true;
          testResults.push({
            name: name,
            type: 'skipped',
            only: test.only,
            ancestorSuites: test.ancestorSuites,
            logs: logsToStore
          });
          return function () {
            return Promise.resolve();
          };
        }

        return function () {
          return Promise.all(beforeEachs.map(function (x) {
            return x();
          })).then(function () {
            expect.resetAssertionsLocalState();
            return test(context, sketch.fromNative(MSDocumentData.new()));
          }).then(function () {
            var assertionError = expect.extractExpectedAssertionsErrors();

            if (assertionError) {
              throw assertionError.error;
            }
          }).then(function () {
            var logsToStore = !alreadyPutLogs ? logs : [];
            alreadyPutLogs = true;
            testResults.push({
              name: name,
              type: 'passed',
              only: test.only,
              ancestorSuites: test.ancestorSuites,
              logs: logsToStore
            });
          }).catch(function (err) {
            var logsToStore = !alreadyPutLogs ? logs : [];
            alreadyPutLogs = true;
            testResults.push({
              name: name,
              only: test.only,
              type: 'failed',
              reason: getTestFailure(err),
              ancestorSuites: test.ancestorSuites,
              logs: logsToStore
            });
          }).then(function () {
            return Promise.all(afterEachs.map(function (x) {
              return x();
            }));
          });
        };
      })).concat(function () {
        return Promise.all(afterAlls.map(function (x) {
          return x();
        }));
      })).catch(function (err) {
        var logsToStore = !alreadyPutLogs ? logs : [];
        alreadyPutLogs = true;
        testResults.push({
          name: suiteName,
          type: 'failed',
          reason: getTestFailure(err),
          ancestorSuites: ancestorSuites,
          logs: logsToStore
        });
      });
    }).then(function () {
      return testResults;
    });
  }

  runUnitTests(testSuites).then(function (results) {
    if (results.some(function (t) {
      return t.only;
    })) {
      results = results.filter(function (t) {
        return t.only;
      }); // eslint-disable-line
    }

    results.forEach(function (result) {
      if (result && result.logs && result.logs.length) {
        // eslint-disable-next-line no-not-accumulator-reassign/no-not-accumulator-reassign
        result.logs = result.logs.map(function (l) {
          return util.inspect(l);
        });
      }
    });
    log("".concat(results.length, " tests ran."));
    log("".concat(results.filter(function (t) {
      return t.type === 'passed';
    }).length, " tests succeeded."));
    log("".concat(results.filter(function (t) {
      return t.type === 'failed';
    }).length, " tests failed."));

    try {
      log("json results: ".concat(JSON.stringify(results)));
    } catch (err) {
      results.forEach(function (result) {
        try {
          JSON.stringify(result);
        } catch (err2) {
          log("failed to stringify the result \"".concat(result.name, "\": ").concat(err2));
        }
      });
    } // the tests could have finished but didn't properly clean up after them
    // so we need to do it by cleaning the fibers


    coscript.cleanupFibers();
  }).catch(function (err) {
    // the tests could have finished but didn't properly clean up after them
    // so we need to do it by cleaning the fibers
    coscript.cleanupFibers();
    throw err;
  });
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/promise-polyfill/lib/index.js */ "./node_modules/promise-polyfill/lib/index.js"), __webpack_require__(/*! ./node_modules/@skpm/test-runner/expect/index.js */ "./node_modules/@skpm/test-runner/expect/index.js")))

/***/ }),

/***/ "./node_modules/@skpm/timers/immediate.js":
/*!************************************************!*\
  !*** ./node_modules/@skpm/timers/immediate.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* globals coscript, sketch */
var timeout = __webpack_require__(/*! ./timeout */ "./node_modules/@skpm/timers/timeout.js")

function setImmediate(func, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10) {
  return timeout.setTimeout(func, 0, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10)
}

function clearImmediate(id) {
  return timeout.clearTimeout(id)
}

module.exports = {
  setImmediate: setImmediate,
  clearImmediate: clearImmediate
}


/***/ }),

/***/ "./node_modules/@skpm/timers/test-if-fiber.js":
/*!****************************************************!*\
  !*** ./node_modules/@skpm/timers/test-if-fiber.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () {
  return typeof coscript !== 'undefined' && coscript.createFiber
}


/***/ }),

/***/ "./node_modules/@skpm/timers/timeout.js":
/*!**********************************************!*\
  !*** ./node_modules/@skpm/timers/timeout.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* globals coscript, sketch */
var fiberAvailable = __webpack_require__(/*! ./test-if-fiber */ "./node_modules/@skpm/timers/test-if-fiber.js")

var setTimeout
var clearTimeout

var fibers = []

if (fiberAvailable()) {
  var fibers = []

  setTimeout = function (func, delay, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10) {
    // fibers takes care of keeping coscript around
    var id = fibers.length
    fibers.push(coscript.scheduleWithInterval_jsFunction(
      (delay || 0) / 1000,
      function () {
        func(param1, param2, param3, param4, param5, param6, param7, param8, param9, param10)
      }
    ))
    return id
  }

  clearTimeout = function (id) {
    var timeout = fibers[id]
    if (timeout) {
      timeout.cancel() // fibers takes care of keeping coscript around
      fibers[id] = undefined // garbage collect the fiber
    }
  }
} else {
  setTimeout = function (func, delay, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10) {
    coscript.shouldKeepAround = true
    var id = fibers.length
    fibers.push(true)
    coscript.scheduleWithInterval_jsFunction(
      (delay || 0) / 1000,
      function () {
        if (fibers[id]) { // if not cleared
          func(param1, param2, param3, param4, param5, param6, param7, param8, param9, param10)
        }
        clearTimeout(id)
        if (fibers.every(function (_id) { return !_id })) { // if everything is cleared
          coscript.shouldKeepAround = false
        }
      }
    )
    return id
  }

  clearTimeout = function (id) {
    fibers[id] = false
  }
}

module.exports = {
  setTimeout: setTimeout,
  clearTimeout: clearTimeout
}


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setTimeout, clearTimeout) {// shim for using process in browser
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@skpm/timers/timeout.js */ "./node_modules/@skpm/timers/timeout.js")["setTimeout"], __webpack_require__(/*! ./node_modules/@skpm/timers/timeout.js */ "./node_modules/@skpm/timers/timeout.js")["clearTimeout"]))

/***/ }),

/***/ "./node_modules/promise-polyfill/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/promise-polyfill/lib/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setTimeout, setImmediate) {

/**
 * @this {Promise}
 */
function finallyConstructor(callback) {
  var constructor = this.constructor;
  return this.then(
    function(value) {
      return constructor.resolve(callback()).then(function() {
        return value;
      });
    },
    function(reason) {
      return constructor.resolve(callback()).then(function() {
        return constructor.reject(reason);
      });
    }
  );
}

// Store setTimeout reference so promise-polyfill will be unaffected by
// other code modifying setTimeout (like sinon.useFakeTimers())
var setTimeoutFunc = setTimeout;

function noop() {}

// Polyfill for Function.prototype.bind
function bind(fn, thisArg) {
  return function() {
    fn.apply(thisArg, arguments);
  };
}

/**
 * @constructor
 * @param {Function} fn
 */
function Promise(fn) {
  if (!(this instanceof Promise))
    throw new TypeError('Promises must be constructed via new');
  if (typeof fn !== 'function') throw new TypeError('not a function');
  /** @type {!number} */
  this._state = 0;
  /** @type {!boolean} */
  this._handled = false;
  /** @type {Promise|undefined} */
  this._value = undefined;
  /** @type {!Array<!Function>} */
  this._deferreds = [];

  doResolve(fn, this);
}

function handle(self, deferred) {
  while (self._state === 3) {
    self = self._value;
  }
  if (self._state === 0) {
    self._deferreds.push(deferred);
    return;
  }
  self._handled = true;
  Promise._immediateFn(function() {
    var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
    if (cb === null) {
      (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
      return;
    }
    var ret;
    try {
      ret = cb(self._value);
    } catch (e) {
      reject(deferred.promise, e);
      return;
    }
    resolve(deferred.promise, ret);
  });
}

function resolve(self, newValue) {
  try {
    // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
    if (newValue === self)
      throw new TypeError('A promise cannot be resolved with itself.');
    if (
      newValue &&
      (typeof newValue === 'object' || typeof newValue === 'function')
    ) {
      var then = newValue.then;
      if (newValue instanceof Promise) {
        self._state = 3;
        self._value = newValue;
        finale(self);
        return;
      } else if (typeof then === 'function') {
        doResolve(bind(then, newValue), self);
        return;
      }
    }
    self._state = 1;
    self._value = newValue;
    finale(self);
  } catch (e) {
    reject(self, e);
  }
}

function reject(self, newValue) {
  self._state = 2;
  self._value = newValue;
  finale(self);
}

function finale(self) {
  if (self._state === 2 && self._deferreds.length === 0) {
    Promise._immediateFn(function() {
      if (!self._handled) {
        Promise._unhandledRejectionFn(self._value);
      }
    });
  }

  for (var i = 0, len = self._deferreds.length; i < len; i++) {
    handle(self, self._deferreds[i]);
  }
  self._deferreds = null;
}

/**
 * @constructor
 */
function Handler(onFulfilled, onRejected, promise) {
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */
function doResolve(fn, self) {
  var done = false;
  try {
    fn(
      function(value) {
        if (done) return;
        done = true;
        resolve(self, value);
      },
      function(reason) {
        if (done) return;
        done = true;
        reject(self, reason);
      }
    );
  } catch (ex) {
    if (done) return;
    done = true;
    reject(self, ex);
  }
}

Promise.prototype['catch'] = function(onRejected) {
  return this.then(null, onRejected);
};

Promise.prototype.then = function(onFulfilled, onRejected) {
  // @ts-ignore
  var prom = new this.constructor(noop);

  handle(this, new Handler(onFulfilled, onRejected, prom));
  return prom;
};

Promise.prototype['finally'] = finallyConstructor;

Promise.all = function(arr) {
  return new Promise(function(resolve, reject) {
    if (!arr || typeof arr.length === 'undefined')
      throw new TypeError('Promise.all accepts an array');
    var args = Array.prototype.slice.call(arr);
    if (args.length === 0) return resolve([]);
    var remaining = args.length;

    function res(i, val) {
      try {
        if (val && (typeof val === 'object' || typeof val === 'function')) {
          var then = val.then;
          if (typeof then === 'function') {
            then.call(
              val,
              function(val) {
                res(i, val);
              },
              reject
            );
            return;
          }
        }
        args[i] = val;
        if (--remaining === 0) {
          resolve(args);
        }
      } catch (ex) {
        reject(ex);
      }
    }

    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

Promise.resolve = function(value) {
  if (value && typeof value === 'object' && value.constructor === Promise) {
    return value;
  }

  return new Promise(function(resolve) {
    resolve(value);
  });
};

Promise.reject = function(value) {
  return new Promise(function(resolve, reject) {
    reject(value);
  });
};

Promise.race = function(values) {
  return new Promise(function(resolve, reject) {
    for (var i = 0, len = values.length; i < len; i++) {
      values[i].then(resolve, reject);
    }
  });
};

// Use polyfill for setImmediate for performance gains
Promise._immediateFn =
  (typeof setImmediate === 'function' &&
    function(fn) {
      setImmediate(fn);
    }) ||
  function(fn) {
    setTimeoutFunc(fn, 0);
  };

Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
  if (typeof console !== 'undefined' && console) {
    console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
  }
};

module.exports = Promise;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@skpm/timers/timeout.js */ "./node_modules/@skpm/timers/timeout.js")["setTimeout"], __webpack_require__(/*! ./node_modules/@skpm/timers/immediate.js */ "./node_modules/@skpm/timers/immediate.js")["setImmediate"]))

/***/ }),

/***/ "./node_modules/sketch-utils/node_modules/source-map/lib/array-set.js":
/*!****************************************************************************!*\
  !*** ./node_modules/sketch-utils/node_modules/source-map/lib/array-set.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var util = __webpack_require__(/*! ./util */ "./node_modules/sketch-utils/node_modules/source-map/lib/util.js");
var has = Object.prototype.hasOwnProperty;
var hasNativeMap = typeof Map !== "undefined";

/**
 * A data structure which is a combination of an array and a set. Adding a new
 * member is O(1), testing for membership is O(1), and finding the index of an
 * element is O(1). Removing elements from the set is not supported. Only
 * strings are supported for membership.
 */
function ArraySet() {
  this._array = [];
  this._set = hasNativeMap ? new Map() : Object.create(null);
}

/**
 * Static method for creating ArraySet instances from an existing array.
 */
ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
  var set = new ArraySet();
  for (var i = 0, len = aArray.length; i < len; i++) {
    set.add(aArray[i], aAllowDuplicates);
  }
  return set;
};

/**
 * Return how many unique items are in this ArraySet. If duplicates have been
 * added, than those do not count towards the size.
 *
 * @returns Number
 */
ArraySet.prototype.size = function ArraySet_size() {
  return hasNativeMap ? this._set.size : Object.getOwnPropertyNames(this._set).length;
};

/**
 * Add the given string to this set.
 *
 * @param String aStr
 */
ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
  var sStr = hasNativeMap ? aStr : util.toSetString(aStr);
  var isDuplicate = hasNativeMap ? this.has(aStr) : has.call(this._set, sStr);
  var idx = this._array.length;
  if (!isDuplicate || aAllowDuplicates) {
    this._array.push(aStr);
  }
  if (!isDuplicate) {
    if (hasNativeMap) {
      this._set.set(aStr, idx);
    } else {
      this._set[sStr] = idx;
    }
  }
};

/**
 * Is the given string a member of this set?
 *
 * @param String aStr
 */
ArraySet.prototype.has = function ArraySet_has(aStr) {
  if (hasNativeMap) {
    return this._set.has(aStr);
  } else {
    var sStr = util.toSetString(aStr);
    return has.call(this._set, sStr);
  }
};

/**
 * What is the index of the given string in the array?
 *
 * @param String aStr
 */
ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
  if (hasNativeMap) {
    var idx = this._set.get(aStr);
    if (idx >= 0) {
        return idx;
    }
  } else {
    var sStr = util.toSetString(aStr);
    if (has.call(this._set, sStr)) {
      return this._set[sStr];
    }
  }

  throw new Error('"' + aStr + '" is not in the set.');
};

/**
 * What is the element at the given index?
 *
 * @param Number aIdx
 */
ArraySet.prototype.at = function ArraySet_at(aIdx) {
  if (aIdx >= 0 && aIdx < this._array.length) {
    return this._array[aIdx];
  }
  throw new Error('No element indexed by ' + aIdx);
};

/**
 * Returns the array representation of this set (which has the proper indices
 * indicated by indexOf). Note that this is a copy of the internal array used
 * for storing the members so that no one can mess with internal state.
 */
ArraySet.prototype.toArray = function ArraySet_toArray() {
  return this._array.slice();
};

exports.ArraySet = ArraySet;


/***/ }),

/***/ "./node_modules/sketch-utils/node_modules/source-map/lib/base64-vlq.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/sketch-utils/node_modules/source-map/lib/base64-vlq.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 *
 * Based on the Base 64 VLQ implementation in Closure Compiler:
 * https://code.google.com/p/closure-compiler/source/browse/trunk/src/com/google/debugging/sourcemap/Base64VLQ.java
 *
 * Copyright 2011 The Closure Compiler Authors. All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *  * Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above
 *    copyright notice, this list of conditions and the following
 *    disclaimer in the documentation and/or other materials provided
 *    with the distribution.
 *  * Neither the name of Google Inc. nor the names of its
 *    contributors may be used to endorse or promote products derived
 *    from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var base64 = __webpack_require__(/*! ./base64 */ "./node_modules/sketch-utils/node_modules/source-map/lib/base64.js");

// A single base 64 digit can contain 6 bits of data. For the base 64 variable
// length quantities we use in the source map spec, the first bit is the sign,
// the next four bits are the actual value, and the 6th bit is the
// continuation bit. The continuation bit tells us whether there are more
// digits in this value following this digit.
//
//   Continuation
//   |    Sign
//   |    |
//   V    V
//   101011

var VLQ_BASE_SHIFT = 5;

// binary: 100000
var VLQ_BASE = 1 << VLQ_BASE_SHIFT;

// binary: 011111
var VLQ_BASE_MASK = VLQ_BASE - 1;

// binary: 100000
var VLQ_CONTINUATION_BIT = VLQ_BASE;

/**
 * Converts from a two-complement value to a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   1 becomes 2 (10 binary), -1 becomes 3 (11 binary)
 *   2 becomes 4 (100 binary), -2 becomes 5 (101 binary)
 */
function toVLQSigned(aValue) {
  return aValue < 0
    ? ((-aValue) << 1) + 1
    : (aValue << 1) + 0;
}

/**
 * Converts to a two-complement value from a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   2 (10 binary) becomes 1, 3 (11 binary) becomes -1
 *   4 (100 binary) becomes 2, 5 (101 binary) becomes -2
 */
function fromVLQSigned(aValue) {
  var isNegative = (aValue & 1) === 1;
  var shifted = aValue >> 1;
  return isNegative
    ? -shifted
    : shifted;
}

/**
 * Returns the base 64 VLQ encoded value.
 */
exports.encode = function base64VLQ_encode(aValue) {
  var encoded = "";
  var digit;

  var vlq = toVLQSigned(aValue);

  do {
    digit = vlq & VLQ_BASE_MASK;
    vlq >>>= VLQ_BASE_SHIFT;
    if (vlq > 0) {
      // There are still more digits in this value, so we must make sure the
      // continuation bit is marked.
      digit |= VLQ_CONTINUATION_BIT;
    }
    encoded += base64.encode(digit);
  } while (vlq > 0);

  return encoded;
};

/**
 * Decodes the next base 64 VLQ value from the given string and returns the
 * value and the rest of the string via the out parameter.
 */
exports.decode = function base64VLQ_decode(aStr, aIndex, aOutParam) {
  var strLen = aStr.length;
  var result = 0;
  var shift = 0;
  var continuation, digit;

  do {
    if (aIndex >= strLen) {
      throw new Error("Expected more digits in base 64 VLQ value.");
    }

    digit = base64.decode(aStr.charCodeAt(aIndex++));
    if (digit === -1) {
      throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
    }

    continuation = !!(digit & VLQ_CONTINUATION_BIT);
    digit &= VLQ_BASE_MASK;
    result = result + (digit << shift);
    shift += VLQ_BASE_SHIFT;
  } while (continuation);

  aOutParam.value = fromVLQSigned(result);
  aOutParam.rest = aIndex;
};


/***/ }),

/***/ "./node_modules/sketch-utils/node_modules/source-map/lib/base64.js":
/*!*************************************************************************!*\
  !*** ./node_modules/sketch-utils/node_modules/source-map/lib/base64.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var intToCharMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');

/**
 * Encode an integer in the range of 0 to 63 to a single base 64 digit.
 */
exports.encode = function (number) {
  if (0 <= number && number < intToCharMap.length) {
    return intToCharMap[number];
  }
  throw new TypeError("Must be between 0 and 63: " + number);
};

/**
 * Decode a single base 64 character code digit to an integer. Returns -1 on
 * failure.
 */
exports.decode = function (charCode) {
  var bigA = 65;     // 'A'
  var bigZ = 90;     // 'Z'

  var littleA = 97;  // 'a'
  var littleZ = 122; // 'z'

  var zero = 48;     // '0'
  var nine = 57;     // '9'

  var plus = 43;     // '+'
  var slash = 47;    // '/'

  var littleOffset = 26;
  var numberOffset = 52;

  // 0 - 25: ABCDEFGHIJKLMNOPQRSTUVWXYZ
  if (bigA <= charCode && charCode <= bigZ) {
    return (charCode - bigA);
  }

  // 26 - 51: abcdefghijklmnopqrstuvwxyz
  if (littleA <= charCode && charCode <= littleZ) {
    return (charCode - littleA + littleOffset);
  }

  // 52 - 61: 0123456789
  if (zero <= charCode && charCode <= nine) {
    return (charCode - zero + numberOffset);
  }

  // 62: +
  if (charCode == plus) {
    return 62;
  }

  // 63: /
  if (charCode == slash) {
    return 63;
  }

  // Invalid base64 digit.
  return -1;
};


/***/ }),

/***/ "./node_modules/sketch-utils/node_modules/source-map/lib/binary-search.js":
/*!********************************************************************************!*\
  !*** ./node_modules/sketch-utils/node_modules/source-map/lib/binary-search.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

exports.GREATEST_LOWER_BOUND = 1;
exports.LEAST_UPPER_BOUND = 2;

/**
 * Recursive implementation of binary search.
 *
 * @param aLow Indices here and lower do not contain the needle.
 * @param aHigh Indices here and higher do not contain the needle.
 * @param aNeedle The element being searched for.
 * @param aHaystack The non-empty array being searched.
 * @param aCompare Function which takes two elements and returns -1, 0, or 1.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 */
function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
  // This function terminates when one of the following is true:
  //
  //   1. We find the exact element we are looking for.
  //
  //   2. We did not find the exact element, but we can return the index of
  //      the next-closest element.
  //
  //   3. We did not find the exact element, and there is no next-closest
  //      element than the one we are searching for, so we return -1.
  var mid = Math.floor((aHigh - aLow) / 2) + aLow;
  var cmp = aCompare(aNeedle, aHaystack[mid], true);
  if (cmp === 0) {
    // Found the element we are looking for.
    return mid;
  }
  else if (cmp > 0) {
    // Our needle is greater than aHaystack[mid].
    if (aHigh - mid > 1) {
      // The element is in the upper half.
      return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
    }

    // The exact needle element was not found in this haystack. Determine if
    // we are in termination case (3) or (2) and return the appropriate thing.
    if (aBias == exports.LEAST_UPPER_BOUND) {
      return aHigh < aHaystack.length ? aHigh : -1;
    } else {
      return mid;
    }
  }
  else {
    // Our needle is less than aHaystack[mid].
    if (mid - aLow > 1) {
      // The element is in the lower half.
      return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
    }

    // we are in termination case (3) or (2) and return the appropriate thing.
    if (aBias == exports.LEAST_UPPER_BOUND) {
      return mid;
    } else {
      return aLow < 0 ? -1 : aLow;
    }
  }
}

/**
 * This is an implementation of binary search which will always try and return
 * the index of the closest element if there is no exact hit. This is because
 * mappings between original and generated line/col pairs are single points,
 * and there is an implicit region between each of them, so a miss just means
 * that you aren't on the very start of a region.
 *
 * @param aNeedle The element you are looking for.
 * @param aHaystack The array that is being searched.
 * @param aCompare A function which takes the needle and an element in the
 *     array and returns -1, 0, or 1 depending on whether the needle is less
 *     than, equal to, or greater than the element, respectively.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'binarySearch.GREATEST_LOWER_BOUND'.
 */
exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
  if (aHaystack.length === 0) {
    return -1;
  }

  var index = recursiveSearch(-1, aHaystack.length, aNeedle, aHaystack,
                              aCompare, aBias || exports.GREATEST_LOWER_BOUND);
  if (index < 0) {
    return -1;
  }

  // We have found either the exact element, or the next-closest element than
  // the one we are searching for. However, there may be more than one such
  // element. Make sure we always return the smallest of these.
  while (index - 1 >= 0) {
    if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) {
      break;
    }
    --index;
  }

  return index;
};


/***/ }),

/***/ "./node_modules/sketch-utils/node_modules/source-map/lib/quick-sort.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/sketch-utils/node_modules/source-map/lib/quick-sort.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

// It turns out that some (most?) JavaScript engines don't self-host
// `Array.prototype.sort`. This makes sense because C++ will likely remain
// faster than JS when doing raw CPU-intensive sorting. However, when using a
// custom comparator function, calling back and forth between the VM's C++ and
// JIT'd JS is rather slow *and* loses JIT type information, resulting in
// worse generated code for the comparator function than would be optimal. In
// fact, when sorting with a comparator, these costs outweigh the benefits of
// sorting in C++. By using our own JS-implemented Quick Sort (below), we get
// a ~3500ms mean speed-up in `bench/bench.html`.

/**
 * Swap the elements indexed by `x` and `y` in the array `ary`.
 *
 * @param {Array} ary
 *        The array.
 * @param {Number} x
 *        The index of the first item.
 * @param {Number} y
 *        The index of the second item.
 */
function swap(ary, x, y) {
  var temp = ary[x];
  ary[x] = ary[y];
  ary[y] = temp;
}

/**
 * Returns a random integer within the range `low .. high` inclusive.
 *
 * @param {Number} low
 *        The lower bound on the range.
 * @param {Number} high
 *        The upper bound on the range.
 */
function randomIntInRange(low, high) {
  return Math.round(low + (Math.random() * (high - low)));
}

/**
 * The Quick Sort algorithm.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 * @param {Number} p
 *        Start index of the array
 * @param {Number} r
 *        End index of the array
 */
function doQuickSort(ary, comparator, p, r) {
  // If our lower bound is less than our upper bound, we (1) partition the
  // array into two pieces and (2) recurse on each half. If it is not, this is
  // the empty array and our base case.

  if (p < r) {
    // (1) Partitioning.
    //
    // The partitioning chooses a pivot between `p` and `r` and moves all
    // elements that are less than or equal to the pivot to the before it, and
    // all the elements that are greater than it after it. The effect is that
    // once partition is done, the pivot is in the exact place it will be when
    // the array is put in sorted order, and it will not need to be moved
    // again. This runs in O(n) time.

    // Always choose a random pivot so that an input array which is reverse
    // sorted does not cause O(n^2) running time.
    var pivotIndex = randomIntInRange(p, r);
    var i = p - 1;

    swap(ary, pivotIndex, r);
    var pivot = ary[r];

    // Immediately after `j` is incremented in this loop, the following hold
    // true:
    //
    //   * Every element in `ary[p .. i]` is less than or equal to the pivot.
    //
    //   * Every element in `ary[i+1 .. j-1]` is greater than the pivot.
    for (var j = p; j < r; j++) {
      if (comparator(ary[j], pivot) <= 0) {
        i += 1;
        swap(ary, i, j);
      }
    }

    swap(ary, i + 1, j);
    var q = i + 1;

    // (2) Recurse on each half.

    doQuickSort(ary, comparator, p, q - 1);
    doQuickSort(ary, comparator, q + 1, r);
  }
}

/**
 * Sort the given array in-place with the given comparator function.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 */
exports.quickSort = function (ary, comparator) {
  doQuickSort(ary, comparator, 0, ary.length - 1);
};


/***/ }),

/***/ "./node_modules/sketch-utils/node_modules/source-map/lib/source-map-consumer.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/sketch-utils/node_modules/source-map/lib/source-map-consumer.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var util = __webpack_require__(/*! ./util */ "./node_modules/sketch-utils/node_modules/source-map/lib/util.js");
var binarySearch = __webpack_require__(/*! ./binary-search */ "./node_modules/sketch-utils/node_modules/source-map/lib/binary-search.js");
var ArraySet = __webpack_require__(/*! ./array-set */ "./node_modules/sketch-utils/node_modules/source-map/lib/array-set.js").ArraySet;
var base64VLQ = __webpack_require__(/*! ./base64-vlq */ "./node_modules/sketch-utils/node_modules/source-map/lib/base64-vlq.js");
var quickSort = __webpack_require__(/*! ./quick-sort */ "./node_modules/sketch-utils/node_modules/source-map/lib/quick-sort.js").quickSort;

function SourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  return sourceMap.sections != null
    ? new IndexedSourceMapConsumer(sourceMap, aSourceMapURL)
    : new BasicSourceMapConsumer(sourceMap, aSourceMapURL);
}

SourceMapConsumer.fromSourceMap = function(aSourceMap, aSourceMapURL) {
  return BasicSourceMapConsumer.fromSourceMap(aSourceMap, aSourceMapURL);
}

/**
 * The version of the source mapping spec that we are consuming.
 */
SourceMapConsumer.prototype._version = 3;

// `__generatedMappings` and `__originalMappings` are arrays that hold the
// parsed mapping coordinates from the source map's "mappings" attribute. They
// are lazily instantiated, accessed via the `_generatedMappings` and
// `_originalMappings` getters respectively, and we only parse the mappings
// and create these arrays once queried for a source location. We jump through
// these hoops because there can be many thousands of mappings, and parsing
// them is expensive, so we only want to do it if we must.
//
// Each object in the arrays is of the form:
//
//     {
//       generatedLine: The line number in the generated code,
//       generatedColumn: The column number in the generated code,
//       source: The path to the original source file that generated this
//               chunk of code,
//       originalLine: The line number in the original source that
//                     corresponds to this chunk of generated code,
//       originalColumn: The column number in the original source that
//                       corresponds to this chunk of generated code,
//       name: The name of the original symbol which generated this chunk of
//             code.
//     }
//
// All properties except for `generatedLine` and `generatedColumn` can be
// `null`.
//
// `_generatedMappings` is ordered by the generated positions.
//
// `_originalMappings` is ordered by the original positions.

SourceMapConsumer.prototype.__generatedMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_generatedMappings', {
  configurable: true,
  enumerable: true,
  get: function () {
    if (!this.__generatedMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__generatedMappings;
  }
});

SourceMapConsumer.prototype.__originalMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_originalMappings', {
  configurable: true,
  enumerable: true,
  get: function () {
    if (!this.__originalMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__originalMappings;
  }
});

SourceMapConsumer.prototype._charIsMappingSeparator =
  function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
    var c = aStr.charAt(index);
    return c === ";" || c === ",";
  };

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
SourceMapConsumer.prototype._parseMappings =
  function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    throw new Error("Subclasses must implement _parseMappings");
  };

SourceMapConsumer.GENERATED_ORDER = 1;
SourceMapConsumer.ORIGINAL_ORDER = 2;

SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
SourceMapConsumer.LEAST_UPPER_BOUND = 2;

/**
 * Iterate over each mapping between an original source/line/column and a
 * generated line/column in this source map.
 *
 * @param Function aCallback
 *        The function that is called with each mapping.
 * @param Object aContext
 *        Optional. If specified, this object will be the value of `this` every
 *        time that `aCallback` is called.
 * @param aOrder
 *        Either `SourceMapConsumer.GENERATED_ORDER` or
 *        `SourceMapConsumer.ORIGINAL_ORDER`. Specifies whether you want to
 *        iterate over the mappings sorted by the generated file's line/column
 *        order or the original's source/line/column order, respectively. Defaults to
 *        `SourceMapConsumer.GENERATED_ORDER`.
 */
SourceMapConsumer.prototype.eachMapping =
  function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
    var context = aContext || null;
    var order = aOrder || SourceMapConsumer.GENERATED_ORDER;

    var mappings;
    switch (order) {
    case SourceMapConsumer.GENERATED_ORDER:
      mappings = this._generatedMappings;
      break;
    case SourceMapConsumer.ORIGINAL_ORDER:
      mappings = this._originalMappings;
      break;
    default:
      throw new Error("Unknown order of iteration.");
    }

    var sourceRoot = this.sourceRoot;
    mappings.map(function (mapping) {
      var source = mapping.source === null ? null : this._sources.at(mapping.source);
      source = util.computeSourceURL(sourceRoot, source, this._sourceMapURL);
      return {
        source: source,
        generatedLine: mapping.generatedLine,
        generatedColumn: mapping.generatedColumn,
        originalLine: mapping.originalLine,
        originalColumn: mapping.originalColumn,
        name: mapping.name === null ? null : this._names.at(mapping.name)
      };
    }, this).forEach(aCallback, context);
  };

/**
 * Returns all generated line and column information for the original source,
 * line, and column provided. If no column is provided, returns all mappings
 * corresponding to a either the line we are searching for or the next
 * closest line that has any mappings. Otherwise, returns all mappings
 * corresponding to the given line and either the column we are searching for
 * or the next closest column that has any offsets.
 *
 * The only argument is an object with the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number is 1-based.
 *   - column: Optional. the column number in the original source.
 *    The column number is 0-based.
 *
 * and an array of objects is returned, each with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *    line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *    The column number is 0-based.
 */
SourceMapConsumer.prototype.allGeneratedPositionsFor =
  function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
    var line = util.getArg(aArgs, 'line');

    // When there is no exact match, BasicSourceMapConsumer.prototype._findMapping
    // returns the index of the closest mapping less than the needle. By
    // setting needle.originalColumn to 0, we thus find the last mapping for
    // the given line, provided such a mapping exists.
    var needle = {
      source: util.getArg(aArgs, 'source'),
      originalLine: line,
      originalColumn: util.getArg(aArgs, 'column', 0)
    };

    needle.source = this._findSourceIndex(needle.source);
    if (needle.source < 0) {
      return [];
    }

    var mappings = [];

    var index = this._findMapping(needle,
                                  this._originalMappings,
                                  "originalLine",
                                  "originalColumn",
                                  util.compareByOriginalPositions,
                                  binarySearch.LEAST_UPPER_BOUND);
    if (index >= 0) {
      var mapping = this._originalMappings[index];

      if (aArgs.column === undefined) {
        var originalLine = mapping.originalLine;

        // Iterate until either we run out of mappings, or we run into
        // a mapping for a different line than the one we found. Since
        // mappings are sorted, this is guaranteed to find all mappings for
        // the line we found.
        while (mapping && mapping.originalLine === originalLine) {
          mappings.push({
            line: util.getArg(mapping, 'generatedLine', null),
            column: util.getArg(mapping, 'generatedColumn', null),
            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
          });

          mapping = this._originalMappings[++index];
        }
      } else {
        var originalColumn = mapping.originalColumn;

        // Iterate until either we run out of mappings, or we run into
        // a mapping for a different line than the one we were searching for.
        // Since mappings are sorted, this is guaranteed to find all mappings for
        // the line we are searching for.
        while (mapping &&
               mapping.originalLine === line &&
               mapping.originalColumn == originalColumn) {
          mappings.push({
            line: util.getArg(mapping, 'generatedLine', null),
            column: util.getArg(mapping, 'generatedColumn', null),
            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
          });

          mapping = this._originalMappings[++index];
        }
      }
    }

    return mappings;
  };

exports.SourceMapConsumer = SourceMapConsumer;

/**
 * A BasicSourceMapConsumer instance represents a parsed source map which we can
 * query for information about the original file positions by giving it a file
 * position in the generated source.
 *
 * The first parameter is the raw source map (either as a JSON string, or
 * already parsed to an object). According to the spec, source maps have the
 * following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - sources: An array of URLs to the original source files.
 *   - names: An array of identifiers which can be referrenced by individual mappings.
 *   - sourceRoot: Optional. The URL root from which all sources are relative.
 *   - sourcesContent: Optional. An array of contents of the original source files.
 *   - mappings: A string of base64 VLQs which contain the actual mappings.
 *   - file: Optional. The generated file this source map is associated with.
 *
 * Here is an example source map, taken from the source map spec[0]:
 *
 *     {
 *       version : 3,
 *       file: "out.js",
 *       sourceRoot : "",
 *       sources: ["foo.js", "bar.js"],
 *       names: ["src", "maps", "are", "fun"],
 *       mappings: "AA,AB;;ABCDE;"
 *     }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit?pli=1#
 */
function BasicSourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  var version = util.getArg(sourceMap, 'version');
  var sources = util.getArg(sourceMap, 'sources');
  // Sass 3.3 leaves out the 'names' array, so we deviate from the spec (which
  // requires the array) to play nice here.
  var names = util.getArg(sourceMap, 'names', []);
  var sourceRoot = util.getArg(sourceMap, 'sourceRoot', null);
  var sourcesContent = util.getArg(sourceMap, 'sourcesContent', null);
  var mappings = util.getArg(sourceMap, 'mappings');
  var file = util.getArg(sourceMap, 'file', null);

  // Once again, Sass deviates from the spec and supplies the version as a
  // string rather than a number, so we use loose equality checking here.
  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  if (sourceRoot) {
    sourceRoot = util.normalize(sourceRoot);
  }

  sources = sources
    .map(String)
    // Some source maps produce relative source paths like "./foo.js" instead of
    // "foo.js".  Normalize these first so that future comparisons will succeed.
    // See bugzil.la/1090768.
    .map(util.normalize)
    // Always ensure that absolute sources are internally stored relative to
    // the source root, if the source root is absolute. Not doing this would
    // be particularly problematic when the source root is a prefix of the
    // source (valid, but why??). See github issue #199 and bugzil.la/1188982.
    .map(function (source) {
      return sourceRoot && util.isAbsolute(sourceRoot) && util.isAbsolute(source)
        ? util.relative(sourceRoot, source)
        : source;
    });

  // Pass `true` below to allow duplicate names and sources. While source maps
  // are intended to be compressed and deduplicated, the TypeScript compiler
  // sometimes generates source maps with duplicates in them. See Github issue
  // #72 and bugzil.la/889492.
  this._names = ArraySet.fromArray(names.map(String), true);
  this._sources = ArraySet.fromArray(sources, true);

  this._absoluteSources = this._sources.toArray().map(function (s) {
    return util.computeSourceURL(sourceRoot, s, aSourceMapURL);
  });

  this.sourceRoot = sourceRoot;
  this.sourcesContent = sourcesContent;
  this._mappings = mappings;
  this._sourceMapURL = aSourceMapURL;
  this.file = file;
}

BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;

/**
 * Utility function to find the index of a source.  Returns -1 if not
 * found.
 */
BasicSourceMapConsumer.prototype._findSourceIndex = function(aSource) {
  var relativeSource = aSource;
  if (this.sourceRoot != null) {
    relativeSource = util.relative(this.sourceRoot, relativeSource);
  }

  if (this._sources.has(relativeSource)) {
    return this._sources.indexOf(relativeSource);
  }

  // Maybe aSource is an absolute URL as returned by |sources|.  In
  // this case we can't simply undo the transform.
  var i;
  for (i = 0; i < this._absoluteSources.length; ++i) {
    if (this._absoluteSources[i] == aSource) {
      return i;
    }
  }

  return -1;
};

/**
 * Create a BasicSourceMapConsumer from a SourceMapGenerator.
 *
 * @param SourceMapGenerator aSourceMap
 *        The source map that will be consumed.
 * @param String aSourceMapURL
 *        The URL at which the source map can be found (optional)
 * @returns BasicSourceMapConsumer
 */
BasicSourceMapConsumer.fromSourceMap =
  function SourceMapConsumer_fromSourceMap(aSourceMap, aSourceMapURL) {
    var smc = Object.create(BasicSourceMapConsumer.prototype);

    var names = smc._names = ArraySet.fromArray(aSourceMap._names.toArray(), true);
    var sources = smc._sources = ArraySet.fromArray(aSourceMap._sources.toArray(), true);
    smc.sourceRoot = aSourceMap._sourceRoot;
    smc.sourcesContent = aSourceMap._generateSourcesContent(smc._sources.toArray(),
                                                            smc.sourceRoot);
    smc.file = aSourceMap._file;
    smc._sourceMapURL = aSourceMapURL;
    smc._absoluteSources = smc._sources.toArray().map(function (s) {
      return util.computeSourceURL(smc.sourceRoot, s, aSourceMapURL);
    });

    // Because we are modifying the entries (by converting string sources and
    // names to indices into the sources and names ArraySets), we have to make
    // a copy of the entry or else bad things happen. Shared mutable state
    // strikes again! See github issue #191.

    var generatedMappings = aSourceMap._mappings.toArray().slice();
    var destGeneratedMappings = smc.__generatedMappings = [];
    var destOriginalMappings = smc.__originalMappings = [];

    for (var i = 0, length = generatedMappings.length; i < length; i++) {
      var srcMapping = generatedMappings[i];
      var destMapping = new Mapping;
      destMapping.generatedLine = srcMapping.generatedLine;
      destMapping.generatedColumn = srcMapping.generatedColumn;

      if (srcMapping.source) {
        destMapping.source = sources.indexOf(srcMapping.source);
        destMapping.originalLine = srcMapping.originalLine;
        destMapping.originalColumn = srcMapping.originalColumn;

        if (srcMapping.name) {
          destMapping.name = names.indexOf(srcMapping.name);
        }

        destOriginalMappings.push(destMapping);
      }

      destGeneratedMappings.push(destMapping);
    }

    quickSort(smc.__originalMappings, util.compareByOriginalPositions);

    return smc;
  };

/**
 * The version of the source mapping spec that we are consuming.
 */
BasicSourceMapConsumer.prototype._version = 3;

/**
 * The list of original sources.
 */
Object.defineProperty(BasicSourceMapConsumer.prototype, 'sources', {
  get: function () {
    return this._absoluteSources.slice();
  }
});

/**
 * Provide the JIT with a nice shape / hidden class.
 */
function Mapping() {
  this.generatedLine = 0;
  this.generatedColumn = 0;
  this.source = null;
  this.originalLine = null;
  this.originalColumn = null;
  this.name = null;
}

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
BasicSourceMapConsumer.prototype._parseMappings =
  function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    var generatedLine = 1;
    var previousGeneratedColumn = 0;
    var previousOriginalLine = 0;
    var previousOriginalColumn = 0;
    var previousSource = 0;
    var previousName = 0;
    var length = aStr.length;
    var index = 0;
    var cachedSegments = {};
    var temp = {};
    var originalMappings = [];
    var generatedMappings = [];
    var mapping, str, segment, end, value;

    while (index < length) {
      if (aStr.charAt(index) === ';') {
        generatedLine++;
        index++;
        previousGeneratedColumn = 0;
      }
      else if (aStr.charAt(index) === ',') {
        index++;
      }
      else {
        mapping = new Mapping();
        mapping.generatedLine = generatedLine;

        // Because each offset is encoded relative to the previous one,
        // many segments often have the same encoding. We can exploit this
        // fact by caching the parsed variable length fields of each segment,
        // allowing us to avoid a second parse if we encounter the same
        // segment again.
        for (end = index; end < length; end++) {
          if (this._charIsMappingSeparator(aStr, end)) {
            break;
          }
        }
        str = aStr.slice(index, end);

        segment = cachedSegments[str];
        if (segment) {
          index += str.length;
        } else {
          segment = [];
          while (index < end) {
            base64VLQ.decode(aStr, index, temp);
            value = temp.value;
            index = temp.rest;
            segment.push(value);
          }

          if (segment.length === 2) {
            throw new Error('Found a source, but no line and column');
          }

          if (segment.length === 3) {
            throw new Error('Found a source and line, but no column');
          }

          cachedSegments[str] = segment;
        }

        // Generated column.
        mapping.generatedColumn = previousGeneratedColumn + segment[0];
        previousGeneratedColumn = mapping.generatedColumn;

        if (segment.length > 1) {
          // Original source.
          mapping.source = previousSource + segment[1];
          previousSource += segment[1];

          // Original line.
          mapping.originalLine = previousOriginalLine + segment[2];
          previousOriginalLine = mapping.originalLine;
          // Lines are stored 0-based
          mapping.originalLine += 1;

          // Original column.
          mapping.originalColumn = previousOriginalColumn + segment[3];
          previousOriginalColumn = mapping.originalColumn;

          if (segment.length > 4) {
            // Original name.
            mapping.name = previousName + segment[4];
            previousName += segment[4];
          }
        }

        generatedMappings.push(mapping);
        if (typeof mapping.originalLine === 'number') {
          originalMappings.push(mapping);
        }
      }
    }

    quickSort(generatedMappings, util.compareByGeneratedPositionsDeflated);
    this.__generatedMappings = generatedMappings;

    quickSort(originalMappings, util.compareByOriginalPositions);
    this.__originalMappings = originalMappings;
  };

/**
 * Find the mapping that best matches the hypothetical "needle" mapping that
 * we are searching for in the given "haystack" of mappings.
 */
BasicSourceMapConsumer.prototype._findMapping =
  function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName,
                                         aColumnName, aComparator, aBias) {
    // To return the position we are searching for, we must first find the
    // mapping for the given position and then return the opposite position it
    // points to. Because the mappings are sorted, we can use binary search to
    // find the best mapping.

    if (aNeedle[aLineName] <= 0) {
      throw new TypeError('Line must be greater than or equal to 1, got '
                          + aNeedle[aLineName]);
    }
    if (aNeedle[aColumnName] < 0) {
      throw new TypeError('Column must be greater than or equal to 0, got '
                          + aNeedle[aColumnName]);
    }

    return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
  };

/**
 * Compute the last column for each generated mapping. The last column is
 * inclusive.
 */
BasicSourceMapConsumer.prototype.computeColumnSpans =
  function SourceMapConsumer_computeColumnSpans() {
    for (var index = 0; index < this._generatedMappings.length; ++index) {
      var mapping = this._generatedMappings[index];

      // Mappings do not contain a field for the last generated columnt. We
      // can come up with an optimistic estimate, however, by assuming that
      // mappings are contiguous (i.e. given two consecutive mappings, the
      // first mapping ends where the second one starts).
      if (index + 1 < this._generatedMappings.length) {
        var nextMapping = this._generatedMappings[index + 1];

        if (mapping.generatedLine === nextMapping.generatedLine) {
          mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
          continue;
        }
      }

      // The last mapping for each line spans the entire line.
      mapping.lastGeneratedColumn = Infinity;
    }
  };

/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */
BasicSourceMapConsumer.prototype.originalPositionFor =
  function SourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
      generatedLine: util.getArg(aArgs, 'line'),
      generatedColumn: util.getArg(aArgs, 'column')
    };

    var index = this._findMapping(
      needle,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      util.compareByGeneratedPositionsDeflated,
      util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
    );

    if (index >= 0) {
      var mapping = this._generatedMappings[index];

      if (mapping.generatedLine === needle.generatedLine) {
        var source = util.getArg(mapping, 'source', null);
        if (source !== null) {
          source = this._sources.at(source);
          source = util.computeSourceURL(this.sourceRoot, source, this._sourceMapURL);
        }
        var name = util.getArg(mapping, 'name', null);
        if (name !== null) {
          name = this._names.at(name);
        }
        return {
          source: source,
          line: util.getArg(mapping, 'originalLine', null),
          column: util.getArg(mapping, 'originalColumn', null),
          name: name
        };
      }
    }

    return {
      source: null,
      line: null,
      column: null,
      name: null
    };
  };

/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */
BasicSourceMapConsumer.prototype.hasContentsOfAllSources =
  function BasicSourceMapConsumer_hasContentsOfAllSources() {
    if (!this.sourcesContent) {
      return false;
    }
    return this.sourcesContent.length >= this._sources.size() &&
      !this.sourcesContent.some(function (sc) { return sc == null; });
  };

/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */
BasicSourceMapConsumer.prototype.sourceContentFor =
  function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    if (!this.sourcesContent) {
      return null;
    }

    var index = this._findSourceIndex(aSource);
    if (index >= 0) {
      return this.sourcesContent[index];
    }

    var relativeSource = aSource;
    if (this.sourceRoot != null) {
      relativeSource = util.relative(this.sourceRoot, relativeSource);
    }

    var url;
    if (this.sourceRoot != null
        && (url = util.urlParse(this.sourceRoot))) {
      // XXX: file:// URIs and absolute paths lead to unexpected behavior for
      // many users. We can help them out when they expect file:// URIs to
      // behave like it would if they were running a local HTTP server. See
      // https://bugzilla.mozilla.org/show_bug.cgi?id=885597.
      var fileUriAbsPath = relativeSource.replace(/^file:\/\//, "");
      if (url.scheme == "file"
          && this._sources.has(fileUriAbsPath)) {
        return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)]
      }

      if ((!url.path || url.path == "/")
          && this._sources.has("/" + relativeSource)) {
        return this.sourcesContent[this._sources.indexOf("/" + relativeSource)];
      }
    }

    // This function is used recursively from
    // IndexedSourceMapConsumer.prototype.sourceContentFor. In that case, we
    // don't want to throw if we can't find the source - we just want to
    // return null, so we provide a flag to exit gracefully.
    if (nullOnMissing) {
      return null;
    }
    else {
      throw new Error('"' + relativeSource + '" is not in the SourceMap.');
    }
  };

/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */
BasicSourceMapConsumer.prototype.generatedPositionFor =
  function SourceMapConsumer_generatedPositionFor(aArgs) {
    var source = util.getArg(aArgs, 'source');
    source = this._findSourceIndex(source);
    if (source < 0) {
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    }

    var needle = {
      source: source,
      originalLine: util.getArg(aArgs, 'line'),
      originalColumn: util.getArg(aArgs, 'column')
    };

    var index = this._findMapping(
      needle,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      util.compareByOriginalPositions,
      util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
    );

    if (index >= 0) {
      var mapping = this._originalMappings[index];

      if (mapping.source === needle.source) {
        return {
          line: util.getArg(mapping, 'generatedLine', null),
          column: util.getArg(mapping, 'generatedColumn', null),
          lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
        };
      }
    }

    return {
      line: null,
      column: null,
      lastColumn: null
    };
  };

exports.BasicSourceMapConsumer = BasicSourceMapConsumer;

/**
 * An IndexedSourceMapConsumer instance represents a parsed source map which
 * we can query for information. It differs from BasicSourceMapConsumer in
 * that it takes "indexed" source maps (i.e. ones with a "sections" field) as
 * input.
 *
 * The first parameter is a raw source map (either as a JSON string, or already
 * parsed to an object). According to the spec for indexed source maps, they
 * have the following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - file: Optional. The generated file this source map is associated with.
 *   - sections: A list of section definitions.
 *
 * Each value under the "sections" field has two fields:
 *   - offset: The offset into the original specified at which this section
 *       begins to apply, defined as an object with a "line" and "column"
 *       field.
 *   - map: A source map definition. This source map could also be indexed,
 *       but doesn't have to be.
 *
 * Instead of the "map" field, it's also possible to have a "url" field
 * specifying a URL to retrieve a source map from, but that's currently
 * unsupported.
 *
 * Here's an example source map, taken from the source map spec[0], but
 * modified to omit a section which uses the "url" field.
 *
 *  {
 *    version : 3,
 *    file: "app.js",
 *    sections: [{
 *      offset: {line:100, column:10},
 *      map: {
 *        version : 3,
 *        file: "section.js",
 *        sources: ["foo.js", "bar.js"],
 *        names: ["src", "maps", "are", "fun"],
 *        mappings: "AAAA,E;;ABCDE;"
 *      }
 *    }],
 *  }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit#heading=h.535es3xeprgt
 */
function IndexedSourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  var version = util.getArg(sourceMap, 'version');
  var sections = util.getArg(sourceMap, 'sections');

  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  this._sources = new ArraySet();
  this._names = new ArraySet();

  var lastOffset = {
    line: -1,
    column: 0
  };
  this._sections = sections.map(function (s) {
    if (s.url) {
      // The url field will require support for asynchronicity.
      // See https://github.com/mozilla/source-map/issues/16
      throw new Error('Support for url field in sections not implemented.');
    }
    var offset = util.getArg(s, 'offset');
    var offsetLine = util.getArg(offset, 'line');
    var offsetColumn = util.getArg(offset, 'column');

    if (offsetLine < lastOffset.line ||
        (offsetLine === lastOffset.line && offsetColumn < lastOffset.column)) {
      throw new Error('Section offsets must be ordered and non-overlapping.');
    }
    lastOffset = offset;

    return {
      generatedOffset: {
        // The offset fields are 0-based, but we use 1-based indices when
        // encoding/decoding from VLQ.
        generatedLine: offsetLine + 1,
        generatedColumn: offsetColumn + 1
      },
      consumer: new SourceMapConsumer(util.getArg(s, 'map'), aSourceMapURL)
    }
  });
}

IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;

/**
 * The version of the source mapping spec that we are consuming.
 */
IndexedSourceMapConsumer.prototype._version = 3;

/**
 * The list of original sources.
 */
Object.defineProperty(IndexedSourceMapConsumer.prototype, 'sources', {
  get: function () {
    var sources = [];
    for (var i = 0; i < this._sections.length; i++) {
      for (var j = 0; j < this._sections[i].consumer.sources.length; j++) {
        sources.push(this._sections[i].consumer.sources[j]);
      }
    }
    return sources;
  }
});

/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */
IndexedSourceMapConsumer.prototype.originalPositionFor =
  function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
      generatedLine: util.getArg(aArgs, 'line'),
      generatedColumn: util.getArg(aArgs, 'column')
    };

    // Find the section containing the generated position we're trying to map
    // to an original position.
    var sectionIndex = binarySearch.search(needle, this._sections,
      function(needle, section) {
        var cmp = needle.generatedLine - section.generatedOffset.generatedLine;
        if (cmp) {
          return cmp;
        }

        return (needle.generatedColumn -
                section.generatedOffset.generatedColumn);
      });
    var section = this._sections[sectionIndex];

    if (!section) {
      return {
        source: null,
        line: null,
        column: null,
        name: null
      };
    }

    return section.consumer.originalPositionFor({
      line: needle.generatedLine -
        (section.generatedOffset.generatedLine - 1),
      column: needle.generatedColumn -
        (section.generatedOffset.generatedLine === needle.generatedLine
         ? section.generatedOffset.generatedColumn - 1
         : 0),
      bias: aArgs.bias
    });
  };

/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */
IndexedSourceMapConsumer.prototype.hasContentsOfAllSources =
  function IndexedSourceMapConsumer_hasContentsOfAllSources() {
    return this._sections.every(function (s) {
      return s.consumer.hasContentsOfAllSources();
    });
  };

/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */
IndexedSourceMapConsumer.prototype.sourceContentFor =
  function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];

      var content = section.consumer.sourceContentFor(aSource, true);
      if (content) {
        return content;
      }
    }
    if (nullOnMissing) {
      return null;
    }
    else {
      throw new Error('"' + aSource + '" is not in the SourceMap.');
    }
  };

/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based. 
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */
IndexedSourceMapConsumer.prototype.generatedPositionFor =
  function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];

      // Only consider this section if the requested source is in the list of
      // sources of the consumer.
      if (section.consumer._findSourceIndex(util.getArg(aArgs, 'source')) === -1) {
        continue;
      }
      var generatedPosition = section.consumer.generatedPositionFor(aArgs);
      if (generatedPosition) {
        var ret = {
          line: generatedPosition.line +
            (section.generatedOffset.generatedLine - 1),
          column: generatedPosition.column +
            (section.generatedOffset.generatedLine === generatedPosition.line
             ? section.generatedOffset.generatedColumn - 1
             : 0)
        };
        return ret;
      }
    }

    return {
      line: null,
      column: null
    };
  };

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
IndexedSourceMapConsumer.prototype._parseMappings =
  function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    this.__generatedMappings = [];
    this.__originalMappings = [];
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];
      var sectionMappings = section.consumer._generatedMappings;
      for (var j = 0; j < sectionMappings.length; j++) {
        var mapping = sectionMappings[j];

        var source = section.consumer._sources.at(mapping.source);
        source = util.computeSourceURL(section.consumer.sourceRoot, source, this._sourceMapURL);
        this._sources.add(source);
        source = this._sources.indexOf(source);

        var name = null;
        if (mapping.name) {
          name = section.consumer._names.at(mapping.name);
          this._names.add(name);
          name = this._names.indexOf(name);
        }

        // The mappings coming from the consumer for the section have
        // generated positions relative to the start of the section, so we
        // need to offset them to be relative to the start of the concatenated
        // generated file.
        var adjustedMapping = {
          source: source,
          generatedLine: mapping.generatedLine +
            (section.generatedOffset.generatedLine - 1),
          generatedColumn: mapping.generatedColumn +
            (section.generatedOffset.generatedLine === mapping.generatedLine
            ? section.generatedOffset.generatedColumn - 1
            : 0),
          originalLine: mapping.originalLine,
          originalColumn: mapping.originalColumn,
          name: name
        };

        this.__generatedMappings.push(adjustedMapping);
        if (typeof adjustedMapping.originalLine === 'number') {
          this.__originalMappings.push(adjustedMapping);
        }
      }
    }

    quickSort(this.__generatedMappings, util.compareByGeneratedPositionsDeflated);
    quickSort(this.__originalMappings, util.compareByOriginalPositions);
  };

exports.IndexedSourceMapConsumer = IndexedSourceMapConsumer;


/***/ }),

/***/ "./node_modules/sketch-utils/node_modules/source-map/lib/util.js":
/*!***********************************************************************!*\
  !*** ./node_modules/sketch-utils/node_modules/source-map/lib/util.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

/**
 * This is a helper function for getting values from parameter/options
 * objects.
 *
 * @param args The object we are extracting values from
 * @param name The name of the property we are getting.
 * @param defaultValue An optional value to return if the property is missing
 * from the object. If this is not specified and the property is missing, an
 * error will be thrown.
 */
function getArg(aArgs, aName, aDefaultValue) {
  if (aName in aArgs) {
    return aArgs[aName];
  } else if (arguments.length === 3) {
    return aDefaultValue;
  } else {
    throw new Error('"' + aName + '" is a required argument.');
  }
}
exports.getArg = getArg;

var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/;
var dataUrlRegexp = /^data:.+\,.+$/;

function urlParse(aUrl) {
  var match = aUrl.match(urlRegexp);
  if (!match) {
    return null;
  }
  return {
    scheme: match[1],
    auth: match[2],
    host: match[3],
    port: match[4],
    path: match[5]
  };
}
exports.urlParse = urlParse;

function urlGenerate(aParsedUrl) {
  var url = '';
  if (aParsedUrl.scheme) {
    url += aParsedUrl.scheme + ':';
  }
  url += '//';
  if (aParsedUrl.auth) {
    url += aParsedUrl.auth + '@';
  }
  if (aParsedUrl.host) {
    url += aParsedUrl.host;
  }
  if (aParsedUrl.port) {
    url += ":" + aParsedUrl.port
  }
  if (aParsedUrl.path) {
    url += aParsedUrl.path;
  }
  return url;
}
exports.urlGenerate = urlGenerate;

/**
 * Normalizes a path, or the path portion of a URL:
 *
 * - Replaces consecutive slashes with one slash.
 * - Removes unnecessary '.' parts.
 * - Removes unnecessary '<dir>/..' parts.
 *
 * Based on code in the Node.js 'path' core module.
 *
 * @param aPath The path or url to normalize.
 */
function normalize(aPath) {
  var path = aPath;
  var url = urlParse(aPath);
  if (url) {
    if (!url.path) {
      return aPath;
    }
    path = url.path;
  }
  var isAbsolute = exports.isAbsolute(path);

  var parts = path.split(/\/+/);
  for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
    part = parts[i];
    if (part === '.') {
      parts.splice(i, 1);
    } else if (part === '..') {
      up++;
    } else if (up > 0) {
      if (part === '') {
        // The first part is blank if the path is absolute. Trying to go
        // above the root is a no-op. Therefore we can remove all '..' parts
        // directly after the root.
        parts.splice(i + 1, up);
        up = 0;
      } else {
        parts.splice(i, 2);
        up--;
      }
    }
  }
  path = parts.join('/');

  if (path === '') {
    path = isAbsolute ? '/' : '.';
  }

  if (url) {
    url.path = path;
    return urlGenerate(url);
  }
  return path;
}
exports.normalize = normalize;

/**
 * Joins two paths/URLs.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be joined with the root.
 *
 * - If aPath is a URL or a data URI, aPath is returned, unless aPath is a
 *   scheme-relative URL: Then the scheme of aRoot, if any, is prepended
 *   first.
 * - Otherwise aPath is a path. If aRoot is a URL, then its path portion
 *   is updated with the result and aRoot is returned. Otherwise the result
 *   is returned.
 *   - If aPath is absolute, the result is aPath.
 *   - Otherwise the two paths are joined with a slash.
 * - Joining for example 'http://' and 'www.example.com' is also supported.
 */
function join(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }
  if (aPath === "") {
    aPath = ".";
  }
  var aPathUrl = urlParse(aPath);
  var aRootUrl = urlParse(aRoot);
  if (aRootUrl) {
    aRoot = aRootUrl.path || '/';
  }

  // `join(foo, '//www.example.org')`
  if (aPathUrl && !aPathUrl.scheme) {
    if (aRootUrl) {
      aPathUrl.scheme = aRootUrl.scheme;
    }
    return urlGenerate(aPathUrl);
  }

  if (aPathUrl || aPath.match(dataUrlRegexp)) {
    return aPath;
  }

  // `join('http://', 'www.example.com')`
  if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
    aRootUrl.host = aPath;
    return urlGenerate(aRootUrl);
  }

  var joined = aPath.charAt(0) === '/'
    ? aPath
    : normalize(aRoot.replace(/\/+$/, '') + '/' + aPath);

  if (aRootUrl) {
    aRootUrl.path = joined;
    return urlGenerate(aRootUrl);
  }
  return joined;
}
exports.join = join;

exports.isAbsolute = function (aPath) {
  return aPath.charAt(0) === '/' || urlRegexp.test(aPath);
};

/**
 * Make a path relative to a URL or another path.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be made relative to aRoot.
 */
function relative(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }

  aRoot = aRoot.replace(/\/$/, '');

  // It is possible for the path to be above the root. In this case, simply
  // checking whether the root is a prefix of the path won't work. Instead, we
  // need to remove components from the root one by one, until either we find
  // a prefix that fits, or we run out of components to remove.
  var level = 0;
  while (aPath.indexOf(aRoot + '/') !== 0) {
    var index = aRoot.lastIndexOf("/");
    if (index < 0) {
      return aPath;
    }

    // If the only part of the root that is left is the scheme (i.e. http://,
    // file:///, etc.), one or more slashes (/), or simply nothing at all, we
    // have exhausted all components, so the path is not relative to the root.
    aRoot = aRoot.slice(0, index);
    if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
      return aPath;
    }

    ++level;
  }

  // Make sure we add a "../" for each component we removed from the root.
  return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
}
exports.relative = relative;

var supportsNullProto = (function () {
  var obj = Object.create(null);
  return !('__proto__' in obj);
}());

function identity (s) {
  return s;
}

/**
 * Because behavior goes wacky when you set `__proto__` on objects, we
 * have to prefix all the strings in our set with an arbitrary character.
 *
 * See https://github.com/mozilla/source-map/pull/31 and
 * https://github.com/mozilla/source-map/issues/30
 *
 * @param String aStr
 */
function toSetString(aStr) {
  if (isProtoString(aStr)) {
    return '$' + aStr;
  }

  return aStr;
}
exports.toSetString = supportsNullProto ? identity : toSetString;

function fromSetString(aStr) {
  if (isProtoString(aStr)) {
    return aStr.slice(1);
  }

  return aStr;
}
exports.fromSetString = supportsNullProto ? identity : fromSetString;

function isProtoString(s) {
  if (!s) {
    return false;
  }

  var length = s.length;

  if (length < 9 /* "__proto__".length */) {
    return false;
  }

  if (s.charCodeAt(length - 1) !== 95  /* '_' */ ||
      s.charCodeAt(length - 2) !== 95  /* '_' */ ||
      s.charCodeAt(length - 3) !== 111 /* 'o' */ ||
      s.charCodeAt(length - 4) !== 116 /* 't' */ ||
      s.charCodeAt(length - 5) !== 111 /* 'o' */ ||
      s.charCodeAt(length - 6) !== 114 /* 'r' */ ||
      s.charCodeAt(length - 7) !== 112 /* 'p' */ ||
      s.charCodeAt(length - 8) !== 95  /* '_' */ ||
      s.charCodeAt(length - 9) !== 95  /* '_' */) {
    return false;
  }

  for (var i = length - 10; i >= 0; i--) {
    if (s.charCodeAt(i) !== 36 /* '$' */) {
      return false;
    }
  }

  return true;
}

/**
 * Comparator between two mappings where the original positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same original source/line/column, but different generated
 * line and column the same. Useful when searching for a mapping with a
 * stubbed out mapping.
 */
function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
  var cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0 || onlyCompareOriginal) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByOriginalPositions = compareByOriginalPositions;

/**
 * Comparator between two mappings with deflated source and name indices where
 * the generated positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same generated line and column, but different
 * source/name/original line and column the same. Useful when searching for a
 * mapping with a stubbed out mapping.
 */
function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0 || onlyCompareGenerated) {
    return cmp;
  }

  cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;

function strcmp(aStr1, aStr2) {
  if (aStr1 === aStr2) {
    return 0;
  }

  if (aStr1 === null) {
    return 1; // aStr2 !== null
  }

  if (aStr2 === null) {
    return -1; // aStr1 !== null
  }

  if (aStr1 > aStr2) {
    return 1;
  }

  return -1;
}

/**
 * Comparator between two mappings with inflated source and name strings where
 * the generated positions are compared.
 */
function compareByGeneratedPositionsInflated(mappingA, mappingB) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;

/**
 * Strip any JSON XSSI avoidance prefix from the string (as documented
 * in the source maps specification), and then parse the string as
 * JSON.
 */
function parseSourceMapInput(str) {
  return JSON.parse(str.replace(/^\)]}'[^\n]*\n/, ''));
}
exports.parseSourceMapInput = parseSourceMapInput;

/**
 * Compute the URL of a source given the the source root, the source's
 * URL, and the source map's URL.
 */
function computeSourceURL(sourceRoot, sourceURL, sourceMapURL) {
  sourceURL = sourceURL || '';

  if (sourceRoot) {
    // This follows what Chrome does.
    if (sourceRoot[sourceRoot.length - 1] !== '/' && sourceURL[0] !== '/') {
      sourceRoot += '/';
    }
    // The spec says:
    //   Line 4: An optional source root, useful for relocating source
    //   files on a server or removing repeated values in the
    //   “sources” entry.  This value is prepended to the individual
    //   entries in the “source” field.
    sourceURL = sourceRoot + sourceURL;
  }

  // Historically, SourceMapConsumer did not take the sourceMapURL as
  // a parameter.  This mode is still somewhat supported, which is why
  // this code block is conditional.  However, it's preferable to pass
  // the source map URL to SourceMapConsumer, so that this function
  // can implement the source URL resolution algorithm as outlined in
  // the spec.  This block is basically the equivalent of:
  //    new URL(sourceURL, sourceMapURL).toString()
  // ... except it avoids using URL, which wasn't available in the
  // older releases of node still supported by this library.
  //
  // The spec says:
  //   If the sources are not absolute URLs after prepending of the
  //   “sourceRoot”, the sources are resolved relative to the
  //   SourceMap (like resolving script src in a html document).
  if (sourceMapURL) {
    var parsed = urlParse(sourceMapURL);
    if (!parsed) {
      throw new Error("sourceMapURL could not be parsed");
    }
    if (parsed.path) {
      // Strip the last path component, but keep the "/".
      var index = parsed.path.lastIndexOf('/');
      if (index >= 0) {
        parsed.path = parsed.path.substring(0, index + 1);
      }
    }
    sourceURL = join(urlGenerate(parsed), sourceURL);
  }

  return normalize(sourceURL);
}
exports.computeSourceURL = computeSourceURL;


/***/ }),

/***/ "./node_modules/sketch-utils/prepare-stack-trace.js":
/*!**********************************************************!*\
  !*** ./node_modules/sketch-utils/prepare-stack-trace.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-not-accumulator-reassign/no-not-accumulator-reassign, no-var, vars-on-top, prefer-template, prefer-arrow-callback, func-names, prefer-destructuring, object-shorthand */
var sourcemap = __webpack_require__(/*! ./source-map-stack-trace */ "./node_modules/sketch-utils/source-map-stack-trace.js")

module.exports = function prepareStackTrace(stackTrace, options) {
  var stack = stackTrace.split('\n')
  stack = stack.map(function(s) {
    return s.replace(/\sg/, '')
  })

  stack = stack.map(function(entry) {
    // entry is something like `functionName@path/to/my/file:line:column`
    // or `path/to/my/file:line:column`
    // or `path/to/my/file`
    // or `path/to/@my/file:line:column`
    var parts = entry.split('@')
    var fn = parts.shift()
    var filePath = parts.join('@') // the path can contain @

    if (fn.indexOf('/Users/') === 0) {
      // actually we didn't have a fn so just put it back in the filePath
      filePath = fn + (filePath ? '@' + filePath : '')
      fn = null
    }

    if (!filePath) {
      // we should always have a filePath, so if we don't have one here, it means that the function what actually anonymous and that it is the filePath instead
      filePath = entry
      fn = null
    }

    var filePathParts = filePath.split(':')
    filePath = filePathParts[0]

    // the file is the last part of the filePath
    var file = filePath.split('/')
    file = file[file.length - 1]

    return {
      fn: fn,
      file: file,
      filePath: filePath,
      line: filePathParts[1],
      column: filePathParts[2],
    }
  })

  if (options && options.sourcemaps) {
    return sourcemap(stack)
  }

  return stack
}


/***/ }),

/***/ "./node_modules/sketch-utils/source-map-stack-trace.js":
/*!*************************************************************!*\
  !*** ./node_modules/sketch-utils/source-map-stack-trace.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// taken for most part from https://github.com/evanw/node-source-map-support/blob/master/source-map-support.js

var SourceMapConsumer = __webpack_require__(/*! source-map/lib/source-map-consumer */ "./node_modules/sketch-utils/node_modules/source-map/lib/source-map-consumer.js")
  .SourceMapConsumer
var path = __webpack_require__(/*! @skpm/path */ "./node_modules/@skpm/path/index.js")
var fs = __webpack_require__(/*! @skpm/fs */ "./node_modules/@skpm/fs/index.js")
var Buffer = __webpack_require__(/*! @skpm/buffer */ "./node_modules/@skpm/buffer/index.js")

// Regex for detecting source maps
const reSourceMap = /^data:application\/json[^,]+base64,/

function retrieveFile(filePath, caches) {
  // Trim the path to make sure there is no extra whitespace.
  filePath = filePath.trim() // eslint-disable-line
  if (filePath in caches.fileContents) {
    return caches.fileContents[filePath]
  }

  var contents = null
  try {
    contents = fs.readFileSync(filePath, 'utf8')
  } catch (err) {
    contents = ''
  }

  caches.fileContents[filePath] = contents

  return contents
}

// Support URLs relative to a directory, but be careful about a protocol prefix
// in case we are in the browser (i.e. directories may start with "http://")
var webpackSource = /^webpack:\/\/exports\//
var externalSource = /^external/
function supportRelativeURL(file, url) {
  if (!file) return url
  var webpackURL = url
  var webpackMatch = webpackSource.exec(webpackURL)
  if (webpackMatch) {
    webpackURL = webpackURL.slice(webpackMatch[0].length)
    if (externalSource.exec(webpackURL)) {
      return webpackURL
    }
    webpackURL = '../../../' + webpackURL
  }
  var dir = path.dirname(file)
  var match = /^\w+:\/\/[^/]*/.exec(dir)
  var protocol = match ? match[0] : ''
  return protocol + path.resolve(dir.slice(protocol.length), webpackURL)
}

function retrieveSourceMapURL(source, caches) {
  // Get the URL of the source map
  var fileData = retrieveFile(source, caches)

  var re = /(?:\/\/[@#][ \t]+sourceMappingURL=([^\s'"]+?)[ \t]*$)|(?:\/\*[@#][ \t]+sourceMappingURL=([^*]+?)[ \t]*(?:\*\/)[ \t]*$)/gm
  // Keep executing the search to find the *last* sourceMappingURL to avoid
  // picking up sourceMappingURLs from comments, strings, etc.
  var lastMatch
  var match = re.exec(fileData)
  while (match) {
    lastMatch = match
    match = re.exec(fileData)
  }
  if (!lastMatch) return null
  return lastMatch[1]
}

// Can be overridden by the retrieveSourceMap option to install. Takes a
// generated source filename; returns a {map, optional url} object, or null if
// there is no source map.  The map field may be either a string or the parsed
// JSON object (ie, it must be a valid argument to the SourceMapConsumer
// constructor).
function retrieveSourceMap(source, caches) {
  var sourceMappingURL = retrieveSourceMapURL(source, caches)
  if (!sourceMappingURL) return null

  // Read the contents of the source map
  var sourceMapData
  if (reSourceMap.test(sourceMappingURL)) {
    // Support source map URL as a data url
    var rawData = sourceMappingURL.slice(sourceMappingURL.indexOf(',') + 1)
    sourceMapData = Buffer.from(rawData, 'base64').toString()
    sourceMappingURL = source
  } else {
    // Support source map URLs relative to the source URL
    sourceMappingURL = supportRelativeURL(source, sourceMappingURL)
    sourceMapData = retrieveFile(sourceMappingURL, caches)
  }

  if (!sourceMapData) {
    return null
  }

  return {
    url: sourceMappingURL,
    map: sourceMapData,
  }
}

function mapSourcePosition(position, caches) {
  var sourceMap = caches.sourceMap[position.source]

  if (!sourceMap) {
    var urlAndMap = retrieveSourceMap(position.source, caches)
    if (urlAndMap) {
      var map = new SourceMapConsumer(urlAndMap.map)
      sourceMap = {
        url: urlAndMap.url,
        rawMap: urlAndMap.map,
        map: map,
      }

      caches.sourceMap[position.source] = sourceMap

      // Load all sources stored inline with the source map into the file cache
      // to pretend like they are already loaded. They may not exist on disk.
      if (sourceMap.map.sourcesContent) {
        sourceMap.map.sources.forEach((source, i) => {
          const contents = sourceMap.map.sourcesContent[i]
          if (contents) {
            const url = supportRelativeURL(sourceMap.url, source)
            caches.fileContents[url] = contents
          }
        })
      }
    } else {
      sourceMap = {
        url: null,
        rawMap: null,
        map: null,
      }

      caches.sourceMap[position.source] = sourceMap
    }
  }

  // Resolve the source URL relative to the URL of the source map
  if (sourceMap && sourceMap.map) {
    const originalPosition = sourceMap.map.originalPositionFor(position)

    // Only return the original position if a matching line was found. If no
    // matching line is found then we return position instead, which will cause
    // the stack trace to print the path and line for the compiled file. It is
    // better to give a precise location in the compiled file than a vague
    // location in the original file.
    if (originalPosition.source !== null) {
      originalPosition.source =
        supportRelativeURL(sourceMap.url, originalPosition.source) ||
        originalPosition.source
      return originalPosition
    }
  }

  return position
}

module.exports = function(stack) {
  const caches = {
    // Maps a file path to a string containing the file contents
    fileContents: {},
    // Maps a file path to a source map for that file
    sourceMap: {},
  }

  var mappedStack = []

  for (let i = 0; i < stack.length; i += 1) {
    var frame = stack[i]
    if (
      typeof frame.line !== 'undefined' &&
      typeof frame.column !== 'undefined' &&
      frame.filePath
    ) {
      var mappedPosition = mapSourcePosition(
        {
          source: frame.filePath,
          line: parseInt(frame.line, 10),
          column: parseInt(frame.column, 10),
        },
        caches
      )
      var filePath = mappedPosition.source
      // the file is the last part of the filePath
      var file = filePath.split('/')
      file = file[file.length - 1]
      mappedStack.push(Object.assign({}, frame, mappedPosition, {
        filePath: filePath,
        file: file,
      }))
    } else {
      mappedStack.push(frame)
    }
  }

  return mappedStack
}


/***/ })

/******/ });
  if (key === 'default' && typeof exports === 'function') {
    exports(context);
  } else {
    exports[key](context);
  }
}
that['onRun'] = __skpm_run.bind(this, 'default')

//# sourceMappingURL=compiled-tests.js.map