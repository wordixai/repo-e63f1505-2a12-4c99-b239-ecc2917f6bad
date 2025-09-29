import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Shield, Users, BarChart3 } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Experience blazing-fast performance with our optimized infrastructure and advanced caching mechanisms."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with end-to-end encryption, SSO integration, and compliance with industry standards."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Seamlessly collaborate with your team through real-time updates, comments, and shared workspaces."
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Get deep insights into your workflow with powerful analytics, custom reports, and data visualization."
    }
  ];

  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Everything you need to
            <span className="text-gradient"> succeed</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to streamline your workflow and boost productivity
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;