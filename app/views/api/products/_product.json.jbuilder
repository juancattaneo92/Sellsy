json.extract! product, :id, :title, :description, :price, :category_id
json.photoUrls product.photos.map {|photo| url_for(photo)}