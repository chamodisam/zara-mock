import { useContext } from "react";
import axios from "axios";
import AddIcon from '@mui/icons-material/Add';
import { Box, Card, CardMedia, CardContent, IconButton } from '@mui/material';
import TextTruncate from 'react-text-truncate';

import QuantityPicker from "./QuantityPicker";
import useItemCartInfoForProduct from "../hooks/useItemCartInfoForProduct";

import CartContext from '../contexts/cart';
import { useAuth } from "../auth/AuthContext";

function ProductCard({ item }) {
  const { cartItems, setCartItems, totalQuantity, setTotalQuantity, cartId } = useContext(CartContext);
  const { itemInfo: itemCartInfo } = useItemCartInfoForProduct({cartItems, productID: item.id});
  const { user } = useAuth();

  function renderAddToCart() {
    if (!!itemCartInfo) {
      return (
        <QuantityPicker
          onAdd={handleAddToCart}
          onRemove={handleRemoveFromCart}
          quantity={itemCartInfo.quantity}
        />
      );
    }
    return (
      <IconButton sx={{ borderRadius: 0 }} onClick={handleAddToCart}>
          <AddIcon />
      </IconButton>
    );
  }

  const handleAddToCart = async () => {
    const newQuantity = !!itemCartInfo
      ? itemCartInfo.quantity + 1
      : 1;

    const itemInCart = cartItems.find(i => i.item_id === item.id);
    const updatedItems = !!itemInCart
      ? cartItems.map(cartItem => { // updating existing item in cart
        return cartItem.item_id !== item.id
          ? cartItem
          : {
            ...cartItem,
            quantity: newQuantity,
          } 
        })
      : [ // adding new item to cart
          ...cartItems,
          {
            item_id: item.id,
            quantity: newQuantity,
            price: item.price,
            title: item.title,
            image: item.image,
          }
        ];

    const response = await axios.put(
      `http://localhost:3001/carts/${cartId}`,
      {
        id: cartId,
        user_id: user.user_id,
        items: updatedItems,
        total_quantity: totalQuantity + 1,
      }
    );
    setCartItems(response.data.items);
    setTotalQuantity(response.data.total_quantity);
  };

  const handleRemoveFromCart = async () => {
    const updatedItems = itemCartInfo.quantity > 1
      ? cartItems.map(cartItem => {
        return cartItem.item_id !== item.id
          ? cartItem
          : {
            item_id: item.id,
            quantity: cartItem.quantity - 1,
            price: item.price,
          } 
        })
      : cartItems.filter(i => i.item_id !== item.id);

    const response = await axios.put(
      'http://localhost:3001/carts/20',
      {
        id: cartId,
        user_id: user.user_id,
        items: updatedItems,
        total_quantity: totalQuantity - 1,
      }
    );
    setCartItems(response.data.items);
    setTotalQuantity(response.data.total_quantity);
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
          truncateText="…"
          text={item.title}
      />
      <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: '3px'}}>
        <span>
          {`$ ${item.price}`}
        </span>
        {renderAddToCart()}
      </Box>
      </CardContent>
    </Card>
    );
}

export default ProductCard;
