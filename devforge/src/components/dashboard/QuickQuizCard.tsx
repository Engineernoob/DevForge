import { useState, useEffect } from "react";
import Button from "../ui/Button";

interface Props {
  favoriteTopics: string[];
}

export default function QuickQuizCard({ favoriteTopics }: Props) {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [feedback, setFeedback] = useState("");

  // Generate a simple dynamic question based on topics
  useEffect(() => {
    if (favoriteTopics.length >= 2) {
      setQuestion(
        `Which topic should you study first: ${favoriteTopics[0]} or ${favoriteTopics[1]}?`
      );
      setOptions([favoriteTopics[0], favoriteTopics[1]]);
    } else if (favoriteTopics.length === 1) {
      setQuestion(`Focus on: ${favoriteTopics[0]}. Are you ready?`);
      setOptions([favoriteTopics[0]]);
    } else {
      setQuestion("No topics selected yet. Complete onboarding first!");
      setOptions([]);
    }
  }, [favoriteTopics]);

  const handleSelect = (option: string) => {
    setSelected(option);
    setFeedback(
      option === options[0]
        ? "✅ Correct choice!"
        : "❌ Consider starting with the first topic."
    );
  };

  return (
    <section className="mb-10 bg-gray-800 p-6 rounded-xl text-center">
      <h2 className="text-3xl font-bold mb-4">Quick Quiz</h2>
      <p className="mb-6">{question}</p>

      {options.length > 0 ? (
        <div className="flex flex-col md:flex-row justify-center gap-4">
          {options.map((option) => (
            <Button
              key={option}
              variant="outline"
              onClick={() => handleSelect(option)}
              className={`transition-colors ${
                selected === option ? "bg-green-500 text-black" : ""
              }`}
            >
              {option}
            </Button>
          ))}
        </div>
      ) : (
        <p>No quiz available yet.</p>
      )}

      {feedback && <p className="mt-4 font-semibold">{feedback}</p>}
    </section>
  );
}
