class Api::RewardsController < ApplicationController

    def index
        @rewards = Reward.all
    end

    def create
        @reward = Reward.new(reward_params)
        @project = Project.find_by(id: params[:reward][:project_id])

        if @reward.save
            render 'api/projects/show'
        else
            render json: @reward.errors.full_messages, status: 401 
        end
    end

    private
    def reward_params
        params.require(:reward).permit(:project_id, :title, :description, :pledge_amount, :est_delivery, :ships_to)
    end
end
