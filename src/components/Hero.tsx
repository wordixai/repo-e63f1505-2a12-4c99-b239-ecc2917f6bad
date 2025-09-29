import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23e0e7ff" fill-opacity="0.3"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="container relative z-10 text-center">
        <div className="animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 mb-8 text-sm bg-primary/10 rounded-full border border-primary/20">
            <span className="text-primary font-medium">✨ New: AI-Powered Analytics Dashboard</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Streamline Your
            <span className="text-gradient block">Workflow</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Boost productivity and collaboration with our powerful SaaS platform. 
            Manage projects, track progress, and scale your business effortlessly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="gradient-primary text-white border-0 px-8 py-6 text-lg">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-6 text-lg">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
          
          <div className="text-sm text-muted-foreground">
            No credit card required • 14-day free trial • Cancel anytime
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="mt-16 animate-slide-in">
          <div className="relative mx-auto max-w-5xl">
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 p-2 shadow-2xl">
              <div className="w-full h-full rounded-xl bg-white shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=675&fit=crop&crop=center"
                  alt="StreamLine Dashboard"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;