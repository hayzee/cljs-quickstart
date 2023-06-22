// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('goog.Uri');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((!((self__.cached == null)))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
(self__.cached = x);
}

return x;
}
}));

(cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true);

(cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar");

(cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__1754__auto__,writer__1755__auto__,opt__1756__auto__){
return cljs.core._write.call(null,writer__1755__auto__,"cljs.spec.gen.alpha/LazyVar");
}));

/**
 * Positional factory function for cljs.spec.gen.alpha/LazyVar.
 */
cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__2199__auto__ = [];
var len__2193__auto___136 = arguments.length;
var i__2194__auto___137 = (0);
while(true){
if((i__2194__auto___137 < len__2193__auto___136)){
args__2199__auto__.push((arguments[i__2194__auto___137]));

var G__138 = (i__2194__auto___137 + (1));
i__2194__auto___137 = G__138;
continue;
} else {
}
break;
}

var argseq__2200__auto__ = ((((0) < args__2199__auto__.length))?(new cljs.core.IndexedSeq(args__2199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__2200__auto__);
});

(cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
}));

(cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq135){
var self__2179__auto__ = this;
return self__2179__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq135));
}));

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__2199__auto__ = [];
var len__2193__auto___140 = arguments.length;
var i__2194__auto___141 = (0);
while(true){
if((i__2194__auto___141 < len__2193__auto___140)){
args__2199__auto__.push((arguments[i__2194__auto___141]));

var G__142 = (i__2194__auto___141 + (1));
i__2194__auto___141 = G__142;
continue;
} else {
}
break;
}

var argseq__2200__auto__ = ((((0) < args__2199__auto__.length))?(new cljs.core.IndexedSeq(args__2199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__2200__auto__);
});

(cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
}));

(cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq139){
var self__2179__auto__ = this;
return self__2179__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq139));
}));

var g_QMARK__143 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," never required"].join('')));
}
}),null));
var g_144 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," never required"].join('')));
}
}),null));
var mkg_145 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.generator_QMARK_ = (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__143).call(null,x);
});

cljs.spec.gen.alpha.generator = (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_145).call(null,gfn);
});

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_144).call(null,generator);
});
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__170__auto___166 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = (function cljs$spec$gen$alpha$hash_map(var_args){
var args__2199__auto__ = [];
var len__2193__auto___167 = arguments.length;
var i__2194__auto___168 = (0);
while(true){
if((i__2194__auto___168 < len__2193__auto___167)){
args__2199__auto__.push((arguments[i__2194__auto___168]));

var G__169 = (i__2194__auto___168 + (1));
i__2194__auto___168 = G__169;
continue;
} else {
}
break;
}

var argseq__2200__auto__ = ((((0) < args__2199__auto__.length))?(new cljs.core.IndexedSeq(args__2199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__2200__auto__);
});

(cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__170__auto___166),args);
}));

(cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = (function (seq146){
var self__2179__auto__ = this;
return self__2179__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq146));
}));


var g__170__auto___170 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = (function cljs$spec$gen$alpha$list(var_args){
var args__2199__auto__ = [];
var len__2193__auto___171 = arguments.length;
var i__2194__auto___172 = (0);
while(true){
if((i__2194__auto___172 < len__2193__auto___171)){
args__2199__auto__.push((arguments[i__2194__auto___172]));

var G__173 = (i__2194__auto___172 + (1));
i__2194__auto___172 = G__173;
continue;
} else {
}
break;
}

var argseq__2200__auto__ = ((((0) < args__2199__auto__.length))?(new cljs.core.IndexedSeq(args__2199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__2200__auto__);
});

(cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__170__auto___170),args);
}));

(cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.list.cljs$lang$applyTo = (function (seq147){
var self__2179__auto__ = this;
return self__2179__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq147));
}));


var g__170__auto___174 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = (function cljs$spec$gen$alpha$map(var_args){
var args__2199__auto__ = [];
var len__2193__auto___175 = arguments.length;
var i__2194__auto___176 = (0);
while(true){
if((i__2194__auto___176 < len__2193__auto___175)){
args__2199__auto__.push((arguments[i__2194__auto___176]));

var G__177 = (i__2194__auto___176 + (1));
i__2194__auto___176 = G__177;
continue;
} else {
}
break;
}

var argseq__2200__auto__ = ((((0) < args__2199__auto__.length))?(new cljs.core.IndexedSeq(args__2199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__2200__auto__);
});

(cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__170__auto___174),args);
}));

(cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.map.cljs$lang$applyTo = (function (seq148){
var self__2179__auto__ = this;
return self__2179__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq148));
}));


var g__170__auto___178 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = (function cljs$spec$gen$alpha$not_empty(var_args){
var args__2199__auto__ = [];
var len__2193__auto___179 = arguments.length;
var i__2194__auto___180 = (0);
while(true){
if((i__2194__auto___180 < len__2193__auto___179)){
args__2199__auto__.push((arguments[i__2194__auto___180]));

var G__181 = (i__2194__auto___180 + (1));
i__2194__auto___180 = G__181;
continue;
} else {
}
break;
}

var argseq__2200__auto__ = ((((0) < args__2199__auto__.length))?(new cljs.core.IndexedSeq(args__2199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__2200__auto__);
});

(cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__170__auto___178),args);
}));

(cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = (function (seq149){
var self__2179__auto__ = this;
return self__2179__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq149));
}));


var g__170__auto___182 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = (function cljs$spec$gen$alpha$set(var_args){
var args__2199__auto__ = [];
var len__2193__auto___183 = arguments.length;
var i__2194__auto___184 = (0);
while(true){
if((i__2194__auto___184 < len__2193__auto___183)){
args__2199__auto__.push((arguments[i__2194__auto___184]));

var G__185 = (i__2194__auto___184 + (1));
i__2194__auto___184 = G__185;
continue;
} else {
}
break;
}

var argseq__2200__auto__ = ((((0) < args__2199__auto__.length))?(new cljs.core.IndexedSeq(args__2199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__2200__auto__);
});

(cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__170__auto___182),args);
}));

(cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.set.cljs$lang$applyTo = (function (seq150){
var self__2179__auto__ = this;
return self__2179__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq150));
}));


var g__170__auto___186 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = (function cljs$spec$gen$alpha$vector(var_args){
var args__2199__auto__ = [];
var len__2193__auto___187 = arguments.length;
var i__2194__auto___188 = (0);
while(true){
if((i__2194__auto___188 < len__2193__auto___187)){
args__2199__auto__.push((arguments[i__2194__auto___188]));

var G__189 = (i__2194__auto___188 + (1));
i__2194__auto___188 = G__189;
continue;
} else {
}
break;
}

var argseq__2200__auto__ = ((((0) < args__2199__auto__.length))?(new cljs.core.IndexedSeq(args__2199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__2200__auto__);
});

(cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__170__auto___186),args);
}));

(cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.vector.cljs$lang$applyTo = (function (seq151){
var self__2179__auto__ = this;
return self__2179__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq151));
}));


var g__170__auto___190 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__2199__auto__ = [];
var len__2193__auto___191 = arguments.length;
var i__2194__auto___192 = (0);
while(true){
if((i__2194__auto___192 < len__2193__auto___191)){
args__2199__auto__.push((arguments[i__2194__auto___192]));

var G__193 = (i__2194__auto___192 + (1));
i__2194__auto___192 = G__193;
continue;
} else {
}
break;
}

var argseq__2200__auto__ = ((((0) < args__2199__auto__.length))?(new cljs.core.IndexedSeq(args__2199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__2200__auto__);
});

(cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__170__auto___190),args);
}));

(cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = (function (seq152){
var self__2179__auto__ = this;
return self__2179__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq152));
}));


var g__170__auto___194 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = (function cljs$spec$gen$alpha$fmap(var_args){
var args__2199__auto__ = [];
var len__2193__auto___195 = arguments.length;
var i__2194__auto___196 = (0);
while(true){
if((i__2194__auto___196 < len__2193__auto___195)){
args__2199__auto__.push((arguments[i__2194__auto___196]));

var G__197 = (i__2194__auto___196 + (1));
i__2194__auto___196 = G__197;
continue;
} else {
}
break;
}

var argseq__2200__auto__ = ((((0) < args__2199__auto__.length))?(new cljs.core.IndexedSeq(args__2199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__2200__auto__);
});

(cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__170__auto___194),args);
}));

(cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = (function (seq153){
var self__2179__auto__ = this;
return self__2179__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq153));
}));


var g__170__auto___198 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = (function cljs$spec$gen$alpha$elements(var_args){
var args__2199__auto__ = [];
var len__2193__auto___199 = arguments.length;
var i__2194__auto___200 = (0);
while(true){
if((i__2194__auto___200 < len__2193__auto___199)){
args__2199__auto__.push((arguments[i__2194__auto___200]));

var G__201 = (i__2194__auto___200 + (1));
i__2194__auto___200 = G__201;
continue;
} else {
}
break;
}

var argseq__2200__auto__ = ((((0) < args__2199__auto__.length))?(new cljs.core.IndexedSeq(args__2199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__2200__auto__);
});

(cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__170__auto___198),args);
}));

(cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.elements.cljs$lang$applyTo = (function (seq154){
var self__2179__auto__ = this;
return self__2179__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq154));
}));


var g__170__auto___202 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = (function cljs$spec$gen$alpha$bind(var_args){
var args__2199__auto__ = [];
var len__2193__auto___203 = arguments.length;
var i__2194__auto___204 = (0);
while(true){
if((i__2194__auto___204 < len__2193__auto___203)){
args__2199__auto__.push((arguments[i__2194__auto___204]));

var G__205 = (i__2194__auto___204 + (1));
i__2194__auto___204 = G__205;
continue;
} else {
}
break;
}

var argseq__2200__auto__ = ((((0) < args__2199__auto__.length))?(new cljs.core.IndexedSeq(args__2199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__2200__auto__);
});

(cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__170__auto___202),args);
}));

(cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.bind.cljs$lang$applyTo = (function (seq155){
var self__2179__auto__ = this;
return self__2179__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq155));
}));


var g__170__auto___206 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = (function cljs$spec$gen$alpha$choose(var_args){
var args__2199__auto__ = [];
var len__2193__auto___207 = arguments.length;
var i__2194__auto___208 = (0);
while(true){
if((i__2194__auto___208 < len__2193__auto___207)){
args__2199__auto__.push((arguments[i__2194__auto___208]));

var G__209 = (i__2194__auto___208 + (1));
i__2194__auto___208 = G__209;
continue;
} else {
}
break;
}

var argseq__2200__auto__ = ((((0) < args__2199__auto__.length))?(new cljs.core.IndexedSeq(args__2199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__2200__auto__);
});

(cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__170__auto___206),args);
}));

(cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.choose.cljs$lang$applyTo = (function (seq156){
var self__2179__auto__ = this;
return self__2179__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq156));
}));


var g__170__auto___210 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = (function cljs$spec$gen$alpha$one_of(var_args){
var args__2199__auto__ = [];
var len__2193__auto___211 = arguments.length;
var i__2194__auto___212 = (0);
while(true){
if((i__2194__auto___212 < len__2193__auto___211)){
args__2199__auto__.push((arguments[i__2194__auto___212]));

var G__213 = (i__2194__auto___212 + (1));
i__2194__auto___212 = G__213;
continue;
} else {
}
break;
}

var argseq__2200__auto__ = ((((0) < args__2199__auto__.length))?(new cljs.core.IndexedSeq(args__2199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__2200__auto__);
});

(cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__170__auto___210),args);
}));

(cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = (function (seq157){
var self__2179__auto__ = this;
return self__2179__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq157));
}));


var g__170__auto___214 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = (function cljs$spec$gen$alpha$such_that(var_args){
var args__2199__auto__ = [];
var len__2193__auto___215 = arguments.length;
var i__2194__auto___216 = (0);
while(true){
if((i__2194__auto___216 < len__2193__auto___215)){
args__2199__auto__.push((arguments[i__2194__auto___216]));

var G__217 = (i__2194__auto___216 + (1));
i__2194__auto___216 = G__217;
continue;
} else {
}
break;
}

var argseq__2200__auto__ = ((((0) < args__2199__auto__.length))?(new cljs.core.IndexedSeq(args__2199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__2200__auto__);
});

(cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__170__auto___214),args);
}));

(cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = (function (seq158){
var self__2179__auto__ = this;
return self__2179__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq158));
}));


var g__170__auto___218 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = (function cljs$spec$gen$alpha$tuple(var_args){
var args__2199__auto__ = [];
var len__2193__auto___219 = arguments.length;
var i__2194__auto___220 = (0);
while(true){
if((i__2194__auto___220 < len__2193__auto___219)){
args__2199__auto__.push((arguments[i__2194__auto___220]));

var G__221 = (i__2194__auto___220 + (1));
i__2194__auto___220 = G__221;
continue;
} else {
}
break;
}

var argseq__2200__auto__ = ((((0) < args__2199__auto__.length))?(new cljs.core.IndexedSeq(args__2199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__2200__auto__);
});

(cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__170__auto___218),args);
}));

(cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = (function (seq159){
var self__2179__auto__ = this;
return self__2179__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq159));
}));


var g__170__auto___222 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = (function cljs$spec$gen$alpha$sample(var_args){
var args__2199__auto__ = [];
var len__2193__auto___223 = arguments.length;
var i__2194__auto___224 = (0);
while(true){
if((i__2194__auto___224 < len__2193__auto___223)){
args__2199__auto__.push((arguments[i__2194__auto___224]));

var G__225 = (i__2194__auto___224 + (1));
i__2194__auto___224 = G__225;
continue;
} else {
}
break;
}

var argseq__2200__auto__ = ((((0) < args__2199__auto__.length))?(new cljs.core.IndexedSeq(args__2199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__2200__auto__);
});

(cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__170__auto___222),args);
}));

(cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.sample.cljs$lang$applyTo = (function (seq160){
var self__2179__auto__ = this;
return self__2179__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq160));
}));


var g__170__auto___226 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = (function cljs$spec$gen$alpha$return(var_args){
var args__2199__auto__ = [];
var len__2193__auto___227 = arguments.length;
var i__2194__auto___228 = (0);
while(true){
if((i__2194__auto___228 < len__2193__auto___227)){
args__2199__auto__.push((arguments[i__2194__auto___228]));

var G__229 = (i__2194__auto___228 + (1));
i__2194__auto___228 = G__229;
continue;
} else {
}
break;
}

var argseq__2200__auto__ = ((((0) < args__2199__auto__.length))?(new cljs.core.IndexedSeq(args__2199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__2200__auto__);
});

(cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__170__auto___226),args);
}));

(cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.return$.cljs$lang$applyTo = (function (seq161){
var self__2179__auto__ = this;
return self__2179__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq161));
}));


var g__170__auto___230 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__2199__auto__ = [];
var len__2193__auto___231 = arguments.length;
var i__2194__auto___232 = (0);
while(true){
if((i__2194__auto___232 < len__2193__auto___231)){
args__2199__auto__.push((arguments[i__2194__auto___232]));

var G__233 = (i__2194__auto___232 + (1));
i__2194__auto___232 = G__233;
continue;
} else {
}
break;
}

var argseq__2200__auto__ = ((((0) < args__2199__auto__.length))?(new cljs.core.IndexedSeq(args__2199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__2200__auto__);
});

(cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__170__auto___230),args);
}));

(cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = (function (seq162){
var self__2179__auto__ = this;
return self__2179__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq162));
}));


var g__170__auto___234 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__2199__auto__ = [];
var len__2193__auto___235 = arguments.length;
var i__2194__auto___236 = (0);
while(true){
if((i__2194__auto___236 < len__2193__auto___235)){
args__2199__auto__.push((arguments[i__2194__auto___236]));

var G__237 = (i__2194__auto___236 + (1));
i__2194__auto___236 = G__237;
continue;
} else {
}
break;
}

var argseq__2200__auto__ = ((((0) < args__2199__auto__.length))?(new cljs.core.IndexedSeq(args__2199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__2200__auto__);
});

(cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__170__auto___234),args);
}));

(cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = (function (seq163){
var self__2179__auto__ = this;
return self__2179__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq163));
}));


var g__170__auto___238 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = (function cljs$spec$gen$alpha$frequency(var_args){
var args__2199__auto__ = [];
var len__2193__auto___239 = arguments.length;
var i__2194__auto___240 = (0);
while(true){
if((i__2194__auto___240 < len__2193__auto___239)){
args__2199__auto__.push((arguments[i__2194__auto___240]));

var G__241 = (i__2194__auto___240 + (1));
i__2194__auto___240 = G__241;
continue;
} else {
}
break;
}

var argseq__2200__auto__ = ((((0) < args__2199__auto__.length))?(new cljs.core.IndexedSeq(args__2199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__2200__auto__);
});

(cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__170__auto___238),args);
}));

(cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = (function (seq164){
var self__2179__auto__ = this;
return self__2179__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq164));
}));


var g__170__auto___242 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.shuffle !== 'undefined')){
return clojure.test.check.generators.shuffle;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","shuffle","clojure.test.check.generators/shuffle",1032401055,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","shuffle","clojure.test.check.generators/shuffle",1032401055,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/shuffle
 */
cljs.spec.gen.alpha.shuffle = (function cljs$spec$gen$alpha$shuffle(var_args){
var args__2199__auto__ = [];
var len__2193__auto___243 = arguments.length;
var i__2194__auto___244 = (0);
while(true){
if((i__2194__auto___244 < len__2193__auto___243)){
args__2199__auto__.push((arguments[i__2194__auto___244]));

var G__245 = (i__2194__auto___244 + (1));
i__2194__auto___244 = G__245;
continue;
} else {
}
break;
}

var argseq__2200__auto__ = ((((0) < args__2199__auto__.length))?(new cljs.core.IndexedSeq(args__2199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.shuffle.cljs$core$IFn$_invoke$arity$variadic(argseq__2200__auto__);
});

(cljs.spec.gen.alpha.shuffle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__170__auto___242),args);
}));

(cljs.spec.gen.alpha.shuffle.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.shuffle.cljs$lang$applyTo = (function (seq165){
var self__2179__auto__ = this;
return self__2179__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq165));
}));

var g__175__auto___267 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = (function cljs$spec$gen$alpha$any(var_args){
var args__2199__auto__ = [];
var len__2193__auto___268 = arguments.length;
var i__2194__auto___269 = (0);
while(true){
if((i__2194__auto___269 < len__2193__auto___268)){
args__2199__auto__.push((arguments[i__2194__auto___269]));

var G__270 = (i__2194__auto___269 + (1));
i__2194__auto___269 = G__270;
continue;
} else {
}
break;
}

var argseq__2200__auto__ = ((((0) < args__2199__auto__.length))?(new cljs.core.IndexedSeq(args__2199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__2200__auto__);
});

(cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.deref.call(null,g__175__auto___267);
}));

(cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.any.cljs$lang$applyTo = (function (seq246){
var self__2179__auto__ = this;
return self__2179__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq246));
}));


var g__175__auto___271 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = (function cljs$spec$gen$alpha$any_printable(var_args){
var args__2199__auto__ = [];
var len__2193__auto___272 = arguments.length;
var i__2194__auto___273 = (0);
while(true){
if((i__2194__auto___273 < len__2193__auto___272)){
args__2199__auto__.push((arguments[i__2194__auto___273]));

var G__274 = (i__2194__auto___273 + (1));
i__2194__auto___273 = G__274;
continue;
} else {
}
break;
}

var argseq__2200__auto__ = ((((0) < args__2199__auto__.length))?(new cljs.core.IndexedSeq(args__2199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__2200__auto__);
});

(cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.deref.call(null,g__175__auto___271);
}));

(cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = (function (seq247){
var self__2179__auto__ = this;
return self__2179__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq247));
}));


var g__175__auto___275 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = (function cljs$spec$gen$alpha$boolean(var_args){
var args__2199__auto__ = [];
var len__2193__auto___276 = arguments.length;
var i__2194__auto___277 = (0);
while(true){
if((i__2194__auto___277 < len__2193__auto___276)){
args__2199__auto__.push((arguments[i__2194__auto___277]));

var G__278 = (i__2194__auto___277 + (1));
i__2194__auto___277 = G__278;
continue;
} else {
}
break;
}

var argseq__2200__auto__ = ((((0) < args__2199__auto__.length))?(new cljs.core.IndexedSeq(args__2199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__2200__auto__);
});

(cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.deref.call(null,g__175__auto___275);
}));

(cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = (function (seq248){
var self__2179__auto__ = this;
return self__2179__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq248));
}));


var g__175__auto___279 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = (function cljs$spec$gen$alpha$char(var_args){
var args__2199__auto__ = [];
var len__2193__auto___280 = arguments.length;
var i__2194__auto___281 = (0);
while(true){
if((i__2194__auto___281 < len__2193__auto___280)){
args__2199__auto__.push((arguments[i__2194__auto___281]));

var G__282 = (i__2194__auto___281 + (1));
i__2194__auto___281 = G__282;
continue;
} else {
}
break;
}

var argseq__2200__auto__ = ((((0) < args__2199__auto__.length))?(new cljs.core.IndexedSeq(args__2199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__2200__auto__);
});

(cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.deref.call(null,g__175__auto___279);
}));

(cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.char$.cljs$lang$applyTo = (function (seq249){
var self__2179__auto__ = this;
return self__2179__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq249));
}));


var g__175__auto___283 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__2199__auto__ = [];
var len__2193__auto___284 = arguments.length;
var i__2194__auto___285 = (0);
while(true){
if((i__2194__auto___285 < len__2193__auto___284)){
args__2199__auto__.push((arguments[i__2194__auto___285]));

var G__286 = (i__2194__auto___285 + (1));
i__2194__auto___285 = G__286;
continue;
} else {
}
break;
}

var argseq__2200__auto__ = ((((0) < args__2199__auto__.length))?(new cljs.core.IndexedSeq(args__2199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__2200__auto__);
});

(cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.deref.call(null,g__175__auto___283);
}));

(cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = (function (seq250){
var self__2179__auto__ = this;
return self__2179__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq250));
}));


var g__175__auto___287 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__2199__auto__ = [];
var len__2193__auto___288 = arguments.length;
var i__2194__auto___289 = (0);
while(true){
if((i__2194__auto___289 < len__2193__auto___288)){
args__2199__auto__.push((arguments[i__2194__auto___289]));

var G__290 = (i__2194__auto___289 + (1));
i__2194__auto___289 = G__290;
continue;
} else {
}
break;
}

var argseq__2200__auto__ = ((((0) < args__2199__auto__.length))?(new cljs.core.IndexedSeq(args__2199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__2200__auto__);
});

(cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.deref.call(null,g__175__auto___287);
}));

(cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = (function (seq251){
var self__2179__auto__ = this;
return self__2179__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq251));
}));


var g__175__auto___291 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__2199__auto__ = [];
var len__2193__auto___292 = arguments.length;
var i__2194__auto___293 = (0);
while(true){
if((i__2194__auto___293 < len__2193__auto___292)){
args__2199__auto__.push((arguments[i__2194__auto___293]));

var G__294 = (i__2194__auto___293 + (1));
i__2194__auto___293 = G__294;
continue;
} else {
}
break;
}

var argseq__2200__auto__ = ((((0) < args__2199__auto__.length))?(new cljs.core.IndexedSeq(args__2199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__2200__auto__);
});

(cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.deref.call(null,g__175__auto___291);
}));

(cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = (function (seq252){
var self__2179__auto__ = this;
return self__2179__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq252));
}));


var g__175__auto___295 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = (function cljs$spec$gen$alpha$double(var_args){
var args__2199__auto__ = [];
var len__2193__auto___296 = arguments.length;
var i__2194__auto___297 = (0);
while(true){
if((i__2194__auto___297 < len__2193__auto___296)){
args__2199__auto__.push((arguments[i__2194__auto___297]));

var G__298 = (i__2194__auto___297 + (1));
i__2194__auto___297 = G__298;
continue;
} else {
}
break;
}

var argseq__2200__auto__ = ((((0) < args__2199__auto__.length))?(new cljs.core.IndexedSeq(args__2199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__2200__auto__);
});

(cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.deref.call(null,g__175__auto___295);
}));

(cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.double$.cljs$lang$applyTo = (function (seq253){
var self__2179__auto__ = this;
return self__2179__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq253));
}));


var g__175__auto___299 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = (function cljs$spec$gen$alpha$int(var_args){
var args__2199__auto__ = [];
var len__2193__auto___300 = arguments.length;
var i__2194__auto___301 = (0);
while(true){
if((i__2194__auto___301 < len__2193__auto___300)){
args__2199__auto__.push((arguments[i__2194__auto___301]));

var G__302 = (i__2194__auto___301 + (1));
i__2194__auto___301 = G__302;
continue;
} else {
}
break;
}

var argseq__2200__auto__ = ((((0) < args__2199__auto__.length))?(new cljs.core.IndexedSeq(args__2199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__2200__auto__);
});

(cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.deref.call(null,g__175__auto___299);
}));

(cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.int$.cljs$lang$applyTo = (function (seq254){
var self__2179__auto__ = this;
return self__2179__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq254));
}));


var g__175__auto___303 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = (function cljs$spec$gen$alpha$keyword(var_args){
var args__2199__auto__ = [];
var len__2193__auto___304 = arguments.length;
var i__2194__auto___305 = (0);
while(true){
if((i__2194__auto___305 < len__2193__auto___304)){
args__2199__auto__.push((arguments[i__2194__auto___305]));

var G__306 = (i__2194__auto___305 + (1));
i__2194__auto___305 = G__306;
continue;
} else {
}
break;
}

var argseq__2200__auto__ = ((((0) < args__2199__auto__.length))?(new cljs.core.IndexedSeq(args__2199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__2200__auto__);
});

(cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.deref.call(null,g__175__auto___303);
}));

(cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = (function (seq255){
var self__2179__auto__ = this;
return self__2179__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq255));
}));


var g__175__auto___307 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__2199__auto__ = [];
var len__2193__auto___308 = arguments.length;
var i__2194__auto___309 = (0);
while(true){
if((i__2194__auto___309 < len__2193__auto___308)){
args__2199__auto__.push((arguments[i__2194__auto___309]));

var G__310 = (i__2194__auto___309 + (1));
i__2194__auto___309 = G__310;
continue;
} else {
}
break;
}

var argseq__2200__auto__ = ((((0) < args__2199__auto__.length))?(new cljs.core.IndexedSeq(args__2199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__2200__auto__);
});

(cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.deref.call(null,g__175__auto___307);
}));

(cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = (function (seq256){
var self__2179__auto__ = this;
return self__2179__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq256));
}));


var g__175__auto___311 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = (function cljs$spec$gen$alpha$large_integer(var_args){
var args__2199__auto__ = [];
var len__2193__auto___312 = arguments.length;
var i__2194__auto___313 = (0);
while(true){
if((i__2194__auto___313 < len__2193__auto___312)){
args__2199__auto__.push((arguments[i__2194__auto___313]));

var G__314 = (i__2194__auto___313 + (1));
i__2194__auto___313 = G__314;
continue;
} else {
}
break;
}

var argseq__2200__auto__ = ((((0) < args__2199__auto__.length))?(new cljs.core.IndexedSeq(args__2199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__2200__auto__);
});

(cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.deref.call(null,g__175__auto___311);
}));

(cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = (function (seq257){
var self__2179__auto__ = this;
return self__2179__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq257));
}));


var g__175__auto___315 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = (function cljs$spec$gen$alpha$ratio(var_args){
var args__2199__auto__ = [];
var len__2193__auto___316 = arguments.length;
var i__2194__auto___317 = (0);
while(true){
if((i__2194__auto___317 < len__2193__auto___316)){
args__2199__auto__.push((arguments[i__2194__auto___317]));

var G__318 = (i__2194__auto___317 + (1));
i__2194__auto___317 = G__318;
continue;
} else {
}
break;
}

var argseq__2200__auto__ = ((((0) < args__2199__auto__.length))?(new cljs.core.IndexedSeq(args__2199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__2200__auto__);
});

(cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.deref.call(null,g__175__auto___315);
}));

(cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = (function (seq258){
var self__2179__auto__ = this;
return self__2179__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq258));
}));


var g__175__auto___319 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = (function cljs$spec$gen$alpha$simple_type(var_args){
var args__2199__auto__ = [];
var len__2193__auto___320 = arguments.length;
var i__2194__auto___321 = (0);
while(true){
if((i__2194__auto___321 < len__2193__auto___320)){
args__2199__auto__.push((arguments[i__2194__auto___321]));

var G__322 = (i__2194__auto___321 + (1));
i__2194__auto___321 = G__322;
continue;
} else {
}
break;
}

var argseq__2200__auto__ = ((((0) < args__2199__auto__.length))?(new cljs.core.IndexedSeq(args__2199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__2200__auto__);
});

(cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.deref.call(null,g__175__auto___319);
}));

(cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = (function (seq259){
var self__2179__auto__ = this;
return self__2179__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq259));
}));


var g__175__auto___323 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__2199__auto__ = [];
var len__2193__auto___324 = arguments.length;
var i__2194__auto___325 = (0);
while(true){
if((i__2194__auto___325 < len__2193__auto___324)){
args__2199__auto__.push((arguments[i__2194__auto___325]));

var G__326 = (i__2194__auto___325 + (1));
i__2194__auto___325 = G__326;
continue;
} else {
}
break;
}

var argseq__2200__auto__ = ((((0) < args__2199__auto__.length))?(new cljs.core.IndexedSeq(args__2199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__2200__auto__);
});

(cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.deref.call(null,g__175__auto___323);
}));

(cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = (function (seq260){
var self__2179__auto__ = this;
return self__2179__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq260));
}));


var g__175__auto___327 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = (function cljs$spec$gen$alpha$string(var_args){
var args__2199__auto__ = [];
var len__2193__auto___328 = arguments.length;
var i__2194__auto___329 = (0);
while(true){
if((i__2194__auto___329 < len__2193__auto___328)){
args__2199__auto__.push((arguments[i__2194__auto___329]));

var G__330 = (i__2194__auto___329 + (1));
i__2194__auto___329 = G__330;
continue;
} else {
}
break;
}

var argseq__2200__auto__ = ((((0) < args__2199__auto__.length))?(new cljs.core.IndexedSeq(args__2199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__2200__auto__);
});

(cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.deref.call(null,g__175__auto___327);
}));

(cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.string.cljs$lang$applyTo = (function (seq261){
var self__2179__auto__ = this;
return self__2179__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq261));
}));


var g__175__auto___331 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__2199__auto__ = [];
var len__2193__auto___332 = arguments.length;
var i__2194__auto___333 = (0);
while(true){
if((i__2194__auto___333 < len__2193__auto___332)){
args__2199__auto__.push((arguments[i__2194__auto___333]));

var G__334 = (i__2194__auto___333 + (1));
i__2194__auto___333 = G__334;
continue;
} else {
}
break;
}

var argseq__2200__auto__ = ((((0) < args__2199__auto__.length))?(new cljs.core.IndexedSeq(args__2199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__2200__auto__);
});

(cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.deref.call(null,g__175__auto___331);
}));

(cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = (function (seq262){
var self__2179__auto__ = this;
return self__2179__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq262));
}));


var g__175__auto___335 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__2199__auto__ = [];
var len__2193__auto___336 = arguments.length;
var i__2194__auto___337 = (0);
while(true){
if((i__2194__auto___337 < len__2193__auto___336)){
args__2199__auto__.push((arguments[i__2194__auto___337]));

var G__338 = (i__2194__auto___337 + (1));
i__2194__auto___337 = G__338;
continue;
} else {
}
break;
}

var argseq__2200__auto__ = ((((0) < args__2199__auto__.length))?(new cljs.core.IndexedSeq(args__2199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__2200__auto__);
});

(cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.deref.call(null,g__175__auto___335);
}));

(cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = (function (seq263){
var self__2179__auto__ = this;
return self__2179__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq263));
}));


var g__175__auto___339 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = (function cljs$spec$gen$alpha$symbol(var_args){
var args__2199__auto__ = [];
var len__2193__auto___340 = arguments.length;
var i__2194__auto___341 = (0);
while(true){
if((i__2194__auto___341 < len__2193__auto___340)){
args__2199__auto__.push((arguments[i__2194__auto___341]));

var G__342 = (i__2194__auto___341 + (1));
i__2194__auto___341 = G__342;
continue;
} else {
}
break;
}

var argseq__2200__auto__ = ((((0) < args__2199__auto__.length))?(new cljs.core.IndexedSeq(args__2199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__2200__auto__);
});

(cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.deref.call(null,g__175__auto___339);
}));

(cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = (function (seq264){
var self__2179__auto__ = this;
return self__2179__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq264));
}));


var g__175__auto___343 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__2199__auto__ = [];
var len__2193__auto___344 = arguments.length;
var i__2194__auto___345 = (0);
while(true){
if((i__2194__auto___345 < len__2193__auto___344)){
args__2199__auto__.push((arguments[i__2194__auto___345]));

var G__346 = (i__2194__auto___345 + (1));
i__2194__auto___345 = G__346;
continue;
} else {
}
break;
}

var argseq__2200__auto__ = ((((0) < args__2199__auto__.length))?(new cljs.core.IndexedSeq(args__2199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__2200__auto__);
});

(cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.deref.call(null,g__175__auto___343);
}));

(cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = (function (seq265){
var self__2179__auto__ = this;
return self__2179__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq265));
}));


var g__175__auto___347 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = (function cljs$spec$gen$alpha$uuid(var_args){
var args__2199__auto__ = [];
var len__2193__auto___348 = arguments.length;
var i__2194__auto___349 = (0);
while(true){
if((i__2194__auto___349 < len__2193__auto___348)){
args__2199__auto__.push((arguments[i__2194__auto___349]));

var G__350 = (i__2194__auto___349 + (1));
i__2194__auto___349 = G__350;
continue;
} else {
}
break;
}

var argseq__2200__auto__ = ((((0) < args__2199__auto__.length))?(new cljs.core.IndexedSeq(args__2199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__2200__auto__);
});

(cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.deref.call(null,g__175__auto___347);
}));

(cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = (function (seq266){
var self__2179__auto__ = this;
return self__2179__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq266));
}));

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__2199__auto__ = [];
var len__2193__auto___353 = arguments.length;
var i__2194__auto___354 = (0);
while(true){
if((i__2194__auto___354 < len__2193__auto___353)){
args__2199__auto__.push((arguments[i__2194__auto___354]));

var G__355 = (i__2194__auto___354 + (1));
i__2194__auto___354 = G__355;
continue;
} else {
}
break;
}

var argseq__2200__auto__ = ((((0) < args__2199__auto__.length))?(new cljs.core.IndexedSeq(args__2199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__2200__auto__);
});

(cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__351_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__351_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
}));

(cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq352){
var self__2179__auto__ = this;
return self__2179__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq352));
}));

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return (!((cljs.core.namespace.call(null,ident) == null)));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.some_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.uri_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.such_that.call(null,cljs.core.some_QMARK_,cljs.spec.gen.alpha.any_printable.call(null)),cljs.spec.gen.alpha.fmap.call(null,(function (p1__357_SHARP_){
return (new Date(p1__357_SHARP_));
}),cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.fmap.call(null,(function (p1__356_SHARP_){
return (new goog.Uri(["http://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__356_SHARP_),".com"].join('')));
}),cljs.spec.gen.alpha.uuid.call(null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map
