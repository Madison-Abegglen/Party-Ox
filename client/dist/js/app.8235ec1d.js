(function(t){function e(e){for(var n,s,i=e[0],c=e[1],l=e[2],p=0,d=[];p<i.length;p++)s=i[p],r[s]&&d.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},o=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"004b":function(t,e,a){"use strict";var n=a("c56c"),r=a.n(n);r.a},"076a":function(t,e,a){},"0aa5":function(t,e,a){"use strict";var n=a("11be"),r=a.n(n);r.a},"0f2c":function(t,e,a){"use strict";var n=a("7b50"),r=a.n(n);r.a},"106a":function(t,e,a){"use strict";var n=a("2d8e"),r=a.n(n);r.a},1127:function(t,e,a){},"11be":function(t,e,a){},19:function(t,e){},2856:function(t,e,a){},"29b5":function(t,e,a){},"2d8e":function(t,e,a){},3704:function(t,e,a){},3935:function(t,e,a){},4845:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-toolbar",{class:{header:!0,"header--underline":t.underline},staticStyle:{"background-color":"var(--lighter-background)"}},[n("section",{staticClass:"header__before"},[t._t("before")],2),t.logoRight?t._e():n("div",[t.circle?n("img",{staticClass:"header__logo header__logo--circle",attrs:{src:a("8f09")}}):t.party?n("img",{staticClass:"header__logo",attrs:{src:a("4d6f")}}):n("img",{staticClass:"header__logo",attrs:{src:a("6ee5")}})]),n("section",{staticClass:"header__after"},[t._t("after"),t.logoRight?n("div",[t.circle?n("img",{staticClass:"header__logo header__logo--circle",attrs:{src:a("8f09")}}):t.party?n("img",{staticClass:"header__logo",attrs:{src:a("4d6f")}}):n("img",{staticClass:"header__logo",attrs:{src:a("6ee5")}})]):t._e()],2)])},r=[],o={name:"base-header",props:{circle:{type:Boolean,default:!1},party:{type:Boolean,default:!1},logoRight:{type:Boolean,default:!1},primary:{type:Boolean,default:!1},underline:{type:Boolean,default:!1}}},s=o,i=(a("d447"),a("2877")),c=Object(i["a"])(s,n,r,!1,null,"6189f170",null);c.options.__file="BaseHeader.vue";e["default"]=c.exports},"4d6f":function(t,e,a){t.exports=a.p+"img/ox-party.9f7dba37.svg"},"56d7":function(t,e,a){"use strict";a.r(e);a("a481"),a("ac6a"),a("cadf"),a("551c"),a("097d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{dark:"",id:"app"}},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1),a("v-snackbar",{attrs:{dark:"",bottom:"",right:"",value:t.$store.state.snackbar.open,timeout:3e3,absolute:""}},[t._v("\n    "+t._s(t.$store.state.snackbar.text)+"\n    "),a("square-button",{attrs:{flat:"",small:""},on:{click:function(e){t.$store.dispatch("closeSnackbar")}}},[t._v("Close")])],1)],1)},o=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("base-button",t._g(t._b({staticStyle:{"border-radius":"0.1rem","padding-left":"20px","padding-right":"20px"}},"base-button",t.$props,!1),t.$listeners),[t._t("default")],2)},i=[],c=a("82ea"),l={name:"square-button",extends:c["default"]},u=l,p=(a("d1ac"),a("2877")),d=Object(p["a"])(u,s,i,!1,null,"5d7e0a83",null);d.options.__file="SquareButton.vue";var f=d.exports,m={components:{SquareButton:f}},v=m,b=(a("5c0b"),Object(p["a"])(v,r,o,!1,null,null,null));b.options.__file="App.vue";var y=b.exports,g=(a("7f7f"),a("8c4f")),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-wrapper"},[a("base-header",{attrs:{circle:"",underline:""}}),a("div",{staticClass:"page"},[a("main",{staticClass:"ox-home__content"},[a("h1",{staticClass:"display-1 ox-username"},[t._v(t._s(t.name))]),a("v-divider"),a("square-button",{staticClass:"headline menu-option",attrs:{flat:"",to:{name:"parties"}}},[t._v("MY PARTIES "+t._s(t.party.length?"("+t.party.length+")":""))]),a("square-button",{staticClass:"headline menu-option",attrs:{flat:""},on:{click:t.logout}},[t._v("LOG OUT ")]),a("v-divider",{staticClass:"v-divider"}),a("square-button",{staticClass:"headline menu-option",attrs:{flat:""},on:{click:function(e){t.dialog=!0}}},[t._v("DELETE ACCOUNT")]),a("floating-action-button",{attrs:{absolute:"",bottom:"",right:""},on:{click:function(e){t.newPartyDialog=!0}}},[t._v("Create new party")])],1),a("v-dialog",{attrs:{width:"800"},model:{value:t.newPartyDialog,callback:function(e){t.newPartyDialog=e},expression:"newPartyDialog"}},[a("v-card",{staticClass:"floaty-form"},[a("v-card-title",{staticClass:"headline"},[t._v("Create a new party")]),a("v-divider"),a("v-text-field",{attrs:{box:"",type:"text",name:"partyName",label:"Party Name *",autocomplete:"off",required:""},model:{value:t.partyDialog.name,callback:function(e){t.$set(t.partyDialog,"name",e)},expression:"partyDialog.name"}}),a("v-text-field",{attrs:{box:"",type:"number",name:"partyLimit",label:"Party Limit",autocomplete:"off",required:""},model:{value:t.partyDialog.limit,callback:function(e){t.$set(t.partyDialog,"limit",e)},expression:"partyDialog.limit"}}),a("p",{staticClass:"caption"},[t._v("* indicates a required field")]),a("v-divider"),a("v-card-text",[t._v("For members to join your party, give them the corresponding party code to enter on the home screen. Create party and you will recieve your code.")]),a("v-card-actions",[a("square-button",{staticClass:"party-btn form-button",on:{click:t.createNewParty}},[t._v("Create party")])],1)],1)],1),a("v-dialog",{attrs:{width:"400"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",{staticClass:"floaty-form error-overlay"},[a("v-card-title",{staticClass:"headline"},[t._v("Warning")]),a("v-card-text",[t._v("Are you sure you want to delete your account?")]),a("v-divider"),a("v-card-actions",[a("square-button",{staticClass:"form-button",attrs:{error:""},on:{click:function(e){t.deleteAccount(),t.dialog=!1}}},[t._v("DELETE")])],1)],1)],1)],1)],1)},_=[],x=a("c93e"),C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("base-button",t._g(t._b({staticClass:"fab elevation-4",class:{top:t.top,right:t.right,bottom:t.bottom,left:t.left,absolute:t.absolute}},"base-button",t.$props,!1),t.$listeners),[t._t("default"),a("v-icon",[t._v("add")])],2)},w=[],k={name:"floating-action-button",extends:c["default"],props:{top:{type:Boolean,default:!1},right:{type:Boolean,default:!1},bottom:{type:Boolean,default:!1},left:{type:Boolean,default:!1},absolute:{type:Boolean,default:!1}}},P=k,$=(a("a160"),a("7c1c"),Object(p["a"])(P,C,w,!1,null,"e47382a4",null));$.options.__file="FloatingActionButton.vue";var S=$.exports,O={data:function(){return{dialog:!1,newPartyDialog:!1,partyDialog:{name:"",limit:""}}},methods:{logout:function(){return this.$store.dispatch("logout",this.oxId)},deleteAccount:function(){return this.$store.dispatch("deleteAccount",this.oxId)},createPartyDialog:function(){return this.$store.dispatch("createParty")},createNewParty:function(){this.$store.dispatch("newParty",Object(x["a"])({},this.partyDialog)),this.partyDialog.name="",this.partyDialog.limit="",this.newPartyDialog=!1}},computed:{name:function(){return this.$store.state.ox.name},party:function(){return this.$store.state.parties},oxId:function(){return this.$store.state.ox._id}},components:{SquareButton:f,FloatingActionButton:S}},E=O,B=(a("106a"),a("9577"),Object(p["a"])(E,h,_,!1,null,"009dc3b9",null));B.options.__file="OxHome.vue";var j=B.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-wrapper"},[a("title-header",{attrs:{title:"PARTY-Ox"}}),a("main",{staticClass:"page"},[a("section",{staticClass:"member"},[a("transition",{attrs:{name:"scale",mode:"out-in"}},[t.memberFormToggle?a("v-form",{key:"form",staticClass:"card member-content__form",attrs:{"elevation-10":""},on:{submit:function(e){e.preventDefault(),t.$store.dispatch("initMemberSocket",t.input.code)}}},[a("v-text-field",{attrs:{box:"",type:"text",name:"code",label:"Enter code here",autocomplete:"off"},model:{value:t.input.code,callback:function(e){t.$set(t.input,"code",e)},expression:"input.code"}}),a("base-button",{attrs:{type:"submit",primary:"",raised:""}},[t._v("Join")])],1):a("div",{key:"button"},[a("base-button",{attrs:{outline:""},on:{click:function(e){t.memberFormToggle=!0,t.oxFormToggle=!1}}},[t._v("Join")]),a("p",{staticClass:"subheading"},[t._v("Join an existing party")])],1)],1)],1),a("section",{staticClass:"ox"},[a("transition",{attrs:{name:"scale",mode:"out-in"}},[t.oxFormToggle?a("v-form",{key:"form",staticClass:"login-content__form card elevation-10",on:{submit:function(e){e.preventDefault(),t.signUpToggle?t.signup():t.login()}},model:{value:t.input.valid,callback:function(e){t.$set(t.input,"valid",e)},expression:"input.valid"}},[a("transition",{attrs:{name:"max-height-6"}},[t.signUpToggle?a("v-text-field",{attrs:{rules:[t.rules.required],type:"text",label:"Name",name:"name",box:"",autocomplete:"off"},model:{value:t.input.name,callback:function(e){t.$set(t.input,"name",e)},expression:"input.name"}}):t._e()],1),a("v-text-field",{attrs:{rules:[t.rules.required],type:"email",label:"Email",name:"email",box:"",autocomplete:"off"},model:{value:t.input.email,callback:function(e){t.$set(t.input,"email",e)},expression:"input.email"}}),a("v-text-field",{attrs:{type:t.input.showPassword?"text":"password","append-icon":t.input.showPassword?"visibility_off":"visibility",rules:[t.rules.required,t.rules.min],hint:"Password must be at least 8 characters",label:"Password",name:"password",box:"",loading:t.$store.state.loading,autocomplete:"off"},on:{"click:append":function(e){t.input.showPassword=!t.input.showPassword}},model:{value:t.input.password,callback:function(e){t.$set(t.input,"password",e)},expression:"input.password"}}),t.signUpToggle?a("base-button",{attrs:{disabled:!t.input.valid,type:"submit",primary:"",raised:""}},[t._v("Signup")]):a("base-button",{attrs:{disabled:!t.input.valid,type:"submit",primary:"",raised:""}},[t._v("Login")]),a("base-button",{attrs:{flat:""},on:{click:function(e){t.signUpToggle=!t.signUpToggle}}},[t._v("or "+t._s(t.signUpToggle?"login":"signup"))])],1):a("div",{key:"button"},[a("base-button",{attrs:{outline:""},on:{click:function(e){t.oxFormToggle=!0,t.memberFormToggle=!1}}},[t._v("Host")]),a("p",{staticClass:"subheading"},[t._v("Host a new party")])],1)],1)],1)])],1)},q=[],D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("base-header",{attrs:{logoRight:""}},[a("h6",{staticClass:"title",attrs:{slot:"before"},slot:"before"},[t._v(t._s(t.title))])])},A=[],N=a("4845"),L={extends:N["default"],name:"title-header",props:{title:{type:String,required:!0}}},F=L,U=(a("8cc1"),Object(p["a"])(F,D,A,!1,null,"8a9c33e8",null));U.options.__file="TitleHeader.vue";var M=U.exports,I={name:"Login",mounted:function(){this.$store.dispatch("authenticate")},components:{TitleHeader:M},data:function(){return{input:{name:"",email:"",password:"",showPassword:!1,valid:!0},rules:{required:function(t){return!!t||"Required"},min:function(t){return t.length>=8||"Password must be at least 8 characters"}},signUpToggle:!1,oxFormToggle:!1,memberFormToggle:!1}},methods:{login:function(){this.$store.dispatch("login",{email:this.input.email,password:this.input.password})},signup:function(){this.input.loading=!0,this.$store.dispatch("signup",{name:this.input.name,email:this.input.email,password:this.input.password})}}},R=I,H=(a("8879"),Object(p["a"])(R,T,q,!1,null,"212a03d5",null));H.options.__file="Login.vue";var J=H.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"party-code-wrapper"},[a("base-header",{staticStyle:{"border-bottom":"solid 1px #66fcf150"},attrs:{circle:"",primary:""}}),a("div",{staticClass:"party-code"},[a("v-card",{staticClass:"party-code-card"},[a("v-card-title",{staticClass:"headline card-title"},[t._v("Your party code:")]),a("v-divider"),a("section",{staticClass:"d-flex"},[a("p",{staticClass:"party-code display-1 primary--text"},[t._v(t._s(t.activeParty.code))]),a("v-btn",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.activeParty.code,expression:"activeParty.code",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onError,expression:"onError",arg:"error"}],attrs:{round:"",flat:"",type:"button"}},[a("v-icon",{staticClass:"copyIcon"},[t._v("file_copy")])],1)],1)],1),a("base-button",{staticClass:"px-3 py-1 mx-auto",attrs:{raised:"",outline:"",secondary:"",to:{name:"ox-home"},bottom:""}},[a("v-icon",[t._v("arrow_back_ios")]),t._v("\n      Back to profile\n    ")],1)],1)],1)},Y=[],G={name:"PartyCode",mounted:function(){this.activeParty.code||this.$router.push({name:"ox-home"})},computed:{activeParty:function(){return this.$store.state.activeParty}},methods:{onCopy:function(){this.$store.dispatch("newSnackbar","Code copied")},onError:function(){this.$store.dispatch("newSnackbar","Unable to copy code")}}},Q=G,V=(a("004b"),Object(p["a"])(Q,W,Y,!1,null,null,null));V.options.__file="PartyCode.vue";var X=V.exports,z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-wrapper"},[a("base-header",{attrs:{circle:"",underline:""}}),a("div",{staticClass:"page"},[a("h2",{staticClass:"headline uppercase primary--text",attrs:{align:"center"}},[t._v(t._s(t.ox.name)+"'s parties")]),a("v-divider"),t._m(0),t._l(t.allParties,function(e){return a("v-card",{key:e._id,staticClass:"party-card elevation-10"},[a("v-card-title",{staticClass:"card-title",on:{click:function(a){t.$router.push({name:"party",params:{id:e._id}})}}},[t._v("\n        "+t._s(e.name)+"\n      ")]),a("div",{staticClass:"party-card-content"},[a("v-icon",{staticClass:"people-icon"},[t._v("people")]),a("p",{staticClass:"member-length",class:{small:e.members.length>=100}},[t._v("\n          "+t._s(e.members.length<100?e.members.length:"99+")+"\n        ")]),a("base-button",{staticClass:"trash-button",attrs:{flat:""},on:{click:function(a){t.partyToDelete=e,t.dialog=!0}}},[a("v-icon",[t._v("delete_outline")])],1)],1)],1)}),t.allParties&&!t.allParties.length?a("p",{staticClass:"title",attrs:{align:"center"}},[t._v("No parties")]):t._e()],2),a("v-dialog",{attrs:{width:"400"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",{staticClass:"floaty-form error-overlay"},[a("v-card-title",{staticClass:"headline"},[t._v("Warning")]),a("v-card-text",[t._v("\n        Are you sure you want to delete\n        "),a("strong",[t._v(t._s(t.partyToDelete.name||""))]),t._v("?\n      ")]),a("v-divider"),a("v-card-actions",[a("square-button",{staticClass:"form-button",attrs:{error:""},on:{click:function(e){t.deleteParty(),t.dialog=!1}}},[t._v("DELETE")])],1)],1)],1),a("footer",{staticClass:"footer"},[a("base-button",{staticClass:"mx-auto back-button",attrs:{outline:"",secondary:"",round:"",to:{name:"ox-home"}}},[a("v-icon",{staticClass:"arrow-icon"},[t._v("arrow_back_ios")]),t._v("\n      back to profile\n    ")],1)],1)],1)},K=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"party-details"},[a("p",{staticClass:"uppercase"},[t._v("Name")]),a("p",{staticClass:"uppercase"},[t._v("Members")])])}],Z={name:"Parties",components:{SquareButton:f},data:function(){return{dialog:!1,partyToDelete:{}}},computed:{allParties:function(){return this.$store.state.parties},ox:function(){return this.$store.state.ox}},methods:{deleteParty:function(){this.$store.dispatch("deleteParty",this.partyToDelete._id)}}},tt=Z,et=(a("0f2c"),a("8805"),Object(p["a"])(tt,z,K,!1,null,"3fc00be6",null));et.options.__file="Parties.vue";var at=et.exports,nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-wrapper"},[a("base-header",{attrs:{circle:"",underline:""}},[a("base-button",{staticClass:"mx-auto back-button left-align",attrs:{slot:"before",circle:"",flat:"",to:{name:"parties"}},slot:"before"},[a("v-icon",[t._v("arrow_back")])],1),a("base-button",{staticClass:"mx-auto back-button right-align",attrs:{slot:"after",circle:"",flat:"",to:{name:"party-settings",params:{id:t.id}}},slot:"after"},[a("v-icon",[t._v("settings")])],1)],1),a("div",{staticClass:"page"},[a("p",{staticClass:"party__title headline"},[t._v(t._s(t.party?t.party.name:""))]),a("v-divider",{staticStyle:{}}),a("v-tabs",{staticClass:"tabs",attrs:{"slider-color":"primary",color:"transparent",grow:""}},[a("v-tab",{key:t.queue,staticClass:"tabs__tab",attrs:{ripple:""}},[t._v("\n        Queue\n      ")]),a("v-tab",{key:t.suggestions,staticClass:"tabs__tab",attrs:{ripple:""}},[t._v("\n        Suggestions\n      ")]),a("v-tab-item",{key:t.queue},[t._v("\n        WOW\n      ")]),a("v-tab-item",{key:t.suggestions},[t._v("\n        NOT WOW\n      ")])],1)],1)],1)},rt=[],ot=(a("7514"),{props:{id:{type:String,required:!0}},computed:{party:function(){var t=this;return this.$store.state.parties.find(function(e){return e._id===t.$props.id})},allParties:function(){this.$store.state.parties}}}),st=ot,it=(a("77fe"),Object(p["a"])(st,nt,rt,!1,null,"3c13d5a2",null));it.options.__file="Party.vue";var ct=it.exports,lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-wrapper"},[a("base-header",{staticStyle:{"border-bottom":"solid 1px #66fcf150"},attrs:{circle:""}}),a("div",{staticClass:"page"},[a("h2",{staticClass:"title uppercase primary--text"},[t._v("Party Settings")]),a("v-divider"),a("div",{staticClass:"coming-soon"},[a("v-select",{attrs:{items:["Ox hosting","Free-play"],value:"Ox hosting",outline:"",label:"Party mode",disabled:""}})],1),a("v-divider"),a("v-card",{staticClass:"d-flex align-center justify-space-between my-2 elevation-0",attrs:{color:"transparent"}},[a("p",{staticClass:"headline primary--text uppercase display-members-title"},[a("span",{staticStyle:{opacity:"0.85"}},[t._v("Party code")])]),a("div",{staticClass:"d-flex",staticStyle:{"flex-grow":"0 !important"}},[a("p",{staticClass:"headline primary--text uppercase display-members-title"},[t._v("\n          "+t._s(t.party.code)+"\n        ")]),a("base-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.party.code,expression:"party.code",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onError,expression:"onError",arg:"error"}],staticStyle:{padding:"0.5rem",margin:"auto 0 auto 0.5rem"},attrs:{circle:"",flat:"",type:"button"}},[a("v-icon",{staticClass:"copyIcon"},[t._v("file_copy")])],1)],1)]),a("v-divider"),a("div",{staticClass:"d-flex justify-space-between align-center my-2"},[a("h2",{staticClass:"headline display-members-title uppercase"},[t._v("Party members")]),a("p",{staticClass:"member-length",class:{small:t.party.members.length>=100},staticStyle:{"flex-grow":"0 !important"}},[t._v("\n        "+t._s(t.party.members.length<100?t.party.members.length:"99+")+"\n      ")])]),a("v-divider",{staticClass:"mb-2"}),t._m(0),a("footer",{staticClass:"footer"},[a("base-button",{staticClass:"mx-auto",attrs:{outline:"",secondary:"",round:"",to:{name:"party",params:{id:t.id}}}},[a("v-icon",{staticClass:"arrow-icon"},[t._v("arrow_back_ios")]),t._v("\n        back to party\n      ")],1)],1)],1)],1)},ut=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h4",{staticClass:"title uppercase",staticStyle:{"font-weight":"lighter"}},[t._v("No Party Members")])])}],pt={name:"PartySettings",props:["id"],computed:{party:function(){var t=this;return this.$store.state.parties.find(function(e){return e._id===t.$props.id})}},methods:{onCopy:function(){this.$store.dispatch("newSnackbar","Code copied")},onError:function(){this.$store.dispatch("newSnackbar","Unable to copy code")}}},dt=pt,ft=(a("9631"),a("da4c"),Object(p["a"])(dt,lt,ut,!1,null,"0fa1cb4a",null));ft.options.__file="PartySettings.vue";var mt=ft.exports,vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-wrapper"},[a("base-header",{attrs:{circle:"",underline:""}}),a("div",{staticClass:"page"},[a("section",{staticClass:"lobby-body"},[a("h2",{staticClass:"uppercase party-intro"},[t._v("You are in the lobby for\n        '"+t._s(t.party.name)+"'")]),a("p",{staticClass:"uppercase party-intro-pt2"},[t._v("Enter a name below to join the party")]),a("v-divider",{staticClass:"funny-divider"}),a("v-form",{staticClass:"name-form",on:{submit:function(e){e.preventDefault(),t.$store.dispatch("joinParty",{partyCode:t.party.code,name:t.first})}}},[a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-text-field",{attrs:{label:"First Name",solo:""},model:{value:t.first,callback:function(e){t.first=e},expression:"first"}}),a("base-button",{staticClass:"mx-auto name-form-button",attrs:{type:"submit",outline:"",secondary:"",round:""}},[t._v("Join Party")])],1)],1)],1)]),a("footer",{staticClass:"footer"},[a("base-button",{staticClass:"mx-auto button",attrs:{outline:"",secondary:"",round:"",to:{name:"login"}}},[a("v-icon",{staticClass:"arrow-icon"},[t._v("arrow_back_ios")]),t._v("\n      back to login\n    ")],1)],1)],1)},bt=[],yt={name:"MemberLobby",props:{code:{type:String,required:!0}},mounted:function(){this.party._id||this.$store.dispatch("initMemberSocket",this.$props.code)},computed:{party:function(){return this.$store.state.activeParty}}},gt=yt,ht=(a("0aa5"),a("ed62"),Object(p["a"])(gt,vt,bt,!1,null,"e2e837d6",null));ht.options.__file="MemberLobby.vue";var _t,xt=ht.exports,Ct=(a("c5f6"),a("87f3"),a("8afe")),wt=(a("96cf"),a("3040")),kt=(a("6762"),a("2fdb"),a("2f62")),Pt=a("bc3a"),$t=a.n(Pt),St=a("8055"),Ot=a.n(St);n["default"].use(kt["a"]);var Et=!window.location.host.includes("localhost"),Bt=Et?"//partyox.herokuapp.com":"//localhost:3000",jt=$t.a.create({baseURL:"//".concat(Bt,"/auth/"),timeout:3e3,withCredentials:!0}),Tt=$t.a.create({baseURL:"//".concat(Bt,"/api/"),timeout:3e3,withCredentials:!0}),qt=new kt["a"].Store({state:{snackbar:{open:!1,text:""},parties:[],ox:{},reroute:void 0,loading:!1,activeParty:{},member:{}},getters:{loggedIn:function(t){return!!t.ox.email},memberLoggedIn:function(t){return!!t.member._id}},mutations:{setSnackbar:function(t,e){t.snackbar=e},setOx:function(t,e){t.ox=e},setParties:function(t,e){t.parties=e},setLoading:function(t,e){t.loading=e},setActiveParty:function(t,e){t.activeParty=e}},actions:{closeSnackbar:function(t){var e=t.commit;e("setSnackbar",{text:"",open:!1})},newSnackbar:function(){var t=Object(wt["a"])(regeneratorRuntime.mark(function t(e,a){var n,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,r=e.dispatch,t.next=3,r("closeSnackbar");case 3:a instanceof Error&&(a=a.response&&a.response.data&&a.response.data.error?a.response.data.error:a.message),n("setSnackbar",{open:!0,text:a});case 5:case"end":return t.stop()}},t,this)}));return function(e,a){return t.apply(this,arguments)}}(),login:function(t,e){var a=t.commit,n=t.dispatch,r=t.state;a("setLoading",!0),jt.post("login",e).then(function(t){a("setOx",t.data),n("initSocket"),At.push(r.reroute||{name:"ox-home"}),r.reroute=void 0,a("setLoading",!1)}).catch(function(t){n("newSnackbar",t),a("setLoading",!1)})},logout:function(t){var e=t.commit,a=t.dispatch;jt.delete("logout").then(function(){e("setOx",{}),e("setParties",[]),e("setActiveParty",{}),At.push({name:"login"})}).catch(function(t){return a("newSnackbar",t)})},signup:function(t,e){var a=t.commit,n=t.dispatch,r=t.state;jt.post("register",e).then(function(t){a("setOx",t.data),At.push(r.reroute||{name:"ox-home"}),r.reroute=void 0}).catch(function(t){return n("newSnackbar",t)})},authenticate:function(t){var e=t.commit,a=t.dispatch,n=t.state;jt.get("authenticate").then(function(t){e("setOx",t.data),At.push(n.reroute||{name:"ox-home"}),n.reroute=void 0,a("initSocket")}).catch(function(){})},deleteAccount:function(t){var e=t.commit,a=t.dispatch;Tt.delete("users/").then(function(){e("setOx",{}),At.push({name:"login"})}).catch(function(t){return a("newSnackbar",t)})},initSocket:function(t){var e=t.commit,a=t.dispatch,n=t.state,r=t.getters;r.loggedIn&&(_t=Ot()("//localhost:3000"),_t.on("connected",function(){_t.emit("setUser",n.ox)}),_t.on("parties",function(t){e("setParties",t)}),_t.on("party",function(t){e("setParties",Object(Ct["a"])(n.parties).concat([t])),e("setActiveParty",t),At.push({name:"party-code"})}),_t.on("errorOccurred",function(t){a("newSnackbar",t)}),_t.on("partyDeleted",function(t){e("setParties",n.parties.filter(function(e){return e._id!==t}))}))},newParty:function(t,e){var a=parseInt(e.limit);a||(a=Number.MAX_SAFE_INTEGER),_t.emit("newParty",{name:e.name,memberLimit:a})},deleteParty:function(t,e){_t.emit("deleteParty",e)},initMemberSocket:function(t,e){var a=t.commit,n=t.dispatch;t.state,t.getters;_t=Ot()("//localhost:3000"),_t.on("errorOccurred",function(t){n("newSnackbar",t)}),_t.on("connected",function(){_t.emit("getParty",e)}),_t.on("partyGot",function(t){a("setActiveParty",t),At.push({name:"member-lobby",params:{code:e}})}),_t.on("partyJoined",function(t){a("setMember",t),At.push({name:"member-home"})})},joinParty:function(t,e){var a=e.partyCode,n=e.name;_t.emit("joinParty",{partyCode:a,name:n})}}});n["default"].use(g["a"]);var Dt=new g["a"]({routes:[{path:"/",name:"login",component:J},{path:"/home",name:"ox-home",component:j,meta:{requiresAuth:!0}},{path:"/party-code",name:"party-code",component:X,meta:{requiresAuth:!0}},{path:"/parties",name:"parties",component:at,meta:{requiresAuth:!0}},{path:"/party/:id",name:"party",props:!0,component:ct,meta:{requiresAuth:!0}},{path:"/party/:id/settings",name:"party-settings",props:!0,component:mt,meta:{requiresAuth:!0}},{path:"/lobby/:code",name:"member-lobby",component:xt,props:!0}]});Dt.beforeEach(function(t,e,a){if(t.matched.some(function(t){return t.meta.requiresAuth})&&!qt.getters.loggedIn&&!qt.getters.memberLoggedIn)return"login"!==t.name&&(qt.state.reroute={name:t.name,params:t.params}),a({name:"login"});a()});var At=Dt,Nt=a("9483");Object(Nt["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var Lt=a("ce5b"),Ft=a.n(Lt),Ut=(a("bf40"),a("4eb5")),Mt=a.n(Ut);n["default"].use(Ft.a,{theme:{primary:"#66fcf1",secondary:"#45a29e",accent:"#163fd1"}}),n["default"].use(Mt.a);var It=a("ef13");It.keys().forEach(function(t){var e=It(t),a=t.replace(/^\.\/(.*)\.\w+$/,"$1");n["default"].component(a,e.default||e)}),n["default"].config.productionTip=!1,new n["default"]({router:At,store:qt,render:function(t){return t(y)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var n=a("2856"),r=a.n(n);r.a},"6ee5":function(t,e,a){t.exports=a.p+"img/ox.9f7dba37.svg"},"77fe":function(t,e,a){"use strict";var n=a("c6d9"),r=a.n(n);r.a},"7b50":function(t,e,a){},"7c1c":function(t,e,a){"use strict";var n=a("b254"),r=a.n(n);r.a},"82ea":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-btn",t._g(t._b({staticClass:"button",class:{"button--circle":t.circle},style:{color:t.primary?"black":"white"},attrs:{color:t.primary?"primary":t.secondary?"secondary":t.accent?"accent":t.error?"error":void 0}},"v-btn",t.$props,!1),t.$listeners),[t._t("default")],2)},r=[],o=a("ce5b"),s={name:"base-button",extends:o["VBtn"],props:{primary:{type:Boolean,default:!1},secondary:{type:Boolean,default:!1},accent:{type:Boolean,default:!1},flat:{type:Boolean,default:!1},raised:{type:Boolean,default:!1},depressed:{type:Boolean,default:!1},outline:{type:Boolean,default:!1},small:{type:Boolean,default:!1},absolute:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},error:{type:Boolean,default:!1},to:{},circle:{type:Boolean,default:!1}}},i=s,c=(a("8fde"),a("2877")),l=Object(c["a"])(i,n,r,!1,null,"579189b6",null);l.options.__file="BaseButton.vue";e["default"]=l.exports},8805:function(t,e,a){"use strict";var n=a("a354"),r=a.n(n);r.a},8879:function(t,e,a){"use strict";var n=a("fc4c"),r=a.n(n);r.a},"8cc1":function(t,e,a){"use strict";var n=a("d4ac"),r=a.n(n);r.a},"8f09":function(t,e,a){t.exports=a.p+"img/ox-circle.4329c299.svg"},"8fde":function(t,e,a){"use strict";var n=a("e7df"),r=a.n(n);r.a},9577:function(t,e,a){"use strict";var n=a("b3c3"),r=a.n(n);r.a},9631:function(t,e,a){"use strict";var n=a("3704"),r=a.n(n);r.a},a160:function(t,e,a){"use strict";var n=a("1127"),r=a.n(n);r.a},a354:function(t,e,a){},b254:function(t,e,a){},b3c3:function(t,e,a){},c56c:function(t,e,a){},c6d9:function(t,e,a){},d1ac:function(t,e,a){"use strict";var n=a("076a"),r=a.n(n);r.a},d447:function(t,e,a){"use strict";var n=a("3935"),r=a.n(n);r.a},d4ac:function(t,e,a){},da4c:function(t,e,a){"use strict";var n=a("29b5"),r=a.n(n);r.a},e704:function(t,e,a){},e7df:function(t,e,a){},ed62:function(t,e,a){"use strict";var n=a("e704"),r=a.n(n);r.a},ef13:function(t,e,a){var n={"./BaseButton.vue":"82ea","./BaseHeader.vue":"4845"};function r(t){var e=o(t);return a(e)}function o(t){var e=n[t];if(!(e+1)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return e}r.keys=function(){return Object.keys(n)},r.resolve=o,t.exports=r,r.id="ef13"},fc4c:function(t,e,a){}});
//# sourceMappingURL=app.8235ec1d.js.map