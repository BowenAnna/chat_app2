class UsersController < ApplicationController

  def index
    if params[:search].present?
      @users = User.where("username LIKE ? OR email LIKE ?", "%#{params[:search]}%", "%#{params[:search]}%")
    else
      @users = User.all
    end

    render json: @users
  end

  def show
    @user = User.find_by!(username: params.fetch(:username))
  end

  def create
      @user = User.new(user_params)
      if @user.save
        render json: @user, status: :created
      else
        render json: @user.errors, status: :unprocessable_entity
      end
    end

    private

    def user_params
      params.require(:user).permit(:name, :email, :username, :password, :password_confirmation)
    end
  end
