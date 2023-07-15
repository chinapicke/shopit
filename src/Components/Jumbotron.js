import React from 'react'
import '../Assets/Styles/jumbotron.css'
import Splash from '../Assets/Images/splash.png'
import 'animate.css';



function Jumbotron() {
    return (
        <div className='heroBanner'>
            <div className='grid grid-cols-2'>
                <div className='bannerInfo mx-3 mt-3 font-bold md:ml-9 lg:ml-12'>
                    <h1 className='bannerHeader text-center md:mb-3 lg:mb-0'>
                    We are the new definition of beauty, day and night.
                    </h1>
                    <h2 className='bannerSubheader mb-2 text-center md:mb-0'>
                    Providing you with high quality products and fast delivery.
                    </h2>
                </div>
                <div className='bannerPhoto flex'>
                    <img src={Splash} alt='makeupBrushes' className='splashImg relative mb-2' />
                </div>
            </div>
        </div>
    )
}

export default Jumbotron