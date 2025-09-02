interface Props {
    nextStep: () => void;
    setUserData: React.Dispatch<React.SetStateAction<any>>;
  }
  
  export default function Welcome({ nextStep, setUserData }: Props) {
    return (
      <div className="text-center max-w-md">
        <h2 className="text-3xl font-bold mb-4">Welcome to DevForge!</h2>
        <p className="text-gray-300 mb-6">
          Let’s set up your personalized coding journey.
        </p>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded-lg mb-4 text-black"
          onChange={(e) => setUserData((prev: any) => ({ ...prev, name: e.target.value }))}
        />
        <button className="bg-green-500 hover:bg-green-600 py-3 px-8 rounded-2xl font-semibold" onClick={nextStep}>
          Next
        </button>
      </div>
    );
  }
  