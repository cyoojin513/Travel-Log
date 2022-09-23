class User < ApplicationRecord
  has_many :slideshows
  has_many :photos, through: :slideshows

  has_secure_password
  
  validates :email, uniqueness: true, presence: true
end
