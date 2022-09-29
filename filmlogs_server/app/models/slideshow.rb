class Slideshow < ApplicationRecord
  belongs_to :user
  has_many :photos, dependent: :destroy

  validates :address, :date, presence: true
  validates :note, length: { maximum: 200 }
end
