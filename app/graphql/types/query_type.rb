module Types
  class QueryType < Types::BaseObject
    require 'rest_client'
    require 'byebug'
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    # TODO: remove me
    # field :test_field, String, null: false,
    #   description: "An example field added by the generator"
    # def test_field
    #   "Hello World!"
    # end

    field :all_starlinks, [StarlinkType], null: true, description: "Returns a list of all Starlinks"

    def all_starlinks
      Starlink.all
    end
  end
end
