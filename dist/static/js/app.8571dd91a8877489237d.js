webpackJsonp([1,2],[,,,function(e,t,a){"use strict";a.d(t,"f",function(){return n}),a.d(t,"a",function(){return r}),a.d(t,"c",function(){return i}),a.d(t,"d",function(){return o}),a.d(t,"e",function(){return c}),a.d(t,"b",function(){return l});var s="https://192.168.110.135/pme/portal/",n=s+"login/8",r=s+"getDevices/",i=s+"getDevice/",o=s+"getSpeedDials/",c=s+"updatePinPassword/",l=function(){var e=JSON.parse(window.localStorage.getItem("authUser")),t={Accept:"application/json",Authorization:e.auth,"Service-Group":e.sgid};return t}},,,,,,,,,,,function(e,t,a){"use strict";var s=a(4),n=a.n(s),r=a(1),i=a.n(r),o=a(34),c=a(33);n.a.use(i.a);var l=!1;t.a=new i.a.Store({modules:{userStore:o.a,deviceStore:c.a},strict:l})},function(e,t,a){a(67);var s=a(0)(a(24),a(78),null,null);e.exports=s.exports},function(e,t,a){a(70);var s=a(0)(a(28),a(82),null,null);e.exports=s.exports},function(e,t,a){var s=a(0)(a(29),a(81),null,null);e.exports=s.exports},function(e,t,a){a(68);var s=a(0)(a(30),a(79),null,null);e.exports=s.exports},function(e,t,a){a(72);var s=a(0)(a(31),a(84),null,null);e.exports=s.exports},function(e,t,a){a(65);var s=a(0)(a(32),a(76),null,null);e.exports=s.exports},,,,function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(2),n=a.n(s),r=a(1),i=(a.n(r),a(73)),o=a.n(i);t.default={components:{DashboardNav:o.a},computed:n()({},a.i(r.mapState)({userStore:function(e){return e.userStore}})),created:function(){console.log("I was created");var e=JSON.parse(window.localStorage.getItem("authUser"));this.$store.dispatch("setUserObject",e)}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(2),n=a.n(s),r=a(1);a.n(r);t.default={computed:n()({},a.i(r.mapState)({userStore:function(e){return e.userStore}})),methods:{handleLogout:function(){this.$store.dispatch("clearAuthUser"),window.localStorage.removeItem("authUser"),this.$router.push({name:"home"})}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(2),n=a.n(s),r=a(1);a.n(r);t.default={computed:n()({},a.i(r.mapState)({deviceStore:function(e){return e.deviceStore}}))}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(2),n=a.n(s),r=a(1);a.n(r);t.default={computed:n()({},a.i(r.mapState)({deviceStore:function(e){return e.deviceStore}})),methods:{deviceActiveStyle:function(e){return null!==this.deviceStore.currentDevice&&this.deviceStore.currentDevice.id===e.id},changeDevice:function(e){this.$store.dispatch("setCurrentDevice",e),this.$store.dispatch("setSpeedDials")}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(2),n=a.n(s),r=a(1),i=(a.n(r),a(75)),o=a.n(i),c=a(74),l=a.n(c);a(3);t.default={components:{"device-list":o.a,"device-details":l.a},computed:n()({},a.i(r.mapState)({deviceStore:function(e){return e.deviceStore}})),created:function(){this.$store.dispatch("setDeviceList")},methods:{}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(35),n=a.n(s),r=a(2),i=a.n(r),o=a(3),c=a(1);a.n(c);t.default={computed:i()({},a.i(c.mapState)({userStore:function(e){return e.userStore}})),data:function(){return{login:{username:"JohnAdams",password:"Fidelus123"}}},methods:{handleLoginFormSubmit:function(){var e=this,t={username:this.login.username,password:this.login.password},a={};this.$http.post(o.f,t,{emulateJSON:!0}).then(function(t){200===t.status&&(console.log("session",t),a.auth=t.data.auth,a.sgid=t.data.sgid,a.user=e.login.username,window.localStorage.setItem("authUser",n()(a)),e.$store.dispatch("setUserObject",a),e.$router.push({name:"dashboard"}))})}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(3);t.default={data:function(){return{userData:{pin:"1234"}}},methods:{handlePinPassword:function(){var e={pin:this.userData.pin},t=JSON.parse(window.localStorage.getItem("authUser")),n=t.user;this.$http.put(s.e+n,e,{headers:a.i(s.b)(),emulateJSON:!0}).then(function(e){console.log(e.data)})}}}},function(e,t,a){"use strict";var s=a(4),n=a.n(s),r=a(3),i={deviceList:{},currentDevice:null,editor:null,speedDials:null},o={SET_DEVICE_LIST:function(e,t){e.deviceList=t},SET_CURRENT_DEVICE:function(e,t){e.currentDevice=t},SET_EDITOR:function(e,t){e.editor=t},SET_SPEED_DIALS:function(e,t){e.speedDials=t}},c={setDeviceList:function(e,t){var s=e.commit,i=JSON.parse(window.localStorage.getItem("authUser"));return n.a.http.get(r.a+i.user,{headers:a.i(r.b)()}).then(function(e){if(console.log(e),200===e.status)return s("SET_DEVICE_LIST",e.data.device),e.data.device})},setCurrentDevice:function(e,t){var s=e.commit;s("SET_CURRENT_DEVICE",t);var i=JSON.parse(window.localStorage.getItem("authUser")),o=i.user+"/"+t.id;return n.a.http.get(r.c+o,{headers:a.i(r.b)()}).then(function(e){s("SET_EDITOR",e.data)})},setSpeedDials:function(e,t){var s=e.commit,o=JSON.parse(window.localStorage.getItem("authUser")),c=o.user+"/"+i.currentDevice.id;return n.a.http.get(r.d+c,{headers:a.i(r.b)()}).then(function(e){s("SET_SPEED_DIALS",e.data.speedDial),console.log(e.data.speedDial)})}};t.a={state:i,mutations:o,actions:c}},function(e,t,a){"use strict";var s={authUser:null},n={SET_AUTH_USER:function(e,t){e.authUser=t},CLEAR_AUTH_USER:function(e){e.authUser=null}},r={setUserObject:function(e,t){var a=e.commit;a("SET_AUTH_USER",t)},clearAuthUser:function(e,t){var a=e.commit;a("CLEAR_AUTH_USER")}};t.a={state:s,mutations:n,actions:r}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t,a){a(69);var s=a(0)(a(25),a(80),null,null);e.exports=s.exports},function(e,t,a){a(71);var s=a(0)(a(26),a(83),null,null);e.exports=s.exports},function(e,t,a){a(66);var s=a(0)(a(27),a(77),null,null);e.exports=s.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrapper",attrs:{id:"pinpassword-wrapper"}},[e._m(0),e._v(" "),a("section",{staticClass:"login"},[a("div",{staticClass:"col-md-6 col-md-push-3"},[a("div",{staticClass:"panel panel-default"},[e._m(1),e._v(" "),a("div",{staticClass:"panel-body"},[a("form",{on:{submit:function(t){t.preventDefault(),e.handlePinPassword()}}},[a("div",{staticClass:"form-group"},[a("label",[e._v("Pin")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.userData.pin,expression:"userData.pin"}],staticClass:"form-control",attrs:{placeholder:"Enter your new pin",type:"text"},domProps:{value:e._s(e.userData.pin)},on:{input:function(t){t.target.composing||(e.userData.pin=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"form-group"},[a("label",[e._v("Password")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.userData.password,expression:"userData.password"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter your new password"},domProps:{value:e._s(e.userData.password)},on:{input:function(t){t.target.composing||(e.userData.password=t.target.value)}}})]),e._v(" "),a("button",{staticClass:"btn btn-primary"},[e._v("Update")])])])])])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"heading"},[a("h1",{staticClass:"page-title"},[e._v("Pin / Password Page")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"panel-heading"},[a("strong",[e._v("Update Pin and Password")])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrapper",attrs:{id:"device-list-wrapper"}},[a("ul",{staticClass:"list-group"},e._l(e.deviceStore.deviceList,function(t){return a("li",{staticClass:"list-group-item",class:[{active:e.deviceActiveStyle(t)}],on:{click:function(a){e.changeDevice(t)}}},[a("strong",[e._v(e._s(t.description))])])}))])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("DashboardNav"),e._v(" "),a("router-view")],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrapper",attrs:{id:"login-wrapper"}},[a("section",{staticClass:"login"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-6 col-sm-push-3"},[a("div",{staticClass:"panel panel-default"},[e._m(0),e._v(" "),a("div",{staticClass:"panel-body"},[a("form",{on:{submit:function(t){t.preventDefault(),e.handleLoginFormSubmit()}}},[a("div",{staticClass:"form-group"},[a("label",[e._v("Email Address")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.login.username,expression:"login.username"}],staticClass:"form-control",attrs:{placeholder:"Enter your username",type:"text"},domProps:{value:e._s(e.login.username)},on:{input:function(t){t.target.composing||(e.login.username=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"form-group"},[a("label",[e._v("Password")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.login.password,expression:"login.password"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter your password"},domProps:{value:e._s(e.login.password)},on:{input:function(t){t.target.composing||(e.login.password=t.target.value)}}})]),e._v(" "),a("button",{staticClass:"btn btn-primary"},[e._v("Login")])])])])])])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"panel-heading"},[a("strong",[e._v("Login")])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrapper",attrs:{id:"dashboard-wrapper"}},[null!==e.userStore.authUser&&e.userStore.authUser.auth?a("nav",{staticClass:"navbar navbar-default"},[a("div",{staticClass:"container-fluid"},[e._m(0),e._v(" "),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"bs-example-navbar-collapse-1"}},[a("ul",{staticClass:"nav navbar-nav"},[a("li",[a("router-link",{attrs:{to:{name:"dashboard"}}},[e._v("Dashboard")])],1),e._v(" "),a("li",[a("router-link",{attrs:{to:{name:"editor"}}},[e._v("Editor")])],1),e._v(" "),a("li",[a("router-link",{attrs:{to:{name:"pinpassword"}}},[e._v("User Settings")])],1),e._v(" "),a("li",[a("router-link",{attrs:{to:{name:"callforwarding"}}},[e._v("Call Forwarding")])],1)]),e._v(" "),a("ul",{staticClass:"nav navbar-nav navbar-right"},[a("li",[a("a",{on:{click:function(t){e.handleLogout()}}},[e._v("Logout")])])])])])]):e._e()])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"navbar-header"},[a("button",{staticClass:"navbar-toggle collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":"#bs-example-navbar-collapse-1","aria-expanded":"false"}},[a("span",{staticClass:"sr-only"},[e._v("Toggle navigation")]),e._v(" "),a("span",{staticClass:"icon-bar"}),e._v(" "),a("span",{staticClass:"icon-bar"}),e._v(" "),a("span",{staticClass:"icon-bar"})]),e._v(" "),a("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[e._v("Brand")])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrapper",attrs:{id:"home-wrapper"}},[a("div",{staticClass:"col-sm-4"},[a("device-list")],1),e._v(" "),a("div",{staticClass:"col-sm-8"},[a("device-details")],1)])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c||t;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrapper",attrs:{id:"callforwarding-wrapper"}},[a("section",{staticClass:"heading"},[a("h1",{staticClass:"page-title"},[e._v("Call Forwarding Page")])])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"device-details-wrapper"}},[a("div",{staticClass:"details"},[e.deviceStore.editor?a("div",{staticClass:"device-data"},[a("h3",[e._v("Device Details")]),e._v(" "),a("div",{staticClass:"name"},[e._v(e._s(e.deviceStore.editor.name))]),e._v(" "),a("div",{staticClass:"protocol"},[e._v(e._s(e.deviceStore.editor.protocol))]),e._v(" "),a("div",{staticClass:"description"},[e._v(e._s(e.deviceStore.editor.description))]),e._v(" "),a("h3",[e._v("Speed Dials")]),e._v(" "),e.deviceStore.speedDials?e._e():a("p",[e._v("No Speed Dials :(")]),e._v(" "),e.deviceStore.speedDials?a("div",{staticClass:"speed-dials"},[a("div",{staticClass:"index"},[e._v(e._s(e.deviceStore.speedDials.index))]),e._v(" "),a("div",{staticClass:"speed-dials-label"},[e._v(e._s(e.deviceStore.speedDials.label))]),e._v(" "),a("div",{staticClass:"number"},[e._v(e._s(e.deviceStore.speedDials.number))])]):e._e()]):e._e()])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c||t;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrapper",attrs:{id:"editor-wrapper"}},[a("section",{staticClass:"heading"},[a("h1",{staticClass:"page-title"},[e._v("Phone Editor")])])])}]}},,,function(e,t){},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(4),n=a.n(s),r=a(22),i=a.n(r),o=a(21),c=a.n(o),l=a(23),u=(a.n(l),a(14)),d=a(15),v=a.n(d),p=a(18),f=a.n(p),m=a(17),_=a.n(m),h=a(19),g=a.n(h),S=a(20),w=a.n(S),C=a(16),b=a.n(C);n.a.use(i.a),n.a.use(c.a),n.a.component("app",v.a);var E=[{path:"/",component:f.a,name:"home"},{path:"/dashboard",component:_.a,name:"dashboard",meta:{requiresAuth:!0}},{path:"/editor",component:g.a,name:"editor",meta:{requiresAuth:!0}},{path:"/usersettings",component:w.a,name:"pinpassword",meta:{requiresAuth:!0}},{path:"/callforwarding",component:b.a,name:"callforwarding",meta:{requiresAuth:!0}}],D=new i.a({mode:"hash",routes:E});D.beforeEach(function(e,t,a){if(e.meta.requiresAuth){var s=JSON.parse(window.localStorage.getItem("authUser"));s&&s.auth?a():a({name:"home"})}a()}),new n.a({el:"#app",components:{alert:l.alert},router:D,store:u.a})}],[88]);
//# sourceMappingURL=app.8571dd91a8877489237d.js.map