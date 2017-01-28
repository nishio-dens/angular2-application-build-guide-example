class Tasks < ActiveRecord::Migration[5.0]
  def change
    create_table :tasks do |t|
      t.string :name, null: false
      t.string :description
      t.datetime :created_at
      t.datetime :updated_at
    end
  end
end
