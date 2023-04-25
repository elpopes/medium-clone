json.stories @stories do |story|
    json.partial! 'api/stories/story', story: story
  end