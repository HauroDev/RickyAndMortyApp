import Card from "../Card/Card";
import { connect, useDispatch } from "react-redux";
import { Container } from "./styledFavorites";
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";

const Favorites = ({ myFavorites }) => {
  // eslint-disable-next-line no-unused-vars
  const [aux, setAux] = useState(false);

  const favCards = myFavorites?.map((character) => {
    return (<Card
      isOnClose={false}
      key={character.id}
      id={character.id}
      name={character.name}
      species={character.species}
      gender={character.gender}
      origin={character.origin}
      image={character.image} />)
  }); // esto esta mal, crea un modulo de componente

  const dispatch = useDispatch();

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(true); // no es un toggle
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };


  return (
    <Container>
      <div>
        <select onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <select onChange={handleFilter}>
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
      <div>
        {favCards}
      </div>
    </Container >
  )
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites
  }
}


export default connect(mapStateToProps, null)(Favorites);