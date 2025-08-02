import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground py-6 border-b-4 border-kenya-red">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Kenya Presidency Pulse</h1>
            <p className="text-muted-foreground mt-2">Comprehensive analysis of Kenya's presidential legacy</p>
          </div>
          <nav className="flex gap-4">
            <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Presidents
            </Button>
            <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Video Archive
            </Button>
            <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Economic Data
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};