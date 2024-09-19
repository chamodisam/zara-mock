import { useContext } from "react";
import axios from "axios";
import { Box, Card, CardMedia, CardContent, Typography, IconButton, Icon } from '@mui/material';
import TextTruncate from 'react-text-truncate';
import AddIcon from '@mui/icons-material/Add';

import CartContext from '../contexts/cart';

function ProductCard({ item }) {
  const { cartItems, setCartItems } = useContext(CartContext);

  const handleAddToCart = async () => {
    const updatedItems = [
      ...cartItems,
      {
        item_id: item.id,
        quantity: 1,
        price: item.price,
      }
    ]

    const response = await axios.put(
      'http://localhost:3001/carts/20',
      {
        id: 20,
        user_id: 33,
        items: updatedItems
      }
    );
    setCartItems(response.data.items);
  };

    return (
        <Card sx={{ height: '100%', width: 350, display: 'flex', flexDirection: 'column'}}>
        <CardMedia
          component="img"
          height="300"
          image={item.image}
          sx={{ objectFit: 'contain' }}
        />
        <CardContent>
        <TextTruncate
            line={1}
            element="span"
            truncateText="…"
            text={item.title}
        />
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <span>
            {`$ ${item.price}`}
          </span>
          <IconButton sx={{ borderRadius: 0 }} onClick={handleAddToCart}>
            <AddIcon />
          </IconButton>
        </Box>
        </CardContent>
      </Card>
    );
}

export default ProductCard;
