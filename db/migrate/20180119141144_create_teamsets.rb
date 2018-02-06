class CreateTeamsets < ActiveRecord::Migration
  def change
    create_table :teamsets do |t|

      t.timestamps null: false
    end
  end
end
