class Api::SessionsController < ApplicationController

    #login
    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user.nil?
            render json: ['Invalid email/password'], status: 401
        else
            login(@user)
            render '/api/users/show'
        end
    end

    #logout
    def destroy
        if logged_in?
            logout!
            render json: {}
        else 
            render json: ["No current user"], status: 404
        end
    end
end
