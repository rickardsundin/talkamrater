// Compiled by ClojureScript 1.7.170 {}
goog.provide('om_bootstrap.panel');
goog.require('cljs.core');
goog.require('om_bootstrap.types');
goog.require('schema.core');
goog.require('om_bootstrap.util');
goog.require('om_tools.dom');
goog.require('om_tools.core');
goog.require('om_bootstrap.mixins');
goog.require('om.core');
om_bootstrap.panel.Panel = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"header","header",119441134)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"footer","footer",1606445390)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"list-group","list-group",-304522729)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674)),schema.core.Bool], true, false));
om_bootstrap.panel.__GT_collapsible_panel_STAR_;
var ufv___49648 = schema.utils.use_fn_validation;
var output_schema49639_49649 = om_bootstrap.types.Component;
var input_schema49640_49650 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.panel.Panel,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Panel","Panel",-43708258,null)], null))),schema.core.Any], null);
var input_checker49641_49651 = schema.core.checker.call(null,input_schema49640_49650);
var output_checker49642_49652 = schema.core.checker.call(null,output_schema49639_49649);
/**
 * Inputs: [opts :- Panel & children]
 *   Returns: t/Component
 */
om_bootstrap.panel.panel = ((function (ufv___49648,output_schema49639_49649,input_schema49640_49650,input_checker49641_49651,output_checker49642_49652){
return (function om_bootstrap$panel$panel(var_args){
var args__36903__auto__ = [];
var len__36896__auto___49653 = arguments.length;
var i__36897__auto___49654 = (0);
while(true){
if((i__36897__auto___49654 < len__36896__auto___49653)){
args__36903__auto__.push((arguments[i__36897__auto___49654]));

var G__49655 = (i__36897__auto___49654 + (1));
i__36897__auto___49654 = G__49655;
continue;
} else {
}
break;
}

var argseq__36904__auto__ = ((((1) < args__36903__auto__.length))?(new cljs.core.IndexedSeq(args__36903__auto__.slice((1)),(0))):null);
return om_bootstrap.panel.panel.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36904__auto__);
});})(ufv___49648,output_schema49639_49649,input_schema49640_49650,input_checker49641_49651,output_checker49642_49652))
;

om_bootstrap.panel.panel.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___49648,output_schema49639_49649,input_schema49640_49650,input_checker49641_49651,output_checker49642_49652){
return (function (G__49643,rest49644){
var validate__37277__auto__ = ufv___49648.get_cell();
if(cljs.core.truth_(validate__37277__auto__)){
var args__37278__auto___49656 = cljs.core.list_STAR_.call(null,G__49643,rest49644);
var temp__4425__auto___49657 = input_checker49641_49651.call(null,args__37278__auto___49656);
if(cljs.core.truth_(temp__4425__auto___49657)){
var error__37279__auto___49658 = temp__4425__auto___49657;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"panel","panel",1081894071,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__37279__auto___49658)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema49640_49650,new cljs.core.Keyword(null,"value","value",305978217),args__37278__auto___49656,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___49658], null));
} else {
}
} else {
}

var o__37280__auto__ = (function (){var opts = G__49643;
var children = rest49644;
while(true){
var vec__49647 = om_bootstrap.types.separate.call(null,om_bootstrap.panel.Panel,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"panel",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default"], null));
var bs = cljs.core.nth.call(null,vec__49647,(0),null);
var props = cljs.core.nth.call(null,vec__49647,(1),null);
var classes = cljs.core.assoc.call(null,om_bootstrap.types.bs_class_set.call(null,bs),new cljs.core.Keyword(null,"panel","panel",-558637456),true);
if(cljs.core.truth_(new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779).cljs$core$IFn$_invoke$arity$1(bs))){
return om_bootstrap.panel.__GT_collapsible_panel_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779)),new cljs.core.Keyword(null,"children","children",-940561982),children], null));
} else {
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"header","header",119441134).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4425__auto__)){
var header = temp__4425__auto__;
return cljs.core.apply.call(null,React.DOM.div,{"className": "panel-heading"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_bootstrap.util.clone_with_props.call(null,header,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"panel-title"], null))],null))));
} else {
return null;
}
})(),((cljs.core._EQ_.call(null,(0),cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.identity,children))))?null:cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,[cljs.core.str("panel-body"),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674).cljs$core$IFn$_invoke$arity$1(bs))?" collapse":null))].join('')), "ref": "body"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))))),(function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"list-group","list-group",-304522729).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4425__auto__)){
var list_group = temp__4425__auto__;
return list_group;
} else {
return null;
}
})(),(function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"footer","footer",1606445390).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4425__auto__)){
var footer = temp__4425__auto__;
return cljs.core.apply.call(null,React.DOM.div,{"className": "panel-footer"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[footer],null))));
} else {
return null;
}
})()],null)));
}
break;
}
})();
if(cljs.core.truth_(validate__37277__auto__)){
var temp__4425__auto___49659 = output_checker49642_49652.call(null,o__37280__auto__);
if(cljs.core.truth_(temp__4425__auto___49659)){
var error__37279__auto___49660 = temp__4425__auto___49659;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"panel","panel",1081894071,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__37279__auto___49660)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema49639_49649,new cljs.core.Keyword(null,"value","value",305978217),o__37280__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___49660], null));
} else {
}
} else {
}

return o__37280__auto__;
});})(ufv___49648,output_schema49639_49649,input_schema49640_49650,input_checker49641_49651,output_checker49642_49652))
;

om_bootstrap.panel.panel.cljs$lang$maxFixedArity = (1);

om_bootstrap.panel.panel.cljs$lang$applyTo = ((function (ufv___49648,output_schema49639_49649,input_schema49640_49650,input_checker49641_49651,output_checker49642_49652){
return (function (seq49645){
var G__49646 = cljs.core.first.call(null,seq49645);
var seq49645__$1 = cljs.core.next.call(null,seq49645);
return om_bootstrap.panel.panel.cljs$core$IFn$_invoke$arity$variadic(G__49646,seq49645__$1);
});})(ufv___49648,output_schema49639_49649,input_schema49640_49650,input_checker49641_49651,output_checker49642_49652))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.panel.panel),schema.core.make_fn_schema.call(null,output_schema49639_49649,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema49640_49650], null)));
om_bootstrap.panel.collapsible_panel_STAR_$descriptor = (function (){var descriptor__49586__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
(descriptor__49586__auto__["mixins"] = [om_bootstrap.mixins.collapsible_mixin]);

return descriptor__49586__auto__;
})();

var component_fnk__49615__auto___49688 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema49665 = schema.core.Any;
var input_schema49666 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"map49664","map49664",1325509263,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)))], null);
var input_checker49667 = schema.core.checker.call(null,input_schema49666);
var output_checker49668 = schema.core.checker.call(null,output_schema49665);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema49665,input_schema49666,input_checker49667,output_checker49668){
return (function om_bootstrap$panel$constructor49662(G__49669){
var validate__37277__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__37277__auto__)){
var args__37278__auto___49689 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__49669], null);
var temp__4425__auto___49690 = input_checker49667.call(null,args__37278__auto___49689);
if(cljs.core.truth_(temp__4425__auto___49690)){
var error__37279__auto___49691 = temp__4425__auto___49690;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor49662","constructor49662",118691556,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__37279__auto___49691)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema49666,new cljs.core.Keyword(null,"value","value",305978217),args__37278__auto___49689,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___49691], null));
} else {
}
} else {
}

var o__37280__auto__ = (function (){var map49664 = G__49669;
while(true){
if(cljs.core.map_QMARK_.call(null,map49664)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map49664)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map49664,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map49664,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.panel.t_om_bootstrap$panel49675 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
om_bootstrap.panel.t_om_bootstrap$panel49675 = (function (owner,constructor49662,input_schema49666,output_checker49668,G__49669,map49664,state,validate__37277__auto__,ufv__,output_schema49665,input_checker49667,meta49676){
this.owner = owner;
this.constructor49662 = constructor49662;
this.input_schema49666 = input_schema49666;
this.output_checker49668 = output_checker49668;
this.G__49669 = G__49669;
this.map49664 = map49664;
this.state = state;
this.validate__37277__auto__ = validate__37277__auto__;
this.ufv__ = ufv__;
this.output_schema49665 = output_schema49665;
this.input_checker49667 = input_checker49667;
this.meta49676 = meta49676;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.panel.t_om_bootstrap$panel49675.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,owner,validate__37277__auto__,ufv__,output_schema49665,input_schema49666,input_checker49667,output_checker49668){
return (function (_49677,meta49676__$1){
var self__ = this;
var _49677__$1 = this;
return (new om_bootstrap.panel.t_om_bootstrap$panel49675(self__.owner,self__.constructor49662,self__.input_schema49666,self__.output_checker49668,self__.G__49669,self__.map49664,self__.state,self__.validate__37277__auto__,self__.ufv__,self__.output_schema49665,self__.input_checker49667,meta49676__$1));
});})(state,owner,validate__37277__auto__,ufv__,output_schema49665,input_schema49666,input_checker49667,output_checker49668))
;

om_bootstrap.panel.t_om_bootstrap$panel49675.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,owner,validate__37277__auto__,ufv__,output_schema49665,input_schema49666,input_checker49667,output_checker49668){
return (function (_49677){
var self__ = this;
var _49677__$1 = this;
return self__.meta49676;
});})(state,owner,validate__37277__auto__,ufv__,output_schema49665,input_schema49666,input_checker49667,output_checker49668))
;

om_bootstrap.panel.t_om_bootstrap$panel49675.prototype.om$core$IDisplayName$ = true;

om_bootstrap.panel.t_om_bootstrap$panel49675.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,owner,validate__37277__auto__,ufv__,output_schema49665,input_schema49666,input_checker49667,output_checker49668){
return (function (_){
var self__ = this;
var ___$1 = this;
return "collapsible-panel*";
});})(state,owner,validate__37277__auto__,ufv__,output_schema49665,input_schema49666,input_checker49667,output_checker49668))
;

om_bootstrap.panel.t_om_bootstrap$panel49675.prototype.om$core$IRender$ = true;

om_bootstrap.panel.t_om_bootstrap$panel49675.prototype.om$core$IRender$render$arity$1 = ((function (state,owner,validate__37277__auto__,ufv__,output_schema49665,input_schema49666,input_checker49667,output_checker49668){
return (function (_){
var self__ = this;
var ___$1 = this;
var map__49678 = om.core.get_props.call(null,self__.owner);
var map__49678__$1 = ((((!((map__49678 == null)))?((((map__49678.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49678.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49678):map__49678);
var opts = cljs.core.get.call(null,map__49678__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var children = cljs.core.get.call(null,map__49678__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var is_collapsed_QMARK_ = (self__.owner["isPanelCollapsed"]).call(null,self__.owner);
var toggle_BANG_ = ((function (map__49678,map__49678__$1,opts,children,is_collapsed_QMARK_,___$1,state,owner,validate__37277__auto__,ufv__,output_schema49665,input_schema49666,input_checker49667,output_checker49668){
return (function (___$2){
(self__.owner["toggleCollapsed"]).call(null,self__.owner);

return false;
});})(map__49678,map__49678__$1,opts,children,is_collapsed_QMARK_,___$1,state,owner,validate__37277__auto__,ufv__,output_schema49665,input_schema49666,input_checker49667,output_checker49668))
;
var collapsible_header = om_tools.dom.element.call(null,React.DOM.h4,cljs.core.apply.call(null,React.DOM.a,{"href": "#", "onClick": om_tools.dom.format_opts.call(null,toggle_BANG_)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"header","header",119441134).cljs$core$IFn$_invoke$arity$1(opts)],null)))),cljs.core.PersistentVector.EMPTY);
return om_bootstrap.panel.panel.call(null,om_bootstrap.util.merge_props.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"header","header",119441134),collapsible_header,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674),is_collapsed_QMARK_], null)),children);
});})(state,owner,validate__37277__auto__,ufv__,output_schema49665,input_schema49666,input_checker49667,output_checker49668))
;

om_bootstrap.panel.t_om_bootstrap$panel49675.getBasis = ((function (state,owner,validate__37277__auto__,ufv__,output_schema49665,input_schema49666,input_checker49667,output_checker49668){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"constructor49662","constructor49662",118691556,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"input-schema49666","input-schema49666",1703077126,null),new cljs.core.Symbol(null,"output-checker49668","output-checker49668",-1507412760,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__49669","G__49669",-1304090098,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)),new cljs.core.Symbol(null,"map49664","map49664",1325509263,null),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"validate__37277__auto__","validate__37277__auto__",694432091,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"output-schema49665","output-schema49665",683515773,null),new cljs.core.Symbol(null,"input-checker49667","input-checker49667",-1327269955,null),new cljs.core.Symbol(null,"meta49676","meta49676",-136647776,null)], null);
});})(state,owner,validate__37277__auto__,ufv__,output_schema49665,input_schema49666,input_checker49667,output_checker49668))
;

om_bootstrap.panel.t_om_bootstrap$panel49675.cljs$lang$type = true;

om_bootstrap.panel.t_om_bootstrap$panel49675.cljs$lang$ctorStr = "om-bootstrap.panel/t_om_bootstrap$panel49675";

om_bootstrap.panel.t_om_bootstrap$panel49675.cljs$lang$ctorPrWriter = ((function (state,owner,validate__37277__auto__,ufv__,output_schema49665,input_schema49666,input_checker49667,output_checker49668){
return (function (this__36436__auto__,writer__36437__auto__,opt__36438__auto__){
return cljs.core._write.call(null,writer__36437__auto__,"om-bootstrap.panel/t_om_bootstrap$panel49675");
});})(state,owner,validate__37277__auto__,ufv__,output_schema49665,input_schema49666,input_checker49667,output_checker49668))
;

om_bootstrap.panel.__GT_t_om_bootstrap$panel49675 = ((function (state,owner,validate__37277__auto__,ufv__,output_schema49665,input_schema49666,input_checker49667,output_checker49668){
return (function om_bootstrap$panel$constructor49662_$___GT_t_om_bootstrap$panel49675(owner__$1,constructor49662__$1,input_schema49666__$1,output_checker49668__$1,G__49669__$1,map49664__$1,state__$1,validate__37277__auto____$1,ufv____$1,output_schema49665__$1,input_checker49667__$1,meta49676){
return (new om_bootstrap.panel.t_om_bootstrap$panel49675(owner__$1,constructor49662__$1,input_schema49666__$1,output_checker49668__$1,G__49669__$1,map49664__$1,state__$1,validate__37277__auto____$1,ufv____$1,output_schema49665__$1,input_checker49667__$1,meta49676));
});})(state,owner,validate__37277__auto__,ufv__,output_schema49665,input_schema49666,input_checker49667,output_checker49668))
;

}

return (new om_bootstrap.panel.t_om_bootstrap$panel49675(owner,om_bootstrap$panel$constructor49662,input_schema49666,output_checker49668,G__49669,map49664,state,validate__37277__auto__,ufv__,output_schema49665,input_checker49667,null));
break;
}
})();
if(cljs.core.truth_(validate__37277__auto__)){
var temp__4425__auto___49692 = output_checker49668.call(null,o__37280__auto__);
if(cljs.core.truth_(temp__4425__auto___49692)){
var error__37279__auto___49693 = temp__4425__auto___49692;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor49662","constructor49662",118691556,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__37279__auto___49693)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema49665,new cljs.core.Keyword(null,"value","value",305978217),o__37280__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___49693], null));
} else {
}
} else {
}

return o__37280__auto__;
});})(ufv__,output_schema49665,input_schema49666,input_checker49667,output_checker49668))
,schema.core.make_fn_schema.call(null,output_schema49665,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema49666], null)));
})();
/**
 * Generates a collapsible panel component resposible for its own toggled state.
 * The :collapsed? state is handled through a collapsible mixin.
 */
om_bootstrap.panel.collapsible_panel_STAR_ = ((function (component_fnk__49615__auto___49688){
return (function om_bootstrap$panel$collapsible_panel_STAR_(var_args){
var args__36903__auto__ = [];
var len__36896__auto___49694 = arguments.length;
var i__36897__auto___49695 = (0);
while(true){
if((i__36897__auto___49695 < len__36896__auto___49694)){
args__36903__auto__.push((arguments[i__36897__auto___49695]));

var G__49696 = (i__36897__auto___49695 + (1));
i__36897__auto___49695 = G__49696;
continue;
} else {
}
break;
}

var argseq__36904__auto__ = ((((2) < args__36903__auto__.length))?(new cljs.core.IndexedSeq(args__36903__auto__.slice((2)),(0))):null);
return om_bootstrap.panel.collapsible_panel_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36904__auto__);
});})(component_fnk__49615__auto___49688))
;

om_bootstrap.panel.collapsible_panel_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__49615__auto___49688){
return (function (data__49616__auto__,owner49661,p__49683){
var vec__49684 = p__49683;
var opts__49617__auto__ = cljs.core.nth.call(null,vec__49684,(0),null);
return component_fnk__49615__auto___49688.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner49661),new cljs.core.Keyword(null,"opts","opts",155075701),opts__49617__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner49661,new cljs.core.Keyword(null,"data","data",-232669377),data__49616__auto__], null));
});})(component_fnk__49615__auto___49688))
;

om_bootstrap.panel.collapsible_panel_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.panel.collapsible_panel_STAR_.cljs$lang$applyTo = ((function (component_fnk__49615__auto___49688){
return (function (seq49680){
var G__49681 = cljs.core.first.call(null,seq49680);
var seq49680__$1 = cljs.core.next.call(null,seq49680);
var G__49682 = cljs.core.first.call(null,seq49680__$1);
var seq49680__$2 = cljs.core.next.call(null,seq49680__$1);
return om_bootstrap.panel.collapsible_panel_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__49681,G__49682,seq49680__$2);
});})(component_fnk__49615__auto___49688))
;

om_bootstrap.panel.__GT_collapsible_panel_STAR_ = (function om_bootstrap$panel$__GT_collapsible_panel_STAR_(var_args){
var args49685 = [];
var len__36896__auto___49697 = arguments.length;
var i__36897__auto___49698 = (0);
while(true){
if((i__36897__auto___49698 < len__36896__auto___49697)){
args49685.push((arguments[i__36897__auto___49698]));

var G__49699 = (i__36897__auto___49698 + (1));
i__36897__auto___49698 = G__49699;
continue;
} else {
}
break;
}

var G__49687 = args49685.length;
switch (G__49687) {
case 1:
return om_bootstrap.panel.__GT_collapsible_panel_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.panel.__GT_collapsible_panel_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49685.length)].join('')));

}
});

om_bootstrap.panel.__GT_collapsible_panel_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__49584__auto__){
return om.core.build.call(null,om_bootstrap.panel.collapsible_panel_STAR_,cursor__49584__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.panel.collapsible_panel_STAR_$descriptor], null));
});

om_bootstrap.panel.__GT_collapsible_panel_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__49584__auto__,m49663){
return om.core.build.call(null,om_bootstrap.panel.collapsible_panel_STAR_,cursor__49584__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.panel.collapsible_panel_STAR_$descriptor], null),m49663));
});

om_bootstrap.panel.__GT_collapsible_panel_STAR_.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=panel.js.map