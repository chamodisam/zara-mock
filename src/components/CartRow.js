import { useContext } from "react";
import axios from "axios";
import { Box, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'; // This will be the "X" icon

import CartContext from '../contexts/cart';

function CartRow({ item }) {
  const { cartItems, setCartItems, totalQuantity, setTotalQuantity } = useContext(CartContext);

  const handleRemoveFromCart = async () => {
    const updatedItems = cartItems.filter(i => i.item_id !== item.item_id);

    const response = await axios.put(
      'http://localhost:3001/carts/20',
      {
        id: 20,
        user_id: 33,
        items: updatedItems,
        total_quantity: totalQuantity - item.quantity,
      }
    );
    setCartItems(response.data.items);
    setTotalQuantity(response.data.total_quantity);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '30px 0',
        width: '100%',
        borderBottom: '1px solid #eee',
        borderTop: '1px solid #eee',
        flexWrap: 'nowrap',
      }}
    >
      {/* Product Image */}
      <Box sx={{ width: '100px', height: '100px' }}>
        <img 
          src={item.image} 
          alt={item.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </Box>

      {/* Product Info */}
      <Box sx={{ flex: 2, paddingLeft: '20px' }}>
        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
          {item.title}
        </Typography>
      </Box>

      {/* Quantity */}
      <Box sx={{ flex: 1, textAlign: 'center' }}>
        <Typography variant="body2">
          {`Qty: ${item.quantity}`}
        </Typography>
      </Box>

      {/* Price */}
      <Box sx={{ flex: 1, textAlign: 'right' }}>
        <Typography variant="body2">
          {`$ ${item.price.toLocaleString()}`}
        </Typography>
      </Box>

      {/* Remove Button */}
      <Box sx={{ paddingLeft: '20px' }}>
        <IconButton aria-label="remove" onClick={handleRemoveFromCart}>
          <DeleteIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default CartRow;
