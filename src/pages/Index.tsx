import { useState } from "react";
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { Dashboard } from "@/components/Dashboard";
import { DocumentUpload } from "@/components/DocumentUpload";
import { Assessments } from "@/components/Assessments";
import { Analytics } from "@/components/Analytics";
import { Recommendations } from "@/components/Recommendations";

const Index = () => {
  const [activeSection, setActiveSection] = useState("hero");

  const handleGetStarted = () => {
    setActiveSection("dashboard");
  };

  const renderSection = () => {
    switch (activeSection) {
      case "hero":
        return <Hero onGetStarted={handleGetStarted} />;
      case "dashboard":
        return <Dashboard />;
      case "documents":
        return <div>Document management component here</div>;
      case "upload":
        return <DocumentUpload />;
      case "assessments":
        return <Assessments />;
      case "analytics":
        return <Analytics />;
      case "recommendations":
        return <Recommendations />;
      default:
        return <Hero onGetStarted={handleGetStarted} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {activeSection !== "hero" && (
        <Navigation 
          activeSection={activeSection} 
          onSectionChange={setActiveSection} 
        />
      )}
      <main className={activeSection !== "hero" ? "pt-20" : ""}>
        {renderSection()}
      </main>
    </div>
  );
};

export default Index;
