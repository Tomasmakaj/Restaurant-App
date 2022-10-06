class OrdersController < ApplicationController

  # GET /orders
  def index
    @orders = Order.all

    render json: @orders
  end

  # GET /orders/1
  def show
    render json: @order
  end

  # POST /orders
  # def CHECKOUT_ORDER
  # # MUST CHANGE AFTER CHECKOUT IS DONE 
  # # TAKE IN AN ARRAY OF ORDERS 
  # # 
  # end

  def save_order
    token = request.headers['token']
    user_id = decode(token)
    user = User.find(user_id)
    order = Order.create!(item_name:params[:item_name,price:params[:price],image:params[:image],user_id:user.id, checked_out: false)
    render json: order
  end
def my_active_orders
  token = request.headers['token']
  user_id = decode(token)
  user = User.find(user_id)
  render json:{ orders:user.orders.where(checked_out: false)}
end
  # PATCH/PUT /orders/1
  def update
    if @order.update(order_params)
      render json: @order
    else
      render json: @order.errors, status: :unprocessable_entity
    end
  end

  # DELETE /orders/1
  def destroy
    @order.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_order
      @order = Order.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def order_params
      params.fetch(:order, {})
    end
end
