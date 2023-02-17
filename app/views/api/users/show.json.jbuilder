# json.user do
    json.extract! @user, :id, :username, :email, :created_at
    if @user.avatar
      json.avatar do
        json.extract! @user.avatar, :id, :user_id
        json.photoUrl rails_blob_path(@user.avatar.photo) if @user.avatar.photo.attached?
      end
    end
#   end