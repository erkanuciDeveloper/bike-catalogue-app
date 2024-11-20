import React, { useState } from 'react';

function CreateBike() {
  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const newBike = { manufacturer, model, price };

    fetch('http://localhost:5000/api/bikes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBike),
    })
      .then(response => response.json())
      .then(data => console.log('New bike added:', data));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a new Bike</h2>
      <div>
        <label>Manufacturer: </label>
        <input
          type="text"
          value={manufacturer}
          onChange={(e) => setManufacturer(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Model: </label>
        <input
          type="text"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Price: </label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Bike</button>
    </form>
  );
}

export default CreateBike;
