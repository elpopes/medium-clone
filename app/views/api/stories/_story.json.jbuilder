json.extract! story, :id, :title, :body, :author_id, :created_at, :updated_at
if story.photo.attached?
  json.photoUrl url_for(story.photo)
end
