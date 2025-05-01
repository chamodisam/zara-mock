import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Help from './pages/Help';
import Home from './pages/Home';
import Woman from './pages/Woman';
import Cart from './pages/Cart';
import Login from './auth/Login';
import Signup from './auth/Signup';

function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/woman" element={<Woman />} />
        <Route path="/help" element={<Help />} /> 
        <Route path="/cart" element={<Cart />} /> 
        <Route path="/log-in" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
