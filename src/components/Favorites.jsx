import Card from "./Card/Card";
import { connect } from "react-redux";

const Favorites = ({ myFavorites }) => {
  return (
    <>
      {
        myFavorites?.map((character) => {
          return (<Card
            key={character.id}
            id={character.id}
            name={character.name}
            species={character.species}
            gender={character.gender}
            origin={character.origin}
            image={character.image}/>)
        })
      }
    </>)
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites
  }
}


export default connect(mapStateToProps, null)(Favorites);