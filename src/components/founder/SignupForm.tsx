
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { FounderFormData } from "@/pages/FounderSignup";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from "lucide-react";

const industries = [
  "SaaS",
  "FinTech",
  "EdTech",
  "HealthTech",
  "E-commerce",
  "AI/ML",
  "Consumer Apps",
  "Hardware",
  "Marketplace",
  "Clean Energy",
  "Other"
];

const entityTypes = [
  "LLC",
  "C-Corp",
  "S-Corp",
  "Not Yet Formed",
  "Other"
];

interface SignupFormProps {
  formData: FounderFormData;
  onChange: (field: keyof FounderFormData, value: any) => void;
}

export const SignupForm: React.FC<SignupFormProps> = ({ formData, onChange }) => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Label htmlFor="founderName">Founder's Name *</Label>
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="h-4 w-4 text-slate-400" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Please enter your full legal name</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <Input
          id="founderName"
          placeholder="Jane Smith"
          value={formData.founderName}
          onChange={(e) => onChange('founderName', e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Label htmlFor="title">Title/Role *</Label>
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="h-4 w-4 text-slate-400" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Your position in the company (e.g., CEO, CTO, Founder)</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <Input
          id="title"
          placeholder="CEO, Co-Founder, etc."
          value={formData.title}
          onChange={(e) => onChange('title', e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Label htmlFor="website">Company Website</Label>
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="h-4 w-4 text-slate-400" />
            </TooltipTrigger>
            <TooltipContent>
              <p>If you don't have a website yet, leave this blank</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <Input
          id="website"
          type="url"
          placeholder="https://yourstartup.com"
          value={formData.website}
          onChange={(e) => onChange('website', e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Label htmlFor="industry">Industry *</Label>
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="h-4 w-4 text-slate-400" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Select the category that best describes your business</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <Select 
          onValueChange={(value) => onChange('industry', value)}
          value={formData.industry}
        >
          <SelectTrigger id="industry">
            <SelectValue placeholder="Select industry" />
          </SelectTrigger>
          <SelectContent>
            {industries.map((industry) => (
              <SelectItem key={industry} value={industry}>{industry}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Label htmlFor="description">Brief Company Description *</Label>
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="h-4 w-4 text-slate-400" />
            </TooltipTrigger>
            <TooltipContent>
              <p>A short summary of what your company does (max 200 characters)</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <Textarea
          id="description"
          placeholder="Briefly describe what your company does and the problem you're solving..."
          value={formData.description}
          onChange={(e) => onChange('description', e.target.value)}
          maxLength={200}
          className="resize-none h-24"
        />
        <div className="text-xs text-right text-slate-500">
          {formData.description.length}/200
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Label htmlFor="entityType">Entity Type *</Label>
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="h-4 w-4 text-slate-400" />
            </TooltipTrigger>
            <TooltipContent>
              <p>The legal structure of your business</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <Select 
          onValueChange={(value) => onChange('entityType', value)}
          value={formData.entityType}
        >
          <SelectTrigger id="entityType">
            <SelectValue placeholder="Select entity type" />
          </SelectTrigger>
          <SelectContent>
            {entityTypes.map((type) => (
              <SelectItem key={type} value={type}>{type}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Label htmlFor="raiseAmount">Planned Raise Amount *</Label>
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="h-4 w-4 text-slate-400" />
            </TooltipTrigger>
            <TooltipContent>
              <p>How much funding are you looking to raise in this round?</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <Select 
          onValueChange={(value) => onChange('raiseAmount', value)}
          value={formData.raiseAmount}
        >
          <SelectTrigger id="raiseAmount">
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
                <p>Have you raised any capital before (friends & family, angel, seed, etc.)?</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <Switch
            id="previousCapital"
            checked={formData.previousCapital}
            onCheckedChange={(checked) => onChange('previousCapital', checked)}
          />
        </div>

        {formData.previousCapital && (
          <div className="pt-2">
            <Label htmlFor="previousCapitalAmount">Amount Previously Raised</Label>
            <Select 
              onValueChange={(value) => onChange('previousCapitalAmount', value)}
              value={formData.previousCapitalAmount}
            >
              <SelectTrigger id="previousCapitalAmount">
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
          </div>
        )}
      </div>
    </div>
  );
};
