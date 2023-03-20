# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  bio             :text
#  email           :string           not null
#  f_name          :string           not null
#  l_name          :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  username        :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
# Indexes
#
#  index_users_on_email          (email) UNIQUE
#  index_users_on_session_token  (session_token) UNIQUE
#  index_users_on_username       (username) UNIQUE
#
class User < ApplicationRecord
    has_secure_password
    before_validation :ensure_session_token
    validates :username, 
    uniqueness: true, 
    length: { in: 3..20 }, 
    format: { without: URI::MailTo::EMAIL_REGEXP, message:  "can't be an email" }
    validates :email, 
    uniqueness: true
    # format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :password_digest, presence: true
    validates :password, length: {minimum: 6, allow_nil: true}
    attr_reader :password
    validates :l_name, :f_name, presence: true

    has_one :avatar
    has_many :stories
    has_many :comments


    def self.find_by_credentials(credential, password)

        field = credential =~ URI::MailTo::EMAIL_REGEXP ? :email : :username
        user = User.find_by(field => credential)
        user&.authenticate(password)
      end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    # def password=(password)
    #     @password = password
    #     self.password_digest = BCrypt::Password.create(password)
    # end

    def reset_session_token!
        self.session_token = generate_unique_session_token
        self.save!
        self.session_token
    end

    def generate_unique_session_token
        session_token = SecureRandom::urlsafe_base64
    end

    def ensure_session_token
        self.session_token ||= generate_unique_session_token
    end

end
