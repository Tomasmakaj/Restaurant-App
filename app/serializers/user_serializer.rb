class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :location, :active_orders
  def active_orders 
    active_order_array = []
    object.orders.collect do |order|
      if !order.checked_out
        active_order_array << order
      end
    end
    active_order_array
  end
end

