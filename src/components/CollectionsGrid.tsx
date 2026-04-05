import catWomen from "@/assets/cat-women.jpg";
import catMen from "@/assets/cat-men.jpg";
import catAccessories from "@/assets/cat-accessories.jpg";
import { Link } from "react-router-dom";

const categories = [
  { title: "Femmes", subtitle: "Robes, tops & ensembles", image: catWomen, link: "/shop?cat=femmes" },
  { title: "Hommes", subtitle: "Costumes, chemises & casual", image: catMen, link: "/shop?cat=hommes" },
  { title: "Accessoires", subtitle: "Bijoux, sacs & plus", image: catAccessories, link: "/shop?cat=accessoires" },
];

const CollectionsGrid = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-body text-sm tracking-[0.25em] uppercase text-primary mb-3">
            Collections
          </p>
          <h2 className="font-heading text-3xl lg:text-5xl font-bold text-foreground">
            Explorer par catégorie
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              to={cat.link}
              className="group relative overflow-hidden aspect-[3/4] rounded-lg"
            >
              <img
                src={cat.image}
                alt={cat.title}
                loading="lazy"
                width={600}
                height={800}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <h3 className="font-heading text-2xl lg:text-3xl font-bold text-dark-foreground mb-1">
                  {cat.title}
                </h3>
                <p className="font-body text-sm text-dark-foreground/70 tracking-wide">
                  {cat.subtitle}
                </p>
                <div className="mt-4 h-[2px] w-0 bg-primary transition-all duration-500 group-hover:w-full rounded-full" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsGrid;
