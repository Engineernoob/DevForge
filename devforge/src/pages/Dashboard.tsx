import { useEffect, useState } from "react";
import axios from "axios";
import WelcomeBanner from "../components/dashboard/WelcomeBanner";
import MicroExercisesList from "../components/dashboard/MicroExercisesList";
import RecommendedLessons from "../components/dashboard/RecommendedLessons";
import QuickQuizCard from "../components/dashboard/QuickQuizCard";
import { useUser } from "../context/UserContext";
import Card from "../components/ui/Card";

export default function Dashboard() {
  const { user } = useUser();
  const [recommendation, setRecommendation] = useState<{
    exercises: any[];
    lessons: any[];
  }>({ exercises: [], lessons: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRecommendations = async () => {
      if (!user.openaiKey) {
        setError("No OpenAI key provided. Please enter it in onboarding.");
        setLoading(false);
        return;
      }

      setLoading(true);
      setError("");

      try {
        const { data } = await axios.post(
          "http://localhost:4000/recommendations",
          {
            learningStyle: user.learningStyle,
            favoriteTopics: user.favoriteTopics,
            completedExercises: user.completedExercises || [],
            userApiKey: user.openaiKey,
          }
        );

        if (data.recommendation) {
          setRecommendation({
            exercises: data.recommendation.exercises || [],
            lessons: data.recommendation.lessons || [],
          });
        } else {
          setError("No recommendations returned from AI.");
        }
      } catch (err) {
        console.error("Failed to fetch AI recommendations:", err);
        setError(
          "Failed to load recommendations. Check your API key or network."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, [user]);

  return (
    <main className="min-h-screen bg-gray-900 text-white px-6 md:px-20 py-10">
      <WelcomeBanner name={user.name} learningStyle={user.learningStyle} />

      {loading && <Card>Loading your personalized lessons...</Card>}

      {error && <Card>{error}</Card>}

      {!loading && !error && (
        <>
          <MicroExercisesList
            favoriteTopics={user.favoriteTopics}
            exercises={recommendation.exercises}
          />

          <RecommendedLessons
            favoriteTopics={user.favoriteTopics}
            lessons={recommendation.lessons}
          />

          <QuickQuizCard favoriteTopics={user.favoriteTopics} />
        </>
      )}
    </main>
  );
}
