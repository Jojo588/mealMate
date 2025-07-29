import React from 'react';
import { useLocation } from 'react-router-dom';

const ExpirySection = ({ quantity, expiryDate, onDelete, itemName }) => {
  const location = useLocation();
  const isTrackExpiryDates = location.pathname === '/track_expiry_dates';

  const computedExpiryDate = new Date(expiryDate);
  const daysLeft = Math.ceil((computedExpiryDate - new Date()) / (1000 * 60 * 60 * 24));

  let borderColor = '';
  let bgColor = '';

  if (daysLeft < 0) {
    borderColor = 'border-red-400';
    bgColor = 'bg-red-400';
  }
  else if (daysLeft <= 0) {
    borderColor = 'border-red-300';
    bgColor = 'bg-red-300';
  }
   else if (daysLeft <= 1) {
    borderColor = 'border-red-200';
    bgColor = 'bg-red-200';
  } else if (daysLeft <= 3) {
    borderColor = 'border-yellow-100';
    bgColor = 'bg-yellow-100';
  } else if (daysLeft <= 10) {
    borderColor = 'border-green-300';
    bgColor = 'bg-green-300';
  } else {
    borderColor = 'border-green-600';
    bgColor = 'bg-green-600';
  }

  return (
    <div className="mt-3 grid grid-cols-1">
      <div
        className={`flex justify-between items-center 
          ${borderColor} ${isTrackExpiryDates ? bgColor : 'bg-white'} 
          border-l-4 rounded-md mt-2 p-3 capitalize 
          ${isTrackExpiryDates && 'ml-4 mr-4'}
        `}
      >
        <div>
          <h1 className="font-bold text-xl">{itemName}</h1>
          {isTrackExpiryDates && (
            <p className="font-medium text-lg">Qty: {quantity}</p>
          )}
          <h3>
            {daysLeft === 0 ? `your ${itemName} expires today`:
            (daysLeft < 0
              ? `Oops! Your ${itemName} has expired`
              : `Your ${itemName} has ${daysLeft} day(s) to expire`
              )
              }
          </h3>
        </div>
        {isTrackExpiryDates && (
          <button
            onClick={onDelete}
            className="bg-red-600 text-white p-1 rounded-md transition hover:bg-red-500"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default ExpirySection;
