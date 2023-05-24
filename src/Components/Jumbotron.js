import React from 'react'
import '../Styles/jumbotron.css'

function Jumbotron() {
    return (
        <div className='heroBanner'>
            <div className='grid grid-cols-2'>
                <div className='bannerInfo font-extrabold'>
                    This is where the banner info goes
                </div>
                <div className='bannerPhoto'>
                    <img src='https://images.asos-media.com/products/ciate-london-4-in-1-makeup-brush/13617999-2?$n_640w$&wid=513&fit=constrain' alt='makeupBrushes' />
                </div>
            </div>
        </div>
    )
}

export default Jumbotron