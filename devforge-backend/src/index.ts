import express from "express";
import cors from "cors";
import { OpenAI } from "openai";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/recommendations", async (req, res) => {
  const { learningStyle, favoriteTopics, completedExercises, userApiKey } =
    req.body;

  if (!userApiKey) {
    return res.status(400).json({ error: "User API key is required" });
  }

  const openai = new OpenAI({ apiKey: userApiKey });

  const prompt = `
    You are a coding tutor for neurodivergent students.
    Recommend 3 coding exercises and 3 lessons based on:
    - Learning style: ${learningStyle}
    - Topics: ${favoriteTopics.join(", ")}
    - Already completed exercises: ${completedExercises.join(", ")}

    Format your response as a JSON object with the following structure:
    {
      "exercises": [{"title": "", "topic": "", "difficulty": ""}],
      "lessons": [{"title": "", "topic": "", "description": ""}]
    }
    The exercises and lessons should be relevant to the topics and learning style,
    challenging but not too difficult.
  `;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 800,
    });

    const rawContent = response.choices[0].message?.content || "{}";

    // Parse the JSON response safely
    let recommendation;
    try {
      recommendation = JSON.parse(rawContent);
    } catch {
      console.warn("Failed to parse GPT response, returning raw content");
      recommendation = { exercises: [], lessons: [], raw: rawContent };
    }

    res.json({ recommendation });
  } catch (error) {
    console.error("AI Recommendation Error:", error);
    res.status(500).json({ error: "Failed to generate recommendations" });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
