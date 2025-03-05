
import React, { useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Info, Upload, Code, Building, GraduationCap, Stethoscope, ShoppingCart, Brain, Waypoints, Cpu, Factory, Leaf } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Step3Props {
  raiseAmount: string;
  setRaiseAmount: (value: string) => void;
  previousCapital: boolean;
  setPreviousCapital: (value: boolean) => void;
  previousCapitalAmount: string;
  setPreviousCapitalAmount: (value: string) => void;
  companyDescription: string;
  setCompanyDescription: (value: string) => void;
  pitchDeck: File | null;
  setPitchDeck: (file: File | null) => void;
  industry: string;
  setIndustry: (value: string) => void;
  errors: {
    raiseAmount?: string;
    companyDescription?: string;
    previousCapitalAmount?: string;
    pitchDeck?: string;
    industry?: string;
  };
}

// Industry options with their respective icons
const industries = [
  { value: "tech", label: "Technology", icon: Code },
  { value: "fintech", label: "FinTech", icon: Building },
  { value: "edtech", label: "Education", icon: GraduationCap },
  { value: "health", label: "Healthcare", icon: Stethoscope },
  { value: "ecommerce", label: "E-commerce", icon: ShoppingCart },
  { value: "ai", label: "AI/ML", icon: Brain },
  { value: "marketplace", label: "Marketplace", icon: Waypoints },
  { value: "hardware", label: "Hardware", icon: Cpu },
  { value: "manufacturing", label: "Manufacturing", icon: Factory },
  { value: "cleantech", label: "CleanTech", icon: Leaf },
  { value: "other", label: "Other", icon: Info },
];

export const Step3: React.FC<Step3Props> = ({
  raiseAmount,
  setRaiseAmount,
  previousCapital,
  setPreviousCapital,
  previousCapitalAmount,
  setPreviousCapitalAmount,
  companyDescription,
  setCompanyDescription,
  pitchDeck,
  setPitchDeck,
  industry,
  setIndustry,
  errors,
}) => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Label htmlFor="industry">Industry *</Label>
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="h-4 w-4 text-slate-400" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Select the industry that best describes your business</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <Select 
          onValueChange={setIndustry}
          value={industry}
        >
          <SelectTrigger id="industry" className={errors.industry ? "border-red-500" : ""}>
            <SelectValue placeholder="Select your industry" />
          </SelectTrigger>
          <SelectContent>
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <SelectItem key={ind.value} value={ind.value} className="flex items-center gap-2">
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4" />
                    <span>{ind.label}</span>
                  </div>
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
        {errors.industry && <p className="text-xs text-red-500 mt-1">{errors.industry}</p>}
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Label htmlFor="raiseAmount">Planned Raise Amount *</Label>
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="h-4 w-4 text-slate-400" />
            </TooltipTrigger>
            <TooltipContent>
              <p>How much funding are you looking to raise?</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <Select 
          onValueChange={setRaiseAmount}
          value={raiseAmount}
        >
          <SelectTrigger id="raiseAmount" className={errors.raiseAmount ? "border-red-500" : ""}>
            <SelectValue placeholder="Select amount range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="$25K-$100K">$25K-$100K</SelectItem>
            <SelectItem value="$100K-$250K">$100K-$250K</SelectItem>
            <SelectItem value="$250K-$500K">$250K-$500K</SelectItem>
            <SelectItem value="$500K-$1M">$500K-$1M</SelectItem>
            <SelectItem value="$1M+">$1M+</SelectItem>
          </SelectContent>
        </Select>
        {errors.raiseAmount && <p className="text-xs text-red-500 mt-1">{errors.raiseAmount}</p>}
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Label htmlFor="previousCapital">Previous Capital Raised?</Label>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="h-4 w-4 text-slate-400" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Have you raised any capital before?</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <Switch
            id="previousCapital"
            checked={previousCapital}
            onCheckedChange={setPreviousCapital}
          />
        </div>

        {previousCapital && (
          <div className="pt-2 pl-6 border-l-2 border-slate-200 mt-2">
            <Label htmlFor="previousCapitalAmount">Amount Previously Raised *</Label>
            <Select 
              onValueChange={setPreviousCapitalAmount}
              value={previousCapitalAmount}
            >
              <SelectTrigger id="previousCapitalAmount" 
                className={errors.previousCapitalAmount ? "border-red-500" : ""}>
                <SelectValue placeholder="Select amount range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Under $50K">Under $50K</SelectItem>
                <SelectItem value="$50K-$250K">$50K-$250K</SelectItem>
                <SelectItem value="$250K-$500K">$250K-$500K</SelectItem>
                <SelectItem value="$500K-$1M">$500K-$1M</SelectItem>
                <SelectItem value="$1M+">$1M+</SelectItem>
              </SelectContent>
            </Select>
            {errors.previousCapitalAmount && 
              <p className="text-xs text-red-500 mt-1">{errors.previousCapitalAmount}</p>}
          </div>
        )}
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Label htmlFor="companyDescription">Brief Company Description *</Label>
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="h-4 w-4 text-slate-400" />
            </TooltipTrigger>
            <TooltipContent>
              <p>A short summary of what your company does (1-2 sentences)</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <Textarea
          id="companyDescription"
          placeholder="Briefly describe what your company does and the problem you're solving..."
          value={companyDescription}
          onChange={(e) => setCompanyDescription(e.target.value)}
          maxLength={200}
          className={cn("resize-none h-24", errors.companyDescription ? "border-red-500" : "")}
        />
        <div className="text-xs text-right text-slate-500">
          {companyDescription.length}/200
        </div>
        {errors.companyDescription && 
          <p className="text-xs text-red-500 mt-1">{errors.companyDescription}</p>}
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Label htmlFor="pitchDeck">Pitch Deck (PDF, 10MB max)</Label>
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="h-4 w-4 text-slate-400" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Upload your pitch deck to help us better understand your business</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <div className="flex gap-4 items-center">
          <Input
            id="pitchDeck"
            type="file"
            accept=".pdf"
            className="hidden"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                const file = e.target.files[0];
                if (file.size > 10 * 1024 * 1024) {
                  // If file size is > 10MB
                  alert("File size exceeds 10MB limit");
                  return;
                }
                setPitchDeck(file);
              }
            }}
          />
          <div className="flex-1">
            <label
              htmlFor="pitchDeck"
              className={cn(
                "flex items-center justify-center w-full p-4 border-2 border-dashed rounded-md cursor-pointer hover:bg-slate-50 transition-colors",
                errors.pitchDeck ? "border-red-500" : "border-slate-300"
              )}
            >
              <div className="flex flex-col items-center gap-2">
                <Upload className="h-6 w-6 text-slate-400" />
                <span className="text-sm text-slate-500">
                  {pitchDeck ? pitchDeck.name : "Click to upload your pitch deck"}
                </span>
              </div>
            </label>
          </div>
          {pitchDeck && (
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setPitchDeck(null)}
            >
              Remove
            </Button>
          )}
        </div>
        {errors.pitchDeck && <p className="text-xs text-red-500 mt-1">{errors.pitchDeck}</p>}
      </div>
    </div>
  );
};
