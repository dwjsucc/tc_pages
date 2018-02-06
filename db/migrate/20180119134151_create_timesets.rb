class CreateTimesets < ActiveRecord::Migration
  def change
    create_table :timesets do |t|

      t.timestamps null: false
    end
  end
end
