# simple-crud-example

Simpleなタスク管理システムのバックエンドです。

## Requirement

- ruby 2.x.x
- bundler
- sqlite

## Setup

```
bundle install # install gemfiles
bundle exec rake db:create db:migrate # setup database
```

## Start

```
bundle exec shotgun

# 起動後に http://localhost:9393/ にアクセスしてください。
```

## API

### [GET] /api/tasks

タスク一覧を取得します。

```
{
  tickets: [
    {
      id: 1,
      name: 'Angular2アプリケーションの入門書を書く',
      description: '入門書を書きます',
      created_at: '2017-01-01T00:00:00',
      updated_at: '2017-01-01T00:00:00'
    },
    {
      id: 2,
      name: 'CRUDのサンプルアプリを作成する',
      description: 'とてもシンプルなサンプルアプリを書きます',
      created_at: '2017-01-01T00:00:00',
      updated_at: '2017-01-01T00:00:00'
    }
  ]
}
```

### [GET] /api/tasks/{id}

指定したタスクの詳細情報を取得します。

```
{
  id: 2,
  name: 'CRUDのサンプルアプリを作成する',
  description: 'とてもシンプルなサンプルアプリを書きます',
  created_at: '2017-01-01T00:00:00',
  updated_at: '2017-01-01T00:00:00'
}
```

### [POST] /api/tasks/

指定したタスクを新規に作成します。

```
{
  name: 'CRUDのサンプルアプリを作成する',
  description: 'とてもシンプルなサンプルアプリを書きます'
}
```

### [PUT] /api/tasks/{id}

指定したタスクを更新します。

```
{
  name: 'CRUDのサンプルアプリを作成する',
  description: 'とてもシンプルなサンプルアプリを書きます'
}
```

### [DELETE] /api/tasks/{id}

指定したタスクを削除します。
