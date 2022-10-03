class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :orders, :locations

end
