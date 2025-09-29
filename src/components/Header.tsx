import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg gradient-primary"></div>
          <span className="text-xl font-bold">StreamLine</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
            Features
          </a>
          <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
            Pricing
          </a>
          <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
            Testimonials
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          <Button size="sm" className="gradient-primary text-white border-0">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container py-4 space-y-4">
            <a href="#features" className="block text-sm font-medium hover:text-primary transition-colors">
              Features
            </a>
            <a href="#pricing" className="block text-sm font-medium hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="#testimonials" className="block text-sm font-medium hover:text-primary transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="block text-sm font-medium hover:text-primary transition-colors">
              Contact
            </a>
            <div className="pt-4 space-y-2">
              <Button variant="ghost" size="sm" className="w-full">
                Sign In
              </Button>
              <Button size="sm" className="w-full gradient-primary text-white border-0">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;