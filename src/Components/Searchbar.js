import React from 'react'
import { useState } from 'react'

const Searchbar = ({ onSearch, onFilter, onInput }) => {
    // state for the search input
    const [input, setInput] = useState('')
    const [filtered, setFiltered] = useState('')



    const searchProducts = () => {
        if (input === '') {
            alert('Please input something')
        }
        else {
            if (filtered === 'Brand') {
                onSearch(input)
            }
            else if (filtered === 'Product') {
                onFilter(input)
            }
            else {
                onInput(input)
            }
        }

    }

    return (
        <div className='relative grid grid-rows-2 sm:grid-rows-none'>
            <div>
            <div class="absolute inset-y-0 left-0 flex items-start mt-5 sm:mt-0 sm:items-center pl-3  pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
            </div>
            <input type='text'
                placeholder='Search'
                value={input}
                onChange={e => setInput(e.target.value)}
                className='block w-full p-4 pl-10 text-sm border border-gray-300 rounded-lg bg-gray-50 '
            />
            </div>
            <div>
            <select className='searchByDropdown text-black text-center absolute right-28 bottom-2.5 mr-4 focus:ring-2 focus:outline-none focus:ring-gray-950 font-medium rounded-lg text-sm px-4 py-2 '
            placeholder='Search by'
                onChange={e => setFiltered(e.target.value)}>
                <option defaultValue>Search by...</option>
                <option
                    value="Brand">Brand</option>
                <option
                    value="Product">Product Type</option>
            </select>
            <button className='submitBtn text-black absolute right-2.5 bottom-2.5  focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 '
                onClick={() => searchProducts()}
            >Submit</button>
            </div>

        </div>

    )
}

export default Searchbar