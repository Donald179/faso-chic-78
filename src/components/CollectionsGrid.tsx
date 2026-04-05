import collectionWomen from "@/assets/collection-women.jpg";
import collectionMen from "@/assets/collection-men.jpg";
import collectionAccessories from "@/assets/collection-accessories.jpg";

const categories = [
  { title: "Femmes", subtitle: "Robes, tops & ensembles", image: collectionWomen },
  { title: "Hommes", subtitle: "Costumes, chemises & casual", image: collectionMen },
  { title: "Accessoires", subtitle: "Bijoux, sacs & plus", image: collectionAccessories },
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
          {categories.map((cat, i) => (
            <a
              key={cat.title}
              href="#"
              className="group relative overflow-hidden aspect-[3/4] rounded-sm"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <img
                src={cat.image}
                alt={cat.title}
                loading="lazy"
                width={600}
                height={800}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <h3 className="font-heading text-2xl lg:text-3xl font-bold text-sand mb-1">
                  {cat.title}
                </h3>
                <p className="font-body text-sm text-sand/70 tracking-wide">
                  {cat.subtitle}
                </p>
                <div className="mt-4 h-[1px] w-0 bg-gold transition-all duration-500 group-hover:w-full" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsGrid;
