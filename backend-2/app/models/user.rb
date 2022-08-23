class User < ApplicationRecord
    has_many(
    :blogs,
    class_name: 'Blog',
    foreign_key: 'authorID',
    inverse_of: :user,
)

    has_secure_password
end

