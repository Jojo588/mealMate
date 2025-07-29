import React, { useState, useEffect } from "react"
import { Button } from "../components/ui/Button"
import { Input } from "../components/ui/Input"
import { Card, CardContent } from "../components/ui/Card"
import { Badge } from "../components/ui/Badge"
import { Search, Clock, Users } from "lucide-react"

function RecipePreviewSection() {
  const [searchQuery, setSearchQuery] = useState("")
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Fetch default recipes (e.g., chicken) on mount
    fetchRecipes("chicken")
  }, [])

const fetchRecipes = async (query = searchQuery) => {
  setLoading(true)
  setError(null)

  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    )
    const data = await response.json()
    if (data.meals) {
      const formatted = data.meals
        .slice(0, 3)
        .map((meal) => ({
          id: meal.idMeal,
          name: meal.strMeal,
          image: meal.strMealThumb,
          ingredients: Object.keys(meal)
            .filter((key) => key.startsWith("strIngredient") && meal[key])
            .map((key) => meal[key]),
          time: `${Math.floor(Math.random() * 21) + 10} min`,
          servings: Math.floor(Math.random() * 3) + 1,
          difficulty: ["Easy", "Medium", "Hard"][
            Math.floor(Math.random() * 3)
          ],
        }))
      setRecipes(formatted)
    } else {
      setRecipes([])
      setError("No recipes found.")
    }
  } catch (err) {
    setError("Failed to fetch recipes.")
  } finally {
    setLoading(false)
  }
}

function handleSubmit(){
  fetchRecipes()
}

  return (
    <section id="recipes" className="py-20 bg-white">
      <div className="container px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#333333]">
            Recipe <span className="text-[#A3B18A]">Recommendations</span>
          </h2>
          <p className="text-xl text-[#666666] max-w-2xl mx-auto">
            Discover delicious recipes using ingredients you already have.
          </p>
          <div className="inline-flex items-center space-x-2 bg-[#A3B18A]/10 px-4 py-2 rounded-full">
            <div className="w-2 h-2 bg-[#FFB703] rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-[#A3B18A]">
              Powered by MealDB API
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#666666]" />
            <Input
              type="text"
              placeholder="Search for a recipe..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-6 text-lg border-2 border-[#A3B18A]/20 focus:border-[#A3B18A] rounded-full bg-[#FAF9F6]"
            />
            <Button
              onClick={() => fetchRecipes()}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#FFB703] hover:bg-[#588157] text-white rounded-full px-6"
              type='submit'
            >
              Search
            </Button>
          </div>
          </div>
        </form>

        {loading && <p className="text-center text-[#A3B18A]">Loading recipes...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <Card
              key={recipe.id}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-[#FFB703] text-white">
                  {recipe.difficulty}
                </Badge>
              </div>

              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-[#333333]">
                  {recipe.name}
                </h3>

                <div className="flex items-center space-x-4 text-sm text-[#666666]">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{recipe.time}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{recipe.servings} servings</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-[#333333]">
                    Ingredients:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {recipe.ingredients.slice(0, 8).map((ingredient, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-[#A3B18A]/10 text-[#A3B18A] hover:bg-[#A3B18A]/20"
                      >
                        {ingredient}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-[#A3B18A] hover:bg-[#588157] text-white rounded-lg">
                  Cook Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RecipePreviewSection
