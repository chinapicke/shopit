import Jumbotron from '../Components/Jumbotron'
import FooterIcons from '../Components/Banners/FooterIcons'
import HomepageBottomBanner from '../Components/Banners/HomepageBottomBanner'
import GlossierSet from '../Assets/Images/glossierSet.png'
import { useNavigate } from 'react-router-dom'
import SubscriptionBanner from '../Components/Banners/SubscriptionBanner'
import TopPicks from '../Components/TopPicks'
import HomepageText from '../Components/HomepageText'
import VeganProduct from '../Components/VeganProducts'
import '../Assets/Styles/Homepage.css'


function Homepage() {

  const navigate = useNavigate();
  const BtnDirectShop = () => {
    navigate('/shop')
  }

  const shopNavTopPicks = () => {
    navigate('/shop')
  }
  return (
    <div className='wholeHomepage'>
      <Jumbotron />
      <div className='popularProducts'>
      <div className="headerTopPicks flex flex-row pt-4">
        <h1 className='topPickHeader text-2xl'>Our Top Picks!</h1>
        <button onClick={shopNavTopPicks} className='topPicksSeeBtn text-sm text-black px-2 md:py-4 px-6 rounded-full ml-auto mr-4' type="button"> See more</button>
      </div>
        <TopPicks />
      </div>
      <div className='homepagePictures gap-4 h-5/6'>
        <div className='leftMidPicture h-5/6 w-auto'>
          <h3 className='pl-1 md:text-2xl md:py-2 md:pl-3 lg:text-3xl xl:text-5xl'>Fast and ecological solutions for you.</h3>
          <button onClick={BtnDirectShop} className='productsSeeBtn text-xs bg-black text-white px-2 my-2 md:my-6 ml-2 text-sm py-4 px-6 rounded-full ml-auto mr-4' type="button">See more</button>
          <p className='flex justify-end relative md:bottom-8'>from <span>£17.99</span></p>
          <img className='relative md:bottom-16'src='https://sdcdn.io/mac/gb/mac_sku_SK3709_1x1_2.png?width=1080&height=1080' alt='MAC eyeshadow'></img>
          
        </div>
        <div className='rightMidPicture flex flex-col md:h-5/6 xl:h-5/6'>
          <div> 
           <h3 className='beautyText text-md mx-2 mr-3 md:text-2xl md:ml-3 md:mt-2 md:w-5/12 lg:text-3xl mr-6'>Beauty has a purpose, <br></br>and the purpose is you.</h3>
          <button onClick={BtnDirectShop}  className='productsSeeBtn text-xs bg-black text-white px-2 my-2 md:my-6 ml-2 text-sm py-4 px-6 rounded-full ml-auto mr-4' type="button">See more</button>
          </div>
          <div className='md:relative bottom-20 '>          
            <p className='glossierPrice flex justify-end mr-5 text-md md:mr-10 text-2xl lg:mr-24 xl:-32'>£39.99</p>
          <p className='perSet flex justify-end mr-5 text-xs md:mr-10 lg:mr-24 xl:mr-32'>per set</p>
          </div>
          <img className='glossierSet md:bottom-20 relative lg:bottom-6 xl:bottom-6 ' src={GlossierSet} alt='GlossierSet'></img>
        </div>
      </div>
      <div>
        <VeganProduct />
      </div>
      <div className='homepageBottomBanner'>
        <HomepageBottomBanner />
      </div>
      <div>
        <HomepageText />
      </div>
      <div>
        <FooterIcons />
      </div>
      <div>
        <SubscriptionBanner />
      </div>
    </div>
  )
}

export default Homepage