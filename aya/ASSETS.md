# ASSETS.md — 公式アセット取得・差し替え記録

取得日：2026-11-09
方針：18TRIP公式サイト（https://18trip.jp/）からダウンロードできる公式アセットを、
笹井綾 総まとめサイト（個人・非公開の再現版）の UI 部品・フォント・色にのみ使う。
キャラのイラストそのもの（他キャラの立ち絵・カード絵等）は持ち込んでいない。
GitHub へは push していない（ローカルのみ）。

---

## 1. フォント（assets/fonts/）

| ファイル | 取得元 | 使用箇所 |
|---|---|---|
| 18TRIPSans-Light.woff2 / .woff | https://18trip.jp/shared/fonts/18TRIPSans-Light.woff2（.woff も同パス） | @font-face 定義のみ（予備ウェイト） |
| 18TRIPSans-Regular.woff2 / .woff | https://18trip.jp/shared/fonts/18TRIPSans-Regular.woff2 | 同上 |
| 18TRIPSans-Medium.woff2 / .woff | https://18trip.jp/shared/fonts/18TRIPSans-Medium.woff2 | ナビ、ティッカー、タブ、Track番号 |
| 18TRIPSans-Bold.woff2 / .woff | https://18trip.jp/shared/fonts/18TRIPSans-Bold.woff2 | ロゴ、セクション見出し |
| 18TRIPSansFunny-Medium.woff2 / .woff | https://18trip.jp/shared/fonts/18TRIPSansFunny-Medium.woff2 ※ファイル名は「Sans」の後にハイフンなし | キャッチコピー（.catch） |
| IBMPlexSansJP-{500,600,700}-{000..368}.woff2（計369ファイル）＋ plex-faces.css | Google Fonts css2 API（https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+JP:wght@500;600;700）が返す fonts.gstatic.com のサブセット woff2 を全件取得し、unicode-range 付き @font-face を plex-faces.css に再構成 | 本文フォント（全ページ body）。公式も Google Fonts 経由で同フォントを使用 |
| job-clarendon-{300,400,700}.woff2 / job-clarendon-hairline-100.woff2 | 公式が読み込む Adobe Fonts（Typekit）キット https://use.typekit.net/tde8nlc.css の @font-face 実ファイル | セクション見出しのフォールバックに定義。※公式トップ／キャラページCSS内では使用箇所を確認できず（他ページ用と推定） |

注意：Funny フォントは初回、誤ったファイル名（18TRIPSans-Funny-Medium）で 404 の HTML を取得してしまったため、正しいファイル名で再取得し直した（検証済み：WOFF2 実ファイル）。

## 2. 公式 UI 画像（assets/official/、計71点）

取得元ベース URL：https://18trip.jp/shared/img/{common,top,character}/
ファイル名は `{区分}_{元のファイル名}` にリネームして保存。

### 使用中

| ファイル | 取得元 | 使用箇所 |
|---|---|---|
| common_icon_pin.png（28×38） | /shared/img/common/icon_pin.png | ティッカーの [HAMA] 前のピン（site.css、全ページ） |
| common_ft_frame_l.png / common_ft_frame_r.png（各100×65） | /shared/img/common/ft_frame_l.png、ft_frame_r.png | フッター左右下の枠装飾（site.css、全ページ） |
| top_news_item_1.png（148×174） | /shared/img/top/news_item_1.png | index の NEWS セクション装飾 |
| character_detail_bg_sp.png（750×2910） | /shared/img/character/detail_bg_sp.png | character ページの地背景（.page.chara、地色 #f0f0e2 と併用。公式 .wrapper と同じ組み合わせ） |
| character_device_btn_zoom_off_sp.png（135×125） | /shared/img/character/device_btn_zoom_off_sp.png | character のデバイスボタン ZOOM |
| character_device_btn_voice_off_sp.png（135×125） | /shared/img/character/device_btn_voice_off_sp.png | character のデバイスボタン VOICE |
| character_device_btn_movie_hidden_sp.png（135×125） | /shared/img/character/device_btn_movie_hidden_sp.png | character のデバイスボタン MOVIE（公式の「非表示」状態に合わせ hidden 版） |

### 取得済み・未使用（理由つき）

- デバイス枠一式（character_device_top.png / device_bottom.png / device_lcd.png / device_lcd_grid.png / device_lcd_light.png / device_shadow.png / device_shadow_sp.png、device_btn_* の on/off/hidden の残り、detail_bg.png PC版、localnav_bg_sp.png、subnav_hover.png）
  → 公式の固定レイアウト前提のパーツで、フロー型レイアウトの当サイトには構造を変えずに組み込めなかった。将来のデバイス枠再現用に保管。
- ロゴそのもの（common_hd_menu_logo.png、top_visual_logo.png、common_ft_logo.png、common_ft_title.png、common_ft_cap_text.sp.png、common_ft_item_1.png）
  → 「18TRIP」のタイトルロゴ自体のため、綾サイトの見た目には使わない。参照用に保管。
- 班・他キャラの名前入りナビ（character_hamanav_1〜5.png / _bg.png）
  → 他ユニット／他キャラのナビゲーション画像のため未使用。
- トップの装飾・背景（top_members_bg1.png / members_bg2.png、top_movie_bg.png / movie_bg_sp.png / movie_cover_sp.png / movie_play.png / movie_ticket1〜3_today.png、top_icon_arw.png、top_icon_open.png、top_icon_next.png / icon_prev.png、top_icon_autoplay_cr.png、top_news_item_2.png、common_icon_arw_black.png / top_icon_arw_black.png / top_icon_open_black.png、common_backtotop_icon.png / backtotop_text.png、common_icon_pagetop_black.png / icon_pagetop_white.png）
  → 当サイト側に対応する UI（MOVIE セクション、スライダー、ページトップボタン等）がまだ無い／絵柄そのものに近いため未使用。対応 UI を作る時に使う。

### 取得不可だったもの

- なし。フォント・画像とも全て直接取得できた（認証・hotlink 防止による取得不可は発生しなかった）。

## 3. 色の実測（site.css の CSS 変数を差し替え）

採取元：公式 https://18trip.jp/shared/css/top.css と /shared/css/character.css の出現頻度と使われ方。

| 変数・役割 | 旧（仮置き） | 実測値 | 根拠 |
|---|---|---|---|
| --ink（UIダーク） | #22303c | **#323232** | top.css 出現最多級（32回）。ローダー／ブラインドの基調色 |
| --text（本文色） | （--ink 兼用） | **#000** | 公式 body{color:#000} |
| --paper（ページ地） | #f7f4ec | **#fff** | 公式 body{background-color:#fff} |
| キャラページ地色（新規 --chara-bg） | — | **#f0f0e2** | character.css .wrapper の地色（detail_bg と併用） |
| --accent（メイン） | #2e7f9e（空色・仮） | **#c8ff46**（ライム） | ローダー地色、ナビ hover、backtotop ボタンの地色 |
| --accent2（サブ） | #d96f4e | **#ff8c78**（サーモンピンク） | ローダー／ブラインドの第2色 |
| ティッカー地名の色 | #ffd98a（直書き） | **#ffea00**（--yellow 新設） | top.css で25回出現する黄アクセント |
| --accent-text（リンク・小文字アクセント） | （--accent 兼用） | **#004986**（hover #5a8fba） | 公式 a:link / a:hover の色 |
| --line（グレー地） | #c9d4d8 | **#e8ebeb** | 公式グレー地。body 外側（PC両サイド）背景にも使用 |

使い方の調整：ライム #c8ff46 は公式でも「地色＋濃色文字」が基本のため、
タブの active 状態などは「ライム地＋#323232文字」に変更し、小さい文字のアクセントは
リンク色 #004986（--accent-text）に寄せた。

## 4. ついでに直したもの

- site.css のセレクタ typo（子孫セレクタのスペース欠落で効いていなかった箇所）を修正：
  `.site-header.logo`→`.site-header .logo`、`.site-header.logo small`、`.ticker.place`→`.ticker .place`、
  `.member-panel.catch`→`.member-panel .catch`、`.track-list.no`→`.track-list .no`、
  `.track-list.read`→`.track-list .read`（a も同様）。骨格版の意図どおりの見た目が効くようになった。

## 5. 残る再現ギャップ

- キャラ絵（card 1026×769／prof 1055×1042／visual 686×741／zoom 695×1500）は綾自身の素材待ち。現在はプレースホルダ表示のまま。
- デバイス枠の完全再現（device_top/bottom で挟む公式レイアウト）は、character.html では未実施（ボタン画像と背景のみ公式化済み）。※添レプリカ ten.html では実施済み（下記 §6）。
- トップのキービジュアル、MOVIE（チケット型）セクション、MEMBERS の背景演出は未実装（素材は取得済みのものあり）。
- ~~PC 表示時の両サイド装飾（公式 common/hd_items_*.png 等）は未取得・未実装~~ → 2026-11-09 のヘッダー／フッター格上げで取得・実装済み（下記 §7）。
- job-clarendon の公式での実際の使われどころ（おそらく特設系ページ）は未確認。

---

## 6. 叢雲添キャラページ レプリカ（ten.html、2026-11-09 追加）

方針変更：§2 では「他キャラのイラストは持ち込まない」としていたが、ユーザー本人の明示希望
（「添そのものを全く同じレイアウトで落とし込む」）により、添ページに限って公式キャラ画像・音声を
そのまま使うローカル再現とした。個人利用のみ、GitHub へは push しない。
出典ページ：https://18trip.jp/character/r1ze/ten-murakumo/
レイアウト数値は公式 character.css の実測値を assets/ten.css に転記（デバイス基準 1344×968、
ステージ aspect-ratio 1520/1080、visual 位置は detail--1__3 固有値 left:496px/top:160px 等）。

### 画像（assets/ten/、取得元は全て https://18trip.jp/shared/img/character/{ファイル名}）

| ファイル | 実寸 | 使用箇所 |
|---|---|---|
| c1_3_card.png / c1_3_card_sp.png | 1026×769 / 626×140 | デバイス内 card（PC/SP） |
| c1_3_prof.png / c1_3_prof_sp.png | 1055×1042 / 703×976 | デバイス内 prof（PC表示 528×521）。プロフィール文はこの画像に焼き込み |
| c1_3_visual.png / c1_3_visual_sp.png | 686×741 / 755×719 | デバイス内 visual（PC/SP） |
| c1_3_zoom.png | 695×1500 | ZOOM オーバーレイ |
| device_top_sp.png | 1048×1796 | SP版デバイス枠（PC版 top/bottom/lcd/grid/light は §2 の assets/official/ 既取得分を流用） |
| device_lcd_sp.png / device_lcd_grid_sp.png | 各 820×845 | SP版 LCD・グリッド |
| subnav/subnav_{1..5}_{1..5}.png（計24点、conductors は4点） | 201×185（表示103×94） | MEMBERサブナビ全班分。リンク先は各キャラの公式ページ |

### 音声（assets/ten/voice/）

| ファイル | 取得元 | 使用箇所 |
|---|---|---|
| 1_3.mp3（約9.5秒、64kbps/48kHz mono） | https://18trip.jp/shared/sound/1_3.mp3（公式 app.js の規則：VOICEボタン href="#1_3" → /shared/sound/1_3.mp3、音量80） | ten.html の VOICE ボタンで再生／再クリックで停止。is--playing 中は on 画像を表示（公式挙動の再現） |

### 本レプリカで流用した既取得アセット（assets/official/）

デバイス枠一式（device_top/bottom/lcd/lcd_grid/lcd_light/shadow/shadow_sp）、
ボタン全状態（zoom/voice/movie の on/off/hidden、PC・SP）、subnav_hover.png、
localnav_bg_sp.png、detail_bg.png / detail_bg_sp.png、hamanav_1〜5.png / _bg.png、
icon_arw_black.png（BACK/NEXT 矢印）。
→ §2 で「未使用・保管」だったデバイス枠一式は、ten.html で使用開始した。

### 残る差異（ten.html）

- 公式は GSAP による登場アニメーション（ブラインド、シャッフルテキスト、デバイスの拡縮イージング等）。
  本レプリカは拡縮のみ簡易計算で等価化し、アニメーションは未再現。
- 公式ヘッダー（サイドナビ＋ハンバーガーメニュー）と LINK セクション・フッターは公式のものを再現せず、
  当サイト共通のヘッダー／フッターに置き換えた（共通部品の流儀を優先）。
- 公式の floating な item 装飾（item_1〜17 のランダム配置アニメーション）は未再現。
- BACK/NEXT・サブナビ・HAMAWARDS のリンク先は公式サイトの該当ページ（外部リンク）とした。
- index.html の MEMBERS で添を選んだ際の遷移先は現状の公式リンクのまま未変更
  （ten.html への切替はユーザー判断待ち：提案として報告済み）。

---

## 7. ヘッダー／フッターのデザイン調査と格上げ（2026-11-09 追加）

ユーザーの所感「エイトリっぽいけどシンプルすぎる」を受けて、公式のヘッダー／フッターを
実測調査し、当サイトの共通部品（assets/site.css・site.js）を公式文法に寄せて書き換えた。
ten.html 本体には触れていない（共通部品の変更が波及する形）。

### 公式ヘッダーの実態（実測：18trip.jp トップ／キャラページ HTML＋top.css）

公式には「上部バー」が存在しない。ヘッダーは全画面オーバーレイ層で、常時見えるのは浮遊パーツだけ。

- **ハンバーガー**（.header__ham）：position:fixed、右上。PC 80×70px／SP 16vw×12vw（right:5.33vw）。
  線は 1px の2本（PC top:30px/40px、SP 4.8vw/6.67vw）、hover で scaleX(0.6)、
  開くと中央（PC top:35px）に寄って ±20deg の X。スクロールで .is--show が付いて右からスライドイン。
- **サイドナビ**（.header__sideNav、PCのみ・SP は display:none）：左下固定（left:70px／bottom:145px）、
  項目間 25px、18TRIPSansFunnyMedium 20px/30px。色は白（暗背景）／#282828（.color--black）。
  hover で文字が #c8ff46 になり、左からピン（icon_pin 14×19）がスライドして現れる。
  画面端に近づくと .is--limit で左へ退場する。
- **全画面メニュー**（.header__menu）：背景 .header__bg は #f0f0f0 の全面レイヤが
  右端起点 scaleX(0→1) のブラインド開閉（イージング cubic-bezier(.63,0,.33,1) .6s は全共通部品で共通）。
  - 背後に巨大な「MENU」ウォーターマーク：Funny、白、PC font-size:26.46vw／SP 40vw、pointer-events:none。
  - リンクは英字イラスト画像（hd_menu_*.png、原寸 537〜608px 幅）の**コラージュ配置**：
    中央ステージ 638×686px に8項目を絶対配置で散らす（left 0〜84px／top 0〜554px の不定ピッチ）。
  - 左下にカセットテープの英語ポエム（18TRIPSansMedium 10px を scale(0.8)、色 #323232）。
    SP は hd_menu_text_sp.png 画像に切替。右下にロゴ（hd_menu_logo 121×99、表示は小）。
    SP はロゴ中央（bottom:17.6vw、表示 12.8vw）＋ポエム画像を下部中央に。
  - 周囲に hd_items_1〜13 が浮遊：PC は % 配置で 10点表示（11〜13 は非表示）、SP は vw サイズで全13点。
    アニメーションは全点共通の2重構造（eff--vertical：上下±10px／eff--horizon：左右±5px＋回転±5deg、
    周期は点ごとに 4〜15s をずらす）。
- **ページトップ機アイコン**（.pagetop--icon）：左上固定（left:30px／top:30px）、81×66 の飛行機アイコン。
  黒／白の2枚重ねで背景の明暗により切替（.color--black）。左からスライドイン。
- ティッカーとの関係：フライト情報ティッカーはヘッダーではなくヒーロー（.visual）内の要素で、
  ヘッダーとは独立。ヒーロー肩には「✈✈✈ EIGHTEEN TRIP ✈✈✈」のタイトル行がある。

### 公式フッターの実態（実測：同上）

- 地色 **#efefef** の広い余白帯（.footer__inner は PC padding-top:262px／bottom:456px の
  絶対配置レイアウト、SP は padding-top:30.4vw／bottom:24vw の flex 配置）。
- **タイトルグラフィック**（ft_title.png 1784×182、SP 表示 91.73vw）を中央上部に大きく置く。
- **ロゴ＋作品情報 dl**：ft_logo 198×164。dl は IBM Plex Sans JP 12px／line-height:2em／
  letter-spacing:.05em／色 #323232、dt 幅 90px（タイトル／ジャンル／価格）。
  COPYRIGHT は 18TRIPSansMedium 12px。右にはポエム（10px/1.75em、SP は ft_cap_text.sp.png）。
- **フレーム**（.footer__frame）：上端左右に ft_frame_l/r（100×65、SP 13.33vw×8.67vw）が
  フッターの上へはみ出して乗り、左右には position:fixed の縦帯（33px／SP 4.4vw、地色 #efefef）。
  いずれも初期は画面外に退避し、フッター接近で .is--limit が付いてスライドインする。
- **ナビ**（.footer__nav）：最下部に白帯。PC は行高 60px、リンク間に 1px×14px の仕切り線、
  hover で #c8ff46。SP は幅 76.5% の2カラム折返し（各リンク左に仕切り、文字は scale(0.9)）。
- **浮遊アイテム**：ft_item_1（71×77）が1点だけ（PC left:84.74%／top:25.1%、SP left:81.73%／top:16.67vw）。
- **BACK TO TOP ボタン**（フッターではなく固定 UI）：ライム #c8ff46 の円、PC 200×200px
  （right:100px／bottom:50px）／SP 22.67vw（right:5.33vw／bottom:6.67vw）。
  文字リング（backtotop_text 163×163、SP は _sp 版 151×151）が rotation 15s linear 逆回転、
  中央の機アイコン（66×70）が rotationPlane 5s（80%静止→最後に-360deg）。
  スクロールで .is--show が付き右からスライドイン。hover でアイコン scale(1.4)。
- （参考）トップの LINK セクション：position:sticky、PC 高さ 540px／SP 160vw、白地。
  「LINK→」「←LINK」の 170px ライム文字（Funny）が上下に流れ、SNSカード
  （ロゴ約50〜151px＋カード画像 約290×230、SP 版あり）が絶対配置で散らばる。hover でカード scale(0.95)。

### 「シンプルすぎる」差の正体

当サイトの旧共通部品との差は、色やフォントではなく次の4点だった。
1. 公式は「バー型ヘッダー」を持たず、**浮遊する小パーツ＋全画面メニュー**で構成している
   （旧版は上部バー＋横並びテキストナビ＝通常の Web サイト文法だった）。
2. メニューのリンクが等間隔リストではなく**大きな英字のコラージュ配置**で、背後に巨大ウォーターマークがある。
3. フッターが「帯」ではなく **#efefef の広い余白面にタイトル字・情報 dl・白帯ナビを絶対配置**する構成で、
   フレーム装飾と浮遊アイテムがスクロール連動でスライドインする。
4. 全パーツに **fluffy（±10px／±5px＋±5deg、周期ずらし）の浮遊アニメーション**と
   共通イージング cubic-bezier(.63,0,.33,1) のスライドインが付いている。

### 新規取得アセット（assets/official/）

| ファイル | 取得元 | 実寸 | 使用箇所 |
|---|---|---|---|
| common_hd_items_1〜13.png（13点） | /shared/img/common/hd_items_{n}.png | 45×52／59×59／55×56／91×82／66×48／31×35／44×49／67×62／72×72／92×92／46×44／43×43／33×33 | メニューオーバーレイ内の浮遊アイテム（配置・周期は公式実測を転記） |
| common_backtotop_text_sp.png | /shared/img/common/backtotop_text_sp.png | 151×151 | BACK TO TOP ボタンの SP 用文字リング |

### 既取得アセットの新規使用開始

- common_icon_pagetop_black.png（81×66）：ヘッダーのロゴ横の機アイコンに使用（公式 .pagetop--icon 相当）。
- common_backtotop_text.png（163×163）／common_backtotop_icon.png（66×70）：BACK TO TOP ボタン。
- common_ft_item_1.png（71×77）：フッターの浮遊アイテム。
- common_ft_frame_l/r.png（100×65）：フッター上端コーナーとして、公式どおり「フッターの上に乗り、
  スライドインする」使い方に変更（旧版は左下・右下に小さく配置していた）。
- common_icon_pin.png：サイドナビ（広幅時）の hover ピンにも使用（従来はティッカーのみ）。

### 反映した変更（site.css／site.js）

- ヘッダー：バー＋下罫線を廃し、グラデーションで消える sticky オーバーレイ型に。
  ロゴに機アイコンを併置。.globalnav は通常非表示にし、1100px 以上では公式サイドナビ
  （左下・縦積み・Funny 20px・ピン hover）として表示。
- ハンバーガー（site.js 注入）：公式実測の2本線（1px、開くと ±20deg の X、hover scaleX(0.6)）。
- 全画面メニュー（site.js 注入）：#f0f0f0 ブラインド開閉、MENU ウォーターマーク
  （SP 40vw／PC 300px）、リンクのコラージュ配置（テキストで再構成、回転つき）、
  hd_items 13点の浮遊（配置%・vw・周期は公式実測転記。PC は公式どおり 11〜13 非表示）、
  下部のロゴと英字キャプション（ポエム文そのものは流用せず当サイトの文言に置換）。
- BACK TO TOP（site.js 注入）：ライム円＋回転リング＋機アイコン、スクロール 500px 超でスライドイン。
  サイズは当サイトのカラム幅に合わせ PC 120px／SP 22.67vw（公式 PC は 200px）。
- フッター：地色 #efefef 化、「AYA TRIP ✈✈✈」の白い巨大タイトル字（::before、テキストで再構成。
  公式 ft_title.png＝ロゴグラフィック自体のため不使用）、作品情報 dl（タイトル／ジャンル／公開範囲、
  実測の 12px・2em・dt 90px）、ft_item_1 の浮遊、コーナー＋左右帯の IntersectionObserver 連動
  スライドイン（.is--limit）、白帯ナビ（仕切り 1px×14px、PC 行高 60px）。
- サイト名・自サイト側の文言は維持。公式ロゴ画像（hd_menu_logo／ft_logo／ft_title）は不使用のまま。

### 残る差異

- メニューのリンクは公式では英字イラスト画像（hd_menu_*.png）だが、当サイトは
  18TRIPSansFunnyMedium のテキスト＋小見出しで再構成（画像化はしていない）。
- 公式ヘッダーのスライドインはスクロール位置連動の出し分け（.is--show／.is--limit の
  細かな出し入れ、サイドナビの色切替 .color--black）まで含むが、当サイトは
  ハンバーガー常時表示・サイドナビ常時表示で簡略化した。
- 公式フッターは絶対配置の大型レイアウト（PC で logo top:398px 等）だが、当サイトは
  カラム幅（最大 720px）に合わせてフロー型に圧縮しているため、余白の絶対量は公式より小さい。
- ポエム文（カセットテープの英字コピー）は公式の文章そのものを使わず、当サイトの短い英字キャプションに置換。
- LINK セクション（巨大 LINK 文字＋SNS カード散布）はトップページ本文側の要素のため今回未着手
  （実測値は上記に記録済み。index.html 側に LINK セクションを作る時に使える）。
- GSAP 相当の登場演出（ブラインド＋要素ごとの時差フェード）は、メニュー背景の scaleX と
  フェードで近似した範囲まで。

---

## 8. トップページ仕上げ（2026-11-09 追加、動線設計は site/FLOW.md）

FLOW.md で動線を設計した上で index.html を改修。index 固有のスタイルは
assets/index.css に閉じた（共通部品 site.css／site.js は無変更）。

### 既取得アセットの新規使用開始

- top_members_bg1.png / top_members_bg2.png：MEMBERS セクションの背景装飾層
  （選択中のキャラで背景色＋装飾が切り替わる演出。綾＝bg1、フィラー＝bg2、添＝減衰）。
- top_movie_bg.png / top_movie_bg_sp.png：MOVIE セクションの背景（opacity .5）。
- top_movie_play.png（460×460）：MOVIE チケットの再生アイコン（無効化チケット上では減衰表示）。
- ※チケット画像そのもの（top_movie_ticket1〜3_today.png、公式の絵柄）は使わず、
  チケットの「形」だけを index.css で自前再構成した（中身はダミー枠＋タイトル）。

### 実装内容と換算

- HERO：KV の器（aspect-ratio 4/3 の仮寸法＋ロゴ重ね＋主CTA→CHARACTER／副CTA→STORY）。
  KV 画像の差し替え口は .hero-img。
- LINK セクション：公式実測（sticky／PC 540px／SP 160vw／170px ライム Funny 文字＋
  カード散布／hover scale .95）を、中央カラム幅に合わせて縮小換算
  （高さ SP 78vh・PC 540px、文字は clamp 最大 120px）。カードはロゴ画像を使わず
  テキストで再構成し、本家公式窓口5件への外部リンクとした。
- MOVIE チケットは動画素材がないため無効化（aria-disabled、COMING SOON）。
  将来は外部動画リンク／埋め込みへ器ごと差し替え可能（FLOW.md §4）。
- フィラーの MEMBERS 導線は story.html への仮リンク（専用ページ character-filler.html は
  将来ページ。設計判断は FLOW.md §3）。

### 残る素材待ち（index 関係）

- キービジュアル画像（HERO の .hero-img 差し替え口）。
- MOVIE のサムネイル画像と動画本体（外部リンク先または埋め込み）。
- MEMBERS の各キャラ visual（パネル内 .ph-img の差し替え。character.html 側と共通の素材待ち）。
- 公式X のハンドル（@18trip_official と推定してリンク済み。未確認）。

---

## 9. GitHub project リポジトリ（test.html）からの綾画像の統合（2026-11-09 追加）

ユーザーの指摘「綾の character.html は git のやつ使えると思う」を受けて、
github.com/10-331/project の test.html 一式を精査した（作業コピー：
`~/workspace/creative/sasai-aya/git-project-ref/repo/`。git clone が重かったため
GitHub API + raw 取得で主要ファイルのみ回収）。

### Git版 test.html の実態

- 構造は公式保存HTMLそのまま：`shared/css/character.css`（公式CSSの保存版 120KB）+
  `style.css`（上書きは zoom モーダルと items--16 位置のみ）+ 公式JS一式（jQuery依存）。
  ローカル版 character.css は同じ公式CSSから実測転記したものなので、ジオメトリは同一系。
- 画像スロットは添の枠名 `c1_3_*` のまま流用され、中身はハイブリッドだった：
  - **PC版 card／prof／visual は添の公式画像そのもの**（md5 がローカル ten 資産と完全一致）。
    綾版は存在しない → ローカルへは**不採用**（入れると綾ページに添が出る）。
  - **SP版（`c1_3_*_sp.png`）は綾版に差し替え済み**。添の原版は `c1_3_*_sp-.png`
    （ダッシュ付き）として別名保存されていた（こちらがローカル ten 資産と md5 一致）。
  - **zoom（PCスロット）は綾の全身絵**（`assets/images/chars/aya-home.png` と同一ファイル、
    2743×3658 の原寸。公式キャンバス 695×1500 には整形されていない）。
  - Git版 SP card は JPEG データのまま .png 名だった（既知の残件どおり）。

### 統合したもの（site/assets/aya/）

| ローカルファイル | 取得元（Git版） | 実寸 | 使用箇所 |
|---|---|---|---|
| aya-prof-sp.png | shared/img/character/c1_3_prof_sp.png | 703×976 | character.html SP の prof（焼き込みシート：キャッチコピー／ITエンジニア／笹井綾／@fmm_tn_／紹介文／September,20・22・145cm） |
| aya-visual-sp.png | shared/img/character/c1_3_visual_sp.png | 755×719 | character.html の visual（SP は公式幅、PC は 686px 表示で流用） |
| aya-card-sp.png | shared/img/character/c1_3_card_sp.png（JPEG→真のPNGに変換） | 626×140 | character.html SP の card（カセットラベル部 AZ5402 AS092032） |
| aya-fullbody.png | assets/images/chars/aya-home.png（= Git版 zoom スロット） | 2743×3658 | 原本として保管 |
| aya-zoom.png | aya-fullbody.png から中央クロップ＋695×1500 に整形して生成 | 695×1500 | character.html の ZOOM オーバーレイ |

切替は character.css の SP メディアクエリ内で `.chara-wrap--aya` スコープに限定
（フィラー側のプレースホルダ表示には影響しない）。PC の prof は従来どおり
正本データの HTML 描画（Git版 SP シートの紹介文は旧稿寄りの文面のため、
PC では正本準拠の現行版を優先した）。

### 採用しなかったもの・判断待ち

- Git版 PC card／prof／visual（添の公式画像）→ 不採用（上記）。
  **綾の PC版 prof（1055×1042）と PC版 card（1026×769）は依然素材なし**。
  PC prof は HTML 描画、PC card はプレースホルダ継続。
- Git版のルート character.html（Home UI 系の別ページ。assets/css/character.css +
  assets/js/character.js、トーク／関係性／ビジュアルの独自UI）は、公式キャラページとは
  別系統の作りで、今回の character.html とは統合していない（素材置き場としては有効：
  立ち絵3点・表情差分・裏側一式が assets/images/chars/ にある）。
- `assets/images/chars/fill2.png` は aya-home-corrupt.png と同一ファイル（裏・綾の全身）。
  フィラー（🫧）ページへ入れるかは名前と内容の対応が曖昧なため判断待ちとし、未投入。
- Git版の公式JS一式（shared/js/app.js 等、jQuery依存）は不採用。
  ローカルは vanilla JS で zoom／voice／fit を等価実装済みのため。

## 10. GitHub project リポジトリ `aya/` への反映（2026-11-09）

- 2026-11-09、project リポジトリの `aya/` フォルダへ反映済み（ユーザー承認：サイトへのリンク自体は鍵垢でしか出していないため反映可、との判断）。
- 公開URL：https://10-331.github.io/project/aya/index.html
- 経路：ブランチ `add-aya-site` へのスナップショット push → PR → main へマージ。既存ファイル（test.html 等）は変更・削除していない。
- **反映できたのはテキストファイル16点のみ**：HTML 7（index／character／character-filler／ten／story／terms／event-camelia）、CSS 5（site／index／ten／character／fonts/plex-faces）、JS 1（site.js）、MD 3（ASSETS／DECISIONS／FLOW）。内部リンクは全て相対パスのため、`aya/` 配置でもページ間導線（index の MEMBERS、ten⇄character⇄character-filler の BACK/NEXT、assets 参照）は壊れないことを確認済み。
- **バイナリは 2026-11-09 に反映完了**：当初未反映だった508ファイル（woff2 378／woff 5（assets/fonts/）、png 124（assets/official／assets/ten／assets/aya）、mp3 1（assets/ten/voice/1_3.mp3））に、作業中に追加された `assets/map-bg.jpg` を加えた計509点を、GitHub PAT（カスタムコネクタ `custom.github-pat`）経由の Git Data API（blob → tree → commit → ref 更新、force なし）で main へ追加した（コミット `66ffca1`）。MCP 連携ツールがテキスト専用だったための迂回路で、手順は `~/workspace/custom-connectors/custom.github-pat/CONNECTOR.md` に記録。
- 同じタイミングで新規追加されていた `assets/story.css`（§11）も同経路で追加した（コミット `1e4363d`）。
- 検証：GitHub API の再帰ツリーで `aya/` 配下ファイル数を数え、ローカル `site/` の全526ファイルと完全一致（欠落0・余分0）を確認。GitHub Pages 上でも代表アセット（フォント woff2／ten の画像／音声 mp3 等）の URL が 200 を返すことを確認した。

## §11 ノベル一覧ステージ（2026-11-09 追加）

- `assets/map-bg.jpg`：ユーザーが提示したゲーム内地図背景のスクリーンショット（1170×541）をそのまま採用。下部のホームインジケーターが映り込んでいたため、下部7%をトリミングして 1170×503 とした（切り取ったのは帯状の余白部のみで、線画の主要部は保持）。
- `assets/story.css`：story.html の区長ノベル一覧ステージ（C-4 実測文法の再現）専用CSS。新規作成。
- 立ち絵は `assets/aya/aya-fullbody.png`（統合時に保管された全身絵原本）を使用。
- GitHub 側 `aya/` への反映は、テキスト（story.html／story.css）は通常経路、バイナリ（map-bg.jpg）は PAT 経由のバイナリ追加と合わせて行う想定。

## §12 ノベル一覧の独立ページ化（2026-11-09 追加）

ユーザーの方針「ゲーム風にするっていうので横にしたい」を受けて、§11 のステージを
story.html（縦基準・`.page` 最大720px）から切り離し、独立した横画面ページにした。

- `novel.html`（新規）：ノベル一覧ステージ単体のページ。共通ヘッダー／フッター／
  全画面メニュー（site.js の注入を含む）は付けず、ゲーム画面として完結させる。
  戻り導線はステージ上部バーの BACK（→ index.html）とホームアイコン。
- `assets/novel.css`（新規）：旧 story.css のステージ＋モーダル規則を移設し、
  横長ステージ前提で再調整したもの。
  - ステージ幅は `min(100vw, 100dvh × 1558/720)`、アスペクト 1558/720 固定の
    レターボックス収め。余白部は暗色（#26262e）。
  - フォントは site.css を読み込まず、plex-faces.css の @import と
    18TRIPSansMedium の @font-face を自前で持つ。
  - 旧 story.css にあった上部バーの `max-height:64px`（720px幅前提の頭打ち）は撤廃し、
    フル画面幅でも cqw 比例が効くようにした。
  - 旧 story.css の「スマホ縦持ち＝縦積みフォールバック」は廃止。
- 縦持ち時の扱い：縦積みにはせず、ステージを画面幅に合わせて相似縮小表示し、
  そのまま操作可能にする。その上で `orientation:portrait` のときだけ
  ステージ下に小さく「横向き推奨」の注記を出す（判断：ゲーム画面の比率を崩さない
  ことを優先し、注記は強制ではなく案内に留める）。
- story.html 側：SIDE-A のステージ実装・詳細モーダル・専用スクリプトを取り除き、
  地図背景サムネイル付きの導線バナー（→ novel.html）に置き換えた。
  SIDE-B（カメリア／サブストーリー枠）と SIDE タブ切替（site.js）は不変。
- `assets/story.css` は、どの HTML からも参照されなくなった旧版として残置する
  （並行して進行中の GitHub 反映フローとの整合のため、削除はしない）。
  現行の実装は novel.html ＋ novel.css。
- GitHub 側 `aya/` への反映は今回の対象外（別途進行中の反映フローで扱う）。

## §13 キャラページを公式保存HTML版（test.html）へ置き換え（2026-11-09 追加）

- 方針：ユーザーの評価（「キャラクター紹介とかハンバーガーメニューとか、むしろこっちの方が忠実でクオリティ高い」）を受け、`character.html` を project リポジトリの `test.html`（公式保存HTML＋公式CSS保存版＋公式JS一式）そのままの実装に置き換えた。
- 取り込み内容：リポジトリ `shared/` 全146ファイル（Git Data API で blob ハッシュ全件検証済み）を `site/shared/` に配置。`test.html` 本体は `site/character.html` に、`style.css`（上書きCSS）は `site/style.css` に配置。
- リポジトリ側に無く、CSS が参照している不足分を既存の公式アセット保管分から補完（いずれも公式から取得した同一ファイル）：
  - フォント8点（18TRIPSans Bold／Light／Regular の woff＋woff2、Medium.woff、Funny-Medium.woff）を `assets/fonts/` から `shared/fonts/` へ。
  - 画像6点（device_btn_movie_off／device_btn_voice_hidden（＋_sp）／device_btn_zoom_hidden（＋_sp）／common の icon_pin）を `assets/official/` から改名して `shared/img/` へ。
- 接続のための変更はゼロ：`test.html` 内のリンクは元々 `./index.html`（サイトTOP）と `./character.html`（自己）で、サイト内相対パスで完結していた。見た目・構造・ハンバーガーメニューの挙動は公式保存版のまま無変更。
- 残る既知の欠落は `shared/js/plugins/jquery-3.7.1.min.js` のみ（jQuery の CDN フォールバック用。リポジトリにも存在せず、公開中の test.html も同じ状態。本体は Google CDN から読むため表示には影響しない）。
- 画像スロットの現状：SP版（prof／visual／card）は綾版、zoom は綾の全身絵（2743×3658）。**PC版 card／prof／visual は添の公式画像のまま**（勝手に差し替えない方針）。
- VOICE ボタンはリポジトリ版時点で `href="#"` に無効化されており、音声再生は元々動作しない状態（公式JSは `/shared/sound/` の絶対パス前提）。
- 退避：従来の自作版は `character-legacy.html` に改名して残置（サイトの導線からは外れた。`assets/character.css` は legacy 用にそのまま保持）。
