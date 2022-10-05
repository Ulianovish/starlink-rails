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
  query nearStarlinks($latitude: Float!, $longitude: Float!, $amount: Int!) {
    nearStarlinks(latitude: $latitude, longitude: $longitude, amount: $amount){
        id
        latitude
        longitude
        name
    }
  }
`