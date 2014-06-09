(function(){var o=this;var p=o._;var q={};var r=Array.prototype,ObjProto=Object.prototype,FuncProto=Function.prototype;var s=r.push,slice=r.slice,concat=r.concat,toString=ObjProto.toString,hasOwnProperty=ObjProto.hasOwnProperty;var t=r.forEach,nativeMap=r.map,nativeReduce=r.reduce,nativeReduceRight=r.reduceRight,nativeFilter=r.filter,nativeEvery=r.every,nativeSome=r.some,nativeIndexOf=r.indexOf,nativeLastIndexOf=r.lastIndexOf,nativeIsArray=Array.isArray,nativeKeys=Object.keys,nativeBind=FuncProto.bind;var _=function(a){if(a instanceof _)return a;if(!(this instanceof _))return new _(a);this._wrapped=a};if(typeof exports!=='undefined'){if(typeof module!=='undefined'&&module.exports){exports=module.exports=_}exports._=_}else{o._=_}_.VERSION='1.6.0';var u=_.each=_.forEach=function(a,b,c){if(a==null)return a;if(t&&a.forEach===t){a.forEach(b,c)}else if(a.length===+a.length){for(var i=0,length=a.length;i<length;i++){if(b.call(c,a[i],i,a)===q)return}}else{var d=_.keys(a);for(var i=0,length=d.length;i<length;i++){if(b.call(c,a[d[i]],d[i],a)===q)return}}return a};_.map=_.collect=function(d,e,f){var g=[];if(d==null)return g;if(nativeMap&&d.map===nativeMap)return d.map(e,f);u(d,function(a,b,c){g.push(e.call(f,a,b,c))});return g};var v='Reduce of empty array with no initial value';_.reduce=_.foldl=_.inject=function(d,e,f,g){var h=arguments.length>2;if(d==null)d=[];if(nativeReduce&&d.reduce===nativeReduce){if(g)e=_.bind(e,g);return h?d.reduce(e,f):d.reduce(e)}u(d,function(a,b,c){if(!h){f=a;h=true}else{f=e.call(g,f,a,b,c)}});if(!h)throw new TypeError(v);return f};_.reduceRight=_.foldr=function(d,e,f,g){var h=arguments.length>2;if(d==null)d=[];if(nativeReduceRight&&d.reduceRight===nativeReduceRight){if(g)e=_.bind(e,g);return h?d.reduceRight(e,f):d.reduceRight(e)}var i=d.length;if(i!==+i){var j=_.keys(d);i=j.length}u(d,function(a,b,c){b=j?j[--i]:--i;if(!h){f=d[b];h=true}else{f=e.call(g,f,d[b],b,c)}});if(!h)throw new TypeError(v);return f};_.find=_.detect=function(d,e,f){var g;w(d,function(a,b,c){if(e.call(f,a,b,c)){g=a;return true}});return g};_.filter=_.select=function(d,e,f){var g=[];if(d==null)return g;if(nativeFilter&&d.filter===nativeFilter)return d.filter(e,f);u(d,function(a,b,c){if(e.call(f,a,b,c))g.push(a)});return g};_.reject=function(d,e,f){return _.filter(d,function(a,b,c){return!e.call(f,a,b,c)},f)};_.every=_.all=function(d,e,f){e||(e=_.identity);var g=true;if(d==null)return g;if(nativeEvery&&d.every===nativeEvery)return d.every(e,f);u(d,function(a,b,c){if(!(g=g&&e.call(f,a,b,c)))return q});return!!g};var w=_.some=_.any=function(d,e,f){e||(e=_.identity);var g=false;if(d==null)return g;if(nativeSome&&d.some===nativeSome)return d.some(e,f);u(d,function(a,b,c){if(g||(g=e.call(f,a,b,c)))return q});return!!g};_.contains=_.include=function(b,c){if(b==null)return false;if(nativeIndexOf&&b.indexOf===nativeIndexOf)return b.indexOf(c)!=-1;return w(b,function(a){return a===c})};_.invoke=function(b,c){var d=slice.call(arguments,2);var e=_.isFunction(c);return _.map(b,function(a){return(e?c:a[c]).apply(a,d)})};_.pluck=function(a,b){return _.map(a,_.property(b))};_.where=function(a,b){return _.filter(a,_.matches(b))};_.findWhere=function(a,b){return _.find(a,_.matches(b))};_.max=function(e,f,g){if(!f&&_.isArray(e)&&e[0]===+e[0]&&e.length<65535){return Math.max.apply(Math,e)}var h=-Infinity,lastComputed=-Infinity;u(e,function(a,b,c){var d=f?f.call(g,a,b,c):a;if(d>lastComputed){h=a;lastComputed=d}});return h};_.min=function(e,f,g){if(!f&&_.isArray(e)&&e[0]===+e[0]&&e.length<65535){return Math.min.apply(Math,e)}var h=Infinity,lastComputed=Infinity;u(e,function(a,b,c){var d=f?f.call(g,a,b,c):a;if(d<lastComputed){h=a;lastComputed=d}});return h};_.shuffle=function(b){var c;var d=0;var e=[];u(b,function(a){c=_.random(d++);e[d-1]=e[c];e[c]=a});return e};_.sample=function(a,n,b){if(n==null||b){if(a.length!==+a.length)a=_.values(a);return a[_.random(a.length-1)]}return _.shuffle(a).slice(0,Math.max(0,n))};var x=function(a){if(a==null)return _.identity;if(_.isFunction(a))return a;return _.property(a)};_.sortBy=function(e,f,g){f=x(f);return _.pluck(_.map(e,function(a,b,c){return{value:a,index:b,criteria:f.call(g,a,b,c)}}).sort(function(c,d){var a=c.criteria;var b=d.criteria;if(a!==b){if(a>b||a===void 0)return 1;if(a<b||b===void 0)return-1}return c.index-d.index}),'value')};var y=function(h){return function(d,e,f){var g={};e=x(e);u(d,function(a,b){var c=e.call(f,a,b,d);h(g,c,a)});return g}};_.groupBy=y(function(a,b,c){_.has(a,b)?a[b].push(c):a[b]=[c]});_.indexBy=y(function(a,b,c){a[b]=c});_.countBy=y(function(a,b){_.has(a,b)?a[b]++:a[b]=1});_.sortedIndex=function(a,b,c,d){c=x(c);var e=c.call(d,b);var f=0,high=a.length;while(f<high){var g=(f+high)>>>1;c.call(d,a[g])<e?f=g+1:high=g}return f};_.toArray=function(a){if(!a)return[];if(_.isArray(a))return slice.call(a);if(a.length===+a.length)return _.map(a,_.identity);return _.values(a)};_.size=function(a){if(a==null)return 0;return(a.length===+a.length)?a.length:_.keys(a).length};_.first=_.head=_.take=function(a,n,b){if(a==null)return void 0;if((n==null)||b)return a[0];if(n<0)return[];return slice.call(a,0,n)};_.initial=function(a,n,b){return slice.call(a,0,a.length-((n==null)||b?1:n))};_.last=function(a,n,b){if(a==null)return void 0;if((n==null)||b)return a[a.length-1];return slice.call(a,Math.max(a.length-n,0))};_.rest=_.tail=_.drop=function(a,n,b){return slice.call(a,(n==null)||b?1:n)};_.compact=function(a){return _.filter(a,_.identity)};var z=function(b,c,d){if(c&&_.every(b,_.isArray)){return concat.apply(d,b)}u(b,function(a){if(_.isArray(a)||_.isArguments(a)){c?s.apply(d,a):z(a,c,d)}else{d.push(a)}});return d};_.flatten=function(a,b){return z(a,b,[])};_.without=function(a){return _.difference(a,slice.call(arguments,1))};_.partition=function(b,c){var d=[],fail=[];u(b,function(a){(c(a)?d:fail).push(a)});return[d,fail]};_.uniq=_.unique=function(c,d,e,f){if(_.isFunction(d)){f=e;e=d;d=false}var g=e?_.map(c,e,f):c;var h=[];var i=[];u(g,function(a,b){if(d?(!b||i[i.length-1]!==a):!_.contains(i,a)){i.push(a);h.push(c[b])}});return h};_.union=function(){return _.uniq(_.flatten(arguments,true))};_.intersection=function(c){var d=slice.call(arguments,1);return _.filter(_.uniq(c),function(b){return _.every(d,function(a){return _.contains(a,b)})})};_.difference=function(b){var c=concat.apply(r,slice.call(arguments,1));return _.filter(b,function(a){return!_.contains(c,a)})};_.zip=function(){var a=_.max(_.pluck(arguments,'length').concat(0));var b=new Array(a);for(var i=0;i<a;i++){b[i]=_.pluck(arguments,''+i)}return b};_.object=function(a,b){if(a==null)return{};var c={};for(var i=0,length=a.length;i<length;i++){if(b){c[a[i]]=b[i]}else{c[a[i][0]]=a[i][1]}}return c};_.indexOf=function(a,b,c){if(a==null)return-1;var i=0,length=a.length;if(c){if(typeof c=='number'){i=(c<0?Math.max(0,length+c):c)}else{i=_.sortedIndex(a,b);return a[i]===b?i:-1}}if(nativeIndexOf&&a.indexOf===nativeIndexOf)return a.indexOf(b,c);for(;i<length;i++)if(a[i]===b)return i;return-1};_.lastIndexOf=function(a,b,c){if(a==null)return-1;var d=c!=null;if(nativeLastIndexOf&&a.lastIndexOf===nativeLastIndexOf){return d?a.lastIndexOf(b,c):a.lastIndexOf(b)}var i=(d?c:a.length);while(i--)if(a[i]===b)return i;return-1};_.range=function(a,b,c){if(arguments.length<=1){b=a||0;a=0}c=arguments[2]||1;var d=Math.max(Math.ceil((b-a)/c),0);var e=0;var f=new Array(d);while(e<d){f[e++]=a;a+=c}return f};var A=function(){};_.bind=function(c,d){var e,bound;if(nativeBind&&c.bind===nativeBind)return nativeBind.apply(c,slice.call(arguments,1));if(!_.isFunction(c))throw new TypeError;e=slice.call(arguments,2);return bound=function(){if(!(this instanceof bound))return c.apply(d,e.concat(slice.call(arguments)));A.prototype=c.prototype;var a=new A;A.prototype=null;var b=c.apply(a,e.concat(slice.call(arguments)));if(Object(b)===b)return b;return a}};_.partial=function(c){var d=slice.call(arguments,1);return function(){var a=0;var b=d.slice();for(var i=0,length=b.length;i<length;i++){if(b[i]===_)b[i]=arguments[a++]}while(a<arguments.length)b.push(arguments[a++]);return c.apply(this,b)}};_.bindAll=function(a){var b=slice.call(arguments,1);if(b.length===0)throw new Error('bindAll must be passed function names');u(b,function(f){a[f]=_.bind(a[f],a)});return a};_.memoize=function(b,c){var d={};c||(c=_.identity);return function(){var a=c.apply(this,arguments);return _.has(d,a)?d[a]:(d[a]=b.apply(this,arguments))}};_.delay=function(a,b){var c=slice.call(arguments,2);return setTimeout(function(){return a.apply(null,c)},b)};_.defer=function(a){return _.delay.apply(_,[a,1].concat(slice.call(arguments,1)))};_.throttle=function(c,d,e){var f,args,I;var g=null;var h=0;e||(e={});var i=function(){h=e.leading===false?0:_.now();g=null;I=c.apply(f,args);f=args=null};return function(){var a=_.now();if(!h&&e.leading===false)h=a;var b=d-(a-h);f=this;args=arguments;if(b<=0){clearTimeout(g);g=null;h=a;I=c.apply(f,args);f=args=null}else if(!g&&e.trailing!==false){g=setTimeout(i,b)}return I}};_.debounce=function(b,c,d){var e,args,context,timestamp,I;var f=function(){var a=_.now()-timestamp;if(a<c){e=setTimeout(f,c-a)}else{e=null;if(!d){I=b.apply(context,args);context=args=null}}};return function(){context=this;args=arguments;timestamp=_.now();var a=d&&!e;if(!e){e=setTimeout(f,c)}if(a){I=b.apply(context,args);context=args=null}return I}};_.once=function(a){var b=false,memo;return function(){if(b)return memo;b=true;memo=a.apply(this,arguments);a=null;return memo}};_.wrap=function(a,b){return _.partial(b,a)};_.compose=function(){var b=arguments;return function(){var a=arguments;for(var i=b.length-1;i>=0;i--){a=[b[i].apply(this,a)]}return a[0]}};_.after=function(a,b){return function(){if(--a<1){return b.apply(this,arguments)}}};_.keys=function(a){if(!_.isObject(a))return[];if(nativeKeys)return nativeKeys(a);var b=[];for(var c in a)if(_.has(a,c))b.push(c);return b};_.values=function(a){var b=_.keys(a);var c=b.length;var d=new Array(c);for(var i=0;i<c;i++){d[i]=a[b[i]]}return d};_.pairs=function(a){var b=_.keys(a);var c=b.length;var d=new Array(c);for(var i=0;i<c;i++){d[i]=[b[i],a[b[i]]]}return d};_.invert=function(a){var b={};var c=_.keys(a);for(var i=0,length=c.length;i<length;i++){b[a[c[i]]]=c[i]}return b};_.functions=_.methods=function(a){var b=[];for(var c in a){if(_.isFunction(a[c]))b.push(c)}return b.sort()};_.extend=function(c){u(slice.call(arguments,1),function(a){if(a){for(var b in a){c[b]=a[b]}}});return c};_.pick=function(b){var c={};var d=concat.apply(r,slice.call(arguments,1));u(d,function(a){if(a in b)c[a]=b[a]});return c};_.omit=function(a){var b={};var c=concat.apply(r,slice.call(arguments,1));for(var d in a){if(!_.contains(c,d))b[d]=a[d]}return b};_.defaults=function(c){u(slice.call(arguments,1),function(a){if(a){for(var b in a){if(c[b]===void 0)c[b]=a[b]}}});return c};_.clone=function(a){if(!_.isObject(a))return a;return _.isArray(a)?a.slice():_.extend({},a)};_.tap=function(a,b){b(a);return a};var B=function(a,b,c,d){if(a===b)return a!==0||1/a==1/b;if(a==null||b==null)return a===b;if(a instanceof _)a=a._wrapped;if(b instanceof _)b=b._wrapped;var e=toString.call(a);if(e!=toString.call(b))return false;switch(e){case'[object String]':return a==String(b);case'[object Number]':return a!=+a?b!=+b:(a==0?1/a==1/b:a==+b);case'[object Date]':case'[object Boolean]':return+a==+b;case'[object RegExp]':return a.source==b.source&&a.global==b.global&&a.multiline==b.multiline&&a.ignoreCase==b.ignoreCase}if(typeof a!='object'||typeof b!='object')return false;var f=c.length;while(f--){if(c[f]==a)return d[f]==b}var g=a.constructor,bCtor=b.constructor;if(g!==bCtor&&!(_.isFunction(g)&&(g instanceof g)&&_.isFunction(bCtor)&&(bCtor instanceof bCtor))&&('constructor'in a&&'constructor'in b)){return false}c.push(a);d.push(b);var h=0,I=true;if(e=='[object Array]'){h=a.length;I=h==b.length;if(I){while(h--){if(!(I=B(a[h],b[h],c,d)))break}}}else{for(var i in a){if(_.has(a,i)){h++;if(!(I=_.has(b,i)&&B(a[i],b[i],c,d)))break}}if(I){for(i in b){if(_.has(b,i)&&!(h--))break}I=!h}}c.pop();d.pop();return I};_.isEqual=function(a,b){return B(a,b,[],[])};_.isEmpty=function(a){if(a==null)return true;if(_.isArray(a)||_.isString(a))return a.length===0;for(var b in a)if(_.has(a,b))return false;return true};_.isElement=function(a){return!!(a&&a.nodeType===1)};_.isArray=nativeIsArray||function(a){return toString.call(a)=='[object Array]'};_.isObject=function(a){return a===Object(a)};u(['Arguments','Function','String','Number','Date','RegExp'],function(b){_['is'+b]=function(a){return toString.call(a)=='[object '+b+']'}});if(!_.isArguments(arguments)){_.isArguments=function(a){return!!(a&&_.has(a,'callee'))}}if(typeof(/./)!=='function'){_.isFunction=function(a){return typeof a==='function'}}_.isFinite=function(a){return isFinite(a)&&!isNaN(parseFloat(a))};_.isNaN=function(a){return _.isNumber(a)&&a!=+a};_.isBoolean=function(a){return a===true||a===false||toString.call(a)=='[object Boolean]'};_.isNull=function(a){return a===null};_.isUndefined=function(a){return a===void 0};_.has=function(a,b){return hasOwnProperty.call(a,b)};_.noConflict=function(){o._=p;return this};_.identity=function(a){return a};_.constant=function(a){return function(){return a}};_.property=function(b){return function(a){return a[b]}};_.matches=function(c){return function(a){if(a===c)return true;for(var b in c){if(c[b]!==a[b])return false}return true}};_.times=function(n,a,b){var c=Array(Math.max(0,n));for(var i=0;i<n;i++)c[i]=a.call(b,i);return c};_.random=function(a,b){if(b==null){b=a;a=0}return a+Math.floor(Math.random()*(b-a+1))};_.now=Date.now||function(){return new Date().getTime()};var C={escape:{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#x27;'}};C.unescape=_.invert(C.escape);var D={escape:new RegExp('['+_.keys(C.escape).join('')+']','g'),unescape:new RegExp('('+_.keys(C.unescape).join('|')+')','g')};_.each(['escape','unescape'],function(c){_[c]=function(b){if(b==null)return'';return(''+b).replace(D[c],function(a){return C[c][a]})}});_.result=function(a,b){if(a==null)return void 0;var c=a[b];return _.isFunction(c)?c.call(a):c};_.mixin=function(d){u(_.functions(d),function(b){var c=_[b]=d[b];_.prototype[b]=function(){var a=[this._wrapped];s.apply(a,arguments);return I.call(this,c.apply(_,a))}})};var E=0;_.uniqueId=function(a){var b=++E+'';return a?a+b:b};_.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var F=/(.)^/;var G={"'":"'",'\\':'\\','\r':'r','\n':'n','\t':'t','\u2028':'u2028','\u2029':'u2029'};var H=/\\|'|\r|\n|\t|\u2028|\u2029/g;_.template=function(g,h,i){var j;i=_.defaults({},i,_.templateSettings);var k=new RegExp([(i.escape||F).source,(i.interpolate||F).source,(i.evaluate||F).source].join('|')+'|$','g');var l=0;var m="__p+='";g.replace(k,function(b,c,d,e,f){m+=g.slice(l,f).replace(H,function(a){return'\\'+G[a]});if(c){m+="'+\n((__t=("+c+"))==null?'':_.escape(__t))+\n'"}if(d){m+="'+\n((__t=("+d+"))==null?'':__t)+\n'"}if(e){m+="';\n"+e+"\n__p+='"}l=f+b.length;return b});m+="';\n";if(!i.variable)m='with(obj||{}){\n'+m+'}\n';m="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+m+"return __p;\n";try{j=new Function(i.variable||'obj','_',m)}catch(e){e.source=m;throw e;}if(h)return j(h,_);var n=function(a){return j.call(this,a,_)};n.source='function('+(i.variable||'obj')+'){\n'+m+'}';return n};_.chain=function(a){return _(a).chain()};var I=function(a){return this._chain?_(a).chain():a};_.mixin(_);u(['pop','push','reverse','shift','sort','splice','unshift'],function(b){var c=r[b];_.prototype[b]=function(){var a=this._wrapped;c.apply(a,arguments);if((b=='shift'||b=='splice')&&a.length===0)delete a[0];return I.call(this,a)}});u(['concat','join','slice'],function(a){var b=r[a];_.prototype[a]=function(){return I.call(this,b.apply(this._wrapped,arguments))}});_.extend(_.prototype,{chain:function(){this._chain=true;return this},value:function(){return this._wrapped}});if(typeof define==='function'&&define.amd){define('underscore',[],function(){return _})}}).call(this);