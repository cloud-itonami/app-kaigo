(ns cloud-itonami.app-kaigo.desktop
  "Entry point for the shadow-cljs :app build (web/dist/js/main.js, loaded
  by web/index.html) — same mount pattern as cloud-itonami.rare-earth.desktop.
  This landing page is fully static content + local UI state, so there is no
  async load! step (the original Svelte app fetched nothing on mount)."
  (:require [reagent.dom.client :as rdomc]
            [cloud-itonami.app-kaigo.ui :as ui]))

(defonce root (atom nil))

(defn- set-head!
  "The old +page.svelte <svelte:head> set the document title and a
  SoftwareApplication JSON-LD block at runtime (the SvelteKit static
  fallback shipped neither — README §2). Reproduce that here."
  []
  (set! (.-title js/document)
        "Giemon Kaigo — ロボットが支える在宅介護・住宅改修・介護保険ナビ")
  (when-let [link (.createElement js/document "link")]
    (.setAttribute link "rel" "stylesheet")
    (.setAttribute link "href"
                   "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap")
    (.appendChild (.-head js/document) link))
  (when-let [script (.createElement js/document "script")]
    (.setAttribute script "type" "application/ld+json")
    (set! (.-textContent script)
          ;; js/JSON.stringify on clj->js — `json-encode` does not exist in
          ;; CLJS (the compile WARNING #1 was an undeclared var = runtime
          ;; boom). JSON-LD content ported verbatim from +page.svelte:146-156.
          (js/JSON.stringify
            (clj->js
              {"@context" "https://schema.org"
               "@type" "SoftwareApplication"
               "name" "Giemon Kaigo"
               "description" "Giemon ロボットを活用した在宅介護支援プラットフォーム。住宅改修・介護保険ナビ・Well-Becoming AI。"
               "applicationCategory" "HealthApplication"
               "operatingSystem" "Web"
               "brand" {"@type" "Brand" "name" "Giemon"}})))
    (.appendChild (.-head js/document) script)))

(defn init! []
  (set-head!)
  (let [el (.getElementById js/document "app")]
    (when-not @root
      (reset! root (rdomc/create-root el)))
    (rdomc/render @root [ui/root])))
