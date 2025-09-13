import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BarChart3, BookOpen, FileText, Brain, Upload, TrendingUp } from "lucide-react";

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  const navigationItems = [
    { id: "dashboard", label: "Dashboard", icon: BarChart3 },
    { id: "documents", label: "Documents", icon: FileText },
    { id: "upload", label: "Upload", icon: Upload },
    { id: "assessments", label: "Assessments", icon: BookOpen },
    { id: "analytics", label: "Analytics", icon: TrendingUp },
    { id: "recommendations", label: "AI Recommendations", icon: Brain },
  ];

  return (
    <Card className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 p-2 bg-card/95 backdrop-blur-md border shadow-lg">
      <nav className="flex gap-2">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          return (
            <Button
              key={item.id}
              variant={activeSection === item.id ? "default" : "ghost"}
              size="sm"
              onClick={() => onSectionChange(item.id)}
              className="flex items-center gap-2 transition-all duration-300"
            >
              <Icon className="h-4 w-4" />
              <span className="hidden md:inline">{item.label}</span>
            </Button>
          );
        })}
      </nav>
    </Card>
  );
};