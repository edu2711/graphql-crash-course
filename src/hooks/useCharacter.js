import { useQuery } from '@apollo/client';
import { gql } from 'graphql-tag';

const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id){
      id
      name
      image
      species
      location {
        id
        name
      }
    }
  }
`;

export const useCharacter = (id) => {
  const { error, data, loading } = useQuery(GET_CHARACTER, {
    variables: {
      id
    }
  });
  return {
    error, data, loading
  }

}