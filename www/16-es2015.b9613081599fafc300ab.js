(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{mBff:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var core=__webpack_require__("8Y7J");class ViewMessagePageModule{}var router_ngfactory=__webpack_require__("pMnS"),ionic_angular_ngfactory=__webpack_require__("MKJQ"),ionic_angular=__webpack_require__("sZkV"),common=__webpack_require__("SVse"),data_service=__webpack_require__("EnSQ");class ViewMessagePage{constructor(data,activatedRoute){this.data=data,this.activatedRoute=activatedRoute}ngOnInit(){const id=this.activatedRoute.snapshot.paramMap.get("id");this.message=this.data.getMessageById(parseInt(id,10))}getBackButtonText(){const win=window;return"ios"===(win&&win.Ionic&&win.Ionic.mode)?"Inbox":""}}var router=__webpack_require__("iInd"),RenderType_ViewMessagePage=core.nb({encapsulation:0,styles:[["ion-item[_ngcontent-%COMP%]{--inner-padding-end:0;--background:transparent}ion-label[_ngcontent-%COMP%]{margin-top:12px;margin-bottom:12px}ion-item[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:600}ion-item[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{float:right;-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex}ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:42px;margin-right:8px}ion-item[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]{font-size:15px;margin-right:12px;font-weight:400}h1[_ngcontent-%COMP%]{margin:0;font-weight:700;font-size:22px}p[_ngcontent-%COMP%]{line-height:22px}"]],data:{}});function View_ViewMessagePage_1(_l){return core.Fb(0,[(_l()(),core.pb(0,0,null,null,23,"ion-content",[],null,null,null,ionic_angular_ngfactory.D,ionic_angular_ngfactory.i)),core.ob(1,49152,null,0,ionic_angular.s,[core.h,core.k,core.x],{fullscreen:[0,"fullscreen"]},null),(_l()(),core.pb(2,0,null,0,16,"ion-item",[],null,null,null,ionic_angular_ngfactory.G,ionic_angular_ngfactory.l)),core.ob(3,49152,null,0,ionic_angular.F,[core.h,core.k,core.x],null,null),(_l()(),core.pb(4,0,null,0,1,"ion-icon",[["color","primary"],["name","person-circle"]],null,null,null,ionic_angular_ngfactory.F,ionic_angular_ngfactory.k)),core.ob(5,49152,null,0,ionic_angular.A,[core.h,core.k,core.x],{color:[0,"color"],name:[1,"name"]},null),(_l()(),core.pb(6,0,null,0,12,"ion-label",[["class","ion-text-wrap"]],null,null,null,ionic_angular_ngfactory.H,ionic_angular_ngfactory.m)),core.ob(7,49152,null,0,ionic_angular.L,[core.h,core.k,core.x],null,null),(_l()(),core.pb(8,0,null,0,5,"h2",[],null,null,null,null,null)),(_l()(),core.Eb(9,null,[" "," "])),(_l()(),core.pb(10,0,null,null,3,"span",[["class","date"]],null,null,null,null,null)),(_l()(),core.pb(11,0,null,null,2,"ion-note",[],null,null,null,ionic_angular_ngfactory.K,ionic_angular_ngfactory.p)),core.ob(12,49152,null,0,ionic_angular.T,[core.h,core.k,core.x],null,null),(_l()(),core.Eb(13,0,["",""])),(_l()(),core.pb(14,0,null,0,4,"h3",[],null,null,null,null,null)),(_l()(),core.Eb(-1,null,["To: "])),(_l()(),core.pb(16,0,null,null,2,"ion-note",[],null,null,null,ionic_angular_ngfactory.K,ionic_angular_ngfactory.p)),core.ob(17,49152,null,0,ionic_angular.T,[core.h,core.k,core.x],null,null),(_l()(),core.Eb(-1,0,["Me"])),(_l()(),core.pb(19,0,null,0,4,"div",[["class","ion-padding"]],null,null,null,null,null)),(_l()(),core.pb(20,0,null,null,1,"h1",[],null,null,null,null,null)),(_l()(),core.Eb(21,null,["",""])),(_l()(),core.pb(22,0,null,null,1,"p",[],null,null,null,null,null)),(_l()(),core.Eb(-1,null,[" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "]))],(function(_ck,_v){_ck(_v,1,0,!0),_ck(_v,5,0,"primary","person-circle")}),(function(_ck,_v){var _co=_v.component;_ck(_v,9,0,_co.message.fromName),_ck(_v,13,0,_co.message.date),_ck(_v,21,0,_co.message.subject)}))}function View_ViewMessagePage_0(_l){return core.Fb(0,[(_l()(),core.pb(0,0,null,null,8,"ion-header",[],null,null,null,ionic_angular_ngfactory.E,ionic_angular_ngfactory.j)),core.ob(1,49152,null,0,ionic_angular.z,[core.h,core.k,core.x],{translucent:[0,"translucent"]},null),(_l()(),core.pb(2,0,null,0,6,"ion-toolbar",[],null,null,null,ionic_angular_ngfactory.P,ionic_angular_ngfactory.u)),core.ob(3,49152,null,0,ionic_angular.xb,[core.h,core.k,core.x],null,null),(_l()(),core.pb(4,0,null,0,4,"ion-buttons",[],null,null,null,ionic_angular_ngfactory.x,ionic_angular_ngfactory.c)),core.ob(5,49152,null,0,ionic_angular.j,[core.h,core.k,core.x],null,null),(_l()(),core.pb(6,0,null,0,2,"ion-back-button",[["defaultHref","/"]],null,[[null,"click"]],(function(_v,en,$event){var ad=!0;return"click"===en&&(ad=!1!==core.Ab(_v,8).onClick($event)&&ad),ad}),ionic_angular_ngfactory.w,ionic_angular_ngfactory.b)),core.ob(7,49152,null,0,ionic_angular.e,[core.h,core.k,core.x],{defaultHref:[0,"defaultHref"],text:[1,"text"]},null),core.ob(8,16384,null,0,ionic_angular.f,[[2,ionic_angular.db],ionic_angular.Cb],{defaultHref:[0,"defaultHref"]},null),(_l()(),core.eb(16777216,null,null,1,null,View_ViewMessagePage_1)),core.ob(10,16384,null,0,common.i,[core.M,core.J],{ngIf:[0,"ngIf"]},null)],(function(_ck,_v){var _co=_v.component;_ck(_v,1,0,!0),_ck(_v,7,0,"/",_co.getBackButtonText()),_ck(_v,8,0,"/"),_ck(_v,10,0,_co.message)}),null)}function View_ViewMessagePage_Host_0(_l){return core.Fb(0,[(_l()(),core.pb(0,0,null,null,1,"app-view-message",[],null,null,null,View_ViewMessagePage_0,RenderType_ViewMessagePage)),core.ob(1,114688,null,0,ViewMessagePage,[data_service.a,router.a],null,null)],(function(_ck,_v){_ck(_v,1,0)}),null)}var ViewMessagePageNgFactory=core.lb("app-view-message",ViewMessagePage,View_ViewMessagePage_Host_0,{},{},[]),fesm2015_forms=__webpack_require__("s7LF");class ViewMessagePageRoutingModule{}__webpack_require__.d(__webpack_exports__,"ViewMessagePageModuleNgFactory",(function(){return ViewMessagePageModuleNgFactory}));var ViewMessagePageModuleNgFactory=core.mb(ViewMessagePageModule,[],(function(_l){return core.xb([core.yb(512,core.j,core.X,[[8,[router_ngfactory.a,ViewMessagePageNgFactory]],[3,core.j],core.v]),core.yb(4608,common.k,common.j,[core.s,[2,common.q]]),core.yb(4608,fesm2015_forms.d,fesm2015_forms.d,[]),core.yb(4608,ionic_angular.a,ionic_angular.a,[core.x,core.g]),core.yb(4608,ionic_angular.Bb,ionic_angular.Bb,[ionic_angular.a,core.j,core.p]),core.yb(4608,ionic_angular.Eb,ionic_angular.Eb,[ionic_angular.a,core.j,core.p]),core.yb(1073742336,common.b,common.b,[]),core.yb(1073742336,fesm2015_forms.c,fesm2015_forms.c,[]),core.yb(1073742336,fesm2015_forms.a,fesm2015_forms.a,[]),core.yb(1073742336,ionic_angular.zb,ionic_angular.zb,[]),core.yb(1073742336,router.o,router.o,[[2,router.t],[2,router.m]]),core.yb(1073742336,ViewMessagePageRoutingModule,ViewMessagePageRoutingModule,[]),core.yb(1073742336,ViewMessagePageModule,ViewMessagePageModule,[]),core.yb(1024,router.k,(function(){return[[{path:"",component:ViewMessagePage}]]}),[])])}))}}]);