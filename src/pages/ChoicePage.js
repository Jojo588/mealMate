import React from 'react';
import { Link } from 'react-router-dom';

const ChoicePage = () => {
  return (
    <div
      className='min-h-screen w-full bg-cover bg-center text-white px-4 py-12 flex items-center justify-center'
      style={{
        backgroundImage: 'url("./images/mike-jumapao-LZbtJSqG8E0-unsplash.jpg")',
      }}
    >
      <div className='bg-black bg-opacity-60 backdrop-blur-sm p-8 md:p-12 rounded-2xl max-w-3xl w-full text-center space-y-6 shadow-xl'>
        <h1 className='text-3xl md:text-4xl font-bold mb-6'>Choose How to Add Your Item</h1>
        
        <div className='flex flex-col md:flex-row justify-center items-center gap-6'>
          <Link to='/auto_generate_expiry_date' className='w-full md:w-auto'>
            <button className='bg-slate-800 hover:bg-slate-600 px-6 py-4 rounded-lg text-white text-lg md:text-xl w-full'>
              Auto Generate Expiry Date
            </button>
          </Link>

          <Link to='/add_item_manually' className='w-full md:w-auto'>
            <button className='bg-blue-800 hover:bg-blue-600 px-6 py-4 rounded-lg text-white text-lg md:text-xl w-full'>
              Manually Enter Expiry Date
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChoicePage;
