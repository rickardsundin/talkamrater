// Compiled by ClojureScript 1.7.170 {}
goog.provide('om_bootstrap.random');
goog.require('cljs.core');
goog.require('om_bootstrap.types');
goog.require('schema.core');
goog.require('om_bootstrap.util');
goog.require('om_tools.dom');
goog.require('om_tools.core');
goog.require('om_bootstrap.mixins');
goog.require('om.core');
var ufv___53419 = schema.utils.use_fn_validation;
var output_schema53411_53420 = om_bootstrap.types.Component;
var input_schema53412_53421 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.Any], null);
var input_checker53413_53422 = schema.core.checker.call(null,input_schema53412_53421);
var output_checker53414_53423 = schema.core.checker.call(null,output_schema53411_53420);
/**
 * Inputs: [opts & children]
 *   Returns: t/Component
 * 
 *   A lightweight, flexible component that can optionally extend the
 * entire viewport to showcase key content on your site.
 */
om_bootstrap.random.jumbotron = ((function (ufv___53419,output_schema53411_53420,input_schema53412_53421,input_checker53413_53422,output_checker53414_53423){
return (function om_bootstrap$random$jumbotron(var_args){
var args__36903__auto__ = [];
var len__36896__auto___53424 = arguments.length;
var i__36897__auto___53425 = (0);
while(true){
if((i__36897__auto___53425 < len__36896__auto___53424)){
args__36903__auto__.push((arguments[i__36897__auto___53425]));

var G__53426 = (i__36897__auto___53425 + (1));
i__36897__auto___53425 = G__53426;
continue;
} else {
}
break;
}

var argseq__36904__auto__ = ((((1) < args__36903__auto__.length))?(new cljs.core.IndexedSeq(args__36903__auto__.slice((1)),(0))):null);
return om_bootstrap.random.jumbotron.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36904__auto__);
});})(ufv___53419,output_schema53411_53420,input_schema53412_53421,input_checker53413_53422,output_checker53414_53423))
;

om_bootstrap.random.jumbotron.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___53419,output_schema53411_53420,input_schema53412_53421,input_checker53413_53422,output_checker53414_53423){
return (function (G__53415,rest53416){
var validate__37277__auto__ = ufv___53419.get_cell();
if(cljs.core.truth_(validate__37277__auto__)){
var args__37278__auto___53427 = cljs.core.list_STAR_.call(null,G__53415,rest53416);
var temp__4425__auto___53428 = input_checker53413_53422.call(null,args__37278__auto___53427);
if(cljs.core.truth_(temp__4425__auto___53428)){
var error__37279__auto___53429 = temp__4425__auto___53428;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"jumbotron","jumbotron",342240964,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A lightweight, flexible component that can optionally extend the\n   entire viewport to showcase key content on your site."], null)),cljs.core.pr_str.call(null,error__37279__auto___53429)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema53412_53421,new cljs.core.Keyword(null,"value","value",305978217),args__37278__auto___53427,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___53429], null));
} else {
}
} else {
}

var o__37280__auto__ = (function (){var opts = G__53415;
var children = rest53416;
while(true){
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"jumbotron"], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__37277__auto__)){
var temp__4425__auto___53430 = output_checker53414_53423.call(null,o__37280__auto__);
if(cljs.core.truth_(temp__4425__auto___53430)){
var error__37279__auto___53431 = temp__4425__auto___53430;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"jumbotron","jumbotron",342240964,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A lightweight, flexible component that can optionally extend the\n   entire viewport to showcase key content on your site."], null)),cljs.core.pr_str.call(null,error__37279__auto___53431)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema53411_53420,new cljs.core.Keyword(null,"value","value",305978217),o__37280__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___53431], null));
} else {
}
} else {
}

return o__37280__auto__;
});})(ufv___53419,output_schema53411_53420,input_schema53412_53421,input_checker53413_53422,output_checker53414_53423))
;

om_bootstrap.random.jumbotron.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.jumbotron.cljs$lang$applyTo = ((function (ufv___53419,output_schema53411_53420,input_schema53412_53421,input_checker53413_53422,output_checker53414_53423){
return (function (seq53417){
var G__53418 = cljs.core.first.call(null,seq53417);
var seq53417__$1 = cljs.core.next.call(null,seq53417);
return om_bootstrap.random.jumbotron.cljs$core$IFn$_invoke$arity$variadic(G__53418,seq53417__$1);
});})(ufv___53419,output_schema53411_53420,input_schema53412_53421,input_checker53413_53422,output_checker53414_53423))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.jumbotron),schema.core.make_fn_schema.call(null,output_schema53411_53420,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema53412_53421], null)));
var ufv___53441 = schema.utils.use_fn_validation;
var output_schema53432_53442 = om_bootstrap.types.Component;
var input_schema53433_53443 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.Any], null);
var input_checker53434_53444 = schema.core.checker.call(null,input_schema53433_53443);
var output_checker53435_53445 = schema.core.checker.call(null,output_schema53432_53442);
/**
 * Inputs: [opts & children]
 *   Returns: t/Component
 * 
 *   Create a (label {} "label!") to show highlight information.
 */
om_bootstrap.random.label = ((function (ufv___53441,output_schema53432_53442,input_schema53433_53443,input_checker53434_53444,output_checker53435_53445){
return (function om_bootstrap$random$label(var_args){
var args__36903__auto__ = [];
var len__36896__auto___53446 = arguments.length;
var i__36897__auto___53447 = (0);
while(true){
if((i__36897__auto___53447 < len__36896__auto___53446)){
args__36903__auto__.push((arguments[i__36897__auto___53447]));

var G__53448 = (i__36897__auto___53447 + (1));
i__36897__auto___53447 = G__53448;
continue;
} else {
}
break;
}

var argseq__36904__auto__ = ((((1) < args__36903__auto__.length))?(new cljs.core.IndexedSeq(args__36903__auto__.slice((1)),(0))):null);
return om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36904__auto__);
});})(ufv___53441,output_schema53432_53442,input_schema53433_53443,input_checker53434_53444,output_checker53435_53445))
;

om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___53441,output_schema53432_53442,input_schema53433_53443,input_checker53434_53444,output_checker53435_53445){
return (function (G__53436,rest53437){
var validate__37277__auto__ = ufv___53441.get_cell();
if(cljs.core.truth_(validate__37277__auto__)){
var args__37278__auto___53449 = cljs.core.list_STAR_.call(null,G__53436,rest53437);
var temp__4425__auto___53450 = input_checker53434_53444.call(null,args__37278__auto___53449);
if(cljs.core.truth_(temp__4425__auto___53450)){
var error__37279__auto___53451 = temp__4425__auto___53450;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Create a (label {} \"label!\") to show highlight information."], null)),cljs.core.pr_str.call(null,error__37279__auto___53451)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema53433_53443,new cljs.core.Keyword(null,"value","value",305978217),args__37278__auto___53449,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___53451], null));
} else {
}
} else {
}

var o__37280__auto__ = (function (){var opts = G__53436;
var children = rest53437;
while(true){
var vec__53440 = om_bootstrap.types.separate.call(null,cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"label",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default"], null));
var bs = cljs.core.nth.call(null,vec__53440,(0),null);
var props = cljs.core.nth.call(null,vec__53440,(1),null);
var classes = om_bootstrap.types.bs_class_set.call(null,bs);
return om_tools.dom.element.call(null,React.DOM.span,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__37277__auto__)){
var temp__4425__auto___53452 = output_checker53435_53445.call(null,o__37280__auto__);
if(cljs.core.truth_(temp__4425__auto___53452)){
var error__37279__auto___53453 = temp__4425__auto___53452;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Create a (label {} \"label!\") to show highlight information."], null)),cljs.core.pr_str.call(null,error__37279__auto___53453)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema53432_53442,new cljs.core.Keyword(null,"value","value",305978217),o__37280__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___53453], null));
} else {
}
} else {
}

return o__37280__auto__;
});})(ufv___53441,output_schema53432_53442,input_schema53433_53443,input_checker53434_53444,output_checker53435_53445))
;

om_bootstrap.random.label.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.label.cljs$lang$applyTo = ((function (ufv___53441,output_schema53432_53442,input_schema53433_53443,input_checker53434_53444,output_checker53435_53445){
return (function (seq53438){
var G__53439 = cljs.core.first.call(null,seq53438);
var seq53438__$1 = cljs.core.next.call(null,seq53438);
return om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic(G__53439,seq53438__$1);
});})(ufv___53441,output_schema53432_53442,input_schema53433_53443,input_checker53434_53444,output_checker53435_53445))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.label),schema.core.make_fn_schema.call(null,output_schema53432_53442,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema53433_53443], null)));
var ufv___53463 = schema.utils.use_fn_validation;
var output_schema53454_53464 = om_bootstrap.types.Component;
var input_schema53455_53465 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.Any], null);
var input_checker53456_53466 = schema.core.checker.call(null,input_schema53455_53465);
var output_checker53457_53467 = schema.core.checker.call(null,output_schema53454_53464);
/**
 * Inputs: [opts & children]
 *   Returns: t/Component
 * 
 *   Use the well as a simple effect on an element to give it an inset effect.
 */
om_bootstrap.random.well = ((function (ufv___53463,output_schema53454_53464,input_schema53455_53465,input_checker53456_53466,output_checker53457_53467){
return (function om_bootstrap$random$well(var_args){
var args__36903__auto__ = [];
var len__36896__auto___53468 = arguments.length;
var i__36897__auto___53469 = (0);
while(true){
if((i__36897__auto___53469 < len__36896__auto___53468)){
args__36903__auto__.push((arguments[i__36897__auto___53469]));

var G__53470 = (i__36897__auto___53469 + (1));
i__36897__auto___53469 = G__53470;
continue;
} else {
}
break;
}

var argseq__36904__auto__ = ((((1) < args__36903__auto__.length))?(new cljs.core.IndexedSeq(args__36903__auto__.slice((1)),(0))):null);
return om_bootstrap.random.well.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36904__auto__);
});})(ufv___53463,output_schema53454_53464,input_schema53455_53465,input_checker53456_53466,output_checker53457_53467))
;

om_bootstrap.random.well.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___53463,output_schema53454_53464,input_schema53455_53465,input_checker53456_53466,output_checker53457_53467){
return (function (G__53458,rest53459){
var validate__37277__auto__ = ufv___53463.get_cell();
if(cljs.core.truth_(validate__37277__auto__)){
var args__37278__auto___53471 = cljs.core.list_STAR_.call(null,G__53458,rest53459);
var temp__4425__auto___53472 = input_checker53456_53466.call(null,args__37278__auto___53471);
if(cljs.core.truth_(temp__4425__auto___53472)){
var error__37279__auto___53473 = temp__4425__auto___53472;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"well","well",1222012171,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Use the well as a simple effect on an element to give it an inset effect."], null)),cljs.core.pr_str.call(null,error__37279__auto___53473)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema53455_53465,new cljs.core.Keyword(null,"value","value",305978217),args__37278__auto___53471,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___53473], null));
} else {
}
} else {
}

var o__37280__auto__ = (function (){var opts = G__53458;
var children = rest53459;
while(true){
var vec__53462 = om_bootstrap.types.separate.call(null,cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"well"], null));
var bs = cljs.core.nth.call(null,vec__53462,(0),null);
var props = cljs.core.nth.call(null,vec__53462,(1),null);
var class$ = om_tools.dom.class_set.call(null,om_bootstrap.types.bs_class_set.call(null,bs));
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__37277__auto__)){
var temp__4425__auto___53474 = output_checker53457_53467.call(null,o__37280__auto__);
if(cljs.core.truth_(temp__4425__auto___53474)){
var error__37279__auto___53475 = temp__4425__auto___53474;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"well","well",1222012171,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Use the well as a simple effect on an element to give it an inset effect."], null)),cljs.core.pr_str.call(null,error__37279__auto___53475)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema53454_53464,new cljs.core.Keyword(null,"value","value",305978217),o__37280__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___53475], null));
} else {
}
} else {
}

return o__37280__auto__;
});})(ufv___53463,output_schema53454_53464,input_schema53455_53465,input_checker53456_53466,output_checker53457_53467))
;

om_bootstrap.random.well.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.well.cljs$lang$applyTo = ((function (ufv___53463,output_schema53454_53464,input_schema53455_53465,input_checker53456_53466,output_checker53457_53467){
return (function (seq53460){
var G__53461 = cljs.core.first.call(null,seq53460);
var seq53460__$1 = cljs.core.next.call(null,seq53460);
return om_bootstrap.random.well.cljs$core$IFn$_invoke$arity$variadic(G__53461,seq53460__$1);
});})(ufv___53463,output_schema53454_53464,input_schema53455_53465,input_checker53456_53466,output_checker53457_53467))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.well),schema.core.make_fn_schema.call(null,output_schema53454_53464,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema53455_53465], null)));
var ufv___53484 = schema.utils.use_fn_validation;
var output_schema53476_53485 = om_bootstrap.types.Component;
var input_schema53477_53486 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.Any], null);
var input_checker53478_53487 = schema.core.checker.call(null,input_schema53477_53486);
var output_checker53479_53488 = schema.core.checker.call(null,output_schema53476_53485);
/**
 * Inputs: [opts & children]
 *   Returns: t/Component
 * 
 *   A simple shell for an h1 to appropriately space out and segment
 *   sections of content on a page. It can utilize the h1’s default small
 *   element, as well as most other components (with additional styles).
 */
om_bootstrap.random.page_header = ((function (ufv___53484,output_schema53476_53485,input_schema53477_53486,input_checker53478_53487,output_checker53479_53488){
return (function om_bootstrap$random$page_header(var_args){
var args__36903__auto__ = [];
var len__36896__auto___53489 = arguments.length;
var i__36897__auto___53490 = (0);
while(true){
if((i__36897__auto___53490 < len__36896__auto___53489)){
args__36903__auto__.push((arguments[i__36897__auto___53490]));

var G__53491 = (i__36897__auto___53490 + (1));
i__36897__auto___53490 = G__53491;
continue;
} else {
}
break;
}

var argseq__36904__auto__ = ((((1) < args__36903__auto__.length))?(new cljs.core.IndexedSeq(args__36903__auto__.slice((1)),(0))):null);
return om_bootstrap.random.page_header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36904__auto__);
});})(ufv___53484,output_schema53476_53485,input_schema53477_53486,input_checker53478_53487,output_checker53479_53488))
;

om_bootstrap.random.page_header.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___53484,output_schema53476_53485,input_schema53477_53486,input_checker53478_53487,output_checker53479_53488){
return (function (G__53480,rest53481){
var validate__37277__auto__ = ufv___53484.get_cell();
if(cljs.core.truth_(validate__37277__auto__)){
var args__37278__auto___53492 = cljs.core.list_STAR_.call(null,G__53480,rest53481);
var temp__4425__auto___53493 = input_checker53478_53487.call(null,args__37278__auto___53492);
if(cljs.core.truth_(temp__4425__auto___53493)){
var error__37279__auto___53494 = temp__4425__auto___53493;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"page-header","page-header",-1347644547,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A simple shell for an h1 to appropriately space out and segment\n  sections of content on a page. It can utilize the h1\u2019s default small\n  element, as well as most other components (with additional styles)."], null)),cljs.core.pr_str.call(null,error__37279__auto___53494)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema53477_53486,new cljs.core.Keyword(null,"value","value",305978217),args__37278__auto___53492,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___53494], null));
} else {
}
} else {
}

var o__37280__auto__ = (function (){var opts = G__53480;
var children = rest53481;
while(true){
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.h1,children,cljs.core.PersistentVector.EMPTY)],null)));
break;
}
})();
if(cljs.core.truth_(validate__37277__auto__)){
var temp__4425__auto___53495 = output_checker53479_53488.call(null,o__37280__auto__);
if(cljs.core.truth_(temp__4425__auto___53495)){
var error__37279__auto___53496 = temp__4425__auto___53495;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"page-header","page-header",-1347644547,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A simple shell for an h1 to appropriately space out and segment\n  sections of content on a page. It can utilize the h1\u2019s default small\n  element, as well as most other components (with additional styles)."], null)),cljs.core.pr_str.call(null,error__37279__auto___53496)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema53476_53485,new cljs.core.Keyword(null,"value","value",305978217),o__37280__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___53496], null));
} else {
}
} else {
}

return o__37280__auto__;
});})(ufv___53484,output_schema53476_53485,input_schema53477_53486,input_checker53478_53487,output_checker53479_53488))
;

om_bootstrap.random.page_header.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.page_header.cljs$lang$applyTo = ((function (ufv___53484,output_schema53476_53485,input_schema53477_53486,input_checker53478_53487,output_checker53479_53488){
return (function (seq53482){
var G__53483 = cljs.core.first.call(null,seq53482);
var seq53482__$1 = cljs.core.next.call(null,seq53482);
return om_bootstrap.random.page_header.cljs$core$IFn$_invoke$arity$variadic(G__53483,seq53482__$1);
});})(ufv___53484,output_schema53476_53485,input_schema53477_53486,input_checker53478_53487,output_checker53479_53488))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.page_header),schema.core.make_fn_schema.call(null,output_schema53476_53485,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema53477_53486], null)));
om_bootstrap.random.Placement = schema.core.enum$.call(null,"top","right","bottom","left");
om_bootstrap.random.ToolTip = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"placement","placement",768366651)),om_bootstrap.random.Placement,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"position-left","position-left",-698586780)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"position-top","position-top",790552046)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487)),schema.core.Int], true, false));
var ufv___53506 = schema.utils.use_fn_validation;
var output_schema53497_53507 = om_bootstrap.types.Component;
var input_schema53498_53508 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.random.ToolTip,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"ToolTip","ToolTip",1279361896,null)], null))),schema.core.Any], null);
var input_checker53499_53509 = schema.core.checker.call(null,input_schema53498_53508);
var output_checker53500_53510 = schema.core.checker.call(null,output_schema53497_53507);
/**
 * Inputs: [opts :- ToolTip & children]
 *   Returns: t/Component
 */
om_bootstrap.random.tooltip = ((function (ufv___53506,output_schema53497_53507,input_schema53498_53508,input_checker53499_53509,output_checker53500_53510){
return (function om_bootstrap$random$tooltip(var_args){
var args__36903__auto__ = [];
var len__36896__auto___53511 = arguments.length;
var i__36897__auto___53512 = (0);
while(true){
if((i__36897__auto___53512 < len__36896__auto___53511)){
args__36903__auto__.push((arguments[i__36897__auto___53512]));

var G__53513 = (i__36897__auto___53512 + (1));
i__36897__auto___53512 = G__53513;
continue;
} else {
}
break;
}

var argseq__36904__auto__ = ((((1) < args__36903__auto__.length))?(new cljs.core.IndexedSeq(args__36903__auto__.slice((1)),(0))):null);
return om_bootstrap.random.tooltip.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36904__auto__);
});})(ufv___53506,output_schema53497_53507,input_schema53498_53508,input_checker53499_53509,output_checker53500_53510))
;

om_bootstrap.random.tooltip.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___53506,output_schema53497_53507,input_schema53498_53508,input_checker53499_53509,output_checker53500_53510){
return (function (G__53501,rest53502){
var validate__37277__auto__ = ufv___53506.get_cell();
if(cljs.core.truth_(validate__37277__auto__)){
var args__37278__auto___53514 = cljs.core.list_STAR_.call(null,G__53501,rest53502);
var temp__4425__auto___53515 = input_checker53499_53509.call(null,args__37278__auto___53514);
if(cljs.core.truth_(temp__4425__auto___53515)){
var error__37279__auto___53516 = temp__4425__auto___53515;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"tooltip","tooltip",-169145531,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__37279__auto___53516)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema53498_53508,new cljs.core.Keyword(null,"value","value",305978217),args__37278__auto___53514,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___53516], null));
} else {
}
} else {
}

var o__37280__auto__ = (function (){var opts = G__53501;
var children = rest53502;
while(true){
var vec__53505 = om_bootstrap.types.separate.call(null,om_bootstrap.random.ToolTip,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placement","placement",768366651),"right"], null));
var bs = cljs.core.nth.call(null,vec__53505,(0),null);
var _ = cljs.core.nth.call(null,vec__53505,(1),null);
var classes = cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),true,new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(bs),true,new cljs.core.Keyword(null,"in","in",-1531184865),(function (){var or__35838__auto__ = new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(or__35838__auto__)){
return or__35838__auto__;
} else {
return new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs);
}
})()], true, false);
return cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,classes)), "style": {"left": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs)), "top": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs))}},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.div({"className": "tooltip-arrow", "style": {"left": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616).cljs$core$IFn$_invoke$arity$1(bs)), "top": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487).cljs$core$IFn$_invoke$arity$1(bs))}}),cljs.core.apply.call(null,React.DOM.div,{"className": "tooltip-inner"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))))],null))));
break;
}
})();
if(cljs.core.truth_(validate__37277__auto__)){
var temp__4425__auto___53517 = output_checker53500_53510.call(null,o__37280__auto__);
if(cljs.core.truth_(temp__4425__auto___53517)){
var error__37279__auto___53518 = temp__4425__auto___53517;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"tooltip","tooltip",-169145531,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__37279__auto___53518)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema53497_53507,new cljs.core.Keyword(null,"value","value",305978217),o__37280__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___53518], null));
} else {
}
} else {
}

return o__37280__auto__;
});})(ufv___53506,output_schema53497_53507,input_schema53498_53508,input_checker53499_53509,output_checker53500_53510))
;

om_bootstrap.random.tooltip.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.tooltip.cljs$lang$applyTo = ((function (ufv___53506,output_schema53497_53507,input_schema53498_53508,input_checker53499_53509,output_checker53500_53510){
return (function (seq53503){
var G__53504 = cljs.core.first.call(null,seq53503);
var seq53503__$1 = cljs.core.next.call(null,seq53503);
return om_bootstrap.random.tooltip.cljs$core$IFn$_invoke$arity$variadic(G__53504,seq53503__$1);
});})(ufv___53506,output_schema53497_53507,input_schema53498_53508,input_checker53499_53509,output_checker53500_53510))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.tooltip),schema.core.make_fn_schema.call(null,output_schema53497_53507,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema53498_53508], null)));
om_bootstrap.random.Alert = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dismiss-after","dismiss-after",-1342478284)),schema.core.Int], true, false));
om_bootstrap.random.alert_defaults = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"alert",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"info"], null);
om_bootstrap.random.alert_STAR_$descriptor = (function (){var descriptor__49586__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
(descriptor__49586__auto__["mixins"] = [om_bootstrap.mixins.set_timeout_mixin]);

return descriptor__49586__auto__;
})();

var component_fnk__49615__auto___53545 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema53524 = schema.core.Any;
var input_schema53525 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"children","children",-940561982),schema.core.Any,new cljs.core.Keyword(null,"props","props",453281727),schema.core.Any,new cljs.core.Keyword(null,"bs","bs",1748393559),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),schema.core.Keyword,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"map53522","map53522",-328848570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"bs","bs",1748393559),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)))], null);
var input_checker53526 = schema.core.checker.call(null,input_schema53525);
var output_checker53527 = schema.core.checker.call(null,output_schema53524);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema53524,input_schema53525,input_checker53526,output_checker53527){
return (function om_bootstrap$random$constructor53520(G__53528){
var validate__37277__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__37277__auto__)){
var args__37278__auto___53546 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__53528], null);
var temp__4425__auto___53547 = input_checker53526.call(null,args__37278__auto___53546);
if(cljs.core.truth_(temp__4425__auto___53547)){
var error__37279__auto___53548 = temp__4425__auto___53547;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor53520","constructor53520",398220018,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__37279__auto___53548)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema53525,new cljs.core.Keyword(null,"value","value",305978217),args__37278__auto___53546,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___53548], null));
} else {
}
} else {
}

var o__37280__auto__ = (function (){var map53522 = G__53528;
while(true){
if(cljs.core.map_QMARK_.call(null,map53522)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map53522)));
}

var map53523 = plumbing.fnk.schema.safe_get.call(null,map53522,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var bs = plumbing.fnk.schema.safe_get.call(null,map53523,new cljs.core.Keyword(null,"bs","bs",1748393559),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
var props = plumbing.fnk.schema.safe_get.call(null,map53523,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
var children = plumbing.fnk.schema.safe_get.call(null,map53523,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
var owner = plumbing.fnk.schema.safe_get.call(null,map53522,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.random.t_om_bootstrap$random53533 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IDidMount}
 * @implements {cljs.core.IWithMeta}
*/
om_bootstrap.random.t_om_bootstrap$random53533 = (function (owner,G__53528,output_schema53524,props,map53522,output_checker53527,children,input_checker53526,map53523,constructor53520,input_schema53525,validate__37277__auto__,ufv__,bs,meta53534){
this.owner = owner;
this.G__53528 = G__53528;
this.output_schema53524 = output_schema53524;
this.props = props;
this.map53522 = map53522;
this.output_checker53527 = output_checker53527;
this.children = children;
this.input_checker53526 = input_checker53526;
this.map53523 = map53523;
this.constructor53520 = constructor53520;
this.input_schema53525 = input_schema53525;
this.validate__37277__auto__ = validate__37277__auto__;
this.ufv__ = ufv__;
this.bs = bs;
this.meta53534 = meta53534;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.random.t_om_bootstrap$random53533.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,children,props,bs,map53523,validate__37277__auto__,ufv__,output_schema53524,input_schema53525,input_checker53526,output_checker53527){
return (function (_53535,meta53534__$1){
var self__ = this;
var _53535__$1 = this;
return (new om_bootstrap.random.t_om_bootstrap$random53533(self__.owner,self__.G__53528,self__.output_schema53524,self__.props,self__.map53522,self__.output_checker53527,self__.children,self__.input_checker53526,self__.map53523,self__.constructor53520,self__.input_schema53525,self__.validate__37277__auto__,self__.ufv__,self__.bs,meta53534__$1));
});})(owner,children,props,bs,map53523,validate__37277__auto__,ufv__,output_schema53524,input_schema53525,input_checker53526,output_checker53527))
;

om_bootstrap.random.t_om_bootstrap$random53533.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,children,props,bs,map53523,validate__37277__auto__,ufv__,output_schema53524,input_schema53525,input_checker53526,output_checker53527){
return (function (_53535){
var self__ = this;
var _53535__$1 = this;
return self__.meta53534;
});})(owner,children,props,bs,map53523,validate__37277__auto__,ufv__,output_schema53524,input_schema53525,input_checker53526,output_checker53527))
;

om_bootstrap.random.t_om_bootstrap$random53533.prototype.om$core$IDisplayName$ = true;

om_bootstrap.random.t_om_bootstrap$random53533.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,children,props,bs,map53523,validate__37277__auto__,ufv__,output_schema53524,input_schema53525,input_checker53526,output_checker53527){
return (function (_){
var self__ = this;
var ___$1 = this;
return "alert*";
});})(owner,children,props,bs,map53523,validate__37277__auto__,ufv__,output_schema53524,input_schema53525,input_checker53526,output_checker53527))
;

om_bootstrap.random.t_om_bootstrap$random53533.prototype.om$core$IDidMount$ = true;

om_bootstrap.random.t_om_bootstrap$random53533.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,children,props,bs,map53523,validate__37277__auto__,ufv__,output_schema53524,input_schema53525,input_checker53526,output_checker53527){
return (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var and__35826__auto__ = new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395).cljs$core$IFn$_invoke$arity$1(self__.bs);
if(cljs.core.truth_(and__35826__auto__)){
return new cljs.core.Keyword(null,"dismiss-after","dismiss-after",-1342478284).cljs$core$IFn$_invoke$arity$1(self__.bs);
} else {
return and__35826__auto__;
}
})())){
var G__53536 = self__.owner;
G__53536.set_timeout(new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395).cljs$core$IFn$_invoke$arity$1(self__.bs),new cljs.core.Keyword(null,"dismiss-after","dismiss-after",-1342478284).cljs$core$IFn$_invoke$arity$1(self__.bs));

return G__53536;
} else {
return null;
}
});})(owner,children,props,bs,map53523,validate__37277__auto__,ufv__,output_schema53524,input_schema53525,input_checker53526,output_checker53527))
;

om_bootstrap.random.t_om_bootstrap$random53533.prototype.om$core$IRender$ = true;

om_bootstrap.random.t_om_bootstrap$random53533.prototype.om$core$IRender$render$arity$1 = ((function (owner,children,props,bs,map53523,validate__37277__auto__,ufv__,output_schema53524,input_schema53525,input_checker53526,output_checker53527){
return (function (_){
var self__ = this;
var ___$1 = this;
var classes = om_bootstrap.types.bs_class_set.call(null,self__.bs);
var dismiss_button = (function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395).cljs$core$IFn$_invoke$arity$1(self__.bs);
if(cljs.core.truth_(temp__4425__auto__)){
var od = temp__4425__auto__;
return React.DOM.button({"type": "button", "className": "close", "onClick": om_tools.dom.format_opts.call(null,od), "aria-hidden": true},"&times;");
} else {
return null;
}
})();
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,self__.props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[dismiss_button,self__.children],null)));
});})(owner,children,props,bs,map53523,validate__37277__auto__,ufv__,output_schema53524,input_schema53525,input_checker53526,output_checker53527))
;

om_bootstrap.random.t_om_bootstrap$random53533.getBasis = ((function (owner,children,props,bs,map53523,validate__37277__auto__,ufv__,output_schema53524,input_schema53525,input_checker53526,output_checker53527){
return (function (){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"G__53528","G__53528",-418014715,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"bs","bs",1748393559),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)),new cljs.core.Symbol(null,"output-schema53524","output-schema53524",36793925,null),cljs.core.with_meta(new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"map53522","map53522",-328848570,null),new cljs.core.Symbol(null,"output-checker53527","output-checker53527",1877587176,null),cljs.core.with_meta(new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"input-checker53526","input-checker53526",-858089392,null),cljs.core.with_meta(new cljs.core.Symbol(null,"map53523","map53523",1233410672,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"constructor53520","constructor53520",398220018,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"input-schema53525","input-schema53525",2131981910,null),new cljs.core.Symbol(null,"validate__37277__auto__","validate__37277__auto__",694432091,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),cljs.core.with_meta(new cljs.core.Symbol(null,"bs","bs",-906042210,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"meta53534","meta53534",-826572423,null)], null);
});})(owner,children,props,bs,map53523,validate__37277__auto__,ufv__,output_schema53524,input_schema53525,input_checker53526,output_checker53527))
;

om_bootstrap.random.t_om_bootstrap$random53533.cljs$lang$type = true;

om_bootstrap.random.t_om_bootstrap$random53533.cljs$lang$ctorStr = "om-bootstrap.random/t_om_bootstrap$random53533";

om_bootstrap.random.t_om_bootstrap$random53533.cljs$lang$ctorPrWriter = ((function (owner,children,props,bs,map53523,validate__37277__auto__,ufv__,output_schema53524,input_schema53525,input_checker53526,output_checker53527){
return (function (this__36436__auto__,writer__36437__auto__,opt__36438__auto__){
return cljs.core._write.call(null,writer__36437__auto__,"om-bootstrap.random/t_om_bootstrap$random53533");
});})(owner,children,props,bs,map53523,validate__37277__auto__,ufv__,output_schema53524,input_schema53525,input_checker53526,output_checker53527))
;

om_bootstrap.random.__GT_t_om_bootstrap$random53533 = ((function (owner,children,props,bs,map53523,validate__37277__auto__,ufv__,output_schema53524,input_schema53525,input_checker53526,output_checker53527){
return (function om_bootstrap$random$constructor53520_$___GT_t_om_bootstrap$random53533(owner__$1,G__53528__$1,output_schema53524__$1,props__$1,map53522__$1,output_checker53527__$1,children__$1,input_checker53526__$1,map53523__$1,constructor53520__$1,input_schema53525__$1,validate__37277__auto____$1,ufv____$1,bs__$1,meta53534){
return (new om_bootstrap.random.t_om_bootstrap$random53533(owner__$1,G__53528__$1,output_schema53524__$1,props__$1,map53522__$1,output_checker53527__$1,children__$1,input_checker53526__$1,map53523__$1,constructor53520__$1,input_schema53525__$1,validate__37277__auto____$1,ufv____$1,bs__$1,meta53534));
});})(owner,children,props,bs,map53523,validate__37277__auto__,ufv__,output_schema53524,input_schema53525,input_checker53526,output_checker53527))
;

}

return (new om_bootstrap.random.t_om_bootstrap$random53533(owner,G__53528,output_schema53524,props,map53522,output_checker53527,children,input_checker53526,map53523,om_bootstrap$random$constructor53520,input_schema53525,validate__37277__auto__,ufv__,bs,null));
break;
}
})();
if(cljs.core.truth_(validate__37277__auto__)){
var temp__4425__auto___53549 = output_checker53527.call(null,o__37280__auto__);
if(cljs.core.truth_(temp__4425__auto___53549)){
var error__37279__auto___53550 = temp__4425__auto___53549;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor53520","constructor53520",398220018,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__37279__auto___53550)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema53524,new cljs.core.Keyword(null,"value","value",305978217),o__37280__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___53550], null));
} else {
}
} else {
}

return o__37280__auto__;
});})(ufv__,output_schema53524,input_schema53525,input_checker53526,output_checker53527))
,schema.core.make_fn_schema.call(null,output_schema53524,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema53525], null)));
})();
/**
 * Renders the alert component with timeout mixed in. TODO: This
 * should probably use the component macro and be defined inline under
 * the alert function. No need for a separate name.
 */
om_bootstrap.random.alert_STAR_ = ((function (component_fnk__49615__auto___53545){
return (function om_bootstrap$random$alert_STAR_(var_args){
var args__36903__auto__ = [];
var len__36896__auto___53551 = arguments.length;
var i__36897__auto___53552 = (0);
while(true){
if((i__36897__auto___53552 < len__36896__auto___53551)){
args__36903__auto__.push((arguments[i__36897__auto___53552]));

var G__53553 = (i__36897__auto___53552 + (1));
i__36897__auto___53552 = G__53553;
continue;
} else {
}
break;
}

var argseq__36904__auto__ = ((((2) < args__36903__auto__.length))?(new cljs.core.IndexedSeq(args__36903__auto__.slice((2)),(0))):null);
return om_bootstrap.random.alert_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36904__auto__);
});})(component_fnk__49615__auto___53545))
;

om_bootstrap.random.alert_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__49615__auto___53545){
return (function (data__49616__auto__,owner53519,p__53540){
var vec__53541 = p__53540;
var opts__49617__auto__ = cljs.core.nth.call(null,vec__53541,(0),null);
return component_fnk__49615__auto___53545.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__49617__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner53519,new cljs.core.Keyword(null,"data","data",-232669377),data__49616__auto__], null));
});})(component_fnk__49615__auto___53545))
;

om_bootstrap.random.alert_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.random.alert_STAR_.cljs$lang$applyTo = ((function (component_fnk__49615__auto___53545){
return (function (seq53537){
var G__53538 = cljs.core.first.call(null,seq53537);
var seq53537__$1 = cljs.core.next.call(null,seq53537);
var G__53539 = cljs.core.first.call(null,seq53537__$1);
var seq53537__$2 = cljs.core.next.call(null,seq53537__$1);
return om_bootstrap.random.alert_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__53538,G__53539,seq53537__$2);
});})(component_fnk__49615__auto___53545))
;

om_bootstrap.random.__GT_alert_STAR_ = (function om_bootstrap$random$__GT_alert_STAR_(var_args){
var args53542 = [];
var len__36896__auto___53554 = arguments.length;
var i__36897__auto___53555 = (0);
while(true){
if((i__36897__auto___53555 < len__36896__auto___53554)){
args53542.push((arguments[i__36897__auto___53555]));

var G__53556 = (i__36897__auto___53555 + (1));
i__36897__auto___53555 = G__53556;
continue;
} else {
}
break;
}

var G__53544 = args53542.length;
switch (G__53544) {
case 1:
return om_bootstrap.random.__GT_alert_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.random.__GT_alert_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53542.length)].join('')));

}
});

om_bootstrap.random.__GT_alert_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__49584__auto__){
return om.core.build.call(null,om_bootstrap.random.alert_STAR_,cursor__49584__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.random.alert_STAR_$descriptor], null));
});

om_bootstrap.random.__GT_alert_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__49584__auto__,m53521){
return om.core.build.call(null,om_bootstrap.random.alert_STAR_,cursor__49584__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.random.alert_STAR_$descriptor], null),m53521));
});

om_bootstrap.random.__GT_alert_STAR_.cljs$lang$maxFixedArity = 2;
var ufv___53567 = schema.utils.use_fn_validation;
var output_schema53558_53568 = om_bootstrap.types.Component;
var input_schema53559_53569 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.random.Alert,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Alert","Alert",231771408,null)], null))),schema.core.Any], null);
var input_checker53560_53570 = schema.core.checker.call(null,input_schema53559_53569);
var output_checker53561_53571 = schema.core.checker.call(null,output_schema53558_53568);
/**
 * Inputs: [opts :- Alert & children]
 *   Returns: t/Component
 * 
 *   Wrapper for the alert component to allow a better user interface.
 */
om_bootstrap.random.alert = ((function (ufv___53567,output_schema53558_53568,input_schema53559_53569,input_checker53560_53570,output_checker53561_53571){
return (function om_bootstrap$random$alert(var_args){
var args__36903__auto__ = [];
var len__36896__auto___53572 = arguments.length;
var i__36897__auto___53573 = (0);
while(true){
if((i__36897__auto___53573 < len__36896__auto___53572)){
args__36903__auto__.push((arguments[i__36897__auto___53573]));

var G__53574 = (i__36897__auto___53573 + (1));
i__36897__auto___53573 = G__53574;
continue;
} else {
}
break;
}

var argseq__36904__auto__ = ((((1) < args__36903__auto__.length))?(new cljs.core.IndexedSeq(args__36903__auto__.slice((1)),(0))):null);
return om_bootstrap.random.alert.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36904__auto__);
});})(ufv___53567,output_schema53558_53568,input_schema53559_53569,input_checker53560_53570,output_checker53561_53571))
;

om_bootstrap.random.alert.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___53567,output_schema53558_53568,input_schema53559_53569,input_checker53560_53570,output_checker53561_53571){
return (function (G__53562,rest53563){
var validate__37277__auto__ = ufv___53567.get_cell();
if(cljs.core.truth_(validate__37277__auto__)){
var args__37278__auto___53575 = cljs.core.list_STAR_.call(null,G__53562,rest53563);
var temp__4425__auto___53576 = input_checker53560_53570.call(null,args__37278__auto___53575);
if(cljs.core.truth_(temp__4425__auto___53576)){
var error__37279__auto___53577 = temp__4425__auto___53576;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"alert","alert",1068580947,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Wrapper for the alert component to allow a better user interface."], null)),cljs.core.pr_str.call(null,error__37279__auto___53577)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema53559_53569,new cljs.core.Keyword(null,"value","value",305978217),args__37278__auto___53575,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___53577], null));
} else {
}
} else {
}

var o__37280__auto__ = (function (){var opts = G__53562;
var children = rest53563;
while(true){
var vec__53566 = om_bootstrap.types.separate.call(null,om_bootstrap.random.Alert,opts,om_bootstrap.random.alert_defaults);
var bs = cljs.core.nth.call(null,vec__53566,(0),null);
var props = cljs.core.nth.call(null,vec__53566,(1),null);
return om.core.build.call(null,om_bootstrap.random.alert_STAR_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs","bs",1748393559),bs,new cljs.core.Keyword(null,"props","props",453281727),props,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__37277__auto__)){
var temp__4425__auto___53578 = output_checker53561_53571.call(null,o__37280__auto__);
if(cljs.core.truth_(temp__4425__auto___53578)){
var error__37279__auto___53579 = temp__4425__auto___53578;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"alert","alert",1068580947,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Wrapper for the alert component to allow a better user interface."], null)),cljs.core.pr_str.call(null,error__37279__auto___53579)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema53558_53568,new cljs.core.Keyword(null,"value","value",305978217),o__37280__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___53579], null));
} else {
}
} else {
}

return o__37280__auto__;
});})(ufv___53567,output_schema53558_53568,input_schema53559_53569,input_checker53560_53570,output_checker53561_53571))
;

om_bootstrap.random.alert.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.alert.cljs$lang$applyTo = ((function (ufv___53567,output_schema53558_53568,input_schema53559_53569,input_checker53560_53570,output_checker53561_53571){
return (function (seq53564){
var G__53565 = cljs.core.first.call(null,seq53564);
var seq53564__$1 = cljs.core.next.call(null,seq53564);
return om_bootstrap.random.alert.cljs$core$IFn$_invoke$arity$variadic(G__53565,seq53564__$1);
});})(ufv___53567,output_schema53558_53568,input_schema53559_53569,input_checker53560_53570,output_checker53561_53571))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.alert),schema.core.make_fn_schema.call(null,output_schema53558_53568,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema53559_53569], null)));
om_bootstrap.random.Popover = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"placement","placement",768366651)),om_bootstrap.random.Placement,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"position-left","position-left",-698586780)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"position-top","position-top",790552046)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487)),schema.core.Int], true, false));
var ufv___53589 = schema.utils.use_fn_validation;
var output_schema53580_53590 = om_bootstrap.types.Component;
var input_schema53581_53591 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.random.Popover,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Popover","Popover",-1480406690,null)], null))),schema.core.Any], null);
var input_checker53582_53592 = schema.core.checker.call(null,input_schema53581_53591);
var output_checker53583_53593 = schema.core.checker.call(null,output_schema53580_53590);
/**
 * Inputs: [opts :- Popover & children]
 *   Returns: t/Component
 */
om_bootstrap.random.popover = ((function (ufv___53589,output_schema53580_53590,input_schema53581_53591,input_checker53582_53592,output_checker53583_53593){
return (function om_bootstrap$random$popover(var_args){
var args__36903__auto__ = [];
var len__36896__auto___53594 = arguments.length;
var i__36897__auto___53595 = (0);
while(true){
if((i__36897__auto___53595 < len__36896__auto___53594)){
args__36903__auto__.push((arguments[i__36897__auto___53595]));

var G__53596 = (i__36897__auto___53595 + (1));
i__36897__auto___53595 = G__53596;
continue;
} else {
}
break;
}

var argseq__36904__auto__ = ((((1) < args__36903__auto__.length))?(new cljs.core.IndexedSeq(args__36903__auto__.slice((1)),(0))):null);
return om_bootstrap.random.popover.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36904__auto__);
});})(ufv___53589,output_schema53580_53590,input_schema53581_53591,input_checker53582_53592,output_checker53583_53593))
;

om_bootstrap.random.popover.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___53589,output_schema53580_53590,input_schema53581_53591,input_checker53582_53592,output_checker53583_53593){
return (function (G__53584,rest53585){
var validate__37277__auto__ = ufv___53589.get_cell();
if(cljs.core.truth_(validate__37277__auto__)){
var args__37278__auto___53597 = cljs.core.list_STAR_.call(null,G__53584,rest53585);
var temp__4425__auto___53598 = input_checker53582_53592.call(null,args__37278__auto___53597);
if(cljs.core.truth_(temp__4425__auto___53598)){
var error__37279__auto___53599 = temp__4425__auto___53598;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"popover","popover",-169050609,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__37279__auto___53599)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema53581_53591,new cljs.core.Keyword(null,"value","value",305978217),args__37278__auto___53597,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___53599], null));
} else {
}
} else {
}

var o__37280__auto__ = (function (){var opts = G__53584;
var children = rest53585;
while(true){
var vec__53588 = om_bootstrap.types.separate.call(null,om_bootstrap.random.Popover,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placement","placement",768366651),"right"], null));
var bs = cljs.core.nth.call(null,vec__53588,(0),null);
var _ = cljs.core.nth.call(null,vec__53588,(1),null);
var classes = cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"popover","popover",-1809582136),true,new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(bs),true,new cljs.core.Keyword(null,"in","in",-1531184865),(function (){var or__35838__auto__ = new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(or__35838__auto__)){
return or__35838__auto__;
} else {
return new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs);
}
})()], true, false);
return cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,classes)), "style": {"left": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs)), "top": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs)), "display": "block"}},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.div({"className": "arrow", "style": {"left": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616).cljs$core$IFn$_invoke$arity$1(bs)), "top": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487).cljs$core$IFn$_invoke$arity$1(bs))}}),(function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4425__auto__)){
var title = temp__4425__auto__;
return cljs.core.apply.call(null,React.DOM.h3,{"className": "popover-title"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[title],null))));
} else {
return null;
}
})(),cljs.core.apply.call(null,React.DOM.div,{"className": "popover-content"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))))],null))));
break;
}
})();
if(cljs.core.truth_(validate__37277__auto__)){
var temp__4425__auto___53600 = output_checker53583_53593.call(null,o__37280__auto__);
if(cljs.core.truth_(temp__4425__auto___53600)){
var error__37279__auto___53601 = temp__4425__auto___53600;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"popover","popover",-169050609,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__37279__auto___53601)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema53580_53590,new cljs.core.Keyword(null,"value","value",305978217),o__37280__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___53601], null));
} else {
}
} else {
}

return o__37280__auto__;
});})(ufv___53589,output_schema53580_53590,input_schema53581_53591,input_checker53582_53592,output_checker53583_53593))
;

om_bootstrap.random.popover.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.popover.cljs$lang$applyTo = ((function (ufv___53589,output_schema53580_53590,input_schema53581_53591,input_checker53582_53592,output_checker53583_53593){
return (function (seq53586){
var G__53587 = cljs.core.first.call(null,seq53586);
var seq53586__$1 = cljs.core.next.call(null,seq53586);
return om_bootstrap.random.popover.cljs$core$IFn$_invoke$arity$variadic(G__53587,seq53586__$1);
});})(ufv___53589,output_schema53580_53590,input_schema53581_53591,input_checker53582_53592,output_checker53583_53593))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.popover),schema.core.make_fn_schema.call(null,output_schema53580_53590,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema53581_53591], null)));
om_bootstrap.random.Badge = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool], true, false));
var ufv___53611 = schema.utils.use_fn_validation;
var output_schema53602_53612 = om_bootstrap.types.Component;
var input_schema53603_53613 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.random.Badge,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Badge","Badge",1932684841,null)], null))),schema.core.Any], null);
var input_checker53604_53614 = schema.core.checker.call(null,input_schema53603_53613);
var output_checker53605_53615 = schema.core.checker.call(null,output_schema53602_53612);
/**
 * Inputs: [opts :- Badge & children]
 *   Returns: t/Component
 */
om_bootstrap.random.badge = ((function (ufv___53611,output_schema53602_53612,input_schema53603_53613,input_checker53604_53614,output_checker53605_53615){
return (function om_bootstrap$random$badge(var_args){
var args__36903__auto__ = [];
var len__36896__auto___53616 = arguments.length;
var i__36897__auto___53617 = (0);
while(true){
if((i__36897__auto___53617 < len__36896__auto___53616)){
args__36903__auto__.push((arguments[i__36897__auto___53617]));

var G__53618 = (i__36897__auto___53617 + (1));
i__36897__auto___53617 = G__53618;
continue;
} else {
}
break;
}

var argseq__36904__auto__ = ((((1) < args__36903__auto__.length))?(new cljs.core.IndexedSeq(args__36903__auto__.slice((1)),(0))):null);
return om_bootstrap.random.badge.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36904__auto__);
});})(ufv___53611,output_schema53602_53612,input_schema53603_53613,input_checker53604_53614,output_checker53605_53615))
;

om_bootstrap.random.badge.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___53611,output_schema53602_53612,input_schema53603_53613,input_checker53604_53614,output_checker53605_53615){
return (function (G__53606,rest53607){
var validate__37277__auto__ = ufv___53611.get_cell();
if(cljs.core.truth_(validate__37277__auto__)){
var args__37278__auto___53619 = cljs.core.list_STAR_.call(null,G__53606,rest53607);
var temp__4425__auto___53620 = input_checker53604_53614.call(null,args__37278__auto___53619);
if(cljs.core.truth_(temp__4425__auto___53620)){
var error__37279__auto___53621 = temp__4425__auto___53620;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"badge","badge",362534306,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__37279__auto___53621)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema53603_53613,new cljs.core.Keyword(null,"value","value",305978217),args__37278__auto___53619,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___53621], null));
} else {
}
} else {
}

var o__37280__auto__ = (function (){var opts = G__53606;
var children = rest53607;
while(true){
var vec__53610 = om_bootstrap.types.separate.call(null,om_bootstrap.random.Badge,opts);
var bs = cljs.core.nth.call(null,vec__53610,(0),null);
var props = cljs.core.nth.call(null,vec__53610,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pull-right","pull-right",-1853033823),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"badge","badge",-1277997221),om_bootstrap.util.some_valid_component_QMARK_.call(null,children)], null);
return om_tools.dom.element.call(null,React.DOM.span,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__37277__auto__)){
var temp__4425__auto___53622 = output_checker53605_53615.call(null,o__37280__auto__);
if(cljs.core.truth_(temp__4425__auto___53622)){
var error__37279__auto___53623 = temp__4425__auto___53622;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"badge","badge",362534306,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__37279__auto___53623)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema53602_53612,new cljs.core.Keyword(null,"value","value",305978217),o__37280__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___53623], null));
} else {
}
} else {
}

return o__37280__auto__;
});})(ufv___53611,output_schema53602_53612,input_schema53603_53613,input_checker53604_53614,output_checker53605_53615))
;

om_bootstrap.random.badge.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.badge.cljs$lang$applyTo = ((function (ufv___53611,output_schema53602_53612,input_schema53603_53613,input_checker53604_53614,output_checker53605_53615){
return (function (seq53608){
var G__53609 = cljs.core.first.call(null,seq53608);
var seq53608__$1 = cljs.core.next.call(null,seq53608);
return om_bootstrap.random.badge.cljs$core$IFn$_invoke$arity$variadic(G__53609,seq53608__$1);
});})(ufv___53611,output_schema53602_53612,input_schema53603_53613,input_checker53604_53614,output_checker53605_53615))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.badge),schema.core.make_fn_schema.call(null,output_schema53602_53612,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema53603_53613], null)));
om_bootstrap.random.Glyphicon = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"glyph","glyph",2119448117),schema.core.Str], null));
var ufv___53633 = schema.utils.use_fn_validation;
var output_schema53624_53634 = om_bootstrap.types.Component;
var input_schema53625_53635 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.random.Glyphicon,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Glyphicon","Glyphicon",-683810897,null)], null))),schema.core.Any], null);
var input_checker53626_53636 = schema.core.checker.call(null,input_schema53625_53635);
var output_checker53627_53637 = schema.core.checker.call(null,output_schema53624_53634);
/**
 * Inputs: [opts :- Glyphicon & children]
 *   Returns: t/Component
 */
om_bootstrap.random.glyphicon = ((function (ufv___53633,output_schema53624_53634,input_schema53625_53635,input_checker53626_53636,output_checker53627_53637){
return (function om_bootstrap$random$glyphicon(var_args){
var args__36903__auto__ = [];
var len__36896__auto___53638 = arguments.length;
var i__36897__auto___53639 = (0);
while(true){
if((i__36897__auto___53639 < len__36896__auto___53638)){
args__36903__auto__.push((arguments[i__36897__auto___53639]));

var G__53640 = (i__36897__auto___53639 + (1));
i__36897__auto___53639 = G__53640;
continue;
} else {
}
break;
}

var argseq__36904__auto__ = ((((1) < args__36903__auto__.length))?(new cljs.core.IndexedSeq(args__36903__auto__.slice((1)),(0))):null);
return om_bootstrap.random.glyphicon.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36904__auto__);
});})(ufv___53633,output_schema53624_53634,input_schema53625_53635,input_checker53626_53636,output_checker53627_53637))
;

om_bootstrap.random.glyphicon.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___53633,output_schema53624_53634,input_schema53625_53635,input_checker53626_53636,output_checker53627_53637){
return (function (G__53628,rest53629){
var validate__37277__auto__ = ufv___53633.get_cell();
if(cljs.core.truth_(validate__37277__auto__)){
var args__37278__auto___53641 = cljs.core.list_STAR_.call(null,G__53628,rest53629);
var temp__4425__auto___53642 = input_checker53626_53636.call(null,args__37278__auto___53641);
if(cljs.core.truth_(temp__4425__auto___53642)){
var error__37279__auto___53643 = temp__4425__auto___53642;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"glyphicon","glyphicon",-442600634,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__37279__auto___53643)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema53625_53635,new cljs.core.Keyword(null,"value","value",305978217),args__37278__auto___53641,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___53643], null));
} else {
}
} else {
}

var o__37280__auto__ = (function (){var opts = G__53628;
var children = rest53629;
while(true){
var vec__53632 = om_bootstrap.types.separate.call(null,om_bootstrap.random.Glyphicon,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"glyphicon"], null));
var bs = cljs.core.nth.call(null,vec__53632,(0),null);
var props = cljs.core.nth.call(null,vec__53632,(1),null);
var classes = cljs.core.assoc.call(null,om_bootstrap.types.bs_class_set.call(null,bs),[cljs.core.str("glyphicon-"),cljs.core.str(new cljs.core.Keyword(null,"glyph","glyph",2119448117).cljs$core$IFn$_invoke$arity$1(bs))].join(''),true);
return om_tools.dom.element.call(null,React.DOM.span,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__37277__auto__)){
var temp__4425__auto___53644 = output_checker53627_53637.call(null,o__37280__auto__);
if(cljs.core.truth_(temp__4425__auto___53644)){
var error__37279__auto___53645 = temp__4425__auto___53644;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"glyphicon","glyphicon",-442600634,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__37279__auto___53645)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema53624_53634,new cljs.core.Keyword(null,"value","value",305978217),o__37280__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___53645], null));
} else {
}
} else {
}

return o__37280__auto__;
});})(ufv___53633,output_schema53624_53634,input_schema53625_53635,input_checker53626_53636,output_checker53627_53637))
;

om_bootstrap.random.glyphicon.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.glyphicon.cljs$lang$applyTo = ((function (ufv___53633,output_schema53624_53634,input_schema53625_53635,input_checker53626_53636,output_checker53627_53637){
return (function (seq53630){
var G__53631 = cljs.core.first.call(null,seq53630);
var seq53630__$1 = cljs.core.next.call(null,seq53630);
return om_bootstrap.random.glyphicon.cljs$core$IFn$_invoke$arity$variadic(G__53631,seq53630__$1);
});})(ufv___53633,output_schema53624_53634,input_schema53625_53635,input_checker53626_53636,output_checker53627_53637))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.glyphicon),schema.core.make_fn_schema.call(null,output_schema53624_53634,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema53625_53635], null)));

//# sourceMappingURL=random.js.map