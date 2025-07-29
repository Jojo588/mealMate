import React from 'react';

const Loader = () => (
  <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white bg-opacity-80 backdrop-blur-sm">
    <div className="w-16 h-16 border-4 border-[#588157] border-t-transparent rounded-full animate-spin shadow-md"></div>
    <p className="mt-4 text-[#588157] text-lg font-semibold animate-pulse">Loading...</p>
  </div>
);

export default Loader;
