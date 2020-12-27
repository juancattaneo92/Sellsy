@reviews.each do |review|
    json.set! review.id do 
        # json.partial! '/api/reviews/review', review: @review
        json.extract! review, :id, :body, :rating, :product_id, :user_id, :updated_at
        json.user review.user.f_name
        # json.product_id @review.product_id
    end
end