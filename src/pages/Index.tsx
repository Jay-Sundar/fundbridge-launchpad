
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ArrowRight, DollarSign, TrendingUp, Users, CheckCircle, Building2, GraduationCap, Briefcase, FileCheck, Users2 } from "lucide-react";
import { toast } from "sonner";

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
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-slate-50 opacity-70"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,200,0.1)_0%,rgba(0,255,200,0)_60%)]"></div>
        </div>
        
        <div className="container-width relative z-10 px-4 sm:px-6 lg:px-8 space-y-8 text-center">
          <span className="inline-block text-emerald-600 font-semibold tracking-wider mb-4 animate-fade-in">
            CONNECTING COLLEGE FOUNDERS WITH INVESTORS
          </span>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-slate-900 animate-fade-in">
            Invest in the Next Generation of <br className="hidden sm:block" />
            <span className="gradient-heading">College Startups</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-600 animate-fade-in delay-100">
            FundBridge connects everyday investors with high-potential college founders, making startup investing accessible to all
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 animate-fade-in delay-200">
            <Input
              type="email"
              placeholder="Enter your email"
              className="input-field text-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit" className="cta-button w-full">
              Join the Waitlist
            </Button>
          </form>
        </div>
      </section>

      {/* For Founders Section */}
      <section className="section-padding bg-gradient-to-b from-white to-slate-50">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              For <span className="gradient-heading">Founders</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Raise capital from alumni, mentors, and investors who believe in your vision
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FileCheck className="h-8 w-8 text-emerald-500" />,
                title: "Reg CF Made Simple",
                description: "We handle all the legal and compliance work so you can focus on building",
              },
              {
                icon: <Users2 className="h-8 w-8 text-emerald-500" />,
                title: "Access to 100+ Investors",
                description: "Get funding from alumni, mentors, and investors who believe in your vision",
              },
              {
                icon: <GraduationCap className="h-8 w-8 text-emerald-500" />,
                title: "Built for College Startups",
                description: "Tailored support and resources for student-led ventures",
              },
            ].map((feature, index) => (
              <Card key={index} className="p-6 card-hover">
                <div className="space-y-4">
                  <div className="p-2 bg-emerald-50 rounded-lg w-fit">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              className="cta-button"
              onClick={() => {
                setUserType("founder");
                window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
              }}
            >
              Apply for Funding
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            How It <span className="gradient-heading">Works</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: <Building2 className="h-10 w-10 text-emerald-500" />,
                title: "Vetted Startups Apply",
                description: "College founders submit their startups for review and get vetted",
              },
              {
                icon: <DollarSign className="h-10 w-10 text-emerald-500" />,
                title: "Investors Choose",
                description: "Review startup profiles and invest in your chosen ventures",
              },
              {
                icon: <TrendingUp className="h-10 w-10 text-emerald-500" />,
                title: "Grow Together",
                description: "Track your investments and watch your returns grow over time",
              },
            ].map((step, index) => (
              <Card key={index} className="p-6 card-hover">
                <div className="space-y-4">
                  {step.icon}
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-slate-600">{step.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* For Investors Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-width">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            Why Invest with <span className="gradient-heading">FundBridge</span>?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <GraduationCap className="h-8 w-8 text-emerald-500" />,
                title: "Exclusive Access",
                description: "Connect with promising college-founded startups",
              },
              {
                icon: <Users className="h-8 w-8 text-emerald-500" />,
                title: "Fractional Ownership",
                description: "Start investing with as little as $1,000",
              },
              {
                icon: <ArrowRight className="h-8 w-8 text-emerald-500" />,
                title: "Future Liquidity",
                description: "Access liquidity through peer-to-peer transfers",
              },
            ].map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 space-y-4">
                <div className="p-3 bg-white rounded-full shadow-md">{feature.icon}</div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              className="cta-button"
              onClick={() => {
                setUserType("investor");
                window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
              }}
            >
              Join the Investor Waitlist
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-padding bg-white">
        <div className="container-width text-center space-y-8">
          <h2 className="text-3xl font-bold">
            Backed by Industry Experts
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50">
            {Array(4).fill(0).map((_, i) => (
              <div key={i} className="h-12 bg-slate-200 rounded animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
        <div className="container-width text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Join the Future of <span className="gradient-heading">Startup Investing</span>
          </h2>
          
          <div className="flex gap-4 justify-center mb-8">
            <Button
              variant="outline"
              className={`px-6 py-2 ${userType === "investor" ? "bg-emerald-50 border-emerald-500 text-emerald-700" : ""}`}
              onClick={() => setUserType("investor")}
            >
              I'm an Investor
            </Button>
            <Button
              variant="outline"
              className={`px-6 py-2 ${userType === "founder" ? "bg-emerald-50 border-emerald-500 text-emerald-700" : ""}`}
              onClick={() => setUserType("founder")}
            >
              I'm a Founder
            </Button>
          </div>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <Input
              type="email"
              placeholder="Enter your email"
              className="input-field text-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit" className="cta-button w-full">
              {userType === "founder" ? "Apply for Funding" : "Join the Waitlist"}
            </Button>
          </form>
          
          <p className="text-sm text-slate-500">
            {userType === "founder" 
              ? "We'll review your application and get back to you within 48 hours."
              : "Investing involves risk. FundBridge is not a registered broker-dealer."}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
