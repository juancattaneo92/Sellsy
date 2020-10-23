@products.each do |product|
  json.set! product.id do
    json.partial! 'product', product: product
    json.main_photoUrl url_for(product.main_photo)
    json.photoUrl product.photos.map {|photo| url_for(photo)}
  end
end
