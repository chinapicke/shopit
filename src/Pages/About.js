import '../Assets/Styles/About.css'
import { useRef } from 'react';

function About() {

  const topAbout = useRef();

const clickTopPg =()=>{
  setTimeout(() => {
    topAbout.current?.scrollIntoView({ behavior: "smooth"});

  }, 0)
}

  return (
    <div className='aboutPage md:my-4 md:mx-4' ref={clickTopPg}>
      <div className='aboutImgContainer '>

      </div>
    <div className='flex justify-center flex-col'>
    <h1 className='aboutMainHeader font-semibold mb-3 lg:mb-4 '>THINK BEAUTY, THINK US.</h1>

    <p className='aboutText '>With practically 850+ curated, very much valued and 100% certified brands,
       ShopIt prides itself on offering a far-reaching choice of cosmetics for everyone.
       We expect to if you don’t mind heading off to the most distant corners of the nation to contact you!</p>

    <h2 className='aboutHeader my-2 lg:my-4 font-semibold'>Adore It. Offer It. Live It.</h2>
    <p className='aboutText'>Today ShopIt transports over the length and expansiveness of the nation to pretty much every postal
      division utilizing the administrations of driving and dependable dispatch organizations.</p>

    <h2 className='aboutHeader my-2 lg:my-4 font-semibold' >Our promise</h2>
    <p className='aboutText'>We are focused on curating the best of characteristic beauty without trading off on proficiency and guaranteeing that every one of our items is cold-bloodedness-free.</p>
    </div>
    <button className="toTopBtn border-4 flex justify-center items-center border-zinc-400" onClick={clickTopPg}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </button>
  </div>
    
  )
}

export default About