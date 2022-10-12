class StarlinkController < ApplicationController
  require 'rest_client'

  def get_starlinks
    url = "https://api.spacexdata.com/v4/starlink"
    response = RestClient.get(url)
    positions = JSON.parse(response).map do |starlink|
      next if starlink["latitude"].nil?
      {
        :name => starlink["spaceTrack"]["OBJECT_NAME"],
        :latitude => starlink["latitude"],
        :longitude => starlink["longitude"],
        :height_km => starlink["height_km"]
      }
    end.compact
    render json: positions
  end
end
