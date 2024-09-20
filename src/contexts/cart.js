import { createContext, useState } from "react";

const CartContext = createContext();
function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const valuesToShare = {
        cartItems,
        setCartItems,
        totalQuantity,
        setTotalQuantity,
    };

    return (
        <CartContext.Provider value={valuesToShare} >
            {children}
        </CartContext.Provider>
    );
}

export { CartProvider };
export default CartContext;
