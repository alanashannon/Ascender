# json.partial! 'api/projects/project', project: @project

json.project do 
    json.extract! @project, :id, :title, :category_id, :author_id, :location, :description, :end_date, :campaign, :funding_goal, :amount_pledged, :risks, :updates, :faq

    json.author do 
        json.extract! @project.author, :id, :name, :biography, :location
    end
end

# projects.each do |project|
#     json.set! project.id do
#         json.extract! project, :id, :title, :category_id, :author_id, :location, :description, :end_date, :campaign, :funding_goal, :amount_pledged, :risks, :updates, :faq
#     end
# end