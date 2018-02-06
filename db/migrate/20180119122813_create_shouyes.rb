class CreateShouyes < ActiveRecord::Migration
  def change
    create_table :shouyes do |t|

      t.timestamps null: false
    end
  end
end
