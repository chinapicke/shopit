import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFacebookF ,faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
function Footer() {

const navigate = useNavigate()

  return (
    <div className='footerSection grid grid-cols-2 md:grid-cols-5'>
      <div className='footerLogo'>
        ShopIt
      </div>
      <div className='aboutFooter'>
        <ul className='footerSubtitles'onClick={()=>navigate("/about")}>about
          <li>About ShopIt</li>
          <li>Careers</li>
          <li>Stands Social Impact</li>
          <li>Affilates</li>
          <li>Supply Chain Transparency</li>
          <li>Sitemap</li>
          <li>Global Sites</li>
        </ul>
      </div>
      <div className='makeupTypes'>
        <ul className='footerSubtitles columns-2 pt-2'  onClick={()=>navigate("/shop")}>makeup
          <li className='pt-1 '>Blush</li>
          <li>Bronzer</li>
          <li>Eyebrow</li>
          <li>Eyeliner</li>
          <li className='pt-6'>Eyeshadow</li>
          <li>Foundation</li>
          <li>Lip Liner</li>
          <li>Lipstick</li>
          <li>Mascara</li>
          <li>Nail Polish</li>
        </ul>
      </div>
      <div className='contactFooter'>
        <ul className='footerSubtitles'>contact
          <li>ShopIt</li>
          <li>2c Covent Garden</li>
          <li>London</li>
          <br></br>
          <li>Tel: +44 123 456 789</li>
          <li>Fax: +44 124 456 789</li>
          <li>Email: info@shopIt.com</li>
        </ul>
      </div>
      <div className='socialIcons flex sm:flex-row md:flex-col'>
      <FontAwesomeIcon icon={faFacebookF} style={{color: "#fdd261",}}/>
      <FontAwesomeIcon icon={faInstagram} style={{color: "#fdd261",}}/>
      <FontAwesomeIcon icon={faTwitter} style={{color: "#fdd261",}}/>
      </div>

    </div>
  )
}

export default Footer