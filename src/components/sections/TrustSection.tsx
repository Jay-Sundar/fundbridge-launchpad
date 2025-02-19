
import React from "react";

export const TrustSection: React.FC = () => {
  return (
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
  );
};
