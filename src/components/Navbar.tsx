import { useState } from "react";
import { Menu, X, ShoppingBag, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="font-heading text-2xl lg:text-3xl font-bold tracking-tight text-foreground">
            FASO<span className="text-primary">MODE</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#" className="font-body text-sm font-medium tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors">
              Femmes
            </a>
            <a href="#" className="font-body text-sm font-medium tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors">
              Hommes
            </a>
            <a href="#" className="font-body text-sm font-medium tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors">
              Découvrir
            </a>
            <a href="#" className="font-body text-sm font-medium tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors">
              Boutiques
            </a>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="text-foreground">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-foreground">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-foreground relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-primary text-primary-foreground text-[10px] flex items-center justify-center font-medium">
                0
              </span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-foreground"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            <a href="#" className="font-body text-lg font-medium tracking-wider uppercase text-foreground py-2">Femmes</a>
            <a href="#" className="font-body text-lg font-medium tracking-wider uppercase text-foreground py-2">Hommes</a>
            <a href="#" className="font-body text-lg font-medium tracking-wider uppercase text-foreground py-2">Découvrir</a>
            <a href="#" className="font-body text-lg font-medium tracking-wider uppercase text-foreground py-2">Boutiques</a>
            <Button className="mt-4 w-full bg-primary text-primary-foreground">
              Ouvrir ma boutique
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
