/*!
 * vue-i18n v7.4.2 
 * (c) 2018 kazuya kawaguchi
 * Released under the MIT License.
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.VueI18n=e()}(this,function(){"use strict";function t(t,e){"undefined"!=typeof console&&(console.warn("[vue-i18n] "+t),e&&console.warn(e.stack))}function e(t){return null!==t&&"object"==typeof t}function r(t){return j.call(t)===M}function n(t){return null===t||void 0===t}function i(){for(var t=[],r=arguments.length;r--;)t[r]=arguments[r];var n=null,i=null;return 1===t.length?e(t[0])||Array.isArray(t[0])?i=t[0]:"string"==typeof t[0]&&(n=t[0]):2===t.length&&("string"==typeof t[0]&&(n=t[0]),(e(t[1])||Array.isArray(t[1]))&&(i=t[1])),{locale:n,params:i}}function a(t){return t?t>1?1:0:1}function o(t,e){return t=Math.abs(t),2===e?a(t):t?Math.min(t,2):0}function s(t,e){if(!t&&"string"!=typeof t)return null;var r=t.split("|");return e=o(e,r.length),r[e]?r[e].trim():t}function c(t){return JSON.parse(JSON.stringify(t))}function l(t,e){if(t.length){var r=t.indexOf(e);if(r>-1)return t.splice(r,1)}}function u(t,e){return N.call(t,e)}function f(t){for(var r=arguments,n=Object(t),i=1;i<arguments.length;i++){var a=r[i];if(void 0!==a&&null!==a){var o=void 0;for(o in a)u(a,o)&&(e(a[o])?n[o]=f(n[o],a[o]):n[o]=a[o])}}return n}function h(t,r){if(t===r)return!0;var n=e(t),i=e(r);if(!n||!i)return!n&&!i&&String(t)===String(r);try{var a=Array.isArray(t),o=Array.isArray(r);if(a&&o)return t.length===r.length&&t.every(function(t,e){return h(t,r[e])});if(a||o)return!1;var s=Object.keys(t),c=Object.keys(r);return s.length===c.length&&s.every(function(e){return h(t[e],r[e])})}catch(t){return!1}}function p(t){Object.defineProperty(t.prototype,"$t",{get:function(){var t=this;return function(e){for(var r=[],n=arguments.length-1;n-- >0;)r[n]=arguments[n+1];var i=t.$i18n;return i._t.apply(i,[e,i.locale,i._getMessages(),t].concat(r))}}}),Object.defineProperty(t.prototype,"$tc",{get:function(){var t=this;return function(e,r){for(var n=[],i=arguments.length-2;i-- >0;)n[i]=arguments[i+2];var a=t.$i18n;return a._tc.apply(a,[e,a.locale,a._getMessages(),t,r].concat(n))}}}),Object.defineProperty(t.prototype,"$te",{get:function(){var t=this;return function(e,r){var n=t.$i18n;return n._te(e,n.locale,n._getMessages(),r)}}}),Object.defineProperty(t.prototype,"$d",{get:function(){var t=this;return function(e){for(var r=[],n=arguments.length-1;n-- >0;)r[n]=arguments[n+1];return(i=t.$i18n).d.apply(i,[e].concat(r));var i}}}),Object.defineProperty(t.prototype,"$n",{get:function(){var t=this;return function(e){for(var r=[],n=arguments.length-1;n-- >0;)r[n]=arguments[n+1];return(i=t.$i18n).n.apply(i,[e].concat(r));var i}}})}function _(t,e,r){v(t,r)&&y(t,e,r)}function m(t,e,r,n){v(t,r)&&(g(t,r)&&h(e.value,e.oldValue)||y(t,e,r))}function v(e,r){var n=r.context;return n?!!n.$i18n||(t("not exist VueI18n instance in Vue instance"),!1):(t("not exist Vue instance in VNode context"),!1)}function g(t,e){var r=e.context;return t._locale===r.$i18n.locale}function y(e,r,n){var i=r.value,a=d(i),o=a.path,s=a.locale,c=a.args;if(!o&&!s&&!c)return void t("not support value type");if(!o)return void t("required `path` in v-t directive");var l=n.context;e._vt=e.textContent=(u=l.$i18n).t.apply(u,[o].concat(b(s,c))),e._locale=l.$i18n.locale;var u}function d(t){var e,n,i;return"string"==typeof t?e=t:r(t)&&(e=t.path,n=t.locale,i=t.args),{path:e,locale:n,args:i}}function b(t,e){var n=[];return t&&n.push(t),e&&(Array.isArray(e)||r(e))&&n.push(e),n}function $(t){A=t;A.version&&Number(A.version.split(".")[0]);$.installed=!0,Object.defineProperty(A.prototype,"$i18n",{get:function(){return this._i18n}}),p(A),A.mixin(P),A.directive("t",{bind:_,update:m}),A.component(S.name,S);var e=A.config.optionMergeStrategies;e.i18n=e.methods}function F(t){for(var e=[],r=0,n="";r<t.length;){var i=t[r++];if("{"===i){n&&e.push({type:"text",value:n}),n="";var a="";for(i=t[r++];"}"!==i;)a+=i,i=t[r++];var o=C.test(a)?"list":E.test(a)?"named":"unknown";e.push({value:a,type:o})}else"%"===i?"{"!==t[r]&&(n+=i):n+=i}return n&&e.push({type:"text",value:n}),e}function w(t,r){var n=[],i=0,a=Array.isArray(r)?"list":e(r)?"named":"unknown";if("unknown"===a)return n;for(;i<t.length;){var o=t[i];switch(o.type){case"text":n.push(o.value);break;case"list":n.push(r[parseInt(o.value,10)]);break;case"named":"named"===a&&n.push(r[o.value])}i++}return n}function k(t){return Y.test(t)}function T(t){var e=t.charCodeAt(0);return e!==t.charCodeAt(t.length-1)||34!==e&&39!==e?t:t.slice(1,-1)}function x(t){if(void 0===t||null===t)return"eof";var e=t.charCodeAt(0);switch(e){case 91:case 93:case 46:case 34:case 39:case 48:return t;case 95:case 36:case 45:return"ident";case 32:case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"ws"}return e>=97&&e<=122||e>=65&&e<=90?"ident":e>=49&&e<=57?"number":"else"}function O(t){var e=t.trim();return("0"!==t.charAt(0)||!isNaN(t))&&(k(e)?T(e):"*"+e)}function D(t){var e,r,n,i,a,o,s,c=[],l=-1,u=q,f=0,h=[];for(h[z]=function(){void 0!==r&&(c.push(r),r=void 0)},h[R]=function(){void 0===r?r=n:r+=n},h[J]=function(){h[R](),f++},h[U]=function(){if(f>0)f--,u=B,h[R]();else{if(f=0,!1===(r=O(r)))return!1;h[z]()}};null!==u;)if(l++,"\\"!==(e=t[l])||!function(){var e=t[l+1];if(u===G&&"'"===e||u===H&&'"'===e)return l++,n="\\"+e,h[R](),!0}()){if(i=x(e),s=X[u],(a=s[i]||s.else||Q)===Q)return;if(u=a[0],(o=h[a[1]])&&(n=a[2],n=void 0===n?e:n,!1===o()))return;if(u===K)return c}}function L(t){return!!Array.isArray(t)&&0===t.length}var A,j=Object.prototype.toString,M="[object Object]",N=Object.prototype.hasOwnProperty,W="undefined"!=typeof Intl&&void 0!==Intl.DateTimeFormat,I="undefined"!=typeof Intl&&void 0!==Intl.NumberFormat,P={beforeCreate:function(){var t=this.$options;if(t.i18n=t.i18n||(t.__i18n?{}:null),t.i18n){if(t.i18n instanceof tt){if(t.__i18n)try{var e={};t.__i18n.forEach(function(t){e=f(e,JSON.parse(t))}),Object.keys(e).forEach(function(r){t.i18n.mergeLocaleMessage(r,e[r])})}catch(t){}this._i18n=t.i18n,this._i18nWatcher=this._i18n.watchI18nData(),this._i18n.subscribeDataChanging(this),this._subscribing=!0}else if(r(t.i18n)){if(this.$root&&this.$root.$i18n&&this.$root.$i18n instanceof tt&&(t.i18n.root=this.$root.$i18n,t.i18n.formatter=this.$root.$i18n.formatter,t.i18n.fallbackLocale=this.$root.$i18n.fallbackLocale,t.i18n.silentTranslationWarn=this.$root.$i18n.silentTranslationWarn),t.__i18n)try{var n={};t.__i18n.forEach(function(t){n=f(n,JSON.parse(t))}),t.i18n.messages=n}catch(t){}this._i18n=new tt(t.i18n),this._i18nWatcher=this._i18n.watchI18nData(),this._i18n.subscribeDataChanging(this),this._subscribing=!0,(void 0===t.i18n.sync||t.i18n.sync)&&(this._localeWatcher=this.$i18n.watchLocale())}}else this.$root&&this.$root.$i18n&&this.$root.$i18n instanceof tt?(this._i18n=this.$root.$i18n,this._i18n.subscribeDataChanging(this),this._subscribing=!0):t.parent&&t.parent.$i18n&&t.parent.$i18n instanceof tt&&(this._i18n=t.parent.$i18n,this._i18n.subscribeDataChanging(this),this._subscribing=!0)},beforeDestroy:function(){this._i18n&&(this._subscribing&&(this._i18n.unsubscribeDataChanging(this),delete this._subscribing),this._i18nWatcher&&(this._i18nWatcher(),delete this._i18nWatcher),this._localeWatcher&&(this._localeWatcher(),delete this._localeWatcher),this._i18n=null)}},S={name:"i18n",functional:!0,props:{tag:{type:String,default:"span"},path:{type:String,required:!0},locale:{type:String},places:{type:[Array,Object]}},render:function(e,r){var n=r.props,i=r.data,a=r.children,o=r.parent,s=o.$i18n;if(a=(a||[]).filter(function(t){return t.tag||(t.text=t.text.trim())}),!s)return a;var c=n.path,l=n.locale,u={},f=n.places||{},h=Array.isArray(f)?f.length>0:Object.keys(f).length>0,p=a.every(function(t){if(t.data&&t.data.attrs){var e=t.data.attrs.place;return void 0!==e&&""!==e}});return h&&a.length>0&&!p&&t("If places prop is set, all child elements must have place prop set."),Array.isArray(f)?f.forEach(function(t,e){u[e]=t}):Object.keys(f).forEach(function(t){u[t]=f[t]}),a.forEach(function(t,e){var r=p?""+t.data.attrs.place:""+e;u[r]=t}),e(n.tag,i,s.i(c,l,u))}},V=function(){this._caches=Object.create(null)};V.prototype.interpolate=function(t,e){if(!e)return[t];var r=this._caches[t];return r||(r=F(t),this._caches[t]=r),w(r,e)};var C=/^(\d)+/,E=/^(\w)+/,R=0,z=1,J=2,U=3,q=0,B=4,G=5,H=6,K=7,Q=8,X=[];X[q]={ws:[q],ident:[3,R],"[":[B],eof:[K]},X[1]={ws:[1],".":[2],"[":[B],eof:[K]},X[2]={ws:[2],ident:[3,R],0:[3,R],number:[3,R]},X[3]={ident:[3,R],0:[3,R],number:[3,R],ws:[1,z],".":[2,z],"[":[B,z],eof:[K,z]},X[B]={"'":[G,R],'"':[H,R],"[":[B,J],"]":[1,U],eof:Q,else:[B,R]},X[G]={"'":[B,R],eof:Q,else:[G,R]},X[H]={'"':[B,R],eof:Q,else:[H,R]};var Y=/^\s?(true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/,Z=function(){this._cache=Object.create(null)};Z.prototype.parsePath=function(t){var e=this._cache[t];return e||(e=D(t))&&(this._cache[t]=e),e||[]},Z.prototype.getPathValue=function(t,r){if(!e(t))return null;var n=this.parsePath(r);if(L(n))return null;for(var i=n.length,a=t,o=0;o<i;){var s=a[n[o]];if(void 0===s){a=null;break}a=s,o++}return a};var tt=function(t){var e=this;void 0===t&&(t={}),!A&&"undefined"!=typeof window&&window.Vue&&$(window.Vue);var r=t.locale||"en-US",i=t.fallbackLocale||"en-US",a=t.messages||{},o=t.dateTimeFormats||{},s=t.numberFormats||{};this._vm=null,this._formatter=t.formatter||new V,this._missing=t.missing||null,this._root=t.root||null,this._sync=void 0===t.sync||!!t.sync,this._fallbackRoot=void 0===t.fallbackRoot||!!t.fallbackRoot,this._silentTranslationWarn=void 0!==t.silentTranslationWarn&&!!t.silentTranslationWarn,this._dateTimeFormatters={},this._numberFormatters={},this._path=new Z,this._dataListeners=[],this._exist=function(t,r){return!(!t||!r)&&!n(e._path.getPathValue(t,r))},this._initVM({locale:r,fallbackLocale:i,messages:a,dateTimeFormats:o,numberFormats:s})},et={vm:{},messages:{},dateTimeFormats:{},numberFormats:{},locale:{},fallbackLocale:{},missing:{},formatter:{},silentTranslationWarn:{}};return tt.prototype._initVM=function(t){var e=A.config.silent;A.config.silent=!0,this._vm=new A({data:t}),A.config.silent=e},tt.prototype.subscribeDataChanging=function(t){this._dataListeners.push(t)},tt.prototype.unsubscribeDataChanging=function(t){l(this._dataListeners,t)},tt.prototype.watchI18nData=function(){var t=this;return this._vm.$watch("$data",function(){for(var e=t._dataListeners.length;e--;)A.nextTick(function(){t._dataListeners[e]&&t._dataListeners[e].$forceUpdate()})},{deep:!0})},tt.prototype.watchLocale=function(){if(!this._sync||!this._root)return null;var t=this._vm;return this._root.vm.$watch("locale",function(e){t.$set(t,"locale",e),t.$forceUpdate()},{immediate:!0})},et.vm.get=function(){return this._vm},et.messages.get=function(){return c(this._getMessages())},et.dateTimeFormats.get=function(){return c(this._getDateTimeFormats())},et.numberFormats.get=function(){return c(this._getNumberFormats())},et.locale.get=function(){return this._vm.locale},et.locale.set=function(t){this._vm.$set(this._vm,"locale",t)},et.fallbackLocale.get=function(){return this._vm.fallbackLocale},et.fallbackLocale.set=function(t){this._vm.$set(this._vm,"fallbackLocale",t)},et.missing.get=function(){return this._missing},et.missing.set=function(t){this._missing=t},et.formatter.get=function(){return this._formatter},et.formatter.set=function(t){this._formatter=t},et.silentTranslationWarn.get=function(){return this._silentTranslationWarn},et.silentTranslationWarn.set=function(t){this._silentTranslationWarn=t},tt.prototype._getMessages=function(){return this._vm.messages},tt.prototype._getDateTimeFormats=function(){return this._vm.dateTimeFormats},tt.prototype._getNumberFormats=function(){return this._vm.numberFormats},tt.prototype._warnDefault=function(t,e,r,i){return n(r)?(this._missing&&this._missing.apply(null,[t,e,i]),e):r},tt.prototype._isFallbackRoot=function(t){return!t&&!n(this._root)&&this._fallbackRoot},tt.prototype._interpolate=function(t,e,i,a,o,s){if(!e)return null;var c=this._path.getPathValue(e,i);if(Array.isArray(c))return c;var l;if(n(c)){if(!r(e))return null;if("string"!=typeof(l=e[i]))return null}else{if("string"!=typeof c)return null;l=c}return l.indexOf("@:")>=0&&(l=this._link(t,e,l,a,o,s)),this._render(l,o,s)},tt.prototype._link=function(t,e,r,n,i,a){var o=this,s=r,c=s.match(/(@:[\w\-_|.]+)/g);for(var l in c)if(c.hasOwnProperty(l)){var u=c[l],f=u.substr(2),h=o._interpolate(t,e,f,n,"raw"===i?"string":i,"raw"===i?void 0:a);if(o._isFallbackRoot(h)){if(!o._root)throw Error("unexpected error");var p=o._root;h=p._translate(p._getMessages(),p.locale,p.fallbackLocale,f,n,i,a)}h=o._warnDefault(t,f,h,n),s=h?s.replace(u,h):s}return s},tt.prototype._render=function(t,e,r){var n=this._formatter.interpolate(t,r);return"string"===e?n.join(""):n},tt.prototype._translate=function(t,e,r,i,a,o,s){var c=this._interpolate(e,t[e],i,a,o,s);return n(c)?(c=this._interpolate(r,t[r],i,a,o,s),n(c)?null:c):c},tt.prototype._t=function(t,e,r,n){for(var a=[],o=arguments.length-4;o-- >0;)a[o]=arguments[o+4];if(!t)return"";var s=i.apply(void 0,a),c=s.locale||e,l=this._translate(r,c,this.fallbackLocale,t,n,"string",s.params);if(this._isFallbackRoot(l)){if(!this._root)throw Error("unexpected error");return(u=this._root).t.apply(u,[t].concat(a))}return this._warnDefault(c,t,l,n);var u},tt.prototype.t=function(t){for(var e=[],r=arguments.length-1;r-- >0;)e[r]=arguments[r+1];return(n=this)._t.apply(n,[t,this.locale,this._getMessages(),null].concat(e));var n},tt.prototype._i=function(t,e,r,n,i){var a=this._translate(r,e,this.fallbackLocale,t,n,"raw",i);if(this._isFallbackRoot(a)){if(!this._root)throw Error("unexpected error");return this._root.i(t,e,i)}return this._warnDefault(e,t,a,n)},tt.prototype.i=function(t,e,r){return t?("string"!=typeof e&&(e=this.locale),this._i(t,e,this._getMessages(),null,r)):""},tt.prototype._tc=function(t,e,r,n,i){for(var a=[],o=arguments.length-5;o-- >0;)a[o]=arguments[o+5];return t?(void 0===i&&(i=1),s((c=this)._t.apply(c,[t,e,r,n].concat(a)),i)):"";var c},tt.prototype.tc=function(t,e){for(var r=[],n=arguments.length-2;n-- >0;)r[n]=arguments[n+2];return(i=this)._tc.apply(i,[t,this.locale,this._getMessages(),null,e].concat(r));var i},tt.prototype._te=function(t,e,r){for(var n=[],a=arguments.length-3;a-- >0;)n[a]=arguments[a+3];var o=i.apply(void 0,n).locale||e;return this._exist(r[o],t)},tt.prototype.te=function(t,e){return this._te(t,this.locale,this._getMessages(),e)},tt.prototype.getLocaleMessage=function(t){return c(this._vm.messages[t]||{})},tt.prototype.setLocaleMessage=function(t,e){this._vm.messages[t]=e},tt.prototype.mergeLocaleMessage=function(t,e){this._vm.$set(this._vm.messages,t,A.util.extend(this._vm.messages[t]||{},e))},tt.prototype.getDateTimeFormat=function(t){return c(this._vm.dateTimeFormats[t]||{})},tt.prototype.setDateTimeFormat=function(t,e){this._vm.dateTimeFormats[t]=e},tt.prototype.mergeDateTimeFormat=function(t,e){this._vm.$set(this._vm.dateTimeFormats,t,A.util.extend(this._vm.dateTimeFormats[t]||{},e))},tt.prototype._localizeDateTime=function(t,e,r,i,a){var o=e,s=i[o];if((n(s)||n(s[a]))&&(o=r,s=i[o]),n(s)||n(s[a]))return null;var c=s[a],l=o+"__"+a,u=this._dateTimeFormatters[l];return u||(u=this._dateTimeFormatters[l]=new Intl.DateTimeFormat(o,c)),u.format(t)},tt.prototype._d=function(t,e,r){if(!r)return new Intl.DateTimeFormat(e).format(t);var n=this._localizeDateTime(t,e,this.fallbackLocale,this._getDateTimeFormats(),r);if(this._isFallbackRoot(n)){if(!this._root)throw Error("unexpected error");return this._root.d(t,r,e)}return n||""},tt.prototype.d=function(t){for(var r=[],n=arguments.length-1;n-- >0;)r[n]=arguments[n+1];var i=this.locale,a=null;return 1===r.length?"string"==typeof r[0]?a=r[0]:e(r[0])&&(r[0].locale&&(i=r[0].locale),r[0].key&&(a=r[0].key)):2===r.length&&("string"==typeof r[0]&&(a=r[0]),"string"==typeof r[1]&&(i=r[1])),this._d(t,i,a)},tt.prototype.getNumberFormat=function(t){return c(this._vm.numberFormats[t]||{})},tt.prototype.setNumberFormat=function(t,e){this._vm.numberFormats[t]=e},tt.prototype.mergeNumberFormat=function(t,e){this._vm.$set(this._vm.numberFormats,t,A.util.extend(this._vm.numberFormats[t]||{},e))},tt.prototype._localizeNumber=function(t,e,r,i,a){var o=e,s=i[o];if((n(s)||n(s[a]))&&(o=r,s=i[o]),n(s)||n(s[a]))return null;var c=s[a],l=o+"__"+a,u=this._numberFormatters[l];return u||(u=this._numberFormatters[l]=new Intl.NumberFormat(o,c)),u.format(t)},tt.prototype._n=function(t,e,r){if(!r)return new Intl.NumberFormat(e).format(t);var n=this._localizeNumber(t,e,this.fallbackLocale,this._getNumberFormats(),r);if(this._isFallbackRoot(n)){if(!this._root)throw Error("unexpected error");return this._root.n(t,r,e)}return n||""},tt.prototype.n=function(t){for(var r=[],n=arguments.length-1;n-- >0;)r[n]=arguments[n+1];var i=this.locale,a=null;return 1===r.length?"string"==typeof r[0]?a=r[0]:e(r[0])&&(r[0].locale&&(i=r[0].locale),r[0].key&&(a=r[0].key)):2===r.length&&("string"==typeof r[0]&&(a=r[0]),"string"==typeof r[1]&&(i=r[1])),this._n(t,i,a)},Object.defineProperties(tt.prototype,et),tt.availabilities={dateTimeFormat:W,numberFormat:I},tt.install=$,tt.version="7.4.2",tt});