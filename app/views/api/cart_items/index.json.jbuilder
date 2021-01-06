
    @cart_items.each do |cart_item| 
        json.set! cart_item.id do 
            json.user_id cart_item.user_id
            json.extract! cart_item.products, :id, :title, :price, :description
            json.main_photoUrl url_for(cart_item.products.main_photo)
            json.extract! cart_item, :quantity
            # json.extract! @cart_item, :id, :user_id, :product_id, :quantity
            json.deleted false
        end
    end  
    
# json.products do
#     @cart_items.each do |cart_item|  
#         json.set! cart_item.product_id do 
#             # json.partial! "api/products/product", product: cart_item.product 
#         end
#     end  
# end

# @cart_items.each do |cart_item| 
#     json.set! cart_item.id do 
#         json.extract! cart_item, :id, :user_id, :quantity
#         json.product do 
#             json.partial! "api/products/product", product: cart_item.product
#             json.photoUrls url_for(cart_item.product.photo)
#             # json.photoUrl product.photos.map {|photo| url_for(photo)}
#             # json.photoUrls product.photos.map {|photo| url_for(cart_item.product.photos)}
#             # json.main_photoUrl url_for(product.main_photo)
#              end
#              json.deleted false
#     end
# end  

# json.array! @cart_items do |cart_item|
#   json.partial! "api/cart_items/cart_item", cart_item: cart_item
# end


