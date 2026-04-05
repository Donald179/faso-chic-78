import { Instagram, Facebook, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-dark-foreground py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          <div>
            <h3 className="font-heading text-2xl font-bold mb-4">
              FASO<span className="text-primary">MODE</span>
            </h3>
            <p className="font-body text-sm text-dark-foreground/60 leading-relaxed mb-6">
              La marketplace de mode africaine du Burkina Faso. Élégance, authenticité et modernité.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-9 h-9 rounded-full border border-dark-foreground/20 flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-dark-foreground/20 flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-dark-foreground/20 flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-body text-sm font-semibold tracking-wider uppercase mb-5">Boutique</h4>
            <ul className="space-y-3">
              <li><Link to="/shop?cat=femmes" className="font-body text-sm text-dark-foreground/60 hover:text-primary transition-colors">Femmes</Link></li>
              <li><Link to="/shop?cat=hommes" className="font-body text-sm text-dark-foreground/60 hover:text-primary transition-colors">Hommes</Link></li>
              <li><Link to="/shop?cat=accessoires" className="font-body text-sm text-dark-foreground/60 hover:text-primary transition-colors">Accessoires</Link></li>
              <li><Link to="/shop" className="font-body text-sm text-dark-foreground/60 hover:text-primary transition-colors">Nouveautés</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-body text-sm font-semibold tracking-wider uppercase mb-5">Informations</h4>
            <ul className="space-y-3">
              <li><a href="#" className="font-body text-sm text-dark-foreground/60 hover:text-primary transition-colors">À propos</a></li>
              <li><a href="#" className="font-body text-sm text-dark-foreground/60 hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="font-body text-sm text-dark-foreground/60 hover:text-primary transition-colors">Livraison</a></li>
              <li><a href="#" className="font-body text-sm text-dark-foreground/60 hover:text-primary transition-colors">Retours</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-body text-sm font-semibold tracking-wider uppercase mb-5">Vendeurs</h4>
            <ul className="space-y-3">
              <li><Link to="/auth" className="font-body text-sm text-dark-foreground/60 hover:text-primary transition-colors">Ouvrir une boutique</Link></li>
              <li><Link to="/dashboard" className="font-body text-sm text-dark-foreground/60 hover:text-primary transition-colors">Tableau de bord</Link></li>
              <li><a href="#" className="font-body text-sm text-dark-foreground/60 hover:text-primary transition-colors">Guide vendeur</a></li>
              <li><a href="#" className="font-body text-sm text-dark-foreground/60 hover:text-primary transition-colors">Conditions</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-dark-foreground/40">
            © 2026 FasoMode. Tous droits réservés. Ouagadougou, Burkina Faso.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-body text-xs text-dark-foreground/40 hover:text-primary transition-colors">Conditions</a>
            <a href="#" className="font-body text-xs text-dark-foreground/40 hover:text-primary transition-colors">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
