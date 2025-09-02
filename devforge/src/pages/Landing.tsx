import { useState } from "react";
import { motion } from "framer-motion";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

export default function Landing() {
  /** Demo Lesson state */
  const [code, setCode] = useState(
    `function helloDevForge() {\n  console.log("Hello, DevForge!");\n}`
  );
  const [output, setOutput] = useState<string>("");

  const runCode = () => {
    try {
      let consoleOutput = "";
      const originalConsole = console.log;
      console.log = (msg: any) => (consoleOutput += msg + "\n");
      new Function(code)();
      console.log = originalConsole;
      setOutput(consoleOutput || "Code executed!");
    } catch (err: any) {
      setOutput("Error: " + err.message);
    }
  };

  /** Quick Quiz state */
  const question = "Choose the best stack: Build a ____ app.";
  const options = ["React", "Vue", "Next.js", "Node.js"];
  const correctAnswer = "React";
  const [selected, setSelected] = useState<string | null>(null);
  const [feedback, setFeedback] = useState("");

  const handleSelect = (option: string) => {
    setSelected(option);
    setFeedback(option === correctAnswer ? "✅ Correct!" : "❌ Try Again!");
  };

  const exercises = [
    "Safe Mutations",
    "Reliable Scaffolds",
    "Iterative Refinement",
  ];
  const features = [
    {
      title: "AI Pairing",
      desc: "Learn collaboratively with AI that guides your craft.",
    },
    {
      title: "Accessibility",
      desc: "High-contrast, neurodivergent-friendly design.",
    },
  ];
  const testimonials = [
    {
      text: "DevForge helped me retain coding patterns faster than any other platform!",
      author: "Alex, CS Student",
    },
    {
      text: "Finally, a platform that understands how neurodivergent learners code.",
      author: "Jamie, Developer",
    },
  ];

  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-b from-gray-900 to-black px-6">
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          DevForge
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Forge your coding craft. Smarter than LeetCode, tailored for
          neurodivergent developers.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Button className="text-lg">Join the Beta</Button>
        </motion.div>
      </section>

      {/* Demo Lesson */}
      <section className="py-20 px-6 md:px-20 bg-gray-800 text-center text-white rounded-xl mx-6">
        <h2 className="text-3xl font-bold mb-6">Try a Demo Lesson</h2>
        <p className="mb-4 text-gray-300">
          Edit the code below and see results instantly.
        </p>
        <textarea
          className="w-full h-40 bg-gray-900 text-green-400 p-4 rounded-lg font-mono"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <div className="mt-4 flex flex-col md:flex-row gap-4 justify-center items-center">
          <Button onClick={runCode}>Run Code</Button>
        </div>
        {output && (
          <pre className="mt-4 bg-black p-4 rounded-lg text-left text-green-300 font-mono whitespace-pre-wrap">
            {output}
          </pre>
        )}
      </section>

      {/* Micro Exercises */}
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

      {/* Quick Quiz */}
      <section className="py-20 px-6 md:px-20 bg-gray-800 text-center text-white rounded-xl mx-6">
        <h2 className="text-3xl font-bold mb-6">Quick Quiz</h2>
        <p className="text-gray-300 mb-8">{question}</p>
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
        {feedback && <p className="mt-4 text-xl font-semibold">{feedback}</p>}
      </section>

      {/* Features & Testimonials */}
      <section className="py-20 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-12">Features & Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((f) => (
            <Card key={f.title}>
              <h3 className="font-semibold text-xl mb-2">{f.title}</h3>
              <p className="text-gray-400">{f.desc}</p>
            </Card>
          ))}
          {testimonials.map((t, i) => (
            <Card key={i}>
              <p className="text-gray-300 italic">"{t.text}"</p>
              <p className="mt-2 font-semibold">– {t.author}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center bg-gradient-to-b from-gray-900 to-black text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Forge Your Skills?
        </h2>
        <Button className="text-xl py-4 px-10">Join the Beta</Button>
      </section>
    </main>
  );
}
