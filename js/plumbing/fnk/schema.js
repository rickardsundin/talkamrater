// Compiled by ClojureScript 1.7.170 {}
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('schema.utils');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__37946__37947__auto__){
if(!((p1__37946__37947__auto__ == null))){
if((false) || (p1__37946__37947__auto__.schema$core$Schema$)){
return true;
} else {
if((!p1__37946__37947__auto__.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,p1__37946__37947__auto__);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,p1__37946__37947__auto__);
}
})], null));
plumbing.fnk.schema.InputSchema = cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.eq.call(null,schema.core.Keyword),schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.OutputSchema = plumbing.fnk.schema.Schema;
plumbing.fnk.schema.IOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.OutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
plumbing.fnk.schema.GraphInputSchema = cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.MapOutputSchema = cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.GraphIOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphInputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
/**
 * Like (assert (distinct? things)) but with a more helpful error message.
 */
plumbing.fnk.schema.assert_distinct = (function plumbing$fnk$schema$assert_distinct(things){
var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__38863_SHARP_){
return (cljs.core.val.call(null,p1__38863_SHARP_) > (1));
}),cljs.core.frequencies.call(null,things)));
if(cljs.core.empty_QMARK_.call(null,repeated_things)){
return null;
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Got repeated items (expected distinct): %s",repeated_things)));
}
});
/**
 * Like (get m k), but throws if k is not present in m.
 */
plumbing.fnk.schema.safe_get = (function plumbing$fnk$schema$safe_get(m,k,key_path){
if(cljs.core.map_QMARK_.call(null,m)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Expected a map at key-path %s, got type %s",key_path,schema.utils.type_of.call(null,m))));
}

var vec__38865 = cljs.core.find.call(null,m,k);
var _ = cljs.core.nth.call(null,vec__38865,(0),null);
var v = cljs.core.nth.call(null,vec__38865,(1),null);
var p = vec__38865;
if(cljs.core.truth_(p)){
} else {
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.keys.call(null,m)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"missing-key","missing-key",1259209562),new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"map","map",1371690461),m], null));
}

return v;
});
plumbing.fnk.schema.non_map_union = (function plumbing$fnk$schema$non_map_union(s1,s2){
if(cljs.core._EQ_.call(null,s1,s2)){
return s1;
} else {
if(cljs.core._EQ_.call(null,s1,schema.core.Any)){
return s2;
} else {
if(cljs.core._EQ_.call(null,s2,schema.core.Any)){
return s1;
} else {
return schema.core.both.call(null,s1,s2);

}
}
}
});
/**
 * Return a difference of schmas s1 and s2, where one is not a map.
 * Punt for now, assuming s2 always satisfies s1.
 */
plumbing.fnk.schema.non_map_diff = (function plumbing$fnk$schema$non_map_diff(s1,s2){
return null;
});
plumbing.fnk.schema.map_schema_QMARK_ = (function plumbing$fnk$schema$map_schema_QMARK_(m){
return ((m instanceof cljs.core.PersistentArrayMap)) || ((m instanceof cljs.core.PersistentHashMap));
});
var ufv___38871 = schema.utils.use_fn_validation;
var output_schema38866_38872 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));
var input_schema38867_38873 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker38868_38874 = schema.core.checker.call(null,input_schema38867_38873);
var output_checker38869_38875 = schema.core.checker.call(null,output_schema38866_38872);
/**
 * Inputs: [k]
 *   Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
 * 
 *   Given a possibly-unevaluated schema map key form, unpack an explicit keyword
 * and optional? flag, or return nil for a non-explicit key
 */
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___38871,output_schema38866_38872,input_schema38867_38873,input_checker38868_38874,output_checker38869_38875){
return (function plumbing$fnk$schema$unwrap_schema_form_key(G__38870){
var validate__37277__auto__ = ufv___38871.get_cell();
if(cljs.core.truth_(validate__37277__auto__)){
var args__37278__auto___38876 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__38870], null);
var temp__4425__auto___38877 = input_checker38868_38874.call(null,args__37278__auto___38876);
if(cljs.core.truth_(temp__4425__auto___38877)){
var error__37279__auto___38878 = temp__4425__auto___38877;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),"k",new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),"optional?")),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated schema map key form, unpack an explicit keyword\n   and optional? flag, or return nil for a non-explicit key"], null)),cljs.core.pr_str.call(null,error__37279__auto___38878)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema38867_38873,new cljs.core.Keyword(null,"value","value",305978217),args__37278__auto___38876,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___38878], null));
} else {
}
} else {
}

var o__37280__auto__ = (function (){var k = G__38870;
while(true){
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,k))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key.call(null,k),schema.core.required_key_QMARK_.call(null,k)], null);
} else {
if((cljs.core.sequential_QMARK_.call(null,k)) && (!(cljs.core.vector_QMARK_.call(null,k))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,k),(2))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,k),new cljs.core.Symbol("schema.core","optional-key","schema.core/optional-key",-170069547,null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,k),false], null);
} else {
return null;
}
}
break;
}
})();
if(cljs.core.truth_(validate__37277__auto__)){
var temp__4425__auto___38879 = output_checker38869_38875.call(null,o__37280__auto__);
if(cljs.core.truth_(temp__4425__auto___38879)){
var error__37279__auto___38880 = temp__4425__auto___38879;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),"k",new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),"optional?")),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated schema map key form, unpack an explicit keyword\n   and optional? flag, or return nil for a non-explicit key"], null)),cljs.core.pr_str.call(null,error__37279__auto___38880)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema38866_38872,new cljs.core.Keyword(null,"value","value",305978217),o__37280__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___38880], null));
} else {
}
} else {
}

return o__37280__auto__;
});})(ufv___38871,output_schema38866_38872,input_schema38867_38873,input_checker38868_38874,output_checker38869_38875))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema38866_38872,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema38867_38873], null)));
var ufv___38886 = schema.utils.use_fn_validation;
var output_schema38881_38887 = cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
var input_schema38882_38888 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker38883_38889 = schema.core.checker.call(null,input_schema38882_38888);
var output_checker38884_38890 = schema.core.checker.call(null,output_schema38881_38887);
/**
 * Inputs: [s]
 *   Returns: {s/Keyword s/Bool}
 * 
 *   Given a possibly-unevaluated map schema, return a map from bare keyword to true
 * (for required) or false (for optional)
 */
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___38886,output_schema38881_38887,input_schema38882_38888,input_checker38883_38889,output_checker38884_38890){
return (function plumbing$fnk$schema$explicit_schema_key_map(G__38885){
var validate__37277__auto__ = ufv___38886.get_cell();
if(cljs.core.truth_(validate__37277__auto__)){
var args__37278__auto___38891 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__38885], null);
var temp__4425__auto___38892 = input_checker38883_38889.call(null,args__37278__auto___38891);
if(cljs.core.truth_(temp__4425__auto___38892)){
var error__37279__auto___38893 = temp__4425__auto___38892;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated map schema, return a map from bare keyword to true\n   (for required) or false (for optional)"], null)),cljs.core.pr_str.call(null,error__37279__auto___38893)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema38882_38888,new cljs.core.Keyword(null,"value","value",305978217),args__37278__auto___38891,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___38893], null));
} else {
}
} else {
}

var o__37280__auto__ = (function (){var s = G__38885;
while(true){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();
if(cljs.core.truth_(validate__37277__auto__)){
var temp__4425__auto___38894 = output_checker38884_38890.call(null,o__37280__auto__);
if(cljs.core.truth_(temp__4425__auto___38894)){
var error__37279__auto___38895 = temp__4425__auto___38894;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated map schema, return a map from bare keyword to true\n   (for required) or false (for optional)"], null)),cljs.core.pr_str.call(null,error__37279__auto___38895)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema38881_38887,new cljs.core.Keyword(null,"value","value",305978217),o__37280__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___38895], null));
} else {
}
} else {
}

return o__37280__auto__;
});})(ufv___38886,output_schema38881_38887,input_schema38882_38888,input_checker38883_38889,output_checker38884_38890))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema38881_38887,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema38882_38888], null)));
var ufv___38901 = schema.utils.use_fn_validation;
var output_schema38896_38902 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
var input_schema38897_38903 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null)], null)))], null);
var input_checker38898_38904 = schema.core.checker.call(null,input_schema38897_38903);
var output_checker38899_38905 = schema.core.checker.call(null,output_schema38896_38902);
/**
 * Inputs: [s :- {s/Keyword s/Bool}]
 *   Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
 * 
 *   Given output of explicit-schema-key-map, split into seq [req opt].
 */
plumbing.fnk.schema.split_schema_keys = ((function (ufv___38901,output_schema38896_38902,input_schema38897_38903,input_checker38898_38904,output_checker38899_38905){
return (function plumbing$fnk$schema$split_schema_keys(G__38900){
var validate__37277__auto__ = ufv___38901.get_cell();
if(cljs.core.truth_(validate__37277__auto__)){
var args__37278__auto___38906 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__38900], null);
var temp__4425__auto___38907 = input_checker38898_38904.call(null,args__37278__auto___38906);
if(cljs.core.truth_(temp__4425__auto___38907)){
var error__37279__auto___38908 = temp__4425__auto___38907;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"required","required",-846788763,null))),cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"optional","optional",-600484260,null)))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given output of explicit-schema-key-map, split into seq [req opt]."], null)),cljs.core.pr_str.call(null,error__37279__auto___38908)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema38897_38903,new cljs.core.Keyword(null,"value","value",305978217),args__37278__auto___38906,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___38908], null));
} else {
}
} else {
}

var o__37280__auto__ = (function (){var s = G__38900;
while(true){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();
if(cljs.core.truth_(validate__37277__auto__)){
var temp__4425__auto___38909 = output_checker38899_38905.call(null,o__37280__auto__);
if(cljs.core.truth_(temp__4425__auto___38909)){
var error__37279__auto___38910 = temp__4425__auto___38909;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"required","required",-846788763,null))),cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"optional","optional",-600484260,null)))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given output of explicit-schema-key-map, split into seq [req opt]."], null)),cljs.core.pr_str.call(null,error__37279__auto___38910)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema38896_38902,new cljs.core.Keyword(null,"value","value",305978217),o__37280__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___38910], null));
} else {
}
} else {
}

return o__37280__auto__;
});})(ufv___38901,output_schema38896_38902,input_schema38897_38903,input_checker38898_38904,output_checker38899_38905))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema38896_38902,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema38897_38903], null)));
/**
 * Like merge-with, but also projects keys to a smaller space and merges them similar to the
 * values.
 */
plumbing.fnk.schema.merge_on_with = (function plumbing$fnk$schema$merge_on_with(var_args){
var args__36903__auto__ = [];
var len__36896__auto___38918 = arguments.length;
var i__36897__auto___38919 = (0);
while(true){
if((i__36897__auto___38919 < len__36896__auto___38918)){
args__36903__auto__.push((arguments[i__36897__auto___38919]));

var G__38920 = (i__36897__auto___38919 + (1));
i__36897__auto___38919 = G__38920;
continue;
} else {
}
break;
}

var argseq__36904__auto__ = ((((3) < args__36903__auto__.length))?(new cljs.core.IndexedSeq(args__36903__auto__.slice((3)),(0))):null);
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__36904__auto__);
});

plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic = (function (key_project,key_combine,val_combine,maps){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__38915){
var vec__38916 = p__38915;
var k = cljs.core.nth.call(null,vec__38916,(0),null);
var v = cljs.core.nth.call(null,vec__38916,(1),null);
var pk = key_project.call(null,k);
var temp__4423__auto__ = cljs.core.get.call(null,m,pk);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__38917 = temp__4423__auto__;
var ok = cljs.core.nth.call(null,vec__38917,(0),null);
var ov = cljs.core.nth.call(null,vec__38917,(1),null);
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
} else {
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,maps))));
});

plumbing.fnk.schema.merge_on_with.cljs$lang$maxFixedArity = (3);

plumbing.fnk.schema.merge_on_with.cljs$lang$applyTo = (function (seq38911){
var G__38912 = cljs.core.first.call(null,seq38911);
var seq38911__$1 = cljs.core.next.call(null,seq38911);
var G__38913 = cljs.core.first.call(null,seq38911__$1);
var seq38911__$2 = cljs.core.next.call(null,seq38911__$1);
var G__38914 = cljs.core.first.call(null,seq38911__$2);
var seq38911__$3 = cljs.core.next.call(null,seq38911__$2);
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(G__38912,G__38913,G__38914,seq38911__$3);
});
var ufv___38928 = schema.utils.use_fn_validation;
var output_schema38922_38929 = plumbing.fnk.schema.InputSchema;
var input_schema38923_38930 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"i1","i1",-572470430,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null))),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"i2","i2",850408895,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null)))], null);
var input_checker38924_38931 = schema.core.checker.call(null,input_schema38923_38930);
var output_checker38925_38932 = schema.core.checker.call(null,output_schema38922_38929);
/**
 * Inputs: [i1 :- InputSchema i2 :- InputSchema]
 *   Returns: InputSchema
 * 
 *   Returns a minimal input schema schema that entails satisfaction of both s1 and s2
 */
plumbing.fnk.schema.union_input_schemata = ((function (ufv___38928,output_schema38922_38929,input_schema38923_38930,input_checker38924_38931,output_checker38925_38932){
return (function plumbing$fnk$schema$union_input_schemata(G__38926,G__38927){
var validate__37277__auto__ = ufv___38928.get_cell();
if(cljs.core.truth_(validate__37277__auto__)){
var args__37278__auto___38933 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__38926,G__38927], null);
var temp__4425__auto___38934 = input_checker38924_38931.call(null,args__37278__auto___38933);
if(cljs.core.truth_(temp__4425__auto___38934)){
var error__37279__auto___38935 = temp__4425__auto___38934;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a minimal input schema schema that entails satisfaction of both s1 and s2"], null)),cljs.core.pr_str.call(null,error__37279__auto___38935)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema38923_38930,new cljs.core.Keyword(null,"value","value",305978217),args__37278__auto___38933,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___38935], null));
} else {
}
} else {
}

var o__37280__auto__ = (function (){var i1 = G__38926;
var i2 = G__38927;
while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__37277__auto__,ufv___38928,output_schema38922_38929,input_schema38923_38930,input_checker38924_38931,output_checker38925_38932){
return (function (p1__38921_SHARP_){
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,p1__38921_SHARP_))){
return schema.core.explicit_schema_key.call(null,p1__38921_SHARP_);
} else {
return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__37277__auto__,ufv___38928,output_schema38922_38929,input_schema38923_38930,input_checker38924_38931,output_checker38925_38932))
,((function (validate__37277__auto__,ufv___38928,output_schema38922_38929,input_schema38923_38930,input_checker38924_38931,output_checker38925_38932){
return (function (k1,k2){
if(cljs.core.truth_(schema.core.required_key_QMARK_.call(null,k1))){
return k1;
} else {
if(cljs.core.truth_(schema.core.required_key_QMARK_.call(null,k2))){
return k2;
} else {
if(cljs.core.truth_(schema.core.optional_key_QMARK_.call(null,k1))){
if(cljs.core._EQ_.call(null,k1,k2)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Symbol(null,"k2","k2",-1225133949,null))))].join('')));
}

return k1;
} else {
if(cljs.core._EQ_.call(null,k1,k2)){
return k1;
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Only one extra schema allowed")));


}
}
}
}
});})(validate__37277__auto__,ufv___38928,output_schema38922_38929,input_schema38923_38930,input_checker38924_38931,output_checker38925_38932))
,((function (validate__37277__auto__,ufv___38928,output_schema38922_38929,input_schema38923_38930,input_checker38924_38931,output_checker38925_38932){
return (function (s1,s2){
if(cljs.core.truth_((function (){var and__35826__auto__ = plumbing.fnk.schema.map_schema_QMARK_.call(null,s1);
if(cljs.core.truth_(and__35826__auto__)){
return plumbing.fnk.schema.map_schema_QMARK_.call(null,s2);
} else {
return and__35826__auto__;
}
})())){
return plumbing$fnk$schema$union_input_schemata.call(null,s1,s2);
} else {
return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__37277__auto__,ufv___38928,output_schema38922_38929,input_schema38923_38930,input_checker38924_38931,output_checker38925_38932))
,i1,i2);
break;
}
})();
if(cljs.core.truth_(validate__37277__auto__)){
var temp__4425__auto___38936 = output_checker38925_38932.call(null,o__37280__auto__);
if(cljs.core.truth_(temp__4425__auto___38936)){
var error__37279__auto___38937 = temp__4425__auto___38936;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a minimal input schema schema that entails satisfaction of both s1 and s2"], null)),cljs.core.pr_str.call(null,error__37279__auto___38937)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema38922_38929,new cljs.core.Keyword(null,"value","value",305978217),o__37280__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___38937], null));
} else {
}
} else {
}

return o__37280__auto__;
});})(ufv___38928,output_schema38922_38929,input_schema38923_38930,input_checker38924_38931,output_checker38925_38932))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema38922_38929,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema38923_38930], null)));
var ufv___38943 = schema.utils.use_fn_validation;
var output_schema38938_38944 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);
var input_schema38939_38945 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null)))], null);
var input_checker38940_38946 = schema.core.checker.call(null,input_schema38939_38945);
var output_checker38941_38947 = schema.core.checker.call(null,output_schema38938_38944);
/**
 * Inputs: [input-schema :- InputSchema]
 *   Returns: [s/Keyword]
 * 
 *   Which top-level keys are required (i.e., non-false) by this input schema.
 */
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___38943,output_schema38938_38944,input_schema38939_38945,input_checker38940_38946,output_checker38941_38947){
return (function plumbing$fnk$schema$required_toplevel_keys(G__38942){
var validate__37277__auto__ = ufv___38943.get_cell();
if(cljs.core.truth_(validate__37277__auto__)){
var args__37278__auto___38948 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__38942], null);
var temp__4425__auto___38949 = input_checker38940_38946.call(null,args__37278__auto___38948);
if(cljs.core.truth_(temp__4425__auto___38949)){
var error__37279__auto___38950 = temp__4425__auto___38949;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Which top-level keys are required (i.e., non-false) by this input schema."], null)),cljs.core.pr_str.call(null,error__37279__auto___38950)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema38939_38945,new cljs.core.Keyword(null,"value","value",305978217),args__37278__auto___38948,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___38950], null));
} else {
}
} else {
}

var o__37280__auto__ = (function (){var input_schema = G__38942;
while(true){
return cljs.core.keep.call(null,((function (validate__37277__auto__,ufv___38943,output_schema38938_38944,input_schema38939_38945,input_checker38940_38946,output_checker38941_38947){
return (function (k){
if(cljs.core.truth_(schema.core.required_key_QMARK_.call(null,k))){
return schema.core.explicit_schema_key.call(null,k);
} else {
return null;
}
});})(validate__37277__auto__,ufv___38943,output_schema38938_38944,input_schema38939_38945,input_checker38940_38946,output_checker38941_38947))
,cljs.core.keys.call(null,input_schema));
break;
}
})();
if(cljs.core.truth_(validate__37277__auto__)){
var temp__4425__auto___38951 = output_checker38941_38947.call(null,o__37280__auto__);
if(cljs.core.truth_(temp__4425__auto___38951)){
var error__37279__auto___38952 = temp__4425__auto___38951;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Which top-level keys are required (i.e., non-false) by this input schema."], null)),cljs.core.pr_str.call(null,error__37279__auto___38952)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema38938_38944,new cljs.core.Keyword(null,"value","value",305978217),o__37280__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___38952], null));
} else {
}
} else {
}

return o__37280__auto__;
});})(ufv___38943,output_schema38938_38944,input_schema38939_38945,input_checker38940_38946,output_checker38941_38947))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema38938_38944,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema38939_38945], null)));
/**
 * Guess an output schema for an expr.  Currently just looks for literal map structure and
 * all keyword keys.
 */
plumbing.fnk.schema.guess_expr_output_schema = (function plumbing$fnk$schema$guess_expr_output_schema(expr){
if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr)))){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__36610__auto__ = (function plumbing$fnk$schema$guess_expr_output_schema_$_iter__38961(s__38962){
return (new cljs.core.LazySeq(null,(function (){
var s__38962__$1 = s__38962;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__38962__$1);
if(temp__4425__auto__){
var s__38962__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38962__$2)){
var c__36608__auto__ = cljs.core.chunk_first.call(null,s__38962__$2);
var size__36609__auto__ = cljs.core.count.call(null,c__36608__auto__);
var b__38964 = cljs.core.chunk_buffer.call(null,size__36609__auto__);
if((function (){var i__38963 = (0);
while(true){
if((i__38963 < size__36609__auto__)){
var vec__38967 = cljs.core._nth.call(null,c__36608__auto__,i__38963);
var k = cljs.core.nth.call(null,vec__38967,(0),null);
var v = cljs.core.nth.call(null,vec__38967,(1),null);
cljs.core.chunk_append.call(null,b__38964,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema.call(null,v)], null));

var G__38969 = (i__38963 + (1));
i__38963 = G__38969;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38964),plumbing$fnk$schema$guess_expr_output_schema_$_iter__38961.call(null,cljs.core.chunk_rest.call(null,s__38962__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38964),null);
}
} else {
var vec__38968 = cljs.core.first.call(null,s__38962__$2);
var k = cljs.core.nth.call(null,vec__38968,(0),null);
var v = cljs.core.nth.call(null,vec__38968,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema.call(null,v)], null),plumbing$fnk$schema$guess_expr_output_schema_$_iter__38961.call(null,cljs.core.rest.call(null,s__38962__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36610__auto__.call(null,expr);
})());
} else {
return new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null);
}
});
/**
 * Subtract output-schema from input-schema, returning nil if it's possible that an object
 * satisfying the output-schema satisfies the input-schema, or otherwise a description
 * of the part(s) of input-schema not met by output-schema.  Strict about the map structure
 * of output-schema matching input-schema, but loose about everything else (only looks at
 * required keys of output-schema.
 */
plumbing.fnk.schema.schema_diff = (function plumbing$fnk$schema$schema_diff(input_schema,output_schema){
if(cljs.core.not.call(null,plumbing.fnk.schema.map_schema_QMARK_.call(null,input_schema))){
return plumbing.fnk.schema.non_map_diff.call(null,input_schema,output_schema);
} else {
if(cljs.core.not.call(null,plumbing.fnk.schema.map_schema_QMARK_.call(null,output_schema))){
return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,input_schema,output_schema,(new cljs.core.Delay((function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,output_schema)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
}),null)),null));
} else {
return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__36610__auto__ = (function plumbing$fnk$schema$schema_diff_$_iter__38978(s__38979){
return (new cljs.core.LazySeq(null,(function (){
var s__38979__$1 = s__38979;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__38979__$1);
if(temp__4425__auto__){
var s__38979__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38979__$2)){
var c__36608__auto__ = cljs.core.chunk_first.call(null,s__38979__$2);
var size__36609__auto__ = cljs.core.count.call(null,c__36608__auto__);
var b__38981 = cljs.core.chunk_buffer.call(null,size__36609__auto__);
if((function (){var i__38980 = (0);
while(true){
if((i__38980 < size__36609__auto__)){
var vec__38984 = cljs.core._nth.call(null,c__36608__auto__,i__38980);
var k = cljs.core.nth.call(null,vec__38984,(0),null);
var v = cljs.core.nth.call(null,vec__38984,(1),null);
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,k))){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if(cljs.core.truth_((function (){var or__35838__auto__ = required_QMARK_;
if(cljs.core.truth_(or__35838__auto__)){
return or__35838__auto__;
} else {
return present_QMARK_;
}
})())){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):plumbing$fnk$schema$schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
cljs.core.chunk_append.call(null,b__38981,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));

var G__38986 = (i__38980 + (1));
i__38980 = G__38986;
continue;
} else {
var G__38987 = (i__38980 + (1));
i__38980 = G__38987;
continue;
}
} else {
var G__38988 = (i__38980 + (1));
i__38980 = G__38988;
continue;
}
} else {
var G__38989 = (i__38980 + (1));
i__38980 = G__38989;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38981),plumbing$fnk$schema$schema_diff_$_iter__38978.call(null,cljs.core.chunk_rest.call(null,s__38979__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38981),null);
}
} else {
var vec__38985 = cljs.core.first.call(null,s__38979__$2);
var k = cljs.core.nth.call(null,vec__38985,(0),null);
var v = cljs.core.nth.call(null,vec__38985,(1),null);
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,k))){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if(cljs.core.truth_((function (){var or__35838__auto__ = required_QMARK_;
if(cljs.core.truth_(or__35838__auto__)){
return or__35838__auto__;
} else {
return present_QMARK_;
}
})())){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):plumbing$fnk$schema$schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),plumbing$fnk$schema$schema_diff_$_iter__38978.call(null,cljs.core.rest.call(null,s__38979__$2)));
} else {
var G__38990 = cljs.core.rest.call(null,s__38979__$2);
s__38979__$1 = G__38990;
continue;
}
} else {
var G__38991 = cljs.core.rest.call(null,s__38979__$2);
s__38979__$1 = G__38991;
continue;
}
} else {
var G__38992 = cljs.core.rest.call(null,s__38979__$2);
s__38979__$1 = G__38992;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36610__auto__.call(null,input_schema);
})()));

}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function plumbing$fnk$schema$assert_satisfies_schema(input_schema,output_schema){
var fails = plumbing.fnk.schema.schema_diff.call(null,input_schema,output_schema);
if(cljs.core.truth_(fails)){
throw cljs.core.ex_info.call(null,[cljs.core.str(fails)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"does-not-satisfy-schema","does-not-satisfy-schema",-1543152824),new cljs.core.Keyword(null,"failures","failures",-912916356),fails], null));
} else {
return null;
}
});
var ufv___39015 = schema.utils.use_fn_validation;
var output_schema38993_39016 = schema.core.Any;
var input_schema38994_39017 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker38995_39018 = schema.core.checker.call(null,input_schema38994_39017);
var output_checker38996_39019 = schema.core.checker.call(null,output_schema38993_39016);
/**
 * Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
 * 
 *   Given pairs of input and output schemata for fnks f1 and f2,
 * return a pair of input and output schemata for #(f2 (merge % (f1 %))).
 * f1's output schema must not contain any optional keys.
 */
plumbing.fnk.schema.compose_schemata = ((function (ufv___39015,output_schema38993_39016,input_schema38994_39017,input_checker38995_39018,output_checker38996_39019){
return (function plumbing$fnk$schema$compose_schemata(G__38997,G__38998){
var validate__37277__auto__ = true;
if(validate__37277__auto__){
var args__37278__auto___39020 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__38997,G__38998], null);
var temp__4425__auto___39021 = input_checker38995_39018.call(null,args__37278__auto___39020);
if(cljs.core.truth_(temp__4425__auto___39021)){
var error__37279__auto___39022 = temp__4425__auto___39021;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"always-validate","always-validate",1031872127),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2,\n   return a pair of input and output schemata for #(f2 (merge % (f1 %))).\n   f1's output schema must not contain any optional keys."], null)),cljs.core.pr_str.call(null,error__37279__auto___39022)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema38994_39017,new cljs.core.Keyword(null,"value","value",305978217),args__37278__auto___39020,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___39022], null));
} else {
}
} else {
}

var o__37280__auto__ = (function (){var G__39009 = G__38997;
var vec__39011 = G__39009;
var i2 = cljs.core.nth.call(null,vec__39011,(0),null);
var o2 = cljs.core.nth.call(null,vec__39011,(1),null);
var G__39010 = G__38998;
var vec__39012 = G__39010;
var i1 = cljs.core.nth.call(null,vec__39012,(0),null);
var o1 = cljs.core.nth.call(null,vec__39012,(1),null);
var G__39009__$1 = G__39009;
var G__39010__$1 = G__39010;
while(true){
var vec__39013 = G__39009__$1;
var i2__$1 = cljs.core.nth.call(null,vec__39013,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__39013,(1),null);
var vec__39014 = G__39010__$1;
var i1__$1 = cljs.core.nth.call(null,vec__39014,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__39014,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();
if(validate__37277__auto__){
var temp__4425__auto___39023 = output_checker38996_39019.call(null,o__37280__auto__);
if(cljs.core.truth_(temp__4425__auto___39023)){
var error__37279__auto___39024 = temp__4425__auto___39023;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"always-validate","always-validate",1031872127),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2,\n   return a pair of input and output schemata for #(f2 (merge % (f1 %))).\n   f1's output schema must not contain any optional keys."], null)),cljs.core.pr_str.call(null,error__37279__auto___39024)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema38993_39016,new cljs.core.Keyword(null,"value","value",305978217),o__37280__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___39024], null));
} else {
}
} else {
}

return o__37280__auto__;
});})(ufv___39015,output_schema38993_39016,input_schema38994_39017,input_checker38995_39018,output_checker38996_39019))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema38993_39016,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema38994_39017], null)));
plumbing.fnk.schema.schema_key = (function plumbing$fnk$schema$schema_key(m,k){
if(cljs.core.contains_QMARK_.call(null,m,k)){
return k;
} else {
if(cljs.core.contains_QMARK_.call(null,m,schema.core.optional_key.call(null,k))){
return schema.core.optional_key.call(null,k);
} else {
return null;

}
}
});
plumbing.fnk.schema.possibly_contains_QMARK_ = (function plumbing$fnk$schema$possibly_contains_QMARK_(m,k){
return cljs.core.boolean$.call(null,plumbing.fnk.schema.schema_key.call(null,m,k));
});
var ufv___39103 = schema.utils.use_fn_validation;
var output_schema39025_39104 = schema.core.Any;
var input_schema39026_39105 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null))),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),cljs.core.with_meta(new cljs.core.Symbol(null,"ks","ks",-754231827,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null)], null)))], null);
var input_checker39027_39106 = schema.core.checker.call(null,input_schema39026_39105);
var output_checker39028_39107 = schema.core.checker.call(null,output_schema39025_39104);
/**
 * Inputs: [s :- InputSchema ks :- [s/Keyword]]
 * 
 *   Return a pair [ks-part non-ks-part], with any extra schema removed.
 */
plumbing.fnk.schema.split_schema = ((function (ufv___39103,output_schema39025_39104,input_schema39026_39105,input_checker39027_39106,output_checker39028_39107){
return (function plumbing$fnk$schema$split_schema(G__39029,G__39030){
var validate__37277__auto__ = ufv___39103.get_cell();
if(cljs.core.truth_(validate__37277__auto__)){
var args__37278__auto___39108 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39029,G__39030], null);
var temp__4425__auto___39109 = input_checker39027_39106.call(null,args__37278__auto___39108);
if(cljs.core.truth_(temp__4425__auto___39109)){
var error__37279__auto___39110 = temp__4425__auto___39109;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return a pair [ks-part non-ks-part], with any extra schema removed."], null)),cljs.core.pr_str.call(null,error__37279__auto___39110)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39026_39105,new cljs.core.Keyword(null,"value","value",305978217),args__37278__auto___39108,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___39110], null));
} else {
}
} else {
}

var o__37280__auto__ = (function (){var s = G__39029;
var ks = G__39030;
while(true){
var ks__$1 = cljs.core.set.call(null,ks);
var iter__36610__auto__ = ((function (ks__$1,validate__37277__auto__,ufv___39103,output_schema39025_39104,input_schema39026_39105,input_checker39027_39106,output_checker39028_39107){
return (function plumbing$fnk$schema$split_schema_$_iter__39067(s__39068){
return (new cljs.core.LazySeq(null,((function (ks__$1,validate__37277__auto__,ufv___39103,output_schema39025_39104,input_schema39026_39105,input_checker39027_39106,output_checker39028_39107){
return (function (){
var s__39068__$1 = s__39068;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__39068__$1);
if(temp__4425__auto__){
var s__39068__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39068__$2)){
var c__36608__auto__ = cljs.core.chunk_first.call(null,s__39068__$2);
var size__36609__auto__ = cljs.core.count.call(null,c__36608__auto__);
var b__39070 = cljs.core.chunk_buffer.call(null,size__36609__auto__);
if((function (){var i__39069 = (0);
while(true){
if((i__39069 < size__36609__auto__)){
var in_QMARK_ = cljs.core._nth.call(null,c__36608__auto__,i__39069);
cljs.core.chunk_append.call(null,b__39070,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__36610__auto__ = ((function (i__39069,in_QMARK_,c__36608__auto__,size__36609__auto__,b__39070,s__39068__$2,temp__4425__auto__,ks__$1,validate__37277__auto__,ufv___39103,output_schema39025_39104,input_schema39026_39105,input_checker39027_39106,output_checker39028_39107){
return (function plumbing$fnk$schema$split_schema_$_iter__39067_$_iter__39087(s__39088){
return (new cljs.core.LazySeq(null,((function (i__39069,in_QMARK_,c__36608__auto__,size__36609__auto__,b__39070,s__39068__$2,temp__4425__auto__,ks__$1,validate__37277__auto__,ufv___39103,output_schema39025_39104,input_schema39026_39105,input_checker39027_39106,output_checker39028_39107){
return (function (){
var s__39088__$1 = s__39088;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__39088__$1);
if(temp__4425__auto____$1){
var s__39088__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39088__$2)){
var c__36608__auto____$1 = cljs.core.chunk_first.call(null,s__39088__$2);
var size__36609__auto____$1 = cljs.core.count.call(null,c__36608__auto____$1);
var b__39090 = cljs.core.chunk_buffer.call(null,size__36609__auto____$1);
if((function (){var i__39089 = (0);
while(true){
if((i__39089 < size__36609__auto____$1)){
var vec__39093 = cljs.core._nth.call(null,c__36608__auto____$1,i__39089);
var k = cljs.core.nth.call(null,vec__39093,(0),null);
var v = cljs.core.nth.call(null,vec__39093,(1),null);
if(cljs.core.truth_((function (){var and__35826__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__35826__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__35826__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__39090,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__39111 = (i__39089 + (1));
i__39089 = G__39111;
continue;
} else {
var G__39112 = (i__39089 + (1));
i__39089 = G__39112;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39090),plumbing$fnk$schema$split_schema_$_iter__39067_$_iter__39087.call(null,cljs.core.chunk_rest.call(null,s__39088__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39090),null);
}
} else {
var vec__39094 = cljs.core.first.call(null,s__39088__$2);
var k = cljs.core.nth.call(null,vec__39094,(0),null);
var v = cljs.core.nth.call(null,vec__39094,(1),null);
if(cljs.core.truth_((function (){var and__35826__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__35826__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__35826__auto__;
}
})())){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__39067_$_iter__39087.call(null,cljs.core.rest.call(null,s__39088__$2)));
} else {
var G__39113 = cljs.core.rest.call(null,s__39088__$2);
s__39088__$1 = G__39113;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__39069,in_QMARK_,c__36608__auto__,size__36609__auto__,b__39070,s__39068__$2,temp__4425__auto__,ks__$1,validate__37277__auto__,ufv___39103,output_schema39025_39104,input_schema39026_39105,input_checker39027_39106,output_checker39028_39107))
,null,null));
});})(i__39069,in_QMARK_,c__36608__auto__,size__36609__auto__,b__39070,s__39068__$2,temp__4425__auto__,ks__$1,validate__37277__auto__,ufv___39103,output_schema39025_39104,input_schema39026_39105,input_checker39027_39106,output_checker39028_39107))
;
return iter__36610__auto__.call(null,s);
})()));

var G__39114 = (i__39069 + (1));
i__39069 = G__39114;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39070),plumbing$fnk$schema$split_schema_$_iter__39067.call(null,cljs.core.chunk_rest.call(null,s__39068__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39070),null);
}
} else {
var in_QMARK_ = cljs.core.first.call(null,s__39068__$2);
return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__36610__auto__ = ((function (in_QMARK_,s__39068__$2,temp__4425__auto__,ks__$1,validate__37277__auto__,ufv___39103,output_schema39025_39104,input_schema39026_39105,input_checker39027_39106,output_checker39028_39107){
return (function plumbing$fnk$schema$split_schema_$_iter__39067_$_iter__39095(s__39096){
return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__39068__$2,temp__4425__auto__,ks__$1,validate__37277__auto__,ufv___39103,output_schema39025_39104,input_schema39026_39105,input_checker39027_39106,output_checker39028_39107){
return (function (){
var s__39096__$1 = s__39096;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__39096__$1);
if(temp__4425__auto____$1){
var s__39096__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39096__$2)){
var c__36608__auto__ = cljs.core.chunk_first.call(null,s__39096__$2);
var size__36609__auto__ = cljs.core.count.call(null,c__36608__auto__);
var b__39098 = cljs.core.chunk_buffer.call(null,size__36609__auto__);
if((function (){var i__39097 = (0);
while(true){
if((i__39097 < size__36609__auto__)){
var vec__39101 = cljs.core._nth.call(null,c__36608__auto__,i__39097);
var k = cljs.core.nth.call(null,vec__39101,(0),null);
var v = cljs.core.nth.call(null,vec__39101,(1),null);
if(cljs.core.truth_((function (){var and__35826__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__35826__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__35826__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__39098,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__39115 = (i__39097 + (1));
i__39097 = G__39115;
continue;
} else {
var G__39116 = (i__39097 + (1));
i__39097 = G__39116;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39098),plumbing$fnk$schema$split_schema_$_iter__39067_$_iter__39095.call(null,cljs.core.chunk_rest.call(null,s__39096__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39098),null);
}
} else {
var vec__39102 = cljs.core.first.call(null,s__39096__$2);
var k = cljs.core.nth.call(null,vec__39102,(0),null);
var v = cljs.core.nth.call(null,vec__39102,(1),null);
if(cljs.core.truth_((function (){var and__35826__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__35826__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__35826__auto__;
}
})())){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__39067_$_iter__39095.call(null,cljs.core.rest.call(null,s__39096__$2)));
} else {
var G__39117 = cljs.core.rest.call(null,s__39096__$2);
s__39096__$1 = G__39117;
continue;
}
}
} else {
return null;
}
break;
}
});})(in_QMARK_,s__39068__$2,temp__4425__auto__,ks__$1,validate__37277__auto__,ufv___39103,output_schema39025_39104,input_schema39026_39105,input_checker39027_39106,output_checker39028_39107))
,null,null));
});})(in_QMARK_,s__39068__$2,temp__4425__auto__,ks__$1,validate__37277__auto__,ufv___39103,output_schema39025_39104,input_schema39026_39105,input_checker39027_39106,output_checker39028_39107))
;
return iter__36610__auto__.call(null,s);
})()),plumbing$fnk$schema$split_schema_$_iter__39067.call(null,cljs.core.rest.call(null,s__39068__$2)));
}
} else {
return null;
}
break;
}
});})(ks__$1,validate__37277__auto__,ufv___39103,output_schema39025_39104,input_schema39026_39105,input_checker39027_39106,output_checker39028_39107))
,null,null));
});})(ks__$1,validate__37277__auto__,ufv___39103,output_schema39025_39104,input_schema39026_39105,input_checker39027_39106,output_checker39028_39107))
;
return iter__36610__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();
if(cljs.core.truth_(validate__37277__auto__)){
var temp__4425__auto___39118 = output_checker39028_39107.call(null,o__37280__auto__);
if(cljs.core.truth_(temp__4425__auto___39118)){
var error__37279__auto___39119 = temp__4425__auto___39118;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return a pair [ks-part non-ks-part], with any extra schema removed."], null)),cljs.core.pr_str.call(null,error__37279__auto___39119)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39025_39104,new cljs.core.Keyword(null,"value","value",305978217),o__37280__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___39119], null));
} else {
}
} else {
}

return o__37280__auto__;
});})(ufv___39103,output_schema39025_39104,input_schema39026_39105,input_checker39027_39106,output_checker39028_39107))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema39025_39104,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39026_39105], null)));
var ufv___39150 = schema.utils.use_fn_validation;
var output_schema39120_39151 = plumbing.fnk.schema.GraphIOSchemata;
var input_schema39121_39152 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker39122_39153 = schema.core.checker.call(null,input_schema39121_39152);
var output_checker39123_39154 = schema.core.checker.call(null,output_schema39120_39151);
/**
 * Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
 *   Returns: GraphIOSchemata
 * 
 *   Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
 * return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
 */
plumbing.fnk.schema.sequence_schemata = ((function (ufv___39150,output_schema39120_39151,input_schema39121_39152,input_checker39122_39153,output_checker39123_39154){
return (function plumbing$fnk$schema$sequence_schemata(G__39124,G__39125){
var validate__37277__auto__ = ufv___39150.get_cell();
if(cljs.core.truth_(validate__37277__auto__)){
var args__37278__auto___39155 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39124,G__39125], null);
var temp__4425__auto___39156 = input_checker39122_39153.call(null,args__37278__auto___39155);
if(cljs.core.truth_(temp__4425__auto___39156)){
var error__37279__auto___39157 = temp__4425__auto___39156;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"GraphIOSchemata","GraphIOSchemata",-2137701253,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,\n   return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))"], null)),cljs.core.pr_str.call(null,error__37279__auto___39157)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39121_39152,new cljs.core.Keyword(null,"value","value",305978217),args__37278__auto___39155,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___39157], null));
} else {
}
} else {
}

var o__37280__auto__ = (function (){var G__39141 = G__39124;
var vec__39143 = G__39141;
var i1 = cljs.core.nth.call(null,vec__39143,(0),null);
var o1 = cljs.core.nth.call(null,vec__39143,(1),null);
var G__39142 = G__39125;
var vec__39144 = G__39142;
var k = cljs.core.nth.call(null,vec__39144,(0),null);
var vec__39145 = cljs.core.nth.call(null,vec__39144,(1),null);
var i2 = cljs.core.nth.call(null,vec__39145,(0),null);
var o2 = cljs.core.nth.call(null,vec__39145,(1),null);
var G__39141__$1 = G__39141;
var G__39142__$1 = G__39142;
while(true){
var vec__39146 = G__39141__$1;
var i1__$1 = cljs.core.nth.call(null,vec__39146,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__39146,(1),null);
var vec__39147 = G__39142__$1;
var k__$1 = cljs.core.nth.call(null,vec__39147,(0),null);
var vec__39148 = cljs.core.nth.call(null,vec__39147,(1),null);
var i2__$1 = cljs.core.nth.call(null,vec__39148,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__39148,(1),null);
if(cljs.core.not.call(null,plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Duplicate key output (possibly due to a misordered graph) %s for input %s from input %s",k__$1,schema.core.explain.call(null,i2__$1),schema.core.explain.call(null,i1__$1))));
}

if(cljs.core.not.call(null,plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i2__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Node outputs a key %s in its inputs %s",k__$1,schema.core.explain.call(null,i2__$1))));
}

if(cljs.core.not.call(null,plumbing.fnk.schema.possibly_contains_QMARK_.call(null,o1__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Node outputs a duplicate key %s given inputs %s",k__$1,schema.core.explain.call(null,i1__$1))));
}

var vec__39149 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));
var used = cljs.core.nth.call(null,vec__39149,(0),null);
var unused = cljs.core.nth.call(null,vec__39149,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();
if(cljs.core.truth_(validate__37277__auto__)){
var temp__4425__auto___39158 = output_checker39123_39154.call(null,o__37280__auto__);
if(cljs.core.truth_(temp__4425__auto___39158)){
var error__37279__auto___39159 = temp__4425__auto___39158;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"GraphIOSchemata","GraphIOSchemata",-2137701253,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,\n   return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))"], null)),cljs.core.pr_str.call(null,error__37279__auto___39159)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39120_39151,new cljs.core.Keyword(null,"value","value",305978217),o__37280__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___39159], null));
} else {
}
} else {
}

return o__37280__auto__;
});})(ufv___39150,output_schema39120_39151,input_schema39121_39152,input_checker39122_39153,output_checker39123_39154))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema39120_39151,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39121_39152], null)));

//# sourceMappingURL=schema.js.map