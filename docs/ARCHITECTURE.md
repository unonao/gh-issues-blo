# ARCHITECTURE

## 使用技術・サービス

- Github issues, Github Actions, Github Pages
- フロントエンド
  - Next.js
  - MUI v5

## ビルド

以下の流れでサイトがホストされる

1. Github Issues で削除・追加・編集を行う
2. GIthub Actions で issue の変更を検出し `.github/workflows/sync.yml` を元にビルドと Github Pages でのホストがされる
   - issues の変更を検出して、`data`ブランチの`issues`フォルダ内に内容をファイルとして保存
   - npm のインストールとビルド
   - actions-gh-pages により Github Pages でホスト

もしくは

1. main ブランチが更新される
2. GIthub Actions で `.github/workflows/publish.yml` を元にビルドと Github Pages でのホストがされる
