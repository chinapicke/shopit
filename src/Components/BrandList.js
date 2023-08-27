import React from 'react'
import Brands from '../Assets/Json/Brands.json'
import { useState } from 'react'

const BrandList = ({ brandDropDown }) => {

    const [dropDownOpen, setDropDownOpen] = useState(false)
    const [selected, setSelected] = useState('All')

    const clickBrandOption = (e) => {
        const productBrand = e.target.value;
        brandDropDown(productBrand)
        // changes text to show what has been selected
        setSelected(e.target.value)
    }

    return (

        <div>
            <label className='brandDroptown hidden md:inline-flex'>Brand
            </label>
            <select onClick={clickBrandOption}>
                {Brands.map((brandName) => {
                        return (
                            <option className={brandName.name} key={brandName.id} value={brandName.brand} >{brandName.name}</option>
                        )
                })}
            </select>
        </div>
    )
}

export default BrandList