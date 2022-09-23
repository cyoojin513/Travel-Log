class Photo < ApplicationRecord
  belongs_to :slideshow
  has_one :user, through: :slideshow

  has_one_attached :image
end
