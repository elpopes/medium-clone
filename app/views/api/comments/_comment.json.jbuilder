json.extract! comment, :id, :body, :title, :created_at, :updated_at
json.comment_author do
  json.extract! comment.comment_author, :id, :username
end
json.story do
  json.extract! comment.story, :id, :title
end