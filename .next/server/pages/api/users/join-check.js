"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/users/join-check";
exports.ids = ["pages/api/users/join-check"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "(api)/./lib/server/client.ts":
/*!******************************!*\
  !*** ./lib/server/client.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = global.client || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) global.client = client;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvc2VydmVyL2NsaWVudC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEM7QUFNOUMsTUFBTUMsTUFBTSxHQUFHQyxNQUFNLENBQUNELE1BQU0sSUFBSSxJQUFJRCx3REFBWSxFQUFFO0FBRWxELElBQUlHLElBQXNDLEVBQUVELE1BQU0sQ0FBQ0QsTUFBTSxHQUFHQSxNQUFNLENBQUM7QUFFbkUsaUVBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1wcmlzbWEtdHlwZXNjcmlwdC10YWlsd2luZC1ibHVlcHJpbnQvLi9saWIvc2VydmVyL2NsaWVudC50cz8yMWM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIHZhciBjbGllbnQ6IFByaXNtYUNsaWVudCB8IHVuZGVmaW5lZDtcbn1cblxuY29uc3QgY2xpZW50ID0gZ2xvYmFsLmNsaWVudCB8fCBuZXcgUHJpc21hQ2xpZW50KCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSBnbG9iYWwuY2xpZW50ID0gY2xpZW50O1xuXG5leHBvcnQgZGVmYXVsdCBjbGllbnQ7XG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiY2xpZW50IiwiZ2xvYmFsIiwicHJvY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/server/client.ts\n");

/***/ }),

/***/ "(api)/./lib/server/withHandler.ts":
/*!***********************************!*\
  !*** ./lib/server/withHandler.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ withHandler)\n/* harmony export */ });\nfunction withHandler({ methods , isPrivate , handler  }) {\n    return async function(req, res) {\n        if (req.method && !methods.includes(req.method)) {\n            return res.status(405).end();\n        }\n        if (isPrivate && !req.session.user) {\n            res.status(401).json({\n                ok: false,\n                error: \"Piz log in.\"\n            });\n        }\n        try {\n            await handler(req, res);\n        } catch (error) {\n            return res.status(500).json({\n                error\n            });\n        }\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvc2VydmVyL3dpdGhIYW5kbGVyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFjZSxTQUFTQSxXQUFXLENBQUMsRUFDbENDLE9BQU8sR0FDUEMsU0FBUyxHQUNUQyxPQUFPLEdBQ0ksRUFBRTtJQUNiLE9BQU8sZUFDTEMsR0FBbUIsRUFDbkJDLEdBQW9CLEVBQ047UUFDZCxJQUFJRCxHQUFHLENBQUNFLE1BQU0sSUFBSSxDQUFDTCxPQUFPLENBQUNNLFFBQVEsQ0FBQ0gsR0FBRyxDQUFDRSxNQUFNLENBQVEsRUFBRTtZQUN0RCxPQUFPRCxHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsR0FBRyxFQUFFLENBQUM7U0FDOUI7UUFDRCxJQUFJUCxTQUFTLElBQUksQ0FBQ0UsR0FBRyxDQUFDTSxPQUFPLENBQUNDLElBQUksRUFBRTtZQUNsQ04sR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNJLElBQUksQ0FBQztnQkFBRUMsRUFBRSxFQUFFLEtBQUs7Z0JBQUVDLEtBQUssRUFBRSxhQUFhO2FBQUUsQ0FBQyxDQUFDO1NBQzNEO1FBQ0QsSUFBSTtZQUNGLE1BQU1YLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLENBQUMsQ0FBQztTQUN6QixDQUFDLE9BQU9TLEtBQUssRUFBRTtZQUVkLE9BQU9ULEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDSSxJQUFJLENBQUM7Z0JBQUVFLEtBQUs7YUFBRSxDQUFDLENBQUM7U0FDeEM7S0FDRixDQUFDO0NBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtcHJpc21hLXR5cGVzY3JpcHQtdGFpbHdpbmQtYmx1ZXByaW50Ly4vbGliL3NlcnZlci93aXRoSGFuZGxlci50cz9hZTE1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlc3BvbnNlVHlwZSB7XG4gIG9rOiBib29sZWFuO1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbnR5cGUgbWV0aG9kID0gXCJHRVRcIiB8IFwiUE9TVFwiIHwgXCJERUxFVEVcIjtcblxuaW50ZXJmYWNlIENvbmZpZ1R5cGUge1xuICBtZXRob2RzOiBtZXRob2RbXTtcbiAgaGFuZGxlcjogKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB2b2lkO1xuICBpc1ByaXZhdGU/OiBib29sZWFuO1xufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aEhhbmRsZXIoe1xuICBtZXRob2RzLFxuICBpc1ByaXZhdGUsXG4gIGhhbmRsZXIsXG59OiBDb25maWdUeXBlKSB7XG4gIHJldHVybiBhc3luYyBmdW5jdGlvbiAoXG4gICAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgICByZXM6IE5leHRBcGlSZXNwb25zZVxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGlmIChyZXEubWV0aG9kICYmICFtZXRob2RzLmluY2x1ZGVzKHJlcS5tZXRob2QgYXMgYW55KSkge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5lbmQoKTtcbiAgICB9XG4gICAgaWYgKGlzUHJpdmF0ZSAmJiAhcmVxLnNlc3Npb24udXNlcikge1xuICAgICAgcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBvazogZmFsc2UsIGVycm9yOiBcIlBpeiBsb2cgaW4uXCIgfSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBoYW5kbGVyKHJlcSwgcmVzKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvciB9KTtcbiAgICB9XG4gIH07XG59XG4iXSwibmFtZXMiOlsid2l0aEhhbmRsZXIiLCJtZXRob2RzIiwiaXNQcml2YXRlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImluY2x1ZGVzIiwic3RhdHVzIiwiZW5kIiwic2Vzc2lvbiIsInVzZXIiLCJqc29uIiwib2siLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/server/withHandler.ts\n");

/***/ }),

/***/ "(api)/./pages/api/users/join-check.ts":
/*!***************************************!*\
  !*** ./pages/api/users/join-check.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_server_withHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/server/withHandler */ \"(api)/./lib/server/withHandler.ts\");\n/* harmony import */ var _lib_server_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/server/client */ \"(api)/./lib/server/client.ts\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nasync function handler(req, res) {\n    const { password , email  } = req.body;\n    const hashedPassword = await bcryptjs__WEBPACK_IMPORTED_MODULE_2__.hash(password, 7);\n    // const user = email ? { email } : { email };\n    const user = await _lib_server_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"].user.findUnique({\n        where: {\n            email\n        }\n    });\n    if (user) {\n    // user이 존제합니다. USER가입 페이지로 이동시키세요\n    } else {\n        //  user이 존제하지 않습니다. 닉네임 설정 화면으로 이동시켜 user을 create하세요.\n        const data = {\n            password,\n            email\n        };\n        const baseURL =  false ? 0 : \"http://localhost:3000\";\n        const response = await fetch(`${baseURL}/api/users/join-nickname`, {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(data)\n        });\n        return res.json({\n            ok: true,\n            message: \"user not found\"\n        });\n    }\n    // if (!user) return res.status(400).json({ ok: false });\n    return res.json({\n        ok: true\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_server_withHandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    methods: [\n        \"POST\"\n    ],\n    handler,\n    isPrivate: false\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlcnMvam9pbi1jaGVjay50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNvRTtBQUM1QjtBQUNMO0FBRW5DLGVBQWVHLE9BQU8sQ0FBQ0MsR0FBUSxFQUFFQyxHQUFrQyxFQUFFO0lBQ25FLE1BQU0sRUFBRUMsUUFBUSxHQUFFQyxLQUFLLEdBQUUsR0FBR0gsR0FBRyxDQUFDSSxJQUFJO0lBQ3BDLE1BQU1DLGNBQWMsR0FBRyxNQUFNUCwwQ0FBVyxDQUFDSSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ3JELDhDQUE4QztJQUM5QyxNQUFNSyxJQUFJLEdBQUcsTUFBTVYsMEVBQXNCLENBQUM7UUFDeENZLEtBQUssRUFBRTtZQUNMTixLQUFLO1NBQ047S0FDRixDQUFDO0lBQ0YsSUFBSUksSUFBSSxFQUFFO0lBQ1I7S0FDbUMsTUFBOUI7UUFDTDtRQUNBLE1BQU1HLElBQUksR0FBRztZQUNYUixRQUFRO1lBQ1JDLEtBQUs7U0FDTjtRQUNELE1BQU1RLE9BQU8sR0FDWEMsTUFBcUMsR0FDakMsQ0FBaUMsR0FDakMsdUJBQXVCO1FBRTdCLE1BQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUMsQ0FBQyxFQUFFSCxPQUFPLENBQUMsd0JBQXdCLENBQUMsRUFBRTtZQUNqRUksTUFBTSxFQUFFLE1BQU07WUFDZEMsT0FBTyxFQUFFO2dCQUFFLGNBQWMsRUFBRSxrQkFBa0I7YUFBRTtZQUMvQ1osSUFBSSxFQUFFYSxJQUFJLENBQUNDLFNBQVMsQ0FBQ1IsSUFBSSxDQUFDO1NBQzNCLENBQUM7UUFFRixPQUFPVCxHQUFHLENBQUNrQixJQUFJLENBQUM7WUFDZEMsRUFBRSxFQUFFLElBQUk7WUFDUkMsT0FBTyxFQUFFLGdCQUFnQjtTQUMxQixDQUFDLENBQUM7S0FDSjtJQUdELHlEQUF5RDtJQUN6RCxPQUFPcEIsR0FBRyxDQUFDa0IsSUFBSSxDQUFDO1FBQ2RDLEVBQUUsRUFBRSxJQUFJO0tBQ1QsQ0FBQyxDQUFDO0NBQ0o7QUFFRCxpRUFBZXhCLG1FQUFXLENBQUM7SUFDekIwQixPQUFPLEVBQUU7UUFBQyxNQUFNO0tBQUM7SUFDakJ2QixPQUFPO0lBQ1B3QixTQUFTLEVBQUUsS0FBSztDQUNqQixDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtcHJpc21hLXR5cGVzY3JpcHQtdGFpbHdpbmQtYmx1ZXByaW50Ly4vcGFnZXMvYXBpL3VzZXJzL2pvaW4tY2hlY2sudHM/NmY3YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB3aXRoSGFuZGxlciwgeyBSZXNwb25zZVR5cGUgfSBmcm9tIFwiQGxpYi9zZXJ2ZXIvd2l0aEhhbmRsZXJcIjtcbmltcG9ydCBjbGllbnQgZnJvbSBcIkBsaWIvc2VydmVyL2NsaWVudFwiO1xuaW1wb3J0ICogYXMgYmNyeXB0IGZyb20gXCJiY3J5cHRqc1wiO1xuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcTogYW55LCByZXM6IE5leHRBcGlSZXNwb25zZTxSZXNwb25zZVR5cGU+KSB7XG4gIGNvbnN0IHsgcGFzc3dvcmQsIGVtYWlsIH0gPSByZXEuYm9keTtcbiAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuaGFzaChwYXNzd29yZCwgNyk7XG4gIC8vIGNvbnN0IHVzZXIgPSBlbWFpbCA/IHsgZW1haWwgfSA6IHsgZW1haWwgfTtcbiAgY29uc3QgdXNlciA9IGF3YWl0IGNsaWVudC51c2VyLmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7XG4gICAgICBlbWFpbCxcbiAgICB9LFxuICB9KTtcbiAgaWYgKHVzZXIpIHtcbiAgICAvLyB1c2Vy7J20IOyhtOygnO2VqeuLiOuLpC4gVVNFUuqwgOyehSDtjpjsnbTsp4DroZwg7J2064+Z7Iuc7YKk7IS47JqUXG4gIH0gZWxzZSB7XG4gICAgLy8gIHVzZXLsnbQg7KG07KCc7ZWY7KeAIOyViuyKteuLiOuLpC4g64uJ64Sk7J6EIOyEpOyglSDtmZTrqbTsnLzroZwg7J2064+Z7Iuc7LycIHVzZXLsnYQgY3JlYXRl7ZWY7IS47JqULlxuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBwYXNzd29yZCxcbiAgICAgIGVtYWlsLFxuICAgIH07XG4gICAgY29uc3QgYmFzZVVSTCA9XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCJcbiAgICAgICAgPyBcImh0dHBzOi8veW91ci1wcm9kdWN0aW9uLXVybC5jb21cIlxuICAgICAgICA6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCI7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2Jhc2VVUkx9L2FwaS91c2Vycy9qb2luLW5pY2tuYW1lYCwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcy5qc29uKHtcbiAgICAgIG9rOiB0cnVlLFxuICAgICAgbWVzc2FnZTogXCJ1c2VyIG5vdCBmb3VuZFwiLFxuICAgIH0pO1xuICB9XG5cbiAgXG4gIC8vIGlmICghdXNlcikgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgb2s6IGZhbHNlIH0pO1xuICByZXR1cm4gcmVzLmpzb24oe1xuICAgIG9rOiB0cnVlLFxuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aEhhbmRsZXIoe1xuICBtZXRob2RzOiBbXCJQT1NUXCJdLFxuICBoYW5kbGVyLFxuICBpc1ByaXZhdGU6IGZhbHNlLFxufSk7XG4iXSwibmFtZXMiOlsid2l0aEhhbmRsZXIiLCJjbGllbnQiLCJiY3J5cHQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwicGFzc3dvcmQiLCJlbWFpbCIsImJvZHkiLCJoYXNoZWRQYXNzd29yZCIsImhhc2giLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiZGF0YSIsImJhc2VVUkwiLCJwcm9jZXNzIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5IiwianNvbiIsIm9rIiwibWVzc2FnZSIsIm1ldGhvZHMiLCJpc1ByaXZhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/users/join-check.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/users/join-check.ts"));
module.exports = __webpack_exports__;

})();