# Home UI Prototype

スマートフォン向けホーム画面UIのプロトタイプ。見せ方は 18TRIP（エイトリ）のUIを参考にしており、再現・検証のための素材も含む。

- 公開URL: https://10-331.github.io/project/

## 構成

- ルートのHTML ― 各画面（index、character、clips、gallery、memory、play、preset、profile、schedule、story）
- `assets/` ― このサイト用の素材（css／js／images）
- `shared/` ― 共通素材に加えて、**18TRIPに寄せるための参照・再現素材**（18TRIPSansフォント、公式風UI素材、公式ページの保存ソースなど）。本番素材と混ざって見えるが、参照用として保管しているもの
- `test.html` ― キャラクター詳細画面の試作ページ

## 編集ルール

- 変更はブランチを切ってPRで main に取り込む（これまでの運用どおり）
- マージ済みの作業ブランチは削除してよい（内容は main に残る）
- コミットメッセージは変更内容が分かる書き方にする
- ブランチ命名の目安：機能追加は `feat/`、見た目の調整は `tune/`
