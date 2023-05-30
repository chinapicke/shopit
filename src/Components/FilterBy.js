import React from 'react'

const FilterBy= ({onFilter})=> {
    
      const handleFilter = (e) => {
        const filteredOut = e.target.value
        onFilter(filteredOut)
    }
  return (
    <div>
            <select placeholder='Search by'
                onChange={handleFilter}>
                <option
                    value="Brand">Brand</option>
                <option
                    value="Product Type">Product Type</option>
            </select>

    </div>
)}

export default FilterBy