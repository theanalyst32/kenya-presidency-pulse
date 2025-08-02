import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { President } from "@/types/president";

interface PresidentCardProps {
  president: President;
}

export const PresidentCard = ({ president }: PresidentCardProps) => {
  return (
    <Card className="mb-8 p-6 border-2 border-border hover:shadow-glow transition-all duration-300 bg-gradient-card animate-fade-in group">
      <div className="flex items-start gap-6 mb-6">
        <div className="w-32 h-32 rounded-xl bg-gradient-primary flex items-center justify-center shadow-card group-hover:shadow-glow transition-all duration-300">
          <span className="text-6xl">👤</span>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <h2 className="text-3xl font-bold text-foreground group-hover:text-kenya-green transition-colors">
              {president.name}
            </h2>
            <Badge variant="outline" className="bg-kenya-green text-kenya-green-foreground px-3 py-1 text-sm">
              {president.term}
            </Badge>
          </div>
          <p className="text-muted-foreground text-lg mb-3">{president.title}</p>
          <p className="text-sm text-muted-foreground mb-4">
            Term: {president.termStart} - {president.termEnd}
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center p-3 bg-white/50 rounded-lg">
              <p className="text-2xl font-bold text-kenya-green">{president.projects.length}</p>
              <p className="text-xs text-muted-foreground">Major Projects</p>
            </div>
            <div className="text-center p-3 bg-white/50 rounded-lg">
              <p className="text-2xl font-bold text-kenya-red">{president.corruptionCases.length}</p>
              <p className="text-xs text-muted-foreground">Corruption Cases</p>
            </div>
            <div className="text-center p-3 bg-white/50 rounded-lg">
              <p className="text-2xl font-bold text-primary">{president.budgets.length}</p>
              <p className="text-xs text-muted-foreground">Annual Budgets</p>
            </div>
            <div className="text-center p-3 bg-white/50 rounded-lg">
              <p className="text-2xl font-bold text-accent">{president.cabinet.length}</p>
              <p className="text-xs text-muted-foreground">Cabinet Members</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <Link to={`/president/${president.id}`}>
          <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-white px-8 py-3">
            View Detailed Profile →
          </Button>
        </Link>
      </div>
    </Card>
  );
};