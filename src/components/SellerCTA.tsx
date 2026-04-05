import { Store, TrendingUp, CreditCard, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { icon: Store, title: "Créez votre boutique", desc: "Ouvrez votre espace de vente en quelques minutes et atteignez des milliers de clients." },
  { icon: TrendingUp, title: "Tableau de bord vendeur", desc: "Suivez vos ventes, vues et revenus en temps réel avec des statistiques détaillées." },
  { icon: CreditCard, title: "Paiement mobile", desc: "Orange Money, Mobicash et cartes bancaires — adapté au marché burkinabè." },
  { icon: Globe, title: "Visibilité nationale", desc: "Touchez des acheteurs dans tout le Burkina Faso et en Afrique de l'Ouest." },
];

const SellerCTA = () => {
  return (
    <section className="py-20 lg:py-28 bg-earth text-earth-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-body text-sm tracking-[0.25em] uppercase text-gold mb-3">
            Pour les vendeurs
          </p>
          <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-6">
            Vendez sur <span className="text-gold italic">FasoMode</span>
          </h2>
          <p className="font-body text-base text-earth-foreground/70">
            Rejoignez la première marketplace de mode du Burkina Faso. Créez votre boutique, publiez vos créations et touchez une audience nationale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
          {features.map((f) => (
            <div key={f.title} className="text-center">
              <div className="w-14 h-14 rounded-full bg-gold/15 flex items-center justify-center mx-auto mb-5">
                <f.icon className="h-6 w-6 text-gold" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">{f.title}</h3>
              <p className="font-body text-sm text-earth-foreground/60 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-gold text-gold-foreground px-10 py-6 font-body text-sm tracking-wider uppercase font-medium hover:bg-gold/90 transition-all">
            Ouvrir ma boutique gratuitement
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SellerCTA;
