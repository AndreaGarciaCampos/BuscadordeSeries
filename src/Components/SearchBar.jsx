const SearchBar = ({ handleSearchChange }) => {
  return (
    <div className='search-bar'>
      <input
        type='text'
        placeholder='Search...'
        onChange={handleSearchChange}
      />
    </div>
  )
}

export default SearchBar
