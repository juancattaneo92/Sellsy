# json.extract! @cart_item, :id, :user_id, :product_id, :product, :quantity 



json.extract! @cart_item, :id, :user_id, :quantity
json.product do 
    json.partial! "api/products/product", product: @cart_item.product
    json.photoUrl url_for(@cart_item.product.main_photo)
end
json.deleted false

