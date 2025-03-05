
import React from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

interface Step3Props {
  raiseAmount: string;
  setRaiseAmount: (value: string) => void;
  previousCapital: boolean;
  setPreviousCapital: (value: boolean) => void;
  previousCapitalAmount: string;
  setPreviousCapitalAmount: (value: string) => void;
  companyDescription: string;
  setCompanyDescription: (value: string) => void;
  errors: {
    raiseAmount?: string;
    companyDescription?: string;
    previousCapitalAmount?: string;
  };
}

export const Step3: React.FC<Step3Props> = ({
  raiseAmount,
  setRaiseAmount,
  previousCapital,
  setPreviousCapital,
  previousCapitalAmount,
  setPreviousCapitalAmount,
  companyDescription,
  setCompanyDescription,
  errors,
}) => {
  return (
    <div className="space-y-6">
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
    </div>
  );
};

// We need to import cn from utils
import { cn } from "@/lib/utils";
