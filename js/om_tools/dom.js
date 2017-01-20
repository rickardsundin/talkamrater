// Compiled by ClojureScript 1.7.170 {}
goog.provide('om_tools.dom');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('om.dom');
/**
 * Converts kebab-case to camelCase
 */
om_tools.dom.camel_case = (function om_tools$dom$camel_case(s){
return clojure.string.replace.call(null,s,/-(\w)/,cljs.core.comp.call(null,clojure.string.upper_case,cljs.core.second));
});
/**
 * Converts attributes that are kebab-case and should be camelCase
 */
om_tools.dom.opt_key_case = (function om_tools$dom$opt_key_case(attr){
if(cljs.core.truth_((function (){var or__35838__auto__ = (cljs.core.count.call(null,attr) < (5));
if(or__35838__auto__){
return or__35838__auto__;
} else {
var G__43377 = cljs.core.subs.call(null,attr,(0),(5));
switch (G__43377) {
case "data-":
case "aria-":
return true;

break;
default:
return false;

}
}
})())){
return attr;
} else {
return om_tools.dom.camel_case.call(null,attr);
}
});
/**
 * Converts aliased attributes
 */
om_tools.dom.opt_key_alias = (function om_tools$dom$opt_key_alias(opt){
var G__43380 = (((opt instanceof cljs.core.Keyword))?opt.fqn:null);
switch (G__43380) {
case "class":
return new cljs.core.Keyword(null,"className","className",-1983287057);

break;
case "for":
return new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720);

break;
default:
return opt;

}
});
/**
 * Returns potentially formatted name for DOM element attribute.
 * Converts kebab-case to camelCase.
 */
om_tools.dom.format_opt_key = (function om_tools$dom$format_opt_key(opt_key){
return cljs.core.keyword.call(null,om_tools.dom.opt_key_case.call(null,cljs.core.name.call(null,om_tools.dom.opt_key_alias.call(null,opt_key))));
});
om_tools.dom.format_opts;
/**
 * Returns potentially modified value for DOM element attribute.
 * Recursively formats map values (ie :style attribute)
 */
om_tools.dom.format_opt_val = (function om_tools$dom$format_opt_val(opt_val){
if(cljs.core.map_QMARK_.call(null,opt_val)){
return om_tools.dom.format_opts.call(null,opt_val);
} else {
return opt_val;

}
});
/**
 * Returns JavaScript object for React DOM attributes from opts map
 */
om_tools.dom.format_opts = (function om_tools$dom$format_opts(opts){
if(cljs.core.map_QMARK_.call(null,opts)){
return cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__43384){
var vec__43385 = p__43384;
var k = cljs.core.nth.call(null,vec__43385,(0),null);
var v = cljs.core.nth.call(null,vec__43385,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tools.dom.format_opt_key.call(null,k),om_tools.dom.format_opt_val.call(null,v)], null);
}),opts)));
} else {
return opts;
}
});
om_tools.dom.possible_coll_QMARK_ = (function om_tools$dom$possible_coll_QMARK_(form){
return (cljs.core.coll_QMARK_.call(null,form)) || ((form instanceof cljs.core.Symbol)) || (cljs.core.list_QMARK_.call(null,form));
});
om_tools.dom.valid_element_QMARK_ = (function om_tools$dom$valid_element_QMARK_(x){
return (function (){var or__35838__auto__ = React.isValidElement;
if(cljs.core.truth_(or__35838__auto__)){
return or__35838__auto__;
} else {
return React.isValidComponent;
}
})().call(null,x);
});
om_tools.dom.js_opts_QMARK_ = (function om_tools$dom$js_opts_QMARK_(x){
return (cljs.core.object_QMARK_.call(null,x)) && (!(om_tools.dom.valid_element_QMARK_.call(null,x)));
});
/**
 * Returns a vector of [opts children] for from first and second
 *   argument given to DOM function
 */
om_tools.dom.element_args = (function om_tools$dom$element_args(opts,children){
if((opts == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,children], null);
} else {
if(cljs.core.map_QMARK_.call(null,opts)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tools.dom.format_opts.call(null,opts),children], null);
} else {
if(cljs.core.truth_(om_tools.dom.js_opts_QMARK_.call(null,opts))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [opts,children], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.cons.call(null,opts,children)], null);

}
}
}
});
om_tools.dom.element = (function om_tools$dom$element(ctor,opts,children){
var vec__43387 = om_tools.dom.element_args.call(null,opts,children);
var opts__$1 = cljs.core.nth.call(null,vec__43387,(0),null);
var children__$1 = cljs.core.nth.call(null,vec__43387,(1),null);
return cljs.core.apply.call(null,ctor,cljs.core.flatten.call(null,cljs.core.cons.call(null,opts__$1,children__$1)));
});
om_tools.dom.a = (function om_tools$dom$a(var_args){
var args43388 = [];
var len__36896__auto___44038 = arguments.length;
var i__36897__auto___44039 = (0);
while(true){
if((i__36897__auto___44039 < len__36896__auto___44038)){
args43388.push((arguments[i__36897__auto___44039]));

var G__44040 = (i__36897__auto___44039 + (1));
i__36897__auto___44039 = G__44040;
continue;
} else {
}
break;
}

var G__43392 = args43388.length;
switch (G__43392) {
case 0:
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43388.slice((1)),(0)));
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.a,null,null);
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.a,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.a.cljs$lang$applyTo = (function (seq43389){
var G__43390 = cljs.core.first.call(null,seq43389);
var seq43389__$1 = cljs.core.next.call(null,seq43389);
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic(G__43390,seq43389__$1);
});

om_tools.dom.a.cljs$lang$maxFixedArity = (1);

om_tools.dom.abbr = (function om_tools$dom$abbr(var_args){
var args43393 = [];
var len__36896__auto___44042 = arguments.length;
var i__36897__auto___44043 = (0);
while(true){
if((i__36897__auto___44043 < len__36896__auto___44042)){
args43393.push((arguments[i__36897__auto___44043]));

var G__44044 = (i__36897__auto___44043 + (1));
i__36897__auto___44043 = G__44044;
continue;
} else {
}
break;
}

var G__43397 = args43393.length;
switch (G__43397) {
case 0:
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43393.slice((1)),(0)));
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.abbr,null,null);
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.abbr,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.abbr.cljs$lang$applyTo = (function (seq43394){
var G__43395 = cljs.core.first.call(null,seq43394);
var seq43394__$1 = cljs.core.next.call(null,seq43394);
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(G__43395,seq43394__$1);
});

om_tools.dom.abbr.cljs$lang$maxFixedArity = (1);

om_tools.dom.address = (function om_tools$dom$address(var_args){
var args43398 = [];
var len__36896__auto___44046 = arguments.length;
var i__36897__auto___44047 = (0);
while(true){
if((i__36897__auto___44047 < len__36896__auto___44046)){
args43398.push((arguments[i__36897__auto___44047]));

var G__44048 = (i__36897__auto___44047 + (1));
i__36897__auto___44047 = G__44048;
continue;
} else {
}
break;
}

var G__43402 = args43398.length;
switch (G__43402) {
case 0:
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43398.slice((1)),(0)));
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.address,null,null);
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.address,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.address.cljs$lang$applyTo = (function (seq43399){
var G__43400 = cljs.core.first.call(null,seq43399);
var seq43399__$1 = cljs.core.next.call(null,seq43399);
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic(G__43400,seq43399__$1);
});

om_tools.dom.address.cljs$lang$maxFixedArity = (1);

om_tools.dom.area = (function om_tools$dom$area(var_args){
var args43403 = [];
var len__36896__auto___44050 = arguments.length;
var i__36897__auto___44051 = (0);
while(true){
if((i__36897__auto___44051 < len__36896__auto___44050)){
args43403.push((arguments[i__36897__auto___44051]));

var G__44052 = (i__36897__auto___44051 + (1));
i__36897__auto___44051 = G__44052;
continue;
} else {
}
break;
}

var G__43407 = args43403.length;
switch (G__43407) {
case 0:
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43403.slice((1)),(0)));
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.area,null,null);
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.area,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.area.cljs$lang$applyTo = (function (seq43404){
var G__43405 = cljs.core.first.call(null,seq43404);
var seq43404__$1 = cljs.core.next.call(null,seq43404);
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic(G__43405,seq43404__$1);
});

om_tools.dom.area.cljs$lang$maxFixedArity = (1);

om_tools.dom.article = (function om_tools$dom$article(var_args){
var args43408 = [];
var len__36896__auto___44054 = arguments.length;
var i__36897__auto___44055 = (0);
while(true){
if((i__36897__auto___44055 < len__36896__auto___44054)){
args43408.push((arguments[i__36897__auto___44055]));

var G__44056 = (i__36897__auto___44055 + (1));
i__36897__auto___44055 = G__44056;
continue;
} else {
}
break;
}

var G__43412 = args43408.length;
switch (G__43412) {
case 0:
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43408.slice((1)),(0)));
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.article,null,null);
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.article,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.article.cljs$lang$applyTo = (function (seq43409){
var G__43410 = cljs.core.first.call(null,seq43409);
var seq43409__$1 = cljs.core.next.call(null,seq43409);
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic(G__43410,seq43409__$1);
});

om_tools.dom.article.cljs$lang$maxFixedArity = (1);

om_tools.dom.aside = (function om_tools$dom$aside(var_args){
var args43413 = [];
var len__36896__auto___44058 = arguments.length;
var i__36897__auto___44059 = (0);
while(true){
if((i__36897__auto___44059 < len__36896__auto___44058)){
args43413.push((arguments[i__36897__auto___44059]));

var G__44060 = (i__36897__auto___44059 + (1));
i__36897__auto___44059 = G__44060;
continue;
} else {
}
break;
}

var G__43417 = args43413.length;
switch (G__43417) {
case 0:
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43413.slice((1)),(0)));
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.aside,null,null);
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.aside,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.aside.cljs$lang$applyTo = (function (seq43414){
var G__43415 = cljs.core.first.call(null,seq43414);
var seq43414__$1 = cljs.core.next.call(null,seq43414);
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic(G__43415,seq43414__$1);
});

om_tools.dom.aside.cljs$lang$maxFixedArity = (1);

om_tools.dom.audio = (function om_tools$dom$audio(var_args){
var args43418 = [];
var len__36896__auto___44062 = arguments.length;
var i__36897__auto___44063 = (0);
while(true){
if((i__36897__auto___44063 < len__36896__auto___44062)){
args43418.push((arguments[i__36897__auto___44063]));

var G__44064 = (i__36897__auto___44063 + (1));
i__36897__auto___44063 = G__44064;
continue;
} else {
}
break;
}

var G__43422 = args43418.length;
switch (G__43422) {
case 0:
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43418.slice((1)),(0)));
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.audio,null,null);
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.audio,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.audio.cljs$lang$applyTo = (function (seq43419){
var G__43420 = cljs.core.first.call(null,seq43419);
var seq43419__$1 = cljs.core.next.call(null,seq43419);
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic(G__43420,seq43419__$1);
});

om_tools.dom.audio.cljs$lang$maxFixedArity = (1);

om_tools.dom.b = (function om_tools$dom$b(var_args){
var args43423 = [];
var len__36896__auto___44066 = arguments.length;
var i__36897__auto___44067 = (0);
while(true){
if((i__36897__auto___44067 < len__36896__auto___44066)){
args43423.push((arguments[i__36897__auto___44067]));

var G__44068 = (i__36897__auto___44067 + (1));
i__36897__auto___44067 = G__44068;
continue;
} else {
}
break;
}

var G__43427 = args43423.length;
switch (G__43427) {
case 0:
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43423.slice((1)),(0)));
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.b,null,null);
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.b,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.b.cljs$lang$applyTo = (function (seq43424){
var G__43425 = cljs.core.first.call(null,seq43424);
var seq43424__$1 = cljs.core.next.call(null,seq43424);
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic(G__43425,seq43424__$1);
});

om_tools.dom.b.cljs$lang$maxFixedArity = (1);

om_tools.dom.base = (function om_tools$dom$base(var_args){
var args43428 = [];
var len__36896__auto___44070 = arguments.length;
var i__36897__auto___44071 = (0);
while(true){
if((i__36897__auto___44071 < len__36896__auto___44070)){
args43428.push((arguments[i__36897__auto___44071]));

var G__44072 = (i__36897__auto___44071 + (1));
i__36897__auto___44071 = G__44072;
continue;
} else {
}
break;
}

var G__43432 = args43428.length;
switch (G__43432) {
case 0:
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43428.slice((1)),(0)));
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.base,null,null);
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.base,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.base.cljs$lang$applyTo = (function (seq43429){
var G__43430 = cljs.core.first.call(null,seq43429);
var seq43429__$1 = cljs.core.next.call(null,seq43429);
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic(G__43430,seq43429__$1);
});

om_tools.dom.base.cljs$lang$maxFixedArity = (1);

om_tools.dom.bdi = (function om_tools$dom$bdi(var_args){
var args43433 = [];
var len__36896__auto___44074 = arguments.length;
var i__36897__auto___44075 = (0);
while(true){
if((i__36897__auto___44075 < len__36896__auto___44074)){
args43433.push((arguments[i__36897__auto___44075]));

var G__44076 = (i__36897__auto___44075 + (1));
i__36897__auto___44075 = G__44076;
continue;
} else {
}
break;
}

var G__43437 = args43433.length;
switch (G__43437) {
case 0:
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43433.slice((1)),(0)));
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdi,null,null);
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.bdi,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.bdi.cljs$lang$applyTo = (function (seq43434){
var G__43435 = cljs.core.first.call(null,seq43434);
var seq43434__$1 = cljs.core.next.call(null,seq43434);
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(G__43435,seq43434__$1);
});

om_tools.dom.bdi.cljs$lang$maxFixedArity = (1);

om_tools.dom.bdo = (function om_tools$dom$bdo(var_args){
var args43438 = [];
var len__36896__auto___44078 = arguments.length;
var i__36897__auto___44079 = (0);
while(true){
if((i__36897__auto___44079 < len__36896__auto___44078)){
args43438.push((arguments[i__36897__auto___44079]));

var G__44080 = (i__36897__auto___44079 + (1));
i__36897__auto___44079 = G__44080;
continue;
} else {
}
break;
}

var G__43442 = args43438.length;
switch (G__43442) {
case 0:
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43438.slice((1)),(0)));
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdo,null,null);
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.bdo,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.bdo.cljs$lang$applyTo = (function (seq43439){
var G__43440 = cljs.core.first.call(null,seq43439);
var seq43439__$1 = cljs.core.next.call(null,seq43439);
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(G__43440,seq43439__$1);
});

om_tools.dom.bdo.cljs$lang$maxFixedArity = (1);

om_tools.dom.big = (function om_tools$dom$big(var_args){
var args43443 = [];
var len__36896__auto___44082 = arguments.length;
var i__36897__auto___44083 = (0);
while(true){
if((i__36897__auto___44083 < len__36896__auto___44082)){
args43443.push((arguments[i__36897__auto___44083]));

var G__44084 = (i__36897__auto___44083 + (1));
i__36897__auto___44083 = G__44084;
continue;
} else {
}
break;
}

var G__43447 = args43443.length;
switch (G__43447) {
case 0:
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43443.slice((1)),(0)));
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.big,null,null);
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.big,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.big.cljs$lang$applyTo = (function (seq43444){
var G__43445 = cljs.core.first.call(null,seq43444);
var seq43444__$1 = cljs.core.next.call(null,seq43444);
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic(G__43445,seq43444__$1);
});

om_tools.dom.big.cljs$lang$maxFixedArity = (1);

om_tools.dom.blockquote = (function om_tools$dom$blockquote(var_args){
var args43448 = [];
var len__36896__auto___44086 = arguments.length;
var i__36897__auto___44087 = (0);
while(true){
if((i__36897__auto___44087 < len__36896__auto___44086)){
args43448.push((arguments[i__36897__auto___44087]));

var G__44088 = (i__36897__auto___44087 + (1));
i__36897__auto___44087 = G__44088;
continue;
} else {
}
break;
}

var G__43452 = args43448.length;
switch (G__43452) {
case 0:
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43448.slice((1)),(0)));
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.blockquote,null,null);
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.blockquote,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.blockquote.cljs$lang$applyTo = (function (seq43449){
var G__43450 = cljs.core.first.call(null,seq43449);
var seq43449__$1 = cljs.core.next.call(null,seq43449);
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(G__43450,seq43449__$1);
});

om_tools.dom.blockquote.cljs$lang$maxFixedArity = (1);

om_tools.dom.body = (function om_tools$dom$body(var_args){
var args43453 = [];
var len__36896__auto___44090 = arguments.length;
var i__36897__auto___44091 = (0);
while(true){
if((i__36897__auto___44091 < len__36896__auto___44090)){
args43453.push((arguments[i__36897__auto___44091]));

var G__44092 = (i__36897__auto___44091 + (1));
i__36897__auto___44091 = G__44092;
continue;
} else {
}
break;
}

var G__43457 = args43453.length;
switch (G__43457) {
case 0:
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43453.slice((1)),(0)));
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.body,null,null);
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.body,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.body.cljs$lang$applyTo = (function (seq43454){
var G__43455 = cljs.core.first.call(null,seq43454);
var seq43454__$1 = cljs.core.next.call(null,seq43454);
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic(G__43455,seq43454__$1);
});

om_tools.dom.body.cljs$lang$maxFixedArity = (1);

om_tools.dom.br = (function om_tools$dom$br(var_args){
var args43458 = [];
var len__36896__auto___44094 = arguments.length;
var i__36897__auto___44095 = (0);
while(true){
if((i__36897__auto___44095 < len__36896__auto___44094)){
args43458.push((arguments[i__36897__auto___44095]));

var G__44096 = (i__36897__auto___44095 + (1));
i__36897__auto___44095 = G__44096;
continue;
} else {
}
break;
}

var G__43462 = args43458.length;
switch (G__43462) {
case 0:
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43458.slice((1)),(0)));
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.br,null,null);
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.br,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.br.cljs$lang$applyTo = (function (seq43459){
var G__43460 = cljs.core.first.call(null,seq43459);
var seq43459__$1 = cljs.core.next.call(null,seq43459);
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic(G__43460,seq43459__$1);
});

om_tools.dom.br.cljs$lang$maxFixedArity = (1);

om_tools.dom.button = (function om_tools$dom$button(var_args){
var args43463 = [];
var len__36896__auto___44098 = arguments.length;
var i__36897__auto___44099 = (0);
while(true){
if((i__36897__auto___44099 < len__36896__auto___44098)){
args43463.push((arguments[i__36897__auto___44099]));

var G__44100 = (i__36897__auto___44099 + (1));
i__36897__auto___44099 = G__44100;
continue;
} else {
}
break;
}

var G__43467 = args43463.length;
switch (G__43467) {
case 0:
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43463.slice((1)),(0)));
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.button,null,null);
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.button,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.button.cljs$lang$applyTo = (function (seq43464){
var G__43465 = cljs.core.first.call(null,seq43464);
var seq43464__$1 = cljs.core.next.call(null,seq43464);
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic(G__43465,seq43464__$1);
});

om_tools.dom.button.cljs$lang$maxFixedArity = (1);

om_tools.dom.canvas = (function om_tools$dom$canvas(var_args){
var args43468 = [];
var len__36896__auto___44102 = arguments.length;
var i__36897__auto___44103 = (0);
while(true){
if((i__36897__auto___44103 < len__36896__auto___44102)){
args43468.push((arguments[i__36897__auto___44103]));

var G__44104 = (i__36897__auto___44103 + (1));
i__36897__auto___44103 = G__44104;
continue;
} else {
}
break;
}

var G__43472 = args43468.length;
switch (G__43472) {
case 0:
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43468.slice((1)),(0)));
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.canvas,null,null);
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.canvas,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.canvas.cljs$lang$applyTo = (function (seq43469){
var G__43470 = cljs.core.first.call(null,seq43469);
var seq43469__$1 = cljs.core.next.call(null,seq43469);
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(G__43470,seq43469__$1);
});

om_tools.dom.canvas.cljs$lang$maxFixedArity = (1);

om_tools.dom.caption = (function om_tools$dom$caption(var_args){
var args43473 = [];
var len__36896__auto___44106 = arguments.length;
var i__36897__auto___44107 = (0);
while(true){
if((i__36897__auto___44107 < len__36896__auto___44106)){
args43473.push((arguments[i__36897__auto___44107]));

var G__44108 = (i__36897__auto___44107 + (1));
i__36897__auto___44107 = G__44108;
continue;
} else {
}
break;
}

var G__43477 = args43473.length;
switch (G__43477) {
case 0:
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43473.slice((1)),(0)));
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.caption,null,null);
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.caption,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.caption.cljs$lang$applyTo = (function (seq43474){
var G__43475 = cljs.core.first.call(null,seq43474);
var seq43474__$1 = cljs.core.next.call(null,seq43474);
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic(G__43475,seq43474__$1);
});

om_tools.dom.caption.cljs$lang$maxFixedArity = (1);

om_tools.dom.cite = (function om_tools$dom$cite(var_args){
var args43478 = [];
var len__36896__auto___44110 = arguments.length;
var i__36897__auto___44111 = (0);
while(true){
if((i__36897__auto___44111 < len__36896__auto___44110)){
args43478.push((arguments[i__36897__auto___44111]));

var G__44112 = (i__36897__auto___44111 + (1));
i__36897__auto___44111 = G__44112;
continue;
} else {
}
break;
}

var G__43482 = args43478.length;
switch (G__43482) {
case 0:
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43478.slice((1)),(0)));
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.cite,null,null);
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.cite,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.cite.cljs$lang$applyTo = (function (seq43479){
var G__43480 = cljs.core.first.call(null,seq43479);
var seq43479__$1 = cljs.core.next.call(null,seq43479);
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic(G__43480,seq43479__$1);
});

om_tools.dom.cite.cljs$lang$maxFixedArity = (1);

om_tools.dom.code = (function om_tools$dom$code(var_args){
var args43483 = [];
var len__36896__auto___44114 = arguments.length;
var i__36897__auto___44115 = (0);
while(true){
if((i__36897__auto___44115 < len__36896__auto___44114)){
args43483.push((arguments[i__36897__auto___44115]));

var G__44116 = (i__36897__auto___44115 + (1));
i__36897__auto___44115 = G__44116;
continue;
} else {
}
break;
}

var G__43487 = args43483.length;
switch (G__43487) {
case 0:
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43483.slice((1)),(0)));
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.code,null,null);
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.code,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.code.cljs$lang$applyTo = (function (seq43484){
var G__43485 = cljs.core.first.call(null,seq43484);
var seq43484__$1 = cljs.core.next.call(null,seq43484);
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic(G__43485,seq43484__$1);
});

om_tools.dom.code.cljs$lang$maxFixedArity = (1);

om_tools.dom.col = (function om_tools$dom$col(var_args){
var args43488 = [];
var len__36896__auto___44118 = arguments.length;
var i__36897__auto___44119 = (0);
while(true){
if((i__36897__auto___44119 < len__36896__auto___44118)){
args43488.push((arguments[i__36897__auto___44119]));

var G__44120 = (i__36897__auto___44119 + (1));
i__36897__auto___44119 = G__44120;
continue;
} else {
}
break;
}

var G__43492 = args43488.length;
switch (G__43492) {
case 0:
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43488.slice((1)),(0)));
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.col,null,null);
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.col,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.col.cljs$lang$applyTo = (function (seq43489){
var G__43490 = cljs.core.first.call(null,seq43489);
var seq43489__$1 = cljs.core.next.call(null,seq43489);
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic(G__43490,seq43489__$1);
});

om_tools.dom.col.cljs$lang$maxFixedArity = (1);

om_tools.dom.colgroup = (function om_tools$dom$colgroup(var_args){
var args43493 = [];
var len__36896__auto___44122 = arguments.length;
var i__36897__auto___44123 = (0);
while(true){
if((i__36897__auto___44123 < len__36896__auto___44122)){
args43493.push((arguments[i__36897__auto___44123]));

var G__44124 = (i__36897__auto___44123 + (1));
i__36897__auto___44123 = G__44124;
continue;
} else {
}
break;
}

var G__43497 = args43493.length;
switch (G__43497) {
case 0:
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43493.slice((1)),(0)));
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.colgroup,null,null);
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.colgroup,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.colgroup.cljs$lang$applyTo = (function (seq43494){
var G__43495 = cljs.core.first.call(null,seq43494);
var seq43494__$1 = cljs.core.next.call(null,seq43494);
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(G__43495,seq43494__$1);
});

om_tools.dom.colgroup.cljs$lang$maxFixedArity = (1);

om_tools.dom.data = (function om_tools$dom$data(var_args){
var args43498 = [];
var len__36896__auto___44126 = arguments.length;
var i__36897__auto___44127 = (0);
while(true){
if((i__36897__auto___44127 < len__36896__auto___44126)){
args43498.push((arguments[i__36897__auto___44127]));

var G__44128 = (i__36897__auto___44127 + (1));
i__36897__auto___44127 = G__44128;
continue;
} else {
}
break;
}

var G__43502 = args43498.length;
switch (G__43502) {
case 0:
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43498.slice((1)),(0)));
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.data,null,null);
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.data,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.data.cljs$lang$applyTo = (function (seq43499){
var G__43500 = cljs.core.first.call(null,seq43499);
var seq43499__$1 = cljs.core.next.call(null,seq43499);
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic(G__43500,seq43499__$1);
});

om_tools.dom.data.cljs$lang$maxFixedArity = (1);

om_tools.dom.datalist = (function om_tools$dom$datalist(var_args){
var args43503 = [];
var len__36896__auto___44130 = arguments.length;
var i__36897__auto___44131 = (0);
while(true){
if((i__36897__auto___44131 < len__36896__auto___44130)){
args43503.push((arguments[i__36897__auto___44131]));

var G__44132 = (i__36897__auto___44131 + (1));
i__36897__auto___44131 = G__44132;
continue;
} else {
}
break;
}

var G__43507 = args43503.length;
switch (G__43507) {
case 0:
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43503.slice((1)),(0)));
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.datalist,null,null);
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.datalist,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.datalist.cljs$lang$applyTo = (function (seq43504){
var G__43505 = cljs.core.first.call(null,seq43504);
var seq43504__$1 = cljs.core.next.call(null,seq43504);
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(G__43505,seq43504__$1);
});

om_tools.dom.datalist.cljs$lang$maxFixedArity = (1);

om_tools.dom.dd = (function om_tools$dom$dd(var_args){
var args43508 = [];
var len__36896__auto___44134 = arguments.length;
var i__36897__auto___44135 = (0);
while(true){
if((i__36897__auto___44135 < len__36896__auto___44134)){
args43508.push((arguments[i__36897__auto___44135]));

var G__44136 = (i__36897__auto___44135 + (1));
i__36897__auto___44135 = G__44136;
continue;
} else {
}
break;
}

var G__43512 = args43508.length;
switch (G__43512) {
case 0:
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43508.slice((1)),(0)));
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dd,null,null);
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.dd,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.dd.cljs$lang$applyTo = (function (seq43509){
var G__43510 = cljs.core.first.call(null,seq43509);
var seq43509__$1 = cljs.core.next.call(null,seq43509);
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic(G__43510,seq43509__$1);
});

om_tools.dom.dd.cljs$lang$maxFixedArity = (1);

om_tools.dom.del = (function om_tools$dom$del(var_args){
var args43513 = [];
var len__36896__auto___44138 = arguments.length;
var i__36897__auto___44139 = (0);
while(true){
if((i__36897__auto___44139 < len__36896__auto___44138)){
args43513.push((arguments[i__36897__auto___44139]));

var G__44140 = (i__36897__auto___44139 + (1));
i__36897__auto___44139 = G__44140;
continue;
} else {
}
break;
}

var G__43517 = args43513.length;
switch (G__43517) {
case 0:
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43513.slice((1)),(0)));
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.del,null,null);
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.del,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.del.cljs$lang$applyTo = (function (seq43514){
var G__43515 = cljs.core.first.call(null,seq43514);
var seq43514__$1 = cljs.core.next.call(null,seq43514);
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic(G__43515,seq43514__$1);
});

om_tools.dom.del.cljs$lang$maxFixedArity = (1);

om_tools.dom.details = (function om_tools$dom$details(var_args){
var args43518 = [];
var len__36896__auto___44142 = arguments.length;
var i__36897__auto___44143 = (0);
while(true){
if((i__36897__auto___44143 < len__36896__auto___44142)){
args43518.push((arguments[i__36897__auto___44143]));

var G__44144 = (i__36897__auto___44143 + (1));
i__36897__auto___44143 = G__44144;
continue;
} else {
}
break;
}

var G__43522 = args43518.length;
switch (G__43522) {
case 0:
return om_tools.dom.details.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43518.slice((1)),(0)));
return om_tools.dom.details.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.details.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.details,null,null);
});

om_tools.dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.details,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.details.cljs$lang$applyTo = (function (seq43519){
var G__43520 = cljs.core.first.call(null,seq43519);
var seq43519__$1 = cljs.core.next.call(null,seq43519);
return om_tools.dom.details.cljs$core$IFn$_invoke$arity$variadic(G__43520,seq43519__$1);
});

om_tools.dom.details.cljs$lang$maxFixedArity = (1);

om_tools.dom.dfn = (function om_tools$dom$dfn(var_args){
var args43523 = [];
var len__36896__auto___44146 = arguments.length;
var i__36897__auto___44147 = (0);
while(true){
if((i__36897__auto___44147 < len__36896__auto___44146)){
args43523.push((arguments[i__36897__auto___44147]));

var G__44148 = (i__36897__auto___44147 + (1));
i__36897__auto___44147 = G__44148;
continue;
} else {
}
break;
}

var G__43527 = args43523.length;
switch (G__43527) {
case 0:
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43523.slice((1)),(0)));
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dfn,null,null);
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.dfn,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.dfn.cljs$lang$applyTo = (function (seq43524){
var G__43525 = cljs.core.first.call(null,seq43524);
var seq43524__$1 = cljs.core.next.call(null,seq43524);
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(G__43525,seq43524__$1);
});

om_tools.dom.dfn.cljs$lang$maxFixedArity = (1);

om_tools.dom.dialog = (function om_tools$dom$dialog(var_args){
var args43528 = [];
var len__36896__auto___44150 = arguments.length;
var i__36897__auto___44151 = (0);
while(true){
if((i__36897__auto___44151 < len__36896__auto___44150)){
args43528.push((arguments[i__36897__auto___44151]));

var G__44152 = (i__36897__auto___44151 + (1));
i__36897__auto___44151 = G__44152;
continue;
} else {
}
break;
}

var G__43532 = args43528.length;
switch (G__43532) {
case 0:
return om_tools.dom.dialog.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43528.slice((1)),(0)));
return om_tools.dom.dialog.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.dialog.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dialog,null,null);
});

om_tools.dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.dialog,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.dialog.cljs$lang$applyTo = (function (seq43529){
var G__43530 = cljs.core.first.call(null,seq43529);
var seq43529__$1 = cljs.core.next.call(null,seq43529);
return om_tools.dom.dialog.cljs$core$IFn$_invoke$arity$variadic(G__43530,seq43529__$1);
});

om_tools.dom.dialog.cljs$lang$maxFixedArity = (1);

om_tools.dom.div = (function om_tools$dom$div(var_args){
var args43533 = [];
var len__36896__auto___44154 = arguments.length;
var i__36897__auto___44155 = (0);
while(true){
if((i__36897__auto___44155 < len__36896__auto___44154)){
args43533.push((arguments[i__36897__auto___44155]));

var G__44156 = (i__36897__auto___44155 + (1));
i__36897__auto___44155 = G__44156;
continue;
} else {
}
break;
}

var G__43537 = args43533.length;
switch (G__43537) {
case 0:
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43533.slice((1)),(0)));
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.div,null,null);
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.div,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.div.cljs$lang$applyTo = (function (seq43534){
var G__43535 = cljs.core.first.call(null,seq43534);
var seq43534__$1 = cljs.core.next.call(null,seq43534);
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic(G__43535,seq43534__$1);
});

om_tools.dom.div.cljs$lang$maxFixedArity = (1);

om_tools.dom.dl = (function om_tools$dom$dl(var_args){
var args43538 = [];
var len__36896__auto___44158 = arguments.length;
var i__36897__auto___44159 = (0);
while(true){
if((i__36897__auto___44159 < len__36896__auto___44158)){
args43538.push((arguments[i__36897__auto___44159]));

var G__44160 = (i__36897__auto___44159 + (1));
i__36897__auto___44159 = G__44160;
continue;
} else {
}
break;
}

var G__43542 = args43538.length;
switch (G__43542) {
case 0:
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43538.slice((1)),(0)));
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dl,null,null);
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.dl,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.dl.cljs$lang$applyTo = (function (seq43539){
var G__43540 = cljs.core.first.call(null,seq43539);
var seq43539__$1 = cljs.core.next.call(null,seq43539);
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic(G__43540,seq43539__$1);
});

om_tools.dom.dl.cljs$lang$maxFixedArity = (1);

om_tools.dom.dt = (function om_tools$dom$dt(var_args){
var args43543 = [];
var len__36896__auto___44162 = arguments.length;
var i__36897__auto___44163 = (0);
while(true){
if((i__36897__auto___44163 < len__36896__auto___44162)){
args43543.push((arguments[i__36897__auto___44163]));

var G__44164 = (i__36897__auto___44163 + (1));
i__36897__auto___44163 = G__44164;
continue;
} else {
}
break;
}

var G__43547 = args43543.length;
switch (G__43547) {
case 0:
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43543.slice((1)),(0)));
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dt,null,null);
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.dt,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.dt.cljs$lang$applyTo = (function (seq43544){
var G__43545 = cljs.core.first.call(null,seq43544);
var seq43544__$1 = cljs.core.next.call(null,seq43544);
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic(G__43545,seq43544__$1);
});

om_tools.dom.dt.cljs$lang$maxFixedArity = (1);

om_tools.dom.em = (function om_tools$dom$em(var_args){
var args43553 = [];
var len__36896__auto___44166 = arguments.length;
var i__36897__auto___44167 = (0);
while(true){
if((i__36897__auto___44167 < len__36896__auto___44166)){
args43553.push((arguments[i__36897__auto___44167]));

var G__44168 = (i__36897__auto___44167 + (1));
i__36897__auto___44167 = G__44168;
continue;
} else {
}
break;
}

var G__43557 = args43553.length;
switch (G__43557) {
case 0:
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43553.slice((1)),(0)));
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.em,null,null);
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.em,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.em.cljs$lang$applyTo = (function (seq43554){
var G__43555 = cljs.core.first.call(null,seq43554);
var seq43554__$1 = cljs.core.next.call(null,seq43554);
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic(G__43555,seq43554__$1);
});

om_tools.dom.em.cljs$lang$maxFixedArity = (1);

om_tools.dom.embed = (function om_tools$dom$embed(var_args){
var args43558 = [];
var len__36896__auto___44170 = arguments.length;
var i__36897__auto___44171 = (0);
while(true){
if((i__36897__auto___44171 < len__36896__auto___44170)){
args43558.push((arguments[i__36897__auto___44171]));

var G__44172 = (i__36897__auto___44171 + (1));
i__36897__auto___44171 = G__44172;
continue;
} else {
}
break;
}

var G__43562 = args43558.length;
switch (G__43562) {
case 0:
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43558.slice((1)),(0)));
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.embed,null,null);
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.embed,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.embed.cljs$lang$applyTo = (function (seq43559){
var G__43560 = cljs.core.first.call(null,seq43559);
var seq43559__$1 = cljs.core.next.call(null,seq43559);
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic(G__43560,seq43559__$1);
});

om_tools.dom.embed.cljs$lang$maxFixedArity = (1);

om_tools.dom.fieldset = (function om_tools$dom$fieldset(var_args){
var args43563 = [];
var len__36896__auto___44174 = arguments.length;
var i__36897__auto___44175 = (0);
while(true){
if((i__36897__auto___44175 < len__36896__auto___44174)){
args43563.push((arguments[i__36897__auto___44175]));

var G__44176 = (i__36897__auto___44175 + (1));
i__36897__auto___44175 = G__44176;
continue;
} else {
}
break;
}

var G__43567 = args43563.length;
switch (G__43567) {
case 0:
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43563.slice((1)),(0)));
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.fieldset,null,null);
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.fieldset,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.fieldset.cljs$lang$applyTo = (function (seq43564){
var G__43565 = cljs.core.first.call(null,seq43564);
var seq43564__$1 = cljs.core.next.call(null,seq43564);
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(G__43565,seq43564__$1);
});

om_tools.dom.fieldset.cljs$lang$maxFixedArity = (1);

om_tools.dom.figcaption = (function om_tools$dom$figcaption(var_args){
var args43568 = [];
var len__36896__auto___44178 = arguments.length;
var i__36897__auto___44179 = (0);
while(true){
if((i__36897__auto___44179 < len__36896__auto___44178)){
args43568.push((arguments[i__36897__auto___44179]));

var G__44180 = (i__36897__auto___44179 + (1));
i__36897__auto___44179 = G__44180;
continue;
} else {
}
break;
}

var G__43572 = args43568.length;
switch (G__43572) {
case 0:
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43568.slice((1)),(0)));
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figcaption,null,null);
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.figcaption,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.figcaption.cljs$lang$applyTo = (function (seq43569){
var G__43570 = cljs.core.first.call(null,seq43569);
var seq43569__$1 = cljs.core.next.call(null,seq43569);
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(G__43570,seq43569__$1);
});

om_tools.dom.figcaption.cljs$lang$maxFixedArity = (1);

om_tools.dom.figure = (function om_tools$dom$figure(var_args){
var args43573 = [];
var len__36896__auto___44182 = arguments.length;
var i__36897__auto___44183 = (0);
while(true){
if((i__36897__auto___44183 < len__36896__auto___44182)){
args43573.push((arguments[i__36897__auto___44183]));

var G__44184 = (i__36897__auto___44183 + (1));
i__36897__auto___44183 = G__44184;
continue;
} else {
}
break;
}

var G__43577 = args43573.length;
switch (G__43577) {
case 0:
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43573.slice((1)),(0)));
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figure,null,null);
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.figure,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.figure.cljs$lang$applyTo = (function (seq43574){
var G__43575 = cljs.core.first.call(null,seq43574);
var seq43574__$1 = cljs.core.next.call(null,seq43574);
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic(G__43575,seq43574__$1);
});

om_tools.dom.figure.cljs$lang$maxFixedArity = (1);

om_tools.dom.footer = (function om_tools$dom$footer(var_args){
var args43578 = [];
var len__36896__auto___44186 = arguments.length;
var i__36897__auto___44187 = (0);
while(true){
if((i__36897__auto___44187 < len__36896__auto___44186)){
args43578.push((arguments[i__36897__auto___44187]));

var G__44188 = (i__36897__auto___44187 + (1));
i__36897__auto___44187 = G__44188;
continue;
} else {
}
break;
}

var G__43582 = args43578.length;
switch (G__43582) {
case 0:
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43578.slice((1)),(0)));
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.footer,null,null);
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.footer,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.footer.cljs$lang$applyTo = (function (seq43579){
var G__43580 = cljs.core.first.call(null,seq43579);
var seq43579__$1 = cljs.core.next.call(null,seq43579);
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic(G__43580,seq43579__$1);
});

om_tools.dom.footer.cljs$lang$maxFixedArity = (1);

om_tools.dom.form = (function om_tools$dom$form(var_args){
var args43583 = [];
var len__36896__auto___44190 = arguments.length;
var i__36897__auto___44191 = (0);
while(true){
if((i__36897__auto___44191 < len__36896__auto___44190)){
args43583.push((arguments[i__36897__auto___44191]));

var G__44192 = (i__36897__auto___44191 + (1));
i__36897__auto___44191 = G__44192;
continue;
} else {
}
break;
}

var G__43587 = args43583.length;
switch (G__43587) {
case 0:
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43583.slice((1)),(0)));
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.form,null,null);
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.form,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.form.cljs$lang$applyTo = (function (seq43584){
var G__43585 = cljs.core.first.call(null,seq43584);
var seq43584__$1 = cljs.core.next.call(null,seq43584);
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic(G__43585,seq43584__$1);
});

om_tools.dom.form.cljs$lang$maxFixedArity = (1);

om_tools.dom.h1 = (function om_tools$dom$h1(var_args){
var args43588 = [];
var len__36896__auto___44194 = arguments.length;
var i__36897__auto___44195 = (0);
while(true){
if((i__36897__auto___44195 < len__36896__auto___44194)){
args43588.push((arguments[i__36897__auto___44195]));

var G__44196 = (i__36897__auto___44195 + (1));
i__36897__auto___44195 = G__44196;
continue;
} else {
}
break;
}

var G__43592 = args43588.length;
switch (G__43592) {
case 0:
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43588.slice((1)),(0)));
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h1,null,null);
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.h1,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.h1.cljs$lang$applyTo = (function (seq43589){
var G__43590 = cljs.core.first.call(null,seq43589);
var seq43589__$1 = cljs.core.next.call(null,seq43589);
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic(G__43590,seq43589__$1);
});

om_tools.dom.h1.cljs$lang$maxFixedArity = (1);

om_tools.dom.h2 = (function om_tools$dom$h2(var_args){
var args43593 = [];
var len__36896__auto___44198 = arguments.length;
var i__36897__auto___44199 = (0);
while(true){
if((i__36897__auto___44199 < len__36896__auto___44198)){
args43593.push((arguments[i__36897__auto___44199]));

var G__44200 = (i__36897__auto___44199 + (1));
i__36897__auto___44199 = G__44200;
continue;
} else {
}
break;
}

var G__43597 = args43593.length;
switch (G__43597) {
case 0:
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43593.slice((1)),(0)));
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h2,null,null);
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.h2,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.h2.cljs$lang$applyTo = (function (seq43594){
var G__43595 = cljs.core.first.call(null,seq43594);
var seq43594__$1 = cljs.core.next.call(null,seq43594);
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic(G__43595,seq43594__$1);
});

om_tools.dom.h2.cljs$lang$maxFixedArity = (1);

om_tools.dom.h3 = (function om_tools$dom$h3(var_args){
var args43598 = [];
var len__36896__auto___44202 = arguments.length;
var i__36897__auto___44203 = (0);
while(true){
if((i__36897__auto___44203 < len__36896__auto___44202)){
args43598.push((arguments[i__36897__auto___44203]));

var G__44204 = (i__36897__auto___44203 + (1));
i__36897__auto___44203 = G__44204;
continue;
} else {
}
break;
}

var G__43602 = args43598.length;
switch (G__43602) {
case 0:
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43598.slice((1)),(0)));
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h3,null,null);
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.h3,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.h3.cljs$lang$applyTo = (function (seq43599){
var G__43600 = cljs.core.first.call(null,seq43599);
var seq43599__$1 = cljs.core.next.call(null,seq43599);
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic(G__43600,seq43599__$1);
});

om_tools.dom.h3.cljs$lang$maxFixedArity = (1);

om_tools.dom.h4 = (function om_tools$dom$h4(var_args){
var args43603 = [];
var len__36896__auto___44206 = arguments.length;
var i__36897__auto___44207 = (0);
while(true){
if((i__36897__auto___44207 < len__36896__auto___44206)){
args43603.push((arguments[i__36897__auto___44207]));

var G__44208 = (i__36897__auto___44207 + (1));
i__36897__auto___44207 = G__44208;
continue;
} else {
}
break;
}

var G__43607 = args43603.length;
switch (G__43607) {
case 0:
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43603.slice((1)),(0)));
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h4,null,null);
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.h4,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.h4.cljs$lang$applyTo = (function (seq43604){
var G__43605 = cljs.core.first.call(null,seq43604);
var seq43604__$1 = cljs.core.next.call(null,seq43604);
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic(G__43605,seq43604__$1);
});

om_tools.dom.h4.cljs$lang$maxFixedArity = (1);

om_tools.dom.h5 = (function om_tools$dom$h5(var_args){
var args43608 = [];
var len__36896__auto___44210 = arguments.length;
var i__36897__auto___44211 = (0);
while(true){
if((i__36897__auto___44211 < len__36896__auto___44210)){
args43608.push((arguments[i__36897__auto___44211]));

var G__44212 = (i__36897__auto___44211 + (1));
i__36897__auto___44211 = G__44212;
continue;
} else {
}
break;
}

var G__43612 = args43608.length;
switch (G__43612) {
case 0:
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43608.slice((1)),(0)));
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h5,null,null);
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.h5,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.h5.cljs$lang$applyTo = (function (seq43609){
var G__43610 = cljs.core.first.call(null,seq43609);
var seq43609__$1 = cljs.core.next.call(null,seq43609);
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic(G__43610,seq43609__$1);
});

om_tools.dom.h5.cljs$lang$maxFixedArity = (1);

om_tools.dom.h6 = (function om_tools$dom$h6(var_args){
var args43613 = [];
var len__36896__auto___44214 = arguments.length;
var i__36897__auto___44215 = (0);
while(true){
if((i__36897__auto___44215 < len__36896__auto___44214)){
args43613.push((arguments[i__36897__auto___44215]));

var G__44216 = (i__36897__auto___44215 + (1));
i__36897__auto___44215 = G__44216;
continue;
} else {
}
break;
}

var G__43617 = args43613.length;
switch (G__43617) {
case 0:
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43613.slice((1)),(0)));
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h6,null,null);
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.h6,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.h6.cljs$lang$applyTo = (function (seq43614){
var G__43615 = cljs.core.first.call(null,seq43614);
var seq43614__$1 = cljs.core.next.call(null,seq43614);
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic(G__43615,seq43614__$1);
});

om_tools.dom.h6.cljs$lang$maxFixedArity = (1);

om_tools.dom.head = (function om_tools$dom$head(var_args){
var args43618 = [];
var len__36896__auto___44218 = arguments.length;
var i__36897__auto___44219 = (0);
while(true){
if((i__36897__auto___44219 < len__36896__auto___44218)){
args43618.push((arguments[i__36897__auto___44219]));

var G__44220 = (i__36897__auto___44219 + (1));
i__36897__auto___44219 = G__44220;
continue;
} else {
}
break;
}

var G__43622 = args43618.length;
switch (G__43622) {
case 0:
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43618.slice((1)),(0)));
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.head,null,null);
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.head,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.head.cljs$lang$applyTo = (function (seq43619){
var G__43620 = cljs.core.first.call(null,seq43619);
var seq43619__$1 = cljs.core.next.call(null,seq43619);
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic(G__43620,seq43619__$1);
});

om_tools.dom.head.cljs$lang$maxFixedArity = (1);

om_tools.dom.header = (function om_tools$dom$header(var_args){
var args43623 = [];
var len__36896__auto___44222 = arguments.length;
var i__36897__auto___44223 = (0);
while(true){
if((i__36897__auto___44223 < len__36896__auto___44222)){
args43623.push((arguments[i__36897__auto___44223]));

var G__44224 = (i__36897__auto___44223 + (1));
i__36897__auto___44223 = G__44224;
continue;
} else {
}
break;
}

var G__43627 = args43623.length;
switch (G__43627) {
case 0:
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43623.slice((1)),(0)));
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.header,null,null);
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.header,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.header.cljs$lang$applyTo = (function (seq43624){
var G__43625 = cljs.core.first.call(null,seq43624);
var seq43624__$1 = cljs.core.next.call(null,seq43624);
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic(G__43625,seq43624__$1);
});

om_tools.dom.header.cljs$lang$maxFixedArity = (1);

om_tools.dom.hr = (function om_tools$dom$hr(var_args){
var args43628 = [];
var len__36896__auto___44226 = arguments.length;
var i__36897__auto___44227 = (0);
while(true){
if((i__36897__auto___44227 < len__36896__auto___44226)){
args43628.push((arguments[i__36897__auto___44227]));

var G__44228 = (i__36897__auto___44227 + (1));
i__36897__auto___44227 = G__44228;
continue;
} else {
}
break;
}

var G__43632 = args43628.length;
switch (G__43632) {
case 0:
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43628.slice((1)),(0)));
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.hr,null,null);
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.hr,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.hr.cljs$lang$applyTo = (function (seq43629){
var G__43630 = cljs.core.first.call(null,seq43629);
var seq43629__$1 = cljs.core.next.call(null,seq43629);
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic(G__43630,seq43629__$1);
});

om_tools.dom.hr.cljs$lang$maxFixedArity = (1);

om_tools.dom.html = (function om_tools$dom$html(var_args){
var args43633 = [];
var len__36896__auto___44230 = arguments.length;
var i__36897__auto___44231 = (0);
while(true){
if((i__36897__auto___44231 < len__36896__auto___44230)){
args43633.push((arguments[i__36897__auto___44231]));

var G__44232 = (i__36897__auto___44231 + (1));
i__36897__auto___44231 = G__44232;
continue;
} else {
}
break;
}

var G__43637 = args43633.length;
switch (G__43637) {
case 0:
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43633.slice((1)),(0)));
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.html,null,null);
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.html,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.html.cljs$lang$applyTo = (function (seq43634){
var G__43635 = cljs.core.first.call(null,seq43634);
var seq43634__$1 = cljs.core.next.call(null,seq43634);
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic(G__43635,seq43634__$1);
});

om_tools.dom.html.cljs$lang$maxFixedArity = (1);

om_tools.dom.i = (function om_tools$dom$i(var_args){
var args43638 = [];
var len__36896__auto___44234 = arguments.length;
var i__36897__auto___44235 = (0);
while(true){
if((i__36897__auto___44235 < len__36896__auto___44234)){
args43638.push((arguments[i__36897__auto___44235]));

var G__44236 = (i__36897__auto___44235 + (1));
i__36897__auto___44235 = G__44236;
continue;
} else {
}
break;
}

var G__43642 = args43638.length;
switch (G__43642) {
case 0:
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43638.slice((1)),(0)));
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.i,null,null);
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.i,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.i.cljs$lang$applyTo = (function (seq43639){
var G__43640 = cljs.core.first.call(null,seq43639);
var seq43639__$1 = cljs.core.next.call(null,seq43639);
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic(G__43640,seq43639__$1);
});

om_tools.dom.i.cljs$lang$maxFixedArity = (1);

om_tools.dom.iframe = (function om_tools$dom$iframe(var_args){
var args43643 = [];
var len__36896__auto___44238 = arguments.length;
var i__36897__auto___44239 = (0);
while(true){
if((i__36897__auto___44239 < len__36896__auto___44238)){
args43643.push((arguments[i__36897__auto___44239]));

var G__44240 = (i__36897__auto___44239 + (1));
i__36897__auto___44239 = G__44240;
continue;
} else {
}
break;
}

var G__43647 = args43643.length;
switch (G__43647) {
case 0:
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43643.slice((1)),(0)));
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.iframe,null,null);
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.iframe,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.iframe.cljs$lang$applyTo = (function (seq43644){
var G__43645 = cljs.core.first.call(null,seq43644);
var seq43644__$1 = cljs.core.next.call(null,seq43644);
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(G__43645,seq43644__$1);
});

om_tools.dom.iframe.cljs$lang$maxFixedArity = (1);

om_tools.dom.img = (function om_tools$dom$img(var_args){
var args43648 = [];
var len__36896__auto___44242 = arguments.length;
var i__36897__auto___44243 = (0);
while(true){
if((i__36897__auto___44243 < len__36896__auto___44242)){
args43648.push((arguments[i__36897__auto___44243]));

var G__44244 = (i__36897__auto___44243 + (1));
i__36897__auto___44243 = G__44244;
continue;
} else {
}
break;
}

var G__43652 = args43648.length;
switch (G__43652) {
case 0:
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43648.slice((1)),(0)));
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.img,null,null);
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.img,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.img.cljs$lang$applyTo = (function (seq43649){
var G__43650 = cljs.core.first.call(null,seq43649);
var seq43649__$1 = cljs.core.next.call(null,seq43649);
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic(G__43650,seq43649__$1);
});

om_tools.dom.img.cljs$lang$maxFixedArity = (1);

om_tools.dom.ins = (function om_tools$dom$ins(var_args){
var args43653 = [];
var len__36896__auto___44246 = arguments.length;
var i__36897__auto___44247 = (0);
while(true){
if((i__36897__auto___44247 < len__36896__auto___44246)){
args43653.push((arguments[i__36897__auto___44247]));

var G__44248 = (i__36897__auto___44247 + (1));
i__36897__auto___44247 = G__44248;
continue;
} else {
}
break;
}

var G__43657 = args43653.length;
switch (G__43657) {
case 0:
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43653.slice((1)),(0)));
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ins,null,null);
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.ins,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.ins.cljs$lang$applyTo = (function (seq43654){
var G__43655 = cljs.core.first.call(null,seq43654);
var seq43654__$1 = cljs.core.next.call(null,seq43654);
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic(G__43655,seq43654__$1);
});

om_tools.dom.ins.cljs$lang$maxFixedArity = (1);

om_tools.dom.kbd = (function om_tools$dom$kbd(var_args){
var args43658 = [];
var len__36896__auto___44250 = arguments.length;
var i__36897__auto___44251 = (0);
while(true){
if((i__36897__auto___44251 < len__36896__auto___44250)){
args43658.push((arguments[i__36897__auto___44251]));

var G__44252 = (i__36897__auto___44251 + (1));
i__36897__auto___44251 = G__44252;
continue;
} else {
}
break;
}

var G__43662 = args43658.length;
switch (G__43662) {
case 0:
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43658.slice((1)),(0)));
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.kbd,null,null);
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.kbd,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.kbd.cljs$lang$applyTo = (function (seq43659){
var G__43660 = cljs.core.first.call(null,seq43659);
var seq43659__$1 = cljs.core.next.call(null,seq43659);
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(G__43660,seq43659__$1);
});

om_tools.dom.kbd.cljs$lang$maxFixedArity = (1);

om_tools.dom.keygen = (function om_tools$dom$keygen(var_args){
var args43663 = [];
var len__36896__auto___44254 = arguments.length;
var i__36897__auto___44255 = (0);
while(true){
if((i__36897__auto___44255 < len__36896__auto___44254)){
args43663.push((arguments[i__36897__auto___44255]));

var G__44256 = (i__36897__auto___44255 + (1));
i__36897__auto___44255 = G__44256;
continue;
} else {
}
break;
}

var G__43667 = args43663.length;
switch (G__43667) {
case 0:
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43663.slice((1)),(0)));
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.keygen,null,null);
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.keygen,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.keygen.cljs$lang$applyTo = (function (seq43664){
var G__43665 = cljs.core.first.call(null,seq43664);
var seq43664__$1 = cljs.core.next.call(null,seq43664);
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(G__43665,seq43664__$1);
});

om_tools.dom.keygen.cljs$lang$maxFixedArity = (1);

om_tools.dom.label = (function om_tools$dom$label(var_args){
var args43668 = [];
var len__36896__auto___44258 = arguments.length;
var i__36897__auto___44259 = (0);
while(true){
if((i__36897__auto___44259 < len__36896__auto___44258)){
args43668.push((arguments[i__36897__auto___44259]));

var G__44260 = (i__36897__auto___44259 + (1));
i__36897__auto___44259 = G__44260;
continue;
} else {
}
break;
}

var G__43672 = args43668.length;
switch (G__43672) {
case 0:
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43668.slice((1)),(0)));
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.label,null,null);
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.label,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.label.cljs$lang$applyTo = (function (seq43669){
var G__43670 = cljs.core.first.call(null,seq43669);
var seq43669__$1 = cljs.core.next.call(null,seq43669);
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic(G__43670,seq43669__$1);
});

om_tools.dom.label.cljs$lang$maxFixedArity = (1);

om_tools.dom.legend = (function om_tools$dom$legend(var_args){
var args43673 = [];
var len__36896__auto___44262 = arguments.length;
var i__36897__auto___44263 = (0);
while(true){
if((i__36897__auto___44263 < len__36896__auto___44262)){
args43673.push((arguments[i__36897__auto___44263]));

var G__44264 = (i__36897__auto___44263 + (1));
i__36897__auto___44263 = G__44264;
continue;
} else {
}
break;
}

var G__43677 = args43673.length;
switch (G__43677) {
case 0:
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43673.slice((1)),(0)));
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.legend,null,null);
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.legend,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.legend.cljs$lang$applyTo = (function (seq43674){
var G__43675 = cljs.core.first.call(null,seq43674);
var seq43674__$1 = cljs.core.next.call(null,seq43674);
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic(G__43675,seq43674__$1);
});

om_tools.dom.legend.cljs$lang$maxFixedArity = (1);

om_tools.dom.li = (function om_tools$dom$li(var_args){
var args43678 = [];
var len__36896__auto___44266 = arguments.length;
var i__36897__auto___44267 = (0);
while(true){
if((i__36897__auto___44267 < len__36896__auto___44266)){
args43678.push((arguments[i__36897__auto___44267]));

var G__44268 = (i__36897__auto___44267 + (1));
i__36897__auto___44267 = G__44268;
continue;
} else {
}
break;
}

var G__43682 = args43678.length;
switch (G__43682) {
case 0:
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43678.slice((1)),(0)));
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.li,null,null);
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.li,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.li.cljs$lang$applyTo = (function (seq43679){
var G__43680 = cljs.core.first.call(null,seq43679);
var seq43679__$1 = cljs.core.next.call(null,seq43679);
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic(G__43680,seq43679__$1);
});

om_tools.dom.li.cljs$lang$maxFixedArity = (1);

om_tools.dom.link = (function om_tools$dom$link(var_args){
var args43683 = [];
var len__36896__auto___44270 = arguments.length;
var i__36897__auto___44271 = (0);
while(true){
if((i__36897__auto___44271 < len__36896__auto___44270)){
args43683.push((arguments[i__36897__auto___44271]));

var G__44272 = (i__36897__auto___44271 + (1));
i__36897__auto___44271 = G__44272;
continue;
} else {
}
break;
}

var G__43687 = args43683.length;
switch (G__43687) {
case 0:
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43683.slice((1)),(0)));
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.link,null,null);
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.link,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.link.cljs$lang$applyTo = (function (seq43684){
var G__43685 = cljs.core.first.call(null,seq43684);
var seq43684__$1 = cljs.core.next.call(null,seq43684);
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic(G__43685,seq43684__$1);
});

om_tools.dom.link.cljs$lang$maxFixedArity = (1);

om_tools.dom.main = (function om_tools$dom$main(var_args){
var args43688 = [];
var len__36896__auto___44274 = arguments.length;
var i__36897__auto___44275 = (0);
while(true){
if((i__36897__auto___44275 < len__36896__auto___44274)){
args43688.push((arguments[i__36897__auto___44275]));

var G__44276 = (i__36897__auto___44275 + (1));
i__36897__auto___44275 = G__44276;
continue;
} else {
}
break;
}

var G__43692 = args43688.length;
switch (G__43692) {
case 0:
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43688.slice((1)),(0)));
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.main,null,null);
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.main,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.main.cljs$lang$applyTo = (function (seq43689){
var G__43690 = cljs.core.first.call(null,seq43689);
var seq43689__$1 = cljs.core.next.call(null,seq43689);
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic(G__43690,seq43689__$1);
});

om_tools.dom.main.cljs$lang$maxFixedArity = (1);

om_tools.dom.map = (function om_tools$dom$map(var_args){
var args43693 = [];
var len__36896__auto___44278 = arguments.length;
var i__36897__auto___44279 = (0);
while(true){
if((i__36897__auto___44279 < len__36896__auto___44278)){
args43693.push((arguments[i__36897__auto___44279]));

var G__44280 = (i__36897__auto___44279 + (1));
i__36897__auto___44279 = G__44280;
continue;
} else {
}
break;
}

var G__43697 = args43693.length;
switch (G__43697) {
case 0:
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43693.slice((1)),(0)));
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.map,null,null);
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.map,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.map.cljs$lang$applyTo = (function (seq43694){
var G__43695 = cljs.core.first.call(null,seq43694);
var seq43694__$1 = cljs.core.next.call(null,seq43694);
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic(G__43695,seq43694__$1);
});

om_tools.dom.map.cljs$lang$maxFixedArity = (1);

om_tools.dom.mark = (function om_tools$dom$mark(var_args){
var args43698 = [];
var len__36896__auto___44282 = arguments.length;
var i__36897__auto___44283 = (0);
while(true){
if((i__36897__auto___44283 < len__36896__auto___44282)){
args43698.push((arguments[i__36897__auto___44283]));

var G__44284 = (i__36897__auto___44283 + (1));
i__36897__auto___44283 = G__44284;
continue;
} else {
}
break;
}

var G__43702 = args43698.length;
switch (G__43702) {
case 0:
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43698.slice((1)),(0)));
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.mark,null,null);
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.mark,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.mark.cljs$lang$applyTo = (function (seq43699){
var G__43700 = cljs.core.first.call(null,seq43699);
var seq43699__$1 = cljs.core.next.call(null,seq43699);
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic(G__43700,seq43699__$1);
});

om_tools.dom.mark.cljs$lang$maxFixedArity = (1);

om_tools.dom.menu = (function om_tools$dom$menu(var_args){
var args43703 = [];
var len__36896__auto___44286 = arguments.length;
var i__36897__auto___44287 = (0);
while(true){
if((i__36897__auto___44287 < len__36896__auto___44286)){
args43703.push((arguments[i__36897__auto___44287]));

var G__44288 = (i__36897__auto___44287 + (1));
i__36897__auto___44287 = G__44288;
continue;
} else {
}
break;
}

var G__43707 = args43703.length;
switch (G__43707) {
case 0:
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43703.slice((1)),(0)));
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menu,null,null);
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.menu,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.menu.cljs$lang$applyTo = (function (seq43704){
var G__43705 = cljs.core.first.call(null,seq43704);
var seq43704__$1 = cljs.core.next.call(null,seq43704);
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic(G__43705,seq43704__$1);
});

om_tools.dom.menu.cljs$lang$maxFixedArity = (1);

om_tools.dom.menuitem = (function om_tools$dom$menuitem(var_args){
var args43708 = [];
var len__36896__auto___44290 = arguments.length;
var i__36897__auto___44291 = (0);
while(true){
if((i__36897__auto___44291 < len__36896__auto___44290)){
args43708.push((arguments[i__36897__auto___44291]));

var G__44292 = (i__36897__auto___44291 + (1));
i__36897__auto___44291 = G__44292;
continue;
} else {
}
break;
}

var G__43712 = args43708.length;
switch (G__43712) {
case 0:
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43708.slice((1)),(0)));
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menuitem,null,null);
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.menuitem,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.menuitem.cljs$lang$applyTo = (function (seq43709){
var G__43710 = cljs.core.first.call(null,seq43709);
var seq43709__$1 = cljs.core.next.call(null,seq43709);
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(G__43710,seq43709__$1);
});

om_tools.dom.menuitem.cljs$lang$maxFixedArity = (1);

om_tools.dom.meta = (function om_tools$dom$meta(var_args){
var args43713 = [];
var len__36896__auto___44294 = arguments.length;
var i__36897__auto___44295 = (0);
while(true){
if((i__36897__auto___44295 < len__36896__auto___44294)){
args43713.push((arguments[i__36897__auto___44295]));

var G__44296 = (i__36897__auto___44295 + (1));
i__36897__auto___44295 = G__44296;
continue;
} else {
}
break;
}

var G__43717 = args43713.length;
switch (G__43717) {
case 0:
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43713.slice((1)),(0)));
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meta,null,null);
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.meta,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.meta.cljs$lang$applyTo = (function (seq43714){
var G__43715 = cljs.core.first.call(null,seq43714);
var seq43714__$1 = cljs.core.next.call(null,seq43714);
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic(G__43715,seq43714__$1);
});

om_tools.dom.meta.cljs$lang$maxFixedArity = (1);

om_tools.dom.meter = (function om_tools$dom$meter(var_args){
var args43718 = [];
var len__36896__auto___44298 = arguments.length;
var i__36897__auto___44299 = (0);
while(true){
if((i__36897__auto___44299 < len__36896__auto___44298)){
args43718.push((arguments[i__36897__auto___44299]));

var G__44300 = (i__36897__auto___44299 + (1));
i__36897__auto___44299 = G__44300;
continue;
} else {
}
break;
}

var G__43722 = args43718.length;
switch (G__43722) {
case 0:
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43718.slice((1)),(0)));
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meter,null,null);
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.meter,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.meter.cljs$lang$applyTo = (function (seq43719){
var G__43720 = cljs.core.first.call(null,seq43719);
var seq43719__$1 = cljs.core.next.call(null,seq43719);
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic(G__43720,seq43719__$1);
});

om_tools.dom.meter.cljs$lang$maxFixedArity = (1);

om_tools.dom.nav = (function om_tools$dom$nav(var_args){
var args43723 = [];
var len__36896__auto___44302 = arguments.length;
var i__36897__auto___44303 = (0);
while(true){
if((i__36897__auto___44303 < len__36896__auto___44302)){
args43723.push((arguments[i__36897__auto___44303]));

var G__44304 = (i__36897__auto___44303 + (1));
i__36897__auto___44303 = G__44304;
continue;
} else {
}
break;
}

var G__43727 = args43723.length;
switch (G__43727) {
case 0:
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43723.slice((1)),(0)));
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.nav,null,null);
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.nav,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.nav.cljs$lang$applyTo = (function (seq43724){
var G__43725 = cljs.core.first.call(null,seq43724);
var seq43724__$1 = cljs.core.next.call(null,seq43724);
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic(G__43725,seq43724__$1);
});

om_tools.dom.nav.cljs$lang$maxFixedArity = (1);

om_tools.dom.noscript = (function om_tools$dom$noscript(var_args){
var args43728 = [];
var len__36896__auto___44306 = arguments.length;
var i__36897__auto___44307 = (0);
while(true){
if((i__36897__auto___44307 < len__36896__auto___44306)){
args43728.push((arguments[i__36897__auto___44307]));

var G__44308 = (i__36897__auto___44307 + (1));
i__36897__auto___44307 = G__44308;
continue;
} else {
}
break;
}

var G__43732 = args43728.length;
switch (G__43732) {
case 0:
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43728.slice((1)),(0)));
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.noscript,null,null);
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.noscript,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.noscript.cljs$lang$applyTo = (function (seq43729){
var G__43730 = cljs.core.first.call(null,seq43729);
var seq43729__$1 = cljs.core.next.call(null,seq43729);
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(G__43730,seq43729__$1);
});

om_tools.dom.noscript.cljs$lang$maxFixedArity = (1);

om_tools.dom.object = (function om_tools$dom$object(var_args){
var args43733 = [];
var len__36896__auto___44310 = arguments.length;
var i__36897__auto___44311 = (0);
while(true){
if((i__36897__auto___44311 < len__36896__auto___44310)){
args43733.push((arguments[i__36897__auto___44311]));

var G__44312 = (i__36897__auto___44311 + (1));
i__36897__auto___44311 = G__44312;
continue;
} else {
}
break;
}

var G__43737 = args43733.length;
switch (G__43737) {
case 0:
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43733.slice((1)),(0)));
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.object,null,null);
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.object,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.object.cljs$lang$applyTo = (function (seq43734){
var G__43735 = cljs.core.first.call(null,seq43734);
var seq43734__$1 = cljs.core.next.call(null,seq43734);
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic(G__43735,seq43734__$1);
});

om_tools.dom.object.cljs$lang$maxFixedArity = (1);

om_tools.dom.ol = (function om_tools$dom$ol(var_args){
var args43738 = [];
var len__36896__auto___44314 = arguments.length;
var i__36897__auto___44315 = (0);
while(true){
if((i__36897__auto___44315 < len__36896__auto___44314)){
args43738.push((arguments[i__36897__auto___44315]));

var G__44316 = (i__36897__auto___44315 + (1));
i__36897__auto___44315 = G__44316;
continue;
} else {
}
break;
}

var G__43742 = args43738.length;
switch (G__43742) {
case 0:
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43738.slice((1)),(0)));
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ol,null,null);
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.ol,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.ol.cljs$lang$applyTo = (function (seq43739){
var G__43740 = cljs.core.first.call(null,seq43739);
var seq43739__$1 = cljs.core.next.call(null,seq43739);
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic(G__43740,seq43739__$1);
});

om_tools.dom.ol.cljs$lang$maxFixedArity = (1);

om_tools.dom.optgroup = (function om_tools$dom$optgroup(var_args){
var args43743 = [];
var len__36896__auto___44318 = arguments.length;
var i__36897__auto___44319 = (0);
while(true){
if((i__36897__auto___44319 < len__36896__auto___44318)){
args43743.push((arguments[i__36897__auto___44319]));

var G__44320 = (i__36897__auto___44319 + (1));
i__36897__auto___44319 = G__44320;
continue;
} else {
}
break;
}

var G__43747 = args43743.length;
switch (G__43747) {
case 0:
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43743.slice((1)),(0)));
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.optgroup,null,null);
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.optgroup,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.optgroup.cljs$lang$applyTo = (function (seq43744){
var G__43745 = cljs.core.first.call(null,seq43744);
var seq43744__$1 = cljs.core.next.call(null,seq43744);
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(G__43745,seq43744__$1);
});

om_tools.dom.optgroup.cljs$lang$maxFixedArity = (1);

om_tools.dom.output = (function om_tools$dom$output(var_args){
var args43748 = [];
var len__36896__auto___44322 = arguments.length;
var i__36897__auto___44323 = (0);
while(true){
if((i__36897__auto___44323 < len__36896__auto___44322)){
args43748.push((arguments[i__36897__auto___44323]));

var G__44324 = (i__36897__auto___44323 + (1));
i__36897__auto___44323 = G__44324;
continue;
} else {
}
break;
}

var G__43752 = args43748.length;
switch (G__43752) {
case 0:
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43748.slice((1)),(0)));
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.output,null,null);
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.output,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.output.cljs$lang$applyTo = (function (seq43749){
var G__43750 = cljs.core.first.call(null,seq43749);
var seq43749__$1 = cljs.core.next.call(null,seq43749);
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic(G__43750,seq43749__$1);
});

om_tools.dom.output.cljs$lang$maxFixedArity = (1);

om_tools.dom.p = (function om_tools$dom$p(var_args){
var args43753 = [];
var len__36896__auto___44326 = arguments.length;
var i__36897__auto___44327 = (0);
while(true){
if((i__36897__auto___44327 < len__36896__auto___44326)){
args43753.push((arguments[i__36897__auto___44327]));

var G__44328 = (i__36897__auto___44327 + (1));
i__36897__auto___44327 = G__44328;
continue;
} else {
}
break;
}

var G__43757 = args43753.length;
switch (G__43757) {
case 0:
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43753.slice((1)),(0)));
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.p,null,null);
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.p,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.p.cljs$lang$applyTo = (function (seq43754){
var G__43755 = cljs.core.first.call(null,seq43754);
var seq43754__$1 = cljs.core.next.call(null,seq43754);
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic(G__43755,seq43754__$1);
});

om_tools.dom.p.cljs$lang$maxFixedArity = (1);

om_tools.dom.param = (function om_tools$dom$param(var_args){
var args43758 = [];
var len__36896__auto___44330 = arguments.length;
var i__36897__auto___44331 = (0);
while(true){
if((i__36897__auto___44331 < len__36896__auto___44330)){
args43758.push((arguments[i__36897__auto___44331]));

var G__44332 = (i__36897__auto___44331 + (1));
i__36897__auto___44331 = G__44332;
continue;
} else {
}
break;
}

var G__43762 = args43758.length;
switch (G__43762) {
case 0:
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43758.slice((1)),(0)));
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.param,null,null);
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.param,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.param.cljs$lang$applyTo = (function (seq43759){
var G__43760 = cljs.core.first.call(null,seq43759);
var seq43759__$1 = cljs.core.next.call(null,seq43759);
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic(G__43760,seq43759__$1);
});

om_tools.dom.param.cljs$lang$maxFixedArity = (1);

om_tools.dom.picture = (function om_tools$dom$picture(var_args){
var args43763 = [];
var len__36896__auto___44334 = arguments.length;
var i__36897__auto___44335 = (0);
while(true){
if((i__36897__auto___44335 < len__36896__auto___44334)){
args43763.push((arguments[i__36897__auto___44335]));

var G__44336 = (i__36897__auto___44335 + (1));
i__36897__auto___44335 = G__44336;
continue;
} else {
}
break;
}

var G__43767 = args43763.length;
switch (G__43767) {
case 0:
return om_tools.dom.picture.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43763.slice((1)),(0)));
return om_tools.dom.picture.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.picture.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.picture,null,null);
});

om_tools.dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.picture,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.picture.cljs$lang$applyTo = (function (seq43764){
var G__43765 = cljs.core.first.call(null,seq43764);
var seq43764__$1 = cljs.core.next.call(null,seq43764);
return om_tools.dom.picture.cljs$core$IFn$_invoke$arity$variadic(G__43765,seq43764__$1);
});

om_tools.dom.picture.cljs$lang$maxFixedArity = (1);

om_tools.dom.pre = (function om_tools$dom$pre(var_args){
var args43768 = [];
var len__36896__auto___44338 = arguments.length;
var i__36897__auto___44339 = (0);
while(true){
if((i__36897__auto___44339 < len__36896__auto___44338)){
args43768.push((arguments[i__36897__auto___44339]));

var G__44340 = (i__36897__auto___44339 + (1));
i__36897__auto___44339 = G__44340;
continue;
} else {
}
break;
}

var G__43772 = args43768.length;
switch (G__43772) {
case 0:
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43768.slice((1)),(0)));
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.pre,null,null);
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.pre,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.pre.cljs$lang$applyTo = (function (seq43769){
var G__43770 = cljs.core.first.call(null,seq43769);
var seq43769__$1 = cljs.core.next.call(null,seq43769);
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic(G__43770,seq43769__$1);
});

om_tools.dom.pre.cljs$lang$maxFixedArity = (1);

om_tools.dom.progress = (function om_tools$dom$progress(var_args){
var args43773 = [];
var len__36896__auto___44342 = arguments.length;
var i__36897__auto___44343 = (0);
while(true){
if((i__36897__auto___44343 < len__36896__auto___44342)){
args43773.push((arguments[i__36897__auto___44343]));

var G__44344 = (i__36897__auto___44343 + (1));
i__36897__auto___44343 = G__44344;
continue;
} else {
}
break;
}

var G__43777 = args43773.length;
switch (G__43777) {
case 0:
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43773.slice((1)),(0)));
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.progress,null,null);
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.progress,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.progress.cljs$lang$applyTo = (function (seq43774){
var G__43775 = cljs.core.first.call(null,seq43774);
var seq43774__$1 = cljs.core.next.call(null,seq43774);
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic(G__43775,seq43774__$1);
});

om_tools.dom.progress.cljs$lang$maxFixedArity = (1);

om_tools.dom.q = (function om_tools$dom$q(var_args){
var args43778 = [];
var len__36896__auto___44346 = arguments.length;
var i__36897__auto___44347 = (0);
while(true){
if((i__36897__auto___44347 < len__36896__auto___44346)){
args43778.push((arguments[i__36897__auto___44347]));

var G__44348 = (i__36897__auto___44347 + (1));
i__36897__auto___44347 = G__44348;
continue;
} else {
}
break;
}

var G__43782 = args43778.length;
switch (G__43782) {
case 0:
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43778.slice((1)),(0)));
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.q,null,null);
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.q,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.q.cljs$lang$applyTo = (function (seq43779){
var G__43780 = cljs.core.first.call(null,seq43779);
var seq43779__$1 = cljs.core.next.call(null,seq43779);
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic(G__43780,seq43779__$1);
});

om_tools.dom.q.cljs$lang$maxFixedArity = (1);

om_tools.dom.rp = (function om_tools$dom$rp(var_args){
var args43783 = [];
var len__36896__auto___44350 = arguments.length;
var i__36897__auto___44351 = (0);
while(true){
if((i__36897__auto___44351 < len__36896__auto___44350)){
args43783.push((arguments[i__36897__auto___44351]));

var G__44352 = (i__36897__auto___44351 + (1));
i__36897__auto___44351 = G__44352;
continue;
} else {
}
break;
}

var G__43787 = args43783.length;
switch (G__43787) {
case 0:
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43783.slice((1)),(0)));
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rp,null,null);
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.rp,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.rp.cljs$lang$applyTo = (function (seq43784){
var G__43785 = cljs.core.first.call(null,seq43784);
var seq43784__$1 = cljs.core.next.call(null,seq43784);
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic(G__43785,seq43784__$1);
});

om_tools.dom.rp.cljs$lang$maxFixedArity = (1);

om_tools.dom.rt = (function om_tools$dom$rt(var_args){
var args43788 = [];
var len__36896__auto___44354 = arguments.length;
var i__36897__auto___44355 = (0);
while(true){
if((i__36897__auto___44355 < len__36896__auto___44354)){
args43788.push((arguments[i__36897__auto___44355]));

var G__44356 = (i__36897__auto___44355 + (1));
i__36897__auto___44355 = G__44356;
continue;
} else {
}
break;
}

var G__43792 = args43788.length;
switch (G__43792) {
case 0:
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43788.slice((1)),(0)));
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rt,null,null);
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.rt,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.rt.cljs$lang$applyTo = (function (seq43789){
var G__43790 = cljs.core.first.call(null,seq43789);
var seq43789__$1 = cljs.core.next.call(null,seq43789);
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic(G__43790,seq43789__$1);
});

om_tools.dom.rt.cljs$lang$maxFixedArity = (1);

om_tools.dom.ruby = (function om_tools$dom$ruby(var_args){
var args43793 = [];
var len__36896__auto___44358 = arguments.length;
var i__36897__auto___44359 = (0);
while(true){
if((i__36897__auto___44359 < len__36896__auto___44358)){
args43793.push((arguments[i__36897__auto___44359]));

var G__44360 = (i__36897__auto___44359 + (1));
i__36897__auto___44359 = G__44360;
continue;
} else {
}
break;
}

var G__43797 = args43793.length;
switch (G__43797) {
case 0:
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43793.slice((1)),(0)));
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ruby,null,null);
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.ruby,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.ruby.cljs$lang$applyTo = (function (seq43794){
var G__43795 = cljs.core.first.call(null,seq43794);
var seq43794__$1 = cljs.core.next.call(null,seq43794);
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(G__43795,seq43794__$1);
});

om_tools.dom.ruby.cljs$lang$maxFixedArity = (1);

om_tools.dom.s = (function om_tools$dom$s(var_args){
var args43798 = [];
var len__36896__auto___44362 = arguments.length;
var i__36897__auto___44363 = (0);
while(true){
if((i__36897__auto___44363 < len__36896__auto___44362)){
args43798.push((arguments[i__36897__auto___44363]));

var G__44364 = (i__36897__auto___44363 + (1));
i__36897__auto___44363 = G__44364;
continue;
} else {
}
break;
}

var G__43802 = args43798.length;
switch (G__43802) {
case 0:
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43798.slice((1)),(0)));
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.s,null,null);
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.s,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.s.cljs$lang$applyTo = (function (seq43799){
var G__43800 = cljs.core.first.call(null,seq43799);
var seq43799__$1 = cljs.core.next.call(null,seq43799);
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic(G__43800,seq43799__$1);
});

om_tools.dom.s.cljs$lang$maxFixedArity = (1);

om_tools.dom.samp = (function om_tools$dom$samp(var_args){
var args43803 = [];
var len__36896__auto___44366 = arguments.length;
var i__36897__auto___44367 = (0);
while(true){
if((i__36897__auto___44367 < len__36896__auto___44366)){
args43803.push((arguments[i__36897__auto___44367]));

var G__44368 = (i__36897__auto___44367 + (1));
i__36897__auto___44367 = G__44368;
continue;
} else {
}
break;
}

var G__43807 = args43803.length;
switch (G__43807) {
case 0:
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43803.slice((1)),(0)));
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.samp,null,null);
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.samp,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.samp.cljs$lang$applyTo = (function (seq43804){
var G__43805 = cljs.core.first.call(null,seq43804);
var seq43804__$1 = cljs.core.next.call(null,seq43804);
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic(G__43805,seq43804__$1);
});

om_tools.dom.samp.cljs$lang$maxFixedArity = (1);

om_tools.dom.script = (function om_tools$dom$script(var_args){
var args43808 = [];
var len__36896__auto___44370 = arguments.length;
var i__36897__auto___44371 = (0);
while(true){
if((i__36897__auto___44371 < len__36896__auto___44370)){
args43808.push((arguments[i__36897__auto___44371]));

var G__44372 = (i__36897__auto___44371 + (1));
i__36897__auto___44371 = G__44372;
continue;
} else {
}
break;
}

var G__43812 = args43808.length;
switch (G__43812) {
case 0:
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43808.slice((1)),(0)));
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.script,null,null);
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.script,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.script.cljs$lang$applyTo = (function (seq43809){
var G__43810 = cljs.core.first.call(null,seq43809);
var seq43809__$1 = cljs.core.next.call(null,seq43809);
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic(G__43810,seq43809__$1);
});

om_tools.dom.script.cljs$lang$maxFixedArity = (1);

om_tools.dom.section = (function om_tools$dom$section(var_args){
var args43813 = [];
var len__36896__auto___44374 = arguments.length;
var i__36897__auto___44375 = (0);
while(true){
if((i__36897__auto___44375 < len__36896__auto___44374)){
args43813.push((arguments[i__36897__auto___44375]));

var G__44376 = (i__36897__auto___44375 + (1));
i__36897__auto___44375 = G__44376;
continue;
} else {
}
break;
}

var G__43817 = args43813.length;
switch (G__43817) {
case 0:
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43813.slice((1)),(0)));
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.section,null,null);
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.section,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.section.cljs$lang$applyTo = (function (seq43814){
var G__43815 = cljs.core.first.call(null,seq43814);
var seq43814__$1 = cljs.core.next.call(null,seq43814);
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic(G__43815,seq43814__$1);
});

om_tools.dom.section.cljs$lang$maxFixedArity = (1);

om_tools.dom.small = (function om_tools$dom$small(var_args){
var args43818 = [];
var len__36896__auto___44378 = arguments.length;
var i__36897__auto___44379 = (0);
while(true){
if((i__36897__auto___44379 < len__36896__auto___44378)){
args43818.push((arguments[i__36897__auto___44379]));

var G__44380 = (i__36897__auto___44379 + (1));
i__36897__auto___44379 = G__44380;
continue;
} else {
}
break;
}

var G__43822 = args43818.length;
switch (G__43822) {
case 0:
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43818.slice((1)),(0)));
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.small,null,null);
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.small,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.small.cljs$lang$applyTo = (function (seq43819){
var G__43820 = cljs.core.first.call(null,seq43819);
var seq43819__$1 = cljs.core.next.call(null,seq43819);
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic(G__43820,seq43819__$1);
});

om_tools.dom.small.cljs$lang$maxFixedArity = (1);

om_tools.dom.source = (function om_tools$dom$source(var_args){
var args43823 = [];
var len__36896__auto___44382 = arguments.length;
var i__36897__auto___44383 = (0);
while(true){
if((i__36897__auto___44383 < len__36896__auto___44382)){
args43823.push((arguments[i__36897__auto___44383]));

var G__44384 = (i__36897__auto___44383 + (1));
i__36897__auto___44383 = G__44384;
continue;
} else {
}
break;
}

var G__43827 = args43823.length;
switch (G__43827) {
case 0:
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43823.slice((1)),(0)));
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.source,null,null);
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.source,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.source.cljs$lang$applyTo = (function (seq43824){
var G__43825 = cljs.core.first.call(null,seq43824);
var seq43824__$1 = cljs.core.next.call(null,seq43824);
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic(G__43825,seq43824__$1);
});

om_tools.dom.source.cljs$lang$maxFixedArity = (1);

om_tools.dom.span = (function om_tools$dom$span(var_args){
var args43828 = [];
var len__36896__auto___44386 = arguments.length;
var i__36897__auto___44387 = (0);
while(true){
if((i__36897__auto___44387 < len__36896__auto___44386)){
args43828.push((arguments[i__36897__auto___44387]));

var G__44388 = (i__36897__auto___44387 + (1));
i__36897__auto___44387 = G__44388;
continue;
} else {
}
break;
}

var G__43832 = args43828.length;
switch (G__43832) {
case 0:
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43828.slice((1)),(0)));
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.span,null,null);
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.span,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.span.cljs$lang$applyTo = (function (seq43829){
var G__43830 = cljs.core.first.call(null,seq43829);
var seq43829__$1 = cljs.core.next.call(null,seq43829);
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic(G__43830,seq43829__$1);
});

om_tools.dom.span.cljs$lang$maxFixedArity = (1);

om_tools.dom.strong = (function om_tools$dom$strong(var_args){
var args43833 = [];
var len__36896__auto___44390 = arguments.length;
var i__36897__auto___44391 = (0);
while(true){
if((i__36897__auto___44391 < len__36896__auto___44390)){
args43833.push((arguments[i__36897__auto___44391]));

var G__44392 = (i__36897__auto___44391 + (1));
i__36897__auto___44391 = G__44392;
continue;
} else {
}
break;
}

var G__43837 = args43833.length;
switch (G__43837) {
case 0:
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43833.slice((1)),(0)));
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.strong,null,null);
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.strong,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.strong.cljs$lang$applyTo = (function (seq43834){
var G__43835 = cljs.core.first.call(null,seq43834);
var seq43834__$1 = cljs.core.next.call(null,seq43834);
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic(G__43835,seq43834__$1);
});

om_tools.dom.strong.cljs$lang$maxFixedArity = (1);

om_tools.dom.style = (function om_tools$dom$style(var_args){
var args43838 = [];
var len__36896__auto___44394 = arguments.length;
var i__36897__auto___44395 = (0);
while(true){
if((i__36897__auto___44395 < len__36896__auto___44394)){
args43838.push((arguments[i__36897__auto___44395]));

var G__44396 = (i__36897__auto___44395 + (1));
i__36897__auto___44395 = G__44396;
continue;
} else {
}
break;
}

var G__43842 = args43838.length;
switch (G__43842) {
case 0:
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43838.slice((1)),(0)));
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.style,null,null);
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.style,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.style.cljs$lang$applyTo = (function (seq43839){
var G__43840 = cljs.core.first.call(null,seq43839);
var seq43839__$1 = cljs.core.next.call(null,seq43839);
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic(G__43840,seq43839__$1);
});

om_tools.dom.style.cljs$lang$maxFixedArity = (1);

om_tools.dom.sub = (function om_tools$dom$sub(var_args){
var args43843 = [];
var len__36896__auto___44398 = arguments.length;
var i__36897__auto___44399 = (0);
while(true){
if((i__36897__auto___44399 < len__36896__auto___44398)){
args43843.push((arguments[i__36897__auto___44399]));

var G__44400 = (i__36897__auto___44399 + (1));
i__36897__auto___44399 = G__44400;
continue;
} else {
}
break;
}

var G__43847 = args43843.length;
switch (G__43847) {
case 0:
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43843.slice((1)),(0)));
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sub,null,null);
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.sub,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.sub.cljs$lang$applyTo = (function (seq43844){
var G__43845 = cljs.core.first.call(null,seq43844);
var seq43844__$1 = cljs.core.next.call(null,seq43844);
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic(G__43845,seq43844__$1);
});

om_tools.dom.sub.cljs$lang$maxFixedArity = (1);

om_tools.dom.summary = (function om_tools$dom$summary(var_args){
var args43848 = [];
var len__36896__auto___44402 = arguments.length;
var i__36897__auto___44403 = (0);
while(true){
if((i__36897__auto___44403 < len__36896__auto___44402)){
args43848.push((arguments[i__36897__auto___44403]));

var G__44404 = (i__36897__auto___44403 + (1));
i__36897__auto___44403 = G__44404;
continue;
} else {
}
break;
}

var G__43852 = args43848.length;
switch (G__43852) {
case 0:
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43848.slice((1)),(0)));
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.summary,null,null);
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.summary,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.summary.cljs$lang$applyTo = (function (seq43849){
var G__43850 = cljs.core.first.call(null,seq43849);
var seq43849__$1 = cljs.core.next.call(null,seq43849);
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic(G__43850,seq43849__$1);
});

om_tools.dom.summary.cljs$lang$maxFixedArity = (1);

om_tools.dom.sup = (function om_tools$dom$sup(var_args){
var args43853 = [];
var len__36896__auto___44406 = arguments.length;
var i__36897__auto___44407 = (0);
while(true){
if((i__36897__auto___44407 < len__36896__auto___44406)){
args43853.push((arguments[i__36897__auto___44407]));

var G__44408 = (i__36897__auto___44407 + (1));
i__36897__auto___44407 = G__44408;
continue;
} else {
}
break;
}

var G__43857 = args43853.length;
switch (G__43857) {
case 0:
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43853.slice((1)),(0)));
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sup,null,null);
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.sup,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.sup.cljs$lang$applyTo = (function (seq43854){
var G__43855 = cljs.core.first.call(null,seq43854);
var seq43854__$1 = cljs.core.next.call(null,seq43854);
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic(G__43855,seq43854__$1);
});

om_tools.dom.sup.cljs$lang$maxFixedArity = (1);

om_tools.dom.table = (function om_tools$dom$table(var_args){
var args43858 = [];
var len__36896__auto___44410 = arguments.length;
var i__36897__auto___44411 = (0);
while(true){
if((i__36897__auto___44411 < len__36896__auto___44410)){
args43858.push((arguments[i__36897__auto___44411]));

var G__44412 = (i__36897__auto___44411 + (1));
i__36897__auto___44411 = G__44412;
continue;
} else {
}
break;
}

var G__43862 = args43858.length;
switch (G__43862) {
case 0:
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43858.slice((1)),(0)));
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.table,null,null);
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.table,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.table.cljs$lang$applyTo = (function (seq43859){
var G__43860 = cljs.core.first.call(null,seq43859);
var seq43859__$1 = cljs.core.next.call(null,seq43859);
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic(G__43860,seq43859__$1);
});

om_tools.dom.table.cljs$lang$maxFixedArity = (1);

om_tools.dom.tbody = (function om_tools$dom$tbody(var_args){
var args43863 = [];
var len__36896__auto___44414 = arguments.length;
var i__36897__auto___44415 = (0);
while(true){
if((i__36897__auto___44415 < len__36896__auto___44414)){
args43863.push((arguments[i__36897__auto___44415]));

var G__44416 = (i__36897__auto___44415 + (1));
i__36897__auto___44415 = G__44416;
continue;
} else {
}
break;
}

var G__43867 = args43863.length;
switch (G__43867) {
case 0:
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43863.slice((1)),(0)));
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tbody,null,null);
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.tbody,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.tbody.cljs$lang$applyTo = (function (seq43864){
var G__43865 = cljs.core.first.call(null,seq43864);
var seq43864__$1 = cljs.core.next.call(null,seq43864);
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(G__43865,seq43864__$1);
});

om_tools.dom.tbody.cljs$lang$maxFixedArity = (1);

om_tools.dom.td = (function om_tools$dom$td(var_args){
var args43868 = [];
var len__36896__auto___44418 = arguments.length;
var i__36897__auto___44419 = (0);
while(true){
if((i__36897__auto___44419 < len__36896__auto___44418)){
args43868.push((arguments[i__36897__auto___44419]));

var G__44420 = (i__36897__auto___44419 + (1));
i__36897__auto___44419 = G__44420;
continue;
} else {
}
break;
}

var G__43872 = args43868.length;
switch (G__43872) {
case 0:
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43868.slice((1)),(0)));
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.td,null,null);
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.td,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.td.cljs$lang$applyTo = (function (seq43869){
var G__43870 = cljs.core.first.call(null,seq43869);
var seq43869__$1 = cljs.core.next.call(null,seq43869);
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic(G__43870,seq43869__$1);
});

om_tools.dom.td.cljs$lang$maxFixedArity = (1);

om_tools.dom.tfoot = (function om_tools$dom$tfoot(var_args){
var args43873 = [];
var len__36896__auto___44422 = arguments.length;
var i__36897__auto___44423 = (0);
while(true){
if((i__36897__auto___44423 < len__36896__auto___44422)){
args43873.push((arguments[i__36897__auto___44423]));

var G__44424 = (i__36897__auto___44423 + (1));
i__36897__auto___44423 = G__44424;
continue;
} else {
}
break;
}

var G__43877 = args43873.length;
switch (G__43877) {
case 0:
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43873.slice((1)),(0)));
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tfoot,null,null);
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.tfoot,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.tfoot.cljs$lang$applyTo = (function (seq43874){
var G__43875 = cljs.core.first.call(null,seq43874);
var seq43874__$1 = cljs.core.next.call(null,seq43874);
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(G__43875,seq43874__$1);
});

om_tools.dom.tfoot.cljs$lang$maxFixedArity = (1);

om_tools.dom.th = (function om_tools$dom$th(var_args){
var args43878 = [];
var len__36896__auto___44426 = arguments.length;
var i__36897__auto___44427 = (0);
while(true){
if((i__36897__auto___44427 < len__36896__auto___44426)){
args43878.push((arguments[i__36897__auto___44427]));

var G__44428 = (i__36897__auto___44427 + (1));
i__36897__auto___44427 = G__44428;
continue;
} else {
}
break;
}

var G__43882 = args43878.length;
switch (G__43882) {
case 0:
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43878.slice((1)),(0)));
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.th,null,null);
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.th,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.th.cljs$lang$applyTo = (function (seq43879){
var G__43880 = cljs.core.first.call(null,seq43879);
var seq43879__$1 = cljs.core.next.call(null,seq43879);
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic(G__43880,seq43879__$1);
});

om_tools.dom.th.cljs$lang$maxFixedArity = (1);

om_tools.dom.thead = (function om_tools$dom$thead(var_args){
var args43883 = [];
var len__36896__auto___44430 = arguments.length;
var i__36897__auto___44431 = (0);
while(true){
if((i__36897__auto___44431 < len__36896__auto___44430)){
args43883.push((arguments[i__36897__auto___44431]));

var G__44432 = (i__36897__auto___44431 + (1));
i__36897__auto___44431 = G__44432;
continue;
} else {
}
break;
}

var G__43887 = args43883.length;
switch (G__43887) {
case 0:
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43883.slice((1)),(0)));
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.thead,null,null);
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.thead,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.thead.cljs$lang$applyTo = (function (seq43884){
var G__43885 = cljs.core.first.call(null,seq43884);
var seq43884__$1 = cljs.core.next.call(null,seq43884);
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic(G__43885,seq43884__$1);
});

om_tools.dom.thead.cljs$lang$maxFixedArity = (1);

om_tools.dom.time = (function om_tools$dom$time(var_args){
var args43888 = [];
var len__36896__auto___44434 = arguments.length;
var i__36897__auto___44435 = (0);
while(true){
if((i__36897__auto___44435 < len__36896__auto___44434)){
args43888.push((arguments[i__36897__auto___44435]));

var G__44436 = (i__36897__auto___44435 + (1));
i__36897__auto___44435 = G__44436;
continue;
} else {
}
break;
}

var G__43892 = args43888.length;
switch (G__43892) {
case 0:
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43888.slice((1)),(0)));
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.time,null,null);
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.time,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.time.cljs$lang$applyTo = (function (seq43889){
var G__43890 = cljs.core.first.call(null,seq43889);
var seq43889__$1 = cljs.core.next.call(null,seq43889);
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic(G__43890,seq43889__$1);
});

om_tools.dom.time.cljs$lang$maxFixedArity = (1);

om_tools.dom.title = (function om_tools$dom$title(var_args){
var args43893 = [];
var len__36896__auto___44438 = arguments.length;
var i__36897__auto___44439 = (0);
while(true){
if((i__36897__auto___44439 < len__36896__auto___44438)){
args43893.push((arguments[i__36897__auto___44439]));

var G__44440 = (i__36897__auto___44439 + (1));
i__36897__auto___44439 = G__44440;
continue;
} else {
}
break;
}

var G__43897 = args43893.length;
switch (G__43897) {
case 0:
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43893.slice((1)),(0)));
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.title,null,null);
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.title,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.title.cljs$lang$applyTo = (function (seq43894){
var G__43895 = cljs.core.first.call(null,seq43894);
var seq43894__$1 = cljs.core.next.call(null,seq43894);
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic(G__43895,seq43894__$1);
});

om_tools.dom.title.cljs$lang$maxFixedArity = (1);

om_tools.dom.tr = (function om_tools$dom$tr(var_args){
var args43898 = [];
var len__36896__auto___44442 = arguments.length;
var i__36897__auto___44443 = (0);
while(true){
if((i__36897__auto___44443 < len__36896__auto___44442)){
args43898.push((arguments[i__36897__auto___44443]));

var G__44444 = (i__36897__auto___44443 + (1));
i__36897__auto___44443 = G__44444;
continue;
} else {
}
break;
}

var G__43902 = args43898.length;
switch (G__43902) {
case 0:
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43898.slice((1)),(0)));
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tr,null,null);
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.tr,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.tr.cljs$lang$applyTo = (function (seq43899){
var G__43900 = cljs.core.first.call(null,seq43899);
var seq43899__$1 = cljs.core.next.call(null,seq43899);
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic(G__43900,seq43899__$1);
});

om_tools.dom.tr.cljs$lang$maxFixedArity = (1);

om_tools.dom.track = (function om_tools$dom$track(var_args){
var args43903 = [];
var len__36896__auto___44446 = arguments.length;
var i__36897__auto___44447 = (0);
while(true){
if((i__36897__auto___44447 < len__36896__auto___44446)){
args43903.push((arguments[i__36897__auto___44447]));

var G__44448 = (i__36897__auto___44447 + (1));
i__36897__auto___44447 = G__44448;
continue;
} else {
}
break;
}

var G__43907 = args43903.length;
switch (G__43907) {
case 0:
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43903.slice((1)),(0)));
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.track,null,null);
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.track,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.track.cljs$lang$applyTo = (function (seq43904){
var G__43905 = cljs.core.first.call(null,seq43904);
var seq43904__$1 = cljs.core.next.call(null,seq43904);
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic(G__43905,seq43904__$1);
});

om_tools.dom.track.cljs$lang$maxFixedArity = (1);

om_tools.dom.u = (function om_tools$dom$u(var_args){
var args43908 = [];
var len__36896__auto___44450 = arguments.length;
var i__36897__auto___44451 = (0);
while(true){
if((i__36897__auto___44451 < len__36896__auto___44450)){
args43908.push((arguments[i__36897__auto___44451]));

var G__44452 = (i__36897__auto___44451 + (1));
i__36897__auto___44451 = G__44452;
continue;
} else {
}
break;
}

var G__43912 = args43908.length;
switch (G__43912) {
case 0:
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43908.slice((1)),(0)));
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.u,null,null);
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.u,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.u.cljs$lang$applyTo = (function (seq43909){
var G__43910 = cljs.core.first.call(null,seq43909);
var seq43909__$1 = cljs.core.next.call(null,seq43909);
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic(G__43910,seq43909__$1);
});

om_tools.dom.u.cljs$lang$maxFixedArity = (1);

om_tools.dom.ul = (function om_tools$dom$ul(var_args){
var args43913 = [];
var len__36896__auto___44454 = arguments.length;
var i__36897__auto___44455 = (0);
while(true){
if((i__36897__auto___44455 < len__36896__auto___44454)){
args43913.push((arguments[i__36897__auto___44455]));

var G__44456 = (i__36897__auto___44455 + (1));
i__36897__auto___44455 = G__44456;
continue;
} else {
}
break;
}

var G__43917 = args43913.length;
switch (G__43917) {
case 0:
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43913.slice((1)),(0)));
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ul,null,null);
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.ul,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.ul.cljs$lang$applyTo = (function (seq43914){
var G__43915 = cljs.core.first.call(null,seq43914);
var seq43914__$1 = cljs.core.next.call(null,seq43914);
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic(G__43915,seq43914__$1);
});

om_tools.dom.ul.cljs$lang$maxFixedArity = (1);

om_tools.dom.var$ = (function om_tools$dom$var(var_args){
var args43918 = [];
var len__36896__auto___44458 = arguments.length;
var i__36897__auto___44459 = (0);
while(true){
if((i__36897__auto___44459 < len__36896__auto___44458)){
args43918.push((arguments[i__36897__auto___44459]));

var G__44460 = (i__36897__auto___44459 + (1));
i__36897__auto___44459 = G__44460;
continue;
} else {
}
break;
}

var G__43922 = args43918.length;
switch (G__43922) {
case 0:
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43918.slice((1)),(0)));
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.var$,null,null);
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.var$,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.var$.cljs$lang$applyTo = (function (seq43919){
var G__43920 = cljs.core.first.call(null,seq43919);
var seq43919__$1 = cljs.core.next.call(null,seq43919);
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic(G__43920,seq43919__$1);
});

om_tools.dom.var$.cljs$lang$maxFixedArity = (1);

om_tools.dom.video = (function om_tools$dom$video(var_args){
var args43923 = [];
var len__36896__auto___44462 = arguments.length;
var i__36897__auto___44463 = (0);
while(true){
if((i__36897__auto___44463 < len__36896__auto___44462)){
args43923.push((arguments[i__36897__auto___44463]));

var G__44464 = (i__36897__auto___44463 + (1));
i__36897__auto___44463 = G__44464;
continue;
} else {
}
break;
}

var G__43927 = args43923.length;
switch (G__43927) {
case 0:
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43923.slice((1)),(0)));
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.video,null,null);
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.video,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.video.cljs$lang$applyTo = (function (seq43924){
var G__43925 = cljs.core.first.call(null,seq43924);
var seq43924__$1 = cljs.core.next.call(null,seq43924);
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic(G__43925,seq43924__$1);
});

om_tools.dom.video.cljs$lang$maxFixedArity = (1);

om_tools.dom.wbr = (function om_tools$dom$wbr(var_args){
var args43928 = [];
var len__36896__auto___44466 = arguments.length;
var i__36897__auto___44467 = (0);
while(true){
if((i__36897__auto___44467 < len__36896__auto___44466)){
args43928.push((arguments[i__36897__auto___44467]));

var G__44468 = (i__36897__auto___44467 + (1));
i__36897__auto___44467 = G__44468;
continue;
} else {
}
break;
}

var G__43932 = args43928.length;
switch (G__43932) {
case 0:
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43928.slice((1)),(0)));
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.wbr,null,null);
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.wbr,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.wbr.cljs$lang$applyTo = (function (seq43929){
var G__43930 = cljs.core.first.call(null,seq43929);
var seq43929__$1 = cljs.core.next.call(null,seq43929);
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(G__43930,seq43929__$1);
});

om_tools.dom.wbr.cljs$lang$maxFixedArity = (1);

om_tools.dom.circle = (function om_tools$dom$circle(var_args){
var args43933 = [];
var len__36896__auto___44470 = arguments.length;
var i__36897__auto___44471 = (0);
while(true){
if((i__36897__auto___44471 < len__36896__auto___44470)){
args43933.push((arguments[i__36897__auto___44471]));

var G__44472 = (i__36897__auto___44471 + (1));
i__36897__auto___44471 = G__44472;
continue;
} else {
}
break;
}

var G__43937 = args43933.length;
switch (G__43937) {
case 0:
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43933.slice((1)),(0)));
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.circle,null,null);
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.circle,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.circle.cljs$lang$applyTo = (function (seq43934){
var G__43935 = cljs.core.first.call(null,seq43934);
var seq43934__$1 = cljs.core.next.call(null,seq43934);
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic(G__43935,seq43934__$1);
});

om_tools.dom.circle.cljs$lang$maxFixedArity = (1);

om_tools.dom.clipPath = (function om_tools$dom$clipPath(var_args){
var args43938 = [];
var len__36896__auto___44474 = arguments.length;
var i__36897__auto___44475 = (0);
while(true){
if((i__36897__auto___44475 < len__36896__auto___44474)){
args43938.push((arguments[i__36897__auto___44475]));

var G__44476 = (i__36897__auto___44475 + (1));
i__36897__auto___44475 = G__44476;
continue;
} else {
}
break;
}

var G__43942 = args43938.length;
switch (G__43942) {
case 0:
return om_tools.dom.clipPath.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43938.slice((1)),(0)));
return om_tools.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.clipPath.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.clipPath,null,null);
});

om_tools.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.clipPath,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.clipPath.cljs$lang$applyTo = (function (seq43939){
var G__43940 = cljs.core.first.call(null,seq43939);
var seq43939__$1 = cljs.core.next.call(null,seq43939);
return om_tools.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(G__43940,seq43939__$1);
});

om_tools.dom.clipPath.cljs$lang$maxFixedArity = (1);

om_tools.dom.ellipse = (function om_tools$dom$ellipse(var_args){
var args43943 = [];
var len__36896__auto___44478 = arguments.length;
var i__36897__auto___44479 = (0);
while(true){
if((i__36897__auto___44479 < len__36896__auto___44478)){
args43943.push((arguments[i__36897__auto___44479]));

var G__44480 = (i__36897__auto___44479 + (1));
i__36897__auto___44479 = G__44480;
continue;
} else {
}
break;
}

var G__43947 = args43943.length;
switch (G__43947) {
case 0:
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43943.slice((1)),(0)));
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ellipse,null,null);
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.ellipse,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.ellipse.cljs$lang$applyTo = (function (seq43944){
var G__43945 = cljs.core.first.call(null,seq43944);
var seq43944__$1 = cljs.core.next.call(null,seq43944);
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(G__43945,seq43944__$1);
});

om_tools.dom.ellipse.cljs$lang$maxFixedArity = (1);

om_tools.dom.g = (function om_tools$dom$g(var_args){
var args43948 = [];
var len__36896__auto___44482 = arguments.length;
var i__36897__auto___44483 = (0);
while(true){
if((i__36897__auto___44483 < len__36896__auto___44482)){
args43948.push((arguments[i__36897__auto___44483]));

var G__44484 = (i__36897__auto___44483 + (1));
i__36897__auto___44483 = G__44484;
continue;
} else {
}
break;
}

var G__43952 = args43948.length;
switch (G__43952) {
case 0:
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43948.slice((1)),(0)));
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.g,null,null);
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.g,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.g.cljs$lang$applyTo = (function (seq43949){
var G__43950 = cljs.core.first.call(null,seq43949);
var seq43949__$1 = cljs.core.next.call(null,seq43949);
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic(G__43950,seq43949__$1);
});

om_tools.dom.g.cljs$lang$maxFixedArity = (1);

om_tools.dom.line = (function om_tools$dom$line(var_args){
var args43953 = [];
var len__36896__auto___44486 = arguments.length;
var i__36897__auto___44487 = (0);
while(true){
if((i__36897__auto___44487 < len__36896__auto___44486)){
args43953.push((arguments[i__36897__auto___44487]));

var G__44488 = (i__36897__auto___44487 + (1));
i__36897__auto___44487 = G__44488;
continue;
} else {
}
break;
}

var G__43957 = args43953.length;
switch (G__43957) {
case 0:
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43953.slice((1)),(0)));
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.line,null,null);
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.line,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.line.cljs$lang$applyTo = (function (seq43954){
var G__43955 = cljs.core.first.call(null,seq43954);
var seq43954__$1 = cljs.core.next.call(null,seq43954);
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic(G__43955,seq43954__$1);
});

om_tools.dom.line.cljs$lang$maxFixedArity = (1);

om_tools.dom.mask = (function om_tools$dom$mask(var_args){
var args43958 = [];
var len__36896__auto___44490 = arguments.length;
var i__36897__auto___44491 = (0);
while(true){
if((i__36897__auto___44491 < len__36896__auto___44490)){
args43958.push((arguments[i__36897__auto___44491]));

var G__44492 = (i__36897__auto___44491 + (1));
i__36897__auto___44491 = G__44492;
continue;
} else {
}
break;
}

var G__43962 = args43958.length;
switch (G__43962) {
case 0:
return om_tools.dom.mask.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43958.slice((1)),(0)));
return om_tools.dom.mask.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.mask.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.mask,null,null);
});

om_tools.dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.mask,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.mask.cljs$lang$applyTo = (function (seq43959){
var G__43960 = cljs.core.first.call(null,seq43959);
var seq43959__$1 = cljs.core.next.call(null,seq43959);
return om_tools.dom.mask.cljs$core$IFn$_invoke$arity$variadic(G__43960,seq43959__$1);
});

om_tools.dom.mask.cljs$lang$maxFixedArity = (1);

om_tools.dom.path = (function om_tools$dom$path(var_args){
var args43963 = [];
var len__36896__auto___44494 = arguments.length;
var i__36897__auto___44495 = (0);
while(true){
if((i__36897__auto___44495 < len__36896__auto___44494)){
args43963.push((arguments[i__36897__auto___44495]));

var G__44496 = (i__36897__auto___44495 + (1));
i__36897__auto___44495 = G__44496;
continue;
} else {
}
break;
}

var G__43967 = args43963.length;
switch (G__43967) {
case 0:
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43963.slice((1)),(0)));
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.path,null,null);
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.path,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.path.cljs$lang$applyTo = (function (seq43964){
var G__43965 = cljs.core.first.call(null,seq43964);
var seq43964__$1 = cljs.core.next.call(null,seq43964);
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic(G__43965,seq43964__$1);
});

om_tools.dom.path.cljs$lang$maxFixedArity = (1);

om_tools.dom.pattern = (function om_tools$dom$pattern(var_args){
var args43968 = [];
var len__36896__auto___44498 = arguments.length;
var i__36897__auto___44499 = (0);
while(true){
if((i__36897__auto___44499 < len__36896__auto___44498)){
args43968.push((arguments[i__36897__auto___44499]));

var G__44500 = (i__36897__auto___44499 + (1));
i__36897__auto___44499 = G__44500;
continue;
} else {
}
break;
}

var G__43972 = args43968.length;
switch (G__43972) {
case 0:
return om_tools.dom.pattern.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43968.slice((1)),(0)));
return om_tools.dom.pattern.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.pattern.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.pattern,null,null);
});

om_tools.dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.pattern,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.pattern.cljs$lang$applyTo = (function (seq43969){
var G__43970 = cljs.core.first.call(null,seq43969);
var seq43969__$1 = cljs.core.next.call(null,seq43969);
return om_tools.dom.pattern.cljs$core$IFn$_invoke$arity$variadic(G__43970,seq43969__$1);
});

om_tools.dom.pattern.cljs$lang$maxFixedArity = (1);

om_tools.dom.polyline = (function om_tools$dom$polyline(var_args){
var args43973 = [];
var len__36896__auto___44502 = arguments.length;
var i__36897__auto___44503 = (0);
while(true){
if((i__36897__auto___44503 < len__36896__auto___44502)){
args43973.push((arguments[i__36897__auto___44503]));

var G__44504 = (i__36897__auto___44503 + (1));
i__36897__auto___44503 = G__44504;
continue;
} else {
}
break;
}

var G__43977 = args43973.length;
switch (G__43977) {
case 0:
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43973.slice((1)),(0)));
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polyline,null,null);
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.polyline,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.polyline.cljs$lang$applyTo = (function (seq43974){
var G__43975 = cljs.core.first.call(null,seq43974);
var seq43974__$1 = cljs.core.next.call(null,seq43974);
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(G__43975,seq43974__$1);
});

om_tools.dom.polyline.cljs$lang$maxFixedArity = (1);

om_tools.dom.rect = (function om_tools$dom$rect(var_args){
var args43978 = [];
var len__36896__auto___44506 = arguments.length;
var i__36897__auto___44507 = (0);
while(true){
if((i__36897__auto___44507 < len__36896__auto___44506)){
args43978.push((arguments[i__36897__auto___44507]));

var G__44508 = (i__36897__auto___44507 + (1));
i__36897__auto___44507 = G__44508;
continue;
} else {
}
break;
}

var G__43982 = args43978.length;
switch (G__43982) {
case 0:
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43978.slice((1)),(0)));
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rect,null,null);
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.rect,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.rect.cljs$lang$applyTo = (function (seq43979){
var G__43980 = cljs.core.first.call(null,seq43979);
var seq43979__$1 = cljs.core.next.call(null,seq43979);
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic(G__43980,seq43979__$1);
});

om_tools.dom.rect.cljs$lang$maxFixedArity = (1);

om_tools.dom.svg = (function om_tools$dom$svg(var_args){
var args43983 = [];
var len__36896__auto___44510 = arguments.length;
var i__36897__auto___44511 = (0);
while(true){
if((i__36897__auto___44511 < len__36896__auto___44510)){
args43983.push((arguments[i__36897__auto___44511]));

var G__44512 = (i__36897__auto___44511 + (1));
i__36897__auto___44511 = G__44512;
continue;
} else {
}
break;
}

var G__43987 = args43983.length;
switch (G__43987) {
case 0:
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43983.slice((1)),(0)));
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.svg,null,null);
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.svg,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.svg.cljs$lang$applyTo = (function (seq43984){
var G__43985 = cljs.core.first.call(null,seq43984);
var seq43984__$1 = cljs.core.next.call(null,seq43984);
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic(G__43985,seq43984__$1);
});

om_tools.dom.svg.cljs$lang$maxFixedArity = (1);

om_tools.dom.text = (function om_tools$dom$text(var_args){
var args43988 = [];
var len__36896__auto___44514 = arguments.length;
var i__36897__auto___44515 = (0);
while(true){
if((i__36897__auto___44515 < len__36896__auto___44514)){
args43988.push((arguments[i__36897__auto___44515]));

var G__44516 = (i__36897__auto___44515 + (1));
i__36897__auto___44515 = G__44516;
continue;
} else {
}
break;
}

var G__43992 = args43988.length;
switch (G__43992) {
case 0:
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43988.slice((1)),(0)));
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.text,null,null);
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.text,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.text.cljs$lang$applyTo = (function (seq43989){
var G__43990 = cljs.core.first.call(null,seq43989);
var seq43989__$1 = cljs.core.next.call(null,seq43989);
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic(G__43990,seq43989__$1);
});

om_tools.dom.text.cljs$lang$maxFixedArity = (1);

om_tools.dom.defs = (function om_tools$dom$defs(var_args){
var args43993 = [];
var len__36896__auto___44518 = arguments.length;
var i__36897__auto___44519 = (0);
while(true){
if((i__36897__auto___44519 < len__36896__auto___44518)){
args43993.push((arguments[i__36897__auto___44519]));

var G__44520 = (i__36897__auto___44519 + (1));
i__36897__auto___44519 = G__44520;
continue;
} else {
}
break;
}

var G__43997 = args43993.length;
switch (G__43997) {
case 0:
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43993.slice((1)),(0)));
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.defs,null,null);
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.defs,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.defs.cljs$lang$applyTo = (function (seq43994){
var G__43995 = cljs.core.first.call(null,seq43994);
var seq43994__$1 = cljs.core.next.call(null,seq43994);
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic(G__43995,seq43994__$1);
});

om_tools.dom.defs.cljs$lang$maxFixedArity = (1);

om_tools.dom.linearGradient = (function om_tools$dom$linearGradient(var_args){
var args43998 = [];
var len__36896__auto___44522 = arguments.length;
var i__36897__auto___44523 = (0);
while(true){
if((i__36897__auto___44523 < len__36896__auto___44522)){
args43998.push((arguments[i__36897__auto___44523]));

var G__44524 = (i__36897__auto___44523 + (1));
i__36897__auto___44523 = G__44524;
continue;
} else {
}
break;
}

var G__44002 = args43998.length;
switch (G__44002) {
case 0:
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43998.slice((1)),(0)));
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.linearGradient,null,null);
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.linearGradient,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.linearGradient.cljs$lang$applyTo = (function (seq43999){
var G__44000 = cljs.core.first.call(null,seq43999);
var seq43999__$1 = cljs.core.next.call(null,seq43999);
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(G__44000,seq43999__$1);
});

om_tools.dom.linearGradient.cljs$lang$maxFixedArity = (1);

om_tools.dom.polygon = (function om_tools$dom$polygon(var_args){
var args44003 = [];
var len__36896__auto___44526 = arguments.length;
var i__36897__auto___44527 = (0);
while(true){
if((i__36897__auto___44527 < len__36896__auto___44526)){
args44003.push((arguments[i__36897__auto___44527]));

var G__44528 = (i__36897__auto___44527 + (1));
i__36897__auto___44527 = G__44528;
continue;
} else {
}
break;
}

var G__44007 = args44003.length;
switch (G__44007) {
case 0:
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args44003.slice((1)),(0)));
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polygon,null,null);
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.polygon,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.polygon.cljs$lang$applyTo = (function (seq44004){
var G__44005 = cljs.core.first.call(null,seq44004);
var seq44004__$1 = cljs.core.next.call(null,seq44004);
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(G__44005,seq44004__$1);
});

om_tools.dom.polygon.cljs$lang$maxFixedArity = (1);

om_tools.dom.radialGradient = (function om_tools$dom$radialGradient(var_args){
var args44008 = [];
var len__36896__auto___44530 = arguments.length;
var i__36897__auto___44531 = (0);
while(true){
if((i__36897__auto___44531 < len__36896__auto___44530)){
args44008.push((arguments[i__36897__auto___44531]));

var G__44532 = (i__36897__auto___44531 + (1));
i__36897__auto___44531 = G__44532;
continue;
} else {
}
break;
}

var G__44012 = args44008.length;
switch (G__44012) {
case 0:
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args44008.slice((1)),(0)));
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.radialGradient,null,null);
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.radialGradient,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.radialGradient.cljs$lang$applyTo = (function (seq44009){
var G__44010 = cljs.core.first.call(null,seq44009);
var seq44009__$1 = cljs.core.next.call(null,seq44009);
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(G__44010,seq44009__$1);
});

om_tools.dom.radialGradient.cljs$lang$maxFixedArity = (1);

om_tools.dom.stop = (function om_tools$dom$stop(var_args){
var args44013 = [];
var len__36896__auto___44534 = arguments.length;
var i__36897__auto___44535 = (0);
while(true){
if((i__36897__auto___44535 < len__36896__auto___44534)){
args44013.push((arguments[i__36897__auto___44535]));

var G__44536 = (i__36897__auto___44535 + (1));
i__36897__auto___44535 = G__44536;
continue;
} else {
}
break;
}

var G__44017 = args44013.length;
switch (G__44017) {
case 0:
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args44013.slice((1)),(0)));
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.stop,null,null);
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.stop,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.stop.cljs$lang$applyTo = (function (seq44014){
var G__44015 = cljs.core.first.call(null,seq44014);
var seq44014__$1 = cljs.core.next.call(null,seq44014);
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic(G__44015,seq44014__$1);
});

om_tools.dom.stop.cljs$lang$maxFixedArity = (1);

om_tools.dom.tspan = (function om_tools$dom$tspan(var_args){
var args44018 = [];
var len__36896__auto___44538 = arguments.length;
var i__36897__auto___44539 = (0);
while(true){
if((i__36897__auto___44539 < len__36896__auto___44538)){
args44018.push((arguments[i__36897__auto___44539]));

var G__44540 = (i__36897__auto___44539 + (1));
i__36897__auto___44539 = G__44540;
continue;
} else {
}
break;
}

var G__44022 = args44018.length;
switch (G__44022) {
case 0:
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args44018.slice((1)),(0)));
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tspan,null,null);
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.tspan,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.tspan.cljs$lang$applyTo = (function (seq44019){
var G__44020 = cljs.core.first.call(null,seq44019);
var seq44019__$1 = cljs.core.next.call(null,seq44019);
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(G__44020,seq44019__$1);
});

om_tools.dom.tspan.cljs$lang$maxFixedArity = (1);

om_tools.dom.use = (function om_tools$dom$use(var_args){
var args44023 = [];
var len__36896__auto___44542 = arguments.length;
var i__36897__auto___44543 = (0);
while(true){
if((i__36897__auto___44543 < len__36896__auto___44542)){
args44023.push((arguments[i__36897__auto___44543]));

var G__44544 = (i__36897__auto___44543 + (1));
i__36897__auto___44543 = G__44544;
continue;
} else {
}
break;
}

var G__44027 = args44023.length;
switch (G__44027) {
case 0:
return om_tools.dom.use.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args44023.slice((1)),(0)));
return om_tools.dom.use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.use.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.use,null,null);
});

om_tools.dom.use.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,React.DOM.use,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.use.cljs$lang$applyTo = (function (seq44024){
var G__44025 = cljs.core.first.call(null,seq44024);
var seq44024__$1 = cljs.core.next.call(null,seq44024);
return om_tools.dom.use.cljs$core$IFn$_invoke$arity$variadic(G__44025,seq44024__$1);
});

om_tools.dom.use.cljs$lang$maxFixedArity = (1);

om_tools.dom.input = (function om_tools$dom$input(var_args){
var args44028 = [];
var len__36896__auto___44546 = arguments.length;
var i__36897__auto___44547 = (0);
while(true){
if((i__36897__auto___44547 < len__36896__auto___44546)){
args44028.push((arguments[i__36897__auto___44547]));

var G__44548 = (i__36897__auto___44547 + (1));
i__36897__auto___44547 = G__44548;
continue;
} else {
}
break;
}

var G__44032 = args44028.length;
switch (G__44032) {
case 0:
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args44028.slice((1)),(0)));
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.input,null,null);
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,om.dom.input,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.input.cljs$lang$applyTo = (function (seq44029){
var G__44030 = cljs.core.first.call(null,seq44029);
var seq44029__$1 = cljs.core.next.call(null,seq44029);
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic(G__44030,seq44029__$1);
});

om_tools.dom.input.cljs$lang$maxFixedArity = (1);

om_tools.dom.textarea = (function om_tools$dom$textarea(var_args){
var args44033 = [];
var len__36896__auto___44550 = arguments.length;
var i__36897__auto___44551 = (0);
while(true){
if((i__36897__auto___44551 < len__36896__auto___44550)){
args44033.push((arguments[i__36897__auto___44551]));

var G__44552 = (i__36897__auto___44551 + (1));
i__36897__auto___44551 = G__44552;
continue;
} else {
}
break;
}

var G__44037 = args44033.length;
switch (G__44037) {
case 0:
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args44033.slice((1)),(0)));
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.textarea,null,null);
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,om.dom.textarea,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.textarea.cljs$lang$applyTo = (function (seq44034){
var G__44035 = cljs.core.first.call(null,seq44034);
var seq44034__$1 = cljs.core.next.call(null,seq44034);
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(G__44035,seq44034__$1);
});

om_tools.dom.textarea.cljs$lang$maxFixedArity = (1);

om_tools.dom.option = (function om_tools$dom$option(var_args){
var args43548 = [];
var len__36896__auto___44554 = arguments.length;
var i__36897__auto___44555 = (0);
while(true){
if((i__36897__auto___44555 < len__36896__auto___44554)){
args43548.push((arguments[i__36897__auto___44555]));

var G__44556 = (i__36897__auto___44555 + (1));
i__36897__auto___44555 = G__44556;
continue;
} else {
}
break;
}

var G__43552 = args43548.length;
switch (G__43552) {
case 0:
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args43548.slice((1)),(0)));
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36915__auto__);

}
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.option,null,null);
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (opts__43364__auto__,children__43365__auto__){
return om_tools.dom.element.call(null,om.dom.option,opts__43364__auto__,children__43365__auto__);
});

om_tools.dom.option.cljs$lang$applyTo = (function (seq43549){
var G__43550 = cljs.core.first.call(null,seq43549);
var seq43549__$1 = cljs.core.next.call(null,seq43549);
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic(G__43550,seq43549__$1);
});

om_tools.dom.option.cljs$lang$maxFixedArity = (1);
om_tools.dom.class_set = (function om_tools$dom$class_set(m){

var temp__4425__auto__ = cljs.core.seq.call(null,cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.keys.call(null,cljs.core.filter.call(null,cljs.core.val,m)))));
if(temp__4425__auto__){
var ks = temp__4425__auto__;
return clojure.string.join.call(null," ",ks);
} else {
return null;
}
});

//# sourceMappingURL=dom.js.map