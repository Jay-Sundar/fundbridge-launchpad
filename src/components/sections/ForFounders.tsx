
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileCheck, Users2, GraduationCap } from "lucide-react";

interface ForFoundersProps {
  onApplyClick: () => void;
}

export const ForFounders: React.FC<ForFoundersProps> = ({ onApplyClick }) => {
  const features = [
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
  ];

  return (
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
        
        <div className="text-center mt-12">
          <Button className="cta-button" onClick={onApplyClick}>
            Apply for Funding
          </Button>
        </div>
      </div>
    </section>
  );
};
