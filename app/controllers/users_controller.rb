class UsersController < ApplicationController
  before_action :authenticate_user!, only: [:show]

  def login
    @user = User.find_for_database_authentication(email: user_params[:username])

    if @user && @user.valid_password?(user_params[:password])
      sign_in @user
      render json: @user, status: :created
    else
      render text: 'invalid email or password', status: :unprocessable_entity
    end
  end

  def logout
    sign_out :user
    render json: {}, status: :accepted
  end

  def user_logged_in
    hash = current_user || { error: 'Not logged in' }

    render json: hash
  end

  def show
    @user =  User.find(params[:id])

    if current_user.id == @user.id
      render json: @user
    else
      render json: { message: 'Unable to process this request' }
    end
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
