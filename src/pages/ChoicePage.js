import React from 'react';
import { Link } from 'react-router-dom';

const ChoicePage = () => {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex items-center justify-center px-6 py-12 relative"
      style={{
        backgroundImage: `url("${process.env.PUBLIC_URL}/images/mike-jumapao-LZbtJSqG8E0-unsplash.jpg")`,
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Card */}
      <div className="relative w-full max-w-2xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-10 text-center space-y-8">

        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Choose How to Add Your Item
        </h1>

        <p className="text-white/80 text-sm md:text-base">
          Select how you would like to add expiry information for your item.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center">

          <Link to="/auto_generate_expiry_date" className="w-full">
            <button className="w-full rounded-xl bg-emerald-600/90 hover:bg-emerald-700 text-white font-semibold py-4 px-6 transition duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]">
              Auto Generate Expiry Date
            </button>
          </Link>

          <Link to="/add_item_manually" className="w-full">
            <button className="w-full rounded-xl bg-indigo-600/90 hover:bg-indigo-700 text-white font-semibold py-4 px-6 transition duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]">
              Manually Enter Expiry Date
            </button>
          </Link>

        </div>

      </div>
    </div>
  );
};

export default ChoicePage;