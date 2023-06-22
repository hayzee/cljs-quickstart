// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__980){
var map__981 = p__980;
var map__981__$1 = cljs.core.__destructure_map.call(null,map__981);
var m = map__981__$1;
var n = cljs.core.get.call(null,map__981__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__981__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__1469__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__1469__auto__)){
return or__1469__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__982_1010 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__983_1011 = null;
var count__984_1012 = (0);
var i__985_1013 = (0);
while(true){
if((i__985_1013 < count__984_1012)){
var f_1014 = cljs.core._nth.call(null,chunk__983_1011,i__985_1013);
cljs.core.println.call(null,"  ",f_1014);


var G__1015 = seq__982_1010;
var G__1016 = chunk__983_1011;
var G__1017 = count__984_1012;
var G__1018 = (i__985_1013 + (1));
seq__982_1010 = G__1015;
chunk__983_1011 = G__1016;
count__984_1012 = G__1017;
i__985_1013 = G__1018;
continue;
} else {
var temp__5720__auto___1019 = cljs.core.seq.call(null,seq__982_1010);
if(temp__5720__auto___1019){
var seq__982_1020__$1 = temp__5720__auto___1019;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__982_1020__$1)){
var c__1992__auto___1021 = cljs.core.chunk_first.call(null,seq__982_1020__$1);
var G__1022 = cljs.core.chunk_rest.call(null,seq__982_1020__$1);
var G__1023 = c__1992__auto___1021;
var G__1024 = cljs.core.count.call(null,c__1992__auto___1021);
var G__1025 = (0);
seq__982_1010 = G__1022;
chunk__983_1011 = G__1023;
count__984_1012 = G__1024;
i__985_1013 = G__1025;
continue;
} else {
var f_1026 = cljs.core.first.call(null,seq__982_1020__$1);
cljs.core.println.call(null,"  ",f_1026);


var G__1027 = cljs.core.next.call(null,seq__982_1020__$1);
var G__1028 = null;
var G__1029 = (0);
var G__1030 = (0);
seq__982_1010 = G__1027;
chunk__983_1011 = G__1028;
count__984_1012 = G__1029;
i__985_1013 = G__1030;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_1031 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__1469__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__1469__auto__)){
return or__1469__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_1031);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_1031)))?cljs.core.second.call(null,arglists_1031):arglists_1031));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__986_1032 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__987_1033 = null;
var count__988_1034 = (0);
var i__989_1035 = (0);
while(true){
if((i__989_1035 < count__988_1034)){
var vec__998_1036 = cljs.core._nth.call(null,chunk__987_1033,i__989_1035);
var name_1037 = cljs.core.nth.call(null,vec__998_1036,(0),null);
var map__1001_1038 = cljs.core.nth.call(null,vec__998_1036,(1),null);
var map__1001_1039__$1 = cljs.core.__destructure_map.call(null,map__1001_1038);
var doc_1040 = cljs.core.get.call(null,map__1001_1039__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1041 = cljs.core.get.call(null,map__1001_1039__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1037);

cljs.core.println.call(null," ",arglists_1041);

if(cljs.core.truth_(doc_1040)){
cljs.core.println.call(null," ",doc_1040);
} else {
}


var G__1042 = seq__986_1032;
var G__1043 = chunk__987_1033;
var G__1044 = count__988_1034;
var G__1045 = (i__989_1035 + (1));
seq__986_1032 = G__1042;
chunk__987_1033 = G__1043;
count__988_1034 = G__1044;
i__989_1035 = G__1045;
continue;
} else {
var temp__5720__auto___1046 = cljs.core.seq.call(null,seq__986_1032);
if(temp__5720__auto___1046){
var seq__986_1047__$1 = temp__5720__auto___1046;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__986_1047__$1)){
var c__1992__auto___1048 = cljs.core.chunk_first.call(null,seq__986_1047__$1);
var G__1049 = cljs.core.chunk_rest.call(null,seq__986_1047__$1);
var G__1050 = c__1992__auto___1048;
var G__1051 = cljs.core.count.call(null,c__1992__auto___1048);
var G__1052 = (0);
seq__986_1032 = G__1049;
chunk__987_1033 = G__1050;
count__988_1034 = G__1051;
i__989_1035 = G__1052;
continue;
} else {
var vec__1002_1053 = cljs.core.first.call(null,seq__986_1047__$1);
var name_1054 = cljs.core.nth.call(null,vec__1002_1053,(0),null);
var map__1005_1055 = cljs.core.nth.call(null,vec__1002_1053,(1),null);
var map__1005_1056__$1 = cljs.core.__destructure_map.call(null,map__1005_1055);
var doc_1057 = cljs.core.get.call(null,map__1005_1056__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1058 = cljs.core.get.call(null,map__1005_1056__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1054);

cljs.core.println.call(null," ",arglists_1058);

if(cljs.core.truth_(doc_1057)){
cljs.core.println.call(null," ",doc_1057);
} else {
}


var G__1059 = cljs.core.next.call(null,seq__986_1047__$1);
var G__1060 = null;
var G__1061 = (0);
var G__1062 = (0);
seq__986_1032 = G__1059;
chunk__987_1033 = G__1060;
count__988_1034 = G__1061;
i__989_1035 = G__1062;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__1006 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__1007 = null;
var count__1008 = (0);
var i__1009 = (0);
while(true){
if((i__1009 < count__1008)){
var role = cljs.core._nth.call(null,chunk__1007,i__1009);
var temp__5720__auto___1063__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___1063__$1)){
var spec_1064 = temp__5720__auto___1063__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_1064));
} else {
}


var G__1065 = seq__1006;
var G__1066 = chunk__1007;
var G__1067 = count__1008;
var G__1068 = (i__1009 + (1));
seq__1006 = G__1065;
chunk__1007 = G__1066;
count__1008 = G__1067;
i__1009 = G__1068;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__1006);
if(temp__5720__auto____$1){
var seq__1006__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1006__$1)){
var c__1992__auto__ = cljs.core.chunk_first.call(null,seq__1006__$1);
var G__1069 = cljs.core.chunk_rest.call(null,seq__1006__$1);
var G__1070 = c__1992__auto__;
var G__1071 = cljs.core.count.call(null,c__1992__auto__);
var G__1072 = (0);
seq__1006 = G__1069;
chunk__1007 = G__1070;
count__1008 = G__1071;
i__1009 = G__1072;
continue;
} else {
var role = cljs.core.first.call(null,seq__1006__$1);
var temp__5720__auto___1073__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___1073__$2)){
var spec_1074 = temp__5720__auto___1073__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_1074));
} else {
}


var G__1075 = cljs.core.next.call(null,seq__1006__$1);
var G__1076 = null;
var G__1077 = (0);
var G__1078 = (0);
seq__1006 = G__1075;
chunk__1007 = G__1076;
count__1008 = G__1077;
i__1009 = G__1078;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__1079 = cljs.core.conj.call(null,via,t);
var G__1080 = cljs.core.ex_cause.call(null,t);
via = G__1079;
t = G__1080;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__1083 = datafied_throwable;
var map__1083__$1 = cljs.core.__destructure_map.call(null,map__1083);
var via = cljs.core.get.call(null,map__1083__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__1083__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__1083__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__1084 = cljs.core.last.call(null,via);
var map__1084__$1 = cljs.core.__destructure_map.call(null,map__1084);
var type = cljs.core.get.call(null,map__1084__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__1084__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__1084__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__1085 = data;
var map__1085__$1 = cljs.core.__destructure_map.call(null,map__1085);
var problems = cljs.core.get.call(null,map__1085__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__1085__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__1085__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__1086 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__1086__$1 = cljs.core.__destructure_map.call(null,map__1086);
var top_data = map__1086__$1;
var source = cljs.core.get.call(null,map__1086__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__1087 = phase;
var G__1087__$1 = (((G__1087 instanceof cljs.core.Keyword))?G__1087.fqn:null);
switch (G__1087__$1) {
case "read-source":
var map__1088 = data;
var map__1088__$1 = cljs.core.__destructure_map.call(null,map__1088);
var line = cljs.core.get.call(null,map__1088__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__1088__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__1089 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__1089__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__1089,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__1089);
var G__1089__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__1089__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__1089__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__1089__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__1089__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__1090 = top_data;
var G__1090__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__1090,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__1090);
var G__1090__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__1090__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__1090__$1);
var G__1090__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__1090__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__1090__$2);
var G__1090__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__1090__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__1090__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__1090__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__1090__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__1091 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__1091,(0),null);
var method = cljs.core.nth.call(null,vec__1091,(1),null);
var file = cljs.core.nth.call(null,vec__1091,(2),null);
var line = cljs.core.nth.call(null,vec__1091,(3),null);
var G__1094 = top_data;
var G__1094__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__1094,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__1094);
var G__1094__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__1094__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__1094__$1);
var G__1094__$3 = (cljs.core.truth_((function (){var and__1467__auto__ = source__$1;
if(cljs.core.truth_(and__1467__auto__)){
return method;
} else {
return and__1467__auto__;
}
})())?cljs.core.assoc.call(null,G__1094__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__1094__$2);
var G__1094__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__1094__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__1094__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__1094__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__1094__$4;
}

break;
case "execution":
var vec__1095 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__1095,(0),null);
var method = cljs.core.nth.call(null,vec__1095,(1),null);
var file = cljs.core.nth.call(null,vec__1095,(2),null);
var line = cljs.core.nth.call(null,vec__1095,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__1082_SHARP_){
var or__1469__auto__ = (p1__1082_SHARP_ == null);
if(or__1469__auto__){
return or__1469__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__1082_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__1469__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__1469__auto__)){
return or__1469__auto__;
} else {
return line;
}
})();
var G__1098 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__1098__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__1098,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__1098);
var G__1098__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__1098__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__1098__$1);
var G__1098__$3 = (cljs.core.truth_((function (){var or__1469__auto__ = fn;
if(cljs.core.truth_(or__1469__auto__)){
return or__1469__auto__;
} else {
var and__1467__auto__ = source__$1;
if(cljs.core.truth_(and__1467__auto__)){
return method;
} else {
return and__1467__auto__;
}
}
})())?cljs.core.assoc.call(null,G__1098__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__1469__auto__ = fn;
if(cljs.core.truth_(or__1469__auto__)){
return or__1469__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__1098__$2);
var G__1098__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__1098__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__1098__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__1098__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__1098__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1087__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__1102){
var map__1103 = p__1102;
var map__1103__$1 = cljs.core.__destructure_map.call(null,map__1103);
var triage_data = map__1103__$1;
var phase = cljs.core.get.call(null,map__1103__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__1103__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__1103__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__1103__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__1103__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__1103__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__1103__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__1103__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__1469__auto__ = source;
if(cljs.core.truth_(or__1469__auto__)){
return or__1469__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__1469__auto__ = line;
if(cljs.core.truth_(or__1469__auto__)){
return or__1469__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__1469__auto__ = class$;
if(cljs.core.truth_(or__1469__auto__)){
return or__1469__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__1104 = phase;
var G__1104__$1 = (((G__1104 instanceof cljs.core.Keyword))?G__1104.fqn:null);
switch (G__1104__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__2114__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__1105_1114 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__1106_1115 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__1107_1116 = true;
var _STAR_print_fn_STAR__temp_val__1108_1117 = (function (x__2115__auto__){
return sb__2114__auto__.append(x__2115__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__1107_1116);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__1108_1117);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__1100_SHARP_){
return cljs.core.dissoc.call(null,p1__1100_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__1106_1115);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__1105_1114);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__2114__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__2114__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__1109_1118 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__1110_1119 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__1111_1120 = true;
var _STAR_print_fn_STAR__temp_val__1112_1121 = (function (x__2115__auto__){
return sb__2114__auto__.append(x__2115__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__1111_1120);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__1112_1121);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__1101_SHARP_){
return cljs.core.dissoc.call(null,p1__1101_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__1110_1119);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__1109_1118);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__2114__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1104__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
