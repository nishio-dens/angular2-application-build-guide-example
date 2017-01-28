require_relative '../task'

tasks = [
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

tasks.each do |t|
  Task.create(t)
end
