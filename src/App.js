import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Help from './pages/Help';
import Home from './pages/Home';
import Woman from './pages/Woman';

function App() {
  return (
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/woman" element={<Woman />} />
          <Route path="/help" element={<Help />} /> 
        </Routes>
      </Router>
    // </Container>
  );
}

export default App;
