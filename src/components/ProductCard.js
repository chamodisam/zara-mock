import { useContext, useState } from "react";
import axios from "axios";
import AddIcon from '@mui/icons-material/Add';
import { Box, Card, CardMedia, CardContent, IconButton } from '@mui/material';
import TextTruncate from 'react-text-truncate';

import QuantityPicker from "./QuantityPicker";
import useItemCartInfoForProduct from "../hooks/useItemCartInfoForProduct";

import CartContext from '../contexts/cart';

function ProductCard({ item }) {
  const { cartItems, setCartItems } = useContext(CartContext);
  const { itemInfo: itemCartInfo } = useItemCartInfoForProduct({cartItems, productID: item.id});

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
      ? cartItems.map(cartItem => {
        return cartItem.item_id !== item.id
          ? cartItem
          : {
            item_id: item.id,
            quantity: newQuantity,
            price: item.price,
          } 
        })
      : [
          ...cartItems,
          {
            item_id: item.id,
            quantity: 1,
            price: item.price,
          }
        ];

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
        {renderAddToCart()}
      </Box>
      </CardContent>
    </Card>
    );
}

export default ProductCard;
