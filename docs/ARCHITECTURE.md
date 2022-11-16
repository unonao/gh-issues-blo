# ARCHITECTURE

以下の流れでサイトがホストされる
1. Github Issues で削除・追加・編集を行う
2. GIthub Actions で issue の変更を検出し `.github/workflows/sync.yml` を元にビルドとGithub Pages でのホストがされる


