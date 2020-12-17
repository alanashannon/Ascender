# json.partial! 'api/projects/project', project: @project

#safe
json.project do 
    json.extract! @project, :id, :title, :category_id, :author_id, :location, :description, :end_date, :campaign, :funding_goal, :amount_pledged, :risks, :updates, :faq
    json.photo url_for(@project.photo) if @project.photo.attached?
end

json.rewards do 
    @project.rewards.each do |reward|
        json.set! reward.id do 
            json.extract! reward, :id, :project_id, :title, :description, :pledge_amount, :est_delivery, :ships_to
        end
    end
end

json.backings do 
    @project.backings.each do |backing|
        json.set! backing.id do 
            json.extract! backing, :id, :backer_id, :backing_amount, :reward_id, :project_id
        end
    end
end





