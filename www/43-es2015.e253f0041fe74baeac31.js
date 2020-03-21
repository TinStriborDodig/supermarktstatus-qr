(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{nf6t:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ion_infinite_scroll",(function(){return InfiniteScroll})),__webpack_require__.d(__webpack_exports__,"ion_infinite_scroll_content",(function(){return InfiniteScrollContent}));var _core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("imtE"),_config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("AfW+"),_index_3476b023_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("YtD4");const InfiniteScroll=class{constructor(hostRef){Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.k)(this,hostRef),this.thrPx=0,this.thrPc=0,this.didFire=!1,this.isBusy=!1,this.isLoading=!1,this.threshold="15%",this.disabled=!1,this.position="bottom",this.onScroll=()=>{const scrollEl=this.scrollEl;if(!scrollEl||!this.canStart())return 1;const infiniteHeight=this.el.offsetHeight;if(0===infiniteHeight)return 2;const scrollTop=scrollEl.scrollTop,height=scrollEl.offsetHeight,threshold=0!==this.thrPc?height*this.thrPc:this.thrPx;if(("bottom"===this.position?scrollEl.scrollHeight-infiniteHeight-scrollTop-threshold-height:scrollTop-infiniteHeight-threshold)<0){if(!this.didFire)return this.isLoading=!0,this.didFire=!0,this.ionInfinite.emit(),3}else this.didFire=!1;return 4},this.ionInfinite=Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.e)(this,"ionInfinite",7)}thresholdChanged(){const val=this.threshold;val.lastIndexOf("%")>-1?(this.thrPx=0,this.thrPc=parseFloat(val)/100):(this.thrPx=parseFloat(val),this.thrPc=0)}disabledChanged(){const disabled=this.disabled;disabled&&(this.isLoading=!1,this.isBusy=!1),this.enableScrollEvents(!disabled)}async connectedCallback(){const contentEl=this.el.closest("ion-content");contentEl?(this.scrollEl=await contentEl.getScrollElement(),this.thresholdChanged(),this.disabledChanged(),"top"===this.position&&Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.l)(()=>{this.scrollEl&&(this.scrollEl.scrollTop=this.scrollEl.scrollHeight-this.scrollEl.clientHeight)})):console.error("<ion-infinite-scroll> must be used inside an <ion-content>")}disconnectedCallback(){this.enableScrollEvents(!1),this.scrollEl=void 0}async complete(){const scrollEl=this.scrollEl;if(this.isLoading&&scrollEl&&(this.isLoading=!1,"top"===this.position)){this.isBusy=!0;const prev=scrollEl.scrollHeight-scrollEl.scrollTop;requestAnimationFrame(()=>{Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.g)(()=>{const newScrollTop=scrollEl.scrollHeight-prev;requestAnimationFrame(()=>{Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.l)(()=>{scrollEl.scrollTop=newScrollTop,this.isBusy=!1})})})})}}canStart(){return!(this.disabled||this.isBusy||!this.scrollEl||this.isLoading)}enableScrollEvents(shouldListen){this.scrollEl&&(shouldListen?this.scrollEl.addEventListener("scroll",this.onScroll):this.scrollEl.removeEventListener("scroll",this.onScroll))}render(){const mode=Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.d)(this),disabled=this.disabled;return Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.i)(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.a,{class:{[mode]:!0,"infinite-scroll-loading":this.isLoading,"infinite-scroll-enabled":!disabled}})}get el(){return Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.f)(this)}static get watchers(){return{threshold:["thresholdChanged"],disabled:["disabledChanged"]}}static get style(){return"ion-infinite-scroll{display:none;width:100%}.infinite-scroll-enabled{display:block}"}},InfiniteScrollContent=class{constructor(hostRef){Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.k)(this,hostRef)}componentDidLoad(){if(void 0===this.loadingSpinner){const mode=Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.d)(this);this.loadingSpinner=_config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__.b.get("infiniteLoadingSpinner",_config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__.b.get("spinner","ios"===mode?"lines":"crescent"))}}render(){const mode=Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.d)(this);return Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.i)(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.a,{class:{[mode]:!0,[`infinite-scroll-content-${mode}`]:!0}},Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.i)("div",{class:"infinite-loading"},this.loadingSpinner&&Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.i)("div",{class:"infinite-loading-spinner"},Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.i)("ion-spinner",{name:this.loadingSpinner})),this.loadingText&&Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.i)("div",{class:"infinite-loading-text",innerHTML:Object(_index_3476b023_js__WEBPACK_IMPORTED_MODULE_2__.a)(this.loadingText)})))}static get style(){return"ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.infinite-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-ios .infinite-loading-text{color:var(--ion-color-step-600,#666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-crescent circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-small-ios line{stroke:var(--ion-color-step-600,#666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600,#666)}"}}}}]);