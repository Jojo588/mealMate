import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
import { Separator } from "../components/ui/Separator";
import { Mail, Lock, User, Chrome, Eye, EyeOff } from "lucide-react";

export default function RegisterPage({ setData}) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();


  const [signupEntry, setSignupEntry] = useState({
    firstName: "",
    lastName: "",
    email: "",
    createPassword: "",
    confirmPassword: ""
  });

  function handleChange(e) {
    setSignupEntry(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setData(prev => [
      ...prev,
      { email: signupEntry.email, password: signupEntry.createPassword }
    ]);
    navigate('/signin');
    alert(`Hello ${signupEntry.firstName}, you have successfully signed up!`);
  }




  return (
    <div className="min-h-screen bg-[#FAF9F6]">

      <main className="py-20">
        <div className="container px-4">
          <div className="max-w-md mx-auto">
            <Card className="border-2 border-[#A3B18A]/20 shadow-2xl">
              <CardHeader className="text-center space-y-4">
                <CardTitle className="text-3xl font-bold text-[#333333]">Join Meal Mate</CardTitle>
                <p className="text-[#666666]">Start your zero-waste journey today</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <Button
                  variant="outline"
                  className="w-full py-6 text-lg border-2 border-[#A3B18A]/20 hover:bg-[#A3B18A]/10 bg-transparent"
                >
                  <Chrome className="mr-2 h-5 w-5" />
                  Continue with Google
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator className="w-full" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-[#666666]">or create account with email</span>
                  </div>
                </div>

                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-[#333333]">First Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#666666]" />
                        <Input
                          placeholder="First name"
                          className="pl-10 py-6 border-2 border-[#A3B18A]/20 focus:border-[#A3B18A]"
                          name='firstName'
                          onChange={handleChange}
                          value={signupEntry.firstName}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-[#333333]">Last Name</label>
                      <Input
                        placeholder="Last name"
                        className="py-6 border-2 border-[#A3B18A]/20 focus:border-[#A3B18A]"
                        name='lastName'
                        onChange={handleChange}
                        value={signupEntry.lastName}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#333333]">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#666666]" />
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        className="pl-10 py-6 border-2 border-[#A3B18A]/20 focus:border-[#A3B18A]"
                        name='email'
                        onChange={handleChange}
                        value={signupEntry.email}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#333333]">Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#666666]" />
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a password"
                        className="pl-10 pr-10 py-6 border-2 border-[#A3B18A]/20 focus:border-[#A3B18A]"
                        name='createPassword'
                        onChange={handleChange}
                        value={signupEntry.createPassword}
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#666666] hover:text-[#A3B18A]"
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#333333]">Confirm Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#666666]" />
                      <Input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        className="pl-10 pr-10 py-6 border-2 border-[#A3B18A]/20 focus:border-[#A3B18A]"
                        name='confirmPassword'
                        onChange={handleChange}
                        value={signupEntry.confirmPassword}
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#666666] hover:text-[#A3B18A]"
                      >
                        {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="flex items-start space-x-2 text-sm">
                      <input type="checkbox" className="rounded border-[#A3B18A]/20 mt-1" required/>
                      <span className="text-[#666666]">
                        I agree to the <Link to="/terms_of_service" className="text-[#A3B18A] hover:underline">Terms of Service</Link> and <Link to="/privacy_policy" className="text-[#A3B18A] hover:underline">Privacy Policy</Link>
                      </span>
                    </label>

                    <label className="flex items-center space-x-2 text-sm">
                      <input type="checkbox" className="rounded border-[#A3B18A]/20" />
                      <span className="text-[#666666]">Send me tips and recipe ideas via email</span>
                    </label>
                  </div>

                  <Button className="w-full bg-[#FFB703] hover:bg-[#588157] text-white py-6 text-lg font-semibold">
                    Create Account
                  </Button>
                </form>

                <div className="text-center">
                  <p className="text-[#666666]">
                    Already have an account? <Link to="/signin" className="text-[#A3B18A] hover:underline font-medium">Sign in here</Link>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

    </div>
  );
}
