# == Schema Information
#
# Table name: oauths
#
#  id     :integer          not null, primary key
#  token  :string           not null
#  secret :string           not null
#

class Oauth < ActiveRecord::Base
  validates_presence_of :token, :secret
end
