class Product < ApplicationRecord
  validates :title, :description, :price, presence: true 

  has_many :reviews

end
