import Button from "../components/ui/Button";

export default function QuickQuiz() {
  const options = ["React", "Vue", "Next.js", "Node.js"];
  return (
    <section className="py-20 px-6 md:px-20 bg-gray-800 text-center text-white rounded-xl mx-6">
      <h2 className="text-3xl font-bold mb-6">Quick Quiz</h2>
      <p className="text-gray-300 mb-8">Test your knowledge instantly.</p>
      <div className="flex flex-col md:flex-row justify-center gap-4">
        {options.map((option) => (
          <Button key={option} variant="outline">
            {option}
          </Button>
        ))}
      </div>
    </section>
  );
}
