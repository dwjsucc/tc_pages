class CreateQinmisets < ActiveRecord::Migration
  def change
    create_table :qinmisets do |t|

      t.timestamps null: false
    end
  end
end
