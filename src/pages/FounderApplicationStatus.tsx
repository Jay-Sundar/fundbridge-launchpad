
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, ArrowRight } from "lucide-react";

const FounderApplicationStatus = () => {
  const navigate = useNavigate();
  const [applicationStatus, setApplicationStatus] = useState<"pending" | "approved" | "rejected">("pending");
  const [daysRemaining, setDaysRemaining] = useState(3);
  
  // In a real app, this would fetch the status from the backend
  useEffect(() => {
    const storedData = localStorage.getItem('founderOnboardingData');
    
    if (!storedData) {
      // If no application data, redirect to stage 1
      toast.error("No application found. Please complete Stage 1 first.");
      navigate("/founder-onboarding");
      return;
    }
    
    // Check if we have mock approval in localStorage for demo purposes
    const mockApproval = localStorage.getItem('mockStage1Approval');
    if (mockApproval === 'approved') {
      setApplicationStatus("approved");
    }
    
    // Mock a countdown timer - in real app this would be based on submission date
    const timer = setInterval(() => {
      setDaysRemaining(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 10000); // Reduced for demo purposes - 10 seconds instead of 24 hours
    
    return () => clearInterval(timer);
  }, [navigate]);
  
  const handleMockApproval = () => {
    // This is just for demo purposes - would be removed in production
    localStorage.setItem('mockStage1Approval', 'approved');
    setApplicationStatus("approved");
    toast.success("Application approved! Proceeding to Stage 2.");
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
          <h1 className="text-4xl font-bold mb-2">Your Application Status</h1>
          <p className="text-lg text-slate-600">
            {applicationStatus === "pending" 
              ? "We're reviewing your application. This typically takes 2-3 business days." 
              : applicationStatus === "approved"
              ? "Great news! Your application has been approved." 
              : "We're sorry, but we cannot proceed with your application at this time."}
          </p>
        </div>

        <Card className="w-full">
          <CardHeader>
            <div className="flex items-center justify-center mb-4">
              {applicationStatus === "pending" ? (
                <Clock className="h-16 w-16 text-amber-500" />
              ) : applicationStatus === "approved" ? (
                <CheckCircle className="h-16 w-16 text-green-500" />
              ) : (
                <div className="h-16 w-16 rounded-full bg-red-100 flex items-center justify-center">
                  <span className="text-red-500 text-2xl">×</span>
                </div>
              )}
            </div>
            <CardTitle className="text-xl text-center">
              {applicationStatus === "pending" 
                ? "Application Under Review" 
                : applicationStatus === "approved"
                ? "Application Approved!" 
                : "Application Not Approved"}
            </CardTitle>
            <CardDescription className="text-center">
              {applicationStatus === "pending" 
                ? `Estimated time remaining: ${daysRemaining} ${daysRemaining === 1 ? 'day' : 'days'}` 
                : applicationStatus === "approved"
                ? "You can now proceed to Stage 2 of the application process" 
                : "Please contact our team for more information"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-slate-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">What happens next?</h3>
              {applicationStatus === "pending" ? (
                <ul className="list-disc list-inside space-y-2 text-sm text-slate-600">
                  <li>Our team is carefully reviewing your application details</li>
                  <li>We'll notify you by email when the review is complete</li>
                  <li>You may be contacted if we need additional information</li>
                  <li>Once approved, you'll gain access to Stage 2 of the application</li>
                </ul>
              ) : applicationStatus === "approved" ? (
                <ul className="list-disc list-inside space-y-2 text-sm text-slate-600">
                  <li>You now have access to Stage 2 of the application process</li>
                  <li>In Stage 2, you'll provide more detailed company information</li>
                  <li>You'll need to upload legal and compliance documents</li>
                  <li>Once Stage 2 is complete, you'll be ready to launch your fundraise</li>
                </ul>
              ) : (
                <ul className="list-disc list-inside space-y-2 text-sm text-slate-600">
                  <li>Please contact our support team for specific feedback</li>
                  <li>You may be able to reapply after addressing certain issues</li>
                  <li>We're here to help guide you through the process</li>
                </ul>
              )}
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            {applicationStatus === "pending" ? (
              <div className="space-y-4 w-full">
                <Button variant="outline" onClick={() => navigate("/founders")} className="w-full">
                  Return to Founders Page
                </Button>
                {/* This button is for demo purposes only - would be removed in production */}
                <Button onClick={handleMockApproval} className="w-full">
                  (Demo) Approve Application
                </Button>
              </div>
            ) : applicationStatus === "approved" ? (
              <Button onClick={() => navigate("/founder-onboarding-stage2")} className="w-full">
                Continue to Stage 2 <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button variant="outline" onClick={() => navigate("/founders")} className="w-full">
                Return to Founders Page
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default FounderApplicationStatus;
