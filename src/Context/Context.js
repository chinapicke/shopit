import React, { useReducer } from 'react'
import { createContext } from 'react'

export const CartContext = createContext()
export const SavedContext = createContext()

export const Context = (props) => {
    const reducer = (state,action)=>
    {
        switch(action.type){
            case "ADD":
                // if statement if array of state is empty 
                const tempState = state.filter((item)=> action.payload.id===item.id);
                if (tempState.length>0)
                {
                    return state
                }
                else{
                   return [...state, action.payload]
                }

y
            default: 
            return state
        }
    }
    const [state, dispatch]= useReducer(reducer, [])
    const information = {state,dispatch}
    return (
    <CartContext.Provider
    value={information}>
        {props.children}
    </CartContext.Provider>
  )
}
