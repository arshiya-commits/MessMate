// utils/gemini.js

const GEMINI_API_KEY = "AIzaSyCojlB1Msng6fkFspsKZdjYu7fMszNvIt8";
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;

export async function getGeminiResponse(promptText) {
  try {
    const response = await fetch(GEMINI_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: promptText }],
          },
        ],
      }),
    });

    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error fetching Gemini response:", err);
    throw err;
  }
}
