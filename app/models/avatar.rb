class Avatar < ApplicationRecord
  belongs_to :user
  has_one_attached :photo

  
  def photo_url
    photo.attached? ? photo.service_url : nil
  end
  
end
