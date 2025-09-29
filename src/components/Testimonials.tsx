import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face",
      content: "StreamLine has transformed how our team collaborates. The intuitive interface and powerful features have increased our productivity by 40%.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Project Manager, InnovateCo",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      content: "The analytics dashboard gives us insights we never had before. It's like having a crystal ball for our project timelines.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Operations Director, ScaleUp",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      content: "Security was our top concern, and StreamLine exceeded our expectations. The enterprise features are exactly what we needed.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Loved by
            <span className="text-gradient"> thousands</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what our customers have to say about their experience with StreamLine
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-lg mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-muted-foreground text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;