class PhotoSerializer < ActiveModel::Serializer
  # include JSONAPI::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :image, :image_url

  has_one :user

end
