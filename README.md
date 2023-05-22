# my-nest-template-restapi

NestJS にてアプリケーションを立ち上げる際のテンプレートプロジェクト

## 主要コマンド

| コマンド | 内容                                     |
| -------- | ---------------------------------------- |
| build    | ビルド                                   |
| start    | アプリケーションの起動                   |
| dev      | ホットリロードを行うアプリケーション起動 |
| test     | Jest                                     |

## FEATURE

### API

- API 仕様は`REST API`を使用。

### ローカル環境のデータベースは Docker

- ローカル環境にて使用するデータベースは Docker を使用。
- データベースは`MySQL`

### 主要パッケージ

仮置きで下記のパッケージを使用。

- OR マッパー：[TypeORM](https://www.npmjs.com/package/typeorm)
- テスティングフレームワーク：[Jest](npm i jest)

## HOW TO USE

### 1 Docker コンテナの起動

`~/infrastructure`配下で`docker-compose up`を実行する。<br>
※ Docker コンテナ内のデータベースにアクセスする際には、`docker-compose exec db mysql -u user -pP_ssw0rd -h db`をコマンド実行する。

### 2 　 NestJS アプリケーションの起動

本リポジトリのルートディレクトリ配下で起動コマンドを実行する。（`npm run dev`など）
