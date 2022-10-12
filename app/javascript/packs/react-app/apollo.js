import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

export  const client = new ApolloClient({
    uri: "/graphql",
})

// get all starlinks
export const GET_ALL_STARLINKS = gql`
  query {
      allStarlinks {
        id
        latitude
        longitude
        name
      }
  }
`
// get near starlinks
export const GET_NEAR_STARLINKS = gql`
  query nearStarlinks($latitude: Float!, $longitude: Float!,$maxHeight: Float!, $minHeight: Float!, $amount: Int!) {
    nearStarlinks(latitude: $latitude, longitude: $longitude, maxHeight: $maxHeight, minHeight: $minHeight, amount: $amount){
        id
        latitude
        longitude
        heightKm
        name
    }
  }
`