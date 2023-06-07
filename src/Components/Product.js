import { useState } from "react"

function Product({setProductOpen}) {


    return (
    <div className="bg-opacity-50 fixed">
        <div className='bg-white'>Modal content</div>
        <button onClick={()=>setProductOpen(false)}>Close modal</button>

    </div>
        
  )
}

export default Product