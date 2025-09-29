import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$9",
      period: "per month",
      description: "Perfect for individuals and small teams",
      features: [
        "Up to 5 team members",
        "10GB storage",
        "Basic analytics",
        "Email support",
        "Mobile app access"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$29",
      period: "per month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 25 team members",
        "100GB storage",
        "Advanced analytics",
        "Priority support",
        "API access",
        "Custom integrations",
        "Advanced security"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For large organizations with specific needs",
      features: [
        "Unlimited team members",
        "Unlimited storage",
        "White-label solution",
        "24/7 dedicated support",
        "Custom development",
        "On-premise deployment",
        "Advanced compliance"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Simple, transparent
            <span className="text-gradient"> pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your team. Upgrade or downgrade at any time.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${plan.popular ? 'ring-2 ring-primary scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="gradient-primary text-white border-0 px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription className="text-base">{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-muted-foreground">/{plan.period}</span>}
                  {plan.price === "Custom" && <span className="text-muted-foreground"> {plan.period}</span>}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${plan.popular ? 'gradient-primary text-white border-0' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                  size="lg"
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;