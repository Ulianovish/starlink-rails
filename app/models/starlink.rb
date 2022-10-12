class Starlink < ApplicationRecord
  require 'rest_client'
  require 'haversine'

  def self.all
    spacex = SpacexApi.new()
    spacex.get_starlinks
  end

  def self.nearStarlinks(latitude:, longitude:, max_height:, min_height:, amount:)
    # byebug
    starlinks = Starlink.all.filter { |starlink| (starlink[:height_km] <= max_height && starlink[:height_km] >= min_height) }
    starlinks = starlinks.map do |starlink|
        distance = Haversine.distance(starlink[:latitude],starlink[:longitude],latitude,longitude)
        starlink.store(:distance,distance.to_km)
        starlink
    end

    starlinks.sort_by! { |starlink| starlink[:distance] }
    starlinks[0..amount]

  end
end
