json.reviews do 
    json.set! @review.id do 
        json.extract! @review, :id, :body, :rating, :product_id, :user_id, :updated_at
        json.user @review.user.f_name
    end
end


