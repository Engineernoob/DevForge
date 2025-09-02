interface Props {
    prevStep: () => void;
    handleComplete: () => void;
    userData: any;
  }
  
  export default function Summary({ prevStep, handleComplete, userData }: Props) {
    return (
      <div className="text-center max-w-md">
        <h2 className="text-3xl font-bold mb-4">Review Your Choices</h2>
        <p className="text-gray-300 mb-6">Make sure everything looks good before starting your journey.</p>
        <div className="text-left mb-6">
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Learning Style:</strong> {userData.learningStyle}</p>
          <p><strong>Topics:</strong> {userData.favoriteTopics.join(", ") || "None selected"}</p>
        </div>
        <div className="flex justify-between">
          <button className="bg-gray-700 py-3 px-6 rounded-xl" onClick={prevStep}>
            Back
          </button>
          <button className="bg-green-500 py-3 px-6 rounded-xl" onClick={handleComplete}>
            Start Learning
          </button>
        </div>
      </div>
    );
  }
  