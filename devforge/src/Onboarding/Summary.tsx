interface Props {
  prevStep: () => void;
  handleComplete: () => void;
  userData: any;
}

export default function Summary({ prevStep, handleComplete, userData }: Props) {
  // Mask OpenAI key for security
  const maskedKey = userData.openaiKey
    ? `${userData.openaiKey.slice(0, 4)}****${userData.openaiKey.slice(-4)}`
    : "Not provided";

  return (
    <div className="text-center max-w-md p-6 bg-gray-800 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-4">Review Your Choices</h2>
      <p className="text-gray-300 mb-6">
        Make sure everything looks good before starting your journey.
      </p>

      <div className="text-left mb-6 space-y-2">
        <p>
          <strong>Name:</strong> {userData.name || "Not provided"}
        </p>
        <p>
          <strong>Learning Style:</strong>{" "}
          {userData.learningStyle || "Not selected"}
        </p>
        <p>
          <strong>Topics:</strong>{" "}
          {userData.favoriteTopics.join(", ") || "None selected"}
        </p>
        <p>
          <strong>OpenAI Key:</strong> {maskedKey}
        </p>
      </div>

      <div className="flex justify-between mt-6">
        <button
          className="bg-gray-700 py-3 px-6 rounded-xl hover:bg-gray-600 transition"
          onClick={prevStep}
        >
          Back
        </button>
        <button
          className="bg-green-500 py-3 px-6 rounded-xl hover:bg-green-400 transition"
          onClick={handleComplete}
        >
          Start Learning
        </button>
      </div>
    </div>
  );
}
