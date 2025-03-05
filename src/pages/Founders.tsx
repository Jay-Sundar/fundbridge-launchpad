
import React, { useState } from "react";
import { ForFounders } from "@/components/sections/ForFounders";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { TrustSection } from "@/components/sections/TrustSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Founders = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

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
    
    // Store email in localStorage to pre-fill it in the onboarding form
    localStorage.setItem("founderEmail", email);
    
    // Navigate to the onboarding page
    navigate("/founder-onboarding");
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
            <Link to="/investors">
              <Button variant="outline">For Investors</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero for Founders */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container-width text-center space-y-8">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Raise Capital from <span className="gradient-heading">Believers</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Get the funding you need from alumni, mentors, and investors who understand your vision
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <Input
              type="email"
              placeholder="Enter your email to get started"
              className="input-field text-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit" size="lg" className="cta-button w-full">
              Start Your Application
            </Button>
          </form>
        </div>
      </section>

      <ForFounders onApplyClick={() => {
        const element = document.getElementById('cta');
        element?.scrollIntoView({ behavior: 'smooth' });
      }} />
      <HowItWorks />
      <TrustSection />
      
      <div id="cta" className="section-padding bg-gradient-to-b from-slate-50 to-white">
        <div className="container-width text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to <span className="gradient-heading">Get Started?</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Enter your email to begin your fundraising journey with FundBridge
          </p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <Input
              type="email"
              placeholder="Enter your email"
              className="input-field text-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit" className="cta-button w-full">
              Start Your Application
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Founders;
