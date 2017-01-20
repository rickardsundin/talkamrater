// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__51001_51015 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__51002_51016 = null;
var count__51003_51017 = (0);
var i__51004_51018 = (0);
while(true){
if((i__51004_51018 < count__51003_51017)){
var f_51019 = cljs.core._nth.call(null,chunk__51002_51016,i__51004_51018);
cljs.core.println.call(null,"  ",f_51019);

var G__51020 = seq__51001_51015;
var G__51021 = chunk__51002_51016;
var G__51022 = count__51003_51017;
var G__51023 = (i__51004_51018 + (1));
seq__51001_51015 = G__51020;
chunk__51002_51016 = G__51021;
count__51003_51017 = G__51022;
i__51004_51018 = G__51023;
continue;
} else {
var temp__4425__auto___51024 = cljs.core.seq.call(null,seq__51001_51015);
if(temp__4425__auto___51024){
var seq__51001_51025__$1 = temp__4425__auto___51024;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51001_51025__$1)){
var c__36641__auto___51026 = cljs.core.chunk_first.call(null,seq__51001_51025__$1);
var G__51027 = cljs.core.chunk_rest.call(null,seq__51001_51025__$1);
var G__51028 = c__36641__auto___51026;
var G__51029 = cljs.core.count.call(null,c__36641__auto___51026);
var G__51030 = (0);
seq__51001_51015 = G__51027;
chunk__51002_51016 = G__51028;
count__51003_51017 = G__51029;
i__51004_51018 = G__51030;
continue;
} else {
var f_51031 = cljs.core.first.call(null,seq__51001_51025__$1);
cljs.core.println.call(null,"  ",f_51031);

var G__51032 = cljs.core.next.call(null,seq__51001_51025__$1);
var G__51033 = null;
var G__51034 = (0);
var G__51035 = (0);
seq__51001_51015 = G__51032;
chunk__51002_51016 = G__51033;
count__51003_51017 = G__51034;
i__51004_51018 = G__51035;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_51036 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__35838__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__35838__auto__)){
return or__35838__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_51036);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_51036)))?cljs.core.second.call(null,arglists_51036):arglists_51036));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__51005 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__51006 = null;
var count__51007 = (0);
var i__51008 = (0);
while(true){
if((i__51008 < count__51007)){
var vec__51009 = cljs.core._nth.call(null,chunk__51006,i__51008);
var name = cljs.core.nth.call(null,vec__51009,(0),null);
var map__51010 = cljs.core.nth.call(null,vec__51009,(1),null);
var map__51010__$1 = ((((!((map__51010 == null)))?((((map__51010.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51010.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51010):map__51010);
var doc = cljs.core.get.call(null,map__51010__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__51010__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__51037 = seq__51005;
var G__51038 = chunk__51006;
var G__51039 = count__51007;
var G__51040 = (i__51008 + (1));
seq__51005 = G__51037;
chunk__51006 = G__51038;
count__51007 = G__51039;
i__51008 = G__51040;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__51005);
if(temp__4425__auto__){
var seq__51005__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51005__$1)){
var c__36641__auto__ = cljs.core.chunk_first.call(null,seq__51005__$1);
var G__51041 = cljs.core.chunk_rest.call(null,seq__51005__$1);
var G__51042 = c__36641__auto__;
var G__51043 = cljs.core.count.call(null,c__36641__auto__);
var G__51044 = (0);
seq__51005 = G__51041;
chunk__51006 = G__51042;
count__51007 = G__51043;
i__51008 = G__51044;
continue;
} else {
var vec__51012 = cljs.core.first.call(null,seq__51005__$1);
var name = cljs.core.nth.call(null,vec__51012,(0),null);
var map__51013 = cljs.core.nth.call(null,vec__51012,(1),null);
var map__51013__$1 = ((((!((map__51013 == null)))?((((map__51013.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51013.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51013):map__51013);
var doc = cljs.core.get.call(null,map__51013__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__51013__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__51045 = cljs.core.next.call(null,seq__51005__$1);
var G__51046 = null;
var G__51047 = (0);
var G__51048 = (0);
seq__51005 = G__51045;
chunk__51006 = G__51046;
count__51007 = G__51047;
i__51008 = G__51048;
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
}
});

//# sourceMappingURL=repl.js.map