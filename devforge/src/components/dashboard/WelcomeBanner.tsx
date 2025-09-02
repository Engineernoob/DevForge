interface Props {
  name: string;
  learningStyle: string;
}

export default function WelcomeBanner({ name, learningStyle }: Props) {
  return (
    <section className="text-center mb-10">
      <h1 className="text-4xl md:text-5xl font-bold mb-2">Welcome, {name}!</h1>
      <p className="text-gray-300 text-xl">
        Your {learningStyle.toLowerCase()} learning journey starts here.
      </p>
    </section>
  );
}
