class OrderSerializer < ActiveModel::Serializer
  attributes :id, :order_item, :user

end
