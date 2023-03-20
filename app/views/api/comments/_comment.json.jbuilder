json.extract! comment, :id, :body, :title, :created_at, :updated_at
json.comment_author do
  json.extract! comment.comment_author, :id, :username
end