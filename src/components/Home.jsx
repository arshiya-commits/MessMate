import React, { useState, useEffect } from "react";
import messMenu from "../data/messMenu";

const Home = () => {
  const [selectedDay, setSelectedDay] = useState("");
  const [todayMenu, setTodayMenu] = useState({});

  const days = Object.keys(messMenu);

  // Get today's day name
  useEffect(() => {
    const today = new Date();
    const currentDay = today.toLocaleString("en-US", { weekday: "long" });
    setSelectedDay(currentDay);
    setTodayMenu(messMenu[currentDay]);
  }, []);

  const handleDayChange = (day) => {
    setSelectedDay(day);
    setTodayMenu(messMenu[day]);
  };

  return (
    <div className="min-h-screen bg-orange-50 px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-orange-600 mb-6">
        🍽️ Today's Mess Menu – {selectedDay}
      </h1>

      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6 space-y-4">
        {todayMenu && (
          <>
            <div className="border-b pb-2">
              <h2 className="text-xl font-semibold text-gray-800">Morning</h2>
              <p className="text-gray-600">{todayMenu.morning}</p>
            </div>
            <div className="border-b pb-2">
              <h2 className="text-xl font-semibold text-gray-800">Afternoon</h2>
              <p className="text-gray-600">{todayMenu.afternoon}</p>
            </div>
            <div className="border-b pb-2">
              <h2 className="text-xl font-semibold text-gray-800">Evening</h2>
              <p className="text-gray-600">{todayMenu.evening}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Night</h2>
              <p className="text-gray-600">{todayMenu.night}</p>
            </div>
          </>
        )}
      </div>

      <h2 className="text-xl font-semibold mt-10 mb-2 text-center text-orange-600">📅 View Menu by Day</h2>
      <div className="flex flex-wrap justify-center gap-3 mt-3">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => handleDayChange(day)}
            className={`px-4 py-2 rounded-full border transition ${
              selectedDay === day
                ? "bg-orange-500 text-white"
                : "bg-white border-orange-400 text-orange-500 hover:bg-orange-100"
            }`}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
