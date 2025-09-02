import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing";
import OnboardingPage from "./pages/Onboarding";
import Dashboard from "./pages/Dashboard";
import { useUser } from "./context/UserContext";

export default function App() {
  const { user } = useUser();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route
          path="/dashboard"
          element={user.openaiKey ? <Dashboard /> : <OnboardingPage />}
        />
      </Routes>
    </Router>
  );
}
