class CreateBjlogins < ActiveRecord::Migration
  def change
    create_table :bjlogins do |t|

      t.timestamps null: false
    end
  end
end
