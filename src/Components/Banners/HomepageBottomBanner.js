import React from 'react'
import { useNavigate } from "react-router-dom";
import CliniqueSet from "../../Assets/Images/cliniqueSet.png"

function HomepageBottomBanner() {
    const navigate = useNavigate();

    const BtnDirectShop = () => {
        navigate('/shop')
    }
  return (

    <div className='homepageBottomBanner'>
        <img src={CliniqueSet} alt='cliniqueSet'></img>
        <p>per set <span>£89.99</span></p>
        <h1>Be confident,
            be beautiful,
            be you.
        </h1>
        <button onClick={BtnDirectShop}>See more</button>
    </div>
  )
}

export default HomepageBottomBanner