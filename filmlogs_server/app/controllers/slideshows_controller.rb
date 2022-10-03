class SlideshowsController < ApplicationController
  before_action :find_slideshow, only: [:show, :update, :destroy]

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
    slideshow = Slideshow.create!(slideshow_params)
    render json: slideshow, status: :created
  end

  # PATCH '/slideshows/:id'
  def update
    @slideshow.update!(slideshow_params)
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
    params.permit(:address, :city, :country, :lon, :lat, :date, :note, :user_id, :isReleased)
  end

  def address_params
    params[:encodedAddress]
  end

end



#  working

# def update
#   @slideshow.update!(slideshow_params)
  
  # res = RestClient.get(`https://api.geoapify.com/v1/geocode/search?text=#{address_params}m&apiKey=4bf748cc72c4440b8860db33cb8c88fe`)
  # parsedData = JSON.parse(res.body)['features'][0]['properties']

  # city = parsedData['city']
  # country = parsedData['country']
  # lon = parsedData['lon']
  # lat = parsedData['lat']

  # if parsedData
  #   @slideshow.update!(city: city, country: country, lon: lon, lat: lat)
  #   render json: @slideshow, status: :ok
  # else
  #   render json: { error: 'Please enter a specific address' }, status: :not_found
  # end



  # def render_geocode
  #   res = RestClient.get('https://api.geoapify.com/v1/geocode/search?text=38%20Upper%20Montagu%20Street%2C%20Westminster%20W1H%201LJ%2C%20United%20Kingdom&apiKey=8f87706a21ef4872afa2c296b4f9d856')
  # end


# JSON.parse(res.body)['features'][0]['properties']