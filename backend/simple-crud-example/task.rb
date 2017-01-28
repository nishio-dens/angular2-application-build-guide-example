require 'sqlite3'
require 'sinatra/activerecord'

ActiveRecord::Base.configurations = YAML.load_file('database.yml')
ActiveRecord::Base.establish_connection(:development)

class Task < ActiveRecord::Base
  # Validations
  validates :name, length: { maximum: 255 }, presence: true
  validates :description, length: { maximum: 255 }
end
