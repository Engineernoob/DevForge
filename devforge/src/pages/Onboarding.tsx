import { useState } from "react";
import Welcome from "../Onboarding/Welcome";
import Preferences from "../Onboarding/Preferences";
import Topics from "../Onboarding/Topics";
import Summary from "../Onboarding/Summary";
import ProgressBar from "../components/ui/ProgressBar";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function Onboarding() {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({
    name: "",
    learningStyle: "",
    favoriteTopics: [] as string[],
    openaiKey: "",
  });
  const navigate = useNavigate();
  const { user, updateUserField } = useUser();
  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleComplete = () => {
    updateUserField("name", userData.name);
    updateUserField("learningStyle", userData.learningStyle);
    updateUserField("favoriteTopics", userData.favoriteTopics);
    navigate("/dashboard"); // redirect after onboarding
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6">
      <ProgressBar step={step} />
      {step === 1 && <Welcome nextStep={nextStep} setUserData={setUserData} />}
      {step === 2 && (
        <Preferences
          nextStep={nextStep}
          prevStep={prevStep}
          userData={userData}
          setUserData={setUserData}
        />
      )}
      {step === 3 && (
        <Topics
          nextStep={nextStep}
          prevStep={prevStep}
          userData={userData}
          setUserData={setUserData}
        />
      )}
      {step === 4 && (
        <Summary
          userData={userData}
          prevStep={prevStep}
          handleComplete={handleComplete}
        />
      )}
      {step === 5 && <ProgressBar step={step} />}

      <form>
        <input
          type="text"
          placeholder="Name"
          value={user.name}
          onChange={(e) => updateUserField("name", e.target.value)}
        />
        <input
          type="text"
          placeholder="OpenAI API Key"
          value={userData.openaiKey}
          onChange={(e) =>
            setUserData({ ...userData, openaiKey: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Learning Style"
          value={userData.learningStyle}
          onChange={(e) =>
            setUserData({ ...userData, learningStyle: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Favorite Topics"
          value={userData.favoriteTopics.join(", ")}
          onChange={(e) =>
            setUserData({
              ...userData,
              favoriteTopics: e.target.value.split(", "),
            })
          }
        />
        <button type="button" onClick={handleComplete}>
          Complete
        </button>
      </form>
    </div>
  );
}
