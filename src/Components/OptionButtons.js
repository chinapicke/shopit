import React from 'react'

const OptionButtons= ({onButton})=> {

  const handleClick = (e) =>{
    const productCategory = e.target.value
    onButton(productCategory)
  }

  return (
    <>
    <h1 className='shopSideBarSubHeading flex justify-start mt-3 pl-1 justify-center sm:justify-none'>Makeup</h1>
    <div className='text-center md:flex-col md:flex productTypeButton sm:items-start pl-3' onClick={handleClick}>
        <button className='pr-2' value='blush'>Blush</button>
        <button className='pr-2' value='bronzer'>Bronzer</button>
        <button className='pr-2'value='eyebrow'>Eyebrow</button>
        <button className='pr-2' value='eyeliner'>Eyeliner</button>
        <button className='pr-2'value='eyeshadow'>Eyeshadow</button>
        <button className='pr-2' value='foundation'>Foundation</button>
        <button className='pr-2' value='lip_liner'>Lip Liner</button>
        <button className='pr-2' value='lipstick'>Lipstick</button>
        <button className='pr-2' value='mascara'>Mascara</button>
        <button className='pr-2' value='nail_polish'>Nail Polish</button>
    </div>
    </>
)}

export default OptionButtons