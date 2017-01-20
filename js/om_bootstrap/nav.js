// Compiled by ClojureScript 1.7.170 {}
goog.provide('om_bootstrap.nav');
goog.require('cljs.core');
goog.require('om_bootstrap.types');
goog.require('schema.core');
goog.require('om_bootstrap.util');
goog.require('om_tools.dom');
goog.require('om_tools.core');
goog.require('om.core');
goog.require('clojure.string');
om_bootstrap.nav.NavItem = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"active?","active?",459499776)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"href","href",-793805698)),schema.core.Str], true, false));

var component_fnk__49615__auto___55872 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema55847 = schema.core.Any;
var input_schema55848 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"map55846","map55846",-799428422,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)))], null);
var input_checker55849 = schema.core.checker.call(null,input_schema55848);
var output_checker55850 = schema.core.checker.call(null,output_schema55847);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema55847,input_schema55848,input_checker55849,output_checker55850){
return (function om_bootstrap$nav$constructor55844(G__55851){
var validate__37277__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__37277__auto__)){
var args__37278__auto___55873 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__55851], null);
var temp__4425__auto___55874 = input_checker55849.call(null,args__37278__auto___55873);
if(cljs.core.truth_(temp__4425__auto___55874)){
var error__37279__auto___55875 = temp__4425__auto___55874;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor55844","constructor55844",-1127522031,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__37279__auto___55875)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema55848,new cljs.core.Keyword(null,"value","value",305978217),args__37278__auto___55873,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___55875], null));
} else {
}
} else {
}

var o__37280__auto__ = (function (){var map55846 = G__55851;
while(true){
if(cljs.core.map_QMARK_.call(null,map55846)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map55846)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map55846,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.nav.t_om_bootstrap$nav55858 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
om_bootstrap.nav.t_om_bootstrap$nav55858 = (function (output_schema55847,input_checker55849,output_checker55850,input_schema55848,owner,constructor55844,G__55851,map55846,validate__37277__auto__,ufv__,meta55859){
this.output_schema55847 = output_schema55847;
this.input_checker55849 = input_checker55849;
this.output_checker55850 = output_checker55850;
this.input_schema55848 = input_schema55848;
this.owner = owner;
this.constructor55844 = constructor55844;
this.G__55851 = G__55851;
this.map55846 = map55846;
this.validate__37277__auto__ = validate__37277__auto__;
this.ufv__ = ufv__;
this.meta55859 = meta55859;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.nav.t_om_bootstrap$nav55858.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,validate__37277__auto__,ufv__,output_schema55847,input_schema55848,input_checker55849,output_checker55850){
return (function (_55860,meta55859__$1){
var self__ = this;
var _55860__$1 = this;
return (new om_bootstrap.nav.t_om_bootstrap$nav55858(self__.output_schema55847,self__.input_checker55849,self__.output_checker55850,self__.input_schema55848,self__.owner,self__.constructor55844,self__.G__55851,self__.map55846,self__.validate__37277__auto__,self__.ufv__,meta55859__$1));
});})(owner,validate__37277__auto__,ufv__,output_schema55847,input_schema55848,input_checker55849,output_checker55850))
;

om_bootstrap.nav.t_om_bootstrap$nav55858.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,validate__37277__auto__,ufv__,output_schema55847,input_schema55848,input_checker55849,output_checker55850){
return (function (_55860){
var self__ = this;
var _55860__$1 = this;
return self__.meta55859;
});})(owner,validate__37277__auto__,ufv__,output_schema55847,input_schema55848,input_checker55849,output_checker55850))
;

om_bootstrap.nav.t_om_bootstrap$nav55858.prototype.om$core$IDisplayName$ = true;

om_bootstrap.nav.t_om_bootstrap$nav55858.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,validate__37277__auto__,ufv__,output_schema55847,input_schema55848,input_checker55849,output_checker55850){
return (function (_){
var self__ = this;
var ___$1 = this;
return "nav-item*";
});})(owner,validate__37277__auto__,ufv__,output_schema55847,input_schema55848,input_checker55849,output_checker55850))
;

om_bootstrap.nav.t_om_bootstrap$nav55858.prototype.om$core$IRender$ = true;

om_bootstrap.nav.t_om_bootstrap$nav55858.prototype.om$core$IRender$render$arity$1 = ((function (owner,validate__37277__auto__,ufv__,output_schema55847,input_schema55848,input_checker55849,output_checker55850){
return (function (_){
var self__ = this;
var ___$1 = this;
var map__55861 = om.core.get_props.call(null,self__.owner);
var map__55861__$1 = ((((!((map__55861 == null)))?((((map__55861.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55861.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55861):map__55861);
var opts = cljs.core.get.call(null,map__55861__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var children = cljs.core.get.call(null,map__55861__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var vec__55862 = om_bootstrap.types.separate.call(null,om_bootstrap.nav.NavItem,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null));
var bs = cljs.core.nth.call(null,vec__55862,(0),null);
var props = cljs.core.nth.call(null,vec__55862,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs)], null);
var handle_click = ((function (map__55861,map__55861__$1,opts,children,vec__55862,bs,props,classes,___$1,owner,validate__37277__auto__,ufv__,output_schema55847,input_schema55848,input_checker55849,output_checker55850){
return (function (e){
var temp__4425__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4425__auto__)){
var f = temp__4425__auto__;
e.preventDefault();

if(cljs.core.truth_(new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs))){
return null;
} else {
return f.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(bs));
}
} else {
return null;
}
});})(map__55861,map__55861__$1,opts,children,vec__55862,bs,props,classes,___$1,owner,validate__37277__auto__,ufv__,output_schema55847,input_schema55848,input_checker55849,output_checker55850))
;
return om_tools.dom.element.call(null,React.DOM.li,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.a,{"href": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(bs)), "ref": "anchor", "title": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs)), "onClick": om_tools.dom.format_opts.call(null,handle_click)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))))],null)));
});})(owner,validate__37277__auto__,ufv__,output_schema55847,input_schema55848,input_checker55849,output_checker55850))
;

om_bootstrap.nav.t_om_bootstrap$nav55858.getBasis = ((function (owner,validate__37277__auto__,ufv__,output_schema55847,input_schema55848,input_checker55849,output_checker55850){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"output-schema55847","output-schema55847",680933280,null),new cljs.core.Symbol(null,"input-checker55849","input-checker55849",646936353,null),new cljs.core.Symbol(null,"output-checker55850","output-checker55850",1245290019,null),new cljs.core.Symbol(null,"input-schema55848","input-schema55848",1438623427,null),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"constructor55844","constructor55844",-1127522031,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"G__55851","G__55851",1111478067,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)),new cljs.core.Symbol(null,"map55846","map55846",-799428422,null),new cljs.core.Symbol(null,"validate__37277__auto__","validate__37277__auto__",694432091,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"meta55859","meta55859",-56853751,null)], null);
});})(owner,validate__37277__auto__,ufv__,output_schema55847,input_schema55848,input_checker55849,output_checker55850))
;

om_bootstrap.nav.t_om_bootstrap$nav55858.cljs$lang$type = true;

om_bootstrap.nav.t_om_bootstrap$nav55858.cljs$lang$ctorStr = "om-bootstrap.nav/t_om_bootstrap$nav55858";

om_bootstrap.nav.t_om_bootstrap$nav55858.cljs$lang$ctorPrWriter = ((function (owner,validate__37277__auto__,ufv__,output_schema55847,input_schema55848,input_checker55849,output_checker55850){
return (function (this__36436__auto__,writer__36437__auto__,opt__36438__auto__){
return cljs.core._write.call(null,writer__36437__auto__,"om-bootstrap.nav/t_om_bootstrap$nav55858");
});})(owner,validate__37277__auto__,ufv__,output_schema55847,input_schema55848,input_checker55849,output_checker55850))
;

om_bootstrap.nav.__GT_t_om_bootstrap$nav55858 = ((function (owner,validate__37277__auto__,ufv__,output_schema55847,input_schema55848,input_checker55849,output_checker55850){
return (function om_bootstrap$nav$constructor55844_$___GT_t_om_bootstrap$nav55858(output_schema55847__$1,input_checker55849__$1,output_checker55850__$1,input_schema55848__$1,owner__$1,constructor55844__$1,G__55851__$1,map55846__$1,validate__37277__auto____$1,ufv____$1,meta55859){
return (new om_bootstrap.nav.t_om_bootstrap$nav55858(output_schema55847__$1,input_checker55849__$1,output_checker55850__$1,input_schema55848__$1,owner__$1,constructor55844__$1,G__55851__$1,map55846__$1,validate__37277__auto____$1,ufv____$1,meta55859));
});})(owner,validate__37277__auto__,ufv__,output_schema55847,input_schema55848,input_checker55849,output_checker55850))
;

}

return (new om_bootstrap.nav.t_om_bootstrap$nav55858(output_schema55847,input_checker55849,output_checker55850,input_schema55848,owner,om_bootstrap$nav$constructor55844,G__55851,map55846,validate__37277__auto__,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__37277__auto__)){
var temp__4425__auto___55876 = output_checker55850.call(null,o__37280__auto__);
if(cljs.core.truth_(temp__4425__auto___55876)){
var error__37279__auto___55877 = temp__4425__auto___55876;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor55844","constructor55844",-1127522031,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__37279__auto___55877)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema55847,new cljs.core.Keyword(null,"value","value",305978217),o__37280__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___55877], null));
} else {
}
} else {
}

return o__37280__auto__;
});})(ufv__,output_schema55847,input_schema55848,input_checker55849,output_checker55850))
,schema.core.make_fn_schema.call(null,output_schema55847,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema55848], null)));
})();
/**
 * Generates a nav item for use inside of a nav element.
 */
om_bootstrap.nav.nav_item_STAR_ = ((function (component_fnk__49615__auto___55872){
return (function om_bootstrap$nav$nav_item_STAR_(var_args){
var args__36903__auto__ = [];
var len__36896__auto___55878 = arguments.length;
var i__36897__auto___55879 = (0);
while(true){
if((i__36897__auto___55879 < len__36896__auto___55878)){
args__36903__auto__.push((arguments[i__36897__auto___55879]));

var G__55880 = (i__36897__auto___55879 + (1));
i__36897__auto___55879 = G__55880;
continue;
} else {
}
break;
}

var argseq__36904__auto__ = ((((2) < args__36903__auto__.length))?(new cljs.core.IndexedSeq(args__36903__auto__.slice((2)),(0))):null);
return om_bootstrap.nav.nav_item_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36904__auto__);
});})(component_fnk__49615__auto___55872))
;

om_bootstrap.nav.nav_item_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__49615__auto___55872){
return (function (data__49616__auto__,owner55843,p__55867){
var vec__55868 = p__55867;
var opts__49617__auto__ = cljs.core.nth.call(null,vec__55868,(0),null);
return component_fnk__49615__auto___55872.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__49617__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner55843,new cljs.core.Keyword(null,"data","data",-232669377),data__49616__auto__], null));
});})(component_fnk__49615__auto___55872))
;

om_bootstrap.nav.nav_item_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.nav.nav_item_STAR_.cljs$lang$applyTo = ((function (component_fnk__49615__auto___55872){
return (function (seq55864){
var G__55865 = cljs.core.first.call(null,seq55864);
var seq55864__$1 = cljs.core.next.call(null,seq55864);
var G__55866 = cljs.core.first.call(null,seq55864__$1);
var seq55864__$2 = cljs.core.next.call(null,seq55864__$1);
return om_bootstrap.nav.nav_item_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__55865,G__55866,seq55864__$2);
});})(component_fnk__49615__auto___55872))
;

om_bootstrap.nav.__GT_nav_item_STAR_ = (function om_bootstrap$nav$__GT_nav_item_STAR_(var_args){
var args55869 = [];
var len__36896__auto___55881 = arguments.length;
var i__36897__auto___55882 = (0);
while(true){
if((i__36897__auto___55882 < len__36896__auto___55881)){
args55869.push((arguments[i__36897__auto___55882]));

var G__55883 = (i__36897__auto___55882 + (1));
i__36897__auto___55882 = G__55883;
continue;
} else {
}
break;
}

var G__55871 = args55869.length;
switch (G__55871) {
case 1:
return om_bootstrap.nav.__GT_nav_item_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.nav.__GT_nav_item_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55869.length)].join('')));

}
});

om_bootstrap.nav.__GT_nav_item_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__49584__auto__){
return om.core.build.call(null,om_bootstrap.nav.nav_item_STAR_,cursor__49584__auto__);
});

om_bootstrap.nav.__GT_nav_item_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__49584__auto__,m55845){
return om.core.build.call(null,om_bootstrap.nav.nav_item_STAR_,cursor__49584__auto__,m55845);
});

om_bootstrap.nav.__GT_nav_item_STAR_.cljs$lang$maxFixedArity = 2;
var ufv___55893 = schema.utils.use_fn_validation;
var output_schema55885_55894 = om_bootstrap.types.Component;
var input_schema55886_55895 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.nav.NavItem,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"NavItem","NavItem",926041296,null)], null))),schema.core.Any], null);
var input_checker55887_55896 = schema.core.checker.call(null,input_schema55886_55895);
var output_checker55888_55897 = schema.core.checker.call(null,output_schema55885_55894);
/**
 * Inputs: [opts :- NavItem & children]
 *   Returns: t/Component
 */
om_bootstrap.nav.nav_item = ((function (ufv___55893,output_schema55885_55894,input_schema55886_55895,input_checker55887_55896,output_checker55888_55897){
return (function om_bootstrap$nav$nav_item(var_args){
var args__36903__auto__ = [];
var len__36896__auto___55898 = arguments.length;
var i__36897__auto___55899 = (0);
while(true){
if((i__36897__auto___55899 < len__36896__auto___55898)){
args__36903__auto__.push((arguments[i__36897__auto___55899]));

var G__55900 = (i__36897__auto___55899 + (1));
i__36897__auto___55899 = G__55900;
continue;
} else {
}
break;
}

var argseq__36904__auto__ = ((((1) < args__36903__auto__.length))?(new cljs.core.IndexedSeq(args__36903__auto__.slice((1)),(0))):null);
return om_bootstrap.nav.nav_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36904__auto__);
});})(ufv___55893,output_schema55885_55894,input_schema55886_55895,input_checker55887_55896,output_checker55888_55897))
;

om_bootstrap.nav.nav_item.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___55893,output_schema55885_55894,input_schema55886_55895,input_checker55887_55896,output_checker55888_55897){
return (function (G__55889,rest55890){
var validate__37277__auto__ = ufv___55893.get_cell();
if(cljs.core.truth_(validate__37277__auto__)){
var args__37278__auto___55901 = cljs.core.list_STAR_.call(null,G__55889,rest55890);
var temp__4425__auto___55902 = input_checker55887_55896.call(null,args__37278__auto___55901);
if(cljs.core.truth_(temp__4425__auto___55902)){
var error__37279__auto___55903 = temp__4425__auto___55902;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"nav-item","nav-item",-307360961,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__37279__auto___55903)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema55886_55895,new cljs.core.Keyword(null,"value","value",305978217),args__37278__auto___55901,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___55903], null));
} else {
}
} else {
}

var o__37280__auto__ = (function (){var opts = G__55889;
var children = rest55890;
while(true){
return om_bootstrap.nav.__GT_nav_item_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__37277__auto__)){
var temp__4425__auto___55904 = output_checker55888_55897.call(null,o__37280__auto__);
if(cljs.core.truth_(temp__4425__auto___55904)){
var error__37279__auto___55905 = temp__4425__auto___55904;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"nav-item","nav-item",-307360961,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__37279__auto___55905)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema55885_55894,new cljs.core.Keyword(null,"value","value",305978217),o__37280__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___55905], null));
} else {
}
} else {
}

return o__37280__auto__;
});})(ufv___55893,output_schema55885_55894,input_schema55886_55895,input_checker55887_55896,output_checker55888_55897))
;

om_bootstrap.nav.nav_item.cljs$lang$maxFixedArity = (1);

om_bootstrap.nav.nav_item.cljs$lang$applyTo = ((function (ufv___55893,output_schema55885_55894,input_schema55886_55895,input_checker55887_55896,output_checker55888_55897){
return (function (seq55891){
var G__55892 = cljs.core.first.call(null,seq55891);
var seq55891__$1 = cljs.core.next.call(null,seq55891);
return om_bootstrap.nav.nav_item.cljs$core$IFn$_invoke$arity$variadic(G__55892,seq55891__$1);
});})(ufv___55893,output_schema55885_55894,input_schema55886_55895,input_checker55887_55896,output_checker55888_55897))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.nav.nav_item),schema.core.make_fn_schema.call(null,output_schema55885_55894,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema55886_55895], null)));
om_bootstrap.nav.Nav = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentHashMap.fromArrays([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"stacked?","stacked?",784188446)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"active-key","active-key",-2039404654)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"active-href","active-href",-1458344709)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"justified?","justified?",-1045366764)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"navbar?","navbar?",2085313828)),new cljs.core.Keyword(null,"bs-style","bs-style",1424423998)],[schema.core.Bool,schema.core.either.call(null,schema.core.Str,schema.core.Num),schema.core.Bool,schema.core.Bool,schema.core.Str,schema.core.Bool,schema.core.Bool,schema.core.Bool,schema.core.enum$.call(null,"tabs","pills")]));
var ufv___55912 = schema.utils.use_fn_validation;
var output_schema55906_55913 = schema.core.Bool;
var input_schema55907_55914 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"child-props","child-props",1099812184,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker55908_55915 = schema.core.checker.call(null,input_schema55907_55914);
var output_checker55909_55916 = schema.core.checker.call(null,output_schema55906_55913);
/**
 * Inputs: [child-props opts]
 *   Returns: s/Bool
 * 
 *   Accepts a NavItem's child props and the current options provided to
 *   the Nav bar; returns true if the child component should be active,
 *   false otherwise.
 */
om_bootstrap.nav.child_active_QMARK_ = ((function (ufv___55912,output_schema55906_55913,input_schema55907_55914,input_checker55908_55915,output_checker55909_55916){
return (function om_bootstrap$nav$child_active_QMARK_(G__55910,G__55911){
var validate__37277__auto__ = ufv___55912.get_cell();
if(cljs.core.truth_(validate__37277__auto__)){
var args__37278__auto___55917 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__55910,G__55911], null);
var temp__4425__auto___55918 = input_checker55908_55915.call(null,args__37278__auto___55917);
if(cljs.core.truth_(temp__4425__auto___55918)){
var error__37279__auto___55919 = temp__4425__auto___55918;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"child-active?","child-active?",1895716640,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Accepts a NavItem's child props and the current options provided to\n  the Nav bar; returns true if the child component should be active,\n  false otherwise."], null)),cljs.core.pr_str.call(null,error__37279__auto___55919)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema55907_55914,new cljs.core.Keyword(null,"value","value",305978217),args__37278__auto___55917,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___55919], null));
} else {
}
} else {
}

var o__37280__auto__ = (function (){var child_props = G__55910;
var opts = G__55911;
while(true){
return cljs.core.boolean$.call(null,(function (){var or__35838__auto__ = new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(child_props);
if(cljs.core.truth_(or__35838__auto__)){
return or__35838__auto__;
} else {
var or__35838__auto____$1 = (function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"active-key","active-key",-2039404654).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4425__auto__)){
var ak = temp__4425__auto__;
return cljs.core._EQ_.call(null,ak,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(child_props));
} else {
return null;
}
})();
if(cljs.core.truth_(or__35838__auto____$1)){
return or__35838__auto____$1;
} else {
var temp__4425__auto__ = new cljs.core.Keyword(null,"active-href","active-href",-1458344709).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4425__auto__)){
var ak = temp__4425__auto__;
return cljs.core._EQ_.call(null,ak,new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(child_props));
} else {
return null;
}
}
}
})());
break;
}
})();
if(cljs.core.truth_(validate__37277__auto__)){
var temp__4425__auto___55920 = output_checker55909_55916.call(null,o__37280__auto__);
if(cljs.core.truth_(temp__4425__auto___55920)){
var error__37279__auto___55921 = temp__4425__auto___55920;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"child-active?","child-active?",1895716640,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Accepts a NavItem's child props and the current options provided to\n  the Nav bar; returns true if the child component should be active,\n  false otherwise."], null)),cljs.core.pr_str.call(null,error__37279__auto___55921)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema55906_55913,new cljs.core.Keyword(null,"value","value",305978217),o__37280__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___55921], null));
} else {
}
} else {
}

return o__37280__auto__;
});})(ufv___55912,output_schema55906_55913,input_schema55907_55914,input_checker55908_55915,output_checker55909_55916))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.nav.child_active_QMARK_),schema.core.make_fn_schema.call(null,output_schema55906_55913,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema55907_55914], null)));
var ufv___55927 = schema.utils.use_fn_validation;
var output_schema55922_55928 = schema.core.Any;
var input_schema55923_55929 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker55924_55930 = schema.core.checker.call(null,input_schema55923_55929);
var output_checker55925_55931 = schema.core.checker.call(null,output_schema55922_55928);
/**
 * Inputs: [opts]
 * 
 *   Takes the options supplied to the top level nav and returns a
 *   function that will CLONE the inner nav items, transferring all
 *   relevant props from the outer code to the inner code.
 */
om_bootstrap.nav.clone_nav_item = ((function (ufv___55927,output_schema55922_55928,input_schema55923_55929,input_checker55924_55930,output_checker55925_55931){
return (function om_bootstrap$nav$clone_nav_item(G__55926){
var validate__37277__auto__ = ufv___55927.get_cell();
if(cljs.core.truth_(validate__37277__auto__)){
var args__37278__auto___55932 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__55926], null);
var temp__4425__auto___55933 = input_checker55924_55930.call(null,args__37278__auto___55932);
if(cljs.core.truth_(temp__4425__auto___55933)){
var error__37279__auto___55934 = temp__4425__auto___55933;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"clone-nav-item","clone-nav-item",855224061,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes the options supplied to the top level nav and returns a\n  function that will CLONE the inner nav items, transferring all\n  relevant props from the outer code to the inner code."], null)),cljs.core.pr_str.call(null,error__37279__auto___55934)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema55923_55929,new cljs.core.Keyword(null,"value","value",305978217),args__37278__auto___55932,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___55934], null));
} else {
}
} else {
}

var o__37280__auto__ = (function (){var opts = G__55926;
while(true){
var prop_fn = ((function (validate__37277__auto__,ufv___55927,output_schema55922_55928,input_schema55923_55929,input_checker55924_55930,output_checker55925_55931){
return (function om_bootstrap$nav$clone_nav_item_$_prop_fn(props){
var base = cljs.core.assoc.call(null,cljs.core.select_keys.call(null,opts,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),new cljs.core.Keyword(null,"active-key","active-key",-2039404654),new cljs.core.Keyword(null,"active-href","active-href",-1458344709)], null)),new cljs.core.Keyword(null,"active?","active?",459499776),om_bootstrap.nav.child_active_QMARK_.call(null,new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(props),opts),new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031),true);
return cljs.core.update_in.call(null,props,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null),om_bootstrap.util.merge_props,base);
});})(validate__37277__auto__,ufv___55927,output_schema55922_55928,input_schema55923_55929,input_checker55924_55930,output_checker55925_55931))
;
return ((function (validate__37277__auto__,ufv___55927,output_schema55922_55928,input_schema55923_55929,input_checker55924_55930,output_checker55925_55931){
return (function (child){
return om_bootstrap.util.clone_with_props.call(null,child,prop_fn);
});
;})(validate__37277__auto__,ufv___55927,output_schema55922_55928,input_schema55923_55929,input_checker55924_55930,output_checker55925_55931))
break;
}
})();
if(cljs.core.truth_(validate__37277__auto__)){
var temp__4425__auto___55935 = output_checker55925_55931.call(null,o__37280__auto__);
if(cljs.core.truth_(temp__4425__auto___55935)){
var error__37279__auto___55936 = temp__4425__auto___55935;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"clone-nav-item","clone-nav-item",855224061,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes the options supplied to the top level nav and returns a\n  function that will CLONE the inner nav items, transferring all\n  relevant props from the outer code to the inner code."], null)),cljs.core.pr_str.call(null,error__37279__auto___55936)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema55922_55928,new cljs.core.Keyword(null,"value","value",305978217),o__37280__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___55936], null));
} else {
}
} else {
}

return o__37280__auto__;
});})(ufv___55927,output_schema55922_55928,input_schema55923_55929,input_checker55924_55930,output_checker55925_55931))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.nav.clone_nav_item),schema.core.make_fn_schema.call(null,output_schema55922_55928,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema55923_55929], null)));

var component_fnk__49615__auto___55969 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema55942 = schema.core.Any;
var input_schema55943 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"map55941","map55941",1515694856,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)))], null);
var input_checker55944 = schema.core.checker.call(null,input_schema55943);
var output_checker55945 = schema.core.checker.call(null,output_schema55942);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema55942,input_schema55943,input_checker55944,output_checker55945){
return (function om_bootstrap$nav$constructor55939(G__55946){
var validate__37277__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__37277__auto__)){
var args__37278__auto___55970 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__55946], null);
var temp__4425__auto___55971 = input_checker55944.call(null,args__37278__auto___55970);
if(cljs.core.truth_(temp__4425__auto___55971)){
var error__37279__auto___55972 = temp__4425__auto___55971;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor55939","constructor55939",530369035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__37279__auto___55972)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema55943,new cljs.core.Keyword(null,"value","value",305978217),args__37278__auto___55970,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___55972], null));
} else {
}
} else {
}

var o__37280__auto__ = (function (){var map55941 = G__55946;
while(true){
if(cljs.core.map_QMARK_.call(null,map55941)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map55941)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map55941,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.nav.t_om_bootstrap$nav55954 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
om_bootstrap.nav.t_om_bootstrap$nav55954 = (function (G__55946,owner,input_checker55944,map55941,constructor55939,output_checker55945,output_schema55942,input_schema55943,validate__37277__auto__,ufv__,meta55955){
this.G__55946 = G__55946;
this.owner = owner;
this.input_checker55944 = input_checker55944;
this.map55941 = map55941;
this.constructor55939 = constructor55939;
this.output_checker55945 = output_checker55945;
this.output_schema55942 = output_schema55942;
this.input_schema55943 = input_schema55943;
this.validate__37277__auto__ = validate__37277__auto__;
this.ufv__ = ufv__;
this.meta55955 = meta55955;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.nav.t_om_bootstrap$nav55954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,validate__37277__auto__,ufv__,output_schema55942,input_schema55943,input_checker55944,output_checker55945){
return (function (_55956,meta55955__$1){
var self__ = this;
var _55956__$1 = this;
return (new om_bootstrap.nav.t_om_bootstrap$nav55954(self__.G__55946,self__.owner,self__.input_checker55944,self__.map55941,self__.constructor55939,self__.output_checker55945,self__.output_schema55942,self__.input_schema55943,self__.validate__37277__auto__,self__.ufv__,meta55955__$1));
});})(owner,validate__37277__auto__,ufv__,output_schema55942,input_schema55943,input_checker55944,output_checker55945))
;

om_bootstrap.nav.t_om_bootstrap$nav55954.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,validate__37277__auto__,ufv__,output_schema55942,input_schema55943,input_checker55944,output_checker55945){
return (function (_55956){
var self__ = this;
var _55956__$1 = this;
return self__.meta55955;
});})(owner,validate__37277__auto__,ufv__,output_schema55942,input_schema55943,input_checker55944,output_checker55945))
;

om_bootstrap.nav.t_om_bootstrap$nav55954.prototype.om$core$IDisplayName$ = true;

om_bootstrap.nav.t_om_bootstrap$nav55954.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,validate__37277__auto__,ufv__,output_schema55942,input_schema55943,input_checker55944,output_checker55945){
return (function (_){
var self__ = this;
var ___$1 = this;
return "nav*";
});})(owner,validate__37277__auto__,ufv__,output_schema55942,input_schema55943,input_checker55944,output_checker55945))
;

om_bootstrap.nav.t_om_bootstrap$nav55954.prototype.om$core$IRender$ = true;

om_bootstrap.nav.t_om_bootstrap$nav55954.prototype.om$core$IRender$render$arity$1 = ((function (owner,validate__37277__auto__,ufv__,output_schema55942,input_schema55943,input_checker55944,output_checker55945){
return (function (_){
var self__ = this;
var ___$1 = this;
var map__55957 = om.core.get_props.call(null,self__.owner);
var map__55957__$1 = ((((!((map__55957 == null)))?((((map__55957.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55957.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55957):map__55957);
var opts = cljs.core.get.call(null,map__55957__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var children = cljs.core.get.call(null,map__55957__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var vec__55958 = om_bootstrap.types.separate.call(null,om_bootstrap.nav.Nav,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),true,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"nav"], null));
var bs = cljs.core.nth.call(null,vec__55958,(0),null);
var props = cljs.core.nth.call(null,vec__55958,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"navbar-collapse","navbar-collapse",-2134296568),new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"collapse","collapse",-1218136136),cljs.core.not.call(null,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296).cljs$core$IFn$_invoke$arity$1(bs)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"expanded?","expanded?",2055832296).cljs$core$IFn$_invoke$arity$1(bs)], null);
if(cljs.core.truth_((function (){var and__35826__auto__ = new cljs.core.Keyword(null,"navbar?","navbar?",2085313828).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(and__35826__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779).cljs$core$IFn$_invoke$arity$1(bs));
} else {
return and__35826__auto__;
}
})())){
var children__$1 = cljs.core.map.call(null,om_bootstrap.nav.clone_nav_item.call(null,opts),children);
var ul_props = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),"ul",new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,cljs.core.merge.call(null,om_bootstrap.types.bs_class_set.call(null,bs),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"nav-stacked","nav-stacked",529598925),new cljs.core.Keyword(null,"stacked?","stacked?",784188446).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"nav-justified","nav-justified",-1119443678),new cljs.core.Keyword(null,"justified?","justified?",-1045366764).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"navbar-nav","navbar-nav",1173290557),new cljs.core.Keyword(null,"navbar?","navbar?",2085313828).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"pull-right","pull-right",-1853033823),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs)], null)))], null);
return om_tools.dom.element.call(null,React.DOM.ul,om_bootstrap.util.merge_props.call(null,props,ul_props),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$1],null)));
} else {
var ul_props_left = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),"ul",new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,cljs.core.merge.call(null,om_bootstrap.types.bs_class_set.call(null,bs),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"nav-stacked","nav-stacked",529598925),new cljs.core.Keyword(null,"stacked?","stacked?",784188446).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"nav-justified","nav-justified",-1119443678),new cljs.core.Keyword(null,"justified?","justified?",-1045366764).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"navbar-nav","navbar-nav",1173290557),new cljs.core.Keyword(null,"navbar?","navbar?",2085313828).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"pull-right","pull-right",-1853033823),false], null)))], null);
var ul_props_right = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),"ul",new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,cljs.core.merge.call(null,om_bootstrap.types.bs_class_set.call(null,bs),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"nav-stacked","nav-stacked",529598925),new cljs.core.Keyword(null,"stacked?","stacked?",784188446).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"nav-justified","nav-justified",-1119443678),new cljs.core.Keyword(null,"justified?","justified?",-1045366764).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"navbar-nav","navbar-nav",1173290557),new cljs.core.Keyword(null,"navbar?","navbar?",2085313828).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"pull-right","pull-right",-1853033823),true], null)))], null);
var vec__55960 = cljs.core.partition_by.call(null,((function (ul_props_left,ul_props_right,map__55957,map__55957__$1,opts,children,vec__55958,bs,props,classes,___$1,owner,validate__37277__auto__,ufv__,output_schema55942,input_schema55943,input_checker55944,output_checker55945){
return (function (p1__55937_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"right","right",-452581833),p1__55937_SHARP_);
});})(ul_props_left,ul_props_right,map__55957,map__55957__$1,opts,children,vec__55958,bs,props,classes,___$1,owner,validate__37277__auto__,ufv__,output_schema55942,input_schema55943,input_checker55944,output_checker55945))
,children);
var children_left = cljs.core.nth.call(null,vec__55960,(0),null);
var ___$2 = cljs.core.nth.call(null,vec__55960,(1),null);
var children_right = cljs.core.nth.call(null,vec__55960,(2),null);
var children_left__$1 = cljs.core.map.call(null,om_bootstrap.nav.clone_nav_item.call(null,opts),children_left);
var children_right__$1 = cljs.core.map.call(null,om_bootstrap.nav.clone_nav_item.call(null,opts),children_right);
return om_tools.dom.element.call(null,React.DOM.nav,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[((!(cljs.core.empty_QMARK_.call(null,children_left__$1)))?om_tools.dom.element.call(null,React.DOM.ul,ul_props_left,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children_left__$1],null))):null),((!(cljs.core.empty_QMARK_.call(null,children_right__$1)))?om_tools.dom.element.call(null,React.DOM.ul,ul_props_right,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children_right__$1],null))):null)],null)));
}
});})(owner,validate__37277__auto__,ufv__,output_schema55942,input_schema55943,input_checker55944,output_checker55945))
;

om_bootstrap.nav.t_om_bootstrap$nav55954.getBasis = ((function (owner,validate__37277__auto__,ufv__,output_schema55942,input_schema55943,input_checker55944,output_checker55945){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"G__55946","G__55946",-1047496607,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"input-checker55944","input-checker55944",1012217864,null),new cljs.core.Symbol(null,"map55941","map55941",1515694856,null),cljs.core.with_meta(new cljs.core.Symbol(null,"constructor55939","constructor55939",530369035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"output-checker55945","output-checker55945",1010611436,null),new cljs.core.Symbol(null,"output-schema55942","output-schema55942",-1647245332,null),new cljs.core.Symbol(null,"input-schema55943","input-schema55943",972712141,null),new cljs.core.Symbol(null,"validate__37277__auto__","validate__37277__auto__",694432091,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"meta55955","meta55955",1124849415,null)], null);
});})(owner,validate__37277__auto__,ufv__,output_schema55942,input_schema55943,input_checker55944,output_checker55945))
;

om_bootstrap.nav.t_om_bootstrap$nav55954.cljs$lang$type = true;

om_bootstrap.nav.t_om_bootstrap$nav55954.cljs$lang$ctorStr = "om-bootstrap.nav/t_om_bootstrap$nav55954";

om_bootstrap.nav.t_om_bootstrap$nav55954.cljs$lang$ctorPrWriter = ((function (owner,validate__37277__auto__,ufv__,output_schema55942,input_schema55943,input_checker55944,output_checker55945){
return (function (this__36436__auto__,writer__36437__auto__,opt__36438__auto__){
return cljs.core._write.call(null,writer__36437__auto__,"om-bootstrap.nav/t_om_bootstrap$nav55954");
});})(owner,validate__37277__auto__,ufv__,output_schema55942,input_schema55943,input_checker55944,output_checker55945))
;

om_bootstrap.nav.__GT_t_om_bootstrap$nav55954 = ((function (owner,validate__37277__auto__,ufv__,output_schema55942,input_schema55943,input_checker55944,output_checker55945){
return (function om_bootstrap$nav$constructor55939_$___GT_t_om_bootstrap$nav55954(G__55946__$1,owner__$1,input_checker55944__$1,map55941__$1,constructor55939__$1,output_checker55945__$1,output_schema55942__$1,input_schema55943__$1,validate__37277__auto____$1,ufv____$1,meta55955){
return (new om_bootstrap.nav.t_om_bootstrap$nav55954(G__55946__$1,owner__$1,input_checker55944__$1,map55941__$1,constructor55939__$1,output_checker55945__$1,output_schema55942__$1,input_schema55943__$1,validate__37277__auto____$1,ufv____$1,meta55955));
});})(owner,validate__37277__auto__,ufv__,output_schema55942,input_schema55943,input_checker55944,output_checker55945))
;

}

return (new om_bootstrap.nav.t_om_bootstrap$nav55954(G__55946,owner,input_checker55944,map55941,om_bootstrap$nav$constructor55939,output_checker55945,output_schema55942,input_schema55943,validate__37277__auto__,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__37277__auto__)){
var temp__4425__auto___55973 = output_checker55945.call(null,o__37280__auto__);
if(cljs.core.truth_(temp__4425__auto___55973)){
var error__37279__auto___55974 = temp__4425__auto___55973;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor55939","constructor55939",530369035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__37279__auto___55974)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema55942,new cljs.core.Keyword(null,"value","value",305978217),o__37280__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___55974], null));
} else {
}
} else {
}

return o__37280__auto__;
});})(ufv__,output_schema55942,input_schema55943,input_checker55944,output_checker55945))
,schema.core.make_fn_schema.call(null,output_schema55942,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema55943], null)));
})();
om_bootstrap.nav.nav_STAR_ = ((function (component_fnk__49615__auto___55969){
return (function om_bootstrap$nav$nav_STAR_(var_args){
var args__36903__auto__ = [];
var len__36896__auto___55975 = arguments.length;
var i__36897__auto___55976 = (0);
while(true){
if((i__36897__auto___55976 < len__36896__auto___55975)){
args__36903__auto__.push((arguments[i__36897__auto___55976]));

var G__55977 = (i__36897__auto___55976 + (1));
i__36897__auto___55976 = G__55977;
continue;
} else {
}
break;
}

var argseq__36904__auto__ = ((((2) < args__36903__auto__.length))?(new cljs.core.IndexedSeq(args__36903__auto__.slice((2)),(0))):null);
return om_bootstrap.nav.nav_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36904__auto__);
});})(component_fnk__49615__auto___55969))
;

om_bootstrap.nav.nav_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__49615__auto___55969){
return (function (data__49616__auto__,owner55938,p__55964){
var vec__55965 = p__55964;
var opts__49617__auto__ = cljs.core.nth.call(null,vec__55965,(0),null);
return component_fnk__49615__auto___55969.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__49617__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner55938,new cljs.core.Keyword(null,"data","data",-232669377),data__49616__auto__], null));
});})(component_fnk__49615__auto___55969))
;

om_bootstrap.nav.nav_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.nav.nav_STAR_.cljs$lang$applyTo = ((function (component_fnk__49615__auto___55969){
return (function (seq55961){
var G__55962 = cljs.core.first.call(null,seq55961);
var seq55961__$1 = cljs.core.next.call(null,seq55961);
var G__55963 = cljs.core.first.call(null,seq55961__$1);
var seq55961__$2 = cljs.core.next.call(null,seq55961__$1);
return om_bootstrap.nav.nav_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__55962,G__55963,seq55961__$2);
});})(component_fnk__49615__auto___55969))
;

om_bootstrap.nav.__GT_nav_STAR_ = (function om_bootstrap$nav$__GT_nav_STAR_(var_args){
var args55966 = [];
var len__36896__auto___55978 = arguments.length;
var i__36897__auto___55979 = (0);
while(true){
if((i__36897__auto___55979 < len__36896__auto___55978)){
args55966.push((arguments[i__36897__auto___55979]));

var G__55980 = (i__36897__auto___55979 + (1));
i__36897__auto___55979 = G__55980;
continue;
} else {
}
break;
}

var G__55968 = args55966.length;
switch (G__55968) {
case 1:
return om_bootstrap.nav.__GT_nav_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.nav.__GT_nav_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55966.length)].join('')));

}
});

om_bootstrap.nav.__GT_nav_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__49584__auto__){
return om.core.build.call(null,om_bootstrap.nav.nav_STAR_,cursor__49584__auto__);
});

om_bootstrap.nav.__GT_nav_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__49584__auto__,m55940){
return om.core.build.call(null,om_bootstrap.nav.nav_STAR_,cursor__49584__auto__,m55940);
});

om_bootstrap.nav.__GT_nav_STAR_.cljs$lang$maxFixedArity = 2;
var ufv___55990 = schema.utils.use_fn_validation;
var output_schema55982_55991 = om_bootstrap.types.Component;
var input_schema55983_55992 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.nav.Nav,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Nav","Nav",1076204984,null)], null))),schema.core.Any], null);
var input_checker55984_55993 = schema.core.checker.call(null,input_schema55983_55992);
var output_checker55985_55994 = schema.core.checker.call(null,output_schema55982_55991);
/**
 * Inputs: [opts :- Nav & children]
 *   Returns: t/Component
 */
om_bootstrap.nav.nav = ((function (ufv___55990,output_schema55982_55991,input_schema55983_55992,input_checker55984_55993,output_checker55985_55994){
return (function om_bootstrap$nav$nav(var_args){
var args__36903__auto__ = [];
var len__36896__auto___55995 = arguments.length;
var i__36897__auto___55996 = (0);
while(true){
if((i__36897__auto___55996 < len__36896__auto___55995)){
args__36903__auto__.push((arguments[i__36897__auto___55996]));

var G__55997 = (i__36897__auto___55996 + (1));
i__36897__auto___55996 = G__55997;
continue;
} else {
}
break;
}

var argseq__36904__auto__ = ((((1) < args__36903__auto__.length))?(new cljs.core.IndexedSeq(args__36903__auto__.slice((1)),(0))):null);
return om_bootstrap.nav.nav.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36904__auto__);
});})(ufv___55990,output_schema55982_55991,input_schema55983_55992,input_checker55984_55993,output_checker55985_55994))
;

om_bootstrap.nav.nav.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___55990,output_schema55982_55991,input_schema55983_55992,input_checker55984_55993,output_checker55985_55994){
return (function (G__55986,rest55987){
var validate__37277__auto__ = ufv___55990.get_cell();
if(cljs.core.truth_(validate__37277__auto__)){
var args__37278__auto___55998 = cljs.core.list_STAR_.call(null,G__55986,rest55987);
var temp__4425__auto___55999 = input_checker55984_55993.call(null,args__37278__auto___55998);
if(cljs.core.truth_(temp__4425__auto___55999)){
var error__37279__auto___56000 = temp__4425__auto___55999;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"nav","nav",-1934895292,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__37279__auto___56000)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema55983_55992,new cljs.core.Keyword(null,"value","value",305978217),args__37278__auto___55998,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___56000], null));
} else {
}
} else {
}

var o__37280__auto__ = (function (){var opts = G__55986;
var children = rest55987;
while(true){
return om_bootstrap.nav.__GT_nav_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__37277__auto__)){
var temp__4425__auto___56001 = output_checker55985_55994.call(null,o__37280__auto__);
if(cljs.core.truth_(temp__4425__auto___56001)){
var error__37279__auto___56002 = temp__4425__auto___56001;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"nav","nav",-1934895292,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__37279__auto___56002)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema55982_55991,new cljs.core.Keyword(null,"value","value",305978217),o__37280__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___56002], null));
} else {
}
} else {
}

return o__37280__auto__;
});})(ufv___55990,output_schema55982_55991,input_schema55983_55992,input_checker55984_55993,output_checker55985_55994))
;

om_bootstrap.nav.nav.cljs$lang$maxFixedArity = (1);

om_bootstrap.nav.nav.cljs$lang$applyTo = ((function (ufv___55990,output_schema55982_55991,input_schema55983_55992,input_checker55984_55993,output_checker55985_55994){
return (function (seq55988){
var G__55989 = cljs.core.first.call(null,seq55988);
var seq55988__$1 = cljs.core.next.call(null,seq55988);
return om_bootstrap.nav.nav.cljs$core$IFn$_invoke$arity$variadic(G__55989,seq55988__$1);
});})(ufv___55990,output_schema55982_55991,input_schema55983_55992,input_checker55984_55993,output_checker55985_55994))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.nav.nav),schema.core.make_fn_schema.call(null,output_schema55982_55991,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema55983_55992], null)));
om_bootstrap.nav.NavBar = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentHashMap.fromArrays([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"inverse?","inverse?",-1062565987)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"static-top?","static-top?",558714465)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"role","role",-736691072)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"fixed-top?","fixed-top?",1129203462)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"nav-expanded?","nav-expanded?",-1026102544)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"brand","brand",557863343)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-toggle","on-toggle",-695538774)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"fixed-bottom?","fixed-bottom?",610036337)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"toggle-nav-key","toggle-nav-key",285397104)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"default-nav-expanded?","default-nav-expanded?",259430037))],[schema.core.Bool,schema.core.Bool,schema.core.Str,schema.core.Bool,schema.core.Bool,om_bootstrap.types.Renderable,schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.Bool,schema.core.Str,schema.core.Bool]));
om_bootstrap.nav.render_toggle_button = (function om_bootstrap$nav$render_toggle_button(owner,bs){
var handle_toggle = (function (){
var temp__4425__auto___56003 = new cljs.core.Keyword(null,"on-toggle","on-toggle",-695538774).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4425__auto___56003)){
var f_56004 = temp__4425__auto___56003;
om.core.set_state_nr_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"changing?","changing?",1855217746)], null),true);

f_56004.call(null);

om.core.set_state_nr_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"changing?","changing?",1855217746)], null),false);
} else {
}

return om.core.update_state_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-open?","nav-open?",-1379652582)], null),cljs.core.not);
});
var tb = om_bootstrap.util.clone_with_props.call(null,new cljs.core.Keyword(null,"toggle-button","toggle-button",267667985).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"navbar-toggle",new cljs.core.Keyword(null,"on-click","on-click",1632826543),handle_toggle], null));
return cljs.core.apply.call(null,React.DOM.button,{"className": "navbar-toggle", "type": "button", "onClick": om_tools.dom.format_opts.call(null,handle_toggle)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var or__35838__auto__ = tb;
if(cljs.core.truth_(or__35838__auto__)){
return or__35838__auto__;
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.span({"className": "sr-only", "key": (0)},"Toggle navigation"),React.DOM.span({"className": "icon-bar", "key": (1)}),React.DOM.span({"className": "icon-bar", "key": (2)}),React.DOM.span({"className": "icon-bar", "key": (3)})], null);
}
})()],null))));
});
var ufv___56010 = schema.utils.use_fn_validation;
var output_schema56005_56011 = schema.core.Bool;
var input_schema56006_56012 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"bs","bs",-906042210,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker56007_56013 = schema.core.checker.call(null,input_schema56006_56012);
var output_checker56008_56014 = schema.core.checker.call(null,output_schema56005_56011);
/**
 * Inputs: [bs]
 *   Returns: s/Bool
 * 
 *   Returns true if any of the necessary properties are in place to
 *   render the navbar-header and toggle button.
 */
om_bootstrap.nav.render_header_and_toggle_btn_QMARK_ = ((function (ufv___56010,output_schema56005_56011,input_schema56006_56012,input_checker56007_56013,output_checker56008_56014){
return (function om_bootstrap$nav$render_header_and_toggle_btn_QMARK_(G__56009){
var validate__37277__auto__ = ufv___56010.get_cell();
if(cljs.core.truth_(validate__37277__auto__)){
var args__37278__auto___56015 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__56009], null);
var temp__4425__auto___56016 = input_checker56007_56013.call(null,args__37278__auto___56015);
if(cljs.core.truth_(temp__4425__auto___56016)){
var error__37279__auto___56017 = temp__4425__auto___56016;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-header-and-toggle-btn?","render-header-and-toggle-btn?",2136521113,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if any of the necessary properties are in place to\n  render the navbar-header and toggle button."], null)),cljs.core.pr_str.call(null,error__37279__auto___56017)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema56006_56012,new cljs.core.Keyword(null,"value","value",305978217),args__37278__auto___56015,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___56017], null));
} else {
}
} else {
}

var o__37280__auto__ = (function (){var bs = G__56009;
while(true){
return cljs.core.boolean$.call(null,(function (){var or__35838__auto__ = new cljs.core.Keyword(null,"brand","brand",557863343).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(or__35838__auto__)){
return or__35838__auto__;
} else {
var or__35838__auto____$1 = new cljs.core.Keyword(null,"toggle-button","toggle-button",267667985).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(or__35838__auto____$1)){
return or__35838__auto____$1;
} else {
return new cljs.core.Keyword(null,"toggle-nav-key","toggle-nav-key",285397104).cljs$core$IFn$_invoke$arity$1(bs);
}
}
})());
break;
}
})();
if(cljs.core.truth_(validate__37277__auto__)){
var temp__4425__auto___56018 = output_checker56008_56014.call(null,o__37280__auto__);
if(cljs.core.truth_(temp__4425__auto___56018)){
var error__37279__auto___56019 = temp__4425__auto___56018;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-header-and-toggle-btn?","render-header-and-toggle-btn?",2136521113,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if any of the necessary properties are in place to\n  render the navbar-header and toggle button."], null)),cljs.core.pr_str.call(null,error__37279__auto___56019)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema56005_56011,new cljs.core.Keyword(null,"value","value",305978217),o__37280__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___56019], null));
} else {
}
} else {
}

return o__37280__auto__;
});})(ufv___56010,output_schema56005_56011,input_schema56006_56012,input_checker56007_56013,output_checker56008_56014))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.nav.render_header_and_toggle_btn_QMARK_),schema.core.make_fn_schema.call(null,output_schema56005_56011,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema56006_56012], null)));
om_bootstrap.nav.render_header = (function om_bootstrap$nav$render_header(owner,bs){
return cljs.core.apply.call(null,React.DOM.div,{"className": "navbar-header"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(om_bootstrap.util.strict_valid_component_QMARK_.call(null,new cljs.core.Keyword(null,"brand","brand",557863343).cljs$core$IFn$_invoke$arity$1(bs)))?om_bootstrap.util.clone_with_props.call(null,new cljs.core.Keyword(null,"brand","brand",557863343).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"navbar-brand"], null)):cljs.core.apply.call(null,React.DOM.span,{"className": "navbar-brand"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"brand","brand",557863343).cljs$core$IFn$_invoke$arity$1(bs)],null))))),(cljs.core.truth_(om_bootstrap.nav.render_header_and_toggle_btn_QMARK_.call(null,bs))?om_bootstrap.nav.render_toggle_button.call(null,owner,bs):null)],null))));
});
om_bootstrap.nav.render_navbar_child = (function om_bootstrap$nav$render_navbar_child(owner,child,bs){
var f = (function (props){
var opts = new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(props);
var collapsible_QMARK_ = (function (){var or__35838__auto__ = new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__35838__auto__)){
return or__35838__auto__;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"toggle-nav-key","toggle-nav-key",285397104).cljs$core$IFn$_invoke$arity$1(bs))){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"toggle-nav-key","toggle-nav-key",285397104).cljs$core$IFn$_invoke$arity$1(bs));
} else {
return null;
}
}
})();
var base = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"navbar?","navbar?",2085313828),true,new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779),collapsible_QMARK_,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),(function (){var and__35826__auto__ = collapsible_QMARK_;
if(cljs.core.truth_(and__35826__auto__)){
var or__35838__auto__ = new cljs.core.Keyword(null,"nav-expanded?","nav-expanded?",-1026102544).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(or__35838__auto__)){
return or__35838__auto__;
} else {
return om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"nav-open?","nav-open?",-1379652582));
}
} else {
return and__35826__auto__;
}
})()], null);
return cljs.core.update_in.call(null,props,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null),om_bootstrap.util.merge_props,base);
});
return om_bootstrap.util.clone_with_props.call(null,child,f);
});

var component_fnk__49615__auto___56047 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema56026 = schema.core.Any;
var input_schema56027 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"children","children",-940561982),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),schema.core.Keyword,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"map56024","map56024",1172676923,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)))], null);
var input_checker56028 = schema.core.checker.call(null,input_schema56027);
var output_checker56029 = schema.core.checker.call(null,output_schema56026);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema56026,input_schema56027,input_checker56028,output_checker56029){
return (function om_bootstrap$nav$constructor56022(G__56030){
var validate__37277__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__37277__auto__)){
var args__37278__auto___56048 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__56030], null);
var temp__4425__auto___56049 = input_checker56028.call(null,args__37278__auto___56048);
if(cljs.core.truth_(temp__4425__auto___56049)){
var error__37279__auto___56050 = temp__4425__auto___56049;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor56022","constructor56022",-1640562265,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__37279__auto___56050)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema56027,new cljs.core.Keyword(null,"value","value",305978217),args__37278__auto___56048,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___56050], null));
} else {
}
} else {
}

var o__37280__auto__ = (function (){var map56024 = G__56030;
while(true){
if(cljs.core.map_QMARK_.call(null,map56024)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map56024)));
}

var map56025 = plumbing.fnk.schema.safe_get.call(null,map56024,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var opts = plumbing.fnk.schema.safe_get.call(null,map56025,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
var children = plumbing.fnk.schema.safe_get.call(null,map56025,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
var owner = plumbing.fnk.schema.safe_get.call(null,map56024,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.nav.t_om_bootstrap$nav56035 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IShouldUpdate}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
om_bootstrap.nav.t_om_bootstrap$nav56035 = (function (G__56030,map56025,owner,input_checker56028,constructor56022,children,output_checker56029,input_schema56027,output_schema56026,map56024,validate__37277__auto__,opts,ufv__,meta56036){
this.G__56030 = G__56030;
this.map56025 = map56025;
this.owner = owner;
this.input_checker56028 = input_checker56028;
this.constructor56022 = constructor56022;
this.children = children;
this.output_checker56029 = output_checker56029;
this.input_schema56027 = input_schema56027;
this.output_schema56026 = output_schema56026;
this.map56024 = map56024;
this.validate__37277__auto__ = validate__37277__auto__;
this.opts = opts;
this.ufv__ = ufv__;
this.meta56036 = meta56036;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.nav.t_om_bootstrap$nav56035.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,children,opts,map56025,validate__37277__auto__,ufv__,output_schema56026,input_schema56027,input_checker56028,output_checker56029){
return (function (_56037,meta56036__$1){
var self__ = this;
var _56037__$1 = this;
return (new om_bootstrap.nav.t_om_bootstrap$nav56035(self__.G__56030,self__.map56025,self__.owner,self__.input_checker56028,self__.constructor56022,self__.children,self__.output_checker56029,self__.input_schema56027,self__.output_schema56026,self__.map56024,self__.validate__37277__auto__,self__.opts,self__.ufv__,meta56036__$1));
});})(owner,children,opts,map56025,validate__37277__auto__,ufv__,output_schema56026,input_schema56027,input_checker56028,output_checker56029))
;

om_bootstrap.nav.t_om_bootstrap$nav56035.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,children,opts,map56025,validate__37277__auto__,ufv__,output_schema56026,input_schema56027,input_checker56028,output_checker56029){
return (function (_56037){
var self__ = this;
var _56037__$1 = this;
return self__.meta56036;
});})(owner,children,opts,map56025,validate__37277__auto__,ufv__,output_schema56026,input_schema56027,input_checker56028,output_checker56029))
;

om_bootstrap.nav.t_om_bootstrap$nav56035.prototype.om$core$IDisplayName$ = true;

om_bootstrap.nav.t_om_bootstrap$nav56035.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,children,opts,map56025,validate__37277__auto__,ufv__,output_schema56026,input_schema56027,input_checker56028,output_checker56029){
return (function (_){
var self__ = this;
var ___$1 = this;
return "navbar*";
});})(owner,children,opts,map56025,validate__37277__auto__,ufv__,output_schema56026,input_schema56027,input_checker56028,output_checker56029))
;

om_bootstrap.nav.t_om_bootstrap$nav56035.prototype.om$core$IInitState$ = true;

om_bootstrap.nav.t_om_bootstrap$nav56035.prototype.om$core$IInitState$init_state$arity$1 = ((function (owner,children,opts,map56025,validate__37277__auto__,ufv__,output_schema56026,input_schema56027,input_checker56028,output_checker56029){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-open?","nav-open?",-1379652582),new cljs.core.Keyword(null,"default-nav-expanded?","default-nav-expanded?",259430037).cljs$core$IFn$_invoke$arity$1(self__.opts),new cljs.core.Keyword(null,"changing?","changing?",1855217746),false], null);
});})(owner,children,opts,map56025,validate__37277__auto__,ufv__,output_schema56026,input_schema56027,input_checker56028,output_checker56029))
;

om_bootstrap.nav.t_om_bootstrap$nav56035.prototype.om$core$IShouldUpdate$ = true;

om_bootstrap.nav.t_om_bootstrap$nav56035.prototype.om$core$IShouldUpdate$should_update$arity$3 = ((function (owner,children,opts,map56025,validate__37277__auto__,ufv__,output_schema56026,input_schema56027,input_checker56028,output_checker56029){
return (function (_,___$1,next_state){
var self__ = this;
var ___$2 = this;
return cljs.core.not.call(null,new cljs.core.Keyword(null,"changing?","changing?",1855217746).cljs$core$IFn$_invoke$arity$1(next_state));
});})(owner,children,opts,map56025,validate__37277__auto__,ufv__,output_schema56026,input_schema56027,input_checker56028,output_checker56029))
;

om_bootstrap.nav.t_om_bootstrap$nav56035.prototype.om$core$IRender$ = true;

om_bootstrap.nav.t_om_bootstrap$nav56035.prototype.om$core$IRender$render$arity$1 = ((function (owner,children,opts,map56025,validate__37277__auto__,ufv__,output_schema56026,input_schema56027,input_checker56028,output_checker56029){
return (function (_){
var self__ = this;
var ___$1 = this;
var vec__56038 = om_bootstrap.types.separate.call(null,om_bootstrap.nav.NavBar,self__.opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"navbar",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default",new cljs.core.Keyword(null,"role","role",-736691072),"navigation",new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),((function (___$1,owner,children,opts,map56025,validate__37277__auto__,ufv__,output_schema56026,input_schema56027,input_checker56028,output_checker56029){
return (function() { 
var G__56051__delegate = function (opts__$1,c){
return om_tools.dom.element.call(null,React.DOM.nav,opts__$1,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[c],null)));
};
var G__56051 = function (opts__$1,var_args){
var c = null;
if (arguments.length > 1) {
var G__56052__i = 0, G__56052__a = new Array(arguments.length -  1);
while (G__56052__i < G__56052__a.length) {G__56052__a[G__56052__i] = arguments[G__56052__i + 1]; ++G__56052__i;}
  c = new cljs.core.IndexedSeq(G__56052__a,0);
} 
return G__56051__delegate.call(this,opts__$1,c);};
G__56051.cljs$lang$maxFixedArity = 1;
G__56051.cljs$lang$applyTo = (function (arglist__56053){
var opts__$1 = cljs.core.first(arglist__56053);
var c = cljs.core.rest(arglist__56053);
return G__56051__delegate(opts__$1,c);
});
G__56051.cljs$core$IFn$_invoke$arity$variadic = G__56051__delegate;
return G__56051;
})()
;})(___$1,owner,children,opts,map56025,validate__37277__auto__,ufv__,output_schema56026,input_schema56027,input_checker56028,output_checker56029))
], null));
var bs = cljs.core.nth.call(null,vec__56038,(0),null);
var props = cljs.core.nth.call(null,vec__56038,(1),null);
var classes = cljs.core.assoc.call(null,om_bootstrap.types.bs_class_set.call(null,bs),new cljs.core.Keyword(null,"navbar-fixed-top","navbar-fixed-top",-1597835234),new cljs.core.Keyword(null,"fixed-top?","fixed-top?",1129203462).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"navbar-fixed-bottom","navbar-fixed-bottom",202995425),new cljs.core.Keyword(null,"fixed-bottom?","fixed-bottom?",610036337).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"navbar-static-top","navbar-static-top",-1901902571),new cljs.core.Keyword(null,"static-top?","static-top?",558714465).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"navbar-inverse","navbar-inverse",1370996983),new cljs.core.Keyword(null,"inverse?","inverse?",-1062565987).cljs$core$IFn$_invoke$arity$1(bs));
return new cljs.core.Keyword(null,"component-fn","component-fn",-266012750).cljs$core$IFn$_invoke$arity$1(bs).call(null,om_bootstrap.util.merge_props.call(null,cljs.core.merge.call(null,bs,props),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"fluid","fluid",-1823657759).cljs$core$IFn$_invoke$arity$1(props))?"container-fluid":"container"))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(om_bootstrap.nav.render_header_and_toggle_btn_QMARK_.call(null,bs))?om_bootstrap.nav.render_header.call(null,self__.owner,bs):null),cljs.core.map.call(null,((function (vec__56038,bs,props,classes,___$1,owner,children,opts,map56025,validate__37277__auto__,ufv__,output_schema56026,input_schema56027,input_checker56028,output_checker56029){
return (function (p1__56020_SHARP_){
return om_bootstrap.nav.render_navbar_child.call(null,self__.owner,p1__56020_SHARP_,bs);
});})(vec__56038,bs,props,classes,___$1,owner,children,opts,map56025,validate__37277__auto__,ufv__,output_schema56026,input_schema56027,input_checker56028,output_checker56029))
,self__.children)],null)))));
});})(owner,children,opts,map56025,validate__37277__auto__,ufv__,output_schema56026,input_schema56027,input_checker56028,output_checker56029))
;

om_bootstrap.nav.t_om_bootstrap$nav56035.getBasis = ((function (owner,children,opts,map56025,validate__37277__auto__,ufv__,output_schema56026,input_schema56027,input_checker56028,output_checker56029){
return (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"G__56030","G__56030",-1664813600,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"map56025","map56025",-768703421,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"input-checker56028","input-checker56028",-762766171,null),cljs.core.with_meta(new cljs.core.Symbol(null,"constructor56022","constructor56022",-1640562265,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"output-checker56029","output-checker56029",-1776013654,null),new cljs.core.Symbol(null,"input-schema56027","input-schema56027",-312073199,null),new cljs.core.Symbol(null,"output-schema56026","output-schema56026",-730876806,null),new cljs.core.Symbol(null,"map56024","map56024",1172676923,null),new cljs.core.Symbol(null,"validate__37277__auto__","validate__37277__auto__",694432091,null),cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"meta56036","meta56036",-571781514,null)], null);
});})(owner,children,opts,map56025,validate__37277__auto__,ufv__,output_schema56026,input_schema56027,input_checker56028,output_checker56029))
;

om_bootstrap.nav.t_om_bootstrap$nav56035.cljs$lang$type = true;

om_bootstrap.nav.t_om_bootstrap$nav56035.cljs$lang$ctorStr = "om-bootstrap.nav/t_om_bootstrap$nav56035";

om_bootstrap.nav.t_om_bootstrap$nav56035.cljs$lang$ctorPrWriter = ((function (owner,children,opts,map56025,validate__37277__auto__,ufv__,output_schema56026,input_schema56027,input_checker56028,output_checker56029){
return (function (this__36436__auto__,writer__36437__auto__,opt__36438__auto__){
return cljs.core._write.call(null,writer__36437__auto__,"om-bootstrap.nav/t_om_bootstrap$nav56035");
});})(owner,children,opts,map56025,validate__37277__auto__,ufv__,output_schema56026,input_schema56027,input_checker56028,output_checker56029))
;

om_bootstrap.nav.__GT_t_om_bootstrap$nav56035 = ((function (owner,children,opts,map56025,validate__37277__auto__,ufv__,output_schema56026,input_schema56027,input_checker56028,output_checker56029){
return (function om_bootstrap$nav$constructor56022_$___GT_t_om_bootstrap$nav56035(G__56030__$1,map56025__$1,owner__$1,input_checker56028__$1,constructor56022__$1,children__$1,output_checker56029__$1,input_schema56027__$1,output_schema56026__$1,map56024__$1,validate__37277__auto____$1,opts__$1,ufv____$1,meta56036){
return (new om_bootstrap.nav.t_om_bootstrap$nav56035(G__56030__$1,map56025__$1,owner__$1,input_checker56028__$1,constructor56022__$1,children__$1,output_checker56029__$1,input_schema56027__$1,output_schema56026__$1,map56024__$1,validate__37277__auto____$1,opts__$1,ufv____$1,meta56036));
});})(owner,children,opts,map56025,validate__37277__auto__,ufv__,output_schema56026,input_schema56027,input_checker56028,output_checker56029))
;

}

return (new om_bootstrap.nav.t_om_bootstrap$nav56035(G__56030,map56025,owner,input_checker56028,om_bootstrap$nav$constructor56022,children,output_checker56029,input_schema56027,output_schema56026,map56024,validate__37277__auto__,opts,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__37277__auto__)){
var temp__4425__auto___56054 = output_checker56029.call(null,o__37280__auto__);
if(cljs.core.truth_(temp__4425__auto___56054)){
var error__37279__auto___56055 = temp__4425__auto___56054;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor56022","constructor56022",-1640562265,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__37279__auto___56055)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema56026,new cljs.core.Keyword(null,"value","value",305978217),o__37280__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___56055], null));
} else {
}
} else {
}

return o__37280__auto__;
});})(ufv__,output_schema56026,input_schema56027,input_checker56028,output_checker56029))
,schema.core.make_fn_schema.call(null,output_schema56026,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema56027], null)));
})();
om_bootstrap.nav.navbar_STAR_ = ((function (component_fnk__49615__auto___56047){
return (function om_bootstrap$nav$navbar_STAR_(var_args){
var args__36903__auto__ = [];
var len__36896__auto___56056 = arguments.length;
var i__36897__auto___56057 = (0);
while(true){
if((i__36897__auto___56057 < len__36896__auto___56056)){
args__36903__auto__.push((arguments[i__36897__auto___56057]));

var G__56058 = (i__36897__auto___56057 + (1));
i__36897__auto___56057 = G__56058;
continue;
} else {
}
break;
}

var argseq__36904__auto__ = ((((2) < args__36903__auto__.length))?(new cljs.core.IndexedSeq(args__36903__auto__.slice((2)),(0))):null);
return om_bootstrap.nav.navbar_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36904__auto__);
});})(component_fnk__49615__auto___56047))
;

om_bootstrap.nav.navbar_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__49615__auto___56047){
return (function (data__49616__auto__,owner56021,p__56042){
var vec__56043 = p__56042;
var opts__49617__auto__ = cljs.core.nth.call(null,vec__56043,(0),null);
return component_fnk__49615__auto___56047.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__49617__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner56021,new cljs.core.Keyword(null,"data","data",-232669377),data__49616__auto__], null));
});})(component_fnk__49615__auto___56047))
;

om_bootstrap.nav.navbar_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.nav.navbar_STAR_.cljs$lang$applyTo = ((function (component_fnk__49615__auto___56047){
return (function (seq56039){
var G__56040 = cljs.core.first.call(null,seq56039);
var seq56039__$1 = cljs.core.next.call(null,seq56039);
var G__56041 = cljs.core.first.call(null,seq56039__$1);
var seq56039__$2 = cljs.core.next.call(null,seq56039__$1);
return om_bootstrap.nav.navbar_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__56040,G__56041,seq56039__$2);
});})(component_fnk__49615__auto___56047))
;

om_bootstrap.nav.__GT_navbar_STAR_ = (function om_bootstrap$nav$__GT_navbar_STAR_(var_args){
var args56044 = [];
var len__36896__auto___56059 = arguments.length;
var i__36897__auto___56060 = (0);
while(true){
if((i__36897__auto___56060 < len__36896__auto___56059)){
args56044.push((arguments[i__36897__auto___56060]));

var G__56061 = (i__36897__auto___56060 + (1));
i__36897__auto___56060 = G__56061;
continue;
} else {
}
break;
}

var G__56046 = args56044.length;
switch (G__56046) {
case 1:
return om_bootstrap.nav.__GT_navbar_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.nav.__GT_navbar_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56044.length)].join('')));

}
});

om_bootstrap.nav.__GT_navbar_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__49584__auto__){
return om.core.build.call(null,om_bootstrap.nav.navbar_STAR_,cursor__49584__auto__);
});

om_bootstrap.nav.__GT_navbar_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__49584__auto__,m56023){
return om.core.build.call(null,om_bootstrap.nav.navbar_STAR_,cursor__49584__auto__,m56023);
});

om_bootstrap.nav.__GT_navbar_STAR_.cljs$lang$maxFixedArity = 2;
var ufv___56071 = schema.utils.use_fn_validation;
var output_schema56063_56072 = schema.core.Any;
var input_schema56064_56073 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.nav.NavBar,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"NavBar","NavBar",-375065540,null)], null))),schema.core.Any], null);
var input_checker56065_56074 = schema.core.checker.call(null,input_schema56064_56073);
var output_checker56066_56075 = schema.core.checker.call(null,output_schema56063_56072);
/**
 * Inputs: [opts :- NavBar & children]
 */
om_bootstrap.nav.navbar = ((function (ufv___56071,output_schema56063_56072,input_schema56064_56073,input_checker56065_56074,output_checker56066_56075){
return (function om_bootstrap$nav$navbar(var_args){
var args__36903__auto__ = [];
var len__36896__auto___56076 = arguments.length;
var i__36897__auto___56077 = (0);
while(true){
if((i__36897__auto___56077 < len__36896__auto___56076)){
args__36903__auto__.push((arguments[i__36897__auto___56077]));

var G__56078 = (i__36897__auto___56077 + (1));
i__36897__auto___56077 = G__56078;
continue;
} else {
}
break;
}

var argseq__36904__auto__ = ((((1) < args__36903__auto__.length))?(new cljs.core.IndexedSeq(args__36903__auto__.slice((1)),(0))):null);
return om_bootstrap.nav.navbar.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36904__auto__);
});})(ufv___56071,output_schema56063_56072,input_schema56064_56073,input_checker56065_56074,output_checker56066_56075))
;

om_bootstrap.nav.navbar.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___56071,output_schema56063_56072,input_schema56064_56073,input_checker56065_56074,output_checker56066_56075){
return (function (G__56067,rest56068){
var validate__37277__auto__ = ufv___56071.get_cell();
if(cljs.core.truth_(validate__37277__auto__)){
var args__37278__auto___56079 = cljs.core.list_STAR_.call(null,G__56067,rest56068);
var temp__4425__auto___56080 = input_checker56065_56074.call(null,args__37278__auto___56079);
if(cljs.core.truth_(temp__4425__auto___56080)){
var error__37279__auto___56081 = temp__4425__auto___56080;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"navbar","navbar",-1070039728,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__37279__auto___56081)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema56064_56073,new cljs.core.Keyword(null,"value","value",305978217),args__37278__auto___56079,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___56081], null));
} else {
}
} else {
}

var o__37280__auto__ = (function (){var opts = G__56067;
var children = rest56068;
while(true){
return om_bootstrap.nav.__GT_navbar_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__37277__auto__)){
var temp__4425__auto___56082 = output_checker56066_56075.call(null,o__37280__auto__);
if(cljs.core.truth_(temp__4425__auto___56082)){
var error__37279__auto___56083 = temp__4425__auto___56082;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"navbar","navbar",-1070039728,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__37279__auto___56083)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema56063_56072,new cljs.core.Keyword(null,"value","value",305978217),o__37280__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___56083], null));
} else {
}
} else {
}

return o__37280__auto__;
});})(ufv___56071,output_schema56063_56072,input_schema56064_56073,input_checker56065_56074,output_checker56066_56075))
;

om_bootstrap.nav.navbar.cljs$lang$maxFixedArity = (1);

om_bootstrap.nav.navbar.cljs$lang$applyTo = ((function (ufv___56071,output_schema56063_56072,input_schema56064_56073,input_checker56065_56074,output_checker56066_56075){
return (function (seq56069){
var G__56070 = cljs.core.first.call(null,seq56069);
var seq56069__$1 = cljs.core.next.call(null,seq56069);
return om_bootstrap.nav.navbar.cljs$core$IFn$_invoke$arity$variadic(G__56070,seq56069__$1);
});})(ufv___56071,output_schema56063_56072,input_schema56064_56073,input_checker56065_56074,output_checker56066_56075))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.nav.navbar),schema.core.make_fn_schema.call(null,output_schema56063_56072,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema56064_56073], null)));

//# sourceMappingURL=nav.js.map