class UsersController < ApplicationController
  def create
    user = User.find_for_authentication(email: 'guy@gmail.com')
    @user = user.valid_password?('Riqwan1!') ? user : nil

    render json: { user: @user, success: !!@user }
  end
end
