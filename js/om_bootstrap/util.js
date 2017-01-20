// Compiled by ClojureScript 1.7.170 {}
goog.provide('om_bootstrap.util');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('om.core');
goog.require('schema.core');
/**
 * Returns a map that consists of the rest of the maps conj-ed onto
 *   the first.  If a key occurs in more than one map, the mapping(s)
 *   from the latter (left-to-right) will be combined with the mapping in
 *   the result by looking up the proper merge function and in the
 *   supplied map of key -> merge-fn and using that for the big merge. If
 *   a key doesn't have a merge function, the right value wins (as with
 *   merge).
 */
om_bootstrap.util.merge_with_fns = (function om_bootstrap$util$merge_with_fns(k__GT_fn,maps){
var merge_entry = (function om_bootstrap$util$merge_with_fns_$_merge_entry(m,e){
var k = cljs.core.key.call(null,e);
var v = cljs.core.val.call(null,e);
var temp__4423__auto__ = (function (){var and__35826__auto__ = cljs.core.contains_QMARK_.call(null,m,k);
if(and__35826__auto__){
return k__GT_fn.call(null,k);
} else {
return and__35826__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),v));
} else {
return cljs.core.assoc.call(null,m,k,v);
}
});
var merge = (function om_bootstrap$util$merge_with_fns_$_merge(m1,m2){
return cljs.core.reduce.call(null,merge_entry,(function (){var or__35838__auto__ = m1;
if(cljs.core.truth_(or__35838__auto__)){
return or__35838__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge,cljs.core.PersistentArrayMap.EMPTY,maps);
});
var ufv___49341 = schema.utils.use_fn_validation;
var output_schema49336_49342 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null);
var input_schema49337_49343 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)))], null);
var input_checker49338_49344 = schema.core.checker.call(null,input_schema49337_49343);
var output_checker49339_49345 = schema.core.checker.call(null,output_schema49336_49342);
/**
 * Inputs: [x :- s/Any]
 *   Returns: [s/Any]
 */
om_bootstrap.util.collectify = ((function (ufv___49341,output_schema49336_49342,input_schema49337_49343,input_checker49338_49344,output_checker49339_49345){
return (function om_bootstrap$util$collectify(G__49340){
var validate__37277__auto__ = ufv___49341.get_cell();
if(cljs.core.truth_(validate__37277__auto__)){
var args__37278__auto___49346 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__49340], null);
var temp__4425__auto___49347 = input_checker49338_49344.call(null,args__37278__auto___49346);
if(cljs.core.truth_(temp__4425__auto___49347)){
var error__37279__auto___49348 = temp__4425__auto___49347;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"collectify","collectify",-1779603030,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)),cljs.core.pr_str.call(null,error__37279__auto___49348)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema49337_49343,new cljs.core.Keyword(null,"value","value",305978217),args__37278__auto___49346,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___49348], null));
} else {
}
} else {
}

var o__37280__auto__ = (function (){var x = G__49340;
while(true){
if(cljs.core.sequential_QMARK_.call(null,x)){
return x;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
break;
}
})();
if(cljs.core.truth_(validate__37277__auto__)){
var temp__4425__auto___49349 = output_checker49339_49345.call(null,o__37280__auto__);
if(cljs.core.truth_(temp__4425__auto___49349)){
var error__37279__auto___49350 = temp__4425__auto___49349;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"collectify","collectify",-1779603030,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)),cljs.core.pr_str.call(null,error__37279__auto___49350)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema49336_49342,new cljs.core.Keyword(null,"value","value",305978217),o__37280__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___49350], null));
} else {
}
} else {
}

return o__37280__auto__;
});})(ufv___49341,output_schema49336_49342,input_schema49337_49343,input_checker49338_49344,output_checker49339_49345))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.collectify),schema.core.make_fn_schema.call(null,output_schema49336_49342,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema49337_49343], null)));
/**
 * This is the same as om.core/get-props. We added it to get around
 *   the new precondition in Om 0.8.0.
 */
om_bootstrap.util.get_props = (function om_bootstrap$util$get_props(x){
return (x.props["__om_cursor"]);
});
var ufv___49356 = schema.utils.use_fn_validation;
var output_schema49351_49357 = schema.core.Bool;
var input_schema49352_49358 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker49353_49359 = schema.core.checker.call(null,input_schema49352_49358);
var output_checker49354_49360 = schema.core.checker.call(null,output_schema49351_49357);
/**
 * Inputs: [x]
 *   Returns: s/Bool
 */
om_bootstrap.util.om_component_QMARK_ = ((function (ufv___49356,output_schema49351_49357,input_schema49352_49358,input_checker49353_49359,output_checker49354_49360){
return (function om_bootstrap$util$om_component_QMARK_(G__49355){
var validate__37277__auto__ = ufv___49356.get_cell();
if(cljs.core.truth_(validate__37277__auto__)){
var args__37278__auto___49361 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__49355], null);
var temp__4425__auto___49362 = input_checker49353_49359.call(null,args__37278__auto___49361);
if(cljs.core.truth_(temp__4425__auto___49362)){
var error__37279__auto___49363 = temp__4425__auto___49362;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"om-component?","om-component?",534068525,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null)),cljs.core.pr_str.call(null,error__37279__auto___49363)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema49352_49358,new cljs.core.Keyword(null,"value","value",305978217),args__37278__auto___49361,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___49363], null));
} else {
}
} else {
}

var o__37280__auto__ = (function (){var x = G__49355;
while(true){
return cljs.core.boolean$.call(null,om_bootstrap.util.get_props.call(null,x));
break;
}
})();
if(cljs.core.truth_(validate__37277__auto__)){
var temp__4425__auto___49364 = output_checker49354_49360.call(null,o__37280__auto__);
if(cljs.core.truth_(temp__4425__auto___49364)){
var error__37279__auto___49365 = temp__4425__auto___49364;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"om-component?","om-component?",534068525,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null)),cljs.core.pr_str.call(null,error__37279__auto___49365)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema49351_49357,new cljs.core.Keyword(null,"value","value",305978217),o__37280__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___49365], null));
} else {
}
} else {
}

return o__37280__auto__;
});})(ufv___49356,output_schema49351_49357,input_schema49352_49358,input_checker49353_49359,output_checker49354_49360))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.om_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema49351_49357,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema49352_49358], null)));
var ufv___49371 = schema.utils.use_fn_validation;
var output_schema49366_49372 = schema.core.Bool;
var input_schema49367_49373 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"child","child",-2030468224,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker49368_49374 = schema.core.checker.call(null,input_schema49367_49373);
var output_checker49369_49375 = schema.core.checker.call(null,output_schema49366_49372);
/**
 * Inputs: [child]
 *   Returns: s/Bool
 * 
 *   TODO: Once Om updates its externs to include this file, we can
 *   remove the janky aget call.
 */
om_bootstrap.util.strict_valid_component_QMARK_ = ((function (ufv___49371,output_schema49366_49372,input_schema49367_49373,input_checker49368_49374,output_checker49369_49375){
return (function om_bootstrap$util$strict_valid_component_QMARK_(G__49370){
var validate__37277__auto__ = ufv___49371.get_cell();
if(cljs.core.truth_(validate__37277__auto__)){
var args__37278__auto___49376 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__49370], null);
var temp__4425__auto___49377 = input_checker49368_49374.call(null,args__37278__auto___49376);
if(cljs.core.truth_(temp__4425__auto___49377)){
var error__37279__auto___49378 = temp__4425__auto___49377;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"strict-valid-component?","strict-valid-component?",130165335,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"TODO: Once Om updates its externs to include this file, we can\n  remove the janky aget call."], null)),cljs.core.pr_str.call(null,error__37279__auto___49378)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema49367_49373,new cljs.core.Keyword(null,"value","value",305978217),args__37278__auto___49376,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___49378], null));
} else {
}
} else {
}

var o__37280__auto__ = (function (){var child = G__49370;
while(true){
return (React["isValidElement"]).call(null,child);
break;
}
})();
if(cljs.core.truth_(validate__37277__auto__)){
var temp__4425__auto___49379 = output_checker49369_49375.call(null,o__37280__auto__);
if(cljs.core.truth_(temp__4425__auto___49379)){
var error__37279__auto___49380 = temp__4425__auto___49379;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"strict-valid-component?","strict-valid-component?",130165335,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"TODO: Once Om updates its externs to include this file, we can\n  remove the janky aget call."], null)),cljs.core.pr_str.call(null,error__37279__auto___49380)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema49366_49372,new cljs.core.Keyword(null,"value","value",305978217),o__37280__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___49380], null));
} else {
}
} else {
}

return o__37280__auto__;
});})(ufv___49371,output_schema49366_49372,input_schema49367_49373,input_checker49368_49374,output_checker49369_49375))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.strict_valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema49366_49372,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema49367_49373], null)));
var ufv___49386 = schema.utils.use_fn_validation;
var output_schema49381_49387 = schema.core.Bool;
var input_schema49382_49388 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"child","child",-2030468224,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker49383_49389 = schema.core.checker.call(null,input_schema49382_49388);
var output_checker49384_49390 = schema.core.checker.call(null,output_schema49381_49387);
/**
 * Inputs: [child]
 *   Returns: s/Bool
 * 
 *   Returns true if the supplied argument is a valid React component,
 *   false otherwise.
 */
om_bootstrap.util.valid_component_QMARK_ = ((function (ufv___49386,output_schema49381_49387,input_schema49382_49388,input_checker49383_49389,output_checker49384_49390){
return (function om_bootstrap$util$valid_component_QMARK_(G__49385){
var validate__37277__auto__ = ufv___49386.get_cell();
if(cljs.core.truth_(validate__37277__auto__)){
var args__37278__auto___49391 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__49385], null);
var temp__4425__auto___49392 = input_checker49383_49389.call(null,args__37278__auto___49391);
if(cljs.core.truth_(temp__4425__auto___49392)){
var error__37279__auto___49393 = temp__4425__auto___49392;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"valid-component?","valid-component?",-519675438,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if the supplied argument is a valid React component,\n  false otherwise."], null)),cljs.core.pr_str.call(null,error__37279__auto___49393)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema49382_49388,new cljs.core.Keyword(null,"value","value",305978217),args__37278__auto___49391,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___49393], null));
} else {
}
} else {
}

var o__37280__auto__ = (function (){var child = G__49385;
while(true){
var or__35838__auto__ = typeof child === 'string';
if(or__35838__auto__){
return or__35838__auto__;
} else {
var or__35838__auto____$1 = typeof child === 'number';
if(or__35838__auto____$1){
return or__35838__auto____$1;
} else {
return om_bootstrap.util.strict_valid_component_QMARK_.call(null,child);
}
}
break;
}
})();
if(cljs.core.truth_(validate__37277__auto__)){
var temp__4425__auto___49394 = output_checker49384_49390.call(null,o__37280__auto__);
if(cljs.core.truth_(temp__4425__auto___49394)){
var error__37279__auto___49395 = temp__4425__auto___49394;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"valid-component?","valid-component?",-519675438,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if the supplied argument is a valid React component,\n  false otherwise."], null)),cljs.core.pr_str.call(null,error__37279__auto___49395)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema49381_49387,new cljs.core.Keyword(null,"value","value",305978217),o__37280__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___49395], null));
} else {
}
} else {
}

return o__37280__auto__;
});})(ufv___49386,output_schema49381_49387,input_schema49382_49388,input_checker49383_49389,output_checker49384_49390))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema49381_49387,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema49382_49388], null)));
var ufv___49401 = schema.utils.use_fn_validation;
var output_schema49396_49402 = schema.core.Bool;
var input_schema49397_49403 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker49398_49404 = schema.core.checker.call(null,input_schema49397_49403);
var output_checker49399_49405 = schema.core.checker.call(null,output_schema49396_49402);
/**
 * Inputs: [children]
 *   Returns: s/Bool
 * 
 *   Returns true if the supplied sequence contains some valid React component,
 *   false otherwise.
 */
om_bootstrap.util.some_valid_component_QMARK_ = ((function (ufv___49401,output_schema49396_49402,input_schema49397_49403,input_checker49398_49404,output_checker49399_49405){
return (function om_bootstrap$util$some_valid_component_QMARK_(G__49400){
var validate__37277__auto__ = ufv___49401.get_cell();
if(cljs.core.truth_(validate__37277__auto__)){
var args__37278__auto___49406 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__49400], null);
var temp__4425__auto___49407 = input_checker49398_49404.call(null,args__37278__auto___49406);
if(cljs.core.truth_(temp__4425__auto___49407)){
var error__37279__auto___49408 = temp__4425__auto___49407;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"some-valid-component?","some-valid-component?",-171767082,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if the supplied sequence contains some valid React component,\n  false otherwise."], null)),cljs.core.pr_str.call(null,error__37279__auto___49408)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema49397_49403,new cljs.core.Keyword(null,"value","value",305978217),args__37278__auto___49406,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___49408], null));
} else {
}
} else {
}

var o__37280__auto__ = (function (){var children = G__49400;
while(true){
return cljs.core.boolean$.call(null,cljs.core.some.call(null,om_bootstrap.util.valid_component_QMARK_,children));
break;
}
})();
if(cljs.core.truth_(validate__37277__auto__)){
var temp__4425__auto___49409 = output_checker49399_49405.call(null,o__37280__auto__);
if(cljs.core.truth_(temp__4425__auto___49409)){
var error__37279__auto___49410 = temp__4425__auto___49409;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"some-valid-component?","some-valid-component?",-171767082,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if the supplied sequence contains some valid React component,\n  false otherwise."], null)),cljs.core.pr_str.call(null,error__37279__auto___49410)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema49396_49402,new cljs.core.Keyword(null,"value","value",305978217),o__37280__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___49410], null));
} else {
}
} else {
}

return o__37280__auto__;
});})(ufv___49401,output_schema49396_49402,input_schema49397_49403,input_checker49398_49404,output_checker49399_49405))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.some_valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema49396_49402,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema49397_49403], null)));
/**
 * Generates a new function that calls each supplied side-effecting
 *   function.
 */
om_bootstrap.util.chain_fns = (function om_bootstrap$util$chain_fns(l,r){
if(cljs.core.truth_((function (){var and__35826__auto__ = l;
if(cljs.core.truth_(and__35826__auto__)){
return r;
} else {
return and__35826__auto__;
}
})())){
return (function() { 
var G__49411__delegate = function (args){
cljs.core.apply.call(null,l,args);

return cljs.core.apply.call(null,r,args);
};
var G__49411 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49412__i = 0, G__49412__a = new Array(arguments.length -  0);
while (G__49412__i < G__49412__a.length) {G__49412__a[G__49412__i] = arguments[G__49412__i + 0]; ++G__49412__i;}
  args = new cljs.core.IndexedSeq(G__49412__a,0);
} 
return G__49411__delegate.call(this,args);};
G__49411.cljs$lang$maxFixedArity = 0;
G__49411.cljs$lang$applyTo = (function (arglist__49413){
var args = cljs.core.seq(arglist__49413);
return G__49411__delegate(args);
});
G__49411.cljs$core$IFn$_invoke$arity$variadic = G__49411__delegate;
return G__49411;
})()
;
} else {
var or__35838__auto__ = l;
if(cljs.core.truth_(or__35838__auto__)){
return or__35838__auto__;
} else {
return r;
}
}
});
/**
 * Map of React keyword to a custom function for its merge. Tries to
 *   do a decent job with event handlers as well; currently only
 *   handles :on-select :on-click, :on-blur, kebab-cased as om-tools
 *   prefers.
 */
om_bootstrap.util.react_merges = (function (){var merge_class = (function (l,r){
return [cljs.core.str(l),cljs.core.str(" "),cljs.core.str(r)].join('');
});
var orig_fn = ((function (merge_class){
return (function (l,r){
var or__35838__auto__ = l;
if(cljs.core.truth_(or__35838__auto__)){
return or__35838__auto__;
} else {
return r;
}
});})(merge_class))
;
var empty_fn = ((function (merge_class,orig_fn){
return (function (_,___$1){
return null;
});})(merge_class,orig_fn))
;
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"on-select","on-select",-192407950),new cljs.core.Keyword(null,"class","class",-2030961996)],[empty_fn,empty_fn,orig_fn,om_bootstrap.util.chain_fns,om_bootstrap.util.chain_fns,merge_class,cljs.core.merge,om_bootstrap.util.chain_fns,merge_class]);
})();
/**
 * Merges two maps that represent React properties. Merges occur
 *   according to the functions defined in `react-merges`.
 */
om_bootstrap.util.merge_props = (function om_bootstrap$util$merge_props(var_args){
var args__36903__auto__ = [];
var len__36896__auto___49415 = arguments.length;
var i__36897__auto___49416 = (0);
while(true){
if((i__36897__auto___49416 < len__36896__auto___49415)){
args__36903__auto__.push((arguments[i__36897__auto___49416]));

var G__49417 = (i__36897__auto___49416 + (1));
i__36897__auto___49416 = G__49417;
continue;
} else {
}
break;
}

var argseq__36904__auto__ = ((((0) < args__36903__auto__.length))?(new cljs.core.IndexedSeq(args__36903__auto__.slice((0)),(0))):null);
return om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(argseq__36904__auto__);
});

om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic = (function (prop_maps){
var react_merge = (function om_bootstrap$util$react_merge(xs){
return om_bootstrap.util.merge_with_fns.call(null,om_bootstrap.util.react_merges,xs);
});
var normalize_class = (function om_bootstrap$util$normalize_class(m){
if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"class","class",-2030961996))){
return react_merge.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.dissoc.call(null,m,new cljs.core.Keyword(null,"class","class",-2030961996)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(m)], null)], null));
} else {
return m;
}
});
var ret = react_merge.call(null,cljs.core.map.call(null,normalize_class,prop_maps));
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ret))){
return cljs.core.dissoc.call(null,ret,new cljs.core.Keyword(null,"key","key",-1516042587));
} else {
return ret;
}
});

om_bootstrap.util.merge_props.cljs$lang$maxFixedArity = (0);

om_bootstrap.util.merge_props.cljs$lang$applyTo = (function (seq49414){
return om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49414));
});
/**
 * Returns a basic, shallow copy of the supplied JS object.
 */
om_bootstrap.util.copy_js = (function om_bootstrap$util$copy_js(arr){
var ret = {};
var seq__49426_49430 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,arr));
var chunk__49427_49431 = null;
var count__49428_49432 = (0);
var i__49429_49433 = (0);
while(true){
if((i__49429_49433 < count__49428_49432)){
var k_49434 = cljs.core._nth.call(null,chunk__49427_49431,i__49429_49433);
if(cljs.core.truth_(arr.hasOwnProperty(k_49434))){
(ret[k_49434] = (arr[k_49434]));
} else {
}

var G__49435 = seq__49426_49430;
var G__49436 = chunk__49427_49431;
var G__49437 = count__49428_49432;
var G__49438 = (i__49429_49433 + (1));
seq__49426_49430 = G__49435;
chunk__49427_49431 = G__49436;
count__49428_49432 = G__49437;
i__49429_49433 = G__49438;
continue;
} else {
var temp__4425__auto___49439 = cljs.core.seq.call(null,seq__49426_49430);
if(temp__4425__auto___49439){
var seq__49426_49440__$1 = temp__4425__auto___49439;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49426_49440__$1)){
var c__36641__auto___49441 = cljs.core.chunk_first.call(null,seq__49426_49440__$1);
var G__49442 = cljs.core.chunk_rest.call(null,seq__49426_49440__$1);
var G__49443 = c__36641__auto___49441;
var G__49444 = cljs.core.count.call(null,c__36641__auto___49441);
var G__49445 = (0);
seq__49426_49430 = G__49442;
chunk__49427_49431 = G__49443;
count__49428_49432 = G__49444;
i__49429_49433 = G__49445;
continue;
} else {
var k_49446 = cljs.core.first.call(null,seq__49426_49440__$1);
if(cljs.core.truth_(arr.hasOwnProperty(k_49446))){
(ret[k_49446] = (arr[k_49446]));
} else {
}

var G__49447 = cljs.core.next.call(null,seq__49426_49440__$1);
var G__49448 = null;
var G__49449 = (0);
var G__49450 = (0);
seq__49426_49430 = G__49447;
chunk__49427_49431 = G__49448;
count__49428_49432 = G__49449;
i__49429_49433 = G__49450;
continue;
}
} else {
}
}
break;
}

return ret;
});
om_bootstrap.util.create_element = (function om_bootstrap$util$create_element(var_args){
var args49451 = [];
var len__36896__auto___49454 = arguments.length;
var i__36897__auto___49455 = (0);
while(true){
if((i__36897__auto___49455 < len__36896__auto___49454)){
args49451.push((arguments[i__36897__auto___49455]));

var G__49456 = (i__36897__auto___49455 + (1));
i__36897__auto___49455 = G__49456;
continue;
} else {
}
break;
}

var G__49453 = args49451.length;
switch (G__49453) {
case 1:
return om_bootstrap.util.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.util.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49451.length)].join('')));

}
});

om_bootstrap.util.create_element.cljs$core$IFn$_invoke$arity$1 = (function (child){
return om_bootstrap.util.create_element.call(null,child,null);
});

om_bootstrap.util.create_element.cljs$core$IFn$_invoke$arity$2 = (function (child,props){
return React.createElement(child.type,props);
});

om_bootstrap.util.create_element.cljs$lang$maxFixedArity = 2;
/**
 * Merges the supplied extra properties into the underlying Om cursor
 *   and calls the constructor to clone the React component.
 * 
 *   Requires that the supplied child has an Om cursor attached to it! 
 */
om_bootstrap.util.clone_om = (function om_bootstrap$util$clone_om(child,extra_props){
var om_props = om_bootstrap.util.get_props.call(null,child);
var props = {};
var cloned_child = goog.object.clone(child);
goog.object.extend(props,child.props,{"__om_cursor": ((cljs.core.fn_QMARK_.call(null,extra_props))?extra_props.call(null,om_props):om_bootstrap.util.merge_props.call(null,om_props,extra_props))});

goog.object.extend(cloned_child,{"props": props});

return cloned_child;
});
/**
 * This function is called if the React component child was NOT
 *   generated by Om. Merges the supplied properties into the -props
 *   field of the supplied React component and creates a shallow copy.
 */
om_bootstrap.util.clone_basic_react = (function om_bootstrap$util$clone_basic_react(child,extra_props){
var props = cljs.core.js__GT_clj.call(null,child.props,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var new_props = cljs.core.merge.call(null,((cljs.core.fn_QMARK_.call(null,extra_props))?extra_props.call(null,props):om_bootstrap.util.merge_props.call(null,props,extra_props)),(function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__4425__auto__)){
var children = temp__4425__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),children], null);
} else {
return null;
}
})());
return om_bootstrap.util.create_element.call(null,child,cljs.core.clj__GT_js.call(null,new_props));
});
/**
 * Returns a shallow copy of the supplied component (child); the copy
 *   will have any props provided by extra-props merged in. Props are
 *   merged in the same manner as merge-props, so props like :class will
 *   be merged intelligently.
 * 
 *   extra-props can be a function of the old props that returns new
 *   props, OR it can be a map of props.
 * 
 *   If the supplied child is an Om component, any supplied extra
 *   properties will be merged into the underlying cursor and accessible
 *   in the Om constructor.
 */
om_bootstrap.util.clone_with_props = (function om_bootstrap$util$clone_with_props(var_args){
var args49458 = [];
var len__36896__auto___49461 = arguments.length;
var i__36897__auto___49462 = (0);
while(true){
if((i__36897__auto___49462 < len__36896__auto___49461)){
args49458.push((arguments[i__36897__auto___49462]));

var G__49463 = (i__36897__auto___49462 + (1));
i__36897__auto___49462 = G__49463;
continue;
} else {
}
break;
}

var G__49460 = args49458.length;
switch (G__49460) {
case 1:
return om_bootstrap.util.clone_with_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.util.clone_with_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49458.length)].join('')));

}
});

om_bootstrap.util.clone_with_props.cljs$core$IFn$_invoke$arity$1 = (function (child){
return om_bootstrap.util.clone_with_props.call(null,child,cljs.core.PersistentArrayMap.EMPTY);
});

om_bootstrap.util.clone_with_props.cljs$core$IFn$_invoke$arity$2 = (function (child,extra_props){
if(cljs.core.not.call(null,om_bootstrap.util.strict_valid_component_QMARK_.call(null,child))){
return child;
} else {
if(cljs.core.truth_(om_bootstrap.util.om_component_QMARK_.call(null,child))){
return om_bootstrap.util.clone_om.call(null,child,extra_props);
} else {
if((cljs.core.map_QMARK_.call(null,extra_props)) && (cljs.core.empty_QMARK_.call(null,extra_props))){
return om_bootstrap.util.create_element.call(null,child,child.props);
} else {
return om_bootstrap.util.clone_basic_react.call(null,child,extra_props);

}
}
}
});

om_bootstrap.util.clone_with_props.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=util.js.map