if Rails.env=="production"
    Rails.application.config.session_store :cookie_store , key:"_authentication_app", domain: "where rails hosted put the link"
else
    Rails.application.config.session_store :cookie_store , key:"_authentication_app"
end
