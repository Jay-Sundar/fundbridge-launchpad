
import React from "react";
import { cn } from "@/lib/utils";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export const StepIndicator: React.FC<StepIndicatorProps> = ({
  currentStep,
  totalSteps,
}) => {
  return (
    <div className="w-full mb-6">
      <div className="flex items-center justify-between mb-2">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div
            key={index}
            className={cn(
              "relative flex items-center justify-center",
              index < currentStep ? "text-primary" : "text-muted-foreground"
            )}
          >
            <div
              className={cn(
                "z-10 flex items-center justify-center w-8 h-8 rounded-full border-2",
                index < currentStep
                  ? "bg-primary text-primary-foreground border-primary"
                  : index === currentStep
                  ? "bg-background border-primary text-primary"
                  : "bg-muted border-muted-foreground text-muted-foreground"
              )}
            >
              {index < currentStep ? "✓" : index + 1}
            </div>
            {index < totalSteps - 1 && (
              <div
                className={cn(
                  "absolute top-4 left-8 w-[calc(100%-2rem)] h-[2px]",
                  index < currentStep - 1
                    ? "bg-primary"
                    : index === currentStep - 1
                    ? "bg-gradient-to-r from-primary to-muted-foreground"
                    : "bg-muted-foreground"
                )}
              />
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>Quick Details</span>
        <span>About You</span>
        <span>Fundraising</span>
      </div>
    </div>
  );
};
