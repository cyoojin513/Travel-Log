class PhotoSerializer < ActiveModel::Serializer
  # include JSONAPI::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :image, :image_url

  has_one :user

  # def image_url
  #   Rails.application.routes.url_helpers.url_for(image) if image.attached?
  # end

end
