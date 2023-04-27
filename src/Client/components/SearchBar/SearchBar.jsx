import { useState } from 'react'
import { Button, Input } from './styledSearchBar'

export default function SearchBar({ onSearch, ramdom }) {
  const [id, setId] = useState('')

  const handleChange = (event) => {
    setId(event.target.value)
  }
  const handleClick = () => {
    onSearch(id)
    setId('')
  }

  return (
    <>
      <Input type='text' onChange={handleChange} value={id} />
      <Button onClick={handleClick}>Agregar</Button>
      <Button onClick={ramdom}>Ramdom</Button>
    </>
  )
}
