json.reward do 
    json.extract! @reward, :id, :title, :description, :est_delivery, :pledge_amount, :project_id, :ships_to
end

# json.author do 
#     json.partial! '/api/rewards/reward', user: @reward.author 
# end