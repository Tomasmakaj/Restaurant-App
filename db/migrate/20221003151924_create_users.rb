class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password
      t.string :orders
      t.belongs_to :location
      

      t.timestamps
    end
  end
end
