import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Actores = () => {
  const [cast, setCast] = useState([]);
  const id = useParams().id;

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}/cast`)
      .then((response) => response.json())
      .then((cast) => {
        setCast(cast);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const tableStyle = {
    textAlign: 'center',
    width: '100%',
    borderCollapse: 'collapse',
    backgroundColor: '#F0F5FF', // Color de fondo en escala de grises
  };

  const actorImageStyle = {
    maxWidth: '200px',
    maxHeight: '200px',
  };

  const cellStyle = {
    padding: '15px',
    verticalAlign: 'middle',
    borderBottom: '1px solid #999', // Borde inferior en escala de grises
    color: '#333', // Color del texto en escala de grises
  };

  const headerStyle = {
    padding: '15px',
    fontWeight: 'bold',
    fontSize: '24px',
    backgroundColor: '#999', // Color de fondo del encabezado en escala de grises
    color: '#FFF', // Color del texto del encabezado
  };

  const subHeaderStyle = {
    fontWeight: 'bold',
    fontSize: '18px',
    color: '#333', // Color del texto en escala de grises
  };

  const containerStyle = {
    width: '100%',
    overflowX: 'auto',
    margin: '20px 0', // Margen superior e inferior de 20px, sin margen lateral
    borderRadius: '8px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', // Sombra
  };

  return (
    <div className='container' style={containerStyle}>
      <table className='table table-sm' style={tableStyle}>
        <thead>
          <tr>
            <th colSpan="3" style={headerStyle}>CASTING</th>
          </tr>
          <tr>
            <th style={cellStyle}></th>
            <th style={subHeaderStyle}>Actor</th>
            <th style={subHeaderStyle}>Personaje</th>
          </tr>
        </thead>
        <tbody>
          {cast.map((actor) => (
            <tr key={actor.person.id}>
              <td>
                <img
                  src={actor.person.image?.medium}
                  alt={actor.person.name}
                  style={actorImageStyle}
                />
              </td>
              <td style={cellStyle}>{actor.person.name}</td>
              <td style={cellStyle}>{actor.character.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Actores;
