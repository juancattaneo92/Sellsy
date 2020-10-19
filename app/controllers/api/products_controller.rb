class Api::ProductsController < ApplicationController
  before_action :require_logged_in, only:[:create]

  def index 
    @products = Product.all
    render :index
  end

  def show
    @product = Product.find(params[:id])
    render :show
  end 

  private
  def product_params
    params.require(:products).permit(:title, :description, :price)
  end 
end
