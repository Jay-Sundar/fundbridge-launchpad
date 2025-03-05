
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const entityTypes = [
  "LLC",
  "C-Corp",
  "S-Corp",
  "Not Yet Formed",
  "Other"
];

interface Step2Props {
  founderName: string;
  setFounderName: (value: string) => void;
  founderRole: string;
  setFounderRole: (value: string) => void;
  companyName: string;
  setCompanyName: (value: string) => void;
  website: string;
  setWebsite: (value: string) => void;
  entityType: string;
  setEntityType: (value: string) => void;
  errors: {
    founderName?: string;
    founderRole?: string;
    companyName?: string;
    entityType?: string;
  };
}

export const Step2: React.FC<Step2Props> = ({
  founderName,
  setFounderName,
  founderRole,
  setFounderRole,
  companyName,
  setCompanyName,
  website,
  setWebsite,
  entityType,
  setEntityType,
  errors,
}) => {
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
              <p>Your full legal name</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <Input
          id="founderName"
          placeholder="Jane Smith"
          value={founderName}
          onChange={(e) => setFounderName(e.target.value)}
          className={errors.founderName ? "border-red-500" : ""}
        />
        {errors.founderName && <p className="text-xs text-red-500 mt-1">{errors.founderName}</p>}
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Label htmlFor="founderRole">Your Role *</Label>
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
          id="founderRole"
          placeholder="CEO, Founder, etc."
          value={founderRole}
          onChange={(e) => setFounderRole(e.target.value)}
          className={errors.founderRole ? "border-red-500" : ""}
        />
        {errors.founderRole && <p className="text-xs text-red-500 mt-1">{errors.founderRole}</p>}
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Label htmlFor="companyName">Company Name *</Label>
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="h-4 w-4 text-slate-400" />
            </TooltipTrigger>
            <TooltipContent>
              <p>The name of your startup or business</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <Input
          id="companyName"
          placeholder="Acme Inc."
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          className={errors.companyName ? "border-red-500" : ""}
        />
        {errors.companyName && <p className="text-xs text-red-500 mt-1">{errors.companyName}</p>}
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Label htmlFor="website">Company Website (Optional)</Label>
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
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
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
          onValueChange={setEntityType}
          value={entityType}
        >
          <SelectTrigger id="entityType" className={errors.entityType ? "border-red-500" : ""}>
            <SelectValue placeholder="Select entity type" />
          </SelectTrigger>
          <SelectContent>
            {entityTypes.map((type) => (
              <SelectItem key={type} value={type}>{type}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.entityType && <p className="text-xs text-red-500 mt-1">{errors.entityType}</p>}
      </div>
    </div>
  );
};
