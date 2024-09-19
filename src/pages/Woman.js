import React, {useState, useEffect, useCallback} from 'react';
import axios from "axios";
import { Box, Grid2 } from '@mui/material';
import ProductCard from "../components/ProductCard";

function Woman() {
    const [products, setProducts] = useState([]);

    const fetchAllProducts = useCallback(async () => {
        const response = await axios.get('http://localhost:3001/clothes');
        setProducts(response.data);
    }, []);

    useEffect(() => {
        fetchAllProducts();
    }, [fetchAllProducts]);

    return (
        <Box sx={{ paddingTop: '20px', display: 'flex', justifyContent: 'center', margin: 5}}>
            <Grid2 
                container 
                spacing={4} 
                sx={{ maxWidth: '100%' }}  // Ensures the grid does not overflow
                justifyContent='center'
            >
                {products?.map((product) => (
                    <Grid2 item xs={12} sm={6} md={4} lg={3} key={product.id}>
                        <ProductCard item={product} />
                    </Grid2>
                ))}
            </Grid2>
            </Box>
    );
}

export default Woman;
