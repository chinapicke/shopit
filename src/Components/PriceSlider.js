import React from 'react'
import { useState } from 'react'

function PriceSlider() {

const [priceMin, setPriceMin]=useState('')
const [priceMax, setPriceMax]=useState('')


const handleMin = event => {
    const value = Math.max(1, Math.min(65, Number(event.target.value)));
    setPriceMin(value);
};

const handleMax = event => {
    const value = Math.max(priceMin, Math.min(75, Number(event.target.value)));
    setPriceMax(value);
};


    return (
        <div className='priceSlider'>
            <h1>Select Price</h1>
            <input className='priceMin' type='number' placeholder='1' value={priceMin} onChange={handleMin}/>
            <p>Min</p>
            <input className='priceMax' type='number' placeholder='75'value={priceMax} onChange={handleMax}/>
            <p>Max</p>
        </div>
    )
}

export default PriceSlider