class Photo < ApplicationRecord
  belongs_to :slideshow
  has_one :user, through: :slideshow

  has_many_attached :images

  def image_url
    Rails.application.routes.url_helpers.url_for(images) if images.attached?
  end
end
