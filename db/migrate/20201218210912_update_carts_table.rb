class UpdateCartsTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :carts, :product_id, :quantity
  end
end
