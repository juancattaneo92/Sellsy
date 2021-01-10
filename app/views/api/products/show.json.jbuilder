
json.products do
  json.set! @product.id do 
    # json.extract! product.cart_items :quantity
    json.partial! '/api/products/product', product: @product
  end
end

