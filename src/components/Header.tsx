import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="bg-gradient-hero text-white py-8 border-b-4 border-white/20 shadow-elegant">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="group">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all">
                <span className="text-2xl">🇰🇪</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold">Kenya Presidency Pulse</h1>
                <p className="text-white/80 mt-1">Transparency in Leadership</p>
              </div>
            </div>
          </Link>
          <nav className="flex gap-3">
            <Link to="/">
              <Button 
                variant={isActive('/') ? 'secondary' : 'outline'} 
                className="border-white/30 text-white hover:bg-white/20 hover:text-white transition-all"
              >
                Presidents
              </Button>
            </Link>
            <Link to="/videos">
              <Button 
                variant={isActive('/videos') ? 'secondary' : 'outline'} 
                className="border-white/30 text-white hover:bg-white/20 hover:text-white transition-all"
              >
                Video Archive
              </Button>
            </Link>
            <Link to="/economic-data">
              <Button 
                variant={isActive('/economic-data') ? 'secondary' : 'outline'} 
                className="border-white/30 text-white hover:bg-white/20 hover:text-white transition-all"
              >
                Economic Data
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};