class CreateRewards < ActiveRecord::Migration[5.2]
  def change
    create_table :rewards do |t|
      t.integer :project_id, null: false
      t.string :title, null: false 
      t.text :description, null: false 
      t.integer :pledge_amount, null: false 
      t.date :est_delivery
      t.string :ships_to

      t.timestamps
    end

    add_index :rewards, :project_id, unique: true 
  end
end
