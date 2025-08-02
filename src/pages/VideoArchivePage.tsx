import { Header } from "@/components/Header";
import { VideoArchive } from "@/components/VideoArchive";

const VideoArchivePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Presidential Video Archive
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Historical speeches, events, and important moments from Kenya's presidential history. 
            Add YouTube links or upload your own videos to preserve our democratic heritage.
          </p>
        </div>
        
        <VideoArchive />
      </div>
    </div>
  );
};

export default VideoArchivePage;