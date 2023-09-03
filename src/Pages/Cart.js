import { useContext } from "react"
import { AppContext } from "../Context/Context"
import '../Assets/Styles/Cart.css'

function Cart() {
  const CartState = useContext(AppContext);
  const state = CartState.state;
  const dispatch = CartState.dispatch;


  const total = state.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price * currentValue.quantity
  }
    , 0)

  console.log(typeof total)



  return (
    <div className="cartPage mx-2 my-2 flex justify-center">
      <div className='innerCartPage'>
      {state.length === 0 ?
        (<h1 className="py-36 text-center text-lg">Your cart is empty!</h1>) :


        state.map((item, index) => {
          return (
            <div className='addCardCart my-4' key={index}>
              <div className='innerAddcardCartPg grid grid-cols-2 '>
                <div className='flex items-center'>
                  <img className='w-36 h-40 py-2 px-2 md:w-44 md:h-44 lg:w-48 lg:h-48 xl:w-56 xl:h-56' src={item.api_featured_image} alt={item.brand + item.product_type}></img>
                  {/* To display the brand name with as sentence case */}
                </div>
                <div className="flex flex-col justify-center">
                  <h1 className="cartProductType mt-1 lg:text-xl lg:mt-0">{item?.product_type ? item.product_type.charAt(0).toLowerCase() + item.product_type.slice(1).toLowerCase().split('_').join(' ') : item.product_type}</h1>
                  <h2 className="cartBrand lg:text-lg xl:my-2">{item?.brand ? item.brand.charAt(0).toUpperCase() + item.brand.slice(1).toLowerCase() : item.brand} {item?.name ? item.name.charAt(0).toUpperCase() + item.name.slice(1).toLowerCase() : item.name}</h2>
                  <h3 className='cartPrice text-center my-1 lg:text-xl'><span className='circleShadowCartPop'>£{(item?.price === '0.0')
                    ? item.price = '8.50'
                    : Number(item.price).toFixed(2)}</span></h3>
                  <div className="cartQuantityCounter flex flex-row justify-between mx-3 my-4 md:mx-5 lg:mx-10">
                    <button className='cartPlus' onClick={() => dispatch({ type: "PLUS", payload: item })}>
                      +
                    </button>
                    <p className='cartQuantity bg-white px-3 py-1 border-2 pt-0.5 lg:px-5'>{item.quantity}</p>
                    <button className='cartMinus' onClick={() => {
                      if (item.quantity > 1) {
                        dispatch({ type: "MINUS", payload: item });
                      } else {
                        dispatch({ type: "REMOVE", payload: item });
                      }
                    }}>
                      -
                    </button>
                  </div>
                  <h4 className='totalCartItemPrice my-2 text-center font-black md:hidden'> £{(item.price * item.quantity).toFixed(2)}</h4>
                </div>
                <div className="flex items-center justify-center">
                  <h4 className='totalCartPriceLargeScreen my-2 text-center hidden md:block '> £{(item.price * item.quantity).toFixed(2)}</h4>
                </div>
                <div className='cartDeleteLargeScreen hidden md:flex justify-center items-center'>
                <button className='cartPopupBin ' onClick={() => { console.log(item.id); dispatch({ type: "REMOVE", payload: item }) }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
                </button>
                </div>
              </div>
              <footer className='popUpItemDeleteBtn flex justify-center mt-auto mr-1 py-1 rounded-sm mb-1 md:hidden'>
                <button className='cartPopupBin ' onClick={() => { console.log(item.id); dispatch({ type: "REMOVE", payload: item }) }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
                </button>
              </footer>

            </div>
          )
        })
      }
      {state.length > 0 && (
        <div className="subTotalArea flex flex-col-reverse items-end ">
          <div className="grid grid-cols-2 gap-6 md:mr-28 lg:mr-40 lg:text-lg xl:mr-52">
            <div>
            <h1 className="totalText text-start ">Total:</h1>
            <h2 className="totalText">Delivery:</h2>
            <h3 className="font-semibold">Subtotal:</h3>
            </div>
            
            <div>
            <h1 className="text-end totalText">£{total.toFixed(2)}</h1>
            {
            total >= 30.00 ?
              <h2 className="text-end totalText">FREE</h2> :
              <h2 className="text-end totalText">£2.99</h2>
          }
          {
          total >= 30.00 ?
              <h2 className="text-end font-semibold">£{total.toFixed(2)}</h2> :
              <h2 className="text-end font-semibold">£{(parseInt(total.toFixed(2)) + 2.99).toFixed(2)} </h2>
          }

            </div>
          </div>
        </div>
      )}
    </div >
    </div>

  )
}

export default Cart