import React, { useState } from 'react';
import { addBike } from '../services/BikeService';
import '../styles/addBike.css';

const AddBike = ({ onAddBike }) => {
  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [imgUrl, setImgUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (manufacturer && model && price && category && imgUrl) {
      const newBike = {
        manufacturer,
        model,
        price: parseFloat(price),
        category,
        img_url: imgUrl
      };
      const result = await addBike(newBike);
      onAddBike(result);
      setManufacturer('');
      setModel('');
      setPrice('');
      setCategory('');
      setImgUrl('');
    }
  };

  return (
    <div className="add-bike-container">
      <h2>Add a New Bike</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input-field"
          placeholder="Manufacturer"
          value={manufacturer}
          onChange={(e) => setManufacturer(e.target.value)}
          required
        />
        <input
          type="text"
          className="input-field"
          placeholder="Model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          required
        />
        <input
          type="number"
          className="input-field"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          type="text"
          className="input-field"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <input
          type="text"
          className="input-field"
          placeholder="Image URL"
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
          required
        />
        <button type="submit" className="submit-btn">Add Bike</button>
      </form>
    </div>
  );
};

export default AddBike;