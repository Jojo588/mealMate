import React from 'react';
import { Link } from 'react-router-dom';

const SuggestionsSection = () => {
  return (
    <div
      className="bg-cover bg-center text-white py-10 px-4"
      style={{
        backgroundImage: 'url("/images/kobby-mendez-q54Oxq44MZs-unsplash.jpg")',
      }}
    >
      <div className="bg-black bg-opacity-60 p-6 rounded-lg max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Don’t Let Good Food Go to Waste</h1>
        <p className="capitalize mb-6">
          When your ingredients are nearing their expiry date, Meal Mate has your back!
          Our intelligent meal suggestion feature recommends quick, delicious recipes using items that are about to expire — helping you reduce waste, save money, and make the most of what you already have in your fridge.
        </p>

        <Link to="/suggestions">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600">
            🍽 Get Meal Suggestions
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SuggestionsSection;
