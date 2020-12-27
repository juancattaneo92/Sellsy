class Api::CartItemsController < ApplicationController
    

    def index 
        @cart_items = current_user.cart_items
        render :index
    end

    def show
        @cart_item = CartItem.find(params[:id])
    end


        def create
        # debugger
        @cart_item = CartItem.create(cart_item_params)
        # @cart_item.user_id = current_user.id
        if @cart_item.save!
            # redirect_to api_cart_items_url(@cart_item.id) 
            render :show
        else
            render :json ['Error'], status: 422
        end
    end
    
    def update
        @cart_item = CartItem.find(params[:id])
        if @cart_item.update(cart_item_params)
            # @cart_items = CartItem.where(cart_id: current_user.cart.id)
            render :index
        else 
            render json: @cart_item.errors.full_messages, status: 401
        end
    end
    
    def destroy
        @cart_item = CartItem.find(params[:id])
        @cart_item.destroy
        render :show
    end

        def destroy
        @cart_item = CartItem.find(params[:id])
        @cart_item.destroy 
        render :show
    end

    # def destroy_all
    #     @cart_items = CartItem.where(cart_id: current_user.cart.id)
    #     @cart_items.destroy_all
    #     render :index
    # end

    private
    def cart_item_params
        params.require(:cartItem).permit(:product_id, :user_id, :quantity)
    end
end