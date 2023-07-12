import React from 'react'
import Present from '../../Assets/Images/present.png'
import YellowDot from '../../Assets/Images/Backgrounds/yellowdot.png'

function SubscriptionBanner() {
    return (
        <div className='subscriptionBanner mx-4 py-3 lg:ml-10 '>
            <div className='presentBackground relative flex justify-center ml-6 '>
                <img className='background py-3 ' src={YellowDot} alt='subscriptionBackground' />
                <img className='present' src={Present} alt='present'></img>
                <div className='subscriptionColouredText absolute text-right '>
                    <h1 >We have something for you!</h1>
                    <p className='pSubscription'>Join our weekly email for discount and offers!</p>
                    <form className="formSubscription max-w-sm ml-5 pt-1">
                        <div className="flex items-center border-b border-black pl-8 xl:pl-16">
                            <input className="appearance-none bg-transparent border-none w-full text-black py-1  leading-tight focus:outline-none placeholder-black " type="email" placeholder="Your email" />
                        </div>
                        <button className="subscribeBtn bg-black hover:bg-yellow-300 border-black hover:border-black border-4 text-white py-1 px-1 rounded-full" type="button">
                                Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SubscriptionBanner