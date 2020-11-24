json.extract! product, :id, :title, :description, :price, :cart_id, :category_id
json.photoUrls product.photos.map {|photo| url_for(photo)}