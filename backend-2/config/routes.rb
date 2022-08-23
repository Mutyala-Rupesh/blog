Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  post "adduser" , to: "adduser#add" 
  
  put "adduser/:username" , to: "adduser#edituser"
  delete "adduser/:username" , to: "adduser#deleteuser"


  get "user/:username" , to: "user#show_user_info"
  get "user/bloglist/:username" , to: "user#showblogs"

  get "user/blogs/:username" , to: "user#showall"
  post "addblog/:username" , to: "addblog#add"
  put "editblog/:username/:id" , to: "editblog#edit"
  delete "delblog/:username/:id" , to:"delblog#del"

  get "show/:identifier", to: "show#extract"
  get "showall" , to: "show#all"
  get "shows/:blogid" , to: "show#blog_id"  

  resources :sessions, only: [:create]
  resources :registrations, only: [:create]
  delete :logout, to: "sessions#logout"
  get :logged_in, to: "sessions#logged_in" 
end
