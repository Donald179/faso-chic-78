import heroImg from "@/assets/hero-new.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Mode africaine moderne"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/50 to-transparent" />
      </div>

      <div className="relative container mx-auto px-4 lg:px-8 pt-20">
        <div className="max-w-xl">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4 animate-fade-up opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            Marketplace Mode — Burkina Faso
          </p>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-extrabold text-dark-foreground leading-[1.08] mb-6 animate-fade-up opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            Crée ta boutique.<br />
            <span className="text-primary">Vends ton style.</span>
          </h1>
          <p className="font-body text-base lg:text-lg text-dark-foreground/70 max-w-md mb-8 animate-fade-up opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            La première plateforme e-commerce de mode africaine. Lance ta marque, touche des milliers de clients au Burkina Faso.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-up opacity-0" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
            <Link to="/auth">
              <Button size="lg" className="px-8 py-6 text-sm tracking-wider uppercase font-heading font-semibold rounded-lg">
                Créer ma boutique
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/shop">
              <Button size="lg" variant="outline" className="border-dark-foreground/30 text-dark-foreground px-8 py-6 text-sm tracking-wider uppercase font-heading font-semibold hover:bg-dark-foreground/10 rounded-lg">
                Explorer les collections
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
