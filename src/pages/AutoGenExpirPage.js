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
      className="relative min-h-screen w-full bg-cover bg-center flex items-center justify-center px-6 py-12"
      style={{
        backgroundImage: `url("${process.env.PUBLIC_URL}/images/charlesdeluvio-oLklDppuROU-unsplash.jpg")`,
      }}
    >

      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Form card */}
      <div className="relative w-full max-w-xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 md:p-10 text-white">

        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center tracking-tight capitalize">
          Add Your Food Item
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block text-sm font-medium text-white/90">
              Item Name
            </label>
            <input
              id="itemName"
              type="text"
              placeholder="Enter item name..."
              name="itemName"
              onChange={handleChange}
              value={autoGenEntry.itemName}
              required
              className="w-full mt-2 px-4 py-3 rounded-xl bg-white/90 text-gray-800 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white/90">
              Quantity
            </label>
            <input
              min="1"
              id="quantity"
              type="number"
              placeholder="Enter quantity..."
              name="quantity"
              onChange={handleChange}
              value={autoGenEntry.quantity}
              required
              className="w-full mt-2 px-4 py-3 rounded-xl bg-white/90 text-gray-800 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition duration-300 hover:scale-[1.02]"
          >
            Save Item
          </button>

        </form>
      </div>

    </div>
  );
};

export default AutoGenExpirPage;

