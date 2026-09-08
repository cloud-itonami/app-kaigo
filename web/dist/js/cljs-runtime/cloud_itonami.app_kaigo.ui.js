goog.provide('cloud_itonami.app_kaigo.ui');
cloud_itonami.app_kaigo.ui.css_text = "\n.kg-app { font-family: 'Noto Sans JP', 'Hiragino Kaku Gothic ProN', 'Segoe UI', sans-serif; color: #1a1a1a; background: #fff; line-height: 1.5; }\n.kg-app a { text-decoration: none; color: inherit; }\n.kg-app a:hover { text-decoration: none; }\n.kg-app h1, .kg-app h2, .kg-app h3, .kg-app p, .kg-app dl, .kg-app dd, .kg-app ol, .kg-app ul { margin: 0; }\n.kg-app ol, .kg-app ul { padding: 0; list-style: none; }\n.kg-sr-link { position: static; display: block; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); }\n.kg-sr-link:focus { position: fixed; top: 16px; left: 16px; z-index: 100; width: auto; height: auto; clip-path: none; padding: 8px 16px; background: #0017c1; color: #fff; border-radius: 4px; }\n.kg-container { max-width: 1152px; margin: 0 auto; padding: 0 16px; }\n.kg-container-narrow { max-width: 1024px; }\n/* header */\n.kg-header { background: #fff; border-bottom: 1px solid #e6e6e6; position: sticky; top: 0; z-index: 50; }\n.kg-utility { background: #f9f9f9; border-bottom: 1px solid #e6e6e6; }\n.kg-utility-inner { display: flex; align-items: center; justify-content: space-between; height: 32px; font-size: 11px; color: #616161; }\n.kg-utility a { color: #0017c1; }\n.kg-nav-row { display: flex; align-items: center; justify-content: space-between; height: 56px; }\n.kg-brand { display: flex; align-items: center; gap: 8px; font-weight: 700; font-size: 15px; }\n.kg-brand .kg-accent { color: #0017c1; }\n.kg-nav-desktop { display: flex; align-items: center; gap: 4px; font-size: 13px; }\n.kg-nav-link { padding: 8px 12px; color: #1a1a1a; border-radius: 4px; transition: background-color .15s; }\n.kg-nav-link:hover { background: #f2f2f2; }\n.kg-nav-cta { margin-left: 8px; padding: 8px 16px; background: #0017c1; color: #fff !important; font-weight: 500; border-radius: 4px; font-size: 13px; transition: background-color .15s; }\n.kg-nav-cta:hover { background: #0836a3; }\n.kg-burger { display: none; padding: 8px; color: #1a1a1a; background: #fff; border: 1px solid #e6e6e6; border-radius: 4px; cursor: pointer; }\n.kg-burger:hover { background: #f2f2f2; }\n.kg-nav-mobile { background: #fff; border-top: 1px solid #e6e6e6; padding: 8px 16px 12px; }\n.kg-nav-mobile-link { display: block; padding: 12px; color: #1a1a1a; font-size: 14px; border-bottom: 1px solid #f2f2f2; }\n.kg-nav-mobile-link:hover { background: #f9f9f9; }\n.kg-nav-mobile-cta { display: block; margin-top: 12px; padding: 10px 16px; background: #0017c1; color: #fff; font-size: 14px; font-weight: 500; border-radius: 4px; text-align: center; }\n/* sections */\n.kg-section { padding: 64px 16px; }\n.kg-section-gray { background: #f9f9f9; border-top: 1px solid #e6e6e6; border-bottom: 1px solid #e6e6e6; }\n.kg-section-white { background: #fff; border-top: 1px solid #e6e6e6; }\n.kg-kicker { margin-bottom: 8px; font-size: 11px; font-weight: 500; color: #0017c1; text-transform: uppercase; letter-spacing: .08em; }\n.kg-h2 { font-size: 1.5rem; font-weight: 700; margin-bottom: 8px; }\n.kg-sub { color: #616161; font-size: 14px; margin-bottom: 32px; max-width: 576px; }\n/* hero */\n.kg-hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; }\n.kg-pill { display: inline-flex; align-items: center; gap: 6px; padding: 4px 12px; border-radius: 999px; background: #e8f1fe; color: #0017c1; font-size: 11px; font-weight: 500; margin-bottom: 24px; }\n.kg-h1 { font-size: clamp(1.8rem, 4vw, 2.8rem); font-weight: 700; line-height: 1.15; margin-bottom: 16px; }\n.kg-h1 .kg-accent { color: #0017c1; }\n.kg-lede { color: #464646; font-size: 16px; line-height: 1.65; margin-bottom: 24px; }\n.kg-cta-row { display: flex; flex-wrap: wrap; gap: 12px; }\n.kg-btn-primary { padding: 12px 24px; background: #0017c1; color: #fff !important; font-weight: 500; border-radius: 4px; font-size: 15px; box-shadow: 0 1px 2px rgba(0,0,0,.05); transition: background-color .15s; }\n.kg-btn-primary:hover { background: #0836a3; }\n.kg-btn-secondary { padding: 12px 24px; border: 1px solid #b2b2b2; color: #1a1a1a; font-weight: 500; border-radius: 4px; font-size: 15px; transition: border-color .15s; }\n.kg-btn-secondary:hover { border-color: #616161; }\n.kg-stat-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }\n.kg-stat { background: #fff; border: 1px solid #e6e6e6; border-radius: 8px; padding: 20px; text-align: center; box-shadow: 0 1px 2px rgba(0,0,0,.05); }\n.kg-stat .icon { font-size: 24px; margin-bottom: 8px; }\n.kg-stat .v { font-size: 1.5rem; font-weight: 700; color: #0017c1; line-height: 1; }\n.kg-stat .l { font-size: 11px; color: #616161; margin-top: 4px; }\n/* robots */\n.kg-tabs { display: flex; gap: 8px; margin-bottom: 24px; flex-wrap: wrap; border-bottom: 1px solid #e6e6e6; }\n.kg-tab { padding: 10px 16px; font-size: 14px; font-weight: 500; background: none; border: none; border-bottom: 2px solid transparent; margin-bottom: -1px; color: #616161; cursor: pointer; transition: color .15s, border-color .15s; }\n.kg-tab:hover { color: #1a1a1a; border-bottom-color: #b2b2b2; }\n.kg-tab-active { border-bottom-color: #0017c1; color: #0017c1; }\n.kg-tab .kg-tab-desc { margin-left: 6px; font-size: 10px; opacity: .7; }\n.kg-robot-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; align-items: start; }\n.kg-viewer { position: relative; background: #f2f2f2; border: 1px solid #e6e6e6; border-radius: 8px; overflow: hidden; aspect-ratio: 16/10; }\n.kg-viewer iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }\n.kg-viewer-note { position: absolute; bottom: 8px; right: 8px; font-size: 9px; color: #949494; pointer-events: none; user-select: none; background: rgba(255,255,255,.8); padding: 2px 6px; border-radius: 4px; }\n.kg-robot-meta .tag { display: inline-flex; padding: 2px 10px; border-radius: 999px; background: #e8f1fe; color: #0017c1; font-size: 11px; font-weight: 500; margin-bottom: 12px; }\n.kg-robot-meta h3 { font-size: 1.1rem; font-weight: 700; margin-bottom: 16px; }\n.kg-check-list { display: grid; gap: 10px; }\n.kg-check { display: flex; align-items: flex-start; gap: 8px; color: #464646; font-size: 14px; }\n.kg-check .ck { color: #259d63; font-weight: 700; flex-shrink: 0; }\n.kg-ext-link { margin-top: 20px; display: inline-flex; align-items: center; gap: 4px; color: #0017c1; font-size: 14px; font-weight: 500; }\n/* housing */\n.kg-card-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; margin-bottom: 48px; }\n.kg-housing-card { background: #fff; border: 1px solid #e6e6e6; border-radius: 8px; padding: 16px 20px; transition: border-color .15s; }\n.kg-housing-card:hover { border-color: #0017c1; }\n.kg-housing-card .icon { font-size: 24px; margin-bottom: 8px; }\n.kg-housing-card h3 { color: #1a1a1a; font-weight: 600; font-size: 14px; margin-bottom: 4px; }\n.kg-housing-card .desc { color: #616161; font-size: 12px; line-height: 1.6; margin-bottom: 8px; }\n.kg-housing-card .cost { color: #0017c1; font-size: 12px; font-weight: 500; }\n.kg-calc { background: #fff; border: 1px solid #e6e6e6; border-radius: 8px; padding: 24px; max-width: 672px; }\n.kg-calc h3 { font-size: 16px; font-weight: 700; margin-bottom: 20px; }\n.kg-calc-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 20px; }\n.kg-fieldset { border: 0; padding: 0; margin: 0; }\n.kg-legend { color: #616161; font-size: 12px; margin-bottom: 8px; }\n.kg-level-row { display: flex; gap: 8px; flex-wrap: wrap; }\n.kg-level { width: 40px; height: 40px; border-radius: 4px; border: 1px solid #b2b2b2; background: #fff; color: #1a1a1a; font-size: 14px; font-weight: 500; cursor: pointer; transition: border-color .15s, background-color .15s; }\n.kg-level:hover { border-color: #0017c1; }\n.kg-level-active { background: #0017c1; border-color: #0017c1; color: #fff; }\n.kg-hint { color: #616161; font-size: 10px; margin-top: 8px; }\n.kg-range { width: 100%; accent-color: #0017c1; }\n.kg-range-ends { display: flex; justify-content: space-between; font-size: 10px; color: #b2b2b2; margin-top: 4px; }\n.kg-result-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 12px; }\n.kg-result { background: #f9f9f9; border: 1px solid #e6e6e6; border-radius: 4px; padding: 12px; text-align: center; }\n.kg-result .l { font-size: 10px; color: #616161; margin-bottom: 4px; }\n.kg-result .v { font-size: 14px; font-weight: 700; }\n.kg-fineprint { margin-top: 12px; font-size: 10px; color: #949494; }\n/* insurance */\n.kg-steps { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; margin-bottom: 48px; }\n.kg-step { background: #f9f9f9; border: 1px solid #e6e6e6; border-radius: 8px; padding: 16px 20px; }\n.kg-step-head { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; }\n.kg-step-num { width: 24px; height: 24px; border-radius: 999px; background: #0017c1; color: #fff; font-size: 11px; font-weight: 700; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }\n.kg-step-title { color: #1a1a1a; font-weight: 600; font-size: 14px; }\n.kg-step .desc { color: #616161; font-size: 12px; line-height: 1.6; }\n.kg-limits { background: #f9f9f9; border: 1px solid #e6e6e6; border-radius: 8px; padding: 24px; max-width: 672px; }\n.kg-limits h3 { font-size: 16px; font-weight: 700; margin-bottom: 16px; }\n.kg-limit-row { display: flex; align-items: center; gap: 12px; }\n.kg-limit-row + .kg-limit-row { margin-top: 12px; }\n.kg-limit-label { font-size: 12px; color: #616161; width: 56px; flex-shrink: 0; }\n.kg-limit-track { flex: 1; background: #e6e6e6; border-radius: 999px; height: 8px; overflow: hidden; }\n.kg-limit-fill { height: 100%; background: #0017c1; border-radius: 999px; }\n.kg-limit-value { font-size: 12px; color: #1a1a1a; font-weight: 600; width: 112px; text-align: right; flex-shrink: 0; }\n/* well-becoming */\n.kg-wb-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: start; }\n.kg-wb-grid h3 { font-size: 16px; font-weight: 600; margin-bottom: 16px; }\n.kg-axis { display: flex; align-items: flex-start; gap: 12px; padding: 12px; background: #fff; border: 1px solid #e6e6e6; border-radius: 8px; }\n.kg-axis + .kg-axis { margin-top: 12px; }\n.kg-axis-bar { width: 4px; align-self: stretch; border-radius: 999px; background: #0017c1; flex-shrink: 0; }\n.kg-axis dt { color: #1a1a1a; font-size: 14px; font-weight: 600; }\n.kg-axis .en { color: #949494; font-size: 10px; margin-left: 6px; font-weight: 400; }\n.kg-axis dd { color: #616161; font-size: 12px; margin-top: 2px; }\n.kg-spiral-card { background: #fff; border: 1px solid #e6e6e6; border-radius: 8px; padding: 24px; }\n.kg-spiral-card h3 { font-size: 16px; font-weight: 600; margin-bottom: 20px; }\n.kg-spiral-item { display: flex; align-items: flex-start; gap: 12px; }\n.kg-spiral-item + .kg-spiral-item { margin-top: 16px; }\n.kg-spiral-icon-col { display: flex; flex-direction: column; align-items: center; flex-shrink: 0; }\n.kg-spiral-icon { width: 32px; height: 32px; border-radius: 999px; background: #e8f1fe; border: 1px solid #9cbdfa; display: flex; align-items: center; justify-content: center; font-size: 14px; }\n.kg-spiral-connector { width: 1px; height: 16px; background: #e6e6e6; margin-top: 4px; }\n.kg-spiral-body { padding-top: 4px; }\n.kg-spiral-body .t { color: #1a1a1a; font-size: 14px; font-weight: 600; }\n.kg-spiral-body .d { color: #616161; font-size: 12px; margin-top: 2px; }\n.kg-circle-note { margin-top: 20px; padding: 12px; background: #f9f9f9; border: 1px solid #e6e6e6; border-radius: 4px; font-size: 12px; color: #616161; line-height: 1.65; }\n/* pricing */\n.kg-plan-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px; }\n.kg-plan { position: relative; display: flex; flex-direction: column; border-radius: 8px; border: 1px solid #e6e6e6; background: #fff; padding: 24px; }\n.kg-plan-highlight { border-color: #0017c1; box-shadow: 0 4px 6px rgba(0,0,0,.1); }\n.kg-recommend { position: absolute; top: -12px; left: 50%; transform: translateX(-50%); padding: 2px 12px; background: #0017c1; color: #fff; font-size: 11px; font-weight: 700; border-radius: 999px; white-space: nowrap; }\n.kg-plan .name { color: #616161; font-size: 14px; font-weight: 500; }\n.kg-plan .price-row { margin-top: 8px; display: flex; align-items: baseline; gap: 4px; }\n.kg-plan .price { font-size: 1.75rem; font-weight: 700; line-height: 1; }\n.kg-plan .price-note { color: #949494; font-size: 12px; }\n.kg-plan-features { margin-top: 20px; display: grid; gap: 10px; flex: 1; }\n.kg-plan-cta { margin-top: 24px; display: block; text-align: center; padding: 10px 0; border-radius: 4px; font-size: 14px; font-weight: 500; transition: background-color .15s, border-color .15s; }\n.kg-plan-cta-solid { background: #0017c1; color: #fff; }\n.kg-plan-cta-solid:hover { background: #0836a3; }\n.kg-plan-cta-line { border: 1px solid #b2b2b2; color: #0017c1; }\n.kg-plan-cta-line:hover { border-color: #0017c1; }\n.kg-plan-foot { margin-top: 24px; color: #949494; font-size: 12px; text-align: center; }\n/* faq */\n.kg-faq details { background: #fff; border: 1px solid #e6e6e6; border-radius: 8px; overflow: hidden; }\n.kg-faq details + details { margin-top: 8px; }\n.kg-faq summary { padding: 16px 20px; color: #1a1a1a; font-size: 14px; font-weight: 500; cursor: pointer; display: flex; align-items: center; justify-content: space-between; list-style: none; }\n.kg-faq summary::-webkit-details-marker { display: none; }\n.kg-faq summary .chev { width: 16px; height: 16px; color: #0017c1; flex-shrink: 0; margin-left: 12px; transition: transform .15s; }\n.kg-faq details[open] summary .chev { transform: rotate(180deg); }\n.kg-faq .answer { padding: 0 20px 16px; color: #464646; font-size: 14px; line-height: 1.65; border-top: 1px solid #f2f2f2; padding-top: 12px; }\n/* footer */\n.kg-footer { background: #1a1a1a; color: #d2d2d2; padding: 48px 16px; font-size: 14px; }\n.kg-footer-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 32px; }\n.kg-footer .brand { color: #fff; font-weight: 700; margin-bottom: 12px; display: flex; align-items: center; gap: 8px; }\n.kg-footer .about { color: #949494; font-size: 12px; line-height: 1.65; }\n.kg-footer .powered { margin-top: 12px; font-size: 10px; color: #616161; }\n.kg-footer .powered a { color: #6ea0f7; }\n.kg-footer h4 { color: #fff; font-size: 14px; font-weight: 600; margin: 0 0 12px; }\n.kg-footer li + li { margin-top: 6px; }\n.kg-footer li a { color: #949494; font-size: 12px; }\n.kg-footer li a:hover { color: #fff; text-decoration: underline; }\n.kg-footer-bar { margin-top: 32px; padding-top: 24px; border-top: 1px solid #282828; display: flex; flex-wrap: wrap; gap: 16px; align-items: center; justify-content: space-between; font-size: 11px; color: #616161; }\n/* responsive (approximates the original md:/lg: breakpoints) */\n@media (max-width: 900px) {\n  .kg-nav-desktop { display: none; }\n  .kg-burger { display: block; }\n  .kg-hero-grid, .kg-robot-grid, .kg-wb-grid, .kg-calc-grid { grid-template-columns: 1fr; }\n  .kg-card-grid, .kg-steps { grid-template-columns: repeat(2, minmax(0, 1fr)); }\n  .kg-result-grid { grid-template-columns: 1fr 1fr; }\n}\n@media (max-width: 640px) {\n  .kg-card-grid, .kg-steps, .kg-plan-grid, .kg-footer-grid { grid-template-columns: 1fr; }\n}\n";
cloud_itonami.app_kaigo.ui.yen = (function cloud_itonami$app_kaigo$ui$yen(n){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n.toLocaleString())," \u5186"].join('');
});
cloud_itonami.app_kaigo.ui.hamburger_icon = (function cloud_itonami$app_kaigo$ui$hamburger_icon(open_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"class","class",-2030961996),"kg-burger-svg",new cljs.core.Keyword(null,"width","width",-384071477),(20),new cljs.core.Keyword(null,"height","height",1025178622),(20),new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 24 24",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor",new cljs.core.Keyword(null,"strokeWidth","strokeWidth",-2130848332),(2),new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true], null),(cljs.core.truth_(open_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"strokeLinecap","strokeLinecap",-1974748357),"round",new cljs.core.Keyword(null,"strokeLinejoin","strokeLinejoin",-721488076),"round",new cljs.core.Keyword(null,"d","d",1972142424),"M6 18L18 6M6 6l12 12"], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"strokeLinecap","strokeLinecap",-1974748357),"round",new cljs.core.Keyword(null,"strokeLinejoin","strokeLinejoin",-721488076),"round",new cljs.core.Keyword(null,"d","d",1972142424),"M4 6h16M4 12h16M4 18h16"], null)], null))], null);
});
cloud_itonami.app_kaigo.ui.header = (function cloud_itonami$app_kaigo$ui$header(){
var map__20110 = cljs.core.deref(cloud_itonami.app_kaigo.state.state);
var map__20110__$1 = cljs.core.__destructure_map(map__20110);
var mobile_open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20110__$1,new cljs.core.Keyword(null,"mobile-open","mobile-open",-1405715294));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.kg-header","header.kg-header",1724061577),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"role","role",-736691072),"banner"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.kg-utility","div.kg-utility",1412132213),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.kg-container.kg-utility-inner","div.kg-container.kg-utility-inner",-9786580),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Giemon Kaigo \u2014 \u5728\u5B85\u4ECB\u8B77\u30ED\u30DC\u30C3\u30C8\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"\u304A\u554F\u3044\u5408\u308F\u305B: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"mailto:kaigo@etzhayyim.com"], null),"kaigo@etzhayyim.com"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.kg-container.kg-nav-row","div.kg-container.kg-nav-row",-1650843255),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.kg-brand","a.kg-brand",409986988),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"20px"], null)], null),"\uD83C\uDFE0"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Giemon ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.kg-accent","span.kg-accent",1898538687),"Kaigo"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.kg-nav-desktop","nav.kg-nav-desktop",-1116899731),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"\u30B5\u30A4\u30C8\u30CA\u30D3\u30B2\u30FC\u30B7\u30E7\u30F3"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),(function (){var iter__5480__auto__ = (function cloud_itonami$app_kaigo$ui$header_$_iter__20111(s__20112){
return (new cljs.core.LazySeq(null,(function (){
var s__20112__$1 = s__20112;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__20112__$1);
if(temp__5825__auto__){
var s__20112__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20112__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__20112__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__20114 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__20113 = (0);
while(true){
if((i__20113 < size__5479__auto__)){
var vec__20115 = cljs.core._nth(c__5478__auto__,i__20113);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20115,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20115,(1),null);
cljs.core.chunk_append(b__20114,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.kg-nav-link","a.kg-nav-link",-261530195),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),h], null),l], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),h], null)));

var G__20203 = (i__20113 + (1));
i__20113 = G__20203;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20114),cloud_itonami$app_kaigo$ui$header_$_iter__20111(cljs.core.chunk_rest(s__20112__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20114),null);
}
} else {
var vec__20118 = cljs.core.first(s__20112__$2);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20118,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20118,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.kg-nav-link","a.kg-nav-link",-261530195),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),h], null),l], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),h], null)),cloud_itonami$app_kaigo$ui$header_$_iter__20111(cljs.core.rest(s__20112__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cloud_itonami.app_kaigo.state.nav_links);
})()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.kg-nav-cta","a.kg-nav-cta",2061295639),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/signup"], null),"\u7121\u6599\u3067\u59CB\u3081\u308B"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.kg-burger","button.kg-burger",-2036629588),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),cloud_itonami.app_kaigo.state.toggle_mobile_BANG_,new cljs.core.Keyword(null,"aria-expanded","aria-expanded",-1360942393),mobile_open,new cljs.core.Keyword(null,"aria-controls","aria-controls",-1872379154),"mobile-nav",new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"\u30E1\u30CB\u30E5\u30FC\u3092\u958B\u304F"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.app_kaigo.ui.hamburger_icon,mobile_open], null)], null)], null),(cljs.core.truth_(mobile_open)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav#mobile-nav.kg-nav-mobile","nav#mobile-nav.kg-nav-mobile",-170309340),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"\u30E2\u30D0\u30A4\u30EB\u30CA\u30D3\u30B2\u30FC\u30B7\u30E7\u30F3"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),(function (){var iter__5480__auto__ = (function cloud_itonami$app_kaigo$ui$header_$_iter__20121(s__20122){
return (new cljs.core.LazySeq(null,(function (){
var s__20122__$1 = s__20122;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__20122__$1);
if(temp__5825__auto__){
var s__20122__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20122__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__20122__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__20124 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__20123 = (0);
while(true){
if((i__20123 < size__5479__auto__)){
var vec__20125 = cljs.core._nth(c__5478__auto__,i__20123);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20125,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20125,(1),null);
cljs.core.chunk_append(b__20124,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.kg-nav-mobile-link","a.kg-nav-mobile-link",1327920438),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),h,new cljs.core.Keyword(null,"on-click","on-click",1632826543),cloud_itonami.app_kaigo.state.close_mobile_BANG_], null),l], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),h], null)));

var G__20204 = (i__20123 + (1));
i__20123 = G__20204;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20124),cloud_itonami$app_kaigo$ui$header_$_iter__20121(cljs.core.chunk_rest(s__20122__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20124),null);
}
} else {
var vec__20128 = cljs.core.first(s__20122__$2);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20128,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20128,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.kg-nav-mobile-link","a.kg-nav-mobile-link",1327920438),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),h,new cljs.core.Keyword(null,"on-click","on-click",1632826543),cloud_itonami.app_kaigo.state.close_mobile_BANG_], null),l], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),h], null)),cloud_itonami$app_kaigo$ui$header_$_iter__20121(cljs.core.rest(s__20122__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cloud_itonami.app_kaigo.state.nav_links);
})()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.kg-nav-mobile-cta","a.kg-nav-mobile-cta",835812837),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"/signup",new cljs.core.Keyword(null,"on-click","on-click",1632826543),cloud_itonami.app_kaigo.state.close_mobile_BANG_], null),"\u7121\u6599\u3067\u59CB\u3081\u308B"], null)], null):null)], null);
});
cloud_itonami.app_kaigo.ui.hero = (function cloud_itonami$app_kaigo$ui$hero(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.kg-section.kg-section-gray","section.kg-section.kg-section-gray",1587819819),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.kg-container-narrow.kg-container","div.kg-container-narrow.kg-container",1727875096),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.kg-pill","div.kg-pill",-242816421),"\uD83C\uDDEF\uD83C\uDDF5 Giemon \u30ED\u30DC\u30C3\u30C8\u5FDC\u7528 \u2014 \u4ECB\u8B77\u30FB\u4F4F\u5B85\u30FBWell-Being"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.kg-hero-grid","div.kg-hero-grid",1480436827),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.kg-h1","h1.kg-h1",-458196549),"\u5BB6\u3067\u3001\u3082\u3063\u3068\u9577\u304F\u3002",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.kg-accent","span.kg-accent",1898538687),"\u30ED\u30DC\u30C3\u30C8\u3068\u4E00\u7DD2\u306B\u3002"], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.kg-lede","p.kg-lede",-1863809707),"Giemon \u30ED\u30DC\u30C3\u30C8\uFF08Otete\u30FBHitogata\u30FBCaterpillar\uFF09\u00D7 \u4ECB\u8B77\u4FDD\u967A\u30CA\u30D3 \u00D7 \u4F4F\u5B85\u6539\u4FEE\u652F\u63F4\u3002",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"\u300C\u3067\u304D\u306A\u3044\u3053\u3068\u300D\u3092\u6E2C\u308B\u6B20\u640D\u30E2\u30C7\u30EB\u3067\u306F\u306A\u304F\u3001",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"\u300C\u3067\u304D\u308B\u3053\u3068\u30FB\u306A\u308A\u305F\u3044\u3053\u3068\u300D\u3092\u80B2\u3066\u308B"], null)," Well-Becoming \u30E2\u30C7\u30EB\u3002"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.kg-cta-row","div.kg-cta-row",-1731061006),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.kg-btn-primary","a.kg-btn-primary",657762446),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/signup"], null),"\u7121\u6599\u3067\u8A66\u3059"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.kg-btn-secondary","a.kg-btn-secondary",-1228247207),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#robots"], null),"\u30ED\u30DC\u30C3\u30C8\u3092\u898B\u308B \u2192"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.kg-stat-grid","div.kg-stat-grid",-1919027631),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),(function (){var iter__5480__auto__ = (function cloud_itonami$app_kaigo$ui$hero_$_iter__20131(s__20132){
return (new cljs.core.LazySeq(null,(function (){
var s__20132__$1 = s__20132;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__20132__$1);
if(temp__5825__auto__){
var s__20132__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20132__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__20132__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__20134 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__20133 = (0);
while(true){
if((i__20133 < size__5479__auto__)){
var vec__20135 = cljs.core._nth(c__5478__auto__,i__20133);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20135,(0),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20135,(1),null);
var icon = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20135,(2),null);
cljs.core.chunk_append(b__20134,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.kg-stat","div.kg-stat",2011251450),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.icon","div.icon",1302290135),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true], null),icon], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.v","div.v",-529582606),v], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.l","div.l",1231851761),l], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)));

var G__20205 = (i__20133 + (1));
i__20133 = G__20205;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20134),cloud_itonami$app_kaigo$ui$hero_$_iter__20131(cljs.core.chunk_rest(s__20132__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20134),null);
}
} else {
var vec__20138 = cljs.core.first(s__20132__$2);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20138,(0),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20138,(1),null);
var icon = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20138,(2),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.kg-stat","div.kg-stat",2011251450),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.icon","div.icon",1302290135),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true], null),icon], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.v","div.v",-529582606),v], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.l","div.l",1231851761),l], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)),cloud_itonami$app_kaigo$ui$hero_$_iter__20131(cljs.core.rest(s__20132__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cloud_itonami.app_kaigo.state.hero_stats);
})())], null)], null)], null)], null);
});
cloud_itonami.app_kaigo.ui.robot_tab = (function cloud_itonami$app_kaigo$ui$robot_tab(tab,selected){
var active_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(tab),selected);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(tab),new cljs.core.Keyword(null,"role","role",-736691072),"tab",new cljs.core.Keyword(null,"aria-selected","aria-selected",1855349788),active_QMARK_,new cljs.core.Keyword(null,"class","class",-2030961996),((active_QMARK_)?"kg-tab kg-tab-active":"kg-tab"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cloud_itonami.app_kaigo.state.select_robot_BANG_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(tab));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true], null),new cljs.core.Keyword(null,"emoji","emoji",1031230144).cljs$core$IFn$_invoke$arity$1(tab)], null)," ",new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(tab),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.kg-tab-desc","span.kg-tab-desc",1634238815),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true], null),new cljs.core.Keyword(null,"desc","desc",2093485764).cljs$core$IFn$_invoke$arity$1(tab)], null)], null);
});
cloud_itonami.app_kaigo.ui.robots = (function cloud_itonami$app_kaigo$ui$robots(){
var selected = new cljs.core.Keyword(null,"selected-robot","selected-robot",505157242).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cloud_itonami.app_kaigo.state.state));
var tab = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__20141_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__20141_SHARP_),selected);
}),cloud_itonami.app_kaigo.state.robot_tabs));
var detail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cloud_itonami.app_kaigo.state.robot_details,selected);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section#robots.kg-section.kg-section-white","section#robots.kg-section.kg-section-white",1459080968),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.kg-container-narrow.kg-container","div.kg-container-narrow.kg-container",1727875096),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.kg-kicker","div.kg-kicker",1558439679),"Robot Lineup"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.kg-h2","h2.kg-h2",1411101880),"Giemon \u4ECB\u8B77\u30ED\u30DC\u30C3\u30C8 3 \u6A5F\u7A2E"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.kg-sub","p.kg-sub",-1309522415),"3D \u30E2\u30C7\u30EB\u3067\u5B9F\u7269\u306E\u30B5\u30A4\u30BA\u611F\u3092\u78BA\u8A8D\u3067\u304D\u307E\u3059"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.kg-tabs","div.kg-tabs",-969053914),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"role","role",-736691072),"tablist",new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"\u30ED\u30DC\u30C3\u30C8\u9078\u629E"], null)], null),(function (){var iter__5480__auto__ = (function cloud_itonami$app_kaigo$ui$robots_$_iter__20142(s__20143){
return (new cljs.core.LazySeq(null,(function (){
var s__20143__$1 = s__20143;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__20143__$1);
if(temp__5825__auto__){
var s__20143__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20143__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__20143__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__20145 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__20144 = (0);
while(true){
if((i__20144 < size__5479__auto__)){
var t = cljs.core._nth(c__5478__auto__,i__20144);
cljs.core.chunk_append(b__20145,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.app_kaigo.ui.robot_tab,t,selected], null));

var G__20206 = (i__20144 + (1));
i__20144 = G__20206;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20145),cloud_itonami$app_kaigo$ui$robots_$_iter__20142(cljs.core.chunk_rest(s__20143__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20145),null);
}
} else {
var t = cljs.core.first(s__20143__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.app_kaigo.ui.robot_tab,t,selected], null),cloud_itonami$app_kaigo$ui$robots_$_iter__20142(cljs.core.rest(s__20143__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cloud_itonami.app_kaigo.state.robot_tabs);
})()),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.kg-robot-grid","div.kg-robot-grid",1400636119),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"role","role",-736691072),"tabpanel"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.kg-viewer","div.kg-viewer",827995135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iframe","iframe",884422026),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"src","src",-1651076051),["https://giemon.etzhayyim.com/viewer.htm?model=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"model","model",331153215).cljs$core$IFn$_invoke$arity$1(tab))].join(''),new cljs.core.Keyword(null,"title","title",636505583),["Giemon ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(selected)," 3D \u30D3\u30E5\u30FC\u30A2"].join(''),new cljs.core.Keyword(null,"loading","loading",-737050189),"lazy",new cljs.core.Keyword(null,"allow","allow",-1857325745),"accelerometer"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.kg-viewer-note","div.kg-viewer-note",946577976),"WebGPU / WebGL2"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.kg-robot-meta","div.kg-robot-meta",-2094846892),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tag","div.tag",1088822530),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(detail)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.Keyword(null,"h3","h3",2067611163).cljs$core$IFn$_invoke$arity$1(detail)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.kg-check-list","ul.kg-check-list",-681076566)], null),(function (){var iter__5480__auto__ = (function cloud_itonami$app_kaigo$ui$robots_$_iter__20146(s__20147){
return (new cljs.core.LazySeq(null,(function (){
var s__20147__$1 = s__20147;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__20147__$1);
if(temp__5825__auto__){
var s__20147__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20147__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__20147__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__20149 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__20148 = (0);
while(true){
if((i__20148 < size__5479__auto__)){
var item = cljs.core._nth(c__5478__auto__,i__20148);
cljs.core.chunk_append(b__20149,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.kg-check","li.kg-check",821860595),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ck","span.ck",-674829958),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true], null),"\u2713"], null),item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)));

var G__20207 = (i__20148 + (1));
i__20148 = G__20207;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20149),cloud_itonami$app_kaigo$ui$robots_$_iter__20146(cljs.core.chunk_rest(s__20147__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20149),null);
}
} else {
var item = cljs.core.first(s__20147__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.kg-check","li.kg-check",821860595),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ck","span.ck",-674829958),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true], null),"\u2713"], null),item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)),cloud_itonami$app_kaigo$ui$robots_$_iter__20146(cljs.core.rest(s__20147__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(detail));
})()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.kg-ext-link","a.kg-ext-link",151876571),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"https://giemon.etzhayyim.com",new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"rel","rel",1378823488),"noopener"], null),"Giemon \u88FD\u54C1\u30DA\u30FC\u30B8\u3078 \u2192"], null)], null)], null)], null)], null);
});
cloud_itonami.app_kaigo.ui.benefit_results = (function cloud_itonami$app_kaigo$ui$benefit_results(){
var map__20150 = cloud_itonami.app_kaigo.state.benefit_calc();
var map__20150__$1 = cljs.core.__destructure_map(map__20150);
var covered = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20150__$1,new cljs.core.Keyword(null,"covered","covered",-409185091));
var benefit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20150__$1,new cljs.core.Keyword(null,"benefit","benefit",-190946480));
var copay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20150__$1,new cljs.core.Keyword(null,"copay","copay",1728744677));
var self_pay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20150__$1,new cljs.core.Keyword(null,"self-pay","self-pay",1667493826));
var cells = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u652F\u7D66\u5BFE\u8C61\u984D",covered,"#0017c1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u652F\u7D66\u984D",benefit,"#259d63"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u81EA\u5DF1\u8CA0\u62C5\uFF08\u5BFE\u8C61\u5185\uFF09",copay,"#b78f00"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u8D85\u904E\u81EA\u5DF1\u8CA0\u62C5",self_pay,"#949494"], null)], null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.kg-result-grid","div.kg-result-grid",1020272241)], null),(function (){var iter__5480__auto__ = (function cloud_itonami$app_kaigo$ui$benefit_results_$_iter__20151(s__20152){
return (new cljs.core.LazySeq(null,(function (){
var s__20152__$1 = s__20152;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__20152__$1);
if(temp__5825__auto__){
var s__20152__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20152__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__20152__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__20154 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__20153 = (0);
while(true){
if((i__20153 < size__5479__auto__)){
var vec__20155 = cljs.core._nth(c__5478__auto__,i__20153);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20155,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20155,(1),null);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20155,(2),null);
cljs.core.chunk_append(b__20154,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.kg-result","div.kg-result",831006647),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.l","p.l",-1635843837),label], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.v","p.v",614927476),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),color], null)], null),cloud_itonami.app_kaigo.ui.yen(v)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),label], null)));

var G__20208 = (i__20153 + (1));
i__20153 = G__20208;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20154),cloud_itonami$app_kaigo$ui$benefit_results_$_iter__20151(cljs.core.chunk_rest(s__20152__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20154),null);
}
} else {
var vec__20158 = cljs.core.first(s__20152__$2);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20158,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20158,(1),null);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20158,(2),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.kg-result","div.kg-result",831006647),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.l","p.l",-1635843837),label], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.v","p.v",614927476),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),color], null)], null),cloud_itonami.app_kaigo.ui.yen(v)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),label], null)),cloud_itonami$app_kaigo$ui$benefit_results_$_iter__20151(cljs.core.rest(s__20152__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cells);
})());
});
cloud_itonami.app_kaigo.ui.housing = (function cloud_itonami$app_kaigo$ui$housing(){
var map__20162 = cljs.core.deref(cloud_itonami.app_kaigo.state.state);
var map__20162__$1 = cljs.core.__destructure_map(map__20162);
var care_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20162__$1,new cljs.core.Keyword(null,"care-level","care-level",1616793339));
var housing_cost = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20162__$1,new cljs.core.Keyword(null,"housing-cost","housing-cost",470403115));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section#housing.kg-section.kg-section-gray","section#housing.kg-section.kg-section-gray",2011689253),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.kg-container-narrow.kg-container","div.kg-container-narrow.kg-container",1727875096),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.kg-kicker","div.kg-kicker",1558439679),"Housing Reform"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.kg-h2","h2.kg-h2",1411101880),"\u4F4F\u5B85\u6539\u4FEE\u652F\u63F4 + \u7D66\u4ED8\u91D1 AI \u8A66\u7B97"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.kg-sub","p.kg-sub",-1309522415),"\u4ECB\u8B77\u4FDD\u967A\u300C\u4F4F\u5B85\u6539\u4FEE\u8CBB\u300D\u306F\u8981\u652F\u63F4\u30FB\u8981\u4ECB\u8B77\u8A8D\u5B9A\u8005\u306B\u6700\u5927"," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"20 \u4E07\u5186"], null),"\u304C\u652F\u7D66\u3055\u308C\u307E\u3059\u3002"," Giemon Kaigo \u304C\u5BFE\u8C61\u5DE5\u4E8B\u30FB\u7D66\u4ED8\u984D\u30FB\u65BD\u5DE5\u696D\u8005\u3092\u4E00\u62EC\u30B5\u30DD\u30FC\u30C8\u3002"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.kg-card-grid","div.kg-card-grid",162457570)], null),(function (){var iter__5480__auto__ = (function cloud_itonami$app_kaigo$ui$housing_$_iter__20163(s__20164){
return (new cljs.core.LazySeq(null,(function (){
var s__20164__$1 = s__20164;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__20164__$1);
if(temp__5825__auto__){
var s__20164__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20164__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__20164__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__20166 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__20165 = (0);
while(true){
if((i__20165 < size__5479__auto__)){
var item = cljs.core._nth(c__5478__auto__,i__20165);
cljs.core.chunk_append(b__20166,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.kg-housing-card","div.kg-housing-card",857903707),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.icon","div.icon",1302290135),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true], null),new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.desc","p.desc",739764119),new cljs.core.Keyword(null,"desc","desc",2093485764).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.cost","p.cost",1342196302),"\u76EE\u5B89: ",new cljs.core.Keyword(null,"cost","cost",-1094861735).cljs$core$IFn$_invoke$arity$1(item)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(item)], null)));

var G__20209 = (i__20165 + (1));
i__20165 = G__20209;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20166),cloud_itonami$app_kaigo$ui$housing_$_iter__20163(cljs.core.chunk_rest(s__20164__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20166),null);
}
} else {
var item = cljs.core.first(s__20164__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.kg-housing-card","div.kg-housing-card",857903707),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.icon","div.icon",1302290135),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true], null),new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.desc","p.desc",739764119),new cljs.core.Keyword(null,"desc","desc",2093485764).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.cost","p.cost",1342196302),"\u76EE\u5B89: ",new cljs.core.Keyword(null,"cost","cost",-1094861735).cljs$core$IFn$_invoke$arity$1(item)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(item)], null)),cloud_itonami$app_kaigo$ui$housing_$_iter__20163(cljs.core.rest(s__20164__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cloud_itonami.app_kaigo.state.housing_items);
})()),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.kg-calc","div.kg-calc",-1912332807),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"\u4F4F\u5B85\u6539\u4FEE\u8CBB \u7D66\u4ED8\u984D \u7C21\u6613\u8A66\u7B97"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.kg-calc-grid","div.kg-calc-grid",704907507),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset.kg-fieldset","fieldset.kg-fieldset",-1892317713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"legend.kg-legend","legend.kg-legend",1574251165),"\u8981\u4ECB\u8B77\u5EA6\u3092\u9078\u629E"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.kg-level-row","div.kg-level-row",55248042)], null),(function (){var iter__5480__auto__ = (function cloud_itonami$app_kaigo$ui$housing_$_iter__20167(s__20168){
return (new cljs.core.LazySeq(null,(function (){
var s__20168__$1 = s__20168;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__20168__$1);
if(temp__5825__auto__){
var s__20168__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20168__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__20168__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__20170 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__20169 = (0);
while(true){
if((i__20169 < size__5479__auto__)){
var lv = cljs.core._nth(c__5478__auto__,i__20169);
cljs.core.chunk_append(b__20170,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(care_level,lv))?"kg-level kg-level-active":"kg-level"),new cljs.core.Keyword(null,"aria-pressed","aria-pressed",-1749058631),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(care_level,lv),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__20169,lv,c__5478__auto__,size__5479__auto__,b__20170,s__20168__$2,temp__5825__auto__,map__20162,map__20162__$1,care_level,housing_cost){
return (function (){
return cloud_itonami.app_kaigo.state.set_care_level_BANG_(lv);
});})(i__20169,lv,c__5478__auto__,size__5479__auto__,b__20170,s__20168__$2,temp__5825__auto__,map__20162,map__20162__$1,care_level,housing_cost))
], null),lv], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),lv], null)));

var G__20210 = (i__20169 + (1));
i__20169 = G__20210;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20170),cloud_itonami$app_kaigo$ui$housing_$_iter__20167(cljs.core.chunk_rest(s__20168__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20170),null);
}
} else {
var lv = cljs.core.first(s__20168__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(care_level,lv))?"kg-level kg-level-active":"kg-level"),new cljs.core.Keyword(null,"aria-pressed","aria-pressed",-1749058631),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(care_level,lv),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (lv,s__20168__$2,temp__5825__auto__,map__20162,map__20162__$1,care_level,housing_cost){
return (function (){
return cloud_itonami.app_kaigo.state.set_care_level_BANG_(lv);
});})(lv,s__20168__$2,temp__5825__auto__,map__20162,map__20162__$1,care_level,housing_cost))
], null),lv], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),lv], null)),cloud_itonami$app_kaigo$ui$housing_$_iter__20167(cljs.core.rest(s__20168__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5)], null));
})()),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.kg-hint","p.kg-hint",1235462418),"\u81EA\u5DF1\u8CA0\u62C5\u5272\u5408: ",cloud_itonami.app_kaigo.state.copay_label()," \u5272"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.kg-legend","label.kg-legend",1439754067),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),"housing-cost"], null),"\u5DE5\u4E8B\u8CBB\u7528: ",Number(housing_cost).toLocaleString()," \u5186"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#housing-cost.kg-range","input#housing-cost.kg-range",-246160119),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"aria-valuemax","aria-valuemax",-1167670164),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"aria-valuemin","aria-valuemin",138532158),new cljs.core.Keyword(null,"aria-valuenow","aria-valuenow",-773142658)],[(50000),housing_cost,(2000000),"range",(2000000),(function (p1__20161_SHARP_){
return cloud_itonami.app_kaigo.state.set_housing_cost_BANG_(Number(p1__20161_SHARP_.target.value));
}),(50000),(50000),housing_cost])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.kg-range-ends","div.kg-range-ends",1985440872),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"5 \u4E07\u5186"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"200 \u4E07\u5186"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.app_kaigo.ui.benefit_results], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.kg-fineprint","p.kg-fineprint",-675210742),"\u203B \u6982\u7B97\u5024\u3002\u5B9F\u969B\u306E\u7D66\u4ED8\u984D\u306F\u5E02\u533A\u753A\u6751\u306E\u5BE9\u67FB\u306B\u3088\u308A\u78BA\u5B9A\u3057\u307E\u3059\u3002"], null)], null)], null)], null);
});
cloud_itonami.app_kaigo.ui.limits_row = (function cloud_itonami$app_kaigo$ui$limits_row(p__20171){
var vec__20172 = p__20171;
var lv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20172,(0),null);
var limit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20172,(1),null);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.kg-limit-row","div.kg-limit-row",1409362288),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"role","role",-736691072),"listitem"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.kg-limit-label","span.kg-limit-label",-681530347),"\u8981\u4ECB\u8B77 ",lv], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.kg-limit-track","div.kg-limit-track",1928076305),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"role","role",-736691072),"progressbar",new cljs.core.Keyword(null,"aria-valuenow","aria-valuenow",-773142658),limit,new cljs.core.Keyword(null,"aria-valuemin","aria-valuemin",138532158),(0),new cljs.core.Keyword(null,"aria-valuemax","aria-valuemax",-1167670164),cloud_itonami.app_kaigo.state.care_limits_max], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.kg-limit-fill","div.kg-limit-fill",1857530162),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((100.0 * (limit / cloud_itonami.app_kaigo.state.care_limits_max))),"%"].join('')], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.kg-limit-value","span.kg-limit-value",-185829701),cloud_itonami.app_kaigo.ui.yen(limit),"/\u6708"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),lv], null));
});
cloud_itonami.app_kaigo.ui.insurance = (function cloud_itonami$app_kaigo$ui$insurance(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section#insurance.kg-section.kg-section-white","section#insurance.kg-section.kg-section-white",-1311670456),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.kg-container-narrow.kg-container","div.kg-container-narrow.kg-container",1727875096),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.kg-kicker","div.kg-kicker",1558439679),"Care Insurance Navigator"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.kg-h2","h2.kg-h2",1411101880),"\u4ECB\u8B77\u4FDD\u967A\u5236\u5EA6 \u30CA\u30D3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.kg-sub","p.kg-sub",-1309522415),"\u8907\u96D1\u306A\u4ECB\u8B77\u4FDD\u967A\u306E\u624B\u7D9A\u304D\u3092 AI \u304C\u30B9\u30C6\u30C3\u30D7\u3054\u3068\u306B\u6848\u5185\u3002","\u8A8D\u5B9A\u7533\u8ACB\u304B\u3089\u30B5\u30FC\u30D3\u30B9\u4E8B\u696D\u6240\u30DE\u30C3\u30C1\u30F3\u30B0\u307E\u3067\u30B5\u30DD\u30FC\u30C8\u3057\u307E\u3059\u3002"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol.kg-steps","ol.kg-steps",-1190164583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"\u4ECB\u8B77\u4FDD\u967A\u624B\u7D9A\u304D\u306E\u6D41\u308C"], null)], null),(function (){var iter__5480__auto__ = (function cloud_itonami$app_kaigo$ui$insurance_$_iter__20175(s__20176){
return (new cljs.core.LazySeq(null,(function (){
var s__20176__$1 = s__20176;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__20176__$1);
if(temp__5825__auto__){
var s__20176__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20176__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__20176__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__20178 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__20177 = (0);
while(true){
if((i__20177 < size__5479__auto__)){
var s = cljs.core._nth(c__5478__auto__,i__20177);
cljs.core.chunk_append(b__20178,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.kg-step","li.kg-step",-1368675986),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.kg-step-head","div.kg-step-head",-843745256),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.kg-step-num","span.kg-step-num",-1700204549),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),["\u30B9\u30C6\u30C3\u30D7 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"step","step",1288888124).cljs$core$IFn$_invoke$arity$1(s))].join('')], null),new cljs.core.Keyword(null,"step","step",1288888124).cljs$core$IFn$_invoke$arity$1(s)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.kg-step-title","span.kg-step-title",72114627),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(s)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.desc","p.desc",739764119),new cljs.core.Keyword(null,"desc","desc",2093485764).cljs$core$IFn$_invoke$arity$1(s)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"step","step",1288888124).cljs$core$IFn$_invoke$arity$1(s)], null)));

var G__20211 = (i__20177 + (1));
i__20177 = G__20211;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20178),cloud_itonami$app_kaigo$ui$insurance_$_iter__20175(cljs.core.chunk_rest(s__20176__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20178),null);
}
} else {
var s = cljs.core.first(s__20176__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.kg-step","li.kg-step",-1368675986),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.kg-step-head","div.kg-step-head",-843745256),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.kg-step-num","span.kg-step-num",-1700204549),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),["\u30B9\u30C6\u30C3\u30D7 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"step","step",1288888124).cljs$core$IFn$_invoke$arity$1(s))].join('')], null),new cljs.core.Keyword(null,"step","step",1288888124).cljs$core$IFn$_invoke$arity$1(s)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.kg-step-title","span.kg-step-title",72114627),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(s)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.desc","p.desc",739764119),new cljs.core.Keyword(null,"desc","desc",2093485764).cljs$core$IFn$_invoke$arity$1(s)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"step","step",1288888124).cljs$core$IFn$_invoke$arity$1(s)], null)),cloud_itonami$app_kaigo$ui$insurance_$_iter__20175(cljs.core.rest(s__20176__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cloud_itonami.app_kaigo.state.care_steps);
})()),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.kg-limits","div.kg-limits",483714210),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"\u6708\u984D\u652F\u7D66\u9650\u5EA6\u984D \u65E9\u898B\u8868\uFF081 \u5272\u8CA0\u62C5\uFF09"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"role","role",-736691072),"list",new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"\u8981\u4ECB\u8B77\u5EA6\u5225\u652F\u7D66\u9650\u5EA6\u984D"], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cloud_itonami.app_kaigo.ui.limits_row,cloud_itonami.app_kaigo.state.care_limits)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.kg-fineprint","p.kg-fineprint",-675210742),"\u203B 2024 \u5E74\u5EA6\u4ECB\u8B77\u5831\u916C\u6539\u5B9A\u5F8C\u306E\u5024\u30022\u30FB3 \u5272\u8CA0\u62C5\u306E\u65B9\u306F\u6240\u5F97\u306B\u5FDC\u3058\u3066\u7570\u306A\u308A\u307E\u3059\u3002"], null)], null)], null)], null);
});
cloud_itonami.app_kaigo.ui.wb_axis = (function cloud_itonami$app_kaigo$ui$wb_axis(ax){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.kg-axis","div.kg-axis",196908765),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.kg-axis-bar","div.kg-axis-bar",-494874085)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dt","dt",-368444759),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ja","ja",-1704765727).cljs$core$IFn$_invoke$arity$1(ax)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.en","span.en",614816324),new cljs.core.Keyword(null,"axis","axis",-1215390822).cljs$core$IFn$_invoke$arity$1(ax)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dd","dd",-1340437629),new cljs.core.Keyword(null,"desc","desc",2093485764).cljs$core$IFn$_invoke$arity$1(ax)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"axis","axis",-1215390822).cljs$core$IFn$_invoke$arity$1(ax)], null));
});
cloud_itonami.app_kaigo.ui.spiral_item = (function cloud_itonami$app_kaigo$ui$spiral_item(i,p__20179){
var vec__20180 = p__20179;
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20180,(0),null);
var desc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20180,(1),null);
var icon = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20180,(2),null);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.kg-spiral-item","li.kg-spiral-item",-216517923),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.kg-spiral-icon-col","div.kg-spiral-icon-col",-2110539630),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.kg-spiral-icon","div.kg-spiral-icon",1102244544),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true], null),icon], null),(((i < (4)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.kg-spiral-connector","div.kg-spiral-connector",-1651940619)], null):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.kg-spiral-body","div.kg-spiral-body",360755576),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.t","p.t",-129567854),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.d","p.d",-257556416),desc], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),title], null));
});
cloud_itonami.app_kaigo.ui.well_becoming = (function cloud_itonami$app_kaigo$ui$well_becoming(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section#circle.kg-section.kg-section-gray","section#circle.kg-section.kg-section-gray",-1299529866),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.kg-container-narrow.kg-container","div.kg-container-narrow.kg-container",1727875096),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.kg-kicker","div.kg-kicker",1558439679),"Well-Becoming"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.kg-h2","h2.kg-h2",1411101880),"\u6B20\u640D\u30E2\u30C7\u30EB\u304B\u3089\u3001\u80FD\u529B\u6210\u9577\u30E2\u30C7\u30EB\u3078\u3002"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.kg-sub","p.kg-sub",-1309522415),"\u516C\u7684\u4ECB\u8B77\u306F\u300C\u3067\u304D\u306A\u3044\u3053\u3068\u300D\u3092\u6E2C\u308A\u7D66\u4ED8\u3059\u308B\u53D7\u52D5\u30E2\u30C7\u30EB\u3002"," Giemon Kaigo \u306F\u300C\u3067\u304D\u308B\u3053\u3068\u30FB\u306A\u308A\u305F\u3044\u3053\u3068\u300D\u3092\u80B2\u3066\u308B ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Well-Becoming"], null)," \u30E2\u30C7\u30EB\u3067\u52D5\u304D\u307E\u3059\u3002"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.kg-wb-grid","div.kg-wb-grid",2144831351),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Well-Becoming 5 \u8EF8"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dl","dl",-2140151713)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cloud_itonami.app_kaigo.ui.wb_axis,cloud_itonami.app_kaigo.state.well_being_axes))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.kg-spiral-card","div.kg-spiral-card",-1275972991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"\u6210\u9577\u87BA\u65CB\u30E2\u30C7\u30EB"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cloud_itonami.app_kaigo.ui.spiral_item,cloud_itonami.app_kaigo.state.spiral_steps)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.kg-circle-note","div.kg-circle-note",737524418),"\u8FD1\u96A3 5\u301C8 \u4EBA\u306E\u30A4\u30F3\u30D5\u30A9\u30FC\u30DE\u30EB\u306A\u4E92\u52A9\u30B0\u30EB\u30FC\u30D7\u3002\u6642\u9593\u9280\u884C\uFF08TimeBank\uFF09\u3067\u975E\u8CA8\u5E63\u7684\u306A\u30B1\u30A2\u4EA4\u63DB\u3092\u8A18\u9332\u3057\u307E\u3059\u3002"], null)], null)], null)], null)], null);
});
cloud_itonami.app_kaigo.ui.plan_card = (function cloud_itonami$app_kaigo$ui$plan_card(p){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"highlight","highlight",-800930873).cljs$core$IFn$_invoke$arity$1(p))?"kg-plan kg-plan-highlight":"kg-plan")], null),(cljs.core.truth_(new cljs.core.Keyword(null,"highlight","highlight",-800930873).cljs$core$IFn$_invoke$arity$1(p))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.kg-recommend","div.kg-recommend",2031711311),"\u304A\u3059\u3059\u3081"], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.name","p.name",-2118801343),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.price-row","div.price-row",1455266886),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.price","span.price",1400612599),new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(p)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.price-note","span.price-note",1906032883),new cljs.core.Keyword(null,"price-note","price-note",-1569634995).cljs$core$IFn$_invoke$arity$1(p)], null)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.kg-plan-features","ul.kg-plan-features",237007110),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p)),"\u30D7\u30E9\u30F3\u306E\u6A5F\u80FD"].join('')], null)], null),(function (){var iter__5480__auto__ = (function cloud_itonami$app_kaigo$ui$plan_card_$_iter__20183(s__20184){
return (new cljs.core.LazySeq(null,(function (){
var s__20184__$1 = s__20184;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__20184__$1);
if(temp__5825__auto__){
var s__20184__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20184__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__20184__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__20186 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__20185 = (0);
while(true){
if((i__20185 < size__5479__auto__)){
var feat = cljs.core._nth(c__5478__auto__,i__20185);
cljs.core.chunk_append(b__20186,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.kg-check","li.kg-check",821860595),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ck","span.ck",-674829958),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true], null),"\u2713"], null),feat], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),feat], null)));

var G__20212 = (i__20185 + (1));
i__20185 = G__20212;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20186),cloud_itonami$app_kaigo$ui$plan_card_$_iter__20183(cljs.core.chunk_rest(s__20184__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20186),null);
}
} else {
var feat = cljs.core.first(s__20184__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.kg-check","li.kg-check",821860595),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ck","span.ck",-674829958),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true], null),"\u2713"], null),feat], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),feat], null)),cloud_itonami$app_kaigo$ui$plan_card_$_iter__20183(cljs.core.rest(s__20184__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"features","features",-1146962336).cljs$core$IFn$_invoke$arity$1(p));
})()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"highlight","highlight",-800930873).cljs$core$IFn$_invoke$arity$1(p))?"kg-plan-cta kg-plan-cta-solid":"kg-plan-cta kg-plan-cta-line"),new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"cta-href","cta-href",-1235729059).cljs$core$IFn$_invoke$arity$1(p)], null),new cljs.core.Keyword(null,"cta","cta",-97890728).cljs$core$IFn$_invoke$arity$1(p)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p)], null));
});
cloud_itonami.app_kaigo.ui.pricing = (function cloud_itonami$app_kaigo$ui$pricing(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section#pricing.kg-section.kg-section-white","section#pricing.kg-section.kg-section-white",-1563311467),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.kg-container-narrow.kg-container","div.kg-container-narrow.kg-container",1727875096),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.kg-h2","h2.kg-h2",1411101880),"\u6599\u91D1\u30D7\u30E9\u30F3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.kg-sub","p.kg-sub",-1309522415),"\u5168\u30D7\u30E9\u30F3 14 \u65E5\u9593\u7121\u6599\u30C8\u30E9\u30A4\u30A2\u30EB\u3042\u308A\u3002\u30AF\u30EC\u30B8\u30C3\u30C8\u30AB\u30FC\u30C9\u4E0D\u8981\u3002"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.kg-plan-grid","div.kg-plan-grid",1779555071)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cloud_itonami.app_kaigo.ui.plan_card,cloud_itonami.app_kaigo.state.plans)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.kg-plan-foot","p.kg-plan-foot",559800772),"\u4ECB\u8B77\u4FDD\u967A\u9069\u7528\u4E8B\u696D\u8005\u30FB\u533B\u7642\u6A5F\u95A2\u5411\u3051\u30D7\u30E9\u30F3\u306F\u5225\u9014\u3054\u76F8\u8AC7\u304F\u3060\u3055\u3044\u3002"], null)], null)], null);
});
cloud_itonami.app_kaigo.ui.faq_item = (function cloud_itonami$app_kaigo$ui$faq_item(p__20187){
var vec__20188 = p__20187;
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20188,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20188,(1),null);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),q,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg.chev","svg.chev",1471446039),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 24 24",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor",new cljs.core.Keyword(null,"strokeWidth","strokeWidth",-2130848332),2.5,new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"strokeLinecap","strokeLinecap",-1974748357),"round",new cljs.core.Keyword(null,"strokeLinejoin","strokeLinejoin",-721488076),"round",new cljs.core.Keyword(null,"d","d",1972142424),"m6 9 6 6 6-6"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.answer","div.answer",-1935285111),a], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),q], null));
});
cloud_itonami.app_kaigo.ui.faq = (function cloud_itonami$app_kaigo$ui$faq(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.kg-section.kg-section-gray","section.kg-section.kg-section-gray",1587819819),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"768px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.kg-container","div.kg-container",577777698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.kg-h2","h2.kg-h2",1411101880),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.3rem",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(32)], null)], null),"\u3088\u304F\u3042\u308B\u8CEA\u554F"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.kg-faq","div.kg-faq",-818420719)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cloud_itonami.app_kaigo.ui.faq_item,cloud_itonami.app_kaigo.state.faqs))], null)], null)], null);
});
cloud_itonami.app_kaigo.ui.footer = (function cloud_itonami$app_kaigo$ui$footer(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer.kg-footer","footer.kg-footer",898971744),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"role","role",-736691072),"contentinfo"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.kg-container-narrow.kg-container.kg-footer-grid","div.kg-container-narrow.kg-container.kg-footer-grid",2068390521),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.brand","p.brand",2129386063),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true], null),"\uD83C\uDFE0"], null),"Giemon Kaigo"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.about","p.about",-1440933577),"\u30ED\u30DC\u30C3\u30C8\u304C\u652F\u3048\u308B\u5728\u5B85\u4ECB\u8B77\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u3002",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"\u4F4F\u5B85\u6539\u4FEE\u30FB\u4ECB\u8B77\u4FDD\u967A\u30CA\u30D3\u30FBWell-Becoming AI\u3002",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"\u958B\u767A\u5143: etzhayyim Japan\u682A\u5F0F\u4F1A\u793E / amanomibashira"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.powered","p.powered",989744773),"Powered by ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://giemon.etzhayyim.com"], null),"Giemon \u30ED\u30DC\u30C3\u30C8"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"\u30B5\u30FC\u30D3\u30B9"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),(function (){var iter__5480__auto__ = (function cloud_itonami$app_kaigo$ui$footer_$_iter__20191(s__20192){
return (new cljs.core.LazySeq(null,(function (){
var s__20192__$1 = s__20192;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__20192__$1);
if(temp__5825__auto__){
var s__20192__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20192__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__20192__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__20194 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__20193 = (0);
while(true){
if((i__20193 < size__5479__auto__)){
var vec__20195 = cljs.core._nth(c__5478__auto__,i__20193);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20195,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20195,(1),null);
cljs.core.chunk_append(b__20194,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),h], null),l], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),l], null)));

var G__20213 = (i__20193 + (1));
i__20193 = G__20213;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20194),cloud_itonami$app_kaigo$ui$footer_$_iter__20191(cljs.core.chunk_rest(s__20192__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20194),null);
}
} else {
var vec__20198 = cljs.core.first(s__20192__$2);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20198,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20198,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),h], null),l], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),l], null)),cloud_itonami$app_kaigo$ui$footer_$_iter__20191(cljs.core.rest(s__20192__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cloud_itonami.app_kaigo.state.footer_services);
})())], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"\u30EA\u30F3\u30AF"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"https://giemon.etzhayyim.com",new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"rel","rel",1378823488),"noopener"], null),"Giemon \u516C\u5F0F\u30B5\u30A4\u30C8"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/etzhayyim/otete",new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"rel","rel",1378823488),"noopener"], null),"GitHub (\u30AA\u30FC\u30D7\u30F3\u30BD\u30FC\u30B9)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"mailto:kaigo@etzhayyim.com"], null),"\u304A\u554F\u3044\u5408\u308F\u305B"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/privacy"], null),"\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30DD\u30EA\u30B7\u30FC"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/terms"], null),"\u5229\u7528\u898F\u7D04"], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.kg-container-narrow.kg-container.kg-footer-bar","div.kg-container-narrow.kg-container.kg-footer-bar",-1588411530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"\u00A9 2026 amanomibashira. All rights reserved."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"\u672C\u30B5\u30FC\u30D3\u30B9\u306F\u4ECB\u8B77\u4FDD\u967A\u7D66\u4ED8\u306E\u7533\u8ACB\u3092\u4EE3\u884C\u3059\u308B\u3082\u306E\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002"], null)], null)], null);
});
cloud_itonami.app_kaigo.ui.root = (function cloud_itonami$app_kaigo$ui$root(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),cloud_itonami.app_kaigo.ui.css_text], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [appkit.core.panel,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.kg-app","div.kg-app",1479005815),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.kg-sr-link","a.kg-sr-link",1078536115),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#main"], null),"\u672C\u6587\u3078\u30B9\u30AD\u30C3\u30D7"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.app_kaigo.ui.header], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main#main","main#main",-1733961057),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.app_kaigo.ui.hero], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.app_kaigo.ui.robots], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.app_kaigo.ui.housing], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.app_kaigo.ui.insurance], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.app_kaigo.ui.well_becoming], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.app_kaigo.ui.pricing], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.app_kaigo.ui.faq], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.app_kaigo.ui.footer], null)], null)], null)], null);
});

//# sourceMappingURL=cloud_itonami.app_kaigo.ui.js.map
