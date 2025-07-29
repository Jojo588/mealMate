import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
import { Separator } from "../components/ui/Separator";
import { Mail, Lock, Chrome, Eye, EyeOff } from "lucide-react";

export default function SignInPage({ data, setIsLoggedIn }) {
  const [showPassword, setShowPassword] = useState(false);
  const [checkCorrectDetails, setCheckCorrectDetails] =useState(false)
  const navigate = useNavigate();

  const [loginEntry, setLoginEntry] = useState({
    email: "",
    password: ""
  });

  function handleChange(e) {
    setLoginEntry(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const matchedUser = data.find(
      user =>
        user.email === loginEntry.email &&
        user.password === loginEntry.password
    );

    if (matchedUser) {
      setIsLoggedIn(true);
      navigate('/');
    } else {
      setCheckCorrectDetails(true);
    }
  }


  return (
    <div className="min-h-screen bg-[#FAF9F6]">

      <main className="py-20">
        <div className="container px-4">
          <div className="max-w-md mx-auto">
            <Card className="border-2 border-[#A3B18A]/20 shadow-2xl">
              <CardHeader className="text-center space-y-4">
                <CardTitle className="text-3xl font-bold text-[#333333]">Welcome Back</CardTitle>
                <p className="text-[#666666]">Sign in to your Meal Mate account</p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Social Sign In */}
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
                    <span className="px-4 bg-white text-[#666666]">or sign in with email</span>
                  </div>
                </div>

                {/* Email Sign In Form */}
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#333333]">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#666666]" />
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        className="pl-10 py-6 border-2 border-[#A3B18A]/20 focus:border-[#A3B18A]"
                        name='email'
                        value={loginEntry.email}
                        onChange={handleChange}
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
                        placeholder="Enter your password"
                        className="pl-10 pr-10 py-6 border-2 border-[#A3B18A]/20 focus:border-[#A3B18A]"
                        name='password'
                        value={loginEntry.password}
                        onChange={handleChange}
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

                  {checkCorrectDetails && <div className="text-red-600">Invalid username or password</div>}

                  <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-2 text-sm">
                      <input type="checkbox" className="rounded border-[#A3B18A]/20" />
                      <span className="text-[#666666]">Remember me</span>
                    </label>
                    <Link to="#" className="text-sm text-[#A3B18A] hover:underline">
                      Forgot password?
                    </Link>
                  </div>

                  <Button className="w-full bg-[#FFB703] hover:bg-[#588157] text-white py-6 text-lg font-semibold"
                  type='submit'>
                    Sign In
                  </Button>
                </form>

                <div className="text-center">
                  <p className="text-[#666666]">
                    Don&apos;t have an account?{" "}
                    <Link to="/register" className="text-[#A3B18A] hover:underline font-medium">
                      Sign up here
                    </Link>
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
