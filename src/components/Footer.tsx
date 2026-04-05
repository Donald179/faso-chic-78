import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-sand py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-bold mb-4">
              FASO<span className="text-gold">MODE</span>
            </h3>
            <p className="font-body text-sm text-sand/60 leading-relaxed mb-6">
              La marketplace de mode africaine du Burkina Faso. Élégance, authenticité et modernité.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-9 h-9 rounded-full border border-sand/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-sand/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-sand/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-body text-sm font-semibold tracking-wider uppercase mb-5">Boutique</h4>
            <ul className="space-y-3">
              <li><a href="#" className="font-body text-sm text-sand/60 hover:text-gold transition-colors">Femmes</a></li>
              <li><a href="#" className="font-body text-sm text-sand/60 hover:text-gold transition-colors">Hommes</a></li>
              <li><a href="#" className="font-body text-sm text-sand/60 hover:text-gold transition-colors">Accessoires</a></li>
              <li><a href="#" className="font-body text-sm text-sand/60 hover:text-gold transition-colors">Nouveautés</a></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-body text-sm font-semibold tracking-wider uppercase mb-5">Informations</h4>
            <ul className="space-y-3">
              <li><a href="#" className="font-body text-sm text-sand/60 hover:text-gold transition-colors">À propos</a></li>
              <li><a href="#" className="font-body text-sm text-sand/60 hover:text-gold transition-colors">Contact</a></li>
              <li><a href="#" className="font-body text-sm text-sand/60 hover:text-gold transition-colors">Livraison</a></li>
              <li><a href="#" className="font-body text-sm text-sand/60 hover:text-gold transition-colors">Retours</a></li>
            </ul>
          </div>

          {/* Seller */}
          <div>
            <h4 className="font-body text-sm font-semibold tracking-wider uppercase mb-5">Vendeurs</h4>
            <ul className="space-y-3">
              <li><a href="#" className="font-body text-sm text-sand/60 hover:text-gold transition-colors">Ouvrir une boutique</a></li>
              <li><a href="#" className="font-body text-sm text-sand/60 hover:text-gold transition-colors">Tableau de bord</a></li>
              <li><a href="#" className="font-body text-sm text-sand/60 hover:text-gold transition-colors">Guide vendeur</a></li>
              <li><a href="#" className="font-body text-sm text-sand/60 hover:text-gold transition-colors">Conditions</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sand/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-sand/40">
            © 2026 FasoMode. Tous droits réservés. Ouagadougou, Burkina Faso.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-body text-xs text-sand/40 hover:text-gold transition-colors">Conditions</a>
            <a href="#" className="font-body text-xs text-sand/40 hover:text-gold transition-colors">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
