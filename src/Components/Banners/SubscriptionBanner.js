import React from 'react'
import Present from '../../Assets/Images/present.png'
import YellowDot from '../../Assets/Images/Backgrounds/yellowdot.png'

function SubscriptionBanner() {
    return (
        <div className='subscriptionBanner py-6 static'>
            <img className='present w-42 h-32 z-10 absolute ml-4' src={Present} alt='present'></img>
            <div className='subscriptionColoured flex py-3 px-1'>
                <img className='background relative h-2/3 ' src={YellowDot} alt='subscriptionBackground' />
                <div className='subscriptionColouredText absolute ml-16 mt-3 text-right w-2/3'>
                <h1 className='w-2/3 ml-16'>We have something for you!</h1>
                <p className='w-2/3 ml-16'>Information about the subscription</p>
                <form className="formSubscription max-w-sm ml-5">
                    <div className="flex items-center border-b border-black py-2">
                        <input className="appearance-none bg-transparent border-none w-full text-black py-1 pl-10 leading-tight focus:outline-none placeholder-black  md:mr-3" type="email" placeholder="Your email" />
                        <button className="subscribeBtn bg-black hover:bg-yellow-300 border-black hover:border-black border-4 text-white py-1 px-1 rounded-full" type="button">
                            Subscribe
                        </button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
}

export default SubscriptionBanner