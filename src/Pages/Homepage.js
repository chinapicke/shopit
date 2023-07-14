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
      <div className='homepagePictures gap-4'>
        <div className='leftMidPicture '>
          <h3 className='pl-1 md:text-2xl md:py-2 md:pl-3 lg:text-3xl'>Fast and ecological solutions for you.</h3>
          <button onClick={BtnDirectShop} className='productsSeeBtn text-xs bg-black text-white px-2 my-2 md:my-6 ml-2 text-sm py-4 px-6 rounded-full  mr-4 lg:text-md' type="button">See more</button>
          <p className='priceLeft flex justify-end relative mr-2 xl:mr-10'>£17.99</p>
          <p className='fromWord flex justify-end mr-5 text-xs md:mr-5 lg:mr-3 xl:mr-12'>from</p>
          <img className='mac relative 'src='https://sdcdn.io/mac/gb/mac_sku_SK3709_1x1_2.png?width=1080&height=1080' alt='MAC eyeshadow'></img>
        </div>
        <div className='rightMidPicture flex flex-col'>
          <div> 
           <h3 className='beautyText text-md mx-2 mr-3 md:text-2xl md:ml-3 md:mt-2 md:w-5/12 lg:text-3xl mr-6'>Beauty has a purpose, <br></br>and the purpose is you.</h3>
          <button onClick={BtnDirectShop}  className='productsSeeBtn text-xs bg-black text-white px-2 my-2 md:my-6 ml-2 text-sm py-4 px-6 rounded-full mr-4 lg:text-md ml-2' type="button">See more</button>
          </div>
          <div className='md:relative bottom-20 '>          
            <p className='glossierPrice relative flex justify-end mr-5 text-sm md:mr-10 md:text-2xl lg:mr-24 xl:-32'>£39.99</p>
          <p className='perSet flex justify-end mr-5 text-xs md:mr-10 lg:mr-24 xl:mr-32'>per set</p>
          </div>
          <img className='glossierSet relative ' src={GlossierSet} alt='GlossierSet'></img>
        </div>
      </div> 
      <div>
        <VeganProduct />
      </div>
      <div>
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