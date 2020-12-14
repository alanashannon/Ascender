class Api::ProjectsController < ApplicationController

    before_action :logged_in?, only: [:create, :update, :destroy]

    def index
        @projects = Project.all 
        render :index 
    end

    def show
        @project = Project.find(params[:id])
        render :show 
    end

    def create
        @project = Project.new(project_params)
        @project.author_id = current_user.id 

        if @project.save
            render :show 
        else
            render json: @project.errors.full_messages, status: 401
        end
    end

    def update
        @project = Project.find(params[:id])
        if @project.update(project_params) && current_user.id 
            render :show 
        else
            render json: @project.errors.full_messages, status: 404
        end
    end

    def destroy
        @project = Project.find(params[:id])
        if @project.author_id == current_user.id 
            @project.destroy 
        else
            render json: @project.errors.full_messages, status: 404
        end
    end

    private

    def project_params 
        params.require(:project).permit(:title, :description, :location, :category_id, :author_id, :end_date, :campaign, :funding_goal, :amount_pledged, :risks, :updates, :faq)
    end
    
end
