class SessionsController < ApplicationController
    def create
      @user = User.find_by(email: params[:user][:email])
      if @user&.authenticate(params[:user][:password])
        token = encode_token({ user_id: @user.id })
        render json: { user: @user, token: token }, status: :ok
      else
        render json: { errors: ['Invalid email or password'] }, status: :unauthorized
      end
    end
  
    private
  
    def encode_token(payload)
      JWT.encode(payload, Rails.application.secrets.secret_key_base)
    end
  end
  