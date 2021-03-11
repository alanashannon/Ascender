json.backing do 
    json.extract! @backing, :id, :backer_id, :backing_amount, :project_id, :reward_id
end