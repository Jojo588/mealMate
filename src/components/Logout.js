import React from "react";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Logout = ({ showLogout, setIsLoggedIn, setShowLogout }) => {
  const navigate = useNavigate();

  function confirmLogout() {
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", "false");
    localStorage.removeItem("mealMateUserData");
    setShowLogout(false);
    navigate("/");
  }

  return (

    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300
      ${showLogout ? "opacity-100 visible" : "opacity-0 invisible"}
      bg-black/80 backdrop-blur-sm h-screen w-screen`}
    >
      {/* Modal */}
      <div
        className={`bg-white text-gray-800 rounded-xl shadow-2xl p-6 w-[90%] max-w-sm text-center
        transform transition-all duration-300
        ${showLogout ? "scale-100" : "scale-90"}`}
      >
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="p-4 rounded-full bg-red-100">
            <LogOut className="text-red-600 w-10 h-10" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Confirm Logout
        </h2>

        {/* Message */}
        <p className="text-gray-500 text-sm mb-6">
          Are you sure you want to log out of your account?
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={confirmLogout}
            className="px-5 py-2 rounded-lg bg-red-600 text-white font-medium
            hover:bg-red-700 transition duration-300 shadow-md"
          >
            Yes, Logout
          </button>

          <button
            onClick={() => setShowLogout(false)}
            className="px-5 py-2 rounded-lg border border-gray-300 text-gray-600
            hover:bg-gray-100 transition duration-300"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;