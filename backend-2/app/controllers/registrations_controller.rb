class RegistrationsController < ApplicationController
    def create
        username=params[:username]
        age=params[:age]
        first_name=params[:first_name]
        email=params[:email]
        password=params[:password]
        description=params[:description]
        image=params[:image]
        user=User.create("username":username,"age":age,"first_name":first_name,"email":email,"password":password,"description":description,"image":image)
        
        if user
            session[:user_id]=user.username
            render json: {status: :created,username: user}
        # else
        #     render json: {status: :invalid}
        end
    end
end