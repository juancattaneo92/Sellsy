class Cart < ApplicationRecord
  validates :user_id, :product_id, :quantity, presence: true
   
  belongs_to :product,
  foreign_key: :product_id,
  class_name: :Product

  belongs_to :user,
  foreign_key: :user_id,
  class_name: :User

  # has_many :products,
  # through: :product,
  # source: 

end
