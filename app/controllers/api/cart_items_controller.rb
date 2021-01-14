class Api::CartItemsController < ApplicationController

    def index 
        @cart_items = current_user.cart_items
        render :index
    end

    def show
        @cart_item = CartItem.find(params[:id])
    end


    def create
        
        # Query database, see if cart item already exists 
        # @cart_item = CartItem.create(cart_item_params)
        current_user.cart_items.each do |cartItem|
            # debugger
            if cartItem.product_id == (params[:cartItem][:product_id]).to_i
                cartItem.quantity += 1
                cartItem.save!
                @cart_item = cartItem
                render :show
                return
            end
        end
        @cart_item = CartItem.create(cart_item_params)
            if @cart_item.save!
                render :show
            else
                render :json ['Error'], status: 422
            end
    end
    
    def update
        # debugger

        @cart_item = CartItem.find(params[:id])
        if @cart_item.update(cart_item_params)
            render :show
        else 
            render json: @cart_item.errors.full_messages, status: 401
        end
    end
    
    def destroy
        @cart_item = CartItem.find(params[:id])
        @cart_item.destroy
        render :show
    end

    #     def destroy
    #     @cart_item = CartItem.find(params[:id])
    #     @cart_item.destroy 
    #     render :show
    # end

    # def destroy_all
    #     @cart_items = CartItem.where(cart_id: current_user.cart.id)
    #     @cart_items.destroy_all
    #     render :index
    # end

    private
    def cart_item_params
        params.require(:cartItem).permit(:id, :product_id, :user_id, :quantity)
    end
end