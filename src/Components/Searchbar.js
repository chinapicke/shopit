import React from 'react'
import { useState } from 'react'

const Searchbar = ({ onSearch, onFilter}) => {
    // state for the search input
    const [input, setInput] = useState('')
    const [filtered, setFiltered] = useState('')


    // const handleFilter = (e) => {
    //     const filteredOut = e.target.value
    //     if (filteredOut === 'Product') {
    //         setFiltered(true)
    //         onFilter(onSearch)
    //         console.log({ filteredOut })
    //     }
    // }
    const searchProducts = () => {
        if (filtered==='Brand'){
            onSearch(input)
        }
        else{
            onFilter(input)
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
                <option selected>Search by...</option>
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