class PhotosController < ApplicationController
  before_action :find_photo, only: [:show, :delete]

  # GET '/photos'
  def index
    render json: Photo.all, status: :ok
  end

  # GET '/photos/:id'
  def show
    render json: @photo, status: :ok
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
    params.permit(:slideshow_id)
  end
end
