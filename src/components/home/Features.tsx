
import { Globe, Clock, Shield, Award } from "lucide-react";

const features = [
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: "Languages Worldwide",
    description: "Connect with student translators fluent in over 50 languages from around the world.",
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: "24/7 Availability",
    description: "Access translation help any time of day with our global network of student translators.",
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "Verified Translators",
    description: "All translators are verified students with language proficiency and safety checks.",
  },
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: "Cultural Immersion",
    description: "Get more than translation - gain cultural insights and authentic local experiences.",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose LinguaLink</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our platform offers unique advantages for travelers seeking language assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow hover-scale"
            >
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-primary-50 rounded-xl">{feature.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
