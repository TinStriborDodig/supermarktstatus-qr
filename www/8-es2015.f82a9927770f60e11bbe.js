(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{a7BO:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"startTapClick",(function(){return startTapClick}));var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("aiEM");const startTapClick=config=>{let scrollingEl,activatableEle,activeRipple,activeDefer,lastTouch=10*-MOUSE_WAIT,lastActivated=0;const useRippleEffect=config.getBoolean("animated",!0)&&config.getBoolean("rippleEffect",!0),clearDefers=new WeakMap,onTouchEnd=ev=>{lastTouch=Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_0__.i)(ev),pointerUp(ev)},cancelActive=()=>{clearTimeout(activeDefer),activeDefer=void 0,activatableEle&&(removeActivated(!1),activatableEle=void 0)},pointerDown=ev=>{activatableEle||void 0!==scrollingEl&&null!==scrollingEl.parentElement||(scrollingEl=void 0,setActivatedElement(getActivatableTarget(ev),ev))},pointerUp=ev=>{setActivatedElement(void 0,ev)},setActivatedElement=(el,ev)=>{if(el&&el===activatableEle)return;clearTimeout(activeDefer),activeDefer=void 0;const{x:x,y:y}=Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_0__.j)(ev);if(activatableEle){if(clearDefers.has(activatableEle))throw new Error("internal error");activatableEle.classList.contains(ACTIVATED)||addActivated(activatableEle,x,y),removeActivated(!0)}if(el){const deferId=clearDefers.get(el);deferId&&(clearTimeout(deferId),clearDefers.delete(el));const delay=isInstant(el)?0:ADD_ACTIVATED_DEFERS;el.classList.remove(ACTIVATED),activeDefer=setTimeout(()=>{addActivated(el,x,y),activeDefer=void 0},delay)}activatableEle=el},addActivated=(el,x,y)=>{lastActivated=Date.now(),el.classList.add(ACTIVATED);const rippleEffect=useRippleEffect&&getRippleEffect(el);rippleEffect&&rippleEffect.addRipple&&(removeRipple(),activeRipple=rippleEffect.addRipple(x,y))},removeRipple=()=>{void 0!==activeRipple&&(activeRipple.then(remove=>remove()),activeRipple=void 0)},removeActivated=smooth=>{removeRipple();const active=activatableEle;if(!active)return;const time=CLEAR_STATE_DEFERS-Date.now()+lastActivated;if(smooth&&time>0&&!isInstant(active)){const deferId=setTimeout(()=>{active.classList.remove(ACTIVATED),clearDefers.delete(active)},CLEAR_STATE_DEFERS);clearDefers.set(active,deferId)}else active.classList.remove(ACTIVATED)},doc=document;doc.addEventListener("ionScrollStart",ev=>{scrollingEl=ev.target,cancelActive()}),doc.addEventListener("ionScrollEnd",()=>{scrollingEl=void 0}),doc.addEventListener("ionGestureCaptured",cancelActive),doc.addEventListener("touchstart",ev=>{lastTouch=Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_0__.i)(ev),pointerDown(ev)},!0),doc.addEventListener("touchcancel",onTouchEnd,!0),doc.addEventListener("touchend",onTouchEnd,!0),doc.addEventListener("mousedown",ev=>{const t=Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_0__.i)(ev)-MOUSE_WAIT;lastTouch<t&&pointerDown(ev)},!0),doc.addEventListener("mouseup",ev=>{const t=Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_0__.i)(ev)-MOUSE_WAIT;lastTouch<t&&pointerUp(ev)},!0)},getActivatableTarget=ev=>{if(!ev.composedPath)return ev.target.closest(".ion-activatable");{const path=ev.composedPath();for(let i=0;i<path.length-2;i++){const el=path[i];if(el.classList&&el.classList.contains("ion-activatable"))return el}}},isInstant=el=>el.classList.contains("ion-activatable-instant"),getRippleEffect=el=>{if(el.shadowRoot){const ripple=el.shadowRoot.querySelector("ion-ripple-effect");if(ripple)return ripple}return el.querySelector("ion-ripple-effect")},ACTIVATED="ion-activated",ADD_ACTIVATED_DEFERS=200,CLEAR_STATE_DEFERS=200,MOUSE_WAIT=2500}}]);