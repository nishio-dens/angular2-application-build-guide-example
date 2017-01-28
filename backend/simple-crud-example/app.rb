require 'sinatra'
require 'sinatra/base'
require 'sinatra/reloader'
require 'json'

require './task'

class App < Sinatra::Base
  get '/' do
    { 'System': 'All Green' }.to_json
  end

  get '/api/tasks' do
    {
      id: 1,
      name: 'test'
    }.to_json
  end
end
