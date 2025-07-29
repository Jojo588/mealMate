import React from "react"
import { ArrowRight, Smartphone } from "lucide-react"
import { Button } from "../components/ui/Button.js"
import { Link } from "react-router-dom"
import Home from '../pages/Home';

function HeroSection({
  searchTerm,
  setSearchTerm,
  foodItems,
  setFoodItems,
  isLoggedIn
}) {

  return (
    <section className="py-20 lg:py-32">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-[#333333] leading-tight">
                Never Waste Food <span className="text-[#A3B18A]">Again</span>
              </h1>
              <p className="text-xl text-[#666666] leading-relaxed">
                Track expiry dates and discover recipes with what's already in your kitchen.
              </p>
            </div>

            <Button
              size="lg"
              className="bg-[#FFB703] hover:bg-[#588157] text-white rounded-full px-8 py-6 text-lg font-semibold group"
            >
              <Link to='/trackFoodExpiry'>
              Start Tracking
              </Link>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <div className="flex items-center space-x-8 text-sm text-[#666666]">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#A3B18A] rounded-full"></div>
                <span>Free to start</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#A3B18A] rounded-full"></div>
                <span>No credit card required</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-[#A3B18A]/20 to-[#FFB703]/20 rounded-3xl p-8 lg:p-12">
              <div className="bg-white rounded-2xl shadow-2xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-[#333333]">Your Kitchen</h3>
                  <Smartphone className="h-5 w-5 text-[#A3B18A]" />
                </div>

              <div className="space-y-3 h-56 overflow-hidden">
                {isLoggedIn ? 
                <Link
                to="/track_expiry_dates">
                 <Home
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    foodItems={foodItems}
                    setFoodItems={setFoodItems}
                  />
                </Link>
                :
                <p className="text-[#666666]">Please log in to track your food items.</p>
                }
              </div>
                <Button className="w-full bg-[#A3B18A] hover:bg-[#588157] text-white rounded-lg">
                  <Link
                  to='/suggestions'>
                  Get Recipe Suggestions
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default HeroSection;