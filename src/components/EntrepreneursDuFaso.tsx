import entrepreneur1 from "@/assets/entrepreneur-1.jpg";
import entrepreneur2 from "@/assets/entrepreneur-2.jpg";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const stories = [
  {
    name: "Fatou Ouédraogo",
    title: "Créatrice à Bobo-Dioulasso",
    story: "De couturière dans son quartier à vendeuse nationale grâce à FasoMode. Fatou habille aujourd'hui des centaines de femmes.",
    image: entrepreneur1,
  },
  {
    name: "Abdoulaye Kaboré",
    title: "Designer à Ouagadougou",
    story: "Passionné de mode masculine, il a lancé sa marque sur FasoMode et touche désormais des clients dans tout le pays.",
    image: entrepreneur2,
  },
];

const EntrepreneursDuFaso = () => {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-body text-sm tracking-[0.25em] uppercase text-primary mb-3">
            🔥 Entrepreneurs du Faso
          </p>
          <h2 className="font-heading text-3xl lg:text-5xl font-bold text-foreground">
            Ils créent, ils vendent,<br />ils inspirent
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {stories.map((s) => (
            <div key={s.name} className="bg-background rounded-xl overflow-hidden shadow-sm border border-border group hover:shadow-md transition-shadow">
              <div className="h-64 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.name}
                  loading="lazy"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-1">{s.name}</h3>
                <p className="font-body text-sm text-primary font-medium mb-3">{s.title}</p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.story}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/auth">
            <Button size="lg" className="px-10 py-6 font-heading text-sm tracking-wider uppercase font-semibold rounded-lg">
              Rejoindre la communauté
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EntrepreneursDuFaso;
