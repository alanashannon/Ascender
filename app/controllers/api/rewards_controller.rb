class Api::RewardsController < ApplicationController
    before_action :logged_in?, only: [:create, :update, :destroy]

    def index
        @rewards = Reward.all
        render :index 
        # @rewards = where(project_id: params[:project_id])
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

    def show
        @reward = Reward.find(params[:id])
        render :show
    end

    def destroy 
        @reward = Reward.find(params[:id])
        # if @reward.author == current_user.id 
            @reward.destroy 
        # else
        #     render json: @reward.errors.full_messages, status: 404
        # end
    end

    def update 
        @reward = Reward.find(params[:id])
        # if @reward.author == current_user.id 
            @reward.update(reward_params)
            render :show 
        # else
        #     render json: @reward.errors.full_messages, status: 404
        # end
    end

    private
    def reward_params
        params.require(:reward).permit(:project_id, :title, :description, :pledge_amount, :est_delivery, :ships_to)
    end
end
