json.array! @avatars do |avatar|
    json.partial! 'api/avatars/avatar', avatar: avatar
end