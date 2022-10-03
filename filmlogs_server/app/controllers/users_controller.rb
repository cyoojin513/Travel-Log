class UsersController < ApplicationController
  skip_before_action :authenticate_user, only: :create

  # GET '/users/:id'
  def show 
    #   user = User.find(params[:id])
      render json: current_user, status: :ok
  end 

  # POST '/users'
  def create
      user = User.create!(user_params)
      session[:user_id] = user.id
      render json: user, status: :ok
  end
  
  private 

  def user_params
      params.permit(:name, :email, :password)
  end 
  
end
