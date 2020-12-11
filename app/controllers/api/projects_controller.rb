class Api::ProjectsController < ApplicationController

    before_action :require_logged_in, only: [:create, :update, :destroy]

    def index
    end

    def show
    end

    def create
    end

    def update
    end

    def destroy
    end

    private

    def project_params 
        params.require(:project).permit(:title, :description, :location, :category_id, :author_id, :end_date, :campaign, :funding_goal, :amount_pledged, :risks, :updates, :faq)
    end
    
end
