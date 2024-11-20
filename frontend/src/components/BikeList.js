import React, { useState, useEffect } from 'react';
import '../styles/bikeCard.css';

const BikeList = ({ bikes }) => {
  const [sortOption, setSortOption] = useState('manufacturer');
  const [sortedBikes, setSortedBikes] = useState(bikes);

  // Sıralama işlemini uygulama
  useEffect(() => {
    let sorted = [...bikes];
    
    if (sortOption === 'manufacturer') {
      sorted.sort((a, b) => a.manufacturer.localeCompare(b.manufacturer));
    } else if (sortOption === 'lowPrice') {
      sorted.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (sortOption === 'highPrice') {
      sorted.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    }
    
    setSortedBikes(sorted);
  }, [sortOption, bikes]);

  // Sıralama menüsünü açma
  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  return (
    <div className="bike-list">
      <h2>Available Bikes</h2>
      <div className="sort-menu">
        <label htmlFor="sortOptions">Sırala: </label>
        <select id="sortOptions" onChange={handleSortChange} value={sortOption}>
          <option value="manufacturer">Üretici adı</option>
          <option value="lowPrice">En düşük fiyat</option>
          <option value="highPrice">En yüksek fiyat</option>
        </select>
      </div>
      <div className="bike-cards">
        {sortedBikes.map((bike) => (
          <div className="bike-card" key={bike.ref}>
            <img src={bike.img_url} alt={bike.model} className="bike-img" />
            <div className="bike-info">
              <h3 className="bike-title">{bike.manufacturer} - {bike.model}</h3>
              <p className="category">Category: {bike.category}</p>
              <p className="price">Price: {bike.price}</p>
              <p className="weight">Weight: {bike.weight}</p>
              <p className="colour">Colour: {bike.colour}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BikeList;
