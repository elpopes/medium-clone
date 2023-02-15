class Story < ApplicationRecord
    validates :body, presence: true
    validates :title, presence: true
  
    belongs_to :author, class_name: :User
    has_one_attached :photo
  end
