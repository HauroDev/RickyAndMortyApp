import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import './Detail.css'

// eslint-disable-next-line no-unused-vars
const URL_BASE = 'http://localhost:3001/rickandmorty/character';

const Detail = () => {
  const { id } = useParams();

  const [character, setCharacter] = useState({});

  console.log('mount')
  
  useEffect(() => {
    console.log('mount: useEffect')
    axios(`${URL_BASE}/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
    return setCharacter({});
  }, [id]);


  return <div className="detail-container">
    <h2>{character.name}</h2>
    {character.species && <h3>Species: {character.species}</h3>}
    {character.status && <h3>Status: {character.status}</h3>}
    {character.gender && <h3>Gender: {character.gender}</h3>}
    <img src={character.image} alt='' />
  </div>
};

export default Detail;