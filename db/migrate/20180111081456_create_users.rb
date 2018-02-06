class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.string :phone
      t.string :password
      t.string :email
      t.string :flag

      t.timestamps null: false
    end
  end
end