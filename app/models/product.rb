class Product < ApplicationRecord
  validates :title, :description, :price, presence: true 

  has_many :reviews
  has_one_attached :main_photo
  has_many_attached :photos

end
