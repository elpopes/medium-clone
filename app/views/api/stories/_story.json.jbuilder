json.extract! story, :id, :title, :body, :author_id, :author, :created_at, :updated_at
json.photoUrl story.photo.attached? ? url_for(story.photo) : nil
json.comments story.comments do |comment|
  json.partial! "api/comments/comment", comment: comment
end