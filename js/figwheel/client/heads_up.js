// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__36903__auto__ = [];
var len__36896__auto___51186 = arguments.length;
var i__36897__auto___51187 = (0);
while(true){
if((i__36897__auto___51187 < len__36896__auto___51186)){
args__36903__auto__.push((arguments[i__36897__auto___51187]));

var G__51188 = (i__36897__auto___51187 + (1));
i__36897__auto___51187 = G__51188;
continue;
} else {
}
break;
}

var argseq__36904__auto__ = ((((2) < args__36903__auto__.length))?(new cljs.core.IndexedSeq(args__36903__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36904__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__51178_51189 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__51179_51190 = null;
var count__51180_51191 = (0);
var i__51181_51192 = (0);
while(true){
if((i__51181_51192 < count__51180_51191)){
var k_51193 = cljs.core._nth.call(null,chunk__51179_51190,i__51181_51192);
e.setAttribute(cljs.core.name.call(null,k_51193),cljs.core.get.call(null,attrs,k_51193));

var G__51194 = seq__51178_51189;
var G__51195 = chunk__51179_51190;
var G__51196 = count__51180_51191;
var G__51197 = (i__51181_51192 + (1));
seq__51178_51189 = G__51194;
chunk__51179_51190 = G__51195;
count__51180_51191 = G__51196;
i__51181_51192 = G__51197;
continue;
} else {
var temp__4425__auto___51198 = cljs.core.seq.call(null,seq__51178_51189);
if(temp__4425__auto___51198){
var seq__51178_51199__$1 = temp__4425__auto___51198;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51178_51199__$1)){
var c__36641__auto___51200 = cljs.core.chunk_first.call(null,seq__51178_51199__$1);
var G__51201 = cljs.core.chunk_rest.call(null,seq__51178_51199__$1);
var G__51202 = c__36641__auto___51200;
var G__51203 = cljs.core.count.call(null,c__36641__auto___51200);
var G__51204 = (0);
seq__51178_51189 = G__51201;
chunk__51179_51190 = G__51202;
count__51180_51191 = G__51203;
i__51181_51192 = G__51204;
continue;
} else {
var k_51205 = cljs.core.first.call(null,seq__51178_51199__$1);
e.setAttribute(cljs.core.name.call(null,k_51205),cljs.core.get.call(null,attrs,k_51205));

var G__51206 = cljs.core.next.call(null,seq__51178_51199__$1);
var G__51207 = null;
var G__51208 = (0);
var G__51209 = (0);
seq__51178_51189 = G__51206;
chunk__51179_51190 = G__51207;
count__51180_51191 = G__51208;
i__51181_51192 = G__51209;
continue;
}
} else {
}
}
break;
}

var seq__51182_51210 = cljs.core.seq.call(null,children);
var chunk__51183_51211 = null;
var count__51184_51212 = (0);
var i__51185_51213 = (0);
while(true){
if((i__51185_51213 < count__51184_51212)){
var ch_51214 = cljs.core._nth.call(null,chunk__51183_51211,i__51185_51213);
e.appendChild(ch_51214);

var G__51215 = seq__51182_51210;
var G__51216 = chunk__51183_51211;
var G__51217 = count__51184_51212;
var G__51218 = (i__51185_51213 + (1));
seq__51182_51210 = G__51215;
chunk__51183_51211 = G__51216;
count__51184_51212 = G__51217;
i__51185_51213 = G__51218;
continue;
} else {
var temp__4425__auto___51219 = cljs.core.seq.call(null,seq__51182_51210);
if(temp__4425__auto___51219){
var seq__51182_51220__$1 = temp__4425__auto___51219;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51182_51220__$1)){
var c__36641__auto___51221 = cljs.core.chunk_first.call(null,seq__51182_51220__$1);
var G__51222 = cljs.core.chunk_rest.call(null,seq__51182_51220__$1);
var G__51223 = c__36641__auto___51221;
var G__51224 = cljs.core.count.call(null,c__36641__auto___51221);
var G__51225 = (0);
seq__51182_51210 = G__51222;
chunk__51183_51211 = G__51223;
count__51184_51212 = G__51224;
i__51185_51213 = G__51225;
continue;
} else {
var ch_51226 = cljs.core.first.call(null,seq__51182_51220__$1);
e.appendChild(ch_51226);

var G__51227 = cljs.core.next.call(null,seq__51182_51220__$1);
var G__51228 = null;
var G__51229 = (0);
var G__51230 = (0);
seq__51182_51210 = G__51227;
chunk__51183_51211 = G__51228;
count__51184_51212 = G__51229;
i__51185_51213 = G__51230;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq51175){
var G__51176 = cljs.core.first.call(null,seq51175);
var seq51175__$1 = cljs.core.next.call(null,seq51175);
var G__51177 = cljs.core.first.call(null,seq51175__$1);
var seq51175__$2 = cljs.core.next.call(null,seq51175__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__51176,G__51177,seq51175__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__36751__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__36752__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__36753__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__36754__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__36755__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__36751__auto__,prefer_table__36752__auto__,method_cache__36753__auto__,cached_hierarchy__36754__auto__,hierarchy__36755__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__36751__auto__,prefer_table__36752__auto__,method_cache__36753__auto__,cached_hierarchy__36754__auto__,hierarchy__36755__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__36755__auto__,method_table__36751__auto__,prefer_table__36752__auto__,method_cache__36753__auto__,cached_hierarchy__36754__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_51231 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_51231.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_51231.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_51231.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_51231);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__51232,st_map){
var map__51237 = p__51232;
var map__51237__$1 = ((((!((map__51237 == null)))?((((map__51237.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51237.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51237):map__51237);
var container_el = cljs.core.get.call(null,map__51237__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__51237,map__51237__$1,container_el){
return (function (p__51239){
var vec__51240 = p__51239;
var k = cljs.core.nth.call(null,vec__51240,(0),null);
var v = cljs.core.nth.call(null,vec__51240,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__51237,map__51237__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__51241,dom_str){
var map__51244 = p__51241;
var map__51244__$1 = ((((!((map__51244 == null)))?((((map__51244.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51244.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51244):map__51244);
var c = map__51244__$1;
var content_area_el = cljs.core.get.call(null,map__51244__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__51246){
var map__51249 = p__51246;
var map__51249__$1 = ((((!((map__51249 == null)))?((((map__51249.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51249.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51249):map__51249);
var content_area_el = cljs.core.get.call(null,map__51249__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__46399__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46399__auto__){
return (function (){
var f__46400__auto__ = (function (){var switch__46287__auto__ = ((function (c__46399__auto__){
return (function (state_51292){
var state_val_51293 = (state_51292[(1)]);
if((state_val_51293 === (1))){
var inst_51277 = (state_51292[(7)]);
var inst_51277__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_51278 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_51279 = ["10px","10px","100%","68px","1.0"];
var inst_51280 = cljs.core.PersistentHashMap.fromArrays(inst_51278,inst_51279);
var inst_51281 = cljs.core.merge.call(null,inst_51280,style);
var inst_51282 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_51277__$1,inst_51281);
var inst_51283 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_51277__$1,msg);
var inst_51284 = cljs.core.async.timeout.call(null,(300));
var state_51292__$1 = (function (){var statearr_51294 = state_51292;
(statearr_51294[(8)] = inst_51283);

(statearr_51294[(9)] = inst_51282);

(statearr_51294[(7)] = inst_51277__$1);

return statearr_51294;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51292__$1,(2),inst_51284);
} else {
if((state_val_51293 === (2))){
var inst_51277 = (state_51292[(7)]);
var inst_51286 = (state_51292[(2)]);
var inst_51287 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_51288 = ["auto"];
var inst_51289 = cljs.core.PersistentHashMap.fromArrays(inst_51287,inst_51288);
var inst_51290 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_51277,inst_51289);
var state_51292__$1 = (function (){var statearr_51295 = state_51292;
(statearr_51295[(10)] = inst_51286);

return statearr_51295;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51292__$1,inst_51290);
} else {
return null;
}
}
});})(c__46399__auto__))
;
return ((function (switch__46287__auto__,c__46399__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__46288__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__46288__auto____0 = (function (){
var statearr_51299 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51299[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__46288__auto__);

(statearr_51299[(1)] = (1));

return statearr_51299;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__46288__auto____1 = (function (state_51292){
while(true){
var ret_value__46289__auto__ = (function (){try{while(true){
var result__46290__auto__ = switch__46287__auto__.call(null,state_51292);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46290__auto__;
}
break;
}
}catch (e51300){if((e51300 instanceof Object)){
var ex__46291__auto__ = e51300;
var statearr_51301_51303 = state_51292;
(statearr_51301_51303[(5)] = ex__46291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51292);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51300;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51304 = state_51292;
state_51292 = G__51304;
continue;
} else {
return ret_value__46289__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__46288__auto__ = function(state_51292){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__46288__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__46288__auto____1.call(this,state_51292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__46288__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__46288__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__46288__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__46288__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__46288__auto__;
})()
;})(switch__46287__auto__,c__46399__auto__))
})();
var state__46401__auto__ = (function (){var statearr_51302 = f__46400__auto__.call(null);
(statearr_51302[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46399__auto__);

return statearr_51302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46401__auto__);
});})(c__46399__auto__))
);

return c__46399__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__51306 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__51306,(0),null);
var ln = cljs.core.nth.call(null,vec__51306,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__51309 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__51309,(0),null);
var file_line = cljs.core.nth.call(null,vec__51309,(1),null);
var file_column = cljs.core.nth.call(null,vec__51309,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__51309,file_name,file_line,file_column){
return (function (p1__51307_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__51307_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__51309,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__35838__auto__ = file_line;
if(cljs.core.truth_(or__35838__auto__)){
return or__35838__auto__;
} else {
var and__35826__auto__ = cause;
if(cljs.core.truth_(and__35826__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__35826__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__51312 = figwheel.client.heads_up.ensure_container.call(null);
var map__51312__$1 = ((((!((map__51312 == null)))?((((map__51312.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51312.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51312):map__51312);
var content_area_el = cljs.core.get.call(null,map__51312__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__46399__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46399__auto__){
return (function (){
var f__46400__auto__ = (function (){var switch__46287__auto__ = ((function (c__46399__auto__){
return (function (state_51360){
var state_val_51361 = (state_51360[(1)]);
if((state_val_51361 === (1))){
var inst_51343 = (state_51360[(7)]);
var inst_51343__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_51344 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_51345 = ["0.0"];
var inst_51346 = cljs.core.PersistentHashMap.fromArrays(inst_51344,inst_51345);
var inst_51347 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_51343__$1,inst_51346);
var inst_51348 = cljs.core.async.timeout.call(null,(300));
var state_51360__$1 = (function (){var statearr_51362 = state_51360;
(statearr_51362[(8)] = inst_51347);

(statearr_51362[(7)] = inst_51343__$1);

return statearr_51362;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51360__$1,(2),inst_51348);
} else {
if((state_val_51361 === (2))){
var inst_51343 = (state_51360[(7)]);
var inst_51350 = (state_51360[(2)]);
var inst_51351 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_51352 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_51353 = cljs.core.PersistentHashMap.fromArrays(inst_51351,inst_51352);
var inst_51354 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_51343,inst_51353);
var inst_51355 = cljs.core.async.timeout.call(null,(200));
var state_51360__$1 = (function (){var statearr_51363 = state_51360;
(statearr_51363[(9)] = inst_51350);

(statearr_51363[(10)] = inst_51354);

return statearr_51363;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51360__$1,(3),inst_51355);
} else {
if((state_val_51361 === (3))){
var inst_51343 = (state_51360[(7)]);
var inst_51357 = (state_51360[(2)]);
var inst_51358 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_51343,"");
var state_51360__$1 = (function (){var statearr_51364 = state_51360;
(statearr_51364[(11)] = inst_51357);

return statearr_51364;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51360__$1,inst_51358);
} else {
return null;
}
}
}
});})(c__46399__auto__))
;
return ((function (switch__46287__auto__,c__46399__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__46288__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__46288__auto____0 = (function (){
var statearr_51368 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51368[(0)] = figwheel$client$heads_up$clear_$_state_machine__46288__auto__);

(statearr_51368[(1)] = (1));

return statearr_51368;
});
var figwheel$client$heads_up$clear_$_state_machine__46288__auto____1 = (function (state_51360){
while(true){
var ret_value__46289__auto__ = (function (){try{while(true){
var result__46290__auto__ = switch__46287__auto__.call(null,state_51360);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46290__auto__;
}
break;
}
}catch (e51369){if((e51369 instanceof Object)){
var ex__46291__auto__ = e51369;
var statearr_51370_51372 = state_51360;
(statearr_51370_51372[(5)] = ex__46291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51360);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51369;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51373 = state_51360;
state_51360 = G__51373;
continue;
} else {
return ret_value__46289__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__46288__auto__ = function(state_51360){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__46288__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__46288__auto____1.call(this,state_51360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__46288__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__46288__auto____0;
figwheel$client$heads_up$clear_$_state_machine__46288__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__46288__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__46288__auto__;
})()
;})(switch__46287__auto__,c__46399__auto__))
})();
var state__46401__auto__ = (function (){var statearr_51371 = f__46400__auto__.call(null);
(statearr_51371[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46399__auto__);

return statearr_51371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46401__auto__);
});})(c__46399__auto__))
);

return c__46399__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__46399__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46399__auto__){
return (function (){
var f__46400__auto__ = (function (){var switch__46287__auto__ = ((function (c__46399__auto__){
return (function (state_51405){
var state_val_51406 = (state_51405[(1)]);
if((state_val_51406 === (1))){
var inst_51395 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_51405__$1 = state_51405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51405__$1,(2),inst_51395);
} else {
if((state_val_51406 === (2))){
var inst_51397 = (state_51405[(2)]);
var inst_51398 = cljs.core.async.timeout.call(null,(400));
var state_51405__$1 = (function (){var statearr_51407 = state_51405;
(statearr_51407[(7)] = inst_51397);

return statearr_51407;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51405__$1,(3),inst_51398);
} else {
if((state_val_51406 === (3))){
var inst_51400 = (state_51405[(2)]);
var inst_51401 = figwheel.client.heads_up.clear.call(null);
var state_51405__$1 = (function (){var statearr_51408 = state_51405;
(statearr_51408[(8)] = inst_51400);

return statearr_51408;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51405__$1,(4),inst_51401);
} else {
if((state_val_51406 === (4))){
var inst_51403 = (state_51405[(2)]);
var state_51405__$1 = state_51405;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51405__$1,inst_51403);
} else {
return null;
}
}
}
}
});})(c__46399__auto__))
;
return ((function (switch__46287__auto__,c__46399__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__46288__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__46288__auto____0 = (function (){
var statearr_51412 = [null,null,null,null,null,null,null,null,null];
(statearr_51412[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__46288__auto__);

(statearr_51412[(1)] = (1));

return statearr_51412;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__46288__auto____1 = (function (state_51405){
while(true){
var ret_value__46289__auto__ = (function (){try{while(true){
var result__46290__auto__ = switch__46287__auto__.call(null,state_51405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46290__auto__;
}
break;
}
}catch (e51413){if((e51413 instanceof Object)){
var ex__46291__auto__ = e51413;
var statearr_51414_51416 = state_51405;
(statearr_51414_51416[(5)] = ex__46291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51413;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51417 = state_51405;
state_51405 = G__51417;
continue;
} else {
return ret_value__46289__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__46288__auto__ = function(state_51405){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__46288__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__46288__auto____1.call(this,state_51405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__46288__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__46288__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__46288__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__46288__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__46288__auto__;
})()
;})(switch__46287__auto__,c__46399__auto__))
})();
var state__46401__auto__ = (function (){var statearr_51415 = f__46400__auto__.call(null);
(statearr_51415[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46399__auto__);

return statearr_51415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46401__auto__);
});})(c__46399__auto__))
);

return c__46399__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map