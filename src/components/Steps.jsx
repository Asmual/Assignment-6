import user from "../assets/user.png";
import packageIcon from "../assets/package.png";
import rocket from "../assets/rocket.png";

const steps = [
  {
    id: "01",
    icon: user,
    title: "Create Account",
    description: "Sign up for free in seconds. No credit card required to get started.",
  },
  {
    id: "02",
    icon: packageIcon,
    title: "Choose Products",
    description: "Browse our catalog and select the tools that fit your needs.",
  },
  {
    id: "03",
    icon: rocket,
    title: "Start Creating",
    description: "Download and start using your premium tools immediately.",
  },
];

const Steps = () => {
  return (
    <section className="bg-base-200 py-20 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-base-content mb-3">
          Get Started In 3 Steps
        </h2>
        <p className="text-base-content/60 text-base">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step) => (
          <div
            key={step.id}
            className="relative bg-base-100 rounded-2xl p-8 flex flex-col items-center text-center shadow-sm"
          >
            {/* Badge — inside card, top right */}
            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white text-sm font-bold">
              {step.id}
            </div>

            {/* Icon circle */}
            <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center mb-6 mt-4">
              <img src={step.icon} alt={step.title} className="w-9 h-9 object-contain" />
            </div>

            <h3 className="text-xl font-bold text-base-content mb-2">
              {step.title}
            </h3>
            <p className="text-base-content/55 text-sm leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Steps;