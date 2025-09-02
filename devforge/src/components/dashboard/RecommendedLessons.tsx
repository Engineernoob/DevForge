import Card from "../ui/Card";
import Button from "../ui/Button";

interface Props {
  favoriteTopics: string[];
  lessons?: { title: string; topic: string; description: string }[];
}

export default function RecommendedLessons({ favoriteTopics, lessons }: Props) {
  const filtered = lessons?.filter((lesson) => favoriteTopics.includes(lesson.topic)) || [];

  return (
    <section className="mb-10">
      <h2 className="text-3xl font-bold mb-6">Recommended Lessons</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {filtered.map((lesson) => (
          <Card key={lesson.title}>
            <h3 className="font-semibold text-xl mb-2">{lesson.title}</h3>
            <p className="text-gray-400">{lesson.description}</p>
            <Button className="mt-4">Start Lesson</Button>
          </Card>
        ))}
      </div>
    </section>
  );
}
