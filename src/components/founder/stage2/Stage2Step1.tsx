
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Info, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Stage2Step1Props {
  incorporationDoc: File | null;
  setIncorporationDoc: (file: File | null) => void;
  operatingAgreement: File | null;
  setOperatingAgreement: (file: File | null) => void;
  companyRegistrationNumber: string;
  setCompanyRegistrationNumber: (value: string) => void;
  incorporationDate: string;
  setIncorporationDate: (value: string) => void;
  errors: {
    incorporationDoc?: string;
    operatingAgreement?: string;
  };
}

export const Stage2Step1: React.FC<Stage2Step1Props> = ({
  incorporationDoc,
  setIncorporationDoc,
  operatingAgreement,
  setOperatingAgreement,
  companyRegistrationNumber,
  setCompanyRegistrationNumber,
  incorporationDate,
  setIncorporationDate,
  errors,
}) => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Label htmlFor="incorporationDoc">Certificate of Incorporation *</Label>
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="h-4 w-4 text-slate-400" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Upload your company's Certificate of Incorporation or equivalent document</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <div className="flex gap-4 items-center">
          <Input
            id="incorporationDoc"
            type="file"
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            className="hidden"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                const file = e.target.files[0];
                if (file.size > 10 * 1024 * 1024) {
                  // If file size is > 10MB
                  alert("File size exceeds 10MB limit");
                  return;
                }
                setIncorporationDoc(file);
              }
            }}
          />
          <div className="flex-1">
            <label
              htmlFor="incorporationDoc"
              className={cn(
                "flex items-center justify-center w-full p-4 border-2 border-dashed rounded-md cursor-pointer hover:bg-slate-50 transition-colors",
                errors.incorporationDoc ? "border-red-500" : "border-slate-300"
              )}
            >
              <div className="flex flex-col items-center gap-2">
                <Upload className="h-6 w-6 text-slate-400" />
                <span className="text-sm text-slate-500">
                  {incorporationDoc ? incorporationDoc.name : "Click to upload Certificate of Incorporation"}
                </span>
              </div>
            </label>
          </div>
          {incorporationDoc && (
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setIncorporationDoc(null)}
            >
              Remove
            </Button>
          )}
        </div>
        {errors.incorporationDoc && <p className="text-xs text-red-500 mt-1">{errors.incorporationDoc}</p>}
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Label htmlFor="operatingAgreement">Operating Agreement/Bylaws *</Label>
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="h-4 w-4 text-slate-400" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Upload your company's Operating Agreement, Bylaws, or equivalent document</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <div className="flex gap-4 items-center">
          <Input
            id="operatingAgreement"
            type="file"
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            className="hidden"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                const file = e.target.files[0];
                if (file.size > 10 * 1024 * 1024) {
                  // If file size is > 10MB
                  alert("File size exceeds 10MB limit");
                  return;
                }
                setOperatingAgreement(file);
              }
            }}
          />
          <div className="flex-1">
            <label
              htmlFor="operatingAgreement"
              className={cn(
                "flex items-center justify-center w-full p-4 border-2 border-dashed rounded-md cursor-pointer hover:bg-slate-50 transition-colors",
                errors.operatingAgreement ? "border-red-500" : "border-slate-300"
              )}
            >
              <div className="flex flex-col items-center gap-2">
                <Upload className="h-6 w-6 text-slate-400" />
                <span className="text-sm text-slate-500">
                  {operatingAgreement ? operatingAgreement.name : "Click to upload Operating Agreement/Bylaws"}
                </span>
              </div>
            </label>
          </div>
          {operatingAgreement && (
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setOperatingAgreement(null)}
            >
              Remove
            </Button>
          )}
        </div>
        {errors.operatingAgreement && <p className="text-xs text-red-500 mt-1">{errors.operatingAgreement}</p>}
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Label htmlFor="companyRegistrationNumber">Company Registration Number</Label>
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="h-4 w-4 text-slate-400" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Your company's EIN, registration number, or equivalent identifier</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <Input
          id="companyRegistrationNumber"
          placeholder="e.g., 12-3456789"
          value={companyRegistrationNumber}
          onChange={(e) => setCompanyRegistrationNumber(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Label htmlFor="incorporationDate">Date of Incorporation</Label>
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="h-4 w-4 text-slate-400" />
            </TooltipTrigger>
            <TooltipContent>
              <p>When was your company legally formed?</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <Input
          id="incorporationDate"
          type="date"
          value={incorporationDate}
          onChange={(e) => setIncorporationDate(e.target.value)}
        />
      </div>
      
      <div className="bg-amber-50 p-4 rounded-md border border-amber-200">
        <h3 className="font-medium text-amber-800 mb-2">Important Note</h3>
        <p className="text-sm text-amber-700">
          All documents uploaded must be official and legally valid. Providing falsified documents may result in legal consequences and immediate termination of your application.
        </p>
      </div>
    </div>
  );
};
