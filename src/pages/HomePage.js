import HeroSection from "../components/HeroSection"
import FeaturesSection from "../components/FeaturesSection"
import HowItWorksSection from "../components/HowItWorksSection"
import RecipePreviewSection from "../components/RecipePreviewSection"
import DashboardPreviewSection from "../components/DashboardPreviewSection"
import TestimonialsSection from "../components/TestimonialsSection"

export default function Home({
  searchTerm,
  setSearchTerm,
  foodItems,
  setFoodItems,
  recipes,
  isLoggedIn,
}) {
  return (
    <div className="min-h-screen bg-[#FAF9F6]">
        <HeroSection
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              foodItems={foodItems}
              setFoodItems={setFoodItems}
              isLoggedIn={isLoggedIn}
              />
        <FeaturesSection />
        <HowItWorksSection />
        <RecipePreviewSection />
        {isLoggedIn &&
        <DashboardPreviewSection
              foodItems={foodItems}
              recipes={recipes}
        />
        }
        <TestimonialsSection />
    </div>
  )
}
