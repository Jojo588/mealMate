import { Card, CardContent } from "../components/ui/Card"
import { Badge } from "../components/ui/Badge"
import { Button } from "../components/ui/Button"
import {Link} from 'react-router-dom';
import {
  Scan,
  Bell,
  ChefHat,
  Calendar,
  BarChart3,
  Smartphone,
  Shield,
  Users,
  Zap,
  Heart,
  Leaf,
  DollarSign,
} from "lucide-react"

export default function FeaturesPage() {
  const mainFeatures = [
    {
      icon: Scan,
      title: "Smart Food Tracking",
      description:
        "Easily add items by scanning barcodes or manual entry. Our database recognizes thousands of products.",
      benefits: ["Barcode scanning", "Manual entry", "Product database", "Batch adding"],
    },
    {
      icon: Bell,
      title: "Expiry Alerts",
      description:
        "Get timely notifications before your food expires. Customize alert timing for different food types.",
      benefits: ["Custom notifications", "Multiple alert types", "Smart timing", "Priority levels"],
    },
    {
      icon: ChefHat,
      title: "Recipe Suggestions",
      description: "Discover recipes based on ingredients you have. Filter by dietary preferences and cooking time.",
      benefits: ["Ingredient matching", "Dietary filters", "Cooking time", "Difficulty levels"],
    },
    {
      icon: Calendar,
      title: "Auto Expiry Detection",
      description: "Automatically set expiry dates for common items. Learn from your usage patterns over time.",
      benefits: ["Smart defaults", "Learning algorithm", "Custom overrides", "Pattern recognition"],
    },
  ]

  const additionalFeatures = [
    {
      icon: BarChart3,
      title: "Waste Analytics",
      description: "Track your progress with detailed analytics on food waste reduction and money saved.",
    },
    {
      icon: Smartphone,
      title: "Mobile & Desktop",
      description: "Access your food inventory anywhere with our responsive web app and mobile optimization.",
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "Your data is encrypted and secure. We never share your personal information with third parties.",
    },
    {
      icon: Users,
      title: "Family Sharing",
      description: "Share your kitchen inventory with family members. Everyone stays updated on what's available.",
    },
    {
      icon: Zap,
      title: "Quick Actions",
      description: "Mark items as used, extend expiry dates, or add to shopping list with one-click actions.",
    },
    {
      icon: Heart,
      title: "Favorites",
      description: "Save your favorite recipes and frequently used items for quick access and meal planning.",
    },
  ]

  const benefits = [
    {
      icon: DollarSign,
      title: "Save Money",
      value: "$127",
      description: "Average monthly savings per user",
    },
    {
      icon: Leaf,
      title: "Reduce Waste",
      value: "78%",
      description: "Average waste reduction",
    },
    {
      icon: ChefHat,
      title: "New Recipes",
      value: "50+",
      description: "Recipes discovered monthly",
    },
  ]

  return (
    <div className="min-h-screen bg-[#FAF9F6]">

      <main className="py-20">
        <div className="container px-4">
          <div className="text-center space-y-6 mb-20">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#333333]">
              Powerful <span className="text-[#A3B18A]">Features</span> for Smart Food Management
            </h1>
            <p className="text-xl text-[#666666] max-w-3xl mx-auto">
              Everything you need to reduce food waste, save money, and discover new recipes. Built with simplicity and
              effectiveness in mind.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {mainFeatures.map((feature, index) => (
              <Card key={index} className="border-2 border-[#A3B18A]/20 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 space-y-6">
                  <div className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-[#A3B18A]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-8 w-8 text-[#A3B18A]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-[#333333] mb-3">{feature.title}</h3>
                      <p className="text-[#666666] leading-relaxed mb-4">{feature.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {feature.benefits.map((benefit, idx) => (
                          <Badge key={idx} className="bg-[#A3B18A]/10 text-[#A3B18A]">
                            {benefit}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-br from-[#A3B18A]/10 to-[#FFB703]/10 rounded-3xl p-12 mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#333333] mb-4">Real Results from Real Users</h2>
              <p className="text-xl text-[#666666]">See the impact Meal Mate can have on your kitchen and wallet</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-0 shadow-lg bg-white text-center">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-16 h-16 bg-[#FFB703]/10 rounded-full flex items-center justify-center mx-auto">
                      <benefit.icon className="h-8 w-8 text-[#FFB703]" />
                    </div>
                    <div className="text-4xl font-bold text-[#A3B18A]">{benefit.value}</div>
                    <h3 className="text-xl font-semibold text-[#333333]">{benefit.title}</h3>
                    <p className="text-[#666666]">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#333333] mb-4">More Features to Love</h2>
              <p className="text-xl text-[#666666]">Discover all the ways Meal Mate makes food management effortless</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {additionalFeatures.map((feature, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-12 h-12 bg-[#A3B18A]/10 rounded-full flex items-center justify-center mx-auto">
                      <feature.icon className="h-6 w-6 text-[#A3B18A]" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#333333]">{feature.title}</h3>
                    <p className="text-[#666666] text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Card className="border-2 border-[#FFB703]/20 shadow-2xl bg-gradient-to-br from-[#FFB703]/5 to-[#A3B18A]/5 max-w-2xl mx-auto">
              <CardContent className="p-12 space-y-6">
                <h2 className="text-3xl font-bold text-[#333333]">Ready to Start Saving?</h2>
                <p className="text-xl text-[#666666]">
                  Join thousands of users who are already reducing waste and saving money with Meal Mate.
                </p>
                <Button className="bg-[#FFB703] hover:bg-[#588157] text-white px-8 py-6 text-lg font-semibold rounded-full">
                  <Link to='/trackFoodExpiry'>
                  Get Started Free
                  </Link>
                </Button>
                <p className="text-sm text-[#666666]">No credit card required • Free forever plan available</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

    </div>
  )
}
