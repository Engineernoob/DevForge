import { useEffect, useState } from "react";
import axios from "axios";
import WelcomeBanner from "../components/dashboard/WelcomeBanner";
import MicroExercisesList from "../components/dashboard/MicroExercisesList";
import RecommendedLessons from "../components/dashboard/RecommendedLessons";
import QuickQuizCard from "../components/dashboard/QuickQuizCard";
import { useUser } from "../context/UserContext";

export default function Dashboard() {
  const [recommendations, setRecommendations] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const { user } = useUser();
  useEffect(() => {
    async function fetchRecommendations() {
      if (!user.openaiKey) return;
      try {
        const { data } = await axios.post(
          "http://localhost:4000/recommendations",
          user
        );
        setRecommendations(data);
      } catch (err) {
        console.error("Failed to fetch AI recommendations", err);
      } finally {
        setLoading(false);
      }
    }
    fetchRecommendations();
  }, [user]);

  return (
    <main className="min-h-screen bg-gray-900 text-white px-6 md:px-20 py-10">
      <div>
        <h1>Welcome, {user.name}!</h1>
      </div>

      <WelcomeBanner name={user.name} learningStyle={user.learningStyle} />

      {loading ? (
        <p className="text-center text-gray-400">
          Loading your personalized lessons...
        </p>
      ) : recommendations ? (
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
      ) : (
        <p className="text-center text-red-500">
          Failed to load recommendations. Check your API key.
        </p>
      )}
    </main>
  );
}
