import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ExpiryDates from '../components/ExpiryDates';

const AutoGenExpirPage = ({ setFoodItems, foodItems }) => {
  const [autoGenEntry, setAutoGenEntry] = useState({
    itemName: "",
    quantity: "",
    expire: ""
  });

  const navigation = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const match = ExpiryDates.find(
      item => item.name.toLowerCase() === autoGenEntry.itemName.toLowerCase()
    );

    if (!match) {
      alert("Oh no! Can't auto-generate expiry date for this item.\nTry using the manual entry page.");
      return;
    }

    const expireInDays = Number(match.expire);
    const expiryDate = new Date(Date.now() + expireInDays * 24 * 60 * 60 * 1000).toISOString();

    const newItem = {
      itemName: autoGenEntry.itemName,
      quantity: autoGenEntry.quantity,
      expiryDate
    };

    const updatedItems = [...foodItems, newItem];
    setFoodItems(updatedItems);
    localStorage.setItem("fridgeItems", JSON.stringify(updatedItems));

    navigation('/');
  }

  useEffect(() => {
    localStorage.setItem('savedEntry', JSON.stringify(autoGenEntry));
  }, [autoGenEntry]);

  function handleChange(event) {
    const { name, value } = event.target;
    setAutoGenEntry(prev => ({
      ...prev,
      [name]: value
    }));
  }

  return (
    <div
      className='min-h-screen w-full bg-cover bg-center text-white p-5 overflow-auto'
      style={{
        backgroundImage: `url("${process.env.PUBLIC_URL}/images/charlesdeluvio-oLklDppuROU-unsplash.jpg")`,
      }}
    >
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 backdrop-blur-sm bg-black bg-opacity-50 p-6 md:p-10 rounded-lg w-full max-w-2xl'>
        <h1 className="text-xl font-bold mb-4 capitalize">Add your food item here</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium" htmlFor="itemName">Item Name</label>
            <input
              id="itemName"
              type="text"
              placeholder="Enter item here..."
              name="itemName"
              onChange={handleChange}
              value={autoGenEntry.itemName}
              required
              className="w-full p-2 rounded border mt-1 focus:outline-none focus:ring-2 focus:ring-green-400 text-black"
            />
          </div>

          <div>
            <label className="block font-medium" htmlFor="quantity">Quantity</label>
            <input
              min="1"
              id="quantity"
              type="number"
              placeholder="Enter quantity here..."
              name="quantity"
              onChange={handleChange}
              value={autoGenEntry.quantity}
              required
              className="w-full p-2 rounded border mt-1 focus:outline-none focus:ring-2 focus:ring-green-400 text-black"
            />
          </div>

          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition duration-200 mt-4"
          >
            Save Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default AutoGenExpirPage;
