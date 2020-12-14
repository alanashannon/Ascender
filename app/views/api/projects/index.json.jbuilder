json.partial! 'api/projects/project', projects: @projects

# json.projects do 
#     @projects.each do |project|
#         json.set! project.id do 
#             json.extract! project, :id, :title, :campaign, :amount_pledged, :funding_goal, :location, :end_date
#             json.author do 
#                 json.extract! project.author, :id, :name, :biography, :location
#             end
#         end
#     end
# end