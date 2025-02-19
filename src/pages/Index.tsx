
import React, { useState } from "react";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhyCollegeStartups } from "@/components/sections/WhyCollegeStartups";
import { ForFounders } from "@/components/sections/ForFounders";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ForInvestors } from "@/components/sections/ForInvestors";
import { RiskManagement } from "@/components/sections/RiskManagement";
import { TrustSection } from "@/components/sections/TrustSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState<"investor" | "founder">("investor");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email");
      return;
    }
    if (!email.includes("@")) {
      toast.error("Please enter a valid email");
      return;
    }
    toast.success(`Thanks for joining the ${userType} waitlist!`);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation */}
      <nav className="sticky top-0 bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="container-width py-4 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold">
            FundBridge
          </Link>
          <div className="flex gap-4">
            <Link to="/founders">
              <Button variant="outline">For Founders</Button>
            </Link>
            <Link to="/investors">
              <Button variant="outline">For Investors</Button>
            </Link>
          </div>
        </div>
      </nav>

      <HeroSection 
        email={email}
        onEmailChange={(e) => setEmail(e.target.value)}
        onSubmit={handleSubmit}
      />
      <WhyCollegeStartups />
      <ForFounders 
        onApplyClick={() => {
          setUserType("founder");
          const element = document.getElementById('cta');
          element?.scrollIntoView({ behavior: 'smooth' });
        }}
      />
      <HowItWorks />
      <ForInvestors
        onJoinWaitlist={() => {
          setUserType("investor");
          const element = document.getElementById('cta');
          element?.scrollIntoView({ behavior: 'smooth' });
        }}
      />
      <RiskManagement />
      <TrustSection />
      <div id="cta">
        <FinalCTA
          email={email}
          userType={userType}
          onEmailChange={(e) => setEmail(e.target.value)}
          onUserTypeChange={setUserType}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Index;
