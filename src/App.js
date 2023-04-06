import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form/Form';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';


function App() {
  const [access, setAccess] = useState(false);
  const [EMAIL, PASSWORD] = ["hectorma208@gmail.com", "Hector12"];
  const navigate = useNavigate();
  const login = (userData) => {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
    }
  };
  const logout = () => {
    setAccess(false);
    navigate('/');
  };


  useEffect(() => {
    !access && navigate('/');
  }, [access]);
  
  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('¡No hay personajes con este ID!');
        }
      });
  }
  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== Number(id)
    ));

  };

  const location = useLocation();
  
  return (
    <div className='App'>

      {location.pathname !== '/'
        && <Nav onSearch={onSearch} logout={logout}/>}
      <Routes>
        <Route path='/' element={<Form login={login} />} />
        <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;