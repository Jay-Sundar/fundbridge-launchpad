
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChartLineUp, CheckCircle, FileText, Users, BriefcaseBusiness, Calendar } from "lucide-react";

interface ApplicationData {
  founderName: string;
  companyName: string;
  raiseAmount: string;
  industry: string;
  applicationStatus: string;
  companyDescription: string;
}

const FounderDashboard = () => {
  const navigate = useNavigate();
  const [applicationData, setApplicationData] = useState<ApplicationData | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // In a real app, this would fetch data from an API
    const stage1Data = localStorage.getItem('founderOnboardingData');
    const stage2Data = localStorage.getItem('founderOnboardingStage2Data');
    
    if (!stage1Data) {
      toast.error("No application data found. Please complete the onboarding process.");
      navigate("/founders");
      return;
    }
    
    try {
      const parsedStage1Data = JSON.parse(stage1Data);
      
      setApplicationData({
        founderName: parsedStage1Data.founderName || "Founder",
        companyName: parsedStage1Data.companyName || "Your Company",
        raiseAmount: parsedStage1Data.raiseAmount || "$100K-$250K",
        industry: parsedStage1Data.industry || "Technology",
        applicationStatus: stage2Data ? "Final Review" : "Stage 1 Approved",
        companyDescription: parsedStage1Data.companyDescription || "No description provided."
      });
      
      setLoading(false);
    } catch (error) {
      console.error("Error parsing application data", error);
      toast.error("Error loading application data.");
      navigate("/founders");
    }
  }, [navigate]);
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-2">Loading your dashboard...</h2>
          <p className="text-slate-500">Please wait while we fetch your information.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top Navigation */}
      <nav className="bg-white border-b">
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

      <div className="container-width py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Founder Dashboard</h1>
            <p className="text-slate-600">Welcome back, {applicationData?.founderName}</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button>Contact Support</Button>
          </div>
        </div>

        {/* Application Status Card */}
        <Card className="mb-8">
          <CardHeader className="pb-3">
            <CardTitle>Application Status</CardTitle>
            <CardDescription>
              Current status of your fundraising application
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="bg-green-100 p-3 rounded-full">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <h3 className="font-medium text-lg">{applicationData?.applicationStatus}</h3>
                <p className="text-slate-500 text-sm">
                  {applicationData?.applicationStatus === "Final Review" 
                    ? "Your full application is now under review. We'll be in touch shortly." 
                    : "Stage 1 has been approved. Please complete Stage 2 to continue."}
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            {applicationData?.applicationStatus !== "Final Review" && (
              <Button onClick={() => navigate("/founder-onboarding-stage2")}>
                Continue to Stage 2
              </Button>
            )}
          </CardFooter>
        </Card>

        {/* Company Info Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Company Information</CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="space-y-4">
                <div>
                  <dt className="text-sm text-slate-500">Company Name</dt>
                  <dd className="font-medium">{applicationData?.companyName}</dd>
                </div>
                <div>
                  <dt className="text-sm text-slate-500">Industry</dt>
                  <dd className="font-medium">{applicationData?.industry}</dd>
                </div>
                <div>
                  <dt className="text-sm text-slate-500">Target Raise</dt>
                  <dd className="font-medium">{applicationData?.raiseAmount}</dd>
                </div>
              </dl>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Company Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700">{applicationData?.companyDescription}</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="bg-blue-100 p-3 rounded-full">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-medium">Upload Documents</h3>
                <p className="text-sm text-slate-500">Update or add new documents to your application</p>
                <Button variant="outline" className="w-full">Upload</Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-medium">Invite Team Members</h3>
                <p className="text-sm text-slate-500">Add team members to your company profile</p>
                <Button variant="outline" className="w-full">Invite</Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="bg-amber-100 p-3 rounded-full">
                  <Calendar className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="font-medium">Schedule Call</h3>
                <p className="text-sm text-slate-500">Book a call with our investment team</p>
                <Button variant="outline" className="w-full">Schedule</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Next Steps */}
        <Card>
          <CardHeader>
            <CardTitle>Next Steps</CardTitle>
            <CardDescription>Follow these steps to move forward with your fundraising process</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="bg-green-100 p-1 rounded-full mt-0.5">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-medium">Complete Stage 1 Application</h4>
                  <p className="text-sm text-slate-500">Initial company details and founder information</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                {applicationData?.applicationStatus === "Final Review" ? (
                  <div className="bg-green-100 p-1 rounded-full mt-0.5">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                ) : (
                  <div className="bg-blue-100 p-1 rounded-full mt-0.5 text-blue-600 font-bold text-sm flex items-center justify-center w-6 h-6">
                    2
                  </div>
                )}
                <div>
                  <h4 className="font-medium">Complete Stage 2 Application</h4>
                  <p className="text-sm text-slate-500">Detailed company information and compliance documents</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="bg-slate-100 p-1 rounded-full mt-0.5 text-slate-600 font-bold text-sm flex items-center justify-center w-6 h-6">
                  3
                </div>
                <div>
                  <h4 className="font-medium">Final Review & Approval</h4>
                  <p className="text-sm text-slate-500">Our team will review your complete application</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="bg-slate-100 p-1 rounded-full mt-0.5 text-slate-600 font-bold text-sm flex items-center justify-center w-6 h-6">
                  4
                </div>
                <div>
                  <h4 className="font-medium">Launch Fundraising Campaign</h4>
                  <p className="text-sm text-slate-500">Once approved, your campaign will go live to investors</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FounderDashboard;
