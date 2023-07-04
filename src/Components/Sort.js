import React from 'react'

const Sort = ({ onSort }) =>{
// const {products} = useAxios('https://makeup-api.herokuapp.com/api/v1/products.json')
 const handleSort = ()=>{
    onSort()
 }


    return (
        <div>
            <label>Sort By</label>
            <button onClick={handleSort}>low to high </button>
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