class PhotoSerializer < ActiveModel::Serializer
  attributes :id
  has_one :slideshow
  has_one :user
end
