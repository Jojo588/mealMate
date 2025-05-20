import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddItemManually = ({ setFoodItems, foodItems }) => {
  const navigate = useNavigate();

  const [manualEntry, setManualEntry] = useState({
    itemName: '',
    quantity: '',
    expiryDate: ''
  });

  function handleSubmit(e) {
    e.preventDefault();


    const existing = JSON.parse(localStorage.getItem("fridgeItems")) || [];
    localStorage.setItem("fridgeItems", JSON.stringify([...existing, manualEntry]));
    
    setFoodItems([...foodItems, manualEntry]);  // Add new item to list
    navigate('/');
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setManualEntry(prev => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div
    className='min-h-screen w-full bg-cover bg-no-repeat bg-center text-white p-5 overflow-auto'
    style={{
      backgroundImage: 'url("/images/buzzed-buds-_yZyX3r7-aU-unsplash.jpg")',
    }}
  >
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 backdrop-blur-sm bg-black bg-opacity-50 p-6 md:p-10 rounded-lg w-full max-w-2xl'>
      
      <h1 className="text-xl font-bold mb-4">Add your food Item here</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="block font-medium" htmlFor="itemName">Item Name</label>
          <input
            id="itemName"
            type="text"
            name="itemName"
            placeholder="Enter item name here..."
            value={manualEntry.itemName}
            onChange={handleChange}
            required
            className="w-full p-2 rounded border mt-1"
          />
        </div>
        <div>
          <label className="block font-medium" htmlFor="quantity">Quantity</label>
          <input
            min="1"
            id="quantity"
            type="number"
            name="quantity"
            placeholder="Enter quantity here..."
            value={manualEntry.quantity}
            onChange={handleChange}
            required
            className="w-full p-2 rounded border mt-1 text-black"
          />
        </div>
        <div>
          <label className="block font-medium" htmlFor="expiryDate">Expiry Date</label>
          <input
            id="expiryDate"
            type="date"
            name="expiryDate"
            value={manualEntry.expiryDate}
            onChange={handleChange}
            required
            className="w-full p-2 rounded border mt-1 text-black"
          />
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 mt-2"
        >
          Save Item
        </button>
      </form>
    </div>
    </div>
  );
};

export default AddItemManually;
