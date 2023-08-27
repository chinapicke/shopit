import React from 'react'
import Brands from '../Assets/Json/Brands.json'


const BrandList = ({ brandDropDown }) => {

    

    const clickBrandOption = (e) => {
        const productBrand = e.target.value;
        brandDropDown(productBrand)
        // changes text to show what has been selected
    }

    return (

        <div className='md:flex md:flex-col xl:flex-row '>
            <label className='brandDroptown hidden md:inline-flex justify-center'>Brand</label>
            <select className='rightColumSelectBanner rounded-full shadow-inner  p-1' onChange={clickBrandOption}>
                {Brands.map((brandName) => {
                        return (
                            <option className='justify-center text-center' id={brandName.name} key={brandName.id} value={brandName.brand} >{brandName.name}</option>
                        )
                })}
            </select>
        </div>
    )
}

export default BrandList