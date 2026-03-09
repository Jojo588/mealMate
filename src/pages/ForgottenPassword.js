import React from "react";
import { Lock } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Link } from "react-router-dom";

const ForgottenPassword = () => {
  return (
    
     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FAF9F6] to-[#eef1e8] px-4 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
      <div className="w-full max-w-md bg-white/90 backdrop-blur rounded-2xl shadow-lg p-8 space-y-6 text-center transition hover:shadow-xl">

        {/* Icon */}
        <div className="flex justify-center">
          <div className="bg-[#A3B18A]/20 p-5 rounded-full">
            <Lock className="w-12 h-12 text-[#588157]" />
          </div>
        </div>

        {/* Heading */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-[#333333]">
            Forgot your password?
          </h1>
          <p className="text-gray-500 text-sm">
            Enter your email and we'll send you a link to reset your password.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4 text-left">
          <div className="space-y-1">
            <label className="text-sm font-medium text-[#333333]">
              Email address
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#A3B18A]"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-[#FFB703] hover:bg-[#588157] text-white py-3 text-base font-semibold rounded-md transition"
          >
            Send Reset Link
          </Button>
        </form>

        {/* Divider */}
        <div className="border-t pt-4">
            <Link to="/signin">
                <Button
                    variant="ghost"
                    className="w-full text-[#333333] hover:text-[#588157]"
                >
                    Back to Login
                </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgottenPassword;