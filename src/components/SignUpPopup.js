import React from "react";
import { Check } from "lucide-react";
import { Button } from "./ui/Button";

const SignUpPopup = ({ signupEntry, showSignupPopup, handleCloseSignupPop }) => {
  return (
    <div className={`${showSignupPopup ? "block" : "hidden"}`}>
      <div className="fixed inset-0 flex items-center justify-center z-50">

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

        {/* Popup Card */}
        <div className="relative bg-white rounded-2xl shadow-2xl px-8 pt-12 pb-8 w-[90%] max-w-sm text-center space-y-4 transform transition-all duration-300 scale-100">

          {/* Success Icon */}
          <div className="absolute left-1/2 -top-10 -translate-x-1/2">
            <div className="bg-green-500 p-4 rounded-full shadow-lg">
              <Check className="text-white w-8 h-8" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-xl font-semibold text-gray-800">
            Congratulations, {signupEntry.firstName} 🎉
          </h1>

          {/* Message */}
          <p className="text-gray-500 text-sm">
            Your account has been created successfully.
          </p>

          {/* Button */}
          <Button
            className="w-full mt-4 py-5 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg"
            onClick={handleCloseSignupPop}
          >
            Continue
          </Button>

        </div>
      </div>
    </div>
  );
};

export default SignUpPopup;