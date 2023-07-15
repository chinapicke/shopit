import purpleBrushes from '../Assets/Images/purple.png';

function HomepageText() {
  return (
    <div className='homepageText grid grid-cols-5 my-3 lg:my-10'>
        <div className='homepageTextPhoto col-span-2 lg:ml-6'>
            <img className='purpleBrushes' src={purpleBrushes} alt='Purple brushes' />
        </div>
        <div className='homepageTextRightSide col-span-3 md:mr-12 lg:mr-24 lg:pr-6'>
          <h1 className='homepageTextTitle mx-2'>Elegance is what you deserve.</h1>
            <p className='homepageTextParagraph mx-2 md:mt-4'>We believe that beauty thrives in diversity and discovery. Our purpose is to expand the way the world sees beauty by empowering each of us.</p>
            <br></br>
            <p className='homepageTextParagraph mx-2 '>Our commitment to our customer's beauty begins with ensuring we have the best selection of the products people love form the brands they trust. We have a range of products that is inclusive of all our users needs, whether it is chemical-free to vegan, we have it all. We always strive to promote responsible products and formulas, and to elevate sustainable sourcing and transparency in formulation and packaging.</p>
                        </div>
    </div>
  )
}

export default HomepageText