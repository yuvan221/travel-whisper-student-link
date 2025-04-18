
import { Link } from "react-router-dom";
import { Globe, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Globe className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl text-primary">LinguaLink</span>
            </Link>
            <p className="text-gray-600 mb-4">
              Connecting travelers with local student translators for a more immersive and stress-free travel experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">For Travelers</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/how-it-works" className="text-gray-600 hover:text-primary transition-colors">
                  How it works
                </Link>
              </li>
              <li>
                <Link to="/translators" className="text-gray-600 hover:text-primary transition-colors">
                  Find translators
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-600 hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/safety" className="text-gray-600 hover:text-primary transition-colors">
                  Safety guides
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">For Translators</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/become-translator" className="text-gray-600 hover:text-primary transition-colors">
                  Become a translator
                </Link>
              </li>
              <li>
                <Link to="/translator-resources" className="text-gray-600 hover:text-primary transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-gray-600 hover:text-primary transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link to="/translator-success" className="text-gray-600 hover:text-primary transition-colors">
                  Success stories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="text-gray-600 hover:text-primary transition-colors">
                  Help center
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary transition-colors">
                  Contact us
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-primary transition-colors">
                  Terms of service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-primary transition-colors">
                  Privacy policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} LinguaLink. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
