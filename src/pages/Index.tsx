import { useState } from "react";
import { Header } from "@/components/Header";
import { PresidentCard } from "@/components/PresidentCard";
import { VideoArchive } from "@/components/VideoArchive";
import { presidentsData } from "@/data/presidents";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [activeTab, setActiveTab] = useState<'presidents' | 'videos'>('presidents');

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center mb-8">
          <div className="flex gap-4">
            <Button
              variant={activeTab === 'presidents' ? 'default' : 'outline'}
              onClick={() => setActiveTab('presidents')}
              className="bg-kenya-green hover:bg-kenya-green/90"
            >
              Presidential Timeline
            </Button>
            <Button
              variant={activeTab === 'videos' ? 'default' : 'outline'}
              onClick={() => setActiveTab('videos')}
              className="bg-kenya-green hover:bg-kenya-green/90"
            >
              Video Archive
            </Button>
          </div>
        </div>

        {activeTab === 'presidents' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Kenya's Presidential Legacy
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Comprehensive analysis of Kenya's presidents, their economic impact, major projects, 
                and accountability records. Data organized chronologically from most recent to historical.
              </p>
            </div>
            
            {presidentsData.map((president, index) => (
              <PresidentCard key={index} president={president} />
            ))}
          </div>
        )}

        {activeTab === 'videos' && <VideoArchive />}
      </div>
    </div>
  );
};

export default Index;
