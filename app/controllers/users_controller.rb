class UsersController < ApplicationController
  def index
    user = User.find_for_authentication(email: params[:username])
    @user = user.valid_password?('Riqwan1!') ? user : nil

    render json: { user: @user, success: !!@user }
  end

  def login
    @user = User.find_for_database_authentication(email: params[:username])

    if @user && @user.valid_password?(params[:password])
      sign_in @user
      render json: @user, status: :created
    else
      render text: "invalid email or password", status: :unprocessable_entity
    end
  end

  def logout
    sign_out :user
    render json: {}, status: :accepted
  end

  def logged_in_user
    if current_user
      render :json => current_user
    else
      render :json => { :error => "Not logged in" }
    end
  end

  def show
    render :json => User.find(params[:id])
  end
end
