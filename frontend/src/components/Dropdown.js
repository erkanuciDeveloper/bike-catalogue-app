import React from 'react';
import '../styles/dropdown.css';

const Dropdown = ({ onSortChange }) => {
  const handleChange = (event) => {
    onSortChange(event.target.value);
  };

  return (
    <div className="dropdown-container">
      <label className="dropdown-label">Sort by:</label>
      <select className="dropdown-select" onChange={handleChange}>
        <option value="manufacturer">Manufacturer</option>
        <option value="price">Price</option>
      </select>
    </div>
  );
};

export default Dropdown;
