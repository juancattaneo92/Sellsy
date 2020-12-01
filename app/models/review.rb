class Review < ApplicationRecord
  validates :body, :rating, presence: true
  validates :rating, inclusion: { in: (1..5) }

  belongs_to :products,
  foreign_key: :product_id,
  class_name: :Product

  belongs_to :user,
  foreign_key: :user_id,
  class_name: :User
end
