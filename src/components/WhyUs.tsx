import { Smartphone, Truck, Users, Shield } from "lucide-react";

const features = [
  { icon: Smartphone, title: "Paiement Mobile Money", desc: "Orange Money, Moov Money et cartes bancaires — adapté au marché burkinabè." },
  { icon: Truck, title: "Livraison rapide", desc: "Livraison dans tout le Burkina Faso avec suivi en temps réel de vos commandes." },
  { icon: Users, title: "Entrepreneurs locaux", desc: "Plateforme créée pour soutenir les créateurs de mode du Burkina Faso." },
  { icon: Shield, title: "Paiement sécurisé", desc: "Transactions protégées et garantie satisfaction sur tous vos achats." },
];

const WhyUs = () => {
  return (
    <section className="py-20 lg:py-28 bg-dark text-dark-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-body text-sm tracking-[0.25em] uppercase text-primary mb-3">
            Pourquoi nous choisir
          </p>
          <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-6">
            La mode africaine,<br /><span className="text-primary">simplifiée</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f) => (
            <div key={f.title} className="text-center group">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                <f.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">{f.title}</h3>
              <p className="font-body text-sm text-dark-foreground/60 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
