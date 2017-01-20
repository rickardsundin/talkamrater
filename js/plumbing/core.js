// Compiled by ClojureScript 1.7.170 {}
goog.provide('plumbing.core');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('plumbing.fnk.schema');
/**
 * A sentinel value representing missing portions of the input data.
 */
plumbing.core._PLUS_none_PLUS_ = new cljs.core.Keyword("plumbing.core","missing","plumbing.core/missing",1721767298);
/**
 * Updates the value in map m at k with the function f.
 * 
 *  Like update-in, but for updating a single top-level key.
 *  Any additional args will be passed to f after the value.
 * 
 *  WARNING As of Clojure 1.7 this function exists in clojure.core and
 *  will not be exported by this namespace.
 */
plumbing.core.update = (function plumbing$core$update(var_args){
var args39575 = [];
var len__36896__auto___39584 = arguments.length;
var i__36897__auto___39585 = (0);
while(true){
if((i__36897__auto___39585 < len__36896__auto___39584)){
args39575.push((arguments[i__36897__auto___39585]));

var G__39586 = (i__36897__auto___39585 + (1));
i__36897__auto___39585 = G__39586;
continue;
} else {
}
break;
}

var G__39583 = args39575.length;
switch (G__39583) {
case 3:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args39575.slice((5)),(0)));
return plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__36915__auto__);

}
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$3 = (function (m,k,f){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$4 = (function (m,k,f,x1){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1));
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$5 = (function (m,k,f,x1,x2){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1,x2));
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,f,x1,x2,xs){
return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
});

plumbing.core.update.cljs$lang$applyTo = (function (seq39576){
var G__39577 = cljs.core.first.call(null,seq39576);
var seq39576__$1 = cljs.core.next.call(null,seq39576);
var G__39578 = cljs.core.first.call(null,seq39576__$1);
var seq39576__$2 = cljs.core.next.call(null,seq39576__$1);
var G__39579 = cljs.core.first.call(null,seq39576__$2);
var seq39576__$3 = cljs.core.next.call(null,seq39576__$2);
var G__39580 = cljs.core.first.call(null,seq39576__$3);
var seq39576__$4 = cljs.core.next.call(null,seq39576__$3);
var G__39581 = cljs.core.first.call(null,seq39576__$4);
var seq39576__$5 = cljs.core.next.call(null,seq39576__$4);
return plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic(G__39577,G__39578,G__39579,G__39580,G__39581,seq39576__$5);
});

plumbing.core.update.cljs$lang$maxFixedArity = (5);
/**
 * Build map k -> (f v) for [k v] in map, preserving the initial type
 */
plumbing.core.map_vals = (function plumbing$core$map_vals(f,m){
if(cljs.core.sorted_QMARK_.call(null,m)){
return cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc.call(null,out_m,k,f.call(null,v));
}),cljs.core.sorted_map.call(null),m);
} else {
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc_BANG_.call(null,out_m,k,f.call(null,v));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__39316__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__39596_39602 = cljs.core.seq.call(null,m);
var chunk__39597_39603 = null;
var count__39598_39604 = (0);
var i__39599_39605 = (0);
while(true){
if((i__39599_39605 < count__39598_39604)){
var vec__39600_39606 = cljs.core._nth.call(null,chunk__39597_39603,i__39599_39605);
var k_39607 = cljs.core.nth.call(null,vec__39600_39606,(0),null);
var v_39608 = cljs.core.nth.call(null,vec__39600_39606,(1),null);
var m39595_39609 = cljs.core.deref.call(null,m_atom__39316__auto__);
cljs.core.reset_BANG_.call(null,m_atom__39316__auto__,cljs.core.assoc_BANG_.call(null,m39595_39609,k_39607,f.call(null,v_39608)));

var G__39610 = seq__39596_39602;
var G__39611 = chunk__39597_39603;
var G__39612 = count__39598_39604;
var G__39613 = (i__39599_39605 + (1));
seq__39596_39602 = G__39610;
chunk__39597_39603 = G__39611;
count__39598_39604 = G__39612;
i__39599_39605 = G__39613;
continue;
} else {
var temp__4425__auto___39614 = cljs.core.seq.call(null,seq__39596_39602);
if(temp__4425__auto___39614){
var seq__39596_39615__$1 = temp__4425__auto___39614;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39596_39615__$1)){
var c__36641__auto___39616 = cljs.core.chunk_first.call(null,seq__39596_39615__$1);
var G__39617 = cljs.core.chunk_rest.call(null,seq__39596_39615__$1);
var G__39618 = c__36641__auto___39616;
var G__39619 = cljs.core.count.call(null,c__36641__auto___39616);
var G__39620 = (0);
seq__39596_39602 = G__39617;
chunk__39597_39603 = G__39618;
count__39598_39604 = G__39619;
i__39599_39605 = G__39620;
continue;
} else {
var vec__39601_39621 = cljs.core.first.call(null,seq__39596_39615__$1);
var k_39622 = cljs.core.nth.call(null,vec__39601_39621,(0),null);
var v_39623 = cljs.core.nth.call(null,vec__39601_39621,(1),null);
var m39595_39624 = cljs.core.deref.call(null,m_atom__39316__auto__);
cljs.core.reset_BANG_.call(null,m_atom__39316__auto__,cljs.core.assoc_BANG_.call(null,m39595_39624,k_39622,f.call(null,v_39623)));

var G__39625 = cljs.core.next.call(null,seq__39596_39615__$1);
var G__39626 = null;
var G__39627 = (0);
var G__39628 = (0);
seq__39596_39602 = G__39625;
chunk__39597_39603 = G__39626;
count__39598_39604 = G__39627;
i__39599_39605 = G__39628;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__39316__auto__));

}
}
});
/**
 * Build map (f k) -> v for [k v] in map m
 */
plumbing.core.map_keys = (function plumbing$core$map_keys(f,m){
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc_BANG_.call(null,out_m,f.call(null,k),v);
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__39316__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__39637_39643 = cljs.core.seq.call(null,m);
var chunk__39638_39644 = null;
var count__39639_39645 = (0);
var i__39640_39646 = (0);
while(true){
if((i__39640_39646 < count__39639_39645)){
var vec__39641_39647 = cljs.core._nth.call(null,chunk__39638_39644,i__39640_39646);
var k_39648 = cljs.core.nth.call(null,vec__39641_39647,(0),null);
var v_39649 = cljs.core.nth.call(null,vec__39641_39647,(1),null);
var m39636_39650 = cljs.core.deref.call(null,m_atom__39316__auto__);
cljs.core.reset_BANG_.call(null,m_atom__39316__auto__,cljs.core.assoc_BANG_.call(null,m39636_39650,f.call(null,k_39648),v_39649));

var G__39651 = seq__39637_39643;
var G__39652 = chunk__39638_39644;
var G__39653 = count__39639_39645;
var G__39654 = (i__39640_39646 + (1));
seq__39637_39643 = G__39651;
chunk__39638_39644 = G__39652;
count__39639_39645 = G__39653;
i__39640_39646 = G__39654;
continue;
} else {
var temp__4425__auto___39655 = cljs.core.seq.call(null,seq__39637_39643);
if(temp__4425__auto___39655){
var seq__39637_39656__$1 = temp__4425__auto___39655;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39637_39656__$1)){
var c__36641__auto___39657 = cljs.core.chunk_first.call(null,seq__39637_39656__$1);
var G__39658 = cljs.core.chunk_rest.call(null,seq__39637_39656__$1);
var G__39659 = c__36641__auto___39657;
var G__39660 = cljs.core.count.call(null,c__36641__auto___39657);
var G__39661 = (0);
seq__39637_39643 = G__39658;
chunk__39638_39644 = G__39659;
count__39639_39645 = G__39660;
i__39640_39646 = G__39661;
continue;
} else {
var vec__39642_39662 = cljs.core.first.call(null,seq__39637_39656__$1);
var k_39663 = cljs.core.nth.call(null,vec__39642_39662,(0),null);
var v_39664 = cljs.core.nth.call(null,vec__39642_39662,(1),null);
var m39636_39665 = cljs.core.deref.call(null,m_atom__39316__auto__);
cljs.core.reset_BANG_.call(null,m_atom__39316__auto__,cljs.core.assoc_BANG_.call(null,m39636_39665,f.call(null,k_39663),v_39664));

var G__39666 = cljs.core.next.call(null,seq__39637_39656__$1);
var G__39667 = null;
var G__39668 = (0);
var G__39669 = (0);
seq__39637_39643 = G__39666;
chunk__39638_39644 = G__39667;
count__39639_39645 = G__39668;
i__39640_39646 = G__39669;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__39316__auto__));
}
});
/**
 * Build map k -> (f k) for keys in ks
 */
plumbing.core.map_from_keys = (function plumbing$core$map_from_keys(f,ks){
var m_atom__39316__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__39676_39680 = cljs.core.seq.call(null,ks);
var chunk__39677_39681 = null;
var count__39678_39682 = (0);
var i__39679_39683 = (0);
while(true){
if((i__39679_39683 < count__39678_39682)){
var k_39684 = cljs.core._nth.call(null,chunk__39677_39681,i__39679_39683);
var m39675_39685 = cljs.core.deref.call(null,m_atom__39316__auto__);
cljs.core.reset_BANG_.call(null,m_atom__39316__auto__,cljs.core.assoc_BANG_.call(null,m39675_39685,k_39684,f.call(null,k_39684)));

var G__39686 = seq__39676_39680;
var G__39687 = chunk__39677_39681;
var G__39688 = count__39678_39682;
var G__39689 = (i__39679_39683 + (1));
seq__39676_39680 = G__39686;
chunk__39677_39681 = G__39687;
count__39678_39682 = G__39688;
i__39679_39683 = G__39689;
continue;
} else {
var temp__4425__auto___39690 = cljs.core.seq.call(null,seq__39676_39680);
if(temp__4425__auto___39690){
var seq__39676_39691__$1 = temp__4425__auto___39690;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39676_39691__$1)){
var c__36641__auto___39692 = cljs.core.chunk_first.call(null,seq__39676_39691__$1);
var G__39693 = cljs.core.chunk_rest.call(null,seq__39676_39691__$1);
var G__39694 = c__36641__auto___39692;
var G__39695 = cljs.core.count.call(null,c__36641__auto___39692);
var G__39696 = (0);
seq__39676_39680 = G__39693;
chunk__39677_39681 = G__39694;
count__39678_39682 = G__39695;
i__39679_39683 = G__39696;
continue;
} else {
var k_39697 = cljs.core.first.call(null,seq__39676_39691__$1);
var m39675_39698 = cljs.core.deref.call(null,m_atom__39316__auto__);
cljs.core.reset_BANG_.call(null,m_atom__39316__auto__,cljs.core.assoc_BANG_.call(null,m39675_39698,k_39697,f.call(null,k_39697)));

var G__39699 = cljs.core.next.call(null,seq__39676_39691__$1);
var G__39700 = null;
var G__39701 = (0);
var G__39702 = (0);
seq__39676_39680 = G__39699;
chunk__39677_39681 = G__39700;
count__39678_39682 = G__39701;
i__39679_39683 = G__39702;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__39316__auto__));
});
/**
 * Build map (f v) -> v for vals in vs
 */
plumbing.core.map_from_vals = (function plumbing$core$map_from_vals(f,vs){
var m_atom__39316__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__39709_39713 = cljs.core.seq.call(null,vs);
var chunk__39710_39714 = null;
var count__39711_39715 = (0);
var i__39712_39716 = (0);
while(true){
if((i__39712_39716 < count__39711_39715)){
var v_39717 = cljs.core._nth.call(null,chunk__39710_39714,i__39712_39716);
var m39708_39718 = cljs.core.deref.call(null,m_atom__39316__auto__);
cljs.core.reset_BANG_.call(null,m_atom__39316__auto__,cljs.core.assoc_BANG_.call(null,m39708_39718,f.call(null,v_39717),v_39717));

var G__39719 = seq__39709_39713;
var G__39720 = chunk__39710_39714;
var G__39721 = count__39711_39715;
var G__39722 = (i__39712_39716 + (1));
seq__39709_39713 = G__39719;
chunk__39710_39714 = G__39720;
count__39711_39715 = G__39721;
i__39712_39716 = G__39722;
continue;
} else {
var temp__4425__auto___39723 = cljs.core.seq.call(null,seq__39709_39713);
if(temp__4425__auto___39723){
var seq__39709_39724__$1 = temp__4425__auto___39723;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39709_39724__$1)){
var c__36641__auto___39725 = cljs.core.chunk_first.call(null,seq__39709_39724__$1);
var G__39726 = cljs.core.chunk_rest.call(null,seq__39709_39724__$1);
var G__39727 = c__36641__auto___39725;
var G__39728 = cljs.core.count.call(null,c__36641__auto___39725);
var G__39729 = (0);
seq__39709_39713 = G__39726;
chunk__39710_39714 = G__39727;
count__39711_39715 = G__39728;
i__39712_39716 = G__39729;
continue;
} else {
var v_39730 = cljs.core.first.call(null,seq__39709_39724__$1);
var m39708_39731 = cljs.core.deref.call(null,m_atom__39316__auto__);
cljs.core.reset_BANG_.call(null,m_atom__39316__auto__,cljs.core.assoc_BANG_.call(null,m39708_39731,f.call(null,v_39730),v_39730));

var G__39732 = cljs.core.next.call(null,seq__39709_39724__$1);
var G__39733 = null;
var G__39734 = (0);
var G__39735 = (0);
seq__39709_39713 = G__39732;
chunk__39710_39714 = G__39733;
count__39711_39715 = G__39734;
i__39712_39716 = G__39735;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__39316__auto__));
});
/**
 * Dissociate this keyseq from m, removing any empty maps created as a result
 * (including at the top-level).
 */
plumbing.core.dissoc_in = (function plumbing$core$dissoc_in(m,p__39736){
var vec__39738 = p__39736;
var k = cljs.core.nth.call(null,vec__39738,(0),null);
var ks = cljs.core.nthnext.call(null,vec__39738,(1));
if(cljs.core.truth_(m)){
var temp__4423__auto__ = (function (){var and__35826__auto__ = ks;
if(cljs.core.truth_(and__35826__auto__)){
return plumbing$core$dissoc_in.call(null,cljs.core.get.call(null,m,k),ks);
} else {
return and__35826__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var res = temp__4423__auto__;
return cljs.core.assoc.call(null,m,k,res);
} else {
var res = cljs.core.dissoc.call(null,m,k);
if(cljs.core.empty_QMARK_.call(null,res)){
return null;
} else {
return res;
}
}
} else {
return null;
}
});
/**
 * Recursively convert maps in m (including itself)
 * to have keyword keys instead of string
 */
plumbing.core.keywordize_map = (function plumbing$core$keywordize_map(x){
if(cljs.core.map_QMARK_.call(null,x)){
var m_atom__39316__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__39747_39753 = cljs.core.seq.call(null,x);
var chunk__39748_39754 = null;
var count__39749_39755 = (0);
var i__39750_39756 = (0);
while(true){
if((i__39750_39756 < count__39749_39755)){
var vec__39751_39757 = cljs.core._nth.call(null,chunk__39748_39754,i__39750_39756);
var k_39758 = cljs.core.nth.call(null,vec__39751_39757,(0),null);
var v_39759 = cljs.core.nth.call(null,vec__39751_39757,(1),null);
var m39746_39760 = cljs.core.deref.call(null,m_atom__39316__auto__);
cljs.core.reset_BANG_.call(null,m_atom__39316__auto__,cljs.core.assoc_BANG_.call(null,m39746_39760,((typeof k_39758 === 'string')?cljs.core.keyword.call(null,k_39758):k_39758),plumbing$core$keywordize_map.call(null,v_39759)));

var G__39761 = seq__39747_39753;
var G__39762 = chunk__39748_39754;
var G__39763 = count__39749_39755;
var G__39764 = (i__39750_39756 + (1));
seq__39747_39753 = G__39761;
chunk__39748_39754 = G__39762;
count__39749_39755 = G__39763;
i__39750_39756 = G__39764;
continue;
} else {
var temp__4425__auto___39765 = cljs.core.seq.call(null,seq__39747_39753);
if(temp__4425__auto___39765){
var seq__39747_39766__$1 = temp__4425__auto___39765;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39747_39766__$1)){
var c__36641__auto___39767 = cljs.core.chunk_first.call(null,seq__39747_39766__$1);
var G__39768 = cljs.core.chunk_rest.call(null,seq__39747_39766__$1);
var G__39769 = c__36641__auto___39767;
var G__39770 = cljs.core.count.call(null,c__36641__auto___39767);
var G__39771 = (0);
seq__39747_39753 = G__39768;
chunk__39748_39754 = G__39769;
count__39749_39755 = G__39770;
i__39750_39756 = G__39771;
continue;
} else {
var vec__39752_39772 = cljs.core.first.call(null,seq__39747_39766__$1);
var k_39773 = cljs.core.nth.call(null,vec__39752_39772,(0),null);
var v_39774 = cljs.core.nth.call(null,vec__39752_39772,(1),null);
var m39746_39775 = cljs.core.deref.call(null,m_atom__39316__auto__);
cljs.core.reset_BANG_.call(null,m_atom__39316__auto__,cljs.core.assoc_BANG_.call(null,m39746_39775,((typeof k_39773 === 'string')?cljs.core.keyword.call(null,k_39773):k_39773),plumbing$core$keywordize_map.call(null,v_39774)));

var G__39776 = cljs.core.next.call(null,seq__39747_39766__$1);
var G__39777 = null;
var G__39778 = (0);
var G__39779 = (0);
seq__39747_39753 = G__39776;
chunk__39748_39754 = G__39777;
count__39749_39755 = G__39778;
i__39750_39756 = G__39779;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__39316__auto__));
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
return cljs.core.map.call(null,plumbing$core$keywordize_map,x);
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return cljs.core.mapv.call(null,plumbing$core$keywordize_map,x);
} else {
return x;

}
}
}
});
/**
 * Like get but throw an exception if not found
 */
plumbing.core.safe_get = (function plumbing$core$safe_get(m,k){
var temp__4423__auto__ = cljs.core.find.call(null,m,k);
if(cljs.core.truth_(temp__4423__auto__)){
var pair__39397__auto__ = temp__4423__auto__;
return cljs.core.val.call(null,pair__39397__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.mapv.call(null,cljs.core.key,m))));

}
});
/**
 * Like get-in but throws exception if not found
 */
plumbing.core.safe_get_in = (function plumbing$core$safe_get_in(m,ks){
while(true){
if(cljs.core.seq.call(null,ks)){
var G__39780 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__39781 = cljs.core.next.call(null,ks);
m = G__39780;
ks = G__39781;
continue;
} else {
return m;
}
break;
}
});
/**
 * Like assoc but only assocs when value is truthy
 */
plumbing.core.assoc_when = (function plumbing$core$assoc_when(var_args){
var args__36903__auto__ = [];
var len__36896__auto___39792 = arguments.length;
var i__36897__auto___39793 = (0);
while(true){
if((i__36897__auto___39793 < len__36896__auto___39792)){
args__36903__auto__.push((arguments[i__36897__auto___39793]));

var G__39794 = (i__36897__auto___39793 + (1));
i__36897__auto___39793 = G__39794;
continue;
} else {
}
break;
}

var argseq__36904__auto__ = ((((1) < args__36903__auto__.length))?(new cljs.core.IndexedSeq(args__36903__auto__.slice((1)),(0))):null);
return plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36904__auto__);
});

plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

return cljs.core.into.call(null,(function (){var or__35838__auto__ = m;
if(cljs.core.truth_(or__35838__auto__)){
return or__35838__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__36610__auto__ = (function plumbing$core$iter__39784(s__39785){
return (new cljs.core.LazySeq(null,(function (){
var s__39785__$1 = s__39785;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__39785__$1);
if(temp__4425__auto__){
var s__39785__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39785__$2)){
var c__36608__auto__ = cljs.core.chunk_first.call(null,s__39785__$2);
var size__36609__auto__ = cljs.core.count.call(null,c__36608__auto__);
var b__39787 = cljs.core.chunk_buffer.call(null,size__36609__auto__);
if((function (){var i__39786 = (0);
while(true){
if((i__39786 < size__36609__auto__)){
var vec__39790 = cljs.core._nth.call(null,c__36608__auto__,i__39786);
var k = cljs.core.nth.call(null,vec__39790,(0),null);
var v = cljs.core.nth.call(null,vec__39790,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__39787,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__39795 = (i__39786 + (1));
i__39786 = G__39795;
continue;
} else {
var G__39796 = (i__39786 + (1));
i__39786 = G__39796;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39787),plumbing$core$iter__39784.call(null,cljs.core.chunk_rest.call(null,s__39785__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39787),null);
}
} else {
var vec__39791 = cljs.core.first.call(null,s__39785__$2);
var k = cljs.core.nth.call(null,vec__39791,(0),null);
var v = cljs.core.nth.call(null,vec__39791,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$core$iter__39784.call(null,cljs.core.rest.call(null,s__39785__$2)));
} else {
var G__39797 = cljs.core.rest.call(null,s__39785__$2);
s__39785__$1 = G__39797;
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
return iter__36610__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
});

plumbing.core.assoc_when.cljs$lang$maxFixedArity = (1);

plumbing.core.assoc_when.cljs$lang$applyTo = (function (seq39782){
var G__39783 = cljs.core.first.call(null,seq39782);
var seq39782__$1 = cljs.core.next.call(null,seq39782);
return plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__39783,seq39782__$1);
});
/**
 * Like update-in but returns m unchanged if key-seq is not present.
 */
plumbing.core.update_in_when = (function plumbing$core$update_in_when(var_args){
var args__36903__auto__ = [];
var len__36896__auto___39802 = arguments.length;
var i__36897__auto___39803 = (0);
while(true){
if((i__36897__auto___39803 < len__36896__auto___39802)){
args__36903__auto__.push((arguments[i__36897__auto___39803]));

var G__39804 = (i__36897__auto___39803 + (1));
i__36897__auto___39803 = G__39804;
continue;
} else {
}
break;
}

var argseq__36904__auto__ = ((((3) < args__36903__auto__.length))?(new cljs.core.IndexedSeq(args__36903__auto__.slice((3)),(0))):null);
return plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__36904__auto__);
});

plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,key_seq,f,args){
var found = cljs.core.get_in.call(null,m,key_seq,plumbing.core._PLUS_none_PLUS_);
if(!((plumbing.core._PLUS_none_PLUS_ === found))){
return cljs.core.assoc_in.call(null,m,key_seq,cljs.core.apply.call(null,f,found,args));
} else {
return m;
}
});

plumbing.core.update_in_when.cljs$lang$maxFixedArity = (3);

plumbing.core.update_in_when.cljs$lang$applyTo = (function (seq39798){
var G__39799 = cljs.core.first.call(null,seq39798);
var seq39798__$1 = cljs.core.next.call(null,seq39798);
var G__39800 = cljs.core.first.call(null,seq39798__$1);
var seq39798__$2 = cljs.core.next.call(null,seq39798__$1);
var G__39801 = cljs.core.first.call(null,seq39798__$2);
var seq39798__$3 = cljs.core.next.call(null,seq39798__$2);
return plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic(G__39799,G__39800,G__39801,seq39798__$3);
});
/**
 * Like group-by, but accepts a map-fn that is applied to values before
 * collected.
 */
plumbing.core.grouped_map = (function plumbing$core$grouped_map(key_fn,map_fn,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (ret,x){
var k = key_fn.call(null,x);
return cljs.core.assoc_BANG_.call(null,ret,k,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k,cljs.core.PersistentVector.EMPTY),map_fn.call(null,x)));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
 * Like (apply concat s) but lazier (and shorter) 
 */
plumbing.core.aconcat = (function plumbing$core$aconcat(s){
return cljs.core.concat.call(null,(new cljs.core.LazySeq(null,(function (){
return cljs.core.first.call(null,s);
}),null,null)),(new cljs.core.LazySeq(null,(function (){
var temp__4425__auto__ = cljs.core.next.call(null,s);
if(temp__4425__auto__){
var n = temp__4425__auto__;
return plumbing$core$aconcat.call(null,n);
} else {
return null;
}
}),null,null)));
});
/**
 * Takes a seqable and returns a lazy sequence that
 * is maximally lazy and doesn't realize elements due to either
 * chunking or apply.
 * 
 * Useful when you don't want chunking, for instance,
 * (first awesome-website? (map slurp +a-bunch-of-urls+))
 * may slurp up to 31 unneed webpages, wherease
 * (first awesome-website? (map slurp (unchunk +a-bunch-of-urls+)))
 * is guaranteed to stop slurping after the first awesome website.
 * 
 *   Taken from http://stackoverflow.com/questions/3407876/how-do-i-avoid-clojures-chunking-behavior-for-lazy-seqs-that-i-want-to-short-ci
 */
plumbing.core.unchunk = (function plumbing$core$unchunk(s){
if(cljs.core.seq.call(null,s)){
return cljs.core.cons.call(null,cljs.core.first.call(null,s),(new cljs.core.LazySeq(null,(function (){
return plumbing$core$unchunk.call(null,cljs.core.rest.call(null,s));
}),null,null)));
} else {
return null;
}
});
/**
 * Return sum of (f x) for each x in xs
 */
plumbing.core.sum = (function plumbing$core$sum(var_args){
var args39805 = [];
var len__36896__auto___39808 = arguments.length;
var i__36897__auto___39809 = (0);
while(true){
if((i__36897__auto___39809 < len__36896__auto___39808)){
args39805.push((arguments[i__36897__auto___39809]));

var G__39810 = (i__36897__auto___39809 + (1));
i__36897__auto___39809 = G__39810;
continue;
} else {
}
break;
}

var G__39807 = args39805.length;
switch (G__39807) {
case 2:
return plumbing.core.sum.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return plumbing.core.sum.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39805.length)].join('')));

}
});

plumbing.core.sum.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,f,xs));
});

plumbing.core.sum.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return cljs.core.reduce.call(null,cljs.core._PLUS_,xs);
});

plumbing.core.sum.cljs$lang$maxFixedArity = 2;
/**
 * returns (first xs) when xs has only 1 element
 */
plumbing.core.singleton = (function plumbing$core$singleton(xs){
var temp__4425__auto__ = cljs.core.seq.call(null,xs);
if(temp__4425__auto__){
var xs__$1 = temp__4425__auto__;
if(cljs.core.next.call(null,xs__$1)){
return null;
} else {
return cljs.core.first.call(null,xs__$1);
}
} else {
return null;
}
});
/**
 * Returns [idx x] for x in seqable s
 */
plumbing.core.indexed = (function plumbing$core$indexed(s){
return cljs.core.map_indexed.call(null,cljs.core.vector,s);
});
/**
 * Returns indices idx of sequence s where (f (nth s idx))
 */
plumbing.core.positions = (function plumbing$core$positions(f,s){
return cljs.core.keep_indexed.call(null,(function (i,x){
if(cljs.core.truth_(f.call(null,x))){
return i;
} else {
return null;
}
}),s);
});
/**
 * Returns elements of xs which return unique
 * values according to f. If multiple elements of xs return the same
 * value under f, the first is returned
 */
plumbing.core.distinct_by = (function plumbing$core$distinct_by(f,xs){
var s = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var iter__36610__auto__ = ((function (s){
return (function plumbing$core$distinct_by_$_iter__39816(s__39817){
return (new cljs.core.LazySeq(null,((function (s){
return (function (){
var s__39817__$1 = s__39817;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__39817__$1);
if(temp__4425__auto__){
var s__39817__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39817__$2)){
var c__36608__auto__ = cljs.core.chunk_first.call(null,s__39817__$2);
var size__36609__auto__ = cljs.core.count.call(null,c__36608__auto__);
var b__39819 = cljs.core.chunk_buffer.call(null,size__36609__auto__);
if((function (){var i__39818 = (0);
while(true){
if((i__39818 < size__36609__auto__)){
var x = cljs.core._nth.call(null,c__36608__auto__,i__39818);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
cljs.core.chunk_append.call(null,b__39819,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
);

var G__39820 = (i__39818 + (1));
i__39818 = G__39820;
continue;
} else {
var G__39821 = (i__39818 + (1));
i__39818 = G__39821;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39819),plumbing$core$distinct_by_$_iter__39816.call(null,cljs.core.chunk_rest.call(null,s__39817__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39819),null);
}
} else {
var x = cljs.core.first.call(null,s__39817__$2);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
return cljs.core.cons.call(null,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
,plumbing$core$distinct_by_$_iter__39816.call(null,cljs.core.rest.call(null,s__39817__$2)));
} else {
var G__39822 = cljs.core.rest.call(null,s__39817__$2);
s__39817__$1 = G__39822;
continue;
}
}
} else {
return null;
}
break;
}
});})(s))
,null,null));
});})(s))
;
return iter__36610__auto__.call(null,xs);
});
/**
 * Analogy: partition:partition-all :: interleave:interleave-all
 */
plumbing.core.interleave_all = (function plumbing$core$interleave_all(var_args){
var args__36903__auto__ = [];
var len__36896__auto___39824 = arguments.length;
var i__36897__auto___39825 = (0);
while(true){
if((i__36897__auto___39825 < len__36896__auto___39824)){
args__36903__auto__.push((arguments[i__36897__auto___39825]));

var G__39826 = (i__36897__auto___39825 + (1));
i__36897__auto___39825 = G__39826;
continue;
} else {
}
break;
}

var argseq__36904__auto__ = ((((0) < args__36903__auto__.length))?(new cljs.core.IndexedSeq(args__36903__auto__.slice((0)),(0))):null);
return plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(argseq__36904__auto__);
});

plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (colls){
return (new cljs.core.LazySeq(null,(function (){
return (function plumbing$core$helper(seqs){
if(cljs.core.seq.call(null,seqs)){
return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,seqs),(new cljs.core.LazySeq(null,(function (){
return plumbing$core$helper.call(null,cljs.core.keep.call(null,cljs.core.next,seqs));
}),null,null)));
} else {
return null;
}
}).call(null,cljs.core.keep.call(null,cljs.core.seq,colls));
}),null,null));
});

plumbing.core.interleave_all.cljs$lang$maxFixedArity = (0);

plumbing.core.interleave_all.cljs$lang$applyTo = (function (seq39823){
return plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39823));
});
/**
 * Returns # of elements of xs where pred holds
 */
plumbing.core.count_when = (function plumbing$core$count_when(pred,xs){
return cljs.core.count.call(null,cljs.core.filter.call(null,pred,xs));
});
/**
 * Like conj but ignores non-truthy values
 */
plumbing.core.conj_when = (function plumbing$core$conj_when(var_args){
var args39827 = [];
var len__36896__auto___39833 = arguments.length;
var i__36897__auto___39834 = (0);
while(true){
if((i__36897__auto___39834 < len__36896__auto___39833)){
args39827.push((arguments[i__36897__auto___39834]));

var G__39835 = (i__36897__auto___39834 + (1));
i__36897__auto___39834 = G__39835;
continue;
} else {
}
break;
}

var G__39832 = args39827.length;
switch (G__39832) {
case 2:
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args39827.slice((2)),(0)));
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36915__auto__);

}
});

plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
if(cljs.core.truth_(x)){
return cljs.core.conj.call(null,coll,x);
} else {
return coll;
}
});

plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic = (function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs)){
var G__39837 = plumbing.core.conj_when.call(null,coll,x);
var G__39838 = cljs.core.first.call(null,xs);
var G__39839 = cljs.core.next.call(null,xs);
coll = G__39837;
x = G__39838;
xs = G__39839;
continue;
} else {
return plumbing.core.conj_when.call(null,coll,x);
}
break;
}
});

plumbing.core.conj_when.cljs$lang$applyTo = (function (seq39828){
var G__39829 = cljs.core.first.call(null,seq39828);
var seq39828__$1 = cljs.core.next.call(null,seq39828);
var G__39830 = cljs.core.first.call(null,seq39828__$1);
var seq39828__$2 = cljs.core.next.call(null,seq39828__$1);
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic(G__39829,G__39830,seq39828__$2);
});

plumbing.core.conj_when.cljs$lang$maxFixedArity = (2);
/**
 * Like cons but does nothing if x is non-truthy.
 */
plumbing.core.cons_when = (function plumbing$core$cons_when(x,s){
if(cljs.core.truth_(x)){
return cljs.core.cons.call(null,x,s);
} else {
return s;
}
});
/**
 * Like sort-by, but prefers higher values rather than lower ones.
 */
plumbing.core.rsort_by = cljs.core.comp.call(null,cljs.core.reverse,cljs.core.sort_by);
/**
 * Like swap! but returns a pair [old-val new-val]
 */
plumbing.core.swap_pair_BANG_ = (function plumbing$core$swap_pair_BANG_(var_args){
var args39841 = [];
var len__36896__auto___39847 = arguments.length;
var i__36897__auto___39848 = (0);
while(true){
if((i__36897__auto___39848 < len__36896__auto___39847)){
args39841.push((arguments[i__36897__auto___39848]));

var G__39849 = (i__36897__auto___39848 + (1));
i__36897__auto___39848 = G__39849;
continue;
} else {
}
break;
}

var G__39846 = args39841.length;
switch (G__39846) {
case 2:
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args39841.slice((2)),(0)));
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36915__auto__);

}
});

plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (a,f){
while(true){
var old_val = cljs.core.deref.call(null,a);
var new_val = f.call(null,old_val);
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,a,old_val,new_val))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else {
continue;
}
break;
}
});

plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,f,args){
return plumbing.core.swap_pair_BANG_.call(null,a,(function (p1__39840_SHARP_){
return cljs.core.apply.call(null,f,p1__39840_SHARP_,args);
}));
});

plumbing.core.swap_pair_BANG_.cljs$lang$applyTo = (function (seq39842){
var G__39843 = cljs.core.first.call(null,seq39842);
var seq39842__$1 = cljs.core.next.call(null,seq39842);
var G__39844 = cljs.core.first.call(null,seq39842__$1);
var seq39842__$2 = cljs.core.next.call(null,seq39842__$1);
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39843,G__39844,seq39842__$2);
});

plumbing.core.swap_pair_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Like reset! but returns old-val
 */
plumbing.core.get_and_set_BANG_ = (function plumbing$core$get_and_set_BANG_(a,new_val){
return cljs.core.first.call(null,plumbing.core.swap_pair_BANG_.call(null,a,cljs.core.constantly.call(null,new_val)));
});
plumbing.core.millis = (function plumbing$core$millis(){
return (new Date()).getTime();
});
/**
 * Like apply, but applies a map to a function with positional map
 *   arguments. Can take optional initial args just like apply.
 */
plumbing.core.mapply = (function plumbing$core$mapply(var_args){
var args39851 = [];
var len__36896__auto___39857 = arguments.length;
var i__36897__auto___39858 = (0);
while(true){
if((i__36897__auto___39858 < len__36896__auto___39857)){
args39851.push((arguments[i__36897__auto___39858]));

var G__39859 = (i__36897__auto___39858 + (1));
i__36897__auto___39858 = G__39859;
continue;
} else {
}
break;
}

var G__39856 = args39851.length;
switch (G__39856) {
case 2:
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__36915__auto__ = (new cljs.core.IndexedSeq(args39851.slice((2)),(0)));
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36915__auto__);

}
});

plumbing.core.mapply.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,m));
});

plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,arg,args){
return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
});

plumbing.core.mapply.cljs$lang$applyTo = (function (seq39852){
var G__39853 = cljs.core.first.call(null,seq39852);
var seq39852__$1 = cljs.core.next.call(null,seq39852);
var G__39854 = cljs.core.first.call(null,seq39852__$1);
var seq39852__$2 = cljs.core.next.call(null,seq39852__$1);
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic(G__39853,G__39854,seq39852__$2);
});

plumbing.core.mapply.cljs$lang$maxFixedArity = (2);

//# sourceMappingURL=core.js.map