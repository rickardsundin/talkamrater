// Compiled by ClojureScript 1.7.170 {}
goog.provide('om_bootstrap.button');
goog.require('cljs.core');
goog.require('om_bootstrap.types');
goog.require('schema.core');
goog.require('om_bootstrap.util');
goog.require('om_tools.dom');
goog.require('om_tools.mixin');
goog.require('om_tools.core');
goog.require('om_bootstrap.mixins');
goog.require('om.core');
om_bootstrap.button.Button = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"active?","active?",459499776)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"block?","block?",1102479923)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004)),schema.core.Bool], true, false));
om_bootstrap.button.ButtonGroup = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"justified?","justified?",-1045366764)),schema.core.Bool], true, false));
var ufv___52153 = schema.utils.use_fn_validation;
var output_schema52147_52154 = schema.core.Any;
var input_schema52148_52155 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"classes","classes",2037804510),cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),schema.core.maybe.call(null,schema.core.Bool),new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false)], null),cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker52149_52156 = schema.core.checker.call(null,input_schema52148_52155);
var output_checker52150_52157 = schema.core.checker.call(null,output_schema52147_52154);
/**
 * Inputs: [opts :- {:classes {s/Any s/Any}, :disabled? (s/maybe s/Bool), :props {s/Any s/Any}} children]
 */
om_bootstrap.button.render_anchor = ((function (ufv___52153,output_schema52147_52154,input_schema52148_52155,input_checker52149_52156,output_checker52150_52157){
return (function om_bootstrap$button$render_anchor(G__52151,G__52152){
var validate__37277__auto__ = ufv___52153.get_cell();
if(cljs.core.truth_(validate__37277__auto__)){
var args__37278__auto___52158 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__52151,G__52152], null);
var temp__4425__auto___52159 = input_checker52149_52156.call(null,args__37278__auto___52158);
if(cljs.core.truth_(temp__4425__auto___52159)){
var error__37279__auto___52160 = temp__4425__auto___52159;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-anchor","render-anchor",-1892709609,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__37279__auto___52160)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema52148_52155,new cljs.core.Keyword(null,"value","value",305978217),args__37278__auto___52158,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___52160], null));
} else {
}
} else {
}

var o__37280__auto__ = (function (){var opts = G__52151;
var children = G__52152;
while(true){
var props = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(opts),"#"),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,cljs.core.assoc.call(null,new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(opts))),new cljs.core.Keyword(null,"role","role",-736691072),"button"], null);
return om_tools.dom.element.call(null,React.DOM.a,om_bootstrap.util.merge_props.call(null,props,new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(opts)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__37277__auto__)){
var temp__4425__auto___52161 = output_checker52150_52157.call(null,o__37280__auto__);
if(cljs.core.truth_(temp__4425__auto___52161)){
var error__37279__auto___52162 = temp__4425__auto___52161;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-anchor","render-anchor",-1892709609,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__37279__auto___52162)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema52147_52154,new cljs.core.Keyword(null,"value","value",305978217),o__37280__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___52162], null));
} else {
}
} else {
}

return o__37280__auto__;
});})(ufv___52153,output_schema52147_52154,input_schema52148_52155,input_checker52149_52156,output_checker52150_52157))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.render_anchor),schema.core.make_fn_schema.call(null,output_schema52147_52154,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema52148_52155], null)));
var ufv___52172 = schema.utils.use_fn_validation;
var output_schema52163_52173 = om_bootstrap.types.Component;
var input_schema52164_52174 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.Button,cljs.core.with_meta(new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Button","Button",-1787718586,null)], null))),schema.core.Any], null);
var input_checker52165_52175 = schema.core.checker.call(null,input_schema52164_52174);
var output_checker52166_52176 = schema.core.checker.call(null,output_schema52163_52173);
/**
 * Inputs: [props :- Button & children]
 *   Returns: t/Component
 * 
 *   Renders a button.
 */
om_bootstrap.button.button = ((function (ufv___52172,output_schema52163_52173,input_schema52164_52174,input_checker52165_52175,output_checker52166_52176){
return (function om_bootstrap$button$button(var_args){
var args__36903__auto__ = [];
var len__36896__auto___52177 = arguments.length;
var i__36897__auto___52178 = (0);
while(true){
if((i__36897__auto___52178 < len__36896__auto___52177)){
args__36903__auto__.push((arguments[i__36897__auto___52178]));

var G__52179 = (i__36897__auto___52178 + (1));
i__36897__auto___52178 = G__52179;
continue;
} else {
}
break;
}

var argseq__36904__auto__ = ((((1) < args__36903__auto__.length))?(new cljs.core.IndexedSeq(args__36903__auto__.slice((1)),(0))):null);
return om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36904__auto__);
});})(ufv___52172,output_schema52163_52173,input_schema52164_52174,input_checker52165_52175,output_checker52166_52176))
;

om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___52172,output_schema52163_52173,input_schema52164_52174,input_checker52165_52175,output_checker52166_52176){
return (function (G__52167,rest52168){
var validate__37277__auto__ = ufv___52172.get_cell();
if(cljs.core.truth_(validate__37277__auto__)){
var args__37278__auto___52180 = cljs.core.list_STAR_.call(null,G__52167,rest52168);
var temp__4425__auto___52181 = input_checker52165_52175.call(null,args__37278__auto___52180);
if(cljs.core.truth_(temp__4425__auto___52181)){
var error__37279__auto___52182 = temp__4425__auto___52181;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders a button."], null)),cljs.core.pr_str.call(null,error__37279__auto___52182)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema52164_52174,new cljs.core.Keyword(null,"value","value",305978217),args__37278__auto___52180,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___52182], null));
} else {
}
} else {
}

var o__37280__auto__ = (function (){var props = G__52167;
var children = rest52168;
while(true){
var vec__52171 = om_bootstrap.types.separate.call(null,om_bootstrap.button.Button,props,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default",new cljs.core.Keyword(null,"type","type",1174270348),"button"], null));
var bs = cljs.core.nth.call(null,vec__52171,(0),null);
var props__$1 = cljs.core.nth.call(null,vec__52171,(1),null);
var klasses = (cljs.core.truth_(new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004).cljs$core$IFn$_invoke$arity$1(bs))?cljs.core.PersistentArrayMap.EMPTY:om_bootstrap.types.bs_class_set.call(null,bs));
var klasses__$1 = cljs.core.merge.call(null,klasses,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"btn-block","btn-block",967079535),new cljs.core.Keyword(null,"block?","block?",1102479923).cljs$core$IFn$_invoke$arity$1(bs)], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs))){
return cljs.core.apply.call(null,React.DOM.li,{"className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs)], null)))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_bootstrap.button.render_anchor.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),props__$1,new cljs.core.Keyword(null,"classes","classes",2037804510),klasses__$1], null),children)],null))));
} else {
if(cljs.core.truth_((function (){var or__35838__auto__ = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(props__$1);
if(cljs.core.truth_(or__35838__auto__)){
return or__35838__auto__;
} else {
return new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004).cljs$core$IFn$_invoke$arity$1(bs);
}
})())){
return om_bootstrap.button.render_anchor.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"props","props",453281727),props__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"classes","classes",2037804510),klasses__$1], null),children);
} else {
return om_tools.dom.element.call(null,React.DOM.button,om_bootstrap.util.merge_props.call(null,props__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,klasses__$1),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));

}
}
break;
}
})();
if(cljs.core.truth_(validate__37277__auto__)){
var temp__4425__auto___52183 = output_checker52166_52176.call(null,o__37280__auto__);
if(cljs.core.truth_(temp__4425__auto___52183)){
var error__37279__auto___52184 = temp__4425__auto___52183;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders a button."], null)),cljs.core.pr_str.call(null,error__37279__auto___52184)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema52163_52173,new cljs.core.Keyword(null,"value","value",305978217),o__37280__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___52184], null));
} else {
}
} else {
}

return o__37280__auto__;
});})(ufv___52172,output_schema52163_52173,input_schema52164_52174,input_checker52165_52175,output_checker52166_52176))
;

om_bootstrap.button.button.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.button.cljs$lang$applyTo = ((function (ufv___52172,output_schema52163_52173,input_schema52164_52174,input_checker52165_52175,output_checker52166_52176){
return (function (seq52169){
var G__52170 = cljs.core.first.call(null,seq52169);
var seq52169__$1 = cljs.core.next.call(null,seq52169);
return om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic(G__52170,seq52169__$1);
});})(ufv___52172,output_schema52163_52173,input_schema52164_52174,input_checker52165_52175,output_checker52166_52176))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.button),schema.core.make_fn_schema.call(null,output_schema52163_52173,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema52164_52174], null)));
var ufv___52194 = schema.utils.use_fn_validation;
var output_schema52185_52195 = om_bootstrap.types.Component;
var input_schema52186_52196 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.Any], null);
var input_checker52187_52197 = schema.core.checker.call(null,input_schema52186_52196);
var output_checker52188_52198 = schema.core.checker.call(null,output_schema52185_52195);
/**
 * Inputs: [opts & children]
 *   Returns: t/Component
 * 
 *   Renders a button toolbar.
 */
om_bootstrap.button.toolbar = ((function (ufv___52194,output_schema52185_52195,input_schema52186_52196,input_checker52187_52197,output_checker52188_52198){
return (function om_bootstrap$button$toolbar(var_args){
var args__36903__auto__ = [];
var len__36896__auto___52199 = arguments.length;
var i__36897__auto___52200 = (0);
while(true){
if((i__36897__auto___52200 < len__36896__auto___52199)){
args__36903__auto__.push((arguments[i__36897__auto___52200]));

var G__52201 = (i__36897__auto___52200 + (1));
i__36897__auto___52200 = G__52201;
continue;
} else {
}
break;
}

var argseq__36904__auto__ = ((((1) < args__36903__auto__.length))?(new cljs.core.IndexedSeq(args__36903__auto__.slice((1)),(0))):null);
return om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36904__auto__);
});})(ufv___52194,output_schema52185_52195,input_schema52186_52196,input_checker52187_52197,output_checker52188_52198))
;

om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___52194,output_schema52185_52195,input_schema52186_52196,input_checker52187_52197,output_checker52188_52198){
return (function (G__52189,rest52190){
var validate__37277__auto__ = ufv___52194.get_cell();
if(cljs.core.truth_(validate__37277__auto__)){
var args__37278__auto___52202 = cljs.core.list_STAR_.call(null,G__52189,rest52190);
var temp__4425__auto___52203 = input_checker52187_52197.call(null,args__37278__auto___52202);
if(cljs.core.truth_(temp__4425__auto___52203)){
var error__37279__auto___52204 = temp__4425__auto___52203;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"toolbar","toolbar",467742462,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders a button toolbar."], null)),cljs.core.pr_str.call(null,error__37279__auto___52204)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema52186_52196,new cljs.core.Keyword(null,"value","value",305978217),args__37278__auto___52202,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___52204], null));
} else {
}
} else {
}

var o__37280__auto__ = (function (){var opts = G__52189;
var children = rest52190;
while(true){
var vec__52193 = om_bootstrap.types.separate.call(null,cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button-toolbar"], null));
var bs = cljs.core.nth.call(null,vec__52193,(0),null);
var props = cljs.core.nth.call(null,vec__52193,(1),null);
return cljs.core.apply.call(null,React.DOM.div,{"role": "toolbar", "className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,om_bootstrap.types.bs_class_set.call(null,bs)))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))));
break;
}
})();
if(cljs.core.truth_(validate__37277__auto__)){
var temp__4425__auto___52205 = output_checker52188_52198.call(null,o__37280__auto__);
if(cljs.core.truth_(temp__4425__auto___52205)){
var error__37279__auto___52206 = temp__4425__auto___52205;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"toolbar","toolbar",467742462,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders a button toolbar."], null)),cljs.core.pr_str.call(null,error__37279__auto___52206)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema52185_52195,new cljs.core.Keyword(null,"value","value",305978217),o__37280__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___52206], null));
} else {
}
} else {
}

return o__37280__auto__;
});})(ufv___52194,output_schema52185_52195,input_schema52186_52196,input_checker52187_52197,output_checker52188_52198))
;

om_bootstrap.button.toolbar.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.toolbar.cljs$lang$applyTo = ((function (ufv___52194,output_schema52185_52195,input_schema52186_52196,input_checker52187_52197,output_checker52188_52198){
return (function (seq52191){
var G__52192 = cljs.core.first.call(null,seq52191);
var seq52191__$1 = cljs.core.next.call(null,seq52191);
return om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic(G__52192,seq52191__$1);
});})(ufv___52194,output_schema52185_52195,input_schema52186_52196,input_checker52187_52197,output_checker52188_52198))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.toolbar),schema.core.make_fn_schema.call(null,output_schema52185_52195,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema52186_52196], null)));
var ufv___52216 = schema.utils.use_fn_validation;
var output_schema52207_52217 = om_bootstrap.types.Component;
var input_schema52208_52218 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.ButtonGroup,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"ButtonGroup","ButtonGroup",-309978472,null)], null))),schema.core.Any], null);
var input_checker52209_52219 = schema.core.checker.call(null,input_schema52208_52218);
var output_checker52210_52220 = schema.core.checker.call(null,output_schema52207_52217);
/**
 * Inputs: [opts :- ButtonGroup & children]
 *   Returns: t/Component
 * 
 *   Renders the supplied children in a wrapping button-group div.
 */
om_bootstrap.button.button_group = ((function (ufv___52216,output_schema52207_52217,input_schema52208_52218,input_checker52209_52219,output_checker52210_52220){
return (function om_bootstrap$button$button_group(var_args){
var args__36903__auto__ = [];
var len__36896__auto___52221 = arguments.length;
var i__36897__auto___52222 = (0);
while(true){
if((i__36897__auto___52222 < len__36896__auto___52221)){
args__36903__auto__.push((arguments[i__36897__auto___52222]));

var G__52223 = (i__36897__auto___52222 + (1));
i__36897__auto___52222 = G__52223;
continue;
} else {
}
break;
}

var argseq__36904__auto__ = ((((1) < args__36903__auto__.length))?(new cljs.core.IndexedSeq(args__36903__auto__.slice((1)),(0))):null);
return om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36904__auto__);
});})(ufv___52216,output_schema52207_52217,input_schema52208_52218,input_checker52209_52219,output_checker52210_52220))
;

om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___52216,output_schema52207_52217,input_schema52208_52218,input_checker52209_52219,output_checker52210_52220){
return (function (G__52211,rest52212){
var validate__37277__auto__ = ufv___52216.get_cell();
if(cljs.core.truth_(validate__37277__auto__)){
var args__37278__auto___52224 = cljs.core.list_STAR_.call(null,G__52211,rest52212);
var temp__4425__auto___52225 = input_checker52209_52219.call(null,args__37278__auto___52224);
if(cljs.core.truth_(temp__4425__auto___52225)){
var error__37279__auto___52226 = temp__4425__auto___52225;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"button-group","button-group",108385979,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders the supplied children in a wrapping button-group div."], null)),cljs.core.pr_str.call(null,error__37279__auto___52226)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema52208_52218,new cljs.core.Keyword(null,"value","value",305978217),args__37278__auto___52224,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___52226], null));
} else {
}
} else {
}

var o__37280__auto__ = (function (){var opts = G__52211;
var children = rest52212;
while(true){
var vec__52215 = om_bootstrap.types.separate.call(null,om_bootstrap.button.ButtonGroup,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button-group"], null));
var bs = cljs.core.nth.call(null,vec__52215,(0),null);
var props = cljs.core.nth.call(null,vec__52215,(1),null);
var classes = cljs.core.merge.call(null,om_bootstrap.types.bs_class_set.call(null,bs),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"btn-group","btn-group",114866246),cljs.core.not.call(null,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444).cljs$core$IFn$_invoke$arity$1(bs)),new cljs.core.Keyword(null,"btn-group-vertical","btn-group-vertical",-1273565878),new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"btn-group-justified","btn-group-justified",1401722505),new cljs.core.Keyword(null,"justified?","justified?",-1045366764).cljs$core$IFn$_invoke$arity$1(bs)], null));
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__37277__auto__)){
var temp__4425__auto___52227 = output_checker52210_52220.call(null,o__37280__auto__);
if(cljs.core.truth_(temp__4425__auto___52227)){
var error__37279__auto___52228 = temp__4425__auto___52227;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"button-group","button-group",108385979,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders the supplied children in a wrapping button-group div."], null)),cljs.core.pr_str.call(null,error__37279__auto___52228)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema52207_52217,new cljs.core.Keyword(null,"value","value",305978217),o__37280__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___52228], null));
} else {
}
} else {
}

return o__37280__auto__;
});})(ufv___52216,output_schema52207_52217,input_schema52208_52218,input_checker52209_52219,output_checker52210_52220))
;

om_bootstrap.button.button_group.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.button_group.cljs$lang$applyTo = ((function (ufv___52216,output_schema52207_52217,input_schema52208_52218,input_checker52209_52219,output_checker52210_52220){
return (function (seq52213){
var G__52214 = cljs.core.first.call(null,seq52213);
var seq52213__$1 = cljs.core.next.call(null,seq52213);
return om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(G__52214,seq52213__$1);
});})(ufv___52216,output_schema52207_52217,input_schema52208_52218,input_checker52209_52219,output_checker52210_52220))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.button_group),schema.core.make_fn_schema.call(null,output_schema52207_52217,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema52208_52218], null)));
om_bootstrap.button.DropdownButton = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"href","href",-793805698)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-click","on-click",1632826543)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031)),schema.core.Bool], true, false));
om_bootstrap.button.render_nav_item = (function om_bootstrap$button$render_nav_item(props,open_QMARK_,children){
var classes = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dropdown","dropdown",1343185805),true,new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_,new cljs.core.Keyword(null,"dropup","dropup",-1031053231),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428).cljs$core$IFn$_invoke$arity$1(props)], null);
return cljs.core.apply.call(null,React.DOM.li,{"className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,classes))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))));
});
om_bootstrap.button.render_button_group = (function om_bootstrap$button$render_button_group(props,open_QMARK_,children){
var group_classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_,new cljs.core.Keyword(null,"dropup","dropup",-1031053231),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428).cljs$core$IFn$_invoke$arity$1(props)], null);
return om_bootstrap.button.button_group.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-size","bs-size",1567732754),new cljs.core.Keyword(null,"bs-size","bs-size",1567732754).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,group_classes)], null),children);
});
om_bootstrap.button.MenuItem = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"key","key",-1516042587),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"header?","header?",-106649173)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"divider?","divider?",1882560157)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"href","href",-793805698)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))], true, false));

var component_fnk__49615__auto___52258 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema52233 = schema.core.Any;
var input_schema52234 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"map52232","map52232",-722151595,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)))], null);
var input_checker52235 = schema.core.checker.call(null,input_schema52234);
var output_checker52236 = schema.core.checker.call(null,output_schema52233);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema52233,input_schema52234,input_checker52235,output_checker52236){
return (function om_bootstrap$button$constructor52230(G__52237){
var validate__37277__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__37277__auto__)){
var args__37278__auto___52259 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__52237], null);
var temp__4425__auto___52260 = input_checker52235.call(null,args__37278__auto___52259);
if(cljs.core.truth_(temp__4425__auto___52260)){
var error__37279__auto___52261 = temp__4425__auto___52260;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor52230","constructor52230",-1003121317,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__37279__auto___52261)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema52234,new cljs.core.Keyword(null,"value","value",305978217),args__37278__auto___52259,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___52261], null));
} else {
}
} else {
}

var o__37280__auto__ = (function (){var map52232 = G__52237;
while(true){
if(cljs.core.map_QMARK_.call(null,map52232)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map52232)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map52232,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.button.t_om_bootstrap$button52244 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
om_bootstrap.button.t_om_bootstrap$button52244 = (function (output_schema52233,owner,G__52237,input_schema52234,map52232,output_checker52236,input_checker52235,constructor52230,validate__37277__auto__,ufv__,meta52245){
this.output_schema52233 = output_schema52233;
this.owner = owner;
this.G__52237 = G__52237;
this.input_schema52234 = input_schema52234;
this.map52232 = map52232;
this.output_checker52236 = output_checker52236;
this.input_checker52235 = input_checker52235;
this.constructor52230 = constructor52230;
this.validate__37277__auto__ = validate__37277__auto__;
this.ufv__ = ufv__;
this.meta52245 = meta52245;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.button.t_om_bootstrap$button52244.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,validate__37277__auto__,ufv__,output_schema52233,input_schema52234,input_checker52235,output_checker52236){
return (function (_52246,meta52245__$1){
var self__ = this;
var _52246__$1 = this;
return (new om_bootstrap.button.t_om_bootstrap$button52244(self__.output_schema52233,self__.owner,self__.G__52237,self__.input_schema52234,self__.map52232,self__.output_checker52236,self__.input_checker52235,self__.constructor52230,self__.validate__37277__auto__,self__.ufv__,meta52245__$1));
});})(owner,validate__37277__auto__,ufv__,output_schema52233,input_schema52234,input_checker52235,output_checker52236))
;

om_bootstrap.button.t_om_bootstrap$button52244.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,validate__37277__auto__,ufv__,output_schema52233,input_schema52234,input_checker52235,output_checker52236){
return (function (_52246){
var self__ = this;
var _52246__$1 = this;
return self__.meta52245;
});})(owner,validate__37277__auto__,ufv__,output_schema52233,input_schema52234,input_checker52235,output_checker52236))
;

om_bootstrap.button.t_om_bootstrap$button52244.prototype.om$core$IDisplayName$ = true;

om_bootstrap.button.t_om_bootstrap$button52244.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,validate__37277__auto__,ufv__,output_schema52233,input_schema52234,input_checker52235,output_checker52236){
return (function (_){
var self__ = this;
var ___$1 = this;
return "menu-item*";
});})(owner,validate__37277__auto__,ufv__,output_schema52233,input_schema52234,input_checker52235,output_checker52236))
;

om_bootstrap.button.t_om_bootstrap$button52244.prototype.om$core$IRender$ = true;

om_bootstrap.button.t_om_bootstrap$button52244.prototype.om$core$IRender$render$arity$1 = ((function (owner,validate__37277__auto__,ufv__,output_schema52233,input_schema52234,input_checker52235,output_checker52236){
return (function (_){
var self__ = this;
var ___$1 = this;
var map__52247 = om.core.get_props.call(null,self__.owner);
var map__52247__$1 = ((((!((map__52247 == null)))?((((map__52247.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52247.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52247):map__52247);
var opts = cljs.core.get.call(null,map__52247__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var children = cljs.core.get.call(null,map__52247__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var vec__52248 = om_bootstrap.types.separate.call(null,om_bootstrap.button.MenuItem,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null));
var bs = cljs.core.nth.call(null,vec__52248,(0),null);
var props = cljs.core.nth.call(null,vec__52248,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dropdown-header","dropdown-header",-1451449167),new cljs.core.Keyword(null,"header?","header?",-106649173).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"divider","divider",1265972657),new cljs.core.Keyword(null,"divider?","divider?",1882560157).cljs$core$IFn$_invoke$arity$1(bs)], null);
var handle_click = ((function (map__52247,map__52247__$1,opts,children,vec__52248,bs,props,classes,___$1,owner,validate__37277__auto__,ufv__,output_schema52233,input_schema52234,input_checker52235,output_checker52236){
return (function (e){
var temp__4425__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4425__auto__)){
var on_select = temp__4425__auto__;
e.preventDefault();

return on_select.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(bs));
} else {
return null;
}
});})(map__52247,map__52247__$1,opts,children,vec__52248,bs,props,classes,___$1,owner,validate__37277__auto__,ufv__,output_schema52233,input_schema52234,input_checker52235,output_checker52236))
;
var children__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"header?","header?",-106649173).cljs$core$IFn$_invoke$arity$1(bs))?children:cljs.core.apply.call(null,React.DOM.a,{"onClick": om_tools.dom.format_opts.call(null,handle_click), "href": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(bs)), "title": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs)), "tabIndex": "-1"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)))));
var li_attrs = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"role","role",-736691072),"presentation",new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null),(function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4425__auto__)){
var k = temp__4425__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null);
} else {
return null;
}
})());
return om_tools.dom.element.call(null,React.DOM.li,om_bootstrap.util.merge_props.call(null,props,li_attrs),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$1],null)));
});})(owner,validate__37277__auto__,ufv__,output_schema52233,input_schema52234,input_checker52235,output_checker52236))
;

om_bootstrap.button.t_om_bootstrap$button52244.getBasis = ((function (owner,validate__37277__auto__,ufv__,output_schema52233,input_schema52234,input_checker52235,output_checker52236){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"output-schema52233","output-schema52233",1839031552,null),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"G__52237","G__52237",2022290637,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)),new cljs.core.Symbol(null,"input-schema52234","input-schema52234",2074586093,null),new cljs.core.Symbol(null,"map52232","map52232",-722151595,null),new cljs.core.Symbol(null,"output-checker52236","output-checker52236",945097398,null),new cljs.core.Symbol(null,"input-checker52235","input-checker52235",-54362086,null),cljs.core.with_meta(new cljs.core.Symbol(null,"constructor52230","constructor52230",-1003121317,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"validate__37277__auto__","validate__37277__auto__",694432091,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"meta52245","meta52245",435003350,null)], null);
});})(owner,validate__37277__auto__,ufv__,output_schema52233,input_schema52234,input_checker52235,output_checker52236))
;

om_bootstrap.button.t_om_bootstrap$button52244.cljs$lang$type = true;

om_bootstrap.button.t_om_bootstrap$button52244.cljs$lang$ctorStr = "om-bootstrap.button/t_om_bootstrap$button52244";

om_bootstrap.button.t_om_bootstrap$button52244.cljs$lang$ctorPrWriter = ((function (owner,validate__37277__auto__,ufv__,output_schema52233,input_schema52234,input_checker52235,output_checker52236){
return (function (this__36436__auto__,writer__36437__auto__,opt__36438__auto__){
return cljs.core._write.call(null,writer__36437__auto__,"om-bootstrap.button/t_om_bootstrap$button52244");
});})(owner,validate__37277__auto__,ufv__,output_schema52233,input_schema52234,input_checker52235,output_checker52236))
;

om_bootstrap.button.__GT_t_om_bootstrap$button52244 = ((function (owner,validate__37277__auto__,ufv__,output_schema52233,input_schema52234,input_checker52235,output_checker52236){
return (function om_bootstrap$button$constructor52230_$___GT_t_om_bootstrap$button52244(output_schema52233__$1,owner__$1,G__52237__$1,input_schema52234__$1,map52232__$1,output_checker52236__$1,input_checker52235__$1,constructor52230__$1,validate__37277__auto____$1,ufv____$1,meta52245){
return (new om_bootstrap.button.t_om_bootstrap$button52244(output_schema52233__$1,owner__$1,G__52237__$1,input_schema52234__$1,map52232__$1,output_checker52236__$1,input_checker52235__$1,constructor52230__$1,validate__37277__auto____$1,ufv____$1,meta52245));
});})(owner,validate__37277__auto__,ufv__,output_schema52233,input_schema52234,input_checker52235,output_checker52236))
;

}

return (new om_bootstrap.button.t_om_bootstrap$button52244(output_schema52233,owner,G__52237,input_schema52234,map52232,output_checker52236,input_checker52235,om_bootstrap$button$constructor52230,validate__37277__auto__,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__37277__auto__)){
var temp__4425__auto___52262 = output_checker52236.call(null,o__37280__auto__);
if(cljs.core.truth_(temp__4425__auto___52262)){
var error__37279__auto___52263 = temp__4425__auto___52262;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor52230","constructor52230",-1003121317,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__37279__auto___52263)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema52233,new cljs.core.Keyword(null,"value","value",305978217),o__37280__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___52263], null));
} else {
}
} else {
}

return o__37280__auto__;
});})(ufv__,output_schema52233,input_schema52234,input_checker52235,output_checker52236))
,schema.core.make_fn_schema.call(null,output_schema52233,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema52234], null)));
})();
/**
 * Generates an Om component of a menu item. Done this way so that
 *   wrapping dropdowns will have access to the Om state.
 */
om_bootstrap.button.menu_item_STAR_ = ((function (component_fnk__49615__auto___52258){
return (function om_bootstrap$button$menu_item_STAR_(var_args){
var args__36903__auto__ = [];
var len__36896__auto___52264 = arguments.length;
var i__36897__auto___52265 = (0);
while(true){
if((i__36897__auto___52265 < len__36896__auto___52264)){
args__36903__auto__.push((arguments[i__36897__auto___52265]));

var G__52266 = (i__36897__auto___52265 + (1));
i__36897__auto___52265 = G__52266;
continue;
} else {
}
break;
}

var argseq__36904__auto__ = ((((2) < args__36903__auto__.length))?(new cljs.core.IndexedSeq(args__36903__auto__.slice((2)),(0))):null);
return om_bootstrap.button.menu_item_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36904__auto__);
});})(component_fnk__49615__auto___52258))
;

om_bootstrap.button.menu_item_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__49615__auto___52258){
return (function (data__49616__auto__,owner52229,p__52253){
var vec__52254 = p__52253;
var opts__49617__auto__ = cljs.core.nth.call(null,vec__52254,(0),null);
return component_fnk__49615__auto___52258.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__49617__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner52229,new cljs.core.Keyword(null,"data","data",-232669377),data__49616__auto__], null));
});})(component_fnk__49615__auto___52258))
;

om_bootstrap.button.menu_item_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.button.menu_item_STAR_.cljs$lang$applyTo = ((function (component_fnk__49615__auto___52258){
return (function (seq52250){
var G__52251 = cljs.core.first.call(null,seq52250);
var seq52250__$1 = cljs.core.next.call(null,seq52250);
var G__52252 = cljs.core.first.call(null,seq52250__$1);
var seq52250__$2 = cljs.core.next.call(null,seq52250__$1);
return om_bootstrap.button.menu_item_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__52251,G__52252,seq52250__$2);
});})(component_fnk__49615__auto___52258))
;

om_bootstrap.button.__GT_menu_item_STAR_ = (function om_bootstrap$button$__GT_menu_item_STAR_(var_args){
var args52255 = [];
var len__36896__auto___52267 = arguments.length;
var i__36897__auto___52268 = (0);
while(true){
if((i__36897__auto___52268 < len__36896__auto___52267)){
args52255.push((arguments[i__36897__auto___52268]));

var G__52269 = (i__36897__auto___52268 + (1));
i__36897__auto___52268 = G__52269;
continue;
} else {
}
break;
}

var G__52257 = args52255.length;
switch (G__52257) {
case 1:
return om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52255.length)].join('')));

}
});

om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__49584__auto__){
return om.core.build.call(null,om_bootstrap.button.menu_item_STAR_,cursor__49584__auto__);
});

om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__49584__auto__,m52231){
return om.core.build.call(null,om_bootstrap.button.menu_item_STAR_,cursor__49584__auto__,m52231);
});

om_bootstrap.button.__GT_menu_item_STAR_.cljs$lang$maxFixedArity = 2;
var ufv___52279 = schema.utils.use_fn_validation;
var output_schema52271_52280 = om_bootstrap.types.Component;
var input_schema52272_52281 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.MenuItem,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"MenuItem","MenuItem",1235363736,null)], null))),schema.core.Any], null);
var input_checker52273_52282 = schema.core.checker.call(null,input_schema52272_52281);
var output_checker52274_52283 = schema.core.checker.call(null,output_schema52271_52280);
/**
 * Inputs: [opts :- MenuItem & children]
 *   Returns: t/Component
 */
om_bootstrap.button.menu_item = ((function (ufv___52279,output_schema52271_52280,input_schema52272_52281,input_checker52273_52282,output_checker52274_52283){
return (function om_bootstrap$button$menu_item(var_args){
var args__36903__auto__ = [];
var len__36896__auto___52284 = arguments.length;
var i__36897__auto___52285 = (0);
while(true){
if((i__36897__auto___52285 < len__36896__auto___52284)){
args__36903__auto__.push((arguments[i__36897__auto___52285]));

var G__52286 = (i__36897__auto___52285 + (1));
i__36897__auto___52285 = G__52286;
continue;
} else {
}
break;
}

var argseq__36904__auto__ = ((((1) < args__36903__auto__.length))?(new cljs.core.IndexedSeq(args__36903__auto__.slice((1)),(0))):null);
return om_bootstrap.button.menu_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36904__auto__);
});})(ufv___52279,output_schema52271_52280,input_schema52272_52281,input_checker52273_52282,output_checker52274_52283))
;

om_bootstrap.button.menu_item.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___52279,output_schema52271_52280,input_schema52272_52281,input_checker52273_52282,output_checker52274_52283){
return (function (G__52275,rest52276){
var validate__37277__auto__ = ufv___52279.get_cell();
if(cljs.core.truth_(validate__37277__auto__)){
var args__37278__auto___52287 = cljs.core.list_STAR_.call(null,G__52275,rest52276);
var temp__4425__auto___52288 = input_checker52273_52282.call(null,args__37278__auto___52287);
if(cljs.core.truth_(temp__4425__auto___52288)){
var error__37279__auto___52289 = temp__4425__auto___52288;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"menu-item","menu-item",269419754,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__37279__auto___52289)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema52272_52281,new cljs.core.Keyword(null,"value","value",305978217),args__37278__auto___52287,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___52289], null));
} else {
}
} else {
}

var o__37280__auto__ = (function (){var opts = G__52275;
var children = rest52276;
while(true){
return om_bootstrap.button.__GT_menu_item_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__37277__auto__)){
var temp__4425__auto___52290 = output_checker52274_52283.call(null,o__37280__auto__);
if(cljs.core.truth_(temp__4425__auto___52290)){
var error__37279__auto___52291 = temp__4425__auto___52290;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"menu-item","menu-item",269419754,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__37279__auto___52291)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema52271_52280,new cljs.core.Keyword(null,"value","value",305978217),o__37280__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___52291], null));
} else {
}
} else {
}

return o__37280__auto__;
});})(ufv___52279,output_schema52271_52280,input_schema52272_52281,input_checker52273_52282,output_checker52274_52283))
;

om_bootstrap.button.menu_item.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.menu_item.cljs$lang$applyTo = ((function (ufv___52279,output_schema52271_52280,input_schema52272_52281,input_checker52273_52282,output_checker52274_52283){
return (function (seq52277){
var G__52278 = cljs.core.first.call(null,seq52277);
var seq52277__$1 = cljs.core.next.call(null,seq52277);
return om_bootstrap.button.menu_item.cljs$core$IFn$_invoke$arity$variadic(G__52278,seq52277__$1);
});})(ufv___52279,output_schema52271_52280,input_schema52272_52281,input_checker52273_52282,output_checker52274_52283))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.menu_item),schema.core.make_fn_schema.call(null,output_schema52271_52280,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema52272_52281], null)));
om_bootstrap.button.DropdownMenu = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))], true, false));
var ufv___52302 = schema.utils.use_fn_validation;
var output_schema52293_52303 = om_bootstrap.types.Component;
var input_schema52294_52304 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.DropdownMenu,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"DropdownMenu","DropdownMenu",881901742,null)], null))),schema.core.Any], null);
var input_checker52295_52305 = schema.core.checker.call(null,input_schema52294_52304);
var output_checker52296_52306 = schema.core.checker.call(null,output_schema52293_52303);
/**
 * Inputs: [opts :- DropdownMenu & children]
 *   Returns: t/Component
 */
om_bootstrap.button.dropdown_menu = ((function (ufv___52302,output_schema52293_52303,input_schema52294_52304,input_checker52295_52305,output_checker52296_52306){
return (function om_bootstrap$button$dropdown_menu(var_args){
var args__36903__auto__ = [];
var len__36896__auto___52307 = arguments.length;
var i__36897__auto___52308 = (0);
while(true){
if((i__36897__auto___52308 < len__36896__auto___52307)){
args__36903__auto__.push((arguments[i__36897__auto___52308]));

var G__52309 = (i__36897__auto___52308 + (1));
i__36897__auto___52308 = G__52309;
continue;
} else {
}
break;
}

var argseq__36904__auto__ = ((((1) < args__36903__auto__.length))?(new cljs.core.IndexedSeq(args__36903__auto__.slice((1)),(0))):null);
return om_bootstrap.button.dropdown_menu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36904__auto__);
});})(ufv___52302,output_schema52293_52303,input_schema52294_52304,input_checker52295_52305,output_checker52296_52306))
;

om_bootstrap.button.dropdown_menu.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___52302,output_schema52293_52303,input_schema52294_52304,input_checker52295_52305,output_checker52296_52306){
return (function (G__52297,rest52298){
var validate__37277__auto__ = ufv___52302.get_cell();
if(cljs.core.truth_(validate__37277__auto__)){
var args__37278__auto___52310 = cljs.core.list_STAR_.call(null,G__52297,rest52298);
var temp__4425__auto___52311 = input_checker52295_52305.call(null,args__37278__auto___52310);
if(cljs.core.truth_(temp__4425__auto___52311)){
var error__37279__auto___52312 = temp__4425__auto___52311;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"dropdown-menu","dropdown-menu",-2089460283,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__37279__auto___52312)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema52294_52304,new cljs.core.Keyword(null,"value","value",305978217),args__37278__auto___52310,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___52312], null));
} else {
}
} else {
}

var o__37280__auto__ = (function (){var opts = G__52297;
var children = rest52298;
while(true){
var vec__52301 = om_bootstrap.types.separate.call(null,om_bootstrap.button.DropdownMenu,opts);
var bs = cljs.core.nth.call(null,vec__52301,(0),null);
var props = cljs.core.nth.call(null,vec__52301,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dropdown-menu","dropdown-menu",564975486),true,new cljs.core.Keyword(null,"dropdown-menu-right","dropdown-menu-right",-1532579541),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs)], null);
var ul_attrs = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes),new cljs.core.Keyword(null,"role","role",-736691072),"menu"], null);
return om_tools.dom.element.call(null,React.DOM.ul,om_bootstrap.util.merge_props.call(null,props,ul_attrs),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4423__auto__)){
var on_select = temp__4423__auto__;
return cljs.core.map.call(null,((function (on_select,temp__4423__auto__,vec__52301,bs,props,classes,ul_attrs,validate__37277__auto__,ufv___52302,output_schema52293_52303,input_schema52294_52304,input_checker52295_52305,output_checker52296_52306){
return (function (p1__52292_SHARP_){
return om_bootstrap.util.clone_with_props.call(null,p1__52292_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),on_select], null));
});})(on_select,temp__4423__auto__,vec__52301,bs,props,classes,ul_attrs,validate__37277__auto__,ufv___52302,output_schema52293_52303,input_schema52294_52304,input_checker52295_52305,output_checker52296_52306))
,children);
} else {
return children;
}
})()],null)));
break;
}
})();
if(cljs.core.truth_(validate__37277__auto__)){
var temp__4425__auto___52313 = output_checker52296_52306.call(null,o__37280__auto__);
if(cljs.core.truth_(temp__4425__auto___52313)){
var error__37279__auto___52314 = temp__4425__auto___52313;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"dropdown-menu","dropdown-menu",-2089460283,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__37279__auto___52314)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema52293_52303,new cljs.core.Keyword(null,"value","value",305978217),o__37280__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___52314], null));
} else {
}
} else {
}

return o__37280__auto__;
});})(ufv___52302,output_schema52293_52303,input_schema52294_52304,input_checker52295_52305,output_checker52296_52306))
;

om_bootstrap.button.dropdown_menu.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.dropdown_menu.cljs$lang$applyTo = ((function (ufv___52302,output_schema52293_52303,input_schema52294_52304,input_checker52295_52305,output_checker52296_52306){
return (function (seq52299){
var G__52300 = cljs.core.first.call(null,seq52299);
var seq52299__$1 = cljs.core.next.call(null,seq52299);
return om_bootstrap.button.dropdown_menu.cljs$core$IFn$_invoke$arity$variadic(G__52300,seq52299__$1);
});})(ufv___52302,output_schema52293_52303,input_schema52294_52304,input_checker52295_52305,output_checker52296_52306))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.dropdown_menu),schema.core.make_fn_schema.call(null,output_schema52293_52303,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema52294_52304], null)));
om_bootstrap.button.dropdown_STAR_$descriptor = (function (){var descriptor__49586__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
(descriptor__49586__auto__["mixins"] = [om_bootstrap.mixins.dropdown_mixin]);

return descriptor__49586__auto__;
})();

var component_fnk__49615__auto___52345 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema52320 = schema.core.Any;
var input_schema52321 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"map52319","map52319",-601435054,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)))], null);
var input_checker52322 = schema.core.checker.call(null,input_schema52321);
var output_checker52323 = schema.core.checker.call(null,output_schema52320);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema52320,input_schema52321,input_checker52322,output_checker52323){
return (function om_bootstrap$button$constructor52317(G__52324){
var validate__37277__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__37277__auto__)){
var args__37278__auto___52346 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__52324], null);
var temp__4425__auto___52347 = input_checker52322.call(null,args__37278__auto___52346);
if(cljs.core.truth_(temp__4425__auto___52347)){
var error__37279__auto___52348 = temp__4425__auto___52347;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor52317","constructor52317",174710051,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__37279__auto___52348)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema52321,new cljs.core.Keyword(null,"value","value",305978217),args__37278__auto___52346,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___52348], null));
} else {
}
} else {
}

var o__37280__auto__ = (function (){var map52319 = G__52324;
while(true){
if(cljs.core.map_QMARK_.call(null,map52319)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map52319)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map52319,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map52319,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.button.t_om_bootstrap$button52331 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
om_bootstrap.button.t_om_bootstrap$button52331 = (function (G__52324,constructor52317,input_schema52321,owner,map52319,output_schema52320,state,input_checker52322,output_checker52323,validate__37277__auto__,ufv__,meta52332){
this.G__52324 = G__52324;
this.constructor52317 = constructor52317;
this.input_schema52321 = input_schema52321;
this.owner = owner;
this.map52319 = map52319;
this.output_schema52320 = output_schema52320;
this.state = state;
this.input_checker52322 = input_checker52322;
this.output_checker52323 = output_checker52323;
this.validate__37277__auto__ = validate__37277__auto__;
this.ufv__ = ufv__;
this.meta52332 = meta52332;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.button.t_om_bootstrap$button52331.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,owner,validate__37277__auto__,ufv__,output_schema52320,input_schema52321,input_checker52322,output_checker52323){
return (function (_52333,meta52332__$1){
var self__ = this;
var _52333__$1 = this;
return (new om_bootstrap.button.t_om_bootstrap$button52331(self__.G__52324,self__.constructor52317,self__.input_schema52321,self__.owner,self__.map52319,self__.output_schema52320,self__.state,self__.input_checker52322,self__.output_checker52323,self__.validate__37277__auto__,self__.ufv__,meta52332__$1));
});})(state,owner,validate__37277__auto__,ufv__,output_schema52320,input_schema52321,input_checker52322,output_checker52323))
;

om_bootstrap.button.t_om_bootstrap$button52331.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,owner,validate__37277__auto__,ufv__,output_schema52320,input_schema52321,input_checker52322,output_checker52323){
return (function (_52333){
var self__ = this;
var _52333__$1 = this;
return self__.meta52332;
});})(state,owner,validate__37277__auto__,ufv__,output_schema52320,input_schema52321,input_checker52322,output_checker52323))
;

om_bootstrap.button.t_om_bootstrap$button52331.prototype.om$core$IDisplayName$ = true;

om_bootstrap.button.t_om_bootstrap$button52331.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,owner,validate__37277__auto__,ufv__,output_schema52320,input_schema52321,input_checker52322,output_checker52323){
return (function (_){
var self__ = this;
var ___$1 = this;
return "dropdown*";
});})(state,owner,validate__37277__auto__,ufv__,output_schema52320,input_schema52321,input_checker52322,output_checker52323))
;

om_bootstrap.button.t_om_bootstrap$button52331.prototype.om$core$IRender$ = true;

om_bootstrap.button.t_om_bootstrap$button52331.prototype.om$core$IRender$render$arity$1 = ((function (state,owner,validate__37277__auto__,ufv__,output_schema52320,input_schema52321,input_checker52322,output_checker52323){
return (function (_){
var self__ = this;
var ___$1 = this;
var open_QMARK_ = (self__.owner["isDropdownOpen"]).call(null);
var map__52334 = om.core.get_props.call(null,self__.owner);
var map__52334__$1 = ((((!((map__52334 == null)))?((((map__52334.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52334.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52334):map__52334);
var opts = cljs.core.get.call(null,map__52334__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var children = cljs.core.get.call(null,map__52334__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var vec__52335 = om_bootstrap.types.separate.call(null,om_bootstrap.button.DropdownButton,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null));
var bs = cljs.core.nth.call(null,vec__52335,(0),null);
var props = cljs.core.nth.call(null,vec__52335,(1),null);
var set_dropdown = (self__.owner["setDropdownState"]);
var render_fn = cljs.core.partial.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs))?om_bootstrap.button.render_nav_item:om_bootstrap.button.render_button_group),bs,open_QMARK_);
var button_props = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ref","ref",1289896967),"dropdownButton",new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-toggle",new cljs.core.Keyword(null,"key","key",-1516042587),(0),new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004),new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__52334,map__52334__$1,opts,children,vec__52335,bs,props,set_dropdown,render_fn,___$1,state,owner,validate__37277__auto__,ufv__,output_schema52320,input_schema52321,input_checker52322,output_checker52323){
return (function (e){
e.preventDefault();

return set_dropdown.call(null,cljs.core.not.call(null,open_QMARK_));
});})(open_QMARK_,map__52334,map__52334__$1,opts,children,vec__52335,bs,props,set_dropdown,render_fn,___$1,state,owner,validate__37277__auto__,ufv__,output_schema52320,input_schema52321,input_checker52322,output_checker52323))
], null);
var update_child_props = ((function (open_QMARK_,map__52334,map__52334__$1,opts,children,vec__52335,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__37277__auto__,ufv__,output_schema52320,input_schema52321,input_checker52322,output_checker52323){
return (function (props__$1){
var handle = (cljs.core.truth_((function (){var or__35838__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(props__$1));
if(cljs.core.truth_(or__35838__auto__)){
return or__35838__auto__;
} else {
return new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
}
})())?((function (open_QMARK_,map__52334,map__52334__$1,opts,children,vec__52335,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__37277__auto__,ufv__,output_schema52320,input_schema52321,input_checker52322,output_checker52323){
return (function (key){
var temp__4423__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4423__auto__)){
var os = temp__4423__auto__;
return os.call(null,key);
} else {
return set_dropdown.call(null,false);
}
});})(open_QMARK_,map__52334,map__52334__$1,opts,children,vec__52335,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__37277__auto__,ufv__,output_schema52320,input_schema52321,input_checker52322,output_checker52323))
:null);
return cljs.core.update_in.call(null,props__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null),om_bootstrap.util.merge_props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),handle], null));
});})(open_QMARK_,map__52334,map__52334__$1,opts,children,vec__52335,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__37277__auto__,ufv__,output_schema52320,input_schema52321,input_checker52322,output_checker52323))
;
return render_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.button.button.call(null,om_bootstrap.util.merge_props.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428)),button_props),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs)," ",React.DOM.span({"className": "caret"})),om_bootstrap.button.dropdown_menu.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ref","ref",1289896967),"menu",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null),cljs.core.map.call(null,((function (open_QMARK_,map__52334,map__52334__$1,opts,children,vec__52335,bs,props,set_dropdown,render_fn,button_props,update_child_props,___$1,state,owner,validate__37277__auto__,ufv__,output_schema52320,input_schema52321,input_checker52322,output_checker52323){
return (function (p1__52315_SHARP_){
return om_bootstrap.util.clone_with_props.call(null,p1__52315_SHARP_,update_child_props);
});})(open_QMARK_,map__52334,map__52334__$1,opts,children,vec__52335,bs,props,set_dropdown,render_fn,button_props,update_child_props,___$1,state,owner,validate__37277__auto__,ufv__,output_schema52320,input_schema52321,input_checker52322,output_checker52323))
,children))], null));
});})(state,owner,validate__37277__auto__,ufv__,output_schema52320,input_schema52321,input_checker52322,output_checker52323))
;

om_bootstrap.button.t_om_bootstrap$button52331.getBasis = ((function (state,owner,validate__37277__auto__,ufv__,output_schema52320,input_schema52321,input_checker52322,output_checker52323){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"G__52324","G__52324",498121217,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"constructor52317","constructor52317",174710051,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"input-schema52321","input-schema52321",-934373757,null),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"map52319","map52319",-601435054,null),new cljs.core.Symbol(null,"output-schema52320","output-schema52320",1098171604,null),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"input-checker52322","input-checker52322",840672116,null),new cljs.core.Symbol(null,"output-checker52323","output-checker52323",946918586,null),new cljs.core.Symbol(null,"validate__37277__auto__","validate__37277__auto__",694432091,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"meta52332","meta52332",-1355824174,null)], null);
});})(state,owner,validate__37277__auto__,ufv__,output_schema52320,input_schema52321,input_checker52322,output_checker52323))
;

om_bootstrap.button.t_om_bootstrap$button52331.cljs$lang$type = true;

om_bootstrap.button.t_om_bootstrap$button52331.cljs$lang$ctorStr = "om-bootstrap.button/t_om_bootstrap$button52331";

om_bootstrap.button.t_om_bootstrap$button52331.cljs$lang$ctorPrWriter = ((function (state,owner,validate__37277__auto__,ufv__,output_schema52320,input_schema52321,input_checker52322,output_checker52323){
return (function (this__36436__auto__,writer__36437__auto__,opt__36438__auto__){
return cljs.core._write.call(null,writer__36437__auto__,"om-bootstrap.button/t_om_bootstrap$button52331");
});})(state,owner,validate__37277__auto__,ufv__,output_schema52320,input_schema52321,input_checker52322,output_checker52323))
;

om_bootstrap.button.__GT_t_om_bootstrap$button52331 = ((function (state,owner,validate__37277__auto__,ufv__,output_schema52320,input_schema52321,input_checker52322,output_checker52323){
return (function om_bootstrap$button$constructor52317_$___GT_t_om_bootstrap$button52331(G__52324__$1,constructor52317__$1,input_schema52321__$1,owner__$1,map52319__$1,output_schema52320__$1,state__$1,input_checker52322__$1,output_checker52323__$1,validate__37277__auto____$1,ufv____$1,meta52332){
return (new om_bootstrap.button.t_om_bootstrap$button52331(G__52324__$1,constructor52317__$1,input_schema52321__$1,owner__$1,map52319__$1,output_schema52320__$1,state__$1,input_checker52322__$1,output_checker52323__$1,validate__37277__auto____$1,ufv____$1,meta52332));
});})(state,owner,validate__37277__auto__,ufv__,output_schema52320,input_schema52321,input_checker52322,output_checker52323))
;

}

return (new om_bootstrap.button.t_om_bootstrap$button52331(G__52324,om_bootstrap$button$constructor52317,input_schema52321,owner,map52319,output_schema52320,state,input_checker52322,output_checker52323,validate__37277__auto__,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__37277__auto__)){
var temp__4425__auto___52349 = output_checker52323.call(null,o__37280__auto__);
if(cljs.core.truth_(temp__4425__auto___52349)){
var error__37279__auto___52350 = temp__4425__auto___52349;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor52317","constructor52317",174710051,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__37279__auto___52350)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema52320,new cljs.core.Keyword(null,"value","value",305978217),o__37280__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___52350], null));
} else {
}
} else {
}

return o__37280__auto__;
});})(ufv__,output_schema52320,input_schema52321,input_checker52322,output_checker52323))
,schema.core.make_fn_schema.call(null,output_schema52320,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema52321], null)));
})();
/**
 * Generates a dropdown button component responsible for its own
 *   toggled state. The open? toggling is handled through a dropdown
 *   mixin.
 */
om_bootstrap.button.dropdown_STAR_ = ((function (component_fnk__49615__auto___52345){
return (function om_bootstrap$button$dropdown_STAR_(var_args){
var args__36903__auto__ = [];
var len__36896__auto___52351 = arguments.length;
var i__36897__auto___52352 = (0);
while(true){
if((i__36897__auto___52352 < len__36896__auto___52351)){
args__36903__auto__.push((arguments[i__36897__auto___52352]));

var G__52353 = (i__36897__auto___52352 + (1));
i__36897__auto___52352 = G__52353;
continue;
} else {
}
break;
}

var argseq__36904__auto__ = ((((2) < args__36903__auto__.length))?(new cljs.core.IndexedSeq(args__36903__auto__.slice((2)),(0))):null);
return om_bootstrap.button.dropdown_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36904__auto__);
});})(component_fnk__49615__auto___52345))
;

om_bootstrap.button.dropdown_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__49615__auto___52345){
return (function (data__49616__auto__,owner52316,p__52340){
var vec__52341 = p__52340;
var opts__49617__auto__ = cljs.core.nth.call(null,vec__52341,(0),null);
return component_fnk__49615__auto___52345.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner52316),new cljs.core.Keyword(null,"opts","opts",155075701),opts__49617__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner52316,new cljs.core.Keyword(null,"data","data",-232669377),data__49616__auto__], null));
});})(component_fnk__49615__auto___52345))
;

om_bootstrap.button.dropdown_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.button.dropdown_STAR_.cljs$lang$applyTo = ((function (component_fnk__49615__auto___52345){
return (function (seq52337){
var G__52338 = cljs.core.first.call(null,seq52337);
var seq52337__$1 = cljs.core.next.call(null,seq52337);
var G__52339 = cljs.core.first.call(null,seq52337__$1);
var seq52337__$2 = cljs.core.next.call(null,seq52337__$1);
return om_bootstrap.button.dropdown_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__52338,G__52339,seq52337__$2);
});})(component_fnk__49615__auto___52345))
;

om_bootstrap.button.__GT_dropdown_STAR_ = (function om_bootstrap$button$__GT_dropdown_STAR_(var_args){
var args52342 = [];
var len__36896__auto___52354 = arguments.length;
var i__36897__auto___52355 = (0);
while(true){
if((i__36897__auto___52355 < len__36896__auto___52354)){
args52342.push((arguments[i__36897__auto___52355]));

var G__52356 = (i__36897__auto___52355 + (1));
i__36897__auto___52355 = G__52356;
continue;
} else {
}
break;
}

var G__52344 = args52342.length;
switch (G__52344) {
case 1:
return om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52342.length)].join('')));

}
});

om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__49584__auto__){
return om.core.build.call(null,om_bootstrap.button.dropdown_STAR_,cursor__49584__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.dropdown_STAR_$descriptor], null));
});

om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__49584__auto__,m52318){
return om.core.build.call(null,om_bootstrap.button.dropdown_STAR_,cursor__49584__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.dropdown_STAR_$descriptor], null),m52318));
});

om_bootstrap.button.__GT_dropdown_STAR_.cljs$lang$maxFixedArity = 2;
var ufv___52366 = schema.utils.use_fn_validation;
var output_schema52358_52367 = om_bootstrap.types.Component;
var input_schema52359_52368 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.DropdownButton,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"DropdownButton","DropdownButton",251375015,null)], null))),schema.core.Any], null);
var input_checker52360_52369 = schema.core.checker.call(null,input_schema52359_52368);
var output_checker52361_52370 = schema.core.checker.call(null,output_schema52358_52367);
/**
 * Inputs: [opts :- DropdownButton & children]
 *   Returns: t/Component
 * 
 *   Returns a dropdown button component. The component manages its own
 *   dropdown state.
 */
om_bootstrap.button.dropdown = ((function (ufv___52366,output_schema52358_52367,input_schema52359_52368,input_checker52360_52369,output_checker52361_52370){
return (function om_bootstrap$button$dropdown(var_args){
var args__36903__auto__ = [];
var len__36896__auto___52371 = arguments.length;
var i__36897__auto___52372 = (0);
while(true){
if((i__36897__auto___52372 < len__36896__auto___52371)){
args__36903__auto__.push((arguments[i__36897__auto___52372]));

var G__52373 = (i__36897__auto___52372 + (1));
i__36897__auto___52372 = G__52373;
continue;
} else {
}
break;
}

var argseq__36904__auto__ = ((((1) < args__36903__auto__.length))?(new cljs.core.IndexedSeq(args__36903__auto__.slice((1)),(0))):null);
return om_bootstrap.button.dropdown.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36904__auto__);
});})(ufv___52366,output_schema52358_52367,input_schema52359_52368,input_checker52360_52369,output_checker52361_52370))
;

om_bootstrap.button.dropdown.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___52366,output_schema52358_52367,input_schema52359_52368,input_checker52360_52369,output_checker52361_52370){
return (function (G__52362,rest52363){
var validate__37277__auto__ = ufv___52366.get_cell();
if(cljs.core.truth_(validate__37277__auto__)){
var args__37278__auto___52374 = cljs.core.list_STAR_.call(null,G__52362,rest52363);
var temp__4425__auto___52375 = input_checker52360_52369.call(null,args__37278__auto___52374);
if(cljs.core.truth_(temp__4425__auto___52375)){
var error__37279__auto___52376 = temp__4425__auto___52375;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"dropdown","dropdown",-1311249964,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a dropdown button component. The component manages its own\n  dropdown state."], null)),cljs.core.pr_str.call(null,error__37279__auto___52376)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema52359_52368,new cljs.core.Keyword(null,"value","value",305978217),args__37278__auto___52374,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___52376], null));
} else {
}
} else {
}

var o__37280__auto__ = (function (){var opts = G__52362;
var children = rest52363;
while(true){
return om_bootstrap.button.__GT_dropdown_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__37277__auto__)){
var temp__4425__auto___52377 = output_checker52361_52370.call(null,o__37280__auto__);
if(cljs.core.truth_(temp__4425__auto___52377)){
var error__37279__auto___52378 = temp__4425__auto___52377;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"dropdown","dropdown",-1311249964,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a dropdown button component. The component manages its own\n  dropdown state."], null)),cljs.core.pr_str.call(null,error__37279__auto___52378)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema52358_52367,new cljs.core.Keyword(null,"value","value",305978217),o__37280__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___52378], null));
} else {
}
} else {
}

return o__37280__auto__;
});})(ufv___52366,output_schema52358_52367,input_schema52359_52368,input_checker52360_52369,output_checker52361_52370))
;

om_bootstrap.button.dropdown.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.dropdown.cljs$lang$applyTo = ((function (ufv___52366,output_schema52358_52367,input_schema52359_52368,input_checker52360_52369,output_checker52361_52370){
return (function (seq52364){
var G__52365 = cljs.core.first.call(null,seq52364);
var seq52364__$1 = cljs.core.next.call(null,seq52364);
return om_bootstrap.button.dropdown.cljs$core$IFn$_invoke$arity$variadic(G__52365,seq52364__$1);
});})(ufv___52366,output_schema52358_52367,input_schema52359_52368,input_checker52360_52369,output_checker52361_52370))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.dropdown),schema.core.make_fn_schema.call(null,output_schema52358_52367,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema52359_52368], null)));
om_bootstrap.button.SplitButton = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"href","href",-793805698)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-click","on-click",1632826543)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))], true, false));
om_bootstrap.button.split_STAR_$descriptor = (function (){var descriptor__49586__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
(descriptor__49586__auto__["mixins"] = [om_bootstrap.mixins.dropdown_mixin]);

return descriptor__49586__auto__;
})();

var component_fnk__49615__auto___52408 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema52383 = schema.core.Any;
var input_schema52384 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"map52382","map52382",1070196419,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)))], null);
var input_checker52385 = schema.core.checker.call(null,input_schema52384);
var output_checker52386 = schema.core.checker.call(null,output_schema52383);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema52383,input_schema52384,input_checker52385,output_checker52386){
return (function om_bootstrap$button$constructor52380(G__52387){
var validate__37277__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__37277__auto__)){
var args__37278__auto___52409 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__52387], null);
var temp__4425__auto___52410 = input_checker52385.call(null,args__37278__auto___52409);
if(cljs.core.truth_(temp__4425__auto___52410)){
var error__37279__auto___52411 = temp__4425__auto___52410;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor52380","constructor52380",-679746370,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__37279__auto___52411)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema52384,new cljs.core.Keyword(null,"value","value",305978217),args__37278__auto___52409,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___52411], null));
} else {
}
} else {
}

var o__37280__auto__ = (function (){var map52382 = G__52387;
while(true){
if(cljs.core.map_QMARK_.call(null,map52382)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map52382)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map52382,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map52382,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.button.t_om_bootstrap$button52394 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
om_bootstrap.button.t_om_bootstrap$button52394 = (function (map52382,owner,output_checker52386,input_checker52385,state,input_schema52384,output_schema52383,validate__37277__auto__,ufv__,G__52387,constructor52380,meta52395){
this.map52382 = map52382;
this.owner = owner;
this.output_checker52386 = output_checker52386;
this.input_checker52385 = input_checker52385;
this.state = state;
this.input_schema52384 = input_schema52384;
this.output_schema52383 = output_schema52383;
this.validate__37277__auto__ = validate__37277__auto__;
this.ufv__ = ufv__;
this.G__52387 = G__52387;
this.constructor52380 = constructor52380;
this.meta52395 = meta52395;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.button.t_om_bootstrap$button52394.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,owner,validate__37277__auto__,ufv__,output_schema52383,input_schema52384,input_checker52385,output_checker52386){
return (function (_52396,meta52395__$1){
var self__ = this;
var _52396__$1 = this;
return (new om_bootstrap.button.t_om_bootstrap$button52394(self__.map52382,self__.owner,self__.output_checker52386,self__.input_checker52385,self__.state,self__.input_schema52384,self__.output_schema52383,self__.validate__37277__auto__,self__.ufv__,self__.G__52387,self__.constructor52380,meta52395__$1));
});})(state,owner,validate__37277__auto__,ufv__,output_schema52383,input_schema52384,input_checker52385,output_checker52386))
;

om_bootstrap.button.t_om_bootstrap$button52394.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,owner,validate__37277__auto__,ufv__,output_schema52383,input_schema52384,input_checker52385,output_checker52386){
return (function (_52396){
var self__ = this;
var _52396__$1 = this;
return self__.meta52395;
});})(state,owner,validate__37277__auto__,ufv__,output_schema52383,input_schema52384,input_checker52385,output_checker52386))
;

om_bootstrap.button.t_om_bootstrap$button52394.prototype.om$core$IDisplayName$ = true;

om_bootstrap.button.t_om_bootstrap$button52394.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,owner,validate__37277__auto__,ufv__,output_schema52383,input_schema52384,input_checker52385,output_checker52386){
return (function (_){
var self__ = this;
var ___$1 = this;
return "split*";
});})(state,owner,validate__37277__auto__,ufv__,output_schema52383,input_schema52384,input_checker52385,output_checker52386))
;

om_bootstrap.button.t_om_bootstrap$button52394.prototype.om$core$IRender$ = true;

om_bootstrap.button.t_om_bootstrap$button52394.prototype.om$core$IRender$render$arity$1 = ((function (state,owner,validate__37277__auto__,ufv__,output_schema52383,input_schema52384,input_checker52385,output_checker52386){
return (function (_){
var self__ = this;
var ___$1 = this;
var open_QMARK_ = (self__.owner["isDropdownOpen"]).call(null);
var map__52397 = om.core.get_props.call(null,self__.owner);
var map__52397__$1 = ((((!((map__52397 == null)))?((((map__52397.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52397.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52397):map__52397);
var opts = cljs.core.get.call(null,map__52397__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var children = cljs.core.get.call(null,map__52397__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var vec__52398 = om_bootstrap.types.separate.call(null,om_bootstrap.button.SplitButton,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238),"Toggle dropdown"], null));
var bs = cljs.core.nth.call(null,vec__52398,(0),null);
var props = cljs.core.nth.call(null,vec__52398,(1),null);
var set_dropdown = (self__.owner["setDropdownState"]);
var btn_props = cljs.core.partial.call(null,om_bootstrap.util.merge_props,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"id","id",-1388402092)));
var btn = om_bootstrap.button.button.call(null,btn_props.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__52397,map__52397__$1,opts,children,vec__52398,bs,props,set_dropdown,btn_props,___$1,state,owner,validate__37277__auto__,ufv__,output_schema52383,input_schema52384,input_checker52385,output_checker52386){
return (function (e){
if(cljs.core.truth_(open_QMARK_)){
set_dropdown.call(null,false);
} else {
}

var temp__4425__auto__ = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4425__auto__)){
var f = temp__4425__auto__;
return f.call(null,e);
} else {
return null;
}
});})(open_QMARK_,map__52397,map__52397__$1,opts,children,vec__52398,bs,props,set_dropdown,btn_props,___$1,state,owner,validate__37277__auto__,ufv__,output_schema52383,input_schema52384,input_checker52385,output_checker52386))
], null)),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs));
var drop_btn = om_bootstrap.button.button.call(null,btn_props.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),"dropdownButton",new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-toggle",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__52397,map__52397__$1,opts,children,vec__52398,bs,props,set_dropdown,btn_props,btn,___$1,state,owner,validate__37277__auto__,ufv__,output_schema52383,input_schema52384,input_checker52385,output_checker52386){
return (function (e){
e.preventDefault();

return set_dropdown.call(null,cljs.core.not.call(null,open_QMARK_));
});})(open_QMARK_,map__52397,map__52397__$1,opts,children,vec__52398,bs,props,set_dropdown,btn_props,btn,___$1,state,owner,validate__37277__auto__,ufv__,output_schema52383,input_schema52384,input_checker52385,output_checker52386))
], null)),cljs.core.apply.call(null,React.DOM.span,{"className": "sr-only"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238).cljs$core$IFn$_invoke$arity$1(bs)],null)))),React.DOM.span({"className": "caret"}));
var menu = om_bootstrap.button.dropdown_menu.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ref","ref",1289896967),"menu",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"on-select","on-select",-192407950),((function (open_QMARK_,map__52397,map__52397__$1,opts,children,vec__52398,bs,props,set_dropdown,btn_props,btn,drop_btn,___$1,state,owner,validate__37277__auto__,ufv__,output_schema52383,input_schema52384,input_checker52385,output_checker52386){
return (function (k){
var temp__4425__auto___52412 = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4425__auto___52412)){
var f_52413 = temp__4425__auto___52412;
f_52413.call(null,k);
} else {
}

return set_dropdown.call(null,false);
});})(open_QMARK_,map__52397,map__52397__$1,opts,children,vec__52398,bs,props,set_dropdown,btn_props,btn,drop_btn,___$1,state,owner,validate__37277__auto__,ufv__,output_schema52383,input_schema52384,input_checker52385,output_checker52386))
], null),children);
return om_bootstrap.button.button_group.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs-size","bs-size",1567732754),new cljs.core.Keyword(null,"bs-size","bs-size",1567732754).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_,new cljs.core.Keyword(null,"dropup","dropup",-1031053231),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428).cljs$core$IFn$_invoke$arity$1(bs)], null))], null),btn,drop_btn,menu);
});})(state,owner,validate__37277__auto__,ufv__,output_schema52383,input_schema52384,input_checker52385,output_checker52386))
;

om_bootstrap.button.t_om_bootstrap$button52394.getBasis = ((function (state,owner,validate__37277__auto__,ufv__,output_schema52383,input_schema52384,input_checker52385,output_checker52386){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map52382","map52382",1070196419,null),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"output-checker52386","output-checker52386",1065759530,null),new cljs.core.Symbol(null,"input-checker52385","input-checker52385",-908376210,null),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"input-schema52384","input-schema52384",1606081332,null),new cljs.core.Symbol(null,"output-schema52383","output-schema52383",-1470521739,null),new cljs.core.Symbol(null,"validate__37277__auto__","validate__37277__auto__",694432091,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__52387","G__52387",-1715605859,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"constructor52380","constructor52380",-679746370,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"meta52395","meta52395",-93944122,null)], null);
});})(state,owner,validate__37277__auto__,ufv__,output_schema52383,input_schema52384,input_checker52385,output_checker52386))
;

om_bootstrap.button.t_om_bootstrap$button52394.cljs$lang$type = true;

om_bootstrap.button.t_om_bootstrap$button52394.cljs$lang$ctorStr = "om-bootstrap.button/t_om_bootstrap$button52394";

om_bootstrap.button.t_om_bootstrap$button52394.cljs$lang$ctorPrWriter = ((function (state,owner,validate__37277__auto__,ufv__,output_schema52383,input_schema52384,input_checker52385,output_checker52386){
return (function (this__36436__auto__,writer__36437__auto__,opt__36438__auto__){
return cljs.core._write.call(null,writer__36437__auto__,"om-bootstrap.button/t_om_bootstrap$button52394");
});})(state,owner,validate__37277__auto__,ufv__,output_schema52383,input_schema52384,input_checker52385,output_checker52386))
;

om_bootstrap.button.__GT_t_om_bootstrap$button52394 = ((function (state,owner,validate__37277__auto__,ufv__,output_schema52383,input_schema52384,input_checker52385,output_checker52386){
return (function om_bootstrap$button$constructor52380_$___GT_t_om_bootstrap$button52394(map52382__$1,owner__$1,output_checker52386__$1,input_checker52385__$1,state__$1,input_schema52384__$1,output_schema52383__$1,validate__37277__auto____$1,ufv____$1,G__52387__$1,constructor52380__$1,meta52395){
return (new om_bootstrap.button.t_om_bootstrap$button52394(map52382__$1,owner__$1,output_checker52386__$1,input_checker52385__$1,state__$1,input_schema52384__$1,output_schema52383__$1,validate__37277__auto____$1,ufv____$1,G__52387__$1,constructor52380__$1,meta52395));
});})(state,owner,validate__37277__auto__,ufv__,output_schema52383,input_schema52384,input_checker52385,output_checker52386))
;

}

return (new om_bootstrap.button.t_om_bootstrap$button52394(map52382,owner,output_checker52386,input_checker52385,state,input_schema52384,output_schema52383,validate__37277__auto__,ufv__,G__52387,om_bootstrap$button$constructor52380,null));
break;
}
})();
if(cljs.core.truth_(validate__37277__auto__)){
var temp__4425__auto___52414 = output_checker52386.call(null,o__37280__auto__);
if(cljs.core.truth_(temp__4425__auto___52414)){
var error__37279__auto___52415 = temp__4425__auto___52414;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor52380","constructor52380",-679746370,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__37279__auto___52415)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema52383,new cljs.core.Keyword(null,"value","value",305978217),o__37280__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___52415], null));
} else {
}
} else {
}

return o__37280__auto__;
});})(ufv__,output_schema52383,input_schema52384,input_checker52385,output_checker52386))
,schema.core.make_fn_schema.call(null,output_schema52383,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema52384], null)));
})();
/**
 * Generates a split button component responsible for its own
 *   toggled state. The open? toggling is handled through a dropdown
 *   mixin.
 */
om_bootstrap.button.split_STAR_ = ((function (component_fnk__49615__auto___52408){
return (function om_bootstrap$button$split_STAR_(var_args){
var args__36903__auto__ = [];
var len__36896__auto___52416 = arguments.length;
var i__36897__auto___52417 = (0);
while(true){
if((i__36897__auto___52417 < len__36896__auto___52416)){
args__36903__auto__.push((arguments[i__36897__auto___52417]));

var G__52418 = (i__36897__auto___52417 + (1));
i__36897__auto___52417 = G__52418;
continue;
} else {
}
break;
}

var argseq__36904__auto__ = ((((2) < args__36903__auto__.length))?(new cljs.core.IndexedSeq(args__36903__auto__.slice((2)),(0))):null);
return om_bootstrap.button.split_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36904__auto__);
});})(component_fnk__49615__auto___52408))
;

om_bootstrap.button.split_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__49615__auto___52408){
return (function (data__49616__auto__,owner52379,p__52403){
var vec__52404 = p__52403;
var opts__49617__auto__ = cljs.core.nth.call(null,vec__52404,(0),null);
return component_fnk__49615__auto___52408.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner52379),new cljs.core.Keyword(null,"opts","opts",155075701),opts__49617__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner52379,new cljs.core.Keyword(null,"data","data",-232669377),data__49616__auto__], null));
});})(component_fnk__49615__auto___52408))
;

om_bootstrap.button.split_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.button.split_STAR_.cljs$lang$applyTo = ((function (component_fnk__49615__auto___52408){
return (function (seq52400){
var G__52401 = cljs.core.first.call(null,seq52400);
var seq52400__$1 = cljs.core.next.call(null,seq52400);
var G__52402 = cljs.core.first.call(null,seq52400__$1);
var seq52400__$2 = cljs.core.next.call(null,seq52400__$1);
return om_bootstrap.button.split_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__52401,G__52402,seq52400__$2);
});})(component_fnk__49615__auto___52408))
;

om_bootstrap.button.__GT_split_STAR_ = (function om_bootstrap$button$__GT_split_STAR_(var_args){
var args52405 = [];
var len__36896__auto___52419 = arguments.length;
var i__36897__auto___52420 = (0);
while(true){
if((i__36897__auto___52420 < len__36896__auto___52419)){
args52405.push((arguments[i__36897__auto___52420]));

var G__52421 = (i__36897__auto___52420 + (1));
i__36897__auto___52420 = G__52421;
continue;
} else {
}
break;
}

var G__52407 = args52405.length;
switch (G__52407) {
case 1:
return om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52405.length)].join('')));

}
});

om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__49584__auto__){
return om.core.build.call(null,om_bootstrap.button.split_STAR_,cursor__49584__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.split_STAR_$descriptor], null));
});

om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__49584__auto__,m52381){
return om.core.build.call(null,om_bootstrap.button.split_STAR_,cursor__49584__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.split_STAR_$descriptor], null),m52381));
});

om_bootstrap.button.__GT_split_STAR_.cljs$lang$maxFixedArity = 2;
var ufv___52431 = schema.utils.use_fn_validation;
var output_schema52423_52432 = schema.core.Any;
var input_schema52424_52433 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.SplitButton,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"SplitButton","SplitButton",1856385687,null)], null))),schema.core.Any], null);
var input_checker52425_52434 = schema.core.checker.call(null,input_schema52424_52433);
var output_checker52426_52435 = schema.core.checker.call(null,output_schema52423_52432);
/**
 * Inputs: [opts :- SplitButton & children]
 */
om_bootstrap.button.split = ((function (ufv___52431,output_schema52423_52432,input_schema52424_52433,input_checker52425_52434,output_checker52426_52435){
return (function om_bootstrap$button$split(var_args){
var args__36903__auto__ = [];
var len__36896__auto___52436 = arguments.length;
var i__36897__auto___52437 = (0);
while(true){
if((i__36897__auto___52437 < len__36896__auto___52436)){
args__36903__auto__.push((arguments[i__36897__auto___52437]));

var G__52438 = (i__36897__auto___52437 + (1));
i__36897__auto___52437 = G__52438;
continue;
} else {
}
break;
}

var argseq__36904__auto__ = ((((1) < args__36903__auto__.length))?(new cljs.core.IndexedSeq(args__36903__auto__.slice((1)),(0))):null);
return om_bootstrap.button.split.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36904__auto__);
});})(ufv___52431,output_schema52423_52432,input_schema52424_52433,input_checker52425_52434,output_checker52426_52435))
;

om_bootstrap.button.split.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___52431,output_schema52423_52432,input_schema52424_52433,input_checker52425_52434,output_checker52426_52435){
return (function (G__52427,rest52428){
var validate__37277__auto__ = ufv___52431.get_cell();
if(cljs.core.truth_(validate__37277__auto__)){
var args__37278__auto___52439 = cljs.core.list_STAR_.call(null,G__52427,rest52428);
var temp__4425__auto___52440 = input_checker52425_52434.call(null,args__37278__auto___52439);
if(cljs.core.truth_(temp__4425__auto___52440)){
var error__37279__auto___52441 = temp__4425__auto___52440;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split","split",1041096409,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__37279__auto___52441)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema52424_52433,new cljs.core.Keyword(null,"value","value",305978217),args__37278__auto___52439,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___52441], null));
} else {
}
} else {
}

var o__37280__auto__ = (function (){var opts = G__52427;
var children = rest52428;
while(true){
return om_bootstrap.button.__GT_split_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__37277__auto__)){
var temp__4425__auto___52442 = output_checker52426_52435.call(null,o__37280__auto__);
if(cljs.core.truth_(temp__4425__auto___52442)){
var error__37279__auto___52443 = temp__4425__auto___52442;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split","split",1041096409,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__37279__auto___52443)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema52423_52432,new cljs.core.Keyword(null,"value","value",305978217),o__37280__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___52443], null));
} else {
}
} else {
}

return o__37280__auto__;
});})(ufv___52431,output_schema52423_52432,input_schema52424_52433,input_checker52425_52434,output_checker52426_52435))
;

om_bootstrap.button.split.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.split.cljs$lang$applyTo = ((function (ufv___52431,output_schema52423_52432,input_schema52424_52433,input_checker52425_52434,output_checker52426_52435){
return (function (seq52429){
var G__52430 = cljs.core.first.call(null,seq52429);
var seq52429__$1 = cljs.core.next.call(null,seq52429);
return om_bootstrap.button.split.cljs$core$IFn$_invoke$arity$variadic(G__52430,seq52429__$1);
});})(ufv___52431,output_schema52423_52432,input_schema52424_52433,input_checker52425_52434,output_checker52426_52435))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.split),schema.core.make_fn_schema.call(null,output_schema52423_52432,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema52424_52433], null)));

//# sourceMappingURL=button.js.map