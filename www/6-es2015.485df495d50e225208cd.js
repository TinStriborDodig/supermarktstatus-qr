(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"bGI/":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"startStatusTap",(function(){return startStatusTap}));var _core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("imtE");__webpack_require__("AfW+");const startStatusTap=()=>{const win=window;win.addEventListener("statusTap",()=>{Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.g)(()=>{const el=document.elementFromPoint(win.innerWidth/2,win.innerHeight/2);if(!el)return;const contentEl=el.closest("ion-content");contentEl&&contentEl.componentOnReady().then(()=>{Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.l)(()=>contentEl.scrollToTop(300))})})})}}}]);