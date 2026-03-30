const plans = [
  {
    name: "Starter",
    subtitle: "Perfect for getting started",
    price: 0,
    period: "Month",
    features: [
      "Access to 10 free tools",
      "Basic templates",
      "Community support",
      "1 project per month",
    ],
    buttonText: "Get Started Free",
    popular: false,
    highlight: false,
  },
  {
    name: "Pro",
    subtitle: "Best for professionals",
    price: 29,
    period: "Month",
    features: [
      "Access to all premium tools",
      "Unlimited templates",
      "Priority support",
      "Unlimited projects",
      "Cloud sync",
      "Advanced analytics",
    ],
    buttonText: "Start Pro Trial",
    popular: true,
    highlight: true,
  },
  {
    name: "Enterprise",
    subtitle: "For teams and businesses",
    price: 99,
    period: "Month",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom branding",
    ],
    buttonText: "Contact Sales",
    popular: false,
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <section className="bg-white py-12 px-4">

      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-500 text-sm">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>


      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-2xl p-5 flex flex-col gap-4 ${
              plan.highlight
                ? "bg-gradient-to-b from-purple-500 to-purple-700 text-white shadow-xl scale-105"
                : "bg-gray-50 text-gray-900 border border-gray-200"
            }`}
          >

            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-yellow-100 text-yellow-700 text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              </div>
            )}


            <div>
              <h3 className={`text-lg font-bold mb-0.5 ${plan.highlight ? "text-white" : "text-gray-900"}`}>
                {plan.name}
              </h3>
              <p className={`text-xs ${plan.highlight ? "text-purple-200" : "text-gray-500"}`}>
                {plan.subtitle}
              </p>
            </div>


            <div className="flex items-end gap-1">
              <span className={`text-3xl font-extrabold ${plan.highlight ? "text-white" : "text-gray-900"}`}>
                ${plan.price}
              </span>
              <span className={`text-xs mb-1 ${plan.highlight ? "text-purple-200" : "text-gray-500"}`}>
                /{plan.period}
              </span>
            </div>


            <ul className="flex flex-col gap-2">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-xs">
                  <span className="text-green-400 font-bold">✓</span>
                  <span className={plan.highlight ? "text-white" : "text-gray-700"}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-2 rounded-full font-semibold text-xs transition-all cursor-pointer ${
                plan.highlight
                  ? "bg-white text-purple-600 hover:bg-purple-50"
                  : "bg-purple-600 text-white hover:bg-purple-700"
              }`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;