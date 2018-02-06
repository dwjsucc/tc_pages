class CreateCommons < ActiveRecord::Migration
  def change
    create_table :commons do |t|

      t.timestamps null: false
    end
  end
end
