import React from "react"
import { Card, CardContent } from "../components/ui/Card"
import { Plus, Calendar, Bell, ChefHat } from "lucide-react"

function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      icon: Plus,
      title: "Add your food",
      description: "Scan barcodes or manually enter food items into your digital pantry.",
    },
    {
      number: "02",
      icon: Calendar,
      title: "Set or auto-detect expiry",
      description: "Let our system automatically detect expiry dates or set them manually.",
    },
    {
      number: "03",
      icon: Bell,
      title: "Get reminders",
      description: "Receive smart notifications when your food is about to expire.",
    },
    {
      number: "04",
      icon: ChefHat,
      title: "See recipe suggestions",
      description: "Discover recipes that use your soon-to-expire ingredients.",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-[#FAF9F6]">
      <div className="container px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#333333]">
            How It <span className="text-[#A3B18A]">Works</span>
          </h2>
          <p className="text-xl text-[#666666] max-w-2xl mx-auto">
            Get started in minutes with our simple 4-step process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group hover:-translate-y-2">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="relative">
                    <div className="w-20 h-20 bg-[#FFB703] rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#A3B18A] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{step.number}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-[#333333]">{step.title}</h3>
                  <p className="text-[#666666] leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#A3B18A]/30 transform -translate-y-1/2 z-10"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default HowItWorksSection;