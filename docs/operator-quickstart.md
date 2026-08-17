# operator quickstart — app-kaigo

**この手順は 2026-08-18 に実際に踏んだ。** 各ステップに実測した exit code と
所要時間、出力の要点を書く。踏めなかったステップは「踏めなかった」と書いてあり、
**推測で書いた行は 1 つも無い。**

対象は 2 つあり、**片方しか動かない**:

| # | 何 | 状態 |
|---|---|---|
| A | SvelteKit の SPA（`appview/kaigo-hp/svelte/`） | **通しで動く**（§1〜§4） |
| B | Cloudflare Worker（`appview/kaigo-hp/src/app.ts`） | **build できない**（§5。この repo の中では直せない） |

## 前提（実測した環境）

```
node   v26.3.0
npm    11.16.0
macOS  darwin 25.3.0 (arm64)
```

`wrangler` は SPA 側の依存として入る（`svelte/node_modules/.bin/wrangler`、4.69.0）。
別途インストールしなくてよい。

## A. SvelteKit SPA

### 1. 依存を入れる — 10 秒前後

```bash
cd appview/kaigo-hp/svelte
npm install
```

**実測: exit 0 / `added 103 packages, and audited 104 packages`。**
クリーンな状態からの所要は 2 回測って 13s と 8s（この workstation は並行 agent が
走っていて load が動くので、秒数は幅として読むこと）。node_modules が残っていれば
`up to date` で 3s。

最後にこの警告が出るが、**無視してよい**:

```
npm warn allow-scripts 4 packages have install scripts not yet covered by allowScripts:
npm warn allow-scripts   fsevents@2.3.3 / sharp@0.34.5 / workerd@1.20260508.1 / esbuild@0.27.3
```

このマシンの `~/.npmrc` は `allow-scripts[]` を宣言しているので、そこに載っていない
パッケージの install script は**実行されずスキップされる**。**この repo ではそれで
build が通る**（下の §3 が exit 0 になることで確認済み）——
`esbuild` / `workerd` の native バイナリは optionalDependencies 側から入るため。

> ⚠ **`--userconfig=/dev/null` は要らない。** 同じ fleet の `app-itonami` では
> `npm install` が `EALLOWSCRIPTS` で exit 1 になり、その回避が必要だった。
> **この repo では素の `npm install` が exit 0 で通ることを実測した**ので、
> 隣の repo の回避策を持ち込まないこと。

### 2. 型と a11y を検査する — exit 0

```bash
npm run check      # svelte-kit sync && svelte-check
```

**実測: exit 0 / `156 FILES 0 ERRORS 3 WARNINGS 2 FILES_WITH_PROBLEMS`**

3 件の warning はすべて既知で、build を止めない:

- `+page.svelte:143` `Redundant role 'banner'`（`<header>` に `role="banner"`）
- `+page.svelte:565` `Redundant role 'contentinfo'`（`<footer>` に `role="contentinfo"`）
- `tsconfig.json` `Cannot find type definition file for 'node'`（`@types/node` 未導入）

### 3. ビルドする — 約 2 秒

**この workspace では高負荷ビルドを直接起動しない**（superproject の CLAUDE.md、
resource governor）。同時 1 本に制限する guard を通す:

```bash
node /Users/junkawasaki/github/com-junkawasaki/scripts/resource-guard.mjs \
  run build -- npm run build
```

**実測: exit 0。** client `✓ built in 169ms`、server `✓ built in 1.86s`、
最後に `Using @sveltejs/adapter-static` → `Wrote site to "build"` → `✔ done`。

### 4. 何が出たかを確かめる — ここを飛ばさない

```bash
wc -c build/index.html          # → 1203
grep -c '<title>' build/index.html   # → 0
```

**実測: `build/index.html` は 1,203 バイトで `<title>` を含まない。**
`adapter-static` が `fallback: 'index.html'` で SPA シェルだけを書いており、
`prerender` 指定がどこにも無いので**何も prerender されていない**。
`+page.svelte` の `<svelte:head>`（タイトル・JSON-LD）は JS 実行後にしか存在しない。

**`prerender = true` を足しても直らない。** 実際に足して測った:

```bash
echo 'export const prerender = true;' > src/routes/+page.ts
npm run build
# → Error: 404 /signup (linked from /)
rm src/routes/+page.ts          # 戻す
```

`/signup` は `+page.svelte` から 5 箇所リンクされているが `src/routes/` に無い。
**SSR/OG を入れる前に、そのルートを作るか CTA を張り替える必要がある**（README §3）。

### 5-A. ローカルで見る

```bash
npm run dev        # vite dev
# または
npm run preview    # ビルド済み build/ を配信
```

**この 2 つは踏んでいない**（このパスはヘッドレスで、ブラウザ確認まではしていない）。
`build/` が出ていること・`check` と `build` が exit 0 であることまでが実測範囲。

## B. Cloudflare Worker — build できない

### 5. `wrangler deploy --dry-run` は 2 段で止まる

**deploy はしていない。`--dry-run` だけ。**（`--dry-run` は superproject の
deploy guard hook の対象外。実 deploy はこの repo の状態ではそもそも到達しない。）

```bash
cd appview/kaigo-hp
./svelte/node_modules/.bin/wrangler deploy --dry-run
```

**段 1（SPA を build する前）— 実測:**

```
✘ [ERROR] The directory specified by the "assets.directory" field in your
  configuration file does not exist:
```

`wrangler.jsonc` の `assets.directory` が `./svelte/build` を指すため。
**§3 を先に踏めば消える。**

**段 2（SPA を build した後）— 実測:**

```
✘ [ERROR] Build failed with 1 error:
  ✘ [ERROR] Cannot find module '/Users/junkawasaki/etzhayyim/etzhayyim-apps-etzhayyim/
    40-engine/kotoba/crates/kotoba-kotodama/sdk/kotodama-host-sdk/src/index.ts'
    [plugin alias]
      src/app.ts:1:49
```

`wrangler.jsonc` の `alias` 8 本がすべて**切り出し前のモノレポの絶対パス**を指しており、
そのツリーはこのマシンに存在しない。`src/app.ts` の唯一の import がその 1 本目なので、
Worker は 1 行目で止まる。**この repo の中では直せない。**

### 6. 配信先も今は無い

```bash
dig +short kaigo.etzhayyim.com      # → (空)
dig +short kg8r2m5n.etzhayyim.com   # → (空)
dig +short etzhayyim.com            # → 172.67.179.128 104.21.51.111
```

**実測: `wrangler.jsonc` の `routes` が宣言する 2 ホストはどちらも DNS に無い**
（親ドメインは Cloudflare で生きている）。この Worker は今どこにも配信されていない。

## 後片付け

**この repo には `.gitignore` が 1 つも無い。** build 生成物を消さずに
`git status` を見ると、未追跡ファイルとして出続ける:

```bash
cd appview/kaigo-hp/svelte
rm -rf node_modules build .svelte-kit
```

`package-lock.json` は**追跡されている**（109 KB）ので消さないこと ——
`app-itonami` では未追跡だったが、この repo では違う。
`git status --porcelain` が空になれば片付いている。

## この quickstart が答えないこと

- **ブラウザで実際にページが描画されるか**（§5-A を踏んでいない）
- **XRPC 3 本の応答**（Worker が build できないので呼べていない）
- **§5 段 2 の alias を張り替えたら deploy が通るか**（張り替えていない）
