// components/AddBike.js
import React, { useState } from 'react';
import { addBike } from '../services/BikeService';
import '../styles/addBike.css';

const AddBike = ({ onAddBike }) => {
  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors

    // Validate inputs
    if (manufacturer && model && price && category && imageUrl) {
      // Check if price is a valid number
      if (isNaN(price) || parseFloat(price) <= 0) {
        setError('Price must be a valid number greater than 0');
        return;
      }

      const newBike = {
        manufacturer,
        model,
        price: parseFloat(price),
        category,
        img_url: imageUrl // Ensure consistency with img_url field name
      };

      try {
        const result = await addBike(newBike);

        if (result && result.error) {
          setError(result.error); // Display API error
        } else {
          onAddBike(result); // Pass the result to the parent component
          // Clear form fields
          setManufacturer('');
          setModel('');
          setPrice('');
          setCategory('');
          setImageUrl('');
        }
      } catch (error) {
        setError('An error occurred while adding the bike');
        console.error('Error adding bike:', error);
      }
    } else {
      setError('All fields are required');
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
          type="url"
          className="input-field"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
        {error && <p className="error-message">{error}</p>}  {/* Display error if any */}
        <button type="submit" className="submit-btn">Add Bike</button>
      </form>
    </div>
  );
};

export default AddBike;
