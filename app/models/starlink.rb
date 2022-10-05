class Starlink < ApplicationRecord
  require 'rest_client'
  require 'haversine'

  def self.all
    spacex = SpacexApi.new()
    spacex.get_starlinks
  end

  def self.nearStarlinks(latitude:, longitude:, amount:)
    starlinks = Starlink.all.map do |starlink|
      distance = Haversine.distance(starlink[:latitude],starlink[:longitude],latitude,longitude)
      starlink.store(:distance,distance.to_km)
      starlink
    end
    starlinks.sort_by! { |starlink| starlink[:distance] }
    puts starlinks[0..amount]
    starlinks[0..amount]
  end
end
