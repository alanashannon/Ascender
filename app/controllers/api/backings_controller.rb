class Api::BackingsController < ApplicationController

    def index 
        @backings = Backing.all 
    end

    def create 
        @backing = Backing.new(backing_params)
        @project = Project.find_by(id: params[:backing][:project_id])
        
        if @backing.save
            render :show 
        else
            render json: @backing.errors.full_messages, status: 401
        end
    end

    private 
    def backing_params
        params.require(:backing).permit(:backer_id, :backing_amount, :reward_id, :project_id)
    end
end
