
json.extract! avatar, :id, :user_id

json.photoUrl avatar.photo.attached? ? url_for(avatar.photo) : nil