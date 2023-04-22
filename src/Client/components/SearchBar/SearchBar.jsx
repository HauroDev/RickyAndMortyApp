import { useState } from "react";
import { Button, Container, Input } from "./styledSearchBar";

export default function SearchBar({ onSearch, ramdom }) {

  const [id, setId] = useState('');

  const handleChange = (event) => {
    setId(event.target.value);
  };
  const handleClick = () => {
    onSearch(id);
    setId('');
  }

  return (
    <Container>
      <Input type='search' onChange={handleChange} value={id} />
      <Button onClick={handleClick}>Agregar</Button>
      <Button onClick={ramdom}>Ramdom</Button>
    </Container>
  );
}
