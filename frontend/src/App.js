import React, { useState, useEffect } from 'react';
import BikeList from './components/BikeList';
import AddBike from './components/AddBike';
import { getBikes } from './services/BikeService';
import './styles/app.css';

const App = () => {
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    const fetchBikes = async () => {
      const bikeData = await getBikes();
      setBikes(bikeData);
    };
    fetchBikes();
  }, []);

  const handleAddBike = (newBike) => {
    setBikes((prevBikes) => [...prevBikes, newBike]);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="logo">BikeShop</div>
        <nav className="nav-bar">
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      <main className="main-content">
        <div className="banner">
          <h1>Welcome to BikeShop</h1>
          <p>Your one-stop destination for the best bikes in town!</p>
        </div>
        <div className="content-container">
          <AddBike onAddBike={handleAddBike} />
          <BikeList bikes={bikes} />
        </div>
      </main>

      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} BikeShop. All rights reserved.</p>
        <p>
          <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Service</a>
        </p>
      </footer>
    </div>
  );
};

export default App;
