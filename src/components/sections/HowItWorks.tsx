
import React from "react";
import { Card } from "@/components/ui/card";
import { Building2, DollarSign, TrendingUp } from "lucide-react";

export const HowItWorks: React.FC = () => {
  const steps = [
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
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-width">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
          How It <span className="gradient-heading">Works</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
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
  );
};
