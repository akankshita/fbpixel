class User < ActiveRecord::Base
  attr_accessible :email, :provider, :token, :uid
end
