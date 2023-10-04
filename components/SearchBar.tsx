'use client'
import {SearchManufacturer} from "./"
import {useState} from 'react'

const SearchBar = () => {
  //states
  const [manufacturer, setManufacturer] = useState('')

  //handles
  const handleSearch = () => {}

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__items">
        <SearchManufacturer  
        manufacturer={manufacturer}
        setManufacturer={setManufacturer}
        />
      </div>
    </form>
  )
}

export default SearchBar
