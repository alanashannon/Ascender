projects.each do |project|
    json.set! project.id do
        json.extract! project, :id, :title, :category_id, :author_id, :location, :description, :end_date, :campaign, :funding_goal, :amount_pledged, :risks, :updates, :faq
    end

    # json.extract! project, :id, :title, :category_id, :author_id, :location, :description, :end_date, :campaign, :funding_goal, :amount_pledged, :risks, :updates, :faq

    #new
    # json.user do 
    #     json.extract! project.user, :id, :name, :location, :biography
    # end

    json.photo url_for(project.photo) if project.photo.attached?

    # json.author do 
    #     json.extract! @project.author, :id, :name, :biography, :location
    # end
end

