# json.extract! @user, :id, :name, :email, :location, :biography

@users.each do |user|
    json.set! user.id do 
        json.extract! user, :id, :name, :email, :location, :biography 
    end
end