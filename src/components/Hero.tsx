import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Brain, BarChart3, Zap } from "lucide-react";
import heroImage from "@/assets/hero-education.webp";

interface HeroProps {
  onGetStarted: () => void;
}

export const Hero = ({ onGetStarted }: HeroProps) => {
  const features = [
    { icon: BookOpen, label: "Smart Document Processing" },
    { icon: Brain, label: "AI-Powered Assessments" },
    { icon: BarChart3, label: "Advanced Analytics" },
    { icon: Zap, label: "Personalized Recommendations" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-secondary/80" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30 hover:bg-white/30">
            ✨ Powered by Advanced AI Technology
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Your Personal
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Study Assistant
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Transform your learning with intelligent document processing, automated assessments, 
            and AI-driven recommendations tailored to your unique study patterns.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              onClick={onGetStarted}
              className="bg-white text-primary hover:bg-white/90 shadow-xl px-8 py-6 text-lg font-semibold"
            >
              Get Started
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg"
            >
              Watch Demo
            </Button>
          </div>
          
          {/* Feature highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-4 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300">
                  <Icon className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
                  <p className="text-sm font-medium">{feature.label}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};