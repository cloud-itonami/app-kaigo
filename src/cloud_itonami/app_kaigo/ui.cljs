(ns cloud-itonami.app-kaigo.ui
  "View tree for the app-kaigo (kaigo-hp) landing UI.
  Ported 1:1 from the former appview/kaigo-hp/svelte/src/routes/+page.svelte
  (DADS-style 1-page marketing SPA: header + hero + robot lineup tabs with
  3D viewer iframe + housing-reform benefit calculator + care-insurance
  navigator + Well-Becoming + pricing + FAQ + footer). Structural chrome
  comes from appkit.core / kotoba-ui.core (murakumo-studio構成); the
  original Tailwind utility classes are reproduced as an equivalent hand-
  rolled `kg-*` CSS layer embedded via [:style], mirroring
  cloud-itonami.rare-earth.ui / cloud-itonami.public-malak.ui."
  (:require [appkit.core :as shape]
            [clojure.string :as str]
            [cloud-itonami.app-kaigo.state :as state]))

(def css-text
  "
.kg-app { font-family: 'Noto Sans JP', 'Hiragino Kaku Gothic ProN', 'Segoe UI', sans-serif; color: #1a1a1a; background: #fff; line-height: 1.5; }
.kg-app a { text-decoration: none; color: inherit; }
.kg-app a:hover { text-decoration: none; }
.kg-app h1, .kg-app h2, .kg-app h3, .kg-app p, .kg-app dl, .kg-app dd, .kg-app ol, .kg-app ul { margin: 0; }
.kg-app ol, .kg-app ul { padding: 0; list-style: none; }
.kg-sr-link { position: static; display: block; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); }
.kg-sr-link:focus { position: fixed; top: 16px; left: 16px; z-index: 100; width: auto; height: auto; clip-path: none; padding: 8px 16px; background: #0017c1; color: #fff; border-radius: 4px; }
.kg-container { max-width: 1152px; margin: 0 auto; padding: 0 16px; }
.kg-container-narrow { max-width: 1024px; }
/* header */
.kg-header { background: #fff; border-bottom: 1px solid #e6e6e6; position: sticky; top: 0; z-index: 50; }
.kg-utility { background: #f9f9f9; border-bottom: 1px solid #e6e6e6; }
.kg-utility-inner { display: flex; align-items: center; justify-content: space-between; height: 32px; font-size: 11px; color: #616161; }
.kg-utility a { color: #0017c1; }
.kg-nav-row { display: flex; align-items: center; justify-content: space-between; height: 56px; }
.kg-brand { display: flex; align-items: center; gap: 8px; font-weight: 700; font-size: 15px; }
.kg-brand .kg-accent { color: #0017c1; }
.kg-nav-desktop { display: flex; align-items: center; gap: 4px; font-size: 13px; }
.kg-nav-link { padding: 8px 12px; color: #1a1a1a; border-radius: 4px; transition: background-color .15s; }
.kg-nav-link:hover { background: #f2f2f2; }
.kg-nav-cta { margin-left: 8px; padding: 8px 16px; background: #0017c1; color: #fff !important; font-weight: 500; border-radius: 4px; font-size: 13px; transition: background-color .15s; }
.kg-nav-cta:hover { background: #0836a3; }
.kg-burger { display: none; padding: 8px; color: #1a1a1a; background: #fff; border: 1px solid #e6e6e6; border-radius: 4px; cursor: pointer; }
.kg-burger:hover { background: #f2f2f2; }
.kg-nav-mobile { background: #fff; border-top: 1px solid #e6e6e6; padding: 8px 16px 12px; }
.kg-nav-mobile-link { display: block; padding: 12px; color: #1a1a1a; font-size: 14px; border-bottom: 1px solid #f2f2f2; }
.kg-nav-mobile-link:hover { background: #f9f9f9; }
.kg-nav-mobile-cta { display: block; margin-top: 12px; padding: 10px 16px; background: #0017c1; color: #fff; font-size: 14px; font-weight: 500; border-radius: 4px; text-align: center; }
/* sections */
.kg-section { padding: 64px 16px; }
.kg-section-gray { background: #f9f9f9; border-top: 1px solid #e6e6e6; border-bottom: 1px solid #e6e6e6; }
.kg-section-white { background: #fff; border-top: 1px solid #e6e6e6; }
.kg-kicker { margin-bottom: 8px; font-size: 11px; font-weight: 500; color: #0017c1; text-transform: uppercase; letter-spacing: .08em; }
.kg-h2 { font-size: 1.5rem; font-weight: 700; margin-bottom: 8px; }
.kg-sub { color: #616161; font-size: 14px; margin-bottom: 32px; max-width: 576px; }
/* hero */
.kg-hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; }
.kg-pill { display: inline-flex; align-items: center; gap: 6px; padding: 4px 12px; border-radius: 999px; background: #e8f1fe; color: #0017c1; font-size: 11px; font-weight: 500; margin-bottom: 24px; }
.kg-h1 { font-size: clamp(1.8rem, 4vw, 2.8rem); font-weight: 700; line-height: 1.15; margin-bottom: 16px; }
.kg-h1 .kg-accent { color: #0017c1; }
.kg-lede { color: #464646; font-size: 16px; line-height: 1.65; margin-bottom: 24px; }
.kg-cta-row { display: flex; flex-wrap: wrap; gap: 12px; }
.kg-btn-primary { padding: 12px 24px; background: #0017c1; color: #fff !important; font-weight: 500; border-radius: 4px; font-size: 15px; box-shadow: 0 1px 2px rgba(0,0,0,.05); transition: background-color .15s; }
.kg-btn-primary:hover { background: #0836a3; }
.kg-btn-secondary { padding: 12px 24px; border: 1px solid #b2b2b2; color: #1a1a1a; font-weight: 500; border-radius: 4px; font-size: 15px; transition: border-color .15s; }
.kg-btn-secondary:hover { border-color: #616161; }
.kg-stat-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.kg-stat { background: #fff; border: 1px solid #e6e6e6; border-radius: 8px; padding: 20px; text-align: center; box-shadow: 0 1px 2px rgba(0,0,0,.05); }
.kg-stat .icon { font-size: 24px; margin-bottom: 8px; }
.kg-stat .v { font-size: 1.5rem; font-weight: 700; color: #0017c1; line-height: 1; }
.kg-stat .l { font-size: 11px; color: #616161; margin-top: 4px; }
/* robots */
.kg-tabs { display: flex; gap: 8px; margin-bottom: 24px; flex-wrap: wrap; border-bottom: 1px solid #e6e6e6; }
.kg-tab { padding: 10px 16px; font-size: 14px; font-weight: 500; background: none; border: none; border-bottom: 2px solid transparent; margin-bottom: -1px; color: #616161; cursor: pointer; transition: color .15s, border-color .15s; }
.kg-tab:hover { color: #1a1a1a; border-bottom-color: #b2b2b2; }
.kg-tab-active { border-bottom-color: #0017c1; color: #0017c1; }
.kg-tab .kg-tab-desc { margin-left: 6px; font-size: 10px; opacity: .7; }
.kg-robot-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; align-items: start; }
.kg-viewer { position: relative; background: #f2f2f2; border: 1px solid #e6e6e6; border-radius: 8px; overflow: hidden; aspect-ratio: 16/10; }
.kg-viewer iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
.kg-viewer-note { position: absolute; bottom: 8px; right: 8px; font-size: 9px; color: #949494; pointer-events: none; user-select: none; background: rgba(255,255,255,.8); padding: 2px 6px; border-radius: 4px; }
.kg-robot-meta .tag { display: inline-flex; padding: 2px 10px; border-radius: 999px; background: #e8f1fe; color: #0017c1; font-size: 11px; font-weight: 500; margin-bottom: 12px; }
.kg-robot-meta h3 { font-size: 1.1rem; font-weight: 700; margin-bottom: 16px; }
.kg-check-list { display: grid; gap: 10px; }
.kg-check { display: flex; align-items: flex-start; gap: 8px; color: #464646; font-size: 14px; }
.kg-check .ck { color: #259d63; font-weight: 700; flex-shrink: 0; }
.kg-ext-link { margin-top: 20px; display: inline-flex; align-items: center; gap: 4px; color: #0017c1; font-size: 14px; font-weight: 500; }
/* housing */
.kg-card-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; margin-bottom: 48px; }
.kg-housing-card { background: #fff; border: 1px solid #e6e6e6; border-radius: 8px; padding: 16px 20px; transition: border-color .15s; }
.kg-housing-card:hover { border-color: #0017c1; }
.kg-housing-card .icon { font-size: 24px; margin-bottom: 8px; }
.kg-housing-card h3 { color: #1a1a1a; font-weight: 600; font-size: 14px; margin-bottom: 4px; }
.kg-housing-card .desc { color: #616161; font-size: 12px; line-height: 1.6; margin-bottom: 8px; }
.kg-housing-card .cost { color: #0017c1; font-size: 12px; font-weight: 500; }
.kg-calc { background: #fff; border: 1px solid #e6e6e6; border-radius: 8px; padding: 24px; max-width: 672px; }
.kg-calc h3 { font-size: 16px; font-weight: 700; margin-bottom: 20px; }
.kg-calc-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 20px; }
.kg-fieldset { border: 0; padding: 0; margin: 0; }
.kg-legend { color: #616161; font-size: 12px; margin-bottom: 8px; }
.kg-level-row { display: flex; gap: 8px; flex-wrap: wrap; }
.kg-level { width: 40px; height: 40px; border-radius: 4px; border: 1px solid #b2b2b2; background: #fff; color: #1a1a1a; font-size: 14px; font-weight: 500; cursor: pointer; transition: border-color .15s, background-color .15s; }
.kg-level:hover { border-color: #0017c1; }
.kg-level-active { background: #0017c1; border-color: #0017c1; color: #fff; }
.kg-hint { color: #616161; font-size: 10px; margin-top: 8px; }
.kg-range { width: 100%; accent-color: #0017c1; }
.kg-range-ends { display: flex; justify-content: space-between; font-size: 10px; color: #b2b2b2; margin-top: 4px; }
.kg-result-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 12px; }
.kg-result { background: #f9f9f9; border: 1px solid #e6e6e6; border-radius: 4px; padding: 12px; text-align: center; }
.kg-result .l { font-size: 10px; color: #616161; margin-bottom: 4px; }
.kg-result .v { font-size: 14px; font-weight: 700; }
.kg-fineprint { margin-top: 12px; font-size: 10px; color: #949494; }
/* insurance */
.kg-steps { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; margin-bottom: 48px; }
.kg-step { background: #f9f9f9; border: 1px solid #e6e6e6; border-radius: 8px; padding: 16px 20px; }
.kg-step-head { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; }
.kg-step-num { width: 24px; height: 24px; border-radius: 999px; background: #0017c1; color: #fff; font-size: 11px; font-weight: 700; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.kg-step-title { color: #1a1a1a; font-weight: 600; font-size: 14px; }
.kg-step .desc { color: #616161; font-size: 12px; line-height: 1.6; }
.kg-limits { background: #f9f9f9; border: 1px solid #e6e6e6; border-radius: 8px; padding: 24px; max-width: 672px; }
.kg-limits h3 { font-size: 16px; font-weight: 700; margin-bottom: 16px; }
.kg-limit-row { display: flex; align-items: center; gap: 12px; }
.kg-limit-row + .kg-limit-row { margin-top: 12px; }
.kg-limit-label { font-size: 12px; color: #616161; width: 56px; flex-shrink: 0; }
.kg-limit-track { flex: 1; background: #e6e6e6; border-radius: 999px; height: 8px; overflow: hidden; }
.kg-limit-fill { height: 100%; background: #0017c1; border-radius: 999px; }
.kg-limit-value { font-size: 12px; color: #1a1a1a; font-weight: 600; width: 112px; text-align: right; flex-shrink: 0; }
/* well-becoming */
.kg-wb-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: start; }
.kg-wb-grid h3 { font-size: 16px; font-weight: 600; margin-bottom: 16px; }
.kg-axis { display: flex; align-items: flex-start; gap: 12px; padding: 12px; background: #fff; border: 1px solid #e6e6e6; border-radius: 8px; }
.kg-axis + .kg-axis { margin-top: 12px; }
.kg-axis-bar { width: 4px; align-self: stretch; border-radius: 999px; background: #0017c1; flex-shrink: 0; }
.kg-axis dt { color: #1a1a1a; font-size: 14px; font-weight: 600; }
.kg-axis .en { color: #949494; font-size: 10px; margin-left: 6px; font-weight: 400; }
.kg-axis dd { color: #616161; font-size: 12px; margin-top: 2px; }
.kg-spiral-card { background: #fff; border: 1px solid #e6e6e6; border-radius: 8px; padding: 24px; }
.kg-spiral-card h3 { font-size: 16px; font-weight: 600; margin-bottom: 20px; }
.kg-spiral-item { display: flex; align-items: flex-start; gap: 12px; }
.kg-spiral-item + .kg-spiral-item { margin-top: 16px; }
.kg-spiral-icon-col { display: flex; flex-direction: column; align-items: center; flex-shrink: 0; }
.kg-spiral-icon { width: 32px; height: 32px; border-radius: 999px; background: #e8f1fe; border: 1px solid #9cbdfa; display: flex; align-items: center; justify-content: center; font-size: 14px; }
.kg-spiral-connector { width: 1px; height: 16px; background: #e6e6e6; margin-top: 4px; }
.kg-spiral-body { padding-top: 4px; }
.kg-spiral-body .t { color: #1a1a1a; font-size: 14px; font-weight: 600; }
.kg-spiral-body .d { color: #616161; font-size: 12px; margin-top: 2px; }
.kg-circle-note { margin-top: 20px; padding: 12px; background: #f9f9f9; border: 1px solid #e6e6e6; border-radius: 4px; font-size: 12px; color: #616161; line-height: 1.65; }
/* pricing */
.kg-plan-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px; }
.kg-plan { position: relative; display: flex; flex-direction: column; border-radius: 8px; border: 1px solid #e6e6e6; background: #fff; padding: 24px; }
.kg-plan-highlight { border-color: #0017c1; box-shadow: 0 4px 6px rgba(0,0,0,.1); }
.kg-recommend { position: absolute; top: -12px; left: 50%; transform: translateX(-50%); padding: 2px 12px; background: #0017c1; color: #fff; font-size: 11px; font-weight: 700; border-radius: 999px; white-space: nowrap; }
.kg-plan .name { color: #616161; font-size: 14px; font-weight: 500; }
.kg-plan .price-row { margin-top: 8px; display: flex; align-items: baseline; gap: 4px; }
.kg-plan .price { font-size: 1.75rem; font-weight: 700; line-height: 1; }
.kg-plan .price-note { color: #949494; font-size: 12px; }
.kg-plan-features { margin-top: 20px; display: grid; gap: 10px; flex: 1; }
.kg-plan-cta { margin-top: 24px; display: block; text-align: center; padding: 10px 0; border-radius: 4px; font-size: 14px; font-weight: 500; transition: background-color .15s, border-color .15s; }
.kg-plan-cta-solid { background: #0017c1; color: #fff; }
.kg-plan-cta-solid:hover { background: #0836a3; }
.kg-plan-cta-line { border: 1px solid #b2b2b2; color: #0017c1; }
.kg-plan-cta-line:hover { border-color: #0017c1; }
.kg-plan-foot { margin-top: 24px; color: #949494; font-size: 12px; text-align: center; }
/* faq */
.kg-faq details { background: #fff; border: 1px solid #e6e6e6; border-radius: 8px; overflow: hidden; }
.kg-faq details + details { margin-top: 8px; }
.kg-faq summary { padding: 16px 20px; color: #1a1a1a; font-size: 14px; font-weight: 500; cursor: pointer; display: flex; align-items: center; justify-content: space-between; list-style: none; }
.kg-faq summary::-webkit-details-marker { display: none; }
.kg-faq summary .chev { width: 16px; height: 16px; color: #0017c1; flex-shrink: 0; margin-left: 12px; transition: transform .15s; }
.kg-faq details[open] summary .chev { transform: rotate(180deg); }
.kg-faq .answer { padding: 0 20px 16px; color: #464646; font-size: 14px; line-height: 1.65; border-top: 1px solid #f2f2f2; padding-top: 12px; }
/* footer */
.kg-footer { background: #1a1a1a; color: #d2d2d2; padding: 48px 16px; font-size: 14px; }
.kg-footer-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 32px; }
.kg-footer .brand { color: #fff; font-weight: 700; margin-bottom: 12px; display: flex; align-items: center; gap: 8px; }
.kg-footer .about { color: #949494; font-size: 12px; line-height: 1.65; }
.kg-footer .powered { margin-top: 12px; font-size: 10px; color: #616161; }
.kg-footer .powered a { color: #6ea0f7; }
.kg-footer h4 { color: #fff; font-size: 14px; font-weight: 600; margin: 0 0 12px; }
.kg-footer li + li { margin-top: 6px; }
.kg-footer li a { color: #949494; font-size: 12px; }
.kg-footer li a:hover { color: #fff; text-decoration: underline; }
.kg-footer-bar { margin-top: 32px; padding-top: 24px; border-top: 1px solid #282828; display: flex; flex-wrap: wrap; gap: 16px; align-items: center; justify-content: space-between; font-size: 11px; color: #616161; }
/* responsive (approximates the original md:/lg: breakpoints) */
@media (max-width: 900px) {
  .kg-nav-desktop { display: none; }
  .kg-burger { display: block; }
  .kg-hero-grid, .kg-robot-grid, .kg-wb-grid, .kg-calc-grid { grid-template-columns: 1fr; }
  .kg-card-grid, .kg-steps { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .kg-result-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 640px) {
  .kg-card-grid, .kg-steps, .kg-plan-grid, .kg-footer-grid { grid-template-columns: 1fr; }
}
")

(defn- yen [n] (str (.toLocaleString n) " 円"))

(defn- hamburger-icon [open?]
  [:svg {:class "kg-burger-svg", :width 20, :height 20, :viewBox "0 0 24 24"
         :fill "none", :stroke "currentColor", :strokeWidth 2, :aria-hidden true}
   (if open?
     [:path {:strokeLinecap "round", :strokeLinejoin "round", :d "M6 18L18 6M6 6l12 12"}]
     [:path {:strokeLinecap "round", :strokeLinejoin "round", :d "M4 6h16M4 12h16M4 18h16"}])])

;; ─── header ────────────────────────────────────────────────────────────────

(defn- header []
  (let [{:keys [mobile-open]} @state/state]
    [:header.kg-header {:role "banner"}
     [:div.kg-utility
      [:div.kg-container.kg-utility-inner
       [:span "Giemon Kaigo — 在宅介護ロボットプラットフォーム"]
       [:span "お問い合わせ: "
        [:a {:href "mailto:kaigo@etzhayyim.com"} "kaigo@etzhayyim.com"]]]]
     [:div.kg-container.kg-nav-row
      [:a.kg-brand {:href "/"}
       [:span {:aria-hidden true, :style {:font-size "20px"}} "🏠"]
       [:span "Giemon " [:span.kg-accent "Kaigo"]]]
      [:nav.kg-nav-desktop {:aria-label "サイトナビゲーション"}
       (into [:<>]
         (for [[l h] state/nav-links]
           ^{:key h} [:a.kg-nav-link {:href h} l]))
       [:a.kg-nav-cta {:href "/signup"} "無料で始める"]]
      [:button.kg-burger {:on-click state/toggle-mobile!
                          :aria-expanded mobile-open
                          :aria-controls "mobile-nav"
                          :aria-label "メニューを開く"}
       [hamburger-icon mobile-open]]]
     (when mobile-open
       [:nav#mobile-nav.kg-nav-mobile {:aria-label "モバイルナビゲーション"}
        (into [:<>]
          (for [[l h] state/nav-links]
            ^{:key h} [:a.kg-nav-mobile-link {:href h
                                              :on-click state/close-mobile!} l]))
        [:a.kg-nav-mobile-cta {:href "/signup" :on-click state/close-mobile!}
         "無料で始める"]])]))

;; ─── ① hero ────────────────────────────────────────────────────────────────

(defn- hero []
  [:section.kg-section.kg-section-gray
   [:div.kg-container-narrow.kg-container
    [:div.kg-pill "🇯🇵 Giemon ロボット応用 — 介護・住宅・Well-Being"]
    [:div.kg-hero-grid
     [:div
      [:h1.kg-h1 "家で、もっと長く。" [:br] [:span.kg-accent "ロボットと一緒に。"]]
      [:p.kg-lede
       "Giemon ロボット（Otete・Hitogata・Caterpillar）× 介護保険ナビ × 住宅改修支援。"
       [:br]
       "「できないこと」を測る欠損モデルではなく、" [:strong "「できること・なりたいこと」を育てる"]
       " Well-Becoming モデル。"]
      [:div.kg-cta-row
       [:a.kg-btn-primary {:href "/signup"} "無料で試す"]
       [:a.kg-btn-secondary {:href "#robots"} "ロボットを見る →"]]]
     [:div.kg-stat-grid
      (into [:<>]
        (for [[v l icon] state/hero-stats]
          ^{:key v}
          [:div.kg-stat
           [:div.icon {:aria-hidden true} icon]
           [:div.v v]
           [:div.l l]]))]]]])

;; ─── ② robot lineup ────────────────────────────────────────────────────────

(defn- robot-tab [tab selected]
  (let [active? (= (:id tab) selected)]
    [:button {:key (:id tab) :role "tab" :aria-selected active?
              :class (if active? "kg-tab kg-tab-active" "kg-tab")
              :on-click #(state/select-robot! (:id tab))}
     [:span {:aria-hidden true} (:emoji tab)] " " (:label tab)
     [:span.kg-tab-desc {:aria-hidden true} (:desc tab)]]))

(defn- robots []
  (let [selected    (:selected-robot @state/state)
        tab         (first (filter #(= (:id %) selected) state/robot-tabs))
        detail      (get state/robot-details selected)]
    [:section#robots.kg-section.kg-section-white
     [:div.kg-container-narrow.kg-container
      [:div.kg-kicker "Robot Lineup"]
      [:h2.kg-h2 "Giemon 介護ロボット 3 機種"]
      [:p.kg-sub "3D モデルで実物のサイズ感を確認できます"]
      (into [:div.kg-tabs {:role "tablist", :aria-label "ロボット選択"}]
        (for [t state/robot-tabs] [robot-tab t selected]))
      [:div.kg-robot-grid {:role "tabpanel"}
       [:div.kg-viewer
        [:iframe {:src (str "https://giemon.etzhayyim.com/viewer.htm?model=" (:model tab))
                  :title (str "Giemon " selected " 3D ビューア")
                  :loading "lazy", :allow "accelerometer"}]
        [:div.kg-viewer-note "WebGPU / WebGL2"]]
       [:div.kg-robot-meta
        [:div.tag (:tag detail)]
        [:h3 (:h3 detail)]
        (into [:ul.kg-check-list]
          (for [item (:items detail)]
            ^{:key item}
            [:li.kg-check [:span.ck {:aria-hidden true} "✓"] item]))
        [:a.kg-ext-link {:href "https://giemon.etzhayyim.com"
                         :target "_blank", :rel "noopener"}
         "Giemon 製品ページへ →"]]]]]))

;; ─── ③ housing reform + benefit calculator ─────────────────────────────────

(defn- benefit-results []
  (let [{:keys [covered benefit copay self-pay]} (state/benefit-calc)
        cells [["支給対象額" covered "#0017c1"]
               ["支給額"     benefit "#259d63"]
               ["自己負担（対象内）" copay "#b78f00"]
               ["超過自己負担" self-pay "#949494"]]]
    (into [:div.kg-result-grid]
      (for [[label v color] cells]
        ^{:key label}
        [:div.kg-result
         [:p.l label]
         [:p.v {:style {:color color}} (yen v)]]))))

(defn- housing []
  (let [{:keys [care-level housing-cost]} @state/state]
    [:section#housing.kg-section.kg-section-gray
     [:div.kg-container-narrow.kg-container
      [:div.kg-kicker "Housing Reform"]
      [:h2.kg-h2 "住宅改修支援 + 給付金 AI 試算"]
      [:p.kg-sub
       "介護保険「住宅改修費」は要支援・要介護認定者に最大"
       " " [:strong "20 万円"] "が支給されます。"
       " Giemon Kaigo が対象工事・給付額・施工業者を一括サポート。"]
      (into [:div.kg-card-grid]
        (for [item state/housing-items]
          ^{:key (:title item)}
          [:div.kg-housing-card
           [:div.icon {:aria-hidden true} (:icon item)]
           [:h3 (:title item)]
           [:p.desc (:desc item)]
           [:p.cost "目安: " (:cost item)]]))
      [:div.kg-calc
       [:h3 "住宅改修費 給付額 簡易試算"]
       [:div.kg-calc-grid
        [:fieldset.kg-fieldset
         [:legend.kg-legend "要介護度を選択"]
         (into [:div.kg-level-row]
           (for [lv [1 2 3 4 5]]
             ^{:key lv}
             [:button {:class (if (= care-level lv) "kg-level kg-level-active" "kg-level")
                       :aria-pressed (= care-level lv)
                       :on-click #(state/set-care-level! lv)} lv]))
         [:p.kg-hint "自己負担割合: " (state/copay-label) " 割"]]
        [:div
         [:label.kg-legend {:htmlFor "housing-cost"}
          "工事費用: " (.. (js/Number housing-cost) toLocaleString) " 円"]
         [:input#housing-cost.kg-range
          {:type "range", :min 50000, :max 2000000, :step 50000
           :value housing-cost
           :aria-valuemin 50000 :aria-valuemax 2000000 :aria-valuenow housing-cost
           :on-change #(state/set-housing-cost! (js/Number (.. % -target -value)))}]
         [:div.kg-range-ends [:span "5 万円"] [:span "200 万円"]]]]
       [benefit-results]
       [:p.kg-fineprint "※ 概算値。実際の給付額は市区町村の審査により確定します。"]]]]))

;; ─── ④ care-insurance navigator ────────────────────────────────────────────

(defn- limits-row [[lv limit]]
  ^{:key lv}
  [:div.kg-limit-row {:role "listitem"}
   [:span.kg-limit-label "要介護 " lv]
   [:div.kg-limit-track {:role "progressbar"
                         :aria-valuenow limit :aria-valuemin 0
                         :aria-valuemax state/care-limits-max}
    [:div.kg-limit-fill {:style {:width (str (* 100.0 (/ limit state/care-limits-max)) "%")}}]]
   [:span.kg-limit-value (yen limit) "/月"]])

(defn- insurance []
  [:section#insurance.kg-section.kg-section-white
   [:div.kg-container-narrow.kg-container
    [:div.kg-kicker "Care Insurance Navigator"]
    [:h2.kg-h2 "介護保険制度 ナビ"]
    [:p.kg-sub
     "複雑な介護保険の手続きを AI がステップごとに案内。"
     "認定申請からサービス事業所マッチングまでサポートします。"]
    (into [:ol.kg-steps {:aria-label "介護保険手続きの流れ"}]
      (for [s state/care-steps]
        ^{:key (:step s)}
        [:li.kg-step
         [:div.kg-step-head
          [:span.kg-step-num {:aria-label (str "ステップ " (:step s))} (:step s)]
          [:span.kg-step-title (:title s)]]
         [:p.desc (:desc s)]]))
    [:div.kg-limits
     [:h3 "月額支給限度額 早見表（1 割負担）"]
     (into [:div {:role "list", :aria-label "要介護度別支給限度額"}]
       (map limits-row state/care-limits))
     [:p.kg-fineprint
      "※ 2024 年度介護報酬改定後の値。2・3 割負担の方は所得に応じて異なります。"]]]])

;; ─── ⑤ Well-Becoming ───────────────────────────────────────────────────────

(defn- wb-axis [ax]
  ^{:key (:axis ax)}
  [:div.kg-axis
   [:div.kg-axis-bar]
   [:div
    [:dt (str (:ja ax)) [:span.en (:axis ax)]]
    [:dd (:desc ax)]]])

;; map-indexed calls (f index item) — destructuring order mirrors that.
(defn- spiral-item [i [title desc icon]]
  ^{:key title}
  [:li.kg-spiral-item
   [:div.kg-spiral-icon-col
    [:div.kg-spiral-icon {:aria-hidden true} icon]
    (when (< i 4) [:div.kg-spiral-connector])]
   [:div.kg-spiral-body
    [:p.t title]
    [:p.d desc]]])

(defn- well-becoming []
  [:section#circle.kg-section.kg-section-gray
   [:div.kg-container-narrow.kg-container
    [:div.kg-kicker "Well-Becoming"]
    [:h2.kg-h2 "欠損モデルから、能力成長モデルへ。"]
    [:p.kg-sub
     "公的介護は「できないこと」を測り給付する受動モデル。"
     " Giemon Kaigo は「できること・なりたいこと」を育てる "
     [:strong "Well-Becoming"] " モデルで動きます。"]
    [:div.kg-wb-grid
     [:div
      [:h3 "Well-Becoming 5 軸"]
      (into [:dl] (map wb-axis state/well-being-axes))]
     [:div.kg-spiral-card
      [:h3 "成長螺旋モデル"]
      (into [:ol] (map-indexed spiral-item state/spiral-steps))
      [:div.kg-circle-note
       "近隣 5〜8 人のインフォーマルな互助グループ。時間銀行（TimeBank）で非貨幣的なケア交換を記録します。"]]]]])

;; ─── ⑥ pricing ─────────────────────────────────────────────────────────────

(defn- plan-card [p]
  ^{:key (:name p)}
  [:div {:class (if (:highlight p) "kg-plan kg-plan-highlight" "kg-plan")}
   (when (:highlight p) [:div.kg-recommend "おすすめ"])
   [:p.name (:name p)]
   [:div.price-row
    [:span.price (:price p)]
    [:span.price-note (:price-note p)]]
   (into [:ul.kg-plan-features {:aria-label (str (:name p) "プランの機能")}]
     (for [feat (:features p)]
       ^{:key feat}
       [:li.kg-check [:span.ck {:aria-hidden true} "✓"] feat]))
   [:a {:class (if (:highlight p) "kg-plan-cta kg-plan-cta-solid" "kg-plan-cta kg-plan-cta-line")
         :href (:cta-href p)} (:cta p)]])

(defn- pricing []
  [:section#pricing.kg-section.kg-section-white
   [:div.kg-container-narrow.kg-container
    [:h2.kg-h2 "料金プラン"]
    [:p.kg-sub "全プラン 14 日間無料トライアルあり。クレジットカード不要。"]
    (into [:div.kg-plan-grid] (map plan-card state/plans))
    [:p.kg-plan-foot "介護保険適用事業者・医療機関向けプランは別途ご相談ください。"]]])

;; ─── ⑦ FAQ ─────────────────────────────────────────────────────────────────

(defn- faq-item [[q a]]
  ^{:key q}
  [:details
   [:summary q
    [:svg.chev {:viewBox "0 0 24 24", :fill "none", :stroke "currentColor"
                :strokeWidth 2.5, :aria-hidden true}
     [:path {:strokeLinecap "round", :strokeLinejoin "round", :d "m6 9 6 6 6-6"}]]]
   [:div.answer a]])

(defn- faq []
  [:section.kg-section.kg-section-gray
   [:div {:style {:max-width "768px"}} [:div.kg-container
     [:h2.kg-h2 {:style {:font-size "1.3rem", :margin-bottom 32}} "よくある質問"]
     (into [:div.kg-faq] (map faq-item state/faqs))]]])

;; ─── footer ────────────────────────────────────────────────────────────────

(defn- footer []
  [:footer.kg-footer {:role "contentinfo"}
   [:div.kg-container-narrow.kg-container.kg-footer-grid
    [:div
     [:p.brand [:span {:aria-hidden true} "🏠"] "Giemon Kaigo"]
     [:p.about
      "ロボットが支える在宅介護プラットフォーム。" [:br]
      "住宅改修・介護保険ナビ・Well-Becoming AI。" [:br]
      "開発元: etzhayyim Japan株式会社 / amanomibashira"]
     [:p.powered "Powered by "
      [:a {:href "https://giemon.etzhayyim.com"} "Giemon ロボット"]]]
    [:div
     [:h4 "サービス"]
     (into [:ul]
       (for [[l h] state/footer-services]
         ^{:key l} [:li [:a {:href h} l]]))]
    [:div
     [:h4 "リンク"]
     [:ul
      [:li [:a {:href "https://giemon.etzhayyim.com" :target "_blank" :rel "noopener"}
            "Giemon 公式サイト"]]
      [:li [:a {:href "https://github.com/etzhayyim/otete" :target "_blank" :rel "noopener"}
            "GitHub (オープンソース)"]]
      [:li [:a {:href "mailto:kaigo@etzhayyim.com"} "お問い合わせ"]]
      [:li [:a {:href "/privacy"} "プライバシーポリシー"]]
      [:li [:a {:href "/terms"} "利用規約"]]]]]
   [:div.kg-container-narrow.kg-container.kg-footer-bar
    [:span "© 2026 amanomibashira. All rights reserved."]
    [:span "本サービスは介護保険給付の申請を代行するものではありません。"]]])

;; ─── root ──────────────────────────────────────────────────────────────────

(defn root []
  [:div
   [:style css-text]
   [shape/panel
    [:div.kg-app
     [:a.kg-sr-link {:href "#main"} "本文へスキップ"]
     [header]
     [:main#main
      [hero]
      [robots]
      [housing]
      [insurance]
      [well-becoming]
      [pricing]
      [faq]]
     [footer]]]])
