class Api::AvatarsController < ApplicationController
    def index
        @avatars = Post.all.sort { |a,b| b.created_at <=> a.created_at }
    end
end