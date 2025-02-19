
import React from "react";
import { Card } from "@/components/ui/card";
import { CheckCircle, DollarSign, Users } from "lucide-react";

export const RiskManagement: React.FC = () => {
  const features = [
    {
      icon: <CheckCircle className="h-8 w-8 text-emerald-500" />,
      title: "Diversification",
      description: "Spread risk across multiple investments starting at just $100",
    },
    {
      icon: <DollarSign className="h-8 w-8 text-emerald-500" />,
      title: "Due Diligence",
      description: "Rigorous vetting process for all listed startups",
    },
    {
      icon: <Users className="h-8 w-8 text-emerald-500" />,
      title: "Community Support",
      description: "Learn from experienced investors in our community",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-width">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
          Smart <span className="gradient-heading">Risk Management</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 card-hover">
              <div className="space-y-4">
                {feature.icon}
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
