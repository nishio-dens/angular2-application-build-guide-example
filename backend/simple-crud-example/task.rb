ActiveRecord::Base.configurations = YAML.load_file('database.yml')
ActiveRecord::Base.establish_connection('sqlite3:///db/crud.db')

class Task < ActiveRecord::Base
end
