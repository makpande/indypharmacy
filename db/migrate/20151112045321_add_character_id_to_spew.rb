class AddCharacterIdToSpew < ActiveRecord::Migration
  def change
    add_column :spews, :character_id, :integer
  end
end
