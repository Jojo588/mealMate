const ExpiryDates = [
  { name: "Milk", expire: "7" },
  { name: "Opened Milk", expire: "7" },
  { name: "Yogurt", expire: "14" },
  { name: "Cheese", expire: "30" },
  { name: "Shredded Cheese", expire: "14" },
  { name: "Butter", expire: "60" },
  { name: "Cream Cheese", expire: "14" },
  { name: "Sour Cream", expire: "14" },
  { name: "Heavy Cream", expire: "7" },
  { name: "Opened Almond Milk", expire: "10" },
  { name: "Almond Milk", expire: "10" },
  { name: "Coconut Milk", expire: "7" },
  { name: "Opened Coconut Milk", expire: "7" },
  { name: "Eggs", expire: "21" },
  { name: "Egg", expire: "21" },
  { name: "boiled Eggs", expire: "7" },
  { name: "boiled Egg", expire: "7" },
  { name: "Raw Chicken", expire: "2" },
  { name: "Beef", expire: "3" },
  { name: "Raw Beef", expire: "3" },
  { name: "Uncooked Beef", expire: "3" },
  { name: "Pork", expire: "3" },
  { name: "Raw Pork", expire: "3" },
  { name: "Uncooked Pork", expire: "3" },
  { name: "Fish", expire: "2" },
  { name: "Fresh Fish", expire: "2" },
  { name: "Shrimp", expire: "2" },
  { name: "Fresh Shrimp", expire: "2" },
  { name: "Clams", expire: "1 day" },
  { name: "Fresh Clams", expire: "1 day" },
  { name: "Mussels", expire: "1 day" },
  { name: "Fresh Mussels", expire: "1 day" },
  { name: "Lobster", expire: "1 day" },
  { name: "Fresh Lobster", expire: "1 day" },
  { name: "Cooked Chicken", expire: "4" },
  { name: "Cooked Beef", expire: "4" },
  { name: "cooked Pork", expire: "4" },
  { name: "cooked Fish", expire: "3" },
  { name: "Cooked Shrimp", expire: "3" },
  { name: "Cooked Bacon", expire: "7" },
  { name: "Cooked Ham", expire: "7" },
  { name: "Cooked Sausage", expire: "7" },
  { name: "Fried Sausage", expire: "7" },
  { name: "Cooked Rice", expire: "6" },
  { name: "Cooked Yam", expire: "5" },
  { name: "Cooked Pasta", expire: "5" },
  { name: "Cooked Beans", expire: "5" },
  { name: "Fried Rice", expire: "5" },
  { name: "Jollof Rice", expire: "5" },
  { name: "White Rice", expire: "6" },
  { name: "Coconut Rice", expire: "5" },
  { name: "Yam Porridge", expire: "4" },
  { name: "Vegetable Soup", expire: "4" },
  { name: "Tomato Stew", expire: "5" },
  { name: "Tomato Sauce", expire: "5" },
  { name: "Pepper Soup", expire: "4" },
  { name: "Egusi Soup", expire: "4" },
  { name: "Ogbono Soup", expire: "4" },
  { name: "Okra Soup", expire: "4" },
  { name: "Efo Riro", expire: "4" },
  { name: "Spinach Stew", expire: "4" },
  { name: "Groundnut Soup", expire: "5" },
  { name: "Banga Soup", expire: "5" },
  { name: "Palm nut soup", expire: "5" },
  { name: "Chicken Soup", expire: "5" },
  { name: "Beef Stew", expire: "5" },
  { name: "Seafood Gumbo", expire: "4" },
  { name: "Chili", expire: "5" },
  { name: "Chilis", expire: "5" },
  { name: "Chili (with meat)", expire: "5" },
  { name: "Lasagna", expire: "5" },
  { name: "Shepherd’s Pie", expire: "5" },
  { name: "Shepherd’s Pies", expire: "5" },
  { name: "Macaroni and Cheese", expire: "5" },
  { name: "Macaroni with Cheese", expire: "5" },
  { name: "Chicken Curry", expire: "5" },
  { name: "Curry (Vegetarian)", expire: "5" },
  { name: "Vegetarian Curry", expire: "5" },
  { name: "Pounded Yam", expire: "3" },
  { name: "Amala", expire: "3" },
  { name: "Eba", expire: "3" },
  { name: "Fufu", expire: "3" },
  { name: "Moi Moi", expire: "5" },
  { name: "Akara", expire: "2" },
  { name: "bean cake", expire: "2" },
  { name: "bean cakes", expire: "2" },
  { name: "Pancake", expire: "3" },
  { name: "Pancakes", expire: "3" },
  { name: "Waffles", expire: "3" },
  { name: "Waffle", expire: "3" },
  { name: "Banana", expire: "7" },
  { name: "Bananas", expire: "7" },
  { name: "Apple", expire: "30" },
  { name: "Apples", expire: "30" },
  { name: "Orange", expire: "30" },
  { name: "Oranges", expire: "30" },
  { name: "Lemon", expire: "30" },
  { name: "Lemons", expire: "30" },
  { name: "Strawberry", expire: "5" },
  { name: "Strawberries", expire: "5" },
  { name: "Blueberry", expire: "7" },
  { name: "Blueberries", expire: "7" },
  { name: "Raspberries", expire: "3" },
  { name: "Raspberries", expire: "3" },
  { name: "Blackberry", expire: "4" },
  { name: "Blackberries", expire: "4" },
  { name: "Grapes", expire: "7" },
  { name: "Grape", expire: "7" },
  { name: "Avocado", expire: "5" },
  { name: "Avocados", expire: "5" },
  { name: "Tomato", expire: "7" },
  { name: "Tomatoes", expire: "7" },
  { name: "Lettuce", expire: "7" },
  { name: "Lettuce", expire: "7" },
  { name: "Spinach", expire: "5" },
  { name: "Kale", expire: "7" },
  { name: "Kales", expire: "7" },
  { name: "Carrot", expire: "28" },
  { name: "Carrots", expire: "28" },
  { name: "Broccoli", expire: "7" },
  { name: "Cauliflower", expire: "7" },
  { name: "Cauliflowers", expire: "7" },
  { name: "Onion", expire: "30" },
  { name: "Onions", expire: "30" },
  { name: "Garlic", expire: "90" },
  { name: "Garlics", expire: "90" },
  { name: "Cucumber", expire: "7" },
  { name: "Cucumbers", expire: "7" },
  { name: "Bell Pepper", expire: "7" },
  { name: "Bell Peppers", expire: "7" },
  { name: "Celery", expire: "14" },
  { name: "Celeries", expire: "14" },
  { name: "Mushrooms", expire: "5" },
  { name: "Mushroom", expire: "5" },
  { name: "Zucchini", expire: "7" },
  { name: "Green Beans", expire: "7" },
  { name: "Green Bean", expire: "7" },
  { name: "Sweet Potato", expire: "30" },
  { name: "Sweet Potatoes", expire: "30" },
  { name: "Irish Potato", expire: "60" },
  { name: "Irish Potatoes", expire: "60" },
  { name: "Uncooked Rice", expire: "730" },
  { name: "Uncooked Pasta", expire: "730" },
  { name: "Uncooked spag", expire: "730" },
  { name: "Uncooked spaghetti", expire: "730" },
  { name: "Oats", expire: "365" },
  { name: "Oat", expire: "365" },
  { name: "Flour", expire: "180" },
  { name: "Sugar", expire: "730" },
  { name: "Brown Sugar", expire: "180" },
  { name: "Cereal", expire: "30" },
  { name: "Cereals", expire: "30" },
  { name: "Bread", expire: "5" },
  { name: "Frozen Bread", expire: "90" },
  { name: "Canned Tuna", expire: "3" },
  { name: "Canned Beans", expire: "5" },
  { name: "Tomato Paste", expire: "7" },
  { name: "Tin Tomato Paste", expire: "7" },
  { name: "Tomato Sauce", expire: "5" },
  { name: "Salsa", expire: "14" },
  { name: "Pickles", expire: "90" },
  { name: "Pickle", expire: "90" },
  { name: "Relish", expire: "90" },
  { name: "Pesto", expire: "7" },
  { name: "Jam", expire: "90" },
  { name: "Honey", expire: "730" },
  { name: "Peanut Butter", expire: "180" },
  { name: "Mayonnaise", expire: "60" },
  { name: "Ketchup", expire: "180" },
  { name: "Mustard", expire: "365" },
  { name: "Olive Oil", expire: "540" },
  { name: "Canola Oil", expire: "365" },
  { name: "Vegetable Oil", expire: "365" },
  { name: "Peanuts", expire: "180" },
  { name: "Peanut", expire: "180" },
  { name: "Almonds", expire: "180" },
  { name: "Almond", expire: "180" },
  { name: "Cashews", expire: "180" },
  { name: "Cashew", expire: "180" },
  { name: "Walnuts", expire: "180" },
  { name: "Walnut", expire: "180" },
  { name: "Chia Seeds", expire: "365" },
  { name: "Chia Seed", expire: "365" },
  { name: "Flax Seeds", expire: "365" },
  { name: "Flax Seed", expire: "365" },
  { name: "Sunflower Seeds", expire: "180" },
  { name: "Sunflower Seed", expire: "180" },
  { name: "Pumpkin Seeds", expire: "180" },
  { name: "Pumpkin Seed", expire: "180" },
  { name: "fresh Basil", expire: "7" },
  { name: "Basil", expire: "7" },
  { name: "Fresh Cilantro", expire: "5" },
  { name: "Cilantro", expire: "5" },
  { name: "FreshParsley", expire: "7" },
  { name: "Parsley", expire: "7" },
  { name: "fresh Mint", expire: "7" },
  { name: "Mint", expire: "7" },
  { name: "Fresh Rosemary", expire: "14" },
  { name: "Rosemary", expire: "14" },
  { name: "Fresh Thyme", expire: "14" },
  { name: "Fresh Oregano", expire: "14" },
  { name: "Frozen Vegetables", expire: "365" },
  { name: "Frozen Fruits", expire: "365" },
  { name: "Frozen Pizza", expire: "180" },
  { name: "Frozen Chicken Nuggets", expire: "180" },
  { name: "Ice Cream", expire: "90" }
];
export default ExpiryDates;