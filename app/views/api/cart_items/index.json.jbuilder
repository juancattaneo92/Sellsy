@cart_items.each do |cart_item| 
    json.set! cart_item.id do 
        json.extract! cart_item.products, :id, :title, :price, :description
        json.main_photoUrl url_for(cart_item.products.main_photo)
        json.extract! cart_item, :quantity, :product_id, :user_id
        json.deleted false
    end
end  
    
