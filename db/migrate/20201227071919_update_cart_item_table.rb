class UpdateCartItemTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :products, :cart_id
    drop_table :cart_items
  end
end
