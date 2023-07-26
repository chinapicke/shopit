import React from 'react'

const OptionButtons= ({onButton})=> {

  const handleClick = (e) =>{
    const productCategory = e.target.value
    onButton(productCategory)
  }

  return (
    <>
    <h1 className='shopSideBarSubHeading flex justify-start mt-3'>Makeup</h1>
    <div className='flex flex-col produc32tTypeButton items-start' onClick={handleClick}>
        <button value='lush'>Blush</button>
        <button value='bronzer'>Bronzer</button>
        <button value='eyebrow'>Eyebrow</button>
        <button value='eyeliner'>Eyeliner</button>
        <button value='eyeshadow'>Eyeshadow</button>
        <button value='foundation'>Foundation</button>
        <button value='lip_liner'>Lip Liner</button>
        <button value='lipstick'>Lipstick</button>
        <button value='mascara'>Mascara</button>
        <button value='nail_polish'>Nail Polish</button>
    </div>
    </>
)}

export default OptionButtons