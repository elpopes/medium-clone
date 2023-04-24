# == Schema Information
#
# Table name: stories
#
#  id         :bigint           not null, primary key
#  body       :text             not null
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  author_id  :bigint           not null
#
# Indexes
#
#  index_stories_on_author_id  (author_id)
#  index_stories_on_title      (title)
#
# Foreign Keys
#
#  fk_rails_...  (author_id => users.id)
#
class Story < ApplicationRecord
include PgSearch::Model
    pg_search_scope :search, against: [:title, :body],
        using: {
            tsearch: {prefix: true}
        }
    validates :body, presence: true
    validates :title, presence: true
  
    belongs_to :author, class_name: :User
    has_one_attached :photo
    has_many :comments, dependent: :destroy
  end
