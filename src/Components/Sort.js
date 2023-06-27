import React from 'react'
import useAxios from '../Hooks/useAxios'


const Sort = () => {
    const { products, setProducts } = useAxios('https://makeup-api.herokuapp.com/api/v1/products.json')

    const ascending = () => {
        const listOfProducts = [...products]
        if (listOfProducts.length > 0) {
            let result = listOfProducts.sort((a, b) => a.price.localeCompare(b.price))
            setProducts(result)
        }
    }

    return (
        <div>
            <label>Sort By</label>
            <button onClick={ascending}>low to high </button>
            {/* <select onClick={ascending}>
                <option value='lowest'>
                    Price low to high
                </option>
                <option value='highest'>
                    Price high to low
                </option>
            </select> */}
        </div>
    )
}

export default Sort