class EditblogController < ActionController::Base
    protect_from_forgery with: :null_session
    def edit
        b=Blog.find(params[:id])
        title=params[:title]
        blog_d=params[:blog_d]
        b.update("title":title,"blog_d":blog_d)
        b.save
    end
end
