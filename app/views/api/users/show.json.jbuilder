json.extract! @user, :id, :name, :email, :location, :biography

# json.projects do 
#     user.projects.each do |project|
#         json.set! project.id do 
#             json.extract! project, :id, :title 
#             if project.photo.attached?
#                 json.photo url_for(project.photo)
#             end
#         end
#     end
# end
# json.partial! "api/users/user", user: @user 