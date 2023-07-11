import { createContext, useReducer } from 'react'
import { PropTypes } from 'prop-types';
import { CartReducer } from './CartReducer';


export const CartContext = createContext();
const Storage = sessionStorage.getItem("cart")
    ? JSON.parse(sessionStorage.getItem("cart"))
    : [];

const initialState = { cartItems: Storage };

const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CartReducer, initialState);

    const addProduct = (payload) => {
        dispatch({ type: 'ADD', payload })
    }

    const removeProduct = (payload) => {
        dispatch({ type: 'REMOVE', payload })
    }

    const increaseQuantity = (payload) => {
        dispatch({ type: 'INCREASE', payload })
    }

    const decreaseQuantity = (payload) => {
        dispatch({ type: 'DECREASE', payload })
    }

    const clearBasket = () => {
        dispatch({ type: 'CLEAR', payload: undefined })
    }

    const getCartItems = () => {
        return state.cartItems;
    }

    const contextValues = {
        addProduct,
        removeProduct,
        increaseQuantity,
        decreaseQuantity,
        clearBasket,
        getCartItems,
        ...state
    }

    return (
        <CartContext.Provider value={contextValues}>
            {children}
        </CartContext.Provider>
    )
}
CartContextProvider.propTypes = {
    children: PropTypes.object
}
export default CartContextProvider;