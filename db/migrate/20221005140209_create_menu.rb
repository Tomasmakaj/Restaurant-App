class CreateMenu < ActiveRecord::Migration[6.1]
  def change
    create_table :menus do |t|
      t.string :item_name
      t.integer :price
      t.string :image
      t.timestamps
    end
  end
end
