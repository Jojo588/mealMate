import React from 'react';

const ExpirySection = ({ quantity, expiryDate, onDelete, itemName }) => {
  const computedExpiryDate = new Date(expiryDate); // Now always stored
  const daysLeft = Math.ceil((computedExpiryDate - new Date()) / (1000 * 60 * 60 * 24));
  let color = "bg-green-200";
  if (daysLeft <= 3) color = "bg-yellow-100";
  if (daysLeft <= 1) color = "bg-red-200";
  if (daysLeft <= 0) color = "bg-red-400";
  if (daysLeft >= 10) color = "bg-green-300";
  return (
    <div className={`mt-3 grid grid-cols-1`}>
      <div className={`flex justify-between items-center ${color} rounded-md mt-2 p-3 capitalize`}>
        <div>
          <h1 className="font-bold text-xl">{itemName}</h1>
          <p className="font-medium text-lg">Qty: {quantity}</p>
          <h3>
            {daysLeft <= 0
              ? `Oops! Your ${itemName} has expired`
              : `Your ${itemName} has ${daysLeft} day(s) to expire`}
          </h3>
        </div>
        <div>
          <button
            onClick={onDelete}
            className="bg-red-600 text-white p-1 rounded-md transition hover:bg-red-500"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpirySection;
