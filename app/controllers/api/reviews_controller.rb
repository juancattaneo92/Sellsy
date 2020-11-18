class Api::ReviewsController < ApplicationController

    def index 
        if params[:product_id] == "all"
            @reviews = Review.all
        else
            @reviews = Review.where(product_id: params[:product_id])
        end
    end

    def show
        @review = Review.find(params[:id])
 
    end

    def create 
        @review = Review.create(review_params)
        @review.user_id = current_user.id
        if @review.save 
            render :show
            # redirect_to api_review_url(@review.id) 
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def update 
        @review = Review.find_by(id: params[:id])

        if @review.update(review_params)
            render partial: 'api/reviews/review', object: @review
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def destroy 
        @review = Review.find(params[:id])
        if @review.destroy
            render :destroy
        else
            render json: @review.errors.full_messages, status: 422
        end
    end


    private 

    def review_params 
        params.require(:review).permit(:body, :rating, :user_id, :product_id)
    end

end