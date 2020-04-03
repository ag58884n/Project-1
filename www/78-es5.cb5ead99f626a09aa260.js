function asyncGeneratorStep(t,e,r,n,o,a,i){try{var s=t[a](i),u=s.value}catch(c){return void r(c)}s.done?e(u):Promise.resolve(u).then(n,o)}function _asyncToGenerator(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){asyncGeneratorStep(a,n,o,i,s,"next",t)}function s(t){asyncGeneratorStep(a,n,o,i,s,"throw",t)}i(void 0)}))}}(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{k5eQ:function(t,e,r){"use strict";r.r(e),r.d(e,"ion_route",(function(){return i})),r.d(e,"ion_route_redirect",(function(){return s})),r.d(e,"ion_router",(function(){return S})),r.d(e,"ion_router_link",(function(){return O}));var n=r("dSyh"),o=(r("AfW+"),r("aiEM")),a=r("Dl6n");const i=class{constructor(t){Object(n.l)(this,t),this.url="",this.ionRouteDataChanged=Object(n.d)(this,"ionRouteDataChanged",7)}onUpdate(t){this.ionRouteDataChanged.emit(t)}onComponentProps(t,e){if(t===e)return;const r=t?Object.keys(t):[],n=e?Object.keys(e):[];if(r.length===n.length){var o=!0,a=!1,i=void 0;try{for(var s,u=r[Symbol.iterator]();!(o=(s=u.next()).done);o=!0){const r=s.value;if(t[r]!==e[r])return void this.onUpdate(t)}}catch(c){a=!0,i=c}finally{try{o||null==u.return||u.return()}finally{if(a)throw i}}}else this.onUpdate(t)}connectedCallback(){this.ionRouteDataChanged.emit()}static get watchers(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}}},s=class{constructor(t){Object(n.l)(this,t),this.ionRouteRedirectChanged=Object(n.d)(this,"ionRouteRedirectChanged",7)}propDidChange(){this.ionRouteRedirectChanged.emit()}connectedCallback(){this.ionRouteRedirectChanged.emit()}static get watchers(){return{from:["propDidChange"],to:["propDidChange"]}}},u=t=>"/"+t.filter(t=>t.length>0).join("/"),c=t=>{if(null==t)return[""];const e=t.split("/").map(t=>t.trim()).filter(t=>t.length>0);return 0===e.length?[""]:e},l=function(){var t=_asyncToGenerator(regeneratorRuntime.mark((function t(e,r,n,o,a=!1){var i,s,u;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,i=d(e),!(o>=r.length)&&i){t.next=4;break}return t.abrupt("return",a);case 4:return t.next=6,i.componentOnReady();case 6:return s=r[o],t.next=9,i.setRouteId(s.id,s.params,n);case 9:return(u=t.sent).changed&&(n="root",a=!0),t.next=13,l(u.element,r,n,o+1,a);case 13:if(a=t.sent,t.t0=u.markVisible,!t.t0){t.next=18;break}return t.next=18,u.markVisible();case 18:return t.abrupt("return",a);case 21:return t.prev=21,t.t1=t.catch(0),t.abrupt("return",(console.error(t.t1),!1));case 24:case"end":return t.stop()}}),t,null,[[0,21]])})));return function(e,r,n,o){return t.apply(this,arguments)}}(),h=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet",d=t=>{if(t)return t.matches(h)?t:t.querySelector(h)||void 0},f=(t,e)=>e.find(e=>((t,e)=>{const r=e.from;if(void 0===e.to)return!1;if(r.length>t.length)return!1;for(let n=0;n<r.length;n++){const e=r[n];if("*"===e)return!0;if(e!==t[n])return!1}return r.length===t.length})(t,e)),p=(t,e)=>{const r=Math.min(t.length,e.length);let n=0;for(;n<r&&t[n].toLowerCase()===e[n].id;n++);return n},g=(t,e)=>{const r=new b(t);let n,o=!1;for(let h=0;h<e.length;h++){const t=e[h].path;if(""===t[0])o=!0;else{var a=!0,i=!1,s=void 0;try{for(var u,c=t[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){const t=u.value,e=r.next();if(":"===t[0]){if(""===e)return null;n=n||[],(n[h]||(n[h]={}))[t.slice(1)]=e}else if(e!==t)return null}}catch(l){i=!0,s=l}finally{try{a||null==c.return||c.return()}finally{if(i)throw s}}o=!1}}return o&&o!==(""===r.next())?null:n?e.map((t,e)=>({id:t.id,path:t.path,params:v(t.params,n[e])})):e},v=(t,e)=>!t&&e?e:t&&!e?t:t&&e?Object.assign(Object.assign({},t),e):void 0,m=t=>{let e=1,r=1;var n=!0,o=!1,a=void 0;try{for(var i,s=t[Symbol.iterator]();!(n=(i=s.next()).done);n=!0){const t=i.value;var u=!0,c=!1,l=void 0;try{for(var h,d=t.path[Symbol.iterator]();!(u=(h=d.next()).done);u=!0){const t=h.value;":"===t[0]?e+=Math.pow(1,r):""!==t&&(e+=Math.pow(2,r)),r++}}catch(f){c=!0,l=f}finally{try{u||null==d.return||d.return()}finally{if(c)throw l}}}}catch(f){o=!0,a=f}finally{try{n||null==s.return||s.return()}finally{if(o)throw a}}return e};class b{constructor(t){this.path=t.slice()}next(){return this.path.length>0?this.path.shift():""}}const y=t=>Array.from(t.children).filter(t=>"ION-ROUTE-REDIRECT"===t.tagName).map(t=>{const e=x(t,"to");return{from:c(x(t,"from")),to:null==e?void 0:c(e)}}),w=t=>k(R(t)),R=(t,e=t)=>Array.from(e.children).filter(t=>"ION-ROUTE"===t.tagName&&t.component).map(e=>{const r=x(e,"component");if(null==r)throw new Error("component missing in ion-route");return{path:c(x(e,"url")),id:r.toLowerCase(),params:e.componentProps,children:R(t,e)}}),x=(t,e)=>e in t?t[e]:t.hasAttribute(e)?t.getAttribute(e):null,k=t=>{const e=[];var r=!0,n=!1,o=void 0;try{for(var a,i=t[Symbol.iterator]();!(r=(a=i.next()).done);r=!0){const t=a.value;C([],e,t)}}catch(s){n=!0,o=s}finally{try{r||null==i.return||i.return()}finally{if(n)throw o}}return e},C=(t,e,r)=>{const n=t.slice();if(n.push({id:r.id,path:r.path,params:r.params}),0!==r.children.length){var o=!0,a=!1,i=void 0;try{for(var s,u=r.children[Symbol.iterator]();!(o=(s=u.next()).done);o=!0){const t=s.value;C(n,e,t)}}catch(c){a=!0,i=c}finally{try{o||null==u.return||u.return()}finally{if(a)throw i}}}else e.push(n)},S=class{constructor(t){Object(n.l)(this,t),this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0,this.ionRouteWillChange=Object(n.d)(this,"ionRouteWillChange",7),this.ionRouteDidChange=Object(n.d)(this,"ionRouteDidChange",7)}componentWillLoad(){var t=this;return _asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.debug("[ion-router] router will load"),e.next=3,d(document.body)?Promise.resolve():new Promise(t=>{window.addEventListener("ionNavWillLoad",t,{once:!0})});case 3:return console.debug("[ion-router] found nav"),e.next=6,t.onRoutesChanged();case 6:case"end":return e.stop()}}),e)})))()}componentDidLoad(){window.addEventListener("ionRouteRedirectChanged",Object(o.e)(this.onRedirectChanged.bind(this),10)),window.addEventListener("ionRouteDataChanged",Object(o.e)(this.onRoutesChanged.bind(this),100))}onPopState(){const t=this.historyDirection(),e=this.getPath();return console.debug("[ion-router] URL changed -> update nav",e,t),this.writeNavStateRoot(e,t)}onBackButton(t){t.detail.register(0,()=>this.back())}push(t,e="forward"){t.startsWith(".")&&(t=new URL(t,window.location.href).pathname),console.debug("[ion-router] URL pushed -> updating nav",t,e);const r=c(t);return this.setPath(r,e),this.writeNavStateRoot(r,e)}back(){return window.history.back(),Promise.resolve(this.waitPromise)}printDebug(){var t=this;return _asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.debug("CURRENT PATH",t.getPath()),console.debug("PREVIOUS PATH",t.previousPath),(t=>{console.group("[ion-core] ROUTES[".concat(t.length,"]"));var e=!0,r=!1,n=void 0;try{for(var o,a=t[Symbol.iterator]();!(e=(o=a.next()).done);e=!0){const t=o.value,e=[];t.forEach(t=>e.push(...t.path));const r=t.map(t=>t.id);console.debug("%c ".concat(u(e)),"font-weight: bold; padding-left: 20px","=>\t","(".concat(r.join(", "),")"))}}catch(i){r=!0,n=i}finally{try{e||null==a.return||a.return()}finally{if(r)throw n}}console.groupEnd()})(w(t.el)),(t=>{console.group("[ion-core] REDIRECTS[".concat(t.length,"]"));var e=!0,r=!1,n=void 0;try{for(var o,a=t[Symbol.iterator]();!(e=(o=a.next()).done);e=!0){const t=o.value;t.to&&console.debug("FROM: ","$c ".concat(u(t.from)),"font-weight: bold"," TO: ","$c ".concat(u(t.to)),"font-weight: bold")}}catch(i){r=!0,n=i}finally{try{e||null==a.return||a.return()}finally{if(r)throw n}}console.groupEnd()})(y(t.el));case 1:case"end":return e.stop()}}),e)})))()}navChanged(t){var e=this;return _asyncToGenerator(regeneratorRuntime.mark((function r(){var n,o,a,i,s;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!e.busy){r.next=2;break}return r.abrupt("return",(console.warn("[ion-router] router is busy, navChanged was cancelled"),!1));case 2:return r.next=4,function(){var t=_asyncToGenerator(regeneratorRuntime.mark((function t(e){var r,n,o,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=[],o=window.document.body;case 2:if(!(n=d(o))){t.next=11;break}return t.next=5,n.getRouteId();case 5:if(a=t.sent){t.next=8;break}return t.abrupt("break",11);case 8:o=a.element,a.element=void 0,r.push(a);case 9:t.next=2;break;case 11:return t.abrupt("return",{ids:r,outlet:n});case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()();case 4:if(n=r.sent,o=n.ids,a=n.outlet,i=((t,e)=>{let r=null,n=0;const o=t.map(t=>t.id);var a=!0,i=!1,s=void 0;try{for(var u,c=e[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){const t=u.value,e=p(o,t);e>n&&(r=t,n=e)}}catch(l){i=!0,s=l}finally{try{a||null==c.return||c.return()}finally{if(i)throw s}}return r?r.map((e,r)=>({id:e.id,path:e.path,params:v(e.params,t[r]&&t[r].params)})):null})(o,w(e.el))){r.next=10;break}return r.abrupt("return",(console.warn("[ion-router] no matching URL for ",o.map(t=>t.id)),!1));case 10:if(!(s=(t=>{const e=[];var r=!0,n=!1,o=void 0;try{for(var a,i=t[Symbol.iterator]();!(r=(a=i.next()).done);r=!0){const t=a.value;var s=!0,u=!1,c=void 0;try{for(var l,h=t.path[Symbol.iterator]();!(s=(l=h.next()).done);s=!0){const r=l.value;if(":"===r[0]){const n=t.params&&t.params[r.slice(1)];if(!n)return null;e.push(n)}else""!==r&&e.push(r)}}catch(d){u=!0,c=d}finally{try{s||null==h.return||h.return()}finally{if(u)throw c}}}}catch(d){n=!0,o=d}finally{try{r||null==i.return||i.return()}finally{if(n)throw o}}return e})(i))){r.next=19;break}return console.debug("[ion-router] nav changed -> update URL",o,s),e.setPath(s,t),r.next=16,e.safeWriteNavState(a,i,"root",s,null,o.length);case 16:r.t0=!0,r.next=20;break;case 19:r.t0=(console.warn("[ion-router] router could not match path because some required param is missing"),!1);case 20:return r.abrupt("return",r.t0);case 21:case"end":return r.stop()}}),r)})))()}onRedirectChanged(){const t=this.getPath();t&&f(t,y(this.el))&&this.writeNavStateRoot(t,"root")}onRoutesChanged(){return this.writeNavStateRoot(this.getPath(),"root")}historyDirection(){const t=window;null===t.history.state&&(this.state++,t.history.replaceState(this.state,t.document.title,t.document.location&&t.document.location.href));const e=t.history.state,r=this.lastState;return this.lastState=e,e>r?"forward":e<r?"back":"root"}writeNavStateRoot(t,e){var r=this;return _asyncToGenerator(regeneratorRuntime.mark((function n(){var o,a,i,s;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t){n.next=2;break}return n.abrupt("return",(console.error("[ion-router] URL is not part of the routing set"),!1));case 2:return o=y(r.el),a=f(t,o),i=null,a&&(r.setPath(a.to,e),i=a.from,t=a.to),s=((t,e)=>{let r=null,n=0;var o=!0,a=!1,i=void 0;try{for(var s,u=e[Symbol.iterator]();!(o=(s=u.next()).done);o=!0){const e=s.value,o=g(t,e);if(null!==o){const t=m(o);t>n&&(n=t,r=o)}}}catch(c){a=!0,i=c}finally{try{o||null==u.return||u.return()}finally{if(a)throw i}}return r})(t,w(r.el)),n.abrupt("return",s?r.safeWriteNavState(document.body,s,e,t,i):(console.error("[ion-router] the path does not match any route"),!1));case 7:case"end":return n.stop()}}),n)})))()}safeWriteNavState(t,e,r,n,o,a=0){var i=this;return _asyncToGenerator(regeneratorRuntime.mark((function s(){var u,c;return regeneratorRuntime.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,i.lock();case 2:return u=s.sent,c=!1,s.prev=4,s.next=7,i.writeNavState(t,e,r,n,o,a);case 7:c=s.sent,s.next=13;break;case 10:s.prev=10,s.t0=s.catch(4),console.error(s.t0);case 13:return s.abrupt("return",(u(),c));case 14:case"end":return s.stop()}}),s,null,[[4,10]])})))()}lock(){var t=this;return _asyncToGenerator(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.waitPromise,t.waitPromise=new Promise(t=>n=t),e.t0=void 0!==r,!e.t0){e.next=6;break}return e.next=6,r;case 6:return e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))()}writeNavState(t,e,r,n,o,a=0){var i=this;return _asyncToGenerator(regeneratorRuntime.mark((function s(){var u,c;return regeneratorRuntime.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(!i.busy){s.next=2;break}return s.abrupt("return",(console.warn("[ion-router] router is busy, transition was cancelled"),!1));case 2:return i.busy=!0,(u=i.routeChangeEvent(n,o))&&i.ionRouteWillChange.emit(u),s.next=7,l(t,e,r,a);case 7:return c=s.sent,s.abrupt("return",(i.busy=!1,c&&console.debug("[ion-router] route changed",n),u&&i.ionRouteDidChange.emit(u),c));case 9:case"end":return s.stop()}}),s)})))()}setPath(t,e){this.state++,((t,e,r,n,o,a)=>{let i=u([...c(this.root),...n]);r&&(i="#"+i),"forward"===o?t.pushState(a,"",i):t.replaceState(a,"",i)})(window.history,0,this.useHash,t,e,this.state)}getPath(){return((t,e,r)=>{let n=t.pathname;if(this.useHash){const e=t.hash;n="#"===e[0]?e.slice(1):""}return((t,e)=>{if(t.length>e.length)return null;if(t.length<=1&&""===t[0])return e;for(let r=0;r<t.length;r++)if(t[r].length>0&&t[r]!==e[r])return null;return e.length===t.length?[""]:e.slice(t.length)})(c(e),c(n))})(window.location,this.root)}routeChangeEvent(t,e){const r=this.previousPath,n=u(t);return this.previousPath=n,n===r?null:{from:r,redirectedFrom:e?u(e):null,to:n}}get el(){return Object(n.f)(this)}},O=class{constructor(t){Object(n.l)(this,t),this.routerDirection="forward",this.onClick=t=>{Object(a.d)(this.href,t,this.routerDirection)}}render(){const t=Object(n.e)(this),e={href:this.href,rel:this.rel,target:this.target};return Object(n.i)(n.a,{onClick:this.onClick,class:Object.assign(Object.assign({},Object(a.a)(this.color)),{[t]:!0,"ion-activatable":!0})},Object(n.i)("a",Object.assign({},e),Object(n.i)("slot",null)))}static get style(){return":host{--background:transparent;--color:var(--ion-color-primary,#3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"}}}}]);