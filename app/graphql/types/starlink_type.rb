# frozen_string_literal: true

module Types
  class StarlinkType < Types::BaseObject
    field :id, ID, null: false
    field :name, String
    field :latitude, Float
    field :longitude, Float
    field :height_km, Float
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
