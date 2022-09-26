class PhotoSerializer < ActiveModel::Serializer
  attributes :id, :images, :image_url
  has_one :slideshow
  has_one :user
end
