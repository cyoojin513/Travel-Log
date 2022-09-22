class User < ApplicationRecord
  has_many :slideshow
  has_many :photos, through: :slideshow

  has_secure_password
  
  validates :email, uniqueness: true, presence: true
end
