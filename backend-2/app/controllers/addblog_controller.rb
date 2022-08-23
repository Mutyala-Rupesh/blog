class AddblogController < ActionController::Base
    protect_from_forgery with: :null_session
    def add
        username=params[:username]
        short_des=params[:short_des]
        title=params[:title]
        blog_d=params[:blog_d]
        blog_image=params[:blog_image]
        (Blog.new("authorID":username,"title":title,"blog_d":blog_d , "short_des":short_des, "blog_image":blog_image)).save
    end
end
