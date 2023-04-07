# == Schema Information
#
# Table name: comments
#
#  id                :bigint           not null, primary key
#  body              :text
#  title             :string
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  comment_author_id :bigint           not null
#  story_id          :bigint           not null
#
# Indexes
#
#  index_comments_on_comment_author_id  (comment_author_id)
#  index_comments_on_story_id           (story_id)
#
# Foreign Keys
#
#  fk_rails_...  (comment_author_id => users.id)
#  fk_rails_...  (story_id => stories.id)
#
class Comment < ApplicationRecord
    validates :body, presence: true
    validates :title, presence: true
  
    belongs_to :comment_author, class_name: 'User'
    belongs_to :story
end
