import { useParams, Link } from "react-router-dom";
import { presidentsData } from "@/data/presidents";
import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EconomicIndicators } from "@/components/EconomicIndicators";
import { ProjectsSection } from "@/components/ProjectsSection";
import { CorruptionCases } from "@/components/CorruptionCases";
import { ArrowLeft, Users, Calendar, MapPin } from "lucide-react";

const PresidentDetail = () => {
  const { id } = useParams();
  const president = presidentsData.find(p => p.id === id);

  if (!president) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold text-foreground">President not found</h1>
          <Link to="/">
            <Button className="mt-4">Return to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="outline" className="mb-6 group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Presidents
          </Button>
        </Link>

        {/* Hero Section */}
        <Card className="mb-8 p-8 bg-gradient-card shadow-glow border-2">
          <div className="flex items-start gap-8">
            <div className="w-48 h-48 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-elegant">
              <span className="text-8xl">👤</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <h1 className="text-4xl font-bold text-foreground">{president.name}</h1>
                <Badge variant="outline" className="bg-kenya-green text-kenya-green-foreground px-4 py-2 text-lg">
                  {president.term}
                </Badge>
              </div>
              <p className="text-xl text-muted-foreground mb-4">{president.title}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-kenya-green" />
                  <div>
                    <p className="text-sm text-muted-foreground">Term Period</p>
                    <p className="font-medium">{president.termStart} - {president.termEnd}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-kenya-green" />
                  <div>
                    <p className="text-sm text-muted-foreground">Cabinet Size</p>
                    <p className="font-medium">{president.cabinet.length} Members</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-kenya-green" />
                  <div>
                    <p className="text-sm text-muted-foreground">Major Projects</p>
                    <p className="font-medium">{president.projects.length} Initiated</p>
                  </div>
                </div>
              </div>
              {president.biography && (
                <p className="text-muted-foreground leading-relaxed">{president.biography}</p>
              )}
            </div>
          </div>
        </Card>

        {/* Detailed Tabs */}
        <Tabs defaultValue="cabinet" className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-8">
            <TabsTrigger value="cabinet">Cabinet</TabsTrigger>
            <TabsTrigger value="economy">Economy</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="corruption">Cases</TabsTrigger>
            <TabsTrigger value="budget">Budget</TabsTrigger>
            <TabsTrigger value="changes">Changes</TabsTrigger>
          </TabsList>
          
          <TabsContent value="cabinet" className="space-y-6">
            <h2 className="text-2xl font-bold text-kenya-green mb-6">Presidential Cabinet</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {president.cabinet.map((member, index) => (
                <Card key={index} className="p-4 hover:shadow-card transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">{member.name.charAt(0)}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">{member.name}</h4>
                      <p className="text-sm text-kenya-green font-medium">{member.position}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge variant="outline" className="text-xs">
                          {member.startDate}
                        </Badge>
                        {member.endDate && (
                          <Badge variant="secondary" className="text-xs">
                            Ended: {member.endDate}
                          </Badge>
                        )}
                      </div>
                      {member.reason && (
                        <p className="text-xs text-muted-foreground mt-1">
                          Reason: {member.reason}
                        </p>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="economy">
            <EconomicIndicators data={president.economicData} />
          </TabsContent>
          
          <TabsContent value="projects">
            <ProjectsSection projects={president.projects} />
          </TabsContent>
          
          <TabsContent value="corruption">
            <CorruptionCases cases={president.corruptionCases} />
          </TabsContent>
          
          <TabsContent value="budget">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-kenya-green">Annual Budgets</h3>
                <div className="space-y-3">
                  {president.budgets.map((budget, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                      <span className="font-medium">{budget.year}</span>
                      <span className="font-bold text-kenya-green">KSh {budget.amount}</span>
                    </div>
                  ))}
                </div>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-kenya-red">KRA Collections</h3>
                <div className="space-y-3">
                  {president.kraCollections.map((collection, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                      <span className="font-medium">{collection.year}</span>
                      <span className="font-bold text-kenya-red">KSh {collection.amount}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="changes">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-kenya-green">Cabinet Changes Timeline</h3>
              <div className="space-y-4">
                {president.cabinetChanges.map((change, index) => (
                  <div key={index} className="border-l-4 border-kenya-green pl-4 py-2">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge 
                        variant={change.type === 'dismissal' ? 'destructive' : 'default'}
                        className="capitalize"
                      >
                        {change.type}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{change.date}</span>
                    </div>
                    <p className="font-medium mb-2">{change.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {change.members.map((member, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {member}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PresidentDetail;