class DelblogController < ActionController::Base
    protect_from_forgery with: :null_session
    def del
        username=params[:username]
        id=params[:id]
        b=Blog.where("authorID":username , "id":id)
        b[0].destroy
    end
end
