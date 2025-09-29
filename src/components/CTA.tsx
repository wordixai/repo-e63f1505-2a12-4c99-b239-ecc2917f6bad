import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl gradient-primary p-12 md:p-16 lg:p-20">
          <div className="relative z-10 text-center text-white">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to streamline your workflow?
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of teams already using StreamLine to boost productivity and collaboration.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" variant="secondary" className="px-8 py-6 text-lg font-semibold">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg border-white text-white hover:bg-white hover:text-primary">
                Schedule Demo
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm opacity-90">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                14-day free trial
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                No credit card required
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                Cancel anytime
              </div>
            </div>
          </div>
          
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.3"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;