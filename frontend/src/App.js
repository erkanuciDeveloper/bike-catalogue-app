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
      <h1 className="app-header">Bike Catalogue</h1>
      <div className="content-container">
        <AddBike onAddBike={handleAddBike} />
        <BikeList bikes={bikes} />
      </div>
    </div>
  );
};

export default App;
