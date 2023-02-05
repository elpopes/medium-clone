class User < ApplicationRecord
    has_secure_password
    before_validation :ensure_session_token
    validates :username, 
    uniqueness: true, 
    length: { in: 3..20 }, 
    format: { without: URI::MailTo::EMAIL_REGEXP, message:  "can't be an email" }
    validates :email, 
    uniqueness: true, 
    format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :password_digest, presence: true
    validates :password, length: {minimum: 6, allow_nil: true}
    attr_reader :password

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
