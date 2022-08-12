import { useQuery } from '@apollo/client';
import { gql } from 'graphql-tag';

const GET_CHARACTERS = gql`
  query{
    characters{
      results{
        id
        name
        image
      }
    }
  }
`;
export const useCharacters = () => {
  const { error, data, loading } = useQuery(GET_CHARACTERS);
  return {
    error, data, loading
  }

}