class User < ApplicationRecord
    belongs_to :location
    has_many :orders
    has_secure_password
end
