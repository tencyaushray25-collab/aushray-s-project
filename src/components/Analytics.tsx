import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown, Clock, BookOpen, Target, Calendar } from "lucide-react";

export const Analytics = () => {
  const weeklyStats = [
    { day: "Mon", studyTime: 2.5, assessments: 2 },
    { day: "Tue", studyTime: 3.2, assessments: 1 },
    { day: "Wed", studyTime: 1.8, assessments: 3 },
    { day: "Thu", studyTime: 4.1, assessments: 2 },
    { day: "Fri", studyTime: 2.7, assessments: 1 },
    { day: "Sat", studyTime: 3.8, assessments: 4 },
    { day: "Sun", studyTime: 2.9, assessments: 2 }
  ];

  const subjectPerformance = [
    { subject: "Mathematics", score: 78, trend: -3, color: "bg-blue-500" },
    { subject: "Physics", score: 92, trend: 5, color: "bg-green-500" },
    { subject: "Chemistry", score: 85, trend: 2, color: "bg-purple-500" },
    { subject: "Biology", score: 88, trend: 8, color: "bg-orange-500" }
  ];

  const learningGoals = [
    { goal: "Complete 20 assessments this month", progress: 75, current: 15, target: 20 },
    { goal: "Maintain 85% average score", progress: 88, current: 86, target: 85 },
    { goal: "Study 40 hours this month", progress: 65, current: 26, target: 40 },
    { goal: "Process 30 documents", progress: 80, current: 24, target: 30 }
  ];

  const maxStudyTime = Math.max(...weeklyStats.map(s => s.studyTime));

  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
        <p className="text-muted-foreground">Comprehensive insights into your learning journey</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Study Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156h</div>
            <div className="flex items-center text-sm">
              <TrendingUp className="h-3 w-3 text-success mr-1" />
              <span className="text-success">+12% from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Assessments Completed</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">47</div>
            <div className="flex items-center text-sm">
              <TrendingUp className="h-3 w-3 text-success mr-1" />
              <span className="text-success">+8 this week</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Score</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">86%</div>
            <div className="flex items-center text-sm">
              <TrendingUp className="h-3 w-3 text-success mr-1" />
              <span className="text-success">+4% improvement</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Study Streak</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12 days</div>
            <div className="flex items-center text-sm">
              <span className="text-success">Personal best! 🎉</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="weekly" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="weekly">Weekly Overview</TabsTrigger>
          <TabsTrigger value="subjects">Subject Performance</TabsTrigger>
          <TabsTrigger value="goals">Goals Tracking</TabsTrigger>
        </TabsList>

        <TabsContent value="weekly" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Weekly Study Pattern</CardTitle>
              <CardDescription>Your study time and assessment activity this week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {weeklyStats.map((stat, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 text-sm font-medium">{stat.day}</div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Study Time: {stat.studyTime}h</span>
                        <span>{stat.assessments} assessments</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-300"
                          style={{ width: `${(stat.studyTime / maxStudyTime) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="subjects" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {subjectPerformance.map((subject, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{subject.subject}</CardTitle>
                    <Badge variant={subject.trend > 0 ? "default" : "destructive"} className="flex items-center gap-1">
                      {subject.trend > 0 ? (
                        <TrendingUp className="h-3 w-3" />
                      ) : (
                        <TrendingDown className="h-3 w-3" />
                      )}
                      {Math.abs(subject.trend)}%
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold">{subject.score}%</div>
                    <p className="text-sm text-muted-foreground">Average Score</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Performance</span>
                      <span>{subject.score}%</span>
                    </div>
                    <Progress value={subject.score} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="goals" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Learning Goals Progress</CardTitle>
              <CardDescription>Track your progress towards monthly learning objectives</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {learningGoals.map((goal, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">{goal.goal}</h4>
                    <Badge variant={goal.progress >= 100 ? "default" : "secondary"}>
                      {goal.current}/{goal.target}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Progress</span>
                      <span>{goal.progress}%</span>
                    </div>
                    <Progress value={goal.progress} className="h-2" />
                  </div>
                  {goal.progress >= 100 && (
                    <p className="text-sm text-success">🎉 Goal achieved!</p>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};