class Api::SessionsController < ApplicationController

    #login
    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user.nil?
            render json: ['Invalid credentials'], status: 401
        else
            login!(@user)
            render 'api/users/show'
        end
    end

    #logout
    def destroy
        logout! if logged_in?
        render {} 
        if !current_user
            render json: ['No user!'], status: 404
        end
    end
end
