Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
      origins '*'
      resource '*', headers: :any, methods: [:get, :post, :put, :delete, :options, :head] 
    end
    # allow do
    #   origins "adddeployment link" #depending on the host where react runs
    #   resource "*" , headers: :any, methods: [:get, :post, :put, :delete, :head], credintials:true
    # end
  end