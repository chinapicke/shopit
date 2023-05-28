import React from 'react'
import { useState } from 'react'

const Searchbar = ({onSearch},{onFilter}) => {
    // state for the search input
    const [input, setInput] = useState('')
    // filtering search
    // const [filterout, setFilterOut] = useState('')

    // const handleSelect = (e) => {
    //     setFilterOut(e.target.value)
    // }

    const searchProducts = (e) =>{
        onSearch(input)
    }

    const handleFilter = (e) => {
    }
    
    return (
        <div>
            <input type='text'
                placeholder='Search'
                value={input}
                onChange={e => setInput(e.target.value)}
            />
            <select placeholder='Search by'
                onChange={handleFilter}>
                <option
                    value="Brand">Brand</option>
                <option
                    value="Product Type">Product Type</option>
            </select>
            <button
                onClick={() => searchProducts()}
            >Submit</button>

        </div>

    )
}

export default Searchbar