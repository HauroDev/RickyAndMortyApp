import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Detail = () => {
  const { id } = useParams();

  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert('No hay personajes con ese ID');
      }
    });
    return setCharacter({});
  }, [id]);


  return <div className={`detail-${id}`}>
    <h2>{character.name}</h2>
    {character.species && <h3>Species: {character.species}</h3>}    
    {character.status && <h3>Status: {character.status}</h3>}
    {character.gender && <h3>Gender: {character.gender}</h3>}
    <img src={character.image} alt='' />
  </div>
};

export default Detail;