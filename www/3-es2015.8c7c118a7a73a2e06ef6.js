(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{EnSQ:function(e,s,r){"use strict";r.d(s,"a",(function(){return n}));var t=r("8Y7J");let n=(()=>{class e{constructor(){this.messages=[{fromName:"Frische Vollmilch",subject:"Milbona",date:"9:32 AM",id:0,read:!1},{fromName:"Klopapier Extra Sanft 8-lagig",subject:"Charmin",date:"6:12 AM",id:1,read:!1}]}getMessages(){return this.messages}getMessageById(e){return this.messages[e]}}return e.ngInjectableDef=t.Jb({factory:function(){return new e},token:e,providedIn:"root"}),e})()},s7LF:function(e,s,r){"use strict";var t=r("8Y7J");r("cUpR"),r("HDdC"),r("DH7j"),r("lJxs"),r("XoHu"),r("Cfvw"),r.d(s,"c",(function(){return a})),r.d(s,"d",(function(){return o})),r.d(s,"b",(function(){return n})),r.d(s,"a",(function(){return i}));const n=new t.o("NgValueAccessor");class o{constructor(){this._accessors=[]}add(e,s){this._accessors.push([e,s])}remove(e){for(let s=this._accessors.length-1;s>=0;--s)if(this._accessors[s][1]===e)return void this._accessors.splice(s,1)}select(e){this._accessors.forEach(s=>{this._isSameGroup(s,e)&&s[1]!==e&&s[1].fireUncheck(e.value)})}_isSameGroup(e,s){return!!e[0].control&&e[0]._parent===s._control._parent&&e[1].name===s.name}}const c=new t.o("NgFormSelectorWarning");class a{}class i{static withConfig(e){return{ngModule:i,providers:[{provide:c,useValue:e.warnOnDeprecatedNgFormSelector}]}}}}}]);