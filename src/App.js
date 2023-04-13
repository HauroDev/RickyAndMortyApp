import { FlexContainer } from './styledApp';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form/Form';
import Error from './components/Error';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Favorites from './components/Favorites/Favorites';

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = '1cfff7d1d18d.0db22fcc014bfd364d71';
const max_characters = 826;
const ramdom = () => Math.floor(Math.random() * (max_characters + 1));

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    !access && navigate('/');
  }, [access, navigate]);

  const [EMAIL, PASSWORD] = ["hectorma208@gmail.com", "Hector12"];
  const login = (userData) => {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
    }
  };
  const logout = () => {
    setAccess(false);
  };

  const onSearch = (id) => {
    axios(`${URL_BASE}/${id}?key=${API_KEY}`)
      .then(({ data }) => {
        if (characters.find((element) => element.id === id))
          window.alert('¡Este personaje ya esta a la vista!');
        else if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('¡Ingrese algun valor!');
        }
      });
  }

  const agregarRamdom = (event, intentos = 0) => {

    // esto funciona pero aun me falta ver que pasa con los favoritos,
    // pero puede que esto lo arregle sin que me de cuenta
    let id = ramdom();
    if (intentos > max_characters) {
      alert(`Ya estan los ${max_characters} personajes`);
      return null;
    }
    if (characters.some(character => character.id.includes('' + id)))
      return agregarRamdom(null, intentos + 1);

    onSearch(id);
  };

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));

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