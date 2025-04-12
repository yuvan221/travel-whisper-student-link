
import { useState } from "react";
import { Avatar } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    content:
      "LinguaLink made my trip to Tokyo so much easier! I connected with Mei, a local student who helped me navigate through restaurants and shops via video calls. The real-time translation saved me multiple times!",
    name: "Sarah Johnson",
    role: "Business Traveler",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 2,
    content:
      "As someone who barely speaks Spanish, having Carlos show me around Barcelona as both a translator and guide was the highlight of my trip. He knew all the local spots and helped me have authentic conversations with locals.",
    name: "Michael Chen",
    role: "Tourist",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 3,
    content:
      "I used LinguaLink during a medical emergency in Paris. The student translator I connected with helped me explain my situation to doctors and understand their instructions. This service is essential for international travel!",
    name: "Emma Rodriguez",
    role: "Solo Traveler",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(1);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from travelers who've experienced the difference of having a local student translator.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className={cn(
                  "transition-opacity duration-300 bg-gray-50 rounded-xl p-8 shadow-sm",
                  active === testimonial.id ? "opacity-100" : "opacity-0 absolute inset-0"
                )}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6">
                    <svg
                      className="h-12 w-12 text-primary/30"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                  </div>
                  <p className="text-lg text-gray-700 mb-6">{testimonial.content}</p>
                  <Avatar className="h-16 w-16 mb-4">
                    <img src={testimonial.avatar} alt={testimonial.name} />
                  </Avatar>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((testimonial) => (
              <button
                key={testimonial.id}
                onClick={() => setActive(testimonial.id)}
                className={cn(
                  "h-3 w-3 rounded-full transition-colors",
                  active === testimonial.id ? "bg-primary" : "bg-gray-300"
                )}
                aria-label={`View testimonial from ${testimonial.name}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
