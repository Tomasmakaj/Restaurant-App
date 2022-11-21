class UsersController < ApplicationController

  # GET /users
  def index
    @users = User.all
    render json: @users
  end

  # GET /users/1
  def show
    render json: 
@test_user_mani

  end

  # POST /users
  def create
    user = User.create!(username:params[:username], password: params[:password], location_id: params[:location_id])
    token = encode(user.id)
    render json: {user: user, token: token}
  end

  # PATCH/PUT /users/1
  def update
    token = request.headers['token']
    user_id = decode(token)
    # p token
    # p user_id
    # p 'testing'
    user = User.find_by!(id: user_id)
    if user
      user.update(user_params)
      render json: user, status: :accepted
    else
      render json: { error: "Update not accepted :(" }, status: :not_found
    end
    # render json: user
  end

  # DELETE /users/1
  def destroy
    token = request.headers['token']
    user_id = decode(token)
    user = User.find_by!(id: user_id)
    user.destroy
  end
  
  # LOGIN
    def login
      user = User.find_by!(username: params[:username]).try(:authenticate, params[:password])
      if user
        token = encode(user.id)
        render json: {user: user, token: token}
      else
        render json: { error: 'Wrong Password'}
      end
      # render json: user
    end

    # get profile
    def profile
      token = request.headers['token']
      user_id =   decode(token)
      user = User.find(user_id)
      render json: user
    end

  private
  # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end
    # Only allow a list of trusted parameters through.
    def user_params
      params.permit(:username, :password_digest, :location_id)
    end

end