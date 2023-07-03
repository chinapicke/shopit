import React from 'react'
import Present from '../../Assets/Images/present.png'

function SubscriptionBanner() {
    return (
        <div className='subscriptionBanner'>
            <img src={Present} alt='present'></img>
            <h1>We have something for you!</h1>
            <p>Information about the subscription</p>
            <form className="w-full max-w-sm">
                <div className="flex items-center border-b border-black py-2">
                    <input className="appearance-none bg-transparent border-none w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none placeholder-black" type="text" placeholder="Your email"  />
                        <button className="flex-shrink-0 bg-black hover:bg-yellow-300 border-black hover:border-black text-sm border-4 text-white py-1 px-2 rounded" type="button">
                            Subscribe
                        </button>
                </div>
            </form>
        </div>
    )
}

export default SubscriptionBanner