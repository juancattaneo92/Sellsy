class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.integer :price, null: false
      t.integer :cart_id, null: false

      t.timestamps
    end
    add_index :products, :cart_id
    add_index :products, :title, unique: true
  end
end
