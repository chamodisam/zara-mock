import { createContext, useEffect, useState } from "react";
import { useAuth } from "../auth/AuthContext";
import axios from "axios";

const CartContext = createContext();
function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [cartId, setCartId] = useState();

    const { user } = useAuth();

    useEffect(() => {
        if (user) {
            axios.get(`http://localhost:3001/carts?user_id=${user.user_id}`).then((res) => {
                if (res.data) {
                    setCartItems(res.data[0].items);
                    setTotalQuantity(res.data[0].total_quantity);
                    setCartId(res.data[0].id);
                }
            });
        } else {
            setCartItems([]);
            setTotalQuantity(0);
            setCartId(null);
        }
    }, [user]);

    const valuesToShare = {
        cartItems,
        setCartItems,
        totalQuantity,
        setTotalQuantity,
        cartId
    };

    return (
        <CartContext.Provider value={valuesToShare} >
            {children}
        </CartContext.Provider>
    );
}

export { CartProvider };
export default CartContext;
