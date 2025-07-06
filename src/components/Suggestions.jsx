import React, { useState } from "react";
import toast from "react-hot-toast";
import { getGeminiResponse } from "../utils/gemin";

const Suggestions = () => {
  const [mealTime, setMealTime] = useState("");
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSuggest = async () => {
    if (!mealTime) {
      toast.error("Please select a meal time");
      return;
    }

    setLoading(true);
    setMeals([]);

    const prompt = `
Suggest 3 healthy and tasty Indian meals for hostel students for ${mealTime}.
Return the result in JSON array format with:
- title
- description

- order_link (Zomato or Swiggy if available)

Example:
[
  {
    "title": "Idli Sambar",
    "description": "Light, protein-rich South Indian breakfast.",
   
    "order_link": "https://www.swiggy.com"
  }
]
`;

    try {
      const result = await getGeminiResponse(prompt);

      const text = result?.candidates?.[0]?.content?.parts?.[0]?.text;
      const start = text.indexOf("[");
      const end = text.lastIndexOf("]");
      const json = JSON.parse(text.slice(start, end + 1));

      setMeals(json);
      toast.success("🍽️ Suggestions loaded!");
    } catch (error) {
      toast.error("Failed to get suggestions from Gemini.");
      console.error("Gemini error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-orange-50 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-3xl font-bold text-orange-600 mb-4 text-center">
          🍱 SmartMealMate – AI Meal Suggestions
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <select
            value={mealTime}
            onChange={(e) => setMealTime(e.target.value)}
            className="border border-orange-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-orange-400"
          >
            <option value="">Select Meal Time</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
          </select>

          <button
            onClick={handleSuggest}
            className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600"
          >
            Get Suggestions
          </button>
        </div>

        {loading && <p className="text-center">Loading...</p>}

        <div className="grid md:grid-cols-2 gap-6">
          {meals.map((meal, idx) => (
            <div key={idx} className="bg-orange-100 p-4 rounded-lg shadow-md">
              {/* <img
                src={meal.image_url}
                alt={meal.title}
                className="w-full h-40 object-cover rounded"
              /> */}
              <h3 className="text-xl font-bold mt-2">{meal.title}</h3>
              <p className="text-gray-700">{meal.description}</p>
              {meal.order_link && (
                <a
                  href={meal.order_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 mt-2 inline-block hover:underline"
                >
                  🍽️ Order Online →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
