import React from 'react'
import { useState } from 'react'

function Searchbar() {
    const [search, setSearch] = useState('')

    const searchSubmit = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
    }
  return (
    <div>
        <input type='text'
        placeholder='Search'
        value={search}
        onChange={searchSubmit}
        />
        <button>Submit</button>

    </div>
  )
}

export default Searchbar