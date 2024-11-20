// src/services/api.js
import bikesData from '../assets/data/bikes.json';

// JSON'dan bisikletleri okuma
export const getBikes = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve([...bikesData]), 500); // Veriyi simüle ederek getiriyoruz
  });
};

// Yeni bisiklet ekleme
export const addBike = async (newBike) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const addedBike = { ...newBike, id: Date.now() }; // Benzersiz ID ekleniyor
      resolve(addedBike);
    }, 500);
  });
}; 