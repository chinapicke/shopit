import React from 'react'
import { useContext} from "react"
import { AppContext } from '../Context/Context';

function Saved() {
  const SaveState = useContext(AppContext);
  const savedState = SaveState.savedState;
  const saveDispatch = SaveState.saveDispatch;

  return (
    <div>
      {savedState.length === 0 ?
        (<h1>You have no products saved</h1>) :

        savedState.map((item, index) => {
          return (
            <div className='savedCard grid grid-cols-2' key={index}>
              <img src={item.api_featured_image} alt={item.brand + item.product_type}></img>
              {/* To display the brand name with as sentence case */}
              <p>{item?.brand ? item.brand.charAt(0).toUpperCase() + item.brand.slice(1).toLowerCase() : item.brand} {item?.name ? item.name.charAt(0).toUpperCase() + item.name.slice(1).toLowerCase() : item.name}</p>
              <p>{item?.product_type ? item.product_type.charAt(0).toUpperCase() + item.product_type.slice(1).toLowerCase().split('_').join(' ') : item.product_type}</p>
              <p>£{Number(item.price).toFixed(2)}</p>
              <button onClick={() => { saveDispatch({ type: "DELETE", delete: item }) }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
              </button>

            </div>
          )
        })
      }

    </div>
  )

}

export default Saved