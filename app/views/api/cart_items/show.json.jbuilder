json.extract! @cart_item, :id, :user_id, :product_id, :quantity
json.extract! @cart_item.products, :id, :title, :price, :description, :category
json.main_photoUrl url_for(@cart_item.products.main_photo)
json.deleted false