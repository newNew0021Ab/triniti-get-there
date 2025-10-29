import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";

const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-4">
        <div className="mb-8">
          <h1 className="text-6xl font-bold mb-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            TRINITI
          </h1>
          <p className="text-xl text-muted-foreground">Торгово-развлекательный комплекс</p>
        </div>
        
        <Link to="/how-to-get-there">
          <Button size="lg" className="bg-primary hover:bg-primary/90 group">
            <MapPin className="w-5 h-5 mr-2" />
            Как добраться
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
