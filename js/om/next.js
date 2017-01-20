// Compiled by ClojureScript 1.7.170 {}
goog.provide('om.next');
goog.require('cljs.core');
goog.require('goog.log');
goog.require('goog.string');
goog.require('om.next.cache');
goog.require('clojure.zip');
goog.require('om.next.protocols');
goog.require('om.next.impl.parser');
goog.require('goog.object');
goog.require('clojure.walk');
goog.require('om.util');
goog.require('om.tempid');
goog.require('om.transit');
goog.require('goog.debug.Console');
if(typeof om.next._STAR_logger_STAR_ !== 'undefined'){
} else {
om.next._STAR_logger_STAR_ = ((goog.DEBUG)?(function (){
(new goog.debug.Console()).setCapturing(true);

return goog.log.getLogger("om.next");
})()
:null);
}
om.next.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.next._STAR_raf_STAR_ = null;
om.next._STAR_reconciler_STAR_ = null;
om.next._STAR_parent_STAR_ = null;
om.next._STAR_shared_STAR_ = null;
om.next._STAR_instrument_STAR_ = null;
om.next._STAR_depth_STAR_ = (0);
om.next.nil_or_map_QMARK_ = (function om$next$nil_or_map_QMARK_(x){
return ((x == null)) || (cljs.core.map_QMARK_.call(null,x));
});
/**
 * Given a query expression return its key.
 */
om.next.expr__GT_key = (function om$next$expr__GT_key(expr){
if((expr instanceof cljs.core.Keyword)){
return expr;
} else {
if(cljs.core.map_QMARK_.call(null,expr)){
return cljs.core.ffirst.call(null,expr);
} else {
if(cljs.core.seq_QMARK_.call(null,expr)){
var expr_SINGLEQUOTE_ = cljs.core.first.call(null,expr);
if(cljs.core.map_QMARK_.call(null,expr_SINGLEQUOTE_)){
return cljs.core.ffirst.call(null,expr_SINGLEQUOTE_);
} else {
return null;
}
} else {
if(om.util.ident_QMARK_.call(null,expr)){
var G__52629 = expr;
var G__52629__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.second.call(null,expr)))?cljs.core.first.call(null,G__52629):G__52629);
return G__52629__$1;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Invalid query expr "),cljs.core.str(expr)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("error","invalid-expression","error/invalid-expression",-881565136)], null));

}
}
}
}
});
/**
 * Return a zipper on a query expression.
 */
om.next.query_zip = (function om$next$query_zip(root){
return clojure.zip.zipper.call(null,(function (p1__52630_SHARP_){
return (cljs.core.vector_QMARK_.call(null,p1__52630_SHARP_)) || (cljs.core.map_QMARK_.call(null,p1__52630_SHARP_)) || (cljs.core.seq_QMARK_.call(null,p1__52630_SHARP_));
}),cljs.core.seq,(function (node,children){
var ret = ((cljs.core.vector_QMARK_.call(null,node))?cljs.core.vec.call(null,children):((cljs.core.map_QMARK_.call(null,node))?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,children):((cljs.core.seq_QMARK_.call(null,node))?children:null)));
return cljs.core.with_meta.call(null,ret,cljs.core.meta.call(null,node));
}),root);
});
/**
 * Move from the current zipper location to the specified key. loc must be a
 * hash map node.
 */
om.next.move_to_key = (function om$next$move_to_key(loc,k){
var loc__$1 = clojure.zip.down.call(null,loc);
while(true){
var node = clojure.zip.node.call(null,loc__$1);
if(cljs.core._EQ_.call(null,k,cljs.core.first.call(null,node))){
return clojure.zip.right.call(null,clojure.zip.down.call(null,loc__$1));
} else {
var G__52631 = clojure.zip.right.call(null,loc__$1);
loc__$1 = G__52631;
continue;
}
break;
}
});
/**
 * Given a query and a path into a query return a zipper focused at the location
 * specified by the path. This location can be replaced to customize / alter
 * the query.
 */
om.next.query_template = (function om$next$query_template(query,path){
var query_template_STAR_ = (function om$next$query_template_$_query_template_STAR_(loc,path__$1){
while(true){
if(cljs.core.empty_QMARK_.call(null,path__$1)){
return loc;
} else {
var node = clojure.zip.node.call(null,loc);
if(cljs.core.vector_QMARK_.call(null,node)){
var G__52648 = clojure.zip.down.call(null,loc);
var G__52649 = path__$1;
loc = G__52648;
path__$1 = G__52649;
continue;
} else {
var vec__52646 = path__$1;
var k = cljs.core.nth.call(null,vec__52646,(0),null);
var ks = cljs.core.nthnext.call(null,vec__52646,(1));
var k_SINGLEQUOTE_ = om.next.expr__GT_key.call(null,node);
if(cljs.core.keyword_identical_QMARK_.call(null,k,k_SINGLEQUOTE_)){
if((cljs.core.map_QMARK_.call(null,node)) || ((cljs.core.seq_QMARK_.call(null,node)) && (cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,node))))){
var loc_SINGLEQUOTE_ = om.next.move_to_key.call(null,(function (){var G__52647 = loc;
var G__52647__$1 = ((cljs.core.seq_QMARK_.call(null,node))?clojure.zip.down.call(null,G__52647):G__52647);
return G__52647__$1;
})(),k);
var node_SINGLEQUOTE_ = clojure.zip.node.call(null,loc_SINGLEQUOTE_);
if(cljs.core.map_QMARK_.call(null,node_SINGLEQUOTE_)){
if(cljs.core.seq.call(null,ks)){
var G__52650 = clojure.zip.replace.call(null,loc_SINGLEQUOTE_,clojure.zip.node.call(null,om.next.move_to_key.call(null,loc_SINGLEQUOTE_,cljs.core.first.call(null,ks))));
var G__52651 = cljs.core.next.call(null,ks);
loc = G__52650;
path__$1 = G__52651;
continue;
} else {
return loc_SINGLEQUOTE_;
}
} else {
var G__52652 = loc_SINGLEQUOTE_;
var G__52653 = ks;
loc = G__52652;
path__$1 = G__52653;
continue;
}
} else {
var G__52654 = clojure.zip.right.call(null,clojure.zip.down.call(null,clojure.zip.down.call(null,clojure.zip.down.call(null,loc))));
var G__52655 = ks;
loc = G__52654;
path__$1 = G__52655;
continue;
}
} else {
var G__52656 = clojure.zip.right.call(null,loc);
var G__52657 = path__$1;
loc = G__52656;
path__$1 = G__52657;
continue;
}
}
}
break;
}
});
return query_template_STAR_.call(null,om.next.query_zip.call(null,query),path);
});
om.next.replace = (function om$next$replace(template,new_query){
return clojure.zip.root.call(null,clojure.zip.replace.call(null,template,new_query));
});
om.next.focus_query;
om.next.focused_join = (function om$next$focused_join(expr,ks){
var expr_meta = cljs.core.meta.call(null,expr);
var expr_SINGLEQUOTE_ = ((cljs.core.map_QMARK_.call(null,expr))?cljs.core.PersistentArrayMap.fromArray([cljs.core.ffirst.call(null,expr),om.next.focus_query.call(null,cljs.core.second.call(null,cljs.core.first.call(null,expr)),ks)], true, false):((cljs.core.seq_QMARK_.call(null,expr))?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.second.call(null,expr)),om$next$focused_join.call(null,cljs.core.first.call(null,expr),ks)):expr
));
var G__52659 = expr_SINGLEQUOTE_;
var G__52659__$1 = ((cljs.core.some_QMARK_.call(null,expr_meta))?cljs.core.with_meta.call(null,G__52659,expr_meta):G__52659);
return G__52659__$1;
});
/**
 * Given a query, focus it along the specified path.
 * 
 *   Examples:
 *  (om.next/focus-query [:foo :bar :baz] [:foo])
 *  => [:foo]
 * 
 *  (om.next/focus-query [{:foo [:bar :baz]} :woz] [:foo :bar])
 *  => [{:foo [:bar]}]
 */
om.next.focus_query = (function om$next$focus_query(query,path){
if(cljs.core.empty_QMARK_.call(null,path)){
return query;
} else {
var vec__52661 = path;
var k = cljs.core.nth.call(null,vec__52661,(0),null);
var ks = cljs.core.nthnext.call(null,vec__52661,(1));
var match = ((function (vec__52661,k,ks){
return (function om$next$focus_query_$_match(x){
return cljs.core._EQ_.call(null,k,om.util.join_key.call(null,x));
});})(vec__52661,k,ks))
;
var value = ((function (vec__52661,k,ks){
return (function om$next$focus_query_$_value(x){
return om.next.focused_join.call(null,x,ks);
});})(vec__52661,k,ks))
;
if(cljs.core.map_QMARK_.call(null,query)){
return cljs.core.PersistentArrayMap.fromArray([k,om$next$focus_query.call(null,cljs.core.get.call(null,query,k),ks)], true, false);
} else {
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.comp.call(null,cljs.core.filter.call(null,match),cljs.core.map.call(null,value),cljs.core.take.call(null,(1))),query);
}
}
});
/**
 * Given a focused query return the path represented by the query.
 * 
 * Examples:
 * 
 *   (om.next/focus->path [{:foo [{:bar {:baz []}]}])
 *   => [:foo :bar :baz]
 */
om.next.focus__GT_path = (function om$next$focus__GT_path(var_args){
var args52662 = [];
var len__36896__auto___52666 = arguments.length;
var i__36897__auto___52667 = (0);
while(true){
if((i__36897__auto___52667 < len__36896__auto___52666)){
args52662.push((arguments[i__36897__auto___52667]));

var G__52668 = (i__36897__auto___52667 + (1));
i__36897__auto___52667 = G__52668;
continue;
} else {
}
break;
}

var G__52664 = args52662.length;
switch (G__52664) {
case 1:
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52662.length)].join('')));

}
});

om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$1 = (function (focus){
return om.next.focus__GT_path.call(null,focus,new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.PersistentVector.EMPTY);
});

om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$2 = (function (focus,bound){
return om.next.focus__GT_path.call(null,focus,bound,cljs.core.PersistentVector.EMPTY);
});

om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$3 = (function (focus,bound,path){
while(true){
if(cljs.core.truth_((function (){var and__35826__auto__ = (cljs.core._EQ_.call(null,bound,new cljs.core.Symbol(null,"*","*",345799209,null))) || ((cljs.core.not_EQ_.call(null,path,bound)) && ((cljs.core.count.call(null,path) < cljs.core.count.call(null,bound))));
if(and__35826__auto__){
var and__35826__auto____$1 = cljs.core.some.call(null,om.util.join_QMARK_,focus);
if(cljs.core.truth_(and__35826__auto____$1)){
return ((1) === cljs.core.count.call(null,focus));
} else {
return and__35826__auto____$1;
}
} else {
return and__35826__auto__;
}
})())){
var vec__52665 = om.util.join_entry.call(null,cljs.core.first.call(null,focus));
var k = cljs.core.nth.call(null,vec__52665,(0),null);
var focus_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__52665,(1),null);
var k__$1 = ((om.util.ident_QMARK_.call(null,k))?cljs.core.first.call(null,k):k);
var focus_SINGLEQUOTE___$1 = ((om.util.recursion_QMARK_.call(null,focus_SINGLEQUOTE_))?focus:focus_SINGLEQUOTE_);
var G__52670 = focus_SINGLEQUOTE___$1;
var G__52671 = bound;
var G__52672 = cljs.core.conj.call(null,path,k__$1);
focus = G__52670;
bound = G__52671;
path = G__52672;
continue;
} else {
return path;
}
break;
}
});

om.next.focus__GT_path.cljs$lang$maxFixedArity = 3;

/**
 * @interface
 */
om.next.Ident = function(){};

/**
 * Return the ident for this component
 */
om.next.ident = (function om$next$ident(this$,props){
if((!((this$ == null))) && (!((this$.om$next$Ident$ident$arity$2 == null)))){
return this$.om$next$Ident$ident$arity$2(this$,props);
} else {
var x__36493__auto__ = (((this$ == null))?null:this$);
var m__36494__auto__ = (om.next.ident[goog.typeOf(x__36493__auto__)]);
if(!((m__36494__auto__ == null))){
return m__36494__auto__.call(null,this$,props);
} else {
var m__36494__auto____$1 = (om.next.ident["_"]);
if(!((m__36494__auto____$1 == null))){
return m__36494__auto____$1.call(null,this$,props);
} else {
throw cljs.core.missing_protocol.call(null,"Ident.ident",this$);
}
}
}
});


/**
 * @interface
 */
om.next.IQueryParams = function(){};

/**
 * Return the query parameters
 */
om.next.params = (function om$next$params(this$){
if((!((this$ == null))) && (!((this$.om$next$IQueryParams$params$arity$1 == null)))){
return this$.om$next$IQueryParams$params$arity$1(this$);
} else {
var x__36493__auto__ = (((this$ == null))?null:this$);
var m__36494__auto__ = (om.next.params[goog.typeOf(x__36493__auto__)]);
if(!((m__36494__auto__ == null))){
return m__36494__auto__.call(null,this$);
} else {
var m__36494__auto____$1 = (om.next.params["_"]);
if(!((m__36494__auto____$1 == null))){
return m__36494__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IQueryParams.params",this$);
}
}
}
});

(om.next.IQueryParams["_"] = true);

(om.next.params["_"] = (function (_){
return null;
}));

/**
 * @interface
 */
om.next.IQuery = function(){};

/**
 * Return the component's unbound query
 */
om.next.query = (function om$next$query(this$){
if((!((this$ == null))) && (!((this$.om$next$IQuery$query$arity$1 == null)))){
return this$.om$next$IQuery$query$arity$1(this$);
} else {
var x__36493__auto__ = (((this$ == null))?null:this$);
var m__36494__auto__ = (om.next.query[goog.typeOf(x__36493__auto__)]);
if(!((m__36494__auto__ == null))){
return m__36494__auto__.call(null,this$);
} else {
var m__36494__auto____$1 = (om.next.query["_"]);
if(!((m__36494__auto____$1 == null))){
return m__36494__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IQuery.query",this$);
}
}
}
});


/**
 * @interface
 */
om.next.ILocalState = function(){};

/**
 * Set the component's local state
 */
om.next._set_state_BANG_ = (function om$next$_set_state_BANG_(this$,new_state){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_set_state_BANG_$arity$2 == null)))){
return this$.om$next$ILocalState$_set_state_BANG_$arity$2(this$,new_state);
} else {
var x__36493__auto__ = (((this$ == null))?null:this$);
var m__36494__auto__ = (om.next._set_state_BANG_[goog.typeOf(x__36493__auto__)]);
if(!((m__36494__auto__ == null))){
return m__36494__auto__.call(null,this$,new_state);
} else {
var m__36494__auto____$1 = (om.next._set_state_BANG_["_"]);
if(!((m__36494__auto____$1 == null))){
return m__36494__auto____$1.call(null,this$,new_state);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalState.-set-state!",this$);
}
}
}
});

/**
 * Get the component's local state
 */
om.next._get_state = (function om$next$_get_state(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_get_state$arity$1 == null)))){
return this$.om$next$ILocalState$_get_state$arity$1(this$);
} else {
var x__36493__auto__ = (((this$ == null))?null:this$);
var m__36494__auto__ = (om.next._get_state[goog.typeOf(x__36493__auto__)]);
if(!((m__36494__auto__ == null))){
return m__36494__auto__.call(null,this$);
} else {
var m__36494__auto____$1 = (om.next._get_state["_"]);
if(!((m__36494__auto____$1 == null))){
return m__36494__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalState.-get-state",this$);
}
}
}
});

/**
 * Get the component's rendered local state
 */
om.next._get_rendered_state = (function om$next$_get_rendered_state(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_get_rendered_state$arity$1 == null)))){
return this$.om$next$ILocalState$_get_rendered_state$arity$1(this$);
} else {
var x__36493__auto__ = (((this$ == null))?null:this$);
var m__36494__auto__ = (om.next._get_rendered_state[goog.typeOf(x__36493__auto__)]);
if(!((m__36494__auto__ == null))){
return m__36494__auto__.call(null,this$);
} else {
var m__36494__auto____$1 = (om.next._get_rendered_state["_"]);
if(!((m__36494__auto____$1 == null))){
return m__36494__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalState.-get-rendered-state",this$);
}
}
}
});

/**
 * Get the component's pending local state
 */
om.next._merge_pending_state_BANG_ = (function om$next$_merge_pending_state_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_merge_pending_state_BANG_$arity$1 == null)))){
return this$.om$next$ILocalState$_merge_pending_state_BANG_$arity$1(this$);
} else {
var x__36493__auto__ = (((this$ == null))?null:this$);
var m__36494__auto__ = (om.next._merge_pending_state_BANG_[goog.typeOf(x__36493__auto__)]);
if(!((m__36494__auto__ == null))){
return m__36494__auto__.call(null,this$);
} else {
var m__36494__auto____$1 = (om.next._merge_pending_state_BANG_["_"]);
if(!((m__36494__auto____$1 == null))){
return m__36494__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalState.-merge-pending-state!",this$);
}
}
}
});

om.next.var_QMARK_ = (function om$next$var_QMARK_(x){
var and__35826__auto__ = (x instanceof cljs.core.Symbol);
if(and__35826__auto__){
return goog.string.startsWith([cljs.core.str(x)].join(''),"?");
} else {
return and__35826__auto__;
}
});
om.next.var__GT_keyword = (function om$next$var__GT_keyword(x){
return cljs.core.keyword.call(null,[cljs.core.str(x)].join('').substring((1)));
});
om.next.replace_var = (function om$next$replace_var(expr,params){
if(cljs.core.truth_(om.next.var_QMARK_.call(null,expr))){
return cljs.core.get.call(null,params,om.next.var__GT_keyword.call(null,expr),expr);
} else {
return expr;
}
});
om.next.bind_query = (function om$next$bind_query(query,params){
var qm = cljs.core.meta.call(null,query);
var tr = cljs.core.map.call(null,((function (qm){
return (function (p1__52673_SHARP_){
return om$next$bind_query.call(null,p1__52673_SHARP_,params);
});})(qm))
);
var ret = ((cljs.core.seq_QMARK_.call(null,query))?cljs.core.apply.call(null,cljs.core.list,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,tr,query)):((cljs.core.coll_QMARK_.call(null,query))?cljs.core.into.call(null,cljs.core.empty.call(null,query),tr,query):om.next.replace_var.call(null,query,params)
));
var G__52676 = ret;
var G__52676__$1 = (cljs.core.truth_((function (){var and__35826__auto__ = qm;
if(cljs.core.truth_(and__35826__auto__)){
if(!((ret == null))){
if(((ret.cljs$lang$protocol_mask$partition0$ & (131072))) || (ret.cljs$core$IMeta$)){
return true;
} else {
if((!ret.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMeta,ret);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMeta,ret);
}
} else {
return and__35826__auto__;
}
})())?cljs.core.with_meta.call(null,G__52676,qm):G__52676);
return G__52676__$1;
});
om.next.component_QMARK_;

om.next.get_reconciler;

om.next.props;

om.next.class_path;

om.next.get_indexer;

om.next.path;
om.next.component__GT_query_data = (function om$next$component__GT_query_data(component){
var G__52679 = om.next.get_reconciler.call(null,component);
var G__52679__$1 = (((G__52679 == null))?null:new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(G__52679));
var G__52679__$2 = (((G__52679__$1 == null))?null:new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__52679__$1));
var G__52679__$3 = (((G__52679__$2 == null))?null:cljs.core.deref.call(null,G__52679__$2));
var G__52679__$4 = (((G__52679__$3 == null))?null:new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146).cljs$core$IFn$_invoke$arity$1(G__52679__$3));
var G__52679__$5 = (((G__52679__$4 == null))?null:cljs.core.get.call(null,G__52679__$4,component));
return G__52679__$5;
});
/**
 * Return the unbound query for a component.
 */
om.next.get_unbound_query = (function om$next$get_unbound_query(component){
return new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$2(om.next.component__GT_query_data.call(null,component),om.next.query.call(null,component));
});
/**
 * Return the query params for a component.
 */
om.next.get_params = (function om$next$get_params(component){
return new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$2(om.next.component__GT_query_data.call(null,component),om.next.params.call(null,component));
});
om.next.get_component_query = (function om$next$get_component_query(var_args){
var args52680 = [];
var len__36896__auto___52683 = arguments.length;
var i__36897__auto___52684 = (0);
while(true){
if((i__36897__auto___52684 < len__36896__auto___52683)){
args52680.push((arguments[i__36897__auto___52684]));

var G__52685 = (i__36897__auto___52684 + (1));
i__36897__auto___52684 = G__52685;
continue;
} else {
}
break;
}

var G__52682 = args52680.length;
switch (G__52682) {
case 1:
return om.next.get_component_query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_component_query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52680.length)].join('')));

}
});

om.next.get_component_query.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next.get_component_query.call(null,component,om.next.component__GT_query_data.call(null,component));
});

om.next.get_component_query.cljs$core$IFn$_invoke$arity$2 = (function (component,query_data){
var q = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$2(query_data,om.next.query.call(null,component));
var c_SINGLEQUOTE_ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,q));
if((c_SINGLEQUOTE_ == null)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Query violation, "),cljs.core.str(component),cljs.core.str(" reuses "),cljs.core.str(c_SINGLEQUOTE_),cljs.core.str(" query")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"c'","c'",-167114389,null))))].join('')));
}

return cljs.core.with_meta.call(null,om.next.bind_query.call(null,q,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$2(query_data,om.next.params.call(null,component))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),cljs.core.type.call(null,component)], null));
});

om.next.get_component_query.cljs$lang$maxFixedArity = 2;
om.next.iquery_QMARK_ = (function om$next$iquery_QMARK_(x){
if(((!((x == null)))?(((false) || (x.om$next$IQuery$))?true:false):false)){
return true;
} else {
if(cljs.core.truth_(goog.isFunction(x))){
var x__$1 = Object.create(x.prototype);
if(!((x__$1 == null))){
if((false) || (x__$1.om$next$IQuery$)){
return true;
} else {
return false;
}
} else {
return false;
}
} else {
return null;
}
}
});
/**
 * Return a IQuery/IParams local bound query. Works for component classes
 * and component instances. Does not use the indexer.
 */
om.next.get_class_or_instance_query = (function om$next$get_class_or_instance_query(x){
if(cljs.core.truth_(om.next.component_QMARK_.call(null,x))){
return om.next.get_component_query.call(null,x);
} else {
var q = om.next.query.call(null,x);
var c = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,q));
if((c == null)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Query violation, "),cljs.core.str(x),cljs.core.str(" reuses "),cljs.core.str(c),cljs.core.str(" query")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

return cljs.core.with_meta.call(null,om.next.bind_query.call(null,q,om.next.params.call(null,x)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),x], null));
}
});
/**
 * Return a IQuery/IParams instance bound query. Works for component classes
 * and component instances. See also om.next/full-query.
 */
om.next.get_query = (function om$next$get_query(x){
if(((!((x == null)))?(((false) || (x.om$next$IQuery$))?true:false):false)){
if(cljs.core.truth_(om.next.component_QMARK_.call(null,x))){
var temp__4423__auto__ = om.next.component__GT_query_data.call(null,x);
if(cljs.core.truth_(temp__4423__auto__)){
var query_data = temp__4423__auto__;
return om.next.get_component_query.call(null,x,query_data);
} else {
var cp = om.next.class_path.call(null,x);
var r = om.next.get_reconciler.call(null,x);
var data_path = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.number_QMARK_),om.next.path.call(null,x));
var class_path_query_data = cljs.core.get.call(null,new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,om.next.get_indexer.call(null,r))),cp);
var qs = cljs.core.filter.call(null,((function (cp,r,data_path,class_path_query_data,temp__4423__auto__){
return (function (p1__52691_SHARP_){
return cljs.core._EQ_.call(null,data_path,om.next.focus__GT_path.call(null,clojure.zip.root.call(null,p1__52691_SHARP_),data_path));
});})(cp,r,data_path,class_path_query_data,temp__4423__auto__))
,class_path_query_data);
var qs__$1 = ((cljs.core.empty_QMARK_.call(null,qs))?class_path_query_data:qs);
if(!(cljs.core.empty_QMARK_.call(null,qs__$1))){
return clojure.zip.node.call(null,cljs.core.first.call(null,qs__$1));
} else {
return om.next.get_class_or_instance_query.call(null,x);
}
}
} else {
return om.next.get_class_or_instance_query.call(null,x);
}
} else {
if(cljs.core.truth_(goog.isFunction(x))){
var y = Object.create(x.prototype);
if(((!((y == null)))?(((false) || (y.om$next$IQuery$))?true:false):false)){
var q = om.next.query.call(null,y);
var c = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,q));
if((c == null)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Query violation, "),cljs.core.str(y),cljs.core.str(" reuses "),cljs.core.str(c),cljs.core.str(" query")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

return cljs.core.with_meta.call(null,om.next.bind_query.call(null,q,om.next.params.call(null,y)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),x], null));
} else {
return null;
}
} else {
return null;
}
}
});
om.next.tag = (function om$next$tag(x,class$){
return cljs.core.vary_meta.call(null,x,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),class$);
});

/**
* @constructor
*/
om.next.OmProps = (function (props,basis_t){
this.props = props;
this.basis_t = basis_t;
})

om.next.OmProps.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"basis-t","basis-t",216455797,null)], null);
});

om.next.OmProps.cljs$lang$type = true;

om.next.OmProps.cljs$lang$ctorStr = "om.next/OmProps";

om.next.OmProps.cljs$lang$ctorPrWriter = (function (this__36436__auto__,writer__36437__auto__,opt__36438__auto__){
return cljs.core._write.call(null,writer__36437__auto__,"om.next/OmProps");
});

om.next.__GT_OmProps = (function om$next$__GT_OmProps(props,basis_t){
return (new om.next.OmProps(props,basis_t));
});

om.next.om_props = (function om$next$om_props(props,basis_t){
return (new om.next.OmProps(props,basis_t));
});
om.next.om_props_basis = (function om$next$om_props_basis(om_props){
return om_props.basis_t;
});
om.next.nil_props = om.next.om_props.call(null,null,(-1));
om.next.unwrap = (function om$next$unwrap(om_props){
return om_props.props;
});
om.next.compute_react_key = (function om$next$compute_react_key(cl,props){
var temp__4423__auto__ = new cljs.core.Keyword(null,"react-key","react-key",1337881348).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__4423__auto__)){
var rk = temp__4423__auto__;
return rk;
} else {
var temp__4423__auto____$1 = new cljs.core.Keyword(null,"om-path","om-path",-1911443978).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,props));
if(cljs.core.truth_(temp__4423__auto____$1)){
var idx = temp__4423__auto____$1;
return [cljs.core.str(cl.name),cljs.core.str("_"),cljs.core.str(idx)].join('');
} else {
return undefined;
}
}
});
/**
 * Create a factory constructor from a component class created with
 * om.next/defui.
 */
om.next.factory = (function om$next$factory(var_args){
var args52696 = [];
var len__36896__auto___52704 = arguments.length;
var i__36897__auto___52705 = (0);
while(true){
if((i__36897__auto___52705 < len__36896__auto___52704)){
args52696.push((arguments[i__36897__auto___52705]));

var G__52706 = (i__36897__auto___52705 + (1));
i__36897__auto___52705 = G__52706;
continue;
} else {
}
break;
}

var G__52698 = args52696.length;
switch (G__52698) {
case 1:
return om.next.factory.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.factory.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52696.length)].join('')));

}
});

om.next.factory.cljs$core$IFn$_invoke$arity$1 = (function (class$){
return om.next.factory.call(null,class$,null);
});

om.next.factory.cljs$core$IFn$_invoke$arity$2 = (function (class$,p__52699){
var map__52700 = p__52699;
var map__52700__$1 = ((((!((map__52700 == null)))?((((map__52700.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52700.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52700):map__52700);
var opts = map__52700__$1;
var validator = cljs.core.get.call(null,map__52700__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));
var keyfn = cljs.core.get.call(null,map__52700__$1,new cljs.core.Keyword(null,"keyfn","keyfn",780060332));
if(cljs.core.fn_QMARK_.call(null,class$)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Symbol(null,"class","class",-390430469,null))))].join('')));
}

return ((function (map__52700,map__52700__$1,opts,validator,keyfn){
return (function() { 
var om$next$self__delegate = function (props,children){
if((validator == null)){
} else {
if(cljs.core.truth_(validator.call(null,props))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validator","validator",-325659154,null),new cljs.core.Symbol(null,"props","props",2093813254,null))))].join('')));
}
}

if(cljs.core.truth_(om.next._STAR_instrument_STAR_)){
return om.next._STAR_instrument_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"props","props",453281727),props,new cljs.core.Keyword(null,"children","children",-940561982),children,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"factory","factory",63933746),om$next$self], null));
} else {
var key = ((!((keyfn == null)))?keyfn.call(null,props):om.next.compute_react_key.call(null,class$,props));
var ref = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(props);
var ref__$1 = (function (){var G__52703 = ref;
var G__52703__$1 = (((ref instanceof cljs.core.Keyword))?[cljs.core.str(G__52703)].join(''):G__52703);
return G__52703__$1;
})();
var t = ((!((om.next._STAR_reconciler_STAR_ == null)))?om.next.protocols.basis_t.call(null,om.next._STAR_reconciler_STAR_):(0));
return React.createElement(class$,{"omcljs$value": om.next.om_props.call(null,props,t), "omcljs$instrument": om.next._STAR_instrument_STAR_, "key": key, "omcljs$reactKey": key, "ref": ref__$1, "omcljs$shared": om.next._STAR_shared_STAR_, "omcljs$path": new cljs.core.Keyword(null,"om-path","om-path",-1911443978).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,props)), "omcljs$reconciler": om.next._STAR_reconciler_STAR_, "omcljs$depth": om.next._STAR_depth_STAR_, "omcljs$parent": om.next._STAR_parent_STAR_},om.util.force_children.call(null,children));
}
};
var om$next$self = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__52708__i = 0, G__52708__a = new Array(arguments.length -  1);
while (G__52708__i < G__52708__a.length) {G__52708__a[G__52708__i] = arguments[G__52708__i + 1]; ++G__52708__i;}
  children = new cljs.core.IndexedSeq(G__52708__a,0);
} 
return om$next$self__delegate.call(this,props,children);};
om$next$self.cljs$lang$maxFixedArity = 1;
om$next$self.cljs$lang$applyTo = (function (arglist__52709){
var props = cljs.core.first(arglist__52709);
var children = cljs.core.rest(arglist__52709);
return om$next$self__delegate(props,children);
});
om$next$self.cljs$core$IFn$_invoke$arity$variadic = om$next$self__delegate;
return om$next$self;
})()
;
;})(map__52700,map__52700__$1,opts,validator,keyfn))
});

om.next.factory.cljs$lang$maxFixedArity = 2;
/**
 * Returns true if the argument is an Om component.
 */
om.next.component_QMARK_ = (function om$next$component_QMARK_(x){
if(!((x == null))){
return x.om$isComponent === true;
} else {
return false;
}
});
om.next.state = (function om$next$state(c){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

return c.state;
});
/**
 * PRIVATE: Do not use
 */
om.next.get_prop = (function om$next$get_prop(c,k){
return goog.object.get(c.props,k);
});
om.next.get_props_STAR_ = (function om$next$get_props_STAR_(x,k){
if((x == null)){
return om.next.nil_props;
} else {
var y = goog.object.get(x,k);
if((y == null)){
return om.next.nil_props;
} else {
return y;
}
}
});
om.next.get_prev_props = (function om$next$get_prev_props(x){
return om.next.get_props_STAR_.call(null,x,"omcljs$prev$value");
});
om.next.get_next_props = (function om$next$get_next_props(x){
return om.next.get_props_STAR_.call(null,x,"omcljs$next$value");
});
om.next.get_props = (function om$next$get_props(x){
return om.next.get_props_STAR_.call(null,x,"omcljs$value");
});
/**
 * PRIVATE: Do not use
 */
om.next.set_prop_BANG_ = (function om$next$set_prop_BANG_(c,k,v){
return goog.object.set(c.props,k,v);
});
om.next.get_reconciler = (function om$next$get_reconciler(c){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

return om.next.get_prop.call(null,c,"omcljs$reconciler");
});
om.next.props_STAR_ = (function om$next$props_STAR_(var_args){
var args52710 = [];
var len__36896__auto___52713 = arguments.length;
var i__36897__auto___52714 = (0);
while(true){
if((i__36897__auto___52714 < len__36896__auto___52713)){
args52710.push((arguments[i__36897__auto___52714]));

var G__52715 = (i__36897__auto___52714 + (1));
i__36897__auto___52714 = G__52715;
continue;
} else {
}
break;
}

var G__52712 = args52710.length;
switch (G__52712) {
case 2:
return om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.props_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52710.length)].join('')));

}
});

om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return cljs.core.max_key.call(null,om.next.om_props_basis,x,y);
});

om.next.props_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return cljs.core.max_key.call(null,om.next.om_props_basis,x,om.next.props_STAR_.call(null,y,z));
});

om.next.props_STAR_.cljs$lang$maxFixedArity = 3;
om.next.prev_props_STAR_ = (function om$next$prev_props_STAR_(var_args){
var args52717 = [];
var len__36896__auto___52720 = arguments.length;
var i__36897__auto___52721 = (0);
while(true){
if((i__36897__auto___52721 < len__36896__auto___52720)){
args52717.push((arguments[i__36897__auto___52721]));

var G__52722 = (i__36897__auto___52721 + (1));
i__36897__auto___52721 = G__52722;
continue;
} else {
}
break;
}

var G__52719 = args52717.length;
switch (G__52719) {
case 2:
return om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52717.length)].join('')));

}
});

om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return cljs.core.min_key.call(null,om.next.om_props_basis,x,y);
});

om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return cljs.core.min_key.call(null,om.next.om_props_basis,om.next.props_STAR_.call(null,x,y),om.next.props_STAR_.call(null,y,z));
});

om.next.prev_props_STAR_.cljs$lang$maxFixedArity = 3;
om.next._prev_props = (function om$next$_prev_props(prev_props,component){
var cst = component.state;
var props = component.props;
return om.next.unwrap.call(null,om.next.prev_props_STAR_.call(null,om.next.props_STAR_.call(null,om.next.get_props.call(null,prev_props),om.next.get_prev_props.call(null,cst)),om.next.props_STAR_.call(null,om.next.get_props.call(null,cst),om.next.get_props.call(null,props))));
});
om.next._next_props = (function om$next$_next_props(next_props,component){
return om.next.unwrap.call(null,om.next.props_STAR_.call(null,om.next.get_props.call(null,component.props),om.next.get_props.call(null,next_props),om.next.get_next_props.call(null,component.state)));
});
om.next.merge_pending_props_BANG_ = (function om$next$merge_pending_props_BANG_(c){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

var cst = c.state;
var props = c.props;
var pending = goog.object.get(cst,"omcljs$next$value");
var prev = om.next.props_STAR_.call(null,om.next.get_props.call(null,cst),om.next.get_props.call(null,props));
goog.object.set(cst,"omcljs$prev$value",prev);

if((pending == null)){
return null;
} else {
goog.object.remove(cst,"omcljs$next$value");

return goog.object.set(cst,"omcljs$value",pending);
}
});
om.next.clear_prev_props_BANG_ = (function om$next$clear_prev_props_BANG_(c){
return goog.object.remove(c.state,"omcljs$prev$value");
});
/**
 * Get basis t value for when the component last read its props from
 * the global state.
 */
om.next.t = (function om$next$t(c){
return om.next.om_props_basis.call(null,om.next.props_STAR_.call(null,om.next.get_props.call(null,c.props),om.next.get_props.call(null,c.state)));
});
/**
 * Returns the parent Om component.
 */
om.next.parent = (function om$next$parent(component){
return om.next.get_prop.call(null,component,"omcljs$parent");
});
/**
 * PRIVATE: Returns the render depth (a integer) of the component relative to
 *   the mount root.
 */
om.next.depth = (function om$next$depth(component){
if(om.next.component_QMARK_.call(null,component)){
return om.next.get_prop.call(null,component,"omcljs$depth");
} else {
return null;
}
});
/**
 * Returns the components React key.
 */
om.next.react_key = (function om$next$react_key(component){
return om.next.get_prop.call(null,component,"omcljs$reactKey");
});
/**
 * Returns the component type, regardless of whether the component has been
 * mounted
 */
om.next.react_type = (function om$next$react_type(x){
var or__35838__auto__ = goog.object.get(x,"type");
if(cljs.core.truth_(or__35838__auto__)){
return or__35838__auto__;
} else {
return cljs.core.type.call(null,x);
}
});
/**
 * Returns the component's Om data path.
 */
om.next.path = (function om$next$path(c){
return om.next.get_prop.call(null,c,"omcljs$path");
});
/**
 * Return the global shared properties of the Om Next root. See :shared and
 * :shared-fn reconciler options.
 */
om.next.shared = (function om$next$shared(var_args){
var args52724 = [];
var len__36896__auto___52729 = arguments.length;
var i__36897__auto___52730 = (0);
while(true){
if((i__36897__auto___52730 < len__36896__auto___52729)){
args52724.push((arguments[i__36897__auto___52730]));

var G__52731 = (i__36897__auto___52730 + (1));
i__36897__auto___52730 = G__52731;
continue;
} else {
}
break;
}

var G__52726 = args52724.length;
switch (G__52726) {
case 1:
return om.next.shared.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.shared.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52724.length)].join('')));

}
});

om.next.shared.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next.shared.call(null,component,cljs.core.PersistentVector.EMPTY);
});

om.next.shared.cljs$core$IFn$_invoke$arity$2 = (function (component,k_or_ks){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

var shared = goog.object.get(component.props,"omcljs$shared");
var ks = (function (){var G__52727 = k_or_ks;
var G__52727__$1 = ((!(cljs.core.sequential_QMARK_.call(null,k_or_ks)))?(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__52727],null)):G__52727);
return G__52727__$1;
})();
var G__52728 = shared;
var G__52728__$1 = ((!(cljs.core.empty_QMARK_.call(null,ks)))?cljs.core.get_in.call(null,G__52728,ks):G__52728);
return G__52728__$1;
});

om.next.shared.cljs$lang$maxFixedArity = 2;
om.next.instrument = (function om$next$instrument(component){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

return om.next.get_prop.call(null,component,"omcljs$instrument");
});
om.next.update_props_BANG_ = (function om$next$update_props_BANG_(c,next_props){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

var G__52734 = c.state;
goog.object.set(G__52734,"omcljs$next$value",om.next.om_props.call(null,next_props,om.next.protocols.basis_t.call(null,om.next.get_reconciler.call(null,c))));

return G__52734;
});
/**
 * Return a components props.
 */
om.next.props = (function om$next$props(component){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

return om.next.unwrap.call(null,om.next.props_STAR_.call(null,om.next.get_props.call(null,component.props),om.next.get_props.call(null,component.state)));
});
/**
 * Add computed properties to props. Note will replace any pre-existing
 * computed properties.
 */
om.next.computed = (function om$next$computed(props,computed_map){
if((props == null)){
return null;
} else {
if(cljs.core.vector_QMARK_.call(null,props)){
var G__52737 = props;
var G__52737__$1 = ((!(cljs.core.empty_QMARK_.call(null,computed_map)))?cljs.core.vary_meta.call(null,G__52737,cljs.core.assoc,new cljs.core.Keyword("om.next","computed","om.next/computed",1947886329),computed_map):G__52737);
return G__52737__$1;
} else {
var G__52738 = props;
var G__52738__$1 = ((!(cljs.core.empty_QMARK_.call(null,computed_map)))?cljs.core.assoc.call(null,G__52738,new cljs.core.Keyword("om.next","computed","om.next/computed",1947886329),computed_map):G__52738);
return G__52738__$1;
}
}
});
/**
 * Return the computed properties on a component or its props.
 */
om.next.get_computed = (function om$next$get_computed(var_args){
var args52739 = [];
var len__36896__auto___52744 = arguments.length;
var i__36897__auto___52745 = (0);
while(true){
if((i__36897__auto___52745 < len__36896__auto___52744)){
args52739.push((arguments[i__36897__auto___52745]));

var G__52746 = (i__36897__auto___52745 + (1));
i__36897__auto___52745 = G__52746;
continue;
} else {
}
break;
}

var G__52741 = args52739.length;
switch (G__52741) {
case 1:
return om.next.get_computed.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_computed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52739.length)].join('')));

}
});

om.next.get_computed.cljs$core$IFn$_invoke$arity$1 = (function (x){
return om.next.get_computed.call(null,x,cljs.core.PersistentVector.EMPTY);
});

om.next.get_computed.cljs$core$IFn$_invoke$arity$2 = (function (x,k_or_ks){
if((x == null)){
return null;
} else {
var props = (function (){var G__52742 = x;
var G__52742__$1 = ((om.next.component_QMARK_.call(null,x))?om.next.props.call(null,G__52742):G__52742);
return G__52742__$1;
})();
var ks = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","computed","om.next/computed",1947886329)], null),(function (){var G__52743 = k_or_ks;
var G__52743__$1 = ((!(cljs.core.sequential_QMARK_.call(null,k_or_ks)))?(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__52743],null)):G__52743);
return G__52743__$1;
})());
if(cljs.core.vector_QMARK_.call(null,props)){
return cljs.core.get_in.call(null,cljs.core.meta.call(null,props),ks);
} else {
return cljs.core.get_in.call(null,props,ks);
}
}
});

om.next.get_computed.cljs$lang$maxFixedArity = 2;
om.next.schedule_render_BANG_;
/**
 * Set the component local state of the component. Analogous to React's
 * setState.
 */
om.next.set_state_BANG_ = (function om$next$set_state_BANG_(component,new_state){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

if(((!((component == null)))?(((false) || (component.om$next$ILocalState$))?true:false):false)){
om.next._set_state_BANG_.call(null,component,new_state);
} else {
goog.object.set(component.state,"omcljs$pendingState",new_state);
}

var temp__4423__auto__ = om.next.get_reconciler.call(null,component);
if(cljs.core.truth_(temp__4423__auto__)){
var r = temp__4423__auto__;
om.next.protocols.queue_BANG_.call(null,r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [component], null));

return om.next.schedule_render_BANG_.call(null,r);
} else {
return component.forceUpdate();
}
});
/**
 * Get a component's local state. May provide a single key or a sequential
 * collection of keys for indexed access into the component's local state.
 */
om.next.get_state = (function om$next$get_state(var_args){
var args52750 = [];
var len__36896__auto___52754 = arguments.length;
var i__36897__auto___52755 = (0);
while(true){
if((i__36897__auto___52755 < len__36896__auto___52754)){
args52750.push((arguments[i__36897__auto___52755]));

var G__52756 = (i__36897__auto___52755 + (1));
i__36897__auto___52755 = G__52756;
continue;
} else {
}
break;
}

var G__52752 = args52750.length;
switch (G__52752) {
case 1:
return om.next.get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52750.length)].join('')));

}
});

om.next.get_state.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next.get_state.call(null,component,cljs.core.PersistentVector.EMPTY);
});

om.next.get_state.cljs$core$IFn$_invoke$arity$2 = (function (component,k_or_ks){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

var cst = ((((!((component == null)))?(((false) || (component.om$next$ILocalState$))?true:false):false))?om.next._get_state.call(null,component):(function (){var temp__4425__auto__ = component.state;
if(cljs.core.truth_(temp__4425__auto__)){
var state = temp__4425__auto__;
var or__35838__auto__ = goog.object.get(state,"omcljs$pendingState");
if(cljs.core.truth_(or__35838__auto__)){
return or__35838__auto__;
} else {
return goog.object.get(state,"omcljs$state");
}
} else {
return null;
}
})());
return cljs.core.get_in.call(null,cst,((cljs.core.sequential_QMARK_.call(null,k_or_ks))?k_or_ks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_or_ks], null)));
});

om.next.get_state.cljs$lang$maxFixedArity = 2;
/**
 * Update a component's local state. Similar to Clojure(Script)'s swap!
 */
om.next.update_state_BANG_ = (function om$next$update_state_BANG_(var_args){
var args52758 = [];
var len__36896__auto___52768 = arguments.length;
var i__36897__auto___52769 = (0);
while(true){
if((i__36897__auto___52769 < len__36896__auto___52768)){
args52758.push((arguments[i__36897__auto___52769]));

var G__52770 = (i__36897__auto___52769 + (1));
i__36897__auto___52769 = G__52770;
continue;
} else {
}
break;
}

var G__52767 = args52758.length;
switch (G__52767) {
case 2:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args52758.slice((6)),(0)));
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__36915__auto__);

}
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,f){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component)));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,f,arg0){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component),arg0));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (component,f,arg0,arg1){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component),arg0,arg1));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (component,f,arg0,arg1,arg2){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component),arg0,arg1,arg2));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$6 = (function (component,f,arg0,arg1,arg2,arg3){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component),arg0,arg1,arg2,arg3));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,f,arg0,arg1,arg2,arg3,arg_rest){
return om.next.set_state_BANG_.call(null,component,cljs.core.apply.call(null,f,om.next.get_state.call(null,component),arg0,arg1,arg2,arg3,arg_rest));
});

om.next.update_state_BANG_.cljs$lang$applyTo = (function (seq52759){
var G__52760 = cljs.core.first.call(null,seq52759);
var seq52759__$1 = cljs.core.next.call(null,seq52759);
var G__52761 = cljs.core.first.call(null,seq52759__$1);
var seq52759__$2 = cljs.core.next.call(null,seq52759__$1);
var G__52762 = cljs.core.first.call(null,seq52759__$2);
var seq52759__$3 = cljs.core.next.call(null,seq52759__$2);
var G__52763 = cljs.core.first.call(null,seq52759__$3);
var seq52759__$4 = cljs.core.next.call(null,seq52759__$3);
var G__52764 = cljs.core.first.call(null,seq52759__$4);
var seq52759__$5 = cljs.core.next.call(null,seq52759__$4);
var G__52765 = cljs.core.first.call(null,seq52759__$5);
var seq52759__$6 = cljs.core.next.call(null,seq52759__$5);
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__52760,G__52761,G__52762,G__52763,G__52764,G__52765,seq52759__$6);
});

om.next.update_state_BANG_.cljs$lang$maxFixedArity = (6);
/**
 * Get the rendered state of component. om.next/get-state always returns the
 * up-to-date state.
 */
om.next.get_rendered_state = (function om$next$get_rendered_state(component){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

if(((!((component == null)))?(((false) || (component.om$next$ILocalState$))?true:false):false)){
return om.next._get_rendered_state.call(null,component);
} else {
var G__52775 = component;
var G__52775__$1 = (((G__52775 == null))?null:G__52775.state);
var G__52775__$2 = (((G__52775__$1 == null))?null:goog.object.get(G__52775__$1,"omcljs$state"));
return G__52775__$2;
}
});
om.next.merge_pending_state_BANG_ = (function om$next$merge_pending_state_BANG_(c){
if(((!((c == null)))?(((false) || (c.om$next$ILocalState$))?true:false):false)){
return om.next._merge_pending_state_BANG_.call(null,c);
} else {
var temp__4425__auto__ = (function (){var G__52779 = c;
var G__52779__$1 = (((G__52779 == null))?null:G__52779.state);
var G__52779__$2 = (((G__52779__$1 == null))?null:goog.object.get(G__52779__$1,"omcljs$pendingState"));
return G__52779__$2;
})();
if(cljs.core.truth_(temp__4425__auto__)){
var pending = temp__4425__auto__;
var state = c.state;
var previous = goog.object.get(state,"omcljs$state");
goog.object.remove(state,"omcljs$pendingState");

goog.object.set(state,"omcljs$previousState",previous);

return goog.object.set(state,"omcljs$state",pending);
} else {
return null;
}
}
});
om.next.react_set_state_BANG_ = (function om$next$react_set_state_BANG_(var_args){
var args52780 = [];
var len__36896__auto___52783 = arguments.length;
var i__36897__auto___52784 = (0);
while(true){
if((i__36897__auto___52784 < len__36896__auto___52783)){
args52780.push((arguments[i__36897__auto___52784]));

var G__52785 = (i__36897__auto___52784 + (1));
i__36897__auto___52784 = G__52785;
continue;
} else {
}
break;
}

var G__52782 = args52780.length;
switch (G__52782) {
case 2:
return om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52780.length)].join('')));

}
});

om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,new_state){
return om.next.react_set_state_BANG_.call(null,component,new_state,null);
});

om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,new_state,cb){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

return component.setState({"omcljs$state": new_state},cb);
});

om.next.react_set_state_BANG_.cljs$lang$maxFixedArity = 3;
om.next.full_query;

om.next.to_env;

om.next.schedule_sends_BANG_;

om.next.reconciler_QMARK_;

om.next.ref__GT_components;

om.next.force;
om.next.gather_sends = (function om$next$gather_sends(p__52788,q,remotes){
var map__52793 = p__52788;
var map__52793__$1 = ((((!((map__52793 == null)))?((((map__52793.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52793.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52793):map__52793);
var env = map__52793__$1;
var parser = cljs.core.get.call(null,map__52793__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.call(null,cljs.core.map.call(null,((function (map__52793,map__52793__$1,env,parser){
return (function (p1__52787_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__52787_SHARP_,parser.call(null,env,q,p1__52787_SHARP_)],null));
});})(map__52793,map__52793__$1,env,parser))
),cljs.core.filter.call(null,((function (map__52793,map__52793__$1,env,parser){
return (function (p__52795){
var vec__52796 = p__52795;
var _ = cljs.core.nth.call(null,vec__52796,(0),null);
var v = cljs.core.nth.call(null,vec__52796,(1),null);
return (cljs.core.count.call(null,v) > (0));
});})(map__52793,map__52793__$1,env,parser))
)),remotes);
});
/**
 * Given r (a reconciler) and a query expression including a mutation and
 * any simple reads, return the equivalent query expression where the simple
 * reads have been replaced by the full query for each component that cares about
 * the specified read.
 */
om.next.transform_reads = (function om$next$transform_reads(r,tx){
var with_target = (function om$next$transform_reads_$_with_target(target,q){
if(!((target == null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.force.call(null,cljs.core.first.call(null,q),target)], null);
} else {
return q;
}
});
var add_focused_query = (function om$next$transform_reads_$_add_focused_query(k,target,tx__$1,c){
return cljs.core.into.call(null,tx__$1,om.next.full_query.call(null,c,with_target.call(null,target,om.next.focus_query.call(null,om.next.get_query.call(null,c),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null)))));
});
var exprs = cljs.core.seq.call(null,tx);
var tx_SINGLEQUOTE_ = cljs.core.PersistentVector.EMPTY;
while(true){
if(!((exprs == null))){
var expr = cljs.core.first.call(null,exprs);
var ast = om.next.impl.parser.expr__GT_ast.call(null,expr);
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
var tgt = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(ast);
if((key instanceof cljs.core.Keyword)){
var G__52799 = cljs.core.next.call(null,exprs);
var G__52800 = cljs.core.reduce.call(null,((function (exprs,tx_SINGLEQUOTE_,expr,ast,key,tgt){
return (function (p1__52797_SHARP_,p2__52798_SHARP_){
return add_focused_query.call(null,key,tgt,p1__52797_SHARP_,p2__52798_SHARP_);
});})(exprs,tx_SINGLEQUOTE_,expr,ast,key,tgt))
,tx_SINGLEQUOTE_,om.next.ref__GT_components.call(null,r,key));
exprs = G__52799;
tx_SINGLEQUOTE_ = G__52800;
continue;
} else {
var G__52801 = cljs.core.next.call(null,exprs);
var G__52802 = cljs.core.conj.call(null,tx_SINGLEQUOTE_,expr);
exprs = G__52801;
tx_SINGLEQUOTE_ = G__52802;
continue;
}
} else {
return tx_SINGLEQUOTE_;
}
break;
}
});
/**
 * Change the query of a component. Takes a map containing :params and/or
 * :query. :params should be a map of new bindings and :query should be a query
 * expression. Will schedule a re-render as well as remote re-sends if
 * necessary.
 */
om.next.set_query_BANG_ = (function om$next$set_query_BANG_(var_args){
var args52803 = [];
var len__36896__auto___52810 = arguments.length;
var i__36897__auto___52811 = (0);
while(true){
if((i__36897__auto___52811 < len__36896__auto___52810)){
args52803.push((arguments[i__36897__auto___52811]));

var G__52812 = (i__36897__auto___52811 + (1));
i__36897__auto___52811 = G__52812;
continue;
} else {
}
break;
}

var G__52805 = args52803.length;
switch (G__52805) {
case 2:
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52803.length)].join('')));

}
});

om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (x,params_AMPERSAND_query){
return om.next.set_query_BANG_.call(null,x,params_AMPERSAND_query,null);
});

om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (x,p__52806,reads){
var map__52807 = p__52806;
var map__52807__$1 = ((((!((map__52807 == null)))?((((map__52807.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52807.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52807):map__52807);
var params = cljs.core.get.call(null,map__52807__$1,new cljs.core.Keyword(null,"params","params",710516235));
var query = cljs.core.get.call(null,map__52807__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
if(cljs.core.truth_((function (){var or__35838__auto__ = om.next.reconciler_QMARK_.call(null,x);
if(cljs.core.truth_(or__35838__auto__)){
return or__35838__auto__;
} else {
return om.next.component_QMARK_.call(null,x);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"reconciler?","reconciler?",250756342,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))))].join('')));
}

if((!((params == null))) || (!((query == null)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"params","params",-1943919534,null))),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"query","query",352022017,null))))))].join('')));
}

if(((reads == null)) || (cljs.core.vector_QMARK_.call(null,reads))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"reads","reads",425464166,null)),cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"reads","reads",425464166,null)))))].join('')));
}

var r = ((om.next.component_QMARK_.call(null,x))?om.next.get_reconciler.call(null,x):x);
var c = ((om.next.component_QMARK_.call(null,x))?x:null);
var root = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(r)));
var cfg = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r);
var st = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg);
var id = cljs.core.random_uuid.call(null);
var _ = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cfg).add(id,cljs.core.deref.call(null,st));
var temp__4425__auto___52814 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(cfg);
if(cljs.core.truth_(temp__4425__auto___52814)){
var l_52815 = temp__4425__auto___52814;
goog.log.info(l_52815,[cljs.core.str((function (){var temp__4425__auto____$1 = ((((!((c == null)))?(((false) || (c.om$next$Ident$))?true:false):false))?om.next.ident.call(null,c,om.next.props.call(null,c)):null);
if(cljs.core.truth_(temp__4425__auto____$1)){
var ident = temp__4425__auto____$1;
return [cljs.core.str(cljs.core.pr_str.call(null,ident)),cljs.core.str(" ")].join('');
} else {
return null;
}
})()),cljs.core.str((cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?"reconciler ":null)),cljs.core.str((cljs.core.truth_(query)?(function (){


return ", ";
})()
:null)),cljs.core.str((cljs.core.truth_(params)?(function (){


return " ";
})()
:null)),cljs.core.str(cljs.core.pr_str.call(null,id))].join(''));
} else {
}

cljs.core.swap_BANG_.call(null,st,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),(function (){var or__35838__auto__ = c;
if(cljs.core.truth_(or__35838__auto__)){
return or__35838__auto__;
} else {
return root;
}
})()], null),cljs.core.merge,cljs.core.merge.call(null,(cljs.core.truth_(query)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),query], null):null),(cljs.core.truth_(params)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),params], null):null)));

if((!((c == null))) && ((reads == null))){
om.next.protocols.queue_BANG_.call(null,r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c], null));
} else {
}

if((reads == null)){
} else {
om.next.protocols.queue_BANG_.call(null,r,reads);
}

om.next.protocols.reindex_BANG_.call(null,r);

var rootq_52816 = ((!((c == null)))?om.next.full_query.call(null,c):(((reads == null))?om.next.get_query.call(null,root):null));
var sends_52817 = om.next.gather_sends.call(null,om.next.to_env.call(null,cfg),cljs.core.into.call(null,(function (){var or__35838__auto__ = rootq_52816;
if(cljs.core.truth_(or__35838__auto__)){
return or__35838__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),om.next.transform_reads.call(null,r,reads)),new cljs.core.Keyword(null,"remotes","remotes",1132366312).cljs$core$IFn$_invoke$arity$1(cfg));
if(cljs.core.empty_QMARK_.call(null,sends_52817)){
} else {
om.next.protocols.queue_sends_BANG_.call(null,r,sends_52817);

om.next.schedule_sends_BANG_.call(null,r);
}

return null;
});

om.next.set_query_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Update a component's query and query parameters with a function.
 */
om.next.update_query_BANG_ = (function om$next$update_query_BANG_(var_args){
var args52818 = [];
var len__36896__auto___52828 = arguments.length;
var i__36897__auto___52829 = (0);
while(true){
if((i__36897__auto___52829 < len__36896__auto___52828)){
args52818.push((arguments[i__36897__auto___52829]));

var G__52830 = (i__36897__auto___52829 + (1));
i__36897__auto___52829 = G__52830;
continue;
} else {
}
break;
}

var G__52827 = args52818.length;
switch (G__52827) {
case 2:
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args52818.slice((6)),(0)));
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__36915__auto__);

}
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,f){
return om.next.set_query_BANG_.call(null,component,f.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),om.next.get_unbound_query.call(null,component),new cljs.core.Keyword(null,"params","params",710516235),om.next.get_params.call(null,component)], null)));
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,f,arg0){
return om.next.set_query_BANG_.call(null,component,f.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),om.next.get_unbound_query.call(null,component),new cljs.core.Keyword(null,"params","params",710516235),om.next.get_params.call(null,component)], null),arg0));
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (component,f,arg0,arg1){
return om.next.set_query_BANG_.call(null,component,f.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),om.next.get_unbound_query.call(null,component),new cljs.core.Keyword(null,"params","params",710516235),om.next.get_params.call(null,component)], null),arg0,arg1));
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (component,f,arg0,arg1,arg2){
return om.next.set_query_BANG_.call(null,component,f.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),om.next.get_unbound_query.call(null,component),new cljs.core.Keyword(null,"params","params",710516235),om.next.get_params.call(null,component)], null),arg0,arg1,arg2));
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,f,arg0,arg1,arg2,arg3,arg_rest){
return cljs.core.apply.call(null,om.next.set_query_BANG_,component,f.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),om.next.get_unbound_query.call(null,component),new cljs.core.Keyword(null,"params","params",710516235),om.next.get_params.call(null,component)], null),arg0,arg1,arg2,arg3,arg_rest));
});

om.next.update_query_BANG_.cljs$lang$applyTo = (function (seq52819){
var G__52820 = cljs.core.first.call(null,seq52819);
var seq52819__$1 = cljs.core.next.call(null,seq52819);
var G__52821 = cljs.core.first.call(null,seq52819__$1);
var seq52819__$2 = cljs.core.next.call(null,seq52819__$1);
var G__52822 = cljs.core.first.call(null,seq52819__$2);
var seq52819__$3 = cljs.core.next.call(null,seq52819__$2);
var G__52823 = cljs.core.first.call(null,seq52819__$3);
var seq52819__$4 = cljs.core.next.call(null,seq52819__$3);
var G__52824 = cljs.core.first.call(null,seq52819__$4);
var seq52819__$5 = cljs.core.next.call(null,seq52819__$4);
var G__52825 = cljs.core.first.call(null,seq52819__$5);
var seq52819__$6 = cljs.core.next.call(null,seq52819__$5);
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__52820,G__52821,G__52822,G__52823,G__52824,G__52825,seq52819__$6);
});

om.next.update_query_BANG_.cljs$lang$maxFixedArity = (6);
/**
 * Returns true if the component is mounted.
 */
om.next.mounted_QMARK_ = (function om$next$mounted_QMARK_(x){
return (om.next.component_QMARK_.call(null,x)) && (x.isMounted());
});
/**
 * Returns the component associated with a component's React ref.
 */
om.next.react_ref = (function om$next$react_ref(component,name){
var G__52833 = component.refs;
var G__52833__$1 = (((G__52833 == null))?null:goog.object.get(G__52833,name));
return G__52833__$1;
});
/**
 * Returns the component's children.
 */
om.next.children = (function om$next$children(component){
return component.props.children;
});
om.next.update_component_BANG_ = (function om$next$update_component_BANG_(c,next_props){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

om.next.update_props_BANG_.call(null,c,next_props);

return c.forceUpdate();
});
om.next.should_update_QMARK_ = (function om$next$should_update_QMARK_(var_args){
var args52834 = [];
var len__36896__auto___52837 = arguments.length;
var i__36897__auto___52838 = (0);
while(true){
if((i__36897__auto___52838 < len__36896__auto___52837)){
args52834.push((arguments[i__36897__auto___52838]));

var G__52839 = (i__36897__auto___52838 + (1));
i__36897__auto___52838 = G__52839;
continue;
} else {
}
break;
}

var G__52836 = args52834.length;
switch (G__52836) {
case 2:
return om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52834.length)].join('')));

}
});

om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (c,next_props){
return om.next.should_update_QMARK_.call(null,c,next_props,null);
});

om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (c,next_props,next_state){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

return c.shouldComponentUpdate({"omcljs$value": next_props},{"omcljs$state": next_state});
});

om.next.should_update_QMARK_.cljs$lang$maxFixedArity = 3;
om.next.class_path = (function om$next$class_path(c){

new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.component_QMARK_.call(null,c)], null)], null);

var c__$1 = c;
var ret = cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.type.call(null,c__$1));
while(true){
var temp__4423__auto__ = om.next.parent.call(null,c__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var p = temp__4423__auto__;
if(om.next.iquery_QMARK_.call(null,p)){
var G__52841 = p;
var G__52842 = cljs.core.cons.call(null,cljs.core.type.call(null,p),ret);
c__$1 = G__52841;
ret = G__52842;
continue;
} else {
var G__52843 = p;
var G__52844 = ret;
c__$1 = G__52843;
ret = G__52844;
continue;
}
} else {
var seen = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.take_while.call(null,((function (c__$1,ret,seen,temp__4423__auto__){
return (function (x){
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,seen),x)){
return null;
} else {
cljs.core.swap_BANG_.call(null,seen,cljs.core.conj,x);

return x;
}
});})(c__$1,ret,seen,temp__4423__auto__))
,ret);
}
break;
}
});
/**
 * Given a class or mounted component x and a ref to an instantiated component
 * or class that defines a subquery, pick the most specific subquery. If the
 * component is mounted subquery-ref will be used, subquery-class otherwise.
 */
om.next.subquery = (function om$next$subquery(x,subquery_ref,subquery_class){
if(((subquery_ref instanceof cljs.core.Keyword)) || (typeof subquery_ref === 'string')){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"subquery-ref","subquery-ref",1353295365,null)),cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"subquery-ref","subquery-ref",1353295365,null)))))].join('')));
}

if(cljs.core.fn_QMARK_.call(null,subquery_class)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Symbol(null,"subquery-class","subquery-class",-917164088,null))))].join('')));
}

var ref = (function (){var G__52846 = subquery_ref;
var G__52846__$1 = (((subquery_ref instanceof cljs.core.Keyword))?[cljs.core.str(G__52846)].join(''):G__52846);
return G__52846__$1;
})();
if((om.next.component_QMARK_.call(null,x)) && (om.next.mounted_QMARK_.call(null,x))){
return om.next.get_query.call(null,om.next.react_ref.call(null,x,ref));
} else {
return om.next.get_query.call(null,subquery_class);
}
});
om.next.get_ident = (function om$next$get_ident(x){

new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.component_QMARK_.call(null,x)], null)], null);

var m = om.next.props.call(null,x);
if(!((m == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("get-ident invoked on component with nil props"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

return om.next.ident.call(null,x,m);
});
om.next.reconciler_QMARK_;
om.next.basis_t = (function om$next$basis_t(reconciler){
return om.next.protocols.basis_t.call(null,reconciler);
});
om.next.schedule_render_BANG_ = (function om$next$schedule_render_BANG_(reconciler){
if(cljs.core.truth_(om.next.protocols.schedule_render_BANG_.call(null,reconciler))){
var f = (function (){
return om.next.protocols.reconcile_BANG_.call(null,reconciler);
});
if(cljs.core.fn_QMARK_.call(null,om.next._STAR_raf_STAR_)){
return om.next._STAR_raf_STAR_.call(null,f);
} else {
if(!(typeof requestAnimationFrame !== 'undefined')){
return setTimeout(f,(16));
} else {
return requestAnimationFrame(f);

}
}
} else {
return null;
}
});
om.next.schedule_sends_BANG_ = (function om$next$schedule_sends_BANG_(reconciler){
if(cljs.core.truth_(om.next.protocols.schedule_sends_BANG_.call(null,reconciler))){
return setTimeout((function (){
return om.next.protocols.send_BANG_.call(null,reconciler);
}),(0));
} else {
return null;
}
});
om.next.remove_root_BANG_;
/**
 * Given a root component class and a target root DOM node, instantiate and
 * render the root class using the reconciler's :state property. The reconciler
 * will continue to observe changes to :state and keep the target node in sync.
 * Note a reconciler may have only one root. If invoked on a reconciler with an
 * existing root, the new root will replace the old one.
 */
om.next.add_root_BANG_ = (function om$next$add_root_BANG_(var_args){
var args52847 = [];
var len__36896__auto___52850 = arguments.length;
var i__36897__auto___52851 = (0);
while(true){
if((i__36897__auto___52851 < len__36896__auto___52850)){
args52847.push((arguments[i__36897__auto___52851]));

var G__52852 = (i__36897__auto___52851 + (1));
i__36897__auto___52851 = G__52852;
continue;
} else {
}
break;
}

var G__52849 = args52847.length;
switch (G__52849) {
case 3:
return om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52847.length)].join('')));

}
});

om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (reconciler,root_class,target){
return om.next.add_root_BANG_.call(null,reconciler,root_class,target,null);
});

om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (reconciler,root_class,target,options){
if(cljs.core.truth_(om.next.reconciler_QMARK_.call(null,reconciler))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"reconciler?","reconciler?",250756342,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null))))].join('')));
}

if(cljs.core.fn_QMARK_.call(null,root_class)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Symbol(null,"root-class","root-class",1372859229,null))))].join('')));
}

var temp__4425__auto___52854 = cljs.core.get.call(null,cljs.core.deref.call(null,om.next.roots),target);
if(cljs.core.truth_(temp__4425__auto___52854)){
var old_reconciler_52855 = temp__4425__auto___52854;
om.next.remove_root_BANG_.call(null,old_reconciler_52855,target);
} else {
}

cljs.core.swap_BANG_.call(null,om.next.roots,cljs.core.assoc,target,reconciler);

return om.next.protocols.add_root_BANG_.call(null,reconciler,root_class,target,options);
});

om.next.add_root_BANG_.cljs$lang$maxFixedArity = 4;
/**
 * Remove a root target (a DOM element) from a reconciler. The reconciler will
 * no longer attempt to reconcile application state with the specified root.
 */
om.next.remove_root_BANG_ = (function om$next$remove_root_BANG_(reconciler,target){
return om.next.protocols.remove_root_BANG_.call(null,reconciler,target);
});

/**
 * @interface
 */
om.next.ITxIntercept = function(){};

/**
 * An optional protocol that component may implement to intercept child
 *   transactions.
 */
om.next.tx_intercept = (function om$next$tx_intercept(c,tx){
if((!((c == null))) && (!((c.om$next$ITxIntercept$tx_intercept$arity$2 == null)))){
return c.om$next$ITxIntercept$tx_intercept$arity$2(c,tx);
} else {
var x__36493__auto__ = (((c == null))?null:c);
var m__36494__auto__ = (om.next.tx_intercept[goog.typeOf(x__36493__auto__)]);
if(!((m__36494__auto__ == null))){
return m__36494__auto__.call(null,c,tx);
} else {
var m__36494__auto____$1 = (om.next.tx_intercept["_"]);
if(!((m__36494__auto____$1 == null))){
return m__36494__auto____$1.call(null,c,tx);
} else {
throw cljs.core.missing_protocol.call(null,"ITxIntercept.tx-intercept",c);
}
}
}
});

om.next.to_env = (function om$next$to_env(x){
var config = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(x):x);
return cljs.core.select_keys.call(null,config,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.Keyword(null,"logger","logger",-220675947),new cljs.core.Keyword(null,"pathopt","pathopt",-61073149)], null));
});
om.next.transact_STAR_ = (function om$next$transact_STAR_(r,c,ref,tx){
var cfg = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r);
var ref__$1 = (cljs.core.truth_((function (){var and__35826__auto__ = c;
if(cljs.core.truth_(and__35826__auto__)){
var and__35826__auto____$1 = ((!((c == null)))?(((false) || (c.om$next$Ident$))?true:false):false);
if(and__35826__auto____$1){
return cljs.core.not.call(null,ref);
} else {
return and__35826__auto____$1;
}
} else {
return and__35826__auto__;
}
})())?om.next.ident.call(null,c,om.next.props.call(null,c)):ref);
var env = cljs.core.merge.call(null,om.next.to_env.call(null,cfg),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),r,new cljs.core.Keyword(null,"component","component",1555936782),c], null),(cljs.core.truth_(ref__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref__$1], null):null));
var id = cljs.core.random_uuid.call(null);
var _ = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cfg).add(id,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg)));
var ___$1 = (function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(cfg);
if(cljs.core.truth_(temp__4425__auto__)){
var l = temp__4425__auto__;
return goog.log.info(l,[cljs.core.str((cljs.core.truth_(ref__$1)?[cljs.core.str(cljs.core.pr_str.call(null,ref__$1)),cljs.core.str(" ")].join(''):null)),cljs.core.str("transacted '"),cljs.core.str(tx),cljs.core.str(", "),cljs.core.str(cljs.core.pr_str.call(null,id))].join(''));
} else {
return null;
}
})();
var v = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(cfg).call(null,env,tx);
var snds = om.next.gather_sends.call(null,env,tx,new cljs.core.Keyword(null,"remotes","remotes",1132366312).cljs$core$IFn$_invoke$arity$1(cfg));
var q = (function (){var G__52861 = cljs.core.PersistentVector.EMPTY;
var G__52861__$1 = ((!((c == null)))?cljs.core.conj.call(null,G__52861,c):G__52861);
var G__52861__$2 = ((!((ref__$1 == null)))?cljs.core.conj.call(null,G__52861__$1,ref__$1):G__52861__$1);
return G__52861__$2;
})();
om.next.protocols.queue_BANG_.call(null,r,cljs.core.into.call(null,q,cljs.core.remove.call(null,cljs.core.symbol_QMARK_),cljs.core.keys.call(null,v)));

if(cljs.core.empty_QMARK_.call(null,snds)){
return null;
} else {
om.next.protocols.queue_sends_BANG_.call(null,r,snds);

return om.next.schedule_sends_BANG_.call(null,r);
}
});
/**
 * Given a query expression annotate all mutations by adding a :mutator -> ident
 * entry to the metadata of each mutation expression in the query.
 */
om.next.annotate_mutations = (function om$next$annotate_mutations(tx,ident){
var annotate = (function om$next$annotate_mutations_$_annotate(expr,ident__$1){
var G__52870 = expr;
var G__52870__$1 = ((om.util.mutation_QMARK_.call(null,expr))?cljs.core.vary_meta.call(null,G__52870,cljs.core.assoc,new cljs.core.Keyword(null,"mutator","mutator",-1326825366),ident__$1):G__52870);
return G__52870__$1;
});
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__52862_SHARP_){
return annotate.call(null,p1__52862_SHARP_,ident);
})),tx);
});
/**
 * Given a reconciler or component run a transaction. tx is a parse expression
 * that should include mutations followed by any necessary read. The reads will
 * be used to trigger component re-rendering.
 * 
 * Example:
 * 
 *   (om/transact! widget
 *     '[(do/this!) (do/that!)
 *       :read/this :read/that])
 */
om.next.transact_BANG_ = (function om$next$transact_BANG_(var_args){
var args52871 = [];
var len__36896__auto___52879 = arguments.length;
var i__36897__auto___52880 = (0);
while(true){
if((i__36897__auto___52880 < len__36896__auto___52879)){
args52871.push((arguments[i__36897__auto___52880]));

var G__52881 = (i__36897__auto___52880 + (1));
i__36897__auto___52880 = G__52881;
continue;
} else {
}
break;
}

var G__52873 = args52871.length;
switch (G__52873) {
case 2:
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52871.length)].join('')));

}
});

om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (x,tx){
if(cljs.core.truth_((function (){var or__35838__auto__ = om.next.component_QMARK_.call(null,x);
if(or__35838__auto__){
return or__35838__auto__;
} else {
return om.next.reconciler_QMARK_.call(null,x);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"reconciler?","reconciler?",250756342,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))))].join('')));
}

if(cljs.core.vector_QMARK_.call(null,tx)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"tx","tx",2107161945,null))))].join('')));
}

var tx__$1 = (function (){var G__52874 = tx;
var G__52874__$1 = (((function (){var and__35826__auto__ = om.next.component_QMARK_.call(null,x);
if(and__35826__auto__){
if(!((x == null))){
if((false) || (x.om$next$Ident$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.next.Ident,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.next.Ident,x);
}
} else {
return and__35826__auto__;
}
})())?om.next.annotate_mutations.call(null,G__52874,om.next.get_ident.call(null,x)):G__52874);
return G__52874__$1;
})();
if(cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))){
return om.next.transact_STAR_.call(null,x,null,null,tx__$1);
} else {
if(om.next.iquery_QMARK_.call(null,x)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("transact! invoked by component "),cljs.core.str(x),cljs.core.str(" that does not implement IQuery")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"iquery?","iquery?",951893833,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))].join('')));
}

var p = om.next.parent.call(null,x);
var x__$1 = x;
var tx__$2 = tx__$1;
while(true){
if((p == null)){
var r = om.next.get_reconciler.call(null,x__$1);
return om.next.transact_STAR_.call(null,r,x__$1,null,om.next.transform_reads.call(null,r,tx__$2));
} else {
var vec__52877 = ((((!((p == null)))?(((false) || (p.om$next$ITxIntercept$))?true:false):false))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,om.next.tx_intercept.call(null,p,tx__$2)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,tx__$2], null));
var x_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__52877,(0),null);
var tx__$3 = cljs.core.nth.call(null,vec__52877,(1),null);
var G__52883 = om.next.parent.call(null,p);
var G__52884 = x_SINGLEQUOTE_;
var G__52885 = tx__$3;
p = G__52883;
x__$1 = G__52884;
tx__$2 = G__52885;
continue;
}
break;
}
}
});

om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (r,ref,tx){
return om.next.transact_STAR_.call(null,r,null,ref,tx);
});

om.next.transact_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Create a parser. The argument is a map of two keys, :read and :mutate. Both
 * functions should have the signature (Env -> Key -> Params -> ParseResult).
 */
om.next.parser = (function om$next$parser(p__52886){
var map__52889 = p__52886;
var map__52889__$1 = ((((!((map__52889 == null)))?((((map__52889.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52889.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52889):map__52889);
var opts = map__52889__$1;
var read = cljs.core.get.call(null,map__52889__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var mutate = cljs.core.get.call(null,map__52889__$1,new cljs.core.Keyword(null,"mutate","mutate",1422419038));
if(cljs.core.map_QMARK_.call(null,opts)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null))))].join('')));
}

return om.next.impl.parser.parser.call(null,opts);
});
/**
 * Helper function for implementing :read and :mutate as multimethods. Use this
 * as the dispatch-fn.
 */
om.next.dispatch = (function om$next$dispatch(_,key,___$1){
return key;
});
/**
 * Given a query expression convert it into an AST.
 */
om.next.query__GT_ast = (function om$next$query__GT_ast(query_expr){
return om.next.impl.parser.query__GT_ast.call(null,query_expr);
});
om.next.ast__GT_query = (function om$next$ast__GT_query(query_ast){

return om.next.impl.parser.ast__GT_expr.call(null,query_ast,true);
});
/**
 * Cascades a query up the classpath. class-path->query is a map of classpaths
 * to their queries. classpath is the classpath where we start cascading (typically
 * the direct parent's classpath of the component changing query). data-path is
 * the data path in the classpath's query to the new query. new-query is the
 * query to be applied to the classpaths. union-keys are any keys into union
 * queries found during index building; they are used to access union queries
 * when cascading the classpath, and to generate the classpaths' rendered-paths,
 * which skip these keys.
 */
om.next.cascade_query = (function om$next$cascade_query(class_path__GT_query,classpath,data_path,new_query,union_keys){
var cp = classpath;
var data_path__$1 = data_path;
var new_query__$1 = new_query;
var ret = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(!(cljs.core.empty_QMARK_.call(null,cp))){
var rendered_data_path = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.set.call(null,union_keys)),data_path__$1);
var filter_data_path = (function (){var G__52893 = rendered_data_path;
var G__52893__$1 = ((!(cljs.core.empty_QMARK_.call(null,rendered_data_path)))?cljs.core.pop.call(null,G__52893):G__52893);
return G__52893__$1;
})();
var qs = cljs.core.filter.call(null,((function (cp,data_path__$1,new_query__$1,ret,rendered_data_path,filter_data_path){
return (function (p1__52891_SHARP_){
return cljs.core._EQ_.call(null,filter_data_path,om.next.focus__GT_path.call(null,clojure.zip.root.call(null,p1__52891_SHARP_),filter_data_path));
});})(cp,data_path__$1,new_query__$1,ret,rendered_data_path,filter_data_path))
,cljs.core.get.call(null,class_path__GT_query,cp));
var qs_SINGLEQUOTE_ = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,((function (cp,data_path__$1,new_query__$1,ret,rendered_data_path,filter_data_path,qs){
return (function (q){
var new_query__$2 = (cljs.core.truth_((function (){var or__35838__auto__ = cljs.core.map_QMARK_.call(null,clojure.zip.node.call(null,q));
if(or__35838__auto__){
return or__35838__auto__;
} else {
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([cljs.core.peek.call(null,data_path__$1)], true),union_keys);
}
})())?(function (){var union_key = cljs.core.peek.call(null,data_path__$1);
return cljs.core.assoc.call(null,clojure.zip.node.call(null,om.next.query_template.call(null,clojure.zip.root.call(null,q),rendered_data_path)),union_key,new_query__$1);
})():new_query__$1);
return om.next.query_template.call(null,om.next.focus_query.call(null,om.next.replace.call(null,om.next.query_template.call(null,clojure.zip.root.call(null,q),rendered_data_path),new_query__$2),filter_data_path),filter_data_path);
});})(cp,data_path__$1,new_query__$1,ret,rendered_data_path,filter_data_path,qs))
),qs);
var G__52894 = cljs.core.pop.call(null,cp);
var G__52895 = cljs.core.pop.call(null,data_path__$1);
var G__52896 = clojure.zip.node.call(null,cljs.core.first.call(null,qs_SINGLEQUOTE_));
var G__52897 = cljs.core.assoc.call(null,ret,cp,qs_SINGLEQUOTE_);
cp = G__52894;
data_path__$1 = G__52895;
new_query__$1 = G__52896;
ret = G__52897;
continue;
} else {
return ret;
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {om.next.protocols.IIndexer}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.next.Indexer = (function (indexes,extfs,__meta,__extmap,__hash){
this.indexes = indexes;
this.extfs = extfs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229700362;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.next.Indexer.prototype.om$next$protocols$IIndexer$ = true;

om.next.Indexer.prototype.om$next$protocols$IIndexer$index_root$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var prop__GT_classes = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var class_path__GT_query = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var rootq = om.next.get_query.call(null,x);
var class$ = (function (){var G__52905 = x;
var G__52905__$1 = ((om.next.component_QMARK_.call(null,x))?cljs.core.type.call(null,G__52905):G__52905);
return G__52905__$1;
})();
var get_dispatch_key = ((function (prop__GT_classes,class_path__GT_query,rootq,class$,___$1){
return (function om$next$get_dispatch_key(prop){
var G__52949 = prop;
var G__52949__$1 = (((!(om.util.ident_QMARK_.call(null,prop))) || (cljs.core._EQ_.call(null,cljs.core.second.call(null,prop),new cljs.core.Symbol(null,"_","_",-1201019570,null))))?cljs.core.comp.call(null,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),om.next.impl.parser.expr__GT_ast).call(null,G__52949):G__52949);
return G__52949__$1;
});})(prop__GT_classes,class_path__GT_query,rootq,class$,___$1))
;
var build_index_STAR_ = ((function (prop__GT_classes,class_path__GT_query,rootq,class$,___$1){
return (function om$next$build_index_STAR_(class$__$1,query,path,classpath,union_keys){
var l__52618__auto___52998 = om.next._STAR_logger_STAR_;
if((!(om.next.iquery_QMARK_.call(null,class$__$1))) || ((om.next.iquery_QMARK_.call(null,class$__$1)) && (!(cljs.core.empty_QMARK_.call(null,query))))){
} else {
goog.log.error(l__52618__auto___52998,[cljs.core.str("Invariant Violation"),cljs.core.str(((("build-index*" == null))?null:[cljs.core.str(" (in function: `"),cljs.core.str("build-index*"),cljs.core.str("`)")].join(''))),cljs.core.str(": "),cljs.core.str([cljs.core.str("`IQuery` implementation must return a non-empty query."),cljs.core.str(" Check the `IQuery` implementation of component `"),cljs.core.str(((om.next.component_QMARK_.call(null,class$__$1))?class$__$1.constructor.displayName:class$__$1.prototype.constructor.displayName)),cljs.core.str("`.")].join(''))].join(''));
}

var recursive_QMARK_ = cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([class$__$1], true),classpath);
var classpath__$1 = (function (){var G__52970 = classpath;
var G__52970__$1 = (((!((class$__$1 == null))) && (cljs.core.not.call(null,recursive_QMARK_)))?cljs.core.conj.call(null,G__52970,class$__$1):G__52970);
return G__52970__$1;
})();
var dp__GT_cs = cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.indexes),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-path->components","data-path->components",-1244619750)], null));
if(cljs.core.truth_(class$__$1)){
var focused_query_52999 = om.next.query_template.call(null,om.next.focus_query.call(null,rootq,path),path);
var cp_query_53000 = (function (){var G__52971 = focused_query_52999;
var G__52971__$1 = ((cljs.core.not_EQ_.call(null,clojure.zip.node.call(null,focused_query_52999),query))?clojure.zip.replace.call(null,G__52971,query):G__52971);
return G__52971__$1;
})();
cljs.core.swap_BANG_.call(null,class_path__GT_query,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [classpath__$1], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),cp_query_53000);
} else {
}

if(cljs.core.truth_(recursive_QMARK_)){
return null;
} else {
if(cljs.core.vector_QMARK_.call(null,query)){
var map__52972 = cljs.core.group_by.call(null,om.util.join_QMARK_,query);
var map__52972__$1 = ((((!((map__52972 == null)))?((((map__52972.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52972.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52972):map__52972);
var props = cljs.core.get.call(null,map__52972__$1,false);
var joins = cljs.core.get.call(null,map__52972__$1,true);
cljs.core.swap_BANG_.call(null,prop__GT_classes,((function (map__52972,map__52972__$1,props,joins,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,class$,___$1){
return (function (p1__52898_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__52898_SHARP_,cljs.core.zipmap.call(null,cljs.core.map.call(null,get_dispatch_key,props),cljs.core.repeat.call(null,cljs.core.PersistentHashSet.fromArray([class$__$1], true))));
});})(map__52972,map__52972__$1,props,joins,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,class$,___$1))
);

var seq__52974 = cljs.core.seq.call(null,joins);
var chunk__52975 = null;
var count__52976 = (0);
var i__52977 = (0);
while(true){
if((i__52977 < count__52976)){
var join = cljs.core._nth.call(null,chunk__52975,i__52977);
var vec__52978_53001 = om.util.join_entry.call(null,join);
var prop_53002 = cljs.core.nth.call(null,vec__52978_53001,(0),null);
var query_SINGLEQUOTE__53003 = cljs.core.nth.call(null,vec__52978_53001,(1),null);
var prop_dispatch_key_53004 = get_dispatch_key.call(null,prop_53002);
var recursion_QMARK__53005 = om.util.recursion_QMARK_.call(null,query_SINGLEQUOTE__53003);
var query_SINGLEQUOTE__53006__$1 = ((recursion_QMARK__53005)?query:query_SINGLEQUOTE__53003);
var path_SINGLEQUOTE__53007 = cljs.core.conj.call(null,path,prop_53002);
var rendered_path_SINGLEQUOTE__53008 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.set.call(null,union_keys),path_SINGLEQUOTE__53007));
var cs_53009 = cljs.core.get.call(null,dp__GT_cs,rendered_path_SINGLEQUOTE__53008);
var cascade_query_QMARK__53010 = (cljs.core._EQ_.call(null,cljs.core.count.call(null,cs_53009),(1))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE__53006__$1)),cljs.core.type.call(null,cljs.core.first.call(null,cs_53009)))) && (!(cljs.core.map_QMARK_.call(null,query_SINGLEQUOTE__53006__$1)));
var query_SINGLEQUOTE__SINGLEQUOTE__53011 = ((cascade_query_QMARK__53010)?om.next.get_query.call(null,cljs.core.first.call(null,cs_53009)):query_SINGLEQUOTE__53006__$1);
cljs.core.swap_BANG_.call(null,prop__GT_classes,((function (seq__52974,chunk__52975,count__52976,i__52977,vec__52978_53001,prop_53002,query_SINGLEQUOTE__53003,prop_dispatch_key_53004,recursion_QMARK__53005,query_SINGLEQUOTE__53006__$1,path_SINGLEQUOTE__53007,rendered_path_SINGLEQUOTE__53008,cs_53009,cascade_query_QMARK__53010,query_SINGLEQUOTE__SINGLEQUOTE__53011,join,map__52972,map__52972__$1,props,joins,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,class$,___$1){
return (function (p1__52899_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__52899_SHARP_,cljs.core.PersistentArrayMap.fromArray([prop_dispatch_key_53004,cljs.core.PersistentHashSet.fromArray([class$__$1], true)], true, false));
});})(seq__52974,chunk__52975,count__52976,i__52977,vec__52978_53001,prop_53002,query_SINGLEQUOTE__53003,prop_dispatch_key_53004,recursion_QMARK__53005,query_SINGLEQUOTE__53006__$1,path_SINGLEQUOTE__53007,rendered_path_SINGLEQUOTE__53008,cs_53009,cascade_query_QMARK__53010,query_SINGLEQUOTE__SINGLEQUOTE__53011,join,map__52972,map__52972__$1,props,joins,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,class$,___$1))
);

if((cascade_query_QMARK__53010) && (cljs.core.not_EQ_.call(null,query_SINGLEQUOTE__53006__$1,query_SINGLEQUOTE__SINGLEQUOTE__53011))){
var cp__GT_q_SINGLEQUOTE__53012 = om.next.cascade_query.call(null,cljs.core.deref.call(null,class_path__GT_query),classpath__$1,path_SINGLEQUOTE__53007,query_SINGLEQUOTE__SINGLEQUOTE__53011,union_keys);
cljs.core.swap_BANG_.call(null,class_path__GT_query,cljs.core.merge,cp__GT_q_SINGLEQUOTE__53012);
} else {
}

var class_SINGLEQUOTE__53013 = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE__SINGLEQUOTE__53011));
if((recursion_QMARK__53005) && ((class_SINGLEQUOTE__53013 == null))){
} else {
om$next$build_index_STAR_.call(null,class_SINGLEQUOTE__53013,query_SINGLEQUOTE__SINGLEQUOTE__53011,path_SINGLEQUOTE__53007,classpath__$1,union_keys);
}

var G__53014 = seq__52974;
var G__53015 = chunk__52975;
var G__53016 = count__52976;
var G__53017 = (i__52977 + (1));
seq__52974 = G__53014;
chunk__52975 = G__53015;
count__52976 = G__53016;
i__52977 = G__53017;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__52974);
if(temp__4425__auto__){
var seq__52974__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52974__$1)){
var c__36641__auto__ = cljs.core.chunk_first.call(null,seq__52974__$1);
var G__53018 = cljs.core.chunk_rest.call(null,seq__52974__$1);
var G__53019 = c__36641__auto__;
var G__53020 = cljs.core.count.call(null,c__36641__auto__);
var G__53021 = (0);
seq__52974 = G__53018;
chunk__52975 = G__53019;
count__52976 = G__53020;
i__52977 = G__53021;
continue;
} else {
var join = cljs.core.first.call(null,seq__52974__$1);
var vec__52979_53022 = om.util.join_entry.call(null,join);
var prop_53023 = cljs.core.nth.call(null,vec__52979_53022,(0),null);
var query_SINGLEQUOTE__53024 = cljs.core.nth.call(null,vec__52979_53022,(1),null);
var prop_dispatch_key_53025 = get_dispatch_key.call(null,prop_53023);
var recursion_QMARK__53026 = om.util.recursion_QMARK_.call(null,query_SINGLEQUOTE__53024);
var query_SINGLEQUOTE__53027__$1 = ((recursion_QMARK__53026)?query:query_SINGLEQUOTE__53024);
var path_SINGLEQUOTE__53028 = cljs.core.conj.call(null,path,prop_53023);
var rendered_path_SINGLEQUOTE__53029 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.set.call(null,union_keys),path_SINGLEQUOTE__53028));
var cs_53030 = cljs.core.get.call(null,dp__GT_cs,rendered_path_SINGLEQUOTE__53029);
var cascade_query_QMARK__53031 = (cljs.core._EQ_.call(null,cljs.core.count.call(null,cs_53030),(1))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE__53027__$1)),cljs.core.type.call(null,cljs.core.first.call(null,cs_53030)))) && (!(cljs.core.map_QMARK_.call(null,query_SINGLEQUOTE__53027__$1)));
var query_SINGLEQUOTE__SINGLEQUOTE__53032 = ((cascade_query_QMARK__53031)?om.next.get_query.call(null,cljs.core.first.call(null,cs_53030)):query_SINGLEQUOTE__53027__$1);
cljs.core.swap_BANG_.call(null,prop__GT_classes,((function (seq__52974,chunk__52975,count__52976,i__52977,vec__52979_53022,prop_53023,query_SINGLEQUOTE__53024,prop_dispatch_key_53025,recursion_QMARK__53026,query_SINGLEQUOTE__53027__$1,path_SINGLEQUOTE__53028,rendered_path_SINGLEQUOTE__53029,cs_53030,cascade_query_QMARK__53031,query_SINGLEQUOTE__SINGLEQUOTE__53032,join,seq__52974__$1,temp__4425__auto__,map__52972,map__52972__$1,props,joins,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,class$,___$1){
return (function (p1__52899_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__52899_SHARP_,cljs.core.PersistentArrayMap.fromArray([prop_dispatch_key_53025,cljs.core.PersistentHashSet.fromArray([class$__$1], true)], true, false));
});})(seq__52974,chunk__52975,count__52976,i__52977,vec__52979_53022,prop_53023,query_SINGLEQUOTE__53024,prop_dispatch_key_53025,recursion_QMARK__53026,query_SINGLEQUOTE__53027__$1,path_SINGLEQUOTE__53028,rendered_path_SINGLEQUOTE__53029,cs_53030,cascade_query_QMARK__53031,query_SINGLEQUOTE__SINGLEQUOTE__53032,join,seq__52974__$1,temp__4425__auto__,map__52972,map__52972__$1,props,joins,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,class$,___$1))
);

if((cascade_query_QMARK__53031) && (cljs.core.not_EQ_.call(null,query_SINGLEQUOTE__53027__$1,query_SINGLEQUOTE__SINGLEQUOTE__53032))){
var cp__GT_q_SINGLEQUOTE__53033 = om.next.cascade_query.call(null,cljs.core.deref.call(null,class_path__GT_query),classpath__$1,path_SINGLEQUOTE__53028,query_SINGLEQUOTE__SINGLEQUOTE__53032,union_keys);
cljs.core.swap_BANG_.call(null,class_path__GT_query,cljs.core.merge,cp__GT_q_SINGLEQUOTE__53033);
} else {
}

var class_SINGLEQUOTE__53034 = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE__SINGLEQUOTE__53032));
if((recursion_QMARK__53026) && ((class_SINGLEQUOTE__53034 == null))){
} else {
om$next$build_index_STAR_.call(null,class_SINGLEQUOTE__53034,query_SINGLEQUOTE__SINGLEQUOTE__53032,path_SINGLEQUOTE__53028,classpath__$1,union_keys);
}

var G__53035 = cljs.core.next.call(null,seq__52974__$1);
var G__53036 = null;
var G__53037 = (0);
var G__53038 = (0);
seq__52974 = G__53035;
chunk__52975 = G__53036;
count__52976 = G__53037;
i__52977 = G__53038;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if(cljs.core.map_QMARK_.call(null,query)){
var seq__52980 = cljs.core.seq.call(null,query);
var chunk__52981 = null;
var count__52982 = (0);
var i__52983 = (0);
while(true){
if((i__52983 < count__52982)){
var vec__52984 = cljs.core._nth.call(null,chunk__52981,i__52983);
var prop = cljs.core.nth.call(null,vec__52984,(0),null);
var query_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__52984,(1),null);
var path_SINGLEQUOTE__53039 = cljs.core.conj.call(null,path,prop);
var class_SINGLEQUOTE__53040 = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE_));
var cs_53041 = cljs.core.filter.call(null,((function (seq__52980,chunk__52981,count__52982,i__52983,path_SINGLEQUOTE__53039,class_SINGLEQUOTE__53040,vec__52984,prop,query_SINGLEQUOTE_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,class$,___$1){
return (function (p1__52900_SHARP_){
return cljs.core._EQ_.call(null,class_SINGLEQUOTE__53040,cljs.core.type.call(null,p1__52900_SHARP_));
});})(seq__52980,chunk__52981,count__52982,i__52983,path_SINGLEQUOTE__53039,class_SINGLEQUOTE__53040,vec__52984,prop,query_SINGLEQUOTE_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,class$,___$1))
,cljs.core.get.call(null,dp__GT_cs,path));
var cascade_query_QMARK__53042 = (function (){var and__35826__auto__ = class_SINGLEQUOTE__53040;
if(cljs.core.truth_(and__35826__auto__)){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,cs_53041),(1));
} else {
return and__35826__auto__;
}
})();
var query_SINGLEQUOTE__SINGLEQUOTE__53043 = (cljs.core.truth_(cascade_query_QMARK__53042)?om.next.get_query.call(null,cljs.core.first.call(null,cs_53041)):query_SINGLEQUOTE_);
if(cljs.core.truth_((function (){var and__35826__auto__ = cascade_query_QMARK__53042;
if(cljs.core.truth_(and__35826__auto__)){
return cljs.core.not_EQ_.call(null,query_SINGLEQUOTE_,query_SINGLEQUOTE__SINGLEQUOTE__53043);
} else {
return and__35826__auto__;
}
})())){
var qs_53044 = cljs.core.get.call(null,cljs.core.deref.call(null,class_path__GT_query),classpath__$1);
var q_53045 = cljs.core.first.call(null,qs_53044);
var qnode_53046 = clojure.zip.node.call(null,(function (){var G__52985 = q_53045;
var G__52985__$1 = (((class$__$1 == null))?om.next.query_template.call(null,G__52985,path):G__52985);
return G__52985__$1;
})());
var new_query_53047 = cljs.core.assoc.call(null,qnode_53046,prop,query_SINGLEQUOTE__SINGLEQUOTE__53043);
var q_SINGLEQUOTE__53048 = (function (){var G__52986 = clojure.zip.replace.call(null,om.next.query_template.call(null,clojure.zip.root.call(null,q_53045),path),new_query_53047);
var G__52986__$1 = (((class$__$1 == null))?om.next.query_template.call(null,om.next.focus_query.call(null,clojure.zip.root.call(null,G__52986),cljs.core.pop.call(null,path)),cljs.core.pop.call(null,path)):G__52986);
return G__52986__$1;
})();
var qs_SINGLEQUOTE__53049 = cljs.core.into.call(null,cljs.core.PersistentHashSet.fromArray([q_SINGLEQUOTE__53048], true),cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([q_53045], true)),qs_53044);
var cp__GT_q_SINGLEQUOTE__53050 = cljs.core.merge.call(null,cljs.core.PersistentArrayMap.fromArray([classpath__$1,qs_SINGLEQUOTE__53049], true, false),om.next.cascade_query.call(null,cljs.core.deref.call(null,class_path__GT_query),cljs.core.pop.call(null,classpath__$1),path,clojure.zip.node.call(null,q_SINGLEQUOTE__53048),union_keys));
cljs.core.swap_BANG_.call(null,class_path__GT_query,cljs.core.merge,cp__GT_q_SINGLEQUOTE__53050);
} else {
}

om$next$build_index_STAR_.call(null,class_SINGLEQUOTE__53040,query_SINGLEQUOTE__SINGLEQUOTE__53043,path_SINGLEQUOTE__53039,classpath__$1,cljs.core.conj.call(null,union_keys,prop));

var G__53051 = seq__52980;
var G__53052 = chunk__52981;
var G__53053 = count__52982;
var G__53054 = (i__52983 + (1));
seq__52980 = G__53051;
chunk__52981 = G__53052;
count__52982 = G__53053;
i__52983 = G__53054;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__52980);
if(temp__4425__auto__){
var seq__52980__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52980__$1)){
var c__36641__auto__ = cljs.core.chunk_first.call(null,seq__52980__$1);
var G__53055 = cljs.core.chunk_rest.call(null,seq__52980__$1);
var G__53056 = c__36641__auto__;
var G__53057 = cljs.core.count.call(null,c__36641__auto__);
var G__53058 = (0);
seq__52980 = G__53055;
chunk__52981 = G__53056;
count__52982 = G__53057;
i__52983 = G__53058;
continue;
} else {
var vec__52987 = cljs.core.first.call(null,seq__52980__$1);
var prop = cljs.core.nth.call(null,vec__52987,(0),null);
var query_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__52987,(1),null);
var path_SINGLEQUOTE__53059 = cljs.core.conj.call(null,path,prop);
var class_SINGLEQUOTE__53060 = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE_));
var cs_53061 = cljs.core.filter.call(null,((function (seq__52980,chunk__52981,count__52982,i__52983,path_SINGLEQUOTE__53059,class_SINGLEQUOTE__53060,vec__52987,prop,query_SINGLEQUOTE_,seq__52980__$1,temp__4425__auto__,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,class$,___$1){
return (function (p1__52900_SHARP_){
return cljs.core._EQ_.call(null,class_SINGLEQUOTE__53060,cljs.core.type.call(null,p1__52900_SHARP_));
});})(seq__52980,chunk__52981,count__52982,i__52983,path_SINGLEQUOTE__53059,class_SINGLEQUOTE__53060,vec__52987,prop,query_SINGLEQUOTE_,seq__52980__$1,temp__4425__auto__,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,class$,___$1))
,cljs.core.get.call(null,dp__GT_cs,path));
var cascade_query_QMARK__53062 = (function (){var and__35826__auto__ = class_SINGLEQUOTE__53060;
if(cljs.core.truth_(and__35826__auto__)){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,cs_53061),(1));
} else {
return and__35826__auto__;
}
})();
var query_SINGLEQUOTE__SINGLEQUOTE__53063 = (cljs.core.truth_(cascade_query_QMARK__53062)?om.next.get_query.call(null,cljs.core.first.call(null,cs_53061)):query_SINGLEQUOTE_);
if(cljs.core.truth_((function (){var and__35826__auto__ = cascade_query_QMARK__53062;
if(cljs.core.truth_(and__35826__auto__)){
return cljs.core.not_EQ_.call(null,query_SINGLEQUOTE_,query_SINGLEQUOTE__SINGLEQUOTE__53063);
} else {
return and__35826__auto__;
}
})())){
var qs_53064 = cljs.core.get.call(null,cljs.core.deref.call(null,class_path__GT_query),classpath__$1);
var q_53065 = cljs.core.first.call(null,qs_53064);
var qnode_53066 = clojure.zip.node.call(null,(function (){var G__52988 = q_53065;
var G__52988__$1 = (((class$__$1 == null))?om.next.query_template.call(null,G__52988,path):G__52988);
return G__52988__$1;
})());
var new_query_53067 = cljs.core.assoc.call(null,qnode_53066,prop,query_SINGLEQUOTE__SINGLEQUOTE__53063);
var q_SINGLEQUOTE__53068 = (function (){var G__52989 = clojure.zip.replace.call(null,om.next.query_template.call(null,clojure.zip.root.call(null,q_53065),path),new_query_53067);
var G__52989__$1 = (((class$__$1 == null))?om.next.query_template.call(null,om.next.focus_query.call(null,clojure.zip.root.call(null,G__52989),cljs.core.pop.call(null,path)),cljs.core.pop.call(null,path)):G__52989);
return G__52989__$1;
})();
var qs_SINGLEQUOTE__53069 = cljs.core.into.call(null,cljs.core.PersistentHashSet.fromArray([q_SINGLEQUOTE__53068], true),cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([q_53065], true)),qs_53064);
var cp__GT_q_SINGLEQUOTE__53070 = cljs.core.merge.call(null,cljs.core.PersistentArrayMap.fromArray([classpath__$1,qs_SINGLEQUOTE__53069], true, false),om.next.cascade_query.call(null,cljs.core.deref.call(null,class_path__GT_query),cljs.core.pop.call(null,classpath__$1),path,clojure.zip.node.call(null,q_SINGLEQUOTE__53068),union_keys));
cljs.core.swap_BANG_.call(null,class_path__GT_query,cljs.core.merge,cp__GT_q_SINGLEQUOTE__53070);
} else {
}

om$next$build_index_STAR_.call(null,class_SINGLEQUOTE__53060,query_SINGLEQUOTE__SINGLEQUOTE__53063,path_SINGLEQUOTE__53059,classpath__$1,cljs.core.conj.call(null,union_keys,prop));

var G__53071 = cljs.core.next.call(null,seq__52980__$1);
var G__53072 = null;
var G__53073 = (0);
var G__53074 = (0);
seq__52980 = G__53071;
chunk__52981 = G__53072;
count__52982 = G__53073;
i__52983 = G__53074;
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
}
});})(prop__GT_classes,class_path__GT_query,rootq,class$,___$1))
;
build_index_STAR_.call(null,class$,rootq,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);

return cljs.core.swap_BANG_.call(null,self__.indexes,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717),cljs.core.deref.call(null,prop__GT_classes),new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700),cljs.core.deref.call(null,class_path__GT_query)], null));
});

om.next.Indexer.prototype.om$next$protocols$IIndexer$index_component_BANG_$arity$2 = (function (_,c){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.indexes,((function (___$1){
return (function (indexes__$1){
var indexes__$2 = cljs.core.update_in.call(null,new cljs.core.Keyword(null,"index-component","index-component",-1258618905).cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$1,c),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),cljs.core.type.call(null,c)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c);
var data_path = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.number_QMARK_),om.next.path.call(null,c));
var indexes__$3 = cljs.core.update_in.call(null,new cljs.core.Keyword(null,"index-component","index-component",-1258618905).cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$2,c),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-path->components","data-path->components",-1244619750),data_path], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c);
var ident = ((((!((c == null)))?(((false) || (c.om$next$Ident$))?true:false):false))?(function (){var ident = om.next.ident.call(null,c,om.next.props.call(null,c));
var l__52618__auto___53075 = om.next._STAR_logger_STAR_;
if(om.util.ident_QMARK_.call(null,ident)){
} else {
goog.log.error(l__52618__auto___53075,[cljs.core.str("Invariant Violation"),cljs.core.str((((null == null))?null:[cljs.core.str(" (in function: `"),cljs.core.str(null),cljs.core.str("`)")].join(''))),cljs.core.str(": "),cljs.core.str([cljs.core.str("malformed Ident. An ident must be a vector of "),cljs.core.str("two elements (a keyword and an EDN value). Check "),cljs.core.str("the Ident implementation of component `"),cljs.core.str(c.constructor.displayName),cljs.core.str("`.")].join(''))].join(''));
}

return ident;
})():null);
if(!((ident == null))){
var G__52991 = indexes__$3;
var G__52991__$1 = (cljs.core.truth_(ident)?cljs.core.update_in.call(null,G__52991,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c):G__52991);
return G__52991__$1;
} else {
return indexes__$3;
}
});})(___$1))
);
});

om.next.Indexer.prototype.om$next$protocols$IIndexer$drop_component_BANG_$arity$2 = (function (_,c){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.indexes,((function (___$1){
return (function (indexes__$1){
var indexes__$2 = cljs.core.update_in.call(null,new cljs.core.Keyword(null,"drop-component","drop-component",1805913749).cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$1,c),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),cljs.core.type.call(null,c)], null),cljs.core.disj,c);
var data_path = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.number_QMARK_),om.next.path.call(null,c));
var indexes__$3 = cljs.core.update_in.call(null,new cljs.core.Keyword(null,"drop-component","drop-component",1805913749).cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$2,c),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-path->components","data-path->components",-1244619750),data_path], null),cljs.core.disj,c);
var ident = ((((!((c == null)))?(((false) || (c.om$next$Ident$))?true:false):false))?om.next.ident.call(null,c,om.next.props.call(null,c)):null);
if(!((ident == null))){
var G__52993 = indexes__$3;
var G__52993__$1 = (cljs.core.truth_(ident)?cljs.core.update_in.call(null,G__52993,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident], null),cljs.core.disj,c):G__52993);
return G__52993__$1;
} else {
return indexes__$3;
}
});})(___$1))
);
});

om.next.Indexer.prototype.om$next$protocols$IIndexer$key__GT_components$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var indexes__$1 = cljs.core.deref.call(null,self__.indexes);
if(om.next.component_QMARK_.call(null,k)){
return cljs.core.PersistentHashSet.fromArray([k], true);
} else {
var temp__4423__auto__ = new cljs.core.Keyword(null,"ref->components","ref->components",-303587249).cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$1,k);
if(cljs.core.truth_(temp__4423__auto__)){
var cs = temp__4423__auto__;
return cs;
} else {
var cs = cljs.core.get_in.call(null,indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),k], null),new cljs.core.Keyword("om.next","not-found","om.next/not-found",1869656407));
if(!(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("om.next","not-found","om.next/not-found",1869656407),cs))){
return cs;
} else {
if((k instanceof cljs.core.Keyword)){
var cs__$1 = cljs.core.get_in.call(null,indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717),k], null));
return cljs.core.transduce.call(null,cljs.core.map.call(null,((function (cs__$1,cs,temp__4423__auto__,indexes__$1,___$1){
return (function (p1__52901_SHARP_){
return cljs.core.get_in.call(null,indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),p1__52901_SHARP_], null));
});})(cs__$1,cs,temp__4423__auto__,indexes__$1,___$1))
),cljs.core.completing.call(null,cljs.core.into),cljs.core.PersistentHashSet.EMPTY,cs__$1);
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
}
}
}
});

om.next.Indexer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__36452__auto__,k__36453__auto__){
var self__ = this;
var this__36452__auto____$1 = this;
return cljs.core._lookup.call(null,this__36452__auto____$1,k__36453__auto__,null);
});

om.next.Indexer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__36454__auto__,k52903,else__36455__auto__){
var self__ = this;
var this__36454__auto____$1 = this;
var G__52994 = (((k52903 instanceof cljs.core.Keyword))?k52903.fqn:null);
switch (G__52994) {
case "indexes":
return self__.indexes;

break;
case "extfs":
return self__.extfs;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k52903,else__36455__auto__);

}
});

om.next.Indexer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__36466__auto__,writer__36467__auto__,opts__36468__auto__){
var self__ = this;
var this__36466__auto____$1 = this;
var pr_pair__36469__auto__ = ((function (this__36466__auto____$1){
return (function (keyval__36470__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__36467__auto__,cljs.core.pr_writer,""," ","",opts__36468__auto__,keyval__36470__auto__);
});})(this__36466__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__36467__auto__,pr_pair__36469__auto__,"#om.next.Indexer{",", ","}",opts__36468__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indexes","indexes",1496475545),self__.indexes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"extfs","extfs",607041493),self__.extfs],null))], null),self__.__extmap));
});

om.next.Indexer.prototype.cljs$core$IIterable$ = true;

om.next.Indexer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52902){
var self__ = this;
var G__52902__$1 = this;
return (new cljs.core.RecordIter((0),G__52902__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword(null,"extfs","extfs",607041493)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

om.next.Indexer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__36450__auto__){
var self__ = this;
var this__36450__auto____$1 = this;
return self__.__meta;
});

om.next.Indexer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__36446__auto__){
var self__ = this;
var this__36446__auto____$1 = this;
return (new om.next.Indexer(self__.indexes,self__.extfs,self__.__meta,self__.__extmap,self__.__hash));
});

om.next.Indexer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__36456__auto__){
var self__ = this;
var this__36456__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

om.next.Indexer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__36447__auto__){
var self__ = this;
var this__36447__auto____$1 = this;
var h__36273__auto__ = self__.__hash;
if(!((h__36273__auto__ == null))){
return h__36273__auto__;
} else {
var h__36273__auto____$1 = cljs.core.hash_imap.call(null,this__36447__auto____$1);
self__.__hash = h__36273__auto____$1;

return h__36273__auto____$1;
}
});

om.next.Indexer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__36448__auto__,other__36449__auto__){
var self__ = this;
var this__36448__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35826__auto__ = other__36449__auto__;
if(cljs.core.truth_(and__35826__auto__)){
var and__35826__auto____$1 = (this__36448__auto____$1.constructor === other__36449__auto__.constructor);
if(and__35826__auto____$1){
return cljs.core.equiv_map.call(null,this__36448__auto____$1,other__36449__auto__);
} else {
return and__35826__auto____$1;
}
} else {
return and__35826__auto__;
}
})())){
return true;
} else {
return false;
}
});

om.next.Indexer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__36461__auto__,k__36462__auto__){
var self__ = this;
var this__36461__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extfs","extfs",607041493),null,new cljs.core.Keyword(null,"indexes","indexes",1496475545),null], null), null),k__36462__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__36461__auto____$1),self__.__meta),k__36462__auto__);
} else {
return (new om.next.Indexer(self__.indexes,self__.extfs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__36462__auto__)),null));
}
});

om.next.Indexer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__36459__auto__,k__36460__auto__,G__52902){
var self__ = this;
var this__36459__auto____$1 = this;
var pred__52995 = cljs.core.keyword_identical_QMARK_;
var expr__52996 = k__36460__auto__;
if(cljs.core.truth_(pred__52995.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545),expr__52996))){
return (new om.next.Indexer(G__52902,self__.extfs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52995.call(null,new cljs.core.Keyword(null,"extfs","extfs",607041493),expr__52996))){
return (new om.next.Indexer(self__.indexes,G__52902,self__.__meta,self__.__extmap,null));
} else {
return (new om.next.Indexer(self__.indexes,self__.extfs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__36460__auto__,G__52902),null));
}
}
});

om.next.Indexer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__36464__auto__){
var self__ = this;
var this__36464__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indexes","indexes",1496475545),self__.indexes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"extfs","extfs",607041493),self__.extfs],null))], null),self__.__extmap));
});

om.next.Indexer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__36451__auto__,G__52902){
var self__ = this;
var this__36451__auto____$1 = this;
return (new om.next.Indexer(self__.indexes,self__.extfs,G__52902,self__.__extmap,self__.__hash));
});

om.next.Indexer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__36457__auto__,entry__36458__auto__){
var self__ = this;
var this__36457__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__36458__auto__)){
return cljs.core._assoc.call(null,this__36457__auto____$1,cljs.core._nth.call(null,entry__36458__auto__,(0)),cljs.core._nth.call(null,entry__36458__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__36457__auto____$1,entry__36458__auto__);
}
});

om.next.Indexer.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.indexes);
});

om.next.Indexer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"indexes","indexes",-1157960224,null),new cljs.core.Symbol(null,"extfs","extfs",-2047394276,null)], null);
});

om.next.Indexer.cljs$lang$type = true;

om.next.Indexer.cljs$lang$ctorPrSeq = (function (this__36486__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"om.next/Indexer");
});

om.next.Indexer.cljs$lang$ctorPrWriter = (function (this__36486__auto__,writer__36487__auto__){
return cljs.core._write.call(null,writer__36487__auto__,"om.next/Indexer");
});

om.next.__GT_Indexer = (function om$next$__GT_Indexer(indexes,extfs){
return (new om.next.Indexer(indexes,extfs,null,null,null));
});

om.next.map__GT_Indexer = (function om$next$map__GT_Indexer(G__52904){
return (new om.next.Indexer(new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(G__52904),new cljs.core.Keyword(null,"extfs","extfs",607041493).cljs$core$IFn$_invoke$arity$1(G__52904),null,cljs.core.dissoc.call(null,G__52904,new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword(null,"extfs","extfs",607041493)),null));
});

/**
 * Given a function (Component -> Ref), return an indexer.
 */
om.next.indexer = (function om$next$indexer(var_args){
var args53077 = [];
var len__36896__auto___53080 = arguments.length;
var i__36897__auto___53081 = (0);
while(true){
if((i__36897__auto___53081 < len__36896__auto___53080)){
args53077.push((arguments[i__36897__auto___53081]));

var G__53082 = (i__36897__auto___53081 + (1));
i__36897__auto___53081 = G__53082;
continue;
} else {
}
break;
}

var G__53079 = args53077.length;
switch (G__53079) {
case 0:
return om.next.indexer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.indexer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53077.length)].join('')));

}
});

om.next.indexer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.next.indexer.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index-component","index-component",-1258618905),(function (indexes,component){
return indexes;
}),new cljs.core.Keyword(null,"drop-component","drop-component",1805913749),(function (indexes,component){
return indexes;
}),new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),(function (indexes,ref){
return null;
})], null));
});

om.next.indexer.cljs$core$IFn$_invoke$arity$1 = (function (extfs){
return (new om.next.Indexer(cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class->components","class->components",436435919),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"data-path->components","data-path->components",-1244619750),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),cljs.core.PersistentArrayMap.EMPTY], null)),extfs,null,null,null));
});

om.next.indexer.cljs$lang$maxFixedArity = 1;
/**
 * PRIVATE: Get the indexer associated with the reconciler.
 */
om.next.get_indexer = (function om$next$get_indexer(reconciler){
if(cljs.core.truth_(om.next.reconciler_QMARK_.call(null,reconciler))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"reconciler?","reconciler?",250756342,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null))))].join('')));
}

return new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler));
});
/**
 * Return all components for a given ref.
 */
om.next.ref__GT_components = (function om$next$ref__GT_components(x,ref){
if((ref == null)){
return null;
} else {
var indexer = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?om.next.get_indexer.call(null,x):x);
return om.next.protocols.key__GT_components.call(null,indexer,ref);
}
});
/**
 * Get any component from the indexer that matches the ref.
 */
om.next.ref__GT_any = (function om$next$ref__GT_any(x,ref){
var indexer = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?om.next.get_indexer.call(null,x):x);
return cljs.core.first.call(null,om.next.protocols.key__GT_components.call(null,indexer,ref));
});
/**
 * Get any component from the indexer that matches the component class.
 */
om.next.class__GT_any = (function om$next$class__GT_any(x,class$){
var indexer = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?om.next.get_indexer.call(null,x):x);
return cljs.core.first.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,indexer),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),class$], null)));
});
/**
 * Given x (a reconciler or indexer) and y (a component or component class
 * path), return the queries for that path.
 */
om.next.class_path__GT_queries = (function om$next$class_path__GT_queries(x,y){
var indexer = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?om.next.get_indexer.call(null,x):x);
var cp = ((om.next.component_QMARK_.call(null,y))?om.next.class_path.call(null,y):y);
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,clojure.zip.root),cljs.core.get_in.call(null,cljs.core.deref.call(null,indexer),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700),cp], null)));
});
/**
 * Returns the absolute query for a given component, not relative like
 * om.next/get-query.
 */
om.next.full_query = (function om$next$full_query(var_args){
var args53085 = [];
var len__36896__auto___53088 = arguments.length;
var i__36897__auto___53089 = (0);
while(true){
if((i__36897__auto___53089 < len__36896__auto___53088)){
args53085.push((arguments[i__36897__auto___53089]));

var G__53090 = (i__36897__auto___53089 + (1));
i__36897__auto___53089 = G__53090;
continue;
} else {
}
break;
}

var G__53087 = args53085.length;
switch (G__53087) {
case 1:
return om.next.full_query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.full_query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53085.length)].join('')));

}
});

om.next.full_query.cljs$core$IFn$_invoke$arity$1 = (function (component){
if(om.next.iquery_QMARK_.call(null,component)){
if((om.next.path.call(null,component) == null)){
return om.next.replace.call(null,cljs.core.first.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,om.next.get_indexer.call(null,om.next.get_reconciler.call(null,component))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700),om.next.class_path.call(null,component)], null))),om.next.get_query.call(null,component));
} else {
return om.next.full_query.call(null,component,om.next.get_query.call(null,component));
}
} else {
return null;
}
});

om.next.full_query.cljs$core$IFn$_invoke$arity$2 = (function (component,query){
if(om.next.iquery_QMARK_.call(null,component)){
var path_SINGLEQUOTE_ = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.number_QMARK_),om.next.path.call(null,component));
var cp = om.next.class_path.call(null,component);
var qs = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.next.get_indexer.call(null,om.next.get_reconciler.call(null,component))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700),cp], null));
if(!(cljs.core.empty_QMARK_.call(null,qs))){
var q = cljs.core.first.call(null,cljs.core.filter.call(null,((function (path_SINGLEQUOTE_,cp,qs){
return (function (p1__53084_SHARP_){
return cljs.core._EQ_.call(null,path_SINGLEQUOTE_,om.next.focus__GT_path.call(null,clojure.zip.root.call(null,p1__53084_SHARP_),path_SINGLEQUOTE_));
});})(path_SINGLEQUOTE_,cp,qs))
,qs));
if(!((q == null))){
return om.next.replace.call(null,q,query);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("No queries exist for component path "),cljs.core.str(cp),cljs.core.str(" or data path "),cljs.core.str(path_SINGLEQUOTE_)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("om.next","no-queries","om.next/no-queries",2125033807)], null));
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("No queries exist for component path "),cljs.core.str(cp)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("om.next","no-queries","om.next/no-queries",2125033807)], null));
}
} else {
return null;
}
});

om.next.full_query.cljs$lang$maxFixedArity = 2;
om.next.to_class = (function om$next$to_class(class$){
if((class$ == null)){
return null;
} else {
if(!(((!((class$ == null)))?(((false) || (class$.om$next$Ident$))?true:false):false))){
return Object.create(class$.prototype);
} else {
return class$;
}
}
});
om.next.normalize_STAR_ = (function om$next$normalize_STAR_(query,data,refs,union_seen){
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),query)){
return data;
} else {
if(cljs.core.map_QMARK_.call(null,query)){
var class$ = om.next.to_class.call(null,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query)));
var ident = ((((!((class$ == null)))?(((false) || (class$.om$next$Ident$))?true:false):false))?om.next.ident.call(null,class$,data):null);
if(!((ident == null))){
return cljs.core.vary_meta.call(null,om$next$normalize_STAR_.call(null,cljs.core.get.call(null,query,cljs.core.first.call(null,ident)),data,refs,union_seen),cljs.core.assoc,new cljs.core.Keyword("om","tag","om/tag",-1290356769),cljs.core.first.call(null,ident));
} else {
throw (new Error("Union components must implement Ident"));
}
} else {
if(cljs.core.vector_QMARK_.call(null,data)){
return data;
} else {
var q = cljs.core.seq.call(null,query);
var ret = data;
while(true){
if(!((q == null))){
var expr = cljs.core.first.call(null,q);
if(cljs.core.truth_(om.util.join_QMARK_.call(null,expr))){
var vec__53105 = om.util.join_entry.call(null,expr);
var k = cljs.core.nth.call(null,vec__53105,(0),null);
var sel = cljs.core.nth.call(null,vec__53105,(1),null);
var recursive_QMARK_ = om.util.recursion_QMARK_.call(null,sel);
var union_entry = ((om.util.union_QMARK_.call(null,expr))?sel:union_seen);
var sel__$1 = ((recursive_QMARK_)?((!((union_seen == null)))?union_seen:query):sel);
var class$ = om.next.to_class.call(null,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,sel__$1)));
var v = cljs.core.get.call(null,data,k);
if((recursive_QMARK_) && (om.util.ident_QMARK_.call(null,v))){
var G__53112 = cljs.core.next.call(null,q);
var G__53113 = ret;
q = G__53112;
ret = G__53113;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,v)){
var x = om$next$normalize_STAR_.call(null,sel__$1,v,refs,union_entry);
if(!(((class$ == null)) || (!(((!((class$ == null)))?(((false) || (class$.om$next$Ident$))?true:false):false))))){
var i = om.next.ident.call(null,class$,v);
cljs.core.swap_BANG_.call(null,refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,i),cljs.core.second.call(null,i)], null),cljs.core.merge,x);

var G__53114 = cljs.core.next.call(null,q);
var G__53115 = cljs.core.assoc.call(null,ret,k,i);
q = G__53114;
ret = G__53115;
continue;
} else {
var G__53116 = cljs.core.next.call(null,q);
var G__53117 = cljs.core.assoc.call(null,ret,k,x);
q = G__53116;
ret = G__53117;
continue;
}
} else {
if(cljs.core.vector_QMARK_.call(null,v)){
var xs = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (q,ret,vec__53105,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (p1__53094_SHARP_){
return om$next$normalize_STAR_.call(null,sel__$1,p1__53094_SHARP_,refs,union_entry);
});})(q,ret,vec__53105,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
),v);
if(!(((class$ == null)) || (!(((!((class$ == null)))?(((false) || (class$.om$next$Ident$))?true:false):false))))){
var is = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (q,ret,xs,vec__53105,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (p1__53095_SHARP_){
return om.next.ident.call(null,class$,p1__53095_SHARP_);
});})(q,ret,xs,vec__53105,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
),xs);
if(cljs.core.vector_QMARK_.call(null,sel__$1)){
if(cljs.core.empty_QMARK_.call(null,is)){
} else {
cljs.core.swap_BANG_.call(null,refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.ffirst.call(null,is)], null),((function (q,ret,is,xs,vec__53105,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (ys){
return cljs.core.merge_with.call(null,cljs.core.merge,ys,cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.second,is),xs));
});})(q,ret,is,xs,vec__53105,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
);
}
} else {
cljs.core.swap_BANG_.call(null,refs,((function (q,ret,is,xs,vec__53105,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (refs_SINGLEQUOTE_){
return cljs.core.reduce.call(null,((function (q,ret,is,xs,vec__53105,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (ret__$1,p__53110){
var vec__53111 = p__53110;
var i = cljs.core.nth.call(null,vec__53111,(0),null);
var x = cljs.core.nth.call(null,vec__53111,(1),null);
return cljs.core.update_in.call(null,ret__$1,i,cljs.core.merge,x);
});})(q,ret,is,xs,vec__53105,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
,refs_SINGLEQUOTE_,cljs.core.map.call(null,cljs.core.vector,is,xs));
});})(q,ret,is,xs,vec__53105,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
);
}

var G__53118 = cljs.core.next.call(null,q);
var G__53119 = cljs.core.assoc.call(null,ret,k,is);
q = G__53118;
ret = G__53119;
continue;
} else {
var G__53120 = cljs.core.next.call(null,q);
var G__53121 = cljs.core.assoc.call(null,ret,k,xs);
q = G__53120;
ret = G__53121;
continue;
}
} else {
if((v == null)){
var G__53122 = cljs.core.next.call(null,q);
var G__53123 = ret;
q = G__53122;
ret = G__53123;
continue;
} else {
var G__53124 = cljs.core.next.call(null,q);
var G__53125 = cljs.core.assoc.call(null,ret,k,v);
q = G__53124;
ret = G__53125;
continue;

}
}
}
}
} else {
var k = ((cljs.core.seq_QMARK_.call(null,expr))?cljs.core.first.call(null,expr):expr);
var v = cljs.core.get.call(null,data,k);
if((v == null)){
var G__53126 = cljs.core.next.call(null,q);
var G__53127 = ret;
q = G__53126;
ret = G__53127;
continue;
} else {
var G__53128 = cljs.core.next.call(null,q);
var G__53129 = cljs.core.assoc.call(null,ret,k,v);
q = G__53128;
ret = G__53129;
continue;
}
}
} else {
return ret;
}
break;
}

}
}
}
});
/**
 * Given a Om component class or instance and a tree of data, use the component's
 * query to transform the tree into the default database format. All nodes that
 * can be mapped via Ident implementations wil be replaced with ident links. The
 * original node data will be moved into tables indexed by ident. If merge-idents
 * option is true, will return these tables in the result instead of as metadata.
 */
om.next.tree__GT_db = (function om$next$tree__GT_db(var_args){
var args53130 = [];
var len__36896__auto___53133 = arguments.length;
var i__36897__auto___53134 = (0);
while(true){
if((i__36897__auto___53134 < len__36896__auto___53133)){
args53130.push((arguments[i__36897__auto___53134]));

var G__53135 = (i__36897__auto___53134 + (1));
i__36897__auto___53134 = G__53135;
continue;
} else {
}
break;
}

var G__53132 = args53130.length;
switch (G__53132) {
case 2:
return om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53130.length)].join('')));

}
});

om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$2 = (function (x,data){
return om.next.tree__GT_db.call(null,x,data,false);
});

om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3 = (function (x,data,merge_idents){
var refs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var x__$1 = ((cljs.core.vector_QMARK_.call(null,x))?x:om.next.get_query.call(null,x));
var ret = om.next.normalize_STAR_.call(null,x__$1,data,refs,null);
if(merge_idents){
var refs_SINGLEQUOTE_ = cljs.core.deref.call(null,refs);
return cljs.core.assoc.call(null,cljs.core.merge.call(null,ret,refs_SINGLEQUOTE_),new cljs.core.Keyword("om.next","tables","om.next/tables",1677536335),cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,refs_SINGLEQUOTE_)));
} else {
return cljs.core.with_meta.call(null,ret,cljs.core.deref.call(null,refs));
}
});

om.next.tree__GT_db.cljs$lang$maxFixedArity = 3;
om.next.sift_idents = (function om$next$sift_idents(res){
var map__53140 = cljs.core.group_by.call(null,(function (p1__53137_SHARP_){
return cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,p1__53137_SHARP_));
}),res);
var map__53140__$1 = ((((!((map__53140 == null)))?((((map__53140.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53140.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53140):map__53140);
var idents = cljs.core.get.call(null,map__53140__$1,true);
var rest = cljs.core.get.call(null,map__53140__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,idents),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,rest)], null);
});
/**
 * Changes a join on key k with depth limit from [:a {:k n}] to [:a {:k (dec n)}]
 */
om.next.reduce_query_depth = (function om$next$reduce_query_depth(q,k){
if(!(cljs.core.empty_QMARK_.call(null,om.next.focus_query.call(null,q,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null))))){
var pos = om.next.query_template.call(null,q,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
var node = clojure.zip.node.call(null,pos);
var node_SINGLEQUOTE_ = (function (){var G__53143 = node;
var G__53143__$1 = ((typeof node === 'number')?(G__53143 - (1)):G__53143);
return G__53143__$1;
})();
return om.next.replace.call(null,pos,node_SINGLEQUOTE_);
} else {
return q;
}
});
/**
 * Given a union expression decrement each of the query roots by one if it
 * is recursive.
 */
om.next.reduce_union_recursion_depth = (function om$next$reduce_union_recursion_depth(union_expr,recursion_key){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__53146){
var vec__53147 = p__53146;
var k = cljs.core.nth.call(null,vec__53147,(0),null);
var q = cljs.core.nth.call(null,vec__53147,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.next.reduce_query_depth.call(null,q,recursion_key)], null);
}),union_expr));
});
/**
 * Denormalize a data based on query. refs is a data structure which maps idents
 * to their values. map-ident is a function taking a ident to another ident,
 * used during tempid transition. idents-seen is the set of idents encountered,
 * used to limit recursion. union-expr is the current union expression being
 * evaluated. recurse-key is key representing the current recursive query being
 * evaluted.
 */
om.next.denormalize_STAR_ = (function om$next$denormalize_STAR_(query,data,refs,map_ident,idents_seen,union_expr,recurse_key){
if(cljs.core.map_QMARK_.call(null,refs)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"refs","refs",80480079,null))))].join('')));
}

var data__$1 = (function (){var G__53163 = data;
var G__53163__$1 = ((om.util.ident_QMARK_.call(null,data))?cljs.core.get_in.call(null,refs,map_ident.call(null,G__53163)):G__53163);
return G__53163__$1;
})();
if(cljs.core.vector_QMARK_.call(null,data__$1)){
var step = ((function (data__$1){
return (function (ident){
var ident_SINGLEQUOTE_ = cljs.core.get_in.call(null,refs,map_ident.call(null,ident));
var union_recur_QMARK_ = (function (){var and__35826__auto__ = union_expr;
if(cljs.core.truth_(and__35826__auto__)){
return recurse_key;
} else {
return and__35826__auto__;
}
})();
var query__$1 = (function (){var G__53164 = query;
var G__53164__$1 = (cljs.core.truth_(union_recur_QMARK_)?om.next.reduce_union_recursion_depth.call(null,G__53164,recurse_key):G__53164);
return G__53164__$1;
})();
var union_seen_SINGLEQUOTE_ = (function (){var G__53165 = union_expr;
var G__53165__$1 = (cljs.core.truth_(union_recur_QMARK_)?om.next.reduce_union_recursion_depth.call(null,G__53165,recurse_key):G__53165);
return G__53165__$1;
})();
var query_SINGLEQUOTE_ = (function (){var G__53166 = query__$1;
var G__53166__$1 = ((cljs.core.map_QMARK_.call(null,query__$1))?cljs.core.get.call(null,G__53166,cljs.core.first.call(null,ident)):G__53166);
return G__53166__$1;
})();
return om$next$denormalize_STAR_.call(null,query_SINGLEQUOTE_,ident_SINGLEQUOTE_,refs,map_ident,idents_seen,union_seen_SINGLEQUOTE_,null);
});})(data__$1))
;
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,step),data__$1);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),query)){
return data__$1;
} else {
var map__53167 = cljs.core.group_by.call(null,((function (data__$1){
return (function (p1__53148_SHARP_){
var or__35838__auto__ = om.util.join_QMARK_.call(null,p1__53148_SHARP_);
if(cljs.core.truth_(or__35838__auto__)){
return or__35838__auto__;
} else {
return (om.util.ident_QMARK_.call(null,p1__53148_SHARP_)) || ((cljs.core.seq_QMARK_.call(null,p1__53148_SHARP_)) && (om.util.ident_QMARK_.call(null,cljs.core.first.call(null,p1__53148_SHARP_))));
}
});})(data__$1))
,query);
var map__53167__$1 = ((((!((map__53167 == null)))?((((map__53167.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53167.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53167):map__53167);
var props = cljs.core.get.call(null,map__53167__$1,false);
var joins = cljs.core.get.call(null,map__53167__$1,true);
var props__$1 = cljs.core.mapv.call(null,((function (map__53167,map__53167__$1,props,joins,data__$1){
return (function (p1__53149_SHARP_){
var G__53169 = p1__53149_SHARP_;
var G__53169__$1 = ((cljs.core.seq_QMARK_.call(null,p1__53149_SHARP_))?cljs.core.first.call(null,G__53169):G__53169);
return G__53169__$1;
});})(map__53167,map__53167__$1,props,joins,data__$1))
,props);
var joins__$1 = cljs.core.seq.call(null,joins);
var ret = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(!((joins__$1 == null))){
var join = cljs.core.first.call(null,joins__$1);
var join__$1 = (function (){var G__53171 = join;
var G__53171__$1 = ((cljs.core.seq_QMARK_.call(null,join))?cljs.core.first.call(null,G__53171):G__53171);
return G__53171__$1;
})();
var join__$2 = (function (){var G__53172 = join__$1;
var G__53172__$1 = ((om.util.ident_QMARK_.call(null,join__$1))?cljs.core.PersistentHashMap.fromArrays([G__53172],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)]):G__53172);
return G__53172__$1;
})();
var vec__53170 = om.util.join_entry.call(null,join__$2);
var key = cljs.core.nth.call(null,vec__53170,(0),null);
var sel = cljs.core.nth.call(null,vec__53170,(1),null);
var recurse_QMARK_ = om.util.recursion_QMARK_.call(null,sel);
var recurse_key__$1 = ((recurse_QMARK_)?key:null);
var v = ((om.util.ident_QMARK_.call(null,key))?((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.second.call(null,key)))?cljs.core.get.call(null,refs,cljs.core.first.call(null,key)):cljs.core.get_in.call(null,refs,map_ident.call(null,key))):cljs.core.get.call(null,data__$1,key));
var key__$1 = (function (){var G__53173 = key;
var G__53173__$1 = ((om.util.unique_ident_QMARK_.call(null,key))?cljs.core.first.call(null,G__53173):G__53173);
return G__53173__$1;
})();
var v__$1 = ((om.util.ident_QMARK_.call(null,v))?map_ident.call(null,v):v);
var limit = ((typeof sel === 'number')?sel:new cljs.core.Keyword(null,"none","none",1333468478));
var union_entry = ((om.util.union_QMARK_.call(null,join__$2))?sel:union_expr);
var sel__$1 = ((recurse_QMARK_)?((!((union_expr == null)))?union_entry:om.next.reduce_query_depth.call(null,query,key__$1)):(((om.util.ident_QMARK_.call(null,key__$1)) && (om.util.union_QMARK_.call(null,join__$2)))?cljs.core.get.call(null,sel,cljs.core.first.call(null,key__$1)):(((om.util.ident_QMARK_.call(null,v__$1)) && (om.util.union_QMARK_.call(null,join__$2)))?cljs.core.get.call(null,sel,cljs.core.first.call(null,v__$1)):sel
)));
var graph_loop_QMARK_ = (recurse_QMARK_) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.get.call(null,idents_seen,key__$1)),v__$1)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"none","none",1333468478),limit));
var idents_seen__$1 = (((om.util.ident_QMARK_.call(null,v__$1)) && (recurse_QMARK_))?cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,idents_seen,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key__$1], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),v__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last-ident","last-ident",534500972),key__$1], null),v__$1):idents_seen);
if(cljs.core._EQ_.call(null,(0),limit)){
var G__53176 = cljs.core.next.call(null,joins__$1);
var G__53177 = ret;
joins__$1 = G__53176;
ret = G__53177;
continue;
} else {
if(graph_loop_QMARK_){
var G__53178 = cljs.core.next.call(null,joins__$1);
var G__53179 = ret;
joins__$1 = G__53178;
ret = G__53179;
continue;
} else {
if((v__$1 == null)){
var G__53180 = cljs.core.next.call(null,joins__$1);
var G__53181 = ret;
joins__$1 = G__53180;
ret = G__53181;
continue;
} else {
var G__53182 = cljs.core.next.call(null,joins__$1);
var G__53183 = cljs.core.assoc.call(null,ret,key__$1,om$next$denormalize_STAR_.call(null,sel__$1,v__$1,refs,map_ident,idents_seen__$1,union_entry,recurse_key__$1));
joins__$1 = G__53182;
ret = G__53183;
continue;

}
}
}
} else {
var temp__4423__auto__ = cljs.core.some.call(null,((function (joins__$1,ret,map__53167,map__53167__$1,props,joins,props__$1,data__$1){
return (function (p__53174){
var vec__53175 = p__53174;
var k = cljs.core.nth.call(null,vec__53175,(0),null);
var identset = cljs.core.nth.call(null,vec__53175,(1),null);
if(cljs.core.contains_QMARK_.call(null,identset,cljs.core.get.call(null,data__$1,k))){
return cljs.core.get_in.call(null,idents_seen,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last-ident","last-ident",534500972),k], null));
} else {
return null;
}
});})(joins__$1,ret,map__53167,map__53167__$1,props,joins,props__$1,data__$1))
,cljs.core.dissoc.call(null,idents_seen,new cljs.core.Keyword(null,"last-ident","last-ident",534500972)));
if(cljs.core.truth_(temp__4423__auto__)){
var looped_key = temp__4423__auto__;
return looped_key;
} else {
return cljs.core.merge.call(null,cljs.core.select_keys.call(null,data__$1,props__$1),ret);
}
}
break;
}
}
}
});
/**
 * Given a query, some data in the default database format, and the entire
 * application state in the default database format, return the tree where all
 * ident links have been replaced with their original node values.
 */
om.next.db__GT_tree = (function om$next$db__GT_tree(var_args){
var args53184 = [];
var len__36896__auto___53187 = arguments.length;
var i__36897__auto___53188 = (0);
while(true){
if((i__36897__auto___53188 < len__36896__auto___53187)){
args53184.push((arguments[i__36897__auto___53188]));

var G__53189 = (i__36897__auto___53188 + (1));
i__36897__auto___53188 = G__53189;
continue;
} else {
}
break;
}

var G__53186 = args53184.length;
switch (G__53186) {
case 3:
return om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53184.length)].join('')));

}
});

om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3 = (function (query,data,refs){
return om.next.denormalize_STAR_.call(null,query,data,refs,cljs.core.identity,cljs.core.PersistentArrayMap.EMPTY,null,null);
});

om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$4 = (function (query,data,refs,map_ident){
return om.next.denormalize_STAR_.call(null,query,data,refs,map_ident,cljs.core.PersistentArrayMap.EMPTY,null,null);
});

om.next.db__GT_tree.cljs$lang$maxFixedArity = 4;
om.next.rewrite = (function om$next$rewrite(rewrite_map,result){
var step = (function om$next$rewrite_$_step(res,p__53202){
var vec__53204 = p__53202;
var k = cljs.core.nth.call(null,vec__53204,(0),null);
var orig_paths = cljs.core.nth.call(null,vec__53204,(1),null);
var to_move = cljs.core.get.call(null,result,k);
var res_SINGLEQUOTE_ = cljs.core.reduce.call(null,((function (to_move,vec__53204,k,orig_paths){
return (function (p1__53191_SHARP_,p2__53192_SHARP_){
return cljs.core.assoc_in.call(null,p1__53191_SHARP_,cljs.core.conj.call(null,p2__53192_SHARP_,k),to_move);
});})(to_move,vec__53204,k,orig_paths))
,res,orig_paths);
return cljs.core.dissoc.call(null,res_SINGLEQUOTE_,k);
});
return cljs.core.reduce.call(null,step,result,rewrite_map);
});
/**
 * When given a join `{:join selector-vector}`, roots found so far, and a `path` prefix:
 *   returns a (possibly empty) sequence of [re-rooted-join prefix] results.
 *   Does NOT support sub-roots. Each re-rooted join will share only
 *   one common parent (their common branching point).
 *   
 */
om.next.move_roots = (function om$next$move_roots(join,result_roots,path){
var query_root_QMARK_ = (function om$next$move_roots_$_query_root_QMARK_(join__$1){
return new cljs.core.Keyword(null,"query-root","query-root",359781888).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,join__$1)) === true;
});
if(cljs.core.truth_(om.util.join_QMARK_.call(null,join))){
if(cljs.core.truth_(query_root_QMARK_.call(null,join))){
return cljs.core.conj.call(null,result_roots,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [join,path], null));
} else {
return cljs.core.mapcat.call(null,(function (p1__53205_SHARP_){
return om$next$move_roots.call(null,p1__53205_SHARP_,result_roots,cljs.core.conj.call(null,path,om.util.join_key.call(null,join)));
}),om.util.join_value.call(null,join));
}
} else {
return result_roots;
}
});
/**
 * Searches a query for duplicate joins and deep-merges them into a new query.
 */
om.next.merge_joins = (function om$next$merge_joins(query){
var step = (function om$next$merge_joins_$_step(res,expr){
if(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"elements-seen","elements-seen",723482521).cljs$core$IFn$_invoke$arity$1(res),expr)){
return res;
} else {
return cljs.core.update_in.call(null,(cljs.core.truth_((function (){var and__35826__auto__ = om.util.join_QMARK_.call(null,expr);
if(cljs.core.truth_(and__35826__auto__)){
return (!(om.util.union_QMARK_.call(null,expr))) && (!(cljs.core.list_QMARK_.call(null,expr)));
} else {
return and__35826__auto__;
}
})())?(function (){var jk = om.util.join_key.call(null,expr);
var jv = om.util.join_value.call(null,expr);
var q = (function (){var or__35838__auto__ = cljs.core.get.call(null,new cljs.core.Keyword(null,"query-by-join","query-by-join",-131270450).cljs$core$IFn$_invoke$arity$1(res),jk);
if(cljs.core.truth_(or__35838__auto__)){
return or__35838__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var nq = ((om.util.recursion_QMARK_.call(null,q))?q:((om.util.recursion_QMARK_.call(null,jv))?jv:om$next$merge_joins.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,q,jv)))
));
return cljs.core.update_in.call(null,res,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-by-join","query-by-join",-131270450)], null),cljs.core.assoc,jk,nq);
})():cljs.core.update_in.call(null,res,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"not-mergeable","not-mergeable",-291093370)], null),cljs.core.conj,expr)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements-seen","elements-seen",723482521)], null),cljs.core.conj,expr);
}
});
var init = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-by-join","query-by-join",-131270450),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"elements-seen","elements-seen",723482521),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"not-mergeable","not-mergeable",-291093370),cljs.core.PersistentVector.EMPTY], null);
var res = cljs.core.reduce.call(null,step,init,query);
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,new cljs.core.Keyword(null,"not-mergeable","not-mergeable",-291093370).cljs$core$IFn$_invoke$arity$1(res),cljs.core.mapv.call(null,((function (init,res){
return (function (p__53208){
var vec__53209 = p__53208;
var jkey = cljs.core.nth.call(null,vec__53209,(0),null);
var jsel = cljs.core.nth.call(null,vec__53209,(1),null);
return cljs.core.PersistentArrayMap.fromArray([jkey,jsel], true, false);
});})(init,res))
,new cljs.core.Keyword(null,"query-by-join","query-by-join",-131270450).cljs$core$IFn$_invoke$arity$1(res))));
});
om.next.process_roots = (function om$next$process_roots(query){

var retain = (function om$next$process_roots_$_retain(expr){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [expr,cljs.core.PersistentVector.EMPTY], null)], null);
});
var reroot = (function om$next$process_roots_$_reroot(expr){
var roots = om.next.move_roots.call(null,expr,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
if(cljs.core.empty_QMARK_.call(null,roots)){
return retain.call(null,expr);
} else {
return roots;
}
});
var rewrite_map_step = (function om$next$process_roots_$_rewrite_map_step(rewrites,p__53219){
var vec__53221 = p__53219;
var expr = cljs.core.nth.call(null,vec__53221,(0),null);
var path = cljs.core.nth.call(null,vec__53221,(1),null);
if(cljs.core.empty_QMARK_.call(null,path)){
return rewrites;
} else {
return cljs.core.update_in.call(null,rewrites,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.util.join_key.call(null,expr)], null),cljs.core.conj,path);
}
});
var reroots = cljs.core.mapcat.call(null,reroot,query);
var query__$1 = om.next.merge_joins.call(null,cljs.core.mapv.call(null,cljs.core.first,reroots));
var rewrite_map = cljs.core.reduce.call(null,rewrite_map_step,cljs.core.PersistentArrayMap.EMPTY,reroots);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),query__$1,new cljs.core.Keyword(null,"rewrite","rewrite",870487388),cljs.core.partial.call(null,om.next.rewrite,rewrite_map)], null);
});
om.next.merge_idents = (function om$next$merge_idents(tree,config,refs,query){
var map__53231 = config;
var map__53231__$1 = ((((!((map__53231 == null)))?((((map__53231.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53231.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53231):map__53231);
var merge_ident = cljs.core.get.call(null,map__53231__$1,new cljs.core.Keyword(null,"merge-ident","merge-ident",1040841862));
var indexer = cljs.core.get.call(null,map__53231__$1,new cljs.core.Keyword(null,"indexer","indexer",-1774914315));
var ident_joins = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (map__53231,map__53231__$1,merge_ident,indexer){
return (function (p1__53222_SHARP_){
var and__35826__auto__ = om.util.join_QMARK_.call(null,p1__53222_SHARP_);
if(cljs.core.truth_(and__35826__auto__)){
return om.util.ident_QMARK_.call(null,om.util.join_key.call(null,p1__53222_SHARP_));
} else {
return and__35826__auto__;
}
});})(map__53231,map__53231__$1,merge_ident,indexer))
,query));
var step = ((function (map__53231,map__53231__$1,merge_ident,indexer,ident_joins){
return (function om$next$merge_idents_$_step(tree_SINGLEQUOTE_,p__53236){
var vec__53238 = p__53236;
var ident = cljs.core.nth.call(null,vec__53238,(0),null);
var props = cljs.core.nth.call(null,vec__53238,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"normalize","normalize",-1904390051).cljs$core$IFn$_invoke$arity$1(config))){
var c_or_q = (function (){var or__35838__auto__ = cljs.core.get.call(null,ident_joins,ident);
if(cljs.core.truth_(or__35838__auto__)){
return or__35838__auto__;
} else {
return om.next.ref__GT_any.call(null,indexer,ident);
}
})();
var props_SINGLEQUOTE_ = om.next.tree__GT_db.call(null,c_or_q,props);
var refs__$1 = cljs.core.meta.call(null,props_SINGLEQUOTE_);
return new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161).cljs$core$IFn$_invoke$arity$1(config).call(null,merge_ident.call(null,config,tree_SINGLEQUOTE_,ident,props_SINGLEQUOTE_),refs__$1);
} else {
return merge_ident.call(null,config,tree_SINGLEQUOTE_,ident,props);
}
});})(map__53231,map__53231__$1,merge_ident,indexer,ident_joins))
;
return cljs.core.reduce.call(null,step,tree,refs);
});
om.next.merge_novelty_BANG_ = (function om$next$merge_novelty_BANG_(reconciler,state,res,query){
var config = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler);
var vec__53240 = om.next.sift_idents.call(null,res);
var idts = cljs.core.nth.call(null,vec__53240,(0),null);
var res_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__53240,(1),null);
var res_SINGLEQUOTE___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"normalize","normalize",-1904390051).cljs$core$IFn$_invoke$arity$1(config))?om.next.tree__GT_db.call(null,(function (){var or__35838__auto__ = query;
if(cljs.core.truth_(or__35838__auto__)){
return or__35838__auto__;
} else {
return new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(reconciler)));
}
})(),res_SINGLEQUOTE_,true):res_SINGLEQUOTE_);
return new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161).cljs$core$IFn$_invoke$arity$1(config).call(null,om.next.merge_idents.call(null,state,config,idts,query),res_SINGLEQUOTE___$1);
});
om.next.default_merge = (function om$next$default_merge(reconciler,state,res,query){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"keys","keys",1068423698),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.symbol_QMARK_),cljs.core.keys.call(null,res)),new cljs.core.Keyword(null,"next","next",-117701485),om.next.merge_novelty_BANG_.call(null,reconciler,state,res,query),new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.reduce.call(null,cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.second),cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.symbol_QMARK_,cljs.core.first),res)))], null);
});
/**
 * Merge a state delta into the application state. Affected components managed
 * by the reconciler will re-render.
 */
om.next.merge_BANG_ = (function om$next$merge_BANG_(var_args){
var args53241 = [];
var len__36896__auto___53246 = arguments.length;
var i__36897__auto___53247 = (0);
while(true){
if((i__36897__auto___53247 < len__36896__auto___53246)){
args53241.push((arguments[i__36897__auto___53247]));

var G__53248 = (i__36897__auto___53247 + (1));
i__36897__auto___53247 = G__53248;
continue;
} else {
}
break;
}

var G__53243 = args53241.length;
switch (G__53243) {
case 2:
return om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53241.length)].join('')));

}
});

om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (reconciler,delta){
return om.next.merge_BANG_.call(null,reconciler,delta,null);
});

om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (reconciler,delta,query){
var config = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler);
var state = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(config);
var merge_STAR_ = new cljs.core.Keyword(null,"merge","merge",-1804319409).cljs$core$IFn$_invoke$arity$1(config);
var map__53244 = merge_STAR_.call(null,reconciler,cljs.core.deref.call(null,state),delta,query);
var map__53244__$1 = ((((!((map__53244 == null)))?((((map__53244.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53244.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53244):map__53244);
var keys = cljs.core.get.call(null,map__53244__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var next = cljs.core.get.call(null,map__53244__$1,new cljs.core.Keyword(null,"next","next",-117701485));
var tempids = cljs.core.get.call(null,map__53244__$1,new cljs.core.Keyword(null,"tempids","tempids",1767509089));
om.next.protocols.queue_BANG_.call(null,reconciler,keys);

return cljs.core.reset_BANG_.call(null,state,(function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"migrate","migrate",-207110743).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(temp__4423__auto__)){
var migrate = temp__4423__auto__;
return cljs.core.merge.call(null,cljs.core.select_keys.call(null,next,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null)),migrate.call(null,next,(function (){var or__35838__auto__ = query;
if(cljs.core.truth_(or__35838__auto__)){
return or__35838__auto__;
} else {
return om.next.get_query.call(null,new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(reconciler))));
}
})(),tempids,new cljs.core.Keyword(null,"id-key","id-key",-1881730044).cljs$core$IFn$_invoke$arity$1(config)));
} else {
return next;
}
})());
});

om.next.merge_BANG_.cljs$lang$maxFixedArity = 3;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {om.next.protocols.IReconciler}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.next.Reconciler = (function (config,state,__meta,__extmap,__hash){
this.config = config;
this.state = state;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229700362;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.next.Reconciler.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__36452__auto__,k__36453__auto__){
var self__ = this;
var this__36452__auto____$1 = this;
return cljs.core._lookup.call(null,this__36452__auto____$1,k__36453__auto__,null);
});

om.next.Reconciler.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__36454__auto__,k53255,else__36455__auto__){
var self__ = this;
var this__36454__auto____$1 = this;
var G__53257 = (((k53255 instanceof cljs.core.Keyword))?k53255.fqn:null);
switch (G__53257) {
case "config":
return self__.config;

break;
case "state":
return self__.state;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k53255,else__36455__auto__);

}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$ = true;

om.next.Reconciler.prototype.om$next$protocols$IReconciler$queue_BANG_$arity$2 = (function (_,ks){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1455835879)], null),cljs.core.into,ks);
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$queue_sends_BANG_$arity$2 = (function (_,sends){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queued-sends","queued-sends",278114765)], null),new cljs.core.Keyword(null,"merge-sends","merge-sends",-1718434202).cljs$core$IFn$_invoke$arity$1(self__.config),sends);
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$send_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var sends = new cljs.core.Keyword(null,"queued-sends","queued-sends",278114765).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state));
if(cljs.core.empty_QMARK_.call(null,sends)){
return null;
} else {
cljs.core.swap_BANG_.call(null,self__.state,((function (sends,this$__$1){
return (function (state__$1){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"queued-sends","queued-sends",278114765),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"sends-queued","sends-queued",-1276878712),false);
});})(sends,this$__$1))
);

return new cljs.core.Keyword(null,"send","send",-652151114).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,sends,((function (sends,this$__$1){
return (function (res,query){
return om.next.merge_BANG_.call(null,this$__$1,res,query);
});})(sends,this$__$1))
);
}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$reconcile_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var st = cljs.core.deref.call(null,self__.state);
var q = new cljs.core.Keyword(null,"queue","queue",1455835879).cljs$core$IFn$_invoke$arity$1(st);
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queued","queued",1701634607)], null),cljs.core.not);

cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.PersistentVector.EMPTY);

if(cljs.core.empty_QMARK_.call(null,q)){
return new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(st).call(null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","skip","om.next/skip",-2023963650)], null),q)){
return null;
} else {
var cs = cljs.core.transduce.call(null,cljs.core.map.call(null,((function (st,q,___$1){
return (function (p1__53251_SHARP_){
return om.next.protocols.key__GT_components.call(null,new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(self__.config),p1__53251_SHARP_);
});})(st,q,___$1))
),((function (st,q,___$1){
return (function (p1__53252_SHARP_,p2__53253_SHARP_){
return cljs.core.into.call(null,p1__53252_SHARP_,p2__53253_SHARP_);
});})(st,q,___$1))
,cljs.core.PersistentHashSet.EMPTY,q);
var map__53258 = self__.config;
var map__53258__$1 = ((((!((map__53258 == null)))?((((map__53258.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53258.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53258):map__53258);
var ui__GT_props = cljs.core.get.call(null,map__53258__$1,new cljs.core.Keyword(null,"ui->props","ui->props",-237981102));
var env = om.next.to_env.call(null,self__.config);
var seq__53260 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"optimize","optimize",-1912349448).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,cs));
var chunk__53261 = null;
var count__53262 = (0);
var i__53263 = (0);
while(true){
if((i__53263 < count__53262)){
var c = cljs.core._nth.call(null,chunk__53261,i__53263);
if(om.next.mounted_QMARK_.call(null,c)){
var computed_53271 = om.next.get_computed.call(null,om.next.props.call(null,c));
var next_props_53272 = om.next.computed.call(null,ui__GT_props.call(null,env,c),computed_53271);
if(cljs.core.truth_(om.next.should_update_QMARK_.call(null,c,next_props_53272,om.next.get_state.call(null,c)))){
if(!((next_props_53272 == null))){
om.next.update_component_BANG_.call(null,c,next_props_53272);
} else {
c.forceUpdate();
}
} else {
}
} else {
}

var G__53273 = seq__53260;
var G__53274 = chunk__53261;
var G__53275 = count__53262;
var G__53276 = (i__53263 + (1));
seq__53260 = G__53273;
chunk__53261 = G__53274;
count__53262 = G__53275;
i__53263 = G__53276;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__53260);
if(temp__4425__auto__){
var seq__53260__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53260__$1)){
var c__36641__auto__ = cljs.core.chunk_first.call(null,seq__53260__$1);
var G__53277 = cljs.core.chunk_rest.call(null,seq__53260__$1);
var G__53278 = c__36641__auto__;
var G__53279 = cljs.core.count.call(null,c__36641__auto__);
var G__53280 = (0);
seq__53260 = G__53277;
chunk__53261 = G__53278;
count__53262 = G__53279;
i__53263 = G__53280;
continue;
} else {
var c = cljs.core.first.call(null,seq__53260__$1);
if(om.next.mounted_QMARK_.call(null,c)){
var computed_53281 = om.next.get_computed.call(null,om.next.props.call(null,c));
var next_props_53282 = om.next.computed.call(null,ui__GT_props.call(null,env,c),computed_53281);
if(cljs.core.truth_(om.next.should_update_QMARK_.call(null,c,next_props_53282,om.next.get_state.call(null,c)))){
if(!((next_props_53282 == null))){
om.next.update_component_BANG_.call(null,c,next_props_53282);
} else {
c.forceUpdate();
}
} else {
}
} else {
}

var G__53283 = cljs.core.next.call(null,seq__53260__$1);
var G__53284 = null;
var G__53285 = (0);
var G__53286 = (0);
seq__53260 = G__53283;
chunk__53261 = G__53284;
count__53262 = G__53285;
i__53263 = G__53286;
continue;
}
} else {
return null;
}
}
break;
}

}
}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$schedule_render_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"queued","queued",1701634607).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)))){
return cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queued","queued",1701634607)], null),cljs.core.not);
} else {
return false;
}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$schedule_sends_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"sends-queued","sends-queued",-1276878712).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)))){
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"sends-queued","sends-queued",-1276878712),true);

return true;
} else {
return false;
}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$basis_t$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"t","t",-1397832519).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state));
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$add_root_BANG_$arity$4 = (function (this$,root_class,target,options){
var self__ = this;
var this$__$1 = this;
var ret = cljs.core.atom.call(null,null);
var rctor = om.next.factory.call(null,root_class);
var guid = cljs.core.random_uuid.call(null);
if(om.next.iquery_QMARK_.call(null,root_class)){
om.next.protocols.index_root.call(null,new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(self__.config),root_class);
} else {
}

if(cljs.core.truth_((function (){var and__35826__auto__ = new cljs.core.Keyword(null,"normalize","normalize",-1904390051).cljs$core$IFn$_invoke$arity$1(self__.config);
if(cljs.core.truth_(and__35826__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"normalized","normalized",-1887621663).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)));
} else {
return and__35826__auto__;
}
})())){
var new_state_53287 = om.next.tree__GT_db.call(null,root_class,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config)));
var refs_53288 = cljs.core.meta.call(null,new_state_53287);
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config),cljs.core.merge.call(null,new_state_53287,refs_53288));

cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"normalized","normalized",-1887621663),true);
} else {
}

var renderf = ((function (ret,rctor,guid,this$__$1){
return (function (data){
var _STAR_reconciler_STAR_53264 = om.next._STAR_reconciler_STAR_;
var _STAR_shared_STAR_53265 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_53266 = om.next._STAR_instrument_STAR_;
om.next._STAR_reconciler_STAR_ = this$__$1;

om.next._STAR_shared_STAR_ = cljs.core.merge.call(null,new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(self__.config),(cljs.core.truth_(new cljs.core.Keyword(null,"shared-fn","shared-fn",-180260144).cljs$core$IFn$_invoke$arity$1(self__.config))?new cljs.core.Keyword(null,"shared-fn","shared-fn",-180260144).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,data):null));

om.next._STAR_instrument_STAR_ = new cljs.core.Keyword(null,"instrument","instrument",-960698844).cljs$core$IFn$_invoke$arity$1(self__.config);

try{var c = ((!((target == null)))?new cljs.core.Keyword(null,"root-render","root-render",835981146).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,rctor.call(null,data),target):(((cljs.core.deref.call(null,ret) == null))?rctor.call(null,data):(function (){var temp__4425__auto__ = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(temp__4425__auto__)){
var c_SINGLEQUOTE_ = temp__4425__auto__;
if(om.next.mounted_QMARK_.call(null,c_SINGLEQUOTE_)){
return c_SINGLEQUOTE_.forceUpdate(data);
} else {
return null;
}
} else {
return null;
}
})()
));
if(((cljs.core.deref.call(null,ret) == null)) && (!((c == null)))){
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"root","root",-448657453),c);

return cljs.core.reset_BANG_.call(null,ret,c);
} else {
return null;
}
}finally {om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_53266;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_53265;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_53264;
}});})(ret,rctor,guid,this$__$1))
;
var parsef = ((function (renderf,ret,rctor,guid,this$__$1){
return (function (){
var sel = om.next.get_query.call(null,(function (){var or__35838__auto__ = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(or__35838__auto__)){
return or__35838__auto__;
} else {
return root_class;
}
})());
if(((sel == null)) || (cljs.core.vector_QMARK_.call(null,sel))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Application root query must be a vector"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"sel","sel",-45623280,null)),cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"sel","sel",-45623280,null)))))].join('')));
}

if(!((sel == null))){
var env = om.next.to_env.call(null,self__.config);
var v = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,env,sel);
if(cljs.core.empty_QMARK_.call(null,v)){
return null;
} else {
return renderf.call(null,v);
}
} else {
return renderf.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config)));
}
});})(renderf,ret,rctor,guid,this$__$1))
;
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"render","render",-1408033454),parsef,new cljs.core.Keyword(null,"root","root",-448657453),root_class,new cljs.core.Keyword(null,"remove","remove",-131428414),((function (renderf,parsef,ret,rctor,guid,this$__$1){
return (function (){
cljs.core.remove_watch.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config),(function (){var or__35838__auto__ = target;
if(cljs.core.truth_(or__35838__auto__)){
return or__35838__auto__;
} else {
return guid;
}
})());

cljs.core.swap_BANG_.call(null,self__.state,((function (renderf,parsef,ret,rctor,guid,this$__$1){
return (function (p1__53250_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__53250_SHARP_,new cljs.core.Keyword(null,"target","target",253001721)),new cljs.core.Keyword(null,"render","render",-1408033454)),new cljs.core.Keyword(null,"root","root",-448657453)),new cljs.core.Keyword(null,"remove","remove",-131428414));
});})(renderf,parsef,ret,rctor,guid,this$__$1))
);

if((target == null)){
return null;
} else {
return new cljs.core.Keyword(null,"root-unmount","root-unmount",1692900789).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,target);
}
});})(renderf,parsef,ret,rctor,guid,this$__$1))
], null));

cljs.core.add_watch.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config),(function (){var or__35838__auto__ = target;
if(cljs.core.truth_(or__35838__auto__)){
return or__35838__auto__;
} else {
return guid;
}
})(),((function (renderf,parsef,ret,rctor,guid,this$__$1){
return (function (_,___$1,___$2,___$3){
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519)], null),cljs.core.inc);

return om.next.schedule_render_BANG_.call(null,this$__$1);
});})(renderf,parsef,ret,rctor,guid,this$__$1))
);

parsef.call(null);

var temp__4425__auto___53289 = om.next.get_query.call(null,(function (){var or__35838__auto__ = (function (){var and__35826__auto__ = target;
if(cljs.core.truth_(and__35826__auto__)){
return cljs.core.deref.call(null,ret);
} else {
return and__35826__auto__;
}
})();
if(cljs.core.truth_(or__35838__auto__)){
return or__35838__auto__;
} else {
return root_class;
}
})());
if(cljs.core.truth_(temp__4425__auto___53289)){
var sel_53290 = temp__4425__auto___53289;
var env_53291 = om.next.to_env.call(null,self__.config);
var snds_53292 = om.next.gather_sends.call(null,env_53291,sel_53290,new cljs.core.Keyword(null,"remotes","remotes",1132366312).cljs$core$IFn$_invoke$arity$1(self__.config));
if(cljs.core.empty_QMARK_.call(null,snds_53292)){
} else {
var temp__4425__auto___53293__$1 = new cljs.core.Keyword(null,"send","send",-652151114).cljs$core$IFn$_invoke$arity$1(self__.config);
if(cljs.core.truth_(temp__4425__auto___53293__$1)){
var send_53294 = temp__4425__auto___53293__$1;
send_53294.call(null,snds_53292,((function (send_53294,temp__4425__auto___53293__$1,env_53291,snds_53292,sel_53290,temp__4425__auto___53289,renderf,parsef,ret,rctor,guid,this$__$1){
return (function (res,query){
om.next.merge_BANG_.call(null,this$__$1,res,query);

return renderf.call(null,new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,env_53291,sel_53290));
});})(send_53294,temp__4425__auto___53293__$1,env_53291,snds_53292,sel_53290,temp__4425__auto___53289,renderf,parsef,ret,rctor,guid,this$__$1))
);
} else {
}
}
} else {
}

return cljs.core.deref.call(null,ret);
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$reindex_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var root = cljs.core.get.call(null,cljs.core.deref.call(null,self__.state),new cljs.core.Keyword(null,"root","root",-448657453));
if(om.next.iquery_QMARK_.call(null,root)){
var indexer = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(self__.config);
var c = cljs.core.first.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,indexer),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),root], null)));
return om.next.protocols.index_root.call(null,indexer,(function (){var or__35838__auto__ = c;
if(cljs.core.truth_(or__35838__auto__)){
return or__35838__auto__;
} else {
return root;
}
})());
} else {
return null;
}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$remove_root_BANG_$arity$2 = (function (_,target){
var self__ = this;
var ___$1 = this;
var temp__4425__auto__ = new cljs.core.Keyword(null,"remove","remove",-131428414).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state));
if(cljs.core.truth_(temp__4425__auto__)){
var remove = temp__4425__auto__;
return remove.call(null);
} else {
return null;
}
});

om.next.Reconciler.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__36466__auto__,writer__36467__auto__,opts__36468__auto__){
var self__ = this;
var this__36466__auto____$1 = this;
var pr_pair__36469__auto__ = ((function (this__36466__auto____$1){
return (function (keyval__36470__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__36467__auto__,cljs.core.pr_writer,""," ","",opts__36468__auto__,keyval__36470__auto__);
});})(this__36466__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__36467__auto__,pr_pair__36469__auto__,"#om.next.Reconciler{",", ","}",opts__36468__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null))], null),self__.__extmap));
});

om.next.Reconciler.prototype.cljs$core$IIterable$ = true;

om.next.Reconciler.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__53254){
var self__ = this;
var G__53254__$1 = this;
return (new cljs.core.RecordIter((0),G__53254__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"state","state",-1988618099)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

om.next.Reconciler.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__36450__auto__){
var self__ = this;
var this__36450__auto____$1 = this;
return self__.__meta;
});

om.next.Reconciler.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__36446__auto__){
var self__ = this;
var this__36446__auto____$1 = this;
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,self__.__extmap,self__.__hash));
});

om.next.Reconciler.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__36456__auto__){
var self__ = this;
var this__36456__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

om.next.Reconciler.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__36447__auto__){
var self__ = this;
var this__36447__auto____$1 = this;
var h__36273__auto__ = self__.__hash;
if(!((h__36273__auto__ == null))){
return h__36273__auto__;
} else {
var h__36273__auto____$1 = cljs.core.hash_imap.call(null,this__36447__auto____$1);
self__.__hash = h__36273__auto____$1;

return h__36273__auto____$1;
}
});

om.next.Reconciler.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__36448__auto__,other__36449__auto__){
var self__ = this;
var this__36448__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35826__auto__ = other__36449__auto__;
if(cljs.core.truth_(and__35826__auto__)){
var and__35826__auto____$1 = (this__36448__auto____$1.constructor === other__36449__auto__.constructor);
if(and__35826__auto____$1){
return cljs.core.equiv_map.call(null,this__36448__auto____$1,other__36449__auto__);
} else {
return and__35826__auto____$1;
}
} else {
return and__35826__auto__;
}
})())){
return true;
} else {
return false;
}
});

om.next.Reconciler.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__36461__auto__,k__36462__auto__){
var self__ = this;
var this__36461__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"config","config",994861415),null,new cljs.core.Keyword(null,"state","state",-1988618099),null], null), null),k__36462__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__36461__auto____$1),self__.__meta),k__36462__auto__);
} else {
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__36462__auto__)),null));
}
});

om.next.Reconciler.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__36459__auto__,k__36460__auto__,G__53254){
var self__ = this;
var this__36459__auto____$1 = this;
var pred__53267 = cljs.core.keyword_identical_QMARK_;
var expr__53268 = k__36460__auto__;
if(cljs.core.truth_(pred__53267.call(null,new cljs.core.Keyword(null,"config","config",994861415),expr__53268))){
return (new om.next.Reconciler(G__53254,self__.state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__53267.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),expr__53268))){
return (new om.next.Reconciler(self__.config,G__53254,self__.__meta,self__.__extmap,null));
} else {
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__36460__auto__,G__53254),null));
}
}
});

om.next.Reconciler.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__36464__auto__){
var self__ = this;
var this__36464__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null))], null),self__.__extmap));
});

om.next.Reconciler.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__36451__auto__,G__53254){
var self__ = this;
var this__36451__auto____$1 = this;
return (new om.next.Reconciler(self__.config,self__.state,G__53254,self__.__extmap,self__.__hash));
});

om.next.Reconciler.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__36457__auto__,entry__36458__auto__){
var self__ = this;
var this__36457__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__36458__auto__)){
return cljs.core._assoc.call(null,this__36457__auto____$1,cljs.core._nth.call(null,entry__36458__auto__,(0)),cljs.core._nth.call(null,entry__36458__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__36457__auto____$1,entry__36458__auto__);
}
});

om.next.Reconciler.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config));
});

om.next.Reconciler.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"config","config",-1659574354,null),new cljs.core.Symbol(null,"state","state",-348086572,null)], null);
});

om.next.Reconciler.cljs$lang$type = true;

om.next.Reconciler.cljs$lang$ctorPrSeq = (function (this__36486__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"om.next/Reconciler");
});

om.next.Reconciler.cljs$lang$ctorPrWriter = (function (this__36486__auto__,writer__36487__auto__){
return cljs.core._write.call(null,writer__36487__auto__,"om.next/Reconciler");
});

om.next.__GT_Reconciler = (function om$next$__GT_Reconciler(config,state){
return (new om.next.Reconciler(config,state,null,null,null));
});

om.next.map__GT_Reconciler = (function om$next$map__GT_Reconciler(G__53256){
return (new om.next.Reconciler(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(G__53256),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__53256),null,cljs.core.dissoc.call(null,G__53256,new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"state","state",-1988618099)),null));
});

om.next.default_ui__GT_props = (function om$next$default_ui__GT_props(p__53295,c){
var map__53301 = p__53295;
var map__53301__$1 = ((((!((map__53301 == null)))?((((map__53301.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53301.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53301):map__53301);
var env = map__53301__$1;
var parser = cljs.core.get.call(null,map__53301__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var pathopt = cljs.core.get.call(null,map__53301__$1,new cljs.core.Keyword(null,"pathopt","pathopt",-61073149));
var ui = (((function (){var and__35826__auto__ = pathopt;
if(and__35826__auto__){
var and__35826__auto____$1 = ((!((c == null)))?(((false) || (c.om$next$Ident$))?true:false):false);
if(and__35826__auto____$1){
return om.next.iquery_QMARK_.call(null,c);
} else {
return and__35826__auto____$1;
}
} else {
return and__35826__auto__;
}
})())?(function (){var id = om.next.ident.call(null,c,om.next.props.call(null,c));
return cljs.core.get.call(null,parser.call(null,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([id,om.next.get_query.call(null,c)], true, false)], null)),id);
})():null);
if(!((ui == null))){
return ui;
} else {
var fq = om.next.full_query.call(null,c);
if((fq == null)){
return null;
} else {
var s = cljs.core.system_time.call(null);
var ui__$1 = parser.call(null,env,fq);
var e = cljs.core.system_time.call(null);
var temp__4425__auto___53306 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__4425__auto___53306)){
var l_53307 = temp__4425__auto___53306;
var dt_53308 = (e - s);
if(((16) < dt_53308)){
goog.log.warning(l_53307,[cljs.core.str(c),cljs.core.str(" query took "),cljs.core.str(dt_53308),cljs.core.str(" msecs")].join(''));
} else {
}
} else {
}

return cljs.core.get_in.call(null,ui__$1,om.next.path.call(null,c));
}
}
});
om.next.default_merge_ident = (function om$next$default_merge_ident(_,tree,ref,props){
return cljs.core.update_in.call(null,tree,ref,cljs.core.merge,props);
});
om.next.default_merge_tree = (function om$next$default_merge_tree(a,b){
if(cljs.core.map_QMARK_.call(null,a)){
return cljs.core.merge.call(null,a,b);
} else {
return b;
}
});
/**
 * Given app-state-pure (the application state as an immutable value), a query,
 * tempids (a hash map from tempid to stable id), and an optional id-key
 * keyword, return a new application state value with the tempids replaced by
 * the stable ids.
 */
om.next.default_migrate = (function om$next$default_migrate(var_args){
var args53309 = [];
var len__36896__auto___53332 = arguments.length;
var i__36897__auto___53333 = (0);
while(true){
if((i__36897__auto___53333 < len__36896__auto___53332)){
args53309.push((arguments[i__36897__auto___53333]));

var G__53334 = (i__36897__auto___53333 + (1));
i__36897__auto___53333 = G__53334;
continue;
} else {
}
break;
}

var G__53311 = args53309.length;
switch (G__53311) {
case 3:
return om.next.default_migrate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.default_migrate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53309.length)].join('')));

}
});

om.next.default_migrate.cljs$core$IFn$_invoke$arity$3 = (function (app_state_pure,query,tempids){
return om.next.default_migrate.call(null,app_state_pure,query,tempids,null);
});

om.next.default_migrate.cljs$core$IFn$_invoke$arity$4 = (function (app_state_pure,query,tempids,id_key){
var dissoc_in = (function om$next$dissoc_in(pure,p__53322){
var vec__53324 = p__53322;
var table = cljs.core.nth.call(null,vec__53324,(0),null);
var id = cljs.core.nth.call(null,vec__53324,(1),null);
return cljs.core.assoc.call(null,pure,table,cljs.core.dissoc.call(null,cljs.core.get.call(null,pure,table),id));
});
var step = (function om$next$step(pure,p__53325){
var vec__53329 = p__53325;
var old = cljs.core.nth.call(null,vec__53329,(0),null);
var vec__53330 = cljs.core.nth.call(null,vec__53329,(1),null);
var _ = cljs.core.nth.call(null,vec__53330,(0),null);
var id = cljs.core.nth.call(null,vec__53330,(1),null);
var new$ = vec__53330;
return cljs.core.assoc_in.call(null,dissoc_in.call(null,pure,old),new$,(function (){var G__53331 = cljs.core.merge.call(null,cljs.core.get_in.call(null,pure,old),cljs.core.get_in.call(null,pure,new$));
var G__53331__$1 = ((!((id_key == null)))?cljs.core.assoc.call(null,G__53331,id_key,id):G__53331);
return G__53331__$1;
})());
});
if(!(cljs.core.empty_QMARK_.call(null,tempids))){
var pure_SINGLEQUOTE_ = cljs.core.reduce.call(null,step,app_state_pure,tempids);
return om.next.tree__GT_db.call(null,query,om.next.db__GT_tree.call(null,query,pure_SINGLEQUOTE_,pure_SINGLEQUOTE_,((function (pure_SINGLEQUOTE_){
return (function (ident){
return cljs.core.get.call(null,tempids,ident,ident);
});})(pure_SINGLEQUOTE_))
),true);
} else {
return app_state_pure;
}
});

om.next.default_migrate.cljs$lang$maxFixedArity = 4;
om.next.has_error_QMARK_ = (function om$next$has_error_QMARK_(x){
return (cljs.core.map_QMARK_.call(null,x)) && (cljs.core.contains_QMARK_.call(null,x,new cljs.core.Keyword("om.next","error","om.next/error",-1841983205)));
});
om.next.default_extract_errors = (function om$next$default_extract_errors(reconciler,res,query){
var extract_STAR_ = (function om$next$default_extract_errors_$_extract_STAR_(query__$1,res__$1,errs){
var class$ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query__$1));
var top_error_QMARK_ = (((!((class$ == null))) && (om.next.has_error_QMARK_.call(null,res__$1)))?cljs.core.swap_BANG_.call(null,errs,((function (class$){
return (function (p1__53336_SHARP_){
return cljs.core.update_in.call(null,p1__53336_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.ident.call(null,class$,res__$1)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),new cljs.core.Keyword("om.next","error","om.next/error",-1841983205).cljs$core$IFn$_invoke$arity$1(res__$1));
});})(class$))
):null);
var ret = (((top_error_QMARK_ == null))?cljs.core.PersistentArrayMap.EMPTY:null);
if(cljs.core.vector_QMARK_.call(null,query__$1)){
if(cljs.core.vector_QMARK_.call(null,res__$1)){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (class$,top_error_QMARK_,ret){
return (function (p1__53337_SHARP_){
return om$next$default_extract_errors_$_extract_STAR_.call(null,query__$1,p1__53337_SHARP_,errs);
});})(class$,top_error_QMARK_,ret))
),res__$1);
} else {
var exprs = cljs.core.seq.call(null,query__$1);
var ret__$1 = ret;
while(true){
if(!((exprs == null))){
var expr = cljs.core.first.call(null,exprs);
var k = (function (){var k = om.next.expr__GT_key.call(null,expr);
var k__$1 = (function (){var G__53348 = k;
var G__53348__$1 = ((om.util.unique_ident_QMARK_.call(null,k))?cljs.core.first.call(null,G__53348):G__53348);
return G__53348__$1;
})();
return k__$1;
})();
var data = cljs.core.get.call(null,res__$1,k);
if(om.util.mutation_QMARK_.call(null,expr)){
var mk = om.util.mutation_key.call(null,expr);
var ret_SINGLEQUOTE_ = cljs.core.get.call(null,res__$1,mk);
if(om.next.has_error_QMARK_.call(null,ret_SINGLEQUOTE_)){
var x = new cljs.core.Keyword(null,"mutator","mutator",-1326825366).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,expr));
cljs.core.swap_BANG_.call(null,errs,((function (exprs,ret__$1,x,mk,ret_SINGLEQUOTE_,expr,k,data,class$,top_error_QMARK_,ret){
return (function (p1__53338_SHARP_){
return cljs.core.update_in.call(null,p1__53338_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),new cljs.core.Keyword("om.next","error","om.next/error",-1841983205).cljs$core$IFn$_invoke$arity$1(ret_SINGLEQUOTE_));
});})(exprs,ret__$1,x,mk,ret_SINGLEQUOTE_,expr,k,data,class$,top_error_QMARK_,ret))
);

var G__53349 = cljs.core.next.call(null,exprs);
var G__53350 = ret__$1;
exprs = G__53349;
ret__$1 = G__53350;
continue;
} else {
var G__53351 = cljs.core.next.call(null,exprs);
var G__53352 = (((ret__$1 == null))?null:cljs.core.assoc.call(null,ret__$1,mk,ret_SINGLEQUOTE_));
exprs = G__53351;
ret__$1 = G__53352;
continue;
}
} else {
if(om.util.union_QMARK_.call(null,expr)){
var jk = om.util.join_key.call(null,expr);
var jv = om.util.join_value.call(null,expr);
var class_SINGLEQUOTE_ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,jv));
if(!(cljs.core.vector_QMARK_.call(null,data))){
var ret_SINGLEQUOTE_ = om$next$default_extract_errors_$_extract_STAR_.call(null,cljs.core.get.call(null,jv,cljs.core.first.call(null,om.next.ident.call(null,class_SINGLEQUOTE_,data))),data,errs);
var G__53353 = cljs.core.next.call(null,exprs);
var G__53354 = (((ret__$1 == null))?null:cljs.core.assoc.call(null,ret__$1,jk,ret_SINGLEQUOTE_));
exprs = G__53353;
ret__$1 = G__53354;
continue;
} else {
var ret_SINGLEQUOTE_ = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (exprs,ret__$1,jk,jv,class_SINGLEQUOTE_,expr,k,data,class$,top_error_QMARK_,ret){
return (function (p1__53339_SHARP_){
return om$next$default_extract_errors_$_extract_STAR_.call(null,cljs.core.get.call(null,jv,cljs.core.first.call(null,om.next.ident.call(null,class_SINGLEQUOTE_,p1__53339_SHARP_))),p1__53339_SHARP_,errs);
});})(exprs,ret__$1,jk,jv,class_SINGLEQUOTE_,expr,k,data,class$,top_error_QMARK_,ret))
),data);
var G__53355 = cljs.core.next.call(null,exprs);
var G__53356 = (((ret__$1 == null))?null:cljs.core.assoc.call(null,ret__$1,jk,ret_SINGLEQUOTE_));
exprs = G__53355;
ret__$1 = G__53356;
continue;
}
} else {
if(cljs.core.truth_(om.util.join_QMARK_.call(null,expr))){
var jk = om.util.join_key.call(null,expr);
var jv = om.util.join_value.call(null,expr);
var ret_SINGLEQUOTE_ = om$next$default_extract_errors_$_extract_STAR_.call(null,jv,data,errs);
var G__53357 = cljs.core.next.call(null,exprs);
var G__53358 = (((ret__$1 == null))?null:cljs.core.assoc.call(null,ret__$1,jk,ret_SINGLEQUOTE_));
exprs = G__53357;
ret__$1 = G__53358;
continue;
} else {
if((cljs.core.map_QMARK_.call(null,data)) && (om.next.has_error_QMARK_.call(null,data))){
cljs.core.swap_BANG_.call(null,errs,((function (exprs,ret__$1,expr,k,data,class$,top_error_QMARK_,ret){
return (function (p1__53340_SHARP_){
return cljs.core.update_in.call(null,p1__53340_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__35838__auto__ = (((class$ == null))?null:om.next.ident.call(null,class$,res__$1));
if(cljs.core.truth_(or__35838__auto__)){
return or__35838__auto__;
} else {
return k;
}
})()], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),new cljs.core.Keyword("om.next","error","om.next/error",-1841983205).cljs$core$IFn$_invoke$arity$1(data));
});})(exprs,ret__$1,expr,k,data,class$,top_error_QMARK_,ret))
);

var G__53359 = cljs.core.next.call(null,exprs);
var G__53360 = null;
exprs = G__53359;
ret__$1 = G__53360;
continue;
} else {
var G__53361 = cljs.core.next.call(null,exprs);
var G__53362 = (((ret__$1 == null))?null:cljs.core.assoc.call(null,ret__$1,k,data));
exprs = G__53361;
ret__$1 = G__53362;
continue;

}
}
}
}
} else {
return ret__$1;
}
break;
}
}
} else {
return null;
}
});
var errs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ret = extract_STAR_.call(null,query,res,errs);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tree","tree",-196312028),ret,new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.deref.call(null,errs)], null);
});
/**
 * Construct a reconciler from a configuration map.
 * 
 * Required parameters:
 *   :state        - the application state. If IAtom value is not supplied the
 *                   data will be normalized into the default database format
 *                   using the root query. This can be disabled by explicitly
 *                   setting the optional :normalize parameter to false.
 *   :parser       - the parser to be used
 * 
 * Optional parameters:
 *   :shared       - a map of global shared properties for the component tree.
 *   :shared-fn    - a function to compute global shared properties from the root props.
 *                   the result is merged with :shared.
 *   :send         - required only if the parser will return a non-empty value when
 *                   run against the supplied :remotes. send is a function of two
 *                   arguments, the map of remote expressions keyed by remote target
 *                   and a callback which should be invoked with the result from each
 *                   remote target. Note this means the callback can be invoked
 *                   multiple times to support parallel fetching and incremental
 *                   loading if desired. The callback should take the response as the
 *                   first argument and the the query that was sent as the second
 *                   argument.
 *   :normalize    - whether the state should be normalized. If true it is assumed
 *                   all novelty introduced into the system will also need
 *                   normalization.
 *   :remotes      - a vector of keywords representing remote services which can
 *                   evaluate query expressions. Defaults to [:remote]
 *   :root-render  - the root render function. Defaults to ReactDOM.render
 *   :root-unmount - the root unmount function. Defaults to
 *                   ReactDOM.unmountComponentAtNode
 *   :logger       - supply a goog.log compatible logger
 */
om.next.reconciler = (function om$next$reconciler(p__53368){
var map__53375 = p__53368;
var map__53375__$1 = ((((!((map__53375 == null)))?((((map__53375.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53375.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53375):map__53375);
var config = map__53375__$1;
var root_render = cljs.core.get.call(null,map__53375__$1,new cljs.core.Keyword(null,"root-render","root-render",835981146),((function (map__53375,map__53375__$1,config){
return (function (p1__53365_SHARP_,p2__53366_SHARP_){
return ReactDOM.render(p1__53365_SHARP_,p2__53366_SHARP_);
});})(map__53375,map__53375__$1,config))
);
var normalize = cljs.core.get.call(null,map__53375__$1,new cljs.core.Keyword(null,"normalize","normalize",-1904390051));
var prune_tree = cljs.core.get.call(null,map__53375__$1,new cljs.core.Keyword(null,"prune-tree","prune-tree",142138431),om.next.default_extract_errors);
var pathopt = cljs.core.get.call(null,map__53375__$1,new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),false);
var instrument = cljs.core.get.call(null,map__53375__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var id_key = cljs.core.get.call(null,map__53375__$1,new cljs.core.Keyword(null,"id-key","id-key",-1881730044));
var merge_sends = cljs.core.get.call(null,map__53375__$1,new cljs.core.Keyword(null,"merge-sends","merge-sends",-1718434202),((function (map__53375,map__53375__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key){
return (function (p1__53363_SHARP_,p2__53364_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__53363_SHARP_,p2__53364_SHARP_);
});})(map__53375,map__53375__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key))
);
var merge_ident = cljs.core.get.call(null,map__53375__$1,new cljs.core.Keyword(null,"merge-ident","merge-ident",1040841862),om.next.default_merge_ident);
var remotes = cljs.core.get.call(null,map__53375__$1,new cljs.core.Keyword(null,"remotes","remotes",1132366312),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote","remote",-1593576576)], null));
var migrate = cljs.core.get.call(null,map__53375__$1,new cljs.core.Keyword(null,"migrate","migrate",-207110743),om.next.default_migrate);
var history = cljs.core.get.call(null,map__53375__$1,new cljs.core.Keyword(null,"history","history",-247395220),(100));
var state = cljs.core.get.call(null,map__53375__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var merge = cljs.core.get.call(null,map__53375__$1,new cljs.core.Keyword(null,"merge","merge",-1804319409),om.next.default_merge);
var shared_fn = cljs.core.get.call(null,map__53375__$1,new cljs.core.Keyword(null,"shared-fn","shared-fn",-180260144));
var ui__GT_props = cljs.core.get.call(null,map__53375__$1,new cljs.core.Keyword(null,"ui->props","ui->props",-237981102),om.next.default_ui__GT_props);
var parser = cljs.core.get.call(null,map__53375__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var indexer = cljs.core.get.call(null,map__53375__$1,new cljs.core.Keyword(null,"indexer","indexer",-1774914315),om.next.indexer);
var root_unmount = cljs.core.get.call(null,map__53375__$1,new cljs.core.Keyword(null,"root-unmount","root-unmount",1692900789),((function (map__53375,map__53375__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,history,state,merge,shared_fn,ui__GT_props,parser,indexer){
return (function (p1__53367_SHARP_){
return ReactDOM.unmountComponentAtNode(p1__53367_SHARP_);
});})(map__53375,map__53375__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,history,state,merge,shared_fn,ui__GT_props,parser,indexer))
);
var send = cljs.core.get.call(null,map__53375__$1,new cljs.core.Keyword(null,"send","send",-652151114));
var merge_tree = cljs.core.get.call(null,map__53375__$1,new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161),om.next.default_merge_tree);
var shared = cljs.core.get.call(null,map__53375__$1,new cljs.core.Keyword(null,"shared","shared",-384145993));
var optimize = cljs.core.get.call(null,map__53375__$1,new cljs.core.Keyword(null,"optimize","optimize",-1912349448),((function (map__53375,map__53375__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,history,state,merge,shared_fn,ui__GT_props,parser,indexer,root_unmount,send,merge_tree,shared){
return (function (cs){
return cljs.core.sort_by.call(null,om.next.depth,cs);
});})(map__53375,map__53375__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,history,state,merge,shared_fn,ui__GT_props,parser,indexer,root_unmount,send,merge_tree,shared))
);
if(cljs.core.map_QMARK_.call(null,config)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"config","config",-1659574354,null))))].join('')));
}

var idxr = indexer.call(null);
var norm_QMARK_ = ((!((state == null)))?((((state.cljs$lang$protocol_mask$partition1$ & (16384))) || (state.cljs$core$IAtom$))?true:(((!state.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,state));
var state_SINGLEQUOTE_ = ((norm_QMARK_)?state:cljs.core.atom.call(null,state));
var logger = ((cljs.core.contains_QMARK_.call(null,config,new cljs.core.Keyword(null,"logger","logger",-220675947)))?new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config):om.next._STAR_logger_STAR_);
var ret = (new om.next.Reconciler(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),new cljs.core.Keyword(null,"id-key","id-key",-1881730044),new cljs.core.Keyword(null,"instrument","instrument",-960698844),new cljs.core.Keyword(null,"merge-ident","merge-ident",1040841862),new cljs.core.Keyword(null,"merge-sends","merge-sends",-1718434202),new cljs.core.Keyword(null,"remotes","remotes",1132366312),new cljs.core.Keyword(null,"migrate","migrate",-207110743),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"merge","merge",-1804319409),new cljs.core.Keyword(null,"shared-fn","shared-fn",-180260144),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.Keyword(null,"ui->props","ui->props",-237981102),new cljs.core.Keyword(null,"logger","logger",-220675947),new cljs.core.Keyword(null,"indexer","indexer",-1774914315),new cljs.core.Keyword(null,"root-unmount","root-unmount",1692900789),new cljs.core.Keyword(null,"send","send",-652151114),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161),new cljs.core.Keyword(null,"optimize","optimize",-1912349448),new cljs.core.Keyword(null,"root-render","root-render",835981146),new cljs.core.Keyword(null,"normalize","normalize",-1904390051),new cljs.core.Keyword(null,"prune-tree","prune-tree",142138431)],[pathopt,id_key,(function (){var G__53378 = instrument;
var G__53378__$1 = ((!((instrument == null)))?((function (G__53378,idxr,norm_QMARK_,state_SINGLEQUOTE_,logger,map__53375,map__53375__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,history,state,merge,shared_fn,ui__GT_props,parser,indexer,root_unmount,send,merge_tree,shared,optimize){
return (function om$next$reconciler_$_G__53378(x){
var _STAR_instrument_STAR_53380 = om.next._STAR_instrument_STAR_;
om.next._STAR_instrument_STAR_ = null;

try{return instrument.call(null,x);
}finally {om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_53380;
}});})(G__53378,idxr,norm_QMARK_,state_SINGLEQUOTE_,logger,map__53375,map__53375__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,history,state,merge,shared_fn,ui__GT_props,parser,indexer,root_unmount,send,merge_tree,shared,optimize))
:G__53378);
return G__53378__$1;
})(),merge_ident,merge_sends,remotes,migrate,om.next.cache.cache.call(null,history),state_SINGLEQUOTE_,merge,shared_fn,parser,ui__GT_props,logger,idxr,root_unmount,send,shared,merge_tree,optimize,root_render,(function (){var or__35838__auto__ = !(norm_QMARK_);
if(or__35838__auto__){
return or__35838__auto__;
} else {
return normalize;
}
})(),prune_tree]),cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"normalized","normalized",-1887621663),new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.Keyword(null,"sends-queued","sends-queued",-1276878712),new cljs.core.Keyword(null,"queued-sends","queued-sends",278114765),new cljs.core.Keyword(null,"queued","queued",1701634607),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword(null,"target","target",253001721)],[norm_QMARK_,null,cljs.core.PersistentVector.EMPTY,false,cljs.core.PersistentArrayMap.EMPTY,false,null,null,(0),null])),null,null,null));
return ret;
});
/**
 * Returns true if x is a reconciler.
 */
om.next.reconciler_QMARK_ = (function om$next$reconciler_QMARK_(x){
return (x instanceof om.next.Reconciler);
});
/**
 * Return the reconciler's application state atom. Useful when the reconciler
 * was initialized via denormalized data.
 */
om.next.app_state = (function om$next$app_state(reconciler){
if(om.next.reconciler_QMARK_.call(null,reconciler)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"reconciler?","reconciler?",250756342,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null))))].join('')));
}

return new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler));
});
/**
 * Return the application's root component.
 */
om.next.app_root = (function om$next$app_root(reconciler){
if(om.next.reconciler_QMARK_.call(null,reconciler)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"reconciler?","reconciler?",250756342,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null))))].join('')));
}

return cljs.core.get.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(reconciler)),new cljs.core.Keyword(null,"root","root",-448657453));
});
/**
 * Force a re-render of the root. Not recommended for anything except
 * recomputing :shared.
 */
om.next.force_root_render_BANG_ = (function om$next$force_root_render_BANG_(reconciler){
if(om.next.reconciler_QMARK_.call(null,reconciler)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"reconciler?","reconciler?",250756342,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null))))].join('')));
}

return cljs.core.get.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(reconciler)),new cljs.core.Keyword(null,"render","render",-1408033454)).call(null);
});
/**
 * Given a reconciler and UUID return the application state snapshost
 * from history associated with the UUID. The size of the reconciler history
 * may be configured by the :history option when constructing the reconciler.
 */
om.next.from_history = (function om$next$from_history(reconciler,uuid){
if(om.next.reconciler_QMARK_.call(null,reconciler)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"reconciler?","reconciler?",250756342,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null))))].join('')));
}

return new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler)).get(uuid);
});
/**
 * Return a temporary id.
 */
om.next.tempid = (function om$next$tempid(var_args){
var args53381 = [];
var len__36896__auto___53384 = arguments.length;
var i__36897__auto___53385 = (0);
while(true){
if((i__36897__auto___53385 < len__36896__auto___53384)){
args53381.push((arguments[i__36897__auto___53385]));

var G__53386 = (i__36897__auto___53385 + (1));
i__36897__auto___53385 = G__53386;
continue;
} else {
}
break;
}

var G__53383 = args53381.length;
switch (G__53383) {
case 0:
return om.next.tempid.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.tempid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53381.length)].join('')));

}
});

om.next.tempid.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.tempid.tempid.call(null);
});

om.next.tempid.cljs$core$IFn$_invoke$arity$1 = (function (id){
return om.tempid.tempid.call(null,id);
});

om.next.tempid.cljs$lang$maxFixedArity = 1;
/**
 * Return true if x is a tempid, false otherwise
 */
om.next.tempid_QMARK_ = (function om$next$tempid_QMARK_(x){
return om.tempid.tempid_QMARK_.call(null,x);
});
/**
 * Create a Om Next transit reader. This reader can handler the tempid type.
 * Can pass transit reader customization opts map.
 */
om.next.reader = (function om$next$reader(var_args){
var args53388 = [];
var len__36896__auto___53391 = arguments.length;
var i__36897__auto___53392 = (0);
while(true){
if((i__36897__auto___53392 < len__36896__auto___53391)){
args53388.push((arguments[i__36897__auto___53392]));

var G__53393 = (i__36897__auto___53392 + (1));
i__36897__auto___53392 = G__53393;
continue;
} else {
}
break;
}

var G__53390 = args53388.length;
switch (G__53390) {
case 0:
return om.next.reader.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53388.length)].join('')));

}
});

om.next.reader.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.transit.reader.call(null);
});

om.next.reader.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return om.transit.reader.call(null,opts);
});

om.next.reader.cljs$lang$maxFixedArity = 1;
/**
 * Create a Om Next transit writer. This writer can handler the tempid type.
 * Can pass transit writer customization opts map.
 */
om.next.writer = (function om$next$writer(var_args){
var args53395 = [];
var len__36896__auto___53398 = arguments.length;
var i__36897__auto___53399 = (0);
while(true){
if((i__36897__auto___53399 < len__36896__auto___53398)){
args53395.push((arguments[i__36897__auto___53399]));

var G__53400 = (i__36897__auto___53399 + (1));
i__36897__auto___53399 = G__53400;
continue;
} else {
}
break;
}

var G__53397 = args53395.length;
switch (G__53397) {
case 0:
return om.next.writer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53395.length)].join('')));

}
});

om.next.writer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.transit.writer.call(null);
});

om.next.writer.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return om.transit.writer.call(null,opts);
});

om.next.writer.cljs$lang$maxFixedArity = 1;
/**
 * Given a query expression return an equivalent query expression that can be
 * spliced into a transaction that will force a read of that key from the
 * specified remote target.
 */
om.next.force = (function om$next$force(var_args){
var args53402 = [];
var len__36896__auto___53405 = arguments.length;
var i__36897__auto___53406 = (0);
while(true){
if((i__36897__auto___53406 < len__36896__auto___53405)){
args53402.push((arguments[i__36897__auto___53406]));

var G__53407 = (i__36897__auto___53406 + (1));
i__36897__auto___53406 = G__53407;
continue;
} else {
}
break;
}

var G__53404 = args53402.length;
switch (G__53404) {
case 1:
return om.next.force.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.force.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53402.length)].join('')));

}
});

om.next.force.cljs$core$IFn$_invoke$arity$1 = (function (expr){
return om.next.force.call(null,expr,new cljs.core.Keyword(null,"remote","remote",-1593576576));
});

om.next.force.cljs$core$IFn$_invoke$arity$2 = (function (expr,target){
return cljs.core.with_meta.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,expr),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),target], null));
});

om.next.force.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=next.js.map