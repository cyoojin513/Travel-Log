class PhotosController < ApplicationController
  before_action :find_photo, only: [:show, :delete]

  # GET '/photos'
  def index
    @allPhoto = Photo.all
    render json: @allPhoto, status: :ok
    # render json: PhotoSerializer.new(@allPhoto).serializable_hash[:data][:attributes]
  end

  # POST '/photos'
  def create
    newPhoto = Photo.create!(photo_params)
    render json: newPhoto, status: :created
  end

  # DELETE '/photos/:id'
  def destroy
    @photo.destroy
    head :no_content
  end
  

  private

  def find_photo
    @photo = Photo.find_by(id: params[:id])
  end

  def photo_params
    params.permit(:slideshow_id, :image)
  end
end
