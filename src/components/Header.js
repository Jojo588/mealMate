import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat } from "lucide-react";



const Header = ({ searchTerm, checkIfEmpty }) => {


  return (
    <div className="flex justify-between items-center p-4  bg-[#FAF9F6]/95 backdrop-blur supports-[backdrop-filter]:bg-[#FAF9F6]/60 text-md w-full fixed top-0 left-0 z-50 shadow-md h-20 max-sm:text-sm ">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <ChefHat className="h-8 w-8 text-[#A3B18A]" />
          <span className="text-xl font-bold text-[#333333]">Meal Mate</span>
        </Link>
      <div className="flex gap-4 items-center max-sm:gap-2">
        <input
          type="search"
          placeholder="Search food item here..."
          value={searchTerm}
          onChange={checkIfEmpty}
          className="p-1 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#A3B18A] max-sm:w-24"
        />

        <Link to="/trackFoodExpiry">
          <button className="capitalize bg-[#A3B18A] text-white px-3 py-1 rounded-md hover:bg-[#99b46a] transition duration-200 max-sm:w-16 max-sm:text-xs">
            + Add Item
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
