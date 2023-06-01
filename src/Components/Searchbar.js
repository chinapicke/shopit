import React from 'react'
import { useState } from 'react'

const Searchbar = ({ onSearch, onFilter}) => {
    // state for the search input
    const [input, setInput] = useState('')
    const [filtered, setFiltered] = useState('')


    
    const searchProducts = () => {
        if (filtered==='Brand'){
            onSearch(input)
        }
        else if(filtered==='Product'){
            onFilter(input)
        }
        else{
            alert('Please select a filter by')
        }


    }


    return (
        <div>
            <input type='text'
                placeholder='Search'
                value={input}
                onChange={e => setInput(e.target.value)}
            />
            <select placeholder='Search by'
                onChange={e => setFiltered(e.target.value)}>
                <option defaultValue>Search by...</option>
                <option
                    value="Brand">Brand</option>
                <option
                    value="Product">Product Type</option>
            </select>
            <button
                onClick={() => searchProducts()}
            >Submit</button>

        </div>

    )
}

export default Searchbar