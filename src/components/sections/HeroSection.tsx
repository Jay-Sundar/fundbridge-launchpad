
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface HeroSectionProps {
  email: string;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ email, onEmailChange, onSubmit }) => {
  return (
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
          Invest in the Next Google, Meta, or <br className="hidden sm:block" />
          <span className="gradient-heading">Snapchat—Before They Take Off</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-600 animate-fade-in delay-100">
          FundBridge lets you invest in high-potential college startups, a space that has historically been a goldmine for venture capitalists
        </p>
        
        <form onSubmit={onSubmit} className="max-w-md mx-auto space-y-4 animate-fade-in delay-200">
          <Input
            type="email"
            placeholder="Enter your email"
            className="input-field text-lg"
            value={email}
            onChange={onEmailChange}
          />
          <Button type="submit" className="cta-button w-full">
            Join the Waitlist
          </Button>
        </form>
      </div>
    </section>
  );
};
