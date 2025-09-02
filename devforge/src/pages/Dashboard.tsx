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
  const [recommendations, setRecommendations] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchRecommendations() {
      if (!user.openaiKey) {
        setError(
          "No OpenAI API key found. Please provide your key in onboarding."
        );
        setLoading(false);
        return;
      }

      setLoading(true);
      setError("");
      try {
        const { data } = await axios.post(
          "http://localhost:4000/recommendations",
          user
        );
        setRecommendations(data);
      } catch (err) {
        console.error("Failed to fetch AI recommendations", err);
        setError(
          "Failed to load recommendations. Check your API key or network."
        );
      } finally {
        setLoading(false);
      }
    }

    fetchRecommendations();
  }, [user]);

  return (
    <main className="min-h-screen bg-gray-900 text-white px-6 md:px-20 py-10">
      {/* Welcome Banner */}
      <WelcomeBanner name={user.name} learningStyle={user.learningStyle} />

      {/* Loading State */}
      {loading && <Card>Loading your personalized lessons...</Card>}

      {/* Error State */}
      {error && <Card>{error}</Card>}

      {/* Recommendations */}
      {!loading && !error && recommendations && (
        <>
          <MicroExercisesList
            favoriteTopics={user.favoriteTopics}
            exercises={recommendations.exercises}
          />
          <RecommendedLessons
            favoriteTopics={user.favoriteTopics}
            lessons={recommendations.lessons}
          />
          <QuickQuizCard favoriteTopics={user.favoriteTopics} />
        </>
      )}
    </main>
  );
}
