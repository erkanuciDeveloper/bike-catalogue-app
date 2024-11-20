// src/BikeApp.js
import React, { useEffect, useState } from 'react';
import BikeList from './BikeList';
import { getBikes } from './BikeService'; // API service for fetching bikes

const BikeApp = () => {
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBikes();
        setBikes(data);
      } catch (error) {
        console.error('Error fetching bikes:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Bike Catalogue</h1>
      <BikeList bikes={bikes} />
    </div>
  );
};

export default BikeApp;
