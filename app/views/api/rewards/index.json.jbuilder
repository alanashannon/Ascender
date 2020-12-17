@rewards each do |reward|
    json.set! reward.id do 
        json.extract! reward, :id, :project_id, :title, :description, :pledge_amount, :est_delivery, :ships_to
    end
end