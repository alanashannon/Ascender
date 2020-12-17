class Backing < ApplicationRecord
    validates :backing_amount, presence: true 

    belongs_to :backer, 
        foreign_key: :backer_id, 
        class_name: :User 

    belongs_to :reward, 
        foreign_key: :reward_id, 
        class_name: :Reward 

    belongs_to :project, 
        foreign_key: :project_id, 
        class_name: :Project 
end
