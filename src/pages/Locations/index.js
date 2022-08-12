import React from "react";
import { gql, useLazyQuery } from "@apollo/client";

const GET_CHARACTER_LOCATIONS = gql`
  query GetCharacterLocations($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          id
          name
        }
      }
    }
  }
`;

export default function Loactions() {
  const [name, setName] = React.useState("");
  const [getLocations, { called, error, data, loading }] = useLazyQuery(
    GET_CHARACTER_LOCATIONS,
    {
      variables: {
        name,
      },
    }
  );
  console.log(data?.characters?.results);
  return (
    <div className="locations">
      <div className="locations__input">
        <input
          placeholder="Character name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={() => getLocations()}> Search </button>
      </div>
      {loading && <div> loading... </div>}
      {error && <div> Something went wrong </div>}
      <ul style={{ color: "#fff" }}>
        {data?.characters?.results?.map((character) => (
          <li key={character.location.id}>{character.location.name}</li>
        ))}
      </ul>
    </div>
  );
}
