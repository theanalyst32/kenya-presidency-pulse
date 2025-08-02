import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

interface Video {
  id: string;
  title: string;
  description: string;
  url: string;
  type: 'youtube' | 'hosted';
  president: string;
  year: string;
  category: string;
}

export const VideoArchive = () => {
  const [videos, setVideos] = useState<Video[]>([
    {
      id: '1',
      title: 'Presidential Inauguration Speech',
      description: 'Complete inauguration ceremony and speech',
      url: 'https://youtube.com/watch?v=example',
      type: 'youtube',
      president: 'William Ruto',
      year: '2022',
      category: 'Inauguration'
    }
  ]);

  const [newVideo, setNewVideo] = useState({
    title: '',
    description: '',
    url: '',
    type: 'youtube' as 'youtube' | 'hosted',
    president: '',
    year: '',
    category: ''
  });

  const addVideo = () => {
    if (newVideo.title && newVideo.url) {
      const video: Video = {
        id: Date.now().toString(),
        ...newVideo
      };
      setVideos([...videos, video]);
      setNewVideo({
        title: '',
        description: '',
        url: '',
        type: 'youtube',
        president: '',
        year: '',
        category: ''
      });
    }
  };

  const getVideoEmbed = (url: string, type: string) => {
    if (type === 'youtube') {
      const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)?.[1];
      return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
    }
    return url;
  };

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4 text-kenya-green">Add New Video</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <Input
            placeholder="Video Title"
            value={newVideo.title}
            onChange={(e) => setNewVideo({...newVideo, title: e.target.value})}
          />
          <Input
            placeholder="Video URL"
            value={newVideo.url}
            onChange={(e) => setNewVideo({...newVideo, url: e.target.value})}
          />
          <Input
            placeholder="President"
            value={newVideo.president}
            onChange={(e) => setNewVideo({...newVideo, president: e.target.value})}
          />
          <Input
            placeholder="Year"
            value={newVideo.year}
            onChange={(e) => setNewVideo({...newVideo, year: e.target.value})}
          />
          <Input
            placeholder="Category"
            value={newVideo.category}
            onChange={(e) => setNewVideo({...newVideo, category: e.target.value})}
          />
          <select
            className="px-3 py-2 border border-input rounded-md"
            value={newVideo.type}
            onChange={(e) => setNewVideo({...newVideo, type: e.target.value as 'youtube' | 'hosted'})}
          >
            <option value="youtube">YouTube</option>
            <option value="hosted">Self Hosted</option>
          </select>
        </div>
        <Input
          placeholder="Description"
          value={newVideo.description}
          onChange={(e) => setNewVideo({...newVideo, description: e.target.value})}
          className="mb-4"
        />
        <Button onClick={addVideo} className="bg-kenya-green hover:bg-kenya-green/90">
          Add Video
        </Button>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {videos.map((video) => (
          <Card key={video.id} className="p-4">
            <div className="aspect-video mb-4 bg-muted rounded-lg overflow-hidden">
              {video.type === 'youtube' ? (
                <iframe
                  src={getVideoEmbed(video.url, video.type)}
                  className="w-full h-full"
                  allowFullScreen
                  title={video.title}
                />
              ) : (
                <video
                  src={video.url}
                  controls
                  className="w-full h-full"
                  title={video.title}
                />
              )}
            </div>
            <div className="space-y-2">
              <div className="flex items-start justify-between">
                <h4 className="font-semibold">{video.title}</h4>
                <Badge variant="outline">{video.type}</Badge>
              </div>
              <p className="text-sm text-muted-foreground">{video.description}</p>
              <div className="flex gap-2 text-xs">
                <Badge variant="secondary">{video.president}</Badge>
                <Badge variant="secondary">{video.year}</Badge>
                <Badge variant="secondary">{video.category}</Badge>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};