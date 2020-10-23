json.reviews do 
    json.set! @review.id do 
        json.extract! @review, :id, :body, :rating, :product_id, :user_id
        json.user @review.user.f_name
    end
end