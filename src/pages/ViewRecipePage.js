import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Clock, Users, ArrowLeft } from "lucide-react";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";

const ViewRecipePage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchRecipe() {
      try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        if (!data.meals || data.meals.length === 0) {
          setError(true);
        } else {
          setRecipe(data.meals[0]);
        }
      } catch (err) {
        console.error("Failed to fetch recipe:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchRecipe();
  }, [id]);

  if (loading) {
    return <div className="text-center py-20 text-gray-500">Loading recipe...</div>;
  }

  if (error || !recipe) {
    return (
      <div className="min-h-screen bg-[#FAF9F6] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-semibold text-[#333333] mb-4">Recipe details could not be found.</h2>
        <Link to="/recipes">
          <Button className="flex items-center gap-2 bg-[#A3B18A] text-white hover:bg-[#588157]">
            <ArrowLeft className="h-4 w-4" /> Back to Recipes
          </Button>
        </Link>
      </div>
    );
  }

  const ingredients = [...Array(20).keys()]
    .map((i) => ({
      ingredient: recipe[`strIngredient${i + 1}`],
      measure: recipe[`strMeasure${i + 1}`],
    }))
    .filter((item) => item.ingredient && item.ingredient.trim() !== "");

  return (
    <div className="min-h-screen bg-[#FAF9F6] py-16 px-4">
      <div className="max-w-5xl mx-auto space-y-8">
        <Link to="/recipes">
          <Button className="flex items-center gap-2 bg-[#A3B18A] text-white hover:bg-[#588157]">
            <ArrowLeft className="h-4 w-4" /> Back to Recipes
          </Button>
        </Link>

        <h1 className="text-4xl font-bold text-[#333333]">{recipe.strMeal}</h1>
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="rounded-lg w-full max-h-[400px] object-cover"
        />

        <div className="flex items-center space-x-6 text-[#666666]">
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4" />
            <span>~30 min</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="h-4 w-4" />
            <span>2–4 servings</span>
          </div>
          <Badge className="bg-[#FFB703] text-white">{recipe.strCategory}</Badge>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc ml-6 text-[#333333]">
            {ingredients.map((item, idx) => (
              <li key={idx}>
                {item.ingredient} - {item.measure}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
          <p className="whitespace-pre-line leading-relaxed text-[#444444]">
            {recipe.strInstructions}
          </p>
        </div>

        {recipe.strYoutube && (
          <div>
            <h2 className="text-2xl font-semibold mb-2">Watch Tutorial</h2>
            <iframe
              title="Recipe Video"
              width="100%"
              height="400"
              src={`https://www.youtube.com/embed/${recipe.strYoutube.split("v=")[1]}`}
              frameBorder="0"
              allowFullScreen
              className="rounded-md"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewRecipePage;
