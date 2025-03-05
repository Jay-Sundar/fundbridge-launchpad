
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Info, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

interface CapTableEntry {
  stakeholder: string;
  role: string;
  equity: string;
}

interface Stage2Step2Props {
  founderBio: string;
  setFounderBio: (value: string) => void;
  teamMembers: TeamMember[];
  setTeamMembers: (value: TeamMember[]) => void;
  capTable: CapTableEntry[];
  setCapTable: (value: CapTableEntry[]) => void;
  errors: {
    founderBio?: string;
    teamMembers?: string;
    capTable?: string;
  };
}

export const Stage2Step2: React.FC<Stage2Step2Props> = ({
  founderBio,
  setFounderBio,
  teamMembers,
  setTeamMembers,
  capTable,
  setCapTable,
  errors,
}) => {
  const addTeamMember = () => {
    setTeamMembers([...teamMembers, { name: "", role: "", bio: "" }]);
  };

  const removeTeamMember = (index: number) => {
    const updatedTeamMembers = [...teamMembers];
    updatedTeamMembers.splice(index, 1);
    setTeamMembers(updatedTeamMembers);
  };

  const updateTeamMember = (index: number, field: keyof TeamMember, value: string) => {
    const updatedTeamMembers = [...teamMembers];
    updatedTeamMembers[index][field] = value;
    setTeamMembers(updatedTeamMembers);
  };

  const addCapTableEntry = () => {
    setCapTable([...capTable, { stakeholder: "", role: "", equity: "" }]);
  };

  const removeCapTableEntry = (index: number) => {
    const updatedCapTable = [...capTable];
    updatedCapTable.splice(index, 1);
    setCapTable(updatedCapTable);
  };

  const updateCapTableEntry = (index: number, field: keyof CapTableEntry, value: string) => {
    const updatedCapTable = [...capTable];
    updatedCapTable[index][field] = value;
    setCapTable(updatedCapTable);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Label htmlFor="founderBio">Founder Bio *</Label>
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="h-4 w-4 text-slate-400" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Provide detailed information about your background, experience, and qualifications</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <Textarea
          id="founderBio"
          placeholder="Share your professional background, relevant experiences, education, and why you're qualified to lead this venture..."
          value={founderBio}
          onChange={(e) => setFounderBio(e.target.value)}
          className={cn("min-h-32", errors.founderBio ? "border-red-500" : "")}
        />
        <div className="text-xs text-slate-500 flex justify-between">
          <span>Min 50 characters</span>
          <span>{founderBio.length} characters</span>
        </div>
        {errors.founderBio && <p className="text-xs text-red-500 mt-1">{errors.founderBio}</p>}
      </div>

      {/* Team Members Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Label>Team Members</Label>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="h-4 w-4 text-slate-400" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Add key team members who are part of your company</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <Button type="button" variant="outline" size="sm" onClick={addTeamMember}>
            <Plus className="h-4 w-4 mr-1" /> Add Member
          </Button>
        </div>
        
        {errors.teamMembers && <p className="text-xs text-red-500">{errors.teamMembers}</p>}
        
        <div className="space-y-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="p-4 border rounded-md bg-slate-50">
              <div className="flex justify-between items-center mb-3">
                <h4 className="font-medium">Team Member {index + 1}</h4>
                {teamMembers.length > 1 && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => removeTeamMember(index)}
                    className="text-red-500 hover:text-red-700 hover:bg-red-50"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <Label htmlFor={`teamMember-${index}-name`}>Name</Label>
                  <Input
                    id={`teamMember-${index}-name`}
                    value={member.name}
                    onChange={(e) => updateTeamMember(index, "name", e.target.value)}
                    placeholder="Full Name"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor={`teamMember-${index}-role`}>Role</Label>
                  <Input
                    id={`teamMember-${index}-role`}
                    value={member.role}
                    onChange={(e) => updateTeamMember(index, "role", e.target.value)}
                    placeholder="e.g., CTO, Head of Product"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor={`teamMember-${index}-bio`}>Brief Bio</Label>
                <Textarea
                  id={`teamMember-${index}-bio`}
                  value={member.bio}
                  onChange={(e) => updateTeamMember(index, "bio", e.target.value)}
                  placeholder="Brief background and expertise..."
                  className="min-h-24"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cap Table Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Label>Cap Table *</Label>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="h-4 w-4 text-slate-400" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Detail the equity ownership structure of your company</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <Button type="button" variant="outline" size="sm" onClick={addCapTableEntry}>
            <Plus className="h-4 w-4 mr-1" /> Add Entry
          </Button>
        </div>
        
        {errors.capTable && <p className="text-xs text-red-500">{errors.capTable}</p>}
        
        <div className="bg-white p-4 border rounded-md">
          <div className="grid grid-cols-8 gap-2 mb-2 font-medium text-sm">
            <div className="col-span-3">Stakeholder</div>
            <div className="col-span-3">Role</div>
            <div className="col-span-2">Equity %</div>
          </div>
          
          {capTable.map((entry, index) => (
            <div key={index} className="grid grid-cols-8 gap-2 mb-2 items-center">
              <div className="col-span-3">
                <Input
                  value={entry.stakeholder}
                  onChange={(e) => updateCapTableEntry(index, "stakeholder", e.target.value)}
                  placeholder="Name"
                />
              </div>
              <div className="col-span-3">
                <Input
                  value={entry.role}
                  onChange={(e) => updateCapTableEntry(index, "role", e.target.value)}
                  placeholder="e.g., Founder, Investor"
                />
              </div>
              <div className="col-span-1">
                <Input
                  value={entry.equity}
                  onChange={(e) => updateCapTableEntry(index, "equity", e.target.value)}
                  placeholder="e.g., 50"
                  type="number"
                  min="0"
                  max="100"
                />
              </div>
              <div className="col-span-1 flex justify-end">
                {capTable.length > 1 && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => removeCapTableEntry(index)}
                    className="text-red-500 hover:text-red-700 hover:bg-red-50 h-8 w-8 p-0"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          ))}
          
          <div className="text-sm text-slate-500 mt-3">
            Note: The total equity percentage should add up to 100%.
          </div>
        </div>
      </div>
    </div>
  );
};
