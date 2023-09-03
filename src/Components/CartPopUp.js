import { AppContext } from '../Context/Context';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import SavedHook from '../Hooks/savedHook';
import '../Assets/Styles/Cart.css'


function CartPopUp() {

  const { setMobileOpen } = SavedHook()
  const { setCartDrawer } = SavedHook()

  const closePopUp =()=>{
    setCartDrawer(false)
  }

  const CartState = useContext(AppContext);
  const state = CartState.state;
  const dispatch = CartState.dispatch;


  const total = state.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price * currentValue.quantity
  }
    , 0)
  return (
    <div className='popUpCart absolute right-0 bg-white border-2 z-10 mr-3 '>
      <div className='innerPopupCart'>
      {state.length === 0 ?
        (
        <h1 className='popupEmpty text-center mt-20'>Your cart is empty </h1>
        ) :


        state.map((item, index) => {
          return (
              <div className='addCard grid gap-1' key={index}>
                <div className='flex items-center'>
                  <img className='w-18 h-18' src={item.api_featured_image} alt={item.brand + item.product_type}></img>
                  {/* To display the brand name with as sentence case */}
                </div>
                <div className='flex flex-col'>
                  <h1 className='cartPopupBrand md:text-sm lg:text-base'>{item?.brand ? item.brand.charAt(0).toUpperCase() + item.brand.slice(1).toLowerCase() : item.brand} {item?.name ? item.name.charAt(0).toUpperCase() + item.name.slice(1).toLowerCase() : item.name}</h1>
                  <div className='flex flex-row justify-between mr-3  lg:text-base'>
                    <h2 className='cartPopupPrice '><span className='circleShadowCartPop'>£{(item?.price === '0.0')
                      ? item.price = '8.50'
                      : Number(item.price).toFixed(2)}</span></h2>
                    <h3 className='cartPopupQuantity'>x{item.quantity}</h3>
                  </div>
                  <footer className='popUpItemDeleteBtn flex justify-center mt-auto mr-2 py-1 rounded-sm mb-1'>
                    <button className='cartPopupBin ' onClick={() => { console.log(item.id); dispatch({ type: "REMOVE", payload: item }) }}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                      </svg>
                    </button>
                  </footer>
                </div>
              </div>
          )
        })
      }
      </div>
    
      <div className='flex flex-col items-center border-t-4 text-sm'>
        {state.length > 0 && (
          <div>
            <h4 className='mt-2'> Total:£{total.toFixed(2)}</h4>
          </div>
        )}
        <div>
          <button className='gotocartBtn border-2 rounded-full py-1 px-2 mt-1'>
            <NavLink to='/cart' onClick={() => setMobileOpen(false)}>
              Go to cart
            </NavLink>
          </button>
        </div>
      </div>
      <div className='closePopUpCard flex justify-end' onClick={closePopUp}>
      <button className='text-sm' >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
</svg>

        </button>
      </div>
    </div >

  )
}


export default CartPopUp