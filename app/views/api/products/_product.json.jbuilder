json.extract! product, :id, :title, :category, :description, :price
json.photoUrls product.photos.map {|photo| url_for(photo)}