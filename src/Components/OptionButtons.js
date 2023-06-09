import React from 'react'

const OptionButtons= ({onButton})=> {

  const handleClick = (e) =>{
    const productCategory = e.target.value
    onButton(productCategory)
  }

  return (
    <div className='productTypeButton' onClick={handleClick}>
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
)}

export default OptionButtons