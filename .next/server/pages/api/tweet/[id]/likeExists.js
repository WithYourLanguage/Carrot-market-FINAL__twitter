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
exports.id = "pages/api/tweet/[id]/likeExists";
exports.ids = ["pages/api/tweet/[id]/likeExists"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "iron-session":
/*!*******************************!*\
  !*** external "iron-session" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("iron-session");;

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

/***/ "(api)/./lib/server/withSession.tsx":
/*!************************************!*\
  !*** ./lib/server/withSession.tsx ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"withApiSession\": () => (/* binding */ withApiSession)\n/* harmony export */ });\n/* harmony import */ var iron_session_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! iron-session/next */ \"(api)/./node_modules/iron-session/next/dist/index.mjs\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([iron_session_next__WEBPACK_IMPORTED_MODULE_0__]);\niron_session_next__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst cookieOptioons = {\n    cookieName: \"carrotsession\",\n    password: process.env.COOKIE_PASSWORD\n};\nfunction withApiSession(fn) {\n    return (0,iron_session_next__WEBPACK_IMPORTED_MODULE_0__.withIronSessionApiRoute)(fn, cookieOptioons);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvc2VydmVyL3dpdGhTZXNzaW9uLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE0RDtBQVU1RCxNQUFNQyxjQUFjLEdBQUc7SUFDckJDLFVBQVUsRUFBRSxlQUFlO0lBQzNCQyxRQUFRLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxlQUFlO0NBQ3RDO0FBRU0sU0FBU0MsY0FBYyxDQUFDQyxFQUFPLEVBQUU7SUFDdEMsT0FBT1IsMEVBQXVCLENBQUNRLEVBQUUsRUFBRVAsY0FBYyxDQUFDLENBQUM7Q0FDcEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtcHJpc21hLXR5cGVzY3JpcHQtdGFpbHdpbmQtYmx1ZXByaW50Ly4vbGliL3NlcnZlci93aXRoU2Vzc2lvbi50c3g/ZmJhOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3aXRoSXJvblNlc3Npb25BcGlSb3V0ZSB9IGZyb20gXCJpcm9uLXNlc3Npb24vbmV4dFwiO1xuXG5kZWNsYXJlIG1vZHVsZSBcImlyb24tc2Vzc2lvblwiIHtcbiAgaW50ZXJmYWNlIElyb25TZXNzaW9uRGF0YSB7XG4gICAgdXNlcj86IHtcbiAgICAgIGlkOiBudW1iZXI7XG4gICAgfTtcbiAgfVxufVxuXG5jb25zdCBjb29raWVPcHRpb29ucyA9IHtcbiAgY29va2llTmFtZTogXCJjYXJyb3RzZXNzaW9uXCIsXG4gIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5DT09LSUVfUEFTU1dPUkQhLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHdpdGhBcGlTZXNzaW9uKGZuOiBhbnkpIHtcbiAgcmV0dXJuIHdpdGhJcm9uU2Vzc2lvbkFwaVJvdXRlKGZuLCBjb29raWVPcHRpb29ucyk7XG59XG4iXSwibmFtZXMiOlsid2l0aElyb25TZXNzaW9uQXBpUm91dGUiLCJjb29raWVPcHRpb29ucyIsImNvb2tpZU5hbWUiLCJwYXNzd29yZCIsInByb2Nlc3MiLCJlbnYiLCJDT09LSUVfUEFTU1dPUkQiLCJ3aXRoQXBpU2Vzc2lvbiIsImZuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/server/withSession.tsx\n");

/***/ }),

/***/ "(api)/./pages/api/tweet/[id]/likeExists.ts":
/*!********************************************!*\
  !*** ./pages/api/tweet/[id]/likeExists.ts ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_server_withHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/server/withHandler */ \"(api)/./lib/server/withHandler.ts\");\n/* harmony import */ var _lib_server_withSession__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/server/withSession */ \"(api)/./lib/server/withSession.tsx\");\n/* harmony import */ var _lib_server_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/server/client */ \"(api)/./lib/server/client.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_server_withSession__WEBPACK_IMPORTED_MODULE_1__]);\n_lib_server_withSession__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nasync function handler(req, res) {\n    const { query: { id  } , session: { user  } ,  } = req;\n    if (isNaN(id)) return res.json({\n        ok: false\n    });\n    const favExists = await _lib_server_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"].fav.findFirst({\n        where: {\n            tweetId: Number(id),\n            user\n        }\n    });\n    return res.json({\n        ok: true,\n        favExists\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_server_withSession__WEBPACK_IMPORTED_MODULE_1__.withApiSession)((0,_lib_server_withHandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    methods: [\n        \"GET\"\n    ],\n    handler,\n    isPrivate: true\n})));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdHdlZXQvW2lkXS9saWtlRXhpc3RzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBa0Q7QUFDTztBQUVqQjtBQUV4QyxlQUFlRyxPQUFPLENBQUNDLEdBQVEsRUFBRUMsR0FBb0IsRUFBRTtJQUNyRCxNQUFNLEVBQ0pDLEtBQUssRUFBRSxFQUFFQyxFQUFFLEdBQUUsR0FDYkMsT0FBTyxFQUFFLEVBQUVDLElBQUksR0FBRSxLQUNsQixHQUFHTCxHQUFHO0lBRVAsSUFBSU0sS0FBSyxDQUFDSCxFQUFFLENBQUMsRUFBRSxPQUFPRixHQUFHLENBQUNNLElBQUksQ0FBQztRQUFFQyxFQUFFLEVBQUUsS0FBSztLQUFFLENBQUMsQ0FBQztJQUU5QyxNQUFNQyxTQUFTLEdBQUcsTUFBTVgsd0VBQW9CLENBQUM7UUFDM0NjLEtBQUssRUFBRTtZQUNMQyxPQUFPLEVBQUVDLE1BQU0sQ0FBQ1gsRUFBRSxDQUFDO1lBQ25CRSxJQUFJO1NBQ0w7S0FDRixDQUFDO0lBRUYsT0FBT0osR0FBRyxDQUFDTSxJQUFJLENBQUM7UUFDZEMsRUFBRSxFQUFFLElBQUk7UUFDUkMsU0FBUztLQUNWLENBQUMsQ0FBQztDQUNKO0FBQ0QsaUVBQWVaLHVFQUFjLENBQzNCRCxtRUFBVyxDQUFDO0lBQ1ZtQixPQUFPLEVBQUU7UUFBQyxLQUFLO0tBQUM7SUFDaEJoQixPQUFPO0lBQ1BpQixTQUFTLEVBQUUsSUFBSTtDQUNoQixDQUFDLENBQ0gsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1wcmlzbWEtdHlwZXNjcmlwdC10YWlsd2luZC1ibHVlcHJpbnQvLi9wYWdlcy9hcGkvdHdlZXQvW2lkXS9saWtlRXhpc3RzLnRzP2VkYjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdpdGhIYW5kbGVyIGZyb20gXCJAbGliL3NlcnZlci93aXRoSGFuZGxlclwiO1xuaW1wb3J0IHsgd2l0aEFwaVNlc3Npb24gfSBmcm9tIFwiQGxpYi9zZXJ2ZXIvd2l0aFNlc3Npb25cIjtcbmltcG9ydCB7IE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgY2xpZW50IGZyb20gXCJAbGliL3NlcnZlci9jbGllbnRcIjtcblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXE6IGFueSwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpIHtcbiAgY29uc3Qge1xuICAgIHF1ZXJ5OiB7IGlkIH0sXG4gICAgc2Vzc2lvbjogeyB1c2VyIH0sXG4gIH0gPSByZXE7XG5cbiAgaWYgKGlzTmFOKGlkKSkgcmV0dXJuIHJlcy5qc29uKHsgb2s6IGZhbHNlIH0pO1xuXG4gIGNvbnN0IGZhdkV4aXN0cyA9IGF3YWl0IGNsaWVudC5mYXYuZmluZEZpcnN0KHtcbiAgICB3aGVyZToge1xuICAgICAgdHdlZXRJZDogTnVtYmVyKGlkKSxcbiAgICAgIHVzZXIsXG4gICAgfSxcbiAgfSk7XG5cbiAgcmV0dXJuIHJlcy5qc29uKHtcbiAgICBvazogdHJ1ZSxcbiAgICBmYXZFeGlzdHMsXG4gIH0pO1xufVxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwaVNlc3Npb24oXG4gIHdpdGhIYW5kbGVyKHtcbiAgICBtZXRob2RzOiBbXCJHRVRcIl0sXG4gICAgaGFuZGxlcixcbiAgICBpc1ByaXZhdGU6IHRydWUsXG4gIH0pXG4pO1xuIl0sIm5hbWVzIjpbIndpdGhIYW5kbGVyIiwid2l0aEFwaVNlc3Npb24iLCJjbGllbnQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwicXVlcnkiLCJpZCIsInNlc3Npb24iLCJ1c2VyIiwiaXNOYU4iLCJqc29uIiwib2siLCJmYXZFeGlzdHMiLCJmYXYiLCJmaW5kRmlyc3QiLCJ3aGVyZSIsInR3ZWV0SWQiLCJOdW1iZXIiLCJtZXRob2RzIiwiaXNQcml2YXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/tweet/[id]/likeExists.ts\n");

/***/ }),

/***/ "(api)/./node_modules/iron-session/next/dist/index.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/iron-session/next/dist/index.mjs ***!
  \*******************************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"withIronSessionApiRoute\": () => (/* binding */ withIronSessionApiRoute),\n/* harmony export */   \"withIronSessionSsr\": () => (/* binding */ withIronSessionSsr)\n/* harmony export */ });\n/* harmony import */ var iron_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! iron-session */ \"iron-session\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([iron_session__WEBPACK_IMPORTED_MODULE_0__]);\niron_session__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// next/index.ts\n\n\n// src/getPropertyDescriptorForReqSession.ts\nfunction getPropertyDescriptorForReqSession(session) {\n  return {\n    enumerable: true,\n    get() {\n      return session;\n    },\n    set(value) {\n      const keys = Object.keys(value);\n      const currentKeys = Object.keys(session);\n      currentKeys.forEach((key) => {\n        if (!keys.includes(key)) {\n          delete session[key];\n        }\n      });\n      keys.forEach((key) => {\n        session[key] = value[key];\n      });\n    }\n  };\n}\n\n// next/index.ts\nfunction withIronSessionApiRoute(handler, options) {\n  return async function nextApiHandlerWrappedWithIronSession(req, res) {\n    let sessionOptions;\n    if (options instanceof Function) {\n      sessionOptions = await options(req, res);\n    } else {\n      sessionOptions = options;\n    }\n    const session = await (0,iron_session__WEBPACK_IMPORTED_MODULE_0__.getIronSession)(req, res, sessionOptions);\n    Object.defineProperty(\n      req,\n      \"session\",\n      getPropertyDescriptorForReqSession(session)\n    );\n    return handler(req, res);\n  };\n}\nfunction withIronSessionSsr(handler, options) {\n  return async function nextGetServerSidePropsHandlerWrappedWithIronSession(context) {\n    let sessionOptions;\n    if (options instanceof Function) {\n      sessionOptions = await options(context.req, context.res);\n    } else {\n      sessionOptions = options;\n    }\n    const session = await (0,iron_session__WEBPACK_IMPORTED_MODULE_0__.getIronSession)(\n      context.req,\n      context.res,\n      sessionOptions\n    );\n    Object.defineProperty(\n      context.req,\n      \"session\",\n      getPropertyDescriptorForReqSession(session)\n    );\n    return handler(context);\n  };\n}\n\n//# sourceMappingURL=index.mjs.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvaXJvbi1zZXNzaW9uL25leHQvZGlzdC9pbmRleC5tanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDOEM7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLDBCQUEwQiw0REFBYztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsMEJBQTBCLDREQUFjO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlFO0FBQ0Ysa0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtcHJpc21hLXR5cGVzY3JpcHQtdGFpbHdpbmQtYmx1ZXByaW50Ly4vbm9kZV9tb2R1bGVzL2lyb24tc2Vzc2lvbi9uZXh0L2Rpc3QvaW5kZXgubWpzPzI0ODgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbmV4dC9pbmRleC50c1xuaW1wb3J0IHsgZ2V0SXJvblNlc3Npb24gfSBmcm9tIFwiaXJvbi1zZXNzaW9uXCI7XG5cbi8vIHNyYy9nZXRQcm9wZXJ0eURlc2NyaXB0b3JGb3JSZXFTZXNzaW9uLnRzXG5mdW5jdGlvbiBnZXRQcm9wZXJ0eURlc2NyaXB0b3JGb3JSZXFTZXNzaW9uKHNlc3Npb24pIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldCgpIHtcbiAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgIH0sXG4gICAgc2V0KHZhbHVlKSB7XG4gICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuICAgICAgY29uc3QgY3VycmVudEtleXMgPSBPYmplY3Qua2V5cyhzZXNzaW9uKTtcbiAgICAgIGN1cnJlbnRLZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAoIWtleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgIGRlbGV0ZSBzZXNzaW9uW2tleV07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgc2Vzc2lvbltrZXldID0gdmFsdWVba2V5XTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn1cblxuLy8gbmV4dC9pbmRleC50c1xuZnVuY3Rpb24gd2l0aElyb25TZXNzaW9uQXBpUm91dGUoaGFuZGxlciwgb3B0aW9ucykge1xuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gbmV4dEFwaUhhbmRsZXJXcmFwcGVkV2l0aElyb25TZXNzaW9uKHJlcSwgcmVzKSB7XG4gICAgbGV0IHNlc3Npb25PcHRpb25zO1xuICAgIGlmIChvcHRpb25zIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgIHNlc3Npb25PcHRpb25zID0gYXdhaXQgb3B0aW9ucyhyZXEsIHJlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlc3Npb25PcHRpb25zID0gb3B0aW9ucztcbiAgICB9XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldElyb25TZXNzaW9uKHJlcSwgcmVzLCBzZXNzaW9uT3B0aW9ucyk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxuICAgICAgcmVxLFxuICAgICAgXCJzZXNzaW9uXCIsXG4gICAgICBnZXRQcm9wZXJ0eURlc2NyaXB0b3JGb3JSZXFTZXNzaW9uKHNlc3Npb24pXG4gICAgKTtcbiAgICByZXR1cm4gaGFuZGxlcihyZXEsIHJlcyk7XG4gIH07XG59XG5mdW5jdGlvbiB3aXRoSXJvblNlc3Npb25Tc3IoaGFuZGxlciwgb3B0aW9ucykge1xuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gbmV4dEdldFNlcnZlclNpZGVQcm9wc0hhbmRsZXJXcmFwcGVkV2l0aElyb25TZXNzaW9uKGNvbnRleHQpIHtcbiAgICBsZXQgc2Vzc2lvbk9wdGlvbnM7XG4gICAgaWYgKG9wdGlvbnMgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgc2Vzc2lvbk9wdGlvbnMgPSBhd2FpdCBvcHRpb25zKGNvbnRleHQucmVxLCBjb250ZXh0LnJlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlc3Npb25PcHRpb25zID0gb3B0aW9ucztcbiAgICB9XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldElyb25TZXNzaW9uKFxuICAgICAgY29udGV4dC5yZXEsXG4gICAgICBjb250ZXh0LnJlcyxcbiAgICAgIHNlc3Npb25PcHRpb25zXG4gICAgKTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG4gICAgICBjb250ZXh0LnJlcSxcbiAgICAgIFwic2Vzc2lvblwiLFxuICAgICAgZ2V0UHJvcGVydHlEZXNjcmlwdG9yRm9yUmVxU2Vzc2lvbihzZXNzaW9uKVxuICAgICk7XG4gICAgcmV0dXJuIGhhbmRsZXIoY29udGV4dCk7XG4gIH07XG59XG5leHBvcnQge1xuICB3aXRoSXJvblNlc3Npb25BcGlSb3V0ZSxcbiAgd2l0aElyb25TZXNzaW9uU3NyXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubWpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./node_modules/iron-session/next/dist/index.mjs\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/tweet/[id]/likeExists.ts"));
module.exports = __webpack_exports__;

})();