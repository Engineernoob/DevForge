export default function ProgressBar({ step }: { step: number }) {
    const progress = (step / 4) * 100;
    return (
      <div className="w-full max-w-md mb-6 bg-gray-700 rounded-full h-2">
        <div className="bg-green-500 h-2 rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
      </div>
    );
  }
  