import React from 'react'
import Jumbotron from '../Components/Jumbotron'
import '../Assets/Styles/Homepage.css'
import SkinCare from '../Assets/Images/skincare.png'

function Homepage() {
  return (
    <>
    <Jumbotron />
    <div className='popularProducts'>
        {/* MakeupAPI to find popular products, that change each time using math.random(), also only show 8 products with 2 rows of 4 cards each */}
    </div>
    <div className='homepagePictures'>
        <div>
            <h3>Fast and ecological solutions for you </h3>
            <button>See more</button>
            <img src='https://sdcdn.io/mac/gb/mac_sku_SK3709_1x1_2.png?width=1080&height=1080' alt='MAC eyeshadow'></img>
        </div>
        <div>
            <h3>Beauty has a purpose, and the purpose is you.</h3>
            <button>See more</button>
            <img src={SkinCare} alt='Skincare'></img>
        </div>
    </div>
    </>
  )
}

export default Homepage