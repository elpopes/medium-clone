json.extract! story, :id, :title, :body, :author_id, :created_at, :updated_at
json.photoUrl story.photo.attached? ? url_for(story.photo) : nil