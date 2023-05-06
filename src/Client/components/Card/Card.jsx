import { Link } from 'react-router-dom'
import {
  CloseButton,
  Container,
  ContainerButtons,
  FavButton,
  ImageCharacter,
  TextInfo
} from './styledCard'
import { addFav, removeFav } from '../../redux/actions'
import { connect } from 'react-redux'
import { useEffect, useState } from 'react'

function Card({
  isOnClose,
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorites
}) {
  const [isFav, setIsFav] = useState(false)

  useEffect(() => {
    for (let character of myFavorites) {
      if (character.id === id) {
        setIsFav(true)
      }
    }
  }, [myFavorites])

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false)
      removeFav(id)
    } else {
      setIsFav(true)
      addFav({
        id,
        name,
        status,
        species,
        gender,
        origin,
        image
      })
    }
  }

  return (
    <Container>
      <ContainerButtons>
        <FavButton onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</FavButton>
        {isOnClose && <CloseButton onClick={() => onClose(id)}>X</CloseButton>}
      </ContainerButtons>
      <Link to={`/detail/${id}`}>
        <TextInfo>{name}</TextInfo>
      </Link>
      <p>id: {id}</p>
      <ImageCharacter src={image} alt={name} />
    </Container>
  )
}
const mapStateToProps = (state) => {
  return { myFavorites: state.myFavorites }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character))
    },
    removeFav: (id) => {
      dispatch(removeFav(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
