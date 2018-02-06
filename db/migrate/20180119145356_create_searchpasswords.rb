class CreateSearchpasswords < ActiveRecord::Migration
  def change
    create_table :searchpasswords do |t|

      t.timestamps null: false
    end
  end
end
