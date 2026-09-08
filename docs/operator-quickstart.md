# operator quickstart — app-kaigo

**この手順は 2026-09-08 に実際に踏んだ。** 各ステップに実測した exit code と
所要時間、出力の要点を書く。踏めなかったステップは「踏めなかった」と書いてあり、
**推測で書いた行は 1 つも無い。**

UI は 2026-09-08 の移行で SvelteKit から **shadow-cljs + reagent + kotoba-ui**
(murakumo-studio 構成) に置き換わった。対象は 2 つ:

| # | 何 | 状態 |
|---|---|---|
| A | CLJS SPA（`src/` + `web/`、成果物 `web/dist/`） | **通しで動く**（§1〜§4） |
| B | Cloudflare Worker（`appview/kaigo-hp/src/app.ts`） | **build できない**（§5。この repo の中では直せない） |

## 前提（実測した環境）

```
node    v26.0.0
clojure CLI (tools.deps)  — shadow-cljs は JVM 側で走る（npm の shadow-cljs 不要）
macOS   darwin (arm64)
```

## A. CLJS SPA

### 1. React を入れる — 数秒

```bash
npm install        # react / react-dom 18 のみ（package.json 参照）
```

ビルドは `clojure -M:cljs` が担うので、npm 側は react / react-dom だけでよい。
shadow-cljs の npm バイナリは使わない。

> ⚠ `deps.edn` の appkit は `{:local/root "../../kotoba-lang/appkit"}`。
> これは west superproject の checkout 配置（`orgs/<org>/<repo>` と
> `orgs/<org>/_wt-<repo>` が同じ深さ）に依存する。単独 clone では解決できない
> （public-malak / rare-earth と同じ制約）。

### 2. コンパイルする — 約 7〜11 秒

**この workspace では高負荷ビルドを直接起動しない**（superproject の CLAUDE.md、
resource governor）。同時 1 本に制限する guard を通す:

```bash
node /Users/junkawasaki/github/com-junkawasaki/scripts/resource-guard.mjs \
  run build -- clojure -M:cljs -m shadow.cljs.devtools.cli compile app
```

**実測: exit 0 / `[:app] Build completed. (95 files, 2 compiled, 0 warnings, 7.00s)`**
（初回は 95 files 全部で 10.94s。クロージャコンパイラ由来の
`sun.misc.Unsafe` 非推奨警告が JVM 側に出るが、ビルド結果は無関係。）

### 3. 成果物を確かめる — ここを飛ばさない

```bash
ls web/dist/js/main.js web/dist/vendor/kotoba-ui.css
```

`web/dist/` は追跡されている（dev ブートストラップ + cljs-runtime を含む。
rare-earth と同じ運用。書き換えたら同じ commit に入れてください）。

### 4. ブラウザで実際に動くことを確かめる — 実測済み

```bash
cd web/dist && python3 -m http.server <port> &
# headless Chrome (playwright, channel: 'chrome') で / を読み、以下を確認:
```

**実測（2026-09-08、headless Chrome + localhost サーブ）:**

- タイトル: `Giemon Kaigo — ロボットが支える在宅介護・住宅改修・介護保険ナビ`
  （旧 `<svelte:head>` 相当を `desktop.cljs/set-head!` が実行後に立てる。JSON-LD も同じ）
- `h1` = 「家で、もっと長く。ロボットと一緒に。」/ section 8 個 / tab 3 個
- **タブ切替**: Hitogata ークリック → `h3` が "Giemon Hitogata — リハビリ・交流"、
  3D Viewer の iframe src が `?model=hitogata` に変化（reagent 再レンダー確認）
- **要介護度ボタン**: 2 ークリック → hint が「自己負担割合: 2 割」
- **工事費用スライダー**: keyboard (ArrowRight) → `value 1,550,000`、
  label と支給対象額（上限 200,000 円）が連動更新
- **モバイル**: viewport 375px で burger 表示・クリックで `#mobile-nav` 開閉
- FAQ `<details>` 5 個
- **JS console error: 0**（favicon 404 は配信側に無いため、無関係）

### 5-A. ローカル開発（watch）

```bash
clojure -M:cljs -m shadow.cljs.devtools.cli watch app
# 別ターミナルで web/dist を serve、main.js が dev クライアント経由で再読込
```

**watch は踏んでいない**（§2 の compile と §4 の実ブラウザ確認までが実測範囲）。

## B. Cloudflare Worker — build できない

### 5. `wrangler.jsonc` の alias が切り出し前のモノレポ絶対パス

`appview/kaigo-hp/wrangler.jsonc` の `alias` 8 本はすべて
`/Users/junkawasaki/etzhayyim/...` （切り出し前モノレポ）の絶対パスを指しており、
そのツリーはこのマシンに存在しない。`src/app.ts` の唯一の import がその 1 本目なので、
Worker は 1 行目で止まる。**この repo の中では直せない。**（移行前から同じ状態。
旧 quickstart の実測をそのまま引き継ぐ。今回の移行では再走していない。）

`assets.directory` は `./svelte/build` → `./web/dist` に張り替えた
（SPA 側の build なしで assets が解決するようになり、段 1 のエラーは消える）。

### 6. 配信先も今は無い

**実測（2026-08-18、旧 quickstart から引き継ぎ・今回の再走はしていない）:**
`dig +short kaigo.etzhayyim.com` と `kg8r2m5n.etzhayyim.com` は空。
この Worker は今どこにも配信されていない。

## 後片付け

`.gitignore`（repo 直下）が `node_modules/` `.shadow-cljs/` `.cpcache/` を
無視する。`web/dist/` は**追跡対象**なので消さないこと。

## この quickstart が答えないこと

- **XRPC 3 本の応答**（Worker が build できないので呼べていない）
- **§5 の alias を張り替えたら deploy が通るか**（張り替えていない）
- **`/signup` `/cases` `/privacy` `/terms` ルート**（旧 SPA 時代から存在しない。
  リンクだけ残っている）
