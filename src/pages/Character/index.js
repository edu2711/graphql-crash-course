import React from "react";
import { Link, useParams } from "react-router-dom";
import { useCharacter } from "../../hooks/useCharacter";
import Loader from "../../shared/Loader";
import './style.css';

function Character() {
  const { id } = useParams();
  const { error, data, loading } = useCharacter(id);

  //  if(loading) return ()

  return (
    <div className="character-page">
      {loading ? <Loader loading={loading} /> : null}
      <img src={data?.character?.image} alt={data?.character?.name} />
      <p>{data?.character?.name}</p>
      <p>{data?.character.species}</p>

      <p>{data?.character?.location?.name}</p>

      <Link to="/" className="character-page__back">
        Go back
      </Link>
    </div>
  );
}

export default Character;
