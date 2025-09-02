import Button from "../components/ui/Button";

export default function DemoLesson() {
  return (
    <section className="py-20 px-6 md:px-20 bg-gray-800 text-white text-center rounded-xl mx-6">
      <h2 className="text-3xl font-bold mb-6">Try a Demo Lesson</h2>
      <p className="mb-4 text-gray-300">
        Edit the code below and see results instantly.
      </p>
      <div className="bg-gray-900 rounded-lg p-6">
        <textarea
          className="w-full h-40 bg-gray-800 text-green-400 p-4 rounded-lg font-mono"
          defaultValue={`function helloDevForge() {\n  console.log("Hello, DevForge!");\n}`}
        />
        <Button className="mt-4">Run Code</Button>
      </div>
    </section>
  );
}
