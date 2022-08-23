class EditblogController < ActionController::Base
    protect_from_forgery with: :null_session
    def edit
        b=Blog.find(params[:id])
        title=params[:title]
        blog_d=params[:blog_d]
        short_des=params[:short_des]
        blog_image=params[:blog_image]
        b.update("title":title,"blog_d":blog_d , "short_des":short_des , "blog_image":blog_image)
        b.save
    end
end
