import { useState } from "react";
import Button from "../components/ui/Button";

export default function QuickQuiz() {
  const question = "Choose the best stack: Build a ____ app.";
  const options = ["React", "Vue", "Next.js", "Node.js"];
  const correctAnswer = "React";

  const [selected, setSelected] = useState<string | null>(null);
  const [feedback, setFeedback] = useState("");

  const handleSelect = (option: string) => {
    setSelected(option);
    if (option === correctAnswer) {
      setFeedback("✅ Correct!");
    } else {
      setFeedback("❌ Try Again!");
    }
  };

  return (
    <section className="py-20 px-6 md:px-20 bg-gray-800 text-center text-white rounded-xl mx-6">
      <h2 className="text-3xl font-bold mb-6">Quick Quiz</h2>
      <p className="text-gray-300 mb-8">{question}</p>
      <div className="flex flex-col md:flex-row justify-center gap-4">
        {options.map((option) => (
          <Button
            key={option}
            variant="outline"
            onClick={() => handleSelect(option)}
            className={selected === option ? "bg-green-500 text-black" : ""}
          >
            {option}
          </Button>
        ))}
      </div>
      {feedback && <p className="mt-4 text-xl font-semibold">{feedback}</p>}
    </section>
  );
}
