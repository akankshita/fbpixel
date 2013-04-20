class UsersController < ApplicationController
  def index
    
  end
  def create
   # render :text => params.inspect and return false
    @authentication = User.find_by_uid(params['uid'])
    if @authentication
      #render :text => 'in' and return false
      session[:user] = @authentication
      render :text => 's' and return false
    else
      
      @user = User.new
      @user.uid = params['uid']
      @user.token = params['token']
      if @user.save
        session[:user] = @user
        render :text => 's' and return false
      end      
    end
  end
end
