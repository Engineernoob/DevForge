import { motion } from "framer-motion";
import Button from "../components/ui/Button";

export default function HeroSection() {
  return (
    <section className="text-center py-20 bg-gradient-to-b from-gray-900 to-black text-white px-6">
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
  );
}
