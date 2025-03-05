
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StepIndicator } from "@/components/founder/StepIndicator";
import { Step1 } from "@/components/founder/Step1";
import { Step2 } from "@/components/founder/Step2";
import { Step3 } from "@/components/founder/Step3";
import { ArrowLeft, ArrowRight, Save } from "lucide-react";

interface FormErrors {
  email?: string;
  password?: string;
  confirmPassword?: string;
  founderName?: string;
  founderRole?: string;
  companyName?: string;
  entityType?: string;
  raiseAmount?: string;
  companyDescription?: string;
  previousCapitalAmount?: string;
  pitchDeck?: string;
  industry?: string;
}

const FounderOnboarding = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState<FormErrors>({});
  
  // Step 1 - Quick Details
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  // Step 2 - Founder & Company Info
  const [founderName, setFounderName] = useState("");
  const [founderRole, setFounderRole] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [website, setWebsite] = useState("");
  const [entityType, setEntityType] = useState("");
  
  // Step 3 - Fundraising
  const [raiseAmount, setRaiseAmount] = useState("");
  const [previousCapital, setPreviousCapital] = useState(false);
  const [previousCapitalAmount, setPreviousCapitalAmount] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [pitchDeck, setPitchDeck] = useState<File | null>(null);
  const [industry, setIndustry] = useState("");

  // Check for pre-filled email from the founders page
  useEffect(() => {
    const savedEmail = localStorage.getItem("founderEmail");
    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);

  const validateStep = (step: number): boolean => {
    const newErrors: FormErrors = {};
    
    if (step === 1) {
      if (!email) newErrors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid";
      
      if (!password) newErrors.password = "Password is required";
      else if (password.length < 8) newErrors.password = "Password must be at least 8 characters";
      
      if (!confirmPassword) newErrors.confirmPassword = "Please confirm your password";
      else if (confirmPassword !== password) newErrors.confirmPassword = "Passwords do not match";
    }
    
    if (step === 2) {
      if (!founderName) newErrors.founderName = "Founder name is required";
      if (!founderRole) newErrors.founderRole = "Founder role is required";
      if (!companyName) newErrors.companyName = "Company name is required";
      if (!entityType) newErrors.entityType = "Entity type is required";
    }
    
    if (step === 3) {
      if (!industry) newErrors.industry = "Industry is required";
      if (!raiseAmount) newErrors.raiseAmount = "Raise amount is required";
      if (!companyDescription) newErrors.companyDescription = "Company description is required";
      if (previousCapital && !previousCapitalAmount) {
        newErrors.previousCapitalAmount = "Please select an amount";
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      if (currentStep < 3) {
        setCurrentStep(currentStep + 1);
      } else {
        // Submit form
        handleSubmit();
      }
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSaveAndExit = () => {
    // Save form data to localStorage
    const formData = {
      email,
      founderName,
      founderRole,
      companyName,
      website,
      entityType,
      raiseAmount,
      previousCapital,
      previousCapitalAmount,
      companyDescription,
      pitchDeckName: pitchDeck ? pitchDeck.name : null,
    };
    
    localStorage.setItem('founderOnboardingData', JSON.stringify(formData));
    toast.success("Progress saved! Come back anytime to continue.");
    navigate("/founders");
  };

  const handleSubmit = () => {
    // In a real app, you would send this data to your backend
    const formData = {
      email,
      founderName,
      founderRole,
      companyName,
      website,
      entityType,
      industry,
      raiseAmount,
      previousCapital,
      previousCapitalAmount,
      companyDescription,
      pitchDeckName: pitchDeck ? pitchDeck.name : null,
    };
    
    localStorage.setItem('founderOnboardingData', JSON.stringify(formData));
    
    // In a real app, you would handle the pitch deck file upload to a server
    if (pitchDeck) {
      toast.success("Application submitted with pitch deck! We'll be in touch soon.");
    } else {
      toast.success("Application submitted! We'll be in touch soon.");
    }
    
    // Redirect to a success page or dashboard
    setTimeout(() => {
      navigate("/founders");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 flex flex-col items-center justify-center">
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

      <div className="w-full max-w-3xl mx-auto pt-20">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-2">Let's Launch Your Fundraise!</h1>
          <p className="text-lg text-slate-600">
            Join the community of founders raising capital from believers.
          </p>
        </div>

        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-xl text-center">
              {currentStep === 1 && "Step 1 of 3: Quick Details"}
              {currentStep === 2 && "Step 2 of 3: About You & Your Company"}
              {currentStep === 3 && "Step 3 of 3: Fundraising Snapshot"}
            </CardTitle>
            <CardDescription className="text-center">
              {currentStep === 1 && "Enter your email to get started"}
              {currentStep === 2 && "Tell us a bit about your business"}
              {currentStep === 3 && "What's your fundraising goal?"}
            </CardDescription>
            <StepIndicator currentStep={currentStep} totalSteps={3} />
          </CardHeader>
          <CardContent>
            {currentStep === 1 && (
              <Step1
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                confirmPassword={confirmPassword}
                setConfirmPassword={setConfirmPassword}
                errors={errors}
              />
            )}
            
            {currentStep === 2 && (
              <Step2
                founderName={founderName}
                setFounderName={setFounderName}
                founderRole={founderRole}
                setFounderRole={setFounderRole}
                companyName={companyName}
                setCompanyName={setCompanyName}
                website={website}
                setWebsite={setWebsite}
                entityType={entityType}
                setEntityType={setEntityType}
                errors={errors}
              />
            )}
            
            {currentStep === 3 && (
              <Step3
                raiseAmount={raiseAmount}
                setRaiseAmount={setRaiseAmount}
                previousCapital={previousCapital}
                setPreviousCapital={setPreviousCapital}
                previousCapitalAmount={previousCapitalAmount}
                setPreviousCapitalAmount={setPreviousCapitalAmount}
                companyDescription={companyDescription}
                setCompanyDescription={setCompanyDescription}
                pitchDeck={pitchDeck}
                setPitchDeck={setPitchDeck}
                industry={industry}
                setIndustry={setIndustry}
                errors={errors}
              />
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            <div>
              {currentStep > 1 ? (
                <Button variant="outline" onClick={handlePreviousStep}>
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
              ) : (
                <Button variant="outline" onClick={handleSaveAndExit}>
                  <Save className="mr-2 h-4 w-4" /> Save & Exit
                </Button>
              )}
            </div>
            <Button onClick={handleNextStep}>
              {currentStep < 3 ? (
                <>
                  Next <ArrowRight className="ml-2 h-4 w-4" />
                </>
              ) : (
                "Complete Signup"
              )}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default FounderOnboarding;
