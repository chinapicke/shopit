import React, { useReducer, useEffect } from 'react'
import { createContext} from 'react'

// this is what is exported to the children page and this is where the states will be 'pulled from'
export const AppContext = createContext()

export const Context = (props) => {
    // this uses useReducer which holds the states like useState except that it the state can be used for different things e.g. if we want to add or delete from the state
    // it returns the state and dispatch, we put the action in the dispatch
    // reducer accepts the current state and the action
    // Different button functions on the cart page
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
                    console.log([...state, action.payload])
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

    // Different button functions on the saved page
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

    // const productReducer = (productState, action) => {
    //     switch (action.type) {
    //         case "ADD":
    //             // if statement if array of state is empty 
    //             // filter state and it item is available add to the new state
    //             const productView = productState.filter((item) => action.payload.id === item.id);
    //             if (productView.length > 0) {
    //                 return productState
    //             }
    //             // spread the state with the action that has been called
    //             else {
    //                 console.log([...productState, action.payload])
    //                 return [...productState, action.payload]
    //             }
    //         case "PLUS":
    //             const countPlus = productState.map((item) => {
    //                 // if item id has the same id as the action that is being sent, which means that the item is available
    //                 if (item.id === action.payload.id) {
    //                     // if item is available then increase quantity of 1
    //                     return { ...item, quantity: Math.min(10, item.quantity + 1) };
    //                 } else {
    //                     return item
    //                 }
    //             })
    //             console.log(item)
    //             console.log(countPlus)
    //             return countPlus
    //         default:
    //             return productState
    //     }
    // }

    const productReducer = (singleState, action) => {
        switch (action.type) {
            case 'ONEMORE':
                const countPlus = console.log({...singleState})
                return countPlus
            default:
                return singleState
        }
    }

    const [singleState, singleDispatch] = useReducer(productReducer, [])
    // const [productState, productdispatch] = useReducer(productReducer, [])




    // function to get cart into local storage
    const [state, dispatch] = useReducer(reducer, [], () => {
        const localCartData = localStorage.getItem('cartItems')
        return localCartData ? JSON.parse(localCartData) : []
    })


    // function to get saved into local storage
    const [savedState, saveDispatch] = useReducer(savedReducer, [],
        () => {
            //     // this calls to get the data from the setItems
            const localSavedData = localStorage.getItem('savedItems')
            //     // if storage is empty then to store it by parsing the data, else return empty array 
            return localSavedData ? JSON.parse(localSavedData) : []
        })


        const cartLength = state.length

    // function to save to local storage
    const information = { cartLength, state, dispatch, savedState, saveDispatch, singleState, singleDispatch}
    // set the local storage of the keyvalue pair e.g. savedItems will be the key and then the savedState will be the value 
    useEffect(() => {
        localStorage.setItem('savedItems', JSON.stringify(savedState))
        localStorage.setItem('cartItems', JSON.stringify(state))
    }, [savedState, state]);

    // set local storage with a time out after  24 hours
    const twentyFourHours = 24 * 60 * 60
    setTimeout(() => localStorage.removeItem('cartItems'), twentyFourHours * 1000);

    return (

        <AppContext.Provider
            value={information}>
            {props.children}
        </AppContext.Provider>
    )

   
}


