class Starlink < ApplicationRecord
  require 'rest_client'

  def self.all
    spacex = SpacexApi.new()
    spacex.get_starlinks
  end
end
