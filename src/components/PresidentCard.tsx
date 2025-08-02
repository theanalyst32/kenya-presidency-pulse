import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EconomicIndicators } from "./EconomicIndicators";
import { ProjectsSection } from "./ProjectsSection";
import { CorruptionCases } from "./CorruptionCases";
import { President } from "@/types/president";

interface PresidentCardProps {
  president: President;
}

export const PresidentCard = ({ president }: PresidentCardProps) => {
  return (
    <Card className="mb-8 p-6 border-2 border-border hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-6 mb-6">
        <div className="w-32 h-32 rounded-lg bg-muted flex items-center justify-center">
          <span className="text-6xl">👤</span>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-2xl font-bold text-foreground">{president.name}</h2>
            <Badge variant="outline" className="bg-kenya-green text-kenya-green-foreground">
              {president.term}
            </Badge>
          </div>
          <p className="text-muted-foreground text-lg mb-2">{president.title}</p>
          <p className="text-sm text-muted-foreground">
            Term: {president.termStart} - {president.termEnd}
          </p>
        </div>
      </div>

      <Tabs defaultValue="economy" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="economy">Economy</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="corruption">Corruption Cases</TabsTrigger>
          <TabsTrigger value="budget">Budget & KRA</TabsTrigger>
        </TabsList>
        
        <TabsContent value="economy" className="mt-6">
          <EconomicIndicators data={president.economicData} />
        </TabsContent>
        
        <TabsContent value="projects" className="mt-6">
          <ProjectsSection projects={president.projects} />
        </TabsContent>
        
        <TabsContent value="corruption" className="mt-6">
          <CorruptionCases cases={president.corruptionCases} />
        </TabsContent>
        
        <TabsContent value="budget" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="p-4">
              <h4 className="font-semibold mb-3 text-kenya-green">Annual Budgets</h4>
              <div className="space-y-2">
                {president.budgets.map((budget, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span>{budget.year}</span>
                    <span className="font-medium">KSh {budget.amount}</span>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="p-4">
              <h4 className="font-semibold mb-3 text-kenya-green">KRA Collections</h4>
              <div className="space-y-2">
                {president.kraCollections.map((collection, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span>{collection.year}</span>
                    <span className="font-medium">KSh {collection.amount}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  );
};