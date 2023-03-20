json.extract! @story, :id, :title, :body, :created_at, :updated_at

json.comments @story.comments do |comment|
  json.partial! 'comment', comment: comment
end
