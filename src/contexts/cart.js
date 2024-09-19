import { createContext, useState } from "react";

const CartContext = createContext();
function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const valuesToShare = {
        cartItems,
        setCartItems,
    };

    return (
        <CartContext.Provider value={valuesToShare} >
            {children}
        </CartContext.Provider>
    );
}

export { CartProvider };
export default CartContext;
