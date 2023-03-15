json.check! @users do |user|
    json.extract! user, :id, :username, :email, :created_at
    if user.avatar
      json.avatar do
        json.extract! user.avatar, :id, :user_id
        if user.avatar.photo.attached?
          json.photoUrl rails_blob_path(user.avatar.photo, only_path: true)
        else
          json.photoUrl nil
        end
      end
    end
  end