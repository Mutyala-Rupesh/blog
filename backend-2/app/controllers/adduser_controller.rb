class AdduserController < ActionController::Base
    protect_from_forgery with: :null_session
    def add
        username=params[:username]
        age=params[:age]
        first_name=params[:first_name]
        email=params[:email]
        password=params[:password]
        description=params[:description]
        image=params[:image]
        (User.new("username":username,"age":age,"first_name":first_name,"email":email,"password":password,"description":description , 'image':image)).save
    end

    def edituser
        description=params[:description]
        image=params[:image]
        age=params[:age]
        username=params[:username]
        u=User.find(username)
        u.update("description":description , "image":image ,"age":age)
        u.save
    end

    def deleteuser
        username=params[:username]
        # u=User.find(username)
        # u.destroy
        b=Blog.where("authorID":username)
        for i in b do
            i.destroy
        end
    end
end
