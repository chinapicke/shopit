import { AppContext } from '../Context/Context';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import SavedHook from '../Hooks/savedHook';


function CartPopUp() {

  const {setMobileOpen} = SavedHook()

  const CartState = useContext(AppContext);
  const state = CartState.state;
  const dispatch = CartState.dispatch;


  const total = state.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price * currentValue.quantity
  }
    , 0)
  return (
    <div className='absolute right-0 bg-white border-2'>
      {state.length === 0 ?
        (<h1>Your cart is empty </h1>) :


        state.map((item, index) => {
          return (
            <div className='addCard' key={index}>
              <img className='w-9 h-9' src={item.api_featured_image} alt={item.brand + item.product_type}></img>
              {/* To display the brand name with as sentence case */}
              <p>{item?.brand ? item.brand.charAt(0).toUpperCase() + item.brand.slice(1).toLowerCase() : item.brand} {item?.name ? item.name.charAt(0).toUpperCase() + item.name.slice(1).toLowerCase() : item.name}</p>
              <p>£{(item?.price === '0.0')
                ? item.price = '8.50'
                : Number(item.price).toFixed(2)}</p>
              <p>x{item.quantity}</p>
              <button onClick={() => { console.log(item.id); dispatch({ type: "REMOVE", payload: item }) }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
              </button>
            </div>
          )
        })
      }
      {state.length > 0 && (
        < h1 > Total:£{total.toFixed(2)}</h1>
      )}
      <button >
        <NavLink to='/cart' onClick={() => setMobileOpen(false)}>
          Go to cart
        </NavLink>
      </button>
    </div >

  )
}


export default CartPopUp