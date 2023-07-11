import { createContext, useReducer } from 'react'
import { PropTypes } from 'prop-types';
import { CartReducer } from './CartReducer';


export const CartContext = createContext();

const initialState = { cartItems: [] }

const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CartReducer, initialState);

    const addProduct = payload => {
        dispatch({ type: 'ADD' }, payload)
    }

    const contextValues = {
        addProduct,
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