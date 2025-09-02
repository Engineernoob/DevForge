import Card from "../ui/Card";
import Button from "../ui/Button";
import { useUser } from "../../context/UserContext";
import { useState } from "react";

interface Lesson {
  title: string;
  topic: string;
  description: string;
}

interface Props {
  favoriteTopics: string[];
  lessons?: Lesson[];
}

export default function RecommendedLessons({ favoriteTopics, lessons }: Props) {
  const { user, updateUserField } = useUser();
  const [completedLessons, setCompletedLessons] = useState<string[]>(
    user.completedLessons
  );

  // Filter lessons based on favorite topics
  const filtered =
    lessons?.filter((lesson) => favoriteTopics.includes(lesson.topic)) || [];

  const handleComplete = (title: string) => {
    if (!completedLessons.includes(title)) {
      const updated = [...completedLessons, title];
      setCompletedLessons(updated);
      updateUserField("completedLessons", updated);
    }
  };

  return (
    <section className="mb-10">
      <h2 className="text-3xl font-bold mb-6">Recommended Lessons</h2>
      {filtered.length === 0 ? (
        <p>No lessons match your selected topics yet.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {filtered.map((lesson) => {
            const isCompleted = completedLessons.includes(lesson.title);
            return (
              <Card key={lesson.title}>
                <h3 className="font-semibold text-xl mb-2">{lesson.title}</h3>
                <p>{lesson.description}</p>
                <Button
                  className="mt-4 w-full"
                  onClick={() => handleComplete(lesson.title)}
                  disabled={isCompleted}
                >
                  {isCompleted ? "Completed ✅" : "Start Lesson"}
                </Button>
              </Card>
            );
          })}
        </div>
      )}
    </section>
  );
}
