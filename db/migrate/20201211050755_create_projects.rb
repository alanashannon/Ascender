class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :title, null: false 
      t.integer :category_id, null: false 
      t.integer :author_id, null: false 
      t.string :location
      t.text :description, null: false 
      t.date :end_date, null: false 
      t.text :campaign, null: false 
      t.integer :funding_goal, null: false 
      t.integer :amount_pledged, null: false 
      t.text :risks, null: false 
      t.text :updates
      t.text :faq

      t.timestamps
    end

    add_index :projects, :author_id
    add_index :projects, :category_id
  end
end
