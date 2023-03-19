
class Comment < ApplicationRecord
    belongs_to :comment_author, class_name: 'User'
    belongs_to :story
  end
  