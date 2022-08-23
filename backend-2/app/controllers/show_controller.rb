class ShowController < ActionController::Base
    protect_from_forgery with: :null_session
    def extract
        identifier=params[:identifier]
        k=Blog.all.where("lower(title) LIKE :search", search: "%#{identifier}%" )
        render :json => k
    end

    def all
        all_blog=Blog.all
        render :json => all_blog
    end

    def blog_id
        b=Blog.find(params[:blogid])
        u=User.find(b.authorID)
        k={"title":b.title , "blog_d":b.blog_d , "author":u.first_name , "short_des":b.short_des , "blog_image":b.blog_image}
        render :json => k
    end
end
