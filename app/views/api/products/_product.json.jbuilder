json.extract! product, :id, :title, :description, :price, :category_id
# json.extract! product.cart_items :quantity
json.photoUrls product.photos.map {|photo| url_for(photo)}