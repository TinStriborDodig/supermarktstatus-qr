(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{fSmE:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ion_backdrop",(function(){return Backdrop}));var _core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("imtE"),_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("AfW+"),__webpack_require__("aiEM")),_index_c38df685_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("AzGJ");const Backdrop=class{constructor(hostRef){Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.k)(this,hostRef),this.lastClick=-1e4,this.blocker=_index_c38df685_js__WEBPACK_IMPORTED_MODULE_3__.GESTURE_CONTROLLER.createBlocker({disableScroll:!0}),this.visible=!0,this.tappable=!0,this.stopPropagation=!0,this.ionBackdropTap=Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.e)(this,"ionBackdropTap",7)}connectedCallback(){this.stopPropagation&&this.blocker.block()}disconnectedCallback(){this.blocker.unblock()}onTouchStart(ev){this.lastClick=Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__.i)(ev),this.emitTap(ev)}onMouseDown(ev){this.lastClick<Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__.i)(ev)-2500&&this.emitTap(ev)}emitTap(ev){this.stopPropagation&&(ev.preventDefault(),ev.stopPropagation()),this.tappable&&this.ionBackdropTap.emit()}render(){const mode=Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.d)(this);return Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.i)(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.a,{tabindex:"-1",class:{[mode]:!0,"backdrop-hide":!this.visible,"backdrop-no-tappable":!this.tappable}})}static get style(){return":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color,#000)}"}}}}]);