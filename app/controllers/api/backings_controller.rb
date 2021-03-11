class Api::BackingsController < ApplicationController
    before_action :logged_in?, only: [:create, :update, :destroy]

    def index 
        @backings = Backing.all 
        render :index 
    end

    def create 
        @backing = Backing.new(backing_params)
        @project = Project.find_by(id: params[:backing][:project_id])

        if @backing.save
            @project.amount_pledged += @backing.backing_amount.to_i
            # render :show 
            render 'api/projects/show'
        else
            render json: @backing.errors.full_messages, status: 401
        end
    end

    def show 
        @backing = Backing.find(params[:id])
        render :show 
    end

    def destroy
        @backing = Backing.find(params[:id])
        if @backing.backer_id == current_user.id 
            @backing.destroy 
        else
            render json: @backing.errors.full_messages, status: 404
        end
    end

    def update 
        @backing = Backing.find(params[:id])
        if @backing.backer_id == current_user.id 
            @backing.update(backing_params)
            render :show 
        else
            render json: @backing.errors.full_messages, status: 404
        end
    end

    private 
    def backing_params
        params.require(:backing).permit(:backer_id, :backing_amount, :reward_id, :project_id)
    end
end
