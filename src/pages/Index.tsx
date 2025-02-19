
import React, { useState } from "react";
import { toast } from "sonner";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhyCollegeStartups } from "@/components/sections/WhyCollegeStartups";
import { ForFounders } from "@/components/sections/ForFounders";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ForInvestors } from "@/components/sections/ForInvestors";
import { RiskManagement } from "@/components/sections/RiskManagement";
import { TrustSection } from "@/components/sections/TrustSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

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

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      <HeroSection 
        email={email}
        onEmailChange={(e) => setEmail(e.target.value)}
        onSubmit={handleSubmit}
      />
      <WhyCollegeStartups />
      <ForFounders 
        onApplyClick={() => {
          setUserType("founder");
          scrollToBottom();
        }}
      />
      <HowItWorks />
      <ForInvestors
        onJoinWaitlist={() => {
          setUserType("investor");
          scrollToBottom();
        }}
      />
      <RiskManagement />
      <TrustSection />
      <FinalCTA
        email={email}
        userType={userType}
        onEmailChange={(e) => setEmail(e.target.value)}
        onUserTypeChange={setUserType}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default Index;
