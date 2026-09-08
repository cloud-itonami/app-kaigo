goog.provide('cloud_itonami.app_kaigo.desktop');
if((typeof cloud_itonami !== 'undefined') && (typeof cloud_itonami.app_kaigo !== 'undefined') && (typeof cloud_itonami.app_kaigo.desktop !== 'undefined') && (typeof cloud_itonami.app_kaigo.desktop.root !== 'undefined')){
} else {
cloud_itonami.app_kaigo.desktop.root = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
/**
 * The old +page.svelte <svelte:head> set the document title and a
 *   SoftwareApplication JSON-LD block at runtime (the SvelteKit static
 *   fallback shipped neither — README §2). Reproduce that here.
 */
cloud_itonami.app_kaigo.desktop.set_head_BANG_ = (function cloud_itonami$app_kaigo$desktop$set_head_BANG_(){
(document.title = "Giemon Kaigo \u2014 \u30ED\u30DC\u30C3\u30C8\u304C\u652F\u3048\u308B\u5728\u5B85\u4ECB\u8B77\u30FB\u4F4F\u5B85\u6539\u4FEE\u30FB\u4ECB\u8B77\u4FDD\u967A\u30CA\u30D3");

var temp__5825__auto___20201 = document.createElement("link");
if(cljs.core.truth_(temp__5825__auto___20201)){
var link_20202 = temp__5825__auto___20201;
link_20202.setAttribute("rel","stylesheet");

link_20202.setAttribute("href","https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap");

document.head.appendChild(link_20202);
} else {
}

var temp__5825__auto__ = document.createElement("script");
if(cljs.core.truth_(temp__5825__auto__)){
var script = temp__5825__auto__;
script.setAttribute("type","application/ld+json");

(script.textContent = JSON.stringify(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 7, ["@context","https://schema.org","@type","SoftwareApplication","name","Giemon Kaigo","description","Giemon \u30ED\u30DC\u30C3\u30C8\u3092\u6D3B\u7528\u3057\u305F\u5728\u5B85\u4ECB\u8B77\u652F\u63F4\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u3002\u4F4F\u5B85\u6539\u4FEE\u30FB\u4ECB\u8B77\u4FDD\u967A\u30CA\u30D3\u30FBWell-Becoming AI\u3002","applicationCategory","HealthApplication","operatingSystem","Web","brand",new cljs.core.PersistentArrayMap(null, 2, ["@type","Brand","name","Giemon"], null)], null))));

return document.head.appendChild(script);
} else {
return null;
}
});
cloud_itonami.app_kaigo.desktop.init_BANG_ = (function cloud_itonami$app_kaigo$desktop$init_BANG_(){
cloud_itonami.app_kaigo.desktop.set_head_BANG_();

var el = document.getElementById("app");
if(cljs.core.truth_(cljs.core.deref(cloud_itonami.app_kaigo.desktop.root))){
} else {
cljs.core.reset_BANG_(cloud_itonami.app_kaigo.desktop.root,reagent.dom.client.create_root(el));
}

return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cloud_itonami.app_kaigo.desktop.root),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.app_kaigo.ui.root], null));
});

//# sourceMappingURL=cloud_itonami.app_kaigo.desktop.js.map
