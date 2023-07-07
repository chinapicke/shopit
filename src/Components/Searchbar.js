import React from 'react'
import { useState } from 'react'

const Searchbar = ({ onSearch, onFilter, onInput}) => {
    // state for the search input
    const [input, setInput] = useState('')
    const [filtered, setFiltered] = useState('')
    

    
    const searchProducts = () => {
        if (input === ''){
            alert('Please input something')
        }
        else{
            if (filtered==='Brand'){
                onSearch(input)
            }
            else if(filtered==='Product'){
                onFilter(input)
            }
            else{
                onInput(input)
            }
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