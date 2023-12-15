/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@paypal/paypal-js/dist/esm/paypal-js.js":
/*!**************************************************************!*\
  !*** ./node_modules/@paypal/paypal-js/dist/esm/paypal-js.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadCustomScript: () => (/* binding */ loadCustomScript),\n/* harmony export */   loadScript: () => (/* binding */ loadScript),\n/* harmony export */   version: () => (/* binding */ version)\n/* harmony export */ });\n/*!\n * paypal-js v7.1.1 (2023-11-27T14:12:58.587Z)\n * Copyright 2020-present, PayPal, Inc. All rights reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\nfunction findScript(url, attributes) {\n    var currentScript = document.querySelector(\"script[src=\\\"\".concat(url, \"\\\"]\"));\n    if (currentScript === null)\n        return null;\n    var nextScript = createScriptElement(url, attributes);\n    // ignore the data-uid-auto attribute that gets auto-assigned to every script tag\n    var currentScriptClone = currentScript.cloneNode();\n    delete currentScriptClone.dataset.uidAuto;\n    // check if the new script has the same number of data attributes\n    if (Object.keys(currentScriptClone.dataset).length !==\n        Object.keys(nextScript.dataset).length) {\n        return null;\n    }\n    var isExactMatch = true;\n    // check if the data attribute values are the same\n    Object.keys(currentScriptClone.dataset).forEach(function (key) {\n        if (currentScriptClone.dataset[key] !== nextScript.dataset[key]) {\n            isExactMatch = false;\n        }\n    });\n    return isExactMatch ? currentScript : null;\n}\nfunction insertScriptElement(_a) {\n    var url = _a.url, attributes = _a.attributes, onSuccess = _a.onSuccess, onError = _a.onError;\n    var newScript = createScriptElement(url, attributes);\n    newScript.onerror = onError;\n    newScript.onload = onSuccess;\n    document.head.insertBefore(newScript, document.head.firstElementChild);\n}\nfunction processOptions(options) {\n    var sdkBaseUrl = \"https://www.paypal.com/sdk/js\";\n    if (options.sdkBaseUrl) {\n        sdkBaseUrl = options.sdkBaseUrl;\n        delete options.sdkBaseUrl;\n    }\n    var optionsWithStringIndex = options;\n    var _a = Object.keys(optionsWithStringIndex)\n        .filter(function (key) {\n        return (typeof optionsWithStringIndex[key] !== \"undefined\" &&\n            optionsWithStringIndex[key] !== null &&\n            optionsWithStringIndex[key] !== \"\");\n    })\n        .reduce(function (accumulator, key) {\n        var value = optionsWithStringIndex[key].toString();\n        key = camelCaseToKebabCase(key);\n        if (key.substring(0, 4) === \"data\" || key === \"crossorigin\") {\n            accumulator.attributes[key] = value;\n        }\n        else {\n            accumulator.queryParams[key] = value;\n        }\n        return accumulator;\n    }, {\n        queryParams: {},\n        attributes: {},\n    }), queryParams = _a.queryParams, attributes = _a.attributes;\n    if (queryParams[\"merchant-id\"] &&\n        queryParams[\"merchant-id\"].indexOf(\",\") !== -1) {\n        attributes[\"data-merchant-id\"] = queryParams[\"merchant-id\"];\n        queryParams[\"merchant-id\"] = \"*\";\n    }\n    return {\n        url: \"\".concat(sdkBaseUrl, \"?\").concat(objectToQueryString(queryParams)),\n        attributes: attributes,\n    };\n}\nfunction camelCaseToKebabCase(str) {\n    var replacer = function (match, indexOfMatch) {\n        return (indexOfMatch ? \"-\" : \"\") + match.toLowerCase();\n    };\n    return str.replace(/[A-Z]+(?![a-z])|[A-Z]/g, replacer);\n}\nfunction objectToQueryString(params) {\n    var queryString = \"\";\n    Object.keys(params).forEach(function (key) {\n        if (queryString.length !== 0)\n            queryString += \"&\";\n        queryString += key + \"=\" + params[key];\n    });\n    return queryString;\n}\nfunction createScriptElement(url, attributes) {\n    if (attributes === void 0) { attributes = {}; }\n    var newScript = document.createElement(\"script\");\n    newScript.src = url;\n    Object.keys(attributes).forEach(function (key) {\n        newScript.setAttribute(key, attributes[key]);\n        if (key === \"data-csp-nonce\") {\n            newScript.setAttribute(\"nonce\", attributes[\"data-csp-nonce\"]);\n        }\n    });\n    return newScript;\n}\n\n/**\n * Load the Paypal JS SDK script asynchronously.\n *\n * @param {Object} options - used to configure query parameters and data attributes for the JS SDK.\n * @param {PromiseConstructor} [PromisePonyfill=window.Promise] - optional Promise Constructor ponyfill.\n * @return {Promise<Object>} paypalObject - reference to the global window PayPal object.\n */\nfunction loadScript(options, PromisePonyfill) {\n    if (PromisePonyfill === void 0) { PromisePonyfill = Promise; }\n    validateArguments(options, PromisePonyfill);\n    // resolve with null when running in Node or Deno\n    if (typeof document === \"undefined\")\n        return PromisePonyfill.resolve(null);\n    var _a = processOptions(options), url = _a.url, attributes = _a.attributes;\n    var namespace = attributes[\"data-namespace\"] || \"paypal\";\n    var existingWindowNamespace = getPayPalWindowNamespace(namespace);\n    // resolve with the existing global paypal namespace when a script with the same params already exists\n    if (findScript(url, attributes) && existingWindowNamespace) {\n        return PromisePonyfill.resolve(existingWindowNamespace);\n    }\n    return loadCustomScript({\n        url: url,\n        attributes: attributes,\n    }, PromisePonyfill).then(function () {\n        var newWindowNamespace = getPayPalWindowNamespace(namespace);\n        if (newWindowNamespace) {\n            return newWindowNamespace;\n        }\n        throw new Error(\"The window.\".concat(namespace, \" global variable is not available.\"));\n    });\n}\n/**\n * Load a custom script asynchronously.\n *\n * @param {Object} options - used to set the script url and attributes.\n * @param {PromiseConstructor} [PromisePonyfill=window.Promise] - optional Promise Constructor ponyfill.\n * @return {Promise<void>} returns a promise to indicate if the script was successfully loaded.\n */\nfunction loadCustomScript(options, PromisePonyfill) {\n    if (PromisePonyfill === void 0) { PromisePonyfill = Promise; }\n    validateArguments(options, PromisePonyfill);\n    var url = options.url, attributes = options.attributes;\n    if (typeof url !== \"string\" || url.length === 0) {\n        throw new Error(\"Invalid url.\");\n    }\n    if (typeof attributes !== \"undefined\" && typeof attributes !== \"object\") {\n        throw new Error(\"Expected attributes to be an object.\");\n    }\n    return new PromisePonyfill(function (resolve, reject) {\n        // resolve with undefined when running in Node or Deno\n        if (typeof document === \"undefined\")\n            return resolve();\n        insertScriptElement({\n            url: url,\n            attributes: attributes,\n            onSuccess: function () { return resolve(); },\n            onError: function () {\n                var defaultError = new Error(\"The script \\\"\".concat(url, \"\\\" failed to load. Check the HTTP status code and response body in DevTools to learn more.\"));\n                return reject(defaultError);\n            },\n        });\n    });\n}\nfunction getPayPalWindowNamespace(namespace) {\n    // eslint-disable-next-line @typescript-eslint/no-explicit-any\n    return window[namespace];\n}\nfunction validateArguments(options, PromisePonyfill) {\n    if (typeof options !== \"object\" || options === null) {\n        throw new Error(\"Expected an options object.\");\n    }\n    if (typeof PromisePonyfill !== \"undefined\" &&\n        typeof PromisePonyfill !== \"function\") {\n        throw new Error(\"Expected PromisePonyfill to be a function.\");\n    }\n}\n\n// replaced with the package.json version at build time\nvar version = \"7.1.1\";\n\n\n\n\n//# sourceURL=webpack://easypay/./node_modules/@paypal/paypal-js/dist/esm/paypal-js.js?");

/***/ }),

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _domManipulation_initializeQuantityListeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domManipulation/initializeQuantityListeners */ \"./src/components/domManipulation/initializeQuantityListeners.js\");\n/* harmony import */ var _checkoutContainer_CheckoutContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkoutContainer/CheckoutContainer */ \"./src/components/checkoutContainer/CheckoutContainer.js\");\n/* harmony import */ var _toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toolbar/Toolbar */ \"./src/components/toolbar/Toolbar.js\");\n/* harmony import */ var _domManipulation_createPaypalButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domManipulation/createPaypalButton */ \"./src/components/domManipulation/createPaypalButton.js\");\n\n\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  document.body.appendChild((0,_toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n  document.body.appendChild((0,_checkoutContainer_CheckoutContainer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n\n  (0,_domManipulation_initializeQuantityListeners__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  (0,_domManipulation_createPaypalButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n}\n\n\n//# sourceURL=webpack://easypay/./src/components/App.js?");

/***/ }),

/***/ "./src/components/buttonContainer/ButtonContainer.js":
/*!***********************************************************!*\
  !*** ./src/components/buttonContainer/ButtonContainer.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ButtonContainer)\n/* harmony export */ });\nfunction ButtonContainer() {\n  const container = document.createElement(\"div\");\n  container.setAttribute(\n    \"class\",\n    \"col-span-2 flex items-center justify-center\"\n  );\n\n  container.innerHTML = '<div class=\"w-4/5\" id=\"paypal-container\"></div>';\n\n  return container;\n}\n\n\n//# sourceURL=webpack://easypay/./src/components/buttonContainer/ButtonContainer.js?");

/***/ }),

/***/ "./src/components/cart/Cart.js":
/*!*************************************!*\
  !*** ./src/components/cart/Cart.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Cart)\n/* harmony export */ });\n/* harmony import */ var _dummyObjects_dummyObjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dummyObjects/dummyObjects */ \"./src/components/dummyObjects/dummyObjects.js\");\n/* harmony import */ var _Items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Items */ \"./src/components/cart/Items.js\");\n\n\n\nfunction Cart() {\n  const container = document.createElement(\"div\");\n  container.classList.add(\"p-4\");\n  container.innerHTML = `\n    <h2 class=\"mb-2 text-3xl text-left font-semibold text-gray-600 border-b-2 border-b-slate-600\">Your cart</h2>\n  `;\n\n  container.appendChild((0,_Items__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_dummyObjects_dummyObjects__WEBPACK_IMPORTED_MODULE_0__.cartItems));\n\n  return container;\n}\n\n\n//# sourceURL=webpack://easypay/./src/components/cart/Cart.js?");

/***/ }),

/***/ "./src/components/cart/Items.js":
/*!**************************************!*\
  !*** ./src/components/cart/Items.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Items)\n/* harmony export */ });\n/* harmony import */ var _util_formatPrice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/formatPrice */ \"./src/util/formatPrice.js\");\n\n\nfunction Items(items) {\n    const container = document.createElement(\"div\");\n    let domItems = '';\n    let total = 0;\n\n    for(let item of items) {\n        domItems += `\n        <div class=\"mt-8 bg-white p-4 border border-gray-500 rounded \">\n            <div class=\"flow-root\">\n            <ul role=\"list\" class=\"-my-6 divide-y divide-gray-200\">\n                <li class=\"flex py-6\">\n                <div class=\"h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-400\">\n                    <img src=\"${item.picture}\" alt=\"Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.\" class=\"h-full w-full object-cover object-center\">\n                </div>\n\n                <div class=\"ml-4 flex flex-1 flex-col\">\n                    <div>\n                    <div class=\"flex justify-between text-base font-medium text-gray-900\">\n                        <h3>\n                        <a href=\"#\">${item.name}</a>\n                        </h3>\n                        <p id=\"item-price-${item.id}\" data-price-quantity=\"${item.price}\" data-price=\"${item.price}\" class=\"prices ml-4\">${(0,_util_formatPrice__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(item.price)}</p>\n                    </div>\n                    </div>\n                    <div class=\"flex flex-1 items-end justify-between text-sm\">\n                    <p class=\"text-gray-500 flex justify-around items-center gap-2\"><button data-id=\"${item.id}\" id=\"btn-increase-quantity-${item.id}\" class=\"btn-increase-quantity drop-shadow rounded-full hover:bg-gray-200\"><i class=\"px-2 py-2 border border-gray-500 rounded-full fa-solid fa-plus\"></i></button><input id=\"input-quantity-${item.id}\" class=\"bg-white border border-gray-500 text-center h-10 w-10 px-2 pr-2 rounded-full text-sm focus:outline-none\" type=\"number\" value=\"1\" disabled><button data-id=\"${item.id}\" id=\"btn-decrease=quantity${item.id}\" class=\"btn-decrease-quantity drop-shadow rounded-full hover:bg-gray-200\"><i class=\"px-2 py-2 border border-gray-500 rounded-full fa-solid fa-minus\"></i></button></p>\n\n                    <div class=\"flex\">\n                        <button type=\"button\" class=\"font-medium text-sky-600 hover:text-sky-500 cursor-not-allowed\">Remove</button>\n                    </div>\n                    </div>\n                </div>\n                </li>\n            </div>\n        </div>\n        `;\n        total += item.price;\n    }\n\n    domItems += `\n        <div id=\"cart-total-container\" class=\"mt-6 bg-white p-4 border border-gray-500 rounded flex justify-between\">\n            <p class=\"font-semibold text-lg\">Total</p>\n            <span data-total=\"${total}\" id=\"cart-total\">${(0,_util_formatPrice__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(total)}</span>\n        </div>\n    `\n\n    container.innerHTML = domItems;\n\n    return container;\n}\n\n//# sourceURL=webpack://easypay/./src/components/cart/Items.js?");

/***/ }),

/***/ "./src/components/checkoutContainer/CheckoutContainer.js":
/*!***************************************************************!*\
  !*** ./src/components/checkoutContainer/CheckoutContainer.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CheckoutContainer)\n/* harmony export */ });\n/* harmony import */ var _buttonContainer_ButtonContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../buttonContainer/ButtonContainer */ \"./src/components/buttonContainer/ButtonContainer.js\");\n/* harmony import */ var _cart_Cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cart/Cart */ \"./src/components/cart/Cart.js\");\n/* harmony import */ var _form_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../form/Form */ \"./src/components/form/Form.js\");\n\n\n\n\nfunction CheckoutContainer() {\n  const container = document.createElement(\"div\");\n  container.setAttribute(\n    \"class\",\n    \"grid grid-cols-2 gap-2 mt-32 w-1/2 p-4 bg-gray-200 drop-shadow-2xl rounded-md\"\n  );\n\n  container.appendChild((0,_cart_Cart__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n  container.appendChild((0,_form_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n  container.appendChild((0,_buttonContainer_ButtonContainer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n\n  return container;\n}\n\n\n//# sourceURL=webpack://easypay/./src/components/checkoutContainer/CheckoutContainer.js?");

/***/ }),

/***/ "./src/components/domManipulation/checkFormInputs.js":
/*!***********************************************************!*\
  !*** ./src/components/domManipulation/checkFormInputs.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ checkFormInputs)\n/* harmony export */ });\nfunction checkFormInputs() {\n  const formFields = document.querySelectorAll(\".form-field\");\n  let allFilled = true;\n\n  for (let field of formFields) {\n    if (field.value == \"\") {\n      allFilled = false;\n    }\n  }\n\n  return allFilled;\n}\n\n\n//# sourceURL=webpack://easypay/./src/components/domManipulation/checkFormInputs.js?");

/***/ }),

/***/ "./src/components/domManipulation/createPaypalButton.js":
/*!**************************************************************!*\
  !*** ./src/components/domManipulation/createPaypalButton.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPaypalButton)\n/* harmony export */ });\n/* harmony import */ var _paypal_paypal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @paypal/paypal-js */ \"./node_modules/@paypal/paypal-js/dist/esm/paypal-js.js\");\n/* harmony import */ var _checkFormInputs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkFormInputs */ \"./src/components/domManipulation/checkFormInputs.js\");\n\n\n\n\nfunction createPaypalButton() {\n  (0,_paypal_paypal_js__WEBPACK_IMPORTED_MODULE_0__.loadScript)({\n    clientId:\n      \"ATHk4BGa5jIYNAoKl17UpzirMfLQE2V97wj31VxvWCdAP91oyuD-N2kol2hZWrd0J-N2de6gPCo-tgRn\",\n    locale: \"en_US\",\n    buyerCountry: \"US\",\n  })\n    .then((paypal) => {\n      paypal\n        .Buttons({\n          // onInit is called when the button first renders\n          onInit: function (data, actions) {\n            // Disable the buttons\n            actions.disable();\n\n            // Listen for changes to the form\n            document.querySelector(\"form\").addEventListener('input', () => {\n                if(_checkFormInputs__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n                    actions.enable();\n                } else {\n                    actions.disable();\n                }\n            })\n          },\n\n          // onClick is called when the button is clicked\n          onClick: function () {\n            const formFields = document.querySelectorAll(\".form-field\");\n            let allFilled = true;\n\n            for (let field of formFields) {\n              if (field.value == \"\") {\n                allFilled = false;\n              }\n            }\n\n            if (!allFilled) {\n              alert(\"You have to fill all the form fields!\");\n            }\n          },\n        })\n        .render(\"#paypal-container\")\n        .catch((error) => {\n          console.error(\"failed to render the PayPal Buttons\", error);\n        });\n    })\n    .catch((error) => {\n      console.error(\"failed to load the PayPal JS SDK script\", error);\n    });\n}\n\n\n//# sourceURL=webpack://easypay/./src/components/domManipulation/createPaypalButton.js?");

/***/ }),

/***/ "./src/components/domManipulation/initializeQuantityListeners.js":
/*!***********************************************************************!*\
  !*** ./src/components/domManipulation/initializeQuantityListeners.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initializeQuantityListeners)\n/* harmony export */ });\n/* harmony import */ var _util_formatPrice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/formatPrice */ \"./src/util/formatPrice.js\");\n\n\nfunction initializeQuantityListeners() {\n  const btnsIncreaseQuantity = document.querySelectorAll(\n    \".btn-increase-quantity\"\n  );\n  const btnsDecreaseQuantity = document.querySelectorAll(\n    \".btn-decrease-quantity\"\n  );\n  const prices = document.querySelectorAll(\".prices\");\n  const cartTotal = document.querySelector(\"#cart-total\");\n\n  for (let button of btnsIncreaseQuantity) {\n    button.addEventListener(\"click\", () => {\n      const id = button.getAttribute(\"data-id\");\n      const priceTag = document.querySelector(`#item-price-${id}`);\n      const price = Number(priceTag.getAttribute(\"data-price\"));\n      const inputQuantity = document.querySelector(`#input-quantity-${id}`);\n      const cartTotal = document.querySelector(\"#cart-total\");\n      let total = 0;\n\n      if (inputQuantity.value < 5) {\n        inputQuantity.value++;\n        priceTag.setAttribute(\n          \"data-price-quantity\",\n          `${price * inputQuantity.value}`\n        );\n        priceTag.innerText = (0,_util_formatPrice__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(price * inputQuantity.value);\n        console.log(Number(cartTotal.getAttribute(\"data-total\")) + price);\n        cartTotal.setAttribute(\"data-total\", Number(cartTotal.getAttribute(\"data-total\")) + price);\n        cartTotal.innerText = (0,_util_formatPrice__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Number(cartTotal.getAttribute(\"data-total\")));\n      }\n    });\n  }\n\n  for (let button of btnsDecreaseQuantity) {\n    button.addEventListener(\"click\", () => {\n        const id = button.getAttribute(\"data-id\");\n        const priceTag = document.querySelector(`#item-price-${id}`);\n        const price = Number(priceTag.getAttribute(\"data-price\"));\n        const inputQuantity = document.querySelector(`#input-quantity-${id}`);\n        const cartTotal = document.querySelector(\"#cart-total\");\n        let total = 0;\n  \n        if (inputQuantity.value > 1) {\n          inputQuantity.value--;\n          priceTag.setAttribute(\n            \"data-price-quantity\",\n            `${price * inputQuantity.value}`\n          );\n          priceTag.innerText = (0,_util_formatPrice__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(price * inputQuantity.value);\n          console.log(Number(cartTotal.getAttribute(\"data-total\")) - price);\n          cartTotal.setAttribute(\"data-total\", Number(cartTotal.getAttribute(\"data-total\")) - price);\n          cartTotal.innerText = (0,_util_formatPrice__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Number(cartTotal.getAttribute(\"data-total\")));\n        }\n      });\n  }\n}\n\n\n//# sourceURL=webpack://easypay/./src/components/domManipulation/initializeQuantityListeners.js?");

/***/ }),

/***/ "./src/components/dummyObjects/dummyObjects.js":
/*!*****************************************************!*\
  !*** ./src/components/dummyObjects/dummyObjects.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cartItems: () => (/* binding */ cartItems),\n/* harmony export */   phoneOptions: () => (/* binding */ phoneOptions),\n/* harmony export */   stateOptions: () => (/* binding */ stateOptions)\n/* harmony export */ });\nconst cartItems = [\n  {\n    id: 1,\n    name: \"Throwback Hip Bag\",\n    picture:\n      \"https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg\",\n    price: 90.00,\n  },\n  {\n    id: 2,\n    name: \"Medium Stuff Satchel\",\n    picture:\n      \"https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg\",\n    price: 32.00,\n  },\n  {\n    id: 3,\n    name: \"Zip Tote Basket\",\n    picture:\n      \"https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-03.jpg\",\n    price: 100.00,\n  }\n];\n\nconst phoneOptions = [\n  {\n    value: \"MOBILE\",\n    name: \"Mobile\",\n  },\n  {\n    value: \"HOME\",\n    name: \"Home\",\n  },\n  {\n    value: \"WORK\",\n    name: \"Work\",\n  },\n];\n\nconst stateOptions = [\n  {\n    value: \"AL\",\n    name: \"Alabama\",\n  },\n  {\n    value: \"AK\",\n    name: \"Alaska\",\n  },\n  {\n    value: \"AZ\",\n    name: \"Arizona\",\n  },\n  {\n    value: \"AR\",\n    name: \"Arkansas\",\n  },\n  {\n    value: \"CA\",\n    name: \"California\",\n  },\n  {\n    value: \"CO\",\n    name: \"Colorado\",\n  },\n  {\n    value: \"CT\",\n    name: \"Connecticut\",\n  },\n  {\n    value: \"DE\",\n    name: \"Delaware\",\n  },\n  {\n    value: \"DC\",\n    name: \"District of Columbia\",\n  },\n  {\n    value: \"FL\",\n    name: \"Florida\",\n  },\n  {\n    value: \"GA\",\n    name: \"Georgia\",\n  },\n  {\n    value: \"HI\",\n    name: \"Hawaii\",\n  },\n  {\n    value: \"ID\",\n    name: \"Idaho\",\n  },\n  {\n    value: \"IL\",\n    name: \"Illinois\",\n  },\n  {\n    value: \"IN\",\n    name: \"Indiana\",\n  },\n  {\n    value: \"IN\",\n    name: \"Indiana\",\n  },\n  {\n    value: \"IA\",\n    name: \"Iowa\",\n  },\n  {\n    value: \"KS\",\n    name: \"Kansas\",\n  },\n  {\n    value: \"KY\",\n    name: \"Kentucky\",\n  },\n  {\n    value: \"LA\",\n    name: \"Louisiana\",\n  },\n  {\n    value: \"ME\",\n    name: \"Maine\",\n  },\n  {\n    value: \"MD\",\n    name: \"Maryland\",\n  },\n  {\n    value: \"MA\",\n    name: \"Massachusetts\",\n  },\n  {\n    value: \"MI\",\n    name: \"Michigan\",\n  },\n  {\n    value: \"MN\",\n    name: \"Minnesota\",\n  },\n  {\n    value: \"MS\",\n    name: \"Mississippi\",\n  },\n  {\n    value: \"MO\",\n    name: \"Missouri\",\n  },\n  {\n    value: \"MT\",\n    name: \"Montana\",\n  },\n  {\n    value: \"NE\",\n    name: \"Nebraska\",\n  },\n  {\n    value: \"NV\",\n    name: \"Nevada\",\n  },\n  {\n    value: \"NH\",\n    name: \"New Hampshire\",\n  },\n  {\n    value: \"NJ\",\n    name: \"New Jersey\",\n  },\n  {\n    value: \"NM\",\n    name: \"New Mexico\",\n  },\n  {\n    value: \"NY\",\n    name: \"New York\",\n  },\n  {\n    value: \"NC\",\n    name: \"North Carolina\",\n  },\n  {\n    value: \"ND\",\n    name: \"North Dakota\",\n  },\n  {\n    value: \"OH\",\n    name: \"Ohio\",\n  },\n  {\n    value: \"OK\",\n    name: \"Oklahoma\",\n  },\n  {\n    value: \"OR\",\n    name: \"Oregon\",\n  },\n  {\n    value: \"PA\",\n    name: \"Pennsylvania\",\n  },\n  {\n    value: \"PR\",\n    name: \"Puerto Rico\",\n  },\n  {\n    value: \"RI\",\n    name: \"Rhode Island\",\n  },\n  {\n    value: \"SC\",\n    name: \"South Carolina\",\n  },\n  {\n    value: \"SD\",\n    name: \"South Dakota\",\n  },\n  {\n    value: \"TN\",\n    name: \"Tennessee\",\n  },\n  {\n    value: \"TX\",\n    name: \"Texas\",\n  },\n  {\n    value: \"UT\",\n    name: \"Utah\",\n  },\n  {\n    value: \"VT\",\n    name: \"Vermont\",\n  },\n  {\n    value: \"VA\",\n    name: \"Virginia\",\n  },\n  {\n    value: \"WA\",\n    name: \"Washington\",\n  },\n  {\n    value: \"WV\",\n    name: \"West Virginia\",\n  },\n  {\n    value: \"WI\",\n    name: \"Wisconsin\",\n  },\n  {\n    value: \"WY\",\n    name: \"Wyoming\",\n  },\n];\n\n\n\n\n//# sourceURL=webpack://easypay/./src/components/dummyObjects/dummyObjects.js?");

/***/ }),

/***/ "./src/components/form/Field.js":
/*!**************************************!*\
  !*** ./src/components/form/Field.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Field)\n/* harmony export */ });\nfunction Field(id, type, label, size = 1) {\n  const container = document.createElement(\"div\");\n  container.setAttribute(\"class\", \"w-full relative mb-2\");\n\n  if (size > 1) {\n    container.classList.add(\"col-span-2\");\n    container.innerHTML = `\n        <input\n            class=\"form-field w-full py-1 pl-1 pr-8 rounded bg-white border border-gray-500 mb-6 focus-visible:outline-0 focus-visible:border-sky-500 focus-visible:placeholder:invisible peer\"\n            name=\"${id}\" id=\"${id}\" placeholder=\"${label} *\" type=\"${type}\" required>\n            <label id=\"lbl-${id}\" data-help=\"* This is a required field\"\n                class=\"opacity-0 peer-focus-visible:opacity-100 peer-focus-visible:animate-fade py-1 absolute bottom-[3.5rem] left-1 text-gray-700 peer-valid:opacity-100 peer-valid:after:content-['✔'] peer-valid:after:opacity-100 peer-valid:after:top-9 peer-valid:after:left-[26.5rem] peer-focus-visible:peer-invalid:after:content-[attr(data-help)] peer-focus-visible:peer-invalid:after:animate-help transition-all after:absolute after:left-0 after:top-16 after:text-sm after:whitespace-nowrap\"\n                for=\"${id}\">${label}\n            </label>\n    \n    `;\n  } else {\n    container.innerHTML = `\n        <input\n            class=\"form-field w-full py-1 pl-1 pr-8 rounded bg-white border border-gray-500 mb-6 focus-visible:outline-0 focus-visible:border-sky-500 focus-visible:placeholder:invisible peer\"\n            name=\"${id}\" id=\"${id}\" placeholder=\"${label} *\" type=\"${type}\" required>\n            <label id=\"lbl-${id}\" data-help=\"* This is a required field\"\n                class=\"opacity-0 peer-focus-visible:opacity-100 peer-focus-visible:animate-fade py-1 absolute bottom-[3.5rem] left-1 text-gray-700 peer-valid:opacity-100 peer-valid:after:content-['✔'] peer-valid:after:opacity-100 peer-valid:after:top-9 peer-valid:after:left-48 peer-focus-visible:peer-invalid:after:content-[attr(data-help)] peer-focus-visible:peer-invalid:after:animate-help transition-all after:absolute after:left-0 after:top-16 after:text-sm after:whitespace-nowrap\"\n                for=\"${id}\">${label}\n            </label>\n    \n    `;\n  }\n\n  return container;\n}\n\n\n//# sourceURL=webpack://easypay/./src/components/form/Field.js?");

/***/ }),

/***/ "./src/components/form/Form.js":
/*!*************************************!*\
  !*** ./src/components/form/Form.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Form)\n/* harmony export */ });\n/* harmony import */ var _dummyObjects_dummyObjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dummyObjects/dummyObjects */ \"./src/components/dummyObjects/dummyObjects.js\");\n/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Field */ \"./src/components/form/Field.js\");\n/* harmony import */ var _SelectField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SelectField */ \"./src/components/form/SelectField.js\");\n\n\n\n\nfunction Form() {\n  const container = document.createElement(\"div\");\n  container.setAttribute(\"class\",\"pt-4\");\n  container.innerHTML = `\n    <h2 class=\"mb-6 text-3xl text-left font-semibold text-gray-600 border-b-2 border-b-slate-600\">Buyer info</h2>\n  `;\n\n  const form = document.createElement(\"form\");\n  form.setAttribute(\"class\",\"mt-8 grid grid-cols-2 gap-4\")\n\n\n  form.appendChild((0,_Field__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"firstName\", \"text\", \"First name\"));\n  form.appendChild((0,_Field__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"lastName\", \"text\", \"Last name\"));\n  form.appendChild((0,_Field__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"email\", \"email\", \"Email\", 2));\n  form.appendChild((0,_SelectField__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"country\",\"Country/Region\", [{value: \"US\", name:\"United States\"}], 2));\n  form.appendChild((0,_SelectField__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"phoneType\",\"Phone type\", _dummyObjects_dummyObjects__WEBPACK_IMPORTED_MODULE_0__.phoneOptions));\n  form.appendChild((0,_Field__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"phoneNumber\", \"tel\", \"Phone number\"));\n  form.appendChild((0,_Field__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"streetAddress1\", \"text\", \"Street address\"));\n  form.appendChild((0,_Field__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"streetAddress2\", \"text\", \"Apt., ste., bldg.\"));\n  form.appendChild((0,_Field__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"city\", \"text\", \"City\"));\n  form.appendChild((0,_SelectField__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"state\",\"State\", _dummyObjects_dummyObjects__WEBPACK_IMPORTED_MODULE_0__.stateOptions));\n  form.appendChild((0,_Field__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"zipCode\", \"number\", \"Zip code\", 2));\n\n  container.appendChild(form);\n\n  return container;\n}\n\n\n//# sourceURL=webpack://easypay/./src/components/form/Form.js?");

/***/ }),

/***/ "./src/components/form/SelectField.js":
/*!********************************************!*\
  !*** ./src/components/form/SelectField.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SelectField)\n/* harmony export */ });\nfunction SelectField(id, label, options, size = 1) {\n  const container = document.createElement(\"div\");\n  container.setAttribute(\"class\", \"w-full relative mb-6\");\n\n  if (size > 1) {\n    container.classList.add(\"col-span-2\");\n  }\n\n  const select = document.createElement(\"select\");\n  select.setAttribute(\n    \"class\",\n    \"form-field bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded focus-visible:outline-0 focus-visible:border-sky-500 block w-full p-1\"\n  );\n  select.required = true;\n  select.innerHTML = `<option value=\"\" selected>${label}</option>`;\n\n  for (let option of options) {\n    select.innerHTML += `\n        <option value=\"${option.value}\">${option.name}</option>\n        `;\n  }\n\n  container.appendChild(select);\n\n  return container;\n}\n\n\n//# sourceURL=webpack://easypay/./src/components/form/SelectField.js?");

/***/ }),

/***/ "./src/components/toolbar/Toolbar.js":
/*!*******************************************!*\
  !*** ./src/components/toolbar/Toolbar.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Toolbar)\n/* harmony export */ });\nfunction Toolbar() {\n  const container = document.createElement(\"div\");\n  container.setAttribute(\"class\", \"fixed z-50 top-0 left-0 right-0 w-full bg-sky-500 flex justify-between items-center drop-shadow-lg\")\n  container.innerHTML = `\n        <h1 class=\"font-serif font-black text-3xl text-white py-4 px-6 cursor-pointer bg-amber-400 rounded-e-full hover:bg-amber-500 hover:text-slate-100 transition-all\"><i class=\"fa-solid fa-shop\"></i>easyPay</h1>\n        <div class=\"relative text-gray-600\">\n            <input type=\"search\" name=\"search\" placeholder=\"Search\" class=\"bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none\">\n            <button type=\"submit\" class=\"absolute right-0 top-0 mt-3 mr-4\">\n                <svg class=\"h-4 w-4 fill-current\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 56.966 56.966\" style=\"enable-background:new 0 0 56.966 56.966;\" xml:space=\"preserve\" width=\"512px\" height=\"512px\">\n                    <path d=\"M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z\"/>\n                </svg>\n            </button>\n        </div>\n        <button type=\"button\" class=\"bg-amber-400 py-4 px-6 rounded-s-full hover:bg-amber-500 hover:text-slate-100 transition-all\"><i class=\"fa-solid fa-cart-shopping text-white\"></i></button>\n    `;\n\n  return container;\n}\n\n\n//# sourceURL=webpack://easypay/./src/components/toolbar/Toolbar.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/App */ \"./src/components/App.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    (0,_components_App__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n});\n\n//# sourceURL=webpack://easypay/./src/index.js?");

/***/ }),

/***/ "./src/util/formatPrice.js":
/*!*********************************!*\
  !*** ./src/util/formatPrice.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ formatPrice)\n/* harmony export */ });\nfunction formatPrice(price) {\n    let USDollar = new Intl.NumberFormat('en-US', {\n        style: 'currency',\n        currency: 'USD'\n    });\n\n    return USDollar.format(price);\n}\n\n\n//# sourceURL=webpack://easypay/./src/util/formatPrice.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;