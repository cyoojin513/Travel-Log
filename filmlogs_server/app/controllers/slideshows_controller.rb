class SlideshowsController < ApplicationController
  before_action :find_slidshow, only: [:show, :update, :destroy]

  # GET '/slideshows'
  def index
    render json: Slideshow.all, status: :ok
  end

  # GET '/slideshows/:id'
  def show
    render json: @slideshow, status: :ok
  end

  # POST '/slideshows'
  def create
    newSlideshow = Slideshow.create!(slideshow_params)
    render json: newSlideshow, status: :created
  end

  # PATCH '/slideshows/:id'
  def update
    @slideshow.update(slideshow_params)
    render json: @slideshow, status: :ok
  end

  # DELETE '/slideshows/:id'
  def destroy
    @slideshow.destroy
    head :no_content
  end

  private

  def find_slideshow
    @slideshow = Slideshow.find_by(id: params[:id])
  end

  def slideshow_params
    params.permit(:city, :country, :date, :note, :user_id)
  end
end
