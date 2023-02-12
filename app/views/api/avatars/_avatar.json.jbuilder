json.extract! avatar, :id, :user_id
debugger

json.photoUrl avatar.photo.attached? ? rails_blob_path(avatar.photo, only_path: true) : nil
