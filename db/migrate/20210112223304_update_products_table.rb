class UpdateProductsTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :products, :category_id
    add_column :products, :category, :string
    add_index :products, :category
  end
end
