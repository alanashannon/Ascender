class User < ApplicationRecord
    validates :name, :password_digest, presence: true
    validates :email, :session_token, presence: true, uniqueness: true
    validates :password, length: { minimum: 6, allow_nil: true}
    validates_format_of :email,:with => /\A[^@\s]+@([^@\s]+\.)+[^@\s]+\z/

    attr_reader :password 

    has_many :projects, 
        primary_key: :id, 
        foreign_key: :author_id, 
        class_name: :Project 

    has_many :backings, 
        foreign_key: :backer_id, 
        class_name: :Backing 

    has_many :projects_backed, 
        through: :backings, 
        source: :project 

    before_validation :ensure_session_token
    
    #SPIRE methods
    def self.find_by_credentials(email, password) 
        user = User.find_by(email: email)
        if user && user.is_password?(password)
            user 
        else
            nil 
        end
    end

    def password=(password)
        @password = password 
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

end
