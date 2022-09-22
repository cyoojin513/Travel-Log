class SlideshowSerializer < ActiveModel::Serializer
  attributes :id, :city, :country, :date, :note
  has_one :user
  has_many :photos
end
