function tb(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function nb(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function I1(t){var e=t.default;if(typeof e=="function"){var n=function(){return e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var k={exports:{}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ba=Symbol.for("react.element"),rb=Symbol.for("react.portal"),ib=Symbol.for("react.fragment"),sb=Symbol.for("react.strict_mode"),ob=Symbol.for("react.profiler"),ab=Symbol.for("react.provider"),ub=Symbol.for("react.context"),lb=Symbol.for("react.forward_ref"),cb=Symbol.for("react.suspense"),hb=Symbol.for("react.memo"),db=Symbol.for("react.lazy"),Fy=Symbol.iterator;function fb(t){return t===null||typeof t!="object"?null:(t=Fy&&t[Fy]||t["@@iterator"],typeof t=="function"?t:null)}var T1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k1=Object.assign,C1={};function Os(t,e,n){this.props=t,this.context=e,this.refs=C1,this.updater=n||T1}Os.prototype.isReactComponent={};Os.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Os.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function b1(){}b1.prototype=Os.prototype;function Kp(t,e,n){this.props=t,this.context=e,this.refs=C1,this.updater=n||T1}var Gp=Kp.prototype=new b1;Gp.constructor=Kp;k1(Gp,Os.prototype);Gp.isPureReactComponent=!0;var jy=Array.isArray,x1=Object.prototype.hasOwnProperty,Qp={current:null},R1={key:!0,ref:!0,__self:!0,__source:!0};function A1(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)x1.call(e,r)&&!R1.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),l=0;l<a;l++)u[l]=arguments[l+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ba,type:t,key:s,ref:o,props:i,_owner:Qp.current}}function pb(t,e){return{$$typeof:ba,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Xp(t){return typeof t=="object"&&t!==null&&t.$$typeof===ba}function mb(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Vy=/\/+/g;function Yh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?mb(""+t.key):e.toString(36)}function zu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ba:case rb:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Yh(o,0):r,jy(i)?(n="",t!=null&&(n=t.replace(Vy,"$&/")+"/"),zu(i,e,n,"",function(l){return l})):i!=null&&(Xp(i)&&(i=pb(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Vy,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",jy(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+Yh(s,a);o+=zu(s,e,n,u,i)}else if(u=fb(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+Yh(s,a++),o+=zu(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function fu(t,e,n){if(t==null)return t;var r=[],i=0;return zu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function gb(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var dt={current:null},Bu={transition:null},yb={ReactCurrentDispatcher:dt,ReactCurrentBatchConfig:Bu,ReactCurrentOwner:Qp};W.Children={map:fu,forEach:function(t,e,n){fu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return fu(t,function(){e++}),e},toArray:function(t){return fu(t,function(e){return e})||[]},only:function(t){if(!Xp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};W.Component=Os;W.Fragment=ib;W.Profiler=ob;W.PureComponent=Kp;W.StrictMode=sb;W.Suspense=cb;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yb;W.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=k1({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Qp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)x1.call(e,u)&&!R1.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var l=0;l<u;l++)a[l]=arguments[l+2];r.children=a}return{$$typeof:ba,type:t.type,key:i,ref:s,props:r,_owner:o}};W.createContext=function(t){return t={$$typeof:ub,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ab,_context:t},t.Consumer=t};W.createElement=A1;W.createFactory=function(t){var e=A1.bind(null,t);return e.type=t,e};W.createRef=function(){return{current:null}};W.forwardRef=function(t){return{$$typeof:lb,render:t}};W.isValidElement=Xp;W.lazy=function(t){return{$$typeof:db,_payload:{_status:-1,_result:t},_init:gb}};W.memo=function(t,e){return{$$typeof:hb,type:t,compare:e===void 0?null:e}};W.startTransition=function(t){var e=Bu.transition;Bu.transition={};try{t()}finally{Bu.transition=e}};W.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};W.useCallback=function(t,e){return dt.current.useCallback(t,e)};W.useContext=function(t){return dt.current.useContext(t)};W.useDebugValue=function(){};W.useDeferredValue=function(t){return dt.current.useDeferredValue(t)};W.useEffect=function(t,e){return dt.current.useEffect(t,e)};W.useId=function(){return dt.current.useId()};W.useImperativeHandle=function(t,e,n){return dt.current.useImperativeHandle(t,e,n)};W.useInsertionEffect=function(t,e){return dt.current.useInsertionEffect(t,e)};W.useLayoutEffect=function(t,e){return dt.current.useLayoutEffect(t,e)};W.useMemo=function(t,e){return dt.current.useMemo(t,e)};W.useReducer=function(t,e,n){return dt.current.useReducer(t,e,n)};W.useRef=function(t){return dt.current.useRef(t)};W.useState=function(t){return dt.current.useState(t)};W.useSyncExternalStore=function(t,e,n){return dt.current.useSyncExternalStore(t,e,n)};W.useTransition=function(){return dt.current.useTransition()};W.version="18.2.0";(function(t){t.exports=W})(k);const P1=nb(k.exports),ds=tb({__proto__:null,default:P1},[k.exports]);var of={},Yp={exports:{}},Dt={},N1={exports:{}},O1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,z){var B=N.length;N.push(z);e:for(;0<B;){var Ee=B-1>>>1,Oe=N[Ee];if(0<i(Oe,z))N[Ee]=z,N[B]=Oe,B=Ee;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var z=N[0],B=N.pop();if(B!==z){N[0]=B;e:for(var Ee=0,Oe=N.length,hu=Oe>>>1;Ee<hu;){var zr=2*(Ee+1)-1,Xh=N[zr],Br=zr+1,du=N[Br];if(0>i(Xh,B))Br<Oe&&0>i(du,Xh)?(N[Ee]=du,N[Br]=B,Ee=Br):(N[Ee]=Xh,N[zr]=B,Ee=zr);else if(Br<Oe&&0>i(du,B))N[Ee]=du,N[Br]=B,Ee=Br;else break e}}return z}function i(N,z){var B=N.sortIndex-z.sortIndex;return B!==0?B:N.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],l=[],c=1,h=null,d=3,f=!1,m=!1,y=!1,w=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(N){for(var z=n(l);z!==null;){if(z.callback===null)r(l);else if(z.startTime<=N)r(l),z.sortIndex=z.expirationTime,e(u,z);else break;z=n(l)}}function _(N){if(y=!1,v(N),!m)if(n(u)!==null)m=!0,Gh(E);else{var z=n(l);z!==null&&Qh(_,z.startTime-N)}}function E(N,z){m=!1,y&&(y=!1,g(R),R=-1),f=!0;var B=d;try{for(v(z),h=n(u);h!==null&&(!(h.expirationTime>z)||N&&!me());){var Ee=h.callback;if(typeof Ee=="function"){h.callback=null,d=h.priorityLevel;var Oe=Ee(h.expirationTime<=z);z=t.unstable_now(),typeof Oe=="function"?h.callback=Oe:h===n(u)&&r(u),v(z)}else r(u);h=n(u)}if(h!==null)var hu=!0;else{var zr=n(l);zr!==null&&Qh(_,zr.startTime-z),hu=!1}return hu}finally{h=null,d=B,f=!1}}var x=!1,T=null,R=-1,K=5,D=-1;function me(){return!(t.unstable_now()-D<K)}function Tt(){if(T!==null){var N=t.unstable_now();D=N;var z=!0;try{z=T(!0,N)}finally{z?un():(x=!1,T=null)}}else x=!1}var un;if(typeof p=="function")un=function(){p(Tt)};else if(typeof MessageChannel<"u"){var cu=new MessageChannel,Xs=cu.port2;cu.port1.onmessage=Tt,un=function(){Xs.postMessage(null)}}else un=function(){w(Tt,0)};function Gh(N){T=N,x||(x=!0,un())}function Qh(N,z){R=w(function(){N(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){m||f||(m=!0,Gh(E))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(N){switch(d){case 1:case 2:case 3:var z=3;break;default:z=d}var B=d;d=z;try{return N()}finally{d=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,z){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var B=d;d=N;try{return z()}finally{d=B}},t.unstable_scheduleCallback=function(N,z,B){var Ee=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?Ee+B:Ee):B=Ee,N){case 1:var Oe=-1;break;case 2:Oe=250;break;case 5:Oe=1073741823;break;case 4:Oe=1e4;break;default:Oe=5e3}return Oe=B+Oe,N={id:c++,callback:z,priorityLevel:N,startTime:B,expirationTime:Oe,sortIndex:-1},B>Ee?(N.sortIndex=B,e(l,N),n(u)===null&&N===n(l)&&(y?(g(R),R=-1):y=!0,Qh(_,B-Ee))):(N.sortIndex=Oe,e(u,N),m||f||(m=!0,Gh(E))),N},t.unstable_shouldYield=me,t.unstable_wrapCallback=function(N){var z=d;return function(){var B=d;d=z;try{return N.apply(this,arguments)}finally{d=B}}}})(O1);(function(t){t.exports=O1})(N1);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D1=k.exports,Pt=N1.exports;function C(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $1=new Set,jo={};function Ei(t,e){fs(t,e),fs(t+"Capture",e)}function fs(t,e){for(jo[t]=e,t=0;t<e.length;t++)$1.add(e[t])}var Mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),af=Object.prototype.hasOwnProperty,vb=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,zy={},By={};function wb(t){return af.call(By,t)?!0:af.call(zy,t)?!1:vb.test(t)?By[t]=!0:(zy[t]=!0,!1)}function _b(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Sb(t,e,n,r){if(e===null||typeof e>"u"||_b(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ft(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var We={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){We[t]=new ft(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];We[e]=new ft(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){We[t]=new ft(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){We[t]=new ft(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){We[t]=new ft(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){We[t]=new ft(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){We[t]=new ft(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){We[t]=new ft(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){We[t]=new ft(t,5,!1,t.toLowerCase(),null,!1,!1)});var Jp=/[\-:]([a-z])/g;function Zp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Jp,Zp);We[e]=new ft(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Jp,Zp);We[e]=new ft(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Jp,Zp);We[e]=new ft(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){We[t]=new ft(t,1,!1,t.toLowerCase(),null,!1,!1)});We.xlinkHref=new ft("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){We[t]=new ft(t,1,!1,t.toLowerCase(),null,!0,!0)});function em(t,e,n,r){var i=We.hasOwnProperty(e)?We[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Sb(e,n,i,r)&&(n=null),r||i===null?wb(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Kn=D1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pu=Symbol.for("react.element"),Mi=Symbol.for("react.portal"),Ui=Symbol.for("react.fragment"),tm=Symbol.for("react.strict_mode"),uf=Symbol.for("react.profiler"),L1=Symbol.for("react.provider"),M1=Symbol.for("react.context"),nm=Symbol.for("react.forward_ref"),lf=Symbol.for("react.suspense"),cf=Symbol.for("react.suspense_list"),rm=Symbol.for("react.memo"),Yn=Symbol.for("react.lazy"),U1=Symbol.for("react.offscreen"),Hy=Symbol.iterator;function Ys(t){return t===null||typeof t!="object"?null:(t=Hy&&t[Hy]||t["@@iterator"],typeof t=="function"?t:null)}var ve=Object.assign,Jh;function co(t){if(Jh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Jh=e&&e[1]||""}return`
`+Jh+t}var Zh=!1;function ed(t,e){if(!t||Zh)return"";Zh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(l){var r=l}Reflect.construct(t,[],e)}else{try{e.call()}catch(l){r=l}t.call(e.prototype)}else{try{throw Error()}catch(l){r=l}t()}}catch(l){if(l&&r&&typeof l.stack=="string"){for(var i=l.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{Zh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?co(t):""}function Eb(t){switch(t.tag){case 5:return co(t.type);case 16:return co("Lazy");case 13:return co("Suspense");case 19:return co("SuspenseList");case 0:case 2:case 15:return t=ed(t.type,!1),t;case 11:return t=ed(t.type.render,!1),t;case 1:return t=ed(t.type,!0),t;default:return""}}function hf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ui:return"Fragment";case Mi:return"Portal";case uf:return"Profiler";case tm:return"StrictMode";case lf:return"Suspense";case cf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case M1:return(t.displayName||"Context")+".Consumer";case L1:return(t._context.displayName||"Context")+".Provider";case nm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case rm:return e=t.displayName||null,e!==null?e:hf(t.type)||"Memo";case Yn:e=t._payload,t=t._init;try{return hf(t(e))}catch{}}return null}function Ib(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return hf(e);case 8:return e===tm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Er(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function F1(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Tb(t){var e=F1(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function mu(t){t._valueTracker||(t._valueTracker=Tb(t))}function j1(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=F1(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function fl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function df(t,e){var n=e.checked;return ve({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function qy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Er(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function V1(t,e){e=e.checked,e!=null&&em(t,"checked",e,!1)}function ff(t,e){V1(t,e);var n=Er(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?pf(t,e.type,n):e.hasOwnProperty("defaultValue")&&pf(t,e.type,Er(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Wy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function pf(t,e,n){(e!=="number"||fl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ho=Array.isArray;function Zi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Er(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function mf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(C(91));return ve({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ky(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(C(92));if(ho(n)){if(1<n.length)throw Error(C(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Er(n)}}function z1(t,e){var n=Er(e.value),r=Er(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Gy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function B1(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?B1(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var gu,H1=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(gu=gu||document.createElement("div"),gu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=gu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Vo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Eo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kb=["Webkit","ms","Moz","O"];Object.keys(Eo).forEach(function(t){kb.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Eo[e]=Eo[t]})});function q1(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Eo.hasOwnProperty(t)&&Eo[t]?(""+e).trim():e+"px"}function W1(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=q1(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Cb=ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yf(t,e){if(e){if(Cb[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(C(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(C(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(C(61))}if(e.style!=null&&typeof e.style!="object")throw Error(C(62))}}function vf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wf=null;function im(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var _f=null,es=null,ts=null;function Qy(t){if(t=Aa(t)){if(typeof _f!="function")throw Error(C(280));var e=t.stateNode;e&&(e=_c(e),_f(t.stateNode,t.type,e))}}function K1(t){es?ts?ts.push(t):ts=[t]:es=t}function G1(){if(es){var t=es,e=ts;if(ts=es=null,Qy(t),e)for(t=0;t<e.length;t++)Qy(e[t])}}function Q1(t,e){return t(e)}function X1(){}var td=!1;function Y1(t,e,n){if(td)return t(e,n);td=!0;try{return Q1(t,e,n)}finally{td=!1,(es!==null||ts!==null)&&(X1(),G1())}}function zo(t,e){var n=t.stateNode;if(n===null)return null;var r=_c(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(C(231,e,typeof n));return n}var Sf=!1;if(Mn)try{var Js={};Object.defineProperty(Js,"passive",{get:function(){Sf=!0}}),window.addEventListener("test",Js,Js),window.removeEventListener("test",Js,Js)}catch{Sf=!1}function bb(t,e,n,r,i,s,o,a,u){var l=Array.prototype.slice.call(arguments,3);try{e.apply(n,l)}catch(c){this.onError(c)}}var Io=!1,pl=null,ml=!1,Ef=null,xb={onError:function(t){Io=!0,pl=t}};function Rb(t,e,n,r,i,s,o,a,u){Io=!1,pl=null,bb.apply(xb,arguments)}function Ab(t,e,n,r,i,s,o,a,u){if(Rb.apply(this,arguments),Io){if(Io){var l=pl;Io=!1,pl=null}else throw Error(C(198));ml||(ml=!0,Ef=l)}}function Ii(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function J1(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Xy(t){if(Ii(t)!==t)throw Error(C(188))}function Pb(t){var e=t.alternate;if(!e){if(e=Ii(t),e===null)throw Error(C(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Xy(i),t;if(s===r)return Xy(i),e;s=s.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?t:e}function Z1(t){return t=Pb(t),t!==null?e_(t):null}function e_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=e_(t);if(e!==null)return e;t=t.sibling}return null}var t_=Pt.unstable_scheduleCallback,Yy=Pt.unstable_cancelCallback,Nb=Pt.unstable_shouldYield,Ob=Pt.unstable_requestPaint,Ie=Pt.unstable_now,Db=Pt.unstable_getCurrentPriorityLevel,sm=Pt.unstable_ImmediatePriority,n_=Pt.unstable_UserBlockingPriority,gl=Pt.unstable_NormalPriority,$b=Pt.unstable_LowPriority,r_=Pt.unstable_IdlePriority,gc=null,gn=null;function Lb(t){if(gn&&typeof gn.onCommitFiberRoot=="function")try{gn.onCommitFiberRoot(gc,t,void 0,(t.current.flags&128)===128)}catch{}}var tn=Math.clz32?Math.clz32:Fb,Mb=Math.log,Ub=Math.LN2;function Fb(t){return t>>>=0,t===0?32:31-(Mb(t)/Ub|0)|0}var yu=64,vu=4194304;function fo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function yl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=fo(a):(s&=o,s!==0&&(r=fo(s)))}else o=n&~i,o!==0?r=fo(o):s!==0&&(r=fo(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-tn(e),i=1<<n,r|=t[n],e&=~i;return r}function jb(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vb(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-tn(s),a=1<<o,u=i[o];u===-1?((a&n)===0||(a&r)!==0)&&(i[o]=jb(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function If(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function i_(){var t=yu;return yu<<=1,(yu&4194240)===0&&(yu=64),t}function nd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function xa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-tn(e),t[e]=n}function zb(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-tn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function om(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-tn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var te=0;function s_(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var o_,am,a_,u_,l_,Tf=!1,wu=[],cr=null,hr=null,dr=null,Bo=new Map,Ho=new Map,Zn=[],Bb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jy(t,e){switch(t){case"focusin":case"focusout":cr=null;break;case"dragenter":case"dragleave":hr=null;break;case"mouseover":case"mouseout":dr=null;break;case"pointerover":case"pointerout":Bo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ho.delete(e.pointerId)}}function Zs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Aa(e),e!==null&&am(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Hb(t,e,n,r,i){switch(e){case"focusin":return cr=Zs(cr,t,e,n,r,i),!0;case"dragenter":return hr=Zs(hr,t,e,n,r,i),!0;case"mouseover":return dr=Zs(dr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Bo.set(s,Zs(Bo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ho.set(s,Zs(Ho.get(s)||null,t,e,n,r,i)),!0}return!1}function c_(t){var e=Gr(t.target);if(e!==null){var n=Ii(e);if(n!==null){if(e=n.tag,e===13){if(e=J1(n),e!==null){t.blockedOn=e,l_(t.priority,function(){a_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Hu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=kf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);wf=r,n.target.dispatchEvent(r),wf=null}else return e=Aa(n),e!==null&&am(e),t.blockedOn=n,!1;e.shift()}return!0}function Zy(t,e,n){Hu(t)&&n.delete(e)}function qb(){Tf=!1,cr!==null&&Hu(cr)&&(cr=null),hr!==null&&Hu(hr)&&(hr=null),dr!==null&&Hu(dr)&&(dr=null),Bo.forEach(Zy),Ho.forEach(Zy)}function eo(t,e){t.blockedOn===e&&(t.blockedOn=null,Tf||(Tf=!0,Pt.unstable_scheduleCallback(Pt.unstable_NormalPriority,qb)))}function qo(t){function e(i){return eo(i,t)}if(0<wu.length){eo(wu[0],t);for(var n=1;n<wu.length;n++){var r=wu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(cr!==null&&eo(cr,t),hr!==null&&eo(hr,t),dr!==null&&eo(dr,t),Bo.forEach(e),Ho.forEach(e),n=0;n<Zn.length;n++)r=Zn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Zn.length&&(n=Zn[0],n.blockedOn===null);)c_(n),n.blockedOn===null&&Zn.shift()}var ns=Kn.ReactCurrentBatchConfig,vl=!0;function Wb(t,e,n,r){var i=te,s=ns.transition;ns.transition=null;try{te=1,um(t,e,n,r)}finally{te=i,ns.transition=s}}function Kb(t,e,n,r){var i=te,s=ns.transition;ns.transition=null;try{te=4,um(t,e,n,r)}finally{te=i,ns.transition=s}}function um(t,e,n,r){if(vl){var i=kf(t,e,n,r);if(i===null)dd(t,e,r,wl,n),Jy(t,r);else if(Hb(i,t,e,n,r))r.stopPropagation();else if(Jy(t,r),e&4&&-1<Bb.indexOf(t)){for(;i!==null;){var s=Aa(i);if(s!==null&&o_(s),s=kf(t,e,n,r),s===null&&dd(t,e,r,wl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else dd(t,e,r,null,n)}}var wl=null;function kf(t,e,n,r){if(wl=null,t=im(r),t=Gr(t),t!==null)if(e=Ii(t),e===null)t=null;else if(n=e.tag,n===13){if(t=J1(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return wl=t,null}function h_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Db()){case sm:return 1;case n_:return 4;case gl:case $b:return 16;case r_:return 536870912;default:return 16}default:return 16}}var ar=null,lm=null,qu=null;function d_(){if(qu)return qu;var t,e=lm,n=e.length,r,i="value"in ar?ar.value:ar.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return qu=i.slice(t,1<r?1-r:void 0)}function Wu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function _u(){return!0}function ev(){return!1}function $t(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?_u:ev,this.isPropagationStopped=ev,this}return ve(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_u)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_u)},persist:function(){},isPersistent:_u}),e}var Ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cm=$t(Ds),Ra=ve({},Ds,{view:0,detail:0}),Gb=$t(Ra),rd,id,to,yc=ve({},Ra,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==to&&(to&&t.type==="mousemove"?(rd=t.screenX-to.screenX,id=t.screenY-to.screenY):id=rd=0,to=t),rd)},movementY:function(t){return"movementY"in t?t.movementY:id}}),tv=$t(yc),Qb=ve({},yc,{dataTransfer:0}),Xb=$t(Qb),Yb=ve({},Ra,{relatedTarget:0}),sd=$t(Yb),Jb=ve({},Ds,{animationName:0,elapsedTime:0,pseudoElement:0}),Zb=$t(Jb),ex=ve({},Ds,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),tx=$t(ex),nx=ve({},Ds,{data:0}),nv=$t(nx),rx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ix={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ox(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=sx[t])?!!e[t]:!1}function hm(){return ox}var ax=ve({},Ra,{key:function(t){if(t.key){var e=rx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Wu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ix[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hm,charCode:function(t){return t.type==="keypress"?Wu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Wu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ux=$t(ax),lx=ve({},yc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rv=$t(lx),cx=ve({},Ra,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hm}),hx=$t(cx),dx=ve({},Ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),fx=$t(dx),px=ve({},yc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),mx=$t(px),gx=[9,13,27,32],dm=Mn&&"CompositionEvent"in window,To=null;Mn&&"documentMode"in document&&(To=document.documentMode);var yx=Mn&&"TextEvent"in window&&!To,f_=Mn&&(!dm||To&&8<To&&11>=To),iv=String.fromCharCode(32),sv=!1;function p_(t,e){switch(t){case"keyup":return gx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function m_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Fi=!1;function vx(t,e){switch(t){case"compositionend":return m_(e);case"keypress":return e.which!==32?null:(sv=!0,iv);case"textInput":return t=e.data,t===iv&&sv?null:t;default:return null}}function wx(t,e){if(Fi)return t==="compositionend"||!dm&&p_(t,e)?(t=d_(),qu=lm=ar=null,Fi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return f_&&e.locale!=="ko"?null:e.data;default:return null}}var _x={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ov(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!_x[t.type]:e==="textarea"}function g_(t,e,n,r){K1(r),e=_l(e,"onChange"),0<e.length&&(n=new cm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ko=null,Wo=null;function Sx(t){b_(t,0)}function vc(t){var e=zi(t);if(j1(e))return t}function Ex(t,e){if(t==="change")return e}var y_=!1;if(Mn){var od;if(Mn){var ad="oninput"in document;if(!ad){var av=document.createElement("div");av.setAttribute("oninput","return;"),ad=typeof av.oninput=="function"}od=ad}else od=!1;y_=od&&(!document.documentMode||9<document.documentMode)}function uv(){ko&&(ko.detachEvent("onpropertychange",v_),Wo=ko=null)}function v_(t){if(t.propertyName==="value"&&vc(Wo)){var e=[];g_(e,Wo,t,im(t)),Y1(Sx,e)}}function Ix(t,e,n){t==="focusin"?(uv(),ko=e,Wo=n,ko.attachEvent("onpropertychange",v_)):t==="focusout"&&uv()}function Tx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return vc(Wo)}function kx(t,e){if(t==="click")return vc(e)}function Cx(t,e){if(t==="input"||t==="change")return vc(e)}function bx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var sn=typeof Object.is=="function"?Object.is:bx;function Ko(t,e){if(sn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!af.call(e,i)||!sn(t[i],e[i]))return!1}return!0}function lv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function cv(t,e){var n=lv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=lv(n)}}function w_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?w_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function __(){for(var t=window,e=fl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=fl(t.document)}return e}function fm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function xx(t){var e=__(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&w_(n.ownerDocument.documentElement,n)){if(r!==null&&fm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=cv(n,s);var o=cv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Rx=Mn&&"documentMode"in document&&11>=document.documentMode,ji=null,Cf=null,Co=null,bf=!1;function hv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;bf||ji==null||ji!==fl(r)||(r=ji,"selectionStart"in r&&fm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Co&&Ko(Co,r)||(Co=r,r=_l(Cf,"onSelect"),0<r.length&&(e=new cm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ji)))}function Su(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Vi={animationend:Su("Animation","AnimationEnd"),animationiteration:Su("Animation","AnimationIteration"),animationstart:Su("Animation","AnimationStart"),transitionend:Su("Transition","TransitionEnd")},ud={},S_={};Mn&&(S_=document.createElement("div").style,"AnimationEvent"in window||(delete Vi.animationend.animation,delete Vi.animationiteration.animation,delete Vi.animationstart.animation),"TransitionEvent"in window||delete Vi.transitionend.transition);function wc(t){if(ud[t])return ud[t];if(!Vi[t])return t;var e=Vi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in S_)return ud[t]=e[n];return t}var E_=wc("animationend"),I_=wc("animationiteration"),T_=wc("animationstart"),k_=wc("transitionend"),C_=new Map,dv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(t,e){C_.set(t,e),Ei(e,[t])}for(var ld=0;ld<dv.length;ld++){var cd=dv[ld],Ax=cd.toLowerCase(),Px=cd[0].toUpperCase()+cd.slice(1);Ar(Ax,"on"+Px)}Ar(E_,"onAnimationEnd");Ar(I_,"onAnimationIteration");Ar(T_,"onAnimationStart");Ar("dblclick","onDoubleClick");Ar("focusin","onFocus");Ar("focusout","onBlur");Ar(k_,"onTransitionEnd");fs("onMouseEnter",["mouseout","mouseover"]);fs("onMouseLeave",["mouseout","mouseover"]);fs("onPointerEnter",["pointerout","pointerover"]);fs("onPointerLeave",["pointerout","pointerover"]);Ei("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ei("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ei("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ei("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ei("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ei("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Nx=new Set("cancel close invalid load scroll toggle".split(" ").concat(po));function fv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Ab(r,e,void 0,t),t.currentTarget=null}function b_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,l=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;fv(i,a,l),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,l=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;fv(i,a,l),s=u}}}if(ml)throw t=Ef,ml=!1,Ef=null,t}function ae(t,e){var n=e[Nf];n===void 0&&(n=e[Nf]=new Set);var r=t+"__bubble";n.has(r)||(x_(e,t,2,!1),n.add(r))}function hd(t,e,n){var r=0;e&&(r|=4),x_(n,t,r,e)}var Eu="_reactListening"+Math.random().toString(36).slice(2);function Go(t){if(!t[Eu]){t[Eu]=!0,$1.forEach(function(n){n!=="selectionchange"&&(Nx.has(n)||hd(n,!1,t),hd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Eu]||(e[Eu]=!0,hd("selectionchange",!1,e))}}function x_(t,e,n,r){switch(h_(e)){case 1:var i=Wb;break;case 4:i=Kb;break;default:i=um}n=i.bind(null,e,n,t),i=void 0,!Sf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function dd(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Gr(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Y1(function(){var l=s,c=im(n),h=[];e:{var d=C_.get(t);if(d!==void 0){var f=cm,m=t;switch(t){case"keypress":if(Wu(n)===0)break e;case"keydown":case"keyup":f=ux;break;case"focusin":m="focus",f=sd;break;case"focusout":m="blur",f=sd;break;case"beforeblur":case"afterblur":f=sd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=tv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=Xb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=hx;break;case E_:case I_:case T_:f=Zb;break;case k_:f=fx;break;case"scroll":f=Gb;break;case"wheel":f=mx;break;case"copy":case"cut":case"paste":f=tx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=rv}var y=(e&4)!==0,w=!y&&t==="scroll",g=y?d!==null?d+"Capture":null:d;y=[];for(var p=l,v;p!==null;){v=p;var _=v.stateNode;if(v.tag===5&&_!==null&&(v=_,g!==null&&(_=zo(p,g),_!=null&&y.push(Qo(p,_,v)))),w)break;p=p.return}0<y.length&&(d=new f(d,m,null,n,c),h.push({event:d,listeners:y}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",f=t==="mouseout"||t==="pointerout",d&&n!==wf&&(m=n.relatedTarget||n.fromElement)&&(Gr(m)||m[Un]))break e;if((f||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,f?(m=n.relatedTarget||n.toElement,f=l,m=m?Gr(m):null,m!==null&&(w=Ii(m),m!==w||m.tag!==5&&m.tag!==6)&&(m=null)):(f=null,m=l),f!==m)){if(y=tv,_="onMouseLeave",g="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(y=rv,_="onPointerLeave",g="onPointerEnter",p="pointer"),w=f==null?d:zi(f),v=m==null?d:zi(m),d=new y(_,p+"leave",f,n,c),d.target=w,d.relatedTarget=v,_=null,Gr(c)===l&&(y=new y(g,p+"enter",m,n,c),y.target=v,y.relatedTarget=w,_=y),w=_,f&&m)t:{for(y=f,g=m,p=0,v=y;v;v=xi(v))p++;for(v=0,_=g;_;_=xi(_))v++;for(;0<p-v;)y=xi(y),p--;for(;0<v-p;)g=xi(g),v--;for(;p--;){if(y===g||g!==null&&y===g.alternate)break t;y=xi(y),g=xi(g)}y=null}else y=null;f!==null&&pv(h,d,f,y,!1),m!==null&&w!==null&&pv(h,w,m,y,!0)}}e:{if(d=l?zi(l):window,f=d.nodeName&&d.nodeName.toLowerCase(),f==="select"||f==="input"&&d.type==="file")var E=Ex;else if(ov(d))if(y_)E=Cx;else{E=Tx;var x=Ix}else(f=d.nodeName)&&f.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(E=kx);if(E&&(E=E(t,l))){g_(h,E,n,c);break e}x&&x(t,d,l),t==="focusout"&&(x=d._wrapperState)&&x.controlled&&d.type==="number"&&pf(d,"number",d.value)}switch(x=l?zi(l):window,t){case"focusin":(ov(x)||x.contentEditable==="true")&&(ji=x,Cf=l,Co=null);break;case"focusout":Co=Cf=ji=null;break;case"mousedown":bf=!0;break;case"contextmenu":case"mouseup":case"dragend":bf=!1,hv(h,n,c);break;case"selectionchange":if(Rx)break;case"keydown":case"keyup":hv(h,n,c)}var T;if(dm)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Fi?p_(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(f_&&n.locale!=="ko"&&(Fi||R!=="onCompositionStart"?R==="onCompositionEnd"&&Fi&&(T=d_()):(ar=c,lm="value"in ar?ar.value:ar.textContent,Fi=!0)),x=_l(l,R),0<x.length&&(R=new nv(R,t,null,n,c),h.push({event:R,listeners:x}),T?R.data=T:(T=m_(n),T!==null&&(R.data=T)))),(T=yx?vx(t,n):wx(t,n))&&(l=_l(l,"onBeforeInput"),0<l.length&&(c=new nv("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:l}),c.data=T))}b_(h,e)})}function Qo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function _l(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=zo(t,n),s!=null&&r.unshift(Qo(t,s,i)),s=zo(t,e),s!=null&&r.push(Qo(t,s,i))),t=t.return}return r}function xi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function pv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,l=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&l!==null&&(a=l,i?(u=zo(n,s),u!=null&&o.unshift(Qo(n,u,a))):i||(u=zo(n,s),u!=null&&o.push(Qo(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Ox=/\r\n?/g,Dx=/\u0000|\uFFFD/g;function mv(t){return(typeof t=="string"?t:""+t).replace(Ox,`
`).replace(Dx,"")}function Iu(t,e,n){if(e=mv(e),mv(t)!==e&&n)throw Error(C(425))}function Sl(){}var xf=null,Rf=null;function Af(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Pf=typeof setTimeout=="function"?setTimeout:void 0,$x=typeof clearTimeout=="function"?clearTimeout:void 0,gv=typeof Promise=="function"?Promise:void 0,Lx=typeof queueMicrotask=="function"?queueMicrotask:typeof gv<"u"?function(t){return gv.resolve(null).then(t).catch(Mx)}:Pf;function Mx(t){setTimeout(function(){throw t})}function fd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),qo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);qo(e)}function fr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function yv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var $s=Math.random().toString(36).slice(2),fn="__reactFiber$"+$s,Xo="__reactProps$"+$s,Un="__reactContainer$"+$s,Nf="__reactEvents$"+$s,Ux="__reactListeners$"+$s,Fx="__reactHandles$"+$s;function Gr(t){var e=t[fn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Un]||n[fn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=yv(t);t!==null;){if(n=t[fn])return n;t=yv(t)}return e}t=n,n=t.parentNode}return null}function Aa(t){return t=t[fn]||t[Un],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function zi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(C(33))}function _c(t){return t[Xo]||null}var Of=[],Bi=-1;function Pr(t){return{current:t}}function le(t){0>Bi||(t.current=Of[Bi],Of[Bi]=null,Bi--)}function se(t,e){Bi++,Of[Bi]=t.current,t.current=e}var Ir={},it=Pr(Ir),wt=Pr(!1),ai=Ir;function ps(t,e){var n=t.type.contextTypes;if(!n)return Ir;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function _t(t){return t=t.childContextTypes,t!=null}function El(){le(wt),le(it)}function vv(t,e,n){if(it.current!==Ir)throw Error(C(168));se(it,e),se(wt,n)}function R_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(C(108,Ib(t)||"Unknown",i));return ve({},n,r)}function Il(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ir,ai=it.current,se(it,t),se(wt,wt.current),!0}function wv(t,e,n){var r=t.stateNode;if(!r)throw Error(C(169));n?(t=R_(t,e,ai),r.__reactInternalMemoizedMergedChildContext=t,le(wt),le(it),se(it,t)):le(wt),se(wt,n)}var kn=null,Sc=!1,pd=!1;function A_(t){kn===null?kn=[t]:kn.push(t)}function jx(t){Sc=!0,A_(t)}function Nr(){if(!pd&&kn!==null){pd=!0;var t=0,e=te;try{var n=kn;for(te=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}kn=null,Sc=!1}catch(i){throw kn!==null&&(kn=kn.slice(t+1)),t_(sm,Nr),i}finally{te=e,pd=!1}}return null}var Hi=[],qi=0,Tl=null,kl=0,Mt=[],Ut=0,ui=null,Cn=1,bn="";function Hr(t,e){Hi[qi++]=kl,Hi[qi++]=Tl,Tl=t,kl=e}function P_(t,e,n){Mt[Ut++]=Cn,Mt[Ut++]=bn,Mt[Ut++]=ui,ui=t;var r=Cn;t=bn;var i=32-tn(r)-1;r&=~(1<<i),n+=1;var s=32-tn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Cn=1<<32-tn(e)+i|n<<i|r,bn=s+t}else Cn=1<<s|n<<i|r,bn=t}function pm(t){t.return!==null&&(Hr(t,1),P_(t,1,0))}function mm(t){for(;t===Tl;)Tl=Hi[--qi],Hi[qi]=null,kl=Hi[--qi],Hi[qi]=null;for(;t===ui;)ui=Mt[--Ut],Mt[Ut]=null,bn=Mt[--Ut],Mt[Ut]=null,Cn=Mt[--Ut],Mt[Ut]=null}var xt=null,Ct=null,de=!1,Zt=null;function N_(t,e){var n=jt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function _v(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,xt=t,Ct=fr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,xt=t,Ct=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ui!==null?{id:Cn,overflow:bn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=jt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,xt=t,Ct=null,!0):!1;default:return!1}}function Df(t){return(t.mode&1)!==0&&(t.flags&128)===0}function $f(t){if(de){var e=Ct;if(e){var n=e;if(!_v(t,e)){if(Df(t))throw Error(C(418));e=fr(n.nextSibling);var r=xt;e&&_v(t,e)?N_(r,n):(t.flags=t.flags&-4097|2,de=!1,xt=t)}}else{if(Df(t))throw Error(C(418));t.flags=t.flags&-4097|2,de=!1,xt=t}}}function Sv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;xt=t}function Tu(t){if(t!==xt)return!1;if(!de)return Sv(t),de=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Af(t.type,t.memoizedProps)),e&&(e=Ct)){if(Df(t))throw O_(),Error(C(418));for(;e;)N_(t,e),e=fr(e.nextSibling)}if(Sv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(C(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ct=fr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ct=null}}else Ct=xt?fr(t.stateNode.nextSibling):null;return!0}function O_(){for(var t=Ct;t;)t=fr(t.nextSibling)}function ms(){Ct=xt=null,de=!1}function gm(t){Zt===null?Zt=[t]:Zt.push(t)}var Vx=Kn.ReactCurrentBatchConfig;function Yt(t,e){if(t&&t.defaultProps){e=ve({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Cl=Pr(null),bl=null,Wi=null,ym=null;function vm(){ym=Wi=bl=null}function wm(t){var e=Cl.current;le(Cl),t._currentValue=e}function Lf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function rs(t,e){bl=t,ym=Wi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(vt=!0),t.firstContext=null)}function qt(t){var e=t._currentValue;if(ym!==t)if(t={context:t,memoizedValue:e,next:null},Wi===null){if(bl===null)throw Error(C(308));Wi=t,bl.dependencies={lanes:0,firstContext:t}}else Wi=Wi.next=t;return e}var Qr=null;function _m(t){Qr===null?Qr=[t]:Qr.push(t)}function D_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,_m(e)):(n.next=i.next,i.next=n),e.interleaved=n,Fn(t,r)}function Fn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Jn=!1;function Sm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Pn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function pr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Q&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Fn(t,n)}return i=r.interleaved,i===null?(e.next=e,_m(r)):(e.next=i.next,i.next=e),r.interleaved=e,Fn(t,n)}function Ku(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,om(t,n)}}function Ev(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function xl(t,e,n,r){var i=t.updateQueue;Jn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,l=u.next;u.next=null,o===null?s=l:o.next=l,o=u;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=l:a.next=l,c.lastBaseUpdate=u))}if(s!==null){var h=i.baseState;o=0,c=l=u=null,a=s;do{var d=a.lane,f=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=t,y=a;switch(d=e,f=n,y.tag){case 1:if(m=y.payload,typeof m=="function"){h=m.call(f,h,d);break e}h=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=y.payload,d=typeof m=="function"?m.call(f,h,d):m,d==null)break e;h=ve({},h,d);break e;case 2:Jn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else f={eventTime:f,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(l=c=f,u=h):c=c.next=f,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(u=h),i.baseState=u,i.firstBaseUpdate=l,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ci|=o,t.lanes=o,t.memoizedState=h}}function Iv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var L_=new D1.Component().refs;function Mf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ve({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ec={isMounted:function(t){return(t=t._reactInternals)?Ii(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ht(),i=gr(t),s=Pn(r,i);s.payload=e,n!=null&&(s.callback=n),e=pr(t,s,i),e!==null&&(nn(e,t,i,r),Ku(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ht(),i=gr(t),s=Pn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=pr(t,s,i),e!==null&&(nn(e,t,i,r),Ku(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ht(),r=gr(t),i=Pn(n,r);i.tag=2,e!=null&&(i.callback=e),e=pr(t,i,r),e!==null&&(nn(e,t,r,n),Ku(e,t,r))}};function Tv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ko(n,r)||!Ko(i,s):!0}function M_(t,e,n){var r=!1,i=Ir,s=e.contextType;return typeof s=="object"&&s!==null?s=qt(s):(i=_t(e)?ai:it.current,r=e.contextTypes,s=(r=r!=null)?ps(t,i):Ir),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ec,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function kv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ec.enqueueReplaceState(e,e.state,null)}function Uf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=L_,Sm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=qt(s):(s=_t(e)?ai:it.current,i.context=ps(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Mf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ec.enqueueReplaceState(i,i.state,null),xl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function no(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===L_&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,t))}return t}function ku(t,e){throw t=Object.prototype.toString.call(e),Error(C(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Cv(t){var e=t._init;return e(t._payload)}function U_(t){function e(g,p){if(t){var v=g.deletions;v===null?(g.deletions=[p],g.flags|=16):v.push(p)}}function n(g,p){if(!t)return null;for(;p!==null;)e(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function i(g,p){return g=yr(g,p),g.index=0,g.sibling=null,g}function s(g,p,v){return g.index=v,t?(v=g.alternate,v!==null?(v=v.index,v<p?(g.flags|=2,p):v):(g.flags|=2,p)):(g.flags|=1048576,p)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,p,v,_){return p===null||p.tag!==6?(p=Sd(v,g.mode,_),p.return=g,p):(p=i(p,v),p.return=g,p)}function u(g,p,v,_){var E=v.type;return E===Ui?c(g,p,v.props.children,_,v.key):p!==null&&(p.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Yn&&Cv(E)===p.type)?(_=i(p,v.props),_.ref=no(g,p,v),_.return=g,_):(_=Zu(v.type,v.key,v.props,null,g.mode,_),_.ref=no(g,p,v),_.return=g,_)}function l(g,p,v,_){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=Ed(v,g.mode,_),p.return=g,p):(p=i(p,v.children||[]),p.return=g,p)}function c(g,p,v,_,E){return p===null||p.tag!==7?(p=ni(v,g.mode,_,E),p.return=g,p):(p=i(p,v),p.return=g,p)}function h(g,p,v){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Sd(""+p,g.mode,v),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case pu:return v=Zu(p.type,p.key,p.props,null,g.mode,v),v.ref=no(g,null,p),v.return=g,v;case Mi:return p=Ed(p,g.mode,v),p.return=g,p;case Yn:var _=p._init;return h(g,_(p._payload),v)}if(ho(p)||Ys(p))return p=ni(p,g.mode,v,null),p.return=g,p;ku(g,p)}return null}function d(g,p,v,_){var E=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return E!==null?null:a(g,p,""+v,_);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case pu:return v.key===E?u(g,p,v,_):null;case Mi:return v.key===E?l(g,p,v,_):null;case Yn:return E=v._init,d(g,p,E(v._payload),_)}if(ho(v)||Ys(v))return E!==null?null:c(g,p,v,_,null);ku(g,v)}return null}function f(g,p,v,_,E){if(typeof _=="string"&&_!==""||typeof _=="number")return g=g.get(v)||null,a(p,g,""+_,E);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case pu:return g=g.get(_.key===null?v:_.key)||null,u(p,g,_,E);case Mi:return g=g.get(_.key===null?v:_.key)||null,l(p,g,_,E);case Yn:var x=_._init;return f(g,p,v,x(_._payload),E)}if(ho(_)||Ys(_))return g=g.get(v)||null,c(p,g,_,E,null);ku(p,_)}return null}function m(g,p,v,_){for(var E=null,x=null,T=p,R=p=0,K=null;T!==null&&R<v.length;R++){T.index>R?(K=T,T=null):K=T.sibling;var D=d(g,T,v[R],_);if(D===null){T===null&&(T=K);break}t&&T&&D.alternate===null&&e(g,T),p=s(D,p,R),x===null?E=D:x.sibling=D,x=D,T=K}if(R===v.length)return n(g,T),de&&Hr(g,R),E;if(T===null){for(;R<v.length;R++)T=h(g,v[R],_),T!==null&&(p=s(T,p,R),x===null?E=T:x.sibling=T,x=T);return de&&Hr(g,R),E}for(T=r(g,T);R<v.length;R++)K=f(T,g,R,v[R],_),K!==null&&(t&&K.alternate!==null&&T.delete(K.key===null?R:K.key),p=s(K,p,R),x===null?E=K:x.sibling=K,x=K);return t&&T.forEach(function(me){return e(g,me)}),de&&Hr(g,R),E}function y(g,p,v,_){var E=Ys(v);if(typeof E!="function")throw Error(C(150));if(v=E.call(v),v==null)throw Error(C(151));for(var x=E=null,T=p,R=p=0,K=null,D=v.next();T!==null&&!D.done;R++,D=v.next()){T.index>R?(K=T,T=null):K=T.sibling;var me=d(g,T,D.value,_);if(me===null){T===null&&(T=K);break}t&&T&&me.alternate===null&&e(g,T),p=s(me,p,R),x===null?E=me:x.sibling=me,x=me,T=K}if(D.done)return n(g,T),de&&Hr(g,R),E;if(T===null){for(;!D.done;R++,D=v.next())D=h(g,D.value,_),D!==null&&(p=s(D,p,R),x===null?E=D:x.sibling=D,x=D);return de&&Hr(g,R),E}for(T=r(g,T);!D.done;R++,D=v.next())D=f(T,g,R,D.value,_),D!==null&&(t&&D.alternate!==null&&T.delete(D.key===null?R:D.key),p=s(D,p,R),x===null?E=D:x.sibling=D,x=D);return t&&T.forEach(function(Tt){return e(g,Tt)}),de&&Hr(g,R),E}function w(g,p,v,_){if(typeof v=="object"&&v!==null&&v.type===Ui&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case pu:e:{for(var E=v.key,x=p;x!==null;){if(x.key===E){if(E=v.type,E===Ui){if(x.tag===7){n(g,x.sibling),p=i(x,v.props.children),p.return=g,g=p;break e}}else if(x.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Yn&&Cv(E)===x.type){n(g,x.sibling),p=i(x,v.props),p.ref=no(g,x,v),p.return=g,g=p;break e}n(g,x);break}else e(g,x);x=x.sibling}v.type===Ui?(p=ni(v.props.children,g.mode,_,v.key),p.return=g,g=p):(_=Zu(v.type,v.key,v.props,null,g.mode,_),_.ref=no(g,p,v),_.return=g,g=_)}return o(g);case Mi:e:{for(x=v.key;p!==null;){if(p.key===x)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){n(g,p.sibling),p=i(p,v.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else e(g,p);p=p.sibling}p=Ed(v,g.mode,_),p.return=g,g=p}return o(g);case Yn:return x=v._init,w(g,p,x(v._payload),_)}if(ho(v))return m(g,p,v,_);if(Ys(v))return y(g,p,v,_);ku(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,p!==null&&p.tag===6?(n(g,p.sibling),p=i(p,v),p.return=g,g=p):(n(g,p),p=Sd(v,g.mode,_),p.return=g,g=p),o(g)):n(g,p)}return w}var gs=U_(!0),F_=U_(!1),Pa={},yn=Pr(Pa),Yo=Pr(Pa),Jo=Pr(Pa);function Xr(t){if(t===Pa)throw Error(C(174));return t}function Em(t,e){switch(se(Jo,e),se(Yo,t),se(yn,Pa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:gf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=gf(e,t)}le(yn),se(yn,e)}function ys(){le(yn),le(Yo),le(Jo)}function j_(t){Xr(Jo.current);var e=Xr(yn.current),n=gf(e,t.type);e!==n&&(se(Yo,t),se(yn,n))}function Im(t){Yo.current===t&&(le(yn),le(Yo))}var ge=Pr(0);function Rl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var md=[];function Tm(){for(var t=0;t<md.length;t++)md[t]._workInProgressVersionPrimary=null;md.length=0}var Gu=Kn.ReactCurrentDispatcher,gd=Kn.ReactCurrentBatchConfig,li=0,ye=null,Re=null,$e=null,Al=!1,bo=!1,Zo=0,zx=0;function Ge(){throw Error(C(321))}function km(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!sn(t[n],e[n]))return!1;return!0}function Cm(t,e,n,r,i,s){if(li=s,ye=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Gu.current=t===null||t.memoizedState===null?Wx:Kx,t=n(r,i),bo){s=0;do{if(bo=!1,Zo=0,25<=s)throw Error(C(301));s+=1,$e=Re=null,e.updateQueue=null,Gu.current=Gx,t=n(r,i)}while(bo)}if(Gu.current=Pl,e=Re!==null&&Re.next!==null,li=0,$e=Re=ye=null,Al=!1,e)throw Error(C(300));return t}function bm(){var t=Zo!==0;return Zo=0,t}function cn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?ye.memoizedState=$e=t:$e=$e.next=t,$e}function Wt(){if(Re===null){var t=ye.alternate;t=t!==null?t.memoizedState:null}else t=Re.next;var e=$e===null?ye.memoizedState:$e.next;if(e!==null)$e=e,Re=t;else{if(t===null)throw Error(C(310));Re=t,t={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},$e===null?ye.memoizedState=$e=t:$e=$e.next=t}return $e}function ea(t,e){return typeof e=="function"?e(t):e}function yd(t){var e=Wt(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=Re,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,l=s;do{var c=l.lane;if((li&c)===c)u!==null&&(u=u.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),r=l.hasEagerState?l.eagerState:t(r,l.action);else{var h={lane:c,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null};u===null?(a=u=h,o=r):u=u.next=h,ye.lanes|=c,ci|=c}l=l.next}while(l!==null&&l!==s);u===null?o=r:u.next=a,sn(r,e.memoizedState)||(vt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ye.lanes|=s,ci|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function vd(t){var e=Wt(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);sn(s,e.memoizedState)||(vt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function V_(){}function z_(t,e){var n=ye,r=Wt(),i=e(),s=!sn(r.memoizedState,i);if(s&&(r.memoizedState=i,vt=!0),r=r.queue,xm(q_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||$e!==null&&$e.memoizedState.tag&1){if(n.flags|=2048,ta(9,H_.bind(null,n,r,i,e),void 0,null),Le===null)throw Error(C(349));(li&30)!==0||B_(n,e,i)}return i}function B_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ye.updateQueue,e===null?(e={lastEffect:null,stores:null},ye.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function H_(t,e,n,r){e.value=n,e.getSnapshot=r,W_(e)&&K_(t)}function q_(t,e,n){return n(function(){W_(e)&&K_(t)})}function W_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!sn(t,n)}catch{return!0}}function K_(t){var e=Fn(t,1);e!==null&&nn(e,t,1,-1)}function bv(t){var e=cn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:t},e.queue=t,t=t.dispatch=qx.bind(null,ye,t),[e.memoizedState,t]}function ta(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ye.updateQueue,e===null?(e={lastEffect:null,stores:null},ye.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function G_(){return Wt().memoizedState}function Qu(t,e,n,r){var i=cn();ye.flags|=t,i.memoizedState=ta(1|e,n,void 0,r===void 0?null:r)}function Ic(t,e,n,r){var i=Wt();r=r===void 0?null:r;var s=void 0;if(Re!==null){var o=Re.memoizedState;if(s=o.destroy,r!==null&&km(r,o.deps)){i.memoizedState=ta(e,n,s,r);return}}ye.flags|=t,i.memoizedState=ta(1|e,n,s,r)}function xv(t,e){return Qu(8390656,8,t,e)}function xm(t,e){return Ic(2048,8,t,e)}function Q_(t,e){return Ic(4,2,t,e)}function X_(t,e){return Ic(4,4,t,e)}function Y_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function J_(t,e,n){return n=n!=null?n.concat([t]):null,Ic(4,4,Y_.bind(null,e,t),n)}function Rm(){}function Z_(t,e){var n=Wt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&km(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function eS(t,e){var n=Wt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&km(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function tS(t,e,n){return(li&21)===0?(t.baseState&&(t.baseState=!1,vt=!0),t.memoizedState=n):(sn(n,e)||(n=i_(),ye.lanes|=n,ci|=n,t.baseState=!0),e)}function Bx(t,e){var n=te;te=n!==0&&4>n?n:4,t(!0);var r=gd.transition;gd.transition={};try{t(!1),e()}finally{te=n,gd.transition=r}}function nS(){return Wt().memoizedState}function Hx(t,e,n){var r=gr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},rS(t))iS(e,n);else if(n=D_(t,e,n,r),n!==null){var i=ht();nn(n,t,r,i),sS(n,e,r)}}function qx(t,e,n){var r=gr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(rS(t))iS(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,sn(a,o)){var u=e.interleaved;u===null?(i.next=i,_m(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=D_(t,e,i,r),n!==null&&(i=ht(),nn(n,t,r,i),sS(n,e,r))}}function rS(t){var e=t.alternate;return t===ye||e!==null&&e===ye}function iS(t,e){bo=Al=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function sS(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,om(t,n)}}var Pl={readContext:qt,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useInsertionEffect:Ge,useLayoutEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useMutableSource:Ge,useSyncExternalStore:Ge,useId:Ge,unstable_isNewReconciler:!1},Wx={readContext:qt,useCallback:function(t,e){return cn().memoizedState=[t,e===void 0?null:e],t},useContext:qt,useEffect:xv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Qu(4194308,4,Y_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Qu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Qu(4,2,t,e)},useMemo:function(t,e){var n=cn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=cn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Hx.bind(null,ye,t),[r.memoizedState,t]},useRef:function(t){var e=cn();return t={current:t},e.memoizedState=t},useState:bv,useDebugValue:Rm,useDeferredValue:function(t){return cn().memoizedState=t},useTransition:function(){var t=bv(!1),e=t[0];return t=Bx.bind(null,t[1]),cn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ye,i=cn();if(de){if(n===void 0)throw Error(C(407));n=n()}else{if(n=e(),Le===null)throw Error(C(349));(li&30)!==0||B_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,xv(q_.bind(null,r,s,t),[t]),r.flags|=2048,ta(9,H_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=cn(),e=Le.identifierPrefix;if(de){var n=bn,r=Cn;n=(r&~(1<<32-tn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Zo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=zx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Kx={readContext:qt,useCallback:Z_,useContext:qt,useEffect:xm,useImperativeHandle:J_,useInsertionEffect:Q_,useLayoutEffect:X_,useMemo:eS,useReducer:yd,useRef:G_,useState:function(){return yd(ea)},useDebugValue:Rm,useDeferredValue:function(t){var e=Wt();return tS(e,Re.memoizedState,t)},useTransition:function(){var t=yd(ea)[0],e=Wt().memoizedState;return[t,e]},useMutableSource:V_,useSyncExternalStore:z_,useId:nS,unstable_isNewReconciler:!1},Gx={readContext:qt,useCallback:Z_,useContext:qt,useEffect:xm,useImperativeHandle:J_,useInsertionEffect:Q_,useLayoutEffect:X_,useMemo:eS,useReducer:vd,useRef:G_,useState:function(){return vd(ea)},useDebugValue:Rm,useDeferredValue:function(t){var e=Wt();return Re===null?e.memoizedState=t:tS(e,Re.memoizedState,t)},useTransition:function(){var t=vd(ea)[0],e=Wt().memoizedState;return[t,e]},useMutableSource:V_,useSyncExternalStore:z_,useId:nS,unstable_isNewReconciler:!1};function vs(t,e){try{var n="",r=e;do n+=Eb(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function wd(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function Ff(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Qx=typeof WeakMap=="function"?WeakMap:Map;function oS(t,e,n){n=Pn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ol||(Ol=!0,Qf=r),Ff(t,e)},n}function aS(t,e,n){n=Pn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Ff(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ff(t,e),typeof r!="function"&&(mr===null?mr=new Set([this]):mr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Rv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Qx;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=lR.bind(null,t,e,n),e.then(t,t))}function Av(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Pv(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Pn(-1,1),e.tag=2,pr(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var Xx=Kn.ReactCurrentOwner,vt=!1;function ut(t,e,n,r){e.child=t===null?F_(e,null,n,r):gs(e,t.child,n,r)}function Nv(t,e,n,r,i){n=n.render;var s=e.ref;return rs(e,i),r=Cm(t,e,n,r,s,i),n=bm(),t!==null&&!vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,jn(t,e,i)):(de&&n&&pm(e),e.flags|=1,ut(t,e,r,i),e.child)}function Ov(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Mm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,uS(t,e,s,r,i)):(t=Zu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ko,n(o,r)&&t.ref===e.ref)return jn(t,e,i)}return e.flags|=1,t=yr(s,r),t.ref=e.ref,t.return=e,e.child=t}function uS(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ko(s,r)&&t.ref===e.ref)if(vt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(vt=!0);else return e.lanes=t.lanes,jn(t,e,i)}return jf(t,e,n,r,i)}function lS(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},se(Gi,kt),kt|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,se(Gi,kt),kt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,se(Gi,kt),kt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,se(Gi,kt),kt|=r;return ut(t,e,i,n),e.child}function cS(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function jf(t,e,n,r,i){var s=_t(n)?ai:it.current;return s=ps(e,s),rs(e,i),n=Cm(t,e,n,r,s,i),r=bm(),t!==null&&!vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,jn(t,e,i)):(de&&r&&pm(e),e.flags|=1,ut(t,e,n,i),e.child)}function Dv(t,e,n,r,i){if(_t(n)){var s=!0;Il(e)}else s=!1;if(rs(e,i),e.stateNode===null)Xu(t,e),M_(e,n,r),Uf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,l=n.contextType;typeof l=="object"&&l!==null?l=qt(l):(l=_t(n)?ai:it.current,l=ps(e,l));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==l)&&kv(e,o,r,l),Jn=!1;var d=e.memoizedState;o.state=d,xl(e,r,o,i),u=e.memoizedState,a!==r||d!==u||wt.current||Jn?(typeof c=="function"&&(Mf(e,n,c,r),u=e.memoizedState),(a=Jn||Tv(e,n,a,r,d,u,l))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=l,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,$_(t,e),a=e.memoizedProps,l=e.type===e.elementType?a:Yt(e.type,a),o.props=l,h=e.pendingProps,d=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=qt(u):(u=_t(n)?ai:it.current,u=ps(e,u));var f=n.getDerivedStateFromProps;(c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==u)&&kv(e,o,r,u),Jn=!1,d=e.memoizedState,o.state=d,xl(e,r,o,i);var m=e.memoizedState;a!==h||d!==m||wt.current||Jn?(typeof f=="function"&&(Mf(e,n,f,r),m=e.memoizedState),(l=Jn||Tv(e,n,l,r,d,m,u)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,m,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,m,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=m),o.props=r,o.state=m,o.context=u,r=l):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Vf(t,e,n,r,s,i)}function Vf(t,e,n,r,i,s){cS(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&wv(e,n,!1),jn(t,e,s);r=e.stateNode,Xx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=gs(e,t.child,null,s),e.child=gs(e,null,a,s)):ut(t,e,a,s),e.memoizedState=r.state,i&&wv(e,n,!0),e.child}function hS(t){var e=t.stateNode;e.pendingContext?vv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&vv(t,e.context,!1),Em(t,e.containerInfo)}function $v(t,e,n,r,i){return ms(),gm(i),e.flags|=256,ut(t,e,n,r),e.child}var zf={dehydrated:null,treeContext:null,retryLane:0};function Bf(t){return{baseLanes:t,cachePool:null,transitions:null}}function dS(t,e,n){var r=e.pendingProps,i=ge.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),se(ge,i&1),t===null)return $f(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Cc(o,r,0,null),t=ni(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Bf(n),e.memoizedState=zf,t):Am(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Yx(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return(o&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=yr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=yr(a,s):(s=ni(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Bf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=zf,r}return s=t.child,t=s.sibling,r=yr(s,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Am(t,e){return e=Cc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Cu(t,e,n,r){return r!==null&&gm(r),gs(e,t.child,null,n),t=Am(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Yx(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=wd(Error(C(422))),Cu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Cc({mode:"visible",children:r.children},i,0,null),s=ni(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&gs(e,t.child,null,o),e.child.memoizedState=Bf(o),e.memoizedState=zf,s);if((e.mode&1)===0)return Cu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(C(419)),r=wd(s,r,void 0),Cu(t,e,o,r)}if(a=(o&t.childLanes)!==0,vt||a){if(r=Le,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Fn(t,i),nn(r,t,i,-1))}return Lm(),r=wd(Error(C(421))),Cu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=cR.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ct=fr(i.nextSibling),xt=e,de=!0,Zt=null,t!==null&&(Mt[Ut++]=Cn,Mt[Ut++]=bn,Mt[Ut++]=ui,Cn=t.id,bn=t.overflow,ui=e),e=Am(e,r.children),e.flags|=4096,e)}function Lv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Lf(t.return,e,n)}function _d(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function fS(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ut(t,e,r.children,n),r=ge.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Lv(t,n,e);else if(t.tag===19)Lv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(se(ge,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Rl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),_d(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Rl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}_d(e,!0,n,null,s);break;case"together":_d(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Xu(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function jn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ci|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(C(153));if(e.child!==null){for(t=e.child,n=yr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=yr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Jx(t,e,n){switch(e.tag){case 3:hS(e),ms();break;case 5:j_(e);break;case 1:_t(e.type)&&Il(e);break;case 4:Em(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;se(Cl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(se(ge,ge.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?dS(t,e,n):(se(ge,ge.current&1),t=jn(t,e,n),t!==null?t.sibling:null);se(ge,ge.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return fS(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),se(ge,ge.current),r)break;return null;case 22:case 23:return e.lanes=0,lS(t,e,n)}return jn(t,e,n)}var pS,Hf,mS,gS;pS=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Hf=function(){};mS=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Xr(yn.current);var s=null;switch(n){case"input":i=df(t,i),r=df(t,r),s=[];break;case"select":i=ve({},i,{value:void 0}),r=ve({},r,{value:void 0}),s=[];break;case"textarea":i=mf(t,i),r=mf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Sl)}yf(n,r);var o;n=null;for(l in i)if(!r.hasOwnProperty(l)&&i.hasOwnProperty(l)&&i[l]!=null)if(l==="style"){var a=i[l];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(jo.hasOwnProperty(l)?s||(s=[]):(s=s||[]).push(l,null));for(l in r){var u=r[l];if(a=i!=null?i[l]:void 0,r.hasOwnProperty(l)&&u!==a&&(u!=null||a!=null))if(l==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(l,n)),n=u;else l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(l,u)):l==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(l,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&(jo.hasOwnProperty(l)?(u!=null&&l==="onScroll"&&ae("scroll",t),s||a===u||(s=[])):(s=s||[]).push(l,u))}n&&(s=s||[]).push("style",n);var l=s;(e.updateQueue=l)&&(e.flags|=4)}};gS=function(t,e,n,r){n!==r&&(e.flags|=4)};function ro(t,e){if(!de)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Qe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Zx(t,e,n){var r=e.pendingProps;switch(mm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(e),null;case 1:return _t(e.type)&&El(),Qe(e),null;case 3:return r=e.stateNode,ys(),le(wt),le(it),Tm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Tu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Zt!==null&&(Jf(Zt),Zt=null))),Hf(t,e),Qe(e),null;case 5:Im(e);var i=Xr(Jo.current);if(n=e.type,t!==null&&e.stateNode!=null)mS(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(C(166));return Qe(e),null}if(t=Xr(yn.current),Tu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[fn]=e,r[Xo]=s,t=(e.mode&1)!==0,n){case"dialog":ae("cancel",r),ae("close",r);break;case"iframe":case"object":case"embed":ae("load",r);break;case"video":case"audio":for(i=0;i<po.length;i++)ae(po[i],r);break;case"source":ae("error",r);break;case"img":case"image":case"link":ae("error",r),ae("load",r);break;case"details":ae("toggle",r);break;case"input":qy(r,s),ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ae("invalid",r);break;case"textarea":Ky(r,s),ae("invalid",r)}yf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Iu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Iu(r.textContent,a,t),i=["children",""+a]):jo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ae("scroll",r)}switch(n){case"input":mu(r),Wy(r,s,!0);break;case"textarea":mu(r),Gy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Sl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=B1(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[fn]=e,t[Xo]=r,pS(t,e,!1,!1),e.stateNode=t;e:{switch(o=vf(n,r),n){case"dialog":ae("cancel",t),ae("close",t),i=r;break;case"iframe":case"object":case"embed":ae("load",t),i=r;break;case"video":case"audio":for(i=0;i<po.length;i++)ae(po[i],t);i=r;break;case"source":ae("error",t),i=r;break;case"img":case"image":case"link":ae("error",t),ae("load",t),i=r;break;case"details":ae("toggle",t),i=r;break;case"input":qy(t,r),i=df(t,r),ae("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ve({},r,{value:void 0}),ae("invalid",t);break;case"textarea":Ky(t,r),i=mf(t,r),ae("invalid",t);break;default:i=r}yf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?W1(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&H1(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Vo(t,u):typeof u=="number"&&Vo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(jo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ae("scroll",t):u!=null&&em(t,s,u,o))}switch(n){case"input":mu(t),Wy(t,r,!1);break;case"textarea":mu(t),Gy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Er(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Zi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Zi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Sl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Qe(e),null;case 6:if(t&&e.stateNode!=null)gS(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(C(166));if(n=Xr(Jo.current),Xr(yn.current),Tu(e)){if(r=e.stateNode,n=e.memoizedProps,r[fn]=e,(s=r.nodeValue!==n)&&(t=xt,t!==null))switch(t.tag){case 3:Iu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Iu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[fn]=e,e.stateNode=r}return Qe(e),null;case 13:if(le(ge),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(de&&Ct!==null&&(e.mode&1)!==0&&(e.flags&128)===0)O_(),ms(),e.flags|=98560,s=!1;else if(s=Tu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(C(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(C(317));s[fn]=e}else ms(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Qe(e),s=!1}else Zt!==null&&(Jf(Zt),Zt=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(ge.current&1)!==0?Ae===0&&(Ae=3):Lm())),e.updateQueue!==null&&(e.flags|=4),Qe(e),null);case 4:return ys(),Hf(t,e),t===null&&Go(e.stateNode.containerInfo),Qe(e),null;case 10:return wm(e.type._context),Qe(e),null;case 17:return _t(e.type)&&El(),Qe(e),null;case 19:if(le(ge),s=e.memoizedState,s===null)return Qe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ro(s,!1);else{if(Ae!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=Rl(t),o!==null){for(e.flags|=128,ro(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return se(ge,ge.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ie()>ws&&(e.flags|=128,r=!0,ro(s,!1),e.lanes=4194304)}else{if(!r)if(t=Rl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ro(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!de)return Qe(e),null}else 2*Ie()-s.renderingStartTime>ws&&n!==1073741824&&(e.flags|=128,r=!0,ro(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ie(),e.sibling=null,n=ge.current,se(ge,r?n&1|2:n&1),e):(Qe(e),null);case 22:case 23:return $m(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(kt&1073741824)!==0&&(Qe(e),e.subtreeFlags&6&&(e.flags|=8192)):Qe(e),null;case 24:return null;case 25:return null}throw Error(C(156,e.tag))}function eR(t,e){switch(mm(e),e.tag){case 1:return _t(e.type)&&El(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ys(),le(wt),le(it),Tm(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return Im(e),null;case 13:if(le(ge),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(C(340));ms()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return le(ge),null;case 4:return ys(),null;case 10:return wm(e.type._context),null;case 22:case 23:return $m(),null;case 24:return null;default:return null}}var bu=!1,Ze=!1,tR=typeof WeakSet=="function"?WeakSet:Set,A=null;function Ki(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){we(t,e,r)}else n.current=null}function qf(t,e,n){try{n()}catch(r){we(t,e,r)}}var Mv=!1;function nR(t,e){if(xf=vl,t=__(),fm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,l=0,c=0,h=t,d=null;t:for(;;){for(var f;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(u=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(f=h.firstChild)!==null;)d=h,h=f;for(;;){if(h===t)break t;if(d===n&&++l===i&&(a=o),d===s&&++c===r&&(u=o),(f=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=f}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Rf={focusedElem:t,selectionRange:n},vl=!1,A=e;A!==null;)if(e=A,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,A=t;else for(;A!==null;){e=A;try{var m=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var y=m.memoizedProps,w=m.memoizedState,g=e.stateNode,p=g.getSnapshotBeforeUpdate(e.elementType===e.type?y:Yt(e.type,y),w);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(_){we(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,A=t;break}A=e.return}return m=Mv,Mv=!1,m}function xo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&qf(e,n,s)}i=i.next}while(i!==r)}}function Tc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Wf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function yS(t){var e=t.alternate;e!==null&&(t.alternate=null,yS(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[fn],delete e[Xo],delete e[Nf],delete e[Ux],delete e[Fx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function vS(t){return t.tag===5||t.tag===3||t.tag===4}function Uv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||vS(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Kf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Sl));else if(r!==4&&(t=t.child,t!==null))for(Kf(t,e,n),t=t.sibling;t!==null;)Kf(t,e,n),t=t.sibling}function Gf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Gf(t,e,n),t=t.sibling;t!==null;)Gf(t,e,n),t=t.sibling}var Ve=null,Jt=!1;function Qn(t,e,n){for(n=n.child;n!==null;)wS(t,e,n),n=n.sibling}function wS(t,e,n){if(gn&&typeof gn.onCommitFiberUnmount=="function")try{gn.onCommitFiberUnmount(gc,n)}catch{}switch(n.tag){case 5:Ze||Ki(n,e);case 6:var r=Ve,i=Jt;Ve=null,Qn(t,e,n),Ve=r,Jt=i,Ve!==null&&(Jt?(t=Ve,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ve.removeChild(n.stateNode));break;case 18:Ve!==null&&(Jt?(t=Ve,n=n.stateNode,t.nodeType===8?fd(t.parentNode,n):t.nodeType===1&&fd(t,n),qo(t)):fd(Ve,n.stateNode));break;case 4:r=Ve,i=Jt,Ve=n.stateNode.containerInfo,Jt=!0,Qn(t,e,n),Ve=r,Jt=i;break;case 0:case 11:case 14:case 15:if(!Ze&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&qf(n,e,o),i=i.next}while(i!==r)}Qn(t,e,n);break;case 1:if(!Ze&&(Ki(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){we(n,e,a)}Qn(t,e,n);break;case 21:Qn(t,e,n);break;case 22:n.mode&1?(Ze=(r=Ze)||n.memoizedState!==null,Qn(t,e,n),Ze=r):Qn(t,e,n);break;default:Qn(t,e,n)}}function Fv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new tR),e.forEach(function(r){var i=hR.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Xt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ve=a.stateNode,Jt=!1;break e;case 3:Ve=a.stateNode.containerInfo,Jt=!0;break e;case 4:Ve=a.stateNode.containerInfo,Jt=!0;break e}a=a.return}if(Ve===null)throw Error(C(160));wS(s,o,i),Ve=null,Jt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(l){we(i,e,l)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)_S(e,t),e=e.sibling}function _S(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Xt(e,t),ln(t),r&4){try{xo(3,t,t.return),Tc(3,t)}catch(y){we(t,t.return,y)}try{xo(5,t,t.return)}catch(y){we(t,t.return,y)}}break;case 1:Xt(e,t),ln(t),r&512&&n!==null&&Ki(n,n.return);break;case 5:if(Xt(e,t),ln(t),r&512&&n!==null&&Ki(n,n.return),t.flags&32){var i=t.stateNode;try{Vo(i,"")}catch(y){we(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&V1(i,s),vf(a,o);var l=vf(a,s);for(o=0;o<u.length;o+=2){var c=u[o],h=u[o+1];c==="style"?W1(i,h):c==="dangerouslySetInnerHTML"?H1(i,h):c==="children"?Vo(i,h):em(i,c,h,l)}switch(a){case"input":ff(i,s);break;case"textarea":z1(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var f=s.value;f!=null?Zi(i,!!s.multiple,f,!1):d!==!!s.multiple&&(s.defaultValue!=null?Zi(i,!!s.multiple,s.defaultValue,!0):Zi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Xo]=s}catch(y){we(t,t.return,y)}}break;case 6:if(Xt(e,t),ln(t),r&4){if(t.stateNode===null)throw Error(C(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){we(t,t.return,y)}}break;case 3:if(Xt(e,t),ln(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{qo(e.containerInfo)}catch(y){we(t,t.return,y)}break;case 4:Xt(e,t),ln(t);break;case 13:Xt(e,t),ln(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Om=Ie())),r&4&&Fv(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Ze=(l=Ze)||c,Xt(e,t),Ze=l):Xt(e,t),ln(t),r&8192){if(l=t.memoizedState!==null,(t.stateNode.isHidden=l)&&!c&&(t.mode&1)!==0)for(A=t,c=t.child;c!==null;){for(h=A=c;A!==null;){switch(d=A,f=d.child,d.tag){case 0:case 11:case 14:case 15:xo(4,d,d.return);break;case 1:Ki(d,d.return);var m=d.stateNode;if(typeof m.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(y){we(r,n,y)}}break;case 5:Ki(d,d.return);break;case 22:if(d.memoizedState!==null){Vv(h);continue}}f!==null?(f.return=d,A=f):Vv(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,l?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,u=h.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=q1("display",o))}catch(y){we(t,t.return,y)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=l?"":h.memoizedProps}catch(y){we(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Xt(e,t),ln(t),r&4&&Fv(t);break;case 21:break;default:Xt(e,t),ln(t)}}function ln(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(vS(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Vo(i,""),r.flags&=-33);var s=Uv(t);Gf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Uv(t);Kf(t,a,o);break;default:throw Error(C(161))}}catch(u){we(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function rR(t,e,n){A=t,SS(t)}function SS(t,e,n){for(var r=(t.mode&1)!==0;A!==null;){var i=A,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||bu;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||Ze;a=bu;var l=Ze;if(bu=o,(Ze=u)&&!l)for(A=i;A!==null;)o=A,u=o.child,o.tag===22&&o.memoizedState!==null?zv(i):u!==null?(u.return=o,A=u):zv(i);for(;s!==null;)A=s,SS(s),s=s.sibling;A=i,bu=a,Ze=l}jv(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,A=s):jv(t)}}function jv(t){for(;A!==null;){var e=A;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:Ze||Tc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ze)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Yt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Iv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Iv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var l=e.alternate;if(l!==null){var c=l.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&qo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}Ze||e.flags&512&&Wf(e)}catch(d){we(e,e.return,d)}}if(e===t){A=null;break}if(n=e.sibling,n!==null){n.return=e.return,A=n;break}A=e.return}}function Vv(t){for(;A!==null;){var e=A;if(e===t){A=null;break}var n=e.sibling;if(n!==null){n.return=e.return,A=n;break}A=e.return}}function zv(t){for(;A!==null;){var e=A;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Tc(4,e)}catch(u){we(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){we(e,i,u)}}var s=e.return;try{Wf(e)}catch(u){we(e,s,u)}break;case 5:var o=e.return;try{Wf(e)}catch(u){we(e,o,u)}}}catch(u){we(e,e.return,u)}if(e===t){A=null;break}var a=e.sibling;if(a!==null){a.return=e.return,A=a;break}A=e.return}}var iR=Math.ceil,Nl=Kn.ReactCurrentDispatcher,Pm=Kn.ReactCurrentOwner,Vt=Kn.ReactCurrentBatchConfig,Q=0,Le=null,xe=null,He=0,kt=0,Gi=Pr(0),Ae=0,na=null,ci=0,kc=0,Nm=0,Ro=null,gt=null,Om=0,ws=1/0,Tn=null,Ol=!1,Qf=null,mr=null,xu=!1,ur=null,Dl=0,Ao=0,Xf=null,Yu=-1,Ju=0;function ht(){return(Q&6)!==0?Ie():Yu!==-1?Yu:Yu=Ie()}function gr(t){return(t.mode&1)===0?1:(Q&2)!==0&&He!==0?He&-He:Vx.transition!==null?(Ju===0&&(Ju=i_()),Ju):(t=te,t!==0||(t=window.event,t=t===void 0?16:h_(t.type)),t)}function nn(t,e,n,r){if(50<Ao)throw Ao=0,Xf=null,Error(C(185));xa(t,n,r),((Q&2)===0||t!==Le)&&(t===Le&&((Q&2)===0&&(kc|=n),Ae===4&&er(t,He)),St(t,r),n===1&&Q===0&&(e.mode&1)===0&&(ws=Ie()+500,Sc&&Nr()))}function St(t,e){var n=t.callbackNode;Vb(t,e);var r=yl(t,t===Le?He:0);if(r===0)n!==null&&Yy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Yy(n),e===1)t.tag===0?jx(Bv.bind(null,t)):A_(Bv.bind(null,t)),Lx(function(){(Q&6)===0&&Nr()}),n=null;else{switch(s_(r)){case 1:n=sm;break;case 4:n=n_;break;case 16:n=gl;break;case 536870912:n=r_;break;default:n=gl}n=RS(n,ES.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function ES(t,e){if(Yu=-1,Ju=0,(Q&6)!==0)throw Error(C(327));var n=t.callbackNode;if(is()&&t.callbackNode!==n)return null;var r=yl(t,t===Le?He:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=$l(t,r);else{e=r;var i=Q;Q|=2;var s=TS();(Le!==t||He!==e)&&(Tn=null,ws=Ie()+500,ti(t,e));do try{aR();break}catch(a){IS(t,a)}while(1);vm(),Nl.current=s,Q=i,xe!==null?e=0:(Le=null,He=0,e=Ae)}if(e!==0){if(e===2&&(i=If(t),i!==0&&(r=i,e=Yf(t,i))),e===1)throw n=na,ti(t,0),er(t,r),St(t,Ie()),n;if(e===6)er(t,r);else{if(i=t.current.alternate,(r&30)===0&&!sR(i)&&(e=$l(t,r),e===2&&(s=If(t),s!==0&&(r=s,e=Yf(t,s))),e===1))throw n=na,ti(t,0),er(t,r),St(t,Ie()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(C(345));case 2:qr(t,gt,Tn);break;case 3:if(er(t,r),(r&130023424)===r&&(e=Om+500-Ie(),10<e)){if(yl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ht(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Pf(qr.bind(null,t,gt,Tn),e);break}qr(t,gt,Tn);break;case 4:if(er(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-tn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*iR(r/1960))-r,10<r){t.timeoutHandle=Pf(qr.bind(null,t,gt,Tn),r);break}qr(t,gt,Tn);break;case 5:qr(t,gt,Tn);break;default:throw Error(C(329))}}}return St(t,Ie()),t.callbackNode===n?ES.bind(null,t):null}function Yf(t,e){var n=Ro;return t.current.memoizedState.isDehydrated&&(ti(t,e).flags|=256),t=$l(t,e),t!==2&&(e=gt,gt=n,e!==null&&Jf(e)),t}function Jf(t){gt===null?gt=t:gt.push.apply(gt,t)}function sR(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!sn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function er(t,e){for(e&=~Nm,e&=~kc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-tn(e),r=1<<n;t[n]=-1,e&=~r}}function Bv(t){if((Q&6)!==0)throw Error(C(327));is();var e=yl(t,0);if((e&1)===0)return St(t,Ie()),null;var n=$l(t,e);if(t.tag!==0&&n===2){var r=If(t);r!==0&&(e=r,n=Yf(t,r))}if(n===1)throw n=na,ti(t,0),er(t,e),St(t,Ie()),n;if(n===6)throw Error(C(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,qr(t,gt,Tn),St(t,Ie()),null}function Dm(t,e){var n=Q;Q|=1;try{return t(e)}finally{Q=n,Q===0&&(ws=Ie()+500,Sc&&Nr())}}function hi(t){ur!==null&&ur.tag===0&&(Q&6)===0&&is();var e=Q;Q|=1;var n=Vt.transition,r=te;try{if(Vt.transition=null,te=1,t)return t()}finally{te=r,Vt.transition=n,Q=e,(Q&6)===0&&Nr()}}function $m(){kt=Gi.current,le(Gi)}function ti(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,$x(n)),xe!==null)for(n=xe.return;n!==null;){var r=n;switch(mm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&El();break;case 3:ys(),le(wt),le(it),Tm();break;case 5:Im(r);break;case 4:ys();break;case 13:le(ge);break;case 19:le(ge);break;case 10:wm(r.type._context);break;case 22:case 23:$m()}n=n.return}if(Le=t,xe=t=yr(t.current,null),He=kt=e,Ae=0,na=null,Nm=kc=ci=0,gt=Ro=null,Qr!==null){for(e=0;e<Qr.length;e++)if(n=Qr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Qr=null}return t}function IS(t,e){do{var n=xe;try{if(vm(),Gu.current=Pl,Al){for(var r=ye.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Al=!1}if(li=0,$e=Re=ye=null,bo=!1,Zo=0,Pm.current=null,n===null||n.return===null){Ae=1,na=e,xe=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=He,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var l=u,c=a,h=c.tag;if((c.mode&1)===0&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=Av(o);if(f!==null){f.flags&=-257,Pv(f,o,a,s,e),f.mode&1&&Rv(s,l,e),e=f,u=l;var m=e.updateQueue;if(m===null){var y=new Set;y.add(u),e.updateQueue=y}else m.add(u);break e}else{if((e&1)===0){Rv(s,l,e),Lm();break e}u=Error(C(426))}}else if(de&&a.mode&1){var w=Av(o);if(w!==null){(w.flags&65536)===0&&(w.flags|=256),Pv(w,o,a,s,e),gm(vs(u,a));break e}}s=u=vs(u,a),Ae!==4&&(Ae=2),Ro===null?Ro=[s]:Ro.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=oS(s,u,e);Ev(s,g);break e;case 1:a=u;var p=s.type,v=s.stateNode;if((s.flags&128)===0&&(typeof p.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(mr===null||!mr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var _=aS(s,a,e);Ev(s,_);break e}}s=s.return}while(s!==null)}CS(n)}catch(E){e=E,xe===n&&n!==null&&(xe=n=n.return);continue}break}while(1)}function TS(){var t=Nl.current;return Nl.current=Pl,t===null?Pl:t}function Lm(){(Ae===0||Ae===3||Ae===2)&&(Ae=4),Le===null||(ci&268435455)===0&&(kc&268435455)===0||er(Le,He)}function $l(t,e){var n=Q;Q|=2;var r=TS();(Le!==t||He!==e)&&(Tn=null,ti(t,e));do try{oR();break}catch(i){IS(t,i)}while(1);if(vm(),Q=n,Nl.current=r,xe!==null)throw Error(C(261));return Le=null,He=0,Ae}function oR(){for(;xe!==null;)kS(xe)}function aR(){for(;xe!==null&&!Nb();)kS(xe)}function kS(t){var e=xS(t.alternate,t,kt);t.memoizedProps=t.pendingProps,e===null?CS(t):xe=e,Pm.current=null}function CS(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=Zx(n,e,kt),n!==null){xe=n;return}}else{if(n=eR(n,e),n!==null){n.flags&=32767,xe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ae=6,xe=null;return}}if(e=e.sibling,e!==null){xe=e;return}xe=e=t}while(e!==null);Ae===0&&(Ae=5)}function qr(t,e,n){var r=te,i=Vt.transition;try{Vt.transition=null,te=1,uR(t,e,n,r)}finally{Vt.transition=i,te=r}return null}function uR(t,e,n,r){do is();while(ur!==null);if((Q&6)!==0)throw Error(C(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(C(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(zb(t,s),t===Le&&(xe=Le=null,He=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||xu||(xu=!0,RS(gl,function(){return is(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=Vt.transition,Vt.transition=null;var o=te;te=1;var a=Q;Q|=4,Pm.current=null,nR(t,n),_S(n,t),xx(Rf),vl=!!xf,Rf=xf=null,t.current=n,rR(n),Ob(),Q=a,te=o,Vt.transition=s}else t.current=n;if(xu&&(xu=!1,ur=t,Dl=i),s=t.pendingLanes,s===0&&(mr=null),Lb(n.stateNode),St(t,Ie()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ol)throw Ol=!1,t=Qf,Qf=null,t;return(Dl&1)!==0&&t.tag!==0&&is(),s=t.pendingLanes,(s&1)!==0?t===Xf?Ao++:(Ao=0,Xf=t):Ao=0,Nr(),null}function is(){if(ur!==null){var t=s_(Dl),e=Vt.transition,n=te;try{if(Vt.transition=null,te=16>t?16:t,ur===null)var r=!1;else{if(t=ur,ur=null,Dl=0,(Q&6)!==0)throw Error(C(331));var i=Q;for(Q|=4,A=t.current;A!==null;){var s=A,o=s.child;if((A.flags&16)!==0){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var l=a[u];for(A=l;A!==null;){var c=A;switch(c.tag){case 0:case 11:case 15:xo(8,c,s)}var h=c.child;if(h!==null)h.return=c,A=h;else for(;A!==null;){c=A;var d=c.sibling,f=c.return;if(yS(c),c===l){A=null;break}if(d!==null){d.return=f,A=d;break}A=f}}}var m=s.alternate;if(m!==null){var y=m.child;if(y!==null){m.child=null;do{var w=y.sibling;y.sibling=null,y=w}while(y!==null)}}A=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,A=o;else e:for(;A!==null;){if(s=A,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:xo(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,A=g;break e}A=s.return}}var p=t.current;for(A=p;A!==null;){o=A;var v=o.child;if((o.subtreeFlags&2064)!==0&&v!==null)v.return=o,A=v;else e:for(o=p;A!==null;){if(a=A,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Tc(9,a)}}catch(E){we(a,a.return,E)}if(a===o){A=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,A=_;break e}A=a.return}}if(Q=i,Nr(),gn&&typeof gn.onPostCommitFiberRoot=="function")try{gn.onPostCommitFiberRoot(gc,t)}catch{}r=!0}return r}finally{te=n,Vt.transition=e}}return!1}function Hv(t,e,n){e=vs(n,e),e=oS(t,e,1),t=pr(t,e,1),e=ht(),t!==null&&(xa(t,1,e),St(t,e))}function we(t,e,n){if(t.tag===3)Hv(t,t,n);else for(;e!==null;){if(e.tag===3){Hv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mr===null||!mr.has(r))){t=vs(n,t),t=aS(e,t,1),e=pr(e,t,1),t=ht(),e!==null&&(xa(e,1,t),St(e,t));break}}e=e.return}}function lR(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ht(),t.pingedLanes|=t.suspendedLanes&n,Le===t&&(He&n)===n&&(Ae===4||Ae===3&&(He&130023424)===He&&500>Ie()-Om?ti(t,0):Nm|=n),St(t,e)}function bS(t,e){e===0&&((t.mode&1)===0?e=1:(e=vu,vu<<=1,(vu&130023424)===0&&(vu=4194304)));var n=ht();t=Fn(t,e),t!==null&&(xa(t,e,n),St(t,n))}function cR(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),bS(t,n)}function hR(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(e),bS(t,n)}var xS;xS=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||wt.current)vt=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return vt=!1,Jx(t,e,n);vt=(t.flags&131072)!==0}else vt=!1,de&&(e.flags&1048576)!==0&&P_(e,kl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Xu(t,e),t=e.pendingProps;var i=ps(e,it.current);rs(e,n),i=Cm(null,e,r,t,i,n);var s=bm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,_t(r)?(s=!0,Il(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Sm(e),i.updater=Ec,e.stateNode=i,i._reactInternals=e,Uf(e,r,t,n),e=Vf(null,e,r,!0,s,n)):(e.tag=0,de&&s&&pm(e),ut(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Xu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=fR(r),t=Yt(r,t),i){case 0:e=jf(null,e,r,t,n);break e;case 1:e=Dv(null,e,r,t,n);break e;case 11:e=Nv(null,e,r,t,n);break e;case 14:e=Ov(null,e,r,Yt(r.type,t),n);break e}throw Error(C(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),jf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),Dv(t,e,r,i,n);case 3:e:{if(hS(e),t===null)throw Error(C(387));r=e.pendingProps,s=e.memoizedState,i=s.element,$_(t,e),xl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=vs(Error(C(423)),e),e=$v(t,e,r,n,i);break e}else if(r!==i){i=vs(Error(C(424)),e),e=$v(t,e,r,n,i);break e}else for(Ct=fr(e.stateNode.containerInfo.firstChild),xt=e,de=!0,Zt=null,n=F_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ms(),r===i){e=jn(t,e,n);break e}ut(t,e,r,n)}e=e.child}return e;case 5:return j_(e),t===null&&$f(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Af(r,i)?o=null:s!==null&&Af(r,s)&&(e.flags|=32),cS(t,e),ut(t,e,o,n),e.child;case 6:return t===null&&$f(e),null;case 13:return dS(t,e,n);case 4:return Em(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=gs(e,null,r,n):ut(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),Nv(t,e,r,i,n);case 7:return ut(t,e,e.pendingProps,n),e.child;case 8:return ut(t,e,e.pendingProps.children,n),e.child;case 12:return ut(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,se(Cl,r._currentValue),r._currentValue=o,s!==null)if(sn(s.value,o)){if(s.children===i.children&&!wt.current){e=jn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Pn(-1,n&-n),u.tag=2;var l=s.updateQueue;if(l!==null){l=l.shared;var c=l.pending;c===null?u.next=u:(u.next=c.next,c.next=u),l.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Lf(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(C(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Lf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ut(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,rs(e,n),i=qt(i),r=r(i),e.flags|=1,ut(t,e,r,n),e.child;case 14:return r=e.type,i=Yt(r,e.pendingProps),i=Yt(r.type,i),Ov(t,e,r,i,n);case 15:return uS(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),Xu(t,e),e.tag=1,_t(r)?(t=!0,Il(e)):t=!1,rs(e,n),M_(e,r,i),Uf(e,r,i,n),Vf(null,e,r,!0,t,n);case 19:return fS(t,e,n);case 22:return lS(t,e,n)}throw Error(C(156,e.tag))};function RS(t,e){return t_(t,e)}function dR(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(t,e,n,r){return new dR(t,e,n,r)}function Mm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function fR(t){if(typeof t=="function")return Mm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===nm)return 11;if(t===rm)return 14}return 2}function yr(t,e){var n=t.alternate;return n===null?(n=jt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Zu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Mm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ui:return ni(n.children,i,s,e);case tm:o=8,i|=8;break;case uf:return t=jt(12,n,e,i|2),t.elementType=uf,t.lanes=s,t;case lf:return t=jt(13,n,e,i),t.elementType=lf,t.lanes=s,t;case cf:return t=jt(19,n,e,i),t.elementType=cf,t.lanes=s,t;case U1:return Cc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L1:o=10;break e;case M1:o=9;break e;case nm:o=11;break e;case rm:o=14;break e;case Yn:o=16,r=null;break e}throw Error(C(130,t==null?t:typeof t,""))}return e=jt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ni(t,e,n,r){return t=jt(7,t,r,e),t.lanes=n,t}function Cc(t,e,n,r){return t=jt(22,t,r,e),t.elementType=U1,t.lanes=n,t.stateNode={isHidden:!1},t}function Sd(t,e,n){return t=jt(6,t,null,e),t.lanes=n,t}function Ed(t,e,n){return e=jt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function pR(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=nd(0),this.expirationTimes=nd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Um(t,e,n,r,i,s,o,a,u){return t=new pR(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=jt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sm(s),t}function mR(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Mi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function AS(t){if(!t)return Ir;t=t._reactInternals;e:{if(Ii(t)!==t||t.tag!==1)throw Error(C(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(_t(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(C(171))}if(t.tag===1){var n=t.type;if(_t(n))return R_(t,n,e)}return e}function PS(t,e,n,r,i,s,o,a,u){return t=Um(n,r,!0,t,i,s,o,a,u),t.context=AS(null),n=t.current,r=ht(),i=gr(n),s=Pn(r,i),s.callback=e!=null?e:null,pr(n,s,i),t.current.lanes=i,xa(t,i,r),St(t,r),t}function bc(t,e,n,r){var i=e.current,s=ht(),o=gr(i);return n=AS(n),e.context===null?e.context=n:e.pendingContext=n,e=Pn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=pr(i,e,o),t!==null&&(nn(t,i,o,s),Ku(t,i,o)),o}function Ll(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function qv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Fm(t,e){qv(t,e),(t=t.alternate)&&qv(t,e)}function gR(){return null}var NS=typeof reportError=="function"?reportError:function(t){console.error(t)};function jm(t){this._internalRoot=t}xc.prototype.render=jm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(C(409));bc(t,e,null,null)};xc.prototype.unmount=jm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;hi(function(){bc(null,t,null,null)}),e[Un]=null}};function xc(t){this._internalRoot=t}xc.prototype.unstable_scheduleHydration=function(t){if(t){var e=u_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Zn.length&&e!==0&&e<Zn[n].priority;n++);Zn.splice(n,0,t),n===0&&c_(t)}};function Vm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Rc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Wv(){}function yR(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var l=Ll(o);s.call(l)}}var o=PS(e,r,t,0,null,!1,!1,"",Wv);return t._reactRootContainer=o,t[Un]=o.current,Go(t.nodeType===8?t.parentNode:t),hi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var l=Ll(u);a.call(l)}}var u=Um(t,0,!1,null,null,!1,!1,"",Wv);return t._reactRootContainer=u,t[Un]=u.current,Go(t.nodeType===8?t.parentNode:t),hi(function(){bc(e,u,n,r)}),u}function Ac(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=Ll(o);a.call(u)}}bc(e,o,t,i)}else o=yR(n,e,t,i,r);return Ll(o)}o_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=fo(e.pendingLanes);n!==0&&(om(e,n|1),St(e,Ie()),(Q&6)===0&&(ws=Ie()+500,Nr()))}break;case 13:hi(function(){var r=Fn(t,1);if(r!==null){var i=ht();nn(r,t,1,i)}}),Fm(t,1)}};am=function(t){if(t.tag===13){var e=Fn(t,134217728);if(e!==null){var n=ht();nn(e,t,134217728,n)}Fm(t,134217728)}};a_=function(t){if(t.tag===13){var e=gr(t),n=Fn(t,e);if(n!==null){var r=ht();nn(n,t,e,r)}Fm(t,e)}};u_=function(){return te};l_=function(t,e){var n=te;try{return te=t,e()}finally{te=n}};_f=function(t,e,n){switch(e){case"input":if(ff(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=_c(r);if(!i)throw Error(C(90));j1(r),ff(r,i)}}}break;case"textarea":z1(t,n);break;case"select":e=n.value,e!=null&&Zi(t,!!n.multiple,e,!1)}};Q1=Dm;X1=hi;var vR={usingClientEntryPoint:!1,Events:[Aa,zi,_c,K1,G1,Dm]},io={findFiberByHostInstance:Gr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},wR={bundleType:io.bundleType,version:io.version,rendererPackageName:io.rendererPackageName,rendererConfig:io.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Z1(t),t===null?null:t.stateNode},findFiberByHostInstance:io.findFiberByHostInstance||gR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ru=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ru.isDisabled&&Ru.supportsFiber)try{gc=Ru.inject(wR),gn=Ru}catch{}}Dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vR;Dt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vm(e))throw Error(C(200));return mR(t,e,null,n)};Dt.createRoot=function(t,e){if(!Vm(t))throw Error(C(299));var n=!1,r="",i=NS;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Um(t,1,!1,null,null,n,!1,r,i),t[Un]=e.current,Go(t.nodeType===8?t.parentNode:t),new jm(e)};Dt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(C(188)):(t=Object.keys(t).join(","),Error(C(268,t)));return t=Z1(e),t=t===null?null:t.stateNode,t};Dt.flushSync=function(t){return hi(t)};Dt.hydrate=function(t,e,n){if(!Rc(e))throw Error(C(200));return Ac(null,t,e,!0,n)};Dt.hydrateRoot=function(t,e,n){if(!Vm(t))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=NS;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=PS(e,null,t,1,n!=null?n:null,i,!1,s,o),t[Un]=e.current,Go(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new xc(e)};Dt.render=function(t,e,n){if(!Rc(e))throw Error(C(200));return Ac(null,t,e,!1,n)};Dt.unmountComponentAtNode=function(t){if(!Rc(t))throw Error(C(40));return t._reactRootContainer?(hi(function(){Ac(null,null,t,!1,function(){t._reactRootContainer=null,t[Un]=null})}),!0):!1};Dt.unstable_batchedUpdates=Dm;Dt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Rc(n))throw Error(C(200));if(t==null||t._reactInternals===void 0)throw Error(C(38));return Ac(t,e,n,!1,r)};Dt.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=Dt})(Yp);var Kv=Yp.exports;of.createRoot=Kv.createRoot,of.hydrateRoot=Kv.hydrateRoot;var zm={},Gn={exports:{}};(function(t){function e(n){return n&&n.__esModule?n:{default:n}}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports})(Gn);var Id={};function ie(){return ie=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ie.apply(this,arguments)}function Au(t){return t!==null&&typeof t=="object"&&t.constructor===Object}function Nn(t,e,n={clone:!0}){const r=n.clone?ie({},t):t;return Au(t)&&Au(e)&&Object.keys(e).forEach(i=>{i!=="__proto__"&&(Au(e[i])&&i in t&&Au(t[i])?r[i]=Nn(t[i],e[i],n):r[i]=e[i])}),r}function _s(t){let e="https://mui.com/production-error/?code="+t;for(let n=1;n<arguments.length;n+=1)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified MUI error #"+t+"; visit "+e+" for the full message."}var _R={exports:{}},ne={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bm=Symbol.for("react.element"),Hm=Symbol.for("react.portal"),Pc=Symbol.for("react.fragment"),Nc=Symbol.for("react.strict_mode"),Oc=Symbol.for("react.profiler"),Dc=Symbol.for("react.provider"),$c=Symbol.for("react.context"),SR=Symbol.for("react.server_context"),Lc=Symbol.for("react.forward_ref"),Mc=Symbol.for("react.suspense"),Uc=Symbol.for("react.suspense_list"),Fc=Symbol.for("react.memo"),jc=Symbol.for("react.lazy"),ER=Symbol.for("react.offscreen"),OS;OS=Symbol.for("react.module.reference");function Gt(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Bm:switch(t=t.type,t){case Pc:case Oc:case Nc:case Mc:case Uc:return t;default:switch(t=t&&t.$$typeof,t){case SR:case $c:case Lc:case jc:case Fc:case Dc:return t;default:return e}}case Hm:return e}}}ne.ContextConsumer=$c;ne.ContextProvider=Dc;ne.Element=Bm;ne.ForwardRef=Lc;ne.Fragment=Pc;ne.Lazy=jc;ne.Memo=Fc;ne.Portal=Hm;ne.Profiler=Oc;ne.StrictMode=Nc;ne.Suspense=Mc;ne.SuspenseList=Uc;ne.isAsyncMode=function(){return!1};ne.isConcurrentMode=function(){return!1};ne.isContextConsumer=function(t){return Gt(t)===$c};ne.isContextProvider=function(t){return Gt(t)===Dc};ne.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Bm};ne.isForwardRef=function(t){return Gt(t)===Lc};ne.isFragment=function(t){return Gt(t)===Pc};ne.isLazy=function(t){return Gt(t)===jc};ne.isMemo=function(t){return Gt(t)===Fc};ne.isPortal=function(t){return Gt(t)===Hm};ne.isProfiler=function(t){return Gt(t)===Oc};ne.isStrictMode=function(t){return Gt(t)===Nc};ne.isSuspense=function(t){return Gt(t)===Mc};ne.isSuspenseList=function(t){return Gt(t)===Uc};ne.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Pc||t===Oc||t===Nc||t===Mc||t===Uc||t===ER||typeof t=="object"&&t!==null&&(t.$$typeof===jc||t.$$typeof===Fc||t.$$typeof===Dc||t.$$typeof===$c||t.$$typeof===Lc||t.$$typeof===OS||t.getModuleId!==void 0)};ne.typeOf=Gt;(function(t){t.exports=ne})(_R);function On(t){if(typeof t!="string")throw new Error(_s(7));return t.charAt(0).toUpperCase()+t.slice(1)}function IR(...t){return t.reduce((e,n)=>n==null?e:function(...i){e.apply(this,i),n.apply(this,i)},()=>{})}function TR(t,e=166){let n;function r(...i){const s=()=>{t.apply(this,i)};clearTimeout(n),n=setTimeout(s,e)}return r.clear=()=>{clearTimeout(n)},r}function kR(t,e){return()=>null}function CR(t,e){return k.exports.isValidElement(t)&&e.indexOf(t.type.muiName)!==-1}function DS(t){return t&&t.ownerDocument||document}function bR(t){return DS(t).defaultView||window}function xR(t,e){return()=>null}function Zf(t,e){typeof t=="function"?t(e):t&&(t.current=e)}const RR=typeof window<"u"?k.exports.useLayoutEffect:k.exports.useEffect,$S=RR;let Gv=0;function AR(t){const[e,n]=k.exports.useState(t),r=t||e;return k.exports.useEffect(()=>{e==null&&(Gv+=1,n(`mui-${Gv}`))},[e]),r}const Qv=ds["useId"];function PR(t){if(Qv!==void 0){const e=Qv();return t!=null?t:e}return AR(t)}function NR(t,e,n,r,i){return null}function OR({controlled:t,default:e,name:n,state:r="value"}){const{current:i}=k.exports.useRef(t!==void 0),[s,o]=k.exports.useState(e),a=i?t:s,u=k.exports.useCallback(l=>{i||o(l)},[]);return[a,u]}function DR(t){const e=k.exports.useRef(t);return $S(()=>{e.current=t}),k.exports.useCallback((...n)=>(0,e.current)(...n),[])}function $R(t,e){return k.exports.useMemo(()=>t==null&&e==null?null:n=>{Zf(t,n),Zf(e,n)},[t,e])}let Vc=!0,ep=!1,Xv;const LR={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function MR(t){const{type:e,tagName:n}=t;return!!(n==="INPUT"&&LR[e]&&!t.readOnly||n==="TEXTAREA"&&!t.readOnly||t.isContentEditable)}function UR(t){t.metaKey||t.altKey||t.ctrlKey||(Vc=!0)}function Td(){Vc=!1}function FR(){this.visibilityState==="hidden"&&ep&&(Vc=!0)}function jR(t){t.addEventListener("keydown",UR,!0),t.addEventListener("mousedown",Td,!0),t.addEventListener("pointerdown",Td,!0),t.addEventListener("touchstart",Td,!0),t.addEventListener("visibilitychange",FR,!0)}function VR(t){const{target:e}=t;try{return e.matches(":focus-visible")}catch{}return Vc||MR(e)}function zR(){const t=k.exports.useCallback(i=>{i!=null&&jR(i.ownerDocument)},[]),e=k.exports.useRef(!1);function n(){return e.current?(ep=!0,window.clearTimeout(Xv),Xv=window.setTimeout(()=>{ep=!1},100),e.current=!1,!0):!1}function r(i){return VR(i)?(e.current=!0,!0):!1}return{isFocusVisibleRef:e,onFocus:r,onBlur:n,ref:t}}function BR(t,e){const n=ie({},e);return Object.keys(t).forEach(r=>{n[r]===void 0&&(n[r]=t[r])}),n}function HR(t,e,n){const r={};return Object.keys(t).forEach(i=>{r[i]=t[i].reduce((s,o)=>(o&&(s.push(e(o)),n&&n[o]&&s.push(n[o])),s),[]).join(" ")}),r}const Yv=t=>t,qR=()=>{let t=Yv;return{configure(e){t=e},generate(e){return t(e)},reset(){t=Yv}}},WR=qR(),LS=WR,KR={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",required:"required",selected:"selected"};function MS(t,e,n="Mui"){const r=KR[e];return r?`${n}-${r}`:`${LS.generate(t)}-${e}`}function GR(t,e,n="Mui"){const r={};return e.forEach(i=>{r[i]=MS(t,i,n)}),r}function rn(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function US(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=US(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function QR(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=US(t))&&(r&&(r+=" "),r+=e);return r}var zc={exports:{}},Bc={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var XR=k.exports,YR=Symbol.for("react.element"),JR=Symbol.for("react.fragment"),ZR=Object.prototype.hasOwnProperty,eA=XR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,tA={key:!0,ref:!0,__self:!0,__source:!0};function FS(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)ZR.call(e,r)&&!tA.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:YR,type:t,key:s,ref:o,props:i,_owner:eA.current}}Bc.Fragment=JR;Bc.jsx=FS;Bc.jsxs=FS;(function(t){t.exports=Bc})(zc);const qm=zc.exports.Fragment,I=zc.exports.jsx,X=zc.exports.jsxs,nA=Object.freeze(Object.defineProperty({__proto__:null,Fragment:qm,jsx:I,jsxs:X},Symbol.toStringTag,{value:"Module"}));function jS(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var rA=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,iA=jS(function(t){return rA.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91});function sA(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function oA(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var aA=function(){function t(n){var r=this;this._insertTag=function(i){var s;r.tags.length===0?r.insertionPoint?s=r.insertionPoint.nextSibling:r.prepend?s=r.container.firstChild:s=r.before:s=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,s),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(r){r.forEach(this._insertTag)},e.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(oA(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var s=sA(i);try{s.insertRule(r,s.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},e.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},t}(),Xe="-ms-",Ml="-moz-",Y="-webkit-",VS="comm",Wm="rule",Km="decl",uA="@import",zS="@keyframes",lA=Math.abs,Hc=String.fromCharCode,cA=Object.assign;function hA(t,e){return(((e<<2^mt(t,0))<<2^mt(t,1))<<2^mt(t,2))<<2^mt(t,3)}function BS(t){return t.trim()}function dA(t,e){return(t=e.exec(t))?t[0]:t}function Z(t,e,n){return t.replace(e,n)}function tp(t,e){return t.indexOf(e)}function mt(t,e){return t.charCodeAt(e)|0}function ra(t,e,n){return t.slice(e,n)}function hn(t){return t.length}function Gm(t){return t.length}function Pu(t,e){return e.push(t),t}function fA(t,e){return t.map(e).join("")}var qc=1,Ss=1,HS=0,It=0,be=0,Ls="";function Wc(t,e,n,r,i,s,o){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:qc,column:Ss,length:o,return:""}}function so(t,e){return cA(Wc("",null,null,"",null,null,0),t,{length:-t.length},e)}function pA(){return be}function mA(){return be=It>0?mt(Ls,--It):0,Ss--,be===10&&(Ss=1,qc--),be}function Rt(){return be=It<HS?mt(Ls,It++):0,Ss++,be===10&&(Ss=1,qc++),be}function vn(){return mt(Ls,It)}function el(){return It}function Na(t,e){return ra(Ls,t,e)}function ia(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function qS(t){return qc=Ss=1,HS=hn(Ls=t),It=0,[]}function WS(t){return Ls="",t}function tl(t){return BS(Na(It-1,np(t===91?t+2:t===40?t+1:t)))}function gA(t){for(;(be=vn())&&be<33;)Rt();return ia(t)>2||ia(be)>3?"":" "}function yA(t,e){for(;--e&&Rt()&&!(be<48||be>102||be>57&&be<65||be>70&&be<97););return Na(t,el()+(e<6&&vn()==32&&Rt()==32))}function np(t){for(;Rt();)switch(be){case t:return It;case 34:case 39:t!==34&&t!==39&&np(be);break;case 40:t===41&&np(t);break;case 92:Rt();break}return It}function vA(t,e){for(;Rt()&&t+be!==47+10;)if(t+be===42+42&&vn()===47)break;return"/*"+Na(e,It-1)+"*"+Hc(t===47?t:Rt())}function wA(t){for(;!ia(vn());)Rt();return Na(t,It)}function _A(t){return WS(nl("",null,null,null,[""],t=qS(t),0,[0],t))}function nl(t,e,n,r,i,s,o,a,u){for(var l=0,c=0,h=o,d=0,f=0,m=0,y=1,w=1,g=1,p=0,v="",_=i,E=s,x=r,T=v;w;)switch(m=p,p=Rt()){case 40:if(m!=108&&T.charCodeAt(h-1)==58){tp(T+=Z(tl(p),"&","&\f"),"&\f")!=-1&&(g=-1);break}case 34:case 39:case 91:T+=tl(p);break;case 9:case 10:case 13:case 32:T+=gA(m);break;case 92:T+=yA(el()-1,7);continue;case 47:switch(vn()){case 42:case 47:Pu(SA(vA(Rt(),el()),e,n),u);break;default:T+="/"}break;case 123*y:a[l++]=hn(T)*g;case 125*y:case 59:case 0:switch(p){case 0:case 125:w=0;case 59+c:f>0&&hn(T)-h&&Pu(f>32?Zv(T+";",r,n,h-1):Zv(Z(T," ","")+";",r,n,h-2),u);break;case 59:T+=";";default:if(Pu(x=Jv(T,e,n,l,c,i,a,v,_=[],E=[],h),s),p===123)if(c===0)nl(T,e,x,x,_,s,h,a,E);else switch(d){case 100:case 109:case 115:nl(t,x,x,r&&Pu(Jv(t,x,x,0,0,i,a,v,i,_=[],h),E),i,E,h,a,r?_:E);break;default:nl(T,x,x,x,[""],E,0,a,E)}}l=c=f=0,y=g=1,v=T="",h=o;break;case 58:h=1+hn(T),f=m;default:if(y<1){if(p==123)--y;else if(p==125&&y++==0&&mA()==125)continue}switch(T+=Hc(p),p*y){case 38:g=c>0?1:(T+="\f",-1);break;case 44:a[l++]=(hn(T)-1)*g,g=1;break;case 64:vn()===45&&(T+=tl(Rt())),d=vn(),c=h=hn(v=T+=wA(el())),p++;break;case 45:m===45&&hn(T)==2&&(y=0)}}return s}function Jv(t,e,n,r,i,s,o,a,u,l,c){for(var h=i-1,d=i===0?s:[""],f=Gm(d),m=0,y=0,w=0;m<r;++m)for(var g=0,p=ra(t,h+1,h=lA(y=o[m])),v=t;g<f;++g)(v=BS(y>0?d[g]+" "+p:Z(p,/&\f/g,d[g])))&&(u[w++]=v);return Wc(t,e,n,i===0?Wm:a,u,l,c)}function SA(t,e,n){return Wc(t,e,n,VS,Hc(pA()),ra(t,2,-2),0)}function Zv(t,e,n,r){return Wc(t,e,n,Km,ra(t,0,r),ra(t,r+1,-1),r)}function KS(t,e){switch(hA(t,e)){case 5103:return Y+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Y+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Y+t+Ml+t+Xe+t+t;case 6828:case 4268:return Y+t+Xe+t+t;case 6165:return Y+t+Xe+"flex-"+t+t;case 5187:return Y+t+Z(t,/(\w+).+(:[^]+)/,Y+"box-$1$2"+Xe+"flex-$1$2")+t;case 5443:return Y+t+Xe+"flex-item-"+Z(t,/flex-|-self/,"")+t;case 4675:return Y+t+Xe+"flex-line-pack"+Z(t,/align-content|flex-|-self/,"")+t;case 5548:return Y+t+Xe+Z(t,"shrink","negative")+t;case 5292:return Y+t+Xe+Z(t,"basis","preferred-size")+t;case 6060:return Y+"box-"+Z(t,"-grow","")+Y+t+Xe+Z(t,"grow","positive")+t;case 4554:return Y+Z(t,/([^-])(transform)/g,"$1"+Y+"$2")+t;case 6187:return Z(Z(Z(t,/(zoom-|grab)/,Y+"$1"),/(image-set)/,Y+"$1"),t,"")+t;case 5495:case 3959:return Z(t,/(image-set\([^]*)/,Y+"$1$`$1");case 4968:return Z(Z(t,/(.+:)(flex-)?(.*)/,Y+"box-pack:$3"+Xe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Y+t+t;case 4095:case 3583:case 4068:case 2532:return Z(t,/(.+)-inline(.+)/,Y+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(hn(t)-1-e>6)switch(mt(t,e+1)){case 109:if(mt(t,e+4)!==45)break;case 102:return Z(t,/(.+:)(.+)-([^]+)/,"$1"+Y+"$2-$3$1"+Ml+(mt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~tp(t,"stretch")?KS(Z(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(mt(t,e+1)!==115)break;case 6444:switch(mt(t,hn(t)-3-(~tp(t,"!important")&&10))){case 107:return Z(t,":",":"+Y)+t;case 101:return Z(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Y+(mt(t,14)===45?"inline-":"")+"box$3$1"+Y+"$2$3$1"+Xe+"$2box$3")+t}break;case 5936:switch(mt(t,e+11)){case 114:return Y+t+Xe+Z(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Y+t+Xe+Z(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Y+t+Xe+Z(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return Y+t+Xe+t+t}return t}function ss(t,e){for(var n="",r=Gm(t),i=0;i<r;i++)n+=e(t[i],i,t,e)||"";return n}function EA(t,e,n,r){switch(t.type){case uA:case Km:return t.return=t.return||t.value;case VS:return"";case zS:return t.return=t.value+"{"+ss(t.children,r)+"}";case Wm:t.value=t.props.join(",")}return hn(n=ss(t.children,r))?t.return=t.value+"{"+n+"}":""}function IA(t){var e=Gm(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function TA(t){return function(e){e.root||(e=e.return)&&t(e)}}function kA(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case Km:t.return=KS(t.value,t.length);break;case zS:return ss([so(t,{value:Z(t.value,"@","@"+Y)})],r);case Wm:if(t.length)return fA(t.props,function(i){switch(dA(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return ss([so(t,{props:[Z(i,/:(read-\w+)/,":"+Ml+"$1")]})],r);case"::placeholder":return ss([so(t,{props:[Z(i,/:(plac\w+)/,":"+Y+"input-$1")]}),so(t,{props:[Z(i,/:(plac\w+)/,":"+Ml+"$1")]}),so(t,{props:[Z(i,/:(plac\w+)/,Xe+"input-$1")]})],r)}return""})}}var CA=function(e,n,r){for(var i=0,s=0;i=s,s=vn(),i===38&&s===12&&(n[r]=1),!ia(s);)Rt();return Na(e,It)},bA=function(e,n){var r=-1,i=44;do switch(ia(i)){case 0:i===38&&vn()===12&&(n[r]=1),e[r]+=CA(It-1,n,r);break;case 2:e[r]+=tl(i);break;case 4:if(i===44){e[++r]=vn()===58?"&\f":"",n[r]=e[r].length;break}default:e[r]+=Hc(i)}while(i=Rt());return e},xA=function(e,n){return WS(bA(qS(e),n))},e0=new WeakMap,RA=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var n=e.value,r=e.parent,i=e.column===r.column&&e.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(e.props.length===1&&n.charCodeAt(0)!==58&&!e0.get(r))&&!i){e0.set(e,!0);for(var s=[],o=xA(n,s),a=r.props,u=0,l=0;u<o.length;u++)for(var c=0;c<a.length;c++,l++)e.props[l]=s[u]?o[u].replace(/&\f/g,a[c]):a[c]+" "+o[u]}}},AA=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}},PA=[kA],NA=function(e){var n=e.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(y){var w=y.getAttribute("data-emotion");w.indexOf(" ")!==-1&&(document.head.appendChild(y),y.setAttribute("data-s",""))})}var i=e.stylisPlugins||PA,s={},o,a=[];o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(y){for(var w=y.getAttribute("data-emotion").split(" "),g=1;g<w.length;g++)s[w[g]]=!0;a.push(y)});var u,l=[RA,AA];{var c,h=[EA,TA(function(y){c.insert(y)})],d=IA(l.concat(i,h)),f=function(w){return ss(_A(w),d)};u=function(w,g,p,v){c=p,f(w?w+"{"+g.styles+"}":g.styles),v&&(m.inserted[g.name]=!0)}}var m={key:n,sheet:new aA({key:n,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:u};return m.sheet.hydrate(a),m},GS={exports:{}},re={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fe=typeof Symbol=="function"&&Symbol.for,Qm=Fe?Symbol.for("react.element"):60103,Xm=Fe?Symbol.for("react.portal"):60106,Kc=Fe?Symbol.for("react.fragment"):60107,Gc=Fe?Symbol.for("react.strict_mode"):60108,Qc=Fe?Symbol.for("react.profiler"):60114,Xc=Fe?Symbol.for("react.provider"):60109,Yc=Fe?Symbol.for("react.context"):60110,Ym=Fe?Symbol.for("react.async_mode"):60111,Jc=Fe?Symbol.for("react.concurrent_mode"):60111,Zc=Fe?Symbol.for("react.forward_ref"):60112,eh=Fe?Symbol.for("react.suspense"):60113,OA=Fe?Symbol.for("react.suspense_list"):60120,th=Fe?Symbol.for("react.memo"):60115,nh=Fe?Symbol.for("react.lazy"):60116,DA=Fe?Symbol.for("react.block"):60121,$A=Fe?Symbol.for("react.fundamental"):60117,LA=Fe?Symbol.for("react.responder"):60118,MA=Fe?Symbol.for("react.scope"):60119;function Lt(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Qm:switch(t=t.type,t){case Ym:case Jc:case Kc:case Qc:case Gc:case eh:return t;default:switch(t=t&&t.$$typeof,t){case Yc:case Zc:case nh:case th:case Xc:return t;default:return e}}case Xm:return e}}}function QS(t){return Lt(t)===Jc}re.AsyncMode=Ym;re.ConcurrentMode=Jc;re.ContextConsumer=Yc;re.ContextProvider=Xc;re.Element=Qm;re.ForwardRef=Zc;re.Fragment=Kc;re.Lazy=nh;re.Memo=th;re.Portal=Xm;re.Profiler=Qc;re.StrictMode=Gc;re.Suspense=eh;re.isAsyncMode=function(t){return QS(t)||Lt(t)===Ym};re.isConcurrentMode=QS;re.isContextConsumer=function(t){return Lt(t)===Yc};re.isContextProvider=function(t){return Lt(t)===Xc};re.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Qm};re.isForwardRef=function(t){return Lt(t)===Zc};re.isFragment=function(t){return Lt(t)===Kc};re.isLazy=function(t){return Lt(t)===nh};re.isMemo=function(t){return Lt(t)===th};re.isPortal=function(t){return Lt(t)===Xm};re.isProfiler=function(t){return Lt(t)===Qc};re.isStrictMode=function(t){return Lt(t)===Gc};re.isSuspense=function(t){return Lt(t)===eh};re.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Kc||t===Jc||t===Qc||t===Gc||t===eh||t===OA||typeof t=="object"&&t!==null&&(t.$$typeof===nh||t.$$typeof===th||t.$$typeof===Xc||t.$$typeof===Yc||t.$$typeof===Zc||t.$$typeof===$A||t.$$typeof===LA||t.$$typeof===MA||t.$$typeof===DA)};re.typeOf=Lt;(function(t){t.exports=re})(GS);var XS=GS.exports,UA={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},FA={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},YS={};YS[XS.ForwardRef]=UA;YS[XS.Memo]=FA;var jA=!0;function VA(t,e,n){var r="";return n.split(" ").forEach(function(i){t[i]!==void 0?e.push(t[i]+";"):r+=i+" "}),r}var JS=function(e,n,r){var i=e.key+"-"+n.name;(r===!1||jA===!1)&&e.registered[i]===void 0&&(e.registered[i]=n.styles)},zA=function(e,n,r){JS(e,n,r);var i=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var s=n;do e.insert(n===s?"."+i:"",s,e.sheet,!0),s=s.next;while(s!==void 0)}};function BA(t){for(var e=0,n,r=0,i=t.length;i>=4;++r,i-=4)n=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(i){case 3:e^=(t.charCodeAt(r+2)&255)<<16;case 2:e^=(t.charCodeAt(r+1)&255)<<8;case 1:e^=t.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var HA={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},qA=/[A-Z]|^ms/g,WA=/_EMO_([^_]+?)_([^]*?)_EMO_/g,ZS=function(e){return e.charCodeAt(1)===45},t0=function(e){return e!=null&&typeof e!="boolean"},kd=jS(function(t){return ZS(t)?t:t.replace(qA,"-$&").toLowerCase()}),n0=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(WA,function(r,i,s){return dn={name:i,styles:s,next:dn},i})}return HA[e]!==1&&!ZS(e)&&typeof n=="number"&&n!==0?n+"px":n};function sa(t,e,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return dn={name:n.name,styles:n.styles,next:dn},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)dn={name:r.name,styles:r.styles,next:dn},r=r.next;var i=n.styles+";";return i}return KA(t,e,n)}case"function":{if(t!==void 0){var s=dn,o=n(t);return dn=s,sa(t,e,o)}break}}if(e==null)return n;var a=e[n];return a!==void 0?a:n}function KA(t,e,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=sa(t,e,n[i])+";";else for(var s in n){var o=n[s];if(typeof o!="object")e!=null&&e[o]!==void 0?r+=s+"{"+e[o]+"}":t0(o)&&(r+=kd(s)+":"+n0(s,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&(e==null||e[o[0]]===void 0))for(var a=0;a<o.length;a++)t0(o[a])&&(r+=kd(s)+":"+n0(s,o[a])+";");else{var u=sa(t,e,o);switch(s){case"animation":case"animationName":{r+=kd(s)+":"+u+";";break}default:r+=s+"{"+u+"}"}}}return r}var r0=/label:\s*([^\s;\n{]+)\s*(;|$)/g,dn,GA=function(e,n,r){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var i=!0,s="";dn=void 0;var o=e[0];o==null||o.raw===void 0?(i=!1,s+=sa(r,n,o)):s+=o[0];for(var a=1;a<e.length;a++)s+=sa(r,n,e[a]),i&&(s+=o[a]);r0.lastIndex=0;for(var u="",l;(l=r0.exec(s))!==null;)u+="-"+l[1];var c=BA(s)+u;return{name:c,styles:s,next:dn}},QA=function(e){return e()},XA=ds["useInsertionEffect"]?ds["useInsertionEffect"]:!1,YA=XA||QA,eE=k.exports.createContext(typeof HTMLElement<"u"?NA({key:"css"}):null);eE.Provider;var JA=function(e){return k.exports.forwardRef(function(n,r){var i=k.exports.useContext(eE);return e(n,i,r)})},ZA=k.exports.createContext({}),eP=iA,tP=function(e){return e!=="theme"},i0=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?eP:tP},s0=function(e,n,r){var i;if(n){var s=n.shouldForwardProp;i=e.__emotion_forwardProp&&s?function(o){return e.__emotion_forwardProp(o)&&s(o)}:s}return typeof i!="function"&&r&&(i=e.__emotion_forwardProp),i},nP=function(e){var n=e.cache,r=e.serialized,i=e.isStringTag;return JS(n,r,i),YA(function(){return zA(n,r,i)}),null},rP=function t(e,n){var r=e.__emotion_real===e,i=r&&e.__emotion_base||e,s,o;n!==void 0&&(s=n.label,o=n.target);var a=s0(e,n,r),u=a||i0(i),l=!u("as");return function(){var c=arguments,h=r&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(s!==void 0&&h.push("label:"+s+";"),c[0]==null||c[0].raw===void 0)h.push.apply(h,c);else{h.push(c[0][0]);for(var d=c.length,f=1;f<d;f++)h.push(c[f],c[0][f])}var m=JA(function(y,w,g){var p=l&&y.as||i,v="",_=[],E=y;if(y.theme==null){E={};for(var x in y)E[x]=y[x];E.theme=k.exports.useContext(ZA)}typeof y.className=="string"?v=VA(w.registered,_,y.className):y.className!=null&&(v=y.className+" ");var T=GA(h.concat(_),w.registered,E);v+=w.key+"-"+T.name,o!==void 0&&(v+=" "+o);var R=l&&a===void 0?i0(p):u,K={};for(var D in y)l&&D==="as"||R(D)&&(K[D]=y[D]);return K.className=v,K.ref=g,k.exports.createElement(k.exports.Fragment,null,k.exports.createElement(nP,{cache:w,serialized:T,isStringTag:typeof p=="string"}),k.exports.createElement(p,K))});return m.displayName=s!==void 0?s:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",m.defaultProps=e.defaultProps,m.__emotion_real=m,m.__emotion_base=i,m.__emotion_styles=h,m.__emotion_forwardProp=a,Object.defineProperty(m,"toString",{value:function(){return"."+o}}),m.withComponent=function(y,w){return t(y,ie({},n,w,{shouldForwardProp:s0(m,w,!0)})).apply(void 0,h)},m}},iP=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],rp=rP.bind();iP.forEach(function(t){rp[t]=rp(t)});const sP=rp;/** @license MUI v5.10.8
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function oP(t,e){return sP(t,e)}const aP=(t,e)=>{Array.isArray(t.__emotion_styles)&&(t.__emotion_styles=e(t.__emotion_styles))};function Po(t,e){return e?Nn(t,e,{clone:!1}):t}const Jm={xs:0,sm:600,md:900,lg:1200,xl:1536},o0={keys:["xs","sm","md","lg","xl"],up:t=>`@media (min-width:${Jm[t]}px)`};function Or(t,e,n){const r=t.theme||{};if(Array.isArray(e)){const s=r.breakpoints||o0;return e.reduce((o,a,u)=>(o[s.up(s.keys[u])]=n(e[u]),o),{})}if(typeof e=="object"){const s=r.breakpoints||o0;return Object.keys(e).reduce((o,a)=>{if(Object.keys(s.values||Jm).indexOf(a)!==-1){const u=s.up(a);o[u]=n(e[a],a)}else{const u=a;o[u]=e[u]}return o},{})}return n(e)}function uP(t={}){var e;return((e=t.keys)==null?void 0:e.reduce((r,i)=>{const s=t.up(i);return r[s]={},r},{}))||{}}function lP(t,e){return t.reduce((n,r)=>{const i=n[r];return(!i||Object.keys(i).length===0)&&delete n[r],n},e)}function Zm(t,e,n=!0){if(!e||typeof e!="string")return null;if(t&&t.vars&&n){const r=`vars.${e}`.split(".").reduce((i,s)=>i&&i[s]?i[s]:null,t);if(r!=null)return r}return e.split(".").reduce((r,i)=>r&&r[i]!=null?r[i]:null,t)}function a0(t,e,n,r=n){let i;return typeof t=="function"?i=t(n):Array.isArray(t)?i=t[n]||r:i=Zm(t,n)||r,e&&(i=e(i)),i}function P(t){const{prop:e,cssProperty:n=t.prop,themeKey:r,transform:i}=t,s=o=>{if(o[e]==null)return null;const a=o[e],u=o.theme,l=Zm(u,r)||{};return Or(o,a,h=>{let d=a0(l,i,h);return h===d&&typeof h=="string"&&(d=a0(l,i,`${e}${h==="default"?"":On(h)}`,h)),n===!1?d:{[n]:d}})};return s.propTypes={},s.filterProps=[e],s}function Dr(...t){const e=t.reduce((r,i)=>(i.filterProps.forEach(s=>{r[s]=i}),r),{}),n=r=>Object.keys(r).reduce((i,s)=>e[s]?Po(i,e[s](r)):i,{});return n.propTypes={},n.filterProps=t.reduce((r,i)=>r.concat(i.filterProps),[]),n}function cP(t){const e={};return n=>(e[n]===void 0&&(e[n]=t(n)),e[n])}const hP={m:"margin",p:"padding"},dP={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},u0={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},fP=cP(t=>{if(t.length>2)if(u0[t])t=u0[t];else return[t];const[e,n]=t.split(""),r=hP[e],i=dP[n]||"";return Array.isArray(i)?i.map(s=>r+s):[r+i]}),pP=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],mP=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"],tE=[...pP,...mP];function Oa(t,e,n,r){var i;const s=(i=Zm(t,e,!1))!=null?i:n;return typeof s=="number"?o=>typeof o=="string"?o:s*o:Array.isArray(s)?o=>typeof o=="string"?o:s[o]:typeof s=="function"?s:()=>{}}function nE(t){return Oa(t,"spacing",8)}function Da(t,e){if(typeof e=="string"||e==null)return e;const n=Math.abs(e),r=t(n);return e>=0?r:typeof r=="number"?-r:`-${r}`}function gP(t,e){return n=>t.reduce((r,i)=>(r[i]=Da(e,n),r),{})}function yP(t,e,n,r){if(e.indexOf(n)===-1)return null;const i=fP(n),s=gP(i,r),o=t[n];return Or(t,o,s)}function vP(t,e){const n=nE(t.theme);return Object.keys(t).map(r=>yP(t,e,r,n)).reduce(Po,{})}function rh(t){return vP(t,tE)}rh.propTypes={};rh.filterProps=tE;function $a(t){return typeof t!="number"?t:`${t}px solid`}const wP=P({prop:"border",themeKey:"borders",transform:$a}),_P=P({prop:"borderTop",themeKey:"borders",transform:$a}),SP=P({prop:"borderRight",themeKey:"borders",transform:$a}),EP=P({prop:"borderBottom",themeKey:"borders",transform:$a}),IP=P({prop:"borderLeft",themeKey:"borders",transform:$a}),TP=P({prop:"borderColor",themeKey:"palette"}),kP=P({prop:"borderTopColor",themeKey:"palette"}),CP=P({prop:"borderRightColor",themeKey:"palette"}),bP=P({prop:"borderBottomColor",themeKey:"palette"}),xP=P({prop:"borderLeftColor",themeKey:"palette"}),eg=t=>{if(t.borderRadius!==void 0&&t.borderRadius!==null){const e=Oa(t.theme,"shape.borderRadius",4),n=r=>({borderRadius:Da(e,r)});return Or(t,t.borderRadius,n)}return null};eg.propTypes={};eg.filterProps=["borderRadius"];const RP=Dr(wP,_P,SP,EP,IP,TP,kP,CP,bP,xP,eg),rE=RP,AP=P({prop:"displayPrint",cssProperty:!1,transform:t=>({"@media print":{display:t}})}),PP=P({prop:"display"}),NP=P({prop:"overflow"}),OP=P({prop:"textOverflow"}),DP=P({prop:"visibility"}),$P=P({prop:"whiteSpace"}),iE=Dr(AP,PP,NP,OP,DP,$P),LP=P({prop:"flexBasis"}),MP=P({prop:"flexDirection"}),UP=P({prop:"flexWrap"}),FP=P({prop:"justifyContent"}),jP=P({prop:"alignItems"}),VP=P({prop:"alignContent"}),zP=P({prop:"order"}),BP=P({prop:"flex"}),HP=P({prop:"flexGrow"}),qP=P({prop:"flexShrink"}),WP=P({prop:"alignSelf"}),KP=P({prop:"justifyItems"}),GP=P({prop:"justifySelf"}),QP=Dr(LP,MP,UP,FP,jP,VP,zP,BP,HP,qP,WP,KP,GP),sE=QP,tg=t=>{if(t.gap!==void 0&&t.gap!==null){const e=Oa(t.theme,"spacing",8),n=r=>({gap:Da(e,r)});return Or(t,t.gap,n)}return null};tg.propTypes={};tg.filterProps=["gap"];const ng=t=>{if(t.columnGap!==void 0&&t.columnGap!==null){const e=Oa(t.theme,"spacing",8),n=r=>({columnGap:Da(e,r)});return Or(t,t.columnGap,n)}return null};ng.propTypes={};ng.filterProps=["columnGap"];const rg=t=>{if(t.rowGap!==void 0&&t.rowGap!==null){const e=Oa(t.theme,"spacing",8),n=r=>({rowGap:Da(e,r)});return Or(t,t.rowGap,n)}return null};rg.propTypes={};rg.filterProps=["rowGap"];const XP=P({prop:"gridColumn"}),YP=P({prop:"gridRow"}),JP=P({prop:"gridAutoFlow"}),ZP=P({prop:"gridAutoColumns"}),eN=P({prop:"gridAutoRows"}),tN=P({prop:"gridTemplateColumns"}),nN=P({prop:"gridTemplateRows"}),rN=P({prop:"gridTemplateAreas"}),iN=P({prop:"gridArea"}),sN=Dr(tg,ng,rg,XP,YP,JP,ZP,eN,tN,nN,rN,iN),oE=sN,oN=P({prop:"color",themeKey:"palette"}),aN=P({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"}),uN=P({prop:"backgroundColor",themeKey:"palette"}),lN=Dr(oN,aN,uN),aE=lN,cN=P({prop:"position"}),hN=P({prop:"zIndex",themeKey:"zIndex"}),dN=P({prop:"top"}),fN=P({prop:"right"}),pN=P({prop:"bottom"}),mN=P({prop:"left"}),uE=Dr(cN,hN,dN,fN,pN,mN),gN=P({prop:"boxShadow",themeKey:"shadows"}),lE=gN;function $r(t){return t<=1&&t!==0?`${t*100}%`:t}const yN=P({prop:"width",transform:$r}),cE=t=>{if(t.maxWidth!==void 0&&t.maxWidth!==null){const e=n=>{var r,i,s;return{maxWidth:((r=t.theme)==null||(i=r.breakpoints)==null||(s=i.values)==null?void 0:s[n])||Jm[n]||$r(n)}};return Or(t,t.maxWidth,e)}return null};cE.filterProps=["maxWidth"];const vN=P({prop:"minWidth",transform:$r}),wN=P({prop:"height",transform:$r}),_N=P({prop:"maxHeight",transform:$r}),SN=P({prop:"minHeight",transform:$r});P({prop:"size",cssProperty:"width",transform:$r});P({prop:"size",cssProperty:"height",transform:$r});const EN=P({prop:"boxSizing"}),IN=Dr(yN,cE,vN,wN,_N,SN,EN),hE=IN,TN=P({prop:"fontFamily",themeKey:"typography"}),kN=P({prop:"fontSize",themeKey:"typography"}),CN=P({prop:"fontStyle",themeKey:"typography"}),bN=P({prop:"fontWeight",themeKey:"typography"}),xN=P({prop:"letterSpacing"}),RN=P({prop:"textTransform"}),AN=P({prop:"lineHeight"}),PN=P({prop:"textAlign"}),NN=P({prop:"typography",cssProperty:!1,themeKey:"typography"}),ON=Dr(NN,TN,kN,CN,bN,xN,AN,PN,RN),dE=ON,l0={borders:rE.filterProps,display:iE.filterProps,flexbox:sE.filterProps,grid:oE.filterProps,positions:uE.filterProps,palette:aE.filterProps,shadows:lE.filterProps,sizing:hE.filterProps,spacing:rh.filterProps,typography:dE.filterProps},fE={borders:rE,display:iE,flexbox:sE,grid:oE,positions:uE,palette:aE,shadows:lE,sizing:hE,spacing:rh,typography:dE};Object.keys(l0).reduce((t,e)=>(l0[e].forEach(n=>{t[n]=fE[e]}),t),{});function DN(...t){const e=t.reduce((r,i)=>r.concat(Object.keys(i)),[]),n=new Set(e);return t.every(r=>n.size===Object.keys(r).length)}function $N(t,e){return typeof t=="function"?t(e):t}function LN(t=fE){const e=Object.keys(t).reduce((i,s)=>(t[s].filterProps.forEach(o=>{i[o]=t[s]}),i),{});function n(i,s,o){const a={[i]:s,theme:o},u=e[i];return u?u(a):{[i]:s}}function r(i){const{sx:s,theme:o={}}=i||{};if(!s)return null;function a(u){let l=u;if(typeof u=="function")l=u(o);else if(typeof u!="object")return u;if(!l)return null;const c=uP(o.breakpoints),h=Object.keys(c);let d=c;return Object.keys(l).forEach(f=>{const m=$N(l[f],o);if(m!=null)if(typeof m=="object")if(e[f])d=Po(d,n(f,m,o));else{const y=Or({theme:o},m,w=>({[f]:w}));DN(y,m)?d[f]=r({sx:m,theme:o}):d=Po(d,y)}else d=Po(d,n(f,m,o))}),lP(h,d)}return Array.isArray(s)?s.map(a):a(s)}return r}const pE=LN();pE.filterProps=["sx"];const MN=pE,UN=["values","unit","step"],FN=t=>{const e=Object.keys(t).map(n=>({key:n,val:t[n]}))||[];return e.sort((n,r)=>n.val-r.val),e.reduce((n,r)=>ie({},n,{[r.key]:r.val}),{})};function jN(t){const{values:e={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:r=5}=t,i=rn(t,UN),s=FN(e),o=Object.keys(s);function a(d){return`@media (min-width:${typeof e[d]=="number"?e[d]:d}${n})`}function u(d){return`@media (max-width:${(typeof e[d]=="number"?e[d]:d)-r/100}${n})`}function l(d,f){const m=o.indexOf(f);return`@media (min-width:${typeof e[d]=="number"?e[d]:d}${n}) and (max-width:${(m!==-1&&typeof e[o[m]]=="number"?e[o[m]]:f)-r/100}${n})`}function c(d){return o.indexOf(d)+1<o.length?l(d,o[o.indexOf(d)+1]):a(d)}function h(d){const f=o.indexOf(d);return f===0?a(o[1]):f===o.length-1?u(o[f]):l(d,o[o.indexOf(d)+1]).replace("@media","@media not all and")}return ie({keys:o,values:s,up:a,down:u,between:l,only:c,not:h,unit:n},i)}const VN={borderRadius:4},zN=VN;function BN(t=8){if(t.mui)return t;const e=nE({spacing:t}),n=(...r)=>(r.length===0?[1]:r).map(s=>{const o=e(s);return typeof o=="number"?`${o}px`:o}).join(" ");return n.mui=!0,n}const HN=["breakpoints","palette","spacing","shape"];function ig(t={},...e){const{breakpoints:n={},palette:r={},spacing:i,shape:s={}}=t,o=rn(t,HN),a=jN(n),u=BN(i);let l=Nn({breakpoints:a,direction:"ltr",components:{},palette:ie({mode:"light"},r),spacing:u,shape:ie({},zN,s)},o);return l=e.reduce((c,h)=>Nn(c,h),l),l}const qN=k.exports.createContext(null),WN=qN;function KN(){return k.exports.useContext(WN)}function GN(t){return Object.keys(t).length===0}function QN(t=null){const e=KN();return!e||GN(e)?t:e}const XN=ig();function YN(t=XN){return QN(t)}const JN=["variant"];function c0(t){return t.length===0}function mE(t){const{variant:e}=t,n=rn(t,JN);let r=e||"";return Object.keys(n).sort().forEach(i=>{i==="color"?r+=c0(r)?t[i]:On(t[i]):r+=`${c0(r)?i:On(i)}${On(t[i].toString())}`}),r}const ZN=["name","slot","skipVariantsResolver","skipSx","overridesResolver"],eO=["theme"],tO=["theme"];function oo(t){return Object.keys(t).length===0}function nO(t){return typeof t=="string"&&t.charCodeAt(0)>96}const rO=(t,e)=>e.components&&e.components[t]&&e.components[t].styleOverrides?e.components[t].styleOverrides:null,iO=(t,e)=>{let n=[];e&&e.components&&e.components[t]&&e.components[t].variants&&(n=e.components[t].variants);const r={};return n.forEach(i=>{const s=mE(i.props);r[s]=i.style}),r},sO=(t,e,n,r)=>{var i,s;const{ownerState:o={}}=t,a=[],u=n==null||(i=n.components)==null||(s=i[r])==null?void 0:s.variants;return u&&u.forEach(l=>{let c=!0;Object.keys(l.props).forEach(h=>{o[h]!==l.props[h]&&t[h]!==l.props[h]&&(c=!1)}),c&&a.push(e[mE(l.props)])}),a};function rl(t){return t!=="ownerState"&&t!=="theme"&&t!=="sx"&&t!=="as"}const oO=ig();function aO(t={}){const{defaultTheme:e=oO,rootShouldForwardProp:n=rl,slotShouldForwardProp:r=rl,styleFunctionSx:i=MN}=t,s=o=>{const a=oo(o.theme)?e:o.theme;return i(ie({},o,{theme:a}))};return s.__mui_systemSx=!0,(o,a={})=>{aP(o,_=>_.filter(E=>!(E!=null&&E.__mui_systemSx)));const{name:u,slot:l,skipVariantsResolver:c,skipSx:h,overridesResolver:d}=a,f=rn(a,ZN),m=c!==void 0?c:l&&l!=="Root"||!1,y=h||!1;let w,g=rl;l==="Root"?g=n:l?g=r:nO(o)&&(g=void 0);const p=oP(o,ie({shouldForwardProp:g,label:w},f)),v=(_,...E)=>{const x=E?E.map(D=>typeof D=="function"&&D.__emotion_real!==D?me=>{let{theme:Tt}=me,un=rn(me,eO);return D(ie({theme:oo(Tt)?e:Tt},un))}:D):[];let T=_;u&&d&&x.push(D=>{const me=oo(D.theme)?e:D.theme,Tt=rO(u,me);if(Tt){const un={};return Object.entries(Tt).forEach(([cu,Xs])=>{un[cu]=typeof Xs=="function"?Xs(ie({},D,{theme:me})):Xs}),d(D,un)}return null}),u&&!m&&x.push(D=>{const me=oo(D.theme)?e:D.theme;return sO(D,iO(u,me),me,u)}),y||x.push(s);const R=x.length-E.length;if(Array.isArray(_)&&R>0){const D=new Array(R).fill("");T=[..._,...D],T.raw=[..._.raw,...D]}else typeof _=="function"&&_.__emotion_real!==_&&(T=D=>{let{theme:me}=D,Tt=rn(D,tO);return _(ie({theme:oo(me)?e:me},Tt))});return p(T,...x)};return p.withConfig&&(v.withConfig=p.withConfig),v}}function uO(t){const{theme:e,name:n,props:r}=t;return!e||!e.components||!e.components[n]||!e.components[n].defaultProps?r:BR(e.components[n].defaultProps,r)}function lO({props:t,name:e,defaultTheme:n}){const r=YN(n);return uO({theme:r,name:e,props:t})}function gE(t,e=0,n=1){return Math.min(Math.max(e,t),n)}function cO(t){t=t.slice(1);const e=new RegExp(`.{1,${t.length>=6?2:1}}`,"g");let n=t.match(e);return n&&n[0].length===1&&(n=n.map(r=>r+r)),n?`rgb${n.length===4?"a":""}(${n.map((r,i)=>i<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function Es(t){if(t.type)return t;if(t.charAt(0)==="#")return Es(cO(t));const e=t.indexOf("("),n=t.substring(0,e);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error(_s(9,t));let r=t.substring(e+1,t.length-1),i;if(n==="color"){if(r=r.split(" "),i=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(i)===-1)throw new Error(_s(10,i))}else r=r.split(",");return r=r.map(s=>parseFloat(s)),{type:n,values:r,colorSpace:i}}function sg(t){const{type:e,colorSpace:n}=t;let{values:r}=t;return e.indexOf("rgb")!==-1?r=r.map((i,s)=>s<3?parseInt(i,10):i):e.indexOf("hsl")!==-1&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),e.indexOf("color")!==-1?r=`${n} ${r.join(" ")}`:r=`${r.join(", ")}`,`${e}(${r})`}function hO(t){t=Es(t);const{values:e}=t,n=e[0],r=e[1]/100,i=e[2]/100,s=r*Math.min(i,1-i),o=(l,c=(l+n/30)%12)=>i-s*Math.max(Math.min(c-3,9-c,1),-1);let a="rgb";const u=[Math.round(o(0)*255),Math.round(o(8)*255),Math.round(o(4)*255)];return t.type==="hsla"&&(a+="a",u.push(e[3])),sg({type:a,values:u})}function h0(t){t=Es(t);let e=t.type==="hsl"||t.type==="hsla"?Es(hO(t)).values:t.values;return e=e.map(n=>(t.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*e[0]+.7152*e[1]+.0722*e[2]).toFixed(3))}function dO(t,e){const n=h0(t),r=h0(e);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function fO(t,e){if(t=Es(t),e=gE(e),t.type.indexOf("hsl")!==-1)t.values[2]*=1-e;else if(t.type.indexOf("rgb")!==-1||t.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)t.values[n]*=1-e;return sg(t)}function pO(t,e){if(t=Es(t),e=gE(e),t.type.indexOf("hsl")!==-1)t.values[2]+=(100-t.values[2])*e;else if(t.type.indexOf("rgb")!==-1)for(let n=0;n<3;n+=1)t.values[n]+=(255-t.values[n])*e;else if(t.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)t.values[n]+=(1-t.values[n])*e;return sg(t)}function mO(t,e){return ie({toolbar:{minHeight:56,[t.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[t.up("sm")]:{minHeight:64}}},e)}const gO={black:"#000",white:"#fff"},oa=gO,yO={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},vO=yO,wO={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},Ri=wO,_O={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},Ai=_O,SO={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},ao=SO,EO={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},Pi=EO,IO={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},Ni=IO,TO={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},Oi=TO,kO=["mode","contrastThreshold","tonalOffset"],d0={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:oa.white,default:oa.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},Cd={text:{primary:oa.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:oa.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function f0(t,e,n,r){const i=r.light||r,s=r.dark||r*1.5;t[e]||(t.hasOwnProperty(n)?t[e]=t[n]:e==="light"?t.light=pO(t.main,i):e==="dark"&&(t.dark=fO(t.main,s)))}function CO(t="light"){return t==="dark"?{main:Pi[200],light:Pi[50],dark:Pi[400]}:{main:Pi[700],light:Pi[400],dark:Pi[800]}}function bO(t="light"){return t==="dark"?{main:Ri[200],light:Ri[50],dark:Ri[400]}:{main:Ri[500],light:Ri[300],dark:Ri[700]}}function xO(t="light"){return t==="dark"?{main:Ai[500],light:Ai[300],dark:Ai[700]}:{main:Ai[700],light:Ai[400],dark:Ai[800]}}function RO(t="light"){return t==="dark"?{main:Ni[400],light:Ni[300],dark:Ni[700]}:{main:Ni[700],light:Ni[500],dark:Ni[900]}}function AO(t="light"){return t==="dark"?{main:Oi[400],light:Oi[300],dark:Oi[700]}:{main:Oi[800],light:Oi[500],dark:Oi[900]}}function PO(t="light"){return t==="dark"?{main:ao[400],light:ao[300],dark:ao[700]}:{main:"#ed6c02",light:ao[500],dark:ao[900]}}function NO(t){const{mode:e="light",contrastThreshold:n=3,tonalOffset:r=.2}=t,i=rn(t,kO),s=t.primary||CO(e),o=t.secondary||bO(e),a=t.error||xO(e),u=t.info||RO(e),l=t.success||AO(e),c=t.warning||PO(e);function h(y){return dO(y,Cd.text.primary)>=n?Cd.text.primary:d0.text.primary}const d=({color:y,name:w,mainShade:g=500,lightShade:p=300,darkShade:v=700})=>{if(y=ie({},y),!y.main&&y[g]&&(y.main=y[g]),!y.hasOwnProperty("main"))throw new Error(_s(11,w?` (${w})`:"",g));if(typeof y.main!="string")throw new Error(_s(12,w?` (${w})`:"",JSON.stringify(y.main)));return f0(y,"light",p,r),f0(y,"dark",v,r),y.contrastText||(y.contrastText=h(y.main)),y},f={dark:Cd,light:d0};return Nn(ie({common:ie({},oa),mode:e,primary:d({color:s,name:"primary"}),secondary:d({color:o,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:d({color:a,name:"error"}),warning:d({color:c,name:"warning"}),info:d({color:u,name:"info"}),success:d({color:l,name:"success"}),grey:vO,contrastThreshold:n,getContrastText:h,augmentColor:d,tonalOffset:r},f[e]),i)}const OO=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function DO(t){return Math.round(t*1e5)/1e5}const p0={textTransform:"uppercase"},m0='"Roboto", "Helvetica", "Arial", sans-serif';function $O(t,e){const n=typeof e=="function"?e(t):e,{fontFamily:r=m0,fontSize:i=14,fontWeightLight:s=300,fontWeightRegular:o=400,fontWeightMedium:a=500,fontWeightBold:u=700,htmlFontSize:l=16,allVariants:c,pxToRem:h}=n,d=rn(n,OO),f=i/14,m=h||(g=>`${g/l*f}rem`),y=(g,p,v,_,E)=>ie({fontFamily:r,fontWeight:g,fontSize:m(p),lineHeight:v},r===m0?{letterSpacing:`${DO(_/p)}em`}:{},E,c),w={h1:y(s,96,1.167,-1.5),h2:y(s,60,1.2,-.5),h3:y(o,48,1.167,0),h4:y(o,34,1.235,.25),h5:y(o,24,1.334,0),h6:y(a,20,1.6,.15),subtitle1:y(o,16,1.75,.15),subtitle2:y(a,14,1.57,.1),body1:y(o,16,1.5,.15),body2:y(o,14,1.43,.15),button:y(a,14,1.75,.4,p0),caption:y(o,12,1.66,.4),overline:y(o,12,2.66,1,p0)};return Nn(ie({htmlFontSize:l,pxToRem:m,fontFamily:r,fontSize:i,fontWeightLight:s,fontWeightRegular:o,fontWeightMedium:a,fontWeightBold:u},w),d,{clone:!1})}const LO=.2,MO=.14,UO=.12;function ce(...t){return[`${t[0]}px ${t[1]}px ${t[2]}px ${t[3]}px rgba(0,0,0,${LO})`,`${t[4]}px ${t[5]}px ${t[6]}px ${t[7]}px rgba(0,0,0,${MO})`,`${t[8]}px ${t[9]}px ${t[10]}px ${t[11]}px rgba(0,0,0,${UO})`].join(",")}const FO=["none",ce(0,2,1,-1,0,1,1,0,0,1,3,0),ce(0,3,1,-2,0,2,2,0,0,1,5,0),ce(0,3,3,-2,0,3,4,0,0,1,8,0),ce(0,2,4,-1,0,4,5,0,0,1,10,0),ce(0,3,5,-1,0,5,8,0,0,1,14,0),ce(0,3,5,-1,0,6,10,0,0,1,18,0),ce(0,4,5,-2,0,7,10,1,0,2,16,1),ce(0,5,5,-3,0,8,10,1,0,3,14,2),ce(0,5,6,-3,0,9,12,1,0,3,16,2),ce(0,6,6,-3,0,10,14,1,0,4,18,3),ce(0,6,7,-4,0,11,15,1,0,4,20,3),ce(0,7,8,-4,0,12,17,2,0,5,22,4),ce(0,7,8,-4,0,13,19,2,0,5,24,4),ce(0,7,9,-4,0,14,21,2,0,5,26,4),ce(0,8,9,-5,0,15,22,2,0,6,28,5),ce(0,8,10,-5,0,16,24,2,0,6,30,5),ce(0,8,11,-5,0,17,26,2,0,6,32,5),ce(0,9,11,-5,0,18,28,2,0,7,34,6),ce(0,9,12,-6,0,19,29,2,0,7,36,6),ce(0,10,13,-6,0,20,31,3,0,8,38,7),ce(0,10,13,-6,0,21,33,3,0,8,40,7),ce(0,10,14,-6,0,22,35,3,0,8,42,7),ce(0,11,14,-7,0,23,36,3,0,9,44,8),ce(0,11,15,-7,0,24,38,3,0,9,46,8)],jO=FO,VO=["duration","easing","delay"],zO={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},BO={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function g0(t){return`${Math.round(t)}ms`}function HO(t){if(!t)return 0;const e=t/36;return Math.round((4+15*e**.25+e/5)*10)}function qO(t){const e=ie({},zO,t.easing),n=ie({},BO,t.duration);return ie({getAutoHeightDuration:HO,create:(i=["all"],s={})=>{const{duration:o=n.standard,easing:a=e.easeInOut,delay:u=0}=s;return rn(s,VO),(Array.isArray(i)?i:[i]).map(l=>`${l} ${typeof o=="string"?o:g0(o)} ${a} ${typeof u=="string"?u:g0(u)}`).join(",")}},t,{easing:e,duration:n})}const WO={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},KO=WO,GO=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function QO(t={},...e){const{mixins:n={},palette:r={},transitions:i={},typography:s={}}=t,o=rn(t,GO);if(t.vars)throw new Error(_s(18));const a=NO(r),u=ig(t);let l=Nn(u,{mixins:mO(u.breakpoints,n),palette:a,shadows:jO.slice(),typography:$O(a,s),transitions:qO(i),zIndex:ie({},KO)});return l=Nn(l,o),l=e.reduce((c,h)=>Nn(c,h),l),l}const XO=QO(),yE=XO;function YO({props:t,name:e}){return lO({props:t,name:e,defaultTheme:yE})}const JO=t=>rl(t)&&t!=="classes",ZO=aO({defaultTheme:yE,rootShouldForwardProp:JO}),eD=ZO;function tD(t){return MS("MuiSvgIcon",t)}GR("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const nD=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],rD=t=>{const{color:e,fontSize:n,classes:r}=t,i={root:["root",e!=="inherit"&&`color${On(e)}`,`fontSize${On(n)}`]};return HR(i,tD,r)},iD=eD("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.color!=="inherit"&&e[`color${On(n.color)}`],e[`fontSize${On(n.fontSize)}`]]}})(({theme:t,ownerState:e})=>{var n,r,i,s,o,a,u,l,c,h,d,f,m,y,w,g,p;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:(n=t.transitions)==null||(r=n.create)==null?void 0:r.call(n,"fill",{duration:(i=t.transitions)==null||(s=i.duration)==null?void 0:s.shorter}),fontSize:{inherit:"inherit",small:((o=t.typography)==null||(a=o.pxToRem)==null?void 0:a.call(o,20))||"1.25rem",medium:((u=t.typography)==null||(l=u.pxToRem)==null?void 0:l.call(u,24))||"1.5rem",large:((c=t.typography)==null||(h=c.pxToRem)==null?void 0:h.call(c,35))||"2.1875rem"}[e.fontSize],color:(d=(f=(t.vars||t).palette)==null||(m=f[e.color])==null?void 0:m.main)!=null?d:{action:(y=(t.vars||t).palette)==null||(w=y.action)==null?void 0:w.active,disabled:(g=(t.vars||t).palette)==null||(p=g.action)==null?void 0:p.disabled,inherit:void 0}[e.color]}}),vE=k.exports.forwardRef(function(e,n){const r=YO({props:e,name:"MuiSvgIcon"}),{children:i,className:s,color:o="inherit",component:a="svg",fontSize:u="medium",htmlColor:l,inheritViewBox:c=!1,titleAccess:h,viewBox:d="0 0 24 24"}=r,f=rn(r,nD),m=ie({},r,{color:o,component:a,fontSize:u,instanceFontSize:e.fontSize,inheritViewBox:c,viewBox:d}),y={};c||(y.viewBox=d);const w=rD(m);return X(iD,ie({as:a,className:QR(w.root,s),focusable:"false",color:l,"aria-hidden":h?void 0:!0,role:h?"img":void 0,ref:n},y,f,{ownerState:m,children:[i,h?I("title",{children:h}):null]}))});vE.muiName="SvgIcon";const y0=vE;function sD(t,e){const n=(r,i)=>I(y0,ie({"data-testid":`${e}Icon`,ref:i},r,{children:t}));return n.muiName=y0.muiName,k.exports.memo(k.exports.forwardRef(n))}const oD={configure:t=>{console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join(`
`)),LS.configure(t)}},aD=Object.freeze(Object.defineProperty({__proto__:null,unstable_ClassNameGenerator:oD,capitalize:On,createChainedFunction:IR,createSvgIcon:sD,debounce:TR,deprecatedPropType:kR,isMuiElement:CR,ownerDocument:DS,ownerWindow:bR,requirePropFactory:xR,setRef:Zf,unstable_useEnhancedEffect:$S,unstable_useId:PR,unsupportedProp:NR,useControlled:OR,useEventCallback:DR,useForkRef:$R,useIsFocusVisible:zR},Symbol.toStringTag,{value:"Module"})),uD=I1(aD);var v0;function Lr(){return v0||(v0=1,function(t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return e.createSvgIcon}});var e=uD}(Id)),Id}const Mr=I1(nA);var lD=Gn.exports;Object.defineProperty(zm,"__esModule",{value:!0});var og=zm.default=void 0,cD=lD(Lr()),hD=Mr,dD=(0,cD.default)((0,hD.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");og=zm.default=dD;var ag={},fD=Gn.exports;Object.defineProperty(ag,"__esModule",{value:!0});var ug=ag.default=void 0,pD=fD(Lr()),mD=Mr,gD=(0,pD.default)((0,mD.jsx)("path",{d:"M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"}),"LockOpen");ug=ag.default=gD;var lg={},yD=Gn.exports;Object.defineProperty(lg,"__esModule",{value:!0});var wE=lg.default=void 0,vD=yD(Lr()),wD=Mr,_D=(0,vD.default)((0,wD.jsx)("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"}),"Photo");wE=lg.default=_D;const _E="/assets/eye.a8d03b4f.jpg";var cg={},SD=Gn.exports;Object.defineProperty(cg,"__esModule",{value:!0});var SE=cg.default=void 0,ED=SD(Lr()),ID=Mr,TD=(0,ED.default)((0,ID.jsx)("path",{d:"M21 11h-1.5v-.5h-2v3h2V13H21v1c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1zM8 10v5H6.5v-1.5h-2V15H3v-5c0-.55.45-1 1-1h3c.55 0 1 .45 1 1zm-1.5.5h-2V12h2v-1.5zm7 1.5c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1h-4V9h4c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1zM11 10.5v.75h2v-.75h-2zm2 2.25h-2v.75h2v-.75z"}),"Abc");SE=cg.default=TD;/**
 * @remix-run/router v1.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ul(){return Ul=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ul.apply(this,arguments)}var lr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(lr||(lr={}));const w0="popstate";function kD(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return ip("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:sp(i)}return bD(e,n,null,t)}function CD(){return Math.random().toString(36).substr(2,8)}function _0(t){return{usr:t.state,key:t.key}}function ip(t,e,n,r){return n===void 0&&(n=null),Ul({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ms(e):e,{state:n,key:e&&e.key||r||CD()})}function sp(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ms(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function bD(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=lr.Pop,u=null;function l(){a=lr.Pop,u&&u({action:a,location:d.location})}function c(f,m){a=lr.Push;let y=ip(d.location,f,m);n&&n(y,f);let w=_0(y),g=d.createHref(y);try{o.pushState(w,"",g)}catch{i.location.assign(g)}s&&u&&u({action:a,location:y})}function h(f,m){a=lr.Replace;let y=ip(d.location,f,m);n&&n(y,f);let w=_0(y),g=d.createHref(y);o.replaceState(w,"",g),s&&u&&u({action:a,location:y})}let d={get action(){return a},get location(){return t(i,o)},listen(f){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(w0,l),u=f,()=>{i.removeEventListener(w0,l),u=null}},createHref(f){return e(i,f)},push:c,replace:h,go(f){return o.go(f)}};return d}var S0;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(S0||(S0={}));function xD(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Ms(e):e,i=IE(r.pathname||"/",n);if(i==null)return null;let s=EE(t);RD(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=UD(s[a],i);return o}function EE(t,e,n,r){return e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r=""),t.forEach((i,s)=>{let o={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};o.relativePath.startsWith("/")&&(Me(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(r.length));let a=vr([r,o.relativePath]),u=n.concat(o);i.children&&i.children.length>0&&(Me(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+a+'".')),EE(i.children,e,u,a)),!(i.path==null&&!i.index)&&e.push({path:a,score:LD(a,i.index),routesMeta:u})}),e}function RD(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:MD(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const AD=/^:\w+$/,PD=3,ND=2,OD=1,DD=10,$D=-2,E0=t=>t==="*";function LD(t,e){let n=t.split("/"),r=n.length;return n.some(E0)&&(r+=$D),e&&(r+=ND),n.filter(i=>!E0(i)).reduce((i,s)=>i+(AD.test(s)?PD:s===""?OD:DD),r)}function MD(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function UD(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],u=o===n.length-1,l=i==="/"?e:e.slice(i.length)||"/",c=FD({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},l);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:vr([i,c.pathname]),pathnameBase:HD(vr([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=vr([i,c.pathnameBase]))}return s}function FD(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=jD(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((l,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return l[c]=VD(a[h]||"",c),l},{}),pathname:s,pathnameBase:o,pattern:t}}function jD(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),TE(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,a)=>(r.push(a),"([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function VD(t,e){try{return decodeURIComponent(t)}catch(n){return TE(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function IE(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Me(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function TE(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function zD(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ms(t):t;return{pathname:n?n.startsWith("/")?n:BD(n,e):e,search:qD(r),hash:WD(i)}}function BD(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function bd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function kE(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Ms(t):(i=Ul({},t),Me(!i.pathname||!i.pathname.includes("?"),bd("?","pathname","search",i)),Me(!i.pathname||!i.pathname.includes("#"),bd("#","pathname","hash",i)),Me(!i.search||!i.search.includes("#"),bd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let u=zD(i,a),l=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(l||c)&&(u.pathname+="/"),u}const vr=t=>t.join("/").replace(/\/\/+/g,"/"),HD=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),qD=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,WD=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class KD{constructor(e,n,r){this.status=e,this.statusText=n||"",this.data=r}}function GD(t){return t instanceof KD}/**
 * React Router v6.4.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function op(){return op=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},op.apply(this,arguments)}function QD(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const XD=typeof Object.is=="function"?Object.is:QD,{useState:YD,useEffect:JD,useLayoutEffect:ZD,useDebugValue:e$}=ds;function t$(t,e,n){const r=e(),[{inst:i},s]=YD({inst:{value:r,getSnapshot:e}});return ZD(()=>{i.value=r,i.getSnapshot=e,xd(i)&&s({inst:i})},[t,r,e]),JD(()=>(xd(i)&&s({inst:i}),t(()=>{xd(i)&&s({inst:i})})),[t]),e$(r),r}function xd(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!XD(n,r)}catch{return!0}}function n$(t,e,n){return e()}const r$=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",i$=!r$,s$=i$?n$:t$;"useSyncExternalStore"in ds&&(t=>t.useSyncExternalStore)(ds);const o$=k.exports.createContext(null),a$=k.exports.createContext(null),CE=k.exports.createContext(null),hg=k.exports.createContext(null),ih=k.exports.createContext(null),La=k.exports.createContext({outlet:null,matches:[]}),bE=k.exports.createContext(null);function u$(t,e){let{relative:n}=e===void 0?{}:e;Ma()||Me(!1);let{basename:r,navigator:i}=k.exports.useContext(hg),{hash:s,pathname:o,search:a}=RE(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:vr([r,o])),i.createHref({pathname:u,search:a,hash:s})}function Ma(){return k.exports.useContext(ih)!=null}function sh(){return Ma()||Me(!1),k.exports.useContext(ih).location}function xE(t){return t.filter((e,n)=>n===0||!e.route.index&&e.pathnameBase!==t[n-1].pathnameBase)}function oh(){Ma()||Me(!1);let{basename:t,navigator:e}=k.exports.useContext(hg),{matches:n}=k.exports.useContext(La),{pathname:r}=sh(),i=JSON.stringify(xE(n).map(a=>a.pathnameBase)),s=k.exports.useRef(!1);return k.exports.useEffect(()=>{s.current=!0}),k.exports.useCallback(function(a,u){if(u===void 0&&(u={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let l=kE(a,JSON.parse(i),r,u.relative==="path");t!=="/"&&(l.pathname=l.pathname==="/"?t:vr([t,l.pathname])),(u.replace?e.replace:e.push)(l,u.state,u)},[t,e,i,r])}function RE(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=k.exports.useContext(La),{pathname:i}=sh(),s=JSON.stringify(xE(r).map(o=>o.pathnameBase));return k.exports.useMemo(()=>kE(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function l$(t,e){Ma()||Me(!1);let n=k.exports.useContext(CE),{matches:r}=k.exports.useContext(La),i=r[r.length-1],s=i?i.params:{};i&&i.pathname;let o=i?i.pathnameBase:"/";i&&i.route;let a=sh(),u;if(e){var l;let m=typeof e=="string"?Ms(e):e;o==="/"||((l=m.pathname)==null?void 0:l.startsWith(o))||Me(!1),u=m}else u=a;let c=u.pathname||"/",h=o==="/"?c:c.slice(o.length)||"/",d=xD(t,{pathname:h}),f=f$(d&&d.map(m=>Object.assign({},m,{params:Object.assign({},s,m.params),pathname:vr([o,m.pathname]),pathnameBase:m.pathnameBase==="/"?o:vr([o,m.pathnameBase])})),r,n||void 0);return e?I(ih.Provider,{value:{location:op({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:lr.Pop},children:f}):f}function c$(){let t=m$(),e=GD(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r};return X(qm,{children:[I("h2",{children:"Unhandled Thrown Error!"}),I("h3",{style:{fontStyle:"italic"},children:e}),n?I("pre",{style:i,children:n}):null,I("p",{children:"\u{1F4BF} Hey developer \u{1F44B}"}),X("p",{children:["You can provide a way better UX than this when your app throws errors by providing your own\xA0",I("code",{style:s,children:"errorElement"})," props on\xA0",I("code",{style:s,children:"<Route>"})]})]})}class h$ extends k.exports.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?I(bE.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function d$(t){let{routeContext:e,match:n,children:r}=t,i=k.exports.useContext(o$);return i&&n.route.errorElement&&(i._deepestRenderedBoundaryId=n.route.id),I(La.Provider,{value:e,children:r})}function f$(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||Me(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,a)=>{let u=o.route.id?i==null?void 0:i[o.route.id]:null,l=n?o.route.errorElement||I(c$,{}):null,c=()=>I(d$,{match:o,routeContext:{outlet:s,matches:e.concat(r.slice(0,a+1))},children:u?l:o.route.element!==void 0?o.route.element:s});return n&&(o.route.errorElement||a===0)?I(h$,{location:n.location,component:l,error:u,children:c()}):c()},null)}var I0;(function(t){t.UseRevalidator="useRevalidator"})(I0||(I0={}));var ap;(function(t){t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(ap||(ap={}));function p$(t){let e=k.exports.useContext(CE);return e||Me(!1),e}function m$(){var t;let e=k.exports.useContext(bE),n=p$(ap.UseRouteError),r=k.exports.useContext(La),i=r.matches[r.matches.length-1];return e||(r||Me(!1),i.route.id||Me(!1),(t=n.errors)==null?void 0:t[i.route.id])}function il(t){Me(!1)}function g$(t){let{basename:e="/",children:n=null,location:r,navigationType:i=lr.Pop,navigator:s,static:o=!1}=t;Ma()&&Me(!1);let a=e.replace(/^\/*/,"/"),u=k.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Ms(r));let{pathname:l="/",search:c="",hash:h="",state:d=null,key:f="default"}=r,m=k.exports.useMemo(()=>{let y=IE(l,a);return y==null?null:{pathname:y,search:c,hash:h,state:d,key:f}},[a,l,c,h,d,f]);return m==null?null:I(hg.Provider,{value:u,children:I(ih.Provider,{children:n,value:{location:m,navigationType:i}})})}function y$(t){let{children:e,location:n}=t,r=k.exports.useContext(a$),i=r&&!e?r.router.routes:up(e);return l$(i,n)}var T0;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(T0||(T0={}));new Promise(()=>{});function up(t,e){e===void 0&&(e=[]);let n=[];return k.exports.Children.forEach(t,(r,i)=>{if(!k.exports.isValidElement(r))return;if(r.type===k.exports.Fragment){n.push.apply(n,up(r.props.children,e));return}r.type!==il&&Me(!1),!r.props.index||!r.props.children||Me(!1);let s=[...e,i],o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(o.children=up(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.4.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function v$(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function w$(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function _$(t,e){return t.button===0&&(!e||e==="_self")&&!w$(t)}const S$=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function E$(t){let{basename:e,children:n,window:r}=t,i=k.exports.useRef();i.current==null&&(i.current=kD({window:r,v5Compat:!0}));let s=i.current,[o,a]=k.exports.useState({action:s.action,location:s.location});return k.exports.useLayoutEffect(()=>s.listen(a),[s]),I(g$,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const AE=k.exports.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:u,to:l,preventScrollReset:c}=e,h=v$(e,S$),d=u$(l,{relative:i}),f=I$(l,{replace:o,state:a,target:u,preventScrollReset:c,relative:i});function m(y){r&&r(y),y.defaultPrevented||f(y)}return I("a",{...h,href:d,onClick:s?r:m,ref:n,target:u})});var k0;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(k0||(k0={}));var C0;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(C0||(C0={}));function I$(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=oh(),u=sh(),l=RE(t,{relative:o});return k.exports.useCallback(c=>{if(_$(c,n)){c.preventDefault();let h=r!==void 0?r:sp(u)===sp(l);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[u,a,l,r,i,n,t,s,o])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},T$=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},NE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,l=u?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|l>>6,f=l&63;u||(f=64,o||(d=64)),r.push(n[c],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(PE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):T$(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),l!==64){const f=a<<4&240|l>>2;if(r.push(f),h!==64){const m=l<<6&192|h;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},k$=function(t){const e=PE(t);return NE.encodeByteArray(e,!0)},Fl=function(t){return k$(t).replace(/\./g,"")},OE=function(t){try{return NE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function C$(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(st())}function DE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function b$(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function x$(){const t=st();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function $E(){return typeof indexedDB=="object"}function LE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function R$(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}function A$(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P$=()=>A$().__FIREBASE_DEFAULTS__,N$=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},O$=()=>{if(typeof document>"u")return;const t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/),e=t&&OE(t[1]);return e&&JSON.parse(e)},dg=()=>P$()||N$()||O$(),ME=t=>{var e,n;return(n=(e=dg())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},UE=t=>{const e=ME(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},D$=()=>{var t;return(t=dg())===null||t===void 0?void 0:t.config},FE=t=>{var e;return(e=dg())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $${constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Fl(JSON.stringify(n)),Fl(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L$="FirebaseError";class Qt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=L$,Object.setPrototypeOf(this,Qt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ti.prototype.create)}}class Ti{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?M$(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Qt(i,a,r)}}function M$(t,e){return t.replace(U$,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const U$=/\{\$([^}]+)}/g;function F$(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function aa(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(b0(s)&&b0(o)){if(!aa(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function b0(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ua(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function mo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function go(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function j$(t,e){const n=new V$(t,e);return n.subscribe.bind(n)}class V${constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");z$(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Rd),i.error===void 0&&(i.error=Rd),i.complete===void 0&&(i.complete=Rd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function z$(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Rd(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B$=1e3,H$=2,q$=4*60*60*1e3,W$=.5;function x0(t,e=B$,n=H$){const r=e*Math.pow(n,t),i=Math.round(W$*r*(Math.random()-.5)*2);return Math.min(q$,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(t){return t&&t._delegate?t._delegate:t}class Kt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K${constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new $$;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Q$(e))try{this.getOrInitializeService({instanceIdentifier:Wr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Wr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wr){return this.instances.has(e)}getOptions(e=Wr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:G$(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Wr){return this.component?this.component.multipleInstances?e:Wr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function G$(t){return t===Wr?void 0:t}function Q$(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X${constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new K$(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(J||(J={}));const Y$={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},J$=J.INFO,Z$={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},e2=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Z$[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ah{constructor(e){this.name=e,this._logLevel=J$,this._logHandler=e2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in J))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Y$[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...e),this._logHandler(this,J.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...e),this._logHandler(this,J.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,J.INFO,...e),this._logHandler(this,J.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,J.WARN,...e),this._logHandler(this,J.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...e),this._logHandler(this,J.ERROR,...e)}}const t2=(t,e)=>e.some(n=>t instanceof n);let R0,A0;function n2(){return R0||(R0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function r2(){return A0||(A0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const VE=new WeakMap,lp=new WeakMap,zE=new WeakMap,Ad=new WeakMap,fg=new WeakMap;function i2(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(wr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&VE.set(n,t)}).catch(()=>{}),fg.set(e,t),e}function s2(t){if(lp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});lp.set(t,e)}let cp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return lp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||zE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return wr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function o2(t){cp=t(cp)}function a2(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Pd(this),e,...n);return zE.set(r,e.sort?e.sort():[e]),wr(r)}:r2().includes(t)?function(...e){return t.apply(Pd(this),e),wr(VE.get(this))}:function(...e){return wr(t.apply(Pd(this),e))}}function u2(t){return typeof t=="function"?a2(t):(t instanceof IDBTransaction&&s2(t),t2(t,n2())?new Proxy(t,cp):t)}function wr(t){if(t instanceof IDBRequest)return i2(t);if(Ad.has(t))return Ad.get(t);const e=u2(t);return e!==t&&(Ad.set(t,e),fg.set(e,t)),e}const Pd=t=>fg.get(t);function BE(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=wr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(wr(o.result),u.oldVersion,u.newVersion,wr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const l2=["get","getKey","getAll","getAllKeys","count"],c2=["put","add","delete","clear"],Nd=new Map;function P0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Nd.get(e))return Nd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=c2.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||l2.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let l=u.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&u.done]))[0]};return Nd.set(e,s),s}o2(t=>({...t,get:(e,n,r)=>P0(e,n)||t.get(e,n,r),has:(e,n)=>!!P0(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h2{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(d2(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function d2(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hp="@firebase/app",N0="0.8.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di=new ah("@firebase/app"),f2="@firebase/app-compat",p2="@firebase/analytics-compat",m2="@firebase/analytics",g2="@firebase/app-check-compat",y2="@firebase/app-check",v2="@firebase/auth",w2="@firebase/auth-compat",_2="@firebase/database",S2="@firebase/database-compat",E2="@firebase/functions",I2="@firebase/functions-compat",T2="@firebase/installations",k2="@firebase/installations-compat",C2="@firebase/messaging",b2="@firebase/messaging-compat",x2="@firebase/performance",R2="@firebase/performance-compat",A2="@firebase/remote-config",P2="@firebase/remote-config-compat",N2="@firebase/storage",O2="@firebase/storage-compat",D2="@firebase/firestore",$2="@firebase/firestore-compat",L2="firebase",M2="9.12.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dp="[DEFAULT]",U2={[hp]:"fire-core",[f2]:"fire-core-compat",[m2]:"fire-analytics",[p2]:"fire-analytics-compat",[y2]:"fire-app-check",[g2]:"fire-app-check-compat",[v2]:"fire-auth",[w2]:"fire-auth-compat",[_2]:"fire-rtdb",[S2]:"fire-rtdb-compat",[E2]:"fire-fn",[I2]:"fire-fn-compat",[T2]:"fire-iid",[k2]:"fire-iid-compat",[C2]:"fire-fcm",[b2]:"fire-fcm-compat",[x2]:"fire-perf",[R2]:"fire-perf-compat",[A2]:"fire-rc",[P2]:"fire-rc-compat",[N2]:"fire-gcs",[O2]:"fire-gcs-compat",[D2]:"fire-fst",[$2]:"fire-fst-compat","fire-js":"fire-js",[L2]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl=new Map,fp=new Map;function F2(t,e){try{t.container.addComponent(e)}catch(n){di.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function on(t){const e=t.name;if(fp.has(e))return di.debug(`There were multiple attempts to register component ${e}.`),!1;fp.set(e,t);for(const n of jl.values())F2(n,t);return!0}function Ur(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j2={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},_r=new Ti("app","Firebase",j2);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V2{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Kt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _r.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us=M2;function HE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:dp,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw _r.create("bad-app-name",{appName:String(i)});if(n||(n=D$()),!n)throw _r.create("no-options");const s=jl.get(i);if(s){if(aa(n,s.options)&&aa(r,s.config))return s;throw _r.create("duplicate-app",{appName:i})}const o=new X$(i);for(const u of fp.values())o.addComponent(u);const a=new V2(n,r,o);return jl.set(i,a),a}function uh(t=dp){const e=jl.get(t);if(!e&&t===dp)return HE();if(!e)throw _r.create("no-app",{appName:t});return e}function Et(t,e,n){var r;let i=(r=U2[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),di.warn(a.join(" "));return}on(new Kt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z2="firebase-heartbeat-database",B2=1,ua="firebase-heartbeat-store";let Od=null;function qE(){return Od||(Od=BE(z2,B2,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ua)}}}).catch(t=>{throw _r.create("idb-open",{originalErrorMessage:t.message})})),Od}async function H2(t){var e;try{return(await qE()).transaction(ua).objectStore(ua).get(WE(t))}catch(n){if(n instanceof Qt)di.warn(n.message);else{const r=_r.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});di.warn(r.message)}}}async function O0(t,e){var n;try{const i=(await qE()).transaction(ua,"readwrite");return await i.objectStore(ua).put(e,WE(t)),i.done}catch(r){if(r instanceof Qt)di.warn(r.message);else{const i=_r.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});di.warn(i.message)}}}function WE(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q2=1024,W2=30*24*60*60*1e3;class K2{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Q2(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=D0();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=W2}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=D0(),{heartbeatsToSend:n,unsentEntries:r}=G2(this._heartbeatsCache.heartbeats),i=Fl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function D0(){return new Date().toISOString().substring(0,10)}function G2(t,e=q2){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),$0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),$0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Q2{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $E()?LE().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await H2(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return O0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return O0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function $0(t){return Fl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X2(t){on(new Kt("platform-logger",e=>new h2(e),"PRIVATE")),on(new Kt("heartbeat",e=>new K2(e),"PRIVATE")),Et(hp,N0,t),Et(hp,N0,"esm2017"),Et("fire-js","")}X2("");function pg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function KE(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Y2=KE,GE=new Ti("auth","Firebase",KE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L0=new ah("@firebase/auth");function sl(t,...e){L0.logLevel<=J.ERROR&&L0.error(`Auth (${Us}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(t,...e){throw mg(t,...e)}function wn(t,...e){return mg(t,...e)}function J2(t,e,n){const r=Object.assign(Object.assign({},Y2()),{[e]:n});return new Ti("auth","Firebase",r).create(e,{appName:t.name})}function mg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return GE.create(t,...e)}function U(t,e,...n){if(!t)throw mg(e,...n)}function xn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw sl(e),new Error(e)}function Vn(t,e){t||xn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0=new Map;function Rn(t){Vn(t instanceof Function,"Expected a class definition");let e=M0.get(t);return e?(Vn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,M0.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z2(t,e){const n=Ur(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(aa(s,e!=null?e:{}))return i;an(i,"already-initialized")}return n.initialize({options:e})}function eL(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Rn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function tL(){return U0()==="http:"||U0()==="https:"}function U0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nL(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tL()||DE()||"connection"in navigator)?navigator.onLine:!0}function rL(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e,n){this.shortDelay=e,this.longDelay=n,Vn(n>e,"Short delay should be less than long delay!"),this.isMobile=C$()||b$()}get(){return nL()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gg(t,e){Vn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;xn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;xn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;xn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iL={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sL=new Fa(3e4,6e4);function ja(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Fs(t,e,n,r,i={}){return XE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ua(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),QE.fetch()(YE(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function XE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},iL),e);try{const i=new oL(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Nu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,l]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Nu(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Nu(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Nu(t,"user-disabled",o);const c=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw J2(t,c,l);an(t,c)}}catch(i){if(i instanceof Qt)throw i;an(t,"network-request-failed")}}async function Va(t,e,n,r,i={}){const s=await Fs(t,e,n,r,i);return"mfaPendingCredential"in s&&an(t,"multi-factor-auth-required",{_serverResponse:s}),s}function YE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?gg(t.config,i):`${t.config.apiScheme}://${i}`}class oL{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(wn(this.auth,"network-request-failed")),sL.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Nu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=wn(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aL(t,e){return Fs(t,"POST","/v1/accounts:delete",e)}async function uL(t,e){return Fs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function No(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function lL(t,e=!1){const n=pe(t),r=await n.getIdToken(e),i=yg(r);U(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:No(Dd(i.auth_time)),issuedAtTime:No(Dd(i.iat)),expirationTime:No(Dd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Dd(t){return Number(t)*1e3}function yg(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return sl("JWT malformed, contained fewer than 3 sections"),null;try{const s=OE(r);return s?JSON.parse(s):(sl("Failed to decode base64 JWT payload"),null)}catch(s){return sl("Caught error parsing JWT payload as JSON",(e=s)===null||e===void 0?void 0:e.toString()),null}}function cL(t){const e=yg(t);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Is(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Qt&&hL(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function hL({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dL{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=No(this.lastLoginAt),this.creationTime=No(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Is(t,uL(n,{idToken:r}));U(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?mL(s.providerUserInfo):[],a=pL(t.providerData,o),u=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=u?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new JE(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function fL(t){const e=pe(t);await Vl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function pL(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function mL(t){return t.map(e=>{var{providerId:n}=e,r=pg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gL(t,e){const n=await XE(t,{},async()=>{const r=Ua({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=YE(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",QE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):cL(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return U(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await gL(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new la;return r&&(U(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(U(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(U(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new la,this.toJSON())}_performRefresh(){return xn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(t,e){U(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ri{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=pg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new dL(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new JE(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Is(this,this.stsTokenManager.getToken(this.auth,e));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return lL(this,e)}reload(){return fL(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ri(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Vl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Is(this,aL(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,l,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,g=(l=n.createdAt)!==null&&l!==void 0?l:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:v,emailVerified:_,isAnonymous:E,providerData:x,stsTokenManager:T}=n;U(v&&T,e,"internal-error");const R=la.fromJSON(this.name,T);U(typeof v=="string",e,"internal-error"),Xn(h,e.name),Xn(d,e.name),U(typeof _=="boolean",e,"internal-error"),U(typeof E=="boolean",e,"internal-error"),Xn(f,e.name),Xn(m,e.name),Xn(y,e.name),Xn(w,e.name),Xn(g,e.name),Xn(p,e.name);const K=new ri({uid:v,auth:e,email:d,emailVerified:_,displayName:h,isAnonymous:E,photoURL:m,phoneNumber:f,tenantId:y,stsTokenManager:R,createdAt:g,lastLoginAt:p});return x&&Array.isArray(x)&&(K.providerData=x.map(D=>Object.assign({},D))),w&&(K._redirectEventId=w),K}static async _fromIdTokenResponse(e,n,r=!1){const i=new la;i.updateFromServerResponse(n);const s=new ri({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Vl(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ZE.type="NONE";const F0=ZE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ol(t,e,n){return`firebase:${t}:${e}:${n}`}class os{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ol(this.userKey,i.apiKey,s),this.fullPersistenceKey=ol("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ri._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new os(Rn(F0),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||Rn(F0);const o=ol(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const c=await l._get(o);if(c){const h=ri._fromJSON(e,c);l!==s&&(a=h),s=l;break}}catch{}const u=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new os(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new os(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(nI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(eI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(iI(e))return"Blackberry";if(sI(e))return"Webos";if(vg(e))return"Safari";if((e.includes("chrome/")||tI(e))&&!e.includes("edge/"))return"Chrome";if(rI(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function eI(t=st()){return/firefox\//i.test(t)}function vg(t=st()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function tI(t=st()){return/crios\//i.test(t)}function nI(t=st()){return/iemobile/i.test(t)}function rI(t=st()){return/android/i.test(t)}function iI(t=st()){return/blackberry/i.test(t)}function sI(t=st()){return/webos/i.test(t)}function lh(t=st()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function yL(t=st()){var e;return lh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function vL(){return x$()&&document.documentMode===10}function oI(t=st()){return lh(t)||rI(t)||sI(t)||iI(t)||/windows phone/i.test(t)||nI(t)}function wL(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aI(t,e=[]){let n;switch(t){case"Browser":n=j0(st());break;case"Worker":n=`${j0(st())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Us}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _L{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SL{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new V0(this),this.idTokenSubscription=new V0(this),this.beforeStateQueue=new _L(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=GE,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Rn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await os.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u==null?void 0:u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Vl(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=rL()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?pe(e):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Rn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ti("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Rn(e)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await os.create(this,[Rn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return U(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=aI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function za(t){return pe(t)}class V0{constructor(e){this.auth=e,this.observer=null,this.addObserver=j$(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function EL(t,e,n){const r=za(t);U(r._canInitEmulator,r,"emulator-config-failed"),U(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=uI(e),{host:o,port:a}=IL(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||TL()}function uI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function IL(t){const e=uI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:z0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:z0(o)}}}function z0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function TL(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return xn("not implemented")}_getIdTokenResponse(e){return xn("not implemented")}_linkToIdToken(e,n){return xn("not implemented")}_getReauthenticationResolver(e){return xn("not implemented")}}async function kL(t,e){return Fs(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CL(t,e){return Va(t,"POST","/v1/accounts:signInWithPassword",ja(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bL(t,e){return Va(t,"POST","/v1/accounts:signInWithEmailLink",ja(t,e))}async function xL(t,e){return Va(t,"POST","/v1/accounts:signInWithEmailLink",ja(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca extends wg{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ca(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ca(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return CL(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return bL(e,{email:this._email,oobCode:this._password});default:an(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return kL(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return xL(e,{idToken:n,email:this._email,oobCode:this._password});default:an(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function as(t,e){return Va(t,"POST","/v1/accounts:signInWithIdp",ja(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RL="http://localhost";class fi extends wg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new fi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):an("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=pg(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new fi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return as(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,as(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,as(e,n)}buildRequest(){const e={requestUri:RL,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ua(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AL(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function PL(t){const e=mo(go(t)).link,n=e?mo(go(e)).deep_link_id:null,r=mo(go(t)).deep_link_id;return(r?mo(go(r)).link:null)||r||n||e||t}class _g{constructor(e){var n,r,i,s,o,a;const u=mo(go(e)),l=(n=u.apiKey)!==null&&n!==void 0?n:null,c=(r=u.oobCode)!==null&&r!==void 0?r:null,h=AL((i=u.mode)!==null&&i!==void 0?i:null);U(l&&c&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=c,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=PL(e);try{return new _g(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(){this.providerId=js.PROVIDER_ID}static credential(e,n){return ca._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=_g.parseLink(n);return U(r,"argument-error"),ca._fromEmailAndCode(e,r.code,r.tenantId)}}js.PROVIDER_ID="password";js.EMAIL_PASSWORD_SIGN_IN_METHOD="password";js.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba extends lI{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr extends Ba{constructor(){super("facebook.com")}static credential(e){return fi._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tr.credential(e.oauthAccessToken)}catch{return null}}}tr.FACEBOOK_SIGN_IN_METHOD="facebook.com";tr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends Ba{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return fi._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return nr.credential(n,r)}catch{return null}}}nr.GOOGLE_SIGN_IN_METHOD="google.com";nr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr extends Ba{constructor(){super("github.com")}static credential(e){return fi._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rr.credential(e.oauthAccessToken)}catch{return null}}}rr.GITHUB_SIGN_IN_METHOD="github.com";rr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir extends Ba{constructor(){super("twitter.com")}static credential(e,n){return fi._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ir.credential(n,r)}catch{return null}}}ir.TWITTER_SIGN_IN_METHOD="twitter.com";ir.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NL(t,e){return Va(t,"POST","/v1/accounts:signUp",ja(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ri._fromIdTokenResponse(e,r,i),o=B0(r);return new pi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=B0(r);return new pi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function B0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl extends Qt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,zl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new zl(e,n,r,i)}}function cI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?zl._fromErrorAndOperation(t,s,e,r):s})}async function OL(t,e,n=!1){const r=await Is(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return pi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DL(t,e,n=!1){var r;const{auth:i}=t,s="reauthenticate";try{const o=await Is(t,cI(i,s,e,t),n);U(o.idToken,i,"internal-error");const a=yg(o.idToken);U(a,i,"internal-error");const{sub:u}=a;return U(t.uid===u,i,"user-mismatch"),pi._forOperation(t,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&an(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hI(t,e,n=!1){const r="signIn",i=await cI(t,r,e),s=await pi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function $L(t,e){return hI(za(t),e)}async function LL(t,e,n){const r=za(t),i=await NL(r,{returnSecureToken:!0,email:e,password:n}),s=await pi._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function ML(t,e,n){return $L(pe(t),js.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UL(t,e){return Fs(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FL(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=pe(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Is(r,UL(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:u})=>u==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function jL(t,e,n,r){return pe(t).onIdTokenChanged(e,n,r)}function VL(t,e,n){return pe(t).beforeAuthStateChanged(e,n)}const Bl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Bl,"1"),this.storage.removeItem(Bl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zL(){const t=st();return vg(t)||lh(t)}const BL=1e3,HL=10;class fI extends dI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=zL()&&wL(),this.fallbackToPolling=oI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);vL()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,HL):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},BL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}fI.type="LOCAL";const qL=fI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI extends dI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}pI.type="SESSION";const mI=pI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WL(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ch(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),u=await WL(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ch.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KL{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const l=Sg("",20);i.port1.start();const c=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(){return window}function GL(t){_n().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gI(){return typeof _n().WorkerGlobalScope<"u"&&typeof _n().importScripts=="function"}async function QL(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function XL(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function YL(){return gI()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI="firebaseLocalStorageDb",JL=1,Hl="firebaseLocalStorage",vI="fbase_key";class Ha{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function hh(t,e){return t.transaction([Hl],e?"readwrite":"readonly").objectStore(Hl)}function ZL(){const t=indexedDB.deleteDatabase(yI);return new Ha(t).toPromise()}function mp(){const t=indexedDB.open(yI,JL);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Hl,{keyPath:vI})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Hl)?e(r):(r.close(),await ZL(),e(await mp()))})})}async function H0(t,e,n){const r=hh(t,!0).put({[vI]:e,value:n});return new Ha(r).toPromise()}async function eM(t,e){const n=hh(t,!1).get(e),r=await new Ha(n).toPromise();return r===void 0?null:r.value}function q0(t,e){const n=hh(t,!0).delete(e);return new Ha(n).toPromise()}const tM=800,nM=3;class wI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await mp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>nM)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ch._getInstance(YL()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await QL(),!this.activeServiceWorker)return;this.sender=new KL(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||XL()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await mp();return await H0(e,Bl,"1"),await q0(e,Bl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>H0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>eM(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>q0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=hh(i,!1).getAll();return new Ha(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),tM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}wI.type="LOCAL";const rM=wI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iM(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function sM(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=wn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",iM().appendChild(r)})}function oM(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Fa(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aM(t,e){return e?Rn(e):(U(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg extends wg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return as(e,this._buildIdpRequest())}_linkToIdToken(e,n){return as(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return as(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function uM(t){return hI(t.auth,new Eg(t),t.bypassAuthState)}function lM(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),DL(n,new Eg(t),t.bypassAuthState)}async function cM(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),OL(n,new Eg(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return uM;case"linkViaPopup":case"linkViaRedirect":return cM;case"reauthViaPopup":case"reauthViaRedirect":return lM;default:an(this.auth,"internal-error")}}resolve(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hM=new Fa(2e3,1e4);class Qi extends _I{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Qi.currentPopupAction&&Qi.currentPopupAction.cancel(),Qi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){Vn(this.filter.length===1,"Popup operations only handle one event");const e=Sg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(wn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(wn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Qi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,hM.get())};e()}}Qi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dM="pendingRedirect",al=new Map;class fM extends _I{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=al.get(this.auth._key());if(!e){try{const r=await pM(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}al.set(this.auth._key(),e)}return this.bypassAuthState||al.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function pM(t,e){const n=yM(e),r=gM(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function mM(t,e){al.set(t._key(),e)}function gM(t){return Rn(t._redirectPersistence)}function yM(t){return ol(dM,t.config.apiKey,t.name)}async function vM(t,e,n=!1){const r=za(t),i=aM(r,e),o=await new fM(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wM=10*60*1e3;class _M{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!SM(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!SI(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(wn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=wM&&this.cachedEventUids.clear(),this.cachedEventUids.has(W0(e))}saveEventToCache(e){this.cachedEventUids.add(W0(e)),this.lastProcessedEventTime=Date.now()}}function W0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function SI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function SM(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return SI(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EM(t,e={}){return Fs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IM=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,TM=/^https?/;async function kM(t){if(t.config.emulator)return;const{authorizedDomains:e}=await EM(t);for(const n of e)try{if(CM(n))return}catch{}an(t,"unauthorized-domain")}function CM(t){const e=pp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!TM.test(n))return!1;if(IM.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bM=new Fa(3e4,6e4);function K0(){const t=_n().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function xM(t){return new Promise((e,n)=>{var r,i,s;function o(){K0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{K0(),n(wn(t,"network-request-failed"))},timeout:bM.get()})}if(!((i=(r=_n().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=_n().gapi)===null||s===void 0)&&s.load)o();else{const a=oM("iframefcb");return _n()[a]=()=>{gapi.load?o():n(wn(t,"network-request-failed"))},sM(`https://apis.google.com/js/api.js?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw ul=null,e})}let ul=null;function RM(t){return ul=ul||xM(t),ul}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AM=new Fa(5e3,15e3),PM="__/auth/iframe",NM="emulator/auth/iframe",OM={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},DM=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $M(t){const e=t.config;U(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?gg(e,NM):`https://${t.config.authDomain}/${PM}`,r={apiKey:e.apiKey,appName:t.name,v:Us},i=DM.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ua(r).slice(1)}`}async function LM(t){const e=await RM(t),n=_n().gapi;return U(n,t,"internal-error"),e.open({where:document.body,url:$M(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:OM,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=wn(t,"network-request-failed"),a=_n().setTimeout(()=>{s(o)},AM.get());function u(){_n().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MM={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},UM=500,FM=600,jM="_blank",VM="http://localhost";class G0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zM(t,e,n,r=UM,i=FM){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},MM),{width:r.toString(),height:i.toString(),top:s,left:o}),l=st().toLowerCase();n&&(a=tI(l)?jM:n),eI(l)&&(e=e||VM,u.scrollbars="yes");const c=Object.entries(u).reduce((d,[f,m])=>`${d}${f}=${m},`,"");if(yL(l)&&a!=="_self")return BM(e||"",a),new G0(null);const h=window.open(e||"",a,c);U(h,t,"popup-blocked");try{h.focus()}catch{}return new G0(h)}function BM(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HM="__/auth/handler",qM="emulator/auth/handler";function Q0(t,e,n,r,i,s){U(t.config.authDomain,t,"auth-domain-config-required"),U(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Us,eventId:i};if(e instanceof lI){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",F$(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,l]of Object.entries(s||{}))o[u]=l}if(e instanceof Ba){const u=e.getScopes().filter(l=>l!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];return`${WM(t)}?${Ua(a).slice(1)}`}function WM({config:t}){return t.emulator?gg(t,qM):`https://${t.authDomain}/${HM}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d="webStorageSupport";class KM{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=mI,this._completeRedirectFn=vM,this._overrideRedirectResult=mM}async _openPopup(e,n,r,i){var s;Vn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Q0(e,n,r,pp(),i);return zM(e,o,Sg())}async _openRedirect(e,n,r,i){return await this._originValidation(e),GL(Q0(e,n,r,pp(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Vn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await LM(e),r=new _M(e);return n.register("authEvent",i=>(U(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send($d,{type:$d},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[$d];o!==void 0&&n(!!o),an(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=kM(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return oI()||vg()||lh()}}const GM=KM;var X0="@firebase/auth",Y0="0.20.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QM{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XM(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function YM(t){on(new Kt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,u)=>{U(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),U(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:aI(t)},c=new SL(a,u,l);return eL(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),on(new Kt("auth-internal",e=>{const n=za(e.getProvider("auth").getImmediate());return(r=>new QM(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Et(X0,Y0,XM(t)),Et(X0,Y0,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JM=5*60,ZM=FE("authIdTokenMaxAge")||JM;let J0=null;const eU=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ZM)return;const i=n==null?void 0:n.token;J0!==i&&(J0=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function EI(t=uh()){const e=Ur(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Z2(t,{popupRedirectResolver:GM,persistence:[rM,qL,mI]}),r=FE("authTokenSyncURL");if(r){const s=eU(r);VL(n,s,()=>s(n.currentUser)),jL(n,o=>s(o))}const i=ME("auth");return i&&EL(n,`http://${i}`),n}YM("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const II="firebasestorage.googleapis.com",TI="storageBucket",tU=2*60*1e3,nU=10*60*1e3,rU=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se extends Qt{constructor(e,n,r=0){super(Ld(e),`Firebase Storage: ${n} (${Ld(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Se.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ld(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function Ld(t){return"storage/"+t}function Ig(){const t="An unknown error occurred, please check the error payload for server response.";return new Se("unknown",t)}function iU(t){return new Se("object-not-found","Object '"+t+"' does not exist.")}function sU(t){return new Se("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function oU(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Se("unauthenticated",t)}function aU(){return new Se("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function uU(t){return new Se("unauthorized","User does not have permission to access '"+t+"'.")}function kI(){return new Se("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function CI(){return new Se("canceled","User canceled the upload/download.")}function lU(t){return new Se("invalid-url","Invalid URL '"+t+"'.")}function cU(t){return new Se("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function hU(){return new Se("no-default-bucket","No default bucket found. Did you set the '"+TI+"' property when initializing the app?")}function bI(){return new Se("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function dU(){return new Se("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.")}function fU(){return new Se("no-download-url","The given file does not have any download URLs.")}function gp(t){return new Se("invalid-argument",t)}function xI(){return new Se("app-deleted","The Firebase app was deleted.")}function pU(t){return new Se("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Oo(t,e){return new Se("invalid-format","String does not match format '"+t+"': "+e)}function uo(t){throw new Se("internal-error","Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=bt.makeFromUrl(e,n)}catch{return new bt(e,"")}if(r.path==="")return r;throw cU(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(_){_.path.charAt(_.path.length-1)==="/"&&(_.path_=_.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function l(_){_.path_=decodeURIComponent(_.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),m={bucket:1,path:3},y=n===II?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",g=new RegExp(`^https?://${y}/${i}/${w}`,"i"),v=[{regex:a,indices:u,postModify:s},{regex:f,indices:m,postModify:l},{regex:g,indices:{bucket:1,path:2},postModify:l}];for(let _=0;_<v.length;_++){const E=v[_],x=E.regex.exec(e);if(x){const T=x[E.indices.bucket];let R=x[E.indices.path];R||(R=""),r=new bt(T,R),E.postModify(r);break}}if(r==null)throw lU(e);return r}}class mU{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gU(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function u(){return a===2}let l=!1;function c(...w){l||(l=!0,e.apply(null,w))}function h(w){i=setTimeout(()=>{i=null,t(f,u())},w)}function d(){s&&clearTimeout(s)}function f(w,...g){if(l){d();return}if(w){d(),c.call(null,w,...g);return}if(u()||o){d(),c.call(null,w,...g);return}r<64&&(r*=2);let v;a===1?(a=2,v=0):v=(r+Math.random())*1e3,h(v)}let m=!1;function y(w){m||(m=!0,d(),!l&&(i!==null?(w||(a=2),clearTimeout(i),h(0)):w||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,y(!0)},n),y}function yU(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vU(t){return t!==void 0}function wU(t){return typeof t=="function"}function _U(t){return typeof t=="object"&&!Array.isArray(t)}function dh(t){return typeof t=="string"||t instanceof String}function Z0(t){return Tg()&&t instanceof Blob}function Tg(){return typeof Blob<"u"}function ew(t,e,n,r){if(r<e)throw gp(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw gp(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qa(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function RI(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ii;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ii||(ii={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AI(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SU{constructor(e,n,r,i,s,o,a,u,l,c,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=u,this.timeout_=l,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,m)=>{this.resolve_=f,this.reject_=m,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Ou(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const u=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,l)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===ii.NO_ERROR,u=s.getStatus();if((!a||AI(u,this.additionalRetryCodes_))&&this.retry){const c=s.getErrorCode()===ii.ABORT;r(!1,new Ou(!1,null,c));return}const l=this.successCodes_.indexOf(u)!==-1;r(!0,new Ou(l,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());vU(u)?s(u):s()}catch(u){o(u)}else if(a!==null){const u=Ig();u.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,u)):o(u)}else if(i.canceled){const u=this.appDelete_?xI():CI();o(u)}else{const u=kI();o(u)}};this.canceled_?n(!1,new Ou(!1,null,!0)):this.backoffId_=gU(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&yU(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ou{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function EU(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function IU(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function TU(t,e){e&&(t["X-Firebase-GMPID"]=e)}function kU(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function CU(t,e,n,r,i,s,o=!0){const a=RI(t.urlParams),u=t.url+a,l=Object.assign({},t.headers);return TU(l,e),EU(l,n),IU(l,s),kU(l,r),new SU(u,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bU(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function xU(...t){const e=bU();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Tg())return new Blob(t);throw new Se("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function RU(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AU(t){return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Md{constructor(e,n){this.data=e,this.contentType=n||null}}function PU(t,e){switch(t){case mn.RAW:return new Md(PI(e));case mn.BASE64:case mn.BASE64URL:return new Md(NI(t,e));case mn.DATA_URL:return new Md(OU(e),DU(e))}throw Ig()}function PI(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function NU(t){let e;try{e=decodeURIComponent(t)}catch{throw Oo(mn.DATA_URL,"Malformed data URL.")}return PI(e)}function NI(t,e){switch(t){case mn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Oo(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case mn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Oo(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=AU(e)}catch{throw Oo(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class OI{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Oo(mn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=$U(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function OU(t){const e=new OI(t);return e.base64?NI(mn.BASE64,e.rest):NU(e.rest)}function DU(t){return new OI(t).contentType}function $U(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e,n){let r=0,i="";Z0(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Z0(this.data_)){const r=this.data_,i=RU(r,e,n);return i===null?null:new sr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new sr(r,!0)}}static getBlob(...e){if(Tg()){const n=e.map(r=>r instanceof sr?r.data_:r);return new sr(xU.apply(null,n))}else{const n=e.map(o=>dh(o)?PU(mn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new sr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DI(t){let e;try{e=JSON.parse(t)}catch{return null}return _U(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LU(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function MU(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function $I(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UU(t,e){return e}class at{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||UU}}let Du=null;function FU(t){return!dh(t)||t.length<2?t:$I(t)}function LI(){if(Du)return Du;const t=[];t.push(new at("bucket")),t.push(new at("generation")),t.push(new at("metageneration")),t.push(new at("name","fullPath",!0));function e(s,o){return FU(o)}const n=new at("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new at("size");return i.xform=r,t.push(i),t.push(new at("timeCreated")),t.push(new at("updated")),t.push(new at("md5Hash",null,!0)),t.push(new at("cacheControl",null,!0)),t.push(new at("contentDisposition",null,!0)),t.push(new at("contentEncoding",null,!0)),t.push(new at("contentLanguage",null,!0)),t.push(new at("contentType",null,!0)),t.push(new at("metadata","customMetadata",!0)),Du=t,Du}function jU(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new bt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function VU(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return jU(r,t),r}function MI(t,e,n){const r=DI(e);return r===null?null:VU(t,r,n)}function zU(t,e,n,r){const i=DI(e);if(i===null||!dh(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(l=>{const c=t.bucket,h=t.fullPath,d="/b/"+o(c)+"/o/"+o(h),f=qa(d,n,r),m=RI({alt:"media",token:l});return f+m})[0]}function UI(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class Vs{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(t){if(!t)throw Ig()}function kg(t,e){function n(r,i){const s=MI(t,i,e);return Dn(s!==null),s}return n}function BU(t,e){function n(r,i){const s=MI(t,i,e);return Dn(s!==null),zU(s,i,t.host,t._protocol)}return n}function Wa(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=aU():i=oU():n.getStatus()===402?i=sU(t.bucket):n.getStatus()===403?i=uU(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function FI(t){const e=Wa(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=iU(t.path)),s.serverResponse=i.serverResponse,s}return n}function HU(t,e,n){const r=e.fullServerUrl(),i=qa(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Vs(i,s,kg(t,n),o);return a.errorHandler=FI(e),a}function qU(t,e,n){const r=e.fullServerUrl(),i=qa(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Vs(i,s,BU(t,n),o);return a.errorHandler=FI(e),a}function WU(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function jI(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=WU(null,e)),r}function KU(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let v="";for(let _=0;_<2;_++)v=v+Math.random().toString().slice(2);return v}const u=a();o["Content-Type"]="multipart/related; boundary="+u;const l=jI(e,r,i),c=UI(l,n),h="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+u+`\r
Content-Type: `+l.contentType+`\r
\r
`,d=`\r
--`+u+"--",f=sr.getBlob(h,r,d);if(f===null)throw bI();const m={name:l.fullPath},y=qa(s,t.host,t._protocol),w="POST",g=t.maxUploadRetryTime,p=new Vs(y,w,kg(t,n),g);return p.urlParams=m,p.headers=o,p.body=f.uploadData(),p.errorHandler=Wa(e),p}class ql{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function Cg(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{Dn(!1)}return Dn(!!n&&(e||["active"]).indexOf(n)!==-1),n}function GU(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=jI(e,r,i),a={name:o.fullPath},u=qa(s,t.host,t._protocol),l="POST",c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=UI(o,n),d=t.maxUploadRetryTime;function f(y){Cg(y);let w;try{w=y.getResponseHeader("X-Goog-Upload-URL")}catch{Dn(!1)}return Dn(dh(w)),w}const m=new Vs(u,l,f,d);return m.urlParams=a,m.headers=c,m.body=h,m.errorHandler=Wa(e),m}function QU(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(l){const c=Cg(l,["active","final"]);let h=null;try{h=l.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Dn(!1)}h||Dn(!1);const d=Number(h);return Dn(!isNaN(d)),new ql(d,r.size(),c==="final")}const o="POST",a=t.maxUploadRetryTime,u=new Vs(n,o,s,a);return u.headers=i,u.errorHandler=Wa(e),u}const tw=256*1024;function XU(t,e,n,r,i,s,o,a){const u=new ql(0,0);if(o?(u.current=o.current,u.total=o.total):(u.current=0,u.total=r.size()),r.size()!==u.total)throw dU();const l=u.total-u.current;let c=l;i>0&&(c=Math.min(c,i));const h=u.current,d=h+c;let f="";c===0?f="finalize":l===c?f="upload, finalize":f="upload";const m={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":`${u.current}`},y=r.slice(h,d);if(y===null)throw bI();function w(_,E){const x=Cg(_,["active","final"]),T=u.current+c,R=r.size();let K;return x==="final"?K=kg(e,s)(_,E):K=null,new ql(T,R,x==="final",K)}const g="POST",p=e.maxUploadRetryTime,v=new Vs(n,g,w,p);return v.headers=m,v.body=y.uploadData(),v.progressCallback=a||null,v.errorHandler=Wa(t),v}const pt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Ud(t){switch(t){case"running":case"pausing":case"canceling":return pt.RUNNING;case"paused":return pt.PAUSED;case"success":return pt.SUCCESS;case"canceled":return pt.CANCELED;case"error":return pt.ERROR;default:return pt.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YU{constructor(e,n,r){if(wU(e)||n!=null||r!=null)this.next=e,this.error=n!=null?n:void 0,this.complete=r!=null?r:void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Di(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class JU{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ii.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ii.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ii.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw uo("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw uo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw uo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw uo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw uo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class ZU extends JU{initXhr(){this.xhr_.responseType="text"}}function Li(){return new ZU}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eF{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=LI(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals("canceled"))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(AI(i.status,[]))if(s)i=kI();else{this.sleepTime=Math.max(this.sleepTime*2,rU),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals("canceled")?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():setTimeout(()=>{this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=GU(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Li,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=QU(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,Li,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=tw*this._chunkMultiplier,n=new ql(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=XU(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(u){this._error=u,this._transition("error");return}const a=this._ref.storage._makeRequest(o,Li,i,s,!1);this._request=a,a.getPromise().then(u=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(u.current),u.finalized?(this._metadata=u.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){tw*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=HU(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,Li,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=KU(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Li,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":this._state=e,this._request!==void 0&&this._request.cancel();break;case"pausing":this._state=e,this._request!==void 0&&this._request.cancel();break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=CI(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Ud(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new YU(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Ud(this._state)){case pt.SUCCESS:Di(this._resolve.bind(null,this.snapshot))();break;case pt.CANCELED:case pt.ERROR:const n=this._reject;Di(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Ud(this._state)){case pt.RUNNING:case pt.PAUSED:e.next&&Di(e.next.bind(e,this.snapshot))();break;case pt.SUCCESS:e.complete&&Di(e.complete.bind(e))();break;case pt.CANCELED:case pt.ERROR:e.error&&Di(e.error.bind(e,this._error))();break;default:e.error&&Di(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,n){this._service=e,n instanceof bt?this._location=n:this._location=bt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new mi(e,n)}get root(){const e=new bt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return $I(this._location.path)}get storage(){return this._service}get parent(){const e=LU(this._location.path);if(e===null)return null;const n=new bt(this._location.bucket,e);return new mi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw pU(e)}}function tF(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new eF(t,new sr(e),n)}function nF(t){t._throwIfRoot("getDownloadURL");const e=qU(t.storage,t._location,LI());return t.storage.makeRequestWithTokens(e,Li).then(n=>{if(n===null)throw fU();return n})}function rF(t,e){const n=MU(t._location.path,e),r=new bt(t._location.bucket,n);return new mi(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iF(t){return/^[A-Za-z]+:\/\//.test(t)}function sF(t,e){return new mi(t,e)}function VI(t,e){if(t instanceof bg){const n=t;if(n._bucket==null)throw hU();const r=new mi(n,n._bucket);return e!=null?VI(r,e):r}else return e!==void 0?rF(t,e):t}function oF(t,e){if(e&&iF(e)){if(t instanceof bg)return sF(t,e);throw gp("To use ref(service, url), the first argument must be a Storage instance.")}else return VI(t,e)}function nw(t,e){const n=e==null?void 0:e[TI];return n==null?null:bt.makeFromBucketSpec(n,t)}function aF(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:jE(i,t.app.options.projectId))}class bg{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=II,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=tU,this._maxUploadRetryTime=nU,this._requests=new Set,i!=null?this._bucket=bt.makeFromBucketSpec(i,this._host):this._bucket=nw(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=bt.makeFromBucketSpec(this._url,e):this._bucket=nw(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ew("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ew("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new mi(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new mU(xI());{const o=CU(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const rw="@firebase/storage",iw="0.9.11";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zI="storage";function BI(t,e,n){return t=pe(t),tF(t,e,n)}function HI(t){return t=pe(t),nF(t)}function qI(t,e){return t=pe(t),oF(t,e)}function WI(t=uh(),e){t=pe(t);const r=Ur(t,zI).getImmediate({identifier:e}),i=UE("storage");return i&&uF(r,...i),r}function uF(t,e,n,r={}){aF(t,e,n,r)}function lF(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new bg(n,r,i,e,Us)}function cF(){on(new Kt(zI,lF,"PUBLIC").setMultipleInstances(!0)),Et(rw,iw,""),Et(rw,iw,"esm2017")}cF();var hF=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},$,xg=xg||{},F=hF||self;function Wl(){}function fh(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ka(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function dF(t){return Object.prototype.hasOwnProperty.call(t,Fd)&&t[Fd]||(t[Fd]=++fF)}var Fd="closure_uid_"+(1e9*Math.random()>>>0),fF=0;function pF(t,e,n){return t.call.apply(t.bind,arguments)}function mF(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function tt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?tt=pF:tt=mF,tt.apply(null,arguments)}function $u(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ke(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Fr(){this.s=this.s,this.o=this.o}var gF=0;Fr.prototype.s=!1;Fr.prototype.na=function(){!this.s&&(this.s=!0,this.M(),gF!=0)&&dF(this)};Fr.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const KI=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Rg(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function sw(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(fh(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function nt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}nt.prototype.h=function(){this.defaultPrevented=!0};var yF=function(){if(!F.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{F.addEventListener("test",Wl,e),F.removeEventListener("test",Wl,e)}catch{}return t}();function Kl(t){return/^[\s\xa0]*$/.test(t)}var ow=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function jd(t,e){return t<e?-1:t>e?1:0}function ph(){var t=F.navigator;return t&&(t=t.userAgent)?t:""}function pn(t){return ph().indexOf(t)!=-1}function Ag(t){return Ag[" "](t),t}Ag[" "]=Wl;function vF(t){var e=SF;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var wF=pn("Opera"),Ts=pn("Trident")||pn("MSIE"),GI=pn("Edge"),yp=GI||Ts,QI=pn("Gecko")&&!(ph().toLowerCase().indexOf("webkit")!=-1&&!pn("Edge"))&&!(pn("Trident")||pn("MSIE"))&&!pn("Edge"),_F=ph().toLowerCase().indexOf("webkit")!=-1&&!pn("Edge");function XI(){var t=F.document;return t?t.documentMode:void 0}var Gl;e:{var Vd="",zd=function(){var t=ph();if(QI)return/rv:([^\);]+)(\)|;)/.exec(t);if(GI)return/Edge\/([\d\.]+)/.exec(t);if(Ts)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(_F)return/WebKit\/(\S+)/.exec(t);if(wF)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(zd&&(Vd=zd?zd[1]:""),Ts){var Bd=XI();if(Bd!=null&&Bd>parseFloat(Vd)){Gl=String(Bd);break e}}Gl=Vd}var SF={};function EF(){return vF(function(){let t=0;const e=ow(String(Gl)).split("."),n=ow("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=jd(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||jd(i[2].length==0,s[2].length==0)||jd(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var vp;if(F.document&&Ts){var aw=XI();vp=aw||parseInt(Gl,10)||void 0}else vp=void 0;var IF=vp;function ha(t,e){if(nt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(QI){e:{try{Ag(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:TF[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ha.X.h.call(this)}}Ke(ha,nt);var TF={2:"touch",3:"pen",4:"mouse"};ha.prototype.h=function(){ha.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ga="closure_listenable_"+(1e6*Math.random()|0),kF=0;function CF(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++kF,this.ba=this.ea=!1}function mh(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Pg(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function YI(t){const e={};for(const n in t)e[n]=t[n];return e}const uw="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function JI(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<uw.length;s++)n=uw[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function gh(t){this.src=t,this.g={},this.h=0}gh.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=_p(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new CF(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function wp(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=KI(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(mh(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function _p(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var Ng="closure_lm_"+(1e6*Math.random()|0),Hd={};function ZI(t,e,n,r,i){if(r&&r.once)return tT(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)ZI(t,e[s],n,r,i);return null}return n=$g(n),t&&t[Ga]?t.N(e,n,Ka(r)?!!r.capture:!!r,i):eT(t,e,n,!1,r,i)}function eT(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Ka(i)?!!i.capture:!!i,a=Dg(t);if(a||(t[Ng]=a=new gh(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=bF(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)yF||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(rT(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function bF(){function t(n){return e.call(t.src,t.listener,n)}const e=xF;return t}function tT(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)tT(t,e[s],n,r,i);return null}return n=$g(n),t&&t[Ga]?t.O(e,n,Ka(r)?!!r.capture:!!r,i):eT(t,e,n,!0,r,i)}function nT(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)nT(t,e[s],n,r,i);else r=Ka(r)?!!r.capture:!!r,n=$g(n),t&&t[Ga]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=_p(s,n,r,i),-1<n&&(mh(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Dg(t))&&(e=t.g[e.toString()],t=-1,e&&(t=_p(e,n,r,i)),(n=-1<t?e[t]:null)&&Og(n))}function Og(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Ga])wp(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(rT(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Dg(e))?(wp(n,t),n.h==0&&(n.src=null,e[Ng]=null)):mh(t)}}}function rT(t){return t in Hd?Hd[t]:Hd[t]="on"+t}function xF(t,e){if(t.ba)t=!0;else{e=new ha(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&Og(t),t=n.call(r,e)}return t}function Dg(t){return t=t[Ng],t instanceof gh?t:null}var qd="__closure_events_fn_"+(1e9*Math.random()>>>0);function $g(t){return typeof t=="function"?t:(t[qd]||(t[qd]=function(e){return t.handleEvent(e)}),t[qd])}function Ue(){Fr.call(this),this.i=new gh(this),this.P=this,this.I=null}Ke(Ue,Fr);Ue.prototype[Ga]=!0;Ue.prototype.removeEventListener=function(t,e,n,r){nT(this,t,e,n,r)};function qe(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new nt(e,t);else if(e instanceof nt)e.target=e.target||t;else{var i=e;e=new nt(r,t),JI(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Lu(o,r,!0,e)&&i}if(o=e.g=t,i=Lu(o,r,!0,e)&&i,i=Lu(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Lu(o,r,!1,e)&&i}Ue.prototype.M=function(){if(Ue.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)mh(n[r]);delete t.g[e],t.h--}}this.I=null};Ue.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ue.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Lu(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,u=o.ha||o.src;o.ea&&wp(t.i,o),i=a.call(u,r)!==!1&&i}}return i&&!r.defaultPrevented}var Lg=F.JSON.stringify;function RF(){var t=oT;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class AF{constructor(){this.h=this.g=null}add(e,n){const r=iT.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var iT=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new PF,t=>t.reset());class PF{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function NF(t){F.setTimeout(()=>{throw t},0)}function sT(t,e){Sp||OF(),Ep||(Sp(),Ep=!0),oT.add(t,e)}var Sp;function OF(){var t=F.Promise.resolve(void 0);Sp=function(){t.then(DF)}}var Ep=!1,oT=new AF;function DF(){for(var t;t=RF();){try{t.h.call(t.g)}catch(n){NF(n)}var e=iT;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ep=!1}function yh(t,e){Ue.call(this),this.h=t||1,this.g=e||F,this.j=tt(this.lb,this),this.l=Date.now()}Ke(yh,Ue);$=yh.prototype;$.ca=!1;$.R=null;$.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),qe(this,"tick"),this.ca&&(Mg(this),this.start()))}};$.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Mg(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}$.M=function(){yh.X.M.call(this),Mg(this),delete this.g};function Ug(t,e,n){if(typeof t=="function")n&&(t=tt(t,n));else if(t&&typeof t.handleEvent=="function")t=tt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:F.setTimeout(t,e||0)}function aT(t){t.g=Ug(()=>{t.g=null,t.i&&(t.i=!1,aT(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class $F extends Fr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:aT(this)}M(){super.M(),this.g&&(F.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function da(t){Fr.call(this),this.h=t,this.g={}}Ke(da,Fr);var lw=[];function uT(t,e,n,r){Array.isArray(n)||(n&&(lw[0]=n.toString()),n=lw);for(var i=0;i<n.length;i++){var s=ZI(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function lT(t){Pg(t.g,function(e,n){this.g.hasOwnProperty(n)&&Og(e)},t),t.g={}}da.prototype.M=function(){da.X.M.call(this),lT(this)};da.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function vh(){this.g=!0}vh.prototype.Aa=function(){this.g=!1};function LF(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var l=a[u].split("=");if(1<l.length){var c=l[0];l=l[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+l+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function MF(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Xi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+FF(t,n)+(r?" "+r:"")})}function UF(t,e){t.info(function(){return"TIMEOUT: "+e})}vh.prototype.info=function(){};function FF(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Lg(n)}catch{return e}}var ki={},cw=null;function wh(){return cw=cw||new Ue}ki.Pa="serverreachability";function cT(t){nt.call(this,ki.Pa,t)}Ke(cT,nt);function fa(t){const e=wh();qe(e,new cT(e))}ki.STAT_EVENT="statevent";function hT(t,e){nt.call(this,ki.STAT_EVENT,t),this.stat=e}Ke(hT,nt);function lt(t){const e=wh();qe(e,new hT(e,t))}ki.Qa="timingevent";function dT(t,e){nt.call(this,ki.Qa,t),this.size=e}Ke(dT,nt);function Qa(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return F.setTimeout(function(){t()},e)}var _h={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},fT={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Fg(){}Fg.prototype.h=null;function hw(t){return t.h||(t.h=t.i())}function pT(){}var Xa={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function jg(){nt.call(this,"d")}Ke(jg,nt);function Vg(){nt.call(this,"c")}Ke(Vg,nt);var Ip;function Sh(){}Ke(Sh,Fg);Sh.prototype.g=function(){return new XMLHttpRequest};Sh.prototype.i=function(){return{}};Ip=new Sh;function Ya(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new da(this),this.O=jF,t=yp?125:void 0,this.T=new yh(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new mT}function mT(){this.i=null,this.g="",this.h=!1}var jF=45e3,Tp={},Ql={};$=Ya.prototype;$.setTimeout=function(t){this.O=t};function kp(t,e,n){t.K=1,t.v=Ih(zn(e)),t.s=n,t.P=!0,gT(t,null)}function gT(t,e){t.F=Date.now(),Ja(t),t.A=zn(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),TT(n.i,"t",r),t.C=0,n=t.l.H,t.h=new mT,t.g=qT(t.l,n?e:null,!t.s),0<t.N&&(t.L=new $F(tt(t.La,t,t.g),t.N)),uT(t.S,t.g,"readystatechange",t.ib),e=t.H?YI(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),fa(),LF(t.j,t.u,t.A,t.m,t.U,t.s)}$.ib=function(t){t=t.target;const e=this.L;e&&An(t)==3?e.l():this.La(t)};$.La=function(t){try{if(t==this.g)e:{const c=An(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>c)&&(c!=3||yp||this.g&&(this.h.h||this.g.fa()||mw(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?fa(3):fa(2)),Eh(this);var n=this.g.aa();this.Y=n;t:if(yT(this)){var r=mw(this.g);t="";var i=r.length,s=An(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Yr(this),Do(this);var o="";break t}this.h.i=new F.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,MF(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Kl(a)){var l=a;break t}}l=null}if(n=l)Xi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Cp(this,n);else{this.i=!1,this.o=3,lt(12),Yr(this),Do(this);break e}}this.P?(vT(this,c,o),yp&&this.i&&c==3&&(uT(this.S,this.T,"tick",this.hb),this.T.start())):(Xi(this.j,this.m,o,null),Cp(this,o)),c==4&&Yr(this),this.i&&!this.I&&(c==4?VT(this.l,this):(this.i=!1,Ja(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,lt(12)):(this.o=0,lt(13)),Yr(this),Do(this)}}}catch{}finally{}};function yT(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function vT(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=VF(t,n),i==Ql){e==4&&(t.o=4,lt(14),r=!1),Xi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Tp){t.o=4,lt(15),Xi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Xi(t.j,t.m,i,null),Cp(t,i);yT(t)&&i!=Ql&&i!=Tp&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,lt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Gg(e),e.K=!0,lt(11))):(Xi(t.j,t.m,n,"[Invalid Chunked Response]"),Yr(t),Do(t))}$.hb=function(){if(this.g){var t=An(this.g),e=this.g.fa();this.C<e.length&&(Eh(this),vT(this,t,e),this.i&&t!=4&&Ja(this))}};function VF(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Ql:(n=Number(e.substring(n,r)),isNaN(n)?Tp:(r+=1,r+n>e.length?Ql:(e=e.substr(r,n),t.C=r+n,e)))}$.cancel=function(){this.I=!0,Yr(this)};function Ja(t){t.V=Date.now()+t.O,wT(t,t.O)}function wT(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Qa(tt(t.gb,t),e)}function Eh(t){t.B&&(F.clearTimeout(t.B),t.B=null)}$.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(UF(this.j,this.A),this.K!=2&&(fa(),lt(17)),Yr(this),this.o=2,Do(this)):wT(this,this.V-t)};function Do(t){t.l.G==0||t.I||VT(t.l,t)}function Yr(t){Eh(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Mg(t.T),lT(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Cp(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||bp(n.h,t))){if(!t.J&&bp(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Jl(n),Ch(n);else break e;Kg(n),lt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Qa(tt(n.cb,n),6e3));if(1>=bT(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Jr(n,11)}else if((t.J||n.g==t)&&Jl(n),!Kl(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const c=l[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const m=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var s=r.h;s.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(zg(s,s.h),s.h=null))}if(r.D){const y=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.za=y,fe(r.F,r.D,y))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=HT(r,r.H?r.ka:null,r.V),o.J){xT(r.h,o);var a=o,u=r.J;u&&a.setTimeout(u),a.B&&(Eh(a),Ja(a)),r.g=o}else FT(r);0<n.i.length&&bh(n)}else l[0]!="stop"&&l[0]!="close"||Jr(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Jr(n,7):Wg(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}fa(4)}catch{}}function zF(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(fh(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function BF(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(fh(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function _T(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(fh(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=BF(t),r=zF(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var ST=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function HF(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function si(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof si){this.h=e!==void 0?e:t.h,Xl(this,t.j),this.s=t.s,this.g=t.g,Yl(this,t.m),this.l=t.l,e=t.i;var n=new pa;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),dw(this,n),this.o=t.o}else t&&(n=String(t).match(ST))?(this.h=!!e,Xl(this,n[1]||"",!0),this.s=yo(n[2]||""),this.g=yo(n[3]||"",!0),Yl(this,n[4]),this.l=yo(n[5]||"",!0),dw(this,n[6]||"",!0),this.o=yo(n[7]||"")):(this.h=!!e,this.i=new pa(null,this.h))}si.prototype.toString=function(){var t=[],e=this.j;e&&t.push(vo(e,fw,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(vo(e,fw,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(vo(n,n.charAt(0)=="/"?KF:WF,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",vo(n,QF)),t.join("")};function zn(t){return new si(t)}function Xl(t,e,n){t.j=n?yo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Yl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function dw(t,e,n){e instanceof pa?(t.i=e,XF(t.i,t.h)):(n||(e=vo(e,GF)),t.i=new pa(e,t.h))}function fe(t,e,n){t.i.set(e,n)}function Ih(t){return fe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function yo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function vo(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,qF),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function qF(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var fw=/[#\/\?@]/g,WF=/[#\?:]/g,KF=/[#\?]/g,GF=/[#\?@]/g,QF=/#/g;function pa(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function jr(t){t.g||(t.g=new Map,t.h=0,t.i&&HF(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}$=pa.prototype;$.add=function(t,e){jr(this),this.i=null,t=zs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function ET(t,e){jr(t),e=zs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function IT(t,e){return jr(t),e=zs(t,e),t.g.has(e)}$.forEach=function(t,e){jr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};$.oa=function(){jr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};$.W=function(t){jr(this);let e=[];if(typeof t=="string")IT(this,t)&&(e=e.concat(this.g.get(zs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};$.set=function(t,e){return jr(this),this.i=null,t=zs(this,t),IT(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};$.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function TT(t,e,n){ET(t,e),0<n.length&&(t.i=null,t.g.set(zs(t,e),Rg(n)),t.h+=n.length)}$.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function zs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function XF(t,e){e&&!t.j&&(jr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(ET(this,r),TT(this,i,n))},t)),t.j=e}var YF=class{constructor(t,e){this.h=t,this.g=e}};function kT(t){this.l=t||JF,F.PerformanceNavigationTiming?(t=F.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(F.g&&F.g.Ga&&F.g.Ga()&&F.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var JF=10;function CT(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function bT(t){return t.h?1:t.g?t.g.size:0}function bp(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function zg(t,e){t.g?t.g.add(e):t.h=e}function xT(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}kT.prototype.cancel=function(){if(this.i=RT(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function RT(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Rg(t.i)}function Bg(){}Bg.prototype.stringify=function(t){return F.JSON.stringify(t,void 0)};Bg.prototype.parse=function(t){return F.JSON.parse(t,void 0)};function ZF(){this.g=new Bg}function e4(t,e,n){const r=n||"";try{_T(t,function(i,s){let o=i;Ka(i)&&(o=Lg(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function t4(t,e){const n=new vh;if(F.Image){const r=new Image;r.onload=$u(Mu,n,r,"TestLoadImage: loaded",!0,e),r.onerror=$u(Mu,n,r,"TestLoadImage: error",!1,e),r.onabort=$u(Mu,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=$u(Mu,n,r,"TestLoadImage: timeout",!1,e),F.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Mu(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Za(t){this.l=t.ac||null,this.j=t.jb||!1}Ke(Za,Fg);Za.prototype.g=function(){return new Th(this.l,this.j)};Za.prototype.i=function(t){return function(){return t}}({});function Th(t,e){Ue.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Hg,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ke(Th,Ue);var Hg=0;$=Th.prototype;$.open=function(t,e){if(this.readyState!=Hg)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ma(this)};$.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||F).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};$.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,eu(this)),this.readyState=Hg};$.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ma(this)),this.g&&(this.readyState=3,ma(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof F.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;AT(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function AT(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}$.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?eu(this):ma(this),this.readyState==3&&AT(this)}};$.Va=function(t){this.g&&(this.response=this.responseText=t,eu(this))};$.Ua=function(t){this.g&&(this.response=t,eu(this))};$.ga=function(){this.g&&eu(this)};function eu(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ma(t)}$.setRequestHeader=function(t,e){this.v.append(t,e)};$.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};$.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ma(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Th.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var n4=F.JSON.parse;function _e(t){Ue.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=PT,this.K=this.L=!1}Ke(_e,Ue);var PT="",r4=/^https?$/i,i4=["POST","PUT"];$=_e.prototype;$.Ka=function(t){this.L=t};$.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ip.g(),this.C=this.u?hw(this.u):hw(Ip),this.g.onreadystatechange=tt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){pw(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=F.FormData&&t instanceof F.FormData,!(0<=KI(i4,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{DT(this),0<this.B&&((this.K=s4(this.g))?(this.g.timeout=this.B,this.g.ontimeout=tt(this.qa,this)):this.A=Ug(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){pw(this,s)}};function s4(t){return Ts&&EF()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}$.qa=function(){typeof xg<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,qe(this,"timeout"),this.abort(8))};function pw(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,NT(t),kh(t)}function NT(t){t.D||(t.D=!0,qe(t,"complete"),qe(t,"error"))}$.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,qe(this,"complete"),qe(this,"abort"),kh(this))};$.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),kh(this,!0)),_e.X.M.call(this)};$.Ha=function(){this.s||(this.F||this.v||this.l?OT(this):this.fb())};$.fb=function(){OT(this)};function OT(t){if(t.h&&typeof xg<"u"&&(!t.C[1]||An(t)!=4||t.aa()!=2)){if(t.v&&An(t)==4)Ug(t.Ha,0,t);else if(qe(t,"readystatechange"),An(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(ST)[1]||null;if(!i&&F.self&&F.self.location){var s=F.self.location.protocol;i=s.substr(0,s.length-1)}r=!r4.test(i?i.toLowerCase():"")}n=r}if(n)qe(t,"complete"),qe(t,"success");else{t.m=6;try{var o=2<An(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",NT(t)}}finally{kh(t)}}}}function kh(t,e){if(t.g){DT(t);const n=t.g,r=t.C[0]?Wl:null;t.g=null,t.C=null,e||qe(t,"ready");try{n.onreadystatechange=r}catch{}}}function DT(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(F.clearTimeout(t.A),t.A=null)}function An(t){return t.g?t.g.readyState:0}$.aa=function(){try{return 2<An(this)?this.g.status:-1}catch{return-1}};$.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};$.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),n4(e)}};function mw(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case PT:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}$.Ea=function(){return this.m};$.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function $T(t){let e="";return Pg(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function qg(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=$T(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):fe(t,e,n))}function lo(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function LT(t){this.Ca=0,this.i=[],this.j=new vh,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=lo("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=lo("baseRetryDelayMs",5e3,t),this.bb=lo("retryDelaySeedMs",1e4,t),this.$a=lo("forwardChannelMaxRetries",2,t),this.ta=lo("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new kT(t&&t.concurrentRequestLimit),this.Fa=new ZF,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}$=LT.prototype;$.ma=8;$.G=1;function Wg(t){if(MT(t),t.G==3){var e=t.U++,n=zn(t.F);fe(n,"SID",t.I),fe(n,"RID",e),fe(n,"TYPE","terminate"),tu(t,n),e=new Ya(t,t.j,e,void 0),e.K=2,e.v=Ih(zn(n)),n=!1,F.navigator&&F.navigator.sendBeacon&&(n=F.navigator.sendBeacon(e.v.toString(),"")),!n&&F.Image&&(new Image().src=e.v,n=!0),n||(e.g=qT(e.l,null),e.g.da(e.v)),e.F=Date.now(),Ja(e)}BT(t)}function Ch(t){t.g&&(Gg(t),t.g.cancel(),t.g=null)}function MT(t){Ch(t),t.u&&(F.clearTimeout(t.u),t.u=null),Jl(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&F.clearTimeout(t.m),t.m=null)}function bh(t){CT(t.h)||t.m||(t.m=!0,sT(t.Ja,t),t.C=0)}function o4(t,e){return bT(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Qa(tt(t.Ja,t,e),zT(t,t.C)),t.C++,!0)}$.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Ya(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=YI(s),JI(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=UT(this,i,e),n=zn(this.F),fe(n,"RID",t),fe(n,"CVER",22),this.D&&fe(n,"X-HTTP-Session-Id",this.D),tu(this,n),s&&(this.N?e="headers="+encodeURIComponent(String($T(s)))+"&"+e:this.o&&qg(n,this.o,s)),zg(this.h,i),this.Ya&&fe(n,"TYPE","init"),this.O?(fe(n,"$req",e),fe(n,"SID","null"),i.Z=!0,kp(i,n,null)):kp(i,n,e),this.G=2}}else this.G==3&&(t?gw(this,t):this.i.length==0||CT(this.h)||gw(this))};function gw(t,e){var n;e?n=e.m:n=t.U++;const r=zn(t.F);fe(r,"SID",t.I),fe(r,"RID",n),fe(r,"AID",t.T),tu(t,r),t.o&&t.s&&qg(r,t.o,t.s),n=new Ya(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=UT(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),zg(t.h,n),kp(n,r,e)}function tu(t,e){t.ia&&Pg(t.ia,function(n,r){fe(e,r,n)}),t.l&&_T({},function(n,r){fe(e,r,n)})}function UT(t,e,n){n=Math.min(t.i.length,n);var r=t.l?tt(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let u=0;u<n;u++){let l=i[u].h;const c=i[u].g;if(l-=s,0>l)s=Math.max(0,i[u].h-100),a=!1;else try{e4(c,o,"req"+l+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function FT(t){t.g||t.u||(t.Z=1,sT(t.Ia,t),t.A=0)}function Kg(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Qa(tt(t.Ia,t),zT(t,t.A)),t.A++,!0)}$.Ia=function(){if(this.u=null,jT(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Qa(tt(this.eb,this),t)}};$.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,lt(10),Ch(this),jT(this))};function Gg(t){t.B!=null&&(F.clearTimeout(t.B),t.B=null)}function jT(t){t.g=new Ya(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=zn(t.sa);fe(e,"RID","rpc"),fe(e,"SID",t.I),fe(e,"CI",t.L?"0":"1"),fe(e,"AID",t.T),fe(e,"TYPE","xmlhttp"),tu(t,e),t.o&&t.s&&qg(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Ih(zn(e)),n.s=null,n.P=!0,gT(n,t)}$.cb=function(){this.v!=null&&(this.v=null,Ch(this),Kg(this),lt(19))};function Jl(t){t.v!=null&&(F.clearTimeout(t.v),t.v=null)}function VT(t,e){var n=null;if(t.g==e){Jl(t),Gg(t),t.g=null;var r=2}else if(bp(t.h,e))n=e.D,xT(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=wh(),qe(r,new dT(r,n)),bh(t)}else FT(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&o4(t,e)||r==2&&Kg(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Jr(t,5);break;case 4:Jr(t,10);break;case 3:Jr(t,6);break;default:Jr(t,2)}}}function zT(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Jr(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=tt(t.kb,t);n||(n=new si("//www.google.com/images/cleardot.gif"),F.location&&F.location.protocol=="http"||Xl(n,"https"),Ih(n)),t4(n.toString(),r)}else lt(2);t.G=0,t.l&&t.l.va(e),BT(t),MT(t)}$.kb=function(t){t?(this.j.info("Successfully pinged google.com"),lt(2)):(this.j.info("Failed to ping google.com"),lt(1))};function BT(t){if(t.G=0,t.la=[],t.l){const e=RT(t.h);(e.length!=0||t.i.length!=0)&&(sw(t.la,e),sw(t.la,t.i),t.h.i.length=0,Rg(t.i),t.i.length=0),t.l.ua()}}function HT(t,e,n){var r=n instanceof si?zn(n):new si(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Yl(r,r.m);else{var i=F.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new si(null,void 0);r&&Xl(s,r),e&&(s.g=e),i&&Yl(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&fe(r,n,e),fe(r,"VER",t.ma),tu(t,r),r}function qT(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new _e(new Za({jb:!0})):new _e(t.ra),e.Ka(t.H),e}function WT(){}$=WT.prototype;$.xa=function(){};$.wa=function(){};$.va=function(){};$.ua=function(){};$.Ra=function(){};function Zl(){if(Ts&&!(10<=Number(IF)))throw Error("Environmental error: no available transport.")}Zl.prototype.g=function(t,e){return new Nt(t,e)};function Nt(t,e){Ue.call(this),this.g=new LT(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Kl(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Kl(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Bs(this)}Ke(Nt,Ue);Nt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;lt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=HT(t,null,t.V),bh(t)};Nt.prototype.close=function(){Wg(this.g)};Nt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Lg(t),t=n);e.i.push(new YF(e.ab++,t)),e.G==3&&bh(e)};Nt.prototype.M=function(){this.g.l=null,delete this.j,Wg(this.g),delete this.g,Nt.X.M.call(this)};function KT(t){jg.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ke(KT,jg);function GT(){Vg.call(this),this.status=1}Ke(GT,Vg);function Bs(t){this.g=t}Ke(Bs,WT);Bs.prototype.xa=function(){qe(this.g,"a")};Bs.prototype.wa=function(t){qe(this.g,new KT(t))};Bs.prototype.va=function(t){qe(this.g,new GT)};Bs.prototype.ua=function(){qe(this.g,"b")};Zl.prototype.createWebChannel=Zl.prototype.g;Nt.prototype.send=Nt.prototype.u;Nt.prototype.open=Nt.prototype.m;Nt.prototype.close=Nt.prototype.close;_h.NO_ERROR=0;_h.TIMEOUT=8;_h.HTTP_ERROR=6;fT.COMPLETE="complete";pT.EventType=Xa;Xa.OPEN="a";Xa.CLOSE="b";Xa.ERROR="c";Xa.MESSAGE="d";Ue.prototype.listen=Ue.prototype.N;_e.prototype.listenOnce=_e.prototype.O;_e.prototype.getLastError=_e.prototype.Oa;_e.prototype.getLastErrorCode=_e.prototype.Ea;_e.prototype.getStatus=_e.prototype.aa;_e.prototype.getResponseJson=_e.prototype.Sa;_e.prototype.getResponseText=_e.prototype.fa;_e.prototype.send=_e.prototype.da;_e.prototype.setWithCredentials=_e.prototype.Ka;var a4=function(){return new Zl},u4=function(){return wh()},Wd=_h,l4=fT,c4=ki,yw={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},h4=Za,Uu=pT,d4=_e;const vw="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Je.UNAUTHENTICATED=new Je(null),Je.GOOGLE_CREDENTIALS=new Je("google-credentials-uid"),Je.FIRST_PARTY=new Je("first-party-uid"),Je.MOCK_USER=new Je("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hs="9.12.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi=new ah("@firebase/firestore");function ww(){return gi.logLevel}function L(t,...e){if(gi.logLevel<=J.DEBUG){const n=e.map(Qg);gi.debug(`Firestore (${Hs}): ${t}`,...n)}}function Bn(t,...e){if(gi.logLevel<=J.ERROR){const n=e.map(Qg);gi.error(`Firestore (${Hs}): ${t}`,...n)}}function xp(t,...e){if(gi.logLevel<=J.WARN){const n=e.map(Qg);gi.warn(`Firestore (${Hs}): ${t}`,...n)}}function Qg(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(t="Unexpected state"){const e=`FIRESTORE (${Hs}) INTERNAL ASSERTION FAILED: `+t;throw Bn(e),new Error(e)}function oe(t,e){t||j()}function V(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends Qt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class f4{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Je.UNAUTHENTICATED))}shutdown(){}}class p4{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class m4{constructor(e){this.t=e,this.currentUser=Je.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new $n;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new $n,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new $n)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(oe(typeof r.accessToken=="string"),new QT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return oe(e===null||typeof e=="string"),new Je(e)}}class g4{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=Je.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(oe(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class y4{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new g4(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Je.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class v4{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class w4{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,L("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(oe(typeof n.token=="string"),this.A=n.token,new v4(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _4(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=_4(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ee(t,e){return t<e?-1:t>e?1:0}function ks(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new O(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new O(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new O(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Te.fromMillis(Date.now())}static fromDate(e){return Te.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Te(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ee(this.nanoseconds,e.nanoseconds):ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.timestamp=e}static fromTimestamp(e){return new H(e)}static min(){return new H(new Te(0,0))}static max(){return new H(new Te(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,n,r){n===void 0?n=0:n>e.length&&j(),r===void 0?r=e.length-n:r>e.length-n&&j(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ga.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ga?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ue extends ga{construct(e,n,r){return new ue(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new O(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ue(n)}static emptyPath(){return new ue([])}}const S4=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class et extends ga{construct(e,n,r){return new et(e,n,r)}static isValidIdentifier(e){return S4.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),et.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new et(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new O(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new O(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new O(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new O(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new et(n)}static emptyPath(){return new et([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(ue.fromString(e))}static fromName(e){return new M(ue.fromString(e).popFirst(5))}static empty(){return new M(ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ue.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new ue(e.slice()))}}function E4(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=H.fromTimestamp(r===1e9?new Te(n+1,0):new Te(n,r));return new Tr(i,M.empty(),e)}function I4(t){return new Tr(t.readTime,t.key,-1)}class Tr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Tr(H.min(),M.empty(),-1)}static max(){return new Tr(H.max(),M.empty(),-1)}}function T4(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=M.comparator(t.documentKey,e.documentKey),n!==0?n:ee(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k4="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class C4{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nu(t){if(t.code!==S.FAILED_PRECONDITION||t.message!==k4)throw t;L("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&j(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,r)=>{n(e)})}static reject(e){return new b((n,r)=>{r(e)})}static waitFor(e){return new b((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=b.resolve(!1);for(const r of e)n=n.next(i=>i?b.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new b((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const l=u;n(e[l]).next(c=>{o[l]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new b((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function ru(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _w(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ci(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function YT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xg.at=-1;class Ne{constructor(e,n){this.comparator=e,this.root=n||ze.EMPTY}insert(e,n){return new Ne(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ze.BLACK,null,null))}remove(e){return new Ne(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ze.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Fu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Fu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Fu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Fu(this.root,e,this.comparator,!0)}}class Fu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ze{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:ze.RED,this.left=i!=null?i:ze.EMPTY,this.right=s!=null?s:ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ze(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ze.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw j();const e=this.left.check();if(e!==this.right.check())throw j();return e+(this.isRed()?0:1)}}ze.EMPTY=null,ze.RED=!0,ze.BLACK=!1;ze.EMPTY=new class{constructor(){this.size=0}get key(){throw j()}get value(){throw j()}get color(){throw j()}get left(){throw j()}get right(){throw j()}copy(t,e,n,r,i){return this}insert(t,e,n){return new ze(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e){this.comparator=e,this.data=new Ne(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Sw(this.data.getIterator())}getIteratorFrom(e){return new Sw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Pe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Pe(this.comparator);return n.data=e,n}}class Sw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.fields=e,e.sort(et.comparator)}static empty(){return new zt([])}unionWith(e){let n=new Pe(et.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new zt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ks(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new ot(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new ot(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ot.EMPTY_BYTE_STRING=new ot("");const b4=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function kr(t){if(oe(!!t),typeof t=="string"){let e=0;const n=b4.exec(t);if(oe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ce(t.seconds),nanos:Ce(t.nanos)}}function Ce(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Cs(t){return typeof t=="string"?ot.fromBase64String(t):ot.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JT(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ZT(t){const e=t.mapValue.fields.__previous_value__;return JT(e)?ZT(e):e}function ya(t){const e=kr(t.mapValue.fields.__local_write_time__.timestampValue);return new Te(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x4{constructor(e,n,r,i,s,o,a,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class va{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new va("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof va&&e.projectId===this.projectId&&e.database===this.database}}function xh(t){return t==null}function ec(t){return t===0&&1/t==-1/0}function R4(t){return typeof t=="number"&&Number.isInteger(t)&&!ec(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function yi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?JT(t)?4:A4(t)?9007199254740991:10:j()}function In(t,e){if(t===e)return!0;const n=yi(t);if(n!==yi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ya(t).isEqual(ya(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=kr(r.timestampValue),o=kr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Cs(r.bytesValue).isEqual(Cs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Ce(r.geoPointValue.latitude)===Ce(i.geoPointValue.latitude)&&Ce(r.geoPointValue.longitude)===Ce(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Ce(r.integerValue)===Ce(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Ce(r.doubleValue),o=Ce(i.doubleValue);return s===o?ec(s)===ec(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return ks(t.arrayValue.values||[],e.arrayValue.values||[],In);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(_w(s)!==_w(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!In(s[a],o[a])))return!1;return!0}(t,e);default:return j()}}function wa(t,e){return(t.values||[]).find(n=>In(n,e))!==void 0}function bs(t,e){if(t===e)return 0;const n=yi(t),r=yi(e);if(n!==r)return ee(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ee(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Ce(i.integerValue||i.doubleValue),a=Ce(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Ew(t.timestampValue,e.timestampValue);case 4:return Ew(ya(t),ya(e));case 5:return ee(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Cs(i),a=Cs(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let u=0;u<o.length&&u<a.length;u++){const l=ee(o[u],a[u]);if(l!==0)return l}return ee(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=ee(Ce(i.latitude),Ce(s.latitude));return o!==0?o:ee(Ce(i.longitude),Ce(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let u=0;u<o.length&&u<a.length;++u){const l=bs(o[u],a[u]);if(l)return l}return ee(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===ju.mapValue&&s===ju.mapValue)return 0;if(i===ju.mapValue)return 1;if(s===ju.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),u=s.fields||{},l=Object.keys(u);a.sort(),l.sort();for(let c=0;c<a.length&&c<l.length;++c){const h=ee(a[c],l[c]);if(h!==0)return h;const d=bs(o[a[c]],u[l[c]]);if(d!==0)return d}return ee(a.length,l.length)}(t.mapValue,e.mapValue);default:throw j()}}function Ew(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ee(t,e);const n=kr(t),r=kr(e),i=ee(n.seconds,r.seconds);return i!==0?i:ee(n.nanos,r.nanos)}function us(t){return Rp(t)}function Rp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=kr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Cs(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,M.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Rp(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Rp(r.fields[a])}`;return s+"}"}(t.mapValue):j();var e,n}function Iw(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ap(t){return!!t&&"integerValue"in t}function Yg(t){return!!t&&"arrayValue"in t}function Tw(t){return!!t&&"nullValue"in t}function kw(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ll(t){return!!t&&"mapValue"in t}function $o(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ci(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=$o(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=$o(t.arrayValue.values[n]);return e}return Object.assign({},t)}function A4(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.value=e}static empty(){return new yt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ll(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=$o(n)}setAll(e){let n=et.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=$o(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ll(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return In(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ll(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ci(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new yt($o(this.value))}}function ek(t){const e=[];return Ci(t.fields,(n,r)=>{const i=new et([n]);if(ll(r)){const s=ek(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new zt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,n,r,i,s,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new Be(e,0,H.min(),H.min(),yt.empty(),0)}static newFoundDocument(e,n,r){return new Be(e,1,n,H.min(),r,0)}static newNoDocument(e,n){return new Be(e,2,n,H.min(),yt.empty(),0)}static newUnknownDocument(e,n){return new Be(e,3,n,H.min(),yt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=yt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=yt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=H.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Be&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Be(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P4{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ht=null}}function Cw(t,e=null,n=[],r=[],i=null,s=null,o=null){return new P4(t,e,n,r,i,s,o)}function Jg(t){const e=V(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+us(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),xh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>us(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>us(r)).join(",")),e.ht=n}return e.ht}function N4(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${us(r.value)}`;var r}).join(", ")}]`),xh(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>us(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>us(n)).join(",")),`Target(${e})`}function Zg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!j4(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!In(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!xw(t.startAt,e.startAt)&&xw(t.endAt,e.endAt)}function Pp(t){return M.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class ct extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,r):new O4(e,n,r):n==="array-contains"?new L4(e,r):n==="in"?new M4(e,r):n==="not-in"?new U4(e,r):n==="array-contains-any"?new F4(e,r):new ct(e,n,r)}static lt(e,n,r){return n==="in"?new D4(e,r):new $4(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(bs(n,this.value)):n!==null&&yi(this.value)===yi(n)&&this.ft(bs(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return j()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class O4 extends ct{constructor(e,n,r){super(e,n,r),this.key=M.fromName(r.referenceValue)}matches(e){const n=M.comparator(e.key,this.key);return this.ft(n)}}class D4 extends ct{constructor(e,n){super(e,"in",n),this.keys=tk("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class $4 extends ct{constructor(e,n){super(e,"not-in",n),this.keys=tk("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function tk(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>M.fromName(r.referenceValue))}class L4 extends ct{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Yg(n)&&wa(n.arrayValue,this.value)}}class M4 extends ct{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&wa(this.value.arrayValue,n)}}class U4 extends ct{constructor(e,n){super(e,"not-in",n)}matches(e){if(wa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!wa(this.value.arrayValue,n)}}class F4 extends ct{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Yg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>wa(this.value.arrayValue,r))}}class tc{constructor(e,n){this.position=e,this.inclusive=n}}class Lo{constructor(e,n="asc"){this.field=e,this.dir=n}}function j4(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function bw(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=M.comparator(M.fromName(o.referenceValue),n.key):r=bs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function xw(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!In(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this._t=null,this.wt=null,this.startAt,this.endAt}}function V4(t,e,n,r,i,s,o,a){return new iu(t,e,n,r,i,s,o,a)}function Rh(t){return new iu(t)}function Rw(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function nk(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function rk(t){for(const e of t.filters)if(e.dt())return e.field;return null}function ik(t){return t.collectionGroup!==null}function _a(t){const e=V(t);if(e._t===null){e._t=[];const n=rk(e),r=nk(e);if(n!==null&&r===null)n.isKeyField()||e._t.push(new Lo(n)),e._t.push(new Lo(et.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e._t.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new Lo(et.keyField(),s))}}}return e._t}function Hn(t){const e=V(t);if(!e.wt)if(e.limitType==="F")e.wt=Cw(e.path,e.collectionGroup,_a(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of _a(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Lo(s.field,o))}const r=e.endAt?new tc(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new tc(e.startAt.position,e.startAt.inclusive):null;e.wt=Cw(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.wt}function Np(t,e,n){return new iu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ah(t,e){return Zg(Hn(t),Hn(e))&&t.limitType===e.limitType}function sk(t){return`${Jg(Hn(t))}|lt:${t.limitType}`}function Op(t){return`Query(target=${N4(Hn(t))}; limitType=${t.limitType})`}function ey(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):M.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=bw(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,_a(n),r)||n.endAt&&!function(i,s,o){const a=bw(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,_a(n),r))}(t,e)}function z4(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function ok(t){return(e,n)=>{let r=!1;for(const i of _a(t)){const s=B4(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function B4(t,e,n){const r=t.field.isKeyField()?M.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),u=o.data.field(i);return a!==null&&u!==null?bs(a,u):j()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return j()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ak(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ec(e)?"-0":e}}function uk(t){return{integerValue:""+t}}function H4(t,e){return R4(e)?uk(e):ak(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(){this._=void 0}}function q4(t,e,n){return t instanceof Sa?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof xs?ck(t,e):t instanceof Ea?hk(t,e):function(r,i){const s=lk(r,i),o=Aw(s)+Aw(r.yt);return Ap(s)&&Ap(r.yt)?uk(o):ak(r.It,o)}(t,e)}function W4(t,e,n){return t instanceof xs?ck(t,e):t instanceof Ea?hk(t,e):n}function lk(t,e){return t instanceof nc?Ap(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Sa extends Ph{}class xs extends Ph{constructor(e){super(),this.elements=e}}function ck(t,e){const n=dk(e);for(const r of t.elements)n.some(i=>In(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ea extends Ph{constructor(e){super(),this.elements=e}}function hk(t,e){let n=dk(e);for(const r of t.elements)n=n.filter(i=>!In(i,r));return{arrayValue:{values:n}}}class nc extends Ph{constructor(e,n){super(),this.It=e,this.yt=n}}function Aw(t){return Ce(t.integerValue||t.doubleValue)}function dk(t){return Yg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fk{constructor(e,n){this.field=e,this.transform=n}}function K4(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof xs&&r instanceof xs||n instanceof Ea&&r instanceof Ea?ks(n.elements,r.elements,In):n instanceof nc&&r instanceof nc?In(n.yt,r.yt):n instanceof Sa&&r instanceof Sa}(t.transform,e.transform)}class G4{constructor(e,n){this.version=e,this.transformResults=n}}class Sn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Sn}static exists(e){return new Sn(void 0,e)}static updateTime(e){return new Sn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function cl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Nh{}function pk(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new gk(t.key,Sn.none()):new su(t.key,t.data,Sn.none());{const n=t.data,r=yt.empty();let i=new Pe(et.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Vr(t.key,r,new zt(i.toArray()),Sn.none())}}function Q4(t,e,n){t instanceof su?function(r,i,s){const o=r.value.clone(),a=Nw(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Vr?function(r,i,s){if(!cl(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Nw(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(mk(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Mo(t,e,n,r){return t instanceof su?function(i,s,o,a){if(!cl(i.precondition,s))return o;const u=i.value.clone(),l=Ow(i.fieldTransforms,a,s);return u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Vr?function(i,s,o,a){if(!cl(i.precondition,s))return o;const u=Ow(i.fieldTransforms,a,s),l=s.data;return l.setAll(mk(i)),l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return cl(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function X4(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=lk(r.transform,i||null);s!=null&&(n===null&&(n=yt.empty()),n.set(r.field,s))}return n||null}function Pw(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&ks(n,r,(i,s)=>K4(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class su extends Nh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Vr extends Nh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function mk(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Nw(t,e,n){const r=new Map;oe(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,W4(o,a,n[i]))}return r}function Ow(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,q4(s,o,e))}return r}class gk extends Nh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Y4 extends Nh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J4{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke,G;function Z4(t){switch(t){default:return j();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function yk(t){if(t===void 0)return Bn("GRPC error has no .code"),S.UNKNOWN;switch(t){case ke.OK:return S.OK;case ke.CANCELLED:return S.CANCELLED;case ke.UNKNOWN:return S.UNKNOWN;case ke.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case ke.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case ke.INTERNAL:return S.INTERNAL;case ke.UNAVAILABLE:return S.UNAVAILABLE;case ke.UNAUTHENTICATED:return S.UNAUTHENTICATED;case ke.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case ke.NOT_FOUND:return S.NOT_FOUND;case ke.ALREADY_EXISTS:return S.ALREADY_EXISTS;case ke.PERMISSION_DENIED:return S.PERMISSION_DENIED;case ke.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case ke.ABORTED:return S.ABORTED;case ke.OUT_OF_RANGE:return S.OUT_OF_RANGE;case ke.UNIMPLEMENTED:return S.UNIMPLEMENTED;case ke.DATA_LOSS:return S.DATA_LOSS;default:return j()}}(G=ke||(ke={}))[G.OK=0]="OK",G[G.CANCELLED=1]="CANCELLED",G[G.UNKNOWN=2]="UNKNOWN",G[G.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",G[G.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",G[G.NOT_FOUND=5]="NOT_FOUND",G[G.ALREADY_EXISTS=6]="ALREADY_EXISTS",G[G.PERMISSION_DENIED=7]="PERMISSION_DENIED",G[G.UNAUTHENTICATED=16]="UNAUTHENTICATED",G[G.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",G[G.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",G[G.ABORTED=10]="ABORTED",G[G.OUT_OF_RANGE=11]="OUT_OF_RANGE",G[G.UNIMPLEMENTED=12]="UNIMPLEMENTED",G[G.INTERNAL=13]="INTERNAL",G[G.UNAVAILABLE=14]="UNAVAILABLE",G[G.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ci(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return YT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e3=new Ne(M.comparator);function qn(){return e3}const vk=new Ne(M.comparator);function wo(...t){let e=vk;for(const n of t)e=e.insert(n.key,n);return e}function wk(t){let e=vk;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Zr(){return Uo()}function _k(){return Uo()}function Uo(){return new qs(t=>t.toString(),(t,e)=>t.isEqual(e))}const t3=new Ne(M.comparator),n3=new Pe(M.comparator);function q(...t){let e=n3;for(const n of t)e=e.add(n);return e}const r3=new Pe(ee);function Sk(){return r3}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ou.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Oh(H.min(),i,Sk(),qn(),q())}}class ou{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ou(r,n,q(),q(),q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,n,r,i){this.Tt=e,this.removedTargetIds=n,this.key=r,this.Et=i}}class Ek{constructor(e,n){this.targetId=e,this.At=n}}class Ik{constructor(e,n,r=ot.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Dw{constructor(){this.Rt=0,this.bt=Lw(),this.Pt=ot.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=q(),n=q(),r=q();return this.bt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:j()}}),new ou(this.Pt,this.vt,e,n,r)}Nt(){this.Vt=!1,this.bt=Lw()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class i3{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=qn(),this.qt=$w(),this.Kt=new Pe(ee)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const r=this.zt(n);switch(e.state){case 0:this.Ht(n)&&r.Ct(e.resumeToken);break;case 1:r.Ft(),r.St||r.Nt(),r.Ct(e.resumeToken);break;case 2:r.Ft(),r.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(r.$t(),r.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),r.Ct(e.resumeToken));break;default:j()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((r,i)=>{this.Ht(i)&&n(i)})}Yt(e){const n=e.targetId,r=e.At.count,i=this.Xt(n);if(i){const s=i.target;if(Pp(s))if(r===0){const o=new M(s.path);this.jt(n,o,Be.newNoDocument(o,H.min()))}else oe(r===1);else this.Zt(n)!==r&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((s,o)=>{const a=this.Xt(o);if(a){if(s.current&&Pp(a.target)){const u=new M(a.target.path);this.Ut.get(u)!==null||this.ee(o,u)||this.jt(o,u,Be.newNoDocument(u,e))}s.Dt&&(n.set(o,s.xt()),s.Nt())}});let r=q();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const l=this.Xt(u);return!l||l.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ut.forEach((s,o)=>o.setReadTime(e));const i=new Oh(e,n,this.Kt,this.Ut,r);return this.Ut=qn(),this.qt=$w(),this.Kt=new Pe(ee),i}Qt(e,n){if(!this.Ht(e))return;const r=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,r),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,r){if(!this.Ht(e))return;const i=this.zt(e);this.ee(e,n)?i.kt(n,1):i.Ot(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),r&&(this.Ut=this.Ut.insert(n,r))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let n=this.Lt.get(e);return n||(n=new Dw,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new Pe(ee),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||L("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new Dw),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function $w(){return new Ne(M.comparator)}function Lw(){return new Ne(M.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s3=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),o3=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class a3{constructor(e,n){this.databaseId=e,this.gt=n}}function rc(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Tk(t,e){return t.gt?e.toBase64():e.toUint8Array()}function u3(t,e){return rc(t,e.toTimestamp())}function Ln(t){return oe(!!t),H.fromTimestamp(function(e){const n=kr(e);return new Te(n.seconds,n.nanos)}(t))}function ty(t,e){return function(n){return new ue(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function kk(t){const e=ue.fromString(t);return oe(xk(e)),e}function Dp(t,e){return ty(t.databaseId,e.path)}function Kd(t,e){const n=kk(e);if(n.get(1)!==t.databaseId.projectId)throw new O(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new O(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new M(Ck(n))}function $p(t,e){return ty(t.databaseId,e)}function l3(t){const e=kk(t);return e.length===4?ue.emptyPath():Ck(e)}function Lp(t){return new ue(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ck(t){return oe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Mw(t,e,n){return{name:Dp(t,e),fields:n.value.mapValue.fields}}function c3(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:j()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,l){return u.gt?(oe(l===void 0||typeof l=="string"),ot.fromBase64String(l||"")):(oe(l===void 0||l instanceof Uint8Array),ot.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const l=u.code===void 0?S.UNKNOWN:yk(u.code);return new O(l,u.message||"")}(o);n=new Ik(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Kd(t,r.document.name),s=Ln(r.document.updateTime),o=new yt({mapValue:{fields:r.document.fields}}),a=Be.newFoundDocument(i,s,o),u=r.targetIds||[],l=r.removedTargetIds||[];n=new hl(u,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Kd(t,r.document),s=r.readTime?Ln(r.readTime):H.min(),o=Be.newNoDocument(i,s),a=r.removedTargetIds||[];n=new hl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Kd(t,r.document),s=r.removedTargetIds||[];n=new hl([],s,i,null)}else{if(!("filter"in e))return j();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new J4(i),o=r.targetId;n=new Ek(o,s)}}return n}function h3(t,e){let n;if(e instanceof su)n={update:Mw(t,e.key,e.value)};else if(e instanceof gk)n={delete:Dp(t,e.key)};else if(e instanceof Vr)n={update:Mw(t,e.key,e.data),updateMask:S3(e.fieldMask)};else{if(!(e instanceof Y4))return j();n={verify:Dp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Sa)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof xs)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ea)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof nc)return{fieldPath:s.field.canonicalString(),increment:o.yt};throw j()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:u3(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:j()}(t,e.precondition)),n}function d3(t,e){return t&&t.length>0?(oe(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Ln(r.updateTime):Ln(i);return s.isEqual(H.min())&&(s=Ln(i)),new G4(s,r.transformResults||[])}(n,e))):[]}function f3(t,e){return{documents:[$p(t,e.path)]}}function p3(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=$p(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=$p(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(u){if(u.length===0)return;const l=u.map(c=>function(h){if(h.op==="=="){if(kw(h.value))return{unaryFilter:{field:$i(h.field),op:"IS_NAN"}};if(Tw(h.value))return{unaryFilter:{field:$i(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(kw(h.value))return{unaryFilter:{field:$i(h.field),op:"IS_NOT_NAN"}};if(Tw(h.value))return{unaryFilter:{field:$i(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:$i(h.field),op:v3(h.op),value:h.value}}}(c));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(u){if(u.length!==0)return u.map(l=>function(c){return{field:$i(c.field),direction:y3(c.dir)}}(l))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(u,l){return u.gt||xh(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),n}function m3(t){let e=l3(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){oe(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=bk(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new Lo(Yi(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,xh(h)?null:h}(n.limit));let u=null;n.startAt&&(u=function(c){const h=!!c.before,d=c.values||[];return new tc(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(c){const h=!c.before,d=c.values||[];return new tc(d,h)}(n.endAt)),V4(e,i,o,s,a,"F",u,l)}function g3(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return j()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function bk(t){return t?t.unaryFilter!==void 0?[_3(t)]:t.fieldFilter!==void 0?[w3(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>bk(e)).reduce((e,n)=>e.concat(n)):j():[]}function y3(t){return s3[t]}function v3(t){return o3[t]}function $i(t){return{fieldPath:t.canonicalString()}}function Yi(t){return et.fromServerFormat(t.fieldPath)}function w3(t){return ct.create(Yi(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return j()}}(t.fieldFilter.op),t.fieldFilter.value)}function _3(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Yi(t.unaryFilter.field);return ct.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Yi(t.unaryFilter.field);return ct.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Yi(t.unaryFilter.field);return ct.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Yi(t.unaryFilter.field);return ct.create(i,"!=",{nullValue:"NULL_VALUE"});default:return j()}}function S3(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function xk(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E3{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Q4(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Mo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Mo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=_k();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=pk(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(H.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),q())}isEqual(e){return this.batchId===e.batchId&&ks(this.mutations,e.mutations,(n,r)=>Pw(n,r))&&ks(this.baseMutations,e.baseMutations,(n,r)=>Pw(n,r))}}class ny{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){oe(e.mutations.length===r.length);let i=t3;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new ny(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I3{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,n,r,i,s=H.min(),o=H.min(),a=ot.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new oi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new oi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new oi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T3{constructor(e){this.re=e}}function k3(t){const e=m3({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Np(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C3{constructor(){this.Ye=new b3}addToCollectionParentIndex(e,n){return this.Ye.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(Tr.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(Tr.min())}updateCollectionGroup(e,n,r){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class b3{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Pe(ue.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Pe(ue.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Rs(0)}static vn(){return new Rs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x3{constructor(){this.changes=new qs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Be.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?b.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R3{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A3{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.getBaseDocument(e,n,r))).next(i=>(r!==null&&Mo(r.mutation,i,zt.empty(),Te.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,q()).next(()=>r))}getLocalViewOfDocuments(e,n,r=q()){const i=Zr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=wo();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Zr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,q()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=qn();const o=Uo(),a=Uo();return n.forEach((u,l)=>{const c=r.get(l.key);i.has(l.key)&&(c===void 0||c.mutation instanceof Vr)?s=s.insert(l.key,l):c!==void 0&&(o.set(l.key,c.mutation.getFieldMask()),Mo(c.mutation,l,c.mutation.getFieldMask(),Te.now()))}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((l,c)=>o.set(l,c)),n.forEach((l,c)=>{var h;return a.set(l,new R3(c,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Uo();let i=new Ne((o,a)=>o-a),s=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const l=n.get(u);if(l===null)return;let c=r.get(u)||zt.empty();c=a.applyToLocalView(l,c),r.set(u,c);const h=(i.get(a.batchId)||q()).add(u);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),l=u.key,c=u.value,h=_k();c.forEach(d=>{if(!s.has(d)){const f=pk(n.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return b.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return M.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ik(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):b.resolve(Zr());let a=-1,u=s;return o.next(l=>b.forEach(l,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?b.resolve():this.getBaseDocument(e,c,h).next(d=>{u=u.insert(c,d)}))).next(()=>this.populateOverlays(e,l,s)).next(()=>this.computeViews(e,u,l,q())).next(c=>({batchId:a,changes:wk(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new M(n)).next(r=>{let i=wo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=wo();return this.indexManager.getCollectionParents(e,i).next(o=>b.forEach(o,a=>{const u=function(l,c){return new iu(c,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r).next(l=>{l.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(s=>{s.forEach((a,u)=>{const l=u.getKey();i.get(l)===null&&(i=i.insert(l,Be.newInvalidDocument(l)))});let o=wo();return i.forEach((a,u)=>{const l=s.get(a);l!==void 0&&Mo(l.mutation,u,zt.empty(),Te.now()),ey(n,u)&&(o=o.insert(a,u))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):b.resolve(Be.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P3{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return b.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:Ln(r.createTime)}),b.resolve()}getNamedQuery(e,n){return b.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:k3(r.bundledQuery),readTime:Ln(r.readTime)}}(n)),b.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N3{constructor(){this.overlays=new Ne(M.comparator),this.es=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Zr();return b.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ue(e,n,s)}),b.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.es.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.es.delete(r)),b.resolve()}getOverlaysForCollection(e,n,r){const i=Zr(),s=n.length+1,o=new M(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,l=u.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return b.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ne((l,c)=>l-c);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let c=s.get(l.largestBatchId);c===null&&(c=Zr(),s=s.insert(l.largestBatchId,c)),c.set(l.getKey(),l)}}const a=Zr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((l,c)=>a.set(l,c)),!(a.size()>=i)););return b.resolve(a)}ue(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(r.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new I3(n,r));let s=this.es.get(n);s===void 0&&(s=q(),this.es.set(n,s)),this.es.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(){this.ns=new Pe(De.ss),this.rs=new Pe(De.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new De(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new De(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new M(new ue([])),r=new De(n,e),i=new De(n,e+1),s=[];return this.rs.forEachInRange([r,i],o=>{this.cs(o),s.push(o.key)}),s}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new M(new ue([])),r=new De(n,e),i=new De(n,e+1);let s=q();return this.rs.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new De(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class De{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return M.comparator(e.key,n.key)||ee(e._s,n._s)}static os(e,n){return ee(e._s,n._s)||M.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O3{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Pe(De.ss)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new E3(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new De(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ps(r),s=i<0?0:i;return b.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new De(n,0),i=new De(n,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([r,i],o=>{const a=this.ys(o._s);s.push(a)}),b.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Pe(ee);return n.forEach(i=>{const s=new De(i,0),o=new De(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([s,o],a=>{r=r.add(a._s)})}),b.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;M.isDocumentKey(s)||(s=s.child(""));const o=new De(new M(s),0);let a=new Pe(ee);return this.gs.forEachWhile(u=>{const l=u.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(u._s)),!0)},o),b.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const i=this.ys(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){oe(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return b.forEach(n.mutations,i=>{const s=new De(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new De(n,0),i=this.gs.firstAfterOrEqual(r);return b.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D3{constructor(e){this.Es=e,this.docs=new Ne(M.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return b.resolve(r?r.document.mutableCopy():Be.newInvalidDocument(n))}getEntries(e,n){let r=qn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Be.newInvalidDocument(i))}),b.resolve(r)}getAllFromCollection(e,n,r){let i=qn();const s=new M(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:u}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||T4(I4(u),r)<=0||(i=i.insert(u.key,u.mutableCopy()))}return b.resolve(i)}getAllFromCollectionGroup(e,n,r,i){j()}As(e,n){return b.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new $3(this)}getSize(e){return b.resolve(this.size)}}class $3 extends x3{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(r)}),b.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L3{constructor(e){this.persistence=e,this.Rs=new qs(n=>Jg(n),Zg),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.bs=0,this.Ps=new ry,this.targetCount=0,this.vs=Rs.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,i)=>n(i)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),b.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new Rs(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.Dn(n),b.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),b.waitFor(s).next(()=>i)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return b.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),b.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),b.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),b.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return b.resolve(r)}containsKey(e,n){return b.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M3{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Xg(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new L3(this),this.indexManager=new C3,this.remoteDocumentCache=function(r){return new D3(r)}(r=>this.referenceDelegate.xs(r)),this.It=new T3(n),this.Ns=new P3(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new N3,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new O3(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){L("MemoryPersistence","Starting transaction:",e);const i=new U3(this.Ss.next());return this.referenceDelegate.ks(),r(i).next(s=>this.referenceDelegate.Os(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ms(e,n){return b.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class U3 extends C4{constructor(e){super(),this.currentSequenceNumber=e}}class iy{constructor(e){this.persistence=e,this.Fs=new ry,this.$s=null}static Bs(e){return new iy(e)}get Ls(){if(this.$s)return this.$s;throw j()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),b.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),b.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ls.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Ls,r=>{const i=M.fromPath(r);return this.Us(e,i).next(s=>{s||n.removeEntry(i,H.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return b.or([()=>b.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=i}static Ci(e,n){let r=q(),i=q();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new sy(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F3{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.ki(e,n).next(s=>s||this.Oi(e,n,i,r)).next(s=>s||this.Mi(e,n))}ki(e,n){if(Rw(n))return b.resolve(null);let r=Hn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Np(n,null,"F"),r=Hn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=q(...s);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const l=this.Fi(n,a);return this.$i(n,l,o,u.readTime)?this.ki(e,Np(n,null,"F")):this.Bi(e,l,n,u)}))})))}Oi(e,n,r,i){return Rw(n)||i.isEqual(H.min())?this.Mi(e,n):this.Ni.getDocuments(e,r).next(s=>{const o=this.Fi(n,s);return this.$i(n,o,r,i)?this.Mi(e,n):(ww()<=J.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Op(n)),this.Bi(e,o,n,E4(i,-1)))})}Fi(e,n){let r=new Pe(ok(e));return n.forEach((i,s)=>{ey(e,s)&&(r=r.add(s))}),r}$i(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Mi(e,n){return ww()<=J.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",Op(n)),this.Ni.getDocumentsMatchingQuery(e,n,Tr.min())}Bi(e,n,r,i){return this.Ni.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j3{constructor(e,n,r,i){this.persistence=e,this.Li=n,this.It=i,this.Ui=new Ne(ee),this.qi=new qs(s=>Jg(s),Zg),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new A3(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function V3(t,e,n,r){return new j3(t,e,n,r)}async function Rk(t,e){const n=V(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=q();for(const l of i){o.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}for(const l of s){a.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}return n.localDocuments.getDocuments(r,u).next(l=>({ji:l,removedBatchIds:o,addedBatchIds:a}))})})}function z3(t,e){const n=V(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,u,l){const c=u.batch,h=c.keys();let d=b.resolve();return h.forEach(f=>{d=d.next(()=>l.getEntry(a,f)).next(m=>{const y=u.docVersions.get(f);oe(y!==null),m.version.compareTo(y)<0&&(c.applyToRemoteDocument(m,u),m.isValidDocument()&&(m.setReadTime(u.commitVersion),l.addEntry(m)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=q();for(let u=0;u<o.mutationResults.length;++u)o.mutationResults[u].transformResults.length>0&&(a=a.add(o.batch.mutations[u].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Ak(t){const e=V(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function B3(t,e){const n=V(t),r=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(s,c.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?f=f.withResumeToken(ot.EMPTY_BYTE_STRING,H.min()).withLastLimboFreeSnapshotVersion(H.min()):c.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(c.resumeToken,r)),i=i.insert(h,f),function(m,y,w){return m.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(d,f,c)&&a.push(n.Cs.updateTargetData(s,f))});let u=qn(),l=q();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(H3(s,o,e.documentUpdates).next(c=>{u=c.Wi,l=c.zi})),!r.isEqual(H.min())){const c=n.Cs.getLastRemoteSnapshotVersion(s).next(h=>n.Cs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return b.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,l)).next(()=>u)}).then(s=>(n.Ui=i,s))}function H3(t,e,n){let r=q(),i=q();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=qn();return n.forEach((a,u)=>{const l=s.get(a);u.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(H.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!l.isValidDocument()||u.version.compareTo(l.version)>0||u.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):L("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",u.version)}),{Wi:o,zi:i}})}function q3(t,e){const n=V(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function W3(t,e){const n=V(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Cs.getTargetData(r,e).next(s=>s?(i=s,b.resolve(i)):n.Cs.allocateTargetId(r).next(o=>(i=new oi(e,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ui.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(r.targetId,r),n.qi.set(e,r.targetId)),r})}async function Mp(t,e,n){const r=V(t),i=r.Ui.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ru(o))throw o;L("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ui=r.Ui.remove(e),r.qi.delete(i.target)}function Uw(t,e,n){const r=V(t);let i=H.min(),s=q();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,u,l){const c=V(a),h=c.qi.get(l);return h!==void 0?b.resolve(c.Ui.get(h)):c.Cs.getTargetData(u,l)}(r,o,Hn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,n?i:H.min(),n?s:q())).next(a=>(K3(r,z4(e),a),{documents:a,Hi:s})))}function K3(t,e,n){let r=t.Ki.get(e)||H.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ki.set(e,r)}class Fw{constructor(){this.activeTargetIds=Sk()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class G3{constructor(){this.Lr=new Fw,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,r){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Fw,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q3{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){L("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){L("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X3={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y3{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J3 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,r,i,s){const o=this.ho(e,n);L("RestConnection","Sending: ",o,r);const a={};return this.lo(a,i,s),this.fo(e,o,a,r).then(u=>(L("RestConnection","Received: ",u),u),u=>{throw xp("RestConnection",`${e} failed with error: `,u,"url: ",o,"request:",r),u})}_o(e,n,r,i,s,o){return this.ao(e,n,r,i,s)}lo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Hs,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ho(e,n){const r=X3[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,r,i){return new Promise((s,o)=>{const a=new d4;a.setWithCredentials(!0),a.listenOnce(l4.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Wd.NO_ERROR:const l=a.getResponseJson();L("Connection","XHR received:",JSON.stringify(l)),s(l);break;case Wd.TIMEOUT:L("Connection",'RPC "'+e+'" timed out'),o(new O(S.DEADLINE_EXCEEDED,"Request time out"));break;case Wd.HTTP_ERROR:const c=a.getStatus();if(L("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(f){const m=f.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(m)>=0?m:S.UNKNOWN}(h.status);o(new O(d,h.message))}else o(new O(S.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new O(S.UNAVAILABLE,"Connection failed."));break;default:j()}}finally{L("Connection",'RPC "'+e+'" completed.')}});const u=JSON.stringify(i);a.send(n,"POST",u,r,15)})}wo(e,n,r){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=a4(),o=u4(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new h4({})),this.lo(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const u=i.join("");L("Connection","Creating WebChannel: "+u,a);const l=s.createWebChannel(u,a);let c=!1,h=!1;const d=new Y3({Hr:m=>{h?L("Connection","Not sending because WebChannel is closed:",m):(c||(L("Connection","Opening WebChannel transport."),l.open(),c=!0),L("Connection","WebChannel sending:",m),l.send(m))},Jr:()=>l.close()}),f=(m,y,w)=>{m.listen(y,g=>{try{w(g)}catch(p){setTimeout(()=>{throw p},0)}})};return f(l,Uu.EventType.OPEN,()=>{h||L("Connection","WebChannel transport opened.")}),f(l,Uu.EventType.CLOSE,()=>{h||(h=!0,L("Connection","WebChannel transport closed"),d.io())}),f(l,Uu.EventType.ERROR,m=>{h||(h=!0,xp("Connection","WebChannel transport errored:",m),d.io(new O(S.UNAVAILABLE,"The operation could not be completed")))}),f(l,Uu.EventType.MESSAGE,m=>{var y;if(!h){const w=m.data[0];oe(!!w);const g=w,p=g.error||((y=g[0])===null||y===void 0?void 0:y.error);if(p){L("Connection","WebChannel received error:",p);const v=p.status;let _=function(x){const T=ke[x];if(T!==void 0)return yk(T)}(v),E=p.message;_===void 0&&(_=S.INTERNAL,E="Unknown error status: "+v+" with message "+p.message),h=!0,d.io(new O(_,E)),l.close()}else L("Connection","WebChannel received:",w),d.ro(w)}}),f(o,c4.STAT_EVENT,m=>{m.stat===yw.PROXY?L("Connection","Detected buffering proxy"):m.stat===yw.NOPROXY&&L("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function Gd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dh(t){return new a3(t,!0)}class Pk{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Hs=e,this.timerId=n,this.mo=r,this.yo=i,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-r);i>0&&L("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nk{constructor(e,n,r,i,s,o,a,u){this.Hs=e,this.vo=r,this.Vo=i,this.So=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new Pk(e,n)}ko(){return this.state===1||this.state===5||this.Oo()}Oo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Oo()&&this.Co===null&&(this.Co=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.Bo()))}Lo(e){this.Uo(),this.stream.send(e)}async Bo(){if(this.Oo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(e,n){this.Uo(),this.qo(),this.No.cancel(),this.Do++,e!==4?this.No.reset():n&&n.code===S.RESOURCE_EXHAUSTED?(Bn(n.toString()),Bn("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):n&&n.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Ko(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Ko(){}auth(){this.state=1;const e=this.Go(this.Do),n=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Do===n&&this.Qo(r,i)},r=>{e(()=>{const i=new O(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.jo(i)})})}Qo(e,n){const r=this.Go(this.Do);this.stream=this.Wo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.xo=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.Oo()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{r(()=>this.jo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Mo(){this.state=5,this.No.Ro(async()=>{this.state=0,this.start()})}jo(e){return L("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Go(e){return n=>{this.Hs.enqueueAndForget(()=>this.Do===e?n():(L("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Z3 extends Nk{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.It=s}Wo(e,n){return this.So.wo("Listen",e,n)}onMessage(e){this.No.reset();const n=c3(this.It,e),r=function(i){if(!("targetChange"in i))return H.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?H.min():s.readTime?Ln(s.readTime):H.min()}(e);return this.listener.zo(n,r)}Ho(e){const n={};n.database=Lp(this.It),n.addTarget=function(i,s){let o;const a=s.target;return o=Pp(a)?{documents:f3(i,a)}:{query:p3(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=Tk(i,s.resumeToken):s.snapshotVersion.compareTo(H.min())>0&&(o.readTime=rc(i,s.snapshotVersion.toTimestamp())),o}(this.It,e);const r=g3(this.It,e);r&&(n.labels=r),this.Lo(n)}Jo(e){const n={};n.database=Lp(this.It),n.removeTarget=e,this.Lo(n)}}class ej extends Nk{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.It=s,this.Yo=!1}get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(e,n){return this.So.wo("Write",e,n)}onMessage(e){if(oe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Yo){this.No.reset();const n=d3(e.writeResults,e.commitTime),r=Ln(e.commitTime);return this.listener.tu(r,n)}return oe(!e.writeResults||e.writeResults.length===0),this.Yo=!0,this.listener.eu()}nu(){const e={};e.database=Lp(this.It),this.Lo(e)}Zo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>h3(this.It,r))};this.Lo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tj extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.So=r,this.It=i,this.su=!1}iu(){if(this.su)throw new O(S.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,r){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.So.ao(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new O(S.UNKNOWN,i.toString())})}_o(e,n,r,i){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.So._o(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new O(S.UNKNOWN,s.toString())})}terminate(){this.su=!0}}class nj{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}cu(){this.ru===0&&(this.au("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.au("Offline"),Promise.resolve())))}lu(e){this.state==="Online"?this.au("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.au("Offline")))}set(e){this.fu(),this.ru=0,e==="Online"&&(this.uu=!1),this.au(e)}au(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}hu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(Bn(n),this.uu=!1):L("OnlineStateTracker",n)}fu(){this.ou!==null&&(this.ou.cancel(),this.ou=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rj{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=s,this.gu.qr(o=>{r.enqueueAndForget(async()=>{bi(this)&&(L("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=V(a);u.wu.add(4),await au(u),u.yu.set("Unknown"),u.wu.delete(4),await $h(u)}(this))})}),this.yu=new nj(r,i)}}async function $h(t){if(bi(t))for(const e of t.mu)await e(!0)}async function au(t){for(const e of t.mu)await e(!1)}function Ok(t,e){const n=V(t);n._u.has(e.targetId)||(n._u.set(e.targetId,e),uy(n)?ay(n):Ws(n).Oo()&&oy(n,e))}function Dk(t,e){const n=V(t),r=Ws(n);n._u.delete(e),r.Oo()&&$k(n,e),n._u.size===0&&(r.Oo()?r.$o():bi(n)&&n.yu.set("Unknown"))}function oy(t,e){t.pu.Mt(e.targetId),Ws(t).Ho(e)}function $k(t,e){t.pu.Mt(e),Ws(t).Jo(e)}function ay(t){t.pu=new i3({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t._u.get(e)||null}),Ws(t).start(),t.yu.cu()}function uy(t){return bi(t)&&!Ws(t).ko()&&t._u.size>0}function bi(t){return V(t).wu.size===0}function Lk(t){t.pu=void 0}async function ij(t){t._u.forEach((e,n)=>{oy(t,e)})}async function sj(t,e){Lk(t),uy(t)?(t.yu.lu(e),ay(t)):t.yu.set("Unknown")}async function oj(t,e,n){if(t.yu.set("Online"),e instanceof Ik&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r._u.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r._u.delete(o),r.pu.removeTarget(o))}(t,e)}catch(r){L("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ic(t,r)}else if(e instanceof hl?t.pu.Gt(e):e instanceof Ek?t.pu.Yt(e):t.pu.Wt(e),!n.isEqual(H.min()))try{const r=await Ak(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.pu.te(s);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const l=i._u.get(u);l&&i._u.set(u,l.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const u=i._u.get(a);if(!u)return;i._u.set(a,u.withResumeToken(ot.EMPTY_BYTE_STRING,u.snapshotVersion)),$k(i,a);const l=new oi(u.target,a,1,u.sequenceNumber);oy(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){L("RemoteStore","Failed to raise snapshot:",r),await ic(t,r)}}async function ic(t,e,n){if(!ru(e))throw e;t.wu.add(1),await au(t),t.yu.set("Offline"),n||(n=()=>Ak(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{L("RemoteStore","Retrying IndexedDB access"),await n(),t.wu.delete(1),await $h(t)})}function Mk(t,e){return e().catch(n=>ic(t,n,e))}async function Lh(t){const e=V(t),n=Cr(e);let r=e.du.length>0?e.du[e.du.length-1].batchId:-1;for(;aj(e);)try{const i=await q3(e.localStore,r);if(i===null){e.du.length===0&&n.$o();break}r=i.batchId,uj(e,i)}catch(i){await ic(e,i)}Uk(e)&&Fk(e)}function aj(t){return bi(t)&&t.du.length<10}function uj(t,e){t.du.push(e);const n=Cr(t);n.Oo()&&n.Xo&&n.Zo(e.mutations)}function Uk(t){return bi(t)&&!Cr(t).ko()&&t.du.length>0}function Fk(t){Cr(t).start()}async function lj(t){Cr(t).nu()}async function cj(t){const e=Cr(t);for(const n of t.du)e.Zo(n.mutations)}async function hj(t,e,n){const r=t.du.shift(),i=ny.from(r,e,n);await Mk(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Lh(t)}async function dj(t,e){e&&Cr(t).Xo&&await async function(n,r){if(i=r.code,Z4(i)&&i!==S.ABORTED){const s=n.du.shift();Cr(n).Fo(),await Mk(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Lh(n)}var i}(t,e),Uk(t)&&Fk(t)}async function Vw(t,e){const n=V(t);n.asyncQueue.verifyOperationInProgress(),L("RemoteStore","RemoteStore received new credentials");const r=bi(n);n.wu.add(3),await au(n),r&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.wu.delete(3),await $h(n)}async function fj(t,e){const n=V(t);e?(n.wu.delete(2),await $h(n)):e||(n.wu.add(2),await au(n),n.yu.set("Unknown"))}function Ws(t){return t.Iu||(t.Iu=function(e,n,r){const i=V(e);return i.iu(),new Z3(n,i.So,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:ij.bind(null,t),Zr:sj.bind(null,t),zo:oj.bind(null,t)}),t.mu.push(async e=>{e?(t.Iu.Fo(),uy(t)?ay(t):t.yu.set("Unknown")):(await t.Iu.stop(),Lk(t))})),t.Iu}function Cr(t){return t.Tu||(t.Tu=function(e,n,r){const i=V(e);return i.iu(),new ej(n,i.So,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:lj.bind(null,t),Zr:dj.bind(null,t),eu:cj.bind(null,t),tu:hj.bind(null,t)}),t.mu.push(async e=>{e?(t.Tu.Fo(),await Lh(t)):(await t.Tu.stop(),t.du.length>0&&(L("RemoteStore",`Stopping write stream with ${t.du.length} pending writes`),t.du=[]))})),t.Tu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new $n,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new ly(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cy(t,e){if(Bn("AsyncQueue",`${e}: ${t}`),ru(t))return new O(S.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e){this.comparator=e?(n,r)=>e(n,r)||M.comparator(n.key,r.key):(n,r)=>M.comparator(n.key,r.key),this.keyedMap=wo(),this.sortedSet=new Ne(this.comparator)}static emptySet(e){return new ls(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ls)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ls;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{constructor(){this.Eu=new Ne(M.comparator)}track(e){const n=e.doc.key,r=this.Eu.get(n);r?e.type!==0&&r.type===3?this.Eu=this.Eu.insert(n,e):e.type===3&&r.type!==1?this.Eu=this.Eu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Eu=this.Eu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Eu=this.Eu.remove(n):e.type===1&&r.type===2?this.Eu=this.Eu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):j():this.Eu=this.Eu.insert(n,e)}Au(){const e=[];return this.Eu.inorderTraversal((n,r)=>{e.push(r)}),e}}class As{constructor(e,n,r,i,s,o,a,u,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new As(e,n,ls.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ah(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pj{constructor(){this.Ru=void 0,this.listeners=[]}}class mj{constructor(){this.queries=new qs(e=>sk(e),Ah),this.onlineState="Unknown",this.bu=new Set}}async function hy(t,e){const n=V(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new pj),i)try{s.Ru=await n.onListen(r)}catch(o){const a=cy(o,`Initialization of query '${Op(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Pu(n.onlineState),s.Ru&&e.vu(s.Ru)&&fy(n)}async function dy(t,e){const n=V(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function gj(t,e){const n=V(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.vu(i)&&(r=!0);o.Ru=i}}r&&fy(n)}function yj(t,e,n){const r=V(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function fy(t){t.bu.forEach(e=>{e.next()})}class py{constructor(e,n,r){this.query=e,this.Vu=n,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=r||{}}vu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new As(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Su?this.Cu(e)&&(this.Vu.next(e),n=!0):this.xu(e,this.onlineState)&&(this.Nu(e),n=!0),this.Du=e,n}onError(e){this.Vu.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Du&&!this.Su&&this.xu(this.Du,e)&&(this.Nu(this.Du),n=!0),n}xu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Cu(e){if(e.docChanges.length>0)return!0;const n=this.Du&&this.Du.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Nu(e){e=As.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Su=!0,this.Vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{constructor(e){this.key=e}}class Vk{constructor(e){this.key=e}}class vj{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=q(),this.mutatedKeys=q(),this.Gu=ok(e),this.Qu=new ls(this.Gu)}get ju(){return this.Uu}Wu(e,n){const r=n?n.zu:new zw,i=n?n.Qu:this.Qu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),f=ey(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),y=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let w=!1;d&&f?d.data.isEqual(f.data)?m!==y&&(r.track({type:3,doc:f}),w=!0):this.Hu(d,f)||(r.track({type:2,doc:f}),w=!0,(u&&this.Gu(f,u)>0||l&&this.Gu(f,l)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),w=!0):d&&!f&&(r.track({type:1,doc:d}),w=!0,(u||l)&&(a=!0)),w&&(f?(o=o.add(f),s=y?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Qu:o,zu:r,$i:a,mutatedKeys:s}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const s=e.zu.Au();s.sort((l,c)=>function(h,d){const f=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return j()}};return f(h)-f(d)}(l.type,c.type)||this.Gu(l.doc,c.doc)),this.Ju(r);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,u=a!==this.qu;return this.qu=a,s.length!==0||u?{snapshot:new As(this.query,e.Qu,i,s,e.mutatedKeys,a===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new zw,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=q(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return e.forEach(r=>{this.Ku.has(r)||n.push(new Vk(r))}),this.Ku.forEach(r=>{e.has(r)||n.push(new jk(r))}),n}tc(e){this.Uu=e.Hi,this.Ku=q();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return As.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class wj{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class _j{constructor(e){this.key=e,this.nc=!1}}class Sj{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new qs(a=>sk(a),Ah),this.rc=new Map,this.oc=new Set,this.uc=new Ne(M.comparator),this.cc=new Map,this.ac=new ry,this.hc={},this.lc=new Map,this.fc=Rs.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function Ej(t,e){const n=Nj(t);let r,i;const s=n.ic.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ec();else{const o=await W3(n.localStore,Hn(e));n.isPrimaryClient&&Ok(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Ij(n,e,r,a==="current",o.resumeToken)}return i}async function Ij(t,e,n,r,i){t._c=(h,d,f)=>async function(m,y,w,g){let p=y.view.Wu(w);p.$i&&(p=await Uw(m.localStore,y.query,!1).then(({documents:E})=>y.view.Wu(E,p)));const v=g&&g.targetChanges.get(y.targetId),_=y.view.applyChanges(p,m.isPrimaryClient,v);return Hw(m,y.targetId,_.Xu),_.snapshot}(t,h,d,f);const s=await Uw(t.localStore,e,!0),o=new vj(e,s.Hi),a=o.Wu(s.documents),u=ou.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),l=o.applyChanges(a,t.isPrimaryClient,u);Hw(t,n,l.Xu);const c=new wj(e,n,o);return t.ic.set(e,c),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),l.snapshot}async function Tj(t,e){const n=V(t),r=n.ic.get(e),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter(s=>!Ah(s,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Mp(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Dk(n.remoteStore,r.targetId),Up(n,r.targetId)}).catch(nu)):(Up(n,r.targetId),await Mp(n.localStore,r.targetId,!0))}async function kj(t,e,n){const r=Oj(t);try{const i=await function(s,o){const a=V(s),u=Te.now(),l=o.reduce((d,f)=>d.add(f.key),q());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=qn(),m=q();return a.Gi.getEntries(d,l).next(y=>{f=y,f.forEach((w,g)=>{g.isValidDocument()||(m=m.add(w))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(y=>{c=y;const w=[];for(const g of o){const p=X4(g,c.get(g.key).overlayedDocument);p!=null&&w.push(new Vr(g.key,p,ek(p.value.mapValue),Sn.exists(!0)))}return a.mutationQueue.addMutationBatch(d,u,w,o)}).next(y=>{h=y;const w=y.applyToLocalDocumentSet(c,m);return a.documentOverlayCache.saveOverlays(d,y.batchId,w)})}).then(()=>({batchId:h.batchId,changes:wk(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let u=s.hc[s.currentUser.toKey()];u||(u=new Ne(ee)),u=u.insert(o,a),s.hc[s.currentUser.toKey()]=u}(r,i.batchId,n),await uu(r,i.changes),await Lh(r.remoteStore)}catch(i){const s=cy(i,"Failed to persist write");n.reject(s)}}async function zk(t,e){const n=V(t);try{const r=await B3(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.cc.get(s);o&&(oe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?oe(o.nc):i.removedDocuments.size>0&&(oe(o.nc),o.nc=!1))}),await uu(n,r,e)}catch(r){await nu(r)}}function Bw(t,e,n){const r=V(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ic.forEach((s,o)=>{const a=o.view.Pu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=V(s);a.onlineState=o;let u=!1;a.queries.forEach((l,c)=>{for(const h of c.listeners)h.Pu(o)&&(u=!0)}),u&&fy(a)}(r.eventManager,e),i.length&&r.sc.zo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Cj(t,e,n){const r=V(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.cc.get(e),s=i&&i.key;if(s){let o=new Ne(M.comparator);o=o.insert(s,Be.newNoDocument(s,H.min()));const a=q().add(s),u=new Oh(H.min(),new Map,new Pe(ee),o,a);await zk(r,u),r.uc=r.uc.remove(s),r.cc.delete(e),my(r)}else await Mp(r.localStore,e,!1).then(()=>Up(r,e,n)).catch(nu)}async function bj(t,e){const n=V(t),r=e.batch.batchId;try{const i=await z3(n.localStore,e);Hk(n,r,null),Bk(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await uu(n,i)}catch(i){await nu(i)}}async function xj(t,e,n){const r=V(t);try{const i=await function(s,o){const a=V(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return a.mutationQueue.lookupMutationBatch(u,o).next(c=>(oe(c!==null),l=c.keys(),a.mutationQueue.removeMutationBatch(u,c))).next(()=>a.mutationQueue.performConsistencyCheck(u)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(u,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,l)).next(()=>a.localDocuments.getDocuments(u,l))})}(r.localStore,e);Hk(r,e,n),Bk(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await uu(r,i)}catch(i){await nu(i)}}function Bk(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function Hk(t,e,n){const r=V(t);let i=r.hc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.hc[r.currentUser.toKey()]=i}}function Up(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(r=>{t.ac.containsKey(r)||qk(t,r)})}function qk(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(Dk(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),my(t))}function Hw(t,e,n){for(const r of n)r instanceof jk?(t.ac.addReference(r.key,e),Rj(t,r)):r instanceof Vk?(L("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||qk(t,r.key)):j()}function Rj(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(L("SyncEngine","New document in limbo: "+n),t.oc.add(r),my(t))}function my(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new M(ue.fromString(e)),r=t.fc.next();t.cc.set(r,new _j(n)),t.uc=t.uc.insert(n,r),Ok(t.remoteStore,new oi(Hn(Rh(n.path)),r,2,Xg.at))}}async function uu(t,e,n){const r=V(t),i=[],s=[],o=[];r.ic.isEmpty()||(r.ic.forEach((a,u)=>{o.push(r._c(u,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const c=sy.Ci(u.targetId,l);s.push(c)}}))}),await Promise.all(o),r.sc.zo(i),await async function(a,u){const l=V(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>b.forEach(u,h=>b.forEach(h.Si,d=>l.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>b.forEach(h.Di,d=>l.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!ru(c))throw c;L("LocalStore","Failed to update sequence numbers: "+c)}for(const c of u){const h=c.targetId;if(!c.fromCache){const d=l.Ui.get(h),f=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(f);l.Ui=l.Ui.insert(h,m)}}}(r.localStore,s))}async function Aj(t,e){const n=V(t);if(!n.currentUser.isEqual(e)){L("SyncEngine","User change. New user:",e.toKey());const r=await Rk(n.localStore,e);n.currentUser=e,function(i,s){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new O(S.CANCELLED,s))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await uu(n,r.ji)}}function Pj(t,e){const n=V(t),r=n.cc.get(e);if(r&&r.nc)return q().add(r.key);{let i=q();const s=n.rc.get(e);if(!s)return i;for(const o of s){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}function Nj(t){const e=V(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=zk.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Pj.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Cj.bind(null,e),e.sc.zo=gj.bind(null,e.eventManager),e.sc.wc=yj.bind(null,e.eventManager),e}function Oj(t){const e=V(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=bj.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=xj.bind(null,e),e}class Dj{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=Dh(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return V3(this.persistence,new F3,e.initialUser,this.It)}yc(e){return new M3(iy.Bs,this.It)}gc(e){return new G3}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class $j{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Bw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Aj.bind(null,this.syncEngine),await fj(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new mj}createDatastore(e){const n=Dh(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new J3(i));var i;return function(s,o,a,u){return new tj(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Bw(this.syncEngine,a,0),o=jw.C()?new jw:new Q3,new rj(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,u,l){const c=new Sj(r,i,s,o,a,u);return l&&(c.dc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=V(e);L("RemoteStore","RemoteStore shutting down."),n.wu.add(5),await au(n),n.gu.shutdown(),n.yu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wk(t,e,n){if(!n)throw new O(S.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Lj(t,e,n,r){if(e===!0&&r===!0)throw new O(S.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function qw(t){if(!M.isDocumentKey(t))throw new O(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ww(t){if(M.isDocumentKey(t))throw new O(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Mh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":j()}function Bt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new O(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Mh(t);throw new O(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw=new Map;class Gw{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new O(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new O(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Lj("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Gw({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new O(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new O(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Gw(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new f4;switch(n.type){case"gapi":const r=n.client;return new y4(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new O(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Kw.get(e);n&&(L("ComponentProvider","Removing Datastore"),Kw.delete(e),n.terminate())}(this),Promise.resolve()}}function Mj(t,e,n,r={}){var i;const s=(t=Bt(t,Uh))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&xp("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=Je.MOCK_USER;else{o=jE(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new O(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Je(u)}t._authCredentials=new p4(new QT(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Sr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new rt(this.firestore,e,this._key)}}class Ks{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ks(this.firestore,e,this._query)}}class Sr extends Ks{constructor(e,n,r){super(e,n,Rh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new rt(this.firestore,null,new M(e))}withConverter(e){return new Sr(this.firestore,e,this._path)}}function Uj(t,e,...n){if(t=pe(t),Wk("collection","path",e),t instanceof Uh){const r=ue.fromString(e,...n);return Ww(r),new Sr(t,null,r)}{if(!(t instanceof rt||t instanceof Sr))throw new O(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ue.fromString(e,...n));return Ww(r),new Sr(t.firestore,null,r)}}function Ft(t,e,...n){if(t=pe(t),arguments.length===1&&(e=XT.R()),Wk("doc","path",e),t instanceof Uh){const r=ue.fromString(e,...n);return qw(r),new rt(t,null,new M(r))}{if(!(t instanceof rt||t instanceof Sr))throw new O(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ue.fromString(e,...n));return qw(r),new rt(t.firestore,t instanceof Sr?t.converter:null,new M(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Bn("Uncaught Error in snapshot listener:",e)}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fj{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Je.UNAUTHENTICATED,this.clientId=XT.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{L("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(L("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new O(S.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new $n;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=cy(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function jj(t,e){t.asyncQueue.verifyOperationInProgress(),L("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Rk(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Vj(t,e){t.asyncQueue.verifyOperationInProgress();const n=await zj(t);L("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Vw(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Vw(e.remoteStore,s)),t.onlineComponents=e}async function zj(t){return t.offlineComponents||(L("FirestoreClient","Using default OfflineComponentProvider"),await jj(t,new Dj)),t.offlineComponents}async function Kk(t){return t.onlineComponents||(L("FirestoreClient","Using default OnlineComponentProvider"),await Vj(t,new $j)),t.onlineComponents}function Bj(t){return Kk(t).then(e=>e.syncEngine)}async function sc(t){const e=await Kk(t),n=e.eventManager;return n.onListen=Ej.bind(null,e.syncEngine),n.onUnlisten=Tj.bind(null,e.syncEngine),n}function Hj(t,e,n={}){const r=new $n;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,u){const l=new gy({next:h=>{s.enqueueAndForget(()=>dy(i,c));const d=h.docs.has(o);!d&&h.fromCache?u.reject(new O(S.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?u.reject(new O(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(h)},error:h=>u.reject(h)}),c=new py(Rh(o.path),l,{includeMetadataChanges:!0,ku:!0});return hy(i,c)}(await sc(t),t.asyncQueue,e,n,r)),r.promise}function qj(t,e,n={}){const r=new $n;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,u){const l=new gy({next:h=>{s.enqueueAndForget(()=>dy(i,c)),h.fromCache&&a.source==="server"?u.reject(new O(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(h)},error:h=>u.reject(h)}),c=new py(o,l,{includeMetadataChanges:!0,ku:!0});return hy(i,c)}(await sc(t),t.asyncQueue,e,n,r)),r.promise}class Wj{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.No=new Pk(this,"async_queue_retry"),this.Wc=()=>{const n=Gd();n&&L("AsyncQueue","Visibility state changed to "+n.visibilityState),this.No.Po()};const e=Gd();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const n=Gd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new $n;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.No.reset()}catch(e){if(!ru(e))throw e;L("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.No.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(r=>{this.Kc=r,this.Gc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Bn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(e,n,r){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=ly.createAndSchedule(this,e,n,r,s=>this.Yc(s));return this.qc.push(i),i}zc(){this.Kc&&j()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.qc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.qc.indexOf(e);this.qc.splice(n,1)}}function Qw(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class vi extends Uh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Wj,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Gk(this),this._firestoreClient.terminate()}}function Fh(t,e){const n=typeof t=="object"?t:uh(),r=typeof t=="string"?t:e||"(default)",i=Ur(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=UE("firestore");s&&Mj(i,...s)}return i}function jh(t){return t._firestoreClient||Gk(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Gk(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new x4(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Fj(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ps(ot.fromBase64String(e))}catch(n){throw new O(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ps(ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new O(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new et(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new O(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new O(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ee(this._lat,e._lat)||ee(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kj=/^__.*__$/;class Gj{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Vr(e,this.data,this.fieldMask,n,this.fieldTransforms):new su(e,this.data,n,this.fieldTransforms)}}class Qk{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Vr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Xk(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw j()}}class zh{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.It=r,this.ignoreUndefinedProperties=i,s===void 0&&this.na(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new zh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.ua(e),i}ca(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return oc(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(Xk(this.sa)&&Kj.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class Qj{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=r||Dh(e)}da(e,n,r,i=!1){return new zh({sa:e,methodName:n,fa:r,path:et.emptyPath(),oa:!1,la:i},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function vy(t){const e=t._freezeSettings(),n=Dh(t._databaseId);return new Qj(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Xj(t,e,n,r,i,s={}){const o=t.da(s.merge||s.mergeFields?2:0,e,n,i);_y("Data must be an object, but it was:",o,r);const a=Yk(r,o);let u,l;if(s.merge)u=new zt(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=Fp(e,h,n);if(!o.contains(d))throw new O(S.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Zk(c,d)||c.push(d)}u=new zt(c),l=o.fieldTransforms.filter(h=>u.covers(h.field))}else u=null,l=o.fieldTransforms;return new Gj(new yt(a),u,l)}class Bh extends lu{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Bh}}function Yj(t,e,n){return new zh({sa:3,fa:e.settings.fa,methodName:t._methodName,oa:n},e.databaseId,e.It,e.ignoreUndefinedProperties)}class wy extends lu{_toFieldTransform(e){return new fk(e.path,new Sa)}isEqual(e){return e instanceof wy}}class Jj extends lu{constructor(e,n){super(e),this._a=n}_toFieldTransform(e){const n=Yj(this,e,!0),r=this._a.map(s=>Gs(s,n)),i=new xs(r);return new fk(e.path,i)}isEqual(e){return this===e}}function Zj(t,e,n,r){const i=t.da(1,e,n);_y("Data must be an object, but it was:",i,r);const s=[],o=yt.empty();Ci(r,(u,l)=>{const c=Sy(e,u,n);l=pe(l);const h=i.ca(c);if(l instanceof Bh)s.push(c);else{const d=Gs(l,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new zt(s);return new Qk(o,a,i.fieldTransforms)}function e5(t,e,n,r,i,s){const o=t.da(1,e,n),a=[Fp(e,r,n)],u=[i];if(s.length%2!=0)throw new O(S.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Fp(e,s[d])),u.push(s[d+1]);const l=[],c=yt.empty();for(let d=a.length-1;d>=0;--d)if(!Zk(l,a[d])){const f=a[d];let m=u[d];m=pe(m);const y=o.ca(f);if(m instanceof Bh)l.push(f);else{const w=Gs(m,y);w!=null&&(l.push(f),c.set(f,w))}}const h=new zt(l);return new Qk(c,h,o.fieldTransforms)}function t5(t,e,n,r=!1){return Gs(n,t.da(r?4:3,e))}function Gs(t,e){if(Jk(t=pe(t)))return _y("Unsupported field value:",e,t),Yk(t,e);if(t instanceof lu)return function(n,r){if(!Xk(r.sa))throw r.ha(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Gs(o,r.aa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=pe(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return H4(r.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Te.fromDate(n);return{timestampValue:rc(r.It,i)}}if(n instanceof Te){const i=new Te(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:rc(r.It,i)}}if(n instanceof yy)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ps)return{bytesValue:Tk(r.It,n._byteString)};if(n instanceof rt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.ha(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ty(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ha(`Unsupported field value: ${Mh(n)}`)}(t,e)}function Yk(t,e){const n={};return YT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ci(t,(r,i)=>{const s=Gs(i,e.ra(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Jk(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Te||t instanceof yy||t instanceof Ps||t instanceof rt||t instanceof lu)}function _y(t,e,n){if(!Jk(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Mh(n);throw r==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+r)}}function Fp(t,e,n){if((e=pe(e))instanceof Vh)return e._internalPath;if(typeof e=="string")return Sy(t,e);throw oc("Field path arguments must be of type string or ",t,!1,void 0,n)}const n5=new RegExp("[~\\*/\\[\\]]");function Sy(t,e,n){if(e.search(n5)>=0)throw oc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Vh(...e.split("."))._internalPath}catch{throw oc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function oc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new O(S.INVALID_ARGUMENT,a+t+u)}function Zk(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new r5(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ey("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class r5 extends eC{data(){return super.data()}}function Ey(t,e){return typeof e=="string"?Sy(t,e):e instanceof Vh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new O(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class i5{}function s5(t,...e){for(const n of e)t=n._apply(t);return t}class o5 extends i5{constructor(e,n,r){super(),this.ma=e,this.ga=n,this.ya=r,this.type="where"}_apply(e){const n=vy(e.firestore),r=function(i,s,o,a,u,l,c){let h;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new O(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Yw(c,l);const f=[];for(const m of c)f.push(Xw(a,i,m));h={arrayValue:{values:f}}}else h=Xw(a,i,c)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Yw(c,l),h=t5(o,s,c,l==="in"||l==="not-in");const d=ct.create(u,l,h);return function(f,m){if(m.dt()){const w=rk(f);if(w!==null&&!w.isEqual(m.field))throw new O(S.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${w.toString()}' and '${m.field.toString()}'`);const g=nk(f);g!==null&&u5(f,m.field,g)}const y=function(w,g){for(const p of w.filters)if(g.indexOf(p.op)>=0)return p.op;return null}(f,function(w){switch(w){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(m.op));if(y!==null)throw y===m.op?new O(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${m.op.toString()}' filter.`):new O(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${m.op.toString()}' filters with '${y.toString()}' filters.`)}(i,d),d}(e._query,"where",n,e.firestore._databaseId,this.ma,this.ga,this.ya);return new Ks(e.firestore,e.converter,function(i,s){const o=i.filters.concat([s]);return new iu(i.path,i.collectionGroup,i.explicitOrderBy.slice(),o,i.limit,i.limitType,i.startAt,i.endAt)}(e._query,r))}}function a5(t,e,n){const r=e,i=Ey("where",t);return new o5(i,r,n)}function Xw(t,e,n){if(typeof(n=pe(n))=="string"){if(n==="")throw new O(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ik(e)&&n.indexOf("/")!==-1)throw new O(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ue.fromString(n));if(!M.isDocumentKey(r))throw new O(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Iw(t,new M(r))}if(n instanceof rt)return Iw(t,n._key);throw new O(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Mh(n)}.`)}function Yw(t,e){if(!Array.isArray(t)||t.length===0)throw new O(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new O(S.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function u5(t,e,n){if(!n.isEqual(e))throw new O(S.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l5{convertValue(e,n="none"){switch(yi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Cs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw j()}}convertObject(e,n){const r={};return Ci(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new yy(Ce(e.latitude),Ce(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ZT(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ya(e));default:return null}}convertTimestamp(e){const n=kr(e);return new Te(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ue.fromString(e);oe(xk(r));const i=new va(r.get(1),r.get(3)),s=new M(r.popFirst(5));return i.isEqual(n)||Bn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c5(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class nC extends eC{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new dl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ey("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class dl extends nC{data(e={}){return super.data(e)}}class rC{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new _o(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new dl(this._firestore,this._userDataWriter,r.key,r,new _o(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new O(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new dl(r._firestore,r._userDataWriter,o.doc.key,o.doc,new _o(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:s++}))}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new dl(r._firestore,r._userDataWriter,o.doc.key,o.doc,new _o(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,l=-1;return o.type!==0&&(u=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),l=s.indexOf(o.doc.key)),{type:h5(o.type),doc:a,oldIndex:u,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function h5(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return j()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d5(t){t=Bt(t,rt);const e=Bt(t.firestore,vi);return Hj(jh(e),t._key).then(n=>oC(e,t,n))}class Iy extends l5{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ps(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new rt(this.firestore,null,n)}}function f5(t){t=Bt(t,Ks);const e=Bt(t.firestore,vi),n=jh(e),r=new Iy(e);return tC(t._query),qj(n,t._query).then(i=>new rC(e,r,t,i))}function jp(t,e,n){t=Bt(t,rt);const r=Bt(t.firestore,vi),i=c5(t.converter,e,n);return sC(r,[Xj(vy(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Sn.none())])}function Ji(t,e,n,...r){t=Bt(t,rt);const i=Bt(t.firestore,vi),s=vy(i);let o;return o=typeof(e=pe(e))=="string"||e instanceof Vh?e5(s,"updateDoc",t._key,e,n,r):Zj(s,"updateDoc",t._key,e),sC(i,[o.toMutation(t._key,Sn.exists(!0))])}function iC(t,...e){var n,r,i;t=pe(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Qw(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Qw(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let u,l,c;if(t instanceof rt)l=Bt(t.firestore,vi),c=Rh(t._key.path),u={next:h=>{e[o]&&e[o](oC(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Bt(t,Ks);l=Bt(h.firestore,vi),c=h._query;const d=new Iy(l);u={next:f=>{e[o]&&e[o](new rC(l,d,h,f))},error:e[o+1],complete:e[o+2]},tC(t._query)}return function(h,d,f,m){const y=new gy(m),w=new py(d,y,f);return h.asyncQueue.enqueueAndForget(async()=>hy(await sc(h),w)),()=>{y.bc(),h.asyncQueue.enqueueAndForget(async()=>dy(await sc(h),w))}}(jh(l),c,a,u)}function sC(t,e){return function(n,r){const i=new $n;return n.asyncQueue.enqueueAndForget(async()=>kj(await Bj(n),r,i)),i.promise}(jh(t),e)}function oC(t,e,n){const r=n.docs.get(e._key),i=new Iy(t);return new nC(t,i,e._key,r,new _o(n.hasPendingWrites,n.fromCache),e.converter)}function ac(){return new wy("serverTimestamp")}function Jw(...t){return new Jj("arrayUnion",t)}(function(t,e=!0){(function(n){Hs=n})(Us),on(new Kt("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new vi(new m4(n.getProvider("auth-internal")),new w4(n.getProvider("app-check-internal")),function(a,u){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new O(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new va(a.options.projectId,u)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Et(vw,"3.7.0",t),Et(vw,"3.7.0","esm2017")})();var p5="firebase",m5="9.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Et(p5,m5,"app");const aC="@firebase/installations",Ty="0.5.14";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uC=1e4,lC=`w:${Ty}`,cC="FIS_v2",g5="https://firebaseinstallations.googleapis.com/v1",y5=60*60*1e3,v5="installations",w5="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _5={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},wi=new Ti(v5,w5,_5);function hC(t){return t instanceof Qt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dC({projectId:t}){return`${g5}/projects/${t}/installations`}function fC(t){return{token:t.token,requestStatus:2,expiresIn:E5(t.expiresIn),creationTime:Date.now()}}async function pC(t,e){const r=(await e.json()).error;return wi.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function mC({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function S5(t,{refreshToken:e}){const n=mC(t);return n.append("Authorization",I5(e)),n}async function gC(t){const e=await t();return e.status>=500&&e.status<600?t():e}function E5(t){return Number(t.replace("s","000"))}function I5(t){return`${cC} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T5({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=dC(t),i=mC(t),s=e.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={fid:n,authVersion:cC,appId:t.appId,sdkVersion:lC},a={method:"POST",headers:i,body:JSON.stringify(o)},u=await gC(()=>fetch(r,a));if(u.ok){const l=await u.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:fC(l.authToken)}}else throw await pC("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yC(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k5(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C5=/^[cdef][\w-]{21}$/,Vp="";function b5(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=x5(t);return C5.test(n)?n:Vp}catch{return Vp}}function x5(t){return k5(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hh(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vC=new Map;function wC(t,e){const n=Hh(t);_C(n,e),R5(n,e)}function _C(t,e){const n=vC.get(t);if(!!n)for(const r of n)r(e)}function R5(t,e){const n=A5();n&&n.postMessage({key:t,fid:e}),P5()}let ei=null;function A5(){return!ei&&"BroadcastChannel"in self&&(ei=new BroadcastChannel("[Firebase] FID Change"),ei.onmessage=t=>{_C(t.data.key,t.data.fid)}),ei}function P5(){vC.size===0&&ei&&(ei.close(),ei=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N5="firebase-installations-database",O5=1,_i="firebase-installations-store";let Qd=null;function ky(){return Qd||(Qd=BE(N5,O5,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(_i)}}})),Qd}async function uc(t,e){const n=Hh(t),i=(await ky()).transaction(_i,"readwrite"),s=i.objectStore(_i),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&wC(t,e.fid),e}async function SC(t){const e=Hh(t),r=(await ky()).transaction(_i,"readwrite");await r.objectStore(_i).delete(e),await r.done}async function qh(t,e){const n=Hh(t),i=(await ky()).transaction(_i,"readwrite"),s=i.objectStore(_i),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&wC(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cy(t){let e;const n=await qh(t.appConfig,r=>{const i=D5(r),s=$5(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Vp?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function D5(t){const e=t||{fid:b5(),registrationStatus:0};return EC(e)}function $5(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(wi.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=L5(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:M5(t)}:{installationEntry:e}}async function L5(t,e){try{const n=await T5(t,e);return uc(t.appConfig,n)}catch(n){throw hC(n)&&n.customData.serverCode===409?await SC(t.appConfig):await uc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function M5(t){let e=await Zw(t.appConfig);for(;e.registrationStatus===1;)await yC(100),e=await Zw(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Cy(t);return r||n}return e}function Zw(t){return qh(t,e=>{if(!e)throw wi.create("installation-not-found");return EC(e)})}function EC(t){return U5(t)?{fid:t.fid,registrationStatus:0}:t}function U5(t){return t.registrationStatus===1&&t.registrationTime+uC<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F5({appConfig:t,heartbeatServiceProvider:e},n){const r=j5(t,n),i=S5(t,n),s=e.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={installation:{sdkVersion:lC,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},u=await gC(()=>fetch(r,a));if(u.ok){const l=await u.json();return fC(l)}else throw await pC("Generate Auth Token",u)}function j5(t,{fid:e}){return`${dC(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function by(t,e=!1){let n;const r=await qh(t.appConfig,s=>{if(!IC(s))throw wi.create("not-registered");const o=s.authToken;if(!e&&B5(o))return s;if(o.requestStatus===1)return n=V5(t,e),s;{if(!navigator.onLine)throw wi.create("app-offline");const a=q5(s);return n=z5(t,a),a}});return n?await n:r.authToken}async function V5(t,e){let n=await e1(t.appConfig);for(;n.authToken.requestStatus===1;)await yC(100),n=await e1(t.appConfig);const r=n.authToken;return r.requestStatus===0?by(t,e):r}function e1(t){return qh(t,e=>{if(!IC(e))throw wi.create("not-registered");const n=e.authToken;return W5(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function z5(t,e){try{const n=await F5(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await uc(t.appConfig,r),n}catch(n){if(hC(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await SC(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await uc(t.appConfig,r)}throw n}}function IC(t){return t!==void 0&&t.registrationStatus===2}function B5(t){return t.requestStatus===2&&!H5(t)}function H5(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+y5}function q5(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function W5(t){return t.requestStatus===1&&t.requestTime+uC<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K5(t){const e=t,{installationEntry:n,registrationPromise:r}=await Cy(e);return r?r.catch(console.error):by(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G5(t,e=!1){const n=t;return await Q5(n),(await by(n,e)).token}async function Q5(t){const{registrationPromise:e}=await Cy(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X5(t){if(!t||!t.options)throw Xd("App Configuration");if(!t.name)throw Xd("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Xd(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Xd(t){return wi.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TC="installations",Y5="installations-internal",J5=t=>{const e=t.getProvider("app").getImmediate(),n=X5(e),r=Ur(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Z5=t=>{const e=t.getProvider("app").getImmediate(),n=Ur(e,TC).getImmediate();return{getId:()=>K5(n),getToken:i=>G5(n,i)}};function eV(){on(new Kt(TC,J5,"PUBLIC")),on(new Kt(Y5,Z5,"PRIVATE"))}eV();Et(aC,Ty);Et(aC,Ty,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc="analytics",tV="firebase_id",nV="origin",rV=60*1e3,iV="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",kC="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At=new ah("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CC(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function sV(t,e){const n=document.createElement("script");n.src=`${kC}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function oV(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function aV(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await CC(n)).find(l=>l.measurementId===i);u&&await e[u.appId]}}catch(a){At.error(a)}t("config",i,s)}async function uV(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await CC(n);for(const u of o){const l=a.find(h=>h.measurementId===u),c=l&&e[l.appId];if(c)s.push(c);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){At.error(s)}}function lV(t,e,n,r){async function i(s,o,a){try{s==="event"?await uV(t,e,n,o,a):s==="config"?await aV(t,e,n,r,o,a):s==="consent"?t("consent","update",a):t("set",o)}catch(u){At.error(u)}}return i}function cV(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=lV(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function hV(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(kC)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dV={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},Ht=new Ti("analytics","Analytics",dV);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fV=30,pV=1e3;class mV{constructor(e={},n=pV){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const bC=new mV;function gV(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function yV(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:gV(r)},s=iV.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(a=u.error.message)}catch{}throw Ht.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function vV(t,e=bC,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Ht.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Ht.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new SV;return setTimeout(async()=>{a.abort()},n!==void 0?n:rV),xC({appId:r,apiKey:i,measurementId:s},o,a,e)}async function xC(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=bC){var s,o;const{appId:a,measurementId:u}=t;try{await wV(r,e)}catch(l){if(u)return At.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${(s=l)===null||s===void 0?void 0:s.message}]`),{appId:a,measurementId:u};throw l}try{const l=await yV(t);return i.deleteThrottleMetadata(a),l}catch(l){const c=l;if(!_V(c)){if(i.deleteThrottleMetadata(a),u)return At.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:a,measurementId:u};throw l}const h=Number((o=c==null?void 0:c.customData)===null||o===void 0?void 0:o.httpStatus)===503?x0(n,i.intervalMillis,fV):x0(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return i.setThrottleMetadata(a,d),At.debug(`Calling attemptFetch again in ${h} millis`),xC(t,d,r,i)}}function wV(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Ht.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function _V(t){if(!(t instanceof Qt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class SV{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function EV(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IV(){var t;if($E())try{await LE()}catch(e){return At.warn(Ht.create("indexeddb-unavailable",{errorInfo:(t=e)===null||t===void 0?void 0:t.toString()}).message),!1}else return At.warn(Ht.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function TV(t,e,n,r,i,s,o){var a;const u=vV(t);u.then(f=>{n[f.measurementId]=f.appId,t.options.measurementId&&f.measurementId!==t.options.measurementId&&At.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${f.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(f=>At.error(f)),e.push(u);const l=IV().then(f=>{if(f)return r.getId()}),[c,h]=await Promise.all([u,l]);hV(s)||sV(s,c.measurementId),i("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[nV]="firebase",d.update=!0,h!=null&&(d[tV]=h),i("config",c.measurementId,d),c.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kV{constructor(e){this.app=e}_delete(){return delete Fo[this.app.options.appId],Promise.resolve()}}let Fo={},t1=[];const n1={};let Yd="dataLayer",CV="gtag",r1,RC,i1=!1;function bV(){const t=[];if(DE()&&t.push("This is a browser extension environment."),R$()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Ht.create("invalid-analytics-context",{errorInfo:e});At.warn(n.message)}}function xV(t,e,n){bV();const r=t.options.appId;if(!r)throw Ht.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)At.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ht.create("no-api-key");if(Fo[r]!=null)throw Ht.create("already-exists",{id:r});if(!i1){oV(Yd);const{wrappedGtag:s,gtagCore:o}=cV(Fo,t1,n1,Yd,CV);RC=s,r1=o,i1=!0}return Fo[r]=TV(t,t1,n1,e,r1,Yd,n),new kV(t)}function RV(t=uh()){t=pe(t);const e=Ur(t,lc);return e.isInitialized()?e.getImmediate():AV(t)}function AV(t,e={}){const n=Ur(t,lc);if(n.isInitialized()){const i=n.getImmediate();if(aa(e,n.getOptions()))return i;throw Ht.create("already-initialized")}return n.initialize({options:e})}function PV(t,e,n,r){t=pe(t),EV(RC,Fo[t.app.options.appId],e,n,r).catch(i=>At.error(i))}const s1="@firebase/analytics",o1="0.8.2";function NV(){on(new Kt(lc,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return xV(r,i,n)},"PUBLIC")),on(new Kt("analytics-internal",t,"PRIVATE")),Et(s1,o1),Et(s1,o1,"esm2017");function t(e){try{const n=e.getProvider(lc).getImmediate();return{logEvent:(r,i,s)=>PV(n,r,i,s)}}catch(n){throw Ht.create("interop-component-reg-failed",{reason:n})}}}NV();const OV={apiKey:"AIzaSyBqyfAqavT7uHtMmcPPnTgCMt8wHjzwWDU",authDomain:"new-chat-48704.firebaseapp.com",projectId:"new-chat-48704",storageBucket:"new-chat-48704.appspot.com",messagingSenderId:"712682319686",appId:"1:712682319686:web:f149752bb1312b3765ff47",measurementId:"G-PHQB3ZCGS4"},DV=HE(OV);RV(DV);const $V=EI(),LV=()=>{const[t,e]=k.exports.useState(!1),[n,r]=k.exports.useState(null),[i,s]=k.exports.useState(!1),o=oh(),a=Fh();return I("div",{className:"register",children:X("div",{className:"registerWrapper",children:[I("span",{className:"title",children:"Register"}),X("form",{onSubmit:async l=>{s(!1),l.preventDefault();const c=l.target[0].value,h=l.target[1].value,d=l.target[2].value,f=l.target[3].files[0];if(c==""||h==""||d==""||!f)s(!0);else try{const m=await LL($V,h,d),y=WI(),w=qI(y,`${c}.jpg`),g=BI(w,f);g.on("state_changed",p=>{const v=p.bytesTransferred/p.totalBytes*100;switch(console.log("Upload is "+v+"% done"),p.state){case"paused":console.log("Upload is paused");break;case"running":console.log("Upload is running");break}},p=>{s(!0)},async()=>{HI(g.snapshot.ref).then(async p=>{await FL(m.user,{displayName:c,photoURL:p}),await jp(Ft(a,"user",m.user.uid),{username:c,email:h,photoURL:p,uid:m.user.uid}),await jp(Ft(a,"userChats",m.user.uid),{}),o("/")})})}catch(m){console.log(m),s(!0)}},children:[X("div",{className:"inputWrapper",children:[I(SE,{className:"icon"}),I("input",{type:"text",placeholder:"username",className:"input"})]}),X("div",{className:"inputWrapper",children:[I(og,{className:"icon"}),I("input",{type:"text",placeholder:"Email",className:"input"})]}),X("div",{className:"inputWrapper",children:[I(ug,{className:"icon"}),I("input",{type:t?"text":"password",placeholder:"Password",className:"input"}),I("img",{src:_E,onClick:()=>{e(!t)},alt:"",className:"eye"})]}),X("div",{className:" fileWrapper",children:[X("label",{htmlFor:"file",children:[I(wE,{className:"imageIcon"}),I("span",{children:"Select Profile"})]}),I("input",{type:"file",accept:"image/png, image/jpeg",onChange:l=>{r(l.target.files[0])},style:{display:"none"},id:"file"}),n&&I("img",{src:URL.createObjectURL(n),alt:"",style:{backgroundColor:"yellow"},className:"profile"})]}),i&&I("p",{style:{color:"yellow"},children:"Your inputs are not valid"}),I("button",{className:"submit",children:"Register"}),I(AE,{to:"/login",children:I("span",{className:"redirect",children:"Login"})})]})]})})};var AC={exports:{}},PC={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ns=k.exports;function MV(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var UV=typeof Object.is=="function"?Object.is:MV,FV=Ns.useState,jV=Ns.useEffect,VV=Ns.useLayoutEffect,zV=Ns.useDebugValue;function BV(t,e){var n=e(),r=FV({inst:{value:n,getSnapshot:e}}),i=r[0].inst,s=r[1];return VV(function(){i.value=n,i.getSnapshot=e,Jd(i)&&s({inst:i})},[t,n,e]),jV(function(){return Jd(i)&&s({inst:i}),t(function(){Jd(i)&&s({inst:i})})},[t]),zV(n),n}function Jd(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!UV(t,n)}catch{return!0}}function HV(t,e){return e()}var qV=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?HV:BV;PC.useSyncExternalStore=Ns.useSyncExternalStore!==void 0?Ns.useSyncExternalStore:qV;(function(t){t.exports=PC})(AC);var NC={exports:{}},OC={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wh=k.exports,WV=AC.exports;function KV(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var GV=typeof Object.is=="function"?Object.is:KV,QV=WV.useSyncExternalStore,XV=Wh.useRef,YV=Wh.useEffect,JV=Wh.useMemo,ZV=Wh.useDebugValue;OC.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=XV(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=JV(function(){function u(f){if(!l){if(l=!0,c=f,f=r(f),i!==void 0&&o.hasValue){var m=o.value;if(i(m,f))return h=m}return h=f}if(m=h,GV(c,f))return m;var y=r(f);return i!==void 0&&i(m,y)?m:(c=f,h=y)}var l=!1,c,h,d=n===void 0?null:n;return[function(){return u(e())},d===null?void 0:function(){return u(d())}]},[e,n,r,i]);var a=QV(t,s[0],s[1]);return YV(function(){o.hasValue=!0,o.value=a},[a]),ZV(a),a};(function(t){t.exports=OC})(NC);function ez(t){t()}let DC=ez;const tz=t=>DC=t,nz=()=>DC,br=k.exports.createContext(null);function $C(){return k.exports.useContext(br)}const rz=()=>{throw new Error("uSES not initialized!")};let LC=rz;const iz=t=>{LC=t},sz=(t,e)=>t===e;function oz(t=br){const e=t===br?$C:()=>k.exports.useContext(t);return function(r,i=sz){const{store:s,subscription:o,getServerState:a}=e(),u=LC(o.addNestedSub,s.getState,a||s.getState,r,i);return k.exports.useDebugValue(u),u}}const xr=oz();function az(){const t=nz();let e=null,n=null;return{clear(){e=null,n=null},notify(){t(()=>{let r=e;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=e;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,s=n={callback:r,next:null,prev:n};return s.prev?s.prev.next=s:e=s,function(){!i||e===null||(i=!1,s.next?s.next.prev=s.prev:n=s.prev,s.prev?s.prev.next=s.next:e=s.next)}}}}const a1={notify(){},get:()=>[]};function uz(t,e){let n,r=a1;function i(h){return u(),r.subscribe(h)}function s(){r.notify()}function o(){c.onStateChange&&c.onStateChange()}function a(){return Boolean(n)}function u(){n||(n=e?e.addNestedSub(o):t.subscribe(o),r=az())}function l(){n&&(n(),n=void 0,r.clear(),r=a1)}const c={addNestedSub:i,notifyNestedSubs:s,handleChangeWrapper:o,isSubscribed:a,trySubscribe:u,tryUnsubscribe:l,getListeners:()=>r};return c}const lz=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",cz=lz?k.exports.useLayoutEffect:k.exports.useEffect;function hz({store:t,context:e,children:n,serverState:r}){const i=k.exports.useMemo(()=>{const a=uz(t);return{store:t,subscription:a,getServerState:r?()=>r:void 0}},[t,r]),s=k.exports.useMemo(()=>t.getState(),[t]);return cz(()=>{const{subscription:a}=i;return a.onStateChange=a.notifyNestedSubs,a.trySubscribe(),s!==t.getState()&&a.notifyNestedSubs(),()=>{a.tryUnsubscribe(),a.onStateChange=void 0}},[i,s]),I((e||br).Provider,{value:i,children:n})}function MC(t=br){const e=t===br?$C:()=>k.exports.useContext(t);return function(){const{store:r}=e();return r}}const dz=MC();function fz(t=br){const e=t===br?dz:MC(t);return function(){return e().dispatch}}const Kh=fz();iz(NC.exports.useSyncExternalStoreWithSelector);tz(Yp.exports.unstable_batchedUpdates);function en(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+t+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function Rr(t){return!!t&&!!t[he]}function Wn(t){return!!t&&(function(e){if(!e||typeof e!="object")return!1;var n=Object.getPrototypeOf(e);if(n===null)return!0;var r=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return r===Object||typeof r=="function"&&Function.toString.call(r)===Ez}(t)||Array.isArray(t)||!!t[p1]||!!t.constructor[p1]||xy(t)||Ry(t))}function Si(t,e,n){n===void 0&&(n=!1),Qs(t)===0?(n?Object.keys:hs)(t).forEach(function(r){n&&typeof r=="symbol"||e(r,t[r],t)}):t.forEach(function(r,i){return e(i,r,t)})}function Qs(t){var e=t[he];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:xy(t)?2:Ry(t)?3:0}function cs(t,e){return Qs(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function pz(t,e){return Qs(t)===2?t.get(e):t[e]}function UC(t,e,n){var r=Qs(t);r===2?t.set(e,n):r===3?(t.delete(e),t.add(n)):t[e]=n}function FC(t,e){return t===e?t!==0||1/t==1/e:t!=t&&e!=e}function xy(t){return _z&&t instanceof Map}function Ry(t){return Sz&&t instanceof Set}function Kr(t){return t.o||t.t}function Ay(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=VC(t);delete e[he];for(var n=hs(e),r=0;r<n.length;r++){var i=n[r],s=e[i];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(e[i]={configurable:!0,writable:!0,enumerable:s.enumerable,value:t[i]})}return Object.create(Object.getPrototypeOf(t),e)}function Py(t,e){return e===void 0&&(e=!1),Ny(t)||Rr(t)||!Wn(t)||(Qs(t)>1&&(t.set=t.add=t.clear=t.delete=mz),Object.freeze(t),e&&Si(t,function(n,r){return Py(r,!0)},!0)),t}function mz(){en(2)}function Ny(t){return t==null||typeof t!="object"||Object.isFrozen(t)}function En(t){var e=qp[t];return e||en(18,t),e}function gz(t,e){qp[t]||(qp[t]=e)}function zp(){return Ia}function Zd(t,e){e&&(En("Patches"),t.u=[],t.s=[],t.v=e)}function cc(t){Bp(t),t.p.forEach(yz),t.p=null}function Bp(t){t===Ia&&(Ia=t.l)}function u1(t){return Ia={p:[],l:Ia,h:t,m:!0,_:0}}function yz(t){var e=t[he];e.i===0||e.i===1?e.j():e.O=!0}function ef(t,e){e._=e.p.length;var n=e.p[0],r=t!==void 0&&t!==n;return e.h.g||En("ES5").S(e,t,r),r?(n[he].P&&(cc(e),en(4)),Wn(t)&&(t=hc(e,t),e.l||dc(e,t)),e.u&&En("Patches").M(n[he].t,t,e.u,e.s)):t=hc(e,n,[]),cc(e),e.u&&e.v(e.u,e.s),t!==jC?t:void 0}function hc(t,e,n){if(Ny(e))return e;var r=e[he];if(!r)return Si(e,function(s,o){return l1(t,r,e,s,o,n)},!0),e;if(r.A!==t)return e;if(!r.P)return dc(t,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=Ay(r.k):r.o;Si(r.i===3?new Set(i):i,function(s,o){return l1(t,r,i,s,o,n)}),dc(t,i,!1),n&&t.u&&En("Patches").R(r,n,t.u,t.s)}return r.o}function l1(t,e,n,r,i,s){if(Rr(i)){var o=hc(t,i,s&&e&&e.i!==3&&!cs(e.D,r)?s.concat(r):void 0);if(UC(n,r,o),!Rr(o))return;t.m=!1}if(Wn(i)&&!Ny(i)){if(!t.h.F&&t._<1)return;hc(t,i),e&&e.A.l||dc(t,i)}}function dc(t,e,n){n===void 0&&(n=!1),t.h.F&&t.m&&Py(e,n)}function tf(t,e){var n=t[he];return(n?Kr(n):t)[e]}function c1(t,e){if(e in t)for(var n=Object.getPrototypeOf(t);n;){var r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=Object.getPrototypeOf(n)}}function or(t){t.P||(t.P=!0,t.l&&or(t.l))}function nf(t){t.o||(t.o=Ay(t.t))}function Hp(t,e,n){var r=xy(e)?En("MapSet").N(e,n):Ry(e)?En("MapSet").T(e,n):t.g?function(i,s){var o=Array.isArray(i),a={i:o?1:0,A:s?s.A:zp(),P:!1,I:!1,D:{},l:s,t:i,k:null,o:null,j:null,C:!1},u=a,l=Ta;o&&(u=[a],l=So);var c=Proxy.revocable(u,l),h=c.revoke,d=c.proxy;return a.k=d,a.j=h,d}(e,n):En("ES5").J(e,n);return(n?n.A:zp()).p.push(r),r}function vz(t){return Rr(t)||en(22,t),function e(n){if(!Wn(n))return n;var r,i=n[he],s=Qs(n);if(i){if(!i.P&&(i.i<4||!En("ES5").K(i)))return i.t;i.I=!0,r=h1(n,s),i.I=!1}else r=h1(n,s);return Si(r,function(o,a){i&&pz(i.t,o)===a||UC(r,o,e(a))}),s===3?new Set(r):r}(t)}function h1(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return Ay(t)}function wz(){function t(s,o){var a=i[s];return a?a.enumerable=o:i[s]=a={configurable:!0,enumerable:o,get:function(){var u=this[he];return Ta.get(u,s)},set:function(u){var l=this[he];Ta.set(l,s,u)}},a}function e(s){for(var o=s.length-1;o>=0;o--){var a=s[o][he];if(!a.P)switch(a.i){case 5:r(a)&&or(a);break;case 4:n(a)&&or(a)}}}function n(s){for(var o=s.t,a=s.k,u=hs(a),l=u.length-1;l>=0;l--){var c=u[l];if(c!==he){var h=o[c];if(h===void 0&&!cs(o,c))return!0;var d=a[c],f=d&&d[he];if(f?f.t!==h:!FC(d,h))return!0}}var m=!!o[he];return u.length!==hs(o).length+(m?0:1)}function r(s){var o=s.k;if(o.length!==s.t.length)return!0;var a=Object.getOwnPropertyDescriptor(o,o.length-1);if(a&&!a.get)return!0;for(var u=0;u<o.length;u++)if(!o.hasOwnProperty(u))return!0;return!1}var i={};gz("ES5",{J:function(s,o){var a=Array.isArray(s),u=function(c,h){if(c){for(var d=Array(h.length),f=0;f<h.length;f++)Object.defineProperty(d,""+f,t(f,!0));return d}var m=VC(h);delete m[he];for(var y=hs(m),w=0;w<y.length;w++){var g=y[w];m[g]=t(g,c||!!m[g].enumerable)}return Object.create(Object.getPrototypeOf(h),m)}(a,s),l={i:a?5:4,A:o?o.A:zp(),P:!1,I:!1,D:{},l:o,t:s,k:u,o:null,O:!1,C:!1};return Object.defineProperty(u,he,{value:l,writable:!0}),u},S:function(s,o,a){a?Rr(o)&&o[he].A===s&&e(s.p):(s.u&&function u(l){if(l&&typeof l=="object"){var c=l[he];if(c){var h=c.t,d=c.k,f=c.D,m=c.i;if(m===4)Si(d,function(v){v!==he&&(h[v]!==void 0||cs(h,v)?f[v]||u(d[v]):(f[v]=!0,or(c)))}),Si(h,function(v){d[v]!==void 0||cs(d,v)||(f[v]=!1,or(c))});else if(m===5){if(r(c)&&(or(c),f.length=!0),d.length<h.length)for(var y=d.length;y<h.length;y++)f[y]=!1;else for(var w=h.length;w<d.length;w++)f[w]=!0;for(var g=Math.min(d.length,h.length),p=0;p<g;p++)d.hasOwnProperty(p)||(f[p]=!0),f[p]===void 0&&u(d[p])}}}}(s.p[0]),e(s.p))},K:function(s){return s.i===4?n(s):r(s)}})}var d1,Ia,Oy=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",_z=typeof Map<"u",Sz=typeof Set<"u",f1=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",jC=Oy?Symbol.for("immer-nothing"):((d1={})["immer-nothing"]=!0,d1),p1=Oy?Symbol.for("immer-draftable"):"__$immer_draftable",he=Oy?Symbol.for("immer-state"):"__$immer_state",Ez=""+Object.prototype.constructor,hs=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,VC=Object.getOwnPropertyDescriptors||function(t){var e={};return hs(t).forEach(function(n){e[n]=Object.getOwnPropertyDescriptor(t,n)}),e},qp={},Ta={get:function(t,e){if(e===he)return t;var n=Kr(t);if(!cs(n,e))return function(i,s,o){var a,u=c1(s,o);return u?"value"in u?u.value:(a=u.get)===null||a===void 0?void 0:a.call(i.k):void 0}(t,n,e);var r=n[e];return t.I||!Wn(r)?r:r===tf(t.t,e)?(nf(t),t.o[e]=Hp(t.A.h,r,t)):r},has:function(t,e){return e in Kr(t)},ownKeys:function(t){return Reflect.ownKeys(Kr(t))},set:function(t,e,n){var r=c1(Kr(t),e);if(r!=null&&r.set)return r.set.call(t.k,n),!0;if(!t.P){var i=tf(Kr(t),e),s=i==null?void 0:i[he];if(s&&s.t===n)return t.o[e]=n,t.D[e]=!1,!0;if(FC(n,i)&&(n!==void 0||cs(t.t,e)))return!0;nf(t),or(t)}return t.o[e]===n&&typeof n!="number"&&(n!==void 0||e in t.o)||(t.o[e]=n,t.D[e]=!0,!0)},deleteProperty:function(t,e){return tf(t.t,e)!==void 0||e in t.t?(t.D[e]=!1,nf(t),or(t)):delete t.D[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var n=Kr(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r&&{writable:!0,configurable:t.i!==1||e!=="length",enumerable:r.enumerable,value:n[e]}},defineProperty:function(){en(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){en(12)}},So={};Si(Ta,function(t,e){So[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}}),So.deleteProperty=function(t,e){return So.set.call(this,t,e,void 0)},So.set=function(t,e,n){return Ta.set.call(this,t[0],e,n,t[0])};var Iz=function(){function t(n){var r=this;this.g=f1,this.F=!0,this.produce=function(i,s,o){if(typeof i=="function"&&typeof s!="function"){var a=s;s=i;var u=r;return function(y){var w=this;y===void 0&&(y=a);for(var g=arguments.length,p=Array(g>1?g-1:0),v=1;v<g;v++)p[v-1]=arguments[v];return u.produce(y,function(_){var E;return(E=s).call.apply(E,[w,_].concat(p))})}}var l;if(typeof s!="function"&&en(6),o!==void 0&&typeof o!="function"&&en(7),Wn(i)){var c=u1(r),h=Hp(r,i,void 0),d=!0;try{l=s(h),d=!1}finally{d?cc(c):Bp(c)}return typeof Promise<"u"&&l instanceof Promise?l.then(function(y){return Zd(c,o),ef(y,c)},function(y){throw cc(c),y}):(Zd(c,o),ef(l,c))}if(!i||typeof i!="object"){if((l=s(i))===void 0&&(l=i),l===jC&&(l=void 0),r.F&&Py(l,!0),o){var f=[],m=[];En("Patches").M(i,l,f,m),o(f,m)}return l}en(21,i)},this.produceWithPatches=function(i,s){if(typeof i=="function")return function(l){for(var c=arguments.length,h=Array(c>1?c-1:0),d=1;d<c;d++)h[d-1]=arguments[d];return r.produceWithPatches(l,function(f){return i.apply(void 0,[f].concat(h))})};var o,a,u=r.produce(i,s,function(l,c){o=l,a=c});return typeof Promise<"u"&&u instanceof Promise?u.then(function(l){return[l,o,a]}):[u,o,a]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var e=t.prototype;return e.createDraft=function(n){Wn(n)||en(8),Rr(n)&&(n=vz(n));var r=u1(this),i=Hp(this,n,void 0);return i[he].C=!0,Bp(r),i},e.finishDraft=function(n,r){var i=n&&n[he],s=i.A;return Zd(s,r),ef(void 0,s)},e.setAutoFreeze=function(n){this.F=n},e.setUseProxies=function(n){n&&!f1&&en(20),this.g=n},e.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var s=r[i];if(s.path.length===0&&s.op==="replace"){n=s.value;break}}i>-1&&(r=r.slice(i+1));var o=En("Patches").$;return Rr(n)?o(n,r):this.produce(n,function(a){return o(a,r)})},t}(),Ot=new Iz,zC=Ot.produce;Ot.produceWithPatches.bind(Ot);Ot.setAutoFreeze.bind(Ot);Ot.setUseProxies.bind(Ot);Ot.applyPatches.bind(Ot);Ot.createDraft.bind(Ot);Ot.finishDraft.bind(Ot);function Tz(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function m1(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function g1(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?m1(Object(n),!0).forEach(function(r){Tz(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m1(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Ye(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var y1=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),rf=function(){return Math.random().toString(36).substring(7).split("").join(".")},fc={INIT:"@@redux/INIT"+rf(),REPLACE:"@@redux/REPLACE"+rf(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+rf()}};function kz(t){if(typeof t!="object"||t===null)return!1;for(var e=t;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function BC(t,e,n){var r;if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Ye(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Ye(1));return n(BC)(t,e)}if(typeof t!="function")throw new Error(Ye(2));var i=t,s=e,o=[],a=o,u=!1;function l(){a===o&&(a=o.slice())}function c(){if(u)throw new Error(Ye(3));return s}function h(y){if(typeof y!="function")throw new Error(Ye(4));if(u)throw new Error(Ye(5));var w=!0;return l(),a.push(y),function(){if(!!w){if(u)throw new Error(Ye(6));w=!1,l();var p=a.indexOf(y);a.splice(p,1),o=null}}}function d(y){if(!kz(y))throw new Error(Ye(7));if(typeof y.type>"u")throw new Error(Ye(8));if(u)throw new Error(Ye(9));try{u=!0,s=i(s,y)}finally{u=!1}for(var w=o=a,g=0;g<w.length;g++){var p=w[g];p()}return y}function f(y){if(typeof y!="function")throw new Error(Ye(10));i=y,d({type:fc.REPLACE})}function m(){var y,w=h;return y={subscribe:function(p){if(typeof p!="object"||p===null)throw new Error(Ye(11));function v(){p.next&&p.next(c())}v();var _=w(v);return{unsubscribe:_}}},y[y1]=function(){return this},y}return d({type:fc.INIT}),r={dispatch:d,subscribe:h,getState:c,replaceReducer:f},r[y1]=m,r}function Cz(t){Object.keys(t).forEach(function(e){var n=t[e],r=n(void 0,{type:fc.INIT});if(typeof r>"u")throw new Error(Ye(12));if(typeof n(void 0,{type:fc.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Ye(13))})}function bz(t){for(var e=Object.keys(t),n={},r=0;r<e.length;r++){var i=e[r];typeof t[i]=="function"&&(n[i]=t[i])}var s=Object.keys(n),o;try{Cz(n)}catch(a){o=a}return function(u,l){if(u===void 0&&(u={}),o)throw o;for(var c=!1,h={},d=0;d<s.length;d++){var f=s[d],m=n[f],y=u[f],w=m(y,l);if(typeof w>"u")throw l&&l.type,new Error(Ye(14));h[f]=w,c=c||w!==y}return c=c||s.length!==Object.keys(u).length,c?h:u}}function pc(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.length===0?function(r){return r}:e.length===1?e[0]:e.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function xz(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),s=function(){throw new Error(Ye(15))},o={getState:i.getState,dispatch:function(){return s.apply(void 0,arguments)}},a=e.map(function(u){return u(o)});return s=pc.apply(void 0,a)(i.dispatch),g1(g1({},i),{},{dispatch:s})}}}function HC(t){var e=function(r){var i=r.dispatch,s=r.getState;return function(o){return function(a){return typeof a=="function"?a(i,s,t):o(a)}}};return e}var qC=HC();qC.withExtraArgument=HC;const v1=qC;var Rz=globalThis&&globalThis.__extends||function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])},t(e,n)};return function(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}();globalThis&&globalThis.__generator;var mc=globalThis&&globalThis.__spreadArray||function(t,e){for(var n=0,r=e.length,i=t.length;n<r;n++,i++)t[i]=e[n];return t},Az=Object.defineProperty,w1=Object.getOwnPropertySymbols,Pz=Object.prototype.hasOwnProperty,Nz=Object.prototype.propertyIsEnumerable,_1=function(t,e,n){return e in t?Az(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n},ka=function(t,e){for(var n in e||(e={}))Pz.call(e,n)&&_1(t,n,e[n]);if(w1)for(var r=0,i=w1(e);r<i.length;r++){var n=i[r];Nz.call(e,n)&&_1(t,n,e[n])}return t},Oz=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?pc:pc.apply(null,arguments)};function Dz(t){if(typeof t!="object"||t===null)return!1;var e=Object.getPrototypeOf(t);if(e===null)return!0;for(var n=e;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return e===n}var $z=function(t){Rz(e,t);function e(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=t.apply(this,n)||this;return Object.setPrototypeOf(i,e.prototype),i}return Object.defineProperty(e,Symbol.species,{get:function(){return e},enumerable:!1,configurable:!0}),e.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return t.prototype.concat.apply(this,n)},e.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(e.bind.apply(e,mc([void 0],n[0].concat(this)))):new(e.bind.apply(e,mc([void 0],n.concat(this))))},e}(Array);function Wp(t){return Wn(t)?zC(t,function(){}):t}function Lz(t){return typeof t=="boolean"}function Mz(){return function(e){return Uz(e)}}function Uz(t){t===void 0&&(t={});var e=t.thunk,n=e===void 0?!0:e;t.immutableCheck,t.serializableCheck;var r=new $z;return n&&(Lz(n)?r.push(v1):r.push(v1.withExtraArgument(n.extraArgument))),r}var Fz=!0;function jz(t){var e=Mz(),n=t||{},r=n.reducer,i=r===void 0?void 0:r,s=n.middleware,o=s===void 0?e():s,a=n.devTools,u=a===void 0?!0:a,l=n.preloadedState,c=l===void 0?void 0:l,h=n.enhancers,d=h===void 0?void 0:h,f;if(typeof i=="function")f=i;else if(Dz(i))f=bz(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var m=o;typeof m=="function"&&(m=m(e));var y=xz.apply(void 0,m),w=pc;u&&(w=Oz(ka({trace:!Fz},typeof u=="object"&&u)));var g=[y];Array.isArray(d)?g=mc([y],d):typeof d=="function"&&(g=d(g));var p=w.apply(void 0,g);return BC(f,c,p)}function Ca(t,e){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(e){var s=e.apply(void 0,r);if(!s)throw new Error("prepareAction did not return an object");return ka(ka({type:t,payload:s.payload},"meta"in s&&{meta:s.meta}),"error"in s&&{error:s.error})}return{type:t,payload:r[0]}}return n.toString=function(){return""+t},n.type=t,n.match=function(r){return r.type===t},n}function WC(t){var e={},n=[],r,i={addCase:function(s,o){var a=typeof s=="string"?s:s.type;if(a in e)throw new Error("addCase cannot be called with two reducers for the same action type");return e[a]=o,i},addMatcher:function(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase:function(s){return r=s,i}};return t(i),[e,n,r]}function Vz(t){return typeof t=="function"}function zz(t,e,n,r){n===void 0&&(n=[]);var i=typeof e=="function"?WC(e):[e,n,r],s=i[0],o=i[1],a=i[2],u;if(Vz(t))u=function(){return Wp(t())};else{var l=Wp(t);u=function(){return l}}function c(h,d){h===void 0&&(h=u());var f=mc([s[d.type]],o.filter(function(m){var y=m.matcher;return y(d)}).map(function(m){var y=m.reducer;return y}));return f.filter(function(m){return!!m}).length===0&&(f=[a]),f.reduce(function(m,y){if(y)if(Rr(m)){var w=m,g=y(w,d);return g===void 0?m:g}else{if(Wn(m))return zC(m,function(p){return y(p,d)});var g=y(m,d);if(g===void 0){if(m===null)return m;throw Error("A case reducer on a non-draftable value must not return undefined")}return g}return m},h)}return c.getInitialState=u,c}function Bz(t,e){return t+"/"+e}function KC(t){var e=t.name;if(!e)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof t.initialState=="function"?t.initialState:Wp(t.initialState),r=t.reducers||{},i=Object.keys(r),s={},o={},a={};i.forEach(function(c){var h=r[c],d=Bz(e,c),f,m;"reducer"in h?(f=h.reducer,m=h.prepare):f=h,s[c]=f,o[d]=f,a[c]=m?Ca(d,m):Ca(d)});function u(){var c=typeof t.extraReducers=="function"?WC(t.extraReducers):[t.extraReducers],h=c[0],d=h===void 0?{}:h,f=c[1],m=f===void 0?[]:f,y=c[2],w=y===void 0?void 0:y,g=ka(ka({},d),o);return zz(n,g,m,w)}var l;return{name:e,reducer:function(c,h){return l||(l=u()),l(c,h)},actions:a,caseReducers:s,getInitialState:function(){return l||(l=u()),l.getInitialState()}}}var Dy="listenerMiddleware";Ca(Dy+"/add");Ca(Dy+"/removeAll");Ca(Dy+"/remove");wz();const GC=KC({name:"currentUser",initialState:{username:"",photoURL:"",uid:""},reducers:{addCurrentUser:(t,e)=>{t.username=e.payload.username,t.photoURL=e.payload.photoURL,t.uid=e.payload.uid},reset:t=>{t.username="",t.photoURL="",t.uid=""}}}),{addCurrentUser:QC,reset:Hz}=GC.actions,qz=GC.reducer,S1=()=>{const[t,e]=k.exports.useState(!1),[n,r]=k.exports.useState(!1),i=EI(),s=oh(),o=Kh();return I("div",{className:"register",children:X("div",{className:"registerWrapper",children:[I("span",{className:"title",children:"Login"}),X("form",{onSubmit:async u=>{r(!1),u.preventDefault();const l=u.target[0].value,c=u.target[1].value;try{const h=await ML(i,l,c),d={username:h.user.displayName,photoURL:h.user.photoURL,uid:h.user.uid};o(QC(d)),localStorage.setItem("chat",JSON.stringify(d)),s("/")}catch(h){console.log(h),r(!0)}},children:[X("div",{className:"inputWrapper",children:[I(og,{className:"icon"}),I("input",{type:"text",placeholder:"Email",className:"input"})]}),X("div",{className:"inputWrapper",children:[I(ug,{className:"icon"}),I("input",{type:t?"text":"password",placeholder:"Password",className:"input"}),I("img",{src:_E,onClick:()=>{e(!t)},alt:"",className:"eye"})]}),n&&I("p",{style:{color:"yellow"},children:"wrong user email or password"}),I("button",{className:"submit",children:"Login"}),I(AE,{to:"/register",children:I("span",{className:"redirect",children:"Register"})})]})]})})};var $y={},Wz=Gn.exports;Object.defineProperty($y,"__esModule",{value:!0});var XC=$y.default=void 0,Kz=Wz(Lr()),Gz=Mr,Qz=(0,Kz.default)((0,Gz.jsx)("path",{d:"M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"}),"Videocam");XC=$y.default=Qz;var Ly={},Xz=Gn.exports;Object.defineProperty(Ly,"__esModule",{value:!0});var YC=Ly.default=void 0,Yz=Xz(Lr()),Jz=Mr,Zz=(0,Yz.default)((0,Jz.jsx)("path",{d:"M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"PersonAdd");YC=Ly.default=Zz;var My={},eB=Gn.exports;Object.defineProperty(My,"__esModule",{value:!0});var JC=My.default=void 0,tB=eB(Lr()),nB=Mr,rB=(0,tB.default)((0,nB.jsx)("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreVert");JC=My.default=rB;const iB=({m:t})=>{const e=xr(i=>i.currentUser),n=xr(i=>i.chatReducer),r=k.exports.useRef(null);return k.exports.useEffect(()=>{var i;(i=r.current)==null||i.scrollIntoView({behavior:"smooth"})},[t]),X("div",{className:t.senderId==e.uid?"message owner":"message",ref:r,children:[X("div",{className:"messageinfo",children:[I("img",{src:t.senderId==e.uid?e.photoURL:n.user.photoURL,alt:"img",className:"profile"}),I("span",{children:"just now"})]}),X("div",{className:"messageContent",children:[I("span",{className:"span",children:t.text}),t.img&&I("img",{src:t.img,alt:"messageimage",className:"messageImage"})]})]})},sB=({chatId:t})=>{const[e,n]=k.exports.useState([]),r=Fh();return k.exports.useEffect(()=>{(async()=>{const s=await iC(Ft(r,"chats",t),o=>{o.exists()&&n(o.data().messages)});return()=>{s()}})()},[t]),I("div",{className:"messages",children:e.map(i=>I(iB,{m:i},i.id))})};var Uy={},oB=Gn.exports;Object.defineProperty(Uy,"__esModule",{value:!0});var ZC=Uy.default=void 0,aB=oB(Lr()),uB=Mr,lB=(0,aB.default)((0,uB.jsx)("path",{d:"M19 7v2.99s-1.99.01-2 0V7h-3s.01-1.99 0-2h3V2h2v3h3v2h-3zm-3 4V8h-3V5H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-8h-3zM5 19l3-4 2 3 3-4 4 5H5z"}),"AddPhotoAlternate");ZC=Uy.default=lB;let Vu;const cB=new Uint8Array(16);function hB(){if(!Vu&&(Vu=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Vu))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Vu(cB)}const je=[];for(let t=0;t<256;++t)je.push((t+256).toString(16).slice(1));function dB(t,e=0){return(je[t[e+0]]+je[t[e+1]]+je[t[e+2]]+je[t[e+3]]+"-"+je[t[e+4]]+je[t[e+5]]+"-"+je[t[e+6]]+je[t[e+7]]+"-"+je[t[e+8]]+je[t[e+9]]+"-"+je[t[e+10]]+je[t[e+11]]+je[t[e+12]]+je[t[e+13]]+je[t[e+14]]+je[t[e+15]]).toLowerCase()}const fB=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),E1={randomUUID:fB};function sf(t,e,n){if(E1.randomUUID&&!e&&!t)return E1.randomUUID();t=t||{};const r=t.random||(t.rng||hB)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){n=n||0;for(let i=0;i<16;++i)e[n+i]=r[i];return e}return dB(r)}const pB=()=>{const[t,e]=k.exports.useState(""),[n,r]=k.exports.useState(null),[i,s]=k.exports.useState(!1),o=xr(h=>h.currentUser),a=xr(h=>h.chatReducer),u=Fh(),l=WI(),c=async h=>{if(h.preventDefault(),t==""&&n==null)alert("please text something or select an image");else if(n){const d=qI(l,`${sf()}.jpg`),f=BI(d,n);f.on("state_changed",m=>{switch(m.bytesTransferred/m.totalBytes*100,m.state){}},m=>{s(!0)},async()=>{HI(f.snapshot.ref).then(async m=>{await Ji(Ft(u,"chats",a.chatId),{messages:Jw({id:sf(),text:t,senderId:o.uid,date:Te.now(),img:m})}),r(null),e("")})})}else await Ji(Ft(u,"chats",a.chatId),{messages:Jw({id:sf(),text:t,senderId:o.uid,date:Te.now()})}),await Ji(Ft(u,"userChats",o.uid),{[a.chatId+".lastMessage"]:{text:t},[a.chatId+".date"]:ac()}),await Ji(Ft(u,"userChats",a.user.uid),{[a.chatId+".lastMessage"]:{text:t},[a.chatId+".date"]:ac()}),r(null),e("")};return I(qm,{children:I("form",{className:"input",onSubmit:c,children:X("div",{className:"inputWrapper",children:[I("input",{type:"text",className:"messageInput",placeholder:"Type something",onChange:h=>e(h.target.value),value:t}),X("div",{className:"rightSide",children:[I("label",{htmlFor:"file",style:{cursor:"pointer"},children:n?I("img",{src:URL.createObjectURL(n),alt:"",style:{width:30,height:30}}):I(ZC,{style:{color:"blue"}})}),I("input",{type:"file",accept:"image/png, image/jpeg",onChange:h=>r(h.target.files[0]),id:"file",style:{display:"none"}}),t===""&&n==null?I("button",{className:"sendButton",style:{cursor:"not-allowed"},onClick:c,children:"send"}):I("button",{className:"sendButton",children:"send"})]})]})})})},mB=()=>{const t=xr(e=>e.chatReducer);return X("div",{className:"chat",children:[X("div",{className:"chatInfo",children:[I("span",{className:"username",children:t&&t.user.username}),X("div",{className:"chatIcons",children:[I(XC,{}),I(YC,{}),I(JC,{})]})]}),I(sB,{chatId:t.chatId}),t.chatId!=""&&I(pB,{})]})},eb=KC({name:"chat",initialState:{chatId:"",user:{}},reducers:{addChat:(t,e)=>{t.chatId=e.payload.chatId,t.user=e.payload.user},reset:t=>{t.chatId="",t.user={}}}}),{addChat:gB,reset:IB}=eb.actions,yB=eb.reducer,vB=({chat:t})=>{var s;const n=xr(o=>o.currentUser),r=Kh();return I("div",{className:"user",onClick:async()=>{const o=n.uid>t[1].userInfo.uid?n.uid+t[1].userInfo.uid:t[1].userInfo.uid+n.uid;await r(gB({chatId:o,user:t[1].userInfo}))},children:X("div",{className:"usercontainer",children:[I("img",{src:t[1].userInfo.photoURL,alt:"",className:"profile"}),X("div",{className:"details",children:[I("span",{className:"username",children:t[1].userInfo.username}),I("span",{className:"lastmessage",children:(s=t[1].lastMessage)==null?void 0:s.text})]})]})})},wB=t=>{const e=t.currentUser,[n,r]=k.exports.useState(""),[i,s]=k.exports.useState(null),[o,a]=k.exports.useState(!1),u=Kh(),l=oh(),c=Fh(),h=g=>{s(null),g.code=="Enter"&&d()},d=async()=>{const g=s5(Uj(c,"user"),a5("username","==",n));try{(await f5(g)).forEach(v=>(v.data().photoURL||a(!0),s(v.data())))}catch(p){a(!0),console.log(p)}},f=()=>{localStorage.removeItem("chat"),u(Hz()),l("/login")},m=async()=>{const g=e.uid>i.uid?e.uid+i.uid:i.uid+e.uid;try{(await d5(Ft(c,"chats",g))).exist||(await jp(Ft(c,"chats",g),{messages:[]}),await Ji(Ft(c,"userChats",i.uid),{[g+".userInfo"]:{uid:e.uid,username:e.username,photoURL:e.photoURL},[g+".date"]:ac()}),await Ji(Ft(c,"userChats",e.uid),{[g+".userInfo"]:{uid:i.uid,username:i.username,photoURL:i.photoURL},[g+".date"]:ac()}))}catch(p){console.log(p),s(null),r("")}s(null),r("")},[y,w]=k.exports.useState([]);return k.exports.useEffect(()=>{const g=()=>{const p=iC(Ft(c,"userChats",e.uid),v=>(w(v.data()),()=>{p()}))};e.uid&&g()},[e.uid]),X("div",{className:"sidebar",children:[I("div",{className:"topbar",children:X("div",{className:"wrapper",children:[I("span",{className:"logo",children:"ChatApp"}),I("img",{src:e.photoURL,alt:"",className:"profile"}),I("span",{className:"username",children:e.username}),I("button",{className:"logout",onClick:f,children:"LogOut"})]})}),X("div",{className:"searchbox",children:[I("input",{type:"text",onKeyDown:h,value:n,onChange:g=>{r(g.target.value)},className:"search",placeholder:"find a user"}),I("span",{className:"searchText",onClick:d,children:"search"})]}),o&&I("span",{style:{color:"blue",marginLeft:90},children:"User Not Found"}),X("div",{className:"users",children:[i&&I("div",{className:"user",style:{backgroundColor:"lightgray"},onClick:m,children:X("div",{className:"usercontainer",children:[I("img",{src:i.photoURL,alt:"",className:"profile"}),I("div",{className:"details",children:I("span",{className:"username",children:i.username})})]})}),Object.entries(y).sort((g,p)=>{var v,_;return((v=p[1])==null?void 0:v.date)-((_=g[1])==null?void 0:_.date)}).map(g=>I(vB,{chat:g},g))]})]})},_B=()=>{const t=xr(e=>e.currentUser);return I("div",{className:"home",children:X("div",{className:"container",children:[I(wB,{currentUser:t}),I(mB,{...t})]})})},SB=()=>{const t=xr(i=>i.currentUser),e=Kh(),n=localStorage.getItem("chat"),r=JSON.parse(n);return k.exports.useEffect(()=>{(async()=>{e(QC(r))})()},[]),I("div",{className:"app",children:I(E$,{children:X(y$,{children:[I(il,{path:"/",element:t.username?I(_B,{}):I(S1,{})}),I(il,{path:"/login",element:I(S1,{})}),I(il,{path:"/register",element:I(LV,{})})]})})})};const EB=jz({reducer:{currentUser:qz,chatReducer:yB}});of.createRoot(document.getElementById("root")).render(I(hz,{store:EB,children:I(P1.StrictMode,{children:I(SB,{})})}));
