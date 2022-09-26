class SlideshowSerializer < ActiveModel::Serializer
  attributes :id, :city, :country, :date, :note, :isReleased
  has_one :user
  has_many :photos
end
