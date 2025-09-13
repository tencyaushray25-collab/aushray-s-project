import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Clock, CheckCircle, Star, Brain, Zap } from "lucide-react";

interface Assessment {
  id: string;
  title: string;
  subject: string;
  questions: number;
  duration: string;
  difficulty: "Easy" | "Medium" | "Hard";
  completed: boolean;
  score?: number;
  source: string;
}

export const Assessments = () => {
  const [selectedAssessment, setSelectedAssessment] = useState<string | null>(null);

  const availableAssessments: Assessment[] = [
    {
      id: "1",
      title: "Advanced Mathematics - Calculus",
      subject: "Mathematics",
      questions: 15,
      duration: "30 min",
      difficulty: "Hard",
      completed: false,
      source: "Chapter 12 Notes.pdf"
    },
    {
      id: "2",
      title: "Physics: Quantum Mechanics Basics",
      subject: "Physics",
      questions: 20,
      duration: "25 min",
      difficulty: "Medium",
      completed: true,
      score: 92,
      source: "Physics Textbook.pdf"
    },
    {
      id: "3",
      title: "Chemistry: Organic Compounds",
      subject: "Chemistry",
      questions: 12,
      duration: "20 min",
      difficulty: "Easy",
      completed: true,
      score: 85,
      source: "Chemistry Notes.pdf"
    },
    {
      id: "4",
      title: "Biology: Cell Structure Quiz",
      subject: "Biology",
      questions: 18,
      duration: "35 min",
      difficulty: "Medium",
      completed: false,
      source: "Biology Chapter 3.pdf"
    }
  ];

  const recentScores = [
    { subject: "Physics", score: 92, trend: "+5%" },
    { subject: "Chemistry", score: 85, trend: "+2%" },
    { subject: "Mathematics", score: 78, trend: "-3%" },
    { subject: "Biology", score: 88, trend: "+8%" }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-success";
      case "Medium": return "bg-warning";
      case "Hard": return "bg-destructive";
      default: return "bg-secondary";
    }
  };

  const generateNewAssessment = () => {
    // Simulate assessment generation
    console.log("Generating new assessment...");
  };

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Assessments</h1>
          <p className="text-muted-foreground">AI-generated quizzes and practice tests</p>
        </div>
        <Button onClick={generateNewAssessment} className="flex items-center gap-2">
          <Brain className="h-4 w-4" />
          Generate New Assessment
        </Button>
      </div>

      <Tabs defaultValue="available" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="available">Available</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="available" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {availableAssessments.filter(a => !a.completed).map((assessment) => (
              <Card key={assessment.id} className="hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-lg">{assessment.title}</CardTitle>
                      <CardDescription>Generated from {assessment.source}</CardDescription>
                    </div>
                    <Badge className={getDifficultyColor(assessment.difficulty)}>
                      {assessment.difficulty}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      {assessment.questions} questions
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {assessment.duration}
                    </span>
                  </div>
                  <Button className="w-full">
                    Start Assessment
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {availableAssessments.filter(a => a.completed).map((assessment) => (
              <Card key={assessment.id} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-lg">{assessment.title}</CardTitle>
                      <CardDescription>Completed assessment</CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <Badge variant="outline" className="font-bold">
                        {assessment.score}%
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{assessment.questions} questions</span>
                    <span>{assessment.duration}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Review Answers</Button>
                    <Button variant="outline" size="sm">Retake</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Scores</CardTitle>
                <CardDescription>Your latest assessment performance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentScores.map((score, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                    <div>
                      <p className="font-medium">{score.subject}</p>
                      <p className="text-sm text-muted-foreground">Latest score</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold">{score.score}%</p>
                      <p className={`text-sm ${score.trend.startsWith('+') ? 'text-success' : 'text-destructive'}`}>
                        {score.trend}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Performance Insights</CardTitle>
                <CardDescription>AI-powered analysis of your progress</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-500" />
                    <span className="text-sm">Strongest in Physics concepts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-blue-500" />
                    <span className="text-sm">Improving in Mathematics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Brain className="h-5 w-5 text-purple-500" />
                    <span className="text-sm">Focus on Biology fundamentals</span>
                  </div>
                </div>
                
                <div className="pt-4 space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Overall Progress</span>
                      <span>86%</span>
                    </div>
                    <Progress value={86} />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Consistency Score</span>
                      <span>92%</span>
                    </div>
                    <Progress value={92} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};