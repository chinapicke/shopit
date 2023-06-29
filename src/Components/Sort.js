import React from 'react'

const Sort = ({ onSort }) => {


    const ascending = () => {
        const sortIt = console.log('Sorted')
        onSort(sortIt)
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