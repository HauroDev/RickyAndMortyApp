import Card from './Card';

export default function Cards(props) {
  const cardPersonajes = props.characters.map((prop) => {
    return (
      <Card
        key={prop.id}
        id={prop.id}
        name={prop.name}
        status={prop.status}
        species={prop.species}
        gender={prop.gender}
        origin={prop.origin}
        image={prop.image}
        onClose={props.onClose}
      />
    )
  })
  return <div>{cardPersonajes}</div>;
}
