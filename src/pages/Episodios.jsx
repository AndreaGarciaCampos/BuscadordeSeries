import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Actores from './Actores';

const Episodios = () => {
  const { id } = useParams();
  const URL = `https://api.tvmaze.com/shows/${id}/episodes`;
  const [episodios, setEpisodios] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((results) => {
        console.log('El id', id);
        console.log(results);
        setEpisodios(results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <div>
      <h1 className='header' style={{ color: 'gray' }}>Serie {id}</h1>
      <main>
        <div className='row row-cols-1 row-cols-md-4 g-4 align-items-stretch'>
          {episodios.map((epi) => (
            <div className='col' key={epi.id}>
              <div className='h-100 p-5 bg-body-tertiary border rounded-3' style={{ color: 'gray' }}>
                <h2 className='titulo' style={{ color: 'lightgray' }}>Temp {epi.season}/</h2>
                <h2 className='titulo2' style={{ color: 'darkgray' }}>Ep:{epi.id}</h2>
                <img
                  src={epi.image.original}
                  height='120'
                  width='75'
                  alt={epi.name}
                  className='card-img-top poster-image'
                />
                <h2 style={{ color: 'gray' }}>{epi.name}</h2>
                <div dangerouslySetInnerHTML={{ __html: epi.summary }} />
              </div>
            </div>
          ))}
        </div>
      </main>
      <div className='row row-cols-1 row-cols-md-4 g-4 align-items-stretch'>
        <Actores />
      </div>
    </div>
  );
};

export default Episodios;
