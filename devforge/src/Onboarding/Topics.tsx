interface Props {
    nextStep: () => void;
    prevStep: () => void;
    userData: any;
    setUserData: React.Dispatch<React.SetStateAction<any>>;
  }
  
  export default function Topics({ nextStep, prevStep, userData, setUserData }: Props) {
    const topics = ["React", "Node.js", "Python", "Algorithms", "Data Structures"];
  
    const toggleTopic = (topic: string) => {
      const updated = userData.favoriteTopics.includes(topic)
        ? userData.favoriteTopics.filter((t: string) => t !== topic)
        : [...userData.favoriteTopics, topic];
      setUserData({ ...userData, favoriteTopics: updated });
    };
  
    return (
      <div className="text-center max-w-md">
        <h2 className="text-3xl font-bold mb-4">Favorite Topics</h2>
        <p className="text-gray-300 mb-6">Select topics you want to focus on:</p>
        <div className="flex flex-col gap-3 mb-6">
          {topics.map((topic) => (
            <button
              key={topic}
              className={`py-3 px-6 rounded-xl ${
                userData.favoriteTopics.includes(topic) ? "bg-green-500 text-black" : "bg-gray-700"
              }`}
              onClick={() => toggleTopic(topic)}
            >
              {topic}
            </button>
          ))}
        </div>
        <div className="flex justify-between">
          <button className="bg-gray-700 py-3 px-6 rounded-xl" onClick={prevStep}>
            Back
          </button>
          <button className="bg-green-500 py-3 px-6 rounded-xl" onClick={nextStep}>
            Next
          </button>
        </div>
      </div>
    );
  }
  