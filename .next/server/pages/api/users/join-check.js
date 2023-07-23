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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = global.client || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) global.client = client;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvc2VydmVyL2NsaWVudC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEM7QUFNOUMsTUFBTUMsTUFBTSxHQUFHQyxNQUFNLENBQUNELE1BQU0sSUFBSSxJQUFJRCx3REFBWSxFQUFFO0FBRWxELElBQUlHLElBQXNDLEVBQUVELE1BQU0sQ0FBQ0QsTUFBTSxHQUFHQSxNQUFNLENBQUM7QUFFbkUsaUVBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1wcmlzbWEtdHlwZXNjcmlwdC10YWlsd2luZC1ibHVlcHJpbnQvLi9saWIvc2VydmVyL2NsaWVudC50cz8yMWM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xyXG5cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gIHZhciBjbGllbnQ6IFByaXNtYUNsaWVudCB8IHVuZGVmaW5lZDtcclxufVxyXG5cclxuY29uc3QgY2xpZW50ID0gZ2xvYmFsLmNsaWVudCB8fCBuZXcgUHJpc21hQ2xpZW50KCk7XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikgZ2xvYmFsLmNsaWVudCA9IGNsaWVudDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsaWVudDtcclxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsImNsaWVudCIsImdsb2JhbCIsInByb2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/server/client.ts\n");

/***/ }),

/***/ "(api)/./lib/server/withHandler.ts":
/*!***********************************!*\
  !*** ./lib/server/withHandler.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ withHandler)\n/* harmony export */ });\nfunction withHandler({ methods , isPrivate , handler  }) {\n    return async function(req, res) {\n        if (req.method && !methods.includes(req.method)) {\n            return res.status(405).end();\n        }\n        if (isPrivate && !req.session.user) {\n            res.status(401).json({\n                ok: false,\n                error: \"Piz log in.\"\n            });\n        }\n        try {\n            await handler(req, res);\n        } catch (error) {\n            return res.status(500).json({\n                error\n            });\n        }\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvc2VydmVyL3dpdGhIYW5kbGVyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFjZSxTQUFTQSxXQUFXLENBQUMsRUFDbENDLE9BQU8sR0FDUEMsU0FBUyxHQUNUQyxPQUFPLEdBQ0ksRUFBRTtJQUNiLE9BQU8sZUFDTEMsR0FBbUIsRUFDbkJDLEdBQW9CLEVBQ047UUFDZCxJQUFJRCxHQUFHLENBQUNFLE1BQU0sSUFBSSxDQUFDTCxPQUFPLENBQUNNLFFBQVEsQ0FBQ0gsR0FBRyxDQUFDRSxNQUFNLENBQVEsRUFBRTtZQUN0RCxPQUFPRCxHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsR0FBRyxFQUFFLENBQUM7U0FDOUI7UUFDRCxJQUFJUCxTQUFTLElBQUksQ0FBQ0UsR0FBRyxDQUFDTSxPQUFPLENBQUNDLElBQUksRUFBRTtZQUNsQ04sR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNJLElBQUksQ0FBQztnQkFBRUMsRUFBRSxFQUFFLEtBQUs7Z0JBQUVDLEtBQUssRUFBRSxhQUFhO2FBQUUsQ0FBQyxDQUFDO1NBQzNEO1FBQ0QsSUFBSTtZQUNGLE1BQU1YLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLENBQUMsQ0FBQztTQUN6QixDQUFDLE9BQU9TLEtBQUssRUFBRTtZQUVkLE9BQU9ULEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDSSxJQUFJLENBQUM7Z0JBQUVFLEtBQUs7YUFBRSxDQUFDLENBQUM7U0FDeEM7S0FDRixDQUFDO0NBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtcHJpc21hLXR5cGVzY3JpcHQtdGFpbHdpbmQtYmx1ZXByaW50Ly4vbGliL3NlcnZlci93aXRoSGFuZGxlci50cz9hZTE1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZXNwb25zZVR5cGUge1xyXG4gIG9rOiBib29sZWFuO1xyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxufVxyXG5cclxudHlwZSBtZXRob2QgPSBcIkdFVFwiIHwgXCJQT1NUXCIgfCBcIkRFTEVURVwiO1xyXG5cclxuaW50ZXJmYWNlIENvbmZpZ1R5cGUge1xyXG4gIG1ldGhvZHM6IG1ldGhvZFtdO1xyXG4gIGhhbmRsZXI6IChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4gdm9pZDtcclxuICBpc1ByaXZhdGU/OiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhIYW5kbGVyKHtcclxuICBtZXRob2RzLFxyXG4gIGlzUHJpdmF0ZSxcclxuICBoYW5kbGVyLFxyXG59OiBDb25maWdUeXBlKSB7XHJcbiAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uIChcclxuICAgIHJlcTogTmV4dEFwaVJlcXVlc3QsXHJcbiAgICByZXM6IE5leHRBcGlSZXNwb25zZVxyXG4gICk6IFByb21pc2U8YW55PiB7XHJcbiAgICBpZiAocmVxLm1ldGhvZCAmJiAhbWV0aG9kcy5pbmNsdWRlcyhyZXEubWV0aG9kIGFzIGFueSkpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5lbmQoKTtcclxuICAgIH1cclxuICAgIGlmIChpc1ByaXZhdGUgJiYgIXJlcS5zZXNzaW9uLnVzZXIpIHtcclxuICAgICAgcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBvazogZmFsc2UsIGVycm9yOiBcIlBpeiBsb2cgaW4uXCIgfSk7XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBoYW5kbGVyKHJlcSwgcmVzKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvciB9KTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ3aXRoSGFuZGxlciIsIm1ldGhvZHMiLCJpc1ByaXZhdGUiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiaW5jbHVkZXMiLCJzdGF0dXMiLCJlbmQiLCJzZXNzaW9uIiwidXNlciIsImpzb24iLCJvayIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/server/withHandler.ts\n");

/***/ }),

/***/ "(api)/./pages/api/users/join-check.ts":
/*!***************************************!*\
  !*** ./pages/api/users/join-check.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_server_withHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/server/withHandler */ \"(api)/./lib/server/withHandler.ts\");\n/* harmony import */ var _lib_server_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/server/client */ \"(api)/./lib/server/client.ts\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nasync function handler(req, res) {\n    const { password , email  } = req.body;\n    const hashedPassword = await bcryptjs__WEBPACK_IMPORTED_MODULE_2__.hash(password, 7);\n    // const user = email ? { email } : { email };\n    const user = await _lib_server_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"].user.findUnique({\n        where: {\n            email\n        }\n    });\n    if (user) {\n    // user이 존제합니다. USER가입 페이지로 이동시키세요\n    } else {\n        //  user이 존제하지 않습니다. 닉네임 설정 화면으로 이동시켜 user을 create하세요.\n        const data = {\n            password,\n            email\n        };\n        const baseURL =  false ? 0 : \"http://localhost:3000\";\n        const response = await fetch(`${baseURL}/api/users/join-nickname`, {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(data)\n        });\n        return res.json({\n            ok: true,\n            message: \"user not found\"\n        });\n    }\n    // if (!user) return res.status(400).json({ ok: false });\n    return res.json({\n        ok: true\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_server_withHandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    methods: [\n        \"POST\"\n    ],\n    handler,\n    isPrivate: false\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlcnMvam9pbi1jaGVjay50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNvRTtBQUM1QjtBQUNMO0FBRW5DLGVBQWVHLE9BQU8sQ0FBQ0MsR0FBUSxFQUFFQyxHQUFrQyxFQUFFO0lBQ25FLE1BQU0sRUFBRUMsUUFBUSxHQUFFQyxLQUFLLEdBQUUsR0FBR0gsR0FBRyxDQUFDSSxJQUFJO0lBQ3BDLE1BQU1DLGNBQWMsR0FBRyxNQUFNUCwwQ0FBVyxDQUFDSSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ3JELDhDQUE4QztJQUM5QyxNQUFNSyxJQUFJLEdBQUcsTUFBTVYsMEVBQXNCLENBQUM7UUFDeENZLEtBQUssRUFBRTtZQUNMTixLQUFLO1NBQ047S0FDRixDQUFDO0lBQ0YsSUFBSUksSUFBSSxFQUFFO0lBQ1I7S0FDbUMsTUFBOUI7UUFDTDtRQUNBLE1BQU1HLElBQUksR0FBRztZQUNYUixRQUFRO1lBQ1JDLEtBQUs7U0FDTjtRQUNELE1BQU1RLE9BQU8sR0FDWEMsTUFBcUMsR0FDakMsQ0FBaUMsR0FDakMsdUJBQXVCO1FBRTdCLE1BQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUMsQ0FBQyxFQUFFSCxPQUFPLENBQUMsd0JBQXdCLENBQUMsRUFBRTtZQUNqRUksTUFBTSxFQUFFLE1BQU07WUFDZEMsT0FBTyxFQUFFO2dCQUFFLGNBQWMsRUFBRSxrQkFBa0I7YUFBRTtZQUMvQ1osSUFBSSxFQUFFYSxJQUFJLENBQUNDLFNBQVMsQ0FBQ1IsSUFBSSxDQUFDO1NBQzNCLENBQUM7UUFFRixPQUFPVCxHQUFHLENBQUNrQixJQUFJLENBQUM7WUFDZEMsRUFBRSxFQUFFLElBQUk7WUFDUkMsT0FBTyxFQUFFLGdCQUFnQjtTQUMxQixDQUFDLENBQUM7S0FDSjtJQUdELHlEQUF5RDtJQUN6RCxPQUFPcEIsR0FBRyxDQUFDa0IsSUFBSSxDQUFDO1FBQ2RDLEVBQUUsRUFBRSxJQUFJO0tBQ1QsQ0FBQyxDQUFDO0NBQ0o7QUFFRCxpRUFBZXhCLG1FQUFXLENBQUM7SUFDekIwQixPQUFPLEVBQUU7UUFBQyxNQUFNO0tBQUM7SUFDakJ2QixPQUFPO0lBQ1B3QixTQUFTLEVBQUUsS0FBSztDQUNqQixDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtcHJpc21hLXR5cGVzY3JpcHQtdGFpbHdpbmQtYmx1ZXByaW50Ly4vcGFnZXMvYXBpL3VzZXJzL2pvaW4tY2hlY2sudHM/NmY3YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHdpdGhIYW5kbGVyLCB7IFJlc3BvbnNlVHlwZSB9IGZyb20gXCJAbGliL3NlcnZlci93aXRoSGFuZGxlclwiO1xyXG5pbXBvcnQgY2xpZW50IGZyb20gXCJAbGliL3NlcnZlci9jbGllbnRcIjtcclxuaW1wb3J0ICogYXMgYmNyeXB0IGZyb20gXCJiY3J5cHRqc1wiO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXE6IGFueSwgcmVzOiBOZXh0QXBpUmVzcG9uc2U8UmVzcG9uc2VUeXBlPikge1xyXG4gIGNvbnN0IHsgcGFzc3dvcmQsIGVtYWlsIH0gPSByZXEuYm9keTtcclxuICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCA3KTtcclxuICAvLyBjb25zdCB1c2VyID0gZW1haWwgPyB7IGVtYWlsIH0gOiB7IGVtYWlsIH07XHJcbiAgY29uc3QgdXNlciA9IGF3YWl0IGNsaWVudC51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgd2hlcmU6IHtcclxuICAgICAgZW1haWwsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGlmICh1c2VyKSB7XHJcbiAgICAvLyB1c2Vy7J20IOyhtOygnO2VqeuLiOuLpC4gVVNFUuqwgOyehSDtjpjsnbTsp4DroZwg7J2064+Z7Iuc7YKk7IS47JqUXHJcbiAgfSBlbHNlIHtcclxuICAgIC8vICB1c2Vy7J20IOyhtOygnO2VmOyngCDslYrsirXri4jri6QuIOuLieuEpOyehCDshKTsoJUg7ZmU66m07Jy866GcIOydtOuPmeyLnOy8nCB1c2Vy7J2EIGNyZWF0Ze2VmOyEuOyalC5cclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIHBhc3N3b3JkLFxyXG4gICAgICBlbWFpbCxcclxuICAgIH07XHJcbiAgICBjb25zdCBiYXNlVVJMID1cclxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiXHJcbiAgICAgICAgPyBcImh0dHBzOi8veW91ci1wcm9kdWN0aW9uLXVybC5jb21cIlxyXG4gICAgICAgIDogXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIjtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2Jhc2VVUkx9L2FwaS91c2Vycy9qb2luLW5pY2tuYW1lYCwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHJlcy5qc29uKHtcclxuICAgICAgb2s6IHRydWUsXHJcbiAgICAgIG1lc3NhZ2U6IFwidXNlciBub3QgZm91bmRcIixcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgXHJcbiAgLy8gaWYgKCF1c2VyKSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBvazogZmFsc2UgfSk7XHJcbiAgcmV0dXJuIHJlcy5qc29uKHtcclxuICAgIG9rOiB0cnVlLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoSGFuZGxlcih7XHJcbiAgbWV0aG9kczogW1wiUE9TVFwiXSxcclxuICBoYW5kbGVyLFxyXG4gIGlzUHJpdmF0ZTogZmFsc2UsXHJcbn0pO1xyXG4iXSwibmFtZXMiOlsid2l0aEhhbmRsZXIiLCJjbGllbnQiLCJiY3J5cHQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwicGFzc3dvcmQiLCJlbWFpbCIsImJvZHkiLCJoYXNoZWRQYXNzd29yZCIsImhhc2giLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiZGF0YSIsImJhc2VVUkwiLCJwcm9jZXNzIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5IiwianNvbiIsIm9rIiwibWVzc2FnZSIsIm1ldGhvZHMiLCJpc1ByaXZhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/users/join-check.ts\n");

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