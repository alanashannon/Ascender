class RemoveBackingIdIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :backings, name: "index_backings_on_backer_id"
  end
end
