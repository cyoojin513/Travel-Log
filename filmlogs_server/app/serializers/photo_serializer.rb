class PhotoSerializer < ActiveModel::Serializer
  attributes :id, :image
  has_one :slideshow
  has_one :user
end
