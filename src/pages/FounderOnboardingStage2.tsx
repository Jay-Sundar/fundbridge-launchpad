
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StepIndicator } from "@/components/founder/StepIndicator";
import { Stage2Step1 } from "@/components/founder/stage2/Stage2Step1";
import { Stage2Step2 } from "@/components/founder/stage2/Stage2Step2";
import { Stage2Step3 } from "@/components/founder/stage2/Stage2Step3";
import { ArrowLeft, ArrowRight, Save } from "lucide-react";

interface FormErrors {
  incorporationDoc?: string;
  operatingAgreement?: string;
  founderBio?: string;
  teamMembers?: string;
  capTable?: string;
  financialStatements?: string;
  pitchDeck?: string;
  disclosures?: string;
}

const FounderOnboardingStage2 = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState<FormErrors>({});
  
  // Check if user has approval to access Stage 2
  useEffect(() => {
    const mockApproval = localStorage.getItem('mockStage1Approval');
    const founderData = localStorage.getItem('founderOnboardingData');
    
    if (!founderData) {
      toast.error("Please complete Stage 1 first.");
      navigate("/founder-onboarding");
      return;
    }
    
    if (mockApproval !== 'approved') {
      toast.error("Your Stage 1 application is still under review.");
      navigate("/founder-application-status");
      return;
    }
  }, [navigate]);
  
  // Step 1 - Legal Structure & Incorporation
  const [incorporationDoc, setIncorporationDoc] = useState<File | null>(null);
  const [operatingAgreement, setOperatingAgreement] = useState<File | null>(null);
  const [companyRegistrationNumber, setCompanyRegistrationNumber] = useState("");
  const [incorporationDate, setIncorporationDate] = useState("");
  
  // Step 2 - Founder & Team Details
  const [founderBio, setFounderBio] = useState("");
  const [teamMembers, setTeamMembers] = useState([{ name: "", role: "", bio: "" }]);
  const [capTable, setCapTable] = useState([{ stakeholder: "", role: "", equity: "" }]);
  
  // Step 3 - Compliance & Documents
  const [financialStatements, setFinancialStatements] = useState<File | null>(null);
  const [enhancedPitchDeck, setEnhancedPitchDeck] = useState<File | null>(null);
  const [additionalDocuments, setAdditionalDocuments] = useState<File[]>([]);
  const [disclosures, setDisclosures] = useState({
    accurateInfo: false,
    termsAgreed: false,
    regulatoryCompliance: false
  });

  const validateStep = (step: number): boolean => {
    const newErrors: FormErrors = {};
    
    if (step === 1) {
      if (!incorporationDoc) newErrors.incorporationDoc = "Certificate of Incorporation is required";
      if (!operatingAgreement) newErrors.operatingAgreement = "Operating Agreement is required";
    }
    
    if (step === 2) {
      if (!founderBio || founderBio.length < 50) newErrors.founderBio = "Please provide a detailed founder bio (minimum 50 characters)";
      if (teamMembers.length === 1 && !teamMembers[0].name) newErrors.teamMembers = "Please add at least one team member";
      if (capTable.length === 1 && !capTable[0].stakeholder) newErrors.capTable = "Please add equity information";
    }
    
    if (step === 3) {
      if (!financialStatements) newErrors.financialStatements = "Financial statements are required";
      if (!enhancedPitchDeck) newErrors.pitchDeck = "Enhanced pitch deck is required";
      if (!disclosures.accurateInfo || !disclosures.termsAgreed || !disclosures.regulatoryCompliance) {
        newErrors.disclosures = "You must agree to all disclosures";
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
      incorporationDoc: incorporationDoc ? incorporationDoc.name : null,
      operatingAgreement: operatingAgreement ? operatingAgreement.name : null,
      companyRegistrationNumber,
      incorporationDate,
      founderBio,
      teamMembers,
      capTable,
      financialStatements: financialStatements ? financialStatements.name : null,
      enhancedPitchDeck: enhancedPitchDeck ? enhancedPitchDeck.name : null,
      additionalDocuments: additionalDocuments.map(doc => doc.name),
      disclosures
    };
    
    localStorage.setItem('founderOnboardingStage2Data', JSON.stringify(formData));
    toast.success("Progress saved! Come back anytime to continue.");
    navigate("/founder-application-status");
  };

  const handleSubmit = () => {
    // In a real app, you would send this data to your backend
    const formData = {
      incorporationDoc: incorporationDoc ? incorporationDoc.name : null,
      operatingAgreement: operatingAgreement ? operatingAgreement.name : null,
      companyRegistrationNumber,
      incorporationDate,
      founderBio,
      teamMembers,
      capTable,
      financialStatements: financialStatements ? financialStatements.name : null,
      enhancedPitchDeck: enhancedPitchDeck ? enhancedPitchDeck.name : null,
      additionalDocuments: additionalDocuments.map(doc => doc.name),
      disclosures
    };
    
    localStorage.setItem('founderOnboardingStage2Data', JSON.stringify(formData));
    
    // Simulate success with documents
    let successMessage = "Application complete! ";
    if (incorporationDoc && operatingAgreement && financialStatements && enhancedPitchDeck) {
      successMessage += "All required documents received.";
    } else {
      successMessage += "Some documents are missing, but we'll review what you've provided.";
    }
    
    toast.success(successMessage);
    
    // In a real app, you'd redirect to a dashboard or success page
    setTimeout(() => {
      navigate("/founder-dashboard");
      toast("Your fundraising campaign is now under final review.");
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
          <h1 className="text-4xl font-bold mb-2">Welcome to the Next Step!</h1>
          <p className="text-lg text-slate-600">
            Stage 2 requires more detailed company information, compliance documents, and enhanced pitch materials.
          </p>
        </div>

        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-xl text-center">
              {currentStep === 1 && "Step 1 of 3: Legal Structure & Incorporation"}
              {currentStep === 2 && "Step 2 of 3: Founder & Team Details"}
              {currentStep === 3 && "Step 3 of 3: Compliance & Documents"}
            </CardTitle>
            <CardDescription className="text-center">
              {currentStep === 1 && "Upload legal documents and provide incorporation details"}
              {currentStep === 2 && "Tell us about your team and equity structure"}
              {currentStep === 3 && "Complete regulatory requirements and upload final documents"}
            </CardDescription>
            <StepIndicator currentStep={currentStep} totalSteps={3} />
          </CardHeader>
          <CardContent>
            {currentStep === 1 && (
              <Stage2Step1
                incorporationDoc={incorporationDoc}
                setIncorporationDoc={setIncorporationDoc}
                operatingAgreement={operatingAgreement}
                setOperatingAgreement={setOperatingAgreement}
                companyRegistrationNumber={companyRegistrationNumber}
                setCompanyRegistrationNumber={setCompanyRegistrationNumber}
                incorporationDate={incorporationDate}
                setIncorporationDate={setIncorporationDate}
                errors={errors}
              />
            )}
            
            {currentStep === 2 && (
              <Stage2Step2
                founderBio={founderBio}
                setFounderBio={setFounderBio}
                teamMembers={teamMembers}
                setTeamMembers={setTeamMembers}
                capTable={capTable}
                setCapTable={setCapTable}
                errors={errors}
              />
            )}
            
            {currentStep === 3 && (
              <Stage2Step3
                financialStatements={financialStatements}
                setFinancialStatements={setFinancialStatements}
                enhancedPitchDeck={enhancedPitchDeck}
                setEnhancedPitchDeck={setEnhancedPitchDeck}
                additionalDocuments={additionalDocuments}
                setAdditionalDocuments={setAdditionalDocuments}
                disclosures={disclosures}
                setDisclosures={setDisclosures}
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
                "Complete Application"
              )}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default FounderOnboardingStage2;
