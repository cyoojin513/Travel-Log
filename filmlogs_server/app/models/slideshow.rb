class Slideshow < ApplicationRecord
  belongs_to :user
  has_many :photos

  validates :city, :country, :date, presence: true
  validates :note, length: { maximum: 200 }
end
