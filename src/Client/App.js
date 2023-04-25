import { FlexContainer } from './styledApp';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import About from './components/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Error from './components/Error';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Favorites from './components/Favorites/Favorites';
import { useDispatch } from 'react-redux';
import { removeFav } from './redux/actions';

// eslint-disable-next-line no-unused-vars
const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
// eslint-disable-next-line no-unused-vars
const API_KEY = '1cfff7d1d18d.0db22fcc014bfd364d71';
const max_characters = 826;
// const max_characters = 5;
const ramdom = () => Math.floor(Math.random() * (max_characters) + 1);

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    !access && navigate('/');
  }, [access, navigate]);

  const login = async (userData) => {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    try {
      const response = await axios(URL + `?email=${email}&password=${password}`)
      const { data } = response
      const { access } = data;
      setAccess(data);
      access && navigate('/home');
    } catch (error) {
      console.error(error)
      window.alert('Usuario/Contraseña incorrecta')
    }

  }

  const logout = () => {
    setAccess(false);
  };

  const onSearch = async (id) => {
    try {
      const response = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
      const { data } = response

      if (characters.some((element) => element.id === id))
        window.alert('¡Este personaje ya esta a la vista!')

      console.log(response)
      setCharacters((oldChars) => [...oldChars, data])

    } catch ({ response: { status } }) {
      if (status === 300)
        window.alert('¡Ingrese valores numéricos!');
      if (status === 500)
        window.alert('Personaje no existente')
    }
  }

  const agregarRamdom = (event, intentos = 0) => {

    let id = ramdom();
    if (intentos > max_characters) {
      alert(`Ya estan los ${max_characters} personajes`);
      return null;
    }
    if (characters.some(character => character.id === "" + id))
      return agregarRamdom(null, intentos + 1);

    onSearch(id);
  };

  const dispatch = useDispatch();
  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
    dispatch(removeFav(id)); // no entiendo bien que pasa si elimino a un elemento que no esta en favoritos
  };

  return (
    <FlexContainer>

      {location.pathname !== '/'
        && <Nav ramdom={agregarRamdom} onSearch={onSearch} logout={logout} />}
      <Routes>
        <Route path='/' element={<Form login={login} />} />
        <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='*' element={Error} />
      </Routes>
    </FlexContainer>
  );
}

export default App;