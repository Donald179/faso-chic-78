import heroWoman from "@/assets/hero-woman.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroWoman}
          alt="Mode africaine élégante"
          width={1920}
          height={1080}
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 lg:px-8 pb-16 lg:pb-24 pt-32">
        <div className="max-w-2xl">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-sand mb-4 animate-fade-up opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            Nouvelle collection 2026
          </p>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-sand leading-[1.1] mb-6 animate-fade-up opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            L'Élégance<br />
            <span className="text-gold italic">Africaine</span>
          </h1>
          <p className="font-body text-base lg:text-lg text-sand/80 max-w-md mb-8 animate-fade-up opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            Découvrez une mode qui célèbre l'héritage culturel du Burkina Faso avec une touche contemporaine.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-up opacity-0" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
            <Button size="lg" className="bg-primary text-primary-foreground px-8 py-6 text-sm tracking-wider uppercase font-body font-medium hover:bg-primary/90 transition-all">
              Explorer la collection
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-sand/50 text-sand px-8 py-6 text-sm tracking-wider uppercase font-body font-medium hover:bg-sand/10 transition-all">
              Ouvrir ma boutique
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
