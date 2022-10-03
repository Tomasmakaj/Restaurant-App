class User < ApplicationRecord
    belongs_to :location
    has_many :orders
end
