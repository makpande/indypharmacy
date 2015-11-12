# == Schema Information
#
# Table name: spews
#
#  id           :integer          not null, primary key
#  user_id      :integer
#  content      :string           not null
#  created_at   :datetime
#  updated_at   :datetime
#  character_id :integer
#

class Spew < ActiveRecord::Base
  belongs_to :user
  validates_presence_of :content, :character_id
end
