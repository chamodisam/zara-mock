function useItemCartInfoForProduct({ cartItems, productID }) {
    const itemInfo = cartItems.find((item) => item.item_id === productID );

    return { itemInfo };
}

export default useItemCartInfoForProduct;
