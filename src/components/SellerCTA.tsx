import { Store, TrendingUp, CreditCard, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const features = [
  { icon: Store, title: "Créez votre boutique", desc: "Ouvrez votre espace de vente en quelques minutes et atteignez des milliers de clients." },
  { icon: TrendingUp, title: "Tableau de bord", desc: "Suivez vos ventes, vues et revenus en temps réel avec des statistiques détaillées." },
  { icon: CreditCard, title: "Paiement mobile", desc: "Orange Money, Moov Money et cartes bancaires — adapté au marché burkinabè." },
  { icon: Globe, title: "Visibilité nationale", desc: "Touchez des acheteurs dans tout le Burkina Faso et en Afrique de l'Ouest." },
];

const SellerCTA = () => {
  return (
    <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-body text-sm tracking-[0.25em] uppercase text-primary-foreground/70 mb-3">
            Pour les vendeurs
          </p>
          <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-6">
            Vendez sur FasoMode
          </h2>
          <p className="font-body text-base text-primary-foreground/70">
            Rejoignez la première marketplace de mode du Burkina Faso. Créez votre boutique et touchez une audience nationale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
          {features.map((f) => (
            <div key={f.title} className="text-center">
              <div className="w-14 h-14 rounded-xl bg-primary-foreground/15 flex items-center justify-center mx-auto mb-5">
                <f.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">{f.title}</h3>
              <p className="font-body text-sm text-primary-foreground/60 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/auth">
            <Button size="lg" className="bg-card text-foreground px-10 py-6 font-heading text-sm tracking-wider uppercase font-semibold hover:bg-card/90 rounded-lg">
              Ouvrir ma boutique gratuitement
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SellerCTA;
