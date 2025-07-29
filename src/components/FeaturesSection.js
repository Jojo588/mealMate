import React from "react"
import { Scan, Bell, ChefHat, Calendar } from "lucide-react"
import { Card, CardContent } from "../components/ui/Card"

function FeaturesSection() {
  const features = [
    {
      icon: Scan,
      title: "Track Food Easily",
      description: "Enter food manually or scan barcodes to quickly add items to your inventory.",
    },
    {
      icon: Bell,
      title: "Smart Expiry Alerts",
      description: "Get timely notifications before your food goes bad, so you never waste again.",
    },
    {
      icon: ChefHat,
      title: "Recipe Suggestions",
      description: "Discover delicious recipes using ingredients you already have at home.",
    },
    {
      icon: Calendar,
      title: "Auto Expiry Detection",
      description: "Automatically generate common expiry dates for popular food items.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#333333]">
            Everything You Need to <span className="text-[#A3B18A]">Reduce Food Waste</span>
          </h2>
          <p className="text-xl text-[#666666] max-w-2xl mx-auto">
            Our smart features help you keep track of your food and make the most of what you have.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[#FAF9F6]"
            >
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-[#A3B18A]/10 rounded-full flex items-center justify-center mx-auto">
                  <feature.icon className="h-8 w-8 text-[#A3B18A]" />
                </div>
                <h3 className="text-xl font-semibold text-[#333333]">{feature.title}</h3>
                <p className="text-[#666666] leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
export default FeaturesSection;