const Poster = ({ id, name, summary, img }) => {
  console.log('Nombre', name)
  return (
    <div>
      <h1>Pelicula{id}</h1>
      <h1>{name}</h1>
      <h2>{id}</h2>
      <p>{summary}</p>
      <img src={img} width='100' height='150' />

    </div>
  )
}

export default Poster