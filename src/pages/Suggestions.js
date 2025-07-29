import { useEffect, useState, useRef } from "react";

export default function Suggestions({ recipes, setRecipes }) {
  const [items, setItems] = useState([]);
  const prevItemsRef = useRef(null);

  const fetchRecipes = async (fridgeItems) => {
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s="
      );
      const data = await response.json();

      if (data.meals) {
        const ingredients = fridgeItems
          .map((item) => item.itemName?.toLowerCase())
          .filter(Boolean);

        const matching = data.meals.filter((meal) => {
          const mealIngredients = [];
          for (let i = 1; i <= 20; i++) {
            const ingredient = meal[`strIngredient${i}`];
            if (ingredient) {
              mealIngredients.push(ingredient.toLowerCase());
            }
          }
          return mealIngredients.some((ing) => ingredients.includes(ing));
        });

        setRecipes(matching);
      } else {
        setRecipes([]);
      }
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

       useEffect(() => {
        const interval = setInterval(() => {
        const stored = JSON.parse(localStorage.getItem("fridgeItems")) || [];

      // Only fetch again if items have changed
      if (JSON.stringify(stored) !== JSON.stringify(prevItemsRef.current)) {
        prevItemsRef.current = stored;
        setItems(stored);
        fetchRecipes(stored);
          }
        }, 2000); // Check every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-200 p-4">
      <h2 className="text-2xl font-bold mb-4">Suggested Meals 🍽</h2>
      {recipes.length > 0 ? (
        <div className="grid gap-4">
          {recipes.map((recipe) => (
            <div key={recipe.idMeal} className="bg-white p-4 rounded-xl shadow">
              <h3 className="text-lg font-semibold">{recipe.strMeal}</h3>
              <p className="text-sm text-gray-600">
                Ingredients:{" "}
                {[...Array(20)]
                  .map((_, i) => recipe[`strIngredient${i + 1}`])
                  .filter((ing) => ing)
                  .join(", ")}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">
          No recipes match your current food items.
        </p>
      )}
    </div>
  );
}
