class CreateOrder < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.string :item_name
      t.integer :user_id
      t.string :image
      t.integer :price
      t.boolean :checked_out
      t.timestamps
    end
  end
end
