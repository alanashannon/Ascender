json.reward do 
    json.extract! @reward, :id, :title, :description, :est_delivery, :pledge_amount, :project_id, :ships_to
end