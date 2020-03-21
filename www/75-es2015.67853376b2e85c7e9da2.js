(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{"3msy":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ion_segment",(function(){return Segment})),__webpack_require__.d(__webpack_exports__,"ion_segment_button",(function(){return SegmentButton}));var _core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("imtE"),_config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("AfW+"),_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("aiEM"),_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("Dl6n");const Segment=class{constructor(hostRef){Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.k)(this,hostRef),this.didInit=!1,this.activated=!1,this.disabled=!1,this.scrollable=!1,this.onClick=ev=>{const current=ev.target,previous=this.checked;this.value=current.value,previous&&this.scrollable&&this.checkButton(previous,current),this.checked=current},this.ionChange=Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.e)(this,"ionChange",7),this.ionSelect=Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.e)(this,"ionSelect",7),this.ionStyle=Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.e)(this,"ionStyle",7)}valueChanged(value,oldValue){this.ionSelect.emit({value:value}),(""!==oldValue||this.didInit)&&(this.activated?this.valueAfterGesture=value:this.ionChange.emit({value:value}))}disabledChanged(){this.gestureChanged();const buttons=this.getButtons();for(const button of buttons)button.disabled=this.disabled}gestureChanged(){this.gesture&&!this.scrollable&&this.gesture.enable(!this.disabled)}connectedCallback(){this.emitStyle()}componentWillLoad(){this.emitStyle()}async componentDidLoad(){this.setCheckedClasses(),this.gesture=(await Promise.resolve().then(__webpack_require__.bind(null,"AzGJ"))).createGesture({el:this.el,gestureName:"segment",gesturePriority:100,threshold:0,passive:!1,onStart:ev=>this.onStart(ev),onMove:ev=>this.onMove(ev),onEnd:ev=>this.onEnd(ev)}),this.gesture.enable(!this.scrollable),this.gestureChanged(),this.disabled&&this.disabledChanged(),this.didInit=!0}onStart(detail){this.activate(detail)}onMove(detail){this.setNextIndex(detail)}onEnd(detail){this.setActivated(!1);const checkedValidButton=this.setNextIndex(detail,!0);detail.event.stopImmediatePropagation(),checkedValidButton&&this.addRipple(detail);const value=this.valueAfterGesture;void 0!==value&&(this.ionChange.emit({value:value}),this.valueAfterGesture=void 0)}getButtons(){return Array.from(this.el.querySelectorAll("ion-segment-button"))}addRipple(detail){if(!_config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__.b.getBoolean("animated",!0)||!_config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__.b.getBoolean("rippleEffect",!0))return;const checked=this.getButtons().find(button=>button.value===this.value),ripple=(checked.shadowRoot||checked).querySelector("ion-ripple-effect");if(!ripple)return;const{x:x,y:y}=Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__.j)(detail.event);ripple.addRipple(x,y).then(remove=>remove())}setActivated(activated){this.getButtons().forEach(button=>{activated?button.classList.add("segment-button-activated"):button.classList.remove("segment-button-activated")}),this.activated=activated}activate(detail){const clicked=detail.event.target,checked=this.getButtons().find(button=>button.value===this.value);"ION-SEGMENT-BUTTON"===clicked.tagName&&(checked||(this.value=clicked.value),this.value===clicked.value&&this.setActivated(!0))}getIndicator(button){return(button.shadowRoot||button).querySelector(".segment-button-indicator")}checkButton(previous,current){const previousIndicator=this.getIndicator(previous),currentIndicator=this.getIndicator(current);if(null===previousIndicator||null===currentIndicator)return;const previousClientRect=previousIndicator.getBoundingClientRect(),currentClientRect=currentIndicator.getBoundingClientRect(),transform=`translate3d(${previousClientRect.left-currentClientRect.left}px, 0, 0) scaleX(${previousClientRect.width/currentClientRect.width})`;Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.l)(()=>{currentIndicator.classList.remove("segment-button-indicator-animated"),currentIndicator.style.setProperty("transform",transform),currentIndicator.getBoundingClientRect(),currentIndicator.classList.add("segment-button-indicator-animated"),currentIndicator.style.setProperty("transform","")}),this.value=current.value,this.setCheckedClasses()}setCheckedClasses(){const buttons=this.getButtons(),next=buttons.findIndex(button=>button.value===this.value)+1;this.checked=buttons.find(button=>button.value===this.value);for(const button of buttons)button.classList.remove("segment-button-after-checked");next<buttons.length&&buttons[next].classList.add("segment-button-after-checked")}setNextIndex(detail,isEnd=!1){const isRTL="rtl"===document.dir,activated=this.activated,buttons=this.getButtons(),index=buttons.findIndex(button=>button.value===this.value),previous=buttons[index];let current,nextIndex;if(-1===index)return;const rect=previous.getBoundingClientRect(),left=rect.left,width=rect.width,currentX=detail.currentX,nextEl=document.elementFromPoint(currentX,rect.top+rect.height/2);if(activated&&!isEnd){if(isRTL?currentX>left+width:currentX<left){const newIndex=index-1;newIndex>=0&&(nextIndex=newIndex)}else if((isRTL?currentX<left:currentX>left+width)&&activated&&!isEnd){const newIndex=index+1;newIndex<buttons.length&&(nextIndex=newIndex)}void 0===nextIndex||buttons[nextIndex].disabled||(current=buttons[nextIndex])}if(!activated&&isEnd&&(current=nextEl),null!=current){if("ION-SEGMENT"===current.tagName)return!1;previous!==current&&this.checkButton(previous,current)}return!0}emitStyle(){this.ionStyle.emit({segment:!0})}render(){const mode=Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.d)(this);return Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.i)(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.a,{onClick:this.onClick,class:Object.assign(Object.assign({},Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__.a)(this.color)),{[mode]:!0,"in-toolbar":Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__.c)("ion-toolbar",this.el),"in-toolbar-color":Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__.c)("ion-toolbar[color]",this.el),"segment-activated":this.activated,"segment-disabled":this.disabled,"segment-scrollable":this.scrollable})},Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.i)("slot",null))}get el(){return Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.f)(this)}static get watchers(){return{value:["valueChanged"],disabled:["disabledChanged"]}}static get style(){return":host{--ripple-color:currentColor;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:center;justify-content:center;width:100%;background:var(--background);font-family:var(--ion-font-family,inherit);text-align:center;contain:paint}:host(.segment-scrollable){-ms-flex-pack:start;justify-content:start;width:auto;overflow-x:scroll}:host(.segment-scrollable::-webkit-scrollbar){display:none}:host{--background:transparent}:host(.segment-scrollable) ::slotted(ion-segment-button){min-width:90px}"}};let ids=0;const SegmentButton=class{constructor(hostRef){Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.k)(this,hostRef),this.segmentEl=null,this.checked=!1,this.disabled=!1,this.layout="icon-top",this.type="button",this.value="ion-sb-"+ids++,this.updateState=()=>{this.segmentEl&&(this.checked=this.segmentEl.value===this.value)}}connectedCallback(){const segmentEl=this.segmentEl=this.el.closest("ion-segment");segmentEl&&(this.updateState(),segmentEl.addEventListener("ionSelect",this.updateState))}disconnectedCallback(){const segmentEl=this.segmentEl;segmentEl&&(segmentEl.removeEventListener("ionSelect",this.updateState),this.segmentEl=null)}get hasLabel(){return!!this.el.querySelector("ion-label")}get hasIcon(){return!!this.el.querySelector("ion-icon")}render(){const{checked:checked,type:type,disabled:disabled,hasIcon:hasIcon,hasLabel:hasLabel,layout:layout}=this,mode=Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.d)(this);return Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.i)(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.a,{"aria-disabled":disabled?"true":null,class:{[mode]:!0,"in-toolbar":Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__.c)("ion-toolbar",this.el),"in-toolbar-color":Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__.c)("ion-toolbar[color]",this.el),"in-segment":Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__.c)("ion-segment",this.el),"in-segment-color":Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__.c)("ion-segment[color]",this.el),"segment-button-has-label":hasLabel,"segment-button-has-icon":hasIcon,"segment-button-has-label-only":hasLabel&&!hasIcon,"segment-button-has-icon-only":hasIcon&&!hasLabel,"segment-button-disabled":disabled,"segment-button-checked":checked,[`segment-button-layout-${layout}`]:!0,"ion-activatable":!0,"ion-activatable-instant":!0,"ion-focusable":!0}},Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.i)("button",{type:type,"aria-pressed":checked?"true":null,class:"button-native",disabled:disabled},Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.i)("span",{class:"button-inner"},Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.i)("slot",null)),"md"===mode&&Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.i)("ion-ripple-effect",null)),Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.i)("div",{part:"indicator",class:{"segment-button-indicator":!0,"segment-button-indicator-animated":!0}},Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.i)("div",{part:"indicator-background",class:"segment-button-indicator-background"})))}get el(){return Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.f)(this)}static get style(){return':host{--color:initial;--color-hover:var(--color);--color-checked:var(--color);--color-disabled:var(--color);--padding-start:0;--padding-end:0;border-radius:var(--border-radius);-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-direction:column;flex-direction:column;background:var(--background);color:var(--color);text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none;cursor:pointer}.button-native,:host{display:-ms-flexbox;display:flex;position:relative;height:auto}.button-native{border-radius:0;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:var(--margin-start);margin-right:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-webkit-transform:translateZ(0);transform:translateZ(0);-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;min-width:inherit;max-width:inherit;min-height:inherit;max-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border:none;outline:none;background:transparent;contain:content;pointer-events:none;overflow:hidden;z-index:2}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native{margin-left:unset;margin-right:unset;-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end);padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native:after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}:host(.segment-button-checked){background:var(--background-checked);color:var(--color-checked)}:host(.segment-button-disabled){cursor:default;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native:after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover:hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native:after{background:var(--background-hover);opacity:var(--background-hover-opacity)}:host(.segment-button-checked:hover) .button-native{color:var(--color-checked)}}::slotted(ion-icon){-ms-flex-negative:0;flex-shrink:0;-ms-flex-order:-1;order:-1;pointer-events:none}::slotted(ion-label){display:block;-ms-flex-item-align:center;align-self:center;line-height:22px;text-overflow:ellipsis;white-space:nowrap;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}:host(.segment-button-layout-icon-top) .button-native{-ms-flex-direction:column;flex-direction:column}:host(.segment-button-layout-icon-start) .button-native{-ms-flex-direction:row;flex-direction:row}:host(.segment-button-layout-icon-end) .button-native{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.segment-button-layout-icon-bottom) .button-native{-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.segment-button-layout-icon-hide) ::slotted(ion-icon),:host(.segment-button-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color,var(--color-checked))}.segment-button-indicator{-webkit-transform-origin:left;transform-origin:left;position:absolute;opacity:0;-webkit-box-sizing:border-box;box-sizing:border-box;will-change:transform,opacity;pointer-events:none}.segment-button-indicator-background{width:100%;height:var(--indicator-height);-webkit-transform:var(--indicator-transform);transform:var(--indicator-transform);-webkit-box-shadow:var(--indicator-box-shadow);box-shadow:var(--indicator-box-shadow);pointer-events:none}.segment-button-indicator-animated{-webkit-transition:var(--indicator-transition);transition:var(--indicator-transition)}:host(.segment-button-checked) .segment-button-indicator{opacity:1}@media (prefers-reduced-motion:reduce){.segment-button-indicator-background{-webkit-transform:none;transform:none}.segment-button-indicator-animated{-webkit-transition:none;transition:none}}:host{--background:none;--background-checked:none;--background-hover:var(--color-checked);--background-focused:var(--color-checked);--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04;--color:rgba(var(--ion-text-color-rgb,0,0,0),0.6);--color-checked:var(--ion-color-primary,#3880ff);--indicator-box-shadow:none;--indicator-color:var(--color-checked);--indicator-height:2px;--indicator-transition:transform 250ms cubic-bezier(0.4,0,0.2,1);--indicator-transform:none;--padding-top:0;--padding-end:16px;--padding-bottom:0;--padding-start:16px;--transition:color 0.15s linear 0s,opacity 0.15s linear 0s;min-width:90px;max-width:360px;min-height:48px;border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);font-size:14px;font-weight:500;letter-spacing:.06em;line-height:40px;text-transform:uppercase}:host(.segment-button-disabled){opacity:.3}:host(.in-segment-color){background:none;color:rgba(var(--ion-text-color-rgb,0,0,0),.6)}:host(.in-segment-color) ion-ripple-effect{color:var(--ion-color-base)}:host(.in-segment-color) .segment-button-indicator-background{background:var(--ion-color-base)}:host(.in-segment-color.segment-button-checked) .button-native{color:var(--ion-color-base)}:host(.in-segment-color.ion-focused) .button-native:after{background:var(--ion-color-base)}@media (any-hover:hover){:host(.in-segment-color:hover) .button-native{color:rgba(var(--ion-text-color-rgb,0,0,0),.6)}:host(.in-segment-color:hover) .button-native:after{background:var(--ion-color-base)}:host(.in-segment-color.segment-button-checked:hover) .button-native{color:var(--ion-color-base)}}:host(.in-toolbar:not(.in-segment-color)){--background:var(--ion-toolbar-segment-background,none);--background-checked:var(--ion-toolbar-segment-background-checked,none);--color:var(--ion-toolbar-segment-color,rgba(var(--ion-text-color-rgb,0,0,0),0.6));--color-checked:var(--ion-toolbar-segment-color-checked,var(--ion-color-primary,#3880ff));--indicator-color:var(--ion-toolbar-segment-color-checked,var(--color-checked))}:host(.in-toolbar-color:not(.in-segment-color)) .button-native{color:rgba(var(--ion-color-contrast-rgb),.6)}:host(.in-toolbar-color.segment-button-checked:not(.in-segment-color)) .button-native{color:var(--ion-color-contrast)}@media (any-hover:hover){:host(.in-toolbar-color:not(.in-segment-color)) .button-native:after{background:var(--ion-color-contrast)}}::slotted(ion-icon){font-size:24px}::slotted(ion-icon),::slotted(ion-label){margin-top:12px;margin-bottom:12px}:host(.segment-button-layout-icon-bottom) ::slotted(ion-icon),:host(.segment-button-layout-icon-top) ::slotted(ion-label){margin-top:0}:host(.segment-button-layout-icon-bottom) ::slotted(ion-label),:host(.segment-button-layout-icon-top) ::slotted(ion-icon){margin-bottom:0}:host(.segment-button-layout-icon-start) ::slotted(ion-label){margin-left:8px;margin-right:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.segment-button-layout-icon-start) ::slotted(ion-label){margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:0;margin-inline-end:0}}:host(.segment-button-layout-icon-end) ::slotted(ion-label){margin-left:0;margin-right:8px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.segment-button-layout-icon-end) ::slotted(ion-label){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px}}:host(.segment-button-has-icon-only) ::slotted(ion-icon),:host(.segment-button-has-label-only) ::slotted(ion-label){margin-top:12px;margin-bottom:12px}.segment-button-indicator{left:0;right:0;bottom:0}.segment-button-indicator-background{background:var(--indicator-color)}:host(.in-toolbar:not(.in-segment-color)) .segment-button-indicator-background{background:var(--ion-toolbar-segment-indicator-color,var(--indicator-color))}:host(.in-toolbar-color:not(.in-segment-color)) .segment-button-indicator-background{background:var(--ion-color-contrast)}'}}}}]);