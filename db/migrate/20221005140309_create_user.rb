class CreateUser < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :orders
      t.integer :location_id

      t.timestamps
    end
  end
end
