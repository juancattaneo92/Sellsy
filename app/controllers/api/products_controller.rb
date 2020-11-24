class Api::ProductsController < ApplicationController
  before_action :require_logged_in, only:[:create]

  def index 
    @products = Product.all
    render :index
  end

  def show
    @product = Product.with_attached_photos.find(params[:id])
    render :show
  end 

  def search
    query=params[:query]
    
    @products = Product.where('title ILIKE ? OR description ILIKE ?', "%#{query}%","%#{query}%")

      if @products.length>0
          render :index
      else
          render json: ["Sorry, we couldn't find any results for #{query}","Try searching again"], status: 422 
      end
end

  private
  def product_params
    params.require(:products).permit(:title, :description, :price, :category_id, photos: [])
  end 
end
