class RemoveNullFalseFromBackings < ActiveRecord::Migration[5.2]
  def change
    change_column :backings, :reward_id, :integer, :null => true 
  end
end
