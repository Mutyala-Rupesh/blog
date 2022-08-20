class AddblogController < ActionController::Base
    protect_from_forgery with: :null_session
    def add
        username=params[:username]
        title=params[:title]
        blog_d=params[:blog_d]
        (Blog.new("authorID":username,"title":title,"blog_d":blog_d)).save
    end
end
