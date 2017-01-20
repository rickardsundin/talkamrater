// Compiled by ClojureScript 1.7.170 {}
goog.provide('om_bootstrap.mixins');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('om.core');
goog.require('om_tools.mixin');
goog.require('schema.core');
var ufv___49258 = schema.utils.use_fn_validation;
var output_schema49251_49259 = schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var input_schema49252_49260 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"target","target",1893533248,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null))),schema.core.one.call(null,schema.core.Str,cljs.core.with_meta(new cljs.core.Symbol(null,"event-type","event-type",1960254340,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null)], null))),schema.core.one.call(null,schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"callback","callback",935395299,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","=>","s/=>",-813269628,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null))], null)))], null);
var input_checker49253_49261 = schema.core.checker.call(null,input_schema49252_49260);
var output_checker49254_49262 = schema.core.checker.call(null,output_schema49251_49259);
/**
 * Inputs: [target :- s/Any event-type :- s/Str callback :- (s/=> s/Any s/Any)]
 *   Returns: (s/=> s/Any)
 * 
 *   Registers the callback on the supplied target for events of type
 * `event-type`. Returns a function of no arguments that, when called,
 * unregisters the callback.
 */
om_bootstrap.mixins.event_listener = ((function (ufv___49258,output_schema49251_49259,input_schema49252_49260,input_checker49253_49261,output_checker49254_49262){
return (function om_bootstrap$mixins$event_listener(G__49255,G__49256,G__49257){
var validate__37277__auto__ = ufv___49258.get_cell();
if(cljs.core.truth_(validate__37277__auto__)){
var args__37278__auto___49263 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__49255,G__49256,G__49257], null);
var temp__4425__auto___49264 = input_checker49253_49261.call(null,args__37278__auto___49263);
if(cljs.core.truth_(temp__4425__auto___49264)){
var error__37279__auto___49265 = temp__4425__auto___49264;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"event-listener","event-listener",809979412,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","=>","s/=>",-813269628,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Registers the callback on the supplied target for events of type\n   `event-type`. Returns a function of no arguments that, when called,\n   unregisters the callback."], null)),cljs.core.pr_str.call(null,error__37279__auto___49265)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema49252_49260,new cljs.core.Keyword(null,"value","value",305978217),args__37278__auto___49263,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___49265], null));
} else {
}
} else {
}

var o__37280__auto__ = (function (){var target = G__49255;
var event_type = G__49256;
var callback = G__49257;
while(true){
if(cljs.core.truth_(target.addEventListener)){
target.addEventListener(event_type,callback,false);

return ((function (validate__37277__auto__,ufv___49258,output_schema49251_49259,input_schema49252_49260,input_checker49253_49261,output_checker49254_49262){
return (function (){
return target.removeEventListener(event_type,callback,false);
});
;})(validate__37277__auto__,ufv___49258,output_schema49251_49259,input_schema49252_49260,input_checker49253_49261,output_checker49254_49262))
} else {
if(cljs.core.truth_(target.attachEvent)){
var event_type__$1 = [cljs.core.str("on"),cljs.core.str(event_type)].join('');
target.attachEvent(event_type__$1,callback);

return ((function (event_type__$1,validate__37277__auto__,ufv___49258,output_schema49251_49259,input_schema49252_49260,input_checker49253_49261,output_checker49254_49262){
return (function (){
return target.detachEvent(event_type__$1,callback);
});
;})(event_type__$1,validate__37277__auto__,ufv___49258,output_schema49251_49259,input_schema49252_49260,input_checker49253_49261,output_checker49254_49262))
} else {
return ((function (validate__37277__auto__,ufv___49258,output_schema49251_49259,input_schema49252_49260,input_checker49253_49261,output_checker49254_49262){
return (function (){
return null;
});
;})(validate__37277__auto__,ufv___49258,output_schema49251_49259,input_schema49252_49260,input_checker49253_49261,output_checker49254_49262))

}
}
break;
}
})();
if(cljs.core.truth_(validate__37277__auto__)){
var temp__4425__auto___49266 = output_checker49254_49262.call(null,o__37280__auto__);
if(cljs.core.truth_(temp__4425__auto___49266)){
var error__37279__auto___49267 = temp__4425__auto___49266;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"event-listener","event-listener",809979412,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","=>","s/=>",-813269628,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Registers the callback on the supplied target for events of type\n   `event-type`. Returns a function of no arguments that, when called,\n   unregisters the callback."], null)),cljs.core.pr_str.call(null,error__37279__auto___49267)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema49251_49259,new cljs.core.Keyword(null,"value","value",305978217),o__37280__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37279__auto___49267], null));
} else {
}
} else {
}

return o__37280__auto__;
});})(ufv___49258,output_schema49251_49259,input_schema49252_49260,input_checker49253_49261,output_checker49254_49262))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.mixins.event_listener),schema.core.make_fn_schema.call(null,output_schema49251_49259,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema49252_49260], null)));
/**
 * Handles a sequence of listeners for the component, and removes them
 * from the document when the component is unmounted.
 */
om_bootstrap.mixins.set_listener_mixin = {"componentWillMount": (function (){
var this49268 = this;
return ((function (this49268){
return (function (owner){
return owner.listeners = [];
});})(this49268))
.call(null,this49268);
}), "componentWillUnmount": (function (){
var this49269 = this;
return ((function (this49269){
return (function (owner){
var seq__49274 = cljs.core.seq.call(null,owner.listeners);
var chunk__49275 = null;
var count__49276 = (0);
var i__49277 = (0);
while(true){
if((i__49277 < count__49276)){
var l = cljs.core._nth.call(null,chunk__49275,i__49277);
l.call(null);

var G__49278 = seq__49274;
var G__49279 = chunk__49275;
var G__49280 = count__49276;
var G__49281 = (i__49277 + (1));
seq__49274 = G__49278;
chunk__49275 = G__49279;
count__49276 = G__49280;
i__49277 = G__49281;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__49274);
if(temp__4425__auto__){
var seq__49274__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49274__$1)){
var c__36641__auto__ = cljs.core.chunk_first.call(null,seq__49274__$1);
var G__49282 = cljs.core.chunk_rest.call(null,seq__49274__$1);
var G__49283 = c__36641__auto__;
var G__49284 = cljs.core.count.call(null,c__36641__auto__);
var G__49285 = (0);
seq__49274 = G__49282;
chunk__49275 = G__49283;
count__49276 = G__49284;
i__49277 = G__49285;
continue;
} else {
var l = cljs.core.first.call(null,seq__49274__$1);
l.call(null);

var G__49286 = cljs.core.next.call(null,seq__49274__$1);
var G__49287 = null;
var G__49288 = (0);
var G__49289 = (0);
seq__49274 = G__49286;
chunk__49275 = G__49287;
count__49276 = G__49288;
i__49277 = G__49289;
continue;
}
} else {
return null;
}
}
break;
}
});})(this49269))
.call(null,this49269);
}), "set_listener": (function (target49271,event_type49272,callback49273){
var this49270 = this;
return ((function (this49270){
return (function (owner,target,event_type,callback){
var remove_fn = om_bootstrap.mixins.event_listener.call(null,target,event_type,callback);
return owner.listeners.push(remove_fn);
});})(this49270))
.call(null,this49270,target49271,event_type49272,callback49273);
})};
/**
 * Handles a sequence of timeouts for the component, and removes them
 * from the document when the component is unmounted.
 */
om_bootstrap.mixins.set_timeout_mixin = {"componentWillMount": (function (){
var this49291 = this;
return ((function (this49291){
return (function (owner){
return owner.timeouts = [];
});})(this49291))
.call(null,this49291);
}), "componentWillUnmount": (function (){
var this49292 = this;
return ((function (this49292){
return (function (owner){
return owner.timeouts.map(((function (this49292){
return (function (p1__49290_SHARP_){
return clearTimeout(p1__49290_SHARP_);
});})(this49292))
);
});})(this49292))
.call(null,this49292);
}), "set_timeout": (function (f49294,timeout49295){
var this49293 = this;
return ((function (this49293){
return (function (owner,f,timeout){
var timeout__$1 = setTimeout(f,timeout);
return owner.timeouts.push(timeout__$1);
});})(this49293))
.call(null,this49293,f49294,timeout49295);
})};
/**
 * Accepts two DOM elements; returns true if the supplied node is
 *   nested inside the supplied root, false otherwise.
 */
om_bootstrap.mixins.in_root_QMARK_ = (function om_bootstrap$mixins$in_root_QMARK_(node,root){
var node__$1 = node;
while(true){
if((node__$1 == null)){
return false;
} else {
if(cljs.core._EQ_.call(null,root,node__$1)){
return true;
} else {
var G__49296 = node__$1.parentNode;
node__$1 = G__49296;
continue;

}
}
break;
}
});
om_bootstrap.mixins.ESCAPE_KEY = (27);
/**
 * For dropdowns, binds a handler for that sets the dropdown-mixin's
 *   `:open?` state to false if the user clicks outside the owning
 *   component OR hits the escape key.
 */
om_bootstrap.mixins.bind_root_close_handlers_BANG_ = (function om_bootstrap$mixins$bind_root_close_handlers_BANG_(owner){
var set_state = (owner["setDropdownState"]);
return owner.dropdownListeners = [om_bootstrap.mixins.event_listener.call(null,document,"click",((function (set_state){
return (function (e){
if(cljs.core.truth_(om_bootstrap.mixins.in_root_QMARK_.call(null,e.target,om.core.get_node.call(null,owner)))){
return null;
} else {
return set_state.call(null,false);
}
});})(set_state))
),om_bootstrap.mixins.event_listener.call(null,document,"keyup",((function (set_state){
return (function (e){
if(cljs.core._EQ_.call(null,om_bootstrap.mixins.ESCAPE_KEY,e.keyCode)){
return set_state.call(null,false);
} else {
return null;
}
});})(set_state))
)];
});
/**
 * If they're present on the owning object, removes the listeners
 *   registered by the dropdown mixin.
 */
om_bootstrap.mixins.unbind_root_close_handlers_BANG_ = (function om_bootstrap$mixins$unbind_root_close_handlers_BANG_(owner){
var temp__4425__auto__ = owner.dropdownListeners;
if(cljs.core.truth_(temp__4425__auto__)){
var listeners = temp__4425__auto__;
var seq__49301_49305 = cljs.core.seq.call(null,listeners);
var chunk__49302_49306 = null;
var count__49303_49307 = (0);
var i__49304_49308 = (0);
while(true){
if((i__49304_49308 < count__49303_49307)){
var l_49309 = cljs.core._nth.call(null,chunk__49302_49306,i__49304_49308);
l_49309.call(null);

var G__49310 = seq__49301_49305;
var G__49311 = chunk__49302_49306;
var G__49312 = count__49303_49307;
var G__49313 = (i__49304_49308 + (1));
seq__49301_49305 = G__49310;
chunk__49302_49306 = G__49311;
count__49303_49307 = G__49312;
i__49304_49308 = G__49313;
continue;
} else {
var temp__4425__auto___49314__$1 = cljs.core.seq.call(null,seq__49301_49305);
if(temp__4425__auto___49314__$1){
var seq__49301_49315__$1 = temp__4425__auto___49314__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49301_49315__$1)){
var c__36641__auto___49316 = cljs.core.chunk_first.call(null,seq__49301_49315__$1);
var G__49317 = cljs.core.chunk_rest.call(null,seq__49301_49315__$1);
var G__49318 = c__36641__auto___49316;
var G__49319 = cljs.core.count.call(null,c__36641__auto___49316);
var G__49320 = (0);
seq__49301_49305 = G__49317;
chunk__49302_49306 = G__49318;
count__49303_49307 = G__49319;
i__49304_49308 = G__49320;
continue;
} else {
var l_49321 = cljs.core.first.call(null,seq__49301_49315__$1);
l_49321.call(null);

var G__49322 = cljs.core.next.call(null,seq__49301_49315__$1);
var G__49323 = null;
var G__49324 = (0);
var G__49325 = (0);
seq__49301_49305 = G__49322;
chunk__49302_49306 = G__49323;
count__49303_49307 = G__49324;
i__49304_49308 = G__49325;
continue;
}
} else {
}
}
break;
}

return owner.dropdownListeners = null;
} else {
return null;
}
});
/**
 * Mixin that manages a single piece of state - :open?. If a user
 *   clicks outside the component's owning dom element OR hits the escape
 *   key, the state will jump back to false.
 * 
 *   Down the road this may need to register a callback when the state
 *   changes.
 */
om_bootstrap.mixins.dropdown_mixin = {"getInitialState": (function (){
var this49326 = this;
return ((function (this49326){
return (function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null);
});})(this49326))
.call(null,this49326);
}), "componentWillUnmount": (function (){
var this49327 = this;
return ((function (this49327){
return (function (owner){
return om_bootstrap.mixins.unbind_root_close_handlers_BANG_.call(null,owner);
});})(this49327))
.call(null,this49327);
}), "isDropdownOpen": (function (){
var this49328 = this;
return ((function (this49328){
return (function (owner){
return om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"open?","open?",1238443125));
});})(this49328))
.call(null,this49328);
}), "setDropdownState": (function (open_QMARK_49330){
var this49329 = this;
return ((function (this49329){
return (function (owner,open_QMARK_){
if(cljs.core.truth_(open_QMARK_)){
om_bootstrap.mixins.bind_root_close_handlers_BANG_.call(null,owner);
} else {
om_bootstrap.mixins.unbind_root_close_handlers_BANG_.call(null,owner);
}

return om.core.set_state_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open?","open?",1238443125)], null),open_QMARK_);
});})(this49329))
.call(null,this49329,open_QMARK_49330);
})};
/**
 * Mixin that enables collapsible Panels. Similar to the Dropdown
 * Mixin it only manages a single piece of state - :collapsed?. The Panel
 * is opened and closen by clicking on the header.
 */
om_bootstrap.mixins.collapsible_mixin = {"getInitialState": (function (){
var this49331 = this;
return ((function (this49331){
return (function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674),true], null);
});})(this49331))
.call(null,this49331);
}), "isPanelCollapsed": (function (){
var this49332 = this;
return ((function (this49332){
return (function (owner){
var collapsed_QMARK_ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674));
if((collapsed_QMARK_ == null)){
om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674),true);

return true;
} else {
return collapsed_QMARK_;
}
});})(this49332))
.call(null,this49332);
}), "toggleCollapsed": (function (){
var this49333 = this;
return ((function (this49333){
return (function (owner){
return om.core.update_state_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674)], null),cljs.core.not);
});})(this49333))
.call(null,this49333);
})};

//# sourceMappingURL=mixins.js.map