class Project < ApplicationRecord
    validates :title, :description, :end_date, :campaign, :funding_goal, :amount_pledged, :risks, presence: true
    #TODO add validation/association later for category id

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

    has_one_attached :photo

    def self.change_date(string) # "2020-12-14"
        Date.new((string[0..3]).to_i, (string[5..6]).to_i, (string[8..9]).to_i)
    end

end
