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

    setFoodItems([...foodItems, manualEntry]);
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
      className="relative min-h-screen w-full bg-cover bg-center flex items-center justify-center px-6 py-12"
      style={{
        backgroundImage: `url("${process.env.PUBLIC_URL}/images/buzzed-buds-_yZyX3r7-aU-unsplash.jpg")`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Form Card */}
      <div className="relative w-full max-w-xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 md:p-10 text-white">

        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center tracking-tight">
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
              name="itemName"
              placeholder="Enter item name..."
              value={manualEntry.itemName}
              onChange={handleChange}
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
              name="quantity"
              placeholder="Enter quantity..."
              value={manualEntry.quantity}
              onChange={handleChange}
              required
              className="w-full mt-2 px-4 py-3 rounded-xl bg-white/90 text-gray-800 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white/90">
              Expiry Date
            </label>
            <input
              id="expiryDate"
              type="date"
              name="expiryDate"
              value={manualEntry.expiryDate}
              onChange={handleChange}
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

export default AddItemManually;