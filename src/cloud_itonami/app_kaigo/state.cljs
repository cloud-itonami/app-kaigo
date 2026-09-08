(ns cloud-itonami.app-kaigo.state
  "App state + static content data for the app-kaigo (kaigo-hp) landing UI.
  Ported 1:1 from the former appview/kaigo-hp/svelte/src/routes/+page.svelte
  (603-line SvelteKit SPA) — robot tabs, housing-reform benefit calculator,
  care-insurance steps, limits table, Well-Becoming axes, plans, FAQ.
  Interactive state is a single reagent atom (murakumo-studio構成); the
  original Svelte `$state` cells map to the keys below, the `$derived`
  benefitCalc maps to `benefit-calc`, and every top-level const maps to a
  def here. The two numeric issues the repo README §5 documents
  (limits-table 2-row offset / copay-ratio derived from care level) are
  ported faithfully — content fixes are out of scope for the migration."
  (:require [reagent.core :as r]))

(defonce state
  (r/atom {:mobile-open    false
           :selected-robot "otete"
           :care-level     3
           :housing-cost   1500000}))

;; ─── static content (ported verbatim from +page.svelte) ───────────────────

(def nav-links
  [["ロボット" "#robots"]
   ["住宅改修" "#housing"]
   ["介護保険" "#insurance"]
   ["ケアサークル" "#circle"]
   ["料金" "#pricing"]])

(def robot-tabs
  [{:id "otete"       :label "Otete"       :emoji "🦾" :model "arm"
    :desc "物品搬送・服薬管理・見守り巡回"}
   {:id "hitogata"    :label "Hitogata"    :emoji "🤖" :model "hitogata"
    :desc "リハビリ補助・コミュニケーション"}
   {:id "caterpillar" :label "Caterpillar" :emoji "🚜" :model "caterpillar"
    :desc "自律巡回・転倒検知・緊急通報"}])

(def robot-details
  {"otete"
   {:h3   "Giemon Otete — 在宅 ADL 支援"
    :tag  "初代製品 / 発売中"
    :items
    ["服薬ボックス・ペットボトルの搬送（可搬 500g）"
     "棚・床面への低姿勢アクセス（クローラー走行）"
     "部屋間の定期見守り巡回 + カメラ映像"
     "スマートフォン遠隔操作 + ROS2 自律制御"
     "転倒物検知 + 家族への通知"
     "ICS3.5 バスサーボ・全国産部品"]}
   "hitogata"
   {:h3   "Giemon Hitogata — リハビリ・交流"
    :tag  "次期製品予告"
    :items
    ["17 軸全身動作によるリハビリ動作誘導"
     "毎日のバイタル確認 + 認知機能トレーニング"
     "Murakumo AI による会話・孤独感ケア"
     "運動機能評価（立ち上がり / 歩行ステップ）"
     "目標設定 + ガンバリ記録（Well-Becoming 5 軸）"
     "ケアマネジャーへの活動レポート自動送信"]}
   "caterpillar"
   {:h3   "Giemon Caterpillar — 自律見守り UGV"
    :tag  "次期製品予告"
    :items
    ["LiDAR + ステレオカメラによる自律 SLAM 巡回"
     "転倒・異常姿勢を AI で検知 → 緊急通報"
     "夜間 IR カメラ / 音声インターフォン"
     "重装甲トラックで段差・玄関フロア対応"
     "Nav2 ルート指定 + 手動遠隔操作切替"
     "1 充電 8 時間連続巡回"]}})

(def hero-stats
  [["3機種"     "ロボット対応"      "🤖"]
   ["20万円"    "住宅改修費上限"    "🏠"]
   ["7段階"     "介護度対応"        "📋"]
   ["5軸"       "Well-Being 成長"   "⭐"]])

(def housing-items
  [{:icon "🪜" :title "手すり設置"       :desc "廊下・トイレ・浴室・階段。転倒予防の基本。"          :cost "5〜15 万円"}
   {:icon "📐" :title "段差解消"         :desc "玄関・居室・浴室の段差をスロープ・埋め戻しで解消。"    :cost "3〜20 万円"}
   {:icon "🚿" :title "浴室改修"         :desc "すべり止め・折りたたみシャワーチェア・ドア改修。"      :cost "10〜50 万円"}
   {:icon "🚽" :title "トイレ改修"       :desc "洋式化・自動開閉蓋・自立支援手すり。"                  :cost "8〜30 万円"}
   {:icon "🚪" :title "引き戸改修"       :desc "開き戸 → 引き戸。車椅子・歩行器対応。"                :cost "6〜25 万円"}
   {:icon "🛗" :title "昇降機・スロープ" :desc "屋内外の段差に階段昇降機・スロープを設置。"            :cost "30〜100 万円"}])

(def care-steps
  [{:step "1" :title "要介護認定申請" :desc "市区町村の介護保険担当窓口に申請。主治医意見書 + 認定調査 → 約 1 ヶ月で結果。" :icon "📋"}
   {:step "2" :title "要介護度決定"   :desc "要支援 1〜2 / 要介護 1〜5 の 7 段階。AI が認定結果を読み取りプランを提案。"     :icon "📊"}
   {:step "3" :title "ケアプラン作成" :desc "ケアマネジャーと相談。居宅サービス計画書を作成。Hitogata が活動ログを自動記録。" :icon "📝"}
   {:step "4" :title "サービス開始"   :desc "訪問介護・通所介護・短期入所等のサービスを開始。ロボットがサービス間をつなぐ。"  :icon "🤝"}
   {:step "5" :title "モニタリング"   :desc "ロボットのセンサーデータをケアマネに提供。状態変化を早期把握。"                  :icon "📡"}
   {:step "6" :title "ケアプラン更新" :desc "6 ヶ月ごとの見直し。AI がロボットの活動ログから要介護度変化を予測。"             :icon "🔄"}])

;; NOTE: table kept verbatim from the Svelte original (values are real
;; 区分支給限度基準額 for 要支援1..要介護3 — README §5(a) documents the
;; label offset; fixing content is a separate pass from this migration).
(def care-limits
  (sorted-map 1 50320 2 105310 3 167650 4 197050 5 270480))

(def care-limits-max 270480)

(def well-being-axes
  [{:axis "Engagement"   :ja "参加"   :desc "ケア交換・サークル参加・外出"}
   {:axis "Competence"   :ja "能力"   :desc "できること・教えられること"}
   {:axis "Contribution" :ja "貢献"   :desc "時間銀行・知恵アーカイブ"}
   {:axis "Growth"       :ja "成長"   :desc "新スキル習得・目標達成率"}
   {:axis "Resilience"   :ja "回復力" :desc "バイタル安定性・サポートバッファ"}])

(def spiral-steps
  [["能力発見" "「できること」マップを AI と一緒に作る"   "🌱"]
   ["ケア交換" "近隣サークルで得意なことを提供・受取"      "🤝"]
   ["信頼蓄積" "時間銀行に記録。実績が信頼に変わる"        "⭐"]
   ["能力拡張" "ロボット + AI で新しい活動に挑戦"          "🚀"]
   ["豊かなケア" "より質の高いケア交換が生まれる"          "✨"]])

(def plans
  [{:name "Basic" :price "¥9,800" :price-note "月額・税込"
    :features ["介護保険費用シミュレーター" "施設・事業所マッチング"
               "住宅改修費給付 試算ツール" "AI チャット（月 30 回）"
               "ケアサークル参加（無料枠）"]
    :cta "無料で試す" :cta-href "/signup" :highlight false}
   {:name "Robot Pro" :price "¥29,800" :price-note "月額・税込"
    :features ["Basic の全機能" "Giemon Otete 遠隔監視ダッシュボード"
               "Hitogata バイタル連携 + AI 会話" "Caterpillar 異常通知 + 巡回ログ"
               "ケアマネジャー共有レポート" "24h 緊急サポートライン"]
    :cta "14 日間無料トライアル" :cta-href "/signup?plan=pro" :highlight true}
   {:name "Facility" :price "要相談" :price-note "施設・病院向け"
    :features ["ロボット複数台一括管理" "EHR / カルテ連携 API"
               "入居者別 Well-Being ダッシュボード" "スタッフ向けロボット操作研修"
               "SLA 99.9% / 専任 CSM" "補助金申請支援"]
    :cta "無料相談を申し込む" :cta-href "mailto:kaigo@etzhayyim.com" :highlight false}])

(def faqs
  [["ロボットを持っていなくても使えますか？"
    "はい。介護保険ナビ・住宅改修試算・施設マッチング・ケアサークル機能は Basic プランでロボットなしでご利用いただけます。"]
   ["Giemon Otete を在宅介護に使うには何が必要ですか？"
    "インターネット接続環境と、スマートフォンまたは PC があれば遠隔操作・見守りが可能です。Wi-Fi 設定は初期設定ガイドで案内します。"]
   ["介護保険の住宅改修費給付を受けるには？"
    "要支援 1 以上の認定を受けた後、ケアマネジャーと相談して改修計画書を作成します。Giemon Kaigo が申請書類の作成をサポートします。"]
   ["ケアサークルとはどのような仕組みですか？"
    "近隣 5〜8 人が互いの得意なことを提供・受け取ります。「時間」を単位に記録し、AI が活動提案・マッチングを担います。"]
   ["施設・病院向けのカスタマイズは可能ですか？"
    "Facility プランでは EHR / カルテシステム連携・複数ロボット管理・スタッフ研修を含む法人向けカスタマイズが可能です。"]])

(def footer-services
  [["ロボット紹介" "#robots"] ["住宅改修支援" "#housing"] ["介護保険ナビ" "#insurance"]
   ["ケアサークル" "#circle"] ["料金プラン" "#pricing"] ["導入事例" "/cases"]
   ["施設向け相談" "mailto:kaigo@etzhayyim.com"]])

;; ─── derived (was `const benefitCalc = $derived.by(...)`) ─────────────────

(defn benefit-calc []
  (let [{:keys [care-level housing-cost]} @state
        limit       200000
        copay-ratio (if (>= care-level 3) 0.1 0.2)
        covered     (min housing-cost limit)
        benefit     (js/Math.round (* covered (- 1.0 copay-ratio)))]
    {:covered covered
     :benefit benefit
     :copay   (- covered benefit)
     :self-pay (- housing-cost covered)}))

(defn copay-label []
  (if (>= (:care-level @state) 3) "1" "2"))

;; ─── mutations (were Svelte `$state` writes) ──────────────────────────────

(defn toggle-mobile! [] (swap! state update :mobile-open not))
(defn close-mobile!  [] (swap! state assoc :mobile-open false))
(defn select-robot!     [id] (swap! state assoc :selected-robot id))
(defn set-care-level!   [lv] (swap! state assoc :care-level lv))
(defn set-housing-cost! [v]  (swap! state assoc :housing-cost v))
