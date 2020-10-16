class AddNullConstraintsToName < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :name 
    add_column :users, :f_name, :string, null:false
  end
end
