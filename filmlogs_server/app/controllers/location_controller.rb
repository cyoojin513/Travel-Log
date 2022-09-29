class LocationController < ApplicationController
  def index
    res = RestClient.get('https://api.geoapify.com/v1/geocode/search?text=38%20Upper%20Montagu%20Street%2C%20Westminster%20W1H%201LJ%2C%20United%20Kingdom&apiKey=8f87706a21ef4872afa2c296b4f9d856')
    render json: res.body
  end
end
