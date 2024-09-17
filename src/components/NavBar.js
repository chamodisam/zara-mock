import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, IconButton, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

function NavBar() {
    return (
        <AppBar position="static" style={{ backgroundColor: 'transparent', boxShadow: 'none', padding: '20px'}}>
          <Toolbar style={{ justifyContent: 'space-between'}}>
            
            {/* Left Section: Logo */}
            {/* <Typography component="div" style={{ fontWeight: 'bold', color: 'black' }}>
              ZARA
            </Typography> */}
            
            {/* Center Section: Navigation Links */}
            <Box sx={{ display: 'flex', gap: '20px', fontWeight: 'bold' }}>
              <Link to="/"><Button color="inherit" style={{ color: 'black' }}>HOME</Button></Link>
              <Link to="/woman"><Button color="inherit" style={{ color: 'black' }}>WOMAN</Button></Link>
              <Button color="inherit" style={{ color: 'black' }}>MAN</Button>
              <Button color="inherit" style={{ color: 'black' }}>KIDS</Button>
              <Button color="inherit" style={{ color: 'black' }}>BEAUTY</Button>
            </Box>
            
            {/* Right Section: Utility Links */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              {/* Search Bar */}
              <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#f0f0f0', padding: '5px 10px', borderRadius: '5px' }}>
                <InputBase placeholder="Search" />
                <IconButton type="submit" aria-label="search">
                  <SearchIcon />
                </IconButton>
              </Box>
              
              {/* Utility Links */}
              <Typography style={{ color: 'black' }}>LOG IN</Typography>
              <Link to="/help" style={{ textDecoration: 'none' }}><Typography style={{ color: 'black' }}>HELP</Typography></Link>
              
              {/* Shopping Bag Icon */}
              <IconButton aria-label="shopping bag">
                <ShoppingBagIcon style={{ color: 'black' }} />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
    );
}

export default NavBar;
