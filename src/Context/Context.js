import React, { useReducer, useEffect } from 'react'
import { createContext } from 'react'

// this is what is exported to the children page and this is where the states will be 'pulled from'
export const CartContext = createContext()

export const Context = (props) => {
    // this uses useReducer which holds the states like useState except that it the state can be used for different things e.g. if we want to add or delete from the state
    // it returns the state and dispatch, we put the action in the dispatch
    // reducer accepts the current state and the action
    const reducer = (state, action) => {
        switch (action.type) {
            case "ADD":
                // if statement if array of state is empty 
                // filter state and it item is available add to the new state
                const tempState = state.filter((item) => action.payload.id === item.id);
                if (tempState.length > 0) {
                    return state
                }
                // spread the state with the action that has been called
                else {
                    return [...state, action.payload]
                }
            case "PLUS":
                const countPlus = state.map((item) => {
                    // if item id has the same id as the action that is being sent, which means that the item is available
                    if (item.id === action.payload.id) {
                        // if item is available then increase quantity of 1
                        return { ...item, quantity: Math.min(10, item.quantity + 1) };
                    } else {
                        return item
                    }
                })
                return countPlus
            case "MINUS":
                const countMinus = state.map((item) => {
                    if (item.id === action.payload.id) {
                        return { ...item, quantity: Math.min(0, item.quantity - 1) };
                    } else {
                        return item
                    }
                })
                return countMinus
            case "REMOVE":
                const cartRemove = state.filter((item) =>
                    // filter out the items that have been clicked on with a matching id 
                    item.id !== action.payload.id
                )
                return cartRemove
            default:
                return state
        }
    }

    const savedReducer = (savedState, action) => {
        switch (action.type) {
            case "SAVE":
                const savedTemp = savedState.filter((item) => action.saveIt.id === item.id);
                if (savedTemp.length > 0) {
                    return savedState
                }
                else {
                    return [...savedState, action.saveIt]
                }

            case "DELETE":
                const saveRemove = savedState.filter((item) =>
                    // filter out the items that have been clicked on with a matching id 
                    item.id !== action.delete.id
                )
                return saveRemove

            default:
                return savedState
        }
    }

    const [state, dispatch] = useReducer(reducer, [])
    const [savedState, saveDispatch] = useReducer(savedReducer, [], ()=>{
        // this calls to get the data from the setItems
        const localData = localStorage.getItem('savedItems')
        // if storage is empty then to store it by parsing the data, else return empty array 
        return localData ? JSON.parse(localData) : []
    })

    const information = { state, dispatch, savedState, saveDispatch, }

    // set the local storage of the keyvalue pair e.g. savedItems will be the key and then the savedState will be the value 
    useEffect(() => {
        localStorage.setItem('savedItems', JSON.stringify(savedState));
      }, [savedState]);
    return (

        <CartContext.Provider
            value={information}>
            {props.children}
        </CartContext.Provider>
    )
}
