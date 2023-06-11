import React, { useReducer } from 'react'
import { createContext } from 'react'

export const CartContext = createContext()

export const Context = (props) => {
    const reducer = (state, action) => {
        switch (action.type) {
            case "ADD":
                // if statement if array of state is empty 
                const tempState = state.filter((item) => action.payload.id === item.id);
                if (tempState.length > 0) {
                    return state
                }
                else {
                    return [...state, action.payload]
                }
            case "PLUS":
                const countPlus = state.map((item) => {
                    // if item id has the same id as the action that is being sent, which means that the item is available
                    if (item.id === action.payload.id) {
                        // if item is available then increase quantity of 1
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item
                    }
                })
                return countPlus
            case "MINUS":
                const countMinus = state.map((item) => {
                    if (item.id === action.payload.id) {
                        return { ...item, quantity: item.quantity - 1 };
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
                    item.id !== action.payload.id
                )
                return saveRemove

            default:
                return savedState
        }
    }

    const [state, dispatch] = useReducer(reducer, [])
    const [savedState, saveDispatch] = useReducer(savedReducer, [])

    const information = { state, dispatch, savedState, saveDispatch, }
    return (

        <CartContext.Provider
            value={information}>
            {props.children}
        </CartContext.Provider>
    )
}
