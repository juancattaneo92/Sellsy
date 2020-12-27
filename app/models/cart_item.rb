class CartItem < ApplicationRecord
  validates :user_id, :product_id, :quantity, presence: true

  belongs_to :users, 
  foreign_key: :user_id,
  class_name: :User

  belongs_to :products, 
  foreign_key: :product_id,
  class_name: :Product
end
