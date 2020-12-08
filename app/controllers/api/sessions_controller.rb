class Api::SessionsController < ApplicationController

    #login
    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user.nil?
            render json: ['Invalid credentials'], status: 401
        else
            debugger
            login(@user)
            render '/api/users/show'
        end
    end

    #logout
    def destroy
        debugger
        if logged_in?
            logout!
            render json: {}
        else 
            render json: ["No current user"], status: 404
        end
    end
end
