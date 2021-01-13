json.extract! product, :id, :title, :category, :description, :price
# json.extract! product.cart_items :quantity
json.photoUrls product.photos.map {|photo| url_for(photo)}