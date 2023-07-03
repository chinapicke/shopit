import { useState } from "react"

const SavedHook = () => {
    const [likedIndex, setLikedIndex]= useState([])
  const changeIcon = (index) => {
    setLikedIndex(state => ({
      ...state, [index] // copies previous state 
        : !state[index] // updates the state by adding the index key this is how it identifies which index has been clicked
    }))
    
  }
  return{
    likedIndex, 
    changeIcon
  }
}

export default SavedHook