import { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Episodios from './pages/Episodios';
import { NavLink } from 'react-router-dom';

const App = () => {
  const [pelis, setPelis] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://api.tvmaze.com/shows')
      .then((response) => response.json())
      .then((results) => {
        console.log(results);
        setPelis(results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = pelis.filter((item) => {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <header>
        <div className='navbar navbar-dark bg-dark shadow-sm'>
          <div className='container'>
            <NavLink to='#' className='navbar-brand d-flex align-items-center'>
              <strong>My Movie App</strong>
            </NavLink>
            <SearchBar handleSearchChange={handleSearch} />
          </div>
        </div>
      </header>
      <main>
        <div className='album py-5 bg-light'>
          <div className='container'>
            <div className='row row-cols-1 row-cols-md-4 g-4 align-items-stretch'>
              {filteredData.map((peli) => (
                <div className='col' key={peli.id}>
                  <NavLink to={`/Serie/${peli.id}`} className='card custom-card'>
                    <div className='d-flex align-items-center'>
                      <img
                        src={peli?.image?.original}
                        alt={peli.name}
                        className='card-img-top poster-image'
                      />
                    </div>
                    <div className='card-body'>
                      <p className='card-text'>{peli.name}</p>
                      <div className='d-flex justify-content-between align-items-center'>
                        <small className='text-muted'>{peli.genres}</small>
                      </div>
                    </div>
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <footer className='text-muted py-5'>
        <div className='container'>
          <p className='float-end mb-1' />
        </div>
      </footer>
    </div>
  );
};

export default App;
