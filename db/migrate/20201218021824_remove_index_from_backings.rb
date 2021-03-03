class RemoveIndexFromBackings < ActiveRecord::Migration[5.2]
  def change
    remove_index :backings, name: "index_backings_on_project_id"
  end
end
