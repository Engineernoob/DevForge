import Card from "../ui/Card";
import Button from "../ui/Button";

interface Props {
  favoriteTopics: string[];
  exercises?: { title: string; topic: string; difficulty: string }[];
}

export default function MicroExercisesList({ favoriteTopics, exercises }: Props) {
  const filtered = exercises?.filter((ex) => favoriteTopics.includes(ex.topic)) || [];

  return (
    <section className="mb-10">
      <h2 className="text-3xl font-bold mb-6">Micro Exercises</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {filtered.map((ex) => (
          <Card key={ex.title}>
            <h3 className="font-semibold text-xl mb-2">{ex.title}</h3>
            <p className="text-gray-400">
              Topic: {ex.topic} | Difficulty: {ex.difficulty}
            </p>
            <Button className="mt-4">Start</Button>
          </Card>
        ))}
      </div>
    </section>
  );
}
