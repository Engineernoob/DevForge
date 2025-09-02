import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

export default function MicroExercises() {
  const exercises = [
    "Safe Mutations",
    "Reliable Scaffolds",
    "Iterative Refinement",
  ];

  return (
    <section className="py-20 px-6 md:px-20 text-center">
      <h2 className="text-3xl font-bold mb-6">Micro Exercises</h2>
      <p className="text-gray-300 mb-8">
        Practice production-ready coding patterns in bite-sized exercises.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {exercises.map((exercise) => (
          <Card key={exercise}>
            <h3 className="font-semibold text-xl mb-2">{exercise}</h3>
            <p className="text-gray-400">
              Quick, interactive exercise to reinforce patterns.
            </p>
            <Button className="mt-4">Start</Button>
          </Card>
        ))}
      </div>
    </section>
  );
}
