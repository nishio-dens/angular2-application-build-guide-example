require 'sinatra'
require 'sinatra/base'
require 'sinatra/json'
require 'sinatra/reloader'
require 'json'

require './task'

class App < Sinatra::Base
  before do
    content_type 'application/json'
  end

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
    task = Task.new(task_attributes)

    if task.save
      { }.to_json
    else
      status 422
      { 'errors': task.errors }.to_json
    end
  end

  put '/api/tasks/:id' do
    task_attributes = JSON.parse(request.body.read)
    task = Task.find(params[:id])

    if Task.update(task_attributes)
      { }.to_json
    else
      status 422
      { 'errors': task.errors }.to_json
    end
  end

  delete '/api/tasks/:id' do
    Task.find(params[:id]).destroy

    {}.to_json
  end
end
