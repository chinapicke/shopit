import Jumbotron from '../Components/Jumbotron'
import FooterIcons from '../Components/Banners/FooterIcons'
import HomepageBottomBanner from '../Components/Banners/HomepageBottomBanner'
import GlossierSet from '../Assets/Images/glossierSet.png'
import { useNavigate } from 'react-router-dom'
import SubscriptionBanner from '../Components/Banners/SubscriptionBanner'
import TopPicks from '../Components/TopPicks'
import HomepageText from '../Components/HomepageText'
import '../Assets/Styles/Homepage.css'


function Homepage() {

  const navigate = useNavigate();
  const BtnDirectShop = () => {
    navigate('/shop')
  }
  return (
    <div className='wholeHomepage'>
      <Jumbotron />
      <div className='popularProducts'>
        <TopPicks />
      </div>
      <div className='homepagePictures gap-4'>
        <div className='leftMidPicture'>
          <h3>Fast and ecological solutions for you </h3>
          <button onClick={BtnDirectShop}>See more</button>
          <p>from <span>£17.99</span></p>
          <img src='https://sdcdn.io/mac/gb/mac_sku_SK3709_1x1_2.png?width=1080&height=1080' alt='MAC eyeshadow'></img>
          
        </div>
        <div className='rightMidPicture flex flex-col '>
          <div>
          <h3 className=' text-md mr-3 md:text-2xl mr-12 lg:text-3xl mr-6'>Beauty has a purpose, <br></br>and the purpose is you.</h3>
          <button onClick={BtnDirectShop}  className='productsSeeBtn text-xs bg-black text-white px-2 md:text-sm py-4 px-6 rounded-full ml-auto mr-4' type="button">See more</button>
          </div>
          <p className='glossierPrice flex justify-end mr-5 md:mr-10 lg:mr-24 xl:mr-32'>per set <span>£39.99</span></p>
          <img className='glossierSet' src={GlossierSet} alt='GlossierSet'></img>
        </div>
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