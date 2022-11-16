# CONTRIBUTING

開発の前に、[ARCHITECTURE.md](./ARCHITECTURE.md) を読んで全体像を把握しておくと良い。

## ローカルホストでの起動

1. パッケージのインストール `npm install`
2. ローカルホストでの起動 `npm run dev`

## ローカル環境でリモートのページを表示させたい場合

`data` ディレクトリに、`data`ブランチの内容の`issues`をコピーすれば良い

```
# `data`ブランチから issues ディレクトリのコピー
git checkout origin/data issues

# data 配下にコピー
mv issues data/issues
```
