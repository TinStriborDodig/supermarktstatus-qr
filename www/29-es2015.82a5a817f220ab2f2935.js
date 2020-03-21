(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{s1jK:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ion_button",(function(){return Button})),__webpack_require__.d(__webpack_exports__,"ion_icon",(function(){return Icon}));var _core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("imtE"),_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("AfW+"),__webpack_require__("aiEM")),_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("Dl6n");const Button=class{constructor(hostRef){Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.k)(this,hostRef),this.inItem=!1,this.inListHeader=!1,this.inToolbar=!1,this.buttonType="button",this.disabled=!1,this.routerDirection="forward",this.strong=!1,this.type="button",this.handleClick=ev=>{if("button"===this.type)Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__.d)(this.href,ev,this.routerDirection);else if(Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__.g)(this.el)){const form=this.el.closest("form");if(form){ev.preventDefault();const fakeButton=document.createElement("button");fakeButton.type=this.type,fakeButton.style.display="none",form.appendChild(fakeButton),fakeButton.click(),fakeButton.remove()}}},this.onFocus=()=>{this.ionFocus.emit()},this.onBlur=()=>{this.ionBlur.emit()},this.ionFocus=Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.e)(this,"ionFocus",7),this.ionBlur=Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.e)(this,"ionBlur",7)}componentWillLoad(){this.inToolbar=!!this.el.closest("ion-buttons"),this.inListHeader=!!this.el.closest("ion-list-header"),this.inItem=!!this.el.closest("ion-item")||!!this.el.closest("ion-item-divider")}get hasIconOnly(){return!!this.el.querySelector('ion-icon[slot="icon-only"]')}get rippleType(){return(void 0===this.fill||"clear"===this.fill)&&this.hasIconOnly&&this.inToolbar?"unbounded":"bounded"}render(){const mode=Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.d)(this),{buttonType:buttonType,type:type,disabled:disabled,rel:rel,target:target,size:size,href:href,color:color,expand:expand,hasIconOnly:hasIconOnly,shape:shape,strong:strong}=this,finalSize=void 0===size&&this.inItem?"small":size,TagType=void 0===href?"button":"a",attrs="button"===TagType?{type:type}:{download:this.download,href:href,rel:rel,target:target};let fill=this.fill;return void 0===fill&&(fill=this.inToolbar||this.inListHeader?"clear":"solid"),Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.i)(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.a,{onClick:this.handleClick,"aria-disabled":disabled?"true":null,class:Object.assign(Object.assign({},Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__.a)(color)),{[mode]:!0,[buttonType]:!0,[`${buttonType}-${expand}`]:void 0!==expand,[`${buttonType}-${finalSize}`]:void 0!==finalSize,[`${buttonType}-${shape}`]:void 0!==shape,[`${buttonType}-${fill}`]:!0,[`${buttonType}-strong`]:strong,"in-toolbar":Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__.c)("ion-toolbar",this.el),"in-toolbar-color":Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__.c)("ion-toolbar[color]",this.el),"button-has-icon-only":hasIconOnly,"button-disabled":disabled,"ion-activatable":!0,"ion-focusable":!0})},Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.i)(TagType,Object.assign({},attrs,{class:"button-native",disabled:disabled,onFocus:this.onFocus,onBlur:this.onBlur,part:"button"}),Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.i)("span",{class:"button-inner",part:"button-inner"},Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.i)("slot",{name:"icon-only"}),Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.i)("slot",{name:"start"}),Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.i)("slot",null),Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.i)("slot",{name:"end"})),"md"===mode&&Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.i)("ion-ripple-effect",{type:this.rippleType})))}get el(){return Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.f)(this)}static get style(){return':host{--overflow:hidden;--ripple-color:currentColor;--border-width:initial;--border-color:initial;--border-style:initial;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--box-shadow:none;display:inline-block;width:auto;color:var(--color);font-family:var(--ion-font-family,inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;pointer-events:auto;-webkit-font-kerning:none;font-kerning:none}:host(.button-disabled){cursor:default;opacity:.5;pointer-events:none}:host(.button-solid){--background:var(--ion-color-primary,#3880ff);--color:var(--ion-color-primary-contrast,#fff)}:host(.button-outline){--border-color:var(--ion-color-primary,#3880ff)}:host(.button-clear),:host(.button-outline){--background:transparent;--color:var(--ion-color-primary,#3880ff)}:host(.button-clear){--border-width:0}:host(.button-block){display:block}:host(.button-block) .button-native{margin-left:0;margin-right:0;display:block;width:100%;clear:both;contain:content}:host(.button-block) .button-native:after{clear:both}:host(.button-full){display:block}:host(.button-full) .button-native{margin-left:0;margin-right:0;display:block;width:100%;contain:content}:host(.button-full:not(.button-round)) .button-native{border-radius:0;border-right-width:0;border-left-width:0}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);line-height:1;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:layout style;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native::-moz-focus-inner{border:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}::slotted(ion-icon){font-size:1.4em;pointer-events:none}::slotted(ion-icon[slot=start]){margin-left:-.3em;margin-right:.3em;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(ion-icon[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:-.3em;margin-inline-start:-.3em;-webkit-margin-end:.3em;margin-inline-end:.3em}}::slotted(ion-icon[slot=end]){margin-left:.3em;margin-right:-.2em;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(ion-icon[slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:.3em;margin-inline-start:.3em;-webkit-margin-end:-.2em;margin-inline-end:-.2em}}::slotted(ion-icon[slot=icon-only]){font-size:1.8em}ion-ripple-effect{color:var(--ripple-color)}.button-native:after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}:host(.ion-activated){color:var(--color-activated)}:host(.ion-activated) .button-native:after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .button-native:after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover:hover){:host(:hover){color:var(--color-hover)}:host(:hover) .button-native:after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.button-solid.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.button-outline.ion-color) .button-native{border-color:var(--ion-color-base)}:host(.button-clear.ion-color) .button-native,:host(.button-outline.ion-color) .button-native{background:transparent;color:var(--ion-color-base)}:host(.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{color:var(--ion-toolbar-color,var(--color))}:host(.button-outline.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{border-color:var(--ion-toolbar-color,var(--color,var(--border-color)))}:host(.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color,var(--background));color:var(--ion-toolbar-background,var(--color))}:host{--border-radius:10px;--padding-top:0;--padding-bottom:0;--padding-start:1em;--padding-end:1em;--transition:background-color,opacity 100ms linear;margin-left:2px;margin-right:2px;margin-top:4px;margin-bottom:4px;height:2.8em;font-size:16px;font-weight:500;letter-spacing:-.03em}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}:host(.button-solid){--background-activated:var(--ion-color-primary-shade,#3171e0);--background-focused:var(--ion-color-primary-shade,#3171e0);--background-hover:var(--ion-color-primary-tint,#4c8dff);--background-activated-opacity:1;--background-focused-opacity:1;--background-hover-opacity:1}:host(.button-outline){--border-radius:10px;--border-width:1px;--border-style:solid;--background-activated:var(--ion-color-primary,#3880ff);--background-focused-opacity:.1;--color-activated:var(--ion-color-primary-contrast,#fff)}:host(.button-clear),:host(.button-outline){--background-focused:var(--ion-color-primary,#3880ff);--background-hover:transparent}:host(.button-clear){--background-activated:transparent;--background-focused-opacity:.1;font-size:17px;font-weight:400;letter-spacing:0}:host(.button-large){--border-radius:12px;--padding-top:0;--padding-start:1em;--padding-end:1em;--padding-bottom:0;height:2.8em;font-size:20px}:host(.button-small){--border-radius:6px;--padding-top:0;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:0;height:2.1em;font-size:13px}:host(.button-round){--border-radius:64px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}:host(.button-strong){font-weight:600}:host(.button-clear.ion-activated){opacity:.4}:host(.button-outline.ion-activated.ion-color) .button-native{color:var(--ion-color-contrast)}:host(.button-outline.ion-activated.ion-color) .button-native:after{background:var(--ion-color-base)}:host(.button-solid.ion-color.ion-activated) .button-native:after{background:var(--ion-color-shade)}:host(.button-clear.ion-focused.ion-color) .button-native,:host(.button-outline.ion-focused.ion-color) .button-native{color:var(--ion-color-base)}:host(.button-clear.ion-focused.ion-color) .button-native:after,:host(.button-outline.ion-focused.ion-color) .button-native:after{background:var(--ion-color-base)}:host(.button-solid.ion-color.ion-focused) .button-native:after{background:var(--ion-color-shade)}@media (any-hover:hover){:host(.button-clear:hover),:host(.button-outline:hover){opacity:.6}:host(.button-clear.ion-color:hover) .button-native,:host(.button-outline.ion-color:hover) .button-native{color:var(--ion-color-base)}:host(.button-clear.ion-color:hover) .button-native:after,:host(.button-outline.ion-color:hover) .button-native:after{background:transparent}:host(.button-solid.ion-color:hover) .button-native:after{background:var(--ion-color-tint)}:host(:hover.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native:after{background:#fff;opacity:.1}}'}};let CACHED_MAP;const getName=(iconName,icon,mode,ios,md)=>(mode="ios"===(mode&&toLower(mode))?"ios":"md",ios&&"ios"===mode?iconName=toLower(ios):md&&"md"===mode?iconName=toLower(md):(iconName||!icon||isSrc(icon)||(iconName=icon),isStr(iconName)&&(iconName=toLower(iconName))),isStr(iconName)&&""!==iconName.trim()?""!==iconName.replace(/[a-z]|-|\d/gi,"")?null:iconName:null),getSrc=src=>isStr(src)&&(src=src.trim(),isSrc(src))?src:null,isSrc=str=>str.length>0&&/(\/|\.)/.test(str),isStr=val=>"string"==typeof val,toLower=val=>val.toLowerCase(),isValid=elm=>{if(1===elm.nodeType){if("script"===elm.nodeName.toLowerCase())return!1;for(let i=0;i<elm.attributes.length;i++){const val=elm.attributes[i].value;if(isStr(val)&&0===val.toLowerCase().indexOf("on"))return!1}for(let i=0;i<elm.childNodes.length;i++)if(!isValid(elm.childNodes[i]))return!1}return!0},ioniconContent=new Map,requests=new Map,Icon=class{constructor(hostRef){Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.k)(this,hostRef),this.isVisible=!1,this.mode=getIonMode(),this.lazy=!1}connectedCallback(){this.waitUntilVisible(this.el,"50px",()=>{this.isVisible=!0,this.loadIcon()})}disconnectedCallback(){this.io&&(this.io.disconnect(),this.io=void 0)}waitUntilVisible(el,rootMargin,cb){if(this.lazy&&"undefined"!=typeof window&&window.IntersectionObserver){const io=this.io=new window.IntersectionObserver(data=>{data[0].isIntersecting&&(io.disconnect(),this.io=void 0,cb())},{rootMargin:rootMargin});io.observe(el)}else cb()}loadIcon(){if(this.isVisible){const url=(i=>{let url=getSrc(i.src);if(url)return url;if(url=getName(i.name,i.icon,i.mode,i.ios,i.md),url)return iconName=url,(()=>{if("undefined"==typeof window)return new Map;if(!CACHED_MAP){const win=window;win.Ionicons=win.Ionicons||{},CACHED_MAP=win.Ionicons.map=win.Ionicons.map||new Map}return CACHED_MAP})().get(iconName)||Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.j)(`svg/${iconName}.svg`);var iconName;if(i.icon){if(url=getSrc(i.icon),url)return url;if(url=getSrc(i.icon[i.mode]),url)return url}return null})(this);url&&(ioniconContent.has(url)?this.svgContent=ioniconContent.get(url):(url=>{let req=requests.get(url);if(!req){if("undefined"==typeof fetch)return ioniconContent.set(url,""),Promise.resolve();req=fetch(url).then(rsp=>{if(rsp.ok)return rsp.text().then(svgContent=>{ioniconContent.set(url,(svgContent=>{if(svgContent&&"undefined"!=typeof document){const div=document.createElement("div");div.innerHTML=svgContent;for(let i=div.childNodes.length-1;i>=0;i--)"svg"!==div.childNodes[i].nodeName.toLowerCase()&&div.removeChild(div.childNodes[i]);const svgElm=div.firstElementChild;if(svgElm&&"svg"===svgElm.nodeName.toLowerCase()){const svgClass=svgElm.getAttribute("class")||"";if(svgElm.setAttribute("class",(svgClass+" s-ion-icon").trim()),isValid(svgElm))return div.innerHTML}}return""})(svgContent))});ioniconContent.set(url,"")}),requests.set(url,req)}return req})(url).then(()=>this.svgContent=ioniconContent.get(url)))}if(!this.ariaLabel){const label=getName(this.name,this.icon,this.mode,this.ios,this.md);label&&(this.ariaLabel=label.replace(/\-/g," "))}}render(){const mode=this.mode||"md",flipRtl=this.flipRtl||this.ariaLabel&&(this.ariaLabel.indexOf("arrow")>-1||this.ariaLabel.indexOf("chevron")>-1)&&!1!==this.flipRtl;return Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.i)(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.a,{role:"img",class:Object.assign(Object.assign({[mode]:!0},createColorClasses(this.color)),{[`icon-${this.size}`]:!!this.size,"flip-rtl":!!flipRtl&&"rtl"===this.el.ownerDocument.dir})},this.svgContent?Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.i)("div",{class:"icon-inner",innerHTML:this.svgContent}):Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.i)("div",{class:"icon-inner"}))}static get assetsDirs(){return["svg"]}get el(){return Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__.f)(this)}static get watchers(){return{name:["loadIcon"],src:["loadIcon"],icon:["loadIcon"]}}static get style(){return":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box!important;box-sizing:content-box!important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width,32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}:host(.flip-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.icon-small){font-size:18px!important}:host(.icon-large){font-size:32px!important}:host(.ion-color){color:var(--ion-color-base)!important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary,#3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary,#0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary,#f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success,#10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning,#ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger,#f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light,#f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium,#989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark,#222428)}"}},getIonMode=()=>"undefined"!=typeof document&&document.documentElement.getAttribute("mode")||"md",createColorClasses=color=>color?{"ion-color":!0,[`ion-color-${color}`]:!0}:null}}]);