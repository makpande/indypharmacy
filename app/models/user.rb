class User < ActiveRecord::Base
  has_many :spews
  validates_presence_of :uid, :handle
end
