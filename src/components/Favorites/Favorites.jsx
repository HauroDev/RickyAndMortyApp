import Card from "../Card/Card";
import { connect } from "react-redux";
import { Container } from "./styledFavorites";

const Favorites = ({ myFavorites }) => {
  return (
    <Container>
      {
        myFavorites?.map((character) => {
          return (<Card
            key={character.id}
            id={character.id}
            name={character.name}
            species={character.species}
            gender={character.gender}
            origin={character.origin}
            image={character.image} />)
        })
      }
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites
  }
}


export default connect(mapStateToProps, null)(Favorites);