class Project < ApplicationRecord
    validates :title, :description, :end_date, :campaign, :funding_goal, :amount_pledged, :risks, presence: true

    belongs_to :author, 
        foreign_key: :author_id, 
        class_name: :User

    
end
