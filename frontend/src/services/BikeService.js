// src/services/BikeService.js

// Bisiklet verilerini almak
export const getBikes = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/bikes');
      if (response.ok) {
        return await response.json();
      } else {
        throw new Error('Failed to fetch bikes');
      }
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  
  // Yeni bisiklet eklemek
  export const addBike = async (newBike) => {
    try {
      const response = await fetch('http://127.0.0.1:5000/bikes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newBike),
      });
      if (response.ok) {
        return await response.json();
      } else {
        throw new Error('Failed to add bike');
      }
    } catch (error) {
      console.error(error);
    }
  };
  