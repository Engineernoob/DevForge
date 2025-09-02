import Card from "../ui/Card";
import Button from "../ui/Button";

interface Props {
  favoriteTopics: string[];
}

export default function RecommendedLessons({ favoriteTopics }: Props) {
  const lessons = [
    { title: "React Hooks Deep Dive", topic: "React" },
    { title: "Graph Algorithms", topic: "Algorithms" },
    { title: "Node.js REST APIs", topic: "Node.js" },
  ];

  const filtered = lessons.filter((lesson) =>
    favoriteTopics.includes(lesson.topic)
  );

  return (
    <section className="mb-10">
      <h2 className="text-3xl font-bold mb-6">Recommended Lessons</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {filtered.map((lesson) => (
          <Card key={lesson.title}>
            <h3 className="font-semibold text-xl mb-2">{lesson.title}</h3>
            <p className="text-gray-400">Focused on {lesson.topic} concepts.</p>
            <Button className="mt-4">Start Lesson</Button>
          </Card>
        ))}
      </div>
    </section>
  );
}
