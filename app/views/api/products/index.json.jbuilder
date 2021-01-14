@products.each do |product|
  json.set! product.id do
    json.partial! 'product', product: product
      if product.main_photo.attached?
        json.main_photoUrl url_for(product.main_photo)
      else
        json.main_photoUrl ""
      end 
      json.photoUrl product.photos.map {|photo| url_for(photo)}
  end
end
