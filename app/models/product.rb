class Product < ApplicationRecord
  validates :title, :description, :price, presence: true 

  has_many :reviews,
  foreign_key: :product_id,
  class_name: :Review
  
  has_many :cart_items,
  foreign_key: :product_id,  
  class_name: :CartItem
  
  belongs_to :category,
  foreign_key: :category_id,
  class_name: :Category

  has_one_attached :main_photo
  has_many_attached :photos
  
end
