class Project < ApplicationRecord
    validates :title, :description, :end_date, :campaign, :funding_goal, :amount_pledged, :risks, presence: true
    # add validation/association later for category id
    belongs_to :author, 
        primary_key: :id,
        foreign_key: :author_id, 
        class_name: :User

    
end
