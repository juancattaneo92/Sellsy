class Api::UsersController < ApplicationController
  
  def create
    @user = User.new(user_params)
    # debugger
    if @user.save!
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(user_params)
    render :show
  end

  private
  def user_params
    params.require(:user).permit(:email, :f_name, :password)
  end

end
