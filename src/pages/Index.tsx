import { Header } from "@/components/Header";
import { PresidentCard } from "@/components/PresidentCard";
import { presidentsData } from "@/data/presidents";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Kenya's Presidential Legacy
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Comprehensive analysis of Kenya's presidents, their economic impact, major projects, 
            corruption cases, and cabinet changes. Transparency and accountability in democratic governance.
          </p>
        </div>
        
        <div className="space-y-12">
          {presidentsData.map((president, index) => (
            <div key={president.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <PresidentCard president={president} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
