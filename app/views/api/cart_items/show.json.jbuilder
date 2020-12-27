# json.extract! @cart_item, :id, :user_id, :quantity, :product_id
# json.deleted false

# json.extract! @cart_item, :id, :user_id, :product_id, :product, :quantity 

# json.cart_items do 
#     json.set! @cart_item.id do 
#         json.partial! '/api/cart_items/cart_items', cart_item: @cart_item

#     end
# end


# json.extract! @cart_item, :product_id, :user_id, :quantity
# json.product do 
#     json.partial! "api/products/product", product: @cart_item.product
#     json.photoUrl url_for(@cart_item.product.main_photo)
# end
# json.deleted false



# json.products do 
#     @cart_items.each do |cart_item|
#         json.set! cart_item.product_id do 
#             json.partial! 'api/products/product', product: cart_item.product
#             # json.partial! '/api/products/product', product: @product
#             json.photoUrl url_for(@cart_item.product.main_photo)

#         end

#     end
# end


# @cart_items.each do |cart_item|
#     json.users do 
#         json.set! cart_item.product.user_id do
#             json.partial! 'api/users/user', user: cart_item.product.user
#             json.photoUrl url_for(@cart_item.product.main_photo)
#         end
#     end
# end

# json.cart_items do 
#   # debugger
#     @cart_items.each do |cart_item|
#         json.set! cart_item.id do 
#             json.partial! 'api/cart_items/cart_item', @cart_item: cart_item
#         end
#     end
# end
 
json.extract! @cart_item, :id, :user_id, :product_id, :quantity
json.deleted false