class SpacexApi
  require 'rest_client'
  require 'byebug'

  def get_starlinks
    url = "https://api.spacexdata.com/v4/starlink"
    response = RestClient.get(url)
    all_starlinks = JSON.parse(response).map do |starlink|
      next if starlink["latitude"].nil?
      {
        :name => starlink["spaceTrack"]["OBJECT_NAME"],
        :latitude => starlink["latitude"],
        :longitude => starlink["longitude"],
        :id => starlink["id"]
      }
    end.compact
    all_starlinks
  end
end