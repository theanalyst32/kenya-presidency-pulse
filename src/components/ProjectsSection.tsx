import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Project } from "@/types/president";

interface ProjectsSectionProps {
  projects: Project[];
}

export const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'bg-kenya-green text-kenya-green-foreground';
      case 'ongoing':
        return 'bg-yellow-500 text-white';
      case 'stalled':
        return 'bg-kenya-red text-kenya-red-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="space-y-4">
      {projects.map((project, index) => (
        <Card key={index} className="p-4">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h4 className="font-semibold text-lg">{project.name}</h4>
              <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
            </div>
            <Badge className={getStatusColor(project.status)}>
              {project.status}
            </Badge>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <span className="text-sm text-muted-foreground">Budget:</span>
              <p className="font-medium">KSh {project.budget}</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Started:</span>
              <p className="font-medium">{project.startDate}</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Expected Completion:</span>
              <p className="font-medium">{project.expectedCompletion}</p>
            </div>
          </div>
          
          <div className="mb-2">
            <div className="flex justify-between text-sm mb-1">
              <span>Progress</span>
              <span>{project.progress}%</span>
            </div>
            <Progress value={project.progress} className="h-2" />
          </div>
          
          {project.keyAchievements && (
            <div>
              <h5 className="font-medium text-sm mb-2">Key Achievements:</h5>
              <ul className="text-sm text-muted-foreground space-y-1">
                {project.keyAchievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-kenya-green mt-1">•</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Card>
      ))}
    </div>
  );
};