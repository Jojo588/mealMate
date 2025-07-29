import React, { useEffect, useState } from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Card, CardContent } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { Search, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function RecipesPage() {
  const [allRecipes, setAllRecipes] = useState([]);
  const [visibleRecipes, setVisibleRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Chicken");
  const [loadCount, setLoadCount] = useState(6);
  const [loading, setLoading] = useState(false);

  const categories = ["All", "Beef", "Chicken", "Dessert", "Pasta", "Seafood", "Vegetarian"];

  useEffect(() => {
    fetchRecipesByCategory(selectedCategory);
  }, [selectedCategory]);

  const fetchRecipesByCategory = async (category) => {
    setLoading(true);
    const url =
      category === "All"
        ? "https://www.themealdb.com/api/json/v1/1/search.php?s="
        : `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data.meals) {
        const detailedMeals = await Promise.all(
          data.meals.map(async (meal) => {
            const res = await fetch(
              `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`
            );
            const full = await res.json();
            return full.meals[0];
          })
        );
        setAllRecipes(detailedMeals);
        setVisibleRecipes(detailedMeals.slice(0, loadCount));
      } else {
        setAllRecipes([]);
        setVisibleRecipes([]);
      }
    } catch (error) {
      console.error("Failed to fetch recipes:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    setSelectedCategory("All");
    setLoading(true);
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
      );
      const data = await res.json();
      const meals = data.meals || [];
      setAllRecipes(meals);
      setVisibleRecipes(meals.slice(0, loadCount));
    } catch (error) {
      console.error("Search failed:", error);
    } finally {
      setLoading(false);
    }
  };

  function handleSubmit(){
    handleSearch()
  }

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      const nextCount = loadCount + 6;
      setLoadCount(nextCount);
      setVisibleRecipes(allRecipes.slice(0, nextCount));
      setLoading(false);
    }, 1000); // Simulate network delay
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <main className="py-20">
        <div className="container px-4">
          {/* Hero Section */}
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#333333]">
              Recipe <span className="text-[#A3B18A]">Collection</span>
            </h1>
            <p className="text-xl text-[#666666] max-w-2xl mx-auto">
              Discover delicious recipes designed to use common ingredients and reduce food waste.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-12 space-y-6">
          <form onSubmit={handleSearch}>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#666666]" />
              <Input
                type="text"
                placeholder="Search recipes or ingredients..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 text-lg border-2 border-[#A3B18A]/20 focus:border-[#A3B18A] rounded-full bg-white"
              />
              <Button
                onClick={handleSearch}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#FFB703] hover:bg-[#588157] text-white rounded-full px-6"
              >
                Search
              </Button>
            </div>
            </form>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory(category);
                    setLoadCount(6);
                  }}
                  variant={category === selectedCategory ? "default" : "outline"}
                  className={
                    category === selectedCategory
                      ? "bg-[#A3B18A] hover:bg-[#588157] text-white"
                      : "border-[#A3B18A]/20 text-[#666666] hover:bg-[#A3B18A]/10"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Recipe Grid */}
          {loading ? (
            <div className="text-center text-lg text-[#666666] py-12">
              <span className="animate-pulse">Loading recipes...</span>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visibleRecipes.map((recipe) => (
                <Card
                  key={recipe.idMeal}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={recipe.strMealThumb}
                      alt={recipe.strMeal}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-[#FFB703] text-white">
                      {recipe.strCategory || "Meal"}
                    </Badge>
                  </div>

                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold text-[#333333]">
                      {recipe.strMeal}
                    </h3>

                    <div className="flex items-center space-x-4 text-sm text-[#666666]">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>~30 min</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>2–4 servings</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-medium text-[#333333]">
                        Key ingredients:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {[...Array(3).keys()]
                          .map((i) => recipe[`strIngredient${i + 1}`])
                          .filter(Boolean)
                          .map((ingredient, idx) => (
                            <Badge
                              key={idx}
                              variant="secondary"
                              className="bg-[#A3B18A]/10 text-[#A3B18A] hover:bg-[#A3B18A]/20"
                            >
                              {ingredient}
                            </Badge>
                          ))}
                      </div>
                    </div>

                    <Link to={`/recipe/${recipe.idMeal}`}>
                      <Button className="w-full bg-[#A3B18A] hover:bg-[#588157] text-white rounded-lg">
                        View Recipe
                      </Button>
                    </Link>

                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Load More */}
          {!loading && visibleRecipes.length < allRecipes.length && (
            <div className="text-center mt-12">
              <Button
                onClick={handleLoadMore}
                variant="outline"
                className="border-[#A3B18A] text-[#A3B18A] hover:bg-[#A3B18A] hover:text-white px-8 py-3 bg-transparent"
              >
                Load More Recipes
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
