# app-kaigo

**`kaigo`（介護）は分野名であって機能名ではないので、まず名乗る —— これは
**「Giemon Kaigo」の公開ランディングサイト**である。** 在宅介護ロボット 3 機種の紹介、
介護保険の**住宅改修費給付**の試算、要介護度別の**支給限度額**表、料金プラン、
問い合わせ導線を 1 ページに載せた SvelteKit の SPA と、それを配信する
Cloudflare Worker（XRPC を 3 本公開）から成る。

**マーケティング面であって、給付の権威ではない。** ここに出る金額は利用者向けの
概算表示で、実際の支給決定は市区町村が行う。**しかも後述するとおり、その概算に
2 つの誤りが残っている**（支給限度額の表が 2 段ずれ／自己負担割合を要介護度から
導いている）。

設計の正本は **[`CLAUDE.md`](CLAUDE.md)** ということになっているが、**この README が
書くのは *設計* ではなく「今この repo に何が在って、何が動くか」**である ——
そして最初に言っておくべきこととして、**`CLAUDE.md` は出荷物とは別の製品を
記述している。**

## この repo に在るもの（18 ファイル）

`etzhayyim/root` の `60-apps/etzhayyim-project-kaigo`（rev `6fd297f3`、16 ファイル /
160,683 バイト）から切り出した standalone artifact（`migration.edn`）。
`migration.edn` が `:allowed-additions` として申告するのは `README.edn` と
`migration.edn` の 2 件だが、**この `README.md` と `docs/operator-quickstart.md` も
後から足している** —— fleet の他の repo（`app-itonami` など）と同じ扱いで、
切り出し契約の更新漏れであって逸脱ではない。

| パス | 中身 | 手元で動くか |
|---|---|---|
| **`appview/kaigo-hp/svelte/`**（10 ファイル / 145 KB、うち `package-lock.json` が 109 KB） | SvelteKit 5 + Tailwind 4 の 1 ページ SPA。**実質は `src/routes/+page.svelte` の 603 行 / 33 KB がすべて**。ロボット 3 機種タブ・住宅改修試算・支給限度額表・6 ステップの申請フロー・料金 3 プラン・FAQ | **動く**（[quickstart](docs/operator-quickstart.md)。install → check → build がすべて exit 0） |
| **`appview/kaigo-hp/src/app.ts`**（43 行 / 2.9 KB） | Cloudflare Worker。path-based DID を 7 個登録し、XRPC query を **3 本**公開（`getProduct` / `calcHousingReformBenefit` / `estimateCareCost`）。**永続化は一切しない** —— 3 本とも入力から即座に計算して返すだけ | **動かない**（`wrangler.jsonc` の `alias` が実在しないパスを指す。下記 §4） |
| `appview/kaigo-hp/wrangler.jsonc`（5.7 KB） | Worker 設定。R2 2 本・Hyperdrive・service binding 4 本・Secrets Store 22 本を宣言するが、**`src/app.ts` はそのどれも参照しない** | — |
| `appview/kaigo-hp/kotodama.jsonld` | actor 記述（`uiType: "landing"`）。**実態と一致している**唯一のメタデータ | — |
| `CLAUDE.md` | 設計の正本 —— ただし別の製品のもの（下記 §1） | — |
| `README.edn` / `migration.edn` / `NOTICE` | 機械可読な同定 / 切り出しの出所 / Apache-2.0 + Charter Rider（**`NOTICE` が参照する `CHARTER-RIDER.md` はこの repo に無い** —— 切り出し対象外） | — |

## 現在地（2026-08-18 実測）

### 1. `CLAUDE.md` と出荷物は、別の製品である

これは細部のドリフトではない。**製品の前提そのものが逆を向いている。**

| | `CLAUDE.md` が書く製品 | 実際に出荷されるページ |
|---|---|---|
| 立ち位置 | **「公的介護保険に依存しない」相互ケア** | **公的介護保険のナビゲーション**（支給限度額・住宅改修費給付・要介護認定フロー） |
| モデル | 欠損モデルの否定 → 能力成長モデル（Well-Becoming） | 在宅介護ロボット 3 機種 + 保険の使い方 |
| UI | `uiType: redirect`（**zero frontend**、Protocol Canvas card） | `uiType: landing`（603 行の SPA。`kotodama.jsonld` / `wrangler.jsonc` はこちらで正しい） |
| 収益 | Tier 別 credit（mutual_care 120/mo など） | 月額プラン ¥9,800 / ¥29,800 / 要相談 |

さらに `CLAUDE.md` が列挙する実装のうち、**この repo に存在しないもの**:

- **9 個の command**（`cmd_collect_osm_care` / `cmd_collect_wam_facilities` /
  `search_facilities` / `create_care_record` …）—— 実装されている query は
  上記の 3 本だけで、名前が 1 つも一致しない。
- **`wit/kaigo/package.wit`** —— `wit/` ディレクトリが無い。
- **4 つの lexicon collection**（`com.etzhayyim.apps.kaigo.{care_facility,collection_job,data_source,capability}`）
  —— lexicon ファイルが無い。
- **データソース WAM NET / OpenStreetMap** と `care_facility` データモデル ——
  取得コードも保存先も無い。この repo は**外部データを 1 バイトも取得しない**。

**`CLAUDE.md` を仕様として読まないこと。** 実際に動くものを読みたいなら
`+page.svelte` と `src/app.ts` の 2 本しかない。

### 2. ビルドは通る。が、出力はほぼ空の SPA シェルである

`npm run build` は exit 0 で `build/` を書く（[quickstart](docs/operator-quickstart.md) の
とおり実測）。**ただし `build/index.html` は 1,203 バイトで、`<title>` も meta description も
JSON-LD も入っていない。**

`svelte.config.js` が `adapter-static` を `fallback: 'index.html'` で使い、かつ
`prerender` 指定がどこにも無いため、SvelteKit は**何も prerender せず SPA
フォールバックだけを書く**。`+page.svelte` の `<svelte:head>` が持つ
`<title>Giemon Kaigo — …</title>` と `SoftwareApplication` の JSON-LD は、
**JS が走った後のブラウザにしか存在しない。** クローラが見るのは空のシェルである。

**では `prerender = true` を足せば済むか —— 済まない。** 実際に足して測った:

```
Error: 404 /signup (linked from /)
```

SvelteKit のクローラ自身が、次の §3 を報告して build を止める。

### 3. `/signup` が無い —— 主要 CTA 5 本すべての行き先

`+page.svelte` は `/signup` を **5 箇所**で参照する（デスクトップナビ「無料で始める」・
モバイルナビ・ヒーロー CTA・料金 Basic「無料で試す」・料金 Robot Pro
「14 日間無料トライアル」＝`/signup?plan=pro`）。**`src/routes/` に在るのは
`+layout.svelte` と `+page.svelte` の 2 本だけで、signup ルートは存在しない。**

`wrangler.jsonc` は `not_found_handling: "single-page-application"` なので、
`/signup` へのリクエストには同じシェルが返り、クライアント側ルータが行き先を
持たずに SvelteKit の 404 を描く。**転換動線の入口が全部そこへ行く。**

（この workspace は同じ失敗を一度踏んでいる —— superproject の CLAUDE.md が
記録する 2026-07-25 の kotobase.net signup funnel 404 事故。）

### 4. appview Worker は committed の状態では build できない —— blocker は 2 段

`wrangler deploy --dry-run` を実際に回して確かめた（deploy はしていない）。
**1 つ目を潰すと 2 つ目が出る**ので、片方だけ見て「あと一歩」と読まないこと。

| # | 止まる場所 | 実測されるエラー | 直せるか |
|---|---|---|---|
| 1 | `assets.directory` = `./svelte/build` | `The directory specified by the "assets.directory" field in your configuration file does not exist` | **直せる** —— 先に SPA を build すれば消える |
| 2 | `alias` の `@etzhayyim/kotodama-host-sdk` | `Cannot find module '/Users/junkawasaki/etzhayyim/etzhayyim-apps-etzhayyim/40-engine/kotoba/crates/kotoba-kotodama/sdk/kotodama-host-sdk/src/index.ts'` … `src/app.ts:1:49` | **この repo の中では直せない** |

`wrangler.jsonc` の `alias` は 8 本すべてが `/Users/junkawasaki/etzhayyim/…` という
**切り出し前のモノレポの絶対パス**を指しており、そのツリーはこのマシンに無い。
`src/app.ts` の唯一の import がその 1 本目なので、Worker は 1 行目で止まる。

`routes` が宣言する 2 ホスト（`kaigo.etzhayyim.com` / `kg8r2m5n.etzhayyim.com`）は
**どちらも DNS に存在しない**（`etzhayyim.com` 自体は Cloudflare で生きている）。
つまりこの Worker は今どこにも配信されていない。

### 5. 介護保険の数値に 2 つの誤りがある

このページは公的給付の額を利用者に提示する。**その 2 箇所が間違っている。**

**(a) 支給限度額の早見表が 2 段ずれている。** `+page.svelte:70` と `src/app.ts` の
`estimateCareCost` が持つ表は、値としては実在の
[区分支給限度基準額](https://www.city.meguro.tokyo.jp/kaigohoken/kenkoufukushi/koureisha/kubunsikyugendogaku.html)
（1 単位 = 10 円換算）だが、**要支援 1・要支援 2・要介護 1・要介護 2・要介護 3 の 5 つ**を
`care_level` 1〜5 に割り当てており、UI（`+page.svelte:408`）はそれを
**「要介護 1〜5」**と表示する。結果、全行が過小になる:

| 表示 | このページの値 | 実際の区分支給限度基準額 | 差 |
|---|---|---|---|
| 要介護 1 | 50,320 円 | 167,650 円（16,765 単位） | −117,330 |
| 要介護 2 | 105,310 円 | 197,050 円（19,705 単位） | −91,740 |
| 要介護 3 | 167,650 円 | 270,480 円（27,048 単位） | −102,830 |
| 要介護 4 | 197,050 円 | 309,380 円（30,938 単位） | −112,330 |
| 要介護 5 | 270,480 円 | 362,170 円（36,217 単位） | −91,690 |

表の脚注（`:418`）は「※ 2024 年度介護報酬改定後の値」と書いており、**値そのものは
現行値である。誤っているのはラベルとの対応**。要支援 1・要支援 2 の 2 行が
落ちていることが、ずれの正体である。

**(b) 自己負担割合を要介護度から導いている。** `+page.svelte:74` と `src/app.ts` の
`calcHousingReformBenefit` はともに `care_level >= 3 ? 0.1 : 0.2`、UI（`:345`）は
「自己負担割合: 1 割 / 2 割」と表示する。**実際の 1 割 / 2 割 / 3 割 は所得**
（本人の合計所得金額と「年金収入＋その他の合計所得金額」）で決まり、要介護度とは
無関係である（[厚生労働省](https://www.mhlw.go.jp/content/12300000/001119101.pdf)）。

**このページは自分で自分を否定している** —— 同じ画面の `:418` に
「2・3 割負担の方は所得に応じて異なります」と正しく書いてある。

なお住宅改修費の**支給限度基準額 200,000 円**（`:73`）と、要介護認定の 6 ステップ、
改修項目 6 種は妥当。誤っているのは上の 2 箇所である。

## 次にやるなら

優先度順。**どれもこの README を書いた pass では触っていない**（1 反復 1 軸）。

1. **§5 の 2 箇所を直す。** 公開画面に出る給付額の誤りで、影響は利用者に直接届く。
   表は `+page.svelte` と `src/app.ts` に**二重に持たれている**ので、片方だけ直すと
   ずれ続ける —— 先に 1 箇所へ寄せる。
2. **`/signup` を作るか、CTA を実在の宛先へ向ける。** 5 本とも死んでいる。
3. **`prerender = true` を入れる**（2 が終わってから。順序が逆だと build が止まる）。
   マーケティング面に SSR/OG が要るのは superproject の ADR-2606290000。
4. **`CLAUDE.md` を出荷物に合わせて書き直すか、`superseded` と明示する。**
   現状は「読むと間違う文書」であって、無い方がまし。
5. `wrangler.jsonc` の `alias` 8 本を、実在の依存（npm パッケージか
   `:local/root`）へ張り替える。

## 出典

- 区分支給限度基準額 — [目黒区「区分支給限度額」](https://www.city.meguro.tokyo.jp/kaigohoken/kenkoufukushi/koureisha/kubunsikyugendogaku.html)
- 自己負担割合の判定 — [厚生労働省 社会保障審議会介護保険部会「給付と負担について（参考資料）」](https://www.mhlw.go.jp/content/12300000/001119101.pdf)
