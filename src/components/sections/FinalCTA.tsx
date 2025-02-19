
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface FinalCTAProps {
  email: string;
  userType: "investor" | "founder";
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onUserTypeChange: (type: "investor" | "founder") => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({
  email,
  userType,
  onEmailChange,
  onUserTypeChange,
  onSubmit,
}) => {
  return (
    <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
      <div className="container-width text-center space-y-8">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Join the Future of <span className="gradient-heading">Startup Investing</span>
        </h2>
        
        <div className="flex gap-4 justify-center mb-8">
          <Button
            variant="outline"
            className={`px-6 py-2 ${userType === "investor" ? "bg-emerald-50 border-emerald-500 text-emerald-700" : ""}`}
            onClick={() => onUserTypeChange("investor")}
          >
            I'm an Investor
          </Button>
          <Button
            variant="outline"
            className={`px-6 py-2 ${userType === "founder" ? "bg-emerald-50 border-emerald-500 text-emerald-700" : ""}`}
            onClick={() => onUserTypeChange("founder")}
          >
            I'm a Founder
          </Button>
        </div>
        
        <form onSubmit={onSubmit} className="max-w-md mx-auto space-y-4">
          <Input
            type="email"
            placeholder="Enter your email"
            className="input-field text-lg"
            value={email}
            onChange={onEmailChange}
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
  );
};
