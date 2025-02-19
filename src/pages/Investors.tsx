
import React from "react";
import { WhyCollegeStartups } from "@/components/sections/WhyCollegeStartups";
import { ForInvestors } from "@/components/sections/ForInvestors";
import { RiskManagement } from "@/components/sections/RiskManagement";
import { TrustSection } from "@/components/sections/TrustSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Investors = () => {
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
            <Link to="/#cta">
              <Button>Start Investing</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero for Investors */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container-width text-center space-y-8">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Invest in Tomorrow's <span className="gradient-heading">Unicorns</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Get early access to high-potential college startups before they take off
          </p>
          <Link to="/#cta">
            <Button size="lg" className="cta-button">
              Join the Waitlist
            </Button>
          </Link>
        </div>
      </section>

      <WhyCollegeStartups />
      <ForInvestors onJoinWaitlist={() => window.location.href = '/#cta'} />
      <RiskManagement />
      <TrustSection />
    </div>
  );
};

export default Investors;
