import Card from "../ui/Card";
import Button from "../ui/Button";
import { useUser } from "../../context/UserContext";
import { useState } from "react";

interface Exercise {
  title: string;
  topic: string;
  difficulty: string;
}

interface Props {
  favoriteTopics: string[];
  exercises?: Exercise[];
}

export default function MicroExercisesList({
  favoriteTopics,
  exercises,
}: Props) {
  const { user, updateUserField } = useUser();
  const [completedExercises, setCompletedExercises] = useState<string[]>(
    user.completedExercises
  );

  // Filter exercises based on user-selected topics
  const filtered =
    exercises?.filter((ex) => favoriteTopics.includes(ex.topic)) || [];

  const handleComplete = (title: string) => {
    if (!completedExercises.includes(title)) {
      const updated = [...completedExercises, title];
      setCompletedExercises(updated);
      updateUserField("completedExercises", updated);
    }
  };

  return (
    <section className="mb-10">
      <h2 className="text-3xl font-bold mb-6">Micro Exercises</h2>
      {filtered.length === 0 ? (
        <p>No exercises match your selected topics yet.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {filtered.map((ex) => {
            const isCompleted = completedExercises.includes(ex.title);
            return (
              <Card key={ex.title}>
                <h3 className="font-semibold text-xl mb-2">{ex.title}</h3>
                <p className="text-gray-400">
                  Topic: {ex.topic} | Difficulty: {ex.difficulty}
                </p>
                <Button
                  className="mt-4 w-full"
                  onClick={() => handleComplete(ex.title)}
                  disabled={isCompleted}
                >
                  {isCompleted ? "Completed ✅" : "Start"}
                </Button>
              </Card>
            );
          })}
        </div>
      )}
    </section>
  );
}
