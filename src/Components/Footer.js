import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFacebookF ,faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
function Footer() {

const navigate = useNavigate()

  return (
    <>
    <div className='footerSection grid grid-cols-2 py-4 px-4 md:grid-cols-5'>
      <div className='footerLogo mx-2 my-3 text-3xl md:mx-4 my-1 pr-2'>
        ShopIt
      </div>
      <div className='aboutFooter pl-2 md:pl-7'>
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
      <div className='makeupTypes pr-4 pt-2 md:pt-0 pl-4'>
        <ul className='footerSubtitles columns-2 pt-2'  onClick={()=>navigate("/shop")}>makeup
          <li className='pt-1 '>Blush</li>
          <li>Bronzer</li>
          <li>Eyebrow</li>
          <li>Eyeliner</li>
          <li>Eyeshadow</li>
          <li className='pt-7'>Foundation</li>
          <li>Lip Liner</li>
          <li>Lipstick</li>
          <li>Mascara</li>
          <li>Nail Polish</li>
        </ul>
      </div>
      <div className='contactFooter pl-2 pt-2 md:pt-0 pl-4'>
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
      <div className='socialIcons flex justify-evenly flex-row w-2/3 md:flex-col h-2/3'>
      <FontAwesomeIcon icon={faFacebookF} style={{color: "#fdd261",}}/>
      <FontAwesomeIcon icon={faInstagram} style={{color: "#fdd261",}}/>
      <FontAwesomeIcon icon={faTwitter} style={{color: "#fdd261",}}/>
      </div>
    </div>
    <h1 className='copywrite'>Copyright © 2023 ShopIt UK, Inc. All rights reserved. Terms of Use| Privacy Policy</h1>
    </>
  )
}

export default Footer