import Card from '../Card/Card';
import { Container } from './styledCards';

export default function Cards(props) {
  const cardPersonajes = props.characters.map((prop) => {
    return (
      <Card
        isOnClose={true}
        key={prop.id}
        id={prop.id}
        name={prop.name}
        status={prop.status}
        species={prop.species}
        gender={prop.gender}
        origin={prop.origin.name}
        image={prop.image}
        onClose={props.onClose}
      />
    )
  })
  return (<Container>
    {cardPersonajes}
  </Container>);
}
