# CADDIES 要件定義書

- [CADDIES 要件定義書](#caddies-要件定義書)
  - [1. システム概要](#1-システム概要)
    - [1.1 目的](#11-目的)
    - [1.2 主要機能の概観](#12-主要機能の概観)
    - [1.3 想定ユースケース](#13-想定ユースケース)
  - [2. 機能要件](#2-機能要件)
    - [2.1 ユーザー管理機能](#21-ユーザー管理機能)
      - [認証・認可要件](#認証認可要件)
      - [認証情報要件](#認証情報要件)
      - [プロフィール管理要件](#プロフィール管理要件)
    - [2.2 チャットインターフェース要件](#22-チャットインターフェース要件)
      - [メッセージング要件](#メッセージング要件)
      - [UI/UX要件](#uiux要件)
    - [2.3 ドキュメント管理要件](#23-ドキュメント管理要件)
      - [生成要件](#生成要件)
      - [更新・管理要件](#更新管理要件)
  - [3. AIペルソナ要件](#3-aiペルソナ要件)
    - [3.1 対話型ペルソナ](#31-対話型ペルソナ)
      - [批判分析ペルソナ](#批判分析ペルソナ)
      - [発展的思考ペルソナ](#発展的思考ペルソナ)
      - [質問提起ペルソナ](#質問提起ペルソナ)
      - [まとめ役ペルソナ](#まとめ役ペルソナ)
      - [実務視点ペルソナ](#実務視点ペルソナ)
      - [創造的発想ペルソナ](#創造的発想ペルソナ)
      - [調整役ペルソナ](#調整役ペルソナ)
      - [体系化ペルソナ](#体系化ペルソナ)
    - [3.2 システム制御要件](#32-システム制御要件)
      - [対話進行管理](#対話進行管理)
      - [ドキュメント管理](#ドキュメント管理)
  - [4. 非機能要件](#4-非機能要件)
    - [4.1 パフォーマンス要件](#41-パフォーマンス要件)
    - [4.2 セキュリティ要件](#42-セキュリティ要件)
    - [4.3 可用性要件](#43-可用性要件)
    - [4.4 保守性要件](#44-保守性要件)


## 1. システム概要

### 1.1 目的
複数のAIペルソナとユーザーがブラウザ上でグループチャット形式の対話を行い、アイデアの整理や文書作成を支援する。

### 1.2 主要機能の概観
- 役割が異なる複数のペルソナ同士による会話でアイデアを発展させる
- 進行エージェントによって発言タイミングの管理を行う
- 書紀エージェントによってリアルタイムに議事録や文書を生成・履歴管理する

### 1.3 想定ユースケース
- アイデア出しセッションの実施
- 企画書・報告書の作成

## 2. 機能要件

### 2.1 ユーザー管理機能

#### 認証・認可要件

- ローカル開発環境
  - モックユーザーによる簡易認証
  - 固定のテストユーザー情報を使用
- 本番環境
  - Oauth2.0による認証
  - 少なくともMicrosoft EntraIDをIDプロバイダーとして使用可能とする

#### 認証情報要件

- ユーザー識別情報
  - ユーザーID
  - 表示名
  - メールアドレス
  - 所属ロール

#### プロフィール管理要件
- ユーザー情報の管理
  - ユーザーID
  - パスワード
  - プロフィール情報
- 設定カスタマイズ
- 利用履歴の管理

### 2.2 チャットインターフェース要件
#### メッセージング要件
- テキストメッセージの送受信
- メンション機能
  - メンション入力支援（`@`入力時にユーザー名の候補表示）
  - 視覚的強調表示
  - メンション履歴管理
- メッセージ履歴の保持

#### UI/UX要件
- 直感的な操作性
- ペルソナの識別表示
  - アイコン表示
  - 名前表示
  - ロール表示
- レスポンシブデザイン

### 2.3 ドキュメント管理要件
#### 生成要件
- 自動議事録生成
- 重要ポイントの抽出
- 構造化されたドキュメント作成

#### 更新・管理要件
- リアルタイム更新
- バージョン管理
- 履歴追跡

## 3. AIペルソナ要件

### 3.1 対話型ペルソナ
#### 批判分析ペルソナ
- 提案やアイデアの潜在的な問題点の指摘
- リスク分析と具体的な懸念事項の提示
- 既存の類似事例からの課題提起
- 反論や代替案の論理的な提示

#### 発展的思考ペルソナ
- アイデアの発展可能性の具体的な提示
- 提案のメリットの強調と具体例の提示
- 実現方法の具体的な提案
- 関連する発展的なアイデアの提案

#### 質問提起ペルソナ
- 未検討の観点からの質問提示
- 具体例を求める質問の投げかけ
- 前提条件の確認質問
- 議論を深めるための本質的な問いかけ

#### まとめ役ペルソナ
- 議論の要点の簡潔な整理
- 合意点・相違点の明確化
- 次の議論ポイントの具体的な提案
- 決定事項と保留事項の区分け

#### 実務視点ペルソナ
- コストと時間の観点からの具体的な指摘
- 実現可能性の現実的な検討
- 運用面での具体的な課題提起
- 必要なリソースの具体的な提示

#### 創造的発想ペルソナ
- 異分野からの類推による新しい提案
- 既存アイデアの創造的な組み合わせ
- 革新的な解決アプローチの提案
- 従来の枠組みにとらわれない発想の提示

#### 調整役ペルソナ
- 対立する意見の共通点の抽出
- 建設的な妥協案の提示
- 議論の建設的な方向付け
- 感情的な対立の緩和

#### 体系化ペルソナ
- 議論内容の構造的な整理
- 論点のカテゴリー分類
- 全体像の俯瞰的な提示
- 議論の階層構造の整理

### 3.2 システム制御要件
#### 対話進行管理
- 発言順序の制御
- 議論の方向性管理
- タイミング制御

#### ドキュメント管理
- 更新タイミングの判断
- 内容の整合性確保
- バージョン管理方針

## 4. 非機能要件

### 4.1 パフォーマンス要件
- 応答時間：1秒以内
- 同時接続数：100以上
- メッセージ処理能力：10メッセージ/秒以上

### 4.2 セキュリティ要件
- データ暗号化
- アクセス制御
- 通信セキュリティ

### 4.3 可用性要件
- サービス稼働率：99.9%以上
- バックアップ体制
- 障害復旧計画

### 4.4 保守性要件
- モジュール化
- 拡張性確保
- 監視体制
