"use strict";var i=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var t=i(function(g,s){
var d=require('@stdlib/stats-strided-smeanpn/dist');function y(e,r,a){return d(e,r,a)}s.exports=y
});var v=i(function(h,u){
var x=require('@stdlib/stats-strided-smeanpn/dist').ndarray;function f(e,r,a,c){return x(e,r,a,c)}u.exports=f
});var o=i(function(k,m){
var j=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=t(),l=v();j(q,"ndarray",l);m.exports=q
});var R=require("path").join,_=require('@stdlib/utils-try-require/dist'),E=require('@stdlib/assert-is-error/dist'),O=o(),n,p=_(R(__dirname,"./native.js"));E(p)?n=O:n=p;module.exports=n;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
