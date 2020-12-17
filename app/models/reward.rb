class Reward < ApplicationRecord
    validates :title, :description, :pledge_amount, presence: true 

    has_many :backings, 
        foreign_key: :reward_id, 
        class_name: :Backing 

    belongs_to :project, 
        foreign_key: :project_id, 
        class_name: :Project

    has_many :receivers, 
        through: :backings, 
        source: :backer 

    has_one :author, 
        through: :project, 
        source: :author 
end
