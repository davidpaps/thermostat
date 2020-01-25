require 'sinatra/base'
require 'json'

class App < Sinatra::Base
  
  enable :sessions

  get '/' do
    erb :index
  end

  post '/temperature' do
    session[:temperature] = params[:temperature]

  end

  get '/temperature' do
    
  end


  run! if app_file == $0

end