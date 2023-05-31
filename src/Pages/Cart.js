import { useContext } from "react"
import { CartContext } from "../Context/Context"

function Cart() {
  const GlobalState = useContext(CartContext);
  const state = GlobalState.state;
  // const dispatch = GlobalState.dispatch;


  const total = state.reduce((accumulator,currentValue)=>{
     return accumulator + currentValue.price* currentValue.quantity;}
     ,0);

  return (
    <div>
      <h1>This is the cart</h1>
      {state.map((item, index) => {
        return(
        <div className='addCard grid grid-cols-2' key={index}>
          <img src={item.api_featured_image} alt={item.brand + item.product_type}></img>
          {/* To display the brand name with as sentence case */}
          <p>{item?.brand ? item.brand.charAt(0).toUpperCase() + item.brand.slice(1).toLowerCase() : item.brand} {item?.name ? item.name.charAt(0).toUpperCase() + item.name.slice(1).toLowerCase() : item.name}</p>
          <p>{item?.product_type.charAt(0).toUpperCase() + item.product_type.slice(1).toLowerCase()}</p>
          <p>£{item.price}</p>
          <button>
            +
          </button>
          <p>{item.quantity}</p>
          <button>
            -
          </button>
          <p>{item.price * item.quantity}</p>
        </div>
      )})}

      <h1>Total:£{total}</h1>
    </div>
  )
}

export default Cart