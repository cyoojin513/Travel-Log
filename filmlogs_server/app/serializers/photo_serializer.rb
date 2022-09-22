class PhotoSerializer < ActiveModel::Serializer
  attributes :id, :photoURL
  has_one :slideshow
  has_one :user
end
