
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X, Globe, MessageCircle } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Globe className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl text-primary">Linguamate</span>
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="hidden md:flex items-center space-x-6">
            <NavLinks />
            <div className="flex items-center space-x-3">
              <Link to="/login">
                <Button variant="outline" size="sm">
                  Log in
                </Button>
              </Link>
              <Link to="/signup">
                <Button size="sm">Sign up</Button>
              </Link>
            </div>
          </nav>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <Button variant="ghost" size="icon" onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && (
        <div
          className={cn(
            "fixed inset-0 bg-white z-40 pt-16 px-4 transition-transform duration-300 ease-in-out",
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <nav className="flex flex-col space-y-6 pt-6">
            <MobileNavLinks closeMenu={() => setIsMenuOpen(false)} />
            <div className="flex flex-col space-y-3 mt-6">
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full">
                  Log in
                </Button>
              </Link>
              <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full">Sign up</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

const NavLinks = () => (
  <>
    <Link to="/how-it-works" className="text-gray-700 hover:text-primary transition-colors">
      How it works
    </Link>
    <Link to="/translators" className="text-gray-700 hover:text-primary transition-colors">
      Find translators
    </Link>
    <Link to="/become-translator" className="text-gray-700 hover:text-primary transition-colors">
      Become a translator
    </Link>
  </>
);

const MobileNavLinks = ({ closeMenu }: { closeMenu: () => void }) => (
  <>
    <Link
      to="/how-it-works"
      className="text-lg font-medium py-2 border-b border-gray-100"
      onClick={closeMenu}
    >
      How it works
    </Link>
    <Link
      to="/translators"
      className="text-lg font-medium py-2 border-b border-gray-100"
      onClick={closeMenu}
    >
      Find translators
    </Link>
    <Link
      to="/become-translator"
      className="text-lg font-medium py-2 border-b border-gray-100"
      onClick={closeMenu}
    >
      Become a translator
    </Link>
  </>
);

export default Header;
