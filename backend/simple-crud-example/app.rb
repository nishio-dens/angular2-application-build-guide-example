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
    Task.all.to_json
  end

  get '/api/tasks/:id' do
    Task.find(params[:id]).to_json
  end

  post '/api/tasks' do
    task_attributes = JSON.parse(request.body.read)

    if Task.create(task_attributes)
      { }.to_json
    else
      status 422
      { 'errors': 'something wrong' }
    end
  end

  put '/api/tasks/:id' do
    task_attributes = JSON.parse(request.body.read)
    task = Task.find(params[:id])

    if Task.update(task_attributes)
      { }.to_json
    else
      status 422
      { 'errors': 'something wrong' }
    end
  end

  delete '/api/tasks/:id' do
    Task.find(params[:id]).destroy

    {}.to_json
  end
end
