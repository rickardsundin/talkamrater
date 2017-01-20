// Compiled by ClojureScript 1.7.170 {}
goog.provide('talkamrater.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om_bootstrap.panel');
goog.require('om_tools.dom');
goog.require('om_bootstrap.random');
goog.require('om_bootstrap.nav');
goog.require('om.next');
goog.require('om_bootstrap.button');
talkamrater.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),(5)], null));
talkamrater.core.read = (function talkamrater$core$read(p__57398,key,params){
var map__57402 = p__57398;
var map__57402__$1 = ((((!((map__57402 == null)))?((((map__57402.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57402.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57402):map__57402);
var env = map__57402__$1;
var state = cljs.core.get.call(null,map__57402__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.find.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__57404 = temp__4423__auto__;
var _ = cljs.core.nth.call(null,vec__57404,(0),null);
var value = cljs.core.nth.call(null,vec__57404,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}
});
/**
 * Decrease n but avoid going below zero
 */
talkamrater.core.dec_to_zero = (function talkamrater$core$dec_to_zero(n){
var x__36169__auto__ = (n - (1));
var y__36170__auto__ = (0);
return ((x__36169__auto__ > y__36170__auto__) ? x__36169__auto__ : y__36170__auto__);
});
talkamrater.core.mutate = (function talkamrater$core$mutate(p__57405,key,params){
var map__57408 = p__57405;
var map__57408__$1 = ((((!((map__57408 == null)))?((((map__57408.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57408.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57408):map__57408);
var env = map__57408__$1;
var state = cljs.core.get.call(null,map__57408__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"increment","increment",81700043,null),key)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total","total",1916810418)], null)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__57408,map__57408__$1,env,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total","total",1916810418)], null),cljs.core.inc);
});})(map__57408,map__57408__$1,env,state))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"decrement","decrement",915245408,null),key)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total","total",1916810418)], null)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__57408,map__57408__$1,env,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total","total",1916810418)], null),talkamrater.core.dec_to_zero);
});})(map__57408,map__57408__$1,env,state))
], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}
}
});
talkamrater.core.toolbar = (function talkamrater$core$toolbar(this$){
var map__57412 = om.next.props.call(null,this$);
var map__57412__$1 = ((((!((map__57412 == null)))?((((map__57412.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57412.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57412):map__57412);
var total = cljs.core.get.call(null,map__57412__$1,new cljs.core.Keyword(null,"total","total",1916810418));
return om_bootstrap.nav.navbar.call(null,cljs.core.PersistentArrayMap.EMPTY,om_bootstrap.nav.nav.call(null,cljs.core.PersistentArrayMap.EMPTY,om_bootstrap.nav.nav_item.call(null,cljs.core.PersistentArrayMap.EMPTY,om_bootstrap.button.button_group.call(null,cljs.core.PersistentArrayMap.EMPTY,om_bootstrap.button.button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__57412,map__57412__$1,total){
return (function (e){
return om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"decrement","decrement",915245408,null))], null));
});})(map__57412,map__57412__$1,total))
,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),!((total > (0)))], null),om_bootstrap.random.glyphicon.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"glyph","glyph",2119448117),"circle-arrow-left"], null))),om_bootstrap.button.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__57412,map__57412__$1,total){
return (function (e){
return om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"increment","increment",81700043,null))], null));
});})(map__57412,map__57412__$1,total))
], null),om_bootstrap.random.glyphicon.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"glyph","glyph",2119448117),"circle-arrow-right"], null)))))));
});
talkamrater.core.talkamrat = (function talkamrater$core$talkamrat(first,total){
return om_tools.dom.element.call(null,React.DOM.h3,[cljs.core.str(first),cljs.core.str(" + "),cljs.core.str((total - first)),cljs.core.str(" = "),cljs.core.str(total)].join(''),cljs.core.PersistentVector.EMPTY);
});
talkamrater.core.talkamrater = (function talkamrater$core$talkamrater(total){
return om_bootstrap.panel.panel.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"header","header",119441134),om_tools.dom.element.call(null,React.DOM.h2,[cljs.core.str(total),cljs.core.str(":ans talkamrater")].join(''),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"primary"], null),cljs.core.map.call(null,(function (p1__57414_SHARP_){
return talkamrater.core.talkamrat.call(null,p1__57414_SHARP_,total);
}),cljs.core.range.call(null,(total + (1)))));
});
/**
 * @constructor
 */
talkamrater.core.RootView = (function talkamrater$core$RootView(){
var this__52595__auto__ = this;
React.Component.apply(this__52595__auto__,arguments);

if(!((this__52595__auto__.initLocalState == null))){
this__52595__auto__.state = this__52595__auto__.initLocalState();
} else {
this__52595__auto__.state = {};
}

return this__52595__auto__;
});

talkamrater.core.RootView.prototype = goog.object.clone(React.Component.prototype);

var x57419_57431 = talkamrater.core.RootView.prototype;
x57419_57431.componentWillUpdate = ((function (x57419_57431){
return (function (next_props__52531__auto__,next_state__52532__auto__){
var this__52530__auto__ = this;
if(((!((this__52530__auto__ == null)))?(((false) || (this__52530__auto__.om$next$Ident$))?true:false):false)){
var ident__52534__auto___57432 = om.next.ident.call(null,this__52530__auto__,om.next.props.call(null,this__52530__auto__));
var next_ident__52535__auto___57433 = om.next.ident.call(null,this__52530__auto__,om.next._next_props.call(null,next_props__52531__auto__,this__52530__auto__));
if(cljs.core.not_EQ_.call(null,ident__52534__auto___57432,next_ident__52535__auto___57433)){
var idxr__52536__auto___57434 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__52530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__52536__auto___57434 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__52536__auto___57434),((function (idxr__52536__auto___57434,ident__52534__auto___57432,next_ident__52535__auto___57433,this__52530__auto__,x57419_57431){
return (function (indexes__52537__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__52537__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__52534__auto___57432], null),cljs.core.disj,this__52530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__52535__auto___57433], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__52530__auto__);
});})(idxr__52536__auto___57434,ident__52534__auto___57432,next_ident__52535__auto___57433,this__52530__auto__,x57419_57431))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__52530__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__52530__auto__);
});})(x57419_57431))
;

x57419_57431.shouldComponentUpdate = ((function (x57419_57431){
return (function (next_props__52531__auto__,next_state__52532__auto__){
var this__52530__auto__ = this;
var next_children__52533__auto__ = next_props__52531__auto__.children;
var next_props__52531__auto____$1 = goog.object.get(next_props__52531__auto__,"omcljs$value");
var next_props__52531__auto____$2 = (function (){var G__57421 = next_props__52531__auto____$1;
var G__57421__$1 = (((next_props__52531__auto____$1 instanceof om.next.OmProps))?om.next.unwrap.call(null,G__57421):G__57421);
return G__57421__$1;
})();
var or__35838__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__52530__auto__),next_props__52531__auto____$2);
if(or__35838__auto__){
return or__35838__auto__;
} else {
var or__35838__auto____$1 = (function (){var and__35826__auto__ = this__52530__auto__.state;
if(cljs.core.truth_(and__35826__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__52530__auto__.state,"omcljs$state"),goog.object.get(next_state__52532__auto__,"omcljs$state"));
} else {
return and__35826__auto__;
}
})();
if(cljs.core.truth_(or__35838__auto____$1)){
return or__35838__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__52530__auto__.props.children,next_children__52533__auto__);
}
}
});})(x57419_57431))
;

x57419_57431.componentWillUnmount = ((function (x57419_57431){
return (function (){
var this__52530__auto__ = this;
var r__52541__auto__ = om.next.get_reconciler.call(null,this__52530__auto__);
var cfg__52542__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__52541__auto__);
var st__52543__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__52542__auto__);
var indexer__52540__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__52542__auto__);
if(cljs.core.truth_((function (){var and__35826__auto__ = !((st__52543__auto__ == null));
if(and__35826__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__52543__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__52530__auto__], null));
} else {
return and__35826__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__52543__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__52530__auto__);
} else {
}

if((indexer__52540__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__52540__auto__,this__52530__auto__);
}
});})(x57419_57431))
;

x57419_57431.componentDidUpdate = ((function (x57419_57431){
return (function (prev_props__52538__auto__,prev_state__52539__auto__){
var this__52530__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__52530__auto__);
});})(x57419_57431))
;

x57419_57431.isMounted = ((function (x57419_57431){
return (function (){
var this__52530__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__52530__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x57419_57431))
;

x57419_57431.componentWillMount = ((function (x57419_57431){
return (function (){
var this__52530__auto__ = this;
var indexer__52540__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__52530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__52540__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__52540__auto__,this__52530__auto__);
}
});})(x57419_57431))
;

x57419_57431.render = ((function (x57419_57431){
return (function (){
var this__52529__auto__ = this;
var this$ = this__52529__auto__;
var _STAR_reconciler_STAR_57422 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_57423 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_57424 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_57425 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_57426 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__52529__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__52529__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__52529__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__52529__auto__);

om.next._STAR_parent_STAR_ = this__52529__auto__;

try{var map__57427 = om.next.props.call(null,this$);
var map__57427__$1 = ((((!((map__57427 == null)))?((((map__57427.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57427.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57427):map__57427);
var total = cljs.core.get.call(null,map__57427__$1,new cljs.core.Keyword(null,"total","total",1916810418));
return cljs.core.apply.call(null,React.DOM.div,{"className": "container"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "container"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[talkamrater.core.toolbar.call(null,this$)],null)))),cljs.core.apply.call(null,React.DOM.div,{"className": "container text-center"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[talkamrater.core.talkamrater.call(null,total)],null))))],null))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_57426;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_57425;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_57424;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_57423;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_57422;
}});})(x57419_57431))
;


talkamrater.core.RootView.prototype.constructor = talkamrater.core.RootView;

talkamrater.core.RootView.prototype.constructor.displayName = "talkamrater.core/RootView";

talkamrater.core.RootView.prototype.om$isComponent = true;

var x57429_57435 = talkamrater.core.RootView;
x57429_57435.om$next$IQuery$ = true;

x57429_57435.om$next$IQuery$query$arity$1 = ((function (x57429_57435){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total","total",1916810418)], null);
});})(x57429_57435))
;


var x57430_57436 = talkamrater.core.RootView.prototype;
x57430_57436.om$next$IQuery$ = true;

x57430_57436.om$next$IQuery$query$arity$1 = ((function (x57430_57436){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total","total",1916810418)], null);
});})(x57430_57436))
;


talkamrater.core.RootView.cljs$lang$type = true;

talkamrater.core.RootView.cljs$lang$ctorStr = "talkamrater.core/RootView";

talkamrater.core.RootView.cljs$lang$ctorPrWriter = (function (this__52597__auto__,writer__52598__auto__,opt__52599__auto__){
return cljs.core._write.call(null,writer__52598__auto__,"talkamrater.core/RootView");
});
talkamrater.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),talkamrater.core.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),talkamrater.core.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),talkamrater.core.mutate], null))], null));
om.next.add_root_BANG_.call(null,talkamrater.core.reconciler,talkamrater.core.RootView,goog.dom.getElement("app"));

//# sourceMappingURL=core.js.map