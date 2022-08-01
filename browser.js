// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(r){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,a=n.__defineSetter__,f=n.__lookupGetter__,i=n.__lookupSetter__,l=function(){try{return t({},"x",{}),!0}catch(r){return!1}}()?e:function(r,t,e){var l,c,y,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((c="value"in e)&&(f.call(r,t)||i.call(r,t)?(l=r.__proto__,r.__proto__=n,delete r[t],r[t]=e.value,r.__proto__=l):r[t]=e.value),y="get"in e,p="set"in e,c&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,t,e.get),p&&a&&a.call(r,t,e.set),r};function c(r,t,e){l(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var y="function"==typeof Math.fround?Math.fround:null,p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),d=Object.prototype.toString,b=Object.prototype.hasOwnProperty,_="function"==typeof Symbol?Symbol.toStringTag:"",s=p&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n,o,u;if(null==r)return d.call(r);e=r[_],u=_,t=null!=(o=r)&&b.call(o,u);try{r[_]=void 0}catch(t){return d.call(r)}return n=d.call(r),t?r[_]=e:delete r[_],n}:function(r){return d.call(r)},v="function"==typeof Float32Array,m=Number.POSITIVE_INFINITY,g="function"==typeof Float32Array?Float32Array:null,h="function"==typeof Float32Array?Float32Array:void 0,j=new(function(){var r,t,e;if("function"!=typeof g)return!1;try{t=new g([1,3.14,-3.14,5e40]),e=t,r=(v&&e instanceof Float32Array||"[object Float32Array]"===s(e))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===m}catch(t){r=!1}return r}()?h:function(){throw new Error("not implemented")})(1),w="function"==typeof y?y:function(r){return j[0]=r,j[0]},S=Math.floor;function A(r,t,e,n){var o,u,a,f,i,l,c,y,p,d,b,_,s;if(r<=0)return 0;if(1===r||0===e)return t[n];if(o=n,r<8){for(b=0,s=0;s<r;s++)b=w(b+t[o]),o+=e;return b}if(r<=128){for(u=t[o],a=t[o+e],f=t[o+2*e],i=t[o+3*e],l=t[o+4*e],c=t[o+5*e],y=t[o+6*e],p=t[o+7*e],o+=8*e,d=r%8,s=8;s<r-d;s+=8)u=w(u+t[o]),a=w(a+t[o+e]),f=w(f+t[o+2*e]),i=w(i+t[o+3*e]),l=w(l+t[o+4*e]),c=w(c+t[o+5*e]),y=w(y+t[o+6*e]),p=w(p+t[o+7*e]),o+=8*e;for(b=w(w(w(u+a)+w(f+i))+w(w(l+c)+w(y+p)));s<r;s++)b=w(b+t[o]),o+=e;return b}return _=S(r/2),w(A(_-=_%8,t,e,o)+A(r-_,t,e,o+_*e))}function F(r,t,e){var n,o,u;if(r<=0)return 0;if(1===r||0===e)return t[0];if(n=e<0?(1-r)*e:0,r<8){for(o=0,u=0;u<r;u++)o=w(o+t[n]),n+=e;return o}return A(r,t,e,n)}function O(r,t,e,n,o){var u,a,f,i,l,c,y,p,d,b,_,s,v;if(r<=0)return 0;if(1===r||0===n)return w(t+e[o]);if(u=o,r<8){for(_=0,v=0;v<r;v++)_=w(_+w(t+e[u])),u+=n;return _}if(r<=128){for(a=w(t+e[u]),f=w(t+e[u+n]),i=w(t+e[u+2*n]),l=w(t+e[u+3*n]),c=w(t+e[u+4*n]),y=w(t+e[u+5*n]),p=w(t+e[u+6*n]),d=w(t+e[u+7*n]),u+=8*n,b=r%8,v=8;v<r-b;v+=8)a=w(a+w(t+e[u])),f=w(f+w(t+e[u+n])),i=w(i+w(t+e[u+2*n])),l=w(l+w(t+e[u+3*n])),c=w(c+w(t+e[u+4*n])),y=w(y+w(t+e[u+5*n])),p=w(p+w(t+e[u+6*n])),d=w(d+w(t+e[u+7*n])),u+=8*n;for(_=w(w(w(a+f)+w(i+l))+w(w(c+y)+w(p+d)));v<r;v++)_=w(_+w(t+e[u])),u+=n;return _}return s=S(r/2),w(O(s-=s%8,t,e,n,u)+O(r-s,t,e,n,u+s*n))}function T(r,t,e,n){var o,u,a;if(r<=0)return 0;if(1===r||0===n)return w(t+e[0]);if(o=n<0?(1-r)*n:0,r<8){for(u=0,a=0;a<r;a++)u=w(u+w(t+e[o])),o+=n;return u}return O(r,t,e,n,o)}function N(r,t,e){var n,o;return r<=0?NaN:1===r||0===e?t[0]:(n=w(F(r,t,e)/r),o=w(T(r,-n,t,e)/r),w(n+o))}function P(r,t,e,n){var o,u;return r<=0?NaN:1===r||0===e?t[n]:(o=w(A(r,t,e,n)/r),u=w(O(r,-o,t,e,n)/r),w(o+u))}function E(r,t,e){return N(r,t,e)}function I(r,t,e,n){return P(r,t,e,n)}c(F,"ndarray",A),c(T,"ndarray",O),c(N,"ndarray",P),c(E,"ndarray",I),r.default=E,r.ndarray=I,Object.defineProperty(r,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((r="undefined"!=typeof globalThis?globalThis:r||self).smean={});
//# sourceMappingURL=browser.js.map
