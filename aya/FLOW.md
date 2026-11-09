# FLOW.md — トップページ（index.html）動線設計

作成：2026-11-09
土台：18TRIP公式トップの積み上げ型（UIカタログ A-1）＋ ASSETS.md §7 の実測記録。
対象読者：本人＋完全鍵垢でのみ閲覧する想定読者。トップの役割は「アーカイブの玄関」。

## 1. セクション順と役割（上から順）

| # | セクション | 役割 | 主な遷移先 |
|---|---|---|---|
| 0 | 共通ヘッダー（site.js 注入の全画面メニュー） | 全ページへの常設導線。ロゴ＝TOPへ戻る | 全ページ |
| 1 | フライト情報ティッカー | 世界観の提示（装飾）。リンクは持たない | — |
| 2 | HERO（キービジュアル） | 第一印象。サイトの顔＋最重要2導線の置き場 | CHARACTER（主CTA）／ STORY（副CTA） |
| 3 | NEWS | 更新の入口。日付順に「何が新しいか」を示す。各行にタグを持ち、該当ページへの行リンクを持つ | 行ごとに該当ページ（EVENT行→event-camelia 等） |
| 4 | INTRODUCTION | 世界観コピーの提示。読み終えた先に「もっと知る」導線を置く | TERMS（用語）／ STORY（本編） |
| 5 | MEMBERS | 人物への入口。タブ切替で3人を切り替えて見せ、各パネル末尾が詳細への導線 | 下記 §2 |
| 6 | EVENT | 期間物への導線（公式トップには無い当サイト固有枠。キャンペーン性が高いので MEMBERS の直後・MOVIE の前に置く） | event-camelia.html |
| 7 | MOVIE | 映像置き場（公式のチケット風）。現在は動画素材なし＝無効化チケットで見た目だけ成立させる | 将来：外部動画／埋め込みへ差替 |
| 8 | LINK | 外部への出口。公式（本家）への送客カード群。トップの締めとして、フッター直前に sticky で置く | 公式サイト／公式X／公式YouTube／App Store／Google Play |
| 9 | 共通フッター | サイト内回遊の受け皿（白帯ナビ）＋作品情報 | 全ページ |

公式トップ原順（NEWS→INTRO→CHARACTER→MOVIE→LINK）に、固有枠 EVENT を
MEMBERS直後へ差し込む構成。HERO とティッカーは公式どおり最上部。

## 2. MEMBERS の3人の遷移先

| メンバー | 遷移先 | 備考 |
|---|---|---|
| 綾 🍨 | character.html | 詳細ページ（デバイス枠＋prof表）。主導線 |
| フィラー 🫧 | character-filler.html | 専用ページ（過去編）を制作済み（下記 §3） |
| 添 ☁️ | ten.html | 公式キャラページのレプリカ。パネル内に公式ページへの外部リンクも併記する（本家確認用） |

## 3. フィラー専用ページの扱い（設計判断）

- ページ名：`character-filler.html`（綾の character.html と対になる過去編ページ）。
- **2026-11-09 制作済み**：綾と同じ器（デバイス枠＋prof HTML描画、ten.html の実測方式）で本組みした。
  MEMBERS パネルのリンクと §2 の表は専用ページへ差し替え済み（仮リンク時代は story.html 宛）。
- パネル内には「※フィラー専用ページ（過去編）。本編は STORY へ」と明記する。
- 仮リンク時代の判断記録：専用ページが無い間は、死に導線を作らないため story.html への
  仮リンクとし、パネルに「準備中」と明記していた。

## 4. MOVIE の扱い

- 現在は動画ファイル・埋め込み先が無いため、チケットは **無効化（リンクなし／aria-disabled）** で置く。
  見た目（チケット形・PLAYアイコン・hover）とタイトルだけ成立させ、「COMING SOON」表記を付ける。
- 将来の差替先候補：①公式YouTube の関連動画への外部リンク、②自作動画（Live2D等）の埋め込み。
  どちらになってもチケットの器はそのまま使える形にする。

## 5. LINK のリンク先

公式トップの SNS カード文法に倣い、本家 18TRIP の公式窓口への外部リンクカードとする。

| カード | URL |
|---|---|
| 公式サイト | https://18trip.jp/ |
| 公式X | https://x.com/18trip_official（※ハンドルは YouTube と同一と推定。未確認） |
| 公式YouTube | https://www.youtube.com/@18trip_official |
| App Store | https://apps.apple.com/jp/app/id6476969262 |
| Google Play | https://play.google.com/store/apps/details?id=jp.co.liberent.eighteentrip&hl=ja |

演出は公式実測（ASSETS.md §7）：position:sticky・高さ PC 540px／SP 160vw、170px のライム色
Funny「LINK→」「←LINK」文字が流れ、SNSカードが絶対配置で散らばり hover で scale(0.95)。
※当サイトは中央カラム（SP 480px／PC 720px）レイアウトのため、文字サイズと高さは
カラム幅に合わせて縮小換算して実装する（換算値は index.css のコメントに明記）。

## 6. ページ間の全体動線（サマリ）

- TOP →（HERO主CTA／MEMBERS綾）→ CHARACTER（綾）
- TOP →（MEMBERSフィラー）→ CHARACTER-FILLER（フィラー過去編）
- TOP →（HERO副CTA／INTRO）→ STORY（5話短編・カメリア枠）
- TOP →（MEMBERS添）→ TEN（レプリカ）→（パネル・フッター経由）→ 公式キャラページ
- TOP →（EVENT／NEWS の EVENT行）→ EVENT「壊生カメリア」特設
- TOP →（INTRO／フッター）→ TERMS（用語集）
- TOP →（LINK）→ 外部（公式窓口）
- 全ページ共通：ヘッダーの全画面メニューとフッター白帯ナビが相互リンクを担保する。
