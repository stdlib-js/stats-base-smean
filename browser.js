// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,e=Object.prototype,n=e.toString,o=e.__defineGetter__,u=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__,i=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,i){var l,c,y,p;if("object"!=typeof r||null===r||"[object Array]"===n.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof i||null===i||"[object Array]"===n.call(i))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+i+"`.");if((c="value"in i)&&(f.call(r,t)||a.call(r,t)?(l=r.__proto__,r.__proto__=e,delete r[t],r[t]=i.value,r.__proto__=l):r[t]=i.value),y="get"in i,p="set"in i,c&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(r,t,i.get),p&&u&&u.call(r,t,i.set),r};function l(r,t,e){i(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var c="function"==typeof Math.fround?Math.fround:null,y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),p=Object.prototype.toString,d=Object.prototype.hasOwnProperty,b="function"==typeof Symbol?Symbol.toStringTag:"",_=y&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n,o,u;if(null==r)return p.call(r);e=r[b],u=b,t=null!=(o=r)&&d.call(o,u);try{r[b]=void 0}catch(t){return p.call(r)}return n=p.call(r),t?r[b]=e:delete r[b],n}:function(r){return p.call(r)},s="function"==typeof Float32Array,m=Number.POSITIVE_INFINITY,v="function"==typeof Float32Array?Float32Array:null,g="function"==typeof Float32Array?Float32Array:void 0,h=new(function(){var r,t,e;if("function"!=typeof v)return!1;try{t=new v([1,3.14,-3.14,5e40]),e=t,r=(s&&e instanceof Float32Array||"[object Float32Array]"===_(e))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===m}catch(t){r=!1}return r}()?g:function(){throw new Error("not implemented")})(1),j="function"==typeof c?c:function(r){return h[0]=r,h[0]},w=Math.floor;function S(r,t,e,n){var o,u,f,a,i,l,c,y,p,d,b,_,s;if(r<=0)return 0;if(1===r||0===e)return t[n];if(o=n,r<8){for(b=0,s=0;s<r;s++)b=j(b+t[o]),o+=e;return b}if(r<=128){for(u=t[o],f=t[o+e],a=t[o+2*e],i=t[o+3*e],l=t[o+4*e],c=t[o+5*e],y=t[o+6*e],p=t[o+7*e],o+=8*e,d=r%8,s=8;s<r-d;s+=8)u=j(u+t[o]),f=j(f+t[o+e]),a=j(a+t[o+2*e]),i=j(i+t[o+3*e]),l=j(l+t[o+4*e]),c=j(c+t[o+5*e]),y=j(y+t[o+6*e]),p=j(p+t[o+7*e]),o+=8*e;for(b=j(j(j(u+f)+j(a+i))+j(j(l+c)+j(y+p)));s<r;s++)b=j(b+t[o]),o+=e;return b}return _=w(r/2),j(S(_-=_%8,t,e,o)+S(r-_,t,e,o+_*e))}function A(r,t,e){var n,o,u;if(r<=0)return 0;if(1===r||0===e)return t[0];if(n=e<0?(1-r)*e:0,r<8){for(o=0,u=0;u<r;u++)o=j(o+t[n]),n+=e;return o}return S(r,t,e,n)}function F(r,t,e,n,o){var u,f,a,i,l,c,y,p,d,b,_,s,m;if(r<=0)return 0;if(1===r||0===n)return j(t+e[o]);if(u=o,r<8){for(_=0,m=0;m<r;m++)_=j(_+j(t+e[u])),u+=n;return _}if(r<=128){for(f=j(t+e[u]),a=j(t+e[u+n]),i=j(t+e[u+2*n]),l=j(t+e[u+3*n]),c=j(t+e[u+4*n]),y=j(t+e[u+5*n]),p=j(t+e[u+6*n]),d=j(t+e[u+7*n]),u+=8*n,b=r%8,m=8;m<r-b;m+=8)f=j(f+j(t+e[u])),a=j(a+j(t+e[u+n])),i=j(i+j(t+e[u+2*n])),l=j(l+j(t+e[u+3*n])),c=j(c+j(t+e[u+4*n])),y=j(y+j(t+e[u+5*n])),p=j(p+j(t+e[u+6*n])),d=j(d+j(t+e[u+7*n])),u+=8*n;for(_=j(j(j(f+a)+j(i+l))+j(j(c+y)+j(p+d)));m<r;m++)_=j(_+j(t+e[u])),u+=n;return _}return s=w(r/2),j(F(s-=s%8,t,e,n,u)+F(r-s,t,e,n,u+s*n))}function O(r,t,e,n){var o,u,f;if(r<=0)return 0;if(1===r||0===n)return j(t+e[0]);if(o=n<0?(1-r)*n:0,r<8){for(u=0,f=0;f<r;f++)u=j(u+j(t+e[o])),o+=n;return u}return F(r,t,e,n,o)}function T(r,t,e){var n,o;return r<=0?NaN:1===r||0===e?t[0]:(n=j(A(r,t,e)/r),o=j(O(r,-n,t,e)/r),j(n+o))}function N(r,t,e,n){var o,u;return r<=0?NaN:1===r||0===e?t[n]:(o=j(S(r,t,e,n)/r),u=j(F(r,-o,t,e,n)/r),j(o+u))}function P(r,t,e){return T(r,t,e)}return l(A,"ndarray",S),l(O,"ndarray",F),l(T,"ndarray",N),l(P,"ndarray",(function(r,t,e,n){return N(r,t,e,n)})),P},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).smean=t();
//# sourceMappingURL=browser.js.map
