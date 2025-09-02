import Card from "../components/ui/Card";

export default function FeaturesTestimonials() {
  return (
    <section className="py-20 px-6 md:px-20 text-center">
      <h2 className="text-3xl font-bold mb-12">Features & Testimonials</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Features */}
        <Card>
          <h3 className="font-semibold text-xl mb-2">AI Pairing</h3>
          <p className="text-gray-400">
            Learn collaboratively with AI that guides your craft.
          </p>
        </Card>
        <Card>
          <h3 className="font-semibold text-xl mb-2">Accessibility</h3>
          <p className="text-gray-400">
            High-contrast, neurodivergent-friendly design.
          </p>
        </Card>

        {/* Testimonials */}
        <Card>
          <p className="text-gray-300 italic">
            "DevForge helped me retain coding patterns faster than any other
            platform!"
          </p>
          <p className="mt-2 font-semibold">– Alex, CS Student</p>
        </Card>
        <Card>
          <p className="text-gray-300 italic">
            "Finally, a platform that understands how neurodivergent learners
            code."
          </p>
          <p className="mt-2 font-semibold">– Jamie, Developer</p>
        </Card>
      </div>
    </section>
  );
}
