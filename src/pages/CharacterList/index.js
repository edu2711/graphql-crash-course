import React from "react";
import { Link } from "react-router-dom";
import { useCharacters } from "../../hooks/useCharacters";
import './style.css'
import Loader from "../../shared/Loader";

export default function CharactersList() {
  const { error, data, loading } = useCharacters();
  console.log(data?.characters?.results);
  // console.log({ error, loading, data })
  return (
    <div className="characters-page">
      <h1 className="characters-page__title">GraphQL Crash Course</h1>
      <div className="characters-list">
        {loading ? <Loader loading={loading} /> : null}
        {data?.characters?.results?.map((char) => (
          <Link
            to={`/character/${char.id}`}
            className="characters-list__card"
            key={char.id}
          >
            <img src={char.image} alt={char.name} />
            <p>{char.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
