import React from 'react'

function FooterIcons() {


  return (
    <div className='footerColumns grid grid-cols-3 gap-2 mx-6 my-8'>
      <div className='fastDelivery relative md:flex'>
        <div>
          <div className="yellowCircle absolute h-10 rounded-full top-0 w-10 "></div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="footerIcon">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
          </svg>
        </div>
        <div className='benefitText ml-2'>
          <h1 className='benefitHeader'>Delivery</h1>
          <p className='benefitSmallText' >Fast and environmentally sustainable delivery.</p></div>
      </div>
      <div className='productsIcon relative md:flex'>
        <div>
        <div className="yellowCircle absolute h-10 rounded-full top-0 w-10 "></div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="footerIcon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
        </svg>
        </div>
        <div className='benefitText ml-2'>
        <h1 className='benefitHeader'>Products</h1>
        <p className='benefitSmallText'>Tested and approved authentic products.</p>
        </div>
      </div>
      <div className='paymentsIcon relative md:flex'>
        <div>
        <div className="yellowCircle absolute h-10 rounded-full top-0 w-10 "></div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="footerIcon ">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
        </div>
        <div className='benefitText ml-2 mr-2'>
        <h1 className='benefitHeader'>Payment</h1>
        <p className='benefitSmallText'>Secured payments with a trusted third party.</p>
</div>

      </div>
    </div>
  )
}

export default FooterIcons