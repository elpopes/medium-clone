class Avatar < ApplicationRecord
  belongs_to :user
  has_one_attached :photo
  before_validation :generate_default_pic



  def photo_url
    photo.attached? ? photo.service_url : nil
  end

  def generate_default_pic
    unless self.photo.attached?
        file = URI.open('https://medium-earth-seeds.s3.amazonaws.com/users/default.png')
    end
  end
  
end
