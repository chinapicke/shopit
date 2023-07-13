import React from 'react'
import { useNavigate } from "react-router-dom";
import CliniqueSet from "../../Assets/Images/cliniqueSet.png"

function HomepageBottomBanner() {
    const navigate = useNavigate();

    const BtnDirectShop = () => {
        navigate('/shop')
    }
  return (

    <div className='homepageBottomBanner grid grid-cols-2 mx-0 md:mx-20 my-3'>
      <div>
                <h1 className='w-44 py-1 px-3 text-lg'>Be confident,
            be beautiful,
            be you.
        </h1>
        <button onClick={BtnDirectShop} className='productsSeeBtn text-xs bg-black text-white px-2 my-2 mb-0 md:my-6 ml-2 text-sm py-4 px-6 rounded-full mr-auto ' type="button">See more</button>
      </div>
      <div>
      <p className='flex justify-end pb-1 mr-5 text-lg'>£89.99</p>
          <p className='perSet flex justify-end mr-5 text-xs md:mr-10 lg:mr-24 xl:mr-32'>per set</p>
        <div className='flex justify-end'>
        <img className='cliniqueSet ' src={CliniqueSet} alt='cliniqueSet'></img>
      </div>

        </div>
    </div>
  )
}

export default HomepageBottomBanner