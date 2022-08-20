class AdduserController < ActionController::Base
    protect_from_forgery with: :null_session
    def add
        username=params[:username]
        age=params[:age]
        first_name=params[:first_name]
        email=params[:email]
        password=params[:password]
        description=params[:description]
        (User.new("username":username,"age":age,"first_name":first_name,"email":email,"password":password,"description":description)).save
    end
end
