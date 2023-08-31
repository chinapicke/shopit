import { useState } from "react"

const SavedHook = () => {
    const [likedIndex, setLikedIndex]= useState([])
    const [cartDrawer, setCartDrawer] = useState(false);

  const changeIcon = (index) => {
    setLikedIndex(state => ({
      ...state, [index] // copies previous state 
        : !state[index] // updates the state by adding the index key this is how it identifies which index has been clicked
    }))
    
  }

  const changeIconProduct = () =>{
    setLikedIndex(current => !current)
  }

  const openDrawer = () => {
    setCartDrawer(current => !current);
}

const [mobileOpen, setMobileOpen] = useState(false);

  return{
    likedIndex, 
    changeIcon, 
    cartDrawer,
    setCartDrawer,
    openDrawer,
    changeIconProduct,
    mobileOpen,
    setMobileOpen,
  }
}

export default SavedHook