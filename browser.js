// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(a):n(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):a.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function f(r){return"string"==typeof r}var l=Math.abs,s=String.prototype.toLowerCase,u=String.prototype.toUpperCase,p=String.prototype.replace,d=/e\+(\d)$/,g=/e-(\d)$/,h=/^(\d+)$/,y=/^(\d+)e/,b=/\.0$/,w=/\.0*e/,v=/(\..*[^0])0*e/;function m(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":l(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,v,"$1e"),n=p.call(n,w,"e"),n=p.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,d,"e+0$1"),n=p.call(n,g,"e-0$1"),r.alternate&&(n=p.call(n,h,"$1."),n=p.call(n,y,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===u.call(r.specifier)?u.call(n):s.call(n)}function _(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function S(r,e,t){var n=e-r.length;return n<0?r:r=t?r+_(n):_(n)+r}var E=String.fromCharCode,x=isNaN,k=Array.isArray;function F(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function A(r){var e,t,n,a,o,l,s,u,p;if(!k(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(l="",s=1,u=0;u<r.length;u++)if(f(n=r[u]))l+=n;else{if(e=void 0!==n.precision,!(n=F(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,x(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,x(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!x(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=x(o)?String(n.arg):E(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=S(n.arg,n.width,n.padRight)),l+=n.arg||"",s+=1}return l}var j=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function I(r){var e,t,n,i;for(t=[],i=0,n=j.exec(r);n;)(e=r.slice(i,j.lastIndex-n[0].length)).length&&t.push(e),t.push(T(n)),i=j.lastIndex,n=j.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function V(r){return"string"==typeof r}function $(r){var e,t,n;if(!V(r))throw new TypeError($("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=I(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return A.apply(null,t)}var N=Object.prototype,O=N.toString,C=N.__defineGetter__,P=N.__defineSetter__,R=N.__lookupGetter__,Z=N.__lookupSetter__,G=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===O.call(r))throw new TypeError($("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===O.call(t))throw new TypeError($("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(R.call(r,e)||Z.call(r,e)?(n=r.__proto__,r.__proto__=N,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&C&&C.call(r,e,t.get),o&&P&&P.call(r,e,t.set),r};function M(r,e,t){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var W="function"==typeof Math.fround?Math.fround:null,L="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),U=Object.prototype.toString,X=Object.prototype.hasOwnProperty,z="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof z?z.toStringTag:"",q=L&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,i,a;if(null==r)return U.call(r);t=r[Y],a=Y,e=null!=(i=r)&&X.call(i,a);try{r[Y]=void 0}catch(e){return U.call(r)}return n=U.call(r),e?r[Y]=t:delete r[Y],n}:function(r){return U.call(r)},B="function"==typeof Float32Array,D=Number.POSITIVE_INFINITY,H="function"==typeof Float32Array?Float32Array:null,J="function"==typeof Float32Array?Float32Array:void 0,K=new(function(){var r,e,t;if("function"!=typeof H)return!1;try{e=new H([1,3.14,-3.14,5e40]),t=e,r=(B&&t instanceof Float32Array||"[object Float32Array]"===q(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===D}catch(e){r=!1}return r}()?J:function(){throw new Error("not implemented")})(1),Q="function"==typeof W?W:function(r){return K[0]=r,K[0]},rr=Math.floor;function er(r,e,t,n){var i,a,o,c,f,l,s,u,p,d,g,h,y;if(r<=0)return 0;if(1===r||0===t)return e[n];if(i=n,r<8){for(g=0,y=0;y<r;y++)g=Q(g+e[i]),i+=t;return g}if(r<=128){for(a=e[i],o=e[i+t],c=e[i+2*t],f=e[i+3*t],l=e[i+4*t],s=e[i+5*t],u=e[i+6*t],p=e[i+7*t],i+=8*t,d=r%8,y=8;y<r-d;y+=8)a=Q(a+e[i]),o=Q(o+e[i+t]),c=Q(c+e[i+2*t]),f=Q(f+e[i+3*t]),l=Q(l+e[i+4*t]),s=Q(s+e[i+5*t]),u=Q(u+e[i+6*t]),p=Q(p+e[i+7*t]),i+=8*t;for(g=Q(Q(Q(a+o)+Q(c+f))+Q(Q(l+s)+Q(u+p)));y<r;y++)g=Q(g+e[i]),i+=t;return g}return h=rr(r/2),Q(er(h-=h%8,e,t,i)+er(r-h,e,t,i+h*t))}function tr(r,e,t){var n,i,a;if(r<=0)return 0;if(1===r||0===t)return e[0];if(n=t<0?(1-r)*t:0,r<8){for(i=0,a=0;a<r;a++)i=Q(i+e[n]),n+=t;return i}return er(r,e,t,n)}function nr(r,e,t,n,i){var a,o,c,f,l,s,u,p,d,g,h,y,b;if(r<=0)return 0;if(1===r||0===n)return Q(e+t[i]);if(a=i,r<8){for(h=0,b=0;b<r;b++)h=Q(h+Q(e+t[a])),a+=n;return h}if(r<=128){for(o=Q(e+t[a]),c=Q(e+t[a+n]),f=Q(e+t[a+2*n]),l=Q(e+t[a+3*n]),s=Q(e+t[a+4*n]),u=Q(e+t[a+5*n]),p=Q(e+t[a+6*n]),d=Q(e+t[a+7*n]),a+=8*n,g=r%8,b=8;b<r-g;b+=8)o=Q(o+Q(e+t[a])),c=Q(c+Q(e+t[a+n])),f=Q(f+Q(e+t[a+2*n])),l=Q(l+Q(e+t[a+3*n])),s=Q(s+Q(e+t[a+4*n])),u=Q(u+Q(e+t[a+5*n])),p=Q(p+Q(e+t[a+6*n])),d=Q(d+Q(e+t[a+7*n])),a+=8*n;for(h=Q(Q(Q(o+c)+Q(f+l))+Q(Q(s+u)+Q(p+d)));b<r;b++)h=Q(h+Q(e+t[a])),a+=n;return h}return y=rr(r/2),Q(nr(y-=y%8,e,t,n,a)+nr(r-y,e,t,n,a+y*n))}function ir(r,e,t,n){var i,a,o;if(r<=0)return 0;if(1===r||0===n)return Q(e+t[0]);if(i=n<0?(1-r)*n:0,r<8){for(a=0,o=0;o<r;o++)a=Q(a+Q(e+t[i])),i+=n;return a}return nr(r,e,t,n,i)}function ar(r,e,t){var n,i;return r<=0?NaN:1===r||0===t?e[0]:(n=Q(tr(r,e,t)/r),i=Q(ir(r,-n,e,t)/r),Q(n+i))}function or(r,e,t,n){var i,a;return r<=0?NaN:1===r||0===t?e[n]:(i=Q(er(r,e,t,n)/r),a=Q(nr(r,-i,e,t,n)/r),Q(i+a))}function cr(r,e,t){return ar(r,e,t)}return M(tr,"ndarray",er),M(ir,"ndarray",nr),M(ar,"ndarray",or),M(cr,"ndarray",(function(r,e,t,n){return or(r,e,t,n)})),cr},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).smean=e();
//# sourceMappingURL=browser.js.map
