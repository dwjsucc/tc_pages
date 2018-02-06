class CreateRegist1s < ActiveRecord::Migration
  def change
    create_table :regist_1s do |t|

      t.timestamps null: false
    end
  end
end
