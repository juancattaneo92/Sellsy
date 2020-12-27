class UpdateCartTables < ActiveRecord::Migration[5.2]
  def change
    add_column :cart_items, :user_id, :integer
    add_index :cart_items, :user_id 
    drop_table :carts
  end
end
