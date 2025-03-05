
import React from "react";
import { ForFounders } from "@/components/sections/ForFounders";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { TrustSection } from "@/components/sections/TrustSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Founders = () => {
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
            <Link to="/founder-signup">
              <Button>Apply Now</Button>
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
          <Link to="/founder-signup">
            <Button size="lg" className="cta-button">
              Apply for Funding
            </Button>
          </Link>
        </div>
      </section>

      <ForFounders onApplyClick={() => window.location.href = '/founder-signup'} />
      <HowItWorks />
      <TrustSection />
    </div>
  );
};

export default Founders;
