
import { MessageCircle, Users, Calendar } from "lucide-react";

const steps = [
  {
    icon: <Search className="h-12 w-12 text-primary" />,
    title: "Find a translator",
    description:
      "Search for student translators based on language, location, and availability. Browse profiles and reviews.",
  },
  {
    icon: <Calendar className="h-12 w-12 text-primary" />,
    title: "Book a session",
    description:
      "Choose between virtual or in-person assistance and schedule a time that works for both of you.",
  },
  {
    icon: <MessageCircle className="h-12 w-12 text-primary" />,
    title: "Connect and communicate",
    description:
      "Chat, call, or meet your translator and get the language support you need for your travel experience.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How LinguaLink Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get language assistance in three simple steps, whether you need virtual help or an in-person guide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-100 hover-scale"
            >
              <div className="flex justify-center mb-6">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-center">{step.title}</h3>
              <p className="text-gray-600 text-center">{step.description}</p>
              <div className="mt-6 flex justify-center">
                <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary-100 text-primary font-medium">
                  {index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { Search } from "lucide-react";

export default HowItWorks;
