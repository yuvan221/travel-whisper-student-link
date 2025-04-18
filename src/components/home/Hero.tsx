
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-blue-50 pt-20 pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 animate-fade-in">
              <span className="text-primary">Travel</span> without language barriers
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-lg mx-auto lg:mx-0 animate-fade-in [animation-delay:200ms]">
              Connect with local student translators who speak your language and know their city. Get real-time translation help virtually or in-person.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in [animation-delay:400ms]">
              <Link to="/translators">
                <Button size="lg" className="w-full sm:w-auto">
                  <Search className="mr-2 h-4 w-4" />
                  Find a translator
                </Button>
              </Link>
              <Link to="/become-translator">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Become a translator
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative animate-fade-in [animation-delay:600ms]">
            <div className="relative z-10 rounded-xl shadow-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="Students discussing translation"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-accent/10 rounded-full filter blur-3xl"></div>
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
