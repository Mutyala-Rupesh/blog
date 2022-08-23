class UserController < ActionController::Base
    protect_from_forgery with: :null_session
    def show_user_info
        u=User.find(params[:username])
        user_info = {"username":u.username , "first_name":u.first_name , "last_name":u.last_name , "age":u.age , "email":u.email ,"description":u.description , "image":u.image}
        render :json => user_info
    end

    def showblogs
        k=params[:username]
        u=Blog.where(authorID: k)
        render :json => u
    end
end