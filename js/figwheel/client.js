// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__51420 = cljs.core._EQ_;
var expr__51421 = (function (){var or__35838__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__35838__auto__)){
return or__35838__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__51420.call(null,"true",expr__51421))){
return true;
} else {
if(cljs.core.truth_(pred__51420.call(null,"false",expr__51421))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__51421)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__51423__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__51423 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51424__i = 0, G__51424__a = new Array(arguments.length -  0);
while (G__51424__i < G__51424__a.length) {G__51424__a[G__51424__i] = arguments[G__51424__i + 0]; ++G__51424__i;}
  args = new cljs.core.IndexedSeq(G__51424__a,0);
} 
return G__51423__delegate.call(this,args);};
G__51423.cljs$lang$maxFixedArity = 0;
G__51423.cljs$lang$applyTo = (function (arglist__51425){
var args = cljs.core.seq(arglist__51425);
return G__51423__delegate(args);
});
G__51423.cljs$core$IFn$_invoke$arity$variadic = G__51423__delegate;
return G__51423;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__51426){
var map__51429 = p__51426;
var map__51429__$1 = ((((!((map__51429 == null)))?((((map__51429.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51429.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51429):map__51429);
var message = cljs.core.get.call(null,map__51429__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__51429__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__35838__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__35838__auto__)){
return or__35838__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__35826__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__35826__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__35826__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__46399__auto___51591 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46399__auto___51591,ch){
return (function (){
var f__46400__auto__ = (function (){var switch__46287__auto__ = ((function (c__46399__auto___51591,ch){
return (function (state_51560){
var state_val_51561 = (state_51560[(1)]);
if((state_val_51561 === (7))){
var inst_51556 = (state_51560[(2)]);
var state_51560__$1 = state_51560;
var statearr_51562_51592 = state_51560__$1;
(statearr_51562_51592[(2)] = inst_51556);

(statearr_51562_51592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51561 === (1))){
var state_51560__$1 = state_51560;
var statearr_51563_51593 = state_51560__$1;
(statearr_51563_51593[(2)] = null);

(statearr_51563_51593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51561 === (4))){
var inst_51513 = (state_51560[(7)]);
var inst_51513__$1 = (state_51560[(2)]);
var state_51560__$1 = (function (){var statearr_51564 = state_51560;
(statearr_51564[(7)] = inst_51513__$1);

return statearr_51564;
})();
if(cljs.core.truth_(inst_51513__$1)){
var statearr_51565_51594 = state_51560__$1;
(statearr_51565_51594[(1)] = (5));

} else {
var statearr_51566_51595 = state_51560__$1;
(statearr_51566_51595[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51561 === (15))){
var inst_51520 = (state_51560[(8)]);
var inst_51535 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_51520);
var inst_51536 = cljs.core.first.call(null,inst_51535);
var inst_51537 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_51536);
var inst_51538 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_51537)].join('');
var inst_51539 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_51538);
var state_51560__$1 = state_51560;
var statearr_51567_51596 = state_51560__$1;
(statearr_51567_51596[(2)] = inst_51539);

(statearr_51567_51596[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51561 === (13))){
var inst_51544 = (state_51560[(2)]);
var state_51560__$1 = state_51560;
var statearr_51568_51597 = state_51560__$1;
(statearr_51568_51597[(2)] = inst_51544);

(statearr_51568_51597[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51561 === (6))){
var state_51560__$1 = state_51560;
var statearr_51569_51598 = state_51560__$1;
(statearr_51569_51598[(2)] = null);

(statearr_51569_51598[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51561 === (17))){
var inst_51542 = (state_51560[(2)]);
var state_51560__$1 = state_51560;
var statearr_51570_51599 = state_51560__$1;
(statearr_51570_51599[(2)] = inst_51542);

(statearr_51570_51599[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51561 === (3))){
var inst_51558 = (state_51560[(2)]);
var state_51560__$1 = state_51560;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51560__$1,inst_51558);
} else {
if((state_val_51561 === (12))){
var inst_51519 = (state_51560[(9)]);
var inst_51533 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_51519,opts);
var state_51560__$1 = state_51560;
if(cljs.core.truth_(inst_51533)){
var statearr_51571_51600 = state_51560__$1;
(statearr_51571_51600[(1)] = (15));

} else {
var statearr_51572_51601 = state_51560__$1;
(statearr_51572_51601[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51561 === (2))){
var state_51560__$1 = state_51560;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51560__$1,(4),ch);
} else {
if((state_val_51561 === (11))){
var inst_51520 = (state_51560[(8)]);
var inst_51525 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51526 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_51520);
var inst_51527 = cljs.core.async.timeout.call(null,(1000));
var inst_51528 = [inst_51526,inst_51527];
var inst_51529 = (new cljs.core.PersistentVector(null,2,(5),inst_51525,inst_51528,null));
var state_51560__$1 = state_51560;
return cljs.core.async.ioc_alts_BANG_.call(null,state_51560__$1,(14),inst_51529);
} else {
if((state_val_51561 === (9))){
var inst_51520 = (state_51560[(8)]);
var inst_51546 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_51547 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_51520);
var inst_51548 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_51547);
var inst_51549 = [cljs.core.str("Not loading: "),cljs.core.str(inst_51548)].join('');
var inst_51550 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_51549);
var state_51560__$1 = (function (){var statearr_51573 = state_51560;
(statearr_51573[(10)] = inst_51546);

return statearr_51573;
})();
var statearr_51574_51602 = state_51560__$1;
(statearr_51574_51602[(2)] = inst_51550);

(statearr_51574_51602[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51561 === (5))){
var inst_51513 = (state_51560[(7)]);
var inst_51515 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_51516 = (new cljs.core.PersistentArrayMap(null,2,inst_51515,null));
var inst_51517 = (new cljs.core.PersistentHashSet(null,inst_51516,null));
var inst_51518 = figwheel.client.focus_msgs.call(null,inst_51517,inst_51513);
var inst_51519 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_51518);
var inst_51520 = cljs.core.first.call(null,inst_51518);
var inst_51521 = figwheel.client.autoload_QMARK_.call(null);
var state_51560__$1 = (function (){var statearr_51575 = state_51560;
(statearr_51575[(8)] = inst_51520);

(statearr_51575[(9)] = inst_51519);

return statearr_51575;
})();
if(cljs.core.truth_(inst_51521)){
var statearr_51576_51603 = state_51560__$1;
(statearr_51576_51603[(1)] = (8));

} else {
var statearr_51577_51604 = state_51560__$1;
(statearr_51577_51604[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51561 === (14))){
var inst_51531 = (state_51560[(2)]);
var state_51560__$1 = state_51560;
var statearr_51578_51605 = state_51560__$1;
(statearr_51578_51605[(2)] = inst_51531);

(statearr_51578_51605[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51561 === (16))){
var state_51560__$1 = state_51560;
var statearr_51579_51606 = state_51560__$1;
(statearr_51579_51606[(2)] = null);

(statearr_51579_51606[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51561 === (10))){
var inst_51552 = (state_51560[(2)]);
var state_51560__$1 = (function (){var statearr_51580 = state_51560;
(statearr_51580[(11)] = inst_51552);

return statearr_51580;
})();
var statearr_51581_51607 = state_51560__$1;
(statearr_51581_51607[(2)] = null);

(statearr_51581_51607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51561 === (8))){
var inst_51519 = (state_51560[(9)]);
var inst_51523 = figwheel.client.reload_file_state_QMARK_.call(null,inst_51519,opts);
var state_51560__$1 = state_51560;
if(cljs.core.truth_(inst_51523)){
var statearr_51582_51608 = state_51560__$1;
(statearr_51582_51608[(1)] = (11));

} else {
var statearr_51583_51609 = state_51560__$1;
(statearr_51583_51609[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__46399__auto___51591,ch))
;
return ((function (switch__46287__auto__,c__46399__auto___51591,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__46288__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__46288__auto____0 = (function (){
var statearr_51587 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51587[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__46288__auto__);

(statearr_51587[(1)] = (1));

return statearr_51587;
});
var figwheel$client$file_reloader_plugin_$_state_machine__46288__auto____1 = (function (state_51560){
while(true){
var ret_value__46289__auto__ = (function (){try{while(true){
var result__46290__auto__ = switch__46287__auto__.call(null,state_51560);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46290__auto__;
}
break;
}
}catch (e51588){if((e51588 instanceof Object)){
var ex__46291__auto__ = e51588;
var statearr_51589_51610 = state_51560;
(statearr_51589_51610[(5)] = ex__46291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51588;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51611 = state_51560;
state_51560 = G__51611;
continue;
} else {
return ret_value__46289__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__46288__auto__ = function(state_51560){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__46288__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__46288__auto____1.call(this,state_51560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__46288__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__46288__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__46288__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__46288__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__46288__auto__;
})()
;})(switch__46287__auto__,c__46399__auto___51591,ch))
})();
var state__46401__auto__ = (function (){var statearr_51590 = f__46400__auto__.call(null);
(statearr_51590[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46399__auto___51591);

return statearr_51590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46401__auto__);
});})(c__46399__auto___51591,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__51612_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__51612_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_51619 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_51619){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_51617 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_51618 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_51617,_STAR_print_newline_STAR_51618,base_path_51619){
return (function() { 
var G__51620__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__51620 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51621__i = 0, G__51621__a = new Array(arguments.length -  0);
while (G__51621__i < G__51621__a.length) {G__51621__a[G__51621__i] = arguments[G__51621__i + 0]; ++G__51621__i;}
  args = new cljs.core.IndexedSeq(G__51621__a,0);
} 
return G__51620__delegate.call(this,args);};
G__51620.cljs$lang$maxFixedArity = 0;
G__51620.cljs$lang$applyTo = (function (arglist__51622){
var args = cljs.core.seq(arglist__51622);
return G__51620__delegate(args);
});
G__51620.cljs$core$IFn$_invoke$arity$variadic = G__51620__delegate;
return G__51620;
})()
;})(_STAR_print_fn_STAR_51617,_STAR_print_newline_STAR_51618,base_path_51619))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_51618;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_51617;
}}catch (e51616){if((e51616 instanceof Error)){
var e = e51616;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_51619], null));
} else {
var e = e51616;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_51619))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__51623){
var map__51630 = p__51623;
var map__51630__$1 = ((((!((map__51630 == null)))?((((map__51630.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51630.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51630):map__51630);
var opts = map__51630__$1;
var build_id = cljs.core.get.call(null,map__51630__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__51630,map__51630__$1,opts,build_id){
return (function (p__51632){
var vec__51633 = p__51632;
var map__51634 = cljs.core.nth.call(null,vec__51633,(0),null);
var map__51634__$1 = ((((!((map__51634 == null)))?((((map__51634.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51634.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51634):map__51634);
var msg = map__51634__$1;
var msg_name = cljs.core.get.call(null,map__51634__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__51633,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__51633,map__51634,map__51634__$1,msg,msg_name,_,map__51630,map__51630__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__51633,map__51634,map__51634__$1,msg,msg_name,_,map__51630,map__51630__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__51630,map__51630__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__51640){
var vec__51641 = p__51640;
var map__51642 = cljs.core.nth.call(null,vec__51641,(0),null);
var map__51642__$1 = ((((!((map__51642 == null)))?((((map__51642.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51642.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51642):map__51642);
var msg = map__51642__$1;
var msg_name = cljs.core.get.call(null,map__51642__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__51641,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__51644){
var map__51654 = p__51644;
var map__51654__$1 = ((((!((map__51654 == null)))?((((map__51654.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51654.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51654):map__51654);
var on_compile_warning = cljs.core.get.call(null,map__51654__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__51654__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__51654,map__51654__$1,on_compile_warning,on_compile_fail){
return (function (p__51656){
var vec__51657 = p__51656;
var map__51658 = cljs.core.nth.call(null,vec__51657,(0),null);
var map__51658__$1 = ((((!((map__51658 == null)))?((((map__51658.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51658.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51658):map__51658);
var msg = map__51658__$1;
var msg_name = cljs.core.get.call(null,map__51658__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__51657,(1));
var pred__51660 = cljs.core._EQ_;
var expr__51661 = msg_name;
if(cljs.core.truth_(pred__51660.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__51661))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__51660.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__51661))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__51654,map__51654__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__46399__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46399__auto__,msg_hist,msg_names,msg){
return (function (){
var f__46400__auto__ = (function (){var switch__46287__auto__ = ((function (c__46399__auto__,msg_hist,msg_names,msg){
return (function (state_51877){
var state_val_51878 = (state_51877[(1)]);
if((state_val_51878 === (7))){
var inst_51801 = (state_51877[(2)]);
var state_51877__$1 = state_51877;
if(cljs.core.truth_(inst_51801)){
var statearr_51879_51925 = state_51877__$1;
(statearr_51879_51925[(1)] = (8));

} else {
var statearr_51880_51926 = state_51877__$1;
(statearr_51880_51926[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51878 === (20))){
var inst_51871 = (state_51877[(2)]);
var state_51877__$1 = state_51877;
var statearr_51881_51927 = state_51877__$1;
(statearr_51881_51927[(2)] = inst_51871);

(statearr_51881_51927[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51878 === (27))){
var inst_51867 = (state_51877[(2)]);
var state_51877__$1 = state_51877;
var statearr_51882_51928 = state_51877__$1;
(statearr_51882_51928[(2)] = inst_51867);

(statearr_51882_51928[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51878 === (1))){
var inst_51794 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_51877__$1 = state_51877;
if(cljs.core.truth_(inst_51794)){
var statearr_51883_51929 = state_51877__$1;
(statearr_51883_51929[(1)] = (2));

} else {
var statearr_51884_51930 = state_51877__$1;
(statearr_51884_51930[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51878 === (24))){
var inst_51869 = (state_51877[(2)]);
var state_51877__$1 = state_51877;
var statearr_51885_51931 = state_51877__$1;
(statearr_51885_51931[(2)] = inst_51869);

(statearr_51885_51931[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51878 === (4))){
var inst_51875 = (state_51877[(2)]);
var state_51877__$1 = state_51877;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51877__$1,inst_51875);
} else {
if((state_val_51878 === (15))){
var inst_51873 = (state_51877[(2)]);
var state_51877__$1 = state_51877;
var statearr_51886_51932 = state_51877__$1;
(statearr_51886_51932[(2)] = inst_51873);

(statearr_51886_51932[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51878 === (21))){
var inst_51832 = (state_51877[(2)]);
var state_51877__$1 = state_51877;
var statearr_51887_51933 = state_51877__$1;
(statearr_51887_51933[(2)] = inst_51832);

(statearr_51887_51933[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51878 === (31))){
var inst_51856 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_51877__$1 = state_51877;
if(cljs.core.truth_(inst_51856)){
var statearr_51888_51934 = state_51877__$1;
(statearr_51888_51934[(1)] = (34));

} else {
var statearr_51889_51935 = state_51877__$1;
(statearr_51889_51935[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51878 === (32))){
var inst_51865 = (state_51877[(2)]);
var state_51877__$1 = state_51877;
var statearr_51890_51936 = state_51877__$1;
(statearr_51890_51936[(2)] = inst_51865);

(statearr_51890_51936[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51878 === (33))){
var inst_51854 = (state_51877[(2)]);
var state_51877__$1 = state_51877;
var statearr_51891_51937 = state_51877__$1;
(statearr_51891_51937[(2)] = inst_51854);

(statearr_51891_51937[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51878 === (13))){
var inst_51815 = figwheel.client.heads_up.clear.call(null);
var state_51877__$1 = state_51877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51877__$1,(16),inst_51815);
} else {
if((state_val_51878 === (22))){
var inst_51836 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51837 = figwheel.client.heads_up.append_message.call(null,inst_51836);
var state_51877__$1 = state_51877;
var statearr_51892_51938 = state_51877__$1;
(statearr_51892_51938[(2)] = inst_51837);

(statearr_51892_51938[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51878 === (36))){
var inst_51863 = (state_51877[(2)]);
var state_51877__$1 = state_51877;
var statearr_51893_51939 = state_51877__$1;
(statearr_51893_51939[(2)] = inst_51863);

(statearr_51893_51939[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51878 === (29))){
var inst_51847 = (state_51877[(2)]);
var state_51877__$1 = state_51877;
var statearr_51894_51940 = state_51877__$1;
(statearr_51894_51940[(2)] = inst_51847);

(statearr_51894_51940[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51878 === (6))){
var inst_51796 = (state_51877[(7)]);
var state_51877__$1 = state_51877;
var statearr_51895_51941 = state_51877__$1;
(statearr_51895_51941[(2)] = inst_51796);

(statearr_51895_51941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51878 === (28))){
var inst_51843 = (state_51877[(2)]);
var inst_51844 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51845 = figwheel.client.heads_up.display_warning.call(null,inst_51844);
var state_51877__$1 = (function (){var statearr_51896 = state_51877;
(statearr_51896[(8)] = inst_51843);

return statearr_51896;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51877__$1,(29),inst_51845);
} else {
if((state_val_51878 === (25))){
var inst_51841 = figwheel.client.heads_up.clear.call(null);
var state_51877__$1 = state_51877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51877__$1,(28),inst_51841);
} else {
if((state_val_51878 === (34))){
var inst_51858 = figwheel.client.heads_up.flash_loaded.call(null);
var state_51877__$1 = state_51877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51877__$1,(37),inst_51858);
} else {
if((state_val_51878 === (17))){
var inst_51823 = (state_51877[(2)]);
var state_51877__$1 = state_51877;
var statearr_51897_51942 = state_51877__$1;
(statearr_51897_51942[(2)] = inst_51823);

(statearr_51897_51942[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51878 === (3))){
var inst_51813 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_51877__$1 = state_51877;
if(cljs.core.truth_(inst_51813)){
var statearr_51898_51943 = state_51877__$1;
(statearr_51898_51943[(1)] = (13));

} else {
var statearr_51899_51944 = state_51877__$1;
(statearr_51899_51944[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51878 === (12))){
var inst_51809 = (state_51877[(2)]);
var state_51877__$1 = state_51877;
var statearr_51900_51945 = state_51877__$1;
(statearr_51900_51945[(2)] = inst_51809);

(statearr_51900_51945[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51878 === (2))){
var inst_51796 = (state_51877[(7)]);
var inst_51796__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_51877__$1 = (function (){var statearr_51901 = state_51877;
(statearr_51901[(7)] = inst_51796__$1);

return statearr_51901;
})();
if(cljs.core.truth_(inst_51796__$1)){
var statearr_51902_51946 = state_51877__$1;
(statearr_51902_51946[(1)] = (5));

} else {
var statearr_51903_51947 = state_51877__$1;
(statearr_51903_51947[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51878 === (23))){
var inst_51839 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_51877__$1 = state_51877;
if(cljs.core.truth_(inst_51839)){
var statearr_51904_51948 = state_51877__$1;
(statearr_51904_51948[(1)] = (25));

} else {
var statearr_51905_51949 = state_51877__$1;
(statearr_51905_51949[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51878 === (35))){
var state_51877__$1 = state_51877;
var statearr_51906_51950 = state_51877__$1;
(statearr_51906_51950[(2)] = null);

(statearr_51906_51950[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51878 === (19))){
var inst_51834 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_51877__$1 = state_51877;
if(cljs.core.truth_(inst_51834)){
var statearr_51907_51951 = state_51877__$1;
(statearr_51907_51951[(1)] = (22));

} else {
var statearr_51908_51952 = state_51877__$1;
(statearr_51908_51952[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51878 === (11))){
var inst_51805 = (state_51877[(2)]);
var state_51877__$1 = state_51877;
var statearr_51909_51953 = state_51877__$1;
(statearr_51909_51953[(2)] = inst_51805);

(statearr_51909_51953[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51878 === (9))){
var inst_51807 = figwheel.client.heads_up.clear.call(null);
var state_51877__$1 = state_51877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51877__$1,(12),inst_51807);
} else {
if((state_val_51878 === (5))){
var inst_51798 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_51877__$1 = state_51877;
var statearr_51910_51954 = state_51877__$1;
(statearr_51910_51954[(2)] = inst_51798);

(statearr_51910_51954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51878 === (14))){
var inst_51825 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_51877__$1 = state_51877;
if(cljs.core.truth_(inst_51825)){
var statearr_51911_51955 = state_51877__$1;
(statearr_51911_51955[(1)] = (18));

} else {
var statearr_51912_51956 = state_51877__$1;
(statearr_51912_51956[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51878 === (26))){
var inst_51849 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_51877__$1 = state_51877;
if(cljs.core.truth_(inst_51849)){
var statearr_51913_51957 = state_51877__$1;
(statearr_51913_51957[(1)] = (30));

} else {
var statearr_51914_51958 = state_51877__$1;
(statearr_51914_51958[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51878 === (16))){
var inst_51817 = (state_51877[(2)]);
var inst_51818 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51819 = figwheel.client.format_messages.call(null,inst_51818);
var inst_51820 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51821 = figwheel.client.heads_up.display_error.call(null,inst_51819,inst_51820);
var state_51877__$1 = (function (){var statearr_51915 = state_51877;
(statearr_51915[(9)] = inst_51817);

return statearr_51915;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51877__$1,(17),inst_51821);
} else {
if((state_val_51878 === (30))){
var inst_51851 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51852 = figwheel.client.heads_up.display_warning.call(null,inst_51851);
var state_51877__$1 = state_51877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51877__$1,(33),inst_51852);
} else {
if((state_val_51878 === (10))){
var inst_51811 = (state_51877[(2)]);
var state_51877__$1 = state_51877;
var statearr_51916_51959 = state_51877__$1;
(statearr_51916_51959[(2)] = inst_51811);

(statearr_51916_51959[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51878 === (18))){
var inst_51827 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51828 = figwheel.client.format_messages.call(null,inst_51827);
var inst_51829 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51830 = figwheel.client.heads_up.display_error.call(null,inst_51828,inst_51829);
var state_51877__$1 = state_51877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51877__$1,(21),inst_51830);
} else {
if((state_val_51878 === (37))){
var inst_51860 = (state_51877[(2)]);
var state_51877__$1 = state_51877;
var statearr_51917_51960 = state_51877__$1;
(statearr_51917_51960[(2)] = inst_51860);

(statearr_51917_51960[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51878 === (8))){
var inst_51803 = figwheel.client.heads_up.flash_loaded.call(null);
var state_51877__$1 = state_51877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51877__$1,(11),inst_51803);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__46399__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__46287__auto__,c__46399__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46288__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46288__auto____0 = (function (){
var statearr_51921 = [null,null,null,null,null,null,null,null,null,null];
(statearr_51921[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46288__auto__);

(statearr_51921[(1)] = (1));

return statearr_51921;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46288__auto____1 = (function (state_51877){
while(true){
var ret_value__46289__auto__ = (function (){try{while(true){
var result__46290__auto__ = switch__46287__auto__.call(null,state_51877);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46290__auto__;
}
break;
}
}catch (e51922){if((e51922 instanceof Object)){
var ex__46291__auto__ = e51922;
var statearr_51923_51961 = state_51877;
(statearr_51923_51961[(5)] = ex__46291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51877);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51922;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51962 = state_51877;
state_51877 = G__51962;
continue;
} else {
return ret_value__46289__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46288__auto__ = function(state_51877){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46288__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46288__auto____1.call(this,state_51877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46288__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46288__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46288__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46288__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46288__auto__;
})()
;})(switch__46287__auto__,c__46399__auto__,msg_hist,msg_names,msg))
})();
var state__46401__auto__ = (function (){var statearr_51924 = f__46400__auto__.call(null);
(statearr_51924[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46399__auto__);

return statearr_51924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46401__auto__);
});})(c__46399__auto__,msg_hist,msg_names,msg))
);

return c__46399__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__46399__auto___52025 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46399__auto___52025,ch){
return (function (){
var f__46400__auto__ = (function (){var switch__46287__auto__ = ((function (c__46399__auto___52025,ch){
return (function (state_52008){
var state_val_52009 = (state_52008[(1)]);
if((state_val_52009 === (1))){
var state_52008__$1 = state_52008;
var statearr_52010_52026 = state_52008__$1;
(statearr_52010_52026[(2)] = null);

(statearr_52010_52026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52009 === (2))){
var state_52008__$1 = state_52008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52008__$1,(4),ch);
} else {
if((state_val_52009 === (3))){
var inst_52006 = (state_52008[(2)]);
var state_52008__$1 = state_52008;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52008__$1,inst_52006);
} else {
if((state_val_52009 === (4))){
var inst_51996 = (state_52008[(7)]);
var inst_51996__$1 = (state_52008[(2)]);
var state_52008__$1 = (function (){var statearr_52011 = state_52008;
(statearr_52011[(7)] = inst_51996__$1);

return statearr_52011;
})();
if(cljs.core.truth_(inst_51996__$1)){
var statearr_52012_52027 = state_52008__$1;
(statearr_52012_52027[(1)] = (5));

} else {
var statearr_52013_52028 = state_52008__$1;
(statearr_52013_52028[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52009 === (5))){
var inst_51996 = (state_52008[(7)]);
var inst_51998 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_51996);
var state_52008__$1 = state_52008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52008__$1,(8),inst_51998);
} else {
if((state_val_52009 === (6))){
var state_52008__$1 = state_52008;
var statearr_52014_52029 = state_52008__$1;
(statearr_52014_52029[(2)] = null);

(statearr_52014_52029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52009 === (7))){
var inst_52004 = (state_52008[(2)]);
var state_52008__$1 = state_52008;
var statearr_52015_52030 = state_52008__$1;
(statearr_52015_52030[(2)] = inst_52004);

(statearr_52015_52030[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52009 === (8))){
var inst_52000 = (state_52008[(2)]);
var state_52008__$1 = (function (){var statearr_52016 = state_52008;
(statearr_52016[(8)] = inst_52000);

return statearr_52016;
})();
var statearr_52017_52031 = state_52008__$1;
(statearr_52017_52031[(2)] = null);

(statearr_52017_52031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__46399__auto___52025,ch))
;
return ((function (switch__46287__auto__,c__46399__auto___52025,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__46288__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__46288__auto____0 = (function (){
var statearr_52021 = [null,null,null,null,null,null,null,null,null];
(statearr_52021[(0)] = figwheel$client$heads_up_plugin_$_state_machine__46288__auto__);

(statearr_52021[(1)] = (1));

return statearr_52021;
});
var figwheel$client$heads_up_plugin_$_state_machine__46288__auto____1 = (function (state_52008){
while(true){
var ret_value__46289__auto__ = (function (){try{while(true){
var result__46290__auto__ = switch__46287__auto__.call(null,state_52008);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46290__auto__;
}
break;
}
}catch (e52022){if((e52022 instanceof Object)){
var ex__46291__auto__ = e52022;
var statearr_52023_52032 = state_52008;
(statearr_52023_52032[(5)] = ex__46291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52008);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52022;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52033 = state_52008;
state_52008 = G__52033;
continue;
} else {
return ret_value__46289__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__46288__auto__ = function(state_52008){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__46288__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__46288__auto____1.call(this,state_52008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__46288__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__46288__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__46288__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__46288__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__46288__auto__;
})()
;})(switch__46287__auto__,c__46399__auto___52025,ch))
})();
var state__46401__auto__ = (function (){var statearr_52024 = f__46400__auto__.call(null);
(statearr_52024[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46399__auto___52025);

return statearr_52024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46401__auto__);
});})(c__46399__auto___52025,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__46399__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46399__auto__){
return (function (){
var f__46400__auto__ = (function (){var switch__46287__auto__ = ((function (c__46399__auto__){
return (function (state_52054){
var state_val_52055 = (state_52054[(1)]);
if((state_val_52055 === (1))){
var inst_52049 = cljs.core.async.timeout.call(null,(3000));
var state_52054__$1 = state_52054;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52054__$1,(2),inst_52049);
} else {
if((state_val_52055 === (2))){
var inst_52051 = (state_52054[(2)]);
var inst_52052 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_52054__$1 = (function (){var statearr_52056 = state_52054;
(statearr_52056[(7)] = inst_52051);

return statearr_52056;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52054__$1,inst_52052);
} else {
return null;
}
}
});})(c__46399__auto__))
;
return ((function (switch__46287__auto__,c__46399__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__46288__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__46288__auto____0 = (function (){
var statearr_52060 = [null,null,null,null,null,null,null,null];
(statearr_52060[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__46288__auto__);

(statearr_52060[(1)] = (1));

return statearr_52060;
});
var figwheel$client$enforce_project_plugin_$_state_machine__46288__auto____1 = (function (state_52054){
while(true){
var ret_value__46289__auto__ = (function (){try{while(true){
var result__46290__auto__ = switch__46287__auto__.call(null,state_52054);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46290__auto__;
}
break;
}
}catch (e52061){if((e52061 instanceof Object)){
var ex__46291__auto__ = e52061;
var statearr_52062_52064 = state_52054;
(statearr_52062_52064[(5)] = ex__46291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52061;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52065 = state_52054;
state_52054 = G__52065;
continue;
} else {
return ret_value__46289__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__46288__auto__ = function(state_52054){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__46288__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__46288__auto____1.call(this,state_52054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__46288__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__46288__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__46288__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__46288__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__46288__auto__;
})()
;})(switch__46287__auto__,c__46399__auto__))
})();
var state__46401__auto__ = (function (){var statearr_52063 = f__46400__auto__.call(null);
(statearr_52063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46399__auto__);

return statearr_52063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46401__auto__);
});})(c__46399__auto__))
);

return c__46399__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__52066){
var map__52073 = p__52066;
var map__52073__$1 = ((((!((map__52073 == null)))?((((map__52073.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52073.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52073):map__52073);
var ed = map__52073__$1;
var formatted_exception = cljs.core.get.call(null,map__52073__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__52073__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__52073__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__52075_52079 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__52076_52080 = null;
var count__52077_52081 = (0);
var i__52078_52082 = (0);
while(true){
if((i__52078_52082 < count__52077_52081)){
var msg_52083 = cljs.core._nth.call(null,chunk__52076_52080,i__52078_52082);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_52083);

var G__52084 = seq__52075_52079;
var G__52085 = chunk__52076_52080;
var G__52086 = count__52077_52081;
var G__52087 = (i__52078_52082 + (1));
seq__52075_52079 = G__52084;
chunk__52076_52080 = G__52085;
count__52077_52081 = G__52086;
i__52078_52082 = G__52087;
continue;
} else {
var temp__4425__auto___52088 = cljs.core.seq.call(null,seq__52075_52079);
if(temp__4425__auto___52088){
var seq__52075_52089__$1 = temp__4425__auto___52088;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52075_52089__$1)){
var c__36641__auto___52090 = cljs.core.chunk_first.call(null,seq__52075_52089__$1);
var G__52091 = cljs.core.chunk_rest.call(null,seq__52075_52089__$1);
var G__52092 = c__36641__auto___52090;
var G__52093 = cljs.core.count.call(null,c__36641__auto___52090);
var G__52094 = (0);
seq__52075_52079 = G__52091;
chunk__52076_52080 = G__52092;
count__52077_52081 = G__52093;
i__52078_52082 = G__52094;
continue;
} else {
var msg_52095 = cljs.core.first.call(null,seq__52075_52089__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_52095);

var G__52096 = cljs.core.next.call(null,seq__52075_52089__$1);
var G__52097 = null;
var G__52098 = (0);
var G__52099 = (0);
seq__52075_52079 = G__52096;
chunk__52076_52080 = G__52097;
count__52077_52081 = G__52098;
i__52078_52082 = G__52099;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__52100){
var map__52103 = p__52100;
var map__52103__$1 = ((((!((map__52103 == null)))?((((map__52103.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52103.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52103):map__52103);
var w = map__52103__$1;
var message = cljs.core.get.call(null,map__52103__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__35826__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__35826__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__35826__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__52111 = cljs.core.seq.call(null,plugins);
var chunk__52112 = null;
var count__52113 = (0);
var i__52114 = (0);
while(true){
if((i__52114 < count__52113)){
var vec__52115 = cljs.core._nth.call(null,chunk__52112,i__52114);
var k = cljs.core.nth.call(null,vec__52115,(0),null);
var plugin = cljs.core.nth.call(null,vec__52115,(1),null);
if(cljs.core.truth_(plugin)){
var pl_52117 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__52111,chunk__52112,count__52113,i__52114,pl_52117,vec__52115,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_52117.call(null,msg_hist);
});})(seq__52111,chunk__52112,count__52113,i__52114,pl_52117,vec__52115,k,plugin))
);
} else {
}

var G__52118 = seq__52111;
var G__52119 = chunk__52112;
var G__52120 = count__52113;
var G__52121 = (i__52114 + (1));
seq__52111 = G__52118;
chunk__52112 = G__52119;
count__52113 = G__52120;
i__52114 = G__52121;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__52111);
if(temp__4425__auto__){
var seq__52111__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52111__$1)){
var c__36641__auto__ = cljs.core.chunk_first.call(null,seq__52111__$1);
var G__52122 = cljs.core.chunk_rest.call(null,seq__52111__$1);
var G__52123 = c__36641__auto__;
var G__52124 = cljs.core.count.call(null,c__36641__auto__);
var G__52125 = (0);
seq__52111 = G__52122;
chunk__52112 = G__52123;
count__52113 = G__52124;
i__52114 = G__52125;
continue;
} else {
var vec__52116 = cljs.core.first.call(null,seq__52111__$1);
var k = cljs.core.nth.call(null,vec__52116,(0),null);
var plugin = cljs.core.nth.call(null,vec__52116,(1),null);
if(cljs.core.truth_(plugin)){
var pl_52126 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__52111,chunk__52112,count__52113,i__52114,pl_52126,vec__52116,k,plugin,seq__52111__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_52126.call(null,msg_hist);
});})(seq__52111,chunk__52112,count__52113,i__52114,pl_52126,vec__52116,k,plugin,seq__52111__$1,temp__4425__auto__))
);
} else {
}

var G__52127 = cljs.core.next.call(null,seq__52111__$1);
var G__52128 = null;
var G__52129 = (0);
var G__52130 = (0);
seq__52111 = G__52127;
chunk__52112 = G__52128;
count__52113 = G__52129;
i__52114 = G__52130;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args52131 = [];
var len__36896__auto___52134 = arguments.length;
var i__36897__auto___52135 = (0);
while(true){
if((i__36897__auto___52135 < len__36896__auto___52134)){
args52131.push((arguments[i__36897__auto___52135]));

var G__52136 = (i__36897__auto___52135 + (1));
i__36897__auto___52135 = G__52136;
continue;
} else {
}
break;
}

var G__52133 = args52131.length;
switch (G__52133) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52131.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__36903__auto__ = [];
var len__36896__auto___52142 = arguments.length;
var i__36897__auto___52143 = (0);
while(true){
if((i__36897__auto___52143 < len__36896__auto___52142)){
args__36903__auto__.push((arguments[i__36897__auto___52143]));

var G__52144 = (i__36897__auto___52143 + (1));
i__36897__auto___52143 = G__52144;
continue;
} else {
}
break;
}

var argseq__36904__auto__ = ((((0) < args__36903__auto__.length))?(new cljs.core.IndexedSeq(args__36903__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__36904__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__52139){
var map__52140 = p__52139;
var map__52140__$1 = ((((!((map__52140 == null)))?((((map__52140.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52140.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52140):map__52140);
var opts = map__52140__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq52138){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52138));
});

//# sourceMappingURL=client.js.map