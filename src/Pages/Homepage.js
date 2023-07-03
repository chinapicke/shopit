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
    <>
      <Jumbotron />
      <div className='popularProducts'>
        <TopPicks />
      </div>
      <div className='homepagePictures gap-4'>
        <div className='leftMidPicture'>
          <h3>Fast and ecological solutions for you </h3>
          <button onClick={BtnDirectShop}>See more</button>
          <img src='https://sdcdn.io/mac/gb/mac_sku_SK3709_1x1_2.png?width=1080&height=1080' alt='MAC eyeshadow'></img>
          <p>from <span>£17.99</span></p>
        </div>
        <div className='rightMidPicture'>
          <h3>Beauty has a purpose, and the purpose is you.</h3>
          <button onClick={BtnDirectShop}>See more</button>
          <img src={GlossierSet} alt='ClossierSet'></img>
          <p>per set <span>£39.99</span></p>
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
    </>
  )
}

export default Homepage