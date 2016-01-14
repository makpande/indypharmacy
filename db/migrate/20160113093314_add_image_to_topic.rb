class AddImageToTopic < ActiveRecord::Migration
  def change
    add_column :topics, :topic_image, :string

  end
end
