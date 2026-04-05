import heroMan from "@/assets/hero-man.jpg";
import collectionWomen from "@/assets/collection-women.jpg";
import { Heart } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: string;
  boutique: string;
  image: string;
}

const products: Product[] = [
  { id: 1, name: "Ensemble Ankara Doré", price: "25 000 FCFA", boutique: "Atelier Sira", image: heroMan },
  { id: 2, name: "Robe Wax Contemporaine", price: "18 500 FCFA", boutique: "Faso Couture", image: collectionWomen },
  { id: 3, name: "Costume Sahel Modern", price: "45 000 FCFA", boutique: "Ouaga Style", image: heroMan },
  { id: 4, name: "Top Bogolan Chic", price: "12 000 FCFA", boutique: "Mode BF", image: collectionWomen },
];

const ProductCard = ({ product }: { product: Product }) => (
  <div className="group cursor-pointer">
    <div className="relative overflow-hidden aspect-[3/4] rounded-sm bg-muted mb-4">
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        width={400}
        height={533}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <button className="absolute top-4 right-4 w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <Heart className="h-4 w-4 text-foreground" />
      </button>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="w-full py-2.5 bg-background/90 backdrop-blur-sm text-foreground font-body text-xs tracking-wider uppercase rounded-sm hover:bg-background transition-colors">
          Ajouter au panier
        </button>
      </div>
    </div>
    <div>
      <p className="font-body text-xs text-primary tracking-wider uppercase mb-1">{product.boutique}</p>
      <h3 className="font-body text-sm font-medium text-foreground mb-1">{product.name}</h3>
      <p className="font-body text-sm font-semibold text-foreground">{product.price}</p>
    </div>
  </div>
);

const TrendingProducts = () => {
  return (
    <section className="py-20 lg:py-28 bg-warm-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="font-body text-sm tracking-[0.25em] uppercase text-primary mb-3">
              Tendances
            </p>
            <h2 className="font-heading text-3xl lg:text-5xl font-bold text-foreground">
              Les plus populaires
            </h2>
          </div>
          <a href="#" className="hidden md:block font-body text-sm tracking-wider uppercase text-primary hover:text-accent transition-colors border-b border-primary pb-1">
            Voir tout
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
