class User < ApplicationRecord
    belongs_to :location
    has_secure_password
end
