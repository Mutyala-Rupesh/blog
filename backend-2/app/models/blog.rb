class Blog < ApplicationRecord
    belongs_to(
    :user,
    class_name: 'User',
    foreign_key: 'authorID',
)
end