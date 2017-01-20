// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args46444 = [];
var len__36896__auto___46450 = arguments.length;
var i__36897__auto___46451 = (0);
while(true){
if((i__36897__auto___46451 < len__36896__auto___46450)){
args46444.push((arguments[i__36897__auto___46451]));

var G__46452 = (i__36897__auto___46451 + (1));
i__36897__auto___46451 = G__46452;
continue;
} else {
}
break;
}

var G__46446 = args46444.length;
switch (G__46446) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46444.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async46447 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46447 = (function (f,blockable,meta46448){
this.f = f;
this.blockable = blockable;
this.meta46448 = meta46448;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46447.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46449,meta46448__$1){
var self__ = this;
var _46449__$1 = this;
return (new cljs.core.async.t_cljs$core$async46447(self__.f,self__.blockable,meta46448__$1));
});

cljs.core.async.t_cljs$core$async46447.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46449){
var self__ = this;
var _46449__$1 = this;
return self__.meta46448;
});

cljs.core.async.t_cljs$core$async46447.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async46447.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async46447.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async46447.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async46447.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta46448","meta46448",721918161,null)], null);
});

cljs.core.async.t_cljs$core$async46447.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46447.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46447";

cljs.core.async.t_cljs$core$async46447.cljs$lang$ctorPrWriter = (function (this__36436__auto__,writer__36437__auto__,opt__36438__auto__){
return cljs.core._write.call(null,writer__36437__auto__,"cljs.core.async/t_cljs$core$async46447");
});

cljs.core.async.__GT_t_cljs$core$async46447 = (function cljs$core$async$__GT_t_cljs$core$async46447(f__$1,blockable__$1,meta46448){
return (new cljs.core.async.t_cljs$core$async46447(f__$1,blockable__$1,meta46448));
});

}

return (new cljs.core.async.t_cljs$core$async46447(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args46456 = [];
var len__36896__auto___46459 = arguments.length;
var i__36897__auto___46460 = (0);
while(true){
if((i__36897__auto___46460 < len__36896__auto___46459)){
args46456.push((arguments[i__36897__auto___46460]));

var G__46461 = (i__36897__auto___46460 + (1));
i__36897__auto___46460 = G__46461;
continue;
} else {
}
break;
}

var G__46458 = args46456.length;
switch (G__46458) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46456.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args46463 = [];
var len__36896__auto___46466 = arguments.length;
var i__36897__auto___46467 = (0);
while(true){
if((i__36897__auto___46467 < len__36896__auto___46466)){
args46463.push((arguments[i__36897__auto___46467]));

var G__46468 = (i__36897__auto___46467 + (1));
i__36897__auto___46467 = G__46468;
continue;
} else {
}
break;
}

var G__46465 = args46463.length;
switch (G__46465) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46463.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args46470 = [];
var len__36896__auto___46473 = arguments.length;
var i__36897__auto___46474 = (0);
while(true){
if((i__36897__auto___46474 < len__36896__auto___46473)){
args46470.push((arguments[i__36897__auto___46474]));

var G__46475 = (i__36897__auto___46474 + (1));
i__36897__auto___46474 = G__46475;
continue;
} else {
}
break;
}

var G__46472 = args46470.length;
switch (G__46472) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46470.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_46477 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_46477);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_46477,ret){
return (function (){
return fn1.call(null,val_46477);
});})(val_46477,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args46478 = [];
var len__36896__auto___46481 = arguments.length;
var i__36897__auto___46482 = (0);
while(true){
if((i__36897__auto___46482 < len__36896__auto___46481)){
args46478.push((arguments[i__36897__auto___46482]));

var G__46483 = (i__36897__auto___46482 + (1));
i__36897__auto___46482 = G__46483;
continue;
} else {
}
break;
}

var G__46480 = args46478.length;
switch (G__46480) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46478.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__36741__auto___46485 = n;
var x_46486 = (0);
while(true){
if((x_46486 < n__36741__auto___46485)){
(a[x_46486] = (0));

var G__46487 = (x_46486 + (1));
x_46486 = G__46487;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__46488 = (i + (1));
i = G__46488;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async46492 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46492 = (function (alt_flag,flag,meta46493){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta46493 = meta46493;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46492.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_46494,meta46493__$1){
var self__ = this;
var _46494__$1 = this;
return (new cljs.core.async.t_cljs$core$async46492(self__.alt_flag,self__.flag,meta46493__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async46492.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_46494){
var self__ = this;
var _46494__$1 = this;
return self__.meta46493;
});})(flag))
;

cljs.core.async.t_cljs$core$async46492.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async46492.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async46492.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async46492.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async46492.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta46493","meta46493",1244328773,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async46492.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46492.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46492";

cljs.core.async.t_cljs$core$async46492.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__36436__auto__,writer__36437__auto__,opt__36438__auto__){
return cljs.core._write.call(null,writer__36437__auto__,"cljs.core.async/t_cljs$core$async46492");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async46492 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async46492(alt_flag__$1,flag__$1,meta46493){
return (new cljs.core.async.t_cljs$core$async46492(alt_flag__$1,flag__$1,meta46493));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async46492(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async46498 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46498 = (function (alt_handler,flag,cb,meta46499){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta46499 = meta46499;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46498.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46500,meta46499__$1){
var self__ = this;
var _46500__$1 = this;
return (new cljs.core.async.t_cljs$core$async46498(self__.alt_handler,self__.flag,self__.cb,meta46499__$1));
});

cljs.core.async.t_cljs$core$async46498.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46500){
var self__ = this;
var _46500__$1 = this;
return self__.meta46499;
});

cljs.core.async.t_cljs$core$async46498.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async46498.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async46498.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async46498.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async46498.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta46499","meta46499",1931458690,null)], null);
});

cljs.core.async.t_cljs$core$async46498.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46498.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46498";

cljs.core.async.t_cljs$core$async46498.cljs$lang$ctorPrWriter = (function (this__36436__auto__,writer__36437__auto__,opt__36438__auto__){
return cljs.core._write.call(null,writer__36437__auto__,"cljs.core.async/t_cljs$core$async46498");
});

cljs.core.async.__GT_t_cljs$core$async46498 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async46498(alt_handler__$1,flag__$1,cb__$1,meta46499){
return (new cljs.core.async.t_cljs$core$async46498(alt_handler__$1,flag__$1,cb__$1,meta46499));
});

}

return (new cljs.core.async.t_cljs$core$async46498(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__46501_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46501_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__46502_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46502_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__35838__auto__ = wport;
if(cljs.core.truth_(or__35838__auto__)){
return or__35838__auto__;
} else {
return port;
}
})()], null));
} else {
var G__46503 = (i + (1));
i = G__46503;
continue;
}
} else {
return null;
}
break;
}
})();
var or__35838__auto__ = ret;
if(cljs.core.truth_(or__35838__auto__)){
return or__35838__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__35826__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__35826__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__35826__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__36903__auto__ = [];
var len__36896__auto___46509 = arguments.length;
var i__36897__auto___46510 = (0);
while(true){
if((i__36897__auto___46510 < len__36896__auto___46509)){
args__36903__auto__.push((arguments[i__36897__auto___46510]));

var G__46511 = (i__36897__auto___46510 + (1));
i__36897__auto___46510 = G__46511;
continue;
} else {
}
break;
}

var argseq__36904__auto__ = ((((1) < args__36903__auto__.length))?(new cljs.core.IndexedSeq(args__36903__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36904__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__46506){
var map__46507 = p__46506;
var map__46507__$1 = ((((!((map__46507 == null)))?((((map__46507.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46507.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46507):map__46507);
var opts = map__46507__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq46504){
var G__46505 = cljs.core.first.call(null,seq46504);
var seq46504__$1 = cljs.core.next.call(null,seq46504);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46505,seq46504__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args46512 = [];
var len__36896__auto___46562 = arguments.length;
var i__36897__auto___46563 = (0);
while(true){
if((i__36897__auto___46563 < len__36896__auto___46562)){
args46512.push((arguments[i__36897__auto___46563]));

var G__46564 = (i__36897__auto___46563 + (1));
i__36897__auto___46563 = G__46564;
continue;
} else {
}
break;
}

var G__46514 = args46512.length;
switch (G__46514) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46512.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__46399__auto___46566 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46399__auto___46566){
return (function (){
var f__46400__auto__ = (function (){var switch__46287__auto__ = ((function (c__46399__auto___46566){
return (function (state_46538){
var state_val_46539 = (state_46538[(1)]);
if((state_val_46539 === (7))){
var inst_46534 = (state_46538[(2)]);
var state_46538__$1 = state_46538;
var statearr_46540_46567 = state_46538__$1;
(statearr_46540_46567[(2)] = inst_46534);

(statearr_46540_46567[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46539 === (1))){
var state_46538__$1 = state_46538;
var statearr_46541_46568 = state_46538__$1;
(statearr_46541_46568[(2)] = null);

(statearr_46541_46568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46539 === (4))){
var inst_46517 = (state_46538[(7)]);
var inst_46517__$1 = (state_46538[(2)]);
var inst_46518 = (inst_46517__$1 == null);
var state_46538__$1 = (function (){var statearr_46542 = state_46538;
(statearr_46542[(7)] = inst_46517__$1);

return statearr_46542;
})();
if(cljs.core.truth_(inst_46518)){
var statearr_46543_46569 = state_46538__$1;
(statearr_46543_46569[(1)] = (5));

} else {
var statearr_46544_46570 = state_46538__$1;
(statearr_46544_46570[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46539 === (13))){
var state_46538__$1 = state_46538;
var statearr_46545_46571 = state_46538__$1;
(statearr_46545_46571[(2)] = null);

(statearr_46545_46571[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46539 === (6))){
var inst_46517 = (state_46538[(7)]);
var state_46538__$1 = state_46538;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46538__$1,(11),to,inst_46517);
} else {
if((state_val_46539 === (3))){
var inst_46536 = (state_46538[(2)]);
var state_46538__$1 = state_46538;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46538__$1,inst_46536);
} else {
if((state_val_46539 === (12))){
var state_46538__$1 = state_46538;
var statearr_46546_46572 = state_46538__$1;
(statearr_46546_46572[(2)] = null);

(statearr_46546_46572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46539 === (2))){
var state_46538__$1 = state_46538;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46538__$1,(4),from);
} else {
if((state_val_46539 === (11))){
var inst_46527 = (state_46538[(2)]);
var state_46538__$1 = state_46538;
if(cljs.core.truth_(inst_46527)){
var statearr_46547_46573 = state_46538__$1;
(statearr_46547_46573[(1)] = (12));

} else {
var statearr_46548_46574 = state_46538__$1;
(statearr_46548_46574[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46539 === (9))){
var state_46538__$1 = state_46538;
var statearr_46549_46575 = state_46538__$1;
(statearr_46549_46575[(2)] = null);

(statearr_46549_46575[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46539 === (5))){
var state_46538__$1 = state_46538;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46550_46576 = state_46538__$1;
(statearr_46550_46576[(1)] = (8));

} else {
var statearr_46551_46577 = state_46538__$1;
(statearr_46551_46577[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46539 === (14))){
var inst_46532 = (state_46538[(2)]);
var state_46538__$1 = state_46538;
var statearr_46552_46578 = state_46538__$1;
(statearr_46552_46578[(2)] = inst_46532);

(statearr_46552_46578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46539 === (10))){
var inst_46524 = (state_46538[(2)]);
var state_46538__$1 = state_46538;
var statearr_46553_46579 = state_46538__$1;
(statearr_46553_46579[(2)] = inst_46524);

(statearr_46553_46579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46539 === (8))){
var inst_46521 = cljs.core.async.close_BANG_.call(null,to);
var state_46538__$1 = state_46538;
var statearr_46554_46580 = state_46538__$1;
(statearr_46554_46580[(2)] = inst_46521);

(statearr_46554_46580[(1)] = (10));


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
});})(c__46399__auto___46566))
;
return ((function (switch__46287__auto__,c__46399__auto___46566){
return (function() {
var cljs$core$async$state_machine__46288__auto__ = null;
var cljs$core$async$state_machine__46288__auto____0 = (function (){
var statearr_46558 = [null,null,null,null,null,null,null,null];
(statearr_46558[(0)] = cljs$core$async$state_machine__46288__auto__);

(statearr_46558[(1)] = (1));

return statearr_46558;
});
var cljs$core$async$state_machine__46288__auto____1 = (function (state_46538){
while(true){
var ret_value__46289__auto__ = (function (){try{while(true){
var result__46290__auto__ = switch__46287__auto__.call(null,state_46538);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46290__auto__;
}
break;
}
}catch (e46559){if((e46559 instanceof Object)){
var ex__46291__auto__ = e46559;
var statearr_46560_46581 = state_46538;
(statearr_46560_46581[(5)] = ex__46291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46538);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46559;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46582 = state_46538;
state_46538 = G__46582;
continue;
} else {
return ret_value__46289__auto__;
}
break;
}
});
cljs$core$async$state_machine__46288__auto__ = function(state_46538){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46288__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46288__auto____1.call(this,state_46538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46288__auto____0;
cljs$core$async$state_machine__46288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46288__auto____1;
return cljs$core$async$state_machine__46288__auto__;
})()
;})(switch__46287__auto__,c__46399__auto___46566))
})();
var state__46401__auto__ = (function (){var statearr_46561 = f__46400__auto__.call(null);
(statearr_46561[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46399__auto___46566);

return statearr_46561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46401__auto__);
});})(c__46399__auto___46566))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__46766){
var vec__46767 = p__46766;
var v = cljs.core.nth.call(null,vec__46767,(0),null);
var p = cljs.core.nth.call(null,vec__46767,(1),null);
var job = vec__46767;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__46399__auto___46949 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46399__auto___46949,res,vec__46767,v,p,job,jobs,results){
return (function (){
var f__46400__auto__ = (function (){var switch__46287__auto__ = ((function (c__46399__auto___46949,res,vec__46767,v,p,job,jobs,results){
return (function (state_46772){
var state_val_46773 = (state_46772[(1)]);
if((state_val_46773 === (1))){
var state_46772__$1 = state_46772;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46772__$1,(2),res,v);
} else {
if((state_val_46773 === (2))){
var inst_46769 = (state_46772[(2)]);
var inst_46770 = cljs.core.async.close_BANG_.call(null,res);
var state_46772__$1 = (function (){var statearr_46774 = state_46772;
(statearr_46774[(7)] = inst_46769);

return statearr_46774;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46772__$1,inst_46770);
} else {
return null;
}
}
});})(c__46399__auto___46949,res,vec__46767,v,p,job,jobs,results))
;
return ((function (switch__46287__auto__,c__46399__auto___46949,res,vec__46767,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46288__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46288__auto____0 = (function (){
var statearr_46778 = [null,null,null,null,null,null,null,null];
(statearr_46778[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46288__auto__);

(statearr_46778[(1)] = (1));

return statearr_46778;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46288__auto____1 = (function (state_46772){
while(true){
var ret_value__46289__auto__ = (function (){try{while(true){
var result__46290__auto__ = switch__46287__auto__.call(null,state_46772);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46290__auto__;
}
break;
}
}catch (e46779){if((e46779 instanceof Object)){
var ex__46291__auto__ = e46779;
var statearr_46780_46950 = state_46772;
(statearr_46780_46950[(5)] = ex__46291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46772);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46779;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46951 = state_46772;
state_46772 = G__46951;
continue;
} else {
return ret_value__46289__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46288__auto__ = function(state_46772){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46288__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46288__auto____1.call(this,state_46772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46288__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46288__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46288__auto__;
})()
;})(switch__46287__auto__,c__46399__auto___46949,res,vec__46767,v,p,job,jobs,results))
})();
var state__46401__auto__ = (function (){var statearr_46781 = f__46400__auto__.call(null);
(statearr_46781[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46399__auto___46949);

return statearr_46781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46401__auto__);
});})(c__46399__auto___46949,res,vec__46767,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__46782){
var vec__46783 = p__46782;
var v = cljs.core.nth.call(null,vec__46783,(0),null);
var p = cljs.core.nth.call(null,vec__46783,(1),null);
var job = vec__46783;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__36741__auto___46952 = n;
var __46953 = (0);
while(true){
if((__46953 < n__36741__auto___46952)){
var G__46784_46954 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__46784_46954) {
case "compute":
var c__46399__auto___46956 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__46953,c__46399__auto___46956,G__46784_46954,n__36741__auto___46952,jobs,results,process,async){
return (function (){
var f__46400__auto__ = (function (){var switch__46287__auto__ = ((function (__46953,c__46399__auto___46956,G__46784_46954,n__36741__auto___46952,jobs,results,process,async){
return (function (state_46797){
var state_val_46798 = (state_46797[(1)]);
if((state_val_46798 === (1))){
var state_46797__$1 = state_46797;
var statearr_46799_46957 = state_46797__$1;
(statearr_46799_46957[(2)] = null);

(statearr_46799_46957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46798 === (2))){
var state_46797__$1 = state_46797;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46797__$1,(4),jobs);
} else {
if((state_val_46798 === (3))){
var inst_46795 = (state_46797[(2)]);
var state_46797__$1 = state_46797;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46797__$1,inst_46795);
} else {
if((state_val_46798 === (4))){
var inst_46787 = (state_46797[(2)]);
var inst_46788 = process.call(null,inst_46787);
var state_46797__$1 = state_46797;
if(cljs.core.truth_(inst_46788)){
var statearr_46800_46958 = state_46797__$1;
(statearr_46800_46958[(1)] = (5));

} else {
var statearr_46801_46959 = state_46797__$1;
(statearr_46801_46959[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46798 === (5))){
var state_46797__$1 = state_46797;
var statearr_46802_46960 = state_46797__$1;
(statearr_46802_46960[(2)] = null);

(statearr_46802_46960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46798 === (6))){
var state_46797__$1 = state_46797;
var statearr_46803_46961 = state_46797__$1;
(statearr_46803_46961[(2)] = null);

(statearr_46803_46961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46798 === (7))){
var inst_46793 = (state_46797[(2)]);
var state_46797__$1 = state_46797;
var statearr_46804_46962 = state_46797__$1;
(statearr_46804_46962[(2)] = inst_46793);

(statearr_46804_46962[(1)] = (3));


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
});})(__46953,c__46399__auto___46956,G__46784_46954,n__36741__auto___46952,jobs,results,process,async))
;
return ((function (__46953,switch__46287__auto__,c__46399__auto___46956,G__46784_46954,n__36741__auto___46952,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46288__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46288__auto____0 = (function (){
var statearr_46808 = [null,null,null,null,null,null,null];
(statearr_46808[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46288__auto__);

(statearr_46808[(1)] = (1));

return statearr_46808;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46288__auto____1 = (function (state_46797){
while(true){
var ret_value__46289__auto__ = (function (){try{while(true){
var result__46290__auto__ = switch__46287__auto__.call(null,state_46797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46290__auto__;
}
break;
}
}catch (e46809){if((e46809 instanceof Object)){
var ex__46291__auto__ = e46809;
var statearr_46810_46963 = state_46797;
(statearr_46810_46963[(5)] = ex__46291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46809;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46964 = state_46797;
state_46797 = G__46964;
continue;
} else {
return ret_value__46289__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46288__auto__ = function(state_46797){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46288__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46288__auto____1.call(this,state_46797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46288__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46288__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46288__auto__;
})()
;})(__46953,switch__46287__auto__,c__46399__auto___46956,G__46784_46954,n__36741__auto___46952,jobs,results,process,async))
})();
var state__46401__auto__ = (function (){var statearr_46811 = f__46400__auto__.call(null);
(statearr_46811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46399__auto___46956);

return statearr_46811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46401__auto__);
});})(__46953,c__46399__auto___46956,G__46784_46954,n__36741__auto___46952,jobs,results,process,async))
);


break;
case "async":
var c__46399__auto___46965 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__46953,c__46399__auto___46965,G__46784_46954,n__36741__auto___46952,jobs,results,process,async){
return (function (){
var f__46400__auto__ = (function (){var switch__46287__auto__ = ((function (__46953,c__46399__auto___46965,G__46784_46954,n__36741__auto___46952,jobs,results,process,async){
return (function (state_46824){
var state_val_46825 = (state_46824[(1)]);
if((state_val_46825 === (1))){
var state_46824__$1 = state_46824;
var statearr_46826_46966 = state_46824__$1;
(statearr_46826_46966[(2)] = null);

(statearr_46826_46966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46825 === (2))){
var state_46824__$1 = state_46824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46824__$1,(4),jobs);
} else {
if((state_val_46825 === (3))){
var inst_46822 = (state_46824[(2)]);
var state_46824__$1 = state_46824;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46824__$1,inst_46822);
} else {
if((state_val_46825 === (4))){
var inst_46814 = (state_46824[(2)]);
var inst_46815 = async.call(null,inst_46814);
var state_46824__$1 = state_46824;
if(cljs.core.truth_(inst_46815)){
var statearr_46827_46967 = state_46824__$1;
(statearr_46827_46967[(1)] = (5));

} else {
var statearr_46828_46968 = state_46824__$1;
(statearr_46828_46968[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46825 === (5))){
var state_46824__$1 = state_46824;
var statearr_46829_46969 = state_46824__$1;
(statearr_46829_46969[(2)] = null);

(statearr_46829_46969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46825 === (6))){
var state_46824__$1 = state_46824;
var statearr_46830_46970 = state_46824__$1;
(statearr_46830_46970[(2)] = null);

(statearr_46830_46970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46825 === (7))){
var inst_46820 = (state_46824[(2)]);
var state_46824__$1 = state_46824;
var statearr_46831_46971 = state_46824__$1;
(statearr_46831_46971[(2)] = inst_46820);

(statearr_46831_46971[(1)] = (3));


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
});})(__46953,c__46399__auto___46965,G__46784_46954,n__36741__auto___46952,jobs,results,process,async))
;
return ((function (__46953,switch__46287__auto__,c__46399__auto___46965,G__46784_46954,n__36741__auto___46952,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46288__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46288__auto____0 = (function (){
var statearr_46835 = [null,null,null,null,null,null,null];
(statearr_46835[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46288__auto__);

(statearr_46835[(1)] = (1));

return statearr_46835;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46288__auto____1 = (function (state_46824){
while(true){
var ret_value__46289__auto__ = (function (){try{while(true){
var result__46290__auto__ = switch__46287__auto__.call(null,state_46824);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46290__auto__;
}
break;
}
}catch (e46836){if((e46836 instanceof Object)){
var ex__46291__auto__ = e46836;
var statearr_46837_46972 = state_46824;
(statearr_46837_46972[(5)] = ex__46291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46824);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46836;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46973 = state_46824;
state_46824 = G__46973;
continue;
} else {
return ret_value__46289__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46288__auto__ = function(state_46824){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46288__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46288__auto____1.call(this,state_46824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46288__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46288__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46288__auto__;
})()
;})(__46953,switch__46287__auto__,c__46399__auto___46965,G__46784_46954,n__36741__auto___46952,jobs,results,process,async))
})();
var state__46401__auto__ = (function (){var statearr_46838 = f__46400__auto__.call(null);
(statearr_46838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46399__auto___46965);

return statearr_46838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46401__auto__);
});})(__46953,c__46399__auto___46965,G__46784_46954,n__36741__auto___46952,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__46974 = (__46953 + (1));
__46953 = G__46974;
continue;
} else {
}
break;
}

var c__46399__auto___46975 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46399__auto___46975,jobs,results,process,async){
return (function (){
var f__46400__auto__ = (function (){var switch__46287__auto__ = ((function (c__46399__auto___46975,jobs,results,process,async){
return (function (state_46860){
var state_val_46861 = (state_46860[(1)]);
if((state_val_46861 === (1))){
var state_46860__$1 = state_46860;
var statearr_46862_46976 = state_46860__$1;
(statearr_46862_46976[(2)] = null);

(statearr_46862_46976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46861 === (2))){
var state_46860__$1 = state_46860;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46860__$1,(4),from);
} else {
if((state_val_46861 === (3))){
var inst_46858 = (state_46860[(2)]);
var state_46860__$1 = state_46860;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46860__$1,inst_46858);
} else {
if((state_val_46861 === (4))){
var inst_46841 = (state_46860[(7)]);
var inst_46841__$1 = (state_46860[(2)]);
var inst_46842 = (inst_46841__$1 == null);
var state_46860__$1 = (function (){var statearr_46863 = state_46860;
(statearr_46863[(7)] = inst_46841__$1);

return statearr_46863;
})();
if(cljs.core.truth_(inst_46842)){
var statearr_46864_46977 = state_46860__$1;
(statearr_46864_46977[(1)] = (5));

} else {
var statearr_46865_46978 = state_46860__$1;
(statearr_46865_46978[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46861 === (5))){
var inst_46844 = cljs.core.async.close_BANG_.call(null,jobs);
var state_46860__$1 = state_46860;
var statearr_46866_46979 = state_46860__$1;
(statearr_46866_46979[(2)] = inst_46844);

(statearr_46866_46979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46861 === (6))){
var inst_46841 = (state_46860[(7)]);
var inst_46846 = (state_46860[(8)]);
var inst_46846__$1 = cljs.core.async.chan.call(null,(1));
var inst_46847 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46848 = [inst_46841,inst_46846__$1];
var inst_46849 = (new cljs.core.PersistentVector(null,2,(5),inst_46847,inst_46848,null));
var state_46860__$1 = (function (){var statearr_46867 = state_46860;
(statearr_46867[(8)] = inst_46846__$1);

return statearr_46867;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46860__$1,(8),jobs,inst_46849);
} else {
if((state_val_46861 === (7))){
var inst_46856 = (state_46860[(2)]);
var state_46860__$1 = state_46860;
var statearr_46868_46980 = state_46860__$1;
(statearr_46868_46980[(2)] = inst_46856);

(statearr_46868_46980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46861 === (8))){
var inst_46846 = (state_46860[(8)]);
var inst_46851 = (state_46860[(2)]);
var state_46860__$1 = (function (){var statearr_46869 = state_46860;
(statearr_46869[(9)] = inst_46851);

return statearr_46869;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46860__$1,(9),results,inst_46846);
} else {
if((state_val_46861 === (9))){
var inst_46853 = (state_46860[(2)]);
var state_46860__$1 = (function (){var statearr_46870 = state_46860;
(statearr_46870[(10)] = inst_46853);

return statearr_46870;
})();
var statearr_46871_46981 = state_46860__$1;
(statearr_46871_46981[(2)] = null);

(statearr_46871_46981[(1)] = (2));


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
});})(c__46399__auto___46975,jobs,results,process,async))
;
return ((function (switch__46287__auto__,c__46399__auto___46975,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46288__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46288__auto____0 = (function (){
var statearr_46875 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46875[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46288__auto__);

(statearr_46875[(1)] = (1));

return statearr_46875;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46288__auto____1 = (function (state_46860){
while(true){
var ret_value__46289__auto__ = (function (){try{while(true){
var result__46290__auto__ = switch__46287__auto__.call(null,state_46860);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46290__auto__;
}
break;
}
}catch (e46876){if((e46876 instanceof Object)){
var ex__46291__auto__ = e46876;
var statearr_46877_46982 = state_46860;
(statearr_46877_46982[(5)] = ex__46291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46860);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46876;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46983 = state_46860;
state_46860 = G__46983;
continue;
} else {
return ret_value__46289__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46288__auto__ = function(state_46860){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46288__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46288__auto____1.call(this,state_46860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46288__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46288__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46288__auto__;
})()
;})(switch__46287__auto__,c__46399__auto___46975,jobs,results,process,async))
})();
var state__46401__auto__ = (function (){var statearr_46878 = f__46400__auto__.call(null);
(statearr_46878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46399__auto___46975);

return statearr_46878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46401__auto__);
});})(c__46399__auto___46975,jobs,results,process,async))
);


var c__46399__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46399__auto__,jobs,results,process,async){
return (function (){
var f__46400__auto__ = (function (){var switch__46287__auto__ = ((function (c__46399__auto__,jobs,results,process,async){
return (function (state_46916){
var state_val_46917 = (state_46916[(1)]);
if((state_val_46917 === (7))){
var inst_46912 = (state_46916[(2)]);
var state_46916__$1 = state_46916;
var statearr_46918_46984 = state_46916__$1;
(statearr_46918_46984[(2)] = inst_46912);

(statearr_46918_46984[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46917 === (20))){
var state_46916__$1 = state_46916;
var statearr_46919_46985 = state_46916__$1;
(statearr_46919_46985[(2)] = null);

(statearr_46919_46985[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46917 === (1))){
var state_46916__$1 = state_46916;
var statearr_46920_46986 = state_46916__$1;
(statearr_46920_46986[(2)] = null);

(statearr_46920_46986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46917 === (4))){
var inst_46881 = (state_46916[(7)]);
var inst_46881__$1 = (state_46916[(2)]);
var inst_46882 = (inst_46881__$1 == null);
var state_46916__$1 = (function (){var statearr_46921 = state_46916;
(statearr_46921[(7)] = inst_46881__$1);

return statearr_46921;
})();
if(cljs.core.truth_(inst_46882)){
var statearr_46922_46987 = state_46916__$1;
(statearr_46922_46987[(1)] = (5));

} else {
var statearr_46923_46988 = state_46916__$1;
(statearr_46923_46988[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46917 === (15))){
var inst_46894 = (state_46916[(8)]);
var state_46916__$1 = state_46916;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46916__$1,(18),to,inst_46894);
} else {
if((state_val_46917 === (21))){
var inst_46907 = (state_46916[(2)]);
var state_46916__$1 = state_46916;
var statearr_46924_46989 = state_46916__$1;
(statearr_46924_46989[(2)] = inst_46907);

(statearr_46924_46989[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46917 === (13))){
var inst_46909 = (state_46916[(2)]);
var state_46916__$1 = (function (){var statearr_46925 = state_46916;
(statearr_46925[(9)] = inst_46909);

return statearr_46925;
})();
var statearr_46926_46990 = state_46916__$1;
(statearr_46926_46990[(2)] = null);

(statearr_46926_46990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46917 === (6))){
var inst_46881 = (state_46916[(7)]);
var state_46916__$1 = state_46916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46916__$1,(11),inst_46881);
} else {
if((state_val_46917 === (17))){
var inst_46902 = (state_46916[(2)]);
var state_46916__$1 = state_46916;
if(cljs.core.truth_(inst_46902)){
var statearr_46927_46991 = state_46916__$1;
(statearr_46927_46991[(1)] = (19));

} else {
var statearr_46928_46992 = state_46916__$1;
(statearr_46928_46992[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46917 === (3))){
var inst_46914 = (state_46916[(2)]);
var state_46916__$1 = state_46916;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46916__$1,inst_46914);
} else {
if((state_val_46917 === (12))){
var inst_46891 = (state_46916[(10)]);
var state_46916__$1 = state_46916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46916__$1,(14),inst_46891);
} else {
if((state_val_46917 === (2))){
var state_46916__$1 = state_46916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46916__$1,(4),results);
} else {
if((state_val_46917 === (19))){
var state_46916__$1 = state_46916;
var statearr_46929_46993 = state_46916__$1;
(statearr_46929_46993[(2)] = null);

(statearr_46929_46993[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46917 === (11))){
var inst_46891 = (state_46916[(2)]);
var state_46916__$1 = (function (){var statearr_46930 = state_46916;
(statearr_46930[(10)] = inst_46891);

return statearr_46930;
})();
var statearr_46931_46994 = state_46916__$1;
(statearr_46931_46994[(2)] = null);

(statearr_46931_46994[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46917 === (9))){
var state_46916__$1 = state_46916;
var statearr_46932_46995 = state_46916__$1;
(statearr_46932_46995[(2)] = null);

(statearr_46932_46995[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46917 === (5))){
var state_46916__$1 = state_46916;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46933_46996 = state_46916__$1;
(statearr_46933_46996[(1)] = (8));

} else {
var statearr_46934_46997 = state_46916__$1;
(statearr_46934_46997[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46917 === (14))){
var inst_46896 = (state_46916[(11)]);
var inst_46894 = (state_46916[(8)]);
var inst_46894__$1 = (state_46916[(2)]);
var inst_46895 = (inst_46894__$1 == null);
var inst_46896__$1 = cljs.core.not.call(null,inst_46895);
var state_46916__$1 = (function (){var statearr_46935 = state_46916;
(statearr_46935[(11)] = inst_46896__$1);

(statearr_46935[(8)] = inst_46894__$1);

return statearr_46935;
})();
if(inst_46896__$1){
var statearr_46936_46998 = state_46916__$1;
(statearr_46936_46998[(1)] = (15));

} else {
var statearr_46937_46999 = state_46916__$1;
(statearr_46937_46999[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46917 === (16))){
var inst_46896 = (state_46916[(11)]);
var state_46916__$1 = state_46916;
var statearr_46938_47000 = state_46916__$1;
(statearr_46938_47000[(2)] = inst_46896);

(statearr_46938_47000[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46917 === (10))){
var inst_46888 = (state_46916[(2)]);
var state_46916__$1 = state_46916;
var statearr_46939_47001 = state_46916__$1;
(statearr_46939_47001[(2)] = inst_46888);

(statearr_46939_47001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46917 === (18))){
var inst_46899 = (state_46916[(2)]);
var state_46916__$1 = state_46916;
var statearr_46940_47002 = state_46916__$1;
(statearr_46940_47002[(2)] = inst_46899);

(statearr_46940_47002[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46917 === (8))){
var inst_46885 = cljs.core.async.close_BANG_.call(null,to);
var state_46916__$1 = state_46916;
var statearr_46941_47003 = state_46916__$1;
(statearr_46941_47003[(2)] = inst_46885);

(statearr_46941_47003[(1)] = (10));


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
}
}
}
}
});})(c__46399__auto__,jobs,results,process,async))
;
return ((function (switch__46287__auto__,c__46399__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46288__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46288__auto____0 = (function (){
var statearr_46945 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46945[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46288__auto__);

(statearr_46945[(1)] = (1));

return statearr_46945;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46288__auto____1 = (function (state_46916){
while(true){
var ret_value__46289__auto__ = (function (){try{while(true){
var result__46290__auto__ = switch__46287__auto__.call(null,state_46916);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46290__auto__;
}
break;
}
}catch (e46946){if((e46946 instanceof Object)){
var ex__46291__auto__ = e46946;
var statearr_46947_47004 = state_46916;
(statearr_46947_47004[(5)] = ex__46291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46946;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47005 = state_46916;
state_46916 = G__47005;
continue;
} else {
return ret_value__46289__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46288__auto__ = function(state_46916){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46288__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46288__auto____1.call(this,state_46916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46288__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46288__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46288__auto__;
})()
;})(switch__46287__auto__,c__46399__auto__,jobs,results,process,async))
})();
var state__46401__auto__ = (function (){var statearr_46948 = f__46400__auto__.call(null);
(statearr_46948[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46399__auto__);

return statearr_46948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46401__auto__);
});})(c__46399__auto__,jobs,results,process,async))
);

return c__46399__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args47006 = [];
var len__36896__auto___47009 = arguments.length;
var i__36897__auto___47010 = (0);
while(true){
if((i__36897__auto___47010 < len__36896__auto___47009)){
args47006.push((arguments[i__36897__auto___47010]));

var G__47011 = (i__36897__auto___47010 + (1));
i__36897__auto___47010 = G__47011;
continue;
} else {
}
break;
}

var G__47008 = args47006.length;
switch (G__47008) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47006.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args47013 = [];
var len__36896__auto___47016 = arguments.length;
var i__36897__auto___47017 = (0);
while(true){
if((i__36897__auto___47017 < len__36896__auto___47016)){
args47013.push((arguments[i__36897__auto___47017]));

var G__47018 = (i__36897__auto___47017 + (1));
i__36897__auto___47017 = G__47018;
continue;
} else {
}
break;
}

var G__47015 = args47013.length;
switch (G__47015) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47013.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args47020 = [];
var len__36896__auto___47073 = arguments.length;
var i__36897__auto___47074 = (0);
while(true){
if((i__36897__auto___47074 < len__36896__auto___47073)){
args47020.push((arguments[i__36897__auto___47074]));

var G__47075 = (i__36897__auto___47074 + (1));
i__36897__auto___47074 = G__47075;
continue;
} else {
}
break;
}

var G__47022 = args47020.length;
switch (G__47022) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47020.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__46399__auto___47077 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46399__auto___47077,tc,fc){
return (function (){
var f__46400__auto__ = (function (){var switch__46287__auto__ = ((function (c__46399__auto___47077,tc,fc){
return (function (state_47048){
var state_val_47049 = (state_47048[(1)]);
if((state_val_47049 === (7))){
var inst_47044 = (state_47048[(2)]);
var state_47048__$1 = state_47048;
var statearr_47050_47078 = state_47048__$1;
(statearr_47050_47078[(2)] = inst_47044);

(statearr_47050_47078[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47049 === (1))){
var state_47048__$1 = state_47048;
var statearr_47051_47079 = state_47048__$1;
(statearr_47051_47079[(2)] = null);

(statearr_47051_47079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47049 === (4))){
var inst_47025 = (state_47048[(7)]);
var inst_47025__$1 = (state_47048[(2)]);
var inst_47026 = (inst_47025__$1 == null);
var state_47048__$1 = (function (){var statearr_47052 = state_47048;
(statearr_47052[(7)] = inst_47025__$1);

return statearr_47052;
})();
if(cljs.core.truth_(inst_47026)){
var statearr_47053_47080 = state_47048__$1;
(statearr_47053_47080[(1)] = (5));

} else {
var statearr_47054_47081 = state_47048__$1;
(statearr_47054_47081[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47049 === (13))){
var state_47048__$1 = state_47048;
var statearr_47055_47082 = state_47048__$1;
(statearr_47055_47082[(2)] = null);

(statearr_47055_47082[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47049 === (6))){
var inst_47025 = (state_47048[(7)]);
var inst_47031 = p.call(null,inst_47025);
var state_47048__$1 = state_47048;
if(cljs.core.truth_(inst_47031)){
var statearr_47056_47083 = state_47048__$1;
(statearr_47056_47083[(1)] = (9));

} else {
var statearr_47057_47084 = state_47048__$1;
(statearr_47057_47084[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47049 === (3))){
var inst_47046 = (state_47048[(2)]);
var state_47048__$1 = state_47048;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47048__$1,inst_47046);
} else {
if((state_val_47049 === (12))){
var state_47048__$1 = state_47048;
var statearr_47058_47085 = state_47048__$1;
(statearr_47058_47085[(2)] = null);

(statearr_47058_47085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47049 === (2))){
var state_47048__$1 = state_47048;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47048__$1,(4),ch);
} else {
if((state_val_47049 === (11))){
var inst_47025 = (state_47048[(7)]);
var inst_47035 = (state_47048[(2)]);
var state_47048__$1 = state_47048;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47048__$1,(8),inst_47035,inst_47025);
} else {
if((state_val_47049 === (9))){
var state_47048__$1 = state_47048;
var statearr_47059_47086 = state_47048__$1;
(statearr_47059_47086[(2)] = tc);

(statearr_47059_47086[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47049 === (5))){
var inst_47028 = cljs.core.async.close_BANG_.call(null,tc);
var inst_47029 = cljs.core.async.close_BANG_.call(null,fc);
var state_47048__$1 = (function (){var statearr_47060 = state_47048;
(statearr_47060[(8)] = inst_47028);

return statearr_47060;
})();
var statearr_47061_47087 = state_47048__$1;
(statearr_47061_47087[(2)] = inst_47029);

(statearr_47061_47087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47049 === (14))){
var inst_47042 = (state_47048[(2)]);
var state_47048__$1 = state_47048;
var statearr_47062_47088 = state_47048__$1;
(statearr_47062_47088[(2)] = inst_47042);

(statearr_47062_47088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47049 === (10))){
var state_47048__$1 = state_47048;
var statearr_47063_47089 = state_47048__$1;
(statearr_47063_47089[(2)] = fc);

(statearr_47063_47089[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47049 === (8))){
var inst_47037 = (state_47048[(2)]);
var state_47048__$1 = state_47048;
if(cljs.core.truth_(inst_47037)){
var statearr_47064_47090 = state_47048__$1;
(statearr_47064_47090[(1)] = (12));

} else {
var statearr_47065_47091 = state_47048__$1;
(statearr_47065_47091[(1)] = (13));

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
});})(c__46399__auto___47077,tc,fc))
;
return ((function (switch__46287__auto__,c__46399__auto___47077,tc,fc){
return (function() {
var cljs$core$async$state_machine__46288__auto__ = null;
var cljs$core$async$state_machine__46288__auto____0 = (function (){
var statearr_47069 = [null,null,null,null,null,null,null,null,null];
(statearr_47069[(0)] = cljs$core$async$state_machine__46288__auto__);

(statearr_47069[(1)] = (1));

return statearr_47069;
});
var cljs$core$async$state_machine__46288__auto____1 = (function (state_47048){
while(true){
var ret_value__46289__auto__ = (function (){try{while(true){
var result__46290__auto__ = switch__46287__auto__.call(null,state_47048);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46290__auto__;
}
break;
}
}catch (e47070){if((e47070 instanceof Object)){
var ex__46291__auto__ = e47070;
var statearr_47071_47092 = state_47048;
(statearr_47071_47092[(5)] = ex__46291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47048);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47070;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47093 = state_47048;
state_47048 = G__47093;
continue;
} else {
return ret_value__46289__auto__;
}
break;
}
});
cljs$core$async$state_machine__46288__auto__ = function(state_47048){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46288__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46288__auto____1.call(this,state_47048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46288__auto____0;
cljs$core$async$state_machine__46288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46288__auto____1;
return cljs$core$async$state_machine__46288__auto__;
})()
;})(switch__46287__auto__,c__46399__auto___47077,tc,fc))
})();
var state__46401__auto__ = (function (){var statearr_47072 = f__46400__auto__.call(null);
(statearr_47072[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46399__auto___47077);

return statearr_47072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46401__auto__);
});})(c__46399__auto___47077,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__46399__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46399__auto__){
return (function (){
var f__46400__auto__ = (function (){var switch__46287__auto__ = ((function (c__46399__auto__){
return (function (state_47157){
var state_val_47158 = (state_47157[(1)]);
if((state_val_47158 === (7))){
var inst_47153 = (state_47157[(2)]);
var state_47157__$1 = state_47157;
var statearr_47159_47180 = state_47157__$1;
(statearr_47159_47180[(2)] = inst_47153);

(statearr_47159_47180[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47158 === (1))){
var inst_47137 = init;
var state_47157__$1 = (function (){var statearr_47160 = state_47157;
(statearr_47160[(7)] = inst_47137);

return statearr_47160;
})();
var statearr_47161_47181 = state_47157__$1;
(statearr_47161_47181[(2)] = null);

(statearr_47161_47181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47158 === (4))){
var inst_47140 = (state_47157[(8)]);
var inst_47140__$1 = (state_47157[(2)]);
var inst_47141 = (inst_47140__$1 == null);
var state_47157__$1 = (function (){var statearr_47162 = state_47157;
(statearr_47162[(8)] = inst_47140__$1);

return statearr_47162;
})();
if(cljs.core.truth_(inst_47141)){
var statearr_47163_47182 = state_47157__$1;
(statearr_47163_47182[(1)] = (5));

} else {
var statearr_47164_47183 = state_47157__$1;
(statearr_47164_47183[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47158 === (6))){
var inst_47140 = (state_47157[(8)]);
var inst_47137 = (state_47157[(7)]);
var inst_47144 = (state_47157[(9)]);
var inst_47144__$1 = f.call(null,inst_47137,inst_47140);
var inst_47145 = cljs.core.reduced_QMARK_.call(null,inst_47144__$1);
var state_47157__$1 = (function (){var statearr_47165 = state_47157;
(statearr_47165[(9)] = inst_47144__$1);

return statearr_47165;
})();
if(inst_47145){
var statearr_47166_47184 = state_47157__$1;
(statearr_47166_47184[(1)] = (8));

} else {
var statearr_47167_47185 = state_47157__$1;
(statearr_47167_47185[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47158 === (3))){
var inst_47155 = (state_47157[(2)]);
var state_47157__$1 = state_47157;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47157__$1,inst_47155);
} else {
if((state_val_47158 === (2))){
var state_47157__$1 = state_47157;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47157__$1,(4),ch);
} else {
if((state_val_47158 === (9))){
var inst_47144 = (state_47157[(9)]);
var inst_47137 = inst_47144;
var state_47157__$1 = (function (){var statearr_47168 = state_47157;
(statearr_47168[(7)] = inst_47137);

return statearr_47168;
})();
var statearr_47169_47186 = state_47157__$1;
(statearr_47169_47186[(2)] = null);

(statearr_47169_47186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47158 === (5))){
var inst_47137 = (state_47157[(7)]);
var state_47157__$1 = state_47157;
var statearr_47170_47187 = state_47157__$1;
(statearr_47170_47187[(2)] = inst_47137);

(statearr_47170_47187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47158 === (10))){
var inst_47151 = (state_47157[(2)]);
var state_47157__$1 = state_47157;
var statearr_47171_47188 = state_47157__$1;
(statearr_47171_47188[(2)] = inst_47151);

(statearr_47171_47188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47158 === (8))){
var inst_47144 = (state_47157[(9)]);
var inst_47147 = cljs.core.deref.call(null,inst_47144);
var state_47157__$1 = state_47157;
var statearr_47172_47189 = state_47157__$1;
(statearr_47172_47189[(2)] = inst_47147);

(statearr_47172_47189[(1)] = (10));


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
});})(c__46399__auto__))
;
return ((function (switch__46287__auto__,c__46399__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__46288__auto__ = null;
var cljs$core$async$reduce_$_state_machine__46288__auto____0 = (function (){
var statearr_47176 = [null,null,null,null,null,null,null,null,null,null];
(statearr_47176[(0)] = cljs$core$async$reduce_$_state_machine__46288__auto__);

(statearr_47176[(1)] = (1));

return statearr_47176;
});
var cljs$core$async$reduce_$_state_machine__46288__auto____1 = (function (state_47157){
while(true){
var ret_value__46289__auto__ = (function (){try{while(true){
var result__46290__auto__ = switch__46287__auto__.call(null,state_47157);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46290__auto__;
}
break;
}
}catch (e47177){if((e47177 instanceof Object)){
var ex__46291__auto__ = e47177;
var statearr_47178_47190 = state_47157;
(statearr_47178_47190[(5)] = ex__46291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47157);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47177;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47191 = state_47157;
state_47157 = G__47191;
continue;
} else {
return ret_value__46289__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__46288__auto__ = function(state_47157){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__46288__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__46288__auto____1.call(this,state_47157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__46288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__46288__auto____0;
cljs$core$async$reduce_$_state_machine__46288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__46288__auto____1;
return cljs$core$async$reduce_$_state_machine__46288__auto__;
})()
;})(switch__46287__auto__,c__46399__auto__))
})();
var state__46401__auto__ = (function (){var statearr_47179 = f__46400__auto__.call(null);
(statearr_47179[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46399__auto__);

return statearr_47179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46401__auto__);
});})(c__46399__auto__))
);

return c__46399__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args47192 = [];
var len__36896__auto___47244 = arguments.length;
var i__36897__auto___47245 = (0);
while(true){
if((i__36897__auto___47245 < len__36896__auto___47244)){
args47192.push((arguments[i__36897__auto___47245]));

var G__47246 = (i__36897__auto___47245 + (1));
i__36897__auto___47245 = G__47246;
continue;
} else {
}
break;
}

var G__47194 = args47192.length;
switch (G__47194) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47192.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__46399__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46399__auto__){
return (function (){
var f__46400__auto__ = (function (){var switch__46287__auto__ = ((function (c__46399__auto__){
return (function (state_47219){
var state_val_47220 = (state_47219[(1)]);
if((state_val_47220 === (7))){
var inst_47201 = (state_47219[(2)]);
var state_47219__$1 = state_47219;
var statearr_47221_47248 = state_47219__$1;
(statearr_47221_47248[(2)] = inst_47201);

(statearr_47221_47248[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47220 === (1))){
var inst_47195 = cljs.core.seq.call(null,coll);
var inst_47196 = inst_47195;
var state_47219__$1 = (function (){var statearr_47222 = state_47219;
(statearr_47222[(7)] = inst_47196);

return statearr_47222;
})();
var statearr_47223_47249 = state_47219__$1;
(statearr_47223_47249[(2)] = null);

(statearr_47223_47249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47220 === (4))){
var inst_47196 = (state_47219[(7)]);
var inst_47199 = cljs.core.first.call(null,inst_47196);
var state_47219__$1 = state_47219;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47219__$1,(7),ch,inst_47199);
} else {
if((state_val_47220 === (13))){
var inst_47213 = (state_47219[(2)]);
var state_47219__$1 = state_47219;
var statearr_47224_47250 = state_47219__$1;
(statearr_47224_47250[(2)] = inst_47213);

(statearr_47224_47250[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47220 === (6))){
var inst_47204 = (state_47219[(2)]);
var state_47219__$1 = state_47219;
if(cljs.core.truth_(inst_47204)){
var statearr_47225_47251 = state_47219__$1;
(statearr_47225_47251[(1)] = (8));

} else {
var statearr_47226_47252 = state_47219__$1;
(statearr_47226_47252[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47220 === (3))){
var inst_47217 = (state_47219[(2)]);
var state_47219__$1 = state_47219;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47219__$1,inst_47217);
} else {
if((state_val_47220 === (12))){
var state_47219__$1 = state_47219;
var statearr_47227_47253 = state_47219__$1;
(statearr_47227_47253[(2)] = null);

(statearr_47227_47253[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47220 === (2))){
var inst_47196 = (state_47219[(7)]);
var state_47219__$1 = state_47219;
if(cljs.core.truth_(inst_47196)){
var statearr_47228_47254 = state_47219__$1;
(statearr_47228_47254[(1)] = (4));

} else {
var statearr_47229_47255 = state_47219__$1;
(statearr_47229_47255[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47220 === (11))){
var inst_47210 = cljs.core.async.close_BANG_.call(null,ch);
var state_47219__$1 = state_47219;
var statearr_47230_47256 = state_47219__$1;
(statearr_47230_47256[(2)] = inst_47210);

(statearr_47230_47256[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47220 === (9))){
var state_47219__$1 = state_47219;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47231_47257 = state_47219__$1;
(statearr_47231_47257[(1)] = (11));

} else {
var statearr_47232_47258 = state_47219__$1;
(statearr_47232_47258[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47220 === (5))){
var inst_47196 = (state_47219[(7)]);
var state_47219__$1 = state_47219;
var statearr_47233_47259 = state_47219__$1;
(statearr_47233_47259[(2)] = inst_47196);

(statearr_47233_47259[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47220 === (10))){
var inst_47215 = (state_47219[(2)]);
var state_47219__$1 = state_47219;
var statearr_47234_47260 = state_47219__$1;
(statearr_47234_47260[(2)] = inst_47215);

(statearr_47234_47260[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47220 === (8))){
var inst_47196 = (state_47219[(7)]);
var inst_47206 = cljs.core.next.call(null,inst_47196);
var inst_47196__$1 = inst_47206;
var state_47219__$1 = (function (){var statearr_47235 = state_47219;
(statearr_47235[(7)] = inst_47196__$1);

return statearr_47235;
})();
var statearr_47236_47261 = state_47219__$1;
(statearr_47236_47261[(2)] = null);

(statearr_47236_47261[(1)] = (2));


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
});})(c__46399__auto__))
;
return ((function (switch__46287__auto__,c__46399__auto__){
return (function() {
var cljs$core$async$state_machine__46288__auto__ = null;
var cljs$core$async$state_machine__46288__auto____0 = (function (){
var statearr_47240 = [null,null,null,null,null,null,null,null];
(statearr_47240[(0)] = cljs$core$async$state_machine__46288__auto__);

(statearr_47240[(1)] = (1));

return statearr_47240;
});
var cljs$core$async$state_machine__46288__auto____1 = (function (state_47219){
while(true){
var ret_value__46289__auto__ = (function (){try{while(true){
var result__46290__auto__ = switch__46287__auto__.call(null,state_47219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46290__auto__;
}
break;
}
}catch (e47241){if((e47241 instanceof Object)){
var ex__46291__auto__ = e47241;
var statearr_47242_47262 = state_47219;
(statearr_47242_47262[(5)] = ex__46291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47241;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47263 = state_47219;
state_47219 = G__47263;
continue;
} else {
return ret_value__46289__auto__;
}
break;
}
});
cljs$core$async$state_machine__46288__auto__ = function(state_47219){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46288__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46288__auto____1.call(this,state_47219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46288__auto____0;
cljs$core$async$state_machine__46288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46288__auto____1;
return cljs$core$async$state_machine__46288__auto__;
})()
;})(switch__46287__auto__,c__46399__auto__))
})();
var state__46401__auto__ = (function (){var statearr_47243 = f__46400__auto__.call(null);
(statearr_47243[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46399__auto__);

return statearr_47243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46401__auto__);
});})(c__46399__auto__))
);

return c__46399__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__36493__auto__ = (((_ == null))?null:_);
var m__36494__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__36493__auto__)]);
if(!((m__36494__auto__ == null))){
return m__36494__auto__.call(null,_);
} else {
var m__36494__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__36494__auto____$1 == null))){
return m__36494__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__36493__auto__ = (((m == null))?null:m);
var m__36494__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__36493__auto__)]);
if(!((m__36494__auto__ == null))){
return m__36494__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__36494__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__36494__auto____$1 == null))){
return m__36494__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__36493__auto__ = (((m == null))?null:m);
var m__36494__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__36493__auto__)]);
if(!((m__36494__auto__ == null))){
return m__36494__auto__.call(null,m,ch);
} else {
var m__36494__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__36494__auto____$1 == null))){
return m__36494__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__36493__auto__ = (((m == null))?null:m);
var m__36494__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__36493__auto__)]);
if(!((m__36494__auto__ == null))){
return m__36494__auto__.call(null,m);
} else {
var m__36494__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__36494__auto____$1 == null))){
return m__36494__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async47485 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47485 = (function (mult,ch,cs,meta47486){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta47486 = meta47486;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async47485.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_47487,meta47486__$1){
var self__ = this;
var _47487__$1 = this;
return (new cljs.core.async.t_cljs$core$async47485(self__.mult,self__.ch,self__.cs,meta47486__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async47485.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_47487){
var self__ = this;
var _47487__$1 = this;
return self__.meta47486;
});})(cs))
;

cljs.core.async.t_cljs$core$async47485.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async47485.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async47485.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async47485.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async47485.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async47485.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async47485.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta47486","meta47486",-862627367,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async47485.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47485.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47485";

cljs.core.async.t_cljs$core$async47485.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__36436__auto__,writer__36437__auto__,opt__36438__auto__){
return cljs.core._write.call(null,writer__36437__auto__,"cljs.core.async/t_cljs$core$async47485");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async47485 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async47485(mult__$1,ch__$1,cs__$1,meta47486){
return (new cljs.core.async.t_cljs$core$async47485(mult__$1,ch__$1,cs__$1,meta47486));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async47485(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__46399__auto___47706 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46399__auto___47706,cs,m,dchan,dctr,done){
return (function (){
var f__46400__auto__ = (function (){var switch__46287__auto__ = ((function (c__46399__auto___47706,cs,m,dchan,dctr,done){
return (function (state_47618){
var state_val_47619 = (state_47618[(1)]);
if((state_val_47619 === (7))){
var inst_47614 = (state_47618[(2)]);
var state_47618__$1 = state_47618;
var statearr_47620_47707 = state_47618__$1;
(statearr_47620_47707[(2)] = inst_47614);

(statearr_47620_47707[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47619 === (20))){
var inst_47519 = (state_47618[(7)]);
var inst_47529 = cljs.core.first.call(null,inst_47519);
var inst_47530 = cljs.core.nth.call(null,inst_47529,(0),null);
var inst_47531 = cljs.core.nth.call(null,inst_47529,(1),null);
var state_47618__$1 = (function (){var statearr_47621 = state_47618;
(statearr_47621[(8)] = inst_47530);

return statearr_47621;
})();
if(cljs.core.truth_(inst_47531)){
var statearr_47622_47708 = state_47618__$1;
(statearr_47622_47708[(1)] = (22));

} else {
var statearr_47623_47709 = state_47618__$1;
(statearr_47623_47709[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47619 === (27))){
var inst_47490 = (state_47618[(9)]);
var inst_47559 = (state_47618[(10)]);
var inst_47561 = (state_47618[(11)]);
var inst_47566 = (state_47618[(12)]);
var inst_47566__$1 = cljs.core._nth.call(null,inst_47559,inst_47561);
var inst_47567 = cljs.core.async.put_BANG_.call(null,inst_47566__$1,inst_47490,done);
var state_47618__$1 = (function (){var statearr_47624 = state_47618;
(statearr_47624[(12)] = inst_47566__$1);

return statearr_47624;
})();
if(cljs.core.truth_(inst_47567)){
var statearr_47625_47710 = state_47618__$1;
(statearr_47625_47710[(1)] = (30));

} else {
var statearr_47626_47711 = state_47618__$1;
(statearr_47626_47711[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47619 === (1))){
var state_47618__$1 = state_47618;
var statearr_47627_47712 = state_47618__$1;
(statearr_47627_47712[(2)] = null);

(statearr_47627_47712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47619 === (24))){
var inst_47519 = (state_47618[(7)]);
var inst_47536 = (state_47618[(2)]);
var inst_47537 = cljs.core.next.call(null,inst_47519);
var inst_47499 = inst_47537;
var inst_47500 = null;
var inst_47501 = (0);
var inst_47502 = (0);
var state_47618__$1 = (function (){var statearr_47628 = state_47618;
(statearr_47628[(13)] = inst_47500);

(statearr_47628[(14)] = inst_47536);

(statearr_47628[(15)] = inst_47502);

(statearr_47628[(16)] = inst_47499);

(statearr_47628[(17)] = inst_47501);

return statearr_47628;
})();
var statearr_47629_47713 = state_47618__$1;
(statearr_47629_47713[(2)] = null);

(statearr_47629_47713[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47619 === (39))){
var state_47618__$1 = state_47618;
var statearr_47633_47714 = state_47618__$1;
(statearr_47633_47714[(2)] = null);

(statearr_47633_47714[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47619 === (4))){
var inst_47490 = (state_47618[(9)]);
var inst_47490__$1 = (state_47618[(2)]);
var inst_47491 = (inst_47490__$1 == null);
var state_47618__$1 = (function (){var statearr_47634 = state_47618;
(statearr_47634[(9)] = inst_47490__$1);

return statearr_47634;
})();
if(cljs.core.truth_(inst_47491)){
var statearr_47635_47715 = state_47618__$1;
(statearr_47635_47715[(1)] = (5));

} else {
var statearr_47636_47716 = state_47618__$1;
(statearr_47636_47716[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47619 === (15))){
var inst_47500 = (state_47618[(13)]);
var inst_47502 = (state_47618[(15)]);
var inst_47499 = (state_47618[(16)]);
var inst_47501 = (state_47618[(17)]);
var inst_47515 = (state_47618[(2)]);
var inst_47516 = (inst_47502 + (1));
var tmp47630 = inst_47500;
var tmp47631 = inst_47499;
var tmp47632 = inst_47501;
var inst_47499__$1 = tmp47631;
var inst_47500__$1 = tmp47630;
var inst_47501__$1 = tmp47632;
var inst_47502__$1 = inst_47516;
var state_47618__$1 = (function (){var statearr_47637 = state_47618;
(statearr_47637[(18)] = inst_47515);

(statearr_47637[(13)] = inst_47500__$1);

(statearr_47637[(15)] = inst_47502__$1);

(statearr_47637[(16)] = inst_47499__$1);

(statearr_47637[(17)] = inst_47501__$1);

return statearr_47637;
})();
var statearr_47638_47717 = state_47618__$1;
(statearr_47638_47717[(2)] = null);

(statearr_47638_47717[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47619 === (21))){
var inst_47540 = (state_47618[(2)]);
var state_47618__$1 = state_47618;
var statearr_47642_47718 = state_47618__$1;
(statearr_47642_47718[(2)] = inst_47540);

(statearr_47642_47718[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47619 === (31))){
var inst_47566 = (state_47618[(12)]);
var inst_47570 = done.call(null,null);
var inst_47571 = cljs.core.async.untap_STAR_.call(null,m,inst_47566);
var state_47618__$1 = (function (){var statearr_47643 = state_47618;
(statearr_47643[(19)] = inst_47570);

return statearr_47643;
})();
var statearr_47644_47719 = state_47618__$1;
(statearr_47644_47719[(2)] = inst_47571);

(statearr_47644_47719[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47619 === (32))){
var inst_47560 = (state_47618[(20)]);
var inst_47558 = (state_47618[(21)]);
var inst_47559 = (state_47618[(10)]);
var inst_47561 = (state_47618[(11)]);
var inst_47573 = (state_47618[(2)]);
var inst_47574 = (inst_47561 + (1));
var tmp47639 = inst_47560;
var tmp47640 = inst_47558;
var tmp47641 = inst_47559;
var inst_47558__$1 = tmp47640;
var inst_47559__$1 = tmp47641;
var inst_47560__$1 = tmp47639;
var inst_47561__$1 = inst_47574;
var state_47618__$1 = (function (){var statearr_47645 = state_47618;
(statearr_47645[(20)] = inst_47560__$1);

(statearr_47645[(22)] = inst_47573);

(statearr_47645[(21)] = inst_47558__$1);

(statearr_47645[(10)] = inst_47559__$1);

(statearr_47645[(11)] = inst_47561__$1);

return statearr_47645;
})();
var statearr_47646_47720 = state_47618__$1;
(statearr_47646_47720[(2)] = null);

(statearr_47646_47720[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47619 === (40))){
var inst_47586 = (state_47618[(23)]);
var inst_47590 = done.call(null,null);
var inst_47591 = cljs.core.async.untap_STAR_.call(null,m,inst_47586);
var state_47618__$1 = (function (){var statearr_47647 = state_47618;
(statearr_47647[(24)] = inst_47590);

return statearr_47647;
})();
var statearr_47648_47721 = state_47618__$1;
(statearr_47648_47721[(2)] = inst_47591);

(statearr_47648_47721[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47619 === (33))){
var inst_47577 = (state_47618[(25)]);
var inst_47579 = cljs.core.chunked_seq_QMARK_.call(null,inst_47577);
var state_47618__$1 = state_47618;
if(inst_47579){
var statearr_47649_47722 = state_47618__$1;
(statearr_47649_47722[(1)] = (36));

} else {
var statearr_47650_47723 = state_47618__$1;
(statearr_47650_47723[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47619 === (13))){
var inst_47509 = (state_47618[(26)]);
var inst_47512 = cljs.core.async.close_BANG_.call(null,inst_47509);
var state_47618__$1 = state_47618;
var statearr_47651_47724 = state_47618__$1;
(statearr_47651_47724[(2)] = inst_47512);

(statearr_47651_47724[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47619 === (22))){
var inst_47530 = (state_47618[(8)]);
var inst_47533 = cljs.core.async.close_BANG_.call(null,inst_47530);
var state_47618__$1 = state_47618;
var statearr_47652_47725 = state_47618__$1;
(statearr_47652_47725[(2)] = inst_47533);

(statearr_47652_47725[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47619 === (36))){
var inst_47577 = (state_47618[(25)]);
var inst_47581 = cljs.core.chunk_first.call(null,inst_47577);
var inst_47582 = cljs.core.chunk_rest.call(null,inst_47577);
var inst_47583 = cljs.core.count.call(null,inst_47581);
var inst_47558 = inst_47582;
var inst_47559 = inst_47581;
var inst_47560 = inst_47583;
var inst_47561 = (0);
var state_47618__$1 = (function (){var statearr_47653 = state_47618;
(statearr_47653[(20)] = inst_47560);

(statearr_47653[(21)] = inst_47558);

(statearr_47653[(10)] = inst_47559);

(statearr_47653[(11)] = inst_47561);

return statearr_47653;
})();
var statearr_47654_47726 = state_47618__$1;
(statearr_47654_47726[(2)] = null);

(statearr_47654_47726[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47619 === (41))){
var inst_47577 = (state_47618[(25)]);
var inst_47593 = (state_47618[(2)]);
var inst_47594 = cljs.core.next.call(null,inst_47577);
var inst_47558 = inst_47594;
var inst_47559 = null;
var inst_47560 = (0);
var inst_47561 = (0);
var state_47618__$1 = (function (){var statearr_47655 = state_47618;
(statearr_47655[(20)] = inst_47560);

(statearr_47655[(21)] = inst_47558);

(statearr_47655[(10)] = inst_47559);

(statearr_47655[(11)] = inst_47561);

(statearr_47655[(27)] = inst_47593);

return statearr_47655;
})();
var statearr_47656_47727 = state_47618__$1;
(statearr_47656_47727[(2)] = null);

(statearr_47656_47727[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47619 === (43))){
var state_47618__$1 = state_47618;
var statearr_47657_47728 = state_47618__$1;
(statearr_47657_47728[(2)] = null);

(statearr_47657_47728[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47619 === (29))){
var inst_47602 = (state_47618[(2)]);
var state_47618__$1 = state_47618;
var statearr_47658_47729 = state_47618__$1;
(statearr_47658_47729[(2)] = inst_47602);

(statearr_47658_47729[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47619 === (44))){
var inst_47611 = (state_47618[(2)]);
var state_47618__$1 = (function (){var statearr_47659 = state_47618;
(statearr_47659[(28)] = inst_47611);

return statearr_47659;
})();
var statearr_47660_47730 = state_47618__$1;
(statearr_47660_47730[(2)] = null);

(statearr_47660_47730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47619 === (6))){
var inst_47550 = (state_47618[(29)]);
var inst_47549 = cljs.core.deref.call(null,cs);
var inst_47550__$1 = cljs.core.keys.call(null,inst_47549);
var inst_47551 = cljs.core.count.call(null,inst_47550__$1);
var inst_47552 = cljs.core.reset_BANG_.call(null,dctr,inst_47551);
var inst_47557 = cljs.core.seq.call(null,inst_47550__$1);
var inst_47558 = inst_47557;
var inst_47559 = null;
var inst_47560 = (0);
var inst_47561 = (0);
var state_47618__$1 = (function (){var statearr_47661 = state_47618;
(statearr_47661[(20)] = inst_47560);

(statearr_47661[(30)] = inst_47552);

(statearr_47661[(21)] = inst_47558);

(statearr_47661[(10)] = inst_47559);

(statearr_47661[(11)] = inst_47561);

(statearr_47661[(29)] = inst_47550__$1);

return statearr_47661;
})();
var statearr_47662_47731 = state_47618__$1;
(statearr_47662_47731[(2)] = null);

(statearr_47662_47731[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47619 === (28))){
var inst_47558 = (state_47618[(21)]);
var inst_47577 = (state_47618[(25)]);
var inst_47577__$1 = cljs.core.seq.call(null,inst_47558);
var state_47618__$1 = (function (){var statearr_47663 = state_47618;
(statearr_47663[(25)] = inst_47577__$1);

return statearr_47663;
})();
if(inst_47577__$1){
var statearr_47664_47732 = state_47618__$1;
(statearr_47664_47732[(1)] = (33));

} else {
var statearr_47665_47733 = state_47618__$1;
(statearr_47665_47733[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47619 === (25))){
var inst_47560 = (state_47618[(20)]);
var inst_47561 = (state_47618[(11)]);
var inst_47563 = (inst_47561 < inst_47560);
var inst_47564 = inst_47563;
var state_47618__$1 = state_47618;
if(cljs.core.truth_(inst_47564)){
var statearr_47666_47734 = state_47618__$1;
(statearr_47666_47734[(1)] = (27));

} else {
var statearr_47667_47735 = state_47618__$1;
(statearr_47667_47735[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47619 === (34))){
var state_47618__$1 = state_47618;
var statearr_47668_47736 = state_47618__$1;
(statearr_47668_47736[(2)] = null);

(statearr_47668_47736[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47619 === (17))){
var state_47618__$1 = state_47618;
var statearr_47669_47737 = state_47618__$1;
(statearr_47669_47737[(2)] = null);

(statearr_47669_47737[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47619 === (3))){
var inst_47616 = (state_47618[(2)]);
var state_47618__$1 = state_47618;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47618__$1,inst_47616);
} else {
if((state_val_47619 === (12))){
var inst_47545 = (state_47618[(2)]);
var state_47618__$1 = state_47618;
var statearr_47670_47738 = state_47618__$1;
(statearr_47670_47738[(2)] = inst_47545);

(statearr_47670_47738[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47619 === (2))){
var state_47618__$1 = state_47618;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47618__$1,(4),ch);
} else {
if((state_val_47619 === (23))){
var state_47618__$1 = state_47618;
var statearr_47671_47739 = state_47618__$1;
(statearr_47671_47739[(2)] = null);

(statearr_47671_47739[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47619 === (35))){
var inst_47600 = (state_47618[(2)]);
var state_47618__$1 = state_47618;
var statearr_47672_47740 = state_47618__$1;
(statearr_47672_47740[(2)] = inst_47600);

(statearr_47672_47740[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47619 === (19))){
var inst_47519 = (state_47618[(7)]);
var inst_47523 = cljs.core.chunk_first.call(null,inst_47519);
var inst_47524 = cljs.core.chunk_rest.call(null,inst_47519);
var inst_47525 = cljs.core.count.call(null,inst_47523);
var inst_47499 = inst_47524;
var inst_47500 = inst_47523;
var inst_47501 = inst_47525;
var inst_47502 = (0);
var state_47618__$1 = (function (){var statearr_47673 = state_47618;
(statearr_47673[(13)] = inst_47500);

(statearr_47673[(15)] = inst_47502);

(statearr_47673[(16)] = inst_47499);

(statearr_47673[(17)] = inst_47501);

return statearr_47673;
})();
var statearr_47674_47741 = state_47618__$1;
(statearr_47674_47741[(2)] = null);

(statearr_47674_47741[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47619 === (11))){
var inst_47519 = (state_47618[(7)]);
var inst_47499 = (state_47618[(16)]);
var inst_47519__$1 = cljs.core.seq.call(null,inst_47499);
var state_47618__$1 = (function (){var statearr_47675 = state_47618;
(statearr_47675[(7)] = inst_47519__$1);

return statearr_47675;
})();
if(inst_47519__$1){
var statearr_47676_47742 = state_47618__$1;
(statearr_47676_47742[(1)] = (16));

} else {
var statearr_47677_47743 = state_47618__$1;
(statearr_47677_47743[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47619 === (9))){
var inst_47547 = (state_47618[(2)]);
var state_47618__$1 = state_47618;
var statearr_47678_47744 = state_47618__$1;
(statearr_47678_47744[(2)] = inst_47547);

(statearr_47678_47744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47619 === (5))){
var inst_47497 = cljs.core.deref.call(null,cs);
var inst_47498 = cljs.core.seq.call(null,inst_47497);
var inst_47499 = inst_47498;
var inst_47500 = null;
var inst_47501 = (0);
var inst_47502 = (0);
var state_47618__$1 = (function (){var statearr_47679 = state_47618;
(statearr_47679[(13)] = inst_47500);

(statearr_47679[(15)] = inst_47502);

(statearr_47679[(16)] = inst_47499);

(statearr_47679[(17)] = inst_47501);

return statearr_47679;
})();
var statearr_47680_47745 = state_47618__$1;
(statearr_47680_47745[(2)] = null);

(statearr_47680_47745[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47619 === (14))){
var state_47618__$1 = state_47618;
var statearr_47681_47746 = state_47618__$1;
(statearr_47681_47746[(2)] = null);

(statearr_47681_47746[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47619 === (45))){
var inst_47608 = (state_47618[(2)]);
var state_47618__$1 = state_47618;
var statearr_47682_47747 = state_47618__$1;
(statearr_47682_47747[(2)] = inst_47608);

(statearr_47682_47747[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47619 === (26))){
var inst_47550 = (state_47618[(29)]);
var inst_47604 = (state_47618[(2)]);
var inst_47605 = cljs.core.seq.call(null,inst_47550);
var state_47618__$1 = (function (){var statearr_47683 = state_47618;
(statearr_47683[(31)] = inst_47604);

return statearr_47683;
})();
if(inst_47605){
var statearr_47684_47748 = state_47618__$1;
(statearr_47684_47748[(1)] = (42));

} else {
var statearr_47685_47749 = state_47618__$1;
(statearr_47685_47749[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47619 === (16))){
var inst_47519 = (state_47618[(7)]);
var inst_47521 = cljs.core.chunked_seq_QMARK_.call(null,inst_47519);
var state_47618__$1 = state_47618;
if(inst_47521){
var statearr_47686_47750 = state_47618__$1;
(statearr_47686_47750[(1)] = (19));

} else {
var statearr_47687_47751 = state_47618__$1;
(statearr_47687_47751[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47619 === (38))){
var inst_47597 = (state_47618[(2)]);
var state_47618__$1 = state_47618;
var statearr_47688_47752 = state_47618__$1;
(statearr_47688_47752[(2)] = inst_47597);

(statearr_47688_47752[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47619 === (30))){
var state_47618__$1 = state_47618;
var statearr_47689_47753 = state_47618__$1;
(statearr_47689_47753[(2)] = null);

(statearr_47689_47753[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47619 === (10))){
var inst_47500 = (state_47618[(13)]);
var inst_47502 = (state_47618[(15)]);
var inst_47508 = cljs.core._nth.call(null,inst_47500,inst_47502);
var inst_47509 = cljs.core.nth.call(null,inst_47508,(0),null);
var inst_47510 = cljs.core.nth.call(null,inst_47508,(1),null);
var state_47618__$1 = (function (){var statearr_47690 = state_47618;
(statearr_47690[(26)] = inst_47509);

return statearr_47690;
})();
if(cljs.core.truth_(inst_47510)){
var statearr_47691_47754 = state_47618__$1;
(statearr_47691_47754[(1)] = (13));

} else {
var statearr_47692_47755 = state_47618__$1;
(statearr_47692_47755[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47619 === (18))){
var inst_47543 = (state_47618[(2)]);
var state_47618__$1 = state_47618;
var statearr_47693_47756 = state_47618__$1;
(statearr_47693_47756[(2)] = inst_47543);

(statearr_47693_47756[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47619 === (42))){
var state_47618__$1 = state_47618;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47618__$1,(45),dchan);
} else {
if((state_val_47619 === (37))){
var inst_47586 = (state_47618[(23)]);
var inst_47490 = (state_47618[(9)]);
var inst_47577 = (state_47618[(25)]);
var inst_47586__$1 = cljs.core.first.call(null,inst_47577);
var inst_47587 = cljs.core.async.put_BANG_.call(null,inst_47586__$1,inst_47490,done);
var state_47618__$1 = (function (){var statearr_47694 = state_47618;
(statearr_47694[(23)] = inst_47586__$1);

return statearr_47694;
})();
if(cljs.core.truth_(inst_47587)){
var statearr_47695_47757 = state_47618__$1;
(statearr_47695_47757[(1)] = (39));

} else {
var statearr_47696_47758 = state_47618__$1;
(statearr_47696_47758[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47619 === (8))){
var inst_47502 = (state_47618[(15)]);
var inst_47501 = (state_47618[(17)]);
var inst_47504 = (inst_47502 < inst_47501);
var inst_47505 = inst_47504;
var state_47618__$1 = state_47618;
if(cljs.core.truth_(inst_47505)){
var statearr_47697_47759 = state_47618__$1;
(statearr_47697_47759[(1)] = (10));

} else {
var statearr_47698_47760 = state_47618__$1;
(statearr_47698_47760[(1)] = (11));

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
});})(c__46399__auto___47706,cs,m,dchan,dctr,done))
;
return ((function (switch__46287__auto__,c__46399__auto___47706,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__46288__auto__ = null;
var cljs$core$async$mult_$_state_machine__46288__auto____0 = (function (){
var statearr_47702 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47702[(0)] = cljs$core$async$mult_$_state_machine__46288__auto__);

(statearr_47702[(1)] = (1));

return statearr_47702;
});
var cljs$core$async$mult_$_state_machine__46288__auto____1 = (function (state_47618){
while(true){
var ret_value__46289__auto__ = (function (){try{while(true){
var result__46290__auto__ = switch__46287__auto__.call(null,state_47618);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46290__auto__;
}
break;
}
}catch (e47703){if((e47703 instanceof Object)){
var ex__46291__auto__ = e47703;
var statearr_47704_47761 = state_47618;
(statearr_47704_47761[(5)] = ex__46291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47703;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47762 = state_47618;
state_47618 = G__47762;
continue;
} else {
return ret_value__46289__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__46288__auto__ = function(state_47618){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__46288__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__46288__auto____1.call(this,state_47618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__46288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__46288__auto____0;
cljs$core$async$mult_$_state_machine__46288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__46288__auto____1;
return cljs$core$async$mult_$_state_machine__46288__auto__;
})()
;})(switch__46287__auto__,c__46399__auto___47706,cs,m,dchan,dctr,done))
})();
var state__46401__auto__ = (function (){var statearr_47705 = f__46400__auto__.call(null);
(statearr_47705[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46399__auto___47706);

return statearr_47705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46401__auto__);
});})(c__46399__auto___47706,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args47763 = [];
var len__36896__auto___47766 = arguments.length;
var i__36897__auto___47767 = (0);
while(true){
if((i__36897__auto___47767 < len__36896__auto___47766)){
args47763.push((arguments[i__36897__auto___47767]));

var G__47768 = (i__36897__auto___47767 + (1));
i__36897__auto___47767 = G__47768;
continue;
} else {
}
break;
}

var G__47765 = args47763.length;
switch (G__47765) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47763.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__36493__auto__ = (((m == null))?null:m);
var m__36494__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__36493__auto__)]);
if(!((m__36494__auto__ == null))){
return m__36494__auto__.call(null,m,ch);
} else {
var m__36494__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__36494__auto____$1 == null))){
return m__36494__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__36493__auto__ = (((m == null))?null:m);
var m__36494__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__36493__auto__)]);
if(!((m__36494__auto__ == null))){
return m__36494__auto__.call(null,m,ch);
} else {
var m__36494__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__36494__auto____$1 == null))){
return m__36494__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__36493__auto__ = (((m == null))?null:m);
var m__36494__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__36493__auto__)]);
if(!((m__36494__auto__ == null))){
return m__36494__auto__.call(null,m);
} else {
var m__36494__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__36494__auto____$1 == null))){
return m__36494__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__36493__auto__ = (((m == null))?null:m);
var m__36494__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__36493__auto__)]);
if(!((m__36494__auto__ == null))){
return m__36494__auto__.call(null,m,state_map);
} else {
var m__36494__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__36494__auto____$1 == null))){
return m__36494__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__36493__auto__ = (((m == null))?null:m);
var m__36494__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__36493__auto__)]);
if(!((m__36494__auto__ == null))){
return m__36494__auto__.call(null,m,mode);
} else {
var m__36494__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__36494__auto____$1 == null))){
return m__36494__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__36903__auto__ = [];
var len__36896__auto___47780 = arguments.length;
var i__36897__auto___47781 = (0);
while(true){
if((i__36897__auto___47781 < len__36896__auto___47780)){
args__36903__auto__.push((arguments[i__36897__auto___47781]));

var G__47782 = (i__36897__auto___47781 + (1));
i__36897__auto___47781 = G__47782;
continue;
} else {
}
break;
}

var argseq__36904__auto__ = ((((3) < args__36903__auto__.length))?(new cljs.core.IndexedSeq(args__36903__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__36904__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__47774){
var map__47775 = p__47774;
var map__47775__$1 = ((((!((map__47775 == null)))?((((map__47775.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47775.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47775):map__47775);
var opts = map__47775__$1;
var statearr_47777_47783 = state;
(statearr_47777_47783[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__47775,map__47775__$1,opts){
return (function (val){
var statearr_47778_47784 = state;
(statearr_47778_47784[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__47775,map__47775__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_47779_47785 = state;
(statearr_47779_47785[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq47770){
var G__47771 = cljs.core.first.call(null,seq47770);
var seq47770__$1 = cljs.core.next.call(null,seq47770);
var G__47772 = cljs.core.first.call(null,seq47770__$1);
var seq47770__$2 = cljs.core.next.call(null,seq47770__$1);
var G__47773 = cljs.core.first.call(null,seq47770__$2);
var seq47770__$3 = cljs.core.next.call(null,seq47770__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__47771,G__47772,G__47773,seq47770__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async47949 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47949 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta47950){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta47950 = meta47950;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async47949.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_47951,meta47950__$1){
var self__ = this;
var _47951__$1 = this;
return (new cljs.core.async.t_cljs$core$async47949(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta47950__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47949.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_47951){
var self__ = this;
var _47951__$1 = this;
return self__.meta47950;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47949.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async47949.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47949.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async47949.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47949.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47949.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47949.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47949.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47949.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta47950","meta47950",1329986809,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47949.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47949.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47949";

cljs.core.async.t_cljs$core$async47949.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__36436__auto__,writer__36437__auto__,opt__36438__auto__){
return cljs.core._write.call(null,writer__36437__auto__,"cljs.core.async/t_cljs$core$async47949");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async47949 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async47949(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta47950){
return (new cljs.core.async.t_cljs$core$async47949(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta47950));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async47949(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46399__auto___48112 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46399__auto___48112,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__46400__auto__ = (function (){var switch__46287__auto__ = ((function (c__46399__auto___48112,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_48049){
var state_val_48050 = (state_48049[(1)]);
if((state_val_48050 === (7))){
var inst_47967 = (state_48049[(2)]);
var state_48049__$1 = state_48049;
var statearr_48051_48113 = state_48049__$1;
(statearr_48051_48113[(2)] = inst_47967);

(statearr_48051_48113[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48050 === (20))){
var inst_47979 = (state_48049[(7)]);
var state_48049__$1 = state_48049;
var statearr_48052_48114 = state_48049__$1;
(statearr_48052_48114[(2)] = inst_47979);

(statearr_48052_48114[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48050 === (27))){
var state_48049__$1 = state_48049;
var statearr_48053_48115 = state_48049__$1;
(statearr_48053_48115[(2)] = null);

(statearr_48053_48115[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48050 === (1))){
var inst_47955 = (state_48049[(8)]);
var inst_47955__$1 = calc_state.call(null);
var inst_47957 = (inst_47955__$1 == null);
var inst_47958 = cljs.core.not.call(null,inst_47957);
var state_48049__$1 = (function (){var statearr_48054 = state_48049;
(statearr_48054[(8)] = inst_47955__$1);

return statearr_48054;
})();
if(inst_47958){
var statearr_48055_48116 = state_48049__$1;
(statearr_48055_48116[(1)] = (2));

} else {
var statearr_48056_48117 = state_48049__$1;
(statearr_48056_48117[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48050 === (24))){
var inst_48023 = (state_48049[(9)]);
var inst_48002 = (state_48049[(10)]);
var inst_48009 = (state_48049[(11)]);
var inst_48023__$1 = inst_48002.call(null,inst_48009);
var state_48049__$1 = (function (){var statearr_48057 = state_48049;
(statearr_48057[(9)] = inst_48023__$1);

return statearr_48057;
})();
if(cljs.core.truth_(inst_48023__$1)){
var statearr_48058_48118 = state_48049__$1;
(statearr_48058_48118[(1)] = (29));

} else {
var statearr_48059_48119 = state_48049__$1;
(statearr_48059_48119[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48050 === (4))){
var inst_47970 = (state_48049[(2)]);
var state_48049__$1 = state_48049;
if(cljs.core.truth_(inst_47970)){
var statearr_48060_48120 = state_48049__$1;
(statearr_48060_48120[(1)] = (8));

} else {
var statearr_48061_48121 = state_48049__$1;
(statearr_48061_48121[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48050 === (15))){
var inst_47996 = (state_48049[(2)]);
var state_48049__$1 = state_48049;
if(cljs.core.truth_(inst_47996)){
var statearr_48062_48122 = state_48049__$1;
(statearr_48062_48122[(1)] = (19));

} else {
var statearr_48063_48123 = state_48049__$1;
(statearr_48063_48123[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48050 === (21))){
var inst_48001 = (state_48049[(12)]);
var inst_48001__$1 = (state_48049[(2)]);
var inst_48002 = cljs.core.get.call(null,inst_48001__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48003 = cljs.core.get.call(null,inst_48001__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48004 = cljs.core.get.call(null,inst_48001__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_48049__$1 = (function (){var statearr_48064 = state_48049;
(statearr_48064[(12)] = inst_48001__$1);

(statearr_48064[(13)] = inst_48003);

(statearr_48064[(10)] = inst_48002);

return statearr_48064;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_48049__$1,(22),inst_48004);
} else {
if((state_val_48050 === (31))){
var inst_48031 = (state_48049[(2)]);
var state_48049__$1 = state_48049;
if(cljs.core.truth_(inst_48031)){
var statearr_48065_48124 = state_48049__$1;
(statearr_48065_48124[(1)] = (32));

} else {
var statearr_48066_48125 = state_48049__$1;
(statearr_48066_48125[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48050 === (32))){
var inst_48008 = (state_48049[(14)]);
var state_48049__$1 = state_48049;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48049__$1,(35),out,inst_48008);
} else {
if((state_val_48050 === (33))){
var inst_48001 = (state_48049[(12)]);
var inst_47979 = inst_48001;
var state_48049__$1 = (function (){var statearr_48067 = state_48049;
(statearr_48067[(7)] = inst_47979);

return statearr_48067;
})();
var statearr_48068_48126 = state_48049__$1;
(statearr_48068_48126[(2)] = null);

(statearr_48068_48126[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48050 === (13))){
var inst_47979 = (state_48049[(7)]);
var inst_47986 = inst_47979.cljs$lang$protocol_mask$partition0$;
var inst_47987 = (inst_47986 & (64));
var inst_47988 = inst_47979.cljs$core$ISeq$;
var inst_47989 = (inst_47987) || (inst_47988);
var state_48049__$1 = state_48049;
if(cljs.core.truth_(inst_47989)){
var statearr_48069_48127 = state_48049__$1;
(statearr_48069_48127[(1)] = (16));

} else {
var statearr_48070_48128 = state_48049__$1;
(statearr_48070_48128[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48050 === (22))){
var inst_48008 = (state_48049[(14)]);
var inst_48009 = (state_48049[(11)]);
var inst_48007 = (state_48049[(2)]);
var inst_48008__$1 = cljs.core.nth.call(null,inst_48007,(0),null);
var inst_48009__$1 = cljs.core.nth.call(null,inst_48007,(1),null);
var inst_48010 = (inst_48008__$1 == null);
var inst_48011 = cljs.core._EQ_.call(null,inst_48009__$1,change);
var inst_48012 = (inst_48010) || (inst_48011);
var state_48049__$1 = (function (){var statearr_48071 = state_48049;
(statearr_48071[(14)] = inst_48008__$1);

(statearr_48071[(11)] = inst_48009__$1);

return statearr_48071;
})();
if(cljs.core.truth_(inst_48012)){
var statearr_48072_48129 = state_48049__$1;
(statearr_48072_48129[(1)] = (23));

} else {
var statearr_48073_48130 = state_48049__$1;
(statearr_48073_48130[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48050 === (36))){
var inst_48001 = (state_48049[(12)]);
var inst_47979 = inst_48001;
var state_48049__$1 = (function (){var statearr_48074 = state_48049;
(statearr_48074[(7)] = inst_47979);

return statearr_48074;
})();
var statearr_48075_48131 = state_48049__$1;
(statearr_48075_48131[(2)] = null);

(statearr_48075_48131[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48050 === (29))){
var inst_48023 = (state_48049[(9)]);
var state_48049__$1 = state_48049;
var statearr_48076_48132 = state_48049__$1;
(statearr_48076_48132[(2)] = inst_48023);

(statearr_48076_48132[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48050 === (6))){
var state_48049__$1 = state_48049;
var statearr_48077_48133 = state_48049__$1;
(statearr_48077_48133[(2)] = false);

(statearr_48077_48133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48050 === (28))){
var inst_48019 = (state_48049[(2)]);
var inst_48020 = calc_state.call(null);
var inst_47979 = inst_48020;
var state_48049__$1 = (function (){var statearr_48078 = state_48049;
(statearr_48078[(15)] = inst_48019);

(statearr_48078[(7)] = inst_47979);

return statearr_48078;
})();
var statearr_48079_48134 = state_48049__$1;
(statearr_48079_48134[(2)] = null);

(statearr_48079_48134[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48050 === (25))){
var inst_48045 = (state_48049[(2)]);
var state_48049__$1 = state_48049;
var statearr_48080_48135 = state_48049__$1;
(statearr_48080_48135[(2)] = inst_48045);

(statearr_48080_48135[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48050 === (34))){
var inst_48043 = (state_48049[(2)]);
var state_48049__$1 = state_48049;
var statearr_48081_48136 = state_48049__$1;
(statearr_48081_48136[(2)] = inst_48043);

(statearr_48081_48136[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48050 === (17))){
var state_48049__$1 = state_48049;
var statearr_48082_48137 = state_48049__$1;
(statearr_48082_48137[(2)] = false);

(statearr_48082_48137[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48050 === (3))){
var state_48049__$1 = state_48049;
var statearr_48083_48138 = state_48049__$1;
(statearr_48083_48138[(2)] = false);

(statearr_48083_48138[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48050 === (12))){
var inst_48047 = (state_48049[(2)]);
var state_48049__$1 = state_48049;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48049__$1,inst_48047);
} else {
if((state_val_48050 === (2))){
var inst_47955 = (state_48049[(8)]);
var inst_47960 = inst_47955.cljs$lang$protocol_mask$partition0$;
var inst_47961 = (inst_47960 & (64));
var inst_47962 = inst_47955.cljs$core$ISeq$;
var inst_47963 = (inst_47961) || (inst_47962);
var state_48049__$1 = state_48049;
if(cljs.core.truth_(inst_47963)){
var statearr_48084_48139 = state_48049__$1;
(statearr_48084_48139[(1)] = (5));

} else {
var statearr_48085_48140 = state_48049__$1;
(statearr_48085_48140[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48050 === (23))){
var inst_48008 = (state_48049[(14)]);
var inst_48014 = (inst_48008 == null);
var state_48049__$1 = state_48049;
if(cljs.core.truth_(inst_48014)){
var statearr_48086_48141 = state_48049__$1;
(statearr_48086_48141[(1)] = (26));

} else {
var statearr_48087_48142 = state_48049__$1;
(statearr_48087_48142[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48050 === (35))){
var inst_48034 = (state_48049[(2)]);
var state_48049__$1 = state_48049;
if(cljs.core.truth_(inst_48034)){
var statearr_48088_48143 = state_48049__$1;
(statearr_48088_48143[(1)] = (36));

} else {
var statearr_48089_48144 = state_48049__$1;
(statearr_48089_48144[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48050 === (19))){
var inst_47979 = (state_48049[(7)]);
var inst_47998 = cljs.core.apply.call(null,cljs.core.hash_map,inst_47979);
var state_48049__$1 = state_48049;
var statearr_48090_48145 = state_48049__$1;
(statearr_48090_48145[(2)] = inst_47998);

(statearr_48090_48145[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48050 === (11))){
var inst_47979 = (state_48049[(7)]);
var inst_47983 = (inst_47979 == null);
var inst_47984 = cljs.core.not.call(null,inst_47983);
var state_48049__$1 = state_48049;
if(inst_47984){
var statearr_48091_48146 = state_48049__$1;
(statearr_48091_48146[(1)] = (13));

} else {
var statearr_48092_48147 = state_48049__$1;
(statearr_48092_48147[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48050 === (9))){
var inst_47955 = (state_48049[(8)]);
var state_48049__$1 = state_48049;
var statearr_48093_48148 = state_48049__$1;
(statearr_48093_48148[(2)] = inst_47955);

(statearr_48093_48148[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48050 === (5))){
var state_48049__$1 = state_48049;
var statearr_48094_48149 = state_48049__$1;
(statearr_48094_48149[(2)] = true);

(statearr_48094_48149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48050 === (14))){
var state_48049__$1 = state_48049;
var statearr_48095_48150 = state_48049__$1;
(statearr_48095_48150[(2)] = false);

(statearr_48095_48150[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48050 === (26))){
var inst_48009 = (state_48049[(11)]);
var inst_48016 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_48009);
var state_48049__$1 = state_48049;
var statearr_48096_48151 = state_48049__$1;
(statearr_48096_48151[(2)] = inst_48016);

(statearr_48096_48151[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48050 === (16))){
var state_48049__$1 = state_48049;
var statearr_48097_48152 = state_48049__$1;
(statearr_48097_48152[(2)] = true);

(statearr_48097_48152[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48050 === (38))){
var inst_48039 = (state_48049[(2)]);
var state_48049__$1 = state_48049;
var statearr_48098_48153 = state_48049__$1;
(statearr_48098_48153[(2)] = inst_48039);

(statearr_48098_48153[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48050 === (30))){
var inst_48003 = (state_48049[(13)]);
var inst_48002 = (state_48049[(10)]);
var inst_48009 = (state_48049[(11)]);
var inst_48026 = cljs.core.empty_QMARK_.call(null,inst_48002);
var inst_48027 = inst_48003.call(null,inst_48009);
var inst_48028 = cljs.core.not.call(null,inst_48027);
var inst_48029 = (inst_48026) && (inst_48028);
var state_48049__$1 = state_48049;
var statearr_48099_48154 = state_48049__$1;
(statearr_48099_48154[(2)] = inst_48029);

(statearr_48099_48154[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48050 === (10))){
var inst_47955 = (state_48049[(8)]);
var inst_47975 = (state_48049[(2)]);
var inst_47976 = cljs.core.get.call(null,inst_47975,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47977 = cljs.core.get.call(null,inst_47975,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47978 = cljs.core.get.call(null,inst_47975,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_47979 = inst_47955;
var state_48049__$1 = (function (){var statearr_48100 = state_48049;
(statearr_48100[(7)] = inst_47979);

(statearr_48100[(16)] = inst_47976);

(statearr_48100[(17)] = inst_47978);

(statearr_48100[(18)] = inst_47977);

return statearr_48100;
})();
var statearr_48101_48155 = state_48049__$1;
(statearr_48101_48155[(2)] = null);

(statearr_48101_48155[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48050 === (18))){
var inst_47993 = (state_48049[(2)]);
var state_48049__$1 = state_48049;
var statearr_48102_48156 = state_48049__$1;
(statearr_48102_48156[(2)] = inst_47993);

(statearr_48102_48156[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48050 === (37))){
var state_48049__$1 = state_48049;
var statearr_48103_48157 = state_48049__$1;
(statearr_48103_48157[(2)] = null);

(statearr_48103_48157[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48050 === (8))){
var inst_47955 = (state_48049[(8)]);
var inst_47972 = cljs.core.apply.call(null,cljs.core.hash_map,inst_47955);
var state_48049__$1 = state_48049;
var statearr_48104_48158 = state_48049__$1;
(statearr_48104_48158[(2)] = inst_47972);

(statearr_48104_48158[(1)] = (10));


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
});})(c__46399__auto___48112,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__46287__auto__,c__46399__auto___48112,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__46288__auto__ = null;
var cljs$core$async$mix_$_state_machine__46288__auto____0 = (function (){
var statearr_48108 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48108[(0)] = cljs$core$async$mix_$_state_machine__46288__auto__);

(statearr_48108[(1)] = (1));

return statearr_48108;
});
var cljs$core$async$mix_$_state_machine__46288__auto____1 = (function (state_48049){
while(true){
var ret_value__46289__auto__ = (function (){try{while(true){
var result__46290__auto__ = switch__46287__auto__.call(null,state_48049);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46290__auto__;
}
break;
}
}catch (e48109){if((e48109 instanceof Object)){
var ex__46291__auto__ = e48109;
var statearr_48110_48159 = state_48049;
(statearr_48110_48159[(5)] = ex__46291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48049);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48109;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48160 = state_48049;
state_48049 = G__48160;
continue;
} else {
return ret_value__46289__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__46288__auto__ = function(state_48049){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__46288__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__46288__auto____1.call(this,state_48049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__46288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__46288__auto____0;
cljs$core$async$mix_$_state_machine__46288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__46288__auto____1;
return cljs$core$async$mix_$_state_machine__46288__auto__;
})()
;})(switch__46287__auto__,c__46399__auto___48112,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__46401__auto__ = (function (){var statearr_48111 = f__46400__auto__.call(null);
(statearr_48111[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46399__auto___48112);

return statearr_48111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46401__auto__);
});})(c__46399__auto___48112,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__36493__auto__ = (((p == null))?null:p);
var m__36494__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__36493__auto__)]);
if(!((m__36494__auto__ == null))){
return m__36494__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__36494__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__36494__auto____$1 == null))){
return m__36494__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__36493__auto__ = (((p == null))?null:p);
var m__36494__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__36493__auto__)]);
if(!((m__36494__auto__ == null))){
return m__36494__auto__.call(null,p,v,ch);
} else {
var m__36494__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__36494__auto____$1 == null))){
return m__36494__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args48161 = [];
var len__36896__auto___48164 = arguments.length;
var i__36897__auto___48165 = (0);
while(true){
if((i__36897__auto___48165 < len__36896__auto___48164)){
args48161.push((arguments[i__36897__auto___48165]));

var G__48166 = (i__36897__auto___48165 + (1));
i__36897__auto___48165 = G__48166;
continue;
} else {
}
break;
}

var G__48163 = args48161.length;
switch (G__48163) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48161.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__36493__auto__ = (((p == null))?null:p);
var m__36494__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__36493__auto__)]);
if(!((m__36494__auto__ == null))){
return m__36494__auto__.call(null,p);
} else {
var m__36494__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__36494__auto____$1 == null))){
return m__36494__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__36493__auto__ = (((p == null))?null:p);
var m__36494__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__36493__auto__)]);
if(!((m__36494__auto__ == null))){
return m__36494__auto__.call(null,p,v);
} else {
var m__36494__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__36494__auto____$1 == null))){
return m__36494__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args48169 = [];
var len__36896__auto___48294 = arguments.length;
var i__36897__auto___48295 = (0);
while(true){
if((i__36897__auto___48295 < len__36896__auto___48294)){
args48169.push((arguments[i__36897__auto___48295]));

var G__48296 = (i__36897__auto___48295 + (1));
i__36897__auto___48295 = G__48296;
continue;
} else {
}
break;
}

var G__48171 = args48169.length;
switch (G__48171) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48169.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__35838__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__35838__auto__)){
return or__35838__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__35838__auto__,mults){
return (function (p1__48168_SHARP_){
if(cljs.core.truth_(p1__48168_SHARP_.call(null,topic))){
return p1__48168_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__48168_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__35838__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async48172 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48172 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta48173){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta48173 = meta48173;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async48172.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_48174,meta48173__$1){
var self__ = this;
var _48174__$1 = this;
return (new cljs.core.async.t_cljs$core$async48172(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta48173__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48172.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_48174){
var self__ = this;
var _48174__$1 = this;
return self__.meta48173;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48172.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async48172.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48172.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async48172.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48172.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48172.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48172.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48172.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta48173","meta48173",-1517904097,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48172.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48172.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48172";

cljs.core.async.t_cljs$core$async48172.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__36436__auto__,writer__36437__auto__,opt__36438__auto__){
return cljs.core._write.call(null,writer__36437__auto__,"cljs.core.async/t_cljs$core$async48172");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async48172 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async48172(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48173){
return (new cljs.core.async.t_cljs$core$async48172(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48173));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async48172(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46399__auto___48298 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46399__auto___48298,mults,ensure_mult,p){
return (function (){
var f__46400__auto__ = (function (){var switch__46287__auto__ = ((function (c__46399__auto___48298,mults,ensure_mult,p){
return (function (state_48246){
var state_val_48247 = (state_48246[(1)]);
if((state_val_48247 === (7))){
var inst_48242 = (state_48246[(2)]);
var state_48246__$1 = state_48246;
var statearr_48248_48299 = state_48246__$1;
(statearr_48248_48299[(2)] = inst_48242);

(statearr_48248_48299[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48247 === (20))){
var state_48246__$1 = state_48246;
var statearr_48249_48300 = state_48246__$1;
(statearr_48249_48300[(2)] = null);

(statearr_48249_48300[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48247 === (1))){
var state_48246__$1 = state_48246;
var statearr_48250_48301 = state_48246__$1;
(statearr_48250_48301[(2)] = null);

(statearr_48250_48301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48247 === (24))){
var inst_48225 = (state_48246[(7)]);
var inst_48234 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_48225);
var state_48246__$1 = state_48246;
var statearr_48251_48302 = state_48246__$1;
(statearr_48251_48302[(2)] = inst_48234);

(statearr_48251_48302[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48247 === (4))){
var inst_48177 = (state_48246[(8)]);
var inst_48177__$1 = (state_48246[(2)]);
var inst_48178 = (inst_48177__$1 == null);
var state_48246__$1 = (function (){var statearr_48252 = state_48246;
(statearr_48252[(8)] = inst_48177__$1);

return statearr_48252;
})();
if(cljs.core.truth_(inst_48178)){
var statearr_48253_48303 = state_48246__$1;
(statearr_48253_48303[(1)] = (5));

} else {
var statearr_48254_48304 = state_48246__$1;
(statearr_48254_48304[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48247 === (15))){
var inst_48219 = (state_48246[(2)]);
var state_48246__$1 = state_48246;
var statearr_48255_48305 = state_48246__$1;
(statearr_48255_48305[(2)] = inst_48219);

(statearr_48255_48305[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48247 === (21))){
var inst_48239 = (state_48246[(2)]);
var state_48246__$1 = (function (){var statearr_48256 = state_48246;
(statearr_48256[(9)] = inst_48239);

return statearr_48256;
})();
var statearr_48257_48306 = state_48246__$1;
(statearr_48257_48306[(2)] = null);

(statearr_48257_48306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48247 === (13))){
var inst_48201 = (state_48246[(10)]);
var inst_48203 = cljs.core.chunked_seq_QMARK_.call(null,inst_48201);
var state_48246__$1 = state_48246;
if(inst_48203){
var statearr_48258_48307 = state_48246__$1;
(statearr_48258_48307[(1)] = (16));

} else {
var statearr_48259_48308 = state_48246__$1;
(statearr_48259_48308[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48247 === (22))){
var inst_48231 = (state_48246[(2)]);
var state_48246__$1 = state_48246;
if(cljs.core.truth_(inst_48231)){
var statearr_48260_48309 = state_48246__$1;
(statearr_48260_48309[(1)] = (23));

} else {
var statearr_48261_48310 = state_48246__$1;
(statearr_48261_48310[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48247 === (6))){
var inst_48227 = (state_48246[(11)]);
var inst_48177 = (state_48246[(8)]);
var inst_48225 = (state_48246[(7)]);
var inst_48225__$1 = topic_fn.call(null,inst_48177);
var inst_48226 = cljs.core.deref.call(null,mults);
var inst_48227__$1 = cljs.core.get.call(null,inst_48226,inst_48225__$1);
var state_48246__$1 = (function (){var statearr_48262 = state_48246;
(statearr_48262[(11)] = inst_48227__$1);

(statearr_48262[(7)] = inst_48225__$1);

return statearr_48262;
})();
if(cljs.core.truth_(inst_48227__$1)){
var statearr_48263_48311 = state_48246__$1;
(statearr_48263_48311[(1)] = (19));

} else {
var statearr_48264_48312 = state_48246__$1;
(statearr_48264_48312[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48247 === (25))){
var inst_48236 = (state_48246[(2)]);
var state_48246__$1 = state_48246;
var statearr_48265_48313 = state_48246__$1;
(statearr_48265_48313[(2)] = inst_48236);

(statearr_48265_48313[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48247 === (17))){
var inst_48201 = (state_48246[(10)]);
var inst_48210 = cljs.core.first.call(null,inst_48201);
var inst_48211 = cljs.core.async.muxch_STAR_.call(null,inst_48210);
var inst_48212 = cljs.core.async.close_BANG_.call(null,inst_48211);
var inst_48213 = cljs.core.next.call(null,inst_48201);
var inst_48187 = inst_48213;
var inst_48188 = null;
var inst_48189 = (0);
var inst_48190 = (0);
var state_48246__$1 = (function (){var statearr_48266 = state_48246;
(statearr_48266[(12)] = inst_48190);

(statearr_48266[(13)] = inst_48212);

(statearr_48266[(14)] = inst_48188);

(statearr_48266[(15)] = inst_48189);

(statearr_48266[(16)] = inst_48187);

return statearr_48266;
})();
var statearr_48267_48314 = state_48246__$1;
(statearr_48267_48314[(2)] = null);

(statearr_48267_48314[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48247 === (3))){
var inst_48244 = (state_48246[(2)]);
var state_48246__$1 = state_48246;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48246__$1,inst_48244);
} else {
if((state_val_48247 === (12))){
var inst_48221 = (state_48246[(2)]);
var state_48246__$1 = state_48246;
var statearr_48268_48315 = state_48246__$1;
(statearr_48268_48315[(2)] = inst_48221);

(statearr_48268_48315[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48247 === (2))){
var state_48246__$1 = state_48246;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48246__$1,(4),ch);
} else {
if((state_val_48247 === (23))){
var state_48246__$1 = state_48246;
var statearr_48269_48316 = state_48246__$1;
(statearr_48269_48316[(2)] = null);

(statearr_48269_48316[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48247 === (19))){
var inst_48227 = (state_48246[(11)]);
var inst_48177 = (state_48246[(8)]);
var inst_48229 = cljs.core.async.muxch_STAR_.call(null,inst_48227);
var state_48246__$1 = state_48246;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48246__$1,(22),inst_48229,inst_48177);
} else {
if((state_val_48247 === (11))){
var inst_48201 = (state_48246[(10)]);
var inst_48187 = (state_48246[(16)]);
var inst_48201__$1 = cljs.core.seq.call(null,inst_48187);
var state_48246__$1 = (function (){var statearr_48270 = state_48246;
(statearr_48270[(10)] = inst_48201__$1);

return statearr_48270;
})();
if(inst_48201__$1){
var statearr_48271_48317 = state_48246__$1;
(statearr_48271_48317[(1)] = (13));

} else {
var statearr_48272_48318 = state_48246__$1;
(statearr_48272_48318[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48247 === (9))){
var inst_48223 = (state_48246[(2)]);
var state_48246__$1 = state_48246;
var statearr_48273_48319 = state_48246__$1;
(statearr_48273_48319[(2)] = inst_48223);

(statearr_48273_48319[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48247 === (5))){
var inst_48184 = cljs.core.deref.call(null,mults);
var inst_48185 = cljs.core.vals.call(null,inst_48184);
var inst_48186 = cljs.core.seq.call(null,inst_48185);
var inst_48187 = inst_48186;
var inst_48188 = null;
var inst_48189 = (0);
var inst_48190 = (0);
var state_48246__$1 = (function (){var statearr_48274 = state_48246;
(statearr_48274[(12)] = inst_48190);

(statearr_48274[(14)] = inst_48188);

(statearr_48274[(15)] = inst_48189);

(statearr_48274[(16)] = inst_48187);

return statearr_48274;
})();
var statearr_48275_48320 = state_48246__$1;
(statearr_48275_48320[(2)] = null);

(statearr_48275_48320[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48247 === (14))){
var state_48246__$1 = state_48246;
var statearr_48279_48321 = state_48246__$1;
(statearr_48279_48321[(2)] = null);

(statearr_48279_48321[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48247 === (16))){
var inst_48201 = (state_48246[(10)]);
var inst_48205 = cljs.core.chunk_first.call(null,inst_48201);
var inst_48206 = cljs.core.chunk_rest.call(null,inst_48201);
var inst_48207 = cljs.core.count.call(null,inst_48205);
var inst_48187 = inst_48206;
var inst_48188 = inst_48205;
var inst_48189 = inst_48207;
var inst_48190 = (0);
var state_48246__$1 = (function (){var statearr_48280 = state_48246;
(statearr_48280[(12)] = inst_48190);

(statearr_48280[(14)] = inst_48188);

(statearr_48280[(15)] = inst_48189);

(statearr_48280[(16)] = inst_48187);

return statearr_48280;
})();
var statearr_48281_48322 = state_48246__$1;
(statearr_48281_48322[(2)] = null);

(statearr_48281_48322[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48247 === (10))){
var inst_48190 = (state_48246[(12)]);
var inst_48188 = (state_48246[(14)]);
var inst_48189 = (state_48246[(15)]);
var inst_48187 = (state_48246[(16)]);
var inst_48195 = cljs.core._nth.call(null,inst_48188,inst_48190);
var inst_48196 = cljs.core.async.muxch_STAR_.call(null,inst_48195);
var inst_48197 = cljs.core.async.close_BANG_.call(null,inst_48196);
var inst_48198 = (inst_48190 + (1));
var tmp48276 = inst_48188;
var tmp48277 = inst_48189;
var tmp48278 = inst_48187;
var inst_48187__$1 = tmp48278;
var inst_48188__$1 = tmp48276;
var inst_48189__$1 = tmp48277;
var inst_48190__$1 = inst_48198;
var state_48246__$1 = (function (){var statearr_48282 = state_48246;
(statearr_48282[(12)] = inst_48190__$1);

(statearr_48282[(14)] = inst_48188__$1);

(statearr_48282[(17)] = inst_48197);

(statearr_48282[(15)] = inst_48189__$1);

(statearr_48282[(16)] = inst_48187__$1);

return statearr_48282;
})();
var statearr_48283_48323 = state_48246__$1;
(statearr_48283_48323[(2)] = null);

(statearr_48283_48323[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48247 === (18))){
var inst_48216 = (state_48246[(2)]);
var state_48246__$1 = state_48246;
var statearr_48284_48324 = state_48246__$1;
(statearr_48284_48324[(2)] = inst_48216);

(statearr_48284_48324[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48247 === (8))){
var inst_48190 = (state_48246[(12)]);
var inst_48189 = (state_48246[(15)]);
var inst_48192 = (inst_48190 < inst_48189);
var inst_48193 = inst_48192;
var state_48246__$1 = state_48246;
if(cljs.core.truth_(inst_48193)){
var statearr_48285_48325 = state_48246__$1;
(statearr_48285_48325[(1)] = (10));

} else {
var statearr_48286_48326 = state_48246__$1;
(statearr_48286_48326[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__46399__auto___48298,mults,ensure_mult,p))
;
return ((function (switch__46287__auto__,c__46399__auto___48298,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__46288__auto__ = null;
var cljs$core$async$state_machine__46288__auto____0 = (function (){
var statearr_48290 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48290[(0)] = cljs$core$async$state_machine__46288__auto__);

(statearr_48290[(1)] = (1));

return statearr_48290;
});
var cljs$core$async$state_machine__46288__auto____1 = (function (state_48246){
while(true){
var ret_value__46289__auto__ = (function (){try{while(true){
var result__46290__auto__ = switch__46287__auto__.call(null,state_48246);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46290__auto__;
}
break;
}
}catch (e48291){if((e48291 instanceof Object)){
var ex__46291__auto__ = e48291;
var statearr_48292_48327 = state_48246;
(statearr_48292_48327[(5)] = ex__46291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48246);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48291;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48328 = state_48246;
state_48246 = G__48328;
continue;
} else {
return ret_value__46289__auto__;
}
break;
}
});
cljs$core$async$state_machine__46288__auto__ = function(state_48246){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46288__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46288__auto____1.call(this,state_48246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46288__auto____0;
cljs$core$async$state_machine__46288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46288__auto____1;
return cljs$core$async$state_machine__46288__auto__;
})()
;})(switch__46287__auto__,c__46399__auto___48298,mults,ensure_mult,p))
})();
var state__46401__auto__ = (function (){var statearr_48293 = f__46400__auto__.call(null);
(statearr_48293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46399__auto___48298);

return statearr_48293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46401__auto__);
});})(c__46399__auto___48298,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args48329 = [];
var len__36896__auto___48332 = arguments.length;
var i__36897__auto___48333 = (0);
while(true){
if((i__36897__auto___48333 < len__36896__auto___48332)){
args48329.push((arguments[i__36897__auto___48333]));

var G__48334 = (i__36897__auto___48333 + (1));
i__36897__auto___48333 = G__48334;
continue;
} else {
}
break;
}

var G__48331 = args48329.length;
switch (G__48331) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48329.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args48336 = [];
var len__36896__auto___48339 = arguments.length;
var i__36897__auto___48340 = (0);
while(true){
if((i__36897__auto___48340 < len__36896__auto___48339)){
args48336.push((arguments[i__36897__auto___48340]));

var G__48341 = (i__36897__auto___48340 + (1));
i__36897__auto___48340 = G__48341;
continue;
} else {
}
break;
}

var G__48338 = args48336.length;
switch (G__48338) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48336.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args48343 = [];
var len__36896__auto___48414 = arguments.length;
var i__36897__auto___48415 = (0);
while(true){
if((i__36897__auto___48415 < len__36896__auto___48414)){
args48343.push((arguments[i__36897__auto___48415]));

var G__48416 = (i__36897__auto___48415 + (1));
i__36897__auto___48415 = G__48416;
continue;
} else {
}
break;
}

var G__48345 = args48343.length;
switch (G__48345) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48343.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__46399__auto___48418 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46399__auto___48418,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__46400__auto__ = (function (){var switch__46287__auto__ = ((function (c__46399__auto___48418,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_48384){
var state_val_48385 = (state_48384[(1)]);
if((state_val_48385 === (7))){
var state_48384__$1 = state_48384;
var statearr_48386_48419 = state_48384__$1;
(statearr_48386_48419[(2)] = null);

(statearr_48386_48419[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48385 === (1))){
var state_48384__$1 = state_48384;
var statearr_48387_48420 = state_48384__$1;
(statearr_48387_48420[(2)] = null);

(statearr_48387_48420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48385 === (4))){
var inst_48348 = (state_48384[(7)]);
var inst_48350 = (inst_48348 < cnt);
var state_48384__$1 = state_48384;
if(cljs.core.truth_(inst_48350)){
var statearr_48388_48421 = state_48384__$1;
(statearr_48388_48421[(1)] = (6));

} else {
var statearr_48389_48422 = state_48384__$1;
(statearr_48389_48422[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48385 === (15))){
var inst_48380 = (state_48384[(2)]);
var state_48384__$1 = state_48384;
var statearr_48390_48423 = state_48384__$1;
(statearr_48390_48423[(2)] = inst_48380);

(statearr_48390_48423[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48385 === (13))){
var inst_48373 = cljs.core.async.close_BANG_.call(null,out);
var state_48384__$1 = state_48384;
var statearr_48391_48424 = state_48384__$1;
(statearr_48391_48424[(2)] = inst_48373);

(statearr_48391_48424[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48385 === (6))){
var state_48384__$1 = state_48384;
var statearr_48392_48425 = state_48384__$1;
(statearr_48392_48425[(2)] = null);

(statearr_48392_48425[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48385 === (3))){
var inst_48382 = (state_48384[(2)]);
var state_48384__$1 = state_48384;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48384__$1,inst_48382);
} else {
if((state_val_48385 === (12))){
var inst_48370 = (state_48384[(8)]);
var inst_48370__$1 = (state_48384[(2)]);
var inst_48371 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_48370__$1);
var state_48384__$1 = (function (){var statearr_48393 = state_48384;
(statearr_48393[(8)] = inst_48370__$1);

return statearr_48393;
})();
if(cljs.core.truth_(inst_48371)){
var statearr_48394_48426 = state_48384__$1;
(statearr_48394_48426[(1)] = (13));

} else {
var statearr_48395_48427 = state_48384__$1;
(statearr_48395_48427[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48385 === (2))){
var inst_48347 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_48348 = (0);
var state_48384__$1 = (function (){var statearr_48396 = state_48384;
(statearr_48396[(7)] = inst_48348);

(statearr_48396[(9)] = inst_48347);

return statearr_48396;
})();
var statearr_48397_48428 = state_48384__$1;
(statearr_48397_48428[(2)] = null);

(statearr_48397_48428[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48385 === (11))){
var inst_48348 = (state_48384[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_48384,(10),Object,null,(9));
var inst_48357 = chs__$1.call(null,inst_48348);
var inst_48358 = done.call(null,inst_48348);
var inst_48359 = cljs.core.async.take_BANG_.call(null,inst_48357,inst_48358);
var state_48384__$1 = state_48384;
var statearr_48398_48429 = state_48384__$1;
(statearr_48398_48429[(2)] = inst_48359);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48384__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48385 === (9))){
var inst_48348 = (state_48384[(7)]);
var inst_48361 = (state_48384[(2)]);
var inst_48362 = (inst_48348 + (1));
var inst_48348__$1 = inst_48362;
var state_48384__$1 = (function (){var statearr_48399 = state_48384;
(statearr_48399[(10)] = inst_48361);

(statearr_48399[(7)] = inst_48348__$1);

return statearr_48399;
})();
var statearr_48400_48430 = state_48384__$1;
(statearr_48400_48430[(2)] = null);

(statearr_48400_48430[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48385 === (5))){
var inst_48368 = (state_48384[(2)]);
var state_48384__$1 = (function (){var statearr_48401 = state_48384;
(statearr_48401[(11)] = inst_48368);

return statearr_48401;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48384__$1,(12),dchan);
} else {
if((state_val_48385 === (14))){
var inst_48370 = (state_48384[(8)]);
var inst_48375 = cljs.core.apply.call(null,f,inst_48370);
var state_48384__$1 = state_48384;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48384__$1,(16),out,inst_48375);
} else {
if((state_val_48385 === (16))){
var inst_48377 = (state_48384[(2)]);
var state_48384__$1 = (function (){var statearr_48402 = state_48384;
(statearr_48402[(12)] = inst_48377);

return statearr_48402;
})();
var statearr_48403_48431 = state_48384__$1;
(statearr_48403_48431[(2)] = null);

(statearr_48403_48431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48385 === (10))){
var inst_48352 = (state_48384[(2)]);
var inst_48353 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_48384__$1 = (function (){var statearr_48404 = state_48384;
(statearr_48404[(13)] = inst_48352);

return statearr_48404;
})();
var statearr_48405_48432 = state_48384__$1;
(statearr_48405_48432[(2)] = inst_48353);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48384__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48385 === (8))){
var inst_48366 = (state_48384[(2)]);
var state_48384__$1 = state_48384;
var statearr_48406_48433 = state_48384__$1;
(statearr_48406_48433[(2)] = inst_48366);

(statearr_48406_48433[(1)] = (5));


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
});})(c__46399__auto___48418,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__46287__auto__,c__46399__auto___48418,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__46288__auto__ = null;
var cljs$core$async$state_machine__46288__auto____0 = (function (){
var statearr_48410 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48410[(0)] = cljs$core$async$state_machine__46288__auto__);

(statearr_48410[(1)] = (1));

return statearr_48410;
});
var cljs$core$async$state_machine__46288__auto____1 = (function (state_48384){
while(true){
var ret_value__46289__auto__ = (function (){try{while(true){
var result__46290__auto__ = switch__46287__auto__.call(null,state_48384);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46290__auto__;
}
break;
}
}catch (e48411){if((e48411 instanceof Object)){
var ex__46291__auto__ = e48411;
var statearr_48412_48434 = state_48384;
(statearr_48412_48434[(5)] = ex__46291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48384);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48411;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48435 = state_48384;
state_48384 = G__48435;
continue;
} else {
return ret_value__46289__auto__;
}
break;
}
});
cljs$core$async$state_machine__46288__auto__ = function(state_48384){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46288__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46288__auto____1.call(this,state_48384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46288__auto____0;
cljs$core$async$state_machine__46288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46288__auto____1;
return cljs$core$async$state_machine__46288__auto__;
})()
;})(switch__46287__auto__,c__46399__auto___48418,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__46401__auto__ = (function (){var statearr_48413 = f__46400__auto__.call(null);
(statearr_48413[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46399__auto___48418);

return statearr_48413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46401__auto__);
});})(c__46399__auto___48418,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args48437 = [];
var len__36896__auto___48493 = arguments.length;
var i__36897__auto___48494 = (0);
while(true){
if((i__36897__auto___48494 < len__36896__auto___48493)){
args48437.push((arguments[i__36897__auto___48494]));

var G__48495 = (i__36897__auto___48494 + (1));
i__36897__auto___48494 = G__48495;
continue;
} else {
}
break;
}

var G__48439 = args48437.length;
switch (G__48439) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48437.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__46399__auto___48497 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46399__auto___48497,out){
return (function (){
var f__46400__auto__ = (function (){var switch__46287__auto__ = ((function (c__46399__auto___48497,out){
return (function (state_48469){
var state_val_48470 = (state_48469[(1)]);
if((state_val_48470 === (7))){
var inst_48449 = (state_48469[(7)]);
var inst_48448 = (state_48469[(8)]);
var inst_48448__$1 = (state_48469[(2)]);
var inst_48449__$1 = cljs.core.nth.call(null,inst_48448__$1,(0),null);
var inst_48450 = cljs.core.nth.call(null,inst_48448__$1,(1),null);
var inst_48451 = (inst_48449__$1 == null);
var state_48469__$1 = (function (){var statearr_48471 = state_48469;
(statearr_48471[(7)] = inst_48449__$1);

(statearr_48471[(9)] = inst_48450);

(statearr_48471[(8)] = inst_48448__$1);

return statearr_48471;
})();
if(cljs.core.truth_(inst_48451)){
var statearr_48472_48498 = state_48469__$1;
(statearr_48472_48498[(1)] = (8));

} else {
var statearr_48473_48499 = state_48469__$1;
(statearr_48473_48499[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48470 === (1))){
var inst_48440 = cljs.core.vec.call(null,chs);
var inst_48441 = inst_48440;
var state_48469__$1 = (function (){var statearr_48474 = state_48469;
(statearr_48474[(10)] = inst_48441);

return statearr_48474;
})();
var statearr_48475_48500 = state_48469__$1;
(statearr_48475_48500[(2)] = null);

(statearr_48475_48500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48470 === (4))){
var inst_48441 = (state_48469[(10)]);
var state_48469__$1 = state_48469;
return cljs.core.async.ioc_alts_BANG_.call(null,state_48469__$1,(7),inst_48441);
} else {
if((state_val_48470 === (6))){
var inst_48465 = (state_48469[(2)]);
var state_48469__$1 = state_48469;
var statearr_48476_48501 = state_48469__$1;
(statearr_48476_48501[(2)] = inst_48465);

(statearr_48476_48501[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48470 === (3))){
var inst_48467 = (state_48469[(2)]);
var state_48469__$1 = state_48469;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48469__$1,inst_48467);
} else {
if((state_val_48470 === (2))){
var inst_48441 = (state_48469[(10)]);
var inst_48443 = cljs.core.count.call(null,inst_48441);
var inst_48444 = (inst_48443 > (0));
var state_48469__$1 = state_48469;
if(cljs.core.truth_(inst_48444)){
var statearr_48478_48502 = state_48469__$1;
(statearr_48478_48502[(1)] = (4));

} else {
var statearr_48479_48503 = state_48469__$1;
(statearr_48479_48503[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48470 === (11))){
var inst_48441 = (state_48469[(10)]);
var inst_48458 = (state_48469[(2)]);
var tmp48477 = inst_48441;
var inst_48441__$1 = tmp48477;
var state_48469__$1 = (function (){var statearr_48480 = state_48469;
(statearr_48480[(10)] = inst_48441__$1);

(statearr_48480[(11)] = inst_48458);

return statearr_48480;
})();
var statearr_48481_48504 = state_48469__$1;
(statearr_48481_48504[(2)] = null);

(statearr_48481_48504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48470 === (9))){
var inst_48449 = (state_48469[(7)]);
var state_48469__$1 = state_48469;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48469__$1,(11),out,inst_48449);
} else {
if((state_val_48470 === (5))){
var inst_48463 = cljs.core.async.close_BANG_.call(null,out);
var state_48469__$1 = state_48469;
var statearr_48482_48505 = state_48469__$1;
(statearr_48482_48505[(2)] = inst_48463);

(statearr_48482_48505[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48470 === (10))){
var inst_48461 = (state_48469[(2)]);
var state_48469__$1 = state_48469;
var statearr_48483_48506 = state_48469__$1;
(statearr_48483_48506[(2)] = inst_48461);

(statearr_48483_48506[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48470 === (8))){
var inst_48449 = (state_48469[(7)]);
var inst_48441 = (state_48469[(10)]);
var inst_48450 = (state_48469[(9)]);
var inst_48448 = (state_48469[(8)]);
var inst_48453 = (function (){var cs = inst_48441;
var vec__48446 = inst_48448;
var v = inst_48449;
var c = inst_48450;
return ((function (cs,vec__48446,v,c,inst_48449,inst_48441,inst_48450,inst_48448,state_val_48470,c__46399__auto___48497,out){
return (function (p1__48436_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__48436_SHARP_);
});
;})(cs,vec__48446,v,c,inst_48449,inst_48441,inst_48450,inst_48448,state_val_48470,c__46399__auto___48497,out))
})();
var inst_48454 = cljs.core.filterv.call(null,inst_48453,inst_48441);
var inst_48441__$1 = inst_48454;
var state_48469__$1 = (function (){var statearr_48484 = state_48469;
(statearr_48484[(10)] = inst_48441__$1);

return statearr_48484;
})();
var statearr_48485_48507 = state_48469__$1;
(statearr_48485_48507[(2)] = null);

(statearr_48485_48507[(1)] = (2));


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
});})(c__46399__auto___48497,out))
;
return ((function (switch__46287__auto__,c__46399__auto___48497,out){
return (function() {
var cljs$core$async$state_machine__46288__auto__ = null;
var cljs$core$async$state_machine__46288__auto____0 = (function (){
var statearr_48489 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48489[(0)] = cljs$core$async$state_machine__46288__auto__);

(statearr_48489[(1)] = (1));

return statearr_48489;
});
var cljs$core$async$state_machine__46288__auto____1 = (function (state_48469){
while(true){
var ret_value__46289__auto__ = (function (){try{while(true){
var result__46290__auto__ = switch__46287__auto__.call(null,state_48469);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46290__auto__;
}
break;
}
}catch (e48490){if((e48490 instanceof Object)){
var ex__46291__auto__ = e48490;
var statearr_48491_48508 = state_48469;
(statearr_48491_48508[(5)] = ex__46291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48469);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48490;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48509 = state_48469;
state_48469 = G__48509;
continue;
} else {
return ret_value__46289__auto__;
}
break;
}
});
cljs$core$async$state_machine__46288__auto__ = function(state_48469){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46288__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46288__auto____1.call(this,state_48469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46288__auto____0;
cljs$core$async$state_machine__46288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46288__auto____1;
return cljs$core$async$state_machine__46288__auto__;
})()
;})(switch__46287__auto__,c__46399__auto___48497,out))
})();
var state__46401__auto__ = (function (){var statearr_48492 = f__46400__auto__.call(null);
(statearr_48492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46399__auto___48497);

return statearr_48492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46401__auto__);
});})(c__46399__auto___48497,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args48510 = [];
var len__36896__auto___48559 = arguments.length;
var i__36897__auto___48560 = (0);
while(true){
if((i__36897__auto___48560 < len__36896__auto___48559)){
args48510.push((arguments[i__36897__auto___48560]));

var G__48561 = (i__36897__auto___48560 + (1));
i__36897__auto___48560 = G__48561;
continue;
} else {
}
break;
}

var G__48512 = args48510.length;
switch (G__48512) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48510.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__46399__auto___48563 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46399__auto___48563,out){
return (function (){
var f__46400__auto__ = (function (){var switch__46287__auto__ = ((function (c__46399__auto___48563,out){
return (function (state_48536){
var state_val_48537 = (state_48536[(1)]);
if((state_val_48537 === (7))){
var inst_48518 = (state_48536[(7)]);
var inst_48518__$1 = (state_48536[(2)]);
var inst_48519 = (inst_48518__$1 == null);
var inst_48520 = cljs.core.not.call(null,inst_48519);
var state_48536__$1 = (function (){var statearr_48538 = state_48536;
(statearr_48538[(7)] = inst_48518__$1);

return statearr_48538;
})();
if(inst_48520){
var statearr_48539_48564 = state_48536__$1;
(statearr_48539_48564[(1)] = (8));

} else {
var statearr_48540_48565 = state_48536__$1;
(statearr_48540_48565[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48537 === (1))){
var inst_48513 = (0);
var state_48536__$1 = (function (){var statearr_48541 = state_48536;
(statearr_48541[(8)] = inst_48513);

return statearr_48541;
})();
var statearr_48542_48566 = state_48536__$1;
(statearr_48542_48566[(2)] = null);

(statearr_48542_48566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48537 === (4))){
var state_48536__$1 = state_48536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48536__$1,(7),ch);
} else {
if((state_val_48537 === (6))){
var inst_48531 = (state_48536[(2)]);
var state_48536__$1 = state_48536;
var statearr_48543_48567 = state_48536__$1;
(statearr_48543_48567[(2)] = inst_48531);

(statearr_48543_48567[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48537 === (3))){
var inst_48533 = (state_48536[(2)]);
var inst_48534 = cljs.core.async.close_BANG_.call(null,out);
var state_48536__$1 = (function (){var statearr_48544 = state_48536;
(statearr_48544[(9)] = inst_48533);

return statearr_48544;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48536__$1,inst_48534);
} else {
if((state_val_48537 === (2))){
var inst_48513 = (state_48536[(8)]);
var inst_48515 = (inst_48513 < n);
var state_48536__$1 = state_48536;
if(cljs.core.truth_(inst_48515)){
var statearr_48545_48568 = state_48536__$1;
(statearr_48545_48568[(1)] = (4));

} else {
var statearr_48546_48569 = state_48536__$1;
(statearr_48546_48569[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48537 === (11))){
var inst_48513 = (state_48536[(8)]);
var inst_48523 = (state_48536[(2)]);
var inst_48524 = (inst_48513 + (1));
var inst_48513__$1 = inst_48524;
var state_48536__$1 = (function (){var statearr_48547 = state_48536;
(statearr_48547[(10)] = inst_48523);

(statearr_48547[(8)] = inst_48513__$1);

return statearr_48547;
})();
var statearr_48548_48570 = state_48536__$1;
(statearr_48548_48570[(2)] = null);

(statearr_48548_48570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48537 === (9))){
var state_48536__$1 = state_48536;
var statearr_48549_48571 = state_48536__$1;
(statearr_48549_48571[(2)] = null);

(statearr_48549_48571[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48537 === (5))){
var state_48536__$1 = state_48536;
var statearr_48550_48572 = state_48536__$1;
(statearr_48550_48572[(2)] = null);

(statearr_48550_48572[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48537 === (10))){
var inst_48528 = (state_48536[(2)]);
var state_48536__$1 = state_48536;
var statearr_48551_48573 = state_48536__$1;
(statearr_48551_48573[(2)] = inst_48528);

(statearr_48551_48573[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48537 === (8))){
var inst_48518 = (state_48536[(7)]);
var state_48536__$1 = state_48536;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48536__$1,(11),out,inst_48518);
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
});})(c__46399__auto___48563,out))
;
return ((function (switch__46287__auto__,c__46399__auto___48563,out){
return (function() {
var cljs$core$async$state_machine__46288__auto__ = null;
var cljs$core$async$state_machine__46288__auto____0 = (function (){
var statearr_48555 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48555[(0)] = cljs$core$async$state_machine__46288__auto__);

(statearr_48555[(1)] = (1));

return statearr_48555;
});
var cljs$core$async$state_machine__46288__auto____1 = (function (state_48536){
while(true){
var ret_value__46289__auto__ = (function (){try{while(true){
var result__46290__auto__ = switch__46287__auto__.call(null,state_48536);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46290__auto__;
}
break;
}
}catch (e48556){if((e48556 instanceof Object)){
var ex__46291__auto__ = e48556;
var statearr_48557_48574 = state_48536;
(statearr_48557_48574[(5)] = ex__46291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48536);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48556;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48575 = state_48536;
state_48536 = G__48575;
continue;
} else {
return ret_value__46289__auto__;
}
break;
}
});
cljs$core$async$state_machine__46288__auto__ = function(state_48536){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46288__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46288__auto____1.call(this,state_48536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46288__auto____0;
cljs$core$async$state_machine__46288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46288__auto____1;
return cljs$core$async$state_machine__46288__auto__;
})()
;})(switch__46287__auto__,c__46399__auto___48563,out))
})();
var state__46401__auto__ = (function (){var statearr_48558 = f__46400__auto__.call(null);
(statearr_48558[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46399__auto___48563);

return statearr_48558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46401__auto__);
});})(c__46399__auto___48563,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async48583 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48583 = (function (map_LT_,f,ch,meta48584){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta48584 = meta48584;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async48583.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48585,meta48584__$1){
var self__ = this;
var _48585__$1 = this;
return (new cljs.core.async.t_cljs$core$async48583(self__.map_LT_,self__.f,self__.ch,meta48584__$1));
});

cljs.core.async.t_cljs$core$async48583.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48585){
var self__ = this;
var _48585__$1 = this;
return self__.meta48584;
});

cljs.core.async.t_cljs$core$async48583.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async48583.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48583.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48583.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async48583.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async48586 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48586 = (function (map_LT_,f,ch,meta48584,_,fn1,meta48587){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta48584 = meta48584;
this._ = _;
this.fn1 = fn1;
this.meta48587 = meta48587;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async48586.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_48588,meta48587__$1){
var self__ = this;
var _48588__$1 = this;
return (new cljs.core.async.t_cljs$core$async48586(self__.map_LT_,self__.f,self__.ch,self__.meta48584,self__._,self__.fn1,meta48587__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async48586.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_48588){
var self__ = this;
var _48588__$1 = this;
return self__.meta48587;
});})(___$1))
;

cljs.core.async.t_cljs$core$async48586.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async48586.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async48586.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async48586.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__48576_SHARP_){
return f1.call(null,(((p1__48576_SHARP_ == null))?null:self__.f.call(null,p1__48576_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async48586.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48584","meta48584",1660033797,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async48583","cljs.core.async/t_cljs$core$async48583",-1425613533,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta48587","meta48587",-1683261889,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async48586.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48586.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48586";

cljs.core.async.t_cljs$core$async48586.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__36436__auto__,writer__36437__auto__,opt__36438__auto__){
return cljs.core._write.call(null,writer__36437__auto__,"cljs.core.async/t_cljs$core$async48586");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async48586 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48586(map_LT___$1,f__$1,ch__$1,meta48584__$1,___$2,fn1__$1,meta48587){
return (new cljs.core.async.t_cljs$core$async48586(map_LT___$1,f__$1,ch__$1,meta48584__$1,___$2,fn1__$1,meta48587));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async48586(self__.map_LT_,self__.f,self__.ch,self__.meta48584,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__35826__auto__ = ret;
if(cljs.core.truth_(and__35826__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__35826__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async48583.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async48583.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async48583.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48584","meta48584",1660033797,null)], null);
});

cljs.core.async.t_cljs$core$async48583.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48583.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48583";

cljs.core.async.t_cljs$core$async48583.cljs$lang$ctorPrWriter = (function (this__36436__auto__,writer__36437__auto__,opt__36438__auto__){
return cljs.core._write.call(null,writer__36437__auto__,"cljs.core.async/t_cljs$core$async48583");
});

cljs.core.async.__GT_t_cljs$core$async48583 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48583(map_LT___$1,f__$1,ch__$1,meta48584){
return (new cljs.core.async.t_cljs$core$async48583(map_LT___$1,f__$1,ch__$1,meta48584));
});

}

return (new cljs.core.async.t_cljs$core$async48583(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async48592 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48592 = (function (map_GT_,f,ch,meta48593){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta48593 = meta48593;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async48592.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48594,meta48593__$1){
var self__ = this;
var _48594__$1 = this;
return (new cljs.core.async.t_cljs$core$async48592(self__.map_GT_,self__.f,self__.ch,meta48593__$1));
});

cljs.core.async.t_cljs$core$async48592.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48594){
var self__ = this;
var _48594__$1 = this;
return self__.meta48593;
});

cljs.core.async.t_cljs$core$async48592.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async48592.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48592.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async48592.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async48592.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async48592.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async48592.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48593","meta48593",-691466821,null)], null);
});

cljs.core.async.t_cljs$core$async48592.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48592.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48592";

cljs.core.async.t_cljs$core$async48592.cljs$lang$ctorPrWriter = (function (this__36436__auto__,writer__36437__auto__,opt__36438__auto__){
return cljs.core._write.call(null,writer__36437__auto__,"cljs.core.async/t_cljs$core$async48592");
});

cljs.core.async.__GT_t_cljs$core$async48592 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async48592(map_GT___$1,f__$1,ch__$1,meta48593){
return (new cljs.core.async.t_cljs$core$async48592(map_GT___$1,f__$1,ch__$1,meta48593));
});

}

return (new cljs.core.async.t_cljs$core$async48592(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async48598 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48598 = (function (filter_GT_,p,ch,meta48599){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta48599 = meta48599;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async48598.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48600,meta48599__$1){
var self__ = this;
var _48600__$1 = this;
return (new cljs.core.async.t_cljs$core$async48598(self__.filter_GT_,self__.p,self__.ch,meta48599__$1));
});

cljs.core.async.t_cljs$core$async48598.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48600){
var self__ = this;
var _48600__$1 = this;
return self__.meta48599;
});

cljs.core.async.t_cljs$core$async48598.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async48598.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48598.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48598.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async48598.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async48598.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async48598.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async48598.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48599","meta48599",2086731698,null)], null);
});

cljs.core.async.t_cljs$core$async48598.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48598.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48598";

cljs.core.async.t_cljs$core$async48598.cljs$lang$ctorPrWriter = (function (this__36436__auto__,writer__36437__auto__,opt__36438__auto__){
return cljs.core._write.call(null,writer__36437__auto__,"cljs.core.async/t_cljs$core$async48598");
});

cljs.core.async.__GT_t_cljs$core$async48598 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async48598(filter_GT___$1,p__$1,ch__$1,meta48599){
return (new cljs.core.async.t_cljs$core$async48598(filter_GT___$1,p__$1,ch__$1,meta48599));
});

}

return (new cljs.core.async.t_cljs$core$async48598(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args48601 = [];
var len__36896__auto___48645 = arguments.length;
var i__36897__auto___48646 = (0);
while(true){
if((i__36897__auto___48646 < len__36896__auto___48645)){
args48601.push((arguments[i__36897__auto___48646]));

var G__48647 = (i__36897__auto___48646 + (1));
i__36897__auto___48646 = G__48647;
continue;
} else {
}
break;
}

var G__48603 = args48601.length;
switch (G__48603) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48601.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__46399__auto___48649 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46399__auto___48649,out){
return (function (){
var f__46400__auto__ = (function (){var switch__46287__auto__ = ((function (c__46399__auto___48649,out){
return (function (state_48624){
var state_val_48625 = (state_48624[(1)]);
if((state_val_48625 === (7))){
var inst_48620 = (state_48624[(2)]);
var state_48624__$1 = state_48624;
var statearr_48626_48650 = state_48624__$1;
(statearr_48626_48650[(2)] = inst_48620);

(statearr_48626_48650[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48625 === (1))){
var state_48624__$1 = state_48624;
var statearr_48627_48651 = state_48624__$1;
(statearr_48627_48651[(2)] = null);

(statearr_48627_48651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48625 === (4))){
var inst_48606 = (state_48624[(7)]);
var inst_48606__$1 = (state_48624[(2)]);
var inst_48607 = (inst_48606__$1 == null);
var state_48624__$1 = (function (){var statearr_48628 = state_48624;
(statearr_48628[(7)] = inst_48606__$1);

return statearr_48628;
})();
if(cljs.core.truth_(inst_48607)){
var statearr_48629_48652 = state_48624__$1;
(statearr_48629_48652[(1)] = (5));

} else {
var statearr_48630_48653 = state_48624__$1;
(statearr_48630_48653[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48625 === (6))){
var inst_48606 = (state_48624[(7)]);
var inst_48611 = p.call(null,inst_48606);
var state_48624__$1 = state_48624;
if(cljs.core.truth_(inst_48611)){
var statearr_48631_48654 = state_48624__$1;
(statearr_48631_48654[(1)] = (8));

} else {
var statearr_48632_48655 = state_48624__$1;
(statearr_48632_48655[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48625 === (3))){
var inst_48622 = (state_48624[(2)]);
var state_48624__$1 = state_48624;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48624__$1,inst_48622);
} else {
if((state_val_48625 === (2))){
var state_48624__$1 = state_48624;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48624__$1,(4),ch);
} else {
if((state_val_48625 === (11))){
var inst_48614 = (state_48624[(2)]);
var state_48624__$1 = state_48624;
var statearr_48633_48656 = state_48624__$1;
(statearr_48633_48656[(2)] = inst_48614);

(statearr_48633_48656[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48625 === (9))){
var state_48624__$1 = state_48624;
var statearr_48634_48657 = state_48624__$1;
(statearr_48634_48657[(2)] = null);

(statearr_48634_48657[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48625 === (5))){
var inst_48609 = cljs.core.async.close_BANG_.call(null,out);
var state_48624__$1 = state_48624;
var statearr_48635_48658 = state_48624__$1;
(statearr_48635_48658[(2)] = inst_48609);

(statearr_48635_48658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48625 === (10))){
var inst_48617 = (state_48624[(2)]);
var state_48624__$1 = (function (){var statearr_48636 = state_48624;
(statearr_48636[(8)] = inst_48617);

return statearr_48636;
})();
var statearr_48637_48659 = state_48624__$1;
(statearr_48637_48659[(2)] = null);

(statearr_48637_48659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48625 === (8))){
var inst_48606 = (state_48624[(7)]);
var state_48624__$1 = state_48624;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48624__$1,(11),out,inst_48606);
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
});})(c__46399__auto___48649,out))
;
return ((function (switch__46287__auto__,c__46399__auto___48649,out){
return (function() {
var cljs$core$async$state_machine__46288__auto__ = null;
var cljs$core$async$state_machine__46288__auto____0 = (function (){
var statearr_48641 = [null,null,null,null,null,null,null,null,null];
(statearr_48641[(0)] = cljs$core$async$state_machine__46288__auto__);

(statearr_48641[(1)] = (1));

return statearr_48641;
});
var cljs$core$async$state_machine__46288__auto____1 = (function (state_48624){
while(true){
var ret_value__46289__auto__ = (function (){try{while(true){
var result__46290__auto__ = switch__46287__auto__.call(null,state_48624);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46290__auto__;
}
break;
}
}catch (e48642){if((e48642 instanceof Object)){
var ex__46291__auto__ = e48642;
var statearr_48643_48660 = state_48624;
(statearr_48643_48660[(5)] = ex__46291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48624);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48642;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48661 = state_48624;
state_48624 = G__48661;
continue;
} else {
return ret_value__46289__auto__;
}
break;
}
});
cljs$core$async$state_machine__46288__auto__ = function(state_48624){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46288__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46288__auto____1.call(this,state_48624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46288__auto____0;
cljs$core$async$state_machine__46288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46288__auto____1;
return cljs$core$async$state_machine__46288__auto__;
})()
;})(switch__46287__auto__,c__46399__auto___48649,out))
})();
var state__46401__auto__ = (function (){var statearr_48644 = f__46400__auto__.call(null);
(statearr_48644[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46399__auto___48649);

return statearr_48644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46401__auto__);
});})(c__46399__auto___48649,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args48662 = [];
var len__36896__auto___48665 = arguments.length;
var i__36897__auto___48666 = (0);
while(true){
if((i__36897__auto___48666 < len__36896__auto___48665)){
args48662.push((arguments[i__36897__auto___48666]));

var G__48667 = (i__36897__auto___48666 + (1));
i__36897__auto___48666 = G__48667;
continue;
} else {
}
break;
}

var G__48664 = args48662.length;
switch (G__48664) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48662.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__46399__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46399__auto__){
return (function (){
var f__46400__auto__ = (function (){var switch__46287__auto__ = ((function (c__46399__auto__){
return (function (state_48834){
var state_val_48835 = (state_48834[(1)]);
if((state_val_48835 === (7))){
var inst_48830 = (state_48834[(2)]);
var state_48834__$1 = state_48834;
var statearr_48836_48877 = state_48834__$1;
(statearr_48836_48877[(2)] = inst_48830);

(statearr_48836_48877[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48835 === (20))){
var inst_48800 = (state_48834[(7)]);
var inst_48811 = (state_48834[(2)]);
var inst_48812 = cljs.core.next.call(null,inst_48800);
var inst_48786 = inst_48812;
var inst_48787 = null;
var inst_48788 = (0);
var inst_48789 = (0);
var state_48834__$1 = (function (){var statearr_48837 = state_48834;
(statearr_48837[(8)] = inst_48788);

(statearr_48837[(9)] = inst_48789);

(statearr_48837[(10)] = inst_48811);

(statearr_48837[(11)] = inst_48786);

(statearr_48837[(12)] = inst_48787);

return statearr_48837;
})();
var statearr_48838_48878 = state_48834__$1;
(statearr_48838_48878[(2)] = null);

(statearr_48838_48878[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48835 === (1))){
var state_48834__$1 = state_48834;
var statearr_48839_48879 = state_48834__$1;
(statearr_48839_48879[(2)] = null);

(statearr_48839_48879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48835 === (4))){
var inst_48775 = (state_48834[(13)]);
var inst_48775__$1 = (state_48834[(2)]);
var inst_48776 = (inst_48775__$1 == null);
var state_48834__$1 = (function (){var statearr_48840 = state_48834;
(statearr_48840[(13)] = inst_48775__$1);

return statearr_48840;
})();
if(cljs.core.truth_(inst_48776)){
var statearr_48841_48880 = state_48834__$1;
(statearr_48841_48880[(1)] = (5));

} else {
var statearr_48842_48881 = state_48834__$1;
(statearr_48842_48881[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48835 === (15))){
var state_48834__$1 = state_48834;
var statearr_48846_48882 = state_48834__$1;
(statearr_48846_48882[(2)] = null);

(statearr_48846_48882[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48835 === (21))){
var state_48834__$1 = state_48834;
var statearr_48847_48883 = state_48834__$1;
(statearr_48847_48883[(2)] = null);

(statearr_48847_48883[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48835 === (13))){
var inst_48788 = (state_48834[(8)]);
var inst_48789 = (state_48834[(9)]);
var inst_48786 = (state_48834[(11)]);
var inst_48787 = (state_48834[(12)]);
var inst_48796 = (state_48834[(2)]);
var inst_48797 = (inst_48789 + (1));
var tmp48843 = inst_48788;
var tmp48844 = inst_48786;
var tmp48845 = inst_48787;
var inst_48786__$1 = tmp48844;
var inst_48787__$1 = tmp48845;
var inst_48788__$1 = tmp48843;
var inst_48789__$1 = inst_48797;
var state_48834__$1 = (function (){var statearr_48848 = state_48834;
(statearr_48848[(14)] = inst_48796);

(statearr_48848[(8)] = inst_48788__$1);

(statearr_48848[(9)] = inst_48789__$1);

(statearr_48848[(11)] = inst_48786__$1);

(statearr_48848[(12)] = inst_48787__$1);

return statearr_48848;
})();
var statearr_48849_48884 = state_48834__$1;
(statearr_48849_48884[(2)] = null);

(statearr_48849_48884[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48835 === (22))){
var state_48834__$1 = state_48834;
var statearr_48850_48885 = state_48834__$1;
(statearr_48850_48885[(2)] = null);

(statearr_48850_48885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48835 === (6))){
var inst_48775 = (state_48834[(13)]);
var inst_48784 = f.call(null,inst_48775);
var inst_48785 = cljs.core.seq.call(null,inst_48784);
var inst_48786 = inst_48785;
var inst_48787 = null;
var inst_48788 = (0);
var inst_48789 = (0);
var state_48834__$1 = (function (){var statearr_48851 = state_48834;
(statearr_48851[(8)] = inst_48788);

(statearr_48851[(9)] = inst_48789);

(statearr_48851[(11)] = inst_48786);

(statearr_48851[(12)] = inst_48787);

return statearr_48851;
})();
var statearr_48852_48886 = state_48834__$1;
(statearr_48852_48886[(2)] = null);

(statearr_48852_48886[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48835 === (17))){
var inst_48800 = (state_48834[(7)]);
var inst_48804 = cljs.core.chunk_first.call(null,inst_48800);
var inst_48805 = cljs.core.chunk_rest.call(null,inst_48800);
var inst_48806 = cljs.core.count.call(null,inst_48804);
var inst_48786 = inst_48805;
var inst_48787 = inst_48804;
var inst_48788 = inst_48806;
var inst_48789 = (0);
var state_48834__$1 = (function (){var statearr_48853 = state_48834;
(statearr_48853[(8)] = inst_48788);

(statearr_48853[(9)] = inst_48789);

(statearr_48853[(11)] = inst_48786);

(statearr_48853[(12)] = inst_48787);

return statearr_48853;
})();
var statearr_48854_48887 = state_48834__$1;
(statearr_48854_48887[(2)] = null);

(statearr_48854_48887[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48835 === (3))){
var inst_48832 = (state_48834[(2)]);
var state_48834__$1 = state_48834;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48834__$1,inst_48832);
} else {
if((state_val_48835 === (12))){
var inst_48820 = (state_48834[(2)]);
var state_48834__$1 = state_48834;
var statearr_48855_48888 = state_48834__$1;
(statearr_48855_48888[(2)] = inst_48820);

(statearr_48855_48888[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48835 === (2))){
var state_48834__$1 = state_48834;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48834__$1,(4),in$);
} else {
if((state_val_48835 === (23))){
var inst_48828 = (state_48834[(2)]);
var state_48834__$1 = state_48834;
var statearr_48856_48889 = state_48834__$1;
(statearr_48856_48889[(2)] = inst_48828);

(statearr_48856_48889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48835 === (19))){
var inst_48815 = (state_48834[(2)]);
var state_48834__$1 = state_48834;
var statearr_48857_48890 = state_48834__$1;
(statearr_48857_48890[(2)] = inst_48815);

(statearr_48857_48890[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48835 === (11))){
var inst_48786 = (state_48834[(11)]);
var inst_48800 = (state_48834[(7)]);
var inst_48800__$1 = cljs.core.seq.call(null,inst_48786);
var state_48834__$1 = (function (){var statearr_48858 = state_48834;
(statearr_48858[(7)] = inst_48800__$1);

return statearr_48858;
})();
if(inst_48800__$1){
var statearr_48859_48891 = state_48834__$1;
(statearr_48859_48891[(1)] = (14));

} else {
var statearr_48860_48892 = state_48834__$1;
(statearr_48860_48892[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48835 === (9))){
var inst_48822 = (state_48834[(2)]);
var inst_48823 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_48834__$1 = (function (){var statearr_48861 = state_48834;
(statearr_48861[(15)] = inst_48822);

return statearr_48861;
})();
if(cljs.core.truth_(inst_48823)){
var statearr_48862_48893 = state_48834__$1;
(statearr_48862_48893[(1)] = (21));

} else {
var statearr_48863_48894 = state_48834__$1;
(statearr_48863_48894[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48835 === (5))){
var inst_48778 = cljs.core.async.close_BANG_.call(null,out);
var state_48834__$1 = state_48834;
var statearr_48864_48895 = state_48834__$1;
(statearr_48864_48895[(2)] = inst_48778);

(statearr_48864_48895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48835 === (14))){
var inst_48800 = (state_48834[(7)]);
var inst_48802 = cljs.core.chunked_seq_QMARK_.call(null,inst_48800);
var state_48834__$1 = state_48834;
if(inst_48802){
var statearr_48865_48896 = state_48834__$1;
(statearr_48865_48896[(1)] = (17));

} else {
var statearr_48866_48897 = state_48834__$1;
(statearr_48866_48897[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48835 === (16))){
var inst_48818 = (state_48834[(2)]);
var state_48834__$1 = state_48834;
var statearr_48867_48898 = state_48834__$1;
(statearr_48867_48898[(2)] = inst_48818);

(statearr_48867_48898[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48835 === (10))){
var inst_48789 = (state_48834[(9)]);
var inst_48787 = (state_48834[(12)]);
var inst_48794 = cljs.core._nth.call(null,inst_48787,inst_48789);
var state_48834__$1 = state_48834;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48834__$1,(13),out,inst_48794);
} else {
if((state_val_48835 === (18))){
var inst_48800 = (state_48834[(7)]);
var inst_48809 = cljs.core.first.call(null,inst_48800);
var state_48834__$1 = state_48834;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48834__$1,(20),out,inst_48809);
} else {
if((state_val_48835 === (8))){
var inst_48788 = (state_48834[(8)]);
var inst_48789 = (state_48834[(9)]);
var inst_48791 = (inst_48789 < inst_48788);
var inst_48792 = inst_48791;
var state_48834__$1 = state_48834;
if(cljs.core.truth_(inst_48792)){
var statearr_48868_48899 = state_48834__$1;
(statearr_48868_48899[(1)] = (10));

} else {
var statearr_48869_48900 = state_48834__$1;
(statearr_48869_48900[(1)] = (11));

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
}
}
}
}
}
}
});})(c__46399__auto__))
;
return ((function (switch__46287__auto__,c__46399__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__46288__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__46288__auto____0 = (function (){
var statearr_48873 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48873[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__46288__auto__);

(statearr_48873[(1)] = (1));

return statearr_48873;
});
var cljs$core$async$mapcat_STAR__$_state_machine__46288__auto____1 = (function (state_48834){
while(true){
var ret_value__46289__auto__ = (function (){try{while(true){
var result__46290__auto__ = switch__46287__auto__.call(null,state_48834);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46290__auto__;
}
break;
}
}catch (e48874){if((e48874 instanceof Object)){
var ex__46291__auto__ = e48874;
var statearr_48875_48901 = state_48834;
(statearr_48875_48901[(5)] = ex__46291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48834);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48874;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48902 = state_48834;
state_48834 = G__48902;
continue;
} else {
return ret_value__46289__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__46288__auto__ = function(state_48834){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__46288__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__46288__auto____1.call(this,state_48834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__46288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__46288__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__46288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__46288__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__46288__auto__;
})()
;})(switch__46287__auto__,c__46399__auto__))
})();
var state__46401__auto__ = (function (){var statearr_48876 = f__46400__auto__.call(null);
(statearr_48876[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46399__auto__);

return statearr_48876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46401__auto__);
});})(c__46399__auto__))
);

return c__46399__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args48903 = [];
var len__36896__auto___48906 = arguments.length;
var i__36897__auto___48907 = (0);
while(true){
if((i__36897__auto___48907 < len__36896__auto___48906)){
args48903.push((arguments[i__36897__auto___48907]));

var G__48908 = (i__36897__auto___48907 + (1));
i__36897__auto___48907 = G__48908;
continue;
} else {
}
break;
}

var G__48905 = args48903.length;
switch (G__48905) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48903.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args48910 = [];
var len__36896__auto___48913 = arguments.length;
var i__36897__auto___48914 = (0);
while(true){
if((i__36897__auto___48914 < len__36896__auto___48913)){
args48910.push((arguments[i__36897__auto___48914]));

var G__48915 = (i__36897__auto___48914 + (1));
i__36897__auto___48914 = G__48915;
continue;
} else {
}
break;
}

var G__48912 = args48910.length;
switch (G__48912) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48910.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args48917 = [];
var len__36896__auto___48968 = arguments.length;
var i__36897__auto___48969 = (0);
while(true){
if((i__36897__auto___48969 < len__36896__auto___48968)){
args48917.push((arguments[i__36897__auto___48969]));

var G__48970 = (i__36897__auto___48969 + (1));
i__36897__auto___48969 = G__48970;
continue;
} else {
}
break;
}

var G__48919 = args48917.length;
switch (G__48919) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48917.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__46399__auto___48972 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46399__auto___48972,out){
return (function (){
var f__46400__auto__ = (function (){var switch__46287__auto__ = ((function (c__46399__auto___48972,out){
return (function (state_48943){
var state_val_48944 = (state_48943[(1)]);
if((state_val_48944 === (7))){
var inst_48938 = (state_48943[(2)]);
var state_48943__$1 = state_48943;
var statearr_48945_48973 = state_48943__$1;
(statearr_48945_48973[(2)] = inst_48938);

(statearr_48945_48973[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48944 === (1))){
var inst_48920 = null;
var state_48943__$1 = (function (){var statearr_48946 = state_48943;
(statearr_48946[(7)] = inst_48920);

return statearr_48946;
})();
var statearr_48947_48974 = state_48943__$1;
(statearr_48947_48974[(2)] = null);

(statearr_48947_48974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48944 === (4))){
var inst_48923 = (state_48943[(8)]);
var inst_48923__$1 = (state_48943[(2)]);
var inst_48924 = (inst_48923__$1 == null);
var inst_48925 = cljs.core.not.call(null,inst_48924);
var state_48943__$1 = (function (){var statearr_48948 = state_48943;
(statearr_48948[(8)] = inst_48923__$1);

return statearr_48948;
})();
if(inst_48925){
var statearr_48949_48975 = state_48943__$1;
(statearr_48949_48975[(1)] = (5));

} else {
var statearr_48950_48976 = state_48943__$1;
(statearr_48950_48976[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48944 === (6))){
var state_48943__$1 = state_48943;
var statearr_48951_48977 = state_48943__$1;
(statearr_48951_48977[(2)] = null);

(statearr_48951_48977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48944 === (3))){
var inst_48940 = (state_48943[(2)]);
var inst_48941 = cljs.core.async.close_BANG_.call(null,out);
var state_48943__$1 = (function (){var statearr_48952 = state_48943;
(statearr_48952[(9)] = inst_48940);

return statearr_48952;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48943__$1,inst_48941);
} else {
if((state_val_48944 === (2))){
var state_48943__$1 = state_48943;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48943__$1,(4),ch);
} else {
if((state_val_48944 === (11))){
var inst_48923 = (state_48943[(8)]);
var inst_48932 = (state_48943[(2)]);
var inst_48920 = inst_48923;
var state_48943__$1 = (function (){var statearr_48953 = state_48943;
(statearr_48953[(10)] = inst_48932);

(statearr_48953[(7)] = inst_48920);

return statearr_48953;
})();
var statearr_48954_48978 = state_48943__$1;
(statearr_48954_48978[(2)] = null);

(statearr_48954_48978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48944 === (9))){
var inst_48923 = (state_48943[(8)]);
var state_48943__$1 = state_48943;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48943__$1,(11),out,inst_48923);
} else {
if((state_val_48944 === (5))){
var inst_48923 = (state_48943[(8)]);
var inst_48920 = (state_48943[(7)]);
var inst_48927 = cljs.core._EQ_.call(null,inst_48923,inst_48920);
var state_48943__$1 = state_48943;
if(inst_48927){
var statearr_48956_48979 = state_48943__$1;
(statearr_48956_48979[(1)] = (8));

} else {
var statearr_48957_48980 = state_48943__$1;
(statearr_48957_48980[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48944 === (10))){
var inst_48935 = (state_48943[(2)]);
var state_48943__$1 = state_48943;
var statearr_48958_48981 = state_48943__$1;
(statearr_48958_48981[(2)] = inst_48935);

(statearr_48958_48981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48944 === (8))){
var inst_48920 = (state_48943[(7)]);
var tmp48955 = inst_48920;
var inst_48920__$1 = tmp48955;
var state_48943__$1 = (function (){var statearr_48959 = state_48943;
(statearr_48959[(7)] = inst_48920__$1);

return statearr_48959;
})();
var statearr_48960_48982 = state_48943__$1;
(statearr_48960_48982[(2)] = null);

(statearr_48960_48982[(1)] = (2));


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
});})(c__46399__auto___48972,out))
;
return ((function (switch__46287__auto__,c__46399__auto___48972,out){
return (function() {
var cljs$core$async$state_machine__46288__auto__ = null;
var cljs$core$async$state_machine__46288__auto____0 = (function (){
var statearr_48964 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48964[(0)] = cljs$core$async$state_machine__46288__auto__);

(statearr_48964[(1)] = (1));

return statearr_48964;
});
var cljs$core$async$state_machine__46288__auto____1 = (function (state_48943){
while(true){
var ret_value__46289__auto__ = (function (){try{while(true){
var result__46290__auto__ = switch__46287__auto__.call(null,state_48943);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46290__auto__;
}
break;
}
}catch (e48965){if((e48965 instanceof Object)){
var ex__46291__auto__ = e48965;
var statearr_48966_48983 = state_48943;
(statearr_48966_48983[(5)] = ex__46291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48943);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48965;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48984 = state_48943;
state_48943 = G__48984;
continue;
} else {
return ret_value__46289__auto__;
}
break;
}
});
cljs$core$async$state_machine__46288__auto__ = function(state_48943){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46288__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46288__auto____1.call(this,state_48943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46288__auto____0;
cljs$core$async$state_machine__46288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46288__auto____1;
return cljs$core$async$state_machine__46288__auto__;
})()
;})(switch__46287__auto__,c__46399__auto___48972,out))
})();
var state__46401__auto__ = (function (){var statearr_48967 = f__46400__auto__.call(null);
(statearr_48967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46399__auto___48972);

return statearr_48967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46401__auto__);
});})(c__46399__auto___48972,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args48985 = [];
var len__36896__auto___49055 = arguments.length;
var i__36897__auto___49056 = (0);
while(true){
if((i__36897__auto___49056 < len__36896__auto___49055)){
args48985.push((arguments[i__36897__auto___49056]));

var G__49057 = (i__36897__auto___49056 + (1));
i__36897__auto___49056 = G__49057;
continue;
} else {
}
break;
}

var G__48987 = args48985.length;
switch (G__48987) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48985.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__46399__auto___49059 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46399__auto___49059,out){
return (function (){
var f__46400__auto__ = (function (){var switch__46287__auto__ = ((function (c__46399__auto___49059,out){
return (function (state_49025){
var state_val_49026 = (state_49025[(1)]);
if((state_val_49026 === (7))){
var inst_49021 = (state_49025[(2)]);
var state_49025__$1 = state_49025;
var statearr_49027_49060 = state_49025__$1;
(statearr_49027_49060[(2)] = inst_49021);

(statearr_49027_49060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49026 === (1))){
var inst_48988 = (new Array(n));
var inst_48989 = inst_48988;
var inst_48990 = (0);
var state_49025__$1 = (function (){var statearr_49028 = state_49025;
(statearr_49028[(7)] = inst_48989);

(statearr_49028[(8)] = inst_48990);

return statearr_49028;
})();
var statearr_49029_49061 = state_49025__$1;
(statearr_49029_49061[(2)] = null);

(statearr_49029_49061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49026 === (4))){
var inst_48993 = (state_49025[(9)]);
var inst_48993__$1 = (state_49025[(2)]);
var inst_48994 = (inst_48993__$1 == null);
var inst_48995 = cljs.core.not.call(null,inst_48994);
var state_49025__$1 = (function (){var statearr_49030 = state_49025;
(statearr_49030[(9)] = inst_48993__$1);

return statearr_49030;
})();
if(inst_48995){
var statearr_49031_49062 = state_49025__$1;
(statearr_49031_49062[(1)] = (5));

} else {
var statearr_49032_49063 = state_49025__$1;
(statearr_49032_49063[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49026 === (15))){
var inst_49015 = (state_49025[(2)]);
var state_49025__$1 = state_49025;
var statearr_49033_49064 = state_49025__$1;
(statearr_49033_49064[(2)] = inst_49015);

(statearr_49033_49064[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49026 === (13))){
var state_49025__$1 = state_49025;
var statearr_49034_49065 = state_49025__$1;
(statearr_49034_49065[(2)] = null);

(statearr_49034_49065[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49026 === (6))){
var inst_48990 = (state_49025[(8)]);
var inst_49011 = (inst_48990 > (0));
var state_49025__$1 = state_49025;
if(cljs.core.truth_(inst_49011)){
var statearr_49035_49066 = state_49025__$1;
(statearr_49035_49066[(1)] = (12));

} else {
var statearr_49036_49067 = state_49025__$1;
(statearr_49036_49067[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49026 === (3))){
var inst_49023 = (state_49025[(2)]);
var state_49025__$1 = state_49025;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49025__$1,inst_49023);
} else {
if((state_val_49026 === (12))){
var inst_48989 = (state_49025[(7)]);
var inst_49013 = cljs.core.vec.call(null,inst_48989);
var state_49025__$1 = state_49025;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49025__$1,(15),out,inst_49013);
} else {
if((state_val_49026 === (2))){
var state_49025__$1 = state_49025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49025__$1,(4),ch);
} else {
if((state_val_49026 === (11))){
var inst_49005 = (state_49025[(2)]);
var inst_49006 = (new Array(n));
var inst_48989 = inst_49006;
var inst_48990 = (0);
var state_49025__$1 = (function (){var statearr_49037 = state_49025;
(statearr_49037[(7)] = inst_48989);

(statearr_49037[(10)] = inst_49005);

(statearr_49037[(8)] = inst_48990);

return statearr_49037;
})();
var statearr_49038_49068 = state_49025__$1;
(statearr_49038_49068[(2)] = null);

(statearr_49038_49068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49026 === (9))){
var inst_48989 = (state_49025[(7)]);
var inst_49003 = cljs.core.vec.call(null,inst_48989);
var state_49025__$1 = state_49025;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49025__$1,(11),out,inst_49003);
} else {
if((state_val_49026 === (5))){
var inst_48993 = (state_49025[(9)]);
var inst_48989 = (state_49025[(7)]);
var inst_48998 = (state_49025[(11)]);
var inst_48990 = (state_49025[(8)]);
var inst_48997 = (inst_48989[inst_48990] = inst_48993);
var inst_48998__$1 = (inst_48990 + (1));
var inst_48999 = (inst_48998__$1 < n);
var state_49025__$1 = (function (){var statearr_49039 = state_49025;
(statearr_49039[(12)] = inst_48997);

(statearr_49039[(11)] = inst_48998__$1);

return statearr_49039;
})();
if(cljs.core.truth_(inst_48999)){
var statearr_49040_49069 = state_49025__$1;
(statearr_49040_49069[(1)] = (8));

} else {
var statearr_49041_49070 = state_49025__$1;
(statearr_49041_49070[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49026 === (14))){
var inst_49018 = (state_49025[(2)]);
var inst_49019 = cljs.core.async.close_BANG_.call(null,out);
var state_49025__$1 = (function (){var statearr_49043 = state_49025;
(statearr_49043[(13)] = inst_49018);

return statearr_49043;
})();
var statearr_49044_49071 = state_49025__$1;
(statearr_49044_49071[(2)] = inst_49019);

(statearr_49044_49071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49026 === (10))){
var inst_49009 = (state_49025[(2)]);
var state_49025__$1 = state_49025;
var statearr_49045_49072 = state_49025__$1;
(statearr_49045_49072[(2)] = inst_49009);

(statearr_49045_49072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49026 === (8))){
var inst_48989 = (state_49025[(7)]);
var inst_48998 = (state_49025[(11)]);
var tmp49042 = inst_48989;
var inst_48989__$1 = tmp49042;
var inst_48990 = inst_48998;
var state_49025__$1 = (function (){var statearr_49046 = state_49025;
(statearr_49046[(7)] = inst_48989__$1);

(statearr_49046[(8)] = inst_48990);

return statearr_49046;
})();
var statearr_49047_49073 = state_49025__$1;
(statearr_49047_49073[(2)] = null);

(statearr_49047_49073[(1)] = (2));


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
});})(c__46399__auto___49059,out))
;
return ((function (switch__46287__auto__,c__46399__auto___49059,out){
return (function() {
var cljs$core$async$state_machine__46288__auto__ = null;
var cljs$core$async$state_machine__46288__auto____0 = (function (){
var statearr_49051 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49051[(0)] = cljs$core$async$state_machine__46288__auto__);

(statearr_49051[(1)] = (1));

return statearr_49051;
});
var cljs$core$async$state_machine__46288__auto____1 = (function (state_49025){
while(true){
var ret_value__46289__auto__ = (function (){try{while(true){
var result__46290__auto__ = switch__46287__auto__.call(null,state_49025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46290__auto__;
}
break;
}
}catch (e49052){if((e49052 instanceof Object)){
var ex__46291__auto__ = e49052;
var statearr_49053_49074 = state_49025;
(statearr_49053_49074[(5)] = ex__46291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49052;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49075 = state_49025;
state_49025 = G__49075;
continue;
} else {
return ret_value__46289__auto__;
}
break;
}
});
cljs$core$async$state_machine__46288__auto__ = function(state_49025){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46288__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46288__auto____1.call(this,state_49025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46288__auto____0;
cljs$core$async$state_machine__46288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46288__auto____1;
return cljs$core$async$state_machine__46288__auto__;
})()
;})(switch__46287__auto__,c__46399__auto___49059,out))
})();
var state__46401__auto__ = (function (){var statearr_49054 = f__46400__auto__.call(null);
(statearr_49054[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46399__auto___49059);

return statearr_49054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46401__auto__);
});})(c__46399__auto___49059,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args49076 = [];
var len__36896__auto___49150 = arguments.length;
var i__36897__auto___49151 = (0);
while(true){
if((i__36897__auto___49151 < len__36896__auto___49150)){
args49076.push((arguments[i__36897__auto___49151]));

var G__49152 = (i__36897__auto___49151 + (1));
i__36897__auto___49151 = G__49152;
continue;
} else {
}
break;
}

var G__49078 = args49076.length;
switch (G__49078) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49076.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__46399__auto___49154 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46399__auto___49154,out){
return (function (){
var f__46400__auto__ = (function (){var switch__46287__auto__ = ((function (c__46399__auto___49154,out){
return (function (state_49120){
var state_val_49121 = (state_49120[(1)]);
if((state_val_49121 === (7))){
var inst_49116 = (state_49120[(2)]);
var state_49120__$1 = state_49120;
var statearr_49122_49155 = state_49120__$1;
(statearr_49122_49155[(2)] = inst_49116);

(statearr_49122_49155[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49121 === (1))){
var inst_49079 = [];
var inst_49080 = inst_49079;
var inst_49081 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_49120__$1 = (function (){var statearr_49123 = state_49120;
(statearr_49123[(7)] = inst_49080);

(statearr_49123[(8)] = inst_49081);

return statearr_49123;
})();
var statearr_49124_49156 = state_49120__$1;
(statearr_49124_49156[(2)] = null);

(statearr_49124_49156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49121 === (4))){
var inst_49084 = (state_49120[(9)]);
var inst_49084__$1 = (state_49120[(2)]);
var inst_49085 = (inst_49084__$1 == null);
var inst_49086 = cljs.core.not.call(null,inst_49085);
var state_49120__$1 = (function (){var statearr_49125 = state_49120;
(statearr_49125[(9)] = inst_49084__$1);

return statearr_49125;
})();
if(inst_49086){
var statearr_49126_49157 = state_49120__$1;
(statearr_49126_49157[(1)] = (5));

} else {
var statearr_49127_49158 = state_49120__$1;
(statearr_49127_49158[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49121 === (15))){
var inst_49110 = (state_49120[(2)]);
var state_49120__$1 = state_49120;
var statearr_49128_49159 = state_49120__$1;
(statearr_49128_49159[(2)] = inst_49110);

(statearr_49128_49159[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49121 === (13))){
var state_49120__$1 = state_49120;
var statearr_49129_49160 = state_49120__$1;
(statearr_49129_49160[(2)] = null);

(statearr_49129_49160[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49121 === (6))){
var inst_49080 = (state_49120[(7)]);
var inst_49105 = inst_49080.length;
var inst_49106 = (inst_49105 > (0));
var state_49120__$1 = state_49120;
if(cljs.core.truth_(inst_49106)){
var statearr_49130_49161 = state_49120__$1;
(statearr_49130_49161[(1)] = (12));

} else {
var statearr_49131_49162 = state_49120__$1;
(statearr_49131_49162[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49121 === (3))){
var inst_49118 = (state_49120[(2)]);
var state_49120__$1 = state_49120;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49120__$1,inst_49118);
} else {
if((state_val_49121 === (12))){
var inst_49080 = (state_49120[(7)]);
var inst_49108 = cljs.core.vec.call(null,inst_49080);
var state_49120__$1 = state_49120;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49120__$1,(15),out,inst_49108);
} else {
if((state_val_49121 === (2))){
var state_49120__$1 = state_49120;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49120__$1,(4),ch);
} else {
if((state_val_49121 === (11))){
var inst_49084 = (state_49120[(9)]);
var inst_49088 = (state_49120[(10)]);
var inst_49098 = (state_49120[(2)]);
var inst_49099 = [];
var inst_49100 = inst_49099.push(inst_49084);
var inst_49080 = inst_49099;
var inst_49081 = inst_49088;
var state_49120__$1 = (function (){var statearr_49132 = state_49120;
(statearr_49132[(7)] = inst_49080);

(statearr_49132[(11)] = inst_49098);

(statearr_49132[(8)] = inst_49081);

(statearr_49132[(12)] = inst_49100);

return statearr_49132;
})();
var statearr_49133_49163 = state_49120__$1;
(statearr_49133_49163[(2)] = null);

(statearr_49133_49163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49121 === (9))){
var inst_49080 = (state_49120[(7)]);
var inst_49096 = cljs.core.vec.call(null,inst_49080);
var state_49120__$1 = state_49120;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49120__$1,(11),out,inst_49096);
} else {
if((state_val_49121 === (5))){
var inst_49081 = (state_49120[(8)]);
var inst_49084 = (state_49120[(9)]);
var inst_49088 = (state_49120[(10)]);
var inst_49088__$1 = f.call(null,inst_49084);
var inst_49089 = cljs.core._EQ_.call(null,inst_49088__$1,inst_49081);
var inst_49090 = cljs.core.keyword_identical_QMARK_.call(null,inst_49081,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_49091 = (inst_49089) || (inst_49090);
var state_49120__$1 = (function (){var statearr_49134 = state_49120;
(statearr_49134[(10)] = inst_49088__$1);

return statearr_49134;
})();
if(cljs.core.truth_(inst_49091)){
var statearr_49135_49164 = state_49120__$1;
(statearr_49135_49164[(1)] = (8));

} else {
var statearr_49136_49165 = state_49120__$1;
(statearr_49136_49165[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49121 === (14))){
var inst_49113 = (state_49120[(2)]);
var inst_49114 = cljs.core.async.close_BANG_.call(null,out);
var state_49120__$1 = (function (){var statearr_49138 = state_49120;
(statearr_49138[(13)] = inst_49113);

return statearr_49138;
})();
var statearr_49139_49166 = state_49120__$1;
(statearr_49139_49166[(2)] = inst_49114);

(statearr_49139_49166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49121 === (10))){
var inst_49103 = (state_49120[(2)]);
var state_49120__$1 = state_49120;
var statearr_49140_49167 = state_49120__$1;
(statearr_49140_49167[(2)] = inst_49103);

(statearr_49140_49167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49121 === (8))){
var inst_49080 = (state_49120[(7)]);
var inst_49084 = (state_49120[(9)]);
var inst_49088 = (state_49120[(10)]);
var inst_49093 = inst_49080.push(inst_49084);
var tmp49137 = inst_49080;
var inst_49080__$1 = tmp49137;
var inst_49081 = inst_49088;
var state_49120__$1 = (function (){var statearr_49141 = state_49120;
(statearr_49141[(7)] = inst_49080__$1);

(statearr_49141[(8)] = inst_49081);

(statearr_49141[(14)] = inst_49093);

return statearr_49141;
})();
var statearr_49142_49168 = state_49120__$1;
(statearr_49142_49168[(2)] = null);

(statearr_49142_49168[(1)] = (2));


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
});})(c__46399__auto___49154,out))
;
return ((function (switch__46287__auto__,c__46399__auto___49154,out){
return (function() {
var cljs$core$async$state_machine__46288__auto__ = null;
var cljs$core$async$state_machine__46288__auto____0 = (function (){
var statearr_49146 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49146[(0)] = cljs$core$async$state_machine__46288__auto__);

(statearr_49146[(1)] = (1));

return statearr_49146;
});
var cljs$core$async$state_machine__46288__auto____1 = (function (state_49120){
while(true){
var ret_value__46289__auto__ = (function (){try{while(true){
var result__46290__auto__ = switch__46287__auto__.call(null,state_49120);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46290__auto__;
}
break;
}
}catch (e49147){if((e49147 instanceof Object)){
var ex__46291__auto__ = e49147;
var statearr_49148_49169 = state_49120;
(statearr_49148_49169[(5)] = ex__46291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49120);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49147;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49170 = state_49120;
state_49120 = G__49170;
continue;
} else {
return ret_value__46289__auto__;
}
break;
}
});
cljs$core$async$state_machine__46288__auto__ = function(state_49120){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46288__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46288__auto____1.call(this,state_49120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46288__auto____0;
cljs$core$async$state_machine__46288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46288__auto____1;
return cljs$core$async$state_machine__46288__auto__;
})()
;})(switch__46287__auto__,c__46399__auto___49154,out))
})();
var state__46401__auto__ = (function (){var statearr_49149 = f__46400__auto__.call(null);
(statearr_49149[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46399__auto___49154);

return statearr_49149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46401__auto__);
});})(c__46399__auto___49154,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map