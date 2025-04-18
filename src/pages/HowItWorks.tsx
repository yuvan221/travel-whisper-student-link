
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";

const HowItWorks = () => {
  return (
    <Layout>
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-6">How LinguaLink Works</h1>
            <p className="text-lg text-gray-600">
              LinguaLink makes it easy to overcome language barriers during your travels by connecting you with local student translators.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <img
                src="https://images.unsplash.com/photo-1573497161161-c3e73707e25c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="Traveler using phone app"
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-6">For Travelers</h2>
              <div className="space-y-6">
                {[
                  {
                    step: "Create Your Profile",
                    description: "Sign up, tell us about yourself, your upcoming trips, and what languages you need help with."
                  },
                  {
                    step: "Find a Translator",
                    description: "Search for local student translators based on your destination, schedule, and specific needs."
                  },
                  {
                    step: "Choose Your Service",
                    description: "Select virtual assistance for quick, remote help or in-person support for guided experiences."
                  },
                  {
                    step: "Book and Connect",
                    description: "Schedule a session, pay securely through our platform, and connect with your translator."
                  }
                ].map((item, index) => (
                  <div key={index}>
                    <h3 className="font-medium text-xl flex items-center">
                      <span className="h-7 w-7 bg-primary text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        {index + 1}
                      </span>
                      {item.step}
                    </h3>
                    <p className="mt-2 text-gray-600 pl-10">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl font-semibold mb-6">For Translators</h2>
              <div className="space-y-6">
                {[
                  {
                    step: "Apply",
                    description: "Create a profile showcasing your language skills, availability, and areas of expertise."
                  },
                  {
                    step: "Get Verified",
                    description: "Complete our verification process to ensure security and quality for travelers."
                  },
                  {
                    step: "Set Your Terms",
                    description: "Define your rates, availability, and whether you offer virtual, in-person, or both services."
                  },
                  {
                    step: "Start Earning",
                    description: "Accept bookings from travelers and get paid securely through our platform."
                  }
                ].map((item, index) => (
                  <div key={index}>
                    <h3 className="font-medium text-xl flex items-center">
                      <span className="h-7 w-7 bg-primary text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        {index + 1}
                      </span>
                      {item.step}
                    </h3>
                    <p className="mt-2 text-gray-600 pl-10">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="https://images.unsplash.com/photo-1577412647305-991150c7d163?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="Student translator helping traveler"
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 text-center">Our Service Options</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Virtual Assistance",
                  description: "Get translation help via chat, audio, or video calls for quick questions, menu translations, directions, or brief conversations.",
                  features: [
                    "Available 24/7",
                    "Pay per minute or fixed short sessions",
                    "Perfect for quick translations and brief assistance",
                    "No geographical limitations"
                  ]
                },
                {
                  title: "In-Person Support",
                  description: "Book a local student translator to accompany you for a set period, helping you navigate your destination with ease.",
                  features: [
                    "Deep cultural insights and context",
                    "Assistance for meetings, tours, or medical visits",
                    "Book by the hour or for full/half days",
                    "More immersive travel experience"
                  ]
                }
              ].map((option, index) => (
                <Card key={index} className="p-6">
                  <h3 className="font-medium text-xl mb-3">{option.title}</h3>
                  <p className="text-gray-600 mb-4">{option.description}</p>
                  <ul className="space-y-2">
                    {option.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="h-5 w-5 text-primary mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorks;
