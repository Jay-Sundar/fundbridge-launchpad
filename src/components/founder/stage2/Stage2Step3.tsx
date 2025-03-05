
import React from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Info, Upload, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

interface Disclosures {
  accurateInfo: boolean;
  termsAgreed: boolean;
  regulatoryCompliance: boolean;
}

interface Stage2Step3Props {
  financialStatements: File | null;
  setFinancialStatements: (file: File | null) => void;
  enhancedPitchDeck: File | null;
  setEnhancedPitchDeck: (file: File | null) => void;
  additionalDocuments: File[];
  setAdditionalDocuments: (files: File[]) => void;
  disclosures: Disclosures;
  setDisclosures: (value: Disclosures) => void;
  errors: {
    financialStatements?: string;
    pitchDeck?: string;
    disclosures?: string;
  };
}

export const Stage2Step3: React.FC<Stage2Step3Props> = ({
  financialStatements,
  setFinancialStatements,
  enhancedPitchDeck,
  setEnhancedPitchDeck,
  additionalDocuments,
  setAdditionalDocuments,
  disclosures,
  setDisclosures,
  errors,
}) => {
  const handleAdditionalDocUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 10 * 1024 * 1024) {
        // If file size is > 10MB
        alert("File size exceeds 10MB limit");
        return;
      }
      setAdditionalDocuments([...additionalDocuments, file]);
    }
  };

  const removeAdditionalDoc = (index: number) => {
    const updatedDocs = [...additionalDocuments];
    updatedDocs.splice(index, 1);
    setAdditionalDocuments(updatedDocs);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Label htmlFor="financialStatements">Financial Statements *</Label>
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="h-4 w-4 text-slate-400" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Upload your company's financial statements (income statement, balance sheet, etc.)</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <div className="flex gap-4 items-center">
          <Input
            id="financialStatements"
            type="file"
            accept=".pdf,.doc,.docx,.xls,.xlsx"
            className="hidden"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                const file = e.target.files[0];
                if (file.size > 10 * 1024 * 1024) {
                  // If file size is > 10MB
                  alert("File size exceeds 10MB limit");
                  return;
                }
                setFinancialStatements(file);
              }
            }}
          />
          <div className="flex-1">
            <label
              htmlFor="financialStatements"
              className={cn(
                "flex items-center justify-center w-full p-4 border-2 border-dashed rounded-md cursor-pointer hover:bg-slate-50 transition-colors",
                errors.financialStatements ? "border-red-500" : "border-slate-300"
              )}
            >
              <div className="flex flex-col items-center gap-2">
                <Upload className="h-6 w-6 text-slate-400" />
                <span className="text-sm text-slate-500">
                  {financialStatements ? financialStatements.name : "Click to upload financial statements"}
                </span>
              </div>
            </label>
          </div>
          {financialStatements && (
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setFinancialStatements(null)}
            >
              Remove
            </Button>
          )}
        </div>
        {errors.financialStatements && <p className="text-xs text-red-500 mt-1">{errors.financialStatements}</p>}
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Label htmlFor="enhancedPitchDeck">Enhanced Pitch Deck *</Label>
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="h-4 w-4 text-slate-400" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Upload a more detailed version of your pitch deck (10MB max)</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <div className="flex gap-4 items-center">
          <Input
            id="enhancedPitchDeck"
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
                setEnhancedPitchDeck(file);
              }
            }}
          />
          <div className="flex-1">
            <label
              htmlFor="enhancedPitchDeck"
              className={cn(
                "flex items-center justify-center w-full p-4 border-2 border-dashed rounded-md cursor-pointer hover:bg-slate-50 transition-colors",
                errors.pitchDeck ? "border-red-500" : "border-slate-300"
              )}
            >
              <div className="flex flex-col items-center gap-2">
                <Upload className="h-6 w-6 text-slate-400" />
                <span className="text-sm text-slate-500">
                  {enhancedPitchDeck ? enhancedPitchDeck.name : "Click to upload enhanced pitch deck (PDF)"}
                </span>
              </div>
            </label>
          </div>
          {enhancedPitchDeck && (
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setEnhancedPitchDeck(null)}
            >
              Remove
            </Button>
          )}
        </div>
        {errors.pitchDeck && <p className="text-xs text-red-500 mt-1">{errors.pitchDeck}</p>}
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Label>Additional Documents (Optional)</Label>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="h-4 w-4 text-slate-400" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Upload any additional relevant documents such as patents, trademarks, or previous funding agreements</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <div>
            <Input
              id="additionalDocs"
              type="file"
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              className="hidden"
              onChange={handleAdditionalDocUpload}
            />
            <label htmlFor="additionalDocs">
              <Button type="button" variant="outline" size="sm" asChild>
                <div>
                  <Plus className="h-4 w-4 mr-1" /> Add Document
                </div>
              </Button>
            </label>
          </div>
        </div>
        
        {additionalDocuments.length > 0 && (
          <div className="space-y-3 p-4 border rounded-md bg-slate-50">
            <h4 className="font-medium">Uploaded Documents</h4>
            <ul className="space-y-2">
              {additionalDocuments.map((doc, index) => (
                <li key={index} className="flex items-center justify-between text-sm p-2 bg-white rounded border">
                  <span className="truncate max-w-[250px]">{doc.name}</span>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => removeAdditionalDoc(index)}
                    className="text-red-500 hover:text-red-700 h-7 w-7 p-0"
                  >
                    <span className="sr-only">Remove</span>
                    <span aria-hidden="true">×</span>
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="space-y-4 pt-4 border-t">
        <h3 className="font-medium">Disclosures and Confirmations *</h3>
        {errors.disclosures && <p className="text-xs text-red-500">{errors.disclosures}</p>}
        
        <div className="space-y-3">
          <div className="flex items-start space-x-2">
            <Checkbox 
              id="accurateInfo" 
              checked={disclosures.accurateInfo}
              onCheckedChange={(checked) => 
                setDisclosures({...disclosures, accurateInfo: checked as boolean})
              }
            />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="accurateInfo"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I confirm that all information provided is accurate and complete
              </label>
              <p className="text-xs text-muted-foreground">
                By checking this box, I acknowledge that providing false information may result in legal consequences.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-2">
            <Checkbox 
              id="termsAgreed" 
              checked={disclosures.termsAgreed}
              onCheckedChange={(checked) => 
                setDisclosures({...disclosures, termsAgreed: checked as boolean})
              }
            />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="termsAgreed"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree to the Terms of Service and Privacy Policy
              </label>
              <p className="text-xs text-muted-foreground">
                I have read and agree to the <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-2">
            <Checkbox 
              id="regulatoryCompliance" 
              checked={disclosures.regulatoryCompliance}
              onCheckedChange={(checked) => 
                setDisclosures({...disclosures, regulatoryCompliance: checked as boolean})
              }
            />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="regulatoryCompliance"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I understand and will comply with all applicable fundraising regulations
              </label>
              <p className="text-xs text-muted-foreground">
                I acknowledge my responsibility to comply with all securities laws and regulations applicable to my fundraising activities.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-50 p-4 rounded-md border border-blue-200">
        <h3 className="font-medium text-blue-800 mb-2">Next Steps</h3>
        <p className="text-sm text-blue-700">
          After submitting this form, our team will review your complete application. This final review typically takes 3-5 business days. Once approved, you'll be ready to launch your fundraising campaign on our platform.
        </p>
      </div>
    </div>
  );
};
