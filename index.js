// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("path")):"function"==typeof define&&define.amd?define(["path"],e):(r="undefined"!=typeof globalThis?globalThis:r||self).smean=e(r.require$$0)}(this,(function(r){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(r){return"number"==typeof r}function o(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+o(i):o(i)+r,n&&(r="-"+r)),r}var a=String.prototype.toLowerCase,c=String.prototype.toUpperCase;function u(r){var e,t,o;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,o=parseInt(t,10),!isFinite(o)){if(!n(t))throw new Error("invalid integer. Value: "+t);o=0}return o<0&&("u"===r.specifier||10!==e)&&(o=4294967295+o+1),o<0?(t=(-o).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=o.toString(e),o||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===c.call(r.specifier)?c.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,d=/e\+(\d)$/,g=/e-(\d)$/,y=/^(\d+)$/,h=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,t,o=parseFloat(r.arg);if(!isFinite(o)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);o=r.arg}switch(r.specifier){case"e":case"E":t=o.toExponential(r.precision);break;case"f":case"F":t=o.toFixed(r.precision);break;case"g":case"G":f(o)<1e-4?((e=r.precision)>0&&(e-=1),t=o.toExponential(e)):t=o.toPrecision(r.precision),r.alternate||(t=p.call(t,w,"$1e"),t=p.call(t,v,"e"),t=p.call(t,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=p.call(t,d,"e+0$1"),t=p.call(t,g,"e-0$1"),r.alternate&&(t=p.call(t,y,"$1."),t=p.call(t,h,"$1.e")),o>=0&&r.sign&&(t=r.sign+t),t=r.specifier===s.call(r.specifier)?s.call(t):l.call(t)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var _=String.fromCharCode,E=Array.isArray;function S(r){return r!=r}function x(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function A(r){var e,t,n,o,a,c,f,l,s,p,d,g,y;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,l=0;l<r.length;l++)if(n=r[l],"string"==typeof n)c+=n;else{if(e=void 0!==n.precision,!(n=x(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(o=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,S(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,S(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!S(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=S(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,d=n.width,g=n.padRight,y=void 0,(y=d-p.length)<0?p:p=g?p+j(y):j(y)+p)),c+=n.arg||"",f+=1}return c}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function O(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function F(r){var e,t,n,o;for(t=[],o=0,n=k.exec(r);n;)(e=r.slice(o,k.lastIndex-n[0].length)).length&&t.push(e),t.push(O(n)),o=k.lastIndex,n=k.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function T(r){var e,t;if("string"!=typeof r)throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[F(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return A.apply(null,e)}var I,V=Object.prototype,P=V.toString,$=V.__defineGetter__,C=V.__defineSetter__,N=V.__lookupGetter__,R=V.__lookupSetter__;I=function(){try{return e({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===P.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===P.call(t))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(N.call(r,e)||R.call(r,e)?(n=r.__proto__,r.__proto__=V,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&$&&$.call(r,e,t.get),a&&C&&C.call(r,e,t.set),r};var B=I;function q(r,e,t){B(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var L=Object,M=/./;function G(r){return"boolean"==typeof r}var Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return Z&&"symbol"==typeof Symbol.toStringTag}var U=Object.prototype.toString;var X=Object.prototype.hasOwnProperty;var z,D="function"==typeof Symbol?Symbol:void 0,J="function"==typeof D?D.toStringTag:"";z=W()?function(r){var e,t,n,o,i;if(null==r)return U.call(r);t=r[J],i=J,e=null!=(o=r)&&X.call(o,i);try{r[J]=void 0}catch(e){return U.call(r)}return n=U.call(r),e?r[J]=t:delete r[J],n}:function(r){return U.call(r)};var Y=z,H=Boolean,K=Boolean.prototype.toString;var Q=W();function rr(r){return"object"==typeof r&&(r instanceof H||(Q?function(r){try{return K.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===Y(r)))}function er(r){return G(r)||rr(r)}q(er,"isPrimitive",G),q(er,"isObject",rr);var tr="object"==typeof self?self:null,nr="object"==typeof window?window:null,or="object"==typeof global?global:null,ir="object"==typeof globalThis?globalThis:null;var ar=function(r){if(arguments.length){if(!G(r))throw new TypeError(T("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(ir)return ir;if(tr)return tr;if(nr)return nr;if(or)return or;throw new Error("unexpected error. Unable to resolve global object.")}(),cr=ar.document&&ar.document.childNodes,ur=Int8Array;function fr(){return/^\s*function\s*([^(]*)/i}var lr,sr=/^\s*function\s*([^(]*)/i;q(fr,"REGEXP",sr),lr=Array.isArray?Array.isArray:function(r){return"[object Array]"===Y(r)};var pr=lr;function dr(r){return null!==r&&"object"==typeof r}var gr=function(r){if("function"!=typeof r)throw new TypeError(T("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!pr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(dr);function yr(r){var e,t,n,o;if(("Object"===(t=Y(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=sr.exec(n.toString()))return e[1]}return dr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}q(dr,"isObjectLikeArray",gr);var hr="function"==typeof M||"object"==typeof ur||"function"==typeof cr?function(r){return yr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?yr(r).toLowerCase():e};var br,vr,wr=Object.getPrototypeOf;vr=Object.getPrototypeOf,br="function"===hr(vr)?wr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===Y(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var mr=br;function jr(r){return null==r?null:(r=L(r),mr(r))}function _r(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===Y(r))return!0;r=jr(r)}return!1}function Er(r){try{return function(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}(r)}catch(r){return _r(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}var Sr="function"==typeof Math.fround?Math.fround:null,xr="function"==typeof Float32Array;var Ar=Number.POSITIVE_INFINITY,kr="function"==typeof Float32Array?Float32Array:null;var Or,Fr="function"==typeof Float32Array?Float32Array:void 0;Or=function(){var r,e;if("function"!=typeof kr)return!1;try{r=function(r){return xr&&r instanceof Float32Array||"[object Float32Array]"===Y(r)}(e=new kr([1,3.14,-3.14,5e40]))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===Ar}catch(e){r=!1}return r}()?Fr:function(){throw new Error("not implemented")};var Tr=new Or(1);var Ir="function"==typeof Sr?Sr:function(r){return Tr[0]=r,Tr[0]},Vr=Math.floor,Pr=128;function $r(r,e,t,n){var o,i,a,c,u,f,l,s,p,d,g,y,h;if(r<=0)return 0;if(1===r||0===t)return e[n];if(o=n,r<8){for(g=0,h=0;h<r;h++)g=Ir(g+e[o]),o+=t;return g}if(r<=Pr){for(i=e[o],a=e[o+t],c=e[o+2*t],u=e[o+3*t],f=e[o+4*t],l=e[o+5*t],s=e[o+6*t],p=e[o+7*t],o+=8*t,d=r%8,h=8;h<r-d;h+=8)i=Ir(i+e[o]),a=Ir(a+e[o+t]),c=Ir(c+e[o+2*t]),u=Ir(u+e[o+3*t]),f=Ir(f+e[o+4*t]),l=Ir(l+e[o+5*t]),s=Ir(s+e[o+6*t]),p=Ir(p+e[o+7*t]),o+=8*t;for(g=Ir(Ir(Ir(i+a)+Ir(c+u))+Ir(Ir(f+l)+Ir(s+p)));h<r;h++)g=Ir(g+e[o]),o+=t;return g}return y=Vr(r/2),Ir($r(y-=y%8,e,t,o)+$r(r-y,e,t,o+y*t))}function Cr(r,e,t){var n,o,i;if(r<=0)return 0;if(1===r||0===t)return e[0];if(n=t<0?(1-r)*t:0,r<8){for(o=0,i=0;i<r;i++)o=Ir(o+e[n]),n+=t;return o}return $r(r,e,t,n)}q(Cr,"ndarray",$r);var Nr,Rr=Er((0,r.join)(__dirname,"./native.js")),Br=Nr=_r(Rr)?Cr:Rr;const{ndarray:qr}=Nr;var Lr=128;function Mr(r,e,t,n,o){var i,a,c,u,f,l,s,p,d,g,y,h,b;if(r<=0)return 0;if(1===r||0===n)return Ir(e+t[o]);if(i=o,r<8){for(y=0,b=0;b<r;b++)y=Ir(y+Ir(e+t[i])),i+=n;return y}if(r<=Lr){for(a=Ir(e+t[i]),c=Ir(e+t[i+n]),u=Ir(e+t[i+2*n]),f=Ir(e+t[i+3*n]),l=Ir(e+t[i+4*n]),s=Ir(e+t[i+5*n]),p=Ir(e+t[i+6*n]),d=Ir(e+t[i+7*n]),i+=8*n,g=r%8,b=8;b<r-g;b+=8)a=Ir(a+Ir(e+t[i])),c=Ir(c+Ir(e+t[i+n])),u=Ir(u+Ir(e+t[i+2*n])),f=Ir(f+Ir(e+t[i+3*n])),l=Ir(l+Ir(e+t[i+4*n])),s=Ir(s+Ir(e+t[i+5*n])),p=Ir(p+Ir(e+t[i+6*n])),d=Ir(d+Ir(e+t[i+7*n])),i+=8*n;for(y=Ir(Ir(Ir(a+c)+Ir(u+f))+Ir(Ir(l+s)+Ir(p+d)));b<r;b++)y=Ir(y+Ir(e+t[i])),i+=n;return y}return h=Vr(r/2),Ir(Mr(h-=h%8,e,t,n,i)+Mr(r-h,e,t,n,i+h*n))}function Gr(r,e,t,n){var o,i,a;if(r<=0)return 0;if(1===r||0===n)return Ir(e+t[0]);if(o=n<0?(1-r)*n:0,r<8){for(i=0,a=0;a<r;a++)i=Ir(i+Ir(e+t[o])),o+=n;return i}return Mr(r,e,t,n,o)}q(Gr,"ndarray",Mr);var Zr,Wr=Er((0,r.join)(__dirname,"./native.js")),Ur=Zr=_r(Wr)?Gr:Wr;const{ndarray:Xr}=Zr;function zr(r,e,t){var n,o;return r<=0?NaN:1===r||0===t?e[0]:(n=Ir(Br(r,e,t)/r),o=Ir(Ur(r,-n,e,t)/r),Ir(n+o))}q(zr,"ndarray",(function(r,e,t,n){var o,i;return r<=0?NaN:1===r||0===t?e[n]:(o=Ir(qr(r,e,t,n)/r),i=Ir(Xr(r,-o,e,t,n)/r),Ir(o+i))}));var Dr,Jr=Er((0,r.join)(__dirname,"./native.js")),Yr=Dr=_r(Jr)?zr:Jr;const{ndarray:Hr}=Dr;function Kr(r,e,t){return Yr(r,e,t)}return q(Kr,"ndarray",(function(r,e,t,n){return Hr(r,e,t,n)})),Kr}));
//# sourceMappingURL=index.js.map
