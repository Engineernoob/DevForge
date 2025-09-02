import { useState } from "react";
import Button from "../components/ui/Button";

export default function DemoLesson() {
  const [code, setCode] = useState(
    `function helloDevForge() {\n  console.log("Hello, DevForge!");\n}`
  );
  const [output, setOutput] = useState<string>("");

  const runCode = () => {
    try {
      // Capture console.log output
      let consoleOutput = "";
      const originalConsole = console.log;
      console.log = (msg: any) => (consoleOutput += msg + "\n");
      // Execute code
      new Function(code)();
      console.log = originalConsole;
      setOutput(consoleOutput || "Code executed!");
    } catch (err: any) {
      setOutput("Error: " + err.message);
    }
  };

  return (
    <section className="py-20 px-6 md:px-20 bg-gray-800 text-white text-center rounded-xl mx-6">
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
  );
}
