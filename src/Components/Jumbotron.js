import React from 'react'
import '../Assets/Styles/jumbotron.css'

function Jumbotron() {
    return (
        <div className='heroBanner'>
            <div className='grid grid-cols-2'>
                <div className='bannerInfo font-extrabold'>
                    <h1>
                    We are the new definition of beauty, day and night.
                    </h1>
                    <h2>
                    Providing you with high quality products and fast delivery.
                    </h2>
                    <button>
                    See more
                    </button>
                </div>
                <div className='bannerPhoto'>
                    <img src='https://images.asos-media.com/products/ciate-london-4-in-1-makeup-brush/13617999-2?$n_640w$&wid=513&fit=constrain' alt='makeupBrushes' />
                </div>
            </div>
        </div>
    )
}

export default Jumbotron