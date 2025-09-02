import { useState } from "react";
import Button from "../ui/Button";

interface Props {
  favoriteTopics: string[];
}

export default function QuickQuizCard({ favoriteTopics }: Props) {
  // Sample dynamic question based on topics
  const question = `Which topic should you study first: ${favoriteTopics[0]} or ${favoriteTopics[1]}?`;
  const options = favoriteTopics;

  const [selected, setSelected] = useState<string | null>(null);
  const [feedback, setFeedback] = useState("");

  const handleSelect = (option: string) => {
    setSelected(option);
    setFeedback(
      option === favoriteTopics[0]
        ? "✅ Correct choice!"
        : "❌ Consider starting with the first topic."
    );
  };

  return (
    <section className="mb-10 bg-gray-800 p-6 rounded-xl text-center">
      <h2 className="text-3xl font-bold mb-4">Quick Quiz</h2>
      <p className="text-gray-300 mb-6">{question}</p>
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
      {feedback && <p className="mt-4 font-semibold">{feedback}</p>}
    </section>
  );
}
