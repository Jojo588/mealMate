import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, ChefHat, LogOut, Home, Info, PlayCircle, UtensilsCrossed, BookOpen, Briefcase, Mail, Cookie, ShieldCheck, ScrollText, HelpCircle,} from "lucide-react";
import { Button } from "../components/ui/Button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription} from "../components/ui/Sheet";

function MainHeader({ activeNavChoice, isLoggedIn, setIsLoggedIn }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Recipes", path: "/recipes" },
    { name: "Contact", path: "/contact" },
  ];
    const subNavItems = [
    { name: "Home", path: "/", icon: <Home /> },
    { name: "About", path: "/about", icon: <Info />},
    { name: "Start Tracking", path: "/trackFoodExpiry", icon: <PlayCircle /> },
    { name: "Recipe Suggestions", path: "/suggestions", icon: <UtensilsCrossed /> },
    { name: "Recipes", path: "/recipes", icon: <BookOpen /> },
    { name: "Careers", path: "/careers", icon: <Briefcase /> },
    { name: "Contact", path: "/contact", icon: <Mail /> },
    { name: "Cookie Policy", path: "/cookie_policy", icon: <Cookie /> },
    { name: "Privacy Policy", path: "/privacy_policy", icon: <ShieldCheck /> },
    { name: "Terms of Service", path: "/terms_of_service", icon: <ScrollText /> },
    { name: "FAQs", path: "/FAQs", icon: <HelpCircle /> },
  ];

   useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 765) {
        setIsOpen(false);
      }
    };
  
    window.addEventListener("resize", handleResize);
    handleResize();
  
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsOpen]);


  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      setIsLoggedIn(false);
      localStorage.setItem('isLoggedIn', 'false');
      localStorage.removeItem('mealMateUserData');
      navigate('/');
    }
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-[#A3B18A]/20 bg-[#FAF9F6]/95 backdrop-blur supports-[backdrop-filter]:bg-[#FAF9F6]/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <ChefHat className="h-8 w-8 text-[#A3B18A]" />
          <span className="text-xl font-bold text-[#333333]">Meal Mate</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-[#333333] font-medium transition-colors hover:text-[#A3B18A] ${
                activeNavChoice === item.name.toLowerCase().replace(/\s+/g, "_")
                  ? "text-[#588157] underline underline-offset-4"
                  : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {!isLoggedIn ? (
            <>
              <Link to="/signin">
                <Button
                  variant="ghost"
                  className={`text-[#333333] hover:text-[#A3B18A] hover:bg-[#A3B18A]/10 ${
                    activeNavChoice === "signin" ? "bg-[#FFB703]" : ""
                  }`}
                >
                  Sign In
                </Button>
              </Link>
              <Link to="/register">
                <Button
                  className={`bg-[#FFB703] duration-300 hover:bg-[#588157] text-white rounded-full px-6 ${
                    activeNavChoice === "register" ? "bg-[#588157]" : ""
                  }`}
                >
                  Register
                </Button>
              </Link>
            </>
          ) : (
            <Button
              variant="ghost"
              className="text-red-600 hover:text-[#A3B18A] hover:bg-[#A3B18A]/10"
              onClick={handleLogout}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          )}
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-white p-6 space-y-6">
            <div className="mt-5 flex flex-col space-y-6 overflow-y-auto max-h-[calc(100vh-150px)] hide-scrollbar">
              <SheetTitle className="visually-hidden">Main Menu</SheetTitle>
                <SheetDescription className="visually-hidden">
                  Select a page to visit or manage your account.
                </SheetDescription>

              {subNavItems.map((item) => (
                
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex gap-3 text-[#333333] font-medium transition-colors hover:text-[#A3B18A] ${
                    activeNavChoice === item.name.toLowerCase().replace(/\s+/g, "_")

                      ? "text-[#588157] underline underline-offset-4"
                      : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon}
                  {item.name}
                </Link>
              ))}
              <div className="flex gap-3 border-t border-[#A3B18A]/20 pt-6 absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                {!isLoggedIn ? (
                  <>
                    <Link to="/signin" onClick={() => setIsOpen(false)}>
                      <Button
                        variant="ghost"
                        className="w-full text-left text-[#333333] hover:text-[#A3B18A] hover:bg-[#A3B18A]/10"
                      >
                        Sign In
                      </Button>
                    </Link>
                    <Link to="/register" onClick={() => setIsOpen(false)}>
                      <Button className="w-full bg-[#FFB703] hover:bg-[#588157] text-white">
                        Register
                      </Button>
                    </Link>
                  </>
                ) : (
                  <Button
                    variant="ghost"
                    className="text-red-600 hover:text-[#A3B18A] hover:bg-[#A3B18A]/10 w-full"
                    onClick={() => {
                      setIsOpen(false);
                      handleLogout();
                    }}
                  >
                    <LogOut className="mr-2 h-4 w-4 0" />
                    Logout
                  </Button>
                )}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export default MainHeader;
