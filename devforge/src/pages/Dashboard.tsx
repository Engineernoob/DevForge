import WelcomeBanner from "../components/dashboard/WelcomeBanner";
import MicroExercisesList from "../components/dashboard/MicroExercisesList";
import RecommendedLessons from "../components/dashboard/RecommendedLessons";
import QuickQuizCard from "../components/dashboard/QuickQuizCard";

// Simulated user data (replace with context or backend)
const userData = {
  name: "Alex",
  learningStyle: "Hands-on",
  favoriteTopics: ["React", "Algorithms"],
};

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gray-900 text-white px-6 md:px-20 py-10">
      <WelcomeBanner
        name={userData.name}
        learningStyle={userData.learningStyle}
      />
      <MicroExercisesList favoriteTopics={userData.favoriteTopics} />
      <RecommendedLessons favoriteTopics={userData.favoriteTopics} />
      <QuickQuizCard favoriteTopics={userData.favoriteTopics} />
    </main>
  );
}
