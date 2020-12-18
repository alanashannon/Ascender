class Api::RewardsController < ApplicationController
    before_action :logged_in?, only: [:create]

    def index
        @rewards = Reward.all
    end

    def create
        @reward = Reward.new(reward_params)
        @project = Project.find_by(id: params[:reward][:project_id])
        @reward.project_id = @reward.project_id.to_i 
        @reward.pledge_amount = @reward.pledge_amount.to_i 

        if @reward.save
            render :show
        else
            render json: @reward.errors.full_messages, status: 401 
        end
    end

    private
    def reward_params
        params.require(:reward).permit(:project_id, :title, :description, :pledge_amount, :est_delivery, :ships_to)
    end
end
