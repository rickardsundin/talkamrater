// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__35838__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__35838__auto__){
return or__35838__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__35838__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__35838__auto__)){
return or__35838__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__49823_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__49823_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__49828 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__49829 = null;
var count__49830 = (0);
var i__49831 = (0);
while(true){
if((i__49831 < count__49830)){
var n = cljs.core._nth.call(null,chunk__49829,i__49831);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__49832 = seq__49828;
var G__49833 = chunk__49829;
var G__49834 = count__49830;
var G__49835 = (i__49831 + (1));
seq__49828 = G__49832;
chunk__49829 = G__49833;
count__49830 = G__49834;
i__49831 = G__49835;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__49828);
if(temp__4425__auto__){
var seq__49828__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49828__$1)){
var c__36641__auto__ = cljs.core.chunk_first.call(null,seq__49828__$1);
var G__49836 = cljs.core.chunk_rest.call(null,seq__49828__$1);
var G__49837 = c__36641__auto__;
var G__49838 = cljs.core.count.call(null,c__36641__auto__);
var G__49839 = (0);
seq__49828 = G__49836;
chunk__49829 = G__49837;
count__49830 = G__49838;
i__49831 = G__49839;
continue;
} else {
var n = cljs.core.first.call(null,seq__49828__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__49840 = cljs.core.next.call(null,seq__49828__$1);
var G__49841 = null;
var G__49842 = (0);
var G__49843 = (0);
seq__49828 = G__49840;
chunk__49829 = G__49841;
count__49830 = G__49842;
i__49831 = G__49843;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__49882_49889 = cljs.core.seq.call(null,deps);
var chunk__49883_49890 = null;
var count__49884_49891 = (0);
var i__49885_49892 = (0);
while(true){
if((i__49885_49892 < count__49884_49891)){
var dep_49893 = cljs.core._nth.call(null,chunk__49883_49890,i__49885_49892);
topo_sort_helper_STAR_.call(null,dep_49893,(depth + (1)),state);

var G__49894 = seq__49882_49889;
var G__49895 = chunk__49883_49890;
var G__49896 = count__49884_49891;
var G__49897 = (i__49885_49892 + (1));
seq__49882_49889 = G__49894;
chunk__49883_49890 = G__49895;
count__49884_49891 = G__49896;
i__49885_49892 = G__49897;
continue;
} else {
var temp__4425__auto___49898 = cljs.core.seq.call(null,seq__49882_49889);
if(temp__4425__auto___49898){
var seq__49882_49899__$1 = temp__4425__auto___49898;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49882_49899__$1)){
var c__36641__auto___49900 = cljs.core.chunk_first.call(null,seq__49882_49899__$1);
var G__49901 = cljs.core.chunk_rest.call(null,seq__49882_49899__$1);
var G__49902 = c__36641__auto___49900;
var G__49903 = cljs.core.count.call(null,c__36641__auto___49900);
var G__49904 = (0);
seq__49882_49889 = G__49901;
chunk__49883_49890 = G__49902;
count__49884_49891 = G__49903;
i__49885_49892 = G__49904;
continue;
} else {
var dep_49905 = cljs.core.first.call(null,seq__49882_49899__$1);
topo_sort_helper_STAR_.call(null,dep_49905,(depth + (1)),state);

var G__49906 = cljs.core.next.call(null,seq__49882_49899__$1);
var G__49907 = null;
var G__49908 = (0);
var G__49909 = (0);
seq__49882_49889 = G__49906;
chunk__49883_49890 = G__49907;
count__49884_49891 = G__49908;
i__49885_49892 = G__49909;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__49886){
var vec__49888 = p__49886;
var x = cljs.core.nth.call(null,vec__49888,(0),null);
var xs = cljs.core.nthnext.call(null,vec__49888,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__49888,x,xs,get_deps__$1){
return (function (p1__49844_SHARP_){
return clojure.set.difference.call(null,p1__49844_SHARP_,x);
});})(vec__49888,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__49922 = cljs.core.seq.call(null,provides);
var chunk__49923 = null;
var count__49924 = (0);
var i__49925 = (0);
while(true){
if((i__49925 < count__49924)){
var prov = cljs.core._nth.call(null,chunk__49923,i__49925);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__49926_49934 = cljs.core.seq.call(null,requires);
var chunk__49927_49935 = null;
var count__49928_49936 = (0);
var i__49929_49937 = (0);
while(true){
if((i__49929_49937 < count__49928_49936)){
var req_49938 = cljs.core._nth.call(null,chunk__49927_49935,i__49929_49937);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49938,prov);

var G__49939 = seq__49926_49934;
var G__49940 = chunk__49927_49935;
var G__49941 = count__49928_49936;
var G__49942 = (i__49929_49937 + (1));
seq__49926_49934 = G__49939;
chunk__49927_49935 = G__49940;
count__49928_49936 = G__49941;
i__49929_49937 = G__49942;
continue;
} else {
var temp__4425__auto___49943 = cljs.core.seq.call(null,seq__49926_49934);
if(temp__4425__auto___49943){
var seq__49926_49944__$1 = temp__4425__auto___49943;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49926_49944__$1)){
var c__36641__auto___49945 = cljs.core.chunk_first.call(null,seq__49926_49944__$1);
var G__49946 = cljs.core.chunk_rest.call(null,seq__49926_49944__$1);
var G__49947 = c__36641__auto___49945;
var G__49948 = cljs.core.count.call(null,c__36641__auto___49945);
var G__49949 = (0);
seq__49926_49934 = G__49946;
chunk__49927_49935 = G__49947;
count__49928_49936 = G__49948;
i__49929_49937 = G__49949;
continue;
} else {
var req_49950 = cljs.core.first.call(null,seq__49926_49944__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49950,prov);

var G__49951 = cljs.core.next.call(null,seq__49926_49944__$1);
var G__49952 = null;
var G__49953 = (0);
var G__49954 = (0);
seq__49926_49934 = G__49951;
chunk__49927_49935 = G__49952;
count__49928_49936 = G__49953;
i__49929_49937 = G__49954;
continue;
}
} else {
}
}
break;
}

var G__49955 = seq__49922;
var G__49956 = chunk__49923;
var G__49957 = count__49924;
var G__49958 = (i__49925 + (1));
seq__49922 = G__49955;
chunk__49923 = G__49956;
count__49924 = G__49957;
i__49925 = G__49958;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__49922);
if(temp__4425__auto__){
var seq__49922__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49922__$1)){
var c__36641__auto__ = cljs.core.chunk_first.call(null,seq__49922__$1);
var G__49959 = cljs.core.chunk_rest.call(null,seq__49922__$1);
var G__49960 = c__36641__auto__;
var G__49961 = cljs.core.count.call(null,c__36641__auto__);
var G__49962 = (0);
seq__49922 = G__49959;
chunk__49923 = G__49960;
count__49924 = G__49961;
i__49925 = G__49962;
continue;
} else {
var prov = cljs.core.first.call(null,seq__49922__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__49930_49963 = cljs.core.seq.call(null,requires);
var chunk__49931_49964 = null;
var count__49932_49965 = (0);
var i__49933_49966 = (0);
while(true){
if((i__49933_49966 < count__49932_49965)){
var req_49967 = cljs.core._nth.call(null,chunk__49931_49964,i__49933_49966);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49967,prov);

var G__49968 = seq__49930_49963;
var G__49969 = chunk__49931_49964;
var G__49970 = count__49932_49965;
var G__49971 = (i__49933_49966 + (1));
seq__49930_49963 = G__49968;
chunk__49931_49964 = G__49969;
count__49932_49965 = G__49970;
i__49933_49966 = G__49971;
continue;
} else {
var temp__4425__auto___49972__$1 = cljs.core.seq.call(null,seq__49930_49963);
if(temp__4425__auto___49972__$1){
var seq__49930_49973__$1 = temp__4425__auto___49972__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49930_49973__$1)){
var c__36641__auto___49974 = cljs.core.chunk_first.call(null,seq__49930_49973__$1);
var G__49975 = cljs.core.chunk_rest.call(null,seq__49930_49973__$1);
var G__49976 = c__36641__auto___49974;
var G__49977 = cljs.core.count.call(null,c__36641__auto___49974);
var G__49978 = (0);
seq__49930_49963 = G__49975;
chunk__49931_49964 = G__49976;
count__49932_49965 = G__49977;
i__49933_49966 = G__49978;
continue;
} else {
var req_49979 = cljs.core.first.call(null,seq__49930_49973__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49979,prov);

var G__49980 = cljs.core.next.call(null,seq__49930_49973__$1);
var G__49981 = null;
var G__49982 = (0);
var G__49983 = (0);
seq__49930_49963 = G__49980;
chunk__49931_49964 = G__49981;
count__49932_49965 = G__49982;
i__49933_49966 = G__49983;
continue;
}
} else {
}
}
break;
}

var G__49984 = cljs.core.next.call(null,seq__49922__$1);
var G__49985 = null;
var G__49986 = (0);
var G__49987 = (0);
seq__49922 = G__49984;
chunk__49923 = G__49985;
count__49924 = G__49986;
i__49925 = G__49987;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__49992_49996 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__49993_49997 = null;
var count__49994_49998 = (0);
var i__49995_49999 = (0);
while(true){
if((i__49995_49999 < count__49994_49998)){
var ns_50000 = cljs.core._nth.call(null,chunk__49993_49997,i__49995_49999);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_50000);

var G__50001 = seq__49992_49996;
var G__50002 = chunk__49993_49997;
var G__50003 = count__49994_49998;
var G__50004 = (i__49995_49999 + (1));
seq__49992_49996 = G__50001;
chunk__49993_49997 = G__50002;
count__49994_49998 = G__50003;
i__49995_49999 = G__50004;
continue;
} else {
var temp__4425__auto___50005 = cljs.core.seq.call(null,seq__49992_49996);
if(temp__4425__auto___50005){
var seq__49992_50006__$1 = temp__4425__auto___50005;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49992_50006__$1)){
var c__36641__auto___50007 = cljs.core.chunk_first.call(null,seq__49992_50006__$1);
var G__50008 = cljs.core.chunk_rest.call(null,seq__49992_50006__$1);
var G__50009 = c__36641__auto___50007;
var G__50010 = cljs.core.count.call(null,c__36641__auto___50007);
var G__50011 = (0);
seq__49992_49996 = G__50008;
chunk__49993_49997 = G__50009;
count__49994_49998 = G__50010;
i__49995_49999 = G__50011;
continue;
} else {
var ns_50012 = cljs.core.first.call(null,seq__49992_50006__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_50012);

var G__50013 = cljs.core.next.call(null,seq__49992_50006__$1);
var G__50014 = null;
var G__50015 = (0);
var G__50016 = (0);
seq__49992_49996 = G__50013;
chunk__49993_49997 = G__50014;
count__49994_49998 = G__50015;
i__49995_49999 = G__50016;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__35838__auto__ = goog.require__;
if(cljs.core.truth_(or__35838__auto__)){
return or__35838__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__50017__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__50017 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50018__i = 0, G__50018__a = new Array(arguments.length -  0);
while (G__50018__i < G__50018__a.length) {G__50018__a[G__50018__i] = arguments[G__50018__i + 0]; ++G__50018__i;}
  args = new cljs.core.IndexedSeq(G__50018__a,0);
} 
return G__50017__delegate.call(this,args);};
G__50017.cljs$lang$maxFixedArity = 0;
G__50017.cljs$lang$applyTo = (function (arglist__50019){
var args = cljs.core.seq(arglist__50019);
return G__50017__delegate(args);
});
G__50017.cljs$core$IFn$_invoke$arity$variadic = G__50017__delegate;
return G__50017;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__50021 = cljs.core._EQ_;
var expr__50022 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__50021.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__50022))){
var path_parts = ((function (pred__50021,expr__50022){
return (function (p1__50020_SHARP_){
return clojure.string.split.call(null,p1__50020_SHARP_,/[\/\\]/);
});})(pred__50021,expr__50022))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__50021,expr__50022){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e50024){if((e50024 instanceof Error)){
var e = e50024;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e50024;

}
}})());
});
;})(path_parts,sep,root,pred__50021,expr__50022))
} else {
if(cljs.core.truth_(pred__50021.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__50022))){
return ((function (pred__50021,expr__50022){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__50021,expr__50022){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__50021,expr__50022))
);

return deferred.addErrback(((function (deferred,pred__50021,expr__50022){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__50021,expr__50022))
);
});
;})(pred__50021,expr__50022))
} else {
return ((function (pred__50021,expr__50022){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__50021,expr__50022))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__50025,callback){
var map__50028 = p__50025;
var map__50028__$1 = ((((!((map__50028 == null)))?((((map__50028.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50028.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50028):map__50028);
var file_msg = map__50028__$1;
var request_url = cljs.core.get.call(null,map__50028__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__50028,map__50028__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__50028,map__50028__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__46399__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46399__auto__){
return (function (){
var f__46400__auto__ = (function (){var switch__46287__auto__ = ((function (c__46399__auto__){
return (function (state_50052){
var state_val_50053 = (state_50052[(1)]);
if((state_val_50053 === (7))){
var inst_50048 = (state_50052[(2)]);
var state_50052__$1 = state_50052;
var statearr_50054_50074 = state_50052__$1;
(statearr_50054_50074[(2)] = inst_50048);

(statearr_50054_50074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50053 === (1))){
var state_50052__$1 = state_50052;
var statearr_50055_50075 = state_50052__$1;
(statearr_50055_50075[(2)] = null);

(statearr_50055_50075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50053 === (4))){
var inst_50032 = (state_50052[(7)]);
var inst_50032__$1 = (state_50052[(2)]);
var state_50052__$1 = (function (){var statearr_50056 = state_50052;
(statearr_50056[(7)] = inst_50032__$1);

return statearr_50056;
})();
if(cljs.core.truth_(inst_50032__$1)){
var statearr_50057_50076 = state_50052__$1;
(statearr_50057_50076[(1)] = (5));

} else {
var statearr_50058_50077 = state_50052__$1;
(statearr_50058_50077[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50053 === (6))){
var state_50052__$1 = state_50052;
var statearr_50059_50078 = state_50052__$1;
(statearr_50059_50078[(2)] = null);

(statearr_50059_50078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50053 === (3))){
var inst_50050 = (state_50052[(2)]);
var state_50052__$1 = state_50052;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50052__$1,inst_50050);
} else {
if((state_val_50053 === (2))){
var state_50052__$1 = state_50052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50052__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_50053 === (11))){
var inst_50044 = (state_50052[(2)]);
var state_50052__$1 = (function (){var statearr_50060 = state_50052;
(statearr_50060[(8)] = inst_50044);

return statearr_50060;
})();
var statearr_50061_50079 = state_50052__$1;
(statearr_50061_50079[(2)] = null);

(statearr_50061_50079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50053 === (9))){
var inst_50036 = (state_50052[(9)]);
var inst_50038 = (state_50052[(10)]);
var inst_50040 = inst_50038.call(null,inst_50036);
var state_50052__$1 = state_50052;
var statearr_50062_50080 = state_50052__$1;
(statearr_50062_50080[(2)] = inst_50040);

(statearr_50062_50080[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50053 === (5))){
var inst_50032 = (state_50052[(7)]);
var inst_50034 = figwheel.client.file_reloading.blocking_load.call(null,inst_50032);
var state_50052__$1 = state_50052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50052__$1,(8),inst_50034);
} else {
if((state_val_50053 === (10))){
var inst_50036 = (state_50052[(9)]);
var inst_50042 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_50036);
var state_50052__$1 = state_50052;
var statearr_50063_50081 = state_50052__$1;
(statearr_50063_50081[(2)] = inst_50042);

(statearr_50063_50081[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50053 === (8))){
var inst_50032 = (state_50052[(7)]);
var inst_50038 = (state_50052[(10)]);
var inst_50036 = (state_50052[(2)]);
var inst_50037 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_50038__$1 = cljs.core.get.call(null,inst_50037,inst_50032);
var state_50052__$1 = (function (){var statearr_50064 = state_50052;
(statearr_50064[(9)] = inst_50036);

(statearr_50064[(10)] = inst_50038__$1);

return statearr_50064;
})();
if(cljs.core.truth_(inst_50038__$1)){
var statearr_50065_50082 = state_50052__$1;
(statearr_50065_50082[(1)] = (9));

} else {
var statearr_50066_50083 = state_50052__$1;
(statearr_50066_50083[(1)] = (10));

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
});})(c__46399__auto__))
;
return ((function (switch__46287__auto__,c__46399__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__46288__auto__ = null;
var figwheel$client$file_reloading$state_machine__46288__auto____0 = (function (){
var statearr_50070 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50070[(0)] = figwheel$client$file_reloading$state_machine__46288__auto__);

(statearr_50070[(1)] = (1));

return statearr_50070;
});
var figwheel$client$file_reloading$state_machine__46288__auto____1 = (function (state_50052){
while(true){
var ret_value__46289__auto__ = (function (){try{while(true){
var result__46290__auto__ = switch__46287__auto__.call(null,state_50052);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46290__auto__;
}
break;
}
}catch (e50071){if((e50071 instanceof Object)){
var ex__46291__auto__ = e50071;
var statearr_50072_50084 = state_50052;
(statearr_50072_50084[(5)] = ex__46291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50052);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50071;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50085 = state_50052;
state_50052 = G__50085;
continue;
} else {
return ret_value__46289__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__46288__auto__ = function(state_50052){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__46288__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__46288__auto____1.call(this,state_50052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__46288__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__46288__auto____0;
figwheel$client$file_reloading$state_machine__46288__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__46288__auto____1;
return figwheel$client$file_reloading$state_machine__46288__auto__;
})()
;})(switch__46287__auto__,c__46399__auto__))
})();
var state__46401__auto__ = (function (){var statearr_50073 = f__46400__auto__.call(null);
(statearr_50073[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46399__auto__);

return statearr_50073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46401__auto__);
});})(c__46399__auto__))
);

return c__46399__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__50086,callback){
var map__50089 = p__50086;
var map__50089__$1 = ((((!((map__50089 == null)))?((((map__50089.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50089.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50089):map__50089);
var file_msg = map__50089__$1;
var namespace = cljs.core.get.call(null,map__50089__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__50089,map__50089__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__50089,map__50089__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__50091){
var map__50094 = p__50091;
var map__50094__$1 = ((((!((map__50094 == null)))?((((map__50094.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50094.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50094):map__50094);
var file_msg = map__50094__$1;
var namespace = cljs.core.get.call(null,map__50094__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__35826__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__35826__auto__){
var or__35838__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__35838__auto__)){
return or__35838__auto__;
} else {
var or__35838__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__35838__auto____$1)){
return or__35838__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__35826__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__50096,callback){
var map__50099 = p__50096;
var map__50099__$1 = ((((!((map__50099 == null)))?((((map__50099.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50099.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50099):map__50099);
var file_msg = map__50099__$1;
var request_url = cljs.core.get.call(null,map__50099__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__50099__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__46399__auto___50187 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46399__auto___50187,out){
return (function (){
var f__46400__auto__ = (function (){var switch__46287__auto__ = ((function (c__46399__auto___50187,out){
return (function (state_50169){
var state_val_50170 = (state_50169[(1)]);
if((state_val_50170 === (1))){
var inst_50147 = cljs.core.nth.call(null,files,(0),null);
var inst_50148 = cljs.core.nthnext.call(null,files,(1));
var inst_50149 = files;
var state_50169__$1 = (function (){var statearr_50171 = state_50169;
(statearr_50171[(7)] = inst_50148);

(statearr_50171[(8)] = inst_50149);

(statearr_50171[(9)] = inst_50147);

return statearr_50171;
})();
var statearr_50172_50188 = state_50169__$1;
(statearr_50172_50188[(2)] = null);

(statearr_50172_50188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50170 === (2))){
var inst_50152 = (state_50169[(10)]);
var inst_50149 = (state_50169[(8)]);
var inst_50152__$1 = cljs.core.nth.call(null,inst_50149,(0),null);
var inst_50153 = cljs.core.nthnext.call(null,inst_50149,(1));
var inst_50154 = (inst_50152__$1 == null);
var inst_50155 = cljs.core.not.call(null,inst_50154);
var state_50169__$1 = (function (){var statearr_50173 = state_50169;
(statearr_50173[(11)] = inst_50153);

(statearr_50173[(10)] = inst_50152__$1);

return statearr_50173;
})();
if(inst_50155){
var statearr_50174_50189 = state_50169__$1;
(statearr_50174_50189[(1)] = (4));

} else {
var statearr_50175_50190 = state_50169__$1;
(statearr_50175_50190[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50170 === (3))){
var inst_50167 = (state_50169[(2)]);
var state_50169__$1 = state_50169;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50169__$1,inst_50167);
} else {
if((state_val_50170 === (4))){
var inst_50152 = (state_50169[(10)]);
var inst_50157 = figwheel.client.file_reloading.reload_js_file.call(null,inst_50152);
var state_50169__$1 = state_50169;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50169__$1,(7),inst_50157);
} else {
if((state_val_50170 === (5))){
var inst_50163 = cljs.core.async.close_BANG_.call(null,out);
var state_50169__$1 = state_50169;
var statearr_50176_50191 = state_50169__$1;
(statearr_50176_50191[(2)] = inst_50163);

(statearr_50176_50191[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50170 === (6))){
var inst_50165 = (state_50169[(2)]);
var state_50169__$1 = state_50169;
var statearr_50177_50192 = state_50169__$1;
(statearr_50177_50192[(2)] = inst_50165);

(statearr_50177_50192[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50170 === (7))){
var inst_50153 = (state_50169[(11)]);
var inst_50159 = (state_50169[(2)]);
var inst_50160 = cljs.core.async.put_BANG_.call(null,out,inst_50159);
var inst_50149 = inst_50153;
var state_50169__$1 = (function (){var statearr_50178 = state_50169;
(statearr_50178[(12)] = inst_50160);

(statearr_50178[(8)] = inst_50149);

return statearr_50178;
})();
var statearr_50179_50193 = state_50169__$1;
(statearr_50179_50193[(2)] = null);

(statearr_50179_50193[(1)] = (2));


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
});})(c__46399__auto___50187,out))
;
return ((function (switch__46287__auto__,c__46399__auto___50187,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__46288__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__46288__auto____0 = (function (){
var statearr_50183 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50183[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__46288__auto__);

(statearr_50183[(1)] = (1));

return statearr_50183;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__46288__auto____1 = (function (state_50169){
while(true){
var ret_value__46289__auto__ = (function (){try{while(true){
var result__46290__auto__ = switch__46287__auto__.call(null,state_50169);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46290__auto__;
}
break;
}
}catch (e50184){if((e50184 instanceof Object)){
var ex__46291__auto__ = e50184;
var statearr_50185_50194 = state_50169;
(statearr_50185_50194[(5)] = ex__46291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50169);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50184;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50195 = state_50169;
state_50169 = G__50195;
continue;
} else {
return ret_value__46289__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__46288__auto__ = function(state_50169){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__46288__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__46288__auto____1.call(this,state_50169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__46288__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__46288__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__46288__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__46288__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__46288__auto__;
})()
;})(switch__46287__auto__,c__46399__auto___50187,out))
})();
var state__46401__auto__ = (function (){var statearr_50186 = f__46400__auto__.call(null);
(statearr_50186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46399__auto___50187);

return statearr_50186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46401__auto__);
});})(c__46399__auto___50187,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__50196,opts){
var map__50200 = p__50196;
var map__50200__$1 = ((((!((map__50200 == null)))?((((map__50200.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50200.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50200):map__50200);
var eval_body__$1 = cljs.core.get.call(null,map__50200__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__50200__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__35826__auto__ = eval_body__$1;
if(cljs.core.truth_(and__35826__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__35826__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e50202){var e = e50202;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__50203_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__50203_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__50208){
var vec__50209 = p__50208;
var k = cljs.core.nth.call(null,vec__50209,(0),null);
var v = cljs.core.nth.call(null,vec__50209,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__50210){
var vec__50211 = p__50210;
var k = cljs.core.nth.call(null,vec__50211,(0),null);
var v = cljs.core.nth.call(null,vec__50211,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__50215,p__50216){
var map__50463 = p__50215;
var map__50463__$1 = ((((!((map__50463 == null)))?((((map__50463.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50463.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50463):map__50463);
var opts = map__50463__$1;
var before_jsload = cljs.core.get.call(null,map__50463__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__50463__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__50463__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__50464 = p__50216;
var map__50464__$1 = ((((!((map__50464 == null)))?((((map__50464.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50464.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50464):map__50464);
var msg = map__50464__$1;
var files = cljs.core.get.call(null,map__50464__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__50464__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__50464__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__46399__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46399__auto__,map__50463,map__50463__$1,opts,before_jsload,on_jsload,reload_dependents,map__50464,map__50464__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__46400__auto__ = (function (){var switch__46287__auto__ = ((function (c__46399__auto__,map__50463,map__50463__$1,opts,before_jsload,on_jsload,reload_dependents,map__50464,map__50464__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_50617){
var state_val_50618 = (state_50617[(1)]);
if((state_val_50618 === (7))){
var inst_50480 = (state_50617[(7)]);
var inst_50479 = (state_50617[(8)]);
var inst_50481 = (state_50617[(9)]);
var inst_50478 = (state_50617[(10)]);
var inst_50486 = cljs.core._nth.call(null,inst_50479,inst_50481);
var inst_50487 = figwheel.client.file_reloading.eval_body.call(null,inst_50486,opts);
var inst_50488 = (inst_50481 + (1));
var tmp50619 = inst_50480;
var tmp50620 = inst_50479;
var tmp50621 = inst_50478;
var inst_50478__$1 = tmp50621;
var inst_50479__$1 = tmp50620;
var inst_50480__$1 = tmp50619;
var inst_50481__$1 = inst_50488;
var state_50617__$1 = (function (){var statearr_50622 = state_50617;
(statearr_50622[(7)] = inst_50480__$1);

(statearr_50622[(11)] = inst_50487);

(statearr_50622[(8)] = inst_50479__$1);

(statearr_50622[(9)] = inst_50481__$1);

(statearr_50622[(10)] = inst_50478__$1);

return statearr_50622;
})();
var statearr_50623_50709 = state_50617__$1;
(statearr_50623_50709[(2)] = null);

(statearr_50623_50709[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50618 === (20))){
var inst_50521 = (state_50617[(12)]);
var inst_50529 = figwheel.client.file_reloading.sort_files.call(null,inst_50521);
var state_50617__$1 = state_50617;
var statearr_50624_50710 = state_50617__$1;
(statearr_50624_50710[(2)] = inst_50529);

(statearr_50624_50710[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50618 === (27))){
var state_50617__$1 = state_50617;
var statearr_50625_50711 = state_50617__$1;
(statearr_50625_50711[(2)] = null);

(statearr_50625_50711[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50618 === (1))){
var inst_50470 = (state_50617[(13)]);
var inst_50467 = before_jsload.call(null,files);
var inst_50468 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_50469 = (function (){return ((function (inst_50470,inst_50467,inst_50468,state_val_50618,c__46399__auto__,map__50463,map__50463__$1,opts,before_jsload,on_jsload,reload_dependents,map__50464,map__50464__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__50212_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__50212_SHARP_);
});
;})(inst_50470,inst_50467,inst_50468,state_val_50618,c__46399__auto__,map__50463,map__50463__$1,opts,before_jsload,on_jsload,reload_dependents,map__50464,map__50464__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50470__$1 = cljs.core.filter.call(null,inst_50469,files);
var inst_50471 = cljs.core.not_empty.call(null,inst_50470__$1);
var state_50617__$1 = (function (){var statearr_50626 = state_50617;
(statearr_50626[(14)] = inst_50467);

(statearr_50626[(15)] = inst_50468);

(statearr_50626[(13)] = inst_50470__$1);

return statearr_50626;
})();
if(cljs.core.truth_(inst_50471)){
var statearr_50627_50712 = state_50617__$1;
(statearr_50627_50712[(1)] = (2));

} else {
var statearr_50628_50713 = state_50617__$1;
(statearr_50628_50713[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50618 === (24))){
var state_50617__$1 = state_50617;
var statearr_50629_50714 = state_50617__$1;
(statearr_50629_50714[(2)] = null);

(statearr_50629_50714[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50618 === (39))){
var inst_50571 = (state_50617[(16)]);
var state_50617__$1 = state_50617;
var statearr_50630_50715 = state_50617__$1;
(statearr_50630_50715[(2)] = inst_50571);

(statearr_50630_50715[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50618 === (46))){
var inst_50612 = (state_50617[(2)]);
var state_50617__$1 = state_50617;
var statearr_50631_50716 = state_50617__$1;
(statearr_50631_50716[(2)] = inst_50612);

(statearr_50631_50716[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50618 === (4))){
var inst_50515 = (state_50617[(2)]);
var inst_50516 = cljs.core.List.EMPTY;
var inst_50517 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_50516);
var inst_50518 = (function (){return ((function (inst_50515,inst_50516,inst_50517,state_val_50618,c__46399__auto__,map__50463,map__50463__$1,opts,before_jsload,on_jsload,reload_dependents,map__50464,map__50464__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__50213_SHARP_){
var and__35826__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__50213_SHARP_);
if(cljs.core.truth_(and__35826__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__50213_SHARP_));
} else {
return and__35826__auto__;
}
});
;})(inst_50515,inst_50516,inst_50517,state_val_50618,c__46399__auto__,map__50463,map__50463__$1,opts,before_jsload,on_jsload,reload_dependents,map__50464,map__50464__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50519 = cljs.core.filter.call(null,inst_50518,files);
var inst_50520 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_50521 = cljs.core.concat.call(null,inst_50519,inst_50520);
var state_50617__$1 = (function (){var statearr_50632 = state_50617;
(statearr_50632[(17)] = inst_50515);

(statearr_50632[(12)] = inst_50521);

(statearr_50632[(18)] = inst_50517);

return statearr_50632;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_50633_50717 = state_50617__$1;
(statearr_50633_50717[(1)] = (16));

} else {
var statearr_50634_50718 = state_50617__$1;
(statearr_50634_50718[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50618 === (15))){
var inst_50505 = (state_50617[(2)]);
var state_50617__$1 = state_50617;
var statearr_50635_50719 = state_50617__$1;
(statearr_50635_50719[(2)] = inst_50505);

(statearr_50635_50719[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50618 === (21))){
var inst_50531 = (state_50617[(19)]);
var inst_50531__$1 = (state_50617[(2)]);
var inst_50532 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_50531__$1);
var state_50617__$1 = (function (){var statearr_50636 = state_50617;
(statearr_50636[(19)] = inst_50531__$1);

return statearr_50636;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50617__$1,(22),inst_50532);
} else {
if((state_val_50618 === (31))){
var inst_50615 = (state_50617[(2)]);
var state_50617__$1 = state_50617;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50617__$1,inst_50615);
} else {
if((state_val_50618 === (32))){
var inst_50571 = (state_50617[(16)]);
var inst_50576 = inst_50571.cljs$lang$protocol_mask$partition0$;
var inst_50577 = (inst_50576 & (64));
var inst_50578 = inst_50571.cljs$core$ISeq$;
var inst_50579 = (inst_50577) || (inst_50578);
var state_50617__$1 = state_50617;
if(cljs.core.truth_(inst_50579)){
var statearr_50637_50720 = state_50617__$1;
(statearr_50637_50720[(1)] = (35));

} else {
var statearr_50638_50721 = state_50617__$1;
(statearr_50638_50721[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50618 === (40))){
var inst_50592 = (state_50617[(20)]);
var inst_50591 = (state_50617[(2)]);
var inst_50592__$1 = cljs.core.get.call(null,inst_50591,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_50593 = cljs.core.get.call(null,inst_50591,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_50594 = cljs.core.not_empty.call(null,inst_50592__$1);
var state_50617__$1 = (function (){var statearr_50639 = state_50617;
(statearr_50639[(21)] = inst_50593);

(statearr_50639[(20)] = inst_50592__$1);

return statearr_50639;
})();
if(cljs.core.truth_(inst_50594)){
var statearr_50640_50722 = state_50617__$1;
(statearr_50640_50722[(1)] = (41));

} else {
var statearr_50641_50723 = state_50617__$1;
(statearr_50641_50723[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50618 === (33))){
var state_50617__$1 = state_50617;
var statearr_50642_50724 = state_50617__$1;
(statearr_50642_50724[(2)] = false);

(statearr_50642_50724[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50618 === (13))){
var inst_50491 = (state_50617[(22)]);
var inst_50495 = cljs.core.chunk_first.call(null,inst_50491);
var inst_50496 = cljs.core.chunk_rest.call(null,inst_50491);
var inst_50497 = cljs.core.count.call(null,inst_50495);
var inst_50478 = inst_50496;
var inst_50479 = inst_50495;
var inst_50480 = inst_50497;
var inst_50481 = (0);
var state_50617__$1 = (function (){var statearr_50643 = state_50617;
(statearr_50643[(7)] = inst_50480);

(statearr_50643[(8)] = inst_50479);

(statearr_50643[(9)] = inst_50481);

(statearr_50643[(10)] = inst_50478);

return statearr_50643;
})();
var statearr_50644_50725 = state_50617__$1;
(statearr_50644_50725[(2)] = null);

(statearr_50644_50725[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50618 === (22))){
var inst_50531 = (state_50617[(19)]);
var inst_50534 = (state_50617[(23)]);
var inst_50539 = (state_50617[(24)]);
var inst_50535 = (state_50617[(25)]);
var inst_50534__$1 = (state_50617[(2)]);
var inst_50535__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_50534__$1);
var inst_50536 = (function (){var all_files = inst_50531;
var res_SINGLEQUOTE_ = inst_50534__$1;
var res = inst_50535__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_50531,inst_50534,inst_50539,inst_50535,inst_50534__$1,inst_50535__$1,state_val_50618,c__46399__auto__,map__50463,map__50463__$1,opts,before_jsload,on_jsload,reload_dependents,map__50464,map__50464__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__50214_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__50214_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_50531,inst_50534,inst_50539,inst_50535,inst_50534__$1,inst_50535__$1,state_val_50618,c__46399__auto__,map__50463,map__50463__$1,opts,before_jsload,on_jsload,reload_dependents,map__50464,map__50464__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50537 = cljs.core.filter.call(null,inst_50536,inst_50534__$1);
var inst_50538 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_50539__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_50538);
var inst_50540 = cljs.core.not_empty.call(null,inst_50539__$1);
var state_50617__$1 = (function (){var statearr_50645 = state_50617;
(statearr_50645[(26)] = inst_50537);

(statearr_50645[(23)] = inst_50534__$1);

(statearr_50645[(24)] = inst_50539__$1);

(statearr_50645[(25)] = inst_50535__$1);

return statearr_50645;
})();
if(cljs.core.truth_(inst_50540)){
var statearr_50646_50726 = state_50617__$1;
(statearr_50646_50726[(1)] = (23));

} else {
var statearr_50647_50727 = state_50617__$1;
(statearr_50647_50727[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50618 === (36))){
var state_50617__$1 = state_50617;
var statearr_50648_50728 = state_50617__$1;
(statearr_50648_50728[(2)] = false);

(statearr_50648_50728[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50618 === (41))){
var inst_50592 = (state_50617[(20)]);
var inst_50596 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_50597 = cljs.core.map.call(null,inst_50596,inst_50592);
var inst_50598 = cljs.core.pr_str.call(null,inst_50597);
var inst_50599 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_50598)].join('');
var inst_50600 = figwheel.client.utils.log.call(null,inst_50599);
var state_50617__$1 = state_50617;
var statearr_50649_50729 = state_50617__$1;
(statearr_50649_50729[(2)] = inst_50600);

(statearr_50649_50729[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50618 === (43))){
var inst_50593 = (state_50617[(21)]);
var inst_50603 = (state_50617[(2)]);
var inst_50604 = cljs.core.not_empty.call(null,inst_50593);
var state_50617__$1 = (function (){var statearr_50650 = state_50617;
(statearr_50650[(27)] = inst_50603);

return statearr_50650;
})();
if(cljs.core.truth_(inst_50604)){
var statearr_50651_50730 = state_50617__$1;
(statearr_50651_50730[(1)] = (44));

} else {
var statearr_50652_50731 = state_50617__$1;
(statearr_50652_50731[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50618 === (29))){
var inst_50571 = (state_50617[(16)]);
var inst_50531 = (state_50617[(19)]);
var inst_50537 = (state_50617[(26)]);
var inst_50534 = (state_50617[(23)]);
var inst_50539 = (state_50617[(24)]);
var inst_50535 = (state_50617[(25)]);
var inst_50567 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_50570 = (function (){var all_files = inst_50531;
var res_SINGLEQUOTE_ = inst_50534;
var res = inst_50535;
var files_not_loaded = inst_50537;
var dependencies_that_loaded = inst_50539;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50571,inst_50531,inst_50537,inst_50534,inst_50539,inst_50535,inst_50567,state_val_50618,c__46399__auto__,map__50463,map__50463__$1,opts,before_jsload,on_jsload,reload_dependents,map__50464,map__50464__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__50569){
var map__50653 = p__50569;
var map__50653__$1 = ((((!((map__50653 == null)))?((((map__50653.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50653.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50653):map__50653);
var namespace = cljs.core.get.call(null,map__50653__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50571,inst_50531,inst_50537,inst_50534,inst_50539,inst_50535,inst_50567,state_val_50618,c__46399__auto__,map__50463,map__50463__$1,opts,before_jsload,on_jsload,reload_dependents,map__50464,map__50464__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50571__$1 = cljs.core.group_by.call(null,inst_50570,inst_50537);
var inst_50573 = (inst_50571__$1 == null);
var inst_50574 = cljs.core.not.call(null,inst_50573);
var state_50617__$1 = (function (){var statearr_50655 = state_50617;
(statearr_50655[(28)] = inst_50567);

(statearr_50655[(16)] = inst_50571__$1);

return statearr_50655;
})();
if(inst_50574){
var statearr_50656_50732 = state_50617__$1;
(statearr_50656_50732[(1)] = (32));

} else {
var statearr_50657_50733 = state_50617__$1;
(statearr_50657_50733[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50618 === (44))){
var inst_50593 = (state_50617[(21)]);
var inst_50606 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_50593);
var inst_50607 = cljs.core.pr_str.call(null,inst_50606);
var inst_50608 = [cljs.core.str("not required: "),cljs.core.str(inst_50607)].join('');
var inst_50609 = figwheel.client.utils.log.call(null,inst_50608);
var state_50617__$1 = state_50617;
var statearr_50658_50734 = state_50617__$1;
(statearr_50658_50734[(2)] = inst_50609);

(statearr_50658_50734[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50618 === (6))){
var inst_50512 = (state_50617[(2)]);
var state_50617__$1 = state_50617;
var statearr_50659_50735 = state_50617__$1;
(statearr_50659_50735[(2)] = inst_50512);

(statearr_50659_50735[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50618 === (28))){
var inst_50537 = (state_50617[(26)]);
var inst_50564 = (state_50617[(2)]);
var inst_50565 = cljs.core.not_empty.call(null,inst_50537);
var state_50617__$1 = (function (){var statearr_50660 = state_50617;
(statearr_50660[(29)] = inst_50564);

return statearr_50660;
})();
if(cljs.core.truth_(inst_50565)){
var statearr_50661_50736 = state_50617__$1;
(statearr_50661_50736[(1)] = (29));

} else {
var statearr_50662_50737 = state_50617__$1;
(statearr_50662_50737[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50618 === (25))){
var inst_50535 = (state_50617[(25)]);
var inst_50551 = (state_50617[(2)]);
var inst_50552 = cljs.core.not_empty.call(null,inst_50535);
var state_50617__$1 = (function (){var statearr_50663 = state_50617;
(statearr_50663[(30)] = inst_50551);

return statearr_50663;
})();
if(cljs.core.truth_(inst_50552)){
var statearr_50664_50738 = state_50617__$1;
(statearr_50664_50738[(1)] = (26));

} else {
var statearr_50665_50739 = state_50617__$1;
(statearr_50665_50739[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50618 === (34))){
var inst_50586 = (state_50617[(2)]);
var state_50617__$1 = state_50617;
if(cljs.core.truth_(inst_50586)){
var statearr_50666_50740 = state_50617__$1;
(statearr_50666_50740[(1)] = (38));

} else {
var statearr_50667_50741 = state_50617__$1;
(statearr_50667_50741[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50618 === (17))){
var state_50617__$1 = state_50617;
var statearr_50668_50742 = state_50617__$1;
(statearr_50668_50742[(2)] = recompile_dependents);

(statearr_50668_50742[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50618 === (3))){
var state_50617__$1 = state_50617;
var statearr_50669_50743 = state_50617__$1;
(statearr_50669_50743[(2)] = null);

(statearr_50669_50743[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50618 === (12))){
var inst_50508 = (state_50617[(2)]);
var state_50617__$1 = state_50617;
var statearr_50670_50744 = state_50617__$1;
(statearr_50670_50744[(2)] = inst_50508);

(statearr_50670_50744[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50618 === (2))){
var inst_50470 = (state_50617[(13)]);
var inst_50477 = cljs.core.seq.call(null,inst_50470);
var inst_50478 = inst_50477;
var inst_50479 = null;
var inst_50480 = (0);
var inst_50481 = (0);
var state_50617__$1 = (function (){var statearr_50671 = state_50617;
(statearr_50671[(7)] = inst_50480);

(statearr_50671[(8)] = inst_50479);

(statearr_50671[(9)] = inst_50481);

(statearr_50671[(10)] = inst_50478);

return statearr_50671;
})();
var statearr_50672_50745 = state_50617__$1;
(statearr_50672_50745[(2)] = null);

(statearr_50672_50745[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50618 === (23))){
var inst_50531 = (state_50617[(19)]);
var inst_50537 = (state_50617[(26)]);
var inst_50534 = (state_50617[(23)]);
var inst_50539 = (state_50617[(24)]);
var inst_50535 = (state_50617[(25)]);
var inst_50542 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_50544 = (function (){var all_files = inst_50531;
var res_SINGLEQUOTE_ = inst_50534;
var res = inst_50535;
var files_not_loaded = inst_50537;
var dependencies_that_loaded = inst_50539;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50531,inst_50537,inst_50534,inst_50539,inst_50535,inst_50542,state_val_50618,c__46399__auto__,map__50463,map__50463__$1,opts,before_jsload,on_jsload,reload_dependents,map__50464,map__50464__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__50543){
var map__50673 = p__50543;
var map__50673__$1 = ((((!((map__50673 == null)))?((((map__50673.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50673.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50673):map__50673);
var request_url = cljs.core.get.call(null,map__50673__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50531,inst_50537,inst_50534,inst_50539,inst_50535,inst_50542,state_val_50618,c__46399__auto__,map__50463,map__50463__$1,opts,before_jsload,on_jsload,reload_dependents,map__50464,map__50464__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50545 = cljs.core.reverse.call(null,inst_50539);
var inst_50546 = cljs.core.map.call(null,inst_50544,inst_50545);
var inst_50547 = cljs.core.pr_str.call(null,inst_50546);
var inst_50548 = figwheel.client.utils.log.call(null,inst_50547);
var state_50617__$1 = (function (){var statearr_50675 = state_50617;
(statearr_50675[(31)] = inst_50542);

return statearr_50675;
})();
var statearr_50676_50746 = state_50617__$1;
(statearr_50676_50746[(2)] = inst_50548);

(statearr_50676_50746[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50618 === (35))){
var state_50617__$1 = state_50617;
var statearr_50677_50747 = state_50617__$1;
(statearr_50677_50747[(2)] = true);

(statearr_50677_50747[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50618 === (19))){
var inst_50521 = (state_50617[(12)]);
var inst_50527 = figwheel.client.file_reloading.expand_files.call(null,inst_50521);
var state_50617__$1 = state_50617;
var statearr_50678_50748 = state_50617__$1;
(statearr_50678_50748[(2)] = inst_50527);

(statearr_50678_50748[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50618 === (11))){
var state_50617__$1 = state_50617;
var statearr_50679_50749 = state_50617__$1;
(statearr_50679_50749[(2)] = null);

(statearr_50679_50749[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50618 === (9))){
var inst_50510 = (state_50617[(2)]);
var state_50617__$1 = state_50617;
var statearr_50680_50750 = state_50617__$1;
(statearr_50680_50750[(2)] = inst_50510);

(statearr_50680_50750[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50618 === (5))){
var inst_50480 = (state_50617[(7)]);
var inst_50481 = (state_50617[(9)]);
var inst_50483 = (inst_50481 < inst_50480);
var inst_50484 = inst_50483;
var state_50617__$1 = state_50617;
if(cljs.core.truth_(inst_50484)){
var statearr_50681_50751 = state_50617__$1;
(statearr_50681_50751[(1)] = (7));

} else {
var statearr_50682_50752 = state_50617__$1;
(statearr_50682_50752[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50618 === (14))){
var inst_50491 = (state_50617[(22)]);
var inst_50500 = cljs.core.first.call(null,inst_50491);
var inst_50501 = figwheel.client.file_reloading.eval_body.call(null,inst_50500,opts);
var inst_50502 = cljs.core.next.call(null,inst_50491);
var inst_50478 = inst_50502;
var inst_50479 = null;
var inst_50480 = (0);
var inst_50481 = (0);
var state_50617__$1 = (function (){var statearr_50683 = state_50617;
(statearr_50683[(7)] = inst_50480);

(statearr_50683[(8)] = inst_50479);

(statearr_50683[(9)] = inst_50481);

(statearr_50683[(32)] = inst_50501);

(statearr_50683[(10)] = inst_50478);

return statearr_50683;
})();
var statearr_50684_50753 = state_50617__$1;
(statearr_50684_50753[(2)] = null);

(statearr_50684_50753[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50618 === (45))){
var state_50617__$1 = state_50617;
var statearr_50685_50754 = state_50617__$1;
(statearr_50685_50754[(2)] = null);

(statearr_50685_50754[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50618 === (26))){
var inst_50531 = (state_50617[(19)]);
var inst_50537 = (state_50617[(26)]);
var inst_50534 = (state_50617[(23)]);
var inst_50539 = (state_50617[(24)]);
var inst_50535 = (state_50617[(25)]);
var inst_50554 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_50556 = (function (){var all_files = inst_50531;
var res_SINGLEQUOTE_ = inst_50534;
var res = inst_50535;
var files_not_loaded = inst_50537;
var dependencies_that_loaded = inst_50539;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50531,inst_50537,inst_50534,inst_50539,inst_50535,inst_50554,state_val_50618,c__46399__auto__,map__50463,map__50463__$1,opts,before_jsload,on_jsload,reload_dependents,map__50464,map__50464__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__50555){
var map__50686 = p__50555;
var map__50686__$1 = ((((!((map__50686 == null)))?((((map__50686.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50686.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50686):map__50686);
var namespace = cljs.core.get.call(null,map__50686__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__50686__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50531,inst_50537,inst_50534,inst_50539,inst_50535,inst_50554,state_val_50618,c__46399__auto__,map__50463,map__50463__$1,opts,before_jsload,on_jsload,reload_dependents,map__50464,map__50464__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50557 = cljs.core.map.call(null,inst_50556,inst_50535);
var inst_50558 = cljs.core.pr_str.call(null,inst_50557);
var inst_50559 = figwheel.client.utils.log.call(null,inst_50558);
var inst_50560 = (function (){var all_files = inst_50531;
var res_SINGLEQUOTE_ = inst_50534;
var res = inst_50535;
var files_not_loaded = inst_50537;
var dependencies_that_loaded = inst_50539;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50531,inst_50537,inst_50534,inst_50539,inst_50535,inst_50554,inst_50556,inst_50557,inst_50558,inst_50559,state_val_50618,c__46399__auto__,map__50463,map__50463__$1,opts,before_jsload,on_jsload,reload_dependents,map__50464,map__50464__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50531,inst_50537,inst_50534,inst_50539,inst_50535,inst_50554,inst_50556,inst_50557,inst_50558,inst_50559,state_val_50618,c__46399__auto__,map__50463,map__50463__$1,opts,before_jsload,on_jsload,reload_dependents,map__50464,map__50464__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50561 = setTimeout(inst_50560,(10));
var state_50617__$1 = (function (){var statearr_50688 = state_50617;
(statearr_50688[(33)] = inst_50559);

(statearr_50688[(34)] = inst_50554);

return statearr_50688;
})();
var statearr_50689_50755 = state_50617__$1;
(statearr_50689_50755[(2)] = inst_50561);

(statearr_50689_50755[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50618 === (16))){
var state_50617__$1 = state_50617;
var statearr_50690_50756 = state_50617__$1;
(statearr_50690_50756[(2)] = reload_dependents);

(statearr_50690_50756[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50618 === (38))){
var inst_50571 = (state_50617[(16)]);
var inst_50588 = cljs.core.apply.call(null,cljs.core.hash_map,inst_50571);
var state_50617__$1 = state_50617;
var statearr_50691_50757 = state_50617__$1;
(statearr_50691_50757[(2)] = inst_50588);

(statearr_50691_50757[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50618 === (30))){
var state_50617__$1 = state_50617;
var statearr_50692_50758 = state_50617__$1;
(statearr_50692_50758[(2)] = null);

(statearr_50692_50758[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50618 === (10))){
var inst_50491 = (state_50617[(22)]);
var inst_50493 = cljs.core.chunked_seq_QMARK_.call(null,inst_50491);
var state_50617__$1 = state_50617;
if(inst_50493){
var statearr_50693_50759 = state_50617__$1;
(statearr_50693_50759[(1)] = (13));

} else {
var statearr_50694_50760 = state_50617__$1;
(statearr_50694_50760[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50618 === (18))){
var inst_50525 = (state_50617[(2)]);
var state_50617__$1 = state_50617;
if(cljs.core.truth_(inst_50525)){
var statearr_50695_50761 = state_50617__$1;
(statearr_50695_50761[(1)] = (19));

} else {
var statearr_50696_50762 = state_50617__$1;
(statearr_50696_50762[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50618 === (42))){
var state_50617__$1 = state_50617;
var statearr_50697_50763 = state_50617__$1;
(statearr_50697_50763[(2)] = null);

(statearr_50697_50763[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50618 === (37))){
var inst_50583 = (state_50617[(2)]);
var state_50617__$1 = state_50617;
var statearr_50698_50764 = state_50617__$1;
(statearr_50698_50764[(2)] = inst_50583);

(statearr_50698_50764[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50618 === (8))){
var inst_50491 = (state_50617[(22)]);
var inst_50478 = (state_50617[(10)]);
var inst_50491__$1 = cljs.core.seq.call(null,inst_50478);
var state_50617__$1 = (function (){var statearr_50699 = state_50617;
(statearr_50699[(22)] = inst_50491__$1);

return statearr_50699;
})();
if(inst_50491__$1){
var statearr_50700_50765 = state_50617__$1;
(statearr_50700_50765[(1)] = (10));

} else {
var statearr_50701_50766 = state_50617__$1;
(statearr_50701_50766[(1)] = (11));

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
}
});})(c__46399__auto__,map__50463,map__50463__$1,opts,before_jsload,on_jsload,reload_dependents,map__50464,map__50464__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__46287__auto__,c__46399__auto__,map__50463,map__50463__$1,opts,before_jsload,on_jsload,reload_dependents,map__50464,map__50464__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__46288__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__46288__auto____0 = (function (){
var statearr_50705 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50705[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__46288__auto__);

(statearr_50705[(1)] = (1));

return statearr_50705;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__46288__auto____1 = (function (state_50617){
while(true){
var ret_value__46289__auto__ = (function (){try{while(true){
var result__46290__auto__ = switch__46287__auto__.call(null,state_50617);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46290__auto__;
}
break;
}
}catch (e50706){if((e50706 instanceof Object)){
var ex__46291__auto__ = e50706;
var statearr_50707_50767 = state_50617;
(statearr_50707_50767[(5)] = ex__46291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50706;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50768 = state_50617;
state_50617 = G__50768;
continue;
} else {
return ret_value__46289__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__46288__auto__ = function(state_50617){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__46288__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__46288__auto____1.call(this,state_50617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__46288__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__46288__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__46288__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__46288__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__46288__auto__;
})()
;})(switch__46287__auto__,c__46399__auto__,map__50463,map__50463__$1,opts,before_jsload,on_jsload,reload_dependents,map__50464,map__50464__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__46401__auto__ = (function (){var statearr_50708 = f__46400__auto__.call(null);
(statearr_50708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46399__auto__);

return statearr_50708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46401__auto__);
});})(c__46399__auto__,map__50463,map__50463__$1,opts,before_jsload,on_jsload,reload_dependents,map__50464,map__50464__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__46399__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__50771,link){
var map__50774 = p__50771;
var map__50774__$1 = ((((!((map__50774 == null)))?((((map__50774.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50774.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50774):map__50774);
var file = cljs.core.get.call(null,map__50774__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__50774,map__50774__$1,file){
return (function (p1__50769_SHARP_,p2__50770_SHARP_){
if(cljs.core._EQ_.call(null,p1__50769_SHARP_,p2__50770_SHARP_)){
return p1__50769_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__50774,map__50774__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__50780){
var map__50781 = p__50780;
var map__50781__$1 = ((((!((map__50781 == null)))?((((map__50781.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50781.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50781):map__50781);
var match_length = cljs.core.get.call(null,map__50781__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__50781__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__50776_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__50776_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args50783 = [];
var len__36896__auto___50786 = arguments.length;
var i__36897__auto___50787 = (0);
while(true){
if((i__36897__auto___50787 < len__36896__auto___50786)){
args50783.push((arguments[i__36897__auto___50787]));

var G__50788 = (i__36897__auto___50787 + (1));
i__36897__auto___50787 = G__50788;
continue;
} else {
}
break;
}

var G__50785 = args50783.length;
switch (G__50785) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50783.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__50790_SHARP_,p2__50791_SHARP_){
return cljs.core.assoc.call(null,p1__50790_SHARP_,cljs.core.get.call(null,p2__50791_SHARP_,key),p2__50791_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__50792){
var map__50795 = p__50792;
var map__50795__$1 = ((((!((map__50795 == null)))?((((map__50795.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50795.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50795):map__50795);
var f_data = map__50795__$1;
var file = cljs.core.get.call(null,map__50795__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__50797,files_msg){
var map__50804 = p__50797;
var map__50804__$1 = ((((!((map__50804 == null)))?((((map__50804.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50804.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50804):map__50804);
var opts = map__50804__$1;
var on_cssload = cljs.core.get.call(null,map__50804__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__50806_50810 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__50807_50811 = null;
var count__50808_50812 = (0);
var i__50809_50813 = (0);
while(true){
if((i__50809_50813 < count__50808_50812)){
var f_50814 = cljs.core._nth.call(null,chunk__50807_50811,i__50809_50813);
figwheel.client.file_reloading.reload_css_file.call(null,f_50814);

var G__50815 = seq__50806_50810;
var G__50816 = chunk__50807_50811;
var G__50817 = count__50808_50812;
var G__50818 = (i__50809_50813 + (1));
seq__50806_50810 = G__50815;
chunk__50807_50811 = G__50816;
count__50808_50812 = G__50817;
i__50809_50813 = G__50818;
continue;
} else {
var temp__4425__auto___50819 = cljs.core.seq.call(null,seq__50806_50810);
if(temp__4425__auto___50819){
var seq__50806_50820__$1 = temp__4425__auto___50819;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50806_50820__$1)){
var c__36641__auto___50821 = cljs.core.chunk_first.call(null,seq__50806_50820__$1);
var G__50822 = cljs.core.chunk_rest.call(null,seq__50806_50820__$1);
var G__50823 = c__36641__auto___50821;
var G__50824 = cljs.core.count.call(null,c__36641__auto___50821);
var G__50825 = (0);
seq__50806_50810 = G__50822;
chunk__50807_50811 = G__50823;
count__50808_50812 = G__50824;
i__50809_50813 = G__50825;
continue;
} else {
var f_50826 = cljs.core.first.call(null,seq__50806_50820__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_50826);

var G__50827 = cljs.core.next.call(null,seq__50806_50820__$1);
var G__50828 = null;
var G__50829 = (0);
var G__50830 = (0);
seq__50806_50810 = G__50827;
chunk__50807_50811 = G__50828;
count__50808_50812 = G__50829;
i__50809_50813 = G__50830;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__50804,map__50804__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__50804,map__50804__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map