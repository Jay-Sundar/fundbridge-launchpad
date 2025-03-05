
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SignupForm } from "@/components/founder/SignupForm";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from "lucide-react";

export type FounderFormData = {
  founderName: string;
  title: string;
  website: string;
  industry: string;
  description: string;
  entityType: string;
  raiseAmount: string;
  previousCapital: boolean;
  previousCapitalAmount: string;
};

const FounderSignup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FounderFormData>({
    founderName: "",
    title: "",
    website: "",
    industry: "",
    description: "",
    entityType: "",
    raiseAmount: "",
    previousCapital: false,
    previousCapitalAmount: "",
  });

  const handleChange = (field: keyof FounderFormData, value: any) => {
    setFormData(prevData => ({
      ...prevData,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    const requiredFields: (keyof FounderFormData)[] = ['founderName', 'title', 'industry', 'description', 'entityType', 'raiseAmount'];
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      toast.error(`Please complete all required fields`);
      return;
    }
    
    // Save to localStorage (in a real app, this would be sent to a backend)
    localStorage.setItem('founderSignupData', JSON.stringify(formData));
    
    toast.success("Information saved! Ready for the next step.");
    
    // In a real application, you would navigate to stage 2
    setTimeout(() => {
      navigate("/founders");
    }, 1500);
  };

  const handleSaveAndExit = () => {
    localStorage.setItem('founderSignupData', JSON.stringify(formData));
    toast.success("Progress saved! Come back anytime to continue.");
    navigate("/founders");
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="container-width py-4 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold">
            FundBridge
          </Link>
          <div className="flex gap-4">
            <Link to="/founders">
              <Button variant="outline">For Founders</Button>
            </Link>
            <Link to="/investors">
              <Button variant="outline">For Investors</Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container-width pt-20">
        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Let's Get Your Community Round Started!</CardTitle>
            <CardDescription className="text-lg">
              Tell us the basics so we can tailor your fundraising experience.
            </CardDescription>
            <div className="flex items-center justify-center mt-2">
              <div className="flex items-center gap-2">
                <span className="text-sm text-slate-500">Step 1 of 3</span>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-4 w-4 text-slate-400" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs">
                    <p>This is the first step of our streamlined application process. After this, we'll collect more details about your startup.</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <SignupForm 
              formData={formData} 
              onChange={handleChange} 
            />
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={handleSaveAndExit}>
              Save & Exit
            </Button>
            <Button onClick={handleSubmit} className="cta-button">
              Next
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default FounderSignup;
