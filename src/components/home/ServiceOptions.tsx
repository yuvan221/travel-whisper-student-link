
import { Video, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ServiceOptions = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Service</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get language assistance your way, either virtually from anywhere or with in-person support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Virtual Assistance */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow hover-scale">
            <div className="p-1 bg-gradient-to-r from-primary to-accent">
              <div className="bg-white p-8 rounded-t-lg">
                <div className="h-14 w-14 rounded-full bg-primary-50 flex items-center justify-center mb-6 mx-auto">
                  <Video className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-center">Virtual Assistance</h3>
                <p className="text-gray-600 text-center mb-6">
                  Connect with translators remotely via chat, call, or video call for immediate language help.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                      <svg
                        className="h-3 w-3 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Quick menu translations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                      <svg
                        className="h-3 w-3 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Help with directions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                      <svg
                        className="h-3 w-3 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">On-demand availability</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                      <svg
                        className="h-3 w-3 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Budget-friendly options</span>
                  </li>
                </ul>
                <div className="text-center">
                  <Link to="/translators?type=virtual">
                    <Button variant="outline" className="w-full">Find Virtual Translators</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* In-Person Assistance */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow hover-scale">
            <div className="p-1 bg-gradient-to-r from-secondary to-amber-400">
              <div className="bg-white p-8 rounded-t-lg">
                <div className="h-14 w-14 rounded-full bg-secondary-50 flex items-center justify-center mb-6 mx-auto">
                  <Users className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-center">In-Person Assistance</h3>
                <p className="text-gray-600 text-center mb-6">
                  Book a local student to accompany you as both a translator and cultural guide.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                      <svg
                        className="h-3 w-3 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Personal guided experiences</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                      <svg
                        className="h-3 w-3 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Local cultural insights</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                      <svg
                        className="h-3 w-3 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Help with negotiations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                      <svg
                        className="h-3 w-3 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Scheduled appointments</span>
                  </li>
                </ul>
                <div className="text-center">
                  <Link to="/translators?type=in-person">
                    <Button className="w-full">Find In-Person Translators</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOptions;
