import { useContext } from "react";

import Container from '@mui/material/Container';
import { Box } from '@mui/material';

import CartRow from "../components/CartRow";

import CartContext from '../contexts/cart';

function Cart() {
    const { cartItems } = useContext(CartContext);
    return (
        // TODO: use a table to display cart items
        <Container style={{padding: '20px', alignItems: "center", display: "flex", minHeight: '80vh', justifyContent: "center"}}>
            <Box sx={{ width: '100%'}}>
                {cartItems.map(item => {
                    return <CartRow item={item} />
                })}
            </Box>
        </Container>
    );
}

export default Cart;
