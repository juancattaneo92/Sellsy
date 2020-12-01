class Api::CartItemsController < ApplicationController
# before_action :require_logged_in, only:[:index, :destroy, :create]

    def index
        # return nil if !current_user
        # if params[:user_id]
        @cart_items = current_user.cart_items
        render :index
    end

    #   def show
    #     @cart_item = Cart.find(params[:id])
 
    # end

    def create
        @cart_item = Cart.new(cart_items_params)
        @cart_item.user_id = current_user.id
        if @cart_item.save!
            render :show
        else
            render json: @cart_item.errors.full_messages, status: 422
        end
    end

    def update
        @cart_item = Cart.find(params[:id])
        if @cart_item.update(cart_items_params)
            render :show
        else
            render json: @cart_item.errors.full_messages, status: 422
        end
    end

    def destroy
        @cart_item = Cart.find(params[:id])
        # if 
          @cart_item.destroy
            render :show
        # else
        #     render json: @cart_item_item.errors.full_messages, status: 401
        # end 
    end

    private
    def cart_items_params
        params.require(:cartItem).permit(:user_id, :product_id, :quantity)
    end

end
