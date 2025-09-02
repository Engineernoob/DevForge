import Button from "../components/ui/Button";

export default function CTASection() {
  return (
    <section className="py-20 px-6 text-center bg-gradient-to-b from-gray-900 to-black text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Ready to Forge Your Skills?
      </h2>
      <Button className="text-xl py-4 px-10">Join the Beta</Button>
    </section>
  );
}
