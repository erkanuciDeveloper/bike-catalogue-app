import React, { useState } from 'react';

const BikeForm = () => {
  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBike = { manufacturer, model, price };

    fetch('http://127.0.0.1:5000/bikes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newBike),
    })
      .then(response => response.json())
      .then(data => alert('Bike added!'))
      .catch(error => console.error('Error:', error));
  };

  return (
    <div>
      <h1>Add New Bike</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Manufacturer"
          value={manufacturer}
          onChange={(e) => setManufacturer(e.target.value)}
        />
        <input
          type="text"
          placeholder="Model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">Add Bike</button>
      </form>
    </div>
  );
};

export default BikeForm;
