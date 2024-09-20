import './App.css';
import { useEffect, useCallback, useContext } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Help from './pages/Help';
import Home from './pages/Home';
import Woman from './pages/Woman';

import CartContext from './contexts/cart';

function App() {
  const { setCartItems, setTotalQuantity } = useContext(CartContext);

  const fetchCartItems = useCallback(async () => {
    const response = await axios.get('http://localhost:3001/carts/20');
    setCartItems(response.data.items);
    setTotalQuantity(response.data.total_quantity);
  }, []);

  useEffect(() => {
    fetchCartItems();
  }, [fetchCartItems]);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/woman" element={<Woman />} />
        <Route path="/help" element={<Help />} /> 
      </Routes>
    </Router>
  );
}

export default App;
