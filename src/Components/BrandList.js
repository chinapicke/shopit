import React from 'react'
import Brands from '../Assets/Json/Brands.json'
import { Menu, Transition } from '@headlessui/react'
// import { Fragment } from 'react'
import { useState } from 'react'

const BrandList = ({ brandDropDown }) => {

    const [dropDownOpen, setDropDownOpen] = useState(false)

    const clickBrandOption = (e) => {
        const productBrand = e.target.value;
        brandDropDown(productBrand)
    }

    return (

        <div>
            <button className='brandDroptown inline-flex' onClick={() => { setDropDownOpen(!dropDownOpen)}}>Select Brand
                {/* () => setDropDownOpen((prev) => !prev)}> */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
                </svg>
            </button>
            <div>

                {dropDownOpen ?
                    <div >
                        {Brands.map((brandName) => {
                            return (
                                < button className={brandName.name} key={brandName.id} value={brandName.brand} onClick={clickBrandOption}>
                                            {brandName.name}
                                </button>
                            )
                        }

                        )}
                    </div> : null
                }

            </div>
        </div>
    )
}

export default BrandList