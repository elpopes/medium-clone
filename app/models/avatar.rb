# == Schema Information
#
# Table name: avatars
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :bigint           not null
#
# Indexes
#
#  index_avatars_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#
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
