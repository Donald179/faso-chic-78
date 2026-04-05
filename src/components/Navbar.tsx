import { useState } from "react";
import { Menu, X, ShoppingBag, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="font-heading text-2xl lg:text-3xl font-bold tracking-tight text-foreground">
            FASO<span className="text-primary">MODE</span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <Link to="/shop" className="font-body text-sm font-medium tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors">
              Boutique
            </Link>
            <Link to="/shop?cat=femmes" className="font-body text-sm font-medium tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors">
              Femmes
            </Link>
            <Link to="/shop?cat=hommes" className="font-body text-sm font-medium tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors">
              Hommes
            </Link>
            <Link to="/shop?cat=accessoires" className="font-body text-sm font-medium tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors">
              Accessoires
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-foreground">
              <Search className="h-5 w-5" />
            </Button>
            <Link to="/auth">
              <Button variant="ghost" size="icon" className="text-foreground">
                <User className="h-5 w-5" />
              </Button>
            </Link>
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

      {isOpen && (
        <div className="lg:hidden bg-card border-t border-border animate-fade-in">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            <Link to="/shop" className="font-body text-lg font-medium text-foreground py-2" onClick={() => setIsOpen(false)}>Boutique</Link>
            <Link to="/shop?cat=femmes" className="font-body text-lg font-medium text-foreground py-2" onClick={() => setIsOpen(false)}>Femmes</Link>
            <Link to="/shop?cat=hommes" className="font-body text-lg font-medium text-foreground py-2" onClick={() => setIsOpen(false)}>Hommes</Link>
            <Link to="/shop?cat=accessoires" className="font-body text-lg font-medium text-foreground py-2" onClick={() => setIsOpen(false)}>Accessoires</Link>
            <Link to="/auth" onClick={() => setIsOpen(false)}>
              <Button className="mt-4 w-full">Créer ma boutique</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
