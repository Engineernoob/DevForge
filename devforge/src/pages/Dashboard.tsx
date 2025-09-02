import { useEffect, useState } from "react";
import axios from "axios";
import WelcomeBanner from "../components/dashboard/WelcomeBanner";
import MicroExercisesList from "../components/dashboard/MicroExercisesList";
import RecommendedLessons from "../components/dashboard/RecommendedLessons";
import QuickQuizCard from "../components/dashboard/QuickQuizCard";

export default function Dashboard({ userData }: { userData: any }) {
  const [recommendations, setRecommendations] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRecommendations() {
      if (!userData.openaiKey) return;
      try {
        const { data } = await axios.post(
          "http://localhost:4000/recommendations",
          userData
        );
        setRecommendations(data);
      } catch (err) {
        console.error("Failed to fetch AI recommendations", err);
      } finally {
        setLoading(false);
      }
    }
    fetchRecommendations();
  }, [userData]);

  return (
    <main className="min-h-screen bg-gray-900 text-white px-6 md:px-20 py-10">
      <WelcomeBanner
        name={userData.name}
        learningStyle={userData.learningStyle}
      />

      {loading ? (
        <p className="text-center text-gray-400">
          Loading your personalized lessons...
        </p>
      ) : recommendations ? (
        <>
          <MicroExercisesList
            favoriteTopics={userData.favoriteTopics}
            exercises={recommendations.exercises}
          />
          <RecommendedLessons
            favoriteTopics={userData.favoriteTopics}
            lessons={recommendations.lessons}
          />
          <QuickQuizCard favoriteTopics={userData.favoriteTopics} />
        </>
      ) : (
        <p className="text-center text-red-500">
          Failed to load recommendations. Check your API key.
        </p>
      )}
    </main>
  );
}
