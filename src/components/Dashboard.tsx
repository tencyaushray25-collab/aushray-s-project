import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, TrendingUp, Clock, Award, Brain } from "lucide-react";

export const Dashboard = () => {
  const stats = [
    { label: "Documents Processed", value: "24", icon: FileText, change: "+3 this week" },
    { label: "Assessments Completed", value: "18", icon: BookOpen, change: "+5 this week" },
    { label: "Study Streak", value: "12 days", icon: TrendingUp, change: "Personal best!" },
    { label: "Total Study Time", value: "48h", icon: Clock, change: "+6h this week" },
  ];

  const recentActivity = [
    { title: "Completed: Advanced Mathematics Quiz", time: "2 hours ago", score: 85 },
    { title: "Uploaded: Physics Chapter 12 Notes", time: "4 hours ago", score: null },
    { title: "Generated: Chemistry Assessment", time: "1 day ago", score: 92 },
    { title: "Reviewed: Biology Study Materials", time: "2 days ago", score: 78 },
  ];

  const currentGoals = [
    { title: "Complete Week 3 Assessments", progress: 75, target: "Due in 3 days" },
    { title: "Review 5 Document Summaries", progress: 60, target: "Due tomorrow" },
    { title: "Achieve 90% Average Score", progress: 85, target: "Monthly goal" },
  ];

  return (
    <div className="space-y-8 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Study Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's your learning progress</p>
        </div>
        <Badge variant="secondary" className="px-4 py-2">
          <Award className="h-4 w-4 mr-2" />
          Level 7 Scholar
        </Badge>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-success">{stat.change}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest study sessions and achievements</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                <div className="flex-1">
                  <p className="font-medium text-sm">{activity.title}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
                {activity.score && (
                  <Badge variant={activity.score >= 85 ? "default" : activity.score >= 70 ? "secondary" : "destructive"}>
                    {activity.score}%
                  </Badge>
                )}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Current Goals */}
        <Card>
          <CardHeader>
            <CardTitle>Current Goals</CardTitle>
            <CardDescription>Track your study objectives and progress</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {currentGoals.map((goal, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-sm">{goal.title}</p>
                  <span className="text-sm text-muted-foreground">{goal.progress}%</span>
                </div>
                <Progress value={goal.progress} className="h-2" />
                <p className="text-xs text-muted-foreground">{goal.target}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5" />
            Quick Actions
          </CardTitle>
          <CardDescription>Jump into your most common study activities</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          <Button variant="outline" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Upload Document
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            Generate Quiz
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            View Analytics
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Brain className="h-4 w-4" />
            Get Recommendations
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};