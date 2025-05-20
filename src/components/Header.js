import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ searchTerm, checkIfEmpty }) => {


  return (
    <div className="flex justify-between items-center p-4 bg-gray-200 text-md w-full fixed top-0 left-0 z-50 shadow-md h-20 max-sm:text-sm ">
      <h1 className="capitalize font-bold text-2xl max-sm:text-xl">Meal Mate 🍽</h1>

      <div className="flex gap-4 items-center max-sm:gap-2">
        <input
          type="search"
          placeholder="Search food item here..."
          value={searchTerm}
          onChange={checkIfEmpty}
          className="p-1 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 max-sm:w-24"
        />

        <Link to="/choice_page">
          <button className="capitalize bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition duration-200 max-sm:w-16 max-sm:text-xs">
            + Add Item
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
