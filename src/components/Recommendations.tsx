import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Brain, BookOpen, Target, Clock, Star, TrendingUp, Lightbulb } from "lucide-react";

interface Recommendation {
  id: string;
  type: "study" | "review" | "practice" | "break";
  title: string;
  description: string;
  priority: "high" | "medium" | "low";
  estimatedTime: string;
  subject?: string;
  confidence: number;
}

export const Recommendations = () => {
  const recommendations: Recommendation[] = [
    {
      id: "1",
      type: "review",
      title: "Review Mathematics: Calculus Concepts",
      description: "Your recent assessment showed weakness in integration techniques. Focus on substitution and parts methods.",
      priority: "high",
      estimatedTime: "45 min",
      subject: "Mathematics",
      confidence: 92
    },
    {
      id: "2",
      type: "practice",
      title: "Physics Problem-Solving Practice",
      description: "You're excelling in theory but could benefit from more numerical problem practice.",
      priority: "medium",
      estimatedTime: "30 min",
      subject: "Physics",
      confidence: 87
    },
    {
      id: "3",
      type: "study",
      title: "Biology: Cell Division Deep Dive",
      description: "Based on your learning pattern, this topic aligns with your current progress.",
      priority: "medium",
      estimatedTime: "60 min",
      subject: "Biology",
      confidence: 78
    },
    {
      id: "4",
      type: "break",
      title: "Take a Strategic Study Break",
      description: "You've been studying intensively for 3 hours. A 15-minute break will improve retention.",
      priority: "high",
      estimatedTime: "15 min",
      confidence: 95
    }
  ];

  const studyInsights = [
    {
      icon: TrendingUp,
      title: "Peak Performance Time",
      description: "You perform best between 2-4 PM",
      actionable: true
    },
    {
      icon: Star,
      title: "Strongest Learning Style",
      description: "Visual learning with diagrams and charts",
      actionable: false
    },
    {
      icon: Target,
      title: "Next Milestone",
      description: "Reach 90% average score (currently 86%)",
      actionable: true
    },
    {
      icon: Clock,
      title: "Optimal Session Length",
      description: "45-minute focused sessions work best for you",
      actionable: true
    }
  ];

  const upcomingChallenges = [
    { challenge: "Organic Chemistry Exam", date: "In 5 days", preparedness: 75 },
    { challenge: "Physics Lab Report", date: "In 3 days", preparedness: 90 },
    { challenge: "Mathematics Assignment", date: "In 7 days", preparedness: 60 }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-destructive";
      case "medium": return "bg-warning";
      case "low": return "bg-success";
      default: return "bg-secondary";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "study": return BookOpen;
      case "review": return Target;
      case "practice": return Brain;
      case "break": return Clock;
      default: return Lightbulb;
    }
  };

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Brain className="h-8 w-8 text-primary" />
            AI Recommendations
          </h1>
          <p className="text-muted-foreground">Personalized study suggestions based on your learning patterns</p>
        </div>
        <Button variant="outline">
          <Lightbulb className="h-4 w-4 mr-2" />
          Refresh Insights
        </Button>
      </div>

      {/* Priority Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle>Recommended Actions</CardTitle>
          <CardDescription>AI-curated suggestions to optimize your learning</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {recommendations.map((rec) => {
            const TypeIcon = getTypeIcon(rec.type);
            return (
              <div key={rec.id} className="p-4 border rounded-lg hover:bg-muted/30 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <TypeIcon className="h-5 w-5 text-primary" />
                    <div>
                      <h4 className="font-semibold">{rec.title}</h4>
                      {rec.subject && (
                        <Badge variant="outline" className="mt-1">{rec.subject}</Badge>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className={getPriorityColor(rec.priority)}>
                      {rec.priority}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{rec.estimatedTime}</span>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-3">{rec.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm">
                    <span>AI Confidence:</span>
                    <Progress value={rec.confidence} className="w-16 h-2" />
                    <span>{rec.confidence}%</span>
                  </div>
                  <Button size="sm">
                    {rec.type === "break" ? "Take Break" : "Start Now"}
                  </Button>
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Study Insights */}
        <Card>
          <CardHeader>
            <CardTitle>Learning Insights</CardTitle>
            <CardDescription>Patterns discovered from your study behavior</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {studyInsights.map((insight, index) => {
              const Icon = insight.icon;
              return (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
                  <Icon className="h-5 w-5 text-primary mt-0.5" />
                  <div className="flex-1">
                    <h5 className="font-medium">{insight.title}</h5>
                    <p className="text-sm text-muted-foreground">{insight.description}</p>
                    {insight.actionable && (
                      <Button variant="link" size="sm" className="p-0 h-auto mt-1">
                        Apply This Insight
                      </Button>
                    )}
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Upcoming Challenges */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Challenges</CardTitle>
            <CardDescription>Deadlines and your current preparedness</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingChallenges.map((challenge, index) => (
              <div key={index} className="space-y-3 p-3 rounded-lg bg-muted/30">
                <div className="flex items-center justify-between">
                  <h5 className="font-medium">{challenge.challenge}</h5>
                  <span className="text-sm text-muted-foreground">{challenge.date}</span>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Preparedness</span>
                    <span>{challenge.preparedness}%</span>
                  </div>
                  <Progress 
                    value={challenge.preparedness} 
                    className="h-2"
                  />
                </div>
                
                <Button 
                  size="sm" 
                  variant={challenge.preparedness < 70 ? "destructive" : "outline"}
                  className="w-full"
                >
                  {challenge.preparedness < 70 ? "Focus Study Plan" : "Review Plan"}
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* AI Learning Assistant */}
      <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-primary" />
            AI Learning Assistant
          </CardTitle>
          <CardDescription>
            Your personal AI tutor is analyzing your progress and preparing customized recommendations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-sm font-medium">Next recommendation update in:</p>
              <p className="text-2xl font-bold text-primary">4 hours</p>
            </div>
            <Button className="bg-gradient-to-r from-primary to-secondary">
              Chat with AI Tutor
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};