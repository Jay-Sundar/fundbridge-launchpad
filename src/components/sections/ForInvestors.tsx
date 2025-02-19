
import React from "react";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, ArrowRight } from "lucide-react";

interface ForInvestorsProps {
  onJoinWaitlist: () => void;
}

export const ForInvestors: React.FC<ForInvestorsProps> = ({ onJoinWaitlist }) => {
  const features = [
    {
      icon: <GraduationCap className="h-8 w-8 text-emerald-500" />,
      title: "Exclusive Access",
      description: "Connect with promising college-founded startups early",
    },
    {
      icon: <Users className="h-8 w-8 text-emerald-500" />,
      title: "Start Small",
      description: "Invest with as little as $100 through fractionalized SPVs",
    },
    {
      icon: <ArrowRight className="h-8 w-8 text-emerald-500" />,
      title: "Future Liquidity",
      description: "Access emerging secondary markets for startup shares",
    },
  ];

  return (
    <section className="section-padding bg-slate-50">
      <div className="container-width">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
          Why Invest with <span className="gradient-heading">FundBridge</span>?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 space-y-4">
              <div className="p-3 bg-white rounded-full shadow-md">{feature.icon}</div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="cta-button" onClick={onJoinWaitlist}>
            Join the Investor Waitlist
          </Button>
        </div>
      </div>
    </section>
  );
};
