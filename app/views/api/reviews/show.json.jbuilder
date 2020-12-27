json.reviews do 
    json.set! @review.id do 
        json.partial! '/api/reviews/review', review: @review
        # json.extract! @review, :id, :body, :rating, :product_id, :user_id, :updated_at
        # json.user @review.user.f_name
        # json.product_id @review.product_id
    end
end


# json.set! @review.id do 
#     json.partial! 'api/reviews/review', review: @review
# end

# json.reviewers do 
#     json.set! @review.user_id do
#         json.partial! 'api/users/user', user: @review.user
#         # json.photoUrls @review.author.photos.map { |file| url_for(file) }
#     end
# end


