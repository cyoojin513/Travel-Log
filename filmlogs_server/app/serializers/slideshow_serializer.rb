class SlideshowSerializer < ActiveModel::Serializer
  attributes :id, :city, :country, :lon, :lat, :address, :date, :note, :isReleased
  
  has_one :user
  has_many :photos
end
