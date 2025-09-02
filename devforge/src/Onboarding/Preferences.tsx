interface Props {
    nextStep: () => void;
    prevStep: () => void;
    userData: any;
    setUserData: React.Dispatch<React.SetStateAction<any>>;
  }
  
  export default function Preferences({ nextStep, prevStep, userData, setUserData }: Props) {
    const styles = ["Visual", "Hands-on", "Textual"];
  
    return (
      <div className="text-center max-w-md">
        <h2 className="text-3xl font-bold mb-4">Your Learning Style</h2>
        <p className="text-gray-300 mb-6">Choose what works best for you:</p>
        <div className="flex flex-col gap-4 mb-6">
          {styles.map((style) => (
            <button
              key={style}
              className={`py-3 px-6 rounded-xl ${
                userData.learningStyle === style ? "bg-green-500 text-black" : "bg-gray-700"
              }`}
              onClick={() => setUserData({ ...userData, learningStyle: style })}
            >
              {style}
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
  