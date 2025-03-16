import './App.css';
import MainPage from "./Pages/MainPage.js";
import Inventory from './Pages/Inventory.js';
import Contact from './Pages/Contact.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<MainPage />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
