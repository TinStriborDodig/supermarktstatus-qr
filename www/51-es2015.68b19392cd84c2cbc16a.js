(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{J3Yu:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ion_loading",(function(){return Loading}));var _core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("imtE"),_config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("AfW+"),_animation_56279521_js__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("aiEM"),__webpack_require__("1ym9")),_overlays_e336664a_js__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__("EV1M"),__webpack_require__("7TZ+")),_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("Dl6n"),_index_3476b023_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("YtD4");const iosEnterAnimation=baseEl=>{const baseAnimation=Object(_animation_56279521_js__WEBPACK_IMPORTED_MODULE_3__.a)(),backdropAnimation=Object(_animation_56279521_js__WEBPACK_IMPORTED_MODULE_3__.a)(),wrapperAnimation=Object(_animation_56279521_js__WEBPACK_IMPORTED_MODULE_3__.a)();return backdropAnimation.addElement(baseEl.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),wrapperAnimation.addElement(baseEl.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),baseAnimation.addElement(baseEl).easing("ease-in-out").duration(200).addAnimation([backdropAnimation,wrapperAnimation])},iosLeaveAnimation=baseEl=>{const baseAnimation=Object(_animation_56279521_js__WEBPACK_IMPORTED_MODULE_3__.a)(),backdropAnimation=Object(_animation_56279521_js__WEBPACK_IMPORTED_MODULE_3__.a)(),wrapperAnimation=Object(_animation_56279521_js__WEBPACK_IMPORTED_MODULE_3__.a)();return backdropAnimation.addElement(baseEl.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),wrapperAnimation.addElement(baseEl.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),baseAnimation.addElement(baseEl).easing("ease-in-out").duration(200).addAnimation([backdropAnimation,wrapperAnimation])},mdEnterAnimation=baseEl=>{const baseAnimation=Object(_animation_56279521_js__WEBPACK_IMPORTED_MODULE_3__.a)(),backdropAnimation=Object(_animation_56279521_js__WEBPACK_IMPORTED_MODULE_3__.a)(),wrapperAnimation=Object(_animation_56279521_js__WEBPACK_IMPORTED_MODULE_3__.a)();return backdropAnimation.addElement(baseEl.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),wrapperAnimation.addElement(baseEl.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),baseAnimation.addElement(baseEl).easing("ease-in-out").duration(200).addAnimation([backdropAnimation,wrapperAnimation])},mdLeaveAnimation=baseEl=>{const baseAnimation=Object(_animation_56279521_js__WEBPACK_IMPORTED_MODULE_3__.a)(),backdropAnimation=Object(_animation_56279521_js__WEBPACK_IMPORTED_MODULE_3__.a)(),wrapperAnimation=Object(_animation_56279521_js__WEBPACK_IMPORTED_MODULE_3__.a)();return backdropAnimation.addElement(baseEl.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),wrapperAnimation.addElement(baseEl.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),baseAnimation.addElement(baseEl).easing("ease-in-out").duration(200).addAnimation([backdropAnimation,wrapperAnimation])},Loading=class{constructor(hostRef){Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.k)(this,hostRef),this.presented=!1,this.mode=Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.d)(this),this.keyboardClose=!0,this.duration=0,this.backdropDismiss=!1,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onBackdropTap=()=>{this.dismiss(void 0,_overlays_e336664a_js__WEBPACK_IMPORTED_MODULE_5__.a)},Object(_overlays_e336664a_js__WEBPACK_IMPORTED_MODULE_5__.e)(this.el),this.didPresent=Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.e)(this,"ionLoadingDidPresent",7),this.willPresent=Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.e)(this,"ionLoadingWillPresent",7),this.willDismiss=Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.e)(this,"ionLoadingWillDismiss",7),this.didDismiss=Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.e)(this,"ionLoadingDidDismiss",7)}componentWillLoad(){if(void 0===this.spinner){const mode=Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.d)(this);this.spinner=_config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__.b.get("loadingSpinner",_config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__.b.get("spinner","ios"===mode?"lines":"crescent"))}}async present(){await Object(_overlays_e336664a_js__WEBPACK_IMPORTED_MODULE_5__.f)(this,"loadingEnter",iosEnterAnimation,mdEnterAnimation,void 0),this.duration>0&&(this.durationTimeout=setTimeout(()=>this.dismiss(),this.duration+10))}dismiss(data,role){return this.durationTimeout&&clearTimeout(this.durationTimeout),Object(_overlays_e336664a_js__WEBPACK_IMPORTED_MODULE_5__.g)(this,data,role,"loadingLeave",iosLeaveAnimation,mdLeaveAnimation)}onDidDismiss(){return Object(_overlays_e336664a_js__WEBPACK_IMPORTED_MODULE_5__.h)(this.el,"ionLoadingDidDismiss")}onWillDismiss(){return Object(_overlays_e336664a_js__WEBPACK_IMPORTED_MODULE_5__.h)(this.el,"ionLoadingWillDismiss")}render(){const{message:message,spinner:spinner}=this,mode=Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.d)(this);return Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.i)(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.a,{onIonBackdropTap:this.onBackdropTap,style:{zIndex:`${4e4+this.overlayIndex}`},class:Object.assign(Object.assign({},Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_6__.b)(this.cssClass)),{[mode]:!0,"loading-translucent":this.translucent})},Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.i)("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.i)("div",{class:"loading-wrapper",role:"dialog"},spinner&&Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.i)("div",{class:"loading-spinner"},Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.i)("ion-spinner",{name:spinner})),message&&Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.i)("div",{class:"loading-content",innerHTML:Object(_index_3476b023_js__WEBPACK_IMPORTED_MODULE_7__.a)(message)})))}get el(){return Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.f)(this)}static get style(){return".sc-ion-loading-ios-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-family:var(--ion-font-family,inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-ios-h{display:none}.loading-wrapper.sc-ion-loading-ios{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}.spinner-bubbles.sc-ion-loading-ios, .spinner-circles.sc-ion-loading-ios, .spinner-crescent.sc-ion-loading-ios, .spinner-dots.sc-ion-loading-ios, .spinner-lines.sc-ion-loading-ios, .spinner-lines-small.sc-ion-loading-ios{color:var(--spinner-color)}.sc-ion-loading-ios-h{--background:var(--ion-overlay-background-color,var(--ion-color-step-100,#f9f9f9));--max-width:270px;--max-height:90%;--spinner-color:var(--ion-color-step-600,#666);--backdrop-opacity:var(--ion-backdrop-opacity,0.3);color:var(--ion-text-color,#000);font-size:14px}.loading-wrapper.sc-ion-loading-ios{border-radius:8px;padding-left:34px;padding-right:34px;padding-top:24px;padding-bottom:24px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-wrapper.sc-ion-loading-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:34px;padding-inline-start:34px;-webkit-padding-end:34px;padding-inline-end:34px}}@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.loading-translucent.sc-ion-loading-ios-h .loading-wrapper.sc-ion-loading-ios{background-color:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.loading-content.sc-ion-loading-ios{font-weight:700}.loading-spinner.sc-ion-loading-ios + .loading-content.sc-ion-loading-ios{margin-left:16px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-spinner.sc-ion-loading-ios + .loading-content.sc-ion-loading-ios{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}"}}}}]);