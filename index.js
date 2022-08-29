// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((r="undefined"!=typeof globalThis?globalThis:r||self).smean={})}(this,(function(r){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n,e=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,a=o.__defineSetter__,f=o.__lookupGetter__,c=o.__lookupSetter__;n=function(){try{return t({},"x",{}),!0}catch(r){return!1}}()?e:function(r,t,n){var e,l,s,y;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===u.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(r,t)||c.call(r,t)?(e=r.__proto__,r.__proto__=o,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),s="get"in n,y="set"in n,l&&(s||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&i&&i.call(r,t,n.get),y&&a&&a.call(r,t,n.set),r};var l=n;function s(r,t,n){l(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function y(r){var t=function(r){return"/"===r.charAt(0)}(r),n="/"===v(r,-1);return(r=function(r,t){for(var n=0,e=r.length-1;e>=0;e--){var o=r[e];"."===o?r.splice(e,1):".."===o?(r.splice(e,1),n++):n&&(r.splice(e,1),n--)}if(t)for(;n--;n)r.unshift("..");return r}(b(r.split("/"),(function(r){return!!r})),!t).join("/"))||t||(r="."),r&&n&&(r+="/"),(t?"/":"")+r}function p(){var r=Array.prototype.slice.call(arguments,0);return y(b(r,(function(r,t){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}function b(r,t){if(r.filter)return r.filter(t);for(var n=[],e=0;e<r.length;e++)t(r[e],e,r)&&n.push(r[e]);return n}var v="b"==="ab".substr(-1)?function(r,t,n){return r.substr(t,n)}:function(r,t,n){return t<0&&(t=r.length+t),r.substr(t,n)},d=/./;function m(r){return"boolean"==typeof r}var j="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function w(){return j&&"symbol"==typeof Symbol.toStringTag}var _=Object.prototype.toString;var g=Object.prototype.hasOwnProperty;var h,O="function"==typeof Symbol?Symbol.toStringTag:"";h=w()?function(r){var t,n,e,o,u;if(null==r)return _.call(r);n=r[O],u=O,t=null!=(o=r)&&g.call(o,u);try{r[O]=void 0}catch(t){return _.call(r)}return e=_.call(r),t?r[O]=n:delete r[O],e}:function(r){return _.call(r)};var A=h,E=Boolean.prototype.toString;var S=w();function F(r){return"object"==typeof r&&(r instanceof Boolean||(S?function(r){try{return E.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===A(r)))}function P(r){return m(r)||F(r)}function T(){return new Function("return this;")()}s(P,"isPrimitive",m),s(P,"isObject",F);var x="object"==typeof self?self:null,N="object"==typeof window?window:null,B="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},k="object"==typeof B?B:null;var I=function(r){if(arguments.length){if(!m(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return T()}if(x)return x;if(N)return N;if(k)return k;throw new Error("unexpected error. Unable to resolve global object.")}(),M=I.document&&I.document.childNodes,V=Int8Array;function C(){return/^\s*function\s*([^(]*)/i}var G,L=/^\s*function\s*([^(]*)/i;s(C,"REGEXP",L),G=Array.isArray?Array.isArray:function(r){return"[object Array]"===A(r)};var q=G;function J(r){return null!==r&&"object"==typeof r}var R=function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!q(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(J);function U(r){var t,n,e,o;if(("Object"===(n=A(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=L.exec(e.toString()))return t[1]}return J(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}s(J,"isObjectLikeArray",R);var X="function"==typeof d||"object"==typeof V||"function"==typeof M?function(r){return U(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?U(r).toLowerCase():t};var Y,z,D=Object.getPrototypeOf;z=Object.getPrototypeOf,Y="function"===X(z)?D:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===A(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var H=Y;function K(r){return null==r?null:(r=Object(r),H(r))}function Q(r){try{return require(r)}catch(r){return function(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===A(r))return!0;r=K(r)}return!1}(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}var W="function"==typeof Math.fround?Math.fround:null,Z="function"==typeof Float32Array;var $=Number.POSITIVE_INFINITY,rr="function"==typeof Float32Array?Float32Array:null;var tr,nr="function"==typeof Float32Array?Float32Array:void 0;tr=function(){var r,t;if("function"!=typeof rr)return!1;try{r=function(r){return Z&&r instanceof Float32Array||"[object Float32Array]"===A(r)}(t=new rr([1,3.14,-3.14,5e40]))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===$}catch(t){r=!1}return r}()?nr:function(){throw new Error("not implemented")};var er=new tr(1);var or,ur="function"==typeof W?W:function(r){return er[0]=r,er[0]},ir=Math.floor;function ar(r,t,n,e){var o,u,i,a,f,c,l,s,y,p,b,v,d;if(r<=0)return 0;if(1===r||0===n)return t[e];if(o=e,r<8){for(b=0,d=0;d<r;d++)b=ur(b+t[o]),o+=n;return b}if(r<=128){for(u=t[o],i=t[o+n],a=t[o+2*n],f=t[o+3*n],c=t[o+4*n],l=t[o+5*n],s=t[o+6*n],y=t[o+7*n],o+=8*n,p=r%8,d=8;d<r-p;d+=8)u=ur(u+t[o]),i=ur(i+t[o+n]),a=ur(a+t[o+2*n]),f=ur(f+t[o+3*n]),c=ur(c+t[o+4*n]),l=ur(l+t[o+5*n]),s=ur(s+t[o+6*n]),y=ur(y+t[o+7*n]),o+=8*n;for(b=ur(ur(ur(u+i)+ur(a+f))+ur(ur(c+l)+ur(s+y)));d<r;d++)b=ur(b+t[o]),o+=n;return b}return v=ir(r/2),ur(ar(v-=v%8,t,n,o)+ar(r-v,t,n,o+v*n))}function fr(r,t,n){var e,o,u;if(r<=0)return 0;if(1===r||0===n)return t[0];if(e=n<0?(1-r)*n:0,r<8){for(o=0,u=0;u<r;u++)o=ur(o+t[e]),e+=n;return o}return ar(r,t,n,e)}s(fr,"ndarray",ar);var cr=Q(p("/home/runner/work/stats-base-smean/stats-base-smean/node_modules/@stdlib/blas-ext-base-ssumpw/lib","./native.js")),lr=or=cr instanceof Error?fr:cr;const{ndarray:sr}=or;var yr;function pr(r,t,n,e,o){var u,i,a,f,c,l,s,y,p,b,v,d,m;if(r<=0)return 0;if(1===r||0===e)return ur(t+n[o]);if(u=o,r<8){for(v=0,m=0;m<r;m++)v=ur(v+ur(t+n[u])),u+=e;return v}if(r<=128){for(i=ur(t+n[u]),a=ur(t+n[u+e]),f=ur(t+n[u+2*e]),c=ur(t+n[u+3*e]),l=ur(t+n[u+4*e]),s=ur(t+n[u+5*e]),y=ur(t+n[u+6*e]),p=ur(t+n[u+7*e]),u+=8*e,b=r%8,m=8;m<r-b;m+=8)i=ur(i+ur(t+n[u])),a=ur(a+ur(t+n[u+e])),f=ur(f+ur(t+n[u+2*e])),c=ur(c+ur(t+n[u+3*e])),l=ur(l+ur(t+n[u+4*e])),s=ur(s+ur(t+n[u+5*e])),y=ur(y+ur(t+n[u+6*e])),p=ur(p+ur(t+n[u+7*e])),u+=8*e;for(v=ur(ur(ur(i+a)+ur(f+c))+ur(ur(l+s)+ur(y+p)));m<r;m++)v=ur(v+ur(t+n[u])),u+=e;return v}return d=ir(r/2),ur(pr(d-=d%8,t,n,e,u)+pr(r-d,t,n,e,u+d*e))}function br(r,t,n,e){var o,u,i;if(r<=0)return 0;if(1===r||0===e)return ur(t+n[0]);if(o=e<0?(1-r)*e:0,r<8){for(u=0,i=0;i<r;i++)u=ur(u+ur(t+n[o])),o+=e;return u}return pr(r,t,n,e,o)}s(br,"ndarray",pr);var vr=Q(p("/home/runner/work/stats-base-smean/stats-base-smean/node_modules/@stdlib/blas-ext-base-sapxsumpw/lib","./native.js")),dr=yr=vr instanceof Error?br:vr;const{ndarray:mr}=yr;function jr(r,t,n){var e,o;return r<=0?NaN:1===r||0===n?t[0]:(e=ur(lr(r,t,n)/r),o=ur(dr(r,-e,t,n)/r),ur(e+o))}var wr;s(jr,"ndarray",(function(r,t,n,e){var o,u;return r<=0?NaN:1===r||0===n?t[e]:(o=ur(sr(r,t,n,e)/r),u=ur(mr(r,-o,t,n,e)/r),ur(o+u))}));var _r=Q(p("/home/runner/work/stats-base-smean/stats-base-smean/node_modules/@stdlib/stats-base-smeanpn/lib","./native.js")),gr=wr=_r instanceof Error?jr:_r;const{ndarray:hr}=wr;function Or(r,t,n){return gr(r,t,n)}function Ar(r,t,n,e){return hr(r,t,n,e)}s(Or,"ndarray",Ar),r.default=Or,r.ndarray=Ar,Object.defineProperty(r,"__esModule",{value:!0})}));
//# sourceMappingURL=index.js.map
