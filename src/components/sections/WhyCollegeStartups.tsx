
import React from "react";
import { Card } from "@/components/ui/card";
import { GraduationCap, TrendingUp, Building2 } from "lucide-react";

export const WhyCollegeStartups: React.FC = () => {
  const features = [
    {
      icon: <GraduationCap className="h-8 w-8 text-emerald-500" />,
      title: "Innovation at Its Peak",
      description: "Access cutting-edge ideas emerging from university ecosystems",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-emerald-500" />,
      title: "High Growth Potential",
      description: "Early-stage investments have historically returned 25-30% IRR",
    },
    {
      icon: <Building2 className="h-8 w-8 text-emerald-500" />,
      title: "University Support",
      description: "Benefit from incubators, funding competitions, and top talent",
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-white to-slate-50">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why Invest in <span className="gradient-heading">College Startups</span>?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            History shows that college campuses are breeding grounds for billion-dollar companies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
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
      </div>
    </section>
  );
};
