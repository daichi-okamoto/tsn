# 高森スポーツネットワーク Web サイト

地域スポーツ活動を紹介するための静的 Web サイトです。GitHub Pages などの静的ホスティング環境で公開できるように作成しており、CSS は FLOCSS 設計に基づいて整理しています。
WordPressに移行予定です

## 目次
- [高森スポーツネットワーク Web サイト](#高森スポーツネットワーク-web-サイト)
  - [目次](#目次)
  - [構成概要](#構成概要)
  - [CSS 設計ポリシー](#css-設計ポリシー)
    - [ファイルレイヤー](#ファイルレイヤー)
    - [クラス命名](#クラス命名)
  - [開発の流れ](#開発の流れ)
  - [GitHub Pages への公開](#github-pages-への公開)
  - [カスタマイズのヒント](#カスタマイズのヒント)

## 構成概要

```
tsn/
├── index.html
├── assets/
│   ├── css/
│   │   ├── foundation/
│   │   │   ├── _reset.css
│   │   │   ├── _variables.css
│   │   │   └── _base.css
│   │   ├── layout/
│   │   │   └── _layout.css
│   │   └── object/
│   │       ├── component/
│   │       │   ├── _base.css
│   │       │   └── _header.css
│   │       └── project/
│   │           └── _home.css
│   ├── images/
│   └── js/
│       └── main.js
└── README.md
```

HTML は 1 ファイル構成（`index.html`）ですが、CSS と画像、JavaScript を `assets/` 以下に整理しています。`assets/js/main.js` ではハンバーガーメニューの開閉を制御しています。

## CSS 設計ポリシー

このプロジェクトは FLOCSS（Foundation / Layout / Object / Component / Project / Utility）をベースにした構成です。用途に応じて CSS ファイルとクラスを分けています。

### ファイルレイヤー

- **Foundation (`assets/css/foundation/`)**
  - `_reset.css`: ブラウザ差異を吸収するリセット。
  - `_variables.css`: カラーパレットや余白などのカスタムプロパティ。
  - `_base.css`: `html`, `body`, 共通リンクなどのベーススタイル。
- **Layout (`assets/css/layout/_layout.css`)**
  - ページ全体の骨組み（ヘッダー・フッターの配置など）。
- **Object / Component (`assets/css/object/component/`)**
  - `_base.css`: ボタン、セクションヘッダーなど汎用コンポーネント。
  - `_header.css`: ブランドロゴやグローバルナビのスタイル。
- **Object / Project (`assets/css/object/project/_home.css`)**
  - TOP ページ固有のセクション（ヒーロー、活動紹介など）。

### クラス命名

- `l-` : レイアウト要素（例: `.l-header`, `.l-main`）。
- `c-` : 再利用可能なコンポーネント（例: `.c-section-header`, `.c-button`）。
- `p-` : このページ固有のパーツ（例: `.p-hero`, `.p-member-table`）。
  - プロジェクトディレクトリ内のファイルに合わせて `p-` 接頭辞を使用し、`c-` と混同しないようにしています。

クラスは BEM に似た `__` 区切りでブロック・エレメントを区別しています。状態変化が必要な場合は `is-` プレフィックスを追加する方針です（例: モバイルナビ展開時の `is-active`）。

## 開発の流れ

1. リポジトリをクローンまたは ZIP で取得します。
2. 任意の静的サーバーで `index.html` を開く、またはブラウザで直接ファイルを開くだけで表示できます。
3. CSS を編集するときは該当レイヤーのファイルを更新してください。新しいコンポーネントを追加する場合は `object/component` にファイルを足し、ページ固有の調整は `object/project` に追加すると管理しやすくなります。

## GitHub Pages への公開

1. GitHub に公開リポジトリを作成し、ローカルの変更をコミットして `main` ブランチへ push します。
2. GitHub のリポジトリページ → **Settings** → **Pages** を開きます。
3. *Source* を `Deploy from a branch`、*Branch* を `main`、フォルダを `/ (root)` に設定して保存します。
4. 数十秒～数分で `https://<ユーザー名>.github.io/<リポジトリ名>/` が有効になります。

## カスタマイズのヒント

- **複数ページ化**: 新しいページを追加する場合は、`object/project` に `_about.css` のようなファイルを追加し、該当ページの `<head>` で読み込みます。各ページが共通で使うコンポーネントは `object/component` に寄せてください。
- **色や余白の調整**: `_variables.css` のカスタムプロパティを変更するだけでサイト全体のトーンを統一して変えられます。
- **モバイルメニュー**: `assets/js/main.js` の `toggle`/`closeNav` を利用しています。UI を変更する場合は `c-global-nav` および `p-*` クラスと合わせて調整してください。
- **画像差し替え**: `assets/images/` 以下のファイルを置き換えれば対応可能です。ファイル名を変更した場合は `index.html` と `p-` CSS の `url()` を更新してください。

バグ報告や改善提案は issue または pull request で歓迎します。
