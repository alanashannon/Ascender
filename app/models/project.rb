class Project < ApplicationRecord
    validates :title, :category_id, :description, :end_date, :campaign, :funding_goal, :amount_pledged, :risks, presence: true

    belongs_to :author, 
        primary_key: :id,
        foreign_key: :author_id, 
        class_name: :User

    has_many :backings, 
        foreign_key: :project_id, 
        class_name: :Backing 

    has_many :rewards, 
        foreign_key: :project_id, 
        class_name: :Reward 

    belongs_to :category, 
        foreign_key: :category_id, 
        class_name: :Category 

    has_one_attached :photo

    def self.change_date(string) # "2020-12-14"
        Date.new((string[0..3]).to_i, (string[5..6]).to_i, (string[8..9]).to_i)
    end

end
