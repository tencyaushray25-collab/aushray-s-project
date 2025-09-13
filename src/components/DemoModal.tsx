import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, X } from "lucide-react";
import demoDashboard from "@/assets/demo-dashboard.webp";
import demoUpload from "@/assets/demo-upload.webp";
import demoQuiz from "@/assets/demo-quiz.webp";
import demoAnalytics from "@/assets/demo-analytics.webp";
import demoRecommendations from "@/assets/demo-recommendations.webp";

interface DemoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const DemoModal = ({ open, onOpenChange }: DemoModalProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const demoSlides = [
    {
      title: "Smart Dashboard Overview",
      description: "Track your study progress, view recent documents, and get AI-powered insights at a glance.",
      image: demoDashboard,
    },
    {
      title: "Document Upload & Processing",
      description: "Upload any document and let AI automatically extract key concepts and generate study materials.",
      image: demoUpload,
    },
    {
      title: "AI-Generated Assessments",
      description: "Take personalized quizzes created from your documents with real-time scoring and feedback.",
      image: demoQuiz,
    },
    {
      title: "Advanced Analytics",
      description: "Visualize your learning progress with detailed charts and performance metrics.",
      image: demoAnalytics,
    },
    {
      title: "Personalized Recommendations",
      description: "Get AI-driven study suggestions tailored to your learning patterns and goals.",
      image: demoRecommendations,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % demoSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + demoSlides.length) % demoSlides.length);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl w-full h-[80vh] p-0">
        <DialogHeader className="p-6 pb-4">
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Play className="h-6 w-6 text-primary" />
            Aushray's Personal Study Assistant AI - Demo
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex-1 px-6 pb-6">
          <Card className="relative h-full overflow-hidden">
            {/* Demo Image */}
            <div className="relative h-2/3 bg-gradient-to-br from-primary/10 to-secondary/10">
              <img
                src={demoSlides[currentSlide].image}
                alt={demoSlides[currentSlide].title}
                className="w-full h-full object-cover rounded-t-lg"
              />
              <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-sm">
                {currentSlide + 1} / {demoSlides.length}
              </div>
            </div>
            
            {/* Content */}
            <div className="p-6 h-1/3 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {demoSlides[currentSlide].title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {demoSlides[currentSlide].description}
                </p>
              </div>
              
              {/* Navigation */}
              <div className="flex justify-between items-center mt-4">
                <Button
                  variant="outline"
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                >
                  Previous
                </Button>
                
                <div className="flex gap-2">
                  {demoSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentSlide ? "bg-primary" : "bg-muted"
                      }`}
                    />
                  ))}
                </div>
                
                <Button
                  onClick={nextSlide}
                  disabled={currentSlide === demoSlides.length - 1}
                >
                  Next
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
};