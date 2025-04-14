import { useContext, useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, InputBase, IconButton, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { If, Then, Else } from 'react-if';

import CartContext from '../contexts/cart';
import { useAuth } from '../auth/AuthContext';

function NavBar() {
    const { totalQuantity } = useContext(CartContext);
    const [total, setTotal] = useState(totalQuantity);
    const { user, logout } = useAuth();

    console.log(user);

    useEffect(() => {
      setTotal(totalQuantity);
    }, [totalQuantity]);

    return (
        <AppBar position="static" style={{ backgroundColor: 'transparent', boxShadow: 'none', padding: '20px'}}>
          <Toolbar>
            {/* Left Section: Navigation Links */}
            <Box sx={{ display: 'flex', gap: '20px', fontWeight: 'bold' }}>
              <Link to="/"><Button color="inherit" style={{ color: 'black' }}>HOME</Button></Link>
              <Link to="/woman"><Button color="inherit" style={{ color: 'black' }}>WOMAN</Button></Link>
              <Button color="inherit" style={{ color: 'black' }}>MAN</Button>
              <Button color="inherit" style={{ color: 'black' }}>KIDS</Button>
              <Button color="inherit" style={{ color: 'black' }}>BEAUTY</Button>
            </Box>
            
            {/* Right Section: Search Bar & Utility Links */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px', ml: 'auto' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                {/* Search Bar */}
                <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#f0f0f0', padding: '5px 10px', borderRadius: '5px' }}>
                  <InputBase placeholder="Search" />
                  <IconButton type="submit" aria-label="search">
                    <SearchIcon />
                  </IconButton>
                </Box>
                
                {/* Utility Links */}
                <If condition={!user}>
                  <Then>
                    <Link to="/log-in" style={{ textDecoration: 'none' }}><Typography style={{ color: 'black' }}>LOG IN</Typography></Link>
                  </Then>
                  <Else>
                    <Typography component="span" style={{ color: 'black' }} onClick={logout}>{user?.firstname?.toUpperCase() || 'LOG OUT'}</Typography>
                  </Else>
                </If>
                <Link to="/help" style={{ textDecoration: 'none' }}><Typography style={{ color: 'black' }}>HELP</Typography></Link>
              </Box>
              <Box sx={{ display: 'flex', gap: '4px', fontWeight: 'bold', alignItems: 'center'}}>
                {/* Shopping Bag Icon */}
                <Link to='/cart'>
                  <IconButton aria-label="shopping bag">
                    <ShoppingBagIcon style={{ color: 'black' }} />
                  </IconButton>
                </Link>
                  <Typography style={{ color: 'black' }}>{`(${total})`}</Typography>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
    );
}

export default NavBar;
