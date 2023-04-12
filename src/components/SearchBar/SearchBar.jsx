import { useState } from "react";
import { Button, Container, Input } from "./styledSearchBar";

export default function SearchBar({ onSearch , ramdom}) {

  const [id, setId] = useState('');

  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <Container>
      <Input type='search' onChange={handleChange} value={id} />
      <Button onClick={() => {onSearch(id); setId('');}}>Agregar</Button>
      <Button onClick={ramdom}>Ramdom</Button>
    </Container>
  );
}
